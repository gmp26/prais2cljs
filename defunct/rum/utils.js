// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('rum.utils');
goog.require('cljs.core');
var last_id_13952 = cljs.core.volatile_BANG_((0));
rum.utils.next_id = ((function (last_id_13952){
return (function rum$utils$next_id(){
return cljs.core._vreset_BANG_(last_id_13952,(cljs.core._deref(last_id_13952) + (1)));
});})(last_id_13952))
;
rum.utils.collect = (function rum$utils$collect(fn_key,classes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_key,classes));
});
rum.utils.call_all = (function rum$utils$call_all(var_args){
var args__7303__auto__ = [];
var len__7296__auto___13956 = arguments.length;
var i__7297__auto___13957 = (0);
while(true){
if((i__7297__auto___13957 < len__7296__auto___13956)){
args__7303__auto__.push((arguments[i__7297__auto___13957]));

var G__13958 = (i__7297__auto___13957 + (1));
i__7297__auto___13957 = G__13958;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((2) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((2)),(0),null)):null);
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);
});

rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
});

rum.utils.call_all.cljs$lang$maxFixedArity = (2);

rum.utils.call_all.cljs$lang$applyTo = (function (seq13953){
var G__13954 = cljs.core.first(seq13953);
var seq13953__$1 = cljs.core.next(seq13953);
var G__13955 = cljs.core.first(seq13953__$1);
var seq13953__$2 = cljs.core.next(seq13953__$1);
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic(G__13954,G__13955,seq13953__$2);
});

