// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('prais2.chrome');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('goog.string');
goog.require('prais2.utils');
goog.require('prais2.core');

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
prais2.chrome.Nav_item = (function (long_title,short_title,class$,icon,token,__meta,__extmap,__hash){
this.long_title = long_title;
this.short_title = short_title;
this.class$ = class$;
this.icon = icon;
this.token = token;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
prais2.chrome.Nav_item.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

prais2.chrome.Nav_item.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k20368,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__20372 = k20368;
var G__20372__$1 = (((G__20372 instanceof cljs.core.Keyword))?G__20372.fqn:null);
switch (G__20372__$1) {
case "long-title":
return self__.long_title;

break;
case "short-title":
return self__.short_title;

break;
case "class":
return self__.class$;

break;
case "icon":
return self__.icon;

break;
case "token":
return self__.token;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20368,else__4193__auto__);

}
});

prais2.chrome.Nav_item.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer(writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4205__auto__,pr_pair__4207__auto__,"#prais2.chrome.Nav-item{",", ","}",opts__4206__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$long_DASH_title,self__.long_title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$short_DASH_title,self__.short_title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$class,self__.class$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$icon,self__.icon],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$token,self__.token],null))], null),self__.__extmap));
});

prais2.chrome.Nav_item.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20367){
var self__ = this;
var G__20367__$1 = this;
return (new cljs.core.RecordIter((0),G__20367__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$long_DASH_title,cljs.core.cst$kw$short_DASH_title,cljs.core.cst$kw$class,cljs.core.cst$kw$icon,cljs.core.cst$kw$token], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

prais2.chrome.Nav_item.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

prais2.chrome.Nav_item.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,self__.__extmap,self__.__hash));
});

prais2.chrome.Nav_item.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

prais2.chrome.Nav_item.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = (function (){var fexpr__20373 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (-82826409 ^ cljs.core.hash_unordered_coll(coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
;
return fexpr__20373(this__4186__auto____$1);
})();
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

prais2.chrome.Nav_item.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20369,other20370){
var self__ = this;
var this20369__$1 = this;
return ((!((other20370 == null))) && ((this20369__$1.constructor === other20370.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20369__$1.long_title,other20370.long_title)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20369__$1.short_title,other20370.short_title)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20369__$1.class,other20370.class)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20369__$1.icon,other20370.icon)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20369__$1.token,other20370.token)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20369__$1.__extmap,other20370.__extmap)));
});

prais2.chrome.Nav_item.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$icon,null,cljs.core.cst$kw$token,null,cljs.core.cst$kw$long_DASH_title,null,cljs.core.cst$kw$class,null,cljs.core.cst$kw$short_DASH_title,null], null), null),k__4200__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4200__auto__)),null));
}
});

prais2.chrome.Nav_item.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__20367){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__20374 = cljs.core.keyword_identical_QMARK_;
var expr__20375 = k__4198__auto__;
if(cljs.core.truth_((function (){var G__20377 = cljs.core.cst$kw$long_DASH_title;
var G__20378 = expr__20375;
return (pred__20374.cljs$core$IFn$_invoke$arity$2 ? pred__20374.cljs$core$IFn$_invoke$arity$2(G__20377,G__20378) : pred__20374.call(null,G__20377,G__20378));
})())){
return (new prais2.chrome.Nav_item(G__20367,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20379 = cljs.core.cst$kw$short_DASH_title;
var G__20380 = expr__20375;
return (pred__20374.cljs$core$IFn$_invoke$arity$2 ? pred__20374.cljs$core$IFn$_invoke$arity$2(G__20379,G__20380) : pred__20374.call(null,G__20379,G__20380));
})())){
return (new prais2.chrome.Nav_item(self__.long_title,G__20367,self__.class$,self__.icon,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20381 = cljs.core.cst$kw$class;
var G__20382 = expr__20375;
return (pred__20374.cljs$core$IFn$_invoke$arity$2 ? pred__20374.cljs$core$IFn$_invoke$arity$2(G__20381,G__20382) : pred__20374.call(null,G__20381,G__20382));
})())){
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,G__20367,self__.icon,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20383 = cljs.core.cst$kw$icon;
var G__20384 = expr__20375;
return (pred__20374.cljs$core$IFn$_invoke$arity$2 ? pred__20374.cljs$core$IFn$_invoke$arity$2(G__20383,G__20384) : pred__20374.call(null,G__20383,G__20384));
})())){
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,G__20367,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20385 = cljs.core.cst$kw$token;
var G__20386 = expr__20375;
return (pred__20374.cljs$core$IFn$_invoke$arity$2 ? pred__20374.cljs$core$IFn$_invoke$arity$2(G__20385,G__20386) : pred__20374.call(null,G__20385,G__20386));
})())){
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,G__20367,self__.__meta,self__.__extmap,null));
} else {
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4198__auto__,G__20367),null));
}
}
}
}
}
});

