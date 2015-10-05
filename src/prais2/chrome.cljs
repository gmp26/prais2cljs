(ns ^:figwheel-always prais2.chrome
    (:require [rum :as r]
              [prais2.core :as core :refer [event-bus]]
              [cljs.core.async :refer [put!]]
              [cljs.core.async :refer [put!]]))



(defn rgba-string
  "return CSS rgba string"
  [[r g b a]]
  (str "rgba(" r "," g "," b "," a)
  )


(defrecord  Nav-item [long-title short-title class icon])


(def nav-items {:intro (Nav-item. "Introduction" "Intro" "nav-intro" "home")
                :data  (Nav-item. "Results Table" "Data" "nav-data" "table")
                :faqs  (Nav-item. "Frequently Asked Questions" "FAQs" "nav-faqs" "question")})

(r/defc nav-link [active-key key]
  (let [nav-item (key nav-items)]
    [:.simple-link {:class (str (:class nav-item) " " (if (= active-key key) "active" ""))
                    :on-click #(do (put! event-bus [key nil])
                                                   (.stopPropagation (.-nativeEvent %)))}
     [:i.fa {:class (str "fa-" (:icon nav-item))}] (str " " (:short-title nav-item))]))

(r/defc nav-bar [active-key]

  (let [nav-item (active-key nav-items)]
    [:div.simple-navbar
     [:h1 {:class (str "simple-title " (:class nav-item))}
      (:long-title nav-item)]
     [:div.simple-buttons.pull-right
      (for [k (keys nav-items)]
        (nav-link active-key k))
      ]
     ])
  )


(r/defc header < r/reactive [& deep]
  [:div
   {:style
    {:width "100%"
     :height (if deep "250px" "80px")
     :background-color "#343456"
     :color "#B3B3DE"
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
   (nav-bar (:page (r/react core/app)))
   (when deep
     [:h1 {:style
           {:color "#CCDDFF"
            :position "relative"
            :font-size "2em"
            :top "5px"
            :right "25px"
            :text-align "right"
            :padding-left "300px"
            }} "UNDERSTANDING PUBLISHED CHILDREN’S HEART SURGERY OUTCOMES"]
     #_[:div {:style
            {:position "absolute"
             :bottom "20px"
             :right "20px"
             }}
      #_[:nav {:style {:margin "auto auto"}}
         [:button.btn.btn-info.btn-lg {:on-click #(do (put! event-bus [:nav-intro :intro])
                                                      (.stopPropagation (.-nativeEvent %)))
                                       :style {:margin-right "10px"
                                               :color "#CAF3FF"}}
          [:i.fa.fa-home] " Intro"]
         [:button.btn.btn-danger.btn-lg {:on-click #(do (put! event-bus [:nav-data :intro])
                                                        (.stopPropagation (.-nativeEvent %)))
                                         :style {:margin-right "10px"
                                                 :color "#FFBCBA"}}
          [:i.fa.fa-table] " Data"]
         [:button.btn.btn-success.btn-lg {:on-click #(do (put! event-bus [:nav-faqs :intro])
                                                         (.stopPropagation (.-nativeEvent %)))
                                          :style {:margin-right "10px"
                                                  :color "#C0FFC0"}}
          [:i.fa.fa-question] " FAQs"]
         ]
      ])
     ]
  )



(r/defc footer []
  [:.footer
   [:h3
    "Funding acknowledgement"]
   [:p
    "This project was funded by the National Institute for Health Research Health Services and Delivery Research Programme\n(project number 14/19/13)"]
   [:h3
    "Department of Health disclaimer"]
   [:p
    "The views and opinions expressed therein are those of the authors and do not necessarily reflect those of the Health Services and Delivery Research Programme, NIHR, NHS or the Department of Health."]])
