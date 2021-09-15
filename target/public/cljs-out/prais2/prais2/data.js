// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('prais2.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('prais2.core');
goog.require('prais2.content');
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(row,cljs.core.cst$kw$h_DASH_lat,lat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$h_DASH_lon,lon], 0));
}),table_rows);
});
prais2.data.make_datasource = (function prais2$data$make_datasource(datasource){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.content.header_row()], null),((typeof parseInt(cljs.core.name(datasource)) === 'number')?(function (){var G__19729 = cljs.core.cst$kw$hosp_DASH_data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(prais2.core.app));
return (datasource.cljs$core$IFn$_invoke$arity$1 ? datasource.cljs$core$IFn$_invoke$arity$1(G__19729) : datasource.call(null,G__19729));
})():prais2.data.add_markers((function (){var G__19730 = cljs.core.cst$kw$hosp_DASH_data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(prais2.core.app));
return (datasource.cljs$core$IFn$_invoke$arity$1 ? datasource.cljs$core$IFn$_invoke$arity$1(G__19730) : datasource.call(null,G__19730));
})()))));
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
return prais2.data.index_by((function (){var fexpr__19732 = prais2.data.table_data(datasource);
return (fexpr__19732.cljs$core$IFn$_invoke$arity$0 ? fexpr__19732.cljs$core$IFn$_invoke$arity$0() : fexpr__19732.call(null));
})(),(function (p1__19731_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(p1__19731_SHARP_));
}));
}));
});
/**
 * sort a column
 */
prais2.data.sort_on_column = (function prais2$data$sort_on_column(app,column_key){
var ap = cljs.core.deref(app);
var sort_column = cljs.core.cst$kw$sort_DASH_by.cljs$core$IFn$_invoke$arity$1(ap);
var sort_mode = cljs.core.cst$kw$sort_DASH_ascending.cljs$core$IFn$_invoke$arity$1(ap);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_column,column_key)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app,((function (ap,sort_column,sort_mode){
return (function (p1__19733_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19733_SHARP_,cljs.core.cst$kw$sort_DASH_ascending,cljs.core.not(sort_mode));
});})(ap,sort_column,sort_mode))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app,((function (ap,sort_column,sort_mode){
return (function (p1__19734_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__19734_SHARP_,cljs.core.cst$kw$sort_DASH_ascending,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sort_DASH_by,column_key], 0));
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
return ((2) * ((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$outer_DASH_low,cljs.core.rest((function (){var fexpr__19735 = prais2.data.table_data(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(prais2.core.app)));
return (fexpr__19735.cljs$core$IFn$_invoke$arity$0 ? fexpr__19735.cljs$core$IFn$_invoke$arity$0() : fexpr__19735.call(null));
})()))) / (2)) | (0)));
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
prais2.data.bar = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function() {
var G__19736 = null;
var G__19736__5 = (function (slider,hi_val,lo_val,bar_type,fill){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background_DASH_color,fill,cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.bar_width(slider,(hi_val - lo_val))),"%"].join('')], null)], null)], null);

return React.createElement("div",({"style": ({"backgroundColor": fill, "borderRadius": (0), "width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.bar_width(slider,(hi_val - lo_val))),"%"].join(''), "textAlign": "right"}), "data-toggle": "tooltip", "data-original-title": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.utils.pc(lo_val))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.utils.pc(hi_val)),"<br>",cljs.core.str.cljs$core$IFn$_invoke$arity$1((bar_type.cljs$core$IFn$_invoke$arity$1 ? bar_type.cljs$core$IFn$_invoke$arity$1(prais2.content.bar_comments) : bar_type.call(null,prais2.content.bar_comments)))].join(''), "data-delay": (0), "data-html": true, "data-trigger": "hover", "data-placement": "bottom", "className": "bar btn"}));
});
var G__19736__6 = (function (slider,hi_val,lo_val,bar_type,fill,no_tip){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"rgba(255,255,255,0)")){
return React.createElement("div",({"style": ({"backgroundColor": fill, "width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.bar_width(slider,(hi_val - lo_val))),"%"].join('')}), "className": "bar"}));
} else {
return sablono.interpreter.interpret(((cljs.core.not(no_tip))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bar$btn,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background_DASH_color,fill,cljs.core.cst$kw$border_DASH_radius,(0),cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.bar_width(slider,(hi_val - lo_val))),"%"].join(''),cljs.core.cst$kw$text_DASH_align,"right"], null),cljs.core.cst$kw$data_DASH_toggle,"tooltip",cljs.core.cst$kw$data_DASH_original_DASH_title,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.utils.pc(lo_val))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.utils.pc(hi_val)),"<br>",cljs.core.str.cljs$core$IFn$_invoke$arity$1((bar_type.cljs$core$IFn$_invoke$arity$1 ? bar_type.cljs$core$IFn$_invoke$arity$1(prais2.content.bar_comments) : bar_type.call(null,prais2.content.bar_comments)))].join(''),cljs.core.cst$kw$data_DASH_delay,(0),cljs.core.cst$kw$data_DASH_html,true,cljs.core.cst$kw$data_DASH_trigger,"hover",cljs.core.cst$kw$data_DASH_placement,"bottom"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bar$btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background_DASH_color,fill,cljs.core.cst$kw$border_DASH_radius,(0),cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.bar_width(slider,(hi_val - lo_val))),"%"].join(''),cljs.core.cst$kw$text_DASH_align,"right"], null)], null)], null)));
}
});
G__19736 = function(slider,hi_val,lo_val,bar_type,fill,no_tip){
switch(arguments.length){
case 5:
return G__19736__5.call(this,slider,hi_val,lo_val,bar_type,fill);
case 6:
return G__19736__6.call(this,slider,hi_val,lo_val,bar_type,fill,no_tip);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19736.cljs$core$IFn$_invoke$arity$5 = G__19736__5;
G__19736.cljs$core$IFn$_invoke$arity$6 = G__19736__6;
return G__19736;
})()
);
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"bar");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19737__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19737 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19738__i = 0, G__19738__a = new Array(arguments.length -  0);
while (G__19738__i < G__19738__a.length) {G__19738__a[G__19738__i] = arguments[G__19738__i + 0]; ++G__19738__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19738__a,0,null);
} 
return G__19737__delegate.call(this,args__14302__auto__);};
G__19737.cljs$lang$maxFixedArity = 0;
G__19737.cljs$lang$applyTo = (function (arglist__19739){
var args__14302__auto__ = cljs.core.seq(arglist__19739);
return G__19737__delegate(args__14302__auto__);
});
G__19737.cljs$core$IFn$_invoke$arity$variadic = G__19737__delegate;
return G__19737;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.dot = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function() { 
var G__19745__delegate = function (slider,size,value,dotty,p__19740){
var vec__19741 = p__19740;
var relative = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19741,(0),null);
var px_size = prais2.utils.px(size);
return React.createElement("div",({"data-toggle": "tooltip", "data-placement": "bottom", "data-delay": (0), "data-trigger": "hover", "data-html": true, "data-original-title": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.utils.pc(value)),"<br>The survival rate"].join(''), "style": ({"backgroundColor": cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app)))), "display": (cljs.core.truth_(dotty)?"inline-block":"none"), "width": px_size, "height": px_size, "top": prais2.utils.px(((10) + (((25) - size) / (2)))), "position": (cljs.core.truth_(relative)?"relative":"absolute"), "marginLeft": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__19744 = (size / (2));
return Math.round(G__19744);
})()),"px"].join(''), "left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.percent__GT_screen(slider,value)),"%"].join('')}), "className": "dot btn"}));
};
var G__19745 = function (slider,size,value,dotty,var_args){
var p__19740 = null;
if (arguments.length > 4) {
var G__19746__i = 0, G__19746__a = new Array(arguments.length -  4);
while (G__19746__i < G__19746__a.length) {G__19746__a[G__19746__i] = arguments[G__19746__i + 4]; ++G__19746__i;}
  p__19740 = new cljs.core.IndexedSeq(G__19746__a,0,null);
} 
return G__19745__delegate.call(this,slider,size,value,dotty,p__19740);};
G__19745.cljs$lang$maxFixedArity = 4;
G__19745.cljs$lang$applyTo = (function (arglist__19747){
var slider = cljs.core.first(arglist__19747);
arglist__19747 = cljs.core.next(arglist__19747);
var size = cljs.core.first(arglist__19747);
arglist__19747 = cljs.core.next(arglist__19747);
var value = cljs.core.first(arglist__19747);
arglist__19747 = cljs.core.next(arglist__19747);
var dotty = cljs.core.first(arglist__19747);
var p__19740 = cljs.core.rest(arglist__19747);
return G__19745__delegate(slider,size,value,dotty,p__19740);
});
G__19745.cljs$core$IFn$_invoke$arity$variadic = G__19745__delegate;
return G__19745;
})()
);
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,prais2.core.bs_tooltip], null)),"dot");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19748__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19748 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19749__i = 0, G__19749__a = new Array(arguments.length -  0);
while (G__19749__i < G__19749__a.length) {G__19749__a[G__19749__i] = arguments[G__19749__i + 0]; ++G__19749__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19749__a,0,null);
} 
return G__19748__delegate.call(this,args__14302__auto__);};
G__19748.cljs$lang$maxFixedArity = 0;
G__19748.cljs$lang$applyTo = (function (arglist__19750){
var args__14302__auto__ = cljs.core.seq(arglist__19750);
return G__19748__delegate(args__14302__auto__);
});
G__19748.cljs$core$IFn$_invoke$arity$variadic = G__19748__delegate;
return G__19748;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.dot_no_tip = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function() { 
var G__19756__delegate = function (slider,size,value,dotty,p__19751){
var vec__19752 = p__19751;
var relative = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19752,(0),null);
var px_size = prais2.utils.px(size);
return React.createElement("div",({"style": ({"backgroundColor": cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app)))), "display": (cljs.core.truth_(dotty)?"inline-block":"none"), "width": px_size, "height": px_size, "top": prais2.utils.px(((10) + (((25) - size) / (2)))), "position": (cljs.core.truth_(relative)?"relative":"absolute"), "left": ["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.percent__GT_screen(slider,value)),"% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__19755 = (size / (2));
return Math.round(G__19755);
})()),"px)"].join('')}), "className": "dot btn"}));
};
var G__19756 = function (slider,size,value,dotty,var_args){
var p__19751 = null;
if (arguments.length > 4) {
var G__19757__i = 0, G__19757__a = new Array(arguments.length -  4);
while (G__19757__i < G__19757__a.length) {G__19757__a[G__19757__i] = arguments[G__19757__i + 4]; ++G__19757__i;}
  p__19751 = new cljs.core.IndexedSeq(G__19757__a,0,null);
} 
return G__19756__delegate.call(this,slider,size,value,dotty,p__19751);};
G__19756.cljs$lang$maxFixedArity = 4;
G__19756.cljs$lang$applyTo = (function (arglist__19758){
var slider = cljs.core.first(arglist__19758);
arglist__19758 = cljs.core.next(arglist__19758);
var size = cljs.core.first(arglist__19758);
arglist__19758 = cljs.core.next(arglist__19758);
var value = cljs.core.first(arglist__19758);
arglist__19758 = cljs.core.next(arglist__19758);
var dotty = cljs.core.first(arglist__19758);
var p__19751 = cljs.core.rest(arglist__19758);
return G__19756__delegate(slider,size,value,dotty,p__19751);
});
G__19756.cljs$core$IFn$_invoke$arity$variadic = G__19756__delegate;
return G__19756;
})()
);
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive], null)),"dot-no-tip");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19759__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19759 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19760__i = 0, G__19760__a = new Array(arguments.length -  0);
while (G__19760__i < G__19760__a.length) {G__19760__a[G__19760__i] = arguments[G__19760__i + 0]; ++G__19760__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19760__a,0,null);
} 
return G__19759__delegate.call(this,args__14302__auto__);};
G__19759.cljs$lang$maxFixedArity = 0;
G__19759.cljs$lang$applyTo = (function (arglist__19761){
var args__14302__auto__ = cljs.core.seq(arglist__19761);
return G__19759__delegate(args__14302__auto__);
});
G__19759.cljs$core$IFn$_invoke$arity$variadic = G__19759__delegate;
return G__19759;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
prais2.data.extra_right = (40);
prais2.data.dot_size = (function prais2$data$dot_size(slider){
var G__19762 = ((12) - ((7) * ((1) - slider)));
return Math.round(G__19762);
});
prais2.data.chart_states = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dot,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inner,null,cljs.core.cst$kw$dot,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$inner,null,cljs.core.cst$kw$dot,null,cljs.core.cst$kw$outer,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inner,null,cljs.core.cst$kw$outer,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inner,null], null), null)], null);
/**
 * 
 */
