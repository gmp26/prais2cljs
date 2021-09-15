// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('prais2.intro');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('prais2.core');
/**
 * 
 */
prais2.intro.section = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (section_id,section_title,section_content){
return React.createElement("section",({"id": section_id, "className": "col-sm-8 pull-left"}),React.createElement("h2",({"dangerouslySetInnerHTML": ({"__html": section_title})})),sablono.interpreter.interpret((section_content.cljs$core$IFn$_invoke$arity$0 ? section_content.cljs$core$IFn$_invoke$arity$0() : section_content.call(null))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"section");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20537__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20537 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20538__i = 0, G__20538__a = new Array(arguments.length -  0);
while (G__20538__i < G__20538__a.length) {G__20538__a[G__20538__i] = arguments[G__20538__i + 0]; ++G__20538__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20538__a,0,null);
} 
return G__20537__delegate.call(this,args__14302__auto__);};
G__20537.cljs$lang$maxFixedArity = 0;
G__20537.cljs$lang$applyTo = (function (arglist__20539){
var args__14302__auto__ = cljs.core.seq(arglist__20539);
return G__20537__delegate(args__14302__auto__);
});
G__20537.cljs$core$IFn$_invoke$arity$variadic = G__20537__delegate;
return G__20537;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.intro.render_intro = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("div",({"className": "container main-content"}),React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "col-sm-8"}),React.createElement("h1",null,"What, why, how?"),React.createElement("p",null,"This site is to help people make sense of the survival statistics about children's heart surgery published by\n     the National Congenital Heart Disease Audit (",(function (){var attrs20543 = prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20543))?sablono.interpreter.attributes(attrs20543):null),((cljs.core.map_QMARK_(attrs20543))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20543),"NCHDA"], null)));
})(),").  The ",(function (){var attrs20544 = prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital ",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20544))?sablono.interpreter.attributes(attrs20544):null),((cljs.core.map_QMARK_(attrs20544))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20544),"NCHDA"], null)));
})()," is managed by the\n      National Institute of Cardiovascular Outcomes Research (",(function (){var attrs20545 = prais2.core.href("https://www.ucl.ac.uk/nicor",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20545))?sablono.interpreter.attributes(attrs20545):null),((cljs.core.map_QMARK_(attrs20545))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NICOR"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20545),"NICOR"], null)));
})(),").")),(function (){var attrs20540 = (prais2.intro.key_points.cljs$core$IFn$_invoke$arity$0 ? prais2.intro.key_points.cljs$core$IFn$_invoke$arity$0() : prais2.intro.key_points.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20540))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"intro",cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-12"], null)], null),attrs20540], 0))):({"id": "intro", "className": "col-sm-12"})),((cljs.core.map_QMARK_(attrs20540))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((1),"<strong>What</strong> do we mean by survival statistics?",prais2.intro.section_1_content) : prais2.intro.section.call(null,(1),"<strong>What</strong> do we mean by survival statistics?",prais2.intro.section_1_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((2),"<strong>Why</strong> can data about survival be difficult to interpret?",prais2.intro.section_2_content) : prais2.intro.section.call(null,(2),"<strong>Why</strong> can data about survival be difficult to interpret?",prais2.intro.section_2_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((3),"<strong>How</strong> does the NHS monitor hospitals that do children\u2019s heart surgery?",prais2.intro.section_3_content) : prais2.intro.section.call(null,(3),"<strong>How</strong> does the NHS monitor hospitals that do children\u2019s heart surgery?",prais2.intro.section_3_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((4),"What this site cannot do",prais2.intro.section_4_content) : prais2.intro.section.call(null,(4),"What this site cannot do",prais2.intro.section_4_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((5),"What this site can do",prais2.intro.section_5_content) : prais2.intro.section.call(null,(5),"What this site can do",prais2.intro.section_5_content)))], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20540),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((1),"<strong>What</strong> do we mean by survival statistics?",prais2.intro.section_1_content) : prais2.intro.section.call(null,(1),"<strong>What</strong> do we mean by survival statistics?",prais2.intro.section_1_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((2),"<strong>Why</strong> can data about survival be difficult to interpret?",prais2.intro.section_2_content) : prais2.intro.section.call(null,(2),"<strong>Why</strong> can data about survival be difficult to interpret?",prais2.intro.section_2_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((3),"<strong>How</strong> does the NHS monitor hospitals that do children\u2019s heart surgery?",prais2.intro.section_3_content) : prais2.intro.section.call(null,(3),"<strong>How</strong> does the NHS monitor hospitals that do children\u2019s heart surgery?",prais2.intro.section_3_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((4),"What this site cannot do",prais2.intro.section_4_content) : prais2.intro.section.call(null,(4),"What this site cannot do",prais2.intro.section_4_content))),sablono.interpreter.interpret((prais2.intro.section.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.section.cljs$core$IFn$_invoke$arity$3((5),"What this site can do",prais2.intro.section_5_content) : prais2.intro.section.call(null,(5),"What this site can do",prais2.intro.section_5_content)))], null)));
})()));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.core.update_title("Key points"),prais2.core.monitor_react.cljs$core$IFn$_invoke$arity$2("INTRO>",false)], null)),"render-intro");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20546__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20546 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20547__i = 0, G__20547__a = new Array(arguments.length -  0);
while (G__20547__i < G__20547__a.length) {G__20547__a[G__20547__i] = arguments[G__20547__i + 0]; ++G__20547__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20547__a,0,null);
} 
return G__20546__delegate.call(this,args__14302__auto__);};
G__20546.cljs$lang$maxFixedArity = 0;
G__20546.cljs$lang$applyTo = (function (arglist__20548){
var args__14302__auto__ = cljs.core.seq(arglist__20548);
return G__20546__delegate(args__14302__auto__);
});
G__20546.cljs$core$IFn$_invoke$arity$variadic = G__20546__delegate;
return G__20546;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.intro.key_point = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (img_src,alt_text,text){
return React.createElement("li",({"className": "key-point row"}),(function (){var attrs20549 = text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs20549))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs20549], 0))):({"className": "col-sm-6"})),((cljs.core.map_QMARK_(attrs20549))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20549)], null)));
})(),(function (){var attrs20550 = prais2.core.isrc(img_src,cljs.core.cst$kw$alt,alt_text);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs20550))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img-responsive","col-sm-6"], null)], null),attrs20550], 0))):({"className": "img-responsive col-sm-6"})),((cljs.core.map_QMARK_(attrs20550))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20550)], null)));
})());
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"key-point");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20551__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20551 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20552__i = 0, G__20552__a = new Array(arguments.length -  0);
while (G__20552__i < G__20552__a.length) {G__20552__a[G__20552__i] = arguments[G__20552__i + 0]; ++G__20552__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20552__a,0,null);
} 
return G__20551__delegate.call(this,args__14302__auto__);};
G__20551.cljs$lang$maxFixedArity = 0;
G__20551.cljs$lang$applyTo = (function (arglist__20553){
var args__14302__auto__ = cljs.core.seq(arglist__20553);
return G__20551__delegate(args__14302__auto__);
});
G__20551.cljs$core$IFn$_invoke$arity$variadic = G__20551__delegate;
return G__20551;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
prais2.intro.kp_png = (function prais2$intro$kp_png(name){
return ["assets/keypoints/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".png"].join('');
});
/**
 * 
 */
prais2.intro.key_points = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("section",({"id": "key-points", "className": "well danger col-sm-8"}),React.createElement("h2",null,"Key points"),(function (){var attrs20556 = (function (){var G__20557 = prais2.intro.kp_png("kp1");
var G__20558 = "A group of hospitals with high survival rates";
var G__20559 = "The 30-day survival rate after children's heart surgery is very high for all hospitals in the UK and Ireland,\n   and is among the best in the world.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__20557,G__20558,G__20559) : prais2.intro.key_point.call(null,G__20557,G__20558,G__20559));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"ul",((cljs.core.map_QMARK_(attrs20556))?sablono.interpreter.attributes(attrs20556):null),((cljs.core.map_QMARK_(attrs20556))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__20560 = prais2.intro.kp_png("kp2");
var G__20561 = "No to direct comparison of rates";
var G__20562 = "A higher survival rate does not imply a better hospital.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__20560,G__20561,G__20562) : prais2.intro.key_point.call(null,G__20560,G__20561,G__20562));
})()),sablono.interpreter.interpret((function (){var G__20563 = prais2.intro.kp_png("kp3");
var G__20564 = "Data about the children treated determnes the predicted survival range";
var G__20565 = "A hospital's predicted range of survival, calculated by a formula, depends on the particular children treated\n   at that hospital. So a hospital treating children with more complex medical problems will have a lower predicted range.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__20563,G__20564,G__20565) : prais2.intro.key_point.call(null,G__20563,G__20564,G__20565));
})()),sablono.interpreter.interpret((function (){var G__20566 = prais2.intro.kp_png("kp4");
var G__20567 = "Then we compare survival rate to the predicted range.";
var G__20568 = "A hospital's survival rate should only be compared to its own predicted range. It is not valid to directly\n   compare survival rates between hospitals.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__20566,G__20567,G__20568) : prais2.intro.key_point.call(null,G__20566,G__20567,G__20568));
})())], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20556),sablono.interpreter.interpret((function (){var G__20569 = prais2.intro.kp_png("kp2");
var G__20570 = "No to direct comparison of rates";
var G__20571 = "A higher survival rate does not imply a better hospital.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__20569,G__20570,G__20571) : prais2.intro.key_point.call(null,G__20569,G__20570,G__20571));
})()),sablono.interpreter.interpret((function (){var G__20572 = prais2.intro.kp_png("kp3");
var G__20573 = "Data about the children treated determnes the predicted survival range";
var G__20574 = "A hospital's predicted range of survival, calculated by a formula, depends on the particular children treated\n   at that hospital. So a hospital treating children with more complex medical problems will have a lower predicted range.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__20572,G__20573,G__20574) : prais2.intro.key_point.call(null,G__20572,G__20573,G__20574));
})()),sablono.interpreter.interpret((function (){var G__20575 = prais2.intro.kp_png("kp4");
var G__20576 = "Then we compare survival rate to the predicted range.";
var G__20577 = "A hospital's survival rate should only be compared to its own predicted range. It is not valid to directly\n   compare survival rates between hospitals.";
return (prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3 ? prais2.intro.key_point.cljs$core$IFn$_invoke$arity$3(G__20575,G__20576,G__20577) : prais2.intro.key_point.call(null,G__20575,G__20576,G__20577));
})())], null)));
})());
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"key-points");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20578__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20578 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20579__i = 0, G__20579__a = new Array(arguments.length -  0);
while (G__20579__i < G__20579__a.length) {G__20579__a[G__20579__i] = arguments[G__20579__i + 0]; ++G__20579__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20579__a,0,null);
} 
return G__20578__delegate.call(this,args__14302__auto__);};
G__20578.cljs$lang$maxFixedArity = 0;
G__20578.cljs$lang$applyTo = (function (arglist__20580){
var args__14302__auto__ = cljs.core.seq(arglist__20580);
return G__20578__delegate(args__14302__auto__);
});
G__20578.cljs$core$IFn$_invoke$arity$variadic = G__20578__delegate;
return G__20578;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_1_content = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("section",({"className": "row"}),React.createElement("p",({"className": "col-sm-12"}),"The NHS monitors children\u2019s heart surgery in the UK by reviewing each hospital\u2019s 30-day survival\n   rate. The 30-day survival rate is the percentage of operations where the child survived to at least 30 days after\n   their heart surgery. Ireland also submits its data to the same audit body, ",(function (){var attrs20583 = prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20583))?sablono.interpreter.attributes(attrs20583):null),((cljs.core.map_QMARK_(attrs20583))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20583),"NCHDA"], null)));
})(),"."),React.createElement("p",({"className": "col-sm-12"}),"Approximately 3500 children under the age of 16 have heart surgery each year in the United Kingdom\n   and Republic of Ireland."));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"section-1-content");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20584__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20584 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20585__i = 0, G__20585__a = new Array(arguments.length -  0);
while (G__20585__i < G__20585__a.length) {G__20585__a[G__20585__i] = arguments[G__20585__i + 0]; ++G__20585__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20585__a,0,null);
} 
return G__20584__delegate.call(this,args__14302__auto__);};
G__20584.cljs$lang$maxFixedArity = 0;
G__20584.cljs$lang$applyTo = (function (arglist__20586){
var args__14302__auto__ = cljs.core.seq(arglist__20586);
return G__20584__delegate(args__14302__auto__);
});
G__20584.cljs$core$IFn$_invoke$arity$variadic = G__20584__delegate;
return G__20584;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_2_content = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("section",({"className": "row"}),React.createElement("p",({"className": "col-lg-12"}),"Heart disease covers a wide range of disorders, from relatively minor to more severe conditions. Some hospitals\n    take on more complicated conditions and tend to operate on children with a lower chance of survival. Also, every\n    child is unique and may respond differently to treatment (surgery, drugs, postoperative care)."),React.createElement("p",({"className": "col-lg-12"}),"We therefore would not expect all hospitals to have the same survival rate: we should take into account how ill\n    the children were that the hospitals treated. In other words, if one hospital has a higher survival rate than\n    another hospital this is not necessarily evidence that one hospital is better than the other \u2013 it could\n    indicate that the second hospital treated children with more severe problems. "));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"section-2-content");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20589__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20589 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20590__i = 0, G__20590__a = new Array(arguments.length -  0);
while (G__20590__i < G__20590__a.length) {G__20590__a[G__20590__i] = arguments[G__20590__i + 0]; ++G__20590__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20590__a,0,null);
} 
return G__20589__delegate.call(this,args__14302__auto__);};
G__20589.cljs$lang$maxFixedArity = 0;
G__20589.cljs$lang$applyTo = (function (arglist__20591){
var args__14302__auto__ = cljs.core.seq(arglist__20591);
return G__20589__delegate(args__14302__auto__);
});
G__20589.cljs$core$IFn$_invoke$arity$variadic = G__20589__delegate;
return G__20589;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_3_content = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("section",({"className": "row"}),React.createElement("div",({"className": "col-lg-12"}),React.createElement("p",null,"When reviewing the 30-day survival rate for each hospital, the NHS takes into account how ill the children were\n    that each hospital treated. This is a fairer way of looking at survival rate data."),React.createElement("p",null,"Risk factors that affect a child\u2019s chance of survival include:"),React.createElement("ul",null,React.createElement("li",null,"the age and weight of the child (other things being equal, the bigger and stronger a child is, the safer the\n      surgery is); "),React.createElement("li",null,"what problem in the heart the surgery is trying to fix (some hearts have more complex problems than others); "),React.createElement("li",null,"other health problems a child might have (e.g. a genetic syndrome); "),React.createElement("li",null,"the complexity of the surgical procedure.\u00A0 ")),React.createElement("p",null,"Knowing these factors for each child allows us to predict the percentage of children within a group that will\n    survive, even though we cannot predict exactly whether individual children will survive."),React.createElement("p",null,"The national audit body (",(function (){var attrs20602 = prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20602))?sablono.interpreter.attributes(attrs20602):null),((cljs.core.map_QMARK_(attrs20602))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NCHDA"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20602),"NCHDA"], null)));
})(),")\n    uses a statistical formula to combine data on these risk factors for all the children a hospital has treated over\n    the previous three years to give a predicted range for the overall proportion of survivors for that specific\n    hospital and time period. The formula is also used to calculate an extended predicted range for survival for each\n    hospital. The audit body then compares the survival rate achieved by a hospital with its predicted and extended\n    predicted range. Our ",(function (){var attrs20603 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("data/animation");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20603))?sablono.interpreter.attributes(attrs20603):null),((cljs.core.map_QMARK_(attrs20603))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-video-camera"}))," two minute video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20603),React.createElement("i",({"className": "fa fa-video-camera"}))," two minute video"], null)));
})()," explains how\n    we present these comparisons in this site."),React.createElement("p",null,"If you'd like to know how the predicted range is actually calculated, you can watch our\n    ",(function (){var attrs20608 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20608))?sablono.interpreter.attributes(attrs20608):null),((cljs.core.map_QMARK_(attrs20608))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-video-camera"}))," second short video"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20608),React.createElement("i",({"className": "fa fa-video-camera"}))," second short video"], null)));
})()," in the ",(function (){var attrs20613 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20613))?sablono.interpreter.attributes(attrs20613):null),((cljs.core.map_QMARK_(attrs20613))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20613),"Everything Else"], null)));
})()," section."),React.createElement("p",null,"If a hospital\u2019s survival rate is within its predicted range, its results are in line with what we expect.\n    For more information about how the NHS monitors survival rates see the  ",(function (){var attrs20614 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20614))?sablono.interpreter.attributes(attrs20614):null),((cljs.core.map_QMARK_(attrs20614))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Everything Else"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20614),"Everything Else"], null)));
})()," section."),React.createElement("div",({"className": "bg-danger"}),React.createElement("p",null,"IMPORTANT! The predicted range depends on the types of patients treated at that hospital over that time\n      period \u2013 so each hospital will have a different predicted range and its predicted range will vary from year to\n      year."),React.createElement("p",null,"That is why we only compare a hospital\u2019s survival rate to its predicted range (from the statistical formula)\n      and ",React.createElement("strong",null,"not")," to survival rates at other hospitals."))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"section-3-content");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20615__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20615 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20616__i = 0, G__20616__a = new Array(arguments.length -  0);
while (G__20616__i < G__20616__a.length) {G__20616__a[G__20616__i] = arguments[G__20616__i + 0]; ++G__20616__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20616__a,0,null);
} 
return G__20615__delegate.call(this,args__14302__auto__);};
G__20615.cljs$lang$maxFixedArity = 0;
G__20615.cljs$lang$applyTo = (function (arglist__20617){
var args__14302__auto__ = cljs.core.seq(arglist__20617);
return G__20615__delegate(args__14302__auto__);
});
G__20615.cljs$core$IFn$_invoke$arity$variadic = G__20615__delegate;
return G__20615;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_4_content = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("section",({"className": "row"}),React.createElement("div",({"className": "col-lg-12"}),React.createElement("p",null,React.createElement("b",null,"This site cannot help parents make decisions about their child\u2019s treatment.")," If you are concerned about your child\u2019s treatment plan ",React.createElement("b",null,"please speak with your child\u2019s cardiologist or surgeon"),". You can also access the support available from national charities such as the ",(function (){var attrs20622 = prais2.core.href("http://www.chfed.org.uk/",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20622))?sablono.interpreter.attributes(attrs20622):null),((cljs.core.map_QMARK_(attrs20622))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Children\u2019s Heart Federation"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20622),"Children\u2019s Heart Federation"], null)));
})(),", ",(function (){var attrs20623 = prais2.core.href("http://www.lhm.org.uk/",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20623))?sablono.interpreter.attributes(attrs20623):null),((cljs.core.map_QMARK_(attrs20623))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Little Hearts Matter"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20623),"Little Hearts Matter"], null)));
})()," or local charities for your specialist children\u2019s hospital (see ",(function (){var attrs20624 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/3/2");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20624))?sablono.interpreter.attributes(attrs20624):null),((cljs.core.map_QMARK_(attrs20624))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["further charity resources"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20624),"further charity resources"], null)));
})(),"). These guides on ",(function (){var attrs20625 = prais2.core.href("http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20625))?sablono.interpreter.attributes(attrs20625):null),((cljs.core.map_QMARK_(attrs20625))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["speaking to your child\u2019s surgeon"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20625),"speaking to your child\u2019s surgeon"], null)));
})()," or ",(function (){var attrs20626 = prais2.core.href("http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20626))?sablono.interpreter.attributes(attrs20626):null),((cljs.core.map_QMARK_(attrs20626))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["seeking a second opinion"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20626),"seeking a second opinion"], null)));
})(),", written by the Children\u2019s Heart Federation, might also be helpful."),React.createElement("p",null,"We know that there is much more to children\u2019s heart surgery than survival to 30 days after surgery,\n     such as much longer term survival and quality of life after surgery. Although this information is not routinely\n     available at the moment, we are actively researching how to collect, interpret and publish this data.\n     (See ",(function (){var attrs20627 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/2/3");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20627))?sablono.interpreter.attributes(attrs20627):null),((cljs.core.map_QMARK_(attrs20627))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What about longer term survival and quality of life?"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20627),"What about longer term survival and quality of life?"], null)));
})(),".) ")));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"section-4-content");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20628__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20628 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20629__i = 0, G__20629__a = new Array(arguments.length -  0);
while (G__20629__i < G__20629__a.length) {G__20629__a[G__20629__i] = arguments[G__20629__i + 0]; ++G__20629__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20629__a,0,null);
} 
return G__20628__delegate.call(this,args__14302__auto__);};
G__20628.cljs$lang$maxFixedArity = 0;
G__20628.cljs$lang$applyTo = (function (arglist__20630){
var args__14302__auto__ = cljs.core.seq(arglist__20630);
return G__20628__delegate(args__14302__auto__);
});
G__20628.cljs$core$IFn$_invoke$arity$variadic = G__20628__delegate;
return G__20628;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.intro.section_5_content = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("section",({"className": "row"}),React.createElement("div",({"className": "col-lg-12"}),React.createElement("p",null,"This site can help you interpret currently published survival data on children\u2019s heart surgery and explore\n    recent survival statistics for each hospital.")));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"section-5-content");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20633__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20633 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20634__i = 0, G__20634__a = new Array(arguments.length -  0);
while (G__20634__i < G__20634__a.length) {G__20634__a[G__20634__i] = arguments[G__20634__i + 0]; ++G__20634__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20634__a,0,null);
} 
return G__20633__delegate.call(this,args__14302__auto__);};
G__20633.cljs$lang$maxFixedArity = 0;
G__20633.cljs$lang$applyTo = (function (arglist__20635){
var args__14302__auto__ = cljs.core.seq(arglist__20635);
return G__20633__delegate(args__14302__auto__);
});
G__20633.cljs$core$IFn$_invoke$arity$variadic = G__20633__delegate;
return G__20633;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
