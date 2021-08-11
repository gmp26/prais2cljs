// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('prais2.data');
goog.require('cljs.core');
goog.require('prais2.content');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('prais2.core');
goog.require('prais2.utils');
prais2.data.colour_map = (function prais2$data$colour_map(theme){
return (prais2.content.colour_map_options.cljs$core$IFn$_invoke$arity$1 ? prais2.content.colour_map_options.cljs$core$IFn$_invoke$arity$1(theme) : prais2.content.colour_map_options.call(null,theme));
});
/**
 * create an index on a table
 */
prais2.data.index_by = (function prais2$data$index_by(table,key_fn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(key_fn,cljs.core.identity),table));
});
prais2.data.add_markers = (function prais2$data$add_markers(table_rows){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,row){
var lat = (50.7 + (index / (3)));
var lon = (-2.6 + (0.8 * cljs.core.mod(index,(3))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(row,cljs.core.cst$kw$h_DASH_lat,lat,cljs.core.array_seq([cljs.core.cst$kw$h_DASH_lon,lon], 0));
}),table_rows);
});
prais2.data.make_datasource = (function prais2$data$make_datasource(datasource){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.content.header_row], null),((typeof (function (){var G__15474 = cljs.core.name(datasource);
return parseInt(G__15474);
})() === 'number')?(datasource.cljs$core$IFn$_invoke$arity$1 ? datasource.cljs$core$IFn$_invoke$arity$1(prais2.content.datasources) : datasource.call(null,prais2.content.datasources)):prais2.data.add_markers((datasource.cljs$core$IFn$_invoke$arity$1 ? datasource.cljs$core$IFn$_invoke$arity$1(prais2.content.datasources) : datasource.call(null,prais2.content.datasources))))));
});
/**
 * datasource switchable hospital results table
 */
prais2.data.table_data = (function prais2$data$table_data(datasource){
return cljs.core.memoize((function (){
return prais2.data.make_datasource(datasource);
}));
});
/**
 * datasource switchable hospital results indexed by hospital code
 */
prais2.data.rows_by_code = (function prais2$data$rows_by_code(datasource){
return cljs.core.memoize((function (){
return prais2.data.index_by(prais2.data.table_data(datasource).call(null),(function (p1__15475_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(p1__15475_SHARP_));
}));
}));
});
/**
 * sort a column
 */
prais2.data.sort_on_column = (function prais2$data$sort_on_column(app,column_key){
var ap = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app) : cljs.core.deref.call(null,app));
var sort_column = cljs.core.cst$kw$sort_DASH_by.cljs$core$IFn$_invoke$arity$1(ap);
var sort_mode = cljs.core.cst$kw$sort_DASH_ascending.cljs$core$IFn$_invoke$arity$1(ap);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_column,column_key)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app,((function (ap,sort_column,sort_mode){
return (function (p1__15476_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15476_SHARP_,cljs.core.cst$kw$sort_DASH_ascending,cljs.core.not(sort_mode));
});})(ap,sort_column,sort_mode))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app,((function (ap,sort_column,sort_mode){
return (function (p1__15477_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__15477_SHARP_,cljs.core.cst$kw$sort_DASH_ascending,true,cljs.core.array_seq([cljs.core.cst$kw$sort_DASH_by,column_key], 0));
});})(ap,sort_column,sort_mode))
);
}
});
/**
 * handle sort click
 */
prais2.data.handle_sort = (function prais2$data$handle_sort(app,column_key){
return prais2.data.sort_on_column(app,column_key);
});
prais2.data.chart_width = (100);
prais2.data.min_outer_low = (function prais2$data$min_outer_low(){
return ((2) * ((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$outer_DASH_low,cljs.core.rest(prais2.data.table_data(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.core.app) : cljs.core.deref.call(null,prais2.core.app)))).call(null)))) / (2)) | (0)));
});
/**
 * value to pixel-width scale-factor controlled by slider in [0-1]
 */
prais2.data.bar_scale = (function prais2$data$bar_scale(slider){
return (prais2.data.chart_width / ((100) - (prais2.data.min_outer_low() * slider)));
});
/**
 * percent-value to slider compensated value
 */
prais2.data.percent__GT_screen = (function prais2$data$percent__GT_screen(slider,value){
var origin = (prais2.data.min_outer_low() * slider);
return ((100) * ((value - origin) / ((100) - origin)));
});
/**
 * return percentage-width for a bar
 */
prais2.data.bar_width = (function prais2$data$bar_width(slider,value){
return (value * prais2.data.bar_scale(slider));
});
/**
 * 
 */
prais2.data.bar = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function() {
var G__15486 = null;
var G__15486__5 = (function (slider,hi_val,lo_val,bar_type,fill){
var G__15478 = "div";
var G__15479 = {"style": {"backgroundColor": fill, "borderRadius": (0), "width": [cljs.core.str(prais2.data.bar_width(slider,(hi_val - lo_val))),cljs.core.str("%")].join(''), "textAlign": "right"}, "data-toggle": "tooltip", "data-original-title": [cljs.core.str(prais2.utils.pc(lo_val)),cljs.core.str(" - "),cljs.core.str(prais2.utils.pc(hi_val)),cljs.core.str("<br>"),cljs.core.str((bar_type.cljs$core$IFn$_invoke$arity$1 ? bar_type.cljs$core$IFn$_invoke$arity$1(prais2.content.bar_comments) : bar_type.call(null,prais2.content.bar_comments)))].join(''), "data-delay": (0), "data-html": true, "data-trigger": "hover", "data-placement": "bottom", "className": "bar btn"};
return React.createElement(G__15478,G__15479);
});
var G__15486__6 = (function (slider,hi_val,lo_val,bar_type,fill,no_tip){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"rgba(255,255,255,0)")){
var G__15480 = "div";
var G__15481 = {"style": {"backgroundColor": fill, "width": [cljs.core.str(prais2.data.bar_width(slider,(hi_val - lo_val))),cljs.core.str("%")].join('')}, "className": "bar"};
return React.createElement(G__15480,G__15481);
} else {
if(cljs.core.not(no_tip)){
var G__15482 = "div";
var G__15483 = {"style": {"backgroundColor": fill, "borderRadius": (0), "width": [cljs.core.str(prais2.data.bar_width(slider,(hi_val - lo_val))),cljs.core.str("%")].join(''), "textAlign": "right"}, "data-toggle": "tooltip", "data-original-title": [cljs.core.str(prais2.utils.pc(lo_val)),cljs.core.str(" - "),cljs.core.str(prais2.utils.pc(hi_val)),cljs.core.str("<br>"),cljs.core.str((bar_type.cljs$core$IFn$_invoke$arity$1 ? bar_type.cljs$core$IFn$_invoke$arity$1(prais2.content.bar_comments) : bar_type.call(null,prais2.content.bar_comments)))].join(''), "data-delay": (0), "data-html": true, "data-trigger": "hover", "data-placement": "bottom", "className": "bar btn"};
return React.createElement(G__15482,G__15483);
} else {
var G__15484 = "div";
var G__15485 = {"style": {"backgroundColor": fill, "borderRadius": (0), "width": [cljs.core.str(prais2.data.bar_width(slider,(hi_val - lo_val))),cljs.core.str("%")].join(''), "textAlign": "right"}, "className": "bar btn"};
return React.createElement(G__15484,G__15485);
}
}
});
G__15486 = function(slider,hi_val,lo_val,bar_type,fill,no_tip){
switch(arguments.length){
case 5:
return G__15486__5.call(this,slider,hi_val,lo_val,bar_type,fill);
case 6:
return G__15486__6.call(this,slider,hi_val,lo_val,bar_type,fill,no_tip);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15486.cljs$core$IFn$_invoke$arity$5 = G__15486__5;
G__15486.cljs$core$IFn$_invoke$arity$6 = G__15486__6;
return G__15486;
})()
);
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"bar");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15487__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15487 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15488__i = 0, G__15488__a = new Array(arguments.length -  0);
while (G__15488__i < G__15488__a.length) {G__15488__a[G__15488__i] = arguments[G__15488__i + 0]; ++G__15488__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15488__a,0);
} 
return G__15487__delegate.call(this,args__8012__auto__);};
G__15487.cljs$lang$maxFixedArity = 0;
G__15487.cljs$lang$applyTo = (function (arglist__15489){
var args__8012__auto__ = cljs.core.seq(arglist__15489);
return G__15487__delegate(args__8012__auto__);
});
G__15487.cljs$core$IFn$_invoke$arity$variadic = G__15487__delegate;
return G__15487;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.dot = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function() { 
var G__15495__delegate = function (slider,size,value,dotty,p__15490){
var vec__15491 = p__15490;
var relative = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15491,(0),null);
return sablono.interpreter.interpret((function (){var px_size = prais2.utils.px(size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$dot$btn,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$data_DASH_toggle,"tooltip",cljs.core.cst$kw$data_DASH_placement,"bottom",cljs.core.cst$kw$data_DASH_delay,(0),cljs.core.cst$kw$data_DASH_trigger,"hover",cljs.core.cst$kw$data_DASH_html,true,cljs.core.cst$kw$data_DASH_original_DASH_title,[cljs.core.str(prais2.utils.pc(value)),cljs.core.str("<br>The survival rate")].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app)))),cljs.core.cst$kw$display,(cljs.core.truth_(dotty)?"inline-block":"none"),cljs.core.cst$kw$width,px_size,cljs.core.cst$kw$height,px_size,cljs.core.cst$kw$top,prais2.utils.px(((10) + (((25) - size) / (2)))),cljs.core.cst$kw$position,(cljs.core.truth_(relative)?"relative":"absolute"),cljs.core.cst$kw$margin_DASH_left,[cljs.core.str("-"),cljs.core.str((function (){var G__15494 = (size / (2));
return Math.round(G__15494);
})()),cljs.core.str("px")].join(''),cljs.core.cst$kw$left,[cljs.core.str(prais2.data.percent__GT_screen(slider,value)),cljs.core.str("%")].join('')], null)], null)], null);
})());
};
var G__15495 = function (slider,size,value,dotty,var_args){
var p__15490 = null;
if (arguments.length > 4) {
var G__15496__i = 0, G__15496__a = new Array(arguments.length -  4);
while (G__15496__i < G__15496__a.length) {G__15496__a[G__15496__i] = arguments[G__15496__i + 4]; ++G__15496__i;}
  p__15490 = new cljs.core.IndexedSeq(G__15496__a,0);
} 
return G__15495__delegate.call(this,slider,size,value,dotty,p__15490);};
G__15495.cljs$lang$maxFixedArity = 4;
G__15495.cljs$lang$applyTo = (function (arglist__15497){
var slider = cljs.core.first(arglist__15497);
arglist__15497 = cljs.core.next(arglist__15497);
var size = cljs.core.first(arglist__15497);
arglist__15497 = cljs.core.next(arglist__15497);
var value = cljs.core.first(arglist__15497);
arglist__15497 = cljs.core.next(arglist__15497);
var dotty = cljs.core.first(arglist__15497);
var p__15490 = cljs.core.rest(arglist__15497);
return G__15495__delegate(slider,size,value,dotty,p__15490);
});
G__15495.cljs$core$IFn$_invoke$arity$variadic = G__15495__delegate;
return G__15495;
})()
);
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,prais2.core.bs_tooltip], null)),"dot");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15498__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15498 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15499__i = 0, G__15499__a = new Array(arguments.length -  0);
while (G__15499__i < G__15499__a.length) {G__15499__a[G__15499__i] = arguments[G__15499__i + 0]; ++G__15499__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15499__a,0);
} 
return G__15498__delegate.call(this,args__8012__auto__);};
G__15498.cljs$lang$maxFixedArity = 0;
G__15498.cljs$lang$applyTo = (function (arglist__15500){
var args__8012__auto__ = cljs.core.seq(arglist__15500);
return G__15498__delegate(args__8012__auto__);
});
G__15498.cljs$core$IFn$_invoke$arity$variadic = G__15498__delegate;
return G__15498;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.dot_no_tip = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function() { 
var G__15506__delegate = function (slider,size,value,dotty,p__15501){
var vec__15502 = p__15501;
var relative = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15502,(0),null);
return sablono.interpreter.interpret((function (){var px_size = prais2.utils.px(size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$dot$btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app)))),cljs.core.cst$kw$display,(cljs.core.truth_(dotty)?"inline-block":"none"),cljs.core.cst$kw$width,px_size,cljs.core.cst$kw$height,px_size,cljs.core.cst$kw$top,prais2.utils.px(((10) + (((25) - size) / (2)))),cljs.core.cst$kw$position,(cljs.core.truth_(relative)?"relative":"absolute"),cljs.core.cst$kw$left,[cljs.core.str("calc("),cljs.core.str(prais2.data.percent__GT_screen(slider,value)),cljs.core.str("% - "),cljs.core.str((function (){var G__15505 = (size / (2));
return Math.round(G__15505);
})()),cljs.core.str("px)")].join('')], null)], null)], null);
})());
};
var G__15506 = function (slider,size,value,dotty,var_args){
var p__15501 = null;
if (arguments.length > 4) {
var G__15507__i = 0, G__15507__a = new Array(arguments.length -  4);
while (G__15507__i < G__15507__a.length) {G__15507__a[G__15507__i] = arguments[G__15507__i + 4]; ++G__15507__i;}
  p__15501 = new cljs.core.IndexedSeq(G__15507__a,0);
} 
return G__15506__delegate.call(this,slider,size,value,dotty,p__15501);};
G__15506.cljs$lang$maxFixedArity = 4;
G__15506.cljs$lang$applyTo = (function (arglist__15508){
var slider = cljs.core.first(arglist__15508);
arglist__15508 = cljs.core.next(arglist__15508);
var size = cljs.core.first(arglist__15508);
arglist__15508 = cljs.core.next(arglist__15508);
var value = cljs.core.first(arglist__15508);
arglist__15508 = cljs.core.next(arglist__15508);
var dotty = cljs.core.first(arglist__15508);
var p__15501 = cljs.core.rest(arglist__15508);
return G__15506__delegate(slider,size,value,dotty,p__15501);
});
G__15506.cljs$core$IFn$_invoke$arity$variadic = G__15506__delegate;
return G__15506;
})()
);
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive], null)),"dot-no-tip");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15509__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15509 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15510__i = 0, G__15510__a = new Array(arguments.length -  0);
while (G__15510__i < G__15510__a.length) {G__15510__a[G__15510__i] = arguments[G__15510__i + 0]; ++G__15510__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15510__a,0);
} 
return G__15509__delegate.call(this,args__8012__auto__);};
G__15509.cljs$lang$maxFixedArity = 0;
G__15509.cljs$lang$applyTo = (function (arglist__15511){
var args__8012__auto__ = cljs.core.seq(arglist__15511);
return G__15509__delegate(args__8012__auto__);
});
G__15509.cljs$core$IFn$_invoke$arity$variadic = G__15509__delegate;
return G__15509;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
prais2.data.extra_right = (40);
prais2.data.dot_size = (function prais2$data$dot_size(slider){
var G__15513 = ((12) - ((7) * ((1) - slider)));
return Math.round(G__15513);
});
prais2.data.chart_states = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dot,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inner,null,cljs.core.cst$kw$dot,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$inner,null,cljs.core.cst$kw$dot,null,cljs.core.cst$kw$outer,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inner,null,cljs.core.cst$kw$outer,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inner,null], null), null)], null);
/**
 * 
 */
