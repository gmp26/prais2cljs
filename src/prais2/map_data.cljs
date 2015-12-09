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
     [:h1 "Mapped Data for 2011-2014"]
     [:p
      "There are fourteen hospitals in the UK and Ireland that perform heart surgery in children (here a child means someone under the age of 16)."]
     [:p "This data is updated annually and covers the last three years. The survival data in this map is from 2011-14"]
     #_[:p
      "We have marked these hospitals on the map. Click on a hospital's marker or menu item and a summary report will appear alongside or underneath. Mouse over or click on the bars and dot within the summary data chart for further explanation."]
     [:p "To see all hospitals together "
      [:button.btn.btn-link {:style {:padding 0}
                             :on-click #(core/click->event-bus % :data nil)} "visit the data page"]
      "."]

     [:span
      [:.map-container (map/hospitals)]
      [:.detail-container (data/hospital-detail (:map-h-code (rum/react core/app)))]]]]])


(comment



[:p.MsoNormal
 [:span
  {:style "color:#0070C0"}]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:span
  [:b
   [:span
    {:style "color:#6600CC"}
    "Map of hospitals and their results [ (PS Love this map &amp; presentation!!)]"]]]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:span]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:span
  "There are fourteen hospitals in the UK and Ireland that perform heart surgery in children (here a child means someone under the age of 16). "]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:span]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:span
  "This data is updated annually and covers last three years. The survival data in this map is from 2011-14"]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:span]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:span
  "THEN MIKE MAP"]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:span]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:span
  "For the example graphic, can we do it with a bit more info – eg see below (I’ve sent you the ppt it’s based on in case useful)!  "]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:span]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:span
  {:lang "EN-US"}
  [:img#Picture 2
   {:border "0", :width "407", :height "300", :src "intro_files/image001.png"}]]]
[:p.MsoNormal
 [:span
  "At bottom of map, add this statement “"]
 [:i
  [:span
   {:style "background:yellow"}
   "“There is no evidence that any of these hospitals’ "]]
 [:i
  [:span
   {:style "background:yellow"}
   "survival rates are meaningfully different from what is predicted”"]]]
[:p.MsoNormal
 [:i
  [:span
   {:style "background:transparent"}]]]
[:p.MsoNormal
 [:span
  {:style "color:red;background:transparent"}
  "NOTE: need to check text with NICOR as to actions when outside range! "]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:b
  [:span
   {:style "color:red"}]]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:b
  [:span
   {:style "color:red"}
   "NOTE TO ALL: I’d really like to test how we present this example graphic &amp; the map alongside the table… "]]]
[:p.MsoNormal
 {:style "text-autospace:none"}
 [:b
  [:span
   {:style "color:red"}
   "Also good to test the two colours now for the different ends &amp; the possibility of green “ok” icon along with summary sentence… Not sure I like the idea but… "]]]
[:p.MsoNormal
 [:b
  [:span]]]
[:p.MsoNormal
 [:b
  [:span
   "SEPARATE DATA TAB – change label to “TABLED DATA” ? too long? "]]]
[:p.MsoNormal
 [:b
  [:span]]]
[:p.MsoNormal
 [:span
  "Add to top of table ““This data is updated annually and covers last three years. The data displayed in this chart is from 2011-14”"]]
[:p.MsoNormal
 [:span]]
[:p.MsoNormal
 [:span
  "Call it “Full results table”  to distinguish from the map?"]]
[:p.MsoNormal
 [:span]]
[:p.MsoNormal
 [:span
  "Selecting an individual hospital no longer seems to bring up the individual hospital’s results (like for the map) – would be great if this did work again? (I’m using latest version of Chrome on a windows laptop)"]]
[:p.MsoNormal
 [:span]]
[:p.MsoNormal
 [:span
  "“i” button for survival rate – I like how you’ve changed the text but can you add “, so there is no point ordering the table on this”. (or similar wording?) "]]
[:p.MsoNormal
 [:span]]
[:p.MsoNormal
 [:b
  [:span
   "Axis title"]]
 [:span
  ": “Observed survival (black dot) with predicted range (coloured bar)” "]]
[:p.MsoNormal
 [:span]]
[:p.MsoNormal
 [:span
  "At bottom of table, add this statement “"]
 [:i
  [:span
   {:style "background:yellow"}
   "“There is no evidence that any of these hospitals’ "]]
 [:i
  [:span
   {:style "background:yellow"}
   "survival rates are meaningfully different from what is predicted”"]]]
[:p.MsoNormal
 [:i
  [:span
   {:style "background:transparent"}]]]
[:p.MsoNormal
 [:span
  {:style "background:transparent"}
  "Also at bottom of table add link to NICOR report (ie have the downloadable PDF). "]]


  )
