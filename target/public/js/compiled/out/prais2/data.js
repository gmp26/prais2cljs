// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.data');
goog.require('cljs.core');
goog.require('cljsjs.jquery');
goog.require('cljsjs.bootstrap');
goog.require('cljs.core.async');
goog.require('prais2.core');
goog.require('prais2.content');
goog.require('prais2.utils');
prais2.data.colour_map = (function prais2$data$colour_map(theme){
return prais2.content.colour_map_options.call(null,theme);
});
/**
 * create an index on a table
 */
prais2.data.index_by = (function prais2$data$index_by(table,key_fn){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,key_fn,cljs.core.identity),table));
});
prais2.data.add_markers = (function prais2$data$add_markers(table_rows){
return cljs.core.map_indexed.call(null,(function (index,row){
var lat = (50.7 + (index / (3)));
var lon = (-2.6 + (0.8 * cljs.core.mod.call(null,index,(3))));
return cljs.core.assoc.call(null,row,new cljs.core.Keyword(null,"h-lat","h-lat",-1498479031),lat,new cljs.core.Keyword(null,"h-lon","h-lon",-1878922256),lon);
}),table_rows);
});
prais2.data.make_datasource = (function prais2$data$make_datasource(datasource){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.content.header_row], null),((typeof parseInt(cljs.core.name.call(null,datasource)) === 'number')?datasource.call(null,prais2.content.datasources):prais2.data.add_markers.call(null,datasource.call(null,prais2.content.datasources)))));
});
/**
 * datasource switchable hospital results table
 */
prais2.data.table_data = (function prais2$data$table_data(datasource){
return cljs.core.memoize.call(null,(function (){
return prais2.data.make_datasource.call(null,datasource);
}));
});
/**
 * datasource switchable hospital results indexed by hospital code
 */
prais2.data.rows_by_code = (function prais2$data$rows_by_code(datasource){
return cljs.core.memoize.call(null,(function (){
return prais2.data.index_by.call(null,prais2.data.table_data.call(null,datasource).call(null),(function (p1__31627_SHARP_){
return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(p1__31627_SHARP_));
}));
}));
});
/**
 * sort a column
 */
prais2.data.sort_on_column = (function prais2$data$sort_on_column(app,column_key){
var ap = cljs.core.deref.call(null,app);
var sort_column = new cljs.core.Keyword(null,"sort-by","sort-by",-322599303).cljs$core$IFn$_invoke$arity$1(ap);
var sort_mode = new cljs.core.Keyword(null,"sort-ascending","sort-ascending",-1053925574).cljs$core$IFn$_invoke$arity$1(ap);
if(cljs.core._EQ_.call(null,sort_column,column_key)){
return cljs.core.swap_BANG_.call(null,app,((function (ap,sort_column,sort_mode){
return (function (p1__31628_SHARP_){
return cljs.core.assoc.call(null,p1__31628_SHARP_,new cljs.core.Keyword(null,"sort-ascending","sort-ascending",-1053925574),cljs.core.not.call(null,sort_mode));
});})(ap,sort_column,sort_mode))
);
} else {
return cljs.core.swap_BANG_.call(null,app,((function (ap,sort_column,sort_mode){
return (function (p1__31629_SHARP_){
return cljs.core.assoc.call(null,p1__31629_SHARP_,new cljs.core.Keyword(null,"sort-ascending","sort-ascending",-1053925574),true,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),column_key);
});})(ap,sort_column,sort_mode))
);
}
});
/**
 * handle sort click
 */
prais2.data.handle_sort = (function prais2$data$handle_sort(app,column_key){
return prais2.data.sort_on_column.call(null,app,column_key);
});
prais2.data.chart_width = (100);
prais2.data.min_outer_low = (function prais2$data$min_outer_low(){
return ((2) * ((cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),cljs.core.rest.call(null,prais2.data.table_data.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app))).call(null)))) / (2)) | (0)));
});
/**
 * value to pixel-width scale-factor controlled by slider in [0-1]
 */
prais2.data.bar_scale = (function prais2$data$bar_scale(slider){
return (prais2.data.chart_width / ((100) - (prais2.data.min_outer_low.call(null) * slider)));
});
/**
 * percent-value to slider compensated value
 */
prais2.data.percent__GT_screen = (function prais2$data$percent__GT_screen(slider,value){
var origin = (prais2.data.min_outer_low.call(null) * slider);
return ((100) * ((value - origin) / ((100) - origin)));
});
/**
 * return percentage-width for a bar
 */
prais2.data.bar_width = (function prais2$data$bar_width(slider,value){
return (value * prais2.data.bar_scale.call(null,slider));
});
/**
 * 
 */
