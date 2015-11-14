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
   [sablono.core :as sab]
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

(defcard nov-todos
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

(defcard show-404
  (render-404)
  )

(defcard show-app-state
  (fn [app-state] app-state)
  core/app)

(defcard render-table
  (render-table "data"))

(defcard sample-faq-7
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

(defcard hospital-detail
  (fn [app-state]
    (data/hospital-detail (:map-h-code @app-state)))
  core/app)

(defcard section-1-intro
  (intro/section-1-content))

(defcard playback-controls
  (fn [log-atom]
    (logger/playback-controls "playback"))
  logger/log-state)

(defcard log
  (fn [log-atom]
    (logger/log->csv @log-atom))
  logger/log-state)

;;;
;; Transit tests
;;;
(defrecord Foo [time-stamp gummy])

(def aFoo (Foo. (js/Date.) 7))

(deftype FooHandler []
  Object
  (tag [this v] "foo")
;  (rep [this v] (clj->js v))
  (rep [this v] #js [(:time-stamp v) (:gummy v)])
  )

(defcard a-Foo
  aFoo)

(def foo-wv (sit/writer :json-verbose
                      {:handlers {Foo (FooHandler.)}}))

(defn roundtrip [x]
  (let [w foo-wv
        r (sit/reader :json-verbose)]
    (sit/read r (sit/write w x))))

(defcard Foo-writer
  "Writes Foo records"
  (sit/write foo-wv aFoo))

(defcard Transit-log-writer
  "Writes Log entries"
  (fn [log-atom]
    (sit/write logger/log-w @log-atom))
  logger/log-state)

(defcard Transit-roundtrip
  "Reads written Log entries"
  (fn [log-atom]
    (let [str (sit/write logger/log-w @log-atom)]
      (sit/read logger/log-r str)
      ))
  logger/log-state
)


(deftest test-roundtrip
  "Round trip some basic types"
  (let [list1 [:red :green :blue]
        list2 [:apple :pear :grape]
        data  {(sit/integer 1) list1
               (sit/integer 2) list2
               :a :b
               ;:f aFoo
               }
        data' (roundtrip data)]
    (t/is (= data data'))))

(defcard roundtrip
  (test-roundtrip))
