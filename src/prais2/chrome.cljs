(ns ^:figwheel-always prais2.chrome
    (:require [rum.core :as rum]
              [prais2.utils :refer [key-with]]
              [prais2.core :as core :refer [event-bus]]
              [prais2.logger :as logger]
              ))



(defn rgba-string
  "return CSS rgba string"
  [[r g b a]]
  (str "rgba(" r "," g "," b "," a)
  )


(defrecord  Nav-item [long-title short-title class icon])


(def nav-items {
                :intro (Nav-item. "Introduction" "Intro" "nav-item intro" "home")
                :map-data (Nav-item. "Mapped Data" "Mapped Data" "nav-item map-data" "map-marker")
                :data  (Nav-item. "Tabled Data" "Data" "nav-item data" "table")
                :faqs  (Nav-item. "Understanding the Data" "Understanding" "nav-item faqs" "question")})

(rum/defc nav-link [active? nav-item click-handler]
  (prn (:short-title nav-item) active?)
  [:.simple-link {:class (str (:class nav-item) " " (if active? "active" ""))
                  :on-click click-handler
                  :on-touch-start click-handler}
   [:i.fa {:class (str "fa-" (:icon nav-item))}] (str " " (:short-title nav-item))])

(rum/defc nav-bar [active-key]
  (let [nav-item (active-key nav-items)]
    [:div.simple-navbar
     [:h1 {:key 1
           :class (str "simple-title " (:class (active-key nav-items)))}
      (:long-title nav-item)]
     [:div.simple-buttons.pull-right {:key 2}
      (map-indexed #(key-with %1 (nav-link
                                  (= active-key %2)
                                  (%2 nav-items)
                                  (fn [e] (core/click->event-bus e %2 :top))))
                   (keys nav-items))]]))


(rum/defc better-nav-bar [active-key]
  (let [nav-item (active-key nav-items)]
    [:div.better-nav-bar
     [:nav.navbar.navbar-default.navbar-fixed-top
      [:.container-fluid {:style {:background-color "black"}}
       [:.navbar-header.page-scroll
        [:button.navbar-toggle {:type "button"
                                :data-toggle "collapse"
                                :data-target "#bs-example-navbar-collapse-1"}
         [:span.sr-only "Toggle navigation"]
         [:span.icon-bar]
         [:span.icon-bar]
         [:span.icon-bar]]
        [:div {:style {:width "200px"}} [:div {:style
                                 {      ;:position "absolute"
                                  :z-index 1 ;
                                        ;:left "0px"
                                        ;:top "0px"
                                  :background-image "url(assets/logo-placeholder.png)"
                                  :background-image-scale-x "0.1"
                                  :background-repeat "no-repeat"
                                  :background-size "50%"
                                  :width "100px"
                                  :height "90px"
                                  :border "none"
                                  :color "white"
                                  :text-align "center"
                                  :padding-top "24px"
                                  :font-size "1.5em"}}
                  [:a.navbar-brand.page-scroll {:href "#"} "Home"]]]
        ]
     [:div.simple-buttons.pull-right {:key 2}
      (map-indexed #(key-with %1 (nav-link
                                  (= active-key %2)
                                  (%2 nav-items)
                                  (fn [e] (core/click->event-bus e %2 :top))))
                   (keys nav-items))]
       [:#bs-example-navbar-collapse-1.collapse.nav-collapse
        [:ul.nav.navbar-nav.navbar-right
         [:li
          [:a {:href= "#"} "Home"]]
         [:li.page-scroll
          [:a {:href= "#"} "Intro"]]
         [:li.page-scroll
          [:a {:href= "#"} "Mapped Data"]]
         [:li.page-scroll
          [:a {:href= "#"} "Tabled Data"]]
         [:li.page-scroll
          [:a {:href= "#"} "Understanding the Data"]]
         ]]]]]))

(rum/defc header < rum/reactive [& deep]
  [:div
   {:style
    {:width "100%"
     :height (if deep "250px" "80px")
     :background-color "#475E63"
     :color "rgba(255,255,255,0.5)"
     :position "relative"
     }}
   (when deep
     [:div {:style
            {:position "absolute"
             :z-index 1;
             :left "37px"
             :top "60px"
             :background-image "url(assets/logo-placeholder.png)"
             :background-repeat "no-repeat"
             :width "200px"
             :height "180px"
             :border "none"
             :color "white"
             :text-align "center"
             :padding-top "24px"
             :font-size "1.5em"}}])
   (nav-bar (:page (rum/react core/app)))
   (when deep
     [:h1 {:style
           {:color "#CCDDFF"
            :position "relative"
            :font-size "2em"
            :top "5px"
            :right "25px"
            :text-align "right"
            :padding-left "300px"
            }} "UNDERSTANDING PUBLISHED CHILDREN’S HEART SURGERY OUTCOMES"])])



(rum/defc footer []
  [:.footer
   [:.pull-right (logger/playback-controls)]
   [:h3
    "Funding acknowledgement"]
   [:p
    "This project was funded by the National Institute for Health Research Health Services and Delivery Research Programme\n(project number 14/19/13)"]
   [:h3
    "Department of Health disclaimer"]
   [:p
    "The views and opinions expressed therein are those of the authors and do not necessarily reflect those of the Health Services and Delivery Research Programme, NIHR, NHS or the Department of Health."]
   ]
  )
