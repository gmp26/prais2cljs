(ns ^:figwheek-always prais2.map-data
  (:require
    [rum.core]
    [cljs.core.async :refer [<! put! timeout]]
    [prais2.chrome :refer [what-why everything-else]]
    [prais2.utils :refer [key-with]]
    [prais2.core :as core :refer [event-bus bs-popover bs-tooltip]]
    [prais2.content :as content]
    [prais2.data :as data]
    [prais2.open-layers-map :as map]))


(rum.core/defc hospital-item [row]
  [:li {:on-click  #(put! event-bus [:click-on-map-menu-item (keyword (:h-code row))])
        :on-touch-start  #(put! event-bus [:click-on-map-menu-item (keyword (:h-code row))])}
   (:h-name row) [:i.fa.fa-chevron-right.pull-right]
   ])

(rum.core/defc hospital-list < rum.core/reactive []
  (let [rows (sort-by :h-name ((:datasource (rum.core/react core/app)) content/datasources))]
    [:ul.h-nav.col-sm.6.col-md-8
     (map-indexed key-with (map hospital-item rows))]))


(rum.core/defc render-map-data < (core/update-title "Choose a hospital")
                                 (core/update-description "Choose a hospital and view its child heart surgery survival data")
                                 rum.core/reactive []
  [:div
   [:section.col-sm-offset-1.col-sm-10

    [:.row
     [:.col-sm-9
      (data/datasource-title "Data for ")]
     [:.col-sm-3 (data/datasource-dropdown event-bus)]]

    [:.row
     [:p.col-sm-9 "Choose a hospital from the list or the map to see its data. "]]
    #_[:p "These are the hospitals in the UK and Ireland that performed heart surgery in children over this
             period (0-16 years old). This data is updated annually and covers a 3 year reporting period."]

    ]

   (if (nil? (:map-h-code (rum.core/react core/app)))
     [:.col-sm-6.col-md-offset-1.col-md-7 (hospital-list)]
     [:.col-sm-6..col-md-offset-1.col-md-7
      [:div.clearfix
       [:button.btn.btn-primary.pull-left {:type           "button"
                                           :on-click       #(core/click->event-bus % :reset-map-to-home nil nil)
                                           :on-touch-start #(core/click->event-bus % :reset-map-to-home nil nil)
                                           :tab-index      0}
        [:i.fa.fa-chevron-left] " Back"]]
      (data/hospital-detail (:map-h-code (rum.core/react core/app)) nil)])

   [:.hospital-map.col-sm-6.col-md-4.col-xs-12
    (map/hospitals)]])


(defn px [pixels] (str pixels "px"))







