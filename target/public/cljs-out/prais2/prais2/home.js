// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('prais2.home');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('prais2.core');
/**
 * 
 */
prais2.home.what_why = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("div",({"className": "col-sm-4"}),React.createElement("div",({"className": "home-nav well intro"}),(function (){var attrs20281 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("intro");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20281))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null)], null),attrs20281], 0))):({"className": "active"})),((cljs.core.map_QMARK_(attrs20281))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-question big"})),React.createElement("div",({"className": "chevron"}),React.createElement("i",({"className": "fa fa-chevron-right"}))),React.createElement("div",({"dangerouslySetInnerHTML": ({"__html": "What, why, how?&nbsp;&nbsp;&nbsp;&nbsp;"}), "className": "title"}))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20281),React.createElement("i",({"className": "fa fa-question big"})),React.createElement("div",({"className": "chevron"}),React.createElement("i",({"className": "fa fa-chevron-right"}))),React.createElement("div",({"dangerouslySetInnerHTML": ({"__html": "What, why, how?&nbsp;&nbsp;&nbsp;&nbsp;"}), "className": "title"}))], null)));
})(),React.createElement("p",null,React.createElement("strong",null,"What")," do we mean by survival rates?"),React.createElement("p",null,React.createElement("strong",null,"Why")," are survival rates after children\u2019s heart surgery hard to interpret?"),React.createElement("p",null,React.createElement("strong",null,"How")," does the NHS monitor them?"),React.createElement("p",null,React.createElement("strong",null,"What")," this site can and cannot do.")));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"what-why");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20302__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20302 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20303__i = 0, G__20303__a = new Array(arguments.length -  0);
while (G__20303__i < G__20303__a.length) {G__20303__a[G__20303__i] = arguments[G__20303__i + 0]; ++G__20303__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20303__a,0,null);
} 
return G__20302__delegate.call(this,args__14302__auto__);};
G__20302.cljs$lang$maxFixedArity = 0;
G__20302.cljs$lang$applyTo = (function (arglist__20304){
var args__14302__auto__ = cljs.core.seq(arglist__20304);
return G__20302__delegate(args__14302__auto__);
});
G__20302.cljs$core$IFn$_invoke$arity$variadic = G__20302__delegate;
return G__20302;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.home.data = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("div",({"className": "col-sm-4"}),React.createElement("div",({"className": "home-nav well data"}),(function (){var attrs20305 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("data/map");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20305))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null)], null),attrs20305], 0))):({"className": "active"})),((cljs.core.map_QMARK_(attrs20305))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-table big"})),React.createElement("div",({"className": "chevron"}),React.createElement("i",({"className": "fa fa-chevron-right"}))),React.createElement("div",({"className": "title"}),"Explore the data")], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20305),React.createElement("i",({"className": "fa fa-table big"})),React.createElement("div",({"className": "chevron"}),React.createElement("i",({"className": "fa fa-chevron-right"}))),React.createElement("div",({"className": "title"}),"Explore the data")], null)));
})(),React.createElement("p",null,React.createElement("b",null,"Explore published survival statistics by:")),React.createElement("p",null,"browsing hospitals individually;"),React.createElement("p",null,"viewing a one page summary of all hospitals;"),React.createElement("p",null,"watching our 2 minute video on how to interpret the results.")));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"data");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20326__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20326 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20327__i = 0, G__20327__a = new Array(arguments.length -  0);
while (G__20327__i < G__20327__a.length) {G__20327__a[G__20327__i] = arguments[G__20327__i + 0]; ++G__20327__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20327__a,0,null);
} 
return G__20326__delegate.call(this,args__14302__auto__);};
G__20326.cljs$lang$maxFixedArity = 0;
G__20326.cljs$lang$applyTo = (function (arglist__20328){
var args__14302__auto__ = cljs.core.seq(arglist__20328);
return G__20326__delegate(args__14302__auto__);
});
G__20326.cljs$core$IFn$_invoke$arity$variadic = G__20326__delegate;
return G__20326;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.home.everything_else = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("div",({"className": "col-sm-4"}),React.createElement("div",({"className": "home-nav well faqs"}),(function (){var attrs20329 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20329))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null)], null),attrs20329], 0))):({"className": "active"})),((cljs.core.map_QMARK_(attrs20329))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-info big"})),React.createElement("div",({"className": "chevron"}),React.createElement("i",({"className": "fa fa-chevron-right"}))),React.createElement("div",({"dangerouslySetInnerHTML": ({"__html": "Everything else&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}), "className": "title"}))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20329),React.createElement("i",({"className": "fa fa-info big"})),React.createElement("div",({"className": "chevron"}),React.createElement("i",({"className": "fa fa-chevron-right"}))),React.createElement("div",({"dangerouslySetInnerHTML": ({"__html": "Everything else&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}), "className": "title"}))], null)));
})(),React.createElement("p",null,"What happens if the data raises concerns?"),React.createElement("p",null,"More detail about how survival statistics are monitored, including an explanatory video."),React.createElement("p",null,"Limitations of this data."),React.createElement("p",null,"Information for families.")));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"everything-else");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20350__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20350 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20351__i = 0, G__20351__a = new Array(arguments.length -  0);
while (G__20351__i < G__20351__a.length) {G__20351__a[G__20351__i] = arguments[G__20351__i + 0]; ++G__20351__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20351__a,0,null);
} 
return G__20350__delegate.call(this,args__14302__auto__);};
G__20350.cljs$lang$maxFixedArity = 0;
G__20350.cljs$lang$applyTo = (function (arglist__20352){
var args__14302__auto__ = cljs.core.seq(arglist__20352);
return G__20350__delegate(args__14302__auto__);
});
G__20350.cljs$core$IFn$_invoke$arity$variadic = G__20350__delegate;
return G__20350;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.home.render_home = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("div",({"className": "main-content"}),React.createElement("div",({"className": "container"}),React.createElement("div",({"className": "jumbotron home row"}),React.createElement("section",({"className": "about col-xs-offset-1 col-sm-10"}),React.createElement("p",null,"This site is to help people make sense of published survival data about children\u2019s heart surgery in the\n      UK and Ireland. "),React.createElement("div",null,React.createElement("h1",({"style": ({"display": "none"})}),"Children's Heart Surgery Info"),React.createElement("p",null,"Our website will help you:"),React.createElement("ul",null,React.createElement("li",null,"understand how the NHS monitors children\u2019s heart surgery"),React.createElement("li",null,"explore what survival rates can and can\u2019t tell you"),React.createElement("li",null,"explore published data for hospitals in the UK and Ireland")),sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$show_DASH_nicor.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report",cljs.core.cst$kw$target,"_blank"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$img_DASH_responsive$col_DASH_sm_DASH_2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"assets/nicor.png"], null)], null)], null):null))))),(function (){var attrs20353 = (prais2.home.what_why.cljs$core$IFn$_invoke$arity$0 ? prais2.home.what_why.cljs$core$IFn$_invoke$arity$0() : prais2.home.what_why.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20353))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs20353], 0))):({"className": "row"})),((cljs.core.map_QMARK_(attrs20353))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((prais2.home.data.cljs$core$IFn$_invoke$arity$0 ? prais2.home.data.cljs$core$IFn$_invoke$arity$0() : prais2.home.data.call(null))),sablono.interpreter.interpret((prais2.home.everything_else.cljs$core$IFn$_invoke$arity$0 ? prais2.home.everything_else.cljs$core$IFn$_invoke$arity$0() : prais2.home.everything_else.call(null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20353),sablono.interpreter.interpret((prais2.home.data.cljs$core$IFn$_invoke$arity$0 ? prais2.home.data.cljs$core$IFn$_invoke$arity$0() : prais2.home.data.call(null))),sablono.interpreter.interpret((prais2.home.everything_else.cljs$core$IFn$_invoke$arity$0 ? prais2.home.everything_else.cljs$core$IFn$_invoke$arity$0() : prais2.home.everything_else.call(null)))], null)));
})()));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.update_title("Home page")], null)),"render-home");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20362__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20362 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20363__i = 0, G__20363__a = new Array(arguments.length -  0);
while (G__20363__i < G__20363__a.length) {G__20363__a[G__20363__i] = arguments[G__20363__i + 0]; ++G__20363__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20363__a,0,null);
} 
return G__20362__delegate.call(this,args__14302__auto__);};
G__20362.cljs$lang$maxFixedArity = 0;
G__20362.cljs$lang$applyTo = (function (arglist__20364){
var args__14302__auto__ = cljs.core.seq(arglist__20364);
return G__20362__delegate(args__14302__auto__);
});
G__20362.cljs$core$IFn$_invoke$arity$variadic = G__20362__delegate;
return G__20362;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
