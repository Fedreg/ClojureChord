(ns tabber.state
    (:require [reagent.core :as reagent :refer [atom cursor]]
                [clojure.string :as str]
                [tabber.songs :as songs]
                [tabber.chords :as chords]))


(def InitSong '(["X" "X" 4]
    ["D" "M" "4"] ["A" "M" "4"] ["A" "7" "4"] ["D" "M" "4"] ["G" "M" "4"] ["D" "M" "4"] ["A" "7" "4"] ["D" "M" "4"]
    ["D" "M" "4"] ["A" "M" "4"] ["A" "7" "4"] ["D" "M" "4"] ["G" "M" "4"] ["D" "M" "4"] ["A" "7" "4"] ["D" "M" "4"] 
    ["D" "7" "4"] ["G" "M" "2"] ["D" "M" "2"] ["E" "m" "4"] ["A" "7" "4"] ["D" "M" "4"]
    ["D" "7" "4"] ["G" "M" "2"] ["D" "M" "2"] ["E" "m" "4"] ["A" "7" "4"] ["D" "M" "4"]))

(defonce app-state (atom {:chords chords/chordList 
                            :key "A" 
                            :beat 1
                            :quality "All"
                            :showModal false
                            :index 0
                            :songTitle "Hey Jude"
                            :song InitSong
                            :rawSong (get-in songs/Songs [2 :title])
                            :currentPage "Chord Charts"
                            :tempo 80
                            :colors "dark"}))

(def musKey (cursor app-state [:key]))
(def quality (cursor app-state [:quality]))
(def chords (cursor app-state [:chords]))
(def beat (cursor app-state [:beat]))
(def index (cursor app-state [:index]))
(def song (cursor app-state [:song]))
(def songTitle (cursor app-state [:songTitle]))
(def tempo (cursor app-state [:tempo]))
(def rawSong (cursor app-state [:rawSong]))
