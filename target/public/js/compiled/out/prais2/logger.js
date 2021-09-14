// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.logger');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljsjs.papaparse');
goog.require('cljs.core.async');
goog.require('prais2.core');
goog.require('cljsjs.jquery');
goog.require('ajax.core');
goog.require('cljs.reader');
if(typeof prais2.logger.session_id !== 'undefined'){
} else {
prais2.logger.session_id = cljs.core.atom.call(null,null);
}
if(typeof prais2.logger.log_states !== 'undefined'){
} else {
prais2.logger.log_states = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof prais2.logger.log_state_index !== 'undefined'){
} else {
prais2.logger.log_state_index = cljs.core.atom.call(null,null);
}
/**
 * The current state indicated by log-state-index
 */
prais2.logger.log_state = (function prais2$logger$log_state(){
if(cljs.core.integer_QMARK_.call(null,cljs.core.deref.call(null,prais2.logger.log_state_index))){
return cljs.core.deref.call(null,prais2.logger.log_states).call(null,cljs.core.deref.call(null,prais2.logger.log_state_index));
} else {
return null;
}
});
prais2.logger.format_time_stamp = (function prais2$logger$format_time_stamp(ts){
return [cljs.core.str(moment(ts).format("DD-MMM-YYYY HH:mm:SS"))].join('');
});
prais2.logger.ip_address = cljs.core.atom.call(null,null);
/**
 * get the ip address of this machine
 */
prais2.logger.get_ip_address = (function prais2$logger$get_ip_address(){
return null;
});
prais2.logger.get_ip_address.call(null);
prais2.logger.sheets_logger_app = "https://script.google.com/macros/s/AKfycbztUWfkCXdD8MaPu0m3kuEcwfk3fFp6blGnIPRBEFz3Qbckg4OM/exec";
prais2.logger.sheets_success_handler = (function prais2$logger$sheets_success_handler(response){
return console.log([cljs.core.str(response)].join(''));
});
prais2.logger.sheets_write_error = (function prais2$logger$sheets_write_error(status,status_text){
return console.log([cljs.core.str("spreadsheet write error "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
/**
 * Write a log-event to the google sheet url.
 */
prais2.logger.write_sheet_log = (function prais2$logger$write_sheet_log(log_entry){
var app_state = log_entry.call(null,(4));
var params = [cljs.core.str("ip="),cljs.core.str(cljs.core.deref.call(null,prais2.logger.ip_address)),cljs.core.str("&session-id="),cljs.core.str(log_entry.call(null,(0))),cljs.core.str("&timestamp="),cljs.core.str(log_entry.call(null,(1))),cljs.core.str("&eventkey="),cljs.core.str(log_entry.call(null,(2))),cljs.core.str("&eventdata="),cljs.core.str(log_entry.call(null,(3))),cljs.core.str("&datasource="),cljs.core.str(new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&page="),cljs.core.str(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&sort-by="),cljs.core.str(new cljs.core.Keyword(null,"sort-by","sort-by",-322599303).cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&sort-asc="),cljs.core.str(new cljs.core.Keyword(null,"sort-ascending","sort-ascending",-1053925574).cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&table-slider="),cljs.core.str(new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558).cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&popup-slider="),cljs.core.str(new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254).cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&chart-state="),cljs.core.str(new cljs.core.Keyword(null,"chart-state","chart-state",-1208336238).cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&theme="),cljs.core.str(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&table-selection="),cljs.core.str(new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046).cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&map-selection="),cljs.core.str(new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396).cljs$core$IFn$_invoke$arity$1(app_state))].join('');
return null;
});
/**
 * write an event to the log
 */
prais2.logger.write_log = (function prais2$logger$write_log(var_args){
var args35979 = [];
var len__25738__auto___35986 = arguments.length;
var i__25739__auto___35987 = (0);
while(true){
if((i__25739__auto___35987 < len__25738__auto___35986)){
args35979.push((arguments[i__25739__auto___35987]));

var G__35988 = (i__25739__auto___35987 + (1));
i__25739__auto___35987 = G__35988;
continue;
} else {
}
break;
}

var G__35981 = args35979.length;
switch (G__35981) {
case 2:
return prais2.logger.write_log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return prais2.logger.write_log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35979.length)].join('')));

}
});

prais2.logger.write_log.cljs$core$IFn$_invoke$arity$2 = (function (p__35982,new_session_id){
var vec__35983 = p__35982;
var event_key = cljs.core.nth.call(null,vec__35983,(0),null);
var event_data = cljs.core.nth.call(null,vec__35983,(1),null);
var log_entry = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_session_id,(new Date()),event_key,event_data,cljs.core.deref.call(null,prais2.core.app)], null);
prais2.logger.write_sheet_log.call(null,log_entry);

cljs.core.reset_BANG_.call(null,prais2.logger.session_id,new_session_id);

cljs.core.swap_BANG_.call(null,prais2.logger.log_states,((function (log_entry,vec__35983,event_key,event_data){
return (function (p1__35977_SHARP_){
return cljs.core.conj.call(null,p1__35977_SHARP_,log_entry);
});})(log_entry,vec__35983,event_key,event_data))
);

return cljs.core.swap_BANG_.call(null,prais2.logger.log_state_index,((function (log_entry,vec__35983,event_key,event_data){
return (function (p1__35978_SHARP_){
if((p1__35978_SHARP_ == null)){
return (0);
} else {
return (p1__35978_SHARP_ + (1));
}
});})(log_entry,vec__35983,event_key,event_data))
);
});

