// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.mugshots');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('prais2.content');
/**
 * 
 */
prais2.mugshots.mugshot = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (key){
var data = key.call(null,prais2.content.mugshot_data);
return React.createElement("div",({"style": ({"maxWidth": "200px"})}),(function (){var attrs21166 = prais2.core.isrc.call(null,["assets/mugshots/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)),"-med.jpg"].join(''));
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs21166))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img-responsive"], null)], null),attrs21166)):({"className": "img-responsive"})),((cljs.core.map_QMARK_.call(null,attrs21166))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21166)], null)));
})(),React.createElement("p",({"key": (2), "className": "text-center"}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"mugshot");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21167__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21167 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21168__i = 0, G__21168__a = new Array(arguments.length -  0);
while (G__21168__i < G__21168__a.length) {G__21168__a[G__21168__i] = arguments[G__21168__i + 0]; ++G__21168__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21168__a,0,null);
} 
return G__21167__delegate.call(this,args__16261__auto__);};
G__21167.cljs$lang$maxFixedArity = 0;
G__21167.cljs$lang$applyTo = (function (arglist__21169){
var args__16261__auto__ = cljs.core.seq(arglist__21169);
return G__21167__delegate(args__16261__auto__);
});
G__21167.cljs$core$IFn$_invoke$arity$variadic = G__21167__delegate;
return G__21167;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.mugshots.reformatted_mugshots = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,React.createElement("div",({"className": "row"}),(function (){var attrs21170 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"christina","christina",276917843));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21170))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs21170)):({"className": "col-xs-3"})),((cljs.core.map_QMARK_.call(null,attrs21170))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21170)], null)));
})(),(function (){var attrs21171 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"david","david",1443762781));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21171))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs21171)):({"className": "col-xs-3"})),((cljs.core.map_QMARK_.call(null,attrs21171))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21171)], null)));
})(),(function (){var attrs21172 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"mike","mike",1566677613));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21172))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs21172)):({"className": "col-xs-3"})),((cljs.core.map_QMARK_.call(null,attrs21172))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21172)], null)));
})()),React.createElement("div",({"className": "row"}),(function (){var attrs21173 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"tim","tim",-978621596));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21173))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs21173)):({"className": "col-xs-3"})),((cljs.core.map_QMARK_.call(null,attrs21173))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21173)], null)));
})(),(function (){var attrs21174 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"emily-b","emily-b",-1385985751));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21174))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs21174)):({"className": "col-xs-3"})),((cljs.core.map_QMARK_.call(null,attrs21174))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21174)], null)));
})()),React.createElement("div",({"className": "row"}),(function (){var attrs21175 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"emily-j","emily-j",-1725935357));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21175))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs21175)):({"className": "col-xs-3"})),((cljs.core.map_QMARK_.call(null,attrs21175))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21175)], null)));
})(),(function (){var attrs21176 = prais2.mugshots.mugshot.call(null,new cljs.core.Keyword(null,"joanne","joanne",-323401876));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21176))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-3"], null)], null),attrs21176)):({"className": "col-xs-3"})),((cljs.core.map_QMARK_.call(null,attrs21176))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21176)], null)));
})()));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"reformatted-mugshots");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21177__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21177 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21178__i = 0, G__21178__a = new Array(arguments.length -  0);
while (G__21178__i < G__21178__a.length) {G__21178__a[G__21178__i] = arguments[G__21178__i + 0]; ++G__21178__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21178__a,0,null);
} 
return G__21177__delegate.call(this,args__16261__auto__);};
G__21177.cljs$lang$maxFixedArity = 0;
G__21177.cljs$lang$applyTo = (function (arglist__21179){
var args__16261__auto__ = cljs.core.seq(arglist__21179);
return G__21177__delegate(args__16261__auto__);
});
G__21177.cljs$core$IFn$_invoke$arity$variadic = G__21177__delegate;
return G__21177;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=mugshots.js.map
