// Compiled by ClojureScript 1.9.36 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__26545__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26542 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__26543 = cljs.core.seq.call(null,vec__26542);
var first__26544 = cljs.core.first.call(null,seq__26543);
var seq__26543__$1 = cljs.core.next.call(null,seq__26543);
var tag = first__26544;
var body = seq__26543__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26546__i = 0, G__26546__a = new Array(arguments.length -  0);
while (G__26546__i < G__26546__a.length) {G__26546__a[G__26546__i] = arguments[G__26546__i + 0]; ++G__26546__i;}
  args = new cljs.core.IndexedSeq(G__26546__a,0);
} 
return G__26545__delegate.call(this,args);};
G__26545.cljs$lang$maxFixedArity = 0;
G__26545.cljs$lang$applyTo = (function (arglist__26547){
var args = cljs.core.seq(arglist__26547);
return G__26545__delegate(args);
});
G__26545.cljs$core$IFn$_invoke$arity$variadic = G__26545__delegate;
return G__26545;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25443__auto__ = (function sablono$core$update_arglists_$_iter__26552(s__26553){
return (new cljs.core.LazySeq(null,(function (){
var s__26553__$1 = s__26553;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26553__$1);
if(temp__4657__auto__){
var s__26553__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26553__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__26553__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__26555 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__26554 = (0);
while(true){
if((i__26554 < size__25442__auto__)){
var args = cljs.core._nth.call(null,c__25441__auto__,i__26554);
cljs.core.chunk_append.call(null,b__26555,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26556 = (i__26554 + (1));
i__26554 = G__26556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26555),sablono$core$update_arglists_$_iter__26552.call(null,cljs.core.chunk_rest.call(null,s__26553__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26555),null);
}
} else {
var args = cljs.core.first.call(null,s__26553__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__26552.call(null,cljs.core.rest.call(null,s__26553__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25443__auto__.call(null,arglists);
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
var args__25745__auto__ = [];
var len__25738__auto___26562 = arguments.length;
var i__25739__auto___26563 = (0);
while(true){
if((i__25739__auto___26563 < len__25738__auto___26562)){
args__25745__auto__.push((arguments[i__25739__auto___26563]));

var G__26564 = (i__25739__auto___26563 + (1));
i__25739__auto___26563 = G__26564;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((0) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25746__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25443__auto__ = (function sablono$core$iter__26558(s__26559){
return (new cljs.core.LazySeq(null,(function (){
var s__26559__$1 = s__26559;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26559__$1);
if(temp__4657__auto__){
var s__26559__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26559__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__26559__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__26561 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__26560 = (0);
while(true){
if((i__26560 < size__25442__auto__)){
var style = cljs.core._nth.call(null,c__25441__auto__,i__26560);
cljs.core.chunk_append.call(null,b__26561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26565 = (i__26560 + (1));
i__26560 = G__26565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26561),sablono$core$iter__26558.call(null,cljs.core.chunk_rest.call(null,s__26559__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26561),null);
}
} else {
var style = cljs.core.first.call(null,s__26559__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__26558.call(null,cljs.core.rest.call(null,s__26559__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25443__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq26557){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26557));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
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
sablono.core.link_to26566 = (function sablono$core$link_to26566(var_args){
var args__25745__auto__ = [];
var len__25738__auto___26569 = arguments.length;
var i__25739__auto___26570 = (0);
while(true){
if((i__25739__auto___26570 < len__25738__auto___26569)){
args__25745__auto__.push((arguments[i__25739__auto___26570]));

var G__26571 = (i__25739__auto___26570 + (1));
i__25739__auto___26570 = G__26571;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((1) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to26566.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25746__auto__);
});

sablono.core.link_to26566.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to26566.cljs$lang$maxFixedArity = (1);

sablono.core.link_to26566.cljs$lang$applyTo = (function (seq26567){
var G__26568 = cljs.core.first.call(null,seq26567);
var seq26567__$1 = cljs.core.next.call(null,seq26567);
return sablono.core.link_to26566.cljs$core$IFn$_invoke$arity$variadic(G__26568,seq26567__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26566);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26572 = (function sablono$core$mail_to26572(var_args){
var args__25745__auto__ = [];
var len__25738__auto___26579 = arguments.length;
var i__25739__auto___26580 = (0);
while(true){
if((i__25739__auto___26580 < len__25738__auto___26579)){
args__25745__auto__.push((arguments[i__25739__auto___26580]));

var G__26581 = (i__25739__auto___26580 + (1));
i__25739__auto___26580 = G__26581;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((1) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to26572.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25746__auto__);
});

sablono.core.mail_to26572.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26575){
var vec__26576 = p__26575;
var content = cljs.core.nth.call(null,vec__26576,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24663__auto__ = content;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to26572.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to26572.cljs$lang$applyTo = (function (seq26573){
var G__26574 = cljs.core.first.call(null,seq26573);
var seq26573__$1 = cljs.core.next.call(null,seq26573);
return sablono.core.mail_to26572.cljs$core$IFn$_invoke$arity$variadic(G__26574,seq26573__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26572);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26582 = (function sablono$core$unordered_list26582(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25443__auto__ = (function sablono$core$unordered_list26582_$_iter__26587(s__26588){
return (new cljs.core.LazySeq(null,(function (){
var s__26588__$1 = s__26588;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26588__$1);
if(temp__4657__auto__){
var s__26588__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26588__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__26588__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__26590 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__26589 = (0);
while(true){
if((i__26589 < size__25442__auto__)){
var x = cljs.core._nth.call(null,c__25441__auto__,i__26589);
cljs.core.chunk_append.call(null,b__26590,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26591 = (i__26589 + (1));
i__26589 = G__26591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26590),sablono$core$unordered_list26582_$_iter__26587.call(null,cljs.core.chunk_rest.call(null,s__26588__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26590),null);
}
} else {
var x = cljs.core.first.call(null,s__26588__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26582_$_iter__26587.call(null,cljs.core.rest.call(null,s__26588__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25443__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26582);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26592 = (function sablono$core$ordered_list26592(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25443__auto__ = (function sablono$core$ordered_list26592_$_iter__26597(s__26598){
return (new cljs.core.LazySeq(null,(function (){
var s__26598__$1 = s__26598;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26598__$1);
if(temp__4657__auto__){
var s__26598__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26598__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__26598__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__26600 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__26599 = (0);
while(true){
if((i__26599 < size__25442__auto__)){
var x = cljs.core._nth.call(null,c__25441__auto__,i__26599);
cljs.core.chunk_append.call(null,b__26600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26601 = (i__26599 + (1));
i__26599 = G__26601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26600),sablono$core$ordered_list26592_$_iter__26597.call(null,cljs.core.chunk_rest.call(null,s__26598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26600),null);
}
} else {
var x = cljs.core.first.call(null,s__26598__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26592_$_iter__26597.call(null,cljs.core.rest.call(null,s__26598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25443__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26592);
/**
 * Create an image element.
 */
sablono.core.image26602 = (function sablono$core$image26602(var_args){
var args26603 = [];
var len__25738__auto___26606 = arguments.length;
var i__25739__auto___26607 = (0);
while(true){
if((i__25739__auto___26607 < len__25738__auto___26606)){
args26603.push((arguments[i__25739__auto___26607]));

var G__26608 = (i__25739__auto___26607 + (1));
i__25739__auto___26607 = G__26608;
continue;
} else {
}
break;
}

var G__26605 = args26603.length;
switch (G__26605) {
case 1:
return sablono.core.image26602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26603.length)].join('')));

}
});

sablono.core.image26602.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image26602.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image26602.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26602);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26610_SHARP_,p2__26611_SHARP_){
return [cljs.core.str(p1__26610_SHARP_),cljs.core.str("["),cljs.core.str(p2__26611_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26612_SHARP_,p2__26613_SHARP_){
return [cljs.core.str(p1__26612_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26613_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field26614 = (function sablono$core$color_field26614(var_args){
var args26615 = [];
var len__25738__auto___26682 = arguments.length;
var i__25739__auto___26683 = (0);
while(true){
if((i__25739__auto___26683 < len__25738__auto___26682)){
args26615.push((arguments[i__25739__auto___26683]));

var G__26684 = (i__25739__auto___26683 + (1));
i__25739__auto___26683 = G__26684;
continue;
} else {
}
break;
}

var G__26617 = args26615.length;
switch (G__26617) {
case 1:
return sablono.core.color_field26614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26615.length)].join('')));

}
});

sablono.core.color_field26614.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.color_field26614.call(null,name__26529__auto__,null);
});

sablono.core.color_field26614.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.color_field26614.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26614);

/**
 * Creates a date input field.
 */
sablono.core.date_field26618 = (function sablono$core$date_field26618(var_args){
var args26619 = [];
var len__25738__auto___26686 = arguments.length;
var i__25739__auto___26687 = (0);
while(true){
if((i__25739__auto___26687 < len__25738__auto___26686)){
args26619.push((arguments[i__25739__auto___26687]));

var G__26688 = (i__25739__auto___26687 + (1));
i__25739__auto___26687 = G__26688;
continue;
} else {
}
break;
}

var G__26621 = args26619.length;
switch (G__26621) {
case 1:
return sablono.core.date_field26618.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26618.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26619.length)].join('')));

}
});

sablono.core.date_field26618.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.date_field26618.call(null,name__26529__auto__,null);
});

sablono.core.date_field26618.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.date_field26618.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26618);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26622 = (function sablono$core$datetime_field26622(var_args){
var args26623 = [];
var len__25738__auto___26690 = arguments.length;
var i__25739__auto___26691 = (0);
while(true){
if((i__25739__auto___26691 < len__25738__auto___26690)){
args26623.push((arguments[i__25739__auto___26691]));

var G__26692 = (i__25739__auto___26691 + (1));
i__25739__auto___26691 = G__26692;
continue;
} else {
}
break;
}

var G__26625 = args26623.length;
switch (G__26625) {
case 1:
return sablono.core.datetime_field26622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26623.length)].join('')));

}
});

sablono.core.datetime_field26622.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.datetime_field26622.call(null,name__26529__auto__,null);
});

sablono.core.datetime_field26622.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.datetime_field26622.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26622);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26626 = (function sablono$core$datetime_local_field26626(var_args){
var args26627 = [];
var len__25738__auto___26694 = arguments.length;
var i__25739__auto___26695 = (0);
while(true){
if((i__25739__auto___26695 < len__25738__auto___26694)){
args26627.push((arguments[i__25739__auto___26695]));

var G__26696 = (i__25739__auto___26695 + (1));
i__25739__auto___26695 = G__26696;
continue;
} else {
}
break;
}

var G__26629 = args26627.length;
switch (G__26629) {
case 1:
return sablono.core.datetime_local_field26626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26627.length)].join('')));

}
});

sablono.core.datetime_local_field26626.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.datetime_local_field26626.call(null,name__26529__auto__,null);
});

sablono.core.datetime_local_field26626.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.datetime_local_field26626.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26626);

/**
 * Creates a email input field.
 */
sablono.core.email_field26630 = (function sablono$core$email_field26630(var_args){
var args26631 = [];
var len__25738__auto___26698 = arguments.length;
var i__25739__auto___26699 = (0);
while(true){
if((i__25739__auto___26699 < len__25738__auto___26698)){
args26631.push((arguments[i__25739__auto___26699]));

var G__26700 = (i__25739__auto___26699 + (1));
i__25739__auto___26699 = G__26700;
continue;
} else {
}
break;
}

var G__26633 = args26631.length;
switch (G__26633) {
case 1:
return sablono.core.email_field26630.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26630.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26631.length)].join('')));

}
});

sablono.core.email_field26630.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.email_field26630.call(null,name__26529__auto__,null);
});

sablono.core.email_field26630.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.email_field26630.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26630);

/**
 * Creates a file input field.
 */
sablono.core.file_field26634 = (function sablono$core$file_field26634(var_args){
var args26635 = [];
var len__25738__auto___26702 = arguments.length;
var i__25739__auto___26703 = (0);
while(true){
if((i__25739__auto___26703 < len__25738__auto___26702)){
args26635.push((arguments[i__25739__auto___26703]));

var G__26704 = (i__25739__auto___26703 + (1));
i__25739__auto___26703 = G__26704;
continue;
} else {
}
break;
}

var G__26637 = args26635.length;
switch (G__26637) {
case 1:
return sablono.core.file_field26634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26635.length)].join('')));

}
});

sablono.core.file_field26634.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.file_field26634.call(null,name__26529__auto__,null);
});

sablono.core.file_field26634.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.file_field26634.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26634);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26638 = (function sablono$core$hidden_field26638(var_args){
var args26639 = [];
var len__25738__auto___26706 = arguments.length;
var i__25739__auto___26707 = (0);
while(true){
if((i__25739__auto___26707 < len__25738__auto___26706)){
args26639.push((arguments[i__25739__auto___26707]));

var G__26708 = (i__25739__auto___26707 + (1));
i__25739__auto___26707 = G__26708;
continue;
} else {
}
break;
}

var G__26641 = args26639.length;
switch (G__26641) {
case 1:
return sablono.core.hidden_field26638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26639.length)].join('')));

}
});

sablono.core.hidden_field26638.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.hidden_field26638.call(null,name__26529__auto__,null);
});

sablono.core.hidden_field26638.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.hidden_field26638.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26638);

/**
 * Creates a month input field.
 */
sablono.core.month_field26642 = (function sablono$core$month_field26642(var_args){
var args26643 = [];
var len__25738__auto___26710 = arguments.length;
var i__25739__auto___26711 = (0);
while(true){
if((i__25739__auto___26711 < len__25738__auto___26710)){
args26643.push((arguments[i__25739__auto___26711]));

var G__26712 = (i__25739__auto___26711 + (1));
i__25739__auto___26711 = G__26712;
continue;
} else {
}
break;
}

var G__26645 = args26643.length;
switch (G__26645) {
case 1:
return sablono.core.month_field26642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26643.length)].join('')));

}
});

