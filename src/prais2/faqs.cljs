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


(rum/defc render-short-answer [answer]
  [:section.short-answer
   [:.icon [:i.fa.fa-comment]]
   [:.reply answer]])


(rum/defc render-glossary-term [term]
  (let [entry (term content/glossary)]
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
         [:video {:controls true
                  :preload  true
                  :src      "assets/pr-animatic2.mp4"}])
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
  [:.faq.col-sm-10.col-sm-offset-1.col-md-7.col-md-offset-1
     (let [[section-ix ix] faq-ref
           section (faq-sections section-ix)
           faq ((:faqs section) ix)
           short-answer (:short-answer faq)
           glossary (:glossary faq)]
       [:div
        [:h2 {:key 1}
         [:div.query [:i.fa.fa-question]]
         [:div.title (:title faq)]]
        (when short-answer
          (do
            (prn "rendering short answer for section " section-ix "." ix)
            (render-short-answer short-answer)))
        [:div.body {:key 2} (:body faq)]
        (when (> (count glossary) 0)
          (do
            (prn "rendering glossary " glossary)
            (render-glossary glossary)))
        [:button.btn.btn-primary.back
         {:key 3
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