prais2.data.chart_cell = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (row,slider){
var ap = rum.core.react(prais2.core.app);
var colours = prais2.data.colour_map(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(ap));
var bars = (function (){var G__19763 = cljs.core.cst$kw$chart_DASH_state.cljs$core$IFn$_invoke$arity$1(ap);
return (prais2.data.chart_states.cljs$core$IFn$_invoke$arity$1 ? prais2.data.chart_states.cljs$core$IFn$_invoke$arity$1(G__19763) : prais2.data.chart_states.call(null,G__19763));
})();
var dotty = cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(bars);
var dotless = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(bars,cljs.core.cst$kw$dot);
return React.createElement("div",({"className": "chart-cell"}),(function (){var attrs19764 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,cljs.core.PersistentHashSet.EMPTY))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19765 = slider;
var G__19766 = prais2.data.dot_size(slider);
var G__19767 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__19768 = dotty;
return (prais2.data.dot.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot.cljs$core$IFn$_invoke$arity$4(G__19765,G__19766,G__19767,G__19768) : prais2.data.dot.call(null,G__19765,G__19766,G__19767,G__19768));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inner,null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19769 = slider;
var G__19770 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19771 = (prais2.data.min_outer_low() * slider);
var G__19772 = cljs.core.cst$kw$low;
var G__19773 = cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19769,G__19770,G__19771,G__19772,G__19773) : prais2.data.bar.call(null,G__19769,G__19770,G__19771,G__19772,G__19773));
})(),(function (){var G__19774 = slider;
var G__19775 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19776 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19777 = cljs.core.cst$kw$outer_DASH_low;
var G__19778 = cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19774,G__19775,G__19776,G__19777,G__19778) : prais2.data.bar.call(null,G__19774,G__19775,G__19776,G__19777,G__19778));
})(),(function (){var G__19779 = slider;
var G__19780 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19781 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19782 = cljs.core.cst$kw$inner;
var G__19783 = cljs.core.cst$kw$inner.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19779,G__19780,G__19781,G__19782,G__19783) : prais2.data.bar.call(null,G__19779,G__19780,G__19781,G__19782,G__19783));
})(),(function (){var G__19784 = slider;
var G__19785 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19786 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19787 = cljs.core.cst$kw$outer_DASH_high;
var G__19788 = cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19784,G__19785,G__19786,G__19787,G__19788) : prais2.data.bar.call(null,G__19784,G__19785,G__19786,G__19787,G__19788));
})(),(function (){var G__19789 = slider;
var G__19790 = (100);
var G__19791 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19792 = cljs.core.cst$kw$high;
var G__19793 = cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19789,G__19790,G__19791,G__19792,G__19793) : prais2.data.bar.call(null,G__19789,G__19790,G__19791,G__19792,G__19793));
})(),(function (){var G__19794 = slider;
var G__19795 = prais2.data.dot_size(slider);
var G__19796 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__19797 = dotty;
return (prais2.data.dot.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot.cljs$core$IFn$_invoke$arity$4(G__19794,G__19795,G__19796,G__19797) : prais2.data.dot.call(null,G__19794,G__19795,G__19796,G__19797));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outer,null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19798 = slider;
var G__19799 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19800 = (prais2.data.min_outer_low() * slider);
var G__19801 = cljs.core.cst$kw$low;
var G__19802 = cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19798,G__19799,G__19800,G__19801,G__19802) : prais2.data.bar.call(null,G__19798,G__19799,G__19800,G__19801,G__19802));
})(),(function (){var G__19803 = slider;
var G__19804 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19805 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19806 = cljs.core.cst$kw$outer_DASH_low;
var G__19807 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19803,G__19804,G__19805,G__19806,G__19807) : prais2.data.bar.call(null,G__19803,G__19804,G__19805,G__19806,G__19807));
})(),(function (){var G__19808 = slider;
var G__19809 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19810 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19811 = cljs.core.cst$kw$inner;
var G__19812 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19808,G__19809,G__19810,G__19811,G__19812) : prais2.data.bar.call(null,G__19808,G__19809,G__19810,G__19811,G__19812));
})(),(function (){var G__19813 = slider;
var G__19814 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19815 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19816 = cljs.core.cst$kw$outer_DASH_high;
var G__19817 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19813,G__19814,G__19815,G__19816,G__19817) : prais2.data.bar.call(null,G__19813,G__19814,G__19815,G__19816,G__19817));
})(),(function (){var G__19818 = slider;
var G__19819 = (100);
var G__19820 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19821 = cljs.core.cst$kw$high;
var G__19822 = cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19818,G__19819,G__19820,G__19821,G__19822) : prais2.data.bar.call(null,G__19818,G__19819,G__19820,G__19821,G__19822));
})(),(function (){var G__19823 = slider;
var G__19824 = prais2.data.dot_size(slider);
var G__19825 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__19826 = dotty;
return (prais2.data.dot.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot.cljs$core$IFn$_invoke$arity$4(G__19823,G__19824,G__19825,G__19826) : prais2.data.dot.call(null,G__19823,G__19824,G__19825,G__19826));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inner,null,cljs.core.cst$kw$outer,null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19827 = slider;
var G__19828 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19829 = (prais2.data.min_outer_low() * slider);
var G__19830 = cljs.core.cst$kw$low;
var G__19831 = cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19827,G__19828,G__19829,G__19830,G__19831) : prais2.data.bar.call(null,G__19827,G__19828,G__19829,G__19830,G__19831));
})(),(function (){var G__19832 = slider;
var G__19833 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19834 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19835 = cljs.core.cst$kw$outer_DASH_low;
var G__19836 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19832,G__19833,G__19834,G__19835,G__19836) : prais2.data.bar.call(null,G__19832,G__19833,G__19834,G__19835,G__19836));
})(),(function (){var G__19837 = slider;
var G__19838 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19839 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19840 = cljs.core.cst$kw$inner;
var G__19841 = cljs.core.cst$kw$inner.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19837,G__19838,G__19839,G__19840,G__19841) : prais2.data.bar.call(null,G__19837,G__19838,G__19839,G__19840,G__19841));
})(),(function (){var G__19842 = slider;
var G__19843 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19844 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19845 = cljs.core.cst$kw$outer_DASH_high;
var G__19846 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19842,G__19843,G__19844,G__19845,G__19846) : prais2.data.bar.call(null,G__19842,G__19843,G__19844,G__19845,G__19846));
})(),(function (){var G__19847 = slider;
var G__19848 = (100);
var G__19849 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19850 = cljs.core.cst$kw$high;
var G__19851 = cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(colours);
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$5 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$5(G__19847,G__19848,G__19849,G__19850,G__19851) : prais2.data.bar.call(null,G__19847,G__19848,G__19849,G__19850,G__19851));
})(),(function (){var G__19852 = slider;
var G__19853 = prais2.data.dot_size(slider);
var G__19854 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__19855 = dotty;
return (prais2.data.dot.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot.cljs$core$IFn$_invoke$arity$4(G__19852,G__19853,G__19854,G__19855) : prais2.data.dot.call(null,G__19852,G__19853,G__19854,G__19855));
})()], null):null)))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19764))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar-chart"], null)], null),attrs19764], 0))):({"className": "bar-chart"})),((cljs.core.map_QMARK_(attrs19764))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19764)], null)));
})());
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.bs_tooltip,rum.core.reactive], null)),"chart-cell");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19856__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19856 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19857__i = 0, G__19857__a = new Array(arguments.length -  0);
while (G__19857__i < G__19857__a.length) {G__19857__a[G__19857__i] = arguments[G__19857__i + 0]; ++G__19857__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19857__a,0,null);
} 
return G__19856__delegate.call(this,args__14302__auto__);};
G__19856.cljs$lang$maxFixedArity = 0;
G__19856.cljs$lang$applyTo = (function (arglist__19858){
var args__14302__auto__ = cljs.core.seq(arglist__19858);
return G__19856__delegate(args__14302__auto__);
});
G__19856.cljs$core$IFn$_invoke$arity$variadic = G__19856__delegate;
return G__19856;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.annotated_chart_cell = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (row,slider,bars,text){
var ap = rum.core.react(prais2.core.app);
var colours = prais2.data.colour_map(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(ap));
var dotty = cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(bars);
var dotless = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(bars,cljs.core.cst$kw$dot);
return React.createElement("div",null,React.createElement("div",({"key": (1), "className": "annotation"}),sablono.interpreter.interpret(text)),React.createElement("div",({"key": (2), "className": "chart-cell"}),(function (){var attrs19859 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,cljs.core.PersistentHashSet.EMPTY))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19860 = slider;
var G__19861 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19862 = (prais2.data.min_outer_low() * slider);
var G__19863 = cljs.core.cst$kw$low;
var G__19864 = "#ffffff";
var G__19865 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19860,G__19861,G__19862,G__19863,G__19864,G__19865) : prais2.data.bar.call(null,G__19860,G__19861,G__19862,G__19863,G__19864,G__19865));
})(),(function (){var G__19866 = slider;
var G__19867 = prais2.data.dot_size(slider);
var G__19868 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__19869 = dotty;
return (prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$4(G__19866,G__19867,G__19868,G__19869) : prais2.data.dot_no_tip.call(null,G__19866,G__19867,G__19868,G__19869));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inner,null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19870 = slider;
var G__19871 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19872 = (prais2.data.min_outer_low() * slider);
var G__19873 = cljs.core.cst$kw$low;
var G__19874 = "#ffffff";
var G__19875 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19870,G__19871,G__19872,G__19873,G__19874,G__19875) : prais2.data.bar.call(null,G__19870,G__19871,G__19872,G__19873,G__19874,G__19875));
})(),(function (){var G__19876 = slider;
var G__19877 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19878 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19879 = cljs.core.cst$kw$outer_DASH_low;
var G__19880 = "#ffffff";
var G__19881 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19876,G__19877,G__19878,G__19879,G__19880,G__19881) : prais2.data.bar.call(null,G__19876,G__19877,G__19878,G__19879,G__19880,G__19881));
})(),(function (){var G__19882 = slider;
var G__19883 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19884 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19885 = cljs.core.cst$kw$inner;
var G__19886 = cljs.core.cst$kw$inner.cljs$core$IFn$_invoke$arity$1(colours);
var G__19887 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19882,G__19883,G__19884,G__19885,G__19886,G__19887) : prais2.data.bar.call(null,G__19882,G__19883,G__19884,G__19885,G__19886,G__19887));
})(),(function (){var G__19888 = slider;
var G__19889 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19890 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19891 = cljs.core.cst$kw$outer_DASH_high;
var G__19892 = "#ffffff";
var G__19893 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19888,G__19889,G__19890,G__19891,G__19892,G__19893) : prais2.data.bar.call(null,G__19888,G__19889,G__19890,G__19891,G__19892,G__19893));
})(),(function (){var G__19894 = slider;
var G__19895 = (100);
var G__19896 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19897 = cljs.core.cst$kw$high;
var G__19898 = "#ffffff";
var G__19899 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19894,G__19895,G__19896,G__19897,G__19898,G__19899) : prais2.data.bar.call(null,G__19894,G__19895,G__19896,G__19897,G__19898,G__19899));
})(),(function (){var G__19900 = slider;
var G__19901 = prais2.data.dot_size(slider);
var G__19902 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__19903 = dotty;
return (prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$4(G__19900,G__19901,G__19902,G__19903) : prais2.data.dot_no_tip.call(null,G__19900,G__19901,G__19902,G__19903));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outer,null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19904 = slider;
var G__19905 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19906 = (prais2.data.min_outer_low() * slider);
var G__19907 = cljs.core.cst$kw$low;
var G__19908 = "#ffffff";
var G__19909 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19904,G__19905,G__19906,G__19907,G__19908,G__19909) : prais2.data.bar.call(null,G__19904,G__19905,G__19906,G__19907,G__19908,G__19909));
})(),(function (){var G__19910 = slider;
var G__19911 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19912 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19913 = cljs.core.cst$kw$outer_DASH_low;
var G__19914 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(colours);
var G__19915 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19910,G__19911,G__19912,G__19913,G__19914,G__19915) : prais2.data.bar.call(null,G__19910,G__19911,G__19912,G__19913,G__19914,G__19915));
})(),(function (){var G__19916 = slider;
var G__19917 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19918 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19919 = cljs.core.cst$kw$inner;
var G__19920 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(colours);
var G__19921 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19916,G__19917,G__19918,G__19919,G__19920,G__19921) : prais2.data.bar.call(null,G__19916,G__19917,G__19918,G__19919,G__19920,G__19921));
})(),(function (){var G__19922 = slider;
var G__19923 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19924 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19925 = cljs.core.cst$kw$outer_DASH_high;
var G__19926 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(colours);
var G__19927 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19922,G__19923,G__19924,G__19925,G__19926,G__19927) : prais2.data.bar.call(null,G__19922,G__19923,G__19924,G__19925,G__19926,G__19927));
})(),(function (){var G__19928 = slider;
var G__19929 = (100);
var G__19930 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19931 = cljs.core.cst$kw$high;
var G__19932 = "#ffffff";
var G__19933 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19928,G__19929,G__19930,G__19931,G__19932,G__19933) : prais2.data.bar.call(null,G__19928,G__19929,G__19930,G__19931,G__19932,G__19933));
})(),(function (){var G__19934 = slider;
var G__19935 = prais2.data.dot_size(slider);
var G__19936 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__19937 = dotty;
return (prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$4 ? prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$4(G__19934,G__19935,G__19936,G__19937) : prais2.data.dot_no_tip.call(null,G__19934,G__19935,G__19936,G__19937));
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inner,null,cljs.core.cst$kw$outer,null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19938 = slider;
var G__19939 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19940 = (prais2.data.min_outer_low() * slider);
var G__19941 = cljs.core.cst$kw$low;
var G__19942 = "#ffffff";
var G__19943 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19938,G__19939,G__19940,G__19941,G__19942,G__19943) : prais2.data.bar.call(null,G__19938,G__19939,G__19940,G__19941,G__19942,G__19943));
})(),(function (){var G__19944 = slider;
var G__19945 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19946 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19947 = cljs.core.cst$kw$outer_DASH_low;
var G__19948 = cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(colours);
var G__19949 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19944,G__19945,G__19946,G__19947,G__19948,G__19949) : prais2.data.bar.call(null,G__19944,G__19945,G__19946,G__19947,G__19948,G__19949));
})(),(function (){var G__19950 = slider;
var G__19951 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19952 = cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row);
var G__19953 = cljs.core.cst$kw$inner;
var G__19954 = cljs.core.cst$kw$inner.cljs$core$IFn$_invoke$arity$1(colours);
var G__19955 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19950,G__19951,G__19952,G__19953,G__19954,G__19955) : prais2.data.bar.call(null,G__19950,G__19951,G__19952,G__19953,G__19954,G__19955));
})(),(function (){var G__19956 = slider;
var G__19957 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19958 = cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19959 = cljs.core.cst$kw$outer_DASH_high;
var G__19960 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(colours);
var G__19961 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19956,G__19957,G__19958,G__19959,G__19960,G__19961) : prais2.data.bar.call(null,G__19956,G__19957,G__19958,G__19959,G__19960,G__19961));
})(),(function (){var G__19962 = slider;
var G__19963 = (100);
var G__19964 = cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row);
var G__19965 = cljs.core.cst$kw$high;
var G__19966 = "#ffffff";
var G__19967 = true;
return (prais2.data.bar.cljs$core$IFn$_invoke$arity$6 ? prais2.data.bar.cljs$core$IFn$_invoke$arity$6(G__19962,G__19963,G__19964,G__19965,G__19966,G__19967) : prais2.data.bar.call(null,G__19962,G__19963,G__19964,G__19965,G__19966,G__19967));
})(),(function (){var G__19968 = slider;
var G__19969 = prais2.data.dot_size(slider);
var G__19970 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
var G__19971 = dotty;
var G__19972 = true;
return (prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$5 ? prais2.data.dot_no_tip.cljs$core$IFn$_invoke$arity$5(G__19968,G__19969,G__19970,G__19971,G__19972) : prais2.data.dot_no_tip.call(null,G__19968,G__19969,G__19970,G__19971,G__19972));
})()], null):null)))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs19859))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar-chart"], null)], null),attrs19859], 0))):({"className": "bar-chart"})),((cljs.core.map_QMARK_(attrs19859))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19859)], null)));
})()));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.bs_tooltip,rum.core.reactive], null)),"annotated-chart-cell");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19973__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19973 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19974__i = 0, G__19974__a = new Array(arguments.length -  0);
while (G__19974__i < G__19974__a.length) {G__19974__a[G__19974__i] = arguments[G__19974__i + 0]; ++G__19974__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19974__a,0,null);
} 
return G__19973__delegate.call(this,args__14302__auto__);};
G__19973.cljs$lang$maxFixedArity = 0;
G__19973.cljs$lang$applyTo = (function (arglist__19975){
var args__14302__auto__ = cljs.core.seq(arglist__19975);
return G__19973__delegate(args__14302__auto__);
});
G__19973.cljs$core$IFn$_invoke$arity$variadic = G__19973__delegate;
return G__19973;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.tick = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (baseline,value,tick_height){
var percent = ((100) * ((value - baseline) / ((100) - baseline)));
return sablono.interpreter.interpret((((percent >= (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$tick,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$left,prais2.utils.pc(percent),cljs.core.cst$kw$height,prais2.utils.px(tick_height),cljs.core.cst$kw$border_DASH_left,["1px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(percent,(100))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0)))))?"solid ":"dashed ")),"black"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tick_DASH_label,prais2.utils.pc(value)], null)], null):null));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"tick");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19976__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19976 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19977__i = 0, G__19977__a = new Array(arguments.length -  0);
while (G__19977__i < G__19977__a.length) {G__19977__a[G__19977__i] = arguments[G__19977__i + 0]; ++G__19977__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19977__a,0,null);
} 
return G__19976__delegate.call(this,args__14302__auto__);};
G__19976.cljs$lang$maxFixedArity = 0;
G__19976.cljs$lang$applyTo = (function (arglist__19978){
var args__14302__auto__ = cljs.core.seq(arglist__19978);
return G__19976__delegate(args__14302__auto__);
});
G__19976.cljs$core$IFn$_invoke$arity$variadic = G__19976__delegate;
return G__19976;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.ticks = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (slider_axis_value,tick_count,tick_height){
var baseline = (prais2.data.min_outer_low() * slider_axis_value);
var raw_interval = (((100) - baseline) / (tick_count + (1)));
var interval = (((raw_interval > (10)))?(20):(((raw_interval > (5)))?(10):(((raw_interval > (2)))?(5):(2)
)));
var tick_values = cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(baseline - (1)),(- interval));
return React.createElement("div",null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4311__auto__ = ((function (baseline,raw_interval,interval,tick_values){
return (function prais2$data$iter__19979(s__19980){
return (new cljs.core.LazySeq(null,((function (baseline,raw_interval,interval,tick_values){
return (function (){
var s__19980__$1 = s__19980;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__19980__$1);
if(temp__5753__auto__){
var s__19980__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19980__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__19980__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__19982 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__19981 = (0);
while(true){
if((i__19981 < size__4310__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__19981);
cljs.core.chunk_append(b__19982,sablono.interpreter.interpret(rum.core.with_key((prais2.data.tick.cljs$core$IFn$_invoke$arity$3 ? prais2.data.tick.cljs$core$IFn$_invoke$arity$3(baseline,value,tick_height) : prais2.data.tick.call(null,baseline,value,tick_height)),value)));

var G__19983 = (i__19981 + (1));
i__19981 = G__19983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19982),prais2$data$iter__19979(cljs.core.chunk_rest(s__19980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19982),null);
}
} else {
var value = cljs.core.first(s__19980__$2);
return cljs.core.cons(sablono.interpreter.interpret(rum.core.with_key((prais2.data.tick.cljs$core$IFn$_invoke$arity$3 ? prais2.data.tick.cljs$core$IFn$_invoke$arity$3(baseline,value,tick_height) : prais2.data.tick.call(null,baseline,value,tick_height)),value)),prais2$data$iter__19979(cljs.core.rest(s__19980__$2)));
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
return iter__4311__auto__(tick_values);
})()));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"ticks");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19984__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19984 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19985__i = 0, G__19985__a = new Array(arguments.length -  0);
while (G__19985__i < G__19985__a.length) {G__19985__a[G__19985__i] = arguments[G__19985__i + 0]; ++G__19985__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19985__a,0,null);
} 
return G__19984__delegate.call(this,args__14302__auto__);};
G__19984.cljs$lang$maxFixedArity = 0;
G__19984.cljs$lang$applyTo = (function (arglist__19986){
var args__14302__auto__ = cljs.core.seq(arglist__19986);
return G__19984__delegate(args__14302__auto__);
});
G__19984.cljs$core$IFn$_invoke$arity$variadic = G__19984__delegate;
return G__19984;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.slider_labels = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("div",({"className": "slider-label"}),React.createElement("div",({"key": "left", "className": "pull-left"}),React.createElement("i",({"key": "full", "className": "fa fa-long-arrow-left"}))," full view"),React.createElement("div",({"key": "right", "className": "pull-right"}),"full detail ",React.createElement("i",({"key": "detail", "className": "fa fa-long-arrow-right"}))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"slider-labels");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19989__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19989 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19990__i = 0, G__19990__a = new Array(arguments.length -  0);
while (G__19990__i < G__19990__a.length) {G__19990__a[G__19990__i] = arguments[G__19990__i + 0]; ++G__19990__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19990__a,0,null);
} 
return G__19989__delegate.call(this,args__14302__auto__);};
G__19989.cljs$lang$maxFixedArity = 0;
G__19989.cljs$lang$applyTo = (function (arglist__19991){
var args__14302__auto__ = cljs.core.seq(arglist__19991);
return G__19989__delegate(args__14302__auto__);
});
G__19989.cljs$core$IFn$_invoke$arity$variadic = G__19989__delegate;
return G__19989;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
prais2.data.bs_slider = (function prais2$data$bs_slider(hashed_id,change_key){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var slider = (new Slider(hashed_id,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tooltip,"hide",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(1),cljs.core.cst$kw$step,0.02,cljs.core.cst$kw$value,(function (){var G__19992 = cljs.core.deref(prais2.core.app);
return (change_key.cljs$core$IFn$_invoke$arity$1 ? change_key.cljs$core$IFn$_invoke$arity$1(G__19992) : change_key.call(null,G__19992));
})()], null))));
var handler = ((function (slider){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [change_key,slider.getValue()], null));
});})(slider))
;
slider.on("change",handler);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$prais2$data_SLASH_slider,slider,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$prais2$data_SLASH_handler,handler], 0));
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

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$prais2$data_SLASH_slider,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$prais2$data_SLASH_handler], 0));
})], null);
});
/**
 * 
 */
