// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.routes');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('prais2.core');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),prais2.core.prefix);
var action__31267__auto___33076 = (function (params__31268__auto__){
if(cljs.core.map_QMARK_.call(null,params__31268__auto__)){
var map__33070 = params__31268__auto__;
var map__33070__$1 = ((((!((map__33070 == null)))?((((map__33070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33070):map__33070);
return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faqs","faqs",636275568),null], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31268__auto__)){
var vec__33072 = params__31268__auto__;
return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faqs","faqs",636275568),null], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/faqs",action__31267__auto___33076);

prais2.routes.faqs = ((function (action__31267__auto___33076){
return (function prais2$routes$faqs(var_args){
var args__25745__auto__ = [];
var len__25738__auto___33077 = arguments.length;
var i__25739__auto___33078 = (0);
while(true){
if((i__25739__auto___33078 < len__25738__auto___33077)){
args__25745__auto__.push((arguments[i__25739__auto___33078]));

var G__33079 = (i__25739__auto___33078 + (1));
i__25739__auto___33078 = G__33079;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((0) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((0)),(0),null)):null);
return prais2.routes.faqs.cljs$core$IFn$_invoke$arity$variadic(argseq__25746__auto__);
});})(action__31267__auto___33076))
;

prais2.routes.faqs.cljs$core$IFn$_invoke$arity$variadic = ((function (action__31267__auto___33076){
return (function (args__31266__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/faqs",args__31266__auto__);
});})(action__31267__auto___33076))
;

prais2.routes.faqs.cljs$lang$maxFixedArity = (0);

prais2.routes.faqs.cljs$lang$applyTo = ((function (action__31267__auto___33076){
return (function (seq33075){
return prais2.routes.faqs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33075));
});})(action__31267__auto___33076))
;

var action__31267__auto___33086 = (function (params__31268__auto__){
if(cljs.core.map_QMARK_.call(null,params__31268__auto__)){
var map__33080 = params__31268__auto__;
var map__33080__$1 = ((((!((map__33080 == null)))?((((map__33080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33080):map__33080);
var section = cljs.core.get.call(null,map__33080__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var s = parseInt(section);
var ap = cljs.core.deref.call(null,prais2.core.app);
if(!((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.Keyword(null,"faq","faq",650618613))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(0)], null))))){
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(0)], null)], null));

return cljs.core.prn.call(null,"faq match",s,(0));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__31268__auto__)){
var vec__33082 = params__31268__auto__;
var section = cljs.core.nth.call(null,vec__33082,(0),null);
var s = parseInt(section);
var ap = cljs.core.deref.call(null,prais2.core.app);
if(!((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.Keyword(null,"faq","faq",650618613))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(0)], null))))){
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
secretary.core.add_route_BANG_.call(null,"/faq/:section",action__31267__auto___33086);

prais2.routes.sec = ((function (action__31267__auto___33086){
return (function prais2$routes$sec(var_args){
var args__25745__auto__ = [];
var len__25738__auto___33087 = arguments.length;
var i__25739__auto___33088 = (0);
while(true){
if((i__25739__auto___33088 < len__25738__auto___33087)){
args__25745__auto__.push((arguments[i__25739__auto___33088]));

var G__33089 = (i__25739__auto___33088 + (1));
i__25739__auto___33088 = G__33089;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((0) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((0)),(0),null)):null);
return prais2.routes.sec.cljs$core$IFn$_invoke$arity$variadic(argseq__25746__auto__);
});})(action__31267__auto___33086))
;

prais2.routes.sec.cljs$core$IFn$_invoke$arity$variadic = ((function (action__31267__auto___33086){
return (function (args__31266__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/faq/:section",args__31266__auto__);
});})(action__31267__auto___33086))
;

prais2.routes.sec.cljs$lang$maxFixedArity = (0);

prais2.routes.sec.cljs$lang$applyTo = ((function (action__31267__auto___33086){
return (function (seq33085){
return prais2.routes.sec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33085));
});})(action__31267__auto___33086))
;

