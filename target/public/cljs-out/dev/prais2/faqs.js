// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.faqs');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('prais2.utils');
goog.require('prais2.content');
goog.require('prais2.components.video_player');
goog.require('prais2.data');
goog.require('prais2.mugshots');
/**
 * 
 */
prais2.faqs.render_short_answer = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (answer){
return React.createElement("section",({"className": "short-answer"}),React.createElement("div",({"className": "icon"}),React.createElement("i",({"className": "fa fa-comment"}))),(function (){var attrs21383 = answer;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21383))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reply"], null)], null),attrs21383)):({"className": "reply"})),((cljs.core.map_QMARK_.call(null,attrs21383))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21383)], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"render-short-answer");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21384__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21384 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21385__i = 0, G__21385__a = new Array(arguments.length -  0);
while (G__21385__i < G__21385__a.length) {G__21385__a[G__21385__i] = arguments[G__21385__i + 0]; ++G__21385__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21385__a,0,null);
} 
return G__21384__delegate.call(this,args__16261__auto__);};
G__21384.cljs$lang$maxFixedArity = 0;
G__21384.cljs$lang$applyTo = (function (arglist__21386){
var args__16261__auto__ = cljs.core.seq(arglist__21386);
return G__21384__delegate(args__16261__auto__);
});
G__21384.cljs$core$IFn$_invoke$arity$variadic = G__21384__delegate;
return G__21384;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_glossary_term = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (term){
var entry = term.call(null,prais2.content.glossary);
cljs.core.println.call(null,"entry: ",entry);

return React.createElement("dl",null,React.createElement("dt",null,(function (){var attrs21387 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(entry);
return cljs.core.apply.call(null,React.createElement,"i",((cljs.core.map_QMARK_.call(null,attrs21387))?sablono.interpreter.attributes.call(null,attrs21387):null),((cljs.core.map_QMARK_.call(null,attrs21387))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21387)], null)));
})()),React.createElement("dd",null,(function (){var attrs21388 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(entry);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21388))?sablono.interpreter.attributes.call(null,attrs21388):null),((cljs.core.map_QMARK_.call(null,attrs21388))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,term,new cljs.core.Keyword(null,"predicted-range","predicted-range",2136703455)))?prais2.data.chart_cell.call(null,prais2.content.sample_hospital,(1)):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21388),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,term,new cljs.core.Keyword(null,"predicted-range","predicted-range",2136703455)))?prais2.data.chart_cell.call(null,prais2.content.sample_hospital,(1)):null))], null)));
})()));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"render-glossary-term");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21389__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21389 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21390__i = 0, G__21390__a = new Array(arguments.length -  0);
while (G__21390__i < G__21390__a.length) {G__21390__a[G__21390__i] = arguments[G__21390__i + 0]; ++G__21390__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21390__a,0,null);
} 
return G__21389__delegate.call(this,args__16261__auto__);};
G__21389.cljs$lang$maxFixedArity = 0;
G__21389.cljs$lang$applyTo = (function (arglist__21391){
var args__16261__auto__ = cljs.core.seq(arglist__21391);
return G__21389__delegate(args__16261__auto__);
});
G__21389.cljs$core$IFn$_invoke$arity$variadic = G__21389__delegate;
return G__21389;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_glossary = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (glossary){
return React.createElement("div",null,React.createElement("hr",null),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,prais2.utils.key_with,cljs.core.map.call(null,(function (p1__21392_SHARP_){
return prais2.faqs.render_glossary_term.call(null,p1__21392_SHARP_);
}),glossary))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"render-glossary");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21395__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21395 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21396__i = 0, G__21396__a = new Array(arguments.length -  0);
while (G__21396__i < G__21396__a.length) {G__21396__a[G__21396__i] = arguments[G__21396__i + 0]; ++G__21396__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21396__a,0,null);
} 
return G__21395__delegate.call(this,args__16261__auto__);};
G__21395.cljs$lang$maxFixedArity = 0;
G__21395.cljs$lang$applyTo = (function (arglist__21397){
var args__16261__auto__ = cljs.core.seq(arglist__21397);
return G__21395__delegate(args__16261__auto__);
});
G__21395.cljs$core$IFn$_invoke$arity$variadic = G__21395__delegate;
return G__21395;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
prais2.faqs.block_classes = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["faq-nav-1","faq-nav-3","faq-nav-2","faq-nav-4","faq-nav-4","faq-nav-4","faq-nav-4"], null);
/**
 * 
 */
