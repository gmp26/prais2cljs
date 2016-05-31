(ns ^:figwheel-always prais2.faqs
    (:require [rum.core]
              [prais2.core :as core]
              [prais2.utils :refer [key-with]]
              [prais2.content :as content :refer [faq-sections]]
              #?(:cljs [prais2.data :as data])
              [prais2.mugshots :as mugs]))

(comment
  ;;
  ;; Use this to regenerate the injected faq list in prais2/core
  ;; Currently, this is done by hand :(
  ;;
  (defn faq-refs
    "List all faq refs"
    []
    (into {} (for [section-ix (range (count faq-sections))
                   faq-ix (range (count (:faqs (faq-sections section-ix))))]
               [(str "faq/" section-ix "/" faq-ix) [:faq [section-ix faq-ix]]]))
    ))

(rum.core/defc render-short-answer [answer]
  [:section.short-answer
   [:.icon [:i.fa.fa-comment]]
   [:.reply answer]])


(rum.core/defc render-glossary-term [term]
  (let [entry (term content/glossary)]
    [:dl
     [:dt [:i (:title entry)]]
     [:dd (:body entry)]]))


(rum.core/defc render-glossary [glossary]
  [:div
   [:hr]
   (map-indexed key-with
                (map #(render-glossary-term %) glossary))])


(rum.core/defc render-faq-block [sec-ix block-class]
  (let [section (faq-sections sec-ix)]
    (when-not (:is-glossary section)
      [:div.faq-block {:class block-class}
       [:h4 {:key 1} (:section section)]
       (when (= sec-ix 1)
         [:video
          (core/isrc "assets/video02.mp4" :controls true :preload true)])
       [:ul.list-unstyled {:key 2}
        (for [[ix faq] (map-indexed vector (:faqs section))]
          [:li {:key ix} [:a (core/href (str "faq/" sec-ix "/" ix)) (:title faq)]])]])))


(rum.core/defc render-faq-top []
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

#?(:cljs
   (defn go-back [_]
     (.go js/history -1)))

(rum.core/defc render-faq-section [[section-ix ix :as faq-ref]]
  (prn "render-faq-section " faq-ref)
  [:.faq.col-sm-10.col-sm-offset-1.col-md-7.col-md-offset-1
     (let [section (faq-sections section-ix)
           faq ((:faqs section) ix)
           short-answer (:short-answer faq)
           glossary (:glossary faq)]
       [:div
        [:h2 {:key 1}
         [:.query {:key 1} [:i.fa.fa-question]]
         [:.title {:key 2} (:title faq)]]

        (when short-answer
          (do
            (prn "rendering short answer for section " section-ix "." ix)
            (render-short-answer short-answer)))
        [:div.body {:key 2}
         (when (= [4 0] faq-ref)
           (rum.core/with-key (mugs/mugshots) 4))
         (:body faq)]
        (when (> (count glossary) 0)
          (do
            (prn "rendering glossary " glossary)
            (render-glossary glossary)))
        [:button.btn.btn-primary.back
         ; :todo: replace with a call on history
         #?(:cljs {:key            3
                   :on-click       go-back                  ;#(core/click->event-bus % :faqs nil "faqs")
                   :on-touch-start go-back                  ;#(core/click->event-bus % :faqs nil "faqs")
                   })
         "Back"
         ]])])


(rum.core/defc render-faqs [faq-ref]

  [:.container-fluid.main-content
   [:.row
    (if (= nil faq-ref)
      (render-faq-top)
      (render-faq-section faq-ref)
      )
    ]])
