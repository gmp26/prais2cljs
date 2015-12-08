(ns ^:figwheel-always prais2.faqs
    (:require [rum.core :as rum]
              [clojure.string :as str]
              [prais2.core :as core]
              [prais2.utils :refer [key-with]]
              [prais2.chrome :as chrome]
              [prais2.content :as content :refer [faq-sections]]))


(rum/defc callout []
  [:div
   [:.callout]])

(rum/defc render-bubble-title [[index faq]]
  (prn "render-bubble-title " index)
  [:div
   (let [pull (if (even? index) "on-left" "on-right")]
     [:div
      [:.bubble {:class pull} (:title faq)
       (callout)]
      ]
     )])

(rum/defc render-section [faq-section]
  [:.bubble-group
   [:h2 (:section faq-section)]
   (map-indexed key-with
                (map render-bubble-title
                     (vec (zipmap (range) (:faqs faq-section)))))]
  )

(rum/defc render-faqs [section-id]
  (prn "rendering faqs " section-id)
  [:.container
   [:.row
    [:#faqs.col-md-8.offset
     [:h1 content/title]
     (map-indexed key-with (map render-section faq-sections))

]]])
