// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('prais2.home');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('prais2.utils');
/**
 * 
 */
prais2.home.what_why = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__16575 = "div";
var G__16576 = {"className": "col-sm-4"};
var G__16577 = (function (){var G__16578 = "div";
var G__16579 = {"className": "home-nav well intro"};
var G__16580 = (function (){var attrs16554 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("intro");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16554))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null)], null),attrs16554], 0))):{"className": "active"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16554))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16585 = "i";
var G__16586 = {"className": "fa fa-question big"};
return React.createElement(G__16585,G__16586);
})(),(function (){var G__16587 = "div";
var G__16588 = {"className": "chevron"};
var G__16589 = (function (){var G__16590 = "i";
var G__16591 = {"className": "fa fa-chevron-right"};
return React.createElement(G__16590,G__16591);
})();
return React.createElement(G__16587,G__16588,G__16589);
})(),(function (){var G__16592 = "div";
var G__16593 = {"dangerouslySetInnerHTML": {"__html": "What, why, how?&nbsp;&nbsp;&nbsp;&nbsp;"}, "className": "title"};
return React.createElement(G__16592,G__16593);
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16554),(function (){var G__16594 = "i";
var G__16595 = {"className": "fa fa-question big"};
return React.createElement(G__16594,G__16595);
})(),(function (){var G__16596 = "div";
var G__16597 = {"className": "chevron"};
var G__16598 = (function (){var G__16599 = "i";
var G__16600 = {"className": "fa fa-chevron-right"};
return React.createElement(G__16599,G__16600);
})();
return React.createElement(G__16596,G__16597,G__16598);
})(),(function (){var G__16601 = "div";
var G__16602 = {"dangerouslySetInnerHTML": {"__html": "What, why, how?&nbsp;&nbsp;&nbsp;&nbsp;"}, "className": "title"};
return React.createElement(G__16601,G__16602);
})()], null))));
})();
var G__16581 = (function (){var G__16603 = "p";
var G__16604 = null;
var G__16605 = React.createElement("strong",null,"What");
var G__16606 = " do we mean by survival rates?";
return React.createElement(G__16603,G__16604,G__16605,G__16606);
})();
var G__16582 = (function (){var G__16607 = "p";
var G__16608 = null;
var G__16609 = React.createElement("strong",null,"Why");
var G__16610 = " are survival rates after children\u2019s heart surgery hard to interpret?";
return React.createElement(G__16607,G__16608,G__16609,G__16610);
})();
var G__16583 = (function (){var G__16611 = "p";
var G__16612 = null;
var G__16613 = React.createElement("strong",null,"How");
var G__16614 = " does the NHS monitor them?";
return React.createElement(G__16611,G__16612,G__16613,G__16614);
})();
var G__16584 = (function (){var G__16615 = "p";
var G__16616 = null;
var G__16617 = React.createElement("strong",null,"What");
var G__16618 = " this site can and cannot do.";
return React.createElement(G__16615,G__16616,G__16617,G__16618);
})();
return React.createElement(G__16578,G__16579,G__16580,G__16581,G__16582,G__16583,G__16584);
})();
return React.createElement(G__16575,G__16576,G__16577);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"what-why");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16619__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16619 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16620__i = 0, G__16620__a = new Array(arguments.length -  0);
while (G__16620__i < G__16620__a.length) {G__16620__a[G__16620__i] = arguments[G__16620__i + 0]; ++G__16620__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16620__a,0);
} 
return G__16619__delegate.call(this,args__8012__auto__);};
G__16619.cljs$lang$maxFixedArity = 0;
G__16619.cljs$lang$applyTo = (function (arglist__16621){
var args__8012__auto__ = cljs.core.seq(arglist__16621);
return G__16619__delegate(args__8012__auto__);
});
G__16619.cljs$core$IFn$_invoke$arity$variadic = G__16619__delegate;
return G__16619;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.home.data = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__16643 = "div";
var G__16644 = {"className": "col-sm-4"};
var G__16645 = (function (){var G__16646 = "div";
var G__16647 = {"className": "home-nav well data"};
var G__16648 = (function (){var attrs16622 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("data/map");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16622))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null)], null),attrs16622], 0))):{"className": "active"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16622))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16653 = "i";
var G__16654 = {"className": "fa fa-table big"};
return React.createElement(G__16653,G__16654);
})(),(function (){var G__16655 = "div";
var G__16656 = {"className": "chevron"};
var G__16657 = (function (){var G__16658 = "i";
var G__16659 = {"className": "fa fa-chevron-right"};
return React.createElement(G__16658,G__16659);
})();
return React.createElement(G__16655,G__16656,G__16657);
})(),(function (){var G__16660 = "div";
var G__16661 = {"className": "title"};
var G__16662 = "Explore the data";
return React.createElement(G__16660,G__16661,G__16662);
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16622),(function (){var G__16663 = "i";
var G__16664 = {"className": "fa fa-table big"};
return React.createElement(G__16663,G__16664);
})(),(function (){var G__16665 = "div";
var G__16666 = {"className": "chevron"};
var G__16667 = (function (){var G__16668 = "i";
var G__16669 = {"className": "fa fa-chevron-right"};
return React.createElement(G__16668,G__16669);
})();
return React.createElement(G__16665,G__16666,G__16667);
})(),(function (){var G__16670 = "div";
var G__16671 = {"className": "title"};
var G__16672 = "Explore the data";
return React.createElement(G__16670,G__16671,G__16672);
})()], null))));
})();
var G__16649 = (function (){var G__16673 = "p";
var G__16674 = null;
var G__16675 = React.createElement("b",null,"Explore published survival statistics by:");
return React.createElement(G__16673,G__16674,G__16675);
})();
var G__16650 = React.createElement("p",null,"browsing hospitals individually;");
var G__16651 = React.createElement("p",null,"viewing a one page summary of all hospitals;");
var G__16652 = React.createElement("p",null,"watching our 2 minute video on how to interpret the results.");
return React.createElement(G__16646,G__16647,G__16648,G__16649,G__16650,G__16651,G__16652);
})();
return React.createElement(G__16643,G__16644,G__16645);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"data");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16676__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16676 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16677__i = 0, G__16677__a = new Array(arguments.length -  0);
while (G__16677__i < G__16677__a.length) {G__16677__a[G__16677__i] = arguments[G__16677__i + 0]; ++G__16677__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16677__a,0);
} 
return G__16676__delegate.call(this,args__8012__auto__);};
G__16676.cljs$lang$maxFixedArity = 0;
G__16676.cljs$lang$applyTo = (function (arglist__16678){
var args__8012__auto__ = cljs.core.seq(arglist__16678);
return G__16676__delegate(args__8012__auto__);
});
G__16676.cljs$core$IFn$_invoke$arity$variadic = G__16676__delegate;
return G__16676;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.home.everything_else = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__16700 = "div";
var G__16701 = {"className": "col-sm-4"};
var G__16702 = (function (){var G__16703 = "div";
var G__16704 = {"className": "home-nav well faqs"};
var G__16705 = (function (){var attrs16679 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16679))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active"], null)], null),attrs16679], 0))):{"className": "active"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16679))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16710 = "i";
var G__16711 = {"className": "fa fa-info big"};
return React.createElement(G__16710,G__16711);
})(),(function (){var G__16712 = "div";
var G__16713 = {"className": "chevron"};
var G__16714 = (function (){var G__16715 = "i";
var G__16716 = {"className": "fa fa-chevron-right"};
return React.createElement(G__16715,G__16716);
})();
return React.createElement(G__16712,G__16713,G__16714);
})(),(function (){var G__16717 = "div";
var G__16718 = {"dangerouslySetInnerHTML": {"__html": "Everything else&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}, "className": "title"};
return React.createElement(G__16717,G__16718);
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16679),(function (){var G__16719 = "i";
var G__16720 = {"className": "fa fa-info big"};
return React.createElement(G__16719,G__16720);
})(),(function (){var G__16721 = "div";
var G__16722 = {"className": "chevron"};
var G__16723 = (function (){var G__16724 = "i";
var G__16725 = {"className": "fa fa-chevron-right"};
return React.createElement(G__16724,G__16725);
})();
return React.createElement(G__16721,G__16722,G__16723);
})(),(function (){var G__16726 = "div";
var G__16727 = {"dangerouslySetInnerHTML": {"__html": "Everything else&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}, "className": "title"};
return React.createElement(G__16726,G__16727);
})()], null))));
})();
var G__16706 = React.createElement("p",null,"What happens if the data raises concerns?");
var G__16707 = React.createElement("p",null,"More detail about how survival statistics are monitored, including an explanatory video.");
var G__16708 = React.createElement("p",null,"Limitations of this data.");
var G__16709 = React.createElement("p",null,"Information for families.");
return React.createElement(G__16703,G__16704,G__16705,G__16706,G__16707,G__16708,G__16709);
})();
return React.createElement(G__16700,G__16701,G__16702);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"everything-else");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16728__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16728 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16729__i = 0, G__16729__a = new Array(arguments.length -  0);
while (G__16729__i < G__16729__a.length) {G__16729__a[G__16729__i] = arguments[G__16729__i + 0]; ++G__16729__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16729__a,0);
} 
return G__16728__delegate.call(this,args__8012__auto__);};
G__16728.cljs$lang$maxFixedArity = 0;
G__16728.cljs$lang$applyTo = (function (arglist__16730){
var args__8012__auto__ = cljs.core.seq(arglist__16730);
return G__16728__delegate(args__8012__auto__);
});
G__16728.cljs$core$IFn$_invoke$arity$variadic = G__16728__delegate;
return G__16728;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.home.render_home = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__16740 = "div";
var G__16741 = {"className": "main-content"};
var G__16742 = (function (){var G__16743 = "div";
var G__16744 = {"className": "container"};
var G__16745 = (function (){var G__16747 = "div";
var G__16748 = {"className": "jumbotron home row"};
var G__16749 = (function (){var G__16750 = "section";
var G__16751 = {"className": "about col-xs-offset-1 col-sm-10"};
var G__16752 = React.createElement("p",null,"This site is to help people make sense of published survival data about children\u2019s heart surgery in the\n      UK and Ireland. ");
var G__16753 = (function (){var G__16771 = "div";
var G__16772 = null;
var G__16773 = (function (){var G__16777 = "h1";
var G__16778 = {"style": {"display": "none"}};
var G__16779 = "Children's Heart Surgery Info";
return React.createElement(G__16777,G__16778,G__16779);
})();
var G__16774 = React.createElement("p",null,"Our website will help you:");
var G__16775 = (function (){var G__16780 = "ul";
var G__16781 = null;
var G__16782 = React.createElement("li",null,"understand how the NHS monitors children\u2019s heart surgery");
var G__16783 = React.createElement("li",null,"explore what survival rates can and can\u2019t tell you");
var G__16784 = React.createElement("li",null,"explore published data for hospitals in the UK and Ireland");
return React.createElement(G__16780,G__16781,G__16782,G__16783,G__16784);
})();
var G__16776 = (cljs.core.truth_(cljs.core.cst$kw$show_DASH_nicor.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app)))?(function (){var attrs16762 = prais2.core.href("https://www.ucl.ac.uk/nicor/audits/congenital/documents/datasets/NCHDA2011-14Report",cljs.core.cst$kw$target,"_blank");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16762))?sablono.interpreter.attributes(attrs16762):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16762))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16785 = "img";
var G__16786 = {"src": "assets/nicor.png", "className": "img-responsive col-sm-2"};
return React.createElement(G__16785,G__16786);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16762),(function (){var G__16787 = "img";
var G__16788 = {"src": "assets/nicor.png", "className": "img-responsive col-sm-2"};
return React.createElement(G__16787,G__16788);
})()], null))));
})():null);
return React.createElement(G__16771,G__16772,G__16773,G__16774,G__16775,G__16776);
})();
return React.createElement(G__16750,G__16751,G__16752,G__16753);
})();
return React.createElement(G__16747,G__16748,G__16749);
})();
var G__16746 = (function (){var attrs16739 = (prais2.home.what_why.cljs$core$IFn$_invoke$arity$0 ? prais2.home.what_why.cljs$core$IFn$_invoke$arity$0() : prais2.home.what_why.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16739))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs16739], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16739))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((prais2.home.data.cljs$core$IFn$_invoke$arity$0 ? prais2.home.data.cljs$core$IFn$_invoke$arity$0() : prais2.home.data.call(null))),sablono.interpreter.interpret((prais2.home.everything_else.cljs$core$IFn$_invoke$arity$0 ? prais2.home.everything_else.cljs$core$IFn$_invoke$arity$0() : prais2.home.everything_else.call(null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16739),sablono.interpreter.interpret((prais2.home.data.cljs$core$IFn$_invoke$arity$0 ? prais2.home.data.cljs$core$IFn$_invoke$arity$0() : prais2.home.data.call(null))),sablono.interpreter.interpret((prais2.home.everything_else.cljs$core$IFn$_invoke$arity$0 ? prais2.home.everything_else.cljs$core$IFn$_invoke$arity$0() : prais2.home.everything_else.call(null)))], null))));
})();
return React.createElement(G__16743,G__16744,G__16745,G__16746);
})();
return React.createElement(G__16740,G__16741,G__16742);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"render-home");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16789__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16789 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16790__i = 0, G__16790__a = new Array(arguments.length -  0);
while (G__16790__i < G__16790__a.length) {G__16790__a[G__16790__i] = arguments[G__16790__i + 0]; ++G__16790__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16790__a,0);
} 
return G__16789__delegate.call(this,args__8012__auto__);};
G__16789.cljs$lang$maxFixedArity = 0;
G__16789.cljs$lang$applyTo = (function (arglist__16791){
var args__8012__auto__ = cljs.core.seq(arglist__16791);
return G__16789__delegate(args__8012__auto__);
});
G__16789.cljs$core$IFn$_invoke$arity$variadic = G__16789__delegate;
return G__16789;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