prais2.data.bar = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function() {
var G__31630 = null;
var G__31630__5 = (function (slider,hi_val,lo_val,bar_type,fill){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar","div.bar",1411976781),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),fill,new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(prais2.data.bar_width.call(null,slider,(hi_val - lo_val))),cljs.core.str("%")].join('')], null)], null)], null);

return React.createElement("div",{"style": {"backgroundColor": fill, "borderRadius": (0), "width": [cljs.core.str(prais2.data.bar_width.call(null,slider,(hi_val - lo_val))),cljs.core.str("%")].join(''), "textAlign": "right"}, "data-toggle": "tooltip", "data-original-title": [cljs.core.str(prais2.utils.pc.call(null,lo_val)),cljs.core.str(" - "),cljs.core.str(prais2.utils.pc.call(null,hi_val)),cljs.core.str("<br>"),cljs.core.str(bar_type.call(null,prais2.content.bar_comments))].join(''), "data-delay": (0), "data-html": true, "data-trigger": "hover", "data-placement": "bottom", "className": "bar btn"});
});
var G__31630__6 = (function (slider,hi_val,lo_val,bar_type,fill,no_tip){
if(cljs.core._EQ_.call(null,fill,"rgba(255,255,255,0)")){
return React.createElement("div",{"style": {"backgroundColor": fill, "width": [cljs.core.str(prais2.data.bar_width.call(null,slider,(hi_val - lo_val))),cljs.core.str("%")].join('')}, "className": "bar"});
} else {
if(cljs.core.not.call(null,no_tip)){
return React.createElement("div",{"style": {"backgroundColor": fill, "borderRadius": (0), "width": [cljs.core.str(prais2.data.bar_width.call(null,slider,(hi_val - lo_val))),cljs.core.str("%")].join(''), "textAlign": "right"}, "data-toggle": "tooltip", "data-original-title": [cljs.core.str(prais2.utils.pc.call(null,lo_val)),cljs.core.str(" - "),cljs.core.str(prais2.utils.pc.call(null,hi_val)),cljs.core.str("<br>"),cljs.core.str(bar_type.call(null,prais2.content.bar_comments))].join(''), "data-delay": (0), "data-html": true, "data-trigger": "hover", "data-placement": "bottom", "className": "bar btn"});
} else {
return React.createElement("div",{"style": {"backgroundColor": fill, "borderRadius": (0), "width": [cljs.core.str(prais2.data.bar_width.call(null,slider,(hi_val - lo_val))),cljs.core.str("%")].join(''), "textAlign": "right"}, "className": "bar btn"});
}
}
});
G__31630 = function(slider,hi_val,lo_val,bar_type,fill,no_tip){
switch(arguments.length){
case 5:
return G__31630__5.call(this,slider,hi_val,lo_val,bar_type,fill);
case 6:
return G__31630__6.call(this,slider,hi_val,lo_val,bar_type,fill,no_tip);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31630.cljs$core$IFn$_invoke$arity$5 = G__31630__5;
G__31630.cljs$core$IFn$_invoke$arity$6 = G__31630__6;
return G__31630;
})()
);
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"bar");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31631__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31631 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31632__i = 0, G__31632__a = new Array(arguments.length -  0);
while (G__31632__i < G__31632__a.length) {G__31632__a[G__31632__i] = arguments[G__31632__i + 0]; ++G__31632__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31632__a,0);
} 
return G__31631__delegate.call(this,args__27116__auto__);};
G__31631.cljs$lang$maxFixedArity = 0;
G__31631.cljs$lang$applyTo = (function (arglist__31633){
var args__27116__auto__ = cljs.core.seq(arglist__31633);
return G__31631__delegate(args__27116__auto__);
});
G__31631.cljs$core$IFn$_invoke$arity$variadic = G__31631__delegate;
return G__31631;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.dot = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function() { 
var G__31638__delegate = function (slider,size,value,dotty,p__31634){
var vec__31635 = p__31634;
var relative = cljs.core.nth.call(null,vec__31635,(0),null);
return sablono.interpreter.interpret.call(null,(function (){var px_size = prais2.utils.px.call(null,size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dot.btn","div.dot.btn",1346679603),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"tooltip",new cljs.core.Keyword(null,"data-placement","data-placement",166529525),"bottom",new cljs.core.Keyword(null,"data-delay","data-delay",1974747786),(0),new cljs.core.Keyword(null,"data-trigger","data-trigger",56471048),"hover",new cljs.core.Keyword(null,"data-html","data-html",956873927),true,new cljs.core.Keyword(null,"data-original-title","data-original-title",2016782714),[cljs.core.str(prais2.utils.pc.call(null,value)),cljs.core.str("<br>The survival rate")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"dot","dot",1442709401).cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)))),new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(dotty)?"inline-block":"none"),new cljs.core.Keyword(null,"width","width",-384071477),px_size,new cljs.core.Keyword(null,"height","height",1025178622),px_size,new cljs.core.Keyword(null,"top","top",-1856271961),prais2.utils.px.call(null,((10) + (((25) - size) / (2)))),new cljs.core.Keyword(null,"position","position",-2011731912),(cljs.core.truth_(relative)?"relative":"absolute"),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),[cljs.core.str("-"),cljs.core.str(Math.round((size / (2)))),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str(prais2.data.percent__GT_screen.call(null,slider,value)),cljs.core.str("%")].join('')], null)], null)], null);
})());
};
var G__31638 = function (slider,size,value,dotty,var_args){
var p__31634 = null;
if (arguments.length > 4) {
var G__31639__i = 0, G__31639__a = new Array(arguments.length -  4);
while (G__31639__i < G__31639__a.length) {G__31639__a[G__31639__i] = arguments[G__31639__i + 4]; ++G__31639__i;}
  p__31634 = new cljs.core.IndexedSeq(G__31639__a,0);
} 
return G__31638__delegate.call(this,slider,size,value,dotty,p__31634);};
G__31638.cljs$lang$maxFixedArity = 4;
G__31638.cljs$lang$applyTo = (function (arglist__31640){
var slider = cljs.core.first(arglist__31640);
arglist__31640 = cljs.core.next(arglist__31640);
var size = cljs.core.first(arglist__31640);
arglist__31640 = cljs.core.next(arglist__31640);
var value = cljs.core.first(arglist__31640);
arglist__31640 = cljs.core.next(arglist__31640);
var dotty = cljs.core.first(arglist__31640);
var p__31634 = cljs.core.rest(arglist__31640);
return G__31638__delegate(slider,size,value,dotty,p__31634);
});
G__31638.cljs$core$IFn$_invoke$arity$variadic = G__31638__delegate;
return G__31638;
})()
);
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,prais2.core.bs_tooltip], null)),"dot");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31641__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31641 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31642__i = 0, G__31642__a = new Array(arguments.length -  0);
while (G__31642__i < G__31642__a.length) {G__31642__a[G__31642__i] = arguments[G__31642__i + 0]; ++G__31642__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31642__a,0);
} 
return G__31641__delegate.call(this,args__27116__auto__);};
G__31641.cljs$lang$maxFixedArity = 0;
G__31641.cljs$lang$applyTo = (function (arglist__31643){
var args__27116__auto__ = cljs.core.seq(arglist__31643);
return G__31641__delegate(args__27116__auto__);
});
G__31641.cljs$core$IFn$_invoke$arity$variadic = G__31641__delegate;
return G__31641;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.dot_no_tip = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function() { 
var G__31648__delegate = function (slider,size,value,dotty,p__31644){
var vec__31645 = p__31644;
var relative = cljs.core.nth.call(null,vec__31645,(0),null);
return sablono.interpreter.interpret.call(null,(function (){var px_size = prais2.utils.px.call(null,size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dot.btn","div.dot.btn",1346679603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"dot","dot",1442709401).cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)))),new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(dotty)?"inline-block":"none"),new cljs.core.Keyword(null,"width","width",-384071477),px_size,new cljs.core.Keyword(null,"height","height",1025178622),px_size,new cljs.core.Keyword(null,"top","top",-1856271961),prais2.utils.px.call(null,((10) + (((25) - size) / (2)))),new cljs.core.Keyword(null,"position","position",-2011731912),(cljs.core.truth_(relative)?"relative":"absolute"),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str("calc("),cljs.core.str(prais2.data.percent__GT_screen.call(null,slider,value)),cljs.core.str("% - "),cljs.core.str(Math.round((size / (2)))),cljs.core.str("px)")].join('')], null)], null)], null);
})());
};
var G__31648 = function (slider,size,value,dotty,var_args){
var p__31644 = null;
if (arguments.length > 4) {
var G__31649__i = 0, G__31649__a = new Array(arguments.length -  4);
while (G__31649__i < G__31649__a.length) {G__31649__a[G__31649__i] = arguments[G__31649__i + 4]; ++G__31649__i;}
  p__31644 = new cljs.core.IndexedSeq(G__31649__a,0);
} 
return G__31648__delegate.call(this,slider,size,value,dotty,p__31644);};
G__31648.cljs$lang$maxFixedArity = 4;
G__31648.cljs$lang$applyTo = (function (arglist__31650){
var slider = cljs.core.first(arglist__31650);
arglist__31650 = cljs.core.next(arglist__31650);
var size = cljs.core.first(arglist__31650);
arglist__31650 = cljs.core.next(arglist__31650);
var value = cljs.core.first(arglist__31650);
arglist__31650 = cljs.core.next(arglist__31650);
var dotty = cljs.core.first(arglist__31650);
var p__31644 = cljs.core.rest(arglist__31650);
return G__31648__delegate(slider,size,value,dotty,p__31644);
});
G__31648.cljs$core$IFn$_invoke$arity$variadic = G__31648__delegate;
return G__31648;
})()
);
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive], null)),"dot-no-tip");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31651__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31651 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31652__i = 0, G__31652__a = new Array(arguments.length -  0);
while (G__31652__i < G__31652__a.length) {G__31652__a[G__31652__i] = arguments[G__31652__i + 0]; ++G__31652__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31652__a,0);
} 
return G__31651__delegate.call(this,args__27116__auto__);};
G__31651.cljs$lang$maxFixedArity = 0;
G__31651.cljs$lang$applyTo = (function (arglist__31653){
var args__27116__auto__ = cljs.core.seq(arglist__31653);
return G__31651__delegate(args__27116__auto__);
});
G__31651.cljs$core$IFn$_invoke$arity$variadic = G__31651__delegate;
return G__31651;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
prais2.data.extra_right = (40);
prais2.data.last_pad_right = prais2.utils.important.call(null,prais2.utils.px.call(null,prais2.data.extra_right));
prais2.data.dot_size = (function prais2$data$dot_size(slider){
return Math.round(((12) - ((7) * ((1) - slider))));
});
prais2.data.chart_states = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null,new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null,new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null], null), null)], null);
/**
 * 
 */
