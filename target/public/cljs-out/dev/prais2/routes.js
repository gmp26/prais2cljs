// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.routes');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('prais2.core');
goog.require('goog.History');
cljs.core.enable_console_print_BANG_.call(null);
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),prais2.core.prefix);
var action__21602__auto___21735 = (function (params__21603__auto__){
if(cljs.core.map_QMARK_.call(null,params__21603__auto__)){
var map__21729 = params__21603__auto__;
var map__21729__$1 = ((((!((map__21729 == null)))?(((((map__21729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21729):map__21729);
return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faqs","faqs",636275568),null], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21603__auto__)){
var vec__21731 = params__21603__auto__;
return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faqs","faqs",636275568),null], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/faqs",action__21602__auto___21735);

prais2.routes.faqs = ((function (action__21602__auto___21735){
return (function prais2$routes$faqs(var_args){
var args__4521__auto__ = [];
var len__4518__auto___21736 = arguments.length;
var i__4519__auto___21737 = (0);
while(true){
if((i__4519__auto___21737 < len__4518__auto___21736)){
args__4521__auto__.push((arguments[i__4519__auto___21737]));

var G__21738 = (i__4519__auto___21737 + (1));
i__4519__auto___21737 = G__21738;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return prais2.routes.faqs.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});})(action__21602__auto___21735))
;

prais2.routes.faqs.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21602__auto___21735){
return (function (args__21601__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/faqs",args__21601__auto__);
});})(action__21602__auto___21735))
;

prais2.routes.faqs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
prais2.routes.faqs.cljs$lang$applyTo = ((function (action__21602__auto___21735){
return (function (seq21734){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21734));
});})(action__21602__auto___21735))
;

var action__21602__auto___21745 = (function (params__21603__auto__){
if(cljs.core.map_QMARK_.call(null,params__21603__auto__)){
var map__21739 = params__21603__auto__;
var map__21739__$1 = ((((!((map__21739 == null)))?(((((map__21739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21739):map__21739);
var section = cljs.core.get.call(null,map__21739__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var s = parseInt(section);
var ap = cljs.core.deref.call(null,prais2.core.app);
if(!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.Keyword(null,"faq","faq",650618613))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(0)], null)))))){
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(0)], null)], null));

return cljs.core.prn.call(null,"faq match",s,(0));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__21603__auto__)){
var vec__21741 = params__21603__auto__;
var section = cljs.core.nth.call(null,vec__21741,(0),null);
var s = parseInt(section);
var ap = cljs.core.deref.call(null,prais2.core.app);
if(!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.Keyword(null,"faq","faq",650618613))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(0)], null)))))){
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(0)], null)], null));

return cljs.core.prn.call(null,"faq match",s,(0));
} else {
return null;
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/faq/:section",action__21602__auto___21745);

prais2.routes.sec = ((function (action__21602__auto___21745){
return (function prais2$routes$sec(var_args){
var args__4521__auto__ = [];
var len__4518__auto___21746 = arguments.length;
var i__4519__auto___21747 = (0);
while(true){
if((i__4519__auto___21747 < len__4518__auto___21746)){
args__4521__auto__.push((arguments[i__4519__auto___21747]));

var G__21748 = (i__4519__auto___21747 + (1));
i__4519__auto___21747 = G__21748;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return prais2.routes.sec.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});})(action__21602__auto___21745))
;

prais2.routes.sec.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21602__auto___21745){
return (function (args__21601__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/faq/:section",args__21601__auto__);
});})(action__21602__auto___21745))
;

prais2.routes.sec.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
prais2.routes.sec.cljs$lang$applyTo = ((function (action__21602__auto___21745){
return (function (seq21744){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21744));
});})(action__21602__auto___21745))
;

var action__21602__auto___21755 = (function (params__21603__auto__){
if(cljs.core.map_QMARK_.call(null,params__21603__auto__)){
var map__21749 = params__21603__auto__;
var map__21749__$1 = ((((!((map__21749 == null)))?(((((map__21749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21749):map__21749);
var section = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var id = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var s = parseInt(section);
var f = parseInt(id);
var ap = cljs.core.deref.call(null,prais2.core.app);
if(!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.Keyword(null,"faqs","faqs",636275568))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null)))))){
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null)], null));

