// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('prais2.logger');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('prais2.core');
goog.require('cljs.reader');
if(typeof prais2.logger.session_id !== 'undefined'){
} else {
prais2.logger.session_id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof prais2.logger.log_states !== 'undefined'){
} else {
prais2.logger.log_states = (function (){var G__17099 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17099) : cljs.core.atom.call(null,G__17099));
})();
}
if(typeof prais2.logger.log_state_index !== 'undefined'){
} else {
prais2.logger.log_state_index = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
/**
 * The current state indicated by log-state-index
 */
prais2.logger.log_state = (function prais2$logger$log_state(){
if(cljs.core.integer_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.logger.log_state_index) : cljs.core.deref.call(null,prais2.logger.log_state_index)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.logger.log_states) : cljs.core.deref.call(null,prais2.logger.log_states)).call(null,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.logger.log_state_index) : cljs.core.deref.call(null,prais2.logger.log_state_index)));
} else {
return null;
}
});
prais2.logger.format_time_stamp = (function prais2$logger$format_time_stamp(ts){
return [cljs.core.str(moment(ts).format("DD-MMM-YYYY HH:mm:SS"))].join('');
});
prais2.logger.ip_address = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
/**
 * get the ip address of this machine
 */
prais2.logger.get_ip_address = (function prais2$logger$get_ip_address(){
return null;
});
prais2.logger.get_ip_address();
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
var app_state = (log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((4)) : log_entry.call(null,(4)));
var params = [cljs.core.str("ip="),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.logger.ip_address) : cljs.core.deref.call(null,prais2.logger.ip_address))),cljs.core.str("&session-id="),cljs.core.str((log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((0)) : log_entry.call(null,(0)))),cljs.core.str("&timestamp="),cljs.core.str((log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((1)) : log_entry.call(null,(1)))),cljs.core.str("&eventkey="),cljs.core.str((log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((2)) : log_entry.call(null,(2)))),cljs.core.str("&eventdata="),cljs.core.str((log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((3)) : log_entry.call(null,(3)))),cljs.core.str("&datasource="),cljs.core.str(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&page="),cljs.core.str(cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&sort-by="),cljs.core.str(cljs.core.cst$kw$sort_DASH_by.cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&sort-asc="),cljs.core.str(cljs.core.cst$kw$sort_DASH_ascending.cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&table-slider="),cljs.core.str(cljs.core.cst$kw$slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&popup-slider="),cljs.core.str(cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value.cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&chart-state="),cljs.core.str(cljs.core.cst$kw$chart_DASH_state.cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&theme="),cljs.core.str(cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&table-selection="),cljs.core.str(cljs.core.cst$kw$selected_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(app_state)),cljs.core.str("&map-selection="),cljs.core.str(cljs.core.cst$kw$map_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(app_state))].join('');
return null;
});
/**
 * write an event to the log
 */
prais2.logger.write_log = (function prais2$logger$write_log(var_args){
var args17102 = [];
var len__7296__auto___17109 = arguments.length;
var i__7297__auto___17110 = (0);
while(true){
if((i__7297__auto___17110 < len__7296__auto___17109)){
args17102.push((arguments[i__7297__auto___17110]));

var G__17111 = (i__7297__auto___17110 + (1));
i__7297__auto___17110 = G__17111;
continue;
} else {
}
break;
}

var G__17104 = args17102.length;
switch (G__17104) {
case 2:
return prais2.logger.write_log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return prais2.logger.write_log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17102.length)].join('')));

}
});

prais2.logger.write_log.cljs$core$IFn$_invoke$arity$2 = (function (p__17105,new_session_id){
var vec__17106 = p__17105;
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17106,(0),null);
var event_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17106,(1),null);
var log_entry = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_session_id,(new Date()),event_key,event_data,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.core.app) : cljs.core.deref.call(null,prais2.core.app))], null);
prais2.logger.write_sheet_log(log_entry);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.logger.session_id,new_session_id) : cljs.core.reset_BANG_.call(null,prais2.logger.session_id,new_session_id));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.logger.log_states,((function (log_entry,vec__17106,event_key,event_data){
return (function (p1__17100_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17100_SHARP_,log_entry);
});})(log_entry,vec__17106,event_key,event_data))
);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.logger.log_state_index,((function (log_entry,vec__17106,event_key,event_data){
return (function (p1__17101_SHARP_){
if((p1__17101_SHARP_ == null)){
return (0);
} else {
return (p1__17101_SHARP_ + (1));
}
});})(log_entry,vec__17106,event_key,event_data))
);
});