prais2.data.chart_cell = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (row,slider){
return sablono.interpreter.interpret((function (){var ap = rum.core.react(prais2.core.app);
var colours = prais2.data.colour_map(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(ap));
var bars = (function (){var G__15514 = cljs.core.cst$kw$chart_DASH_state.cljs$core$IFn$_invoke$arity$1(ap);
return (prais2.data.chart_states.cljs$core$IFn$_invoke$arity$1 ? prais2.data.chart_states.cljs$core$IFn$_invoke$arity$1(G__15514) : prais2.data.chart_states.call(null,G__15514));
})();
var dotty = cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(bars);
var dotless = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(bars,cljs.core.cst$kw$dot);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$chart_DASH_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bar_DASH_chart,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,cljs.core.PersistentHashSet.EMPTY))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15515 = slider;
var G__15516 = prais2.data.dot_size(slider);
var G__15517 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__15518 = dotty;
return (prais2.data.dot.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot.cljs$core$IFn$_invoke$arity$4(G__15515,G__15516,G__15517,G__15518) : prais2.data.dot.call(null,G__15515,G__15516,G__15517,G__15518));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inner,null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15519 = slider;
var G__15520 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15521 = (prais2.data.min_outer_low() * slider);
var G__15522 = cljs.core.cst$kw$low;
var G__15523 = cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15519,G__15520,G__15521,G__15522,G__15523) : prais2.data.bar.call(null,G__15519,G__15520,G__15521,G__15522,G__15523));
})(),(function (){var G__15524 = slider;
var G__15525 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15526 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15527 = cljs.core.cst$kw$outer_DASH_low;
var G__15528 = cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15524,G__15525,G__15526,G__15527,G__15528) : prais2.data.bar.call(null,G__15524,G__15525,G__15526,G__15527,G__15528));
})(),(function (){var G__15529 = slider;
var G__15530 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15531 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15532 = cljs.core.cst$kw$inner;
var G__15533 = cljs.core.cst$kw$inner.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15529,G__15530,G__15531,G__15532,G__15533) : prais2.data.bar.call(null,G__15529,G__15530,G__15531,G__15532,G__15533));
})(),(function (){var G__15534 = slider;
var G__15535 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15536 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15537 = cljs.core.cst$kw$outer_DASH_high;
var G__15538 = cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15534,G__15535,G__15536,G__15537,G__15538) : prais2.data.bar.call(null,G__15534,G__15535,G__15536,G__15537,G__15538));
})(),(function (){var G__15539 = slider;
var G__15540 = (100);
var G__15541 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15542 = cljs.core.cst$kw$high;
var G__15543 = cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15539,G__15540,G__15541,G__15542,G__15543) : prais2.data.bar.call(null,G__15539,G__15540,G__15541,G__15542,G__15543));
})(),(function (){var G__15544 = slider;
var G__15545 = prais2.data.dot_size(slider);
var G__15546 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__15547 = dotty;
return (prais2.data.dot.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot.cljs$core$IFn$_invoke$arity$4(G__15544,G__15545,G__15546,G__15547) : prais2.data.dot.call(null,G__15544,G__15545,G__15546,G__15547));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outer,null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15548 = slider;
var G__15549 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15550 = (prais2.data.min_outer_low() * slider);
var G__15551 = cljs.core.cst$kw$low;
var G__15552 = cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15548,G__15549,G__15550,G__15551,G__15552) : prais2.data.bar.call(null,G__15548,G__15549,G__15550,G__15551,G__15552));
})(),(function (){var G__15553 = slider;
var G__15554 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15555 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15556 = cljs.core.cst$kw$outer_DASH_low;
var G__15557 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15553,G__15554,G__15555,G__15556,G__15557) : prais2.data.bar.call(null,G__15553,G__15554,G__15555,G__15556,G__15557));
})(),(function (){var G__15558 = slider;
var G__15559 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15560 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15561 = cljs.core.cst$kw$inner;
var G__15562 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15558,G__15559,G__15560,G__15561,G__15562) : prais2.data.bar.call(null,G__15558,G__15559,G__15560,G__15561,G__15562));
})(),(function (){var G__15563 = slider;
var G__15564 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15565 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15566 = cljs.core.cst$kw$outer_DASH_high;
var G__15567 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15563,G__15564,G__15565,G__15566,G__15567) : prais2.data.bar.call(null,G__15563,G__15564,G__15565,G__15566,G__15567));
})(),(function (){var G__15568 = slider;
var G__15569 = (100);
var G__15570 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15571 = cljs.core.cst$kw$high;
var G__15572 = cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15568,G__15569,G__15570,G__15571,G__15572) : prais2.data.bar.call(null,G__15568,G__15569,G__15570,G__15571,G__15572));
})(),(function (){var G__15573 = slider;
var G__15574 = prais2.data.dot_size(slider);
var G__15575 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__15576 = dotty;
return (prais2.data.dot.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot.cljs$core$IFn$_invoke$arity$4(G__15573,G__15574,G__15575,G__15576) : prais2.data.dot.call(null,G__15573,G__15574,G__15575,G__15576));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inner,null,cljs.core.cst$kw$outer,null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15577 = slider;
var G__15578 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15579 = (prais2.data.min_outer_low() * slider);
var G__15580 = cljs.core.cst$kw$low;
var G__15581 = cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15577,G__15578,G__15579,G__15580,G__15581) : prais2.data.bar.call(null,G__15577,G__15578,G__15579,G__15580,G__15581));
})(),(function (){var G__15582 = slider;
var G__15583 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15584 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15585 = cljs.core.cst$kw$outer_DASH_low;
var G__15586 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15582,G__15583,G__15584,G__15585,G__15586) : prais2.data.bar.call(null,G__15582,G__15583,G__15584,G__15585,G__15586));
})(),(function (){var G__15587 = slider;
var G__15588 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15589 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15590 = cljs.core.cst$kw$inner;
var G__15591 = cljs.core.cst$kw$inner.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15587,G__15588,G__15589,G__15590,G__15591) : prais2.data.bar.call(null,G__15587,G__15588,G__15589,G__15590,G__15591));
})(),(function (){var G__15592 = slider;
var G__15593 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15594 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15595 = cljs.core.cst$kw$outer_DASH_high;
var G__15596 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15592,G__15593,G__15594,G__15595,G__15596) : prais2.data.bar.call(null,G__15592,G__15593,G__15594,G__15595,G__15596));
})(),(function (){var G__15597 = slider;
var G__15598 = (100);
var G__15599 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15600 = cljs.core.cst$kw$high;
var G__15601 = cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__15597,G__15598,G__15599,G__15600,G__15601) : prais2.data.bar.call(null,G__15597,G__15598,G__15599,G__15600,G__15601));
})(),(function (){var G__15602 = slider;
var G__15603 = prais2.data.dot_size(slider);
var G__15604 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__15605 = dotty;
return (prais2.data.dot.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot.cljs$core$IFn$_invoke$arity$4(G__15602,G__15603,G__15604,G__15605) : prais2.data.dot.call(null,G__15602,G__15603,G__15604,G__15605));
})()], null):null)))))], null)], null);
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.bs_tooltip,rum.core.reactive], null)),"chart-cell");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15606__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15606 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15607__i = 0, G__15607__a = new Array(arguments.length -  0);
while (G__15607__i < G__15607__a.length) {G__15607__a[G__15607__i] = arguments[G__15607__i + 0]; ++G__15607__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15607__a,0);
} 
return G__15606__delegate.call(this,args__8012__auto__);};
G__15606.cljs$lang$maxFixedArity = 0;
G__15606.cljs$lang$applyTo = (function (arglist__15608){
var args__8012__auto__ = cljs.core.seq(arglist__15608);
return G__15606__delegate(args__8012__auto__);
});
G__15606.cljs$core$IFn$_invoke$arity$variadic = G__15606__delegate;
return G__15606;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.annotated_chart_cell = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (row,slider,bars,text){
return sablono.interpreter.interpret((function (){var ap = rum.core.react(prais2.core.app);
var colours = prais2.data.colour_map(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(ap));
var dotty = cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(bars);
var dotless = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(bars,cljs.core.cst$kw$dot);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$annotation,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null),text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$chart_DASH_cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bar_DASH_chart,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,cljs.core.PersistentHashSet.EMPTY))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15609 = slider;
var G__15610 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15611 = (prais2.data.min_outer_low() * slider);
var G__15612 = cljs.core.cst$kw$low;
var G__15613 = "#ffffff";
var G__15614 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15609,G__15610,G__15611,G__15612,G__15613,G__15614) : prais2.data.bar.call(null,G__15609,G__15610,G__15611,G__15612,G__15613,G__15614));
})(),(function (){var G__15615 = slider;
var G__15616 = prais2.data.dot_size(slider);
var G__15617 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__15618 = dotty;
return (prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$4(G__15615,G__15616,G__15617,G__15618) : prais2.data.dot_no_tip.call(null,G__15615,G__15616,G__15617,G__15618));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inner,null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15619 = slider;
var G__15620 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15621 = (prais2.data.min_outer_low() * slider);
var G__15622 = cljs.core.cst$kw$low;
var G__15623 = "#ffffff";
var G__15624 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15619,G__15620,G__15621,G__15622,G__15623,G__15624) : prais2.data.bar.call(null,G__15619,G__15620,G__15621,G__15622,G__15623,G__15624));
})(),(function (){var G__15625 = slider;
var G__15626 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15627 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15628 = cljs.core.cst$kw$outer_DASH_low;
var G__15629 = "#ffffff";
var G__15630 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15625,G__15626,G__15627,G__15628,G__15629,G__15630) : prais2.data.bar.call(null,G__15625,G__15626,G__15627,G__15628,G__15629,G__15630));
})(),(function (){var G__15631 = slider;
var G__15632 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15633 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15634 = cljs.core.cst$kw$inner;
var G__15635 = cljs.core.cst$kw$inner.cljs$core$IFn$_invoke$arity$1(colours);
var G__15636 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15631,G__15632,G__15633,G__15634,G__15635,G__15636) : prais2.data.bar.call(null,G__15631,G__15632,G__15633,G__15634,G__15635,G__15636));
})(),(function (){var G__15637 = slider;
var G__15638 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15639 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15640 = cljs.core.cst$kw$outer_DASH_high;
var G__15641 = "#ffffff";
var G__15642 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15637,G__15638,G__15639,G__15640,G__15641,G__15642) : prais2.data.bar.call(null,G__15637,G__15638,G__15639,G__15640,G__15641,G__15642));
})(),(function (){var G__15643 = slider;
var G__15644 = (100);
var G__15645 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15646 = cljs.core.cst$kw$high;
var G__15647 = "#ffffff";
var G__15648 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15643,G__15644,G__15645,G__15646,G__15647,G__15648) : prais2.data.bar.call(null,G__15643,G__15644,G__15645,G__15646,G__15647,G__15648));
})(),(function (){var G__15649 = slider;
var G__15650 = prais2.data.dot_size(slider);
var G__15651 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__15652 = dotty;
return (prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$4(G__15649,G__15650,G__15651,G__15652) : prais2.data.dot_no_tip.call(null,G__15649,G__15650,G__15651,G__15652));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outer,null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15653 = slider;
var G__15654 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15655 = (prais2.data.min_outer_low() * slider);
var G__15656 = cljs.core.cst$kw$low;
var G__15657 = "#ffffff";
var G__15658 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15653,G__15654,G__15655,G__15656,G__15657,G__15658) : prais2.data.bar.call(null,G__15653,G__15654,G__15655,G__15656,G__15657,G__15658));
})(),(function (){var G__15659 = slider;
var G__15660 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15661 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15662 = cljs.core.cst$kw$outer_DASH_low;
var G__15663 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(colours);
var G__15664 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15659,G__15660,G__15661,G__15662,G__15663,G__15664) : prais2.data.bar.call(null,G__15659,G__15660,G__15661,G__15662,G__15663,G__15664));
})(),(function (){var G__15665 = slider;
var G__15666 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15667 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15668 = cljs.core.cst$kw$inner;
var G__15669 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(colours);
var G__15670 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15665,G__15666,G__15667,G__15668,G__15669,G__15670) : prais2.data.bar.call(null,G__15665,G__15666,G__15667,G__15668,G__15669,G__15670));
})(),(function (){var G__15671 = slider;
var G__15672 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15673 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15674 = cljs.core.cst$kw$outer_DASH_high;
var G__15675 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(colours);
var G__15676 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15671,G__15672,G__15673,G__15674,G__15675,G__15676) : prais2.data.bar.call(null,G__15671,G__15672,G__15673,G__15674,G__15675,G__15676));
})(),(function (){var G__15677 = slider;
var G__15678 = (100);
var G__15679 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15680 = cljs.core.cst$kw$high;
var G__15681 = "#ffffff";
var G__15682 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15677,G__15678,G__15679,G__15680,G__15681,G__15682) : prais2.data.bar.call(null,G__15677,G__15678,G__15679,G__15680,G__15681,G__15682));
})(),(function (){var G__15683 = slider;
var G__15684 = prais2.data.dot_size(slider);
var G__15685 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__15686 = dotty;
return (prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$4(G__15683,G__15684,G__15685,G__15686) : prais2.data.dot_no_tip.call(null,G__15683,G__15684,G__15685,G__15686));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inner,null,cljs.core.cst$kw$outer,null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15687 = slider;
var G__15688 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15689 = (prais2.data.min_outer_low() * slider);
var G__15690 = cljs.core.cst$kw$low;
var G__15691 = "#ffffff";
var G__15692 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15687,G__15688,G__15689,G__15690,G__15691,G__15692) : prais2.data.bar.call(null,G__15687,G__15688,G__15689,G__15690,G__15691,G__15692));
})(),(function (){var G__15693 = slider;
var G__15694 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15695 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15696 = cljs.core.cst$kw$outer_DASH_low;
var G__15697 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(colours);
var G__15698 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15693,G__15694,G__15695,G__15696,G__15697,G__15698) : prais2.data.bar.call(null,G__15693,G__15694,G__15695,G__15696,G__15697,G__15698));
})(),(function (){var G__15699 = slider;
var G__15700 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15701 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__15702 = cljs.core.cst$kw$inner;
var G__15703 = cljs.core.cst$kw$inner.cljs$core$IFn$_invoke$arity$1(colours);
var G__15704 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15699,G__15700,G__15701,G__15702,G__15703,G__15704) : prais2.data.bar.call(null,G__15699,G__15700,G__15701,G__15702,G__15703,G__15704));
})(),(function (){var G__15705 = slider;
var G__15706 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15707 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15708 = cljs.core.cst$kw$outer_DASH_high;
var G__15709 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(colours);
var G__15710 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15705,G__15706,G__15707,G__15708,G__15709,G__15710) : prais2.data.bar.call(null,G__15705,G__15706,G__15707,G__15708,G__15709,G__15710));
})(),(function (){var G__15711 = slider;
var G__15712 = (100);
var G__15713 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__15714 = cljs.core.cst$kw$high;
var G__15715 = "#ffffff";
var G__15716 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__15711,G__15712,G__15713,G__15714,G__15715,G__15716) : prais2.data.bar.call(null,G__15711,G__15712,G__15713,G__15714,G__15715,G__15716));
})(),(function (){var G__15717 = slider;
var G__15718 = prais2.data.dot_size(slider);
var G__15719 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__15720 = dotty;
var G__15721 = true;
return (prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$5 ? prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$5(G__15717,G__15718,G__15719,G__15720,G__15721) : prais2.data.dot_no_tip.call(null,G__15717,G__15718,G__15719,G__15720,G__15721));
})()], null):null)))))], null)], null)], null);
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.bs_tooltip,rum.core.reactive], null)),"annotated-chart-cell");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15722__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15722 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15723__i = 0, G__15723__a = new Array(arguments.length -  0);
while (G__15723__i < G__15723__a.length) {G__15723__a[G__15723__i] = arguments[G__15723__i + 0]; ++G__15723__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15723__a,0);
} 
return G__15722__delegate.call(this,args__8012__auto__);};
G__15722.cljs$lang$maxFixedArity = 0;
G__15722.cljs$lang$applyTo = (function (arglist__15724){
var args__8012__auto__ = cljs.core.seq(arglist__15724);
return G__15722__delegate(args__8012__auto__);
});
G__15722.cljs$core$IFn$_invoke$arity$variadic = G__15722__delegate;
return G__15722;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.tick = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (baseline,value,tick_height){
return sablono.interpreter.interpret((function (){var percent = ((100) * ((value - baseline) / ((100) - baseline)));
if((percent >= (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$tick,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$left,prais2.utils.pc(percent),cljs.core.cst$kw$height,prais2.utils.px(tick_height),cljs.core.cst$kw$border_DASH_left,[cljs.core.str("1px "),cljs.core.str((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(percent,(100))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))))?"solid ":"dashed ")),cljs.core.str("black")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tick_DASH_label,prais2.utils.pc(value)], null)], null);
} else {
return null;
}
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"tick");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15725__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15725 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15726__i = 0, G__15726__a = new Array(arguments.length -  0);
while (G__15726__i < G__15726__a.length) {G__15726__a[G__15726__i] = arguments[G__15726__i + 0]; ++G__15726__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15726__a,0);
} 
return G__15725__delegate.call(this,args__8012__auto__);};
G__15725.cljs$lang$maxFixedArity = 0;
G__15725.cljs$lang$applyTo = (function (arglist__15727){
var args__8012__auto__ = cljs.core.seq(arglist__15727);
return G__15725__delegate(args__8012__auto__);
});
G__15725.cljs$core$IFn$_invoke$arity$variadic = G__15725__delegate;
return G__15725;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.ticks = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (slider_axis_value,tick_count,tick_height){
return sablono.interpreter.interpret((function (){var baseline = (prais2.data.min_outer_low() * slider_axis_value);
var raw_interval = (((100) - baseline) / (tick_count + (1)));
var interval = (((raw_interval > (10)))?(20):(((raw_interval > (5)))?(10):(((raw_interval > (2)))?(5):(2)
)));
var tick_values = cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(baseline - (1)),(- interval));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var iter__7001__auto__ = ((function (baseline,raw_interval,interval,tick_values){
return (function prais2$data$iter__15728(s__15729){
return (new cljs.core.LazySeq(null,((function (baseline,raw_interval,interval,tick_values){
return (function (){
var s__15729__$1 = s__15729;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15729__$1);
if(temp__4657__auto__){
var s__15729__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15729__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__15729__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__15731 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__15730 = (0);
while(true){
if((i__15730 < size__7000__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__15730);
cljs.core.chunk_append(b__15731,rum.core.with_key((prais2.data.tick.cljs$core$IFn$_invoke$arity$3 ? prais2.data.tick.cljs$core$IFn$_invoke$arity$3(baseline,value,tick_height) : prais2.data.tick.call(null,baseline,value,tick_height)),value));

var G__15734 = (i__15730 + (1));
i__15730 = G__15734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15731),prais2$data$iter__15728(cljs.core.chunk_rest(s__15729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15731),null);
}
} else {
var value = cljs.core.first(s__15729__$2);
return cljs.core.cons(rum.core.with_key((prais2.data.tick.cljs$core$IFn$_invoke$arity$3 ? prais2.data.tick.cljs$core$IFn$_invoke$arity$3(baseline,value,tick_height) : prais2.data.tick.call(null,baseline,value,tick_height)),value),prais2$data$iter__15728(cljs.core.rest(s__15729__$2)));
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
return iter__7001__auto__(tick_values);
})()], null);
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"ticks");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15735__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15735 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15736__i = 0, G__15736__a = new Array(arguments.length -  0);
while (G__15736__i < G__15736__a.length) {G__15736__a[G__15736__i] = arguments[G__15736__i + 0]; ++G__15736__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15736__a,0);
} 
return G__15735__delegate.call(this,args__8012__auto__);};
G__15735.cljs$lang$maxFixedArity = 0;
G__15735.cljs$lang$applyTo = (function (arglist__15737){
var args__8012__auto__ = cljs.core.seq(arglist__15737);
return G__15735__delegate(args__8012__auto__);
});
G__15735.cljs$core$IFn$_invoke$arity$variadic = G__15735__delegate;
return G__15735;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.slider_labels = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__15740 = "div";
var G__15741 = {"className": "slider-label"};
var G__15742 = (function (){var G__15744 = "div";
var G__15745 = {"key": cljs.core.cst$kw$left, "className": "pull-left"};
var G__15746 = (function (){var G__15748 = "i";
var G__15749 = {"key": cljs.core.cst$kw$full, "className": "fa fa-long-arrow-left"};
return React.createElement(G__15748,G__15749);
})();
var G__15747 = " full view";
return React.createElement(G__15744,G__15745,G__15746,G__15747);
})();
var G__15743 = (function (){var G__15750 = "div";
var G__15751 = {"key": cljs.core.cst$kw$right, "className": "pull-right"};
var G__15752 = "full detail ";
var G__15753 = (function (){var G__15754 = "i";
var G__15755 = {"key": cljs.core.cst$kw$detail, "className": "fa fa-long-arrow-right"};
return React.createElement(G__15754,G__15755);
})();
return React.createElement(G__15750,G__15751,G__15752,G__15753);
})();
return React.createElement(G__15740,G__15741,G__15742,G__15743);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"slider-labels");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15756__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15756 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15757__i = 0, G__15757__a = new Array(arguments.length -  0);
while (G__15757__i < G__15757__a.length) {G__15757__a[G__15757__i] = arguments[G__15757__i + 0]; ++G__15757__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15757__a,0);
} 
return G__15756__delegate.call(this,args__8012__auto__);};
G__15756.cljs$lang$maxFixedArity = 0;
G__15756.cljs$lang$applyTo = (function (arglist__15758){
var args__8012__auto__ = cljs.core.seq(arglist__15758);
return G__15756__delegate(args__8012__auto__);
});
G__15756.cljs$core$IFn$_invoke$arity$variadic = G__15756__delegate;
return G__15756;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
prais2.data.bs_slider = (function prais2$data$bs_slider(hashed_id,change_key){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var slider = (new Slider(hashed_id,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tooltip,"hide",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(1),cljs.core.cst$kw$step,0.02,cljs.core.cst$kw$value,(function (){var G__15760 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.core.app) : cljs.core.deref.call(null,prais2.core.app));
return (change_key.cljs$core$IFn$_invoke$arity$1 ? change_key.cljs$core$IFn$_invoke$arity$1(G__15760) : change_key.call(null,G__15760));
})()], null))));
var handler = ((function (slider){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [change_key,slider.getValue()], null));
});})(slider))
;
slider.on("change",handler);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$prais2$data_SLASH_slider,slider,cljs.core.array_seq([cljs.core.cst$kw$prais2$data_SLASH_handler,handler], 0));
}),cljs.core.cst$kw$transfer_DASH_state,(function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,cljs.core.cst$kw$prais2$data_SLASH_slider,cljs.core.cst$kw$prais2$data_SLASH_slider.cljs$core$IFn$_invoke$arity$1(old));
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var slider = cljs.core.cst$kw$prais2$data_SLASH_slider.cljs$core$IFn$_invoke$arity$1(state);
var handler = cljs.core.cst$kw$prais2$data_SLASH_handler.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
if(cljs.core.truth_(handler)){
slider.off("change",handler);
} else {
}

