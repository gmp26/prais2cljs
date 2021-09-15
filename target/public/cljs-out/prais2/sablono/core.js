// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__13829__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__13826 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__13827 = cljs.core.seq(vec__13826);
var first__13828 = cljs.core.first(seq__13827);
var seq__13827__$1 = cljs.core.next(seq__13827);
var tag = first__13828;
var body = seq__13827__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__13829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13830__i = 0, G__13830__a = new Array(arguments.length -  0);
while (G__13830__i < G__13830__a.length) {G__13830__a[G__13830__i] = arguments[G__13830__i + 0]; ++G__13830__i;}
  args = new cljs.core.IndexedSeq(G__13830__a,0,null);
} 
return G__13829__delegate.call(this,args);};
G__13829.cljs$lang$maxFixedArity = 0;
G__13829.cljs$lang$applyTo = (function (arglist__13831){
var args = cljs.core.seq(arglist__13831);
return G__13829__delegate(args);
});
G__13829.cljs$core$IFn$_invoke$arity$variadic = G__13829__delegate;
return G__13829;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4311__auto__ = (function sablono$core$update_arglists_$_iter__13832(s__13833){
return (new cljs.core.LazySeq(null,(function (){
var s__13833__$1 = s__13833;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__13833__$1);
if(temp__5753__auto__){
var s__13833__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13833__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__13833__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__13835 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__13834 = (0);
while(true){
if((i__13834 < size__4310__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__13834);
cljs.core.chunk_append(b__13835,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__13836 = (i__13834 + (1));
i__13834 = G__13836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13835),sablono$core$update_arglists_$_iter__13832(cljs.core.chunk_rest(s__13833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13835),null);
}
} else {
var args = cljs.core.first(s__13833__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__13832(cljs.core.rest(s__13833__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4521__auto__ = [];
var len__4518__auto___13842 = arguments.length;
var i__4519__auto___13843 = (0);
while(true){
if((i__4519__auto___13843 < len__4518__auto___13842)){
args__4521__auto__.push((arguments[i__4519__auto___13843]));

var G__13844 = (i__4519__auto___13843 + (1));
i__4519__auto___13843 = G__13844;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4311__auto__ = (function sablono$core$iter__13838(s__13839){
return (new cljs.core.LazySeq(null,(function (){
var s__13839__$1 = s__13839;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__13839__$1);
if(temp__5753__auto__){
var s__13839__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13839__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__13839__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__13841 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__13840 = (0);
while(true){
if((i__13840 < size__4310__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__13840);
cljs.core.chunk_append(b__13841,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__13845 = (i__13840 + (1));
i__13840 = G__13845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13841),sablono$core$iter__13838(cljs.core.chunk_rest(s__13839__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13841),null);
}
} else {
var style = cljs.core.first(s__13839__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__13838(cljs.core.rest(s__13839__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq13837){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13837));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__13846 = goog.dom.getDocument().body;
var G__13847 = (function (){var G__13848 = "script";
var G__13849 = ({"src": src});
return goog.dom.createDom(G__13848,G__13849);
})();
return goog.dom.appendChild(G__13846,G__13847);
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
sablono.core.link_to13850 = (function sablono$core$link_to13850(var_args){
var args__4521__auto__ = [];
var len__4518__auto___13853 = arguments.length;
var i__4519__auto___13854 = (0);
while(true){
if((i__4519__auto___13854 < len__4518__auto___13853)){
args__4521__auto__.push((arguments[i__4519__auto___13854]));

var G__13855 = (i__4519__auto___13854 + (1));
i__4519__auto___13854 = G__13855;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to13850.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

sablono.core.link_to13850.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
});

sablono.core.link_to13850.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to13850.cljs$lang$applyTo = (function (seq13851){
var G__13852 = cljs.core.first(seq13851);
var seq13851__$1 = cljs.core.next(seq13851);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13852,seq13851__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to13850);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to13856 = (function sablono$core$mail_to13856(var_args){
var args__4521__auto__ = [];
var len__4518__auto___13863 = arguments.length;
var i__4519__auto___13864 = (0);
while(true){
if((i__4519__auto___13864 < len__4518__auto___13863)){
args__4521__auto__.push((arguments[i__4519__auto___13864]));

var G__13865 = (i__4519__auto___13864 + (1));
i__4519__auto___13864 = G__13865;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to13856.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

sablono.core.mail_to13856.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13859){
var vec__13860 = p__13859;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13860,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3936__auto__ = content;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to13856.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to13856.cljs$lang$applyTo = (function (seq13857){
var G__13858 = cljs.core.first(seq13857);
var seq13857__$1 = cljs.core.next(seq13857);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13858,seq13857__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to13856);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13866 = (function sablono$core$unordered_list13866(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4311__auto__ = (function sablono$core$unordered_list13866_$_iter__13867(s__13868){
return (new cljs.core.LazySeq(null,(function (){
var s__13868__$1 = s__13868;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__13868__$1);
if(temp__5753__auto__){
var s__13868__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13868__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__13868__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__13870 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__13869 = (0);
while(true){
if((i__13869 < size__4310__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__13869);
cljs.core.chunk_append(b__13870,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13871 = (i__13869 + (1));
i__13869 = G__13871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13870),sablono$core$unordered_list13866_$_iter__13867(cljs.core.chunk_rest(s__13868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13870),null);
}
} else {
var x = cljs.core.first(s__13868__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list13866_$_iter__13867(cljs.core.rest(s__13868__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list13866);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13872 = (function sablono$core$ordered_list13872(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__4311__auto__ = (function sablono$core$ordered_list13872_$_iter__13873(s__13874){
return (new cljs.core.LazySeq(null,(function (){
var s__13874__$1 = s__13874;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__13874__$1);
if(temp__5753__auto__){
var s__13874__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13874__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__13874__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__13876 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__13875 = (0);
while(true){
if((i__13875 < size__4310__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__13875);
cljs.core.chunk_append(b__13876,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__13877 = (i__13875 + (1));
i__13875 = G__13877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13876),sablono$core$ordered_list13872_$_iter__13873(cljs.core.chunk_rest(s__13874__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13876),null);
}
} else {
var x = cljs.core.first(s__13874__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list13872_$_iter__13873(cljs.core.rest(s__13874__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list13872);
/**
 * Create an image element.
 */
sablono.core.image13878 = (function sablono$core$image13878(var_args){
var G__13880 = arguments.length;
switch (G__13880) {
case 1:
return sablono.core.image13878.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13878.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image13878.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
});

sablono.core.image13878.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image13878.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image13878);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13882_SHARP_,p2__13883_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13882_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__13883_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13884_SHARP_,p2__13885_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13884_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__13885_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field13886 = (function sablono$core$color_field13886(var_args){
var G__13888 = arguments.length;
switch (G__13888) {
case 1:
return sablono.core.color_field13886.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13886.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field13886.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.color_field13886.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.color_field13886.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.color_field13886.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field13886);

/**
 * Creates a date input field.
 */
sablono.core.date_field13889 = (function sablono$core$date_field13889(var_args){
var G__13891 = arguments.length;
switch (G__13891) {
case 1:
return sablono.core.date_field13889.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13889.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field13889.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.date_field13889.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.date_field13889.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.date_field13889.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field13889);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13892 = (function sablono$core$datetime_field13892(var_args){
var G__13894 = arguments.length;
switch (G__13894) {
case 1:
return sablono.core.datetime_field13892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field13892.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.datetime_field13892.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.datetime_field13892.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.datetime_field13892.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field13892);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13895 = (function sablono$core$datetime_local_field13895(var_args){
var G__13897 = arguments.length;
switch (G__13897) {
case 1:
return sablono.core.datetime_local_field13895.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13895.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field13895.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.datetime_local_field13895.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.datetime_local_field13895.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.datetime_local_field13895.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field13895);

/**
 * Creates a email input field.
 */
sablono.core.email_field13898 = (function sablono$core$email_field13898(var_args){
var G__13900 = arguments.length;
switch (G__13900) {
case 1:
return sablono.core.email_field13898.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field13898.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.email_field13898.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.email_field13898.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.email_field13898.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field13898);

/**
 * Creates a file input field.
 */
sablono.core.file_field13901 = (function sablono$core$file_field13901(var_args){
var G__13903 = arguments.length;
switch (G__13903) {
case 1:
return sablono.core.file_field13901.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13901.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field13901.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.file_field13901.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.file_field13901.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.file_field13901.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field13901);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13904 = (function sablono$core$hidden_field13904(var_args){
var G__13906 = arguments.length;
switch (G__13906) {
case 1:
return sablono.core.hidden_field13904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field13904.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.hidden_field13904.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.hidden_field13904.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.hidden_field13904.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field13904);

/**
 * Creates a month input field.
 */
sablono.core.month_field13907 = (function sablono$core$month_field13907(var_args){
var G__13909 = arguments.length;
switch (G__13909) {
case 1:
return sablono.core.month_field13907.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13907.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field13907.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.month_field13907.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.month_field13907.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.month_field13907.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field13907);

/**
 * Creates a number input field.
 */
sablono.core.number_field13910 = (function sablono$core$number_field13910(var_args){
var G__13912 = arguments.length;
switch (G__13912) {
case 1:
return sablono.core.number_field13910.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13910.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field13910.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.number_field13910.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.number_field13910.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.number_field13910.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field13910);

/**
 * Creates a password input field.
 */
sablono.core.password_field13913 = (function sablono$core$password_field13913(var_args){
var G__13915 = arguments.length;
switch (G__13915) {
case 1:
return sablono.core.password_field13913.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13913.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field13913.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.password_field13913.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.password_field13913.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.password_field13913.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field13913);

/**
 * Creates a range input field.
 */
sablono.core.range_field13916 = (function sablono$core$range_field13916(var_args){
var G__13918 = arguments.length;
switch (G__13918) {
case 1:
return sablono.core.range_field13916.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13916.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field13916.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.range_field13916.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.range_field13916.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.range_field13916.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field13916);

/**
 * Creates a search input field.
 */
sablono.core.search_field13919 = (function sablono$core$search_field13919(var_args){
var G__13921 = arguments.length;
switch (G__13921) {
case 1:
return sablono.core.search_field13919.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13919.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field13919.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.search_field13919.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.search_field13919.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.search_field13919.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field13919);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13922 = (function sablono$core$tel_field13922(var_args){
var G__13924 = arguments.length;
switch (G__13924) {
case 1:
return sablono.core.tel_field13922.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13922.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field13922.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.tel_field13922.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.tel_field13922.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.tel_field13922.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field13922);

/**
 * Creates a text input field.
 */
sablono.core.text_field13925 = (function sablono$core$text_field13925(var_args){
var G__13927 = arguments.length;
switch (G__13927) {
case 1:
return sablono.core.text_field13925.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13925.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field13925.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.text_field13925.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.text_field13925.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.text_field13925.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field13925);

/**
 * Creates a time input field.
 */
sablono.core.time_field13928 = (function sablono$core$time_field13928(var_args){
var G__13930 = arguments.length;
switch (G__13930) {
case 1:
return sablono.core.time_field13928.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13928.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field13928.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.time_field13928.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.time_field13928.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.time_field13928.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field13928);

/**
 * Creates a url input field.
 */
sablono.core.url_field13931 = (function sablono$core$url_field13931(var_args){
var G__13933 = arguments.length;
switch (G__13933) {
case 1:
return sablono.core.url_field13931.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13931.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field13931.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.url_field13931.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.url_field13931.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.url_field13931.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field13931);

/**
 * Creates a week input field.
 */
sablono.core.week_field13934 = (function sablono$core$week_field13934(var_args){
var G__13936 = arguments.length;
switch (G__13936) {
case 1:
return sablono.core.week_field13934.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13934.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field13934.cljs$core$IFn$_invoke$arity$1 = (function (name__13816__auto__){
return sablono.core.week_field13934.cljs$core$IFn$_invoke$arity$2(name__13816__auto__,null);
});

sablono.core.week_field13934.cljs$core$IFn$_invoke$arity$2 = (function (name__13816__auto__,value__13817__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__13816__auto__,value__13817__auto__);
});

sablono.core.week_field13934.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field13934);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13954 = (function sablono$core$check_box13954(var_args){
var G__13956 = arguments.length;
switch (G__13956) {
case 1:
return sablono.core.check_box13954.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13954.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13954.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box13954.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box13954.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box13954.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box13954.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box13954.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box13954.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box13954);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13958 = (function sablono$core$radio_button13958(var_args){
var G__13960 = arguments.length;
switch (G__13960) {
case 1:
return sablono.core.radio_button13958.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13958.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13958.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button13958.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button13958.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button13958.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button13958.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button13958.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button13958.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button13958);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__13962 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__13962);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13963 = (function sablono$core$select_options13963(coll){
var iter__4311__auto__ = (function sablono$core$select_options13963_$_iter__13964(s__13965){
return (new cljs.core.LazySeq(null,(function (){
var s__13965__$1 = s__13965;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__13965__$1);
if(temp__5753__auto__){
var s__13965__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13965__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__13965__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__13967 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__13966 = (0);
while(true){
if((i__13966 < size__4310__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__13966);
cljs.core.chunk_append(b__13967,((cljs.core.sequential_QMARK_(x))?(function (){var vec__13968 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13968,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13968,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13968,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options13963.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options13963.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options13963.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__13974 = (i__13966 + (1));
i__13966 = G__13974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13967),sablono$core$select_options13963_$_iter__13964(cljs.core.chunk_rest(s__13965__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13967),null);
}
} else {
var x = cljs.core.first(s__13965__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__13971 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13971,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13971,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13971,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options13963.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options13963.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options13963.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options13963_$_iter__13964(cljs.core.rest(s__13965__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options13963);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13975 = (function sablono$core$drop_down13975(var_args){
var G__13977 = arguments.length;
switch (G__13977) {
case 2:
return sablono.core.drop_down13975.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13975.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down13975.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13975.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down13975.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down13975.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down13975);
/**
 * Creates a text area element.
 */
sablono.core.text_area13979 = (function sablono$core$text_area13979(var_args){
var G__13981 = arguments.length;
switch (G__13981) {
case 1:
return sablono.core.text_area13979.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13979.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area13979.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area13979.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area13979.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area13979.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area13979);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13983 = (function sablono$core$label13983(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label13983);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13984 = (function sablono$core$submit_button13984(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button13984);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13985 = (function sablono$core$reset_button13985(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button13985);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to13986 = (function sablono$core$form_to13986(var_args){
var args__4521__auto__ = [];
var len__4518__auto___13996 = arguments.length;
var i__4519__auto___13997 = (0);
while(true){
if((i__4519__auto___13997 < len__4518__auto___13996)){
args__4521__auto__.push((arguments[i__4519__auto___13997]));

var G__13998 = (i__4519__auto___13997 + (1));
i__4519__auto___13997 = G__13998;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to13986.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

sablono.core.form_to13986.cljs$core$IFn$_invoke$arity$variadic = (function (p__13989,body){
var vec__13990 = p__13989;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13990,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13990,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__13993 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__13994 = "_method";
var G__13995 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__13993,G__13994,G__13995) : sablono.core.hidden_field.call(null,G__13993,G__13994,G__13995));
})()], null)),body));
});

sablono.core.form_to13986.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to13986.cljs$lang$applyTo = (function (seq13987){
var G__13988 = cljs.core.first(seq13987);
var seq13987__$1 = cljs.core.next(seq13987);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13988,seq13987__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to13986);
