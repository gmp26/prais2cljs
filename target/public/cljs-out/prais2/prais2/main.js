// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('prais2.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('prais2.utils');
goog.require('prais2.core');
goog.require('prais2.data');
goog.require('prais2.open_layers_map');
goog.require('prais2.chrome');
goog.require('prais2.intro');
goog.require('prais2.home');
goog.require('prais2.map_data');
goog.require('prais2.faqs');
goog.require('prais2.components.video_player');
goog.require('prais2.content');
cljs.core.enable_console_print_BANG_();
/**
 * Return the first matching DOM element selected by the CSS selector. 
 */
prais2.main.select = (function prais2$main$select(selector){
return document.querySelector(selector);
});
/**
 * 
 */
prais2.main.debug = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("div",null,(function (){var attrs20666 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs20666))?sablono.interpreter.attributes(attrs20666):null),((cljs.core.map_QMARK_(attrs20666))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20666)], null)));
})());
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"debug");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20667__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20667 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20668__i = 0, G__20668__a = new Array(arguments.length -  0);
while (G__20668__i < G__20668__a.length) {G__20668__a[G__20668__i] = arguments[G__20668__i + 0]; ++G__20668__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20668__a,0,null);
} 
return G__20667__delegate.call(this,args__14302__auto__);};
G__20667.cljs$lang$maxFixedArity = 0;
G__20667.cljs$lang$applyTo = (function (arglist__20669){
var args__14302__auto__ = cljs.core.seq(arglist__20669);
return G__20667__delegate(args__14302__auto__);
});
G__20667.cljs$core$IFn$_invoke$arity$variadic = G__20667__delegate;
return G__20667;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.main.para = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (text){
var attrs20670 = text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs20670))?sablono.interpreter.attributes(attrs20670):null),((cljs.core.map_QMARK_(attrs20670))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20670)], null)));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"para");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20671__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20671 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20672__i = 0, G__20672__a = new Array(arguments.length -  0);
while (G__20672__i < G__20672__a.length) {G__20672__a[G__20672__i] = arguments[G__20672__i + 0]; ++G__20672__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20672__a,0,null);
} 
return G__20671__delegate.call(this,args__14302__auto__);};
G__20671.cljs$lang$maxFixedArity = 0;
G__20671.cljs$lang$applyTo = (function (arglist__20673){
var args__14302__auto__ = cljs.core.seq(arglist__20673);
return G__20671__delegate(args__14302__auto__);
});
G__20671.cljs$core$IFn$_invoke$arity$variadic = G__20671__delegate;
return G__20671;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.main.render_404 = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("h1",null,"Page not found. ",(function (){var attrs20674 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("home");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20674))?sablono.interpreter.attributes(attrs20674):null),((cljs.core.map_QMARK_(attrs20674))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Try the home page."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20674),"Try the home page."], null)));
})());
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"render-404");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20675__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20675 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20676__i = 0, G__20676__a = new Array(arguments.length -  0);
while (G__20676__i < G__20676__a.length) {G__20676__a[G__20676__i] = arguments[G__20676__i + 0]; ++G__20676__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20676__a,0,null);
} 
return G__20675__delegate.call(this,args__14302__auto__);};
G__20675.cljs$lang$maxFixedArity = 0;
G__20675.cljs$lang$applyTo = (function (arglist__20677){
var args__14302__auto__ = cljs.core.seq(arglist__20677);
return G__20675__delegate(args__14302__auto__);
});
G__20675.cljs$core$IFn$_invoke$arity$variadic = G__20675__delegate;
return G__20675;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
prais2.main.active_QMARK_ = (function prais2$main$active_QMARK_(section){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(prais2.core.app)),section)){
return "active";
} else {
return null;
}
});
/**
 * 
 */
