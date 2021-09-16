// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljsjs.jquery');
goog.require('cljsjs.bootstrap');
goog.require('cljs.core.async');
goog.require('clojure.string');
NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.call(null,array__$1,(0));
});
prais2.core.app = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"datasource","datasource",-246060221),new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046),new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558),new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"pull-out","pull-out",-1858650578),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"need-a-push","need-a-push",178527088),new cljs.core.Keyword(null,"chart-state","chart-state",-1208336238),new cljs.core.Keyword(null,"data-tabs","data-tabs",1859125746),new cljs.core.Keyword(null,"hosp-data","hosp-data",538848822),new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),new cljs.core.Keyword(null,"sort-ascending","sort-ascending",-1053925574),new cljs.core.Keyword(null,"show-nicor","show-nicor",-79329955)],[new cljs.core.Keyword(null,"2019","2019",935106572),1.0,null,null,1.0,null,new cljs.core.Keyword(null,"home","home",-74557309),false,(12),false,(3),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,true,false]));
prais2.core.prefix = "/";
prais2.core.token__GT_url = (function prais2$core$token__GT_url(token){
if(cljs.core._EQ_.call(null,prais2.core.prefix,"#")){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.core.prefix),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
} else {
if(cljs.core._EQ_.call(null,token,"home")){
return "/";
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
}
}
});
prais2.core.get_token_BANG_ = (function prais2$core$get_token_BANG_(){
if(cljs.core._EQ_.call(null,prais2.core.prefix,"#")){
return clojure.string.replace_first.call(null,window.location.hash,"#/","");
} else {
return window.location.pathname;
}
});
prais2.core.event_bus = cljs.core.async.chan.call(null);
prais2.core.event_bus_pub = cljs.core.async.pub.call(null,prais2.core.event_bus,cljs.core.first);
prais2.core.click__GT_event_bus = (function prais2$core$click__GT_event_bus(event,dispatch_key,dispatch_value,token){
if(cljs.core.truth_(token)){
history.pushState(cljs.core.PersistentVector.EMPTY,token,prais2.core.token__GT_url.call(null,token));
} else {
}

event.preventDefault();

event.stopPropagation();

return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch_key,dispatch_value], null));
});
prais2.core.token_dispatch_table = cljs.core.PersistentHashMap.fromArrays(["faq/1/6","faq/5/1","faq/3/0","faq/1","faq/2/4","faq/1/3","data/map","intro","faq/2/1","faq/4","faq/5","faq/0/3","faq/0/0","faq/5/0","faq/1/5","faq/1/4","faq/4/0","faq/0/1","faq/2","faq/3","faq/2/2","faq/0","faq/1/2","faq/2/0","data/animation","home","faq/1/0","faq/3/1","faq/1/1","faq/2/3","data/table","faq/4/1","faq/4/3","faq/3/2","faq/4/2","faqs","data","faq/0/2"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intro","intro",-886090599),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"animation","animation",-1248293244)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"table","table",-564943036)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)]);
prais2.core.internal_link_handler = (function prais2$core$internal_link_handler(token,before_hook){
return (function (event){
if(cljs.core.truth_(before_hook)){
before_hook.call(null);
} else {
}

var vec__21009 = prais2.core.token_dispatch_table.call(null,token);
var dispatch_key = cljs.core.nth.call(null,vec__21009,(0),null);
var dispatch_value = cljs.core.nth.call(null,vec__21009,(1),null);
return prais2.core.click__GT_event_bus.call(null,event,dispatch_key,dispatch_value,token);
});
});
/**
 * internal resource locator
 */
prais2.core.irl = (function prais2$core$irl(var_args){
var G__21013 = arguments.length;
switch (G__21013) {
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
return prais2.core.irl.call(null,fragment,false);
});

prais2.core.irl.cljs$core$IFn$_invoke$arity$2 = (function (fragment,static$){
var frag = ((cljs.core._EQ_.call(null,fragment,"home"))?"":fragment);
if(cljs.core.truth_(static$)){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag)].join('');
} else {
if(cljs.core._EQ_.call(null,prais2.core.prefix,"#")){
return ["/#/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag)].join('');
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag)].join('');
}
}
});

prais2.core.irl.cljs$lang$maxFixedArity = 2;

