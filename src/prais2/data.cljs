(ns ^:figwheel-always prais2.data
    (:require [rum.core :as rum]
              [jayq.core :refer ($ on)]
              [cljs.core.async :refer [put!]]
              [prais2.core :as core :refer [event-bus bs-popover bs-tooltip]]
              [prais2.content :as content]
              [prais2.utils :as u :refer [px pc important key-with]]
              [prais2.logger :as logger]
              [clojure.string :as str]
              )
    (:require-macros [jayq.macros :refer [ready]]))


;;;
;; datasource utilities
;;;
(defn colour-map [theme] (content/colour-map-options theme))

(defn index-by
  "create an index on a table"
  [table key-fn]
    (into {} (map (juxt key-fn identity) table)))

(defn add-markers [table-rows]
  (map-indexed
   (fn [index row]
     (let [lat (+ 50.7 (/ index 3))
           lon (+ -2.6 (* 0.8 (mod index 3)))
           ]
       (assoc row :h-lat lat :h-lon lon)))
   table-rows
   ))

(defn make-datasource [datasource]
  (into []
        (concat [content/header-row]
                (if (= datasource :2014)
                  (:2014  content/datasources)
                  (add-markers (datasource content/datasources))
                  ))))

(defn table-data
  "datasource switchable hospital results table"
  [datasource]
  (memoize (fn []
             (make-datasource datasource))))

