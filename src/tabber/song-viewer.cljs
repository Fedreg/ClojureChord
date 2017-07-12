(ns tabber.songViewer
    (:require [tabber.state :as state]
              [tabber.colorThemes :as color]
              [tabber.chordChart :as chart]
              [reagent.core :as reagent :refer [cursor]]
              [clojure.string :as string]))

(enable-console-print!)

;----------------------------------
; Cursors
;----------------------------------

(def beat (cursor state/app-state [:beat]))
(def index (cursor state/app-state [:index]))
(def song (cursor state/app-state [:song]))
(def tempo (cursor state/app-state [:tempo]))
(def chords (cursor state/app-state [:chords]))

;----------------------------------
; Component Styles 
;----------------------------------

(def BeatCounterStyle 
    {:position "fixed" 
    :bottom "25px" 
    :left "25px" 
    :display "flex" 
    :fontSize "80px" })

(def CurrentChordStyle
    {:transform "scale(1.5)" :width "1vw" :margin "250px 0 0 20%"})

(def GetReadyStyle
    {:width "200px" :fontSize "30px" :color (color/ReturnColors :t1)})

(defn OnDeckChordStyle [upper]
    {:transform "scale(0.9)" 
    :position "fixed" 
    :top upper 
    :right "10%"})

(def SongTitleStyle
    {:color (color/ReturnColors :t1) 
    :position "fixed"
    :top "0"
    :left "50px"})

(def StartButtonStyle
    {:position "fixed" 
    :bottom "25px" 
    :left "calc(50% - 50px)"
    :background "none"
    :width "100px"
    :height "40px"
    :fontSize "24px"
    :color (color/ReturnColors :t1)
    :border "1px solid #777"})

(def TempoButtonStyle
    {:background "none" 
    :border "none" 
    :marginTop "-10px"
    :color (color/ReturnColors :t2)
    :fontSize "30px"})

(def TempoDisplayStyle
    {:position "fixed"
    :top "20px"
    :left "calc(50% - 100px)"
    :display "flex"
    :width "200px"
    :height "50px"
    :color  (color/ReturnColors :t2) 
    :justifyContent "space-between"
    :fontSize "30px"})

;---------------------------------------------
; Components
;---------------------------------------------

; (defn FormatSong []
;     (as-> (:rawSong @state/app-state) song
;         (string/split song #" ")
;         (apply list song)
;         (map (string.split song #"/") song)
;         (map (js/parseInt) (last song))
;         (print song)))

(defn Tempo []
    (->> @tempo 
        (/ 60)
        (* 1000)))

(defn StartBeatCounter []
    (let [numberOfBeats (inc (last (nth @song @index)))]
    (if (< @beat numberOfBeats)
        (js/setTimeout #((swap! state/app-state update-in [:beat] inc) (StartBeatCounter)) (Tempo))
        ((swap! state/app-state assoc-in [:beat] 1) (swap! state/app-state update-in [:index] inc) (StartBeatCounter)))))

(defn BeatCounter []
    @beat
    (let [range (->> (nth @song @index)
                    (last)
                    (inc)
                    (range 1))]
    [:div {:style BeatCounterStyle}
        (map 
            (fn [e] [:div {:style {:paddingLeft "20px" 
                                    :color (if (= e @beat) (color/ReturnColors :f1) (color/ReturnColors :t2) )}} e]) range)]))

(defn SongChordFilter [collection thisSong thisIndex]
	(let [key (first (nth thisSong thisIndex)) quality (second (nth thisSong thisIndex))]
		(filter #(and (= key (first %)) (= quality (second %))) collection)))

(defn CurrentChord []
    [:div {:style CurrentChordStyle}
        (if (= 1 @index)
            [:div {:style GetReadyStyle} "Get Ready!"]
		    (map chart/ChordChart (SongChordFilter @chords @song @index)))])

(defn OnDeckChord [num upper]
    [:div {:style (OnDeckChordStyle upper) }
			(if (< (+ num @index) (count @song))
				(map chart/ChordChart (SongChordFilter @chords @song (+ num @index)))
				"")])

(defn SongTitle []
    [:h1 {:style SongTitleStyle } 
         (nth @song 0)])

(defn StartButton []
    [:button {:on-click #(do (swap! state/app-state assoc-in [:index] 1) (StartBeatCounter)) 
            :style StartButtonStyle} "START"])

(defn TempoButton [operator]
    [:button {:onClick #(swap! state/app-state update-in [:tempo] operator 5 ) :style TempoButtonStyle} (if (= operator +) "+" "-")])

(defn TempoDisplay []
    [:div {:style TempoDisplayStyle }
        [TempoButton -]
        [:div "BPM: " @tempo]
        [TempoButton +]])
                
(defn SongPage []
	[:div
		[SongTitle]
        [TempoDisplay]
		[CurrentChord]
		[OnDeckChord 1 "100px"]
        [OnDeckChord 2 "300px"]
        [BeatCounter]
        [StartButton]])

