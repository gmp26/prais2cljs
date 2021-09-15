// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('prais2.content');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
prais2.content.get_mugshots = (function prais2$content$get_mugshots(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["christina","david","tim","emily B","mike","emily J","joanne"], null);
});
prais2.content.mugshot_data = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$christina,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"christina",cljs.core.cst$kw$name,"Christina",cljs.core.cst$kw$org,"UCL"], null),cljs.core.cst$kw$david,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"david",cljs.core.cst$kw$name,"David",cljs.core.cst$kw$org,"Camb"], null),cljs.core.cst$kw$mike,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"mike",cljs.core.cst$kw$name,"Mike",cljs.core.cst$kw$org,"Camb"], null),cljs.core.cst$kw$tim,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"tim",cljs.core.cst$kw$name,"Tim",cljs.core.cst$kw$org,"KCL"], null),cljs.core.cst$kw$emily_DASH_b,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"emily B",cljs.core.cst$kw$name,"Emily Blackshaw",cljs.core.cst$kw$org,"KCL"], null),cljs.core.cst$kw$emily_DASH_j,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"emily J",cljs.core.cst$kw$name,"Emily Jesper",cljs.core.cst$kw$org,"SAS"], null),cljs.core.cst$kw$joanne,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"joanne",cljs.core.cst$kw$name,"Joanne",cljs.core.cst$kw$org,"SAS"], null)], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
prais2.content.Header = (function (title,sortable,shown,width,height,content,__meta,__extmap,__hash){
this.title = title;
this.sortable = sortable;
this.shown = shown;
this.width = width;
this.height = height;
this.content = content;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
prais2.content.Header.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

prais2.content.Header.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k19547,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__19551 = k19547;
var G__19551__$1 = (((G__19551 instanceof cljs.core.Keyword))?G__19551.fqn:null);
switch (G__19551__$1) {
case "title":
return self__.title;

break;
case "sortable":
return self__.sortable;

break;
case "shown":
return self__.shown;

break;
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
case "content":
return self__.content;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19547,else__4193__auto__);

}
});

prais2.content.Header.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer(writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4205__auto__,pr_pair__4207__auto__,"#prais2.content.Header{",", ","}",opts__4206__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$title,self__.title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sortable,self__.sortable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$shown,self__.shown],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$width,self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$height,self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content,self__.content],null))], null),self__.__extmap));
});

prais2.content.Header.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19546){
var self__ = this;
var G__19546__$1 = this;
return (new cljs.core.RecordIter((0),G__19546__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$title,cljs.core.cst$kw$sortable,cljs.core.cst$kw$shown,cljs.core.cst$kw$width,cljs.core.cst$kw$height,cljs.core.cst$kw$content], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

prais2.content.Header.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

prais2.content.Header.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,self__.width,self__.height,self__.content,self__.__meta,self__.__extmap,self__.__hash));
});

prais2.content.Header.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

prais2.content.Header.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = (function (){var fexpr__19552 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (-1867129037 ^ cljs.core.hash_unordered_coll(coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
;
return fexpr__19552(this__4186__auto____$1);
})();
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

prais2.content.Header.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19548,other19549){
var self__ = this;
var this19548__$1 = this;
return ((!((other19549 == null))) && ((this19548__$1.constructor === other19549.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19548__$1.title,other19549.title)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19548__$1.sortable,other19549.sortable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19548__$1.shown,other19549.shown)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19548__$1.width,other19549.width)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19548__$1.height,other19549.height)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19548__$1.content,other19549.content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19548__$1.__extmap,other19549.__extmap)));
});

prais2.content.Header.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$content,null,cljs.core.cst$kw$width,null,cljs.core.cst$kw$shown,null,cljs.core.cst$kw$title,null,cljs.core.cst$kw$sortable,null,cljs.core.cst$kw$height,null], null), null),k__4200__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,self__.width,self__.height,self__.content,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4200__auto__)),null));
}
});

prais2.content.Header.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__19546){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__19553 = cljs.core.keyword_identical_QMARK_;
var expr__19554 = k__4198__auto__;
if(cljs.core.truth_((function (){var G__19556 = cljs.core.cst$kw$title;
var G__19557 = expr__19554;
return (pred__19553.cljs$core$IFn$_invoke$arity$2 ? pred__19553.cljs$core$IFn$_invoke$arity$2(G__19556,G__19557) : pred__19553.call(null,G__19556,G__19557));
})())){
return (new prais2.content.Header(G__19546,self__.sortable,self__.shown,self__.width,self__.height,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19558 = cljs.core.cst$kw$sortable;
var G__19559 = expr__19554;
return (pred__19553.cljs$core$IFn$_invoke$arity$2 ? pred__19553.cljs$core$IFn$_invoke$arity$2(G__19558,G__19559) : pred__19553.call(null,G__19558,G__19559));
})())){
return (new prais2.content.Header(self__.title,G__19546,self__.shown,self__.width,self__.height,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19560 = cljs.core.cst$kw$shown;
var G__19561 = expr__19554;
return (pred__19553.cljs$core$IFn$_invoke$arity$2 ? pred__19553.cljs$core$IFn$_invoke$arity$2(G__19560,G__19561) : pred__19553.call(null,G__19560,G__19561));
})())){
return (new prais2.content.Header(self__.title,self__.sortable,G__19546,self__.width,self__.height,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19562 = cljs.core.cst$kw$width;
var G__19563 = expr__19554;
return (pred__19553.cljs$core$IFn$_invoke$arity$2 ? pred__19553.cljs$core$IFn$_invoke$arity$2(G__19562,G__19563) : pred__19553.call(null,G__19562,G__19563));
})())){
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,G__19546,self__.height,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19564 = cljs.core.cst$kw$height;
var G__19565 = expr__19554;
return (pred__19553.cljs$core$IFn$_invoke$arity$2 ? pred__19553.cljs$core$IFn$_invoke$arity$2(G__19564,G__19565) : pred__19553.call(null,G__19564,G__19565));
})())){
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,self__.width,G__19546,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19566 = cljs.core.cst$kw$content;
var G__19567 = expr__19554;
return (pred__19553.cljs$core$IFn$_invoke$arity$2 ? pred__19553.cljs$core$IFn$_invoke$arity$2(G__19566,G__19567) : pred__19553.call(null,G__19566,G__19567));
})())){
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,self__.width,self__.height,G__19546,self__.__meta,self__.__extmap,null));
} else {
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,self__.width,self__.height,self__.content,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4198__auto__,G__19546),null));
}
}
}
}
}
}
});

prais2.content.Header.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$title,self__.title,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$sortable,self__.sortable,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$shown,self__.shown,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$width,self__.width,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$height,self__.height,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$content,self__.content,null))], null),self__.__extmap));
});

prais2.content.Header.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__19546){
var self__ = this;
var this__4189__auto____$1 = this;
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,self__.width,self__.height,self__.content,G__19546,self__.__extmap,self__.__hash));
});

prais2.content.Header.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4196__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

prais2.content.Header.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$title,cljs.core.cst$sym$sortable,cljs.core.cst$sym$shown,cljs.core.cst$sym$width,cljs.core.cst$sym$height,cljs.core.cst$sym$content], null);
});

prais2.content.Header.cljs$lang$type = true;

prais2.content.Header.cljs$lang$ctorPrSeq = (function (this__4227__auto__){
return (new cljs.core.List(null,"prais2.content/Header",null,(1),null));
});

prais2.content.Header.cljs$lang$ctorPrWriter = (function (this__4227__auto__,writer__4228__auto__){
return cljs.core._write(writer__4228__auto__,"prais2.content/Header");
});

/**
 * Positional factory function for prais2.content/Header.
 */
prais2.content.__GT_Header = (function prais2$content$__GT_Header(title,sortable,shown,width,height,content){
return (new prais2.content.Header(title,sortable,shown,width,height,content,null,null,null));
});

/**
 * Factory function for prais2.content/Header, taking a map of keywords to field values.
 */
prais2.content.map__GT_Header = (function prais2$content$map__GT_Header(G__19550){
var extmap__4223__auto__ = (function (){var G__19568 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19550,cljs.core.cst$kw$title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sortable,cljs.core.cst$kw$shown,cljs.core.cst$kw$width,cljs.core.cst$kw$height,cljs.core.cst$kw$content], 0));
if(cljs.core.record_QMARK_(G__19550)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19568);
} else {
return G__19568;
}
})();
return (new prais2.content.Header(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(G__19550),cljs.core.cst$kw$sortable.cljs$core$IFn$_invoke$arity$1(G__19550),cljs.core.cst$kw$shown.cljs$core$IFn$_invoke$arity$1(G__19550),cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(G__19550),cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(G__19550),cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(G__19550),null,cljs.core.not_empty(extmap__4223__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
prais2.content.Row = (function (h_name,h_code,h_lat,h_lon,n_ops,n_deaths,n_survivors,survival_rate,outer_low,inner_low,inner_high,outer_high,observed,__meta,__extmap,__hash){
this.h_name = h_name;
this.h_code = h_code;
this.h_lat = h_lat;
this.h_lon = h_lon;
this.n_ops = n_ops;
this.n_deaths = n_deaths;
this.n_survivors = n_survivors;
this.survival_rate = survival_rate;
this.outer_low = outer_low;
this.inner_low = inner_low;
this.inner_high = inner_high;
this.outer_high = outer_high;
this.observed = observed;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
prais2.content.Row.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

prais2.content.Row.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k19571,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__19575 = k19571;
var G__19575__$1 = (((G__19575 instanceof cljs.core.Keyword))?G__19575.fqn:null);
switch (G__19575__$1) {
case "h-name":
return self__.h_name;

break;
case "h-code":
return self__.h_code;

break;
case "h-lat":
return self__.h_lat;

break;
case "h-lon":
return self__.h_lon;

break;
case "n-ops":
return self__.n_ops;

break;
case "n-deaths":
return self__.n_deaths;

break;
case "n-survivors":
return self__.n_survivors;

break;
case "survival-rate":
return self__.survival_rate;

break;
case "outer-low":
return self__.outer_low;

break;
case "inner-low":
return self__.inner_low;

break;
case "inner-high":
return self__.inner_high;

break;
case "outer-high":
return self__.outer_high;

break;
case "observed":
return self__.observed;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19571,else__4193__auto__);

}
});

prais2.content.Row.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer(writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4205__auto__,pr_pair__4207__auto__,"#prais2.content.Row{",", ","}",opts__4206__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h_DASH_name,self__.h_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h_DASH_code,self__.h_code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h_DASH_lat,self__.h_lat],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h_DASH_lon,self__.h_lon],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$n_DASH_ops,self__.n_ops],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$n_DASH_deaths,self__.n_deaths],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$n_DASH_survivors,self__.n_survivors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$survival_DASH_rate,self__.survival_rate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$outer_DASH_low,self__.outer_low],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$inner_DASH_low,self__.inner_low],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$inner_DASH_high,self__.inner_high],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$outer_DASH_high,self__.outer_high],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$observed,self__.observed],null))], null),self__.__extmap));
});

prais2.content.Row.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19570){
var self__ = this;
var G__19570__$1 = this;
return (new cljs.core.RecordIter((0),G__19570__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h_DASH_name,cljs.core.cst$kw$h_DASH_code,cljs.core.cst$kw$h_DASH_lat,cljs.core.cst$kw$h_DASH_lon,cljs.core.cst$kw$n_DASH_ops,cljs.core.cst$kw$n_DASH_deaths,cljs.core.cst$kw$n_DASH_survivors,cljs.core.cst$kw$survival_DASH_rate,cljs.core.cst$kw$outer_DASH_low,cljs.core.cst$kw$inner_DASH_low,cljs.core.cst$kw$inner_DASH_high,cljs.core.cst$kw$outer_DASH_high,cljs.core.cst$kw$observed], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

prais2.content.Row.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

prais2.content.Row.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,self__.__hash));
});

prais2.content.Row.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
});

prais2.content.Row.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = (function (){var fexpr__19576 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (540564503 ^ cljs.core.hash_unordered_coll(coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
;
return fexpr__19576(this__4186__auto____$1);
})();
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

prais2.content.Row.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19572,other19573){
var self__ = this;
var this19572__$1 = this;
return ((!((other19573 == null))) && ((this19572__$1.constructor === other19573.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.h_name,other19573.h_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.h_code,other19573.h_code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.h_lat,other19573.h_lat)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.h_lon,other19573.h_lon)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.n_ops,other19573.n_ops)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.n_deaths,other19573.n_deaths)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.n_survivors,other19573.n_survivors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.survival_rate,other19573.survival_rate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.outer_low,other19573.outer_low)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.inner_low,other19573.inner_low)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.inner_high,other19573.inner_high)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.outer_high,other19573.outer_high)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.observed,other19573.observed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19572__$1.__extmap,other19573.__extmap)));
});