prais2.core.absolute_path_QMARK_ = (function prais2$core$absolute_path_QMARK_(path){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,path),"/")){
return true;
} else {
if((((cljs.core.count.call(null,path) >= (4))) && (cljs.core._EQ_.call(null,cljs.core.subs.call(null,path,(0),(4)),"http")))){
return true;
} else {
return false;

}
}
});
prais2.core.isrc = (function prais2$core$isrc(var_args){
var G__21020 = arguments.length;
switch (G__21020) {
case 1:
return prais2.core.isrc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return prais2.core.isrc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4533__auto__ = [];
var len__4518__auto___21022 = arguments.length;
var i__4519__auto___21023 = (0);
while(true){
if((i__4519__auto___21023 < len__4518__auto___21022)){
args_arr__4533__auto__.push((arguments[i__4519__auto___21023]));

var G__21024 = (i__4519__auto___21023 + (1));
i__4519__auto___21023 = G__21024;
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
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(cljs.core.truth_(prais2.core.absolute_path_QMARK_.call(null,path))?path:["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''))], null);
});

prais2.core.isrc.cljs$core$IFn$_invoke$arity$2 = (function (path,attrs){
return cljs.core.merge.call(null,prais2.core.isrc.call(null,path),attrs);
});

prais2.core.isrc.cljs$core$IFn$_invoke$arity$variadic = (function (path,key,value,key_values){
return cljs.core.merge.call(null,prais2.core.isrc.call(null,path),cljs.core.PersistentHashMap.fromArrays([key],[value]),cljs.core.apply.call(null,cljs.core.hash_map,key_values));
});

/** @this {Function} */
prais2.core.isrc.cljs$lang$applyTo = (function (seq21016){
var G__21017 = cljs.core.first.call(null,seq21016);
var seq21016__$1 = cljs.core.next.call(null,seq21016);
var G__21018 = cljs.core.first.call(null,seq21016__$1);
var seq21016__$2 = cljs.core.next.call(null,seq21016__$1);
var G__21019 = cljs.core.first.call(null,seq21016__$2);
var seq21016__$3 = cljs.core.next.call(null,seq21016__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21017,G__21018,G__21019,seq21016__$3);
});

prais2.core.isrc.cljs$lang$maxFixedArity = (3);

/**
 * add in local handler for an internal token
 */
prais2.core.internal_ref = (function prais2$core$internal_ref(var_args){
var G__21026 = arguments.length;
switch (G__21026) {
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),prais2.core.irl.call(null,token)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),prais2.core.internal_link_handler.call(null,token,close_modal),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),prais2.core.internal_link_handler.call(null,token,close_modal)], null));
});

prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$1 = (function (token){
return prais2.core.internal_ref.call(null,token,null);
});

prais2.core.internal_ref.cljs$lang$maxFixedArity = 2;

prais2.core.href = (function prais2$core$href(var_args){
var G__21033 = arguments.length;
switch (G__21033) {
case 1:
return prais2.core.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return prais2.core.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4533__auto__ = [];
var len__4518__auto___21035 = arguments.length;
var i__4519__auto___21036 = (0);
while(true){
if((i__4519__auto___21036 < len__4518__auto___21035)){
args_arr__4533__auto__.push((arguments[i__4519__auto___21036]));

var G__21037 = (i__4519__auto___21036 + (1));
i__4519__auto___21036 = G__21037;
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
if(cljs.core.truth_(prais2.core.absolute_path_QMARK_.call(null,path))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),path], null);
} else {
return prais2.core.internal_ref.call(null,path);
}
});

prais2.core.href.cljs$core$IFn$_invoke$arity$2 = (function (path,attrs){
if(cljs.core.map_QMARK_.call(null,attrs)){
return cljs.core.merge.call(null,prais2.core.href.call(null,path),attrs);
} else {
return prais2.core.internal_ref.call(null,path,attrs);
}
});

prais2.core.href.cljs$core$IFn$_invoke$arity$variadic = (function (path,key,value,key_values){
return cljs.core.merge.call(null,prais2.core.href.call(null,path),cljs.core.PersistentHashMap.fromArrays([key],[value]),cljs.core.apply.call(null,cljs.core.hash_map,key_values));
});