prais2.data.slider_control = (function (){var render_mixin__14299__auto__ = rum.core.render_state__GT_mixin((function (state,value){
var s = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_slider$slider,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,value], null)], null)], null);
var slider = cljs.core.cst$kw$prais2$data_SLASH_slider.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
slider.setValue(value);
} else {
}

return sablono.interpreter.interpret(s);
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bs_slider("#slider",cljs.core.cst$kw$slider_DASH_axis_DASH_value),rum.core.static$], null)),"slider-control");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19993__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19993 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19994__i = 0, G__19994__a = new Array(arguments.length -  0);
while (G__19994__i < G__19994__a.length) {G__19994__a[G__19994__i] = arguments[G__19994__i + 0]; ++G__19994__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19994__a,0,null);
} 
return G__19993__delegate.call(this,args__14302__auto__);};
G__19993.cljs$lang$maxFixedArity = 0;
G__19993.cljs$lang$applyTo = (function (arglist__19995){
var args__14302__auto__ = cljs.core.seq(arglist__19995);
return G__19993__delegate(args__14302__auto__);
});
G__19993.cljs$core$IFn$_invoke$arity$variadic = G__19993__delegate;
return G__19993;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.detail_slider_control = (function (){var render_mixin__14299__auto__ = rum.core.render_state__GT_mixin((function (state,value){
var s = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_detail_DASH_slider$slider,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,value], null)], null)], null);
var slider = cljs.core.cst$kw$prais2$data_SLASH_slider.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
slider.setValue(value);
} else {
}