prais2.main.render_data_tabs = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "col-sm-offset-1 col-sm-10"}),React.createElement("h1",({"key": (1)}),"Explore the data"),React.createElement("p",({"key": (2)}),"In this section you can explore the overall hospital survival statistics published by the National\n                 Congenital Heart Disease Audit (",(function (){var attrs20684 = prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20684))?sablono.interpreter.attributes(attrs20684):null),((cljs.core.map_QMARK_(attrs20684))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20684),"NCHDA"], null)));
})(),").\n                 The data covers all hospitals in the UK and Ireland that performed heart surgery in children\n                 (0-16 years old). NCHDA update the data annually and each report covers a 3 year period."),React.createElement("p",({"key": (3)}),"Data on this site comes from the NCHDA annual reports, all of which can be ",(function (){var attrs20685 = prais2.core.href("https://nicor4.nicor.org.uk/chd/an_paeds.nsf/vwContent/Analysis Documents?Opendocument",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20685))?sablono.interpreter.attributes(attrs20685):null),((cljs.core.map_QMARK_(attrs20685))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["downloaded from the NCHDA website."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20685),"downloaded from the NCHDA website."], null)));
})()),React.createElement("ul",({"key": (4), "role": "tablist", "className": "nav nav-pills"}),React.createElement("li",({"key": (1), "role": "presentation", "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.main.active_QMARK_(cljs.core.cst$kw$map)], null))}),(function (){var attrs20686 = prais2.core.href.cljs$core$IFn$_invoke$arity$variadic("data/map",cljs.core.cst$kw$aria_DASH_controls,"mapped-data",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$role,"tab",cljs.core.cst$kw$on_DASH_click,(function (p1__20678_SHARP_){
return prais2.core.click__GT_event_bus(p1__20678_SHARP_,cljs.core.cst$kw$data,cljs.core.cst$kw$map,"data/map");
})], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20686))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"map-tab"], null),attrs20686], 0))):({"id": "map-tab"})),((cljs.core.map_QMARK_(attrs20686))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-map-marker"}))," Choose a hospital"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20686),React.createElement("i",({"className": "fa fa-map-marker"}))," Choose a hospital"], null)));
})()),React.createElement("li",({"key": (2), "role": "presentation", "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.main.active_QMARK_(cljs.core.cst$kw$table)], null))}),(function (){var attrs20691 = prais2.core.href.cljs$core$IFn$_invoke$arity$variadic("data/table",cljs.core.cst$kw$aria_DASH_controls,"data-table",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$role,"tab",cljs.core.cst$kw$on_DASH_click,(function (p1__20679_SHARP_){
return prais2.core.click__GT_event_bus(p1__20679_SHARP_,cljs.core.cst$kw$data,cljs.core.cst$kw$table,"data/table");
})], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20691))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"table-tab"], null),attrs20691], 0))):({"id": "table-tab"})),((cljs.core.map_QMARK_(attrs20691))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-table"}))," All hospitals"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20691),React.createElement("i",({"className": "fa fa-table"}))," All hospitals"], null)));
})()),React.createElement("li",({"key": (3), "role": "presentation", "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.main.active_QMARK_(cljs.core.cst$kw$animation)], null))}),(function (){var attrs20696 = prais2.core.href.cljs$core$IFn$_invoke$arity$variadic("data/animation",cljs.core.cst$kw$aria_DASH_controls,"mapped-data",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$role,"tab",cljs.core.cst$kw$on_DASH_click,(function (p1__20680_SHARP_){
return prais2.core.click__GT_event_bus(p1__20680_SHARP_,cljs.core.cst$kw$data,cljs.core.cst$kw$animation,"data/animation");
})], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20696))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"map-tab"], null),attrs20696], 0))):({"id": "map-tab"})),((cljs.core.map_QMARK_(attrs20696))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-video-camera"}))," Two minute video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20696),React.createElement("i",({"className": "fa fa-video-camera"}))," Two minute video"], null)));
})())),sablono.interpreter.interpret(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$animation,cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$post_DASH_tab,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(5)], null),"Use the drop down box to change reporting periods. You can watch our ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("data/animation",cljs.core.cst$kw$on_DASH_click,(function (p1__20681_SHARP_){
return prais2.core.click__GT_event_bus(p1__20681_SHARP_,cljs.core.cst$kw$data,cljs.core.cst$kw$animation,"data/animation");
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_video_DASH_camera], null)," two minute video"], null)," which explains how we present the statistics and how to interpret them. Parents who helped us\n       develop the website found it a useful guide to interpreting the data. "], null):null))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.update_title("Choose a hospital")], null)),"render-data-tabs");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20701__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20701 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20702__i = 0, G__20702__a = new Array(arguments.length -  0);
while (G__20702__i < G__20702__a.length) {G__20702__a[G__20702__i] = arguments[G__20702__i + 0]; ++G__20702__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20702__a,0,null);
} 
return G__20701__delegate.call(this,args__14302__auto__);};
G__20701.cljs$lang$maxFixedArity = 0;
G__20701.cljs$lang$applyTo = (function (arglist__20703){
var args__14302__auto__ = cljs.core.seq(arglist__20703);
return G__20701__delegate(args__14302__auto__);
});
G__20701.cljs$core$IFn$_invoke$arity$variadic = G__20701__delegate;
return G__20701;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.main.render_video1 = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
var attrs20704 = (function (){var G__20705 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$video_DASH_id,"video1",cljs.core.cst$kw$src,"/assets/video01.mp4",cljs.core.cst$kw$controls,true,cljs.core.cst$kw$preload,"",cljs.core.cst$kw$poster,"/assets/video-1-thumbnail.png",cljs.core.cst$kw$track_DASH_src,"/assets/video01.vtt"], null);
return (prais2.components.video_player.video_js.cljs$core$IFn$_invoke$arity$1 ? prais2.components.video_player.video_js.cljs$core$IFn$_invoke$arity$1(G__20705) : prais2.components.video_player.video_js.call(null,G__20705));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"section",((cljs.core.map_QMARK_(attrs20704))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-offset-1","col-sm-10","col-md-offset-1","col-md-6"], null)], null),attrs20704], 0))):({"className": "col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-6"})),((cljs.core.map_QMARK_(attrs20704))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20704)], null)));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title("Two minute video")], null)),"render-video1");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20706__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20706 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20707__i = 0, G__20707__a = new Array(arguments.length -  0);
while (G__20707__i < G__20707__a.length) {G__20707__a[G__20707__i] = arguments[G__20707__i + 0]; ++G__20707__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20707__a,0,null);
} 
return G__20706__delegate.call(this,args__14302__auto__);};
G__20706.cljs$lang$maxFixedArity = 0;
G__20706.cljs$lang$applyTo = (function (arglist__20708){
var args__14302__auto__ = cljs.core.seq(arglist__20708);
return G__20706__delegate(args__14302__auto__);
});
G__20706.cljs$core$IFn$_invoke$arity$variadic = G__20706__delegate;
return G__20706;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.main.render_data_tab_panes = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (data){
return React.createElement("row",({"className": "tab-content"}),React.createElement("div",({"key": (1), "id": "mapped-data", "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-pane","col-sm-12",prais2.main.active_QMARK_(cljs.core.cst$kw$map)], null))}),sablono.interpreter.interpret((cljs.core.truth_(prais2.main.active_QMARK_(cljs.core.cst$kw$map))?(prais2.map_data.render_map_data.cljs$core$IFn$_invoke$arity$0 ? prais2.map_data.render_map_data.cljs$core$IFn$_invoke$arity$0() : prais2.map_data.render_map_data.call(null)):null))),React.createElement("div",({"key": (2), "id": "data-table", "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-pane","col-sm-12",prais2.main.active_QMARK_(cljs.core.cst$kw$table)], null))}),sablono.interpreter.interpret((prais2.data.modal.cljs$core$IFn$_invoke$arity$0 ? prais2.data.modal.cljs$core$IFn$_invoke$arity$0() : prais2.data.modal.call(null))),sablono.interpreter.interpret((cljs.core.truth_(prais2.main.active_QMARK_(cljs.core.cst$kw$table))?(prais2.data.list_tab.cljs$core$IFn$_invoke$arity$3 ? prais2.data.list_tab.cljs$core$IFn$_invoke$arity$3(prais2.core.app,data,prais2.core.event_bus) : prais2.data.list_tab.call(null,prais2.core.app,data,prais2.core.event_bus)):null))),React.createElement("div",({"key": (3), "id": "mapped-data", "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-pane","col-sm-12",prais2.main.active_QMARK_(cljs.core.cst$kw$animation)], null))}),sablono.interpreter.interpret((cljs.core.truth_(prais2.main.active_QMARK_(cljs.core.cst$kw$animation))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$col_DASH_sm_DASH_offset_DASH_1$col_DASH_sm_DASH_10,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(2)], null),"Parents who helped us develop the website found this video useful for interpreting the data.\n                    If you want to know more about how the predicted range of survival is actually calculated, please\n                    watch our ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_video_DASH_camera], null)," second video"], null)," in the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$2("faqs",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3)], null)),"Everything Else"], null)," section. "], null)], null):null)),sablono.interpreter.interpret((cljs.core.truth_(prais2.main.active_QMARK_(cljs.core.cst$kw$animation))?(prais2.main.render_video1.cljs$core$IFn$_invoke$arity$0 ? prais2.main.render_video1.cljs$core$IFn$_invoke$arity$0() : prais2.main.render_video1.call(null)):null))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"render-data-tab-panes");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20709__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20709 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20710__i = 0, G__20710__a = new Array(arguments.length -  0);
while (G__20710__i < G__20710__a.length) {G__20710__a[G__20710__i] = arguments[G__20710__i + 0]; ++G__20710__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20710__a,0,null);
} 
return G__20709__delegate.call(this,args__14302__auto__);};
G__20709.cljs$lang$maxFixedArity = 0;
G__20709.cljs$lang$applyTo = (function (arglist__20711){
var args__14302__auto__ = cljs.core.seq(arglist__20711);
return G__20709__delegate(args__14302__auto__);
});
G__20709.cljs$core$IFn$_invoke$arity$variadic = G__20709__delegate;
return G__20709;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.main.render_data = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
var app = rum.core.react(prais2.core.app);
var data = (function (){var fexpr__20713 = prais2.data.table_data(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(app));
return (fexpr__20713.cljs$core$IFn$_invoke$arity$0 ? fexpr__20713.cljs$core$IFn$_invoke$arity$0() : fexpr__20713.call(null));
})();
var attrs20712 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.main.render_data_tabs.cljs$core$IFn$_invoke$arity$0 ? prais2.main.render_data_tabs.cljs$core$IFn$_invoke$arity$0() : prais2.main.render_data_tabs.call(null)),(prais2.main.render_data_tab_panes.cljs$core$IFn$_invoke$arity$1 ? prais2.main.render_data_tab_panes.cljs$core$IFn$_invoke$arity$1(data) : prais2.main.render_data_tab_panes.call(null,data))], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20712))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["container-fluid","main-content"], null)], null),attrs20712], 0))):({"className": "container-fluid main-content"})),((cljs.core.map_QMARK_(attrs20712))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20712)], null)));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$2("DATA>",false)], null)),"render-data");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20714__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20714 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20715__i = 0, G__20715__a = new Array(arguments.length -  0);
while (G__20715__i < G__20715__a.length) {G__20715__a[G__20715__i] = arguments[G__20715__i + 0]; ++G__20715__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20715__a,0,null);
} 
return G__20714__delegate.call(this,args__14302__auto__);};
G__20714.cljs$lang$maxFixedArity = 0;
G__20714.cljs$lang$applyTo = (function (arglist__20716){
var args__14302__auto__ = cljs.core.seq(arglist__20716);
return G__20714__delegate(args__14302__auto__);
});
G__20714.cljs$core$IFn$_invoke$arity$variadic = G__20714__delegate;
return G__20714;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
prais2.main.deselect_all = (function prais2$main$deselect_all(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(prais2.core.app,cljs.core.assoc,cljs.core.cst$kw$map_DASH_h_DASH_code,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$selected_DASH_h_DASH_code,null], 0));
});
prais2.main.scroll_to_top = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_update,(function (state){
scrollTo((0),(0));

return state;
})], null);
/**
 * 
 */