prais2.content.Row.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [cljs.core.cst$kw$inner_DASH_high,null,cljs.core.cst$kw$inner_DASH_low,null,cljs.core.cst$kw$h_DASH_lat,null,cljs.core.cst$kw$n_DASH_ops,null,cljs.core.cst$kw$outer_DASH_high,null,cljs.core.cst$kw$n_DASH_survivors,null,cljs.core.cst$kw$h_DASH_lon,null,cljs.core.cst$kw$survival_DASH_rate,null,cljs.core.cst$kw$h_DASH_code,null,cljs.core.cst$kw$outer_DASH_low,null,cljs.core.cst$kw$observed,null,cljs.core.cst$kw$h_DASH_name,null,cljs.core.cst$kw$n_DASH_deaths,null], null), null),k__4200__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4200__auto__)),null));
}
});

prais2.content.Row.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__19570){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__19577 = cljs.core.keyword_identical_QMARK_;
var expr__19578 = k__4198__auto__;
if(cljs.core.truth_((function (){var G__19580 = cljs.core.cst$kw$h_DASH_name;
var G__19581 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19580,G__19581) : pred__19577.call(null,G__19580,G__19581));
})())){
return (new prais2.content.Row(G__19570,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19582 = cljs.core.cst$kw$h_DASH_code;
var G__19583 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19582,G__19583) : pred__19577.call(null,G__19582,G__19583));
})())){
return (new prais2.content.Row(self__.h_name,G__19570,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19584 = cljs.core.cst$kw$h_DASH_lat;
var G__19585 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19584,G__19585) : pred__19577.call(null,G__19584,G__19585));
})())){
return (new prais2.content.Row(self__.h_name,self__.h_code,G__19570,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19586 = cljs.core.cst$kw$h_DASH_lon;
var G__19587 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19586,G__19587) : pred__19577.call(null,G__19586,G__19587));
})())){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,G__19570,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19588 = cljs.core.cst$kw$n_DASH_ops;
var G__19589 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19588,G__19589) : pred__19577.call(null,G__19588,G__19589));
})())){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,G__19570,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19590 = cljs.core.cst$kw$n_DASH_deaths;
var G__19591 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19590,G__19591) : pred__19577.call(null,G__19590,G__19591));
})())){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,G__19570,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19592 = cljs.core.cst$kw$n_DASH_survivors;
var G__19593 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19592,G__19593) : pred__19577.call(null,G__19592,G__19593));
})())){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,G__19570,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19594 = cljs.core.cst$kw$survival_DASH_rate;
var G__19595 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19594,G__19595) : pred__19577.call(null,G__19594,G__19595));
})())){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,G__19570,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19596 = cljs.core.cst$kw$outer_DASH_low;
var G__19597 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19596,G__19597) : pred__19577.call(null,G__19596,G__19597));
})())){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,G__19570,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19598 = cljs.core.cst$kw$inner_DASH_low;
var G__19599 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19598,G__19599) : pred__19577.call(null,G__19598,G__19599));
})())){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,G__19570,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19600 = cljs.core.cst$kw$inner_DASH_high;
var G__19601 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19600,G__19601) : pred__19577.call(null,G__19600,G__19601));
})())){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,G__19570,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19602 = cljs.core.cst$kw$outer_DASH_high;
var G__19603 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19602,G__19603) : pred__19577.call(null,G__19602,G__19603));
})())){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,G__19570,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19604 = cljs.core.cst$kw$observed;
var G__19605 = expr__19578;
return (pred__19577.cljs$core$IFn$_invoke$arity$2 ? pred__19577.cljs$core$IFn$_invoke$arity$2(G__19604,G__19605) : pred__19577.call(null,G__19604,G__19605));
})())){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,G__19570,self__.__meta,self__.__extmap,null));
} else {
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4198__auto__,G__19570),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
});

prais2.content.Row.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$h_DASH_name,self__.h_name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$h_DASH_code,self__.h_code,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$h_DASH_lat,self__.h_lat,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$h_DASH_lon,self__.h_lon,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$n_DASH_ops,self__.n_ops,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$n_DASH_deaths,self__.n_deaths,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$n_DASH_survivors,self__.n_survivors,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$survival_DASH_rate,self__.survival_rate,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$outer_DASH_low,self__.outer_low,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$inner_DASH_low,self__.inner_low,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$inner_DASH_high,self__.inner_high,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$outer_DASH_high,self__.outer_high,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$observed,self__.observed,null))], null),self__.__extmap));
});

prais2.content.Row.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__19570){
var self__ = this;
var this__4189__auto____$1 = this;
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,G__19570,self__.__extmap,self__.__hash));
});

prais2.content.Row.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4196__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

prais2.content.Row.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$h_DASH_name,cljs.core.cst$sym$h_DASH_code,cljs.core.cst$sym$h_DASH_lat,cljs.core.cst$sym$h_DASH_lon,cljs.core.cst$sym$n_DASH_ops,cljs.core.cst$sym$n_DASH_deaths,cljs.core.cst$sym$n_DASH_survivors,cljs.core.cst$sym$survival_DASH_rate,cljs.core.cst$sym$outer_DASH_low,cljs.core.cst$sym$inner_DASH_low,cljs.core.cst$sym$inner_DASH_high,cljs.core.cst$sym$outer_DASH_high,cljs.core.cst$sym$observed], null);
});

prais2.content.Row.cljs$lang$type = true;

prais2.content.Row.cljs$lang$ctorPrSeq = (function (this__4227__auto__){
return (new cljs.core.List(null,"prais2.content/Row",null,(1),null));
});

prais2.content.Row.cljs$lang$ctorPrWriter = (function (this__4227__auto__,writer__4228__auto__){
return cljs.core._write(writer__4228__auto__,"prais2.content/Row");
});

/**
 * Positional factory function for prais2.content/Row.
 */
prais2.content.__GT_Row = (function prais2$content$__GT_Row(h_name,h_code,h_lat,h_lon,n_ops,n_deaths,n_survivors,survival_rate,outer_low,inner_low,inner_high,outer_high,observed){
return (new prais2.content.Row(h_name,h_code,h_lat,h_lon,n_ops,n_deaths,n_survivors,survival_rate,outer_low,inner_low,inner_high,outer_high,observed,null,null,null));
});

/**
 * Factory function for prais2.content/Row, taking a map of keywords to field values.
 */
prais2.content.map__GT_Row = (function prais2$content$map__GT_Row(G__19574){
var extmap__4223__auto__ = (function (){var G__19606 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19574,cljs.core.cst$kw$h_DASH_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$h_DASH_code,cljs.core.cst$kw$h_DASH_lat,cljs.core.cst$kw$h_DASH_lon,cljs.core.cst$kw$n_DASH_ops,cljs.core.cst$kw$n_DASH_deaths,cljs.core.cst$kw$n_DASH_survivors,cljs.core.cst$kw$survival_DASH_rate,cljs.core.cst$kw$outer_DASH_low,cljs.core.cst$kw$inner_DASH_low,cljs.core.cst$kw$inner_DASH_high,cljs.core.cst$kw$outer_DASH_high,cljs.core.cst$kw$observed], 0));
if(cljs.core.record_QMARK_(G__19574)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19606);
} else {
return G__19606;
}
})();
return (new prais2.content.Row(cljs.core.cst$kw$h_DASH_name.cljs$core$IFn$_invoke$arity$1(G__19574),cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(G__19574),cljs.core.cst$kw$h_DASH_lat.cljs$core$IFn$_invoke$arity$1(G__19574),cljs.core.cst$kw$h_DASH_lon.cljs$core$IFn$_invoke$arity$1(G__19574),cljs.core.cst$kw$n_DASH_ops.cljs$core$IFn$_invoke$arity$1(G__19574),cljs.core.cst$kw$n_DASH_deaths.cljs$core$IFn$_invoke$arity$1(G__19574),cljs.core.cst$kw$n_DASH_survivors.cljs$core$IFn$_invoke$arity$1(G__19574),cljs.core.cst$kw$survival_DASH_rate.cljs$core$IFn$_invoke$arity$1(G__19574),cljs.core.cst$kw$outer_DASH_low.cljs$core$IFn$_invoke$arity$1(G__19574),cljs.core.cst$kw$inner_DASH_low.cljs$core$IFn$_invoke$arity$1(G__19574),cljs.core.cst$kw$inner_DASH_high.cljs$core$IFn$_invoke$arity$1(G__19574),cljs.core.cst$kw$outer_DASH_high.cljs$core$IFn$_invoke$arity$1(G__19574),cljs.core.cst$kw$observed.cljs$core$IFn$_invoke$arity$1(G__19574),null,cljs.core.not_empty(extmap__4223__auto__),null));
});

prais2.content.edn_readers = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$prais2$content_SLASH_Row,prais2.content.map__GT_Row], null);
/**
 * Adds tagged literals depending on the presence of certain keys
 */
prais2.content.add_tags = (function prais2$content$add_tags(m){
var ks = cljs.core.vec(cljs.core.keys(m));
if(cljs.core.truth_(cljs.core.some(((function (ks){
return (function (p1__19608_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$h_DASH_name,p1__19608_SHARP_);
});})(ks))
,ks))){
return ["#prais2.content/Row",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
throw (new Error("The entry is not a row."));

}
});
/**
 * If m is a map, returns m, if it is a string, returns the underlying map
 */
prais2.content.__GT_map = (function prais2$content$__GT_map(m){
if(typeof m === 'string'){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(m);
} else {
return m;

}
});
/**
 * Translates data into defrecords implementations for a suitable datasource
 */
prais2.content.__GT_records = (function prais2$content$__GT_records(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4311__auto__ = (function prais2$content$__GT_records_$_iter__19612(s__19613){
return (new cljs.core.LazySeq(null,(function (){
var s__19613__$1 = s__19613;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__19613__$1);
if(temp__5753__auto__){
var s__19613__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19613__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__19613__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__19615 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__19614 = (0);
while(true){
if((i__19614 < size__4310__auto__)){
var vec__19616 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__19614);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19616,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19616,(1),null);
cljs.core.chunk_append(b__19615,(function (){var with_tags = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__19614,vec__19616,k,v,c__4309__auto__,size__4310__auto__,b__19615,s__19613__$2,temp__5753__auto__){
return (function (p1__19609_SHARP_){
return prais2.content.add_tags(p1__19609_SHARP_);
});})(i__19614,vec__19616,k,v,c__4309__auto__,size__4310__auto__,b__19615,s__19613__$2,temp__5753__auto__))
,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__19614,with_tags,vec__19616,k,v,c__4309__auto__,size__4310__auto__,b__19615,s__19613__$2,temp__5753__auto__){
return (function (p1__19611_SHARP_){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$readers,prais2.content.edn_readers], null),p1__19611_SHARP_);
});})(i__19614,with_tags,vec__19616,k,v,c__4309__auto__,size__4310__auto__,b__19615,s__19613__$2,temp__5753__auto__))
,with_tags)], null);
})());

var G__19622 = (i__19614 + (1));
i__19614 = G__19622;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19615),prais2$content$__GT_records_$_iter__19612(cljs.core.chunk_rest(s__19613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19615),null);
}
} else {
var vec__19619 = cljs.core.first(s__19613__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19619,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19619,(1),null);
return cljs.core.cons((function (){var with_tags = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__19619,k,v,s__19613__$2,temp__5753__auto__){
return (function (p1__19609_SHARP_){
return prais2.content.add_tags(p1__19609_SHARP_);
});})(vec__19619,k,v,s__19613__$2,temp__5753__auto__))
,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (with_tags,vec__19619,k,v,s__19613__$2,temp__5753__auto__){
return (function (p1__19611_SHARP_){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$readers,prais2.content.edn_readers], null),p1__19611_SHARP_);
});})(with_tags,vec__19619,k,v,s__19613__$2,temp__5753__auto__))
,with_tags)], null);
})(),prais2$content$__GT_records_$_iter__19612(cljs.core.rest(s__19613__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__(prais2.content.__GT_map(data));
})());
});
/**
 * Loads data from the endpoint and transforms each map into a Row. record.
 */
