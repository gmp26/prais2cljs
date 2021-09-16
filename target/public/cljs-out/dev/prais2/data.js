// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.data');
goog.require('cljs.core');
goog.require('rum.core');
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.content.header_row.call(null)], null),((typeof parseInt(cljs.core.name.call(null,datasource)) === 'number')?datasource.call(null,new cljs.core.Keyword(null,"hosp-data","hosp-data",538848822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app))):prais2.data.add_markers.call(null,datasource.call(null,new cljs.core.Keyword(null,"hosp-data","hosp-data",538848822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app)))))));
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
return prais2.data.index_by.call(null,prais2.data.table_data.call(null,datasource).call(null),(function (p1__21184_SHARP_){
return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(p1__21184_SHARP_));
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
return (function (p1__21185_SHARP_){
return cljs.core.assoc.call(null,p1__21185_SHARP_,new cljs.core.Keyword(null,"sort-ascending","sort-ascending",-1053925574),cljs.core.not.call(null,sort_mode));
});})(ap,sort_column,sort_mode))
);
} else {
return cljs.core.swap_BANG_.call(null,app,((function (ap,sort_column,sort_mode){
return (function (p1__21186_SHARP_){
return cljs.core.assoc.call(null,p1__21186_SHARP_,new cljs.core.Keyword(null,"sort-ascending","sort-ascending",-1053925574),true,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),column_key);
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
prais2.data.bar = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function() {
var G__21187 = null;
var G__21187__5 = (function (slider,hi_val,lo_val,bar_type,fill){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar","div.bar",1411976781),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),fill,new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.bar_width.call(null,slider,(hi_val - lo_val))),"%"].join('')], null)], null)], null);

return React.createElement("div",({"style": ({"backgroundColor": fill, "borderRadius": (0), "width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.bar_width.call(null,slider,(hi_val - lo_val))),"%"].join(''), "textAlign": "right"}), "data-toggle": "tooltip", "data-original-title": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.utils.pc.call(null,lo_val))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.utils.pc.call(null,hi_val)),"<br>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bar_type.call(null,prais2.content.bar_comments))].join(''), "data-delay": (0), "data-html": true, "data-trigger": "hover", "data-placement": "bottom", "className": "bar btn"}));
});
var G__21187__6 = (function (slider,hi_val,lo_val,bar_type,fill,no_tip){
if(cljs.core._EQ_.call(null,fill,"rgba(255,255,255,0)")){
return React.createElement("div",({"style": ({"backgroundColor": fill, "width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.bar_width.call(null,slider,(hi_val - lo_val))),"%"].join('')}), "className": "bar"}));
} else {
return sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,no_tip))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar.btn","div.bar.btn",-2057007034),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),fill,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(0),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.bar_width.call(null,slider,(hi_val - lo_val))),"%"].join(''),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null),new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"tooltip",new cljs.core.Keyword(null,"data-original-title","data-original-title",2016782714),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.utils.pc.call(null,lo_val))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.utils.pc.call(null,hi_val)),"<br>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bar_type.call(null,prais2.content.bar_comments))].join(''),new cljs.core.Keyword(null,"data-delay","data-delay",1974747786),(0),new cljs.core.Keyword(null,"data-html","data-html",956873927),true,new cljs.core.Keyword(null,"data-trigger","data-trigger",56471048),"hover",new cljs.core.Keyword(null,"data-placement","data-placement",166529525),"bottom"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar.btn","div.bar.btn",-2057007034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),fill,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(0),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.bar_width.call(null,slider,(hi_val - lo_val))),"%"].join(''),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null)], null)));
}
});
G__21187 = function(slider,hi_val,lo_val,bar_type,fill,no_tip){
switch(arguments.length){
case 5:
return G__21187__5.call(this,slider,hi_val,lo_val,bar_type,fill);
case 6:
return G__21187__6.call(this,slider,hi_val,lo_val,bar_type,fill,no_tip);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21187.cljs$core$IFn$_invoke$arity$5 = G__21187__5;
G__21187.cljs$core$IFn$_invoke$arity$6 = G__21187__6;
return G__21187;
})()
);
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"bar");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21188__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21188 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21189__i = 0, G__21189__a = new Array(arguments.length -  0);
while (G__21189__i < G__21189__a.length) {G__21189__a[G__21189__i] = arguments[G__21189__i + 0]; ++G__21189__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21189__a,0,null);
} 
return G__21188__delegate.call(this,args__16261__auto__);};
G__21188.cljs$lang$maxFixedArity = 0;
G__21188.cljs$lang$applyTo = (function (arglist__21190){
var args__16261__auto__ = cljs.core.seq(arglist__21190);
return G__21188__delegate(args__16261__auto__);
});
G__21188.cljs$core$IFn$_invoke$arity$variadic = G__21188__delegate;
return G__21188;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.dot = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function() { 
var G__21195__delegate = function (slider,size,value,dotty,p__21191){
var vec__21192 = p__21191;
var relative = cljs.core.nth.call(null,vec__21192,(0),null);
var px_size = prais2.utils.px.call(null,size);
return React.createElement("div",({"data-toggle": "tooltip", "data-placement": "bottom", "data-delay": (0), "data-trigger": "hover", "data-html": true, "data-original-title": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.utils.pc.call(null,value)),"<br>The survival rate"].join(''), "style": ({"backgroundColor": new cljs.core.Keyword(null,"dot","dot",1442709401).cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)))), "display": (cljs.core.truth_(dotty)?"inline-block":"none"), "width": px_size, "height": px_size, "top": prais2.utils.px.call(null,((10) + (((25) - size) / (2)))), "position": (cljs.core.truth_(relative)?"relative":"absolute"), "marginLeft": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((size / (2)))),"px"].join(''), "left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.percent__GT_screen.call(null,slider,value)),"%"].join('')}), "className": "dot btn"}));
};
var G__21195 = function (slider,size,value,dotty,var_args){
var p__21191 = null;
if (arguments.length > 4) {
var G__21196__i = 0, G__21196__a = new Array(arguments.length -  4);
while (G__21196__i < G__21196__a.length) {G__21196__a[G__21196__i] = arguments[G__21196__i + 4]; ++G__21196__i;}
  p__21191 = new cljs.core.IndexedSeq(G__21196__a,0,null);
} 
return G__21195__delegate.call(this,slider,size,value,dotty,p__21191);};
G__21195.cljs$lang$maxFixedArity = 4;
G__21195.cljs$lang$applyTo = (function (arglist__21197){
var slider = cljs.core.first(arglist__21197);
arglist__21197 = cljs.core.next(arglist__21197);
var size = cljs.core.first(arglist__21197);
arglist__21197 = cljs.core.next(arglist__21197);
var value = cljs.core.first(arglist__21197);
arglist__21197 = cljs.core.next(arglist__21197);
var dotty = cljs.core.first(arglist__21197);
var p__21191 = cljs.core.rest(arglist__21197);
return G__21195__delegate(slider,size,value,dotty,p__21191);
});
G__21195.cljs$core$IFn$_invoke$arity$variadic = G__21195__delegate;
return G__21195;
})()
);
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,prais2.core.bs_tooltip], null)),"dot");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21198__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21198 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21199__i = 0, G__21199__a = new Array(arguments.length -  0);
while (G__21199__i < G__21199__a.length) {G__21199__a[G__21199__i] = arguments[G__21199__i + 0]; ++G__21199__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21199__a,0,null);
} 
return G__21198__delegate.call(this,args__16261__auto__);};
G__21198.cljs$lang$maxFixedArity = 0;
G__21198.cljs$lang$applyTo = (function (arglist__21200){
var args__16261__auto__ = cljs.core.seq(arglist__21200);
return G__21198__delegate(args__16261__auto__);
});
G__21198.cljs$core$IFn$_invoke$arity$variadic = G__21198__delegate;
return G__21198;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.dot_no_tip = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function() { 
var G__21205__delegate = function (slider,size,value,dotty,p__21201){
var vec__21202 = p__21201;
var relative = cljs.core.nth.call(null,vec__21202,(0),null);
var px_size = prais2.utils.px.call(null,size);
return React.createElement("div",({"style": ({"backgroundColor": new cljs.core.Keyword(null,"dot","dot",1442709401).cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)))), "display": (cljs.core.truth_(dotty)?"inline-block":"none"), "width": px_size, "height": px_size, "top": prais2.utils.px.call(null,((10) + (((25) - size) / (2)))), "position": (cljs.core.truth_(relative)?"relative":"absolute"), "left": ["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.data.percent__GT_screen.call(null,slider,value)),"% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((size / (2)))),"px)"].join('')}), "className": "dot btn"}));
};
var G__21205 = function (slider,size,value,dotty,var_args){
var p__21201 = null;
if (arguments.length > 4) {
var G__21206__i = 0, G__21206__a = new Array(arguments.length -  4);
while (G__21206__i < G__21206__a.length) {G__21206__a[G__21206__i] = arguments[G__21206__i + 4]; ++G__21206__i;}
  p__21201 = new cljs.core.IndexedSeq(G__21206__a,0,null);
} 
return G__21205__delegate.call(this,slider,size,value,dotty,p__21201);};
G__21205.cljs$lang$maxFixedArity = 4;
G__21205.cljs$lang$applyTo = (function (arglist__21207){
var slider = cljs.core.first(arglist__21207);
arglist__21207 = cljs.core.next(arglist__21207);
var size = cljs.core.first(arglist__21207);
arglist__21207 = cljs.core.next(arglist__21207);
var value = cljs.core.first(arglist__21207);
arglist__21207 = cljs.core.next(arglist__21207);
var dotty = cljs.core.first(arglist__21207);
var p__21201 = cljs.core.rest(arglist__21207);
return G__21205__delegate(slider,size,value,dotty,p__21201);
});
G__21205.cljs$core$IFn$_invoke$arity$variadic = G__21205__delegate;
return G__21205;
})()
);
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive], null)),"dot-no-tip");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21208__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21208 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21209__i = 0, G__21209__a = new Array(arguments.length -  0);
while (G__21209__i < G__21209__a.length) {G__21209__a[G__21209__i] = arguments[G__21209__i + 0]; ++G__21209__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21209__a,0,null);
} 
return G__21208__delegate.call(this,args__16261__auto__);};
G__21208.cljs$lang$maxFixedArity = 0;
G__21208.cljs$lang$applyTo = (function (arglist__21210){
var args__16261__auto__ = cljs.core.seq(arglist__21210);
return G__21208__delegate(args__16261__auto__);
});
G__21208.cljs$core$IFn$_invoke$arity$variadic = G__21208__delegate;
return G__21208;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
prais2.data.extra_right = (40);
prais2.data.dot_size = (function prais2$data$dot_size(slider){
return Math.round(((12) - ((7) * ((1) - slider))));
});
prais2.data.chart_states = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null,new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null,new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null], null), null)], null);
/**
 * 
 */
