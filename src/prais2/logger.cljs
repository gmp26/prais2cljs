(ns ^:figwheel-always prais2.logger
    (:require [rum.core :as rum]
              [prais2.core :as core]
              ))

(rum/defc icon-control [icon event-key tooltip]
  [:button.btn.btn-default
   {:title tooltip
    :tab-index 0
    :on-click #(core/click->log-bus % event-key nil)}
   [:i.fa {:class (str "fa-" icon)}]])


(rum/defc reset-control []
  (icon-control "step-backward" :rewind "rewind"))

(rum/defc undo-control []
  (icon-control "chevron-left" :undo "undo"))

(rum/defc redo-control []
  (icon-control "chevron-right" :redo "redo"))

(rum/defc stop-control []
  (icon-control "circle" :stop-session "stop recording session"))

(rum/defc share-control []
  (icon-control "sign-out fa-rotate-270" :share-session "mail out session"))

(rum/defc load-control []
  (icon-control "sign-in fa-rotate-90" :load-session "read in session"))


(rum/defc playback-controls []
  [:div
    (reset-control)
   " "
   [:.btn-group
    (undo-control)
    (redo-control)]
   " "
   [:.btn-group
    (share-control)
    (load-control)]

   ])