sablono.core.month_field26642.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.month_field26642.call(null,name__26529__auto__,null);
});

sablono.core.month_field26642.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.month_field26642.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26642);

/**
 * Creates a number input field.
 */
sablono.core.number_field26646 = (function sablono$core$number_field26646(var_args){
var args26647 = [];
var len__25738__auto___26714 = arguments.length;
var i__25739__auto___26715 = (0);
while(true){
if((i__25739__auto___26715 < len__25738__auto___26714)){
args26647.push((arguments[i__25739__auto___26715]));

var G__26716 = (i__25739__auto___26715 + (1));
i__25739__auto___26715 = G__26716;
continue;
} else {
}
break;
}

var G__26649 = args26647.length;
switch (G__26649) {
case 1:
return sablono.core.number_field26646.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26646.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26647.length)].join('')));

}
});

sablono.core.number_field26646.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.number_field26646.call(null,name__26529__auto__,null);
});

sablono.core.number_field26646.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.number_field26646.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26646);

/**
 * Creates a password input field.
 */
sablono.core.password_field26650 = (function sablono$core$password_field26650(var_args){
var args26651 = [];
var len__25738__auto___26718 = arguments.length;
var i__25739__auto___26719 = (0);
while(true){
if((i__25739__auto___26719 < len__25738__auto___26718)){
args26651.push((arguments[i__25739__auto___26719]));

var G__26720 = (i__25739__auto___26719 + (1));
i__25739__auto___26719 = G__26720;
continue;
} else {
}
break;
}

var G__26653 = args26651.length;
switch (G__26653) {
case 1:
return sablono.core.password_field26650.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26650.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26651.length)].join('')));

}
});

