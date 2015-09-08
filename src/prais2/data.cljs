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



(defn compare-merge
  "merge a comparator with one on another sort column"
  [comparator [column-key order]]
  (prn (str "compare-merge "  column-key " " order))
  (fn [row1 row2]
    (let [comp1 (comparator row1 row2)]
      (prn row1)
      (if (not= comp1 0)
        comp1
        (let [cell1 (column-key row1)
              cell2 (column-key row2)]
          (if order
            (compare cell1 cell2)
            (compare cell2 cell1)))))))

(defn compare-all
  "return a sort-by key-fn which operates on all sort-columns"
  [sort-columns]
  (prn sort-columns)
  (reduce #(compare-merge %1 %2) (constantly 0)  sort-columns))

(defn sort-column
  "sort a data table"
  [data sort-columns]
  (assoc data :rows (sort (compare-all sort-columns) (:rows data))))

(def sort-columns (atom [[:h-name true] [:h-code false]]))

(r/defc table1 < r/reactive #_(data-table-on :#table1) [data]
  (let [sdata data #_(sort-column data @sort-columns)
        headers (:headers sdata)
        visible-headers (- (count headers) 1)]
    [:div.row
     [:div.col-md-12
      [:table#table1.table.table-striped.table-bordered {:cell-spacing "0" :width "100%"}
       [:thead {:key :thead}
        [:tr
           (for [col (range visible-headers)]
             (do (prn (nth headers col))
                 [:th {:key [:th col]
                       :style {:width "10px"
                               :vertical-align "top"}}
                  [:i {:class "fa fa-sort-desc"}]
                  (:title (nth headers col))
                  ]
                 #_[:th {:class "sorting_asc"
                       :tab-index "0"
                       :aria-controls "table1"
                       :aria-sort "ascending"
                       :aria-label "Hospital: activate to sort column descending"
                       :key [:th col]} (nth headers col)]))]]

       [:tbody {:key :tbody}
        (let [rows (:rows sdata)]
          (for [row (range (count rows))]
            (let [row-cells (nth rows row)
                  row-keys (keys (first rows))
                  ]
              (prn row-cells)
              [:tr {:key row}
               (for [cell-key row-keys]
                 (do
                   (prn (str "cell " cell-key))
                   (when (and (not= cell-key :low-prediction)
                              (not= cell-key :high-prediction))
                     [:td {:key [row cell-key]}
                      (cell-key row-cells)
                      ]

                       )))])))]]]]))

;;;
;; Samples
;;;
#_(r/defc sample-data-table < r/reactive (data-table-on :#sample) []
  [:div.row
   [:div.col-md-6
    [:table#sample.table.table-striped.table-bordered {:cell-spacing "0" :width "100%"}
     [:thead
      [:tr [:th "Name"]
       [:th "Age"]]]
     [:tbody
      [:tr [:td "Matthew"]
       [:td "26"]]
      [:tr [:td "Anna"]
       [:td "24"]]
      [:tr [:td "Michelle"]
       [:td "42"]]
      [:tr [:td "Frank"]
       [:td "46"]]]]]])