prais2.chrome.Nav_item.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$long_DASH_title,self__.long_title,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$short_DASH_title,self__.short_title,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$class,self__.class$,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$icon,self__.icon,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$token,self__.token,null))], null),self__.__extmap));
});

prais2.chrome.Nav_item.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__20367){
var self__ = this;
var this__4189__auto____$1 = this;
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,G__20367,self__.__extmap,self__.__hash));
});

prais2.chrome.Nav_item.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4196__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

prais2.chrome.Nav_item.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$long_DASH_title,cljs.core.cst$sym$short_DASH_title,cljs.core.cst$sym$class,cljs.core.cst$sym$icon,cljs.core.cst$sym$token], null);
});

prais2.chrome.Nav_item.cljs$lang$type = true;

prais2.chrome.Nav_item.cljs$lang$ctorPrSeq = (function (this__4227__auto__){
return (new cljs.core.List(null,"prais2.chrome/Nav-item",null,(1),null));
});

prais2.chrome.Nav_item.cljs$lang$ctorPrWriter = (function (this__4227__auto__,writer__4228__auto__){
return cljs.core._write(writer__4228__auto__,"prais2.chrome/Nav-item");
});

/**
 * Positional factory function for prais2.chrome/Nav-item.
 */
prais2.chrome.__GT_Nav_item = (function prais2$chrome$__GT_Nav_item(long_title,short_title,class$,icon,token){
return (new prais2.chrome.Nav_item(long_title,short_title,class$,icon,token,null,null,null));
});

/**
 * Factory function for prais2.chrome/Nav-item, taking a map of keywords to field values.
 */
prais2.chrome.map__GT_Nav_item = (function prais2$chrome$map__GT_Nav_item(G__20371){
var extmap__4223__auto__ = (function (){var G__20387 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20371,cljs.core.cst$kw$long_DASH_title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$short_DASH_title,cljs.core.cst$kw$class,cljs.core.cst$kw$icon,cljs.core.cst$kw$token], 0));
if(cljs.core.record_QMARK_(G__20371)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20387);
} else {
return G__20387;
}
})();
return (new prais2.chrome.Nav_item(cljs.core.cst$kw$long_DASH_title.cljs$core$IFn$_invoke$arity$1(G__20371),cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1(G__20371),cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(G__20371),cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(G__20371),cljs.core.cst$kw$token.cljs$core$IFn$_invoke$arity$1(G__20371),null,cljs.core.not_empty(extmap__4223__auto__),null));
});

prais2.chrome.nbsp = goog.string.unescapeEntities("&nbsp;");
prais2.chrome.what_why = ["What,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.chrome.nbsp),"why,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.chrome.nbsp),"how?"].join('');
prais2.chrome.everything_else = ["Everything",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.chrome.nbsp),"else"].join('');
prais2.chrome.nav_items = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$home,(new prais2.chrome.Nav_item("Home","Home","nav-item home","home","home",null,null,null)),cljs.core.cst$kw$intro,(new prais2.chrome.Nav_item(prais2.chrome.what_why,prais2.chrome.what_why,"nav-item intro","question","intro",null,null,null)),cljs.core.cst$kw$data,(new prais2.chrome.Nav_item("Data","Explore the data","nav-item data","table","data/map",null,null,null)),cljs.core.cst$kw$faqs,(new prais2.chrome.Nav_item(prais2.chrome.everything_else,prais2.chrome.everything_else,"nav-item faqs","info","faqs",null,null,null))], null);
/**
 * 
 */
