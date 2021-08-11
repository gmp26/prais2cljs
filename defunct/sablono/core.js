// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__14239__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__14236 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__14237 = cljs.core.seq(vec__14236);
var first__14238 = cljs.core.first(seq__14237);
var seq__14237__$1 = cljs.core.next(seq__14237);
var tag = first__14238;
var body = seq__14237__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__14239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14240__i = 0, G__14240__a = new Array(arguments.length -  0);
while (G__14240__i < G__14240__a.length) {G__14240__a[G__14240__i] = arguments[G__14240__i + 0]; ++G__14240__i;}
  args = new cljs.core.IndexedSeq(G__14240__a,0);
} 
return G__14239__delegate.call(this,args);};
G__14239.cljs$lang$maxFixedArity = 0;
G__14239.cljs$lang$applyTo = (function (arglist__14241){
var args = cljs.core.seq(arglist__14241);
return G__14239__delegate(args);
});
G__14239.cljs$core$IFn$_invoke$arity$variadic = G__14239__delegate;
return G__14239;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7001__auto__ = (function sablono$core$update_arglists_$_iter__14248(s__14249){
return (new cljs.core.LazySeq(null,(function (){
var s__14249__$1 = s__14249;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14249__$1);
if(temp__4657__auto__){
var s__14249__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14249__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__14249__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__14251 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__14250 = (0);
while(true){
if((i__14250 < size__7000__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__14250);
cljs.core.chunk_append(b__14251,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__14254 = (i__14250 + (1));
i__14250 = G__14254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14251),sablono$core$update_arglists_$_iter__14248(cljs.core.chunk_rest(s__14249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14251),null);
}
} else {
var args = cljs.core.first(s__14249__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__14248(cljs.core.rest(s__14249__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7303__auto__ = [];
var len__7296__auto___14262 = arguments.length;
var i__7297__auto___14263 = (0);
while(true){
if((i__7297__auto___14263 < len__7296__auto___14262)){
args__7303__auto__.push((arguments[i__7297__auto___14263]));

var G__14264 = (i__7297__auto___14263 + (1));
i__7297__auto___14263 = G__14264;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7001__auto__ = (function sablono$core$iter__14256(s__14257){
return (new cljs.core.LazySeq(null,(function (){
var s__14257__$1 = s__14257;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14257__$1);
if(temp__4657__auto__){
var s__14257__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14257__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__14257__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__14259 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__14258 = (0);
while(true){
if((i__14258 < size__7000__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__14258);
cljs.core.chunk_append(b__14259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__14265 = (i__14258 + (1));
i__14258 = G__14265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14259),sablono$core$iter__14256(cljs.core.chunk_rest(s__14257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14259),null);
}
} else {
var style = cljs.core.first(s__14257__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__14256(cljs.core.rest(s__14257__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq14255){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14255));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__14270 = goog.dom.getDocument().body;
var G__14271 = (function (){var G__14272 = "script";
var G__14273 = {"src": src};
return goog.dom.createDom(G__14272,G__14273);
})();
return goog.dom.appendChild(G__14270,G__14271);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to14274 = (function sablono$core$link_to14274(var_args){
var args__7303__auto__ = [];
var len__7296__auto___14277 = arguments.length;
var i__7297__auto___14278 = (0);
while(true){
if((i__7297__auto___14278 < len__7296__auto___14277)){
args__7303__auto__.push((arguments[i__7297__auto___14278]));

var G__14279 = (i__7297__auto___14278 + (1));
i__7297__auto___14278 = G__14279;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to14274.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

sablono.core.link_to14274.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to14274.cljs$lang$maxFixedArity = (1);

sablono.core.link_to14274.cljs$lang$applyTo = (function (seq14275){
var G__14276 = cljs.core.first(seq14275);
var seq14275__$1 = cljs.core.next(seq14275);
return sablono.core.link_to14274.cljs$core$IFn$_invoke$arity$variadic(G__14276,seq14275__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to14274);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14280 = (function sablono$core$mail_to14280(var_args){
var args__7303__auto__ = [];
var len__7296__auto___14287 = arguments.length;
var i__7297__auto___14288 = (0);
while(true){
if((i__7297__auto___14288 < len__7296__auto___14287)){
args__7303__auto__.push((arguments[i__7297__auto___14288]));

var G__14289 = (i__7297__auto___14288 + (1));
i__7297__auto___14288 = G__14289;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to14280.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

sablono.core.mail_to14280.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14283){
var vec__14284 = p__14283;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14284,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6221__auto__ = content;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14280.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to14280.cljs$lang$applyTo = (function (seq14281){
var G__14282 = cljs.core.first(seq14281);
var seq14281__$1 = cljs.core.next(seq14281);
return sablono.core.mail_to14280.cljs$core$IFn$_invoke$arity$variadic(G__14282,seq14281__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to14280);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14290 = (function sablono$core$unordered_list14290(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7001__auto__ = (function sablono$core$unordered_list14290_$_iter__14297(s__14298){
return (new cljs.core.LazySeq(null,(function (){
var s__14298__$1 = s__14298;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14298__$1);
if(temp__4657__auto__){
var s__14298__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14298__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__14298__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__14300 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__14299 = (0);
while(true){
if((i__14299 < size__7000__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__14299);
cljs.core.chunk_append(b__14300,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14303 = (i__14299 + (1));
i__14299 = G__14303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14300),sablono$core$unordered_list14290_$_iter__14297(cljs.core.chunk_rest(s__14298__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14300),null);
}
} else {
var x = cljs.core.first(s__14298__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list14290_$_iter__14297(cljs.core.rest(s__14298__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list14290);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14304 = (function sablono$core$ordered_list14304(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7001__auto__ = (function sablono$core$ordered_list14304_$_iter__14311(s__14312){
return (new cljs.core.LazySeq(null,(function (){
var s__14312__$1 = s__14312;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14312__$1);
if(temp__4657__auto__){
var s__14312__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14312__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__14312__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__14314 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__14313 = (0);
while(true){
if((i__14313 < size__7000__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__14313);
cljs.core.chunk_append(b__14314,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14317 = (i__14313 + (1));
i__14313 = G__14317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14314),sablono$core$ordered_list14304_$_iter__14311(cljs.core.chunk_rest(s__14312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14314),null);
}
} else {
var x = cljs.core.first(s__14312__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list14304_$_iter__14311(cljs.core.rest(s__14312__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list14304);
/**
 * Create an image element.
 */
sablono.core.image14318 = (function sablono$core$image14318(var_args){
var args14319 = [];
var len__7296__auto___14322 = arguments.length;
var i__7297__auto___14323 = (0);
while(true){
if((i__7297__auto___14323 < len__7296__auto___14322)){
args14319.push((arguments[i__7297__auto___14323]));

var G__14324 = (i__7297__auto___14323 + (1));
i__7297__auto___14323 = G__14324;
continue;
} else {
}
break;
}

var G__14321 = args14319.length;
switch (G__14321) {
case 1:
return sablono.core.image14318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14319.length)].join('')));

}
});

sablono.core.image14318.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image14318.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image14318.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image14318);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14326_SHARP_,p2__14327_SHARP_){
return [cljs.core.str(p1__14326_SHARP_),cljs.core.str("["),cljs.core.str(p2__14327_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14328_SHARP_,p2__14329_SHARP_){
return [cljs.core.str(p1__14328_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14329_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field14330 = (function sablono$core$color_field14330(var_args){
var args14331 = [];
var len__7296__auto___14398 = arguments.length;
var i__7297__auto___14399 = (0);
while(true){
if((i__7297__auto___14399 < len__7296__auto___14398)){
args14331.push((arguments[i__7297__auto___14399]));

var G__14400 = (i__7297__auto___14399 + (1));
i__7297__auto___14399 = G__14400;
continue;
} else {
}
break;
}

var G__14333 = args14331.length;
switch (G__14333) {
case 1:
return sablono.core.color_field14330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14331.length)].join('')));

}
});

sablono.core.color_field14330.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.color_field14330.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.color_field14330.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.color_field14330.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field14330);

/**
 * Creates a date input field.
 */
sablono.core.date_field14334 = (function sablono$core$date_field14334(var_args){
var args14335 = [];
var len__7296__auto___14402 = arguments.length;
var i__7297__auto___14403 = (0);
while(true){
if((i__7297__auto___14403 < len__7296__auto___14402)){
args14335.push((arguments[i__7297__auto___14403]));

var G__14404 = (i__7297__auto___14403 + (1));
i__7297__auto___14403 = G__14404;
continue;
} else {
}
break;
}

var G__14337 = args14335.length;
switch (G__14337) {
case 1:
return sablono.core.date_field14334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14335.length)].join('')));

}
});

sablono.core.date_field14334.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.date_field14334.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.date_field14334.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.date_field14334.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field14334);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14338 = (function sablono$core$datetime_field14338(var_args){
var args14339 = [];
var len__7296__auto___14406 = arguments.length;
var i__7297__auto___14407 = (0);
while(true){
if((i__7297__auto___14407 < len__7296__auto___14406)){
args14339.push((arguments[i__7297__auto___14407]));

var G__14408 = (i__7297__auto___14407 + (1));
i__7297__auto___14407 = G__14408;
continue;
} else {
}
break;
}

var G__14341 = args14339.length;
switch (G__14341) {
case 1:
return sablono.core.datetime_field14338.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14339.length)].join('')));

}
});

sablono.core.datetime_field14338.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.datetime_field14338.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.datetime_field14338.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.datetime_field14338.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field14338);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14342 = (function sablono$core$datetime_local_field14342(var_args){
var args14343 = [];
var len__7296__auto___14410 = arguments.length;
var i__7297__auto___14411 = (0);
while(true){
if((i__7297__auto___14411 < len__7296__auto___14410)){
args14343.push((arguments[i__7297__auto___14411]));

var G__14412 = (i__7297__auto___14411 + (1));
i__7297__auto___14411 = G__14412;
continue;
} else {
}
break;
}

var G__14345 = args14343.length;
switch (G__14345) {
case 1:
return sablono.core.datetime_local_field14342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14343.length)].join('')));

}
});

sablono.core.datetime_local_field14342.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.datetime_local_field14342.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.datetime_local_field14342.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.datetime_local_field14342.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field14342);

/**
 * Creates a email input field.
 */
sablono.core.email_field14346 = (function sablono$core$email_field14346(var_args){
var args14347 = [];
var len__7296__auto___14414 = arguments.length;
var i__7297__auto___14415 = (0);
while(true){
if((i__7297__auto___14415 < len__7296__auto___14414)){
args14347.push((arguments[i__7297__auto___14415]));

var G__14416 = (i__7297__auto___14415 + (1));
i__7297__auto___14415 = G__14416;
continue;
} else {
}
break;
}

var G__14349 = args14347.length;
switch (G__14349) {
case 1:
return sablono.core.email_field14346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14347.length)].join('')));

}
});

sablono.core.email_field14346.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.email_field14346.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.email_field14346.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.email_field14346.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field14346);

/**
 * Creates a file input field.
 */
sablono.core.file_field14350 = (function sablono$core$file_field14350(var_args){
var args14351 = [];
var len__7296__auto___14418 = arguments.length;
var i__7297__auto___14419 = (0);
while(true){
if((i__7297__auto___14419 < len__7296__auto___14418)){
args14351.push((arguments[i__7297__auto___14419]));

var G__14420 = (i__7297__auto___14419 + (1));
i__7297__auto___14419 = G__14420;
continue;
} else {
}
break;
}

var G__14353 = args14351.length;
switch (G__14353) {
case 1:
return sablono.core.file_field14350.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14350.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14351.length)].join('')));

}
});

sablono.core.file_field14350.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.file_field14350.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.file_field14350.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.file_field14350.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field14350);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14354 = (function sablono$core$hidden_field14354(var_args){
var args14355 = [];
var len__7296__auto___14422 = arguments.length;
var i__7297__auto___14423 = (0);
while(true){
if((i__7297__auto___14423 < len__7296__auto___14422)){
args14355.push((arguments[i__7297__auto___14423]));

var G__14424 = (i__7297__auto___14423 + (1));
i__7297__auto___14423 = G__14424;
continue;
} else {
}
break;
}

var G__14357 = args14355.length;
switch (G__14357) {
case 1:
return sablono.core.hidden_field14354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14355.length)].join('')));

}
});

sablono.core.hidden_field14354.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.hidden_field14354.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.hidden_field14354.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.hidden_field14354.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field14354);

/**
 * Creates a month input field.
 */
sablono.core.month_field14358 = (function sablono$core$month_field14358(var_args){
var args14359 = [];
var len__7296__auto___14426 = arguments.length;
var i__7297__auto___14427 = (0);
while(true){
if((i__7297__auto___14427 < len__7296__auto___14426)){
args14359.push((arguments[i__7297__auto___14427]));

var G__14428 = (i__7297__auto___14427 + (1));
i__7297__auto___14427 = G__14428;
continue;
} else {
}
break;
}

var G__14361 = args14359.length;
switch (G__14361) {
case 1:
return sablono.core.month_field14358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14359.length)].join('')));

}
});

sablono.core.month_field14358.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.month_field14358.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.month_field14358.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.month_field14358.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field14358);

/**
 * Creates a number input field.
 */
sablono.core.number_field14362 = (function sablono$core$number_field14362(var_args){
var args14363 = [];
var len__7296__auto___14430 = arguments.length;
var i__7297__auto___14431 = (0);
while(true){
if((i__7297__auto___14431 < len__7296__auto___14430)){
args14363.push((arguments[i__7297__auto___14431]));

var G__14432 = (i__7297__auto___14431 + (1));
i__7297__auto___14431 = G__14432;
continue;
} else {
}
break;
}

var G__14365 = args14363.length;
switch (G__14365) {
case 1:
return sablono.core.number_field14362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14363.length)].join('')));

}
});

sablono.core.number_field14362.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.number_field14362.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.number_field14362.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.number_field14362.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field14362);

/**
 * Creates a password input field.
 */
sablono.core.password_field14366 = (function sablono$core$password_field14366(var_args){
var args14367 = [];
var len__7296__auto___14434 = arguments.length;
var i__7297__auto___14435 = (0);
while(true){
if((i__7297__auto___14435 < len__7296__auto___14434)){
args14367.push((arguments[i__7297__auto___14435]));

var G__14436 = (i__7297__auto___14435 + (1));
i__7297__auto___14435 = G__14436;
continue;
} else {
}
break;
}

var G__14369 = args14367.length;
switch (G__14369) {
case 1:
return sablono.core.password_field14366.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14366.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14367.length)].join('')));

}
});

sablono.core.password_field14366.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.password_field14366.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.password_field14366.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.password_field14366.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field14366);

/**
 * Creates a range input field.
 */
sablono.core.range_field14370 = (function sablono$core$range_field14370(var_args){
var args14371 = [];
var len__7296__auto___14438 = arguments.length;
var i__7297__auto___14439 = (0);
while(true){
if((i__7297__auto___14439 < len__7296__auto___14438)){
args14371.push((arguments[i__7297__auto___14439]));

var G__14440 = (i__7297__auto___14439 + (1));
i__7297__auto___14439 = G__14440;
continue;
} else {
}
break;
}

var G__14373 = args14371.length;
switch (G__14373) {
case 1:
return sablono.core.range_field14370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14371.length)].join('')));

}
});

