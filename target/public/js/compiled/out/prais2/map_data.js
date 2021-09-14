// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.map_data');
goog.require('cljs.core');
goog.require('prais2.open_layers_map');
goog.require('prais2.data');
goog.require('prais2.content');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('prais2.core');
goog.require('prais2.chrome');
goog.require('prais2.utils');
/**
 * 
 */
prais2.map_data.hospital_item = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (row){
return React.createElement("li",{"onClick": (function (){
return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click-on-map-menu-item","click-on-map-menu-item",-2061025456),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(row))], null));
}), "onTouchStart": (function (){
return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click-on-map-menu-item","click-on-map-menu-item",-2061025456),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(row))], null));
})},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"h-name","h-name",1046194554).cljs$core$IFn$_invoke$arity$1(row)),React.createElement("i",{"className": "fa fa-chevron-right pull-right"}));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"hospital-item");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35575__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35575 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35576__i = 0, G__35576__a = new Array(arguments.length -  0);
while (G__35576__i < G__35576__a.length) {G__35576__a[G__35576__i] = arguments[G__35576__i + 0]; ++G__35576__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35576__a,0);
} 
return G__35575__delegate.call(this,args__27116__auto__);};
G__35575.cljs$lang$maxFixedArity = 0;
G__35575.cljs$lang$applyTo = (function (arglist__35577){
var args__27116__auto__ = cljs.core.seq(arglist__35577);
return G__35575__delegate(args__27116__auto__);
});
G__35575.cljs$core$IFn$_invoke$arity$variadic = G__35575__delegate;
return G__35575;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.map_data.hospital_list = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,(function (){var rows = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"h-name","h-name",1046194554),new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)).call(null,prais2.content.datasources));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.h-nav.col-sm.6.col-md-8","ul.h-nav.col-sm.6.col-md-8",1538684614),cljs.core.map_indexed.call(null,prais2.utils.key_with,cljs.core.map.call(null,prais2.map_data.hospital_item,rows))], null);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-list");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35578__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35578 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35579__i = 0, G__35579__a = new Array(arguments.length -  0);
while (G__35579__i < G__35579__a.length) {G__35579__a[G__35579__i] = arguments[G__35579__i + 0]; ++G__35579__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35579__a,0);
} 
return G__35578__delegate.call(this,args__27116__auto__);};
G__35578.cljs$lang$maxFixedArity = 0;
G__35578.cljs$lang$applyTo = (function (arglist__35580){
var args__27116__auto__ = cljs.core.seq(arglist__35580);
return G__35578__delegate(args__27116__auto__);
});
G__35578.cljs$core$IFn$_invoke$arity$variadic = G__35578__delegate;
return G__35578;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.map_data.render_map_data = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,React.createElement("section",{"className": "col-sm-offset-1 col-sm-10"},React.createElement("div",{"className": "row"},(function (){var attrs35583 = prais2.data.datasource_title.call(null,"Data for ");
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35583))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-9"], null)], null),attrs35583)):{"className": "col-sm-9"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35583))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35583)], null))));
})(),(function (){var attrs35584 = prais2.data.datasource_dropdown.call(null,prais2.core.event_bus);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35584))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-3"], null)], null),attrs35584)):{"className": "col-sm-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35584))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35584)], null))));
})()),React.createElement("div",{"className": "row"},React.createElement("p",{"className": "col-sm-9"},"Choose a hospital from the list or the map to see its data. "))),(((new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)) == null))?(function (){var attrs35588 = prais2.map_data.hospital_list.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35588))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6","col-md-offset-1","col-md-7"], null)], null),attrs35588)):{"className": "col-sm-6 col-md-offset-1 col-md-7"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35588))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35588)], null))));
})():React.createElement("div",{"className": "col-sm-6 col-md-offset-1 col-md-7"},React.createElement("div",{"className": "clearfix"},React.createElement("button",{"type": "button", "onClick": (function (p1__35581_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__35581_SHARP_,new cljs.core.Keyword(null,"reset-map-to-home","reset-map-to-home",1348557515),null,null);
}), "onTouchStart": (function (p1__35582_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__35582_SHARP_,new cljs.core.Keyword(null,"reset-map-to-home","reset-map-to-home",1348557515),null,null);
}), "tabIndex": (0), "className": "btn btn-primary pull-left"},React.createElement("i",{"className": "fa fa-chevron-left"})," Back")),sablono.interpreter.interpret.call(null,prais2.data.hospital_detail.call(null,new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)),null)))),(function (){var attrs35587 = prais2.open_layers_map.hospitals.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35587))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hospital-map","col-sm-6","col-md-4","col-xs-12"], null)], null),attrs35587)):{"className": "hospital-map col-sm-6 col-md-4 col-xs-12"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35587))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35587)], null))));
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title.call(null,"Choose a hospital"),prais2.core.update_description.call(null,"Choose a hospital and view its child heart surgery survival data"),rum.core.reactive], null)),"render-map-data");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35591__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35591 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35592__i = 0, G__35592__a = new Array(arguments.length -  0);
while (G__35592__i < G__35592__a.length) {G__35592__a[G__35592__i] = arguments[G__35592__i + 0]; ++G__35592__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35592__a,0);
} 
return G__35591__delegate.call(this,args__27116__auto__);};
G__35591.cljs$lang$maxFixedArity = 0;
G__35591.cljs$lang$applyTo = (function (arglist__35593){
var args__27116__auto__ = cljs.core.seq(arglist__35593);
return G__35591__delegate(args__27116__auto__);
});
G__35591.cljs$core$IFn$_invoke$arity$variadic = G__35591__delegate;
return G__35591;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
prais2.map_data.px = (function prais2$map_data$px(pixels){
return [cljs.core.str(pixels),cljs.core.str("px")].join('');
});

//# sourceMappingURL=map_data.js.map?rel=1629049578765