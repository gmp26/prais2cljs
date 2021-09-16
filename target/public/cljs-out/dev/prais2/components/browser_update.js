// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.components.browser_update');
goog.require('cljs.core');
goog.require('rum.core');
/**
 * 
 */
prais2.components.browser_update.browser_update = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("script",({"dangerouslySetInnerHTML": ({"__html": ["var $buoop = {c:2}; \nfunction $buo_f(){\n  var e = document.createElement(\"script\");\n  e.src = \"//browser-update.org/update.min.js\";\n  document.body.appendChild(e);\n  };\n  try {document.addEventListener(\"DOMContentLoaded\", $buo_f,false)}\n  catch(e){window.attachEvent(\"onload\", $buo_f)}"].join('')})}));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"browser-update");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22274__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22274 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22275__i = 0, G__22275__a = new Array(arguments.length -  0);
while (G__22275__i < G__22275__a.length) {G__22275__a[G__22275__i] = arguments[G__22275__i + 0]; ++G__22275__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22275__a,0,null);
} 
return G__22274__delegate.call(this,args__16261__auto__);};
G__22274.cljs$lang$maxFixedArity = 0;
G__22274.cljs$lang$applyTo = (function (arglist__22276){
var args__16261__auto__ = cljs.core.seq(arglist__22276);
return G__22274__delegate(args__16261__auto__);
});
G__22274.cljs$core$IFn$_invoke$arity$variadic = G__22274__delegate;
return G__22274;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=browser_update.js.map
