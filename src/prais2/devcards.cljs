(ns prais2.devcards
  (:require
   [rum.core :as rum]
   [clojure.string :as str]
   [prais2.open-layers-map :as map]
   [prais2.core :as core :refer [event-bus event-bus-pub rum-wrap]]
   [prais2.routes :as routes]
   [prais2.content :as content :refer [faq-sections]]
   [prais2.data :as data]
   [prais2.chrome :as chrome]
   [prais2.intro :as intro]
   [prais2.faqs :refer [
                        render-faqs]]
   [prais2.main :refer [render-404
                        debug
                        render-data
                        ]]
   [prais2.logger :as logger]
   [prais2.utils :as u :refer [px pc important key-with]]
   [sablono.core :as sab]
;   [cljsjs.csv :as csv]
   [cognitect.transit :as sit]
   [cljs.test :as t]
   [cljsjs.moment :as moment]
   [cljs.reader :as r]
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

(defcard render-table
  (render-data "data"))

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
    @log-atom)
  logger/log-states)

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

(defcard playback-controls
  (fn [log-atom]
    (logger/playback-controls "playback"))
  logger/log-states)

(defcard log-state-index
  (fn [lsi] @lsi)
  logger/log-state-index)

(defcard log-states
  (fn [lsi] @lsi)
  logger/log-states)

(defcard tsv-atom
  logger/tsv-log)

(defcard parse-csv
  (fn [tsv] logger/tsv-parse @tsv)
  logger/tsv-log)


(def test-session
  "session-id	timestamp	eventkey	eventdata	datasource	page	sort-by	sort-asc	table-slider	popup-slider	chart-state	theme	table-selection	map-selection\nrective	Tue Dec 01 2015 17:21:11 GMT 0000 (GMT)	:start-session		:2014	:home		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:14 GMT 0000 (GMT)	:data	:top	:2014	:data		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:15 GMT 0000 (GMT)	:data	:top	:2014	:data		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:15 GMT 0000 (GMT)	:data	:top	:2014	:data		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:15 GMT 0000 (GMT)	:data	:top	:2014	:data		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:28 GMT 0000 (GMT)	:faqs	:top	:2014	:faqs		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:28 GMT 0000 (GMT)	:faqs	:top	:2014	:faqs		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:28 GMT 0000 (GMT)	:faqs	:top	:2014	:faqs		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:28 GMT 0000 (GMT)	:faqs	:top	:2014	:faqs		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:43 GMT 0000 (GMT)	:home	:top	:2014	:home		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:43 GMT 0000 (GMT)	:home	:top	:2014	:home		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:43 GMT 0000 (GMT)	:home	:top	:2014	:home		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:43 GMT 0000 (GMT)	:home	:top	:2014	:home		TRUE	1	1	3	1		"
  )

(def test-session*
  "rective	Tue Dec 01 2015 17:21:11 GMT 0000 (GMT)	:start-session		:2014	:home		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:14 GMT 0000 (GMT)	:data	:top	:2014	:data		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:15 GMT 0000 (GMT)	:data	:top	:2014	:data		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:15 GMT 0000 (GMT)	:data	:top	:2014	:data		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:15 GMT 0000 (GMT)	:data	:top	:2014	:data		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:28 GMT 0000 (GMT)	:faqs	:top	:2014	:faqs		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:28 GMT 0000 (GMT)	:faqs	:top	:2014	:faqs		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:28 GMT 0000 (GMT)	:faqs	:top	:2014	:faqs		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:28 GMT 0000 (GMT)	:faqs	:top	:2014	:faqs		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:43 GMT 0000 (GMT)	:home	:top	:2014	:home		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:43 GMT 0000 (GMT)	:home	:top	:2014	:home		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:43 GMT 0000 (GMT)	:home	:top	:2014	:home		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:43 GMT 0000 (GMT)	:home	:top	:2014	:home		TRUE	1	1	3	1		"
  )

(def test-session**
  "Tue Dec 01 2015 17:21:11 GMT 0000 (GMT)	:start-session		:2014	:home		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:14 GMT 0000 (GMT)	:data	:top	:2014	:data		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:15 GMT 0000 (GMT)	:data	:top	:2014	:data		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:15 GMT 0000 (GMT)	:data	:top	:2014	:data		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:15 GMT 0000 (GMT)	:data	:top	:2014	:data		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:28 GMT 0000 (GMT)	:faqs	:top	:2014	:faqs		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:28 GMT 0000 (GMT)	:faqs	:top	:2014	:faqs		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:28 GMT 0000 (GMT)	:faqs	:top	:2014	:faqs		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:28 GMT 0000 (GMT)	:faqs	:top	:2014	:faqs		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:43 GMT 0000 (GMT)	:home	:top	:2014	:home		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:43 GMT 0000 (GMT)	:home	:top	:2014	:home		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:43 GMT 0000 (GMT)	:home	:top	:2014	:home		TRUE	1	1	3	1		\nrective	Tue Dec 01 2015 17:21:43 GMT 0000 (GMT)	:home	:top	:2014	:home		TRUE	1	1	3	1		"
)

(defn parsed-data [] (js->clj (logger/tsv-parse test-session)))

(defn parsed-log-states []
  (rest ((parsed-data) "data")))

(defn first-row []
  (first (parsed-log-states)))

(defcard navbar
  "Navigation bar"
  (chrome/bs-fixed-navbar :home))