prais2.data.chart_cell = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (row,slider){
var ap = rum.core.react.call(null,prais2.core.app);
var colours = prais2.data.colour_map.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(ap));
var bars = prais2.data.chart_states.call(null,new cljs.core.Keyword(null,"chart-state","chart-state",-1208336238).cljs$core$IFn$_invoke$arity$1(ap));
var dotty = new cljs.core.Keyword(null,"dot","dot",1442709401).cljs$core$IFn$_invoke$arity$1(bars);
var dotless = cljs.core.disj.call(null,bars,new cljs.core.Keyword(null,"dot","dot",1442709401));
return React.createElement("div",({"className": "chart-cell"}),(function (){var attrs21211 = cljs.core.map_indexed.call(null,prais2.utils.key_with,((cljs.core._EQ_.call(null,dotless,cljs.core.PersistentHashSet.EMPTY))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.dot.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):((cljs.core._EQ_.call(null,dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,(100),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"high","high",2027297808),new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.dot.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):((cljs.core._EQ_.call(null,dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,(100),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"high","high",2027297808),new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.dot.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):((cljs.core._EQ_.call(null,dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null,new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.bar.call(null,slider,(100),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"high","high",2027297808),new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(colours)),prais2.data.dot.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):null)))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21211))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar-chart"], null)], null),attrs21211)):({"className": "bar-chart"})),((cljs.core.map_QMARK_.call(null,attrs21211))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21211)], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.bs_tooltip,rum.core.reactive], null)),"chart-cell");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21212__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21212 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21213__i = 0, G__21213__a = new Array(arguments.length -  0);
while (G__21213__i < G__21213__a.length) {G__21213__a[G__21213__i] = arguments[G__21213__i + 0]; ++G__21213__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21213__a,0,null);
} 
return G__21212__delegate.call(this,args__16261__auto__);};
G__21212.cljs$lang$maxFixedArity = 0;
G__21212.cljs$lang$applyTo = (function (arglist__21214){
var args__16261__auto__ = cljs.core.seq(arglist__21214);
return G__21212__delegate(args__16261__auto__);
});
G__21212.cljs$core$IFn$_invoke$arity$variadic = G__21212__delegate;
return G__21212;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.annotated_chart_cell = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (row,slider,bars,text){
var ap = rum.core.react.call(null,prais2.core.app);
var colours = prais2.data.colour_map.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(ap));
var dotty = new cljs.core.Keyword(null,"dot","dot",1442709401).cljs$core$IFn$_invoke$arity$1(bars);
var dotless = cljs.core.disj.call(null,bars,new cljs.core.Keyword(null,"dot","dot",1442709401));
return React.createElement("div",null,React.createElement("div",({"key": (1), "className": "annotation"}),sablono.interpreter.interpret.call(null,text)),React.createElement("div",({"key": (2), "className": "chart-cell"}),(function (){var attrs21215 = cljs.core.map_indexed.call(null,prais2.utils.key_with,((cljs.core._EQ_.call(null,dotless,cljs.core.PersistentHashSet.EMPTY))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),"#ffffff",true),prais2.data.dot_no_tip.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):((cljs.core._EQ_.call(null,dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),"#ffffff",true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#ffffff",true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#ffffff",true),prais2.data.bar.call(null,slider,(100),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"high","high",2027297808),"#ffffff",true),prais2.data.dot_no_tip.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):((cljs.core._EQ_.call(null,dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),"#ffffff",true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,(100),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"high","high",2027297808),"#ffffff",true),prais2.data.dot_no_tip.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty)], null):((cljs.core._EQ_.call(null,dotless,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null,new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),(prais2.data.min_outer_low.call(null) * slider),new cljs.core.Keyword(null,"low","low",-1601362409),"#ffffff",true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(colours),true),prais2.data.bar.call(null,slider,(100),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"high","high",2027297808),"#ffffff",true),prais2.data.dot_no_tip.call(null,slider,prais2.data.dot_size.call(null,slider),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row),dotty,true)], null):null)))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21215))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar-chart"], null)], null),attrs21215)):({"className": "bar-chart"})),((cljs.core.map_QMARK_.call(null,attrs21215))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21215)], null)));
})()));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.bs_tooltip,rum.core.reactive], null)),"annotated-chart-cell");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21216__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21216 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21217__i = 0, G__21217__a = new Array(arguments.length -  0);
while (G__21217__i < G__21217__a.length) {G__21217__a[G__21217__i] = arguments[G__21217__i + 0]; ++G__21217__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21217__a,0,null);
} 
return G__21216__delegate.call(this,args__16261__auto__);};
G__21216.cljs$lang$maxFixedArity = 0;
G__21216.cljs$lang$applyTo = (function (arglist__21218){
var args__16261__auto__ = cljs.core.seq(arglist__21218);
return G__21216__delegate(args__16261__auto__);
});
G__21216.cljs$core$IFn$_invoke$arity$variadic = G__21216__delegate;
return G__21216;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.tick = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (baseline,value,tick_height){
var percent = ((100) * ((value - baseline) / ((100) - baseline)));
return sablono.interpreter.interpret.call(null,(((percent >= (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tick",".tick",518219022),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),prais2.utils.pc.call(null,percent),new cljs.core.Keyword(null,"height","height",1025178622),prais2.utils.px.call(null,tick_height),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),["1px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core._EQ_.call(null,percent,(100))) || (cljs.core._EQ_.call(null,value,(0)))))?"solid ":"dashed ")),"black"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tick-label","span.tick-label",-1338247064),prais2.utils.pc.call(null,value)], null)], null):null));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"tick");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21219__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21219 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21220__i = 0, G__21220__a = new Array(arguments.length -  0);
while (G__21220__i < G__21220__a.length) {G__21220__a[G__21220__i] = arguments[G__21220__i + 0]; ++G__21220__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21220__a,0,null);
} 
return G__21219__delegate.call(this,args__16261__auto__);};
G__21219.cljs$lang$maxFixedArity = 0;
G__21219.cljs$lang$applyTo = (function (arglist__21221){
var args__16261__auto__ = cljs.core.seq(arglist__21221);
return G__21219__delegate(args__16261__auto__);
});
G__21219.cljs$core$IFn$_invoke$arity$variadic = G__21219__delegate;
return G__21219;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.ticks = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (slider_axis_value,tick_count,tick_height){
var baseline = (prais2.data.min_outer_low.call(null) * slider_axis_value);
var raw_interval = (((100) - baseline) / (tick_count + (1)));
var interval = (((raw_interval > (10)))?(20):(((raw_interval > (5)))?(10):(((raw_interval > (2)))?(5):(2)
)));
var tick_values = cljs.core.range.call(null,(100),(baseline - (1)),(- interval));
return React.createElement("div",null,cljs.core.into_array.call(null,(function (){var iter__4311__auto__ = ((function (baseline,raw_interval,interval,tick_values){
return (function prais2$data$iter__21222(s__21223){
return (new cljs.core.LazySeq(null,((function (baseline,raw_interval,interval,tick_values){
return (function (){
var s__21223__$1 = s__21223;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21223__$1);
if(temp__5753__auto__){
var s__21223__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21223__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__21223__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__21225 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__21224 = (0);
while(true){
if((i__21224 < size__4310__auto__)){
var value = cljs.core._nth.call(null,c__4309__auto__,i__21224);
cljs.core.chunk_append.call(null,b__21225,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,prais2.data.tick.call(null,baseline,value,tick_height),value)));

var G__21226 = (i__21224 + (1));
i__21224 = G__21226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21225),prais2$data$iter__21222.call(null,cljs.core.chunk_rest.call(null,s__21223__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21225),null);
}
} else {
var value = cljs.core.first.call(null,s__21223__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,prais2.data.tick.call(null,baseline,value,tick_height),value)),prais2$data$iter__21222.call(null,cljs.core.rest.call(null,s__21223__$2)));
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
return iter__4311__auto__.call(null,tick_values);
})()));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"ticks");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21227__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21227 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21228__i = 0, G__21228__a = new Array(arguments.length -  0);
while (G__21228__i < G__21228__a.length) {G__21228__a[G__21228__i] = arguments[G__21228__i + 0]; ++G__21228__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21228__a,0,null);
} 
return G__21227__delegate.call(this,args__16261__auto__);};
G__21227.cljs$lang$maxFixedArity = 0;
G__21227.cljs$lang$applyTo = (function (arglist__21229){
var args__16261__auto__ = cljs.core.seq(arglist__21229);
return G__21227__delegate(args__16261__auto__);
});
G__21227.cljs$core$IFn$_invoke$arity$variadic = G__21227__delegate;
return G__21227;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.slider_labels = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",({"className": "slider-label"}),React.createElement("div",({"key": "left", "className": "pull-left"}),React.createElement("i",({"key": "full", "className": "fa fa-long-arrow-left"}))," full view"),React.createElement("div",({"key": "right", "className": "pull-right"}),"full detail ",React.createElement("i",({"key": "detail", "className": "fa fa-long-arrow-right"}))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"slider-labels");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21232__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21232 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21233__i = 0, G__21233__a = new Array(arguments.length -  0);
while (G__21233__i < G__21233__a.length) {G__21233__a[G__21233__i] = arguments[G__21233__i + 0]; ++G__21233__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21233__a,0,null);
} 
return G__21232__delegate.call(this,args__16261__auto__);};
G__21232.cljs$lang$maxFixedArity = 0;
G__21232.cljs$lang$applyTo = (function (arglist__21234){
var args__16261__auto__ = cljs.core.seq(arglist__21234);
return G__21232__delegate(args__16261__auto__);
});
G__21232.cljs$core$IFn$_invoke$arity$variadic = G__21232__delegate;
return G__21232;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
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
prais2.data.slider_control = (function (){var render_mixin__16258__auto__ = rum.core.render_state__GT_mixin.call(null,(function (state,value){
var s = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#slider.slider","#slider.slider",1939704473),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)], null);
var slider = new cljs.core.Keyword("prais2.data","slider","prais2.data/slider",-1252686318).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
slider.setValue(value);
} else {
}

return sablono.interpreter.interpret.call(null,s);
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bs_slider.call(null,"#slider",new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558)),rum.core.static$], null)),"slider-control");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21235__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21235 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21236__i = 0, G__21236__a = new Array(arguments.length -  0);
while (G__21236__i < G__21236__a.length) {G__21236__a[G__21236__i] = arguments[G__21236__i + 0]; ++G__21236__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21236__a,0,null);
} 
return G__21235__delegate.call(this,args__16261__auto__);};
G__21235.cljs$lang$maxFixedArity = 0;
G__21235.cljs$lang$applyTo = (function (arglist__21237){
var args__16261__auto__ = cljs.core.seq(arglist__21237);
return G__21235__delegate(args__16261__auto__);
});
G__21235.cljs$core$IFn$_invoke$arity$variadic = G__21235__delegate;
return G__21235;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.detail_slider_control = (function (){var render_mixin__16258__auto__ = rum.core.render_state__GT_mixin.call(null,(function (state,value){
var s = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#detail-slider.slider","#detail-slider.slider",1434648187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)], null);
var slider = new cljs.core.Keyword("prais2.data","slider","prais2.data/slider",-1252686318).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
slider.setValue(value);
} else {
}

return sablono.interpreter.interpret.call(null,s);
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bs_slider.call(null,"#detail-slider",new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254)),rum.core.static$], null)),"detail-slider-control");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21238__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21238 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21239__i = 0, G__21239__a = new Array(arguments.length -  0);
while (G__21239__i < G__21239__a.length) {G__21239__a[G__21239__i] = arguments[G__21239__i + 0]; ++G__21239__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21239__a,0,null);
} 
return G__21238__delegate.call(this,args__16261__auto__);};
G__21238.cljs$lang$maxFixedArity = 0;
G__21238.cljs$lang$applyTo = (function (arglist__21240){
var args__16261__auto__ = cljs.core.seq(arglist__21240);
return G__21238__delegate(args__16261__auto__);
});
G__21238.cljs$core$IFn$_invoke$arity$variadic = G__21238__delegate;
return G__21238;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.map_detail_slider_control = (function (){var render_mixin__16258__auto__ = rum.core.render_state__GT_mixin.call(null,(function (state,value){
var s = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#map-detail-slider.slider","#map-detail-slider.slider",732387487),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)], null);
var slider = new cljs.core.Keyword("prais2.data","slider","prais2.data/slider",-1252686318).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(slider)){
slider.setValue(value);
} else {
}

return sablono.interpreter.interpret.call(null,s);
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.bs_slider.call(null,"#map-detail-slider",new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254)),rum.core.static$], null)),"map-detail-slider-control");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21241__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21241 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21242__i = 0, G__21242__a = new Array(arguments.length -  0);
while (G__21242__i < G__21242__a.length) {G__21242__a[G__21242__i] = arguments[G__21242__i + 0]; ++G__21242__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21242__a,0,null);
} 
return G__21241__delegate.call(this,args__16261__auto__);};
G__21241.cljs$lang$maxFixedArity = 0;
G__21241.cljs$lang$applyTo = (function (arglist__21243){
var args__16261__auto__ = cljs.core.seq(arglist__21243);
return G__21241__delegate(args__16261__auto__);
});
G__21241.cljs$core$IFn$_invoke$arity$variadic = G__21241__delegate;
return G__21241;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.axis_container = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function() {
var G__21245 = null;
var G__21245__1 = (function (slider_axis_value){
return sablono.interpreter.interpret.call(null,prais2.data.axis_container.call(null,slider_axis_value,(69)));
});
var G__21245__2 = (function (slider_axis_value,tick_height){
var attrs21244 = rum.core.with_key.call(null,prais2.data.ticks.call(null,slider_axis_value,(3),tick_height),new cljs.core.Keyword(null,"ticks","ticks",-406190313));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21244))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["axis-container"], null)], null),attrs21244)):({"className": "axis-container"})),((cljs.core.map_QMARK_.call(null,attrs21244))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21244)], null)));
});
G__21245 = function(slider_axis_value,tick_height){
switch(arguments.length){
case 1:
return G__21245__1.call(this,slider_axis_value);
case 2:
return G__21245__2.call(this,slider_axis_value,tick_height);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21245.cljs$core$IFn$_invoke$arity$1 = G__21245__1;
G__21245.cljs$core$IFn$_invoke$arity$2 = G__21245__2;
return G__21245;
})()
);
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"axis-container");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21246__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21246 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21247__i = 0, G__21247__a = new Array(arguments.length -  0);
while (G__21247__i < G__21247__a.length) {G__21247__a[G__21247__i] = arguments[G__21247__i + 0]; ++G__21247__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21247__a,0,null);
} 
return G__21246__delegate.call(this,args__16261__auto__);};
G__21246.cljs$lang$maxFixedArity = 0;
G__21246.cljs$lang$applyTo = (function (arglist__21248){
var args__16261__auto__ = cljs.core.seq(arglist__21248);
return G__21246__delegate(args__16261__auto__);
});
G__21246.cljs$core$IFn$_invoke$arity$variadic = G__21246__delegate;
return G__21246;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.slider_title = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (headers){
return React.createElement("p",({"key": "p"}),((typeof headers === 'string')?sablono.interpreter.interpret.call(null,headers):sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"observed","observed",-2010194632).cljs$core$IFn$_invoke$arity$1(headers)))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"slider-title");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21249__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21249 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21250__i = 0, G__21250__a = new Array(arguments.length -  0);
while (G__21250__i < G__21250__a.length) {G__21250__a[G__21250__i] = arguments[G__21250__i + 0]; ++G__21250__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21250__a,0,null);
} 
return G__21249__delegate.call(this,args__16261__auto__);};
G__21249.cljs$lang$maxFixedArity = 0;
G__21249.cljs$lang$applyTo = (function (arglist__21251){
var args__16261__auto__ = cljs.core.seq(arglist__21251);
return G__21249__delegate(args__16261__auto__);
});
G__21249.cljs$core$IFn$_invoke$arity$variadic = G__21249__delegate;
return G__21249;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.table_header = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (background,ap,header,column_key){
return React.createElement("th",({"onClick": (function (p1__21252_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(header))){
return prais2.core.click__GT_event_bus.call(null,p1__21252_SHARP_,new cljs.core.Keyword(null,"sort-toggle","sort-toggle",-446677605),column_key,null);
} else {
return null;
}
}), "onTouchStart": (function (p1__21253_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(header))){
return prais2.core.click__GT_event_bus.call(null,p1__21253_SHARP_,new cljs.core.Keyword(null,"sort-toggle","sort-toggle",-446677605),column_key,null);
} else {
return null;
}
}), "style": ({"maxWidth": prais2.utils.px.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(header)), "whiteSpace": "normal !important", "verticalAlign": "top", "cursor": (cljs.core.truth_(new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(header))?"pointer":"auto"), "backgroundColor": background, "color": "#ffffff !important"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(header))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"class","class",-2030961996),["right fa fa-sort",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303).cljs$core$IFn$_invoke$arity$1(ap)))?(cljs.core.truth_(new cljs.core.Keyword(null,"sort-ascending","sort-ascending",-1053925574).cljs$core$IFn$_invoke$arity$1(ap))?"-asc":"-desc"):""))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"zoom","zoom",-1827487038),1.5,new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null)], null)], null):null)),React.createElement("span",({"key": "text", "style": ({"backgroundColor": "none !important", "color": "white !important"})}),sablono.interpreter.interpret.call(null,((cljs.core.not_EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?(function (){var info_handler = (function (p1__21254_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__21254_SHARP_,new cljs.core.Keyword(null,"info-clicked","info-clicked",-495300672),column_key,null);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary.btn-xs.info.pull-right","a.btn.btn-primary.btn-xs.info.pull-right",-1112150934),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"data-html","data-html",956873927),new cljs.core.Keyword(null,"data-trigger","data-trigger",56471048),new cljs.core.Keyword(null,"data-content","data-content",-508111796),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"data-placement","data-placement",166529525),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687)],["button",(-1),"true","focus",new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(header),info_handler,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(header),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),"bottom",info_handler,"popover"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-info","i.fa.fa-info",-1798594000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"i","i",-1386841315)], null)], null)], null);
})():null)),React.createElement("br",({"key": "br"})),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(header))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,prais2.core.bs_popover], null)),"table-header");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21257__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21257 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21258__i = 0, G__21258__a = new Array(arguments.length -  0);
while (G__21258__i < G__21258__a.length) {G__21258__a[G__21258__i] = arguments[G__21258__i + 0]; ++G__21258__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21258__a,0,null);
} 
return G__21257__delegate.call(this,args__16261__auto__);};
G__21257.cljs$lang$maxFixedArity = 0;
G__21257.cljs$lang$applyTo = (function (arglist__21259){
var args__16261__auto__ = cljs.core.seq(arglist__21259);
return G__21257__delegate(args__16261__auto__);
});
G__21257.cljs$core$IFn$_invoke$arity$variadic = G__21257__delegate;
return G__21257;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.slider_widget = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function() {
var G__21261 = null;
var G__21261__3 = (function (headers,control,slider_axis_value){
return sablono.interpreter.interpret.call(null,prais2.data.slider_widget.call(null,headers,control,slider_axis_value,(69)));
});
var G__21261__4 = (function (headers,control,slider_axis_value,tick_height){
var attrs21260 = cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.slider_title.call(null,headers),prais2.data.slider_labels.call(null),control.call(null,slider_axis_value,(0),(1),0.02),prais2.data.axis_container.call(null,slider_axis_value,tick_height)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21260))?sablono.interpreter.attributes.call(null,attrs21260):null),((cljs.core.map_QMARK_.call(null,attrs21260))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21260)], null)));
});
G__21261 = function(headers,control,slider_axis_value,tick_height){
switch(arguments.length){
case 3:
return G__21261__3.call(this,headers,control,slider_axis_value);
case 4:
return G__21261__4.call(this,headers,control,slider_axis_value,tick_height);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21261.cljs$core$IFn$_invoke$arity$3 = G__21261__3;
G__21261.cljs$core$IFn$_invoke$arity$4 = G__21261__4;
return G__21261;
})()
);
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"slider-widget");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21262__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21262 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21263__i = 0, G__21263__a = new Array(arguments.length -  0);
while (G__21263__i < G__21263__a.length) {G__21263__a[G__21263__i] = arguments[G__21263__i + 0]; ++G__21263__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21263__a,0,null);
} 
return G__21262__delegate.call(this,args__16261__auto__);};
G__21262.cljs$lang$maxFixedArity = 0;
G__21262.cljs$lang$applyTo = (function (arglist__21264){
var args__16261__auto__ = cljs.core.seq(arglist__21264);
return G__21262__delegate(args__16261__auto__);
});
G__21262.cljs$core$IFn$_invoke$arity$variadic = G__21262__delegate;
return G__21262;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.table_head = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (ap,headers,column_keys,slider_axis_value){
return React.createElement("thead",null,React.createElement("tr",null,cljs.core.into_array.call(null,(function (){var iter__4311__auto__ = (function prais2$data$iter__21265(s__21266){
return (new cljs.core.LazySeq(null,(function (){
var s__21266__$1 = s__21266;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21266__$1);
if(temp__5753__auto__){
var s__21266__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21266__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__21266__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__21268 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__21267 = (0);
while(true){
if((i__21267 < size__4310__auto__)){
var column_key = cljs.core._nth.call(null,c__4309__auto__,i__21267);
if(cljs.core.truth_(new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(column_key.call(null,headers)))){
cljs.core.chunk_append.call(null,b__21268,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,prais2.data.table_header.call(null,new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(ap))),ap,column_key.call(null,headers),column_key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_key,"head"], null))));

var G__21269 = (i__21267 + (1));
i__21267 = G__21269;
continue;
} else {
var G__21270 = (i__21267 + (1));
i__21267 = G__21270;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21268),prais2$data$iter__21265.call(null,cljs.core.chunk_rest.call(null,s__21266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21268),null);
}
} else {
var column_key = cljs.core.first.call(null,s__21266__$2);
if(cljs.core.truth_(new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(column_key.call(null,headers)))){
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,prais2.data.table_header.call(null,new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(prais2.data.colour_map.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(ap))),ap,column_key.call(null,headers),column_key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_key,"head"], null))),prais2$data$iter__21265.call(null,cljs.core.rest.call(null,s__21266__$2)));
} else {
var G__21271 = cljs.core.rest.call(null,s__21266__$2);
s__21266__$1 = G__21271;
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
return iter__4311__auto__.call(null,column_keys);
})()),React.createElement("th",({"key": "last"}),React.createElement("div",({"style": ({"height": prais2.utils.px.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"observed","observed",-2010194632).cljs$core$IFn$_invoke$arity$1(headers)))}), "className": "slider-container"}),sablono.interpreter.interpret.call(null,prais2.data.slider_widget.call(null,headers,prais2.data.slider_control,slider_axis_value,(748)))))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"table-head");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21272__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21272 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21273__i = 0, G__21273__a = new Array(arguments.length -  0);
while (G__21273__i < G__21273__a.length) {G__21273__a[G__21273__i] = arguments[G__21273__i + 0]; ++G__21273__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21273__a,0,null);
} 
return G__21272__delegate.call(this,args__16261__auto__);};
G__21272.cljs$lang$maxFixedArity = 0;
G__21272.cljs$lang$applyTo = (function (arglist__21274){
var args__16261__auto__ = cljs.core.seq(arglist__21274);
return G__21272__delegate(args__16261__auto__);
});
G__21272.cljs$core$IFn$_invoke$arity$variadic = G__21272__delegate;
return G__21272;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.table1_core = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (ap,data,sort_key,sort_direction,headers){
return React.createElement("table",({"cellSpacing": "0", "className": "table table-bordered"}),sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,prais2.data.table_head.call(null,ap,headers,cljs.core.keys.call(null,headers),new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558).cljs$core$IFn$_invoke$arity$1(ap)),new cljs.core.Keyword(null,"thead","thead",-291875296))),React.createElement("tbody",({"key": "tbody"}),cljs.core.into_array.call(null,(function (){var iter__4311__auto__ = (function prais2$data$iter__21276(s__21277){
return (new cljs.core.LazySeq(null,(function (){
var s__21277__$1 = s__21277;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21277__$1);
if(temp__5753__auto__){
var s__21277__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21277__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__21277__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__21279 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__21278 = (0);
while(true){
if((i__21278 < size__4310__auto__)){
var row = cljs.core._nth.call(null,c__4309__auto__,i__21278);
var h_code = new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(row);
var slider_axis_value = new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558).cljs$core$IFn$_invoke$arity$1(ap);
cljs.core.chunk_append.call(null,b__21279,React.createElement("tr",({"key": h_code, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,cljs.core.keyword.call(null,h_code),new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046).cljs$core$IFn$_invoke$arity$1(ap)))?"info":"")], null))}),cljs.core.into_array.call(null,(function (){var iter__4311__auto__ = ((function (i__21278,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__21279,s__21277__$2,temp__5753__auto__){
return (function prais2$data$iter__21276_$_iter__21281(s__21282){
return (new cljs.core.LazySeq(null,((function (i__21278,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__21279,s__21277__$2,temp__5753__auto__){
return (function (){
var s__21282__$1 = s__21282;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__21282__$1);
if(temp__5753__auto____$1){
var s__21282__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21282__$2)){
var c__4309__auto____$1 = cljs.core.chunk_first.call(null,s__21282__$2);
var size__4310__auto____$1 = cljs.core.count.call(null,c__4309__auto____$1);
var b__21284 = cljs.core.chunk_buffer.call(null,size__4310__auto____$1);
if((function (){var i__21283 = (0);
while(true){
if((i__21283 < size__4310__auto____$1)){
var column_key = cljs.core._nth.call(null,c__4309__auto____$1,i__21283);
var column_header = column_key.call(null,headers);
var info_handler = ((function (i__21283,s__21282__$1,i__21278,column_header,column_key,c__4309__auto____$1,size__4310__auto____$1,b__21284,s__21282__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__21279,s__21277__$2,temp__5753__auto__){
return (function (p1__21275_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__21275_SHARP_,new cljs.core.Keyword(null,"open-hospital-modal","open-hospital-modal",14379912),h_code,null);
});})(i__21283,s__21282__$1,i__21278,column_header,column_key,c__4309__auto____$1,size__4310__auto____$1,b__21284,s__21282__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__21279,s__21277__$2,temp__5753__auto__))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(column_header))){
cljs.core.chunk_append.call(null,b__21284,(function (){var attrs21280 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"h-name":""),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),prais2.utils.px.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(column_header)),new cljs.core.Keyword(null,"white-space","white-space",-707351930),"normal",new cljs.core.Keyword(null,"height","height",1025178622),prais2.utils.px.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(column_header))], null))], null),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),info_handler,new cljs.core.Keyword(null,"on-click","on-click",1632826543),info_handler], null):null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs21280))?sablono.interpreter.attributes.call(null,attrs21280):null),((cljs.core.map_QMARK_.call(null,attrs21280))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_key.call(null,row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21280),React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_key.call(null,row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null)));
})());

var G__21289 = (i__21283 + (1));
i__21283 = G__21289;
continue;
} else {
var G__21290 = (i__21283 + (1));
i__21283 = G__21290;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21284),prais2$data$iter__21276_$_iter__21281.call(null,cljs.core.chunk_rest.call(null,s__21282__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21284),null);
}
} else {
var column_key = cljs.core.first.call(null,s__21282__$2);
var column_header = column_key.call(null,headers);
var info_handler = ((function (s__21282__$1,i__21278,column_header,column_key,s__21282__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__21279,s__21277__$2,temp__5753__auto__){
return (function (p1__21275_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__21275_SHARP_,new cljs.core.Keyword(null,"open-hospital-modal","open-hospital-modal",14379912),h_code,null);
});})(s__21282__$1,i__21278,column_header,column_key,s__21282__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__21279,s__21277__$2,temp__5753__auto__))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(column_header))){
return cljs.core.cons.call(null,(function (){var attrs21280 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"h-name":""),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),prais2.utils.px.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(column_header)),new cljs.core.Keyword(null,"white-space","white-space",-707351930),"normal",new cljs.core.Keyword(null,"height","height",1025178622),prais2.utils.px.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(column_header))], null))], null),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),info_handler,new cljs.core.Keyword(null,"on-click","on-click",1632826543),info_handler], null):null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs21280))?sablono.interpreter.attributes.call(null,attrs21280):null),((cljs.core.map_QMARK_.call(null,attrs21280))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_key.call(null,row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21280),React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_key.call(null,row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null)));
})(),prais2$data$iter__21276_$_iter__21281.call(null,cljs.core.rest.call(null,s__21282__$2)));
} else {
var G__21291 = cljs.core.rest.call(null,s__21282__$2);
s__21282__$1 = G__21291;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__21278,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__21279,s__21277__$2,temp__5753__auto__))
,null,null));
});})(i__21278,h_code,slider_axis_value,row,c__4309__auto__,size__4310__auto__,b__21279,s__21277__$2,temp__5753__auto__))
;
return iter__4311__auto__.call(null,cljs.core.keys.call(null,headers));
})()),React.createElement("td",({"key": [h_code,"bars"], "style": ({"backgroundColor": "#f0f0f0"})}),sablono.interpreter.interpret.call(null,prais2.data.chart_cell.call(null,row,slider_axis_value)))));

