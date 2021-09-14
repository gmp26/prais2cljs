// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.components.browser_update');
goog.require('cljs.core');
goog.require('rum.core');
/**
 * 
 */
prais2.components.browser_update.browser_update = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("script",{"dangerouslySetInnerHTML": {"__html": [cljs.core.str("var $buoop = {c:2}; \nfunction $buo_f(){\n  var e = document.createElement(\"script\");\n  e.src = \"//browser-update.org/update.min.js\";\n  document.body.appendChild(e);\n  };\n  try {document.addEventListener(\"DOMContentLoaded\", $buo_f,false)}\n  catch(e){window.attachEvent(\"onload\", $buo_f)}")].join('')}});
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"browser-update");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35943__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35943 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35944__i = 0, G__35944__a = new Array(arguments.length -  0);
while (G__35944__i < G__35944__a.length) {G__35944__a[G__35944__i] = arguments[G__35944__i + 0]; ++G__35944__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35944__a,0);
} 
return G__35943__delegate.call(this,args__27116__auto__);};
G__35943.cljs$lang$maxFixedArity = 0;
G__35943.cljs$lang$applyTo = (function (arglist__35945){
var args__27116__auto__ = cljs.core.seq(arglist__35945);
return G__35943__delegate(args__27116__auto__);
});
G__35943.cljs$core$IFn$_invoke$arity$variadic = G__35943__delegate;
return G__35943;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=browser_update.js.map?rel=1629049579471