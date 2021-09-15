// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('prais2.open_layers_map');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('prais2.core');
goog.require('prais2.content');
goog.require('prais2.data');
goog.require('prais2.utils');
goog.require('ol.Feature');
goog.require('ol.Overlay');
goog.require('ol.source.OSM');
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
var rows = cljs.core.rest((function (){var fexpr__20444 = prais2.data.table_data(cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(prais2.core.app)));
return (fexpr__20444.cljs$core$IFn$_invoke$arity$0 ? fexpr__20444.cljs$core$IFn$_invoke$arity$0() : fexpr__20444.call(null));
})());
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
if((typeof prais2 !== 'undefined') && (typeof prais2.open_layers_map !== 'undefined') && (typeof prais2.open_layers_map.ol_db !== 'undefined')){
} else {
prais2.open_layers_map.ol_db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hospital_DASH_map,null,cljs.core.cst$kw$popup,null], null));
}
prais2.open_layers_map.map_view = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$hospital_DASH_map,(new ol.Map(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,"open-map",cljs.core.cst$kw$layers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.open_layers_map.tileLayer,prais2.open_layers_map.vectorLayer()], null),cljs.core.cst$kw$view,prais2.open_layers_map.mapView,cljs.core.cst$kw$interactions,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$loadTilesWhileAnimating,true], null))))),cljs.core.cst$kw$popup,(new ol.Overlay(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$element,prais2.core.el("popup"),cljs.core.cst$kw$positioning,"bottom-center",cljs.core.cst$kw$stopEvent,false], null)))));
(function (){var G__20445 = cljs.core.cst$kw$hospital_DASH_map;
return (new_state.cljs$core$IFn$_invoke$arity$1 ? new_state.cljs$core$IFn$_invoke$arity$1(G__20445) : new_state.call(null,G__20445));
})().addOverlay((function (){var G__20446 = cljs.core.cst$kw$popup;
return (new_state.cljs$core$IFn$_invoke$arity$1 ? new_state.cljs$core$IFn$_invoke$arity$1(G__20446) : new_state.call(null,G__20446));
})());

(function (){var G__20447 = cljs.core.cst$kw$hospital_DASH_map;
return (new_state.cljs$core$IFn$_invoke$arity$1 ? new_state.cljs$core$IFn$_invoke$arity$1(G__20447) : new_state.call(null,G__20447));
})().on("click",prais2.open_layers_map.map_click_handler);

cljs.core.reset_BANG_(prais2.open_layers_map.ol_db,new_state);

return new_state;
}),cljs.core.cst$kw$should_DASH_update,(function (_,___$1){
return false;
})], null);
prais2.open_layers_map.map_click_handler = (function prais2$open_layers_map$map_click_handler(event){
var the_map = (function (){var G__20449 = cljs.core.cst$kw$hospital_DASH_map;
var fexpr__20448 = cljs.core.deref(prais2.open_layers_map.ol_db);
return (fexpr__20448.cljs$core$IFn$_invoke$arity$1 ? fexpr__20448.cljs$core$IFn$_invoke$arity$1(G__20449) : fexpr__20448.call(null,G__20449));
})();
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
var G__20451 = arguments.length;
switch (G__20451) {
case 2:
return prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$2 = (function (lat,lon){
return prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$3(lat,lon,(4));
});

prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$3 = (function (lat,lon,resolution){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["resolution = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolution)].join('')], 0));

var pan = ol.animation.pan(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$duration,prais2.open_layers_map.zoom_time,cljs.core.cst$kw$source,prais2.open_layers_map.mapView.getCenter(),cljs.core.cst$kw$resolution,prais2.open_layers_map.mapView.getResolution()], null)));
var zoom = ol.animation.zoom(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$duration,prais2.open_layers_map.zoom_time,cljs.core.cst$kw$source,prais2.open_layers_map.mapView.getCenter(),cljs.core.cst$kw$resolution,prais2.open_layers_map.mapView.getResolution()], null)));
prais2.open_layers_map.mapView.setCenter(prais2.open_layers_map.project(lat,lon));

