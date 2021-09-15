// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.components.data_selector');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('prais2.content');
/**
 * 
 */
prais2.components.data_selector.data_selector = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var app = rum.core.react.call(null,prais2.core.app);
return React.createElement("div",({"className": "data-selector"}),React.createElement("p",null,React.createElement("h1",null,React.createElement("i",({"className": "fa fa-chevron-left"})),sablono.interpreter.interpret.call(null,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(app).call(null,prais2.content.datasource_tab)))].join('')))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"data-selector");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21478__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21478 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21479__i = 0, G__21479__a = new Array(arguments.length -  0);
while (G__21479__i < G__21479__a.length) {G__21479__a[G__21479__i] = arguments[G__21479__i + 0]; ++G__21479__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21479__a,0,null);
} 
return G__21478__delegate.call(this,args__16261__auto__);};
G__21478.cljs$lang$maxFixedArity = 0;
G__21478.cljs$lang$applyTo = (function (arglist__21480){
var args__16261__auto__ = cljs.core.seq(arglist__21480);
return G__21478__delegate(args__16261__auto__);
});
G__21478.cljs$core$IFn$_invoke$arity$variadic = G__21478__delegate;
return G__21478;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=data_selector.js.map
