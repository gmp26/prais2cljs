// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.components.analytics');
goog.require('cljs.core');
goog.require('rum.core');
/**
 * 
 */
prais2.components.analytics.analytics = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (ua_id){
return React.createElement("script",({"dangerouslySetInnerHTML": ({"__html": ["(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n}\n)(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n\nga('create', '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ua_id),"', 'auto');\nga('send', 'pageview');\n"].join('')})}));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"analytics");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22279__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22279 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22280__i = 0, G__22280__a = new Array(arguments.length -  0);
while (G__22280__i < G__22280__a.length) {G__22280__a[G__22280__i] = arguments[G__22280__i + 0]; ++G__22280__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22280__a,0,null);
} 
return G__22279__delegate.call(this,args__16261__auto__);};
G__22279.cljs$lang$maxFixedArity = 0;
G__22279.cljs$lang$applyTo = (function (arglist__22281){
var args__16261__auto__ = cljs.core.seq(arglist__22281);
return G__22279__delegate(args__16261__auto__);
});
G__22279.cljs$core$IFn$_invoke$arity$variadic = G__22279__delegate;
return G__22279;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.components.analytics.spa_analytics = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (ua_id){
return React.createElement("script",({"dangerouslySetInnerHTML": ({"__html": ["window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new\nDate;\nga('create', \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ua_id),"\", 'auto');\n ga('require', 'autotrack');\n\nga('send', 'pageview');\n"].join('')})}));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"spa-analytics");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22282__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22282 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22283__i = 0, G__22283__a = new Array(arguments.length -  0);
while (G__22283__i < G__22283__a.length) {G__22283__a[G__22283__i] = arguments[G__22283__i + 0]; ++G__22283__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22283__a,0,null);
} 
return G__22282__delegate.call(this,args__16261__auto__);};
G__22282.cljs$lang$maxFixedArity = 0;
G__22282.cljs$lang$applyTo = (function (arglist__22284){
var args__16261__auto__ = cljs.core.seq(arglist__22284);
return G__22282__delegate(args__16261__auto__);
});
G__22282.cljs$core$IFn$_invoke$arity$variadic = G__22282__delegate;
return G__22282;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=analytics.js.map
