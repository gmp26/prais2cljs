// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('prais2.chrome');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('rum.core');
goog.require('prais2.utils');
goog.require('prais2.core');
/**
 * return CSS rgba string
 */
prais2.chrome.rgba_string = (function prais2$chrome$rgba_string(p__16794){
var vec__16798 = p__16794;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16798,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16798,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16798,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16798,(3),null);
return [cljs.core.str("rgba("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(","),cljs.core.str(a)].join('');
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
prais2.chrome.Nav_item.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6843__auto__,k__6844__auto__){
var self__ = this;
var this__6843__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6843__auto____$1,k__6844__auto__,null);
});

prais2.chrome.Nav_item.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6845__auto__,k16802,else__6846__auto__){
var self__ = this;
var this__6845__auto____$1 = this;
var G__16804 = (((k16802 instanceof cljs.core.Keyword))?k16802.fqn:null);
switch (G__16804) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16802,else__6846__auto__);

}
});

prais2.chrome.Nav_item.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6857__auto__,writer__6858__auto__,opts__6859__auto__){
var self__ = this;
var this__6857__auto____$1 = this;
var pr_pair__6860__auto__ = ((function (this__6857__auto____$1){
return (function (keyval__6861__auto__){
return cljs.core.pr_sequential_writer(writer__6858__auto__,cljs.core.pr_writer,""," ","",opts__6859__auto__,keyval__6861__auto__);
});})(this__6857__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6858__auto__,pr_pair__6860__auto__,"#prais2.chrome.Nav-item{",", ","}",opts__6859__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$long_DASH_title,self__.long_title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$short_DASH_title,self__.short_title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$class,self__.class$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$icon,self__.icon],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$token,self__.token],null))], null),self__.__extmap));
});

prais2.chrome.Nav_item.prototype.cljs$core$IIterable$ = true;

prais2.chrome.Nav_item.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16801){
var self__ = this;
var G__16801__$1 = this;
return (new cljs.core.RecordIter((0),G__16801__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$long_DASH_title,cljs.core.cst$kw$short_DASH_title,cljs.core.cst$kw$class,cljs.core.cst$kw$icon,cljs.core.cst$kw$token], null),cljs.core._iterator(self__.__extmap)));
});

prais2.chrome.Nav_item.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6841__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
return self__.__meta;
});

prais2.chrome.Nav_item.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6837__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,self__.__extmap,self__.__hash));
});

prais2.chrome.Nav_item.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6847__auto__){
var self__ = this;
var this__6847__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

prais2.chrome.Nav_item.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6838__auto__){
var self__ = this;
var this__6838__auto____$1 = this;
var h__6656__auto__ = self__.__hash;
if(!((h__6656__auto__ == null))){
return h__6656__auto__;
} else {
var h__6656__auto____$1 = cljs.core.hash_imap(this__6838__auto____$1);
self__.__hash = h__6656__auto____$1;

return h__6656__auto____$1;
}
});

prais2.chrome.Nav_item.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6839__auto__,other__6840__auto__){
var self__ = this;
var this__6839__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6209__auto__ = other__6840__auto__;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = (this__6839__auto____$1.constructor === other__6840__auto__.constructor);
if(and__6209__auto____$1){
return cljs.core.equiv_map(this__6839__auto____$1,other__6840__auto__);
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return true;
} else {
return false;
}
});

prais2.chrome.Nav_item.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6852__auto__,k__6853__auto__){
var self__ = this;
var this__6852__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$icon,null,cljs.core.cst$kw$token,null,cljs.core.cst$kw$long_DASH_title,null,cljs.core.cst$kw$class,null,cljs.core.cst$kw$short_DASH_title,null], null), null),k__6853__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6852__auto____$1),self__.__meta),k__6853__auto__);
} else {
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6853__auto__)),null));
}
});