sablono.core.range_field14370.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.range_field14370.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.range_field14370.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.range_field14370.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field14370);

/**
 * Creates a search input field.
 */
sablono.core.search_field14374 = (function sablono$core$search_field14374(var_args){
var args14375 = [];
var len__7296__auto___14442 = arguments.length;
var i__7297__auto___14443 = (0);
while(true){
if((i__7297__auto___14443 < len__7296__auto___14442)){
args14375.push((arguments[i__7297__auto___14443]));

var G__14444 = (i__7297__auto___14443 + (1));
i__7297__auto___14443 = G__14444;
continue;
} else {
}
break;
}

var G__14377 = args14375.length;
switch (G__14377) {
case 1:
return sablono.core.search_field14374.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14375.length)].join('')));

}
});

sablono.core.search_field14374.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.search_field14374.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.search_field14374.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.search_field14374.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field14374);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14378 = (function sablono$core$tel_field14378(var_args){
var args14379 = [];
var len__7296__auto___14446 = arguments.length;
var i__7297__auto___14447 = (0);
while(true){
if((i__7297__auto___14447 < len__7296__auto___14446)){
args14379.push((arguments[i__7297__auto___14447]));

var G__14448 = (i__7297__auto___14447 + (1));
i__7297__auto___14447 = G__14448;
continue;
} else {
}
break;
}

var G__14381 = args14379.length;
switch (G__14381) {
case 1:
return sablono.core.tel_field14378.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14378.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14379.length)].join('')));

}
});

