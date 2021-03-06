(ns ^:figwheel-always prais2.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [cljs.reader :refer [read-string]]
            [cljs.core.async :refer [put!]]
            [prais2.core :as core]
    ;[accountant.core :as accountant]
            )
  (:import goog.History)
  )


(enable-console-print!)

;;;
;; basic hashbang routing to configure some options
;; :todo. If you change this, you must also change prais2.core/irl
;;;
(secretary/set-config! :prefix core/prefix)


;;;
;; client-side routes
;;;
(defroute faqs "/faqs" []
  (put! core/event-bus [:faqs nil])
  )

(defroute sec "/faq/:section" [section]
  (let [s (js/parseInt section)
        ap @core/app]
    (if (not (and
               (= (:page ap) :faq)
               (= (:section ap) [s 0])))
      (do
        (put! core/event-bus [:faq [s 0]])
        (prn "faq match" s 0))))
  )

(defroute faq "/faq/:section/:id" [section id]
  (let [s (js/parseInt section)
        f (js/parseInt id)
        ap @core/app]
    (if (not (and
               (= (:page ap) :faqs)
               (= (:section ap) [s f])))
      (do
        (put! core/event-bus [:faq [s f]])
        (prn "faq match" s f))))
  )

#_(defroute homes "/home" []
    (put! core/event-bus [:home nil])
    )

(defroute home "/home" []
  (put! core/event-bus [:home nil])
  (prn "home :id match")
  )

#_(defroute intros "/intro" []
    (put! core/event-bus [:intro nil])
    )

(defroute intro "/intro" [id]
  (put! core/event-bus [:intro nil])
  (prn "intro match")
  )

#_(defroute datas "/data" []
    (put! core/event-bus [:data :animation]))

(defroute data "/data/:id" [id]
  (prn (str "data " id " match"))
  (put! core/event-bus [:data (keyword id)])
  ;(put! core/event-bus [:data id])
  )

(defroute index "/" []
  (prn "index match")
  (put! core/event-bus [:home nil])
  )

#_(defroute other "*" []
    (prn "* match")
    )



;; history configuration.
;;
;; The invisible element "dummy" is needed to make goog.History reloadable by
;; figwheel. Without it we see
;; Failed to execute 'write' on 'Document':
;; It isn't possible to write into a document from an
;; asynchronously-loaded external script unless it is explicitly
;;
;; Note that this history handling must happen after route definitions for it
;; to kick in on initial page load.
;;
(def history (let [h (History. false false "dummy")]
               (events/listen h EventType/NAVIGATE #(do
                                                     (js/console.log %)
                                                     (prn "Navigate event " (.-isNavigation %)
                                                          " token " (.-token %))
                                                     (when-not (.-isNavigation %)
                                                       ; get here on site entry (not a back or next button click)
                                                       (prn (str "prefix = " core/prefix " pathname = " (.-pathname (.-location js/window))))
                                                       (secretary/dispatch!
                                                         (if (= core/prefix "#")
                                                           (.-token %)
                                                           (.-pathname (.-location js/window))))

                                                       )
                                                     ))
               (doto h (.setEnabled true))
               h))

;;
;; pushy config
;;
#_(def history (pushy/pushy secretary/dispatch!
                            (fn [x] (when (secretary/locate-route x) x))))

#_(pushy/start! history)

;;
;; accountant
;;
#_(accountant/configure-navigation!
    {:nav-handler  (fn [path] (secretary/dispatch! path))
     :path-exists? (fn [path] (secretary/locate-route path))})

;;
;; When the user presses the back or forwards button, onpopstate is fired.
;; We should use this to dispatch the new URL in javascript.
;;
;;
(set! (.-onpopstate js/window)
      #(do (let [token (core/get-token!)]
             (prn "popstate " token)
             (secretary/dispatch! token)
             )))

