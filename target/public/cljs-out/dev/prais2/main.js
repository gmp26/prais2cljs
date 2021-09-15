// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.main');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljsjs.react');
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
goog.require('cljsjs.jquery');
goog.require('prais2.content');
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
prais2.main.debug = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,(function (){var attrs22052 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app))].join('');
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs22052))?sablono.interpreter.attributes.call(null,attrs22052):null),((cljs.core.map_QMARK_.call(null,attrs22052))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22052)], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"debug");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22053__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22053 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22054__i = 0, G__22054__a = new Array(arguments.length -  0);
while (G__22054__i < G__22054__a.length) {G__22054__a[G__22054__i] = arguments[G__22054__i + 0]; ++G__22054__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22054__a,0,null);
} 
return G__22053__delegate.call(this,args__16261__auto__);};
G__22053.cljs$lang$maxFixedArity = 0;
G__22053.cljs$lang$applyTo = (function (arglist__22055){
var args__16261__auto__ = cljs.core.seq(arglist__22055);
return G__22053__delegate(args__16261__auto__);
});
G__22053.cljs$core$IFn$_invoke$arity$variadic = G__22053__delegate;
return G__22053;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.main.para = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (text){
var attrs22056 = text;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs22056))?sablono.interpreter.attributes.call(null,attrs22056):null),((cljs.core.map_QMARK_.call(null,attrs22056))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22056)], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"para");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22057__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22057 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22058__i = 0, G__22058__a = new Array(arguments.length -  0);
while (G__22058__i < G__22058__a.length) {G__22058__a[G__22058__i] = arguments[G__22058__i + 0]; ++G__22058__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22058__a,0,null);
} 
return G__22057__delegate.call(this,args__16261__auto__);};
G__22057.cljs$lang$maxFixedArity = 0;
G__22057.cljs$lang$applyTo = (function (arglist__22059){
var args__16261__auto__ = cljs.core.seq(arglist__22059);
return G__22057__delegate(args__16261__auto__);
});
G__22057.cljs$core$IFn$_invoke$arity$variadic = G__22057__delegate;
return G__22057;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.main.render_404 = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("h1",null,"Page not found. ",(function (){var attrs22060 = prais2.core.href.call(null,"home");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22060))?sablono.interpreter.attributes.call(null,attrs22060):null),((cljs.core.map_QMARK_.call(null,attrs22060))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Try the home page."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22060),"Try the home page."], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"render-404");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22061__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22061 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22062__i = 0, G__22062__a = new Array(arguments.length -  0);
while (G__22062__i < G__22062__a.length) {G__22062__a[G__22062__i] = arguments[G__22062__i + 0]; ++G__22062__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22062__a,0,null);
} 
return G__22061__delegate.call(this,args__16261__auto__);};
G__22061.cljs$lang$maxFixedArity = 0;
G__22061.cljs$lang$applyTo = (function (arglist__22063){
var args__16261__auto__ = cljs.core.seq(arglist__22063);
return G__22061__delegate(args__16261__auto__);
});
G__22061.cljs$core$IFn$_invoke$arity$variadic = G__22061__delegate;
return G__22061;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
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
prais2.main.render_data_tabs = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "col-sm-offset-1 col-sm-10"}),React.createElement("h1",({"key": (1)}),"Explore the data"),React.createElement("p",({"key": (2)}),"In this section you can explore the overall hospital survival statistics published by the National\n                 Congenital Heart Disease Audit (",(function (){var attrs22070 = prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22070))?sablono.interpreter.attributes.call(null,attrs22070):null),((cljs.core.map_QMARK_.call(null,attrs22070))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22070),"NCHDA"], null)));
})(),").\n                 The data covers all hospitals in the UK and Ireland that performed heart surgery in children\n                 (0-16 years old). NCHDA update the data annually and each report covers a 3 year period."),React.createElement("p",({"key": (3)}),"Data on this site comes from the NCHDA annual reports, all of which can be ",(function (){var attrs22071 = prais2.core.href.call(null,"https://nicor4.nicor.org.uk/chd/an_paeds.nsf/vwContent/Analysis Documents?Opendocument",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22071))?sablono.interpreter.attributes.call(null,attrs22071):null),((cljs.core.map_QMARK_.call(null,attrs22071))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["downloaded from the NCHDA website."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22071),"downloaded from the NCHDA website."], null)));
})()),React.createElement("ul",({"key": (4), "role": "tablist", "className": "nav nav-pills"}),React.createElement("li",({"key": (1), "role": "presentation", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"map","map",1371690461))], null))}),(function (){var attrs22072 = prais2.core.href.call(null,"data/map",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"mapped-data",new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__22064_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__22064_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"map","map",1371690461),"data/map");
}));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22072))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"map-tab"], null),attrs22072)):({"id": "map-tab"})),((cljs.core.map_QMARK_.call(null,attrs22072))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-map-marker"}))," Choose a hospital"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22072),React.createElement("i",({"className": "fa fa-map-marker"}))," Choose a hospital"], null)));
})()),React.createElement("li",({"key": (2), "role": "presentation", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"table","table",-564943036))], null))}),(function (){var attrs22077 = prais2.core.href.call(null,"data/table",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"data-table",new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__22065_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__22065_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"table","table",-564943036),"data/table");
}));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22077))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"table-tab"], null),attrs22077)):({"id": "table-tab"})),((cljs.core.map_QMARK_.call(null,attrs22077))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-table"}))," All hospitals"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22077),React.createElement("i",({"className": "fa fa-table"}))," All hospitals"], null)));
})()),React.createElement("li",({"key": (3), "role": "presentation", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244))], null))}),(function (){var attrs22082 = prais2.core.href.call(null,"data/animation",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"mapped-data",new cljs.core.Keyword(null,"role","role",-736691072),"tab",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__22066_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__22066_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"animation","animation",-1248293244),"data/animation");
}));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22082))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"map-tab"], null),attrs22082)):({"id": "map-tab"})),((cljs.core.map_QMARK_.call(null,attrs22082))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-video-camera"}))," Two minute video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22082),React.createElement("i",({"className": "fa fa-video-camera"}))," Two minute video"], null)));
})())),sablono.interpreter.interpret.call(null,((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.post-tab","p.post-tab",-2035453524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(5)], null),"Use the drop down box to change reporting periods. You can watch our ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"data/animation",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__22067_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__22067_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"animation","animation",-1248293244),"data/animation");
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-video-camera","i.fa.fa-video-camera",-1639337819)], null)," two minute video"], null)," which explains how we present the statistics and how to interpret them. Parents who helped us\n       develop the website found it a useful guide to interpreting the data. "], null):null))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.update_title.call(null,"Choose a hospital")], null)),"render-data-tabs");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22087__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22087 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22088__i = 0, G__22088__a = new Array(arguments.length -  0);
while (G__22088__i < G__22088__a.length) {G__22088__a[G__22088__i] = arguments[G__22088__i + 0]; ++G__22088__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22088__a,0,null);
} 
return G__22087__delegate.call(this,args__16261__auto__);};
G__22087.cljs$lang$maxFixedArity = 0;
G__22087.cljs$lang$applyTo = (function (arglist__22089){
var args__16261__auto__ = cljs.core.seq(arglist__22089);
return G__22087__delegate(args__16261__auto__);
});
G__22087.cljs$core$IFn$_invoke$arity$variadic = G__22087__delegate;
return G__22087;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.main.render_video1 = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var attrs22090 = prais2.components.video_player.video_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"video-id","video-id",2132630536),"video1",new cljs.core.Keyword(null,"src","src",-1651076051),"/assets/video01.mp4",new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"preload","preload",1646824722),"",new cljs.core.Keyword(null,"poster","poster",-1616913550),"/assets/video-1-thumbnail.png",new cljs.core.Keyword(null,"track-src","track-src",590501543),"/assets/video01.vtt"], null));
return cljs.core.apply.call(null,React.createElement,"section",((cljs.core.map_QMARK_.call(null,attrs22090))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-offset-1","col-sm-10","col-md-offset-1","col-md-6"], null)], null),attrs22090)):({"className": "col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-6"})),((cljs.core.map_QMARK_.call(null,attrs22090))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22090)], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title.call(null,"Two minute video")], null)),"render-video1");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22091__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22091 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22092__i = 0, G__22092__a = new Array(arguments.length -  0);
while (G__22092__i < G__22092__a.length) {G__22092__a[G__22092__i] = arguments[G__22092__i + 0]; ++G__22092__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22092__a,0,null);
} 
return G__22091__delegate.call(this,args__16261__auto__);};
G__22091.cljs$lang$maxFixedArity = 0;
G__22091.cljs$lang$applyTo = (function (arglist__22093){
var args__16261__auto__ = cljs.core.seq(arglist__22093);
return G__22091__delegate(args__16261__auto__);
});
G__22091.cljs$core$IFn$_invoke$arity$variadic = G__22091__delegate;
return G__22091;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.main.render_data_tab_panes = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (data){
return React.createElement("row",({"className": "tab-content"}),React.createElement("div",({"key": (1), "id": "mapped-data", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-pane","col-sm-12",prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"map","map",1371690461))], null))}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"map","map",1371690461)))?prais2.map_data.render_map_data.call(null):null))),React.createElement("div",({"key": (2), "id": "data-table", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-pane","col-sm-12",prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"table","table",-564943036))], null))}),sablono.interpreter.interpret.call(null,prais2.data.modal.call(null)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"table","table",-564943036)))?prais2.data.list_tab.call(null,prais2.core.app,data,prais2.core.event_bus):null))),React.createElement("div",({"key": (3), "id": "mapped-data", "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-pane","col-sm-12",prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244))], null))}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.col-sm-offset-1.col-sm-10","section.col-sm-offset-1.col-sm-10",515620697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Parents who helped us develop the website found this video useful for interpreting the data.\n                    If you want to know more about how the predicted range of survival is actually calculated, please\n                    watch our ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faqs"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-video-camera","i.fa.fa-video-camera",-1639337819)], null)," second video"], null)," in the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faqs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null)),"Everything Else"], null)," section. "], null)], null):null)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(prais2.main.active_QMARK_.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244)))?prais2.main.render_video1.call(null):null))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"render-data-tab-panes");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22094__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22094 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22095__i = 0, G__22095__a = new Array(arguments.length -  0);
while (G__22095__i < G__22095__a.length) {G__22095__a[G__22095__i] = arguments[G__22095__i + 0]; ++G__22095__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22095__a,0,null);
} 
return G__22094__delegate.call(this,args__16261__auto__);};
G__22094.cljs$lang$maxFixedArity = 0;
G__22094.cljs$lang$applyTo = (function (arglist__22096){
var args__16261__auto__ = cljs.core.seq(arglist__22096);
return G__22094__delegate(args__16261__auto__);
});
G__22094.cljs$core$IFn$_invoke$arity$variadic = G__22094__delegate;
return G__22094;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.main.render_data = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var app = rum.core.react.call(null,prais2.core.app);
var data = prais2.data.table_data.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(app)).call(null);
var attrs22097 = cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.main.render_data_tabs.call(null),prais2.main.render_data_tab_panes.call(null,data)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs22097))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["container-fluid","main-content"], null)], null),attrs22097)):({"className": "container-fluid main-content"})),((cljs.core.map_QMARK_.call(null,attrs22097))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22097)], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.monitor_react.call(null,"DATA>",false)], null)),"render-data");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22098__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22098 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22099__i = 0, G__22099__a = new Array(arguments.length -  0);
while (G__22099__i < G__22099__a.length) {G__22099__a[G__22099__i] = arguments[G__22099__i + 0]; ++G__22099__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22099__a,0,null);
} 
return G__22098__delegate.call(this,args__16261__auto__);};
G__22098.cljs$lang$maxFixedArity = 0;
G__22098.cljs$lang$applyTo = (function (arglist__22100){
var args__16261__auto__ = cljs.core.seq(arglist__22100);
return G__22098__delegate(args__16261__auto__);
});
G__22098.cljs$core$IFn$_invoke$arity$variadic = G__22098__delegate;
return G__22098;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
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
prais2.main.page_choice = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (page,section){
var attrs22101 = ((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"home","home",-74557309)))?(function (){
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
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs22101))?sablono.interpreter.attributes.call(null,attrs22101):null),((cljs.core.map_QMARK_.call(null,attrs22101))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22101)], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,prais2.main.scroll_to_top], null)),"page-choice");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22102__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22102 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22103__i = 0, G__22103__a = new Array(arguments.length -  0);
while (G__22103__i < G__22103__a.length) {G__22103__a[G__22103__i] = arguments[G__22103__i + 0]; ++G__22103__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22103__a,0,null);
} 
return G__22102__delegate.call(this,args__16261__auto__);};
G__22102.cljs$lang$maxFixedArity = 0;
G__22102.cljs$lang$applyTo = (function (arglist__22104){
var args__16261__auto__ = cljs.core.seq(arglist__22104);
return G__22102__delegate(args__16261__auto__);
});
G__22102.cljs$core$IFn$_invoke$arity$variadic = G__22102__delegate;
return G__22102;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.main.render_page = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var map__22105 = rum.core.react.call(null,prais2.core.app);
var map__22105__$1 = ((((!((map__22105 == null)))?(((((map__22105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22105):map__22105);
var page = cljs.core.get.call(null,map__22105__$1,new cljs.core.Keyword(null,"page","page",849072397));
var section = cljs.core.get.call(null,map__22105__$1,new cljs.core.Keyword(null,"section","section",-300141526));
return sablono.interpreter.interpret.call(null,prais2.main.page_choice.call(null,page,section));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"render-page");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22107__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22107 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22108__i = 0, G__22108__a = new Array(arguments.length -  0);
while (G__22108__i < G__22108__a.length) {G__22108__a[G__22108__i] = arguments[G__22108__i + 0]; ++G__22108__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22108__a,0,null);
} 
return G__22107__delegate.call(this,args__16261__auto__);};
G__22107.cljs$lang$maxFixedArity = 0;
G__22107.cljs$lang$applyTo = (function (arglist__22109){
var args__16261__auto__ = cljs.core.seq(arglist__22109);
return G__22107__delegate(args__16261__auto__);
});
G__22107.cljs$core$IFn$_invoke$arity$variadic = G__22107__delegate;
return G__22107;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.main.app_container = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,prais2.main.render_page.call(null));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.bs_popover,prais2.core.bs_tooltip], null)),"app-container");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22110__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22110 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22111__i = 0, G__22111__a = new Array(arguments.length -  0);
while (G__22111__i < G__22111__a.length) {G__22111__a[G__22111__i] = arguments[G__22111__i + 0]; ++G__22111__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22111__a,0,null);
} 
return G__22110__delegate.call(this,args__16261__auto__);};
G__22110.cljs$lang$maxFixedArity = 0;
G__22110.cljs$lang$applyTo = (function (arglist__22112){
var args__16261__auto__ = cljs.core.seq(arglist__22112);
return G__22110__delegate(args__16261__auto__);
});
G__22110.cljs$core$IFn$_invoke$arity$variadic = G__22110__delegate;
return G__22110;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
var temp__5751__auto___22113 = prais2.core.el.call(null,"app");
if(cljs.core.truth_(temp__5751__auto___22113)){
var mount_point_22114 = temp__5751__auto___22113;
rum.core.mount.call(null,prais2.main.app_container.call(null),mount_point_22114);

prais2.content.get_hospital_data.call(null);
} else {
}
/**
 * listen on a published event feed, handling events with the given key
 */
