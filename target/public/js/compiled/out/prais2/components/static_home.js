// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.components.static_home');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.home');
goog.require('prais2.chrome');
/**
 * 
 */
prais2.components.static_home.static_home = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var attrs35948 = prais2.chrome.header.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35948))?sablono.interpreter.attributes.call(null,attrs35948):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35948))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.home.render_home.call(null)),sablono.interpreter.interpret.call(null,prais2.chrome.footer.call(null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35948),sablono.interpreter.interpret.call(null,prais2.home.render_home.call(null)),sablono.interpreter.interpret.call(null,prais2.chrome.footer.call(null))], null))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"static-home");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35949__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35949 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35950__i = 0, G__35950__a = new Array(arguments.length -  0);
while (G__35950__i < G__35950__a.length) {G__35950__a[G__35950__i] = arguments[G__35950__i + 0]; ++G__35950__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35950__a,0);
} 
return G__35949__delegate.call(this,args__27116__auto__);};
G__35949.cljs$lang$maxFixedArity = 0;
G__35949.cljs$lang$applyTo = (function (arglist__35951){
var args__27116__auto__ = cljs.core.seq(arglist__35951);
return G__35949__delegate(args__27116__auto__);
});
G__35949.cljs$core$IFn$_invoke$arity$variadic = G__35949__delegate;
return G__35949;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=static_home.js.map?rel=1629049579506