/** @this {Function} */
prais2.core.href.cljs$lang$applyTo = (function (seq21029){
var G__21030 = cljs.core.first.call(null,seq21029);
var seq21029__$1 = cljs.core.next.call(null,seq21029);
var G__21031 = cljs.core.first.call(null,seq21029__$1);
var seq21029__$2 = cljs.core.next.call(null,seq21029__$1);
var G__21032 = cljs.core.first.call(null,seq21029__$2);
var seq21029__$3 = cljs.core.next.call(null,seq21029__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21030,G__21031,G__21032,seq21029__$3);
});

prais2.core.href.cljs$lang$maxFixedArity = (3);

prais2.core.ready = (function prais2$core$ready(handler){
return $(document).ready(handler);
});
/**
 * 
 */
prais2.core.rum_wrap = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function() { 
var G__21038__delegate = function (content){
return sablono.interpreter.interpret.call(null,cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),content));
};
var G__21038 = function (var_args){
var content = null;
if (arguments.length > 0) {
var G__21039__i = 0, G__21039__a = new Array(arguments.length -  0);
while (G__21039__i < G__21039__a.length) {G__21039__a[G__21039__i] = arguments[G__21039__i + 0]; ++G__21039__i;}
  content = new cljs.core.IndexedSeq(G__21039__a,0,null);
} 
return G__21038__delegate.call(this,content);};
G__21038.cljs$lang$maxFixedArity = 0;
G__21038.cljs$lang$applyTo = (function (arglist__21040){
var content = cljs.core.seq(arglist__21040);
return G__21038__delegate(content);
});
G__21038.cljs$core$IFn$_invoke$arity$variadic = G__21038__delegate;
return G__21038;
})()
);
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"rum-wrap");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21041__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21041 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21042__i = 0, G__21042__a = new Array(arguments.length -  0);
while (G__21042__i < G__21042__a.length) {G__21042__a[G__21042__i] = arguments[G__21042__i + 0]; ++G__21042__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21042__a,0,null);
} 
return G__21041__delegate.call(this,args__16261__auto__);};
G__21041.cljs$lang$maxFixedArity = 0;
G__21041.cljs$lang$applyTo = (function (arglist__21043){
var args__16261__auto__ = cljs.core.seq(arglist__21043);
return G__21041__delegate(args__16261__auto__);
});
G__21041.cljs$core$IFn$_invoke$arity$variadic = G__21041__delegate;
return G__21041;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
prais2.core.bs_collapse = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
prais2.core.ready.call(null,(function (){
return $("[data-toggle=\"collapse\"]").collapse();
}));

return state;
})], null);
prais2.core.bs_tooltip = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
prais2.core.ready.call(null,(function (){
return $("[data-toggle=\"tooltip\"]").tooltip().tooltip();
}));

return state;
})], null);
prais2.core.bs_popover = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
prais2.core.ready.call(null,(function (){
return $("[data-toggle=\"popover\"]").popover();
}));

return state;
})], null);
prais2.core.monitor_react = (function prais2$core$monitor_react(var_args){
var G__21049 = arguments.length;
switch (G__21049) {
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (p1__21044_SHARP_){
cljs.core.prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," did-mount ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21044_SHARP_)].join(''));

return p1__21044_SHARP_;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (p1__21045_SHARP_){
cljs.core.prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," will-unmount ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21045_SHARP_)].join(''));

return p1__21045_SHARP_;
})], null);
});

prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$2 = (function (label,enabled){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (p1__21046_SHARP_){
if(cljs.core.truth_(enabled)){
cljs.core.prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," did-mount ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21046_SHARP_)].join(''));
} else {
}

return p1__21046_SHARP_;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (p1__21047_SHARP_){
if(cljs.core.truth_(enabled)){
cljs.core.prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," will-unmount ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21047_SHARP_)].join(''));
} else {
}

return p1__21047_SHARP_;
})], null);
});

prais2.core.monitor_react.cljs$lang$maxFixedArity = 2;

prais2.core.el = (function prais2$core$el(id){
return document.getElementById(id);
});
prais2.core.title_prefix = "Child Heart Surgery: ";
prais2.core.meta_description = (function prais2$core$meta_description(){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__21051_SHARP_){
return cljs.core._EQ_.call(null,p1__21051_SHARP_.name,"description");
}),document.querySelector("meta")));
});
prais2.core.update_title = (function prais2$core$update_title(title_postfix){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
document.title = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.core.title_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof title_postfix === 'string')?title_postfix:title_postfix.call(null,state)))].join('');

return state;
})], null);
});

//# sourceMappingURL=core.js.map
