(ns tabber.modal
    (:require [tabber.state :as state]
              [tabber.colorThemes :as color]))

(defn ModalIcon []
    [:div {:style {:position "fixed"
                    :top "25px"
                    :right "25px"
                    :width "20px"
                    :transform (if (= true (:showModal @state/app-state)) "translateX(-320px) rotate(270deg)" "translateX(0) rotate(0)")
                    :zIndex 1001
                    :transition "all 0.3s ease"
                    :cursor "pointer"}
            :on-click #(swap! state/app-state assoc-in [:showModal] (not (:showModal @state/app-state)))}
        [:hr {:style { :height "1px" :backgroundColor (color/ReturnColors :t1) :border "none" :marginTop "6px"}}]
        [:hr {:style { :height "1px" :backgroundColor (color/ReturnColors :t1) :border "none" :marginTop "6px"}}]
        [:hr {:style { :height "1px" :backgroundColor (color/ReturnColors :t1) :border "none" :marginTop "6px"}}]])

; Select menu for theme
(defn ThemeSelect []
    [:select {:style {:width "200px" 
                        :height "25px" 
                        :fontSize "16px"
                        :color "#fff" 
                        :paddingLeft "20px"
                        :background "#333" 
                        :-webkitAppearance "none" 
                        :border "1px solid #fff"}
                :on-change #(swap! state/app-state assoc-in [:colors] (-> % .-target .-value))}
        [:option {:value "light"} "Light"]
        [:option {:value "grey"} "Grey"]
        [:option {:value "dark"} "Dark"]])

; Draws the nav menu that opens up from the side.  (Was originally a modal, hence the name.)
(defn Modal [] 
    [:div {:style {:position "fixed"
                        :top "0"
                        :right "0"
                        :transform (if (= true (:showModal @state/app-state)) "translateX(0)" "translateX(420px)")
                        :width "400px"
                        :height "100vh"
                        :paddingTop "75px"
                        :zIndex "1000"
                        :transition "all 0.3s ease"
                        :color (color/ReturnColors :t1) 
                        :backgroundColor (color/ReturnColors :menu)}}
        [:div "Select Theme"]
        [ThemeSelect]])