prais2.content.get_file = (function prais2$content$get_file(endpoint){
var c__16485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto__){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto__){
return (function (state_19632){
var state_val_19633 = (state_19632[(1)]);
if((state_val_19633 === (1))){
var inst_19623 = [cljs.core.cst$kw$as];
var inst_19624 = [cljs.core.cst$kw$auto];
var inst_19625 = cljs.core.PersistentHashMap.fromArrays(inst_19623,inst_19624);
var inst_19626 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19625], 0));
var state_19632__$1 = state_19632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19632__$1,(2),inst_19626);
} else {
if((state_val_19633 === (2))){
var inst_19628 = (state_19632[(2)]);
var inst_19629 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_19628);
var inst_19630 = prais2.content.__GT_records(inst_19629);
var state_19632__$1 = state_19632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19632__$1,inst_19630);
} else {
return null;
}
}
});})(c__16485__auto__))
;
return ((function (switch__16410__auto__,c__16485__auto__){
return (function() {
var prais2$content$get_file_$_state_machine__16411__auto__ = null;
var prais2$content$get_file_$_state_machine__16411__auto____0 = (function (){
var statearr_19634 = [null,null,null,null,null,null,null];
(statearr_19634[(0)] = prais2$content$get_file_$_state_machine__16411__auto__);

(statearr_19634[(1)] = (1));

return statearr_19634;
});
var prais2$content$get_file_$_state_machine__16411__auto____1 = (function (state_19632){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_19632);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e19635){var ex__16414__auto__ = e19635;
var statearr_19636_19639 = state_19632;
(statearr_19636_19639[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_19632[(4)]))){
var statearr_19637_19640 = state_19632;
(statearr_19637_19640[(1)] = cljs.core.first((state_19632[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__19641 = state_19632;
state_19632 = G__19641;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
prais2$content$get_file_$_state_machine__16411__auto__ = function(state_19632){
switch(arguments.length){
case 0:
return prais2$content$get_file_$_state_machine__16411__auto____0.call(this);
case 1:
return prais2$content$get_file_$_state_machine__16411__auto____1.call(this,state_19632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$content$get_file_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$content$get_file_$_state_machine__16411__auto____0;
prais2$content$get_file_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$content$get_file_$_state_machine__16411__auto____1;
return prais2$content$get_file_$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto__))
})();
var state__16487__auto__ = (function (){var statearr_19638 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_19638[(6)] = c__16485__auto__);

return statearr_19638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto__))
);

return c__16485__auto__;
});
/**
 * Returns the max year of a map with years as keys
 */
prais2.content.find_max_year = (function prais2$content$find_max_year(m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__19643_SHARP_){
return parseInt(cljs.core.name(p1__19643_SHARP_));
}),cljs.core.keys(m)));
});
/**
 * Returns the min year of a map with years as keys
 */
prais2.content.find_min_year = (function prais2$content$find_min_year(m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__19645_SHARP_){
return parseInt(cljs.core.name(p1__19645_SHARP_));
}),cljs.core.keys(m)));
});
/**
 * Creates the datasource-tabs from a map with years as keys
 */
prais2.content.make_datasource_tabs = (function prais2$content$make_datasource_tabs(m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,cljs.core.PersistentArrayMap.EMPTY)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var mink = prais2.content.find_min_year(m);
var maxk = prais2.content.find_max_year(m);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (mink,maxk){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Reporting period",cljs.core.cst$kw$label,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((x - (3))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),cljs.core.cst$kw$long_DASH_label,["April ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x - (3)))," - March ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null)], null);
});})(mink,maxk))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(mink,((1) + maxk))));

}
});
/**
 * Swaps the core/app state with: 
 *   - :hosp-data: the downloaded data transformed into Row. records, 
 *   - :data-tabs: the datasource-tab
 *   - :datasource: the maximum year found in the data
 */
prais2.content.get_hospital_data = (function prais2$content$get_hospital_data(){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.content.get_file("/data.edn"),(function (p1__19646_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prais2.core.app,cljs.core.assoc,cljs.core.cst$kw$hosp_DASH_data,p1__19646_SHARP_);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prais2.core.app,cljs.core.assoc,cljs.core.cst$kw$data_DASH_tabs,prais2.content.make_datasource_tabs(p1__19646_SHARP_));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prais2.core.app,cljs.core.assoc,cljs.core.cst$kw$datasource,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.content.find_max_year(p1__19646_SHARP_))].join('')));
}));
});
prais2.content.datasource_tab = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$2019,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Reporting period",cljs.core.cst$kw$label,"2016-2019",cljs.core.cst$kw$long_DASH_label,"April 2016 - March 2019"], null),cljs.core.cst$kw$2018,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Reporting period",cljs.core.cst$kw$label,"2015-2018",cljs.core.cst$kw$long_DASH_label,"April 2015 - March 2018"], null),cljs.core.cst$kw$2017,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Reporting period",cljs.core.cst$kw$label,"2014-2017",cljs.core.cst$kw$long_DASH_label,"April 2014 - March 2017"], null),cljs.core.cst$kw$2016,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Reporting period",cljs.core.cst$kw$label,"2013-2016",cljs.core.cst$kw$long_DASH_label,"April 2013 - March 2016"], null),cljs.core.cst$kw$2015,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Reporting period",cljs.core.cst$kw$label,"2012-2015",cljs.core.cst$kw$long_DASH_label,"April 2012 - March 2015"], null),cljs.core.cst$kw$2014,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Reporting period",cljs.core.cst$kw$label,"2011-2014",cljs.core.cst$kw$long_DASH_label,"April 2011 - March 2014"], null),cljs.core.cst$kw$2013,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Reporting period",cljs.core.cst$kw$label,"2010-2013",cljs.core.cst$kw$long_DASH_label,"April 2010 - March 2013"], null)], null);
prais2.content.header_row = (function prais2$content$header_row(){
return (new prais2.content.Row((new prais2.content.Header("Hospital",true,true,(300),(50),"The hospital name",null,null,null)),(new prais2.content.Header("Hospital Code",false,false,(77),(50),"Hospital code as used by NCHDA",null,null,null)),(new prais2.content.Header("Latitude",false,false,(0),(0),"",null,null,null)),(new prais2.content.Header("Longitude",false,false,(0),(0),"",null,null,null)),(new prais2.content.Header("Number of Operations",true,true,(95),(50),["The number of heart operations carried out on under-16s at each hospital during ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$long_DASH_label.cljs$core$IFn$_invoke$arity$1((function (){var G__19648 = cljs.core.cst$kw$data_DASH_tabs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(prais2.core.app));
var fexpr__19647 = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(prais2.core.app));
return (fexpr__19647.cljs$core$IFn$_invoke$arity$1 ? fexpr__19647.cljs$core$IFn$_invoke$arity$1(G__19648) : fexpr__19647.call(null,G__19648));
})())),". Operations that occur within 30 days of each other are treated as a single operation."].join(''),null,null,null)),(new prais2.content.Header("Number of Deaths",false,true,(75),(50),"The number of operations where the child died within 30 days of their operation, from any cause",null,null,null)),(new prais2.content.Header("Number of Survivors",false,true,(85),(50),"The number of operations where the child survived at least 30 days after their operation",null,null,null)),(new prais2.content.Header("Survival Rate %",false,true,(86),(50),"<p>The percentage of operations where the child survived at least 30 days after their\n                 operation.</p>\n                 Some hospitals specialise in certain conditions, meaning that some hospitals tend to\n                 operate on children with a lower chance of survival. Therefore we would not expect all\n                 hospitals to have the same survival rates each year, and so it is not possible to sort\n                 hospitals in this list on the basis of their survival rates.",null,null,null)),(new prais2.content.Header("Outer Low",false,false,(130),(50),"A dot within the left hand light blue band means that there is some evidence that chances of survival in the hospital were lower than predicted",null,null,null)),(new prais2.content.Header("Inner Low",false,false,(130),(50),"A dot in this area means that there is no evidence that the hospital\u2019s survival rate is different from what is predicted",null,null,null)),(new prais2.content.Header("Inner High",false,false,(130),(50),"A dot within the right hand light blue band means that there is some evidence that chances of survival in the hospital were higher than predicted",null,null,null)),(new prais2.content.Header("Outer High",false,false,(130),(50),null,null,null,null)),(new prais2.content.Header("Survival with predicted range",false,false,(0),(100),null,null,null,null)),null,null,null));
});
prais2.content.detail_slider_label = "The survival rate with predicted range of survival";
prais2.content.sample_hospital = (new prais2.content.Row("Sample Hospital","H",(52),(-2),(976),(24),(952),97.5,96.5,97.1,98.9,99.2,null,null,null,null));
prais2.content.hospital_metadata = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$RHS,cljs.core.cst$kw$HSC,cljs.core.cst$kw$ACH,cljs.core.cst$kw$BRC,cljs.core.cst$kw$BCH,cljs.core.cst$kw$GOS,cljs.core.cst$kw$GRL,cljs.core.cst$kw$GUY,cljs.core.cst$kw$RVB,cljs.core.cst$kw$LGI,cljs.core.cst$kw$SGH,cljs.core.cst$kw$NHB,cljs.core.cst$kw$FRE,cljs.core.cst$kw$OLS],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.nhsggc.org.uk/locations/hospitals/the-royal-hospital-for-children-glasgow/",cljs.core.cst$kw$target,"_blank"),"Glasgow, Royal Hospital for Children"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.youngheart.info/",cljs.core.cst$kw$target,"_blank"),"The Scottish Association for Children with Heart Disorders (SACHD)"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://theharleystreetclinic.co.uk/cardiac/congenital-heart-care",cljs.core.cst$kw$target,"_blank"),"London, Harley Street Clinic"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.alderhey.nhs.uk/departments/cardiac/",cljs.core.cst$kw$target,"_blank"),"Liverpool, Alder Hey Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.alderheycharity.org/",cljs.core.cst$kw$target,"_blank"),"Alder Hey Charity"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://heartchild.info/web/",cljs.core.cst$kw$target,"_blank"),"Children\u2019s Heart Association"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.uhbristol.nhs.uk/patients-and-visitors/your-hospitals/bristol-royal-hospital-for-children/the-paediatric-cardiac-service/",cljs.core.cst$kw$target,"_blank"),"Bristol Royal Hospital for Children"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.heartfamilies.org.uk/",cljs.core.cst$kw$target,"_blank"),"Heart Families South West"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.heartcircle.org/",cljs.core.cst$kw$target,"_blank"),"South West Children\u2019s Heart Circle"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.bch.nhs.uk",cljs.core.cst$kw$target,"_blank"),"Birmingham Children\u2019s Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.youngatheart.org.uk/",cljs.core.cst$kw$target,"_blank"),"Young at Heart"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.bch.org.uk",cljs.core.cst$kw$target,"_blank"),"Birmingham Children\u2019s Hospital Charity"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.gosh.nhs.uk/medical-information/clinical-specialties/cardiothoracic-surgery-information-parents-and-visitors",cljs.core.cst$kw$target,"_blank"),"London, Great Ormond Street Hospital for Children"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.gosh.org/",cljs.core.cst$kw$target,"_blank"),"Great Ormond Street Hospital Charity GOSHCC"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.leicestershospitals.nhs.uk/ ",cljs.core.cst$kw$target,"_blank"),"Leicester, Glenfield Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.heartlink-glenfield.org.uk/",cljs.core.cst$kw$target,"_blank"),"Heart Link"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.evelinalondon.nhs.uk/our-services/hospital/heart-services/overview.aspx",cljs.core.cst$kw$target,"_blank"),"London, Evelina London Children's Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.echo-evelina.org.uk/",cljs.core.cst$kw$target,"_blank"),"ECHO \u2013 Evelina Children\u2019s Heart Organisation"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://belfasttrust-cardiacsurgery.hscni.net/about-cardiac-surgery/location/",cljs.core.cst$kw$target,"_blank"),"Belfast, Royal Victoria Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.childrensheartbeattrust.org/",cljs.core.cst$kw$target,"_blank"),"Children\u2019s Heartbeat Trust"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.leedsth.nhs.uk/a-z-of-services/childrens-cardiology/",cljs.core.cst$kw$target,"_blank"),"Leeds General Infirmary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://chsf.org.uk/",cljs.core.cst$kw$target,"_blank"),"The Childrens Heart Surgery Fund"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.uhs.nhs.uk/OurServices/Childhealth/Childrenscongenitalcardiacservices/Childrenscongenitalcardiacservices.aspx",cljs.core.cst$kw$target,"_blank"),"Southampton, Wessex Cardiothoracic Centre (Southampton Children\u2019s Hospital)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.oceanward.co.uk/",cljs.core.cst$kw$target,"_blank"),"Families of Ocean Ward"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.rbht.nhs.uk/",cljs.core.cst$kw$target,"_blank"),"London, Royal Brompton Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.thebromptonfountain.org.uk/",cljs.core.cst$kw$target,"_blank"),"The Brompton Fountain"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.newcastle-hospitals.org.uk/services/cardiothoracic_services_childrens-heart-unit.aspx",cljs.core.cst$kw$target,"_blank"),"Newcastle, Freeman Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://chuf.org.uk/",cljs.core.cst$kw$target,"_blank"),"Newcastle Children\u2019s Heart Unit Fund"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.olchc.ie/",cljs.core.cst$kw$target,"_blank"),"Dublin, Our Lady's Children's Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.heartchildren.ie/our-lady%E2%80%99s-children%E2%80%99s-hospital-crumlin",cljs.core.cst$kw$target,"_blank"),"Heart Children Ireland"], null)], null)]);
prais2.content.active_h_codes = (function prais2$content$active_h_codes(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.cst$kw$h_DASH_code),(function (){var G__19650 = cljs.core.cst$kw$hosp_DASH_data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(prais2.core.app));
var fexpr__19649 = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(prais2.core.app));
return (fexpr__19649.cljs$core$IFn$_invoke$arity$1 ? fexpr__19649.cljs$core$IFn$_invoke$arity$1(G__19650) : fexpr__19649.call(null,G__19650));
})());
});
prais2.content.sorted_active_h_codes = (function prais2$content$sorted_active_h_codes(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (hosp_meta){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$h_DASH_code.cljs$core$IFn$_invoke$arity$1(hosp_meta)),cljs.core.cst$kw$h_DASH_name.cljs$core$IFn$_invoke$arity$1(hosp_meta)], null);
}),(function (){var G__19652 = cljs.core.cst$kw$hosp_DASH_data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(prais2.core.app));
var fexpr__19651 = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(prais2.core.app));
return (fexpr__19651.cljs$core$IFn$_invoke$arity$1 ? fexpr__19651.cljs$core$IFn$_invoke$arity$1(G__19652) : fexpr__19651.call(null,G__19652));
})())));
});
prais2.content.unassoc_charity_list = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.amelia-matters.org.uk",cljs.core.cst$kw$target,"_blank"),"Amelia Matters:"], null)," supporting children born with congenital\n    heart disease."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.arc-uk.org",cljs.core.cst$kw$target,"_blank"),"Antenatal Results and Choices (ARC):"], null)," helping parents and healthcare\n    professionals through antenatal screening and its consequences"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.heartrhythmcharity.org.uk",cljs.core.cst$kw$target,"_blank"),"Arrhythmia Alliance:"], null)," improving the diagnosis, treatment\n    and quality of life for all those affected by arrhythmias."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.benwilliamstrust.org.uk",cljs.core.cst$kw$target,"_blank"),"Ben Williams Trust:"], null)," supports children with abnormal heart\n    rhythms (arrhythmias) and their families "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.bhf.org.uk",cljs.core.cst$kw$target,"_blank"),"British Heart Foundation:"], null)," working to fight against cardiovascular\n    disease."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.c-r-y.org.uk",cljs.core.cst$kw$target,"_blank"),"Cardiac Risk in the Young (CRY):"], null)," preventing young sudden cardiac\n    deaths through awareness, screening and research, and supporting affected families."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.cardiomyopathy.org",cljs.core.cst$kw$target,"_blank"),"Cardiomyopathy UK:"], null)," providing support to patients and families\n    and promoting research for the disease cardiomyopathy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.heartchild.info",cljs.core.cst$kw$target,"_blank"),"Children\u2019s Heart Association:"], null)," supporting families of children\n    with a heart condition."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.chfed.org.uk",cljs.core.cst$kw$target,"_blank"),"Children\u2019s Heart Federation:"], null)," the main umbrella body for British\n    congenital heart disease charities and voluntary organisations."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.chd-uk.co.uk",cljs.core.cst$kw$target,"_blank"),"Congenital Heart Defects UK:"], null)," educating and raising awareness of\n    congenital heart defects and supporting patients and families."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.cafamily.org.uk",cljs.core.cst$kw$target,"_blank"),"Contact a family:"], null)," a national charity for families with disabled\n    children, providing information, advice and support."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.dhg.org.uk",cljs.core.cst$kw$target,"_blank"),"Down\u2019s Heart Group:"], null)," a charity offering support and information\n    relating to heart conditions associated with Down's Syndrome."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.heartline.org.uk",cljs.core.cst$kw$target,"_blank"),"Heartline:"], null)," supports children with heart disorders and their\n    families, whatever the condition wherever it is treated"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.lagans.org.uk",cljs.core.cst$kw$target,"_blank"),"Lagan\u2019s Foundation:"], null)," offers home respite and support services for\n     young children with heart defects or feeding issues."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.lhm.org.uk",cljs.core.cst$kw$target,"_blank"),"Little Hearts Matter:"], null)," offers support and information, and raises\n    awareness of those affected when a child has only half a heart."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.maxappeal.org.uk",cljs.core.cst$kw$target,"_blank"),"Max Appeal:"], null)," Supports families affected by DiGeorge syndrome,\n     VCFS and 22q11.2 deletion."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.younghearts.org.uk",cljs.core.cst$kw$target,"_blank"),"Oxford Young Hearts:"], null),"  support children with heart conditions\n     and their families in the counties served by the Oxford University Hospitals NHS Trust. "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.patchesheartgroup.org",cljs.core.cst$kw$target,"_blank"),"Patches Heart Group:"], null)," a support group for children with\n    congenital heart defects / aquired heart conditions and their families in the community."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.youngheart.info",cljs.core.cst$kw$target,"_blank"),"The Scottish Association for Children with Heart Disorders\n     (SACHD):"], null)," supports children and young adults with congenital heart disorders, and the families in Scotland."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.thesf.org.uk",cljs.core.cst$kw$target,"_blank"),"Somerville Foundation:"], null)," supports young people and adults born with a\n    heart condition."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.22crew.org",cljs.core.cst$kw$target,"_blank"),"The 22 Crew:"], null),"  A charity providing resources for patients with 22q\n     deletion and their families."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("//www.tinytickers.org",cljs.core.cst$kw$target,"_blank"),"Tiny tickers:"], null)," improving the detection, care and treatment of\n    babies with serious heart conditions"], null)], null);
prais2.content.render_charity_list = (function prais2$content$render_charity_list(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Charities"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$charities,(function (){var iter__4311__auto__ = (function prais2$content$render_charity_list_$_iter__19653(s__19654){
return (new cljs.core.LazySeq(null,(function (){
var s__19654__$1 = s__19654;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__19654__$1);
if(temp__5753__auto__){
var s__19654__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19654__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__19654__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__19656 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__19655 = (0);
while(true){
if((i__19655 < size__4310__auto__)){
var charity = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__19655);
cljs.core.chunk_append(b__19656,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,charity], null));

var G__19669 = (i__19655 + (1));
i__19655 = G__19669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19656),prais2$content$render_charity_list_$_iter__19653(cljs.core.chunk_rest(s__19654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19656),null);
}
} else {
var charity = cljs.core.first(s__19654__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,charity], null),prais2$content$render_charity_list_$_iter__19653(cljs.core.rest(s__19654__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__(prais2.content.unassoc_charity_list);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Hospitals and hospital-associated charities"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$charities,(function (){var iter__4311__auto__ = (function prais2$content$render_charity_list_$_iter__19657(s__19658){
return (new cljs.core.LazySeq(null,(function (){
var s__19658__$1 = s__19658;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__19658__$1);
if(temp__5753__auto__){
var s__19658__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19658__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__19658__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__19660 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__19659 = (0);
while(true){
if((i__19659 < size__4310__auto__)){
var h_code = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__19659);
cljs.core.chunk_append(b__19660,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.first((h_code.cljs$core$IFn$_invoke$arity$1 ? h_code.cljs$core$IFn$_invoke$arity$1(prais2.content.hospital_metadata) : h_code.call(null,prais2.content.hospital_metadata)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4311__auto__ = ((function (i__19659,h_code,c__4309__auto__,size__4310__auto__,b__19660,s__19658__$2,temp__5753__auto__){
return (function prais2$content$render_charity_list_$_iter__19657_$_iter__19661(s__19662){
return (new cljs.core.LazySeq(null,((function (i__19659,h_code,c__4309__auto__,size__4310__auto__,b__19660,s__19658__$2,temp__5753__auto__){
return (function (){
var s__19662__$1 = s__19662;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__19662__$1);
if(temp__5753__auto____$1){
var s__19662__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19662__$2)){
var c__4309__auto____$1 = cljs.core.chunk_first(s__19662__$2);
var size__4310__auto____$1 = cljs.core.count(c__4309__auto____$1);
var b__19664 = cljs.core.chunk_buffer(size__4310__auto____$1);
if((function (){var i__19663 = (0);
while(true){
if((i__19663 < size__4310__auto____$1)){
var charity = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto____$1,i__19663);
cljs.core.chunk_append(b__19664,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,charity], null));

var G__19670 = (i__19663 + (1));
i__19663 = G__19670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19664),prais2$content$render_charity_list_$_iter__19657_$_iter__19661(cljs.core.chunk_rest(s__19662__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19664),null);
}
} else {
var charity = cljs.core.first(s__19662__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,charity], null),prais2$content$render_charity_list_$_iter__19657_$_iter__19661(cljs.core.rest(s__19662__$2)));
}
} else {
return null;
}
break;
}
});})(i__19659,h_code,c__4309__auto__,size__4310__auto__,b__19660,s__19658__$2,temp__5753__auto__))
,null,null));
});})(i__19659,h_code,c__4309__auto__,size__4310__auto__,b__19660,s__19658__$2,temp__5753__auto__))
;
return iter__4311__auto__(cljs.core.rest((h_code.cljs$core$IFn$_invoke$arity$1 ? h_code.cljs$core$IFn$_invoke$arity$1(prais2.content.hospital_metadata) : h_code.call(null,prais2.content.hospital_metadata))));
})()], null)], null));

