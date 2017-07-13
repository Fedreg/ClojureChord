(ns tabber.chordChart
    (:require [reagent.core :as reagent :refer [cursor]]
			  [tabber.state :as state]
              [tabber.colorThemes :as color]))


;-------------------------------------
; Cursors and Function Declarations
;-------------------------------------

(declare fretX)
(declare fretY)
(declare fingerColor)

(def !key (cursor state/app-state [:key]))
(def !quality (cursor state/app-state [:quality]))
(def !chords (cursor state/app-state [:chords]))

;-------------------------------------
; Component Styles
;-------------------------------------

(defn FretFingerMarkerStyle [string fret finger]
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
	:backgroundColor (fingerColor finger)})

(defn HorizontalStringsStyle [upper]
	{ :height "1px" 
	:backgroundColor "#333" 
	:border "none" 
	:marginTop upper})

(defn VerticalFretlineStyle [Yoffset]
	{:position "absolute" 
	:top "0" 
	:left Yoffset 
	:height "150px" 
	:width "50px" 
	:borderLeft "1px solid #333"})

(defn NutStyle []
	{:position "absolute" 
	:top "-1px" 
	:right "-5px" 
	:width "5px" 
	:height "152px" 
	:backgroundColor (color/ReturnColors :t2)})

(defn ChordChartStyle []
	{:position "relative"
	:width "200px"
	:minWidth "200px"
	:height "150px"
	:border (str "1px solid " (color/ReturnColors :t2))
	:backgroundColor (color/ReturnColors :chart)
	:margin "50px"})

(defn ChordChartNameStyle []
	{:position "absolute" 
	:top "-50px"  
	:fontSize "30px" 
	:color (color/ReturnColors :t1)})

(defn ChordChartBarStyle []
	{:position "absolute" 
	:bottom "-35px" 
	:right "0" 
	:color (color/ReturnColors :t2) 
	:fontSize "15px"})

(defn KeyButtonStyle [key]
	{:width "40px" 
	:height "35px" 
	:margin "5px"
	:fontSize "20px"
	:padding "5px"
	:border "1px solid #555"
	:color (if (= key @!key) (color/ReturnColors :t1) (color/ReturnColors :t2))
	:cursor "pointer"
	:backgroundColor (if (= key @!key) (color/ReturnColors :f1) "rgba(0,0,0,0)")})

(defn QualityButtonStyle [quality]
	{:width "30px" 
	:height "30px" 
	:margin "5px"
	:fontSize "14px"
	:padding "5px"
	:border "1px solid #555"
	:color (if (= quality @!quality) (color/ReturnColors :t1) (color/ReturnColors :t2))
	:cursor "pointer"
	:backgroundColor (if (= quality @!quality) (color/ReturnColors :f1) "rgba(0,0,0,0)")} )

;--------------------------------------------------
; Components
;--------------------------------------------------

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
		[:div {:style (FretFingerMarkerStyle string fret finger)} finger]))

; Html
(defn HorizontalStrings []
	[:div
		[:hr {:style (HorizontalStringsStyle "30px")}] 
		[:hr {:style (HorizontalStringsStyle "28px")}]
		[:hr {:style (HorizontalStringsStyle "28px")}]
		[:hr {:style (HorizontalStringsStyle "28px")}]])

(defn VerticalFretLine [Yoffset]
	[:div {:style (VerticalFretlineStyle Yoffset)}])

(defn Nut []
	[:div {:style (NutStyle) }])

; String -> Html
(defn ChordChart [chord]
	(let [[chordName quality e6 a d g b e bar] chord]
		[:div {:style (ChordChartStyle) }
		[:div {:style (ChordChartNameStyle) } (str chordName quality)]
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
		[:div {:style (ChordChartBarStyle) } (if (not(= nil bar )) (str "bar " bar) "")]]))


(defn KeyButton [key]
	[:button {:style (KeyButtonStyle key) 
				:on-click (fn [e] (swap! state/app-state assoc-in [:key] key))} key])

(defn QualityButton [quality]
	[:button {:style (QualityButtonStyle quality) 
				:on-click (fn [e] (swap! state/app-state assoc-in [:quality] quality))} quality])

(def keyList
	["All" "A" "Ab" "B" "Bb" "C" "C#" "D" "Db" "E" "Eb" "F" "F#""G" "G#"])

(def qualityList
	["All" "M" "m" "6" "7" "M7" "m7"])

(defn KeyFilter [collection]
	(cond 
		(and (= @!key "All") (= @!quality "All")) collection
		(= @!key "All") (filter #(= (second %) @!quality) collection)
		(= @!quality "All") (filter #(= (first %) @!key) collection)
			:else (filter #(and (= (first  %) @!key) (= (second %) @!quality)) collection)))	

(defn ChordChartPage []
	[:div
		(map KeyButton keyList)
		[:div (map QualityButton qualityList)]
		[:div {:style{:display "flex" :justifyContent "center" :flexWrap "wrap" :marginTop "50px"}}
			(map ChordChart (KeyFilter @!chords))]])
