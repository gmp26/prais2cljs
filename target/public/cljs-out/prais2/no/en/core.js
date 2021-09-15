// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.crypt.base64');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$amqp,(5672),cljs.core.cst$kw$http,(80),cljs.core.cst$kw$https,(443),cljs.core.cst$kw$mysql,(3306),cljs.core.cst$kw$postgresql,(5432),cljs.core.cst$kw$rabbitmq,(5672),cljs.core.cst$kw$zookeeper,(2181)], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@\/]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?#]*)(\?([^#]*))?)?)(\#(.*))?/;
/**
 * Split the string `s` by the regex `pattern`.
 */
no.en.core.split_by_regex = (function no$en$core$split_by_regex(s,pattern){
if(cljs.core.sequential_QMARK_(s)){
return s;
} else {
if(!(clojure.string.blank_QMARK_(s))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,pattern);
} else {
return null;
}
}
});
/**
 * Split the string `s` by comma.
 */
no.en.core.split_by_comma = (function no$en$core$split_by_comma(s){
return no.en.core.split_by_regex(s,/\s*,\s*/);
});
/**
 * Returns `bytes` as an UTF-8 encoded string.
 */
no.en.core.utf8_string = (function no$en$core$utf8_string(bytes){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("utf8-string not implemented yet",bytes);
});
/**
 * Returns `s` as a Base64 encoded string.
 */
no.en.core.base64_encode = (function no$en$core$base64_encode(bytes){
if(cljs.core.truth_(bytes)){
return goog.crypt.base64.encodeString(bytes,false);
} else {
return null;
}
});
/**
 * Returns `s` as a Base64 decoded string.
 */
no.en.core.base64_decode = (function no$en$core$base64_decode(s){
if(cljs.core.truth_(s)){
return goog.crypt.base64.decodeString(s,false);
} else {
return null;
}
});
/**
 * Removes all map entries where the value of the entry is empty.
 */
no.en.core.compact_map = (function no$en$core$compact_map(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
if((((v == null)) || (((((cljs.core.map_QMARK_(v)) || (cljs.core.sequential_QMARK_(v)))) && (cljs.core.empty_QMARK_(v)))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys(m));
});
/**
 * Returns `s` as an URL encoded string.
 */
no.en.core.url_encode = (function no$en$core$url_encode(var_args){
var args__4521__auto__ = [];
var len__4518__auto___19012 = arguments.length;
var i__4519__auto___19013 = (0);
while(true){
if((i__4519__auto___19013 < len__4518__auto___19012)){
args__4521__auto__.push((arguments[i__4519__auto___19013]));

var G__19014 = (i__4519__auto___19013 + (1));
i__4519__auto___19013 = G__19014;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__19008){
var vec__19009 = p__19008;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19009,(0),null);
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')),"*","%2A");
} else {
return null;
}
});

no.en.core.url_encode.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
no.en.core.url_encode.cljs$lang$applyTo = (function (seq19006){
var G__19007 = cljs.core.first(seq19006);
var seq19006__$1 = cljs.core.next(seq19006);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19007,seq19006__$1);
});

/**
 * Returns `s` as an URL decoded string.
 */
no.en.core.url_decode = (function no$en$core$url_decode(var_args){
var args__4521__auto__ = [];
var len__4518__auto___19021 = arguments.length;
var i__4519__auto___19022 = (0);
while(true){
if((i__4519__auto___19022 < len__4518__auto___19021)){
args__4521__auto__.push((arguments[i__4519__auto___19022]));

var G__19023 = (i__4519__auto___19022 + (1));
i__4519__auto___19022 = G__19023;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__19017){
var vec__19018 = p__19017;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19018,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

no.en.core.url_decode.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
no.en.core.url_decode.cljs$lang$applyTo = (function (seq19015){
var G__19016 = cljs.core.first(seq19015);
var seq19015__$1 = cljs.core.next(seq19015);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19016,seq19015__$1);
});

no.en.core.pow = (function no$en$core$pow(n,x){
return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["T","K","G","M","Y","Z","E","B","P"],[no.en.core.pow((1024),(4)),no.en.core.pow((1024),(1)),no.en.core.pow((1024),(3)),no.en.core.pow((1024),(2)),no.en.core.pow((1024),(8)),no.en.core.pow((1024),(7)),no.en.core.pow((1024),(6)),no.en.core.pow((1024),(0)),no.en.core.pow((1024),(5))]);
no.en.core.apply_unit = (function no$en$core$apply_unit(number,unit){
if(typeof unit === 'string'){
var G__19024 = clojure.string.upper_case(unit);
switch (G__19024) {
default:
var G__19025 = unit;
switch (G__19025) {
case "M":
return (number * (1000000));

break;
case "B":
return (number * (1000000000));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19025)].join('')));

}

}
} else {
return number;
}
});
no.en.core.parse_number = (function no$en$core$parse_number(s,parse_fn){
var temp__5751__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
if(cljs.core.truth_(temp__5751__auto__)){
var matches = temp__5751__auto__;
var number = (function (){var G__19028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1));
return (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(G__19028) : parse_fn.call(null,G__19028));
})();
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));
if(cljs.core.not(isNaN(number))){
return no.en.core.apply_unit(number,unit);
} else {
return null;
}
} else {
return null;
}
});
no.en.core.parse_bytes = (function no$en$core$parse_bytes(s){
var temp__5751__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
if(cljs.core.truth_(temp__5751__auto__)){
var matches = temp__5751__auto__;
var number = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));
return cljs.core.long$((cljs.core.long$(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)))].join(''))) * cljs.core.get.cljs$core$IFn$_invoke$arity$3(no.en.core.byte_scale,clojure.string.upper_case((function (){var or__3936__auto__ = unit;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return "";
}
})()),(1))));
} else {
return null;
}
});
/**
 * Parse `s` as a integer number.
 */