prais2.main.page_choice = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (page,section){
var attrs20717 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.cst$kw$home))?(function (){
prais2.main.deselect_all();

return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.chrome.header.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.header.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.header.call(null)),(prais2.home.render_home.cljs$core$IFn$_invoke$arity$0 ? prais2.home.render_home.cljs$core$IFn$_invoke$arity$0() : prais2.home.render_home.call(null)),(prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.footer.call(null))], null));
})()
:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.cst$kw$intro))?(function (){
prais2.main.deselect_all();

return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.chrome.header.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.header.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.header.call(null)),(prais2.intro.render_intro.cljs$core$IFn$_invoke$arity$0 ? prais2.intro.render_intro.cljs$core$IFn$_invoke$arity$0() : prais2.intro.render_intro.call(null)),(prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.footer.call(null))], null));
})()
:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.cst$kw$data))?(function (){
prais2.main.deselect_all();

return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.chrome.header.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.header.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.header.call(null)),(prais2.main.render_data.cljs$core$IFn$_invoke$arity$0 ? prais2.main.render_data.cljs$core$IFn$_invoke$arity$0() : prais2.main.render_data.call(null)),(prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.footer.call(null))], null));
})()
:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.cst$kw$faqs))?(function (){
prais2.main.deselect_all();

return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.chrome.header.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.header.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.header.call(null)),(prais2.faqs.render_faqs.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faqs.cljs$core$IFn$_invoke$arity$1(section) : prais2.faqs.render_faqs.call(null,section)),(prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.footer.call(null))], null));
})()
:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.cst$kw$faq))?(function (){
prais2.main.deselect_all();

return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.chrome.header.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.header.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.header.call(null)),(function (){var G__20718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null);
return (prais2.faqs.render_faqs.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faqs.cljs$core$IFn$_invoke$arity$1(G__20718) : prais2.faqs.render_faqs.call(null,G__20718));
})(),(prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.footer.call(null))], null));
})()
:(function (){
(prais2.chrome.header.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.header.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.header.call(null));

(prais2.main.render_404.cljs$core$IFn$_invoke$arity$0 ? prais2.main.render_404.cljs$core$IFn$_invoke$arity$0() : prais2.main.render_404.call(null));

return (prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.footer.call(null));
})()

)))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20717))?sablono.interpreter.attributes(attrs20717):null),((cljs.core.map_QMARK_(attrs20717))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20717)], null)));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,prais2.main.scroll_to_top], null)),"page-choice");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20719__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20719 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20720__i = 0, G__20720__a = new Array(arguments.length -  0);
while (G__20720__i < G__20720__a.length) {G__20720__a[G__20720__i] = arguments[G__20720__i + 0]; ++G__20720__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20720__a,0,null);
} 
return G__20719__delegate.call(this,args__14302__auto__);};
G__20719.cljs$lang$maxFixedArity = 0;
G__20719.cljs$lang$applyTo = (function (arglist__20721){
var args__14302__auto__ = cljs.core.seq(arglist__20721);
return G__20719__delegate(args__14302__auto__);
});
G__20719.cljs$core$IFn$_invoke$arity$variadic = G__20719__delegate;
return G__20719;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.main.render_page = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
var map__20722 = rum.core.react(prais2.core.app);
var map__20722__$1 = ((((!((map__20722 == null)))?(((((map__20722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20722):map__20722);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722__$1,cljs.core.cst$kw$page);
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722__$1,cljs.core.cst$kw$section);
return sablono.interpreter.interpret((prais2.main.page_choice.cljs$core$IFn$_invoke$arity$2 ? prais2.main.page_choice.cljs$core$IFn$_invoke$arity$2(page,section) : prais2.main.page_choice.call(null,page,section)));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"render-page");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20724__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20724 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20725__i = 0, G__20725__a = new Array(arguments.length -  0);
while (G__20725__i < G__20725__a.length) {G__20725__a[G__20725__i] = arguments[G__20725__i + 0]; ++G__20725__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20725__a,0,null);
} 
return G__20724__delegate.call(this,args__14302__auto__);};
G__20724.cljs$lang$maxFixedArity = 0;
G__20724.cljs$lang$applyTo = (function (arglist__20726){
var args__14302__auto__ = cljs.core.seq(arglist__20726);
return G__20724__delegate(args__14302__auto__);
});
G__20724.cljs$core$IFn$_invoke$arity$variadic = G__20724__delegate;
return G__20724;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.main.app_container = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return sablono.interpreter.interpret((prais2.main.render_page.cljs$core$IFn$_invoke$arity$0 ? prais2.main.render_page.cljs$core$IFn$_invoke$arity$0() : prais2.main.render_page.call(null)));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.bs_popover,prais2.core.bs_tooltip], null)),"app-container");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20727__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20727 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20728__i = 0, G__20728__a = new Array(arguments.length -  0);
while (G__20728__i < G__20728__a.length) {G__20728__a[G__20728__i] = arguments[G__20728__i + 0]; ++G__20728__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20728__a,0,null);
} 
return G__20727__delegate.call(this,args__14302__auto__);};
G__20727.cljs$lang$maxFixedArity = 0;
G__20727.cljs$lang$applyTo = (function (arglist__20729){
var args__14302__auto__ = cljs.core.seq(arglist__20729);
return G__20727__delegate(args__14302__auto__);
});
G__20727.cljs$core$IFn$_invoke$arity$variadic = G__20727__delegate;
return G__20727;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
var temp__5751__auto___20730 = prais2.core.el("app");
if(cljs.core.truth_(temp__5751__auto___20730)){
var mount_point_20731 = temp__5751__auto___20730;
rum.core.mount((prais2.main.app_container.cljs$core$IFn$_invoke$arity$0 ? prais2.main.app_container.cljs$core$IFn$_invoke$arity$0() : prais2.main.app_container.call(null)),mount_point_20731);

prais2.content.get_hospital_data();
} else {
}
/**
 * listen on a published event feed, handling events with the given key
 */