slider.destroy();
} else {
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$prais2$data_SLASH_slider,cljs.core.array_seq([cljs.core.cst$kw$prais2$data_SLASH_handler], 0));
})], null);
});
/**
 * 
 */
prais2.data.slider_control = (function (){var render_mixin__8009__auto__ = rum.core.render_state__GT_mixin((function (state,value){
return sablono.interpreter.interpret((function (){var s = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_slider$slider,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,value], null)], null)], null);
var slider = cljs.core.cst$kw$prais2$data_SLASH_slider.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
slider.setValue(value);
} else {
}

return s;
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bs_slider("#slider",cljs.core.cst$kw$slider_DASH_axis_DASH_value),rum.core.static$], null)),"slider-control");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15761__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15761 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15762__i = 0, G__15762__a = new Array(arguments.length -  0);
while (G__15762__i < G__15762__a.length) {G__15762__a[G__15762__i] = arguments[G__15762__i + 0]; ++G__15762__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15762__a,0);
} 
return G__15761__delegate.call(this,args__8012__auto__);};
G__15761.cljs$lang$maxFixedArity = 0;
G__15761.cljs$lang$applyTo = (function (arglist__15763){
var args__8012__auto__ = cljs.core.seq(arglist__15763);
return G__15761__delegate(args__8012__auto__);
});
G__15761.cljs$core$IFn$_invoke$arity$variadic = G__15761__delegate;
return G__15761;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.detail_slider_control = (function (){var render_mixin__8009__auto__ = rum.core.render_state__GT_mixin((function (state,value){
return sablono.interpreter.interpret((function (){var s = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_detail_DASH_slider$slider,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,value], null)], null)], null);
var slider = cljs.core.cst$kw$prais2$data_SLASH_slider.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
slider.setValue(value);
} else {
}

return s;
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bs_slider("#detail-slider",cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value),rum.core.static$], null)),"detail-slider-control");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15764__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15764 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15765__i = 0, G__15765__a = new Array(arguments.length -  0);
while (G__15765__i < G__15765__a.length) {G__15765__a[G__15765__i] = arguments[G__15765__i + 0]; ++G__15765__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15765__a,0);
} 
return G__15764__delegate.call(this,args__8012__auto__);};
G__15764.cljs$lang$maxFixedArity = 0;
G__15764.cljs$lang$applyTo = (function (arglist__15766){
var args__8012__auto__ = cljs.core.seq(arglist__15766);
return G__15764__delegate(args__8012__auto__);
});
G__15764.cljs$core$IFn$_invoke$arity$variadic = G__15764__delegate;
return G__15764;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.axis_container = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function() {
var G__15768 = null;
var G__15768__1 = (function (slider_axis_value){
return sablono.interpreter.interpret((prais2.data.axis_container.cljs$core$IFn$_invoke$arity$2 ? prais2.data.axis_container.cljs$core$IFn$_invoke$arity$2(slider_axis_value,(69)) : prais2.data.axis_container.call(null,slider_axis_value,(69))));
});
var G__15768__2 = (function (slider_axis_value,tick_height){
var attrs15767 = rum.core.with_key((prais2.data.ticks.cljs$core$IFn$_invoke$arity$3 ? prais2.data.ticks.cljs$core$IFn$_invoke$arity$3(slider_axis_value,(3),tick_height) : prais2.data.ticks.call(null,slider_axis_value,(3),tick_height)),cljs.core.cst$kw$ticks);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs15767))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["axis-container"], null)], null),attrs15767], 0))):{"className": "axis-container"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15767))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15767)], null))));
});
G__15768 = function(slider_axis_value,tick_height){
switch(arguments.length){
case 1:
return G__15768__1.call(this,slider_axis_value);
case 2:
return G__15768__2.call(this,slider_axis_value,tick_height);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15768.cljs$core$IFn$_invoke$arity$1 = G__15768__1;
G__15768.cljs$core$IFn$_invoke$arity$2 = G__15768__2;
return G__15768;
})()
);
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"axis-container");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15769__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15769 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15770__i = 0, G__15770__a = new Array(arguments.length -  0);
while (G__15770__i < G__15770__a.length) {G__15770__a[G__15770__i] = arguments[G__15770__i + 0]; ++G__15770__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15770__a,0);
} 
return G__15769__delegate.call(this,args__8012__auto__);};
G__15769.cljs$lang$maxFixedArity = 0;
G__15769.cljs$lang$applyTo = (function (arglist__15771){
var args__8012__auto__ = cljs.core.seq(arglist__15771);
return G__15769__delegate(args__8012__auto__);
});
G__15769.cljs$core$IFn$_invoke$arity$variadic = G__15769__delegate;
return G__15769;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.slider_title = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (headers){
var G__15772 = "p";
var G__15773 = {"key": cljs.core.cst$kw$p};
var G__15774 = ((typeof headers === 'string')?sablono.interpreter.interpret(headers):sablono.interpreter.interpret(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$observed.cljs$core$IFn$_invoke$arity$1(headers))));
return React.createElement(G__15772,G__15773,G__15774);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"slider-title");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15775__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15775 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15776__i = 0, G__15776__a = new Array(arguments.length -  0);
while (G__15776__i < G__15776__a.length) {G__15776__a[G__15776__i] = arguments[G__15776__i + 0]; ++G__15776__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15776__a,0);
} 
return G__15775__delegate.call(this,args__8012__auto__);};
G__15775.cljs$lang$maxFixedArity = 0;
G__15775.cljs$lang$applyTo = (function (arglist__15777){
var args__8012__auto__ = cljs.core.seq(arglist__15777);
return G__15775__delegate(args__8012__auto__);
});
G__15775.cljs$core$IFn$_invoke$arity$variadic = G__15775__delegate;
return G__15775;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.table_header = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (background,ap,header,column_key){
var G__15783 = "th";
var G__15784 = {"onClick": ((function (G__15783){
return (function (p1__15778_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$sortable.cljs$core$IFn$_invoke$arity$1(header))){
return prais2.core.click__GT_event_bus(p1__15778_SHARP_,cljs.core.cst$kw$sort_DASH_toggle,column_key,null);
} else {
return null;
}
});})(G__15783))
, "onTouchStart": ((function (G__15783){
return (function (p1__15779_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$sortable.cljs$core$IFn$_invoke$arity$1(header))){
return prais2.core.click__GT_event_bus(p1__15779_SHARP_,cljs.core.cst$kw$sort_DASH_toggle,column_key,null);
} else {
return null;
}
});})(G__15783))
, "style": {"maxWidth": prais2.utils.px(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(header)), "whiteSpace": "normal !important", "verticalAlign": "top", "cursor": (cljs.core.truth_(cljs.core.cst$kw$sortable.cljs$core$IFn$_invoke$arity$1(header))?"pointer":"auto"), "backgroundColor": background, "color": "#ffffff !important"}};
var G__15785 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$sortable.cljs$core$IFn$_invoke$arity$1(header))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$icon,cljs.core.cst$kw$class,[cljs.core.str("right fa fa-sort"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$sort_DASH_by.cljs$core$IFn$_invoke$arity$1(ap)))?(cljs.core.truth_(cljs.core.cst$kw$sort_DASH_ascending.cljs$core$IFn$_invoke$arity$1(ap))?"-asc":"-desc"):""))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pointer_DASH_events,"none",cljs.core.cst$kw$zoom,1.5,cljs.core.cst$kw$color,"#ffffff"], null)], null)], null):null));
var G__15786 = (function (){var G__15787 = "span";
var G__15788 = {"key": cljs.core.cst$kw$text, "style": {"backgroundColor": "none !important", "color": "white !important"}};
var G__15789 = sablono.interpreter.interpret(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?(function (){var info_handler = ((function (G__15787,G__15788,G__15783,G__15784,G__15785){
return (function (p1__15780_SHARP_){
return prais2.core.click__GT_event_bus(p1__15780_SHARP_,cljs.core.cst$kw$info_DASH_clicked,column_key,null);
});})(G__15787,G__15788,G__15783,G__15784,G__15785))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_primary$btn_DASH_xs$info$pull_DASH_right,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$role,cljs.core.cst$kw$tabIndex,cljs.core.cst$kw$data_DASH_html,cljs.core.cst$kw$data_DASH_trigger,cljs.core.cst$kw$data_DASH_content,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$title,cljs.core.cst$kw$style,cljs.core.cst$kw$data_DASH_placement,cljs.core.cst$kw$on_DASH_touch_DASH_start,cljs.core.cst$kw$data_DASH_toggle],["button",(-1),"true","focus",cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(header),info_handler,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(header),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),"bottom",info_handler,"popover"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$i], null)], null)], null);
})():null));
var G__15790 = (function (){var G__15792 = "br";
var G__15793 = {"key": cljs.core.cst$kw$br};
return React.createElement(G__15792,G__15793);
})();
var G__15791 = sablono.interpreter.interpret(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(header));
return React.createElement(G__15787,G__15788,G__15789,G__15790,G__15791);
})();
return React.createElement(G__15783,G__15784,G__15785,G__15786);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,prais2.core.bs_popover], null)),"table-header");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15794__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15794 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15795__i = 0, G__15795__a = new Array(arguments.length -  0);
while (G__15795__i < G__15795__a.length) {G__15795__a[G__15795__i] = arguments[G__15795__i + 0]; ++G__15795__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15795__a,0);
} 
return G__15794__delegate.call(this,args__8012__auto__);};
G__15794.cljs$lang$maxFixedArity = 0;
G__15794.cljs$lang$applyTo = (function (arglist__15796){
var args__8012__auto__ = cljs.core.seq(arglist__15796);
return G__15794__delegate(args__8012__auto__);
});
G__15794.cljs$core$IFn$_invoke$arity$variadic = G__15794__delegate;
return G__15794;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.slider_widget = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function() {
var G__15798 = null;
var G__15798__3 = (function (headers,control,slider_axis_value){
return sablono.interpreter.interpret((prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$4 ? prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$4(headers,control,slider_axis_value,(69)) : prais2.data.slider_widget.call(null,headers,control,slider_axis_value,(69))));
});
var G__15798__4 = (function (headers,control,slider_axis_value,tick_height){
var attrs15797 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.data.slider_title.cljs$core$IFn$_invoke$arity$1 ? prais2.data.slider_title.cljs$core$IFn$_invoke$arity$1(headers) : prais2.data.slider_title.call(null,headers)),(prais2.data.slider_labels.cljs$core$IFn$_invoke$arity$0 ? prais2.data.slider_labels.cljs$core$IFn$_invoke$arity$0() : prais2.data.slider_labels.call(null)),(control.cljs$core$IFn$_invoke$arity$4 ? control.cljs$core$IFn$_invoke$arity$4(slider_axis_value,(0),(1),0.02) : control.call(null,slider_axis_value,(0),(1),0.02)),(prais2.data.axis_container.cljs$core$IFn$_invoke$arity$2 ? prais2.data.axis_container.cljs$core$IFn$_invoke$arity$2(slider_axis_value,tick_height) : prais2.data.axis_container.call(null,slider_axis_value,tick_height))], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs15797))?sablono.interpreter.attributes(attrs15797):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15797))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15797)], null))));
});
G__15798 = function(headers,control,slider_axis_value,tick_height){
switch(arguments.length){
case 3:
return G__15798__3.call(this,headers,control,slider_axis_value);
case 4:
return G__15798__4.call(this,headers,control,slider_axis_value,tick_height);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15798.cljs$core$IFn$_invoke$arity$3 = G__15798__3;
G__15798.cljs$core$IFn$_invoke$arity$4 = G__15798__4;
return G__15798;
})()
);
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"slider-widget");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15799__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15799 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15800__i = 0, G__15800__a = new Array(arguments.length -  0);
while (G__15800__i < G__15800__a.length) {G__15800__a[G__15800__i] = arguments[G__15800__i + 0]; ++G__15800__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15800__a,0);
} 
return G__15799__delegate.call(this,args__8012__auto__);};
G__15799.cljs$lang$maxFixedArity = 0;
G__15799.cljs$lang$applyTo = (function (arglist__15801){
var args__8012__auto__ = cljs.core.seq(arglist__15801);
return G__15799__delegate(args__8012__auto__);
});
G__15799.cljs$core$IFn$_invoke$arity$variadic = G__15799__delegate;
return G__15799;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.table_head = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (ap,headers,column_keys,slider_axis_value){
var G__15862 = "thead";
var G__15863 = null;
var G__15864 = (function (){var G__15893 = "tr";
var G__15894 = null;
var G__15895 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__7001__auto__ = ((function (G__15893,G__15894,G__15862,G__15863){
return (function prais2$data$iter__15897(s__15898){
return (new cljs.core.LazySeq(null,((function (G__15893,G__15894,G__15862,G__15863){
return (function (){
var s__15898__$1 = s__15898;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15898__$1);
if(temp__4657__auto__){
var s__15898__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15898__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__15898__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__15900 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__15899 = (0);
while(true){
if((i__15899 < size__7000__auto__)){
var column_key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__15899);
if(cljs.core.truth_(cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers))))){
cljs.core.chunk_append(b__15900,sablono.interpreter.interpret(rum.core.with_key((function (){var G__15911 = cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(ap)));
var G__15912 = ap;
var G__15913 = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers));
var G__15914 = column_key;
return (prais2.data.table_header.cljs$core$IFn$_invoke$arity$4 ? prais2.data.table_header.cljs$core$IFn$_invoke$arity$4(G__15911,G__15912,G__15913,G__15914) : prais2.data.table_header.call(null,G__15911,G__15912,G__15913,G__15914));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_key,"head"], null))));

var G__15925 = (i__15899 + (1));
i__15899 = G__15925;
continue;
} else {
var G__15926 = (i__15899 + (1));
i__15899 = G__15926;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15900),prais2$data$iter__15897(cljs.core.chunk_rest(s__15898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15900),null);
}
} else {
var column_key = cljs.core.first(s__15898__$2);
if(cljs.core.truth_(cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers))))){
return cljs.core.cons(sablono.interpreter.interpret(rum.core.with_key((function (){var G__15915 = cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(ap)));
var G__15916 = ap;
var G__15917 = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers));
var G__15918 = column_key;
return (prais2.data.table_header.cljs$core$IFn$_invoke$arity$4 ? prais2.data.table_header.cljs$core$IFn$_invoke$arity$4(G__15915,G__15916,G__15917,G__15918) : prais2.data.table_header.call(null,G__15915,G__15916,G__15917,G__15918));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_key,"head"], null))),prais2$data$iter__15897(cljs.core.rest(s__15898__$2)));
} else {
var G__15927 = cljs.core.rest(s__15898__$2);
s__15898__$1 = G__15927;
continue;
}
}
} else {
return null;
}
break;
}
});})(G__15893,G__15894,G__15862,G__15863))
,null,null));
});})(G__15893,G__15894,G__15862,G__15863))
;
return iter__7001__auto__(column_keys);
})());
var G__15896 = (function (){var G__15919 = "th";
var G__15920 = {"key": cljs.core.cst$kw$last};
var G__15921 = (function (){var G__15922 = "div";
var G__15923 = {"style": {"height": prais2.utils.px(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$observed.cljs$core$IFn$_invoke$arity$1(headers)))}, "className": "slider-container"};
var G__15924 = sablono.interpreter.interpret((prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$4 ? prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$4(headers,prais2.data.slider_control,slider_axis_value,(748)) : prais2.data.slider_widget.call(null,headers,prais2.data.slider_control,slider_axis_value,(748))));
return React.createElement(G__15922,G__15923,G__15924);
})();
return React.createElement(G__15919,G__15920,G__15921);
})();
return React.createElement(G__15893,G__15894,G__15895,G__15896);
})();
return React.createElement(G__15862,G__15863,G__15864);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"table-head");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15928__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15928 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15929__i = 0, G__15929__a = new Array(arguments.length -  0);
while (G__15929__i < G__15929__a.length) {G__15929__a[G__15929__i] = arguments[G__15929__i + 0]; ++G__15929__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15929__a,0);
} 
return G__15928__delegate.call(this,args__8012__auto__);};
G__15928.cljs$lang$maxFixedArity = 0;
G__15928.cljs$lang$applyTo = (function (arglist__15930){
var args__8012__auto__ = cljs.core.seq(arglist__15930);
return G__15928__delegate(args__8012__auto__);
});
G__15928.cljs$core$IFn$_invoke$arity$variadic = G__15928__delegate;
return G__15928;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.table1_core = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (ap,data,sort_key,sort_direction,headers){
var G__15933 = "table";
var G__15934 = {"cellSpacing": "0", "className": "table table-bordered"};
var G__15935 = sablono.interpreter.interpret(rum.core.with_key((function (){var G__15937 = ap;
var G__15938 = headers;
var G__15939 = cljs.core.keys(headers);
var G__15940 = cljs.core.cst$kw$slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
return (prais2.data.table_head.cljs$core$IFn$_invoke$arity$4 ? prais2.data.table_head.cljs$core$IFn$_invoke$arity$4(G__15937,G__15938,G__15939,G__15940) : prais2.data.table_head.call(null,G__15937,G__15938,G__15939,G__15940));
})(),cljs.core.cst$kw$thead));
var G__15936 = (function (){var G__15941 = "tbody";
var G__15942 = {"key": cljs.core.cst$kw$tbody};
var G__15943 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__7001__auto__ = ((function (G__15941,G__15942,G__15933,G__15934,G__15935){
return (function prais2$data$iter__15944(s__15945){
return (new cljs.core.LazySeq(null,((function (G__15941,G__15942,G__15933,G__15934,G__15935){
return (function (){
var s__15945__$1 = s__15945;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15945__$1);
if(temp__4657__auto__){
var s__15945__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15945__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__15945__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__15947 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__15946 = (0);
while(true){
if((i__15946 < size__7000__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__15946);
var h_code = cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(row);
var slider_axis_value = cljs.core.cst$kw$slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
cljs.core.chunk_append(b__15947,(function (){var G__16024 = "tr";
var G__16025 = {"key": h_code, "className": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(h_code),cljs.core.cst$kw$selected_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(ap)))?"info":"")};
var G__16026 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__7001__auto__ = ((function (i__15946,G__16024,G__16025,h_code,slider_axis_value,row,c__6999__auto__,size__7000__auto__,b__15947,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935){
return (function prais2$data$iter__15944_$_iter__16028(s__16029){
return (new cljs.core.LazySeq(null,((function (i__15946,G__16024,G__16025,h_code,slider_axis_value,row,c__6999__auto__,size__7000__auto__,b__15947,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935){
return (function (){
var s__16029__$1 = s__16029;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__16029__$1);
if(temp__4657__auto____$1){
var s__16029__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16029__$2)){
var c__6999__auto____$1 = cljs.core.chunk_first(s__16029__$2);
var size__7000__auto____$1 = cljs.core.count(c__6999__auto____$1);
var b__16031 = cljs.core.chunk_buffer(size__7000__auto____$1);
if((function (){var i__16030 = (0);
while(true){
if((i__16030 < size__7000__auto____$1)){
var column_key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto____$1,i__16030);
var column_header = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers));
var info_handler = ((function (i__16030,s__16029__$1,i__15946,column_header,column_key,c__6999__auto____$1,size__7000__auto____$1,b__16031,s__16029__$2,temp__4657__auto____$1,G__16024,G__16025,h_code,slider_axis_value,row,c__6999__auto__,size__7000__auto__,b__15947,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935){
return (function (p1__15931_SHARP_){
return prais2.core.click__GT_event_bus(p1__15931_SHARP_,cljs.core.cst$kw$open_DASH_hospital_DASH_modal,h_code,null);
});})(i__16030,s__16029__$1,i__15946,column_header,column_key,c__6999__auto____$1,size__7000__auto____$1,b__16031,s__16029__$2,temp__4657__auto____$1,G__16024,G__16025,h_code,slider_axis_value,row,c__6999__auto__,size__7000__auto__,b__15947,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935))
;
if(cljs.core.truth_(cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1(column_header))){
cljs.core.chunk_append(b__16031,(function (){var attrs15932 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"h-name":""),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max_DASH_width,prais2.utils.px(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(column_header)),cljs.core.cst$kw$white_DASH_space,"normal",cljs.core.cst$kw$height,prais2.utils.px(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(column_header))], null)], 0))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_touch_DASH_start,info_handler,cljs.core.cst$kw$on_DASH_click,info_handler], null):null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs15932))?sablono.interpreter.attributes(attrs15932):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15932))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16046 = "div";
var G__16047 = {"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")}};
var G__16048 = sablono.interpreter.interpret([cljs.core.str((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?" %":null))].join(''));
return React.createElement(G__16046,G__16047,G__16048);
})(),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15932),(function (){var G__16049 = "div";
var G__16050 = {"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")}};
var G__16051 = sablono.interpreter.interpret([cljs.core.str((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?" %":null))].join(''));
return React.createElement(G__16049,G__16050,G__16051);
})(),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null))));
})());

var G__16098 = (i__16030 + (1));
i__16030 = G__16098;
continue;
} else {
var G__16099 = (i__16030 + (1));
i__16030 = G__16099;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16031),prais2$data$iter__15944_$_iter__16028(cljs.core.chunk_rest(s__16029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16031),null);
}
} else {
var column_key = cljs.core.first(s__16029__$2);
var column_header = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers));
var info_handler = ((function (s__16029__$1,i__15946,column_header,column_key,s__16029__$2,temp__4657__auto____$1,G__16024,G__16025,h_code,slider_axis_value,row,c__6999__auto__,size__7000__auto__,b__15947,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935){
return (function (p1__15931_SHARP_){
return prais2.core.click__GT_event_bus(p1__15931_SHARP_,cljs.core.cst$kw$open_DASH_hospital_DASH_modal,h_code,null);
});})(s__16029__$1,i__15946,column_header,column_key,s__16029__$2,temp__4657__auto____$1,G__16024,G__16025,h_code,slider_axis_value,row,c__6999__auto__,size__7000__auto__,b__15947,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935))
;
if(cljs.core.truth_(cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1(column_header))){
return cljs.core.cons((function (){var attrs15932 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"h-name":""),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max_DASH_width,prais2.utils.px(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(column_header)),cljs.core.cst$kw$white_DASH_space,"normal",cljs.core.cst$kw$height,prais2.utils.px(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(column_header))], null)], 0))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_touch_DASH_start,info_handler,cljs.core.cst$kw$on_DASH_click,info_handler], null):null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs15932))?sablono.interpreter.attributes(attrs15932):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15932))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16052 = "div";
var G__16053 = {"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")}};
var G__16054 = sablono.interpreter.interpret([cljs.core.str((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?" %":null))].join(''));
return React.createElement(G__16052,G__16053,G__16054);
})(),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15932),(function (){var G__16055 = "div";
var G__16056 = {"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")}};
var G__16057 = sablono.interpreter.interpret([cljs.core.str((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?" %":null))].join(''));
return React.createElement(G__16055,G__16056,G__16057);
})(),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null))));
})(),prais2$data$iter__15944_$_iter__16028(cljs.core.rest(s__16029__$2)));
} else {
var G__16100 = cljs.core.rest(s__16029__$2);
s__16029__$1 = G__16100;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__15946,G__16024,G__16025,h_code,slider_axis_value,row,c__6999__auto__,size__7000__auto__,b__15947,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935))
,null,null));
});})(i__15946,G__16024,G__16025,h_code,slider_axis_value,row,c__6999__auto__,size__7000__auto__,b__15947,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935))
;
return iter__7001__auto__(cljs.core.keys(headers));
})());
var G__16027 = (function (){var G__16058 = "td";
var G__16059 = {"key": [h_code,cljs.core.cst$kw$bars], "style": {"backgroundColor": "#f0f0f0"}};
var G__16060 = sablono.interpreter.interpret((prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2 ? prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2(row,slider_axis_value) : prais2.data.chart_cell.call(null,row,slider_axis_value)));
return React.createElement(G__16058,G__16059,G__16060);
})();
return React.createElement(G__16024,G__16025,G__16026,G__16027);
})());

