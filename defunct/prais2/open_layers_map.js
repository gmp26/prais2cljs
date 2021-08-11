// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('prais2.open_layers_map');
goog.require('cljs.core');
goog.require('ol.source.OSM');
goog.require('ol.Feature');
goog.require('prais2.data');
goog.require('prais2.content');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('prais2.core');
goog.require('ol.Overlay');
goog.require('prais2.utils');
prais2.open_layers_map.iconStyle = (new ol.style.Style(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$image,(new ol.style.Icon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$anchor,cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(33)], null)),cljs.core.cst$kw$anchorXUnits,"fraction",cljs.core.cst$kw$anchorYUnits,"pixels",cljs.core.cst$kw$opacity,0.6,cljs.core.cst$kw$src,"/assets/icon.png"], null))))], null))));
/**
 * Generate map coordinates given longitude and latitude in degrees
 */
prais2.open_layers_map.map_point = (function prais2$open_layers_map$map_point(lat,lon){
return ol.proj.transform(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null)),"EPSG:4326","EPSG:3857");
});
prais2.open_layers_map.hospital_marker = (function prais2$open_layers_map$hospital_marker(row){
var marker = (new ol.Feature(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$geometry,(new ol.geom.Point(prais2.open_layers_map.map_point(cljs.core.cst$kw$h_DASH_lat.cljs$core$IFn$_invoke$arity$1(row),cljs.core.cst$kw$h_DASH_lon.cljs$core$IFn$_invoke$arity$1(row)))),cljs.core.cst$kw$code,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(row)),cljs.core.cst$kw$name,cljs.core.cst$kw$h_DASH_name.cljs$core$IFn$_invoke$arity$1(row),cljs.core.cst$kw$count,cljs.core.cst$kw$n_DASH_ops.cljs$core$IFn$_invoke$arity$1(row)], null))));
marker.setStyle(prais2.open_layers_map.iconStyle);

return marker;
});
prais2.open_layers_map.hospital_markers = (function prais2$open_layers_map$hospital_markers(){
var rows = cljs.core.rest(prais2.data.table_data(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.core.app) : cljs.core.deref.call(null,prais2.core.app)))).call(null));
return cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(prais2.open_layers_map.hospital_marker,rows));
});
prais2.open_layers_map.vectorSource = (function prais2$open_layers_map$vectorSource(){
return (new ol.source.Vector(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$features,prais2.open_layers_map.hospital_markers()], null))));
});
prais2.open_layers_map.vectorLayer = (function prais2$open_layers_map$vectorLayer(){
return (new ol.layer.Vector(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,prais2.open_layers_map.vectorSource()], null))));
});
prais2.open_layers_map.tileLayer = (new ol.layer.Tile(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preload,(4),cljs.core.cst$kw$source,(new ol.source.OSM())], null))));
prais2.open_layers_map.mapView = (new ol.View(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$center,prais2.open_layers_map.map_point(53.7,-3.4),cljs.core.cst$kw$zoom,5.5], null))));
prais2.open_layers_map.project = (function prais2$open_layers_map$project(lat,lon){
return ol.proj.fromLonLat(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null)));
});
if(typeof prais2.open_layers_map.ol_db !== 'undefined'){
} else {
prais2.open_layers_map.ol_db = (function (){var G__17189 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hospital_DASH_map,null,cljs.core.cst$kw$popup,null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17189) : cljs.core.atom.call(null,G__17189));
})();
}
prais2.open_layers_map.map_view = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$hospital_DASH_map,(new ol.Map(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,"open-map",cljs.core.cst$kw$layers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.open_layers_map.tileLayer,prais2.open_layers_map.vectorLayer()], null),cljs.core.cst$kw$view,prais2.open_layers_map.mapView,cljs.core.cst$kw$interactions,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$loadTilesWhileAnimating,true], null))))),cljs.core.cst$kw$popup,(new ol.Overlay(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$element,prais2.core.el("popup"),cljs.core.cst$kw$positioning,"bottom-center",cljs.core.cst$kw$stopEvent,false], null)))));
(new_state.cljs$core$IFn$_invoke$arity$1 ? new_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hospital_DASH_map) : new_state.call(null,cljs.core.cst$kw$hospital_DASH_map)).addOverlay((new_state.cljs$core$IFn$_invoke$arity$1 ? new_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$popup) : new_state.call(null,cljs.core.cst$kw$popup)));