sablono.core.password_field26650.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.password_field26650.call(null,name__26529__auto__,null);
});

sablono.core.password_field26650.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.password_field26650.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26650);

/**
 * Creates a range input field.
 */
sablono.core.range_field26654 = (function sablono$core$range_field26654(var_args){
var args26655 = [];
var len__25738__auto___26722 = arguments.length;
var i__25739__auto___26723 = (0);
while(true){
if((i__25739__auto___26723 < len__25738__auto___26722)){
args26655.push((arguments[i__25739__auto___26723]));

var G__26724 = (i__25739__auto___26723 + (1));
i__25739__auto___26723 = G__26724;
continue;
} else {
}
break;
}

var G__26657 = args26655.length;
switch (G__26657) {
case 1:
return sablono.core.range_field26654.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26654.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26655.length)].join('')));

}
});

sablono.core.range_field26654.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.range_field26654.call(null,name__26529__auto__,null);
});

sablono.core.range_field26654.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.range_field26654.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26654);

/**
 * Creates a search input field.
 */
sablono.core.search_field26658 = (function sablono$core$search_field26658(var_args){
var args26659 = [];
var len__25738__auto___26726 = arguments.length;
var i__25739__auto___26727 = (0);
while(true){
if((i__25739__auto___26727 < len__25738__auto___26726)){
args26659.push((arguments[i__25739__auto___26727]));

var G__26728 = (i__25739__auto___26727 + (1));
i__25739__auto___26727 = G__26728;
continue;
} else {
}
break;
}

var G__26661 = args26659.length;
switch (G__26661) {
case 1:
return sablono.core.search_field26658.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26658.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26659.length)].join('')));

}
});

