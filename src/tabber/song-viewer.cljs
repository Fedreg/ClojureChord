(ns tabber.songViewer
  (:require [tabber.state :as state]
            [tabber.colorThemes :as color]
            [tabber.chordChart :as chart]
            [clojure.string :as str]
            [cljs.spec.alpha :as s]))

(enable-console-print!)

;----------------------------------
; Specs
;----------------------------------

(s/def ::songInfo (s/tuple string? int? string?))

;----------------------------------
; Component Styles 
;----------------------------------

(def BeatCounterStyle
  {:position "fixed"
   :bottom "25px"
   :left "calc(50% - 150px)"
   :display "flex"
   :fontSize "80px"})

(def CurrentChordStyle
  {:zoom "1.5"
   :willChange "transform"
   :width "320px"
   :height "600px"
   :position "fixed"
   :top "120px"
   :left "calc(50% - 160px)"})

(defn GetReadyStyle []
  {:width "200px"
   :margin "70px 0 0 60px"
   :fontSize "30px"
   :color (color/ReturnColors :t1)})

(defn OnDeckChordStyle [upper]
  {:transform "scale(0.8)"
   :position "fixed"
   :top upper
   :right "20px"})

(def ChordPreviewListStyle
  {:position "fixed"
   :top "-150px"
   :left "-60px"
   :transform "scale(0.5)"
   :height "1000px"
   :padding "10px"
   :overflow "scroll"})

(defn SongTitleStyle []
  {:color (color/ReturnColors :t1)
   :position "fixed"
   :top "0"
   :left "50px"})

(defn StartButtonStyle []
  {:position "fixed"
   :bottom "25px"
   :right "50px"
   :background "none"
   :width "100px"
   :height "40px"
   :fontSize "24px"
   :color (if (= false @state/songPlaying) (color/ReturnColors :t1) (color/ReturnColors :t2))
   :border "1px solid #777"})

(defn TempoButtonStyle []
  {:background "none"
   :border "none"
   :marginTop "-10px"
   :color (color/ReturnColors :t2)
   :fontSize "30px"})

(defn TempoDisplayStyle []
  {:position "fixed"
   :top "20px"
   :left "calc(50% - 100px)"
   :display "flex"
   :width "200px"
   :height "50px"
   :color  (color/ReturnColors :t2)
   :zIndex "2"
   :justifyContent "space-between"
   :fontSize "30px"})

;---------------------------------------------
; Components
;---------------------------------------------

(defn FormatSong [songInfo]
  "Converts song data from [string int string] to list of chords, title, & tempo"
  (if (s/valid? ::songInfo songInfo)
    (do (state/UpdateState :SwitchSongTitle (first songInfo))
        (state/UpdateState :NewTempo (second songInfo))
        (->> songInfo
             (drop 2)
             (mapcat #(str/split % #" "))
             (filter #(not (str/blank? %)))
             (map #(str/split % #"/"))
             (cons ["X" "X" "4"])
             (state/UpdateState :SwitchSong)))
    (js/alert (str (first songInfo) " is not properly formatted!"))))

(defn Tempo []
  "Dynamically sets tempo in BPM based on song info."
  (->> @state/tempo
       (/ 60)
       (* 1000)))

(defn StartBeatCounter []
  "Initiates the beat counter and resets the counter to 1 at every new chord. Recursive"
  (when (= true @state/songPlaying)
    (let [numberOfBeats (->>
                         (nth @state/song @state/index)
                         (last)
                         (js/parseInt)
                         (inc))]
      (if (< @state/beat numberOfBeats)
        (js/setTimeout #((state/UpdateState :IncBeat) (StartBeatCounter)) (Tempo))
        ((state/UpdateState :ResetBeat) (state/UpdateState :IncIndex) (StartBeatCounter))))))

(defn BeatCounter []
  "Displays the beat count at the bottom of the page.  Determined dynamically per song chord."
  @state/beat
  (let [range (->> (nth @state/song @state/index)
                   (last)
                   (js/parseInt)
                   (inc)
                   (range 1))]
    [:div {:style BeatCounterStyle}
     (map
      (fn [e] [:div {:style {:paddingLeft "20px"
                             :color (if (= e @state/beat) (color/ReturnColors :f1) (color/ReturnColors :t2))}
                     :key (rand-int 1000)} e]) range)]))

(defn SongChordFilter [collection thisSong thisIndex]
  "Displays chords found in the song filtered from complete chord list."
  (let [key (first (nth thisSong thisIndex)) quality (second (nth thisSong thisIndex))]
    (filter #(and (= key (first %)) (= quality (second %))) collection)))

(defn ChordPreviewList []
  "Displays all chords found in song."
  (let [songChords (->> @state/song
                        (drop 2)
                        (map #(take 2 %))
                        (distinct)
                        (into #{}))]
    [:div {:style ChordPreviewListStyle} 
      (map chart/ChordChart (filter #(contains? songChords (take 2 %)) @state/chords))]))

(defn CurrentChord []
  [:div {:style CurrentChordStyle}
   (if (= 0 @state/index)
     [:div {:style (GetReadyStyle)} "Get Ready!"]
     (map chart/ChordChart (SongChordFilter @state/chords @state/song @state/index)))])

(defn OnDeckChord [num upper]
  @state/song
  [:div {:style (OnDeckChordStyle upper)}
   (if (< (+ num @state/index) (count @state/song))
     (map chart/ChordChart (SongChordFilter @state/chords @state/song (+ num @state/index)))
     "")])

(defn SongTitle []
  [:h1 {:style (SongTitleStyle)}
   @state/songTitle])

(defn StartButton []
  "Resets state to beginning of song and initiates beat counter."
  [:button {:on-click #(do
                         (state/UpdateState :ResetIndex)
                         (state/UpdateState :ResetBeat)
                         (state/UpdateState :PlaySong true)
                         (StartBeatCounter))
            :disabled (= true @state/songPlaying)
            :style (StartButtonStyle)} "START"])

(defn TempoButton [operator]
  "Draws plus or minus button to inc or dec tempo."
  [:button {:onClick #(state/UpdateState :AdjustTempo operator) :style (TempoButtonStyle)} (if (= operator +) "+" "-")])

(defn TempoDisplay []
  "Displays current tempo and buttons on top of the page."
  [:div {:style (TempoDisplayStyle)}
   [TempoButton -]
   [:div "BPM: " @state/tempo]
   [TempoButton +]])

(defn SongPage []
  [:div {:style {:position "relative" :display "flex" :align-items "center" :flexDirection "column"}}
   [SongTitle]
   [TempoDisplay]
   [CurrentChord]
   [OnDeckChord 1 "100px"]
   [OnDeckChord 2 "300px"]
   [BeatCounter]
   [ChordPreviewList]
   [StartButton]])
