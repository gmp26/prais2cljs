// Compiled by ClojureScript 1.10.329 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.utils');
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.id = (function rum$core$id(comp){
return new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rum.core.state.call(null,comp)));
});
rum.core.build_class = (function rum$core$build_class(classes,display_name){
if(cljs.core.sequential_QMARK_.call(null,classes)){
} else {
throw (new Error("Assert failed: (sequential? classes)"));
}

var init = rum.utils.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),classes);
var will_mount = rum.utils.collect.call(null,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),classes);
var did_mount = rum.utils.collect.call(null,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),classes);
var transfer_state = rum.utils.collect.call(null,new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),classes);
var should_update = rum.utils.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),classes);
var will_update = rum.utils.collect.call(null,new cljs.core.Keyword(null,"will-update","will-update",328062998),classes);
var render = cljs.core.first.call(null,rum.utils.collect.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),classes));
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__16328_SHARP_,p2__16327_SHARP_){
return p2__16327_SHARP_.call(null,p1__16328_SHARP_);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.utils.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),classes));
var did_update = rum.utils.collect.call(null,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),classes);
var will_unmount = rum.utils.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.utils.call_all.call(null,(props[":rum/initial-state"]),init,props);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context = rum.utils.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),classes);
var class_properties = cljs.core.reduce.call(null,cljs.core.merge,rum.utils.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),classes));
return React.createClass(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.utils.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.utils.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var next_state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state.call(null,next_props));
var next_state__$1 = cljs.core.reduce.call(null,((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__16330_SHARP_,p2__16329_SHARP_){
return p2__16329_SHARP_.call(null,old_state,p1__16330_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,next_state,transfer_state);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state__$1)}));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__3936__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__16331_SHARP_){
return p1__16331_SHARP_.call(null,old_state,new_state);
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
var state = rum.core.state.call(null,this$);
var vec__16333 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__16333,(0),null);
var next_state = cljs.core.nth.call(null,vec__16333,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__16332_SHARP_){
return p1__16332_SHARP_.call(null,state);
});})(state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.utils.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),rum.utils.next_id.call(null)], null),props__GT_state.call(null,props));
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.utils.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.utils.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
)]),class_properties)));
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
return (function (p1__16336_SHARP_){
return setTimeout(p1__16336_SHARP_,(16));
});
;})(or__3936__auto__))
}
})();
rum.core.compare_by = (function rum$core$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare.call(null,keyfn.call(null,x),keyfn.call(null,y));
});
});
rum.core.empty_queue = cljs.core.sorted_set_by.call(null,rum.core.compare_by.call(null,rum.core.id));
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

