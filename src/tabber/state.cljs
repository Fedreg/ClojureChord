(ns tabber.state
    (:require [reagent.core :as reagent :refer [atom]]
                [tabber.chords :as chords]))
 
(defonce app-state (atom {:chords chords/chordList 
                            :key "A" 
                            :quality "All"
                            :showModal false
                            :index 1
                            :song '("Test Song" ("A" "m" 1) ("C" "M" 1) ("F" "M" 2) ("D" "m" 3) ("F" "M" 4) ("D" "M" 1))
                            :currentPage "Chord Charts"
                            :colors "dark"}))
                            ; :song [("A" "m" 1) ("C" "M" 1) ("F" "M" 2)]


