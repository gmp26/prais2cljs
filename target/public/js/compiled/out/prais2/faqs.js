// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.faqs');
goog.require('cljs.core');
goog.require('prais2.data');
goog.require('prais2.content');
goog.require('rum.core');
goog.require('prais2.components.video_player');
goog.require('prais2.core');
goog.require('prais2.mugshots');
goog.require('prais2.utils');
/**
 * 
 */
prais2.faqs.render_short_answer = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (answer){
return React.createElement("section",{"className": "short-answer"},React.createElement("div",{"className": "icon"},React.createElement("i",{"className": "fa fa-comment"})),(function (){var attrs31829 = answer;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31829))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reply"], null)], null),attrs31829)):{"className": "reply"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31829))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31829)], null))));
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"render-short-answer");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31830__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31830 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31831__i = 0, G__31831__a = new Array(arguments.length -  0);
while (G__31831__i < G__31831__a.length) {G__31831__a[G__31831__i] = arguments[G__31831__i + 0]; ++G__31831__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31831__a,0);
} 
return G__31830__delegate.call(this,args__27116__auto__);};
G__31830.cljs$lang$maxFixedArity = 0;
G__31830.cljs$lang$applyTo = (function (arglist__31832){
var args__27116__auto__ = cljs.core.seq(arglist__31832);
return G__31830__delegate(args__27116__auto__);
});
G__31830.cljs$core$IFn$_invoke$arity$variadic = G__31830__delegate;
return G__31830;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_glossary_term = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (term){
return sablono.interpreter.interpret.call(null,(function (){var entry = term.call(null,prais2.content.glossary);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(entry)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(entry),((cljs.core._EQ_.call(null,term,new cljs.core.Keyword(null,"predicted-range","predicted-range",2136703455)))?prais2.data.chart_cell.call(null,prais2.content.sample_hospital,(1)):null)], null)], null)], null);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"render-glossary-term");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31833__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31833 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31834__i = 0, G__31834__a = new Array(arguments.length -  0);
while (G__31834__i < G__31834__a.length) {G__31834__a[G__31834__i] = arguments[G__31834__i + 0]; ++G__31834__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31834__a,0);
} 
return G__31833__delegate.call(this,args__27116__auto__);};
G__31833.cljs$lang$maxFixedArity = 0;
G__31833.cljs$lang$applyTo = (function (arglist__31835){
var args__27116__auto__ = cljs.core.seq(arglist__31835);
return G__31833__delegate(args__27116__auto__);
});
G__31833.cljs$core$IFn$_invoke$arity$variadic = G__31833__delegate;
return G__31833;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_glossary = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (glossary){
return React.createElement("div",null,React.createElement("hr",null),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,prais2.utils.key_with,cljs.core.map.call(null,(function (p1__31836_SHARP_){
return prais2.faqs.render_glossary_term.call(null,p1__31836_SHARP_);
}),glossary))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"render-glossary");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31839__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31839 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31840__i = 0, G__31840__a = new Array(arguments.length -  0);
while (G__31840__i < G__31840__a.length) {G__31840__a[G__31840__i] = arguments[G__31840__i + 0]; ++G__31840__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31840__a,0);
} 
return G__31839__delegate.call(this,args__27116__auto__);};
G__31839.cljs$lang$maxFixedArity = 0;
G__31839.cljs$lang$applyTo = (function (arglist__31841){
var args__27116__auto__ = cljs.core.seq(arglist__31841);
return G__31839__delegate(args__27116__auto__);
});
G__31839.cljs$core$IFn$_invoke$arity$variadic = G__31839__delegate;
return G__31839;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
prais2.faqs.block_classes = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["faq-nav-1","faq-nav-3","faq-nav-2","faq-nav-4","faq-nav-4","faq-nav-4","faq-nav-4"], null);
/**
 * 
 */
