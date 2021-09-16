// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.content');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('prais2.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
prais2.content.get_mugshots = (function prais2$content$get_mugshots(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["christina","david","tim","emily B","mike","emily J","joanne"], null);
});
prais2.content.mugshot_data = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"christina","christina",276917843),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"christina",new cljs.core.Keyword(null,"name","name",1843675177),"Christina",new cljs.core.Keyword(null,"org","org",1495985),"UCL"], null),new cljs.core.Keyword(null,"david","david",1443762781),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"david",new cljs.core.Keyword(null,"name","name",1843675177),"David",new cljs.core.Keyword(null,"org","org",1495985),"Camb"], null),new cljs.core.Keyword(null,"mike","mike",1566677613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"mike",new cljs.core.Keyword(null,"name","name",1843675177),"Mike",new cljs.core.Keyword(null,"org","org",1495985),"Camb"], null),new cljs.core.Keyword(null,"tim","tim",-978621596),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"tim",new cljs.core.Keyword(null,"name","name",1843675177),"Tim",new cljs.core.Keyword(null,"org","org",1495985),"KCL"], null),new cljs.core.Keyword(null,"emily-b","emily-b",-1385985751),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"emily B",new cljs.core.Keyword(null,"name","name",1843675177),"Emily Blackshaw",new cljs.core.Keyword(null,"org","org",1495985),"KCL"], null),new cljs.core.Keyword(null,"emily-j","emily-j",-1725935357),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"emily J",new cljs.core.Keyword(null,"name","name",1843675177),"Emily Jesper",new cljs.core.Keyword(null,"org","org",1495985),"SAS"], null),new cljs.core.Keyword(null,"joanne","joanne",-323401876),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"joanne",new cljs.core.Keyword(null,"name","name",1843675177),"Joanne",new cljs.core.Keyword(null,"org","org",1495985),"SAS"], null)], null);

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

prais2.content.Header.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k21055,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__21059 = k21055;
var G__21059__$1 = (((G__21059 instanceof cljs.core.Keyword))?G__21059.fqn:null);
switch (G__21059__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k21055,else__4193__auto__);

}
});

prais2.content.Header.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,pr_pair__4207__auto__,"#prais2.content.Header{",", ","}",opts__4206__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583),self__.title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sortable","sortable",2109633621),self__.sortable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"shown","shown",-1564457683),self__.shown],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content","content",15833224),self__.content],null))], null),self__.__extmap));
});

prais2.content.Header.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21054){
var self__ = this;
var G__21054__$1 = this;
return (new cljs.core.RecordIter((0),G__21054__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"shown","shown",-1564457683),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"content","content",15833224)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (6 + cljs.core.count.call(null,self__.__extmap));
});

prais2.content.Header.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (-1867129037 ^ cljs.core.hash_unordered_coll.call(null,coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
.call(null,this__4186__auto____$1);
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

prais2.content.Header.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21056,other21057){
var self__ = this;
var this21056__$1 = this;
return ((!((other21057 == null))) && ((this21056__$1.constructor === other21057.constructor)) && (cljs.core._EQ_.call(null,this21056__$1.title,other21057.title)) && (cljs.core._EQ_.call(null,this21056__$1.sortable,other21057.sortable)) && (cljs.core._EQ_.call(null,this21056__$1.shown,other21057.shown)) && (cljs.core._EQ_.call(null,this21056__$1.width,other21057.width)) && (cljs.core._EQ_.call(null,this21056__$1.height,other21057.height)) && (cljs.core._EQ_.call(null,this21056__$1.content,other21057.content)) && (cljs.core._EQ_.call(null,this21056__$1.__extmap,other21057.__extmap)));
});

prais2.content.Header.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"shown","shown",-1564457683),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"sortable","sortable",2109633621),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__4200__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,self__.width,self__.height,self__.content,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4200__auto__)),null));
}
});

prais2.content.Header.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__21054){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__21060 = cljs.core.keyword_identical_QMARK_;
var expr__21061 = k__4198__auto__;
if(cljs.core.truth_(pred__21060.call(null,new cljs.core.Keyword(null,"title","title",636505583),expr__21061))){
return (new prais2.content.Header(G__21054,self__.sortable,self__.shown,self__.width,self__.height,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21060.call(null,new cljs.core.Keyword(null,"sortable","sortable",2109633621),expr__21061))){
return (new prais2.content.Header(self__.title,G__21054,self__.shown,self__.width,self__.height,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21060.call(null,new cljs.core.Keyword(null,"shown","shown",-1564457683),expr__21061))){
return (new prais2.content.Header(self__.title,self__.sortable,G__21054,self__.width,self__.height,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21060.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__21061))){
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,G__21054,self__.height,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21060.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__21061))){
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,self__.width,G__21054,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21060.call(null,new cljs.core.Keyword(null,"content","content",15833224),expr__21061))){
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,self__.width,self__.height,G__21054,self__.__meta,self__.__extmap,null));
} else {
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,self__.width,self__.height,self__.content,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4198__auto__,G__21054),null));
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
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"title","title",636505583),self__.title,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sortable","sortable",2109633621),self__.sortable,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"shown","shown",-1564457683),self__.shown,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),self__.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"height","height",1025178622),self__.height,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content","content",15833224),self__.content,null))], null),self__.__extmap));
});

prais2.content.Header.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__21054){
var self__ = this;
var this__4189__auto____$1 = this;
return (new prais2.content.Header(self__.title,self__.sortable,self__.shown,self__.width,self__.height,self__.content,G__21054,self__.__extmap,self__.__hash));
});

prais2.content.Header.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4196__auto__,(0)),cljs.core._nth.call(null,entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

prais2.content.Header.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"sortable","sortable",-544802148,null),new cljs.core.Symbol(null,"shown","shown",76073844,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"content","content",1656364751,null)], null);
});

prais2.content.Header.cljs$lang$type = true;

prais2.content.Header.cljs$lang$ctorPrSeq = (function (this__4227__auto__){
return (new cljs.core.List(null,"prais2.content/Header",null,(1),null));
});

prais2.content.Header.cljs$lang$ctorPrWriter = (function (this__4227__auto__,writer__4228__auto__){
return cljs.core._write.call(null,writer__4228__auto__,"prais2.content/Header");
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
prais2.content.map__GT_Header = (function prais2$content$map__GT_Header(G__21058){
var extmap__4223__auto__ = (function (){var G__21063 = cljs.core.dissoc.call(null,G__21058,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"sortable","sortable",2109633621),new cljs.core.Keyword(null,"shown","shown",-1564457683),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.record_QMARK_.call(null,G__21058)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21063);
} else {
return G__21063;
}
})();
return (new prais2.content.Header(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(G__21058),new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(G__21058),new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(G__21058),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__21058),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__21058),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__21058),null,cljs.core.not_empty.call(null,extmap__4223__auto__),null));
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

prais2.content.Row.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k21066,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__21070 = k21066;
var G__21070__$1 = (((G__21070 instanceof cljs.core.Keyword))?G__21070.fqn:null);
switch (G__21070__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k21066,else__4193__auto__);

}
});

prais2.content.Row.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,pr_pair__4207__auto__,"#prais2.content.Row{",", ","}",opts__4206__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h-name","h-name",1046194554),self__.h_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h-code","h-code",1404858483),self__.h_code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h-lat","h-lat",-1498479031),self__.h_lat],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h-lon","h-lon",-1878922256),self__.h_lon],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n-ops","n-ops",921161673),self__.n_ops],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n-deaths","n-deaths",1830468862),self__.n_deaths],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n-survivors","n-survivors",-379968592),self__.n_survivors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),self__.survival_rate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),self__.outer_low],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"inner-low","inner-low",1054004519),self__.inner_low],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"inner-high","inner-high",-108712508),self__.inner_high],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),self__.outer_high],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"observed","observed",-2010194632),self__.observed],null))], null),self__.__extmap));
});

prais2.content.Row.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21065){
var self__ = this;
var G__21065__$1 = this;
return (new cljs.core.RecordIter((0),G__21065__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-name","h-name",1046194554),new cljs.core.Keyword(null,"h-code","h-code",1404858483),new cljs.core.Keyword(null,"h-lat","h-lat",-1498479031),new cljs.core.Keyword(null,"h-lon","h-lon",-1878922256),new cljs.core.Keyword(null,"n-ops","n-ops",921161673),new cljs.core.Keyword(null,"n-deaths","n-deaths",1830468862),new cljs.core.Keyword(null,"n-survivors","n-survivors",-379968592),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),new cljs.core.Keyword(null,"observed","observed",-2010194632)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (13 + cljs.core.count.call(null,self__.__extmap));
});

prais2.content.Row.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (540564503 ^ cljs.core.hash_unordered_coll.call(null,coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
.call(null,this__4186__auto____$1);
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

prais2.content.Row.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21067,other21068){
var self__ = this;
var this21067__$1 = this;
return ((!((other21068 == null))) && ((this21067__$1.constructor === other21068.constructor)) && (cljs.core._EQ_.call(null,this21067__$1.h_name,other21068.h_name)) && (cljs.core._EQ_.call(null,this21067__$1.h_code,other21068.h_code)) && (cljs.core._EQ_.call(null,this21067__$1.h_lat,other21068.h_lat)) && (cljs.core._EQ_.call(null,this21067__$1.h_lon,other21068.h_lon)) && (cljs.core._EQ_.call(null,this21067__$1.n_ops,other21068.n_ops)) && (cljs.core._EQ_.call(null,this21067__$1.n_deaths,other21068.n_deaths)) && (cljs.core._EQ_.call(null,this21067__$1.n_survivors,other21068.n_survivors)) && (cljs.core._EQ_.call(null,this21067__$1.survival_rate,other21068.survival_rate)) && (cljs.core._EQ_.call(null,this21067__$1.outer_low,other21068.outer_low)) && (cljs.core._EQ_.call(null,this21067__$1.inner_low,other21068.inner_low)) && (cljs.core._EQ_.call(null,this21067__$1.inner_high,other21068.inner_high)) && (cljs.core._EQ_.call(null,this21067__$1.outer_high,other21068.outer_high)) && (cljs.core._EQ_.call(null,this21067__$1.observed,other21068.observed)) && (cljs.core._EQ_.call(null,this21067__$1.__extmap,other21068.__extmap)));
});

prais2.content.Row.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"inner-high","inner-high",-108712508),null,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519),null,new cljs.core.Keyword(null,"h-lat","h-lat",-1498479031),null,new cljs.core.Keyword(null,"n-ops","n-ops",921161673),null,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),null,new cljs.core.Keyword(null,"n-survivors","n-survivors",-379968592),null,new cljs.core.Keyword(null,"h-lon","h-lon",-1878922256),null,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),null,new cljs.core.Keyword(null,"h-code","h-code",1404858483),null,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),null,new cljs.core.Keyword(null,"observed","observed",-2010194632),null,new cljs.core.Keyword(null,"h-name","h-name",1046194554),null,new cljs.core.Keyword(null,"n-deaths","n-deaths",1830468862),null], null), null),k__4200__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4200__auto__)),null));
}
});

