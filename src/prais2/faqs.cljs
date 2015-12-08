(ns ^:figwheel-always prais2.faqs
    (:require [rum.core :as rum]
              [clojure.string :as str]
              [prais2.core :as core]
              [prais2.utils :refer [key-with]]
              [prais2.chrome :as chrome]
              [prais2.content :as content :refer [faq-sections]]))


(rum/defc callout []
  [:.callout])


(defn ix-col [index]
  (["rgba(127, 205, 187, 1)"
    "rgba(205, 127, 187, 1)"
    "rgba(127, 187, 205, 1)"
    ] (mod index 3)))

(rum/defc render-bubble-title [[index faq]]
  (prn "render-bubble-title " index)
  [:div
   (let [pull (if (even? index) "on-left" "on-right")
         ixc (ix-col index)]
     [:div
      [:.bubble {:class pull :style {:background-color ixc}} (:title faq)
       (if (even? index)
         [:.callout.left {:style {:background-color ixc}}]
         [:.callout.right {:style {:background-color ixc}}])]
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
  [:.container-fluid
   [:.row
    [:#faqs.col-md-8.offset
     [:h1 content/title]
     (map-indexed key-with (map render-section faq-sections))

]]])