var G__21292 = (i__21278 + (1));
i__21278 = G__21292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21279),prais2$data$iter__21276.call(null,cljs.core.chunk_rest.call(null,s__21277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21279),null);
}
} else {
var row = cljs.core.first.call(null,s__21277__$2);
var h_code = new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(row);
var slider_axis_value = new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558).cljs$core$IFn$_invoke$arity$1(ap);
return cljs.core.cons.call(null,React.createElement("tr",({"key": h_code, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,cljs.core.keyword.call(null,h_code),new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046).cljs$core$IFn$_invoke$arity$1(ap)))?"info":"")], null))}),cljs.core.into_array.call(null,(function (){var iter__4311__auto__ = ((function (h_code,slider_axis_value,row,s__21277__$2,temp__5753__auto__){
return (function prais2$data$iter__21276_$_iter__21285(s__21286){
return (new cljs.core.LazySeq(null,((function (h_code,slider_axis_value,row,s__21277__$2,temp__5753__auto__){
return (function (){
var s__21286__$1 = s__21286;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__21286__$1);
if(temp__5753__auto____$1){
var s__21286__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21286__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__21286__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__21288 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__21287 = (0);
while(true){
if((i__21287 < size__4310__auto__)){
var column_key = cljs.core._nth.call(null,c__4309__auto__,i__21287);
var column_header = column_key.call(null,headers);
var info_handler = ((function (i__21287,s__21286__$1,column_header,column_key,c__4309__auto__,size__4310__auto__,b__21288,s__21286__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,s__21277__$2,temp__5753__auto__){
return (function (p1__21275_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__21275_SHARP_,new cljs.core.Keyword(null,"open-hospital-modal","open-hospital-modal",14379912),h_code,null);
});})(i__21287,s__21286__$1,column_header,column_key,c__4309__auto__,size__4310__auto__,b__21288,s__21286__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,s__21277__$2,temp__5753__auto__))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(column_header))){
cljs.core.chunk_append.call(null,b__21288,(function (){var attrs21280 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"h-name":""),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),prais2.utils.px.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(column_header)),new cljs.core.Keyword(null,"white-space","white-space",-707351930),"normal",new cljs.core.Keyword(null,"height","height",1025178622),prais2.utils.px.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(column_header))], null))], null),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),info_handler,new cljs.core.Keyword(null,"on-click","on-click",1632826543),info_handler], null):null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs21280))?sablono.interpreter.attributes.call(null,attrs21280):null),((cljs.core.map_QMARK_.call(null,attrs21280))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_key.call(null,row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21280),React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_key.call(null,row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null)));
})());

