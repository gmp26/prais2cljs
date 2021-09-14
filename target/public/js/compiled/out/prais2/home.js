// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.home');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('prais2.utils');
/**
 * 
 */
prais2.home.what_why = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",{"className": "col-sm-4"},React.createElement("div",{"className": "home-nav well intro"},(function (){var attrs32978 = prais2.core.href.call(null,"intro");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs32978))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null)], null),attrs32978)):{"className": "active"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32978))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",{"className": "fa fa-question big"}),React.createElement("div",{"className": "chevron"},React.createElement("i",{"className": "fa fa-chevron-right"})),React.createElement("div",{"dangerouslySetInnerHTML": {"__html": "What, why, how?&nbsp;&nbsp;&nbsp;&nbsp;"}, "className": "title"})], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32978),React.createElement("i",{"className": "fa fa-question big"}),React.createElement("div",{"className": "chevron"},React.createElement("i",{"className": "fa fa-chevron-right"})),React.createElement("div",{"dangerouslySetInnerHTML": {"__html": "What, why, how?&nbsp;&nbsp;&nbsp;&nbsp;"}, "className": "title"})], null))));
})(),React.createElement("p",null,React.createElement("strong",null,"What")," do we mean by survival rates?"),React.createElement("p",null,React.createElement("strong",null,"Why")," are survival rates after children\u2019s heart surgery hard to interpret?"),React.createElement("p",null,React.createElement("strong",null,"How")," does the NHS monitor them?"),React.createElement("p",null,React.createElement("strong",null,"What")," this site can and cannot do.")));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"what-why");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__32999__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__32999 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__33000__i = 0, G__33000__a = new Array(arguments.length -  0);
while (G__33000__i < G__33000__a.length) {G__33000__a[G__33000__i] = arguments[G__33000__i + 0]; ++G__33000__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__33000__a,0);
} 
return G__32999__delegate.call(this,args__27116__auto__);};
G__32999.cljs$lang$maxFixedArity = 0;
G__32999.cljs$lang$applyTo = (function (arglist__33001){
var args__27116__auto__ = cljs.core.seq(arglist__33001);
return G__32999__delegate(args__27116__auto__);
});
G__32999.cljs$core$IFn$_invoke$arity$variadic = G__32999__delegate;
return G__32999;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.home.data = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",{"className": "col-sm-4"},React.createElement("div",{"className": "home-nav well data"},(function (){var attrs33002 = prais2.core.href.call(null,"data/map");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs33002))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null)], null),attrs33002)):{"className": "active"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs33002))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",{"className": "fa fa-table big"}),React.createElement("div",{"className": "chevron"},React.createElement("i",{"className": "fa fa-chevron-right"})),React.createElement("div",{"className": "title"},"Explore the data")], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33002),React.createElement("i",{"className": "fa fa-table big"}),React.createElement("div",{"className": "chevron"},React.createElement("i",{"className": "fa fa-chevron-right"})),React.createElement("div",{"className": "title"},"Explore the data")], null))));
})(),React.createElement("p",null,React.createElement("b",null,"Explore published survival statistics by:")),React.createElement("p",null,"browsing hospitals individually;"),React.createElement("p",null,"viewing a one page summary of all hospitals;"),React.createElement("p",null,"watching our 2 minute video on how to interpret the results.")));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"data");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__33023__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__33023 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__33024__i = 0, G__33024__a = new Array(arguments.length -  0);
while (G__33024__i < G__33024__a.length) {G__33024__a[G__33024__i] = arguments[G__33024__i + 0]; ++G__33024__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__33024__a,0);
} 
return G__33023__delegate.call(this,args__27116__auto__);};
G__33023.cljs$lang$maxFixedArity = 0;
G__33023.cljs$lang$applyTo = (function (arglist__33025){
var args__27116__auto__ = cljs.core.seq(arglist__33025);
return G__33023__delegate(args__27116__auto__);
});
G__33023.cljs$core$IFn$_invoke$arity$variadic = G__33023__delegate;
return G__33023;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.home.everything_else = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",{"className": "col-sm-4"},React.createElement("div",{"className": "home-nav well faqs"},(function (){var attrs33026 = prais2.core.href.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs33026))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null)], null),attrs33026)):{"className": "active"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs33026))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",{"className": "fa fa-info big"}),React.createElement("div",{"className": "chevron"},React.createElement("i",{"className": "fa fa-chevron-right"})),React.createElement("div",{"dangerouslySetInnerHTML": {"__html": "Everything else&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}, "className": "title"})], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33026),React.createElement("i",{"className": "fa fa-info big"}),React.createElement("div",{"className": "chevron"},React.createElement("i",{"className": "fa fa-chevron-right"})),React.createElement("div",{"dangerouslySetInnerHTML": {"__html": "Everything else&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}, "className": "title"})], null))));
})(),React.createElement("p",null,"What happens if the data raises concerns?"),React.createElement("p",null,"More detail about how survival statistics are monitored, including an explanatory video."),React.createElement("p",null,"Limitations of this data."),React.createElement("p",null,"Information for families.")));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"everything-else");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__33047__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__33047 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__33048__i = 0, G__33048__a = new Array(arguments.length -  0);
while (G__33048__i < G__33048__a.length) {G__33048__a[G__33048__i] = arguments[G__33048__i + 0]; ++G__33048__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__33048__a,0);
} 
return G__33047__delegate.call(this,args__27116__auto__);};
G__33047.cljs$lang$maxFixedArity = 0;
G__33047.cljs$lang$applyTo = (function (arglist__33049){
var args__27116__auto__ = cljs.core.seq(arglist__33049);
return G__33047__delegate(args__27116__auto__);
});
G__33047.cljs$core$IFn$_invoke$arity$variadic = G__33047__delegate;
return G__33047;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.home.render_home = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",{"className": "main-content"},React.createElement("div",{"className": "container"},React.createElement("div",{"className": "jumbotron home row"},React.createElement("section",{"className": "about col-xs-offset-1 col-sm-10"},React.createElement("p",null,"This site is to help people make sense of published survival data about children\u2019s heart surgery in the\n      UK and Ireland. "),React.createElement("div",null,React.createElement("h1",{"style": {"display": "none"}},"Children's Heart Surgery Info"),React.createElement("p",null,"Our website will help you:"),React.createElement("ul",null,React.createElement("li",null,"understand how the NHS monitors children\u2019s heart surgery"),React.createElement("li",null,"explore what survival rates can and can\u2019t tell you"),React.createElement("li",null,"explore published data for hospitals in the UK and Ireland")),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"show-nicor","show-nicor",-79329955).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-responsive.col-sm-2","img.img-responsive.col-sm-2",-1587578005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"assets/nicor.png"], null)], null)], null):null))))),(function (){var attrs33058 = prais2.home.what_why.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33058))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs33058)):{"className": "row"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs33058))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.home.data.call(null)),sablono.interpreter.interpret.call(null,prais2.home.everything_else.call(null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33058),sablono.interpreter.interpret.call(null,prais2.home.data.call(null)),sablono.interpreter.interpret.call(null,prais2.home.everything_else.call(null))], null))));
})()));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.update_title.call(null,"Home page"),prais2.core.update_description.call(null,"Makes sense of published survival data about children\u2019s heart surgery in the UK and Ireland")], null)),"render-home");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__33059__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__33059 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__33060__i = 0, G__33060__a = new Array(arguments.length -  0);
while (G__33060__i < G__33060__a.length) {G__33060__a[G__33060__i] = arguments[G__33060__i + 0]; ++G__33060__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__33060__a,0);
} 
return G__33059__delegate.call(this,args__27116__auto__);};
G__33059.cljs$lang$maxFixedArity = 0;
G__33059.cljs$lang$applyTo = (function (arglist__33061){
var args__27116__auto__ = cljs.core.seq(arglist__33061);
return G__33059__delegate(args__27116__auto__);
});
G__33059.cljs$core$IFn$_invoke$arity$variadic = G__33059__delegate;
return G__33059;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=home.js.map?rel=1629049570209