var G__16101 = (i__15946 + (1));
i__15946 = G__16101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15947),prais2$data$iter__15944(cljs.core.chunk_rest(s__15945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15947),null);
}
} else {
var row = cljs.core.first(s__15945__$2);
var h_code = cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(row);
var slider_axis_value = cljs.core.cst$kw$slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
return cljs.core.cons((function (){var G__16061 = "tr";
var G__16062 = {"key": h_code, "className": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(h_code),cljs.core.cst$kw$selected_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(ap)))?"info":"")};
var G__16063 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__7001__auto__ = ((function (G__16061,G__16062,h_code,slider_axis_value,row,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935){
return (function prais2$data$iter__15944_$_iter__16065(s__16066){
return (new cljs.core.LazySeq(null,((function (G__16061,G__16062,h_code,slider_axis_value,row,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935){
return (function (){
var s__16066__$1 = s__16066;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__16066__$1);
if(temp__4657__auto____$1){
var s__16066__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16066__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__16066__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__16068 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__16067 = (0);
while(true){
if((i__16067 < size__7000__auto__)){
var column_key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__16067);
var column_header = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers));
var info_handler = ((function (i__16067,s__16066__$1,column_header,column_key,c__6999__auto__,size__7000__auto__,b__16068,s__16066__$2,temp__4657__auto____$1,G__16061,G__16062,h_code,slider_axis_value,row,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935){
return (function (p1__15931_SHARP_){
return prais2.core.click__GT_event_bus(p1__15931_SHARP_,cljs.core.cst$kw$open_DASH_hospital_DASH_modal,h_code,null);
});})(i__16067,s__16066__$1,column_header,column_key,c__6999__auto__,size__7000__auto__,b__16068,s__16066__$2,temp__4657__auto____$1,G__16061,G__16062,h_code,slider_axis_value,row,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935))
;
if(cljs.core.truth_(cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1(column_header))){
cljs.core.chunk_append(b__16068,(function (){var attrs15932 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"h-name":""),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max_DASH_width,prais2.utils.px(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(column_header)),cljs.core.cst$kw$white_DASH_space,"normal",cljs.core.cst$kw$height,prais2.utils.px(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(column_header))], null)], 0))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_touch_DASH_start,info_handler,cljs.core.cst$kw$on_DASH_click,info_handler], null):null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs15932))?sablono.interpreter.attributes(attrs15932):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15932))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16083 = "div";
var G__16084 = {"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")}};
var G__16085 = sablono.interpreter.interpret([cljs.core.str((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?" %":null))].join(''));
return React.createElement(G__16083,G__16084,G__16085);
})(),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15932),(function (){var G__16086 = "div";
var G__16087 = {"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")}};
var G__16088 = sablono.interpreter.interpret([cljs.core.str((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?" %":null))].join(''));
return React.createElement(G__16086,G__16087,G__16088);
})(),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null))));
})());

