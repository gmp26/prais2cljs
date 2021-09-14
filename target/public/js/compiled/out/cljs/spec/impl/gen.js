// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25270__auto__,writer__25271__auto__,opt__25272__auto__){
return cljs.core._write.call(null,writer__25271__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32867 = arguments.length;
var i__25740__auto___32868 = (0);
while(true){
if((i__25740__auto___32868 < len__25739__auto___32867)){
args__25746__auto__.push((arguments[i__25740__auto___32868]));

var G__32869 = (i__25740__auto___32868 + (1));
i__25740__auto___32868 = G__32869;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq32866){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32866));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32871 = arguments.length;
var i__25740__auto___32872 = (0);
while(true){
if((i__25740__auto___32872 < len__25739__auto___32871)){
args__25746__auto__.push((arguments[i__25740__auto___32872]));

var G__32873 = (i__25740__auto___32872 + (1));
i__25740__auto___32872 = G__32873;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq32870){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32870));
});

var g_QMARK__32874 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_32875 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32874){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32874))
,null));
var mkg_32876 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32874,g_32875){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32874,g_32875))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__32874,g_32875,mkg_32876){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__32874).call(null,x);
});})(g_QMARK__32874,g_32875,mkg_32876))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__32874,g_32875,mkg_32876){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_32876).call(null,gfn);
});})(g_QMARK__32874,g_32875,mkg_32876))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__32874,g_32875,mkg_32876){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_32875).call(null,generator);
});})(g_QMARK__32874,g_32875,mkg_32876))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29698__auto___32892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__29698__auto___32892){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32893 = arguments.length;
var i__25740__auto___32894 = (0);
while(true){
if((i__25740__auto___32894 < len__25739__auto___32893)){
args__25746__auto__.push((arguments[i__25740__auto___32894]));

var G__32895 = (i__25740__auto___32894 + (1));
i__25740__auto___32894 = G__32895;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32892))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32892){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32892),args);
});})(g__29698__auto___32892))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__29698__auto___32892){
return (function (seq32877){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32877));
});})(g__29698__auto___32892))
;


var g__29698__auto___32896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__29698__auto___32896){
return (function cljs$spec$impl$gen$list(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32897 = arguments.length;
var i__25740__auto___32898 = (0);
while(true){
if((i__25740__auto___32898 < len__25739__auto___32897)){
args__25746__auto__.push((arguments[i__25740__auto___32898]));

var G__32899 = (i__25740__auto___32898 + (1));
i__25740__auto___32898 = G__32899;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32896))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32896){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32896),args);
});})(g__29698__auto___32896))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__29698__auto___32896){
return (function (seq32878){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32878));
});})(g__29698__auto___32896))
;


var g__29698__auto___32900 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__29698__auto___32900){
return (function cljs$spec$impl$gen$map(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32901 = arguments.length;
var i__25740__auto___32902 = (0);
while(true){
if((i__25740__auto___32902 < len__25739__auto___32901)){
args__25746__auto__.push((arguments[i__25740__auto___32902]));

var G__32903 = (i__25740__auto___32902 + (1));
i__25740__auto___32902 = G__32903;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32900))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32900){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32900),args);
});})(g__29698__auto___32900))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__29698__auto___32900){
return (function (seq32879){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32879));
});})(g__29698__auto___32900))
;


var g__29698__auto___32904 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__29698__auto___32904){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32905 = arguments.length;
var i__25740__auto___32906 = (0);
while(true){
if((i__25740__auto___32906 < len__25739__auto___32905)){
args__25746__auto__.push((arguments[i__25740__auto___32906]));

var G__32907 = (i__25740__auto___32906 + (1));
i__25740__auto___32906 = G__32907;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32904))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32904){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32904),args);
});})(g__29698__auto___32904))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__29698__auto___32904){
return (function (seq32880){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32880));
});})(g__29698__auto___32904))
;


var g__29698__auto___32908 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__29698__auto___32908){
return (function cljs$spec$impl$gen$set(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32909 = arguments.length;
var i__25740__auto___32910 = (0);
while(true){
if((i__25740__auto___32910 < len__25739__auto___32909)){
args__25746__auto__.push((arguments[i__25740__auto___32910]));

var G__32911 = (i__25740__auto___32910 + (1));
i__25740__auto___32910 = G__32911;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32908))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32908){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32908),args);
});})(g__29698__auto___32908))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__29698__auto___32908){
return (function (seq32881){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32881));
});})(g__29698__auto___32908))
;


