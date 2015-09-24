(ns ^:figwheel-always prais2.data
    (:require [rum :as r]
              [jayq.core :refer ($)]
              [cljs.core.async :refer [put!]]
              [prais2.core :as core]
              [prais2.content :as content]
)
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


(defn key-with
  "useful for mapping react keys to a content vector"
  [a b] (r/with-key b a))

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
    (if (= sort-column column-key)
      (swap! app #(assoc % :sort-ascending (not sort-mode)))
      (swap! app #(assoc % :sort-ascending true :sort-by column-key)))))

(defn handle-sort
  "handle sort click"
  [
   app column-key]
  (let [ap @app]
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
    :outer-low "#efdf11"
    :outer-high "#efdf11"
    :high "#91bfdb"
    :header "#91bfdb"
    :dot "black"
    }
   :brewer-RdYl
   {:low "white"
    :inner "#fc8d59"
    :outer-low "#efdf11"
    :outer-high "#efdf11"
    :high "white"
    :header "#fc8d59"
    :dot "black"}
   :brewer-YlRd
   {:low "white"
    :inner "#efdf11"
    :outer-low "#fc8d59"
    :outer-high "#fc8d59"
    :high "white"
    :header "#fc8d59"
    :dot "black"}
   :brewer-BuGn
   {:low "white"
    :inner "#7fcdbb"
    :outer-low "#2c7fb8"
    :outer-high "#2c7fb8"
    :high "white"
    :header "#2c7fb8"
    :dot "black"}
   :brewer-GnBu
   {:low "white"
    :inner "#3c8fc8"
    :outer-low "#7fcdbb"
    :outer-high "#7fcdbb"
    :high "white"
    :header "#3c8fc8"
    :dot "black"}
   :christina
   {:low "white"
    :inner "#8FB4E1"
    :outer-low "#578FD2"
    :outer-high "#578FD2"
    :high "white"
    :header "#578FD2"
    :dot "black"
    }
   :anitsirch
   {:low "white"
    :inner "#578FD2"
    :outer-low "#8FB4E1"
    :outer-high "#8FB4E1"
    :high "white"
    :header "#578FD2"
    :dot "black"
    }
   })

(defn colour-map [app] ((:theme app) colour-map-options))

(defn change-theme
  "change color scheme"
  []
  (let [current-theme (:theme @core/app)
        theme-keys (keys colour-map-options)
        current-theme-index (first (keep-indexed #(if (= %2 current-theme) %1 nil) theme-keys))
        next-theme (nth theme-keys (if (= (inc current-theme-index) (count theme-keys))
                                     0
                                     (inc current-theme-index)))]
    (swap! core/app #(assoc % :theme next-theme
                            )))
  ;:fill (if (= (:fill @core/app) "black") "red" "black")
  )


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

;; test square: insert to check mixin behviour
(r/defc square < r/static [slider value fill]
  [:div.bar {:style
             {:background-color (important fill)
              :height (px 10)
              :width (px 10)}}])


(r/defc zero-bar < r/static [slider value]
  [:div.bar {:style {:background-color "#eeeeee"
                     :width "calc(25px - )"
                     ;:width (str (bar-width slider value) "%")
                     }}])


(r/defc bar < r/static  [slider value fill]
  [:div.bar {:style {:background-color fill
                     :width (str (bar-width slider value) "%")}}])


(r/defc dot < r/static r/reactive [slider size value dotty & [relative]]
  (let [px-size (px size)]
    [:div.dot
     {:style {:background-color (:dot (colour-map (r/react core/app)))
              :display (if dotty "inline-block" "none")
              :width px-size
              :height px-size
              :top (px (+ 10 (/ (- 25 size) 2)))
              :position (if relative "relative" "absolute")
              :left (str "calc("
                         (percent->screen slider value)
                         "% - "
                         (Math.round (/ size 2))
                         "px)"
                         )}}]))

(def extra-right 40)
(def last-pad-right (important (px extra-right)))
(def axis-margin 20)


(defn dot-size [slider]
  (Math.round (- 12 (* 4 (- 1 slider)))))


(r/defc chart-cell < r/reactive [row slider]
  (let [ap (r/react core/app)
        colours (colour-map ap)
        bars (:bars ap)
        dotty (:dot bars)
        dotless (disj bars :dot)]
    (prn bars)
    [:td.chart-cell {:style {:padding-left (important (px axis-margin))
                             :padding-right last-pad-right}}

     [:div.bar-chart
      (map-indexed key-with

       (cond
         (= dotless #{})
         [(dot slider (dot-size slider) (:survival-rate row) dotty)]

         (= dotless #{:inner})
         [(bar slider (- (:outer-low row) (* min-outer-low slider)) (:low colours))
          (bar slider (- (:inner-low row) (:outer-low row)) (:low colours))
          (bar slider (- (:inner-high row) (:inner-low row)) (:inner colours))
          (bar slider (- 100 (:inner-high row)) (:high colours))
          (dot slider (dot-size slider) (:survival-rate row) dotty)
          ]

         (= dotless #{:outer})
         [(bar slider (- (:outer-low row) (* min-outer-low slider)) (:low colours))
          (bar slider (- (:outer-high row) (:outer-low row)) (:outer-low colours))
          (bar slider (- 100 (:outer-high row)) (:high colours))
          (dot slider (dot-size slider) (:survival-rate row) dotty)
          ]

         (= dotless #{:inner :outer})
         [(bar slider (- (:outer-low row) (* min-outer-low slider)) (:low colours))
          (bar slider (- (:inner-low row) (:outer-low row)) (:outer-low colours))
          (bar slider (- (:inner-high row) (:inner-low row)) (:inner colours))
          (bar slider (- (:outer-high row) (:inner-high row)) (:outer-high colours))
          (bar slider (- 100 (:outer-high row)) (:high colours))
          (dot slider (dot-size slider) (:survival-rate row) dotty)
          ]))]]))


(r/defc tick < r/static [baseline value]
  (let [percent (* 100 (/ (- value baseline) (- 100 baseline)))]
    (when (>= percent 0)
      [:.tick {:style
               {:left (pc percent)
                :border-left (str "1px "
                                  (if (or (= percent 100) (= value 0))
                                      "solid "
                                      "dashed ")
                                  "black")}}
       [:span.tick-label (pc value)]]
      )))

(r/defc ticks < r/static [slider-axis-value tick-count]
  (let [baseline (* min-outer-low slider-axis-value)
        raw-interval (/ (- 100 baseline) (inc tick-count))
        interval (cond
                   (> raw-interval 10) 20
                   (> raw-interval 5) 10
                   (> raw-interval 2) 5
                   :else 2)
        tick-values (range 100 (dec baseline) (- interval))]
    [:div
     (for [value tick-values]
       (r/with-key (tick baseline value) value))]))

(r/defc slider-labels []
  [:.slider-label
   [:div.pull-left {:key :left}
    [:i.fa.fa-long-arrow-left {:key :full}] " full range"]
   [:div.right {:key :right}
    "full detail " [:i.fa.fa-long-arrow-right {:key :detail}]]])

(r/defc slider-control < r/static [event-bus value min max step]
  [:.slider
   [:input {:type "range"
            :value value
            :min min
            :max max
            :step step
            :on-change #(put! event-bus [:slider-axis-value (.. % -target -value)])}]])

(r/defc axis-container < r/static [slider-axis-value]
  [:.axis-container
   {:style {:margin-left (px axis-margin)
            :width (str "calc(100% - " (px (+ extra-right axis-margin)) ")")}}
   (r/with-key (ticks slider-axis-value 3) :ticks)])

(r/defc slider-title [headers]
  [:p {:key :p}
   (:title (:observed headers)) ])

(r/defc table-header < r/static [background ap header column-key event-bus]
  (prn "table-header called " background)
  [:th {:on-click #(do (put! event-bus [:sort-toggle column-key])
                       (.stopPropagation (.-nativeEvent %))
                       (.preventDefault (.-nativeEvent %))
                       )
        :style {:width (px (:width header))
                :vertical-align "top"
                :cursor (if (:sortable header) "pointer" "auto")
                :background-color background
                :color "#ffffff !important"
                }}
   (when (:sortable header) [:i {:key :icon
                                 :class (str  "right fa fa-sort"
                                              (if (= column-key (:sort-by ap))
                                                (if (:sort-ascending ap) "-asc" "-desc") ""))
                                 :style {:pointer-events "none"}}])
   (let [title (:title header)]
     [:span {:key :text
             :style {:pointer-events "none"
                     :background-color "none !important"
                     :color "white !important"}}
      title
      [:br {:key :br}]
      ])])

(r/defc table-head < r/static [app ap headers column-keys event-bus slider-axis-value]

  (let [baseline (Math.round (* min-outer-low slider-axis-value))]
    (prn "table-head called")
    [:thead
     [:tr
      (for [column-key column-keys :when (-> headers column-key :shown)]
        (r/with-key (table-header (:header (colour-map ap))
                                  ap
                                  (column-key headers)
                                  column-key
                                  event-bus)
          [column-key "head"]))
      [:th
       {:key :last
        :style {:width "auto"
                :background-color (:header (colour-map ap))
                :color "#ffffff !important"
                }}
       [:.slider-container
        {:style {:height (px (:height (:observed headers)))}}
        (map-indexed key-with
                     [(slider-title headers)
                      (slider-labels)
                      (slider-control event-bus slider-axis-value 0 1 0.001)
                      (axis-container slider-axis-value)])]]]]))


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

     (when (core/query-media? "screen")
       [:div.screenable {:key :screen}
        ;; fixed table with header only for @media screen, hidden in print
        [:table.table.table-striped.table-bordered {:cell-spacing "0"}
         (r/with-key (table-head app ap headers column-keys event-bus slider-axis-value) :thead)]])

     [:div.printable {:key :print}
      [:table.table.table-striped.table-bordered {:cell-spacing "0"}
       (prn (str "printing true?" (core/query-media? "print")))
       ;; full table with print header, hidden on screen
       (r/with-key (table-head app ap headers column-keys event-bus slider-axis-value) :thead)

       ;; body for both print and screen
       [:tbody {:key :tbody}
        (for [row rows]
          [:tr {:key (:h-code row)}
           (for [column-key column-keys
                 :let [column-header (column-key headers)]
                 :when (:shown column-header)]
             [:td {:key [column-key "r"]
                   :style {:width (px (:width column-header))
                           :height (px (:height column-header))}}
              (str (column-key row) (if (= column-key :survival-rate) " %" ""))])
           (r/with-key (chart-cell row slider-axis-value) :bars)])]]]]))

(def chart-states [#{} #{:dot} #{:inner :dot} #{:inner :outer :dot}
                   #{:inner :outer} #{:inner}])

(defn cycle-chart-state [state direction]
  (let [states (if (= direction :next) chart-states (reverse chart-states))]
    (second (drop-while #(not= state %) (concat states states)))))


(r/defc option-controls < r/reactive [event-bus]
  [:div.options
   [:form

    [:h3 "Options"]

    [:hr]

    [:div {:class "form-group"}
     [:label {:for "themeButton"} (str "Theme: " (:theme (r/react core/app))) ]
     [:button#themeButton.btn.btn-default.pull-right
      {:on-click #(do (put! event-bus [:change-theme core/app])
                      (.preventDefault (.-nativeEvent %)))}
      "Change"]]

    [:hr]
    [:.form-group
     [:label {:for "stateButton"} (str "Showing: " (:bars (r/react core/app))) ]
     [:.btn-group.pull-right
      [:button#stateButton.btn.btn-default
       {:on-click #(do (put! event-bus [:cycle-chart-state :prev])
                       (.preventDefault (.-nativeEvent %)))}
       "Prev State"]
      [:button#stateButton.btn.btn-default
       {:on-click #(do (put! event-bus [:cycle-chart-state :next])
                       (.preventDefault (.-nativeEvent %)))}
       "Next State"]]]

    [:hr]

    [:.form-group
     [:label {:for "modalButton"} "Modal test"]
     [:button#modalButton.btn.btn-primary.pull-right
      {:type "button"
       :data-toggle "modal"
       :data-target "#myModal"}
      "Launch demo modal"]]]])

;;;
;; Modals
;;;


(r/defc modal []

  [:#myModal.modal.fade {:tab-index -1
                    :role "dialog"
                    :aria-labelledby "myModalLabel"
                    }
   [:.modal-dialog {:role "document"}
    [:.modal-content
     [:.modal-header
      [:button.close {:type"button"
                      :data-dismiss "modal"
                      :aria-label "Close"}
       [:span {:aria-hidden "true"
               :dangerouslySetInnerHTML
               {:__html "&times;"}} ]]
      [:h4#myModalLabel.modal-title "Modal title"]]
     [:.modal-body
      "Content goes here"]
     [:.modal-footer
      [:button.btn.btn-default {:type "button"
                                :data-dismiss "modal"}
       "Close"]
      [:button.btn.btn-primary {:type "button"} "Save changes"]]]]
   ])
