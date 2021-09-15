// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.open_layers_map');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljsjs.jquery');
goog.require('cljs.core.async');
goog.require('prais2.core');
goog.require('prais2.content');
goog.require('prais2.data');
goog.require('prais2.utils');
goog.require('ol.Feature');
goog.require('ol.Overlay');
goog.require('ol.source.OSM');
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
if((typeof prais2 !== 'undefined') && (typeof prais2.open_layers_map !== 'undefined') && (typeof prais2.open_layers_map.ol_db !== 'undefined')){
} else {
prais2.open_layers_map.ol_db = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hospital-map","hospital-map",-2026142790),null,new cljs.core.Keyword(null,"popup","popup",635890211),null], null));
}
prais2.open_layers_map.map_view = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var new_state = cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"hospital-map","hospital-map",-2026142790),(new ol.Map(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"target","target",253001721),"open-map",new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.open_layers_map.tileLayer,prais2.open_layers_map.vectorLayer.call(null)], null),new cljs.core.Keyword(null,"view","view",1247994814),prais2.open_layers_map.mapView,new cljs.core.Keyword(null,"interactions","interactions",550841811),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"loadTilesWhileAnimating","loadTilesWhileAnimating",960082169),true], null))))),new cljs.core.Keyword(null,"popup","popup",635890211),(new ol.Overlay(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element","element",1974019749),prais2.core.el.call(null,"popup"),new cljs.core.Keyword(null,"positioning","positioning",1104332550),"bottom-center",new cljs.core.Keyword(null,"stopEvent","stopEvent",988196589),false], null)))));
new_state.call(null,new cljs.core.Keyword(null,"hospital-map","hospital-map",-2026142790)).addOverlay(new_state.call(null,new cljs.core.Keyword(null,"popup","popup",635890211)));

new_state.call(null,new cljs.core.Keyword(null,"hospital-map","hospital-map",-2026142790)).on("click",prais2.open_layers_map.map_click_handler);

cljs.core.reset_BANG_.call(null,prais2.open_layers_map.ol_db,new_state);

return new_state;
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (_,___$1){
return false;
})], null);
prais2.open_layers_map.map_click_handler = (function prais2$open_layers_map$map_click_handler(event){
var the_map = cljs.core.deref.call(null,prais2.open_layers_map.ol_db).call(null,new cljs.core.Keyword(null,"hospital-map","hospital-map",-2026142790));
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
var G__21869 = arguments.length;
switch (G__21869) {
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
return prais2.open_layers_map.zoom_to_location.call(null,lat,lon,(4));
});

prais2.open_layers_map.zoom_to_location.cljs$core$IFn$_invoke$arity$3 = (function (lat,lon,resolution){
cljs.core.prn.call(null,["resolution = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolution)].join(''));

var pan = ol.animation.pan(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",1444101068),prais2.open_layers_map.zoom_time,new cljs.core.Keyword(null,"source","source",-433931539),prais2.open_layers_map.mapView.getCenter(),new cljs.core.Keyword(null,"resolution","resolution",-756075601),prais2.open_layers_map.mapView.getResolution()], null)));
var zoom = ol.animation.zoom(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",1444101068),prais2.open_layers_map.zoom_time,new cljs.core.Keyword(null,"source","source",-433931539),prais2.open_layers_map.mapView.getCenter(),new cljs.core.Keyword(null,"resolution","resolution",-756075601),prais2.open_layers_map.mapView.getResolution()], null)));
prais2.open_layers_map.mapView.setCenter(prais2.open_layers_map.project.call(null,lat,lon));

prais2.open_layers_map.mapView.setResolution(resolution);

return cljs.core.deref.call(null,prais2.open_layers_map.ol_db).call(null,new cljs.core.Keyword(null,"hospital-map","hospital-map",-2026142790)).beforeRender(pan,zoom);
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

var c__18757__auto___21918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___21918,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___21918,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (state_21904){
var state_val_21905 = (state_21904[(1)]);
if((state_val_21905 === (1))){
var inst_21871 = cljs.core.async.timeout.call(null,prais2.open_layers_map.zoom_time);
var state_21904__$1 = state_21904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21904__$1,(2),inst_21871);
} else {
if((state_val_21905 === (2))){
var inst_21873 = (state_21904[(2)]);
var inst_21874 = cljs.core.deref.call(null,prais2.open_layers_map.ol_db);
var inst_21875 = inst_21874.call(null,new cljs.core.Keyword(null,"popup","popup",635890211));
var inst_21876 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21877 = cljs.core.first.call(null,coord);
var inst_21878 = cljs.core.second.call(null,coord);
var inst_21879 = ((150) + inst_21878);
var inst_21880 = [inst_21877,inst_21879];
var inst_21881 = (new cljs.core.PersistentVector(null,2,(5),inst_21876,inst_21880,null));
var inst_21882 = cljs.core.clj__GT_js.call(null,inst_21881);
var inst_21883 = inst_21875.setPosition(inst_21882);
var inst_21884 = [new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"content","content",15833224)];
var inst_21885 = new cljs.core.Keyword(null,"h-name","h-name",1046194554).cljs$core$IFn$_invoke$arity$1(row);
var inst_21886 = new cljs.core.Keyword(null,"n-ops","n-ops",921161673).cljs$core$IFn$_invoke$arity$1(row);
var inst_21887 = ["<h4>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21885),"</h4>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21886)," operations"].join('');
var inst_21888 = ["top",true,inst_21887];
var inst_21889 = cljs.core.PersistentHashMap.fromArrays(inst_21884,inst_21888);
var inst_21890 = cljs.core.clj__GT_js.call(null,inst_21889);
var inst_21891 = element.popover(inst_21890);
var inst_21892 = element.popover("show");
var inst_21900 = cljs.core.async.chan.call(null,(1));
var inst_21901 = (function (){var c__18757__auto____$1 = inst_21900;
return ((function (c__18757__auto____$1,inst_21873,inst_21874,inst_21875,inst_21876,inst_21877,inst_21878,inst_21879,inst_21880,inst_21881,inst_21882,inst_21883,inst_21884,inst_21885,inst_21886,inst_21887,inst_21888,inst_21889,inst_21890,inst_21891,inst_21892,inst_21900,state_val_21905,c__18757__auto___21918,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto____$1,inst_21873,inst_21874,inst_21875,inst_21876,inst_21877,inst_21878,inst_21879,inst_21880,inst_21881,inst_21882,inst_21883,inst_21884,inst_21885,inst_21886,inst_21887,inst_21888,inst_21889,inst_21890,inst_21891,inst_21892,inst_21900,state_val_21905,c__18757__auto___21918,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function (state_21898){
var state_val_21899 = (state_21898[(1)]);
if((state_val_21899 === (1))){
var inst_21893 = cljs.core.async.timeout.call(null,(2500));
var state_21898__$1 = state_21898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21898__$1,(2),inst_21893);
} else {
if((state_val_21899 === (2))){
var inst_21895 = (state_21898[(2)]);
var inst_21896 = element.popover("destroy");
var state_21898__$1 = (function (){var statearr_21906 = state_21898;
(statearr_21906[(7)] = inst_21895);

return statearr_21906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21898__$1,inst_21896);
} else {
return null;
}
}
});})(c__18757__auto____$1,inst_21873,inst_21874,inst_21875,inst_21876,inst_21877,inst_21878,inst_21879,inst_21880,inst_21881,inst_21882,inst_21883,inst_21884,inst_21885,inst_21886,inst_21887,inst_21888,inst_21889,inst_21890,inst_21891,inst_21892,inst_21900,state_val_21905,c__18757__auto___21918,ap,h_code,element,the_datasource,row,lat,lon,coord))
;
return ((function (switch__18683__auto__,c__18757__auto____$1,inst_21873,inst_21874,inst_21875,inst_21876,inst_21877,inst_21878,inst_21879,inst_21880,inst_21881,inst_21882,inst_21883,inst_21884,inst_21885,inst_21886,inst_21887,inst_21888,inst_21889,inst_21890,inst_21891,inst_21892,inst_21900,state_val_21905,c__18757__auto___21918,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function() {
var prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto__ = null;
var prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto____0 = (function (){
var statearr_21907 = [null,null,null,null,null,null,null,null];
(statearr_21907[(0)] = prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto__);

(statearr_21907[(1)] = (1));

return statearr_21907;
});
var prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto____1 = (function (state_21898){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_21898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e21908){var ex__18687__auto__ = e21908;
var statearr_21909_21919 = state_21898;
(statearr_21909_21919[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_21898[(4)]))){
var statearr_21910_21920 = state_21898;
(statearr_21910_21920[(1)] = cljs.core.first.call(null,(state_21898[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21921 = state_21898;
state_21898 = G__21921;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto__ = function(state_21898){
switch(arguments.length){
case 0:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto____0.call(this);
case 1:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto____1.call(this,state_21898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto____0;
prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto____1;
return prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto____$1,inst_21873,inst_21874,inst_21875,inst_21876,inst_21877,inst_21878,inst_21879,inst_21880,inst_21881,inst_21882,inst_21883,inst_21884,inst_21885,inst_21886,inst_21887,inst_21888,inst_21889,inst_21890,inst_21891,inst_21892,inst_21900,state_val_21905,c__18757__auto___21918,ap,h_code,element,the_datasource,row,lat,lon,coord))
})();
var state__18759__auto__ = (function (){var statearr_21911 = f__18758__auto__.call(null);
(statearr_21911[(6)] = c__18757__auto____$1);

return statearr_21911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});
;})(c__18757__auto____$1,inst_21873,inst_21874,inst_21875,inst_21876,inst_21877,inst_21878,inst_21879,inst_21880,inst_21881,inst_21882,inst_21883,inst_21884,inst_21885,inst_21886,inst_21887,inst_21888,inst_21889,inst_21890,inst_21891,inst_21892,inst_21900,state_val_21905,c__18757__auto___21918,ap,h_code,element,the_datasource,row,lat,lon,coord))
})();
var inst_21902 = cljs.core.async.impl.dispatch.run.call(null,inst_21901);
var state_21904__$1 = (function (){var statearr_21912 = state_21904;
(statearr_21912[(7)] = inst_21873);

(statearr_21912[(8)] = inst_21902);

(statearr_21912[(9)] = inst_21891);

(statearr_21912[(10)] = inst_21883);

(statearr_21912[(11)] = inst_21892);

return statearr_21912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21904__$1,inst_21900);
} else {
return null;
}
}
});})(c__18757__auto___21918,ap,h_code,element,the_datasource,row,lat,lon,coord))
;
return ((function (switch__18683__auto__,c__18757__auto___21918,ap,h_code,element,the_datasource,row,lat,lon,coord){
return (function() {
var prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto__ = null;
var prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto____0 = (function (){
var statearr_21913 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21913[(0)] = prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto__);

(statearr_21913[(1)] = (1));

return statearr_21913;
});
var prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto____1 = (function (state_21904){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_21904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e21914){var ex__18687__auto__ = e21914;
var statearr_21915_21922 = state_21904;
(statearr_21915_21922[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_21904[(4)]))){
var statearr_21916_21923 = state_21904;
(statearr_21916_21923[(1)] = cljs.core.first.call(null,(state_21904[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21924 = state_21904;
state_21904 = G__21924;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto__ = function(state_21904){
switch(arguments.length){
case 0:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto____0.call(this);
case 1:
return prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto____1.call(this,state_21904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto____0;
prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto____1;
return prais2$open_layers_map$zoom_to_feature_$_state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___21918,ap,h_code,element,the_datasource,row,lat,lon,coord))
})();
var state__18759__auto__ = (function (){var statearr_21917 = f__18758__auto__.call(null);
(statearr_21917[(6)] = c__18757__auto___21918);

return statearr_21917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___21918,ap,h_code,element,the_datasource,row,lat,lon,coord))
);


return element.popover("hide");
});
/**
 * 
 */
prais2.open_layers_map.london_button = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("button",({"onClick": (function (p1__21925_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__21925_SHARP_,new cljs.core.Keyword(null,"just-london","just-london",-1714493961),null,null);
}), "onTouchStart": (function (p1__21926_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__21926_SHARP_,new cljs.core.Keyword(null,"just-london","just-london",-1714493961),null,null);
}), "tabIndex": (0), "className": "btn-info london-button"}),"Just London");
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"london-button");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21927__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21927 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21928__i = 0, G__21928__a = new Array(arguments.length -  0);
while (G__21928__i < G__21928__a.length) {G__21928__a[G__21928__i] = arguments[G__21928__i + 0]; ++G__21928__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21928__a,0,null);
} 
return G__21927__delegate.call(this,args__16261__auto__);};
G__21927.cljs$lang$maxFixedArity = 0;
G__21927.cljs$lang$applyTo = (function (arglist__21929){
var args__16261__auto__ = cljs.core.seq(arglist__21929);
return G__21927__delegate(args__16261__auto__);
});
G__21927.cljs$core$IFn$_invoke$arity$variadic = G__21927__delegate;
return G__21927;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.home_button = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("button",({"onClick": (function (p1__21930_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__21930_SHARP_,new cljs.core.Keyword(null,"reset-map-to-home","reset-map-to-home",1348557515),null,null);
}), "onTouchStart": (function (p1__21931_SHARP_){
return prais2.core.click__GT_event_bus.call(null,p1__21931_SHARP_,new cljs.core.Keyword(null,"reset-map-to-home","reset-map-to-home",1348557515),null,null);
}), "tabIndex": (0), "className": "btn-info h-button"}),"All UK");
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"home-button");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21932__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21932 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21933__i = 0, G__21933__a = new Array(arguments.length -  0);
while (G__21933__i < G__21933__a.length) {G__21933__a[G__21933__i] = arguments[G__21933__i + 0]; ++G__21933__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21933__a,0,null);
} 
return G__21932__delegate.call(this,args__16261__auto__);};
G__21932.cljs$lang$maxFixedArity = 0;
G__21932.cljs$lang$applyTo = (function (arglist__21934){
var args__16261__auto__ = cljs.core.seq(arglist__21934);
return G__21932__delegate(args__16261__auto__);
});
G__21932.cljs$core$IFn$_invoke$arity$variadic = G__21932__delegate;
return G__21932;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.hospital_item = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (row){
return React.createElement("li",null,React.createElement("a",({"tabIndex": (0), "onClick": (function (){
return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click-on-map-menu-item","click-on-map-menu-item",-2061025456),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(row))], null));
})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"h-name","h-name",1046194554).cljs$core$IFn$_invoke$arity$1(row))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"hospital-item");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21935__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21935 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21936__i = 0, G__21936__a = new Array(arguments.length -  0);
while (G__21936__i < G__21936__a.length) {G__21936__a[G__21936__i] = arguments[G__21936__i + 0]; ++G__21936__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21936__a,0,null);
} 
return G__21935__delegate.call(this,args__16261__auto__);};
G__21935.cljs$lang$maxFixedArity = 0;
G__21935.cljs$lang$applyTo = (function (arglist__21937){
var args__16261__auto__ = cljs.core.seq(arglist__21937);
return G__21935__delegate(args__16261__auto__);
});
G__21935.cljs$core$IFn$_invoke$arity$variadic = G__21935__delegate;
return G__21935;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.hospital_list = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var rows = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)).call(null,new cljs.core.Keyword(null,"hosp-data","hosp-data",538848822).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)));
return React.createElement("ul",({"aria-labelled-by": "drop1", "className": "dropdown-menu"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,prais2.utils.key_with,cljs.core.map.call(null,prais2.open_layers_map.hospital_item,rows))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"hospital-list");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21938__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21938 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21939__i = 0, G__21939__a = new Array(arguments.length -  0);
while (G__21939__i < G__21939__a.length) {G__21939__a[G__21939__i] = arguments[G__21939__i + 0]; ++G__21939__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21939__a,0,null);
} 
return G__21938__delegate.call(this,args__16261__auto__);};
G__21938.cljs$lang$maxFixedArity = 0;
G__21938.cljs$lang$applyTo = (function (arglist__21940){
var args__16261__auto__ = cljs.core.seq(arglist__21940);
return G__21938__delegate(args__16261__auto__);
});
G__21938.cljs$core$IFn$_invoke$arity$variadic = G__21938__delegate;
return G__21938;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.open_layers_map.hospitals = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",({"id": "open-map", "tabIndex": (0), "key": (1), "className": "hospital-map"}),sablono.interpreter.interpret.call(null,prais2.open_layers_map.london_button.call(null)),sablono.interpreter.interpret.call(null,prais2.open_layers_map.home_button.call(null)),React.createElement("div",({"key": (2), "className": "col-xs-12"}),React.createElement("div",({"id": "popup", "key": (2)}))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prais2.open_layers_map.map_view,rum.core.reactive], null)),"hospitals");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21943__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21943 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21944__i = 0, G__21944__a = new Array(arguments.length -  0);
while (G__21944__i < G__21944__a.length) {G__21944__a[G__21944__i] = arguments[G__21944__i + 0]; ++G__21944__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21944__a,0,null);
} 
return G__21943__delegate.call(this,args__16261__auto__);};
G__21943.cljs$lang$maxFixedArity = 0;
G__21943.cljs$lang$applyTo = (function (arglist__21945){
var args__16261__auto__ = cljs.core.seq(arglist__21945);
return G__21943__delegate(args__16261__auto__);
});
G__21943.cljs$core$IFn$_invoke$arity$variadic = G__21943__delegate;
return G__21943;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=open_layers_map.js.map