(defn rows-by-code
  "datasource switchable hospital results indexed by hospital code"
  [datasource]
  (memoize (fn []
             (index-by ((table-data datasource)) #(keyword (:h-code %))))))

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

;;  "the minimum outer-low value across all rows"
(defn min-outer-low []
  (* 2 (int (/ (apply min (map :outer-low (rest ((table-data (:datasource @core/app)))))) 2))))

(defn bar-scale
  "value to pixel-width scale-factor controlled by slider in [0-1]"
  [slider]
  (/ chart-width (- 100 (* (min-outer-low) slider))))

(defn percent->screen
  "percent-value to slider compensated value"
  [slider value]
  (let [origin (* (min-outer-low) slider)]
    (* 100 (/ (- value origin) (- 100 origin))))
  )

(defn bar-width
  "return percentage-width for a bar"
  [slider value]
  (* value (bar-scale slider))
  )


;;;
;; graphics
;;;

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


(rum/defc chart-cell < bs-tooltip rum/reactive [row slider]
  (let [ap (rum/react core/app)
        colours (colour-map (:theme ap))
        bars (chart-states (:chart-state ap))
        dotty (:dot bars)
        dotless (disj bars :dot)]
    [:.chart-cell {:style {:padding-left (important (px axis-margin))
                           :padding-right last-pad-right}}
     [:div.bar-chart
      (map-indexed key-with

                   (cond
                     (= dotless #{})
                     [(dot slider (dot-size slider) (:survival-rate row) dotty)]

                     (= dotless #{:inner})
                     [(bar slider (:outer-low row) (* (min-outer-low) slider) :low (:low colours))
                      (bar slider (:inner-low row) (:outer-low row) :outer-low (:low colours))
                      (bar slider (:inner-high row) (:inner-low row) :inner (:inner colours))
                      (bar slider (:outer-high row) (:inner-high row) :outer-high (:high colours))
                      (bar slider 100 (:outer-high row) :high (:high colours))
                      (dot slider (dot-size slider) (:survival-rate row) dotty)
                      ]


                     (= dotless #{:outer})
                     [(bar slider (:outer-low row) (* (min-outer-low) slider) :low (:low colours))
                      (bar slider (:inner-low row) (:outer-low row) :outer-low (:outer-low colours))
                      (bar slider (:inner-high row) (:inner-low row) :inner (:outer-low colours))
                      (bar slider (:outer-high row) (:inner-high row) :outer-high (:outer-high colours))
                      (bar slider 100 (:outer-high row) :high (:high colours))
                      (dot slider (dot-size slider) (:survival-rate row) dotty)
                      ]


                     (= dotless #{:inner :outer})
                     [(bar slider (:outer-low row) (* (min-outer-low) slider) :low (:low colours))
                      (bar slider (:inner-low row) (:outer-low row) :outer-low (:outer-low colours))
                      (bar slider (:inner-high row) (:inner-low row) :inner (:inner colours))
                      (bar slider (:outer-high row) (:inner-high row) :outer-high (:outer-high colours))
                      (bar slider 100 (:outer-high row) :high (:high colours))
                      (dot slider (dot-size slider) (:survival-rate row) dotty)
                      ]))]]))


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
  (let [baseline (* (min-outer-low) slider-axis-value)
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
(defn bs-slider [hashed-id change-key]
  {:did-mount (fn [state]
                (let [slider (new js/Slider hashed-id
                                  (clj->js {
                                            :tooltip "hide"
                                            :min 0
                                            :max 1
                                            :step 0.1
                                            :value (:slider-axis-value @core/app)
                                            }))
                      handler #(put! event-bus [change-key (.getValue slider)])
                      state' (assoc state ::slider slider ::handler handler)]

                  #_(.on slider "slide" handler)
                  (.on slider "change" handler)
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

(rum/defcs slider-control < (bs-slider "#slider" :slider-axis-value) rum/static [state value min max step]
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

(rum/defcs detail-slider-control < (bs-slider "#detail-slider" :detail-slider-axis-value) rum/static [state value min max step]
  (let [s [:#detail-slider.slider
           [:input {:type "text"
                    :data-slider-min min
                    :data-slider-max max
                    :data-slider-step step
                    }]]
        slider (::slider state)]
    (when slider
      (.setValue slider value))
    s))

;;;
;; TODO - sort out what to do when multiple sliders are on a page
;;;
(rum/defcs map-detail-slider-control < (bs-slider "#map-detail-slider" :detail-slider-axis-value) rum/static [state value min max step]
  (let [s [:#map-detail-slider.slider
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
              :on-touch-start info-handler
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

(rum/defc slider-widget < rum/static [headers control slider-axis-value]
  [:div
   (map-indexed key-with
                [(slider-title headers)
                 (slider-labels)
                 (control slider-axis-value 0 1 0.01)
                 (axis-container slider-axis-value)])]  )

(rum/defc table-head < rum/static [ap headers column-keys event-bus slider-axis-value]

  (let [baseline (Math.round (* (min-outer-low) slider-axis-value))]
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
        (slider-widget headers slider-control slider-axis-value)
        ]]]]))


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

    [:div
     [:div.table-responsive {:key :print}
      [:table.table.table-striped.table-bordered {:cell-spacing "0"}
       (rum/with-key (table-head ap headers column-keys event-bus slider-axis-value) :thead)

       ;; body for both print and screen
       [:tbody {:key :tbody}
        (for [row rows
              :let [h-code (:h-code row)
                    info-handler #(core/click->event-bus % :open-hospital-modal h-code)
                    ]]
          [:tr {:key h-code
                :class (if (= (keyword h-code) (:selected-h-code ap)) "info" "")}
           (for [column-key column-keys
                 :let [column-header (column-key headers)]
                 :when (:shown column-header)]
             [:td {:key [column-key "r"]
                   :style {:width (px (:width column-header))
                           :height (px (:height column-header))}}
              [:div {:style {:display "inline-block"
                             :width (if (= column-key :h-name) "calc(100% - 50px)" "auto")}}
               (str (column-key row) (when (= column-key :survival-rate) " %" ""))]

              (when (= column-key :h-name)
                [:button.btn.btn-link.btn-xs.h-info
                 {:on-click info-handler
                  :on-touch-start info-handler}
                 h-code " " [:i.fa.fa-chevron-right]])])
           [:td {:key :bars} (chart-cell row slider-axis-value)]])]]]]))

(defn get-chart-state
  [index]
  (chart-states index))

(rum/defc integer-option < rum/static [n]
  [:option {:value n} n])

(rum/defc chart-state-dropdown < rum/reactive [event-bus]
  [:.form-group.col-md-2
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
  [:.form-group.col-md-1
   [:label-for{:for "colour-map-selector"} "Theme "]
   [:select#colour-map-selector.form-control.input-sm
    {
     :value (:theme (rum/react core/app))
     :on-change #(put! event-bus [:change-colour-map (.. % -target -value)])}
    (map-indexed key-with
                 (for [n (range (count content/colour-map-options))]
                   (integer-option n)))]
   ])

(rum/defc key-option < rum/static [key]
  [:option {:value (name key)} (name key)])

(rum/defc datasource-dropdown < rum/reactive [event-bus]
  [:.form-group.col-md-2
   [:label-for{:for "data-selector"} "Datasource "]
   [:select#data-selector.form-control.input-sm
    {:value (name (:datasource (rum/react core/app)))
     :on-change #(do
                   (prn "change-datasource " (keyword (.. % -target -value)))
                   (put! event-bus [:change-datasource (keyword (.. % -target -value))]))}
    (map-indexed key-with
                 (for [key (keys content/datasources)]
                   (key-option key)))]
   ])

(rum/defc option-menu < rum/reactive [event-bus]
  [:nav.navbar.navbar-default
   [:.container
    [:navbar-form.form-inline.row
     (map-indexed key-with
                  [(datasource-dropdown event-bus)
                   (theme-dropdown event-bus)
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
  (let [baseline (min-outer-low)
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


(rum/defc interpretation
  [row]
  [:span (let [survival-rate (:survival-rate row)]
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
             (:high content/dot-comments)

             :else
             "Oops - no text for this"
             ))]
  )

(rum/defc hospital-charities < rum/reactive [h-code]
  (let [ap (rum/react core/app)
        datasource ((:datasource ap) content/datasources)
        meta (h-code content/hospital-metadata)
        [link1 link2 link3 link4 link5] meta]
    (when link1 [:div
                 [:h4 {:key 1} "Further web information"]
                 [:ul {:key 2}
                  [:li {:key 1} [:a (link1 1) (link1 2)]]
                  (when link2 [:li [:a (link2 1) (link2 2)]])
                  (when link3 [:li [:a (link3 1) (link3 2)]])
                  (when link4 [:li [:a (link4 1) (link4 2)]])
                  (when link5 [:li [:a (link5 1) (link5 2)]])
                  ]])))

(rum/defc sample-hospital-intro-text []
  [:i {:key :sintros}
   [:p {:key 1} "Below is a chart showing how we present the results of a sample hospital."]
   [:p {:key 2} "Mouse over or click on the chart bars and the dot for explanations of their meaning."]
   [:p {:key 3} "Now use the map menu or click on a hospital location to see the real results and links to further information."]])

(rum/defc hospital-data < rum/reactive
  [h-code]
  (let [datasource (:datasource (rum/react core/app))
        selected-row (h-code ((rows-by-code datasource)))]
    [:.data-summary
     [:p "The hospital performed "
      [:b (:n-ops selected-row) "  operations. "]]
     [:p "After 30 days there were "
      [:b (:n-survivors selected-row) " survivors "]
      "and "
      [:b (:n-deaths selected-row) " deaths"]
      " had been recorded. "]
     [:p
      "The observed 30 day survival rate was " [:b (:survival-rate selected-row) "%"] "."]
     ]))

(rum/defc hospital-header < rum/static
  [selected-row]
  [:h3 (:h-name selected-row)]
  )

(rum/defc hospital-detail < rum/reactive
  [h-code]
  (let [ap (rum/react core/app)]
    (if h-code
      [:#detail
       (when-let [selected-row (h-code ((rows-by-code (:datasource ap))))]
         (map-indexed key-with
                      [(hospital-header selected-row)
                       (slider-widget content/header-row detail-slider-control (:detail-slider-axis-value ap))
                       (chart-cell selected-row (:detail-slider-axis-value ap))
                       (hospital-data h-code)
                       (interpretation selected-row)
                       (hospital-charities h-code)])
         )]
      [:#detail
       (let [selected-row content/sample-hospital]

         (map-indexed key-with
                      [(sample-hospital-intro-text)
                       (hospital-header selected-row)
                       (slider-widget content/header-row detail-slider-control (:detail-slider-axis-value ap))
                       (chart-cell selected-row (:detail-slider-axis-value ap))
                       (interpretation selected-row)]))])))


(defn open-hospital-modal
  [h-code]
  (swap! core/app #(assoc % :selected-h-code (keyword h-code)))
  (.modal ($ "#rowModal"))
)

(defn close-hospital-modal
  []
  (swap! core/app #(assoc % :selected-h-code nil))
  (.modal ($ "#rowModal") "hide")  )

(rum/defc modal  < rum/reactive bs-tooltip []
  (let [ap (rum/react core/app)
        datasource (:datasource ap)
        selected-h-code (:selected-h-code ap)
        close-handler #(core/click->event-bus % :close-hospital-modal selected-h-code)]
    [:#rowModal.modal.fade {:tab-index -1
                            :role "dialog"
                            :aria-labelledby "myModalLabel"
                            }
     [:.modal-dialog {:role "document"}
      [:.modal-content

       [:.modal-body

        (hospital-detail selected-h-code)]

       [:.modal-footer
        [:button.btn.btn-default
         {:type "button"
          :on-click close-handler
          :on-touch-start close-handler}
         "Close"]
        ]]]
     ]))