prais2.chrome.Nav_item.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6850__auto__,k__6851__auto__,G__16801){
var self__ = this;
var this__6850__auto____$1 = this;
var pred__16805 = cljs.core.keyword_identical_QMARK_;
var expr__16806 = k__6851__auto__;
if(cljs.core.truth_((pred__16805.cljs$core$IFn$_invoke$arity$2 ? pred__16805.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$long_DASH_title,expr__16806) : pred__16805.call(null,cljs.core.cst$kw$long_DASH_title,expr__16806)))){
return (new prais2.chrome.Nav_item(G__16801,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16805.cljs$core$IFn$_invoke$arity$2 ? pred__16805.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$short_DASH_title,expr__16806) : pred__16805.call(null,cljs.core.cst$kw$short_DASH_title,expr__16806)))){
return (new prais2.chrome.Nav_item(self__.long_title,G__16801,self__.class$,self__.icon,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16805.cljs$core$IFn$_invoke$arity$2 ? pred__16805.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,expr__16806) : pred__16805.call(null,cljs.core.cst$kw$class,expr__16806)))){
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,G__16801,self__.icon,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16805.cljs$core$IFn$_invoke$arity$2 ? pred__16805.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$icon,expr__16806) : pred__16805.call(null,cljs.core.cst$kw$icon,expr__16806)))){
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,G__16801,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16805.cljs$core$IFn$_invoke$arity$2 ? pred__16805.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$token,expr__16806) : pred__16805.call(null,cljs.core.cst$kw$token,expr__16806)))){
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,G__16801,self__.__meta,self__.__extmap,null));
} else {
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6851__auto__,G__16801),null));
}
}
}
}
}
});

prais2.chrome.Nav_item.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6855__auto__){
var self__ = this;
var this__6855__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$long_DASH_title,self__.long_title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$short_DASH_title,self__.short_title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$class,self__.class$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$icon,self__.icon],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$token,self__.token],null))], null),self__.__extmap));
});

prais2.chrome.Nav_item.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6842__auto__,G__16801){
var self__ = this;
var this__6842__auto____$1 = this;
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,G__16801,self__.__extmap,self__.__hash));
});

prais2.chrome.Nav_item.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6848__auto__,entry__6849__auto__){
var self__ = this;
var this__6848__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6849__auto__)){
return cljs.core._assoc(this__6848__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6849__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6849__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6848__auto____$1,entry__6849__auto__);
}
});

prais2.chrome.Nav_item.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$long_DASH_title,cljs.core.cst$sym$short_DASH_title,cljs.core.cst$sym$class,cljs.core.cst$sym$icon,cljs.core.cst$sym$token], null);
});

prais2.chrome.Nav_item.cljs$lang$type = true;

prais2.chrome.Nav_item.cljs$lang$ctorPrSeq = (function (this__6877__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"prais2.chrome/Nav-item");
});

prais2.chrome.Nav_item.cljs$lang$ctorPrWriter = (function (this__6877__auto__,writer__6878__auto__){
return cljs.core._write(writer__6878__auto__,"prais2.chrome/Nav-item");
});

prais2.chrome.__GT_Nav_item = (function prais2$chrome$__GT_Nav_item(long_title,short_title,class$,icon,token){
return (new prais2.chrome.Nav_item(long_title,short_title,class$,icon,token,null,null,null));
});

prais2.chrome.map__GT_Nav_item = (function prais2$chrome$map__GT_Nav_item(G__16803){
return (new prais2.chrome.Nav_item(cljs.core.cst$kw$long_DASH_title.cljs$core$IFn$_invoke$arity$1(G__16803),cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1(G__16803),cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(G__16803),cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(G__16803),cljs.core.cst$kw$token.cljs$core$IFn$_invoke$arity$1(G__16803),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16803,cljs.core.cst$kw$long_DASH_title,cljs.core.array_seq([cljs.core.cst$kw$short_DASH_title,cljs.core.cst$kw$class,cljs.core.cst$kw$icon,cljs.core.cst$kw$token], 0)),null));
});

