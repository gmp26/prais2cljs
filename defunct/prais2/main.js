// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('prais2.main');
goog.require('cljs.core');
goog.require('prais2.faqs');
goog.require('prais2.open_layers_map');
goog.require('prais2.data');
goog.require('prais2.home');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('prais2.components.video_player');
goog.require('prais2.core');
goog.require('prais2.chrome');
goog.require('prais2.logger');
goog.require('prais2.utils');
goog.require('prais2.intro');
goog.require('prais2.map_data');
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
prais2.main.debug = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17701 = "div";
var G__17702 = null;
var G__17703 = (function (){var attrs17700 = [cljs.core.str(rum.core.react(prais2.core.app))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs17700))?sablono.interpreter.attributes(attrs17700):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17700))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17700)], null))));
})();
return React.createElement(G__17701,G__17702,G__17703);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"debug");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17704__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17704 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17705__i = 0, G__17705__a = new Array(arguments.length -  0);
while (G__17705__i < G__17705__a.length) {G__17705__a[G__17705__i] = arguments[G__17705__i + 0]; ++G__17705__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17705__a,0);
} 
return G__17704__delegate.call(this,args__8012__auto__);};
G__17704.cljs$lang$maxFixedArity = 0;
G__17704.cljs$lang$applyTo = (function (arglist__17706){
var args__8012__auto__ = cljs.core.seq(arglist__17706);
return G__17704__delegate(args__8012__auto__);
});
G__17704.cljs$core$IFn$_invoke$arity$variadic = G__17704__delegate;
return G__17704;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.main.para = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (text){
var attrs17707 = text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs17707))?sablono.interpreter.attributes(attrs17707):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17707))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17707)], null))));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"para");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17708__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17708 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17709__i = 0, G__17709__a = new Array(arguments.length -  0);
while (G__17709__i < G__17709__a.length) {G__17709__a[G__17709__i] = arguments[G__17709__i + 0]; ++G__17709__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17709__a,0);
} 
return G__17708__delegate.call(this,args__8012__auto__);};
G__17708.cljs$lang$maxFixedArity = 0;
G__17708.cljs$lang$applyTo = (function (arglist__17710){
var args__8012__auto__ = cljs.core.seq(arglist__17710);
return G__17708__delegate(args__8012__auto__);
});
G__17708.cljs$core$IFn$_invoke$arity$variadic = G__17708__delegate;
return G__17708;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.main.render_404 = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17712 = "h1";
var G__17713 = null;
var G__17714 = "Page not found. ";
var G__17715 = (function (){var attrs17711 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("home");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17711))?sablono.interpreter.attributes(attrs17711):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17711))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Try the home page."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17711),"Try the home page."], null))));
})();
return React.createElement(G__17712,G__17713,G__17714,G__17715);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"render-404");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17716__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17716 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17717__i = 0, G__17717__a = new Array(arguments.length -  0);
while (G__17717__i < G__17717__a.length) {G__17717__a[G__17717__i] = arguments[G__17717__i + 0]; ++G__17717__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17717__a,0);
} 
return G__17716__delegate.call(this,args__8012__auto__);};
G__17716.cljs$lang$maxFixedArity = 0;
G__17716.cljs$lang$applyTo = (function (arglist__17718){
var args__8012__auto__ = cljs.core.seq(arglist__17718);
return G__17716__delegate(args__8012__auto__);
});
G__17716.cljs$core$IFn$_invoke$arity$variadic = G__17716__delegate;
return G__17716;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
prais2.main.active_QMARK_ = (function prais2$main$active_QMARK_(section){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.core.app) : cljs.core.deref.call(null,prais2.core.app))),section)){
return "active";
} else {
return null;
}
});
/**
 * 
 */