var G__16102 = (i__16067 + (1));
i__16067 = G__16102;
continue;
} else {
var G__16103 = (i__16067 + (1));
i__16067 = G__16103;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16068),prais2$data$iter__15944_$_iter__16065(cljs.core.chunk_rest(s__16066__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16068),null);
}
} else {
var column_key = cljs.core.first(s__16066__$2);
var column_header = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers));
var info_handler = ((function (s__16066__$1,column_header,column_key,s__16066__$2,temp__4657__auto____$1,G__16061,G__16062,h_code,slider_axis_value,row,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935){
return (function (p1__15931_SHARP_){
return prais2.core.click__GT_event_bus(p1__15931_SHARP_,cljs.core.cst$kw$open_DASH_hospital_DASH_modal,h_code,null);
});})(s__16066__$1,column_header,column_key,s__16066__$2,temp__4657__auto____$1,G__16061,G__16062,h_code,slider_axis_value,row,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935))
;
if(cljs.core.truth_(cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1(column_header))){
return cljs.core.cons((function (){var attrs15932 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"h-name":""),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max_DASH_width,prais2.utils.px(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(column_header)),cljs.core.cst$kw$white_DASH_space,"normal",cljs.core.cst$kw$height,prais2.utils.px(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(column_header))], null)], 0))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_touch_DASH_start,info_handler,cljs.core.cst$kw$on_DASH_click,info_handler], null):null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs15932))?sablono.interpreter.attributes(attrs15932):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs15932))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16089 = "div";
var G__16090 = {"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")}};
var G__16091 = sablono.interpreter.interpret([cljs.core.str((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?" %":null))].join(''));
return React.createElement(G__16089,G__16090,G__16091);
})(),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15932),(function (){var G__16092 = "div";
var G__16093 = {"style": {"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")}};
var G__16094 = sablono.interpreter.interpret([cljs.core.str((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?" %":null))].join(''));
return React.createElement(G__16092,G__16093,G__16094);
})(),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null))));
})(),prais2$data$iter__15944_$_iter__16065(cljs.core.rest(s__16066__$2)));
} else {
var G__16104 = cljs.core.rest(s__16066__$2);
s__16066__$1 = G__16104;
continue;
}
}
} else {
return null;
}
break;
}
});})(G__16061,G__16062,h_code,slider_axis_value,row,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935))
,null,null));
});})(G__16061,G__16062,h_code,slider_axis_value,row,s__15945__$2,temp__4657__auto__,G__15941,G__15942,G__15933,G__15934,G__15935))
;
return iter__7001__auto__(cljs.core.keys(headers));
})());
var G__16064 = (function (){var G__16095 = "td";
var G__16096 = {"key": [h_code,cljs.core.cst$kw$bars], "style": {"backgroundColor": "#f0f0f0"}};
var G__16097 = sablono.interpreter.interpret((prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2 ? prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2(row,slider_axis_value) : prais2.data.chart_cell.call(null,row,slider_axis_value)));
return React.createElement(G__16095,G__16096,G__16097);
})();
return React.createElement(G__16061,G__16062,G__16063,G__16064);
})(),prais2$data$iter__15944(cljs.core.rest(s__15945__$2)));
}
} else {
return null;
}
break;
}
});})(G__15941,G__15942,G__15933,G__15934,G__15935))
,null,null));
});})(G__15941,G__15942,G__15933,G__15934,G__15935))
;
return iter__7001__auto__((cljs.core.truth_(sort_key)?(function (){var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_key,cljs.core.rest(data));
if(cljs.core.truth_(sort_direction)){
return sorted;
} else {
return cljs.core.reverse(sorted);
}
})():cljs.core.rest(data)));
})());
return React.createElement(G__15941,G__15942,G__15943);
})();
return React.createElement(G__15933,G__15934,G__15935,G__15936);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"table1-core");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16105__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16105 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16106__i = 0, G__16106__a = new Array(arguments.length -  0);
while (G__16106__i < G__16106__a.length) {G__16106__a[G__16106__i] = arguments[G__16106__i + 0]; ++G__16106__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16106__a,0);
} 
return G__16105__delegate.call(this,args__8012__auto__);};
G__16105.cljs$lang$maxFixedArity = 0;
G__16105.cljs$lang$applyTo = (function (arglist__16107){
var args__8012__auto__ = cljs.core.seq(arglist__16107);
return G__16105__delegate(args__8012__auto__);
});
G__16105.cljs$core$IFn$_invoke$arity$variadic = G__16105__delegate;
return G__16105;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.table1 = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (app,data){
var G__16109 = "div";
var G__16110 = {"className": "table-container"};
var G__16111 = (function (){var attrs16108 = (function (){var G__16112 = rum.core.react(app);
var G__16113 = data;
var G__16114 = cljs.core.cst$kw$sort_DASH_by.cljs$core$IFn$_invoke$arity$1(rum.core.react(app));
var G__16115 = cljs.core.cst$kw$sort_DASH_ascending.cljs$core$IFn$_invoke$arity$1(rum.core.react(app));
var G__16116 = cljs.core.first(data);
return (prais2.data.table1_core.cljs$core$IFn$_invoke$arity$5 ? prais2.data.table1_core.cljs$core$IFn$_invoke$arity$5(G__16112,G__16113,G__16114,G__16115,G__16116) : prais2.data.table1_core.call(null,G__16112,G__16113,G__16114,G__16115,G__16116));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16108))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data-table"], null)], null),attrs16108], 0))):{"className": "data-table"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16108))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16108)], null))));
})();
return React.createElement(G__16109,G__16110,G__16111);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"table1");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16117__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16117 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16118__i = 0, G__16118__a = new Array(arguments.length -  0);
while (G__16118__i < G__16118__a.length) {G__16118__a[G__16118__i] = arguments[G__16118__i + 0]; ++G__16118__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16118__a,0);
} 
return G__16117__delegate.call(this,args__8012__auto__);};
G__16117.cljs$lang$maxFixedArity = 0;
G__16117.cljs$lang$applyTo = (function (arglist__16119){
var args__8012__auto__ = cljs.core.seq(arglist__16119);
return G__16117__delegate(args__8012__auto__);
});
G__16117.cljs$core$IFn$_invoke$arity$variadic = G__16117__delegate;
return G__16117;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
prais2.data.year_range = (function prais2$data$year_range(year,m1,m2){
var y1 = (year - (3));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$y1,y1,cljs.core.cst$kw$mrange,[cljs.core.str(m1),cljs.core.str(" "),cljs.core.str(y1),cljs.core.str(" \u2014 "),cljs.core.str(m2),cljs.core.str(" "),cljs.core.str(year)].join(''),cljs.core.cst$kw$option,[cljs.core.str(y1),cljs.core.str(" \u2014 "),cljs.core.str(year)].join('')], null);
});
prais2.data.end_year = (function prais2$data$end_year(){
var G__16121 = cljs.core.name(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.core.app) : cljs.core.deref.call(null,prais2.core.app))));
return parseInt(G__16121);
});
/**
 * 
 */