prais2.chrome.bs_nav_link = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (active_QMARK_,nav_item,click_handler){
return React.createElement("li",null,React.createElement("a",({"onClick": click_handler, "data-toggle": "collapse", "data-target": ".navbar-collapse.in", "href": prais2.core.token__GT_url(cljs.core.cst$kw$token.cljs$core$IFn$_invoke$arity$1(nav_item)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navbar-btn",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active_QMARK_)?" active ":" ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(nav_item))].join('')], null))}),React.createElement("i",({"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa",["fa-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(nav_item))].join('')], null))})),sablono.interpreter.interpret([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1(nav_item))].join(''))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"bs-nav-link");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20389__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20389 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20390__i = 0, G__20390__a = new Array(arguments.length -  0);
while (G__20390__i < G__20390__a.length) {G__20390__a[G__20390__i] = arguments[G__20390__i + 0]; ++G__20390__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20390__a,0,null);
} 
return G__20389__delegate.call(this,args__14302__auto__);};
G__20389.cljs$lang$maxFixedArity = 0;
G__20389.cljs$lang$applyTo = (function (arglist__20391){
var args__14302__auto__ = cljs.core.seq(arglist__20391);
return G__20389__delegate(args__14302__auto__);
});
G__20389.cljs$core$IFn$_invoke$arity$variadic = G__20389__delegate;
return G__20389;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
prais2.chrome.nav_click_handler = (function prais2$chrome$nav_click_handler(nav_item_key){
return (function (e){
return prais2.core.click__GT_event_bus(e,nav_item_key,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nav_item_key,cljs.core.cst$kw$data))?cljs.core.cst$kw$map:null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nav_item_key,cljs.core.cst$kw$data))?"data/map":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(nav_item_key))].join('')));
});
});
/**
 * 
 */
