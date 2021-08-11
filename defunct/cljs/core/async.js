// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args16261 = [];
var len__7296__auto___16267 = arguments.length;
var i__7297__auto___16268 = (0);
while(true){
if((i__7297__auto___16268 < len__7296__auto___16267)){
args16261.push((arguments[i__7297__auto___16268]));

var G__16269 = (i__7297__auto___16268 + (1));
i__7297__auto___16268 = G__16269;
continue;
} else {
}
break;
}

var G__16263 = args16261.length;
switch (G__16263) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16261.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16264 = (function (f,blockable,meta16265){
this.f = f;
this.blockable = blockable;
this.meta16265 = meta16265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16266,meta16265__$1){
var self__ = this;
var _16266__$1 = this;
return (new cljs.core.async.t_cljs$core$async16264(self__.f,self__.blockable,meta16265__$1));
});

cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16266){
var self__ = this;
var _16266__$1 = this;
return self__.meta16265;
});

cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16265], null);
});

cljs.core.async.t_cljs$core$async16264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16264";

cljs.core.async.t_cljs$core$async16264.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async16264");
});

cljs.core.async.__GT_t_cljs$core$async16264 = (function cljs$core$async$__GT_t_cljs$core$async16264(f__$1,blockable__$1,meta16265){
return (new cljs.core.async.t_cljs$core$async16264(f__$1,blockable__$1,meta16265));
});

}

return (new cljs.core.async.t_cljs$core$async16264(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args16273 = [];
var len__7296__auto___16276 = arguments.length;
var i__7297__auto___16277 = (0);
while(true){
if((i__7297__auto___16277 < len__7296__auto___16276)){
args16273.push((arguments[i__7297__auto___16277]));

var G__16278 = (i__7297__auto___16277 + (1));
i__7297__auto___16277 = G__16278;
continue;
} else {
}
break;
}

var G__16275 = args16273.length;
switch (G__16275) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16273.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args16280 = [];
var len__7296__auto___16283 = arguments.length;
var i__7297__auto___16284 = (0);
while(true){
if((i__7297__auto___16284 < len__7296__auto___16283)){
args16280.push((arguments[i__7297__auto___16284]));

var G__16285 = (i__7297__auto___16284 + (1));
i__7297__auto___16284 = G__16285;
continue;
} else {
}
break;
}

var G__16282 = args16280.length;
switch (G__16282) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16280.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args16287 = [];
var len__7296__auto___16290 = arguments.length;
var i__7297__auto___16291 = (0);
while(true){
if((i__7297__auto___16291 < len__7296__auto___16290)){
args16287.push((arguments[i__7297__auto___16291]));

var G__16292 = (i__7297__auto___16291 + (1));
i__7297__auto___16291 = G__16292;
continue;
} else {
}
break;
}

var G__16289 = args16287.length;
switch (G__16289) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16287.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16294 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16294) : fn1.call(null,val_16294));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16294,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16294) : fn1.call(null,val_16294));
});})(val_16294,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args16295 = [];
var len__7296__auto___16298 = arguments.length;
var i__7297__auto___16299 = (0);
while(true){
if((i__7297__auto___16299 < len__7296__auto___16298)){
args16295.push((arguments[i__7297__auto___16299]));

var G__16300 = (i__7297__auto___16299 + (1));
i__7297__auto___16299 = G__16300;
continue;
} else {
}
break;
}

var G__16297 = args16295.length;
switch (G__16297) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16295.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7136__auto___16302 = n;
var x_16303 = (0);
while(true){
if((x_16303 < n__7136__auto___16302)){
(a[x_16303] = (0));

var G__16304 = (x_16303 + (1));
x_16303 = G__16304;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__16305 = (i + (1));
i = G__16305;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async16309 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16309 = (function (alt_flag,flag,meta16310){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16310 = meta16310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16311,meta16310__$1){
var self__ = this;
var _16311__$1 = this;
return (new cljs.core.async.t_cljs$core$async16309(self__.alt_flag,self__.flag,meta16310__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16311){
var self__ = this;
var _16311__$1 = this;
return self__.meta16310;
});})(flag))
;

cljs.core.async.t_cljs$core$async16309.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async16309.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16309.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16310], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16309.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16309";

cljs.core.async.t_cljs$core$async16309.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async16309");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16309 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16309(alt_flag__$1,flag__$1,meta16310){
return (new cljs.core.async.t_cljs$core$async16309(alt_flag__$1,flag__$1,meta16310));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16309(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16315 = (function (alt_handler,flag,cb,meta16316){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16316 = meta16316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16317,meta16316__$1){
var self__ = this;
var _16317__$1 = this;
return (new cljs.core.async.t_cljs$core$async16315(self__.alt_handler,self__.flag,self__.cb,meta16316__$1));
});

cljs.core.async.t_cljs$core$async16315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16317){
var self__ = this;
var _16317__$1 = this;
return self__.meta16316;
});

cljs.core.async.t_cljs$core$async16315.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16316], null);
});

cljs.core.async.t_cljs$core$async16315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16315";

cljs.core.async.t_cljs$core$async16315.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async16315");
});

cljs.core.async.__GT_t_cljs$core$async16315 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16315(alt_handler__$1,flag__$1,cb__$1,meta16316){
return (new cljs.core.async.t_cljs$core$async16315(alt_handler__$1,flag__$1,cb__$1,meta16316));
});

}

