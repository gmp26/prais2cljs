(ns ^:figwheel-always prais2.data
    (:require [rum :as r]
              [jayq.core :refer ($)]
              [cljs.core.async :refer [put!]]
              [prais2.core :as core]
              [prais2.content :as content
               ])
    (:require-macros [jayq.macros :refer [ready]]))

;;;
;; utils
;;;
(defn px
  "value to pixel string"
  [value]
  (str value "px"))

(defn pc
  "value to percent string"
  [value]
  (str value "%"))

(defn important
  "tack !important on a string value"
  [str-val]
  (str str-val " !important")
  )

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

(def min-outer-low  (* 2 (int (/ (apply min (map :outer-low (rest content/table1-data))) 2))))
;;  "the minimum outer-low value across all rows"
;; => 94.8

(defn bar-scale
  "value to pixel-width scale-factor controlled by slider in [0-1]"
  [slider]
  (/ chart-width (- 100 (* min-outer-low slider))))

(defn percent->screen
  "percent-value to slider compensated value"
  [slider value]
  (let [origin (* min-outer-low slider)]
    (* 100 (/ (- value origin) (- 100 origin))))
  )

(defn bar-width
  "return percentage-width for a bar"
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
   :brewer-BuGn
   {:low "white"
    :inner "#7fcdbb"
    :outer-low "#2c7fb8"
    :outer-high "#2c7fb8"
    :high "white"
    :dot "black"}
   :brewer-GnBu
   {:low "white"
    :inner "#3c8fc8"
    :outer-low "#7fcdbb"
    :outer-high "#7fcdbb"
    :high "white"
    :dot "black"}
   :christina
   {:low "white"
    :inner "#8FB4E1"
    :outer-low "#578FD2"
    :outer-high "#578FD2"
    :high "white"
    :dot "black"
    }
   :anitsirch
   {:low "white"
    :inner "#578FD2"
    :outer-low "#8FB4E1"
    :outer-high "#8FB4E1"
    :high "white"
    :dot "black"
    }
   })



(def colour-map (:christina colour-map-options))


(defn log-transform
  "apply a log transform to the raw slider value"
  [input]
  (/ (Math.log10 (inc input)) 2)
  )

(defn exp-transform
  "invert the log transform"
  [output]
  (dec (Math.pow 10 (* output 2)))
  )

