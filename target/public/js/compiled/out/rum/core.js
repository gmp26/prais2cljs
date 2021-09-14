// Compiled by ClojureScript 1.9.36 {}
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
return (function (p1__27173_SHARP_,p2__27172_SHARP_){
return p2__27172_SHARP_.call(null,p1__27173_SHARP_);
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
return (function (p1__27175_SHARP_,p2__27174_SHARP_){
return p2__27174_SHARP_.call(null,old_state,p1__27175_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,next_state,transfer_state);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state__$1)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__24663__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__27176_SHARP_){
return p1__27176_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,should_update);
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__27181 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__27181,(0),null);
var next_state = cljs.core.nth.call(null,vec__27181,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__27177_SHARP_){
return p1__27177_SHARP_.call(null,state);
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
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
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
rum.core.schedule = (function (){var or__24663__auto__ = (function (){var and__24651__auto__ = typeof window !== 'undefined';
if(and__24651__auto__){
var or__24663__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
var or__24663__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__24663__auto____$1)){
return or__24663__auto____$1;
} else {
var or__24663__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__24663__auto____$2)){
return or__24663__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__24651__auto__;
}
})();
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return ((function (or__24663__auto__){
return (function (p1__27184_SHARP_){
return setTimeout(p1__27184_SHARP_,(16));
});
;})(or__24663__auto__))
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

var seq__27191 = cljs.core.seq.call(null,queue);
var chunk__27193 = null;
var count__27194 = (0);
var i__27195 = (0);
while(true){
if((i__27195 < count__27194)){
var comp = cljs.core._nth.call(null,chunk__27193,i__27195);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__27197 = seq__27191;
var G__27198 = chunk__27193;
var G__27199 = count__27194;
var G__27200 = (i__27195 + (1));
seq__27191 = G__27197;
chunk__27193 = G__27198;
count__27194 = G__27199;
i__27195 = G__27200;
continue;
} else {
var G__27201 = seq__27191;
var G__27202 = chunk__27193;
var G__27203 = count__27194;
var G__27204 = (i__27195 + (1));
seq__27191 = G__27201;
chunk__27193 = G__27202;
count__27194 = G__27203;
i__27195 = G__27204;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27191);
if(temp__4657__auto__){
var seq__27191__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27191__$1)){
var c__25474__auto__ = cljs.core.chunk_first.call(null,seq__27191__$1);
var G__27205 = cljs.core.chunk_rest.call(null,seq__27191__$1);
var G__27206 = c__25474__auto__;
var G__27207 = cljs.core.count.call(null,c__25474__auto__);
var G__27208 = (0);
seq__27191 = G__27205;
chunk__27193 = G__27206;
count__27194 = G__27207;
i__27195 = G__27208;
continue;
} else {
var comp = cljs.core.first.call(null,seq__27191__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__27209 = cljs.core.next.call(null,seq__27191__$1);
var G__27210 = null;
var G__27211 = (0);
var G__27212 = (0);
seq__27191 = G__27209;
chunk__27193 = G__27210;
count__27194 = G__27211;
i__27195 = G__27212;
continue;
} else {
var G__27213 = cljs.core.next.call(null,seq__27191__$1);
var G__27214 = null;
var G__27215 = (0);
var G__27216 = (0);
seq__27191 = G__27213;
chunk__27193 = G__27214;
count__27194 = G__27215;
i__27195 = G__27216;
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
var args__25745__auto__ = [];
var len__25738__auto___27224 = arguments.length;
var i__25739__auto___27225 = (0);
while(true){
if((i__25739__auto___27225 < len__25738__auto___27224)){
args__25745__auto__.push((arguments[i__25739__auto___27225]));

var G__27226 = (i__25739__auto___27225 + (1));
i__25739__auto___27225 = G__27226;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((2) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((2)),(0),null)):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25746__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__27220){
var vec__27221 = p__27220;
var props = cljs.core.nth.call(null,vec__27221,(0),null);
var props__$1 = (function (){var or__24663__auto__ = props;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return {};
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.core.element.cljs$lang$maxFixedArity = (2);

rum.core.element.cljs$lang$applyTo = (function (seq27217){
var G__27218 = cljs.core.first.call(null,seq27217);
var seq27217__$1 = cljs.core.next.call(null,seq27217);
var G__27219 = cljs.core.first.call(null,seq27217__$1);
var seq27217__$2 = cljs.core.next.call(null,seq27217__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__27218,G__27219,seq27217__$2);
});

rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,{"key": key},null);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,{"ref": ref},null);
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
var args__25745__auto__ = [];
var len__25738__auto___27233 = arguments.length;
var i__25739__auto___27234 = (0);
while(true){
if((i__25739__auto___27234 < len__25738__auto___27233)){
args__25745__auto__.push((arguments[i__25739__auto___27234]));

var G__27235 = (i__25739__auto___27234 + (1));
i__25739__auto___27234 = G__27235;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((1) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((1)),(0),null)):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25746__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__27229){
var vec__27230 = p__27229;
var key = cljs.core.nth.call(null,vec__27230,(0),null);
var key__$1 = (function (){var or__24663__auto__ = key;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__27230,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__27230,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__27230,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__27230,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__27230,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__27230,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq27227){
var G__27228 = cljs.core.first.call(null,seq27227);
var seq27227__$1 = cljs.core.next.call(null,seq27227);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__27228,seq27227__$1);
});

rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_27236 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__27237 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__27237,(0),null);
var next_state = cljs.core.nth.call(null,vec__27237,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__27240_27252 = cljs.core.seq.call(null,old_reactions);
var chunk__27241_27253 = null;
var count__27242_27254 = (0);
var i__27243_27255 = (0);
while(true){
if((i__27243_27255 < count__27242_27254)){
var ref_27256 = cljs.core._nth.call(null,chunk__27241_27253,i__27243_27255);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_27256)){
} else {
cljs.core.remove_watch.call(null,ref_27256,key);
}

var G__27257 = seq__27240_27252;
var G__27258 = chunk__27241_27253;
var G__27259 = count__27242_27254;
var G__27260 = (i__27243_27255 + (1));
seq__27240_27252 = G__27257;
chunk__27241_27253 = G__27258;
count__27242_27254 = G__27259;
i__27243_27255 = G__27260;
continue;
} else {
var temp__4657__auto___27261 = cljs.core.seq.call(null,seq__27240_27252);
if(temp__4657__auto___27261){
var seq__27240_27262__$1 = temp__4657__auto___27261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27240_27262__$1)){
var c__25474__auto___27263 = cljs.core.chunk_first.call(null,seq__27240_27262__$1);
var G__27264 = cljs.core.chunk_rest.call(null,seq__27240_27262__$1);
var G__27265 = c__25474__auto___27263;
var G__27266 = cljs.core.count.call(null,c__25474__auto___27263);
var G__27267 = (0);
seq__27240_27252 = G__27264;
chunk__27241_27253 = G__27265;
count__27242_27254 = G__27266;
i__27243_27255 = G__27267;
continue;
} else {
var ref_27268 = cljs.core.first.call(null,seq__27240_27262__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_27268)){
} else {
cljs.core.remove_watch.call(null,ref_27268,key);
}

var G__27269 = cljs.core.next.call(null,seq__27240_27262__$1);
var G__27270 = null;
var G__27271 = (0);
var G__27272 = (0);
seq__27240_27252 = G__27269;
chunk__27241_27253 = G__27270;
count__27242_27254 = G__27271;
i__27243_27255 = G__27272;
continue;
}
} else {
}
}
break;
}

