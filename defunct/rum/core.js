// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('rum.utils');
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.id = (function rum$core$id(comp){
return cljs.core.cst$kw$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1((function (){var G__14557 = rum.core.state(comp);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14557) : cljs.core.deref.call(null,G__14557));
})());
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
return (function (p1__14559_SHARP_,p2__14558_SHARP_){
return (p2__14558_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__14558_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__14559_SHARP_) : p2__14558_SHARP_.call(null,p1__14559_SHARP_));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.utils.collect(cljs.core.cst$kw$wrap_DASH_render,classes));
var did_update = rum.utils.collect(cljs.core.cst$kw$did_DASH_update,classes);
var will_unmount = rum.utils.collect(cljs.core.cst$kw$will_DASH_unmount,classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.utils.call_all.cljs$core$IFn$_invoke$arity$variadic((props[":rum/initial-state"]),init,cljs.core.array_seq([props], 0));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context = rum.utils.collect(cljs.core.cst$kw$child_DASH_context,classes);
var class_properties = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.utils.collect(cljs.core.cst$kw$class_DASH_properties,classes));
var G__14589 = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$displayName,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$getChildContext,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$componentWillMount],[((cljs.core.empty_QMARK_(did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
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
var old_state = (function (){var G__14590 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14590) : cljs.core.deref.call(null,G__14590));
})();
var next_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$,cljs.core.cst$kw$rum_SLASH_id,cljs.core.cst$kw$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state(next_props)], 0));
var next_state__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__14561_SHARP_,p2__14560_SHARP_){
return (p2__14560_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__14560_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__14561_SHARP_) : p2__14560_SHARP_.call(null,old_state,p1__14561_SHARP_));
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,next_state,transfer_state);
return this$.setState({":rum/state": cljs.core.volatile_BANG_(next_state__$1)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_(should_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props,next_state){
var this$ = this;
var old_state = (function (){var G__14591 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14591) : cljs.core.deref.call(null,G__14591));
})();
var new_state = (function (){var G__14592 = (next_state[":rum/state"]);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14592) : cljs.core.deref.call(null,G__14592));
})();
var or__6221__auto__ = cljs.core.some(((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__14562_SHARP_){
return (p1__14562_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__14562_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__14562_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,should_update);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__14593 = (function (){var G__14596 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__14596) : wrapped_render.call(null,G__14596));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14593,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14593,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_(child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = (function (){var G__14597 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14597) : cljs.core.deref.call(null,G__14597));
})();
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__14563_SHARP_){
return (p1__14563_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14563_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__14563_SHARP_.call(null,state));
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
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$,cljs.core.cst$kw$rum_SLASH_id,rum.utils.next_id()], null),props__GT_state(props)], 0));
return {":rum/state": cljs.core.volatile_BANG_(state)};
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
)]),class_properties], 0)));
return React.createClass(G__14589);
});
rum.core.schedule = (function (){var or__6221__auto__ = (function (){var and__6209__auto__ = typeof window !== 'undefined';
if(and__6209__auto__){
var or__6221__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__6221__auto____$1)){
return or__6221__auto____$1;
} else {
var or__6221__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__6221__auto____$2)){
return or__6221__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return ((function (or__6221__auto__){
return (function (p1__14598_SHARP_){
return setTimeout(p1__14598_SHARP_,(16));
});
;})(or__6221__auto__))
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
var queue = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue));
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

var seq__14605 = cljs.core.seq(queue);
var chunk__14607 = null;
var count__14608 = (0);
var i__14609 = (0);
while(true){
if((i__14609 < count__14608)){
var comp = chunk__14607.cljs$core$IIndexed$_nth$arity$2(null,i__14609);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__14611 = seq__14605;
var G__14612 = chunk__14607;
var G__14613 = count__14608;
var G__14614 = (i__14609 + (1));
seq__14605 = G__14611;
chunk__14607 = G__14612;
count__14608 = G__14613;
i__14609 = G__14614;
continue;
} else {
var G__14615 = seq__14605;
var G__14616 = chunk__14607;
var G__14617 = count__14608;
var G__14618 = (i__14609 + (1));
seq__14605 = G__14615;
chunk__14607 = G__14616;
count__14608 = G__14617;
i__14609 = G__14618;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14605);
if(temp__4657__auto__){
var seq__14605__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14605__$1)){
var c__7032__auto__ = cljs.core.chunk_first(seq__14605__$1);
var G__14619 = cljs.core.chunk_rest(seq__14605__$1);
var G__14620 = c__7032__auto__;
var G__14621 = cljs.core.count(c__7032__auto__);
var G__14622 = (0);
seq__14605 = G__14619;
chunk__14607 = G__14620;
count__14608 = G__14621;
i__14609 = G__14622;
continue;
} else {
var comp = cljs.core.first(seq__14605__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__14623 = cljs.core.next(seq__14605__$1);
var G__14624 = null;
var G__14625 = (0);
var G__14626 = (0);
seq__14605 = G__14623;
chunk__14607 = G__14624;
count__14608 = G__14625;
i__14609 = G__14626;
continue;
} else {
var G__14627 = cljs.core.next(seq__14605__$1);
var G__14628 = null;
var G__14629 = (0);
var G__14630 = (0);
seq__14605 = G__14627;
chunk__14607 = G__14628;
count__14608 = G__14629;
i__14609 = G__14630;
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
if(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue)))){
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
var args__7303__auto__ = [];
var len__7296__auto___14638 = arguments.length;
var i__7297__auto___14639 = (0);
while(true){
if((i__7297__auto___14639 < len__7296__auto___14638)){
args__7303__auto__.push((arguments[i__7297__auto___14639]));

var G__14640 = (i__7297__auto___14639 + (1));
i__7297__auto___14639 = G__14640;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((2) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((2)),(0),null)):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__14634){
var vec__14635 = p__14634;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14635,(0),null);
var props__$1 = (function (){var or__6221__auto__ = props;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return {};
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.core.element.cljs$lang$maxFixedArity = (2);

rum.core.element.cljs$lang$applyTo = (function (seq14631){
var G__14632 = cljs.core.first(seq14631);
var seq14631__$1 = cljs.core.next(seq14631);
var G__14633 = cljs.core.first(seq14631__$1);
var seq14631__$2 = cljs.core.next(seq14631__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__14632,G__14633,seq14631__$2);
});

rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return cljs.core.cst$kw$rum_SLASH_class.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
var G__14644 = element;
var G__14645 = {"key": key};
var G__14646 = null;
return React.cloneElement(G__14644,G__14645,G__14646);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
var G__14650 = element;
var G__14651 = {"ref": ref};
var G__14652 = null;
return React.cloneElement(G__14650,G__14651,G__14652);
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
var args__7303__auto__ = [];
var len__7296__auto___14659 = arguments.length;
var i__7297__auto___14660 = (0);
while(true){
if((i__7297__auto___14660 < len__7296__auto___14659)){
args__7303__auto__.push((arguments[i__7297__auto___14660]));

var G__14661 = (i__7297__auto___14660 + (1));
i__7297__auto___14660 = G__14661;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__14655){
var vec__14656 = p__14655;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14656,(0),null);
var key__$1 = (function (){var or__6221__auto__ = key;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.cst$kw$rum_SLASH_local;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transfer_DASH_state,((function (key__$1,vec__14656,key){
return (function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,key__$1,(old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(key__$1) : old.call(null,key__$1)));
});})(key__$1,vec__14656,key))
,cljs.core.cst$kw$will_DASH_mount,((function (key__$1,vec__14656,key){
return (function (state){
var local_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial) : cljs.core.atom.call(null,initial));
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key__$1,((function (local_state,component,key__$1,vec__14656,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component,key__$1,vec__14656,key))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key__$1,local_state);
});})(key__$1,vec__14656,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq14653){
var G__14654 = cljs.core.first(seq14653);
var seq14653__$1 = cljs.core.next(seq14653);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__14654,seq14653__$1);
});

rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(cljs.core.cst$kw$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transfer_DASH_state,(function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,cljs.core.cst$kw$rum_SLASH_refs,cljs.core.cst$kw$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$1(old));
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_14662 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__14663 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14663,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14663,(1),null);
var new_reactions = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core._STAR_reactions_STAR_) : cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_));
var key = rum.core.reactive_key(state);
var seq__14666_14678 = cljs.core.seq(old_reactions);
var chunk__14667_14679 = null;
var count__14668_14680 = (0);
var i__14669_14681 = (0);
while(true){
if((i__14669_14681 < count__14668_14680)){
var ref_14682 = chunk__14667_14679.cljs$core$IIndexed$_nth$arity$2(null,i__14669_14681);
if(cljs.core.contains_QMARK_(new_reactions,ref_14682)){
} else {
cljs.core.remove_watch(ref_14682,key);
}

var G__14683 = seq__14666_14678;
var G__14684 = chunk__14667_14679;
var G__14685 = count__14668_14680;
var G__14686 = (i__14669_14681 + (1));
seq__14666_14678 = G__14683;
chunk__14667_14679 = G__14684;
count__14668_14680 = G__14685;
i__14669_14681 = G__14686;
continue;
} else {
var temp__4657__auto___14687 = cljs.core.seq(seq__14666_14678);
if(temp__4657__auto___14687){
var seq__14666_14688__$1 = temp__4657__auto___14687;
if(cljs.core.chunked_seq_QMARK_(seq__14666_14688__$1)){
var c__7032__auto___14689 = cljs.core.chunk_first(seq__14666_14688__$1);
var G__14690 = cljs.core.chunk_rest(seq__14666_14688__$1);
var G__14691 = c__7032__auto___14689;
var G__14692 = cljs.core.count(c__7032__auto___14689);
var G__14693 = (0);
seq__14666_14678 = G__14690;
chunk__14667_14679 = G__14691;
count__14668_14680 = G__14692;
i__14669_14681 = G__14693;
continue;
} else {
var ref_14694 = cljs.core.first(seq__14666_14688__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_14694)){
} else {
cljs.core.remove_watch(ref_14694,key);
}

var G__14695 = cljs.core.next(seq__14666_14688__$1);
var G__14696 = null;
var G__14697 = (0);
var G__14698 = (0);
seq__14666_14678 = G__14695;
chunk__14667_14679 = G__14696;
count__14668_14680 = G__14697;
i__14669_14681 = G__14698;
continue;
}
} else {
}
}
break;
}