var g__29698__auto___32912 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__29698__auto___32912){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32913 = arguments.length;
var i__25740__auto___32914 = (0);
while(true){
if((i__25740__auto___32914 < len__25739__auto___32913)){
args__25746__auto__.push((arguments[i__25740__auto___32914]));

var G__32915 = (i__25740__auto___32914 + (1));
i__25740__auto___32914 = G__32915;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32912))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32912){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32912),args);
});})(g__29698__auto___32912))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__29698__auto___32912){
return (function (seq32882){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32882));
});})(g__29698__auto___32912))
;


var g__29698__auto___32916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__29698__auto___32916){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32917 = arguments.length;
var i__25740__auto___32918 = (0);
while(true){
if((i__25740__auto___32918 < len__25739__auto___32917)){
args__25746__auto__.push((arguments[i__25740__auto___32918]));

var G__32919 = (i__25740__auto___32918 + (1));
i__25740__auto___32918 = G__32919;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32916))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32916){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32916),args);
});})(g__29698__auto___32916))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__29698__auto___32916){
return (function (seq32883){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32883));
});})(g__29698__auto___32916))
;


var g__29698__auto___32920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__29698__auto___32920){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32921 = arguments.length;
var i__25740__auto___32922 = (0);
while(true){
if((i__25740__auto___32922 < len__25739__auto___32921)){
args__25746__auto__.push((arguments[i__25740__auto___32922]));

var G__32923 = (i__25740__auto___32922 + (1));
i__25740__auto___32922 = G__32923;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32920))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32920){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32920),args);
});})(g__29698__auto___32920))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__29698__auto___32920){
return (function (seq32884){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32884));
});})(g__29698__auto___32920))
;


var g__29698__auto___32924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__29698__auto___32924){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32925 = arguments.length;
var i__25740__auto___32926 = (0);
while(true){
if((i__25740__auto___32926 < len__25739__auto___32925)){
args__25746__auto__.push((arguments[i__25740__auto___32926]));

var G__32927 = (i__25740__auto___32926 + (1));
i__25740__auto___32926 = G__32927;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32924))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32924){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32924),args);
});})(g__29698__auto___32924))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__29698__auto___32924){
return (function (seq32885){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32885));
});})(g__29698__auto___32924))
;


var g__29698__auto___32928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__29698__auto___32928){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32929 = arguments.length;
var i__25740__auto___32930 = (0);
while(true){
if((i__25740__auto___32930 < len__25739__auto___32929)){
args__25746__auto__.push((arguments[i__25740__auto___32930]));

var G__32931 = (i__25740__auto___32930 + (1));
i__25740__auto___32930 = G__32931;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32928))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32928){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32928),args);
});})(g__29698__auto___32928))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__29698__auto___32928){
return (function (seq32886){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32886));
});})(g__29698__auto___32928))
;


var g__29698__auto___32932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__29698__auto___32932){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32933 = arguments.length;
var i__25740__auto___32934 = (0);
while(true){
if((i__25740__auto___32934 < len__25739__auto___32933)){
args__25746__auto__.push((arguments[i__25740__auto___32934]));

var G__32935 = (i__25740__auto___32934 + (1));
i__25740__auto___32934 = G__32935;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32932))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32932){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32932),args);
});})(g__29698__auto___32932))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__29698__auto___32932){
return (function (seq32887){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32887));
});})(g__29698__auto___32932))
;


var g__29698__auto___32936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__29698__auto___32936){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32937 = arguments.length;
var i__25740__auto___32938 = (0);
while(true){
if((i__25740__auto___32938 < len__25739__auto___32937)){
args__25746__auto__.push((arguments[i__25740__auto___32938]));

var G__32939 = (i__25740__auto___32938 + (1));
i__25740__auto___32938 = G__32939;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32936))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32936){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32936),args);
});})(g__29698__auto___32936))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__29698__auto___32936){
return (function (seq32888){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32888));
});})(g__29698__auto___32936))
;


var g__29698__auto___32940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__29698__auto___32940){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32941 = arguments.length;
var i__25740__auto___32942 = (0);
while(true){
if((i__25740__auto___32942 < len__25739__auto___32941)){
args__25746__auto__.push((arguments[i__25740__auto___32942]));

var G__32943 = (i__25740__auto___32942 + (1));
i__25740__auto___32942 = G__32943;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32940))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32940){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32940),args);
});})(g__29698__auto___32940))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__29698__auto___32940){
return (function (seq32889){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32889));
});})(g__29698__auto___32940))
;