prais2.data.chart_cell = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (row,slider){
return sablono.interpreter.interpret.call(null,(function (){var ap = rum.core.react.call(null,prais2.core.app);
var colours = prais2.data.colour_map.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(ap));
var bars = prais2.data.chart_states.call(null,new cljs.core.Keyword(null,"chart-state","chart-state",-1208336238).cljs$core$IFn$_invoke$arity$1(ap));
var dotty = new cljs.core.Keyword(null,"dot","dot",1442709401).cljs$core$IFn$_invoke$arity$1(bars);
var dotless = cljs.core.disj.call(null,bars,new cljs.core.Keyword(null,"dot","dot",1442709401));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".chart-cell",".chart-cell",902055045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar-chart","div.bar-chart",55017938),cljs.core.map_indexed.call(null,prais2.utils.key_with,((cljs.core._EQ_.call(null,dotless,cljs.core.PersistentHashSet.EMPTY))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.dot.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):((cljs.core._EQ_.call(null,dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,(100),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"high","high",2027297808),new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.dot.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):((cljs.core._EQ_.call(null,dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,(100),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"high","high",2027297808),new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.dot.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):((cljs.core._EQ_.call(null,dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null,new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,(100),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"high","high",2027297808),new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.dot.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):null)))))], null)], null);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.bs_tooltip,rum.core.reactive], null)),"chart-cell");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31654__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31654 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31655__i = 0, G__31655__a = new Array(arguments.length -  0);
while (G__31655__i < G__31655__a.length) {G__31655__a[G__31655__i] = arguments[G__31655__i + 0]; ++G__31655__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31655__a,0);
} 
return G__31654__delegate.call(this,args__27116__auto__);};
G__31654.cljs$lang$maxFixedArity = 0;
G__31654.cljs$lang$applyTo = (function (arglist__31656){
var args__27116__auto__ = cljs.core.seq(arglist__31656);
return G__31654__delegate(args__27116__auto__);
});
G__31654.cljs$core$IFn$_invoke$arity$variadic = G__31654__delegate;
return G__31654;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.annotated_chart_cell = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (row,slider,bars,text){
return sablono.interpreter.interpret.call(null,(function (){var ap = rum.core.react.call(null,prais2.core.app);
var colours = prais2.data.colour_map.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(ap));
var dotty = new cljs.core.Keyword(null,"dot","dot",1442709401).cljs$core$IFn$_invoke$arity$1(bars);
var dotless = cljs.core.disj.call(null,bars,new cljs.core.Keyword(null,"dot","dot",1442709401));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".annotation",".annotation",-1750866515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".chart-cell",".chart-cell",902055045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar-chart","div.bar-chart",55017938),cljs.core.map_indexed.call(null,prais2.utils.key_with,((cljs.core._EQ_.call(null,dotless,cljs.core.PersistentHashSet.EMPTY))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),"#ffffff",true),prais2.data.dot_no_tip.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):((cljs.core._EQ_.call(null,dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),"#ffffff",true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#ffffff",true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#ffffff",true),prais2.data.bar.call(null,slider,(100),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"high","high",2027297808),"#ffffff",true),prais2.data.dot_no_tip.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):((cljs.core._EQ_.call(null,dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),"#ffffff",true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,(100),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"high","high",2027297808),"#ffffff",true),prais2.data.dot_no_tip.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):((cljs.core._EQ_.call(null,dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null,new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),"#ffffff",true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,(100),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"high","high",2027297808),"#ffffff",true),prais2.data.dot_no_tip.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty,true)], null):null)))))], null)], null)], null);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.bs_tooltip,rum.core.reactive], null)),"annotated-chart-cell");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31657__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31657 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31658__i = 0, G__31658__a = new Array(arguments.length -  0);
while (G__31658__i < G__31658__a.length) {G__31658__a[G__31658__i] = arguments[G__31658__i + 0]; ++G__31658__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31658__a,0);
} 
return G__31657__delegate.call(this,args__27116__auto__);};
G__31657.cljs$lang$maxFixedArity = 0;
G__31657.cljs$lang$applyTo = (function (arglist__31659){
var args__27116__auto__ = cljs.core.seq(arglist__31659);
return G__31657__delegate(args__27116__auto__);
});
G__31657.cljs$core$IFn$_invoke$arity$variadic = G__31657__delegate;
return G__31657;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.tick = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (baseline,value,tick_height){
return sablono.interpreter.interpret.call(null,(function (){var percent = ((100) * ((value - baseline) / ((100) - baseline)));
if((percent >= (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tick",".tick",518219022),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),prais2.utils.pc.call(null,percent),new cljs.core.Keyword(null,"height","height",1025178622),prais2.utils.px.call(null,tick_height),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),[cljs.core.str("1px "),cljs.core.str((((cljs.core._EQ_.call(null,percent,(100))) || (cljs.core._EQ_.call(null,value,(0))))?"solid ":"dashed ")),cljs.core.str("black")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tick-label","span.tick-label",-1338247064),prais2.utils.pc.call(null,value)], null)], null);
} else {
return null;
}
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"tick");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31660__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31660 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31661__i = 0, G__31661__a = new Array(arguments.length -  0);
while (G__31661__i < G__31661__a.length) {G__31661__a[G__31661__i] = arguments[G__31661__i + 0]; ++G__31661__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31661__a,0);
} 
return G__31660__delegate.call(this,args__27116__auto__);};
G__31660.cljs$lang$maxFixedArity = 0;
G__31660.cljs$lang$applyTo = (function (arglist__31662){
var args__27116__auto__ = cljs.core.seq(arglist__31662);
return G__31660__delegate(args__27116__auto__);
});
G__31660.cljs$core$IFn$_invoke$arity$variadic = G__31660__delegate;
return G__31660;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.ticks = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (slider_axis_value,tick_count,tick_height){
return sablono.interpreter.interpret.call(null,(function (){var baseline = (prais2.data.min_outer_low.call(null) * slider_axis_value);
var raw_interval = (((100) - baseline) / (tick_count + (1)));
var interval = (((raw_interval > (10)))?(20):(((raw_interval > (5)))?(10):(((raw_interval > (2)))?(5):(2)
)));
var tick_values = cljs.core.range.call(null,(100),(baseline - (1)),(- interval));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__25443__auto__ = ((function (baseline,raw_interval,interval,tick_values){
return (function prais2$data$iter__31663(s__31664){
return (new cljs.core.LazySeq(null,((function (baseline,raw_interval,interval,tick_values){
return (function (){
var s__31664__$1 = s__31664;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31664__$1);
if(temp__4657__auto__){
var s__31664__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31664__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__31664__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__31666 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__31665 = (0);
while(true){
if((i__31665 < size__25442__auto__)){
var value = cljs.core._nth.call(null,c__25441__auto__,i__31665);
cljs.core.chunk_append.call(null,b__31666,rum.core.with_key.call(null,prais2.data.tick.call(null,baseline,value,tick_height),value));

var G__31667 = (i__31665 + (1));
i__31665 = G__31667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31666),prais2$data$iter__31663.call(null,cljs.core.chunk_rest.call(null,s__31664__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31666),null);
}
} else {
var value = cljs.core.first.call(null,s__31664__$2);
return cljs.core.cons.call(null,rum.core.with_key.call(null,prais2.data.tick.call(null,baseline,value,tick_height),value),prais2$data$iter__31663.call(null,cljs.core.rest.call(null,s__31664__$2)));
}
} else {
return null;
}
break;
}
});})(baseline,raw_interval,interval,tick_values))
,null,null));
});})(baseline,raw_interval,interval,tick_values))
;
return iter__25443__auto__.call(null,tick_values);
})()], null);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"ticks");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31668__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31668 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31669__i = 0, G__31669__a = new Array(arguments.length -  0);
while (G__31669__i < G__31669__a.length) {G__31669__a[G__31669__i] = arguments[G__31669__i + 0]; ++G__31669__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31669__a,0);
} 
return G__31668__delegate.call(this,args__27116__auto__);};
G__31668.cljs$lang$maxFixedArity = 0;
G__31668.cljs$lang$applyTo = (function (arglist__31670){
var args__27116__auto__ = cljs.core.seq(arglist__31670);
return G__31668__delegate(args__27116__auto__);
});
G__31668.cljs$core$IFn$_invoke$arity$variadic = G__31668__delegate;
return G__31668;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.slider_labels = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",{"className": "slider-label"},React.createElement("div",{"key": new cljs.core.Keyword(null,"left","left",-399115937), "className": "pull-left"},React.createElement("i",{"key": new cljs.core.Keyword(null,"full","full",436801220), "className": "fa fa-long-arrow-left"})," full view"),React.createElement("div",{"key": new cljs.core.Keyword(null,"right","right",-452581833), "className": "pull-right"},"full detail ",React.createElement("i",{"key": new cljs.core.Keyword(null,"detail","detail",-1545345025), "className": "fa fa-long-arrow-right"})));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"slider-labels");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31673__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31673 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31674__i = 0, G__31674__a = new Array(arguments.length -  0);
while (G__31674__i < G__31674__a.length) {G__31674__a[G__31674__i] = arguments[G__31674__i + 0]; ++G__31674__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31674__a,0);
} 
return G__31673__delegate.call(this,args__27116__auto__);};
G__31673.cljs$lang$maxFixedArity = 0;
G__31673.cljs$lang$applyTo = (function (arglist__31675){
var args__27116__auto__ = cljs.core.seq(arglist__31675);
return G__31673__delegate(args__27116__auto__);
});
G__31673.cljs$core$IFn$_invoke$arity$variadic = G__31673__delegate;
return G__31673;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
prais2.data.bs_slider = (function prais2$data$bs_slider(hashed_id,change_key){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var slider = (new Slider(hashed_id,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"hide",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1),new cljs.core.Keyword(null,"step","step",1288888124),0.02,new cljs.core.Keyword(null,"value","value",305978217),change_key.call(null,cljs.core.deref.call(null,prais2.core.app))], null))));
var handler = ((function (slider){
return (function (){
return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [change_key,slider.getValue()], null));
});})(slider))
;
slider.on("change",handler);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword("prais2.data","slider","prais2.data/slider",-1252686318),slider,new cljs.core.Keyword("prais2.data","handler","prais2.data/handler",64048683),handler);
}),new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("prais2.data","slider","prais2.data/slider",-1252686318),new cljs.core.Keyword("prais2.data","slider","prais2.data/slider",-1252686318).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var slider = new cljs.core.Keyword("prais2.data","slider","prais2.data/slider",-1252686318).cljs$core$IFn$_invoke$arity$1(state);
var handler = new cljs.core.Keyword("prais2.data","handler","prais2.data/handler",64048683).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
if(cljs.core.truth_(handler)){
slider.off("change",handler);
} else {
}

slider.destroy();
} else {
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("prais2.data","slider","prais2.data/slider",-1252686318),new cljs.core.Keyword("prais2.data","handler","prais2.data/handler",64048683));
})], null);
});
/**
 * 
 */
