(ns tabber.state
    (:require [reagent.core :as reagent :refer [atom]]
                [tabber.chords :as chords]))
(def HeyJude '("Hey Jude" 
    ("X" "X" 4) ("D" "M" 4) ("A" "M" 4) ("A" "7" 4) ("D" "M" 4) ("G" "M" 4) ("D" "M" 4) ("A" "7" 4) ("D" "M" 4)
    ("D" "M" 4) ("A" "M" 4) ("A" "7" 4) ("D" "M" 4) ("G" "M" 4) ("D" "M" 4) ("A" "7" 4) ("D" "M" 4)))

(defonce app-state (atom {:chords chords/chordList 
                            :key "A" 
                            :beat 1
                            :quality "All"
                            :showModal false
                            :index 1
                            :song HeyJude 
                            :currentPage "Chord Charts"
                            :tempo 80
                            :colors "dark"}))