var seq__14670_14699 = cljs.core.seq(new_reactions);
var chunk__14671_14700 = null;
var count__14672_14701 = (0);
var i__14673_14702 = (0);
while(true){
if((i__14673_14702 < count__14672_14701)){
var ref_14703 = chunk__14671_14700.cljs$core$IIndexed$_nth$arity$2(null,i__14673_14702);
if(cljs.core.contains_QMARK_(old_reactions,ref_14703)){
} else {
cljs.core.add_watch(ref_14703,key,((function (seq__14670_14699,chunk__14671_14700,count__14672_14701,i__14673_14702,ref_14703,comp,old_reactions,vec__14663,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14662){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14670_14699,chunk__14671_14700,count__14672_14701,i__14673_14702,ref_14703,comp,old_reactions,vec__14663,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14662))
);
}

var G__14704 = seq__14670_14699;
var G__14705 = chunk__14671_14700;
var G__14706 = count__14672_14701;
var G__14707 = (i__14673_14702 + (1));
seq__14670_14699 = G__14704;
chunk__14671_14700 = G__14705;
count__14672_14701 = G__14706;
i__14673_14702 = G__14707;
continue;
} else {
var temp__4657__auto___14708 = cljs.core.seq(seq__14670_14699);
if(temp__4657__auto___14708){
var seq__14670_14709__$1 = temp__4657__auto___14708;
if(cljs.core.chunked_seq_QMARK_(seq__14670_14709__$1)){
var c__7032__auto___14710 = cljs.core.chunk_first(seq__14670_14709__$1);
var G__14711 = cljs.core.chunk_rest(seq__14670_14709__$1);
var G__14712 = c__7032__auto___14710;
var G__14713 = cljs.core.count(c__7032__auto___14710);
var G__14714 = (0);
seq__14670_14699 = G__14711;
chunk__14671_14700 = G__14712;
count__14672_14701 = G__14713;
i__14673_14702 = G__14714;
continue;
} else {
var ref_14715 = cljs.core.first(seq__14670_14709__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_14715)){
} else {
cljs.core.add_watch(ref_14715,key,((function (seq__14670_14699,chunk__14671_14700,count__14672_14701,i__14673_14702,ref_14715,seq__14670_14709__$1,temp__4657__auto___14708,comp,old_reactions,vec__14663,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14662){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14670_14699,chunk__14671_14700,count__14672_14701,i__14673_14702,ref_14715,seq__14670_14709__$1,temp__4657__auto___14708,comp,old_reactions,vec__14663,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14662))
);
}

var G__14716 = cljs.core.next(seq__14670_14709__$1);
var G__14717 = null;
var G__14718 = (0);
var G__14719 = (0);
seq__14670_14699 = G__14716;
chunk__14671_14700 = G__14717;
count__14672_14701 = G__14718;
i__14673_14702 = G__14719;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_14662;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_14720 = rum.core.reactive_key(state);
var seq__14674_14721 = cljs.core.seq(cljs.core.cst$kw$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14675_14722 = null;
var count__14676_14723 = (0);
var i__14677_14724 = (0);
while(true){
if((i__14677_14724 < count__14676_14723)){
var ref_14725 = chunk__14675_14722.cljs$core$IIndexed$_nth$arity$2(null,i__14677_14724);
cljs.core.remove_watch(ref_14725,key_14720);

var G__14726 = seq__14674_14721;
var G__14727 = chunk__14675_14722;
var G__14728 = count__14676_14723;
var G__14729 = (i__14677_14724 + (1));
seq__14674_14721 = G__14726;
chunk__14675_14722 = G__14727;
count__14676_14723 = G__14728;
i__14677_14724 = G__14729;
continue;
} else {
var temp__4657__auto___14730 = cljs.core.seq(seq__14674_14721);
if(temp__4657__auto___14730){
var seq__14674_14731__$1 = temp__4657__auto___14730;
if(cljs.core.chunked_seq_QMARK_(seq__14674_14731__$1)){
var c__7032__auto___14732 = cljs.core.chunk_first(seq__14674_14731__$1);
var G__14733 = cljs.core.chunk_rest(seq__14674_14731__$1);
var G__14734 = c__7032__auto___14732;
var G__14735 = cljs.core.count(c__7032__auto___14732);
var G__14736 = (0);
seq__14674_14721 = G__14733;
chunk__14675_14722 = G__14734;
count__14676_14723 = G__14735;
i__14677_14724 = G__14736;
continue;
} else {
var ref_14737 = cljs.core.first(seq__14674_14731__$1);
cljs.core.remove_watch(ref_14737,key_14720);

var G__14738 = cljs.core.next(seq__14674_14731__$1);
var G__14739 = null;
var G__14740 = (0);
var G__14741 = (0);
seq__14674_14721 = G__14738;
chunk__14675_14722 = G__14739;
count__14676_14723 = G__14740;
i__14677_14724 = G__14741;
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

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
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
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
})
rum.core.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

rum.core.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__14742 = cljs.core._deref(self__.parent);
return (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(G__14742) : self__.getter.call(null,G__14742));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch(self__.parent,(function (){var x__7055__auto__ = this$__$1;
return cljs.core._conj((function (){var x__7055__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})(),((function (this$__$1){
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
cljs.core.remove_watch(self__.parent,(function (){var x__7055__auto__ = this$__$1;
return cljs.core._conj((function (){var x__7055__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})());

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
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
return cljs.core._reset_BANG_(this$__$1,(function (){var G__14743 = cljs.core._deref(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14743) : f.call(null,G__14743));
})());
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__14744 = cljs.core._deref(this$__$1);
var G__14745 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14744,G__14745) : f.call(null,G__14744,G__14745));
})());
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__14746 = cljs.core._deref(this$__$1);
var G__14747 = a;
var G__14748 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14746,G__14747,G__14748) : f.call(null,G__14746,G__14747,G__14748));
})());
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core._deref(this$__$1),a,b,xs));
});

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,"#<Cursor: ");

cljs.core.pr_writer(cljs.core._deref(this$__$1),writer,opts);

return cljs.core._write(writer,">");
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$getter,cljs.core.cst$sym$setter], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"rum.core/LensCursor");
});

rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__14749_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__14749_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__14750_SHARP_,p2__14751_SHARP_){
return cljs.core.assoc_in(p1__14750_SHARP_,path,p2__14751_SHARP_);
});})(getter))
;
if((ref instanceof rum.core.LensCursor)){
return (new rum.core.LensCursor(ref.parent,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter(focus,what);
return ref.setter.call(null,where,focus__$1);
});})(getter,setter))
));
} else {
return (new rum.core.LensCursor(ref,getter,setter));
}
});
rum.core.deref_args = (function rum$core$deref_args(xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14752_SHARP_){
if(((!((p1__14752_SHARP_ == null)))?((((p1__14752_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__14752_SHARP_.cljs$core$IDeref$))?true:(((!p1__14752_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,p1__14752_SHARP_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,p1__14752_SHARP_))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14752_SHARP_) : cljs.core.deref.call(null,p1__14752_SHARP_));
} else {
return p1__14752_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transfer_DASH_state,(function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,cljs.core.cst$kw$rum_SLASH_om_DASH_args,cljs.core.cst$kw$rum_SLASH_om_DASH_args.cljs$core$IFn$_invoke$arity$1(old));
}),cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_om_DASH_args.cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state)));
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var vec__14755 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14755,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14755,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum_SLASH_om_DASH_args,rum.core.deref_args(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(cljs.core.cst$kw$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var seq__14758_14774 = cljs.core.seq(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14760_14775 = null;
var count__14761_14776 = (0);
var i__14762_14777 = (0);
while(true){
if((i__14762_14777 < count__14761_14776)){
var arg_14778 = chunk__14760_14775.cljs$core$IIndexed$_nth$arity$2(null,i__14762_14777);
if(((!((arg_14778 == null)))?((((arg_14778.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_14778.cljs$core$IWatchable$))?true:(((!arg_14778.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14778):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14778))){
cljs.core.add_watch(arg_14778,rum.core.cursored_key(state),((function (seq__14758_14774,chunk__14760_14775,count__14761_14776,i__14762_14777,arg_14778){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});})(seq__14758_14774,chunk__14760_14775,count__14761_14776,i__14762_14777,arg_14778))
);

var G__14779 = seq__14758_14774;
var G__14780 = chunk__14760_14775;
var G__14781 = count__14761_14776;
var G__14782 = (i__14762_14777 + (1));
seq__14758_14774 = G__14779;
chunk__14760_14775 = G__14780;
count__14761_14776 = G__14781;
i__14762_14777 = G__14782;
continue;
} else {
var G__14783 = seq__14758_14774;
var G__14784 = chunk__14760_14775;
var G__14785 = count__14761_14776;
var G__14786 = (i__14762_14777 + (1));
seq__14758_14774 = G__14783;
chunk__14760_14775 = G__14784;
count__14761_14776 = G__14785;
i__14762_14777 = G__14786;
continue;
}
} else {
var temp__4657__auto___14787 = cljs.core.seq(seq__14758_14774);
if(temp__4657__auto___14787){
var seq__14758_14788__$1 = temp__4657__auto___14787;
if(cljs.core.chunked_seq_QMARK_(seq__14758_14788__$1)){
var c__7032__auto___14789 = cljs.core.chunk_first(seq__14758_14788__$1);
var G__14790 = cljs.core.chunk_rest(seq__14758_14788__$1);
var G__14791 = c__7032__auto___14789;
var G__14792 = cljs.core.count(c__7032__auto___14789);
var G__14793 = (0);
seq__14758_14774 = G__14790;
chunk__14760_14775 = G__14791;
count__14761_14776 = G__14792;
i__14762_14777 = G__14793;
continue;
} else {
var arg_14794 = cljs.core.first(seq__14758_14788__$1);
if(((!((arg_14794 == null)))?((((arg_14794.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_14794.cljs$core$IWatchable$))?true:(((!arg_14794.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14794):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14794))){
cljs.core.add_watch(arg_14794,rum.core.cursored_key(state),((function (seq__14758_14774,chunk__14760_14775,count__14761_14776,i__14762_14777,arg_14794,seq__14758_14788__$1,temp__4657__auto___14787){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});})(seq__14758_14774,chunk__14760_14775,count__14761_14776,i__14762_14777,arg_14794,seq__14758_14788__$1,temp__4657__auto___14787))
);

var G__14795 = cljs.core.next(seq__14758_14788__$1);
var G__14796 = null;
var G__14797 = (0);
var G__14798 = (0);
seq__14758_14774 = G__14795;
chunk__14760_14775 = G__14796;
count__14761_14776 = G__14797;
i__14762_14777 = G__14798;
continue;
} else {
var G__14799 = cljs.core.next(seq__14758_14788__$1);
var G__14800 = null;
var G__14801 = (0);
var G__14802 = (0);
seq__14758_14774 = G__14799;
chunk__14760_14775 = G__14800;
count__14761_14776 = G__14801;
i__14762_14777 = G__14802;
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
var seq__14766_14803 = cljs.core.seq(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14768_14804 = null;
var count__14769_14805 = (0);
var i__14770_14806 = (0);
while(true){
if((i__14770_14806 < count__14769_14805)){
var arg_14807 = chunk__14768_14804.cljs$core$IIndexed$_nth$arity$2(null,i__14770_14806);
if(((!((arg_14807 == null)))?((((arg_14807.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_14807.cljs$core$IWatchable$))?true:(((!arg_14807.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14807):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14807))){
cljs.core.remove_watch(arg_14807,rum.core.cursored_key(state));

var G__14808 = seq__14766_14803;
var G__14809 = chunk__14768_14804;
var G__14810 = count__14769_14805;
var G__14811 = (i__14770_14806 + (1));
seq__14766_14803 = G__14808;
chunk__14768_14804 = G__14809;
count__14769_14805 = G__14810;
i__14770_14806 = G__14811;
continue;
} else {
var G__14812 = seq__14766_14803;
var G__14813 = chunk__14768_14804;
var G__14814 = count__14769_14805;
var G__14815 = (i__14770_14806 + (1));
seq__14766_14803 = G__14812;
chunk__14768_14804 = G__14813;
count__14769_14805 = G__14814;
i__14770_14806 = G__14815;
continue;
}
} else {
var temp__4657__auto___14816 = cljs.core.seq(seq__14766_14803);
if(temp__4657__auto___14816){
var seq__14766_14817__$1 = temp__4657__auto___14816;
if(cljs.core.chunked_seq_QMARK_(seq__14766_14817__$1)){
var c__7032__auto___14818 = cljs.core.chunk_first(seq__14766_14817__$1);
var G__14819 = cljs.core.chunk_rest(seq__14766_14817__$1);
var G__14820 = c__7032__auto___14818;
var G__14821 = cljs.core.count(c__7032__auto___14818);
var G__14822 = (0);
seq__14766_14803 = G__14819;
chunk__14768_14804 = G__14820;
count__14769_14805 = G__14821;
i__14770_14806 = G__14822;
continue;
} else {
var arg_14823 = cljs.core.first(seq__14766_14817__$1);
if(((!((arg_14823 == null)))?((((arg_14823.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_14823.cljs$core$IWatchable$))?true:(((!arg_14823.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14823):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,arg_14823))){
cljs.core.remove_watch(arg_14823,rum.core.cursored_key(state));

var G__14824 = cljs.core.next(seq__14766_14817__$1);
var G__14825 = null;
var G__14826 = (0);
var G__14827 = (0);
seq__14766_14803 = G__14824;
chunk__14768_14804 = G__14825;
count__14769_14805 = G__14826;
i__14770_14806 = G__14827;
continue;
} else {
var G__14828 = cljs.core.next(seq__14766_14817__$1);
var G__14829 = null;
var G__14830 = (0);
var G__14831 = (0);
seq__14766_14803 = G__14828;
chunk__14768_14804 = G__14829;
count__14769_14805 = G__14830;
i__14770_14806 = G__14831;
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
