// Compiled by ClojureScript 1.10.329 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__15796__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__15793 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__15794 = cljs.core.seq.call(null,vec__15793);
var first__15795 = cljs.core.first.call(null,seq__15794);
var seq__15794__$1 = cljs.core.next.call(null,seq__15794);
var tag = first__15795;
var body = seq__15794__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__15796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15797__i = 0, G__15797__a = new Array(arguments.length -  0);
while (G__15797__i < G__15797__a.length) {G__15797__a[G__15797__i] = arguments[G__15797__i + 0]; ++G__15797__i;}
  args = new cljs.core.IndexedSeq(G__15797__a,0,null);
} 
return G__15796__delegate.call(this,args);};
G__15796.cljs$lang$maxFixedArity = 0;
G__15796.cljs$lang$applyTo = (function (arglist__15798){
var args = cljs.core.seq(arglist__15798);
return G__15796__delegate(args);
});
G__15796.cljs$core$IFn$_invoke$arity$variadic = G__15796__delegate;
return G__15796;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4311__auto__ = (function sablono$core$update_arglists_$_iter__15799(s__15800){
return (new cljs.core.LazySeq(null,(function (){
var s__15800__$1 = s__15800;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__15800__$1);
if(temp__5753__auto__){
var s__15800__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15800__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__15800__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__15802 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__15801 = (0);
while(true){
if((i__15801 < size__4310__auto__)){
var args = cljs.core._nth.call(null,c__4309__auto__,i__15801);
cljs.core.chunk_append.call(null,b__15802,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__15803 = (i__15801 + (1));
i__15801 = G__15803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15802),sablono$core$update_arglists_$_iter__15799.call(null,cljs.core.chunk_rest.call(null,s__15800__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15802),null);
}
} else {
var args = cljs.core.first.call(null,s__15800__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__15799.call(null,cljs.core.rest.call(null,s__15800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4521__auto__ = [];
var len__4518__auto___15809 = arguments.length;
var i__4519__auto___15810 = (0);
while(true){
if((i__4519__auto___15810 < len__4518__auto___15809)){
args__4521__auto__.push((arguments[i__4519__auto___15810]));

var G__15811 = (i__4519__auto___15810 + (1));
i__4519__auto___15810 = G__15811;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4311__auto__ = (function sablono$core$iter__15805(s__15806){
return (new cljs.core.LazySeq(null,(function (){
var s__15806__$1 = s__15806;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__15806__$1);
if(temp__5753__auto__){
var s__15806__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15806__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__15806__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__15808 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__15807 = (0);
while(true){
if((i__15807 < size__4310__auto__)){
var style = cljs.core._nth.call(null,c__4309__auto__,i__15807);
cljs.core.chunk_append.call(null,b__15808,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__15812 = (i__15807 + (1));
i__15807 = G__15812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15808),sablono$core$iter__15805.call(null,cljs.core.chunk_rest.call(null,s__15806__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15808),null);
}
} else {
var style = cljs.core.first.call(null,s__15806__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__15805.call(null,cljs.core.rest.call(null,s__15806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq15804){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15804));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to15813 = (function sablono$core$link_to15813(var_args){
var args__4521__auto__ = [];
var len__4518__auto___15816 = arguments.length;
var i__4519__auto___15817 = (0);
while(true){
if((i__4519__auto___15817 < len__4518__auto___15816)){
args__4521__auto__.push((arguments[i__4519__auto___15817]));

var G__15818 = (i__4519__auto___15817 + (1));
i__4519__auto___15817 = G__15818;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to15813.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

sablono.core.link_to15813.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to15813.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to15813.cljs$lang$applyTo = (function (seq15814){
var G__15815 = cljs.core.first.call(null,seq15814);
var seq15814__$1 = cljs.core.next.call(null,seq15814);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15815,seq15814__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15813);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to15819 = (function sablono$core$mail_to15819(var_args){
var args__4521__auto__ = [];
var len__4518__auto___15826 = arguments.length;
var i__4519__auto___15827 = (0);
while(true){
if((i__4519__auto___15827 < len__4518__auto___15826)){
args__4521__auto__.push((arguments[i__4519__auto___15827]));

var G__15828 = (i__4519__auto___15827 + (1));
i__4519__auto___15827 = G__15828;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to15819.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

sablono.core.mail_to15819.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__15822){
var vec__15823 = p__15822;
var content = cljs.core.nth.call(null,vec__15823,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3936__auto__ = content;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to15819.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to15819.cljs$lang$applyTo = (function (seq15820){
var G__15821 = cljs.core.first.call(null,seq15820);
var seq15820__$1 = cljs.core.next.call(null,seq15820);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15821,seq15820__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15819);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list15829 = (function sablono$core$unordered_list15829(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4311__auto__ = (function sablono$core$unordered_list15829_$_iter__15830(s__15831){
return (new cljs.core.LazySeq(null,(function (){
var s__15831__$1 = s__15831;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__15831__$1);
if(temp__5753__auto__){
var s__15831__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15831__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__15831__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__15833 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__15832 = (0);
while(true){
if((i__15832 < size__4310__auto__)){
var x = cljs.core._nth.call(null,c__4309__auto__,i__15832);
cljs.core.chunk_append.call(null,b__15833,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15834 = (i__15832 + (1));
i__15832 = G__15834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15833),sablono$core$unordered_list15829_$_iter__15830.call(null,cljs.core.chunk_rest.call(null,s__15831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15833),null);
}
} else {
var x = cljs.core.first.call(null,s__15831__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list15829_$_iter__15830.call(null,cljs.core.rest.call(null,s__15831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15829);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list15835 = (function sablono$core$ordered_list15835(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4311__auto__ = (function sablono$core$ordered_list15835_$_iter__15836(s__15837){
return (new cljs.core.LazySeq(null,(function (){
var s__15837__$1 = s__15837;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__15837__$1);
if(temp__5753__auto__){
var s__15837__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15837__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__15837__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__15839 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__15838 = (0);
while(true){
if((i__15838 < size__4310__auto__)){
var x = cljs.core._nth.call(null,c__4309__auto__,i__15838);
cljs.core.chunk_append.call(null,b__15839,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15840 = (i__15838 + (1));
i__15838 = G__15840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15839),sablono$core$ordered_list15835_$_iter__15836.call(null,cljs.core.chunk_rest.call(null,s__15837__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15839),null);
}
} else {
var x = cljs.core.first.call(null,s__15837__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list15835_$_iter__15836.call(null,cljs.core.rest.call(null,s__15837__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15835);
/**
 * Create an image element.
 */
sablono.core.image15841 = (function sablono$core$image15841(var_args){
var G__15843 = arguments.length;
switch (G__15843) {
case 1:
return sablono.core.image15841.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image15841.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image15841.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image15841.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image15841.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15841);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__15845_SHARP_,p2__15846_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15845_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15846_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__15847_SHARP_,p2__15848_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15847_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15848_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3936__auto__ = value;
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
sablono.core.color_field15849 = (function sablono$core$color_field15849(var_args){
var G__15851 = arguments.length;
switch (G__15851) {
case 1:
return sablono.core.color_field15849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field15849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field15849.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.color_field15849.call(null,name__15783__auto__,null);
});

sablono.core.color_field15849.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.color_field15849.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field15849);

/**
 * Creates a date input field.
 */
sablono.core.date_field15852 = (function sablono$core$date_field15852(var_args){
var G__15854 = arguments.length;
switch (G__15854) {
case 1:
return sablono.core.date_field15852.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field15852.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field15852.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.date_field15852.call(null,name__15783__auto__,null);
});

sablono.core.date_field15852.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.date_field15852.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field15852);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field15855 = (function sablono$core$datetime_field15855(var_args){
var G__15857 = arguments.length;
switch (G__15857) {
case 1:
return sablono.core.datetime_field15855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field15855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field15855.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.datetime_field15855.call(null,name__15783__auto__,null);
});

sablono.core.datetime_field15855.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.datetime_field15855.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field15855);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field15858 = (function sablono$core$datetime_local_field15858(var_args){
var G__15860 = arguments.length;
switch (G__15860) {
case 1:
return sablono.core.datetime_local_field15858.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field15858.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field15858.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.datetime_local_field15858.call(null,name__15783__auto__,null);
});

sablono.core.datetime_local_field15858.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.datetime_local_field15858.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field15858);

/**
 * Creates a email input field.
 */
sablono.core.email_field15861 = (function sablono$core$email_field15861(var_args){
var G__15863 = arguments.length;
switch (G__15863) {
case 1:
return sablono.core.email_field15861.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field15861.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field15861.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.email_field15861.call(null,name__15783__auto__,null);
});

sablono.core.email_field15861.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.email_field15861.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15861);

/**
 * Creates a file input field.
 */
sablono.core.file_field15864 = (function sablono$core$file_field15864(var_args){
var G__15866 = arguments.length;
switch (G__15866) {
case 1:
return sablono.core.file_field15864.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field15864.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field15864.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.file_field15864.call(null,name__15783__auto__,null);
});

sablono.core.file_field15864.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.file_field15864.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field15864);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field15867 = (function sablono$core$hidden_field15867(var_args){
var G__15869 = arguments.length;
switch (G__15869) {
case 1:
return sablono.core.hidden_field15867.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field15867.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field15867.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.hidden_field15867.call(null,name__15783__auto__,null);
});

sablono.core.hidden_field15867.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.hidden_field15867.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15867);

/**
 * Creates a month input field.
 */
sablono.core.month_field15870 = (function sablono$core$month_field15870(var_args){
var G__15872 = arguments.length;
switch (G__15872) {
case 1:
return sablono.core.month_field15870.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field15870.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field15870.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.month_field15870.call(null,name__15783__auto__,null);
});

sablono.core.month_field15870.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.month_field15870.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field15870);

/**
 * Creates a number input field.
 */
sablono.core.number_field15873 = (function sablono$core$number_field15873(var_args){
var G__15875 = arguments.length;
switch (G__15875) {
case 1:
return sablono.core.number_field15873.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field15873.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field15873.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.number_field15873.call(null,name__15783__auto__,null);
});

sablono.core.number_field15873.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.number_field15873.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field15873);

/**
 * Creates a password input field.
 */
sablono.core.password_field15876 = (function sablono$core$password_field15876(var_args){
var G__15878 = arguments.length;
switch (G__15878) {
case 1:
return sablono.core.password_field15876.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field15876.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field15876.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.password_field15876.call(null,name__15783__auto__,null);
});

sablono.core.password_field15876.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.password_field15876.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15876);

/**
 * Creates a range input field.
 */
sablono.core.range_field15879 = (function sablono$core$range_field15879(var_args){
var G__15881 = arguments.length;
switch (G__15881) {
case 1:
return sablono.core.range_field15879.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field15879.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field15879.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.range_field15879.call(null,name__15783__auto__,null);
});

sablono.core.range_field15879.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.range_field15879.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field15879);

/**
 * Creates a search input field.
 */
sablono.core.search_field15882 = (function sablono$core$search_field15882(var_args){
var G__15884 = arguments.length;
switch (G__15884) {
case 1:
return sablono.core.search_field15882.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field15882.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field15882.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.search_field15882.call(null,name__15783__auto__,null);
});

sablono.core.search_field15882.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.search_field15882.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field15882);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field15885 = (function sablono$core$tel_field15885(var_args){
var G__15887 = arguments.length;
switch (G__15887) {
case 1:
return sablono.core.tel_field15885.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field15885.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field15885.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.tel_field15885.call(null,name__15783__auto__,null);
});

sablono.core.tel_field15885.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.tel_field15885.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field15885);

/**
 * Creates a text input field.
 */
sablono.core.text_field15888 = (function sablono$core$text_field15888(var_args){
var G__15890 = arguments.length;
switch (G__15890) {
case 1:
return sablono.core.text_field15888.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field15888.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field15888.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.text_field15888.call(null,name__15783__auto__,null);
});

sablono.core.text_field15888.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.text_field15888.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15888);

/**
 * Creates a time input field.
 */
sablono.core.time_field15891 = (function sablono$core$time_field15891(var_args){
var G__15893 = arguments.length;
switch (G__15893) {
case 1:
return sablono.core.time_field15891.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field15891.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field15891.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.time_field15891.call(null,name__15783__auto__,null);
});

sablono.core.time_field15891.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.time_field15891.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field15891);

/**
 * Creates a url input field.
 */
sablono.core.url_field15894 = (function sablono$core$url_field15894(var_args){
var G__15896 = arguments.length;
switch (G__15896) {
case 1:
return sablono.core.url_field15894.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field15894.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field15894.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.url_field15894.call(null,name__15783__auto__,null);
});

sablono.core.url_field15894.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.url_field15894.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field15894);

/**
 * Creates a week input field.
 */
sablono.core.week_field15897 = (function sablono$core$week_field15897(var_args){
var G__15899 = arguments.length;
switch (G__15899) {
case 1:
return sablono.core.week_field15897.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field15897.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field15897.cljs$core$IFn$_invoke$arity$1 = (function (name__15783__auto__){
return sablono.core.week_field15897.call(null,name__15783__auto__,null);
});

sablono.core.week_field15897.cljs$core$IFn$_invoke$arity$2 = (function (name__15783__auto__,value__15784__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__15783__auto__,value__15784__auto__);
});

sablono.core.week_field15897.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field15897);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box15917 = (function sablono$core$check_box15917(var_args){
var G__15919 = arguments.length;
switch (G__15919) {
case 1:
return sablono.core.check_box15917.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box15917.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box15917.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box15917.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box15917.call(null,name,null);
});

sablono.core.check_box15917.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box15917.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box15917.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box15917.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15917);
/**
 * Creates a radio button.
 */
sablono.core.radio_button15921 = (function sablono$core$radio_button15921(var_args){
var G__15923 = arguments.length;
switch (G__15923) {
case 1:
return sablono.core.radio_button15921.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button15921.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button15921.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button15921.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button15921.call(null,group,null);
});

sablono.core.radio_button15921.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button15921.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button15921.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button15921.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15921);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options15925 = (function sablono$core$select_options15925(coll){
var iter__4311__auto__ = (function sablono$core$select_options15925_$_iter__15926(s__15927){
return (new cljs.core.LazySeq(null,(function (){
var s__15927__$1 = s__15927;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__15927__$1);
if(temp__5753__auto__){
var s__15927__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15927__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__15927__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__15929 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__15928 = (0);
while(true){
if((i__15928 < size__4310__auto__)){
var x = cljs.core._nth.call(null,c__4309__auto__,i__15928);
cljs.core.chunk_append.call(null,b__15929,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15930 = x;
var text = cljs.core.nth.call(null,vec__15930,(0),null);
var val = cljs.core.nth.call(null,vec__15930,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__15930,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options15925.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__15936 = (i__15928 + (1));
i__15928 = G__15936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15929),sablono$core$select_options15925_$_iter__15926.call(null,cljs.core.chunk_rest.call(null,s__15927__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15929),null);
}
} else {
var x = cljs.core.first.call(null,s__15927__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15933 = x;
var text = cljs.core.nth.call(null,vec__15933,(0),null);
var val = cljs.core.nth.call(null,vec__15933,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__15933,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options15925.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options15925_$_iter__15926.call(null,cljs.core.rest.call(null,s__15927__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15925);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down15937 = (function sablono$core$drop_down15937(var_args){
var G__15939 = arguments.length;
switch (G__15939) {
case 2:
return sablono.core.drop_down15937.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down15937.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down15937.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down15937.call(null,name,options,null);
});

sablono.core.drop_down15937.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down15937.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15937);
/**
 * Creates a text area element.
 */
sablono.core.text_area15941 = (function sablono$core$text_area15941(var_args){
var G__15943 = arguments.length;
switch (G__15943) {
case 1:
return sablono.core.text_area15941.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area15941.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area15941.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area15941.call(null,name,null);
});

sablono.core.text_area15941.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3936__auto__ = value;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area15941.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15941);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label15945 = (function sablono$core$label15945(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15945);
/**
 * Creates a submit button.
 */
sablono.core.submit_button15946 = (function sablono$core$submit_button15946(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15946);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button15947 = (function sablono$core$reset_button15947(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15947);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to15948 = (function sablono$core$form_to15948(var_args){
var args__4521__auto__ = [];
var len__4518__auto___15955 = arguments.length;
var i__4519__auto___15956 = (0);
while(true){
if((i__4519__auto___15956 < len__4518__auto___15955)){
args__4521__auto__.push((arguments[i__4519__auto___15956]));

var G__15957 = (i__4519__auto___15956 + (1));
i__4519__auto___15956 = G__15957;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to15948.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

sablono.core.form_to15948.cljs$core$IFn$_invoke$arity$variadic = (function (p__15951,body){
var vec__15952 = p__15951;
var method = cljs.core.nth.call(null,vec__15952,(0),null);
var action = cljs.core.nth.call(null,vec__15952,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to15948.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to15948.cljs$lang$applyTo = (function (seq15949){
var G__15950 = cljs.core.first.call(null,seq15949);
var seq15949__$1 = cljs.core.next.call(null,seq15949);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15950,seq15949__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15948);

//# sourceMappingURL=core.js.map