return sablono.interpreter.interpret(s);
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bs_slider("#detail-slider",cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value),rum.core.static$], null)),"detail-slider-control");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19996__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19996 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19997__i = 0, G__19997__a = new Array(arguments.length -  0);
while (G__19997__i < G__19997__a.length) {G__19997__a[G__19997__i] = arguments[G__19997__i + 0]; ++G__19997__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19997__a,0,null);
} 
return G__19996__delegate.call(this,args__14302__auto__);};
G__19996.cljs$lang$maxFixedArity = 0;
G__19996.cljs$lang$applyTo = (function (arglist__19998){
var args__14302__auto__ = cljs.core.seq(arglist__19998);
return G__19996__delegate(args__14302__auto__);
});
G__19996.cljs$core$IFn$_invoke$arity$variadic = G__19996__delegate;
return G__19996;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.map_detail_slider_control = (function (){var render_mixin__14299__auto__ = rum.core.render_state__GT_mixin((function (state,value){
var s = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_map_DASH_detail_DASH_slider$slider,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,value], null)], null)], null);
var slider = cljs.core.cst$kw$prais2$data_SLASH_slider.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
slider.setValue(value);
} else {
}

return sablono.interpreter.interpret(s);
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bs_slider("#map-detail-slider",cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value),rum.core.static$], null)),"map-detail-slider-control");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19999__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19999 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20000__i = 0, G__20000__a = new Array(arguments.length -  0);
while (G__20000__i < G__20000__a.length) {G__20000__a[G__20000__i] = arguments[G__20000__i + 0]; ++G__20000__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20000__a,0,null);
} 
return G__19999__delegate.call(this,args__14302__auto__);};
G__19999.cljs$lang$maxFixedArity = 0;
G__19999.cljs$lang$applyTo = (function (arglist__20001){
var args__14302__auto__ = cljs.core.seq(arglist__20001);
return G__19999__delegate(args__14302__auto__);
});
G__19999.cljs$core$IFn$_invoke$arity$variadic = G__19999__delegate;
return G__19999;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.axis_container = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function() {
var G__20003 = null;
var G__20003__1 = (function (slider_axis_value){
return sablono.interpreter.interpret((prais2.data.axis_container.cljs$core$IFn$_invoke$arity$2 ? prais2.data.axis_container.cljs$core$IFn$_invoke$arity$2(slider_axis_value,(69)) : prais2.data.axis_container.call(null,slider_axis_value,(69))));
});
var G__20003__2 = (function (slider_axis_value,tick_height){
var attrs20002 = rum.core.with_key((prais2.data.ticks.cljs$core$IFn$_invoke$arity$3 ? prais2.data.ticks.cljs$core$IFn$_invoke$arity$3(slider_axis_value,(3),tick_height) : prais2.data.ticks.call(null,slider_axis_value,(3),tick_height)),cljs.core.cst$kw$ticks);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20002))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["axis-container"], null)], null),attrs20002], 0))):({"className": "axis-container"})),((cljs.core.map_QMARK_(attrs20002))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20002)], null)));
});
G__20003 = function(slider_axis_value,tick_height){
switch(arguments.length){
case 1:
return G__20003__1.call(this,slider_axis_value);
case 2:
return G__20003__2.call(this,slider_axis_value,tick_height);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20003.cljs$core$IFn$_invoke$arity$1 = G__20003__1;
G__20003.cljs$core$IFn$_invoke$arity$2 = G__20003__2;
return G__20003;
})()
);
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"axis-container");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20004__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20004 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20005__i = 0, G__20005__a = new Array(arguments.length -  0);
while (G__20005__i < G__20005__a.length) {G__20005__a[G__20005__i] = arguments[G__20005__i + 0]; ++G__20005__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20005__a,0,null);
} 
return G__20004__delegate.call(this,args__14302__auto__);};
G__20004.cljs$lang$maxFixedArity = 0;
G__20004.cljs$lang$applyTo = (function (arglist__20006){
var args__14302__auto__ = cljs.core.seq(arglist__20006);
return G__20004__delegate(args__14302__auto__);
});
G__20004.cljs$core$IFn$_invoke$arity$variadic = G__20004__delegate;
return G__20004;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.slider_title = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (headers){
return React.createElement("p",({"key": "p"}),((typeof headers === 'string')?sablono.interpreter.interpret(headers):sablono.interpreter.interpret(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$observed.cljs$core$IFn$_invoke$arity$1(headers)))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"slider-title");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20007__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20007 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20008__i = 0, G__20008__a = new Array(arguments.length -  0);
while (G__20008__i < G__20008__a.length) {G__20008__a[G__20008__i] = arguments[G__20008__i + 0]; ++G__20008__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20008__a,0,null);
} 
return G__20007__delegate.call(this,args__14302__auto__);};
G__20007.cljs$lang$maxFixedArity = 0;
G__20007.cljs$lang$applyTo = (function (arglist__20009){
var args__14302__auto__ = cljs.core.seq(arglist__20009);
return G__20007__delegate(args__14302__auto__);
});
G__20007.cljs$core$IFn$_invoke$arity$variadic = G__20007__delegate;
return G__20007;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.table_header = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (background,ap,header,column_key){
return React.createElement("th",({"onClick": (function (p1__20010_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$sortable.cljs$core$IFn$_invoke$arity$1(header))){
return prais2.core.click__GT_event_bus(p1__20010_SHARP_,cljs.core.cst$kw$sort_DASH_toggle,column_key,null);
} else {
return null;
}
}), "onTouchStart": (function (p1__20011_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$sortable.cljs$core$IFn$_invoke$arity$1(header))){
return prais2.core.click__GT_event_bus(p1__20011_SHARP_,cljs.core.cst$kw$sort_DASH_toggle,column_key,null);
} else {
return null;
}
}), "style": ({"maxWidth": prais2.utils.px(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(header)), "whiteSpace": "normal !important", "verticalAlign": "top", "cursor": (cljs.core.truth_(cljs.core.cst$kw$sortable.cljs$core$IFn$_invoke$arity$1(header))?"pointer":"auto"), "backgroundColor": background, "color": "#ffffff !important"})}),sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$sortable.cljs$core$IFn$_invoke$arity$1(header))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$icon,cljs.core.cst$kw$class,["right fa fa-sort",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$sort_DASH_by.cljs$core$IFn$_invoke$arity$1(ap)))?(cljs.core.truth_(cljs.core.cst$kw$sort_DASH_ascending.cljs$core$IFn$_invoke$arity$1(ap))?"-asc":"-desc"):""))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pointer_DASH_events,"none",cljs.core.cst$kw$zoom,1.5,cljs.core.cst$kw$color,"#ffffff"], null)], null)], null):null)),React.createElement("span",({"key": "text", "style": ({"backgroundColor": "none !important", "color": "white !important"})}),sablono.interpreter.interpret(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?(function (){var info_handler = (function (p1__20012_SHARP_){
return prais2.core.click__GT_event_bus(p1__20012_SHARP_,cljs.core.cst$kw$info_DASH_clicked,column_key,null);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_primary$btn_DASH_xs$info$pull_DASH_right,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$role,cljs.core.cst$kw$tabIndex,cljs.core.cst$kw$data_DASH_html,cljs.core.cst$kw$data_DASH_trigger,cljs.core.cst$kw$data_DASH_content,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$title,cljs.core.cst$kw$style,cljs.core.cst$kw$data_DASH_placement,cljs.core.cst$kw$on_DASH_touch_DASH_start,cljs.core.cst$kw$data_DASH_toggle],["button",(-1),"true","focus",cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(header),info_handler,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(header),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),"bottom",info_handler,"popover"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$i], null)], null)], null);
})():null)),React.createElement("br",({"key": "br"})),sablono.interpreter.interpret(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(header))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,prais2.core.bs_popover], null)),"table-header");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20015__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20015 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20016__i = 0, G__20016__a = new Array(arguments.length -  0);
while (G__20016__i < G__20016__a.length) {G__20016__a[G__20016__i] = arguments[G__20016__i + 0]; ++G__20016__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20016__a,0,null);
} 
return G__20015__delegate.call(this,args__14302__auto__);};
G__20015.cljs$lang$maxFixedArity = 0;
G__20015.cljs$lang$applyTo = (function (arglist__20017){
var args__14302__auto__ = cljs.core.seq(arglist__20017);
return G__20015__delegate(args__14302__auto__);
});
G__20015.cljs$core$IFn$_invoke$arity$variadic = G__20015__delegate;
return G__20015;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.slider_widget = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function() {
var G__20019 = null;
var G__20019__3 = (function (headers,control,slider_axis_value){
return sablono.interpreter.interpret((prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$4 ? prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$4(headers,control,slider_axis_value,(69)) : prais2.data.slider_widget.call(null,headers,control,slider_axis_value,(69))));
});
var G__20019__4 = (function (headers,control,slider_axis_value,tick_height){
var attrs20018 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.data.slider_title.cljs$core$IFn$_invoke$arity$1 ? prais2.data.slider_title.cljs$core$IFn$_invoke$arity$1(headers) : prais2.data.slider_title.call(null,headers)),(prais2.data.slider_labels.cljs$core$IFn$_invoke$arity$0 ? prais2.data.slider_labels.cljs$core$IFn$_invoke$arity$0() : prais2.data.slider_labels.call(null)),(control.cljs$core$IFn$_invoke$arity$4 ? control.cljs$core$IFn$_invoke$arity$4(slider_axis_value,(0),(1),0.02) : control.call(null,slider_axis_value,(0),(1),0.02)),(prais2.data.axis_container.cljs$core$IFn$_invoke$arity$2 ? prais2.data.axis_container.cljs$core$IFn$_invoke$arity$2(slider_axis_value,tick_height) : prais2.data.axis_container.call(null,slider_axis_value,tick_height))], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20018))?sablono.interpreter.attributes(attrs20018):null),((cljs.core.map_QMARK_(attrs20018))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20018)], null)));
});
G__20019 = function(headers,control,slider_axis_value,tick_height){
switch(arguments.length){
case 3:
return G__20019__3.call(this,headers,control,slider_axis_value);
case 4:
return G__20019__4.call(this,headers,control,slider_axis_value,tick_height);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20019.cljs$core$IFn$_invoke$arity$3 = G__20019__3;
G__20019.cljs$core$IFn$_invoke$arity$4 = G__20019__4;
return G__20019;
})()
);
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"slider-widget");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20020__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20020 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20021__i = 0, G__20021__a = new Array(arguments.length -  0);
while (G__20021__i < G__20021__a.length) {G__20021__a[G__20021__i] = arguments[G__20021__i + 0]; ++G__20021__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20021__a,0,null);
} 
return G__20020__delegate.call(this,args__14302__auto__);};
G__20020.cljs$lang$maxFixedArity = 0;
G__20020.cljs$lang$applyTo = (function (arglist__20022){
var args__14302__auto__ = cljs.core.seq(arglist__20022);
return G__20020__delegate(args__14302__auto__);
});
G__20020.cljs$core$IFn$_invoke$arity$variadic = G__20020__delegate;
return G__20020;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.table_head = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (ap,headers,column_keys,slider_axis_value){
return React.createElement("thead",null,React.createElement("tr",null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4311__auto__ = (function prais2$data$iter__20023(s__20024){
return (new cljs.core.LazySeq(null,(function (){
var s__20024__$1 = s__20024;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__20024__$1);
if(temp__5753__auto__){
var s__20024__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20024__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__20024__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__20026 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__20025 = (0);
while(true){
if((i__20025 < size__4310__auto__)){
var column_key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__20025);
if(cljs.core.truth_(cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers))))){
cljs.core.chunk_append(b__20026,sablono.interpreter.interpret(rum.core.with_key((function (){var G__20027 = cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(ap)));
var G__20028 = ap;
var G__20029 = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers));
var G__20030 = column_key;
return (prais2.data.table_header.cljs$core$IFn$_invoke$arity$4 ? prais2.data.table_header.cljs$core$IFn$_invoke$arity$4(G__20027,G__20028,G__20029,G__20030) : prais2.data.table_header.call(null,G__20027,G__20028,G__20029,G__20030));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_key,"head"], null))));

var G__20035 = (i__20025 + (1));
i__20025 = G__20035;
continue;
} else {
var G__20036 = (i__20025 + (1));
i__20025 = G__20036;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20026),prais2$data$iter__20023(cljs.core.chunk_rest(s__20024__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20026),null);
}
} else {
var column_key = cljs.core.first(s__20024__$2);
if(cljs.core.truth_(cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers))))){
return cljs.core.cons(sablono.interpreter.interpret(rum.core.with_key((function (){var G__20031 = cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(ap)));
var G__20032 = ap;
var G__20033 = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers));
var G__20034 = column_key;
return (prais2.data.table_header.cljs$core$IFn$_invoke$arity$4 ? prais2.data.table_header.cljs$core$IFn$_invoke$arity$4(G__20031,G__20032,G__20033,G__20034) : prais2.data.table_header.call(null,G__20031,G__20032,G__20033,G__20034));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_key,"head"], null))),prais2$data$iter__20023(cljs.core.rest(s__20024__$2)));
} else {
var G__20037 = cljs.core.rest(s__20024__$2);
s__20024__$1 = G__20037;
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
return iter__4311__auto__(column_keys);
})()),React.createElement("th",({"key": "last"}),React.createElement("div",({"style": ({"height": prais2.utils.px(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$observed.cljs$core$IFn$_invoke$arity$1(headers)))}), "className": "slider-container"}),sablono.interpreter.interpret((prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$4 ? prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$4(headers,prais2.data.slider_control,slider_axis_value,(748)) : prais2.data.slider_widget.call(null,headers,prais2.data.slider_control,slider_axis_value,(748))))))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"table-head");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20038__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20038 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20039__i = 0, G__20039__a = new Array(arguments.length -  0);
while (G__20039__i < G__20039__a.length) {G__20039__a[G__20039__i] = arguments[G__20039__i + 0]; ++G__20039__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20039__a,0,null);
} 
return G__20038__delegate.call(this,args__14302__auto__);};
G__20038.cljs$lang$maxFixedArity = 0;
G__20038.cljs$lang$applyTo = (function (arglist__20040){
var args__14302__auto__ = cljs.core.seq(arglist__20040);
return G__20038__delegate(args__14302__auto__);
});
G__20038.cljs$core$IFn$_invoke$arity$variadic = G__20038__delegate;
return G__20038;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.table1_core = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (ap,data,sort_key,sort_direction,headers){
return React.createElement("table",({"cellSpacing": "0", "className": "table table-bordered"}),sablono.interpreter.interpret(rum.core.with_key((function (){var G__20042 = ap;
var G__20043 = headers;
var G__20044 = cljs.core.keys(headers);
var G__20045 = cljs.core.cst$kw$slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
return (prais2.data.table_head.cljs$core$IFn$_invoke$arity$4 ? prais2.data.table_head.cljs$core$IFn$_invoke$arity$4(G__20042,G__20043,G__20044,G__20045) : prais2.data.table_head.call(null,G__20042,G__20043,G__20044,G__20045));
})(),cljs.core.cst$kw$thead)),React.createElement("tbody",({"key": "tbody"}),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4311__auto__ = (function prais2$data$iter__20046(s__20047){
return (new cljs.core.LazySeq(null,(function (){
var s__20047__$1 = s__20047;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__20047__$1);
if(temp__5753__auto__){
var s__20047__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20047__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__20047__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__20049 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__20048 = (0);
while(true){
if((i__20048 < size__4310__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__20048);
var h_code = cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(row);
var slider_axis_value = cljs.core.cst$kw$slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
cljs.core.chunk_append(b__20049,React.createElement("tr",({"key": h_code, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(h_code),cljs.core.cst$kw$selected_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(ap)))?"info":"")], null))}),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4311__auto__ = ((function (i__20048,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__20049,s__20047__$2,temp__5753__auto__){
return (function prais2$data$iter__20046_$_iter__20051(s__20052){
return (new cljs.core.LazySeq(null,((function (i__20048,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__20049,s__20047__$2,temp__5753__auto__){
return (function (){
var s__20052__$1 = s__20052;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__20052__$1);
if(temp__5753__auto____$1){
var s__20052__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20052__$2)){
var c__4309__auto____$1 = cljs.core.chunk_first(s__20052__$2);
var size__4310__auto____$1 = cljs.core.count(c__4309__auto____$1);
var b__20054 = cljs.core.chunk_buffer(size__4310__auto____$1);
if((function (){var i__20053 = (0);
while(true){
if((i__20053 < size__4310__auto____$1)){
var column_key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto____$1,i__20053);
var column_header = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers));
var info_handler = ((function (i__20053,s__20052__$1,i__20048,column_header,column_key,c__4309__auto____$1,size__4310__auto____$1,b__20054,s__20052__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__20049,s__20047__$2,temp__5753__auto__){
return (function (p1__20041_SHARP_){
return prais2.core.click__GT_event_bus(p1__20041_SHARP_,cljs.core.cst$kw$open_DASH_hospital_DASH_modal,h_code,null);
});})(i__20053,s__20052__$1,i__20048,column_header,column_key,c__4309__auto____$1,size__4310__auto____$1,b__20054,s__20052__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__20049,s__20047__$2,temp__5753__auto__))
;
if(cljs.core.truth_(cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1(column_header))){
cljs.core.chunk_append(b__20054,(function (){var attrs20050 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"h-name":""),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max_DASH_width,prais2.utils.px(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(column_header)),cljs.core.cst$kw$white_DASH_space,"normal",cljs.core.cst$kw$height,prais2.utils.px(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(column_header))], null)], 0))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_touch_DASH_start,info_handler,cljs.core.cst$kw$on_DASH_click,info_handler], null):null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs20050))?sablono.interpreter.attributes(attrs20050):null),((cljs.core.map_QMARK_(attrs20050))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20050),React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null)));
})());

var G__20059 = (i__20053 + (1));
i__20053 = G__20059;
continue;
} else {
var G__20060 = (i__20053 + (1));
i__20053 = G__20060;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20054),prais2$data$iter__20046_$_iter__20051(cljs.core.chunk_rest(s__20052__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20054),null);
}
} else {
var column_key = cljs.core.first(s__20052__$2);
var column_header = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers));
var info_handler = ((function (s__20052__$1,i__20048,column_header,column_key,s__20052__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__20049,s__20047__$2,temp__5753__auto__){
return (function (p1__20041_SHARP_){
return prais2.core.click__GT_event_bus(p1__20041_SHARP_,cljs.core.cst$kw$open_DASH_hospital_DASH_modal,h_code,null);
});})(s__20052__$1,i__20048,column_header,column_key,s__20052__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__20049,s__20047__$2,temp__5753__auto__))
;
if(cljs.core.truth_(cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1(column_header))){
return cljs.core.cons((function (){var attrs20050 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"h-name":""),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max_DASH_width,prais2.utils.px(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(column_header)),cljs.core.cst$kw$white_DASH_space,"normal",cljs.core.cst$kw$height,prais2.utils.px(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(column_header))], null)], 0))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_touch_DASH_start,info_handler,cljs.core.cst$kw$on_DASH_click,info_handler], null):null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs20050))?sablono.interpreter.attributes(attrs20050):null),((cljs.core.map_QMARK_(attrs20050))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20050),React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null)));
})(),prais2$data$iter__20046_$_iter__20051(cljs.core.rest(s__20052__$2)));
} else {
var G__20061 = cljs.core.rest(s__20052__$2);
s__20052__$1 = G__20061;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__20048,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__20049,s__20047__$2,temp__5753__auto__))
,null,null));
});})(i__20048,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__20049,s__20047__$2,temp__5753__auto__))
;
return iter__4311__auto__(cljs.core.keys(headers));
})()),React.createElement("td",({"key": [h_code,"bars"], "style": ({"backgroundColor": "#f0f0f0"})}),sablono.interpreter.interpret((prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2 ? prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2(row,slider_axis_value) : prais2.data.chart_cell.call(null,row,slider_axis_value))))));

