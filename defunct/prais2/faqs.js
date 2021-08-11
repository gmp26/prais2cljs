// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
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
prais2.faqs.render_short_answer = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (answer){
var G__16317 = "section";
var G__16318 = {"className": "short-answer"};
var G__16319 = (function (){var G__16321 = "div";
var G__16322 = {"className": "icon"};
var G__16323 = (function (){var G__16324 = "i";
var G__16325 = {"className": "fa fa-comment"};
return React.createElement(G__16324,G__16325);
})();
return React.createElement(G__16321,G__16322,G__16323);
})();
var G__16320 = (function (){var attrs16316 = answer;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16316))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reply"], null)], null),attrs16316], 0))):{"className": "reply"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16316))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16316)], null))));
})();
return React.createElement(G__16317,G__16318,G__16319,G__16320);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"render-short-answer");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16326__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16326 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16327__i = 0, G__16327__a = new Array(arguments.length -  0);
while (G__16327__i < G__16327__a.length) {G__16327__a[G__16327__i] = arguments[G__16327__i + 0]; ++G__16327__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16327__a,0);
} 
return G__16326__delegate.call(this,args__8012__auto__);};
G__16326.cljs$lang$maxFixedArity = 0;
G__16326.cljs$lang$applyTo = (function (arglist__16328){
var args__8012__auto__ = cljs.core.seq(arglist__16328);
return G__16326__delegate(args__8012__auto__);
});
G__16326.cljs$core$IFn$_invoke$arity$variadic = G__16326__delegate;
return G__16326;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_glossary_term = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (term){
var entry = (term.cljs$core$IFn$_invoke$arity$1 ? term.cljs$core$IFn$_invoke$arity$1(prais2.content.glossary) : term.call(null,prais2.content.glossary));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["entry: ",entry], 0));

var G__16337 = "dl";
var G__16338 = null;
var G__16339 = (function (){var G__16341 = "dt";
var G__16342 = null;
var G__16343 = (function (){var attrs16329 = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(entry);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"i",((cljs.core.map_QMARK_(attrs16329))?sablono.interpreter.attributes(attrs16329):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16329))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16329)], null))));
})();
return React.createElement(G__16341,G__16342,G__16343);
})();
var G__16340 = (function (){var G__16344 = "dd";
var G__16345 = null;
var G__16346 = (function (){var attrs16330 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(entry);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16330))?sablono.interpreter.attributes(attrs16330):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16330))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(term,cljs.core.cst$kw$predicted_DASH_range))?sablono.interpreter.interpret((prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2 ? prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2(prais2.content.sample_hospital,(1)) : prais2.data.chart_cell.call(null,prais2.content.sample_hospital,(1)))):null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16330),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(term,cljs.core.cst$kw$predicted_DASH_range))?sablono.interpreter.interpret((prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2 ? prais2.data.chart_cell.cljs$core$IFn$_invoke$arity$2(prais2.content.sample_hospital,(1)) : prais2.data.chart_cell.call(null,prais2.content.sample_hospital,(1)))):null)], null))));
})();
return React.createElement(G__16344,G__16345,G__16346);
})();
return React.createElement(G__16337,G__16338,G__16339,G__16340);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"render-glossary-term");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16347__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16347 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16348__i = 0, G__16348__a = new Array(arguments.length -  0);
while (G__16348__i < G__16348__a.length) {G__16348__a[G__16348__i] = arguments[G__16348__i + 0]; ++G__16348__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16348__a,0);
} 
return G__16347__delegate.call(this,args__8012__auto__);};
G__16347.cljs$lang$maxFixedArity = 0;
G__16347.cljs$lang$applyTo = (function (arglist__16349){
var args__8012__auto__ = cljs.core.seq(arglist__16349);
return G__16347__delegate(args__8012__auto__);
});
G__16347.cljs$core$IFn$_invoke$arity$variadic = G__16347__delegate;
return G__16347;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_glossary = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (glossary){
var G__16353 = "div";
var G__16354 = null;
var G__16355 = React.createElement("hr",null);
var G__16356 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16353,G__16354,G__16355){
return (function (p1__16350_SHARP_){
return (prais2.faqs.render_glossary_term.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_glossary_term.cljs$core$IFn$_invoke$arity$1(p1__16350_SHARP_) : prais2.faqs.render_glossary_term.call(null,p1__16350_SHARP_));
});})(G__16353,G__16354,G__16355))
,glossary)));
return React.createElement(G__16353,G__16354,G__16355,G__16356);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"render-glossary");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16357__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16357 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16358__i = 0, G__16358__a = new Array(arguments.length -  0);
while (G__16358__i < G__16358__a.length) {G__16358__a[G__16358__i] = arguments[G__16358__i + 0]; ++G__16358__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16358__a,0);
} 
return G__16357__delegate.call(this,args__8012__auto__);};
G__16357.cljs$lang$maxFixedArity = 0;
G__16357.cljs$lang$applyTo = (function (arglist__16359){
var args__8012__auto__ = cljs.core.seq(arglist__16359);
return G__16357__delegate(args__8012__auto__);
});
G__16357.cljs$core$IFn$_invoke$arity$variadic = G__16357__delegate;
return G__16357;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
prais2.faqs.block_classes = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["faq-nav-1","faq-nav-3","faq-nav-2","faq-nav-4","faq-nav-4","faq-nav-4","faq-nav-4"], null);
/**
 * 
 */
