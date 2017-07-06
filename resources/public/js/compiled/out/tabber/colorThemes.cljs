(ns tabber.colorThemes
    (:require [tabber.state :as state]))

(def grey
    {:f1 "#e8175d"
    :f2 "#a8a7a7"
    :f3 "#5d8eef"
    :f4 "#cc527a"
    :fx "#444"
    :bcgrnd "#333"
    :chart "#474747"
    :t1 "#fff"
    :t2 "#000"})


(def light
    {:f1 "#5dd7ef"
    :f2 "#a8a7a7"
    :f3 "#5d8eef"
    :f4 "#cc527a"
    :fx "#ccc"
    :bcgrnd "#eee"
    :chart "#fff"
    :t1 "#000"
    :t2 "#000"})

(def dark
    {:f1 "#e8175d"
    :f2 "#a8a7a7"
    :f3 "#5d8eef"
    :f4 "#cc527a"
    :fx "#444"
    :bcgrnd "#000"
    :chart "#111"
    :t1 "#fff"
    :t2 "#000"})

(defn ReturnColors [value]
    (cond
        (= (:colors @state/app-state) "dark") (get dark value)
        (= (:colors @state/app-state) "light") (get light value)
        (= (:colors @state/app-state) "grey") (get grey value)
            :else ""))

