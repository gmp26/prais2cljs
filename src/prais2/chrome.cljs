(ns ^:figwheel-always prais2.chrome
    (:require [rum.core :as rum]
              [cljsjs.jquery]
              [cljsjs.bootstrap]
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
  [:.simple-link {:class (str (:class nav-item) " " (if active? "active " " "))
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


(rum/defc bs-nav-link [active? nav-item click-handler]
  [:li
   [:button.navbar-btn {:on-click click-handler
                        :class (str (if active? " active " " ") (:class nav-item))}
    [:i.fa {:class (str "fa-" (:icon nav-item))}]
    (str " " (:short-title nav-item))]])

(rum/defc bs-fixed-navbar  [active-key]
  (let [nav-item (active-key nav-items)]
    [:nav.navbar.navbar-simple.navbar-fixed-top {:margin-bottom 0}
     [:.navbar-inner
      [:.container
       [:.navbar-header {:key 1}
        [:button.navbar-toggle.collapsed {:key 1
                                          :type "button"
                                          :data-toggle "collapse"
                                          :data-target "#navbar"
                                          :aria-expanded "false"
                                          :aria-controls "navbar"}
         [:span.sr-only {:key 1} "Toggle navigation"]
         [:span.icon-bar {:key 2}]
         [:span.icon-bar {:key 3}]
         [:span.icon-bar {:key 4}]]
        [:a.navbar-brand {:key 2
                          :href "#"} "Home"]
        ]
       [:#navbar.navbar-collapse.collapse {:key 2}
        [:ul.nav.navbar-nav.navbar-right {:key 1}
         (map-indexed #(key-with %1 (bs-nav-link
                                     (= active-key %2)
                                     (%2 nav-items)
                                     (fn [e] (core/click->event-bus e %2 :top))))
                      (keys nav-items))

         ]
        #_[:ul.nav.navbar-nav.navbar-right {:key 2}
           (map-indexed #(key-with %1 (bs-nav-link
                                       (= active-key %2)
                                       (%2 nav-items)
                                       (fn [e] (core/click->event-bus e %2 :top))))
                        (take 2 (drop 2 (keys nav-items))))

           ]]]]]))

(rum/defc header < rum/reactive [& deep]
  [:div
   (bs-fixed-navbar (:page (rum/react core/app)))
   [:div.blurred
    {:style
     {:width "100%"
      :height (if deep "170px" "80px")
      :background-color "#475E63"
      :color "rgba(255,255,255,0.5)"
      :position "relative"
      }}
    (when deep
      [:div
       [:div {:style
              {:position "relative"
               :z-index 1;
               :left "12px"
               :top "20px"
               :background-image "url(assets/logo-placeholder.png)"
               :background-repeat "no-repeat"
               :background-size "100%"
               :width "150px"
               :height "135px"
               :border "none"
               :color "white"
               :text-align "right"
               :float "left"
               :padding-top "24px"}}

        ]
       [:h3 {:style
             {:float "right"
              :clear "none"
              :color "#CCDDFF"
              :width "calc(100% - 160px)"
              :position "relative"
              :top "0px"
              :right "25px"
              :text-align "right"
              :z-index 100
              }} "UNDERSTANDING PUBLISHED CHILDREN’S HEART SURGERY OUTCOMES"]])
    ]])



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
