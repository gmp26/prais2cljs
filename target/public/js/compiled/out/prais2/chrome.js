// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.chrome');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('rum.core');
goog.require('cljsjs.jquery');
goog.require('cljsjs.bootstrap');
goog.require('prais2.utils');
goog.require('prais2.core');
goog.require('prais2.components.data_selector');
/**
 * return CSS rgba string
 */
prais2.chrome.rgba_string = (function prais2$chrome$rgba_string(p__35294){
var vec__35298 = p__35294;
var r = cljs.core.nth.call(null,vec__35298,(0),null);
var g = cljs.core.nth.call(null,vec__35298,(1),null);
var b = cljs.core.nth.call(null,vec__35298,(2),null);
var a = cljs.core.nth.call(null,vec__35298,(3),null);
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
prais2.chrome.Nav_item.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25285__auto__,k__25286__auto__){
var self__ = this;
var this__25285__auto____$1 = this;
return cljs.core._lookup.call(null,this__25285__auto____$1,k__25286__auto__,null);
});

prais2.chrome.Nav_item.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25287__auto__,k35302,else__25288__auto__){
var self__ = this;
var this__25287__auto____$1 = this;
var G__35304 = (((k35302 instanceof cljs.core.Keyword))?k35302.fqn:null);
switch (G__35304) {
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
return cljs.core.get.call(null,self__.__extmap,k35302,else__25288__auto__);

}
});

prais2.chrome.Nav_item.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25299__auto__,writer__25300__auto__,opts__25301__auto__){
var self__ = this;
var this__25299__auto____$1 = this;
var pr_pair__25302__auto__ = ((function (this__25299__auto____$1){
return (function (keyval__25303__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25300__auto__,cljs.core.pr_writer,""," ","",opts__25301__auto__,keyval__25303__auto__);
});})(this__25299__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25300__auto__,pr_pair__25302__auto__,"#prais2.chrome.Nav-item{",", ","}",opts__25301__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"long-title","long-title",-266769485),self__.long_title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"short-title","short-title",-1405732809),self__.short_title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"icon","icon",1679606541),self__.icon],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"token","token",-1211463215),self__.token],null))], null),self__.__extmap));
});

prais2.chrome.Nav_item.prototype.cljs$core$IIterable$ = true;

prais2.chrome.Nav_item.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35301){
var self__ = this;
var G__35301__$1 = this;
return (new cljs.core.RecordIter((0),G__35301__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"long-title","long-title",-266769485),new cljs.core.Keyword(null,"short-title","short-title",-1405732809),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"token","token",-1211463215)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

prais2.chrome.Nav_item.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25283__auto__){
var self__ = this;
var this__25283__auto____$1 = this;
return self__.__meta;
});

prais2.chrome.Nav_item.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25279__auto__){
var self__ = this;
var this__25279__auto____$1 = this;
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,self__.__extmap,self__.__hash));
});

prais2.chrome.Nav_item.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25289__auto__){
var self__ = this;
var this__25289__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

prais2.chrome.Nav_item.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25280__auto__){
var self__ = this;
var this__25280__auto____$1 = this;
var h__25098__auto__ = self__.__hash;
if(!((h__25098__auto__ == null))){
return h__25098__auto__;
} else {
var h__25098__auto____$1 = cljs.core.hash_imap.call(null,this__25280__auto____$1);
self__.__hash = h__25098__auto____$1;

return h__25098__auto____$1;
}
});

prais2.chrome.Nav_item.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25281__auto__,other__25282__auto__){
var self__ = this;
var this__25281__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24651__auto__ = other__25282__auto__;
if(cljs.core.truth_(and__24651__auto__)){
var and__24651__auto____$1 = (this__25281__auto____$1.constructor === other__25282__auto__.constructor);
if(and__24651__auto____$1){
return cljs.core.equiv_map.call(null,this__25281__auto____$1,other__25282__auto__);
} else {
return and__24651__auto____$1;
}
} else {
return and__24651__auto__;
}
})())){
return true;
} else {
return false;
}
});

prais2.chrome.Nav_item.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25294__auto__,k__25295__auto__){
var self__ = this;
var this__25294__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),null,new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"long-title","long-title",-266769485),null,new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"short-title","short-title",-1405732809),null], null), null),k__25295__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25294__auto____$1),self__.__meta),k__25295__auto__);
} else {
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25295__auto__)),null));
}
});

