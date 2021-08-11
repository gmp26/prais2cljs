// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('prais2.intro');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('prais2.utils');
/**
 * 
 */
prais2.intro.section = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (section_id,section_title,section_content){
var G__17354 = "section";
var G__17355 = {"id": section_id, "className": "col-sm-8 pull-left"};
var G__17356 = (function (){var G__17358 = "h2";
var G__17359 = {"dangerouslySetInnerHTML": {"__html": section_title}};
return React.createElement(G__17358,G__17359);
})();
var G__17357 = sablono.interpreter.interpret((section_content.cljs$core$IFn$_invoke$arity$0 ? section_content.cljs$core$IFn$_invoke$arity$0() : section_content.call(null)));
return React.createElement(G__17354,G__17355,G__17356,G__17357);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"section");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17360__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17360 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17361__i = 0, G__17361__a = new Array(arguments.length -  0);
while (G__17361__i < G__17361__a.length) {G__17361__a[G__17361__i] = arguments[G__17361__i + 0]; ++G__17361__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17361__a,0);
} 
return G__17360__delegate.call(this,args__8012__auto__);};
G__17360.cljs$lang$maxFixedArity = 0;
G__17360.cljs$lang$applyTo = (function (arglist__17362){
var args__8012__auto__ = cljs.core.seq(arglist__17362);
return G__17360__delegate(args__8012__auto__);
});
G__17360.cljs$core$IFn$_invoke$arity$variadic = G__17360__delegate;
return G__17360;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.intro.render_intro = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17369 = "div";
var G__17370 = {"className": "container main-content"};
var G__17371 = (function (){var G__17372 = "div";
var G__17373 = {"className": "row"};
var G__17374 = (function (){var G__17376 = "div";
var G__17377 = {"className": "col-sm-8"};
var G__17378 = React.createElement("h1",null,"What, why, how?");
var G__17379 = (function (){var G__17380 = "p";
var G__17381 = null;
var G__17382 = "This site is to help people make sense of the survival statistics about children's heart surgery published by\n     the National Congenital Heart Disease Audit (";
var G__17383 = (function (){var attrs17365 = prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17365))?sablono.interpreter.attributes(attrs17365):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17365))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17365),"NCHDA"], null))));
})();
var G__17384 = ").  The ";
var G__17385 = (function (){var attrs17366 = prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital ",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17366))?sablono.interpreter.attributes(attrs17366):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17366))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17366),"NCHDA"], null))));
})();
var G__17386 = " is managed by the\n      National Institute of Cardiovascular Outcomes Research (";
var G__17387 = (function (){var attrs17367 = prais2.core.href("https://www.ucl.ac.uk/nicor",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17367))?sablono.interpreter.attributes(attrs17367):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17367))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NICOR"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17367),"NICOR"], null))));
})();
var G__17388 = ").";
return React.createElement(G__17380,G__17381,G__17382,G__17383,G__17384,G__17385,G__17386,G__17387,G__17388);
})();
return React.createElement(G__17376,G__17377,G__17378,G__17379);
})();
var G__17375 = (function (){var attrs17368 = (prais2.intro.key_points.cljs$core$IFn$_invoke$arity$0 ? prais2.intro.key_points.cljs$core$IFn$_invoke$arity$0() : prais2.intro.key_points.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs17368))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"intro",cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-12"], null)], null),attrs17368], 0))):{"id": "intro", "className": "col-sm-12"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17368))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((1),"<strong>What</strong> do we mean by survival statistics?",prais2.intro.section_1_content) : prais2.intro.section.call(null,(1),"<strong>What</strong> do we mean by survival statistics?",prais2.intro.section_1_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((2),"<strong>Why</strong> can data about survival be difficult to interpret?",prais2.intro.section_2_content) : prais2.intro.section.call(null,(2),"<strong>Why</strong> can data about survival be difficult to interpret?",prais2.intro.section_2_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((3),"<strong>How</strong> does the NHS monitor hospitals that do children\u2019s heart surgery?",prais2.intro.section_3_content) : prais2.intro.section.call(null,(3),"<strong>How</strong> does the NHS monitor hospitals that do children\u2019s heart surgery?",prais2.intro.section_3_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((4),"What this site cannot do",prais2.intro.section_4_content) : prais2.intro.section.call(null,(4),"What this site cannot do",prais2.intro.section_4_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((5),"What this site can do",prais2.intro.section_5_content) : prais2.intro.section.call(null,(5),"What this site can do",prais2.intro.section_5_content)))], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17368),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((1),"<strong>What</strong> do we mean by survival statistics?",prais2.intro.section_1_content) : prais2.intro.section.call(null,(1),"<strong>What</strong> do we mean by survival statistics?",prais2.intro.section_1_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((2),"<strong>Why</strong> can data about survival be difficult to interpret?",prais2.intro.section_2_content) : prais2.intro.section.call(null,(2),"<strong>Why</strong> can data about survival be difficult to interpret?",prais2.intro.section_2_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((3),"<strong>How</strong> does the NHS monitor hospitals that do children\u2019s heart surgery?",prais2.intro.section_3_content) : prais2.intro.section.call(null,(3),"<strong>How</strong> does the NHS monitor hospitals that do children\u2019s heart surgery?",prais2.intro.section_3_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((4),"What this site cannot do",prais2.intro.section_4_content) : prais2.intro.section.call(null,(4),"What this site cannot do",prais2.intro.section_4_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((5),"What this site can do",prais2.intro.section_5_content) : prais2.intro.section.call(null,(5),"What this site can do",prais2.intro.section_5_content)))], null))));
})();
return React.createElement(G__17372,G__17373,G__17374,G__17375);
})();
return React.createElement(G__17369,G__17370,G__17371);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$2("INTRO>",false)], null)),"render-intro");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17389__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17389 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17390__i = 0, G__17390__a = new Array(arguments.length -  0);
while (G__17390__i < G__17390__a.length) {G__17390__a[G__17390__i] = arguments[G__17390__i + 0]; ++G__17390__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17390__a,0);
} 
return G__17389__delegate.call(this,args__8012__auto__);};
G__17389.cljs$lang$maxFixedArity = 0;
G__17389.cljs$lang$applyTo = (function (arglist__17391){
var args__8012__auto__ = cljs.core.seq(arglist__17391);
return G__17389__delegate(args__8012__auto__);
});
G__17389.cljs$core$IFn$_invoke$arity$variadic = G__17389__delegate;
return G__17389;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.intro.key_point = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (img_src,alt_text,text){
var G__17394 = "li";
var G__17395 = {"className": "key-point row"};
var G__17396 = (function (){var attrs17392 = text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs17392))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs17392], 0))):{"className": "col-sm-6"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17392))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17392)], null))));
})();
var G__17397 = (function (){var attrs17393 = prais2.core.isrc(img_src,cljs.core.cst$kw$alt,alt_text);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs17393))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img-responsive","col-sm-6"], null)], null),attrs17393], 0))):{"className": "img-responsive col-sm-6"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17393))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17393)], null))));
})();
return React.createElement(G__17394,G__17395,G__17396,G__17397);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"key-point");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17398__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17398 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17399__i = 0, G__17399__a = new Array(arguments.length -  0);
while (G__17399__i < G__17399__a.length) {G__17399__a[G__17399__i] = arguments[G__17399__i + 0]; ++G__17399__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17399__a,0);
} 
return G__17398__delegate.call(this,args__8012__auto__);};
G__17398.cljs$lang$maxFixedArity = 0;
G__17398.cljs$lang$applyTo = (function (arglist__17400){
var args__8012__auto__ = cljs.core.seq(arglist__17400);
return G__17398__delegate(args__8012__auto__);
});
G__17398.cljs$core$IFn$_invoke$arity$variadic = G__17398__delegate;
return G__17398;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
prais2.intro.kp_png = (function prais2$intro$kp_png(name){
return [cljs.core.str("assets/keypoints/"),cljs.core.str(name),cljs.core.str(".png")].join('');
});
/**
 * 
 */