var g__29698__auto___32944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__29698__auto___32944){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32945 = arguments.length;
var i__25740__auto___32946 = (0);
while(true){
if((i__25740__auto___32946 < len__25739__auto___32945)){
args__25746__auto__.push((arguments[i__25740__auto___32946]));

var G__32947 = (i__25740__auto___32946 + (1));
i__25740__auto___32946 = G__32947;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32944))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32944){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32944),args);
});})(g__29698__auto___32944))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__29698__auto___32944){
return (function (seq32890){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32890));
});})(g__29698__auto___32944))
;


var g__29698__auto___32948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__29698__auto___32948){
return (function cljs$spec$impl$gen$return(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32949 = arguments.length;
var i__25740__auto___32950 = (0);
while(true){
if((i__25740__auto___32950 < len__25739__auto___32949)){
args__25746__auto__.push((arguments[i__25740__auto___32950]));

var G__32951 = (i__25740__auto___32950 + (1));
i__25740__auto___32950 = G__32951;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29698__auto___32948))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29698__auto___32948){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29698__auto___32948),args);
});})(g__29698__auto___32948))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__29698__auto___32948){
return (function (seq32891){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32891));
});})(g__29698__auto___32948))
;

var g__29720__auto___32973 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__29720__auto___32973){
return (function cljs$spec$impl$gen$any(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32974 = arguments.length;
var i__25740__auto___32975 = (0);
while(true){
if((i__25740__auto___32975 < len__25739__auto___32974)){
args__25746__auto__.push((arguments[i__25740__auto___32975]));

var G__32976 = (i__25740__auto___32975 + (1));
i__25740__auto___32975 = G__32976;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___32973))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___32973){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___32973);
});})(g__29720__auto___32973))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__29720__auto___32973){
return (function (seq32952){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32952));
});})(g__29720__auto___32973))
;


var g__29720__auto___32977 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__29720__auto___32977){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32978 = arguments.length;
var i__25740__auto___32979 = (0);
while(true){
if((i__25740__auto___32979 < len__25739__auto___32978)){
args__25746__auto__.push((arguments[i__25740__auto___32979]));

var G__32980 = (i__25740__auto___32979 + (1));
i__25740__auto___32979 = G__32980;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___32977))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___32977){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___32977);
});})(g__29720__auto___32977))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__29720__auto___32977){
return (function (seq32953){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32953));
});})(g__29720__auto___32977))
;


var g__29720__auto___32981 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__29720__auto___32981){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32982 = arguments.length;
var i__25740__auto___32983 = (0);
while(true){
if((i__25740__auto___32983 < len__25739__auto___32982)){
args__25746__auto__.push((arguments[i__25740__auto___32983]));

var G__32984 = (i__25740__auto___32983 + (1));
i__25740__auto___32983 = G__32984;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___32981))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___32981){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___32981);
});})(g__29720__auto___32981))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__29720__auto___32981){
return (function (seq32954){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32954));
});})(g__29720__auto___32981))
;


var g__29720__auto___32985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__29720__auto___32985){
return (function cljs$spec$impl$gen$char(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32986 = arguments.length;
var i__25740__auto___32987 = (0);
while(true){
if((i__25740__auto___32987 < len__25739__auto___32986)){
args__25746__auto__.push((arguments[i__25740__auto___32987]));

var G__32988 = (i__25740__auto___32987 + (1));
i__25740__auto___32987 = G__32988;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___32985))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___32985){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___32985);
});})(g__29720__auto___32985))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__29720__auto___32985){
return (function (seq32955){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32955));
});})(g__29720__auto___32985))
;


var g__29720__auto___32989 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__29720__auto___32989){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32990 = arguments.length;
var i__25740__auto___32991 = (0);
while(true){
if((i__25740__auto___32991 < len__25739__auto___32990)){
args__25746__auto__.push((arguments[i__25740__auto___32991]));

var G__32992 = (i__25740__auto___32991 + (1));
i__25740__auto___32991 = G__32992;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___32989))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___32989){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___32989);
});})(g__29720__auto___32989))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__29720__auto___32989){
return (function (seq32956){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32956));
});})(g__29720__auto___32989))
;


var g__29720__auto___32993 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__29720__auto___32993){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32994 = arguments.length;
var i__25740__auto___32995 = (0);
while(true){
if((i__25740__auto___32995 < len__25739__auto___32994)){
args__25746__auto__.push((arguments[i__25740__auto___32995]));

var G__32996 = (i__25740__auto___32995 + (1));
i__25740__auto___32995 = G__32996;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___32993))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___32993){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___32993);
});})(g__29720__auto___32993))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__29720__auto___32993){
return (function (seq32957){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32957));
});})(g__29720__auto___32993))
;


