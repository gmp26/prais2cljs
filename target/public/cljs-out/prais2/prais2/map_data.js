// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('prais2.map_data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('prais2.utils');
goog.require('prais2.core');
goog.require('prais2.content');
goog.require('prais2.data');
goog.require('prais2.open_layers_map');
/**
 * 
 */
prais2.map_data.hospital_item = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (row){
return React.createElement("li",({"onClick": (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_on_DASH_map_DASH_menu_DASH_item,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(row))], null));
}), "onTouchStart": (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_on_DASH_map_DASH_menu_DASH_item,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(row))], null));
})}),sablono.interpreter.interpret(cljs.core.cst$kw$h_DASH_name.cljs$core$IFn$_invoke$arity$1(row)),React.createElement("i",({"className": "fa fa-chevron-right pull-right"})));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"hospital-item");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20640__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20640 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20641__i = 0, G__20641__a = new Array(arguments.length -  0);
while (G__20641__i < G__20641__a.length) {G__20641__a[G__20641__i] = arguments[G__20641__i + 0]; ++G__20641__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20641__a,0,null);
} 
return G__20640__delegate.call(this,args__14302__auto__);};
G__20640.cljs$lang$maxFixedArity = 0;
G__20640.cljs$lang$applyTo = (function (arglist__20642){
var args__14302__auto__ = cljs.core.seq(arglist__20642);
return G__20640__delegate(args__14302__auto__);
});
G__20640.cljs$core$IFn$_invoke$arity$variadic = G__20640__delegate;
return G__20640;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.map_data.hospital_list = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
var rows = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$h_DASH_name,(function (){var G__20645 = cljs.core.cst$kw$hosp_DASH_data.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app));
var fexpr__20644 = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app));
return (fexpr__20644.cljs$core$IFn$_invoke$arity$1 ? fexpr__20644.cljs$core$IFn$_invoke$arity$1(G__20645) : fexpr__20644.call(null,G__20645));
})());
var attrs20643 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,cljs.core.map.cljs$core$IFn$_invoke$arity$2(prais2.map_data.hospital_item,rows));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"ul",((cljs.core.map_QMARK_(attrs20643))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["h-nav","col-sm","6","col-md-8"], null)], null),attrs20643], 0))):({"className": "h-nav col-sm 6 col-md-8"})),((cljs.core.map_QMARK_(attrs20643))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20643)], null)));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-list");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20646__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20646 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20647__i = 0, G__20647__a = new Array(arguments.length -  0);
while (G__20647__i < G__20647__a.length) {G__20647__a[G__20647__i] = arguments[G__20647__i + 0]; ++G__20647__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20647__a,0,null);
} 
return G__20646__delegate.call(this,args__14302__auto__);};
G__20646.cljs$lang$maxFixedArity = 0;
G__20646.cljs$lang$applyTo = (function (arglist__20648){
var args__14302__auto__ = cljs.core.seq(arglist__20648);
return G__20646__delegate(args__14302__auto__);
});
G__20646.cljs$core$IFn$_invoke$arity$variadic = G__20646__delegate;
return G__20646;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.map_data.render_map_data = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("div",null,React.createElement("section",({"className": "col-sm-offset-1 col-sm-10"}),React.createElement("div",({"className": "row"}),(function (){var attrs20654 = (prais2.data.datasource_title.cljs$core$IFn$_invoke$arity$1 ? prais2.data.datasource_title.cljs$core$IFn$_invoke$arity$1("Data for ") : prais2.data.datasource_title.call(null,"Data for "));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20654))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-9"], null)], null),attrs20654], 0))):({"className": "col-sm-9"})),((cljs.core.map_QMARK_(attrs20654))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20654)], null)));
})(),(function (){var attrs20655 = (prais2.data.datasource_dropdown.cljs$core$IFn$_invoke$arity$1 ? prais2.data.datasource_dropdown.cljs$core$IFn$_invoke$arity$1(prais2.core.event_bus) : prais2.data.datasource_dropdown.call(null,prais2.core.event_bus));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20655))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-3"], null)], null),attrs20655], 0))):({"className": "col-sm-3"})),((cljs.core.map_QMARK_(attrs20655))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20655)], null)));
})()),React.createElement("div",({"className": "row"}),React.createElement("p",({"className": "col-sm-9"}),"Choose a hospital from the list or the map to see its data. "))),(((cljs.core.cst$kw$map_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app)) == null))?(function (){var attrs20656 = (prais2.map_data.hospital_list.cljs$core$IFn$_invoke$arity$0 ? prais2.map_data.hospital_list.cljs$core$IFn$_invoke$arity$0() : prais2.map_data.hospital_list.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20656))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6","col-md-offset-1","col-md-7"], null)], null),attrs20656], 0))):({"className": "col-sm-6 col-md-offset-1 col-md-7"})),((cljs.core.map_QMARK_(attrs20656))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20656)], null)));
})():React.createElement("div",({"className": "col-sm-6 col-md-offset-1 col-md-7"}),React.createElement("div",({"className": "clearfix"}),React.createElement("button",({"type": "button", "onClick": (function (p1__20649_SHARP_){
return prais2.core.click__GT_event_bus(p1__20649_SHARP_,cljs.core.cst$kw$reset_DASH_map_DASH_to_DASH_home,null,null);
}), "onTouchStart": (function (p1__20650_SHARP_){
return prais2.core.click__GT_event_bus(p1__20650_SHARP_,cljs.core.cst$kw$reset_DASH_map_DASH_to_DASH_home,null,null);
}), "tabIndex": (0), "className": "btn btn-primary pull-left"}),React.createElement("i",({"className": "fa fa-chevron-left"}))," Back")),sablono.interpreter.interpret((function (){var G__20659 = cljs.core.cst$kw$map_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app));
var G__20660 = null;
return (prais2.data.hospital_detail.cljs$core$IFn$_invoke$arity$2 ? prais2.data.hospital_detail.cljs$core$IFn$_invoke$arity$2(G__20659,G__20660) : prais2.data.hospital_detail.call(null,G__20659,G__20660));
})()))),(function (){var attrs20651 = (prais2.open_layers_map.hospitals.cljs$core$IFn$_invoke$arity$0 ? prais2.open_layers_map.hospitals.cljs$core$IFn$_invoke$arity$0() : prais2.open_layers_map.hospitals.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20651))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hospital-map","col-sm-6","col-md-4","col-xs-12"], null)], null),attrs20651], 0))):({"className": "hospital-map col-sm-6 col-md-4 col-xs-12"})),((cljs.core.map_QMARK_(attrs20651))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20651)], null)));
})());
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title("Choose a hospital"),rum.core.reactive], null)),"render-map-data");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20661__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20661 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20662__i = 0, G__20662__a = new Array(arguments.length -  0);
while (G__20662__i < G__20662__a.length) {G__20662__a[G__20662__i] = arguments[G__20662__i + 0]; ++G__20662__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20662__a,0,null);
} 
return G__20661__delegate.call(this,args__14302__auto__);};
G__20661.cljs$lang$maxFixedArity = 0;
G__20661.cljs$lang$applyTo = (function (arglist__20663){
var args__14302__auto__ = cljs.core.seq(arglist__20663);
return G__20661__delegate(args__14302__auto__);
});
G__20661.cljs$core$IFn$_invoke$arity$variadic = G__20661__delegate;
return G__20661;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
prais2.map_data.px = (function prais2$map_data$px(pixels){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pixels),"px"].join('');
});