prais2.main.render_data_tabs = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17742 = "div";
var G__17743 = {"className": "row"};
var G__17744 = (function (){var G__17745 = "div";
var G__17746 = {"className": "col-sm-offset-1 col-sm-10"};
var G__17747 = (function (){var G__17752 = "h1";
var G__17753 = {"key": (1)};
var G__17754 = "Explore the data";
return React.createElement(G__17752,G__17753,G__17754);
})();
var G__17748 = (function (){var G__17755 = "p";
var G__17756 = {"key": (2)};
var G__17757 = "In this section you can explore the overall hospital survival statistics published by the National\n                 Congenital Heart Disease Audit (";
var G__17758 = (function (){var attrs17725 = prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17725))?sablono.interpreter.attributes(attrs17725):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17725))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17725),"NCHDA"], null))));
})();
var G__17759 = ").\n                 The data covers all hospitals in the UK and Ireland that performed heart surgery in children\n                 (0-16 years old). NCHDA update the data annually and each report covers a 3 year period.";
return React.createElement(G__17755,G__17756,G__17757,G__17758,G__17759);
})();
var G__17749 = (function (){var G__17760 = "p";
var G__17761 = {"key": (3)};
var G__17762 = "Data on this site comes from the NCHDA annual reports, all of which can be ";
var G__17763 = (function (){var attrs17726 = prais2.core.href("https://nicor4.nicor.org.uk/chd/an_paeds.nsf/vwContent/Analysis Documents?Opendocument",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17726))?sablono.interpreter.attributes(attrs17726):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17726))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["downloaded from the NCHDA website."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17726),"downloaded from the NCHDA website."], null))));
})();
return React.createElement(G__17760,G__17761,G__17762,G__17763);
})();
var G__17750 = (function (){var G__17764 = "ul";
var G__17765 = {"key": (4), "role": "tablist", "className": "nav nav-pills"};
var G__17766 = (function (){var G__17769 = "li";
var G__17770 = {"key": (1), "role": "presentation", "className": prais2.main.active_QMARK_(cljs.core.cst$kw$map)};
var G__17771 = (function (){var attrs17727 = prais2.core.href.cljs$core$IFn$_invoke$arity$variadic("data/map",cljs.core.cst$kw$aria_DASH_controls,"mapped-data",cljs.core.array_seq([cljs.core.cst$kw$role,"tab",cljs.core.cst$kw$on_DASH_click,((function (G__17769,G__17770,G__17764,G__17765,G__17745,G__17746,G__17747,G__17748,G__17749,G__17742,G__17743){
return (function (p1__17719_SHARP_){
return prais2.core.click__GT_event_bus(p1__17719_SHARP_,cljs.core.cst$kw$data,cljs.core.cst$kw$map,"data/map");
});})(G__17769,G__17770,G__17764,G__17765,G__17745,G__17746,G__17747,G__17748,G__17749,G__17742,G__17743))
], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17727))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"map-tab"], null),attrs17727], 0))):{"id": "map-tab"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17727))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17772 = "i";
var G__17773 = {"className": "fa fa-map-marker"};
return React.createElement(G__17772,G__17773);
})()," Choose a hospital"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17727),(function (){var G__17774 = "i";
var G__17775 = {"className": "fa fa-map-marker"};
return React.createElement(G__17774,G__17775);
})()," Choose a hospital"], null))));
})();
return React.createElement(G__17769,G__17770,G__17771);
})();
var G__17767 = (function (){var G__17776 = "li";
var G__17777 = {"key": (2), "role": "presentation", "className": prais2.main.active_QMARK_(cljs.core.cst$kw$table)};
var G__17778 = (function (){var attrs17732 = prais2.core.href.cljs$core$IFn$_invoke$arity$variadic("data/table",cljs.core.cst$kw$aria_DASH_controls,"data-table",cljs.core.array_seq([cljs.core.cst$kw$role,"tab",cljs.core.cst$kw$on_DASH_click,((function (G__17776,G__17777,G__17764,G__17765,G__17766,G__17745,G__17746,G__17747,G__17748,G__17749,G__17742,G__17743){
return (function (p1__17720_SHARP_){
return prais2.core.click__GT_event_bus(p1__17720_SHARP_,cljs.core.cst$kw$data,cljs.core.cst$kw$table,"data/table");
});})(G__17776,G__17777,G__17764,G__17765,G__17766,G__17745,G__17746,G__17747,G__17748,G__17749,G__17742,G__17743))
], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17732))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"table-tab"], null),attrs17732], 0))):{"id": "table-tab"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17732))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17779 = "i";
var G__17780 = {"className": "fa fa-table"};
return React.createElement(G__17779,G__17780);
})()," All hospitals"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17732),(function (){var G__17781 = "i";
var G__17782 = {"className": "fa fa-table"};
return React.createElement(G__17781,G__17782);
})()," All hospitals"], null))));
})();
return React.createElement(G__17776,G__17777,G__17778);
})();
var G__17768 = (function (){var G__17783 = "li";
var G__17784 = {"key": (3), "role": "presentation", "className": prais2.main.active_QMARK_(cljs.core.cst$kw$animation)};
var G__17785 = (function (){var attrs17737 = prais2.core.href.cljs$core$IFn$_invoke$arity$variadic("data/animation",cljs.core.cst$kw$aria_DASH_controls,"mapped-data",cljs.core.array_seq([cljs.core.cst$kw$role,"tab",cljs.core.cst$kw$on_DASH_click,((function (G__17783,G__17784,G__17764,G__17765,G__17766,G__17767,G__17745,G__17746,G__17747,G__17748,G__17749,G__17742,G__17743){
return (function (p1__17721_SHARP_){
return prais2.core.click__GT_event_bus(p1__17721_SHARP_,cljs.core.cst$kw$data,cljs.core.cst$kw$animation,"data/animation");
});})(G__17783,G__17784,G__17764,G__17765,G__17766,G__17767,G__17745,G__17746,G__17747,G__17748,G__17749,G__17742,G__17743))
], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17737))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"map-tab"], null),attrs17737], 0))):{"id": "map-tab"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17737))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17786 = "i";
var G__17787 = {"className": "fa fa-video-camera"};
return React.createElement(G__17786,G__17787);
})()," Two minute video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17737),(function (){var G__17788 = "i";
var G__17789 = {"className": "fa fa-video-camera"};
return React.createElement(G__17788,G__17789);
})()," Two minute video"], null))));
})();
return React.createElement(G__17783,G__17784,G__17785);
})();
return React.createElement(G__17764,G__17765,G__17766,G__17767,G__17768);
})();
var G__17751 = sablono.interpreter.interpret(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$animation,cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$post_DASH_tab,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(5)], null),"Use the drop down box to change reporting periods. You can watch our ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("data/animation",cljs.core.cst$kw$on_DASH_click,((function (G__17745,G__17746,G__17747,G__17748,G__17749,G__17750,G__17742,G__17743){
return (function (p1__17722_SHARP_){
return prais2.core.click__GT_event_bus(p1__17722_SHARP_,cljs.core.cst$kw$data,cljs.core.cst$kw$animation,"data/animation");
});})(G__17745,G__17746,G__17747,G__17748,G__17749,G__17750,G__17742,G__17743))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_video_DASH_camera], null)," two minute video"], null)," which explains how we present the statistics and how to interpret them. Parents who helped us\n       develop the website found it a useful guide to interpreting the data. "], null):null));
return React.createElement(G__17745,G__17746,G__17747,G__17748,G__17749,G__17750,G__17751);
})();
return React.createElement(G__17742,G__17743,G__17744);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.update_title("Choose a hospital")], null)),"render-data-tabs");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17790__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17790 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17791__i = 0, G__17791__a = new Array(arguments.length -  0);
while (G__17791__i < G__17791__a.length) {G__17791__a[G__17791__i] = arguments[G__17791__i + 0]; ++G__17791__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17791__a,0);
} 
return G__17790__delegate.call(this,args__8012__auto__);};
G__17790.cljs$lang$maxFixedArity = 0;
G__17790.cljs$lang$applyTo = (function (arglist__17792){
var args__8012__auto__ = cljs.core.seq(arglist__17792);
return G__17790__delegate(args__8012__auto__);
});
G__17790.cljs$core$IFn$_invoke$arity$variadic = G__17790__delegate;
return G__17790;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.main.render_video1 = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var attrs17793 = (function (){var G__17794 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$video_DASH_id,"video1",cljs.core.cst$kw$src,"/assets/video01.mp4",cljs.core.cst$kw$controls,true,cljs.core.cst$kw$preload,"",cljs.core.cst$kw$poster,"/assets/video-1-thumbnail.png",cljs.core.cst$kw$track_DASH_src,"/assets/video01.vtt"], null);
return (prais2.components.video_player.video_js.cljs$core$IFn$_invoke$arity$1 ? prais2.components.video_player.video_js.cljs$core$IFn$_invoke$arity$1(G__17794) : prais2.components.video_player.video_js.call(null,G__17794));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"section",((cljs.core.map_QMARK_(attrs17793))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-offset-1","col-sm-10","col-md-offset-1","col-md-6"], null)], null),attrs17793], 0))):{"className": "col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-6"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17793))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17793)], null))));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title("Two minute video")], null)),"render-video1");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17795__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17795 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17796__i = 0, G__17796__a = new Array(arguments.length -  0);
while (G__17796__i < G__17796__a.length) {G__17796__a[G__17796__i] = arguments[G__17796__i + 0]; ++G__17796__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17796__a,0);
} 
return G__17795__delegate.call(this,args__8012__auto__);};
G__17795.cljs$lang$maxFixedArity = 0;
G__17795.cljs$lang$applyTo = (function (arglist__17797){
var args__8012__auto__ = cljs.core.seq(arglist__17797);
return G__17795__delegate(args__8012__auto__);
});
G__17795.cljs$core$IFn$_invoke$arity$variadic = G__17795__delegate;
return G__17795;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.main.render_data_tab_panes = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (data){
var G__17798 = "row";
var G__17799 = {"className": "tab-content"};
var G__17800 = (function (){var G__17803 = "div";
var G__17804 = {"key": (1), "id": "mapped-data", "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-pane","col-sm-12",prais2.main.active_QMARK_(cljs.core.cst$kw$map)], null))};
var G__17805 = sablono.interpreter.interpret((cljs.core.truth_(prais2.main.active_QMARK_(cljs.core.cst$kw$map))?(prais2.map_data.render_map_data.cljs$core$IFn$_invoke$arity$0 ? prais2.map_data.render_map_data.cljs$core$IFn$_invoke$arity$0() : prais2.map_data.render_map_data.call(null)):null));
return React.createElement(G__17803,G__17804,G__17805);
})();
var G__17801 = (function (){var G__17806 = "div";
var G__17807 = {"key": (2), "id": "data-table", "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-pane","col-sm-12",prais2.main.active_QMARK_(cljs.core.cst$kw$table)], null))};
var G__17808 = sablono.interpreter.interpret((prais2.data.modal.cljs$core$IFn$_invoke$arity$0 ? prais2.data.modal.cljs$core$IFn$_invoke$arity$0() : prais2.data.modal.call(null)));
var G__17809 = sablono.interpreter.interpret((cljs.core.truth_(prais2.main.active_QMARK_(cljs.core.cst$kw$table))?(prais2.data.list_tab.cljs$core$IFn$_invoke$arity$3 ? prais2.data.list_tab.cljs$core$IFn$_invoke$arity$3(prais2.core.app,data,prais2.core.event_bus) : prais2.data.list_tab.call(null,prais2.core.app,data,prais2.core.event_bus)):null));
return React.createElement(G__17806,G__17807,G__17808,G__17809);
})();
var G__17802 = (function (){var G__17810 = "div";
var G__17811 = {"key": (3), "id": "mapped-data", "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-pane","col-sm-12",prais2.main.active_QMARK_(cljs.core.cst$kw$animation)], null))};
var G__17812 = sablono.interpreter.interpret((cljs.core.truth_(prais2.main.active_QMARK_(cljs.core.cst$kw$animation))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$col_DASH_sm_DASH_offset_DASH_1$col_DASH_sm_DASH_10,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(2)], null),"Parents who helped us develop the website found this video useful for interpreting the data.\n                    If you want to know more about how the predicted range of survival is actually calculated, please\n                    watch our ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_video_DASH_camera], null)," second video"], null)," in the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$2("faqs",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3)], null)),"Everything Else"], null)," section. "], null)], null):null));
var G__17813 = sablono.interpreter.interpret((cljs.core.truth_(prais2.main.active_QMARK_(cljs.core.cst$kw$animation))?(prais2.main.render_video1.cljs$core$IFn$_invoke$arity$0 ? prais2.main.render_video1.cljs$core$IFn$_invoke$arity$0() : prais2.main.render_video1.call(null)):null));
return React.createElement(G__17810,G__17811,G__17812,G__17813);
})();
return React.createElement(G__17798,G__17799,G__17800,G__17801,G__17802);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"render-data-tab-panes");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17814__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17814 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17815__i = 0, G__17815__a = new Array(arguments.length -  0);
while (G__17815__i < G__17815__a.length) {G__17815__a[G__17815__i] = arguments[G__17815__i + 0]; ++G__17815__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17815__a,0);
} 
return G__17814__delegate.call(this,args__8012__auto__);};
G__17814.cljs$lang$maxFixedArity = 0;
G__17814.cljs$lang$applyTo = (function (arglist__17816){
var args__8012__auto__ = cljs.core.seq(arglist__17816);
return G__17814__delegate(args__8012__auto__);
});
G__17814.cljs$core$IFn$_invoke$arity$variadic = G__17814__delegate;
return G__17814;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.main.render_data = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
return sablono.interpreter.interpret((function (){var app = rum.core.react(prais2.core.app);
var data = prais2.data.table_data(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(app)).call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid$main_DASH_content,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.main.render_data_tabs.cljs$core$IFn$_invoke$arity$0 ? prais2.main.render_data_tabs.cljs$core$IFn$_invoke$arity$0() : prais2.main.render_data_tabs.call(null)),(prais2.main.render_data_tab_panes.cljs$core$IFn$_invoke$arity$1 ? prais2.main.render_data_tab_panes.cljs$core$IFn$_invoke$arity$1(data) : prais2.main.render_data_tab_panes.call(null,data))], null))], null);
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$2("DATA>",false)], null)),"render-data");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17817__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17817 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17818__i = 0, G__17818__a = new Array(arguments.length -  0);
while (G__17818__i < G__17818__a.length) {G__17818__a[G__17818__i] = arguments[G__17818__i + 0]; ++G__17818__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17818__a,0);
} 
return G__17817__delegate.call(this,args__8012__auto__);};
G__17817.cljs$lang$maxFixedArity = 0;
G__17817.cljs$lang$applyTo = (function (arglist__17819){
var args__8012__auto__ = cljs.core.seq(arglist__17819);
return G__17817__delegate(args__8012__auto__);
});
G__17817.cljs$core$IFn$_invoke$arity$variadic = G__17817__delegate;
return G__17817;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
prais2.main.deselect_all = (function prais2$main$deselect_all(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(prais2.core.app,cljs.core.assoc,cljs.core.cst$kw$map_DASH_h_DASH_code,null,cljs.core.array_seq([cljs.core.cst$kw$selected_DASH_h_DASH_code,null], 0));
});
prais2.main.scroll_to_top = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_update,(function (state){
scrollTo((0),(0));

return state;
})], null);
/**
 * 
 */
