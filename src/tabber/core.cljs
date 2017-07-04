(ns tabber.core
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as str]))
  
(defonce app-state (atom {:e6 "00" :a "33" :d "22" :g "00" :b "11" :e "00" :name "C"}))

(defn fretX [string]
  (cond 
    (= :e6 string) "-10px"
    (= :a string) "20px"
    (= :d string) "50px"
    (= :g string) "80px"
    (= :b string) "110px"
    (= :e string) "140px"
      :else "0"))

(defn fretY [fret]
  (cond 
    (= 0 (js/parseInt fret)) "-25px" 
    (= 1 (js/parseInt fret)) "15px"
    (= 2 (js/parseInt fret)) "65px"
    (= 3 (js/parseInt fret)) "115px"
    (= 4 (js/parseInt fret)) "165px"
      :else "-25px"))

(defn FretFingerMarker [string]
  (let [[fret finger] (string @app-state)]
   [:div {:style 
           { :position "fixed" 
             :top (fretX string) 
             :right (fretY fret) 
             :height "20px"
             :width "20px"
             :textAlign "center" 
             :border "1px solid #ccc" 
             :borderRadius "10px" 
             :backgroundColor "#ddd"}} finger]))

(defn HorizontalStrings []
  [:div
    [:hr {:style {:borderBottom "1px solid #ccc" :marginTop "30px"}}]
    [:hr {:style {:borderBottom "1px solid #ccc" :marginTop "28px"}}]
    [:hr {:style {:borderBottom "1px solid #ccc" :marginTop "28px"}}]
    [:hr {:style {:borderBottom "1px solid #ccc" :marginTop "28px"}}]])

(defn VerticalFretLine [Yoffset]
  [:div {:style {:position "absolute" :top "0" :left Yoffset :height "150px" :width "50px" :borderLeft "1px solid #ccc"}}])

(defn ParseAndAssignNotes [noteString]
  (let [[e6 a d g b e name] (str/split noteString " ")]
    (if (not(= nil e6)) (swap! app-state assoc-in [:e6] e6))
    (if (not(= nil a)) (swap! app-state assoc-in [:a] a))
    (if (not(= nil d)) (swap! app-state assoc-in [:d] d))
    (if (not(= nil g)) (swap! app-state assoc-in [:g] g))
    (if (not(= nil b)) (swap! app-state assoc-in [:b] b))
    (if (not(= nil e)) (swap! app-state assoc-in [:e] e))
    (if (not(= nil name)) (swap! app-state assoc-in [:name] name))))

(defn ChordInput []
  [:input {:type "text"
           :placeholder "Enter New Chord"
           :on-input (fn [e] (ParseAndAssignNotes (.-target.value e)))
           :style{:marginTop "120px" :width "200px"}}])

(defn ChordChart [size]
  [:div {:style {:posiiton "relative" :width "200px" :height "150px" :border "1px solid #ccc" :transform size :backgroundColor "#fff"}}
    [:div {:style {:position "fixed" :top "-50px"  :fontSize "30px"}} (:name @app-state)]
    [HorizontalStrings]
    [VerticalFretLine "50px"]
    [VerticalFretLine "100px"]
    [VerticalFretLine "150px"]
    [FretFingerMarker :e6]
    [FretFingerMarker :a]
    [FretFingerMarker :d]
    [FretFingerMarker :g]
    [FretFingerMarker :b]
    [FretFingerMarker :e]])

(defn chords []
  [:div {:style{:display "flex" :flexDirection "column" :alignItems "center" :justifyContent "center" :marginTop "300px"}}
    [ ChordChart "scale(2,2)"]
    [ChordInput]
    [:span "Enter chords as FRET/Finger FRET/Finger ... NAME. So G would be 32 21 00 00 33 34 G"]])
      
(reagent/render-component [chords]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