prais2.content.Row.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__21065){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__21071 = cljs.core.keyword_identical_QMARK_;
var expr__21072 = k__4198__auto__;
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"h-name","h-name",1046194554),expr__21072))){
return (new prais2.content.Row(G__21065,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"h-code","h-code",1404858483),expr__21072))){
return (new prais2.content.Row(self__.h_name,G__21065,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"h-lat","h-lat",-1498479031),expr__21072))){
return (new prais2.content.Row(self__.h_name,self__.h_code,G__21065,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"h-lon","h-lon",-1878922256),expr__21072))){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,G__21065,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"n-ops","n-ops",921161673),expr__21072))){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,G__21065,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"n-deaths","n-deaths",1830468862),expr__21072))){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,G__21065,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"n-survivors","n-survivors",-379968592),expr__21072))){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,G__21065,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),expr__21072))){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,G__21065,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),expr__21072))){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,G__21065,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"inner-low","inner-low",1054004519),expr__21072))){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,G__21065,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"inner-high","inner-high",-108712508),expr__21072))){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,G__21065,self__.outer_high,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),expr__21072))){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,G__21065,self__.observed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21071.call(null,new cljs.core.Keyword(null,"observed","observed",-2010194632),expr__21072))){
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,G__21065,self__.__meta,self__.__extmap,null));
} else {
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4198__auto__,G__21065),null));
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
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h-name","h-name",1046194554),self__.h_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h-code","h-code",1404858483),self__.h_code,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h-lat","h-lat",-1498479031),self__.h_lat,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h-lon","h-lon",-1878922256),self__.h_lon,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"n-ops","n-ops",921161673),self__.n_ops,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"n-deaths","n-deaths",1830468862),self__.n_deaths,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"n-survivors","n-survivors",-379968592),self__.n_survivors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),self__.survival_rate,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),self__.outer_low,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"inner-low","inner-low",1054004519),self__.inner_low,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"inner-high","inner-high",-108712508),self__.inner_high,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),self__.outer_high,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"observed","observed",-2010194632),self__.observed,null))], null),self__.__extmap));
});

prais2.content.Row.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__21065){
var self__ = this;
var this__4189__auto____$1 = this;
return (new prais2.content.Row(self__.h_name,self__.h_code,self__.h_lat,self__.h_lon,self__.n_ops,self__.n_deaths,self__.n_survivors,self__.survival_rate,self__.outer_low,self__.inner_low,self__.inner_high,self__.outer_high,self__.observed,G__21065,self__.__extmap,self__.__hash));
});

prais2.content.Row.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4196__auto__,(0)),cljs.core._nth.call(null,entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

prais2.content.Row.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h-name","h-name",-1608241215,null),new cljs.core.Symbol(null,"h-code","h-code",-1249577286,null),new cljs.core.Symbol(null,"h-lat","h-lat",142052496,null),new cljs.core.Symbol(null,"h-lon","h-lon",-238390729,null),new cljs.core.Symbol(null,"n-ops","n-ops",-1733274096,null),new cljs.core.Symbol(null,"n-deaths","n-deaths",-823966907,null),new cljs.core.Symbol(null,"n-survivors","n-survivors",1260562935,null),new cljs.core.Symbol(null,"survival-rate","survival-rate",2130598968,null),new cljs.core.Symbol(null,"outer-low","outer-low",104826270,null),new cljs.core.Symbol(null,"inner-low","inner-low",-1600431250,null),new cljs.core.Symbol(null,"inner-high","inner-high",1531819019,null),new cljs.core.Symbol(null,"outer-high","outer-high",-277211530,null),new cljs.core.Symbol(null,"observed","observed",-369663105,null)], null);
});

prais2.content.Row.cljs$lang$type = true;

prais2.content.Row.cljs$lang$ctorPrSeq = (function (this__4227__auto__){
return (new cljs.core.List(null,"prais2.content/Row",null,(1),null));
});

prais2.content.Row.cljs$lang$ctorPrWriter = (function (this__4227__auto__,writer__4228__auto__){
return cljs.core._write.call(null,writer__4228__auto__,"prais2.content/Row");
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
prais2.content.map__GT_Row = (function prais2$content$map__GT_Row(G__21069){
var extmap__4223__auto__ = (function (){var G__21074 = cljs.core.dissoc.call(null,G__21069,new cljs.core.Keyword(null,"h-name","h-name",1046194554),new cljs.core.Keyword(null,"h-code","h-code",1404858483),new cljs.core.Keyword(null,"h-lat","h-lat",-1498479031),new cljs.core.Keyword(null,"h-lon","h-lon",-1878922256),new cljs.core.Keyword(null,"n-ops","n-ops",921161673),new cljs.core.Keyword(null,"n-deaths","n-deaths",1830468862),new cljs.core.Keyword(null,"n-survivors","n-survivors",-379968592),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),new cljs.core.Keyword(null,"observed","observed",-2010194632));
if(cljs.core.record_QMARK_.call(null,G__21069)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21074);
} else {
return G__21074;
}
})();
return (new prais2.content.Row(new cljs.core.Keyword(null,"h-name","h-name",1046194554).cljs$core$IFn$_invoke$arity$1(G__21069),new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(G__21069),new cljs.core.Keyword(null,"h-lat","h-lat",-1498479031).cljs$core$IFn$_invoke$arity$1(G__21069),new cljs.core.Keyword(null,"h-lon","h-lon",-1878922256).cljs$core$IFn$_invoke$arity$1(G__21069),new cljs.core.Keyword(null,"n-ops","n-ops",921161673).cljs$core$IFn$_invoke$arity$1(G__21069),new cljs.core.Keyword(null,"n-deaths","n-deaths",1830468862).cljs$core$IFn$_invoke$arity$1(G__21069),new cljs.core.Keyword(null,"n-survivors","n-survivors",-379968592).cljs$core$IFn$_invoke$arity$1(G__21069),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441).cljs$core$IFn$_invoke$arity$1(G__21069),new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257).cljs$core$IFn$_invoke$arity$1(G__21069),new cljs.core.Keyword(null,"inner-low","inner-low",1054004519).cljs$core$IFn$_invoke$arity$1(G__21069),new cljs.core.Keyword(null,"inner-high","inner-high",-108712508).cljs$core$IFn$_invoke$arity$1(G__21069),new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057).cljs$core$IFn$_invoke$arity$1(G__21069),new cljs.core.Keyword(null,"observed","observed",-2010194632).cljs$core$IFn$_invoke$arity$1(G__21069),null,cljs.core.not_empty.call(null,extmap__4223__auto__),null));
});

prais2.content.edn_readers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("prais2.content","Row","prais2.content/Row",-687301780,null),prais2.content.map__GT_Row], null);
/**
 * Adds tagged literals depending on the presence of certain keys
 */
prais2.content.add_tags = (function prais2$content$add_tags(m){
var ks = cljs.core.vec.call(null,cljs.core.keys.call(null,m));
if(cljs.core.truth_(cljs.core.some.call(null,((function (ks){
return (function (p1__21076_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"h-name","h-name",1046194554),p1__21076_SHARP_);
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
return cljs.reader.read_string.call(null,m);
} else {
return m;

}
});
/**
 * Translates data into defrecords implementations for a suitable datasource
 */
prais2.content.__GT_records = (function prais2$content$__GT_records(data){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4311__auto__ = (function prais2$content$__GT_records_$_iter__21080(s__21081){
return (new cljs.core.LazySeq(null,(function (){
var s__21081__$1 = s__21081;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21081__$1);
if(temp__5753__auto__){
var s__21081__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21081__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__21081__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__21083 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__21082 = (0);
while(true){
if((i__21082 < size__4310__auto__)){
var vec__21084 = cljs.core._nth.call(null,c__4309__auto__,i__21082);
var k = cljs.core.nth.call(null,vec__21084,(0),null);
var v = cljs.core.nth.call(null,vec__21084,(1),null);
cljs.core.chunk_append.call(null,b__21083,(function (){var with_tags = cljs.core.mapv.call(null,((function (i__21082,vec__21084,k,v,c__4309__auto__,size__4310__auto__,b__21083,s__21081__$2,temp__5753__auto__){
return (function (p1__21077_SHARP_){
return prais2.content.add_tags.call(null,p1__21077_SHARP_);
});})(i__21082,vec__21084,k,v,c__4309__auto__,size__4310__auto__,b__21083,s__21081__$2,temp__5753__auto__))
,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.call(null,((function (i__21082,with_tags,vec__21084,k,v,c__4309__auto__,size__4310__auto__,b__21083,s__21081__$2,temp__5753__auto__){
return (function (p1__21079_SHARP_){
return cljs.reader.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),prais2.content.edn_readers], null),p1__21079_SHARP_);
});})(i__21082,with_tags,vec__21084,k,v,c__4309__auto__,size__4310__auto__,b__21083,s__21081__$2,temp__5753__auto__))
,with_tags)], null);
})());

var G__21090 = (i__21082 + (1));
i__21082 = G__21090;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21083),prais2$content$__GT_records_$_iter__21080.call(null,cljs.core.chunk_rest.call(null,s__21081__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21083),null);
}
} else {
var vec__21087 = cljs.core.first.call(null,s__21081__$2);
var k = cljs.core.nth.call(null,vec__21087,(0),null);
var v = cljs.core.nth.call(null,vec__21087,(1),null);
return cljs.core.cons.call(null,(function (){var with_tags = cljs.core.mapv.call(null,((function (vec__21087,k,v,s__21081__$2,temp__5753__auto__){
return (function (p1__21077_SHARP_){
return prais2.content.add_tags.call(null,p1__21077_SHARP_);
});})(vec__21087,k,v,s__21081__$2,temp__5753__auto__))
,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.call(null,((function (with_tags,vec__21087,k,v,s__21081__$2,temp__5753__auto__){
return (function (p1__21079_SHARP_){
return cljs.reader.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),prais2.content.edn_readers], null),p1__21079_SHARP_);
});})(with_tags,vec__21087,k,v,s__21081__$2,temp__5753__auto__))
,with_tags)], null);
})(),prais2$content$__GT_records_$_iter__21080.call(null,cljs.core.rest.call(null,s__21081__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__.call(null,prais2.content.__GT_map.call(null,data));
})());
});
/**
 * Loads data from the endpoint and transforms each map into a Row. record.
 */
prais2.content.get_file = (function prais2$content$get_file(endpoint){
var c__18757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto__){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto__){
return (function (state_21100){
var state_val_21101 = (state_21100[(1)]);
if((state_val_21101 === (1))){
var inst_21091 = [new cljs.core.Keyword(null,"as","as",1148689641)];
var inst_21092 = [new cljs.core.Keyword(null,"auto","auto",-566279492)];
var inst_21093 = cljs.core.PersistentHashMap.fromArrays(inst_21091,inst_21092);
var inst_21094 = cljs_http.client.get.call(null,endpoint,inst_21093);
var state_21100__$1 = state_21100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21100__$1,(2),inst_21094);
} else {
if((state_val_21101 === (2))){
var inst_21096 = (state_21100[(2)]);
var inst_21097 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21096);
var inst_21098 = prais2.content.__GT_records.call(null,inst_21097);
var state_21100__$1 = state_21100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21100__$1,inst_21098);
} else {
return null;
}
}
});})(c__18757__auto__))
;
return ((function (switch__18683__auto__,c__18757__auto__){
return (function() {
var prais2$content$get_file_$_state_machine__18684__auto__ = null;
var prais2$content$get_file_$_state_machine__18684__auto____0 = (function (){
var statearr_21102 = [null,null,null,null,null,null,null];
(statearr_21102[(0)] = prais2$content$get_file_$_state_machine__18684__auto__);

(statearr_21102[(1)] = (1));

return statearr_21102;
});
var prais2$content$get_file_$_state_machine__18684__auto____1 = (function (state_21100){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_21100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e21103){var ex__18687__auto__ = e21103;
var statearr_21104_21107 = state_21100;
(statearr_21104_21107[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_21100[(4)]))){
var statearr_21105_21108 = state_21100;
(statearr_21105_21108[(1)] = cljs.core.first.call(null,(state_21100[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21109 = state_21100;
state_21100 = G__21109;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
prais2$content$get_file_$_state_machine__18684__auto__ = function(state_21100){
switch(arguments.length){
case 0:
return prais2$content$get_file_$_state_machine__18684__auto____0.call(this);
case 1:
return prais2$content$get_file_$_state_machine__18684__auto____1.call(this,state_21100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$content$get_file_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$content$get_file_$_state_machine__18684__auto____0;
prais2$content$get_file_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$content$get_file_$_state_machine__18684__auto____1;
return prais2$content$get_file_$_state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto__))
})();
var state__18759__auto__ = (function (){var statearr_21106 = f__18758__auto__.call(null);
(statearr_21106[(6)] = c__18757__auto__);

return statearr_21106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto__))
);

return c__18757__auto__;
});
/**
 * Returns the max year of a map with years as keys
 */
prais2.content.find_max_year = (function prais2$content$find_max_year(m){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.mapv.call(null,(function (p1__21111_SHARP_){
return parseInt(cljs.core.name.call(null,p1__21111_SHARP_));
}),cljs.core.keys.call(null,m)));
});
/**
 * Returns the min year of a map with years as keys
 */
prais2.content.find_min_year = (function prais2$content$find_min_year(m){
return cljs.core.apply.call(null,cljs.core.min,cljs.core.mapv.call(null,(function (p1__21113_SHARP_){
return parseInt(cljs.core.name.call(null,p1__21113_SHARP_));
}),cljs.core.keys.call(null,m)));
});
/**
 * Creates the datasource-tabs from a map with years as keys
 */
prais2.content.make_datasource_tabs = (function prais2$content$make_datasource_tabs(m){
if(cljs.core._EQ_.call(null,m,cljs.core.PersistentArrayMap.EMPTY)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var mink = prais2.content.find_min_year.call(null,m);
var maxk = prais2.content.find_max_year.call(null,m);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,((function (mink,maxk){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Reporting period",new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((x - (3))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.Keyword(null,"long-label","long-label",1242973664),["April ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x - (3)))," - March ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null)], null);
});})(mink,maxk))
,cljs.core.range.call(null,mink,((1) + maxk))));

}
});
/**
 * Swaps the core/app state with: 
 *   - :hosp-data: the downloaded data transformed into Row. records, 
 *   - :data-tabs: the datasource-tab
 *   - :datasource: the maximum year found in the data
 */
