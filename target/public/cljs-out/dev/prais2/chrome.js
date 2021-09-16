// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.chrome');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('goog.string');
goog.require('cljsjs.jquery');
goog.require('cljsjs.bootstrap');
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

prais2.chrome.Nav_item.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k21807,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__21811 = k21807;
var G__21811__$1 = (((G__21811 instanceof cljs.core.Keyword))?G__21811.fqn:null);
switch (G__21811__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k21807,else__4193__auto__);

}
});

prais2.chrome.Nav_item.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,pr_pair__4207__auto__,"#prais2.chrome.Nav-item{",", ","}",opts__4206__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"long-title","long-title",-266769485),self__.long_title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"short-title","short-title",-1405732809),self__.short_title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"icon","icon",1679606541),self__.icon],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"token","token",-1211463215),self__.token],null))], null),self__.__extmap));
});

prais2.chrome.Nav_item.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21806){
var self__ = this;
var G__21806__$1 = this;
return (new cljs.core.RecordIter((0),G__21806__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"long-title","long-title",-266769485),new cljs.core.Keyword(null,"short-title","short-title",-1405732809),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"token","token",-1211463215)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (5 + cljs.core.count.call(null,self__.__extmap));
});

prais2.chrome.Nav_item.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (-82826409 ^ cljs.core.hash_unordered_coll.call(null,coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
.call(null,this__4186__auto____$1);
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

prais2.chrome.Nav_item.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21808,other21809){
var self__ = this;
var this21808__$1 = this;
return ((!((other21809 == null))) && ((this21808__$1.constructor === other21809.constructor)) && (cljs.core._EQ_.call(null,this21808__$1.long_title,other21809.long_title)) && (cljs.core._EQ_.call(null,this21808__$1.short_title,other21809.short_title)) && (cljs.core._EQ_.call(null,this21808__$1.class,other21809.class)) && (cljs.core._EQ_.call(null,this21808__$1.icon,other21809.icon)) && (cljs.core._EQ_.call(null,this21808__$1.token,other21809.token)) && (cljs.core._EQ_.call(null,this21808__$1.__extmap,other21809.__extmap)));
});

prais2.chrome.Nav_item.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),null,new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"long-title","long-title",-266769485),null,new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"short-title","short-title",-1405732809),null], null), null),k__4200__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4200__auto__)),null));
}
});

prais2.chrome.Nav_item.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__21806){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__21812 = cljs.core.keyword_identical_QMARK_;
var expr__21813 = k__4198__auto__;
if(cljs.core.truth_(pred__21812.call(null,new cljs.core.Keyword(null,"long-title","long-title",-266769485),expr__21813))){
return (new prais2.chrome.Nav_item(G__21806,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21812.call(null,new cljs.core.Keyword(null,"short-title","short-title",-1405732809),expr__21813))){
return (new prais2.chrome.Nav_item(self__.long_title,G__21806,self__.class$,self__.icon,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21812.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),expr__21813))){
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,G__21806,self__.icon,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21812.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541),expr__21813))){
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,G__21806,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21812.call(null,new cljs.core.Keyword(null,"token","token",-1211463215),expr__21813))){
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,G__21806,self__.__meta,self__.__extmap,null));
} else {
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4198__auto__,G__21806),null));
}
}
}
}
}
});

prais2.chrome.Nav_item.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"long-title","long-title",-266769485),self__.long_title,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"short-title","short-title",-1405732809),self__.short_title,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"icon","icon",1679606541),self__.icon,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"token","token",-1211463215),self__.token,null))], null),self__.__extmap));
});

prais2.chrome.Nav_item.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__21806){
var self__ = this;
var this__4189__auto____$1 = this;
return (new prais2.chrome.Nav_item(self__.long_title,self__.short_title,self__.class$,self__.icon,self__.token,G__21806,self__.__extmap,self__.__hash));
});

