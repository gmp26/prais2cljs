(ns ^:figwheel-always prais2.data
    (:require [rum.core :as rum]
              [jayq.core :refer ($ on)]
              [cljs.core.async :refer [put!]]
              [prais2.core :as core :refer [event-bus]]
              [prais2.content :as content]
              [prais2.utils :as u :refer [px pc important key-with]]
              [clojure.string :as str]
              )
    (:require-macros [jayq.macros :refer [ready]]))

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
  [app column-key]
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

(defn colour-map [theme] (content/colour-map-options theme))



;; test square: insert to check mixin behviour
(rum/defc square < rum/static [slider value fill]
  [:div.bar {:style
             {:background-color (important fill)
              :height (px 10)
              :width (px 10)}}])


(rum/defc zero-bar < rum/static [slider value]
  [:div.bar {:style {:background-color "#eeeeee"
                     :width "calc(25px - )"
                     ;:width (str (bar-width slider value) "%")
                     }}])


(rum/defc bar < rum/static  [slider hi-val lo-val bar-type fill]
  (if (= fill "rgba(255,255,255,0)")
    [:div.bar {:style {:background-color fill
                       :width (str (bar-width slider (- hi-val lo-val)) "%")}
               }]
    [:div.bar.btn {:style {:background-color fill
                           :border-radius 0
                           :width (str (bar-width slider (- hi-val lo-val)) "%")}
                   :data-toggle "tooltip"
                   :data-original-title (str (pc lo-val) " - " (pc hi-val) "<br>" (bar-type content/bar-comments))
                   :data-delay 0
                   :data-html true
                   :data-trigger "hover"
                   :data-placement "bottom"}]))

;; mixin to initialise bootstrap tooltip code code
(def bs-tooltip
  {:did-mount (fn [state]
                (ready
                 (.tooltip  (.tooltip ($ "[data-toggle=\"tooltip\"]"))) "show")
                state)
   })

;; mixin to initialise bootstrap t code code
(def bs-popover
  {:did-mount (fn [state]
                (ready
                 (.popover ($ "[data-toggle=\"popover\"]")))
                state)
   })



