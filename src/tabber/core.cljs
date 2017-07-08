(ns tabber.core
  	(:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as str]
            [tabber.chords :as chords]
            [tabber.modal :as modal]
			[tabber.colorThemes :as color]
            [tabber.state :as state]))


(enable-console-print!)

; Sets body color.  Temporary until more permanent stylesheet is created.
(defn ChangeBackgroundColor []
	(set! js/document.body.style.backgroundColor (color/ReturnColors :bcgrnd)))
 
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

; String -> String
(defn fingerColor [finger]
	(ChangeBackgroundColor)
	(cond
		(= "1" finger) (color/ReturnColors :f1) 
		(= "2" finger) (color/ReturnColors :f2)
		(= "3" finger) (color/ReturnColors :f3)
		(= "4" finger) (color/ReturnColors :f4)
			:else (color/ReturnColors :fx)))

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
	[:div {:style {:position "absolute" :top "-1px" :right "-5px" :width "5px" :height "152px" :backgroundColor (color/ReturnColors :t2)}}])

; String -> Html
(defn ChordChart [chord]
	(let [[chordName quality e6 a d g b e bar] chord]
		[:div {:style {:position "relative"
					:width "200px"
					:height "150px"
					:border (str "1px solid " (color/ReturnColors :t2))
					:backgroundColor (color/ReturnColors :chart)
					:margin "50px"}}
		[:div {:style {:position "absolute" :top "-50px"  :fontSize "30px" :color (color/ReturnColors :t1)} } (str chordName quality)]
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
		[:div {:style {:position "absolute" :bottom "-35px" :right "0" :color (color/ReturnColors :t2) :fontSize "15px"}} (if (not(= nil bar )) (str "bar " bar) "")]]))

(defn KeyButton [key]
	[:button {:style {:width "40px" 
						:height "35px" 
						:margin "5px 10px"
						:fontSize "20px"
						:padding "5px"
						:border "1px solid #555"
						:color (color/ReturnColors :t1)
						:cursor "pointer"
						:backgroundColor (if (= key (:key @state/app-state)) (color/ReturnColors :f1) "rgba(0,0,0,0)")} 
				:on-click (fn [e] (swap! state/app-state assoc-in [:key] key))} key])

(defn QualityButton [quality]
	[:button {:style {:width "30px" 
						:height "25px" 
						:margin "5px 10px"
						:fontSize "14px"
						:padding "5px"
						:border "1px solid #555"
						:color (color/ReturnColors :t1)
						:cursor "pointer"
						:backgroundColor (if (= quality (:quality @state/app-state)) (color/ReturnColors :f1) "rgba(0,0,0,0)")} 
				:on-click (fn [e] (swap! state/app-state assoc-in [:quality] quality))} quality])

(def keyList
	["All" "A" "Ab" "B" "Bb" "C" "C#" "D" "Db" "E" "Eb" "F" "F#""G" "G#"])

(def qualityList
	["All" "M" "m" "7" "M7" "m7"])

(defn KeyFilter [collection]
	(let [key (:key @state/app-state) quality (:quality @state/app-state)]
		(cond 
			(and (= key "All") (= quality "All")) collection
			(= key "All") (filter #(= (second %) quality) collection)
			(= quality "All") (filter #(= (first %) key) collection)
				:else (filter #(and (= (first  %) key) (= (second %) quality)) collection))))	
  
(defn Chords []
	[:div {:style{ :marginTop "100px" :textAlign "center"}}
		[modal/ModalIcon]
		[modal/Modal]
		(map KeyButton keyList)
		[:div (map QualityButton qualityList)]
		[:div {:style{:display "flex" :justifyContent "center" :flexWrap "wrap" :marginTop "50px"}}
			(map ChordChart (KeyFilter (:chords @state/app-state)))]])
      

(reagent/render-component [Chords]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your state/app-state to force rerendering depending on
  ;; your application
  ;; (swap! state/app-state update-in [:__figwheel_counter] inc)