prais2.faqs.render_faq_block = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (sec_ix){
var section = (prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1 ? prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1(sec_ix) : prais2.content.faq_sections.call(null,sec_ix));
if(cljs.core.truth_(cljs.core.cst$kw$is_DASH_glossary.cljs$core$IFn$_invoke$arity$1(section))){
return null;
} else {
var G__16361 = "div";
var G__16362 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["faq-block",(prais2.faqs.block_classes.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.block_classes.cljs$core$IFn$_invoke$arity$1(sec_ix) : prais2.faqs.block_classes.call(null,sec_ix))], null))};
var G__16363 = (function (){var G__16366 = "h4";
var G__16367 = {"key": (1)};
var G__16368 = sablono.interpreter.interpret(cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(section));
return React.createElement(G__16366,G__16367,G__16368);
})();
var G__16364 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sec_ix,(1)))?sablono.interpreter.interpret((function (){var G__16369 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$video_DASH_id,"video2",cljs.core.cst$kw$src,"/assets/video02.mp4",cljs.core.cst$kw$controls,true,cljs.core.cst$kw$preload,"",cljs.core.cst$kw$poster,"/assets/video-2-thumbnail.png",cljs.core.cst$kw$track_DASH_src,"/assets/video02.vtt"], null);
return (prais2.components.video_player.video_js.cljs$core$IFn$_invoke$arity$1 ? prais2.components.video_player.video_js.cljs$core$IFn$_invoke$arity$1(G__16369) : prais2.components.video_player.video_js.call(null,G__16369));
})()):null);
var G__16365 = (function (){var G__16370 = "ul";
var G__16371 = {"key": (2), "className": "list-unstyled"};
var G__16372 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__7001__auto__ = ((function (G__16370,G__16371,G__16361,G__16362,G__16363,G__16364,section){
return (function prais2$faqs$iter__16373(s__16374){
return (new cljs.core.LazySeq(null,((function (G__16370,G__16371,G__16361,G__16362,G__16363,G__16364,section){
return (function (){
var s__16374__$1 = s__16374;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16374__$1);
if(temp__4657__auto__){
var s__16374__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16374__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__16374__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__16376 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__16375 = (0);
while(true){
if((i__16375 < size__7000__auto__)){
var vec__16391 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__16375);
var ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16391,(0),null);
var faq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16391,(1),null);
cljs.core.chunk_append(b__16376,(function (){var G__16394 = "li";
var G__16395 = {"key": ix};
var G__16396 = (function (){var attrs16360 = prais2.core.href.cljs$core$IFn$_invoke$arity$1([cljs.core.str("faq/"),cljs.core.str(sec_ix),cljs.core.str("/"),cljs.core.str(ix)].join(''));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16360))?sablono.interpreter.attributes(attrs16360):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16360))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(faq))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16360),sablono.interpreter.interpret(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(faq))], null))));
})();
return React.createElement(G__16394,G__16395,G__16396);
})());

var G__16403 = (i__16375 + (1));
i__16375 = G__16403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16376),prais2$faqs$iter__16373(cljs.core.chunk_rest(s__16374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16376),null);
}
} else {
var vec__16397 = cljs.core.first(s__16374__$2);
var ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16397,(0),null);
var faq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16397,(1),null);
return cljs.core.cons((function (){var G__16400 = "li";
var G__16401 = {"key": ix};
var G__16402 = (function (){var attrs16360 = prais2.core.href.cljs$core$IFn$_invoke$arity$1([cljs.core.str("faq/"),cljs.core.str(sec_ix),cljs.core.str("/"),cljs.core.str(ix)].join(''));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16360))?sablono.interpreter.attributes(attrs16360):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16360))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(faq))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16360),sablono.interpreter.interpret(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(faq))], null))));
})();
return React.createElement(G__16400,G__16401,G__16402);
})(),prais2$faqs$iter__16373(cljs.core.rest(s__16374__$2)));
}
} else {
return null;
}
break;
}
});})(G__16370,G__16371,G__16361,G__16362,G__16363,G__16364,section))
,null,null));
});})(G__16370,G__16371,G__16361,G__16362,G__16363,G__16364,section))
;
return iter__7001__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$faqs.cljs$core$IFn$_invoke$arity$1(section)));
})());
return React.createElement(G__16370,G__16371,G__16372);
})();
return React.createElement(G__16361,G__16362,G__16363,G__16364,G__16365);
}
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"render-faq-block");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16404__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16404 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16405__i = 0, G__16405__a = new Array(arguments.length -  0);
while (G__16405__i < G__16405__a.length) {G__16405__a[G__16405__i] = arguments[G__16405__i + 0]; ++G__16405__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16405__a,0);
} 
return G__16404__delegate.call(this,args__8012__auto__);};
G__16404.cljs$lang$maxFixedArity = 0;
G__16404.cljs$lang$applyTo = (function (arglist__16406){
var args__8012__auto__ = cljs.core.seq(arglist__16406);
return G__16404__delegate(args__8012__auto__);
});
G__16404.cljs$core$IFn$_invoke$arity$variadic = G__16404__delegate;
return G__16404;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_faq_top = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__16411 = "div";
var G__16412 = null;
var G__16413 = (function (){var attrs16407 = prais2.content.title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",((cljs.core.map_QMARK_(attrs16407))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-12"], null)], null),attrs16407], 0))):{"className": "col-md-12"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16407))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16407)], null))));
})();
var G__16414 = (function (){var attrs16408 = (prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1((0)) : prais2.faqs.render_faq_block.call(null,(0)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16408))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-4","col-md-3"], null)], null),attrs16408], 0))):{"className": "col-sm-4 col-md-3"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16408))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1((2)) : prais2.faqs.render_faq_block.call(null,(2))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16408),sablono.interpreter.interpret((prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1((2)) : prais2.faqs.render_faq_block.call(null,(2))))], null))));
})();
var G__16415 = (function (){var attrs16409 = (prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1((1)) : prais2.faqs.render_faq_block.call(null,(1)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16409))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-4","col-md-6"], null)], null),attrs16409], 0))):{"className": "col-sm-4 col-md-6"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16409))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16409)], null))));
})();
var G__16416 = (function (){var attrs16410 = (prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1((3)) : prais2.faqs.render_faq_block.call(null,(3)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16410))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-4","col-md-3"], null)], null),attrs16410], 0))):{"className": "col-sm-4 col-md-3"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16410))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1((4)) : prais2.faqs.render_faq_block.call(null,(4)))),sablono.interpreter.interpret((prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1((5)) : prais2.faqs.render_faq_block.call(null,(5))))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16410),sablono.interpreter.interpret((prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1((4)) : prais2.faqs.render_faq_block.call(null,(4)))),sablono.interpreter.interpret((prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1((5)) : prais2.faqs.render_faq_block.call(null,(5))))], null))));
})();
return React.createElement(G__16411,G__16412,G__16413,G__16414,G__16415,G__16416);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"render-faq-top");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16417__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16417 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16418__i = 0, G__16418__a = new Array(arguments.length -  0);
while (G__16418__i < G__16418__a.length) {G__16418__a[G__16418__i] = arguments[G__16418__i + 0]; ++G__16418__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16418__a,0);
} 
return G__16417__delegate.call(this,args__8012__auto__);};
G__16417.cljs$lang$maxFixedArity = 0;
G__16417.cljs$lang$applyTo = (function (arglist__16419){
var args__8012__auto__ = cljs.core.seq(arglist__16419);
return G__16417__delegate(args__8012__auto__);
});
G__16417.cljs$core$IFn$_invoke$arity$variadic = G__16417__delegate;
return G__16417;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
prais2.faqs.gen_postfix = (function prais2$faqs$gen_postfix(state){
var vec__16423 = cljs.core.first(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var section_ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16423,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16423,(1),null);
var section = (prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1 ? prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1(section_ix) : prais2.content.faq_sections.call(null,section_ix));
return cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(section);
});
prais2.faqs.gen_bread_title = (function prais2$faqs$gen_bread_title(state){
var sec_ix = cljs.core.first(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1((prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1 ? prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1(sec_ix) : prais2.content.faq_sections.call(null,sec_ix)));
});
prais2.faqs.prev_faq = (function prais2$faqs$prev_faq(p__16426){
var vec__16431 = p__16426;
var section_ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16431,(0),null);
var ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16431,(1),null);
return [cljs.core.str("faq"),cljs.core.str((((ix > (0)))?[cljs.core.str("/"),cljs.core.str(section_ix),cljs.core.str("/"),cljs.core.str((ix - (1)))].join(''):(((section_ix > (0)))?[cljs.core.str("/"),cljs.core.str((section_ix - (1))),cljs.core.str("/"),cljs.core.str((cljs.core.count(cljs.core.cst$kw$faqs.cljs$core$IFn$_invoke$arity$1((function (){var G__16434 = (section_ix - (1));
return (prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1 ? prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1(G__16434) : prais2.content.faq_sections.call(null,G__16434));
})())) - (1)))].join(''):"s")))].join('');
});
prais2.faqs.next_faq = (function prais2$faqs$next_faq(p__16435){
var vec__16439 = p__16435;
var section_ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16439,(0),null);
var ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16439,(1),null);
var shown_section_count = (cljs.core.count(prais2.content.faq_sections) - (1));
var faq_count = cljs.core.count(cljs.core.cst$kw$faqs.cljs$core$IFn$_invoke$arity$1((prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1 ? prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1(section_ix) : prais2.content.faq_sections.call(null,section_ix))));
return [cljs.core.str("faq"),cljs.core.str(((((ix + (1)) >= faq_count))?((((section_ix + (1)) < shown_section_count))?[cljs.core.str("/"),cljs.core.str((section_ix + (1))),cljs.core.str("/0")].join(''):"s"):[cljs.core.str("/"),cljs.core.str(section_ix),cljs.core.str("/"),cljs.core.str((ix + (1)))].join('')))].join('');
});
/**
 * 
 */