prais2.logger.write_log.cljs$core$IFn$_invoke$arity$1 = (function (event_key_data){
return prais2.logger.write_log.cljs$core$IFn$_invoke$arity$2(event_key_data,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.logger.session_id) : cljs.core.deref.call(null,prais2.logger.session_id)));
});

prais2.logger.write_log.cljs$lang$maxFixedArity = 2;

prais2.logger.log_sheet_url = "https://docs.google.com/spreadsheets/d/1bLxk8unegtsoBr9TysVDVA0jECmr5D4a3WQvyT69iuE";
if(typeof prais2.logger.log_bus !== 'undefined'){
} else {
prais2.logger.log_bus = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
if(typeof prais2.logger.log_bus_pub !== 'undefined'){
} else {
prais2.logger.log_bus_pub = cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2(prais2.logger.log_bus,cljs.core.first);
}
prais2.logger.click__GT_log_bus = (function prais2$logger$click__GT_log_bus(event,dispatch_key,dispatch_value){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.logger.log_bus,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch_key,dispatch_value,event], null));

event.preventDefault();

return event.stopPropagation();
});
/**
 * convert the log to a lazy seq of comma separated values
 */
prais2.logger.log__GT_csv = (function prais2$logger$log__GT_csv(log){
var iter__7001__auto__ = (function prais2$logger$log__GT_csv_$_iter__17119(s__17120){
return (new cljs.core.LazySeq(null,(function (){
var s__17120__$1 = s__17120;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17120__$1);
if(temp__4657__auto__){
var s__17120__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17120__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__17120__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__17122 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__17121 = (0);
while(true){
if((i__17121 < size__7000__auto__)){
var log_entry = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__17121);
cljs.core.chunk_append(b__17122,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.logger.format_time_stamp((log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((0)) : log_entry.call(null,(0)))),cljs.core.name((log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((1)) : log_entry.call(null,(1)))),(log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((2)) : log_entry.call(null,(2)))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((3)) : log_entry.call(null,(3)))))))));

var G__17125 = (i__17121 + (1));
i__17121 = G__17125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17122),prais2$logger$log__GT_csv_$_iter__17119(cljs.core.chunk_rest(s__17120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17122),null);
}
} else {
var log_entry = cljs.core.first(s__17120__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.logger.format_time_stamp((log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((0)) : log_entry.call(null,(0)))),cljs.core.name((log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((1)) : log_entry.call(null,(1)))),(log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((2)) : log_entry.call(null,(2)))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(log_entry.cljs$core$IFn$_invoke$arity$1 ? log_entry.cljs$core$IFn$_invoke$arity$1((3)) : log_entry.call(null,(3)))))))),prais2$logger$log__GT_csv_$_iter__17119(cljs.core.rest(s__17120__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(log);
});
prais2.logger.prn_log = (function prais2$logger$prn_log(log){
return null;
});
/**
 * 
 */