prais2.logger.write_log.cljs$core$IFn$_invoke$arity$1 = (function (event_key_data){
return prais2.logger.write_log.call(null,event_key_data,cljs.core.deref.call(null,prais2.logger.session_id));
});

prais2.logger.write_log.cljs$lang$maxFixedArity = 2;

prais2.logger.log_sheet_url = "https://docs.google.com/spreadsheets/d/1bLxk8unegtsoBr9TysVDVA0jECmr5D4a3WQvyT69iuE";
if(typeof prais2.logger.log_bus !== 'undefined'){
} else {
prais2.logger.log_bus = cljs.core.async.chan.call(null);
}
if(typeof prais2.logger.log_bus_pub !== 'undefined'){
} else {
prais2.logger.log_bus_pub = cljs.core.async.pub.call(null,prais2.logger.log_bus,cljs.core.first);
}
prais2.logger.click__GT_log_bus = (function prais2$logger$click__GT_log_bus(event,dispatch_key,dispatch_value){
cljs.core.async.put_BANG_.call(null,prais2.logger.log_bus,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch_key,dispatch_value,event], null));

event.preventDefault();

return event.stopPropagation();
});
/**
 * convert the log to a lazy seq of comma separated values
 */
prais2.logger.log__GT_csv = (function prais2$logger$log__GT_csv(log){
var iter__25443__auto__ = (function prais2$logger$log__GT_csv_$_iter__35994(s__35995){
return (new cljs.core.LazySeq(null,(function (){
var s__35995__$1 = s__35995;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35995__$1);
if(temp__4657__auto__){
var s__35995__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35995__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__35995__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__35997 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__35996 = (0);
while(true){
if((i__35996 < size__25442__auto__)){
var log_entry = cljs.core._nth.call(null,c__25441__auto__,i__35996);
cljs.core.chunk_append.call(null,b__35997,(function (){
"log->csv ".call(null,log_entry);

return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.logger.format_time_stamp.call(null,log_entry.call(null,(0))),cljs.core.name.call(null,log_entry.call(null,(1))),log_entry.call(null,(2))], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.second,log_entry.call(null,(3)))))));
})()
);

var G__35998 = (i__35996 + (1));
i__35996 = G__35998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35997),prais2$logger$log__GT_csv_$_iter__35994.call(null,cljs.core.chunk_rest.call(null,s__35995__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35997),null);
}
} else {
var log_entry = cljs.core.first.call(null,s__35995__$2);
return cljs.core.cons.call(null,(function (){
"log->csv ".call(null,log_entry);

return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.logger.format_time_stamp.call(null,log_entry.call(null,(0))),cljs.core.name.call(null,log_entry.call(null,(1))),log_entry.call(null,(2))], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.second,log_entry.call(null,(3)))))));
})()
,prais2$logger$log__GT_csv_$_iter__35994.call(null,cljs.core.rest.call(null,s__35995__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25443__auto__.call(null,log);
});
prais2.logger.prn_log = (function prais2$logger$prn_log(log){
return null;
});
/**
 * 
 */