var g__29720__auto___32997 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__29720__auto___32997){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25746__auto__ = [];
var len__25739__auto___32998 = arguments.length;
var i__25740__auto___32999 = (0);
while(true){
if((i__25740__auto___32999 < len__25739__auto___32998)){
args__25746__auto__.push((arguments[i__25740__auto___32999]));

var G__33000 = (i__25740__auto___32999 + (1));
i__25740__auto___32999 = G__33000;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___32997))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___32997){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___32997);
});})(g__29720__auto___32997))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__29720__auto___32997){
return (function (seq32958){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32958));
});})(g__29720__auto___32997))
;


var g__29720__auto___33001 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__29720__auto___33001){
return (function cljs$spec$impl$gen$double(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33002 = arguments.length;
var i__25740__auto___33003 = (0);
while(true){
if((i__25740__auto___33003 < len__25739__auto___33002)){
args__25746__auto__.push((arguments[i__25740__auto___33003]));

var G__33004 = (i__25740__auto___33003 + (1));
i__25740__auto___33003 = G__33004;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33001))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33001){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33001);
});})(g__29720__auto___33001))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__29720__auto___33001){
return (function (seq32959){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32959));
});})(g__29720__auto___33001))
;


var g__29720__auto___33005 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__29720__auto___33005){
return (function cljs$spec$impl$gen$int(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33006 = arguments.length;
var i__25740__auto___33007 = (0);
while(true){
if((i__25740__auto___33007 < len__25739__auto___33006)){
args__25746__auto__.push((arguments[i__25740__auto___33007]));

var G__33008 = (i__25740__auto___33007 + (1));
i__25740__auto___33007 = G__33008;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33005))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33005){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33005);
});})(g__29720__auto___33005))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__29720__auto___33005){
return (function (seq32960){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32960));
});})(g__29720__auto___33005))
;


var g__29720__auto___33009 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__29720__auto___33009){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33010 = arguments.length;
var i__25740__auto___33011 = (0);
while(true){
if((i__25740__auto___33011 < len__25739__auto___33010)){
args__25746__auto__.push((arguments[i__25740__auto___33011]));

var G__33012 = (i__25740__auto___33011 + (1));
i__25740__auto___33011 = G__33012;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33009))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33009){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33009);
});})(g__29720__auto___33009))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__29720__auto___33009){
return (function (seq32961){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32961));
});})(g__29720__auto___33009))
;


var g__29720__auto___33013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__29720__auto___33013){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33014 = arguments.length;
var i__25740__auto___33015 = (0);
while(true){
if((i__25740__auto___33015 < len__25739__auto___33014)){
args__25746__auto__.push((arguments[i__25740__auto___33015]));

var G__33016 = (i__25740__auto___33015 + (1));
i__25740__auto___33015 = G__33016;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33013))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33013){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33013);
});})(g__29720__auto___33013))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__29720__auto___33013){
return (function (seq32962){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32962));
});})(g__29720__auto___33013))
;


var g__29720__auto___33017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__29720__auto___33017){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33018 = arguments.length;
var i__25740__auto___33019 = (0);
while(true){
if((i__25740__auto___33019 < len__25739__auto___33018)){
args__25746__auto__.push((arguments[i__25740__auto___33019]));

var G__33020 = (i__25740__auto___33019 + (1));
i__25740__auto___33019 = G__33020;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33017))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33017){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33017);
});})(g__29720__auto___33017))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__29720__auto___33017){
return (function (seq32963){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32963));
});})(g__29720__auto___33017))
;


var g__29720__auto___33021 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__29720__auto___33021){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33022 = arguments.length;
var i__25740__auto___33023 = (0);
while(true){
if((i__25740__auto___33023 < len__25739__auto___33022)){
args__25746__auto__.push((arguments[i__25740__auto___33023]));

var G__33024 = (i__25740__auto___33023 + (1));
i__25740__auto___33023 = G__33024;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33021))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33021){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33021);
});})(g__29720__auto___33021))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__29720__auto___33021){
return (function (seq32964){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32964));
});})(g__29720__auto___33021))
;


var g__29720__auto___33025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__29720__auto___33025){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33026 = arguments.length;
var i__25740__auto___33027 = (0);
while(true){
if((i__25740__auto___33027 < len__25739__auto___33026)){
args__25746__auto__.push((arguments[i__25740__auto___33027]));

var G__33028 = (i__25740__auto___33027 + (1));
i__25740__auto___33027 = G__33028;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33025))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33025){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33025);
});})(g__29720__auto___33025))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__29720__auto___33025){
return (function (seq32965){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32965));
});})(g__29720__auto___33025))
;