sablono.core.tel_field14378.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.tel_field14378.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.tel_field14378.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.tel_field14378.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field14378);

/**
 * Creates a text input field.
 */
sablono.core.text_field14382 = (function sablono$core$text_field14382(var_args){
var args14383 = [];
var len__7296__auto___14450 = arguments.length;
var i__7297__auto___14451 = (0);
while(true){
if((i__7297__auto___14451 < len__7296__auto___14450)){
args14383.push((arguments[i__7297__auto___14451]));

var G__14452 = (i__7297__auto___14451 + (1));
i__7297__auto___14451 = G__14452;
continue;
} else {
}
break;
}

var G__14385 = args14383.length;
switch (G__14385) {
case 1:
return sablono.core.text_field14382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14383.length)].join('')));

}
});

sablono.core.text_field14382.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.text_field14382.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.text_field14382.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.text_field14382.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field14382);

/**
 * Creates a time input field.
 */
sablono.core.time_field14386 = (function sablono$core$time_field14386(var_args){
var args14387 = [];
var len__7296__auto___14454 = arguments.length;
var i__7297__auto___14455 = (0);
while(true){
if((i__7297__auto___14455 < len__7296__auto___14454)){
args14387.push((arguments[i__7297__auto___14455]));

var G__14456 = (i__7297__auto___14455 + (1));
i__7297__auto___14455 = G__14456;
continue;
} else {
}
break;
}

var G__14389 = args14387.length;
switch (G__14389) {
case 1:
return sablono.core.time_field14386.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14386.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14387.length)].join('')));

}
});

