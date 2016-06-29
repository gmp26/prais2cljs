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

(def block-classes ["faq-nav-1"
                    "faq-nav-3"
                    "faq-nav-2"
                    "faq-nav-4"
                    "faq-nav-4"
                    "faq-nav-4"
                    "faq-nav-4"
                    ])

(rum.core/defc render-faq-block [sec-ix]
  (let [section (faq-sections sec-ix)]
    (when-not (:is-glossary section)
      [:div.faq-block {:class (block-classes sec-ix)}
       [:h4 {:key 1}
        [:a (core/internal-ref (str "faq/" sec-ix)) (:section section)]]
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
   [:h1.col-md-12
    content/title]
   ;; new block menu

   ;; column 1
   [:div.col-sm-4.col-md-3
    (render-faq-block 0)
    (render-faq-block 2)]

   ;; column 2
   [:div.col-sm-4.col-md-6
    (render-faq-block 1)]

   ;; column 3
   [:div.col-sm-4.col-md-3
    (render-faq-block 3)
    (render-faq-block 4)
    (render-faq-block 5)]])

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

(defn gen-bread-title [state]
  (let [sec-ix (first (:rum/args state))]
    (:section (faq-sections sec-ix))))

(defn prev-faq [[section-ix ix :as faq-ref]]
  (str "faq/"
       (if (pos? ix)
         section-ix
         (max 0 (dec section-ix)))
       "/"
       (if (pos? ix)
         (dec ix)
         (if (pos? section-ix)
           (dec (count (:faqs (faq-sections (dec section-ix)))))
           0))))

(defn next-faq [[section-ix ix :as faq-ref]]
  (let [shown-section-count (dec (count faq-sections))
        faq-count (count (:faqs (faq-sections section-ix)))]
    (str "faq/"

         (if (>= (inc ix) faq-count)
           (if (< (inc section-ix) shown-section-count)
             (inc section-ix)
             section-ix)
           section-ix)

         "/"

         (if (>= (inc ix) faq-count)
           (if (< (inc section-ix) shown-section-count)
             0
             ix)
           (inc ix)
           ))))

(rum.core/defc paginator [[section-ix ix :as faq-ref]]
  [:nav
   [:ul.pager
    [:li [:a (core/internal-ref (prev-faq faq-ref)) "< previous"]]
    [:li [:a (core/internal-ref (next-faq faq-ref)) "next >"]]]]
  )


(rum.core/defc breadcrumb [[section-ix ix :as faq-ref]]
  (let [section (faq-sections section-ix)]
    [:ul.breadcrumb
     [:li [:a (core/internal-ref "faqs") "Everything Else"]]
     [:li (:section section)]
     ]))


(rum.core/defc render-one-faq-block < (core/update-title gen-bread-title)
                                      (core/update-description gen-bread-title) [sec-ix]

  [:.one-block.col-sm-10.col-sm-offset-1.col-md-7.col-md-offset-1
   (breadcrumb [sec-ix])
   [:h1 (:section  (faq-sections sec-ix))]
   (render-faq-block sec-ix)])

(rum.core/defc render-faq-section < (core/update-title gen-postfix)
                                    (core/update-description gen-description) [[section-ix ix :as faq-ref]]

  [:.faq.col-sm-10.col-sm-offset-1.col-md-7.col-md-offset-1
   (let [section (faq-sections section-ix)
         faq ((:faqs section) ix)
         short-answer (:short-answer faq)
         glossary (:glossary faq)]


     [:div
      (breadcrumb faq-ref)
      (paginator faq-ref)
      [:h1 {:key 1}
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
      (breadcrumb faq-ref)
      #_[:button.btn.btn-primary.back
       #?(:cljs {:key            3
                 :on-click       go-back
                 :on-touch-start go-back
                 })
       "Back"
       ]])])


(rum.core/defc render-faqs [[section-ix ix :as faq-ref]]

  [:.container-fluid.main-content
   [:.row
    (if (= nil faq-ref)
      (render-faq-top)
      (if (nil? ix)
        (render-one-faq-block section-ix)
        (render-faq-section faq-ref))
      )
    ]])