prais2.logger.icon_control = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (icon,event_key,tooltip){
return React.createElement("button",{"title": tooltip, "tabIndex": (0), "onClick": (function (p1__35999_SHARP_){
return prais2.logger.click__GT_log_bus.call(null,p1__35999_SHARP_,event_key,null);
}), "className": "btn btn-default"},React.createElement("i",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa",[cljs.core.str("fa-"),cljs.core.str(icon)].join('')], null))}));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"icon-control");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__36000__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__36000 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__36001__i = 0, G__36001__a = new Array(arguments.length -  0);
while (G__36001__i < G__36001__a.length) {G__36001__a[G__36001__i] = arguments[G__36001__i + 0]; ++G__36001__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__36001__a,0);
} 
return G__36000__delegate.call(this,args__27116__auto__);};
G__36000.cljs$lang$maxFixedArity = 0;
G__36000.cljs$lang$applyTo = (function (arglist__36002){
var args__27116__auto__ = cljs.core.seq(arglist__36002);
return G__36000__delegate(args__27116__auto__);
});
G__36000.cljs$core$IFn$_invoke$arity$variadic = G__36000__delegate;
return G__36000;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.logger.reset_control = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,prais2.logger.icon_control.call(null,"step-backward",new cljs.core.Keyword(null,"rewind","rewind",-669264915),"rewind"));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"reset-control");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__36003__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__36003 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__36004__i = 0, G__36004__a = new Array(arguments.length -  0);
while (G__36004__i < G__36004__a.length) {G__36004__a[G__36004__i] = arguments[G__36004__i + 0]; ++G__36004__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__36004__a,0);
} 
return G__36003__delegate.call(this,args__27116__auto__);};
G__36003.cljs$lang$maxFixedArity = 0;
G__36003.cljs$lang$applyTo = (function (arglist__36005){
var args__27116__auto__ = cljs.core.seq(arglist__36005);
return G__36003__delegate(args__27116__auto__);
});
G__36003.cljs$core$IFn$_invoke$arity$variadic = G__36003__delegate;
return G__36003;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.logger.undo_control = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,prais2.logger.icon_control.call(null,"chevron-left",new cljs.core.Keyword(null,"undo","undo",-1818036302),"undo"));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"undo-control");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__36006__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__36006 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__36007__i = 0, G__36007__a = new Array(arguments.length -  0);
while (G__36007__i < G__36007__a.length) {G__36007__a[G__36007__i] = arguments[G__36007__i + 0]; ++G__36007__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__36007__a,0);
} 
return G__36006__delegate.call(this,args__27116__auto__);};
G__36006.cljs$lang$maxFixedArity = 0;
G__36006.cljs$lang$applyTo = (function (arglist__36008){
var args__27116__auto__ = cljs.core.seq(arglist__36008);
return G__36006__delegate(args__27116__auto__);
});
G__36006.cljs$core$IFn$_invoke$arity$variadic = G__36006__delegate;
return G__36006;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.logger.redo_control = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,prais2.logger.icon_control.call(null,"chevron-right",new cljs.core.Keyword(null,"redo","redo",501190664),"redo"));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"redo-control");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__36009__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__36009 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__36010__i = 0, G__36010__a = new Array(arguments.length -  0);
while (G__36010__i < G__36010__a.length) {G__36010__a[G__36010__i] = arguments[G__36010__i + 0]; ++G__36010__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__36010__a,0);
} 
return G__36009__delegate.call(this,args__27116__auto__);};
G__36009.cljs$lang$maxFixedArity = 0;
G__36009.cljs$lang$applyTo = (function (arglist__36011){
var args__27116__auto__ = cljs.core.seq(arglist__36011);
return G__36009__delegate(args__27116__auto__);
});
G__36009.cljs$core$IFn$_invoke$arity$variadic = G__36009__delegate;
return G__36009;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.logger.load_control = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("button",{"id": "load-ctl", "title": "load session from spreadsheet", "data-toggle": "collapse", "data-target": "#paste-box", "aria-controls": "paste-box", "aria-expanded": false, "tabIndex": (0), "className": "btn btn-default"},React.createElement("i",{"className": "fa fa-sign-in fa-rotate-90"}));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"load-control");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__36014__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__36014 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__36015__i = 0, G__36015__a = new Array(arguments.length -  0);
while (G__36015__i < G__36015__a.length) {G__36015__a[G__36015__i] = arguments[G__36015__i + 0]; ++G__36015__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__36015__a,0);
} 
return G__36014__delegate.call(this,args__27116__auto__);};
G__36014.cljs$lang$maxFixedArity = 0;
G__36014.cljs$lang$applyTo = (function (arglist__36016){
var args__27116__auto__ = cljs.core.seq(arglist__36016);
return G__36014__delegate(args__27116__auto__);
});
G__36014.cljs$core$IFn$_invoke$arity$variadic = G__36014__delegate;
return G__36014;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
prais2.logger.tsv_log = cljs.core.atom.call(null,"Paste rows from session log here");
prais2.logger.tsv_header = "ip\tsession-id\ttimestamp\teventkey\teventdata\tdatasource\tpage\tsort-by\tsort-asc\ttable-slider\tpopup-slider\tchart-state\ttheme\ttable-selection\tmap-selection\n";
/**
 * add header to s if not already present
 */