no.en.core.parse_integer = (function no$en$core$parse_integer(s){
return no.en.core.parse_number(s,(function (p1__19029_SHARP_){
return parseInt(p1__19029_SHARP_);
}));
});
/**
 * Parse `s` as a long number.
 */
no.en.core.parse_long = (function no$en$core$parse_long(s){
return no.en.core.parse_number(s,(function (p1__19030_SHARP_){
return parseInt(p1__19030_SHARP_);
}));
});
/**
 * Parse `s` as a double number.
 */
no.en.core.parse_double = (function no$en$core$parse_double(s){
return no.en.core.parse_number(s,(function (p1__19031_SHARP_){
return parseFloat(p1__19031_SHARP_);
}));
});
/**
 * Parse `s` as a float number.
 */
no.en.core.parse_float = (function no$en$core$parse_float(s){
return no.en.core.parse_number(s,(function (p1__19032_SHARP_){
return parseFloat(p1__19032_SHARP_);
}));
});
/**
 * Format the map `m` into a query parameter string.
 */
no.en.core.format_query_params = (function no$en$core$format_query_params(m){
var params = clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19035_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__19035_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19034_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode(cljs.core.name(cljs.core.first(p1__19034_SHARP_))),no.en.core.url_encode(cljs.core.second(p1__19034_SHARP_))],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19033_SHARP_){
return clojure.string.blank_QMARK_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19033_SHARP_))].join(''));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.seq(m))))));
if(!(clojure.string.blank_QMARK_(params))){
return params;
} else {
return null;
}
});
/**
 * Format the Ring map as an url.
 */
no.en.core.format_url = (function no$en$core$format_url(m){
if(!(cljs.core.empty_QMARK_(m))){
var query_params = cljs.core.cst$kw$query_DASH_params.cljs$core$IFn$_invoke$arity$1(m);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(m))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(m))),"://"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var map__19036 = m;
var map__19036__$1 = ((((!((map__19036 == null)))?(((((map__19036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19036):map__19036);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19036__$1,cljs.core.cst$kw$username);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19036__$1,cljs.core.cst$kw$password);
if(cljs.core.truth_(username)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(password)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join(''):null)),"@"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$server_DASH_name.cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5751__auto__ = cljs.core.cst$kw$server_DASH_port.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5751__auto__)){
var port = temp__5751__auto__;
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,(function (){var G__19038 = cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(m);
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__19038) : no.en.core.port_number.call(null,G__19038));
})()))){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return null;
}
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(m) == null)) && (!(cljs.core.empty_QMARK_(query_params)))))?"/":cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_(query_params)))?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.format_query_params(query_params))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(clojure.string.blank_QMARK_(cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(m))))?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(m))].join(''):null))].join('');
} else {
return null;
}
});
/**
 * Return the formatted `url` without password as a string.
 */
no.en.core.public_url = (function no$en$core$public_url(url){
return no.en.core.format_url(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(url,cljs.core.cst$kw$password));
});
/**
 * Parse `s` as a percentage.
 */