sablono.core.search_field26658.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.search_field26658.call(null,name__26529__auto__,null);
});

sablono.core.search_field26658.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.search_field26658.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26658);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26662 = (function sablono$core$tel_field26662(var_args){
var args26663 = [];
var len__25738__auto___26730 = arguments.length;
var i__25739__auto___26731 = (0);
while(true){
if((i__25739__auto___26731 < len__25738__auto___26730)){
args26663.push((arguments[i__25739__auto___26731]));

var G__26732 = (i__25739__auto___26731 + (1));
i__25739__auto___26731 = G__26732;
continue;
} else {
}
break;
}

var G__26665 = args26663.length;
switch (G__26665) {
case 1:
return sablono.core.tel_field26662.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26662.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26663.length)].join('')));

}
});

sablono.core.tel_field26662.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.tel_field26662.call(null,name__26529__auto__,null);
});

sablono.core.tel_field26662.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.tel_field26662.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26662);

/**
 * Creates a text input field.
 */
sablono.core.text_field26666 = (function sablono$core$text_field26666(var_args){
var args26667 = [];
var len__25738__auto___26734 = arguments.length;
var i__25739__auto___26735 = (0);
while(true){
if((i__25739__auto___26735 < len__25738__auto___26734)){
args26667.push((arguments[i__25739__auto___26735]));

var G__26736 = (i__25739__auto___26735 + (1));
i__25739__auto___26735 = G__26736;
continue;
} else {
}
break;
}

var G__26669 = args26667.length;
switch (G__26669) {
case 1:
return sablono.core.text_field26666.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26666.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26667.length)].join('')));

}
});