var G__21293 = (i__21287 + (1));
i__21287 = G__21293;
continue;
} else {
var G__21294 = (i__21287 + (1));
i__21287 = G__21294;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21288),prais2$data$iter__21276_$_iter__21285.call(null,cljs.core.chunk_rest.call(null,s__21286__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21288),null);
}
} else {
var column_key = cljs.core.first.call(null,s__21286__$2);
var column_header = column_key.call(null,headers);
var info_handler = ((function (s__21286__$1,column_header,column_key,s__21286__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,s__21277__$2,temp__5753__auto__){
return (function (p1__21275_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__21275_SHARP_,new cljs.core.Keyword(null,"open-hospital-modal","open-hospital-modal",14379912),h_code,null);
});})(s__21286__$1,column_header,column_key,s__21286__$2,temp__5753__auto____$1,h_code,slider_axis_value,row,s__21277__$2,temp__5753__auto__))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(column_header))){
return cljs.core.cons.call(null,(function (){var attrs21280 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_code,column_key], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"h-name":""),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),prais2.utils.px.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(column_header)),new cljs.core.Keyword(null,"white-space","white-space",-707351930),"normal",new cljs.core.Keyword(null,"height","height",1025178622),prais2.utils.px.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(column_header))], null))], null),((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),info_handler,new cljs.core.Keyword(null,"on-click","on-click",1632826543),info_handler], null):null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs21280))?sablono.interpreter.attributes.call(null,attrs21280):null),((cljs.core.map_QMARK_.call(null,attrs21280))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_key.call(null,row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21280),React.createElement("div",({"style": ({"display": "inline-block", "cursor": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"pointer":"auto"), "width": ((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?"calc(100% - 50px)":"auto")})}),sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_key.call(null,row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)))?(function (){

return "";
})()
:null))].join(''))),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,column_key,new cljs.core.Keyword(null,"h-name","h-name",1046194554)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",h_code," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null):null))], null)));
})(),prais2$data$iter__21276_$_iter__21285.call(null,cljs.core.rest.call(null,s__21286__$2)));
} else {
var G__21295 = cljs.core.rest.call(null,s__21286__$2);
s__21286__$1 = G__21295;
continue;
}
}
} else {
return null;
}
break;
}
});})(h_code,slider_axis_value,row,s__21277__$2,temp__5753__auto__))
,null,null));
});})(h_code,slider_axis_value,row,s__21277__$2,temp__5753__auto__))
;
return iter__4311__auto__.call(null,cljs.core.keys.call(null,headers));
})()),React.createElement("td",({"key": [h_code,"bars"], "style": ({"backgroundColor": "#f0f0f0"})}),sablono.interpreter.interpret.call(null,prais2.data.chart_cell.call(null,row,slider_axis_value)))),prais2$data$iter__21276.call(null,cljs.core.rest.call(null,s__21277__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__.call(null,(cljs.core.truth_(sort_key)?(function (){var sorted = cljs.core.sort_by.call(null,sort_key,cljs.core.rest.call(null,data));
if(cljs.core.truth_(sort_direction)){
return sorted;
} else {
return cljs.core.reverse.call(null,sorted);
}
})():cljs.core.rest.call(null,data)));
})())));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"table1-core");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21296__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21296 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21297__i = 0, G__21297__a = new Array(arguments.length -  0);
while (G__21297__i < G__21297__a.length) {G__21297__a[G__21297__i] = arguments[G__21297__i + 0]; ++G__21297__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21297__a,0,null);
} 
return G__21296__delegate.call(this,args__16261__auto__);};
G__21296.cljs$lang$maxFixedArity = 0;
G__21296.cljs$lang$applyTo = (function (arglist__21298){
var args__16261__auto__ = cljs.core.seq(arglist__21298);
return G__21296__delegate(args__16261__auto__);
});
G__21296.cljs$core$IFn$_invoke$arity$variadic = G__21296__delegate;
return G__21296;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.table1 = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (app,data){
return React.createElement("div",({"className": "table-container"}),(function (){var attrs21299 = prais2.data.table1_core.call(null,rum.core.react.call(null,app),data,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app)),new cljs.core.Keyword(null,"sort-ascending","sort-ascending",-1053925574).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app)),cljs.core.first.call(null,data));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21299))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data-table"], null)], null),attrs21299)):({"className": "data-table"})),((cljs.core.map_QMARK_.call(null,attrs21299))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21299)], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"table1");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21300__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21300 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21301__i = 0, G__21301__a = new Array(arguments.length -  0);
while (G__21301__i < G__21301__a.length) {G__21301__a[G__21301__i] = arguments[G__21301__i + 0]; ++G__21301__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21301__a,0,null);
} 
return G__21300__delegate.call(this,args__16261__auto__);};
G__21300.cljs$lang$maxFixedArity = 0;
G__21300.cljs$lang$applyTo = (function (arglist__21302){
var args__16261__auto__ = cljs.core.seq(arglist__21302);
return G__21300__delegate(args__16261__auto__);
});
G__21300.cljs$core$IFn$_invoke$arity$variadic = G__21300__delegate;
return G__21300;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
prais2.data.year_range = (function prais2$data$year_range(year,m1,m2){
var y1 = (year - (3));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y1","y1",589123466),y1,new cljs.core.Keyword(null,"mrange","mrange",607099414),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1)," \u2014 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m2)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join(''),new cljs.core.Keyword(null,"option","option",65132272),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1)," \u2014 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('')], null);
});
prais2.data.end_year = (function prais2$data$end_year(){
return parseInt(cljs.core.name.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app))));
});
/**
 * 
 */
