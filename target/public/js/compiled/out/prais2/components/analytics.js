// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.components.analytics');
goog.require('cljs.core');
goog.require('rum.core');
/**
 * 
 */
prais2.components.analytics.analytics = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (ua_id){
return React.createElement("script",{"dangerouslySetInnerHTML": {"__html": [cljs.core.str("(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n}\n)(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n\nga('create', '"),cljs.core.str(ua_id),cljs.core.str("', 'auto');\nga('send', 'pageview');\n")].join('')}});
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"analytics");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35954__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35954 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35955__i = 0, G__35955__a = new Array(arguments.length -  0);
while (G__35955__i < G__35955__a.length) {G__35955__a[G__35955__i] = arguments[G__35955__i + 0]; ++G__35955__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35955__a,0);
} 
return G__35954__delegate.call(this,args__27116__auto__);};
G__35954.cljs$lang$maxFixedArity = 0;
G__35954.cljs$lang$applyTo = (function (arglist__35956){
var args__27116__auto__ = cljs.core.seq(arglist__35956);
return G__35954__delegate(args__27116__auto__);
});
G__35954.cljs$core$IFn$_invoke$arity$variadic = G__35954__delegate;
return G__35954;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.components.analytics.spa_analytics = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (ua_id){
return React.createElement("script",{"dangerouslySetInnerHTML": {"__html": [cljs.core.str("window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new\nDate;\nga('create', \""),cljs.core.str(ua_id),cljs.core.str("\", 'auto');\n ga('require', 'autotrack');\n\nga('send', 'pageview');\n")].join('')}});
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"spa-analytics");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35957__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35957 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35958__i = 0, G__35958__a = new Array(arguments.length -  0);
while (G__35958__i < G__35958__a.length) {G__35958__a[G__35958__i] = arguments[G__35958__i + 0]; ++G__35958__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35958__a,0);
} 
return G__35957__delegate.call(this,args__27116__auto__);};
G__35957.cljs$lang$maxFixedArity = 0;
G__35957.cljs$lang$applyTo = (function (arglist__35959){
var args__27116__auto__ = cljs.core.seq(arglist__35959);
return G__35957__delegate(args__27116__auto__);
});
G__35957.cljs$core$IFn$_invoke$arity$variadic = G__35957__delegate;
return G__35957;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=analytics.js.map?rel=1629049579547