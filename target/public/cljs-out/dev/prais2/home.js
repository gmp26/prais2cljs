// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.home');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
/**
 * 
 */
prais2.home.what_why = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",({"className": "col-sm-4"}),React.createElement("div",({"className": "home-nav well intro"}),(function (){var attrs21491 = prais2.core.href.call(null,"intro");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21491))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null)], null),attrs21491)):({"className": "active"})),((cljs.core.map_QMARK_.call(null,attrs21491))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-question big"})),React.createElement("div",({"className": "chevron"}),React.createElement("i",({"className": "fa fa-chevron-right"}))),React.createElement("div",({"dangerouslySetInnerHTML": ({"__html": "What, why, how?&nbsp;&nbsp;&nbsp;&nbsp;"}), "className": "title"}))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21491),React.createElement("i",({"className": "fa fa-question big"})),React.createElement("div",({"className": "chevron"}),React.createElement("i",({"className": "fa fa-chevron-right"}))),React.createElement("div",({"dangerouslySetInnerHTML": ({"__html": "What, why, how?&nbsp;&nbsp;&nbsp;&nbsp;"}), "className": "title"}))], null)));
})(),React.createElement("p",null,React.createElement("strong",null,"What")," do we mean by survival rates?"),React.createElement("p",null,React.createElement("strong",null,"Why")," are survival rates after children\u2019s heart surgery hard to interpret?"),React.createElement("p",null,React.createElement("strong",null,"How")," does the NHS monitor them?"),React.createElement("p",null,React.createElement("strong",null,"What")," this site can and cannot do.")));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"what-why");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21512__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21512 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21513__i = 0, G__21513__a = new Array(arguments.length -  0);
while (G__21513__i < G__21513__a.length) {G__21513__a[G__21513__i] = arguments[G__21513__i + 0]; ++G__21513__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21513__a,0,null);
} 
return G__21512__delegate.call(this,args__16261__auto__);};
G__21512.cljs$lang$maxFixedArity = 0;
G__21512.cljs$lang$applyTo = (function (arglist__21514){
var args__16261__auto__ = cljs.core.seq(arglist__21514);
return G__21512__delegate(args__16261__auto__);
});
G__21512.cljs$core$IFn$_invoke$arity$variadic = G__21512__delegate;
return G__21512;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.home.data = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",({"className": "col-sm-4"}),React.createElement("div",({"className": "home-nav well data"}),(function (){var attrs21515 = prais2.core.href.call(null,"data/map");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21515))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null)], null),attrs21515)):({"className": "active"})),((cljs.core.map_QMARK_.call(null,attrs21515))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-table big"})),React.createElement("div",({"className": "chevron"}),React.createElement("i",({"className": "fa fa-chevron-right"}))),React.createElement("div",({"className": "title"}),"Explore the data")], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21515),React.createElement("i",({"className": "fa fa-table big"})),React.createElement("div",({"className": "chevron"}),React.createElement("i",({"className": "fa fa-chevron-right"}))),React.createElement("div",({"className": "title"}),"Explore the data")], null)));
})(),React.createElement("p",null,React.createElement("b",null,"Explore published survival statistics by:")),React.createElement("p",null,"browsing hospitals individually;"),React.createElement("p",null,"viewing a one page summary of all hospitals;"),React.createElement("p",null,"watching our 2 minute video on how to interpret the results.")));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"data");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21536__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21536 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21537__i = 0, G__21537__a = new Array(arguments.length -  0);
while (G__21537__i < G__21537__a.length) {G__21537__a[G__21537__i] = arguments[G__21537__i + 0]; ++G__21537__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21537__a,0,null);
} 
return G__21536__delegate.call(this,args__16261__auto__);};
G__21536.cljs$lang$maxFixedArity = 0;
G__21536.cljs$lang$applyTo = (function (arglist__21538){
var args__16261__auto__ = cljs.core.seq(arglist__21538);
return G__21536__delegate(args__16261__auto__);
});
G__21536.cljs$core$IFn$_invoke$arity$variadic = G__21536__delegate;
return G__21536;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.home.everything_else = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",({"className": "col-sm-4"}),React.createElement("div",({"className": "home-nav well faqs"}),(function (){var attrs21539 = prais2.core.href.call(null,"faqs");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21539))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null)], null),attrs21539)):({"className": "active"})),((cljs.core.map_QMARK_.call(null,attrs21539))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("i",({"className": "fa fa-info big"})),React.createElement("div",({"className": "chevron"}),React.createElement("i",({"className": "fa fa-chevron-right"}))),React.createElement("div",({"dangerouslySetInnerHTML": ({"__html": "Everything else&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}), "className": "title"}))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21539),React.createElement("i",({"className": "fa fa-info big"})),React.createElement("div",({"className": "chevron"}),React.createElement("i",({"className": "fa fa-chevron-right"}))),React.createElement("div",({"dangerouslySetInnerHTML": ({"__html": "Everything else&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}), "className": "title"}))], null)));
})(),React.createElement("p",null,"What happens if the data raises concerns?"),React.createElement("p",null,"More detail about how survival statistics are monitored, including an explanatory video."),React.createElement("p",null,"Limitations of this data."),React.createElement("p",null,"Information for families.")));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"everything-else");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21560__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21560 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21561__i = 0, G__21561__a = new Array(arguments.length -  0);
while (G__21561__i < G__21561__a.length) {G__21561__a[G__21561__i] = arguments[G__21561__i + 0]; ++G__21561__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21561__a,0,null);
} 
return G__21560__delegate.call(this,args__16261__auto__);};
G__21560.cljs$lang$maxFixedArity = 0;
G__21560.cljs$lang$applyTo = (function (arglist__21562){
var args__16261__auto__ = cljs.core.seq(arglist__21562);
return G__21560__delegate(args__16261__auto__);
});
G__21560.cljs$core$IFn$_invoke$arity$variadic = G__21560__delegate;
return G__21560;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.home.render_home = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",({"className": "main-content"}),React.createElement("div",({"className": "container"}),React.createElement("div",({"className": "jumbotron home row"}),React.createElement("section",({"className": "about col-xs-offset-1 col-sm-10"}),React.createElement("p",null,"This site is to help people make sense of published survival data about children\u2019s heart surgery in the\n      UK and Ireland. "),React.createElement("div",null,React.createElement("h1",({"style": ({"display": "none"})}),"Children's Heart Surgery Info"),React.createElement("p",null,"Our website will help you:"),React.createElement("ul",null,React.createElement("li",null,"understand how the NHS monitors children\u2019s heart surgery"),React.createElement("li",null,"explore what survival rates can and can\u2019t tell you"),React.createElement("li",null,"explore published data for hospitals in the UK and Ireland")),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"show-nicor","show-nicor",-79329955).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-responsive.col-sm-2","img.img-responsive.col-sm-2",-1587578005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"assets/nicor.png"], null)], null)], null):null))))),(function (){var attrs21563 = prais2.home.what_why.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21563))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs21563)):({"className": "row"})),((cljs.core.map_QMARK_.call(null,attrs21563))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.home.data.call(null)),sablono.interpreter.interpret.call(null,prais2.home.everything_else.call(null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21563),sablono.interpreter.interpret.call(null,prais2.home.data.call(null)),sablono.interpreter.interpret.call(null,prais2.home.everything_else.call(null))], null)));
})()));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,prais2.core.update_title.call(null,"Home page")], null)),"render-home");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21572__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21572 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21573__i = 0, G__21573__a = new Array(arguments.length -  0);
while (G__21573__i < G__21573__a.length) {G__21573__a[G__21573__i] = arguments[G__21573__i + 0]; ++G__21573__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21573__a,0,null);
} 
return G__21572__delegate.call(this,args__16261__auto__);};
G__21572.cljs$lang$maxFixedArity = 0;
G__21572.cljs$lang$applyTo = (function (arglist__21574){
var args__16261__auto__ = cljs.core.seq(arglist__21574);
return G__21572__delegate(args__16261__auto__);
});
G__21572.cljs$core$IFn$_invoke$arity$variadic = G__21572__delegate;
return G__21572;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=home.js.map
