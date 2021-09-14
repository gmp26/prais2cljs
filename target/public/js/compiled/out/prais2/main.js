// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.main');
goog.require('cljs.core');
goog.require('prais2.faqs');
goog.require('cljsjs.jquery');
goog.require('prais2.open_layers_map');
goog.require('prais2.data');
goog.require('prais2.home');
goog.require('prais2.content');
goog.require('prais2.routes');
goog.require('rum.core');
goog.require('prais2.load_edn');
goog.require('cljsjs.react');
goog.require('cljs.core.async');
goog.require('prais2.components.video_player');
goog.require('clojure.set');
goog.require('prais2.core');
goog.require('prais2.chrome');
goog.require('prais2.utils');
goog.require('prais2.intro');
goog.require('prais2.map_data');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Return the first matching DOM element selected by the CSS selector. 
 */
prais2.main.select = (function prais2$main$select(selector){
return document.querySelector(selector);
});
/**
 * 
 */
prais2.main.debug = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,(function (){var attrs45700 = [cljs.core.str(rum.core.react.call(null,prais2.core.app))].join('');
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs45700))?sablono.interpreter.attributes.call(null,attrs45700):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45700))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45700)], null))));
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"debug");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__45701__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__45701 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__45702__i = 0, G__45702__a = new Array(arguments.length -  0);
while (G__45702__i < G__45702__a.length) {G__45702__a[G__45702__i] = arguments[G__45702__i + 0]; ++G__45702__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__45702__a,0);
} 
return G__45701__delegate.call(this,args__27116__auto__);};
G__45701.cljs$lang$maxFixedArity = 0;
G__45701.cljs$lang$applyTo = (function (arglist__45703){
var args__27116__auto__ = cljs.core.seq(arglist__45703);
return G__45701__delegate(args__27116__auto__);
});
G__45701.cljs$core$IFn$_invoke$arity$variadic = G__45701__delegate;
return G__45701;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.main.para = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (text){
var attrs45704 = text;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs45704))?sablono.interpreter.attributes.call(null,attrs45704):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45704))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45704)], null))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"para");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__45705__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__45705 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__45706__i = 0, G__45706__a = new Array(arguments.length -  0);
while (G__45706__i < G__45706__a.length) {G__45706__a[G__45706__i] = arguments[G__45706__i + 0]; ++G__45706__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__45706__a,0);
} 
return G__45705__delegate.call(this,args__27116__auto__);};
G__45705.cljs$lang$maxFixedArity = 0;
G__45705.cljs$lang$applyTo = (function (arglist__45707){
var args__27116__auto__ = cljs.core.seq(arglist__45707);
return G__45705__delegate(args__27116__auto__);
});
G__45705.cljs$core$IFn$_invoke$arity$variadic = G__45705__delegate;
return G__45705;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.main.render_404 = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("h1",null,"Page not found. ",(function (){var attrs45708 = prais2.core.href.call(null,"home");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs45708))?sablono.interpreter.attributes.call(null,attrs45708):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45708))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Try the home page."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45708),"Try the home page."], null))));
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"render-404");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__45709__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__45709 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__45710__i = 0, G__45710__a = new Array(arguments.length -  0);
while (G__45710__i < G__45710__a.length) {G__45710__a[G__45710__i] = arguments[G__45710__i + 0]; ++G__45710__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__45710__a,0);
} 
return G__45709__delegate.call(this,args__27116__auto__);};
G__45709.cljs$lang$maxFixedArity = 0;
G__45709.cljs$lang$applyTo = (function (arglist__45711){
var args__27116__auto__ = cljs.core.seq(arglist__45711);
return G__45709__delegate(args__27116__auto__);
});
G__45709.cljs$core$IFn$_invoke$arity$variadic = G__45709__delegate;
return G__45709;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
prais2.main.active_QMARK_ = (function prais2$main$active_QMARK_(section){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app)),section)){
return "active";
} else {
return null;
}
});
/**
 * 
 */
