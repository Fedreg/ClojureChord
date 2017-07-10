(ns tabber.songViewer
    (:require [tabber.state :as state]
              [tabber.colorThemes :as color]
              [tabber.chordChart :as chart]))

(enable-console-print!)
(defn StartBeatCounter []
    (let [song (:song @state/app-state)
            beat (:beat @state/app-state)
            index (:index @state/app-state)
            numberOfBeats (->> (nth song index)
                            (last))]
    (print beat numberOfBeats index)
    (if (<= beat numberOfBeats)
        (js/setTimeout #((swap! state/app-state update-in [:beat] inc) (StartBeatCounter)) 1000)
        (swap! state/app-state assoc-in [:beat] 1))))

(defn StartSong []
    (let [song (:song @state/app-state)
            index (:index @state/app-state)]
	(if (< index (count song))
		(js/setTimeout #((swap! state/app-state update-in [:index] inc) (StartSong) (StartBeatCounter)) (* 1000 (last (nth song index)))))))

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
                    :fontSize "50px" }}
        (map 
            (fn [e] [:div {:style {:paddingLeft "10px" 
                                    :color (if (= e beat) (color/ReturnColors :f1) (color/ReturnColors :t2) )}} e]) range)]))

(defn SongChordFilter [collection song index]
	(let [key (first (nth song index)) quality (second (nth song index))]
		(filter #(and (= key (first %)) (= quality (second %))) collection)))

(defn CurrentChord []
    [:div {:style {:transform "scale(1.5)" :width "1vw" :margin "100px 0 0 20%"}}
			(map chart/ChordChart (SongChordFilter (:chords @state/app-state) (:song @state/app-state) (:index @state/app-state)))])

(defn OnDeckChord [num upper]
    [:div {:style {:transform "scale(0.9)" 
                    :position "fixed" 
                    :top upper 
                    :right "150px"}}
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
        [BeatCounter]
		[:button {:on-click #(do (swap! state/app-state assoc-in [:index] 1) (StartSong) (StartBeatCounter)) 
            :style {:position "fixed" 
                    :bottom "25px" 
                    :left "50%"}} "START"]])