prais2.data.slider_control = (function (){var render_mixin__27113__auto__ = rum.core.render_state__GT_mixin.call(null,(function (state,value){
return sablono.interpreter.interpret.call(null,(function (){var s = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#slider.slider","#slider.slider",1939704473),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)], null);
var slider = new cljs.core.Keyword("prais2.data","slider","prais2.data/slider",-1252686318).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
slider.setValue(value);
} else {
}

return s;
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bs_slider.call(null,"#slider",new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558)),rum.core.static$], null)),"slider-control");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31676__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31676 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31677__i = 0, G__31677__a = new Array(arguments.length -  0);
while (G__31677__i < G__31677__a.length) {G__31677__a[G__31677__i] = arguments[G__31677__i + 0]; ++G__31677__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31677__a,0);
} 
return G__31676__delegate.call(this,args__27116__auto__);};
G__31676.cljs$lang$maxFixedArity = 0;
G__31676.cljs$lang$applyTo = (function (arglist__31678){
var args__27116__auto__ = cljs.core.seq(arglist__31678);
return G__31676__delegate(args__27116__auto__);
});
G__31676.cljs$core$IFn$_invoke$arity$variadic = G__31676__delegate;
return G__31676;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.detail_slider_control = (function (){var render_mixin__27113__auto__ = rum.core.render_state__GT_mixin.call(null,(function (state,value){
return sablono.interpreter.interpret.call(null,(function (){var s = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#detail-slider.slider","#detail-slider.slider",1434648187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)], null);
var slider = new cljs.core.Keyword("prais2.data","slider","prais2.data/slider",-1252686318).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
slider.setValue(value);
} else {
}

return s;
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bs_slider.call(null,"#detail-slider",new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254)),rum.core.static$], null)),"detail-slider-control");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31679__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31679 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31680__i = 0, G__31680__a = new Array(arguments.length -  0);
while (G__31680__i < G__31680__a.length) {G__31680__a[G__31680__i] = arguments[G__31680__i + 0]; ++G__31680__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31680__a,0);
} 
return G__31679__delegate.call(this,args__27116__auto__);};
G__31679.cljs$lang$maxFixedArity = 0;
G__31679.cljs$lang$applyTo = (function (arglist__31681){
var args__27116__auto__ = cljs.core.seq(arglist__31681);
return G__31679__delegate(args__27116__auto__);
});
G__31679.cljs$core$IFn$_invoke$arity$variadic = G__31679__delegate;
return G__31679;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.map_detail_slider_control = (function (){var render_mixin__27113__auto__ = rum.core.render_state__GT_mixin.call(null,(function (state,value){
return sablono.interpreter.interpret.call(null,(function (){var s = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#map-detail-slider.slider","#map-detail-slider.slider",732387487),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)], null);
var slider = new cljs.core.Keyword("prais2.data","slider","prais2.data/slider",-1252686318).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
slider.setValue(value);
} else {
}

return s;
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bs_slider.call(null,"#map-detail-slider",new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254)),rum.core.static$], null)),"map-detail-slider-control");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31682__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31682 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31683__i = 0, G__31683__a = new Array(arguments.length -  0);
while (G__31683__i < G__31683__a.length) {G__31683__a[G__31683__i] = arguments[G__31683__i + 0]; ++G__31683__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31683__a,0);
} 
return G__31682__delegate.call(this,args__27116__auto__);};
G__31682.cljs$lang$maxFixedArity = 0;
G__31682.cljs$lang$applyTo = (function (arglist__31684){
var args__27116__auto__ = cljs.core.seq(arglist__31684);
return G__31682__delegate(args__27116__auto__);
});
G__31682.cljs$core$IFn$_invoke$arity$variadic = G__31682__delegate;
return G__31682;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.axis_container = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function() {
var G__31686 = null;
var G__31686__1 = (function (slider_axis_value){
return sablono.interpreter.interpret.call(null,prais2.data.axis_container.call(null,slider_axis_value,(69)));
});
var G__31686__2 = (function (slider_axis_value,tick_height){
var attrs31685 = rum.core.with_key.call(null,prais2.data.ticks.call(null,slider_axis_value,(3),tick_height),new cljs.core.Keyword(null,"ticks","ticks",-406190313));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31685))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["axis-container"], null)], null),attrs31685)):{"className": "axis-container"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31685))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31685)], null))));
});
G__31686 = function(slider_axis_value,tick_height){
switch(arguments.length){
case 1:
return G__31686__1.call(this,slider_axis_value);
case 2:
return G__31686__2.call(this,slider_axis_value,tick_height);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31686.cljs$core$IFn$_invoke$arity$1 = G__31686__1;
G__31686.cljs$core$IFn$_invoke$arity$2 = G__31686__2;
return G__31686;
})()
);
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"axis-container");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31687__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31687 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31688__i = 0, G__31688__a = new Array(arguments.length -  0);
while (G__31688__i < G__31688__a.length) {G__31688__a[G__31688__i] = arguments[G__31688__i + 0]; ++G__31688__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31688__a,0);
} 
return G__31687__delegate.call(this,args__27116__auto__);};
G__31687.cljs$lang$maxFixedArity = 0;
G__31687.cljs$lang$applyTo = (function (arglist__31689){
var args__27116__auto__ = cljs.core.seq(arglist__31689);
return G__31687__delegate(args__27116__auto__);
});
G__31687.cljs$core$IFn$_invoke$arity$variadic = G__31687__delegate;
return G__31687;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.slider_title = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (headers){
return React.createElement("p",{"key": new cljs.core.Keyword(null,"p","p",151049309)},((typeof headers === 'string')?sablono.interpreter.interpret.call(null,headers):sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"observed","observed",-2010194632).cljs$core$IFn$_invoke$arity$1(headers)))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"slider-title");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31690__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31690 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31691__i = 0, G__31691__a = new Array(arguments.length -  0);
while (G__31691__i < G__31691__a.length) {G__31691__a[G__31691__i] = arguments[G__31691__i + 0]; ++G__31691__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31691__a,0);
} 
return G__31690__delegate.call(this,args__27116__auto__);};
G__31690.cljs$lang$maxFixedArity = 0;
G__31690.cljs$lang$applyTo = (function (arglist__31692){
var args__27116__auto__ = cljs.core.seq(arglist__31692);
return G__31690__delegate(args__27116__auto__);
});
G__31690.cljs$core$IFn$_invoke$arity$variadic = G__31690__delegate;
return G__31690;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.table_header = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (background,ap,header,column_key){
return React.createElement("th",{"onClick": (function (p1__31693_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(header))){
return prais2.core.click__GT_event_bus.call(null,p1__31693_SHARP_,new cljs.core.Keyword(null,"sort-toggle","sort-toggle",-446677605),column_key,null);
} else {
return null;
}
}), "onTouchStart": (function (p1__31694_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(header))){
return prais2.core.click__GT_event_bus.call(null,p1__31694_SHARP_,new cljs.core.Keyword(null,"sort-toggle","sort-toggle",-446677605),column_key,null);
} else {
return null;
}
}), "style": {"maxWidth": prais2.utils.px.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(header)), "whiteSpace": "normal !important", "verticalAlign": "top", "cursor": (cljs.core.truth_(new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(header))?"pointer":"auto"), "backgroundColor": background, "color": "#ffffff !important"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(header))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("right fa fa-sort"),cljs.core.str(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303).cljs$core$IFn$_invoke$arity$1(ap)))?(cljs.core.truth_(new cljs.core.Keyword(null,"sort-ascending","sort-ascending",-1053925574).cljs$core$IFn$_invoke$arity$1(ap))?"-asc":"-desc"):""))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"zoom","zoom",-1827487038),1.5,new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null)], null)], null):null)),React.createElement("span",{"key": new cljs.core.Keyword(null,"text","text",-1790561697), "style": {"backgroundColor": "none !important", "color": "white !important"}},sablono.interpreter.interpret.call(null,((cljs.core.not_EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?(function (){var info_handler = (function (p1__31695_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__31695_SHARP_,new cljs.core.Keyword(null,"info-clicked","info-clicked",-495300672),column_key,null);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary.btn-xs.info.pull-right","a.btn.btn-primary.btn-xs.info.pull-right",-1112150934),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"data-html","data-html",956873927),new cljs.core.Keyword(null,"data-trigger","data-trigger",56471048),new cljs.core.Keyword(null,"data-content","data-content",-508111796),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"data-placement","data-placement",166529525),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687)],["button",(-1),"true","focus",new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(header),info_handler,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(header),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),"bottom",info_handler,"popover"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-info","i.fa.fa-info",-1798594000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"i","i",-1386841315)], null)], null)], null);
})():null)),React.createElement("br",{"key": new cljs.core.Keyword(null,"br","br",934104792)}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(header))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,prais2.core.bs_popover], null)),"table-header");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31698__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31698 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31699__i = 0, G__31699__a = new Array(arguments.length -  0);
while (G__31699__i < G__31699__a.length) {G__31699__a[G__31699__i] = arguments[G__31699__i + 0]; ++G__31699__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31699__a,0);
} 
return G__31698__delegate.call(this,args__27116__auto__);};
G__31698.cljs$lang$maxFixedArity = 0;
G__31698.cljs$lang$applyTo = (function (arglist__31700){
var args__27116__auto__ = cljs.core.seq(arglist__31700);
return G__31698__delegate(args__27116__auto__);
});
G__31698.cljs$core$IFn$_invoke$arity$variadic = G__31698__delegate;
return G__31698;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.slider_widget = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function() {
var G__31702 = null;
var G__31702__3 = (function (headers,control,slider_axis_value){
return sablono.interpreter.interpret.call(null,prais2.data.slider_widget.call(null,headers,control,slider_axis_value,(69)));
});
var G__31702__4 = (function (headers,control,slider_axis_value,tick_height){
var attrs31701 = cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.slider_title.call(null,headers),prais2.data.slider_labels.call(null),control.call(null,slider_axis_value,(0),(1),0.02),prais2.data.axis_container.call(null,slider_axis_value,tick_height)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31701))?sablono.interpreter.attributes.call(null,attrs31701):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31701))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31701)], null))));
});
G__31702 = function(headers,control,slider_axis_value,tick_height){
switch(arguments.length){
case 3:
return G__31702__3.call(this,headers,control,slider_axis_value);
case 4:
return G__31702__4.call(this,headers,control,slider_axis_value,tick_height);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31702.cljs$core$IFn$_invoke$arity$3 = G__31702__3;
G__31702.cljs$core$IFn$_invoke$arity$4 = G__31702__4;
return G__31702;
})()
);
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"slider-widget");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31703__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31703 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31704__i = 0, G__31704__a = new Array(arguments.length -  0);
while (G__31704__i < G__31704__a.length) {G__31704__a[G__31704__i] = arguments[G__31704__i + 0]; ++G__31704__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31704__a,0);
} 
return G__31703__delegate.call(this,args__27116__auto__);};
G__31703.cljs$lang$maxFixedArity = 0;
G__31703.cljs$lang$applyTo = (function (arglist__31705){
var args__27116__auto__ = cljs.core.seq(arglist__31705);
return G__31703__delegate(args__27116__auto__);
});
G__31703.cljs$core$IFn$_invoke$arity$variadic = G__31703__delegate;
return G__31703;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.table_head = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (ap,headers,column_keys,slider_axis_value){
return React.createElement("thead",null,React.createElement("tr",null,cljs.core.into_array.call(null,(function (){var iter__25443__auto__ = (function prais2$data$iter__31706(s__31707){
return (new cljs.core.LazySeq(null,(function (){
var s__31707__$1 = s__31707;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31707__$1);
if(temp__4657__auto__){
var s__31707__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31707__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__31707__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__31709 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__31708 = (0);
while(true){
if((i__31708 < size__25442__auto__)){
var column_key = cljs.core._nth.call(null,c__25441__auto__,i__31708);
if(cljs.core.truth_(new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(column_key.call(null,headers)))){
cljs.core.chunk_append.call(null,b__31709,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,prais2.data.table_header.call(null,new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(ap))),ap,column_key.call(null,headers),column_key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_key,"head"], null))));

var G__31710 = (i__31708 + (1));
i__31708 = G__31710;
continue;
} else {
var G__31711 = (i__31708 + (1));
i__31708 = G__31711;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31709),prais2$data$iter__31706.call(null,cljs.core.chunk_rest.call(null,s__31707__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31709),null);
}
} else {
var column_key = cljs.core.first.call(null,s__31707__$2);
if(cljs.core.truth_(new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(column_key.call(null,headers)))){
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,prais2.data.table_header.call(null,new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(ap))),ap,column_key.call(null,headers),column_key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_key,"head"], null))),prais2$data$iter__31706.call(null,cljs.core.rest.call(null,s__31707__$2)));
} else {
var G__31712 = cljs.core.rest.call(null,s__31707__$2);
s__31707__$1 = G__31712;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25443__auto__.call(null,column_keys);
})()),React.createElement("th",{"key": new cljs.core.Keyword(null,"last","last",1105735132)},React.createElement("div",{"style": {"height": prais2.utils.px.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"observed","observed",-2010194632).cljs$core$IFn$_invoke$arity$1(headers)))}, "className": "slider-container"},sablono.interpreter.interpret.call(null,prais2.data.slider_widget.call(null,headers,prais2.data.slider_control,slider_axis_value,(748)))))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"table-head");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31713__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31713 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31714__i = 0, G__31714__a = new Array(arguments.length -  0);
while (G__31714__i < G__31714__a.length) {G__31714__a[G__31714__i] = arguments[G__31714__i + 0]; ++G__31714__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31714__a,0);
} 
return G__31713__delegate.call(this,args__27116__auto__);};
G__31713.cljs$lang$maxFixedArity = 0;
G__31713.cljs$lang$applyTo = (function (arglist__31715){
var args__27116__auto__ = cljs.core.seq(arglist__31715);
return G__31713__delegate(args__27116__auto__);
});
G__31713.cljs$core$IFn$_invoke$arity$variadic = G__31713__delegate;
return G__31713;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.table1_core = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (ap,data,sort_key,sort_direction,headers){
return React.createElement("table",{"cellSpacing": "0", "className": "table table-bordered"},sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,prais2.data.table_head.call(null,ap,headers,cljs.core.keys.call(null,headers),new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558).cljs$core$IFn$_invoke$arity$1(ap)),new cljs.core.Keyword(null,"thead","thead",-291875296))),React.createElement("tbody",{"key": new cljs.core.Keyword(null,"tbody","tbody",-80678300)},cljs.core.into_array.call(null,(function (){var iter__25443__auto__ = (function prais2$data$iter__31718(s__31719){
return (new cljs.core.LazySeq(null,(function (){
var s__31719__$1 = s__31719;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31719__$1);
if(temp__4657__auto__){
var s__31719__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31719__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__31719__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__31721 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__31720 = (0);
while(true){
if((i__31720 < size__25442__auto__)){
var row = cljs.core._nth.call(null,c__25441__auto__,i__31720);
var h_code = new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(row);
var slider_axis_value = new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558).cljs$core$IFn$_invoke$arity$1(ap);
cljs.core.chunk_append.call(null,b__31721,React.createElement("tr",{"key": h_code, "className": ((cljs.core._EQ_.call(null,cljs.core.keyword.call(null,h_code),new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046).cljs$core$IFn$_invoke$arity$1(ap)))?"info":"")},cljs.core.into_array.call(null,(function (){var iter__25443__auto__ = ((function (i__31720,h_code,slider_axis_value,row,c__25441__auto__,size__25442__auto__,b__31721,s__31719__$2,temp__4657__auto__){
return (function prais2$data$iter__31718_$_iter__31730(s__31731){
return (new cljs.core.LazySeq(null,((function (i__31720,h_code,slider_axis_value,row,c__25441__auto__,size__25442__auto__,b__31721,s__31719__$2,temp__4657__auto__){
return (function (){
var s__31731__$1 = s__31731;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__31731__$1);
if(temp__4657__auto____$1){
var s__31731__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31731__$2)){
var c__25441__auto____$1 = cljs.core.chunk_first.call(null,s__31731__$2);
var size__25442__auto____$1 = cljs.core.count.call(null,c__25441__auto____$1);
var b__31733 = cljs.core.chunk_buffer.call(null,size__25442__auto____$1);
if((function (){var i__31732 = (0);
while(true){
if((i__31732 < size__25442__auto____$1)){
var column_key = cljs.core._nth.call(null,c__25441__auto____$1,i__31732);
var column_header = column_key.call(null,headers);
var info_handler = ((function (i__31732,s__31731__$1,i__31720,column_header,column_key,c__25441__auto____$1,size__25442__auto____$1,b__31733,s__31731__$2,temp__4657__auto____$1,h_code,slider_axis_value,row,c__25441__auto__,size__25442__auto__,b__31721,s__31719__$2,temp__4657__auto__){
return (function (p1__31716_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__31716_SHARP_,new cljs.core.Keyword(null,"open-hospital-modal","open-hospital-modal",14379912),h_code,null);
});})(i__31732,s__31731__$1,i__31720,column_header,column_key,c__25441__auto____$1,size__25442__auto____$1,b__31733,s__31731__$2,temp__4657__auto____$1,h_code,slider_axis_value,row,c__25441__auto__,size__25442__auto__,b__31721,s__31719__$2,temp__4657__auto__))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(column_header))){
cljs.core.chunk_append.call(null,b__31733,(function (){var attrs31717 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"h-name":""),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),prais2.utils.px.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(column_header)),new cljs.core.Keyword(null,"white-space","white-space",-707351930),"normal",new cljs.core.Keyword(null,"height","height",1025178622),prais2.utils.px.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(column_header))], null))], null),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),info_handler,new cljs.core.Keyword(null,"on-click","on-click",1632826543),info_handler], null):null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs31717))?sablono.interpreter.attributes.call(null,attrs31717):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31717))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",{"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")}},sablono.interpreter.interpret.call(null,[cljs.core.str(column_key.call(null,row)),cljs.core.str(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31717),React.createElement("div",{"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")}},sablono.interpreter.interpret.call(null,[cljs.core.str(column_key.call(null,row)),cljs.core.str(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null))));
})());

var G__31738 = (i__31732 + (1));
i__31732 = G__31738;
continue;
} else {
var G__31739 = (i__31732 + (1));
i__31732 = G__31739;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31733),prais2$data$iter__31718_$_iter__31730.call(null,cljs.core.chunk_rest.call(null,s__31731__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31733),null);
}
} else {
var column_key = cljs.core.first.call(null,s__31731__$2);
var column_header = column_key.call(null,headers);
var info_handler = ((function (s__31731__$1,i__31720,column_header,column_key,s__31731__$2,temp__4657__auto____$1,h_code,slider_axis_value,row,c__25441__auto__,size__25442__auto__,b__31721,s__31719__$2,temp__4657__auto__){
return (function (p1__31716_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__31716_SHARP_,new cljs.core.Keyword(null,"open-hospital-modal","open-hospital-modal",14379912),h_code,null);
});})(s__31731__$1,i__31720,column_header,column_key,s__31731__$2,temp__4657__auto____$1,h_code,slider_axis_value,row,c__25441__auto__,size__25442__auto__,b__31721,s__31719__$2,temp__4657__auto__))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(column_header))){
return cljs.core.cons.call(null,(function (){var attrs31717 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"h-name":""),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),prais2.utils.px.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(column_header)),new cljs.core.Keyword(null,"white-space","white-space",-707351930),"normal",new cljs.core.Keyword(null,"height","height",1025178622),prais2.utils.px.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(column_header))], null))], null),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),info_handler,new cljs.core.Keyword(null,"on-click","on-click",1632826543),info_handler], null):null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs31717))?sablono.interpreter.attributes.call(null,attrs31717):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31717))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",{"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")}},sablono.interpreter.interpret.call(null,[cljs.core.str(column_key.call(null,row)),cljs.core.str(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31717),React.createElement("div",{"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")}},sablono.interpreter.interpret.call(null,[cljs.core.str(column_key.call(null,row)),cljs.core.str(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null))));
})(),prais2$data$iter__31718_$_iter__31730.call(null,cljs.core.rest.call(null,s__31731__$2)));
} else {
var G__31740 = cljs.core.rest.call(null,s__31731__$2);
s__31731__$1 = G__31740;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__31720,h_code,slider_axis_value,row,c__25441__auto__,size__25442__auto__,b__31721,s__31719__$2,temp__4657__auto__))
,null,null));
});})(i__31720,h_code,slider_axis_value,row,c__25441__auto__,size__25442__auto__,b__31721,s__31719__$2,temp__4657__auto__))
;
return iter__25443__auto__.call(null,cljs.core.keys.call(null,headers));
})()),React.createElement("td",{"key": [h_code,new cljs.core.Keyword(null,"bars","bars",-586907130)], "style": {"backgroundColor": "#f0f0f0"}},sablono.interpreter.interpret.call(null,prais2.data.chart_cell.call(null,row,slider_axis_value)))));