(r/defc slider-control < r/static [event-bus value min max step]
  [:.slider
   [:input {:type "range"
            :value value
            :min min
            :max max
            :step step
            :on-change #(put! event-bus [:slider-axis-value (.. % -target -value)])}]])


(r/defc bar < r/static [slider value fill]
  [:div.bar {:style {:background-color (important fill)
                     :width (str (bar-width slider value) "%")}}])


(r/defc dot < r/static [slider size value & [relative]]
  (let [px-size (px size)]
    [:div.dot
     {:style {:background-color (important (:dot colour-map))
              :width px-size
              :height px-size
              :top (px (/ (- 25 size) 2))
              :position (if relative "relative" "absolute")
              :left (str "calc("
                         (percent->screen slider value)
                         "% - "
                         (/ size 2)
                         "px)"
                         )}}])
  )

(def extra-right 40)
(def last-pad-right (important (px extra-right)))
(def axis-margin 25)

(r/defc chart-cell < r/static [row slider]
  [:td.chart-cell {:style {:padding-left (px axis-margin)
                           :padding-right last-pad-right}}
   [:div.bar-chart
    (r/with-key (bar slider (- (:outer-low row) (* min-outer-low slider)) (:low colour-map)) :bar1)
    (r/with-key (bar slider (- (:inner-low row) (:outer-low row)) (:outer-low colour-map)) :bar2)
    (r/with-key (bar slider (- (:inner-high row) (:inner-low row)) (:inner colour-map)) :bar3)
    (r/with-key (bar slider (- (:outer-high row) (:inner-high row)) (:outer-high colour-map)) :bar4)
    (r/with-key (bar slider (- 100 (:outer-high row)) (:high colour-map)) :bar5)
    (r/with-key (dot slider 10 (:survival-rate row)) :dot)]])


(r/defc tick < r/static [baseline value]
  (let [percent (* 100 (/ (- value baseline) (- 100 baseline)))]
    [:.tick
     {:style {:left (pc percent)}}
     [:span.tick-label (pc value)]]))

(r/defc ticks < r/static [slider-axis-value tick-count]
  (let [baseline (* min-outer-low slider-axis-value)
        best-interval (/ (- 100 baseline) (inc tick-count))
        interval (cond
                   (> best-interval 50) 100
                   (> best-interval 20) 50
                   (> best-interval 10) 20
                   (> best-interval 5) 10
                   (> best-interval 2) 5
                   (> best-interval 1) 2
                   :else 1
                   )
        tick-values (range 100 (dec baseline) (- interval))]
    [:div
     (for [value tick-values]
       (tick baseline value))]
    )
  )

(r/defc table-head < r/static
  [app ap headers column-keys event-bus slider-axis-value]

  (let [baseline (Math.round (* min-outer-low slider-axis-value))]
    [:thead {:key :thead}
     [:tr
      (for [column-key column-keys :when (-> headers column-key :shown)]
        (let [header (column-key headers)
              sortable (:sortable header)]
          [:th {:key [column-key "head"]
                :on-click (when sortable #(handle-sort % app column-key))
                :style {:width (px (:width header))
                        :vertical-align "top"
                        :cursor "pointer"
                        :background-color (str (:outer-low colour-map) "!important")
                        :color "#ffffff !important"
                        }}
           (when sortable [:i {:key :icon
                               :class (str  "right fa fa-sort"
                                            (if (= column-key (:sort-by ap))
                                              (if (:sort-ascending ap) "-asc" "-desc") ""))
                               :style {:pointer-events "none"}}])
           (let [title (:title header)]
             [:span {:key :text
                     :style {:pointer-events "none"}}
              title
              [:span.right
               (if (>=  (.indexOf title "%") 0) (dot nil 10 0 true))]
              ])]))
      [:th
       {:style {:width "auto"
                :background-color (str (:outer-low colour-map) "!important")
                :color "#ffffff !important"
                }}
       [:.slider-container
        {:key :axis
         :style {:height (px (:height (:observed headers)))
                 }}
        [:p (:title (:observed headers))]
        [:.slider-label
         [:span.left [:i.fa.fa-long-arrow-left] " full range"]
         [:span.right "full detail " [:i.fa.fa-long-arrow-right]]]
        (slider-control event-bus slider-axis-value 0 1 0.001)
        [:.axis-container
         {:style {:margin-left (px axis-margin)
                  :width (str "calc(100% - " (px (+ extra-right axis-margin)) ")")}}
         (ticks slider-axis-value 3)]]]]]))

(r/defc table1 < r/reactive [app data event-bus]
  (let [ap (r/react app)
        sort-key (:sort-by ap)
        sort-direction (:sort-ascending ap)
        headers (first data)
        rows  (if sort-key
                (let [sorted (sort-by sort-key (rest data))]
                  (if sort-direction sorted (reverse sorted)))
                (rest data))
        column-keys (keys headers)
        slider-axis-value (:slider-axis-value ap)  ]
    [:div

     [:div.screenable
      ;; fixed table with header only for @media screen, hidden in print
      [:table.table.table-striped.table-bordered {:cell-spacing "0"}
       (table-head app ap headers column-keys event-bus slider-axis-value)]]
     [:div.printable
      ;; full table with print header, hidden on screen
      [:table.table.table-striped.table-bordered {:cell-spacing "0"}
       (table-head app ap headers column-keys event-bus slider-axis-value)

       ;; body for both print and screen
       [:tbody {:key :tbody}
        (for [row rows]
          [:tr {:key (:h-code row)}
           (for [column-key column-keys
                 :let [column-header (column-key headers)]
                 :when (:shown column-header)]
             [:td {:key [column-key "r"]
                   :style {:width (px (:width column-header))
                           :height (px (:height column-header))
}}
              (str (column-key row)
                   (if (= column-key :survival-rate)
                     " %" ""))
])
           (r/with-key (chart-cell row slider-axis-value) :bars)])]]]]

    )
  )
