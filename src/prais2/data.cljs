(ns ^:figwheel-always prais2.data
    (:require [rum :as r]
              [jayq.core :refer ($)]
              [prais2.content :as content
               ])
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

(def chart-width 100)

(def min-outer-low  (apply min (map :outer-low (rest content/table1-data))))
;;  "the minimum outer-low value across all rows"
;; => 94.8


(defn bar-scale
  "value to pixel-width scale-factor controlled by slider in [0-1]"
  [slider]
  (/ chart-width (- 100 (* min-outer-low slider))))
;; (bar-scale 1) => 57.7 (a 5.2% range expanded to 300px)
;; (bar-scale 0) => 3 (a 100% range expanded to 300px)


(defn bar-width
  "return pixel-width for a bar"
  [slider value]
  (* value (bar-scale slider))
  )


(def colour-map-options
  {:brewer-RdYlBu
   {:low "#91bfdb"
    :inner "#fc8d59"
    :outer-low "#ffffbf"
    :outer-high "#ffffbf"
    :high "#91bfdb"
    :dot "white"
    }
   :brewer-RdYl
   {:low "white"
    :inner "#fc8d59"
    :outer-low "#ffffbf"
    :outer-high "#ffffbf"
    :high "white"
    :dot "black"}
   :brewer-YlRd
   {:low "white"
    :inner "#ffffbf"
    :outer-low "#fc8d59"
    :outer-high "#fc8d59"
    :high "white"
    :dot "black"}
   :brewer-YlGnBu
   {:low "#edf8b1"
    :inner "#2c7fb8"
    :outer-low "#7fcdbb"
    :outer-high "#7fcdbb"
    :high "#edf8b1"
    :dot "black"}
   :christina
   {:low "white"
    :inner "#7CA3DC"
    :outer-low "#4579CA"
    :outer-high "#4579CA"
    :high "white"
    :dot "black"
    }
   :anitsirch
   {:low "white"
    :inner "#4579CA"
    :outer-low "#7CA3DC"
    :outer-high "#7CA3DC"
    :high "white"
    :dot "black"
    }
   })



(def colour-map (:christina colour-map-options))


(r/defc bar < r/static [slider value fill]
  [:div {:style {:vertical-align "middle"
                 :display "inline-table"
                 :background-color fill
                 :margin-top "5px"
                 :height "25px"
                 :width (str (bar-width slider value) "%")}
         }])

(r/defc bar-chart < r/static [row]
  (let [slider 0.9]
    [:div
     (r/with-key (bar slider (- (:outer-low row) (* min-outer-low slider)) (:low colour-map)) :bar1)
     (r/with-key (bar slider (- (:inner-low row) (:outer-low row)) (:outer-low colour-map)) :bar2)
     (r/with-key (bar slider (- (:inner-high row) (:inner-low row)) (:inner colour-map)) :bar3)
     (r/with-key (bar slider (- (:outer-high row) (:inner-high row)) (:outer-high colour-map)) :bar4)
     (r/with-key (bar slider (- 100 (:outer-high row)) (:high colour-map)) :bar5)
     ])
  )

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
      [:table#table1.table.table-striped.table-bordered {:cell-spacing "0"}
       [:thead {:key :thead}
        [:tr
         (for [column-key column-keys :when (-> headers column-key :shown)]
           (let [header (column-key headers)
                 sortable (:sortable header)]
             [:th {:key [column-key "head"]
                   :on-click (when sortable #(handle-sort % app column-key))
                   :style {:width "120px"
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
                     :key [:th col]} (nth headers col)]))
         [:th
          {:key :axis
           :style {:padding 0
                   :margin 0
                   :width "100%"
                   :height "100%"
                   :border "none"
                   :white-space "nowrap"
                   :display "inline-block"
                   :vertical-align "top"
                   :cursor "pointer"}}
          "chart"]]]

       [:tbody {:key :tbody
                }
        (for [row rows]
          [:tr {:key (:h-code row)
                }
           (for [column-key column-keys :when (-> headers column-key :shown)]
             [:td {:key [column-key "r"]}
              (column-key row)])
           [:td
            {:key :bars
             :style {
                     :padding 0
                     :margin 0
                     :width "100%"
                     :height "100%"
                     :border-left "none"
                     :border-right "none"
                     :border-bottom "none"
                     :border-top "1px solid #dddddd"
                     :position "relative"
                     :white-space "nowrap"
                     :display "inline-block"
                     :background-color "#EDF8B1"}}
            (bar-chart row)]])]]]])
  )
