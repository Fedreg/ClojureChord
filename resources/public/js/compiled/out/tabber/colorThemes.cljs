(ns tabber.colorThemes
  (:require [tabber.state :as state]))

(def light
  {:f1 "#5dd7ef"
   :f2 "#a8a7a7"
   :f3 "#5d8eef"
   :f4 "#cc527a"
   :fx "#ccc"
   :bcgrnd "#eee"
   :chart "#000"
   :menu "#ddd"
   :t1 "#000"
   :t2 "#222"})

(def dark
  {:f1 "#203fcd"
   :f2 "#a8a7a7"
   :f3 "#5d8eef"
   :f4 "#194162"
   :fx "#444"
   :bcgrnd "#000"
   :chart "#111"
   :menu "#111"
   :t1 "#fff"
   :t2 "#333"})

(defn ReturnColors [value]
  "Sets all the dynamic colors based on theme throughout app."
  (cond
    (= (:colors @state/app-state) "dark") (get dark value)
    (= (:colors @state/app-state) "light") (get light value)
    :else ""))

(defn ChangeBackgroundColor []
  (set! js/document.body.style.backgroundColor (ReturnColors :bcgrnd)))