sablono.core.text_field26666.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.text_field26666.call(null,name__26529__auto__,null);
});

sablono.core.text_field26666.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.text_field26666.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26666);

/**
 * Creates a time input field.
 */
sablono.core.time_field26670 = (function sablono$core$time_field26670(var_args){
var args26671 = [];
var len__25738__auto___26738 = arguments.length;
var i__25739__auto___26739 = (0);
while(true){
if((i__25739__auto___26739 < len__25738__auto___26738)){
args26671.push((arguments[i__25739__auto___26739]));

var G__26740 = (i__25739__auto___26739 + (1));
i__25739__auto___26739 = G__26740;
continue;
} else {
}
break;
}

var G__26673 = args26671.length;
switch (G__26673) {
case 1:
return sablono.core.time_field26670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26671.length)].join('')));

}
});

sablono.core.time_field26670.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.time_field26670.call(null,name__26529__auto__,null);
});

sablono.core.time_field26670.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.time_field26670.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26670);

/**
 * Creates a url input field.
 */
sablono.core.url_field26674 = (function sablono$core$url_field26674(var_args){
var args26675 = [];
var len__25738__auto___26742 = arguments.length;
var i__25739__auto___26743 = (0);
while(true){
if((i__25739__auto___26743 < len__25738__auto___26742)){
args26675.push((arguments[i__25739__auto___26743]));

var G__26744 = (i__25739__auto___26743 + (1));
i__25739__auto___26743 = G__26744;
continue;
} else {
}
break;
}

var G__26677 = args26675.length;
switch (G__26677) {
case 1:
return sablono.core.url_field26674.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26674.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26675.length)].join('')));

}
});