(rum/defc dot < rum/static rum/reactive bs-tooltip [slider size value dotty & [relative]]
  (let [px-size (px size)]
    [:div.dot.btn
     {:data-toggle "tooltip"
      :data-placement "bottom"
      :data-delay 0
      :data-trigger "hover"
      :data-html true
      :data-original-title (str (pc value) "<br>The observed survival rate"
)
      :style {:background-color (:dot (colour-map (:theme (rum/react core/app))))
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
  (Math.round (- 12 (* 7 (- 1 slider)))))


(def chart-states [#{} #{:dot} #{:inner :dot} #{:inner :outer :dot}
                   #{:inner :outer} #{:inner}])


(def put-morph-full-range #(do
                             (put! event-bus [:morph-full-range :data])
                             (.preventDefault (.-nativeEvent %))
                             ))

(rum/defc chart-cell < bs-tooltip rum/reactive [row slider]
  (let [ap (rum/react core/app)
        colours (colour-map (:theme ap))
        bars (chart-states (:chart-state ap))
        dotty (:dot bars)
        dotless (disj bars :dot)]
    [:td
     #_(when (> slider 0) [:div {:on-click #(core/click->event-bus % :morph-full-range :slider)
                               :style
                               {:position "absolute"
                                :width (px 20)
                                :height (px 50)
                                :color "#149BDF"
                                :background-color "rgba(200, 200, 200, 0.3)"
                                :box-shadow "2px 0px 5px #000000"
                                :padding-top (px 16)
                                :cursor "pointer"
                                }} [:i.fa.fa-chevron-left]])
     [:.chart-cell {:style {:padding-left (important (px axis-margin))
                            :padding-right last-pad-right}}
      [:div.bar-chart
       (map-indexed key-with

                    (cond
                      (= dotless #{})
                      [(dot slider (dot-size slider) (:survival-rate row) dotty)]

                      (= dotless #{:inner})
                      [(bar slider (:outer-low row) (* min-outer-low slider) :low (:low colours))
                       (bar slider (:inner-low row) (:outer-low row) :outer-low (:low colours))
                       (bar slider (:inner-high row) (:inner-low row) :inner (:inner colours))
                       (bar slider (:outer-high row) (:inner-high row) :outer-high (:high colours))
                       (bar slider 100 (:outer-high row) :high (:high colours))
                       (dot slider (dot-size slider) (:survival-rate row) dotty)
                       ]


                      (= dotless #{:outer})
                      [(bar slider (:outer-low row) (* min-outer-low slider) :low (:low colours))
                       (bar slider (:inner-low row) (:outer-low row) :outer-low (:outer-low colours))
                       (bar slider (:inner-high row) (:inner-low row) :inner (:outer-low colours))
                       (bar slider (:outer-high row) (:inner-high row) :outer-high (:outer-high colours))
                       (bar slider 100 (:outer-high row) :high (:high colours))
                       (dot slider (dot-size slider) (:survival-rate row) dotty)
                       ]


                      (= dotless #{:inner :outer})
                      [(bar slider (:outer-low row) (* min-outer-low slider) :low (:low colours))
                       (bar slider (:inner-low row) (:outer-low row) :outer-low (:outer-low colours))
                       (bar slider (:inner-high row) (:inner-low row) :inner (:inner colours))
                       (bar slider (:outer-high row) (:inner-high row) :outer-high (:outer-high colours))
                       (bar slider 100 (:outer-high row) :high (:high colours))
                       (dot slider (dot-size slider) (:survival-rate row) dotty)
                       ]))]]]))


(rum/defc tick < rum/static [baseline value]
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

(rum/defc ticks < rum/static [slider-axis-value tick-count]
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
       (rum/with-key (tick baseline value) value))]))

(rum/defc slider-labels []
  [:.slider-label
   [:div.pull-left {:key :left}
    [:i.fa.fa-long-arrow-left {:key :full}] " full range"]
   [:div.right {:key :right}
    "full detail " [:i.fa.fa-long-arrow-right {:key :detail}]]])


;; returns a bootstrap slider mixin
(def bs-slider
  {:did-mount (fn [state]
                (prn "mounting-slider")
                (let [slider (new js/Slider "#slider"
                                                       (clj->js {
                                                                 :tooltip "hide"
                                                                 :min 0
                                                                 :max 1
                                                                 :step 0.1
                                                                 :value (:slider-axis-value @core/app)
                                                                 }))
                      handler #(do
                                 (put! event-bus [:slider-axis-value (.getValue slider)]))
                      state' (assoc state ::slider slider ::handler handler)]

                  (.on slider "slide" handler)
                  (.on slider "change" handler)
                  (prn state')
                  state'))

   :transfer-state (fn [old new]
                     (assoc new ::slider (::slider old)))

   :will-unmount (fn [state]
                   (let [slider (::slider state)
                         handler (::handler state)]
                     (prn "unmounting slider")
                     (when  slider
                       (when handler (.off slider "slide" handler))
                       (when handler (.off slider "change" handler))
                       (.destroy slider))
                     (dissoc state ::slider ::handler)))})

(rum/defcs slider-control < bs-slider rum/static [state value event-bus min max step]
  #_(prn "called slider-control with " value)
  (let [s [:#slider.slider
           [:input {:type "text"
                    :data-slider-min min
                    :data-slider-max max
                    :data-slider-step step
                    }]]
        slider (::slider state)]
    (when slider
      (.setValue slider value))
    s))


(rum/defc axis-container < rum/static [slider-axis-value]
  [:.axis-container
   {:style {:margin-left (px axis-margin)
            :width (str "calc(100% - " (px (+ extra-right axis-margin)) ")")}}
   (rum/with-key (ticks slider-axis-value 3) :ticks)])

(rum/defc slider-title [headers]
  [:p {:key :p}
   (:title (:observed headers))])

(rum/defc table-header < rum/static bs-tooltip bs-popover [background ap header column-key event-bus]
  #_(prn "table-header called " background)
  (let [sort-handler #(when (:sortable header)
                        (core/click->event-bus % :sort-toggle column-key))]
    [:th {:on-click sort-handler
          :on-touch-start sort-handler
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
               :style {:background-color "none !important"
                       :color "white !important"}}
        (when (not= column-key :h-name)
          (let [info-handler #(core/click->event-bus % :info-clicked column-key)]
            [:a.btn.btn-primary.btn-xs.info
             {:on-click       info-handler
              :on-touch-start   info-handler
              :role           "button"
              :tabIndex       -1
              :data-trigger   "focus"
              :data-toggle    "popover"
              :title          title
              :data-html      "true"
              :data-content   (:content header)
              :data-placement "bottom"
              :style          {:cursor "pointer"}} [:i.fa.fa-info]]))
        [:br {:key :br}]
        title])]))

(rum/defc table-head < rum/static [app ap headers column-keys event-bus slider-axis-value]

  (let [baseline (Math.round (* min-outer-low slider-axis-value))]
    #_(prn "table-head called")
    [:thead
     [:tr
      (for [column-key column-keys :when (-> headers column-key :shown)]
        (rum/with-key (table-header (:header (colour-map (:theme  ap)))
                                  ap
                                  (column-key headers)
                                  column-key
                                  event-bus)
          [column-key "head"]))
      [:th
       {:key :last
        :style {:width "auto"
                :background-color (:header (colour-map (:theme ap)))
                :color "#ffffff !important"
                }}
       [:.slider-container
        {:style {:height (px (:height (:observed headers)))}}
        (map-indexed key-with
                     [(slider-title headers)
                      (slider-labels)
                      (do
                        (prn "calling slider-control with " slider-axis-value)
                        (slider-control slider-axis-value event-bus 0 1 0.01))
                      (axis-container slider-axis-value)])]]]]))


(rum/defc table1 < rum/reactive [app data event-bus]
  (let [ap (rum/react app)
        sort-key (:sort-by ap)
        sort-direction (:sort-ascending ap)
        headers (first data)
        rows  (if sort-key
                (let [sorted (sort-by sort-key (rest data))]
                  (if sort-direction sorted (reverse sorted)))
                (rest data))
        column-keys (keys headers)
        slider-axis-value (:slider-axis-value ap)  ]
    (prn "calling table-head with " slider-axis-value)
    [:div
     #_(when (core/query-media? "screen")

       [:div.screenable {:key :screen}
        ;; fixed table with header only for @media screen, hidden in print
        [:table.table.table-striped.table-bordered {:cell-spacing "0"}
         (rum/with-key (table-head app ap headers column-keys event-bus slider-axis-value) :thead)]])

     [:div {:key :print}
      [:table.table.table-striped.table-bordered {:cell-spacing "0"}
       #_(prn (str "printing true?" (core/query-media? "print")))
       #_(prn headers)
       ;; full table with print header, hidden on screen
       (rum/with-key (table-head app ap headers column-keys event-bus slider-axis-value) :thead)

       ;; body for both print and screen
       [:tbody {:key :tbody}
        (for [row rows
              :let [info-handler #(core/click->event-bus % :open-hospital-modal row)]]
          [:tr {:key (:h-code row)

                :class (if (= row (:selected-row ap)) "info" "")}
           (for [column-key column-keys
                 :let [column-header (column-key headers)]
                 :when (:shown column-header)]
             [:td {:key [column-key "r"]
                   :style {:width (px (:width column-header))
                           :height (px (:height column-header))}}
              [:div {:style {:display "inline-block"
                             :width (if (= column-key :h-name) "calc(100% - 50px)" "auto")}}
               (str
                (column-key row)
                (when (= column-key :survival-rate) " %" ""))]

              (when (= column-key :h-name)
                [:button.btn.btn-link.btn-xs.h-info
                 {:on-click info-handler
                  :on-touch-start info-handler}
                 (:h-code row)
                 " "
                 [:i.fa.fa-chevron-right]
                 ])])
           (rum/with-key (chart-cell row slider-axis-value) :bars)])]]]]))


(defn get-chart-state
  [index]
  (chart-states index)
  )

(rum/defc integer-option < rum/static [n]
  [:option {:value n} n])

(rum/defc chart-state-dropdown < rum/reactive [event-bus]
  [:.form-group
   [:label-for {:for "chart-selector"} "Chart State "]
   [:select#chart-selector.form-control.input-sm
    {
     :value (:chart-state (rum/react core/app))
     :on-change #(put! event-bus [:change-chart-state (.. % -target -value)])}
    (map-indexed key-with
                 (for [n (range (count chart-states))]
                   (integer-option n)))
    ]]
  )

(rum/defc theme-dropdown < rum/reactive [event-bus]
  [:.form-group.col-md-2.col-md-offset-1
   [:label-for{:for "colour-map-selector"} "Theme "]
   [:select#colour-map-selector.form-control.input-sm
    {
     :value (:theme (rum/react core/app))
     :on-change #(put! event-bus [:change-colour-map (.. % -target -value)])}
    (map-indexed key-with
                 (for [n (range (count content/colour-map-options))]
                   (integer-option n)))]
   ])


(rum/defc option-menu [event-bus]
  [:nav.navbar.navbar-default
   [:.container
    [:navbar-form.form-inline.row
     (map-indexed key-with
                  [(theme-dropdown event-bus)
                   (chart-state-dropdown event-bus)
                   ])]]])

;;;
;; Modals
;;;
(rum/defc modal-tick < rum/static [baseline value]
  (let [percent (* 100 (/ (- value baseline) (- 100 baseline)))]
    (when (>= percent 0)
      [:.modal.tick {:style
               {:left (pc percent)
                :border-left (str "1px "
                                  (if (or (= percent 100) (= value 0))
                                      "solid "
                                      "dashed ")
                                  "black")}}
       [:span.modal.tick-label (pc value)]]
      )))

(rum/defc modal-ticks < rum/static [tick-count]
  (let [baseline min-outer-low
        raw-interval (/ (- 100 baseline) (inc tick-count))
        interval (cond
                   (> raw-interval 10) 20
                   (> raw-interval 5) 10
                   (> raw-interval 2) 5
                   :else 2)
        tick-values (range 100 (dec baseline) (- interval))]
    [:div
     (for [value tick-values]
       (rum/with-key (modal-tick baseline value) value))]))


(rum/defc modal-axis-container < rum/static [slider-axis-value]
  [:.axis-container
   {:style {:margin-left 0 ;(px axis-margin)
            :width (pc 100) ;(str "calc(100% - " (px (+ extra-right axis-margin)) ")")
            }}
   (rum/with-key (modal-ticks 3) :ticks)])


(defn interpretation
  "return a text interpreting the results for the given hospital"
  [row]
  (let [survival-rate (:survival-rate row)]
    (cond
      (< survival-rate (:outer-low row))
      (:low  content/dot-comments)

      (< survival-rate (:inner-low row))
      (:outer-low content/dot-comments)

      (<= survival-rate (:inner-high row))
      (:inner content/dot-comments)

      (<= survival-rate (:outer-high row))
      (:outer-high content/dot-comments)

      (> survival-rate (:outer-high row))
      (:outer-high content/dot-comments)

      :else
      "Oops - no text for this"
      ))
  )


(defn open-hospital-modal
  [row]
  (swap! core/app #(assoc % :selected-row row))
  (.modal ($ "#rowModal")))

(defn close-hospital-modal
  []
  (swap! core/app #(assoc % :selected-row nil))
  (.modal ($ "#rowModal") "hide")  )

(rum/defc modal  < rum/reactive bs-tooltip []
  (let [selected-row (:selected-row (rum/react core/app))
        close-handler #(core/click->event-bus % :close-hospital-modal selected-row)]
    [:#rowModal.modal.fade {:tab-index -1
                            :role "dialog"
                            :aria-labelledby "myModalLabel"
                            }
     [:.modal-dialog {:role "document"}
      [:.modal-content
       [:.modal-header
        [:button.close {:type"button"
                        :on-click close-handler
                        :on-touch-start close-handler
                        :aria-label "Close"}
         [:span {:aria-hidden "true"
                 :dangerouslySetInnerHTML {:__html "&times;"}}]]
        [:h4#myModalLabel.modal-title
         (:h-name selected-row)
                                        ;(google/g-map 54.5940 5.9530)
         ]]
       [:.modal-body
        (modal-axis-container 1)
        (chart-cell selected-row 1)
        [:h3]
        (interpretation selected-row)]

       [:.modal-footer
        [:button.btn.btn-default
         {:type "button"
          :on-click close-handler
          :on-touch-start close-handler}
         "Close"]
        ]]]
     ]))
