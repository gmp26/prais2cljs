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

#_(rum/defcc my-component [comp arg1 arg2]
  (let [node (.findDOMNode comp)]
    [:div "fails with: Uncaught TypeError: comp.findDOMNode is not a function"]))

(rum/defcc my-component [comp arg1 arg2]
  (let [node (.findDOMNode js/React comp)]
    [:div "fails with: Invariant Violation: findComponentRoot(...): Unable to find element.  This probably means the DOM was unexpectedly mutated ..."]))

#_(rum/defcc div [comp to-address session-log]
  (let [element (.findDOMNode js/React comp)]

    (.log js/console element)
    [:div#lookatme "Hi there"]
))

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

   (my-component 1 2)

   #_(email-form "gmp26@cam.ac.uk" "hello there")
   ])


(comment
  #_[:form {:action (str "mailto:" to-address
                         "?subject=" "prais2-session-start " (new js/Date.))
            :method "post"
            :enctype "text/plain"}
     [:input {:type "text"
              :name "session log"
              :value session-log
              }]])
