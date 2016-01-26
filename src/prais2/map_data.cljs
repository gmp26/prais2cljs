(ns ^:figwheek-always prais2.map-data
    (:require [rum.core :as rum]
              [prais2.utils :refer [key-with]]
              [prais2.core :as core :refer [event-bus bs-popover bs-tooltip]]
              [prais2.content :as content]
              [prais2.data :as data]
              [prais2.open-layers-map :as map]))

(rum/defc render-map-data < rum/reactive []
  [:.container
   [:.row
    [:section
     [:h1 "Mapped Data for 2011-2014"]
     [:p
      "There are fourteen hospitals in the UK and Ireland that perform heart surgery in children (here a child means someone under the age of 16)."]
     [:p "This data is updated annually and covers the last three years. The survival data in this map is from 2011-14"]

     [:p "To see all hospitals together "
      [:button.btn.btn-link {:style {:padding 0}
                             :on-click #(core/click->event-bus % :data nil)} "visit the data page"]
      "."]

     [:span
      [:.map-container (map/hospitals)]
      [:.detail-container (data/hospital-detail (:map-h-code (rum/react core/app)))]]]]])


(rum/defc annotate [note]
  [:#tip1.tooltip.top.in {:role "tooltip"
                          :data-placement "bottom"}
   [:.tooltip-arrow]
   [:.tooltip-inner note]])

(rum/defc static-bars [width]
  [:.bar-chart
   [:.bar.button {:style
                  {:border-radius "0px" :width width :height "25px" :background-color "rgb(249,249,249)"}}
    ]])


(rum/defc hospital-example < rum/reactive
  []
  (let [ap (rum/react core/app)]
    [:#detail
     (let [selected-row content/sample-hospital]

       (map-indexed key-with
                    [(data/sample-hospital-intro-text)
                     (annotate "Ii there")
                     (data/hospital-header selected-row)
                     (data/slider-widget content/header-row data/detail-slider-control (:detail-slider-axis-value ap))
                     (static-bars "95%")

                     (data/chart-cell selected-row (:detail-slider-axis-value ap))
                     (data/interpretation selected-row)]))]))


(rum/defc render-sample-data < rum/reactive []
  [:#sample.container
   [:.row
    [:section {:style {:max-width "800px"}}
     [:p]
     [:h3 {:data-title "Foo" :data-trigger "manual" :data-toggle "tooltip" :data-placement "bottom"}
      "We present each hospital's observed survival in the context of its predicted range - see illustration below."]

     [:div {:style
            {:border-radius "5px"
             :border "1px solid #CCCCCC"
             :margin "10px"
             :padding "20px"
             :box-shadow "2px 2px 2px #888888"}}
      (hospital-example)]

     [:p]
     [:.alert.alert-danger "IMPORTANT: If one hospital has a lower predicted range than another it is only because it treated children with more complex medical problems over that 3 year period!"]


]]])