var seq__16337 = cljs.core.seq.call(null,queue);
var chunk__16339 = null;
var count__16340 = (0);
var i__16341 = (0);
while(true){
if((i__16341 < count__16340)){
var comp = cljs.core._nth.call(null,chunk__16339,i__16341);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();


var G__16343 = seq__16337;
var G__16344 = chunk__16339;
var G__16345 = count__16340;
var G__16346 = (i__16341 + (1));
seq__16337 = G__16343;
chunk__16339 = G__16344;
count__16340 = G__16345;
i__16341 = G__16346;
continue;
} else {
var G__16347 = seq__16337;
var G__16348 = chunk__16339;
var G__16349 = count__16340;
var G__16350 = (i__16341 + (1));
seq__16337 = G__16347;
chunk__16339 = G__16348;
count__16340 = G__16349;
i__16341 = G__16350;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__16337);
if(temp__5753__auto__){
var seq__16337__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16337__$1)){
var c__4338__auto__ = cljs.core.chunk_first.call(null,seq__16337__$1);
var G__16351 = cljs.core.chunk_rest.call(null,seq__16337__$1);
var G__16352 = c__4338__auto__;
var G__16353 = cljs.core.count.call(null,c__4338__auto__);
var G__16354 = (0);
seq__16337 = G__16351;
chunk__16339 = G__16352;
count__16340 = G__16353;
i__16341 = G__16354;
continue;
} else {
var comp = cljs.core.first.call(null,seq__16337__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();


var G__16355 = cljs.core.next.call(null,seq__16337__$1);
var G__16356 = null;
var G__16357 = (0);
var G__16358 = (0);
seq__16337 = G__16355;
chunk__16339 = G__16356;
count__16340 = G__16357;
i__16341 = G__16358;
continue;
} else {
var G__16359 = cljs.core.next.call(null,seq__16337__$1);
var G__16360 = null;
var G__16361 = (0);
var G__16362 = (0);
seq__16337 = G__16359;
chunk__16339 = G__16360;
count__16340 = G__16361;
i__16341 = G__16362;
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
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
rum.core.mount = (function rum$core$mount(component,node){
return ReactDOM.render(component,node);
});
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
rum.core.render__GT_mixin = (function rum$core$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_state__GT_mixin = (function rum$core$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_comp__GT_mixin = (function rum$core$render_comp__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.args__GT_state = (function rum$core$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null);
});
rum.core.element = (function rum$core$element(var_args){
var args__4521__auto__ = [];
var len__4518__auto___16370 = arguments.length;
var i__4519__auto___16371 = (0);
while(true){
if((i__4519__auto___16371 < len__4518__auto___16370)){
args__4521__auto__.push((arguments[i__4519__auto___16371]));

var G__16372 = (i__4519__auto___16371 + (1));
i__4519__auto___16371 = G__16372;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((2) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((2)),(0),null)):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4522__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__16366){
var vec__16367 = p__16366;
var props = cljs.core.nth.call(null,vec__16367,(0),null);
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
rum.core.element.cljs$lang$applyTo = (function (seq16363){
var G__16364 = cljs.core.first.call(null,seq16363);
var seq16363__$1 = cljs.core.next.call(null,seq16363);
var G__16365 = cljs.core.first.call(null,seq16363__$1);
var seq16363__$2 = cljs.core.next.call(null,seq16363__$1);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16364,G__16365,seq16363__$2);
});

rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 */
rum.core.local = (function rum$core$local(var_args){
var args__4521__auto__ = [];
var len__4518__auto___16379 = arguments.length;
var i__4519__auto___16380 = (0);
while(true){
if((i__4519__auto___16380 < len__4518__auto___16379)){
args__4521__auto__.push((arguments[i__4519__auto___16380]));

var G__16381 = (i__4519__auto___16380 + (1));
i__4519__auto___16380 = G__16381;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__16375){
var vec__16376 = p__16375;
var key = cljs.core.nth.call(null,vec__16376,(0),null);
var key__$1 = (function (){var or__3936__auto__ = key;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__16376,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__16376,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__16376,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__16376,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__16376,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__16376,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
rum.core.local.cljs$lang$applyTo = (function (seq16373){
var G__16374 = cljs.core.first.call(null,seq16373);
var seq16373__$1 = cljs.core.next.call(null,seq16373);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16374,seq16373__$1);
});

rum.core.reactive_key = (function rum$core$reactive_key(state){
return [":rum/reactive-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_16382 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__16383 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__16383,(0),null);
var next_state = cljs.core.nth.call(null,vec__16383,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__16386_16398 = cljs.core.seq.call(null,old_reactions);
var chunk__16387_16399 = null;
var count__16388_16400 = (0);
var i__16389_16401 = (0);
while(true){
if((i__16389_16401 < count__16388_16400)){
var ref_16402 = cljs.core._nth.call(null,chunk__16387_16399,i__16389_16401);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_16402)){
} else {
cljs.core.remove_watch.call(null,ref_16402,key);
}


var G__16403 = seq__16386_16398;
var G__16404 = chunk__16387_16399;
var G__16405 = count__16388_16400;
var G__16406 = (i__16389_16401 + (1));
seq__16386_16398 = G__16403;
chunk__16387_16399 = G__16404;
count__16388_16400 = G__16405;
i__16389_16401 = G__16406;
continue;
} else {
var temp__5753__auto___16407 = cljs.core.seq.call(null,seq__16386_16398);
if(temp__5753__auto___16407){
var seq__16386_16408__$1 = temp__5753__auto___16407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16386_16408__$1)){
var c__4338__auto___16409 = cljs.core.chunk_first.call(null,seq__16386_16408__$1);
var G__16410 = cljs.core.chunk_rest.call(null,seq__16386_16408__$1);
var G__16411 = c__4338__auto___16409;
var G__16412 = cljs.core.count.call(null,c__4338__auto___16409);
var G__16413 = (0);
seq__16386_16398 = G__16410;
chunk__16387_16399 = G__16411;
count__16388_16400 = G__16412;
i__16389_16401 = G__16413;
continue;
} else {
var ref_16414 = cljs.core.first.call(null,seq__16386_16408__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_16414)){
} else {
cljs.core.remove_watch.call(null,ref_16414,key);
}


var G__16415 = cljs.core.next.call(null,seq__16386_16408__$1);
var G__16416 = null;
var G__16417 = (0);
var G__16418 = (0);
seq__16386_16398 = G__16415;
chunk__16387_16399 = G__16416;
count__16388_16400 = G__16417;
i__16389_16401 = G__16418;
continue;
}
} else {
}
}
break;
}

var seq__16390_16419 = cljs.core.seq.call(null,new_reactions);
var chunk__16391_16420 = null;
var count__16392_16421 = (0);
var i__16393_16422 = (0);
while(true){
if((i__16393_16422 < count__16392_16421)){
var ref_16423 = cljs.core._nth.call(null,chunk__16391_16420,i__16393_16422);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_16423)){
} else {
cljs.core.add_watch.call(null,ref_16423,key,((function (seq__16390_16419,chunk__16391_16420,count__16392_16421,i__16393_16422,ref_16423,comp,old_reactions,vec__16383,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16382){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__16390_16419,chunk__16391_16420,count__16392_16421,i__16393_16422,ref_16423,comp,old_reactions,vec__16383,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16382))
);
}


var G__16424 = seq__16390_16419;
var G__16425 = chunk__16391_16420;
var G__16426 = count__16392_16421;
var G__16427 = (i__16393_16422 + (1));
seq__16390_16419 = G__16424;
chunk__16391_16420 = G__16425;
count__16392_16421 = G__16426;
i__16393_16422 = G__16427;
continue;
} else {
var temp__5753__auto___16428 = cljs.core.seq.call(null,seq__16390_16419);
if(temp__5753__auto___16428){
var seq__16390_16429__$1 = temp__5753__auto___16428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16390_16429__$1)){
var c__4338__auto___16430 = cljs.core.chunk_first.call(null,seq__16390_16429__$1);
var G__16431 = cljs.core.chunk_rest.call(null,seq__16390_16429__$1);
var G__16432 = c__4338__auto___16430;
var G__16433 = cljs.core.count.call(null,c__4338__auto___16430);
var G__16434 = (0);
seq__16390_16419 = G__16431;
chunk__16391_16420 = G__16432;
count__16392_16421 = G__16433;
i__16393_16422 = G__16434;
continue;
} else {
var ref_16435 = cljs.core.first.call(null,seq__16390_16429__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_16435)){
} else {
cljs.core.add_watch.call(null,ref_16435,key,((function (seq__16390_16419,chunk__16391_16420,count__16392_16421,i__16393_16422,ref_16435,seq__16390_16429__$1,temp__5753__auto___16428,comp,old_reactions,vec__16383,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16382){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__16390_16419,chunk__16391_16420,count__16392_16421,i__16393_16422,ref_16435,seq__16390_16429__$1,temp__5753__auto___16428,comp,old_reactions,vec__16383,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16382))
);
}


var G__16436 = cljs.core.next.call(null,seq__16390_16429__$1);
var G__16437 = null;
var G__16438 = (0);
var G__16439 = (0);
seq__16390_16419 = G__16436;
chunk__16391_16420 = G__16437;
count__16392_16421 = G__16438;
i__16393_16422 = G__16439;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_16382;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_16440 = rum.core.reactive_key.call(null,state);
var seq__16394_16441 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__16395_16442 = null;
var count__16396_16443 = (0);
var i__16397_16444 = (0);
while(true){
if((i__16397_16444 < count__16396_16443)){
var ref_16445 = cljs.core._nth.call(null,chunk__16395_16442,i__16397_16444);
cljs.core.remove_watch.call(null,ref_16445,key_16440);


var G__16446 = seq__16394_16441;
var G__16447 = chunk__16395_16442;
var G__16448 = count__16396_16443;
var G__16449 = (i__16397_16444 + (1));
seq__16394_16441 = G__16446;
chunk__16395_16442 = G__16447;
count__16396_16443 = G__16448;
i__16397_16444 = G__16449;
continue;
} else {
var temp__5753__auto___16450 = cljs.core.seq.call(null,seq__16394_16441);
if(temp__5753__auto___16450){
var seq__16394_16451__$1 = temp__5753__auto___16450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16394_16451__$1)){
var c__4338__auto___16452 = cljs.core.chunk_first.call(null,seq__16394_16451__$1);
var G__16453 = cljs.core.chunk_rest.call(null,seq__16394_16451__$1);
var G__16454 = c__4338__auto___16452;
var G__16455 = cljs.core.count.call(null,c__4338__auto___16452);
var G__16456 = (0);
seq__16394_16441 = G__16453;
chunk__16395_16442 = G__16454;
count__16396_16443 = G__16455;
i__16397_16444 = G__16456;
continue;
} else {
var ref_16457 = cljs.core.first.call(null,seq__16394_16451__$1);
cljs.core.remove_watch.call(null,ref_16457,key_16440);


var G__16458 = cljs.core.next.call(null,seq__16394_16451__$1);
var G__16459 = null;
var G__16460 = (0);
var G__16461 = (0);
seq__16394_16441 = G__16458;
chunk__16395_16442 = G__16459;
count__16396_16443 = G__16460;
i__16397_16444 = G__16461;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630));
})], null);
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
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
return cljs.core._equiv.call(null,this$,other);
});

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
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
cljs.core.swap_BANG_.call(null,self__.parent,self__.setter,new_value);

return new_value;
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,xs));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.parent,(new cljs.core.List(null,this$__$1,(new cljs.core.List(null,key,null,(1),null)),(2),null)),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = self__.getter.call(null,oldp);
var new$ = self__.getter.call(null,newp);
if(cljs.core.not_EQ_.call(null,old,new$)){
return f.call(null,key,this$__$1,old,new$);
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
cljs.core.remove_watch.call(null,self__.parent,(new cljs.core.List(null,this$__$1,(new cljs.core.List(null,key,null,(1),null)),(2),null)));

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"rum.core/LensCursor");
});