return (new cljs.core.async.t_cljs$core$async16315(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16318_SHARP_){
var G__16322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16318_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16322) : fret.call(null,G__16322));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16319_SHARP_){
var G__16323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16319_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16323) : fret.call(null,G__16323));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6221__auto__ = wport;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16324 = (i + (1));
i = G__16324;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6221__auto__ = ret;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6209__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___16330 = arguments.length;
var i__7297__auto___16331 = (0);
while(true){
if((i__7297__auto___16331 < len__7296__auto___16330)){
args__7303__auto__.push((arguments[i__7297__auto___16331]));

var G__16332 = (i__7297__auto___16331 + (1));
i__7297__auto___16331 = G__16332;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16327){
var map__16328 = p__16327;
var map__16328__$1 = ((((!((map__16328 == null)))?((((map__16328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16328):map__16328);
var opts = map__16328__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16325){
var G__16326 = cljs.core.first(seq16325);
var seq16325__$1 = cljs.core.next(seq16325);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16326,seq16325__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args16333 = [];
var len__7296__auto___16383 = arguments.length;
var i__7297__auto___16384 = (0);
while(true){
if((i__7297__auto___16384 < len__7296__auto___16383)){
args16333.push((arguments[i__7297__auto___16384]));

var G__16385 = (i__7297__auto___16384 + (1));
i__7297__auto___16384 = G__16385;
continue;
} else {
}
break;
}

var G__16335 = args16333.length;
switch (G__16335) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16333.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16216__auto___16387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___16387){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___16387){
return (function (state_16359){
var state_val_16360 = (state_16359[(1)]);
if((state_val_16360 === (7))){
var inst_16355 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
var statearr_16361_16388 = state_16359__$1;
(statearr_16361_16388[(2)] = inst_16355);

(statearr_16361_16388[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (1))){
var state_16359__$1 = state_16359;
var statearr_16362_16389 = state_16359__$1;
(statearr_16362_16389[(2)] = null);

(statearr_16362_16389[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (4))){
var inst_16338 = (state_16359[(7)]);
var inst_16338__$1 = (state_16359[(2)]);
var inst_16339 = (inst_16338__$1 == null);
var state_16359__$1 = (function (){var statearr_16363 = state_16359;
(statearr_16363[(7)] = inst_16338__$1);

return statearr_16363;
})();
if(cljs.core.truth_(inst_16339)){
var statearr_16364_16390 = state_16359__$1;
(statearr_16364_16390[(1)] = (5));

} else {
var statearr_16365_16391 = state_16359__$1;
(statearr_16365_16391[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (13))){
var state_16359__$1 = state_16359;
var statearr_16366_16392 = state_16359__$1;
(statearr_16366_16392[(2)] = null);

(statearr_16366_16392[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (6))){
var inst_16338 = (state_16359[(7)]);
var state_16359__$1 = state_16359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16359__$1,(11),to,inst_16338);
} else {
if((state_val_16360 === (3))){
var inst_16357 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16359__$1,inst_16357);
} else {
if((state_val_16360 === (12))){
var state_16359__$1 = state_16359;
var statearr_16367_16393 = state_16359__$1;
(statearr_16367_16393[(2)] = null);

(statearr_16367_16393[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (2))){
var state_16359__$1 = state_16359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16359__$1,(4),from);
} else {
if((state_val_16360 === (11))){
var inst_16348 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
if(cljs.core.truth_(inst_16348)){
var statearr_16368_16394 = state_16359__$1;
(statearr_16368_16394[(1)] = (12));

} else {
var statearr_16369_16395 = state_16359__$1;
(statearr_16369_16395[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (9))){
var state_16359__$1 = state_16359;
var statearr_16370_16396 = state_16359__$1;
(statearr_16370_16396[(2)] = null);

(statearr_16370_16396[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (5))){
var state_16359__$1 = state_16359;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16371_16397 = state_16359__$1;
(statearr_16371_16397[(1)] = (8));

} else {
var statearr_16372_16398 = state_16359__$1;
(statearr_16372_16398[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (14))){
var inst_16353 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
var statearr_16373_16399 = state_16359__$1;
(statearr_16373_16399[(2)] = inst_16353);

(statearr_16373_16399[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (10))){
var inst_16345 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
var statearr_16374_16400 = state_16359__$1;
(statearr_16374_16400[(2)] = inst_16345);

(statearr_16374_16400[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16360 === (8))){
var inst_16342 = cljs.core.async.close_BANG_(to);
var state_16359__$1 = state_16359;
var statearr_16375_16401 = state_16359__$1;
(statearr_16375_16401[(2)] = inst_16342);

(statearr_16375_16401[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___16387))
;
return ((function (switch__16102__auto__,c__16216__auto___16387){
return (function() {
var cljs$core$async$state_machine__16103__auto__ = null;
var cljs$core$async$state_machine__16103__auto____0 = (function (){
var statearr_16379 = [null,null,null,null,null,null,null,null];
(statearr_16379[(0)] = cljs$core$async$state_machine__16103__auto__);

(statearr_16379[(1)] = (1));

return statearr_16379;
});
var cljs$core$async$state_machine__16103__auto____1 = (function (state_16359){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_16359);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e16380){if((e16380 instanceof Object)){
var ex__16106__auto__ = e16380;
var statearr_16381_16402 = state_16359;
(statearr_16381_16402[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16359);

return cljs.core.cst$kw$recur;
} else {
throw e16380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__16403 = state_16359;
state_16359 = G__16403;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$state_machine__16103__auto__ = function(state_16359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16103__auto____1.call(this,state_16359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16103__auto____0;
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16103__auto____1;
return cljs$core$async$state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___16387))
})();
var state__16218__auto__ = (function (){var statearr_16382 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_16382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___16387);

return statearr_16382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___16387))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16591){
var vec__16592 = p__16591;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16592,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16592,(1),null);
var job = vec__16592;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16216__auto___16778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___16778,res,vec__16592,v,p,job,jobs,results){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___16778,res,vec__16592,v,p,job,jobs,results){
return (function (state_16599){
var state_val_16600 = (state_16599[(1)]);
if((state_val_16600 === (1))){
var state_16599__$1 = state_16599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16599__$1,(2),res,v);
} else {
if((state_val_16600 === (2))){
var inst_16596 = (state_16599[(2)]);
var inst_16597 = cljs.core.async.close_BANG_(res);
var state_16599__$1 = (function (){var statearr_16601 = state_16599;
(statearr_16601[(7)] = inst_16596);

return statearr_16601;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16599__$1,inst_16597);
} else {
return null;
}
}
});})(c__16216__auto___16778,res,vec__16592,v,p,job,jobs,results))
;
return ((function (switch__16102__auto__,c__16216__auto___16778,res,vec__16592,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0 = (function (){
var statearr_16605 = [null,null,null,null,null,null,null,null];
(statearr_16605[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__);

(statearr_16605[(1)] = (1));

return statearr_16605;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1 = (function (state_16599){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_16599);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e16606){if((e16606 instanceof Object)){
var ex__16106__auto__ = e16606;
var statearr_16607_16779 = state_16599;
(statearr_16607_16779[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16599);

return cljs.core.cst$kw$recur;
} else {
throw e16606;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__16780 = state_16599;
state_16599 = G__16780;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__ = function(state_16599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1.call(this,state_16599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___16778,res,vec__16592,v,p,job,jobs,results))
})();
var state__16218__auto__ = (function (){var statearr_16608 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_16608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___16778);

return statearr_16608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___16778,res,vec__16592,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16609){
var vec__16610 = p__16609;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16610,(1),null);
var job = vec__16610;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7136__auto___16781 = n;
var __16782 = (0);
while(true){
if((__16782 < n__7136__auto___16781)){
var G__16613_16783 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16613_16783) {
case "compute":
var c__16216__auto___16785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16782,c__16216__auto___16785,G__16613_16783,n__7136__auto___16781,jobs,results,process,async){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (__16782,c__16216__auto___16785,G__16613_16783,n__7136__auto___16781,jobs,results,process,async){
return (function (state_16626){
var state_val_16627 = (state_16626[(1)]);
if((state_val_16627 === (1))){
var state_16626__$1 = state_16626;
var statearr_16628_16786 = state_16626__$1;
(statearr_16628_16786[(2)] = null);

(statearr_16628_16786[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (2))){
var state_16626__$1 = state_16626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16626__$1,(4),jobs);
} else {
if((state_val_16627 === (3))){
var inst_16624 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16626__$1,inst_16624);
} else {
if((state_val_16627 === (4))){
var inst_16616 = (state_16626[(2)]);
var inst_16617 = process(inst_16616);
var state_16626__$1 = state_16626;
if(cljs.core.truth_(inst_16617)){
var statearr_16629_16787 = state_16626__$1;
(statearr_16629_16787[(1)] = (5));

} else {
var statearr_16630_16788 = state_16626__$1;
(statearr_16630_16788[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (5))){
var state_16626__$1 = state_16626;
var statearr_16631_16789 = state_16626__$1;
(statearr_16631_16789[(2)] = null);

(statearr_16631_16789[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (6))){
var state_16626__$1 = state_16626;
var statearr_16632_16790 = state_16626__$1;
(statearr_16632_16790[(2)] = null);

(statearr_16632_16790[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (7))){
var inst_16622 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
var statearr_16633_16791 = state_16626__$1;
(statearr_16633_16791[(2)] = inst_16622);

(statearr_16633_16791[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16782,c__16216__auto___16785,G__16613_16783,n__7136__auto___16781,jobs,results,process,async))
;
return ((function (__16782,switch__16102__auto__,c__16216__auto___16785,G__16613_16783,n__7136__auto___16781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0 = (function (){
var statearr_16637 = [null,null,null,null,null,null,null];
(statearr_16637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__);

(statearr_16637[(1)] = (1));

return statearr_16637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1 = (function (state_16626){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_16626);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e16638){if((e16638 instanceof Object)){
var ex__16106__auto__ = e16638;
var statearr_16639_16792 = state_16626;
(statearr_16639_16792[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16626);

return cljs.core.cst$kw$recur;
} else {
throw e16638;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__16793 = state_16626;
state_16626 = G__16793;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__ = function(state_16626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1.call(this,state_16626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__;
})()
;})(__16782,switch__16102__auto__,c__16216__auto___16785,G__16613_16783,n__7136__auto___16781,jobs,results,process,async))
})();
var state__16218__auto__ = (function (){var statearr_16640 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_16640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___16785);

return statearr_16640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(__16782,c__16216__auto___16785,G__16613_16783,n__7136__auto___16781,jobs,results,process,async))
);


break;
case "async":
var c__16216__auto___16794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16782,c__16216__auto___16794,G__16613_16783,n__7136__auto___16781,jobs,results,process,async){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (__16782,c__16216__auto___16794,G__16613_16783,n__7136__auto___16781,jobs,results,process,async){
return (function (state_16653){
var state_val_16654 = (state_16653[(1)]);
if((state_val_16654 === (1))){
var state_16653__$1 = state_16653;
var statearr_16655_16795 = state_16653__$1;
(statearr_16655_16795[(2)] = null);

(statearr_16655_16795[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (2))){
var state_16653__$1 = state_16653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16653__$1,(4),jobs);
} else {
if((state_val_16654 === (3))){
var inst_16651 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16653__$1,inst_16651);
} else {
if((state_val_16654 === (4))){
var inst_16643 = (state_16653[(2)]);
var inst_16644 = async(inst_16643);
var state_16653__$1 = state_16653;
if(cljs.core.truth_(inst_16644)){
var statearr_16656_16796 = state_16653__$1;
(statearr_16656_16796[(1)] = (5));

} else {
var statearr_16657_16797 = state_16653__$1;
(statearr_16657_16797[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (5))){
var state_16653__$1 = state_16653;
var statearr_16658_16798 = state_16653__$1;
(statearr_16658_16798[(2)] = null);

(statearr_16658_16798[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (6))){
var state_16653__$1 = state_16653;
var statearr_16659_16799 = state_16653__$1;
(statearr_16659_16799[(2)] = null);

(statearr_16659_16799[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (7))){
var inst_16649 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16660_16800 = state_16653__$1;
(statearr_16660_16800[(2)] = inst_16649);

(statearr_16660_16800[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16782,c__16216__auto___16794,G__16613_16783,n__7136__auto___16781,jobs,results,process,async))
;
return ((function (__16782,switch__16102__auto__,c__16216__auto___16794,G__16613_16783,n__7136__auto___16781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0 = (function (){
var statearr_16664 = [null,null,null,null,null,null,null];
(statearr_16664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__);

(statearr_16664[(1)] = (1));

return statearr_16664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1 = (function (state_16653){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_16653);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e16665){if((e16665 instanceof Object)){
var ex__16106__auto__ = e16665;
var statearr_16666_16801 = state_16653;
(statearr_16666_16801[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16653);

return cljs.core.cst$kw$recur;
} else {
throw e16665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__16802 = state_16653;
state_16653 = G__16802;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__ = function(state_16653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1.call(this,state_16653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__;
})()
;})(__16782,switch__16102__auto__,c__16216__auto___16794,G__16613_16783,n__7136__auto___16781,jobs,results,process,async))
})();
var state__16218__auto__ = (function (){var statearr_16667 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_16667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___16794);

return statearr_16667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(__16782,c__16216__auto___16794,G__16613_16783,n__7136__auto___16781,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16803 = (__16782 + (1));
__16782 = G__16803;
continue;
} else {
}
break;
}

var c__16216__auto___16804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___16804,jobs,results,process,async){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___16804,jobs,results,process,async){
return (function (state_16689){
var state_val_16690 = (state_16689[(1)]);
if((state_val_16690 === (1))){
var state_16689__$1 = state_16689;
var statearr_16691_16805 = state_16689__$1;
(statearr_16691_16805[(2)] = null);

(statearr_16691_16805[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16690 === (2))){
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16689__$1,(4),from);
} else {
if((state_val_16690 === (3))){
var inst_16687 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16689__$1,inst_16687);
} else {
if((state_val_16690 === (4))){
var inst_16670 = (state_16689[(7)]);
var inst_16670__$1 = (state_16689[(2)]);
var inst_16671 = (inst_16670__$1 == null);
var state_16689__$1 = (function (){var statearr_16692 = state_16689;
(statearr_16692[(7)] = inst_16670__$1);

return statearr_16692;
})();
if(cljs.core.truth_(inst_16671)){
var statearr_16693_16806 = state_16689__$1;
(statearr_16693_16806[(1)] = (5));

} else {
var statearr_16694_16807 = state_16689__$1;
(statearr_16694_16807[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16690 === (5))){
var inst_16673 = cljs.core.async.close_BANG_(jobs);
var state_16689__$1 = state_16689;
var statearr_16695_16808 = state_16689__$1;
(statearr_16695_16808[(2)] = inst_16673);

(statearr_16695_16808[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16690 === (6))){
var inst_16675 = (state_16689[(8)]);
var inst_16670 = (state_16689[(7)]);
var inst_16675__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16676 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16677 = [inst_16670,inst_16675__$1];
var inst_16678 = (new cljs.core.PersistentVector(null,2,(5),inst_16676,inst_16677,null));
var state_16689__$1 = (function (){var statearr_16696 = state_16689;
(statearr_16696[(8)] = inst_16675__$1);

return statearr_16696;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16689__$1,(8),jobs,inst_16678);
} else {
if((state_val_16690 === (7))){
var inst_16685 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16697_16809 = state_16689__$1;
(statearr_16697_16809[(2)] = inst_16685);

(statearr_16697_16809[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16690 === (8))){
var inst_16675 = (state_16689[(8)]);
var inst_16680 = (state_16689[(2)]);
var state_16689__$1 = (function (){var statearr_16698 = state_16689;
(statearr_16698[(9)] = inst_16680);

return statearr_16698;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16689__$1,(9),results,inst_16675);
} else {
if((state_val_16690 === (9))){
var inst_16682 = (state_16689[(2)]);
var state_16689__$1 = (function (){var statearr_16699 = state_16689;
(statearr_16699[(10)] = inst_16682);

return statearr_16699;
})();
var statearr_16700_16810 = state_16689__$1;
(statearr_16700_16810[(2)] = null);

(statearr_16700_16810[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___16804,jobs,results,process,async))
;
return ((function (switch__16102__auto__,c__16216__auto___16804,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0 = (function (){
var statearr_16704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__);

(statearr_16704[(1)] = (1));

return statearr_16704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1 = (function (state_16689){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_16689);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e16705){if((e16705 instanceof Object)){
var ex__16106__auto__ = e16705;
var statearr_16706_16811 = state_16689;
(statearr_16706_16811[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16689);

return cljs.core.cst$kw$recur;
} else {
throw e16705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__16812 = state_16689;
state_16689 = G__16812;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__ = function(state_16689){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1.call(this,state_16689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___16804,jobs,results,process,async))
})();
var state__16218__auto__ = (function (){var statearr_16707 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_16707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___16804);

return statearr_16707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___16804,jobs,results,process,async))
);


var c__16216__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto__,jobs,results,process,async){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto__,jobs,results,process,async){
return (function (state_16745){
var state_val_16746 = (state_16745[(1)]);
if((state_val_16746 === (7))){
var inst_16741 = (state_16745[(2)]);
var state_16745__$1 = state_16745;
var statearr_16747_16813 = state_16745__$1;
(statearr_16747_16813[(2)] = inst_16741);

(statearr_16747_16813[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (20))){
var state_16745__$1 = state_16745;
var statearr_16748_16814 = state_16745__$1;
(statearr_16748_16814[(2)] = null);

(statearr_16748_16814[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (1))){
var state_16745__$1 = state_16745;
var statearr_16749_16815 = state_16745__$1;
(statearr_16749_16815[(2)] = null);

(statearr_16749_16815[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (4))){
var inst_16710 = (state_16745[(7)]);
var inst_16710__$1 = (state_16745[(2)]);
var inst_16711 = (inst_16710__$1 == null);
var state_16745__$1 = (function (){var statearr_16750 = state_16745;
(statearr_16750[(7)] = inst_16710__$1);

return statearr_16750;
})();
if(cljs.core.truth_(inst_16711)){
var statearr_16751_16816 = state_16745__$1;
(statearr_16751_16816[(1)] = (5));

} else {
var statearr_16752_16817 = state_16745__$1;
(statearr_16752_16817[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (15))){
var inst_16723 = (state_16745[(8)]);
var state_16745__$1 = state_16745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16745__$1,(18),to,inst_16723);
} else {
if((state_val_16746 === (21))){
var inst_16736 = (state_16745[(2)]);
var state_16745__$1 = state_16745;
var statearr_16753_16818 = state_16745__$1;
(statearr_16753_16818[(2)] = inst_16736);

(statearr_16753_16818[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (13))){
var inst_16738 = (state_16745[(2)]);
var state_16745__$1 = (function (){var statearr_16754 = state_16745;
(statearr_16754[(9)] = inst_16738);

return statearr_16754;
})();
var statearr_16755_16819 = state_16745__$1;
(statearr_16755_16819[(2)] = null);

(statearr_16755_16819[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (6))){
var inst_16710 = (state_16745[(7)]);
var state_16745__$1 = state_16745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16745__$1,(11),inst_16710);
} else {
if((state_val_16746 === (17))){
var inst_16731 = (state_16745[(2)]);
var state_16745__$1 = state_16745;
if(cljs.core.truth_(inst_16731)){
var statearr_16756_16820 = state_16745__$1;
(statearr_16756_16820[(1)] = (19));

} else {
var statearr_16757_16821 = state_16745__$1;
(statearr_16757_16821[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (3))){
var inst_16743 = (state_16745[(2)]);
var state_16745__$1 = state_16745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16745__$1,inst_16743);
} else {
if((state_val_16746 === (12))){
var inst_16720 = (state_16745[(10)]);
var state_16745__$1 = state_16745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16745__$1,(14),inst_16720);
} else {
if((state_val_16746 === (2))){
var state_16745__$1 = state_16745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16745__$1,(4),results);
} else {
if((state_val_16746 === (19))){
var state_16745__$1 = state_16745;
var statearr_16758_16822 = state_16745__$1;
(statearr_16758_16822[(2)] = null);

(statearr_16758_16822[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (11))){
var inst_16720 = (state_16745[(2)]);
var state_16745__$1 = (function (){var statearr_16759 = state_16745;
(statearr_16759[(10)] = inst_16720);

return statearr_16759;
})();
var statearr_16760_16823 = state_16745__$1;
(statearr_16760_16823[(2)] = null);

(statearr_16760_16823[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (9))){
var state_16745__$1 = state_16745;
var statearr_16761_16824 = state_16745__$1;
(statearr_16761_16824[(2)] = null);

(statearr_16761_16824[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (5))){
var state_16745__$1 = state_16745;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16762_16825 = state_16745__$1;
(statearr_16762_16825[(1)] = (8));

} else {
var statearr_16763_16826 = state_16745__$1;
(statearr_16763_16826[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (14))){
var inst_16725 = (state_16745[(11)]);
var inst_16723 = (state_16745[(8)]);
var inst_16723__$1 = (state_16745[(2)]);
var inst_16724 = (inst_16723__$1 == null);
var inst_16725__$1 = cljs.core.not(inst_16724);
var state_16745__$1 = (function (){var statearr_16764 = state_16745;
(statearr_16764[(11)] = inst_16725__$1);

(statearr_16764[(8)] = inst_16723__$1);

return statearr_16764;
})();
if(inst_16725__$1){
var statearr_16765_16827 = state_16745__$1;
(statearr_16765_16827[(1)] = (15));

} else {
var statearr_16766_16828 = state_16745__$1;
(statearr_16766_16828[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (16))){
var inst_16725 = (state_16745[(11)]);
var state_16745__$1 = state_16745;
var statearr_16767_16829 = state_16745__$1;
(statearr_16767_16829[(2)] = inst_16725);

(statearr_16767_16829[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (10))){
var inst_16717 = (state_16745[(2)]);
var state_16745__$1 = state_16745;
var statearr_16768_16830 = state_16745__$1;
(statearr_16768_16830[(2)] = inst_16717);

(statearr_16768_16830[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (18))){
var inst_16728 = (state_16745[(2)]);
var state_16745__$1 = state_16745;
var statearr_16769_16831 = state_16745__$1;
(statearr_16769_16831[(2)] = inst_16728);

(statearr_16769_16831[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16746 === (8))){
var inst_16714 = cljs.core.async.close_BANG_(to);
var state_16745__$1 = state_16745;
var statearr_16770_16832 = state_16745__$1;
(statearr_16770_16832[(2)] = inst_16714);

(statearr_16770_16832[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto__,jobs,results,process,async))
;
return ((function (switch__16102__auto__,c__16216__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0 = (function (){
var statearr_16774 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__);

(statearr_16774[(1)] = (1));

return statearr_16774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1 = (function (state_16745){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_16745);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e16775){if((e16775 instanceof Object)){
var ex__16106__auto__ = e16775;
var statearr_16776_16833 = state_16745;
(statearr_16776_16833[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16745);

return cljs.core.cst$kw$recur;
} else {
throw e16775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__16834 = state_16745;
state_16745 = G__16834;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__ = function(state_16745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1.call(this,state_16745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto__,jobs,results,process,async))
})();
var state__16218__auto__ = (function (){var statearr_16777 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_16777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_16777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto__,jobs,results,process,async))
);

return c__16216__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args16835 = [];
var len__7296__auto___16838 = arguments.length;
var i__7297__auto___16839 = (0);
while(true){
if((i__7297__auto___16839 < len__7296__auto___16838)){
args16835.push((arguments[i__7297__auto___16839]));

var G__16840 = (i__7297__auto___16839 + (1));
i__7297__auto___16839 = G__16840;
continue;
} else {
}
break;
}

var G__16837 = args16835.length;
switch (G__16837) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16835.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args16842 = [];
var len__7296__auto___16845 = arguments.length;
var i__7297__auto___16846 = (0);
while(true){
if((i__7297__auto___16846 < len__7296__auto___16845)){
args16842.push((arguments[i__7297__auto___16846]));

var G__16847 = (i__7297__auto___16846 + (1));
i__7297__auto___16846 = G__16847;
continue;
} else {
}
break;
}

var G__16844 = args16842.length;
switch (G__16844) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16842.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args16849 = [];
var len__7296__auto___16902 = arguments.length;
var i__7297__auto___16903 = (0);
while(true){
if((i__7297__auto___16903 < len__7296__auto___16902)){
args16849.push((arguments[i__7297__auto___16903]));

var G__16904 = (i__7297__auto___16903 + (1));
i__7297__auto___16903 = G__16904;
continue;
} else {
}
break;
}

var G__16851 = args16849.length;
switch (G__16851) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16849.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16216__auto___16906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___16906,tc,fc){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___16906,tc,fc){
return (function (state_16877){
var state_val_16878 = (state_16877[(1)]);
if((state_val_16878 === (7))){
var inst_16873 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
var statearr_16879_16907 = state_16877__$1;
(statearr_16879_16907[(2)] = inst_16873);

(statearr_16879_16907[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16878 === (1))){
var state_16877__$1 = state_16877;
var statearr_16880_16908 = state_16877__$1;
(statearr_16880_16908[(2)] = null);

(statearr_16880_16908[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16878 === (4))){
var inst_16854 = (state_16877[(7)]);
var inst_16854__$1 = (state_16877[(2)]);
var inst_16855 = (inst_16854__$1 == null);
var state_16877__$1 = (function (){var statearr_16881 = state_16877;
(statearr_16881[(7)] = inst_16854__$1);

return statearr_16881;
})();
if(cljs.core.truth_(inst_16855)){
var statearr_16882_16909 = state_16877__$1;
(statearr_16882_16909[(1)] = (5));

} else {
var statearr_16883_16910 = state_16877__$1;
(statearr_16883_16910[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16878 === (13))){
var state_16877__$1 = state_16877;
var statearr_16884_16911 = state_16877__$1;
(statearr_16884_16911[(2)] = null);

(statearr_16884_16911[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16878 === (6))){
var inst_16854 = (state_16877[(7)]);
var inst_16860 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16854) : p.call(null,inst_16854));
var state_16877__$1 = state_16877;
if(cljs.core.truth_(inst_16860)){
var statearr_16885_16912 = state_16877__$1;
(statearr_16885_16912[(1)] = (9));

} else {
var statearr_16886_16913 = state_16877__$1;
(statearr_16886_16913[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16878 === (3))){
var inst_16875 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16877__$1,inst_16875);
} else {
if((state_val_16878 === (12))){
var state_16877__$1 = state_16877;
var statearr_16887_16914 = state_16877__$1;
(statearr_16887_16914[(2)] = null);

(statearr_16887_16914[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16878 === (2))){
var state_16877__$1 = state_16877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16877__$1,(4),ch);
} else {
if((state_val_16878 === (11))){
var inst_16854 = (state_16877[(7)]);
var inst_16864 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16877__$1,(8),inst_16864,inst_16854);
} else {
if((state_val_16878 === (9))){
var state_16877__$1 = state_16877;
var statearr_16888_16915 = state_16877__$1;
(statearr_16888_16915[(2)] = tc);

(statearr_16888_16915[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16878 === (5))){
var inst_16857 = cljs.core.async.close_BANG_(tc);
var inst_16858 = cljs.core.async.close_BANG_(fc);
var state_16877__$1 = (function (){var statearr_16889 = state_16877;
(statearr_16889[(8)] = inst_16857);

return statearr_16889;
})();
var statearr_16890_16916 = state_16877__$1;
(statearr_16890_16916[(2)] = inst_16858);

(statearr_16890_16916[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16878 === (14))){
var inst_16871 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
var statearr_16891_16917 = state_16877__$1;
(statearr_16891_16917[(2)] = inst_16871);

(statearr_16891_16917[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16878 === (10))){
var state_16877__$1 = state_16877;
var statearr_16892_16918 = state_16877__$1;
(statearr_16892_16918[(2)] = fc);

(statearr_16892_16918[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16878 === (8))){
var inst_16866 = (state_16877[(2)]);
var state_16877__$1 = state_16877;
if(cljs.core.truth_(inst_16866)){
var statearr_16893_16919 = state_16877__$1;
(statearr_16893_16919[(1)] = (12));

} else {
var statearr_16894_16920 = state_16877__$1;
(statearr_16894_16920[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___16906,tc,fc))
;
return ((function (switch__16102__auto__,c__16216__auto___16906,tc,fc){
return (function() {
var cljs$core$async$state_machine__16103__auto__ = null;
var cljs$core$async$state_machine__16103__auto____0 = (function (){
var statearr_16898 = [null,null,null,null,null,null,null,null,null];
(statearr_16898[(0)] = cljs$core$async$state_machine__16103__auto__);

(statearr_16898[(1)] = (1));

return statearr_16898;
});
var cljs$core$async$state_machine__16103__auto____1 = (function (state_16877){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_16877);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e16899){if((e16899 instanceof Object)){
var ex__16106__auto__ = e16899;
var statearr_16900_16921 = state_16877;
(statearr_16900_16921[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16877);

return cljs.core.cst$kw$recur;
} else {
throw e16899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__16922 = state_16877;
state_16877 = G__16922;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$state_machine__16103__auto__ = function(state_16877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16103__auto____1.call(this,state_16877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16103__auto____0;
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16103__auto____1;
return cljs$core$async$state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___16906,tc,fc))
})();
var state__16218__auto__ = (function (){var statearr_16901 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_16901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___16906);

return statearr_16901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___16906,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16216__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto__){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto__){
return (function (state_16986){
var state_val_16987 = (state_16986[(1)]);
if((state_val_16987 === (7))){
var inst_16982 = (state_16986[(2)]);
var state_16986__$1 = state_16986;
var statearr_16988_17009 = state_16986__$1;
(statearr_16988_17009[(2)] = inst_16982);

(statearr_16988_17009[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16987 === (1))){
var inst_16966 = init;
var state_16986__$1 = (function (){var statearr_16989 = state_16986;
(statearr_16989[(7)] = inst_16966);

return statearr_16989;
})();
var statearr_16990_17010 = state_16986__$1;
(statearr_16990_17010[(2)] = null);

(statearr_16990_17010[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16987 === (4))){
var inst_16969 = (state_16986[(8)]);
var inst_16969__$1 = (state_16986[(2)]);
var inst_16970 = (inst_16969__$1 == null);
var state_16986__$1 = (function (){var statearr_16991 = state_16986;
(statearr_16991[(8)] = inst_16969__$1);

return statearr_16991;
})();
if(cljs.core.truth_(inst_16970)){
var statearr_16992_17011 = state_16986__$1;
(statearr_16992_17011[(1)] = (5));

} else {
var statearr_16993_17012 = state_16986__$1;
(statearr_16993_17012[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16987 === (6))){
var inst_16973 = (state_16986[(9)]);
var inst_16969 = (state_16986[(8)]);
var inst_16966 = (state_16986[(7)]);
var inst_16973__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16966,inst_16969) : f.call(null,inst_16966,inst_16969));
var inst_16974 = cljs.core.reduced_QMARK_(inst_16973__$1);
var state_16986__$1 = (function (){var statearr_16994 = state_16986;
(statearr_16994[(9)] = inst_16973__$1);

return statearr_16994;
})();
if(inst_16974){
var statearr_16995_17013 = state_16986__$1;
(statearr_16995_17013[(1)] = (8));

} else {
var statearr_16996_17014 = state_16986__$1;
(statearr_16996_17014[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16987 === (3))){
var inst_16984 = (state_16986[(2)]);
var state_16986__$1 = state_16986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16986__$1,inst_16984);
} else {
if((state_val_16987 === (2))){
var state_16986__$1 = state_16986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16986__$1,(4),ch);
} else {
if((state_val_16987 === (9))){
var inst_16973 = (state_16986[(9)]);
var inst_16966 = inst_16973;
var state_16986__$1 = (function (){var statearr_16997 = state_16986;
(statearr_16997[(7)] = inst_16966);

return statearr_16997;
})();
var statearr_16998_17015 = state_16986__$1;
(statearr_16998_17015[(2)] = null);

(statearr_16998_17015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16987 === (5))){
var inst_16966 = (state_16986[(7)]);
var state_16986__$1 = state_16986;
var statearr_16999_17016 = state_16986__$1;
(statearr_16999_17016[(2)] = inst_16966);

(statearr_16999_17016[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16987 === (10))){
var inst_16980 = (state_16986[(2)]);
var state_16986__$1 = state_16986;
var statearr_17000_17017 = state_16986__$1;
(statearr_17000_17017[(2)] = inst_16980);

(statearr_17000_17017[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16987 === (8))){
var inst_16973 = (state_16986[(9)]);
var inst_16976 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_16973) : cljs.core.deref.call(null,inst_16973));
var state_16986__$1 = state_16986;
var statearr_17001_17018 = state_16986__$1;
(statearr_17001_17018[(2)] = inst_16976);

(statearr_17001_17018[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto__))
;
return ((function (switch__16102__auto__,c__16216__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16103__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16103__auto____0 = (function (){
var statearr_17005 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17005[(0)] = cljs$core$async$reduce_$_state_machine__16103__auto__);

(statearr_17005[(1)] = (1));

return statearr_17005;
});
var cljs$core$async$reduce_$_state_machine__16103__auto____1 = (function (state_16986){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_16986);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e17006){if((e17006 instanceof Object)){
var ex__16106__auto__ = e17006;
var statearr_17007_17019 = state_16986;
(statearr_17007_17019[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16986);

return cljs.core.cst$kw$recur;
} else {
throw e17006;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__17020 = state_16986;
state_16986 = G__17020;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16103__auto__ = function(state_16986){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16103__auto____1.call(this,state_16986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16103__auto____0;
cljs$core$async$reduce_$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16103__auto____1;
return cljs$core$async$reduce_$_state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto__))
})();
var state__16218__auto__ = (function (){var statearr_17008 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_17008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_17008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto__))
);

return c__16216__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args17021 = [];
var len__7296__auto___17073 = arguments.length;
var i__7297__auto___17074 = (0);
while(true){
if((i__7297__auto___17074 < len__7296__auto___17073)){
args17021.push((arguments[i__7297__auto___17074]));

var G__17075 = (i__7297__auto___17074 + (1));
i__7297__auto___17074 = G__17075;
continue;
} else {
}
break;
}

var G__17023 = args17021.length;
switch (G__17023) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17021.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16216__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto__){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto__){
return (function (state_17048){
var state_val_17049 = (state_17048[(1)]);
if((state_val_17049 === (7))){
var inst_17030 = (state_17048[(2)]);
var state_17048__$1 = state_17048;
var statearr_17050_17077 = state_17048__$1;
(statearr_17050_17077[(2)] = inst_17030);

(statearr_17050_17077[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17049 === (1))){
var inst_17024 = cljs.core.seq(coll);
var inst_17025 = inst_17024;
var state_17048__$1 = (function (){var statearr_17051 = state_17048;
(statearr_17051[(7)] = inst_17025);

return statearr_17051;
})();
var statearr_17052_17078 = state_17048__$1;
(statearr_17052_17078[(2)] = null);

(statearr_17052_17078[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17049 === (4))){
var inst_17025 = (state_17048[(7)]);
var inst_17028 = cljs.core.first(inst_17025);
var state_17048__$1 = state_17048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17048__$1,(7),ch,inst_17028);
} else {
if((state_val_17049 === (13))){
var inst_17042 = (state_17048[(2)]);
var state_17048__$1 = state_17048;
var statearr_17053_17079 = state_17048__$1;
(statearr_17053_17079[(2)] = inst_17042);

(statearr_17053_17079[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17049 === (6))){
var inst_17033 = (state_17048[(2)]);
var state_17048__$1 = state_17048;
if(cljs.core.truth_(inst_17033)){
var statearr_17054_17080 = state_17048__$1;
(statearr_17054_17080[(1)] = (8));

} else {
var statearr_17055_17081 = state_17048__$1;
(statearr_17055_17081[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17049 === (3))){
var inst_17046 = (state_17048[(2)]);
var state_17048__$1 = state_17048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17048__$1,inst_17046);
} else {
if((state_val_17049 === (12))){
var state_17048__$1 = state_17048;
var statearr_17056_17082 = state_17048__$1;
(statearr_17056_17082[(2)] = null);

(statearr_17056_17082[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17049 === (2))){
var inst_17025 = (state_17048[(7)]);
var state_17048__$1 = state_17048;
if(cljs.core.truth_(inst_17025)){
var statearr_17057_17083 = state_17048__$1;
(statearr_17057_17083[(1)] = (4));

} else {
var statearr_17058_17084 = state_17048__$1;
(statearr_17058_17084[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17049 === (11))){
var inst_17039 = cljs.core.async.close_BANG_(ch);
var state_17048__$1 = state_17048;
var statearr_17059_17085 = state_17048__$1;
(statearr_17059_17085[(2)] = inst_17039);

(statearr_17059_17085[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17049 === (9))){
var state_17048__$1 = state_17048;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17060_17086 = state_17048__$1;
(statearr_17060_17086[(1)] = (11));

} else {
var statearr_17061_17087 = state_17048__$1;
(statearr_17061_17087[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17049 === (5))){
var inst_17025 = (state_17048[(7)]);
var state_17048__$1 = state_17048;
var statearr_17062_17088 = state_17048__$1;
(statearr_17062_17088[(2)] = inst_17025);

(statearr_17062_17088[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17049 === (10))){
var inst_17044 = (state_17048[(2)]);
var state_17048__$1 = state_17048;
var statearr_17063_17089 = state_17048__$1;
(statearr_17063_17089[(2)] = inst_17044);

(statearr_17063_17089[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17049 === (8))){
var inst_17025 = (state_17048[(7)]);
var inst_17035 = cljs.core.next(inst_17025);
var inst_17025__$1 = inst_17035;
var state_17048__$1 = (function (){var statearr_17064 = state_17048;
(statearr_17064[(7)] = inst_17025__$1);

return statearr_17064;
})();
var statearr_17065_17090 = state_17048__$1;
(statearr_17065_17090[(2)] = null);

(statearr_17065_17090[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto__))
;
return ((function (switch__16102__auto__,c__16216__auto__){
return (function() {
var cljs$core$async$state_machine__16103__auto__ = null;
var cljs$core$async$state_machine__16103__auto____0 = (function (){
var statearr_17069 = [null,null,null,null,null,null,null,null];
(statearr_17069[(0)] = cljs$core$async$state_machine__16103__auto__);

(statearr_17069[(1)] = (1));

return statearr_17069;
});
var cljs$core$async$state_machine__16103__auto____1 = (function (state_17048){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_17048);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e17070){if((e17070 instanceof Object)){
var ex__16106__auto__ = e17070;
var statearr_17071_17091 = state_17048;
(statearr_17071_17091[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17048);

return cljs.core.cst$kw$recur;
} else {
throw e17070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__17092 = state_17048;
state_17048 = G__17092;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$state_machine__16103__auto__ = function(state_17048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16103__auto____1.call(this,state_17048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16103__auto____0;
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16103__auto____1;
return cljs$core$async$state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto__))
})();
var state__16218__auto__ = (function (){var statearr_17072 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_17072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_17072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto__))
);

return c__16216__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6884__auto__ = (((_ == null))?null:_);
var m__6885__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__6885__auto__.call(null,_));
} else {
var m__6885__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__6885__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6885__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__6885__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6885__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6885__auto__.call(null,m,ch));
} else {
var m__6885__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6885__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6885__auto__.call(null,m));
} else {
var m__6885__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6885__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__17321 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17321) : cljs.core.atom.call(null,G__17321));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17322 = (function (mult,ch,cs,meta17323){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17323 = meta17323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17324,meta17323__$1){
var self__ = this;
var _17324__$1 = this;
return (new cljs.core.async.t_cljs$core$async17322(self__.mult,self__.ch,self__.cs,meta17323__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17324){
var self__ = this;
var _17324__$1 = this;
return self__.meta17323;
});})(cs))
;

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17325_17549 = self__.cs;
var G__17326_17550 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17325_17549,G__17326_17550) : cljs.core.reset_BANG_.call(null,G__17325_17549,G__17326_17550));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17322.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17323], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17322";

cljs.core.async.t_cljs$core$async17322.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async17322");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17322 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17322(mult__$1,ch__$1,cs__$1,meta17323){
return (new cljs.core.async.t_cljs$core$async17322(mult__$1,ch__$1,cs__$1,meta17323));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17322(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16216__auto___17551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___17551,cs,m,dchan,dctr,done){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___17551,cs,m,dchan,dctr,done){
return (function (state_17461){
var state_val_17462 = (state_17461[(1)]);
if((state_val_17462 === (7))){
var inst_17457 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17463_17552 = state_17461__$1;
(statearr_17463_17552[(2)] = inst_17457);

(statearr_17463_17552[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (20))){
var inst_17360 = (state_17461[(7)]);
var inst_17372 = cljs.core.first(inst_17360);
var inst_17373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17372,(0),null);
var inst_17374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17372,(1),null);
var state_17461__$1 = (function (){var statearr_17464 = state_17461;
(statearr_17464[(8)] = inst_17373);

return statearr_17464;
})();
if(cljs.core.truth_(inst_17374)){
var statearr_17465_17553 = state_17461__$1;
(statearr_17465_17553[(1)] = (22));

} else {
var statearr_17466_17554 = state_17461__$1;
(statearr_17466_17554[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (27))){
var inst_17329 = (state_17461[(9)]);
var inst_17404 = (state_17461[(10)]);
var inst_17402 = (state_17461[(11)]);
var inst_17409 = (state_17461[(12)]);
var inst_17409__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17402,inst_17404);
var inst_17410 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17409__$1,inst_17329,done);
var state_17461__$1 = (function (){var statearr_17467 = state_17461;
(statearr_17467[(12)] = inst_17409__$1);

return statearr_17467;
})();
if(cljs.core.truth_(inst_17410)){
var statearr_17468_17555 = state_17461__$1;
(statearr_17468_17555[(1)] = (30));

} else {
var statearr_17469_17556 = state_17461__$1;
(statearr_17469_17556[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (1))){
var state_17461__$1 = state_17461;
var statearr_17470_17557 = state_17461__$1;
(statearr_17470_17557[(2)] = null);

(statearr_17470_17557[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (24))){
var inst_17360 = (state_17461[(7)]);
var inst_17379 = (state_17461[(2)]);
var inst_17380 = cljs.core.next(inst_17360);
var inst_17338 = inst_17380;
var inst_17339 = null;
var inst_17340 = (0);
var inst_17341 = (0);
var state_17461__$1 = (function (){var statearr_17471 = state_17461;
(statearr_17471[(13)] = inst_17338);

(statearr_17471[(14)] = inst_17379);

(statearr_17471[(15)] = inst_17341);

(statearr_17471[(16)] = inst_17340);

(statearr_17471[(17)] = inst_17339);

return statearr_17471;
})();
var statearr_17472_17558 = state_17461__$1;
(statearr_17472_17558[(2)] = null);

(statearr_17472_17558[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (39))){
var state_17461__$1 = state_17461;
var statearr_17476_17559 = state_17461__$1;
(statearr_17476_17559[(2)] = null);

(statearr_17476_17559[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (4))){
var inst_17329 = (state_17461[(9)]);
var inst_17329__$1 = (state_17461[(2)]);
var inst_17330 = (inst_17329__$1 == null);
var state_17461__$1 = (function (){var statearr_17477 = state_17461;
(statearr_17477[(9)] = inst_17329__$1);

return statearr_17477;
})();
if(cljs.core.truth_(inst_17330)){
var statearr_17478_17560 = state_17461__$1;
(statearr_17478_17560[(1)] = (5));

} else {
var statearr_17479_17561 = state_17461__$1;
(statearr_17479_17561[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (15))){
var inst_17338 = (state_17461[(13)]);
var inst_17341 = (state_17461[(15)]);
var inst_17340 = (state_17461[(16)]);
var inst_17339 = (state_17461[(17)]);
var inst_17356 = (state_17461[(2)]);
var inst_17357 = (inst_17341 + (1));
var tmp17473 = inst_17338;
var tmp17474 = inst_17340;
var tmp17475 = inst_17339;
var inst_17338__$1 = tmp17473;
var inst_17339__$1 = tmp17475;
var inst_17340__$1 = tmp17474;
var inst_17341__$1 = inst_17357;
var state_17461__$1 = (function (){var statearr_17480 = state_17461;
(statearr_17480[(13)] = inst_17338__$1);

(statearr_17480[(15)] = inst_17341__$1);

(statearr_17480[(16)] = inst_17340__$1);

(statearr_17480[(17)] = inst_17339__$1);

(statearr_17480[(18)] = inst_17356);

return statearr_17480;
})();
var statearr_17481_17562 = state_17461__$1;
(statearr_17481_17562[(2)] = null);

(statearr_17481_17562[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (21))){
var inst_17383 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17485_17563 = state_17461__$1;
(statearr_17485_17563[(2)] = inst_17383);

(statearr_17485_17563[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (31))){
var inst_17409 = (state_17461[(12)]);
var inst_17413 = done(null);
var inst_17414 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17409);
var state_17461__$1 = (function (){var statearr_17486 = state_17461;
(statearr_17486[(19)] = inst_17413);

return statearr_17486;
})();
var statearr_17487_17564 = state_17461__$1;
(statearr_17487_17564[(2)] = inst_17414);

(statearr_17487_17564[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (32))){
var inst_17404 = (state_17461[(10)]);
var inst_17402 = (state_17461[(11)]);
var inst_17403 = (state_17461[(20)]);
var inst_17401 = (state_17461[(21)]);
var inst_17416 = (state_17461[(2)]);
var inst_17417 = (inst_17404 + (1));
var tmp17482 = inst_17402;
var tmp17483 = inst_17403;
var tmp17484 = inst_17401;
var inst_17401__$1 = tmp17484;
var inst_17402__$1 = tmp17482;
var inst_17403__$1 = tmp17483;
var inst_17404__$1 = inst_17417;
var state_17461__$1 = (function (){var statearr_17488 = state_17461;
(statearr_17488[(10)] = inst_17404__$1);

(statearr_17488[(11)] = inst_17402__$1);

(statearr_17488[(20)] = inst_17403__$1);

(statearr_17488[(22)] = inst_17416);

(statearr_17488[(21)] = inst_17401__$1);

return statearr_17488;
})();
var statearr_17489_17565 = state_17461__$1;
(statearr_17489_17565[(2)] = null);

(statearr_17489_17565[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (40))){
var inst_17429 = (state_17461[(23)]);
var inst_17433 = done(null);
var inst_17434 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17429);
var state_17461__$1 = (function (){var statearr_17490 = state_17461;
(statearr_17490[(24)] = inst_17433);

return statearr_17490;
})();
var statearr_17491_17566 = state_17461__$1;
(statearr_17491_17566[(2)] = inst_17434);

(statearr_17491_17566[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (33))){
var inst_17420 = (state_17461[(25)]);
var inst_17422 = cljs.core.chunked_seq_QMARK_(inst_17420);
var state_17461__$1 = state_17461;
if(inst_17422){
var statearr_17492_17567 = state_17461__$1;
(statearr_17492_17567[(1)] = (36));

} else {
var statearr_17493_17568 = state_17461__$1;
(statearr_17493_17568[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (13))){
var inst_17350 = (state_17461[(26)]);
var inst_17353 = cljs.core.async.close_BANG_(inst_17350);
var state_17461__$1 = state_17461;
var statearr_17494_17569 = state_17461__$1;
(statearr_17494_17569[(2)] = inst_17353);

(statearr_17494_17569[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (22))){
var inst_17373 = (state_17461[(8)]);
var inst_17376 = cljs.core.async.close_BANG_(inst_17373);
var state_17461__$1 = state_17461;
var statearr_17495_17570 = state_17461__$1;
(statearr_17495_17570[(2)] = inst_17376);

(statearr_17495_17570[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (36))){
var inst_17420 = (state_17461[(25)]);
var inst_17424 = cljs.core.chunk_first(inst_17420);
var inst_17425 = cljs.core.chunk_rest(inst_17420);
var inst_17426 = cljs.core.count(inst_17424);
var inst_17401 = inst_17425;
var inst_17402 = inst_17424;
var inst_17403 = inst_17426;
var inst_17404 = (0);
var state_17461__$1 = (function (){var statearr_17496 = state_17461;
(statearr_17496[(10)] = inst_17404);

(statearr_17496[(11)] = inst_17402);

(statearr_17496[(20)] = inst_17403);

(statearr_17496[(21)] = inst_17401);

return statearr_17496;
})();
var statearr_17497_17571 = state_17461__$1;
(statearr_17497_17571[(2)] = null);

(statearr_17497_17571[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (41))){
var inst_17420 = (state_17461[(25)]);
var inst_17436 = (state_17461[(2)]);
var inst_17437 = cljs.core.next(inst_17420);
var inst_17401 = inst_17437;
var inst_17402 = null;
var inst_17403 = (0);
var inst_17404 = (0);
var state_17461__$1 = (function (){var statearr_17498 = state_17461;
(statearr_17498[(10)] = inst_17404);

(statearr_17498[(11)] = inst_17402);

(statearr_17498[(20)] = inst_17403);

(statearr_17498[(27)] = inst_17436);

(statearr_17498[(21)] = inst_17401);

return statearr_17498;
})();
var statearr_17499_17572 = state_17461__$1;
(statearr_17499_17572[(2)] = null);

(statearr_17499_17572[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (43))){
var state_17461__$1 = state_17461;
var statearr_17500_17573 = state_17461__$1;
(statearr_17500_17573[(2)] = null);

(statearr_17500_17573[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (29))){
var inst_17445 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17501_17574 = state_17461__$1;
(statearr_17501_17574[(2)] = inst_17445);

(statearr_17501_17574[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (44))){
var inst_17454 = (state_17461[(2)]);
var state_17461__$1 = (function (){var statearr_17502 = state_17461;
(statearr_17502[(28)] = inst_17454);

return statearr_17502;
})();
var statearr_17503_17575 = state_17461__$1;
(statearr_17503_17575[(2)] = null);

(statearr_17503_17575[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (6))){
var inst_17393 = (state_17461[(29)]);
var inst_17392 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17393__$1 = cljs.core.keys(inst_17392);
var inst_17394 = cljs.core.count(inst_17393__$1);
var inst_17395 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_17394) : cljs.core.reset_BANG_.call(null,dctr,inst_17394));
var inst_17400 = cljs.core.seq(inst_17393__$1);
var inst_17401 = inst_17400;
var inst_17402 = null;
var inst_17403 = (0);
var inst_17404 = (0);
var state_17461__$1 = (function (){var statearr_17504 = state_17461;
(statearr_17504[(10)] = inst_17404);

(statearr_17504[(11)] = inst_17402);

(statearr_17504[(30)] = inst_17395);

(statearr_17504[(20)] = inst_17403);

(statearr_17504[(29)] = inst_17393__$1);

(statearr_17504[(21)] = inst_17401);

return statearr_17504;
})();
var statearr_17505_17576 = state_17461__$1;
(statearr_17505_17576[(2)] = null);

(statearr_17505_17576[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (28))){
var inst_17420 = (state_17461[(25)]);
var inst_17401 = (state_17461[(21)]);
var inst_17420__$1 = cljs.core.seq(inst_17401);
var state_17461__$1 = (function (){var statearr_17506 = state_17461;
(statearr_17506[(25)] = inst_17420__$1);

return statearr_17506;
})();
if(inst_17420__$1){
var statearr_17507_17577 = state_17461__$1;
(statearr_17507_17577[(1)] = (33));

} else {
var statearr_17508_17578 = state_17461__$1;
(statearr_17508_17578[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (25))){
var inst_17404 = (state_17461[(10)]);
var inst_17403 = (state_17461[(20)]);
var inst_17406 = (inst_17404 < inst_17403);
var inst_17407 = inst_17406;
var state_17461__$1 = state_17461;
if(cljs.core.truth_(inst_17407)){
var statearr_17509_17579 = state_17461__$1;
(statearr_17509_17579[(1)] = (27));

} else {
var statearr_17510_17580 = state_17461__$1;
(statearr_17510_17580[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (34))){
var state_17461__$1 = state_17461;
var statearr_17511_17581 = state_17461__$1;
(statearr_17511_17581[(2)] = null);

(statearr_17511_17581[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (17))){
var state_17461__$1 = state_17461;
var statearr_17512_17582 = state_17461__$1;
(statearr_17512_17582[(2)] = null);

(statearr_17512_17582[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (3))){
var inst_17459 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17461__$1,inst_17459);
} else {
if((state_val_17462 === (12))){
var inst_17388 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17513_17583 = state_17461__$1;
(statearr_17513_17583[(2)] = inst_17388);

(statearr_17513_17583[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (2))){
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17461__$1,(4),ch);
} else {
if((state_val_17462 === (23))){
var state_17461__$1 = state_17461;
var statearr_17514_17584 = state_17461__$1;
(statearr_17514_17584[(2)] = null);

(statearr_17514_17584[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (35))){
var inst_17443 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17515_17585 = state_17461__$1;
(statearr_17515_17585[(2)] = inst_17443);

(statearr_17515_17585[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (19))){
var inst_17360 = (state_17461[(7)]);
var inst_17364 = cljs.core.chunk_first(inst_17360);
var inst_17365 = cljs.core.chunk_rest(inst_17360);
var inst_17366 = cljs.core.count(inst_17364);
var inst_17338 = inst_17365;
var inst_17339 = inst_17364;
var inst_17340 = inst_17366;
var inst_17341 = (0);
var state_17461__$1 = (function (){var statearr_17516 = state_17461;
(statearr_17516[(13)] = inst_17338);

(statearr_17516[(15)] = inst_17341);

(statearr_17516[(16)] = inst_17340);

(statearr_17516[(17)] = inst_17339);

return statearr_17516;
})();
var statearr_17517_17586 = state_17461__$1;
(statearr_17517_17586[(2)] = null);

(statearr_17517_17586[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (11))){
var inst_17338 = (state_17461[(13)]);
var inst_17360 = (state_17461[(7)]);
var inst_17360__$1 = cljs.core.seq(inst_17338);
var state_17461__$1 = (function (){var statearr_17518 = state_17461;
(statearr_17518[(7)] = inst_17360__$1);

return statearr_17518;
})();
if(inst_17360__$1){
var statearr_17519_17587 = state_17461__$1;
(statearr_17519_17587[(1)] = (16));

} else {
var statearr_17520_17588 = state_17461__$1;
(statearr_17520_17588[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (9))){
var inst_17390 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17521_17589 = state_17461__$1;
(statearr_17521_17589[(2)] = inst_17390);

(statearr_17521_17589[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (5))){
var inst_17336 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17337 = cljs.core.seq(inst_17336);
var inst_17338 = inst_17337;
var inst_17339 = null;
var inst_17340 = (0);
var inst_17341 = (0);
var state_17461__$1 = (function (){var statearr_17522 = state_17461;
(statearr_17522[(13)] = inst_17338);

(statearr_17522[(15)] = inst_17341);

(statearr_17522[(16)] = inst_17340);

(statearr_17522[(17)] = inst_17339);

return statearr_17522;
})();
var statearr_17523_17590 = state_17461__$1;
(statearr_17523_17590[(2)] = null);

(statearr_17523_17590[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (14))){
var state_17461__$1 = state_17461;
var statearr_17524_17591 = state_17461__$1;
(statearr_17524_17591[(2)] = null);

(statearr_17524_17591[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (45))){
var inst_17451 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17525_17592 = state_17461__$1;
(statearr_17525_17592[(2)] = inst_17451);

(statearr_17525_17592[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (26))){
var inst_17393 = (state_17461[(29)]);
var inst_17447 = (state_17461[(2)]);
var inst_17448 = cljs.core.seq(inst_17393);
var state_17461__$1 = (function (){var statearr_17526 = state_17461;
(statearr_17526[(31)] = inst_17447);

return statearr_17526;
})();
if(inst_17448){
var statearr_17527_17593 = state_17461__$1;
(statearr_17527_17593[(1)] = (42));

} else {
var statearr_17528_17594 = state_17461__$1;
(statearr_17528_17594[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (16))){
var inst_17360 = (state_17461[(7)]);
var inst_17362 = cljs.core.chunked_seq_QMARK_(inst_17360);
var state_17461__$1 = state_17461;
if(inst_17362){
var statearr_17529_17595 = state_17461__$1;
(statearr_17529_17595[(1)] = (19));

} else {
var statearr_17530_17596 = state_17461__$1;
(statearr_17530_17596[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (38))){
var inst_17440 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17531_17597 = state_17461__$1;
(statearr_17531_17597[(2)] = inst_17440);

(statearr_17531_17597[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (30))){
var state_17461__$1 = state_17461;
var statearr_17532_17598 = state_17461__$1;
(statearr_17532_17598[(2)] = null);

(statearr_17532_17598[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (10))){
var inst_17341 = (state_17461[(15)]);
var inst_17339 = (state_17461[(17)]);
var inst_17349 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17339,inst_17341);
var inst_17350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17349,(0),null);
var inst_17351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17349,(1),null);
var state_17461__$1 = (function (){var statearr_17533 = state_17461;
(statearr_17533[(26)] = inst_17350);

return statearr_17533;
})();
if(cljs.core.truth_(inst_17351)){
var statearr_17534_17599 = state_17461__$1;
(statearr_17534_17599[(1)] = (13));

} else {
var statearr_17535_17600 = state_17461__$1;
(statearr_17535_17600[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (18))){
var inst_17386 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17536_17601 = state_17461__$1;
(statearr_17536_17601[(2)] = inst_17386);

(statearr_17536_17601[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (42))){
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17461__$1,(45),dchan);
} else {
if((state_val_17462 === (37))){
var inst_17329 = (state_17461[(9)]);
var inst_17420 = (state_17461[(25)]);
var inst_17429 = (state_17461[(23)]);
var inst_17429__$1 = cljs.core.first(inst_17420);
var inst_17430 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17429__$1,inst_17329,done);
var state_17461__$1 = (function (){var statearr_17537 = state_17461;
(statearr_17537[(23)] = inst_17429__$1);

return statearr_17537;
})();
if(cljs.core.truth_(inst_17430)){
var statearr_17538_17602 = state_17461__$1;
(statearr_17538_17602[(1)] = (39));

} else {
var statearr_17539_17603 = state_17461__$1;
(statearr_17539_17603[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17462 === (8))){
var inst_17341 = (state_17461[(15)]);
var inst_17340 = (state_17461[(16)]);
var inst_17343 = (inst_17341 < inst_17340);
var inst_17344 = inst_17343;
var state_17461__$1 = state_17461;
if(cljs.core.truth_(inst_17344)){
var statearr_17540_17604 = state_17461__$1;
(statearr_17540_17604[(1)] = (10));

} else {
var statearr_17541_17605 = state_17461__$1;
(statearr_17541_17605[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___17551,cs,m,dchan,dctr,done))
;
return ((function (switch__16102__auto__,c__16216__auto___17551,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16103__auto__ = null;
var cljs$core$async$mult_$_state_machine__16103__auto____0 = (function (){
var statearr_17545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17545[(0)] = cljs$core$async$mult_$_state_machine__16103__auto__);

(statearr_17545[(1)] = (1));

return statearr_17545;
});
var cljs$core$async$mult_$_state_machine__16103__auto____1 = (function (state_17461){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_17461);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e17546){if((e17546 instanceof Object)){
var ex__16106__auto__ = e17546;
var statearr_17547_17606 = state_17461;
(statearr_17547_17606[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17461);

return cljs.core.cst$kw$recur;
} else {
throw e17546;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__17607 = state_17461;
state_17461 = G__17607;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16103__auto__ = function(state_17461){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16103__auto____1.call(this,state_17461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16103__auto____0;
cljs$core$async$mult_$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16103__auto____1;
return cljs$core$async$mult_$_state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___17551,cs,m,dchan,dctr,done))
})();
var state__16218__auto__ = (function (){var statearr_17548 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_17548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___17551);

return statearr_17548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___17551,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args17608 = [];
var len__7296__auto___17611 = arguments.length;
var i__7297__auto___17612 = (0);
while(true){
if((i__7297__auto___17612 < len__7296__auto___17611)){
args17608.push((arguments[i__7297__auto___17612]));

var G__17613 = (i__7297__auto___17612 + (1));
i__7297__auto___17612 = G__17613;
continue;
} else {
}
break;
}

var G__17610 = args17608.length;
switch (G__17610) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17608.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6885__auto__.call(null,m,ch));
} else {
var m__6885__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6885__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6885__auto__.call(null,m,ch));
} else {
var m__6885__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6885__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6885__auto__.call(null,m));
} else {
var m__6885__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6885__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6885__auto__.call(null,m,state_map));
} else {
var m__6885__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6885__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6885__auto__.call(null,m,mode));
} else {
var m__6885__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6885__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___17625 = arguments.length;
var i__7297__auto___17626 = (0);
while(true){
if((i__7297__auto___17626 < len__7296__auto___17625)){
args__7303__auto__.push((arguments[i__7297__auto___17626]));

var G__17627 = (i__7297__auto___17626 + (1));
i__7297__auto___17626 = G__17627;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((3) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7304__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17619){
var map__17620 = p__17619;
var map__17620__$1 = ((((!((map__17620 == null)))?((((map__17620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17620):map__17620);
var opts = map__17620__$1;
var statearr_17622_17628 = state;
(statearr_17622_17628[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17620,map__17620__$1,opts){
return (function (val){
var statearr_17623_17629 = state;
(statearr_17623_17629[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17620,map__17620__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17624_17630 = state;
(statearr_17624_17630[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17615){
var G__17616 = cljs.core.first(seq17615);
var seq17615__$1 = cljs.core.next(seq17615);
var G__17617 = cljs.core.first(seq17615__$1);
var seq17615__$2 = cljs.core.next(seq17615__$1);
var G__17618 = cljs.core.first(seq17615__$2);
var seq17615__$3 = cljs.core.next(seq17615__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17616,G__17617,G__17618,seq17615__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__17799 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17799) : cljs.core.atom.call(null,G__17799));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17800 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17801){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17801 = meta17801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17802,meta17801__$1){
var self__ = this;
var _17802__$1 = this;
return (new cljs.core.async.t_cljs$core$async17800(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17801__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17802){
var self__ = this;
var _17802__$1 = this;
return self__.meta17801;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17803_17967 = self__.cs;
var G__17804_17968 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17803_17967,G__17804_17968) : cljs.core.reset_BANG_.call(null,G__17803_17967,G__17804_17968));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17800.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17801], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17800";

cljs.core.async.t_cljs$core$async17800.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async17800");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17800 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17800(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17801){
return (new cljs.core.async.t_cljs$core$async17800(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17801));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17800(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16216__auto___17969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___17969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___17969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17904){
var state_val_17905 = (state_17904[(1)]);
if((state_val_17905 === (7))){
var inst_17820 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17906_17970 = state_17904__$1;
(statearr_17906_17970[(2)] = inst_17820);

(statearr_17906_17970[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (20))){
var inst_17832 = (state_17904[(7)]);
var state_17904__$1 = state_17904;
var statearr_17907_17971 = state_17904__$1;
(statearr_17907_17971[(2)] = inst_17832);

(statearr_17907_17971[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (27))){
var state_17904__$1 = state_17904;
var statearr_17908_17972 = state_17904__$1;
(statearr_17908_17972[(2)] = null);

(statearr_17908_17972[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (1))){
var inst_17808 = (state_17904[(8)]);
var inst_17808__$1 = calc_state();
var inst_17810 = (inst_17808__$1 == null);
var inst_17811 = cljs.core.not(inst_17810);
var state_17904__$1 = (function (){var statearr_17909 = state_17904;
(statearr_17909[(8)] = inst_17808__$1);

return statearr_17909;
})();
if(inst_17811){
var statearr_17910_17973 = state_17904__$1;
(statearr_17910_17973[(1)] = (2));

} else {
var statearr_17911_17974 = state_17904__$1;
(statearr_17911_17974[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (24))){
var inst_17864 = (state_17904[(9)]);
var inst_17855 = (state_17904[(10)]);
var inst_17878 = (state_17904[(11)]);
var inst_17878__$1 = (inst_17855.cljs$core$IFn$_invoke$arity$1 ? inst_17855.cljs$core$IFn$_invoke$arity$1(inst_17864) : inst_17855.call(null,inst_17864));
var state_17904__$1 = (function (){var statearr_17912 = state_17904;
(statearr_17912[(11)] = inst_17878__$1);

return statearr_17912;
})();
if(cljs.core.truth_(inst_17878__$1)){
var statearr_17913_17975 = state_17904__$1;
(statearr_17913_17975[(1)] = (29));

} else {
var statearr_17914_17976 = state_17904__$1;
(statearr_17914_17976[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (4))){
var inst_17823 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
if(cljs.core.truth_(inst_17823)){
var statearr_17915_17977 = state_17904__$1;
(statearr_17915_17977[(1)] = (8));

} else {
var statearr_17916_17978 = state_17904__$1;
(statearr_17916_17978[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (15))){
var inst_17849 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
if(cljs.core.truth_(inst_17849)){
var statearr_17917_17979 = state_17904__$1;
(statearr_17917_17979[(1)] = (19));

} else {
var statearr_17918_17980 = state_17904__$1;
(statearr_17918_17980[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (21))){
var inst_17854 = (state_17904[(12)]);
var inst_17854__$1 = (state_17904[(2)]);
var inst_17855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17854__$1,cljs.core.cst$kw$solos);
var inst_17856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17854__$1,cljs.core.cst$kw$mutes);
var inst_17857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17854__$1,cljs.core.cst$kw$reads);
var state_17904__$1 = (function (){var statearr_17919 = state_17904;
(statearr_17919[(13)] = inst_17856);

(statearr_17919[(10)] = inst_17855);

(statearr_17919[(12)] = inst_17854__$1);

return statearr_17919;
})();
return cljs.core.async.ioc_alts_BANG_(state_17904__$1,(22),inst_17857);
} else {
if((state_val_17905 === (31))){
var inst_17886 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
if(cljs.core.truth_(inst_17886)){
var statearr_17920_17981 = state_17904__$1;
(statearr_17920_17981[(1)] = (32));

} else {
var statearr_17921_17982 = state_17904__$1;
(statearr_17921_17982[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (32))){
var inst_17863 = (state_17904[(14)]);
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17904__$1,(35),out,inst_17863);
} else {
if((state_val_17905 === (33))){
var inst_17854 = (state_17904[(12)]);
var inst_17832 = inst_17854;
var state_17904__$1 = (function (){var statearr_17922 = state_17904;
(statearr_17922[(7)] = inst_17832);

return statearr_17922;
})();
var statearr_17923_17983 = state_17904__$1;
(statearr_17923_17983[(2)] = null);

(statearr_17923_17983[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (13))){
var inst_17832 = (state_17904[(7)]);
var inst_17839 = inst_17832.cljs$lang$protocol_mask$partition0$;
var inst_17840 = (inst_17839 & (64));
var inst_17841 = inst_17832.cljs$core$ISeq$;
var inst_17842 = (inst_17840) || (inst_17841);
var state_17904__$1 = state_17904;
if(cljs.core.truth_(inst_17842)){
var statearr_17924_17984 = state_17904__$1;
(statearr_17924_17984[(1)] = (16));

} else {
var statearr_17925_17985 = state_17904__$1;
(statearr_17925_17985[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (22))){
var inst_17864 = (state_17904[(9)]);
var inst_17863 = (state_17904[(14)]);
var inst_17862 = (state_17904[(2)]);
var inst_17863__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17862,(0),null);
var inst_17864__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17862,(1),null);
var inst_17865 = (inst_17863__$1 == null);
var inst_17866 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17864__$1,change);
var inst_17867 = (inst_17865) || (inst_17866);
var state_17904__$1 = (function (){var statearr_17926 = state_17904;
(statearr_17926[(9)] = inst_17864__$1);

(statearr_17926[(14)] = inst_17863__$1);

return statearr_17926;
})();
if(cljs.core.truth_(inst_17867)){
var statearr_17927_17986 = state_17904__$1;
(statearr_17927_17986[(1)] = (23));

} else {
var statearr_17928_17987 = state_17904__$1;
(statearr_17928_17987[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (36))){
var inst_17854 = (state_17904[(12)]);
var inst_17832 = inst_17854;
var state_17904__$1 = (function (){var statearr_17929 = state_17904;
(statearr_17929[(7)] = inst_17832);

return statearr_17929;
})();
var statearr_17930_17988 = state_17904__$1;
(statearr_17930_17988[(2)] = null);

(statearr_17930_17988[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (29))){
var inst_17878 = (state_17904[(11)]);
var state_17904__$1 = state_17904;
var statearr_17931_17989 = state_17904__$1;
(statearr_17931_17989[(2)] = inst_17878);

(statearr_17931_17989[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (6))){
var state_17904__$1 = state_17904;
var statearr_17932_17990 = state_17904__$1;
(statearr_17932_17990[(2)] = false);

(statearr_17932_17990[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (28))){
var inst_17874 = (state_17904[(2)]);
var inst_17875 = calc_state();
var inst_17832 = inst_17875;
var state_17904__$1 = (function (){var statearr_17933 = state_17904;
(statearr_17933[(15)] = inst_17874);

(statearr_17933[(7)] = inst_17832);

return statearr_17933;
})();
var statearr_17934_17991 = state_17904__$1;
(statearr_17934_17991[(2)] = null);

(statearr_17934_17991[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (25))){
var inst_17900 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17935_17992 = state_17904__$1;
(statearr_17935_17992[(2)] = inst_17900);

(statearr_17935_17992[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (34))){
var inst_17898 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17936_17993 = state_17904__$1;
(statearr_17936_17993[(2)] = inst_17898);

(statearr_17936_17993[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (17))){
var state_17904__$1 = state_17904;
var statearr_17937_17994 = state_17904__$1;
(statearr_17937_17994[(2)] = false);

(statearr_17937_17994[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (3))){
var state_17904__$1 = state_17904;
var statearr_17938_17995 = state_17904__$1;
(statearr_17938_17995[(2)] = false);

(statearr_17938_17995[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (12))){
var inst_17902 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17904__$1,inst_17902);
} else {
if((state_val_17905 === (2))){
var inst_17808 = (state_17904[(8)]);
var inst_17813 = inst_17808.cljs$lang$protocol_mask$partition0$;
var inst_17814 = (inst_17813 & (64));
var inst_17815 = inst_17808.cljs$core$ISeq$;
var inst_17816 = (inst_17814) || (inst_17815);
var state_17904__$1 = state_17904;
if(cljs.core.truth_(inst_17816)){
var statearr_17939_17996 = state_17904__$1;
(statearr_17939_17996[(1)] = (5));

} else {
var statearr_17940_17997 = state_17904__$1;
(statearr_17940_17997[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (23))){
var inst_17863 = (state_17904[(14)]);
var inst_17869 = (inst_17863 == null);
var state_17904__$1 = state_17904;
if(cljs.core.truth_(inst_17869)){
var statearr_17941_17998 = state_17904__$1;
(statearr_17941_17998[(1)] = (26));

} else {
var statearr_17942_17999 = state_17904__$1;
(statearr_17942_17999[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (35))){
var inst_17889 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
if(cljs.core.truth_(inst_17889)){
var statearr_17943_18000 = state_17904__$1;
(statearr_17943_18000[(1)] = (36));

} else {
var statearr_17944_18001 = state_17904__$1;
(statearr_17944_18001[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (19))){
var inst_17832 = (state_17904[(7)]);
var inst_17851 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17832);
var state_17904__$1 = state_17904;
var statearr_17945_18002 = state_17904__$1;
(statearr_17945_18002[(2)] = inst_17851);

(statearr_17945_18002[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (11))){
var inst_17832 = (state_17904[(7)]);
var inst_17836 = (inst_17832 == null);
var inst_17837 = cljs.core.not(inst_17836);
var state_17904__$1 = state_17904;
if(inst_17837){
var statearr_17946_18003 = state_17904__$1;
(statearr_17946_18003[(1)] = (13));

} else {
var statearr_17947_18004 = state_17904__$1;
(statearr_17947_18004[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (9))){
var inst_17808 = (state_17904[(8)]);
var state_17904__$1 = state_17904;
var statearr_17948_18005 = state_17904__$1;
(statearr_17948_18005[(2)] = inst_17808);

(statearr_17948_18005[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (5))){
var state_17904__$1 = state_17904;
var statearr_17949_18006 = state_17904__$1;
(statearr_17949_18006[(2)] = true);

(statearr_17949_18006[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (14))){
var state_17904__$1 = state_17904;
var statearr_17950_18007 = state_17904__$1;
(statearr_17950_18007[(2)] = false);

(statearr_17950_18007[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (26))){
var inst_17864 = (state_17904[(9)]);
var inst_17871 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17864);
var state_17904__$1 = state_17904;
var statearr_17951_18008 = state_17904__$1;
(statearr_17951_18008[(2)] = inst_17871);

(statearr_17951_18008[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (16))){
var state_17904__$1 = state_17904;
var statearr_17952_18009 = state_17904__$1;
(statearr_17952_18009[(2)] = true);

(statearr_17952_18009[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (38))){
var inst_17894 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17953_18010 = state_17904__$1;
(statearr_17953_18010[(2)] = inst_17894);

(statearr_17953_18010[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (30))){
var inst_17856 = (state_17904[(13)]);
var inst_17864 = (state_17904[(9)]);
var inst_17855 = (state_17904[(10)]);
var inst_17881 = cljs.core.empty_QMARK_(inst_17855);
var inst_17882 = (inst_17856.cljs$core$IFn$_invoke$arity$1 ? inst_17856.cljs$core$IFn$_invoke$arity$1(inst_17864) : inst_17856.call(null,inst_17864));
var inst_17883 = cljs.core.not(inst_17882);
var inst_17884 = (inst_17881) && (inst_17883);
var state_17904__$1 = state_17904;
var statearr_17954_18011 = state_17904__$1;
(statearr_17954_18011[(2)] = inst_17884);

(statearr_17954_18011[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (10))){
var inst_17808 = (state_17904[(8)]);
var inst_17828 = (state_17904[(2)]);
var inst_17829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17828,cljs.core.cst$kw$solos);
var inst_17830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17828,cljs.core.cst$kw$mutes);
var inst_17831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17828,cljs.core.cst$kw$reads);
var inst_17832 = inst_17808;
var state_17904__$1 = (function (){var statearr_17955 = state_17904;
(statearr_17955[(16)] = inst_17829);

(statearr_17955[(7)] = inst_17832);

(statearr_17955[(17)] = inst_17830);

(statearr_17955[(18)] = inst_17831);

return statearr_17955;
})();
var statearr_17956_18012 = state_17904__$1;
(statearr_17956_18012[(2)] = null);

(statearr_17956_18012[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (18))){
var inst_17846 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17957_18013 = state_17904__$1;
(statearr_17957_18013[(2)] = inst_17846);

(statearr_17957_18013[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (37))){
var state_17904__$1 = state_17904;
var statearr_17958_18014 = state_17904__$1;
(statearr_17958_18014[(2)] = null);

(statearr_17958_18014[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (8))){
var inst_17808 = (state_17904[(8)]);
var inst_17825 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17808);
var state_17904__$1 = state_17904;
var statearr_17959_18015 = state_17904__$1;
(statearr_17959_18015[(2)] = inst_17825);

(statearr_17959_18015[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___17969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16102__auto__,c__16216__auto___17969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16103__auto__ = null;
var cljs$core$async$mix_$_state_machine__16103__auto____0 = (function (){
var statearr_17963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17963[(0)] = cljs$core$async$mix_$_state_machine__16103__auto__);

(statearr_17963[(1)] = (1));

return statearr_17963;
});
var cljs$core$async$mix_$_state_machine__16103__auto____1 = (function (state_17904){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_17904);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e17964){if((e17964 instanceof Object)){
var ex__16106__auto__ = e17964;
var statearr_17965_18016 = state_17904;
(statearr_17965_18016[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17904);

return cljs.core.cst$kw$recur;
} else {
throw e17964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__18017 = state_17904;
state_17904 = G__18017;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16103__auto__ = function(state_17904){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16103__auto____1.call(this,state_17904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16103__auto____0;
cljs$core$async$mix_$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16103__auto____1;
return cljs$core$async$mix_$_state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___17969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16218__auto__ = (function (){var statearr_17966 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_17966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___17969);

return statearr_17966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___17969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6884__auto__ = (((p == null))?null:p);
var m__6885__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6885__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__6885__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6885__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6884__auto__ = (((p == null))?null:p);
var m__6885__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6885__auto__.call(null,p,v,ch));
} else {
var m__6885__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6885__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args18018 = [];
var len__7296__auto___18021 = arguments.length;
var i__7297__auto___18022 = (0);
while(true){
if((i__7297__auto___18022 < len__7296__auto___18021)){
args18018.push((arguments[i__7297__auto___18022]));

var G__18023 = (i__7297__auto___18022 + (1));
i__7297__auto___18022 = G__18023;
continue;
} else {
}
break;
}

var G__18020 = args18018.length;
switch (G__18020) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18018.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6884__auto__ = (((p == null))?null:p);
var m__6885__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__6885__auto__.call(null,p));
} else {
var m__6885__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__6885__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6884__auto__ = (((p == null))?null:p);
var m__6885__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__6885__auto__.call(null,p,v));
} else {
var m__6885__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__6885__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args18026 = [];
var len__7296__auto___18154 = arguments.length;
var i__7297__auto___18155 = (0);
while(true){
if((i__7297__auto___18155 < len__7296__auto___18154)){
args18026.push((arguments[i__7297__auto___18155]));

var G__18156 = (i__7297__auto___18155 + (1));
i__7297__auto___18155 = G__18156;
continue;
} else {
}
break;
}

var G__18028 = args18026.length;
switch (G__18028) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18026.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__18029 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18029) : cljs.core.atom.call(null,G__18029));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6221__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6221__auto__,mults){
return (function (p1__18025_SHARP_){
if(cljs.core.truth_((p1__18025_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18025_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18025_SHARP_.call(null,topic)))){
return p1__18025_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18025_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6221__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18030 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18031){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18031 = meta18031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18032,meta18031__$1){
var self__ = this;
var _18032__$1 = this;
return (new cljs.core.async.t_cljs$core$async18030(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18031__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18032){
var self__ = this;
var _18032__$1 = this;
return self__.meta18031;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18033 = self__.mults;
var G__18034 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18033,G__18034) : cljs.core.reset_BANG_.call(null,G__18033,G__18034));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18030.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18030.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18031], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18030";

cljs.core.async.t_cljs$core$async18030.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async18030");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18030 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18030(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18031){
return (new cljs.core.async.t_cljs$core$async18030(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18031));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18030(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16216__auto___18158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___18158,mults,ensure_mult,p){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___18158,mults,ensure_mult,p){
return (function (state_18106){
var state_val_18107 = (state_18106[(1)]);
if((state_val_18107 === (7))){
var inst_18102 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
var statearr_18108_18159 = state_18106__$1;
(statearr_18108_18159[(2)] = inst_18102);

(statearr_18108_18159[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (20))){
var state_18106__$1 = state_18106;
var statearr_18109_18160 = state_18106__$1;
(statearr_18109_18160[(2)] = null);

(statearr_18109_18160[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (1))){
var state_18106__$1 = state_18106;
var statearr_18110_18161 = state_18106__$1;
(statearr_18110_18161[(2)] = null);

(statearr_18110_18161[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (24))){
var inst_18085 = (state_18106[(7)]);
var inst_18094 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18085);
var state_18106__$1 = state_18106;
var statearr_18111_18162 = state_18106__$1;
(statearr_18111_18162[(2)] = inst_18094);

(statearr_18111_18162[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (4))){
var inst_18037 = (state_18106[(8)]);
var inst_18037__$1 = (state_18106[(2)]);
var inst_18038 = (inst_18037__$1 == null);
var state_18106__$1 = (function (){var statearr_18112 = state_18106;
(statearr_18112[(8)] = inst_18037__$1);

return statearr_18112;
})();
if(cljs.core.truth_(inst_18038)){
var statearr_18113_18163 = state_18106__$1;
(statearr_18113_18163[(1)] = (5));

} else {
var statearr_18114_18164 = state_18106__$1;
(statearr_18114_18164[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (15))){
var inst_18079 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
var statearr_18115_18165 = state_18106__$1;
(statearr_18115_18165[(2)] = inst_18079);

(statearr_18115_18165[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (21))){
var inst_18099 = (state_18106[(2)]);
var state_18106__$1 = (function (){var statearr_18116 = state_18106;
(statearr_18116[(9)] = inst_18099);

return statearr_18116;
})();
var statearr_18117_18166 = state_18106__$1;
(statearr_18117_18166[(2)] = null);

(statearr_18117_18166[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (13))){
var inst_18061 = (state_18106[(10)]);
var inst_18063 = cljs.core.chunked_seq_QMARK_(inst_18061);
var state_18106__$1 = state_18106;
if(inst_18063){
var statearr_18118_18167 = state_18106__$1;
(statearr_18118_18167[(1)] = (16));

} else {
var statearr_18119_18168 = state_18106__$1;
(statearr_18119_18168[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (22))){
var inst_18091 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
if(cljs.core.truth_(inst_18091)){
var statearr_18120_18169 = state_18106__$1;
(statearr_18120_18169[(1)] = (23));

} else {
var statearr_18121_18170 = state_18106__$1;
(statearr_18121_18170[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (6))){
var inst_18037 = (state_18106[(8)]);
var inst_18087 = (state_18106[(11)]);
var inst_18085 = (state_18106[(7)]);
var inst_18085__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18037) : topic_fn.call(null,inst_18037));
var inst_18086 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18087__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18086,inst_18085__$1);
var state_18106__$1 = (function (){var statearr_18122 = state_18106;
(statearr_18122[(11)] = inst_18087__$1);

(statearr_18122[(7)] = inst_18085__$1);

return statearr_18122;
})();
if(cljs.core.truth_(inst_18087__$1)){
var statearr_18123_18171 = state_18106__$1;
(statearr_18123_18171[(1)] = (19));

} else {
var statearr_18124_18172 = state_18106__$1;
(statearr_18124_18172[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (25))){
var inst_18096 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
var statearr_18125_18173 = state_18106__$1;
(statearr_18125_18173[(2)] = inst_18096);

(statearr_18125_18173[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (17))){
var inst_18061 = (state_18106[(10)]);
var inst_18070 = cljs.core.first(inst_18061);
var inst_18071 = cljs.core.async.muxch_STAR_(inst_18070);
var inst_18072 = cljs.core.async.close_BANG_(inst_18071);
var inst_18073 = cljs.core.next(inst_18061);
var inst_18047 = inst_18073;
var inst_18048 = null;
var inst_18049 = (0);
var inst_18050 = (0);
var state_18106__$1 = (function (){var statearr_18126 = state_18106;
(statearr_18126[(12)] = inst_18047);

(statearr_18126[(13)] = inst_18050);

(statearr_18126[(14)] = inst_18072);

(statearr_18126[(15)] = inst_18048);

(statearr_18126[(16)] = inst_18049);

return statearr_18126;
})();
var statearr_18127_18174 = state_18106__$1;
(statearr_18127_18174[(2)] = null);

(statearr_18127_18174[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (3))){
var inst_18104 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18106__$1,inst_18104);
} else {
if((state_val_18107 === (12))){
var inst_18081 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
var statearr_18128_18175 = state_18106__$1;
(statearr_18128_18175[(2)] = inst_18081);

(statearr_18128_18175[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (2))){
var state_18106__$1 = state_18106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18106__$1,(4),ch);
} else {
if((state_val_18107 === (23))){
var state_18106__$1 = state_18106;
var statearr_18129_18176 = state_18106__$1;
(statearr_18129_18176[(2)] = null);

(statearr_18129_18176[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (19))){
var inst_18037 = (state_18106[(8)]);
var inst_18087 = (state_18106[(11)]);
var inst_18089 = cljs.core.async.muxch_STAR_(inst_18087);
var state_18106__$1 = state_18106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18106__$1,(22),inst_18089,inst_18037);
} else {
if((state_val_18107 === (11))){
var inst_18047 = (state_18106[(12)]);
var inst_18061 = (state_18106[(10)]);
var inst_18061__$1 = cljs.core.seq(inst_18047);
var state_18106__$1 = (function (){var statearr_18130 = state_18106;
(statearr_18130[(10)] = inst_18061__$1);

return statearr_18130;
})();
if(inst_18061__$1){
var statearr_18131_18177 = state_18106__$1;
(statearr_18131_18177[(1)] = (13));

} else {
var statearr_18132_18178 = state_18106__$1;
(statearr_18132_18178[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (9))){
var inst_18083 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
var statearr_18133_18179 = state_18106__$1;
(statearr_18133_18179[(2)] = inst_18083);

(statearr_18133_18179[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (5))){
var inst_18044 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18045 = cljs.core.vals(inst_18044);
var inst_18046 = cljs.core.seq(inst_18045);
var inst_18047 = inst_18046;
var inst_18048 = null;
var inst_18049 = (0);
var inst_18050 = (0);
var state_18106__$1 = (function (){var statearr_18134 = state_18106;
(statearr_18134[(12)] = inst_18047);

(statearr_18134[(13)] = inst_18050);

(statearr_18134[(15)] = inst_18048);

(statearr_18134[(16)] = inst_18049);

return statearr_18134;
})();
var statearr_18135_18180 = state_18106__$1;
(statearr_18135_18180[(2)] = null);

(statearr_18135_18180[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (14))){
var state_18106__$1 = state_18106;
var statearr_18139_18181 = state_18106__$1;
(statearr_18139_18181[(2)] = null);

(statearr_18139_18181[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (16))){
var inst_18061 = (state_18106[(10)]);
var inst_18065 = cljs.core.chunk_first(inst_18061);
var inst_18066 = cljs.core.chunk_rest(inst_18061);
var inst_18067 = cljs.core.count(inst_18065);
var inst_18047 = inst_18066;
var inst_18048 = inst_18065;
var inst_18049 = inst_18067;
var inst_18050 = (0);
var state_18106__$1 = (function (){var statearr_18140 = state_18106;
(statearr_18140[(12)] = inst_18047);

(statearr_18140[(13)] = inst_18050);

(statearr_18140[(15)] = inst_18048);

(statearr_18140[(16)] = inst_18049);

return statearr_18140;
})();
var statearr_18141_18182 = state_18106__$1;
(statearr_18141_18182[(2)] = null);

(statearr_18141_18182[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (10))){
var inst_18047 = (state_18106[(12)]);
var inst_18050 = (state_18106[(13)]);
var inst_18048 = (state_18106[(15)]);
var inst_18049 = (state_18106[(16)]);
var inst_18055 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18048,inst_18050);
var inst_18056 = cljs.core.async.muxch_STAR_(inst_18055);
var inst_18057 = cljs.core.async.close_BANG_(inst_18056);
var inst_18058 = (inst_18050 + (1));
var tmp18136 = inst_18047;
var tmp18137 = inst_18048;
var tmp18138 = inst_18049;
var inst_18047__$1 = tmp18136;
var inst_18048__$1 = tmp18137;
var inst_18049__$1 = tmp18138;
var inst_18050__$1 = inst_18058;
var state_18106__$1 = (function (){var statearr_18142 = state_18106;
(statearr_18142[(12)] = inst_18047__$1);

(statearr_18142[(17)] = inst_18057);

(statearr_18142[(13)] = inst_18050__$1);

(statearr_18142[(15)] = inst_18048__$1);

(statearr_18142[(16)] = inst_18049__$1);

return statearr_18142;
})();
var statearr_18143_18183 = state_18106__$1;
(statearr_18143_18183[(2)] = null);

(statearr_18143_18183[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (18))){
var inst_18076 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
var statearr_18144_18184 = state_18106__$1;
(statearr_18144_18184[(2)] = inst_18076);

(statearr_18144_18184[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18107 === (8))){
var inst_18050 = (state_18106[(13)]);
var inst_18049 = (state_18106[(16)]);
var inst_18052 = (inst_18050 < inst_18049);
var inst_18053 = inst_18052;
var state_18106__$1 = state_18106;
if(cljs.core.truth_(inst_18053)){
var statearr_18145_18185 = state_18106__$1;
(statearr_18145_18185[(1)] = (10));

} else {
var statearr_18146_18186 = state_18106__$1;
(statearr_18146_18186[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___18158,mults,ensure_mult,p))
;
return ((function (switch__16102__auto__,c__16216__auto___18158,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16103__auto__ = null;
var cljs$core$async$state_machine__16103__auto____0 = (function (){
var statearr_18150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18150[(0)] = cljs$core$async$state_machine__16103__auto__);

(statearr_18150[(1)] = (1));

return statearr_18150;
});
var cljs$core$async$state_machine__16103__auto____1 = (function (state_18106){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_18106);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e18151){if((e18151 instanceof Object)){
var ex__16106__auto__ = e18151;
var statearr_18152_18187 = state_18106;
(statearr_18152_18187[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18106);

return cljs.core.cst$kw$recur;
} else {
throw e18151;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__18188 = state_18106;
state_18106 = G__18188;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$state_machine__16103__auto__ = function(state_18106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16103__auto____1.call(this,state_18106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16103__auto____0;
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16103__auto____1;
return cljs$core$async$state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___18158,mults,ensure_mult,p))
})();
var state__16218__auto__ = (function (){var statearr_18153 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_18153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___18158);

return statearr_18153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___18158,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args18189 = [];
var len__7296__auto___18192 = arguments.length;
var i__7297__auto___18193 = (0);
while(true){
if((i__7297__auto___18193 < len__7296__auto___18192)){
args18189.push((arguments[i__7297__auto___18193]));

var G__18194 = (i__7297__auto___18193 + (1));
i__7297__auto___18193 = G__18194;
continue;
} else {
}
break;
}

var G__18191 = args18189.length;
switch (G__18191) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18189.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args18196 = [];
var len__7296__auto___18199 = arguments.length;
var i__7297__auto___18200 = (0);
while(true){
if((i__7297__auto___18200 < len__7296__auto___18199)){
args18196.push((arguments[i__7297__auto___18200]));

var G__18201 = (i__7297__auto___18200 + (1));
i__7297__auto___18200 = G__18201;
continue;
} else {
}
break;
}

var G__18198 = args18196.length;
switch (G__18198) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18196.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args18203 = [];
var len__7296__auto___18274 = arguments.length;
var i__7297__auto___18275 = (0);
while(true){
if((i__7297__auto___18275 < len__7296__auto___18274)){
args18203.push((arguments[i__7297__auto___18275]));

var G__18276 = (i__7297__auto___18275 + (1));
i__7297__auto___18275 = G__18276;
continue;
} else {
}
break;
}

var G__18205 = args18203.length;
switch (G__18205) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18203.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16216__auto___18278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___18278,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___18278,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18244){
var state_val_18245 = (state_18244[(1)]);
if((state_val_18245 === (7))){
var state_18244__$1 = state_18244;
var statearr_18246_18279 = state_18244__$1;
(statearr_18246_18279[(2)] = null);

(statearr_18246_18279[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (1))){
var state_18244__$1 = state_18244;
var statearr_18247_18280 = state_18244__$1;
(statearr_18247_18280[(2)] = null);

(statearr_18247_18280[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (4))){
var inst_18208 = (state_18244[(7)]);
var inst_18210 = (inst_18208 < cnt);
var state_18244__$1 = state_18244;
if(cljs.core.truth_(inst_18210)){
var statearr_18248_18281 = state_18244__$1;
(statearr_18248_18281[(1)] = (6));

} else {
var statearr_18249_18282 = state_18244__$1;
(statearr_18249_18282[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (15))){
var inst_18240 = (state_18244[(2)]);
var state_18244__$1 = state_18244;
var statearr_18250_18283 = state_18244__$1;
(statearr_18250_18283[(2)] = inst_18240);

(statearr_18250_18283[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (13))){
var inst_18233 = cljs.core.async.close_BANG_(out);
var state_18244__$1 = state_18244;
var statearr_18251_18284 = state_18244__$1;
(statearr_18251_18284[(2)] = inst_18233);

(statearr_18251_18284[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (6))){
var state_18244__$1 = state_18244;
var statearr_18252_18285 = state_18244__$1;
(statearr_18252_18285[(2)] = null);

(statearr_18252_18285[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (3))){
var inst_18242 = (state_18244[(2)]);
var state_18244__$1 = state_18244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18244__$1,inst_18242);
} else {
if((state_val_18245 === (12))){
var inst_18230 = (state_18244[(8)]);
var inst_18230__$1 = (state_18244[(2)]);
var inst_18231 = cljs.core.some(cljs.core.nil_QMARK_,inst_18230__$1);
var state_18244__$1 = (function (){var statearr_18253 = state_18244;
(statearr_18253[(8)] = inst_18230__$1);

return statearr_18253;
})();
if(cljs.core.truth_(inst_18231)){
var statearr_18254_18286 = state_18244__$1;
(statearr_18254_18286[(1)] = (13));

} else {
var statearr_18255_18287 = state_18244__$1;
(statearr_18255_18287[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (2))){
var inst_18207 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_18208 = (0);
var state_18244__$1 = (function (){var statearr_18256 = state_18244;
(statearr_18256[(7)] = inst_18208);

(statearr_18256[(9)] = inst_18207);

return statearr_18256;
})();
var statearr_18257_18288 = state_18244__$1;
(statearr_18257_18288[(2)] = null);

(statearr_18257_18288[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (11))){
var inst_18208 = (state_18244[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18244,(10),Object,null,(9));
var inst_18217 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18208) : chs__$1.call(null,inst_18208));
var inst_18218 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18208) : done.call(null,inst_18208));
var inst_18219 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18217,inst_18218);
var state_18244__$1 = state_18244;
var statearr_18258_18289 = state_18244__$1;
(statearr_18258_18289[(2)] = inst_18219);


cljs.core.async.impl.ioc_helpers.process_exception(state_18244__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (9))){
var inst_18208 = (state_18244[(7)]);
var inst_18221 = (state_18244[(2)]);
var inst_18222 = (inst_18208 + (1));
var inst_18208__$1 = inst_18222;
var state_18244__$1 = (function (){var statearr_18259 = state_18244;
(statearr_18259[(7)] = inst_18208__$1);

(statearr_18259[(10)] = inst_18221);

return statearr_18259;
})();
var statearr_18260_18290 = state_18244__$1;
(statearr_18260_18290[(2)] = null);

(statearr_18260_18290[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (5))){
var inst_18228 = (state_18244[(2)]);
var state_18244__$1 = (function (){var statearr_18261 = state_18244;
(statearr_18261[(11)] = inst_18228);

return statearr_18261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18244__$1,(12),dchan);
} else {
if((state_val_18245 === (14))){
var inst_18230 = (state_18244[(8)]);
var inst_18235 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18230);
var state_18244__$1 = state_18244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18244__$1,(16),out,inst_18235);
} else {
if((state_val_18245 === (16))){
var inst_18237 = (state_18244[(2)]);
var state_18244__$1 = (function (){var statearr_18262 = state_18244;
(statearr_18262[(12)] = inst_18237);

return statearr_18262;
})();
var statearr_18263_18291 = state_18244__$1;
(statearr_18263_18291[(2)] = null);

(statearr_18263_18291[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (10))){
var inst_18212 = (state_18244[(2)]);
var inst_18213 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18244__$1 = (function (){var statearr_18264 = state_18244;
(statearr_18264[(13)] = inst_18212);

return statearr_18264;
})();
var statearr_18265_18292 = state_18244__$1;
(statearr_18265_18292[(2)] = inst_18213);


cljs.core.async.impl.ioc_helpers.process_exception(state_18244__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (8))){
var inst_18226 = (state_18244[(2)]);
var state_18244__$1 = state_18244;
var statearr_18266_18293 = state_18244__$1;
(statearr_18266_18293[(2)] = inst_18226);

(statearr_18266_18293[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___18278,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16102__auto__,c__16216__auto___18278,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16103__auto__ = null;
var cljs$core$async$state_machine__16103__auto____0 = (function (){
var statearr_18270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18270[(0)] = cljs$core$async$state_machine__16103__auto__);

(statearr_18270[(1)] = (1));

return statearr_18270;
});
var cljs$core$async$state_machine__16103__auto____1 = (function (state_18244){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_18244);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e18271){if((e18271 instanceof Object)){
var ex__16106__auto__ = e18271;
var statearr_18272_18294 = state_18244;
(statearr_18272_18294[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18244);

return cljs.core.cst$kw$recur;
} else {
throw e18271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__18295 = state_18244;
state_18244 = G__18295;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$state_machine__16103__auto__ = function(state_18244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16103__auto____1.call(this,state_18244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16103__auto____0;
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16103__auto____1;
return cljs$core$async$state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___18278,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16218__auto__ = (function (){var statearr_18273 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_18273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___18278);

return statearr_18273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___18278,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args18297 = [];
var len__7296__auto___18355 = arguments.length;
var i__7297__auto___18356 = (0);
while(true){
if((i__7297__auto___18356 < len__7296__auto___18355)){
args18297.push((arguments[i__7297__auto___18356]));

var G__18357 = (i__7297__auto___18356 + (1));
i__7297__auto___18356 = G__18357;
continue;
} else {
}
break;
}

var G__18299 = args18297.length;
switch (G__18299) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18297.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16216__auto___18359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___18359,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___18359,out){
return (function (state_18331){
var state_val_18332 = (state_18331[(1)]);
if((state_val_18332 === (7))){
var inst_18310 = (state_18331[(7)]);
var inst_18311 = (state_18331[(8)]);
var inst_18310__$1 = (state_18331[(2)]);
var inst_18311__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18310__$1,(0),null);
var inst_18312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18310__$1,(1),null);
var inst_18313 = (inst_18311__$1 == null);
var state_18331__$1 = (function (){var statearr_18333 = state_18331;
(statearr_18333[(7)] = inst_18310__$1);

(statearr_18333[(9)] = inst_18312);

(statearr_18333[(8)] = inst_18311__$1);

return statearr_18333;
})();
if(cljs.core.truth_(inst_18313)){
var statearr_18334_18360 = state_18331__$1;
(statearr_18334_18360[(1)] = (8));

} else {
var statearr_18335_18361 = state_18331__$1;
(statearr_18335_18361[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (1))){
var inst_18300 = cljs.core.vec(chs);
var inst_18301 = inst_18300;
var state_18331__$1 = (function (){var statearr_18336 = state_18331;
(statearr_18336[(10)] = inst_18301);

return statearr_18336;
})();
var statearr_18337_18362 = state_18331__$1;
(statearr_18337_18362[(2)] = null);

(statearr_18337_18362[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (4))){
var inst_18301 = (state_18331[(10)]);
var state_18331__$1 = state_18331;
return cljs.core.async.ioc_alts_BANG_(state_18331__$1,(7),inst_18301);
} else {
if((state_val_18332 === (6))){
var inst_18327 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
var statearr_18338_18363 = state_18331__$1;
(statearr_18338_18363[(2)] = inst_18327);

(statearr_18338_18363[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (3))){
var inst_18329 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18331__$1,inst_18329);
} else {
if((state_val_18332 === (2))){
var inst_18301 = (state_18331[(10)]);
var inst_18303 = cljs.core.count(inst_18301);
var inst_18304 = (inst_18303 > (0));
var state_18331__$1 = state_18331;
if(cljs.core.truth_(inst_18304)){
var statearr_18340_18364 = state_18331__$1;
(statearr_18340_18364[(1)] = (4));

} else {
var statearr_18341_18365 = state_18331__$1;
(statearr_18341_18365[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (11))){
var inst_18301 = (state_18331[(10)]);
var inst_18320 = (state_18331[(2)]);
var tmp18339 = inst_18301;
var inst_18301__$1 = tmp18339;
var state_18331__$1 = (function (){var statearr_18342 = state_18331;
(statearr_18342[(10)] = inst_18301__$1);

(statearr_18342[(11)] = inst_18320);

return statearr_18342;
})();
var statearr_18343_18366 = state_18331__$1;
(statearr_18343_18366[(2)] = null);

(statearr_18343_18366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (9))){
var inst_18311 = (state_18331[(8)]);
var state_18331__$1 = state_18331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18331__$1,(11),out,inst_18311);
} else {
if((state_val_18332 === (5))){
var inst_18325 = cljs.core.async.close_BANG_(out);
var state_18331__$1 = state_18331;
var statearr_18344_18367 = state_18331__$1;
(statearr_18344_18367[(2)] = inst_18325);

(statearr_18344_18367[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (10))){
var inst_18323 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
var statearr_18345_18368 = state_18331__$1;
(statearr_18345_18368[(2)] = inst_18323);

(statearr_18345_18368[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (8))){
var inst_18310 = (state_18331[(7)]);
var inst_18312 = (state_18331[(9)]);
var inst_18301 = (state_18331[(10)]);
var inst_18311 = (state_18331[(8)]);
var inst_18315 = (function (){var cs = inst_18301;
var vec__18306 = inst_18310;
var v = inst_18311;
var c = inst_18312;
return ((function (cs,vec__18306,v,c,inst_18310,inst_18312,inst_18301,inst_18311,state_val_18332,c__16216__auto___18359,out){
return (function (p1__18296_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18296_SHARP_);
});
;})(cs,vec__18306,v,c,inst_18310,inst_18312,inst_18301,inst_18311,state_val_18332,c__16216__auto___18359,out))
})();
var inst_18316 = cljs.core.filterv(inst_18315,inst_18301);
var inst_18301__$1 = inst_18316;
var state_18331__$1 = (function (){var statearr_18346 = state_18331;
(statearr_18346[(10)] = inst_18301__$1);

return statearr_18346;
})();
var statearr_18347_18369 = state_18331__$1;
(statearr_18347_18369[(2)] = null);

(statearr_18347_18369[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___18359,out))
;
return ((function (switch__16102__auto__,c__16216__auto___18359,out){
return (function() {
var cljs$core$async$state_machine__16103__auto__ = null;
var cljs$core$async$state_machine__16103__auto____0 = (function (){
var statearr_18351 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18351[(0)] = cljs$core$async$state_machine__16103__auto__);

(statearr_18351[(1)] = (1));

return statearr_18351;
});
var cljs$core$async$state_machine__16103__auto____1 = (function (state_18331){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_18331);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e18352){if((e18352 instanceof Object)){
var ex__16106__auto__ = e18352;
var statearr_18353_18370 = state_18331;
(statearr_18353_18370[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18331);

return cljs.core.cst$kw$recur;
} else {
throw e18352;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__18371 = state_18331;
state_18331 = G__18371;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$state_machine__16103__auto__ = function(state_18331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16103__auto____1.call(this,state_18331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16103__auto____0;
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16103__auto____1;
return cljs$core$async$state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___18359,out))
})();
var state__16218__auto__ = (function (){var statearr_18354 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_18354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___18359);

return statearr_18354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___18359,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args18372 = [];
var len__7296__auto___18421 = arguments.length;
var i__7297__auto___18422 = (0);
while(true){
if((i__7297__auto___18422 < len__7296__auto___18421)){
args18372.push((arguments[i__7297__auto___18422]));

var G__18423 = (i__7297__auto___18422 + (1));
i__7297__auto___18422 = G__18423;
continue;
} else {
}
break;
}

var G__18374 = args18372.length;
switch (G__18374) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18372.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16216__auto___18425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___18425,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___18425,out){
return (function (state_18398){
var state_val_18399 = (state_18398[(1)]);
if((state_val_18399 === (7))){
var inst_18380 = (state_18398[(7)]);
var inst_18380__$1 = (state_18398[(2)]);
var inst_18381 = (inst_18380__$1 == null);
var inst_18382 = cljs.core.not(inst_18381);
var state_18398__$1 = (function (){var statearr_18400 = state_18398;
(statearr_18400[(7)] = inst_18380__$1);

return statearr_18400;
})();
if(inst_18382){
var statearr_18401_18426 = state_18398__$1;
(statearr_18401_18426[(1)] = (8));

} else {
var statearr_18402_18427 = state_18398__$1;
(statearr_18402_18427[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18399 === (1))){
var inst_18375 = (0);
var state_18398__$1 = (function (){var statearr_18403 = state_18398;
(statearr_18403[(8)] = inst_18375);

return statearr_18403;
})();
var statearr_18404_18428 = state_18398__$1;
(statearr_18404_18428[(2)] = null);

(statearr_18404_18428[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18399 === (4))){
var state_18398__$1 = state_18398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18398__$1,(7),ch);
} else {
if((state_val_18399 === (6))){
var inst_18393 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18405_18429 = state_18398__$1;
(statearr_18405_18429[(2)] = inst_18393);

(statearr_18405_18429[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18399 === (3))){
var inst_18395 = (state_18398[(2)]);
var inst_18396 = cljs.core.async.close_BANG_(out);
var state_18398__$1 = (function (){var statearr_18406 = state_18398;
(statearr_18406[(9)] = inst_18395);

return statearr_18406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18398__$1,inst_18396);
} else {
if((state_val_18399 === (2))){
var inst_18375 = (state_18398[(8)]);
var inst_18377 = (inst_18375 < n);
var state_18398__$1 = state_18398;
if(cljs.core.truth_(inst_18377)){
var statearr_18407_18430 = state_18398__$1;
(statearr_18407_18430[(1)] = (4));

} else {
var statearr_18408_18431 = state_18398__$1;
(statearr_18408_18431[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18399 === (11))){
var inst_18375 = (state_18398[(8)]);
var inst_18385 = (state_18398[(2)]);
var inst_18386 = (inst_18375 + (1));
var inst_18375__$1 = inst_18386;
var state_18398__$1 = (function (){var statearr_18409 = state_18398;
(statearr_18409[(8)] = inst_18375__$1);

(statearr_18409[(10)] = inst_18385);

return statearr_18409;
})();
var statearr_18410_18432 = state_18398__$1;
(statearr_18410_18432[(2)] = null);

(statearr_18410_18432[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18399 === (9))){
var state_18398__$1 = state_18398;
var statearr_18411_18433 = state_18398__$1;
(statearr_18411_18433[(2)] = null);

(statearr_18411_18433[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18399 === (5))){
var state_18398__$1 = state_18398;
var statearr_18412_18434 = state_18398__$1;
(statearr_18412_18434[(2)] = null);

(statearr_18412_18434[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18399 === (10))){
var inst_18390 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18413_18435 = state_18398__$1;
(statearr_18413_18435[(2)] = inst_18390);

(statearr_18413_18435[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18399 === (8))){
var inst_18380 = (state_18398[(7)]);
var state_18398__$1 = state_18398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18398__$1,(11),out,inst_18380);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___18425,out))
;
return ((function (switch__16102__auto__,c__16216__auto___18425,out){
return (function() {
var cljs$core$async$state_machine__16103__auto__ = null;
var cljs$core$async$state_machine__16103__auto____0 = (function (){
var statearr_18417 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18417[(0)] = cljs$core$async$state_machine__16103__auto__);

(statearr_18417[(1)] = (1));

return statearr_18417;
});
var cljs$core$async$state_machine__16103__auto____1 = (function (state_18398){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_18398);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e18418){if((e18418 instanceof Object)){
var ex__16106__auto__ = e18418;
var statearr_18419_18436 = state_18398;
(statearr_18419_18436[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18398);

return cljs.core.cst$kw$recur;
} else {
throw e18418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__18437 = state_18398;
state_18398 = G__18437;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$state_machine__16103__auto__ = function(state_18398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16103__auto____1.call(this,state_18398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16103__auto____0;
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16103__auto____1;
return cljs$core$async$state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___18425,out))
})();
var state__16218__auto__ = (function (){var statearr_18420 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_18420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___18425);

return statearr_18420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___18425,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18447 = (function (map_LT_,f,ch,meta18448){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18448 = meta18448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18449,meta18448__$1){
var self__ = this;
var _18449__$1 = this;
return (new cljs.core.async.t_cljs$core$async18447(self__.map_LT_,self__.f,self__.ch,meta18448__$1));
});

cljs.core.async.t_cljs$core$async18447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18449){
var self__ = this;
var _18449__$1 = this;
return self__.meta18448;
});

cljs.core.async.t_cljs$core$async18447.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18447.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18447.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18447.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18447.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18450 = (function (map_LT_,f,ch,meta18448,_,fn1,meta18451){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18448 = meta18448;
this._ = _;
this.fn1 = fn1;
this.meta18451 = meta18451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18452,meta18451__$1){
var self__ = this;
var _18452__$1 = this;
return (new cljs.core.async.t_cljs$core$async18450(self__.map_LT_,self__.f,self__.ch,self__.meta18448,self__._,self__.fn1,meta18451__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18452){
var self__ = this;
var _18452__$1 = this;
return self__.meta18451;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18450.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18438_SHARP_){
var G__18453 = (((p1__18438_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18438_SHARP_) : self__.f.call(null,p1__18438_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18453) : f1.call(null,G__18453));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18450.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18448,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18447], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18451], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18450";

cljs.core.async.t_cljs$core$async18450.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async18450");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18450 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18450(map_LT___$1,f__$1,ch__$1,meta18448__$1,___$2,fn1__$1,meta18451){
return (new cljs.core.async.t_cljs$core$async18450(map_LT___$1,f__$1,ch__$1,meta18448__$1,___$2,fn1__$1,meta18451));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18450(self__.map_LT_,self__.f,self__.ch,self__.meta18448,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6209__auto__ = ret;
if(cljs.core.truth_(and__6209__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6209__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18454 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18454) : self__.f.call(null,G__18454));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18447.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18447.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18448], null);
});

cljs.core.async.t_cljs$core$async18447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18447";

cljs.core.async.t_cljs$core$async18447.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async18447");
});

cljs.core.async.__GT_t_cljs$core$async18447 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18447(map_LT___$1,f__$1,ch__$1,meta18448){
return (new cljs.core.async.t_cljs$core$async18447(map_LT___$1,f__$1,ch__$1,meta18448));
});

}

return (new cljs.core.async.t_cljs$core$async18447(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18458 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18458 = (function (map_GT_,f,ch,meta18459){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18459 = meta18459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18460,meta18459__$1){
var self__ = this;
var _18460__$1 = this;
return (new cljs.core.async.t_cljs$core$async18458(self__.map_GT_,self__.f,self__.ch,meta18459__$1));
});

cljs.core.async.t_cljs$core$async18458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18460){
var self__ = this;
var _18460__$1 = this;
return self__.meta18459;
});

cljs.core.async.t_cljs$core$async18458.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18458.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18458.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18458.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18458.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18458.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18459], null);
});

cljs.core.async.t_cljs$core$async18458.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18458";

cljs.core.async.t_cljs$core$async18458.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async18458");
});

cljs.core.async.__GT_t_cljs$core$async18458 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18458(map_GT___$1,f__$1,ch__$1,meta18459){
return (new cljs.core.async.t_cljs$core$async18458(map_GT___$1,f__$1,ch__$1,meta18459));
});

}

return (new cljs.core.async.t_cljs$core$async18458(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18464 = (function (filter_GT_,p,ch,meta18465){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18465 = meta18465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18466,meta18465__$1){
var self__ = this;
var _18466__$1 = this;
return (new cljs.core.async.t_cljs$core$async18464(self__.filter_GT_,self__.p,self__.ch,meta18465__$1));
});

cljs.core.async.t_cljs$core$async18464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18466){
var self__ = this;
var _18466__$1 = this;
return self__.meta18465;
});

cljs.core.async.t_cljs$core$async18464.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18464.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18464.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18464.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18465], null);
});

cljs.core.async.t_cljs$core$async18464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18464";

cljs.core.async.t_cljs$core$async18464.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async18464");
});

cljs.core.async.__GT_t_cljs$core$async18464 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18464(filter_GT___$1,p__$1,ch__$1,meta18465){
return (new cljs.core.async.t_cljs$core$async18464(filter_GT___$1,p__$1,ch__$1,meta18465));
});

}

return (new cljs.core.async.t_cljs$core$async18464(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args18467 = [];
var len__7296__auto___18511 = arguments.length;
var i__7297__auto___18512 = (0);
while(true){
if((i__7297__auto___18512 < len__7296__auto___18511)){
args18467.push((arguments[i__7297__auto___18512]));

var G__18513 = (i__7297__auto___18512 + (1));
i__7297__auto___18512 = G__18513;
continue;
} else {
}
break;
}

var G__18469 = args18467.length;
switch (G__18469) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18467.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16216__auto___18515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___18515,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___18515,out){
return (function (state_18490){
var state_val_18491 = (state_18490[(1)]);
if((state_val_18491 === (7))){
var inst_18486 = (state_18490[(2)]);
var state_18490__$1 = state_18490;
var statearr_18492_18516 = state_18490__$1;
(statearr_18492_18516[(2)] = inst_18486);

(statearr_18492_18516[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18491 === (1))){
var state_18490__$1 = state_18490;
var statearr_18493_18517 = state_18490__$1;
(statearr_18493_18517[(2)] = null);

(statearr_18493_18517[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18491 === (4))){
var inst_18472 = (state_18490[(7)]);
var inst_18472__$1 = (state_18490[(2)]);
var inst_18473 = (inst_18472__$1 == null);
var state_18490__$1 = (function (){var statearr_18494 = state_18490;
(statearr_18494[(7)] = inst_18472__$1);

return statearr_18494;
})();
if(cljs.core.truth_(inst_18473)){
var statearr_18495_18518 = state_18490__$1;
(statearr_18495_18518[(1)] = (5));

} else {
var statearr_18496_18519 = state_18490__$1;
(statearr_18496_18519[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18491 === (6))){
var inst_18472 = (state_18490[(7)]);
var inst_18477 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18472) : p.call(null,inst_18472));
var state_18490__$1 = state_18490;
if(cljs.core.truth_(inst_18477)){
var statearr_18497_18520 = state_18490__$1;
(statearr_18497_18520[(1)] = (8));

} else {
var statearr_18498_18521 = state_18490__$1;
(statearr_18498_18521[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18491 === (3))){
var inst_18488 = (state_18490[(2)]);
var state_18490__$1 = state_18490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18490__$1,inst_18488);
} else {
if((state_val_18491 === (2))){
var state_18490__$1 = state_18490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18490__$1,(4),ch);
} else {
if((state_val_18491 === (11))){
var inst_18480 = (state_18490[(2)]);
var state_18490__$1 = state_18490;
var statearr_18499_18522 = state_18490__$1;
(statearr_18499_18522[(2)] = inst_18480);

(statearr_18499_18522[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18491 === (9))){
var state_18490__$1 = state_18490;
var statearr_18500_18523 = state_18490__$1;
(statearr_18500_18523[(2)] = null);

(statearr_18500_18523[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18491 === (5))){
var inst_18475 = cljs.core.async.close_BANG_(out);
var state_18490__$1 = state_18490;
var statearr_18501_18524 = state_18490__$1;
(statearr_18501_18524[(2)] = inst_18475);

(statearr_18501_18524[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18491 === (10))){
var inst_18483 = (state_18490[(2)]);
var state_18490__$1 = (function (){var statearr_18502 = state_18490;
(statearr_18502[(8)] = inst_18483);

return statearr_18502;
})();
var statearr_18503_18525 = state_18490__$1;
(statearr_18503_18525[(2)] = null);

(statearr_18503_18525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18491 === (8))){
var inst_18472 = (state_18490[(7)]);
var state_18490__$1 = state_18490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18490__$1,(11),out,inst_18472);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___18515,out))
;
return ((function (switch__16102__auto__,c__16216__auto___18515,out){
return (function() {
var cljs$core$async$state_machine__16103__auto__ = null;
var cljs$core$async$state_machine__16103__auto____0 = (function (){
var statearr_18507 = [null,null,null,null,null,null,null,null,null];
(statearr_18507[(0)] = cljs$core$async$state_machine__16103__auto__);

(statearr_18507[(1)] = (1));

return statearr_18507;
});
var cljs$core$async$state_machine__16103__auto____1 = (function (state_18490){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_18490);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e18508){if((e18508 instanceof Object)){
var ex__16106__auto__ = e18508;
var statearr_18509_18526 = state_18490;
(statearr_18509_18526[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18490);

return cljs.core.cst$kw$recur;
} else {
throw e18508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__18527 = state_18490;
state_18490 = G__18527;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$state_machine__16103__auto__ = function(state_18490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16103__auto____1.call(this,state_18490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16103__auto____0;
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16103__auto____1;
return cljs$core$async$state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___18515,out))
})();
var state__16218__auto__ = (function (){var statearr_18510 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_18510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___18515);

return statearr_18510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___18515,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18528 = [];
var len__7296__auto___18531 = arguments.length;
var i__7297__auto___18532 = (0);
while(true){
if((i__7297__auto___18532 < len__7296__auto___18531)){
args18528.push((arguments[i__7297__auto___18532]));

var G__18533 = (i__7297__auto___18532 + (1));
i__7297__auto___18532 = G__18533;
continue;
} else {
}
break;
}

var G__18530 = args18528.length;
switch (G__18530) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18528.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16216__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto__){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto__){
return (function (state_18700){
var state_val_18701 = (state_18700[(1)]);
if((state_val_18701 === (7))){
var inst_18696 = (state_18700[(2)]);
var state_18700__$1 = state_18700;
var statearr_18702_18743 = state_18700__$1;
(statearr_18702_18743[(2)] = inst_18696);

(statearr_18702_18743[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (20))){
var inst_18666 = (state_18700[(7)]);
var inst_18677 = (state_18700[(2)]);
var inst_18678 = cljs.core.next(inst_18666);
var inst_18652 = inst_18678;
var inst_18653 = null;
var inst_18654 = (0);
var inst_18655 = (0);
var state_18700__$1 = (function (){var statearr_18703 = state_18700;
(statearr_18703[(8)] = inst_18677);

(statearr_18703[(9)] = inst_18652);

(statearr_18703[(10)] = inst_18655);

(statearr_18703[(11)] = inst_18654);

(statearr_18703[(12)] = inst_18653);

return statearr_18703;
})();
var statearr_18704_18744 = state_18700__$1;
(statearr_18704_18744[(2)] = null);

(statearr_18704_18744[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (1))){
var state_18700__$1 = state_18700;
var statearr_18705_18745 = state_18700__$1;
(statearr_18705_18745[(2)] = null);

(statearr_18705_18745[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (4))){
var inst_18641 = (state_18700[(13)]);
var inst_18641__$1 = (state_18700[(2)]);
var inst_18642 = (inst_18641__$1 == null);
var state_18700__$1 = (function (){var statearr_18706 = state_18700;
(statearr_18706[(13)] = inst_18641__$1);

return statearr_18706;
})();
if(cljs.core.truth_(inst_18642)){
var statearr_18707_18746 = state_18700__$1;
(statearr_18707_18746[(1)] = (5));

} else {
var statearr_18708_18747 = state_18700__$1;
(statearr_18708_18747[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (15))){
var state_18700__$1 = state_18700;
var statearr_18712_18748 = state_18700__$1;
(statearr_18712_18748[(2)] = null);

(statearr_18712_18748[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (21))){
var state_18700__$1 = state_18700;
var statearr_18713_18749 = state_18700__$1;
(statearr_18713_18749[(2)] = null);

(statearr_18713_18749[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (13))){
var inst_18652 = (state_18700[(9)]);
var inst_18655 = (state_18700[(10)]);
var inst_18654 = (state_18700[(11)]);
var inst_18653 = (state_18700[(12)]);
var inst_18662 = (state_18700[(2)]);
var inst_18663 = (inst_18655 + (1));
var tmp18709 = inst_18652;
var tmp18710 = inst_18654;
var tmp18711 = inst_18653;
var inst_18652__$1 = tmp18709;
var inst_18653__$1 = tmp18711;
var inst_18654__$1 = tmp18710;
var inst_18655__$1 = inst_18663;
var state_18700__$1 = (function (){var statearr_18714 = state_18700;
(statearr_18714[(14)] = inst_18662);

(statearr_18714[(9)] = inst_18652__$1);

(statearr_18714[(10)] = inst_18655__$1);

(statearr_18714[(11)] = inst_18654__$1);

(statearr_18714[(12)] = inst_18653__$1);

return statearr_18714;
})();
var statearr_18715_18750 = state_18700__$1;
(statearr_18715_18750[(2)] = null);

(statearr_18715_18750[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (22))){
var state_18700__$1 = state_18700;
var statearr_18716_18751 = state_18700__$1;
(statearr_18716_18751[(2)] = null);

(statearr_18716_18751[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (6))){
var inst_18641 = (state_18700[(13)]);
var inst_18650 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18641) : f.call(null,inst_18641));
var inst_18651 = cljs.core.seq(inst_18650);
var inst_18652 = inst_18651;
var inst_18653 = null;
var inst_18654 = (0);
var inst_18655 = (0);
var state_18700__$1 = (function (){var statearr_18717 = state_18700;
(statearr_18717[(9)] = inst_18652);

(statearr_18717[(10)] = inst_18655);

(statearr_18717[(11)] = inst_18654);

(statearr_18717[(12)] = inst_18653);

return statearr_18717;
})();
var statearr_18718_18752 = state_18700__$1;
(statearr_18718_18752[(2)] = null);

(statearr_18718_18752[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (17))){
var inst_18666 = (state_18700[(7)]);
var inst_18670 = cljs.core.chunk_first(inst_18666);
var inst_18671 = cljs.core.chunk_rest(inst_18666);
var inst_18672 = cljs.core.count(inst_18670);
var inst_18652 = inst_18671;
var inst_18653 = inst_18670;
var inst_18654 = inst_18672;
var inst_18655 = (0);
var state_18700__$1 = (function (){var statearr_18719 = state_18700;
(statearr_18719[(9)] = inst_18652);

(statearr_18719[(10)] = inst_18655);

(statearr_18719[(11)] = inst_18654);

(statearr_18719[(12)] = inst_18653);

return statearr_18719;
})();
var statearr_18720_18753 = state_18700__$1;
(statearr_18720_18753[(2)] = null);

(statearr_18720_18753[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (3))){
var inst_18698 = (state_18700[(2)]);
var state_18700__$1 = state_18700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18700__$1,inst_18698);
} else {
if((state_val_18701 === (12))){
var inst_18686 = (state_18700[(2)]);
var state_18700__$1 = state_18700;
var statearr_18721_18754 = state_18700__$1;
(statearr_18721_18754[(2)] = inst_18686);

(statearr_18721_18754[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (2))){
var state_18700__$1 = state_18700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18700__$1,(4),in$);
} else {
if((state_val_18701 === (23))){
var inst_18694 = (state_18700[(2)]);
var state_18700__$1 = state_18700;
var statearr_18722_18755 = state_18700__$1;
(statearr_18722_18755[(2)] = inst_18694);

(statearr_18722_18755[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (19))){
var inst_18681 = (state_18700[(2)]);
var state_18700__$1 = state_18700;
var statearr_18723_18756 = state_18700__$1;
(statearr_18723_18756[(2)] = inst_18681);

(statearr_18723_18756[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (11))){
var inst_18666 = (state_18700[(7)]);
var inst_18652 = (state_18700[(9)]);
var inst_18666__$1 = cljs.core.seq(inst_18652);
var state_18700__$1 = (function (){var statearr_18724 = state_18700;
(statearr_18724[(7)] = inst_18666__$1);

return statearr_18724;
})();
if(inst_18666__$1){
var statearr_18725_18757 = state_18700__$1;
(statearr_18725_18757[(1)] = (14));

} else {
var statearr_18726_18758 = state_18700__$1;
(statearr_18726_18758[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (9))){
var inst_18688 = (state_18700[(2)]);
var inst_18689 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18700__$1 = (function (){var statearr_18727 = state_18700;
(statearr_18727[(15)] = inst_18688);

return statearr_18727;
})();
if(cljs.core.truth_(inst_18689)){
var statearr_18728_18759 = state_18700__$1;
(statearr_18728_18759[(1)] = (21));

} else {
var statearr_18729_18760 = state_18700__$1;
(statearr_18729_18760[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (5))){
var inst_18644 = cljs.core.async.close_BANG_(out);
var state_18700__$1 = state_18700;
var statearr_18730_18761 = state_18700__$1;
(statearr_18730_18761[(2)] = inst_18644);

(statearr_18730_18761[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (14))){
var inst_18666 = (state_18700[(7)]);
var inst_18668 = cljs.core.chunked_seq_QMARK_(inst_18666);
var state_18700__$1 = state_18700;
if(inst_18668){
var statearr_18731_18762 = state_18700__$1;
(statearr_18731_18762[(1)] = (17));

} else {
var statearr_18732_18763 = state_18700__$1;
(statearr_18732_18763[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (16))){
var inst_18684 = (state_18700[(2)]);
var state_18700__$1 = state_18700;
var statearr_18733_18764 = state_18700__$1;
(statearr_18733_18764[(2)] = inst_18684);

(statearr_18733_18764[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18701 === (10))){
var inst_18655 = (state_18700[(10)]);
var inst_18653 = (state_18700[(12)]);
var inst_18660 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18653,inst_18655);
var state_18700__$1 = state_18700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18700__$1,(13),out,inst_18660);
} else {
if((state_val_18701 === (18))){
var inst_18666 = (state_18700[(7)]);
var inst_18675 = cljs.core.first(inst_18666);
var state_18700__$1 = state_18700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18700__$1,(20),out,inst_18675);
} else {
if((state_val_18701 === (8))){
var inst_18655 = (state_18700[(10)]);
var inst_18654 = (state_18700[(11)]);
var inst_18657 = (inst_18655 < inst_18654);
var inst_18658 = inst_18657;
var state_18700__$1 = state_18700;
if(cljs.core.truth_(inst_18658)){
var statearr_18734_18765 = state_18700__$1;
(statearr_18734_18765[(1)] = (10));

} else {
var statearr_18735_18766 = state_18700__$1;
(statearr_18735_18766[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto__))
;
return ((function (switch__16102__auto__,c__16216__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16103__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16103__auto____0 = (function (){
var statearr_18739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18739[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16103__auto__);

(statearr_18739[(1)] = (1));

return statearr_18739;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16103__auto____1 = (function (state_18700){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_18700);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e18740){if((e18740 instanceof Object)){
var ex__16106__auto__ = e18740;
var statearr_18741_18767 = state_18700;
(statearr_18741_18767[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18700);

return cljs.core.cst$kw$recur;
} else {
throw e18740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__18768 = state_18700;
state_18700 = G__18768;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16103__auto__ = function(state_18700){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16103__auto____1.call(this,state_18700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16103__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16103__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto__))
})();
var state__16218__auto__ = (function (){var statearr_18742 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_18742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_18742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto__))
);

return c__16216__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18769 = [];
var len__7296__auto___18772 = arguments.length;
var i__7297__auto___18773 = (0);
while(true){
if((i__7297__auto___18773 < len__7296__auto___18772)){
args18769.push((arguments[i__7297__auto___18773]));

var G__18774 = (i__7297__auto___18773 + (1));
i__7297__auto___18773 = G__18774;
continue;
} else {
}
break;
}

var G__18771 = args18769.length;
switch (G__18771) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18769.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args18776 = [];
var len__7296__auto___18779 = arguments.length;
var i__7297__auto___18780 = (0);
while(true){
if((i__7297__auto___18780 < len__7296__auto___18779)){
args18776.push((arguments[i__7297__auto___18780]));

var G__18781 = (i__7297__auto___18780 + (1));
i__7297__auto___18780 = G__18781;
continue;
} else {
}
break;
}

var G__18778 = args18776.length;
switch (G__18778) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18776.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args18783 = [];
var len__7296__auto___18834 = arguments.length;
var i__7297__auto___18835 = (0);
while(true){
if((i__7297__auto___18835 < len__7296__auto___18834)){
args18783.push((arguments[i__7297__auto___18835]));

var G__18836 = (i__7297__auto___18835 + (1));
i__7297__auto___18835 = G__18836;
continue;
} else {
}
break;
}

var G__18785 = args18783.length;
switch (G__18785) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18783.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16216__auto___18838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___18838,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___18838,out){
return (function (state_18809){
var state_val_18810 = (state_18809[(1)]);
if((state_val_18810 === (7))){
var inst_18804 = (state_18809[(2)]);
var state_18809__$1 = state_18809;
var statearr_18811_18839 = state_18809__$1;
(statearr_18811_18839[(2)] = inst_18804);

(statearr_18811_18839[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18810 === (1))){
var inst_18786 = null;
var state_18809__$1 = (function (){var statearr_18812 = state_18809;
(statearr_18812[(7)] = inst_18786);

return statearr_18812;
})();
var statearr_18813_18840 = state_18809__$1;
(statearr_18813_18840[(2)] = null);

(statearr_18813_18840[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18810 === (4))){
var inst_18789 = (state_18809[(8)]);
var inst_18789__$1 = (state_18809[(2)]);
var inst_18790 = (inst_18789__$1 == null);
var inst_18791 = cljs.core.not(inst_18790);
var state_18809__$1 = (function (){var statearr_18814 = state_18809;
(statearr_18814[(8)] = inst_18789__$1);

return statearr_18814;
})();
if(inst_18791){
var statearr_18815_18841 = state_18809__$1;
(statearr_18815_18841[(1)] = (5));

} else {
var statearr_18816_18842 = state_18809__$1;
(statearr_18816_18842[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18810 === (6))){
var state_18809__$1 = state_18809;
var statearr_18817_18843 = state_18809__$1;
(statearr_18817_18843[(2)] = null);

(statearr_18817_18843[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18810 === (3))){
var inst_18806 = (state_18809[(2)]);
var inst_18807 = cljs.core.async.close_BANG_(out);
var state_18809__$1 = (function (){var statearr_18818 = state_18809;
(statearr_18818[(9)] = inst_18806);

return statearr_18818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18809__$1,inst_18807);
} else {
if((state_val_18810 === (2))){
var state_18809__$1 = state_18809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18809__$1,(4),ch);
} else {
if((state_val_18810 === (11))){
var inst_18789 = (state_18809[(8)]);
var inst_18798 = (state_18809[(2)]);
var inst_18786 = inst_18789;
var state_18809__$1 = (function (){var statearr_18819 = state_18809;
(statearr_18819[(7)] = inst_18786);

(statearr_18819[(10)] = inst_18798);

return statearr_18819;
})();
var statearr_18820_18844 = state_18809__$1;
(statearr_18820_18844[(2)] = null);

(statearr_18820_18844[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18810 === (9))){
var inst_18789 = (state_18809[(8)]);
var state_18809__$1 = state_18809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18809__$1,(11),out,inst_18789);
} else {
if((state_val_18810 === (5))){
var inst_18786 = (state_18809[(7)]);
var inst_18789 = (state_18809[(8)]);
var inst_18793 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18789,inst_18786);
var state_18809__$1 = state_18809;
if(inst_18793){
var statearr_18822_18845 = state_18809__$1;
(statearr_18822_18845[(1)] = (8));

} else {
var statearr_18823_18846 = state_18809__$1;
(statearr_18823_18846[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18810 === (10))){
var inst_18801 = (state_18809[(2)]);
var state_18809__$1 = state_18809;
var statearr_18824_18847 = state_18809__$1;
(statearr_18824_18847[(2)] = inst_18801);

(statearr_18824_18847[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18810 === (8))){
var inst_18786 = (state_18809[(7)]);
var tmp18821 = inst_18786;
var inst_18786__$1 = tmp18821;
var state_18809__$1 = (function (){var statearr_18825 = state_18809;
(statearr_18825[(7)] = inst_18786__$1);

return statearr_18825;
})();
var statearr_18826_18848 = state_18809__$1;
(statearr_18826_18848[(2)] = null);

(statearr_18826_18848[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___18838,out))
;
return ((function (switch__16102__auto__,c__16216__auto___18838,out){
return (function() {
var cljs$core$async$state_machine__16103__auto__ = null;
var cljs$core$async$state_machine__16103__auto____0 = (function (){
var statearr_18830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18830[(0)] = cljs$core$async$state_machine__16103__auto__);

(statearr_18830[(1)] = (1));

return statearr_18830;
});
var cljs$core$async$state_machine__16103__auto____1 = (function (state_18809){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_18809);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e18831){if((e18831 instanceof Object)){
var ex__16106__auto__ = e18831;
var statearr_18832_18849 = state_18809;
(statearr_18832_18849[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18809);

return cljs.core.cst$kw$recur;
} else {
throw e18831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__18850 = state_18809;
state_18809 = G__18850;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$state_machine__16103__auto__ = function(state_18809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16103__auto____1.call(this,state_18809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16103__auto____0;
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16103__auto____1;
return cljs$core$async$state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___18838,out))
})();
var state__16218__auto__ = (function (){var statearr_18833 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_18833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___18838);

return statearr_18833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___18838,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18851 = [];
var len__7296__auto___18921 = arguments.length;
var i__7297__auto___18922 = (0);
while(true){
if((i__7297__auto___18922 < len__7296__auto___18921)){
args18851.push((arguments[i__7297__auto___18922]));

var G__18923 = (i__7297__auto___18922 + (1));
i__7297__auto___18922 = G__18923;
continue;
} else {
}
break;
}

var G__18853 = args18851.length;
switch (G__18853) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18851.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16216__auto___18925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___18925,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___18925,out){
return (function (state_18891){
var state_val_18892 = (state_18891[(1)]);
if((state_val_18892 === (7))){
var inst_18887 = (state_18891[(2)]);
var state_18891__$1 = state_18891;
var statearr_18893_18926 = state_18891__$1;
(statearr_18893_18926[(2)] = inst_18887);

(statearr_18893_18926[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (1))){
var inst_18854 = (new Array(n));
var inst_18855 = inst_18854;
var inst_18856 = (0);
var state_18891__$1 = (function (){var statearr_18894 = state_18891;
(statearr_18894[(7)] = inst_18856);

(statearr_18894[(8)] = inst_18855);

return statearr_18894;
})();
var statearr_18895_18927 = state_18891__$1;
(statearr_18895_18927[(2)] = null);

(statearr_18895_18927[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (4))){
var inst_18859 = (state_18891[(9)]);
var inst_18859__$1 = (state_18891[(2)]);
var inst_18860 = (inst_18859__$1 == null);
var inst_18861 = cljs.core.not(inst_18860);
var state_18891__$1 = (function (){var statearr_18896 = state_18891;
(statearr_18896[(9)] = inst_18859__$1);

return statearr_18896;
})();
if(inst_18861){
var statearr_18897_18928 = state_18891__$1;
(statearr_18897_18928[(1)] = (5));

} else {
var statearr_18898_18929 = state_18891__$1;
(statearr_18898_18929[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (15))){
var inst_18881 = (state_18891[(2)]);
var state_18891__$1 = state_18891;
var statearr_18899_18930 = state_18891__$1;
(statearr_18899_18930[(2)] = inst_18881);

(statearr_18899_18930[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (13))){
var state_18891__$1 = state_18891;
var statearr_18900_18931 = state_18891__$1;
(statearr_18900_18931[(2)] = null);

(statearr_18900_18931[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (6))){
var inst_18856 = (state_18891[(7)]);
var inst_18877 = (inst_18856 > (0));
var state_18891__$1 = state_18891;
if(cljs.core.truth_(inst_18877)){
var statearr_18901_18932 = state_18891__$1;
(statearr_18901_18932[(1)] = (12));

} else {
var statearr_18902_18933 = state_18891__$1;
(statearr_18902_18933[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (3))){
var inst_18889 = (state_18891[(2)]);
var state_18891__$1 = state_18891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18891__$1,inst_18889);
} else {
if((state_val_18892 === (12))){
var inst_18855 = (state_18891[(8)]);
var inst_18879 = cljs.core.vec(inst_18855);
var state_18891__$1 = state_18891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18891__$1,(15),out,inst_18879);
} else {
if((state_val_18892 === (2))){
var state_18891__$1 = state_18891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18891__$1,(4),ch);
} else {
if((state_val_18892 === (11))){
var inst_18871 = (state_18891[(2)]);
var inst_18872 = (new Array(n));
var inst_18855 = inst_18872;
var inst_18856 = (0);
var state_18891__$1 = (function (){var statearr_18903 = state_18891;
(statearr_18903[(7)] = inst_18856);

(statearr_18903[(10)] = inst_18871);

(statearr_18903[(8)] = inst_18855);

return statearr_18903;
})();
var statearr_18904_18934 = state_18891__$1;
(statearr_18904_18934[(2)] = null);

(statearr_18904_18934[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (9))){
var inst_18855 = (state_18891[(8)]);
var inst_18869 = cljs.core.vec(inst_18855);
var state_18891__$1 = state_18891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18891__$1,(11),out,inst_18869);
} else {
if((state_val_18892 === (5))){
var inst_18864 = (state_18891[(11)]);
var inst_18856 = (state_18891[(7)]);
var inst_18859 = (state_18891[(9)]);
var inst_18855 = (state_18891[(8)]);
var inst_18863 = (inst_18855[inst_18856] = inst_18859);
var inst_18864__$1 = (inst_18856 + (1));
var inst_18865 = (inst_18864__$1 < n);
var state_18891__$1 = (function (){var statearr_18905 = state_18891;
(statearr_18905[(11)] = inst_18864__$1);

(statearr_18905[(12)] = inst_18863);

return statearr_18905;
})();
if(cljs.core.truth_(inst_18865)){
var statearr_18906_18935 = state_18891__$1;
(statearr_18906_18935[(1)] = (8));

} else {
var statearr_18907_18936 = state_18891__$1;
(statearr_18907_18936[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (14))){
var inst_18884 = (state_18891[(2)]);
var inst_18885 = cljs.core.async.close_BANG_(out);
var state_18891__$1 = (function (){var statearr_18909 = state_18891;
(statearr_18909[(13)] = inst_18884);

return statearr_18909;
})();
var statearr_18910_18937 = state_18891__$1;
(statearr_18910_18937[(2)] = inst_18885);

(statearr_18910_18937[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (10))){
var inst_18875 = (state_18891[(2)]);
var state_18891__$1 = state_18891;
var statearr_18911_18938 = state_18891__$1;
(statearr_18911_18938[(2)] = inst_18875);

(statearr_18911_18938[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (8))){
var inst_18864 = (state_18891[(11)]);
var inst_18855 = (state_18891[(8)]);
var tmp18908 = inst_18855;
var inst_18855__$1 = tmp18908;
var inst_18856 = inst_18864;
var state_18891__$1 = (function (){var statearr_18912 = state_18891;
(statearr_18912[(7)] = inst_18856);

(statearr_18912[(8)] = inst_18855__$1);

return statearr_18912;
})();
var statearr_18913_18939 = state_18891__$1;
(statearr_18913_18939[(2)] = null);

(statearr_18913_18939[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___18925,out))
;
return ((function (switch__16102__auto__,c__16216__auto___18925,out){
return (function() {
var cljs$core$async$state_machine__16103__auto__ = null;
var cljs$core$async$state_machine__16103__auto____0 = (function (){
var statearr_18917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18917[(0)] = cljs$core$async$state_machine__16103__auto__);

(statearr_18917[(1)] = (1));

return statearr_18917;
});
var cljs$core$async$state_machine__16103__auto____1 = (function (state_18891){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_18891);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e18918){if((e18918 instanceof Object)){
var ex__16106__auto__ = e18918;
var statearr_18919_18940 = state_18891;
(statearr_18919_18940[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18891);

return cljs.core.cst$kw$recur;
} else {
throw e18918;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__18941 = state_18891;
state_18891 = G__18941;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$state_machine__16103__auto__ = function(state_18891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16103__auto____1.call(this,state_18891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16103__auto____0;
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16103__auto____1;
return cljs$core$async$state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___18925,out))
})();
var state__16218__auto__ = (function (){var statearr_18920 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_18920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___18925);

return statearr_18920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___18925,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18942 = [];
var len__7296__auto___19016 = arguments.length;
var i__7297__auto___19017 = (0);
while(true){
if((i__7297__auto___19017 < len__7296__auto___19016)){
args18942.push((arguments[i__7297__auto___19017]));

var G__19018 = (i__7297__auto___19017 + (1));
i__7297__auto___19017 = G__19018;
continue;
} else {
}
break;
}

var G__18944 = args18942.length;
switch (G__18944) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18942.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16216__auto___19020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___19020,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16102__auto__ = ((function (c__16216__auto___19020,out){
return (function (state_18986){
var state_val_18987 = (state_18986[(1)]);
if((state_val_18987 === (7))){
var inst_18982 = (state_18986[(2)]);
var state_18986__$1 = state_18986;
var statearr_18988_19021 = state_18986__$1;
(statearr_18988_19021[(2)] = inst_18982);

(statearr_18988_19021[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18987 === (1))){
var inst_18945 = [];
var inst_18946 = inst_18945;
var inst_18947 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18986__$1 = (function (){var statearr_18989 = state_18986;
(statearr_18989[(7)] = inst_18946);

(statearr_18989[(8)] = inst_18947);

return statearr_18989;
})();
var statearr_18990_19022 = state_18986__$1;
(statearr_18990_19022[(2)] = null);

(statearr_18990_19022[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18987 === (4))){
var inst_18950 = (state_18986[(9)]);
var inst_18950__$1 = (state_18986[(2)]);
var inst_18951 = (inst_18950__$1 == null);
var inst_18952 = cljs.core.not(inst_18951);
var state_18986__$1 = (function (){var statearr_18991 = state_18986;
(statearr_18991[(9)] = inst_18950__$1);

return statearr_18991;
})();
if(inst_18952){
var statearr_18992_19023 = state_18986__$1;
(statearr_18992_19023[(1)] = (5));

} else {
var statearr_18993_19024 = state_18986__$1;
(statearr_18993_19024[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18987 === (15))){
var inst_18976 = (state_18986[(2)]);
var state_18986__$1 = state_18986;
var statearr_18994_19025 = state_18986__$1;
(statearr_18994_19025[(2)] = inst_18976);

(statearr_18994_19025[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18987 === (13))){
var state_18986__$1 = state_18986;
var statearr_18995_19026 = state_18986__$1;
(statearr_18995_19026[(2)] = null);

(statearr_18995_19026[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18987 === (6))){
var inst_18946 = (state_18986[(7)]);
var inst_18971 = inst_18946.length;
var inst_18972 = (inst_18971 > (0));
var state_18986__$1 = state_18986;
if(cljs.core.truth_(inst_18972)){
var statearr_18996_19027 = state_18986__$1;
(statearr_18996_19027[(1)] = (12));

} else {
var statearr_18997_19028 = state_18986__$1;
(statearr_18997_19028[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18987 === (3))){
var inst_18984 = (state_18986[(2)]);
var state_18986__$1 = state_18986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18986__$1,inst_18984);
} else {
if((state_val_18987 === (12))){
var inst_18946 = (state_18986[(7)]);
var inst_18974 = cljs.core.vec(inst_18946);
var state_18986__$1 = state_18986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18986__$1,(15),out,inst_18974);
} else {
if((state_val_18987 === (2))){
var state_18986__$1 = state_18986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18986__$1,(4),ch);
} else {
if((state_val_18987 === (11))){
var inst_18950 = (state_18986[(9)]);
var inst_18954 = (state_18986[(10)]);
var inst_18964 = (state_18986[(2)]);
var inst_18965 = [];
var inst_18966 = inst_18965.push(inst_18950);
var inst_18946 = inst_18965;
var inst_18947 = inst_18954;
var state_18986__$1 = (function (){var statearr_18998 = state_18986;
(statearr_18998[(7)] = inst_18946);

(statearr_18998[(11)] = inst_18966);

(statearr_18998[(12)] = inst_18964);

(statearr_18998[(8)] = inst_18947);

return statearr_18998;
})();
var statearr_18999_19029 = state_18986__$1;
(statearr_18999_19029[(2)] = null);

(statearr_18999_19029[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18987 === (9))){
var inst_18946 = (state_18986[(7)]);
var inst_18962 = cljs.core.vec(inst_18946);
var state_18986__$1 = state_18986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18986__$1,(11),out,inst_18962);
} else {
if((state_val_18987 === (5))){
var inst_18947 = (state_18986[(8)]);
var inst_18950 = (state_18986[(9)]);
var inst_18954 = (state_18986[(10)]);
var inst_18954__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18950) : f.call(null,inst_18950));
var inst_18955 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18954__$1,inst_18947);
var inst_18956 = cljs.core.keyword_identical_QMARK_(inst_18947,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18957 = (inst_18955) || (inst_18956);
var state_18986__$1 = (function (){var statearr_19000 = state_18986;
(statearr_19000[(10)] = inst_18954__$1);

return statearr_19000;
})();
if(cljs.core.truth_(inst_18957)){
var statearr_19001_19030 = state_18986__$1;
(statearr_19001_19030[(1)] = (8));

} else {
var statearr_19002_19031 = state_18986__$1;
(statearr_19002_19031[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18987 === (14))){
var inst_18979 = (state_18986[(2)]);
var inst_18980 = cljs.core.async.close_BANG_(out);
var state_18986__$1 = (function (){var statearr_19004 = state_18986;
(statearr_19004[(13)] = inst_18979);

return statearr_19004;
})();
var statearr_19005_19032 = state_18986__$1;
(statearr_19005_19032[(2)] = inst_18980);

(statearr_19005_19032[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18987 === (10))){
var inst_18969 = (state_18986[(2)]);
var state_18986__$1 = state_18986;
var statearr_19006_19033 = state_18986__$1;
(statearr_19006_19033[(2)] = inst_18969);

(statearr_19006_19033[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18987 === (8))){
var inst_18946 = (state_18986[(7)]);
var inst_18950 = (state_18986[(9)]);
var inst_18954 = (state_18986[(10)]);
var inst_18959 = inst_18946.push(inst_18950);
var tmp19003 = inst_18946;
var inst_18946__$1 = tmp19003;
var inst_18947 = inst_18954;
var state_18986__$1 = (function (){var statearr_19007 = state_18986;
(statearr_19007[(7)] = inst_18946__$1);

(statearr_19007[(14)] = inst_18959);

(statearr_19007[(8)] = inst_18947);

return statearr_19007;
})();
var statearr_19008_19034 = state_18986__$1;
(statearr_19008_19034[(2)] = null);

(statearr_19008_19034[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16216__auto___19020,out))
;
return ((function (switch__16102__auto__,c__16216__auto___19020,out){
return (function() {
var cljs$core$async$state_machine__16103__auto__ = null;
var cljs$core$async$state_machine__16103__auto____0 = (function (){
var statearr_19012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19012[(0)] = cljs$core$async$state_machine__16103__auto__);

(statearr_19012[(1)] = (1));

return statearr_19012;
});
var cljs$core$async$state_machine__16103__auto____1 = (function (state_18986){
while(true){
var ret_value__16104__auto__ = (function (){try{while(true){
var result__16105__auto__ = switch__16102__auto__(state_18986);
if(cljs.core.keyword_identical_QMARK_(result__16105__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16105__auto__;
}
break;
}
}catch (e19013){if((e19013 instanceof Object)){
var ex__16106__auto__ = e19013;
var statearr_19014_19035 = state_18986;
(statearr_19014_19035[(5)] = ex__16106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18986);

return cljs.core.cst$kw$recur;
} else {
throw e19013;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16104__auto__,cljs.core.cst$kw$recur)){
var G__19036 = state_18986;
state_18986 = G__19036;
continue;
} else {
return ret_value__16104__auto__;
}
break;
}
});
cljs$core$async$state_machine__16103__auto__ = function(state_18986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16103__auto____1.call(this,state_18986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16103__auto____0;
cljs$core$async$state_machine__16103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16103__auto____1;
return cljs$core$async$state_machine__16103__auto__;
})()
;})(switch__16102__auto__,c__16216__auto___19020,out))
})();
var state__16218__auto__ = (function (){var statearr_19015 = (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
(statearr_19015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___19020);

return statearr_19015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___19020,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