prais2.chrome.nbsp = goog.string.unescapeEntities("&nbsp;");
prais2.chrome.what_why = [cljs.core.str("What,"),cljs.core.str(prais2.chrome.nbsp),cljs.core.str("why,"),cljs.core.str(prais2.chrome.nbsp),cljs.core.str("how?")].join('');
prais2.chrome.everything_else = [cljs.core.str("Everything"),cljs.core.str(prais2.chrome.nbsp),cljs.core.str("else")].join('');
prais2.chrome.nav_items = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$home,(new prais2.chrome.Nav_item("Home","Home","nav-item home","home","home",null,null,null)),cljs.core.cst$kw$intro,(new prais2.chrome.Nav_item(prais2.chrome.what_why,prais2.chrome.what_why,"nav-item intro","question","intro",null,null,null)),cljs.core.cst$kw$data,(new prais2.chrome.Nav_item("Data","Explore the data","nav-item data","table","data/map",null,null,null)),cljs.core.cst$kw$faqs,(new prais2.chrome.Nav_item(prais2.chrome.everything_else,prais2.chrome.everything_else,"nav-item faqs","info","faqs",null,null,null))], null);
/**
 * 
 */
prais2.chrome.bs_nav_link = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (active_QMARK_,nav_item,click_handler){
var G__16815 = "li";
var G__16816 = null;
var G__16817 = (function (){var G__16818 = "a";
var G__16819 = {"onClick": click_handler, "data-toggle": "collapse", "data-target": ".navbar-collapse.in", "href": prais2.core.token__GT_url(cljs.core.cst$kw$token.cljs$core$IFn$_invoke$arity$1(nav_item)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navbar-btn",[cljs.core.str((cljs.core.truth_(active_QMARK_)?" active ":" ")),cljs.core.str(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(nav_item))].join('')], null))};
var G__16820 = (function (){var G__16822 = "i";
var G__16823 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa",[cljs.core.str("fa-"),cljs.core.str(cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(nav_item))].join('')], null))};
return React.createElement(G__16822,G__16823);
})();
var G__16821 = sablono.interpreter.interpret([cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1(nav_item))].join(''));
return React.createElement(G__16818,G__16819,G__16820,G__16821);
})();
return React.createElement(G__16815,G__16816,G__16817);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"bs-nav-link");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16824__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16824 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16825__i = 0, G__16825__a = new Array(arguments.length -  0);
while (G__16825__i < G__16825__a.length) {G__16825__a[G__16825__i] = arguments[G__16825__i + 0]; ++G__16825__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16825__a,0);
} 
return G__16824__delegate.call(this,args__8012__auto__);};
G__16824.cljs$lang$maxFixedArity = 0;
G__16824.cljs$lang$applyTo = (function (arglist__16826){
var args__8012__auto__ = cljs.core.seq(arglist__16826);
return G__16824__delegate(args__8012__auto__);
});
G__16824.cljs$core$IFn$_invoke$arity$variadic = G__16824__delegate;
return G__16824;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
prais2.chrome.nav_click_handler = (function prais2$chrome$nav_click_handler(nav_item_key){
return (function (e){
return prais2.core.click__GT_event_bus(e,nav_item_key,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nav_item_key,cljs.core.cst$kw$data))?cljs.core.cst$kw$map:null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nav_item_key,cljs.core.cst$kw$data))?"data/map":[cljs.core.str(cljs.core.name(nav_item_key))].join('')));
});
});
/**
 * 
 */
