// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('prais2.mugshots');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('prais2.content');
goog.require('clojure.string');
/**
 * 
 */
prais2.mugshots.mugshot = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (key){
var data = (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(prais2.content.mugshot_data) : key.call(null,prais2.content.mugshot_data));
var G__15418 = "div";
var G__15419 = {"style": {"maxWidth": "200px"}};
var G__15420 = (function (){var attrs15417 = prais2.core.isrc.cljs$core$IFn$_invoke$arity$1([cljs.core.str("assets/mugshots/"),cljs.core.str(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(data)),cljs.core.str("-med.jpg")].join(''));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs15417))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img-responsive"], null)], null),attrs15417], 0))):{"className": "img-responsive"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15417))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15417)], null))));
})();
var G__15421 = (function (){var G__15422 = "p";
var G__15423 = {"key": (2), "className": "text-center"};
var G__15424 = sablono.interpreter.interpret(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(data));
return React.createElement(G__15422,G__15423,G__15424);
})();
return React.createElement(G__15418,G__15419,G__15420,G__15421);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"mugshot");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15425__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15425 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15426__i = 0, G__15426__a = new Array(arguments.length -  0);
while (G__15426__i < G__15426__a.length) {G__15426__a[G__15426__i] = arguments[G__15426__i + 0]; ++G__15426__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15426__a,0);
} 
return G__15425__delegate.call(this,args__8012__auto__);};
G__15425.cljs$lang$maxFixedArity = 0;
G__15425.cljs$lang$applyTo = (function (arglist__15427){
var args__8012__auto__ = cljs.core.seq(arglist__15427);
return G__15425__delegate(args__8012__auto__);
});
G__15425.cljs$core$IFn$_invoke$arity$variadic = G__15425__delegate;
return G__15425;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.mugshots.reformatted_mugshots = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__15448 = "div";
var G__15449 = null;
var G__15450 = (function (){var G__15453 = "div";
var G__15454 = {"className": "row"};
var G__15455 = (function (){var attrs15428 = (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$christina) : prais2.mugshots.mugshot.call(null,cljs.core.cst$kw$christina));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs15428))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs15428], 0))):{"className": "col-xs-3"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15428))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15428)], null))));
})();
var G__15456 = (function (){var attrs15429 = (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$david) : prais2.mugshots.mugshot.call(null,cljs.core.cst$kw$david));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs15429))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs15429], 0))):{"className": "col-xs-3"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15429))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15429)], null))));
})();
var G__15457 = (function (){var attrs15430 = (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mike) : prais2.mugshots.mugshot.call(null,cljs.core.cst$kw$mike));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs15430))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs15430], 0))):{"className": "col-xs-3"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15430))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15430)], null))));
})();
return React.createElement(G__15453,G__15454,G__15455,G__15456,G__15457);
})();
var G__15451 = (function (){var G__15458 = "div";
var G__15459 = {"className": "row"};
var G__15460 = (function (){var attrs15431 = (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tim) : prais2.mugshots.mugshot.call(null,cljs.core.cst$kw$tim));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs15431))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs15431], 0))):{"className": "col-xs-3"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15431))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15431)], null))));
})();
var G__15461 = (function (){var attrs15432 = (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$emily_DASH_b) : prais2.mugshots.mugshot.call(null,cljs.core.cst$kw$emily_DASH_b));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs15432))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs15432], 0))):{"className": "col-xs-3"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15432))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15432)], null))));
})();
return React.createElement(G__15458,G__15459,G__15460,G__15461);
})();
var G__15452 = (function (){var G__15462 = "div";
var G__15463 = {"className": "row"};
var G__15464 = (function (){var attrs15433 = (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$emily_DASH_j) : prais2.mugshots.mugshot.call(null,cljs.core.cst$kw$emily_DASH_j));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs15433))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs15433], 0))):{"className": "col-xs-3"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15433))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15433)], null))));
})();
var G__15465 = (function (){var attrs15434 = (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$joanne) : prais2.mugshots.mugshot.call(null,cljs.core.cst$kw$joanne));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs15434))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs15434], 0))):{"className": "col-xs-3"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15434))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15434)], null))));
})();
return React.createElement(G__15462,G__15463,G__15464,G__15465);
})();
return React.createElement(G__15448,G__15449,G__15450,G__15451,G__15452);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"reformatted-mugshots");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15466__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15466 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15467__i = 0, G__15467__a = new Array(arguments.length -  0);
while (G__15467__i < G__15467__a.length) {G__15467__a[G__15467__i] = arguments[G__15467__i + 0]; ++G__15467__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15467__a,0);
} 
return G__15466__delegate.call(this,args__8012__auto__);};
G__15466.cljs$lang$maxFixedArity = 0;
G__15466.cljs$lang$applyTo = (function (arglist__15468){
var args__8012__auto__ = cljs.core.seq(arglist__15468);
return G__15466__delegate(args__8012__auto__);
});
G__15466.cljs$core$IFn$_invoke$arity$variadic = G__15466__delegate;
return G__15466;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