prais2.data.key_option = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (year){
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic("option",{"value": [cljs.core.str(year)].join('')},cljs.core.array_seq([sablono.interpreter.interpret(cljs.core.cst$kw$option.cljs$core$IFn$_invoke$arity$1(prais2.data.year_range(year,"April","March")))], 0));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"key-option");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16122__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16122 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16123__i = 0, G__16123__a = new Array(arguments.length -  0);
while (G__16123__i < G__16123__a.length) {G__16123__a[G__16123__i] = arguments[G__16123__i + 0]; ++G__16123__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16123__a,0);
} 
return G__16122__delegate.call(this,args__8012__auto__);};
G__16122.cljs$lang$maxFixedArity = 0;
G__16122.cljs$lang$applyTo = (function (arglist__16124){
var args__8012__auto__ = cljs.core.seq(arglist__16124);
return G__16122__delegate(args__8012__auto__);
});
G__16122.cljs$core$IFn$_invoke$arity$variadic = G__16122__delegate;
return G__16122;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.datasource_dropdown = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (event_bus){
var G__16128 = "div";
var G__16129 = {"className": "form-group"};
var G__16130 = (function (){var G__16132 = "label-for";
var G__16133 = {"htmlFor": "data-selector"};
var G__16134 = "Change reporting period";
return React.createElement(G__16132,G__16133,G__16134);
})();
var G__16131 = (function (){var G__16135 = "select";
var G__16136 = {"id": "data-selector", "value": cljs.core.name(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app))), "onChange": ((function (G__16135,G__16128,G__16129,G__16130){
return (function (p1__16125_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_datasource,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__16125_SHARP_.target.value)], null));
});})(G__16135,G__16128,G__16129,G__16130))
, "className": "form-control input-sm"};
var G__16137 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,(function (){var iter__7001__auto__ = ((function (G__16135,G__16136,G__16128,G__16129,G__16130){
return (function prais2$data$iter__16138(s__16139){
return (new cljs.core.LazySeq(null,((function (G__16135,G__16136,G__16128,G__16129,G__16130){
return (function (){
var s__16139__$1 = s__16139;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16139__$1);
if(temp__4657__auto__){
var s__16139__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16139__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__16139__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__16141 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__16140 = (0);
while(true){
if((i__16140 < size__7000__auto__)){
var year = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__16140);
cljs.core.chunk_append(b__16141,(prais2.data.key_option.cljs$core$IFn$_invoke$arity$1 ? prais2.data.key_option.cljs$core$IFn$_invoke$arity$1(year) : prais2.data.key_option.call(null,year)));

var G__16144 = (i__16140 + (1));
i__16140 = G__16144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16141),prais2$data$iter__16138(cljs.core.chunk_rest(s__16139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16141),null);
}
} else {
var year = cljs.core.first(s__16139__$2);
return cljs.core.cons((prais2.data.key_option.cljs$core$IFn$_invoke$arity$1 ? prais2.data.key_option.cljs$core$IFn$_invoke$arity$1(year) : prais2.data.key_option.call(null,year)),prais2$data$iter__16138(cljs.core.rest(s__16139__$2)));
}
} else {
return null;
}
break;
}
});})(G__16135,G__16136,G__16128,G__16129,G__16130))
,null,null));
});})(G__16135,G__16136,G__16128,G__16129,G__16130))
;
return iter__7001__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2013),(2020)));
})()));
return React.createElement(G__16135,G__16136,G__16137);
})();
return React.createElement(G__16128,G__16129,G__16130,G__16131);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"datasource-dropdown");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16145__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16145 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16146__i = 0, G__16146__a = new Array(arguments.length -  0);
while (G__16146__i < G__16146__a.length) {G__16146__a[G__16146__i] = arguments[G__16146__i + 0]; ++G__16146__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16146__a,0);
} 
return G__16145__delegate.call(this,args__8012__auto__);};
G__16145.cljs$lang$maxFixedArity = 0;
G__16145.cljs$lang$applyTo = (function (arglist__16147){
var args__8012__auto__ = cljs.core.seq(arglist__16147);
return G__16145__delegate(args__8012__auto__);
});
G__16145.cljs$core$IFn$_invoke$arity$variadic = G__16145__delegate;
return G__16145;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.datasource_title = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (prefix){
var attrs16148 = [cljs.core.str(prefix),cljs.core.str(cljs.core.cst$kw$mrange.cljs$core$IFn$_invoke$arity$1(prais2.data.year_range(prais2.data.end_year(),"April","March")))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",((cljs.core.map_QMARK_(attrs16148))?sablono.interpreter.attributes(attrs16148):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16148))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16148)], null))));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"datasource-title");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16149__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16149 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16150__i = 0, G__16150__a = new Array(arguments.length -  0);
while (G__16150__i < G__16150__a.length) {G__16150__a[G__16150__i] = arguments[G__16150__i + 0]; ++G__16150__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16150__a,0);
} 
return G__16149__delegate.call(this,args__8012__auto__);};
G__16149.cljs$lang$maxFixedArity = 0;
G__16149.cljs$lang$applyTo = (function (arglist__16151){
var args__8012__auto__ = cljs.core.seq(arglist__16151);
return G__16149__delegate(args__8012__auto__);
});
G__16149.cljs$core$IFn$_invoke$arity$variadic = G__16149__delegate;
return G__16149;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.list_tab = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (app,data,event_bus){
var G__16189 = "div";
var G__16190 = null;
var G__16191 = (function (){var G__16193 = "div";
var G__16194 = {"className": "col-sm-offset-1 col-sm-10"};
var G__16195 = (function (){var G__16200 = "div";
var G__16201 = {"className": "row"};
var G__16202 = (function (){var attrs16152 = (prais2.data.datasource_title.cljs$core$IFn$_invoke$arity$1 ? prais2.data.datasource_title.cljs$core$IFn$_invoke$arity$1("Data for ") : prais2.data.datasource_title.call(null,"Data for "));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16152))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-9"], null)], null),attrs16152], 0))):{"className": "col-sm-9"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16152))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16152)], null))));
})();
var G__16203 = (function (){var attrs16153 = (prais2.data.datasource_dropdown.cljs$core$IFn$_invoke$arity$1 ? prais2.data.datasource_dropdown.cljs$core$IFn$_invoke$arity$1(event_bus) : prais2.data.datasource_dropdown.call(null,event_bus));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16153))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-3"], null)], null),attrs16153], 0))):{"className": "col-sm-3"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16153))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16153)], null))));
})();
return React.createElement(G__16200,G__16201,G__16202,G__16203);
})();
var G__16196 = (function (){var G__16204 = "p";
var G__16205 = {"className": "col-sm-9"};
var G__16206 = "These are the hospitals in the UK and Ireland that performed heart surgery in children over this period\n     (0-16 years old).";
return React.createElement(G__16204,G__16205,G__16206);
})();
var G__16197 = (function (){var G__16207 = "p";
var G__16208 = {"className": "col-sm-9"};
var G__16209 = "Clicking on a hospital will bring up specific information for\n     that hospital along with an interpretation of its survival rate. It is ";
var G__16210 = React.createElement("strong",null,"only");
var G__16211 = " valid to compare a hospital's survival\n     rate to its predicted range of survival and not to other hospitals. Read more about this in ";
var G__16212 = (function (){var attrs16158 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16158))?sablono.interpreter.attributes(attrs16158):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16158))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16158),"Everything Else."], null))));
})();
return React.createElement(G__16207,G__16208,G__16209,G__16210,G__16211,G__16212);
})();
var G__16198 = (function (){var G__16213 = "p";
var G__16214 = {"className": "col-sm-9"};
var G__16215 = (function (){var attrs16159 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16159))?sablono.interpreter.attributes(attrs16159):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16159))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16159),"The Everything Else"], null))));
})();
var G__16216 = " section also tells you more about the predicted range and what\n     happens if a hospital\u2019s survival rate is outside its range.";
return React.createElement(G__16213,G__16214,G__16215,G__16216);
})();
var G__16199 = (function (){var G__16217 = "p";
var G__16218 = {"className": "col-sm-9"};
var G__16219 = "You can hover over or tap on the charts to bring up more information.";
return React.createElement(G__16217,G__16218,G__16219);
})();
return React.createElement(G__16193,G__16194,G__16195,G__16196,G__16197,G__16198,G__16199);
})();
var G__16192 = sablono.interpreter.interpret((prais2.data.table1.cljs$core$IFn$_invoke$arity$2 ? prais2.data.table1.cljs$core$IFn$_invoke$arity$2(app,data) : prais2.data.table1.call(null,app,data)));
return React.createElement(G__16189,G__16190,G__16191,G__16192);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.update_title("All hospitals")], null)),"list-tab");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16220__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16220 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16221__i = 0, G__16221__a = new Array(arguments.length -  0);
while (G__16221__i < G__16221__a.length) {G__16221__a[G__16221__i] = arguments[G__16221__i + 0]; ++G__16221__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16221__a,0);
} 
return G__16220__delegate.call(this,args__8012__auto__);};
G__16220.cljs$lang$maxFixedArity = 0;
G__16220.cljs$lang$applyTo = (function (arglist__16222){
var args__8012__auto__ = cljs.core.seq(arglist__16222);
return G__16220__delegate(args__8012__auto__);
});
G__16220.cljs$core$IFn$_invoke$arity$variadic = G__16220__delegate;
return G__16220;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.interpretation = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (row,close_modal){
return sablono.interpreter.interpret((function (){var survival_rate = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
if((survival_rate < cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row))){
return (prais2.content.outer_low_comment.cljs$core$IFn$_invoke$arity$1 ? prais2.content.outer_low_comment.cljs$core$IFn$_invoke$arity$1(close_modal) : prais2.content.outer_low_comment.call(null,close_modal));
} else {
if((survival_rate < cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row))){
return (prais2.content.low_comment.cljs$core$IFn$_invoke$arity$1 ? prais2.content.low_comment.cljs$core$IFn$_invoke$arity$1(close_modal) : prais2.content.low_comment.call(null,close_modal));
} else {
if((survival_rate <= cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row))){
return (prais2.content.inner_comment.cljs$core$IFn$_invoke$arity$1 ? prais2.content.inner_comment.cljs$core$IFn$_invoke$arity$1(close_modal) : prais2.content.inner_comment.call(null,close_modal));
} else {
if((survival_rate <= cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row))){
return (prais2.content.high_comment.cljs$core$IFn$_invoke$arity$1 ? prais2.content.high_comment.cljs$core$IFn$_invoke$arity$1(close_modal) : prais2.content.high_comment.call(null,close_modal));
} else {
if((survival_rate > cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row))){
return (prais2.content.outer_high_comment.cljs$core$IFn$_invoke$arity$1 ? prais2.content.outer_high_comment.cljs$core$IFn$_invoke$arity$1(close_modal) : prais2.content.outer_high_comment.call(null,close_modal));
} else {
return "Oops - no text for this";

}
}
}
}
}
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"interpretation");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16223__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16223 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16224__i = 0, G__16224__a = new Array(arguments.length -  0);
while (G__16224__i < G__16224__a.length) {G__16224__a[G__16224__i] = arguments[G__16224__i + 0]; ++G__16224__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16224__a,0);
} 
return G__16223__delegate.call(this,args__8012__auto__);};
G__16223.cljs$lang$maxFixedArity = 0;
G__16223.cljs$lang$applyTo = (function (arglist__16225){
var args__8012__auto__ = cljs.core.seq(arglist__16225);
return G__16223__delegate(args__8012__auto__);
});
G__16223.cljs$core$IFn$_invoke$arity$variadic = G__16223__delegate;
return G__16223;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.hospital_charities = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (h_code){
return sablono.interpreter.interpret((function (){var meta = (h_code.cljs$core$IFn$_invoke$arity$1 ? h_code.cljs$core$IFn$_invoke$arity$1(prais2.content.hospital_metadata) : h_code.call(null,prais2.content.hospital_metadata));
var vec__16226 = meta;
var link1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(0),null);
var link2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(1),null);
var link3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(2),null);
var link4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(3),null);
var link5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(4),null);
if(cljs.core.truth_(link1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null),"Further web information"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,(link1.cljs$core$IFn$_invoke$arity$1 ? link1.cljs$core$IFn$_invoke$arity$1((1)) : link1.call(null,(1))),(link1.cljs$core$IFn$_invoke$arity$1 ? link1.cljs$core$IFn$_invoke$arity$1((2)) : link1.call(null,(2)))], null)], null),(cljs.core.truth_(link2)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,(link2.cljs$core$IFn$_invoke$arity$1 ? link2.cljs$core$IFn$_invoke$arity$1((1)) : link2.call(null,(1))),(link2.cljs$core$IFn$_invoke$arity$1 ? link2.cljs$core$IFn$_invoke$arity$1((2)) : link2.call(null,(2)))], null)], null):null),(cljs.core.truth_(link3)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,(link3.cljs$core$IFn$_invoke$arity$1 ? link3.cljs$core$IFn$_invoke$arity$1((1)) : link3.call(null,(1))),(link3.cljs$core$IFn$_invoke$arity$1 ? link3.cljs$core$IFn$_invoke$arity$1((2)) : link3.call(null,(2)))], null)], null):null),(cljs.core.truth_(link4)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,(link4.cljs$core$IFn$_invoke$arity$1 ? link4.cljs$core$IFn$_invoke$arity$1((1)) : link4.call(null,(1))),(link4.cljs$core$IFn$_invoke$arity$1 ? link4.cljs$core$IFn$_invoke$arity$1((2)) : link4.call(null,(2)))], null)], null):null),(cljs.core.truth_(link5)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,(link5.cljs$core$IFn$_invoke$arity$1 ? link5.cljs$core$IFn$_invoke$arity$1((1)) : link5.call(null,(1))),(link5.cljs$core$IFn$_invoke$arity$1 ? link5.cljs$core$IFn$_invoke$arity$1((2)) : link5.call(null,(2)))], null)], null):null)], null)], null);
} else {
return null;
}
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-charities");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16229__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16229 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16230__i = 0, G__16230__a = new Array(arguments.length -  0);
while (G__16230__i < G__16230__a.length) {G__16230__a[G__16230__i] = arguments[G__16230__i + 0]; ++G__16230__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16230__a,0);
} 
return G__16229__delegate.call(this,args__8012__auto__);};
G__16229.cljs$lang$maxFixedArity = 0;
G__16229.cljs$lang$applyTo = (function (arglist__16231){
var args__8012__auto__ = cljs.core.seq(arglist__16231);
return G__16229__delegate(args__8012__auto__);
});
G__16229.cljs$core$IFn$_invoke$arity$variadic = G__16229__delegate;
return G__16229;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.sample_hospital_intro_text = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__16234 = "i";
var G__16235 = {"key": cljs.core.cst$kw$sintros};
var G__16236 = (function (){var G__16238 = "p";
var G__16239 = {"key": (1), "className": "note"};
var G__16240 = "You can move the slider button left to see the rates plotted on the full 0-100% range of possible\n   survival rates, or right to focus on the detail near 100%";
return React.createElement(G__16238,G__16239,G__16240);
})();
var G__16237 = (function (){var G__16241 = "p";
var G__16242 = {"key": (2), "className": "note"};
var G__16243 = "Mouse over or click on the chart bars and the dot for explanations of their meaning.";
return React.createElement(G__16241,G__16242,G__16243);
})();
return React.createElement(G__16234,G__16235,G__16236,G__16237);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"sample-hospital-intro-text");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16244__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16244 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16245__i = 0, G__16245__a = new Array(arguments.length -  0);
while (G__16245__i < G__16245__a.length) {G__16245__a[G__16245__i] = arguments[G__16245__i + 0]; ++G__16245__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16245__a,0);
} 
return G__16244__delegate.call(this,args__8012__auto__);};
G__16244.cljs$lang$maxFixedArity = 0;
G__16244.cljs$lang$applyTo = (function (arglist__16246){
var args__8012__auto__ = cljs.core.seq(arglist__16246);
return G__16244__delegate(args__8012__auto__);
});
G__16244.cljs$core$IFn$_invoke$arity$variadic = G__16244__delegate;
return G__16244;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.hospital_data = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (h_code){
return sablono.interpreter.interpret((function (){var datasource = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app));
var selected_row = (function (){var G__16247 = prais2.data.rows_by_code(datasource).call(null);
return (h_code.cljs$core$IFn$_invoke$arity$1 ? h_code.cljs$core$IFn$_invoke$arity$1(G__16247) : h_code.call(null,G__16247));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$data_DASH_summary,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,(0),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"orange"], null)], null)," Hover over or tap on the chart areas for more detail on this hospital. "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null),"The hospital performed ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.cst$kw$n_DASH_ops.cljs$core$IFn$_invoke$arity$1(selected_row),"  operations. "], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(2)], null),"Measured 30 days after surgery, ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null),cljs.core.cst$kw$n_DASH_survivors.cljs$core$IFn$_invoke$arity$1(selected_row)," survivors "], null),"and ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(2)], null),cljs.core.cst$kw$n_DASH_deaths.cljs$core$IFn$_invoke$arity$1(selected_row)," deaths"], null)," had been recorded. "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3)], null),"The hospital's 30 day survival rate was ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(selected_row),"%"], null),"."], null)], null);
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-data");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16248__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16248 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16249__i = 0, G__16249__a = new Array(arguments.length -  0);
while (G__16249__i < G__16249__a.length) {G__16249__a[G__16249__i] = arguments[G__16249__i + 0]; ++G__16249__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16249__a,0);
} 
return G__16248__delegate.call(this,args__8012__auto__);};
G__16248.cljs$lang$maxFixedArity = 0;
G__16248.cljs$lang$applyTo = (function (arglist__16250){
var args__8012__auto__ = cljs.core.seq(arglist__16250);
return G__16248__delegate(args__8012__auto__);
});
G__16248.cljs$core$IFn$_invoke$arity$variadic = G__16248__delegate;
return G__16248;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.hospital_header = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (selected_row){
var attrs16251 = cljs.core.cst$kw$h_DASH_name.cljs$core$IFn$_invoke$arity$1(selected_row);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",((cljs.core.map_QMARK_(attrs16251))?sablono.interpreter.attributes(attrs16251):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16251))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16251)], null))));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"hospital-header");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16252__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16252 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16253__i = 0, G__16253__a = new Array(arguments.length -  0);
while (G__16253__i < G__16253__a.length) {G__16253__a[G__16253__i] = arguments[G__16253__i + 0]; ++G__16253__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16253__a,0);
} 
return G__16252__delegate.call(this,args__8012__auto__);};
G__16252.cljs$lang$maxFixedArity = 0;
G__16252.cljs$lang$applyTo = (function (arglist__16254){
var args__8012__auto__ = cljs.core.seq(arglist__16254);
return G__16252__delegate(args__8012__auto__);
});
G__16252.cljs$core$IFn$_invoke$arity$variadic = G__16252__delegate;
return G__16252;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.legend = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (selected_row,close_modal){
var G__16261 = "div";
var G__16262 = {"className": "legend"};
var G__16263 = (function (){var G__16264 = "div";
var G__16265 = {"className": "box"};
var G__16266 = (function (){var G__16268 = "p";
var G__16269 = {"style": {"color": "orange"}};
var G__16270 = "Legend (See also: ";
var G__16271 = (function (){var attrs16256 = prais2.core.href("data/animation",cljs.core.cst$kw$on_DASH_click,((function (G__16268,G__16269,G__16270,G__16264,G__16265,G__16261,G__16262){
return (function (p1__16255_SHARP_){
if(cljs.core.truth_(close_modal)){
(close_modal.cljs$core$IFn$_invoke$arity$0 ? close_modal.cljs$core$IFn$_invoke$arity$0() : close_modal.call(null));
} else {
}

return prais2.core.click__GT_event_bus(p1__16255_SHARP_,cljs.core.cst$kw$data,cljs.core.cst$kw$animation,"data/animation");
});})(G__16268,G__16269,G__16270,G__16264,G__16265,G__16261,G__16262))
);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16256))?sablono.interpreter.attributes(attrs16256):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16256))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16273 = "i";
var G__16274 = {"className": "fa fa-video-camera"};
return React.createElement(G__16273,G__16274);
})()," two minute video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16256),(function (){var G__16275 = "i";
var G__16276 = {"className": "fa fa-video-camera"};
return React.createElement(G__16275,G__16276);
})()," two minute video"], null))));
})();
var G__16272 = ")";
return React.createElement(G__16268,G__16269,G__16270,G__16271,G__16272);
})();
var G__16267 = sablono.interpreter.interpret((function (){var ap = rum.core.react(prais2.core.app);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16277 = selected_row;
var G__16278 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
var G__16279 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dot,null], null), null);
var G__16280 = "Survival rate: The dot indicates the hospital's survival rate";
return (prais2.data.annotated_chart_cell.cljs$core$IFn$_invoke$arity$4 ? prais2.data.annotated_chart_cell.cljs$core$IFn$_invoke$arity$4(G__16277,G__16278,G__16279,G__16280) : prais2.data.annotated_chart_cell.call(null,G__16277,G__16278,G__16279,G__16280));
})(),(function (){var G__16281 = selected_row;
var G__16282 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
var G__16283 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inner,null], null), null);
var G__16284 = "Predicted Range: We expect the hospital's survival rate to be inside this bar\n                                          19 times out of 20";
return (prais2.data.annotated_chart_cell.cljs$core$IFn$_invoke$arity$4 ? prais2.data.annotated_chart_cell.cljs$core$IFn$_invoke$arity$4(G__16281,G__16282,G__16283,G__16284) : prais2.data.annotated_chart_cell.call(null,G__16281,G__16282,G__16283,G__16284));
})(),(function (){var G__16285 = selected_row;
var G__16286 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
var G__16287 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outer,null], null), null);
var G__16288 = "Extended predicted range: We expect the hospital's survival rate to be inside this bar\n                                          998 times out of a 1000";
return (prais2.data.annotated_chart_cell.cljs$core$IFn$_invoke$arity$4 ? prais2.data.annotated_chart_cell.cljs$core$IFn$_invoke$arity$4(G__16285,G__16286,G__16287,G__16288) : prais2.data.annotated_chart_cell.call(null,G__16285,G__16286,G__16287,G__16288));
})()], null));
})());
return React.createElement(G__16264,G__16265,G__16266,G__16267);
})();
return React.createElement(G__16261,G__16262,G__16263);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"legend");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16289__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16289 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16290__i = 0, G__16290__a = new Array(arguments.length -  0);
while (G__16290__i < G__16290__a.length) {G__16290__a[G__16290__i] = arguments[G__16290__i + 0]; ++G__16290__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16290__a,0);
} 
return G__16289__delegate.call(this,args__8012__auto__);};
G__16289.cljs$lang$maxFixedArity = 0;
G__16289.cljs$lang$applyTo = (function (arglist__16291){
var args__8012__auto__ = cljs.core.seq(arglist__16291);
return G__16289__delegate(args__8012__auto__);
});
G__16289.cljs$core$IFn$_invoke$arity$variadic = G__16289__delegate;
return G__16289;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
prais2.data.open_hospital_modal = (function prais2$data$open_hospital_modal(h_code){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,(function (p1__16292_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16292_SHARP_,cljs.core.cst$kw$selected_DASH_h_DASH_code,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(h_code));
}));