(new_state.cljs$core$IFn$_invoke$arity$1 ? new_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hospital_DASH_map) : new_state.call(null,cljs.core.cst$kw$hospital_DASH_map)).on("click",prais2.open_layers_map.map_click_handler);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.open_layers_map.ol_db,new_state) : cljs.core.reset_BANG_.call(null,prais2.open_layers_map.ol_db,new_state));

return new_state;
}),cljs.core.cst$kw$should_DASH_update,(function (_,___$1){
return false;
})], null);
prais2.open_layers_map.map_click_handler = (function prais2$open_layers_map$map_click_handler(event){
var the_map = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.open_layers_map.ol_db) : cljs.core.deref.call(null,prais2.open_layers_map.ol_db)).call(null,cljs.core.cst$kw$hospital_DASH_map);
var feature = the_map.forEachFeatureAtPixel(event.pixel,((function (the_map){
return (function (a,_){
return a;
});})(the_map))
);
if(cljs.core.truth_(feature)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_on_DASH_map_DASH_marker,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(feature.get("code")),event], null));
} else {
return null;
}
});
prais2.open_layers_map.zoom_time = (1000);
prais2.open_layers_map.zoom_to_location = (function prais2$open_layers_map$zoom_to_location(var_args){
var args17190 = [];
var len__7296__auto___17193 = arguments.length;
var i__7297__auto___17194 = (0);
while(true){
if((i__7297__auto___17194 < len__7296__auto___17193)){
args17190.push((arguments[i__7297__auto___17194]));

var G__17195 = (i__7297__auto___17194 + (1));
i__7297__auto___17194 = G__17195;
continue;
} else {
}
break;
}

var G__17192 = args17190.length;
switch (G__17192) {
case 2:
return prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17190.length)].join('')));

}
});

prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$2 = (function (lat,lon){
return prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$3(lat,lon,(4));
});

prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$3 = (function (lat,lon,resolution){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("resolution = "),cljs.core.str(resolution)].join('')], 0));

var pan = ol.animation.pan(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$duration,prais2.open_layers_map.zoom_time,cljs.core.cst$kw$source,prais2.open_layers_map.mapView.getCenter(),cljs.core.cst$kw$resolution,prais2.open_layers_map.mapView.getResolution()], null)));
var zoom = ol.animation.zoom(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$duration,prais2.open_layers_map.zoom_time,cljs.core.cst$kw$source,prais2.open_layers_map.mapView.getCenter(),cljs.core.cst$kw$resolution,prais2.open_layers_map.mapView.getResolution()], null)));
prais2.open_layers_map.mapView.setCenter(prais2.open_layers_map.project(lat,lon));

prais2.open_layers_map.mapView.setResolution(resolution);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.open_layers_map.ol_db) : cljs.core.deref.call(null,prais2.open_layers_map.ol_db)).call(null,cljs.core.cst$kw$hospital_DASH_map).beforeRender(pan,zoom);
});

prais2.open_layers_map.zoom_to_location.cljs$lang$maxFixedArity = 3;

/**
 * revert to map home location and zoom
 */
prais2.open_layers_map.go_home = (function prais2$open_layers_map$go_home(){
return prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$3(54.5,(-3),(4000));
});
/**
 * revert to map home location and zoom
 */
prais2.open_layers_map.go_london = (function prais2$open_layers_map$go_london(){
return prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$3(51.52,-0.15,(40));
});
/**
 * Handle a click on a map feature.
 *   This should behave like a react render even though it uses open-layers map software and so
 *   bypasses React. We should render from map-state stored in the app atom.
 */
