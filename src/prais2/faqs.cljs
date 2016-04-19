(ns ^:figwheel-always prais2.faqs
    (:require [rum.core :as rum]
              [clojure.string :as str]
              [prais2.core :as core]
              [prais2.utils :refer [key-with]]
              [prais2.chrome :as chrome]
              [prais2.content :as content :refer [faq-sections]]
              [prais2.data :as data]))

(defn ix-col [index]
  (["rgba(127, 205, 187, 1)"
    "rgba(205, 127, 187, 1)"
    "rgba(127, 187, 205, 1)"
    ] (mod index 3)))

#_(rum/defc render-bubble-title [section-ix [index faq]]
  [:div
   (let [pull (if (even? index) "on-left" "on-right")
         ixc (ix-col index)
         faq-ref [section-ix index]]
     [:div
      [:.bubble {:class pull :style {:background-color ixc}
                 :on-click #(core/click->event-bus % :show-faq faq-ref)
                 :on-touch-start #(core/click->event-bus % :show-faq faq-ref)
                 }
       (:title faq)]
      ]
     )])

#_(rum/defc render-section [[section-ix faq-section]]
  [:.bubble-group
   [:h2 (:section faq-section)]
   (map-indexed key-with
                (map #(render-bubble-title section-ix %1)
                     (vec (zipmap (range) (:faqs faq-section)))))]
  )

(rum/defc render-short-answer [answer]
  [:div {:style {:margin-top "30px"}}
   [:div {:style {:margin-top "0px"
                  :width "80px"
                  :font-size "21px"
                  :font-weight 200
                  :float "left"
                  :clear "left"
                  }} [:i.fa.fa-comment {:style {:color "#FFA500"
                                                :font-size "50px"}}]]
   [:div {:style {:font-size "21px"
                  :font-weight 200
                  :margin-bottom "40px"
                  }}
    answer]])

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

(rum/defc render-faq-block [sec-ix block-class]
  (let [section (content/faq-sections sec-ix)]
    (when-not (:is-glossary section)
      [:div.faq-block {:class block-class}
       [:h4 {:key 1} (:section section)]
       (when (= sec-ix 1)
         [:video {:controls "true"
                  :style {:width "100%"}
                  :src "assets/predicted-range.mp4"}])
       [:ul.list-unstyled {:key 2}
        (for [[ix faq] (map-indexed vector (:faqs section))]
          [:li {:key ix} [:a {:href (str "#/faq/" sec-ix "/" ix)} (:title faq)]])]
       (when (= sec-ix 1)
         (data/legend))])))


(rum/defc render-faq-top [faq-ref]
  [:div
   [:h1.col-md-12 content/title]
   ;; new block menu

   ;; column 1
   [:div.col-sm-3
    (render-faq-block 0 "faq-nav-1")
    (render-faq-block 2 "faq-nav-2")]

   ;; column 2
   [:div.col-sm-6
    (render-faq-block 1 "faq-nav-3")]

   ;; column 3
   [:div.col-sm-3
    (render-faq-block 3 "faq-nav-4")
    (render-faq-block 4 "faq-nav-4")
    (render-faq-block 5 "faq-nav-4")
    ;(render-faq-block 6 "faq-nav-4")
    ]

   ;; old bubble menu
   #_(map-indexed key-with
                  (map render-section
                       (vec (zipmap (range) faq-sections))))])


(rum/defc render-faq-section [faq-ref]
  [:#faq.col-sm-10.col-sm-offset-1
     (let [[section-ix ix] faq-ref
           section (faq-sections section-ix)
           faq ((:faqs section) ix)
           short-answer (:short-answer faq)
           glossary (:glossary faq)]
       [:div
        [:h2 {:key 1}
         [:div {:style {:margin-top "-32px"
                        :width "80px"
                        :float "left"}} [:i.fa.fa-question {:style {:font-size "100px"
                                                                    :color "#FFA500"}}]]
         [:div {:style {:margin-top "40px"}}
          (:title faq)]]
        (when short-answer
          (do
            (prn "rendering short answer for section " section-ix "." ix)
            (render-short-answer short-answer)))
        [:div {:key 2
               :style {:clear "both"}} (:body faq)]
        (when (> (count glossary) 0)
          (do
            (prn "rendering glossary " glossary)
            (render-glossary glossary)))
        [:button.btn.btn-primary
         {:key 3
          :style {:margin-bottom "100px"}
          :on-click #(core/click->event-bus % :faqs :top)
          :on-touch-start #(core/click->event-bus % :faqs :top)
          }
         "Back"
         ]])])


(rum/defc render-faqs [faq-ref]

  [:.container-fluid
   [:.row

    (if (= :top faq-ref)
      (render-faq-top faq-ref)
      (render-faq-section faq-ref)
      )
    ]])
