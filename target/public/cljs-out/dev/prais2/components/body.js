// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.components.body');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.components.analytics');
/**
 * 
 */
prais2.components.body.body = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (_,build_name){
return React.createElement("body",null,React.createElement("div",({"id": "app"}),React.createElement("i",({"style": ({"fontSize": "100px", "position": "absolute", "top": "20%", "left": "calc(50% - 50px)", "color": "#000000"}), "className": "fa fa-spinner fa-pulse"}))),React.createElement("div",({"id": "dummy", "display": "none"})),sablono.interpreter.interpret.call(null,prais2.components.analytics.spa_analytics.call(null,"UA-77529676-1")),React.createElement("script",({"async": true, "src": "https://www.google-analytics.com/analytics.js"})),React.createElement("script",({"async": true, "src": "/js/autotrack.js"})),React.createElement("script",({"src": ["/cljs-out/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(build_name),"-main.js"].join('')})));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"body");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22295__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22295 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22296__i = 0, G__22296__a = new Array(arguments.length -  0);
while (G__22296__i < G__22296__a.length) {G__22296__a[G__22296__i] = arguments[G__22296__i + 0]; ++G__22296__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22296__a,0,null);
} 
return G__22295__delegate.call(this,args__16261__auto__);};
G__22295.cljs$lang$maxFixedArity = 0;
G__22295.cljs$lang$applyTo = (function (arglist__22297){
var args__16261__auto__ = cljs.core.seq(arglist__22297);
return G__22295__delegate(args__16261__auto__);
});
G__22295.cljs$core$IFn$_invoke$arity$variadic = G__22295__delegate;
return G__22295;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=body.js.map