prais2.chrome.Nav_item.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25292__auto__,k__25293__auto__,G__35301){
var self__ = this;
var this__25292__auto____$1 = this;
var pred__35305 = cljs.core.keyword_identical_QMARK_;
var expr__35306 = k__25293__auto__;
if(cljs.core.truth_(pred__35305.call(null,new cljs.core.Keyword(null,"long-title","long-title",-266769485),expr__35306))){
return (new prais2.chrome.Nav_item(G__35301,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35305.call(null,new cljs.core.Keyword(null,"short-title","short-title",-1405732809),expr__35306))){
return (new prais2.chrome.Nav_item(self__.long_title,G__35301,self__.class$,self__.icon,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35305.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),expr__35306))){
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,G__35301,self__.icon,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35305.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541),expr__35306))){
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,G__35301,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35305.call(null,new cljs.core.Keyword(null,"token","token",-1211463215),expr__35306))){
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,G__35301,self__.__meta,self__.__extmap,null));
} else {
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25293__auto__,G__35301),null));
}
}
}
}
}
});

prais2.chrome.Nav_item.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25297__auto__){
var self__ = this;
var this__25297__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"long-title","long-title",-266769485),self__.long_title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"short-title","short-title",-1405732809),self__.short_title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"icon","icon",1679606541),self__.icon],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"token","token",-1211463215),self__.token],null))], null),self__.__extmap));
});

prais2.chrome.Nav_item.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25284__auto__,G__35301){
var self__ = this;
var this__25284__auto____$1 = this;
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,G__35301,self__.__extmap,self__.__hash));
});

prais2.chrome.Nav_item.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25290__auto__,entry__25291__auto__){
var self__ = this;
var this__25290__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25291__auto__)){
return cljs.core._assoc.call(null,this__25290__auto____$1,cljs.core._nth.call(null,entry__25291__auto__,(0)),cljs.core._nth.call(null,entry__25291__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25290__auto____$1,entry__25291__auto__);
}
});

prais2.chrome.Nav_item.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"long-title","long-title",1373762042,null),new cljs.core.Symbol(null,"short-title","short-title",234798718,null),new cljs.core.Symbol(null,"class","class",-390430469,null),new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Symbol(null,"token","token",429068312,null)], null);
});

prais2.chrome.Nav_item.cljs$lang$type = true;

prais2.chrome.Nav_item.cljs$lang$ctorPrSeq = (function (this__25319__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"prais2.chrome/Nav-item");
});

prais2.chrome.Nav_item.cljs$lang$ctorPrWriter = (function (this__25319__auto__,writer__25320__auto__){
return cljs.core._write.call(null,writer__25320__auto__,"prais2.chrome/Nav-item");
});

prais2.chrome.__GT_Nav_item = (function prais2$chrome$__GT_Nav_item(long_title,short_title,class$,icon,token){
return (new prais2.chrome.Nav_item(long_title,short_title,class$,icon,token,null,null,null));
});

prais2.chrome.map__GT_Nav_item = (function prais2$chrome$map__GT_Nav_item(G__35303){
return (new prais2.chrome.Nav_item(new cljs.core.Keyword(null,"long-title","long-title",-266769485).cljs$core$IFn$_invoke$arity$1(G__35303),new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(G__35303),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(G__35303),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(G__35303),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(G__35303),null,cljs.core.dissoc.call(null,G__35303,new cljs.core.Keyword(null,"long-title","long-title",-266769485),new cljs.core.Keyword(null,"short-title","short-title",-1405732809),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"token","token",-1211463215)),null));
});