sablono.core.time_field14386.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.time_field14386.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.time_field14386.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.time_field14386.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field14386);

/**
 * Creates a url input field.
 */
sablono.core.url_field14390 = (function sablono$core$url_field14390(var_args){
var args14391 = [];
var len__7296__auto___14458 = arguments.length;
var i__7297__auto___14459 = (0);
while(true){
if((i__7297__auto___14459 < len__7296__auto___14458)){
args14391.push((arguments[i__7297__auto___14459]));

var G__14460 = (i__7297__auto___14459 + (1));
i__7297__auto___14459 = G__14460;
continue;
} else {
}
break;
}

var G__14393 = args14391.length;
switch (G__14393) {
case 1:
return sablono.core.url_field14390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14391.length)].join('')));

}
});

sablono.core.url_field14390.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.url_field14390.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.url_field14390.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.url_field14390.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field14390);

/**
 * Creates a week input field.
 */
sablono.core.week_field14394 = (function sablono$core$week_field14394(var_args){
var args14395 = [];
var len__7296__auto___14462 = arguments.length;
var i__7297__auto___14463 = (0);
while(true){
if((i__7297__auto___14463 < len__7296__auto___14462)){
args14395.push((arguments[i__7297__auto___14463]));

var G__14464 = (i__7297__auto___14463 + (1));
i__7297__auto___14463 = G__14464;
continue;
} else {
}
break;
}

var G__14397 = args14395.length;
switch (G__14397) {
case 1:
return sablono.core.week_field14394.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14394.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14395.length)].join('')));

}
});

