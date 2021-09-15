// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.components.head');
goog.require('cljs.core');
goog.require('rum.core');
/**
 * 
 */
prais2.components.head.head = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (title){
return React.createElement("head",null,React.createElement("meta",({"name": "description", "content": "Make sense of published survival data about children\u2019s heart surgery in the UK and Ireland. We explain how hospitals are monitored, and how to understand whether they are performing as predicted."})),React.createElement("meta",({"charset": "utf-8"})),React.createElement("meta",({"name": "viewport", "content": "width=device-width", "initialScale": "1"})),React.createElement("meta",({"name": "apple-mobile-web-app-capable", "content": "yes"})),React.createElement("meta",({"httpEquiv": "X-UA-Compatible", "content": "IE-edge"})),React.createElement("meta",({"name": "mobile-web-app-capable", "content": "yes"})),(function (){var attrs22244 = title;
return cljs.core.apply.call(null,React.createElement,"title",((cljs.core.map_QMARK_.call(null,attrs22244))?sablono.interpreter.attributes.call(null,attrs22244):null),((cljs.core.map_QMARK_.call(null,attrs22244))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22244)], null)));
})(),React.createElement("link",({"rel": "manifest", "href": "/assets/manifest.json"})),React.createElement("link",({"rel": "icon", "sizes": "192x192", "href": "/assets/touch-icon-android.png"})),React.createElement("link",({"rel": "apple-touch-icon", "sizes": "180x180", "href": "/apple-touch-icon.png"})),React.createElement("script",({"src": "https://code.jquery.com/jquery-1.11.3.min.js"})),React.createElement("link",({"rel": "stylesheet", "href": "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"})),React.createElement("link",({"rel": "stylesheet", "href": "/css/app.css"})),React.createElement("script",({"src": "/js/bootstrap-slider.min.js"})),React.createElement("script",({"src": "//vjs.zencdn.net/5.10.2/video.min.js"})),React.createElement("script",({"dangerouslySetInnerHTML": ({"__html": "if (!window.videojs)\n                          {console.log(\"no video-js-yet\");\n                          document.write(unescape(\"%3Cscript src='/js/video.min.js' type='text/javascript' %3E%3C/script%3E\"));}"})})));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"head");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__22263__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__22263 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__22264__i = 0, G__22264__a = new Array(arguments.length -  0);
while (G__22264__i < G__22264__a.length) {G__22264__a[G__22264__i] = arguments[G__22264__i + 0]; ++G__22264__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__22264__a,0,null);
} 
return G__22263__delegate.call(this,args__16261__auto__);};
G__22263.cljs$lang$maxFixedArity = 0;
G__22263.cljs$lang$applyTo = (function (arglist__22265){
var args__16261__auto__ = cljs.core.seq(arglist__22265);
return G__22263__delegate(args__16261__auto__);
});
G__22263.cljs$core$IFn$_invoke$arity$variadic = G__22263__delegate;
return G__22263;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=head.js.map
