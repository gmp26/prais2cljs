// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('cljsjs.jquery');
goog.require('secretary.core');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('prais2.utils');
goog.require('cljsjs.bootstrap');
goog.require('goog.dom.query');
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.call(null,array__$1,(0));
});
prais2.core.app = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"datasource","datasource",-246060221),new cljs.core.Keyword(null,"detail-slider-axis-value","detail-slider-axis-value",1986473254),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"selected-h-code","selected-h-code",-1847693046),new cljs.core.Keyword(null,"slider-axis-value","slider-axis-value",-418577558),new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"pull-out","pull-out",-1858650578),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"need-a-push","need-a-push",178527088),new cljs.core.Keyword(null,"chart-state","chart-state",-1208336238),new cljs.core.Keyword(null,"hosp-data","hosp-data",538848822),new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),new cljs.core.Keyword(null,"sort-ascending","sort-ascending",-1053925574),new cljs.core.Keyword(null,"show-nicor","show-nicor",-79329955)],[new cljs.core.Keyword(null,"2019","2019",935106572),1.0,null,null,1.0,null,new cljs.core.Keyword(null,"home","home",-74557309),false,(12),false,(3),cljs.core.PersistentArrayMap.EMPTY,null,true,false]));
prais2.core.prefix = "/";
prais2.core.token__GT_url = (function prais2$core$token__GT_url(token){
if(cljs.core._EQ_.call(null,prais2.core.prefix,"#")){
return [cljs.core.str("/"),cljs.core.str(prais2.core.prefix),cljs.core.str("/"),cljs.core.str(token)].join('');
} else {
if(cljs.core._EQ_.call(null,token,"home")){
return "/";
} else {
return [cljs.core.str("/"),cljs.core.str(token)].join('');
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

var vec__31454 = prais2.core.token_dispatch_table.call(null,token);
var dispatch_key = cljs.core.nth.call(null,vec__31454,(0),null);
var dispatch_value = cljs.core.nth.call(null,vec__31454,(1),null);
return prais2.core.click__GT_event_bus.call(null,event,dispatch_key,dispatch_value,token);
});
});
/**
 * internal resource locator
 */
prais2.core.irl = (function prais2$core$irl(var_args){
var args31457 = [];
var len__25738__auto___31460 = arguments.length;
var i__25739__auto___31461 = (0);
while(true){
if((i__25739__auto___31461 < len__25738__auto___31460)){
args31457.push((arguments[i__25739__auto___31461]));

var G__31462 = (i__25739__auto___31461 + (1));
i__25739__auto___31461 = G__31462;
continue;
} else {
}
break;
}

var G__31459 = args31457.length;
switch (G__31459) {
case 1:
return prais2.core.irl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return prais2.core.irl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31457.length)].join('')));

}
});

prais2.core.irl.cljs$core$IFn$_invoke$arity$1 = (function (fragment){
return prais2.core.irl.call(null,fragment,false);
});

prais2.core.irl.cljs$core$IFn$_invoke$arity$2 = (function (fragment,static$){
var frag = ((cljs.core._EQ_.call(null,fragment,"home"))?"":fragment);
if(cljs.core.truth_(static$)){
return [cljs.core.str("/"),cljs.core.str(frag)].join('');
} else {
if(cljs.core._EQ_.call(null,prais2.core.prefix,"#")){
return [cljs.core.str("/#/"),cljs.core.str(frag)].join('');
} else {
return [cljs.core.str("/"),cljs.core.str(frag)].join('');
}
}
});

prais2.core.irl.cljs$lang$maxFixedArity = 2;

prais2.core.absolute_path_QMARK_ = (function prais2$core$absolute_path_QMARK_(path){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,path),"/")){
return true;
} else {
if(((cljs.core.count.call(null,path) >= (4))) && (cljs.core._EQ_.call(null,cljs.core.subs.call(null,path,(0),(4)),"http"))){
return true;
} else {
return false;

}
}
});
prais2.core.isrc = (function prais2$core$isrc(var_args){
var args31464 = [];
var len__25738__auto___31471 = arguments.length;
var i__25739__auto___31472 = (0);
while(true){
if((i__25739__auto___31472 < len__25738__auto___31471)){
args31464.push((arguments[i__25739__auto___31472]));

var G__31473 = (i__25739__auto___31472 + (1));
i__25739__auto___31472 = G__31473;
continue;
} else {
}
break;
}

var G__31470 = args31464.length;
switch (G__31470) {
case 1:
return prais2.core.isrc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return prais2.core.isrc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25757__auto__ = (new cljs.core.IndexedSeq(args31464.slice((3)),(0),null));
return prais2.core.isrc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25757__auto__);

}
});