sablono.core.url_field26674.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.url_field26674.call(null,name__26529__auto__,null);
});

sablono.core.url_field26674.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.url_field26674.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26674);

/**
 * Creates a week input field.
 */
sablono.core.week_field26678 = (function sablono$core$week_field26678(var_args){
var args26679 = [];
var len__25738__auto___26746 = arguments.length;
var i__25739__auto___26747 = (0);
while(true){
if((i__25739__auto___26747 < len__25738__auto___26746)){
args26679.push((arguments[i__25739__auto___26747]));

var G__26748 = (i__25739__auto___26747 + (1));
i__25739__auto___26747 = G__26748;
continue;
} else {
}
break;
}

var G__26681 = args26679.length;
switch (G__26681) {
case 1:
return sablono.core.week_field26678.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26678.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26679.length)].join('')));

}
});

sablono.core.week_field26678.cljs$core$IFn$_invoke$arity$1 = (function (name__26529__auto__){
return sablono.core.week_field26678.call(null,name__26529__auto__,null);
});

sablono.core.week_field26678.cljs$core$IFn$_invoke$arity$2 = (function (name__26529__auto__,value__26530__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__26529__auto__,value__26530__auto__);
});

sablono.core.week_field26678.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26678);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26750 = (function sablono$core$check_box26750(var_args){
var args26751 = [];
var len__25738__auto___26754 = arguments.length;
var i__25739__auto___26755 = (0);
while(true){
if((i__25739__auto___26755 < len__25738__auto___26754)){
args26751.push((arguments[i__25739__auto___26755]));

var G__26756 = (i__25739__auto___26755 + (1));
i__25739__auto___26755 = G__26756;
continue;
} else {
}
break;
}

var G__26753 = args26751.length;
switch (G__26753) {
case 1:
return sablono.core.check_box26750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26750.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26751.length)].join('')));

}
});

sablono.core.check_box26750.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26750.call(null,name,null);
});

sablono.core.check_box26750.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26750.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26750.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26750.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26750);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26758 = (function sablono$core$radio_button26758(var_args){
var args26759 = [];
var len__25738__auto___26762 = arguments.length;
var i__25739__auto___26763 = (0);
while(true){
if((i__25739__auto___26763 < len__25738__auto___26762)){
args26759.push((arguments[i__25739__auto___26763]));

var G__26764 = (i__25739__auto___26763 + (1));
i__25739__auto___26763 = G__26764;
continue;
} else {
}
break;
}

var G__26761 = args26759.length;
switch (G__26761) {
case 1:
return sablono.core.radio_button26758.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26758.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26758.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26759.length)].join('')));

}
});

sablono.core.radio_button26758.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26758.call(null,group,null);
});

