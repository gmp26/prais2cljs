// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('prais2.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$2(array__$1,(0));
});
prais2.core.app = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$datasource,cljs.core.cst$kw$detail_DASH_slider_DASH_axis_DASH_value,cljs.core.cst$kw$section,cljs.core.cst$kw$selected_DASH_h_DASH_code,cljs.core.cst$kw$slider_DASH_axis_DASH_value,cljs.core.cst$kw$map_DASH_h_DASH_code,cljs.core.cst$kw$page,cljs.core.cst$kw$pull_DASH_out,cljs.core.cst$kw$theme,cljs.core.cst$kw$need_DASH_a_DASH_push,cljs.core.cst$kw$chart_DASH_state,cljs.core.cst$kw$data_DASH_tabs,cljs.core.cst$kw$hosp_DASH_data,cljs.core.cst$kw$sort_DASH_by,cljs.core.cst$kw$sort_DASH_ascending,cljs.core.cst$kw$show_DASH_nicor],[cljs.core.cst$kw$2019,1.0,null,null,1.0,null,cljs.core.cst$kw$home,false,(12),false,(3),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,true,false]));
prais2.core.prefix = "/";
prais2.core.token__GT_url = (function prais2$core$token__GT_url(token){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prais2.core.prefix,"#")){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.core.prefix),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"home")){
return "/";
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
}
}
});
prais2.core.get_token_BANG_ = (function prais2$core$get_token_BANG_(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prais2.core.prefix,"#")){
return clojure.string.replace_first(window.location.hash,"#/","");
} else {
return window.location.pathname;
}
});
prais2.core.event_bus = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
prais2.core.event_bus_pub = cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,cljs.core.first);
prais2.core.click__GT_event_bus = (function prais2$core$click__GT_event_bus(event,dispatch_key,dispatch_value,token){
if(cljs.core.truth_(token)){
history.pushState(cljs.core.PersistentVector.EMPTY,token,prais2.core.token__GT_url(token));
} else {
}

event.preventDefault();

event.stopPropagation();

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch_key,dispatch_value], null));
});
prais2.core.token_dispatch_table = cljs.core.PersistentHashMap.fromArrays(["faq/1/6","faq/5/1","faq/3/0","faq/1","faq/2/4","faq/1/3","data/map","intro","faq/2/1","faq/4","faq/5","faq/0/3","faq/0/0","faq/5/0","faq/1/5","faq/1/4","faq/4/0","faq/0/1","faq/2","faq/3","faq/2/2","faq/0","faq/1/2","faq/2/0","data/animation","home","faq/1/0","faq/3/1","faq/1/1","faq/2/3","data/table","faq/4/1","faq/4/3","faq/3/2","faq/4/2","faqs","data","faq/0/2"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$intro,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$animation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$table], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)]);
prais2.core.internal_link_handler = (function prais2$core$internal_link_handler(token,before_hook){
return (function (event){
if(cljs.core.truth_(before_hook)){
(before_hook.cljs$core$IFn$_invoke$arity$0 ? before_hook.cljs$core$IFn$_invoke$arity$0() : before_hook.call(null));
} else {
}

var vec__18465 = (prais2.core.token_dispatch_table.cljs$core$IFn$_invoke$arity$1 ? prais2.core.token_dispatch_table.cljs$core$IFn$_invoke$arity$1(token) : prais2.core.token_dispatch_table.call(null,token));
var dispatch_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18465,(0),null);
var dispatch_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18465,(1),null);
return prais2.core.click__GT_event_bus(event,dispatch_key,dispatch_value,token);
});
});
/**
 * internal resource locator
 */
prais2.core.irl = (function prais2$core$irl(var_args){
var G__18469 = arguments.length;
switch (G__18469) {
case 1:
return prais2.core.irl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return prais2.core.irl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

prais2.core.irl.cljs$core$IFn$_invoke$arity$1 = (function (fragment){
return prais2.core.irl.cljs$core$IFn$_invoke$arity$2(fragment,false);
});

prais2.core.irl.cljs$core$IFn$_invoke$arity$2 = (function (fragment,static$){
var frag = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fragment,"home"))?"":fragment);
if(cljs.core.truth_(static$)){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prais2.core.prefix,"#")){
return ["/#/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag)].join('');
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag)].join('');
}
}
});

prais2.core.irl.cljs$lang$maxFixedArity = 2;