prais2.faqs.render_faq_block = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (sec_ix){
var section = prais2.content.faq_sections.call(null,sec_ix);
return sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"is-glossary","is-glossary",-1988185117).cljs$core$IFn$_invoke$arity$1(section))?null:new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.faq-block","div.faq-block",-395737525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),prais2.faqs.block_classes.call(null,sec_ix)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(section)], null),((cljs.core._EQ_.call(null,sec_ix,(1)))?prais2.components.video_player.video_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"video-id","video-id",2132630536),"video2",new cljs.core.Keyword(null,"src","src",-1651076051),"/assets/video02.mp4",new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"preload","preload",1646824722),"",new cljs.core.Keyword(null,"poster","poster",-1616913550),"/assets/video-2-thumbnail.png",new cljs.core.Keyword(null,"track-src","track-src",590501543),"/assets/video02.vtt"], null)):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-unstyled","ul.list-unstyled",1077310460),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),(function (){var iter__4311__auto__ = ((function (section){
return (function prais2$faqs$iter__21398(s__21399){
return (new cljs.core.LazySeq(null,((function (section){
return (function (){
var s__21399__$1 = s__21399;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21399__$1);
if(temp__5753__auto__){
var s__21399__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21399__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__21399__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__21401 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__21400 = (0);
while(true){
if((i__21400 < size__4310__auto__)){
var vec__21402 = cljs.core._nth.call(null,c__4309__auto__,i__21400);
var ix = cljs.core.nth.call(null,vec__21402,(0),null);
var faq = cljs.core.nth.call(null,vec__21402,(1),null);
cljs.core.chunk_append.call(null,b__21401,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ix], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,["faq/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sec_ix),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ix)].join('')),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(faq)], null)], null));

var G__21408 = (i__21400 + (1));
i__21400 = G__21408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21401),prais2$faqs$iter__21398.call(null,cljs.core.chunk_rest.call(null,s__21399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21401),null);
}
} else {
var vec__21405 = cljs.core.first.call(null,s__21399__$2);
var ix = cljs.core.nth.call(null,vec__21405,(0),null);
var faq = cljs.core.nth.call(null,vec__21405,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ix], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,["faq/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sec_ix),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ix)].join('')),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(faq)], null)], null),prais2$faqs$iter__21398.call(null,cljs.core.rest.call(null,s__21399__$2)));
}
} else {
return null;
}
break;
}
});})(section))
,null,null));
});})(section))
;
return iter__4311__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"faqs","faqs",636275568).cljs$core$IFn$_invoke$arity$1(section)));
})()], null)], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"render-faq-block");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21409__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21409 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21410__i = 0, G__21410__a = new Array(arguments.length -  0);
while (G__21410__i < G__21410__a.length) {G__21410__a[G__21410__i] = arguments[G__21410__i + 0]; ++G__21410__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21410__a,0,null);
} 
return G__21409__delegate.call(this,args__16261__auto__);};
G__21409.cljs$lang$maxFixedArity = 0;
G__21409.cljs$lang$applyTo = (function (arglist__21411){
var args__16261__auto__ = cljs.core.seq(arglist__21411);
return G__21409__delegate(args__16261__auto__);
});
G__21409.cljs$core$IFn$_invoke$arity$variadic = G__21409__delegate;
return G__21409;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_faq_top = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,(function (){var attrs21412 = prais2.content.title;
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs21412))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-12"], null)], null),attrs21412)):({"className": "col-md-12"})),((cljs.core.map_QMARK_.call(null,attrs21412))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21412)], null)));
})(),(function (){var attrs21413 = prais2.faqs.render_faq_block.call(null,(0));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21413))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-4","col-md-3"], null)], null),attrs21413)):({"className": "col-sm-4 col-md-3"})),((cljs.core.map_QMARK_.call(null,attrs21413))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,(2)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21413),sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,(2)))], null)));
})(),(function (){var attrs21414 = prais2.faqs.render_faq_block.call(null,(1));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21414))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-4","col-md-6"], null)], null),attrs21414)):({"className": "col-sm-4 col-md-6"})),((cljs.core.map_QMARK_.call(null,attrs21414))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21414)], null)));
})(),(function (){var attrs21415 = prais2.faqs.render_faq_block.call(null,(3));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21415))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-4","col-md-3"], null)], null),attrs21415)):({"className": "col-sm-4 col-md-3"})),((cljs.core.map_QMARK_.call(null,attrs21415))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,(4))),sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,(5)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21415),sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,(4))),sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,(5)))], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title.call(null,"Everything Else")], null)),"render-faq-top");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21416__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21416 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21417__i = 0, G__21417__a = new Array(arguments.length -  0);
while (G__21417__i < G__21417__a.length) {G__21417__a[G__21417__i] = arguments[G__21417__i + 0]; ++G__21417__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21417__a,0,null);
} 
return G__21416__delegate.call(this,args__16261__auto__);};
G__21416.cljs$lang$maxFixedArity = 0;
G__21416.cljs$lang$applyTo = (function (arglist__21418){
var args__16261__auto__ = cljs.core.seq(arglist__21418);
return G__21416__delegate(args__16261__auto__);
});
G__21416.cljs$core$IFn$_invoke$arity$variadic = G__21416__delegate;
return G__21416;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
prais2.faqs.gen_postfix = (function prais2$faqs$gen_postfix(state){
var vec__21419 = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var section_ix = cljs.core.nth.call(null,vec__21419,(0),null);
var _ = cljs.core.nth.call(null,vec__21419,(1),null);
var section = prais2.content.faq_sections.call(null,section_ix);
return new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(section);
});
prais2.faqs.gen_bread_title = (function prais2$faqs$gen_bread_title(state){
var sec_ix = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
return new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(prais2.content.faq_sections.call(null,sec_ix));
});
prais2.faqs.prev_faq = (function prais2$faqs$prev_faq(p__21422){
var vec__21423 = p__21422;
var section_ix = cljs.core.nth.call(null,vec__21423,(0),null);
var ix = cljs.core.nth.call(null,vec__21423,(1),null);
return ["faq",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ix > (0)))?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(section_ix),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((ix - (1)))].join(''):(((section_ix > (0)))?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((section_ix - (1))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count.call(null,new cljs.core.Keyword(null,"faqs","faqs",636275568).cljs$core$IFn$_invoke$arity$1(prais2.content.faq_sections.call(null,(section_ix - (1))))) - (1)))].join(''):"s")))].join('');
});
prais2.faqs.next_faq = (function prais2$faqs$next_faq(p__21426){
var vec__21427 = p__21426;
var section_ix = cljs.core.nth.call(null,vec__21427,(0),null);
var ix = cljs.core.nth.call(null,vec__21427,(1),null);
var shown_section_count = (cljs.core.count.call(null,prais2.content.faq_sections) - (1));
var faq_count = cljs.core.count.call(null,new cljs.core.Keyword(null,"faqs","faqs",636275568).cljs$core$IFn$_invoke$arity$1(prais2.content.faq_sections.call(null,section_ix)));
return ["faq",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ix + (1)) >= faq_count))?((((section_ix + (1)) < shown_section_count))?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((section_ix + (1))),"/0"].join(''):"s"):["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(section_ix),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((ix + (1)))].join('')))].join('');
});
/**
 * 
 */
