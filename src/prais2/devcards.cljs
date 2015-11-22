(ns prais2.devcards
  (:require
   [rum.core :as rum]
   [clojure.string :as str]
   [prais2.open-layers-map :as map]
   [prais2.core :as core :refer [event-bus event-bus-pub rum-wrap]]
   [prais2.routes :as routes]
   [prais2.content :as content :refer [faqs]]
   [prais2.data :as data]
   [prais2.chrome :as chrome]
   [prais2.intro :as intro]
   [prais2.faqs :refer [faq-content
                        render-faqs]]
   [prais2.main :refer [render-404
                        debug
                        render-table
                        ]]
   [prais2.logger :as logger]
   [prais2.utils :as u :refer [px pc important key-with]]
;   [sablono.core :as sab]
   [cognitect.transit :as sit]
   [cljs.test :as t]
   [cljsjs.moment :as moment]
   )
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defcard tests
  "#Test suite
This is based on Bruce Hauman's devcards package so we can interleave REPL tests with visual test cards with markdown notes.")

#_(defcard nov-todos
  "##For November


###General
* Addressable content - esp FAQs
* Session start, end, export and load
* Event and state tracking and logging
* Undo/Redo
* Session export and load
* Session CSV export
* * *
- <s>use touch-start rather than touch-end with on-click</s>

###Intro page
* Include option to click out to further information to ensure content is not lost (ie highlight relevant FAQ)
* Add annotated (with key) example of a data bar to introductory page
* Replace table of charities with map with clickable links to more information about each of those hospital trusts and their associated charities.

####Data page
* Worry about small devices
* Add summary sentence at end of table
* Some kind of fade-out indicator on left side of bar charts
* Add information to ‘i’ of each column explaining why ‘Number of Deaths’, ‘Number of Survivors’ or ‘Observed Survival Rate’ are not order able
* MP to experiment with reducing table size & embedding it with surrounding text
* EB to test this
* EJ & JT to test with further user-testing
* * *
- <s>Consider merging Hospital and Hospital Code column and add details of location: eg Hospital, Location (Hospital code)</s>
- <s>Remove hospital name ‘i’</s>
- <s>Move row cick to Hospital i icon click</s>
- <s>EB-test Colour of bars</s>
- <s>EB-test Darker shade on inner or outer bar</s>
- <s>EB-test Colour fade out at edges of the outer bars</s>
- <s>Add click to bar chart hover</s>
- <s>Sample data (uploadable data)</s>
- <s>Two end-colour theme</s>


###Faqs -> Understanding the data
* Layout changes to FAQs:
* FAQs should be addressable somehow - maybe in popovers/accordions...
* Add concertina or index list
* * *
* <s>Remove columns to ensure clear, chronological layout</s>
* <s>Update the title of FAQ section to ‘Understanding the data’</s>

###Links
* Include links to further statistical information

###Video
* Create video animation which includes explanation of:
* The difference between dark & light blue bars
* The different actions NICOR take depending where the dot falls
* eg “if you see a dot here.....”
“This is what it would look like if eg one is failing, but as you can see none of them are outside the range.”
* Why bars are different sizes for different hospitals
* Explanation of click & hover functions
* Explanation of slider function)
")

#_(defcard show-404
  (render-404)
  )

#_(defcard show-app-state
  (fn [app-state] app-state)
  core/app)

#_(defcard render-table
  (render-table "data"))

#_(defcard sample-faq-7
  (rum-wrap (faq-content :faq7))
)

#_(defcard basic-grouped-faqs
  (rum-wrap
   (faq-content :faq1)
   (faq-content :faq2)
   (faq-content :faq3)
   (faq-content :faq4)
   (faq-content :faq5)
   (faq-content :faq6)
   (faq-content :faq7)
   (faq-content :faq8)
   (faq-content :faq9)
   (faq-content :faq10)
   (faq-content :faq11)
   (faq-content :faq12)
   (faq-content :faq13)
   ))

(defcard map
  (map/hospitals))

#_(defcard sample-hospital-header
  (data/hospital-header content/sample-hospital))

#_(defcard sample-hospital-intro-text
  (data/sample-hospital-intro-text))

#_(rum/defc test-sample-hospital-array < rum/reactive []
  (let [selected-row content/sample-hospital
        ap (rum/react core/app)]
    [:div
     (map-indexed key-with
                  [(data/sample-hospital-intro-text)
                   (data/hospital-header selected-row)
                   (data/slider-widget content/header-row data/detail-slider-control (:detail-slider-axis-value ap))
                   (data/chart-cell selected-row (:detail-slider-axis-value ap))
                   (data/interpretation selected-row)]
                  )])  )
