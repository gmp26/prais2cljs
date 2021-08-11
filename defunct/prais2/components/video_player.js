// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('prais2.components.video_player');
goog.require('cljs.core');
goog.require('rum.core');
prais2.components.video_player.video_js_debug = (function prais2$components$video_player$video_js_debug(_){
return null;
});
prais2.components.video_player.use_video_js = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$did_DASH_mount,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$prais2$components$video_DASH_player_SLASH_player,window.videojs(cljs.core.cst$kw$video_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state))),cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY),(function (){
return prais2.components.video_player.video_js_debug([cljs.core.str(cljs.core.cst$kw$video_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)))),cljs.core.str(" initialised")].join(''));
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
prais2.components.video_player.video_js = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (p__15407){
var map__15408 = p__15407;
var map__15408__$1 = ((((!((map__15408 == null)))?((((map__15408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15408):map__15408);
var video_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15408__$1,cljs.core.cst$kw$video_DASH_id);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15408__$1,cljs.core.cst$kw$src);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15408__$1,cljs.core.cst$kw$controls,true);
var preload = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15408__$1,cljs.core.cst$kw$preload,"auto");
var poster = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15408__$1,cljs.core.cst$kw$poster,"");
var track_src = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15408__$1,cljs.core.cst$kw$track_DASH_src,null);
var G__15410 = "div";
var G__15411 = {"dangerouslySetInnerHTML": {"__html": [cljs.core.str("<video "),cljs.core.str("id=\""),cljs.core.str(video_id),cljs.core.str("\" "),cljs.core.str("class=\"video-js vjs-default-skin vjs-big-play-centered\" "),cljs.core.str("controls=\""),cljs.core.str(controls),cljs.core.str("\" "),cljs.core.str("preload=\""),cljs.core.str(preload),cljs.core.str("\" "),cljs.core.str("poster=\""),cljs.core.str(poster),cljs.core.str("\" "),cljs.core.str("data-setup='{ \"aspectRatio\": \"480:270\" }'"),cljs.core.str(" >"),cljs.core.str("<source src=\""),cljs.core.str(src),cljs.core.str("\" type=\"video/mp4\" >"),cljs.core.str((cljs.core.truth_(track_src)?[cljs.core.str("<track src=\""),cljs.core.str(track_src),cljs.core.str("\"\n                                        label=\"captions-on\"\n                                        kind=\"captions\" >")].join(''):null)),cljs.core.str("</video>")].join('')}, "className": "video-container"};
return React.createElement(G__15410,G__15411);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.components.video_player.use_video_js], null)),"video-js");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__15412__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__15412 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__15413__i = 0, G__15413__a = new Array(arguments.length -  0);
while (G__15413__i < G__15413__a.length) {G__15413__a[G__15413__i] = arguments[G__15413__i + 0]; ++G__15413__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__15413__a,0);
} 
return G__15412__delegate.call(this,args__8012__auto__);};
G__15412.cljs$lang$maxFixedArity = 0;
G__15412.cljs$lang$applyTo = (function (arglist__15414){
var args__8012__auto__ = cljs.core.seq(arglist__15414);
return G__15412__delegate(args__8012__auto__);
});
G__15412.cljs$core$IFn$_invoke$arity$variadic = G__15412__delegate;
return G__15412;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
