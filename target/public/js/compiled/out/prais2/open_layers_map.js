// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.open_layers_map');
goog.require('cljs.core');
goog.require('cljsjs.jquery');
goog.require('ol.source.OSM');
goog.require('ol.Feature');
goog.require('prais2.data');
goog.require('prais2.content');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('prais2.core');
goog.require('ol.Overlay');
goog.require('prais2.utils');
prais2.open_layers_map.iconStyle = (new ol.style.Style(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image","image",-58725096),(new ol.style.Icon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(33)], null)),new cljs.core.Keyword(null,"anchorXUnits","anchorXUnits",612639841),"fraction",new cljs.core.Keyword(null,"anchorYUnits","anchorYUnits",-1739905451),"pixels",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.6,new cljs.core.Keyword(null,"src","src",-1651076051),"/assets/icon.png"], null))))], null))));
/**
 * Generate map coordinates given longitude and latitude in degrees
 */
prais2.open_layers_map.map_point = (function prais2$open_layers_map$map_point(lat,lon){
return ol.proj.transform(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null)),"EPSG:4326","EPSG:3857");
});
prais2.open_layers_map.hospital_marker = (function prais2$open_layers_map$hospital_marker(row){
var marker = (new ol.Feature(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),(new ol.geom.Point(prais2.open_layers_map.map_point.call(null,new cljs.core.Keyword(null,"h-lat","h-lat",-1498479031).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"h-lon","h-lon",-1878922256).cljs$core$IFn$_invoke$arity$1(row)))),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(row)),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"h-name","h-name",1046194554).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"n-ops","n-ops",921161673).cljs$core$IFn$_invoke$arity$1(row)], null))));
marker.setStyle(prais2.open_layers_map.iconStyle);

return marker;
});
prais2.open_layers_map.hospital_markers = (function prais2$open_layers_map$hospital_markers(){
var rows = cljs.core.rest.call(null,prais2.data.table_data.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app))).call(null));
return cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,prais2.open_layers_map.hospital_marker,rows));
});
prais2.open_layers_map.vectorSource = (function prais2$open_layers_map$vectorSource(){
return (new ol.source.Vector(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"features","features",-1146962336),prais2.open_layers_map.hospital_markers.call(null)], null))));
});
prais2.open_layers_map.vectorLayer = (function prais2$open_layers_map$vectorLayer(){
return (new ol.layer.Vector(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),prais2.open_layers_map.vectorSource.call(null)], null))));
});
prais2.open_layers_map.tileLayer = (new ol.layer.Tile(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preload","preload",1646824722),(4),new cljs.core.Keyword(null,"source","source",-433931539),(new ol.source.OSM())], null))));
prais2.open_layers_map.mapView = (new ol.View(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),prais2.open_layers_map.map_point.call(null,53.7,-3.4),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),5.5], null))));
prais2.open_layers_map.project = (function prais2$open_layers_map$project(lat,lon){
return ol.proj.fromLonLat(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null)));
});
prais2.open_layers_map.map_view = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
prais2.open_layers_map.hospital_map = (new ol.Map(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"target","target",253001721),"open-map",new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.open_layers_map.tileLayer,prais2.open_layers_map.vectorLayer.call(null)], null),new cljs.core.Keyword(null,"view","view",1247994814),prais2.open_layers_map.mapView,new cljs.core.Keyword(null,"interactions","interactions",550841811),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"loadTilesWhileAnimating","loadTilesWhileAnimating",960082169),true], null))));

