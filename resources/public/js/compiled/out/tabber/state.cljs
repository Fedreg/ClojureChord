(ns tabber.state
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [tabber.songs :as songs]
            [tabber.chords :as chords]))

;----------------------------------
; Initial State Items
;----------------------------------

(def InitSong '(["X" "X" 4]
                ["D" "M" "4"] ["A" "M" "4"] ["A" "7" "4"] ["D" "M" "4"] ["G" "M" "4"] ["D" "M" "4"] ["A" "7" "4"] ["D" "M" "4"]
                ["D" "M" "4"] ["A" "M" "4"] ["A" "7" "4"] ["D" "M" "4"] ["G" "M" "4"] ["D" "M" "4"] ["A" "7" "4"] ["D" "M" "4"]
                ["D" "7" "4"] ["G" "M" "2"] ["D" "M" "2"] ["E" "m" "4"] ["A" "7" "4"] ["D" "M" "4"]
                ["D" "7" "4"] ["G" "M" "2"] ["D" "M" "2"] ["E" "m" "4"] ["A" "7" "4"] ["D" "M" "4"]))

;---------------------------------
; State
;---------------------------------

(defonce app-state (r/atom {:beat 1
                            :chords chords/chordList
                            :colors "Dark"
                            :currentPage "Chord Charts"
                            :index 0
                            :key "A"
                            :quality "All"
                            :showModal false
                            :song InitSong
                            :songPlaying false
                            :songTitle "Hey Jude"
                            :tempo 80}))

;----------------------------------
; Cursors
;----------------------------------

(def beat (r/cursor app-state [:beat]))
(def chords (r/cursor app-state [:chords]))
(def colors (r/cursor app-state [:colors]))
(def currentPage (r/cursor app-state [:currentPage]))
(def index (r/cursor app-state [:index]))
(def musKey (r/cursor app-state [:key]))
(def quality (r/cursor app-state [:quality]))
(def song (r/cursor app-state [:song]))
(def songPlaying (r/cursor app-state [:songPlaying]))
(def songTitle (r/cursor app-state [:songTitle]))
(def tempo (r/cursor app-state [:tempo]))