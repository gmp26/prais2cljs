(ns ^:figwheel-always prais2.faqs
  (:require [rum.core]
            [prais2.core :as core]
            [prais2.utils :refer [key-with]]
            [prais2.content :as content :refer [faq-sections]]
            [prais2.components.video-player :refer [video-js]]
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
     [:dd
      [:div
       (:body entry)
       #?(:cljs (when (= term :predicted-range)
                  (data/chart-cell content/sample-hospital 1)))]]]))

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
         (video-js {:video-id  "video2"
                    :src       "/assets/video02.mp4"
                    :controls  true
                    :preload   ""
                    :poster    "/assets/video-2-thumbnail.png"
                    :track-src "/assets/video02.vtt"})
         #_[:video#video2
            (core/isrc "assets/video02.mp4" :poster "/assets/video-2-thumbnail.png" :controls true :preload true)])
       [:ul.list-unstyled {:key 2}
        (for [[ix faq] (map-indexed vector (:faqs section))]
          [:li {:key ix} [:a (core/href (str "faq/" sec-ix "/" ix)) (:title faq)]])]])))


(rum.core/defc render-faq-top < (core/update-title "Everything Else")
                                (core/update-description "Background, Limitations, Predicted range (with video explanation), Family and Child, Charities, About Us") []
  [:div
   [:h1.col-md-12 content/title]
   ;; new block menu

   ;; column 1
   [:div.col-sm-4.col-md-3
    (render-faq-block 0 "faq-nav-1")
    (render-faq-block 2 "faq-nav-2")]

   ;; column 2
   [:div.col-sm-4.col-md-6
    (render-faq-block 1 "faq-nav-3")]

   ;; column 3
   [:div.col-sm-4.col-md-3
    (render-faq-block 3 "faq-nav-4")
    (render-faq-block 4 "faq-nav-4")
    (render-faq-block 5 "faq-nav-4")
    ;(render-faq-block 6 "faq-nav-4")
    ]])

#?(:cljs
   (defn go-back [_]
     (.go js/history -1)))

(defn gen-postfix [state]
  (let [[section-ix ix] (first (:rum/args state))
        section (faq-sections section-ix)]
    (:section section)))

(defn gen-description [state]
  (let [[section-ix ix] (first (:rum/args state))
        section (faq-sections section-ix)
        faq ((:faqs section) ix)]
    (or (:short-title faq) (:title faq))))

(rum.core/defc breadcrumb [[section-ix ix :as faq-ref]]
  (let [section (faq-sections section-ix)
        faq ((:faqs section) ix)
        short-answer (:short-answer faq)
        glossary (:glossary faq)]
    [:ul.breadcrumb
     [:li "Everything Else"]
     [:li (:section section)]
     [:li (str ix)]]))

(rum.core/defc render-faq-section < (core/update-title gen-postfix)
                                    (core/update-description gen-description) [[section-ix ix :as faq-ref]]
  (prn "render-faq-section " faq-ref)
  [:.faq.col-sm-10.col-sm-offset-1.col-md-7.col-md-offset-1
   (let [section (faq-sections section-ix)
         faq ((:faqs section) ix)
         short-answer (:short-answer faq)
         glossary (:glossary faq)]

     [:div
      (breadcrumb faq-ref)
      #_[:ul.breadcrumb
       [:li "Everything Else"]
       [:li (:section section)]]
      [:h2 {:key 1}
       [:.query {:key 1} [:i.fa.fa-question]]
       [:.title {:key 2} (:title faq)]]

      (when short-answer
        (do
          (prn "rendering short answer for section " section-ix "." ix)
          (render-short-answer short-answer)))
      [:div.body {:key 2}
       (when (= [4 0] faq-ref)
         (rum.core/with-key (mugs/reformatted-mugshots) 4))
       (:body faq)]
      (when (> (count glossary) 0)
        (do
          (prn "rendering glossary " glossary)
          (render-glossary glossary)))
      [:button.btn.btn-primary.back
       #?(:cljs {:key            3
                 :on-click       go-back
                 :on-touch-start go-back
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