/**
 * Positional factory function for rum.core/LensCursor.
 */
rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__16462_SHARP_){
return cljs.core.get_in.call(null,p1__16462_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__16463_SHARP_,p2__16464_SHARP_){
return cljs.core.assoc_in.call(null,p1__16463_SHARP_,path,p2__16464_SHARP_);
});})(getter))
;
if((ref instanceof rum.core.LensCursor)){
return (new rum.core.LensCursor(ref.parent,cljs.core.comp.call(null,getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter.call(null,focus,what);
return ref.setter.call(null,where,focus__$1);
});})(getter,setter))
));
} else {
return (new rum.core.LensCursor(ref,getter,setter));
}
});
rum.core.deref_args = (function rum$core$deref_args(xs){
return cljs.core.mapv.call(null,(function (p1__16465_SHARP_){
if(((!((p1__16465_SHARP_ == null)))?(((((p1__16465_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === p1__16465_SHARP_.cljs$core$IDeref$))))?true:(((!p1__16465_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__16465_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__16465_SHARP_))){
return cljs.core.deref.call(null,p1__16465_SHARP_);
} else {
return p1__16465_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__16467 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__16467,(0),null);
var next_state = cljs.core.nth.call(null,vec__16467,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [":rum/cursored-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__16470_16486 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__16472_16487 = null;
var count__16473_16488 = (0);
var i__16474_16489 = (0);
while(true){
if((i__16474_16489 < count__16473_16488)){
var arg_16490 = cljs.core._nth.call(null,chunk__16472_16487,i__16474_16489);
if(((!((arg_16490 == null)))?(((((arg_16490.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === arg_16490.cljs$core$IWatchable$))))?true:(((!arg_16490.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_16490):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_16490))){
cljs.core.add_watch.call(null,arg_16490,rum.core.cursored_key.call(null,state),((function (seq__16470_16486,chunk__16472_16487,count__16473_16488,i__16474_16489,arg_16490){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__16470_16486,chunk__16472_16487,count__16473_16488,i__16474_16489,arg_16490))
);


var G__16491 = seq__16470_16486;
var G__16492 = chunk__16472_16487;
var G__16493 = count__16473_16488;
var G__16494 = (i__16474_16489 + (1));
seq__16470_16486 = G__16491;
chunk__16472_16487 = G__16492;
count__16473_16488 = G__16493;
i__16474_16489 = G__16494;
continue;
} else {
var G__16495 = seq__16470_16486;
var G__16496 = chunk__16472_16487;
var G__16497 = count__16473_16488;
var G__16498 = (i__16474_16489 + (1));
seq__16470_16486 = G__16495;
chunk__16472_16487 = G__16496;
count__16473_16488 = G__16497;
i__16474_16489 = G__16498;
continue;
}
} else {
var temp__5753__auto___16499 = cljs.core.seq.call(null,seq__16470_16486);
if(temp__5753__auto___16499){
var seq__16470_16500__$1 = temp__5753__auto___16499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16470_16500__$1)){
var c__4338__auto___16501 = cljs.core.chunk_first.call(null,seq__16470_16500__$1);
var G__16502 = cljs.core.chunk_rest.call(null,seq__16470_16500__$1);
var G__16503 = c__4338__auto___16501;
var G__16504 = cljs.core.count.call(null,c__4338__auto___16501);
var G__16505 = (0);
seq__16470_16486 = G__16502;
chunk__16472_16487 = G__16503;
count__16473_16488 = G__16504;
i__16474_16489 = G__16505;
continue;
} else {
var arg_16506 = cljs.core.first.call(null,seq__16470_16500__$1);
if(((!((arg_16506 == null)))?(((((arg_16506.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === arg_16506.cljs$core$IWatchable$))))?true:(((!arg_16506.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_16506):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_16506))){
cljs.core.add_watch.call(null,arg_16506,rum.core.cursored_key.call(null,state),((function (seq__16470_16486,chunk__16472_16487,count__16473_16488,i__16474_16489,arg_16506,seq__16470_16500__$1,temp__5753__auto___16499){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__16470_16486,chunk__16472_16487,count__16473_16488,i__16474_16489,arg_16506,seq__16470_16500__$1,temp__5753__auto___16499))
);


var G__16507 = cljs.core.next.call(null,seq__16470_16500__$1);
var G__16508 = null;
var G__16509 = (0);
var G__16510 = (0);
seq__16470_16486 = G__16507;
chunk__16472_16487 = G__16508;
count__16473_16488 = G__16509;
i__16474_16489 = G__16510;
continue;
} else {
var G__16511 = cljs.core.next.call(null,seq__16470_16500__$1);
var G__16512 = null;
var G__16513 = (0);
var G__16514 = (0);
seq__16470_16486 = G__16511;
chunk__16472_16487 = G__16512;
count__16473_16488 = G__16513;
i__16474_16489 = G__16514;
continue;
}
}
} else {
}
}
break;
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var seq__16478_16515 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__16480_16516 = null;
var count__16481_16517 = (0);
var i__16482_16518 = (0);
while(true){
if((i__16482_16518 < count__16481_16517)){
var arg_16519 = cljs.core._nth.call(null,chunk__16480_16516,i__16482_16518);
if(((!((arg_16519 == null)))?(((((arg_16519.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === arg_16519.cljs$core$IWatchable$))))?true:(((!arg_16519.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_16519):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_16519))){
cljs.core.remove_watch.call(null,arg_16519,rum.core.cursored_key.call(null,state));


var G__16520 = seq__16478_16515;
var G__16521 = chunk__16480_16516;
var G__16522 = count__16481_16517;
var G__16523 = (i__16482_16518 + (1));
seq__16478_16515 = G__16520;
chunk__16480_16516 = G__16521;
count__16481_16517 = G__16522;
i__16482_16518 = G__16523;
continue;
} else {
var G__16524 = seq__16478_16515;
var G__16525 = chunk__16480_16516;
var G__16526 = count__16481_16517;
var G__16527 = (i__16482_16518 + (1));
seq__16478_16515 = G__16524;
chunk__16480_16516 = G__16525;
count__16481_16517 = G__16526;
i__16482_16518 = G__16527;
continue;
}
} else {
var temp__5753__auto___16528 = cljs.core.seq.call(null,seq__16478_16515);
if(temp__5753__auto___16528){
var seq__16478_16529__$1 = temp__5753__auto___16528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16478_16529__$1)){
var c__4338__auto___16530 = cljs.core.chunk_first.call(null,seq__16478_16529__$1);
var G__16531 = cljs.core.chunk_rest.call(null,seq__16478_16529__$1);
var G__16532 = c__4338__auto___16530;
var G__16533 = cljs.core.count.call(null,c__4338__auto___16530);
var G__16534 = (0);
seq__16478_16515 = G__16531;
chunk__16480_16516 = G__16532;
count__16481_16517 = G__16533;
i__16482_16518 = G__16534;
continue;
} else {
var arg_16535 = cljs.core.first.call(null,seq__16478_16529__$1);
if(((!((arg_16535 == null)))?(((((arg_16535.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === arg_16535.cljs$core$IWatchable$))))?true:(((!arg_16535.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_16535):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_16535))){
cljs.core.remove_watch.call(null,arg_16535,rum.core.cursored_key.call(null,state));


var G__16536 = cljs.core.next.call(null,seq__16478_16529__$1);
var G__16537 = null;
var G__16538 = (0);
var G__16539 = (0);
seq__16478_16515 = G__16536;
chunk__16480_16516 = G__16537;
count__16481_16517 = G__16538;
i__16482_16518 = G__16539;
continue;
} else {
var G__16540 = cljs.core.next.call(null,seq__16478_16529__$1);
var G__16541 = null;
var G__16542 = (0);
var G__16543 = (0);
seq__16478_16515 = G__16540;
chunk__16480_16516 = G__16541;
count__16481_16517 = G__16542;
i__16482_16518 = G__16543;
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

//# sourceMappingURL=core.js.map
