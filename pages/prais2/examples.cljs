(ns prais2.examples
  (:require
    [clojure.string :as str]
    [rum.core :as rum]
    [prais2.examples.core :as core]
    
    [prais2.examples.timer-static :as timer-static]
    [prais2.examples.timer-forced :as timer-forced]
    [prais2.examples.timer-reactive :as timer-reactive]
    [prais2.examples.controls :as controls]
    [prais2.examples.binary-clock :as binary-clock]
    [prais2.examples.board-reactive :as board-reactive]
    [prais2.examples.board-cursored :as board-cursored]
    [prais2.examples.bmi-calculator :as bmi-calculator]
    [prais2.examples.form-validation :as form-validation]
    [prais2.examples.local-state :as local-state]
    [prais2.examples.self-reference :as self-reference]
    [prais2.examples.context :as context]
    [prais2.examples.custom-props :as custom-props]))


(enable-console-print!)


;; Mount everything

(timer-static/mount!    (core/el "timer-static"))
(timer-static/mount!    (core/el "timer-static"))
(timer-forced/mount!    (core/el "timer-forced"))
(timer-reactive/mount!  (core/el "timer-reactive"))
(controls/mount!        (core/el "controls"))
(binary-clock/mount!    (core/el "binary-clock"))
(board-reactive/mount!  (core/el "board-reactive"))
(board-cursored/mount!  (core/el "board-cursored"))
(bmi-calculator/mount!  (core/el "bmi-calculator"))
(form-validation/mount! (core/el "form-validation"))
(local-state/mount!     (core/el "local-state"))
(self-reference/mount!  (core/el "self-reference"))
(context/mount!         (core/el "context"))
(custom-props/mount!    (core/el "custom-props")) 


;; Start clock ticking

(defn tick []
  (reset! core/*clock (.getTime (js/Date.)))
  (js/setTimeout tick @core/*speed))


(tick)
