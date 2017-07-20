(ns tabber.modal
  (:require [tabber.state :as state]
            [tabber.songs :as songs]
            [tabber.songViewer :as songViewer]
            [tabber.colorThemes :as color]))

  ;-------------------------------
  ; Component Styles
  ;-------------------------------

(defn ModalIconStyle []
  {:position "fixed"
   :top "25px"
   :right "25px"
   :width "20px"
   :transform (if (= true (:showModal @state/app-state)) "translateX(-320px) rotate(270deg)" "translateX(0) rotate(0)")
   :zIndex 1001
   :transition "all 0.3s ease"
   :cursor "pointer"})

(defn ModalIconHRStyle []
  {:height "1px"
   :backgroundColor (color/ReturnColors :t1)
   :border "none"
   :marginTop "6px"})

(defn ThemeSelectStyle []
  {:position "fixed"
   :bottom "100px"
   :right "85px"
   :width "200px"
   :fontSize "16px"
   :color (color/ReturnColors :t2)
   :padding "10px"
   :border (str "1px solid " (color/ReturnColors :t2))})

(defn ThemeSelectItemStyle [item]
  {:margin "10px 20px"
   :cursor "pointer"
   :color (if (= item @state/colors) (color/ReturnColors :f3) "")})

(defn SongSelectStyle []
  {:visibility (if (= @state/currentPage "Song Player") "visible" "hidden")
   :width "200px"
   :fontSize "16px"
   :color (color/ReturnColors :t1)
   :padding "10px 10px 30px"
   :marginLeft "85px"
   :border (str "1px solid " (color/ReturnColors :t2))})

(defn SongSelectItemStyle [item]
  {:marginTop "10px"
   :cursor "pointer"
   :color (if (= item @state/songTitle) (color/ReturnColors :f3) "")})

(defn ModalStyle []
  {:position "fixed"
   :top "0"
   :right "0"
   :transform (if (= true (:showModal @state/app-state)) "translateX(0)" "translateX(420px)")
   :width "400px"
   :height "100vh"
   :paddingTop "75px"
   :zIndex "1000"
   :transition "all 0.3s ease"
   :color (color/ReturnColors :t1)
   :backgroundColor (color/ReturnColors :menu)
   :opacity ".95"})

  ;----------------------------------
  ; Components 
  ;----------------------------------

(defn ModalIcon []
  [:div {:style (ModalIconStyle)
         :on-click #(swap! state/app-state assoc-in [:showModal] (not (:showModal @state/app-state)))}
   [:hr {:style (ModalIconHRStyle)}]
   [:hr {:style (ModalIconHRStyle)}]
   [:hr {:style (ModalIconHRStyle)}]])

(defn SelectNewTheme [theme]
  (swap! state/app-state assoc-in [:colors] theme)
  (color/ChangeBackgroundColor))

(defn ThemeSelect []
  [:div {:style (ThemeSelectStyle)}
   (map #(do [:span {:style (ThemeSelectItemStyle %)
                     :on-click (fn [%] (SelectNewTheme (-> % .-target .-innerHTML)))}
              %]) ["Dark" "Light"])])

(defn SongTitles []
  (map #(first %) songs/Songs))

(defn GrabSongByTitle [title]
  (first (filter #(= title (first %)) songs/Songs)))

(defn SelectNewSong [title]
  (songViewer/FormatSong (GrabSongByTitle title))
  (swap! state/app-state assoc-in [:index] 0)
  (swap! state/app-state assoc-in [:songPlaying] false))

(defn SongSelect []
  [:div {:style (SongSelectStyle)}
   (map #(do [:div {:id %
                    :style (SongSelectItemStyle %)
                    :on-click (fn [%] (SelectNewSong (-> % .-target .-innerHTML)))}
              %]) (SongTitles))])

(defn PageSelector [page]
  [:div {:style {:margin "0 0 10px"
                 :textDecoration "none"
                 :fontSize "22px"
                 :color (if (= (:currentPage @state/app-state) page) (color/ReturnColors :f3) (color/ReturnColors :t2))}
         :on-click #(swap! state/app-state assoc-in [:currentPage] page)} page])

(defn Modal []
  "Draws the nav menu that opens up from the side.  (Was originally a modal, hence the name.)"
  [:div {:style (ModalStyle)}
   [ThemeSelect]
   [:div [PageSelector "Chord Charts"]]
   [:div [PageSelector "Song Player"]]
   [SongSelect]])
