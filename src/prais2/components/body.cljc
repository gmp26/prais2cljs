(ns prais2.components.body
  (:require [rum.core :as rum :include-macros true]
            [prais2.components.static-home :refer [static-home]]
            [prais2.components.analytics :refer [spa-analytics]]
            [prais2.components.browser-update :refer [browser-update]]))

(rum.core/defc body [content]
               [:body
                #?(:clj [:#app (content)])
                #?(:cljs [:#app                             ; the spinner is unused now!
                          [:i.fa.fa-spinner.fa-pulse
                           {:style {:font-size "100px"
                                    :position  "absolute"
                                    :top       "20%"
                                    :left      "calc(50% - 50px)"
                                    :color     "#000000"}}]])

                ;; goog.History needs this to make it reloadable in figwheel -->
                [:#dummy {:display "none"}]

                (spa-analytics "UA-77529676-1")
                [:script {:async true :src "https://www.google-analytics.com/analytics.js"}]
                [:script {:async true :src "/js/autotrack.js"}]

                ;(browser-update)


                [:script {:src "/js/compiled/prais2.js"}]

                ])