// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('prais2.components.data_selector');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('prais2.content');
/**
 * 
 */
prais2.components.data_selector.data_selector = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var app = rum.core.react(prais2.core.app);
var G__16825 = "div";
var G__16826 = {"className": "data-selector"};
var G__16827 = (function (){var G__16836 = "p";
var G__16837 = null;
var G__16838 = (function (){var G__16841 = "h1";
var G__16842 = null;
var G__16843 = (function (){var G__16845 = "i";
var G__16846 = {"className": "fa fa-chevron-left"};
return React.createElement(G__16845,G__16846);
})();
var G__16844 = sablono.interpreter.interpret([cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(app).call(null,prais2.content.datasource_tab)))].join(''));
return React.createElement(G__16841,G__16842,G__16843,G__16844);
})();
return React.createElement(G__16836,G__16837,G__16838);
})();
return React.createElement(G__16825,G__16826,G__16827);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"data-selector");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16847__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16847 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16848__i = 0, G__16848__a = new Array(arguments.length -  0);
while (G__16848__i < G__16848__a.length) {G__16848__a[G__16848__i] = arguments[G__16848__i + 0]; ++G__16848__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16848__a,0);
} 
return G__16847__delegate.call(this,args__8012__auto__);};
G__16847.cljs$lang$maxFixedArity = 0;
G__16847.cljs$lang$applyTo = (function (arglist__16849){
var args__8012__auto__ = cljs.core.seq(arglist__16849);
return G__16847__delegate(args__8012__auto__);
});
G__16847.cljs$core$IFn$_invoke$arity$variadic = G__16847__delegate;
return G__16847;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