prais2.open_layers_map.popup = (new ol.Overlay(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element","element",1974019749),prais2.core.el.call(null,"popup"),new cljs.core.Keyword(null,"positioning","positioning",1104332550),"bottom-center",new cljs.core.Keyword(null,"stopEvent","stopEvent",988196589),false], null))));

prais2.open_layers_map.once_only = (function (){
prais2.open_layers_map.hospital_map.addOverlay(prais2.open_layers_map.popup);

return prais2.open_layers_map.hospital_map.on("click",prais2.open_layers_map.map_click_handler);
})()
;

return state;
})], null);
prais2.open_layers_map.map_click_handler = (function prais2$open_layers_map$map_click_handler(event){
var the_map = prais2.open_layers_map.hospital_map;
var feature = the_map.forEachFeatureAtPixel(event.pixel,((function (the_map){
return (function (a,_){
return a;
});})(the_map))
);
if(cljs.core.truth_(feature)){
return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click-on-map-marker","click-on-map-marker",-670957068),cljs.core.keyword.call(null,feature.get("code")),event], null));
} else {
return null;
}
});
prais2.open_layers_map.zoom_time = (1000);
prais2.open_layers_map.zoom_to_location = (function prais2$open_layers_map$zoom_to_location(var_args){
var args35360 = [];
var len__25738__auto___35363 = arguments.length;
var i__25739__auto___35364 = (0);
while(true){
if((i__25739__auto___35364 < len__25738__auto___35363)){
args35360.push((arguments[i__25739__auto___35364]));

var G__35365 = (i__25739__auto___35364 + (1));
i__25739__auto___35364 = G__35365;
continue;
} else {
}
break;
}

var G__35362 = args35360.length;
switch (G__35362) {
case 2:
return prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35360.length)].join('')));

}
});

prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$2 = (function (lat,lon){
return prais2.open_layers_map.zoom_to_location.call(null,lat,lon,(4));
});

prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$3 = (function (lat,lon,resolution){
cljs.core.prn.call(null,[cljs.core.str("resolution = "),cljs.core.str(resolution)].join(''));

var pan = ol.animation.pan(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",1444101068),prais2.open_layers_map.zoom_time,new cljs.core.Keyword(null,"source","source",-433931539),prais2.open_layers_map.mapView.getCenter(),new cljs.core.Keyword(null,"resolution","resolution",-756075601),prais2.open_layers_map.mapView.getResolution()], null)));
var zoom = ol.animation.zoom(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",1444101068),prais2.open_layers_map.zoom_time,new cljs.core.Keyword(null,"source","source",-433931539),prais2.open_layers_map.mapView.getCenter(),new cljs.core.Keyword(null,"resolution","resolution",-756075601),prais2.open_layers_map.mapView.getResolution()], null)));
prais2.open_layers_map.mapView.setCenter(prais2.open_layers_map.project.call(null,lat,lon));

prais2.open_layers_map.mapView.setResolution(resolution);

return prais2.open_layers_map.hospital_map.beforeRender(pan,zoom);
});

prais2.open_layers_map.zoom_to_location.cljs$lang$maxFixedArity = 3;

/**
 * revert to map home location and zoom
 */
prais2.open_layers_map.go_home = (function prais2$open_layers_map$go_home(){
return prais2.open_layers_map.zoom_to_location.call(null,54.5,(-3),(4000));
});
/**
 * revert to map home location and zoom
 */
prais2.open_layers_map.go_london = (function prais2$open_layers_map$go_london(){
return prais2.open_layers_map.zoom_to_location.call(null,51.52,-0.15,(40));
});
/**
 * Handle a click on a map feature.
 *   This should behave like a react render even though it uses open-layers map software and so
 *   bypasses React. We should render from map-state stored in the app atom.
 */
prais2.open_layers_map.zoom_to_feature = (function prais2$open_layers_map$zoom_to_feature(){
var ap = cljs.core.deref.call(null,prais2.core.app);
var h_code = new cljs.core.Keyword(null,"map-h-code","map-h-code",-631185396).cljs$core$IFn$_invoke$arity$1(ap);
var element = $("#popup");
var the_datasource = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(ap);
var row = h_code.call(null,prais2.data.rows_by_code.call(null,the_datasource).call(null));
var lat = new cljs.core.Keyword(null,"h-lat","h-lat",-1498479031).cljs$core$IFn$_invoke$arity$1(row);
var lon = new cljs.core.Keyword(null,"h-lon","h-lon",-1878922256).cljs$core$IFn$_invoke$arity$1(row);
var coord = prais2.open_layers_map.map_point.call(null,lat,lon);
prais2.open_layers_map.zoom_to_location.call(null,lat,lon);

var c__28444__auto___35465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___35465,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___35465,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (state_35447){
var state_val_35448 = (state_35447[(1)]);
if((state_val_35448 === (1))){
var inst_35416 = cljs.core.async.timeout.call(null,prais2.open_layers_map.zoom_time);
var state_35447__$1 = state_35447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35447__$1,(2),inst_35416);
} else {
if((state_val_35448 === (2))){
var inst_35418 = (state_35447[(2)]);
var inst_35419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35420 = cljs.core.first.call(null,coord);
var inst_35421 = cljs.core.second.call(null,coord);
var inst_35422 = ((150) + inst_35421);
var inst_35423 = [inst_35420,inst_35422];
var inst_35424 = (new cljs.core.PersistentVector(null,2,(5),inst_35419,inst_35423,null));
var inst_35425 = cljs.core.clj__GT_js.call(null,inst_35424);
var inst_35426 = prais2.open_layers_map.popup.setPosition(inst_35425);
var inst_35427 = [new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"content","content",15833224)];
var inst_35428 = new cljs.core.Keyword(null,"h-name","h-name",1046194554).cljs$core$IFn$_invoke$arity$1(row);
var inst_35429 = new cljs.core.Keyword(null,"n-ops","n-ops",921161673).cljs$core$IFn$_invoke$arity$1(row);
var inst_35430 = [cljs.core.str("<h4>"),cljs.core.str(inst_35428),cljs.core.str("</h4>"),cljs.core.str(inst_35429),cljs.core.str(" operations")].join('');
var inst_35431 = ["top",true,inst_35430];
var inst_35432 = cljs.core.PersistentHashMap.fromArrays(inst_35427,inst_35431);
var inst_35433 = cljs.core.clj__GT_js.call(null,inst_35432);
var inst_35434 = element.popover(inst_35433);
var inst_35435 = element.popover("show");
var inst_35443 = cljs.core.async.chan.call(null,(1));
var inst_35444 = (function (){var c__28444__auto____$1 = inst_35443;
return ((function (c__28444__auto____$1,inst_35418,inst_35419,inst_35420,inst_35421,inst_35422,inst_35423,inst_35424,inst_35425,inst_35426,inst_35427,inst_35428,inst_35429,inst_35430,inst_35431,inst_35432,inst_35433,inst_35434,inst_35435,inst_35443,state_val_35448,c__28444__auto___35465,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto____$1,inst_35418,inst_35419,inst_35420,inst_35421,inst_35422,inst_35423,inst_35424,inst_35425,inst_35426,inst_35427,inst_35428,inst_35429,inst_35430,inst_35431,inst_35432,inst_35433,inst_35434,inst_35435,inst_35443,state_val_35448,c__28444__auto___35465,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (state_35441){
var state_val_35442 = (state_35441[(1)]);
if((state_val_35442 === (1))){
var inst_35436 = cljs.core.async.timeout.call(null,(2500));
var state_35441__$1 = state_35441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35441__$1,(2),inst_35436);
} else {
if((state_val_35442 === (2))){
var inst_35438 = (state_35441[(2)]);
var inst_35439 = element.popover("destroy");
var state_35441__$1 = (function (){var statearr_35449 = state_35441;
(statearr_35449[(7)] = inst_35438);

return statearr_35449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35441__$1,inst_35439);
} else {
return null;
}
}
});})(c__28444__auto____$1,inst_35418,inst_35419,inst_35420,inst_35421,inst_35422,inst_35423,inst_35424,inst_35425,inst_35426,inst_35427,inst_35428,inst_35429,inst_35430,inst_35431,inst_35432,inst_35433,inst_35434,inst_35435,inst_35443,state_val_35448,c__28444__auto___35465,ap,h_code,element,the_datasource,row,lat,lon,coord))
;
return ((function (switch__28332__auto__,c__28444__auto____$1,inst_35418,inst_35419,inst_35420,inst_35421,inst_35422,inst_35423,inst_35424,inst_35425,inst_35426,inst_35427,inst_35428,inst_35429,inst_35430,inst_35431,inst_35432,inst_35433,inst_35434,inst_35435,inst_35443,state_val_35448,c__28444__auto___35465,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function() {
var prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto__ = null;
var prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto____0 = (function (){
var statearr_35453 = [null,null,null,null,null,null,null,null];
(statearr_35453[(0)] = prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto__);

(statearr_35453[(1)] = (1));

return statearr_35453;
});
var prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto____1 = (function (state_35441){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_35441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e35454){if((e35454 instanceof Object)){
var ex__28336__auto__ = e35454;
var statearr_35455_35466 = state_35441;
(statearr_35455_35466[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35467 = state_35441;
state_35441 = G__35467;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto__ = function(state_35441){
switch(arguments.length){
case 0:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto____0.call(this);
case 1:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto____1.call(this,state_35441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto____0;
prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto____1;
return prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto____$1,inst_35418,inst_35419,inst_35420,inst_35421,inst_35422,inst_35423,inst_35424,inst_35425,inst_35426,inst_35427,inst_35428,inst_35429,inst_35430,inst_35431,inst_35432,inst_35433,inst_35434,inst_35435,inst_35443,state_val_35448,c__28444__auto___35465,ap,h_code,element,the_datasource,row,lat,lon,coord))
})();
var state__28446__auto__ = (function (){var statearr_35456 = f__28445__auto__.call(null);
(statearr_35456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto____$1);

return statearr_35456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});
;})(c__28444__auto____$1,inst_35418,inst_35419,inst_35420,inst_35421,inst_35422,inst_35423,inst_35424,inst_35425,inst_35426,inst_35427,inst_35428,inst_35429,inst_35430,inst_35431,inst_35432,inst_35433,inst_35434,inst_35435,inst_35443,state_val_35448,c__28444__auto___35465,ap,h_code,element,the_datasource,row,lat,lon,coord))
})();
var inst_35445 = cljs.core.async.impl.dispatch.run.call(null,inst_35444);
var state_35447__$1 = (function (){var statearr_35457 = state_35447;
(statearr_35457[(7)] = inst_35445);

(statearr_35457[(8)] = inst_35434);

(statearr_35457[(9)] = inst_35418);

(statearr_35457[(10)] = inst_35426);

(statearr_35457[(11)] = inst_35435);

return statearr_35457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35447__$1,inst_35443);
} else {
return null;
}
}
});})(c__28444__auto___35465,ap,h_code,element,the_datasource,row,lat,lon,coord))
;
return ((function (switch__28332__auto__,c__28444__auto___35465,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function() {
var prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto__ = null;
var prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto____0 = (function (){
var statearr_35461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35461[(0)] = prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto__);

(statearr_35461[(1)] = (1));

return statearr_35461;
});
var prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto____1 = (function (state_35447){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_35447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e35462){if((e35462 instanceof Object)){
var ex__28336__auto__ = e35462;
var statearr_35463_35468 = state_35447;
(statearr_35463_35468[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35469 = state_35447;
state_35447 = G__35469;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto__ = function(state_35447){
switch(arguments.length){
case 0:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto____0.call(this);
case 1:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto____1.call(this,state_35447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto____0;
prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto____1;
return prais2$open_layers_map$zoom_to_feature_$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___35465,ap,h_code,element,the_datasource,row,lat,lon,coord))
})();
var state__28446__auto__ = (function (){var statearr_35464 = f__28445__auto__.call(null);
(statearr_35464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___35465);

return statearr_35464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___35465,ap,h_code,element,the_datasource,row,lat,lon,coord))
);


return element.popover("hide");
});
/**
 * 
 */
prais2.open_layers_map.london_button = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("button",{"onClick": (function (p1__35470_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__35470_SHARP_,new cljs.core.Keyword(null,"just-london","just-london",-1714493961),null,null);
}), "onTouchStart": (function (p1__35471_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__35471_SHARP_,new cljs.core.Keyword(null,"just-london","just-london",-1714493961),null,null);
}), "tabIndex": (0), "className": "btn-info london-button"},"Just London");
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"london-button");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35472__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35472 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35473__i = 0, G__35473__a = new Array(arguments.length -  0);
while (G__35473__i < G__35473__a.length) {G__35473__a[G__35473__i] = arguments[G__35473__i + 0]; ++G__35473__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35473__a,0);
} 
return G__35472__delegate.call(this,args__27116__auto__);};
G__35472.cljs$lang$maxFixedArity = 0;
G__35472.cljs$lang$applyTo = (function (arglist__35474){
var args__27116__auto__ = cljs.core.seq(arglist__35474);
return G__35472__delegate(args__27116__auto__);
});
G__35472.cljs$core$IFn$_invoke$arity$variadic = G__35472__delegate;
return G__35472;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.home_button = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("button",{"onClick": (function (p1__35475_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__35475_SHARP_,new cljs.core.Keyword(null,"reset-map-to-home","reset-map-to-home",1348557515),null,null);
}), "onTouchStart": (function (p1__35476_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__35476_SHARP_,new cljs.core.Keyword(null,"reset-map-to-home","reset-map-to-home",1348557515),null,null);
}), "tabIndex": (0), "className": "btn-info h-button"},"All UK");
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"home-button");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35477__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35477 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35478__i = 0, G__35478__a = new Array(arguments.length -  0);
while (G__35478__i < G__35478__a.length) {G__35478__a[G__35478__i] = arguments[G__35478__i + 0]; ++G__35478__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35478__a,0);
} 
return G__35477__delegate.call(this,args__27116__auto__);};
G__35477.cljs$lang$maxFixedArity = 0;
G__35477.cljs$lang$applyTo = (function (arglist__35479){
var args__27116__auto__ = cljs.core.seq(arglist__35479);
return G__35477__delegate(args__27116__auto__);
});
G__35477.cljs$core$IFn$_invoke$arity$variadic = G__35477__delegate;
return G__35477;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.hospital_item = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (row){
return React.createElement("li",null,React.createElement("a",{"tabIndex": (0), "onClick": (function (){
return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click-on-map-menu-item","click-on-map-menu-item",-2061025456),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(row))], null));
})},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"h-name","h-name",1046194554).cljs$core$IFn$_invoke$arity$1(row))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"hospital-item");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35480__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35480 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35481__i = 0, G__35481__a = new Array(arguments.length -  0);
while (G__35481__i < G__35481__a.length) {G__35481__a[G__35481__i] = arguments[G__35481__i + 0]; ++G__35481__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35481__a,0);
} 
return G__35480__delegate.call(this,args__27116__auto__);};
G__35480.cljs$lang$maxFixedArity = 0;
G__35480.cljs$lang$applyTo = (function (arglist__35482){
var args__27116__auto__ = cljs.core.seq(arglist__35482);
return G__35480__delegate(args__27116__auto__);
});
G__35480.cljs$core$IFn$_invoke$arity$variadic = G__35480__delegate;
return G__35480;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.hospital_list = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,(function (){var rows = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)).call(null,prais2.content.datasources);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu","ul.dropdown-menu",-867384656),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-labelled-by","aria-labelled-by",1277470114),"drop1"], null),cljs.core.map_indexed.call(null,prais2.utils.key_with,cljs.core.map.call(null,prais2.open_layers_map.hospital_item,rows))], null);
})());
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-list");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35483__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35483 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35484__i = 0, G__35484__a = new Array(arguments.length -  0);
while (G__35484__i < G__35484__a.length) {G__35484__a[G__35484__i] = arguments[G__35484__i + 0]; ++G__35484__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35484__a,0);
} 
return G__35483__delegate.call(this,args__27116__auto__);};
G__35483.cljs$lang$maxFixedArity = 0;
G__35483.cljs$lang$applyTo = (function (arglist__35485){
var args__27116__auto__ = cljs.core.seq(arglist__35485);
return G__35483__delegate(args__27116__auto__);
});
G__35483.cljs$core$IFn$_invoke$arity$variadic = G__35483__delegate;
return G__35483;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.hospitals = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",{"id": "open-map", "tabIndex": (0), "key": (1), "className": "hospital-map"},sablono.interpreter.interpret.call(null,prais2.open_layers_map.london_button.call(null)),sablono.interpreter.interpret.call(null,prais2.open_layers_map.home_button.call(null)),React.createElement("div",{"key": (2), "className": "col-xs-12"},React.createElement("div",{"id": "popup", "key": (2)})));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.open_layers_map.map_view,rum.core.reactive], null)),"hospitals");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35488__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35488 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35489__i = 0, G__35489__a = new Array(arguments.length -  0);
while (G__35489__i < G__35489__a.length) {G__35489__a[G__35489__i] = arguments[G__35489__i + 0]; ++G__35489__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35489__a,0);
} 
return G__35488__delegate.call(this,args__27116__auto__);};
G__35488.cljs$lang$maxFixedArity = 0;
G__35488.cljs$lang$applyTo = (function (arglist__35490){
var args__27116__auto__ = cljs.core.seq(arglist__35490);
return G__35488__delegate(args__27116__auto__);
});
G__35488.cljs$core$IFn$_invoke$arity$variadic = G__35488__delegate;
return G__35488;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=open_layers_map.js.map?rel=1629049578281