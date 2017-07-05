(ns tabber.core
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as str]
            [tabber.chords :as chords]))
  
(enable-console-print!)
(defonce app-state (atom {:chords chords/chordList :key "A"}))

; Symbol -> String
(defn fretX [string]
  (cond 
    (= :e6 string) "-10px"
    (= :a string) "20px"
    (= :d string) "50px"
    (= :g string) "80px"
    (= :b string) "110px"
    (= :e string) "140px"
      :else "0"))

; String -> String
(defn fretY [fret]
  (cond 
    (= "0" fret) "-30px" 
    (= "1" fret) "15px"
    (= "2" fret) "65px"
    (= "3" fret) "115px"
    (= "4" fret) "165px"
      :else "-30px"))
    
(defn fingerColor [finger]
  (cond
    (= "1" finger) "#e8175d" 
    (= "2" finger) "#a8a7a7" 
    (= "3" finger) "#5d8eef" 
    (= "4" finger) "#cc527a"
     :else "#444")) 
; Symbol -> Int -> Html
(defn FretFingerMarker [string notes]
  (let [[fret finger] (str notes 0)]
    [:div {:style 
           { :position "absolute" 
             :top (fretX string) 
             :right (fretY fret) 
             :height "20px"
             :width "20px"
             :textAlign "center" 
             :borderRadius "10px"
             :fontSize "14px"
             :transition "all 0.3s ease"
             :boxShadow "5px 5px 10px rgba(0,0,0,0.3)"
             :backgroundColor (fingerColor finger)}} finger]))

; Html
(defn HorizontalStrings []
  [:div
    [:hr {:style { :height "1px" :backgroundColor "#333" :border "none" :marginTop "30px"}}]
    [:hr {:style { :height "1px" :backgroundColor "#333" :border "none" :marginTop "28px"}}]
    [:hr {:style { :height "1px" :backgroundColor "#333" :border "none" :marginTop "28px"}}]
    [:hr {:style { :height "1px" :backgroundColor "#333" :border "none" :marginTop "28px"}}]])

(defn VerticalFretLine [Yoffset]
  [:div {:style {:position "absolute" :top "0" :left Yoffset :height "150px" :width "50px" :borderLeft "1px solid #333"}}])

(defn Nut []
  [:div {:style {:position "absolute" :top "-1px" :right "-5px" :width "5px" :height "152px" :backgroundColor "#000"}}])
; String -> Html
(defn ChordChart [chord]
  (let [[chordName e6 a d g b e bar] chord]
    [:div {:style {:position "relative" 
                   :width "200px" 
                   :height "150px" 
                   :border "1px solid #000"  
                   :backgroundColor "#474747" 
                   :margin "50px"}}
      [:div {:style {:position "absolute" :top "-50px"  :fontSize "30px" :color "#d8d7d7"} } (str chordName)]
      [HorizontalStrings]
      [Nut]
      [VerticalFretLine "50px"]
      [VerticalFretLine "100px"]
      [VerticalFretLine "150px"]
      [FretFingerMarker :e6 e6]
      [FretFingerMarker :a a]
      [FretFingerMarker :d d]
      [FretFingerMarker :g g]
      [FretFingerMarker :b b]
      [FretFingerMarker :e e]
      [:div {:style {:position "absolute" :bottom "-35px" :right "0" :fontSize "15px"}} (if (not(= nil bar )) (str "bar " bar) "")]]))

(defn KeyButton [key]
  [:button {:style {:width "40px" 
                    :height "35px" 
                    :margin "5px 20px"
                    :fontSize "20px"
                    :padding "5px"
                    :border "1px solid #555"
                    :color "#fff"
                    :cursor "pointer"
                    :backgroundColor (if (= key (:key @app-state)) "#e8175d" "rgba(0,0,0,0)")} 
            :on-click (fn [e] (swap! app-state assoc-in [:key] key))} key])

(def keyList
  ["All" "A" "B" "C" "D" "E" "F" "G"])

(defn KeyFilter [collection]
  (let [key (:key @app-state)]
    (if (= key "All") 
      collection
      (filter #(= (first (first %)) key) collection))))
  
(defn chords []
  [:div {:style{ :marginTop "100px" :textAlign "center"}}
    (map KeyButton keyList)
    [:div {:style{:display "flex" :justifyContent "center" :flexWrap "wrap" :marginTop "50px"}}
      (map ChordChart (KeyFilter (:chords @app-state)))]])
      
(reagent/render-component [chords]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