prais2.faqs.render_faq_block = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (sec_ix){
return sablono.interpreter.interpret.call(null,(function (){var section = prais2.content.faq_sections.call(null,sec_ix);
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-glossary","is-glossary",-1988185117).cljs$core$IFn$_invoke$arity$1(section))){
return null;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.faq-block","div.faq-block",-395737525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),prais2.faqs.block_classes.call(null,sec_ix)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(section)], null),((cljs.core._EQ_.call(null,sec_ix,(1)))?prais2.components.video_player.video_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"video-id","video-id",2132630536),"video2",new cljs.core.Keyword(null,"src","src",-1651076051),"/assets/video02.mp4",new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"preload","preload",1646824722),"",new cljs.core.Keyword(null,"poster","poster",-1616913550),"/assets/video-2-thumbnail.png",new cljs.core.Keyword(null,"track-src","track-src",590501543),"/assets/video02.vtt"], null)):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-unstyled","ul.list-unstyled",1077310460),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),(function (){var iter__25443__auto__ = ((function (section){
return (function prais2$faqs$iter__31842(s__31843){
return (new cljs.core.LazySeq(null,((function (section){
return (function (){
var s__31843__$1 = s__31843;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31843__$1);
if(temp__4657__auto__){
var s__31843__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31843__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__31843__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__31845 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__31844 = (0);
while(true){
if((i__31844 < size__25442__auto__)){
var vec__31852 = cljs.core._nth.call(null,c__25441__auto__,i__31844);
var ix = cljs.core.nth.call(null,vec__31852,(0),null);
var faq = cljs.core.nth.call(null,vec__31852,(1),null);
cljs.core.chunk_append.call(null,b__31845,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ix], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,[cljs.core.str("faq/"),cljs.core.str(sec_ix),cljs.core.str("/"),cljs.core.str(ix)].join('')),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(faq)], null)], null));

var G__31858 = (i__31844 + (1));
i__31844 = G__31858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31845),prais2$faqs$iter__31842.call(null,cljs.core.chunk_rest.call(null,s__31843__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31845),null);
}
} else {
var vec__31855 = cljs.core.first.call(null,s__31843__$2);
var ix = cljs.core.nth.call(null,vec__31855,(0),null);
var faq = cljs.core.nth.call(null,vec__31855,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ix], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,[cljs.core.str("faq/"),cljs.core.str(sec_ix),cljs.core.str("/"),cljs.core.str(ix)].join('')),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(faq)], null)], null),prais2$faqs$iter__31842.call(null,cljs.core.rest.call(null,s__31843__$2)));
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
return iter__25443__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"faqs","faqs",636275568).cljs$core$IFn$_invoke$arity$1(section)));
})()], null)], null);
}
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"render-faq-block");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31859__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31859 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31860__i = 0, G__31860__a = new Array(arguments.length -  0);
while (G__31860__i < G__31860__a.length) {G__31860__a[G__31860__i] = arguments[G__31860__i + 0]; ++G__31860__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31860__a,0);
} 
return G__31859__delegate.call(this,args__27116__auto__);};
G__31859.cljs$lang$maxFixedArity = 0;
G__31859.cljs$lang$applyTo = (function (arglist__31861){
var args__27116__auto__ = cljs.core.seq(arglist__31861);
return G__31859__delegate(args__27116__auto__);
});
G__31859.cljs$core$IFn$_invoke$arity$variadic = G__31859__delegate;
return G__31859;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_faq_top = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,(function (){var attrs31862 = prais2.content.title;
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs31862))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-12"], null)], null),attrs31862)):{"className": "col-md-12"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31862))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31862)], null))));
})(),(function (){var attrs31863 = prais2.faqs.render_faq_block.call(null,(0));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31863))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-4","col-md-3"], null)], null),attrs31863)):{"className": "col-sm-4 col-md-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31863))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,(2)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31863),sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,(2)))], null))));
})(),(function (){var attrs31864 = prais2.faqs.render_faq_block.call(null,(1));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31864))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-4","col-md-6"], null)], null),attrs31864)):{"className": "col-sm-4 col-md-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31864))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31864)], null))));
})(),(function (){var attrs31865 = prais2.faqs.render_faq_block.call(null,(3));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31865))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-4","col-md-3"], null)], null),attrs31865)):{"className": "col-sm-4 col-md-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31865))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,(4))),sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,(5)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31865),sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,(4))),sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,(5)))], null))));
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title.call(null,"Everything Else"),prais2.core.update_description.call(null,"Background, Limitations, Predicted range (with video explanation), Family and Child, Charities, About Us")], null)),"render-faq-top");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31866__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31866 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31867__i = 0, G__31867__a = new Array(arguments.length -  0);
while (G__31867__i < G__31867__a.length) {G__31867__a[G__31867__i] = arguments[G__31867__i + 0]; ++G__31867__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31867__a,0);
} 
return G__31866__delegate.call(this,args__27116__auto__);};
G__31866.cljs$lang$maxFixedArity = 0;
G__31866.cljs$lang$applyTo = (function (arglist__31868){
var args__27116__auto__ = cljs.core.seq(arglist__31868);
return G__31866__delegate(args__27116__auto__);
});
G__31866.cljs$core$IFn$_invoke$arity$variadic = G__31866__delegate;
return G__31866;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
prais2.faqs.go_back = (function prais2$faqs$go_back(_){
return history.go((-1));
});
prais2.faqs.gen_postfix = (function prais2$faqs$gen_postfix(state){
var vec__31872 = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var section_ix = cljs.core.nth.call(null,vec__31872,(0),null);
var ix = cljs.core.nth.call(null,vec__31872,(1),null);
var section = prais2.content.faq_sections.call(null,section_ix);
return new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(section);
});
prais2.faqs.gen_description = (function prais2$faqs$gen_description(state){
var vec__31878 = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var section_ix = cljs.core.nth.call(null,vec__31878,(0),null);
var ix = cljs.core.nth.call(null,vec__31878,(1),null);
var section = prais2.content.faq_sections.call(null,section_ix);
var faq = new cljs.core.Keyword(null,"faqs","faqs",636275568).cljs$core$IFn$_invoke$arity$1(section).call(null,ix);
var or__24663__auto__ = new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(faq);
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(faq);
}
});
prais2.faqs.gen_bread_title = (function prais2$faqs$gen_bread_title(state){
var sec_ix = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
return new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(prais2.content.faq_sections.call(null,sec_ix));
});
prais2.faqs.prev_faq = (function prais2$faqs$prev_faq(p__31881){
var vec__31885 = p__31881;
var section_ix = cljs.core.nth.call(null,vec__31885,(0),null);
var ix = cljs.core.nth.call(null,vec__31885,(1),null);
var faq_ref = vec__31885;
return [cljs.core.str("faq"),cljs.core.str((((ix > (0)))?[cljs.core.str("/"),cljs.core.str(section_ix),cljs.core.str("/"),cljs.core.str((ix - (1)))].join(''):(((section_ix > (0)))?[cljs.core.str("/"),cljs.core.str((section_ix - (1))),cljs.core.str("/"),cljs.core.str((cljs.core.count.call(null,new cljs.core.Keyword(null,"faqs","faqs",636275568).cljs$core$IFn$_invoke$arity$1(prais2.content.faq_sections.call(null,(section_ix - (1))))) - (1)))].join(''):"s")))].join('');
});
prais2.faqs.next_faq = (function prais2$faqs$next_faq(p__31888){
var vec__31892 = p__31888;
var section_ix = cljs.core.nth.call(null,vec__31892,(0),null);
var ix = cljs.core.nth.call(null,vec__31892,(1),null);
var faq_ref = vec__31892;
var shown_section_count = (cljs.core.count.call(null,prais2.content.faq_sections) - (1));
var faq_count = cljs.core.count.call(null,new cljs.core.Keyword(null,"faqs","faqs",636275568).cljs$core$IFn$_invoke$arity$1(prais2.content.faq_sections.call(null,section_ix)));
return [cljs.core.str("faq"),cljs.core.str(((((ix + (1)) >= faq_count))?((((section_ix + (1)) < shown_section_count))?[cljs.core.str("/"),cljs.core.str((section_ix + (1))),cljs.core.str("/0")].join(''):"s"):[cljs.core.str("/"),cljs.core.str(section_ix),cljs.core.str("/"),cljs.core.str((ix + (1)))].join('')))].join('');
});
/**
 * 
 */
