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
            [:h2 "Mapped data for April 2011 - March 2014"]
            [:p
             "There are fourteen hospitals in the UK and Ireland that perform heart surgery in children (0 - 16 years old)."]
            [:p
             "This data is updated annually and covers the most recent three year report period."]]



           [:.hospital-map.col-sm-6.col-md-4.col-xs-12
            (map/hospitals)]

           (if (nil? (:map-h-code (rum/react core/app)))
             [:.col-sm-6.col-xs-12.col-md-8 (hospital-list)]
             [:.col-sm-6.col-xs-12.col-md-8
              [:div.clearfix
               [:button.btn.btn-primary.pull-left {:type      "button"
                                                   :on-click  #(core/click->event-bus % :reset-map-to-home nil)
                                                   :tab-index 0}
                [:i.fa.fa-chevron-left] " Back"]]
              (data/hospital-detail (:map-h-code (rum/react core/app)))])])


(defn px [pixels] (str pixels "px"))


(rum/defc explain-interpretation []
  [:.annotation  "We then add an interpretation of the survival rate"])