no.en.core.parse_percent = (function no$en$core$parse_percent(s){
return no.en.core.parse_double(clojure.string.replace(s,"%",""));
});
/**
 * Quote the special characters in `s` that are used in regular expressions.
 */
no.en.core.pattern_quote = (function no$en$core$pattern_quote(s){
return clojure.string.replace(cljs.core.name(s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1");
});
/**
 * Returns the first string that separates the components in `s`.
 */
no.en.core.separator = (function no$en$core$separator(s){
var temp__5751__auto__ = cljs.core.re_matches(/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);
if(cljs.core.truth_(temp__5751__auto__)){
var matches = temp__5751__auto__;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(2));
} else {
return null;
}
});
/**
 * Parse the query parameter string `s` and return a map.
 */
no.en.core.parse_query_params = (function no$en$core$parse_query_params(s){
if(cljs.core.truth_(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__19041_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(cljs.core.first(p1__19041_SHARP_))),no.en.core.url_decode(cljs.core.second(p1__19041_SHARP_))],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19040_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(p1__19040_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19039_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__19039_SHARP_,/=/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/)))], 0)));
} else {
return null;
}
});
/**
 * Parse the url `s` and return a Ring compatible map.
 */
no.en.core.parse_url = (function no$en$core$parse_url(s){
var temp__5751__auto__ = cljs.core.re_matches(no.en.core.url_regex,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
if(cljs.core.truth_(temp__5751__auto__)){
var matches = temp__5751__auto__;
var scheme = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));
return no.en.core.compact_map(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$password,cljs.core.cst$kw$fragment,cljs.core.cst$kw$username,cljs.core.cst$kw$server_DASH_port,cljs.core.cst$kw$query_DASH_params,cljs.core.cst$kw$uri,cljs.core.cst$kw$server_DASH_name,cljs.core.cst$kw$query_DASH_string,cljs.core.cst$kw$scheme],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3)),(function (){var or__3936__auto__ = no.en.core.parse_integer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(8)));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(scheme) : no.en.core.port_number.call(null,scheme));
}
})(),no.en.core.parse_query_params(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12)),scheme]));
} else {
return null;
}
});
var ret__4552__auto___19046 = (function (){
no.en.core.prog1 = (function no$en$core$prog1(var_args){
var args__4521__auto__ = [];
var len__4518__auto___19047 = arguments.length;
var i__4519__auto___19048 = (0);
while(true){
if((i__4519__auto___19048 < len__4518__auto___19047)){
args__4521__auto__.push((arguments[i__4519__auto___19048]));

var G__19049 = (i__4519__auto___19048 + (1));
i__4519__auto___19048 = G__19049;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((2) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((2)),(0),null)):null);
return no.en.core.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4522__auto__);
});

no.en.core.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$result__19042__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.first(body),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(body),(new cljs.core.List(null,cljs.core.cst$sym$result__19042__auto__,null,(1),null))], 0))));
});

no.en.core.prog1.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
no.en.core.prog1.cljs$lang$applyTo = (function (seq19043){
var G__19044 = cljs.core.first(seq19043);
var seq19043__$1 = cljs.core.next(seq19043);
var G__19045 = cljs.core.first(seq19043__$1);
var seq19043__$2 = cljs.core.next(seq19043__$1);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19044,G__19045,seq19043__$2);
});

return null;
})()
;
no.en.core.prog1.cljs$lang$macro = true;

