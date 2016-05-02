(ns ^:figwheel-always prais2.data
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [rum.core :as rum]
              [cljsjs.jquery]
              [cljsjs.bootstrap]
              [cljs.core.async :refer [put! <! timeout]]
              [prais2.core :as core :refer [event-bus bs-popover bs-tooltip]]
              [prais2.content :as content]
              [prais2.utils :as u :refer [px pc important key-with]]
              [prais2.logger :as logger]
              [clojure.string :as str]
              [sablono.core :as sab]
              ))

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
           lon (+ -2.6 (* 0.8 (mod index 3)))]
       (assoc row :h-lat lat :h-lon lon)))
   table-rows
   ))

;;
;; todo: generalise dataset
;;
(defn make-datasource [datasource]
  (into []
        (concat [content/header-row]
                (if (number? (js.parseInt (name datasource)))
                  (datasource  content/datasources)
                  (add-markers (datasource content/datasources))
                  )
                #_(if (= datasource :2014)
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


(rum/defc bar < rum/static
  ([slider hi-val lo-val bar-type fill]
   [:div.bar {:style {:background-color fill
                      :width (str (bar-width slider (- hi-val lo-val)) "%")
                      }
              }]
   [:div.bar.btn {:style {:background-color fill
                          :border-radius 0
                          :width (str (bar-width slider (- hi-val lo-val)) "%")
                          :text-align "right"
                          }
                  :data-toggle "tooltip"
                  :data-original-title (str (pc lo-val) " - " (pc hi-val) "<br>" (bar-type content/bar-comments))
                  :data-delay 0
                  :data-html true
                  :data-trigger "hover"
                  :data-placement "bottom"}
    ])

  ([slider hi-val lo-val bar-type fill no-tip]
   (if (= fill "rgba(255,255,255,0)")
     [:div.bar {:style {:background-color fill
                        :width (str (bar-width slider (- hi-val lo-val)) "%")
                        }
                }]
     (if-not no-tip
       [:div.bar.btn {:style {:background-color fill
                              :border-radius 0
                              :width (str (bar-width slider (- hi-val lo-val)) "%")
                              :text-align "right"
                              }
                      :data-toggle "tooltip"
                      :data-original-title (str (pc lo-val) " - " (pc hi-val) "<br>" (bar-type content/bar-comments))
                      :data-delay 0
                      :data-html true
                      :data-trigger "hover"
                      :data-placement "bottom"}
        ]
       [:div.bar.btn {:style {:background-color fill
                              :border-radius 0
                              :width (str (bar-width slider (- hi-val lo-val)) "%")
                              :text-align "right"
                              }
                      ;:data-original-title (str (pc lo-val) " - " (pc hi-val) "<br>" (bar-type content/bar-comments))
                      ;:data-delay 0
                      ;:data-html true
                      ;:data-trigger "hover"
                      ;:data-placement "bottom"
                      }
        ]
       ))))




(rum/defc dot < rum/static rum/reactive bs-tooltip [slider size value dotty & [relative]]
  (let [px-size (px size)]
    [:div.dot.btn
     {:data-toggle "tooltip"
      :data-placement "bottom"
      :data-delay 0
      :data-trigger "hover"
      :data-html true
      :data-original-title (str (pc value) "<br>The survival rate"
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

(rum/defc dot-no-tip < rum/static rum/reactive [slider size value dotty & [relative]]
  (let [px-size (px size)]
    [:div.dot.btn
     {:style {:background-color (:dot (colour-map (:theme (rum/react core/app))))
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
    [:.chart-cell {:style {:background "#ffffff"
                           :margin-left (important (px axis-margin))
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


(rum/defc annotated-chart-cell < bs-tooltip rum/reactive [row slider bars text]
  (let [ap (rum/react core/app)
        colours (colour-map (:theme ap))
        dotty (:dot bars)
        dotless (disj bars :dot)]
    [:div
     [:.annotation {:key 1} text]
     [:.chart-cell.annotated {:key 2
                              :style {:background "#ffffff"
                                      :margin-left 0;(important (px axis-margin))
                                      :height "60px"
                                      :width "100%"
                                      :padding-right 0;last-pad-right
                                      }}
      [:div.bar-chart.annotated
       (map-indexed key-with

                    (cond
                      (= dotless #{})

                      [(bar slider (:outer-low row) (* (min-outer-low) slider) :low "#ffffff" true)
                       (dot-no-tip slider (dot-size slider) (:survival-rate row) dotty)]

                      (= dotless #{:inner})
                      [(bar slider (:outer-low row) (* (min-outer-low) slider) :low "#ffffff" true)
                       (bar slider (:inner-low row) (:outer-low row) :outer-low "#ffffff" true)
                       (bar slider (:inner-high row) (:inner-low row) :inner (:inner colours) true)
                       (bar slider (:outer-high row) (:inner-high row) :outer-high "#ffffff" true)
                       (bar slider 100 (:outer-high row) :high "#ffffff" true)
                       (dot-no-tip slider (dot-size slider) (:survival-rate row) dotty)
                       ]


                      (= dotless #{:outer})
                      [(bar slider (:outer-low row) (* (min-outer-low) slider) :low "#ffffff" true)
                       (bar slider (:inner-low row) (:outer-low row) :outer-low (:outer-low colours) true)
                       (bar slider (:inner-high row) (:inner-low row) :inner (:outer-low colours) true)
                       (bar slider (:outer-high row) (:inner-high row) :outer-high (:outer-high colours) true)
                       (bar slider 100 (:outer-high row) :high "#ffffff" true)
                       (dot-no-tip slider (dot-size slider) (:survival-rate row) dotty)
                       ]


                      (= dotless #{:inner :outer})
                      [(bar slider (:outer-low row) (* (min-outer-low) slider) :low "#ffffff" true)
                       (bar slider (:inner-low row) (:outer-low row) :outer-low (:outer-low colours) true)
                       (bar slider (:inner-high row) (:inner-low row) :inner (:inner colours) true)
                       (bar slider (:outer-high row) (:inner-high row) :outer-high (:outer-high colours) true)
                       (bar slider 100 (:outer-high row) :high "#ffffff" true)
                       (dot-no-tip slider (dot-size slider) (:survival-rate row) dotty true)
                       ]))]]]))


(rum/defc tick < rum/static [baseline value tick-height]
  (let [percent (* 100 (/ (- value baseline) (- 100 baseline)))]
    (when (>= percent 0)
      [:.tick {:style
               {:left (pc percent)
                :height (px tick-height)
                :border-left (str "1px "
                                  (if (or (= percent 100) (= value 0))
                                    "solid "
                                    "dashed ")
                                  "black")}}
       [:span.tick-label (pc value)]]
      )))

(rum/defc ticks < rum/static [slider-axis-value tick-count tick-height]
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
       (rum/with-key (tick baseline value tick-height) value))]))

(rum/defc slider-labels []
  [:.slider-label
   [:div.pull-left {:key :left}
    [:i.fa.fa-long-arrow-left {:key :full}] " full range"]
   [:div.pull-right {:key :right}
    "full detail " [:i.fa.fa-long-arrow-right {:key :detail}]]])


;; returns a bootstrap slider mixin
(defn bs-slider [hashed-id change-key]
  {:did-mount (fn [state]
                (let [slider (new js/Slider hashed-id
                                  (clj->js {
                                            :tooltip "hide"
                                            :min 0
                                            :max 1
                                            :step 0.02
                                            :value (change-key @core/app)
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
                     #_(prn "unmounting slider")
                     (when  slider
                       (when handler (.off slider "slide" handler))
                       (when handler (.off slider "change" handler))
                       (.destroy slider))
                     (dissoc state ::slider ::handler)))})

(rum/defcs slider-control < (bs-slider "#slider" :slider-axis-value) rum/static [state value min max step]
  #_(prn "called slider-control with " value)
  (let [s [:#slider.slider
           [:input {:type "text" :value value}]]
        slider (::slider state)]
    (when slider
      (.setValue slider value))
    s))

(rum/defcs detail-slider-control < (bs-slider "#detail-slider" :detail-slider-axis-value) rum/static [state value min max step]
  #_(prn "called detail-slider-control with " value)
  (let [s [:#detail-slider.slider
           [:input {:type "text" :value value}]]
        slider (::slider state)]
    (when slider
      (.setValue slider value))

    s))

;;;
;; TODO - sort out what to do when multiple sliders are on a page
;;;
(rum/defcs map-detail-slider-control < (bs-slider "#map-detail-slider" :detail-slider-axis-value) rum/static [state value min max step]
  #_(prn "called map-detail-slider-control with " value)
  (let [s [:#map-detail-slider.slider
           [:input {:type "text" :value value}]]
        slider (::slider state)]
    (when slider
      (.setValue slider value))
    s))




(rum/defc axis-container < rum/static
  ([slider-axis-value]
   (axis-container slider-axis-value 69))

  ([slider-axis-value tick-height]
   [:.axis-container
    {:style {:margin-left (px axis-margin)
             :width (str "calc(100% - " (px (+ extra-right axis-margin)) ")")}}
    (rum/with-key (ticks slider-axis-value 3 tick-height) :ticks)]))

(rum/defc slider-title [headers]
  [:p {:key :p}
   (:title (:observed headers))])

(rum/defc table-header < rum/static bs-popover [background ap header column-key event-bus]
  [:th {:on-click #(when (:sortable header) (core/click->event-bus % :sort-toggle column-key))
        :on-touch-start #(when (:sortable header) (core/click->event-bus % :sort-toggle column-key))
        :style {:max-width (px (:width header))
                :white-space "normal !important"
                :vertical-align "top"
                :cursor (if (:sortable header) "pointer" "auto")
                :background-color background
                :color "#ffffff !important"
                }}
   (when (:sortable header) [:i {:key :icon
                                 :class (str  "right fa fa-sort"
                                              (if (= column-key (:sort-by ap))
                                                (if (:sort-ascending ap) "-asc" "-desc") ""))
                                 :style {:pointer-events "none"
                                         :zoom 1.5
                                         :color "#ffffff"}}])
   [:span {:key :text
           :style {:background-color "none !important"
                   :color "white !important"}}
    (when (not= column-key :h-name)
      (let [info-handler #(core/click->event-bus % :info-clicked column-key)]
        [:a.btn.btn-primary.btn-xs.info.pull-right
         {:on-click       info-handler
          :on-touch-start info-handler
          :role           "button"
          :tabIndex       -1
          :data-trigger   "focus"
          :data-toggle    "popover"
          :title          (:title header)
          :data-html      "true"
          :data-content   (:content header)
          :data-placement "bottom"
          :style          {:cursor "pointer"}} [:i.fa.fa-info {:key :i}]]))
    [:br {:key :br}]
    (:title header)]])

(rum/defc slider-widget < rum/static
  ([headers control slider-axis-value]
   (slider-widget headers control slider-axis-value 69))

  ([headers control slider-axis-value tick-height]
   [:div
    (map-indexed key-with
                 [(slider-title headers)
                  (slider-labels)
                  (control slider-axis-value 0 1 0.02)
                  (axis-container slider-axis-value tick-height)])]))

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
        (slider-widget headers slider-control slider-axis-value 748)
        ]]]]))


(rum/defc table1-core [ap data event-bus sort-key sort-direction headers rows]
  [:table.table.table-bordered {:cell-spacing "0"}
   (rum/with-key (table-head ap headers (keys headers) event-bus (:slider-axis-value ap)) :thead)

   [:tbody {:key :tbody}
    (for [row (if sort-key
                (let [sorted (sort-by sort-key (rest data))]
                  (if sort-direction sorted (reverse sorted)))
                (rest data))
          :let [h-code (:h-code row)
                slider-axis-value (:slider-axis-value ap)
                ]]
      [:tr {:key h-code
            :class (if (= (keyword h-code) (:selected-h-code ap)) "info" "")}
       (for [column-key (keys headers)
             :let [column-header (column-key headers)
                   info-handler #(core/click->event-bus % :open-hospital-modal h-code)]
             :when (:shown column-header)]
         [:td {:key [h-code column-key]
               :style (merge {:maxWidth (px (:width column-header))
                              :whiteSpace "normal"
                              :height (px (:height column-header))}
                             (if (= column-key :h-name) {:minWidth (px 256)} {}))}
          [:div {:style {:display "inline-block"
                         :cursor (if (= column-key :h-name) "pointer" "auto")
                         :width (if (= column-key :h-name) "calc(100% - 50px)" "auto")}}
           (if (= column-key :h-name)
             [:a {:on-touch-start info-handler
                  :on-click info-handler} (column-key row)]
             (str (column-key row) (when (= column-key :survival-rate) " %" "")))]

          (when (= column-key :h-name)
            [:button.btn.btn-link.btn-xs.h-info
             {:on-click info-handler
              :on-touch-start info-handler}
             h-code " " [:i.fa.fa-chevron-right]])])
       [:td {:key [h-code :bars]
             :style {:background-color "#f0f0f0"}} (chart-cell row slider-axis-value)]])]])

(rum/defc table1 < rum/reactive [app data event-bus]
  [:.table-container
   [:div.table-responsive
    {:style {:overflow "visible"}}
    (table1-core (rum/react app)
                 data
                 event-bus
                 (:sort-by (rum/react app))
                 (:sort-ascending (rum/react app))
                 (first data)
                 )]])

;;
;; todo: configure title according to dataset
;;
(rum/defc list-tab [app data event-bus]
  [:div
   [:.col-sm-offset-1.col-sm-10
    [:h2 "List data for April 2011 – March 2014"]
    [:p (str "There are fourteen hospitals in the UK and Ireland that perform heart surgery in children "
             "(0-16 years old). "
             "This data is updated annually and covers the most recent 3 year report period.")]
    [:p "Previous reporting periods can be selected at the bottom of the table."
     "Clicking on a hospital code will bring up specific information for that hospital along with "
     "an interpretation of its survival rate. It is only valid to compare a hospital's survival rate "
     "to its predicted range and not to other hospitals "
     [:a {:href "#/faqs"} "Everything Else"]]
    [:p "You can use your mouse to hover over the chart to bring up more explanation."]]

   (table1 app data event-bus)
   [:div {:style {:height "40px"}}]])


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
                   (integer-option n)))]])

(rum/defc key-option < rum/static [key]
  [:option {:value (name key)} (name key)])

(rum/defc datasource-dropdown < rum/reactive [event-bus]
  [:.form-group.col-sm-2
   [:label-for{:for "data-selector"
               :style {:color "#ffffff"}} "Datasource "]
   [:select#data-selector.form-control.input-sm
    {:style {:max-width "120px"}
     :value (name (:datasource (rum/react core/app)))
     :on-change #(put! event-bus [:change-datasource (keyword (.. % -target -value))])}
    (map-indexed key-with
                 (for [key (keys content/datasources)]
                   (key-option key)))]])

(rum/defc nicor-checkbox < rum/reactive []
  [:.form-group.col-sm-6
   [:label-for {:for "nicor-check"
                :style {:color "#ffffff"}} "Show Nicor links "]
   [:input {:type "checkbox"
            :checked (:show-nicor (rum/react core/app))
            :on-change #(swap! core/app update :show-nicor not)
            }]])

(rum/defc option-menu < rum/reactive [event-bus]
  [:nav.navbar.navbar-inverse.table-container
   [:.container-fluid
    [:navbar-form.form-inline.row
     [:.col-sm-12
      (map-indexed key-with
                   [(datasource-dropdown event-bus)
                    (nicor-checkbox)
                                        ;(theme-dropdown event-bus)
                                        ;(chart-state-dropdown event-bus)
                    ])]]]])

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
                  (when link2 [:li {:key 2} [:a (link2 1) (link2 2)]])
                  (when link3 [:li {:key 3} [:a (link3 1) (link3 2)]])
                  (when link4 [:li {:key 4} [:a (link4 1) (link4 2)]])
                  (when link5 [:li {:key 5} [:a (link5 1) (link5 2)]])
                  ]])))

(rum/defc sample-hospital-intro-text []
  [:i {:key :sintros}
   [:p.note {:key 1} "You can move the slider button left to see the rates plotted on the full 0-100% range of possible survival rates, or right to focus on the detail near 100%"]
   [:p.note {:key 2} "Mouse over or click on the chart bars and the dot for explanations of their meaning."]
   #_[:p.note {:key 3} "Now use the map menu or click on a hospital location to see the real results and links to further information."]])

(rum/defc hospital-data < rum/reactive
  [h-code]
  (let [datasource (:datasource (rum/react core/app))
        selected-row (h-code ((rows-by-code datasource)))]
    (sab/html
     [:.data-summary
      [:p {:key 1} "The hospital performed "
       [:b (:n-ops selected-row) "  operations. "]]
      [:p {:key 2} "Measured 30 days after surgery, "
       [:b {:key 1} (:n-survivors selected-row) " survivors "]
       "and "
       [:b {:key 2} (:n-deaths selected-row) " deaths"]
       " had been recorded. "]
      [:p {:key 3}
       "The hospital's 30 day survival rate was " [:b (:survival-rate selected-row) "%"] "."]
      ])))

(rum/defc hospital-header < rum/static
  [selected-row]
  [:h3 (:h-name selected-row)]
  )

(rum/defc legend  < rum/reactive []
  [:div {:style {:margin-bottom "40px"}}
   [:div {:style {;:border "1px solid black"
                  :background-color "#ffffff"
                  :border-radius "2px"
                  :box-shadow "0px 0px 3px #CCCCCC"
                  :padding "10px"}}
    [:h4 {:style {:color "orange"}} "What does this mean?"]
    (let [ap (rum/react core/app)
          selected-row content/sample-hospital]
      (map-indexed key-with [(annotated-chart-cell selected-row (:detail-slider-axis-value ap) #{:inner} "We expect the hospital's survival rate to be inside this bar 19 times out of 20")
                             (annotated-chart-cell selected-row (:detail-slider-axis-value ap) #{:outer} "We expect the hospital's survival rate to be inside this bar 998 times out of a 1000")
                             (annotated-chart-cell selected-row (:detail-slider-axis-value ap) #{:dot} "The dot indicates the survival rate")
                             #_(annotated-chart-cell selected-row (:detail-slider-axis-value ap) #{:outer :inner :dot} "when combined")
                             #_(explain-interpretation)
                             #_(interpretation selected-row)]))    ]])

(rum/defc nav-aid []
  [:p {:style {:font-style "italic"
               :margin-top "20px"}} [:i.fa.fa-arrow-up {:style {:color "orange"}}] " Hover over or tap on the chart areas for more detail on " [:strong "this"] " hospital. " [:br] [:i.fa.fa-arrow-down {:style {:color "orange"}}] " See below for further explanation of the bars and the dot."]
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
                       (nav-aid)
                       (hospital-charities h-code)
                       (legend)])
         )
       ]
      [:#detail
       (let [selected-row content/sample-hospital]

         (map-indexed key-with
                      [(sample-hospital-intro-text)
                       (hospital-header selected-row)
                       (slider-widget content/header-row detail-slider-control (:detail-slider-axis-value ap))
                       (chart-cell selected-row (:detail-slider-axis-value ap))
                       (interpretation selected-row)
                       (nav-aid)
                       ]))])))


(defn open-hospital-modal
  [h-code]
  (swap! core/app #(assoc % :selected-h-code (keyword h-code)))
  (.modal (js/$ "#rowModal"))
)

(defn close-hospital-modal
  []
  (swap! core/app #(assoc % :selected-h-code nil))
  (.modal (js/$ "#rowModal") "hide")  )

(rum/defc modal  < rum/reactive []
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

       [:.modal-body {:key 1}

        (hospital-detail selected-h-code)]

       [:.modal-footer {:key 2}
        [:button.btn.btn-default
         {:type "button"
          :on-click close-handler
          :on-touch-start close-handler}
         "Close"]
        ]]]
     ]))
