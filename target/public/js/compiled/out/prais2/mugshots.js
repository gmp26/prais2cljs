// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.mugshots');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('prais2.content');
goog.require('clojure.string');
/**
 * 
 */
prais2.mugshots.mugshot = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (key){
return sablono.interpreter.interpret.call(null,(function (){var data = key.call(null,prais2.content.mugshot_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"200px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-responsive","img.img-responsive",1870698920),prais2.core.isrc.call(null,[cljs.core.str("assets/mugshots/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)),cljs.core.str("-med.jpg")].join(''))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data)], null)], null);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"mugshot");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31604__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31604 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31605__i = 0, G__31605__a = new Array(arguments.length -  0);
while (G__31605__i < G__31605__a.length) {G__31605__a[G__31605__i] = arguments[G__31605__i + 0]; ++G__31605__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31605__a,0);
} 
return G__31604__delegate.call(this,args__27116__auto__);};
G__31604.cljs$lang$maxFixedArity = 0;
G__31604.cljs$lang$applyTo = (function (arglist__31606){
var args__27116__auto__ = cljs.core.seq(arglist__31606);
return G__31604__delegate(args__27116__auto__);
});
G__31604.cljs$core$IFn$_invoke$arity$variadic = G__31604__delegate;
return G__31604;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.mugshots.reformatted_mugshots = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,React.createElement("div",{"className": "row"},(function (){var attrs31607 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"christina","christina",276917843));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31607))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs31607)):{"className": "col-xs-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31607))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31607)], null))));
})(),(function (){var attrs31608 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"david","david",1443762781));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31608))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs31608)):{"className": "col-xs-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31608))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31608)], null))));
})(),(function (){var attrs31609 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"mike","mike",1566677613));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31609))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs31609)):{"className": "col-xs-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31609))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31609)], null))));
})()),React.createElement("div",{"className": "row"},(function (){var attrs31610 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"tim","tim",-978621596));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31610))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs31610)):{"className": "col-xs-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31610))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31610)], null))));
})(),(function (){var attrs31611 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"emily-b","emily-b",-1385985751));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31611))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs31611)):{"className": "col-xs-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31611))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31611)], null))));
})()),React.createElement("div",{"className": "row"},(function (){var attrs31612 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"emily-j","emily-j",-1725935357));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31612))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs31612)):{"className": "col-xs-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31612))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31612)], null))));
})(),(function (){var attrs31613 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"joanne","joanne",-323401876));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31613))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs31613)):{"className": "col-xs-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31613))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31613)], null))));
})()));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"reformatted-mugshots");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31614__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31614 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31615__i = 0, G__31615__a = new Array(arguments.length -  0);
while (G__31615__i < G__31615__a.length) {G__31615__a[G__31615__i] = arguments[G__31615__i + 0]; ++G__31615__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31615__a,0);
} 
return G__31614__delegate.call(this,args__27116__auto__);};
G__31614.cljs$lang$maxFixedArity = 0;
G__31614.cljs$lang$applyTo = (function (arglist__31616){
var args__27116__auto__ = cljs.core.seq(arglist__31616);
return G__31614__delegate(args__27116__auto__);
});
G__31614.cljs$core$IFn$_invoke$arity$variadic = G__31614__delegate;
return G__31614;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=mugshots.js.map?rel=1629049564118