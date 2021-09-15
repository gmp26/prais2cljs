// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sablono.core');
goog.require('rum.utils');
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.id = (function rum$core$id(comp){
return cljs.core.cst$kw$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rum.core.state(comp)));
});
rum.core.build_class = (function rum$core$build_class(classes,display_name){
if(cljs.core.sequential_QMARK_(classes)){
} else {
throw (new Error("Assert failed: (sequential? classes)"));
}

var init = rum.utils.collect(cljs.core.cst$kw$init,classes);
var will_mount = rum.utils.collect(cljs.core.cst$kw$will_DASH_mount,classes);
var did_mount = rum.utils.collect(cljs.core.cst$kw$did_DASH_mount,classes);
var transfer_state = rum.utils.collect(cljs.core.cst$kw$transfer_DASH_state,classes);
var should_update = rum.utils.collect(cljs.core.cst$kw$should_DASH_update,classes);
var will_update = rum.utils.collect(cljs.core.cst$kw$will_DASH_update,classes);
var render = cljs.core.first(rum.utils.collect(cljs.core.cst$kw$render,classes));
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__14369_SHARP_,p2__14368_SHARP_){
return (p2__14368_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__14368_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__14369_SHARP_) : p2__14368_SHARP_.call(null,p1__14369_SHARP_));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.utils.collect(cljs.core.cst$kw$wrap_DASH_render,classes));
var did_update = rum.utils.collect(cljs.core.cst$kw$did_DASH_update,classes);
var will_unmount = rum.utils.collect(cljs.core.cst$kw$will_DASH_unmount,classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic((props[":rum/initial-state"]),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context = rum.utils.collect(cljs.core.cst$kw$child_DASH_context,classes);
var class_properties = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.utils.collect(cljs.core.cst$kw$class_DASH_properties,classes));
return React.createClass(cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$displayName,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$getChildContext,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$componentWillMount],[((cljs.core.empty_QMARK_(did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.utils.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),display_name,((cljs.core.empty_QMARK_(will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.utils.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var next_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$,cljs.core.cst$kw$rum_SLASH_id,cljs.core.cst$kw$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state(next_props)], 0));
var next_state__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__14371_SHARP_,p2__14370_SHARP_){
return (p2__14370_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__14370_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__14371_SHARP_) : p2__14370_SHARP_.call(null,old_state,p1__14371_SHARP_));
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,next_state,transfer_state);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state__$1)}));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_(should_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref((next_state[":rum/state"]));
var or__3936__auto__ = cljs.core.some(((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__14372_SHARP_){
return (p1__14372_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__14372_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__14372_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,should_update);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__14374 = (function (){var G__14377 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__14377) : wrapped_render.call(null,G__14377));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14374,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14374,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_(child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__14373_SHARP_){
return (p1__14373_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14373_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__14373_SHARP_.call(null,state));
});})(state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_(will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_(new_state,rum.utils.call_all(cljs.core._deref(new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$,cljs.core.cst$kw$rum_SLASH_id,rum.utils.next_id()], null),props__GT_state(props)], 0));
return ({":rum/state": cljs.core.volatile_BANG_(state)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_(did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.utils.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_(will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.utils.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
)]),class_properties], 0))));
});
rum.core.schedule = (function (){var or__3936__auto__ = (function (){var and__3925__auto__ = (typeof window !== 'undefined');
if(and__3925__auto__){
var or__3936__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
var or__3936__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3936__auto____$2)){
return or__3936__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return ((function (or__3936__auto__){
return (function (p1__14378_SHARP_){
return setTimeout(p1__14378_SHARP_,(16));
});
;})(or__3936__auto__))
}
})();
rum.core.compare_by = (function rum$core$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare((keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(x) : keyfn.call(null,x)),(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(y) : keyfn.call(null,y)));
});
});
rum.core.empty_queue = cljs.core.sorted_set_by(rum.core.compare_by(rum.core.id));
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