prais2.logger.icon_control = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (icon,event_key,tooltip){
var G__17127 = "button";
var G__17128 = {"title": tooltip, "tabIndex": (0), "onClick": ((function (G__17127){
return (function (p1__17126_SHARP_){
return prais2.logger.click__GT_log_bus(p1__17126_SHARP_,event_key,null);
});})(G__17127))
, "className": "btn btn-default"};
var G__17129 = (function (){var G__17130 = "i";
var G__17131 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa",[cljs.core.str("fa-"),cljs.core.str(icon)].join('')], null))};
return React.createElement(G__17130,G__17131);
})();
return React.createElement(G__17127,G__17128,G__17129);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"icon-control");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17132__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17132 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17133__i = 0, G__17133__a = new Array(arguments.length -  0);
while (G__17133__i < G__17133__a.length) {G__17133__a[G__17133__i] = arguments[G__17133__i + 0]; ++G__17133__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17133__a,0);
} 
return G__17132__delegate.call(this,args__8012__auto__);};
G__17132.cljs$lang$maxFixedArity = 0;
G__17132.cljs$lang$applyTo = (function (arglist__17134){
var args__8012__auto__ = cljs.core.seq(arglist__17134);
return G__17132__delegate(args__8012__auto__);
});
G__17132.cljs$core$IFn$_invoke$arity$variadic = G__17132__delegate;
return G__17132;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.logger.reset_control = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
return sablono.interpreter.interpret((prais2.logger.icon_control.cljs$core$IFn$_invoke$arity$3 ? prais2.logger.icon_control.cljs$core$IFn$_invoke$arity$3("step-backward",cljs.core.cst$kw$rewind,"rewind") : prais2.logger.icon_control.call(null,"step-backward",cljs.core.cst$kw$rewind,"rewind")));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"reset-control");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17135__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17135 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17136__i = 0, G__17136__a = new Array(arguments.length -  0);
while (G__17136__i < G__17136__a.length) {G__17136__a[G__17136__i] = arguments[G__17136__i + 0]; ++G__17136__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17136__a,0);
} 
return G__17135__delegate.call(this,args__8012__auto__);};
G__17135.cljs$lang$maxFixedArity = 0;
G__17135.cljs$lang$applyTo = (function (arglist__17137){
var args__8012__auto__ = cljs.core.seq(arglist__17137);
return G__17135__delegate(args__8012__auto__);
});
G__17135.cljs$core$IFn$_invoke$arity$variadic = G__17135__delegate;
return G__17135;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.logger.undo_control = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
return sablono.interpreter.interpret((prais2.logger.icon_control.cljs$core$IFn$_invoke$arity$3 ? prais2.logger.icon_control.cljs$core$IFn$_invoke$arity$3("chevron-left",cljs.core.cst$kw$undo,"undo") : prais2.logger.icon_control.call(null,"chevron-left",cljs.core.cst$kw$undo,"undo")));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"undo-control");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17138__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17138 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17139__i = 0, G__17139__a = new Array(arguments.length -  0);
while (G__17139__i < G__17139__a.length) {G__17139__a[G__17139__i] = arguments[G__17139__i + 0]; ++G__17139__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17139__a,0);
} 
return G__17138__delegate.call(this,args__8012__auto__);};
G__17138.cljs$lang$maxFixedArity = 0;
G__17138.cljs$lang$applyTo = (function (arglist__17140){
var args__8012__auto__ = cljs.core.seq(arglist__17140);
return G__17138__delegate(args__8012__auto__);
});
G__17138.cljs$core$IFn$_invoke$arity$variadic = G__17138__delegate;
return G__17138;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.logger.redo_control = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
return sablono.interpreter.interpret((prais2.logger.icon_control.cljs$core$IFn$_invoke$arity$3 ? prais2.logger.icon_control.cljs$core$IFn$_invoke$arity$3("chevron-right",cljs.core.cst$kw$redo,"redo") : prais2.logger.icon_control.call(null,"chevron-right",cljs.core.cst$kw$redo,"redo")));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"redo-control");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17141__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17141 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17142__i = 0, G__17142__a = new Array(arguments.length -  0);
while (G__17142__i < G__17142__a.length) {G__17142__a[G__17142__i] = arguments[G__17142__i + 0]; ++G__17142__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17142__a,0);
} 
return G__17141__delegate.call(this,args__8012__auto__);};
G__17141.cljs$lang$maxFixedArity = 0;
G__17141.cljs$lang$applyTo = (function (arglist__17143){
var args__8012__auto__ = cljs.core.seq(arglist__17143);
return G__17141__delegate(args__8012__auto__);
});
G__17141.cljs$core$IFn$_invoke$arity$variadic = G__17141__delegate;
return G__17141;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.logger.load_control = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17146 = "button";
var G__17147 = {"id": "load-ctl", "title": "load session from spreadsheet", "data-toggle": "collapse", "data-target": "#paste-box", "aria-controls": "paste-box", "aria-expanded": false, "tabIndex": (0), "className": "btn btn-default"};
var G__17148 = (function (){var G__17149 = "i";
var G__17150 = {"className": "fa fa-sign-in fa-rotate-90"};
return React.createElement(G__17149,G__17150);
})();
return React.createElement(G__17146,G__17147,G__17148);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"load-control");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17151__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17151 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17152__i = 0, G__17152__a = new Array(arguments.length -  0);
while (G__17152__i < G__17152__a.length) {G__17152__a[G__17152__i] = arguments[G__17152__i + 0]; ++G__17152__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17152__a,0);
} 
return G__17151__delegate.call(this,args__8012__auto__);};
G__17151.cljs$lang$maxFixedArity = 0;
G__17151.cljs$lang$applyTo = (function (arglist__17153){
var args__8012__auto__ = cljs.core.seq(arglist__17153);
return G__17151__delegate(args__8012__auto__);
});
G__17151.cljs$core$IFn$_invoke$arity$variadic = G__17151__delegate;
return G__17151;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
prais2.logger.tsv_log = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1("Paste rows from session log here") : cljs.core.atom.call(null,"Paste rows from session log here"));
prais2.logger.tsv_header = "ip\tsession-id\ttimestamp\teventkey\teventdata\tdatasource\tpage\tsort-by\tsort-asc\ttable-slider\tpopup-slider\tchart-state\ttheme\ttable-selection\tmap-selection\n";
/**
 * add header to s if not already present
 */
