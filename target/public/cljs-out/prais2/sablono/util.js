// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('clojure.string');
sablono.util._STAR_base_url_STAR_ = null;

/**
 * @interface
 */
sablono.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
sablono.util.to_str = (function sablono$util$to_str(x){
if(((!((x == null))) && (!((x.sablono$util$ToString$to_str$arity$1 == null))))){
return x.sablono$util$ToString$to_str$arity$1(x);
} else {
var x__4230__auto__ = (((x == null))?null:x);
var m__4231__auto__ = (sablono.util.to_str[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4231__auto__.call(null,x));
} else {
var m__4231__auto____$1 = (sablono.util.to_str["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4231__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("ToString.to-str",x);
}
}
}
});


/**
 * @interface
 */
sablono.util.ToURI = function(){};

/**
 * Convert a value into a URI.
 */
sablono.util.to_uri = (function sablono$util$to_uri(x){
if(((!((x == null))) && (!((x.sablono$util$ToURI$to_uri$arity$1 == null))))){
return x.sablono$util$ToURI$to_uri$arity$1(x);
} else {
var x__4230__auto__ = (((x == null))?null:x);
var m__4231__auto__ = (sablono.util.to_uri[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4231__auto__.call(null,x));
} else {
var m__4231__auto____$1 = (sablono.util.to_uri["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4231__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("ToURI.to-uri",x);
}
}
}
});

/**
 * Converts its arguments into a string using to-str.
 */
sablono.util.as_str = (function sablono$util$as_str(var_args){
var args__4521__auto__ = [];
var len__4518__auto___13229 = arguments.length;
var i__4519__auto___13230 = (0);
while(true){
if((i__4519__auto___13230 < len__4518__auto___13229)){
args__4521__auto__.push((arguments[i__4519__auto___13230]));

var G__13231 = (i__4519__auto___13230 + (1));
i__4519__auto___13230 = G__13231;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.to_str,xs));
});

sablono.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.util.as_str.cljs$lang$applyTo = (function (seq13228){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13228));
});

/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 */
sablono.util.camel_case = (function sablono$util$camel_case(k){
if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol)))){
var vec__13232 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),/-/);
var seq__13233 = cljs.core.seq(vec__13232);
var first__13234 = cljs.core.first(seq__13233);
var seq__13233__$1 = cljs.core.next(seq__13233);
var first_word = first__13234;
var words = seq__13233__$1;
if(((cljs.core.empty_QMARK_(words)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
sablono.util.camel_case_keys = (function sablono$util$camel_case_keys(m){
if(cljs.core.map_QMARK_(m)){
var ks = cljs.core.keys(m);
var kmap = cljs.core.zipmap(ks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.camel_case,ks));
var G__13235 = clojure.set.rename_keys(m,kmap);
if(cljs.core.map_QMARK_(cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__13235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style], null),sablono.util.camel_case_keys);
} else {
return G__13235;
}
} else {
return m;
}
});
/**
 * Return true if `x` is an HTML element. True when `x` is a vector
 *   and the first element is a keyword, e.g. `[:div]` or `[:div [:span "x"]`.
 */
sablono.util.element_QMARK_ = (function sablono$util$element_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
sablono.util.html_to_dom_attrs = (function sablono$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys(sablono.util.camel_case_keys(attrs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$className,cljs.core.cst$kw$for,cljs.core.cst$kw$htmlFor], null));
});
/**
 * Join the `classes` with a whitespace.
 */
sablono.util.join_classes = (function sablono$util$join_classes(classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13236_SHARP_){
if(typeof p1__13236_SHARP_ === 'string'){
return p1__13236_SHARP_;
} else {
return cljs.core.seq(p1__13236_SHARP_);

}
}),classes)));
});
/**
 * Return true if the element `type` needs to be wrapped.
 */
sablono.util.wrapped_type_QMARK_ = (function sablono$util$wrapped_type_QMARK_(type){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$textarea,null,cljs.core.cst$kw$option,null,cljs.core.cst$kw$input,null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type));
});
/**
 * Return the symbol of a fn that build a React element. 
 */
sablono.util.react_fn = (function sablono$util$react_fn(type){
if(cljs.core.truth_(sablono.util.wrapped_type_QMARK_(type))){
return cljs.core.cst$sym$sablono$interpreter_SLASH_create_DASH_element;
} else {
return cljs.core.cst$sym$js_SLASH_React$createElement;
}
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.name(x__$1);
});

goog.Uri.prototype.sablono$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
if(cljs.core.truth_((function (){var or__3936__auto__ = x__$1.hasDomain();
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (((x__$1.getPath() == null)) || (cljs.core.not(cljs.core.re_matches(/^\/.*/,x__$1.getPath()))));
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
} else {
var base = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util._STAR_base_url_STAR_)].join('');
if(cljs.core.truth_(cljs.core.re_matches(/.*\/$/,base))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(base,(0),(cljs.core.count(base) - (1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
}
}
});

goog.object.set(sablono.util.ToString,"null",true);

var G__13237_13246 = sablono.util.to_str;
var G__13238_13247 = "null";
var G__13239_13248 = ((function (G__13237_13246,G__13238_13247){
return (function (_){
return "";
});})(G__13237_13246,G__13238_13247))
;
goog.object.set(G__13237_13246,G__13238_13247,G__13239_13248);

goog.object.set(sablono.util.ToString,"number",true);

var G__13240_13249 = sablono.util.to_str;
var G__13241_13250 = "number";
var G__13242_13251 = ((function (G__13240_13249,G__13241_13250){
return (function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
});})(G__13240_13249,G__13241_13250))
;
goog.object.set(G__13240_13249,G__13241_13250,G__13242_13251);

goog.object.set(sablono.util.ToString,"_",true);

var G__13243_13252 = sablono.util.to_str;
var G__13244_13253 = "_";
var G__13245_13254 = ((function (G__13243_13252,G__13244_13253){
return (function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
});})(G__13243_13252,G__13244_13253))
;
goog.object.set(G__13243_13252,G__13244_13253,G__13245_13254);
goog.Uri.prototype.sablono$util$ToURI$ = cljs.core.PROTOCOL_SENTINEL;

goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

goog.object.set(sablono.util.ToURI,"_",true);

var G__13255_13258 = sablono.util.to_uri;
var G__13256_13259 = "_";
var G__13257_13260 = ((function (G__13255_13258,G__13256_13259){
return (function (x){
return (new goog.Uri([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));
});})(G__13255_13258,G__13256_13259))
;
goog.object.set(G__13255_13258,G__13256_13259,G__13257_13260);
