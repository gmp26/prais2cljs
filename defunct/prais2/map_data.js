// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
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
prais2.map_data.hospital_item = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (row){
var G__17610 = "li";
var G__17611 = {"onClick": ((function (G__17610){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_on_DASH_map_DASH_menu_DASH_item,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(row))], null));
});})(G__17610))
, "onTouchStart": ((function (G__17610){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_on_DASH_map_DASH_menu_DASH_item,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(row))], null));
});})(G__17610))
};
var G__17612 = sablono.interpreter.interpret(cljs.core.cst$kw$h_DASH_name.cljs$core$IFn$_invoke$arity$1(row));
var G__17613 = (function (){var G__17614 = "i";
var G__17615 = {"className": "fa fa-chevron-right pull-right"};
return React.createElement(G__17614,G__17615);
})();
return React.createElement(G__17610,G__17611,G__17612,G__17613);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"hospital-item");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17616__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17616 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17617__i = 0, G__17617__a = new Array(arguments.length -  0);
while (G__17617__i < G__17617__a.length) {G__17617__a[G__17617__i] = arguments[G__17617__i + 0]; ++G__17617__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17617__a,0);
} 
return G__17616__delegate.call(this,args__8012__auto__);};
G__17616.cljs$lang$maxFixedArity = 0;
G__17616.cljs$lang$applyTo = (function (arglist__17618){
var args__8012__auto__ = cljs.core.seq(arglist__17618);
return G__17616__delegate(args__8012__auto__);
});
G__17616.cljs$core$IFn$_invoke$arity$variadic = G__17616__delegate;
return G__17616;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.map_data.hospital_list = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
return sablono.interpreter.interpret((function (){var rows = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$h_DASH_name,cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app)).call(null,prais2.content.datasources));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$h_DASH_nav$col_DASH_sm$6$col_DASH_md_DASH_8,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,cljs.core.map.cljs$core$IFn$_invoke$arity$2(prais2.map_data.hospital_item,rows))], null);
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-list");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17619__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17619 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17620__i = 0, G__17620__a = new Array(arguments.length -  0);
while (G__17620__i < G__17620__a.length) {G__17620__a[G__17620__i] = arguments[G__17620__i + 0]; ++G__17620__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17620__a,0);
} 
return G__17619__delegate.call(this,args__8012__auto__);};
G__17619.cljs$lang$maxFixedArity = 0;
G__17619.cljs$lang$applyTo = (function (arglist__17621){
var args__8012__auto__ = cljs.core.seq(arglist__17621);
return G__17619__delegate(args__8012__auto__);
});
G__17619.cljs$core$IFn$_invoke$arity$variadic = G__17619__delegate;
return G__17619;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.map_data.render_map_data = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17661 = "div";
var G__17662 = null;
var G__17663 = (function (){var G__17666 = "section";
var G__17667 = {"className": "col-sm-offset-1 col-sm-10"};
var G__17668 = (function (){var G__17670 = "div";
var G__17671 = {"className": "row"};
var G__17672 = (function (){var attrs17624 = (prais2.data.datasource_title.cljs$core$IFn$_invoke$arity$1 ? prais2.data.datasource_title.cljs$core$IFn$_invoke$arity$1("Data for ") : prais2.data.datasource_title.call(null,"Data for "));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17624))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-9"], null)], null),attrs17624], 0))):{"className": "col-sm-9"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17624))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17624)], null))));
})();
var G__17673 = (function (){var attrs17625 = (prais2.data.datasource_dropdown.cljs$core$IFn$_invoke$arity$1 ? prais2.data.datasource_dropdown.cljs$core$IFn$_invoke$arity$1(prais2.core.event_bus) : prais2.data.datasource_dropdown.call(null,prais2.core.event_bus));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17625))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-3"], null)], null),attrs17625], 0))):{"className": "col-sm-3"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17625))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17625)], null))));
})();
return React.createElement(G__17670,G__17671,G__17672,G__17673);
})();
var G__17669 = (function (){var G__17674 = "div";
var G__17675 = {"className": "row"};
var G__17676 = (function (){var G__17677 = "p";
var G__17678 = {"className": "col-sm-9"};
var G__17679 = "Choose a hospital from the list or the map to see its data. ";
return React.createElement(G__17677,G__17678,G__17679);
})();
return React.createElement(G__17674,G__17675,G__17676);
})();
return React.createElement(G__17666,G__17667,G__17668,G__17669);
})();
var G__17664 = (((cljs.core.cst$kw$map_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app)) == null))?(function (){var attrs17643 = (prais2.map_data.hospital_list.cljs$core$IFn$_invoke$arity$0 ? prais2.map_data.hospital_list.cljs$core$IFn$_invoke$arity$0() : prais2.map_data.hospital_list.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17643))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6","col-md-offset-1","col-md-7"], null)], null),attrs17643], 0))):{"className": "col-sm-6 col-md-offset-1 col-md-7"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17643))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17643)], null))));
})():(function (){var G__17680 = "div";
var G__17681 = {"className": "col-sm-6 col-md-offset-1 col-md-7"};
var G__17682 = (function (){var G__17684 = "div";
var G__17685 = {"className": "clearfix"};
var G__17686 = (function (){var G__17687 = "button";
var G__17688 = {"type": "button", "onClick": ((function (G__17687,G__17684,G__17685,G__17680,G__17681,G__17661,G__17662,G__17663){
return (function (p1__17622_SHARP_){
return prais2.core.click__GT_event_bus(p1__17622_SHARP_,cljs.core.cst$kw$reset_DASH_map_DASH_to_DASH_home,null,null);
});})(G__17687,G__17684,G__17685,G__17680,G__17681,G__17661,G__17662,G__17663))
, "onTouchStart": ((function (G__17687,G__17684,G__17685,G__17680,G__17681,G__17661,G__17662,G__17663){
return (function (p1__17623_SHARP_){
return prais2.core.click__GT_event_bus(p1__17623_SHARP_,cljs.core.cst$kw$reset_DASH_map_DASH_to_DASH_home,null,null);
});})(G__17687,G__17684,G__17685,G__17680,G__17681,G__17661,G__17662,G__17663))
, "tabIndex": (0), "className": "btn btn-primary pull-left"};
var G__17689 = (function (){var G__17691 = "i";
var G__17692 = {"className": "fa fa-chevron-left"};
return React.createElement(G__17691,G__17692);
})();
var G__17690 = " Back";
return React.createElement(G__17687,G__17688,G__17689,G__17690);
})();
return React.createElement(G__17684,G__17685,G__17686);
})();
var G__17683 = sablono.interpreter.interpret((function (){var G__17693 = cljs.core.cst$kw$map_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app));
var G__17694 = null;
return (prais2.data.hospital_detail.cljs$core$IFn$_invoke$arity$2 ? prais2.data.hospital_detail.cljs$core$IFn$_invoke$arity$2(G__17693,G__17694) : prais2.data.hospital_detail.call(null,G__17693,G__17694));
})());
return React.createElement(G__17680,G__17681,G__17682,G__17683);
})());
var G__17665 = (function (){var attrs17628 = (prais2.open_layers_map.hospitals.cljs$core$IFn$_invoke$arity$0 ? prais2.open_layers_map.hospitals.cljs$core$IFn$_invoke$arity$0() : prais2.open_layers_map.hospitals.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17628))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hospital-map","col-sm-6","col-md-4","col-xs-12"], null)], null),attrs17628], 0))):{"className": "hospital-map col-sm-6 col-md-4 col-xs-12"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17628))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17628)], null))));
})();
return React.createElement(G__17661,G__17662,G__17663,G__17664,G__17665);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title("Choose a hospital"),rum.core.reactive], null)),"render-map-data");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17695__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17695 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17696__i = 0, G__17696__a = new Array(arguments.length -  0);
while (G__17696__i < G__17696__a.length) {G__17696__a[G__17696__i] = arguments[G__17696__i + 0]; ++G__17696__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17696__a,0);
} 
return G__17695__delegate.call(this,args__8012__auto__);};
G__17695.cljs$lang$maxFixedArity = 0;
G__17695.cljs$lang$applyTo = (function (arglist__17697){
var args__8012__auto__ = cljs.core.seq(arglist__17697);
return G__17695__delegate(args__8012__auto__);
});
G__17695.cljs$core$IFn$_invoke$arity$variadic = G__17695__delegate;
return G__17695;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
prais2.map_data.px = (function prais2$map_data$px(pixels){
return [cljs.core.str(pixels),cljs.core.str("px")].join('');
});
