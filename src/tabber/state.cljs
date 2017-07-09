(ns tabber.state
    (:require [reagent.core :as reagent :refer [atom]]
                [tabber.chords :as chords]))
 
(defonce app-state (atom {:chords chords/chordList 
                            :key "A" 
                            :quality "All"
                            :showModal false
                            :index 0
                            :song '(("A" "m" 1) ("C" "M" 1) ("F" "M" 2))
                            :currentPage "Chord Charts"
                            :colors "light"}))
                            ; :song [("A" "m" 1) ("C" "M" 1) ("F" "M" 2)]