prais2.open_layers_map.zoom_to_feature = (function prais2$open_layers_map$zoom_to_feature(){
var ap = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.core.app) : cljs.core.deref.call(null,prais2.core.app));
var h_code = cljs.core.cst$kw$map_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(ap);
var element = $("#popup");
var the_datasource = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(ap);
var row = (function (){var G__17249 = prais2.data.rows_by_code(the_datasource).call(null);
return (h_code.cljs$core$IFn$_invoke$arity$1 ? h_code.cljs$core$IFn$_invoke$arity$1(G__17249) : h_code.call(null,G__17249));
})();
var lat = cljs.core.cst$kw$h_DASH_lat.cljs$core$IFn$_invoke$arity$1(row);
var lon = cljs.core.cst$kw$h_DASH_lon.cljs$core$IFn$_invoke$arity$1(row);
var coord = prais2.open_layers_map.map_point(lat,lon);
prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$2(lat,lon);

var c__12897__auto___17301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12897__auto___17301,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (){
var f__12898__auto__ = (function (){var switch__12841__auto__ = ((function (c__12897__auto___17301,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (state_17283){
var state_val_17284 = (state_17283[(1)]);
if((state_val_17284 === (1))){
var inst_17250 = cljs.core.async.timeout(prais2.open_layers_map.zoom_time);
var state_17283__$1 = state_17283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17283__$1,(2),inst_17250);
} else {
if((state_val_17284 === (2))){
var inst_17252 = (state_17283[(2)]);
var inst_17253 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.open_layers_map.ol_db) : cljs.core.deref.call(null,prais2.open_layers_map.ol_db));
var inst_17254 = (inst_17253.cljs$core$IFn$_invoke$arity$1 ? inst_17253.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$popup) : inst_17253.call(null,cljs.core.cst$kw$popup));
var inst_17255 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17256 = cljs.core.first(coord);
var inst_17257 = cljs.core.second(coord);
var inst_17258 = ((150) + inst_17257);
var inst_17259 = [inst_17256,inst_17258];
var inst_17260 = (new cljs.core.PersistentVector(null,2,(5),inst_17255,inst_17259,null));
var inst_17261 = cljs.core.clj__GT_js(inst_17260);
var inst_17262 = inst_17254.setPosition(inst_17261);
var inst_17263 = [cljs.core.cst$kw$placement,cljs.core.cst$kw$html,cljs.core.cst$kw$content];
var inst_17264 = cljs.core.cst$kw$h_DASH_name.cljs$core$IFn$_invoke$arity$1(row);
var inst_17265 = cljs.core.cst$kw$n_DASH_ops.cljs$core$IFn$_invoke$arity$1(row);
var inst_17266 = [cljs.core.str("<h4>"),cljs.core.str(inst_17264),cljs.core.str("</h4>"),cljs.core.str(inst_17265),cljs.core.str(" operations")].join('');
var inst_17267 = ["top",true,inst_17266];
var inst_17268 = cljs.core.PersistentHashMap.fromArrays(inst_17263,inst_17267);
var inst_17269 = cljs.core.clj__GT_js(inst_17268);
var inst_17270 = element.popover(inst_17269);
var inst_17271 = element.popover("show");
var inst_17279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17280 = (function (){var c__12897__auto____$1 = inst_17279;
return ((function (c__12897__auto____$1,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,inst_17268,inst_17269,inst_17270,inst_17271,inst_17279,state_val_17284,c__12897__auto___17301,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (){
var f__12898__auto__ = (function (){var switch__12841__auto__ = ((function (c__12897__auto____$1,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,inst_17268,inst_17269,inst_17270,inst_17271,inst_17279,state_val_17284,c__12897__auto___17301,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (state_17277){
var state_val_17278 = (state_17277[(1)]);
if((state_val_17278 === (1))){
var inst_17272 = cljs.core.async.timeout((2500));
var state_17277__$1 = state_17277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17277__$1,(2),inst_17272);
} else {
if((state_val_17278 === (2))){
var inst_17274 = (state_17277[(2)]);
var inst_17275 = element.popover("destroy");
var state_17277__$1 = (function (){var statearr_17285 = state_17277;
(statearr_17285[(7)] = inst_17274);

return statearr_17285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17277__$1,inst_17275);
} else {
return null;
}
}
});})(c__12897__auto____$1,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,inst_17268,inst_17269,inst_17270,inst_17271,inst_17279,state_val_17284,c__12897__auto___17301,ap,h_code,element,the_datasource,row,lat,lon,coord))
;
return ((function (switch__12841__auto__,c__12897__auto____$1,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,inst_17268,inst_17269,inst_17270,inst_17271,inst_17279,state_val_17284,c__12897__auto___17301,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function() {
var prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto__ = null;
var prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto____0 = (function (){
var statearr_17289 = [null,null,null,null,null,null,null,null];
(statearr_17289[(0)] = prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto__);

(statearr_17289[(1)] = (1));

return statearr_17289;
});
var prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto____1 = (function (state_17277){
while(true){
var ret_value__12843__auto__ = (function (){try{while(true){
var result__12844__auto__ = switch__12841__auto__(state_17277);
if(cljs.core.keyword_identical_QMARK_(result__12844__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12844__auto__;
}
break;
}
}catch (e17290){if((e17290 instanceof Object)){
var ex__12845__auto__ = e17290;
var statearr_17291_17302 = state_17277;
(statearr_17291_17302[(5)] = ex__12845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17277);

return cljs.core.cst$kw$recur;
} else {
throw e17290;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12843__auto__,cljs.core.cst$kw$recur)){
var G__17303 = state_17277;
state_17277 = G__17303;
continue;
} else {
return ret_value__12843__auto__;
}
break;
}
});
prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto__ = function(state_17277){
switch(arguments.length){
case 0:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto____0.call(this);
case 1:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto____1.call(this,state_17277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto____0;
prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto____1;
return prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto__;
})()
;})(switch__12841__auto__,c__12897__auto____$1,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,inst_17268,inst_17269,inst_17270,inst_17271,inst_17279,state_val_17284,c__12897__auto___17301,ap,h_code,element,the_datasource,row,lat,lon,coord))
})();
var state__12899__auto__ = (function (){var statearr_17292 = (f__12898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12898__auto__.cljs$core$IFn$_invoke$arity$0() : f__12898__auto__.call(null));
(statearr_17292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12897__auto____$1);

return statearr_17292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12899__auto__);
});
;})(c__12897__auto____$1,inst_17252,inst_17253,inst_17254,inst_17255,inst_17256,inst_17257,inst_17258,inst_17259,inst_17260,inst_17261,inst_17262,inst_17263,inst_17264,inst_17265,inst_17266,inst_17267,inst_17268,inst_17269,inst_17270,inst_17271,inst_17279,state_val_17284,c__12897__auto___17301,ap,h_code,element,the_datasource,row,lat,lon,coord))
})();
var inst_17281 = cljs.core.async.impl.dispatch.run(inst_17280);
var state_17283__$1 = (function (){var statearr_17293 = state_17283;
(statearr_17293[(7)] = inst_17271);

(statearr_17293[(8)] = inst_17270);

(statearr_17293[(9)] = inst_17262);

(statearr_17293[(10)] = inst_17281);

(statearr_17293[(11)] = inst_17252);

return statearr_17293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17283__$1,inst_17279);
} else {
return null;
}
}
});})(c__12897__auto___17301,ap,h_code,element,the_datasource,row,lat,lon,coord))
;
return ((function (switch__12841__auto__,c__12897__auto___17301,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function() {
var prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto__ = null;
var prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto____0 = (function (){
var statearr_17297 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17297[(0)] = prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto__);

(statearr_17297[(1)] = (1));

return statearr_17297;
});
var prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto____1 = (function (state_17283){
while(true){
var ret_value__12843__auto__ = (function (){try{while(true){
var result__12844__auto__ = switch__12841__auto__(state_17283);
if(cljs.core.keyword_identical_QMARK_(result__12844__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12844__auto__;
}
break;
}
}catch (e17298){if((e17298 instanceof Object)){
var ex__12845__auto__ = e17298;
var statearr_17299_17304 = state_17283;
(statearr_17299_17304[(5)] = ex__12845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17283);

return cljs.core.cst$kw$recur;
} else {
throw e17298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12843__auto__,cljs.core.cst$kw$recur)){
var G__17305 = state_17283;
state_17283 = G__17305;
continue;
} else {
return ret_value__12843__auto__;
}
break;
}
});
prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto__ = function(state_17283){
switch(arguments.length){
case 0:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto____0.call(this);
case 1:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto____1.call(this,state_17283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto____0;
prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto____1;
return prais2$open_layers_map$zoom_to_feature_$_state_machine__12842__auto__;
})()
;})(switch__12841__auto__,c__12897__auto___17301,ap,h_code,element,the_datasource,row,lat,lon,coord))
})();
var state__12899__auto__ = (function (){var statearr_17300 = (f__12898__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12898__auto__.cljs$core$IFn$_invoke$arity$0() : f__12898__auto__.call(null));
(statearr_17300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12897__auto___17301);

return statearr_17300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12899__auto__);
});})(c__12897__auto___17301,ap,h_code,element,the_datasource,row,lat,lon,coord))
);