prais2.faqs.paginator = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (p__31905){
var vec__31906 = p__31905;
var section_ix = cljs.core.nth.call(null,vec__31906,(0),null);
var ix = cljs.core.nth.call(null,vec__31906,(1),null);
var faq_ref = vec__31906;
return React.createElement("nav",null,React.createElement("ul",{"className": "pager"},React.createElement("li",null,(function (){var attrs31895 = prais2.core.internal_ref.call(null,prais2.faqs.prev_faq.call(null,faq_ref));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs31895))?sablono.interpreter.attributes.call(null,attrs31895):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31895))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",{"className": "fa fa-arrow-left"})," previous"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31895),React.createElement("i",{"className": "fa fa-arrow-left"})," previous"], null))));
})()),React.createElement("li",null,(function (){var attrs31900 = prais2.core.internal_ref.call(null,prais2.faqs.next_faq.call(null,faq_ref));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs31900))?sablono.interpreter.attributes.call(null,attrs31900):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31900))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next ",React.createElement("i",{"className": "fa fa-arrow-right"})], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31900),"next ",React.createElement("i",{"className": "fa fa-arrow-right"})], null))));
})())));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"paginator");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31909__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31909 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31910__i = 0, G__31910__a = new Array(arguments.length -  0);
while (G__31910__i < G__31910__a.length) {G__31910__a[G__31910__i] = arguments[G__31910__i + 0]; ++G__31910__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31910__a,0);
} 
return G__31909__delegate.call(this,args__27116__auto__);};
G__31909.cljs$lang$maxFixedArity = 0;
G__31909.cljs$lang$applyTo = (function (arglist__31911){
var args__27116__auto__ = cljs.core.seq(arglist__31911);
return G__31909__delegate(args__27116__auto__);
});
G__31909.cljs$core$IFn$_invoke$arity$variadic = G__31909__delegate;
return G__31909;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.faqs.breadcrumb = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (p__31912){
var vec__31913 = p__31912;
var section_ix = cljs.core.nth.call(null,vec__31913,(0),null);
var ix = cljs.core.nth.call(null,vec__31913,(1),null);
var faq_ref = vec__31913;
return sablono.interpreter.interpret.call(null,(function (){var section = prais2.content.faq_sections.call(null,section_ix);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.breadcrumb","ul.breadcrumb",-801446813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.internal_ref.call(null,"faqs"),"Everything Else"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(section)], null)], null);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"breadcrumb");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31916__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31916 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31917__i = 0, G__31917__a = new Array(arguments.length -  0);
while (G__31917__i < G__31917__a.length) {G__31917__a[G__31917__i] = arguments[G__31917__i + 0]; ++G__31917__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31917__a,0);
} 
return G__31916__delegate.call(this,args__27116__auto__);};
G__31916.cljs$lang$maxFixedArity = 0;
G__31916.cljs$lang$applyTo = (function (arglist__31918){
var args__27116__auto__ = cljs.core.seq(arglist__31918);
return G__31916__delegate(args__27116__auto__);
});
G__31916.cljs$core$IFn$_invoke$arity$variadic = G__31916__delegate;
return G__31916;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_one_faq_block = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (sec_ix){
var attrs31919 = prais2.faqs.breadcrumb.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sec_ix], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31919))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one-block","col-sm-10","col-sm-offset-1","col-md-7","col-md-offset-1"], null)], null),attrs31919)):{"className": "one-block col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-1"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31919))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs31920 = new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(prais2.content.faq_sections.call(null,sec_ix));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs31920))?sablono.interpreter.attributes.call(null,attrs31920):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31920))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31920)], null))));
})(),sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,sec_ix))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31919),(function (){var attrs31921 = new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(prais2.content.faq_sections.call(null,sec_ix));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs31921))?sablono.interpreter.attributes.call(null,attrs31921):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31921))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31921)], null))));
})(),sablono.interpreter.interpret.call(null,prais2.faqs.render_faq_block.call(null,sec_ix))], null))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title.call(null,prais2.faqs.gen_bread_title),prais2.core.update_description.call(null,prais2.faqs.gen_bread_title)], null)),"render-one-faq-block");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31922__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31922 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31923__i = 0, G__31923__a = new Array(arguments.length -  0);
while (G__31923__i < G__31923__a.length) {G__31923__a[G__31923__i] = arguments[G__31923__i + 0]; ++G__31923__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31923__a,0);
} 
return G__31922__delegate.call(this,args__27116__auto__);};
G__31922.cljs$lang$maxFixedArity = 0;
G__31922.cljs$lang$applyTo = (function (arglist__31924){
var args__27116__auto__ = cljs.core.seq(arglist__31924);
return G__31922__delegate(args__27116__auto__);
});
G__31922.cljs$core$IFn$_invoke$arity$variadic = G__31922__delegate;
return G__31922;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_faq_section = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (p__31926){
var vec__31927 = p__31926;
var section_ix = cljs.core.nth.call(null,vec__31927,(0),null);
var ix = cljs.core.nth.call(null,vec__31927,(1),null);
var faq_ref = vec__31927;
var attrs31925 = (function (){var section = prais2.content.faq_sections.call(null,section_ix);
var faq = new cljs.core.Keyword(null,"faqs","faqs",636275568).cljs$core$IFn$_invoke$arity$1(section).call(null,ix);
var short_answer = new cljs.core.Keyword(null,"short-answer","short-answer",-924551154).cljs$core$IFn$_invoke$arity$1(faq);
var glossary = new cljs.core.Keyword(null,"glossary","glossary",1104312830).cljs$core$IFn$_invoke$arity$1(faq);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),prais2.faqs.breadcrumb.call(null,faq_ref),prais2.faqs.paginator.call(null,faq_ref),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".query",".query",1862085659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-question","i.fa.fa-question",-2145796775)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(faq)], null)], null),(cljs.core.truth_(short_answer)?prais2.faqs.render_short_answer.call(null,short_answer):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.body","div.body",-96313067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(0)], null),faq_ref))?rum.core.with_key.call(null,prais2.mugshots.reformatted_mugshots.call(null),(4)):null),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(faq)], null),(((cljs.core.count.call(null,glossary) > (0)))?prais2.faqs.render_glossary.call(null,glossary):null),prais2.faqs.paginator.call(null,faq_ref)], null);
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31925))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["faq","col-sm-10","col-sm-offset-1","col-md-7","col-md-offset-1"], null)], null),attrs31925)):{"className": "faq col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-1"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31925))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31925)], null))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title.call(null,prais2.faqs.gen_postfix),prais2.core.update_description.call(null,prais2.faqs.gen_description)], null)),"render-faq-section");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31930__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31930 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31931__i = 0, G__31931__a = new Array(arguments.length -  0);
while (G__31931__i < G__31931__a.length) {G__31931__a[G__31931__i] = arguments[G__31931__i + 0]; ++G__31931__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31931__a,0);
} 
return G__31930__delegate.call(this,args__27116__auto__);};
G__31930.cljs$lang$maxFixedArity = 0;
G__31930.cljs$lang$applyTo = (function (arglist__31932){
var args__27116__auto__ = cljs.core.seq(arglist__31932);
return G__31930__delegate(args__27116__auto__);
});
G__31930.cljs$core$IFn$_invoke$arity$variadic = G__31930__delegate;
return G__31930;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_faqs = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (p__31934){
var vec__31935 = p__31934;
var section_ix = cljs.core.nth.call(null,vec__31935,(0),null);
var ix = cljs.core.nth.call(null,vec__31935,(1),null);
var faq_ref = vec__31935;
return React.createElement("div",{"className": "container-fluid main-content"},(function (){var attrs31933 = ((cljs.core._EQ_.call(null,null,faq_ref))?prais2.faqs.render_faq_top.call(null):(((ix == null))?prais2.faqs.render_one_faq_block.call(null,section_ix):prais2.faqs.render_faq_section.call(null,faq_ref)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31933))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs31933)):{"className": "row"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31933))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31933)], null))));
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"render-faqs");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31938__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31938 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31939__i = 0, G__31939__a = new Array(arguments.length -  0);
while (G__31939__i < G__31939__a.length) {G__31939__a[G__31939__i] = arguments[G__31939__i + 0]; ++G__31939__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31939__a,0);
} 
return G__31938__delegate.call(this,args__27116__auto__);};
G__31938.cljs$lang$maxFixedArity = 0;
G__31938.cljs$lang$applyTo = (function (arglist__31940){
var args__27116__auto__ = cljs.core.seq(arglist__31940);
return G__31938__delegate(args__27116__auto__);
});
G__31938.cljs$core$IFn$_invoke$arity$variadic = G__31938__delegate;
return G__31938;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=faqs.js.map?rel=1629049565793