(ns prais2.components.body
  (:require [rum.core :as rum]
            [prais2.components.analytics :refer [analytics]]))

(rum/defc body []
  [:body
   [:#app
    [:div [:i.fa.fa-spinner.fa-pulse
           {:style {:font-size "100px"
                    :position "absolute"
                    :top "20%"
                    :left "calc(50% - 50px)"
                    :color "#000000"}}]]]
   (analytics "UA-77529676-1")

   ;; goog.History needs this to make it reloadable in figwheel -->
   [:#dummy {:display "none"}]
   [:script {:src "js/compiled/prais2.js"}]
   ])