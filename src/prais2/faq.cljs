(ns ^:figwheel-always prais2.faq
    (:require [rum :as r]
              [cljs.reader :as reader]
              [clojure.set :refer (intersection)]
              [cljsjs.react]
              [prais2.routes]
              [jayq.core :refer ($)])
    (:require-macros [jayq.macros :refer [ready]])
)