prais2.chrome.bs_fixed_navbar = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (active_key){
var G__16831 = "nav";
var G__16832 = {"className": "navbar navbar-simple navbar-fixed-top"};
var G__16833 = (function (){var G__16834 = "div";
var G__16835 = {"className": "navbar-inner"};
var G__16836 = (function (){var G__16837 = "div";
var G__16838 = {"className": "container"};
var G__16839 = (function (){var G__16841 = "div";
var G__16842 = {"key": (1), "className": "navbar-header"};
var G__16843 = (function (){var G__16844 = "button";
var G__16845 = {"key": (1), "type": "button", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar", "className": "navbar-toggle collapsed"};
var G__16846 = (function (){var G__16850 = "span";
var G__16851 = {"key": (1), "className": "sr-only"};
var G__16852 = "Toggle navigation";
return React.createElement(G__16850,G__16851,G__16852);
})();
var G__16847 = (function (){var G__16853 = "span";
var G__16854 = {"key": (2), "className": "icon-bar"};
return React.createElement(G__16853,G__16854);
})();
var G__16848 = (function (){var G__16855 = "span";
var G__16856 = {"key": (3), "className": "icon-bar"};
return React.createElement(G__16855,G__16856);
})();
var G__16849 = (function (){var G__16857 = "span";
var G__16858 = {"key": (4), "className": "icon-bar"};
return React.createElement(G__16857,G__16858);
})();
return React.createElement(G__16844,G__16845,G__16846,G__16847,G__16848,G__16849);
})();
return React.createElement(G__16841,G__16842,G__16843);
})();
var G__16840 = (function (){var G__16859 = "div";
var G__16860 = {"id": "navbar", "key": (2), "className": "navbar-collapse collapse"};
var G__16861 = (function (){var G__16862 = "ul";
var G__16863 = {"key": (1), "className": "nav navbar-nav navbar-right"};
var G__16864 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__16862,G__16863,G__16859,G__16860,G__16837,G__16838,G__16839,G__16834,G__16835,G__16831,G__16832){
return (function (p1__16827_SHARP_,p2__16828_SHARP_){
return prais2.utils.key_with(p1__16827_SHARP_,(function (){var G__16865 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_key,p2__16828_SHARP_);
var G__16866 = (p2__16828_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__16828_SHARP_.cljs$core$IFn$_invoke$arity$1(prais2.chrome.nav_items) : p2__16828_SHARP_.call(null,prais2.chrome.nav_items));
var G__16867 = prais2.chrome.nav_click_handler(p2__16828_SHARP_);
return (prais2.chrome.bs_nav_link.cljs$core$IFn$_invoke$arity$3 ? prais2.chrome.bs_nav_link.cljs$core$IFn$_invoke$arity$3(G__16865,G__16866,G__16867) : prais2.chrome.bs_nav_link.call(null,G__16865,G__16866,G__16867));
})());
});})(G__16862,G__16863,G__16859,G__16860,G__16837,G__16838,G__16839,G__16834,G__16835,G__16831,G__16832))
,cljs.core.keys(prais2.chrome.nav_items)));
return React.createElement(G__16862,G__16863,G__16864);
})();
return React.createElement(G__16859,G__16860,G__16861);
})();
return React.createElement(G__16837,G__16838,G__16839,G__16840);
})();
return React.createElement(G__16834,G__16835,G__16836);
})();
return React.createElement(G__16831,G__16832,G__16833);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"bs-fixed-navbar");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16868__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16868 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16869__i = 0, G__16869__a = new Array(arguments.length -  0);
while (G__16869__i < G__16869__a.length) {G__16869__a[G__16869__i] = arguments[G__16869__i + 0]; ++G__16869__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16869__a,0);
} 
return G__16868__delegate.call(this,args__8012__auto__);};
G__16868.cljs$lang$maxFixedArity = 0;
G__16868.cljs$lang$applyTo = (function (arglist__16870){
var args__8012__auto__ = cljs.core.seq(arglist__16870);
return G__16868__delegate(args__8012__auto__);
});
G__16868.cljs$core$IFn$_invoke$arity$variadic = G__16868__delegate;
return G__16868;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.chrome.header = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var attrs16871 = (function (){var G__16886 = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(rum.core.react(prais2.core.app));
return (prais2.chrome.bs_fixed_navbar.cljs$core$IFn$_invoke$arity$1 ? prais2.chrome.bs_fixed_navbar.cljs$core$IFn$_invoke$arity$1(G__16886) : prais2.chrome.bs_fixed_navbar.call(null,G__16886));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs16871))?sablono.interpreter.attributes(attrs16871):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16871))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16887 = "div";
var G__16888 = {"className": "main-title-box"};
var G__16889 = (function (){var attrs16872 = prais2.core.href.cljs$core$IFn$_invoke$arity$variadic("/",cljs.core.cst$kw$on_DASH_touch_DASH_start,prais2.chrome.nav_click_handler(cljs.core.cst$kw$home),cljs.core.array_seq([cljs.core.cst$kw$on_DASH_click,prais2.chrome.nav_click_handler(cljs.core.cst$kw$home)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16872))?sablono.interpreter.attributes(attrs16872):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16872))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16891 = "img";
var G__16892 = {"src": "/assets/logo3.png", "style": {"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}, "className": "img-responsive pull-left"};
return React.createElement(G__16891,G__16892);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16872),(function (){var G__16893 = "img";
var G__16894 = {"src": "/assets/logo3.png", "style": {"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}, "className": "img-responsive pull-left"};
return React.createElement(G__16893,G__16894);
})()], null))));
})();
var G__16890 = (function (){var G__16895 = "div";
var G__16896 = {"style": {"marginLeft": "0px", "paddingLeft": "0px", "paddingRight": "40px"}, "className": "pull-left main-title"};
var G__16897 = "UNDERSTANDING CHILDREN'S HEART SURGERY OUTCOMES";
return React.createElement(G__16895,G__16896,G__16897);
})();
return React.createElement(G__16887,G__16888,G__16889,G__16890);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16871),(function (){var G__16898 = "div";
var G__16899 = {"className": "main-title-box"};
var G__16900 = (function (){var attrs16879 = prais2.core.href.cljs$core$IFn$_invoke$arity$variadic("/",cljs.core.cst$kw$on_DASH_touch_DASH_start,prais2.chrome.nav_click_handler(cljs.core.cst$kw$home),cljs.core.array_seq([cljs.core.cst$kw$on_DASH_click,prais2.chrome.nav_click_handler(cljs.core.cst$kw$home)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16879))?sablono.interpreter.attributes(attrs16879):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16879))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16902 = "img";
var G__16903 = {"src": "/assets/logo3.png", "style": {"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}, "className": "img-responsive pull-left"};
return React.createElement(G__16902,G__16903);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16879),(function (){var G__16904 = "img";
var G__16905 = {"src": "/assets/logo3.png", "style": {"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}, "className": "img-responsive pull-left"};
return React.createElement(G__16904,G__16905);
})()], null))));
})();
var G__16901 = (function (){var G__16906 = "div";
var G__16907 = {"style": {"marginLeft": "0px", "paddingLeft": "0px", "paddingRight": "40px"}, "className": "pull-left main-title"};
var G__16908 = "UNDERSTANDING CHILDREN'S HEART SURGERY OUTCOMES";
return React.createElement(G__16906,G__16907,G__16908);
})();
return React.createElement(G__16898,G__16899,G__16900,G__16901);
})()], null))));
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"header");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__16909__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__16909 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__16910__i = 0, G__16910__a = new Array(arguments.length -  0);
while (G__16910__i < G__16910__a.length) {G__16910__a[G__16910__i] = arguments[G__16910__i + 0]; ++G__16910__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__16910__a,0);
} 
return G__16909__delegate.call(this,args__8012__auto__);};
G__16909.cljs$lang$maxFixedArity = 0;
G__16909.cljs$lang$applyTo = (function (arglist__16911){
var args__8012__auto__ = cljs.core.seq(arglist__16911);
return G__16909__delegate(args__8012__auto__);
});
G__16909.cljs$core$IFn$_invoke$arity$variadic = G__16909__delegate;
return G__16909;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
/**
 * 
 */
