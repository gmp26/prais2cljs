(ns prais2.components.body
  (:require [rum.core]
            [prais2.components.static-home :refer [static-home]]
            [prais2.components.analytics :refer [analytics]]
            [prais2.components.browser-update :refer [browser-update]]))

(rum.core/defc body [content]
  [:body

   #?(:clj [:#app (content)])
   #?(:cljs [:#app                                          ; the spinner is unused now!
             [:i.fa.fa-spinner.fa-pulse
              {:style {:font-size "100px"
                       :position  "absolute"
                       :top       "20%"
                       :left      "calc(50% - 50px)"
                       :color     "#000000"}}]])

   (analytics "UA-77529676-1")
   (browser-update)


   ;; goog.History needs this to make it reloadable in figwheel -->
   [:#dummy {:display "none"}]
   [:script {:src "/js/compiled/prais2.js"}]])