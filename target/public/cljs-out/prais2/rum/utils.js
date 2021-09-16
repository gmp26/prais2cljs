// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('rum.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
var last_id_13126 = cljs.core.volatile_BANG_((0));
rum.utils.next_id = ((function (last_id_13126){
return (function rum$utils$next_id(){
return cljs.core._vreset_BANG_(last_id_13126,(cljs.core._deref(last_id_13126) + (1)));
});})(last_id_13126))
;
rum.utils.collect = (function rum$utils$collect(fn_key,classes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_key,classes));
});
rum.utils.call_all = (function rum$utils$call_all(var_args){
var args__4521__auto__ = [];
var len__4518__auto___13130 = arguments.length;
var i__4519__auto___13131 = (0);
while(true){
if((i__4519__auto___13131 < len__4518__auto___13130)){
args__4521__auto__.push((arguments[i__4519__auto___13131]));

var G__13132 = (i__4519__auto___13131 + (1));
i__4519__auto___13131 = G__13132;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((2) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((2)),(0),null)):null);
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4522__auto__);
});

rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
});

rum.utils.call_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.utils.call_all.cljs$lang$applyTo = (function (seq13127){
var G__13128 = cljs.core.first(seq13127);
var seq13127__$1 = cljs.core.next(seq13127);
var G__13129 = cljs.core.first(seq13127__$1);
var seq13127__$2 = cljs.core.next(seq13127__$1);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13128,G__13129,seq13127__$2);
});