var G__19671 = (i__19659 + (1));
i__19659 = G__19671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19660),prais2$content$render_charity_list_$_iter__19657(cljs.core.chunk_rest(s__19658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19660),null);
}
} else {
var h_code = cljs.core.first(s__19658__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.first((h_code.cljs$core$IFn$_invoke$arity$1 ? h_code.cljs$core$IFn$_invoke$arity$1(prais2.content.hospital_metadata) : h_code.call(null,prais2.content.hospital_metadata)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4311__auto__ = ((function (h_code,s__19658__$2,temp__5753__auto__){
return (function prais2$content$render_charity_list_$_iter__19657_$_iter__19665(s__19666){
return (new cljs.core.LazySeq(null,((function (h_code,s__19658__$2,temp__5753__auto__){
return (function (){
var s__19666__$1 = s__19666;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__19666__$1);
if(temp__5753__auto____$1){
var s__19666__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19666__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__19666__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__19668 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__19667 = (0);
while(true){
if((i__19667 < size__4310__auto__)){
var charity = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__19667);
cljs.core.chunk_append(b__19668,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,charity], null));

var G__19672 = (i__19667 + (1));
i__19667 = G__19672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19668),prais2$content$render_charity_list_$_iter__19657_$_iter__19665(cljs.core.chunk_rest(s__19666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19668),null);
}
} else {
var charity = cljs.core.first(s__19666__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,charity], null),prais2$content$render_charity_list_$_iter__19657_$_iter__19665(cljs.core.rest(s__19666__$2)));
}
} else {
return null;
}
break;
}
});})(h_code,s__19658__$2,temp__5753__auto__))
,null,null));
});})(h_code,s__19658__$2,temp__5753__auto__))
;
return iter__4311__auto__(cljs.core.rest((h_code.cljs$core$IFn$_invoke$arity$1 ? h_code.cljs$core$IFn$_invoke$arity$1(prais2.content.hospital_metadata) : h_code.call(null,prais2.content.hospital_metadata))));
})()], null)], null),prais2$content$render_charity_list_$_iter__19657(cljs.core.rest(s__19658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__(prais2.content.sorted_active_h_codes());
})()], null)], null);
});
prais2.content.bar_comments = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$inner,"If the black dot is in this area then there is no evidence that chances of survival in the hospital were\n   different from what is predicted",cljs.core.cst$kw$outer_DASH_high,"If the black dot is in this area then there is some evidence that chances of survival in the hospital\n    were higher than predicted",cljs.core.cst$kw$outer_DASH_low,"If the black dot is in this area then there is some evidence that chances of survival in the hospital\n    were lower than predicted.",cljs.core.cst$kw$low,"If the black dot is in this area then there is strong evidence that chances of survival in the hospital\n    were lower than predicted.",cljs.core.cst$kw$high,"If the black dot is in this area then there is strong evidence that chances of survival in the hospital\n    were higher than predicted."], null);
/**
 * 
 */