prais2.logger.add_header = (function prais2$logger$add_header(header,s){
if(cljs.core._EQ_.call(null,(0),s.indexOf("ip"))){
return s;
} else {
return [cljs.core.str(header),cljs.core.str(s)].join('');
}
});
/**
 * parse pasted tab separated values into maps of field value pairs, using first row
 * of headers for field names and then discarding the first header row from the result set.
 */
prais2.logger.tsv_parse = (function prais2$logger$tsv_parse(tsv){
return cljs.core.rest.call(null,cljs.core.js__GT_clj.call(null,Papa.parse(prais2.logger.add_header.call(null,prais2.logger.tsv_header,tsv),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),true,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"\t"], null)))).call(null,"data"));
});
/**
 * convert one pair from string/value form to internal key/value transforming as necessary.
 */
prais2.logger.pair__GT_kv = (function prais2$logger$pair__GT_kv(p__36018){
var vec__36031 = p__36018;
var key = cljs.core.nth.call(null,vec__36031,(0),null);
var str_value = cljs.core.nth.call(null,vec__36031,(1),null);
var renamed_key = cljs.core.keyword.call(null,(function (){var pred__36034 = cljs.core._EQ_;
var expr__36035 = key;
if(cljs.core.truth_(pred__36034.call(null,"table-slider",expr__36035))){
return "slider-axis-value";
} else {
if(cljs.core.truth_(pred__36034.call(null,"popup-slider",expr__36035))){
return "detail-slider-axis-value";
} else {
if(cljs.core.truth_(pred__36034.call(null,"table-selection",expr__36035))){
return "selected-h-code";
} else {
if(cljs.core.truth_(pred__36034.call(null,"map-selection",expr__36035))){
return "map-h-code";
} else {
if(cljs.core.truth_(pred__36034.call(null,"sort-asc",expr__36035))){
return "sort-ascending";
} else {
return key;
}
}
}
}
}
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [renamed_key,(function (){var pred__36037 = cljs.core._EQ_;
var expr__36038 = renamed_key;
if(cljs.core.truth_(pred__36037.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),expr__36038))){
return (new Date(str_value));
} else {
if(cljs.core.truth_(pred__36037.call(null,new cljs.core.Keyword(null,"ip","ip",58378915),expr__36038))){
return str_value;
} else {
var pred__36040 = cljs.core._EQ_;
var expr__36041 = str_value;
if(cljs.core.truth_(pred__36040.call(null,":2014",expr__36041))){
return new cljs.core.Keyword(null,"2014","2014",-1308058204);
} else {
if(cljs.core.truth_(pred__36040.call(null,"TRUE",expr__36041))){
return true;
} else {
if(cljs.core.truth_(pred__36040.call(null,"FALSE",expr__36041))){
return false;
} else {
if(cljs.core.truth_(pred__36040.call(null,"",expr__36041))){
return null;
} else {
if(((function (pred__36040,expr__36041,pred__36037,expr__36038,renamed_key,vec__36031,key,str_value){
return (function (p1__36017_SHARP_){
return ((p1__36017_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__36017_SHARP_ === 'number');
});})(pred__36040,expr__36041,pred__36037,expr__36038,renamed_key,vec__36031,key,str_value))
.call(null,cljs.reader.read_string.call(null,str_value))){
return cljs.reader.read_string.call(null,str_value);
} else {
return str_value;
}
}
}
}
}
}
}
})()], null);
});
prais2.logger.row_of_kvs = (function prais2$logger$row_of_kvs(f,row_of_pairs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,row_of_pairs));
});
prais2.logger.rows_of_kvs = (function prais2$logger$rows_of_kvs(rows_of_pairs){
return cljs.core.map.call(null,(function (p1__36043_SHARP_){
return prais2.logger.row_of_kvs.call(null,prais2.logger.pair__GT_kv,p1__36043_SHARP_);
}),rows_of_pairs);
});
/**
 * split row map into log fields and state fields to make a log-entry
 */
