(ns tabber.songViewer
    (:require [tabber.state :as state]
              [tabber.colorThemes :as color]
              [tabber.chordChart :as chart]))

(defn StartSong []
	(if (< (:index @state/app-state) (count (:song @state/app-state)))
		(js/setTimeout #((swap! state/app-state update-in [:index] inc) (StartSong)) (* 1000 (last (nth (:song @state/app-state) (:index @state/app-state)))))))

(defn StartCounter [])

(defn SongChordFilter [collection song index]
	(let [key (first (nth song index)) quality (second (nth song index))]
		(filter #(and (= key (first %)) (= quality (second %))) collection)))

(defn CurrentChord []
    [:div {:style {:transform "scale(1.5)" :width "1vw" :margin "100px 0 0 20%"}}
			(map chart/ChordChart (SongChordFilter (:chords @state/app-state) (:song @state/app-state) (:index @state/app-state)))])

(defn OnDeckChord [num upper]
    [:div {:style {:transform "scale(0.5)" :position "fixed" :top upper :right "50px"}}
			(if (< (+ num (:index @state/app-state)) (count(:song @state/app-state)))
				(map chart/ChordChart (SongChordFilter (:chords @state/app-state) (:song @state/app-state) (+ num (:index @state/app-state))))
				"")])

(defn SongPage []
	[:div
		[:h1 {:style {:color (color/ReturnColors :t1)}} (nth (:song @state/app-state) 0)]
		[:h3 str (:index @state/app-state) (:start @state/app-state)]
		[CurrentChord]
		[OnDeckChord 1 "100px"]
        [OnDeckChord 2 "300px"]
		[:button {:on-click #(do (swap! state/app-state assoc-in [:index] 1) (StartSong) (StartCounter)) :style {:position "fixed" :bottom "25px" :left "50%"}} "START"]])