sablono.core.radio_button26758.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26758.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26758.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26758.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26758);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26766 = (function sablono$core$select_options26766(coll){
var iter__25443__auto__ = (function sablono$core$select_options26766_$_iter__26783(s__26784){
return (new cljs.core.LazySeq(null,(function (){
var s__26784__$1 = s__26784;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26784__$1);
if(temp__4657__auto__){
var s__26784__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26784__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__26784__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__26786 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__26785 = (0);
while(true){
if((i__26785 < size__25442__auto__)){
var x = cljs.core._nth.call(null,c__25441__auto__,i__26785);
cljs.core.chunk_append.call(null,b__26786,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26793 = x;
var text = cljs.core.nth.call(null,vec__26793,(0),null);
var val = cljs.core.nth.call(null,vec__26793,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26793,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26766.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26799 = (i__26785 + (1));
i__26785 = G__26799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26786),sablono$core$select_options26766_$_iter__26783.call(null,cljs.core.chunk_rest.call(null,s__26784__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26786),null);
}
} else {
var x = cljs.core.first.call(null,s__26784__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26796 = x;
var text = cljs.core.nth.call(null,vec__26796,(0),null);
var val = cljs.core.nth.call(null,vec__26796,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26796,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26766.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26766_$_iter__26783.call(null,cljs.core.rest.call(null,s__26784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25443__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26766);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26800 = (function sablono$core$drop_down26800(var_args){
var args26801 = [];
var len__25738__auto___26804 = arguments.length;
var i__25739__auto___26805 = (0);
while(true){
if((i__25739__auto___26805 < len__25738__auto___26804)){
args26801.push((arguments[i__25739__auto___26805]));

var G__26806 = (i__25739__auto___26805 + (1));
i__25739__auto___26805 = G__26806;
continue;
} else {
}
break;
}

var G__26803 = args26801.length;
switch (G__26803) {
case 2:
return sablono.core.drop_down26800.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26800.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26801.length)].join('')));

}
});

sablono.core.drop_down26800.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26800.call(null,name,options,null);
});

sablono.core.drop_down26800.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26800.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26800);
/**
 * Creates a text area element.
 */
sablono.core.text_area26808 = (function sablono$core$text_area26808(var_args){
var args26809 = [];
var len__25738__auto___26812 = arguments.length;
var i__25739__auto___26813 = (0);
while(true){
if((i__25739__auto___26813 < len__25738__auto___26812)){
args26809.push((arguments[i__25739__auto___26813]));

var G__26814 = (i__25739__auto___26813 + (1));
i__25739__auto___26813 = G__26814;
continue;
} else {
}
break;
}

var G__26811 = args26809.length;
switch (G__26811) {
case 1:
return sablono.core.text_area26808.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26808.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26809.length)].join('')));

}
});

sablono.core.text_area26808.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26808.call(null,name,null);
});

sablono.core.text_area26808.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area26808.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26808);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26816 = (function sablono$core$label26816(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26816);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26817 = (function sablono$core$submit_button26817(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26817);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26818 = (function sablono$core$reset_button26818(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26818);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26819 = (function sablono$core$form_to26819(var_args){
var args__25745__auto__ = [];
var len__25738__auto___26826 = arguments.length;
var i__25739__auto___26827 = (0);
while(true){
if((i__25739__auto___26827 < len__25738__auto___26826)){
args__25745__auto__.push((arguments[i__25739__auto___26827]));

var G__26828 = (i__25739__auto___26827 + (1));
i__25739__auto___26827 = G__26828;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((1) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26819.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25746__auto__);
});

sablono.core.form_to26819.cljs$core$IFn$_invoke$arity$variadic = (function (p__26822,body){
var vec__26823 = p__26822;
var method = cljs.core.nth.call(null,vec__26823,(0),null);
var action = cljs.core.nth.call(null,vec__26823,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26819.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26819.cljs$lang$applyTo = (function (seq26820){
var G__26821 = cljs.core.first.call(null,seq26820);
var seq26820__$1 = cljs.core.next.call(null,seq26820);
return sablono.core.form_to26819.cljs$core$IFn$_invoke$arity$variadic(G__26821,seq26820__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26819);

//# sourceMappingURL=core.js.map?rel=1629049555477