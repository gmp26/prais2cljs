// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.components.body');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.components.static_home');
goog.require('prais2.components.analytics');
goog.require('prais2.components.browser_update');
/**
 * 
 */
prais2.components.body.body = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (content){
return React.createElement("body",null,React.createElement("div",{"id": "app"},React.createElement("i",{"style": {"fontSize": "100px", "position": "absolute", "top": "20%", "left": "calc(50% - 50px)", "color": "#000000"}, "className": "fa fa-spinner fa-pulse"})),React.createElement("div",{"id": "dummy", "display": "none"}),sablono.interpreter.interpret.call(null,prais2.components.analytics.spa_analytics.call(null,"UA-77529676-1")),React.createElement("script",{"async": true, "src": "https://www.google-analytics.com/analytics.js"}),React.createElement("script",{"async": true, "src": "/js/autotrack.js"}),React.createElement("script",{"src": "/js/compiled/prais2.js"}));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"body");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35972__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35972 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35973__i = 0, G__35973__a = new Array(arguments.length -  0);
while (G__35973__i < G__35973__a.length) {G__35973__a[G__35973__i] = arguments[G__35973__i + 0]; ++G__35973__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35973__a,0);
} 
return G__35972__delegate.call(this,args__27116__auto__);};
G__35972.cljs$lang$maxFixedArity = 0;
G__35972.cljs$lang$applyTo = (function (arglist__35974){
var args__27116__auto__ = cljs.core.seq(arglist__35974);
return G__35972__delegate(args__27116__auto__);
});
G__35972.cljs$core$IFn$_invoke$arity$variadic = G__35972__delegate;
return G__35972;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=body.js.map?rel=1629049579589