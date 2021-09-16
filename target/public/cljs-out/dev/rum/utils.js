// Compiled by ClojureScript 1.10.329 {}
goog.provide('rum.utils');
goog.require('cljs.core');
var last_id_15173 = cljs.core.volatile_BANG_.call(null,(0));
rum.utils.next_id = ((function (last_id_15173){
return (function rum$utils$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_15173,(cljs.core._deref.call(null,last_id_15173) + (1)));
});})(last_id_15173))
;
rum.utils.collect = (function rum$utils$collect(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
rum.utils.call_all = (function rum$utils$call_all(var_args){
var args__4521__auto__ = [];
var len__4518__auto___15177 = arguments.length;
var i__4519__auto___15178 = (0);
while(true){
if((i__4519__auto___15178 < len__4518__auto___15177)){
args__4521__auto__.push((arguments[i__4519__auto___15178]));

var G__15179 = (i__4519__auto___15178 + (1));
i__4519__auto___15178 = G__15179;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((2) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((2)),(0),null)):null);
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4522__auto__);
});

rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.utils.call_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.utils.call_all.cljs$lang$applyTo = (function (seq15174){
var G__15175 = cljs.core.first.call(null,seq15174);
var seq15174__$1 = cljs.core.next.call(null,seq15174);
var G__15176 = cljs.core.first.call(null,seq15174__$1);
var seq15174__$2 = cljs.core.next.call(null,seq15174__$1);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15175,G__15176,seq15174__$2);
});


//# sourceMappingURL=utils.js.map
