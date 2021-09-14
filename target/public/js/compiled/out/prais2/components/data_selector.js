// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.components.data_selector');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('prais2.content');
/**
 * 
 */
prais2.components.data_selector.data_selector = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,(function (){var app = rum.core.react.call(null,prais2.core.app);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-selector",".data-selector",-907085044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-left","i.fa.fa-chevron-left",-1827496633)], null),[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(app).call(null,prais2.content.datasource_tab)))].join('')], null)], null)], null);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"data-selector");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__32624__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__32624 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__32625__i = 0, G__32625__a = new Array(arguments.length -  0);
while (G__32625__i < G__32625__a.length) {G__32625__a[G__32625__i] = arguments[G__32625__i + 0]; ++G__32625__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__32625__a,0);
} 
return G__32624__delegate.call(this,args__27116__auto__);};
G__32624.cljs$lang$maxFixedArity = 0;
G__32624.cljs$lang$applyTo = (function (arglist__32626){
var args__27116__auto__ = cljs.core.seq(arglist__32626);
return G__32624__delegate(args__27116__auto__);
});
G__32624.cljs$core$IFn$_invoke$arity$variadic = G__32624__delegate;
return G__32624;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=data_selector.js.map?rel=1629049568470