var G__31741 = (i__31720 + (1));
i__31720 = G__31741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31721),prais2$data$iter__31718.call(null,cljs.core.chunk_rest.call(null,s__31719__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31721),null);
}
} else {
var row = cljs.core.first.call(null,s__31719__$2);
var h_code = new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(row);
var slider_axis_value = new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558).cljs$core$IFn$_invoke$arity$1(ap);
return cljs.core.cons.call(null,React.createElement("tr",{"key": h_code, "className": ((cljs.core._EQ_.call(null,cljs.core.keyword.call(null,h_code),new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046).cljs$core$IFn$_invoke$arity$1(ap)))?"info":"")},cljs.core.into_array.call(null,(function (){var iter__25443__auto__ = ((function (h_code,slider_axis_value,row,s__31719__$2,temp__4657__auto__){
return (function prais2$data$iter__31718_$_iter__31734(s__31735){
return (new cljs.core.LazySeq(null,((function (h_code,slider_axis_value,row,s__31719__$2,temp__4657__auto__){
return (function (){
var s__31735__$1 = s__31735;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__31735__$1);
if(temp__4657__auto____$1){
var s__31735__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31735__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__31735__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__31737 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__31736 = (0);
while(true){
if((i__31736 < size__25442__auto__)){
var column_key = cljs.core._nth.call(null,c__25441__auto__,i__31736);
var column_header = column_key.call(null,headers);
var info_handler = ((function (i__31736,s__31735__$1,column_header,column_key,c__25441__auto__,size__25442__auto__,b__31737,s__31735__$2,temp__4657__auto____$1,h_code,slider_axis_value,row,s__31719__$2,temp__4657__auto__){
return (function (p1__31716_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__31716_SHARP_,new cljs.core.Keyword(null,"open-hospital-modal","open-hospital-modal",14379912),h_code,null);
});})(i__31736,s__31735__$1,column_header,column_key,c__25441__auto__,size__25442__auto__,b__31737,s__31735__$2,temp__4657__auto____$1,h_code,slider_axis_value,row,s__31719__$2,temp__4657__auto__))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(column_header))){
cljs.core.chunk_append.call(null,b__31737,(function (){var attrs31717 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"h-name":""),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),prais2.utils.px.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(column_header)),new cljs.core.Keyword(null,"white-space","white-space",-707351930),"normal",new cljs.core.Keyword(null,"height","height",1025178622),prais2.utils.px.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(column_header))], null))], null),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),info_handler,new cljs.core.Keyword(null,"on-click","on-click",1632826543),info_handler], null):null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs31717))?sablono.interpreter.attributes.call(null,attrs31717):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31717))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",{"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")}},sablono.interpreter.interpret.call(null,[cljs.core.str(column_key.call(null,row)),cljs.core.str(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31717),React.createElement("div",{"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")}},sablono.interpreter.interpret.call(null,[cljs.core.str(column_key.call(null,row)),cljs.core.str(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null))));
})());

