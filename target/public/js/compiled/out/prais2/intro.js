// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.intro');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('prais2.utils');
/**
 * 
 */
prais2.intro.section = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (section_id,section_title,section_content){
return React.createElement("section",{"id": section_id, "className": "col-sm-8 pull-left"},React.createElement("h2",{"dangerouslySetInnerHTML": {"__html": section_title}}),sablono.interpreter.interpret.call(null,section_content.call(null)));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"section");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35493__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35493 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35494__i = 0, G__35494__a = new Array(arguments.length -  0);
while (G__35494__i < G__35494__a.length) {G__35494__a[G__35494__i] = arguments[G__35494__i + 0]; ++G__35494__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35494__a,0);
} 
return G__35493__delegate.call(this,args__27116__auto__);};
G__35493.cljs$lang$maxFixedArity = 0;
G__35493.cljs$lang$applyTo = (function (arglist__35495){
var args__27116__auto__ = cljs.core.seq(arglist__35495);
return G__35493__delegate(args__27116__auto__);
});
G__35493.cljs$core$IFn$_invoke$arity$variadic = G__35493__delegate;
return G__35493;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.intro.render_intro = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",{"className": "container main-content"},React.createElement("div",{"className": "row"},React.createElement("div",{"className": "col-sm-8"},React.createElement("h1",null,"What, why, how?"),React.createElement("p",null,"This site is to help people make sense of the survival statistics about children's heart surgery published by\n     the National Congenital Heart Disease Audit (",(function (){var attrs35498 = prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35498))?sablono.interpreter.attributes.call(null,attrs35498):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35498))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35498),"NCHDA"], null))));
})(),").  The ",(function (){var attrs35499 = prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital ",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35499))?sablono.interpreter.attributes.call(null,attrs35499):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35499))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35499),"NCHDA"], null))));
})()," is managed by the\n      National Institute of Cardiovascular Outcomes Research (",(function (){var attrs35500 = prais2.core.href.call(null,"https://www.ucl.ac.uk/nicor",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35500))?sablono.interpreter.attributes.call(null,attrs35500):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35500))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NICOR"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35500),"NICOR"], null))));
})(),").")),(function (){var attrs35501 = prais2.intro.key_points.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35501))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"intro",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-12"], null)], null),attrs35501)):{"id": "intro", "className": "col-sm-12"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35501))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(1),"<strong>What</strong> do we mean by survival statistics?",prais2.intro.section_1_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(2),"<strong>Why</strong> can data about survival be difficult to interpret?",prais2.intro.section_2_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(3),"<strong>How</strong> does the NHS monitor hospitals that do children\u2019s heart surgery?",prais2.intro.section_3_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(4),"What this site cannot do",prais2.intro.section_4_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(5),"What this site can do",prais2.intro.section_5_content))], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35501),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(1),"<strong>What</strong> do we mean by survival statistics?",prais2.intro.section_1_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(2),"<strong>Why</strong> can data about survival be difficult to interpret?",prais2.intro.section_2_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(3),"<strong>How</strong> does the NHS monitor hospitals that do children\u2019s heart surgery?",prais2.intro.section_3_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(4),"What this site cannot do",prais2.intro.section_4_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(5),"What this site can do",prais2.intro.section_5_content))], null))));
})()));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title.call(null,"Key points"),prais2.core.update_description.call(null,"Explains the key points to understand when interpreting hospital child surgery survival data"),prais2.core.monitor_react.call(null,"INTRO>",false)], null)),"render-intro");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35502__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35502 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35503__i = 0, G__35503__a = new Array(arguments.length -  0);
while (G__35503__i < G__35503__a.length) {G__35503__a[G__35503__i] = arguments[G__35503__i + 0]; ++G__35503__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35503__a,0);
} 
return G__35502__delegate.call(this,args__27116__auto__);};
G__35502.cljs$lang$maxFixedArity = 0;
G__35502.cljs$lang$applyTo = (function (arglist__35504){
var args__27116__auto__ = cljs.core.seq(arglist__35504);
return G__35502__delegate(args__27116__auto__);
});
G__35502.cljs$core$IFn$_invoke$arity$variadic = G__35502__delegate;
return G__35502;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.intro.key_point = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (img_src,alt_text,text){
return React.createElement("li",{"className": "key-point row"},(function (){var attrs35505 = text;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs35505))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs35505)):{"className": "col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35505))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35505)], null))));
})(),(function (){var attrs35506 = prais2.core.isrc.call(null,img_src,new cljs.core.Keyword(null,"alt","alt",-3214426),alt_text);
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs35506))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img-responsive","col-sm-6"], null)], null),attrs35506)):{"className": "img-responsive col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35506))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35506)], null))));
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"key-point");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35507__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35507 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35508__i = 0, G__35508__a = new Array(arguments.length -  0);
while (G__35508__i < G__35508__a.length) {G__35508__a[G__35508__i] = arguments[G__35508__i + 0]; ++G__35508__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35508__a,0);
} 
return G__35507__delegate.call(this,args__27116__auto__);};
G__35507.cljs$lang$maxFixedArity = 0;
G__35507.cljs$lang$applyTo = (function (arglist__35509){
var args__27116__auto__ = cljs.core.seq(arglist__35509);
return G__35507__delegate(args__27116__auto__);
});
G__35507.cljs$core$IFn$_invoke$arity$variadic = G__35507__delegate;
return G__35507;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
prais2.intro.kp_png = (function prais2$intro$kp_png(name){
return [cljs.core.str("assets/keypoints/"),cljs.core.str(name),cljs.core.str(".png")].join('');
});
/**
 * 
 */