var seq__27244_27273 = cljs.core.seq.call(null,new_reactions);
var chunk__27245_27274 = null;
var count__27246_27275 = (0);
var i__27247_27276 = (0);
while(true){
if((i__27247_27276 < count__27246_27275)){
var ref_27277 = cljs.core._nth.call(null,chunk__27245_27274,i__27247_27276);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_27277)){
} else {
cljs.core.add_watch.call(null,ref_27277,key,((function (seq__27244_27273,chunk__27245_27274,count__27246_27275,i__27247_27276,ref_27277,comp,old_reactions,vec__27237,dom,next_state,new_reactions,key,_STAR_reactions_STAR_27236){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__27244_27273,chunk__27245_27274,count__27246_27275,i__27247_27276,ref_27277,comp,old_reactions,vec__27237,dom,next_state,new_reactions,key,_STAR_reactions_STAR_27236))
);
}

var G__27278 = seq__27244_27273;
var G__27279 = chunk__27245_27274;
var G__27280 = count__27246_27275;
var G__27281 = (i__27247_27276 + (1));
seq__27244_27273 = G__27278;
chunk__27245_27274 = G__27279;
count__27246_27275 = G__27280;
i__27247_27276 = G__27281;
continue;
} else {
var temp__4657__auto___27282 = cljs.core.seq.call(null,seq__27244_27273);
if(temp__4657__auto___27282){
var seq__27244_27283__$1 = temp__4657__auto___27282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27244_27283__$1)){
var c__25474__auto___27284 = cljs.core.chunk_first.call(null,seq__27244_27283__$1);
var G__27285 = cljs.core.chunk_rest.call(null,seq__27244_27283__$1);
var G__27286 = c__25474__auto___27284;
var G__27287 = cljs.core.count.call(null,c__25474__auto___27284);
var G__27288 = (0);
seq__27244_27273 = G__27285;
chunk__27245_27274 = G__27286;
count__27246_27275 = G__27287;
i__27247_27276 = G__27288;
continue;
} else {
var ref_27289 = cljs.core.first.call(null,seq__27244_27283__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_27289)){
} else {
cljs.core.add_watch.call(null,ref_27289,key,((function (seq__27244_27273,chunk__27245_27274,count__27246_27275,i__27247_27276,ref_27289,seq__27244_27283__$1,temp__4657__auto___27282,comp,old_reactions,vec__27237,dom,next_state,new_reactions,key,_STAR_reactions_STAR_27236){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__27244_27273,chunk__27245_27274,count__27246_27275,i__27247_27276,ref_27289,seq__27244_27283__$1,temp__4657__auto___27282,comp,old_reactions,vec__27237,dom,next_state,new_reactions,key,_STAR_reactions_STAR_27236))
);
}

var G__27290 = cljs.core.next.call(null,seq__27244_27283__$1);
var G__27291 = null;
var G__27292 = (0);
var G__27293 = (0);
seq__27244_27273 = G__27290;
chunk__27245_27274 = G__27291;
count__27246_27275 = G__27292;
i__27247_27276 = G__27293;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_27236;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_27294 = rum.core.reactive_key.call(null,state);
var seq__27248_27295 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__27249_27296 = null;
var count__27250_27297 = (0);
var i__27251_27298 = (0);
while(true){
if((i__27251_27298 < count__27250_27297)){
var ref_27299 = cljs.core._nth.call(null,chunk__27249_27296,i__27251_27298);
cljs.core.remove_watch.call(null,ref_27299,key_27294);

var G__27300 = seq__27248_27295;
var G__27301 = chunk__27249_27296;
var G__27302 = count__27250_27297;
var G__27303 = (i__27251_27298 + (1));
seq__27248_27295 = G__27300;
chunk__27249_27296 = G__27301;
count__27250_27297 = G__27302;
i__27251_27298 = G__27303;
continue;
} else {
var temp__4657__auto___27304 = cljs.core.seq.call(null,seq__27248_27295);
if(temp__4657__auto___27304){
var seq__27248_27305__$1 = temp__4657__auto___27304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27248_27305__$1)){
var c__25474__auto___27306 = cljs.core.chunk_first.call(null,seq__27248_27305__$1);
var G__27307 = cljs.core.chunk_rest.call(null,seq__27248_27305__$1);
var G__27308 = c__25474__auto___27306;
var G__27309 = cljs.core.count.call(null,c__25474__auto___27306);
var G__27310 = (0);
seq__27248_27295 = G__27307;
chunk__27249_27296 = G__27308;
count__27250_27297 = G__27309;
i__27251_27298 = G__27310;
continue;
} else {
var ref_27311 = cljs.core.first.call(null,seq__27248_27305__$1);
cljs.core.remove_watch.call(null,ref_27311,key_27294);

var G__27312 = cljs.core.next.call(null,seq__27248_27305__$1);
var G__27313 = null;
var G__27314 = (0);
var G__27315 = (0);
seq__27248_27295 = G__27312;
chunk__27249_27296 = G__27313;
count__27250_27297 = G__27314;
i__27251_27298 = G__27315;
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
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
})
rum.core.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.core.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.parent,(function (){var x__25497__auto__ = this$__$1;
return cljs.core._conj.call(null,(function (){var x__25497__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25497__auto____$1);
})(),x__25497__auto__);
})(),((function (this$__$1){
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
cljs.core.remove_watch.call(null,self__.parent,(function (){var x__25497__auto__ = this$__$1;
return cljs.core._conj.call(null,(function (){var x__25497__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25497__auto____$1);
})(),x__25497__auto__);
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

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__25269__auto__,writer__25270__auto__,opt__25271__auto__){
return cljs.core._write.call(null,writer__25270__auto__,"rum.core/LensCursor");
});

rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__27316_SHARP_){
return cljs.core.get_in.call(null,p1__27316_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__27317_SHARP_,p2__27318_SHARP_){
return cljs.core.assoc_in.call(null,p1__27317_SHARP_,path,p2__27318_SHARP_);
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
return cljs.core.mapv.call(null,(function (p1__27319_SHARP_){
if(((!((p1__27319_SHARP_ == null)))?((((p1__27319_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__27319_SHARP_.cljs$core$IDeref$))?true:(((!p1__27319_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__27319_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__27319_SHARP_))){
return cljs.core.deref.call(null,p1__27319_SHARP_);
} else {
return p1__27319_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__27322 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__27322,(0),null);
var next_state = cljs.core.nth.call(null,vec__27322,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__27325_27341 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__27327_27342 = null;
var count__27328_27343 = (0);
var i__27329_27344 = (0);
while(true){
if((i__27329_27344 < count__27328_27343)){
var arg_27345 = cljs.core._nth.call(null,chunk__27327_27342,i__27329_27344);
if(((!((arg_27345 == null)))?((((arg_27345.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_27345.cljs$core$IWatchable$))?true:(((!arg_27345.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_27345):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_27345))){
cljs.core.add_watch.call(null,arg_27345,rum.core.cursored_key.call(null,state),((function (seq__27325_27341,chunk__27327_27342,count__27328_27343,i__27329_27344,arg_27345){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__27325_27341,chunk__27327_27342,count__27328_27343,i__27329_27344,arg_27345))
);

var G__27346 = seq__27325_27341;
var G__27347 = chunk__27327_27342;
var G__27348 = count__27328_27343;
var G__27349 = (i__27329_27344 + (1));
seq__27325_27341 = G__27346;
chunk__27327_27342 = G__27347;
count__27328_27343 = G__27348;
i__27329_27344 = G__27349;
continue;
} else {
var G__27350 = seq__27325_27341;
var G__27351 = chunk__27327_27342;
var G__27352 = count__27328_27343;
var G__27353 = (i__27329_27344 + (1));
seq__27325_27341 = G__27350;
chunk__27327_27342 = G__27351;
count__27328_27343 = G__27352;
i__27329_27344 = G__27353;
continue;
}
} else {
var temp__4657__auto___27354 = cljs.core.seq.call(null,seq__27325_27341);
if(temp__4657__auto___27354){
var seq__27325_27355__$1 = temp__4657__auto___27354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27325_27355__$1)){
var c__25474__auto___27356 = cljs.core.chunk_first.call(null,seq__27325_27355__$1);
var G__27357 = cljs.core.chunk_rest.call(null,seq__27325_27355__$1);
var G__27358 = c__25474__auto___27356;
var G__27359 = cljs.core.count.call(null,c__25474__auto___27356);
var G__27360 = (0);
seq__27325_27341 = G__27357;
chunk__27327_27342 = G__27358;
count__27328_27343 = G__27359;
i__27329_27344 = G__27360;
continue;
} else {
var arg_27361 = cljs.core.first.call(null,seq__27325_27355__$1);
if(((!((arg_27361 == null)))?((((arg_27361.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_27361.cljs$core$IWatchable$))?true:(((!arg_27361.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_27361):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_27361))){
cljs.core.add_watch.call(null,arg_27361,rum.core.cursored_key.call(null,state),((function (seq__27325_27341,chunk__27327_27342,count__27328_27343,i__27329_27344,arg_27361,seq__27325_27355__$1,temp__4657__auto___27354){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__27325_27341,chunk__27327_27342,count__27328_27343,i__27329_27344,arg_27361,seq__27325_27355__$1,temp__4657__auto___27354))
);

var G__27362 = cljs.core.next.call(null,seq__27325_27355__$1);
var G__27363 = null;
var G__27364 = (0);
var G__27365 = (0);
seq__27325_27341 = G__27362;
chunk__27327_27342 = G__27363;
count__27328_27343 = G__27364;
i__27329_27344 = G__27365;
continue;
} else {
var G__27366 = cljs.core.next.call(null,seq__27325_27355__$1);
var G__27367 = null;
var G__27368 = (0);
var G__27369 = (0);
seq__27325_27341 = G__27366;
chunk__27327_27342 = G__27367;
count__27328_27343 = G__27368;
i__27329_27344 = G__27369;
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
var seq__27333_27370 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__27335_27371 = null;
var count__27336_27372 = (0);
var i__27337_27373 = (0);
while(true){
if((i__27337_27373 < count__27336_27372)){
var arg_27374 = cljs.core._nth.call(null,chunk__27335_27371,i__27337_27373);
if(((!((arg_27374 == null)))?((((arg_27374.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_27374.cljs$core$IWatchable$))?true:(((!arg_27374.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_27374):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_27374))){
cljs.core.remove_watch.call(null,arg_27374,rum.core.cursored_key.call(null,state));

var G__27375 = seq__27333_27370;
var G__27376 = chunk__27335_27371;
var G__27377 = count__27336_27372;
var G__27378 = (i__27337_27373 + (1));
seq__27333_27370 = G__27375;
chunk__27335_27371 = G__27376;
count__27336_27372 = G__27377;
i__27337_27373 = G__27378;
continue;
} else {
var G__27379 = seq__27333_27370;
var G__27380 = chunk__27335_27371;
var G__27381 = count__27336_27372;
var G__27382 = (i__27337_27373 + (1));
seq__27333_27370 = G__27379;
chunk__27335_27371 = G__27380;
count__27336_27372 = G__27381;
i__27337_27373 = G__27382;
continue;
}
} else {
var temp__4657__auto___27383 = cljs.core.seq.call(null,seq__27333_27370);
if(temp__4657__auto___27383){
var seq__27333_27384__$1 = temp__4657__auto___27383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27333_27384__$1)){
var c__25474__auto___27385 = cljs.core.chunk_first.call(null,seq__27333_27384__$1);
var G__27386 = cljs.core.chunk_rest.call(null,seq__27333_27384__$1);
var G__27387 = c__25474__auto___27385;
var G__27388 = cljs.core.count.call(null,c__25474__auto___27385);
var G__27389 = (0);
seq__27333_27370 = G__27386;
chunk__27335_27371 = G__27387;
count__27336_27372 = G__27388;
i__27337_27373 = G__27389;
continue;
} else {
var arg_27390 = cljs.core.first.call(null,seq__27333_27384__$1);
if(((!((arg_27390 == null)))?((((arg_27390.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_27390.cljs$core$IWatchable$))?true:(((!arg_27390.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_27390):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_27390))){
cljs.core.remove_watch.call(null,arg_27390,rum.core.cursored_key.call(null,state));

var G__27391 = cljs.core.next.call(null,seq__27333_27384__$1);
var G__27392 = null;
var G__27393 = (0);
var G__27394 = (0);
seq__27333_27370 = G__27391;
chunk__27335_27371 = G__27392;
count__27336_27372 = G__27393;
i__27337_27373 = G__27394;
continue;
} else {
var G__27395 = cljs.core.next.call(null,seq__27333_27384__$1);
var G__27396 = null;
var G__27397 = (0);
var G__27398 = (0);
seq__27333_27370 = G__27395;
chunk__27335_27371 = G__27396;
count__27336_27372 = G__27397;
i__27337_27373 = G__27398;
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

//# sourceMappingURL=core.js.map?rel=1629049556350