return element.popover("hide");
});
/**
 * 
 */
prais2.open_layers_map.london_button = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17308 = "button";
var G__17309 = {"onClick": ((function (G__17308){
return (function (p1__17306_SHARP_){
return prais2.core.click__GT_event_bus(p1__17306_SHARP_,cljs.core.cst$kw$just_DASH_london,null,null);
});})(G__17308))
, "onTouchStart": ((function (G__17308){
return (function (p1__17307_SHARP_){
return prais2.core.click__GT_event_bus(p1__17307_SHARP_,cljs.core.cst$kw$just_DASH_london,null,null);
});})(G__17308))
, "tabIndex": (0), "className": "btn-info london-button"};
var G__17310 = "Just London";
return React.createElement(G__17308,G__17309,G__17310);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"london-button");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17311__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17311 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17312__i = 0, G__17312__a = new Array(arguments.length -  0);
while (G__17312__i < G__17312__a.length) {G__17312__a[G__17312__i] = arguments[G__17312__i + 0]; ++G__17312__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17312__a,0);
} 
return G__17311__delegate.call(this,args__8012__auto__);};
G__17311.cljs$lang$maxFixedArity = 0;
G__17311.cljs$lang$applyTo = (function (arglist__17313){
var args__8012__auto__ = cljs.core.seq(arglist__17313);
return G__17311__delegate(args__8012__auto__);
});
G__17311.cljs$core$IFn$_invoke$arity$variadic = G__17311__delegate;
return G__17311;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.home_button = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17316 = "button";
var G__17317 = {"onClick": ((function (G__17316){
return (function (p1__17314_SHARP_){
return prais2.core.click__GT_event_bus(p1__17314_SHARP_,cljs.core.cst$kw$reset_DASH_map_DASH_to_DASH_home,null,null);
});})(G__17316))
, "onTouchStart": ((function (G__17316){
return (function (p1__17315_SHARP_){
return prais2.core.click__GT_event_bus(p1__17315_SHARP_,cljs.core.cst$kw$reset_DASH_map_DASH_to_DASH_home,null,null);
});})(G__17316))
, "tabIndex": (0), "className": "btn-info h-button"};
var G__17318 = "All UK";
return React.createElement(G__17316,G__17317,G__17318);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"home-button");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17319__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17319 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17320__i = 0, G__17320__a = new Array(arguments.length -  0);
while (G__17320__i < G__17320__a.length) {G__17320__a[G__17320__i] = arguments[G__17320__i + 0]; ++G__17320__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17320__a,0);
} 
return G__17319__delegate.call(this,args__8012__auto__);};
G__17319.cljs$lang$maxFixedArity = 0;
G__17319.cljs$lang$applyTo = (function (arglist__17321){
var args__8012__auto__ = cljs.core.seq(arglist__17321);
return G__17319__delegate(args__8012__auto__);
});
G__17319.cljs$core$IFn$_invoke$arity$variadic = G__17319__delegate;
return G__17319;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.hospital_item = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (row){
var G__17325 = "li";
var G__17326 = null;
var G__17327 = (function (){var G__17328 = "a";
var G__17329 = {"tabIndex": (0), "onClick": ((function (G__17328,G__17325,G__17326){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_on_DASH_map_DASH_menu_DASH_item,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(row))], null));
});})(G__17328,G__17325,G__17326))
};
var G__17330 = sablono.interpreter.interpret(cljs.core.cst$kw$h_DASH_name.cljs$core$IFn$_invoke$arity$1(row));
return React.createElement(G__17328,G__17329,G__17330);
})();
return React.createElement(G__17325,G__17326,G__17327);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"hospital-item");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17331__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17331 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17332__i = 0, G__17332__a = new Array(arguments.length -  0);
while (G__17332__i < G__17332__a.length) {G__17332__a[G__17332__i] = arguments[G__17332__i + 0]; ++G__17332__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17332__a,0);
} 
return G__17331__delegate.call(this,args__8012__auto__);};
G__17331.cljs$lang$maxFixedArity = 0;
G__17331.cljs$lang$applyTo = (function (arglist__17333){
var args__8012__auto__ = cljs.core.seq(arglist__17333);
return G__17331__delegate(args__8012__auto__);
});
G__17331.cljs$core$IFn$_invoke$arity$variadic = G__17331__delegate;
return G__17331;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.hospital_list = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
return sablono.interpreter.interpret((function (){var rows = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app)).call(null,prais2.content.datasources);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$dropdown_DASH_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aria_DASH_labelled_DASH_by,"drop1"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,cljs.core.map.cljs$core$IFn$_invoke$arity$2(prais2.open_layers_map.hospital_item,rows))], null);
})());
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-list");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17334__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17334 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17335__i = 0, G__17335__a = new Array(arguments.length -  0);
while (G__17335__i < G__17335__a.length) {G__17335__a[G__17335__i] = arguments[G__17335__i + 0]; ++G__17335__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17335__a,0);
} 
return G__17334__delegate.call(this,args__8012__auto__);};
G__17334.cljs$lang$maxFixedArity = 0;
G__17334.cljs$lang$applyTo = (function (arglist__17336){
var args__8012__auto__ = cljs.core.seq(arglist__17336);
return G__17334__delegate(args__8012__auto__);
});
G__17334.cljs$core$IFn$_invoke$arity$variadic = G__17334__delegate;
return G__17334;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.hospitals = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__17339 = "div";
var G__17340 = {"id": "open-map", "tabIndex": (0), "key": (1), "className": "hospital-map"};
var G__17341 = sablono.interpreter.interpret((prais2.open_layers_map.london_button.cljs$core$IFn$_invoke$arity$0 ? prais2.open_layers_map.london_button.cljs$core$IFn$_invoke$arity$0() : prais2.open_layers_map.london_button.call(null)));
var G__17342 = sablono.interpreter.interpret((prais2.open_layers_map.home_button.cljs$core$IFn$_invoke$arity$0 ? prais2.open_layers_map.home_button.cljs$core$IFn$_invoke$arity$0() : prais2.open_layers_map.home_button.call(null)));
var G__17343 = (function (){var G__17344 = "div";
var G__17345 = {"key": (2), "className": "col-xs-12"};
var G__17346 = (function (){var G__17347 = "div";
var G__17348 = {"id": "popup", "key": (2)};
return React.createElement(G__17347,G__17348);
})();
return React.createElement(G__17344,G__17345,G__17346);
})();
return React.createElement(G__17339,G__17340,G__17341,G__17342,G__17343);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.open_layers_map.map_view,rum.core.reactive], null)),"hospitals");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17349__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17349 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17350__i = 0, G__17350__a = new Array(arguments.length -  0);
while (G__17350__i < G__17350__a.length) {G__17350__a[G__17350__i] = arguments[G__17350__i + 0]; ++G__17350__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17350__a,0);
} 
return G__17349__delegate.call(this,args__8012__auto__);};
G__17349.cljs$lang$maxFixedArity = 0;
G__17349.cljs$lang$applyTo = (function (arglist__17351){
var args__8012__auto__ = cljs.core.seq(arglist__17351);
return G__17349__delegate(args__8012__auto__);
});
G__17349.cljs$core$IFn$_invoke$arity$variadic = G__17349__delegate;
return G__17349;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