return cljs.core.prn.call(null,"faq match",s,f);
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__21603__auto__)){
var vec__21751 = params__21603__auto__;
var section = cljs.core.nth.call(null,vec__21751,(0),null);
var id = cljs.core.nth.call(null,vec__21751,(1),null);
var s = parseInt(section);
var f = parseInt(id);
var ap = cljs.core.deref.call(null,prais2.core.app);
if(!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.Keyword(null,"faqs","faqs",636275568))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null)))))){
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null)], null));

return cljs.core.prn.call(null,"faq match",s,f);
} else {
return null;
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/faq/:section/:id",action__21602__auto___21755);

prais2.routes.faq = ((function (action__21602__auto___21755){
return (function prais2$routes$faq(var_args){
var args__4521__auto__ = [];
var len__4518__auto___21756 = arguments.length;
var i__4519__auto___21757 = (0);
while(true){
if((i__4519__auto___21757 < len__4518__auto___21756)){
args__4521__auto__.push((arguments[i__4519__auto___21757]));

var G__21758 = (i__4519__auto___21757 + (1));
i__4519__auto___21757 = G__21758;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return prais2.routes.faq.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});})(action__21602__auto___21755))
;

prais2.routes.faq.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21602__auto___21755){
return (function (args__21601__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/faq/:section/:id",args__21601__auto__);
});})(action__21602__auto___21755))
;

prais2.routes.faq.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
prais2.routes.faq.cljs$lang$applyTo = ((function (action__21602__auto___21755){
return (function (seq21754){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21754));
});})(action__21602__auto___21755))
;

var action__21602__auto___21765 = (function (params__21603__auto__){
if(cljs.core.map_QMARK_.call(null,params__21603__auto__)){
var map__21759 = params__21603__auto__;
var map__21759__$1 = ((((!((map__21759 == null)))?(((((map__21759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21759):map__21759);
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),null], null));

return cljs.core.prn.call(null,"home :id match");
} else {
if(cljs.core.vector_QMARK_.call(null,params__21603__auto__)){
var vec__21761 = params__21603__auto__;
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),null], null));

return cljs.core.prn.call(null,"home :id match");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/home",action__21602__auto___21765);

prais2.routes.home = ((function (action__21602__auto___21765){
return (function prais2$routes$home(var_args){
var args__4521__auto__ = [];
var len__4518__auto___21766 = arguments.length;
var i__4519__auto___21767 = (0);
while(true){
if((i__4519__auto___21767 < len__4518__auto___21766)){
args__4521__auto__.push((arguments[i__4519__auto___21767]));

var G__21768 = (i__4519__auto___21767 + (1));
i__4519__auto___21767 = G__21768;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return prais2.routes.home.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});})(action__21602__auto___21765))
;

prais2.routes.home.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21602__auto___21765){
return (function (args__21601__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/home",args__21601__auto__);
});})(action__21602__auto___21765))
;

prais2.routes.home.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
prais2.routes.home.cljs$lang$applyTo = ((function (action__21602__auto___21765){
return (function (seq21764){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21764));
});})(action__21602__auto___21765))
;