prais2.main.render_data_tabs = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",{"className": "row"},React.createElement("div",{"className": "col-sm-offset-1 col-sm-10"},React.createElement("h1",{"key": (1)},"Explore the data"),React.createElement("p",{"key": (2)},"In this section you can explore the overall hospital survival statistics published by the National\n                 Congenital Heart Disease Audit (",(function (){var attrs45718 = prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs45718))?sablono.interpreter.attributes.call(null,attrs45718):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45718))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45718),"NCHDA"], null))));
})(),").\n                 The data covers all hospitals in the UK and Ireland that performed heart surgery in children\n                 (0-16 years old). NCHDA update the data annually and each report covers a 3 year period."),React.createElement("p",{"key": (3)},"Data on this site comes from the NCHDA annual reports, all of which can be ",(function (){var attrs45719 = prais2.core.href.call(null,"https://nicor4.nicor.org.uk/chd/an_paeds.nsf/vwContent/Analysis Documents?Opendocument",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs45719))?sablono.interpreter.attributes.call(null,attrs45719):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45719))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["downloaded from the NCHDA website."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45719),"downloaded from the NCHDA website."], null))));
})()),React.createElement("ul",{"key": (4), "role": "tablist", "className": "nav nav-pills"},React.createElement("li",{"key": (1), "role": "presentation", "className": prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"map","map",1371690461))},(function (){var attrs45720 = prais2.core.href.call(null,"data/map",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"mapped-data",new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__45712_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__45712_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"map","map",1371690461),"data/map");
}));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs45720))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"map-tab"], null),attrs45720)):{"id": "map-tab"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45720))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",{"className": "fa fa-map-marker"})," Choose a hospital"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45720),React.createElement("i",{"className": "fa fa-map-marker"})," Choose a hospital"], null))));
})()),React.createElement("li",{"key": (2), "role": "presentation", "className": prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"table","table",-564943036))},(function (){var attrs45725 = prais2.core.href.call(null,"data/table",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"data-table",new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__45713_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__45713_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"table","table",-564943036),"data/table");
}));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs45725))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"table-tab"], null),attrs45725)):{"id": "table-tab"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45725))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",{"className": "fa fa-table"})," All hospitals"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45725),React.createElement("i",{"className": "fa fa-table"})," All hospitals"], null))));
})()),React.createElement("li",{"key": (3), "role": "presentation", "className": prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244))},(function (){var attrs45730 = prais2.core.href.call(null,"data/animation",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"mapped-data",new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__45714_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__45714_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"animation","animation",-1248293244),"data/animation");
}));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs45730))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"map-tab"], null),attrs45730)):{"id": "map-tab"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45730))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",{"className": "fa fa-video-camera"})," Two minute video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45730),React.createElement("i",{"className": "fa fa-video-camera"})," Two minute video"], null))));
})())),sablono.interpreter.interpret.call(null,((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.post-tab","p.post-tab",-2035453524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(5)], null),"Use the drop down box to change reporting periods. You can watch our ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"data/animation",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__45715_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__45715_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"animation","animation",-1248293244),"data/animation");
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-video-camera","i.fa.fa-video-camera",-1639337819)], null)," two minute video"], null)," which explains how we present the statistics and how to interpret them. Parents who helped us\n       develop the website found it a useful guide to interpreting the data. "], null):null))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.update_title.call(null,"Choose a hospital"),prais2.core.update_description.call(null,"View all hospital child heart surgery survival data")], null)),"render-data-tabs");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__45735__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__45735 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__45736__i = 0, G__45736__a = new Array(arguments.length -  0);
while (G__45736__i < G__45736__a.length) {G__45736__a[G__45736__i] = arguments[G__45736__i + 0]; ++G__45736__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__45736__a,0);
} 
return G__45735__delegate.call(this,args__27116__auto__);};
G__45735.cljs$lang$maxFixedArity = 0;
G__45735.cljs$lang$applyTo = (function (arglist__45737){
var args__27116__auto__ = cljs.core.seq(arglist__45737);
return G__45735__delegate(args__27116__auto__);
});
G__45735.cljs$core$IFn$_invoke$arity$variadic = G__45735__delegate;
return G__45735;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.main.render_video1 = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var attrs45738 = prais2.components.video_player.video_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"video-id","video-id",2132630536),"video1",new cljs.core.Keyword(null,"src","src",-1651076051),"/assets/video01.mp4",new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"preload","preload",1646824722),"",new cljs.core.Keyword(null,"poster","poster",-1616913550),"/assets/video-1-thumbnail.png",new cljs.core.Keyword(null,"track-src","track-src",590501543),"/assets/video01.vtt"], null));
return cljs.core.apply.call(null,React.createElement,"section",((cljs.core.map_QMARK_.call(null,attrs45738))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-offset-1","col-sm-10","col-md-offset-1","col-md-6"], null)], null),attrs45738)):{"className": "col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45738))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45738)], null))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title.call(null,"Two minute video"),prais2.core.update_description.call(null,"View a 2 minute video guide to how we present the results")], null)),"render-video1");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__45739__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__45739 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__45740__i = 0, G__45740__a = new Array(arguments.length -  0);
while (G__45740__i < G__45740__a.length) {G__45740__a[G__45740__i] = arguments[G__45740__i + 0]; ++G__45740__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__45740__a,0);
} 
return G__45739__delegate.call(this,args__27116__auto__);};
G__45739.cljs$lang$maxFixedArity = 0;
G__45739.cljs$lang$applyTo = (function (arglist__45741){
var args__27116__auto__ = cljs.core.seq(arglist__45741);
return G__45739__delegate(args__27116__auto__);
});
G__45739.cljs$core$IFn$_invoke$arity$variadic = G__45739__delegate;
return G__45739;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.main.render_data_tab_panes = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (data){
return React.createElement("row",{"className": "tab-content"},React.createElement("div",{"key": (1), "id": "mapped-data", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-pane","col-sm-12",prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"map","map",1371690461))], null))},sablono.interpreter.interpret.call(null,(cljs.core.truth_(prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"map","map",1371690461)))?prais2.map_data.render_map_data.call(null):null))),React.createElement("div",{"key": (2), "id": "data-table", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-pane","col-sm-12",prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"table","table",-564943036))], null))},sablono.interpreter.interpret.call(null,prais2.data.modal.call(null)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"table","table",-564943036)))?prais2.data.list_tab.call(null,prais2.core.app,data,prais2.core.event_bus):null))),React.createElement("div",{"key": (3), "id": "mapped-data", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-pane","col-sm-12",prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244))], null))},sablono.interpreter.interpret.call(null,(cljs.core.truth_(prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.col-sm-offset-1.col-sm-10","section.col-sm-offset-1.col-sm-10",515620697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Parents who helped us develop the website found this video useful for interpreting the data.\n                    If you want to know more about how the predicted range of survival is actually calculated, please\n                    watch our ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faqs"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-video-camera","i.fa.fa-video-camera",-1639337819)], null)," second video"], null)," in the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faqs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null)),"Everything Else"], null)," section. "], null)], null):null)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244)))?prais2.main.render_video1.call(null):null))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"render-data-tab-panes");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__45742__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__45742 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__45743__i = 0, G__45743__a = new Array(arguments.length -  0);
while (G__45743__i < G__45743__a.length) {G__45743__a[G__45743__i] = arguments[G__45743__i + 0]; ++G__45743__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__45743__a,0);
} 
return G__45742__delegate.call(this,args__27116__auto__);};
G__45742.cljs$lang$maxFixedArity = 0;
G__45742.cljs$lang$applyTo = (function (arglist__45744){
var args__27116__auto__ = cljs.core.seq(arglist__45744);
return G__45742__delegate(args__27116__auto__);
});
G__45742.cljs$core$IFn$_invoke$arity$variadic = G__45742__delegate;
return G__45742;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.main.render_data = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,(function (){var app = rum.core.react.call(null,prais2.core.app);
var data = prais2.data.table_data.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(app)).call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid.main-content","div.container-fluid.main-content",554372492),cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.main.render_data_tabs.call(null),prais2.main.render_data_tab_panes.call(null,data)], null))], null);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.monitor_react.call(null,"DATA>",false)], null)),"render-data");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__45745__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__45745 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__45746__i = 0, G__45746__a = new Array(arguments.length -  0);
while (G__45746__i < G__45746__a.length) {G__45746__a[G__45746__i] = arguments[G__45746__i + 0]; ++G__45746__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__45746__a,0);
} 
return G__45745__delegate.call(this,args__27116__auto__);};
G__45745.cljs$lang$maxFixedArity = 0;
G__45745.cljs$lang$applyTo = (function (arglist__45747){
var args__27116__auto__ = cljs.core.seq(arglist__45747);
return G__45745__delegate(args__27116__auto__);
});
G__45745.cljs$core$IFn$_invoke$arity$variadic = G__45745__delegate;
return G__45745;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
prais2.main.deselect_all = (function prais2$main$deselect_all(){
return cljs.core.swap_BANG_.call(null,prais2.core.app,cljs.core.assoc,new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396),null,new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046),null);
});
prais2.main.scroll_to_top = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
scrollTo((0),(0));

