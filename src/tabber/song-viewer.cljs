(ns tabber.songViewer
    (:require [tabber.state :as state]
              [tabber.colorThemes :as color]
              [tabber.chordChart :as chart]))

(enable-console-print!)

(defn Tempo []
    (->> (:tempo @state/app-state) 
        (/ 60)
        (* 1000)))
(print (Tempo))
(defn StartBeatCounter []
    (let [song (:song @state/app-state)
            beat (:beat @state/app-state)
            index (:index @state/app-state)
            numberOfBeats (->> (nth song index)
                            (last))]
    (if (<= beat numberOfBeats)
        (js/setTimeout #((swap! state/app-state update-in [:beat] inc) (StartBeatCounter)) (Tempo))
        (swap! state/app-state assoc-in [:beat] 1))))

(defn StartSong []
    (let [song (:song @state/app-state)
            index (:index @state/app-state)]
	(if (< index (count song))
		(js/setTimeout #((swap! state/app-state update-in [:index] inc) (StartSong) (StartBeatCounter)) (* (Tempo) (last (nth song index)))))))

(defn BeatCounter []
    (let [beat (:beat @state/app-state)
            index (:index @state/app-state)
            song (:song @state/app-state)
            range (->> (nth song index)
                    (last)
                    (inc)
                    (range 1))]
    [:div {:style {:position "fixed" 
                    :bottom "25px" 
                    :left "25px" 
                    :display "flex" 
                    :fontSize "80px" }}
        (map 
            (fn [e] [:div {:style {:paddingLeft "20px" 
                                    :color (if (= e beat) (color/ReturnColors :f1) (color/ReturnColors :t2) )}} e]) range)]))

(defn SongChordFilter [collection song index]
	(let [key (first (nth song index)) quality (second (nth song index))]
		(filter #(and (= key (first %)) (= quality (second %))) collection)))

(defn CurrentChord []
    [:div {:style {:transform "scale(1.5)" :width "1vw" :margin "250px 0 0 20%"}}
        (if (= 1 (:index @state/app-state))
            [:div {:style {:width "200px" :fontSize "30px" :color (color/ReturnColors :t1)}} "Get Ready!"]
		    (map chart/ChordChart (SongChordFilter (:chords @state/app-state) (:song @state/app-state) (:index @state/app-state))))])

(defn OnDeckChord [num upper]
    [:div {:style {:transform "scale(0.9)" 
                    :position "fixed" 
                    :top upper 
                    :right "10%"}}
			(if (< (+ num (:index @state/app-state)) (count(:song @state/app-state)))
				(map chart/ChordChart (SongChordFilter (:chords @state/app-state) (:song @state/app-state) (+ num (:index @state/app-state))))
				"")])
(defn SongTitle []
    [:h1 {:style {:color (color/ReturnColors :t1) 
                    :position "fixed"
                    :top "0"
                    :left "50px"}} 
         (nth (:song @state/app-state) 0)])

(defn StartButton []
    [:button {:on-click #(do (swap! state/app-state assoc-in [:index] 1) (StartSong) (StartBeatCounter)) 
            :style {:position "fixed" 
                    :bottom "25px" 
                    :left "calc(50% - 50px)"
                    :background "none"
                    :width "100px"
                    :height "40px"
                    :fontSize "24px"
                    :color (color/ReturnColors :t1)
                    :border "1px solid #777"}} "START"])

(defn TempoButton [operator]
    [:button {:onClick #(swap! state/app-state update-in [:tempo] operator 5 ) :style {:background "none" 
                                                                                            :border "none" 
                                                                                            :marginTop "-10px"
                                                                                            :color (color/ReturnColors :t2)
                                                                                            :fontSize "30px"}} (if (= operator +) "+" "-")])

(defn TempoDisplay []
    [:div {:style {:position "fixed"
                    :top "20px"
                    :left "calc(50% - 100px)"
                    :display "flex"
                    :width "200px"
                    :height "50px"
                    :color  (color/ReturnColors :t2) 
                    :justifyContent "space-between"
                    :fontSize "30px"}}
        [TempoButton -]
        [:div "BPM: " (:tempo @state/app-state)]
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

