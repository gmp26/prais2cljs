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

(rum/defc render-bubble-title [section-ix [index faq]]
  (prn "render-bubble-title " index)
  [:div
   (let [pull (if (even? index) "on-left" "on-right")
         ixc (ix-col index)
         faq-ref [section-ix index]]
     [:div
      [:.bubble {:class pull :style {:background-color ixc}
                 :on-click #(core/click->event-bus % :show-faq faq-ref)
                 :on-touch-start #(core/click->event-bus % :show-faq faq-ref)
                 }
       (:title faq)
       (if (even? index)
         [:.callout.left {:style {:background-color ixc}}]
         [:.callout.right {:style {:background-color ixc}}])]
      ]
     )])

(rum/defc render-section [[section-ix faq-section]]
  [:.bubble-group
   [:h2 (:section faq-section)]
   (map-indexed key-with
                (map #(render-bubble-title section-ix %1)
                     (vec (zipmap (range) (:faqs faq-section)))))]
  )

(rum/defc render-glossary-term [term]
  (let [entry (term content/glossary)]
    (prn "rendering glossary term " term)
    [:dl
     [:dt [:i (:title entry)]]
     [:dd (:body entry)]]))

(rum/defc render-glossary [glossary]
  [:div
   [:hr]
   (map-indexed key-with
                (map #(render-glossary-term %) glossary))])

(rum/defc render-faqs [faq-ref]
  [:.container
   [:.row
    (if (= :top faq-ref)
      [:#faqs.col-md-12
       [:h1 content/title]
       (map-indexed key-with
                    (map render-section
                         (vec (zipmap (range) faq-sections))))

       ]
      [:#faq.col-md-10.col-md-offset-1
       (let [[section-ix ix] faq-ref
             section (faq-sections section-ix)
             faq ((:faqs section) ix)
             glossary (:glossary faq)]
         [:div
          [:h1 {:key 1} (:title faq)]
          [:div {:key 2} (:body faq)]
          (when (> (count glossary) 0)
            (do
              (prn "rendering glossary " glossary)
              (render-glossary glossary)))
          [:button.btn.btn-primary
           {:key 3
            :on-click #(core/click->event-bus % :faqs :top)
            :on-touch-start #(core/click->event-bus % :faqs :top)
            }
           "Back"
           ]
          ])])]])