prais2.core.absolute_path_QMARK_ = (function prais2$core$absolute_path_QMARK_(path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path),"/")){
return true;
} else {
if((((cljs.core.count(path) >= (4))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(path,(0),(4)),"http")))){
return true;
} else {
return false;

}
}
});
prais2.core.isrc = (function prais2$core$isrc(var_args){
var G__18476 = arguments.length;
switch (G__18476) {
case 1:
return prais2.core.isrc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return prais2.core.isrc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4533__auto__ = [];
var len__4518__auto___18478 = arguments.length;
var i__4519__auto___18479 = (0);
while(true){
if((i__4519__auto___18479 < len__4518__auto___18478)){
args_arr__4533__auto__.push((arguments[i__4519__auto___18479]));

var G__18480 = (i__4519__auto___18479 + (1));
i__4519__auto___18479 = G__18480;
continue;
} else {
}
break;
}

var argseq__4534__auto__ = (new cljs.core.IndexedSeq(args_arr__4533__auto__.slice((3)),(0),null));
return prais2.core.isrc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4534__auto__);

}
});

prais2.core.isrc.cljs$core$IFn$_invoke$arity$1 = (function (path){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,(cljs.core.truth_(prais2.core.absolute_path_QMARK_(path))?path:["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''))], null);
});

prais2.core.isrc.cljs$core$IFn$_invoke$arity$2 = (function (path,attrs){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prais2.core.isrc.cljs$core$IFn$_invoke$arity$1(path),attrs], 0));
});

prais2.core.isrc.cljs$core$IFn$_invoke$arity$variadic = (function (path,key,value,key_values){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prais2.core.isrc.cljs$core$IFn$_invoke$arity$1(path),cljs.core.PersistentHashMap.fromArrays([key],[value]),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,key_values)], 0));
});

/** @this {Function} */
prais2.core.isrc.cljs$lang$applyTo = (function (seq18472){
var G__18473 = cljs.core.first(seq18472);
var seq18472__$1 = cljs.core.next(seq18472);
var G__18474 = cljs.core.first(seq18472__$1);
var seq18472__$2 = cljs.core.next(seq18472__$1);
var G__18475 = cljs.core.first(seq18472__$2);
var seq18472__$3 = cljs.core.next(seq18472__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18473,G__18474,G__18475,seq18472__$3);
});

prais2.core.isrc.cljs$lang$maxFixedArity = (3);

/**
 * add in local handler for an internal token
 */
prais2.core.internal_ref = (function prais2$core$internal_ref(var_args){
var G__18482 = arguments.length;
switch (G__18482) {
case 2:
return prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$2 = (function (token,close_modal){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,prais2.core.irl.cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,prais2.core.internal_link_handler(token,close_modal),cljs.core.cst$kw$on_DASH_touch_DASH_start,prais2.core.internal_link_handler(token,close_modal)], null)], 0));
});

prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$1 = (function (token){
return prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$2(token,null);
});

prais2.core.internal_ref.cljs$lang$maxFixedArity = 2;

prais2.core.href = (function prais2$core$href(var_args){
var G__18489 = arguments.length;
switch (G__18489) {
case 1:
return prais2.core.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return prais2.core.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4533__auto__ = [];
var len__4518__auto___18491 = arguments.length;
var i__4519__auto___18492 = (0);
while(true){
if((i__4519__auto___18492 < len__4518__auto___18491)){
args_arr__4533__auto__.push((arguments[i__4519__auto___18492]));

var G__18493 = (i__4519__auto___18492 + (1));
i__4519__auto___18492 = G__18493;
continue;
} else {
}
break;
}

var argseq__4534__auto__ = (new cljs.core.IndexedSeq(args_arr__4533__auto__.slice((3)),(0),null));
return prais2.core.href.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4534__auto__);

}
});

prais2.core.href.cljs$core$IFn$_invoke$arity$1 = (function (path){
if(cljs.core.truth_(prais2.core.absolute_path_QMARK_(path))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,path], null);
} else {
return prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$1(path);
}
});

prais2.core.href.cljs$core$IFn$_invoke$arity$2 = (function (path,attrs){
if(cljs.core.map_QMARK_(attrs)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prais2.core.href.cljs$core$IFn$_invoke$arity$1(path),attrs], 0));
} else {
return prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$2(path,attrs);
}
});

prais2.core.href.cljs$core$IFn$_invoke$arity$variadic = (function (path,key,value,key_values){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prais2.core.href.cljs$core$IFn$_invoke$arity$1(path),cljs.core.PersistentHashMap.fromArrays([key],[value]),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,key_values)], 0));
});