prais2.chrome.nbsp = goog.string.unescapeEntities("&nbsp;");
prais2.chrome.what_why = [cljs.core.str("What,"),cljs.core.str(prais2.chrome.nbsp),cljs.core.str("why,"),cljs.core.str(prais2.chrome.nbsp),cljs.core.str("how?")].join('');
prais2.chrome.everything_else = [cljs.core.str("Everything"),cljs.core.str(prais2.chrome.nbsp),cljs.core.str("else")].join('');
prais2.chrome.nav_items = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"home","home",-74557309),(new prais2.chrome.Nav_item("Home","Home","nav-item home","home","home",null,null,null)),new cljs.core.Keyword(null,"intro","intro",-886090599),(new prais2.chrome.Nav_item(prais2.chrome.what_why,prais2.chrome.what_why,"nav-item intro","question","intro",null,null,null)),new cljs.core.Keyword(null,"data","data",-232669377),(new prais2.chrome.Nav_item("Data","Explore the data","nav-item data","table","data/map",null,null,null)),new cljs.core.Keyword(null,"faqs","faqs",636275568),(new prais2.chrome.Nav_item(prais2.chrome.everything_else,prais2.chrome.everything_else,"nav-item faqs","info","faqs",null,null,null))], null);
/**
 * 
 */
prais2.chrome.bs_nav_link = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (active_QMARK_,nav_item,click_handler){
return React.createElement("li",null,React.createElement("a",{"onClick": click_handler, "data-toggle": "collapse", "data-target": ".navbar-collapse.in", "href": prais2.core.token__GT_url.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(nav_item)), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navbar-btn",[cljs.core.str((cljs.core.truth_(active_QMARK_)?" active ":" ")),cljs.core.str(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(nav_item))].join('')], null))},React.createElement("i",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa",[cljs.core.str("fa-"),cljs.core.str(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(nav_item))].join('')], null))}),sablono.interpreter.interpret.call(null,[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(nav_item))].join(''))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"bs-nav-link");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35309__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35309 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35310__i = 0, G__35310__a = new Array(arguments.length -  0);
while (G__35310__i < G__35310__a.length) {G__35310__a[G__35310__i] = arguments[G__35310__i + 0]; ++G__35310__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35310__a,0);
} 
return G__35309__delegate.call(this,args__27116__auto__);};
G__35309.cljs$lang$maxFixedArity = 0;
G__35309.cljs$lang$applyTo = (function (arglist__35311){
var args__27116__auto__ = cljs.core.seq(arglist__35311);
return G__35309__delegate(args__27116__auto__);
});
G__35309.cljs$core$IFn$_invoke$arity$variadic = G__35309__delegate;
return G__35309;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
prais2.chrome.nav_click_handler = (function prais2$chrome$nav_click_handler(nav_item_key){
return (function (e){
return prais2.core.click__GT_event_bus.call(null,e,nav_item_key,((cljs.core._EQ_.call(null,nav_item_key,new cljs.core.Keyword(null,"data","data",-232669377)))?new cljs.core.Keyword(null,"map","map",1371690461):null),((cljs.core._EQ_.call(null,nav_item_key,new cljs.core.Keyword(null,"data","data",-232669377)))?"data/map":[cljs.core.str(cljs.core.name.call(null,nav_item_key))].join('')));
});
});
/**
 * 
 */