var seq__14379 = cljs.core.seq(queue);
var chunk__14381 = null;
var count__14382 = (0);
var i__14383 = (0);
while(true){
if((i__14383 < count__14382)){
var comp = chunk__14381.cljs$core$IIndexed$_nth$arity$2(null,i__14383);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();


var G__14385 = seq__14379;
var G__14386 = chunk__14381;
var G__14387 = count__14382;
var G__14388 = (i__14383 + (1));
seq__14379 = G__14385;
chunk__14381 = G__14386;
count__14382 = G__14387;
i__14383 = G__14388;
continue;
} else {
var G__14389 = seq__14379;
var G__14390 = chunk__14381;
var G__14391 = count__14382;
var G__14392 = (i__14383 + (1));
seq__14379 = G__14389;
chunk__14381 = G__14390;
count__14382 = G__14391;
i__14383 = G__14392;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__14379);
if(temp__5753__auto__){
var seq__14379__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14379__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__14379__$1);
var G__14393 = cljs.core.chunk_rest(seq__14379__$1);
var G__14394 = c__4338__auto__;
var G__14395 = cljs.core.count(c__4338__auto__);
var G__14396 = (0);
seq__14379 = G__14393;
chunk__14381 = G__14394;
count__14382 = G__14395;
i__14383 = G__14396;
continue;
} else {
var comp = cljs.core.first(seq__14379__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();


var G__14397 = cljs.core.next(seq__14379__$1);
var G__14398 = null;
var G__14399 = (0);
var G__14400 = (0);
seq__14379 = G__14397;
chunk__14381 = G__14398;
count__14382 = G__14399;
i__14383 = G__14400;
continue;
} else {
var G__14401 = cljs.core.next(seq__14379__$1);
var G__14402 = null;
var G__14403 = (0);
var G__14404 = (0);
seq__14379 = G__14401;
chunk__14381 = G__14402;
count__14382 = G__14403;
i__14383 = G__14404;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return cljs.core._vreset_BANG_(rum.core.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core.render_queue),component));
});
rum.core.mount = (function rum$core$mount(component,node){
return ReactDOM.render(component,node);
});
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
rum.core.render__GT_mixin = (function rum$core$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$render,(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_state__GT_mixin = (function rum$core$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$render,(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_fn,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_comp__GT_mixin = (function rum$core$render_comp__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$render,(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_fn,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.args__GT_state = (function rum$core$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null);
});
rum.core.element = (function rum$core$element(var_args){
var args__4521__auto__ = [];
var len__4518__auto___14412 = arguments.length;
var i__4519__auto___14413 = (0);
while(true){
if((i__4519__auto___14413 < len__4518__auto___14412)){
args__4521__auto__.push((arguments[i__4519__auto___14413]));

var G__14414 = (i__4519__auto___14413 + (1));
i__4519__auto___14413 = G__14414;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((2) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((2)),(0),null)):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4522__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__14408){
var vec__14409 = p__14408;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14409,(0),null);
var props__$1 = (function (){var or__3936__auto__ = props;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return ({});
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.core.element.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.element.cljs$lang$applyTo = (function (seq14405){
var G__14406 = cljs.core.first(seq14405);
var seq14405__$1 = cljs.core.next(seq14405);
var G__14407 = cljs.core.first(seq14405__$1);
var seq14405__$2 = cljs.core.next(seq14405__$1);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14406,G__14407,seq14405__$2);
});

rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return cljs.core.cst$kw$rum_SLASH_class.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 */
rum.core.local = (function rum$core$local(var_args){
var args__4521__auto__ = [];
var len__4518__auto___14421 = arguments.length;
var i__4519__auto___14422 = (0);
while(true){
if((i__4519__auto___14422 < len__4518__auto___14421)){
args__4521__auto__.push((arguments[i__4519__auto___14422]));

var G__14423 = (i__4519__auto___14422 + (1));
i__4519__auto___14422 = G__14423;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__14417){
var vec__14418 = p__14417;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14418,(0),null);
var key__$1 = (function (){var or__3936__auto__ = key;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.cst$kw$rum_SLASH_local;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transfer_DASH_state,((function (key__$1,vec__14418,key){
return (function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,key__$1,(old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(key__$1) : old.call(null,key__$1)));
});})(key__$1,vec__14418,key))
,cljs.core.cst$kw$will_DASH_mount,((function (key__$1,vec__14418,key){
return (function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key__$1,((function (local_state,component,key__$1,vec__14418,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component,key__$1,vec__14418,key))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key__$1,local_state);
});})(key__$1,vec__14418,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
rum.core.local.cljs$lang$applyTo = (function (seq14415){
var G__14416 = cljs.core.first(seq14415);
var seq14415__$1 = cljs.core.next(seq14415);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14416,seq14415__$1);
});

rum.core.reactive_key = (function rum$core$reactive_key(state){
return [":rum/reactive-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transfer_DASH_state,(function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,cljs.core.cst$kw$rum_SLASH_refs,cljs.core.cst$kw$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$1(old));
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_14424 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__14425 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key(state);
var seq__14428_14440 = cljs.core.seq(old_reactions);
var chunk__14429_14441 = null;
var count__14430_14442 = (0);
var i__14431_14443 = (0);
while(true){
if((i__14431_14443 < count__14430_14442)){
var ref_14444 = chunk__14429_14441.cljs$core$IIndexed$_nth$arity$2(null,i__14431_14443);
if(cljs.core.contains_QMARK_(new_reactions,ref_14444)){
} else {
cljs.core.remove_watch(ref_14444,key);
}


var G__14445 = seq__14428_14440;
var G__14446 = chunk__14429_14441;
var G__14447 = count__14430_14442;
var G__14448 = (i__14431_14443 + (1));
seq__14428_14440 = G__14445;
chunk__14429_14441 = G__14446;
count__14430_14442 = G__14447;
i__14431_14443 = G__14448;
continue;
} else {
var temp__5753__auto___14449 = cljs.core.seq(seq__14428_14440);
if(temp__5753__auto___14449){
var seq__14428_14450__$1 = temp__5753__auto___14449;
if(cljs.core.chunked_seq_QMARK_(seq__14428_14450__$1)){
var c__4338__auto___14451 = cljs.core.chunk_first(seq__14428_14450__$1);
var G__14452 = cljs.core.chunk_rest(seq__14428_14450__$1);
var G__14453 = c__4338__auto___14451;
var G__14454 = cljs.core.count(c__4338__auto___14451);
var G__14455 = (0);
seq__14428_14440 = G__14452;
chunk__14429_14441 = G__14453;
count__14430_14442 = G__14454;
i__14431_14443 = G__14455;
continue;
} else {
var ref_14456 = cljs.core.first(seq__14428_14450__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_14456)){
} else {
cljs.core.remove_watch(ref_14456,key);
}


var G__14457 = cljs.core.next(seq__14428_14450__$1);
var G__14458 = null;
var G__14459 = (0);
var G__14460 = (0);
seq__14428_14440 = G__14457;
chunk__14429_14441 = G__14458;
count__14430_14442 = G__14459;
i__14431_14443 = G__14460;
continue;
}
} else {
}
}
break;
}

var seq__14432_14461 = cljs.core.seq(new_reactions);
var chunk__14433_14462 = null;
var count__14434_14463 = (0);
var i__14435_14464 = (0);
while(true){
if((i__14435_14464 < count__14434_14463)){
var ref_14465 = chunk__14433_14462.cljs$core$IIndexed$_nth$arity$2(null,i__14435_14464);
if(cljs.core.contains_QMARK_(old_reactions,ref_14465)){
} else {
cljs.core.add_watch(ref_14465,key,((function (seq__14432_14461,chunk__14433_14462,count__14434_14463,i__14435_14464,ref_14465,comp,old_reactions,vec__14425,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14424){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14432_14461,chunk__14433_14462,count__14434_14463,i__14435_14464,ref_14465,comp,old_reactions,vec__14425,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14424))
);
}


var G__14466 = seq__14432_14461;
var G__14467 = chunk__14433_14462;
var G__14468 = count__14434_14463;
var G__14469 = (i__14435_14464 + (1));
seq__14432_14461 = G__14466;
chunk__14433_14462 = G__14467;
count__14434_14463 = G__14468;
i__14435_14464 = G__14469;
continue;
} else {
var temp__5753__auto___14470 = cljs.core.seq(seq__14432_14461);
if(temp__5753__auto___14470){
var seq__14432_14471__$1 = temp__5753__auto___14470;
if(cljs.core.chunked_seq_QMARK_(seq__14432_14471__$1)){
var c__4338__auto___14472 = cljs.core.chunk_first(seq__14432_14471__$1);
var G__14473 = cljs.core.chunk_rest(seq__14432_14471__$1);
var G__14474 = c__4338__auto___14472;
var G__14475 = cljs.core.count(c__4338__auto___14472);
var G__14476 = (0);
seq__14432_14461 = G__14473;
chunk__14433_14462 = G__14474;
count__14434_14463 = G__14475;
i__14435_14464 = G__14476;
continue;
} else {
var ref_14477 = cljs.core.first(seq__14432_14471__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_14477)){
} else {
cljs.core.add_watch(ref_14477,key,((function (seq__14432_14461,chunk__14433_14462,count__14434_14463,i__14435_14464,ref_14477,seq__14432_14471__$1,temp__5753__auto___14470,comp,old_reactions,vec__14425,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14424){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14432_14461,chunk__14433_14462,count__14434_14463,i__14435_14464,ref_14477,seq__14432_14471__$1,temp__5753__auto___14470,comp,old_reactions,vec__14425,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14424))
);
}


var G__14478 = cljs.core.next(seq__14432_14471__$1);
var G__14479 = null;
var G__14480 = (0);
var G__14481 = (0);
seq__14432_14461 = G__14478;
chunk__14433_14462 = G__14479;
count__14434_14463 = G__14480;
i__14435_14464 = G__14481;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_14424;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_14482 = rum.core.reactive_key(state);
var seq__14436_14483 = cljs.core.seq(cljs.core.cst$kw$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14437_14484 = null;
var count__14438_14485 = (0);
var i__14439_14486 = (0);
while(true){
if((i__14439_14486 < count__14438_14485)){
var ref_14487 = chunk__14437_14484.cljs$core$IIndexed$_nth$arity$2(null,i__14439_14486);
cljs.core.remove_watch(ref_14487,key_14482);


var G__14488 = seq__14436_14483;
var G__14489 = chunk__14437_14484;
var G__14490 = count__14438_14485;
var G__14491 = (i__14439_14486 + (1));
seq__14436_14483 = G__14488;
chunk__14437_14484 = G__14489;
count__14438_14485 = G__14490;
i__14439_14486 = G__14491;
continue;
} else {
var temp__5753__auto___14492 = cljs.core.seq(seq__14436_14483);
if(temp__5753__auto___14492){
var seq__14436_14493__$1 = temp__5753__auto___14492;
if(cljs.core.chunked_seq_QMARK_(seq__14436_14493__$1)){
var c__4338__auto___14494 = cljs.core.chunk_first(seq__14436_14493__$1);
var G__14495 = cljs.core.chunk_rest(seq__14436_14493__$1);
var G__14496 = c__4338__auto___14494;
var G__14497 = cljs.core.count(c__4338__auto___14494);
var G__14498 = (0);
seq__14436_14483 = G__14495;
chunk__14437_14484 = G__14496;
count__14438_14485 = G__14497;
i__14439_14486 = G__14498;
continue;
} else {
var ref_14499 = cljs.core.first(seq__14436_14493__$1);
cljs.core.remove_watch(ref_14499,key_14482);


var G__14500 = cljs.core.next(seq__14436_14493__$1);
var G__14501 = null;
var G__14502 = (0);
var G__14503 = (0);
seq__14436_14483 = G__14500;
chunk__14437_14484 = G__14501;
count__14438_14485 = G__14502;
i__14439_14486 = G__14503;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$rum_SLASH_refs);
})], null);
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});

/**
* @constructor
 * @implements {rum.core.Object}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
rum.core.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
rum.core.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,"#<Cursor: ");

cljs.core.pr_writer(this$__$1.cljs$core$IDeref$_deref$arity$1(null),writer,opts);

return cljs.core._write(writer,">");
});

rum.core.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.core.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.core.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.parent,self__.setter,new_value);

return new_value;
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__14504 = this$__$1.cljs$core$IDeref$_deref$arity$1(null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14504) : f.call(null,G__14504));
})());
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__14505 = this$__$1.cljs$core$IDeref$_deref$arity$1(null);
var G__14506 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14505,G__14506) : f.call(null,G__14505,G__14506));
})());
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__14507 = this$__$1.cljs$core$IDeref$_deref$arity$1(null);
var G__14508 = a;
var G__14509 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14507,G__14508,G__14509) : f.call(null,G__14507,G__14508,G__14509));
})());
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.cljs$core$IDeref$_deref$arity$1(null),a,b,xs));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch(self__.parent,(new cljs.core.List(null,this$__$1,(new cljs.core.List(null,key,null,(1),null)),(2),null)),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(oldp) : self__.getter.call(null,oldp));
var new$ = (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(newp) : self__.getter.call(null,newp));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : f.call(null,key,this$__$1,old,new$));
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch(self__.parent,(new cljs.core.List(null,this$__$1,(new cljs.core.List(null,key,null,(1),null)),(2),null)));

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__14510 = cljs.core._deref(self__.parent);
return (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(G__14510) : self__.getter.call(null,G__14510));
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$getter,cljs.core.cst$sym$setter], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"rum.core/LensCursor");
});

/**
 * Positional factory function for rum.core/LensCursor.
 */
rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__14511_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__14511_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__14512_SHARP_,p2__14513_SHARP_){
return cljs.core.assoc_in(p1__14512_SHARP_,path,p2__14513_SHARP_);
});})(getter))
;
if((ref instanceof rum.core.LensCursor)){
return (new rum.core.LensCursor(ref.parent,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = (function (){var fexpr__14514 = ref.getter;
return (fexpr__14514.cljs$core$IFn$_invoke$arity$1 ? fexpr__14514.cljs$core$IFn$_invoke$arity$1(where) : fexpr__14514.call(null,where));
})();
var focus__$1 = setter(focus,what);
var fexpr__14515 = ref.setter;
return (fexpr__14515.cljs$core$IFn$_invoke$arity$2 ? fexpr__14515.cljs$core$IFn$_invoke$arity$2(where,focus__$1) : fexpr__14515.call(null,where,focus__$1));
});})(getter,setter))
));
} else {
return (new rum.core.LensCursor(ref,getter,setter));
}
});
rum.core.deref_args = (function rum$core$deref_args(xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14516_SHARP_){
if(((!((p1__14516_SHARP_ == null)))?(((((p1__14516_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === p1__14516_SHARP_.cljs$core$IDeref$))))?true:(((!p1__14516_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,p1__14516_SHARP_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,p1__14516_SHARP_))){
return cljs.core.deref(p1__14516_SHARP_);
} else {
return p1__14516_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transfer_DASH_state,(function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,cljs.core.cst$kw$rum_SLASH_om_DASH_args,cljs.core.cst$kw$rum_SLASH_om_DASH_args.cljs$core$IFn$_invoke$arity$1(old));
}),cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_om_DASH_args.cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state)));
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var vec__14518 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14518,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14518,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum_SLASH_om_DASH_args,rum.core.deref_args(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [":rum/cursored-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var seq__14521_14537 = cljs.core.seq(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14523_14538 = null;
var count__14524_14539 = (0);
var i__14525_14540 = (0);
while(true){
if((i__14525_14540 < count__14524_14539)){
var arg_14541 = chunk__14523_14538.cljs$core$IIndexed$_nth$arity$2(null,i__14525_14540);
if(((!((arg_14541 == null)))?(((((arg_14541.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === arg_14541.cljs$core$IWatchable$))))?true:(((!arg_14541.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14541):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14541))){
cljs.core.add_watch(arg_14541,rum.core.cursored_key(state),((function (seq__14521_14537,chunk__14523_14538,count__14524_14539,i__14525_14540,arg_14541){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});})(seq__14521_14537,chunk__14523_14538,count__14524_14539,i__14525_14540,arg_14541))
);


var G__14542 = seq__14521_14537;
var G__14543 = chunk__14523_14538;
var G__14544 = count__14524_14539;
var G__14545 = (i__14525_14540 + (1));
seq__14521_14537 = G__14542;
chunk__14523_14538 = G__14543;
count__14524_14539 = G__14544;
i__14525_14540 = G__14545;
continue;
} else {
var G__14546 = seq__14521_14537;
var G__14547 = chunk__14523_14538;
var G__14548 = count__14524_14539;
var G__14549 = (i__14525_14540 + (1));
seq__14521_14537 = G__14546;
chunk__14523_14538 = G__14547;
count__14524_14539 = G__14548;
i__14525_14540 = G__14549;
continue;
}
} else {
var temp__5753__auto___14550 = cljs.core.seq(seq__14521_14537);
if(temp__5753__auto___14550){
var seq__14521_14551__$1 = temp__5753__auto___14550;
if(cljs.core.chunked_seq_QMARK_(seq__14521_14551__$1)){
var c__4338__auto___14552 = cljs.core.chunk_first(seq__14521_14551__$1);
var G__14553 = cljs.core.chunk_rest(seq__14521_14551__$1);
var G__14554 = c__4338__auto___14552;
var G__14555 = cljs.core.count(c__4338__auto___14552);
var G__14556 = (0);
seq__14521_14537 = G__14553;
chunk__14523_14538 = G__14554;
count__14524_14539 = G__14555;
i__14525_14540 = G__14556;
continue;
} else {
var arg_14557 = cljs.core.first(seq__14521_14551__$1);
if(((!((arg_14557 == null)))?(((((arg_14557.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === arg_14557.cljs$core$IWatchable$))))?true:(((!arg_14557.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14557):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14557))){
cljs.core.add_watch(arg_14557,rum.core.cursored_key(state),((function (seq__14521_14537,chunk__14523_14538,count__14524_14539,i__14525_14540,arg_14557,seq__14521_14551__$1,temp__5753__auto___14550){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});})(seq__14521_14537,chunk__14523_14538,count__14524_14539,i__14525_14540,arg_14557,seq__14521_14551__$1,temp__5753__auto___14550))
);


var G__14558 = cljs.core.next(seq__14521_14551__$1);
var G__14559 = null;
var G__14560 = (0);
var G__14561 = (0);
seq__14521_14537 = G__14558;
chunk__14523_14538 = G__14559;
count__14524_14539 = G__14560;
i__14525_14540 = G__14561;
continue;
} else {
var G__14562 = cljs.core.next(seq__14521_14551__$1);
var G__14563 = null;
var G__14564 = (0);
var G__14565 = (0);
seq__14521_14537 = G__14562;
chunk__14523_14538 = G__14563;
count__14524_14539 = G__14564;
i__14525_14540 = G__14565;
continue;
}
}
} else {
}
}
break;
}

return state;
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var seq__14529_14566 = cljs.core.seq(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14531_14567 = null;
var count__14532_14568 = (0);
var i__14533_14569 = (0);
while(true){
if((i__14533_14569 < count__14532_14568)){
var arg_14570 = chunk__14531_14567.cljs$core$IIndexed$_nth$arity$2(null,i__14533_14569);
if(((!((arg_14570 == null)))?(((((arg_14570.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === arg_14570.cljs$core$IWatchable$))))?true:(((!arg_14570.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14570):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14570))){
cljs.core.remove_watch(arg_14570,rum.core.cursored_key(state));


var G__14571 = seq__14529_14566;
var G__14572 = chunk__14531_14567;
var G__14573 = count__14532_14568;
var G__14574 = (i__14533_14569 + (1));
seq__14529_14566 = G__14571;
chunk__14531_14567 = G__14572;
count__14532_14568 = G__14573;
i__14533_14569 = G__14574;
continue;
} else {
var G__14575 = seq__14529_14566;
var G__14576 = chunk__14531_14567;
var G__14577 = count__14532_14568;
var G__14578 = (i__14533_14569 + (1));
seq__14529_14566 = G__14575;
chunk__14531_14567 = G__14576;
count__14532_14568 = G__14577;
i__14533_14569 = G__14578;
continue;
}
} else {
var temp__5753__auto___14579 = cljs.core.seq(seq__14529_14566);
if(temp__5753__auto___14579){
var seq__14529_14580__$1 = temp__5753__auto___14579;
if(cljs.core.chunked_seq_QMARK_(seq__14529_14580__$1)){
var c__4338__auto___14581 = cljs.core.chunk_first(seq__14529_14580__$1);
var G__14582 = cljs.core.chunk_rest(seq__14529_14580__$1);
var G__14583 = c__4338__auto___14581;
var G__14584 = cljs.core.count(c__4338__auto___14581);
var G__14585 = (0);
seq__14529_14566 = G__14582;
chunk__14531_14567 = G__14583;
count__14532_14568 = G__14584;
i__14533_14569 = G__14585;
continue;
} else {
var arg_14586 = cljs.core.first(seq__14529_14580__$1);
if(((!((arg_14586 == null)))?(((((arg_14586.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === arg_14586.cljs$core$IWatchable$))))?true:(((!arg_14586.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14586):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14586))){
cljs.core.remove_watch(arg_14586,rum.core.cursored_key(state));


var G__14587 = cljs.core.next(seq__14529_14580__$1);
var G__14588 = null;
var G__14589 = (0);
var G__14590 = (0);
seq__14529_14566 = G__14587;
chunk__14531_14567 = G__14588;
count__14532_14568 = G__14589;
i__14533_14569 = G__14590;
continue;
} else {
var G__14591 = cljs.core.next(seq__14529_14580__$1);
var G__14592 = null;
var G__14593 = (0);
var G__14594 = (0);
seq__14529_14566 = G__14591;
chunk__14531_14567 = G__14592;
count__14532_14568 = G__14593;
i__14533_14569 = G__14594;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);
