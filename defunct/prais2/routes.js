// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('prais2.routes');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('prais2.core');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_();
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,prais2.core.prefix);
var action__15295__auto___17165 = (function (params__15296__auto__){
if(cljs.core.map_QMARK_(params__15296__auto__)){
var map__17159 = params__15296__auto__;
var map__17159__$1 = ((((!((map__17159 == null)))?((((map__17159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17159):map__17159);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faqs,null], null));
} else {
if(cljs.core.vector_QMARK_(params__15296__auto__)){
var vec__17161 = params__15296__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faqs,null], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/faqs",action__15295__auto___17165);

prais2.routes.faqs = ((function (action__15295__auto___17165){
return (function prais2$routes$faqs(var_args){
var args__7303__auto__ = [];
var len__7296__auto___17166 = arguments.length;
var i__7297__auto___17167 = (0);
while(true){
if((i__7297__auto___17167 < len__7296__auto___17166)){
args__7303__auto__.push((arguments[i__7297__auto___17167]));

var G__17168 = (i__7297__auto___17167 + (1));
i__7297__auto___17167 = G__17168;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return prais2.routes.faqs.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(action__15295__auto___17165))
;

prais2.routes.faqs.cljs$core$IFn$_invoke$arity$variadic = ((function (action__15295__auto___17165){
return (function (args__15294__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/faqs",args__15294__auto__);
});})(action__15295__auto___17165))
;

prais2.routes.faqs.cljs$lang$maxFixedArity = (0);

prais2.routes.faqs.cljs$lang$applyTo = ((function (action__15295__auto___17165){
return (function (seq17164){
return prais2.routes.faqs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17164));
});})(action__15295__auto___17165))
;

var action__15295__auto___17175 = (function (params__15296__auto__){
if(cljs.core.map_QMARK_(params__15296__auto__)){
var map__17169 = params__15296__auto__;
var map__17169__$1 = ((((!((map__17169 == null)))?((((map__17169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17169):map__17169);
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17169__$1,cljs.core.cst$kw$section);
var s = parseInt(section);
var ap = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.core.app) : cljs.core.deref.call(null,prais2.core.app));
if(!((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(ap),cljs.core.cst$kw$faq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(0)], null))))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(0)], null)], null));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["faq match",s,(0)], 0));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_(params__15296__auto__)){
var vec__17171 = params__15296__auto__;
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17171,(0),null);
var s = parseInt(section);
var ap = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.core.app) : cljs.core.deref.call(null,prais2.core.app));
if(!((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(ap),cljs.core.cst$kw$faq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(0)], null))))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(0)], null)], null));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["faq match",s,(0)], 0));
} else {
return null;
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/faq/:section",action__15295__auto___17175);

prais2.routes.sec = ((function (action__15295__auto___17175){
return (function prais2$routes$sec(var_args){
var args__7303__auto__ = [];
var len__7296__auto___17176 = arguments.length;
var i__7297__auto___17177 = (0);
while(true){
if((i__7297__auto___17177 < len__7296__auto___17176)){
args__7303__auto__.push((arguments[i__7297__auto___17177]));

var G__17178 = (i__7297__auto___17177 + (1));
i__7297__auto___17177 = G__17178;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return prais2.routes.sec.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(action__15295__auto___17175))
;

prais2.routes.sec.cljs$core$IFn$_invoke$arity$variadic = ((function (action__15295__auto___17175){
return (function (args__15294__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/faq/:section",args__15294__auto__);
});})(action__15295__auto___17175))
;

prais2.routes.sec.cljs$lang$maxFixedArity = (0);

prais2.routes.sec.cljs$lang$applyTo = ((function (action__15295__auto___17175){
return (function (seq17174){
return prais2.routes.sec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17174));
});})(action__15295__auto___17175))
;

var action__15295__auto___17185 = (function (params__15296__auto__){
if(cljs.core.map_QMARK_(params__15296__auto__)){
var map__17179 = params__15296__auto__;
var map__17179__$1 = ((((!((map__17179 == null)))?((((map__17179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17179):map__17179);
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17179__$1,cljs.core.cst$kw$section);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17179__$1,cljs.core.cst$kw$id);
var s = parseInt(section);
var f = parseInt(id);
var ap = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.core.app) : cljs.core.deref.call(null,prais2.core.app));
if(!((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(ap),cljs.core.cst$kw$faqs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null))))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null)], null));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["faq match",s,f], 0));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_(params__15296__auto__)){
var vec__17181 = params__15296__auto__;
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17181,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17181,(1),null);
var s = parseInt(section);
var f = parseInt(id);
var ap = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prais2.core.app) : cljs.core.deref.call(null,prais2.core.app));
if(!((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(ap),cljs.core.cst$kw$faqs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(ap),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null))))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f], null)], null));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["faq match",s,f], 0));
} else {
return null;
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/faq/:section/:id",action__15295__auto___17185);

prais2.routes.faq = ((function (action__15295__auto___17185){
return (function prais2$routes$faq(var_args){
var args__7303__auto__ = [];
var len__7296__auto___17186 = arguments.length;
var i__7297__auto___17187 = (0);
while(true){
if((i__7297__auto___17187 < len__7296__auto___17186)){
args__7303__auto__.push((arguments[i__7297__auto___17187]));

var G__17188 = (i__7297__auto___17187 + (1));
i__7297__auto___17187 = G__17188;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return prais2.routes.faq.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(action__15295__auto___17185))
;

prais2.routes.faq.cljs$core$IFn$_invoke$arity$variadic = ((function (action__15295__auto___17185){
return (function (args__15294__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/faq/:section/:id",args__15294__auto__);
});})(action__15295__auto___17185))
;

prais2.routes.faq.cljs$lang$maxFixedArity = (0);

prais2.routes.faq.cljs$lang$applyTo = ((function (action__15295__auto___17185){
return (function (seq17184){
return prais2.routes.faq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17184));
});})(action__15295__auto___17185))
;

var action__15295__auto___17195 = (function (params__15296__auto__){
if(cljs.core.map_QMARK_(params__15296__auto__)){
var map__17189 = params__15296__auto__;
var map__17189__$1 = ((((!((map__17189 == null)))?((((map__17189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17189):map__17189);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home,null], null));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["home :id match"], 0));
} else {
if(cljs.core.vector_QMARK_(params__15296__auto__)){
var vec__17191 = params__15296__auto__;
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home,null], null));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["home :id match"], 0));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/home",action__15295__auto___17195);

prais2.routes.home = ((function (action__15295__auto___17195){
return (function prais2$routes$home(var_args){
var args__7303__auto__ = [];
var len__7296__auto___17196 = arguments.length;
var i__7297__auto___17197 = (0);
while(true){
if((i__7297__auto___17197 < len__7296__auto___17196)){
args__7303__auto__.push((arguments[i__7297__auto___17197]));

var G__17198 = (i__7297__auto___17197 + (1));
i__7297__auto___17197 = G__17198;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return prais2.routes.home.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(action__15295__auto___17195))
;

prais2.routes.home.cljs$core$IFn$_invoke$arity$variadic = ((function (action__15295__auto___17195){
return (function (args__15294__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/home",args__15294__auto__);
});})(action__15295__auto___17195))
;

prais2.routes.home.cljs$lang$maxFixedArity = (0);

prais2.routes.home.cljs$lang$applyTo = ((function (action__15295__auto___17195){
return (function (seq17194){
return prais2.routes.home.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17194));
});})(action__15295__auto___17195))
;

var action__15295__auto___17205 = (function (params__15296__auto__){
if(cljs.core.map_QMARK_(params__15296__auto__)){
var map__17199 = params__15296__auto__;
var map__17199__$1 = ((((!((map__17199 == null)))?((((map__17199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17199):map__17199);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17199__$1,cljs.core.cst$kw$id);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$intro,null], null));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["intro match"], 0));
} else {
if(cljs.core.vector_QMARK_(params__15296__auto__)){
var vec__17201 = params__15296__auto__;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17201,(0),null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$intro,null], null));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["intro match"], 0));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/intro",action__15295__auto___17205);

prais2.routes.intro = ((function (action__15295__auto___17205){
return (function prais2$routes$intro(var_args){
var args__7303__auto__ = [];
var len__7296__auto___17206 = arguments.length;
var i__7297__auto___17207 = (0);
while(true){
if((i__7297__auto___17207 < len__7296__auto___17206)){
args__7303__auto__.push((arguments[i__7297__auto___17207]));

var G__17208 = (i__7297__auto___17207 + (1));
i__7297__auto___17207 = G__17208;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return prais2.routes.intro.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(action__15295__auto___17205))
;

prais2.routes.intro.cljs$core$IFn$_invoke$arity$variadic = ((function (action__15295__auto___17205){
return (function (args__15294__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/intro",args__15294__auto__);
});})(action__15295__auto___17205))
;

prais2.routes.intro.cljs$lang$maxFixedArity = (0);

prais2.routes.intro.cljs$lang$applyTo = ((function (action__15295__auto___17205){
return (function (seq17204){
return prais2.routes.intro.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17204));
});})(action__15295__auto___17205))
;

var action__15295__auto___17215 = (function (params__15296__auto__){
if(cljs.core.map_QMARK_(params__15296__auto__)){
var map__17209 = params__15296__auto__;
var map__17209__$1 = ((((!((map__17209 == null)))?((((map__17209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17209):map__17209);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17209__$1,cljs.core.cst$kw$id);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("data "),cljs.core.str(id),cljs.core.str(" match")].join('')], 0));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id)], null));
} else {
if(cljs.core.vector_QMARK_(params__15296__auto__)){
var vec__17211 = params__15296__auto__;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17211,(0),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("data "),cljs.core.str(id),cljs.core.str(" match")].join('')], 0));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/data/:id",action__15295__auto___17215);

prais2.routes.data = ((function (action__15295__auto___17215){
return (function prais2$routes$data(var_args){
var args__7303__auto__ = [];
var len__7296__auto___17216 = arguments.length;
var i__7297__auto___17217 = (0);
while(true){
if((i__7297__auto___17217 < len__7296__auto___17216)){
args__7303__auto__.push((arguments[i__7297__auto___17217]));

var G__17218 = (i__7297__auto___17217 + (1));
i__7297__auto___17217 = G__17218;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return prais2.routes.data.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(action__15295__auto___17215))
;

prais2.routes.data.cljs$core$IFn$_invoke$arity$variadic = ((function (action__15295__auto___17215){
return (function (args__15294__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/data/:id",args__15294__auto__);
});})(action__15295__auto___17215))
;

prais2.routes.data.cljs$lang$maxFixedArity = (0);

prais2.routes.data.cljs$lang$applyTo = ((function (action__15295__auto___17215){
return (function (seq17214){
return prais2.routes.data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17214));
});})(action__15295__auto___17215))
;

var action__15295__auto___17225 = (function (params__15296__auto__){
if(cljs.core.map_QMARK_(params__15296__auto__)){
var map__17219 = params__15296__auto__;
var map__17219__$1 = ((((!((map__17219 == null)))?((((map__17219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17219):map__17219);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["index match"], 0));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home,null], null));
} else {
if(cljs.core.vector_QMARK_(params__15296__auto__)){
var vec__17221 = params__15296__auto__;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["index match"], 0));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(prais2.core.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$home,null], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__15295__auto___17225);

prais2.routes.index = ((function (action__15295__auto___17225){
return (function prais2$routes$index(var_args){
var args__7303__auto__ = [];
var len__7296__auto___17226 = arguments.length;
var i__7297__auto___17227 = (0);
while(true){
if((i__7297__auto___17227 < len__7296__auto___17226)){
args__7303__auto__.push((arguments[i__7297__auto___17227]));

var G__17228 = (i__7297__auto___17227 + (1));
i__7297__auto___17227 = G__17228;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return prais2.routes.index.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(action__15295__auto___17225))
;

prais2.routes.index.cljs$core$IFn$_invoke$arity$variadic = ((function (action__15295__auto___17225){
return (function (args__15294__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__15294__auto__);
});})(action__15295__auto___17225))
;

prais2.routes.index.cljs$lang$maxFixedArity = (0);

prais2.routes.index.cljs$lang$applyTo = ((function (action__15295__auto___17225){
return (function (seq17224){
return prais2.routes.index.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17224));
});})(action__15295__auto___17225))
;

prais2.routes.history = (function (){var h = (new goog.History(false,false,"dummy"));
var G__17230_17234 = h;
var G__17231_17235 = goog.history.EventType.NAVIGATE;
var G__17232_17236 = ((function (G__17230_17234,G__17231_17235,h){
return (function (p1__17229_SHARP_){
console.log(p1__17229_SHARP_);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Navigate event ",p1__17229_SHARP_.isNavigation," token ",p1__17229_SHARP_.token], 0));

if(cljs.core.truth_(p1__17229_SHARP_.isNavigation)){
return null;
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("prefix = "),cljs.core.str(prais2.core.prefix),cljs.core.str(" pathname = "),cljs.core.str(window.location.pathname)].join('')], 0));

return secretary.core.dispatch_BANG_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prais2.core.prefix,"#"))?p1__17229_SHARP_.token:window.location.pathname));
}
});})(G__17230_17234,G__17231_17235,h))
;
goog.events.listen(G__17230_17234,G__17231_17235,G__17232_17236);

var G__17233_17237 = h;
G__17233_17237.setEnabled(true);


return h;
})();
window.onpopstate = (function (){
var token = prais2.core.get_token_BANG_();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["popstate ",token], 0));

return secretary.core.dispatch_BANG_(token);
});
