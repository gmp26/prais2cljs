// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.intro');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
/**
 * 
 */
prais2.intro.section = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (section_id,section_title,section_content){
return React.createElement("section",({"id": section_id, "className": "col-sm-8 pull-left"}),React.createElement("h2",({"dangerouslySetInnerHTML": ({"__html": section_title})})),sablono.interpreter.interpret.call(null,section_content.call(null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"section");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21948__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21948 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21949__i = 0, G__21949__a = new Array(arguments.length -  0);
while (G__21949__i < G__21949__a.length) {G__21949__a[G__21949__i] = arguments[G__21949__i + 0]; ++G__21949__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21949__a,0,null);
} 
return G__21948__delegate.call(this,args__16261__auto__);};
G__21948.cljs$lang$maxFixedArity = 0;
G__21948.cljs$lang$applyTo = (function (arglist__21950){
var args__16261__auto__ = cljs.core.seq(arglist__21950);
return G__21948__delegate(args__16261__auto__);
});
G__21948.cljs$core$IFn$_invoke$arity$variadic = G__21948__delegate;
return G__21948;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.intro.render_intro = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",({"className": "container main-content"}),React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "col-sm-8"}),React.createElement("h1",null,"What, why, how?"),React.createElement("p",null,"This site is to help people make sense of the survival statistics about children's heart surgery published by\n     the National Congenital Heart Disease Audit (",(function (){var attrs21954 = prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21954))?sablono.interpreter.attributes.call(null,attrs21954):null),((cljs.core.map_QMARK_.call(null,attrs21954))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21954),"NCHDA"], null)));
})(),").  The ",(function (){var attrs21955 = prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital ",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21955))?sablono.interpreter.attributes.call(null,attrs21955):null),((cljs.core.map_QMARK_.call(null,attrs21955))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21955),"NCHDA"], null)));
})()," is managed by the\n      National Institute of Cardiovascular Outcomes Research (",(function (){var attrs21956 = prais2.core.href.call(null,"https://www.ucl.ac.uk/nicor",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21956))?sablono.interpreter.attributes.call(null,attrs21956):null),((cljs.core.map_QMARK_.call(null,attrs21956))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NICOR"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21956),"NICOR"], null)));
})(),").")),(function (){var attrs21951 = prais2.intro.key_points.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21951))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"intro",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-12"], null)], null),attrs21951)):({"id": "intro", "className": "col-sm-12"})),((cljs.core.map_QMARK_.call(null,attrs21951))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(1),"<strong>What</strong> do we mean by survival statistics?",prais2.intro.section_1_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(2),"<strong>Why</strong> can data about survival be difficult to interpret?",prais2.intro.section_2_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(3),"<strong>How</strong> does the NHS monitor hospitals that do children\u2019s heart surgery?",prais2.intro.section_3_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(4),"What this site cannot do",prais2.intro.section_4_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(5),"What this site can do",prais2.intro.section_5_content))], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21951),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(1),"<strong>What</strong> do we mean by survival statistics?",prais2.intro.section_1_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(2),"<strong>Why</strong> can data about survival be difficult to interpret?",prais2.intro.section_2_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(3),"<strong>How</strong> does the NHS monitor hospitals that do children\u2019s heart surgery?",prais2.intro.section_3_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(4),"What this site cannot do",prais2.intro.section_4_content)),sablono.interpreter.interpret.call(null,prais2.intro.section.call(null,(5),"What this site can do",prais2.intro.section_5_content))], null)));
})()));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title.call(null,"Key points"),prais2.core.monitor_react.call(null,"INTRO>",false)], null)),"render-intro");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21957__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21957 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21958__i = 0, G__21958__a = new Array(arguments.length -  0);
while (G__21958__i < G__21958__a.length) {G__21958__a[G__21958__i] = arguments[G__21958__i + 0]; ++G__21958__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21958__a,0,null);
} 
return G__21957__delegate.call(this,args__16261__auto__);};
G__21957.cljs$lang$maxFixedArity = 0;
G__21957.cljs$lang$applyTo = (function (arglist__21959){
var args__16261__auto__ = cljs.core.seq(arglist__21959);
return G__21957__delegate(args__16261__auto__);
});
G__21957.cljs$core$IFn$_invoke$arity$variadic = G__21957__delegate;
return G__21957;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.intro.key_point = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (img_src,alt_text,text){
return React.createElement("li",({"className": "key-point row"}),(function (){var attrs21960 = text;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs21960))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs21960)):({"className": "col-sm-6"})),((cljs.core.map_QMARK_.call(null,attrs21960))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21960)], null)));
})(),(function (){var attrs21961 = prais2.core.isrc.call(null,img_src,new cljs.core.Keyword(null,"alt","alt",-3214426),alt_text);
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs21961))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img-responsive","col-sm-6"], null)], null),attrs21961)):({"className": "img-responsive col-sm-6"})),((cljs.core.map_QMARK_.call(null,attrs21961))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21961)], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"key-point");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21962__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21962 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21963__i = 0, G__21963__a = new Array(arguments.length -  0);
while (G__21963__i < G__21963__a.length) {G__21963__a[G__21963__i] = arguments[G__21963__i + 0]; ++G__21963__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21963__a,0,null);
} 
return G__21962__delegate.call(this,args__16261__auto__);};
G__21962.cljs$lang$maxFixedArity = 0;
G__21962.cljs$lang$applyTo = (function (arglist__21964){
var args__16261__auto__ = cljs.core.seq(arglist__21964);
return G__21962__delegate(args__16261__auto__);
});
G__21962.cljs$core$IFn$_invoke$arity$variadic = G__21962__delegate;
return G__21962;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
prais2.intro.kp_png = (function prais2$intro$kp_png(name){
return ["assets/keypoints/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".png"].join('');
});
/**
 * 
 */
prais2.intro.key_points = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("section",({"id": "key-points", "className": "well danger col-sm-8"}),React.createElement("h2",null,"Key points"),(function (){var attrs21967 = prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp1"),"A group of hospitals with high survival rates","The 30-day survival rate after children's heart surgery is very high for all hospitals in the UK and Ireland,\n   and is among the best in the world.");
return cljs.core.apply.call(null,React.createElement,"ul",((cljs.core.map_QMARK_.call(null,attrs21967))?sablono.interpreter.attributes.call(null,attrs21967):null),((cljs.core.map_QMARK_.call(null,attrs21967))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp2"),"No to direct comparison of rates","A higher survival rate does not imply a better hospital.")),sablono.interpreter.interpret.call(null,prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp3"),"Data about the children treated determnes the predicted survival range","A hospital's predicted range of survival, calculated by a formula, depends on the particular children treated\n   at that hospital. So a hospital treating children with more complex medical problems will have a lower predicted range.")),sablono.interpreter.interpret.call(null,prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp4"),"Then we compare survival rate to the predicted range.","A hospital's survival rate should only be compared to its own predicted range. It is not valid to directly\n   compare survival rates between hospitals."))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21967),sablono.interpreter.interpret.call(null,prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp2"),"No to direct comparison of rates","A higher survival rate does not imply a better hospital.")),sablono.interpreter.interpret.call(null,prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp3"),"Data about the children treated determnes the predicted survival range","A hospital's predicted range of survival, calculated by a formula, depends on the particular children treated\n   at that hospital. So a hospital treating children with more complex medical problems will have a lower predicted range.")),sablono.interpreter.interpret.call(null,prais2.intro.key_point.call(null,prais2.intro.kp_png.call(null,"kp4"),"Then we compare survival rate to the predicted range.","A hospital's survival rate should only be compared to its own predicted range. It is not valid to directly\n   compare survival rates between hospitals."))], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"key-points");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21968__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21968 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21969__i = 0, G__21969__a = new Array(arguments.length -  0);
while (G__21969__i < G__21969__a.length) {G__21969__a[G__21969__i] = arguments[G__21969__i + 0]; ++G__21969__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21969__a,0,null);
} 
return G__21968__delegate.call(this,args__16261__auto__);};
G__21968.cljs$lang$maxFixedArity = 0;
G__21968.cljs$lang$applyTo = (function (arglist__21970){
var args__16261__auto__ = cljs.core.seq(arglist__21970);
return G__21968__delegate(args__16261__auto__);
});
G__21968.cljs$core$IFn$_invoke$arity$variadic = G__21968__delegate;
return G__21968;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_1_content = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("section",({"className": "row"}),React.createElement("p",({"className": "col-sm-12"}),"The NHS monitors children\u2019s heart surgery in the UK by reviewing each hospital\u2019s 30-day survival\n   rate. The 30-day survival rate is the percentage of operations where the child survived to at least 30 days after\n   their heart surgery. Ireland also submits its data to the same audit body, ",(function (){var attrs21973 = prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21973))?sablono.interpreter.attributes.call(null,attrs21973):null),((cljs.core.map_QMARK_.call(null,attrs21973))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21973),"NCHDA"], null)));
})(),"."),React.createElement("p",({"className": "col-sm-12"}),"Approximately 3500 children under the age of 16 have heart surgery each year in the United Kingdom\n   and Republic of Ireland."));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"section-1-content");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21974__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21974 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21975__i = 0, G__21975__a = new Array(arguments.length -  0);
while (G__21975__i < G__21975__a.length) {G__21975__a[G__21975__i] = arguments[G__21975__i + 0]; ++G__21975__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21975__a,0,null);
} 
return G__21974__delegate.call(this,args__16261__auto__);};
G__21974.cljs$lang$maxFixedArity = 0;
G__21974.cljs$lang$applyTo = (function (arglist__21976){
var args__16261__auto__ = cljs.core.seq(arglist__21976);
return G__21974__delegate(args__16261__auto__);
});
G__21974.cljs$core$IFn$_invoke$arity$variadic = G__21974__delegate;
return G__21974;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_2_content = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("section",({"className": "row"}),React.createElement("p",({"className": "col-lg-12"}),"Heart disease covers a wide range of disorders, from relatively minor to more severe conditions. Some hospitals\n    take on more complicated conditions and tend to operate on children with a lower chance of survival. Also, every\n    child is unique and may respond differently to treatment (surgery, drugs, postoperative care)."),React.createElement("p",({"className": "col-lg-12"}),"We therefore would not expect all hospitals to have the same survival rate: we should take into account how ill\n    the children were that the hospitals treated. In other words, if one hospital has a higher survival rate than\n    another hospital this is not necessarily evidence that one hospital is better than the other \u2013 it could\n    indicate that the second hospital treated children with more severe problems. "));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"section-2-content");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21979__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21979 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21980__i = 0, G__21980__a = new Array(arguments.length -  0);
while (G__21980__i < G__21980__a.length) {G__21980__a[G__21980__i] = arguments[G__21980__i + 0]; ++G__21980__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21980__a,0,null);
} 
return G__21979__delegate.call(this,args__16261__auto__);};
G__21979.cljs$lang$maxFixedArity = 0;
G__21979.cljs$lang$applyTo = (function (arglist__21981){
var args__16261__auto__ = cljs.core.seq(arglist__21981);
return G__21979__delegate(args__16261__auto__);
});
G__21979.cljs$core$IFn$_invoke$arity$variadic = G__21979__delegate;
return G__21979;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_3_content = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("section",({"className": "row"}),React.createElement("div",({"className": "col-lg-12"}),React.createElement("p",null,"When reviewing the 30-day survival rate for each hospital, the NHS takes into account how ill the children were\n    that each hospital treated. This is a fairer way of looking at survival rate data."),React.createElement("p",null,"Risk factors that affect a child\u2019s chance of survival include:"),React.createElement("ul",null,React.createElement("li",null,"the age and weight of the child (other things being equal, the bigger and stronger a child is, the safer the\n      surgery is); "),React.createElement("li",null,"what problem in the heart the surgery is trying to fix (some hearts have more complex problems than others); "),React.createElement("li",null,"other health problems a child might have (e.g. a genetic syndrome); "),React.createElement("li",null,"the complexity of the surgical procedure.\u00A0 ")),React.createElement("p",null,"Knowing these factors for each child allows us to predict the percentage of children within a group that will\n    survive, even though we cannot predict exactly whether individual children will survive."),React.createElement("p",null,"The national audit body (",(function (){var attrs21992 = prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21992))?sablono.interpreter.attributes.call(null,attrs21992):null),((cljs.core.map_QMARK_.call(null,attrs21992))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21992),"NCHDA"], null)));
})(),")\n    uses a statistical formula to combine data on these risk factors for all the children a hospital has treated over\n    the previous three years to give a predicted range for the overall proportion of survivors for that specific\n    hospital and time period. The formula is also used to calculate an extended predicted range for survival for each\n    hospital. The audit body then compares the survival rate achieved by a hospital with its predicted and extended\n    predicted range. Our ",(function (){var attrs21993 = prais2.core.href.call(null,"data/animation");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21993))?sablono.interpreter.attributes.call(null,attrs21993):null),((cljs.core.map_QMARK_.call(null,attrs21993))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-video-camera"}))," two minute video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21993),React.createElement("i",({"className": "fa fa-video-camera"}))," two minute video"], null)));
})()," explains how\n    we present these comparisons in this site."),React.createElement("p",null,"If you'd like to know how the predicted range is actually calculated, you can watch our\n    ",(function (){var attrs21998 = prais2.core.href.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21998))?sablono.interpreter.attributes.call(null,attrs21998):null),((cljs.core.map_QMARK_.call(null,attrs21998))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-video-camera"}))," second short video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21998),React.createElement("i",({"className": "fa fa-video-camera"}))," second short video"], null)));
})()," in the ",(function (){var attrs22003 = prais2.core.href.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22003))?sablono.interpreter.attributes.call(null,attrs22003):null),((cljs.core.map_QMARK_.call(null,attrs22003))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22003),"Everything Else"], null)));
})()," section."),React.createElement("p",null,"If a hospital\u2019s survival rate is within its predicted range, its results are in line with what we expect.\n    For more information about how the NHS monitors survival rates see the  ",(function (){var attrs22004 = prais2.core.href.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22004))?sablono.interpreter.attributes.call(null,attrs22004):null),((cljs.core.map_QMARK_.call(null,attrs22004))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22004),"Everything Else"], null)));
})()," section."),React.createElement("div",({"className": "bg-danger"}),React.createElement("p",null,"IMPORTANT! The predicted range depends on the types of patients treated at that hospital over that time\n      period \u2013 so each hospital will have a different predicted range and its predicted range will vary from year to\n      year."),React.createElement("p",null,"That is why we only compare a hospital\u2019s survival rate to its predicted range (from the statistical formula)\n      and ",React.createElement("strong",null,"not")," to survival rates at other hospitals."))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"section-3-content");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22005__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22005 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22006__i = 0, G__22006__a = new Array(arguments.length -  0);
while (G__22006__i < G__22006__a.length) {G__22006__a[G__22006__i] = arguments[G__22006__i + 0]; ++G__22006__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22006__a,0,null);
} 
return G__22005__delegate.call(this,args__16261__auto__);};
G__22005.cljs$lang$maxFixedArity = 0;
G__22005.cljs$lang$applyTo = (function (arglist__22007){
var args__16261__auto__ = cljs.core.seq(arglist__22007);
return G__22005__delegate(args__16261__auto__);
});
G__22005.cljs$core$IFn$_invoke$arity$variadic = G__22005__delegate;
return G__22005;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_4_content = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("section",({"className": "row"}),React.createElement("div",({"className": "col-lg-12"}),React.createElement("p",null,React.createElement("b",null,"This site cannot help parents make decisions about their child\u2019s treatment.")," If you are concerned about your child\u2019s treatment plan ",React.createElement("b",null,"please speak with your child\u2019s cardiologist or surgeon"),". You can also access the support available from national charities such as the ",(function (){var attrs22012 = prais2.core.href.call(null,"http://www.chfed.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22012))?sablono.interpreter.attributes.call(null,attrs22012):null),((cljs.core.map_QMARK_.call(null,attrs22012))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Children\u2019s Heart Federation"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22012),"Children\u2019s Heart Federation"], null)));
})(),", ",(function (){var attrs22013 = prais2.core.href.call(null,"http://www.lhm.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22013))?sablono.interpreter.attributes.call(null,attrs22013):null),((cljs.core.map_QMARK_.call(null,attrs22013))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Little Hearts Matter"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22013),"Little Hearts Matter"], null)));
})()," or local charities for your specialist children\u2019s hospital (see ",(function (){var attrs22014 = prais2.core.href.call(null,"faq/3/2");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22014))?sablono.interpreter.attributes.call(null,attrs22014):null),((cljs.core.map_QMARK_.call(null,attrs22014))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["further charity resources"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22014),"further charity resources"], null)));
})(),"). These guides on ",(function (){var attrs22015 = prais2.core.href.call(null,"http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22015))?sablono.interpreter.attributes.call(null,attrs22015):null),((cljs.core.map_QMARK_.call(null,attrs22015))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["speaking to your child\u2019s surgeon"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22015),"speaking to your child\u2019s surgeon"], null)));
})()," or ",(function (){var attrs22016 = prais2.core.href.call(null,"http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf",new cljs.core.Keyword(null,"target","target",253001721),"_blank");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22016))?sablono.interpreter.attributes.call(null,attrs22016):null),((cljs.core.map_QMARK_.call(null,attrs22016))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["seeking a second opinion"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22016),"seeking a second opinion"], null)));
})(),", written by the Children\u2019s Heart Federation, might also be helpful."),React.createElement("p",null,"We know that there is much more to children\u2019s heart surgery than survival to 30 days after surgery,\n     such as much longer term survival and quality of life after surgery. Although this information is not routinely\n     available at the moment, we are actively researching how to collect, interpret and publish this data.\n     (See ",(function (){var attrs22017 = prais2.core.href.call(null,"faq/2/3");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs22017))?sablono.interpreter.attributes.call(null,attrs22017):null),((cljs.core.map_QMARK_.call(null,attrs22017))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What about longer term survival and quality of life?"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22017),"What about longer term survival and quality of life?"], null)));
})(),".) ")));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"section-4-content");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22018__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22018 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22019__i = 0, G__22019__a = new Array(arguments.length -  0);
while (G__22019__i < G__22019__a.length) {G__22019__a[G__22019__i] = arguments[G__22019__i + 0]; ++G__22019__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22019__a,0,null);
} 
return G__22018__delegate.call(this,args__16261__auto__);};
G__22018.cljs$lang$maxFixedArity = 0;
G__22018.cljs$lang$applyTo = (function (arglist__22020){
var args__16261__auto__ = cljs.core.seq(arglist__22020);
return G__22018__delegate(args__16261__auto__);
});
G__22018.cljs$core$IFn$_invoke$arity$variadic = G__22018__delegate;
return G__22018;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_5_content = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("section",({"className": "row"}),React.createElement("div",({"className": "col-lg-12"}),React.createElement("p",null,"This site can help you interpret currently published survival data on children\u2019s heart surgery and explore\n    recent survival statistics for each hospital.")));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"section-5-content");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22023__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22023 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22024__i = 0, G__22024__a = new Array(arguments.length -  0);
while (G__22024__i < G__22024__a.length) {G__22024__a[G__22024__i] = arguments[G__22024__i + 0]; ++G__22024__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22024__a,0,null);
} 
return G__22023__delegate.call(this,args__16261__auto__);};
G__22023.cljs$lang$maxFixedArity = 0;
G__22023.cljs$lang$applyTo = (function (arglist__22025){
var args__16261__auto__ = cljs.core.seq(arglist__22025);
return G__22023__delegate(args__16261__auto__);
});
G__22023.cljs$core$IFn$_invoke$arity$variadic = G__22023__delegate;
return G__22023;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=intro.js.map
