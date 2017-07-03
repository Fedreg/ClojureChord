(ns tabber.core
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce app-state (atom {:e6 0 :a 3 :d 2 :g 0 :b 1 :e 0}))

(defn fretX [str]
  (cond 
    (= :e6 str) "-10px"
    (= :a str) "20px"
    (= :d str) "50px"
    (= :g str) "80px"
    (= :b str) "110px"
    (= :e str) "140px"
      :else "0"))

(defn fretY [fret]
  (cond 
    (= 0 fret) "-25px" 
    (= 1 fret) "15px"
    (= 2 fret) "65px"
      :else "115px"))

(defn FretMarker [str]
  [:div {:style 
          { :position "fixed" 
            :top (fretX str) 
            :right (fretY (str @app-state)) 
            :height "20px"
            :width "20px"
            :textAlign "center" 
            :border "1px solid #ccc" 
            :borderRadius "10px" 
            :backgroundColor "#eee"}} (str @app-state)])

(defn Strings []
  [:div
    [:hr {:style {:borderBottom "1px solid #ccc" :marginTop "30px"}}]
    [:hr {:style {:borderBottom "1px solid #ccc" :marginTop "28px"}}]
    [:hr {:style {:borderBottom "1px solid #ccc" :marginTop "28px"}}]
    [:hr {:style {:borderBottom "1px solid #ccc" :marginTop "28px"}}]])

(defn FretLine [Yoffset]
  [:div {:style {:position "absolute" :top "0" :left Yoffset :height "150px" :width "50px" :borderLeft "1px solid #ccc"}}])

(defn ChordInput [val]
  [:input {:type "text"
           :on-change (fn [e] (swap! app-state assoc-in val (.-target.value e)))}])

(defn ChordChart [size]
  [:div {:style {:posiiton "relative" :width "150px" :height "150px" :border "1px solid #ccc" :transform size}}
    [Strings]
    [FretLine "50px"]
    [FretLine "100px"]
    [FretMarker :e6]
    [FretMarker :a]
    [FretMarker :d]
    [FretMarker :g]
    [FretMarker :b]
    [FretMarker :e]])

(defn chords []
  [:div {:style{:display "flex" :justifyContent "center" :marginTop "200px"}}
    [ ChordChart "scale(2,2)"]])
      
(reagent/render-component [chords]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

