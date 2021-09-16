// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.components.static_home');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.home');
goog.require('prais2.chrome');
/**
 * 
 */
prais2.components.static_home.static_home = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var attrs22300 = prais2.chrome.header.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs22300))?sablono.interpreter.attributes.call(null,attrs22300):null),((cljs.core.map_QMARK_.call(null,attrs22300))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.home.render_home.call(null)),sablono.interpreter.interpret.call(null,prais2.chrome.footer.call(null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22300),sablono.interpreter.interpret.call(null,prais2.home.render_home.call(null)),sablono.interpreter.interpret.call(null,prais2.chrome.footer.call(null))], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"static-home");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22301__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22301 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22302__i = 0, G__22302__a = new Array(arguments.length -  0);
while (G__22302__i < G__22302__a.length) {G__22302__a[G__22302__i] = arguments[G__22302__i + 0]; ++G__22302__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22302__a,0,null);
} 
return G__22301__delegate.call(this,args__16261__auto__);};
G__22301.cljs$lang$maxFixedArity = 0;
G__22301.cljs$lang$applyTo = (function (arglist__22303){
var args__16261__auto__ = cljs.core.seq(arglist__22303);
return G__22301__delegate(args__16261__auto__);
});
G__22301.cljs$core$IFn$_invoke$arity$variadic = G__22301__delegate;
return G__22301;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=static_home.js.map