prais2.main.page_choice = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (page,section){
var attrs17820 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.cst$kw$home))?(function (){
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

return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.chrome.header.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.header.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.header.call(null)),(function (){var G__17821 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null);
return (prais2.faqs.render_faqs.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faqs.cljs$core$IFn$_invoke$arity$1(G__17821) : prais2.faqs.render_faqs.call(null,G__17821));
})(),(prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.footer.call(null))], null));
})()
:(function (){
(prais2.chrome.header.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.header.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.header.call(null));

(prais2.main.render_404.cljs$core$IFn$_invoke$arity$0 ? prais2.main.render_404.cljs$core$IFn$_invoke$arity$0() : prais2.main.render_404.call(null));

return (prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0 ? prais2.chrome.footer.cljs$core$IFn$_invoke$arity$0() : prais2.chrome.footer.call(null));
})()

)))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17820))?sablono.interpreter.attributes(attrs17820):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17820))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17820)], null))));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,prais2.main.scroll_to_top], null)),"page-choice");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17822__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17822 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17823__i = 0, G__17823__a = new Array(arguments.length -  0);
while (G__17823__i < G__17823__a.length) {G__17823__a[G__17823__i] = arguments[G__17823__i + 0]; ++G__17823__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17823__a,0);
} 
return G__17822__delegate.call(this,args__8012__auto__);};
G__17822.cljs$lang$maxFixedArity = 0;
G__17822.cljs$lang$applyTo = (function (arglist__17824){
var args__8012__auto__ = cljs.core.seq(arglist__17824);
return G__17822__delegate(args__8012__auto__);
});
G__17822.cljs$core$IFn$_invoke$arity$variadic = G__17822__delegate;
return G__17822;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.main.render_page = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
return sablono.interpreter.interpret((function (){var map__17825 = rum.core.react(prais2.core.app);
var map__17825__$1 = ((((!((map__17825 == null)))?((((map__17825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17825):map__17825);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17825__$1,cljs.core.cst$kw$page);
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17825__$1,cljs.core.cst$kw$section);
return (prais2.main.page_choice.cljs$core$IFn$_invoke$arity$2 ? prais2.main.page_choice.cljs$core$IFn$_invoke$arity$2(page,section) : prais2.main.page_choice.call(null,page,section));
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"render-page");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17827__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17827 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17828__i = 0, G__17828__a = new Array(arguments.length -  0);
while (G__17828__i < G__17828__a.length) {G__17828__a[G__17828__i] = arguments[G__17828__i + 0]; ++G__17828__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17828__a,0);
} 
return G__17827__delegate.call(this,args__8012__auto__);};
G__17827.cljs$lang$maxFixedArity = 0;
G__17827.cljs$lang$applyTo = (function (arglist__17829){
var args__8012__auto__ = cljs.core.seq(arglist__17829);
return G__17827__delegate(args__8012__auto__);
});
G__17827.cljs$core$IFn$_invoke$arity$variadic = G__17827__delegate;
return G__17827;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.main.app_container = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
return sablono.interpreter.interpret((prais2.main.render_page.cljs$core$IFn$_invoke$arity$0 ? prais2.main.render_page.cljs$core$IFn$_invoke$arity$0() : prais2.main.render_page.call(null)));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.bs_popover,prais2.core.bs_tooltip], null)),"app-container");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17830__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17830 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17831__i = 0, G__17831__a = new Array(arguments.length -  0);
while (G__17831__i < G__17831__a.length) {G__17831__a[G__17831__i] = arguments[G__17831__i + 0]; ++G__17831__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17831__a,0);
} 
return G__17830__delegate.call(this,args__8012__auto__);};
G__17830.cljs$lang$maxFixedArity = 0;
G__17830.cljs$lang$applyTo = (function (arglist__17832){
var args__8012__auto__ = cljs.core.seq(arglist__17832);
return G__17830__delegate(args__8012__auto__);
});
G__17830.cljs$core$IFn$_invoke$arity$variadic = G__17830__delegate;
return G__17830;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
var temp__4655__auto___17833 = prais2.core.el("app");
if(cljs.core.truth_(temp__4655__auto___17833)){
var mount_point_17834 = temp__4655__auto___17833;
rum.core.mount((prais2.main.app_container.cljs$core$IFn$_invoke$arity$0 ? prais2.main.app_container.cljs$core$IFn$_invoke$arity$0() : prais2.main.app_container.call(null)),mount_point_17834);
} else {
}
/**
 * listen on a published event feed, handling events with the given key
 */
