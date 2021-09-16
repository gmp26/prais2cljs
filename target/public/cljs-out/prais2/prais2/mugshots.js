// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('prais2.mugshots');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('prais2.content');
/**
 * 
 */
prais2.mugshots.mugshot = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (key){
var data = (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(prais2.content.mugshot_data) : key.call(null,prais2.content.mugshot_data));
return React.createElement("div",({"style": ({"maxWidth": "200px"})}),(function (){var attrs19704 = prais2.core.isrc.cljs$core$IFn$_invoke$arity$1(["assets/mugshots/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(data)),"-med.jpg"].join(''));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs19704))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img-responsive"], null)], null),attrs19704], 0))):({"className": "img-responsive"})),((cljs.core.map_QMARK_(attrs19704))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19704)], null)));
})(),React.createElement("p",({"key": (2), "className": "text-center"}),sablono.interpreter.interpret(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(data))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"mugshot");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19705__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19705 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19706__i = 0, G__19706__a = new Array(arguments.length -  0);
while (G__19706__i < G__19706__a.length) {G__19706__a[G__19706__i] = arguments[G__19706__i + 0]; ++G__19706__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19706__a,0,null);
} 
return G__19705__delegate.call(this,args__14302__auto__);};
G__19705.cljs$lang$maxFixedArity = 0;
G__19705.cljs$lang$applyTo = (function (arglist__19707){
var args__14302__auto__ = cljs.core.seq(arglist__19707);
return G__19705__delegate(args__14302__auto__);
});
G__19705.cljs$core$IFn$_invoke$arity$variadic = G__19705__delegate;
return G__19705;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.mugshots.reformatted_mugshots = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("div",null,React.createElement("div",({"className": "row"}),(function (){var attrs19708 = (function (){var G__19711 = cljs.core.cst$kw$christina;
return (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(G__19711) : prais2.mugshots.mugshot.call(null,G__19711));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19708))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs19708], 0))):({"className": "col-xs-3"})),((cljs.core.map_QMARK_(attrs19708))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19708)], null)));
})(),(function (){var attrs19709 = (function (){var G__19712 = cljs.core.cst$kw$david;
return (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(G__19712) : prais2.mugshots.mugshot.call(null,G__19712));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19709))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs19709], 0))):({"className": "col-xs-3"})),((cljs.core.map_QMARK_(attrs19709))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19709)], null)));
})(),(function (){var attrs19710 = (function (){var G__19713 = cljs.core.cst$kw$mike;
return (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(G__19713) : prais2.mugshots.mugshot.call(null,G__19713));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19710))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs19710], 0))):({"className": "col-xs-3"})),((cljs.core.map_QMARK_(attrs19710))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19710)], null)));
})()),React.createElement("div",({"className": "row"}),(function (){var attrs19714 = (function (){var G__19716 = cljs.core.cst$kw$tim;
return (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(G__19716) : prais2.mugshots.mugshot.call(null,G__19716));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19714))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs19714], 0))):({"className": "col-xs-3"})),((cljs.core.map_QMARK_(attrs19714))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19714)], null)));
})(),(function (){var attrs19715 = (function (){var G__19717 = cljs.core.cst$kw$emily_DASH_b;
return (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(G__19717) : prais2.mugshots.mugshot.call(null,G__19717));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19715))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs19715], 0))):({"className": "col-xs-3"})),((cljs.core.map_QMARK_(attrs19715))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19715)], null)));
})()),React.createElement("div",({"className": "row"}),(function (){var attrs19718 = (function (){var G__19720 = cljs.core.cst$kw$emily_DASH_j;
return (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(G__19720) : prais2.mugshots.mugshot.call(null,G__19720));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19718))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs19718], 0))):({"className": "col-xs-3"})),((cljs.core.map_QMARK_(attrs19718))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19718)], null)));
})(),(function (){var attrs19719 = (function (){var G__19721 = cljs.core.cst$kw$joanne;
return (prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1 ? prais2.mugshots.mugshot.cljs$core$IFn$_invoke$arity$1(G__19721) : prais2.mugshots.mugshot.call(null,G__19721));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19719))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs19719], 0))):({"className": "col-xs-3"})),((cljs.core.map_QMARK_(attrs19719))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19719)], null)));
})()));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"reformatted-mugshots");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19722__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19722 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19723__i = 0, G__19723__a = new Array(arguments.length -  0);
while (G__19723__i < G__19723__a.length) {G__19723__a[G__19723__i] = arguments[G__19723__i + 0]; ++G__19723__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19723__a,0,null);
} 
return G__19722__delegate.call(this,args__14302__auto__);};
G__19722.cljs$lang$maxFixedArity = 0;
G__19722.cljs$lang$applyTo = (function (arglist__19724){
var args__14302__auto__ = cljs.core.seq(arglist__19724);
return G__19722__delegate(args__14302__auto__);
});
G__19722.cljs$core$IFn$_invoke$arity$variadic = G__19722__delegate;
return G__19722;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