prais2.data.key_option = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (year){
return sablono.interpreter.create_element.call(null,"option",({"value": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('')}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"option","option",65132272).cljs$core$IFn$_invoke$arity$1(prais2.data.year_range.call(null,year,"April","March"))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"key-option");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21303__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21303 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21304__i = 0, G__21304__a = new Array(arguments.length -  0);
while (G__21304__i < G__21304__a.length) {G__21304__a[G__21304__i] = arguments[G__21304__i + 0]; ++G__21304__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21304__a,0,null);
} 
return G__21303__delegate.call(this,args__16261__auto__);};
G__21303.cljs$lang$maxFixedArity = 0;
G__21303.cljs$lang$applyTo = (function (arglist__21305){
var args__16261__auto__ = cljs.core.seq(arglist__21305);
return G__21303__delegate(args__16261__auto__);
});
G__21303.cljs$core$IFn$_invoke$arity$variadic = G__21303__delegate;
return G__21303;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.datasource_dropdown = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (event_bus){
return React.createElement("div",({"className": "form-group"}),React.createElement("label-for",({"htmlFor": "data-selector"}),"Change reporting period"),React.createElement("select",({"id": "data-selector", "value": cljs.core.name.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app))), "onChange": (function (p1__21306_SHARP_){
return cljs.core.async.put_BANG_.call(null,event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-datasource","change-datasource",1490034514),cljs.core.keyword.call(null,p1__21306_SHARP_.target.value)], null));
}), "className": "form-control input-sm"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,prais2.utils.key_with,(function (){var iter__4311__auto__ = (function prais2$data$iter__21309(s__21310){
return (new cljs.core.LazySeq(null,(function (){
var s__21310__$1 = s__21310;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21310__$1);
if(temp__5753__auto__){
var s__21310__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21310__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__21310__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__21312 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__21311 = (0);
while(true){
if((i__21311 < size__4310__auto__)){
var year = cljs.core._nth.call(null,c__4309__auto__,i__21311);
cljs.core.chunk_append.call(null,b__21312,prais2.data.key_option.call(null,year));

var G__21313 = (i__21311 + (1));
i__21311 = G__21313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21312),prais2$data$iter__21309.call(null,cljs.core.chunk_rest.call(null,s__21310__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21312),null);
}
} else {
var year = cljs.core.first.call(null,s__21310__$2);
return cljs.core.cons.call(null,prais2.data.key_option.call(null,year),prais2$data$iter__21309.call(null,cljs.core.rest.call(null,s__21310__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__.call(null,cljs.core.range.call(null,prais2.content.find_min_year.call(null,new cljs.core.Keyword(null,"hosp-data","hosp-data",538848822).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app))),((1) + prais2.content.find_max_year.call(null,new cljs.core.Keyword(null,"hosp-data","hosp-data",538848822).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app))))));
})()))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"datasource-dropdown");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21314__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21314 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21315__i = 0, G__21315__a = new Array(arguments.length -  0);
while (G__21315__i < G__21315__a.length) {G__21315__a[G__21315__i] = arguments[G__21315__i + 0]; ++G__21315__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21315__a,0,null);
} 
return G__21314__delegate.call(this,args__16261__auto__);};
G__21314.cljs$lang$maxFixedArity = 0;
G__21314.cljs$lang$applyTo = (function (arglist__21316){
var args__16261__auto__ = cljs.core.seq(arglist__21316);
return G__21314__delegate(args__16261__auto__);
});
G__21314.cljs$core$IFn$_invoke$arity$variadic = G__21314__delegate;
return G__21314;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.datasource_title = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (prefix){
var attrs21317 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mrange","mrange",607099414).cljs$core$IFn$_invoke$arity$1(prais2.data.year_range.call(null,prais2.data.end_year.call(null),"April","March")))].join('');
return cljs.core.apply.call(null,React.createElement,"h2",((cljs.core.map_QMARK_.call(null,attrs21317))?sablono.interpreter.attributes.call(null,attrs21317):null),((cljs.core.map_QMARK_.call(null,attrs21317))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21317)], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"datasource-title");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21318__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21318 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21319__i = 0, G__21319__a = new Array(arguments.length -  0);
while (G__21319__i < G__21319__a.length) {G__21319__a[G__21319__i] = arguments[G__21319__i + 0]; ++G__21319__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21319__a,0,null);
} 
return G__21318__delegate.call(this,args__16261__auto__);};
G__21318.cljs$lang$maxFixedArity = 0;
G__21318.cljs$lang$applyTo = (function (arglist__21320){
var args__16261__auto__ = cljs.core.seq(arglist__21320);
return G__21318__delegate(args__16261__auto__);
});
G__21318.cljs$core$IFn$_invoke$arity$variadic = G__21318__delegate;
return G__21318;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.list_tab = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (app,data,event_bus){
return React.createElement("div",null,React.createElement("div",({"className": "col-sm-offset-1 col-sm-10"}),React.createElement("div",({"className": "row"}),(function (){var attrs21325 = prais2.data.datasource_title.call(null,"Data for ");
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21325))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-9"], null)], null),attrs21325)):({"className": "col-sm-9"})),((cljs.core.map_QMARK_.call(null,attrs21325))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21325)], null)));
})(),(function (){var attrs21326 = prais2.data.datasource_dropdown.call(null,event_bus);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21326))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-3"], null)], null),attrs21326)):({"className": "col-sm-3"})),((cljs.core.map_QMARK_.call(null,attrs21326))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21326)], null)));
})()),React.createElement("p",({"className": "col-sm-9"}),"These are the hospitals in the UK and Ireland that performed heart surgery in children over this period\n     (0-16 years old)."),React.createElement("p",({"className": "col-sm-9"}),"Clicking on a hospital will bring up specific information for\n     that hospital along with an interpretation of its survival rate. It is ",React.createElement("strong",null,"only")," valid to compare a hospital's survival\n     rate to its predicted range of survival and not to other hospitals. Read more about this in ",(function (){var attrs21329 = prais2.core.href.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21329))?sablono.interpreter.attributes.call(null,attrs21329):null),((cljs.core.map_QMARK_.call(null,attrs21329))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21329),"Everything Else."], null)));
})()),React.createElement("p",({"className": "col-sm-9"}),(function (){var attrs21330 = prais2.core.href.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21330))?sablono.interpreter.attributes.call(null,attrs21330):null),((cljs.core.map_QMARK_.call(null,attrs21330))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21330),"The Everything Else"], null)));
})()," section also tells you more about the predicted range and what\n     happens if a hospital\u2019s survival rate is outside its range."),React.createElement("p",({"className": "col-sm-9"}),"You can hover over or tap on the charts to bring up more information.")),sablono.interpreter.interpret.call(null,prais2.data.table1.call(null,app,data)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.update_title.call(null,"All hospitals")], null)),"list-tab");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21331__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21331 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21332__i = 0, G__21332__a = new Array(arguments.length -  0);
while (G__21332__i < G__21332__a.length) {G__21332__a[G__21332__i] = arguments[G__21332__i + 0]; ++G__21332__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21332__a,0,null);
} 
return G__21331__delegate.call(this,args__16261__auto__);};
G__21331.cljs$lang$maxFixedArity = 0;
G__21331.cljs$lang$applyTo = (function (arglist__21333){
var args__16261__auto__ = cljs.core.seq(arglist__21333);
return G__21331__delegate(args__16261__auto__);
});
G__21331.cljs$core$IFn$_invoke$arity$variadic = G__21331__delegate;
return G__21331;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.interpretation = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (row,close_modal){
var survival_rate = new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(row);
return sablono.interpreter.interpret.call(null,(((survival_rate < new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(row)))?prais2.content.outer_low_comment.call(null,close_modal):(((survival_rate < new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(row)))?prais2.content.low_comment.call(null,close_modal):(((survival_rate <= new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(row)))?prais2.content.inner_comment.call(null,close_modal):(((survival_rate <= new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row)))?prais2.content.high_comment.call(null,close_modal):(((survival_rate > new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(row)))?prais2.content.outer_high_comment.call(null,close_modal):"Oops - no text for this"
))))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"interpretation");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21334__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21334 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21335__i = 0, G__21335__a = new Array(arguments.length -  0);
while (G__21335__i < G__21335__a.length) {G__21335__a[G__21335__i] = arguments[G__21335__i + 0]; ++G__21335__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21335__a,0,null);
} 
return G__21334__delegate.call(this,args__16261__auto__);};
G__21334.cljs$lang$maxFixedArity = 0;
G__21334.cljs$lang$applyTo = (function (arglist__21336){
var args__16261__auto__ = cljs.core.seq(arglist__21336);
return G__21334__delegate(args__16261__auto__);
});
G__21334.cljs$core$IFn$_invoke$arity$variadic = G__21334__delegate;
return G__21334;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.hospital_charities = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (h_code){
var meta = h_code.call(null,prais2.content.hospital_metadata);
var vec__21337 = meta;
var link1 = cljs.core.nth.call(null,vec__21337,(0),null);
var link2 = cljs.core.nth.call(null,vec__21337,(1),null);
var link3 = cljs.core.nth.call(null,vec__21337,(2),null);
var link4 = cljs.core.nth.call(null,vec__21337,(3),null);
var link5 = cljs.core.nth.call(null,vec__21337,(4),null);
return sablono.interpreter.interpret.call(null,(cljs.core.truth_(link1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Further web information"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),link1.call(null,(1)),link1.call(null,(2))], null)], null),(cljs.core.truth_(link2)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),link2.call(null,(1)),link2.call(null,(2))], null)], null):null),(cljs.core.truth_(link3)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),link3.call(null,(1)),link3.call(null,(2))], null)], null):null),(cljs.core.truth_(link4)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),link4.call(null,(1)),link4.call(null,(2))], null)], null):null),(cljs.core.truth_(link5)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),link5.call(null,(1)),link5.call(null,(2))], null)], null):null)], null)], null):null));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-charities");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21340__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21340 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21341__i = 0, G__21341__a = new Array(arguments.length -  0);
while (G__21341__i < G__21341__a.length) {G__21341__a[G__21341__i] = arguments[G__21341__i + 0]; ++G__21341__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21341__a,0,null);
} 
return G__21340__delegate.call(this,args__16261__auto__);};
G__21340.cljs$lang$maxFixedArity = 0;
G__21340.cljs$lang$applyTo = (function (arglist__21342){
var args__16261__auto__ = cljs.core.seq(arglist__21342);
return G__21340__delegate(args__16261__auto__);
});
G__21340.cljs$core$IFn$_invoke$arity$variadic = G__21340__delegate;
return G__21340;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.sample_hospital_intro_text = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("i",({"key": "sintros"}),React.createElement("p",({"key": (1), "className": "note"}),"You can move the slider button left to see the rates plotted on the full 0-100% range of possible\n   survival rates, or right to focus on the detail near 100%"),React.createElement("p",({"key": (2), "className": "note"}),"Mouse over or click on the chart bars and the dot for explanations of their meaning."));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"sample-hospital-intro-text");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21345__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21345 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21346__i = 0, G__21346__a = new Array(arguments.length -  0);
while (G__21346__i < G__21346__a.length) {G__21346__a[G__21346__i] = arguments[G__21346__i + 0]; ++G__21346__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21346__a,0,null);
} 
return G__21345__delegate.call(this,args__16261__auto__);};
G__21345.cljs$lang$maxFixedArity = 0;
G__21345.cljs$lang$applyTo = (function (arglist__21347){
var args__16261__auto__ = cljs.core.seq(arglist__21347);
return G__21345__delegate(args__16261__auto__);
});
G__21345.cljs$core$IFn$_invoke$arity$variadic = G__21345__delegate;
return G__21345;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.hospital_data = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (h_code){
var datasource = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app));
var selected_row = h_code.call(null,prais2.data.rows_by_code.call(null,datasource).call(null));
return React.createElement("div",({"className": "data-summary"}),React.createElement("p",({"key": (0), "style": ({"color": "orange"})})," Hover over or tap on the chart areas for more detail on this hospital. "),React.createElement("p",({"key": (1)}),"The hospital performed ",(function (){var attrs21350 = new cljs.core.Keyword(null,"n-ops","n-ops",921161673).cljs$core$IFn$_invoke$arity$1(selected_row);
return cljs.core.apply.call(null,React.createElement,"b",((cljs.core.map_QMARK_.call(null,attrs21350))?sablono.interpreter.attributes.call(null,attrs21350):null),((cljs.core.map_QMARK_.call(null,attrs21350))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["  operations. "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21350),"  operations. "], null)));
})()),React.createElement("p",({"key": (2)}),"Measured 30 days after surgery, ",React.createElement("b",({"key": (1)}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"n-survivors","n-survivors",-379968592).cljs$core$IFn$_invoke$arity$1(selected_row))," survivors "),"and ",React.createElement("b",({"key": (2)}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"n-deaths","n-deaths",1830468862).cljs$core$IFn$_invoke$arity$1(selected_row))," deaths")," had been recorded. "),React.createElement("p",({"key": (3)}),"The hospital's 30 day survival rate was ",(function (){var attrs21351 = new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(selected_row);
return cljs.core.apply.call(null,React.createElement,"b",((cljs.core.map_QMARK_.call(null,attrs21351))?sablono.interpreter.attributes.call(null,attrs21351):null),((cljs.core.map_QMARK_.call(null,attrs21351))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21351),"%"], null)));
})(),"."));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-data");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21352__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21352 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21353__i = 0, G__21353__a = new Array(arguments.length -  0);
while (G__21353__i < G__21353__a.length) {G__21353__a[G__21353__i] = arguments[G__21353__i + 0]; ++G__21353__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21353__a,0,null);
} 
return G__21352__delegate.call(this,args__16261__auto__);};
G__21352.cljs$lang$maxFixedArity = 0;
G__21352.cljs$lang$applyTo = (function (arglist__21354){
var args__16261__auto__ = cljs.core.seq(arglist__21354);
return G__21352__delegate(args__16261__auto__);
});
G__21352.cljs$core$IFn$_invoke$arity$variadic = G__21352__delegate;
return G__21352;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.hospital_header = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (selected_row){
var attrs21355 = new cljs.core.Keyword(null,"h-name","h-name",1046194554).cljs$core$IFn$_invoke$arity$1(selected_row);
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs21355))?sablono.interpreter.attributes.call(null,attrs21355):null),((cljs.core.map_QMARK_.call(null,attrs21355))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21355)], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"hospital-header");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21356__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21356 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21357__i = 0, G__21357__a = new Array(arguments.length -  0);
while (G__21357__i < G__21357__a.length) {G__21357__a[G__21357__i] = arguments[G__21357__i + 0]; ++G__21357__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21357__a,0,null);
} 
return G__21356__delegate.call(this,args__16261__auto__);};
G__21356.cljs$lang$maxFixedArity = 0;
G__21356.cljs$lang$applyTo = (function (arglist__21358){
var args__16261__auto__ = cljs.core.seq(arglist__21358);
return G__21356__delegate(args__16261__auto__);
});
G__21356.cljs$core$IFn$_invoke$arity$variadic = G__21356__delegate;
return G__21356;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.legend = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (selected_row,close_modal){
return React.createElement("div",({"className": "legend"}),React.createElement("div",({"className": "box"}),React.createElement("p",({"style": ({"color": "orange"})}),"Legend (See also: ",(function (){var attrs21360 = prais2.core.href.call(null,"data/animation",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21359_SHARP_){
if(cljs.core.truth_(close_modal)){
close_modal.call(null);
} else {
}

return prais2.core.click__GT_event_bus.call(null,p1__21359_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"animation","animation",-1248293244),"data/animation");
}));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21360))?sablono.interpreter.attributes.call(null,attrs21360):null),((cljs.core.map_QMARK_.call(null,attrs21360))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-video-camera"}))," two minute video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21360),React.createElement("i",({"className": "fa fa-video-camera"}))," two minute video"], null)));
})(),")"),(function (){var ap = rum.core.react.call(null,prais2.core.app);
return sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.annotated_chart_cell.call(null,selected_row,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null),"Survival rate: The dot indicates the hospital's survival rate"),prais2.data.annotated_chart_cell.call(null,selected_row,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inner","inner",-1383171215),null], null), null),"Predicted Range: We expect the hospital's survival rate to be inside this bar\n                                          19 times out of 20"),prais2.data.annotated_chart_cell.call(null,selected_row,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outer","outer",-375185956),null], null), null),"Extended predicted range: We expect the hospital's survival rate to be inside this bar\n                                          998 times out of a 1000")], null)));
})()));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"legend");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21365__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21365 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21366__i = 0, G__21366__a = new Array(arguments.length -  0);
while (G__21366__i < G__21366__a.length) {G__21366__a[G__21366__i] = arguments[G__21366__i + 0]; ++G__21366__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21366__a,0,null);
} 
return G__21365__delegate.call(this,args__16261__auto__);};
G__21365.cljs$lang$maxFixedArity = 0;
G__21365.cljs$lang$applyTo = (function (arglist__21367){
var args__16261__auto__ = cljs.core.seq(arglist__21367);
return G__21365__delegate(args__16261__auto__);
});
G__21365.cljs$core$IFn$_invoke$arity$variadic = G__21365__delegate;
return G__21365;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
prais2.data.open_hospital_modal = (function prais2$data$open_hospital_modal(h_code){
cljs.core.swap_BANG_.call(null,prais2.core.app,(function (p1__21368_SHARP_){
return cljs.core.assoc.call(null,p1__21368_SHARP_,new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046),cljs.core.keyword.call(null,h_code));
}));

return $("#rowModal").modal();
});
prais2.data.close_hospital_modal = (function prais2$data$close_hospital_modal(){
cljs.core.swap_BANG_.call(null,prais2.core.app,(function (p1__21369_SHARP_){
return cljs.core.assoc.call(null,p1__21369_SHARP_,new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046),null);
}));

return $("#rowModal").modal("hide");
});
/**
 * 
 */