return $("#rowModal").modal();
});
prais2.data.close_hospital_modal = (function prais2$data$close_hospital_modal(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,(function (p1__16293_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16293_SHARP_,cljs.core.cst$kw$selected_DASH_h_DASH_code,null);
}));

return $("#rowModal").modal("hide");
});
/**
 * 
 */
prais2.data.hospital_detail = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (h_code,_){
return sablono.interpreter.interpret((function (){var ap = rum.core.react(prais2.core.app);
if(cljs.core.truth_(h_code)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_detail,(function (){var temp__4657__auto__ = (function (){var G__16294 = prais2.data.rows_by_code(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(ap)).call(null);
return (h_code.cljs$core$IFn$_invoke$arity$1 ? h_code.cljs$core$IFn$_invoke$arity$1(G__16294) : h_code.call(null,G__16294));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var selected_row = temp__4657__auto__;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.data.hospital_header.cljs$core$IFn$_invoke$arity$1 ? prais2.data.hospital_header.cljs$core$IFn$_invoke$arity$1(selected_row) : prais2.data.hospital_header.call(null,selected_row)),(function (){var G__16295 = prais2.content.detail_slider_label;
var G__16296 = prais2.data.detail_slider_control;
var G__16297 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
return (prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$3 ? prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$3(G__16295,G__16296,G__16297) : prais2.data.slider_widget.call(null,G__16295,G__16296,G__16297));
})(),(function (){var G__16298 = selected_row;
var G__16299 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
return (prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2 ? prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2(G__16298,G__16299) : prais2.data.chart_cell.call(null,G__16298,G__16299));
})(),(prais2.data.hospital_data.cljs$core$IFn$_invoke$arity$1 ? prais2.data.hospital_data.cljs$core$IFn$_invoke$arity$1(h_code) : prais2.data.hospital_data.call(null,h_code)),(prais2.data.interpretation.cljs$core$IFn$_invoke$arity$2 ? prais2.data.interpretation.cljs$core$IFn$_invoke$arity$2(selected_row,prais2.data.close_hospital_modal) : prais2.data.interpretation.call(null,selected_row,prais2.data.close_hospital_modal)),(prais2.data.legend.cljs$core$IFn$_invoke$arity$2 ? prais2.data.legend.cljs$core$IFn$_invoke$arity$2(selected_row,prais2.data.close_hospital_modal) : prais2.data.legend.call(null,selected_row,prais2.data.close_hospital_modal)),(prais2.data.hospital_charities.cljs$core$IFn$_invoke$arity$1 ? prais2.data.hospital_charities.cljs$core$IFn$_invoke$arity$1(h_code) : prais2.data.hospital_charities.call(null,h_code))], null));
} else {
return null;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_detail,(function (){var selected_row = prais2.content.sample_hospital;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.data.sample_hospital_intro_text.cljs$core$IFn$_invoke$arity$0 ? prais2.data.sample_hospital_intro_text.cljs$core$IFn$_invoke$arity$0() : prais2.data.sample_hospital_intro_text.call(null)),(prais2.data.hospital_header.cljs$core$IFn$_invoke$arity$1 ? prais2.data.hospital_header.cljs$core$IFn$_invoke$arity$1(selected_row) : prais2.data.hospital_header.call(null,selected_row)),(function (){var G__16300 = prais2.content.detail_slider_label;
var G__16301 = prais2.data.detail_slider_control;
var G__16302 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
return (prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$3 ? prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$3(G__16300,G__16301,G__16302) : prais2.data.slider_widget.call(null,G__16300,G__16301,G__16302));
})(),(function (){var G__16303 = selected_row;
var G__16304 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
return (prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2 ? prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2(G__16303,G__16304) : prais2.data.chart_cell.call(null,G__16303,G__16304));
})(),(prais2.data.interpretation.cljs$core$IFn$_invoke$arity$2 ? prais2.data.interpretation.cljs$core$IFn$_invoke$arity$2(selected_row,prais2.data.close_hospital_modal) : prais2.data.interpretation.call(null,selected_row,prais2.data.close_hospital_modal))], null));
})()], null);
}
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-detail");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16305__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16305 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16306__i = 0, G__16306__a = new Array(arguments.length -  0);
while (G__16306__i < G__16306__a.length) {G__16306__a[G__16306__i] = arguments[G__16306__i + 0]; ++G__16306__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16306__a,0);
} 
return G__16305__delegate.call(this,args__8012__auto__);};
G__16305.cljs$lang$maxFixedArity = 0;
G__16305.cljs$lang$applyTo = (function (arglist__16307){
var args__8012__auto__ = cljs.core.seq(arglist__16307);
return G__16305__delegate(args__8012__auto__);
});
G__16305.cljs$core$IFn$_invoke$arity$variadic = G__16305__delegate;
return G__16305;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.data.modal = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
return sablono.interpreter.interpret((function (){var ap = rum.core.react(prais2.core.app);
var selected_h_code = cljs.core.cst$kw$selected_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(ap);
var close_handler = ((function (ap,selected_h_code){
return (function (p1__16308_SHARP_){
return prais2.core.click__GT_event_bus(p1__16308_SHARP_,cljs.core.cst$kw$close_DASH_hospital_DASH_modal,selected_h_code,null);
});})(ap,selected_h_code))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_rowModal$modal$fade,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tab_DASH_index,(-1),cljs.core.cst$kw$role,"dialog",cljs.core.cst$kw$aria_DASH_labelledby,"myModalLabel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$modal_DASH_dialog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$role,"document"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$modal_DASH_content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$modal_DASH_body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null),(prais2.data.hospital_detail.cljs$core$IFn$_invoke$arity$2 ? prais2.data.hospital_detail.cljs$core$IFn$_invoke$arity$2(selected_h_code,prais2.data.close_hospital_modal) : prais2.data.hospital_detail.call(null,selected_h_code,prais2.data.close_hospital_modal))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$modal_DASH_footer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,close_handler,cljs.core.cst$kw$on_DASH_touch_DASH_start,close_handler], null),"Close"], null)], null)], null)], null)], null);
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"modal");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16309__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16309 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16310__i = 0, G__16310__a = new Array(arguments.length -  0);
while (G__16310__i < G__16310__a.length) {G__16310__a[G__16310__i] = arguments[G__16310__i + 0]; ++G__16310__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16310__a,0);
} 
return G__16309__delegate.call(this,args__8012__auto__);};
G__16309.cljs$lang$maxFixedArity = 0;
G__16309.cljs$lang$applyTo = (function (arglist__16311){
var args__8012__auto__ = cljs.core.seq(arglist__16311);
return G__16309__delegate(args__8012__auto__);
});
G__16309.cljs$core$IFn$_invoke$arity$variadic = G__16309__delegate;
return G__16309;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