prais2.open_layers_map.mapView.setResolution(resolution);

return (function (){var G__20453 = cljs.core.cst$kw$hospital_DASH_map;
var fexpr__20452 = cljs.core.deref(prais2.open_layers_map.ol_db);
return (fexpr__20452.cljs$core$IFn$_invoke$arity$1 ? fexpr__20452.cljs$core$IFn$_invoke$arity$1(G__20453) : fexpr__20452.call(null,G__20453));
})().beforeRender(pan,zoom);
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
var ap = cljs.core.deref(prais2.core.app);
var h_code = cljs.core.cst$kw$map_DASH_h_DASH_code.cljs$core$IFn$_invoke$arity$1(ap);
var element = $("#popup");
var the_datasource = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(ap);
var row = (function (){var G__20455 = (function (){var fexpr__20456 = prais2.data.rows_by_code(the_datasource);
return (fexpr__20456.cljs$core$IFn$_invoke$arity$0 ? fexpr__20456.cljs$core$IFn$_invoke$arity$0() : fexpr__20456.call(null));
})();
return (h_code.cljs$core$IFn$_invoke$arity$1 ? h_code.cljs$core$IFn$_invoke$arity$1(G__20455) : h_code.call(null,G__20455));
})();
var lat = cljs.core.cst$kw$h_DASH_lat.cljs$core$IFn$_invoke$arity$1(row);
var lon = cljs.core.cst$kw$h_DASH_lon.cljs$core$IFn$_invoke$arity$1(row);
var coord = prais2.open_layers_map.map_point(lat,lon);
prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$2(lat,lon);