prais2.chrome.Nav_item.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4196__auto__,(0)),cljs.core._nth.call(null,entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

prais2.chrome.Nav_item.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"long-title","long-title",1373762042,null),new cljs.core.Symbol(null,"short-title","short-title",234798718,null),new cljs.core.Symbol(null,"class","class",-390430469,null),new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Symbol(null,"token","token",429068312,null)], null);
});

prais2.chrome.Nav_item.cljs$lang$type = true;

prais2.chrome.Nav_item.cljs$lang$ctorPrSeq = (function (this__4227__auto__){
return (new cljs.core.List(null,"prais2.chrome/Nav-item",null,(1),null));
});

prais2.chrome.Nav_item.cljs$lang$ctorPrWriter = (function (this__4227__auto__,writer__4228__auto__){
return cljs.core._write.call(null,writer__4228__auto__,"prais2.chrome/Nav-item");
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
prais2.chrome.map__GT_Nav_item = (function prais2$chrome$map__GT_Nav_item(G__21810){
var extmap__4223__auto__ = (function (){var G__21815 = cljs.core.dissoc.call(null,G__21810,new cljs.core.Keyword(null,"long-title","long-title",-266769485),new cljs.core.Keyword(null,"short-title","short-title",-1405732809),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"token","token",-1211463215));
if(cljs.core.record_QMARK_.call(null,G__21810)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21815);
} else {
return G__21815;
}
})();
return (new prais2.chrome.Nav_item(new cljs.core.Keyword(null,"long-title","long-title",-266769485).cljs$core$IFn$_invoke$arity$1(G__21810),new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(G__21810),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(G__21810),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(G__21810),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(G__21810),null,cljs.core.not_empty.call(null,extmap__4223__auto__),null));
});

prais2.chrome.nbsp = goog.string.unescapeEntities("&nbsp;");
prais2.chrome.what_why = ["What,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.chrome.nbsp),"why,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.chrome.nbsp),"how?"].join('');
prais2.chrome.everything_else = ["Everything",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.chrome.nbsp),"else"].join('');
prais2.chrome.nav_items = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"home","home",-74557309),(new prais2.chrome.Nav_item("Home","Home","nav-item home","home","home",null,null,null)),new cljs.core.Keyword(null,"intro","intro",-886090599),(new prais2.chrome.Nav_item(prais2.chrome.what_why,prais2.chrome.what_why,"nav-item intro","question","intro",null,null,null)),new cljs.core.Keyword(null,"data","data",-232669377),(new prais2.chrome.Nav_item("Data","Explore the data","nav-item data","table","data/map",null,null,null)),new cljs.core.Keyword(null,"faqs","faqs",636275568),(new prais2.chrome.Nav_item(prais2.chrome.everything_else,prais2.chrome.everything_else,"nav-item faqs","info","faqs",null,null,null))], null);
/**
 * 
 */
prais2.chrome.bs_nav_link = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (active_QMARK_,nav_item,click_handler){
return React.createElement("li",null,React.createElement("a",({"onClick": click_handler, "data-toggle": "collapse", "data-target": ".navbar-collapse.in", "href": prais2.core.token__GT_url.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(nav_item)), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navbar-btn",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active_QMARK_)?" active ":" ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(nav_item))].join('')], null))}),React.createElement("i",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa",["fa-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(nav_item))].join('')], null))})),sablono.interpreter.interpret.call(null,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(nav_item))].join(''))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"bs-nav-link");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21817__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21817 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21818__i = 0, G__21818__a = new Array(arguments.length -  0);
while (G__21818__i < G__21818__a.length) {G__21818__a[G__21818__i] = arguments[G__21818__i + 0]; ++G__21818__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21818__a,0,null);
} 
return G__21817__delegate.call(this,args__16261__auto__);};
G__21817.cljs$lang$maxFixedArity = 0;
G__21817.cljs$lang$applyTo = (function (arglist__21819){
var args__16261__auto__ = cljs.core.seq(arglist__21819);
return G__21817__delegate(args__16261__auto__);
});
G__21817.cljs$core$IFn$_invoke$arity$variadic = G__21817__delegate;
return G__21817;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
prais2.chrome.nav_click_handler = (function prais2$chrome$nav_click_handler(nav_item_key){
return (function (e){
return prais2.core.click__GT_event_bus.call(null,e,nav_item_key,((cljs.core._EQ_.call(null,nav_item_key,new cljs.core.Keyword(null,"data","data",-232669377)))?new cljs.core.Keyword(null,"map","map",1371690461):null),((cljs.core._EQ_.call(null,nav_item_key,new cljs.core.Keyword(null,"data","data",-232669377)))?"data/map":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,nav_item_key))].join('')));
});
});
/**
 * 
 */
