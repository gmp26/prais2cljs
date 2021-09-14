// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.fps');
goog.require('cljs.core');
prais2.fps.fps = cljs.core.atom.call(null,(60));
prais2.fps.measure_BANG_ = (function prais2$fps$measure_BANG_(interval){
var elapsed = cljs.core.atom.call(null,(0));
var last_ts = cljs.core.atom.call(null,null);
var frames = cljs.core.atom.call(null,(0));
var cb = ((function (elapsed,last_ts,frames){
return (function prais2$fps$measure_BANG__$_cb(ts){
var last_33064 = (function (){var or__24663__auto__ = cljs.core.deref.call(null,last_ts);
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return ts;
}
})();
var delta_33065 = (ts - last_33064);
var cur_elapsed_33066 = cljs.core.swap_BANG_.call(null,elapsed,cljs.core._PLUS_,delta_33065);
var cur_frames_33067 = cljs.core.swap_BANG_.call(null,frames,cljs.core.inc);
cljs.core.reset_BANG_.call(null,last_ts,ts);

if((cur_elapsed_33066 > interval)){
cljs.core.reset_BANG_.call(null,prais2.fps.fps,Math.round(((1000) * (cur_frames_33067 / cur_elapsed_33066))));

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

//# sourceMappingURL=fps.js.map?rel=1629049570265