prais2.logger.row_map__GT_log_entry = (function prais2$logger$row_map__GT_log_entry(rm){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(rm),new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(rm),new cljs.core.Keyword(null,"eventkey","eventkey",1964518840).cljs$core$IFn$_invoke$arity$1(rm),new cljs.core.Keyword(null,"eventdata","eventdata",-760655197).cljs$core$IFn$_invoke$arity$1(rm),cljs.core.dissoc.call(null,rm,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"eventkey","eventkey",1964518840),new cljs.core.Keyword(null,"eventdata","eventdata",-760655197))], null);
});
prais2.logger.tsv__GT_log = (function prais2$logger$tsv__GT_log(tsv){
return cljs.core.mapv.call(null,prais2.logger.row_map__GT_log_entry,prais2.logger.rows_of_kvs.call(null,prais2.logger.tsv_parse.call(null,tsv)));
});
/**
 * No-op - JSON or JSONP GET appears to have restrictive permissions - using textbox paste instead.
 */
prais2.logger.parse_session = (function prais2$logger$parse_session(){
var parsed_tsv = prais2.logger.tsv__GT_log.call(null,$("#pasted-session").val());
if(cljs.core.truth_(parsed_tsv)){
var ix = cljs.core.count.call(null,parsed_tsv);
if(!((ix === (0)))){
cljs.core.reset_BANG_.call(null,prais2.logger.log_state_index,(ix - (1)));

return cljs.core.reset_BANG_.call(null,prais2.logger.log_states,parsed_tsv);
} else {
return null;
}
} else {
return null;
}
});
prais2.logger.edit_session_log = (function prais2$logger$edit_session_log(){
return prais2.core.el.call(null,"");
});

//# sourceMappingURL=logger.js.map?rel=1629049579857