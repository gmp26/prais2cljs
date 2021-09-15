// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.fps');
goog.require('cljs.core');
prais2.fps.fps = cljs.core.atom.call(null,(60));
prais2.fps.measure_BANG_ = (function prais2$fps$measure_BANG_(interval){
var elapsed = cljs.core.atom.call(null,(0));
var last_ts = cljs.core.atom.call(null,null);
var frames = cljs.core.atom.call(null,(0));
var cb = ((function (elapsed,last_ts,frames){
return (function prais2$fps$measure_BANG__$_cb(ts){
var last_21577 = (function (){var or__3936__auto__ = cljs.core.deref.call(null,last_ts);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return ts;
}
})();
var delta_21578 = (ts - last_21577);
var cur_elapsed_21579 = cljs.core.swap_BANG_.call(null,elapsed,cljs.core._PLUS_,delta_21578);
var cur_frames_21580 = cljs.core.swap_BANG_.call(null,frames,cljs.core.inc);
cljs.core.reset_BANG_.call(null,last_ts,ts);

if((cur_elapsed_21579 > interval)){
cljs.core.reset_BANG_.call(null,prais2.fps.fps,Math.round(((1000) * (cur_frames_21580 / cur_elapsed_21579))));

cljs.core.swap_BANG_.call(null,elapsed,cljs.core._PLUS_,(- interval));

cljs.core.reset_BANG_.call(null,frames,(0));
} else {
}

return window.requestAnimationFrame(prais2$fps$measure_BANG__$_cb);
});})(elapsed,last_ts,frames))
;
return window.requestAnimationFrame(cb);
});
prais2.fps.measure_BANG_.call(null,(2000));
prais2.fps.on_js_reload = (function prais2$fps$on_js_reload(){
return null;
});

//# sourceMappingURL=fps.js.map
