(ns ^:figwheel-always prais2.comparator)

(defn compare-merge
  "merge a comparator with one on another sort column"
  [comparator [column-key order]]
  ;(prn (str "compare-merge "  column-key " " order))
  (fn [row1 row2]
    (let [comp1 (comparator row1 row2)]
      ;(prn row1)
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
  ;(prn sort-columns)
  (reduce #(compare-merge %1 %2) (constantly 0)  sort-columns))

(defn sort-column
  "sort a data table"
  [data sort-columns]
  (assoc data :rows (sort (compare-all sort-columns) (:rows data))))

(def sort-columns (atom [[:h-name true] [:h-code false]]))
