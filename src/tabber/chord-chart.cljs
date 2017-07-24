(ns tabber.chordChart
  (:require [tabber.state :as state]
            [cljs.spec.alpha :as s]
            [tabber.colorThemes :as color]))

  ;-------------------------------------
  ; Function Declarations & Specs
  ;-------------------------------------

(declare fretX)
(declare fretY)
(declare fingerColor)

(s/def ::chordName string?)
(s/def ::quality string?)
(s/def ::bar (s/or ::fret int? ::empty nil?))
(s/def ::string keyword?)
(s/def ::note (s/or ::fret int?  ::empty string?))

  ;-------------------------------------
  ; Component Styles
  ;-------------------------------------

(defn FretFingerMarkerStyle [string fret finger]
  {:position "absolute"
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
  {:height "1px"
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
   :color (if (= key @state/musKey) (color/ReturnColors :t1) (color/ReturnColors :t2))
   :cursor "pointer"
   :backgroundColor (if (= key @state/musKey) (color/ReturnColors :f1) "rgba(0,0,0,0)")})

(defn QualityButtonStyle [quality]
  {:width "30px"
   :height "30px"
   :margin "5px"
   :fontSize "14px"
   :padding "5px"
   :border "1px solid #555"
   :color (if (= quality @state/quality) (color/ReturnColors :t1) (color/ReturnColors :t2))
   :cursor "pointer"
   :backgroundColor (if (= quality @state/quality) (color/ReturnColors :f1) "rgba(0,0,0,0)")})

  ;--------------------------------------------------
  ; Components
  ;--------------------------------------------------

(defn fretX [string]
  "Determines vertical position of chord chart finger marker."
  (cond
    (= :e6 string) "-10px"
    (= :a string) "20px"
    (= :d string) "50px"
    (= :g string) "80px"
    (= :b string) "110px"
    (= :e string) "140px"
    :else "0"))

(defn fretY [fret]
  "Determines horizontal position of chord chart finger marker."
  (cond
    (= "0" fret) "-30px"
    (= "1" fret) "15px"
    (= "2" fret) "65px"
    (= "3" fret) "115px"
    (= "4" fret) "165px"
    :else "-30px"))

(defn fingerColor [finger]
  "Sets the color of each chord chart marker by finger."
  (cond
    (= "1" finger) (color/ReturnColors :f1)
    (= "2" finger) (color/ReturnColors :f2)
    (= "3" finger) (color/ReturnColors :f3)
    (= "4" finger) (color/ReturnColors :f4)
    :else (color/ReturnColors :fx)))

(defn FretFingerMarker [string notes]
  "Draws each dot on the chord chart."
  (when (and (s/valid? ::string string) (s/valid? ::note notes))
    (let [[fret finger] (str notes 0)]
      [:div {:style (FretFingerMarkerStyle string fret finger)} finger])))

(defn HorizontalStrings []
  "Draws the 'strings' for the chord chart."
  [:div
   [:hr {:style (HorizontalStringsStyle "30px")}]
   [:hr {:style (HorizontalStringsStyle "28px")}]
   [:hr {:style (HorizontalStringsStyle "28px")}]
   [:hr {:style (HorizontalStringsStyle "28px")}]])

(defn VerticalFretLine [Yoffset]
  "Draws the vertical fret lines"
  [:div {:style (VerticalFretlineStyle Yoffset)}])

(defn Nut []
  "Draws the thick vertical bar (called a 'nut') on right side of each chord chart."
  [:div {:style (NutStyle)}])

(defn ChordChart [chord]
  "Main chord chart component."
  (let [[chordName quality e6 a d g b e bar] chord]
    (when (and
           (s/valid? ::chordName chordName)
           (s/valid? ::quality quality)
           (s/valid? ::note e6)
           (s/valid? ::note a)
           (s/valid? ::note d)
           (s/valid? ::note g)
           (s/valid? ::note b)
           (s/valid? ::note e)
           (s/valid? ::bar bar))
      [:div {:style (ChordChartStyle) :key (str chordName (rand-int 1000))}
       [:div {:style (ChordChartNameStyle)} (str chordName quality)]
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
       [:div {:style (ChordChartBarStyle)} (if (not (= nil bar)) (str "bar " bar) "")]])))

(defn KeyButton [key]
  "The button that select key.  i.e. A B C D etc."
  [:button {:style (KeyButtonStyle key)
            :key (str key (rand-int 1000))
            :on-click #(state/UpdateState :SwitchKey key)} key])

(defn QualityButton [quality]
  "The buttons that select chord type. i.e. M m 6 7 etc."
  [:button {:style (QualityButtonStyle quality)
            :key quality
            :on-click #(state/UpdateState :SwitchQuality quality)} quality])

(def keyList
  ["All" "A" "Ab" "B" "Bb" "C" "C#" "D" "Db" "E" "Eb" "F" "F#" "G" "G#"])

(def qualityList
  ["All" "M" "m" "6" "7" "M7" "m7"])

(defn KeyFilter [collection]
  "Returns chords to display based on which keys and qualities selected."
  (cond
    (and (= @state/musKey "All") (= @state/quality "All")) collection
    (= @state/musKey "All") (filter #(= (second %) @state/quality) collection)
    (= @state/quality "All") (filter #(= (first %) @state/musKey) collection)
    :else (filter #(and (= (first  %) @state/musKey) (= (second %) @state/quality)) collection)))

(defn ChordChartPage []
  [:div
   (map KeyButton keyList)
   [:div (map QualityButton qualityList)]
   [:div {:style {:display "flex" :justifyContent "center" :flexWrap "wrap" :marginTop "50px"}}
    (map ChordChart (KeyFilter @state/chords))]])