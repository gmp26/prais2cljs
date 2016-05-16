(ns prais2.components.body
  (:require [rum.core :as rum]
            [prais2.components.static-home :refer [static-home]]
            [prais2.components.analytics :refer [analytics]]))

(rum/defc body []
          [:body
           [:#app (static-home)]

           (analytics "UA-77529676-1")

           ;; goog.History needs this to make it reloadable in figwheel -->
           [:#dummy {:display "none"}]
           [:script {:src "js/compiled/prais2.js"}]
           ])