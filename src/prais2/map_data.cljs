(ns ^:figwheek-always prais2.map-data
    (:require [rum.core :as rum]
              [cljs.core.async :refer [<! put! timeout]]
              [prais2.chrome :refer [what-why everything-else]]
              [prais2.utils :refer [key-with]]
              [prais2.core :as core :refer [event-bus bs-popover bs-tooltip]]
              [prais2.content :as content]
              [prais2.data :as data]
              [prais2.open-layers-map :as map]))


(rum/defc hospital-item [row]
          [:li [:a
                {:tab-index 0
                 :on-click #(put! event-bus [:click-on-map-menu-item (keyword (:h-code row))])}
                (:h-name row) [:i.fa.fa-chevron-right.pull-right]]])

(rum/defc hospital-list < rum/reactive []
          (let [rows ((:datasource (rum/react core/app)) content/datasources)]
            [:ul.h-nav.col-sm.6.col-md-8
             (map-indexed key-with (map hospital-item rows))]))


(rum/defc render-map-data < rum/reactive []
  [:.container
   [:section.row
    [:h2.col-sm-12 "Mapped data for April 2011 - March 2014"]
    [:p.col-sm-12
     "There are fourteen hospitals in the UK and Ireland that perform heart surgery in children (0 - 16 years old)."]
    [:p.col-sm-12 "This data is updated annually and covers the most recent three year report period."]



    [:.hospital-map.col-sm-6.col-md-4.col-xs-5
     (map/hospitals)]

    (if (nil? (:map-h-code (rum/react core/app)))
      [:.col-sm-6.col-xs-7.col-md-7 (hospital-list)]
      [:.col-sm-6.col-xs-7.col-md-7
       [:div.clearfix
        [:button.btn.btn-primary.pull-left {:type      "button"
                                            :on-click  #(core/click->event-bus % :reset-map-to-home nil)
                                            :tab-index 0}
         [:i.fa.fa-chevron-left] " Back"]]
       (data/hospital-detail (:map-h-code (rum/react core/app)))])]])


       #_[:col-sm-6.col-xs-6 {:style {:margin "40px 0px"}}
        [:img {:src "assets/icon.png"}]
        [:p "Click on a hospital or use the menu"]
        [:.btn.btn-info.disabled {:style {:width "80px"}}
         "Menu " [:i.fa.fa-caret-down]]
        [:div {:style {:margin-top "60px"
                       :padding    "10px"
                       :box-shadow "1px 1px 4px #CCCCCC"}}
         [:span "Return to a wider view with the "
          [:.btn.btn-info.disabled "All UK"] " or "
          [:.btn.btn-info.disabled "Just London"] " buttons."]]
        ]


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
  [:.annotation  "We then add an interpretation of the survival rate"])


(rum/defc hospital-example < rum/reactive []
  (let [ap (rum/react core/app)]
    [:#detail {:style {:position "relative"}}

     (let [selected-row content/sample-hospital]

       (map-indexed key-with
                    [(data/sample-hospital-intro-text)
                     (data/hospital-header selected-row)
                     (data/slider-widget content/header-row data/detail-slider-control (:detail-slider-axis-value ap) 5)

                     (data/annotated-chart-cell selected-row (:detail-slider-axis-value ap) #{:inner} "The predicted range: we expect the hospital's survival rate to be inside this bar 19 times out of 20")
                     (data/annotated-chart-cell selected-row (:detail-slider-axis-value ap) #{:outer} "The extended predicted range: we expect the hospital's survival rate to be inside this bar 998 times out of a 1000")
                     (data/annotated-chart-cell selected-row (:detail-slider-axis-value ap) #{:dot} "Survival rate: the black dot shows the hospital's survival rate")
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
     [:h3 {:data-title "Foo" :data-trigger "manual" :data-toggle "tooltip" :data-placement "bottom"}      "We present each hospital's survival rate in the context of its predicted range - see illustration below."]

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
