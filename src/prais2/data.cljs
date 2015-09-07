(ns ^:figwheel-always prais2.data
    (:require [rum :as r]
              [jayq.core :refer ($)])
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

(def table1-data
  {:headers ["Hospital"
        "Hospital Code"
        "Number of Operations"
        "Number of deaths"
        "Number of survivors"
        "Survival rate (%)"
        "Predicted survival range using statistical model"]
   :rows [["Belfast, Royal Victoria Hospital"	"RVB"	204	2	202	99.0	96.6 100]
        ["London, Harley Street Clinic"	"HSC"	482	7	475	98.5	95.9   98.8]
        ["Leicester, Glenfield Hospital"	"GRL"	582	11	571	98.1	96.2  98.8]
        ["Newcastle, Freeman Hospital"	"FRE"	678	15	663	97.8	96  98.4]
        ["Glasgow, Royal Hospital for Children"	"RHS"	787	28	759	96.4	96.3  98.5]
        ["Bristol Royal Hospital for Children"	"BRC"	835	19	816	97.7	96.8  98.7]
        ["Southampton, Wessex Cardiothoracic Centre"	"SGH"	890	17	873	98.1	96.2  98.3]
        ["Leeds General Infirmary"	"LGI"	976	23	953	97.6	97.1  98.9]
        ["Dublin, Our Lady's Children's Hospital"	"OLS"	1056	23	1033	97.8	96.9  98.7]
        ["London, Royal Brompton Hospital"	"NHB"	1107	12	1095	98.9	97  98.7]
        ["Liverpool, Alder Hey Hospital"	"ACH"	1146	28	1118	97.6	96.4  98.3]
        ["London, Evelina London Children's Hospital"	"GUY"	1204	39	1165	96.8	96.3  98.1]
        ["Birmingham Children’s Hospital"	"BCH"	1481	30	1451	98.0	95.9  97.7]
        ["London, Great Ormond Street Hospital for Children"	"GOS"	1881	30	1851	98.4	97  98.4]]}
  )

(defn compare-merge
  "merge a comparator with one on another sort column"
  [comparator [column order]]
  (prn (str compare-merge " " column " " order))
  (fn [row1 row2]
    (let [comp1 (comparator row1 row2)]
      (if (not= comp1 0)
        comp1
        (let [cell1 (nth row1 column)
              cell2 (nth row2 column)]
          (if order
            (compare cell1 cell2)
            (compare cell2 cell1)))
        )
      ) )
  )

(defn compare-all
  "return a sort-by key-fn which operates on all sort-columns"
  [sort-columns]
  (prn sort-columns)
  (reduce #(compare-merge %1 %2) (constantly 0)  sort-columns)
  )

(defn sort-column
  "sort a data table"
  [data sort-columns]
  (assoc data :rows (sort (compare-all sort-columns) (:rows data)))
  )

(def sort-columns (atom [[5 true] [1 false]]))

(r/defc table1 < r/reactive #_(data-table-on :#table1) [data]
  (let [sdata (sort-column data @sort-columns)
        headers (:headers sdata)
        visible-headers (- (count headers) 1)]
    [:div.row
     [:div.col-md-12
      [:table#table1.table.table-striped.table-bordered {:cell-spacing "0" :width "100%"}
       [:thead {:key :thead}
        [:tr
           (for [col (range visible-headers)]
             (do (prn (nth headers col))
                 [:th {:key [:th col]} (nth headers col)]))
           ]]

       [:tbody {:key :tbody}
        (let [rows (:rows sdata)]
          (for [row (range (count rows))]
            (let [row-cells (nth rows row)]
              [:tr {:key row}
               (for [cell (range visible-headers)]
                 [:td {:key [row cell]}
                  (cond
                    (< cell (- visible-headers 1))
                    (nth row-cells cell)

                    (< cell visible-headers)
                    (str  (nth row-cells cell) "%")
                    )])])))]]]]))

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
