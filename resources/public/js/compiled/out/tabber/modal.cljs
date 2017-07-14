(ns tabber.modal
    (:require [tabber.state :as state]
              [tabber.songs :as songs]
              [tabber.songViewer :as songViewer]
              [tabber.colorThemes :as color]))
(enable-console-print!)
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
        [:option {:value "dark"} "Dark"]
        [:option {:value "grey"} "Grey"]
        [:option {:value "contrast"} "Contrast"]
        [:option {:value "light"} "Light"]])

(defn SongTitles []
    (map #(first %) songs/Songs))

(defn GrabSongByTitle [title]
    (filter #(= title (first %)) songs/Songs) )

(defn SongSelect []
    (print "Yo" (SongTitles))
    [:select {:style {:width "200px" 
                        :height "25px" 
                        :fontSize "16px"
                        :color "#fff" 
                        :paddingLeft "20px"
                        :background "#333" 
                        :-webkitAppearance "none" 
                        :border "1px solid #fff"}
                :on-change #(songViewer/FormatSong (GrabSongByTitle(-> % .-target .-value)))}
        (map #(do [:option {:value %} %]) (SongTitles))])

(defn PageSelector [page]
    [:div {:style { :margin "20px 50px"
                :textDecoration "none" 
                :color (if (= (:currentPage @state/app-state) page) (color/ReturnColors :f3) (color/ReturnColors :t2))}
         :on-click #(swap! state/app-state assoc-in [:currentPage] page)} page])

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
        [ThemeSelect]
        [:div [PageSelector "Chord Charts"]]
        [:div [PageSelector "Song Player"]]
        [SongSelect]])