prais2.main.dispatch = (function prais2$main$dispatch(event_feed,event_key,handle){
var in_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(event_feed,event_key,in_chan);

var c__12897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12897__auto__,in_chan){
return (function (){
var f__12898__auto__ = (function (){var switch__12841__auto__ = ((function (c__12897__auto__,in_chan){
return (function (state_17890){
var state_val_17891 = (state_17890[(1)]);
if((state_val_17891 === (1))){
var state_17890__$1 = state_17890;
var statearr_17892_17907 = state_17890__$1;
(statearr_17892_17907[(2)] = null);

(statearr_17892_17907[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17891 === (2))){
var state_17890__$1 = state_17890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17890__$1,(4),in_chan);
} else {
if((state_val_17891 === (3))){
var inst_17888 = (state_17890[(2)]);
var state_17890__$1 = state_17890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17890__$1,inst_17888);
} else {
if((state_val_17891 === (4))){
var inst_17876 = (state_17890[(7)]);
var inst_17876__$1 = (state_17890[(2)]);
var inst_17877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17876__$1,(0),null);
var inst_17878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17876__$1,(1),null);
var inst_17879 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17877,cljs.core.cst$kw$reloading);
var state_17890__$1 = (function (){var statearr_17893 = state_17890;
(statearr_17893[(7)] = inst_17876__$1);

(statearr_17893[(8)] = inst_17878);

return statearr_17893;
})();
if(inst_17879){
var statearr_17894_17908 = state_17890__$1;
(statearr_17894_17908[(1)] = (5));

} else {
var statearr_17895_17909 = state_17890__$1;
(statearr_17895_17909[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17891 === (5))){
var inst_17881 = cljs.core.async.close_BANG_(in_chan);
var state_17890__$1 = state_17890;
var statearr_17896_17910 = state_17890__$1;
(statearr_17896_17910[(2)] = inst_17881);

(statearr_17896_17910[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17891 === (6))){
var inst_17876 = (state_17890[(7)]);
var inst_17883 = (handle.cljs$core$IFn$_invoke$arity$1 ? handle.cljs$core$IFn$_invoke$arity$1(inst_17876) : handle.call(null,inst_17876));
var state_17890__$1 = (function (){var statearr_17897 = state_17890;
(statearr_17897[(9)] = inst_17883);

return statearr_17897;
})();
var statearr_17898_17911 = state_17890__$1;
(statearr_17898_17911[(2)] = null);

(statearr_17898_17911[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17891 === (7))){
var inst_17886 = (state_17890[(2)]);
var state_17890__$1 = state_17890;
var statearr_17899_17912 = state_17890__$1;
(statearr_17899_17912[(2)] = inst_17886);

(statearr_17899_17912[(1)] = (3));


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
});})(c__12897__auto__,in_chan))
;
return ((function (switch__12841__auto__,c__12897__auto__,in_chan){
return (function() {
var prais2$main$dispatch_$_state_machine__12842__auto__ = null;
var prais2$main$dispatch_$_state_machine__12842__auto____0 = (function (){
var statearr_17903 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17903[(0)] = prais2$main$dispatch_$_state_machine__12842__auto__);

(statearr_17903[(1)] = (1));

return statearr_17903;
});
var prais2$main$dispatch_$_state_machine__12842__auto____1 = (function (state_17890){
while(true){
var ret_value__12843__auto__ = (function (){try{while(true){
var result__12844__auto__ = switch__12841__auto__(state_17890);
if(cljs.core.keyword_identical_QMARK_(result__12844__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12844__auto__;
}
break;
}
}catch (e17904){if((e17904 instanceof Object)){
var ex__12845__auto__ = e17904;
var statearr_17905_17913 = state_17890;
(statearr_17905_17913[(5)] = ex__12845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17890);

return cljs.core.cst$kw$recur;
} else {
throw e17904;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12843__auto__,cljs.core.cst$kw$recur)){
var G__17914 = state_17890;
state_17890 = G__17914;
continue;
} else {
return ret_value__12843__auto__;
}
break;
}
});
prais2$main$dispatch_$_state_machine__12842__auto__ = function(state_17890){
switch(arguments.length){
case 0:
return prais2$main$dispatch_$_state_machine__12842__auto____0.call(this);
case 1:
return prais2$main$dispatch_$_state_machine__12842__auto____1.call(this,state_17890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$main$dispatch_$_state_machine__12842__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$main$dispatch_$_state_machine__12842__auto____0;
prais2$main$dispatch_$_state_machine__12842__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$main$dispatch_$_state_machine__12842__auto____1;
return prais2$main$dispatch_$_state_machine__12842__auto__;
})()
;})(switch__12841__auto__,c__12897__auto__,in_chan))
})();
var state__12899__auto__ = (function (){var statearr_17906 = (f__12898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12898__auto__.cljs$core$IFn$_invoke$arity$0() : f__12898__auto__.call(null));
(statearr_17906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12897__auto__);

return statearr_17906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12899__auto__);
});})(c__12897__auto__,in_chan))
);

return c__12897__auto__;
});
prais2.main.zoom_to_hospital = (function prais2$main$zoom_to_hospital(p__17916){
var vec__17920 = p__17916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(0),null);
var h_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(2),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__17920,_,h_code,___$1){
return (function (p1__17915_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17915_SHARP_,cljs.core.cst$kw$map_DASH_h_DASH_code,h_code);
});})(vec__17920,_,h_code,___$1))
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

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$slider_DASH_axis_DASH_value,(function (p__17990){
var vec__17991 = p__17990;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17991,(0),null);
var slider_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17991,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__17991,_,slider_value){
return (function (p1__17923_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17923_SHARP_,cljs.core.cst$kw$slider_DASH_axis_DASH_value,slider_value);
});})(vec__17991,_,slider_value))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value,(function (p__17994){
var vec__17995 = p__17994;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17995,(0),null);
var slider_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17995,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__17995,_,slider_value){
return (function (p1__17924_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17924_SHARP_,cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value,slider_value);
});})(vec__17995,_,slider_value))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$sort_DASH_toggle,(function (p__17998){
var vec__17999 = p__17998;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17999,(0),null);
var column_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17999,(1),null);
return prais2.data.handle_sort(prais2.core.app,column_key);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$info_DASH_clicked,(function (p__18002){
var vec__18003 = p__18002;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18003,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18003,(1),null);
return null;
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$change_DASH_colour_DASH_map,(function (p__18006){
var vec__18007 = p__18006;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18007,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18007,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__18007,_,value){
return (function (p1__17925_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17925_SHARP_,cljs.core.cst$kw$theme,(value | (0)));
});})(vec__18007,_,value))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$change_DASH_chart_DASH_state,(function (p__18010){
var vec__18011 = p__18010;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18011,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18011,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__18011,_,value){
return (function (p1__17926_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17926_SHARP_,cljs.core.cst$kw$chart_DASH_state,(value | (0)));
});})(vec__18011,_,value))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$open_DASH_hospital_DASH_modal,(function (p__18014){
var vec__18015 = p__18014;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18015,(0),null);
var h_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18015,(1),null);
return prais2.data.open_hospital_modal(h_code);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$close_DASH_hospital_DASH_modal,(function (_){
return prais2.data.close_hospital_modal();
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$morph_DASH_full_DASH_range,(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,(function (p1__17927_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17927_SHARP_,cljs.core.cst$kw$slider_DASH_axis_DASH_value,(0));
}));
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$change_DASH_datasource,(function (p__18018){
var vec__18019 = p__18018;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18019,(0),null);
var new_source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18019,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__18019,_,new_source){
return (function (p1__17928_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17928_SHARP_,cljs.core.cst$kw$datasource,new_source);
});})(vec__18019,_,new_source))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$click_DASH_on_DASH_map_DASH_marker,prais2.main.zoom_to_hospital);

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$click_DASH_on_DASH_map_DASH_menu_DASH_item,prais2.main.zoom_to_hospital);

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$just_DASH_london,(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,(function (p1__17929_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17929_SHARP_,cljs.core.cst$kw$map_DASH_h_DASH_code,null);
}));