prais2.data.hospital_detail = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (h_code,_){
var ap = rum.core.react.call(null,prais2.core.app);
if(cljs.core.truth_(h_code)){
var attrs21370 = (function (){var temp__5753__auto__ = h_code.call(null,prais2.data.rows_by_code.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(ap)).call(null));
if(cljs.core.truth_(temp__5753__auto__)){
var selected_row = temp__5753__auto__;
return cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.hospital_header.call(null,selected_row),prais2.data.slider_widget.call(null,prais2.content.detail_slider_label,prais2.data.detail_slider_control,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap)),prais2.data.chart_cell.call(null,selected_row,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap)),prais2.data.hospital_data.call(null,h_code),prais2.data.interpretation.call(null,selected_row,prais2.data.close_hospital_modal),prais2.data.legend.call(null,selected_row,prais2.data.close_hospital_modal),prais2.data.hospital_charities.call(null,h_code)], null));
} else {
return null;
}
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21370))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"detail"], null),attrs21370)):({"id": "detail"})),((cljs.core.map_QMARK_.call(null,attrs21370))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21370)], null)));
} else {
var attrs21371 = (function (){var selected_row = prais2.content.sample_hospital;
return cljs.core.map_indexed.call(null,prais2.utils.key_with,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.data.sample_hospital_intro_text.call(null),prais2.data.hospital_header.call(null,selected_row),prais2.data.slider_widget.call(null,prais2.content.detail_slider_label,prais2.data.detail_slider_control,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap)),prais2.data.chart_cell.call(null,selected_row,new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(ap)),prais2.data.interpretation.call(null,selected_row,prais2.data.close_hospital_modal)], null));
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21371))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"detail"], null),attrs21371)):({"id": "detail"})),((cljs.core.map_QMARK_.call(null,attrs21371))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21371)], null)));
}
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-detail");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21372__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21372 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21373__i = 0, G__21373__a = new Array(arguments.length -  0);
while (G__21373__i < G__21373__a.length) {G__21373__a[G__21373__i] = arguments[G__21373__i + 0]; ++G__21373__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21373__a,0,null);
} 
return G__21372__delegate.call(this,args__16261__auto__);};
G__21372.cljs$lang$maxFixedArity = 0;
G__21372.cljs$lang$applyTo = (function (arglist__21374){
var args__16261__auto__ = cljs.core.seq(arglist__21374);
return G__21372__delegate(args__16261__auto__);
});
G__21372.cljs$core$IFn$_invoke$arity$variadic = G__21372__delegate;
return G__21372;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.data.modal = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var ap = rum.core.react.call(null,prais2.core.app);
var selected_h_code = new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046).cljs$core$IFn$_invoke$arity$1(ap);
var close_handler = ((function (ap,selected_h_code){
return (function (p1__21375_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__21375_SHARP_,new cljs.core.Keyword(null,"close-hospital-modal","close-hospital-modal",-1904402441),selected_h_code,null);
});})(ap,selected_h_code))
;
return React.createElement("div",({"id": "rowModal", "tabIndex": (-1), "role": "dialog", "aria-labelledby": "myModalLabel", "className": "modal fade"}),React.createElement("div",({"role": "document", "className": "modal-dialog"}),React.createElement("div",({"className": "modal-content"}),React.createElement("div",({"key": (1), "className": "modal-body"}),sablono.interpreter.interpret.call(null,prais2.data.hospital_detail.call(null,selected_h_code,prais2.data.close_hospital_modal))),React.createElement("div",({"key": (2), "className": "modal-footer"}),React.createElement("button",({"type": "button", "onClick": close_handler, "onTouchStart": close_handler, "className": "btn btn-default"}),"Close")))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"modal");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21376__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21376 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21377__i = 0, G__21377__a = new Array(arguments.length -  0);
while (G__21377__i < G__21377__a.length) {G__21377__a[G__21377__i] = arguments[G__21377__i + 0]; ++G__21377__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21377__a,0,null);
} 
return G__21376__delegate.call(this,args__16261__auto__);};
G__21376.cljs$lang$maxFixedArity = 0;
G__21376.cljs$lang$applyTo = (function (arglist__21378){
var args__16261__auto__ = cljs.core.seq(arglist__21378);
return G__21376__delegate(args__16261__auto__);
});
G__21376.cljs$core$IFn$_invoke$arity$variadic = G__21376__delegate;
return G__21376;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=data.js.map
