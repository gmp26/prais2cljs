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

(defn sort-rows-by
  "sort rows by header spec"
  [headers column-keys]
  (zipmap column-keys headers)
  )

(r/defc table1 < r/reactive #_(data-table-on :#table1) [data sort-key direction]
  (let [headers (first data)
        rows  (if sort-key
                (let [sorted (sort-by sort-key (rest data))]
                  (if direction sorted (reverse sorted)))
                (rest data))
        column-keys (keys headers)]
    [:div.row
     [:div.col-md-12
      [:table#table1.table.table-striped.table-bordered {:cell-spacing "0" :width "100%"}
       [:thead {:key :thead}
        [:tr
         (for [column-key column-keys :when (-> headers column-key :shown)]
           (let [header (column-key headers)]
             [:th {:key [column-key "head"]
                   :style {:width "10px"
                           :vertical-align "top"}}
              [:i {:class "fa fa-sort-desc"}]
              (:title header)
              ]

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