prais2.chrome.bs_fixed_navbar = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (active_key){
return React.createElement("nav",({"className": "navbar navbar-simple navbar-fixed-top"}),React.createElement("div",({"className": "navbar-inner"}),React.createElement("div",({"className": "container"}),React.createElement("div",({"key": (1), "className": "navbar-header"}),React.createElement("button",({"key": (1), "type": "button", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar", "className": "navbar-toggle collapsed"}),React.createElement("span",({"key": (1), "className": "sr-only"}),"Toggle navigation"),React.createElement("span",({"key": (2), "className": "icon-bar"})),React.createElement("span",({"key": (3), "className": "icon-bar"})),React.createElement("span",({"key": (4), "className": "icon-bar"})))),React.createElement("div",({"id": "navbar", "key": (2), "className": "navbar-collapse collapse"}),React.createElement("ul",({"key": (1), "className": "nav navbar-nav navbar-right"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,(function (p1__21820_SHARP_,p2__21821_SHARP_){
return prais2.utils.key_with.call(null,p1__21820_SHARP_,prais2.chrome.bs_nav_link.call(null,cljs.core._EQ_.call(null,active_key,p2__21821_SHARP_),p2__21821_SHARP_.call(null,prais2.chrome.nav_items),prais2.chrome.nav_click_handler.call(null,p2__21821_SHARP_)));
}),cljs.core.keys.call(null,prais2.chrome.nav_items))))))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"bs-fixed-navbar");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21824__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21824 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21825__i = 0, G__21825__a = new Array(arguments.length -  0);
while (G__21825__i < G__21825__a.length) {G__21825__a[G__21825__i] = arguments[G__21825__i + 0]; ++G__21825__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21825__a,0,null);
} 
return G__21824__delegate.call(this,args__16261__auto__);};
G__21824.cljs$lang$maxFixedArity = 0;
G__21824.cljs$lang$applyTo = (function (arglist__21826){
var args__16261__auto__ = cljs.core.seq(arglist__21826);
return G__21824__delegate(args__16261__auto__);
});
G__21824.cljs$core$IFn$_invoke$arity$variadic = G__21824__delegate;
return G__21824;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.chrome.header = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var attrs21827 = prais2.chrome.bs_fixed_navbar.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,prais2.core.app)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21827))?sablono.interpreter.attributes.call(null,attrs21827):null),((cljs.core.map_QMARK_.call(null,attrs21827))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"className": "main-title-box"}),(function (){var attrs21828 = prais2.core.href.call(null,"/",new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),prais2.chrome.nav_click_handler.call(null,new cljs.core.Keyword(null,"home","home",-74557309)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),prais2.chrome.nav_click_handler.call(null,new cljs.core.Keyword(null,"home","home",-74557309)));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21828))?sablono.interpreter.attributes.call(null,attrs21828):null),((cljs.core.map_QMARK_.call(null,attrs21828))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("img",({"src": "/assets/logo3.png", "style": ({"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}), "className": "img-responsive pull-left"}))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21828),React.createElement("img",({"src": "/assets/logo3.png", "style": ({"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}), "className": "img-responsive pull-left"}))], null)));
})(),React.createElement("div",({"style": ({"marginLeft": "0px", "paddingLeft": "0px", "paddingRight": "40px"}), "className": "pull-left main-title"}),"UNDERSTANDING CHILDREN'S HEART SURGERY OUTCOMES"))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21827),React.createElement("div",({"className": "main-title-box"}),(function (){var attrs21835 = prais2.core.href.call(null,"/",new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),prais2.chrome.nav_click_handler.call(null,new cljs.core.Keyword(null,"home","home",-74557309)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),prais2.chrome.nav_click_handler.call(null,new cljs.core.Keyword(null,"home","home",-74557309)));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21835))?sablono.interpreter.attributes.call(null,attrs21835):null),((cljs.core.map_QMARK_.call(null,attrs21835))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("img",({"src": "/assets/logo3.png", "style": ({"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}), "className": "img-responsive pull-left"}))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21835),React.createElement("img",({"src": "/assets/logo3.png", "style": ({"marginTop": "-50px", "paddingBottom": "10px", "paddingRight": "20px", "marginRight": "0px", "transform": "rotate(180deg)"}), "className": "img-responsive pull-left"}))], null)));
})(),React.createElement("div",({"style": ({"marginLeft": "0px", "paddingLeft": "0px", "paddingRight": "40px"}), "className": "pull-left main-title"}),"UNDERSTANDING CHILDREN'S HEART SURGERY OUTCOMES"))], null)));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"header");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21842__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21842 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21843__i = 0, G__21843__a = new Array(arguments.length -  0);
while (G__21843__i < G__21843__a.length) {G__21843__a[G__21843__i] = arguments[G__21843__i + 0]; ++G__21843__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21843__a,0,null);
} 
return G__21842__delegate.call(this,args__16261__auto__);};
G__21842.cljs$lang$maxFixedArity = 0;
G__21842.cljs$lang$applyTo = (function (arglist__21844){
var args__16261__auto__ = cljs.core.seq(arglist__21844);
return G__21842__delegate(args__16261__auto__);
});
G__21842.cljs$core$IFn$_invoke$arity$variadic = G__21842__delegate;
return G__21842;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();
/**
 * 
 */