var g__29720__auto___33029 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__29720__auto___33029){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33030 = arguments.length;
var i__25740__auto___33031 = (0);
while(true){
if((i__25740__auto___33031 < len__25739__auto___33030)){
args__25746__auto__.push((arguments[i__25740__auto___33031]));

var G__33032 = (i__25740__auto___33031 + (1));
i__25740__auto___33031 = G__33032;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33029))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33029){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33029);
});})(g__29720__auto___33029))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__29720__auto___33029){
return (function (seq32966){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32966));
});})(g__29720__auto___33029))
;


var g__29720__auto___33033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__29720__auto___33033){
return (function cljs$spec$impl$gen$string(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33034 = arguments.length;
var i__25740__auto___33035 = (0);
while(true){
if((i__25740__auto___33035 < len__25739__auto___33034)){
args__25746__auto__.push((arguments[i__25740__auto___33035]));

var G__33036 = (i__25740__auto___33035 + (1));
i__25740__auto___33035 = G__33036;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33033))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33033){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33033);
});})(g__29720__auto___33033))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__29720__auto___33033){
return (function (seq32967){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32967));
});})(g__29720__auto___33033))
;


var g__29720__auto___33037 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__29720__auto___33037){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33038 = arguments.length;
var i__25740__auto___33039 = (0);
while(true){
if((i__25740__auto___33039 < len__25739__auto___33038)){
args__25746__auto__.push((arguments[i__25740__auto___33039]));

var G__33040 = (i__25740__auto___33039 + (1));
i__25740__auto___33039 = G__33040;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33037))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33037){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33037);
});})(g__29720__auto___33037))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__29720__auto___33037){
return (function (seq32968){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32968));
});})(g__29720__auto___33037))
;


var g__29720__auto___33041 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__29720__auto___33041){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33042 = arguments.length;
var i__25740__auto___33043 = (0);
while(true){
if((i__25740__auto___33043 < len__25739__auto___33042)){
args__25746__auto__.push((arguments[i__25740__auto___33043]));

var G__33044 = (i__25740__auto___33043 + (1));
i__25740__auto___33043 = G__33044;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33041))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33041){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33041);
});})(g__29720__auto___33041))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__29720__auto___33041){
return (function (seq32969){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32969));
});})(g__29720__auto___33041))
;


var g__29720__auto___33045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__29720__auto___33045){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33046 = arguments.length;
var i__25740__auto___33047 = (0);
while(true){
if((i__25740__auto___33047 < len__25739__auto___33046)){
args__25746__auto__.push((arguments[i__25740__auto___33047]));

var G__33048 = (i__25740__auto___33047 + (1));
i__25740__auto___33047 = G__33048;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33045))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33045){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33045);
});})(g__29720__auto___33045))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__29720__auto___33045){
return (function (seq32970){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32970));
});})(g__29720__auto___33045))
;


var g__29720__auto___33049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__29720__auto___33049){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33050 = arguments.length;
var i__25740__auto___33051 = (0);
while(true){
if((i__25740__auto___33051 < len__25739__auto___33050)){
args__25746__auto__.push((arguments[i__25740__auto___33051]));

var G__33052 = (i__25740__auto___33051 + (1));
i__25740__auto___33051 = G__33052;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33049))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33049){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33049);
});})(g__29720__auto___33049))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__29720__auto___33049){
return (function (seq32971){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32971));
});})(g__29720__auto___33049))
;


var g__29720__auto___33053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__29720__auto___33053){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33054 = arguments.length;
var i__25740__auto___33055 = (0);
while(true){
if((i__25740__auto___33055 < len__25739__auto___33054)){
args__25746__auto__.push((arguments[i__25740__auto___33055]));

var G__33056 = (i__25740__auto___33055 + (1));
i__25740__auto___33055 = G__33056;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});})(g__29720__auto___33053))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29720__auto___33053){
return (function (args){
return cljs.core.deref.call(null,g__29720__auto___33053);
});})(g__29720__auto___33053))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__29720__auto___33053){
return (function (seq32972){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32972));
});})(g__29720__auto___33053))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25746__auto__ = [];
var len__25739__auto___33059 = arguments.length;
var i__25740__auto___33060 = (0);
while(true){
if((i__25740__auto___33060 < len__25739__auto___33059)){
args__25746__auto__.push((arguments[i__25740__auto___33060]));

var G__33061 = (i__25740__auto___33060 + (1));
i__25740__auto___33060 = G__33061;
continue;
} else {
}
break;
}

var argseq__25747__auto__ = ((((0) < args__25746__auto__.length))?(new cljs.core.IndexedSeq(args__25746__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25747__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__33057_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__33057_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq33058){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33058));
});

cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.zero_QMARK_,cljs.core.nil_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1629059133326