prais2.content.inner_comment = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (_){
return React.createElement("span",null,"There is no evidence that chances of survival in the hospital were different from predicted.");
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"inner-comment");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19675__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19675 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19676__i = 0, G__19676__a = new Array(arguments.length -  0);
while (G__19676__i < G__19676__a.length) {G__19676__a[G__19676__i] = arguments[G__19676__i + 0]; ++G__19676__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19676__a,0,null);
} 
return G__19675__delegate.call(this,args__14302__auto__);};
G__19675.cljs$lang$maxFixedArity = 0;
G__19675.cljs$lang$applyTo = (function (arglist__19677){
var args__14302__auto__ = cljs.core.seq(arglist__19677);
return G__19675__delegate(args__14302__auto__);
});
G__19675.cljs$core$IFn$_invoke$arity$variadic = G__19675__delegate;
return G__19675;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.content.high_comment = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (close_modal){
return React.createElement("span",null,"There is some evidence that chances of survival in the hospital were ",(function (){var attrs19678 = prais2.core.href.cljs$core$IFn$_invoke$arity$2("faq/1/2",close_modal);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs19678))?sablono.interpreter.attributes(attrs19678):null),((cljs.core.map_QMARK_(attrs19678))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["higher than predicted."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19678),"higher than predicted."], null)));
})());
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"high-comment");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19679__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19679 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19680__i = 0, G__19680__a = new Array(arguments.length -  0);
while (G__19680__i < G__19680__a.length) {G__19680__a[G__19680__i] = arguments[G__19680__i + 0]; ++G__19680__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19680__a,0,null);
} 
return G__19679__delegate.call(this,args__14302__auto__);};
G__19679.cljs$lang$maxFixedArity = 0;
G__19679.cljs$lang$applyTo = (function (arglist__19681){
var args__14302__auto__ = cljs.core.seq(arglist__19681);
return G__19679__delegate(args__14302__auto__);
});
G__19679.cljs$core$IFn$_invoke$arity$variadic = G__19679__delegate;
return G__19679;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.content.low_comment = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (close_modal){
return React.createElement("span",null,"There is some evidence that chances of survival in the hospital were ",(function (){var attrs19682 = prais2.core.href.cljs$core$IFn$_invoke$arity$2("faq/1/4",close_modal);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs19682))?sablono.interpreter.attributes(attrs19682):null),((cljs.core.map_QMARK_(attrs19682))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lower than predicted."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19682),"lower than predicted."], null)));
})());
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"low-comment");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19683__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19683 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19684__i = 0, G__19684__a = new Array(arguments.length -  0);
while (G__19684__i < G__19684__a.length) {G__19684__a[G__19684__i] = arguments[G__19684__i + 0]; ++G__19684__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19684__a,0,null);
} 
return G__19683__delegate.call(this,args__14302__auto__);};
G__19683.cljs$lang$maxFixedArity = 0;
G__19683.cljs$lang$applyTo = (function (arglist__19685){
var args__14302__auto__ = cljs.core.seq(arglist__19685);
return G__19683__delegate(args__14302__auto__);
});
G__19683.cljs$core$IFn$_invoke$arity$variadic = G__19683__delegate;
return G__19683;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.content.outer_low_comment = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (close_modal){
return React.createElement("span",null,"There is strong evidence that chances of survival in the hospital were ",(function (){var attrs19686 = prais2.core.href.cljs$core$IFn$_invoke$arity$2("faq/1/4",close_modal);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs19686))?sablono.interpreter.attributes(attrs19686):null),((cljs.core.map_QMARK_(attrs19686))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lower than predicted."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19686),"lower than predicted."], null)));
})());
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"outer-low-comment");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19687__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19687 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19688__i = 0, G__19688__a = new Array(arguments.length -  0);
while (G__19688__i < G__19688__a.length) {G__19688__a[G__19688__i] = arguments[G__19688__i + 0]; ++G__19688__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19688__a,0,null);
} 
return G__19687__delegate.call(this,args__14302__auto__);};
G__19687.cljs$lang$maxFixedArity = 0;
G__19687.cljs$lang$applyTo = (function (arglist__19689){
var args__14302__auto__ = cljs.core.seq(arglist__19689);
return G__19687__delegate(args__14302__auto__);
});
G__19687.cljs$core$IFn$_invoke$arity$variadic = G__19687__delegate;
return G__19687;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.content.outer_high_comment = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (close_modal){
return React.createElement("span",null,"There is strong evidence that chances of survival in the hospital were ",(function (){var attrs19690 = prais2.core.href.cljs$core$IFn$_invoke$arity$2("faq/1/2",close_modal);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs19690))?sablono.interpreter.attributes(attrs19690):null),((cljs.core.map_QMARK_(attrs19690))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["higher than predicted."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs19690),"higher than predicted."], null)));
})());
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"outer-high-comment");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__19691__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__19691 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__19692__i = 0, G__19692__a = new Array(arguments.length -  0);
while (G__19692__i < G__19692__a.length) {G__19692__a[G__19692__i] = arguments[G__19692__i + 0]; ++G__19692__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__19692__a,0,null);
} 
return G__19691__delegate.call(this,args__14302__auto__);};
G__19691.cljs$lang$maxFixedArity = 0;
G__19691.cljs$lang$applyTo = (function (arglist__19693){
var args__14302__auto__ = cljs.core.seq(arglist__19693);
return G__19691__delegate(args__14302__auto__);
});
G__19691.cljs$core$IFn$_invoke$arity$variadic = G__19691__delegate;
return G__19691;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
prais2.content.glossary = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$risk_DASH_adjustment,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Risk Adjustment",cljs.core.cst$kw$body,"Since hospitals treat different children and different children have different chances of survival, we cannot\n    not expect hospitals to have the same survival rate. To understand a hospital\u2019s survival rate we need to put its\n    rate into the context of what children that hospital treated. Combining different risk factors (such as age,\n    weight, complexity of heart disease) into a single formula to calculate the predicted range means we can put a\n    hospital\u2019s survival rate into context. This overall process is called \u201Crisk adjustment\u201D and the formula is a\n    \u201Crisk adjustment method\u201D. "], null),cljs.core.cst$kw$survival_DASH_rate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Survival rate",cljs.core.cst$kw$body,"The percentage of operations where the child survived at least 30 days after their operation."], null),cljs.core.cst$kw$unforeseen_DASH_factors,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Unforeseeable factors",cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"It is impossible to predict precisely what is going to happen in an individual operation. This is partly due\n    to the inevitable inability to predict the future with certainty \u2013 all people are physically unique and will react\n    slightly differently to medicines, anaesthetic, surgery and no heart problem is exactly the same as another."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"There are also factors that we suspect may influence the outcome but cannot be included in the statistical\n  formula because no routine audit data on them is collected, for instance the size of a hole in the heart."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Together, we call these all \u201Cunforeseeable factors\u201D."], null)], null)], null),cljs.core.cst$kw$predicted_DASH_range,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Predicted and Extended Predicted range:",cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"We expect a hospital's overall survival rate to lie within its ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$em,"predicted range"], null)," 19 times out of 20. "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"We expect a hospital's overall survival rate to lie within its ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$em,"extended predicted range"], null)," 998 times out of 1000. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"An illustration of how we present a hospital's survival rate (black dot) in\n                                     the context of its predicted range (dark blue bar) and extended prediction range\n                                     (light blue bar) is given below:"], null)], null)], null)], null);
prais2.content.title = "Everything else";
prais2.content.faq_sections = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$section,"Background",cljs.core.cst$kw$faqs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Why do some children need heart surgery?",cljs.core.cst$kw$short_DASH_title,"Why the need?",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"About 6500\u20147500 babies are born with a heart defect (called congenital heart disease) in the UK and\n       Ireland every year. Congenital heart disease covers a wide range of problems from the relatively minor (such as a\n       small hole in the heart) to more severe conditions where a child needs specialist hospital care. About half of\n       all children born with a heart defect will need heart surgery at some stage in their childhood. Children can also\n       develop problems with their heart as they grow up which require hospital care (called acquired heart disease). "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Read more about ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.chfed.org.uk/how-we-help/information-service/heart-conditions/",cljs.core.cst$kw$target,"_blank"),"different heart conditions"], null)," and caring for children with heart conditions on the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.chfed.org.uk/how-we-help/information-service/caring-for-heart-children/",cljs.core.cst$kw$target,"_blank"),"Children\u2019s Heart Federation\u2019s website."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Why are survival rates after children's heart surgery monitored and published?",cljs.core.cst$kw$short_DASH_title,"Why monitor survival?",cljs.core.cst$kw$glossary,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$survival_DASH_rate], null),cljs.core.cst$kw$short_DASH_answer,"The NHS monitors survival rates after children\u2019s heart surgery to check if recent survival rates at\n      any hospital are much lower than predicted.",cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://webarchive.nationalarchives.gov.uk/20090811143745/http:/www.bristol-inquiry.org.uk/final_report/the_report.pdf",cljs.core.cst$kw$target,"_blank")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$thumbnail$pull_DASH_left$w100,prais2.core.isrc.cljs$core$IFn$_invoke$arity$1("assets/bristol.png")], null),"In the 1990s, problems were found with the standard of care for children having heart surgery at the Bristol\n                               Royal Infirmary. The proportion of children who died after surgery at Bristol was much higher than other UK\n                               hospitals. There was a formal inquiry into what happened (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://webarchive.nationalarchives.gov.uk/20090811143745/http:/www.bristol-inquiry.org.uk/final_report/the_report.pdf",cljs.core.cst$kw$target,"_blank"),"The Bristol Inquiry 2001"], null),"), which led to a number of changes, including a new compulsory national reporting\n                               system. Since 2007, the proportions of children surviving to 30 days after heart surgery\n                               for most types of operations have been published every year. The overall survival rates\n                               after children\u2019s heart surgery for each hospital have been published since 2013. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/1/4"),"When there is some, or strong, evidence"], null)," that chances of\n                               survival at a hospital were lower than expected, the results are\n                               checked further by the hospital and the national audit body (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("http://www.ucl.ac.uk/nicor/audits/congenital"),"NCHDA"], null),")."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The UK and Ireland now have one of the strongest monitoring programmes in the world. Since reporting started, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.bbc.co.uk/news/health-32162803",cljs.core.cst$kw$target,"_blank"),"survival rates have been improving"], null),"\n        and now ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"over 97% of children survive to at least one month after surgery."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"How are survival rates monitored?",cljs.core.cst$kw$short_DASH_answer,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Every year the national audit body (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank"),"National Congenital Heart Disease Audit"], null),") publishes overall survival rates for each\n               hospital for the previous 3 years. Each hospital\u2019s survival rates are compared to what is predicted\n               for that hospital by a statistical formula."], null),cljs.core.cst$kw$glossary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$survival_DASH_rate,cljs.core.cst$kw$predicted_DASH_range], null),cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.ucl.ac.uk/nicor/patients",cljs.core.cst$kw$target,"_blank"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$thumbnail$pull_DASH_left$w100,prais2.core.isrc.cljs$core$IFn$_invoke$arity$1("assets/nicor.png")], null)], null),"Since 2007, the national audit body (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank"),"NCHDA"], null),") has published survival rates for certain\n                               ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://nicor4.nicor.org.uk/CHD/an_paeds.nsf/WBenchmarksYears?openview&RestrictToCategory=2014&start=1&count=500",cljs.core.cst$kw$target,"_blank"),"types of procedure"], null)," (now over 70 different procedures) at each hospital. But the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("http://www.ucl.ac.uk/nicor/audits/congenital"),"NCHDA"], null)," did not\n                               publish overall survival rates for each hospital until 2013, because there was no clear way to put\n                               overall survival rates for each hospital into context\n                               (see ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("intro"),"What, Why and How?"], null),").\n\n                               However ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://www.ucl.ac.uk/operational-research/AnalysisTools/PRAiS",cljs.core.cst$kw$target,"_blank"),"researchers"], null)," have now made this possible by creating a statistical formula that gives a predicted\n                               chance of a child\u2019s 30-day survival, taking the complexity of their medical problems\n                               into account. So since 2013, NCHDA has used this formula to calculate the predicted\n                               and extended predicted ranges of survival for each hospital, so that the hospital\u2019s\n                               survival rate can be interpreted in the context of the children it treated\n                               (see ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("intro"),"What, Why and How?"], null),").  "], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The predicted range\n                              is the range in which we expect to see each hospital\u2019s survival rate the majority of\n                              the time (see our video ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs"),"How is the predicted range calculated?"], null),"). ","The predicted range is calculated using the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"same"], null)," statistical formula for all hospitals and\n       this prediction is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"not"], null)," influenced by what the survival rate at a hospital actually was (see our short video ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_video_DASH_camera], null)," How is the predicted range calculated?"], null),"). ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/1/4"),"See what happens if\n                               the survival rate falls"], null)," below its predicted range."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Operations that occur within 30 days of each other are treated as a single operation when reporting overall\n       survival."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("http://www.ucl.ac.uk/nicor/audits/congenital"),"NCHDA"], null)," publishes all its reports ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://nicor4.nicor.org.uk/chd/an_paeds.nsf/vwContent/Analysis%20Documents?Opendocument",cljs.core.cst$kw$target,"_blank"),"here"], null),". "], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Where is this data from?",cljs.core.cst$kw$short_DASH_answer,"The data on each child\u2019s operation and what was wrong with their heart comes from the hospital\u2019s\n      records. The data on whether a child survived to 30 days after their operation comes from both the hospital and\n      the Office of National Statistics.",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Each hospital in the UK and Ireland must collect data on every surgery or intervention carried out on a\n       child under 16 years old. Every three months, hospitals must submit this data to the national audit body, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank"),"NCHDA"], null)," (The National Institute for\n        Cardiovascular Outcomes Research). NCHDA sets out exactly what data is collected and each hospital undergoes\n        independent checks of the quality of their submitted data. NCHDA also reports to the UK Department of Health,\n        the Care Quality Commission (CQC) and other NHS regulatory bodies."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank"),"NCHDA"], null)," tracks the survival of these children by linking to the national register of deaths\n                               using patients\u2019 NHS number (in England and Wales) and also from hospital records."], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$section,"Understanding the predicted range",cljs.core.cst$kw$faqs,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Why is a different survival range predicted for each hospital?",cljs.core.cst$kw$short_DASH_title,"Why do predictions differ?",cljs.core.cst$kw$short_DASH_answer,"The predicted range of survival is the range in which we expect to see each hospital\u2019s\n               survival rate the majority of the time. It depends only on the complexity of the medical problems of the\n               children who had heart operations. Each hospital treats different children and so each hospital will have\n               a different predicted range.",cljs.core.cst$kw$glossary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$survival_DASH_rate,cljs.core.cst$kw$predicted_DASH_range], null),cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Heart disease in children covers a wide range of disorders, from relatively minor to more serious\n       conditions. This affects a child's chances of survival, as do other factors such as age, weight and other health\n       problems."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Some hospitals take on more cases that are particularly complicated, meaning they tend to operate on\n       children with a lower chance of survival. Each hospital will also treat different children from year to year,\n       so we expect any hospital\u2019s survival rate to vary from year to year. We therefore would not expect all\n       hospitals to have the same survival rates and it is not valid to simply compare hospitals' survival rates.\n       It is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,"only valid"], null)," to compare a hospital\u2019s survival rate to its own predicted range."], null),null], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Why does the width of the predicted range differ between hospitals?",cljs.core.cst$kw$glossary,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unforeseen_DASH_factors,cljs.core.cst$kw$survival_DASH_rate,cljs.core.cst$kw$predicted_DASH_range], null),cljs.core.cst$kw$short_DASH_answer,"If a hospital does fewer operations, unforeseeable factors have a bigger influence on its overall\n      survival rate. Therefore the predicted range is wider for hospitals that do fewer operations.",cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"A predicted range of survival is calculated individually for each hospital, taking\n                              into account the children it treated.  If the chances of survival at that hospital are\n                              as predicted, then we expect the hospital\u2019s survival rate to lie within the predicted\n                              range 19 times out of 20. The width of the predicted range varies with the number of\n                              operations a hospital has done, because of unforeseeable factors that occur. We know\n                              that sometimes unforeseeable factors will affect a child\u2019s survival \u2013 though, of course,\n                              we cannot predict exactly what they will be and when they will occur. In a smaller\n                              hospital that performs 100 operations per year, even if one more or one fewer child\n                              survives due to unforeseeable factors, this could make a big difference to that\n                              hospital\u2019s overall survival rate. However such unforeseeable factors would have less\n                              influence on the overall survival rate of a larger hospital performing 1000 operations.\n                              This is why hospitals doing more operations have a narrower predicted range than hospitals\n                              doing fewer operations."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"When looking at just one hospital, what does it mean if its survival is outside its\n              predicted range?",cljs.core.cst$kw$short_DASH_answer,"There are four possible reasons why a hospital might be outside its predicted range:\n               inaccurate data, a formula that for some reason doesn\u2019t work well for that hospital, just by chance\n               (1 time in 20), or because the chances of survival at that hospital are different to what is predicted. ",cljs.core.cst$kw$glossary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$survival_DASH_rate,cljs.core.cst$kw$predicted_DASH_range], null),cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Possible reasons for a hospital\u2019s survival rate being outside its predicted range of survival:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"1. Inaccurate data"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Each hospital and the Office of National Statistics supply data on each child to the national audit body.\n       Although the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/2/1"),"data submitted is of very high quality"], null),", there will always be some\n       inaccuracies in such large datasets. If a hospital submits data where some of the data is very wrong or missing, then this will result in a wrong predicted range."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"2. The formula doesn\u2019t work well for that hospital"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The statistical formula is applied to all operations at that hospital to calculate its overall predicted\n       range of survival. Although ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/2/0"),"the formula is as good as we can currently get it"], null),", it is not perfect.\n       There will always be unique features about a child that affect their\n       chance of survival that are not captured by national data collection and so cannot be part of a formula (e.g. the\n       size of a hole in the heart). We will never be able to capture the whole medical picture of a child in a single\n       formula. That means that the predicted range is the best possible guess for what the predicted range should be.\n       If a hospital happens to have operated on a lot of children with unique features that affect their chances of\n       survival but are not captured by the formula, the predicted range might be unfairly high for that hospital."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"3. Chance"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"If the hospital\u2019s data contains no errors and there\u2019s no reason to think that the\n                              formula shouldn\u2019t apply well to that hospital, then in 19 times out of 20, we\u2019d expect\n                              to see a hospital\u2019s overall survival range within the predicted range. This means that\n                              the hospital\u2019s survival rate could be outside its predicted range just by chance\n                              (1 time in 20). (You can also watch ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faqs"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_video_DASH_camera], null)," our short video"], null)," on how the predicted range is calculated.)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"4. The chances of survival at that hospital are different to what are predicted by the formula."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The chances of survival for children at the hospital could genuinely be much higher or lower than what is\n       predicted, which would make it more likely that the hospital\u2019s survival rate would lie outside its predicted\n       range. The national audit process is intended to check that no hospital in the UK and Ireland has chances of\n       survival much lower than predicted. See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/1/4"),"What happens if a hospital\u2019s survival is below its predicted range"], null)," to\n       find out what happens in such situations."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"When looking at ALL hospitals simultaneously, what does it mean if any of the hospitals have a survival\n     rate outside their predicted range?",cljs.core.cst$kw$short_DASH_answer,"When looking at all 13 hospitals at once, we expect at least one hospital\u2019s survival rate to be\n      outside its predicted range about half the time.",cljs.core.cst$kw$glossary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$survival_DASH_rate,cljs.core.cst$kw$predicted_DASH_range], null),cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"If we were looking at only one hospital, we\u2019d expect its survival rate to fall\n                              outside its predicted range rarely if chances of survival at the hospital match the\n                              formula: only 1 time in 20 just by chance. But, if we are looking at all 13 hospitals\n                              at once, we\u2019d actually expect that at least one hospital will fall outside its range\n                              just by chance about 9 times in 20."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This is similar to the situation where you hear a friend won a good prize in a raffle. This may be\n       surprising, but it becomes a lot less surprising when you hear they bought 100 tickets. Just as this gave them\n       more chances of winning, the more hospitals we look at, the more likely it becomes that at least one will fall\n       outside its range, even if survival at all the hospitals matches the formula."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"So, on average, we\u2019d anticipate about half of NCHDA\u2019s annual reports to have at least one hospital outside\n       its range, either above or below, by chance alone."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/1/4"),"what happens if a hospital falls below its predicted or extended predicted range."], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Considering now the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,"extended predicted range"], null)], null),", if we look at all 13 hospitals at once, we\u2019d only\n       expect ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,"any"], null)," one of them to be outside their extended range very rarely, just 1 time in 40. This is why\n       a hospital\u2019s survival rate being outside the extended predicted range is considered strong evidence that the\n       chances of a patient surviving at that hospital are different to what is expected."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"What actually happens if a hospital\u2019s survival rate is below its predicted range?",cljs.core.cst$kw$short_DASH_answer,"The national audit body works with the hospital to check the quality of the data. If this is fine,\n      the hospital and the relevant national health service explore the processes of care at that hospital. If these\n      bring to light any concerns, the health service and the hospital work together to improve care, which might\n      include temporarily suspending heart surgery at that centre. ",cljs.core.cst$kw$glossary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$survival_DASH_rate,cljs.core.cst$kw$predicted_DASH_range], null),cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p," If a hospital\u2019s survival rate is below its predicted range (either the main or\n                              extended predicted range), everyone wants to\n       be sure that there is not a potential problem in the pathway of care. It is important to either rule this out or\n       start to improve care if it\u2019s decided that this is the reason. (See also ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/1/2"),"What does it mean if a hospital is outside its predicted range?"], null),")."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"If a hospital's survival rate is below the predicted range, the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://www.ucl.ac.uk/nicor/audits/congenital/governance",cljs.core.cst$kw$target,"_blank"),"National Congenital\n        Heart Disease Audit Steering Committee "], null)," is notified. The Committee in turn notifies the relevant national health service\u2019s Medical Director and the\n                               lead doctor for congenital heart disease at that hospital and a detailed examination of the hospital\u2019s results\n                               takes place. There are established and published procedures which can be put into action if the detailed\n                               assessment raises concerns about care. In England, for instance, this would involve the\n                               ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.bcs.com/pages/page_affiliate.asp?PageID=321",cljs.core.cst$kw$target,"_blank"),"British\n                               Congenital Cardiac Association"], null)," and/or the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.cqc.org.uk/",cljs.core.cst$kw$target,"_blank"),"Care Quality Commission."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p," There are two main steps:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Step 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The hospital is asked to recheck the data it submitted for any errors."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Step 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"With the corrected data:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"If the hospital\u2019s survival rate is still below its predicted range but within the extended predicted range\n       (like this ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,prais2.core.isrc("assets/below-predicted.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"18px"], null))], null),"), then an internal hospital review is conducted to understand whether there is cause\n       for concern. "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"If the hospital\u2019s survival rate is below the extended predicted range (like this ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,prais2.core.isrc("/assets/below-extended.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"18px"], null))], null)," ),\n       then an external review of the hospital\u2019s processes and results would be instigated."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"In all such cases, the reviews (whether internal or external) would be published online by NCHDA at the same\n       time as the Annual Report."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"NOTE: It is quite common for one of the 13 hospitals to be outside its predicted\n                              range, but it is rare for any of them to be outside the extended predicted range.\n                              (See also: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/1/3"),"Looking at ALL hospitals"], null),")"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The NCHDA also publishes additional reports from any hospital which has a survival\n                              rate below its predicted range. These are ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("https://nicor4.nicor.org.uk/chd/an_paeds.nsf/vwContent/Analysis%20Documents?Opendocument"),"available here"], null),", along with the NCHDA annual reports."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"What actually happens if a hospital\u2019s survival rate is above its predicted range?",cljs.core.cst$kw$short_DASH_answer,"Healthcare services are currently looking into the best way to capture learning from hospitals\n               where there is strong evidence that chances of survival were higher than predicted using the formula. ",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,null], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Where did the formula used to calculate the predicted range come from?",cljs.core.cst$kw$body,null,cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$short_DASH_answer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The national audit body uses a formula developed by researchers at Great Ormond Street Hospital and\n       University College London called PRAiS (Partial Risk Adjustment in Surgery - see also the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("intro"),"What, why, how?"], null)," section). The underlying methodology of this method is published in\n        the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://www.ucl.ac.uk/operational-research/AnalysisTools/PRAiS",cljs.core.cst$kw$target,"_blank"),"academic\n        literature"], null)," if you are interested in learning more details."], null),null], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$section,"Limitations of these results and the data",cljs.core.cst$kw$faqs,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Are there any limitations to using a formula?",cljs.core.cst$kw$short_DASH_answer,"Yes \u2013 a child\u2019s chances of survival can never be completely captured in a single formula. ",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Yes there are. While using a formula to take into account the complexity of each\n                              child\u2019s medical problems allows for fairer assessment of a hospital\u2019s survival rate,\n                              it still cannot make it completely fair. There will always be information about\n                              important factors that affect a child\u2019s chances of survival that are not routinely\n                              collected for national bodies and so cannot be captured by a formula that was developed\n                              using national data."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Any statistical formula has to be developed on existing data and so the data will be typically at least a\n       year out of date. So risk adjustment cannot adjust or account for future changes to the way data is collected\n       (for instance more complete data) or new methods of surgical or medical management. Often, these statistical\n       formulas are updated every few years with more up to date information (in 2016, we updated the PRAiS statistical model for the third time). "], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"How reliable are the data?",cljs.core.cst$kw$short_DASH_answer,"The data are of very high quality and some of the best in the world.",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The data come from the National Congenital Heart Disease Audit (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital",cljs.core.cst$kw$target,"_blank"),"NCHDA"], null),")\n                               which is managed by the National Institute of Cardiovascular Outcomes Research (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("https://www.ucl.ac.uk/nicor"),"NICOR"], null),"). ","All hospitals in the UK and Ireland performing heart\n       surgery in children have to submit their data in a standard format to NCHDA. All hospitals are independently\n       audited each year as part of a data validation process (to check the quality of the data submitted) to ensure\n       that the data are of high quality."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"While no large dataset is perfect (it is inevitable that a few records will not be 100% accurate), this\n       dataset is among the most detailed and complete in the world for children\u2019s heart surgery."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"What are the limitations of the data?",cljs.core.cst$kw$short_DASH_answer,"These data do not capture all the potential medical problems a child has and only represent a\n      snapshot of survival outcomes. They cannot capture the full picture of the quality of care provided by a hospital.",cljs.core.cst$kw$glossary,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unforeseen_DASH_factors], null),cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Apart from occasional inaccuracies in the data, there are other limits to what the data can tell us about\n       surgery outcomes. There are factors that affect a child\u2019s chances of survival that are not routinely collected\n       for by national bodies and so cannot be captured by a formula that was developed using national data. These data are\n       also snapshots in time of what happened at each hospital. A run of unforeseeable factors could cause a very good\n       hospital to have worse outcomes than predicted, so we need to be careful about reading too much into results from\n       any single time period."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The data also can\u2019t tell us about how or why a hospital achieved the recorded\n                              results, so it cannot, by itself, tell us whether one hospital offers better or worse\n                              quality care than any other. These data cannot tell you what the results are likely to be\n                              next year. It also cannot tell us anything about what happens to children who never get\n                              operated on for whatever reason, since data on these children is not currently submitted\n                              to national audit."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"What about longer term survival and quality of life?",cljs.core.cst$kw$short_DASH_answer,"At the moment these are not reported. There is active research underway to work out how to report\n      long term survival and quality of life for children after heart surgery but it will be some years before this\n      becomes part of routine national audit.",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"As of 2017, national audit only monitors what happens shortly after surgery (30 days). These data cannot\n       tell us about longer term (e.g. 5 year) survival, or other outcomes such as post-surgery complication rates or\n       the impact of surgery on the child or their family. There is a lot of ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.gosh.nhs.uk/medical-information/clinical-specialties/cardiothoracic-surgery-information-parents-and-visitors/research/complications-after-heart-surgery-children",cljs.core.cst$kw$target,"_blank"),"active research"], null)," going on right now (due to finish around 2018) investigating how to\n             capture, interpret and publish longer term survival and complication rates so hopefully this information\n             will become available in the next 5 years."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Why is survival to 30 days after surgery used as the main survival measure?",cljs.core.cst$kw$short_DASH_answer,"Survival to 30 days after surgery is a more objective measure than survival to hospital discharge,\n      since different types of hospital have different treatment pathways for very sick patients (for instance some will\n      transfer patients to another hospital or some to local palliative care). ",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Two very common measures used for looking at a hospital\u2019s outcomes are \u201Csurvival at discharge from hospital\u201D\n       and \u201C30 day survival\u201D after an operation. Survival at discharge is often used in other contexts as it\u2019s the\n       easiest to obtain \u2013 it is included within standard hospital records. However, survival to discharge does depend\n       on the discharge procedures at that hospital. For instance, some hospitals will transfer very sick patients to\n       other, more specialised hospitals, meaning that more patients will be alive at discharge from that hospital than\n       the specialised hospital. Some hospitals might have close links with local palliative care services and so might\n       discharge patients to these services if further treatment is considered unavailing. Again, such hospitals with\n       have more patients alive at discharge compared to a hospital that look after the sickest patients until they die. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Therefore, if it is available, \u201C30 day survival\u201D after surgery is considered a more objective and preferable\n       statistic than \u201Csurvival to hospital discharge\u201D, since it does not depend on the hospital\u2019s discharge procedures."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"While ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/2/3"),"longer term survival"], null)," is extremely important, 30-day survival post\n       surgery was initially chosen as it is more straightforward to link this outcome to a child\u2019s surgery and\n       post-operative care than a longer range survival  period which might, for instance, incorporate further treatment\n       at different hospitals. The other important aspect of monitoring 30-day survival, particularly within hospitals,\n       is that any worrying outcomes can be investigated very quickly since the survival outcomes are available\n       (locally) within 30 days of a child\u2019s operation."], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$section,"My family or child",cljs.core.cst$kw$faqs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Can this data inform my choice of hospital?",cljs.core.cst$kw$short_DASH_answer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"You can use this website to see how a hospital\u2019s survival rate compares to its\n                              predicted range, but the data cannot tell you which hospital to go to. Please discuss\n                              this with your child\u2019s clinical team or access the support offered by specialist\n                              charities such as the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.chfed.org.uk/",cljs.core.cst$kw$target,"_blank"),"Children\u2019s Heart Federation."], null)], null)], null),cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"On this site, you can ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("data"),"explore the data"], null)," to see how the\n                              different hospitals\u2019 survival rates compare to their own predicted ranges for 3 year report periods. You can also use the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://nicor4.nicor.org.uk/CHD/an_paeds.nsf/WBenchmarksYears?openview&RestrictToCategory=2014&start=1&count=500",cljs.core.cst$kw$target,"_blank"),"national audit website"], null)," to explore how many operations of each type a hospital does and survival outcomes for each of these. However,\n                               this website cannot, in itself, tell you which hospital you should go to and does not provide proof that one hospital is\n                               \u201Cbetter\u201D than any other. The safety or otherwise of a hospital ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"cannot"], null)," be determined from\n        survival data alone."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"When considering which hospital, there are many factors to take into account, including how well the\n       clinical team know your child and his or her medical history, any particular medical issues that your child has\n       (for instance, some hospitals specialise in treating children  with particularly complex medical problems) and\n       how far the hospital is from your home."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"You should discuss your child\u2019s care with their specialist cardiologist to determine the best treatment\n       option for your child."], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"You can also access the support available from national charities such as the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf",cljs.core.cst$kw$target,"_blank"),"Children\u2019s Heart Federation"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.lhm.org.uk/",cljs.core.cst$kw$target,"_blank"),"Little Hearts Matter"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/3/2"),"local charities for your specialist children\u2019s hospital"], null),".\n                               These guides on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf",cljs.core.cst$kw$target,"_blank"),"speaking to your child\u2019s surgeon"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf",cljs.core.cst$kw$target,"_blank"),"seeking a second opinion"], null),", written by the Children\u2019s Heart Federation, might also be helpful."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Can the published data tell me about the risks for my child?",cljs.core.cst$kw$short_DASH_answer,"No. Your child\u2019s clinical team will always know more about your child than the statistical formula can.",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"No, the published data cannot tell you about the risk for your child specifically \u2013 this will depend on\n       other factors that are not necessarily captured in the national data. Your child\u2019s specialist cardiologist and/or\n       cardiac surgeon will be able to discuss this with you. These guides on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf",cljs.core.cst$kw$target,"_blank"),"speaking to your child\u2019s surgeon"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf",cljs.core.cst$kw$target,"_blank"),"seeking a second opinion"], null),", written by the Children\u2019s Heart Federation, might also be helpful."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Charities and support groups for families of children with heart problems",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"We have collated a list of charities and support groups for families of children with heart problems (all\n       active as of 2016). Some of them specialise in certain heart conditions while others are only active in certain\n       places."], null),prais2.content.render_charity_list(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"NOTE: As of 2016, Royal Victoria Hospital in Belfast no longer operates on children with congenital heart\n       disease."], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$section,"Who developed this site and how",cljs.core.cst$kw$faqs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"About us",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$image_DASH_para,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$pull_DASH_left$w150,prais2.core.isrc.cljs$core$IFn$_invoke$arity$1("assets/ucl-logo-black.png")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://ucl.ac.uk/coru",cljs.core.cst$kw$target,"_blank"),"University College London"], null),": ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.ucl.ac.uk/operational-research/the_team/#christina",cljs.core.cst$kw$target,"_blank"),"Dr Christina Pagel"], null)," is a Reader in Operational Research (a branch of applied mathematics) at University College London, applying\n                            maths to problems in the NHS. She works very closely with doctors and other clinical staff, mainly at Great\n                            Ormond Street Hospital, to help them use routinely collected data to improve NHS services. Her work currently\n                            focuses on two areas: 1) care for children requiring heart surgery and 2) how specialist intensive care is\n                            organised for children who need it (for whatever reason). "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Christina helped developed a statistical method called PRAiS to let hospitals and the national audit body\n        easily monitor survival outcomes after heart surgery in children. In this project, Christina worked with Sense\n        about Science, the University of Cambridge, King\u2019s College London and the Children\u2019s Heart Federation to develop\n        these online resources to help people interpret the audit body\u2019s published results. In particular, she wrote a\n        lot of the content, helped enormously by feedback from the team and the user workshops. Thanks to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href(" http://www.ucl.ac.uk/operational-research/the_team/#andrew",cljs.core.cst$kw$target,"_blank")," Dr Andrew Wilshere"], null)," for designing our logo. "], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$image_DASH_para,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$pull_DASH_left$w150,prais2.core.isrc.cljs$core$IFn$_invoke$arity$1("assets/camlogo-old.png")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://understandinguncertainty.org",cljs.core.cst$kw$target,"_blank"),"Professor David Spiegelhalter"], null)," is a statistician from Cambridge University.   He has worked for many years with doctors from Great Ormond\n                            Street Hospital on monitoring outcomes following surgery for congenital heart disease, and led the statistical\n                            team at the Bristol Royal Infirmary Inquiry.  He is particularly interested in transparent communication, and\n                            was part of the team that drew up the new national patient information leaflets for breast cancer screening.\n                            For this project, David helped write the content, especially the language around the statistical formula and\n                            predicted range.  "], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://nrich.maths.org/2714",cljs.core.cst$kw$target,"_blank"),"Mike Pearson"], null)," has created many visualisations and interactives\n                            for ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://understandinguncertainty.org/",cljs.core.cst$kw$target,"_blank"),"Understanding Uncertainty"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://nrich.maths.org",cljs.core.cst$kw$target,"_blank"),"NRICH"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://plus.maths.org",cljs.core.cst$kw$target,"_blank"),"PLUS"], null),", and\n                            ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("http://wild.maths.org"),"Wild.maths.org"], null),". He developed this website and its\n                            data visualisations, attending the focus groups and working closely with Sense about Science and the video animation team, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://qudos.com",cljs.core.cst$kw$target,"_blank"),"Qudos"], null),"."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$image_DASH_para,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$pull_DASH_left$w100,prais2.core.isrc.cljs$core$IFn$_invoke$arity$1("assets/KCLlogo.gif")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("https://kclpure.kcl.ac.uk/portal/tim.rakow.html"),"Dr Tim Rakow"], null)," is a Reader in Psychology\n                            who studies how people make choices and how best to provide information to help people make decisions.\n                            He has previously worked with the cardiologists and heart surgeons at Great Ormond Street looking at\n                            their decisions about surgery, and with Professor Spiegelhalter on the public\u2019s understanding of\n                            complex statistical information. For this project, he worked with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("https://kclpure.kcl.ac.uk/portal/emily.1.blackshaw.html"),"Emily Blackshaw"], null),", another psychologist\n                            at King\u2019s College London, to run experiments that examined which types of explanation and graphics\n                            would be the best ones for us to include in this website."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$image_DASH_para,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$pull_DASH_left$w100,prais2.core.isrc.cljs$core$IFn$_invoke$arity$1("assets/sas-logo.png")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("http://www.senseaboutscience.org/"),"Sense About Science"], null)," is an\n                            independent campaigning charity that challenges the misrepresentation of science and scientific\n                            evidence in public life. They advocate openness and honesty about research findings and work\n                            to ensure the public interest in sound science and evidence is represented and recognised in\n                            public discussion and policy making."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Sense about Science has collaborated on a number of highly successful Public Engagement\n                           Partnerships, to help scientists to communicate their research findings simply and accurately\n                           by co-developing resources with the intended audience. Two of their team, Emily Jesper, Head\n                           of Partnerships and Governance and Joanne Thomas, Projects and Events Coordinator were\n                           involved in this project. They provided expertise in communicating complex scientific\n                           information and facilitated 8 user-testing workshops with parents, other interested users\n                           and members of the public to test that the information and animations on the website are\n                           clear, accessible and coherent."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$image_DASH_para,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$pull_DASH_left$w100,prais2.core.isrc.cljs$core$IFn$_invoke$arity$1("assets/chf-logo.png")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("http://www.chfed.org.uk/"),"The Children\u2019s Heart Federation"], null)," is the main umbrella body for British CHD charities and\n         voluntary organisations. They publicised this project among their members and coordinated the involvement of\n         parents of children who had heart surgery in our workshops."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Contact us",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"For general questions and comments about this website please email ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"mailto:enquiries@senseaboutscience.org"], null),"enquiries@senseaboutscience.org"], null),"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"For questions about the mathematical formula used, or the predicted range, please email ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"mailto:maths@childrensheartsurgery.info"], null),"maths@childrensheartsurgery.info."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"For reporting technical problems, please email ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"mailto:technical@childrensheartsurgery.info"], null),"technical@childrensheartsurgery.info."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"For questions about the audit process or any individual hospital's results, please contact the national audit body ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.ucl.ac.uk/nicor/audits/congenital ",cljs.core.cst$kw$target,"_blank"),"NCHDA"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"How we developed this site",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"We developed this site in just over a year from April 2015 until launch in June 2016. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The academic mathematicians and statisticians wrote first drafts of the content in May 2015, with feedback\n       from communication experts at Sense about Science and the academic psychologists at King\u2019s College London. Over\n       the next 10 months, Sense about Science held four sets of two workshops, to test the web content. At each stage,\n       one workshop was with interested potential users (e.g. press officers; health journalists; policy professionals)\n       and the other workshop was with parents of children who had heart surgery. At each stage, we invited different\n       individuals to attend each workshop in order to test the updated content with people who had not seen the previous\n       versions. We also asked participants from past workshops to provide feedback on the animations and website as they developed. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"As the website took shape in the autumn of 2015, the academic psychologists at King\u2019s College London did\n       formal tests of specific sentences and concepts discussed in the website to see if one way of explaining the\n       concepts worked better than another and to pinpoint where there was possibility for confusion. We also shared\n       the evolving website with the clinical community including surgeons, intensive care doctors, the national audit\n       body, data experts and cardiologists, to incorporate their feedback too. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Over time, the website took shape, evolving a great deal over the year in response to the workshops, the\n       psychology experiments and other feedback. We user tested everything from layout to colours to language to page\n       navigation and very little remains from the original draft content. "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Sense about Science have also produced a ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://senseaboutscience.org/activities/public-engagement-guide/",cljs.core.cst$kw$target,"_blank"),"free practical guide"], null)," for researchers on how to engage the public\n                                based on the model we used for this website."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Looking back, we cannot thank all those who gave feedback enough \u2013 this website is immeasurably better with\n       their input than it would otherwise have been. Any niggles that remain are our responsibility alone.  "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"We would also like to thank our funder, the UK National Institute of Health Research, for encouraging us to\n       think ambitiously about how to develop this site and giving us the time and money to do it. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Explanatory videos"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Very many thanks to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.therichardstonepartnership.co.uk/artist-details/leighton_pugh",cljs.core.cst$kw$target,"_blank"),"Leighton Pugh"], null)," for donating his time and expertise to narrating both\n                          videos. The artwork and production for both videos was with developed in collaboration with\n                          ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.qudos-animations.co.uk/",cljs.core.cst$kw$target,"_blank"),"Qudos Animations"], null),". We thank them\n                          for their great work and responsiveness in working to tight deadlines."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"In the media",cljs.core.cst$kw$short_DASH_answer,"The site launch generated a lot of media interest, some of which we've collected together here.",cljs.core.cst$kw$glossary,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$charities,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("https://www.theguardian.com/science/sifting-the-evidence/2016/jun/21/making-nhs-data-public-is-not-the-same-as-making-it-accessible-we-can-and-should-do-better"),"Guardian article:"], null)," \u201CMaking NHS data public is not the same as making it accessible \u2013 we can and should\n                                do better.\u201D by Christina Pagel, UCL and David Spiegelhalter, University of Cambridge."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"40px"], null)], null),"Other coverage"], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$charities,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Sense about Science discuss their new public engagement guide based on this website work ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://www.nihr.ac.uk/blogs/five-steps-to-help-you-involve-the-public-in-communicating-research/7359",cljs.core.cst$kw$target,"_blank")," in this NIHR Blog."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("https://www.nihr.ac.uk/blogs/my-journey-through-the-five-steps-of-public-engagement-an-academics-story/7429 "),"Christina Pagel discusses"], null)," the five steps of public engagement and how they applied to this website in this NIHR blog."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.bmj.com/content/353/bmj.i3539",cljs.core.cst$kw$target,"_blank"),"The BMJ/News:"], null)," \u201CChildren\u2019s heart surgery website aims to end confusion over survival rates\u201D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.thelancet.com/pdfs/journals/lancet/PIIS0140-6736(16)30888-1.pdf",cljs.core.cst$kw$target,"_blank")," The Lancet/Editorial:"], null)," \u201CCommunicating risk about children\u2019s heart surgery well\u201D"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Sense about Science wrote about why involving the patients and families, and involving them early, matters, on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.amrc.org.uk/blog/involving-parents-and-patients-in-public-engagement-a-humbling-and-invaluable-experience",cljs.core.cst$kw$target,"_blank"),"the Association of Medical Research Charities\u2019s blog"], null),"."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Christina shared her insights from the experience and provides tips for other researchers in a ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://www.nihr.ac.uk/05-development/newsroom/blog-DO-NOT-DELETE/insights-on-building-a-website-to-help-people-interpret-childrens-heart-surgery-data.htm",cljs.core.cst$kw$target,"_blank"),"National Institute for Health Research (NIHR) blog"], null),"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://www.statslife.org.uk/news/2919-new-online-tool-makes-heart-surgery-data-more-accessible",cljs.core.cst$kw$target,"_blank"),"The Royal Statistical Society"], null)," blogged about the project."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Tim Rakow, KCL shared his experience in a ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.kcl.ac.uk/ioppn/news/records/2016/June/Parent-led-tool-opens-up-NHS-childrens-heart-surgery-data-to-families-.aspx",cljs.core.cst$kw$target,"_blank"),"KCL news piece"], null),"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.cam.ac.uk/research/news/parent-led-tool-opens-up-nhs-childrens-heart-surgery-data-to-families",cljs.core.cst$kw$target,"_blank"),"University of Cambridge"], null)," \u201CParent-led tool opens up NHS children's heart surgery data to families\u201D "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.chfed.org.uk/understanding-childrens-heart-surgery-outcomes/",cljs.core.cst$kw$target,"_blank"),"Children\u2019s Heart Federation explain:"], null)," \u201C \u2026parents\u2019 views have been at the heart of developments that today launch a parent-led tool opening up NHS children\u2019s heart surgery data to families.\u201D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://www.rcsed.ac.uk/news-public-affairs/news/2016/june/understanding-children-s-heart-surgery-outcomes",cljs.core.cst$kw$target,"_blank"),"Royal College of Surgeons of Edinburgh:"], null)," \u201CUnderstanding Children\u2019s Heart Surgery Outcomes\u201D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.insight.mrc.ac.uk/2016/07/29/beyond-open-making-data-accessible/",cljs.core.cst$kw$target,"_blank"),"Insight: Medical Research Council"], null)," \u201CBeyond open: making your data accessible\u201D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("http://www.mumsnet.com/Talk/guest_posts/2699023-Guest-post-I-hope-weve-helped-others-preparing-for-their-childs-heart-surgery",cljs.core.cst$kw$target,"_blank"),"Mumsnet guest post:"], null)," \u201CI hope we've helped others preparing for their child's heart surgery\u201D by Alex Smith"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://understandinguncertainty.org/exploring-language-chance-sensitive-context",cljs.core.cst$kw$target,"_blank"),"Understanding Uncertainty:"], null)," \u201CExploring the language of chance in a sensitive context\u201D by David Spiegelhalter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href("https://www.youtube.com/watch?v=-NebRpbMTK8",cljs.core.cst$kw$target,"_blank"),"Communicating Risks Reactively:"], null)," A video of Mike Pearson's talk about the development of this site which was presented at Euroclojure 2016."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,prais2.core.href.cljs$core$IFn$_invoke$arity$1("https://www.telegraph.co.uk/health-fitness/doctors-diary/doctors-diary-theres-another-side-to-the-closure-of-childrens-he/amp/"),"Telegraph article:"], null)," \u201CDoctor's Diary: There's another side to the closure of children's heart surgery wards\u201D by Michael Fitzpatrick"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$section,"Glossary of terms used",cljs.core.cst$kw$is_DASH_glossary,true,cljs.core.cst$kw$faqs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glossary_DASH_entry,cljs.core.cst$kw$survival_DASH_rate,cljs.core.cst$kw$title,"Survival rate",cljs.core.cst$kw$body,"The percentage of operations where the child survived at least 30 days after their operation."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glossary_DASH_entry,cljs.core.cst$kw$unforeseen_DASH_factors,cljs.core.cst$kw$title,"Unforeseeable factors",cljs.core.cst$kw$body,"It is impossible to predict precisely what is going to happen in an individual operation. This is partly\n      due to the inevitable inability to predict the future with certainty \u2013 all people are physically unique and will\n      react slightly differently to medicines, anaesthetic, surgery and no heart problem is exactly the same as another.\u00A0\n      Our inability to predict precisely is also partly because there are factors that we suspect may influence the\n      outcome but cannot be included in the statistical method either because these factors are difficult to define or\n      no routine data on them is collected. Together, we call these all \u201Cunforeseeable factors\u201D."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glossary_DASH_entry,cljs.core.cst$kw$predicted_DASH_range,cljs.core.cst$kw$title,"Predicted and Extended Predicted Range:",cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"We expect a hospital's overall survival rate to lie within its predicted range 19 times out of 20. "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"We expect a hospital's overall survival rate to lie within its ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"extended"], null)," predicted range 998 times out of 1000. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"An illustration of how we present a hospital's survival rate (black dot) in\n                                     the context of its predicted range (dark blue bar) and extended prediction range\n                                     (light blue bar) is given below:"], null)], null)], null)], null)], null)], null);
prais2.content.colour_map_options = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"rgba(255,255,255,0)",cljs.core.cst$kw$inner,"#fc8d59",cljs.core.cst$kw$outer_DASH_low,"#efdf11",cljs.core.cst$kw$outer_DASH_high,"#efdf11",cljs.core.cst$kw$high,"rgba(255,255,255,0)",cljs.core.cst$kw$header,"#91bfdb",cljs.core.cst$kw$dot,"black"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"rgba(255,255,255,0)",cljs.core.cst$kw$inner,"#efdf11",cljs.core.cst$kw$outer_DASH_low,"#fc8d59",cljs.core.cst$kw$outer_DASH_high,"#fc8d59",cljs.core.cst$kw$high,"rgba(255,255,255,0)",cljs.core.cst$kw$header,"#fc8d59",cljs.core.cst$kw$dot,"black"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"rgba(255,255,255,0)",cljs.core.cst$kw$inner,"#7fcdbb",cljs.core.cst$kw$outer_DASH_low,"#2c7fb8",cljs.core.cst$kw$outer_DASH_high,"#2c7fb8",cljs.core.cst$kw$high,"rgba(255,255,255,0)",cljs.core.cst$kw$header,"#2c7fb8",cljs.core.cst$kw$dot,"black"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"rgba(255,255,255,0)",cljs.core.cst$kw$inner,"#3c8fc8",cljs.core.cst$kw$outer_DASH_low,"#7fcdbb",cljs.core.cst$kw$outer_DASH_high,"#7fcdbb",cljs.core.cst$kw$high,"rgba(255,255,255,0)",cljs.core.cst$kw$header,"#3c8fc8",cljs.core.cst$kw$dot,"black"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"rgba(255,255,255,0)",cljs.core.cst$kw$inner,"#8FB4E1",cljs.core.cst$kw$outer_DASH_low,"#578FD2",cljs.core.cst$kw$outer_DASH_high,"#578FD2",cljs.core.cst$kw$high,"rgba(255,255,255,0)",cljs.core.cst$kw$header,"#578FD2",cljs.core.cst$kw$dot,"black"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"rgba(255,255,255,0)",cljs.core.cst$kw$inner,"#578FD2",cljs.core.cst$kw$outer_DASH_low,"#8FB4E1",cljs.core.cst$kw$outer_DASH_high,"#8FB4E1",cljs.core.cst$kw$high,"rgba(255,255,255,0)",cljs.core.cst$kw$header,"#578FD2",cljs.core.cst$kw$dot,"black"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"rgba(255,255,255,0)",cljs.core.cst$kw$inner,"#fc8d59",cljs.core.cst$kw$outer_DASH_low,"#efdf11",cljs.core.cst$kw$outer_DASH_high,"#92DEDB",cljs.core.cst$kw$high,"rgba(255,255,255,0)",cljs.core.cst$kw$header,"#91bfdb",cljs.core.cst$kw$dot,"black"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"rgba(255,255,255,0)",cljs.core.cst$kw$inner,"#efdf11",cljs.core.cst$kw$outer_DASH_low,"#fc8d59",cljs.core.cst$kw$outer_DASH_high,"#7FCDBB",cljs.core.cst$kw$high,"rgba(255,255,255,0)",cljs.core.cst$kw$header,"#fc8d59",cljs.core.cst$kw$dot,"black"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"rgba(255,255,255,0)",cljs.core.cst$kw$inner,"#7fcdbb",cljs.core.cst$kw$outer_DASH_low,"#2c7fb8",cljs.core.cst$kw$outer_DASH_high,"#319470",cljs.core.cst$kw$high,"rgba(255,255,255,0)",cljs.core.cst$kw$header,"#2c7fb8",cljs.core.cst$kw$dot,"black"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"rgba(255,255,255,0)",cljs.core.cst$kw$inner,"#8FB4E1",cljs.core.cst$kw$outer_DASH_low,"#578FD2",cljs.core.cst$kw$outer_DASH_high,"#599464",cljs.core.cst$kw$high,"rgba(255,255,255,0)",cljs.core.cst$kw$header,"#578FD2",cljs.core.cst$kw$dot,"black"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"rgba(255,255,255,0)",cljs.core.cst$kw$inner,"#3c8fc8",cljs.core.cst$kw$outer_DASH_low,"#7fcdbb",cljs.core.cst$kw$outer_DASH_high,"#9BE45C",cljs.core.cst$kw$high,"rgba(255,255,255,0)",cljs.core.cst$kw$header,"#3c8fc8",cljs.core.cst$kw$dot,"black"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"rgba(255,255,255,0)",cljs.core.cst$kw$inner,"#578FD2",cljs.core.cst$kw$outer_DASH_low,"#8FB4E1",cljs.core.cst$kw$outer_DASH_high,"#9AE1A7",cljs.core.cst$kw$high,"rgba(255,255,255,0)",cljs.core.cst$kw$header,"#578FD2",cljs.core.cst$kw$dot,"black"], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$low,"#f0f0f0",cljs.core.cst$kw$inner,"#566AF9",cljs.core.cst$kw$outer_DASH_low,"#C9CDFC",cljs.core.cst$kw$outer_DASH_high,"#C9CDFC",cljs.core.cst$kw$high,"#f0f0f0",cljs.core.cst$kw$header,"#4F4763",cljs.core.cst$kw$dot,"black"], null)], null);
