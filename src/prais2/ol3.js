//
// Provide a single module that requires parts of the openlayers library so we can get a google closure
// optimised compile
//
goog.provide("prais2.ol3");

goog.require("ol.Map");
goog.require("ol.layer.Tile");
goog.require('ol.layer.Vector');
goog.require("ol.View");
goog.require("ol.proj");
goog.require('ol.source.OSM');
goog.require('ol.source.Vector');
goog.require("ol.style.Style");
goog.require("ol.style.Icon");
goog.require("ol.Feature");
goog.require("ol.Overlay");
goog.require("ol.geom.Point");
goog.require("ol.animation");