var G__20062 = (i__20048 + (1));
i__20048 = G__20062;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20049),prais2$data$iter__20046(cljs.core.chunk_rest(s__20047__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20049),null);
}
} else {
var row = cljs.core.first(s__20047__$2);
var h_code = cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(row);
var slider_axis_value = cljs.core.cst$kw$slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
return cljs.core.cons(React.createElement("tr",({"key": h_code, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(h_code),cljs.core.cst$kw$selected_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(ap)))?"info":"")], null))}),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4311__auto__ = ((function (h_code,slider_axis_value,row,s__20047__$2,temp__5753__auto__){
return (function prais2$data$iter__20046_$_iter__20055(s__20056){
return (new cljs.core.LazySeq(null,((function (h_code,slider_axis_value,row,s__20047__$2,temp__5753__auto__){
return (function (){
var s__20056__$1 = s__20056;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__20056__$1);
if(temp__5753__auto____$1){
var s__20056__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20056__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__20056__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__20058 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__20057 = (0);
while(true){
if((i__20057 < size__4310__auto__)){
var column_key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__20057);
var column_header = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers));
var info_handler = ((function (i__20057,s__20056__$1,column_header,column_key,c__4309__auto__,size__4310__auto__,b__20058,s__20056__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,s__20047__$2,temp__5753__auto__){
return (function (p1__20041_SHARP_){
return prais2.core.click__GT_event_bus(p1__20041_SHARP_,cljs.core.cst$kw$open_DASH_hospital_DASH_modal,h_code,null);
});})(i__20057,s__20056__$1,column_header,column_key,c__4309__auto__,size__4310__auto__,b__20058,s__20056__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,s__20047__$2,temp__5753__auto__))
;
if(cljs.core.truth_(cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1(column_header))){
cljs.core.chunk_append(b__20058,(function (){var attrs20050 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"h-name":""),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max_DASH_width,prais2.utils.px(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(column_header)),cljs.core.cst$kw$white_DASH_space,"normal",cljs.core.cst$kw$height,prais2.utils.px(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(column_header))], null)], 0))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_touch_DASH_start,info_handler,cljs.core.cst$kw$on_DASH_click,info_handler], null):null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs20050))?sablono.interpreter.attributes(attrs20050):null),((cljs.core.map_QMARK_(attrs20050))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20050),React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null)));
})());

