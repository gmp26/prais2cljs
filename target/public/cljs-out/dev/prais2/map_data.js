// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.map_data');
goog.require('cljs.core');
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
prais2.map_data.hospital_item = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (row){
return React.createElement("li",({"onClick": (function (){
return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click-on-map-menu-item","click-on-map-menu-item",-2061025456),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(row))], null));
}), "onTouchStart": (function (){
return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click-on-map-menu-item","click-on-map-menu-item",-2061025456),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(row))], null));
})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"h-name","h-name",1046194554).cljs$core$IFn$_invoke$arity$1(row)),React.createElement("i",({"className": "fa fa-chevron-right pull-right"})));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"hospital-item");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22030__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22030 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22031__i = 0, G__22031__a = new Array(arguments.length -  0);
while (G__22031__i < G__22031__a.length) {G__22031__a[G__22031__i] = arguments[G__22031__i + 0]; ++G__22031__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22031__a,0,null);
} 
return G__22030__delegate.call(this,args__16261__auto__);};
G__22030.cljs$lang$maxFixedArity = 0;
G__22030.cljs$lang$applyTo = (function (arglist__22032){
var args__16261__auto__ = cljs.core.seq(arglist__22032);
return G__22030__delegate(args__16261__auto__);
});
G__22030.cljs$core$IFn$_invoke$arity$variadic = G__22030__delegate;
return G__22030;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.map_data.hospital_list = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var rows = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"h-name","h-name",1046194554),new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)).call(null,new cljs.core.Keyword(null,"hosp-data","hosp-data",538848822).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app))));
var attrs22033 = cljs.core.map_indexed.call(null,prais2.utils.key_with,cljs.core.map.call(null,prais2.map_data.hospital_item,rows));
return cljs.core.apply.call(null,React.createElement,"ul",((cljs.core.map_QMARK_.call(null,attrs22033))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["h-nav","col-sm","6","col-md-8"], null)], null),attrs22033)):({"className": "h-nav col-sm 6 col-md-8"})),((cljs.core.map_QMARK_.call(null,attrs22033))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22033)], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-list");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22034__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22034 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22035__i = 0, G__22035__a = new Array(arguments.length -  0);
while (G__22035__i < G__22035__a.length) {G__22035__a[G__22035__i] = arguments[G__22035__i + 0]; ++G__22035__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22035__a,0,null);
} 
return G__22034__delegate.call(this,args__16261__auto__);};
G__22034.cljs$lang$maxFixedArity = 0;
G__22034.cljs$lang$applyTo = (function (arglist__22036){
var args__16261__auto__ = cljs.core.seq(arglist__22036);
return G__22034__delegate(args__16261__auto__);
});
G__22034.cljs$core$IFn$_invoke$arity$variadic = G__22034__delegate;
return G__22034;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.map_data.render_map_data = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,React.createElement("section",({"className": "col-sm-offset-1 col-sm-10"}),React.createElement("div",({"className": "row"}),(function (){var attrs22042 = prais2.data.datasource_title.call(null,"Data for ");
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs22042))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-9"], null)], null),attrs22042)):({"className": "col-sm-9"})),((cljs.core.map_QMARK_.call(null,attrs22042))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22042)], null)));
})(),(function (){var attrs22043 = prais2.data.datasource_dropdown.call(null,prais2.core.event_bus);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs22043))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-3"], null)], null),attrs22043)):({"className": "col-sm-3"})),((cljs.core.map_QMARK_.call(null,attrs22043))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22043)], null)));
})()),React.createElement("div",({"className": "row"}),React.createElement("p",({"className": "col-sm-9"}),"Choose a hospital from the list or the map to see its data. "))),(((new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)) == null))?(function (){var attrs22044 = prais2.map_data.hospital_list.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs22044))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6","col-md-offset-1","col-md-7"], null)], null),attrs22044)):({"className": "col-sm-6 col-md-offset-1 col-md-7"})),((cljs.core.map_QMARK_.call(null,attrs22044))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22044)], null)));
})():React.createElement("div",({"className": "col-sm-6 col-md-offset-1 col-md-7"}),React.createElement("div",({"className": "clearfix"}),React.createElement("button",({"type": "button", "onClick": (function (p1__22037_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__22037_SHARP_,new cljs.core.Keyword(null,"reset-map-to-home","reset-map-to-home",1348557515),null,null);
}), "onTouchStart": (function (p1__22038_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__22038_SHARP_,new cljs.core.Keyword(null,"reset-map-to-home","reset-map-to-home",1348557515),null,null);
}), "tabIndex": (0), "className": "btn btn-primary pull-left"}),React.createElement("i",({"className": "fa fa-chevron-left"}))," Back")),sablono.interpreter.interpret.call(null,prais2.data.hospital_detail.call(null,new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)),null)))),(function (){var attrs22039 = prais2.open_layers_map.hospitals.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs22039))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hospital-map","col-sm-6","col-md-4","col-xs-12"], null)], null),attrs22039)):({"className": "hospital-map col-sm-6 col-md-4 col-xs-12"})),((cljs.core.map_QMARK_.call(null,attrs22039))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22039)], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title.call(null,"Choose a hospital"),rum.core.reactive], null)),"render-map-data");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22047__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22047 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22048__i = 0, G__22048__a = new Array(arguments.length -  0);
while (G__22048__i < G__22048__a.length) {G__22048__a[G__22048__i] = arguments[G__22048__i + 0]; ++G__22048__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22048__a,0,null);
} 
return G__22047__delegate.call(this,args__16261__auto__);};
G__22047.cljs$lang$maxFixedArity = 0;
G__22047.cljs$lang$applyTo = (function (arglist__22049){
var args__16261__auto__ = cljs.core.seq(arglist__22049);
return G__22047__delegate(args__16261__auto__);
});
G__22047.cljs$core$IFn$_invoke$arity$variadic = G__22047__delegate;
return G__22047;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
prais2.map_data.px = (function prais2$map_data$px(pixels){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pixels),"px"].join('');
});

//# sourceMappingURL=map_data.js.map
