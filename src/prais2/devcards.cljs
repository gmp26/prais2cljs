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
   [prais2.intro :refer [render-intro]]
   [prais2.faqs :refer [faq-content
                        render-faqs]]
   [prais2.main :refer [render-404
                        debug
                        render-table
                        ]]
   ;; [com.rpl.specter :as sp :refer [transform
   ;;                                 select
   ;;                                 filterer
   ;;                                 collect
   ;;                                 collect-one
   ;;                                 putval
   ;;                                 ALL
   ;;                                 FIRST
   ;;                                 LAST
   ;;                                 VAL
   ;;                                 ]]
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
* * *
* <s>use touch-start rather than touch-end with on-click</s>

###Intro page
* Include option to click out to further information to ensure content is not lost (ie highlight relevant FAQ)
* Add annotated (with key) example of a data bar to introductory page
* Replace table of charities with map with clickable links to more information about each of those hospital trusts and their associated charities.

####Data page
* Worry about small devices
* Two end-colour theme
* Add summary sentence at end of table
* Add click to bar chart hover
* Some kind of fade-out indicator on left side of bar charts
* Sample data (uploadable data)
* Add information to ‘i’ of each column explaining why ‘Number of Deaths’, ‘Number of Survivors’ or ‘Observed Survival Rate’ are not order able
* MP to experiment with reducing table size & embedding it with surrounding text
* EB to test this
* EJ & JT to test with further user-testing
* * *
- <s>Consider merging Hospital and Hospital Code column and add details of location: eg Hospital, Location (Hospital code)</s>
- <s>Remove hospital name ‘i’</s>
- <s>Move row cick to Hospital i icon click</s>
* <s>EB-test Colour of bars</s>
* <s>EB-test Darker shade on inner or outer bar</s>
* <s>EB-test Colour fade out at edges of the outer bars</s>


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

(defcard show-app-state-2
  @core/app)

(defcard render-table
  (render-table "data"))

(defcard faq-7-only
  (rum-wrap (faq-content :faq7))
)

(defcard basic-grouped-faqs
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