prais2.main.dispatch = (function prais2$main$dispatch(event_feed,event_key,handle){
var in_chan = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,event_feed,event_key,in_chan);

var c__18757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto__,in_chan){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto__,in_chan){
return (function (state_22134){
var state_val_22135 = (state_22134[(1)]);
if((state_val_22135 === (1))){
var state_22134__$1 = state_22134;
var statearr_22136_22149 = state_22134__$1;
(statearr_22136_22149[(2)] = null);

(statearr_22136_22149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22135 === (2))){
var state_22134__$1 = state_22134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22134__$1,(4),in_chan);
} else {
if((state_val_22135 === (3))){
var inst_22132 = (state_22134[(2)]);
var state_22134__$1 = state_22134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22134__$1,inst_22132);
} else {
if((state_val_22135 === (4))){
var inst_22120 = (state_22134[(7)]);
var inst_22120__$1 = (state_22134[(2)]);
var inst_22121 = cljs.core.nth.call(null,inst_22120__$1,(0),null);
var inst_22122 = cljs.core.nth.call(null,inst_22120__$1,(1),null);
var inst_22123 = cljs.core._EQ_.call(null,inst_22121,new cljs.core.Keyword(null,"reloading","reloading",961158984));
var state_22134__$1 = (function (){var statearr_22137 = state_22134;
(statearr_22137[(8)] = inst_22122);

(statearr_22137[(7)] = inst_22120__$1);

return statearr_22137;
})();
if(inst_22123){
var statearr_22138_22150 = state_22134__$1;
(statearr_22138_22150[(1)] = (5));

} else {
var statearr_22139_22151 = state_22134__$1;
(statearr_22139_22151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22135 === (5))){
var inst_22125 = cljs.core.async.close_BANG_.call(null,in_chan);
var state_22134__$1 = state_22134;
var statearr_22140_22152 = state_22134__$1;
(statearr_22140_22152[(2)] = inst_22125);

(statearr_22140_22152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22135 === (6))){
var inst_22120 = (state_22134[(7)]);
var inst_22127 = handle.call(null,inst_22120);
var state_22134__$1 = (function (){var statearr_22141 = state_22134;
(statearr_22141[(9)] = inst_22127);

return statearr_22141;
})();
var statearr_22142_22153 = state_22134__$1;
(statearr_22142_22153[(2)] = null);

(statearr_22142_22153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22135 === (7))){
var inst_22130 = (state_22134[(2)]);
var state_22134__$1 = state_22134;
var statearr_22143_22154 = state_22134__$1;
(statearr_22143_22154[(2)] = inst_22130);

(statearr_22143_22154[(1)] = (3));


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
});})(c__18757__auto__,in_chan))
;
return ((function (switch__18683__auto__,c__18757__auto__,in_chan){
return (function() {
var prais2$main$dispatch_$_state_machine__18684__auto__ = null;
var prais2$main$dispatch_$_state_machine__18684__auto____0 = (function (){
var statearr_22144 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22144[(0)] = prais2$main$dispatch_$_state_machine__18684__auto__);

(statearr_22144[(1)] = (1));

return statearr_22144;
});
var prais2$main$dispatch_$_state_machine__18684__auto____1 = (function (state_22134){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_22134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e22145){var ex__18687__auto__ = e22145;
var statearr_22146_22155 = state_22134;
(statearr_22146_22155[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_22134[(4)]))){
var statearr_22147_22156 = state_22134;
(statearr_22147_22156[(1)] = cljs.core.first.call(null,(state_22134[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22157 = state_22134;
state_22134 = G__22157;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
prais2$main$dispatch_$_state_machine__18684__auto__ = function(state_22134){
switch(arguments.length){
case 0:
return prais2$main$dispatch_$_state_machine__18684__auto____0.call(this);
case 1:
return prais2$main$dispatch_$_state_machine__18684__auto____1.call(this,state_22134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$main$dispatch_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$main$dispatch_$_state_machine__18684__auto____0;
prais2$main$dispatch_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$main$dispatch_$_state_machine__18684__auto____1;
return prais2$main$dispatch_$_state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto__,in_chan))
})();
var state__18759__auto__ = (function (){var statearr_22148 = f__18758__auto__.call(null);
(statearr_22148[(6)] = c__18757__auto__);

return statearr_22148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto__,in_chan))
);

return c__18757__auto__;
});
prais2.main.zoom_to_hospital = (function prais2$main$zoom_to_hospital(p__22159){
var vec__22160 = p__22159;
var _ = cljs.core.nth.call(null,vec__22160,(0),null);
var h_code = cljs.core.nth.call(null,vec__22160,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__22160,(2),null);
cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__22160,_,h_code,___$1){
return (function (p1__22158_SHARP_){
return cljs.core.assoc.call(null,p1__22158_SHARP_,new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396),h_code);
});})(vec__22160,_,h_code,___$1))
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

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558),(function (p__22178){
var vec__22179 = p__22178;
var _ = cljs.core.nth.call(null,vec__22179,(0),null);
var slider_value = cljs.core.nth.call(null,vec__22179,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__22179,_,slider_value){
return (function (p1__22163_SHARP_){
return cljs.core.assoc.call(null,p1__22163_SHARP_,new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558),slider_value);
});})(vec__22179,_,slider_value))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254),(function (p__22182){
var vec__22183 = p__22182;
var _ = cljs.core.nth.call(null,vec__22183,(0),null);
var slider_value = cljs.core.nth.call(null,vec__22183,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__22183,_,slider_value){
return (function (p1__22164_SHARP_){
return cljs.core.assoc.call(null,p1__22164_SHARP_,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254),slider_value);
});})(vec__22183,_,slider_value))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"sort-toggle","sort-toggle",-446677605),(function (p__22186){
var vec__22187 = p__22186;
var _ = cljs.core.nth.call(null,vec__22187,(0),null);
var column_key = cljs.core.nth.call(null,vec__22187,(1),null);
return prais2.data.handle_sort.call(null,prais2.core.app,column_key);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"info-clicked","info-clicked",-495300672),(function (p__22190){
var vec__22191 = p__22190;
var _ = cljs.core.nth.call(null,vec__22191,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22191,(1),null);
return null;
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"change-colour-map","change-colour-map",1053522123),(function (p__22194){
var vec__22195 = p__22194;
var _ = cljs.core.nth.call(null,vec__22195,(0),null);
var value = cljs.core.nth.call(null,vec__22195,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__22195,_,value){
return (function (p1__22165_SHARP_){
return cljs.core.assoc.call(null,p1__22165_SHARP_,new cljs.core.Keyword(null,"theme","theme",-1247880880),(value | (0)));
});})(vec__22195,_,value))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"change-chart-state","change-chart-state",-2056347401),(function (p__22198){
var vec__22199 = p__22198;
var _ = cljs.core.nth.call(null,vec__22199,(0),null);
var value = cljs.core.nth.call(null,vec__22199,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__22199,_,value){
return (function (p1__22166_SHARP_){
return cljs.core.assoc.call(null,p1__22166_SHARP_,new cljs.core.Keyword(null,"chart-state","chart-state",-1208336238),(value | (0)));
});})(vec__22199,_,value))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"open-hospital-modal","open-hospital-modal",14379912),(function (p__22202){
var vec__22203 = p__22202;
var _ = cljs.core.nth.call(null,vec__22203,(0),null);
var h_code = cljs.core.nth.call(null,vec__22203,(1),null);
return prais2.data.open_hospital_modal.call(null,h_code);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"close-hospital-modal","close-hospital-modal",-1904402441),(function (_){
return prais2.data.close_hospital_modal.call(null);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"morph-full-range","morph-full-range",-4333552),(function (_){
return cljs.core.swap_BANG_.call(null,prais2.core.app,(function (p1__22167_SHARP_){
return cljs.core.assoc.call(null,p1__22167_SHARP_,new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558),(0));
}));
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"change-datasource","change-datasource",1490034514),(function (p__22206){
var vec__22207 = p__22206;
var _ = cljs.core.nth.call(null,vec__22207,(0),null);
var new_source = cljs.core.nth.call(null,vec__22207,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__22207,_,new_source){
return (function (p1__22168_SHARP_){
return cljs.core.assoc.call(null,p1__22168_SHARP_,new cljs.core.Keyword(null,"datasource","datasource",-246060221),new_source);
});})(vec__22207,_,new_source))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"click-on-map-marker","click-on-map-marker",-670957068),prais2.main.zoom_to_hospital);

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"click-on-map-menu-item","click-on-map-menu-item",-2061025456),prais2.main.zoom_to_hospital);

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"just-london","just-london",-1714493961),(function (_){
cljs.core.swap_BANG_.call(null,prais2.core.app,(function (p1__22169_SHARP_){
return cljs.core.assoc.call(null,p1__22169_SHARP_,new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396),null);
}));

return prais2.open_layers_map.go_london.call(null);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"reset-map-to-home","reset-map-to-home",1348557515),(function (_){
cljs.core.swap_BANG_.call(null,prais2.core.app,(function (p1__22170_SHARP_){
return cljs.core.assoc.call(null,p1__22170_SHARP_,new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396),null);
}));

return prais2.open_layers_map.go_home.call(null);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"home","home",-74557309),(function (p__22210){
var vec__22211 = p__22210;
var _ = cljs.core.nth.call(null,vec__22211,(0),null);
var section = cljs.core.nth.call(null,vec__22211,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__22211,_,section){
return (function (p1__22171_SHARP_){
return cljs.core.assoc.call(null,p1__22171_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"section","section",-300141526),section);
});})(vec__22211,_,section))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"intro","intro",-886090599),(function (p__22214){
var vec__22215 = p__22214;
var _ = cljs.core.nth.call(null,vec__22215,(0),null);
var section = cljs.core.nth.call(null,vec__22215,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__22215,_,section){
return (function (p1__22172_SHARP_){
return cljs.core.assoc.call(null,p1__22172_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"intro","intro",-886090599),new cljs.core.Keyword(null,"section","section",-300141526),section);
});})(vec__22215,_,section))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"data","data",-232669377),(function (p__22218){
var vec__22219 = p__22218;
var _ = cljs.core.nth.call(null,vec__22219,(0),null);
var section = cljs.core.nth.call(null,vec__22219,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__22219,_,section){
return (function (p1__22173_SHARP_){
return cljs.core.assoc.call(null,p1__22173_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"section","section",-300141526),section,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254),(1));
});})(vec__22219,_,section))
);
}));

prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"faqs","faqs",636275568),(function (p__22222){
var vec__22223 = p__22222;
var _ = cljs.core.nth.call(null,vec__22223,(0),null);
var section = cljs.core.nth.call(null,vec__22223,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__22223,_,section){
return (function (p1__22174_SHARP_){
return cljs.core.assoc.call(null,p1__22174_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.Keyword(null,"section","section",-300141526),section);
});})(vec__22223,_,section))
);
}));

return prais2.main.dispatch.call(null,prais2.core.event_bus_pub,new cljs.core.Keyword(null,"faq","faq",650618613),(function (p__22226){
var vec__22227 = p__22226;
var _ = cljs.core.nth.call(null,vec__22227,(0),null);
var faq_ref = cljs.core.nth.call(null,vec__22227,(1),null);
return cljs.core.swap_BANG_.call(null,prais2.core.app,((function (vec__22227,_,faq_ref){
return (function (p1__22175_SHARP_){
return cljs.core.assoc.call(null,p1__22175_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.Keyword(null,"section","section",-300141526),faq_ref);
});})(vec__22227,_,faq_ref))
);
}));
});
prais2.main.dispatch_central.call(null);
prais2.main.on_js_reload = (function prais2$main$on_js_reload(){
cljs.core.enable_console_print_BANG_.call(null);

console.log("reloading");

cljs.core.prn.call(null,"Reloaded");

return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reloading","reloading",961158984),null], null));
});

//# sourceMappingURL=main.js.map
