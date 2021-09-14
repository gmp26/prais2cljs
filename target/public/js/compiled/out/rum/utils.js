// Compiled by ClojureScript 1.9.36 {}
goog.provide('rum.utils');
goog.require('cljs.core');
var last_id_25926 = cljs.core.volatile_BANG_.call(null,(0));
rum.utils.next_id = ((function (last_id_25926){
return (function rum$utils$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_25926,(cljs.core._deref.call(null,last_id_25926) + (1)));
});})(last_id_25926))
;
rum.utils.collect = (function rum$utils$collect(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
rum.utils.call_all = (function rum$utils$call_all(var_args){
var args__25745__auto__ = [];
var len__25738__auto___25930 = arguments.length;
var i__25739__auto___25931 = (0);
while(true){
if((i__25739__auto___25931 < len__25738__auto___25930)){
args__25745__auto__.push((arguments[i__25739__auto___25931]));

var G__25932 = (i__25739__auto___25931 + (1));
i__25739__auto___25931 = G__25932;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((2) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((2)),(0),null)):null);
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25746__auto__);
});

rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.utils.call_all.cljs$lang$maxFixedArity = (2);

rum.utils.call_all.cljs$lang$applyTo = (function (seq25927){
var G__25928 = cljs.core.first.call(null,seq25927);
var seq25927__$1 = cljs.core.next.call(null,seq25927);
var G__25929 = cljs.core.first.call(null,seq25927__$1);
var seq25927__$2 = cljs.core.next.call(null,seq25927__$1);
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic(G__25928,G__25929,seq25927__$2);
});


//# sourceMappingURL=utils.js.map?rel=1629049553221