return state;
})], null);
/**
 * 
 */
prais2.main.page_choice = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (page,section){
var attrs45748 = ((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"home","home",-74557309)))?(function (){
prais2.main.deselect_all.call(null);

return cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.chrome.header.call(null),prais2.home.render_home.call(null),prais2.chrome.footer.call(null)], null));
})()
:((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"intro","intro",-886090599)))?(function (){
prais2.main.deselect_all.call(null);

return cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.chrome.header.call(null),prais2.intro.render_intro.call(null),prais2.chrome.footer.call(null)], null));
})()
:((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"data","data",-232669377)))?(function (){
prais2.main.deselect_all.call(null);

return cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.chrome.header.call(null),prais2.main.render_data.call(null),prais2.chrome.footer.call(null)], null));
})()
:((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"faqs","faqs",636275568)))?(function (){
prais2.main.deselect_all.call(null);

return cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.chrome.header.call(null),prais2.faqs.render_faqs.call(null,section),prais2.chrome.footer.call(null)], null));
})()
:((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"faq","faq",650618613)))?(function (){
prais2.main.deselect_all.call(null);

return cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.chrome.header.call(null),prais2.faqs.render_faqs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null)),prais2.chrome.footer.call(null)], null));
})()
:(function (){
prais2.chrome.header.call(null);

prais2.main.render_404.call(null);

return prais2.chrome.footer.call(null);
})()

)))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45748))?sablono.interpreter.attributes.call(null,attrs45748):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45748))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45748)], null))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,prais2.main.scroll_to_top], null)),"page-choice");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__45749__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__45749 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__45750__i = 0, G__45750__a = new Array(arguments.length -  0);
while (G__45750__i < G__45750__a.length) {G__45750__a[G__45750__i] = arguments[G__45750__i + 0]; ++G__45750__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__45750__a,0);
} 
return G__45749__delegate.call(this,args__27116__auto__);};
G__45749.cljs$lang$maxFixedArity = 0;
G__45749.cljs$lang$applyTo = (function (arglist__45751){
var args__27116__auto__ = cljs.core.seq(arglist__45751);
return G__45749__delegate(args__27116__auto__);
});
G__45749.cljs$core$IFn$_invoke$arity$variadic = G__45749__delegate;
return G__45749;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.main.render_page = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,(function (){var map__45752 = rum.core.react.call(null,prais2.core.app);
var map__45752__$1 = ((((!((map__45752 == null)))?((((map__45752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45752):map__45752);
var page = cljs.core.get.call(null,map__45752__$1,new cljs.core.Keyword(null,"page","page",849072397));
var section = cljs.core.get.call(null,map__45752__$1,new cljs.core.Keyword(null,"section","section",-300141526));
return prais2.main.page_choice.call(null,page,section);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"render-page");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__45754__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__45754 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__45755__i = 0, G__45755__a = new Array(arguments.length -  0);
while (G__45755__i < G__45755__a.length) {G__45755__a[G__45755__i] = arguments[G__45755__i + 0]; ++G__45755__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__45755__a,0);
} 
return G__45754__delegate.call(this,args__27116__auto__);};
G__45754.cljs$lang$maxFixedArity = 0;
G__45754.cljs$lang$applyTo = (function (arglist__45756){
var args__27116__auto__ = cljs.core.seq(arglist__45756);
return G__45754__delegate(args__27116__auto__);
});
G__45754.cljs$core$IFn$_invoke$arity$variadic = G__45754__delegate;
return G__45754;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.main.app_container = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
cljs.core.async.take_BANG_.call(null,prais2.load_edn.make_remote_call.call(null,"http://localhost:3449/data.edn"),(function (p1__45757_SHARP_){
return console.log(p1__45757_SHARP_);
}));

return sablono.interpreter.interpret.call(null,prais2.main.render_page.call(null));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.bs_popover,prais2.core.bs_tooltip], null)),"app-container");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__45758__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__45758 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__45759__i = 0, G__45759__a = new Array(arguments.length -  0);
while (G__45759__i < G__45759__a.length) {G__45759__a[G__45759__i] = arguments[G__45759__i + 0]; ++G__45759__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__45759__a,0);
} 
return G__45758__delegate.call(this,args__27116__auto__);};
G__45758.cljs$lang$maxFixedArity = 0;
G__45758.cljs$lang$applyTo = (function (arglist__45760){
var args__27116__auto__ = cljs.core.seq(arglist__45760);
return G__45758__delegate(args__27116__auto__);
});
G__45758.cljs$core$IFn$_invoke$arity$variadic = G__45758__delegate;
return G__45758;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
var temp__4655__auto___45762 = prais2.core.el.call(null,"app");
if(cljs.core.truth_(temp__4655__auto___45762)){
var mount_point_45763 = temp__4655__auto___45762;
rum.core.mount.call(null,prais2.main.app_container.call(null),mount_point_45763);
} else {
}
/**
 * listen on a published event feed, handling events with the given key
 */