var G__20063 = (i__20057 + (1));
i__20057 = G__20063;
continue;
} else {
var G__20064 = (i__20057 + (1));
i__20057 = G__20064;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20058),prais2$data$iter__20046_$_iter__20055(cljs.core.chunk_rest(s__20056__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20058),null);
}
} else {
var column_key = cljs.core.first(s__20056__$2);
var column_header = (column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(headers) : column_key.call(null,headers));
var info_handler = ((function (s__20056__$1,column_header,column_key,s__20056__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,s__20047__$2,temp__5753__auto__){
return (function (p1__20041_SHARP_){
return prais2.core.click__GT_event_bus(p1__20041_SHARP_,cljs.core.cst$kw$open_DASH_hospital_DASH_modal,h_code,null);
});})(s__20056__$1,column_header,column_key,s__20056__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,s__20047__$2,temp__5753__auto__))
;
if(cljs.core.truth_(cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1(column_header))){
return cljs.core.cons((function (){var attrs20050 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"h-name":""),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max_DASH_width,prais2.utils.px(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(column_header)),cljs.core.cst$kw$white_DASH_space,"normal",cljs.core.cst$kw$height,prais2.utils.px(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(column_header))], null)], 0))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_touch_DASH_start,info_handler,cljs.core.cst$kw$on_DASH_click,info_handler], null):null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"td",((cljs.core.map_QMARK_(attrs20050))?sablono.interpreter.attributes(attrs20050):null),((cljs.core.map_QMARK_(attrs20050))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20050),React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"pointer":"auto"), "width": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1((column_key.cljs$core$IFn$_invoke$arity$1 ? column_key.cljs$core$IFn$_invoke$arity$1(row) : column_key.call(null,row))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$survival_DASH_rate))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_key,cljs.core.cst$kw$h_DASH_name))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_chevron_DASH_right], null)], null):null))], null)));
})(),prais2$data$iter__20046_$_iter__20055(cljs.core.rest(s__20056__$2)));
} else {
var G__20065 = cljs.core.rest(s__20056__$2);
s__20056__$1 = G__20065;
continue;
}
}
} else {
return null;
}
break;
}
});})(h_code,slider_axis_value,row,s__20047__$2,temp__5753__auto__))
,null,null));
});})(h_code,slider_axis_value,row,s__20047__$2,temp__5753__auto__))
;
return iter__4311__auto__(cljs.core.keys(headers));
})()),React.createElement("td",({"key": [h_code,"bars"], "style": ({"backgroundColor": "#f0f0f0"})}),sablono.interpreter.interpret((prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2 ? prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2(row,slider_axis_value) : prais2.data.chart_cell.call(null,row,slider_axis_value))))),prais2$data$iter__20046(cljs.core.rest(s__20047__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__((cljs.core.truth_(sort_key)?(function (){var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_key,cljs.core.rest(data));
if(cljs.core.truth_(sort_direction)){
return sorted;
} else {
return cljs.core.reverse(sorted);
}
})():cljs.core.rest(data)));
})())));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"table1-core");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20066__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20066 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20067__i = 0, G__20067__a = new Array(arguments.length -  0);
while (G__20067__i < G__20067__a.length) {G__20067__a[G__20067__i] = arguments[G__20067__i + 0]; ++G__20067__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20067__a,0,null);
} 
return G__20066__delegate.call(this,args__14302__auto__);};
G__20066.cljs$lang$maxFixedArity = 0;
G__20066.cljs$lang$applyTo = (function (arglist__20068){
var args__14302__auto__ = cljs.core.seq(arglist__20068);
return G__20066__delegate(args__14302__auto__);
});
G__20066.cljs$core$IFn$_invoke$arity$variadic = G__20066__delegate;
return G__20066;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.table1 = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (app,data){
return React.createElement("div",({"className": "table-container"}),(function (){var attrs20069 = (function (){var G__20070 = rum.core.react(app);
var G__20071 = data;
var G__20072 = cljs.core.cst$kw$sort_DASH_by.cljs$core$IFn$_invoke$arity$1(rum.core.react(app));
var G__20073 = cljs.core.cst$kw$sort_DASH_ascending.cljs$core$IFn$_invoke$arity$1(rum.core.react(app));
var G__20074 = cljs.core.first(data);
return (prais2.data.table1_core.cljs$core$IFn$_invoke$arity$5 ? prais2.data.table1_core.cljs$core$IFn$_invoke$arity$5(G__20070,G__20071,G__20072,G__20073,G__20074) : prais2.data.table1_core.call(null,G__20070,G__20071,G__20072,G__20073,G__20074));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20069))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data-table"], null)], null),attrs20069], 0))):({"className": "data-table"})),((cljs.core.map_QMARK_(attrs20069))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20069)], null)));
})());
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"table1");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20075__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20075 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20076__i = 0, G__20076__a = new Array(arguments.length -  0);
while (G__20076__i < G__20076__a.length) {G__20076__a[G__20076__i] = arguments[G__20076__i + 0]; ++G__20076__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20076__a,0,null);
} 
return G__20075__delegate.call(this,args__14302__auto__);};
G__20075.cljs$lang$maxFixedArity = 0;
G__20075.cljs$lang$applyTo = (function (arglist__20077){
var args__14302__auto__ = cljs.core.seq(arglist__20077);
return G__20075__delegate(args__14302__auto__);
});
G__20075.cljs$core$IFn$_invoke$arity$variadic = G__20075__delegate;
return G__20075;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
prais2.data.year_range = (function prais2$data$year_range(year,m1,m2){
var y1 = (year - (3));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$y1,y1,cljs.core.cst$kw$mrange,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1)," \u2014 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m2)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join(''),cljs.core.cst$kw$option,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1)," \u2014 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('')], null);
});
prais2.data.end_year = (function prais2$data$end_year(){
return parseInt(cljs.core.name(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(prais2.core.app))));
});
/**
 * 
 */
