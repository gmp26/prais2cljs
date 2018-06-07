(ns ^:figwheel-always prais2.fps
  "a simple frames-per-second calculator. Helpful when developing."
  )

(def fps (atom 60))

(defn measure! [interval]
  (let [elapsed (atom 0)
        last-ts (atom nil)
        frames (atom 0)]
    (letfn [(cb [ts]
              (let [last (or @last-ts ts)
                    delta (- ts last)
                    cur-elapsed (swap! elapsed + delta)
                    cur-frames (swap! frames inc)]
                (reset! last-ts ts)
                (if (> cur-elapsed interval)
                  (do
                    (reset! fps (->> (/ cur-frames cur-elapsed)
                                    (* 1000)
                                    (.round js/Math)))
                    (swap! elapsed + (- interval))
                    (reset! frames 0))))
              (.requestAnimationFrame js/window cb))]
      (.requestAnimationFrame js/window cb))))

(measure! 2000)


;;
;; optionally do something on app reload
;;
(defn on-js-reload []
  ;(prn "load fps")
  )