prais2.faqs.paginator = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (faq_ref){
return React.createElement("nav",null,React.createElement("ul",({"className": "pager"}),React.createElement("li",null,(function (){var attrs21430 = prais2.core.internal_ref.call(null,prais2.faqs.prev_faq.call(null,faq_ref));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21430))?sablono.interpreter.attributes.call(null,attrs21430):null),((cljs.core.map_QMARK_.call(null,attrs21430))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-arrow-left"}))," previous"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21430),React.createElement("i",({"className": "fa fa-arrow-left"}))," previous"], null)));
})()),React.createElement("li",null,(function (){var attrs21435 = prais2.core.internal_ref.call(null,prais2.faqs.next_faq.call(null,faq_ref));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21435))?sablono.interpreter.attributes.call(null,attrs21435):null),((cljs.core.map_QMARK_.call(null,attrs21435))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next ",React.createElement("i",({"className": "fa fa-arrow-right"}))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21435),"next ",React.createElement("i",({"className": "fa fa-arrow-right"}))], null)));
})())));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"paginator");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21440__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21440 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21441__i = 0, G__21441__a = new Array(arguments.length -  0);
while (G__21441__i < G__21441__a.length) {G__21441__a[G__21441__i] = arguments[G__21441__i + 0]; ++G__21441__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21441__a,0,null);
} 
return G__21440__delegate.call(this,args__16261__auto__);};
G__21440.cljs$lang$maxFixedArity = 0;
G__21440.cljs$lang$applyTo = (function (arglist__21442){
var args__16261__auto__ = cljs.core.seq(arglist__21442);
return G__21440__delegate(args__16261__auto__);
});
G__21440.cljs$core$IFn$_invoke$arity$variadic = G__21440__delegate;
return G__21440;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.faqs.breadcrumb = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (p__21443){
var vec__21444 = p__21443;
var section_ix = cljs.core.nth.call(null,vec__21444,(0),null);
var _ = cljs.core.nth.call(null,vec__21444,(1),null);
var section = prais2.content.faq_sections.call(null,section_ix);
return React.createElement("ul",({"className": "breadcrumb"}),React.createElement("li",null,(function (){var attrs21448 = prais2.core.internal_ref.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21448))?sablono.interpreter.attributes.call(null,attrs21448):null),((cljs.core.map_QMARK_.call(null,attrs21448))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21448),"Everything Else"], null)));
})()),(function (){var attrs21447 = new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(section);
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs21447))?sablono.interpreter.attributes.call(null,attrs21447):null),((cljs.core.map_QMARK_.call(null,attrs21447))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21447)], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"breadcrumb");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21449__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21449 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21450__i = 0, G__21450__a = new Array(arguments.length -  0);
while (G__21450__i < G__21450__a.length) {G__21450__a[G__21450__i] = arguments[G__21450__i + 0]; ++G__21450__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21450__a,0,null);
} 
return G__21449__delegate.call(this,args__16261__auto__);};
G__21449.cljs$lang$maxFixedArity = 0;
G__21449.cljs$lang$applyTo = (function (arglist__21451){
var args__16261__auto__ = cljs.core.seq(arglist__21451);
return G__21449__delegate(args__16261__auto__);
});
G__21449.cljs$core$IFn$_invoke$arity$variadic = G__21449__delegate;
return G__21449;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_one_faq_block = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (sec_ix){
var attrs21452 = prais2.faqs.breadcrumb.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sec_ix], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21452))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one-block","col-sm-10","col-sm-offset-1","col-md-7","col-md-offset-1"], null)], null),attrs21452)):({"className": "one-block col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-1"})),((cljs.core.map_QMARK_.call(null,attrs21452))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs21453 = new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(prais2.content.faq_sections.call(null,sec_ix));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs21453))?sablono.interpreter.attributes.call(null,attrs21453):null),((cljs.core.map_QMARK_.call(null,attrs21453))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21453)], null)));
})(),sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,sec_ix))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21452),(function (){var attrs21454 = new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(prais2.content.faq_sections.call(null,sec_ix));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs21454))?sablono.interpreter.attributes.call(null,attrs21454):null),((cljs.core.map_QMARK_.call(null,attrs21454))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21454)], null)));
})(),sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,sec_ix))], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title.call(null,prais2.faqs.gen_bread_title)], null)),"render-one-faq-block");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21455__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21455 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21456__i = 0, G__21456__a = new Array(arguments.length -  0);
while (G__21456__i < G__21456__a.length) {G__21456__a[G__21456__i] = arguments[G__21456__i + 0]; ++G__21456__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21456__a,0,null);
} 
return G__21455__delegate.call(this,args__16261__auto__);};
G__21455.cljs$lang$maxFixedArity = 0;
G__21455.cljs$lang$applyTo = (function (arglist__21457){
var args__16261__auto__ = cljs.core.seq(arglist__21457);
return G__21455__delegate(args__16261__auto__);
});
G__21455.cljs$core$IFn$_invoke$arity$variadic = G__21455__delegate;
return G__21455;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_faq_section = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (p__21459){
var vec__21460 = p__21459;
var section_ix = cljs.core.nth.call(null,vec__21460,(0),null);
var ix = cljs.core.nth.call(null,vec__21460,(1),null);
var faq_ref = vec__21460;
var attrs21458 = (function (){var section = prais2.content.faq_sections.call(null,section_ix);
var faq = new cljs.core.Keyword(null,"faqs","faqs",636275568).cljs$core$IFn$_invoke$arity$1(section).call(null,ix);
var short_answer = new cljs.core.Keyword(null,"short-answer","short-answer",-924551154).cljs$core$IFn$_invoke$arity$1(faq);
var glossary = new cljs.core.Keyword(null,"glossary","glossary",1104312830).cljs$core$IFn$_invoke$arity$1(faq);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),prais2.faqs.breadcrumb.call(null,faq_ref),prais2.faqs.paginator.call(null,faq_ref),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".query",".query",1862085659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-question","i.fa.fa-question",-2145796775)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(faq)], null)], null),(cljs.core.truth_(short_answer)?prais2.faqs.render_short_answer.call(null,short_answer):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.body","div.body",-96313067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(0)], null),faq_ref))?rum.core.with_key.call(null,prais2.mugshots.reformatted_mugshots.call(null),(4)):null),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(faq)], null),(((cljs.core.count.call(null,glossary) > (0)))?prais2.faqs.render_glossary.call(null,glossary):null),prais2.faqs.paginator.call(null,faq_ref)], null);
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21458))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["faq","col-sm-10","col-sm-offset-1","col-md-7","col-md-offset-1"], null)], null),attrs21458)):({"className": "faq col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-1"})),((cljs.core.map_QMARK_.call(null,attrs21458))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21458)], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title.call(null,prais2.faqs.gen_postfix)], null)),"render-faq-section");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21463__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21463 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21464__i = 0, G__21464__a = new Array(arguments.length -  0);
while (G__21464__i < G__21464__a.length) {G__21464__a[G__21464__i] = arguments[G__21464__i + 0]; ++G__21464__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21464__a,0,null);
} 
return G__21463__delegate.call(this,args__16261__auto__);};
G__21463.cljs$lang$maxFixedArity = 0;
G__21463.cljs$lang$applyTo = (function (arglist__21465){
var args__16261__auto__ = cljs.core.seq(arglist__21465);
return G__21463__delegate(args__16261__auto__);
});
G__21463.cljs$core$IFn$_invoke$arity$variadic = G__21463__delegate;
return G__21463;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_faqs = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (p__21466){
var vec__21467 = p__21466;
var section_ix = cljs.core.nth.call(null,vec__21467,(0),null);
var ix = cljs.core.nth.call(null,vec__21467,(1),null);
var faq_ref = vec__21467;
return React.createElement("div",({"className": "container-fluid main-content"}),(function (){var attrs21470 = ((cljs.core._EQ_.call(null,null,faq_ref))?prais2.faqs.render_faq_top.call(null):(((ix == null))?prais2.faqs.render_one_faq_block.call(null,section_ix):prais2.faqs.render_faq_section.call(null,faq_ref)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21470))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs21470)):({"className": "row"})),((cljs.core.map_QMARK_.call(null,attrs21470))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21470)], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"render-faqs");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21471__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21471 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21472__i = 0, G__21472__a = new Array(arguments.length -  0);
while (G__21472__i < G__21472__a.length) {G__21472__a[G__21472__i] = arguments[G__21472__i + 0]; ++G__21472__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21472__a,0,null);
} 
return G__21471__delegate.call(this,args__16261__auto__);};
G__21471.cljs$lang$maxFixedArity = 0;
G__21471.cljs$lang$applyTo = (function (arglist__21473){
var args__16261__auto__ = cljs.core.seq(arglist__21473);
return G__21471__delegate(args__16261__auto__);
});
G__21471.cljs$core$IFn$_invoke$arity$variadic = G__21471__delegate;
return G__21471;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=faqs.js.map