prais2.faqs.paginator = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (faq_ref){
var G__16478 = "nav";
var G__16479 = null;
var G__16480 = (function (){var G__16481 = "ul";
var G__16482 = {"className": "pager"};
var G__16483 = (function (){var G__16489 = "li";
var G__16490 = null;
var G__16491 = (function (){var attrs16442 = prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$1(prais2.faqs.prev_faq(faq_ref));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16442))?sablono.interpreter.attributes(attrs16442):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16442))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16492 = "i";
var G__16493 = {"className": "fa fa-arrow-left"};
return React.createElement(G__16492,G__16493);
})()," previous"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16442),(function (){var G__16494 = "i";
var G__16495 = {"className": "fa fa-arrow-left"};
return React.createElement(G__16494,G__16495);
})()," previous"], null))));
})();
return React.createElement(G__16489,G__16490,G__16491);
})();
var G__16484 = (function (){var G__16500 = "li";
var G__16501 = null;
var G__16502 = (function (){var attrs16447 = prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$1(prais2.faqs.next_faq(faq_ref));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16447))?sablono.interpreter.attributes(attrs16447):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16447))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next ",(function (){var G__16503 = "i";
var G__16504 = {"className": "fa fa-arrow-right"};
return React.createElement(G__16503,G__16504);
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16447),"next ",(function (){var G__16505 = "i";
var G__16506 = {"className": "fa fa-arrow-right"};
return React.createElement(G__16505,G__16506);
})()], null))));
})();
return React.createElement(G__16500,G__16501,G__16502);
})();
return React.createElement(G__16481,G__16482,G__16483,G__16484);
})();
return React.createElement(G__16478,G__16479,G__16480);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"paginator");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16507__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16507 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16508__i = 0, G__16508__a = new Array(arguments.length -  0);
while (G__16508__i < G__16508__a.length) {G__16508__a[G__16508__i] = arguments[G__16508__i + 0]; ++G__16508__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16508__a,0);
} 
return G__16507__delegate.call(this,args__8012__auto__);};
G__16507.cljs$lang$maxFixedArity = 0;
G__16507.cljs$lang$applyTo = (function (arglist__16509){
var args__8012__auto__ = cljs.core.seq(arglist__16509);
return G__16507__delegate(args__8012__auto__);
});
G__16507.cljs$core$IFn$_invoke$arity$variadic = G__16507__delegate;
return G__16507;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.faqs.breadcrumb = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (p__16512){
var vec__16513 = p__16512;
var section_ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16513,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16513,(1),null);
var section = (prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1 ? prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1(section_ix) : prais2.content.faq_sections.call(null,section_ix));
var G__16516 = "ul";
var G__16517 = {"className": "breadcrumb"};
var G__16518 = (function (){var G__16520 = "li";
var G__16521 = null;
var G__16522 = (function (){var attrs16510 = prais2.core.internal_ref.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16510))?sablono.interpreter.attributes(attrs16510):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16510))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16510),"Everything Else"], null))));
})();
return React.createElement(G__16520,G__16521,G__16522);
})();
var G__16519 = (function (){var attrs16511 = cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(section);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"li",((cljs.core.map_QMARK_(attrs16511))?sablono.interpreter.attributes(attrs16511):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16511))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16511)], null))));
})();
return React.createElement(G__16516,G__16517,G__16518,G__16519);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"breadcrumb");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16523__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16523 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16524__i = 0, G__16524__a = new Array(arguments.length -  0);
while (G__16524__i < G__16524__a.length) {G__16524__a[G__16524__i] = arguments[G__16524__i + 0]; ++G__16524__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16524__a,0);
} 
return G__16523__delegate.call(this,args__8012__auto__);};
G__16523.cljs$lang$maxFixedArity = 0;
G__16523.cljs$lang$applyTo = (function (arglist__16525){
var args__8012__auto__ = cljs.core.seq(arglist__16525);
return G__16523__delegate(args__8012__auto__);
});
G__16523.cljs$core$IFn$_invoke$arity$variadic = G__16523__delegate;
return G__16523;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_one_faq_block = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (sec_ix){
var attrs16526 = (function (){var G__16529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sec_ix], null);
return (prais2.faqs.breadcrumb.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.breadcrumb.cljs$core$IFn$_invoke$arity$1(G__16529) : prais2.faqs.breadcrumb.call(null,G__16529));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16526))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one-block","col-sm-10","col-sm-offset-1","col-md-7","col-md-offset-1"], null)], null),attrs16526], 0))):{"className": "one-block col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-1"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16526))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs16527 = cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1((prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1 ? prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1(sec_ix) : prais2.content.faq_sections.call(null,sec_ix)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",((cljs.core.map_QMARK_(attrs16527))?sablono.interpreter.attributes(attrs16527):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16527))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16527)], null))));
})(),sablono.interpreter.interpret((prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1(sec_ix) : prais2.faqs.render_faq_block.call(null,sec_ix)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16526),(function (){var attrs16528 = cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1((prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1 ? prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1(sec_ix) : prais2.content.faq_sections.call(null,sec_ix)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",((cljs.core.map_QMARK_(attrs16528))?sablono.interpreter.attributes(attrs16528):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16528))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16528)], null))));
})(),sablono.interpreter.interpret((prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faq_block.cljs$core$IFn$_invoke$arity$1(sec_ix) : prais2.faqs.render_faq_block.call(null,sec_ix)))], null))));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"render-one-faq-block");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16530__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16530 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16531__i = 0, G__16531__a = new Array(arguments.length -  0);
while (G__16531__i < G__16531__a.length) {G__16531__a[G__16531__i] = arguments[G__16531__i + 0]; ++G__16531__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16531__a,0);
} 
return G__16530__delegate.call(this,args__8012__auto__);};
G__16530.cljs$lang$maxFixedArity = 0;
G__16530.cljs$lang$applyTo = (function (arglist__16532){
var args__8012__auto__ = cljs.core.seq(arglist__16532);
return G__16530__delegate(args__8012__auto__);
});
G__16530.cljs$core$IFn$_invoke$arity$variadic = G__16530__delegate;
return G__16530;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_faq_section = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (p__16534){
var vec__16535 = p__16534;
var section_ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535,(0),null);
var ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535,(1),null);
var faq_ref = vec__16535;
var attrs16533 = (function (){var section = (prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1 ? prais2.content.faq_sections.cljs$core$IFn$_invoke$arity$1(section_ix) : prais2.content.faq_sections.call(null,section_ix));
var faq = cljs.core.cst$kw$faqs.cljs$core$IFn$_invoke$arity$1(section).call(null,ix);
var short_answer = cljs.core.cst$kw$short_DASH_answer.cljs$core$IFn$_invoke$arity$1(faq);
var glossary = cljs.core.cst$kw$glossary.cljs$core$IFn$_invoke$arity$1(faq);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(prais2.faqs.breadcrumb.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.breadcrumb.cljs$core$IFn$_invoke$arity$1(faq_ref) : prais2.faqs.breadcrumb.call(null,faq_ref)),(prais2.faqs.paginator.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.paginator.cljs$core$IFn$_invoke$arity$1(faq_ref) : prais2.faqs.paginator.call(null,faq_ref)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$query,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_question], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(2)], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(faq)], null)], null),(cljs.core.truth_(short_answer)?(prais2.faqs.render_short_answer.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_short_answer.cljs$core$IFn$_invoke$arity$1(short_answer) : prais2.faqs.render_short_answer.call(null,short_answer)):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(2)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(0)], null),faq_ref))?rum.core.with_key((prais2.mugshots.reformatted_mugshots.cljs$core$IFn$_invoke$arity$0 ? prais2.mugshots.reformatted_mugshots.cljs$core$IFn$_invoke$arity$0() : prais2.mugshots.reformatted_mugshots.call(null)),(4)):null),cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(faq)], null),(((cljs.core.count(glossary) > (0)))?(prais2.faqs.render_glossary.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_glossary.cljs$core$IFn$_invoke$arity$1(glossary) : prais2.faqs.render_glossary.call(null,glossary)):null),(prais2.faqs.paginator.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.paginator.cljs$core$IFn$_invoke$arity$1(faq_ref) : prais2.faqs.paginator.call(null,faq_ref))], null);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16533))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["faq","col-sm-10","col-sm-offset-1","col-md-7","col-md-offset-1"], null)], null),attrs16533], 0))):{"className": "faq col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-1"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16533))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16533)], null))));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"render-faq-section");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16538__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16538 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16539__i = 0, G__16539__a = new Array(arguments.length -  0);
while (G__16539__i < G__16539__a.length) {G__16539__a[G__16539__i] = arguments[G__16539__i + 0]; ++G__16539__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16539__a,0);
} 
return G__16538__delegate.call(this,args__8012__auto__);};
G__16538.cljs$lang$maxFixedArity = 0;
G__16538.cljs$lang$applyTo = (function (arglist__16540){
var args__8012__auto__ = cljs.core.seq(arglist__16540);
return G__16538__delegate(args__8012__auto__);
});
G__16538.cljs$core$IFn$_invoke$arity$variadic = G__16538__delegate;
return G__16538;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.faqs.render_faqs = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (p__16542){
var vec__16543 = p__16542;
var section_ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543,(0),null);
var ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543,(1),null);
var faq_ref = vec__16543;
var G__16546 = "div";
var G__16547 = {"className": "container-fluid main-content"};
var G__16548 = (function (){var attrs16541 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,faq_ref))?(prais2.faqs.render_faq_top.cljs$core$IFn$_invoke$arity$0 ? prais2.faqs.render_faq_top.cljs$core$IFn$_invoke$arity$0() : prais2.faqs.render_faq_top.call(null)):(((ix == null))?(prais2.faqs.render_one_faq_block.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_one_faq_block.cljs$core$IFn$_invoke$arity$1(section_ix) : prais2.faqs.render_one_faq_block.call(null,section_ix)):(prais2.faqs.render_faq_section.cljs$core$IFn$_invoke$arity$1 ? prais2.faqs.render_faq_section.cljs$core$IFn$_invoke$arity$1(faq_ref) : prais2.faqs.render_faq_section.call(null,faq_ref))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16541))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs16541], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16541))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16541)], null))));
})();
return React.createElement(G__16546,G__16547,G__16548);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"render-faqs");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16549__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16549 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16550__i = 0, G__16550__a = new Array(arguments.length -  0);
while (G__16550__i < G__16550__a.length) {G__16550__a[G__16550__i] = arguments[G__16550__i + 0]; ++G__16550__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16550__a,0);
} 
return G__16549__delegate.call(this,args__8012__auto__);};
G__16549.cljs$lang$maxFixedArity = 0;
G__16549.cljs$lang$applyTo = (function (arglist__16551){
var args__8012__auto__ = cljs.core.seq(arglist__16551);
return G__16549__delegate(args__8012__auto__);
});
G__16549.cljs$core$IFn$_invoke$arity$variadic = G__16549__delegate;
return G__16549;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