prais2.chrome.bs_fixed_navbar = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (active_key){
return React.createElement("nav",{"className": "navbar navbar-simple navbar-fixed-top"},React.createElement("div",{"className": "navbar-inner"},React.createElement("div",{"className": "container"},React.createElement("div",{"key": (1), "className": "navbar-header"},React.createElement("button",{"key": (1), "type": "button", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar", "className": "navbar-toggle collapsed"},React.createElement("span",{"key": (1), "className": "sr-only"},"Toggle navigation"),React.createElement("span",{"key": (2), "className": "icon-bar"}),React.createElement("span",{"key": (3), "className": "icon-bar"}),React.createElement("span",{"key": (4), "className": "icon-bar"}))),React.createElement("div",{"id": "navbar", "key": (2), "className": "navbar-collapse collapse"},React.createElement("ul",{"key": (1), "className": "nav navbar-nav navbar-right"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,(function (p1__35312_SHARP_,p2__35313_SHARP_){
return prais2.utils.key_with.call(null,p1__35312_SHARP_,prais2.chrome.bs_nav_link.call(null,cljs.core._EQ_.call(null,active_key,p2__35313_SHARP_),p2__35313_SHARP_.call(null,prais2.chrome.nav_items),prais2.chrome.nav_click_handler.call(null,p2__35313_SHARP_)));
}),cljs.core.keys.call(null,prais2.chrome.nav_items))))))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"bs-fixed-navbar");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35316__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35316 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35317__i = 0, G__35317__a = new Array(arguments.length -  0);
while (G__35317__i < G__35317__a.length) {G__35317__a[G__35317__i] = arguments[G__35317__i + 0]; ++G__35317__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35317__a,0);
} 
return G__35316__delegate.call(this,args__27116__auto__);};
G__35316.cljs$lang$maxFixedArity = 0;
G__35316.cljs$lang$applyTo = (function (arglist__35318){
var args__27116__auto__ = cljs.core.seq(arglist__35318);
return G__35316__delegate(args__27116__auto__);
});
G__35316.cljs$core$IFn$_invoke$arity$variadic = G__35316__delegate;
return G__35316;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.chrome.header = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var attrs35319 = prais2.chrome.bs_fixed_navbar.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35319))?sablono.interpreter.attributes.call(null,attrs35319):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35319))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",{"className": "main-title-box"},(function (){var attrs35320 = prais2.core.href.call(null,"/",new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),prais2.chrome.nav_click_handler.call(null,new cljs.core.Keyword(null,"home","home",-74557309)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),prais2.chrome.nav_click_handler.call(null,new cljs.core.Keyword(null,"home","home",-74557309)));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35320))?sablono.interpreter.attributes.call(null,attrs35320):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35320))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("img",{"src": "/assets/logo3.png", "style": {"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}, "className": "img-responsive pull-left"})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35320),React.createElement("img",{"src": "/assets/logo3.png", "style": {"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}, "className": "img-responsive pull-left"})], null))));
})(),React.createElement("div",{"style": {"marginLeft": "0px", "paddingLeft": "0px", "paddingRight": "40px"}, "className": "pull-left main-title"},"UNDERSTANDING CHILDREN'S HEART SURGERY OUTCOMES"))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35319),React.createElement("div",{"className": "main-title-box"},(function (){var attrs35327 = prais2.core.href.call(null,"/",new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),prais2.chrome.nav_click_handler.call(null,new cljs.core.Keyword(null,"home","home",-74557309)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),prais2.chrome.nav_click_handler.call(null,new cljs.core.Keyword(null,"home","home",-74557309)));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35327))?sablono.interpreter.attributes.call(null,attrs35327):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35327))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("img",{"src": "/assets/logo3.png", "style": {"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}, "className": "img-responsive pull-left"})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35327),React.createElement("img",{"src": "/assets/logo3.png", "style": {"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}, "className": "img-responsive pull-left"})], null))));
})(),React.createElement("div",{"style": {"marginLeft": "0px", "paddingLeft": "0px", "paddingRight": "40px"}, "className": "pull-left main-title"},"UNDERSTANDING CHILDREN'S HEART SURGERY OUTCOMES"))], null))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"header");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35334__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35334 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35335__i = 0, G__35335__a = new Array(arguments.length -  0);
while (G__35335__i < G__35335__a.length) {G__35335__a[G__35335__i] = arguments[G__35335__i + 0]; ++G__35335__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35335__a,0);
} 
return G__35334__delegate.call(this,args__27116__auto__);};
G__35334.cljs$lang$maxFixedArity = 0;
G__35334.cljs$lang$applyTo = (function (arglist__35336){
var args__27116__auto__ = cljs.core.seq(arglist__35336);
return G__35334__delegate(args__27116__auto__);
});
G__35334.cljs$core$IFn$_invoke$arity$variadic = G__35334__delegate;
return G__35334;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();
/**
 * 
 */
