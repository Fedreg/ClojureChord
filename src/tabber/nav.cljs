(ns tabber.nav
  (:require [tabber.state :as state]
            [tabber.songs :as songs]
            [tabber.songViewer :as songViewer]
            [tabber.colorThemes :as color]))

  ;-------------------------------
  ; Component Styles
  ;-------------------------------

(defn NavIconStyle []
  {:position "fixed"
   :top "25px"
   :right "25px"
   :width "20px"
   :transform (if (= true @state/showNav) "translateX(-320px) rotate(270deg)" "translateX(0) rotate(0)")
   :zIndex 1001
   :transition "all 0.3s ease"
   :cursor "pointer"})

(defn NavIconHRStyle []
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

(defn NavStyle []
  {:position "fixed"
   :top "0"
   :right "0"
   :transform (if (= true @state/showNav) "translateX(0)" "translateX(420px)")
   :width "400px"
   :height "100vh"
   :paddingTop "75px"
   :zIndex "1000"
   :transition "all 0.3s ease"
   :color (color/ReturnColors :t1)
   :backgroundColor (color/ReturnColors :menu)})

  ;----------------------------------
  ; Components 
  ;----------------------------------

(defn NavIcon []
  [:div {:style (NavIconStyle)
         :on-click #(state/UpdateState :ToggleNav)}
   [:hr {:style (NavIconHRStyle)}]
   [:hr {:style (NavIconHRStyle)}]
   [:hr {:style (NavIconHRStyle)}]])

(defn SelectNewTheme [theme]
  (state/UpdateState :SwitchTheme theme)
  (color/ChangeBackgroundColor))

(defn ThemeSelect []
  "Chooses dark or light theme."
  [:div {:style (ThemeSelectStyle)}
   (map #(do [:span {:style (ThemeSelectItemStyle %)
                     :on-click (fn [%] (SelectNewTheme (-> % .-target .-innerHTML)))
                     :key %}
              %]) ["Dark" "Light"])])

(defn SongTitles []
  "Get titles of all songs in memeory"
  (map #(first %) songs/Songs))

(defn GrabSongByTitle [title]
  "Gets the requested song by title to be formatted."
  (first (filter #(= title (first %)) songs/Songs)))

(defn SelectNewSong [title]
  "When new song in selected this func will trigger formatting, reset the index, and stop current song."
  (songViewer/FormatSong (GrabSongByTitle title))
  (state/UpdateState :ResetIndex)
  (state/UpdateState :PlaySong false))

(defn SongSelect []
  "Selects current song."
  [:div {:style (SongSelectStyle) :key "ss"}
   (map #(do [:div {:key %
                    :style (SongSelectItemStyle %)
                    :on-click (fn [%] (SelectNewSong (-> % .-target .-innerHTML)))}
              %]) (SongTitles))])

(defn PageSelector [page]
  "Selects which page to navigate to.  TODO: Proper CS routing."
  [:div {:style {:margin "0 0 10px"
                 :textDecoration "none"
                 :fontSize "22px"
                 :color (if (= (:currentPage @state/app-state) page) (color/ReturnColors :f3) (color/ReturnColors :t2))}
         :on-click #(state/UpdateState :SwitchPage page)} page])

(defn Nav []
  "Draws the nav menu that opens up from the side.  (Was originally a Nav, hence the name.)"
  [:div {:style (NavStyle)}
   [ThemeSelect]
   [:div [PageSelector "Chord Charts"]]
   [:div [PageSelector "Song Player"]]
   [SongSelect]])
