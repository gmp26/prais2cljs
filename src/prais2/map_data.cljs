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
          (let [rows (sort-by :h-name ((:datasource (rum/react core/app)) content/datasources))]
            [:ul.h-nav.col-sm.6.col-md-8
             (map-indexed key-with (map hospital-item rows))]))


(rum/defc render-map-data < rum/reactive []
          [:div
           [:section.col-sm-offset-1.col-sm-10

            [:.row
             [:.col-sm-9
              (data/datasource-title "Data for " (data/end-year))]
             [:.col-sm-3 (data/datasource-dropdown event-bus)]]


            [:p "These are the hospitals in the UK and Ireland that performed heart surgery in children over this
             period (0-16 years old). This data is updated annually and covers a 3 year reporting period."]

            ]

           (if (nil? (:map-h-code (rum/react core/app)))
             [:.col-sm-6.col-md-offset-1.col-md-7 (hospital-list)]
             [:.col-sm-6..col-md-offset-1.col-md-7
              [:div.clearfix
               [:button.btn.btn-primary.pull-left {:type      "button"
                                                   :on-click  #(core/click->event-bus % :reset-map-to-home nil nil)
                                                   :on-touch-start  #(core/click->event-bus % :reset-map-to-home nil nil)
                                                   :tab-index 0}
                [:i.fa.fa-chevron-left] " Back"]]
              (data/hospital-detail (:map-h-code (rum/react core/app)))])

           [:.hospital-map.col-sm-6.col-md-4.col-xs-12
            (map/hospitals)]])


(defn px [pixels] (str pixels "px"))


(rum/defc explain-interpretation []
  [:.annotation  "We then add an interpretation of the survival rate"])