var c__16485__auto___20505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___20505,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___20505,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (state_20490){
var state_val_20491 = (state_20490[(1)]);
if((state_val_20491 === (1))){
var inst_20457 = cljs.core.async.timeout(prais2.open_layers_map.zoom_time);
var state_20490__$1 = state_20490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20490__$1,(2),inst_20457);
} else {
if((state_val_20491 === (2))){
var inst_20459 = (state_20490[(2)]);
var inst_20460 = cljs.core.deref(prais2.open_layers_map.ol_db);
var inst_20461 = (function (){var G__20492 = cljs.core.cst$kw$popup;
return (inst_20460.cljs$core$IFn$_invoke$arity$1 ? inst_20460.cljs$core$IFn$_invoke$arity$1(G__20492) : inst_20460.call(null,G__20492));
})();
var inst_20462 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20463 = cljs.core.first(coord);
var inst_20464 = cljs.core.second(coord);
var inst_20465 = ((150) + inst_20464);
var inst_20466 = [inst_20463,inst_20465];
var inst_20467 = (new cljs.core.PersistentVector(null,2,(5),inst_20462,inst_20466,null));
var inst_20468 = cljs.core.clj__GT_js(inst_20467);
var inst_20469 = inst_20461.setPosition(inst_20468);
var inst_20470 = [cljs.core.cst$kw$placement,cljs.core.cst$kw$html,cljs.core.cst$kw$content];
var inst_20471 = cljs.core.cst$kw$h_DASH_name.cljs$core$IFn$_invoke$arity$1(row);
var inst_20472 = cljs.core.cst$kw$n_DASH_ops.cljs$core$IFn$_invoke$arity$1(row);
var inst_20473 = ["<h4>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20471),"</h4>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20472)," operations"].join('');
var inst_20474 = ["top",true,inst_20473];
var inst_20475 = cljs.core.PersistentHashMap.fromArrays(inst_20470,inst_20474);
var inst_20476 = cljs.core.clj__GT_js(inst_20475);
var inst_20477 = element.popover(inst_20476);
var inst_20478 = element.popover("show");
var inst_20486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_20487 = (function (){var c__16485__auto____$1 = inst_20486;
return ((function (c__16485__auto____$1,inst_20459,inst_20460,inst_20461,inst_20462,inst_20463,inst_20464,inst_20465,inst_20466,inst_20467,inst_20468,inst_20469,inst_20470,inst_20471,inst_20472,inst_20473,inst_20474,inst_20475,inst_20476,inst_20477,inst_20478,inst_20486,state_val_20491,c__16485__auto___20505,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto____$1,inst_20459,inst_20460,inst_20461,inst_20462,inst_20463,inst_20464,inst_20465,inst_20466,inst_20467,inst_20468,inst_20469,inst_20470,inst_20471,inst_20472,inst_20473,inst_20474,inst_20475,inst_20476,inst_20477,inst_20478,inst_20486,state_val_20491,c__16485__auto___20505,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (state_20484){
var state_val_20485 = (state_20484[(1)]);
if((state_val_20485 === (1))){
var inst_20479 = cljs.core.async.timeout((2500));
var state_20484__$1 = state_20484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20484__$1,(2),inst_20479);
} else {
if((state_val_20485 === (2))){
var inst_20481 = (state_20484[(2)]);
var inst_20482 = element.popover("destroy");
var state_20484__$1 = (function (){var statearr_20493 = state_20484;
(statearr_20493[(7)] = inst_20481);

return statearr_20493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20484__$1,inst_20482);
} else {
return null;
}
}
});})(c__16485__auto____$1,inst_20459,inst_20460,inst_20461,inst_20462,inst_20463,inst_20464,inst_20465,inst_20466,inst_20467,inst_20468,inst_20469,inst_20470,inst_20471,inst_20472,inst_20473,inst_20474,inst_20475,inst_20476,inst_20477,inst_20478,inst_20486,state_val_20491,c__16485__auto___20505,ap,h_code,element,the_datasource,row,lat,lon,coord))
;
return ((function (switch__16410__auto__,c__16485__auto____$1,inst_20459,inst_20460,inst_20461,inst_20462,inst_20463,inst_20464,inst_20465,inst_20466,inst_20467,inst_20468,inst_20469,inst_20470,inst_20471,inst_20472,inst_20473,inst_20474,inst_20475,inst_20476,inst_20477,inst_20478,inst_20486,state_val_20491,c__16485__auto___20505,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function() {
var prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto__ = null;
var prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto____0 = (function (){
var statearr_20494 = [null,null,null,null,null,null,null,null];
(statearr_20494[(0)] = prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto__);

(statearr_20494[(1)] = (1));

return statearr_20494;
});
var prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto____1 = (function (state_20484){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_20484);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e20495){var ex__16414__auto__ = e20495;
var statearr_20496_20506 = state_20484;
(statearr_20496_20506[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_20484[(4)]))){
var statearr_20497_20507 = state_20484;
(statearr_20497_20507[(1)] = cljs.core.first((state_20484[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__20508 = state_20484;
state_20484 = G__20508;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto__ = function(state_20484){
switch(arguments.length){
case 0:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto____0.call(this);
case 1:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto____1.call(this,state_20484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto____0;
prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto____1;
return prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto____$1,inst_20459,inst_20460,inst_20461,inst_20462,inst_20463,inst_20464,inst_20465,inst_20466,inst_20467,inst_20468,inst_20469,inst_20470,inst_20471,inst_20472,inst_20473,inst_20474,inst_20475,inst_20476,inst_20477,inst_20478,inst_20486,state_val_20491,c__16485__auto___20505,ap,h_code,element,the_datasource,row,lat,lon,coord))
})();
var state__16487__auto__ = (function (){var statearr_20498 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_20498[(6)] = c__16485__auto____$1);

return statearr_20498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});
;})(c__16485__auto____$1,inst_20459,inst_20460,inst_20461,inst_20462,inst_20463,inst_20464,inst_20465,inst_20466,inst_20467,inst_20468,inst_20469,inst_20470,inst_20471,inst_20472,inst_20473,inst_20474,inst_20475,inst_20476,inst_20477,inst_20478,inst_20486,state_val_20491,c__16485__auto___20505,ap,h_code,element,the_datasource,row,lat,lon,coord))
})();
var inst_20488 = cljs.core.async.impl.dispatch.run(inst_20487);
var state_20490__$1 = (function (){var statearr_20499 = state_20490;
(statearr_20499[(7)] = inst_20459);

(statearr_20499[(8)] = inst_20478);

(statearr_20499[(9)] = inst_20488);

(statearr_20499[(10)] = inst_20477);

(statearr_20499[(11)] = inst_20469);

return statearr_20499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20490__$1,inst_20486);
} else {
return null;
}
}
});})(c__16485__auto___20505,ap,h_code,element,the_datasource,row,lat,lon,coord))
;
return ((function (switch__16410__auto__,c__16485__auto___20505,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function() {
var prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto__ = null;
var prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto____0 = (function (){
var statearr_20500 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20500[(0)] = prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto__);

(statearr_20500[(1)] = (1));

return statearr_20500;
});
var prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto____1 = (function (state_20490){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_20490);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e20501){var ex__16414__auto__ = e20501;
var statearr_20502_20509 = state_20490;
(statearr_20502_20509[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_20490[(4)]))){
var statearr_20503_20510 = state_20490;
(statearr_20503_20510[(1)] = cljs.core.first((state_20490[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__20511 = state_20490;
state_20490 = G__20511;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto__ = function(state_20490){
switch(arguments.length){
case 0:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto____0.call(this);
case 1:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto____1.call(this,state_20490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto____0;
prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto____1;
return prais2$open_layers_map$zoom_to_feature_$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___20505,ap,h_code,element,the_datasource,row,lat,lon,coord))
})();
var state__16487__auto__ = (function (){var statearr_20504 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_20504[(6)] = c__16485__auto___20505);

return statearr_20504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___20505,ap,h_code,element,the_datasource,row,lat,lon,coord))
);


return element.popover("hide");
});
/**
 * 
 */
prais2.open_layers_map.london_button = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("button",({"onClick": (function (p1__20512_SHARP_){
return prais2.core.click__GT_event_bus(p1__20512_SHARP_,cljs.core.cst$kw$just_DASH_london,null,null);
}), "onTouchStart": (function (p1__20513_SHARP_){
return prais2.core.click__GT_event_bus(p1__20513_SHARP_,cljs.core.cst$kw$just_DASH_london,null,null);
}), "tabIndex": (0), "className": "btn-info london-button"}),"Just London");
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"london-button");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20514__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20514 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20515__i = 0, G__20515__a = new Array(arguments.length -  0);
while (G__20515__i < G__20515__a.length) {G__20515__a[G__20515__i] = arguments[G__20515__i + 0]; ++G__20515__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20515__a,0,null);
} 
return G__20514__delegate.call(this,args__14302__auto__);};
G__20514.cljs$lang$maxFixedArity = 0;
G__20514.cljs$lang$applyTo = (function (arglist__20516){
var args__14302__auto__ = cljs.core.seq(arglist__20516);
return G__20514__delegate(args__14302__auto__);
});
G__20514.cljs$core$IFn$_invoke$arity$variadic = G__20514__delegate;
return G__20514;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.home_button = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("button",({"onClick": (function (p1__20517_SHARP_){
return prais2.core.click__GT_event_bus(p1__20517_SHARP_,cljs.core.cst$kw$reset_DASH_map_DASH_to_DASH_home,null,null);
}), "onTouchStart": (function (p1__20518_SHARP_){
return prais2.core.click__GT_event_bus(p1__20518_SHARP_,cljs.core.cst$kw$reset_DASH_map_DASH_to_DASH_home,null,null);
}), "tabIndex": (0), "className": "btn-info h-button"}),"All UK");
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"home-button");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20519__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20519 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20520__i = 0, G__20520__a = new Array(arguments.length -  0);
while (G__20520__i < G__20520__a.length) {G__20520__a[G__20520__i] = arguments[G__20520__i + 0]; ++G__20520__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20520__a,0,null);
} 
return G__20519__delegate.call(this,args__14302__auto__);};
G__20519.cljs$lang$maxFixedArity = 0;
G__20519.cljs$lang$applyTo = (function (arglist__20521){
var args__14302__auto__ = cljs.core.seq(arglist__20521);
return G__20519__delegate(args__14302__auto__);
});
G__20519.cljs$core$IFn$_invoke$arity$variadic = G__20519__delegate;
return G__20519;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.hospital_item = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (row){
return React.createElement("li",null,React.createElement("a",({"tabIndex": (0), "onClick": (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_on_DASH_map_DASH_menu_DASH_item,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(row))], null));
})}),sablono.interpreter.interpret(cljs.core.cst$kw$h_DASH_name.cljs$core$IFn$_invoke$arity$1(row))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"hospital-item");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20522__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20522 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20523__i = 0, G__20523__a = new Array(arguments.length -  0);
while (G__20523__i < G__20523__a.length) {G__20523__a[G__20523__i] = arguments[G__20523__i + 0]; ++G__20523__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20523__a,0,null);
} 
return G__20522__delegate.call(this,args__14302__auto__);};
G__20522.cljs$lang$maxFixedArity = 0;
G__20522.cljs$lang$applyTo = (function (arglist__20524){
var args__14302__auto__ = cljs.core.seq(arglist__20524);
return G__20522__delegate(args__14302__auto__);
});
G__20522.cljs$core$IFn$_invoke$arity$variadic = G__20522__delegate;
return G__20522;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.hospital_list = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
var rows = (function (){var G__20526 = cljs.core.cst$kw$hosp_DASH_data.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app));
var fexpr__20525 = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app));
return (fexpr__20525.cljs$core$IFn$_invoke$arity$1 ? fexpr__20525.cljs$core$IFn$_invoke$arity$1(G__20526) : fexpr__20525.call(null,G__20526));
})();
return React.createElement("ul",({"aria-labelled-by": "drop1", "className": "dropdown-menu"}),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(prais2.utils.key_with,cljs.core.map.cljs$core$IFn$_invoke$arity$2(prais2.open_layers_map.hospital_item,rows))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-list");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20527__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20527 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20528__i = 0, G__20528__a = new Array(arguments.length -  0);
while (G__20528__i < G__20528__a.length) {G__20528__a[G__20528__i] = arguments[G__20528__i + 0]; ++G__20528__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20528__a,0,null);
} 
return G__20527__delegate.call(this,args__14302__auto__);};
G__20527.cljs$lang$maxFixedArity = 0;
G__20527.cljs$lang$applyTo = (function (arglist__20529){
var args__14302__auto__ = cljs.core.seq(arglist__20529);
return G__20527__delegate(args__14302__auto__);
});
G__20527.cljs$core$IFn$_invoke$arity$variadic = G__20527__delegate;
return G__20527;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.hospitals = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("div",({"id": "open-map", "tabIndex": (0), "key": (1), "className": "hospital-map"}),sablono.interpreter.interpret((prais2.open_layers_map.london_button.cljs$core$IFn$_invoke$arity$0 ? prais2.open_layers_map.london_button.cljs$core$IFn$_invoke$arity$0() : prais2.open_layers_map.london_button.call(null))),sablono.interpreter.interpret((prais2.open_layers_map.home_button.cljs$core$IFn$_invoke$arity$0 ? prais2.open_layers_map.home_button.cljs$core$IFn$_invoke$arity$0() : prais2.open_layers_map.home_button.call(null))),React.createElement("div",({"key": (2), "className": "col-xs-12"}),React.createElement("div",({"id": "popup", "key": (2)}))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.open_layers_map.map_view,rum.core.reactive], null)),"hospitals");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20532__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20532 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20533__i = 0, G__20533__a = new Array(arguments.length -  0);
while (G__20533__i < G__20533__a.length) {G__20533__a[G__20533__i] = arguments[G__20533__i + 0]; ++G__20533__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20533__a,0,null);
} 
return G__20532__delegate.call(this,args__14302__auto__);};
G__20532.cljs$lang$maxFixedArity = 0;
G__20532.cljs$lang$applyTo = (function (arglist__20534){
var args__14302__auto__ = cljs.core.seq(arglist__20534);
return G__20532__delegate(args__14302__auto__);
});
G__20532.cljs$core$IFn$_invoke$arity$variadic = G__20532__delegate;
return G__20532;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