prais2.main.dispatch = (function prais2$main$dispatch(event_feed,event_key,handle){
var in_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(event_feed,event_key,in_chan);

var c__16485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto__,in_chan){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto__,in_chan){
return (function (state_20751){
var state_val_20752 = (state_20751[(1)]);
if((state_val_20752 === (1))){
var state_20751__$1 = state_20751;
var statearr_20753_20766 = state_20751__$1;
(statearr_20753_20766[(2)] = null);

(statearr_20753_20766[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20752 === (2))){
var state_20751__$1 = state_20751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20751__$1,(4),in_chan);
} else {
if((state_val_20752 === (3))){
var inst_20749 = (state_20751[(2)]);
var state_20751__$1 = state_20751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20751__$1,inst_20749);
} else {
if((state_val_20752 === (4))){
var inst_20737 = (state_20751[(7)]);
var inst_20737__$1 = (state_20751[(2)]);
var inst_20738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20737__$1,(0),null);
var inst_20739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20737__$1,(1),null);
var inst_20740 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20738,cljs.core.cst$kw$reloading);
var state_20751__$1 = (function (){var statearr_20754 = state_20751;
(statearr_20754[(8)] = inst_20739);

(statearr_20754[(7)] = inst_20737__$1);

return statearr_20754;
})();
if(inst_20740){
var statearr_20755_20767 = state_20751__$1;
(statearr_20755_20767[(1)] = (5));

} else {
var statearr_20756_20768 = state_20751__$1;
(statearr_20756_20768[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20752 === (5))){
var inst_20742 = cljs.core.async.close_BANG_(in_chan);
var state_20751__$1 = state_20751;
var statearr_20757_20769 = state_20751__$1;
(statearr_20757_20769[(2)] = inst_20742);

(statearr_20757_20769[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20752 === (6))){
var inst_20737 = (state_20751[(7)]);
var inst_20744 = (handle.cljs$core$IFn$_invoke$arity$1 ? handle.cljs$core$IFn$_invoke$arity$1(inst_20737) : handle.call(null,inst_20737));
var state_20751__$1 = (function (){var statearr_20758 = state_20751;
(statearr_20758[(9)] = inst_20744);

return statearr_20758;
})();
var statearr_20759_20770 = state_20751__$1;
(statearr_20759_20770[(2)] = null);

(statearr_20759_20770[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20752 === (7))){
var inst_20747 = (state_20751[(2)]);
var state_20751__$1 = state_20751;
var statearr_20760_20771 = state_20751__$1;
(statearr_20760_20771[(2)] = inst_20747);

(statearr_20760_20771[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__16485__auto__,in_chan))
;
return ((function (switch__16410__auto__,c__16485__auto__,in_chan){
return (function() {
var prais2$main$dispatch_$_state_machine__16411__auto__ = null;
var prais2$main$dispatch_$_state_machine__16411__auto____0 = (function (){
var statearr_20761 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20761[(0)] = prais2$main$dispatch_$_state_machine__16411__auto__);

(statearr_20761[(1)] = (1));

return statearr_20761;
});
var prais2$main$dispatch_$_state_machine__16411__auto____1 = (function (state_20751){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_20751);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e20762){var ex__16414__auto__ = e20762;
var statearr_20763_20772 = state_20751;
(statearr_20763_20772[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_20751[(4)]))){
var statearr_20764_20773 = state_20751;
(statearr_20764_20773[(1)] = cljs.core.first((state_20751[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__20774 = state_20751;
state_20751 = G__20774;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
prais2$main$dispatch_$_state_machine__16411__auto__ = function(state_20751){
switch(arguments.length){
case 0:
return prais2$main$dispatch_$_state_machine__16411__auto____0.call(this);
case 1:
return prais2$main$dispatch_$_state_machine__16411__auto____1.call(this,state_20751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$main$dispatch_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$main$dispatch_$_state_machine__16411__auto____0;
prais2$main$dispatch_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$main$dispatch_$_state_machine__16411__auto____1;
return prais2$main$dispatch_$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto__,in_chan))
})();
var state__16487__auto__ = (function (){var statearr_20765 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_20765[(6)] = c__16485__auto__);

return statearr_20765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto__,in_chan))
);

return c__16485__auto__;
});
prais2.main.zoom_to_hospital = (function prais2$main$zoom_to_hospital(p__20776){
var vec__20777 = p__20776;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20777,(0),null);
var h_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20777,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20777,(2),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__20777,_,h_code,___$1){
return (function (p1__20775_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20775_SHARP_,cljs.core.cst$kw$map_DASH_h_DASH_code,h_code);
});})(vec__20777,_,h_code,___$1))
);

return prais2.open_layers_map.zoom_to_feature();
});
/**
 * centralised dispatch of all events
 */
prais2.main.dispatch_central = (function prais2$main$dispatch_central(){
prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$reloading,(function (_){
return null;
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$slider_DASH_axis_DASH_value,(function (p__20795){
var vec__20796 = p__20795;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20796,(0),null);
var slider_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20796,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__20796,_,slider_value){
return (function (p1__20780_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20780_SHARP_,cljs.core.cst$kw$slider_DASH_axis_DASH_value,slider_value);
});})(vec__20796,_,slider_value))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value,(function (p__20799){
var vec__20800 = p__20799;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20800,(0),null);
var slider_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20800,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__20800,_,slider_value){
return (function (p1__20781_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20781_SHARP_,cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value,slider_value);
});})(vec__20800,_,slider_value))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$sort_DASH_toggle,(function (p__20803){
var vec__20804 = p__20803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20804,(0),null);
var column_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20804,(1),null);
return prais2.data.handle_sort(prais2.core.app,column_key);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$info_DASH_clicked,(function (p__20807){
var vec__20808 = p__20807;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20808,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20808,(1),null);
return null;
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$change_DASH_colour_DASH_map,(function (p__20811){
var vec__20812 = p__20811;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20812,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20812,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__20812,_,value){
return (function (p1__20782_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20782_SHARP_,cljs.core.cst$kw$theme,(value | (0)));
});})(vec__20812,_,value))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$change_DASH_chart_DASH_state,(function (p__20815){
var vec__20816 = p__20815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20816,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20816,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__20816,_,value){
return (function (p1__20783_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20783_SHARP_,cljs.core.cst$kw$chart_DASH_state,(value | (0)));
});})(vec__20816,_,value))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$open_DASH_hospital_DASH_modal,(function (p__20819){
var vec__20820 = p__20819;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20820,(0),null);
var h_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20820,(1),null);
return prais2.data.open_hospital_modal(h_code);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$close_DASH_hospital_DASH_modal,(function (_){
return prais2.data.close_hospital_modal();
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$morph_DASH_full_DASH_range,(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,(function (p1__20784_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20784_SHARP_,cljs.core.cst$kw$slider_DASH_axis_DASH_value,(0));
}));
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$change_DASH_datasource,(function (p__20823){
var vec__20824 = p__20823;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20824,(0),null);
var new_source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20824,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__20824,_,new_source){
return (function (p1__20785_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20785_SHARP_,cljs.core.cst$kw$datasource,new_source);
});})(vec__20824,_,new_source))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$click_DASH_on_DASH_map_DASH_marker,prais2.main.zoom_to_hospital);

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$click_DASH_on_DASH_map_DASH_menu_DASH_item,prais2.main.zoom_to_hospital);

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$just_DASH_london,(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,(function (p1__20786_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20786_SHARP_,cljs.core.cst$kw$map_DASH_h_DASH_code,null);
}));