prais2.core.isrc.cljs$core$IFn$_invoke$arity$1 = (function (path){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(cljs.core.truth_(prais2.core.absolute_path_QMARK_.call(null,path))?path:[cljs.core.str("/"),cljs.core.str(path)].join(''))], null);
});

prais2.core.isrc.cljs$core$IFn$_invoke$arity$2 = (function (path,attrs){
return cljs.core.merge.call(null,prais2.core.isrc.call(null,path),attrs);
});

prais2.core.isrc.cljs$core$IFn$_invoke$arity$variadic = (function (path,key,value,key_values){
return cljs.core.merge.call(null,prais2.core.isrc.call(null,path),cljs.core.PersistentHashMap.fromArrays([key],[value]),cljs.core.apply.call(null,cljs.core.hash_map,key_values));
});

prais2.core.isrc.cljs$lang$applyTo = (function (seq31465){
var G__31466 = cljs.core.first.call(null,seq31465);
var seq31465__$1 = cljs.core.next.call(null,seq31465);
var G__31467 = cljs.core.first.call(null,seq31465__$1);
var seq31465__$2 = cljs.core.next.call(null,seq31465__$1);
var G__31468 = cljs.core.first.call(null,seq31465__$2);
var seq31465__$3 = cljs.core.next.call(null,seq31465__$2);
return prais2.core.isrc.cljs$core$IFn$_invoke$arity$variadic(G__31466,G__31467,G__31468,seq31465__$3);
});

prais2.core.isrc.cljs$lang$maxFixedArity = (3);

/**
 * add in local handler for an internal token
 */
prais2.core.internal_ref = (function prais2$core$internal_ref(var_args){
var args31475 = [];
var len__25738__auto___31478 = arguments.length;
var i__25739__auto___31479 = (0);
while(true){
if((i__25739__auto___31479 < len__25738__auto___31478)){
args31475.push((arguments[i__25739__auto___31479]));

var G__31480 = (i__25739__auto___31479 + (1));
i__25739__auto___31479 = G__31480;
continue;
} else {
}
break;
}

var G__31477 = args31475.length;
switch (G__31477) {
case 2:
return prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31475.length)].join('')));

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
var args31482 = [];
var len__25738__auto___31489 = arguments.length;
var i__25739__auto___31490 = (0);
while(true){
if((i__25739__auto___31490 < len__25738__auto___31489)){
args31482.push((arguments[i__25739__auto___31490]));

var G__31491 = (i__25739__auto___31490 + (1));
i__25739__auto___31490 = G__31491;
continue;
} else {
}
break;
}

var G__31488 = args31482.length;
switch (G__31488) {
case 1:
return prais2.core.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return prais2.core.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25757__auto__ = (new cljs.core.IndexedSeq(args31482.slice((3)),(0),null));
return prais2.core.href.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25757__auto__);

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

prais2.core.href.cljs$lang$applyTo = (function (seq31483){
var G__31484 = cljs.core.first.call(null,seq31483);
var seq31483__$1 = cljs.core.next.call(null,seq31483);
var G__31485 = cljs.core.first.call(null,seq31483__$1);
var seq31483__$2 = cljs.core.next.call(null,seq31483__$1);
var G__31486 = cljs.core.first.call(null,seq31483__$2);
var seq31483__$3 = cljs.core.next.call(null,seq31483__$2);
return prais2.core.href.cljs$core$IFn$_invoke$arity$variadic(G__31484,G__31485,G__31486,seq31483__$3);
});

prais2.core.href.cljs$lang$maxFixedArity = (3);

prais2.core.ready = (function prais2$core$ready(handler){
return $(document).ready(handler);
});
/**
 * 
 */