prais2.chrome.footer = (function (){var render_mixin__27113__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",{"className": "container-fluid partners"},React.createElement("div",{"className": "row visible-xs-block"},React.createElement("div",{"className": "col-xs-offset-1"},React.createElement("h4",null,(function (){var attrs35337 = prais2.core.href.call(null,"faq/4/0");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35337))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link"], null)], null),attrs35337)):{"className": "link"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35337))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("span",null,"Project partners ",React.createElement("i",{"className": "fa fa-chevron-right"}))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35337),React.createElement("span",null,"Project partners ",React.createElement("i",{"className": "fa fa-chevron-right"}))], null))));
})()),React.createElement("ul",{"style": {"listStyleType": "none"}},React.createElement("li",null,"University College, London"),React.createElement("li",null,"University of Cambridge"),React.createElement("li",null,"King's College, London"),React.createElement("li",null,"Sense about Science"),React.createElement("li",null,"Children's Heart Federation")))),React.createElement("div",{"className": "row hidden-xs"},React.createElement("div",{"className": "col-sm-10 collab-logo"},(function (){var attrs35344 = prais2.core.href.call(null,"faq/4/0");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35344))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link"], null)], null),attrs35344)):{"className": "link"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35344))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About us"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35344),"About us"], null))));
})(),"| ",(function (){var attrs35345 = prais2.core.href.call(null,"faq/4/1");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs35345))?sablono.interpreter.attributes.call(null,attrs35345):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35345))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Contact us"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35345),"Contact us"], null))));
})()),React.createElement("div",{"className": "col-sm-10 collab-logo col-md-offset-1 col-md-11"},(function (){var attrs35346 = prais2.core.isrc.call(null,"assets/ucl-logo.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"190px"], null));
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs35346))?sablono.interpreter.attributes.call(null,attrs35346):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35346))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35346)], null))));
})(),(function (){var attrs35347 = prais2.core.isrc.call(null,"assets/camlogo.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"220px"], null));
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs35347))?sablono.interpreter.attributes.call(null,attrs35347):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35347))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35347)], null))));
})(),(function (){var attrs35348 = prais2.core.isrc.call(null,"assets/KCLlogo.gif",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"130px"], null));
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs35348))?sablono.interpreter.attributes.call(null,attrs35348):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35348))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35348)], null))));
})(),(function (){var attrs35349 = prais2.core.isrc.call(null,"assets/sas-logo.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80px"], null));
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs35349))?sablono.interpreter.attributes.call(null,attrs35349):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35349))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35349)], null))));
})(),(function (){var attrs35350 = prais2.core.isrc.call(null,"assets/chf-logo.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80px"], null));
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs35350))?sablono.interpreter.attributes.call(null,attrs35350):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs35350))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35350)], null))));
})())),React.createElement("div",{"className": "row footer"},React.createElement("div",{"className": "acks col-md-offset-1"},React.createElement("h3",null,"Funding acknowledgement"),React.createElement("p",null,"This project was funded by the National Institute for Health Research Health Services and Delivery Research\n      Programme\n(project number 14/19/13)"),React.createElement("h3",null,"Department of Health disclaimer"),React.createElement("p",null,"The views and opinions expressed therein are those of the authors and do not necessarily reflect those of the\n      Health Services and Delivery Research Programme, NIHR, NHS or the Department of Health."))),React.createElement("div",{"className": "row footer legal"},React.createElement("div",{"className": "col-md-offset-1"},React.createElement("p",{"className": "copyright"},"\u00A9 PRAIS2 website project team 2016, 2019"),React.createElement("p",{"className": "cookies"},"This site uses cookies to help understand how users interact with the site.\n     See ",React.createElement("a",{"href": "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"},"Google Analytics")))));
}));
var class__27114__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__27113__auto__], null),null),"footer");
var ctor__27115__auto__ = ((function (render_mixin__27113__auto__,class__27114__auto__){
return (function() { 
var G__35355__delegate = function (args__27116__auto__){
var state__27117__auto__ = rum.core.args__GT_state.call(null,args__27116__auto__);
return rum.core.element.call(null,class__27114__auto__,state__27117__auto__,null);
};
var G__35355 = function (var_args){
var args__27116__auto__ = null;
if (arguments.length > 0) {
var G__35356__i = 0, G__35356__a = new Array(arguments.length -  0);
while (G__35356__i < G__35356__a.length) {G__35356__a[G__35356__i] = arguments[G__35356__i + 0]; ++G__35356__i;}
  args__27116__auto__ = new cljs.core.IndexedSeq(G__35356__a,0);
} 
return G__35355__delegate.call(this,args__27116__auto__);};
G__35355.cljs$lang$maxFixedArity = 0;
G__35355.cljs$lang$applyTo = (function (arglist__35357){
var args__27116__auto__ = cljs.core.seq(arglist__35357);
return G__35355__delegate(args__27116__auto__);
});
G__35355.cljs$core$IFn$_invoke$arity$variadic = G__35355__delegate;
return G__35355;
})()
;})(render_mixin__27113__auto__,class__27114__auto__))
;
return cljs.core.with_meta.call(null,ctor__27115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__27114__auto__], null));
})();

//# sourceMappingURL=chrome.js.map?rel=1629049577945