/**
 * Executes thunk. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries_STAR_ = (function no$en$core$with_retries_STAR_(n,thunk){
var n__$1 = n;
while(true){
var temp__5751__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null))], null);
}catch (e19050){if((e19050 instanceof Error)){
var e = e19050;
if((n__$1 === (0))){
throw e;
} else {
return null;
}
} else {
throw e19050;

}
}})();
if(cljs.core.truth_(temp__5751__auto__)){
var result = temp__5751__auto__;
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1((0)) : result.call(null,(0)));
} else {
var G__19051 = (n__$1 - (1));
n__$1 = G__19051;
continue;
}
break;
}
});
var ret__4552__auto___19056 = (function (){
/**
 * Executes body. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries = (function no$en$core$with_retries(var_args){
var args__4521__auto__ = [];
var len__4518__auto___19057 = arguments.length;
var i__4519__auto___19058 = (0);
while(true){
if((i__4519__auto___19058 < len__4518__auto___19057)){
args__4521__auto__.push((arguments[i__4519__auto___19058]));

var G__19059 = (i__4519__auto___19058 + (1));
i__4519__auto___19058 = G__19059;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((3) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((3)),(0),null)):null);
return no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4522__auto__);
});

no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$no$en$core_SLASH_with_DASH_retries_STAR_,null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
});

no.en.core.with_retries.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
no.en.core.with_retries.cljs$lang$applyTo = (function (seq19052){
var G__19053 = cljs.core.first(seq19052);
var seq19052__$1 = cljs.core.next(seq19052);
var G__19054 = cljs.core.first(seq19052__$1);
var seq19052__$2 = cljs.core.next(seq19052__$1);
var G__19055 = cljs.core.first(seq19052__$2);
var seq19052__$3 = cljs.core.next(seq19052__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19053,G__19054,G__19055,seq19052__$3);
});

return null;
})()
;
no.en.core.with_retries.cljs$lang$macro = true;

no.en.core.editable_QMARK_ = (function no$en$core$editable_QMARK_(coll){
if(!((coll == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
}
});
no.en.core.reduce_map = (function no$en$core$reduce_map(f,coll){
if(cljs.core.truth_(no.en.core.editable_QMARK_(coll))){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_BANG_) : f.call(null,cljs.core.assoc_BANG_)),cljs.core.transient$(cljs.core.empty(coll)),coll));
} else {
return cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc) : f.call(null,cljs.core.assoc)),cljs.core.empty(coll),coll);
}
});
/**
 * Maps a function over the keys of an associative collection.
 */
no.en.core.map_keys = (function no$en$core$map_keys(f,coll){
return no.en.core.reduce_map((function (xf){
return (function (m,k,v){
var G__19061 = m;
var G__19062 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
var G__19063 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__19061,G__19062,G__19063) : xf.call(null,G__19061,G__19062,G__19063));
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
no.en.core.map_vals = (function no$en$core$map_vals(f,coll){
return no.en.core.reduce_map((function (xf){
return (function (m,k,v){
var G__19064 = m;
var G__19065 = k;
var G__19066 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__19064,G__19065,G__19066) : xf.call(null,G__19064,G__19065,G__19066));
});
}),coll);
});
/**
 * Like merge, but merges maps recursively.
 */
no.en.core.deep_merge = (function no$en$core$deep_merge(var_args){
var args__4521__auto__ = [];
var len__4518__auto___19068 = arguments.length;
var i__4519__auto___19069 = (0);
while(true){
if((i__4519__auto___19069 < len__4518__auto___19068)){
args__4521__auto__.push((arguments[i__4519__auto___19069]));

var G__19070 = (i__4519__auto___19069 + (1));
i__4519__auto___19069 = G__19070;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,no.en.core.deep_merge,maps);
} else {
return cljs.core.last(maps);
}
});

no.en.core.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
no.en.core.deep_merge.cljs$lang$applyTo = (function (seq19067){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19067));
});

/**
 * Like merge-with, but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 */
no.en.core.deep_merge_with = (function no$en$core$deep_merge_with(var_args){
var args__4521__auto__ = [];
var len__4518__auto___19073 = arguments.length;
var i__4519__auto___19074 = (0);
while(true){
if((i__4519__auto___19074 < len__4518__auto___19073)){
args__4521__auto__.push((arguments[i__4519__auto___19074]));

var G__19075 = (i__4519__auto___19074 + (1));
i__4519__auto___19074 = G__19075;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() { 
var no$en$core$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,no$en$core$m,maps__$1);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,maps__$1);
}
};
var no$en$core$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__19076__i = 0, G__19076__a = new Array(arguments.length -  0);
while (G__19076__i < G__19076__a.length) {G__19076__a[G__19076__i] = arguments[G__19076__i + 0]; ++G__19076__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__19076__a,0,null);
} 
return no$en$core$m__delegate.call(this,maps__$1);};
no$en$core$m.cljs$lang$maxFixedArity = 0;
no$en$core$m.cljs$lang$applyTo = (function (arglist__19077){
var maps__$1 = cljs.core.seq(arglist__19077);
return no$en$core$m__delegate(maps__$1);
});
no$en$core$m.cljs$core$IFn$_invoke$arity$variadic = no$en$core$m__delegate;
return no$en$core$m;
})()
,maps);
});

no.en.core.deep_merge_with.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
no.en.core.deep_merge_with.cljs$lang$applyTo = (function (seq19071){
var G__19072 = cljs.core.first(seq19071);
var seq19071__$1 = cljs.core.next(seq19071);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19072,seq19071__$1);
});

