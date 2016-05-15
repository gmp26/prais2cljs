(ns prais2.examples-page
  (:require
    [rum.core :as rum]
    [rum.server-render :as sr]
    [prais2.examples.core :as core]
    [prais2.examples.timer-forced :as timer-forced]
    [prais2.examples.timer-reactive :as timer-reactive]
    [prais2.examples.timer-static :as timer-static]
    [prais2.examples.controls :as controls]
    [prais2.examples.binary-clock :as binary-clock]
    [prais2.examples.board-reactive :as board-reactive]
    [prais2.examples.board-cursored :as board-cursored]
    [prais2.examples.bmi-calculator :as bmi-calculator]
    [prais2.examples.local-state :as local-state]
    [prais2.examples.self-reference :as self-reference]))

(defn taint [html]
  {:__html html})

(rum/defc foo []
  [:div "foo"])

(defn mounted-component [id component & args]
  (sr/render-static-markup
    [:div {:id                      id
           :dangerouslySetInnerHTML (taint (rum/render-html (apply component args)))}]))
;; (mounted-component "timer-static" timer-static/timer-static "Static" @core/*clock)
;; =>
;;<div id="timer-static">
;;  <div data-reactroot="" data-reactid="1" data-react-checksum="45825312">
;;    <!-- react-text: 2 -->Static<!-- /react-text -->
;;    <!-- react-text: 3 -->: <!-- /react-text -->
;;    <span style="color:#FA8D97;" data-reactid="4">00:00:00.000</span>
;;  </div>
;;</div>

(defn render-component []
  (sr/render-static-markup
    [:#timer-static
     {:dangerouslySetInnerHTML
      (taint (rum/render-html (timer-static/timer-static "Static" @core/*clock)))}]))

(def page (str
            "<!doctype html>
            <html>
              <head>
                <meta http-equiv='content-type' content='text/html;charset=UTF-8'/>
                <title>Rum test page</title>
                <link href='http://cloud.webtype.com/css/34a9dbc8-2766-4967-a61f-35675306f239.css' rel='stylesheet' type='text/css' />
                <link href='css/style.css' rel='stylesheet' type='text/css'/>
              </head>

              <body>

                <div class=example>
                  <div class=example-title>Timers</div>"
            (mounted-component "timer-static" timer-static/timer-static "Static" @core/*clock)

            ;(render-component)
            "     <div id=timer-forced>"
            (sr/render-static-markup (timer-forced/timer-forced)) "</div>
      <div id=timer-reactive>"
            (rum/render-html (timer-reactive/timer-reactive)) "</div>
    </div>

    <div class=example>
      <div class=example-title>Controls</div>
      <div id=controls>"
            (rum/render-html (controls/controls)) "</div>
    </div>

    <div class=example>
      <div class=example-title>Reactive binary clock</div>
      <div id=binary-clock>"
            (rum/render-html (binary-clock/binary-clock)) "</div>
    </div>

    <div class=example>
      <div class=example-title>Reactive artboard</div>
      <div id=board-reactive>"
            (rum/render-html (board-reactive/board-reactive)) "</div>
    </div>


    <div class=example>
      <div class=example-title>Cursor artboard</div>
      <div id=board-cursored>"
            (rum/render-html (board-cursored/board-cursored board-cursored/*board)) "</div>
    </div>

    <div class=example>
      <div class=example-title>BMI Calculator</div>
      <div id=bmi-calculator>"
            (rum/render-html (bmi-calculator/bmi-calculator)) "</div>
    </div>
    
    <div class=example>
      <div class=example-title>Form validation</div>
      <div id=form-validation></div>
    </div>

    <div class=example>
      <div class=example-title>Local state</div>
      <div id=local-state>"
            (rum/render-html (local-state/local-state "Clicks count")) "</div>
    </div>
    
    <div class=example>
      <div class=example-title>Self-reference</div>
      <div id=self-reference>"
            (rum/render-html (self-reference/self-reference [:a [:b [:c :d [:e] :g]]])) "</div>
    </div>

    <div class=example>
      <div class=example-title>Contexts</div>
      <div id=context></div>
    </div>

    <div class=example>
      <div class=example-title>Custom Methods and Data</div>
      <div id=custom-props></div>
    </div>


    <script src='js/compiled/examples.js' type='text/javascript'></script>

  </body>
</html>"))


(defn -main [& args]
  (println "Writing \"resources/public/examples.html\"")
  (spit "resources/public/examples.html" page)
  (Thread/sleep 300000)
  )

