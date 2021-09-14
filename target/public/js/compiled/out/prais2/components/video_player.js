// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.components.video_player');
goog.require('cljs.core');
goog.require('rum.core');
prais2.components.video_player.video_js_debug = (function prais2$components$video_player$video_js_debug(s){
return null;
});
prais2.components.video_player.use_video_js = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("prais2.components.video-player","player","prais2.components.video-player/player",765127962),window.videojs(new cljs.core.Keyword(null,"video-id","video-id",2132630536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY),(function (){
return prais2.components.video_player.video_js_debug.call(null,[cljs.core.str(new cljs.core.Keyword(null,"video-id","video-id",2132630536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))),cljs.core.str(" initialised")].join(''));
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
prais2.components.video_player.video_js = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (p__31619){
var map__31620 = p__31619;
var map__31620__$1 = ((((!((map__31620 == null)))?((((map__31620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31620):map__31620);
var video_id = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"video-id","video-id",2132630536));
var src = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var controls = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"controls","controls",1340701452),true);
var preload = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"preload","preload",1646824722),"auto");
var poster = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"poster","poster",-1616913550),"");
var track_src = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"track-src","track-src",590501543),null);
return React.createElement("div",{"dangerouslySetInnerHTML": {"__html": [cljs.core.str("<video "),cljs.core.str("id=\""),cljs.core.str(video_id),cljs.core.str("\" "),cljs.core.str("class=\"video-js vjs-default-skin vjs-big-play-centered\" "),cljs.core.str("controls=\""),cljs.core.str(controls),cljs.core.str("\" "),cljs.core.str("preload=\""),cljs.core.str(preload),cljs.core.str("\" "),cljs.core.str("poster=\""),cljs.core.str(poster),cljs.core.str("\" "),cljs.core.str("data-setup='{ \"aspectRatio\": \"480:270\" }'"),cljs.core.str(" >"),cljs.core.str("<source src=\""),cljs.core.str(src),cljs.core.str("\" type=\"video/mp4\" >"),cljs.core.str((cljs.core.truth_(track_src)?[cljs.core.str("<track src=\""),cljs.core.str(track_src),cljs.core.str("\"\n                                        label=\"captions-on\"\n                                        kind=\"captions\" >")].join(''):null)),cljs.core.str("</video>")].join('')}, "className": "video-container"});
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.components.video_player.use_video_js], null)),"video-js");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__31622__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__31622 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__31623__i = 0, G__31623__a = new Array(arguments.length -  0);
while (G__31623__i < G__31623__a.length) {G__31623__a[G__31623__i] = arguments[G__31623__i + 0]; ++G__31623__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__31623__a,0);
} 
return G__31622__delegate.call(this,args__27116__auto__);};
G__31622.cljs$lang$maxFixedArity = 0;
G__31622.cljs$lang$applyTo = (function (arglist__31624){
var args__27116__auto__ = cljs.core.seq(arglist__31624);
return G__31622__delegate(args__27116__auto__);
});
G__31622.cljs$core$IFn$_invoke$arity$variadic = G__31622__delegate;
return G__31622;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=video_player.js.map?rel=1629049564182