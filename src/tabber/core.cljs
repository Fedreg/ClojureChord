(ns tabber.core
  (:require [reagent.core :as reagent :refer [atom]]
            [tabber.chords :as chords]
            [tabber.nav :as nav]
            [tabber.colorThemes :as color]
            [tabber.chordChart :as chart]
            [tabber.songViewer :as song]
            [tabber.routing :as rte]
            [tabber.state :as state]))

(defn Chords []
  [:div {:style {:marginTop "100px" :textAlign "center"} :id "chords"}
   [nav/NavIcon]
   [nav/Nav]
   [rte/CurrentPage]])

(reagent/render-component [Chords]
                          (. js/document (getElementById "app")))

  ; (defn on-js-reload [])
