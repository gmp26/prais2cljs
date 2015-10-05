(ns ^:figwheel-always prais2.chrome
    (:require [rum :as r]
              [prais2.core :refer [event-bus]]
              [cljs.core.async :refer [put!]]
              [cljs.core.async :refer [put!]]))


(r/defc header []
  [:div
   {:style
    {:width "100%"
     :height "250px"
     :background-color "#343456"
     :color "#B3B3DE"
     :position "relative"
     }}
   [:div {:style
          {:position "absolute"
           :left "37px"
           :top "40px"
           :background-image "url(assets/logo-placeholder.png)"
           :background-repeat "no-repeat"
           :width "200px"
           :height "180px"
           :border "none"
           :color "white"
           :text-align "center"
           :padding-top "24px"
           :font-size "1.5em"}}]
   [:h1 {:style
         {:color "#CCDDFF"
          :position "absolute"
          :font-size "2em"
          :right "40px"
          :top "20px"
          :padding-left "40px"
          }} "UNDERSTANDING PUBLISHED CHILDREN’S HEART SURGERY OUTCOMES"]
  [:div {:style
         {:position "absolute"
          :bottom "20px"
          :right "20px"
          }}
   [:nav {:style {:margin "auto auto"}}
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
    ]]
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
