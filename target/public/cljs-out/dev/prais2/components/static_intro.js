// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.components.static_intro');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.intro');
goog.require('prais2.chrome');
/**
 * 
 */
prais2.components.static_intro.static_intro = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var attrs22268 = prais2.chrome.header.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs22268))?sablono.interpreter.attributes.call(null,attrs22268):null),((cljs.core.map_QMARK_.call(null,attrs22268))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,prais2.intro.render_intro.call(null)),sablono.interpreter.interpret.call(null,prais2.chrome.footer.call(null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22268),sablono.interpreter.interpret.call(null,prais2.intro.render_intro.call(null)),sablono.interpreter.interpret.call(null,prais2.chrome.footer.call(null))], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"static-intro");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22269__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22269 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22270__i = 0, G__22270__a = new Array(arguments.length -  0);
while (G__22270__i < G__22270__a.length) {G__22270__a[G__22270__i] = arguments[G__22270__i + 0]; ++G__22270__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22270__a,0,null);
} 
return G__22269__delegate.call(this,args__16261__auto__);};
G__22269.cljs$lang$maxFixedArity = 0;
G__22269.cljs$lang$applyTo = (function (arglist__22271){
var args__16261__auto__ = cljs.core.seq(arglist__22271);
return G__22269__delegate(args__16261__auto__);
});
G__22269.cljs$core$IFn$_invoke$arity$variadic = G__22269__delegate;
return G__22269;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=static_intro.js.map