prais2.chrome.bs_fixed_navbar = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (active_key){
return React.createElement("nav",({"className": "navbar navbar-simple navbar-fixed-top"}),React.createElement("div",({"className": "navbar-inner"}),React.createElement("div",({"className": "container"}),React.createElement("div",({"key": (1), "className": "navbar-header"}),React.createElement("button",({"key": (1), "type": "button", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar", "className": "navbar-toggle collapsed"}),React.createElement("span",({"key": (1), "className": "sr-only"}),"Toggle navigation"),React.createElement("span",({"key": (2), "className": "icon-bar"})),React.createElement("span",({"key": (3), "className": "icon-bar"})),React.createElement("span",({"key": (4), "className": "icon-bar"})))),React.createElement("div",({"id": "navbar", "key": (2), "className": "navbar-collapse collapse"}),React.createElement("ul",({"key": (1), "className": "nav navbar-nav navbar-right"}),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__20392_SHARP_,p2__20393_SHARP_){
return prais2.utils.key_with(p1__20392_SHARP_,(function (){var G__20396 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_key,p2__20393_SHARP_);
var G__20397 = (p2__20393_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__20393_SHARP_.cljs$core$IFn$_invoke$arity$1(prais2.chrome.nav_items) : p2__20393_SHARP_.call(null,prais2.chrome.nav_items));
var G__20398 = prais2.chrome.nav_click_handler(p2__20393_SHARP_);
return (prais2.chrome.bs_nav_link.cljs$core$IFn$_invoke$arity$3 ? prais2.chrome.bs_nav_link.cljs$core$IFn$_invoke$arity$3(G__20396,G__20397,G__20398) : prais2.chrome.bs_nav_link.call(null,G__20396,G__20397,G__20398));
})());
}),cljs.core.keys(prais2.chrome.nav_items))))))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"bs-fixed-navbar");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20399__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20399 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20400__i = 0, G__20400__a = new Array(arguments.length -  0);
while (G__20400__i < G__20400__a.length) {G__20400__a[G__20400__i] = arguments[G__20400__i + 0]; ++G__20400__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20400__a,0,null);
} 
return G__20399__delegate.call(this,args__14302__auto__);};
G__20399.cljs$lang$maxFixedArity = 0;
G__20399.cljs$lang$applyTo = (function (arglist__20401){
var args__14302__auto__ = cljs.core.seq(arglist__20401);
return G__20399__delegate(args__14302__auto__);
});
G__20399.cljs$core$IFn$_invoke$arity$variadic = G__20399__delegate;
return G__20399;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.chrome.header = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
var attrs20402 = (function (){var G__20403 = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app));
return (prais2.chrome.bs_fixed_navbar.cljs$core$IFn$_invoke$arity$1 ? prais2.chrome.bs_fixed_navbar.cljs$core$IFn$_invoke$arity$1(G__20403) : prais2.chrome.bs_fixed_navbar.call(null,G__20403));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20402))?sablono.interpreter.attributes(attrs20402):null),((cljs.core.map_QMARK_(attrs20402))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"className": "main-title-box"}),(function (){var attrs20404 = prais2.core.href.cljs$core$IFn$_invoke$arity$variadic("/",cljs.core.cst$kw$on_DASH_touch_DASH_start,prais2.chrome.nav_click_handler(cljs.core.cst$kw$home),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_click,prais2.chrome.nav_click_handler(cljs.core.cst$kw$home)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20404))?sablono.interpreter.attributes(attrs20404):null),((cljs.core.map_QMARK_(attrs20404))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("img",({"src": "/assets/logo3.png", "style": ({"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}), "className": "img-responsive pull-left"}))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20404),React.createElement("img",({"src": "/assets/logo3.png", "style": ({"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}), "className": "img-responsive pull-left"}))], null)));
})(),React.createElement("div",({"style": ({"marginLeft": "0px", "paddingLeft": "0px", "paddingRight": "40px"}), "className": "pull-left main-title"}),"UNDERSTANDING CHILDREN'S HEART SURGERY OUTCOMES"))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20402),React.createElement("div",({"className": "main-title-box"}),(function (){var attrs20411 = prais2.core.href.cljs$core$IFn$_invoke$arity$variadic("/",cljs.core.cst$kw$on_DASH_touch_DASH_start,prais2.chrome.nav_click_handler(cljs.core.cst$kw$home),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_click,prais2.chrome.nav_click_handler(cljs.core.cst$kw$home)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20411))?sablono.interpreter.attributes(attrs20411):null),((cljs.core.map_QMARK_(attrs20411))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("img",({"src": "/assets/logo3.png", "style": ({"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}), "className": "img-responsive pull-left"}))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20411),React.createElement("img",({"src": "/assets/logo3.png", "style": ({"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}), "className": "img-responsive pull-left"}))], null)));
})(),React.createElement("div",({"style": ({"marginLeft": "0px", "paddingLeft": "0px", "paddingRight": "40px"}), "className": "pull-left main-title"}),"UNDERSTANDING CHILDREN'S HEART SURGERY OUTCOMES"))], null)));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"header");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20418__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20418 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20419__i = 0, G__20419__a = new Array(arguments.length -  0);
while (G__20419__i < G__20419__a.length) {G__20419__a[G__20419__i] = arguments[G__20419__i + 0]; ++G__20419__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20419__a,0,null);
} 
return G__20418__delegate.call(this,args__14302__auto__);};
G__20418.cljs$lang$maxFixedArity = 0;
G__20418.cljs$lang$applyTo = (function (arglist__20420){
var args__14302__auto__ = cljs.core.seq(arglist__20420);
return G__20418__delegate(args__14302__auto__);
});
G__20418.cljs$core$IFn$_invoke$arity$variadic = G__20418__delegate;
return G__20418;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
/**
 * 
 */