return prais2.open_layers_map.go_london();
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$reset_DASH_map_DASH_to_DASH_home,(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,(function (p1__17930_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17930_SHARP_,cljs.core.cst$kw$map_DASH_h_DASH_code,null);
}));

return prais2.open_layers_map.go_home();
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$home,(function (p__18022){
var vec__18023 = p__18022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18023,(0),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18023,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__18023,_,section){
return (function (p1__17931_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__17931_SHARP_,cljs.core.cst$kw$page,cljs.core.cst$kw$home,cljs.core.array_seq([cljs.core.cst$kw$section,section], 0));
});})(vec__18023,_,section))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$intro,(function (p__18026){
var vec__18027 = p__18026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18027,(0),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18027,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__18027,_,section){
return (function (p1__17932_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__17932_SHARP_,cljs.core.cst$kw$page,cljs.core.cst$kw$intro,cljs.core.array_seq([cljs.core.cst$kw$section,section], 0));
});})(vec__18027,_,section))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$data,(function (p__18030){
var vec__18031 = p__18030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18031,(0),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18031,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__18031,_,section){
return (function (p1__17933_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__17933_SHARP_,cljs.core.cst$kw$page,cljs.core.cst$kw$data,cljs.core.array_seq([cljs.core.cst$kw$section,section,cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value,(1)], 0));
});})(vec__18031,_,section))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$faqs,(function (p__18034){
var vec__18035 = p__18034;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18035,(0),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18035,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__18035,_,section){
return (function (p1__17934_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__17934_SHARP_,cljs.core.cst$kw$page,cljs.core.cst$kw$faqs,cljs.core.array_seq([cljs.core.cst$kw$section,section], 0));
});})(vec__18035,_,section))
);
}));

prais2.main.dispatch(prais2.core.event_bus_pub,cljs.core.cst$kw$faq,(function (p__18038){
var vec__18039 = p__18038;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18039,(0),null);
var faq_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18039,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,((function (vec__18039,_,faq_ref){
return (function (p1__17935_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__17935_SHARP_,cljs.core.cst$kw$page,cljs.core.cst$kw$faqs,cljs.core.array_seq([cljs.core.cst$kw$section,faq_ref], 0));
});})(vec__18039,_,faq_ref))
);
}));

return null;
});
prais2.main.dispatch_central();
prais2.main.on_js_reload = (function prais2$main$on_js_reload(){
cljs.core.enable_console_print_BANG_();

console.log("reloading");

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Reloaded"], 0));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reloading,null], null));
});