prais2.main.dispatch = (function prais2$main$dispatch(event_feed,event_key,handle){
var in_chan = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,event_feed,event_key,in_chan);

var c__28444__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto__,in_chan){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto__,in_chan){
return (function (state_45834){
var state_val_45835 = (state_45834[(1)]);
if((state_val_45835 === (7))){
var inst_45830 = (state_45834[(2)]);
var state_45834__$1 = state_45834;
var statearr_45836_45856 = state_45834__$1;
(statearr_45836_45856[(2)] = inst_45830);

(statearr_45836_45856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45835 === (1))){
var state_45834__$1 = state_45834;
var statearr_45837_45857 = state_45834__$1;
(statearr_45837_45857[(2)] = null);

(statearr_45837_45857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45835 === (4))){
var inst_45815 = (state_45834[(7)]);
var inst_45815__$1 = (state_45834[(2)]);
var inst_45816 = cljs.core.nth.call(null,inst_45815__$1,(0),null);
var inst_45817 = cljs.core.nth.call(null,inst_45815__$1,(1),null);
var inst_45818 = cljs.core._EQ_.call(null,inst_45816,new cljs.core.Keyword(null,"reloading","reloading",961158984));
var state_45834__$1 = (function (){var statearr_45838 = state_45834;
(statearr_45838[(7)] = inst_45815__$1);

(statearr_45838[(8)] = inst_45817);

return statearr_45838;
})();
if(inst_45818){
var statearr_45839_45858 = state_45834__$1;
(statearr_45839_45858[(1)] = (5));

} else {
var statearr_45840_45859 = state_45834__$1;
(statearr_45840_45859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45835 === (6))){
var inst_45815 = (state_45834[(7)]);
var inst_45822 = handle.call(null,inst_45815);
var inst_45823 = cljs.core._EQ_.call(null,prais2.core.event_bus_pub,event_feed);
var state_45834__$1 = (function (){var statearr_45841 = state_45834;
(statearr_45841[(9)] = inst_45822);

return statearr_45841;
})();
if(inst_45823){
var statearr_45842_45860 = state_45834__$1;
(statearr_45842_45860[(1)] = (8));

} else {
var statearr_45843_45861 = state_45834__$1;
(statearr_45843_45861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45835 === (3))){
var inst_45832 = (state_45834[(2)]);
var state_45834__$1 = state_45834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45834__$1,inst_45832);
} else {
if((state_val_45835 === (2))){
var state_45834__$1 = state_45834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45834__$1,(4),in_chan);
} else {
if((state_val_45835 === (9))){
var state_45834__$1 = state_45834;
var statearr_45844_45862 = state_45834__$1;
(statearr_45844_45862[(2)] = null);

(statearr_45844_45862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45835 === (5))){
var inst_45820 = cljs.core.async.close_BANG_.call(null,in_chan);
var state_45834__$1 = state_45834;
var statearr_45845_45863 = state_45834__$1;
(statearr_45845_45863[(2)] = inst_45820);

(statearr_45845_45863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45835 === (10))){
var inst_45827 = (state_45834[(2)]);
var state_45834__$1 = (function (){var statearr_45846 = state_45834;
(statearr_45846[(10)] = inst_45827);

return statearr_45846;
})();
var statearr_45847_45864 = state_45834__$1;
(statearr_45847_45864[(2)] = null);

(statearr_45847_45864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45835 === (8))){
var state_45834__$1 = state_45834;
var statearr_45848_45865 = state_45834__$1;
(statearr_45848_45865[(2)] = null);

(statearr_45848_45865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__28444__auto__,in_chan))
;
return ((function (switch__28332__auto__,c__28444__auto__,in_chan){
return (function() {
var prais2$main$dispatch_$_state_machine__28333__auto__ = null;
var prais2$main$dispatch_$_state_machine__28333__auto____0 = (function (){
var statearr_45852 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45852[(0)] = prais2$main$dispatch_$_state_machine__28333__auto__);

(statearr_45852[(1)] = (1));

return statearr_45852;
});
var prais2$main$dispatch_$_state_machine__28333__auto____1 = (function (state_45834){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_45834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e45853){if((e45853 instanceof Object)){
var ex__28336__auto__ = e45853;
var statearr_45854_45866 = state_45834;
(statearr_45854_45866[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45867 = state_45834;
state_45834 = G__45867;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
prais2$main$dispatch_$_state_machine__28333__auto__ = function(state_45834){
switch(arguments.length){
case 0:
return prais2$main$dispatch_$_state_machine__28333__auto____0.call(this);
case 1:
return prais2$main$dispatch_$_state_machine__28333__auto____1.call(this,state_45834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$main$dispatch_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$main$dispatch_$_state_machine__28333__auto____0;
prais2$main$dispatch_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$main$dispatch_$_state_machine__28333__auto____1;
return prais2$main$dispatch_$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto__,in_chan))
})();
var state__28446__auto__ = (function (){var statearr_45855 = f__28445__auto__.call(null);
(statearr_45855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto__);

return statearr_45855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto__,in_chan))
);

return c__28444__auto__;
});
prais2.main.zoom_to_hospital = (function prais2$main$zoom_to_hospital(p__45869){
var vec__45873 = p__45869;
var _ = cljs.core.nth.call(null,vec__45873,(0),null);
var h_code = cljs.core.nth.call(null,vec__45873,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__45873,(2),null);
cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__45873,_,h_code,___$1){
return (function (p1__45868_SHARP_){
return cljs.core.assoc.call(null,p1__45868_SHARP_,new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396),h_code);
});})(vec__45873,_,h_code,___$1))
);

return prais2.open_layers_map.zoom_to_feature.call(null);
});
/**
 * centralised dispatch of all events
 */
prais2.main.dispatch_central = (function prais2$main$dispatch_central(){
prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"reloading","reloading",961158984),(function (_){
return null;
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558),(function (p__45946){
var vec__45947 = p__45946;
var _ = cljs.core.nth.call(null,vec__45947,(0),null);
var slider_value = cljs.core.nth.call(null,vec__45947,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__45947,_,slider_value){
return (function (p1__45876_SHARP_){
return cljs.core.assoc.call(null,p1__45876_SHARP_,new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558),slider_value);
});})(vec__45947,_,slider_value))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254),(function (p__45950){
var vec__45951 = p__45950;
var _ = cljs.core.nth.call(null,vec__45951,(0),null);
var slider_value = cljs.core.nth.call(null,vec__45951,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__45951,_,slider_value){
return (function (p1__45877_SHARP_){
return cljs.core.assoc.call(null,p1__45877_SHARP_,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254),slider_value);
});})(vec__45951,_,slider_value))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"sort-toggle","sort-toggle",-446677605),(function (p__45954){
var vec__45955 = p__45954;
var _ = cljs.core.nth.call(null,vec__45955,(0),null);
var column_key = cljs.core.nth.call(null,vec__45955,(1),null);
return prais2.data.handle_sort.call(null,prais2.core.app,column_key);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"info-clicked","info-clicked",-495300672),(function (p__45958){
var vec__45959 = p__45958;
var _ = cljs.core.nth.call(null,vec__45959,(0),null);
var column_key = cljs.core.nth.call(null,vec__45959,(1),null);
return null;
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"change-colour-map","change-colour-map",1053522123),(function (p__45962){
var vec__45963 = p__45962;
var _ = cljs.core.nth.call(null,vec__45963,(0),null);
var value = cljs.core.nth.call(null,vec__45963,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__45963,_,value){
return (function (p1__45878_SHARP_){
return cljs.core.assoc.call(null,p1__45878_SHARP_,new cljs.core.Keyword(null,"theme","theme",-1247880880),(value | (0)));
});})(vec__45963,_,value))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"change-chart-state","change-chart-state",-2056347401),(function (p__45966){
var vec__45967 = p__45966;
var _ = cljs.core.nth.call(null,vec__45967,(0),null);
var value = cljs.core.nth.call(null,vec__45967,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__45967,_,value){
return (function (p1__45879_SHARP_){
return cljs.core.assoc.call(null,p1__45879_SHARP_,new cljs.core.Keyword(null,"chart-state","chart-state",-1208336238),(value | (0)));
});})(vec__45967,_,value))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"open-hospital-modal","open-hospital-modal",14379912),(function (p__45970){
var vec__45971 = p__45970;
var _ = cljs.core.nth.call(null,vec__45971,(0),null);
var h_code = cljs.core.nth.call(null,vec__45971,(1),null);
return prais2.data.open_hospital_modal.call(null,h_code);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"close-hospital-modal","close-hospital-modal",-1904402441),(function (_){
return prais2.data.close_hospital_modal.call(null);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"morph-full-range","morph-full-range",-4333552),(function (_){
return cljs.core.swap_BANG_.call(null,prais2.core.app,(function (p1__45880_SHARP_){
return cljs.core.assoc.call(null,p1__45880_SHARP_,new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558),(0));
}));
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"change-datasource","change-datasource",1490034514),(function (p__45974){
var vec__45975 = p__45974;
var _ = cljs.core.nth.call(null,vec__45975,(0),null);
var new_source = cljs.core.nth.call(null,vec__45975,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__45975,_,new_source){
return (function (p1__45881_SHARP_){
return cljs.core.assoc.call(null,p1__45881_SHARP_,new cljs.core.Keyword(null,"datasource","datasource",-246060221),new_source);
});})(vec__45975,_,new_source))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"click-on-map-marker","click-on-map-marker",-670957068),prais2.main.zoom_to_hospital);

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"click-on-map-menu-item","click-on-map-menu-item",-2061025456),prais2.main.zoom_to_hospital);

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"just-london","just-london",-1714493961),(function (_){
cljs.core.swap_BANG_.call(null,prais2.core.app,(function (p1__45882_SHARP_){
return cljs.core.assoc.call(null,p1__45882_SHARP_,new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396),null);
}));

return prais2.open_layers_map.go_london.call(null);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"reset-map-to-home","reset-map-to-home",1348557515),(function (_){
cljs.core.swap_BANG_.call(null,prais2.core.app,(function (p1__45883_SHARP_){
return cljs.core.assoc.call(null,p1__45883_SHARP_,new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396),null);
}));

return prais2.open_layers_map.go_home.call(null);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"home","home",-74557309),(function (p__45978){
var vec__45979 = p__45978;
var _ = cljs.core.nth.call(null,vec__45979,(0),null);
var section = cljs.core.nth.call(null,vec__45979,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__45979,_,section){
return (function (p1__45884_SHARP_){
return cljs.core.assoc.call(null,p1__45884_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"section","section",-300141526),section);
});})(vec__45979,_,section))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"intro","intro",-886090599),(function (p__45982){
var vec__45983 = p__45982;
var _ = cljs.core.nth.call(null,vec__45983,(0),null);
var section = cljs.core.nth.call(null,vec__45983,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__45983,_,section){
return (function (p1__45885_SHARP_){
return cljs.core.assoc.call(null,p1__45885_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"intro","intro",-886090599),new cljs.core.Keyword(null,"section","section",-300141526),section);
});})(vec__45983,_,section))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"data","data",-232669377),(function (p__45986){
var vec__45987 = p__45986;
var _ = cljs.core.nth.call(null,vec__45987,(0),null);
var section = cljs.core.nth.call(null,vec__45987,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__45987,_,section){
return (function (p1__45886_SHARP_){
return cljs.core.assoc.call(null,p1__45886_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"section","section",-300141526),section,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254),(1));
});})(vec__45987,_,section))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"faqs","faqs",636275568),(function (p__45990){
var vec__45991 = p__45990;
var _ = cljs.core.nth.call(null,vec__45991,(0),null);
var section = cljs.core.nth.call(null,vec__45991,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__45991,_,section){
return (function (p1__45887_SHARP_){
return cljs.core.assoc.call(null,p1__45887_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.Keyword(null,"section","section",-300141526),section);
});})(vec__45991,_,section))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"faq","faq",650618613),(function (p__45994){
var vec__45995 = p__45994;
var _ = cljs.core.nth.call(null,vec__45995,(0),null);
var faq_ref = cljs.core.nth.call(null,vec__45995,(1),null);
var vec__45998 = faq_ref;
var sec = cljs.core.nth.call(null,vec__45998,(0),null);
var id = cljs.core.nth.call(null,vec__45998,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__45998,sec,id,vec__45995,_,faq_ref){
return (function (p1__45888_SHARP_){
return cljs.core.assoc.call(null,p1__45888_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.Keyword(null,"section","section",-300141526),faq_ref);
});})(vec__45998,sec,id,vec__45995,_,faq_ref))
);
}));

return null;
});
prais2.main.dispatch_central.call(null);
prais2.main.on_js_reload = (function prais2$main$on_js_reload(){
cljs.core.enable_console_print_BANG_.call(null);

console.log("reloading");

cljs.core.prn.call(null,"Reloaded");

return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reloading","reloading",961158984),null], null));
});

//# sourceMappingURL=main.js.map?rel=1629050857301