var action__31267__auto___33096 = (function (params__31268__auto__){
if(cljs.core.map_QMARK_.call(null,params__31268__auto__)){
var map__33090 = params__31268__auto__;
var map__33090__$1 = ((((!((map__33090 == null)))?((((map__33090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33090):map__33090);
var section = cljs.core.get.call(null,map__33090__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var id = cljs.core.get.call(null,map__33090__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var s = parseInt(section);
var f = parseInt(id);
var ap = cljs.core.deref.call(null,prais2.core.app);
if(!((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.Keyword(null,"faqs","faqs",636275568))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null))))){
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faq","faq",650618613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null)], null));

return cljs.core.prn.call(null,"faq match",s,f);
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__31268__auto__)){
var vec__33092 = params__31268__auto__;
var section = cljs.core.nth.call(null,vec__33092,(0),null);
var id = cljs.core.nth.call(null,vec__33092,(1),null);
var s = parseInt(section);
var f = parseInt(id);
var ap = cljs.core.deref.call(null,prais2.core.app);
if(!((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.Keyword(null,"faqs","faqs",636275568))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null))))){
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
secretary.core.add_route_BANG_.call(null,"/faq/:section/:id",action__31267__auto___33096);

prais2.routes.faq = ((function (action__31267__auto___33096){
return (function prais2$routes$faq(var_args){
var args__25745__auto__ = [];
var len__25738__auto___33097 = arguments.length;
var i__25739__auto___33098 = (0);
while(true){
if((i__25739__auto___33098 < len__25738__auto___33097)){
args__25745__auto__.push((arguments[i__25739__auto___33098]));

var G__33099 = (i__25739__auto___33098 + (1));
i__25739__auto___33098 = G__33099;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((0) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((0)),(0),null)):null);
return prais2.routes.faq.cljs$core$IFn$_invoke$arity$variadic(argseq__25746__auto__);
});})(action__31267__auto___33096))
;

prais2.routes.faq.cljs$core$IFn$_invoke$arity$variadic = ((function (action__31267__auto___33096){
return (function (args__31266__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/faq/:section/:id",args__31266__auto__);
});})(action__31267__auto___33096))
;

prais2.routes.faq.cljs$lang$maxFixedArity = (0);

prais2.routes.faq.cljs$lang$applyTo = ((function (action__31267__auto___33096){
return (function (seq33095){
return prais2.routes.faq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33095));
});})(action__31267__auto___33096))
;

var action__31267__auto___33106 = (function (params__31268__auto__){
if(cljs.core.map_QMARK_.call(null,params__31268__auto__)){
var map__33100 = params__31268__auto__;
var map__33100__$1 = ((((!((map__33100 == null)))?((((map__33100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33100):map__33100);
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),null], null));

return cljs.core.prn.call(null,"home :id match");
} else {
if(cljs.core.vector_QMARK_.call(null,params__31268__auto__)){
var vec__33102 = params__31268__auto__;
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),null], null));

return cljs.core.prn.call(null,"home :id match");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/home",action__31267__auto___33106);

prais2.routes.home = ((function (action__31267__auto___33106){
return (function prais2$routes$home(var_args){
var args__25745__auto__ = [];
var len__25738__auto___33107 = arguments.length;
var i__25739__auto___33108 = (0);
while(true){
if((i__25739__auto___33108 < len__25738__auto___33107)){
args__25745__auto__.push((arguments[i__25739__auto___33108]));

var G__33109 = (i__25739__auto___33108 + (1));
i__25739__auto___33108 = G__33109;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((0) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((0)),(0),null)):null);
return prais2.routes.home.cljs$core$IFn$_invoke$arity$variadic(argseq__25746__auto__);
});})(action__31267__auto___33106))
;

prais2.routes.home.cljs$core$IFn$_invoke$arity$variadic = ((function (action__31267__auto___33106){
return (function (args__31266__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/home",args__31266__auto__);
});})(action__31267__auto___33106))
;

prais2.routes.home.cljs$lang$maxFixedArity = (0);

prais2.routes.home.cljs$lang$applyTo = ((function (action__31267__auto___33106){
return (function (seq33105){
return prais2.routes.home.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33105));
});})(action__31267__auto___33106))
;

var action__31267__auto___33116 = (function (params__31268__auto__){
if(cljs.core.map_QMARK_.call(null,params__31268__auto__)){
var map__33110 = params__31268__auto__;
var map__33110__$1 = ((((!((map__33110 == null)))?((((map__33110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33110):map__33110);
var id = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intro","intro",-886090599),null], null));

return cljs.core.prn.call(null,"intro match");
} else {
if(cljs.core.vector_QMARK_.call(null,params__31268__auto__)){
var vec__33112 = params__31268__auto__;
var id = cljs.core.nth.call(null,vec__33112,(0),null);
cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intro","intro",-886090599),null], null));

return cljs.core.prn.call(null,"intro match");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/intro",action__31267__auto___33116);

prais2.routes.intro = ((function (action__31267__auto___33116){
return (function prais2$routes$intro(var_args){
var args__25745__auto__ = [];
var len__25738__auto___33117 = arguments.length;
var i__25739__auto___33118 = (0);
while(true){
if((i__25739__auto___33118 < len__25738__auto___33117)){
args__25745__auto__.push((arguments[i__25739__auto___33118]));

var G__33119 = (i__25739__auto___33118 + (1));
i__25739__auto___33118 = G__33119;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((0) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((0)),(0),null)):null);
return prais2.routes.intro.cljs$core$IFn$_invoke$arity$variadic(argseq__25746__auto__);
});})(action__31267__auto___33116))
;

prais2.routes.intro.cljs$core$IFn$_invoke$arity$variadic = ((function (action__31267__auto___33116){
return (function (args__31266__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/intro",args__31266__auto__);
});})(action__31267__auto___33116))
;

prais2.routes.intro.cljs$lang$maxFixedArity = (0);

prais2.routes.intro.cljs$lang$applyTo = ((function (action__31267__auto___33116){
return (function (seq33115){
return prais2.routes.intro.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33115));
});})(action__31267__auto___33116))
;

var action__31267__auto___33126 = (function (params__31268__auto__){
if(cljs.core.map_QMARK_.call(null,params__31268__auto__)){
var map__33120 = params__31268__auto__;
var map__33120__$1 = ((((!((map__33120 == null)))?((((map__33120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33120):map__33120);
var id = cljs.core.get.call(null,map__33120__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.prn.call(null,[cljs.core.str("data "),cljs.core.str(id),cljs.core.str(" match")].join(''));

return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.keyword.call(null,id)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31268__auto__)){
var vec__33122 = params__31268__auto__;
var id = cljs.core.nth.call(null,vec__33122,(0),null);
cljs.core.prn.call(null,[cljs.core.str("data "),cljs.core.str(id),cljs.core.str(" match")].join(''));

return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.keyword.call(null,id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/data/:id",action__31267__auto___33126);

prais2.routes.data = ((function (action__31267__auto___33126){
return (function prais2$routes$data(var_args){
var args__25745__auto__ = [];
var len__25738__auto___33127 = arguments.length;
var i__25739__auto___33128 = (0);
while(true){
if((i__25739__auto___33128 < len__25738__auto___33127)){
args__25745__auto__.push((arguments[i__25739__auto___33128]));

var G__33129 = (i__25739__auto___33128 + (1));
i__25739__auto___33128 = G__33129;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((0) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((0)),(0),null)):null);
return prais2.routes.data.cljs$core$IFn$_invoke$arity$variadic(argseq__25746__auto__);
});})(action__31267__auto___33126))
;

prais2.routes.data.cljs$core$IFn$_invoke$arity$variadic = ((function (action__31267__auto___33126){
return (function (args__31266__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/data/:id",args__31266__auto__);
});})(action__31267__auto___33126))
;

prais2.routes.data.cljs$lang$maxFixedArity = (0);

prais2.routes.data.cljs$lang$applyTo = ((function (action__31267__auto___33126){
return (function (seq33125){
return prais2.routes.data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33125));
});})(action__31267__auto___33126))
;

var action__31267__auto___33136 = (function (params__31268__auto__){
if(cljs.core.map_QMARK_.call(null,params__31268__auto__)){
var map__33130 = params__31268__auto__;
var map__33130__$1 = ((((!((map__33130 == null)))?((((map__33130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33130):map__33130);
cljs.core.prn.call(null,"index match");

return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),null], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31268__auto__)){
var vec__33132 = params__31268__auto__;
cljs.core.prn.call(null,"index match");

return cljs.core.async.put_BANG_.call(null,prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),null], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__31267__auto___33136);

prais2.routes.index = ((function (action__31267__auto___33136){
return (function prais2$routes$index(var_args){
var args__25745__auto__ = [];
var len__25738__auto___33137 = arguments.length;
var i__25739__auto___33138 = (0);
while(true){
if((i__25739__auto___33138 < len__25738__auto___33137)){
args__25745__auto__.push((arguments[i__25739__auto___33138]));

var G__33139 = (i__25739__auto___33138 + (1));
i__25739__auto___33138 = G__33139;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((0) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((0)),(0),null)):null);
return prais2.routes.index.cljs$core$IFn$_invoke$arity$variadic(argseq__25746__auto__);
});})(action__31267__auto___33136))
;

prais2.routes.index.cljs$core$IFn$_invoke$arity$variadic = ((function (action__31267__auto___33136){
return (function (args__31266__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__31266__auto__);
});})(action__31267__auto___33136))
;

prais2.routes.index.cljs$lang$maxFixedArity = (0);

prais2.routes.index.cljs$lang$applyTo = ((function (action__31267__auto___33136){
return (function (seq33135){
return prais2.routes.index.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33135));
});})(action__31267__auto___33136))
;

prais2.routes.history = (function (){var h = (new goog.History(false,false,"dummy"));
goog.events.listen(h,goog.history.EventType.NAVIGATE,((function (h){
return (function (p1__33140_SHARP_){
console.log(p1__33140_SHARP_);

cljs.core.prn.call(null,"Navigate event ",p1__33140_SHARP_.isNavigation," token ",p1__33140_SHARP_.token);

if(cljs.core.truth_(p1__33140_SHARP_.isNavigation)){
return null;
} else {
cljs.core.prn.call(null,[cljs.core.str("prefix = "),cljs.core.str(prais2.core.prefix),cljs.core.str(" pathname = "),cljs.core.str(window.location.pathname)].join(''));

return secretary.core.dispatch_BANG_.call(null,((cljs.core._EQ_.call(null,prais2.core.prefix,"#"))?p1__33140_SHARP_.token:window.location.pathname));
}
});})(h))
);

var G__33141_33142 = h;
G__33141_33142.setEnabled(true);


return h;
})();
window.onpopstate = (function (){
var token = prais2.core.get_token_BANG_.call(null);
cljs.core.prn.call(null,"popstate ",token);

return secretary.core.dispatch_BANG_.call(null,token);
});

//# sourceMappingURL=routes.js.map?rel=1629049570501