// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.components.video_player');
goog.require('cljs.core');
goog.require('rum.core');
prais2.components.video_player.video_js_debug = (function prais2$components$video_player$video_js_debug(_){
return null;
});
prais2.components.video_player.use_video_js = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("prais2.components.video-player","player","prais2.components.video-player/player",765127962),window.videojs(new cljs.core.Keyword(null,"video-id","video-id",2132630536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),(function (){
return prais2.components.video_player.video_js_debug.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"video-id","video-id",2132630536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))))," initialised"].join(''));
})));
}),new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old_state,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("prais2.components.video-player","player","prais2.components.video-player/player",765127962),new cljs.core.Keyword("prais2.components.video-player","player","prais2.components.video-player/player",765127962).cljs$core$IFn$_invoke$arity$1(old_state));
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
new cljs.core.Keyword("prais2.components.video-player","player","prais2.components.video-player/player",765127962).cljs$core$IFn$_invoke$arity$1(state).pause();

new cljs.core.Keyword("prais2.components.video-player","player","prais2.components.video-player/player",765127962).cljs$core$IFn$_invoke$arity$1(state).dispose();

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("prais2.components.video-player","player","prais2.components.video-player/player",765127962));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (_,___$1){
return false;
})], null);
/**
 * 
 */
prais2.components.video_player.video_js = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (p__21158){
var map__21159 = p__21158;
var map__21159__$1 = ((((!((map__21159 == null)))?(((((map__21159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21159):map__21159);
var video_id = cljs.core.get.call(null,map__21159__$1,new cljs.core.Keyword(null,"video-id","video-id",2132630536));
var src = cljs.core.get.call(null,map__21159__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var controls = cljs.core.get.call(null,map__21159__$1,new cljs.core.Keyword(null,"controls","controls",1340701452),true);
var preload = cljs.core.get.call(null,map__21159__$1,new cljs.core.Keyword(null,"preload","preload",1646824722),"auto");
var poster = cljs.core.get.call(null,map__21159__$1,new cljs.core.Keyword(null,"poster","poster",-1616913550),"");
var track_src = cljs.core.get.call(null,map__21159__$1,new cljs.core.Keyword(null,"track-src","track-src",590501543),null);
return React.createElement("div",({"dangerouslySetInnerHTML": ({"__html": ["<video ","id=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(video_id),"\" ","class=\"video-js vjs-default-skin vjs-big-play-centered\" ","controls=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(controls),"\" ","preload=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(preload),"\" ","poster=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(poster),"\" ","data-setup='{ \"aspectRatio\": \"480:270\" }'"," >","<source src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"\" type=\"video/mp4\" >",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(track_src)?["<track src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(track_src),"\"\n                                        label=\"captions-on\"\n                                        kind=\"captions\" >"].join(''):null)),"</video>"].join('')}), "className": "video-container"}));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.components.video_player.use_video_js], null)),"video-js");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21161__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21161 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21162__i = 0, G__21162__a = new Array(arguments.length -  0);
while (G__21162__i < G__21162__a.length) {G__21162__a[G__21162__i] = arguments[G__21162__i + 0]; ++G__21162__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21162__a,0,null);
} 
return G__21161__delegate.call(this,args__16261__auto__);};
G__21161.cljs$lang$maxFixedArity = 0;
G__21161.cljs$lang$applyTo = (function (arglist__21163){
var args__16261__auto__ = cljs.core.seq(arglist__21163);
return G__21161__delegate(args__16261__auto__);
});
G__21161.cljs$core$IFn$_invoke$arity$variadic = G__21161__delegate;
return G__21161;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=video_player.js.map