prais2.chrome.footer = (function (){var render_mixin__16258__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",({"className": "container-fluid partners"}),React.createElement("div",({"className": "row visible-xs-block"}),React.createElement("div",({"className": "col-xs-offset-1"}),React.createElement("h4",null,(function (){var attrs21851 = prais2.core.href.call(null,"faq/4/0");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21851))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link"], null)], null),attrs21851)):({"className": "link"})),((cljs.core.map_QMARK_.call(null,attrs21851))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("span",null,"Project partners ",React.createElement("i",({"className": "fa fa-chevron-right"})))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21851),React.createElement("span",null,"Project partners ",React.createElement("i",({"className": "fa fa-chevron-right"})))], null)));
})()),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",null,"University College, London"),React.createElement("li",null,"University of Cambridge"),React.createElement("li",null,"King's College, London"),React.createElement("li",null,"Sense about Science"),React.createElement("li",null,"Children's Heart Federation")))),React.createElement("div",({"className": "row hidden-xs"}),React.createElement("div",({"className": "col-sm-10 collab-logo"}),(function (){var attrs21856 = prais2.core.href.call(null,"faq/4/0");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21856))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link"], null)], null),attrs21856)):({"className": "link"})),((cljs.core.map_QMARK_.call(null,attrs21856))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About us"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21856),"About us"], null)));
})(),"| ",(function (){var attrs21857 = prais2.core.href.call(null,"faq/4/1");
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs21857))?sablono.interpreter.attributes.call(null,attrs21857):null),((cljs.core.map_QMARK_.call(null,attrs21857))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Contact us"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21857),"Contact us"], null)));
})()),React.createElement("div",({"className": "col-sm-10 collab-logo col-md-offset-1 col-md-11"}),(function (){var attrs21858 = prais2.core.isrc.call(null,"assets/ucl-logo.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"190px"], null));
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs21858))?sablono.interpreter.attributes.call(null,attrs21858):null),((cljs.core.map_QMARK_.call(null,attrs21858))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21858)], null)));
})(),(function (){var attrs21859 = prais2.core.isrc.call(null,"assets/camlogo.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"220px"], null));
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs21859))?sablono.interpreter.attributes.call(null,attrs21859):null),((cljs.core.map_QMARK_.call(null,attrs21859))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21859)], null)));
})(),(function (){var attrs21860 = prais2.core.isrc.call(null,"assets/KCLlogo.gif",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"130px"], null));
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs21860))?sablono.interpreter.attributes.call(null,attrs21860):null),((cljs.core.map_QMARK_.call(null,attrs21860))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21860)], null)));
})(),(function (){var attrs21861 = prais2.core.isrc.call(null,"assets/sas-logo.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80px"], null));
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs21861))?sablono.interpreter.attributes.call(null,attrs21861):null),((cljs.core.map_QMARK_.call(null,attrs21861))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21861)], null)));
})(),(function (){var attrs21862 = prais2.core.isrc.call(null,"assets/chf-logo.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80px"], null));
return cljs.core.apply.call(null,React.createElement,"img",((cljs.core.map_QMARK_.call(null,attrs21862))?sablono.interpreter.attributes.call(null,attrs21862):null),((cljs.core.map_QMARK_.call(null,attrs21862))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21862)], null)));
})())),React.createElement("div",({"className": "row footer"}),React.createElement("div",({"className": "acks col-md-offset-1"}),React.createElement("h3",null,"Funding acknowledgement"),React.createElement("p",null,"This project was funded by the National Institute for Health Research Health Services and Delivery Research\n      Programme\n(project number 14/19/13)"),React.createElement("h3",null,"Department of Health disclaimer"),React.createElement("p",null,"The views and opinions expressed therein are those of the authors and do not necessarily reflect those of the\n      Health Services and Delivery Research Programme, NIHR, NHS or the Department of Health."))),React.createElement("div",({"className": "row footer legal"}),React.createElement("div",({"className": "col-md-offset-1"}),React.createElement("p",({"className": "copyright"}),"\u00A9 PRAIS2 website project team 2016, 2019"),React.createElement("p",({"className": "cookies"}),"This site uses cookies to help understand how users interact with the site.\n     See ",React.createElement("a",({"href": "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"}),"Google Analytics")))));
}));
var class__16259__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16258__auto__], null),null),"footer");
var ctor__16260__auto__ = ((function (render_mixin__16258__auto__,class__16259__auto__){
return (function() { 
var G__21863__delegate = function (args__16261__auto__){
var state__16262__auto__ = rum.core.args__GT_state.call(null,args__16261__auto__);
return rum.core.element.call(null,class__16259__auto__,state__16262__auto__,null);
};
var G__21863 = function (var_args){
var args__16261__auto__ = null;
if (arguments.length > 0) {
var G__21864__i = 0, G__21864__a = new Array(arguments.length -  0);
while (G__21864__i < G__21864__a.length) {G__21864__a[G__21864__i] = arguments[G__21864__i + 0]; ++G__21864__i;}
  args__16261__auto__ = new cljs.core.IndexedSeq(G__21864__a,0,null);
} 
return G__21863__delegate.call(this,args__16261__auto__);};
G__21863.cljs$lang$maxFixedArity = 0;
G__21863.cljs$lang$applyTo = (function (arglist__21865){
var args__16261__auto__ = cljs.core.seq(arglist__21865);
return G__21863__delegate(args__16261__auto__);
});
G__21863.cljs$core$IFn$_invoke$arity$variadic = G__21863__delegate;
return G__21863;
})()
;})(render_mixin__16258__auto__,class__16259__auto__))
;
return cljs.core.with_meta.call(null,ctor__16260__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16259__auto__], null));
})();

//# sourceMappingURL=chrome.js.map