return prais2.open_layers_map.go_london();
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$reset_DASH_map_DASH_to_DASH_home,(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,(function (p1__20787_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20787_SHARP_,cljs.core.cst$kw$map_DASH_h_DASH_code,null);
}));

return prais2.open_layers_map.go_home();
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$home,(function (p__20827){
var vec__20828 = p__20827;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20828,(0),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20828,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__20828,_,section){
return (function (p1__20788_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__20788_SHARP_,cljs.core.cst$kw$page,cljs.core.cst$kw$home,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,section], 0));
});})(vec__20828,_,section))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$intro,(function (p__20831){
var vec__20832 = p__20831;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20832,(0),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20832,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__20832,_,section){
return (function (p1__20789_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__20789_SHARP_,cljs.core.cst$kw$page,cljs.core.cst$kw$intro,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,section], 0));
});})(vec__20832,_,section))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$data,(function (p__20835){
var vec__20836 = p__20835;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20836,(0),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20836,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__20836,_,section){
return (function (p1__20790_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__20790_SHARP_,cljs.core.cst$kw$page,cljs.core.cst$kw$data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,section,cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value,(1)], 0));
});})(vec__20836,_,section))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$faqs,(function (p__20839){
var vec__20840 = p__20839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20840,(0),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20840,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__20840,_,section){
return (function (p1__20791_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__20791_SHARP_,cljs.core.cst$kw$page,cljs.core.cst$kw$faqs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,section], 0));
});})(vec__20840,_,section))
);
}));

return prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$faq,(function (p__20843){
var vec__20844 = p__20843;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20844,(0),null);
var faq_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20844,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__20844,_,faq_ref){
return (function (p1__20792_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__20792_SHARP_,cljs.core.cst$kw$page,cljs.core.cst$kw$faqs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,faq_ref], 0));
});})(vec__20844,_,faq_ref))
);
}));
});
prais2.main.dispatch_central();
prais2.main.on_js_reload = (function prais2$main$on_js_reload(){
cljs.core.enable_console_print_BANG_();

console.log("reloading");

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reloaded"], 0));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reloading,null], null));
});
