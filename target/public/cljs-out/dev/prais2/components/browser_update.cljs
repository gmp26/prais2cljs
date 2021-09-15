(ns prais2.components.browser-update
  (:require [rum.core :as rum]))

(rum/defc browser-update []
  [:script {:dangerouslySetInnerHTML {:__html (str "var $buoop = {c:2}; \nfunction $buo_f(){
  var e = document.createElement(\"script\");
  e.src = \"//browser-update.org/update.min.js\";
  document.body.appendChild(e);
  };
  try {document.addEventListener(\"DOMContentLoaded\", $buo_f,false)}
  catch(e){window.attachEvent(\"onload\", $buo_f)}")}}])