prais2.core.rum_wrap = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function() { 
var G__31493__delegate = function (content){
return sablono.interpreter.interpret.call(null,cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),content));
};
var G__31493 = function (var_args){
var content = null;
if (arguments.length > 0) {
var G__31494__i = 0, G__31494__a = new Array(arguments.length -  0);
while (G__31494__i < G__31494__a.length) {G__31494__a[G__31494__i] = arguments[G__31494__i + 0]; ++G__31494__i;}
  content = new cljs.core.IndexedSeq(G__31494__a,0);
} 
return G__31493__delegate.call(this,content);};
G__31493.cljs$lang$maxFixedArity = 0;
G__31493.cljs$lang$applyTo = (function (arglist__31495){
var content = cljs.core.seq(arglist__31495);
return G__31493__delegate(content);
});
G__31493.cljs$core$IFn$_invoke$arity$variadic = G__31493__delegate;
return G__31493;
})()
);
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"rum-wrap");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31496__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31496 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31497__i = 0, G__31497__a = new Array(arguments.length -  0);
while (G__31497__i < G__31497__a.length) {G__31497__a[G__31497__i] = arguments[G__31497__i + 0]; ++G__31497__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31497__a,0);
} 
return G__31496__delegate.call(this,args__27116__auto__);};
G__31496.cljs$lang$maxFixedArity = 0;
G__31496.cljs$lang$applyTo = (function (arglist__31498){
var args__27116__auto__ = cljs.core.seq(arglist__31498);
return G__31496__delegate(args__27116__auto__);
});
G__31496.cljs$core$IFn$_invoke$arity$variadic = G__31496__delegate;
return G__31496;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
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
var args31503 = [];
var len__25738__auto___31506 = arguments.length;
var i__25739__auto___31507 = (0);
while(true){
if((i__25739__auto___31507 < len__25738__auto___31506)){
args31503.push((arguments[i__25739__auto___31507]));

var G__31508 = (i__25739__auto___31507 + (1));
i__25739__auto___31507 = G__31508;
continue;
} else {
}
break;
}

var G__31505 = args31503.length;
switch (G__31505) {
case 1:
return prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31503.length)].join('')));

}
});

prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$1 = (function (label){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (p1__31499_SHARP_){
cljs.core.prn.call(null,[cljs.core.str(label),cljs.core.str(" did-mount "),cljs.core.str(p1__31499_SHARP_)].join(''));

return p1__31499_SHARP_;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (p1__31500_SHARP_){
cljs.core.prn.call(null,[cljs.core.str(label),cljs.core.str(" will-unmount "),cljs.core.str(p1__31500_SHARP_)].join(''));

return p1__31500_SHARP_;
})], null);
});

prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$2 = (function (label,enabled){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (p1__31501_SHARP_){
if(cljs.core.truth_(enabled)){
cljs.core.prn.call(null,[cljs.core.str(label),cljs.core.str(" did-mount "),cljs.core.str(p1__31501_SHARP_)].join(''));
} else {
}

return p1__31501_SHARP_;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (p1__31502_SHARP_){
if(cljs.core.truth_(enabled)){
cljs.core.prn.call(null,[cljs.core.str(label),cljs.core.str(" will-unmount "),cljs.core.str(p1__31502_SHARP_)].join(''));
} else {
}

return p1__31502_SHARP_;
})], null);
});

prais2.core.monitor_react.cljs$lang$maxFixedArity = 2;

prais2.core.el = (function prais2$core$el(id){
return document.getElementById(id);
});
prais2.core.title_prefix = "Child Heart Surgery: ";
prais2.core.meta_description = (function prais2$core$meta_description(){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__31510_SHARP_){
return cljs.core._EQ_.call(null,p1__31510_SHARP_.name,"description");
}),goog.dom.query("meta")));
});
prais2.core.update_title = (function prais2$core$update_title(title_postfix){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
document.title = [cljs.core.str(prais2.core.title_prefix),cljs.core.str(((typeof title_postfix === 'string')?title_postfix:title_postfix.call(null,state)))].join('');

return state;
})], null);
});
prais2.core.update_description = (function prais2$core$update_description(description){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
prais2.core.meta_description.call(null).content = ((typeof description === 'string')?description:description.call(null,state));

return state;
})], null);
});

//# sourceMappingURL=core.js.map?rel=1629049563036