var G__31742 = (i__31736 + (1));
i__31736 = G__31742;
continue;
} else {
var G__31743 = (i__31736 + (1));
i__31736 = G__31743;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31737),prais2$data$iter__31718_$_iter__31734.call(null,cljs.core.chunk_rest.call(null,s__31735__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31737),null);
}
} else {
var column_key = cljs.core.first.call(null,s__31735__$2);
var column_header = column_key.call(null,headers);
var info_handler = ((function (s__31735__$1,column_header,column_key,s__31735__$2,temp__4657__auto____$1,h_code,slider_axis_value,row,s__31719__$2,temp__4657__auto__){
return (function (p1__31716_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__31716_SHARP_,new cljs.core.Keyword(null,"open-hospital-modal","open-hospital-modal",14379912),h_code,null);
});})(s__31735__$1,column_header,column_key,s__31735__$2,temp__4657__auto____$1,h_code,slider_axis_value,row,s__31719__$2,temp__4657__auto__))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(column_header))){
return cljs.core.cons.call(null,(function (){var attrs31717 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"h-name":""),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),prais2.utils.px.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(column_header)),new cljs.core.Keyword(null,"white-space","white-space",-707351930),"normal",new cljs.core.Keyword(null,"height","height",1025178622),prais2.utils.px.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(column_header))], null))], null),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),info_handler,new cljs.core.Keyword(null,"on-click","on-click",1632826543),info_handler], null):null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs31717))?sablono.interpreter.attributes.call(null,attrs31717):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31717))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",{"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")}},sablono.interpreter.interpret.call(null,[cljs.core.str(column_key.call(null,row)),cljs.core.str(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31717),React.createElement("div",{"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")}},sablono.interpreter.interpret.call(null,[cljs.core.str(column_key.call(null,row)),cljs.core.str(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null))));
})(),prais2$data$iter__31718_$_iter__31734.call(null,cljs.core.rest.call(null,s__31735__$2)));
} else {
var G__31744 = cljs.core.rest.call(null,s__31735__$2);
s__31735__$1 = G__31744;
continue;
}
}
} else {
return null;
}
break;
}
});})(h_code,slider_axis_value,row,s__31719__$2,temp__4657__auto__))
,null,null));
});})(h_code,slider_axis_value,row,s__31719__$2,temp__4657__auto__))
;
return iter__25443__auto__.call(null,cljs.core.keys.call(null,headers));
})()),React.createElement("td",{"key": [h_code,new cljs.core.Keyword(null,"bars","bars",-586907130)], "style": {"backgroundColor": "#f0f0f0"}},sablono.interpreter.interpret.call(null,prais2.data.chart_cell.call(null,row,slider_axis_value)))),prais2$data$iter__31718.call(null,cljs.core.rest.call(null,s__31719__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25443__auto__.call(null,(cljs.core.truth_(sort_key)?(function (){var sorted = cljs.core.sort_by.call(null,sort_key,cljs.core.rest.call(null,data));
if(cljs.core.truth_(sort_direction)){
return sorted;
} else {
return cljs.core.reverse.call(null,sorted);
}
})():cljs.core.rest.call(null,data)));
})())));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"table1-core");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31745__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31745 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31746__i = 0, G__31746__a = new Array(arguments.length -  0);
while (G__31746__i < G__31746__a.length) {G__31746__a[G__31746__i] = arguments[G__31746__i + 0]; ++G__31746__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31746__a,0);
} 
return G__31745__delegate.call(this,args__27116__auto__);};
G__31745.cljs$lang$maxFixedArity = 0;
G__31745.cljs$lang$applyTo = (function (arglist__31747){
var args__27116__auto__ = cljs.core.seq(arglist__31747);
return G__31745__delegate(args__27116__auto__);
});
G__31745.cljs$core$IFn$_invoke$arity$variadic = G__31745__delegate;
return G__31745;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.table1 = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (app,data){
return React.createElement("div",{"className": "table-container"},(function (){var attrs31748 = prais2.data.table1_core.call(null,rum.core.react.call(null,app),data,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app)),new cljs.core.Keyword(null,"sort-ascending","sort-ascending",-1053925574).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app)),cljs.core.first.call(null,data));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31748))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data-table"], null)], null),attrs31748)):{"className": "data-table"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31748))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31748)], null))));
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"table1");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31749__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31749 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31750__i = 0, G__31750__a = new Array(arguments.length -  0);
while (G__31750__i < G__31750__a.length) {G__31750__a[G__31750__i] = arguments[G__31750__i + 0]; ++G__31750__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31750__a,0);
} 
return G__31749__delegate.call(this,args__27116__auto__);};
G__31749.cljs$lang$maxFixedArity = 0;
G__31749.cljs$lang$applyTo = (function (arglist__31751){
var args__27116__auto__ = cljs.core.seq(arglist__31751);
return G__31749__delegate(args__27116__auto__);
});
G__31749.cljs$core$IFn$_invoke$arity$variadic = G__31749__delegate;
return G__31749;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.integer_option = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (n){
return sablono.interpreter.create_element.call(null,"option",{"value": n},sablono.interpreter.interpret.call(null,n));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"integer-option");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31752__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31752 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31753__i = 0, G__31753__a = new Array(arguments.length -  0);
while (G__31753__i < G__31753__a.length) {G__31753__a[G__31753__i] = arguments[G__31753__i + 0]; ++G__31753__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31753__a,0);
} 
return G__31752__delegate.call(this,args__27116__auto__);};
G__31752.cljs$lang$maxFixedArity = 0;
G__31752.cljs$lang$applyTo = (function (arglist__31754){
var args__27116__auto__ = cljs.core.seq(arglist__31754);
return G__31752__delegate(args__27116__auto__);
});
G__31752.cljs$core$IFn$_invoke$arity$variadic = G__31752__delegate;
return G__31752;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
prais2.data.year_range = (function prais2$data$year_range(year,m1,m2){
var y1 = (year - (3));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y1","y1",589123466),y1,new cljs.core.Keyword(null,"mrange","mrange",607099414),[cljs.core.str(m1),cljs.core.str(" "),cljs.core.str(y1),cljs.core.str(" \u2014 "),cljs.core.str(m2),cljs.core.str(" "),cljs.core.str(year)].join(''),new cljs.core.Keyword(null,"option","option",65132272),[cljs.core.str(y1),cljs.core.str(" \u2014 "),cljs.core.str(year)].join('')], null);
});
prais2.data.end_year = (function prais2$data$end_year(){
return (cljs.core.name.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app))) | (0));
});
/**
 * 
 */
