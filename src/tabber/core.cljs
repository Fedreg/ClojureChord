(ns tabber.core
  	(:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as str]
            [tabber.chords :as chords]
            [tabber.modal :as modal]
			[tabber.colorThemes :as color]
			[tabber.chordChart :as chart]
			[tabber.songViewer :as song]
            [tabber.state :as state]))


(defn Chords []
	[:div {:style{ :marginTop "100px" :textAlign "center"}}
		[modal/ModalIcon]
		[modal/Modal]
		; [ChordChartPage]
		(cond
			(= "Chord Charts" (:currentPage @state/app-state)) (chart/ChordChartPage)
			(= "Song Player" (:currentPage @state/app-state)) (song/SongPage)
				:else [:div "Error, please reload"])])	
      

(reagent/render-component [Chords]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your state/app-state to force rerendering depending on
  ;; your application
  ;; (swap! state/app-state update-in [:__figwheel_counter] inc)

