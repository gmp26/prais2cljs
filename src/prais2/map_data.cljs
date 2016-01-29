(ns ^:figwheek-always prais2.map-data
    (:require [rum.core :as rum]
              [prais2.chrome :refer [what-why everything-else]]
              [prais2.utils :refer [key-with]]
              [prais2.core :as core :refer [event-bus bs-popover bs-tooltip]]
              [prais2.content :as content]
              [prais2.data :as data]
              [prais2.open-layers-map :as map]))

(rum/defc render-map-data < rum/reactive []
  [:.container
   [:.row
    [:section
     [:h2 "Mapped Data for April 2011 - March 2014"]
     [:p
      "There are fourteen hospitals in the UK and Ireland that perform heart surgery in children (0 - 16 years old)."]
     [:p "This data is updated annually and covers the most recent three year report period."]



     [:span
      [:.map-container (map/hospitals)]
      (if (nil? (:map-h-code (rum/react core/app)))
        [:ul.detail-container
         [:li "Either click on the relevant " [:img {:src "assets/icon.png"}] " button or use the map "
          [:.btn.btn-info
           "Menu " [:i.fa.fa-caret-down]]
          " to see results and information for a specific hospital."]

         [:li "Use the " [:.btn.btn-info "All UK"] " or " [:.btn.btn-info "Just London"]
          " buttons to return to a wider view."]

         [:li "Hover or tap features of the chart for more explanation."]
         [:li "For an explanation for how the predicted ranges are calculated see the "
          [:span.navbar-btn.nav-item.map-data {:style {:margin 0}} what-why]
          " page."]
         [:li "Further information is available on the "
          [:span.navbar-btn.nav-item.faqs {:style {:margin 0}} everything-else
           ]
          " page."]
         [:li "To see all hospitals together visit the "
          [:button.btn.btn-primary
           {:on-click #(core/click->event-bus % :data :table)
            :on-touch-start #(core/click->event-bus % :data :table)} "List"]
          " page."]]
        [:.detail-container (data/hospital-detail (:map-h-code (rum/react core/app)))])]]]])


(defn px [pixels] (str pixels "px"))

(rum/defc annotate [note placement top left]
  [:#tip1.tooltip.in {:role "tooltip"
                      :class placement
                      :style {:top (px top)
                              :left (px left)}}
   [:.tooltip-arrow]
   [:.tooltip-inner {:style {:background-color "#DBF8FE"
                             :width "auto"}} note]])


(rum/defc wrap [component text]
  [:div {:style {:border "1px solid black"}}
   text
   [:div
    component]])

(rum/defc explain-interpretation []
  [:.annotation  "We then add an interpretation of the observed survival rate"])


(rum/defc hospital-example < rum/reactive []
  (let [ap (rum/react core/app)]
    [:#detail {:style {:position "relative"}}

     (let [selected-row content/sample-hospital]

       (map-indexed key-with
                    [(data/sample-hospital-intro-text)
                     (data/hospital-header selected-row)
                     (data/slider-widget content/header-row data/detail-slider-control (:detail-slider-axis-value ap) 5)

                     (data/annotated-chart-cell selected-row (:detail-slider-axis-value ap) #{:inner} "We expect the hospital's survival rate to be inside this bar 19 times out of 20")
                     (data/annotated-chart-cell selected-row (:detail-slider-axis-value ap) #{:outer} "We expect the hospital's survival rate to be inside this bar 998 times out of a 1000")
                     (data/annotated-chart-cell selected-row (:detail-slider-axis-value ap) #{:dot} "The dot indicates the observed survival rate")
                     #_(explanation )
                     (data/annotated-chart-cell selected-row (:detail-slider-axis-value ap) #{:outer :inner :dot} "when combined")
                     (explain-interpretation)
                     (data/interpretation selected-row)
                     ]))]))



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
     [:.alert.alert-danger "IMPORTANT! The predicted range depends only on the actual patients treated at that hospital over that time period – so each hospital will have a different predicted range and its predicted range will vary from year to year."]


]]])