prais2.intro.key_points = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17404 = "section";
var G__17405 = {"id": "key-points", "className": "well danger col-sm-8"};
var G__17406 = React.createElement("h2",null,"Key points");
var G__17407 = (function (){var attrs17403 = (function (){var G__17408 = prais2.intro.kp_png("kp1");
var G__17409 = "A group of hospitals with high survival rates";
var G__17410 = "The 30-day survival rate after children's heart surgery is very high for all hospitals in the UK and Ireland,\n   and is among the best in the world.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__17408,G__17409,G__17410) : prais2.intro.key_point.call(null,G__17408,G__17409,G__17410));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"ul",((cljs.core.map_QMARK_(attrs17403))?sablono.interpreter.attributes(attrs17403):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17403))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__17411 = prais2.intro.kp_png("kp2");
var G__17412 = "No to direct comparison of rates";
var G__17413 = "A higher survival rate does not imply a better hospital.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__17411,G__17412,G__17413) : prais2.intro.key_point.call(null,G__17411,G__17412,G__17413));
})()),sablono.interpreter.interpret((function (){var G__17414 = prais2.intro.kp_png("kp3");
var G__17415 = "Data about the children treated determnes the predicted survival range";
var G__17416 = "A hospital's predicted range of survival, calculated by a formula, depends on the particular children treated\n   at that hospital. So a hospital treating children with more complex medical problems will have a lower predicted range.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__17414,G__17415,G__17416) : prais2.intro.key_point.call(null,G__17414,G__17415,G__17416));
})()),sablono.interpreter.interpret((function (){var G__17417 = prais2.intro.kp_png("kp4");
var G__17418 = "Then we compare survival rate to the predicted range.";
var G__17419 = "A hospital's survival rate should only be compared to its own predicted range. It is not valid to directly\n   compare survival rates between hospitals.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__17417,G__17418,G__17419) : prais2.intro.key_point.call(null,G__17417,G__17418,G__17419));
})())], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17403),sablono.interpreter.interpret((function (){var G__17420 = prais2.intro.kp_png("kp2");
var G__17421 = "No to direct comparison of rates";
var G__17422 = "A higher survival rate does not imply a better hospital.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__17420,G__17421,G__17422) : prais2.intro.key_point.call(null,G__17420,G__17421,G__17422));
})()),sablono.interpreter.interpret((function (){var G__17423 = prais2.intro.kp_png("kp3");
var G__17424 = "Data about the children treated determnes the predicted survival range";
var G__17425 = "A hospital's predicted range of survival, calculated by a formula, depends on the particular children treated\n   at that hospital. So a hospital treating children with more complex medical problems will have a lower predicted range.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__17423,G__17424,G__17425) : prais2.intro.key_point.call(null,G__17423,G__17424,G__17425));
})()),sablono.interpreter.interpret((function (){var G__17426 = prais2.intro.kp_png("kp4");
var G__17427 = "Then we compare survival rate to the predicted range.";
var G__17428 = "A hospital's survival rate should only be compared to its own predicted range. It is not valid to directly\n   compare survival rates between hospitals.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__17426,G__17427,G__17428) : prais2.intro.key_point.call(null,G__17426,G__17427,G__17428));
})())], null))));
})();
return React.createElement(G__17404,G__17405,G__17406,G__17407);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"key-points");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17429__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17429 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17430__i = 0, G__17430__a = new Array(arguments.length -  0);
while (G__17430__i < G__17430__a.length) {G__17430__a[G__17430__i] = arguments[G__17430__i + 0]; ++G__17430__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17430__a,0);
} 
return G__17429__delegate.call(this,args__8012__auto__);};
G__17429.cljs$lang$maxFixedArity = 0;
G__17429.cljs$lang$applyTo = (function (arglist__17431){
var args__8012__auto__ = cljs.core.seq(arglist__17431);
return G__17429__delegate(args__8012__auto__);
});
G__17429.cljs$core$IFn$_invoke$arity$variadic = G__17429__delegate;
return G__17429;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_1_content = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17435 = "section";
var G__17436 = {"className": "row"};
var G__17437 = (function (){var G__17439 = "p";
var G__17440 = {"className": "col-sm-12"};
var G__17441 = "The NHS monitors children\u2019s heart surgery in the UK by reviewing each hospital\u2019s 30-day survival\n   rate. The 30-day survival rate is the percentage of operations where the child survived to at least 30 days after\n   their heart surgery. Ireland also submits its data to the same audit body, ";
var G__17442 = (function (){var attrs17432 = prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17432))?sablono.interpreter.attributes(attrs17432):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17432))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17432),"NCHDA"], null))));
})();
var G__17443 = ".";
return React.createElement(G__17439,G__17440,G__17441,G__17442,G__17443);
})();
var G__17438 = (function (){var G__17444 = "p";
var G__17445 = {"className": "col-sm-12"};
var G__17446 = "Approximately 3500 children under the age of 16 have heart surgery each year in the United Kingdom\n   and Republic of Ireland.";
return React.createElement(G__17444,G__17445,G__17446);
})();
return React.createElement(G__17435,G__17436,G__17437,G__17438);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"section-1-content");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17447__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17447 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17448__i = 0, G__17448__a = new Array(arguments.length -  0);
while (G__17448__i < G__17448__a.length) {G__17448__a[G__17448__i] = arguments[G__17448__i + 0]; ++G__17448__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17448__a,0);
} 
return G__17447__delegate.call(this,args__8012__auto__);};
G__17447.cljs$lang$maxFixedArity = 0;
G__17447.cljs$lang$applyTo = (function (arglist__17449){
var args__8012__auto__ = cljs.core.seq(arglist__17449);
return G__17447__delegate(args__8012__auto__);
});
G__17447.cljs$core$IFn$_invoke$arity$variadic = G__17447__delegate;
return G__17447;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_2_content = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17452 = "section";
var G__17453 = {"className": "row"};
var G__17454 = (function (){var G__17456 = "p";
var G__17457 = {"className": "col-lg-12"};
var G__17458 = "Heart disease covers a wide range of disorders, from relatively minor to more severe conditions. Some hospitals\n    take on more complicated conditions and tend to operate on children with a lower chance of survival. Also, every\n    child is unique and may respond differently to treatment (surgery, drugs, postoperative care).";
return React.createElement(G__17456,G__17457,G__17458);
})();
var G__17455 = (function (){var G__17459 = "p";
var G__17460 = {"className": "col-lg-12"};
var G__17461 = "We therefore would not expect all hospitals to have the same survival rate: we should take into account how ill\n    the children were that the hospitals treated. In other words, if one hospital has a higher survival rate than\n    another hospital this is not necessarily evidence that one hospital is better than the other \u2013 it could\n    indicate that the second hospital treated children with more severe problems. ";
return React.createElement(G__17459,G__17460,G__17461);
})();
return React.createElement(G__17452,G__17453,G__17454,G__17455);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"section-2-content");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17462__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17462 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17463__i = 0, G__17463__a = new Array(arguments.length -  0);
while (G__17463__i < G__17463__a.length) {G__17463__a[G__17463__i] = arguments[G__17463__i + 0]; ++G__17463__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17463__a,0);
} 
return G__17462__delegate.call(this,args__8012__auto__);};
G__17462.cljs$lang$maxFixedArity = 0;
G__17462.cljs$lang$applyTo = (function (arglist__17464){
var args__8012__auto__ = cljs.core.seq(arglist__17464);
return G__17462__delegate(args__8012__auto__);
});
G__17462.cljs$core$IFn$_invoke$arity$variadic = G__17462__delegate;
return G__17462;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_3_content = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17488 = "section";
var G__17489 = {"className": "row"};
var G__17490 = (function (){var G__17491 = "div";
var G__17492 = {"className": "col-lg-12"};
var G__17493 = React.createElement("p",null,"When reviewing the 30-day survival rate for each hospital, the NHS takes into account how ill the children were\n    that each hospital treated. This is a fairer way of looking at survival rate data.");
var G__17494 = React.createElement("p",null,"Risk factors that affect a child\u2019s chance of survival include:");
var G__17495 = (function (){var G__17501 = "ul";
var G__17502 = null;
var G__17503 = React.createElement("li",null,"the age and weight of the child (other things being equal, the bigger and stronger a child is, the safer the\n      surgery is); ");
var G__17504 = React.createElement("li",null,"what problem in the heart the surgery is trying to fix (some hearts have more complex problems than others); ");
var G__17505 = React.createElement("li",null,"other health problems a child might have (e.g. a genetic syndrome); ");
var G__17506 = React.createElement("li",null,"the complexity of the surgical procedure.\u00A0 ");
return React.createElement(G__17501,G__17502,G__17503,G__17504,G__17505,G__17506);
})();
var G__17496 = React.createElement("p",null,"Knowing these factors for each child allows us to predict the percentage of children within a group that will\n    survive, even though we cannot predict exactly whether individual children will survive.");
var G__17497 = (function (){var G__17511 = "p";
var G__17512 = null;
var G__17513 = "The national audit body (";
var G__17514 = (function (){var attrs17473 = prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17473))?sablono.interpreter.attributes(attrs17473):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17473))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17473),"NCHDA"], null))));
})();
var G__17515 = ")\n    uses a statistical formula to combine data on these risk factors for all the children a hospital has treated over\n    the previous three years to give a predicted range for the overall proportion of survivors for that specific\n    hospital and time period. The formula is also used to calculate an extended predicted range for survival for each\n    hospital. The audit body then compares the survival rate achieved by a hospital with its predicted and extended\n    predicted range. Our ";
var G__17516 = (function (){var attrs17474 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("data/animation");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17474))?sablono.interpreter.attributes(attrs17474):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17474))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17518 = "i";
var G__17519 = {"className": "fa fa-video-camera"};
return React.createElement(G__17518,G__17519);
})()," two minute video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17474),(function (){var G__17520 = "i";
var G__17521 = {"className": "fa fa-video-camera"};
return React.createElement(G__17520,G__17521);
})()," two minute video"], null))));
})();
var G__17517 = " explains how\n    we present these comparisons in this site.";
return React.createElement(G__17511,G__17512,G__17513,G__17514,G__17515,G__17516,G__17517);
})();
var G__17498 = (function (){var G__17526 = "p";
var G__17527 = null;
var G__17528 = "If you'd like to know how the predicted range is actually calculated, you can watch our\n    ";
var G__17529 = (function (){var attrs17479 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17479))?sablono.interpreter.attributes(attrs17479):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17479))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17533 = "i";
var G__17534 = {"className": "fa fa-video-camera"};
return React.createElement(G__17533,G__17534);
})()," second short video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17479),(function (){var G__17535 = "i";
var G__17536 = {"className": "fa fa-video-camera"};
return React.createElement(G__17535,G__17536);
})()," second short video"], null))));
})();
var G__17530 = " in the ";
var G__17531 = (function (){var attrs17484 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17484))?sablono.interpreter.attributes(attrs17484):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17484))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17484),"Everything Else"], null))));
})();
var G__17532 = " section.";
return React.createElement(G__17526,G__17527,G__17528,G__17529,G__17530,G__17531,G__17532);
})();
var G__17499 = (function (){var G__17537 = "p";
var G__17538 = null;
var G__17539 = "If a hospital\u2019s survival rate is within its predicted range, its results are in line with what we expect.\n    For more information about how the NHS monitors survival rates see the  ";
var G__17540 = (function (){var attrs17485 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17485))?sablono.interpreter.attributes(attrs17485):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17485))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17485),"Everything Else"], null))));
})();
var G__17541 = " section.";
return React.createElement(G__17537,G__17538,G__17539,G__17540,G__17541);
})();
var G__17500 = (function (){var G__17542 = "div";
var G__17543 = {"className": "bg-danger"};
var G__17544 = React.createElement("p",null,"IMPORTANT! The predicted range depends on the types of patients treated at that hospital over that time\n      period \u2013 so each hospital will have a different predicted range and its predicted range will vary from year to\n      year.");
var G__17545 = (function (){var G__17546 = "p";
var G__17547 = null;
var G__17548 = "That is why we only compare a hospital\u2019s survival rate to its predicted range (from the statistical formula)\n      and ";
var G__17549 = React.createElement("strong",null,"not");
var G__17550 = " to survival rates at other hospitals.";
return React.createElement(G__17546,G__17547,G__17548,G__17549,G__17550);
})();
return React.createElement(G__17542,G__17543,G__17544,G__17545);
})();
return React.createElement(G__17491,G__17492,G__17493,G__17494,G__17495,G__17496,G__17497,G__17498,G__17499,G__17500);
})();
return React.createElement(G__17488,G__17489,G__17490);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"section-3-content");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17551__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17551 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17552__i = 0, G__17552__a = new Array(arguments.length -  0);
while (G__17552__i < G__17552__a.length) {G__17552__a[G__17552__i] = arguments[G__17552__i + 0]; ++G__17552__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17552__a,0);
} 
return G__17551__delegate.call(this,args__8012__auto__);};
G__17551.cljs$lang$maxFixedArity = 0;
G__17551.cljs$lang$applyTo = (function (arglist__17553){
var args__8012__auto__ = cljs.core.seq(arglist__17553);
return G__17551__delegate(args__8012__auto__);
});
G__17551.cljs$core$IFn$_invoke$arity$variadic = G__17551__delegate;
return G__17551;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_4_content = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17564 = "section";
var G__17565 = {"className": "row"};
var G__17566 = (function (){var G__17567 = "div";
var G__17568 = {"className": "col-lg-12"};
var G__17569 = (function (){var G__17571 = "p";
var G__17572 = null;
var G__17573 = React.createElement("b",null,"This site cannot help parents make decisions about their child\u2019s treatment.");
var G__17574 = " If you are concerned about your child\u2019s treatment plan ";
var G__17575 = React.createElement("b",null,"please speak with your child\u2019s cardiologist or surgeon");
var G__17576 = ". You can also access the support available from national charities such as the ";
var G__17577 = (function (){var attrs17558 = prais2.core.href("http://www.chfed.org.uk/",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17558))?sablono.interpreter.attributes(attrs17558):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17558))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Children\u2019s Heart Federation"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17558),"Children\u2019s Heart Federation"], null))));
})();
var G__17578 = ", ";
var G__17579 = (function (){var attrs17559 = prais2.core.href("http://www.lhm.org.uk/",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17559))?sablono.interpreter.attributes(attrs17559):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17559))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Little Hearts Matter"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17559),"Little Hearts Matter"], null))));
})();
var G__17580 = " or local charities for your specialist children\u2019s hospital (see ";
var G__17581 = (function (){var attrs17560 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/3/2");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17560))?sablono.interpreter.attributes(attrs17560):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17560))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["further charity resources"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17560),"further charity resources"], null))));
})();
var G__17582 = "). These guides on ";
var G__17583 = (function (){var attrs17561 = prais2.core.href("http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17561))?sablono.interpreter.attributes(attrs17561):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17561))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["speaking to your child\u2019s surgeon"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17561),"speaking to your child\u2019s surgeon"], null))));
})();
var G__17584 = " or ";
var G__17585 = (function (){var attrs17562 = prais2.core.href("http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17562))?sablono.interpreter.attributes(attrs17562):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17562))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["seeking a second opinion"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17562),"seeking a second opinion"], null))));
})();
var G__17586 = ", written by the Children\u2019s Heart Federation, might also be helpful.";
return React.createElement(G__17571,G__17572,G__17573,G__17574,G__17575,G__17576,G__17577,G__17578,G__17579,G__17580,G__17581,G__17582,G__17583,G__17584,G__17585,G__17586);
})();
var G__17570 = (function (){var G__17587 = "p";
var G__17588 = null;
var G__17589 = "We know that there is much more to children\u2019s heart surgery than survival to 30 days after surgery,\n     such as much longer term survival and quality of life after surgery. Although this information is not routinely\n     available at the moment, we are actively researching how to collect, interpret and publish this data.\n     (See ";
var G__17590 = (function (){var attrs17563 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/2/3");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs17563))?sablono.interpreter.attributes(attrs17563):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs17563))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What about longer term survival and quality of life?"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17563),"What about longer term survival and quality of life?"], null))));
})();
var G__17591 = ".) ";
return React.createElement(G__17587,G__17588,G__17589,G__17590,G__17591);
})();
return React.createElement(G__17567,G__17568,G__17569,G__17570);
})();
return React.createElement(G__17564,G__17565,G__17566);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"section-4-content");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17592__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17592 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17593__i = 0, G__17593__a = new Array(arguments.length -  0);
while (G__17593__i < G__17593__a.length) {G__17593__a[G__17593__i] = arguments[G__17593__i + 0]; ++G__17593__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17593__a,0);
} 
return G__17592__delegate.call(this,args__8012__auto__);};
G__17592.cljs$lang$maxFixedArity = 0;
G__17592.cljs$lang$applyTo = (function (arglist__17594){
var args__8012__auto__ = cljs.core.seq(arglist__17594);
return G__17592__delegate(args__8012__auto__);
});
G__17592.cljs$core$IFn$_invoke$arity$variadic = G__17592__delegate;
return G__17592;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_5_content = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17597 = "section";
var G__17598 = {"className": "row"};
var G__17599 = (function (){var G__17600 = "div";
var G__17601 = {"className": "col-lg-12"};
var G__17602 = React.createElement("p",null,"This site can help you interpret currently published survival data on children\u2019s heart surgery and explore\n    recent survival statistics for each hospital.");
return React.createElement(G__17600,G__17601,G__17602);
})();
return React.createElement(G__17597,G__17598,G__17599);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"section-5-content");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17603__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17603 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17604__i = 0, G__17604__a = new Array(arguments.length -  0);
while (G__17604__i < G__17604__a.length) {G__17604__a[G__17604__i] = arguments[G__17604__i + 0]; ++G__17604__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17604__a,0);
} 
return G__17603__delegate.call(this,args__8012__auto__);};
G__17603.cljs$lang$maxFixedArity = 0;
G__17603.cljs$lang$applyTo = (function (arglist__17605){
var args__8012__auto__ = cljs.core.seq(arglist__17605);
return G__17603__delegate(args__8012__auto__);
});
G__17603.cljs$core$IFn$_invoke$arity$variadic = G__17603__delegate;
return G__17603;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
