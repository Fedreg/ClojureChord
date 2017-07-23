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
                            :showNav false
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
(def showNav (r/cursor app-state [:showNav]))
(def quality (r/cursor app-state [:quality]))
(def song (r/cursor app-state [:song]))
(def songPlaying (r/cursor app-state [:songPlaying]))
(def songTitle (r/cursor app-state [:songTitle]))
(def tempo (r/cursor app-state [:tempo]))

;-----------------------------------------------------
; Update
;-----------------------------------------------------

(defn Upd [a b c]
  "Pattern match over swap fn to reduce boilerplate"
  (swap! app-state a [b] c))

(defn UpdateState
  "Main update function.  All state changes go through here."
  ([msg]
   (case msg
     :IncBeat (Upd update-in :beat inc)
     :ResetBeat (Upd assoc-in :beat 1)
     :IncIndex (Upd update-in :index inc)
     :ResetIndex (Upd assoc-in :index 0)
     :ToggleNav (Upd assoc-in :showNav (not @showNav))
     "Error: No Change to State Atom (UpdateState/1)"))
  ([msg params]
   (print msg params)
   (case msg
     :SwitchKey (Upd assoc-in :key params)
     :SwitchQuality (Upd assoc-in :quality params)
     :SwitchTheme (Upd assoc-in :colors params)
     :SwitchPage (Upd assoc-in :currentPage params)
     :PlaySong (Upd assoc-in :songPlaying params)
     :SwitchSong (Upd assoc-in :song params)
     :SwitchSongTitle (Upd assoc-in :songTitle params)
     :NewTempo (Upd assoc-in :tempo params)
     :AdjustTempo (Upd assoc-in :tempo (params @tempo 5))
     "Error: No Change to State Atom (UpdateState/2")))