sablono.core.week_field14394.cljs$core$IFn$_invoke$arity$1 = (function (name__14223__auto__){
return sablono.core.week_field14394.cljs$core$IFn$_invoke$arity$2(name__14223__auto__,null);
});

sablono.core.week_field14394.cljs$core$IFn$_invoke$arity$2 = (function (name__14223__auto__,value__14224__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__14223__auto__,value__14224__auto__);
});

sablono.core.week_field14394.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field14394);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14466 = (function sablono$core$check_box14466(var_args){
var args14467 = [];
var len__7296__auto___14470 = arguments.length;
var i__7297__auto___14471 = (0);
while(true){
if((i__7297__auto___14471 < len__7296__auto___14470)){
args14467.push((arguments[i__7297__auto___14471]));

var G__14472 = (i__7297__auto___14471 + (1));
i__7297__auto___14471 = G__14472;
continue;
} else {
}
break;
}

var G__14469 = args14467.length;
switch (G__14469) {
case 1:
return sablono.core.check_box14466.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14466.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14466.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14467.length)].join('')));

}
});

sablono.core.check_box14466.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box14466.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box14466.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box14466.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box14466.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box14466.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box14466);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14474 = (function sablono$core$radio_button14474(var_args){
var args14475 = [];
var len__7296__auto___14478 = arguments.length;
var i__7297__auto___14479 = (0);
while(true){
if((i__7297__auto___14479 < len__7296__auto___14478)){
args14475.push((arguments[i__7297__auto___14479]));

var G__14480 = (i__7297__auto___14479 + (1));
i__7297__auto___14479 = G__14480;
continue;
} else {
}
break;
}

var G__14477 = args14475.length;
switch (G__14477) {
case 1:
return sablono.core.radio_button14474.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14474.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14474.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14475.length)].join('')));

}
});