prais2.intro.key_points = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("section",{"id": "key-points", "className": "well danger col-sm-8"},React.createElement("h2",null,"Key points"),(function (){var attrs35512 = prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp1"),"A group of hospitals with high survival rates","The 30-day survival rate after children's heart surgery is very high for all hospitals in the UK and Ireland,\n   and is among the best in the world.");
return cljs.core.apply.call(null,React.createElement,"ul",((cljs.core.map_QMARK_.call(null,attrs35512))?sablono.interpreter.attributes.call(null,attrs35512):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35512))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp2"),"No to direct comparison of rates","A higher survival rate does not imply a better hospital.")),sablono.interpreter.interpret.call(null,prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp3"),"Data about the children treated determnes the predicted survival range","A hospital's predicted range of survival, calculated by a formula, depends on the particular children treated\n   at that hospital. So a hospital treating children with more complex medical problems will have a lower predicted range.")),sablono.interpreter.interpret.call(null,prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp4"),"Then we compare survival rate to the predicted range.","A hospital's survival rate should only be compared to its own predicted range. It is not valid to directly\n   compare survival rates between hospitals."))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35512),sablono.interpreter.interpret.call(null,prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp2"),"No to direct comparison of rates","A higher survival rate does not imply a better hospital.")),sablono.interpreter.interpret.call(null,prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp3"),"Data about the children treated determnes the predicted survival range","A hospital's predicted range of survival, calculated by a formula, depends on the particular children treated\n   at that hospital. So a hospital treating children with more complex medical problems will have a lower predicted range.")),sablono.interpreter.interpret.call(null,prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp4"),"Then we compare survival rate to the predicted range.","A hospital's survival rate should only be compared to its own predicted range. It is not valid to directly\n   compare survival rates between hospitals."))], null))));
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"key-points");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35513__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35513 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35514__i = 0, G__35514__a = new Array(arguments.length -  0);
while (G__35514__i < G__35514__a.length) {G__35514__a[G__35514__i] = arguments[G__35514__i + 0]; ++G__35514__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35514__a,0);
} 
return G__35513__delegate.call(this,args__27116__auto__);};
G__35513.cljs$lang$maxFixedArity = 0;
G__35513.cljs$lang$applyTo = (function (arglist__35515){
var args__27116__auto__ = cljs.core.seq(arglist__35515);
return G__35513__delegate(args__27116__auto__);
});
G__35513.cljs$core$IFn$_invoke$arity$variadic = G__35513__delegate;
return G__35513;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_1_content = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("section",{"className": "row"},React.createElement("p",{"className": "col-sm-12"},"The NHS monitors children\u2019s heart surgery in the UK by reviewing each hospital\u2019s 30-day survival\n   rate. The 30-day survival rate is the percentage of operations where the child survived to at least 30 days after\n   their heart surgery. Ireland also submits its data to the same audit body, ",(function (){var attrs35516 = prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35516))?sablono.interpreter.attributes.call(null,attrs35516):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35516))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35516),"NCHDA"], null))));
})(),"."),React.createElement("p",{"className": "col-sm-12"},"Approximately 3500 children under the age of 16 have heart surgery each year in the United Kingdom\n   and Republic of Ireland."));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"section-1-content");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35519__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35519 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35520__i = 0, G__35520__a = new Array(arguments.length -  0);
while (G__35520__i < G__35520__a.length) {G__35520__a[G__35520__i] = arguments[G__35520__i + 0]; ++G__35520__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35520__a,0);
} 
return G__35519__delegate.call(this,args__27116__auto__);};
G__35519.cljs$lang$maxFixedArity = 0;
G__35519.cljs$lang$applyTo = (function (arglist__35521){
var args__27116__auto__ = cljs.core.seq(arglist__35521);
return G__35519__delegate(args__27116__auto__);
});
G__35519.cljs$core$IFn$_invoke$arity$variadic = G__35519__delegate;
return G__35519;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_2_content = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("section",{"className": "row"},React.createElement("p",{"className": "col-lg-12"},"Heart disease covers a wide range of disorders, from relatively minor to more severe conditions. Some hospitals\n    take on more complicated conditions and tend to operate on children with a lower chance of survival. Also, every\n    child is unique and may respond differently to treatment (surgery, drugs, postoperative care)."),React.createElement("p",{"className": "col-lg-12"},"We therefore would not expect all hospitals to have the same survival rate: we should take into account how ill\n    the children were that the hospitals treated. In other words, if one hospital has a higher survival rate than\n    another hospital this is not necessarily evidence that one hospital is better than the other \u2013 it could\n    indicate that the second hospital treated children with more severe problems. "));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"section-2-content");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35524__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35524 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35525__i = 0, G__35525__a = new Array(arguments.length -  0);
while (G__35525__i < G__35525__a.length) {G__35525__a[G__35525__i] = arguments[G__35525__i + 0]; ++G__35525__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35525__a,0);
} 
return G__35524__delegate.call(this,args__27116__auto__);};
G__35524.cljs$lang$maxFixedArity = 0;
G__35524.cljs$lang$applyTo = (function (arglist__35526){
var args__27116__auto__ = cljs.core.seq(arglist__35526);
return G__35524__delegate(args__27116__auto__);
});
G__35524.cljs$core$IFn$_invoke$arity$variadic = G__35524__delegate;
return G__35524;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_3_content = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("section",{"className": "row"},React.createElement("div",{"className": "col-lg-12"},React.createElement("p",null,"When reviewing the 30-day survival rate for each hospital, the NHS takes into account how ill the children were\n    that each hospital treated. This is a fairer way of looking at survival rate data."),React.createElement("p",null,"Risk factors that affect a child\u2019s chance of survival include:"),React.createElement("ul",null,React.createElement("li",null,"the age and weight of the child (other things being equal, the bigger and stronger a child is, the safer the\n      surgery is); "),React.createElement("li",null,"what problem in the heart the surgery is trying to fix (some hearts have more complex problems than others); "),React.createElement("li",null,"other health problems a child might have (e.g. a genetic syndrome); "),React.createElement("li",null,"the complexity of the surgical procedure.\u00A0 ")),React.createElement("p",null,"Knowing these factors for each child allows us to predict the percentage of children within a group that will\n    survive, even though we cannot predict exactly whether individual children will survive."),React.createElement("p",null,"The national audit body (",(function (){var attrs35535 = prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35535))?sablono.interpreter.attributes.call(null,attrs35535):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35535))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35535),"NCHDA"], null))));
})(),")\n    uses a statistical formula to combine data on these risk factors for all the children a hospital has treated over\n    the previous three years to give a predicted range for the overall proportion of survivors for that specific\n    hospital and time period. The formula is also used to calculate an extended predicted range for survival for each\n    hospital. The audit body then compares the survival rate achieved by a hospital with its predicted and extended\n    predicted range. Our ",(function (){var attrs35536 = prais2.core.href.call(null,"data/animation");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35536))?sablono.interpreter.attributes.call(null,attrs35536):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35536))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",{"className": "fa fa-video-camera"})," two minute video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35536),React.createElement("i",{"className": "fa fa-video-camera"})," two minute video"], null))));
})()," explains how\n    we present these comparisons in this site."),React.createElement("p",null,"If you'd like to know how the predicted range is actually calculated, you can watch our\n    ",(function (){var attrs35541 = prais2.core.href.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35541))?sablono.interpreter.attributes.call(null,attrs35541):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35541))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",{"className": "fa fa-video-camera"})," second short video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35541),React.createElement("i",{"className": "fa fa-video-camera"})," second short video"], null))));
})()," in the ",(function (){var attrs35546 = prais2.core.href.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35546))?sablono.interpreter.attributes.call(null,attrs35546):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35546))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35546),"Everything Else"], null))));
})()," section."),React.createElement("p",null,"If a hospital\u2019s survival rate is within its predicted range, its results are in line with what we expect.\n    For more information about how the NHS monitors survival rates see the  ",(function (){var attrs35547 = prais2.core.href.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35547))?sablono.interpreter.attributes.call(null,attrs35547):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35547))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35547),"Everything Else"], null))));
})()," section."),React.createElement("div",{"className": "bg-danger"},React.createElement("p",null,"IMPORTANT! The predicted range depends on the types of patients treated at that hospital over that time\n      period \u2013 so each hospital will have a different predicted range and its predicted range will vary from year to\n      year."),React.createElement("p",null,"That is why we only compare a hospital\u2019s survival rate to its predicted range (from the statistical formula)\n      and ",React.createElement("strong",null,"not")," to survival rates at other hospitals."))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"section-3-content");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35550__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35550 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35551__i = 0, G__35551__a = new Array(arguments.length -  0);
while (G__35551__i < G__35551__a.length) {G__35551__a[G__35551__i] = arguments[G__35551__i + 0]; ++G__35551__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35551__a,0);
} 
return G__35550__delegate.call(this,args__27116__auto__);};
G__35550.cljs$lang$maxFixedArity = 0;
G__35550.cljs$lang$applyTo = (function (arglist__35552){
var args__27116__auto__ = cljs.core.seq(arglist__35552);
return G__35550__delegate(args__27116__auto__);
});
G__35550.cljs$core$IFn$_invoke$arity$variadic = G__35550__delegate;
return G__35550;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_4_content = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("section",{"className": "row"},React.createElement("div",{"className": "col-lg-12"},React.createElement("p",null,React.createElement("b",null,"This site cannot help parents make decisions about their child\u2019s treatment.")," If you are concerned about your child\u2019s treatment plan ",React.createElement("b",null,"please speak with your child\u2019s cardiologist or surgeon"),". You can also access the support available from national charities such as the ",(function (){var attrs35557 = prais2.core.href.call(null,"http://www.chfed.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35557))?sablono.interpreter.attributes.call(null,attrs35557):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35557))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Children\u2019s Heart Federation"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35557),"Children\u2019s Heart Federation"], null))));
})(),", ",(function (){var attrs35558 = prais2.core.href.call(null,"http://www.lhm.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35558))?sablono.interpreter.attributes.call(null,attrs35558):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35558))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Little Hearts Matter"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35558),"Little Hearts Matter"], null))));
})()," or local charities for your specialist children\u2019s hospital (see ",(function (){var attrs35559 = prais2.core.href.call(null,"faq/3/2");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35559))?sablono.interpreter.attributes.call(null,attrs35559):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35559))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["further charity resources"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35559),"further charity resources"], null))));
})(),"). These guides on ",(function (){var attrs35560 = prais2.core.href.call(null,"http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35560))?sablono.interpreter.attributes.call(null,attrs35560):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35560))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["speaking to your child\u2019s surgeon"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35560),"speaking to your child\u2019s surgeon"], null))));
})()," or ",(function (){var attrs35561 = prais2.core.href.call(null,"http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35561))?sablono.interpreter.attributes.call(null,attrs35561):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35561))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["seeking a second opinion"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35561),"seeking a second opinion"], null))));
})(),", written by the Children\u2019s Heart Federation, might also be helpful."),React.createElement("p",null,"We know that there is much more to children\u2019s heart surgery than survival to 30 days after surgery,\n     such as much longer term survival and quality of life after surgery. Although this information is not routinely\n     available at the moment, we are actively researching how to collect, interpret and publish this data.\n     (See ",(function (){var attrs35562 = prais2.core.href.call(null,"faq/2/3");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35562))?sablono.interpreter.attributes.call(null,attrs35562):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35562))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What about longer term survival and quality of life?"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35562),"What about longer term survival and quality of life?"], null))));
})(),".) ")));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"section-4-content");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35563__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35563 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35564__i = 0, G__35564__a = new Array(arguments.length -  0);
while (G__35564__i < G__35564__a.length) {G__35564__a[G__35564__i] = arguments[G__35564__i + 0]; ++G__35564__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35564__a,0);
} 
return G__35563__delegate.call(this,args__27116__auto__);};
G__35563.cljs$lang$maxFixedArity = 0;
G__35563.cljs$lang$applyTo = (function (arglist__35565){
var args__27116__auto__ = cljs.core.seq(arglist__35565);
return G__35563__delegate(args__27116__auto__);
});
G__35563.cljs$core$IFn$_invoke$arity$variadic = G__35563__delegate;
return G__35563;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_5_content = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("section",{"className": "row"},React.createElement("div",{"className": "col-lg-12"},React.createElement("p",null,"This site can help you interpret currently published survival data on children\u2019s heart surgery and explore\n    recent survival statistics for each hospital.")));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"section-5-content");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35568__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35568 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35569__i = 0, G__35569__a = new Array(arguments.length -  0);
while (G__35569__i < G__35569__a.length) {G__35569__a[G__35569__i] = arguments[G__35569__i + 0]; ++G__35569__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35569__a,0);
} 
return G__35568__delegate.call(this,args__27116__auto__);};
G__35568.cljs$lang$maxFixedArity = 0;
G__35568.cljs$lang$applyTo = (function (arglist__35570){
var args__27116__auto__ = cljs.core.seq(arglist__35570);
return G__35568__delegate(args__27116__auto__);
});
G__35568.cljs$core$IFn$_invoke$arity$variadic = G__35568__delegate;
return G__35568;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=intro.js.map?rel=1629049578635