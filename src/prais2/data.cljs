(ns ^:figwheel-always prais2.data
    (:require [rum :as r]
              [jayq.core :refer ($)]
              [prais2.content])
    (:require-macros [jayq.macros :refer [ready]]))

;;;
;;
;; Sample jQuery usage:
;;  Attach the jQuery plugin only after React has mounted the selected element and jQuery has loaded.
;;
;; This indicates how we can use an off-the shelf DataTable fro jQuerey if it does what we want. It's likely
;; that we will create our own however.
;;
;;;

(defn data-table-on
  "returns a rum mixin to add jQuery DataTable to a table element once it is mounted"
  [selector]
  {:did-mount (fn [state]
                (ready
                 (.DataTable ($ selector)
                             (clj->js {:paging false
                                       :autoWidth false
                                       :columnDefs [{
                                                 :width "50%"
                                                 :target "0"
                                                 }]
                                       })))
                state)})

(defn sort-on-column
  "sort a column"
  [app column-key]
  (let [ap @app
        sort-column (:sort-by ap)
        sort-mode (:sort-ascending ap)]
    (prn ap)
    (if (= sort-column column-key)
      (swap! app #(assoc % :sort-ascending (not sort-mode)))
      (swap! app #(assoc % :sort-ascending true :sort-by column-key)))))

(defn handle-sort
  "handle sort click"
  [event app column-key]
  (let [ap @app]
    (prn column-key)
    (sort-on-column app column-key)))

(r/defc table1 < r/static #_(data-table-on :#table1) [app data sort-key sort-direction]
  (let [ap @app
        headers (first data)
        rows  (if sort-key
                (let [sorted (sort-by sort-key (rest data))]
                  (if sort-direction sorted (reverse sorted)))
                (rest data))
        column-keys (keys headers)]
    [:div.row
     [:div.col-md-12
      [:table#table1.table.table-striped.table-bordered {:cell-spacing "0" :width "100%"}
       [:thead {:key :thead}
        [:tr
         (for [column-key column-keys :when (-> headers column-key :shown)]
           (let [header (column-key headers)
                 sortable (:sortable header)]
             [:th {:key [column-key "head"]
                   :on-click (when sortable #(handle-sort % app column-key))
                   :style {:width "10px"
                           :vertical-align "top"
                           :cursor "pointer"}}
              (when sortable [:i {:key :icon
                                  :class (str  "fa fa-sort"
                                               (if (= column-key (:sort-by ap))
                                                 (if (:sort-ascending ap) "-asc" "-desc") ""))
                                  :style {:pointer-events "none"}}])
              [:span {:key :text
                      :style {:pointer-events "none"}}
               (:title header)]]

             #_[:th {:class "sorting_asc"
                     :tab-index "0"
                     :aria-controls "table1"
                     :aria-sort "ascending"
                     :aria-label "Hospital: activate to sort column descending"
                     :key [:th col]} (nth headers col)]))]]

       [:tbody {:key :tbody}
        (for [row rows]
          [:tr {:key (:h-code row)}
           (for [column-key column-keys :when (-> headers column-key :shown)]
             [:td {:key [column-key "r"]}
              (column-key row)])])]]]]))