sablono.core.radio_button14474.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button14474.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button14474.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button14474.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button14474.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button14474.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button14474);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__14483 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__14483);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14484 = (function sablono$core$select_options14484(coll){
var iter__7001__auto__ = (function sablono$core$select_options14484_$_iter__14503(s__14504){
return (new cljs.core.LazySeq(null,(function (){
var s__14504__$1 = s__14504;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14504__$1);
if(temp__4657__auto__){
var s__14504__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14504__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__14504__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__14506 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__14505 = (0);
while(true){
if((i__14505 < size__7000__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__14505);
cljs.core.chunk_append(b__14506,((cljs.core.sequential_QMARK_(x))?(function (){var vec__14515 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14515,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14515,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14515,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options14484(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__14521 = (i__14505 + (1));
i__14505 = G__14521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14506),sablono$core$select_options14484_$_iter__14503(cljs.core.chunk_rest(s__14504__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14506),null);
}
} else {
var x = cljs.core.first(s__14504__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__14518 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14518,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14518,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14518,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options14484(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options14484_$_iter__14503(cljs.core.rest(s__14504__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options14484);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14522 = (function sablono$core$drop_down14522(var_args){
var args14523 = [];
var len__7296__auto___14526 = arguments.length;
var i__7297__auto___14527 = (0);
while(true){
if((i__7297__auto___14527 < len__7296__auto___14526)){
args14523.push((arguments[i__7297__auto___14527]));

var G__14528 = (i__7297__auto___14527 + (1));
i__7297__auto___14527 = G__14528;
continue;
} else {
}
break;
}

var G__14525 = args14523.length;
switch (G__14525) {
case 2:
return sablono.core.drop_down14522.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14522.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14523.length)].join('')));

}
});

sablono.core.drop_down14522.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14522.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down14522.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down14522.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down14522);
/**
 * Creates a text area element.
 */
sablono.core.text_area14530 = (function sablono$core$text_area14530(var_args){
var args14531 = [];
var len__7296__auto___14534 = arguments.length;
var i__7297__auto___14535 = (0);
while(true){
if((i__7297__auto___14535 < len__7296__auto___14534)){
args14531.push((arguments[i__7297__auto___14535]));

var G__14536 = (i__7297__auto___14535 + (1));
i__7297__auto___14535 = G__14536;
continue;
} else {
}
break;
}

var G__14533 = args14531.length;
switch (G__14533) {
case 1:
return sablono.core.text_area14530.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14530.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14531.length)].join('')));

}
});

sablono.core.text_area14530.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area14530.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area14530.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area14530.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area14530);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14538 = (function sablono$core$label14538(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label14538);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14539 = (function sablono$core$submit_button14539(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button14539);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14540 = (function sablono$core$reset_button14540(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button14540);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14541 = (function sablono$core$form_to14541(var_args){
var args__7303__auto__ = [];
var len__7296__auto___14551 = arguments.length;
var i__7297__auto___14552 = (0);
while(true){
if((i__7297__auto___14552 < len__7296__auto___14551)){
args__7303__auto__.push((arguments[i__7297__auto___14552]));

var G__14553 = (i__7297__auto___14552 + (1));
i__7297__auto___14552 = G__14553;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to14541.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

sablono.core.form_to14541.cljs$core$IFn$_invoke$arity$variadic = (function (p__14544,body){
var vec__14545 = p__14544;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__14548 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__14549 = "_method";
var G__14550 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__14548,G__14549,G__14550) : sablono.core.hidden_field.call(null,G__14548,G__14549,G__14550));
})()], null)),body));
});

sablono.core.form_to14541.cljs$lang$maxFixedArity = (1);

sablono.core.form_to14541.cljs$lang$applyTo = (function (seq14542){
var G__14543 = cljs.core.first(seq14542);
var seq14542__$1 = cljs.core.next(seq14542);
return sablono.core.form_to14541.cljs$core$IFn$_invoke$arity$variadic(G__14543,seq14542__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to14541);