prais2.data.key_option = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (year){
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic("option",({"value": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('')}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sablono.interpreter.interpret(cljs.core.cst$kw$option.cljs$core$IFn$_invoke$arity$1(prais2.data.year_range(year,"April","March")))], 0));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"key-option");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20078__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20078 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20079__i = 0, G__20079__a = new Array(arguments.length -  0);
while (G__20079__i < G__20079__a.length) {G__20079__a[G__20079__i] = arguments[G__20079__i + 0]; ++G__20079__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20079__a,0,null);
} 
return G__20078__delegate.call(this,args__14302__auto__);};
G__20078.cljs$lang$maxFixedArity = 0;
G__20078.cljs$lang$applyTo = (function (arglist__20080){
var args__14302__auto__ = cljs.core.seq(arglist__20080);
return G__20078__delegate(args__14302__auto__);
});
G__20078.cljs$core$IFn$_invoke$arity$variadic = G__20078__delegate;
return G__20078;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.datasource_dropdown = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (event_bus){
return React.createElement("div",({"className": "form-group"}),React.createElement("label-for",({"htmlFor": "data-selector"}),"Change reporting period"),React.createElement("select",({"id": "data-selector", "value": cljs.core.name(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app))), "onChange": (function (p1__20081_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_datasource,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20081_SHARP_.target.value)], null));
}), "className": "form-control input-sm"}),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,(function (){var iter__4311__auto__ = (function prais2$data$iter__20084(s__20085){
return (new cljs.core.LazySeq(null,(function (){
var s__20085__$1 = s__20085;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__20085__$1);
if(temp__5753__auto__){
var s__20085__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20085__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__20085__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__20087 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__20086 = (0);
while(true){
if((i__20086 < size__4310__auto__)){
var year = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__20086);
cljs.core.chunk_append(b__20087,(prais2.data.key_option.cljs$core$IFn$_invoke$arity$1 ? prais2.data.key_option.cljs$core$IFn$_invoke$arity$1(year) : prais2.data.key_option.call(null,year)));

var G__20088 = (i__20086 + (1));
i__20086 = G__20088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20087),prais2$data$iter__20084(cljs.core.chunk_rest(s__20085__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20087),null);
}
} else {
var year = cljs.core.first(s__20085__$2);
return cljs.core.cons((prais2.data.key_option.cljs$core$IFn$_invoke$arity$1 ? prais2.data.key_option.cljs$core$IFn$_invoke$arity$1(year) : prais2.data.key_option.call(null,year)),prais2$data$iter__20084(cljs.core.rest(s__20085__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(prais2.content.find_min_year(cljs.core.cst$kw$hosp_DASH_data.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app))),((1) + prais2.content.find_max_year(cljs.core.cst$kw$hosp_DASH_data.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app))))));
})()))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"datasource-dropdown");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20089__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20089 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20090__i = 0, G__20090__a = new Array(arguments.length -  0);
while (G__20090__i < G__20090__a.length) {G__20090__a[G__20090__i] = arguments[G__20090__i + 0]; ++G__20090__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20090__a,0,null);
} 
return G__20089__delegate.call(this,args__14302__auto__);};
G__20089.cljs$lang$maxFixedArity = 0;
G__20089.cljs$lang$applyTo = (function (arglist__20091){
var args__14302__auto__ = cljs.core.seq(arglist__20091);
return G__20089__delegate(args__14302__auto__);
});
G__20089.cljs$core$IFn$_invoke$arity$variadic = G__20089__delegate;
return G__20089;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.datasource_title = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (prefix){
var attrs20092 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mrange.cljs$core$IFn$_invoke$arity$1(prais2.data.year_range(prais2.data.end_year(),"April","March")))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",((cljs.core.map_QMARK_(attrs20092))?sablono.interpreter.attributes(attrs20092):null),((cljs.core.map_QMARK_(attrs20092))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20092)], null)));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"datasource-title");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20093__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20093 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20094__i = 0, G__20094__a = new Array(arguments.length -  0);
while (G__20094__i < G__20094__a.length) {G__20094__a[G__20094__i] = arguments[G__20094__i + 0]; ++G__20094__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20094__a,0,null);
} 
return G__20093__delegate.call(this,args__14302__auto__);};
G__20093.cljs$lang$maxFixedArity = 0;
G__20093.cljs$lang$applyTo = (function (arglist__20095){
var args__14302__auto__ = cljs.core.seq(arglist__20095);
return G__20093__delegate(args__14302__auto__);
});
G__20093.cljs$core$IFn$_invoke$arity$variadic = G__20093__delegate;
return G__20093;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.list_tab = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (app,data,event_bus){
return React.createElement("div",null,React.createElement("div",({"className": "col-sm-offset-1 col-sm-10"}),React.createElement("div",({"className": "row"}),(function (){var attrs20100 = (prais2.data.datasource_title.cljs$core$IFn$_invoke$arity$1 ? prais2.data.datasource_title.cljs$core$IFn$_invoke$arity$1("Data for ") : prais2.data.datasource_title.call(null,"Data for "));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20100))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-9"], null)], null),attrs20100], 0))):({"className": "col-sm-9"})),((cljs.core.map_QMARK_(attrs20100))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20100)], null)));
})(),(function (){var attrs20101 = (prais2.data.datasource_dropdown.cljs$core$IFn$_invoke$arity$1 ? prais2.data.datasource_dropdown.cljs$core$IFn$_invoke$arity$1(event_bus) : prais2.data.datasource_dropdown.call(null,event_bus));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20101))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-3"], null)], null),attrs20101], 0))):({"className": "col-sm-3"})),((cljs.core.map_QMARK_(attrs20101))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20101)], null)));
})()),React.createElement("p",({"className": "col-sm-9"}),"These are the hospitals in the UK and Ireland that performed heart surgery in children over this period\n     (0-16 years old)."),React.createElement("p",({"className": "col-sm-9"}),"Clicking on a hospital will bring up specific information for\n     that hospital along with an interpretation of its survival rate. It is ",React.createElement("strong",null,"only")," valid to compare a hospital's survival\n     rate to its predicted range of survival and not to other hospitals. Read more about this in ",(function (){var attrs20104 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20104))?sablono.interpreter.attributes(attrs20104):null),((cljs.core.map_QMARK_(attrs20104))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20104),"Everything Else."], null)));
})()),React.createElement("p",({"className": "col-sm-9"}),(function (){var attrs20105 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20105))?sablono.interpreter.attributes(attrs20105):null),((cljs.core.map_QMARK_(attrs20105))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20105),"The Everything Else"], null)));
})()," section also tells you more about the predicted range and what\n     happens if a hospital\u2019s survival rate is outside its range."),React.createElement("p",({"className": "col-sm-9"}),"You can hover over or tap on the charts to bring up more information.")),sablono.interpreter.interpret((prais2.data.table1.cljs$core$IFn$_invoke$arity$2 ? prais2.data.table1.cljs$core$IFn$_invoke$arity$2(app,data) : prais2.data.table1.call(null,app,data))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.update_title("All hospitals")], null)),"list-tab");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20106__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20106 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20107__i = 0, G__20107__a = new Array(arguments.length -  0);
while (G__20107__i < G__20107__a.length) {G__20107__a[G__20107__i] = arguments[G__20107__i + 0]; ++G__20107__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20107__a,0,null);
} 
return G__20106__delegate.call(this,args__14302__auto__);};
G__20106.cljs$lang$maxFixedArity = 0;
G__20106.cljs$lang$applyTo = (function (arglist__20108){
var args__14302__auto__ = cljs.core.seq(arglist__20108);
return G__20106__delegate(args__14302__auto__);
});
G__20106.cljs$core$IFn$_invoke$arity$variadic = G__20106__delegate;
return G__20106;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.interpretation = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (row,close_modal){
var survival_rate = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(row);
return sablono.interpreter.interpret((((survival_rate < cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(row)))?(prais2.content.outer_low_comment.cljs$core$IFn$_invoke$arity$1 ? prais2.content.outer_low_comment.cljs$core$IFn$_invoke$arity$1(close_modal) : prais2.content.outer_low_comment.call(null,close_modal)):(((survival_rate < cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(row)))?(prais2.content.low_comment.cljs$core$IFn$_invoke$arity$1 ? prais2.content.low_comment.cljs$core$IFn$_invoke$arity$1(close_modal) : prais2.content.low_comment.call(null,close_modal)):(((survival_rate <= cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(row)))?(prais2.content.inner_comment.cljs$core$IFn$_invoke$arity$1 ? prais2.content.inner_comment.cljs$core$IFn$_invoke$arity$1(close_modal) : prais2.content.inner_comment.call(null,close_modal)):(((survival_rate <= cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row)))?(prais2.content.high_comment.cljs$core$IFn$_invoke$arity$1 ? prais2.content.high_comment.cljs$core$IFn$_invoke$arity$1(close_modal) : prais2.content.high_comment.call(null,close_modal)):(((survival_rate > cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(row)))?(prais2.content.outer_high_comment.cljs$core$IFn$_invoke$arity$1 ? prais2.content.outer_high_comment.cljs$core$IFn$_invoke$arity$1(close_modal) : prais2.content.outer_high_comment.call(null,close_modal)):"Oops - no text for this"
))))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"interpretation");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20109__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20109 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20110__i = 0, G__20110__a = new Array(arguments.length -  0);
while (G__20110__i < G__20110__a.length) {G__20110__a[G__20110__i] = arguments[G__20110__i + 0]; ++G__20110__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20110__a,0,null);
} 
return G__20109__delegate.call(this,args__14302__auto__);};
G__20109.cljs$lang$maxFixedArity = 0;
G__20109.cljs$lang$applyTo = (function (arglist__20111){
var args__14302__auto__ = cljs.core.seq(arglist__20111);
return G__20109__delegate(args__14302__auto__);
});
G__20109.cljs$core$IFn$_invoke$arity$variadic = G__20109__delegate;
return G__20109;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.hospital_charities = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (h_code){
var meta = (h_code.cljs$core$IFn$_invoke$arity$1 ? h_code.cljs$core$IFn$_invoke$arity$1(prais2.content.hospital_metadata) : h_code.call(null,prais2.content.hospital_metadata));
var vec__20112 = meta;
var link1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20112,(0),null);
var link2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20112,(1),null);
var link3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20112,(2),null);
var link4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20112,(3),null);
var link5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20112,(4),null);
return sablono.interpreter.interpret((cljs.core.truth_(link1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null),"Further web information"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,(link1.cljs$core$IFn$_invoke$arity$1 ? link1.cljs$core$IFn$_invoke$arity$1((1)) : link1.call(null,(1))),(link1.cljs$core$IFn$_invoke$arity$1 ? link1.cljs$core$IFn$_invoke$arity$1((2)) : link1.call(null,(2)))], null)], null),(cljs.core.truth_(link2)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,(link2.cljs$core$IFn$_invoke$arity$1 ? link2.cljs$core$IFn$_invoke$arity$1((1)) : link2.call(null,(1))),(link2.cljs$core$IFn$_invoke$arity$1 ? link2.cljs$core$IFn$_invoke$arity$1((2)) : link2.call(null,(2)))], null)], null):null),(cljs.core.truth_(link3)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,(link3.cljs$core$IFn$_invoke$arity$1 ? link3.cljs$core$IFn$_invoke$arity$1((1)) : link3.call(null,(1))),(link3.cljs$core$IFn$_invoke$arity$1 ? link3.cljs$core$IFn$_invoke$arity$1((2)) : link3.call(null,(2)))], null)], null):null),(cljs.core.truth_(link4)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,(link4.cljs$core$IFn$_invoke$arity$1 ? link4.cljs$core$IFn$_invoke$arity$1((1)) : link4.call(null,(1))),(link4.cljs$core$IFn$_invoke$arity$1 ? link4.cljs$core$IFn$_invoke$arity$1((2)) : link4.call(null,(2)))], null)], null):null),(cljs.core.truth_(link5)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,(link5.cljs$core$IFn$_invoke$arity$1 ? link5.cljs$core$IFn$_invoke$arity$1((1)) : link5.call(null,(1))),(link5.cljs$core$IFn$_invoke$arity$1 ? link5.cljs$core$IFn$_invoke$arity$1((2)) : link5.call(null,(2)))], null)], null):null)], null)], null):null));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-charities");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20115__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20115 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20116__i = 0, G__20116__a = new Array(arguments.length -  0);
while (G__20116__i < G__20116__a.length) {G__20116__a[G__20116__i] = arguments[G__20116__i + 0]; ++G__20116__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20116__a,0,null);
} 
return G__20115__delegate.call(this,args__14302__auto__);};
G__20115.cljs$lang$maxFixedArity = 0;
G__20115.cljs$lang$applyTo = (function (arglist__20117){
var args__14302__auto__ = cljs.core.seq(arglist__20117);
return G__20115__delegate(args__14302__auto__);
});
G__20115.cljs$core$IFn$_invoke$arity$variadic = G__20115__delegate;
return G__20115;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.sample_hospital_intro_text = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("i",({"key": "sintros"}),React.createElement("p",({"key": (1), "className": "note"}),"You can move the slider button left to see the rates plotted on the full 0-100% range of possible\n   survival rates, or right to focus on the detail near 100%"),React.createElement("p",({"key": (2), "className": "note"}),"Mouse over or click on the chart bars and the dot for explanations of their meaning."));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"sample-hospital-intro-text");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20120__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20120 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20121__i = 0, G__20121__a = new Array(arguments.length -  0);
while (G__20121__i < G__20121__a.length) {G__20121__a[G__20121__i] = arguments[G__20121__i + 0]; ++G__20121__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20121__a,0,null);
} 
return G__20120__delegate.call(this,args__14302__auto__);};
G__20120.cljs$lang$maxFixedArity = 0;
G__20120.cljs$lang$applyTo = (function (arglist__20122){
var args__14302__auto__ = cljs.core.seq(arglist__20122);
return G__20120__delegate(args__14302__auto__);
});
G__20120.cljs$core$IFn$_invoke$arity$variadic = G__20120__delegate;
return G__20120;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.hospital_data = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (h_code){
var datasource = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app));
var selected_row = (function (){var G__20123 = (function (){var fexpr__20124 = prais2.data.rows_by_code(datasource);
return (fexpr__20124.cljs$core$IFn$_invoke$arity$0 ? fexpr__20124.cljs$core$IFn$_invoke$arity$0() : fexpr__20124.call(null));
})();
return (h_code.cljs$core$IFn$_invoke$arity$1 ? h_code.cljs$core$IFn$_invoke$arity$1(G__20123) : h_code.call(null,G__20123));
})();
return React.createElement("div",({"className": "data-summary"}),React.createElement("p",({"key": (0), "style": ({"color": "orange"})})," Hover over or tap on the chart areas for more detail on this hospital. "),React.createElement("p",({"key": (1)}),"The hospital performed ",(function (){var attrs20127 = cljs.core.cst$kw$n_DASH_ops.cljs$core$IFn$_invoke$arity$1(selected_row);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs20127))?sablono.interpreter.attributes(attrs20127):null),((cljs.core.map_QMARK_(attrs20127))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["  operations. "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20127),"  operations. "], null)));
})()),React.createElement("p",({"key": (2)}),"Measured 30 days after surgery, ",React.createElement("b",({"key": (1)}),sablono.interpreter.interpret(cljs.core.cst$kw$n_DASH_survivors.cljs$core$IFn$_invoke$arity$1(selected_row))," survivors "),"and ",React.createElement("b",({"key": (2)}),sablono.interpreter.interpret(cljs.core.cst$kw$n_DASH_deaths.cljs$core$IFn$_invoke$arity$1(selected_row))," deaths")," had been recorded. "),React.createElement("p",({"key": (3)}),"The hospital's 30 day survival rate was ",(function (){var attrs20128 = cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(selected_row);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs20128))?sablono.interpreter.attributes(attrs20128):null),((cljs.core.map_QMARK_(attrs20128))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20128),"%"], null)));
})(),"."));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-data");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20129__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20129 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20130__i = 0, G__20130__a = new Array(arguments.length -  0);
while (G__20130__i < G__20130__a.length) {G__20130__a[G__20130__i] = arguments[G__20130__i + 0]; ++G__20130__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20130__a,0,null);
} 
return G__20129__delegate.call(this,args__14302__auto__);};
G__20129.cljs$lang$maxFixedArity = 0;
G__20129.cljs$lang$applyTo = (function (arglist__20131){
var args__14302__auto__ = cljs.core.seq(arglist__20131);
return G__20129__delegate(args__14302__auto__);
});
G__20129.cljs$core$IFn$_invoke$arity$variadic = G__20129__delegate;
return G__20129;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.hospital_header = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (selected_row){
var attrs20132 = cljs.core.cst$kw$h_DASH_name.cljs$core$IFn$_invoke$arity$1(selected_row);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",((cljs.core.map_QMARK_(attrs20132))?sablono.interpreter.attributes(attrs20132):null),((cljs.core.map_QMARK_(attrs20132))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20132)], null)));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"hospital-header");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20133__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20133 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20134__i = 0, G__20134__a = new Array(arguments.length -  0);
while (G__20134__i < G__20134__a.length) {G__20134__a[G__20134__i] = arguments[G__20134__i + 0]; ++G__20134__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20134__a,0,null);
} 
return G__20133__delegate.call(this,args__14302__auto__);};
G__20133.cljs$lang$maxFixedArity = 0;
G__20133.cljs$lang$applyTo = (function (arglist__20135){
var args__14302__auto__ = cljs.core.seq(arglist__20135);
return G__20133__delegate(args__14302__auto__);
});
G__20133.cljs$core$IFn$_invoke$arity$variadic = G__20133__delegate;
return G__20133;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.legend = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (selected_row,close_modal){
return React.createElement("div",({"className": "legend"}),React.createElement("div",({"className": "box"}),React.createElement("p",({"style": ({"color": "orange"})}),"Legend (See also: ",(function (){var attrs20137 = prais2.core.href("data/animation",cljs.core.cst$kw$on_DASH_click,(function (p1__20136_SHARP_){
if(cljs.core.truth_(close_modal)){
(close_modal.cljs$core$IFn$_invoke$arity$0 ? close_modal.cljs$core$IFn$_invoke$arity$0() : close_modal.call(null));
} else {
}

return prais2.core.click__GT_event_bus(p1__20136_SHARP_,cljs.core.cst$kw$data,cljs.core.cst$kw$animation,"data/animation");
}));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20137))?sablono.interpreter.attributes(attrs20137):null),((cljs.core.map_QMARK_(attrs20137))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-video-camera"}))," two minute video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20137),React.createElement("i",({"className": "fa fa-video-camera"}))," two minute video"], null)));
})(),")"),(function (){var ap = rum.core.react(prais2.core.app);
return sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20142 = selected_row;
var G__20143 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
var G__20144 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dot,null], null), null);
var G__20145 = "Survival rate: The dot indicates the hospital's survival rate";
return (prais2.data.annotated_chart_cell.cljs$core$IFn$_invoke$arity$4 ? prais2.data.annotated_chart_cell.cljs$core$IFn$_invoke$arity$4(G__20142,G__20143,G__20144,G__20145) : prais2.data.annotated_chart_cell.call(null,G__20142,G__20143,G__20144,G__20145));
})(),(function (){var G__20146 = selected_row;
var G__20147 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
var G__20148 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inner,null], null), null);
var G__20149 = "Predicted Range: We expect the hospital's survival rate to be inside this bar\n                                          19 times out of 20";
return (prais2.data.annotated_chart_cell.cljs$core$IFn$_invoke$arity$4 ? prais2.data.annotated_chart_cell.cljs$core$IFn$_invoke$arity$4(G__20146,G__20147,G__20148,G__20149) : prais2.data.annotated_chart_cell.call(null,G__20146,G__20147,G__20148,G__20149));
})(),(function (){var G__20150 = selected_row;
var G__20151 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
var G__20152 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outer,null], null), null);
var G__20153 = "Extended predicted range: We expect the hospital's survival rate to be inside this bar\n                                          998 times out of a 1000";
return (prais2.data.annotated_chart_cell.cljs$core$IFn$_invoke$arity$4 ? prais2.data.annotated_chart_cell.cljs$core$IFn$_invoke$arity$4(G__20150,G__20151,G__20152,G__20153) : prais2.data.annotated_chart_cell.call(null,G__20150,G__20151,G__20152,G__20153));
})()], null)));
})()));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"legend");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20154__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20154 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20155__i = 0, G__20155__a = new Array(arguments.length -  0);
while (G__20155__i < G__20155__a.length) {G__20155__a[G__20155__i] = arguments[G__20155__i + 0]; ++G__20155__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20155__a,0,null);
} 
return G__20154__delegate.call(this,args__14302__auto__);};
G__20154.cljs$lang$maxFixedArity = 0;
G__20154.cljs$lang$applyTo = (function (arglist__20156){
var args__14302__auto__ = cljs.core.seq(arglist__20156);
return G__20154__delegate(args__14302__auto__);
});
G__20154.cljs$core$IFn$_invoke$arity$variadic = G__20154__delegate;
return G__20154;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
prais2.data.open_hospital_modal = (function prais2$data$open_hospital_modal(h_code){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,(function (p1__20157_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20157_SHARP_,cljs.core.cst$kw$selected_DASH_h_DASH_code,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(h_code));
}));