prais2.chrome.footer = (function (){var render_mixin__14299__auto__ = rum.core.render__GT_mixin((function (){
return React.createElement("div",({"className": "container-fluid partners"}),React.createElement("div",({"className": "row visible-xs-block"}),React.createElement("div",({"className": "col-xs-offset-1"}),React.createElement("h4",null,(function (){var attrs20427 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/4/0");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20427))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link"], null)], null),attrs20427], 0))):({"className": "link"})),((cljs.core.map_QMARK_(attrs20427))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("span",null,"Project partners ",React.createElement("i",({"className": "fa fa-chevron-right"})))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20427),React.createElement("span",null,"Project partners ",React.createElement("i",({"className": "fa fa-chevron-right"})))], null)));
})()),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",null,"University College, London"),React.createElement("li",null,"University of Cambridge"),React.createElement("li",null,"King's College, London"),React.createElement("li",null,"Sense about Science"),React.createElement("li",null,"Children's Heart Federation")))),React.createElement("div",({"className": "row hidden-xs"}),React.createElement("div",({"className": "col-sm-10 collab-logo"}),(function (){var attrs20432 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/4/0");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20432))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link"], null)], null),attrs20432], 0))):({"className": "link"})),((cljs.core.map_QMARK_(attrs20432))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About us"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20432),"About us"], null)));
})(),"| ",(function (){var attrs20433 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/4/1");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs20433))?sablono.interpreter.attributes(attrs20433):null),((cljs.core.map_QMARK_(attrs20433))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Contact us"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20433),"Contact us"], null)));
})()),React.createElement("div",({"className": "col-sm-10 collab-logo col-md-offset-1 col-md-11"}),(function (){var attrs20434 = prais2.core.isrc("assets/ucl-logo.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"190px"], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs20434))?sablono.interpreter.attributes(attrs20434):null),((cljs.core.map_QMARK_(attrs20434))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20434)], null)));
})(),(function (){var attrs20435 = prais2.core.isrc("assets/camlogo.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"220px"], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs20435))?sablono.interpreter.attributes(attrs20435):null),((cljs.core.map_QMARK_(attrs20435))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20435)], null)));
})(),(function (){var attrs20436 = prais2.core.isrc("assets/KCLlogo.gif",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"130px"], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs20436))?sablono.interpreter.attributes(attrs20436):null),((cljs.core.map_QMARK_(attrs20436))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20436)], null)));
})(),(function (){var attrs20437 = prais2.core.isrc("assets/sas-logo.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"80px"], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs20437))?sablono.interpreter.attributes(attrs20437):null),((cljs.core.map_QMARK_(attrs20437))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20437)], null)));
})(),(function (){var attrs20438 = prais2.core.isrc("assets/chf-logo.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"80px"], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs20438))?sablono.interpreter.attributes(attrs20438):null),((cljs.core.map_QMARK_(attrs20438))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20438)], null)));
})())),React.createElement("div",({"className": "row footer"}),React.createElement("div",({"className": "acks col-md-offset-1"}),React.createElement("h3",null,"Funding acknowledgement"),React.createElement("p",null,"This project was funded by the National Institute for Health Research Health Services and Delivery Research\n      Programme\n(project number 14/19/13)"),React.createElement("h3",null,"Department of Health disclaimer"),React.createElement("p",null,"The views and opinions expressed therein are those of the authors and do not necessarily reflect those of the\n      Health Services and Delivery Research Programme, NIHR, NHS or the Department of Health."))),React.createElement("div",({"className": "row footer legal"}),React.createElement("div",({"className": "col-md-offset-1"}),React.createElement("p",({"className": "copyright"}),"\u00A9 PRAIS2 website project team 2016, 2019"),React.createElement("p",({"className": "cookies"}),"This site uses cookies to help understand how users interact with the site.\n     See ",React.createElement("a",({"href": "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"}),"Google Analytics")))));
}));
var class__14300__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__14299__auto__], null),null),"footer");
var ctor__14301__auto__ = ((function (render_mixin__14299__auto__,class__14300__auto__){
return (function() { 
var G__20439__delegate = function (args__14302__auto__){
var state__14303__auto__ = rum.core.args__GT_state(args__14302__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__14300__auto__,state__14303__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
};
var G__20439 = function (var_args){
var args__14302__auto__ = null;
if (arguments.length > 0) {
var G__20440__i = 0, G__20440__a = new Array(arguments.length -  0);
while (G__20440__i < G__20440__a.length) {G__20440__a[G__20440__i] = arguments[G__20440__i + 0]; ++G__20440__i;}
  args__14302__auto__ = new cljs.core.IndexedSeq(G__20440__a,0,null);
} 
return G__20439__delegate.call(this,args__14302__auto__);};
G__20439.cljs$lang$maxFixedArity = 0;
G__20439.cljs$lang$applyTo = (function (arglist__20441){
var args__14302__auto__ = cljs.core.seq(arglist__20441);
return G__20439__delegate(args__14302__auto__);
});
G__20439.cljs$core$IFn$_invoke$arity$variadic = G__20439__delegate;
return G__20439;
})()
;})(render_mixin__14299__auto__,class__14300__auto__))
;
return cljs.core.with_meta(ctor__14301__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__14300__auto__], null));
})();