#_(defcard sample-hospital-array
  (test-sample-hospital-array)
  )

(defcard hospital-detail
  (fn [app-state]
    (data/hospital-detail (:map-h-code @app-state)))
  core/app)

#_(defcard section-1-intro
  (intro/section-1-content))

(defcard log
  (fn [log-atom]
    (logger/log->csv @log-atom))
  logger/log-state)

;;;
;; Transit tests
;;

;;
;;
;;
;; practise code
;;
;;
;;
(comment
  (def aFoo (logger/Foo. (js/Date.) 7))

  (defcard a-Foo
    aFoo)

  (def foo-wv (sit/writer :json-verbose
                          {:handlers {logger/Foo (logger/FooHandler.)}}))

  (def foo-w (sit/writer :json
                         {:handlers {logger/Foo (logger/FooHandler.)}}))

  (def foo-rv (sit/reader :json-verbose))

  (def foo-r (sit/reader :json))

  (defn roundtrip [x]
    (let [w foo-wv
          r (sit/reader :json-verbose)]
      (sit/read r (sit/write w x)))))

#_(defcard Foo-writer
  "Writes Foo records"
  (sit/write foo-wv aFoo))

;;
;;
;;
;; real code
;;
;;



(defcard Transit-log-write1
  "Dump log to transit format - unresponsively..."
  (sit/write logger/log-wv ;@logger/log-state
                          [(js/Date.) :foo (:event-data @logger/log-state) @core/app]))

(defcard Transit-log-write2
  "Dump log to transit format - unresponsively..."
  (sit/write logger/log-wv @logger/log-state))

;;
;;
;;=> [["~#log-entry",["~m1447800495549","~:start-session",null,["~#app-state",["~:2014","~:intro",null,true,1,1,3,1,null,null]]]]]


;;=> on success:
;;=> [#prais2.logger.Log-entry{:time-stamp #inst "2015-11-18T10:57:33.854-00:00", :event-key :start-session, :event-data nil, :app-state #prais2.core.App-state{:datasource :2014, :page :intro, :sort-by nil, :sort-ascending true, :slider-axis-value 1, :detail-slider-axis-value 1, :chart-state 3, :theme 1, :selected-h-code nil, :map-h-code nil}}]
;;
;;=> on failure


;;=> Transit-log-writer: @log-atom: " [#prais2.logger.Log-entry{:time-stamp #inst "2015-11-18T11:32:48.870-00:00", :event-key :start-session, :event-data nil, :app-state #prais2.core.App-state{:datasource :2014, :page :intro, :sort-by nil, :sort-ascending true, :slider-axis-value 1, :detail-slider-axis-value 1, :chart-state 3, :theme 1, :selected-h-code nil, :map-h-code nil}} #prais2.logger.Log-entry{:time-stamp #inst "2015-11-18T13:28:01.215-00:00", :event-key :start-session, :event-data nil, :app-state #prais2.core.App-state{:datasource :2014, :page :intro, :sort-by nil, :sort-ascending true, :slider-axis-value 1, :detail-slider-axis-value 1, :chart-state 3, :theme 1, :selected-h-code nil, :map-h-code nil}}]
#_(defcard Transit-log-writer
  "Writes Log entries"
  (fn [log-atom]
    (prn "Transit-log-writer: @log-atom: " @log-atom)
    (sit/write (logger/logw) @log-atom))
  logger/log-state)

(defcard Transit-roundtrip-result
  "Reads written Log entries"
  (fn [log-atom]
    (prn "writer")
    (.log js/console logger/log-wv)
    (prn "log-state")
    (prn @logger/log-state)
    (let [str (sit/write logger/log-wv @log-atom)]
      (sit/read logger/log-r str)
      ))
  logger/log-state
)

#_(deftest Transit-roundtrip-session
  "Roundtrip log-state to transit and back"
  (let [str (sit/write logger/log-w @logger/log-state)
        tb  (sit/read logger/log-r str)]
    (t/is (= (map #(dissoc % :time-stamp) tb)
             (map #(dissoc % :time-stamp) @logger/log-state)))))

(defcard playback-controls
  (fn [log-atom]
    (logger/playback-controls "playback"))
  logger/log-state)

(defcard log-state-index
  (fn [lsi] @lsi)
  logger/log-state-index)