return $("#rowModal").modal();
});
prais2.data.close_hospital_modal = (function prais2$data$close_hospital_modal(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.app,(function (p1__20158_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20158_SHARP_,cljs.core.cst$kw$selected_DASH_h_DASH_code,null);
}));

return $("#rowModal").modal("hide");
});
/**
 * 
 */
prais2.data.hospital_detail = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (h_code,_){
var ap = rum.core.react(prais2.core.app);
if(cljs.core.truth_(h_code)){
var attrs20159 = (function (){var temp__5753__auto__ = (function (){var G__20161 = (function (){var fexpr__20162 = prais2.data.rows_by_code(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(ap));
return (fexpr__20162.cljs$core$IFn$_invoke$arity$0 ? fexpr__20162.cljs$core$IFn$_invoke$arity$0() : fexpr__20162.call(null));
})();
return (h_code.cljs$core$IFn$_invoke$arity$1 ? h_code.cljs$core$IFn$_invoke$arity$1(G__20161) : h_code.call(null,G__20161));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var selected_row = temp__5753__auto__;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.data.hospital_header.cljs$core$IFn$_invoke$arity$1 ? prais2.data.hospital_header.cljs$core$IFn$_invoke$arity$1(selected_row) : prais2.data.hospital_header.call(null,selected_row)),(function (){var G__20163 = prais2.content.detail_slider_label;
var G__20164 = prais2.data.detail_slider_control;
var G__20165 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
return (prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$3 ? prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$3(G__20163,G__20164,G__20165) : prais2.data.slider_widget.call(null,G__20163,G__20164,G__20165));
})(),(function (){var G__20166 = selected_row;
var G__20167 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
return (prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2 ? prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2(G__20166,G__20167) : prais2.data.chart_cell.call(null,G__20166,G__20167));
})(),(prais2.data.hospital_data.cljs$core$IFn$_invoke$arity$1 ? prais2.data.hospital_data.cljs$core$IFn$_invoke$arity$1(h_code) : prais2.data.hospital_data.call(null,h_code)),(prais2.data.interpretation.cljs$core$IFn$_invoke$arity$2 ? prais2.data.interpretation.cljs$core$IFn$_invoke$arity$2(selected_row,prais2.data.close_hospital_modal) : prais2.data.interpretation.call(null,selected_row,prais2.data.close_hospital_modal)),(prais2.data.legend.cljs$core$IFn$_invoke$arity$2 ? prais2.data.legend.cljs$core$IFn$_invoke$arity$2(selected_row,prais2.data.close_hospital_modal) : prais2.data.legend.call(null,selected_row,prais2.data.close_hospital_modal)),(prais2.data.hospital_charities.cljs$core$IFn$_invoke$arity$1 ? prais2.data.hospital_charities.cljs$core$IFn$_invoke$arity$1(h_code) : prais2.data.hospital_charities.call(null,h_code))], null));
} else {
return null;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20159))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"detail"], null),attrs20159], 0))):({"id": "detail"})),((cljs.core.map_QMARK_(attrs20159))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20159)], null)));
} else {
var attrs20160 = (function (){var selected_row = prais2.content.sample_hospital;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prais2.data.sample_hospital_intro_text.cljs$core$IFn$_invoke$arity$0 ? prais2.data.sample_hospital_intro_text.cljs$core$IFn$_invoke$arity$0() : prais2.data.sample_hospital_intro_text.call(null)),(prais2.data.hospital_header.cljs$core$IFn$_invoke$arity$1 ? prais2.data.hospital_header.cljs$core$IFn$_invoke$arity$1(selected_row) : prais2.data.hospital_header.call(null,selected_row)),(function (){var G__20168 = prais2.content.detail_slider_label;
var G__20169 = prais2.data.detail_slider_control;
var G__20170 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
return (prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$3 ? prais2.data.slider_widget.cljs$core$IFn$_invoke$arity$3(G__20168,G__20169,G__20170) : prais2.data.slider_widget.call(null,G__20168,G__20169,G__20170));
})(),(function (){var G__20171 = selected_row;
var G__20172 = cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(ap);
return (prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2 ? prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2(G__20171,G__20172) : prais2.data.chart_cell.call(null,G__20171,G__20172));
})(),(prais2.data.interpretation.cljs$core$IFn$_invoke$arity$2 ? prais2.data.interpretation.cljs$core$IFn$_invoke$arity$2(selected_row,prais2.data.close_hospital_modal) : prais2.data.interpretation.call(null,selected_row,prais2.data.close_hospital_modal))], null));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20160))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"detail"], null),attrs20160], 0))):({"id": "detail"})),((cljs.core.map_QMARK_(attrs20160))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20160)], null)));
}
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-detail");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20173__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20173 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20174__i = 0, G__20174__a = new Array(arguments.length -  0);
while (G__20174__i < G__20174__a.length) {G__20174__a[G__20174__i] = arguments[G__20174__i + 0]; ++G__20174__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20174__a,0,null);
} 
return G__20173__delegate.call(this,args__14302__auto__);};
G__20173.cljs$lang$maxFixedArity = 0;
G__20173.cljs$lang$applyTo = (function (arglist__20175){
var args__14302__auto__ = cljs.core.seq(arglist__20175);
return G__20173__delegate(args__14302__auto__);
});
G__20173.cljs$core$IFn$_invoke$arity$variadic = G__20173__delegate;
return G__20173;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.data.modal = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
var ap = rum.core.react(prais2.core.app);
var selected_h_code = cljs.core.cst$kw$selected_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(ap);
var close_handler = ((function (ap,selected_h_code){
return (function (p1__20176_SHARP_){
return prais2.core.click__GT_event_bus(p1__20176_SHARP_,cljs.core.cst$kw$close_DASH_hospital_DASH_modal,selected_h_code,null);
});})(ap,selected_h_code))
;
return React.createElement("div",({"id": "rowModal", "tabIndex": (-1), "role": "dialog", "aria-labelledby": "myModalLabel", "className": "modal fade"}),React.createElement("div",({"role": "document", "className": "modal-dialog"}),React.createElement("div",({"className": "modal-content"}),React.createElement("div",({"key": (1), "className": "modal-body"}),sablono.interpreter.interpret((prais2.data.hospital_detail.cljs$core$IFn$_invoke$arity$2 ? prais2.data.hospital_detail.cljs$core$IFn$_invoke$arity$2(selected_h_code,prais2.data.close_hospital_modal) : prais2.data.hospital_detail.call(null,selected_h_code,prais2.data.close_hospital_modal)))),React.createElement("div",({"key": (2), "className": "modal-footer"}),React.createElement("button",({"type": "button", "onClick": close_handler, "onTouchStart": close_handler, "className": "btn btn-default"}),"Close")))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"modal");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20177__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20177 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20178__i = 0, G__20178__a = new Array(arguments.length -  0);
while (G__20178__i < G__20178__a.length) {G__20178__a[G__20178__i] = arguments[G__20178__i + 0]; ++G__20178__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20178__a,0,null);
} 
return G__20177__delegate.call(this,args__14302__auto__);};
G__20177.cljs$lang$maxFixedArity = 0;
G__20177.cljs$lang$applyTo = (function (arglist__20179){
var args__14302__auto__ = cljs.core.seq(arglist__20179);
return G__20177__delegate(args__14302__auto__);
});
G__20177.cljs$core$IFn$_invoke$arity$variadic = G__20177__delegate;
return G__20177;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
