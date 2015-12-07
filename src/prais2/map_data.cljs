(ns ^:figwheek-always prais2.map-data
    (:require [rum.core :as rum]
              [prais2.core :as core :refer [event-bus bs-popover bs-tooltip]]
              [prais2.content :as content]
              [prais2.data :as data]
              [prais2.open-layers-map :as map]))

(rum/defc render-map-data < rum/reactive []
  [:.container
   [:.row
    [:section
     [:h1 "Mapped Data"]
     [:p
      "There are fourteen hospitals in the UK and Ireland that perform heart surgery in children (here a child means someone under the age of 16)."]
     [:p
      "We have marked these hospitals on the map. Click on a hospital's marker or menu item and a summary report will appear alongside or underneath. Mouse over or click on the bars and dot within the summary data chart for further explanation."]
     [:p "To see all hospitals together "
      [:button.btn.btn-link {:style {:padding 0}
                             :on-click #(core/click->event-bus % :data nil)} "visit the data page"]
      "."]

     [:span
      [:.map-container (map/hospitals)]
      [:.detail-container (data/hospital-detail (:map-h-code (rum/react core/app)))]]]]])
