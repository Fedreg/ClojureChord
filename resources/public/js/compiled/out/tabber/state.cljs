(ns tabber.state
    (:require [reagent.core :as reagent :refer [atom]]
                [tabber.chords :as chords]))
 
(defonce app-state (atom {:chords chords/chordList 
                            :key "A" 
                            :quality "All"
                            :showModal false
                            :colors "dark"}))


