(ns prais2.utils
  (:require [clojure.string :as str]
            [rum.core]))

(defn px
  "value to pixel string"
  [value]
  (str value "px"))

(defn pc
  "value to percent string"
  [value]
  (when value (str/replace  (str (.toPrecision value 3) "%") #"[.]0?0" "")))

(defn important
  "tack !important on a string value"
  [str-val]
  (str str-val " !important")
  )

(defn key-with
  "useful for mapping react keys to a content vector"
  [a b] (rum.core/with-key b a))