prais2.content.get_hospital_data = (function prais2$content$get_hospital_data(){
return cljs.core.async.take_BANG_.call(null,prais2.content.get_file.call(null,"/data.edn"),(function (p1__21114_SHARP_){
cljs.core.swap_BANG_.call(null,prais2.core.app,cljs.core.assoc,new cljs.core.Keyword(null,"hosp-data","hosp-data",538848822),p1__21114_SHARP_);

cljs.core.swap_BANG_.call(null,prais2.core.app,cljs.core.assoc,new cljs.core.Keyword(null,"data-tabs","data-tabs",1859125746),prais2.content.make_datasource_tabs.call(null,p1__21114_SHARP_));

return cljs.core.swap_BANG_.call(null,prais2.core.app,cljs.core.assoc,new cljs.core.Keyword(null,"datasource","datasource",-246060221),cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.content.find_max_year.call(null,p1__21114_SHARP_))].join('')));
}));
});
prais2.content.datasource_tab = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"2019","2019",935106572),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Reporting period",new cljs.core.Keyword(null,"label","label",1718410804),"2016-2019",new cljs.core.Keyword(null,"long-label","long-label",1242973664),"April 2016 - March 2019"], null),new cljs.core.Keyword(null,"2018","2018",-1797430329),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Reporting period",new cljs.core.Keyword(null,"label","label",1718410804),"2015-2018",new cljs.core.Keyword(null,"long-label","long-label",1242973664),"April 2015 - March 2018"], null),new cljs.core.Keyword(null,"2017","2017",202544450),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Reporting period",new cljs.core.Keyword(null,"label","label",1718410804),"2014-2017",new cljs.core.Keyword(null,"long-label","long-label",1242973664),"April 2014 - March 2017"], null),new cljs.core.Keyword(null,"2016","2016",337220293),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Reporting period",new cljs.core.Keyword(null,"label","label",1718410804),"2013-2016",new cljs.core.Keyword(null,"long-label","long-label",1242973664),"April 2013 - March 2016"], null),new cljs.core.Keyword(null,"2015","2015",1786031105),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Reporting period",new cljs.core.Keyword(null,"label","label",1718410804),"2012-2015",new cljs.core.Keyword(null,"long-label","long-label",1242973664),"April 2012 - March 2015"], null),new cljs.core.Keyword(null,"2014","2014",-1308058204),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Reporting period",new cljs.core.Keyword(null,"label","label",1718410804),"2011-2014",new cljs.core.Keyword(null,"long-label","long-label",1242973664),"April 2011 - March 2014"], null),new cljs.core.Keyword(null,"2013","2013",-933772734),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Reporting period",new cljs.core.Keyword(null,"label","label",1718410804),"2010-2013",new cljs.core.Keyword(null,"long-label","long-label",1242973664),"April 2010 - March 2013"], null)], null);
prais2.content.header_row = (function prais2$content$header_row(){
return (new prais2.content.Row((new prais2.content.Header("Hospital",true,true,(300),(50),"The hospital name",null,null,null)),(new prais2.content.Header("Hospital Code",false,false,(77),(50),"Hospital code as used by NCHDA",null,null,null)),(new prais2.content.Header("Latitude",false,false,(0),(0),"",null,null,null)),(new prais2.content.Header("Longitude",false,false,(0),(0),"",null,null,null)),(new prais2.content.Header("Number of Operations",true,true,(95),(50),["The number of heart operations carried out on under-16s at each hospital during ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"long-label","long-label",1242973664).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app)).call(null,new cljs.core.Keyword(null,"data-tabs","data-tabs",1859125746).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app))))),". Operations that occur within 30 days of each other are treated as a single operation."].join(''),null,null,null)),(new prais2.content.Header("Number of Deaths",false,true,(75),(50),"The number of operations where the child died within 30 days of their operation, from any cause",null,null,null)),(new prais2.content.Header("Number of Survivors",false,true,(85),(50),"The number of operations where the child survived at least 30 days after their operation",null,null,null)),(new prais2.content.Header("Survival Rate %",false,true,(86),(50),"<p>The percentage of operations where the child survived at least 30 days after their\n                 operation.</p>\n                 Some hospitals specialise in certain conditions, meaning that some hospitals tend to\n                 operate on children with a lower chance of survival. Therefore we would not expect all\n                 hospitals to have the same survival rates each year, and so it is not possible to sort\n                 hospitals in this list on the basis of their survival rates.",null,null,null)),(new prais2.content.Header("Outer Low",false,false,(130),(50),"A dot within the left hand light blue band means that there is some evidence that chances of survival in the hospital were lower than predicted",null,null,null)),(new prais2.content.Header("Inner Low",false,false,(130),(50),"A dot in this area means that there is no evidence that the hospital\u2019s survival rate is different from what is predicted",null,null,null)),(new prais2.content.Header("Inner High",false,false,(130),(50),"A dot within the right hand light blue band means that there is some evidence that chances of survival in the hospital were higher than predicted",null,null,null)),(new prais2.content.Header("Outer High",false,false,(130),(50),null,null,null,null)),(new prais2.content.Header("Survival with predicted range",false,false,(0),(100),null,null,null,null)),null,null,null));
});
prais2.content.detail_slider_label = "The survival rate with predicted range of survival";
prais2.content.sample_hospital = (new prais2.content.Row("Sample Hospital","H",(52),(-2),(976),(24),(952),97.5,96.5,97.1,98.9,99.2,null,null,null,null));
prais2.content.hospital_metadata = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"RHS","RHS",1631613248),new cljs.core.Keyword(null,"HSC","HSC",-1689602814),new cljs.core.Keyword(null,"ACH","ACH",209360963),new cljs.core.Keyword(null,"BRC","BRC",1119378535),new cljs.core.Keyword(null,"BCH","BCH",744010984),new cljs.core.Keyword(null,"GOS","GOS",86031178),new cljs.core.Keyword(null,"GRL","GRL",-1985365),new cljs.core.Keyword(null,"GUY","GUY",197042189),new cljs.core.Keyword(null,"RVB","RVB",-331288272),new cljs.core.Keyword(null,"LGI","LGI",1257717072),new cljs.core.Keyword(null,"SGH","SGH",-1857665706),new cljs.core.Keyword(null,"NHB","NHB",1435416536),new cljs.core.Keyword(null,"FRE","FRE",59992124),new cljs.core.Keyword(null,"OLS","OLS",-1696784227)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.nhsggc.org.uk/locations/hospitals/the-royal-hospital-for-children-glasgow/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Glasgow, Royal Hospital for Children"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.youngheart.info/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"The Scottish Association for Children with Heart Disorders (SACHD)"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://theharleystreetclinic.co.uk/cardiac/congenital-heart-care",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"London, Harley Street Clinic"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.alderhey.nhs.uk/departments/cardiac/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Liverpool, Alder Hey Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.alderheycharity.org/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Alder Hey Charity"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://heartchild.info/web/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Children\u2019s Heart Association"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.uhbristol.nhs.uk/patients-and-visitors/your-hospitals/bristol-royal-hospital-for-children/the-paediatric-cardiac-service/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Bristol Royal Hospital for Children"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.heartfamilies.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Heart Families South West"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.heartcircle.org/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"South West Children\u2019s Heart Circle"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.bch.nhs.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Birmingham Children\u2019s Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.youngatheart.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Young at Heart"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.bch.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Birmingham Children\u2019s Hospital Charity"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.gosh.nhs.uk/medical-information/clinical-specialties/cardiothoracic-surgery-information-parents-and-visitors",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"London, Great Ormond Street Hospital for Children"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.gosh.org/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Great Ormond Street Hospital Charity GOSHCC"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.leicestershospitals.nhs.uk/ ",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Leicester, Glenfield Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.heartlink-glenfield.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Heart Link"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.evelinalondon.nhs.uk/our-services/hospital/heart-services/overview.aspx",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"London, Evelina London Children's Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.echo-evelina.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"ECHO \u2013 Evelina Children\u2019s Heart Organisation"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://belfasttrust-cardiacsurgery.hscni.net/about-cardiac-surgery/location/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Belfast, Royal Victoria Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.childrensheartbeattrust.org/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Children\u2019s Heartbeat Trust"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.leedsth.nhs.uk/a-z-of-services/childrens-cardiology/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Leeds General Infirmary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://chsf.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"The Childrens Heart Surgery Fund"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.uhs.nhs.uk/OurServices/Childhealth/Childrenscongenitalcardiacservices/Childrenscongenitalcardiacservices.aspx",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Southampton, Wessex Cardiothoracic Centre (Southampton Children\u2019s Hospital)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.oceanward.co.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Families of Ocean Ward"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.rbht.nhs.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"London, Royal Brompton Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.thebromptonfountain.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"The Brompton Fountain"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.newcastle-hospitals.org.uk/services/cardiothoracic_services_childrens-heart-unit.aspx",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Newcastle, Freeman Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://chuf.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Newcastle Children\u2019s Heart Unit Fund"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.olchc.ie/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Dublin, Our Lady's Children's Hospital"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.heartchildren.ie/our-lady%E2%80%99s-children%E2%80%99s-hospital-crumlin",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Heart Children Ireland"], null)], null)]);
prais2.content.active_h_codes = (function prais2$content$active_h_codes(){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,new cljs.core.Keyword(null,"h-code","h-code",1404858483)),new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app)).call(null,new cljs.core.Keyword(null,"hosp-data","hosp-data",538848822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app))));
});
prais2.content.sorted_active_h_codes = (function prais2$content$sorted_active_h_codes(){
return cljs.core.map.call(null,cljs.core.first,cljs.core.sort_by.call(null,cljs.core.second,cljs.core.map.call(null,(function (hosp_meta){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,new cljs.core.Keyword(null,"h-code","h-code",1404858483).cljs$core$IFn$_invoke$arity$1(hosp_meta)),new cljs.core.Keyword(null,"h-name","h-name",1046194554).cljs$core$IFn$_invoke$arity$1(hosp_meta)], null);
}),new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app)).call(null,new cljs.core.Keyword(null,"hosp-data","hosp-data",538848822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,prais2.core.app))))));
});
prais2.content.unassoc_charity_list = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.amelia-matters.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Amelia Matters:"], null)," supporting children born with congenital\n    heart disease."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.arc-uk.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Antenatal Results and Choices (ARC):"], null)," helping parents and healthcare\n    professionals through antenatal screening and its consequences"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.heartrhythmcharity.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Arrhythmia Alliance:"], null)," improving the diagnosis, treatment\n    and quality of life for all those affected by arrhythmias."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.benwilliamstrust.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Ben Williams Trust:"], null)," supports children with abnormal heart\n    rhythms (arrhythmias) and their families "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.bhf.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"British Heart Foundation:"], null)," working to fight against cardiovascular\n    disease."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.c-r-y.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Cardiac Risk in the Young (CRY):"], null)," preventing young sudden cardiac\n    deaths through awareness, screening and research, and supporting affected families."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.cardiomyopathy.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Cardiomyopathy UK:"], null)," providing support to patients and families\n    and promoting research for the disease cardiomyopathy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.heartchild.info",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Children\u2019s Heart Association:"], null)," supporting families of children\n    with a heart condition."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.chfed.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Children\u2019s Heart Federation:"], null)," the main umbrella body for British\n    congenital heart disease charities and voluntary organisations."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.chd-uk.co.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Congenital Heart Defects UK:"], null)," educating and raising awareness of\n    congenital heart defects and supporting patients and families."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.cafamily.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Contact a family:"], null)," a national charity for families with disabled\n    children, providing information, advice and support."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.dhg.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Down\u2019s Heart Group:"], null)," a charity offering support and information\n    relating to heart conditions associated with Down's Syndrome."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.heartline.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Heartline:"], null)," supports children with heart disorders and their\n    families, whatever the condition wherever it is treated"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.lagans.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Lagan\u2019s Foundation:"], null)," offers home respite and support services for\n     young children with heart defects or feeding issues."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.lhm.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Little Hearts Matter:"], null)," offers support and information, and raises\n    awareness of those affected when a child has only half a heart."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.maxappeal.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Max Appeal:"], null)," Supports families affected by DiGeorge syndrome,\n     VCFS and 22q11.2 deletion."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.younghearts.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Oxford Young Hearts:"], null),"  support children with heart conditions\n     and their families in the counties served by the Oxford University Hospitals NHS Trust. "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.patchesheartgroup.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Patches Heart Group:"], null)," a support group for children with\n    congenital heart defects / aquired heart conditions and their families in the community."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.youngheart.info",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"The Scottish Association for Children with Heart Disorders\n     (SACHD):"], null)," supports children and young adults with congenital heart disorders, and the families in Scotland."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.thesf.org.uk",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Somerville Foundation:"], null)," supports young people and adults born with a\n    heart condition."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.22crew.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"The 22 Crew:"], null),"  A charity providing resources for patients with 22q\n     deletion and their families."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"//www.tinytickers.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Tiny tickers:"], null)," improving the detection, care and treatment of\n    babies with serious heart conditions"], null)], null);
prais2.content.render_charity_list = (function prais2$content$render_charity_list(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Charities"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.charities","ul.charities",1126612221),(function (){var iter__4311__auto__ = (function prais2$content$render_charity_list_$_iter__21115(s__21116){
return (new cljs.core.LazySeq(null,(function (){
var s__21116__$1 = s__21116;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21116__$1);
if(temp__5753__auto__){
var s__21116__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21116__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__21116__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__21118 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__21117 = (0);
while(true){
if((i__21117 < size__4310__auto__)){
var charity = cljs.core._nth.call(null,c__4309__auto__,i__21117);
cljs.core.chunk_append.call(null,b__21118,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),charity], null));

var G__21131 = (i__21117 + (1));
i__21117 = G__21131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21118),prais2$content$render_charity_list_$_iter__21115.call(null,cljs.core.chunk_rest.call(null,s__21116__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21118),null);
}
} else {
var charity = cljs.core.first.call(null,s__21116__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),charity], null),prais2$content$render_charity_list_$_iter__21115.call(null,cljs.core.rest.call(null,s__21116__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__.call(null,prais2.content.unassoc_charity_list);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Hospitals and hospital-associated charities"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.charities","ul.charities",1126612221),(function (){var iter__4311__auto__ = (function prais2$content$render_charity_list_$_iter__21119(s__21120){
return (new cljs.core.LazySeq(null,(function (){
var s__21120__$1 = s__21120;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__21120__$1);
if(temp__5753__auto__){
var s__21120__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21120__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__21120__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__21122 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__21121 = (0);
while(true){
if((i__21121 < size__4310__auto__)){
var h_code = cljs.core._nth.call(null,c__4309__auto__,i__21121);
cljs.core.chunk_append.call(null,b__21122,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.first.call(null,h_code.call(null,prais2.content.hospital_metadata))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4311__auto__ = ((function (i__21121,h_code,c__4309__auto__,size__4310__auto__,b__21122,s__21120__$2,temp__5753__auto__){
return (function prais2$content$render_charity_list_$_iter__21119_$_iter__21123(s__21124){
return (new cljs.core.LazySeq(null,((function (i__21121,h_code,c__4309__auto__,size__4310__auto__,b__21122,s__21120__$2,temp__5753__auto__){
return (function (){
var s__21124__$1 = s__21124;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__21124__$1);
if(temp__5753__auto____$1){
var s__21124__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21124__$2)){
var c__4309__auto____$1 = cljs.core.chunk_first.call(null,s__21124__$2);
var size__4310__auto____$1 = cljs.core.count.call(null,c__4309__auto____$1);
var b__21126 = cljs.core.chunk_buffer.call(null,size__4310__auto____$1);
if((function (){var i__21125 = (0);
while(true){
if((i__21125 < size__4310__auto____$1)){
var charity = cljs.core._nth.call(null,c__4309__auto____$1,i__21125);
cljs.core.chunk_append.call(null,b__21126,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),charity], null));

var G__21132 = (i__21125 + (1));
i__21125 = G__21132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21126),prais2$content$render_charity_list_$_iter__21119_$_iter__21123.call(null,cljs.core.chunk_rest.call(null,s__21124__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21126),null);
}
} else {
var charity = cljs.core.first.call(null,s__21124__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),charity], null),prais2$content$render_charity_list_$_iter__21119_$_iter__21123.call(null,cljs.core.rest.call(null,s__21124__$2)));
}
} else {
return null;
}
break;
}
});})(i__21121,h_code,c__4309__auto__,size__4310__auto__,b__21122,s__21120__$2,temp__5753__auto__))
,null,null));
});})(i__21121,h_code,c__4309__auto__,size__4310__auto__,b__21122,s__21120__$2,temp__5753__auto__))
;
return iter__4311__auto__.call(null,cljs.core.rest.call(null,h_code.call(null,prais2.content.hospital_metadata)));
})()], null)], null));

var G__21133 = (i__21121 + (1));
i__21121 = G__21133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21122),prais2$content$render_charity_list_$_iter__21119.call(null,cljs.core.chunk_rest.call(null,s__21120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21122),null);
}
} else {
var h_code = cljs.core.first.call(null,s__21120__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.first.call(null,h_code.call(null,prais2.content.hospital_metadata))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4311__auto__ = ((function (h_code,s__21120__$2,temp__5753__auto__){
return (function prais2$content$render_charity_list_$_iter__21119_$_iter__21127(s__21128){
return (new cljs.core.LazySeq(null,((function (h_code,s__21120__$2,temp__5753__auto__){
return (function (){
var s__21128__$1 = s__21128;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__21128__$1);
if(temp__5753__auto____$1){
var s__21128__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21128__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__21128__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__21130 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__21129 = (0);
while(true){
if((i__21129 < size__4310__auto__)){
var charity = cljs.core._nth.call(null,c__4309__auto__,i__21129);
cljs.core.chunk_append.call(null,b__21130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),charity], null));

var G__21134 = (i__21129 + (1));
i__21129 = G__21134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21130),prais2$content$render_charity_list_$_iter__21119_$_iter__21127.call(null,cljs.core.chunk_rest.call(null,s__21128__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21130),null);
}
} else {
var charity = cljs.core.first.call(null,s__21128__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),charity], null),prais2$content$render_charity_list_$_iter__21119_$_iter__21127.call(null,cljs.core.rest.call(null,s__21128__$2)));
}
} else {
return null;
}
break;
}
});})(h_code,s__21120__$2,temp__5753__auto__))
,null,null));
});})(h_code,s__21120__$2,temp__5753__auto__))
;
return iter__4311__auto__.call(null,cljs.core.rest.call(null,h_code.call(null,prais2.content.hospital_metadata)));
})()], null)], null),prais2$content$render_charity_list_$_iter__21119.call(null,cljs.core.rest.call(null,s__21120__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__.call(null,prais2.content.sorted_active_h_codes.call(null));
})()], null)], null);
});
prais2.content.bar_comments = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"inner","inner",-1383171215),"If the black dot is in this area then there is no evidence that chances of survival in the hospital were\n   different from what is predicted",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"If the black dot is in this area then there is some evidence that chances of survival in the hospital\n    were higher than predicted",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"If the black dot is in this area then there is some evidence that chances of survival in the hospital\n    were lower than predicted.",new cljs.core.Keyword(null,"low","low",-1601362409),"If the black dot is in this area then there is strong evidence that chances of survival in the hospital\n    were lower than predicted.",new cljs.core.Keyword(null,"high","high",2027297808),"If the black dot is in this area then there is strong evidence that chances of survival in the hospital\n    were higher than predicted."], null);
/**
 * 
 */