prais2.data.key_option = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (year){
return sablono.interpreter.create_element.call(null,"option",{"value": [cljs.core.str(year)].join('')},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"option","option",65132272).cljs$core$IFn$_invoke$arity$1(prais2.data.year_range.call(null,year,"April","March"))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"key-option");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31755__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31755 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31756__i = 0, G__31756__a = new Array(arguments.length -  0);
while (G__31756__i < G__31756__a.length) {G__31756__a[G__31756__i] = arguments[G__31756__i + 0]; ++G__31756__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31756__a,0);
} 
return G__31755__delegate.call(this,args__27116__auto__);};
G__31755.cljs$lang$maxFixedArity = 0;
G__31755.cljs$lang$applyTo = (function (arglist__31757){
var args__27116__auto__ = cljs.core.seq(arglist__31757);
return G__31755__delegate(args__27116__auto__);
});
G__31755.cljs$core$IFn$_invoke$arity$variadic = G__31755__delegate;
return G__31755;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.datasource_dropdown = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (event_bus){
return React.createElement("div",{"className": "form-group"},React.createElement("label-for",{"htmlFor": "data-selector"},"Change reporting period"),React.createElement("select",{"id": "data-selector", "value": cljs.core.name.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app))), "onChange": (function (p1__31758_SHARP_){
return cljs.core.async.put_BANG_.call(null,event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-datasource","change-datasource",1490034514),cljs.core.keyword.call(null,p1__31758_SHARP_.target.value)], null));
}), "className": "form-control input-sm"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,prais2.utils.key_with,(function (){var iter__25443__auto__ = (function prais2$data$iter__31761(s__31762){
return (new cljs.core.LazySeq(null,(function (){
var s__31762__$1 = s__31762;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31762__$1);
if(temp__4657__auto__){
var s__31762__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31762__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__31762__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__31764 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__31763 = (0);
while(true){
if((i__31763 < size__25442__auto__)){
var year = cljs.core._nth.call(null,c__25441__auto__,i__31763);
cljs.core.chunk_append.call(null,b__31764,prais2.data.key_option.call(null,year));

var G__31765 = (i__31763 + (1));
i__31763 = G__31765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31764),prais2$data$iter__31761.call(null,cljs.core.chunk_rest.call(null,s__31762__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31764),null);
}
} else {
var year = cljs.core.first.call(null,s__31762__$2);
return cljs.core.cons.call(null,prais2.data.key_option.call(null,year),prais2$data$iter__31761.call(null,cljs.core.rest.call(null,s__31762__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25443__auto__.call(null,cljs.core.range.call(null,(2013),(2020)));
})()))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"datasource-dropdown");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31766__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31766 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31767__i = 0, G__31767__a = new Array(arguments.length -  0);
while (G__31767__i < G__31767__a.length) {G__31767__a[G__31767__i] = arguments[G__31767__i + 0]; ++G__31767__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31767__a,0);
} 
return G__31766__delegate.call(this,args__27116__auto__);};
G__31766.cljs$lang$maxFixedArity = 0;
G__31766.cljs$lang$applyTo = (function (arglist__31768){
var args__27116__auto__ = cljs.core.seq(arglist__31768);
return G__31766__delegate(args__27116__auto__);
});
G__31766.cljs$core$IFn$_invoke$arity$variadic = G__31766__delegate;
return G__31766;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.datasource_title = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (prefix){
var attrs31769 = [cljs.core.str(prefix),cljs.core.str(new cljs.core.Keyword(null,"mrange","mrange",607099414).cljs$core$IFn$_invoke$arity$1(prais2.data.year_range.call(null,prais2.data.end_year.call(null),"April","March")))].join('');
return cljs.core.apply.call(null,React.createElement,"h2",((cljs.core.map_QMARK_.call(null,attrs31769))?sablono.interpreter.attributes.call(null,attrs31769):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31769))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31769)], null))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"datasource-title");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31770__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31770 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31771__i = 0, G__31771__a = new Array(arguments.length -  0);
while (G__31771__i < G__31771__a.length) {G__31771__a[G__31771__i] = arguments[G__31771__i + 0]; ++G__31771__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31771__a,0);
} 
return G__31770__delegate.call(this,args__27116__auto__);};
G__31770.cljs$lang$maxFixedArity = 0;
G__31770.cljs$lang$applyTo = (function (arglist__31772){
var args__27116__auto__ = cljs.core.seq(arglist__31772);
return G__31770__delegate(args__27116__auto__);
});
G__31770.cljs$core$IFn$_invoke$arity$variadic = G__31770__delegate;
return G__31770;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.list_tab = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (app,data,event_bus){
return React.createElement("div",null,React.createElement("div",{"className": "col-sm-offset-1 col-sm-10"},React.createElement("div",{"className": "row"},(function (){var attrs31773 = prais2.data.datasource_title.call(null,"Data for ");
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31773))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-9"], null)], null),attrs31773)):{"className": "col-sm-9"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31773))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31773)], null))));
})(),(function (){var attrs31774 = prais2.data.datasource_dropdown.call(null,event_bus);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31774))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-3"], null)], null),attrs31774)):{"className": "col-sm-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31774))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31774)], null))));
})()),React.createElement("p",{"className": "col-sm-9"},"These are the hospitals in the UK and Ireland that performed heart surgery in children over this period\n     (0-16 years old)."),React.createElement("p",{"className": "col-sm-9"},"Clicking on a hospital will bring up specific information for\n     that hospital along with an interpretation of its survival rate. It is ",React.createElement("strong",null,"only")," valid to compare a hospital's survival\n     rate to its predicted range of survival and not to other hospitals. Read more about this in ",(function (){var attrs31779 = prais2.core.href.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs31779))?sablono.interpreter.attributes.call(null,attrs31779):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31779))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31779),"Everything Else."], null))));
})()),React.createElement("p",{"className": "col-sm-9"},(function (){var attrs31780 = prais2.core.href.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs31780))?sablono.interpreter.attributes.call(null,attrs31780):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31780))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31780),"The Everything Else"], null))));
})()," section also tells you more about the predicted range and what\n     happens if a hospital\u2019s survival rate is outside its range."),React.createElement("p",{"className": "col-sm-9"},"You can hover over or tap on the charts to bring up more information.")),sablono.interpreter.interpret.call(null,prais2.data.table1.call(null,app,data)));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.update_title.call(null,"All hospitals"),prais2.core.update_description.call(null,"View all hospital child heart surgery survival data")], null)),"list-tab");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31783__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31783 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31784__i = 0, G__31784__a = new Array(arguments.length -  0);
while (G__31784__i < G__31784__a.length) {G__31784__a[G__31784__i] = arguments[G__31784__i + 0]; ++G__31784__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31784__a,0);
} 
return G__31783__delegate.call(this,args__27116__auto__);};
G__31783.cljs$lang$maxFixedArity = 0;
G__31783.cljs$lang$applyTo = (function (arglist__31785){
var args__27116__auto__ = cljs.core.seq(arglist__31785);
return G__31783__delegate(args__27116__auto__);
});
G__31783.cljs$core$IFn$_invoke$arity$variadic = G__31783__delegate;
return G__31783;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.interpretation = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (row,close_modal){
return sablono.interpreter.interpret.call(null,(function (){var survival_rate = new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row);
if((survival_rate < new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row))){
return prais2.content.outer_low_comment.call(null,close_modal);
} else {
if((survival_rate < new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row))){
return prais2.content.low_comment.call(null,close_modal);
} else {
if((survival_rate <= new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row))){
return prais2.content.inner_comment.call(null,close_modal);
} else {
if((survival_rate <= new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row))){
return prais2.content.high_comment.call(null,close_modal);
} else {
if((survival_rate > new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row))){
return prais2.content.outer_high_comment.call(null,close_modal);
} else {
return "Oops - no text for this";

}
}
}
}
}
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"interpretation");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31786__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31786 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31787__i = 0, G__31787__a = new Array(arguments.length -  0);
while (G__31787__i < G__31787__a.length) {G__31787__a[G__31787__i] = arguments[G__31787__i + 0]; ++G__31787__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31787__a,0);
} 
return G__31786__delegate.call(this,args__27116__auto__);};
G__31786.cljs$lang$maxFixedArity = 0;
G__31786.cljs$lang$applyTo = (function (arglist__31788){
var args__27116__auto__ = cljs.core.seq(arglist__31788);
return G__31786__delegate(args__27116__auto__);
});
G__31786.cljs$core$IFn$_invoke$arity$variadic = G__31786__delegate;
return G__31786;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.hospital_charities = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (h_code){
return sablono.interpreter.interpret.call(null,(function (){var meta = h_code.call(null,prais2.content.hospital_metadata);
var vec__31789 = meta;
var link1 = cljs.core.nth.call(null,vec__31789,(0),null);
var link2 = cljs.core.nth.call(null,vec__31789,(1),null);
var link3 = cljs.core.nth.call(null,vec__31789,(2),null);
var link4 = cljs.core.nth.call(null,vec__31789,(3),null);
var link5 = cljs.core.nth.call(null,vec__31789,(4),null);
if(cljs.core.truth_(link1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Further web information"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),link1.call(null,(1)),link1.call(null,(2))], null)], null),(cljs.core.truth_(link2)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),link2.call(null,(1)),link2.call(null,(2))], null)], null):null),(cljs.core.truth_(link3)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),link3.call(null,(1)),link3.call(null,(2))], null)], null):null),(cljs.core.truth_(link4)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),link4.call(null,(1)),link4.call(null,(2))], null)], null):null),(cljs.core.truth_(link5)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),link5.call(null,(1)),link5.call(null,(2))], null)], null):null)], null)], null);
} else {
return null;
}
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-charities");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31792__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31792 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31793__i = 0, G__31793__a = new Array(arguments.length -  0);
while (G__31793__i < G__31793__a.length) {G__31793__a[G__31793__i] = arguments[G__31793__i + 0]; ++G__31793__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31793__a,0);
} 
return G__31792__delegate.call(this,args__27116__auto__);};
G__31792.cljs$lang$maxFixedArity = 0;
G__31792.cljs$lang$applyTo = (function (arglist__31794){
var args__27116__auto__ = cljs.core.seq(arglist__31794);
return G__31792__delegate(args__27116__auto__);
});
G__31792.cljs$core$IFn$_invoke$arity$variadic = G__31792__delegate;
return G__31792;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.sample_hospital_intro_text = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("i",{"key": new cljs.core.Keyword(null,"sintros","sintros",-1563048011)},React.createElement("p",{"key": (1), "className": "note"},"You can move the slider button left to see the rates plotted on the full 0-100% range of possible\n   survival rates, or right to focus on the detail near 100%"),React.createElement("p",{"key": (2), "className": "note"},"Mouse over or click on the chart bars and the dot for explanations of their meaning."));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"sample-hospital-intro-text");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31797__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31797 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31798__i = 0, G__31798__a = new Array(arguments.length -  0);
while (G__31798__i < G__31798__a.length) {G__31798__a[G__31798__i] = arguments[G__31798__i + 0]; ++G__31798__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31798__a,0);
} 
return G__31797__delegate.call(this,args__27116__auto__);};
G__31797.cljs$lang$maxFixedArity = 0;
G__31797.cljs$lang$applyTo = (function (arglist__31799){
var args__27116__auto__ = cljs.core.seq(arglist__31799);
return G__31797__delegate(args__27116__auto__);
});
G__31797.cljs$core$IFn$_invoke$arity$variadic = G__31797__delegate;
return G__31797;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.hospital_data = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (h_code){
return sablono.interpreter.interpret.call(null,(function (){var datasource = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app));
var selected_row = h_code.call(null,prais2.data.rows_by_code.call(null,datasource).call(null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-summary",".data-summary",1943796564),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"orange"], null)], null)," Hover over or tap on the chart areas for more detail on this hospital. "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"The hospital performed ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"n-ops","n-ops",921161673).cljs$core$IFn$_invoke$arity$1(selected_row),"  operations. "], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Measured 30 days after surgery, ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),new cljs.core.Keyword(null,"n-survivors","n-survivors",-379968592).cljs$core$IFn$_invoke$arity$1(selected_row)," survivors "], null),"and ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),new cljs.core.Keyword(null,"n-deaths","n-deaths",1830468862).cljs$core$IFn$_invoke$arity$1(selected_row)," deaths"], null)," had been recorded. "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null),"The hospital's 30 day survival rate was ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(selected_row),"%"], null),"."], null)], null);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-data");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31800__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31800 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31801__i = 0, G__31801__a = new Array(arguments.length -  0);
while (G__31801__i < G__31801__a.length) {G__31801__a[G__31801__i] = arguments[G__31801__i + 0]; ++G__31801__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31801__a,0);
} 
return G__31800__delegate.call(this,args__27116__auto__);};
G__31800.cljs$lang$maxFixedArity = 0;
G__31800.cljs$lang$applyTo = (function (arglist__31802){
var args__27116__auto__ = cljs.core.seq(arglist__31802);
return G__31800__delegate(args__27116__auto__);
});
G__31800.cljs$core$IFn$_invoke$arity$variadic = G__31800__delegate;
return G__31800;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.hospital_header = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (selected_row){
var attrs31803 = new cljs.core.Keyword(null,"h-name","h-name",1046194554).cljs$core$IFn$_invoke$arity$1(selected_row);
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs31803))?sablono.interpreter.attributes.call(null,attrs31803):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31803))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31803)], null))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"hospital-header");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31804__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31804 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31805__i = 0, G__31805__a = new Array(arguments.length -  0);
while (G__31805__i < G__31805__a.length) {G__31805__a[G__31805__i] = arguments[G__31805__i + 0]; ++G__31805__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31805__a,0);
} 
return G__31804__delegate.call(this,args__27116__auto__);};
G__31804.cljs$lang$maxFixedArity = 0;
G__31804.cljs$lang$applyTo = (function (arglist__31806){
var args__27116__auto__ = cljs.core.seq(arglist__31806);
return G__31804__delegate(args__27116__auto__);
});
G__31804.cljs$core$IFn$_invoke$arity$variadic = G__31804__delegate;
return G__31804;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.legend = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (selected_row,close_modal){
return React.createElement("div",{"className": "legend"},React.createElement("div",{"className": "box"},React.createElement("p",{"style": {"color": "orange"}},"Legend (See also: ",(function (){var attrs31808 = prais2.core.href.call(null,"data/animation",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__31807_SHARP_){
if(cljs.core.truth_(close_modal)){
close_modal.call(null);
} else {
}

return prais2.core.click__GT_event_bus.call(null,p1__31807_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"animation","animation",-1248293244),"data/animation");
}));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs31808))?sablono.interpreter.attributes.call(null,attrs31808):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31808))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",{"className": "fa fa-video-camera"})," two minute video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31808),React.createElement("i",{"className": "fa fa-video-camera"})," two minute video"], null))));
})(),")"),sablono.interpreter.interpret.call(null,(function (){var ap = rum.core.react.call(null,prais2.core.app);
return cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.annotated_chart_cell.call(null,selected_row,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null),"Survival rate: The dot indicates the hospital's survival rate"),prais2.data.annotated_chart_cell.call(null,selected_row,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null], null), null),"Predicted Range: We expect the hospital's survival rate to be inside this bar\n                                          19 times out of 20"),prais2.data.annotated_chart_cell.call(null,selected_row,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null),"Extended predicted range: We expect the hospital's survival rate to be inside this bar\n                                          998 times out of a 1000")], null));
})())));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"legend");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31813__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31813 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31814__i = 0, G__31814__a = new Array(arguments.length -  0);
while (G__31814__i < G__31814__a.length) {G__31814__a[G__31814__i] = arguments[G__31814__i + 0]; ++G__31814__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31814__a,0);
} 
return G__31813__delegate.call(this,args__27116__auto__);};
G__31813.cljs$lang$maxFixedArity = 0;
G__31813.cljs$lang$applyTo = (function (arglist__31815){
var args__27116__auto__ = cljs.core.seq(arglist__31815);
return G__31813__delegate(args__27116__auto__);
});
G__31813.cljs$core$IFn$_invoke$arity$variadic = G__31813__delegate;
return G__31813;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
prais2.data.open_hospital_modal = (function prais2$data$open_hospital_modal(h_code){
cljs.core.swap_BANG_.call(null,prais2.core.app,(function (p1__31816_SHARP_){
return cljs.core.assoc.call(null,p1__31816_SHARP_,new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046),cljs.core.keyword.call(null,h_code));
}));

return $("#rowModal").modal();
});
prais2.data.close_hospital_modal = (function prais2$data$close_hospital_modal(){
cljs.core.swap_BANG_.call(null,prais2.core.app,(function (p1__31817_SHARP_){
return cljs.core.assoc.call(null,p1__31817_SHARP_,new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046),null);
}));

return $("#rowModal").modal("hide");
});
/**
 * 
 */