var action__21602__auto___21775 = (function (params__21603__auto__){
if(cljs.core.map_QMARK_.call(null,params__21603__auto__)){
var map__21769 = params__21603__auto__;
var map__21769__$1 = ((((!((map__21769 == null)))?(((((map__21769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21769):map__21769);
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intro","intro",-886090599),null], null));

return cljs.core.prn.call(null,"intro match");
} else {
if(cljs.core.vector_QMARK_.call(null,params__21603__auto__)){
var vec__21771 = params__21603__auto__;
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intro","intro",-886090599),null], null));

return cljs.core.prn.call(null,"intro match");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/intro",action__21602__auto___21775);

prais2.routes.intro = ((function (action__21602__auto___21775){
return (function prais2$routes$intro(var_args){
var args__4521__auto__ = [];
var len__4518__auto___21776 = arguments.length;
var i__4519__auto___21777 = (0);
while(true){
if((i__4519__auto___21777 < len__4518__auto___21776)){
args__4521__auto__.push((arguments[i__4519__auto___21777]));

var G__21778 = (i__4519__auto___21777 + (1));
i__4519__auto___21777 = G__21778;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return prais2.routes.intro.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});})(action__21602__auto___21775))
;

prais2.routes.intro.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21602__auto___21775){
return (function (args__21601__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/intro",args__21601__auto__);
});})(action__21602__auto___21775))
;

prais2.routes.intro.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
prais2.routes.intro.cljs$lang$applyTo = ((function (action__21602__auto___21775){
return (function (seq21774){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21774));
});})(action__21602__auto___21775))
;

var action__21602__auto___21785 = (function (params__21603__auto__){
if(cljs.core.map_QMARK_.call(null,params__21603__auto__)){
var map__21779 = params__21603__auto__;
var map__21779__$1 = ((((!((map__21779 == null)))?(((((map__21779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21779):map__21779);
var id = cljs.core.get.call(null,map__21779__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.prn.call(null,["data ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," match"].join(''));

return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.keyword.call(null,id)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21603__auto__)){
var vec__21781 = params__21603__auto__;
var id = cljs.core.nth.call(null,vec__21781,(0),null);
cljs.core.prn.call(null,["data ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," match"].join(''));

return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.keyword.call(null,id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/data/:id",action__21602__auto___21785);

prais2.routes.data = ((function (action__21602__auto___21785){
return (function prais2$routes$data(var_args){
var args__4521__auto__ = [];
var len__4518__auto___21786 = arguments.length;
var i__4519__auto___21787 = (0);
while(true){
if((i__4519__auto___21787 < len__4518__auto___21786)){
args__4521__auto__.push((arguments[i__4519__auto___21787]));

var G__21788 = (i__4519__auto___21787 + (1));
i__4519__auto___21787 = G__21788;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return prais2.routes.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});})(action__21602__auto___21785))
;

prais2.routes.data.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21602__auto___21785){
return (function (args__21601__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/data/:id",args__21601__auto__);
});})(action__21602__auto___21785))
;

prais2.routes.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
prais2.routes.data.cljs$lang$applyTo = ((function (action__21602__auto___21785){
return (function (seq21784){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21784));
});})(action__21602__auto___21785))
;

var action__21602__auto___21795 = (function (params__21603__auto__){
if(cljs.core.map_QMARK_.call(null,params__21603__auto__)){
var map__21789 = params__21603__auto__;
var map__21789__$1 = ((((!((map__21789 == null)))?(((((map__21789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21789):map__21789);
cljs.core.prn.call(null,"index match");

return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),null], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21603__auto__)){
var vec__21791 = params__21603__auto__;
cljs.core.prn.call(null,"index match");

return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),null], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__21602__auto___21795);

prais2.routes.index = ((function (action__21602__auto___21795){
return (function prais2$routes$index(var_args){
var args__4521__auto__ = [];
var len__4518__auto___21796 = arguments.length;
var i__4519__auto___21797 = (0);
while(true){
if((i__4519__auto___21797 < len__4518__auto___21796)){
args__4521__auto__.push((arguments[i__4519__auto___21797]));

var G__21798 = (i__4519__auto___21797 + (1));
i__4519__auto___21797 = G__21798;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((0) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((0)),(0),null)):null);
return prais2.routes.index.cljs$core$IFn$_invoke$arity$variadic(argseq__4522__auto__);
});})(action__21602__auto___21795))
;

prais2.routes.index.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21602__auto___21795){
return (function (args__21601__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__21601__auto__);
});})(action__21602__auto___21795))
;

prais2.routes.index.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
prais2.routes.index.cljs$lang$applyTo = ((function (action__21602__auto___21795){
return (function (seq21794){
var self__4506__auto__ = this;
return self__4506__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21794));
});})(action__21602__auto___21795))
;

prais2.routes.history = (function (){var h = (new goog.History(false,false,"dummy"));
goog.events.listen(h,goog.history.EventType.NAVIGATE,((function (h){
return (function (p1__21799_SHARP_){
console.log(p1__21799_SHARP_);

cljs.core.prn.call(null,"Navigate event ",p1__21799_SHARP_.isNavigation," token ",p1__21799_SHARP_.token);

if(cljs.core.truth_(p1__21799_SHARP_.isNavigation)){
return null;
} else {
cljs.core.prn.call(null,["prefix = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prais2.core.prefix)," pathname = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname)].join(''));

return secretary.core.dispatch_BANG_.call(null,((cljs.core._EQ_.call(null,prais2.core.prefix,"#"))?p1__21799_SHARP_.token:window.location.pathname));
}
});})(h))
);

var G__21800_21801 = h;
G__21800_21801.setEnabled(true);


return h;
})();
window.onpopstate = (function (){
var token = prais2.core.get_token_BANG_.call(null);
cljs.core.prn.call(null,"popstate ",token);

return secretary.core.dispatch_BANG_.call(null,token);
});

//# sourceMappingURL=routes.js.map