prais2.content.inner_comment = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (_){
return React.createElement("span",null,"There is no evidence that chances of survival in the hospital were different from predicted.");
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"inner-comment");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21137__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21137 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21138__i = 0, G__21138__a = new Array(arguments.length -  0);
while (G__21138__i < G__21138__a.length) {G__21138__a[G__21138__i] = arguments[G__21138__i + 0]; ++G__21138__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21138__a,0,null);
} 
return G__21137__delegate.call(this,args__16261__auto__);};
G__21137.cljs$lang$maxFixedArity = 0;
G__21137.cljs$lang$applyTo = (function (arglist__21139){
var args__16261__auto__ = cljs.core.seq(arglist__21139);
return G__21137__delegate(args__16261__auto__);
});
G__21137.cljs$core$IFn$_invoke$arity$variadic = G__21137__delegate;
return G__21137;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.content.high_comment = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (close_modal){
return React.createElement("span",null,"There is some evidence that chances of survival in the hospital were ",(function (){var attrs21140 = prais2.core.href.call(null,"faq/1/2",close_modal);
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21140))?sablono.interpreter.attributes.call(null,attrs21140):null),((cljs.core.map_QMARK_.call(null,attrs21140))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["higher than predicted."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21140),"higher than predicted."], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"high-comment");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21141__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21141 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21142__i = 0, G__21142__a = new Array(arguments.length -  0);
while (G__21142__i < G__21142__a.length) {G__21142__a[G__21142__i] = arguments[G__21142__i + 0]; ++G__21142__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21142__a,0,null);
} 
return G__21141__delegate.call(this,args__16261__auto__);};
G__21141.cljs$lang$maxFixedArity = 0;
G__21141.cljs$lang$applyTo = (function (arglist__21143){
var args__16261__auto__ = cljs.core.seq(arglist__21143);
return G__21141__delegate(args__16261__auto__);
});
G__21141.cljs$core$IFn$_invoke$arity$variadic = G__21141__delegate;
return G__21141;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.content.low_comment = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (close_modal){
return React.createElement("span",null,"There is some evidence that chances of survival in the hospital were ",(function (){var attrs21144 = prais2.core.href.call(null,"faq/1/4",close_modal);
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21144))?sablono.interpreter.attributes.call(null,attrs21144):null),((cljs.core.map_QMARK_.call(null,attrs21144))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lower than predicted."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21144),"lower than predicted."], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"low-comment");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21145__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21145 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21146__i = 0, G__21146__a = new Array(arguments.length -  0);
while (G__21146__i < G__21146__a.length) {G__21146__a[G__21146__i] = arguments[G__21146__i + 0]; ++G__21146__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21146__a,0,null);
} 
return G__21145__delegate.call(this,args__16261__auto__);};
G__21145.cljs$lang$maxFixedArity = 0;
G__21145.cljs$lang$applyTo = (function (arglist__21147){
var args__16261__auto__ = cljs.core.seq(arglist__21147);
return G__21145__delegate(args__16261__auto__);
});
G__21145.cljs$core$IFn$_invoke$arity$variadic = G__21145__delegate;
return G__21145;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.content.outer_low_comment = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (close_modal){
return React.createElement("span",null,"There is strong evidence that chances of survival in the hospital were ",(function (){var attrs21148 = prais2.core.href.call(null,"faq/1/4",close_modal);
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21148))?sablono.interpreter.attributes.call(null,attrs21148):null),((cljs.core.map_QMARK_.call(null,attrs21148))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lower than predicted."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21148),"lower than predicted."], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"outer-low-comment");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21149__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21149 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21150__i = 0, G__21150__a = new Array(arguments.length -  0);
while (G__21150__i < G__21150__a.length) {G__21150__a[G__21150__i] = arguments[G__21150__i + 0]; ++G__21150__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21150__a,0,null);
} 
return G__21149__delegate.call(this,args__16261__auto__);};
G__21149.cljs$lang$maxFixedArity = 0;
G__21149.cljs$lang$applyTo = (function (arglist__21151){
var args__16261__auto__ = cljs.core.seq(arglist__21151);
return G__21149__delegate(args__16261__auto__);
});
G__21149.cljs$core$IFn$_invoke$arity$variadic = G__21149__delegate;
return G__21149;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.content.outer_high_comment = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (close_modal){
return React.createElement("span",null,"There is strong evidence that chances of survival in the hospital were ",(function (){var attrs21152 = prais2.core.href.call(null,"faq/1/2",close_modal);
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21152))?sablono.interpreter.attributes.call(null,attrs21152):null),((cljs.core.map_QMARK_.call(null,attrs21152))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["higher than predicted."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21152),"higher than predicted."], null)));
})());
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"outer-high-comment");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21153__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21153 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21154__i = 0, G__21154__a = new Array(arguments.length -  0);
while (G__21154__i < G__21154__a.length) {G__21154__a[G__21154__i] = arguments[G__21154__i + 0]; ++G__21154__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21154__a,0,null);
} 
return G__21153__delegate.call(this,args__16261__auto__);};
G__21153.cljs$lang$maxFixedArity = 0;
G__21153.cljs$lang$applyTo = (function (arglist__21155){
var args__16261__auto__ = cljs.core.seq(arglist__21155);
return G__21153__delegate(args__16261__auto__);
});
G__21153.cljs$core$IFn$_invoke$arity$variadic = G__21153__delegate;
return G__21153;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
prais2.content.glossary = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"risk-adjustment","risk-adjustment",1023321368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Risk Adjustment",new cljs.core.Keyword(null,"body","body",-2049205669),"Since hospitals treat different children and different children have different chances of survival, we cannot\n    not expect hospitals to have the same survival rate. To understand a hospital\u2019s survival rate we need to put its\n    rate into the context of what children that hospital treated. Combining different risk factors (such as age,\n    weight, complexity of heart disease) into a single formula to calculate the predicted range means we can put a\n    hospital\u2019s survival rate into context. This overall process is called \u201Crisk adjustment\u201D and the formula is a\n    \u201Crisk adjustment method\u201D. "], null),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Survival rate",new cljs.core.Keyword(null,"body","body",-2049205669),"The percentage of operations where the child survived at least 30 days after their operation."], null),new cljs.core.Keyword(null,"unforeseen-factors","unforeseen-factors",-947388701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Unforeseeable factors",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It is impossible to predict precisely what is going to happen in an individual operation. This is partly due\n    to the inevitable inability to predict the future with certainty \u2013 all people are physically unique and will react\n    slightly differently to medicines, anaesthetic, surgery and no heart problem is exactly the same as another."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"There are also factors that we suspect may influence the outcome but cannot be included in the statistical\n  formula because no routine audit data on them is collected, for instance the size of a hole in the heart."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Together, we call these all \u201Cunforeseeable factors\u201D."], null)], null)], null),new cljs.core.Keyword(null,"predicted-range","predicted-range",2136703455),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Predicted and Extended Predicted range:",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We expect a hospital's overall survival rate to lie within its ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"predicted range"], null)," 19 times out of 20. "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We expect a hospital's overall survival rate to lie within its ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"extended predicted range"], null)," 998 times out of 1000. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"An illustration of how we present a hospital's survival rate (black dot) in\n                                     the context of its predicted range (dark blue bar) and extended prediction range\n                                     (light blue bar) is given below:"], null)], null)], null)], null);
prais2.content.title = "Everything else";
prais2.content.faq_sections = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"section","section",-300141526),"Background",new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Why do some children need heart surgery?",new cljs.core.Keyword(null,"short-title","short-title",-1405732809),"Why the need?",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"About 6500\u20147500 babies are born with a heart defect (called congenital heart disease) in the UK and\n       Ireland every year. Congenital heart disease covers a wide range of problems from the relatively minor (such as a\n       small hole in the heart) to more severe conditions where a child needs specialist hospital care. About half of\n       all children born with a heart defect will need heart surgery at some stage in their childhood. Children can also\n       develop problems with their heart as they grow up which require hospital care (called acquired heart disease). "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Read more about ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.chfed.org.uk/how-we-help/information-service/heart-conditions/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"different heart conditions"], null)," and caring for children with heart conditions on the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.chfed.org.uk/how-we-help/information-service/caring-for-heart-children/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Children\u2019s Heart Federation\u2019s website."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Why are survival rates after children's heart surgery monitored and published?",new cljs.core.Keyword(null,"short-title","short-title",-1405732809),"Why monitor survival?",new cljs.core.Keyword(null,"glossary","glossary",1104312830),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441)], null),new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"The NHS monitors survival rates after children\u2019s heart surgery to check if recent survival rates at\n      any hospital are much lower than predicted.",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://webarchive.nationalarchives.gov.uk/20090811143745/http:/www.bristol-inquiry.org.uk/final_report/the_report.pdf",new cljs.core.Keyword(null,"target","target",253001721),"_blank")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.thumbnail.pull-left.w100","img.thumbnail.pull-left.w100",1153920274),prais2.core.isrc.call(null,"assets/bristol.png")], null),"In the 1990s, problems were found with the standard of care for children having heart surgery at the Bristol\n                               Royal Infirmary. The proportion of children who died after surgery at Bristol was much higher than other UK\n                               hospitals. There was a formal inquiry into what happened (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://webarchive.nationalarchives.gov.uk/20090811143745/http:/www.bristol-inquiry.org.uk/final_report/the_report.pdf",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"The Bristol Inquiry 2001"], null),"), which led to a number of changes, including a new compulsory national reporting\n                               system. Since 2007, the proportions of children surviving to 30 days after heart surgery\n                               for most types of operations have been published every year. The overall survival rates\n                               after children\u2019s heart surgery for each hospital have been published since 2013. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faq/1/4"),"When there is some, or strong, evidence"], null)," that chances of\n                               survival at a hospital were lower than expected, the results are\n                               checked further by the hospital and the national audit body (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital"),"NCHDA"], null),")."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The UK and Ireland now have one of the strongest monitoring programmes in the world. Since reporting started, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.bbc.co.uk/news/health-32162803",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"survival rates have been improving"], null),"\n        and now ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"over 97% of children survive to at least one month after surgery."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"How are survival rates monitored?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Every year the national audit body (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"National Congenital Heart Disease Audit"], null),") publishes overall survival rates for each\n               hospital for the previous 3 years. Each hospital\u2019s survival rates are compared to what is predicted\n               for that hospital by a statistical formula."], null),new cljs.core.Keyword(null,"glossary","glossary",1104312830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),new cljs.core.Keyword(null,"predicted-range","predicted-range",2136703455)], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/patients",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.thumbnail.pull-left.w100","img.thumbnail.pull-left.w100",1153920274),prais2.core.isrc.call(null,"assets/nicor.png")], null)], null),"Since 2007, the national audit body (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"NCHDA"], null),") has published survival rates for certain\n                               ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://nicor4.nicor.org.uk/CHD/an_paeds.nsf/WBenchmarksYears?openview&RestrictToCategory=2014&start=1&count=500",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"types of procedure"], null)," (now over 70 different procedures) at each hospital. But the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital"),"NCHDA"], null)," did not\n                               publish overall survival rates for each hospital until 2013, because there was no clear way to put\n                               overall survival rates for each hospital into context\n                               (see ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"intro"),"What, Why and How?"], null),").\n\n                               However ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.ucl.ac.uk/operational-research/AnalysisTools/PRAiS",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"researchers"], null)," have now made this possible by creating a statistical formula that gives a predicted\n                               chance of a child\u2019s 30-day survival, taking the complexity of their medical problems\n                               into account. So since 2013, NCHDA has used this formula to calculate the predicted\n                               and extended predicted ranges of survival for each hospital, so that the hospital\u2019s\n                               survival rate can be interpreted in the context of the children it treated\n                               (see ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"intro"),"What, Why and How?"], null),").  "], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The predicted range\n                              is the range in which we expect to see each hospital\u2019s survival rate the majority of\n                              the time (see our video ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faqs"),"How is the predicted range calculated?"], null),"). ","The predicted range is calculated using the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"same"], null)," statistical formula for all hospitals and\n       this prediction is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"not"], null)," influenced by what the survival rate at a hospital actually was (see our short video ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faqs"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-video-camera","i.fa.fa-video-camera",-1639337819)], null)," How is the predicted range calculated?"], null),"). ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faq/1/4"),"See what happens if\n                               the survival rate falls"], null)," below its predicted range."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Operations that occur within 30 days of each other are treated as a single operation when reporting overall\n       survival."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital"),"NCHDA"], null)," publishes all its reports ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://nicor4.nicor.org.uk/chd/an_paeds.nsf/vwContent/Analysis%20Documents?Opendocument",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"here"], null),". "], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Where is this data from?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"The data on each child\u2019s operation and what was wrong with their heart comes from the hospital\u2019s\n      records. The data on whether a child survived to 30 days after their operation comes from both the hospital and\n      the Office of National Statistics.",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Each hospital in the UK and Ireland must collect data on every surgery or intervention carried out on a\n       child under 16 years old. Every three months, hospitals must submit this data to the national audit body, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"NCHDA"], null)," (The National Institute for\n        Cardiovascular Outcomes Research). NCHDA sets out exactly what data is collected and each hospital undergoes\n        independent checks of the quality of their submitted data. NCHDA also reports to the UK Department of Health,\n        the Care Quality Commission (CQC) and other NHS regulatory bodies."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"NCHDA"], null)," tracks the survival of these children by linking to the national register of deaths\n                               using patients\u2019 NHS number (in England and Wales) and also from hospital records."], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"section","section",-300141526),"Understanding the predicted range",new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Why is a different survival range predicted for each hospital?",new cljs.core.Keyword(null,"short-title","short-title",-1405732809),"Why do predictions differ?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"The predicted range of survival is the range in which we expect to see each hospital\u2019s\n               survival rate the majority of the time. It depends only on the complexity of the medical problems of the\n               children who had heart operations. Each hospital treats different children and so each hospital will have\n               a different predicted range.",new cljs.core.Keyword(null,"glossary","glossary",1104312830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),new cljs.core.Keyword(null,"predicted-range","predicted-range",2136703455)], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Heart disease in children covers a wide range of disorders, from relatively minor to more serious\n       conditions. This affects a child's chances of survival, as do other factors such as age, weight and other health\n       problems."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Some hospitals take on more cases that are particularly complicated, meaning they tend to operate on\n       children with a lower chance of survival. Each hospital will also treat different children from year to year,\n       so we expect any hospital\u2019s survival rate to vary from year to year. We therefore would not expect all\n       hospitals to have the same survival rates and it is not valid to simply compare hospitals' survival rates.\n       It is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"only valid"], null)," to compare a hospital\u2019s survival rate to its own predicted range."], null),null], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Why does the width of the predicted range differ between hospitals?",new cljs.core.Keyword(null,"glossary","glossary",1104312830),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unforeseen-factors","unforeseen-factors",-947388701),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),new cljs.core.Keyword(null,"predicted-range","predicted-range",2136703455)], null),new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"If a hospital does fewer operations, unforeseeable factors have a bigger influence on its overall\n      survival rate. Therefore the predicted range is wider for hospitals that do fewer operations.",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"A predicted range of survival is calculated individually for each hospital, taking\n                              into account the children it treated.  If the chances of survival at that hospital are\n                              as predicted, then we expect the hospital\u2019s survival rate to lie within the predicted\n                              range 19 times out of 20. The width of the predicted range varies with the number of\n                              operations a hospital has done, because of unforeseeable factors that occur. We know\n                              that sometimes unforeseeable factors will affect a child\u2019s survival \u2013 though, of course,\n                              we cannot predict exactly what they will be and when they will occur. In a smaller\n                              hospital that performs 100 operations per year, even if one more or one fewer child\n                              survives due to unforeseeable factors, this could make a big difference to that\n                              hospital\u2019s overall survival rate. However such unforeseeable factors would have less\n                              influence on the overall survival rate of a larger hospital performing 1000 operations.\n                              This is why hospitals doing more operations have a narrower predicted range than hospitals\n                              doing fewer operations."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"When looking at just one hospital, what does it mean if its survival is outside its\n              predicted range?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"There are four possible reasons why a hospital might be outside its predicted range:\n               inaccurate data, a formula that for some reason doesn\u2019t work well for that hospital, just by chance\n               (1 time in 20), or because the chances of survival at that hospital are different to what is predicted. ",new cljs.core.Keyword(null,"glossary","glossary",1104312830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),new cljs.core.Keyword(null,"predicted-range","predicted-range",2136703455)], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Possible reasons for a hospital\u2019s survival rate being outside its predicted range of survival:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"1. Inaccurate data"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Each hospital and the Office of National Statistics supply data on each child to the national audit body.\n       Although the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faq/2/1"),"data submitted is of very high quality"], null),", there will always be some\n       inaccuracies in such large datasets. If a hospital submits data where some of the data is very wrong or missing, then this will result in a wrong predicted range."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"2. The formula doesn\u2019t work well for that hospital"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The statistical formula is applied to all operations at that hospital to calculate its overall predicted\n       range of survival. Although ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faq/2/0"),"the formula is as good as we can currently get it"], null),", it is not perfect.\n       There will always be unique features about a child that affect their\n       chance of survival that are not captured by national data collection and so cannot be part of a formula (e.g. the\n       size of a hole in the heart). We will never be able to capture the whole medical picture of a child in a single\n       formula. That means that the predicted range is the best possible guess for what the predicted range should be.\n       If a hospital happens to have operated on a lot of children with unique features that affect their chances of\n       survival but are not captured by the formula, the predicted range might be unfairly high for that hospital."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"3. Chance"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If the hospital\u2019s data contains no errors and there\u2019s no reason to think that the\n                              formula shouldn\u2019t apply well to that hospital, then in 19 times out of 20, we\u2019d expect\n                              to see a hospital\u2019s overall survival range within the predicted range. This means that\n                              the hospital\u2019s survival rate could be outside its predicted range just by chance\n                              (1 time in 20). (You can also watch ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faqs"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-video-camera","i.fa.fa-video-camera",-1639337819)], null)," our short video"], null)," on how the predicted range is calculated.)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"4. The chances of survival at that hospital are different to what are predicted by the formula."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The chances of survival for children at the hospital could genuinely be much higher or lower than what is\n       predicted, which would make it more likely that the hospital\u2019s survival rate would lie outside its predicted\n       range. The national audit process is intended to check that no hospital in the UK and Ireland has chances of\n       survival much lower than predicted. See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faq/1/4"),"What happens if a hospital\u2019s survival is below its predicted range"], null)," to\n       find out what happens in such situations."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"When looking at ALL hospitals simultaneously, what does it mean if any of the hospitals have a survival\n     rate outside their predicted range?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"When looking at all 13 hospitals at once, we expect at least one hospital\u2019s survival rate to be\n      outside its predicted range about half the time.",new cljs.core.Keyword(null,"glossary","glossary",1104312830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),new cljs.core.Keyword(null,"predicted-range","predicted-range",2136703455)], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If we were looking at only one hospital, we\u2019d expect its survival rate to fall\n                              outside its predicted range rarely if chances of survival at the hospital match the\n                              formula: only 1 time in 20 just by chance. But, if we are looking at all 13 hospitals\n                              at once, we\u2019d actually expect that at least one hospital will fall outside its range\n                              just by chance about 9 times in 20."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is similar to the situation where you hear a friend won a good prize in a raffle. This may be\n       surprising, but it becomes a lot less surprising when you hear they bought 100 tickets. Just as this gave them\n       more chances of winning, the more hospitals we look at, the more likely it becomes that at least one will fall\n       outside its range, even if survival at all the hospitals matches the formula."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"So, on average, we\u2019d anticipate about half of NCHDA\u2019s annual reports to have at least one hospital outside\n       its range, either above or below, by chance alone."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faq/1/4"),"what happens if a hospital falls below its predicted or extended predicted range."], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Considering now the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"extended predicted range"], null)], null),", if we look at all 13 hospitals at once, we\u2019d only\n       expect ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"any"], null)," one of them to be outside their extended range very rarely, just 1 time in 40. This is why\n       a hospital\u2019s survival rate being outside the extended predicted range is considered strong evidence that the\n       chances of a patient surviving at that hospital are different to what is expected."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"What actually happens if a hospital\u2019s survival rate is below its predicted range?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"The national audit body works with the hospital to check the quality of the data. If this is fine,\n      the hospital and the relevant national health service explore the processes of care at that hospital. If these\n      bring to light any concerns, the health service and the hospital work together to improve care, which might\n      include temporarily suspending heart surgery at that centre. ",new cljs.core.Keyword(null,"glossary","glossary",1104312830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),new cljs.core.Keyword(null,"predicted-range","predicted-range",2136703455)], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)," If a hospital\u2019s survival rate is below its predicted range (either the main or\n                              extended predicted range), everyone wants to\n       be sure that there is not a potential problem in the pathway of care. It is important to either rule this out or\n       start to improve care if it\u2019s decided that this is the reason. (See also ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faq/1/2"),"What does it mean if a hospital is outside its predicted range?"], null),")."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If a hospital's survival rate is below the predicted range, the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.ucl.ac.uk/nicor/audits/congenital/governance",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"National Congenital\n        Heart Disease Audit Steering Committee "], null)," is notified. The Committee in turn notifies the relevant national health service\u2019s Medical Director and the\n                               lead doctor for congenital heart disease at that hospital and a detailed examination of the hospital\u2019s results\n                               takes place. There are established and published procedures which can be put into action if the detailed\n                               assessment raises concerns about care. In England, for instance, this would involve the\n                               ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.bcs.com/pages/page_affiliate.asp?PageID=321",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"British\n                               Congenital Cardiac Association"], null)," and/or the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.cqc.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Care Quality Commission."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)," There are two main steps:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Step 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The hospital is asked to recheck the data it submitted for any errors."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Step 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"With the corrected data:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If the hospital\u2019s survival rate is still below its predicted range but within the extended predicted range\n       (like this ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),prais2.core.isrc.call(null,"assets/below-predicted.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"18px"], null))], null),"), then an internal hospital review is conducted to understand whether there is cause\n       for concern. "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If the hospital\u2019s survival rate is below the extended predicted range (like this ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),prais2.core.isrc.call(null,"/assets/below-extended.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"18px"], null))], null)," ),\n       then an external review of the hospital\u2019s processes and results would be instigated."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"In all such cases, the reviews (whether internal or external) would be published online by NCHDA at the same\n       time as the Annual Report."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"NOTE: It is quite common for one of the 13 hospitals to be outside its predicted\n                              range, but it is rare for any of them to be outside the extended predicted range.\n                              (See also: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faq/1/3"),"Looking at ALL hospitals"], null),")"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The NCHDA also publishes additional reports from any hospital which has a survival\n                              rate below its predicted range. These are ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://nicor4.nicor.org.uk/chd/an_paeds.nsf/vwContent/Analysis%20Documents?Opendocument"),"available here"], null),", along with the NCHDA annual reports."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"What actually happens if a hospital\u2019s survival rate is above its predicted range?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"Healthcare services are currently looking into the best way to capture learning from hospitals\n               where there is strong evidence that chances of survival were higher than predicted using the formula. ",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),null], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Where did the formula used to calculate the predicted range come from?",new cljs.core.Keyword(null,"body","body",-2049205669),null,new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The national audit body uses a formula developed by researchers at Great Ormond Street Hospital and\n       University College London called PRAiS (Partial Risk Adjustment in Surgery - see also the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"intro"),"What, why, how?"], null)," section). The underlying methodology of this method is published in\n        the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.ucl.ac.uk/operational-research/AnalysisTools/PRAiS",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"academic\n        literature"], null)," if you are interested in learning more details."], null),null], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"section","section",-300141526),"Limitations of these results and the data",new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Are there any limitations to using a formula?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"Yes \u2013 a child\u2019s chances of survival can never be completely captured in a single formula. ",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Yes there are. While using a formula to take into account the complexity of each\n                              child\u2019s medical problems allows for fairer assessment of a hospital\u2019s survival rate,\n                              it still cannot make it completely fair. There will always be information about\n                              important factors that affect a child\u2019s chances of survival that are not routinely\n                              collected for national bodies and so cannot be captured by a formula that was developed\n                              using national data."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Any statistical formula has to be developed on existing data and so the data will be typically at least a\n       year out of date. So risk adjustment cannot adjust or account for future changes to the way data is collected\n       (for instance more complete data) or new methods of surgical or medical management. Often, these statistical\n       formulas are updated every few years with more up to date information (in 2016, we updated the PRAiS statistical model for the third time). "], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"How reliable are the data?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"The data are of very high quality and some of the best in the world.",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The data come from the National Congenital Heart Disease Audit (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"NCHDA"], null),")\n                               which is managed by the National Institute of Cardiovascular Outcomes Research (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.ucl.ac.uk/nicor"),"NICOR"], null),"). ","All hospitals in the UK and Ireland performing heart\n       surgery in children have to submit their data in a standard format to NCHDA. All hospitals are independently\n       audited each year as part of a data validation process (to check the quality of the data submitted) to ensure\n       that the data are of high quality."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"While no large dataset is perfect (it is inevitable that a few records will not be 100% accurate), this\n       dataset is among the most detailed and complete in the world for children\u2019s heart surgery."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"What are the limitations of the data?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"These data do not capture all the potential medical problems a child has and only represent a\n      snapshot of survival outcomes. They cannot capture the full picture of the quality of care provided by a hospital.",new cljs.core.Keyword(null,"glossary","glossary",1104312830),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unforeseen-factors","unforeseen-factors",-947388701)], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Apart from occasional inaccuracies in the data, there are other limits to what the data can tell us about\n       surgery outcomes. There are factors that affect a child\u2019s chances of survival that are not routinely collected\n       for by national bodies and so cannot be captured by a formula that was developed using national data. These data are\n       also snapshots in time of what happened at each hospital. A run of unforeseeable factors could cause a very good\n       hospital to have worse outcomes than predicted, so we need to be careful about reading too much into results from\n       any single time period."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The data also can\u2019t tell us about how or why a hospital achieved the recorded\n                              results, so it cannot, by itself, tell us whether one hospital offers better or worse\n                              quality care than any other. These data cannot tell you what the results are likely to be\n                              next year. It also cannot tell us anything about what happens to children who never get\n                              operated on for whatever reason, since data on these children is not currently submitted\n                              to national audit."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"What about longer term survival and quality of life?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"At the moment these are not reported. There is active research underway to work out how to report\n      long term survival and quality of life for children after heart surgery but it will be some years before this\n      becomes part of routine national audit.",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"As of 2017, national audit only monitors what happens shortly after surgery (30 days). These data cannot\n       tell us about longer term (e.g. 5 year) survival, or other outcomes such as post-surgery complication rates or\n       the impact of surgery on the child or their family. There is a lot of ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.gosh.nhs.uk/medical-information/clinical-specialties/cardiothoracic-surgery-information-parents-and-visitors/research/complications-after-heart-surgery-children",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"active research"], null)," going on right now (due to finish around 2018) investigating how to\n             capture, interpret and publish longer term survival and complication rates so hopefully this information\n             will become available in the next 5 years."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Why is survival to 30 days after surgery used as the main survival measure?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"Survival to 30 days after surgery is a more objective measure than survival to hospital discharge,\n      since different types of hospital have different treatment pathways for very sick patients (for instance some will\n      transfer patients to another hospital or some to local palliative care). ",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Two very common measures used for looking at a hospital\u2019s outcomes are \u201Csurvival at discharge from hospital\u201D\n       and \u201C30 day survival\u201D after an operation. Survival at discharge is often used in other contexts as it\u2019s the\n       easiest to obtain \u2013 it is included within standard hospital records. However, survival to discharge does depend\n       on the discharge procedures at that hospital. For instance, some hospitals will transfer very sick patients to\n       other, more specialised hospitals, meaning that more patients will be alive at discharge from that hospital than\n       the specialised hospital. Some hospitals might have close links with local palliative care services and so might\n       discharge patients to these services if further treatment is considered unavailing. Again, such hospitals with\n       have more patients alive at discharge compared to a hospital that look after the sickest patients until they die. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Therefore, if it is available, \u201C30 day survival\u201D after surgery is considered a more objective and preferable\n       statistic than \u201Csurvival to hospital discharge\u201D, since it does not depend on the hospital\u2019s discharge procedures."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"While ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faq/2/3"),"longer term survival"], null)," is extremely important, 30-day survival post\n       surgery was initially chosen as it is more straightforward to link this outcome to a child\u2019s surgery and\n       post-operative care than a longer range survival  period which might, for instance, incorporate further treatment\n       at different hospitals. The other important aspect of monitoring 30-day survival, particularly within hospitals,\n       is that any worrying outcomes can be investigated very quickly since the survival outcomes are available\n       (locally) within 30 days of a child\u2019s operation."], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"section","section",-300141526),"My family or child",new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Can this data inform my choice of hospital?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can use this website to see how a hospital\u2019s survival rate compares to its\n                              predicted range, but the data cannot tell you which hospital to go to. Please discuss\n                              this with your child\u2019s clinical team or access the support offered by specialist\n                              charities such as the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.chfed.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Children\u2019s Heart Federation."], null)], null)], null),new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"On this site, you can ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"data"),"explore the data"], null)," to see how the\n                              different hospitals\u2019 survival rates compare to their own predicted ranges for 3 year report periods. You can also use the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://nicor4.nicor.org.uk/CHD/an_paeds.nsf/WBenchmarksYears?openview&RestrictToCategory=2014&start=1&count=500",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"national audit website"], null)," to explore how many operations of each type a hospital does and survival outcomes for each of these. However,\n                               this website cannot, in itself, tell you which hospital you should go to and does not provide proof that one hospital is\n                               \u201Cbetter\u201D than any other. The safety or otherwise of a hospital ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"cannot"], null)," be determined from\n        survival data alone."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"When considering which hospital, there are many factors to take into account, including how well the\n       clinical team know your child and his or her medical history, any particular medical issues that your child has\n       (for instance, some hospitals specialise in treating children  with particularly complex medical problems) and\n       how far the hospital is from your home."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You should discuss your child\u2019s care with their specialist cardiologist to determine the best treatment\n       option for your child."], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can also access the support available from national charities such as the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Children\u2019s Heart Federation"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.lhm.org.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Little Hearts Matter"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"faq/3/2"),"local charities for your specialist children\u2019s hospital"], null),".\n                               These guides on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"speaking to your child\u2019s surgeon"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"seeking a second opinion"], null),", written by the Children\u2019s Heart Federation, might also be helpful."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Can the published data tell me about the risks for my child?",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"No. Your child\u2019s clinical team will always know more about your child than the statistical formula can.",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No, the published data cannot tell you about the risk for your child specifically \u2013 this will depend on\n       other factors that are not necessarily captured in the national data. Your child\u2019s specialist cardiologist and/or\n       cardiac surgeon will be able to discuss this with you. These guides on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.chfed.org.uk/documents/2015/02/talking-to-doctors-pdf-factsheet.pdf",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"speaking to your child\u2019s surgeon"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.chfed.org.uk/documents/2012/11/second-opinion-factsheet.pdf",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"seeking a second opinion"], null),", written by the Children\u2019s Heart Federation, might also be helpful."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Charities and support groups for families of children with heart problems",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We have collated a list of charities and support groups for families of children with heart problems (all\n       active as of 2016). Some of them specialise in certain heart conditions while others are only active in certain\n       places."], null),prais2.content.render_charity_list.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"NOTE: As of 2016, Royal Victoria Hospital in Belfast no longer operates on children with congenital heart\n       disease."], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"section","section",-300141526),"Who developed this site and how",new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"About us",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".image-para",".image-para",1108265922),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.pull-left.w150","img.pull-left.w150",-1413709033),prais2.core.isrc.call(null,"assets/ucl-logo-black.png")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://ucl.ac.uk/coru",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"University College London"], null),": ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.ucl.ac.uk/operational-research/the_team/#christina",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Dr Christina Pagel"], null)," is a Reader in Operational Research (a branch of applied mathematics) at University College London, applying\n                            maths to problems in the NHS. She works very closely with doctors and other clinical staff, mainly at Great\n                            Ormond Street Hospital, to help them use routinely collected data to improve NHS services. Her work currently\n                            focuses on two areas: 1) care for children requiring heart surgery and 2) how specialist intensive care is\n                            organised for children who need it (for whatever reason). "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Christina helped developed a statistical method called PRAiS to let hospitals and the national audit body\n        easily monitor survival outcomes after heart surgery in children. In this project, Christina worked with Sense\n        about Science, the University of Cambridge, King\u2019s College London and the Children\u2019s Heart Federation to develop\n        these online resources to help people interpret the audit body\u2019s published results. In particular, she wrote a\n        lot of the content, helped enormously by feedback from the team and the user workshops. Thanks to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null," http://www.ucl.ac.uk/operational-research/the_team/#andrew",new cljs.core.Keyword(null,"target","target",253001721),"_blank")," Dr Andrew Wilshere"], null)," for designing our logo. "], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".image-para",".image-para",1108265922),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.pull-left.w150","img.pull-left.w150",-1413709033),prais2.core.isrc.call(null,"assets/camlogo-old.png")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://understandinguncertainty.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Professor David Spiegelhalter"], null)," is a statistician from Cambridge University.   He has worked for many years with doctors from Great Ormond\n                            Street Hospital on monitoring outcomes following surgery for congenital heart disease, and led the statistical\n                            team at the Bristol Royal Infirmary Inquiry.  He is particularly interested in transparent communication, and\n                            was part of the team that drew up the new national patient information leaflets for breast cancer screening.\n                            For this project, David helped write the content, especially the language around the statistical formula and\n                            predicted range.  "], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://nrich.maths.org/2714",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Mike Pearson"], null)," has created many visualisations and interactives\n                            for ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://understandinguncertainty.org/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Understanding Uncertainty"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://nrich.maths.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"NRICH"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://plus.maths.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"PLUS"], null),", and\n                            ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://wild.maths.org"),"Wild.maths.org"], null),". He developed this website and its\n                            data visualisations, attending the focus groups and working closely with Sense about Science and the video animation team, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://qudos.com",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Qudos"], null),"."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".image-para",".image-para",1108265922),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.pull-left.w100","img.pull-left.w100",-87718063),prais2.core.isrc.call(null,"assets/KCLlogo.gif")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://kclpure.kcl.ac.uk/portal/tim.rakow.html"),"Dr Tim Rakow"], null)," is a Reader in Psychology\n                            who studies how people make choices and how best to provide information to help people make decisions.\n                            He has previously worked with the cardiologists and heart surgeons at Great Ormond Street looking at\n                            their decisions about surgery, and with Professor Spiegelhalter on the public\u2019s understanding of\n                            complex statistical information. For this project, he worked with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://kclpure.kcl.ac.uk/portal/emily.1.blackshaw.html"),"Emily Blackshaw"], null),", another psychologist\n                            at King\u2019s College London, to run experiments that examined which types of explanation and graphics\n                            would be the best ones for us to include in this website."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".image-para",".image-para",1108265922),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.pull-left.w100","img.pull-left.w100",-87718063),prais2.core.isrc.call(null,"assets/sas-logo.png")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.senseaboutscience.org/"),"Sense About Science"], null)," is an\n                            independent campaigning charity that challenges the misrepresentation of science and scientific\n                            evidence in public life. They advocate openness and honesty about research findings and work\n                            to ensure the public interest in sound science and evidence is represented and recognised in\n                            public discussion and policy making."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sense about Science has collaborated on a number of highly successful Public Engagement\n                           Partnerships, to help scientists to communicate their research findings simply and accurately\n                           by co-developing resources with the intended audience. Two of their team, Emily Jesper, Head\n                           of Partnerships and Governance and Joanne Thomas, Projects and Events Coordinator were\n                           involved in this project. They provided expertise in communicating complex scientific\n                           information and facilitated 8 user-testing workshops with parents, other interested users\n                           and members of the public to test that the information and animations on the website are\n                           clear, accessible and coherent."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".image-para",".image-para",1108265922),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.pull-left.w100","img.pull-left.w100",-87718063),prais2.core.isrc.call(null,"assets/chf-logo.png")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.chfed.org.uk/"),"The Children\u2019s Heart Federation"], null)," is the main umbrella body for British CHD charities and\n         voluntary organisations. They publicised this project among their members and coordinated the involvement of\n         parents of children who had heart surgery in our workshops."], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Contact us",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For general questions and comments about this website please email ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:enquiries@senseaboutscience.org"], null),"enquiries@senseaboutscience.org"], null),"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For questions about the mathematical formula used, or the predicted range, please email ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:maths@childrensheartsurgery.info"], null),"maths@childrensheartsurgery.info."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For reporting technical problems, please email ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:technical@childrensheartsurgery.info"], null),"technical@childrensheartsurgery.info."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For questions about the audit process or any individual hospital's results, please contact the national audit body ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.ucl.ac.uk/nicor/audits/congenital ",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"NCHDA"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"How we developed this site",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We developed this site in just over a year from April 2015 until launch in June 2016. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The academic mathematicians and statisticians wrote first drafts of the content in May 2015, with feedback\n       from communication experts at Sense about Science and the academic psychologists at King\u2019s College London. Over\n       the next 10 months, Sense about Science held four sets of two workshops, to test the web content. At each stage,\n       one workshop was with interested potential users (e.g. press officers; health journalists; policy professionals)\n       and the other workshop was with parents of children who had heart surgery. At each stage, we invited different\n       individuals to attend each workshop in order to test the updated content with people who had not seen the previous\n       versions. We also asked participants from past workshops to provide feedback on the animations and website as they developed. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"As the website took shape in the autumn of 2015, the academic psychologists at King\u2019s College London did\n       formal tests of specific sentences and concepts discussed in the website to see if one way of explaining the\n       concepts worked better than another and to pinpoint where there was possibility for confusion. We also shared\n       the evolving website with the clinical community including surgeons, intensive care doctors, the national audit\n       body, data experts and cardiologists, to incorporate their feedback too. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Over time, the website took shape, evolving a great deal over the year in response to the workshops, the\n       psychology experiments and other feedback. We user tested everything from layout to colours to language to page\n       navigation and very little remains from the original draft content. "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sense about Science have also produced a ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://senseaboutscience.org/activities/public-engagement-guide/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"free practical guide"], null)," for researchers on how to engage the public\n                                based on the model we used for this website."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Looking back, we cannot thank all those who gave feedback enough \u2013 this website is immeasurably better with\n       their input than it would otherwise have been. Any niggles that remain are our responsibility alone.  "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We would also like to thank our funder, the UK National Institute of Health Research, for encouraging us to\n       think ambitiously about how to develop this site and giving us the time and money to do it. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Explanatory videos"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Very many thanks to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.therichardstonepartnership.co.uk/artist-details/leighton_pugh",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Leighton Pugh"], null)," for donating his time and expertise to narrating both\n                          videos. The artwork and production for both videos was with developed in collaboration with\n                          ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.qudos-animations.co.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Qudos Animations"], null),". We thank them\n                          for their great work and responsiveness in working to tight deadlines."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"In the media",new cljs.core.Keyword(null,"short-answer","short-answer",-924551154),"The site launch generated a lot of media interest, some of which we've collected together here.",new cljs.core.Keyword(null,"glossary","glossary",1104312830),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.charities","ul.charities",1126612221),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.theguardian.com/science/sifting-the-evidence/2016/jun/21/making-nhs-data-public-is-not-the-same-as-making-it-accessible-we-can-and-should-do-better"),"Guardian article:"], null)," \u201CMaking NHS data public is not the same as making it accessible \u2013 we can and should\n                                do better.\u201D by Christina Pagel, UCL and David Spiegelhalter, University of Cambridge."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"40px"], null)], null),"Other coverage"], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.charities","ul.charities",1126612221),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Sense about Science discuss their new public engagement guide based on this website work ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.nihr.ac.uk/blogs/five-steps-to-help-you-involve-the-public-in-communicating-research/7359",new cljs.core.Keyword(null,"target","target",253001721),"_blank")," in this NIHR Blog."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.nihr.ac.uk/blogs/my-journey-through-the-five-steps-of-public-engagement-an-academics-story/7429 "),"Christina Pagel discusses"], null)," the five steps of public engagement and how they applied to this website in this NIHR blog."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.bmj.com/content/353/bmj.i3539",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"The BMJ/News:"], null)," \u201CChildren\u2019s heart surgery website aims to end confusion over survival rates\u201D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.thelancet.com/pdfs/journals/lancet/PIIS0140-6736(16)30888-1.pdf",new cljs.core.Keyword(null,"target","target",253001721),"_blank")," The Lancet/Editorial:"], null)," \u201CCommunicating risk about children\u2019s heart surgery well\u201D"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Sense about Science wrote about why involving the patients and families, and involving them early, matters, on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.amrc.org.uk/blog/involving-parents-and-patients-in-public-engagement-a-humbling-and-invaluable-experience",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"the Association of Medical Research Charities\u2019s blog"], null),"."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Christina shared her insights from the experience and provides tips for other researchers in a ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.nihr.ac.uk/05-development/newsroom/blog-DO-NOT-DELETE/insights-on-building-a-website-to-help-people-interpret-childrens-heart-surgery-data.htm",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"National Institute for Health Research (NIHR) blog"], null),"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.statslife.org.uk/news/2919-new-online-tool-makes-heart-surgery-data-more-accessible",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"The Royal Statistical Society"], null)," blogged about the project."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Tim Rakow, KCL shared his experience in a ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.kcl.ac.uk/ioppn/news/records/2016/June/Parent-led-tool-opens-up-NHS-childrens-heart-surgery-data-to-families-.aspx",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"KCL news piece"], null),"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.cam.ac.uk/research/news/parent-led-tool-opens-up-nhs-childrens-heart-surgery-data-to-families",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"University of Cambridge"], null)," \u201CParent-led tool opens up NHS children's heart surgery data to families\u201D "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.chfed.org.uk/understanding-childrens-heart-surgery-outcomes/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Children\u2019s Heart Federation explain:"], null)," \u201C \u2026parents\u2019 views have been at the heart of developments that today launch a parent-led tool opening up NHS children\u2019s heart surgery data to families.\u201D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.rcsed.ac.uk/news-public-affairs/news/2016/june/understanding-children-s-heart-surgery-outcomes",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Royal College of Surgeons of Edinburgh:"], null)," \u201CUnderstanding Children\u2019s Heart Surgery Outcomes\u201D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.insight.mrc.ac.uk/2016/07/29/beyond-open-making-data-accessible/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Insight: Medical Research Council"], null)," \u201CBeyond open: making your data accessible\u201D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"http://www.mumsnet.com/Talk/guest_posts/2699023-Guest-post-I-hope-weve-helped-others-preparing-for-their-childs-heart-surgery",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Mumsnet guest post:"], null)," \u201CI hope we've helped others preparing for their child's heart surgery\u201D by Alex Smith"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://understandinguncertainty.org/exploring-language-chance-sensitive-context",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Understanding Uncertainty:"], null)," \u201CExploring the language of chance in a sensitive context\u201D by David Spiegelhalter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.youtube.com/watch?v=-NebRpbMTK8",new cljs.core.Keyword(null,"target","target",253001721),"_blank"),"Communicating Risks Reactively:"], null)," A video of Mike Pearson's talk about the development of this site which was presented at Euroclojure 2016."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),prais2.core.href.call(null,"https://www.telegraph.co.uk/health-fitness/doctors-diary/doctors-diary-theres-another-side-to-the-closure-of-childrens-he/amp/"),"Telegraph article:"], null)," \u201CDoctor's Diary: There's another side to the closure of children's heart surgery wards\u201D by Michael Fitzpatrick"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"section","section",-300141526),"Glossary of terms used",new cljs.core.Keyword(null,"is-glossary","is-glossary",-1988185117),true,new cljs.core.Keyword(null,"faqs","faqs",636275568),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glossary-entry","glossary-entry",348150220),new cljs.core.Keyword(null,"survival-rate","survival-rate",490067441),new cljs.core.Keyword(null,"title","title",636505583),"Survival rate",new cljs.core.Keyword(null,"body","body",-2049205669),"The percentage of operations where the child survived at least 30 days after their operation."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glossary-entry","glossary-entry",348150220),new cljs.core.Keyword(null,"unforeseen-factors","unforeseen-factors",-947388701),new cljs.core.Keyword(null,"title","title",636505583),"Unforeseeable factors",new cljs.core.Keyword(null,"body","body",-2049205669),"It is impossible to predict precisely what is going to happen in an individual operation. This is partly\n      due to the inevitable inability to predict the future with certainty \u2013 all people are physically unique and will\n      react slightly differently to medicines, anaesthetic, surgery and no heart problem is exactly the same as another.\u00A0\n      Our inability to predict precisely is also partly because there are factors that we suspect may influence the\n      outcome but cannot be included in the statistical method either because these factors are difficult to define or\n      no routine data on them is collected. Together, we call these all \u201Cunforeseeable factors\u201D."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glossary-entry","glossary-entry",348150220),new cljs.core.Keyword(null,"predicted-range","predicted-range",2136703455),new cljs.core.Keyword(null,"title","title",636505583),"Predicted and Extended Predicted Range:",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We expect a hospital's overall survival rate to lie within its predicted range 19 times out of 20. "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We expect a hospital's overall survival rate to lie within its ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"extended"], null)," predicted range 998 times out of 1000. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"An illustration of how we present a hospital's survival rate (black dot) in\n                                     the context of its predicted range (dark blue bar) and extended prediction range\n                                     (light blue bar) is given below:"], null)], null)], null)], null)], null)], null);
prais2.content.colour_map_options = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#fc8d59",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#efdf11",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#efdf11",new cljs.core.Keyword(null,"high","high",2027297808),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"header","header",119441134),"#91bfdb",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#efdf11",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#fc8d59",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#fc8d59",new cljs.core.Keyword(null,"high","high",2027297808),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"header","header",119441134),"#fc8d59",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#7fcdbb",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#2c7fb8",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#2c7fb8",new cljs.core.Keyword(null,"high","high",2027297808),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"header","header",119441134),"#2c7fb8",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#3c8fc8",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#7fcdbb",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#7fcdbb",new cljs.core.Keyword(null,"high","high",2027297808),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"header","header",119441134),"#3c8fc8",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#8FB4E1",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#578FD2",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#578FD2",new cljs.core.Keyword(null,"high","high",2027297808),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"header","header",119441134),"#578FD2",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#578FD2",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#8FB4E1",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#8FB4E1",new cljs.core.Keyword(null,"high","high",2027297808),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"header","header",119441134),"#578FD2",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#fc8d59",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#efdf11",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#92DEDB",new cljs.core.Keyword(null,"high","high",2027297808),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"header","header",119441134),"#91bfdb",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#efdf11",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#fc8d59",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#7FCDBB",new cljs.core.Keyword(null,"high","high",2027297808),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"header","header",119441134),"#fc8d59",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#7fcdbb",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#2c7fb8",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#319470",new cljs.core.Keyword(null,"high","high",2027297808),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"header","header",119441134),"#2c7fb8",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#8FB4E1",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#578FD2",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#599464",new cljs.core.Keyword(null,"high","high",2027297808),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"header","header",119441134),"#578FD2",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#3c8fc8",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#7fcdbb",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#9BE45C",new cljs.core.Keyword(null,"high","high",2027297808),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"header","header",119441134),"#3c8fc8",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#578FD2",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#8FB4E1",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#9AE1A7",new cljs.core.Keyword(null,"high","high",2027297808),"rgba(255,255,255,0)",new cljs.core.Keyword(null,"header","header",119441134),"#578FD2",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"low","low",-1601362409),"#f0f0f0",new cljs.core.Keyword(null,"inner","inner",-1383171215),"#566AF9",new cljs.core.Keyword(null,"outer-low","outer-low",-1535705257),"#C9CDFC",new cljs.core.Keyword(null,"outer-high","outer-high",-1917743057),"#C9CDFC",new cljs.core.Keyword(null,"high","high",2027297808),"#f0f0f0",new cljs.core.Keyword(null,"header","header",119441134),"#4F4763",new cljs.core.Keyword(null,"dot","dot",1442709401),"black"], null)], null);

//# sourceMappingURL=content.js.map