/** @this {Function} */
prais2.core.href.cljs$lang$applyTo = (function (seq18485){
var G__18486 = cljs.core.first(seq18485);
var seq18485__$1 = cljs.core.next(seq18485);
var G__18487 = cljs.core.first(seq18485__$1);
var seq18485__$2 = cljs.core.next(seq18485__$1);
var G__18488 = cljs.core.first(seq18485__$2);
var seq18485__$3 = cljs.core.next(seq18485__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18486,G__18487,G__18488,seq18485__$3);
});

prais2.core.href.cljs$lang$maxFixedArity = (3);

prais2.core.ready = (function prais2$core$ready(handler){
return $(document).ready(handler);
});
/**
 * 
 */
prais2.core.rum_wrap = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function() { 
var G__18494__delegate = function (content){
return sablono.interpreter.interpret(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null),content));
};
var G__18494 = function (var_args){
var content = null;
if (arguments.length > 0) {
var G__18495__i = 0, G__18495__a = new Array(arguments.length -  0);
while (G__18495__i < G__18495__a.length) {G__18495__a[G__18495__i] = arguments[G__18495__i + 0]; ++G__18495__i;}
  content = new cljs.core.IndexedSeq(G__18495__a,0,null);
} 
return G__18494__delegate.call(this,content);};
G__18494.cljs$lang$maxFixedArity = 0;
G__18494.cljs$lang$applyTo = (function (arglist__18496){
var content = cljs.core.seq(arglist__18496);
return G__18494__delegate(content);
});
G__18494.cljs$core$IFn$_invoke$arity$variadic = G__18494__delegate;
return G__18494;
})()
);
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"rum-wrap");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__18497__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__18497 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__18498__i = 0, G__18498__a = new Array(arguments.length -  0);
while (G__18498__i < G__18498__a.length) {G__18498__a[G__18498__i] = arguments[G__18498__i + 0]; ++G__18498__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__18498__a,0,null);
} 
return G__18497__delegate.call(this,args__14302__auto__);};
G__18497.cljs$lang$maxFixedArity = 0;
G__18497.cljs$lang$applyTo = (function (arglist__18499){
var args__14302__auto__ = cljs.core.seq(arglist__18499);
return G__18497__delegate(args__14302__auto__);
});
G__18497.cljs$core$IFn$_invoke$arity$variadic = G__18497__delegate;
return G__18497;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
prais2.core.bs_collapse = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_mount,(function (state){
prais2.core.ready((function (){
return $("[data-toggle=\"collapse\"]").collapse();
}));

return state;
})], null);
prais2.core.bs_tooltip = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_mount,(function (state){
prais2.core.ready((function (){
return $("[data-toggle=\"tooltip\"]").tooltip().tooltip();
}));

return state;
})], null);
prais2.core.bs_popover = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_mount,(function (state){
prais2.core.ready((function (){
return $("[data-toggle=\"popover\"]").popover();
}));

return state;
})], null);
prais2.core.monitor_react = (function prais2$core$monitor_react(var_args){
var G__18505 = arguments.length;
switch (G__18505) {
case 1:
return prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$1 = (function (label){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (p1__18500_SHARP_){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," did-mount ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18500_SHARP_)].join('')], 0));

return p1__18500_SHARP_;
}),cljs.core.cst$kw$will_DASH_unmount,(function (p1__18501_SHARP_){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," will-unmount ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18501_SHARP_)].join('')], 0));

return p1__18501_SHARP_;
})], null);
});

prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$2 = (function (label,enabled){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (p1__18502_SHARP_){
if(cljs.core.truth_(enabled)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," did-mount ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18502_SHARP_)].join('')], 0));
} else {
}

return p1__18502_SHARP_;
}),cljs.core.cst$kw$will_DASH_unmount,(function (p1__18503_SHARP_){
if(cljs.core.truth_(enabled)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," will-unmount ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18503_SHARP_)].join('')], 0));
} else {
}

return p1__18503_SHARP_;
})], null);
});

prais2.core.monitor_react.cljs$lang$maxFixedArity = 2;

prais2.core.el = (function prais2$core$el(id){
return document.getElementById(id);
});
prais2.core.title_prefix = "Child Heart Surgery: ";
prais2.core.meta_description = (function prais2$core$meta_description(){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18507_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__18507_SHARP_.name,"description");
}),document.querySelector("meta")));
});
prais2.core.update_title = (function prais2$core$update_title(title_postfix){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$did_DASH_mount,(function (state){
document.title = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.core.title_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof title_postfix === 'string')?title_postfix:(title_postfix.cljs$core$IFn$_invoke$arity$1 ? title_postfix.cljs$core$IFn$_invoke$arity$1(state) : title_postfix.call(null,state))))].join('');

return state;
})], null);
});
