(ns tabber.routing
    (:require [tabber.state :as state]
              [tabber.chordChart :as chart]
              [tabber.songViewer :as song]))

(defn CurrentPage []
    (case @state/currentPage
       "Chord Charts" (chart/ChordChartPage)
       "Song Player" (song/SongPage)
       "Error, page not found! Please reload"))

       

