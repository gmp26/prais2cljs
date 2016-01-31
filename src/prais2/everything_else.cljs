(ns ^:figwheel-always prais2.everything-else
    (:require [rum.core :as rum]
              [clojure.string :as str]
              [prais2.core :as core]
              [prais2.faqs :as faqs]
              [prais2.utils :refer [key-with]]
              [prais2.chrome :as chrome]
              [prais2.content :as content :refer [faq-sections]]))

;; See http://jsfiddle.net/mtjhax/q4p5r/1/ for simple scrollspy

(defn faq-id
  ([six] (str "faqss" six))
  ([six fix] (str "faqss" six "-" fix)))

(defn faq-hash [& args]
  (str "#" (apply faq-id args)))

#_(defn faq-hash
  ([six] (str "#" (faq-id six)))
  ([six fix] (str  "#" (faq-id six fix)))
  )

(def scrollspy
  {:did-mount (fn [state]
                (.scrollspy (js/$ "body") (clj->js {:target "#faq-sidebar"}))
                state)
   })

(rum/defc render-everything-else < scrollspy [faq-ref]
  [:.container
   [:#sidebar.row {:style {:position "relative"}}

    [:#faq-sidebar.col-md-3.affix {:style {:top "120px"}}
     [:h1 content/title]
     [:ul.nav.nav-list
      (for [six (range (count faq-sections))
           :let [section (faq-sections six)]]
        [:li
         [:a {:href (faq-hash six)
              :data-target (faq-hash six)} (:section  section)]
         #_[:ul.nav
          (let [faqs (:faqs section)]
            (for [fix (range (count faqs))
                  :let [faq (faqs fix)]]
              [:li
               [:a {:href (faq-hash six fix)} (:title faq)]]))]])
      ]]

    [:#faqs.col-md-offset-4.col-md-8

     (for [six (range (count faq-sections))
           :let [section (faq-sections six)]]
       [:div {:id (faq-id six)
              :style {:padding-top "40px"}}
        [:h2 (:section section)]
        (let [faqs (:faqs section)]
          (for [fix (range (count faqs))
                :let [faq (faqs fix)]]
            [:div.clearfix {:id (faq-id six fix)
                            :style {:padding-top "40px"} }
             [:h3  (:title faq)]
             [:div (:body faq)]]))])
     ]]

])
