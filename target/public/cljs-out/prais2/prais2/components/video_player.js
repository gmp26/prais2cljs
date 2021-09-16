// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('prais2.components.video_player');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
prais2.components.video_player.video_js_debug = (function prais2$components$video_player$video_js_debug(_){
return null;
});
prais2.components.video_player.use_video_js = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$did_DASH_mount,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$prais2$components$video_DASH_player_SLASH_player,window.videojs(cljs.core.cst$kw$video_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state))),cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY),(function (){
return prais2.components.video_player.video_js_debug([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$video_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state))))," initialised"].join(''));
})));
}),cljs.core.cst$kw$transfer_DASH_state,(function (old_state,state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$prais2$components$video_DASH_player_SLASH_player,cljs.core.cst$kw$prais2$components$video_DASH_player_SLASH_player.cljs$core$IFn$_invoke$arity$1(old_state));
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
cljs.core.cst$kw$prais2$components$video_DASH_player_SLASH_player.cljs$core$IFn$_invoke$arity$1(state).pause();

cljs.core.cst$kw$prais2$components$video_DASH_player_SLASH_player.cljs$core$IFn$_invoke$arity$1(state).dispose();

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$prais2$components$video_DASH_player_SLASH_player);
}),cljs.core.cst$kw$should_DASH_update,(function (_,___$1){
return false;
})], null);
/**
 * 
 */
prais2.components.video_player.video_js = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (p__19696){
var map__19697 = p__19696;
var map__19697__$1 = ((((!((map__19697 == null)))?(((((map__19697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19697):map__19697);
var video_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19697__$1,cljs.core.cst$kw$video_DASH_id);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19697__$1,cljs.core.cst$kw$src);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19697__$1,cljs.core.cst$kw$controls,true);
var preload = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19697__$1,cljs.core.cst$kw$preload,"auto");
var poster = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19697__$1,cljs.core.cst$kw$poster,"");
var track_src = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19697__$1,cljs.core.cst$kw$track_DASH_src,null);
return React.createElement("div",({"dangerouslySetInnerHTML": ({"__html": ["<video ","id=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(video_id),"\" ","class=\"video-js vjs-default-skin vjs-big-play-centered\" ","controls=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(controls),"\" ","preload=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(preload),"\" ","poster=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(poster),"\" ","data-setup='{ \"aspectRatio\": \"480:270\" }'"," >","<source src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"\" type=\"video/mp4\" >",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(track_src)?["<track src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(track_src),"\"\n                                        label=\"captions-on\"\n                                        kind=\"captions\" >"].join(''):null)),"</video>"].join('')}), "className": "video-container"}));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.components.video_player.use_video_js], null)),"video-js");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19699__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19699 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19700__i = 0, G__19700__a = new Array(arguments.length -  0);
while (G__19700__i < G__19700__a.length) {G__19700__a[G__19700__i] = arguments[G__19700__i + 0]; ++G__19700__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19700__a,0,null);
} 
return G__19699__delegate.call(this,args__14302__auto__);};
G__19699.cljs$lang$maxFixedArity = 0;
G__19699.cljs$lang$applyTo = (function (arglist__19701){
var args__14302__auto__ = cljs.core.seq(arglist__19701);
return G__19699__delegate(args__14302__auto__);
});
G__19699.cljs$core$IFn$_invoke$arity$variadic = G__19699__delegate;
return G__19699;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