prais2.logger.add_header = (function prais2$logger$add_header(header,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),s.indexOf("ip"))){
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
return cljs.core.rest(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Papa.parse(prais2.logger.add_header(prais2.logger.tsv_header,tsv),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$header,true,cljs.core.cst$kw$delimiter,"\t"], null)))).call(null,"data"));
});
/**
 * convert one pair from string/value form to internal key/value transforming as necessary.
 */
prais2.logger.pair__GT_kv = (function prais2$logger$pair__GT_kv(p__17155){
var vec__17168 = p__17155;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17168,(0),null);
var str_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17168,(1),null);
var renamed_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var pred__17171 = cljs.core._EQ_;
var expr__17172 = key;
if(cljs.core.truth_((pred__17171.cljs$core$IFn$_invoke$arity$2 ? pred__17171.cljs$core$IFn$_invoke$arity$2("table-slider",expr__17172) : pred__17171.call(null,"table-slider",expr__17172)))){
return "slider-axis-value";
} else {
if(cljs.core.truth_((pred__17171.cljs$core$IFn$_invoke$arity$2 ? pred__17171.cljs$core$IFn$_invoke$arity$2("popup-slider",expr__17172) : pred__17171.call(null,"popup-slider",expr__17172)))){
return "detail-slider-axis-value";
} else {
if(cljs.core.truth_((pred__17171.cljs$core$IFn$_invoke$arity$2 ? pred__17171.cljs$core$IFn$_invoke$arity$2("table-selection",expr__17172) : pred__17171.call(null,"table-selection",expr__17172)))){
return "selected-h-code";
} else {
if(cljs.core.truth_((pred__17171.cljs$core$IFn$_invoke$arity$2 ? pred__17171.cljs$core$IFn$_invoke$arity$2("map-selection",expr__17172) : pred__17171.call(null,"map-selection",expr__17172)))){
return "map-h-code";
} else {
if(cljs.core.truth_((pred__17171.cljs$core$IFn$_invoke$arity$2 ? pred__17171.cljs$core$IFn$_invoke$arity$2("sort-asc",expr__17172) : pred__17171.call(null,"sort-asc",expr__17172)))){
return "sort-ascending";
} else {
return key;
}
}
}
}
}
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [renamed_key,(function (){var pred__17174 = cljs.core._EQ_;
var expr__17175 = renamed_key;
if(cljs.core.truth_((pred__17174.cljs$core$IFn$_invoke$arity$2 ? pred__17174.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timestamp,expr__17175) : pred__17174.call(null,cljs.core.cst$kw$timestamp,expr__17175)))){
return (new Date(str_value));
} else {
if(cljs.core.truth_((pred__17174.cljs$core$IFn$_invoke$arity$2 ? pred__17174.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ip,expr__17175) : pred__17174.call(null,cljs.core.cst$kw$ip,expr__17175)))){
return str_value;
} else {
var pred__17177 = cljs.core._EQ_;
var expr__17178 = str_value;
if(cljs.core.truth_((pred__17177.cljs$core$IFn$_invoke$arity$2 ? pred__17177.cljs$core$IFn$_invoke$arity$2(":2014",expr__17178) : pred__17177.call(null,":2014",expr__17178)))){
return cljs.core.cst$kw$2014;
} else {
if(cljs.core.truth_((pred__17177.cljs$core$IFn$_invoke$arity$2 ? pred__17177.cljs$core$IFn$_invoke$arity$2("TRUE",expr__17178) : pred__17177.call(null,"TRUE",expr__17178)))){
return true;
} else {
if(cljs.core.truth_((pred__17177.cljs$core$IFn$_invoke$arity$2 ? pred__17177.cljs$core$IFn$_invoke$arity$2("FALSE",expr__17178) : pred__17177.call(null,"FALSE",expr__17178)))){
return false;
} else {
if(cljs.core.truth_((pred__17177.cljs$core$IFn$_invoke$arity$2 ? pred__17177.cljs$core$IFn$_invoke$arity$2("",expr__17178) : pred__17177.call(null,"",expr__17178)))){
return null;
} else {
if(((function (pred__17177,expr__17178,pred__17174,expr__17175,renamed_key,vec__17168,key,str_value){
return (function (p1__17154_SHARP_){
return ((p1__17154_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__17154_SHARP_ === 'number');
});})(pred__17177,expr__17178,pred__17174,expr__17175,renamed_key,vec__17168,key,str_value))
.call(null,cljs.reader.read_string(str_value))){
return cljs.reader.read_string(str_value);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,row_of_pairs));
});
prais2.logger.rows_of_kvs = (function prais2$logger$rows_of_kvs(rows_of_pairs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17180_SHARP_){
return prais2.logger.row_of_kvs(prais2.logger.pair__GT_kv,p1__17180_SHARP_);
}),rows_of_pairs);
});
/**
 * split row map into log fields and state fields to make a log-entry
 */
prais2.logger.row_map__GT_log_entry = (function prais2$logger$row_map__GT_log_entry(rm){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session_DASH_id.cljs$core$IFn$_invoke$arity$1(rm),cljs.core.cst$kw$timestamp.cljs$core$IFn$_invoke$arity$1(rm),cljs.core.cst$kw$eventkey.cljs$core$IFn$_invoke$arity$1(rm),cljs.core.cst$kw$eventdata.cljs$core$IFn$_invoke$arity$1(rm),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(rm,cljs.core.cst$kw$session_DASH_id,cljs.core.array_seq([cljs.core.cst$kw$timestamp,cljs.core.cst$kw$eventkey,cljs.core.cst$kw$eventdata], 0))], null);
});
prais2.logger.tsv__GT_log = (function prais2$logger$tsv__GT_log(tsv){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(prais2.logger.row_map__GT_log_entry,prais2.logger.rows_of_kvs(prais2.logger.tsv_parse(tsv)));
});
/**
 * No-op - JSON or JSONP GET appears to have restrictive permissions - using textbox paste instead.
 */
prais2.logger.parse_session = (function prais2$logger$parse_session(){
var parsed_tsv = prais2.logger.tsv__GT_log($("#pasted-session").val());
if(cljs.core.truth_(parsed_tsv)){
var ix = cljs.core.count(parsed_tsv);
if(!((ix === (0)))){
var G__17183_17185 = prais2.logger.log_state_index;
var G__17184_17186 = (ix - (1));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17183_17185,G__17184_17186) : cljs.core.reset_BANG_.call(null,G__17183_17185,G__17184_17186));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.logger.log_states,parsed_tsv) : cljs.core.reset_BANG_.call(null,prais2.logger.log_states,parsed_tsv));
} else {
return null;
}
} else {
return null;
}
});
prais2.logger.edit_session_log = (function prais2$logger$edit_session_log(){
return prais2.core.el("");
});