prais2.chrome.footer = (function (){var render_mixin__8009__auto__ = rum.core.render__GT_mixin((function (){
var G__16930 = "div";
var G__16931 = {"className": "container-fluid partners"};
var G__16932 = (function (){var G__16936 = "div";
var G__16937 = {"className": "row visible-xs-block"};
var G__16938 = (function (){var G__16939 = "div";
var G__16940 = {"className": "col-xs-offset-1"};
var G__16941 = (function (){var G__16959 = "h4";
var G__16960 = null;
var G__16961 = (function (){var attrs16912 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/4/0");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16912))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link"], null)], null),attrs16912], 0))):{"className": "link"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16912))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16964 = "span";
var G__16965 = null;
var G__16966 = "Project partners ";
var G__16967 = (function (){var G__16968 = "i";
var G__16969 = {"className": "fa fa-chevron-right"};
return React.createElement(G__16968,G__16969);
})();
return React.createElement(G__16964,G__16965,G__16966,G__16967);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16912),(function (){var G__16972 = "span";
var G__16973 = null;
var G__16974 = "Project partners ";
var G__16975 = (function (){var G__16976 = "i";
var G__16977 = {"className": "fa fa-chevron-right"};
return React.createElement(G__16976,G__16977);
})();
return React.createElement(G__16972,G__16973,G__16974,G__16975);
})()], null))));
})();
return React.createElement(G__16959,G__16960,G__16961);
})();
var G__16942 = (function (){var G__16978 = "ul";
var G__16979 = {"style": {"listStyleType": "none"}};
var G__16980 = React.createElement("li",null,"University College, London");
var G__16981 = React.createElement("li",null,"University of Cambridge");
var G__16982 = React.createElement("li",null,"King's College, London");
var G__16983 = React.createElement("li",null,"Sense about Science");
var G__16984 = React.createElement("li",null,"Children's Heart Federation");
return React.createElement(G__16978,G__16979,G__16980,G__16981,G__16982,G__16983,G__16984);
})();
return React.createElement(G__16939,G__16940,G__16941,G__16942);
})();
return React.createElement(G__16936,G__16937,G__16938);
})();
var G__16933 = (function (){var G__16985 = "div";
var G__16986 = {"className": "row hidden-xs"};
var G__16987 = (function (){var G__16989 = "div";
var G__16990 = {"className": "col-sm-10 collab-logo"};
var G__16991 = (function (){var attrs16919 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/4/0");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16919))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link"], null)], null),attrs16919], 0))):{"className": "link"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16919))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About us"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16919),"About us"], null))));
})();
var G__16992 = "| ";
var G__16993 = (function (){var attrs16920 = prais2.core.href.cljs$core$IFn$_invoke$arity$1("faq/4/1");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"a",((cljs.core.map_QMARK_(attrs16920))?sablono.interpreter.attributes(attrs16920):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16920))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Contact us"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16920),"Contact us"], null))));
})();
return React.createElement(G__16989,G__16990,G__16991,G__16992,G__16993);
})();
var G__16988 = (function (){var G__16994 = "div";
var G__16995 = {"className": "col-sm-10 collab-logo col-md-offset-1 col-md-11"};
var G__16996 = (function (){var attrs16921 = prais2.core.isrc("assets/ucl-logo.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"190px"], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs16921))?sablono.interpreter.attributes(attrs16921):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16921))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16921)], null))));
})();
var G__16997 = (function (){var attrs16922 = prais2.core.isrc("assets/camlogo.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"220px"], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs16922))?sablono.interpreter.attributes(attrs16922):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16922))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16922)], null))));
})();
var G__16998 = (function (){var attrs16923 = prais2.core.isrc("assets/KCLlogo.gif",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"130px"], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs16923))?sablono.interpreter.attributes(attrs16923):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16923))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16923)], null))));
})();
var G__16999 = (function (){var attrs16924 = prais2.core.isrc("assets/sas-logo.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"80px"], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs16924))?sablono.interpreter.attributes(attrs16924):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16924))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16924)], null))));
})();
var G__17000 = (function (){var attrs16925 = prais2.core.isrc("assets/chf-logo.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"80px"], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"img",((cljs.core.map_QMARK_(attrs16925))?sablono.interpreter.attributes(attrs16925):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16925))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16925)], null))));
})();
return React.createElement(G__16994,G__16995,G__16996,G__16997,G__16998,G__16999,G__17000);
})();
return React.createElement(G__16985,G__16986,G__16987,G__16988);
})();
var G__16934 = (function (){var G__17001 = "div";
var G__17002 = {"className": "row footer"};
var G__17003 = (function (){var G__17004 = "div";
var G__17005 = {"className": "acks col-md-offset-1"};
var G__17006 = React.createElement("h3",null,"Funding acknowledgement");
var G__17007 = React.createElement("p",null,"This project was funded by the National Institute for Health Research Health Services and Delivery Research\n      Programme\n(project number 14/19/13)");
var G__17008 = React.createElement("h3",null,"Department of Health disclaimer");
var G__17009 = React.createElement("p",null,"The views and opinions expressed therein are those of the authors and do not necessarily reflect those of the\n      Health Services and Delivery Research Programme, NIHR, NHS or the Department of Health.");
return React.createElement(G__17004,G__17005,G__17006,G__17007,G__17008,G__17009);
})();
return React.createElement(G__17001,G__17002,G__17003);
})();
var G__16935 = (function (){var G__17010 = "div";
var G__17011 = {"className": "row footer legal"};
var G__17012 = (function (){var G__17013 = "div";
var G__17014 = {"className": "col-md-offset-1"};
var G__17015 = (function (){var G__17017 = "p";
var G__17018 = {"className": "copyright"};
var G__17019 = "\u00A9 PRAIS2 website project team 2016, 2019";
return React.createElement(G__17017,G__17018,G__17019);
})();
var G__17016 = (function (){var G__17020 = "p";
var G__17021 = {"className": "cookies"};
var G__17022 = "This site uses cookies to help understand how users interact with the site.\n     See ";
var G__17023 = (function (){var G__17024 = "a";
var G__17025 = {"href": "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"};
var G__17026 = "Google Analytics";
return React.createElement(G__17024,G__17025,G__17026);
})();
return React.createElement(G__17020,G__17021,G__17022,G__17023);
})();
return React.createElement(G__17013,G__17014,G__17015,G__17016);
})();
return React.createElement(G__17010,G__17011,G__17012);
})();
return React.createElement(G__16930,G__16931,G__16932,G__16933,G__16934,G__16935);
}));
var class__8010__auto__ = rum.core.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__8009__auto__], null),null),"footer");
var ctor__8011__auto__ = ((function (render_mixin__8009__auto__,class__8010__auto__){
return (function() { 
var G__17027__delegate = function (args__8012__auto__){
var state__8013__auto__ = rum.core.args__GT_state(args__8012__auto__);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(class__8010__auto__,state__8013__auto__,cljs.core.array_seq([null], 0));
};
var G__17027 = function (var_args){
var args__8012__auto__ = null;
if (arguments.length > 0) {
var G__17028__i = 0, G__17028__a = new Array(arguments.length -  0);
while (G__17028__i < G__17028__a.length) {G__17028__a[G__17028__i] = arguments[G__17028__i + 0]; ++G__17028__i;}
  args__8012__auto__ = new cljs.core.IndexedSeq(G__17028__a,0);
} 
return G__17027__delegate.call(this,args__8012__auto__);};
G__17027.cljs$lang$maxFixedArity = 0;
G__17027.cljs$lang$applyTo = (function (arglist__17029){
var args__8012__auto__ = cljs.core.seq(arglist__17029);
return G__17027__delegate(args__8012__auto__);
});
G__17027.cljs$core$IFn$_invoke$arity$variadic = G__17027__delegate;
return G__17027;
})()
;})(render_mixin__8009__auto__,class__8010__auto__))
;
return cljs.core.with_meta(ctor__8011__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class__8010__auto__], null));
})();