prais2.data.hospital_detail = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (h_code,close_modal){
return sablono.interpreter.interpret.call(null,(function (){var ap = rum.core.react.call(null,prais2.core.app);
if(cljs.core.truth_(h_code)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#detail","#detail",12018350),(function (){var temp__4657__auto__ = h_code.call(null,prais2.data.rows_by_code.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(ap)).call(null));
if(cljs.core.truth_(temp__4657__auto__)){
var selected_row = temp__4657__auto__;
return cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.hospital_header.call(null,selected_row),prais2.data.slider_widget.call(null,prais2.content.detail_slider_label,prais2.data.detail_slider_control,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap)),prais2.data.chart_cell.call(null,selected_row,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap)),prais2.data.hospital_data.call(null,h_code),prais2.data.interpretation.call(null,selected_row,prais2.data.close_hospital_modal),prais2.data.legend.call(null,selected_row,prais2.data.close_hospital_modal),prais2.data.hospital_charities.call(null,h_code)], null));
} else {
return null;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#detail","#detail",12018350),(function (){var selected_row = prais2.content.sample_hospital;
return cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.sample_hospital_intro_text.call(null),prais2.data.hospital_header.call(null,selected_row),prais2.data.slider_widget.call(null,prais2.content.detail_slider_label,prais2.data.detail_slider_control,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap)),prais2.data.chart_cell.call(null,selected_row,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap)),prais2.data.interpretation.call(null,selected_row,prais2.data.close_hospital_modal)], null));
})()], null);
}
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-detail");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31818__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31818 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31819__i = 0, G__31819__a = new Array(arguments.length -  0);
while (G__31819__i < G__31819__a.length) {G__31819__a[G__31819__i] = arguments[G__31819__i + 0]; ++G__31819__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31819__a,0);
} 
return G__31818__delegate.call(this,args__27116__auto__);};
G__31818.cljs$lang$maxFixedArity = 0;
G__31818.cljs$lang$applyTo = (function (arglist__31820){
var args__27116__auto__ = cljs.core.seq(arglist__31820);
return G__31818__delegate(args__27116__auto__);
});
G__31818.cljs$core$IFn$_invoke$arity$variadic = G__31818__delegate;
return G__31818;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.data.modal = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,(function (){var ap = rum.core.react.call(null,prais2.core.app);
var selected_h_code = new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046).cljs$core$IFn$_invoke$arity$1(ap);
var close_handler = ((function (ap,selected_h_code){
return (function (p1__31821_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__31821_SHARP_,new cljs.core.Keyword(null,"close-hospital-modal","close-hospital-modal",-1904402441),selected_h_code,null);
});})(ap,selected_h_code))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#rowModal.modal.fade","#rowModal.modal.fade",295690527),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"myModalLabel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".modal-dialog",".modal-dialog",-2142821806),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"document"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".modal-content",".modal-content",245331270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".modal-body",".modal-body",1596633899),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),prais2.data.hospital_detail.call(null,selected_h_code,prais2.data.close_hospital_modal)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".modal-footer",".modal-footer",1118557726),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_handler,new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),close_handler], null),"Close"], null)], null)], null)], null)], null);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"modal");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31822__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31822 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31823__i = 0, G__31823__a = new Array(arguments.length -  0);
while (G__31823__i < G__31823__a.length) {G__31823__a[G__31823__i] = arguments[G__31823__i + 0]; ++G__31823__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31823__a,0);
} 
return G__31822__delegate.call(this,args__27116__auto__);};
G__31822.cljs$lang$maxFixedArity = 0;
G__31822.cljs$lang$applyTo = (function (arglist__31824){
var args__27116__auto__ = cljs.core.seq(arglist__31824);
return G__31822__delegate(args__27116__auto__);
});
G__31822.cljs$core$IFn$_invoke$arity$variadic = G__31822__delegate;
return G__31822;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=data.js.map?rel=1629049565341