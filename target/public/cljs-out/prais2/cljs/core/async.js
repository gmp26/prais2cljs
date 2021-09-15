// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16545 = arguments.length;
switch (G__16545) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16546 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16546 = (function (f,blockable,meta16547){
this.f = f;
this.blockable = blockable;
this.meta16547 = meta16547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16548,meta16547__$1){
var self__ = this;
var _16548__$1 = this;
return (new cljs.core.async.t_cljs$core$async16546(self__.f,self__.blockable,meta16547__$1));
});

cljs.core.async.t_cljs$core$async16546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16548){
var self__ = this;
var _16548__$1 = this;
return self__.meta16547;
});

cljs.core.async.t_cljs$core$async16546.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16546.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16546.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16546.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16547], null);
});

cljs.core.async.t_cljs$core$async16546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16546";

cljs.core.async.t_cljs$core$async16546.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async16546");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16546.
 */
cljs.core.async.__GT_t_cljs$core$async16546 = (function cljs$core$async$__GT_t_cljs$core$async16546(f__$1,blockable__$1,meta16547){
return (new cljs.core.async.t_cljs$core$async16546(f__$1,blockable__$1,meta16547));
});

}

return (new cljs.core.async.t_cljs$core$async16546(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__16552 = arguments.length;
switch (G__16552) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__16555 = arguments.length;
switch (G__16555) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__16558 = arguments.length;
switch (G__16558) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16560 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16560) : fn1.call(null,val_16560));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16560,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16560) : fn1.call(null,val_16560));
});})(val_16560,ret))
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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16562 = arguments.length;
switch (G__16562) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5751__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5751__auto__))
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
var n__4395__auto___16564 = n;
var x_16565 = (0);
while(true){
if((x_16565 < n__4395__auto___16564)){
(a[x_16565] = x_16565);

var G__16566 = (x_16565 + (1));
x_16565 = G__16566;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16567 = (function (flag,meta16568){
this.flag = flag;
this.meta16568 = meta16568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16569,meta16568__$1){
var self__ = this;
var _16569__$1 = this;
return (new cljs.core.async.t_cljs$core$async16567(self__.flag,meta16568__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16569){
var self__ = this;
var _16569__$1 = this;
return self__.meta16568;
});})(flag))
;

cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16567.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16568], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16567";

cljs.core.async.t_cljs$core$async16567.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async16567");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16567.
 */
cljs.core.async.__GT_t_cljs$core$async16567 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16567(flag__$1,meta16568){
return (new cljs.core.async.t_cljs$core$async16567(flag__$1,meta16568));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16567(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16570 = (function (flag,cb,meta16571){
this.flag = flag;
this.cb = cb;
this.meta16571 = meta16571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16572,meta16571__$1){
var self__ = this;
var _16572__$1 = this;
return (new cljs.core.async.t_cljs$core$async16570(self__.flag,self__.cb,meta16571__$1));
});

cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16572){
var self__ = this;
var _16572__$1 = this;
return self__.meta16571;
});

cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16571], null);
});

cljs.core.async.t_cljs$core$async16570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16570";

cljs.core.async.t_cljs$core$async16570.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async16570");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16570.
 */
cljs.core.async.__GT_t_cljs$core$async16570 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16570(flag__$1,cb__$1,meta16571){
return (new cljs.core.async.t_cljs$core$async16570(flag__$1,cb__$1,meta16571));
});

}

return (new cljs.core.async.t_cljs$core$async16570(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

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
return (function (p1__16573_SHARP_){
var G__16575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16573_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16575) : fret.call(null,G__16575));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16574_SHARP_){
var G__16576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16574_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16576) : fret.call(null,G__16576));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3936__auto__ = wport;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16577 = (i + (1));
i = G__16577;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3936__auto__ = ret;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5753__auto__ = (function (){var and__3925__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4521__auto__ = [];
var len__4518__auto___16583 = arguments.length;
var i__4519__auto___16584 = (0);
while(true){
if((i__4519__auto___16584 < len__4518__auto___16583)){
args__4521__auto__.push((arguments[i__4519__auto___16584]));

var G__16585 = (i__4519__auto___16584 + (1));
i__4519__auto___16584 = G__16585;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16580){
var map__16581 = p__16580;
var map__16581__$1 = ((((!((map__16581 == null)))?(((((map__16581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16581):map__16581);
var opts = map__16581__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16578){
var G__16579 = cljs.core.first(seq16578);
var seq16578__$1 = cljs.core.next(seq16578);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16579,seq16578__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
return cljs.core.deref(ret);
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
var G__16587 = arguments.length;
switch (G__16587) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16485__auto___16634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___16634){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___16634){
return (function (state_16611){
var state_val_16612 = (state_16611[(1)]);
if((state_val_16612 === (7))){
var inst_16607 = (state_16611[(2)]);
var state_16611__$1 = state_16611;
var statearr_16613_16635 = state_16611__$1;
(statearr_16613_16635[(2)] = inst_16607);

(statearr_16613_16635[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16612 === (1))){
var state_16611__$1 = state_16611;
var statearr_16614_16636 = state_16611__$1;
(statearr_16614_16636[(2)] = null);

(statearr_16614_16636[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16612 === (4))){
var inst_16590 = (state_16611[(7)]);
var inst_16590__$1 = (state_16611[(2)]);
var inst_16591 = (inst_16590__$1 == null);
var state_16611__$1 = (function (){var statearr_16615 = state_16611;
(statearr_16615[(7)] = inst_16590__$1);

return statearr_16615;
})();
if(cljs.core.truth_(inst_16591)){
var statearr_16616_16637 = state_16611__$1;
(statearr_16616_16637[(1)] = (5));

} else {
var statearr_16617_16638 = state_16611__$1;
(statearr_16617_16638[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16612 === (13))){
var state_16611__$1 = state_16611;
var statearr_16618_16639 = state_16611__$1;
(statearr_16618_16639[(2)] = null);

(statearr_16618_16639[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16612 === (6))){
var inst_16590 = (state_16611[(7)]);
var state_16611__$1 = state_16611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16611__$1,(11),to,inst_16590);
} else {
if((state_val_16612 === (3))){
var inst_16609 = (state_16611[(2)]);
var state_16611__$1 = state_16611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16611__$1,inst_16609);
} else {
if((state_val_16612 === (12))){
var state_16611__$1 = state_16611;
var statearr_16619_16640 = state_16611__$1;
(statearr_16619_16640[(2)] = null);

(statearr_16619_16640[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16612 === (2))){
var state_16611__$1 = state_16611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16611__$1,(4),from);
} else {
if((state_val_16612 === (11))){
var inst_16600 = (state_16611[(2)]);
var state_16611__$1 = state_16611;
if(cljs.core.truth_(inst_16600)){
var statearr_16620_16641 = state_16611__$1;
(statearr_16620_16641[(1)] = (12));

} else {
var statearr_16621_16642 = state_16611__$1;
(statearr_16621_16642[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16612 === (9))){
var state_16611__$1 = state_16611;
var statearr_16622_16643 = state_16611__$1;
(statearr_16622_16643[(2)] = null);

(statearr_16622_16643[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16612 === (5))){
var state_16611__$1 = state_16611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16623_16644 = state_16611__$1;
(statearr_16623_16644[(1)] = (8));

} else {
var statearr_16624_16645 = state_16611__$1;
(statearr_16624_16645[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16612 === (14))){
var inst_16605 = (state_16611[(2)]);
var state_16611__$1 = state_16611;
var statearr_16625_16646 = state_16611__$1;
(statearr_16625_16646[(2)] = inst_16605);

(statearr_16625_16646[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16612 === (10))){
var inst_16597 = (state_16611[(2)]);
var state_16611__$1 = state_16611;
var statearr_16626_16647 = state_16611__$1;
(statearr_16626_16647[(2)] = inst_16597);

(statearr_16626_16647[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16612 === (8))){
var inst_16594 = cljs.core.async.close_BANG_(to);
var state_16611__$1 = state_16611;
var statearr_16627_16648 = state_16611__$1;
(statearr_16627_16648[(2)] = inst_16594);

(statearr_16627_16648[(1)] = (10));


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
});})(c__16485__auto___16634))
;
return ((function (switch__16410__auto__,c__16485__auto___16634){
return (function() {
var cljs$core$async$state_machine__16411__auto__ = null;
var cljs$core$async$state_machine__16411__auto____0 = (function (){
var statearr_16628 = [null,null,null,null,null,null,null,null];
(statearr_16628[(0)] = cljs$core$async$state_machine__16411__auto__);

(statearr_16628[(1)] = (1));

return statearr_16628;
});
var cljs$core$async$state_machine__16411__auto____1 = (function (state_16611){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_16611);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e16629){var ex__16414__auto__ = e16629;
var statearr_16630_16649 = state_16611;
(statearr_16630_16649[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_16611[(4)]))){
var statearr_16631_16650 = state_16611;
(statearr_16631_16650[(1)] = cljs.core.first((state_16611[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__16651 = state_16611;
state_16611 = G__16651;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$state_machine__16411__auto__ = function(state_16611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16411__auto____1.call(this,state_16611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16411__auto____0;
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16411__auto____1;
return cljs$core$async$state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___16634))
})();
var state__16487__auto__ = (function (){var statearr_16632 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_16632[(6)] = c__16485__auto___16634);

return statearr_16632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___16634))
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
return (function (p__16652){
var vec__16653 = p__16652;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16653,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16653,(1),null);
var job = vec__16653;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16485__auto___16829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___16829,res,vec__16653,v,p,job,jobs,results){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___16829,res,vec__16653,v,p,job,jobs,results){
return (function (state_16660){
var state_val_16661 = (state_16660[(1)]);
if((state_val_16661 === (1))){
var state_16660__$1 = state_16660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16660__$1,(2),res,v);
} else {
if((state_val_16661 === (2))){
var inst_16657 = (state_16660[(2)]);
var inst_16658 = cljs.core.async.close_BANG_(res);
var state_16660__$1 = (function (){var statearr_16662 = state_16660;
(statearr_16662[(7)] = inst_16657);

return statearr_16662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16660__$1,inst_16658);
} else {
return null;
}
}
});})(c__16485__auto___16829,res,vec__16653,v,p,job,jobs,results))
;
return ((function (switch__16410__auto__,c__16485__auto___16829,res,vec__16653,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0 = (function (){
var statearr_16663 = [null,null,null,null,null,null,null,null];
(statearr_16663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__);

(statearr_16663[(1)] = (1));

return statearr_16663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1 = (function (state_16660){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_16660);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e16664){var ex__16414__auto__ = e16664;
var statearr_16665_16830 = state_16660;
(statearr_16665_16830[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_16660[(4)]))){
var statearr_16666_16831 = state_16660;
(statearr_16666_16831[(1)] = cljs.core.first((state_16660[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__16832 = state_16660;
state_16660 = G__16832;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__ = function(state_16660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1.call(this,state_16660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___16829,res,vec__16653,v,p,job,jobs,results))
})();
var state__16487__auto__ = (function (){var statearr_16667 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_16667[(6)] = c__16485__auto___16829);

return statearr_16667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___16829,res,vec__16653,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16668){
var vec__16669 = p__16668;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16669,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16669,(1),null);
var job = vec__16669;
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
var n__4395__auto___16833 = n;
var __16834 = (0);
while(true){
if((__16834 < n__4395__auto___16833)){
var G__16672_16835 = type;
var G__16672_16836__$1 = (((G__16672_16835 instanceof cljs.core.Keyword))?G__16672_16835.fqn:null);
switch (G__16672_16836__$1) {
case "compute":
var c__16485__auto___16838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16834,c__16485__auto___16838,G__16672_16835,G__16672_16836__$1,n__4395__auto___16833,jobs,results,process,async){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (__16834,c__16485__auto___16838,G__16672_16835,G__16672_16836__$1,n__4395__auto___16833,jobs,results,process,async){
return (function (state_16685){
var state_val_16686 = (state_16685[(1)]);
if((state_val_16686 === (1))){
var state_16685__$1 = state_16685;
var statearr_16687_16839 = state_16685__$1;
(statearr_16687_16839[(2)] = null);

(statearr_16687_16839[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16686 === (2))){
var state_16685__$1 = state_16685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16685__$1,(4),jobs);
} else {
if((state_val_16686 === (3))){
var inst_16683 = (state_16685[(2)]);
var state_16685__$1 = state_16685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16685__$1,inst_16683);
} else {
if((state_val_16686 === (4))){
var inst_16675 = (state_16685[(2)]);
var inst_16676 = process(inst_16675);
var state_16685__$1 = state_16685;
if(cljs.core.truth_(inst_16676)){
var statearr_16688_16840 = state_16685__$1;
(statearr_16688_16840[(1)] = (5));

} else {
var statearr_16689_16841 = state_16685__$1;
(statearr_16689_16841[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16686 === (5))){
var state_16685__$1 = state_16685;
var statearr_16690_16842 = state_16685__$1;
(statearr_16690_16842[(2)] = null);

(statearr_16690_16842[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16686 === (6))){
var state_16685__$1 = state_16685;
var statearr_16691_16843 = state_16685__$1;
(statearr_16691_16843[(2)] = null);

(statearr_16691_16843[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16686 === (7))){
var inst_16681 = (state_16685[(2)]);
var state_16685__$1 = state_16685;
var statearr_16692_16844 = state_16685__$1;
(statearr_16692_16844[(2)] = inst_16681);

(statearr_16692_16844[(1)] = (3));


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
});})(__16834,c__16485__auto___16838,G__16672_16835,G__16672_16836__$1,n__4395__auto___16833,jobs,results,process,async))
;
return ((function (__16834,switch__16410__auto__,c__16485__auto___16838,G__16672_16835,G__16672_16836__$1,n__4395__auto___16833,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0 = (function (){
var statearr_16693 = [null,null,null,null,null,null,null];
(statearr_16693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__);

(statearr_16693[(1)] = (1));

return statearr_16693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1 = (function (state_16685){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_16685);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e16694){var ex__16414__auto__ = e16694;
var statearr_16695_16845 = state_16685;
(statearr_16695_16845[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_16685[(4)]))){
var statearr_16696_16846 = state_16685;
(statearr_16696_16846[(1)] = cljs.core.first((state_16685[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__16847 = state_16685;
state_16685 = G__16847;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__ = function(state_16685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1.call(this,state_16685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__;
})()
;})(__16834,switch__16410__auto__,c__16485__auto___16838,G__16672_16835,G__16672_16836__$1,n__4395__auto___16833,jobs,results,process,async))
})();
var state__16487__auto__ = (function (){var statearr_16697 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_16697[(6)] = c__16485__auto___16838);

return statearr_16697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(__16834,c__16485__auto___16838,G__16672_16835,G__16672_16836__$1,n__4395__auto___16833,jobs,results,process,async))
);


break;
case "async":
var c__16485__auto___16848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16834,c__16485__auto___16848,G__16672_16835,G__16672_16836__$1,n__4395__auto___16833,jobs,results,process,async){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (__16834,c__16485__auto___16848,G__16672_16835,G__16672_16836__$1,n__4395__auto___16833,jobs,results,process,async){
return (function (state_16710){
var state_val_16711 = (state_16710[(1)]);
if((state_val_16711 === (1))){
var state_16710__$1 = state_16710;
var statearr_16712_16849 = state_16710__$1;
(statearr_16712_16849[(2)] = null);

(statearr_16712_16849[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16711 === (2))){
var state_16710__$1 = state_16710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16710__$1,(4),jobs);
} else {
if((state_val_16711 === (3))){
var inst_16708 = (state_16710[(2)]);
var state_16710__$1 = state_16710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16710__$1,inst_16708);
} else {
if((state_val_16711 === (4))){
var inst_16700 = (state_16710[(2)]);
var inst_16701 = async(inst_16700);
var state_16710__$1 = state_16710;
if(cljs.core.truth_(inst_16701)){
var statearr_16713_16850 = state_16710__$1;
(statearr_16713_16850[(1)] = (5));

} else {
var statearr_16714_16851 = state_16710__$1;
(statearr_16714_16851[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16711 === (5))){
var state_16710__$1 = state_16710;
var statearr_16715_16852 = state_16710__$1;
(statearr_16715_16852[(2)] = null);

(statearr_16715_16852[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16711 === (6))){
var state_16710__$1 = state_16710;
var statearr_16716_16853 = state_16710__$1;
(statearr_16716_16853[(2)] = null);

(statearr_16716_16853[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16711 === (7))){
var inst_16706 = (state_16710[(2)]);
var state_16710__$1 = state_16710;
var statearr_16717_16854 = state_16710__$1;
(statearr_16717_16854[(2)] = inst_16706);

(statearr_16717_16854[(1)] = (3));


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
});})(__16834,c__16485__auto___16848,G__16672_16835,G__16672_16836__$1,n__4395__auto___16833,jobs,results,process,async))
;
return ((function (__16834,switch__16410__auto__,c__16485__auto___16848,G__16672_16835,G__16672_16836__$1,n__4395__auto___16833,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0 = (function (){
var statearr_16718 = [null,null,null,null,null,null,null];
(statearr_16718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__);

(statearr_16718[(1)] = (1));

return statearr_16718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1 = (function (state_16710){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_16710);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e16719){var ex__16414__auto__ = e16719;
var statearr_16720_16855 = state_16710;
(statearr_16720_16855[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_16710[(4)]))){
var statearr_16721_16856 = state_16710;
(statearr_16721_16856[(1)] = cljs.core.first((state_16710[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__16857 = state_16710;
state_16710 = G__16857;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__ = function(state_16710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1.call(this,state_16710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__;
})()
;})(__16834,switch__16410__auto__,c__16485__auto___16848,G__16672_16835,G__16672_16836__$1,n__4395__auto___16833,jobs,results,process,async))
})();
var state__16487__auto__ = (function (){var statearr_16722 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_16722[(6)] = c__16485__auto___16848);

return statearr_16722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(__16834,c__16485__auto___16848,G__16672_16835,G__16672_16836__$1,n__4395__auto___16833,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16672_16836__$1)].join('')));

}

var G__16858 = (__16834 + (1));
__16834 = G__16858;
continue;
} else {
}
break;
}

var c__16485__auto___16859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___16859,jobs,results,process,async){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___16859,jobs,results,process,async){
return (function (state_16744){
var state_val_16745 = (state_16744[(1)]);
if((state_val_16745 === (7))){
var inst_16740 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
var statearr_16746_16860 = state_16744__$1;
(statearr_16746_16860[(2)] = inst_16740);

(statearr_16746_16860[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16745 === (1))){
var state_16744__$1 = state_16744;
var statearr_16747_16861 = state_16744__$1;
(statearr_16747_16861[(2)] = null);

(statearr_16747_16861[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16745 === (4))){
var inst_16725 = (state_16744[(7)]);
var inst_16725__$1 = (state_16744[(2)]);
var inst_16726 = (inst_16725__$1 == null);
var state_16744__$1 = (function (){var statearr_16748 = state_16744;
(statearr_16748[(7)] = inst_16725__$1);

return statearr_16748;
})();
if(cljs.core.truth_(inst_16726)){
var statearr_16749_16862 = state_16744__$1;
(statearr_16749_16862[(1)] = (5));

} else {
var statearr_16750_16863 = state_16744__$1;
(statearr_16750_16863[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16745 === (6))){
var inst_16725 = (state_16744[(7)]);
var inst_16730 = (state_16744[(8)]);
var inst_16730__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16731 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16732 = [inst_16725,inst_16730__$1];
var inst_16733 = (new cljs.core.PersistentVector(null,2,(5),inst_16731,inst_16732,null));
var state_16744__$1 = (function (){var statearr_16751 = state_16744;
(statearr_16751[(8)] = inst_16730__$1);

return statearr_16751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16744__$1,(8),jobs,inst_16733);
} else {
if((state_val_16745 === (3))){
var inst_16742 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16744__$1,inst_16742);
} else {
if((state_val_16745 === (2))){
var state_16744__$1 = state_16744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16744__$1,(4),from);
} else {
if((state_val_16745 === (9))){
var inst_16737 = (state_16744[(2)]);
var state_16744__$1 = (function (){var statearr_16752 = state_16744;
(statearr_16752[(9)] = inst_16737);

return statearr_16752;
})();
var statearr_16753_16864 = state_16744__$1;
(statearr_16753_16864[(2)] = null);

(statearr_16753_16864[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16745 === (5))){
var inst_16728 = cljs.core.async.close_BANG_(jobs);
var state_16744__$1 = state_16744;
var statearr_16754_16865 = state_16744__$1;
(statearr_16754_16865[(2)] = inst_16728);

(statearr_16754_16865[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16745 === (8))){
var inst_16730 = (state_16744[(8)]);
var inst_16735 = (state_16744[(2)]);
var state_16744__$1 = (function (){var statearr_16755 = state_16744;
(statearr_16755[(10)] = inst_16735);

return statearr_16755;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16744__$1,(9),results,inst_16730);
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
});})(c__16485__auto___16859,jobs,results,process,async))
;
return ((function (switch__16410__auto__,c__16485__auto___16859,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0 = (function (){
var statearr_16756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__);

(statearr_16756[(1)] = (1));

return statearr_16756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1 = (function (state_16744){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_16744);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e16757){var ex__16414__auto__ = e16757;
var statearr_16758_16866 = state_16744;
(statearr_16758_16866[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_16744[(4)]))){
var statearr_16759_16867 = state_16744;
(statearr_16759_16867[(1)] = cljs.core.first((state_16744[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__16868 = state_16744;
state_16744 = G__16868;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__ = function(state_16744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1.call(this,state_16744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___16859,jobs,results,process,async))
})();
var state__16487__auto__ = (function (){var statearr_16760 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_16760[(6)] = c__16485__auto___16859);

return statearr_16760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___16859,jobs,results,process,async))
);


var c__16485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto__,jobs,results,process,async){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto__,jobs,results,process,async){
return (function (state_16798){
var state_val_16799 = (state_16798[(1)]);
if((state_val_16799 === (7))){
var inst_16794 = (state_16798[(2)]);
var state_16798__$1 = state_16798;
var statearr_16800_16869 = state_16798__$1;
(statearr_16800_16869[(2)] = inst_16794);

(statearr_16800_16869[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (20))){
var state_16798__$1 = state_16798;
var statearr_16801_16870 = state_16798__$1;
(statearr_16801_16870[(2)] = null);

(statearr_16801_16870[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (1))){
var state_16798__$1 = state_16798;
var statearr_16802_16871 = state_16798__$1;
(statearr_16802_16871[(2)] = null);

(statearr_16802_16871[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (4))){
var inst_16763 = (state_16798[(7)]);
var inst_16763__$1 = (state_16798[(2)]);
var inst_16764 = (inst_16763__$1 == null);
var state_16798__$1 = (function (){var statearr_16803 = state_16798;
(statearr_16803[(7)] = inst_16763__$1);

return statearr_16803;
})();
if(cljs.core.truth_(inst_16764)){
var statearr_16804_16872 = state_16798__$1;
(statearr_16804_16872[(1)] = (5));

} else {
var statearr_16805_16873 = state_16798__$1;
(statearr_16805_16873[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (15))){
var inst_16776 = (state_16798[(8)]);
var state_16798__$1 = state_16798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16798__$1,(18),to,inst_16776);
} else {
if((state_val_16799 === (21))){
var inst_16789 = (state_16798[(2)]);
var state_16798__$1 = state_16798;
var statearr_16806_16874 = state_16798__$1;
(statearr_16806_16874[(2)] = inst_16789);

(statearr_16806_16874[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (13))){
var inst_16791 = (state_16798[(2)]);
var state_16798__$1 = (function (){var statearr_16807 = state_16798;
(statearr_16807[(9)] = inst_16791);

return statearr_16807;
})();
var statearr_16808_16875 = state_16798__$1;
(statearr_16808_16875[(2)] = null);

(statearr_16808_16875[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (6))){
var inst_16763 = (state_16798[(7)]);
var state_16798__$1 = state_16798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16798__$1,(11),inst_16763);
} else {
if((state_val_16799 === (17))){
var inst_16784 = (state_16798[(2)]);
var state_16798__$1 = state_16798;
if(cljs.core.truth_(inst_16784)){
var statearr_16809_16876 = state_16798__$1;
(statearr_16809_16876[(1)] = (19));

} else {
var statearr_16810_16877 = state_16798__$1;
(statearr_16810_16877[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (3))){
var inst_16796 = (state_16798[(2)]);
var state_16798__$1 = state_16798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16798__$1,inst_16796);
} else {
if((state_val_16799 === (12))){
var inst_16773 = (state_16798[(10)]);
var state_16798__$1 = state_16798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16798__$1,(14),inst_16773);
} else {
if((state_val_16799 === (2))){
var state_16798__$1 = state_16798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16798__$1,(4),results);
} else {
if((state_val_16799 === (19))){
var state_16798__$1 = state_16798;
var statearr_16811_16878 = state_16798__$1;
(statearr_16811_16878[(2)] = null);

(statearr_16811_16878[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (11))){
var inst_16773 = (state_16798[(2)]);
var state_16798__$1 = (function (){var statearr_16812 = state_16798;
(statearr_16812[(10)] = inst_16773);

return statearr_16812;
})();
var statearr_16813_16879 = state_16798__$1;
(statearr_16813_16879[(2)] = null);

(statearr_16813_16879[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (9))){
var state_16798__$1 = state_16798;
var statearr_16814_16880 = state_16798__$1;
(statearr_16814_16880[(2)] = null);

(statearr_16814_16880[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (5))){
var state_16798__$1 = state_16798;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16815_16881 = state_16798__$1;
(statearr_16815_16881[(1)] = (8));

} else {
var statearr_16816_16882 = state_16798__$1;
(statearr_16816_16882[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (14))){
var inst_16778 = (state_16798[(11)]);
var inst_16776 = (state_16798[(8)]);
var inst_16776__$1 = (state_16798[(2)]);
var inst_16777 = (inst_16776__$1 == null);
var inst_16778__$1 = cljs.core.not(inst_16777);
var state_16798__$1 = (function (){var statearr_16817 = state_16798;
(statearr_16817[(11)] = inst_16778__$1);

(statearr_16817[(8)] = inst_16776__$1);

return statearr_16817;
})();
if(inst_16778__$1){
var statearr_16818_16883 = state_16798__$1;
(statearr_16818_16883[(1)] = (15));

} else {
var statearr_16819_16884 = state_16798__$1;
(statearr_16819_16884[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (16))){
var inst_16778 = (state_16798[(11)]);
var state_16798__$1 = state_16798;
var statearr_16820_16885 = state_16798__$1;
(statearr_16820_16885[(2)] = inst_16778);

(statearr_16820_16885[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (10))){
var inst_16770 = (state_16798[(2)]);
var state_16798__$1 = state_16798;
var statearr_16821_16886 = state_16798__$1;
(statearr_16821_16886[(2)] = inst_16770);

(statearr_16821_16886[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (18))){
var inst_16781 = (state_16798[(2)]);
var state_16798__$1 = state_16798;
var statearr_16822_16887 = state_16798__$1;
(statearr_16822_16887[(2)] = inst_16781);

(statearr_16822_16887[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16799 === (8))){
var inst_16767 = cljs.core.async.close_BANG_(to);
var state_16798__$1 = state_16798;
var statearr_16823_16888 = state_16798__$1;
(statearr_16823_16888[(2)] = inst_16767);

(statearr_16823_16888[(1)] = (10));


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
});})(c__16485__auto__,jobs,results,process,async))
;
return ((function (switch__16410__auto__,c__16485__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0 = (function (){
var statearr_16824 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__);

(statearr_16824[(1)] = (1));

return statearr_16824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1 = (function (state_16798){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_16798);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e16825){var ex__16414__auto__ = e16825;
var statearr_16826_16889 = state_16798;
(statearr_16826_16889[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_16798[(4)]))){
var statearr_16827_16890 = state_16798;
(statearr_16827_16890[(1)] = cljs.core.first((state_16798[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__16891 = state_16798;
state_16798 = G__16891;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__ = function(state_16798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1.call(this,state_16798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto__,jobs,results,process,async))
})();
var state__16487__auto__ = (function (){var statearr_16828 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_16828[(6)] = c__16485__auto__);

return statearr_16828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto__,jobs,results,process,async))
);

return c__16485__auto__;
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
var G__16893 = arguments.length;
switch (G__16893) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__16896 = arguments.length;
switch (G__16896) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__16899 = arguments.length;
switch (G__16899) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16485__auto___16949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___16949,tc,fc){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___16949,tc,fc){
return (function (state_16925){
var state_val_16926 = (state_16925[(1)]);
if((state_val_16926 === (7))){
var inst_16921 = (state_16925[(2)]);
var state_16925__$1 = state_16925;
var statearr_16927_16950 = state_16925__$1;
(statearr_16927_16950[(2)] = inst_16921);

(statearr_16927_16950[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16926 === (1))){
var state_16925__$1 = state_16925;
var statearr_16928_16951 = state_16925__$1;
(statearr_16928_16951[(2)] = null);

(statearr_16928_16951[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16926 === (4))){
var inst_16902 = (state_16925[(7)]);
var inst_16902__$1 = (state_16925[(2)]);
var inst_16903 = (inst_16902__$1 == null);
var state_16925__$1 = (function (){var statearr_16929 = state_16925;
(statearr_16929[(7)] = inst_16902__$1);

return statearr_16929;
})();
if(cljs.core.truth_(inst_16903)){
var statearr_16930_16952 = state_16925__$1;
(statearr_16930_16952[(1)] = (5));

} else {
var statearr_16931_16953 = state_16925__$1;
(statearr_16931_16953[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16926 === (13))){
var state_16925__$1 = state_16925;
var statearr_16932_16954 = state_16925__$1;
(statearr_16932_16954[(2)] = null);

(statearr_16932_16954[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16926 === (6))){
var inst_16902 = (state_16925[(7)]);
var inst_16908 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16902) : p.call(null,inst_16902));
var state_16925__$1 = state_16925;
if(cljs.core.truth_(inst_16908)){
var statearr_16933_16955 = state_16925__$1;
(statearr_16933_16955[(1)] = (9));

} else {
var statearr_16934_16956 = state_16925__$1;
(statearr_16934_16956[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16926 === (3))){
var inst_16923 = (state_16925[(2)]);
var state_16925__$1 = state_16925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16925__$1,inst_16923);
} else {
if((state_val_16926 === (12))){
var state_16925__$1 = state_16925;
var statearr_16935_16957 = state_16925__$1;
(statearr_16935_16957[(2)] = null);

(statearr_16935_16957[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16926 === (2))){
var state_16925__$1 = state_16925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16925__$1,(4),ch);
} else {
if((state_val_16926 === (11))){
var inst_16902 = (state_16925[(7)]);
var inst_16912 = (state_16925[(2)]);
var state_16925__$1 = state_16925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16925__$1,(8),inst_16912,inst_16902);
} else {
if((state_val_16926 === (9))){
var state_16925__$1 = state_16925;
var statearr_16936_16958 = state_16925__$1;
(statearr_16936_16958[(2)] = tc);

(statearr_16936_16958[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16926 === (5))){
var inst_16905 = cljs.core.async.close_BANG_(tc);
var inst_16906 = cljs.core.async.close_BANG_(fc);
var state_16925__$1 = (function (){var statearr_16937 = state_16925;
(statearr_16937[(8)] = inst_16905);

return statearr_16937;
})();
var statearr_16938_16959 = state_16925__$1;
(statearr_16938_16959[(2)] = inst_16906);

(statearr_16938_16959[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16926 === (14))){
var inst_16919 = (state_16925[(2)]);
var state_16925__$1 = state_16925;
var statearr_16939_16960 = state_16925__$1;
(statearr_16939_16960[(2)] = inst_16919);

(statearr_16939_16960[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16926 === (10))){
var state_16925__$1 = state_16925;
var statearr_16940_16961 = state_16925__$1;
(statearr_16940_16961[(2)] = fc);

(statearr_16940_16961[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16926 === (8))){
var inst_16914 = (state_16925[(2)]);
var state_16925__$1 = state_16925;
if(cljs.core.truth_(inst_16914)){
var statearr_16941_16962 = state_16925__$1;
(statearr_16941_16962[(1)] = (12));

} else {
var statearr_16942_16963 = state_16925__$1;
(statearr_16942_16963[(1)] = (13));

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
});})(c__16485__auto___16949,tc,fc))
;
return ((function (switch__16410__auto__,c__16485__auto___16949,tc,fc){
return (function() {
var cljs$core$async$state_machine__16411__auto__ = null;
var cljs$core$async$state_machine__16411__auto____0 = (function (){
var statearr_16943 = [null,null,null,null,null,null,null,null,null];
(statearr_16943[(0)] = cljs$core$async$state_machine__16411__auto__);

(statearr_16943[(1)] = (1));

return statearr_16943;
});
var cljs$core$async$state_machine__16411__auto____1 = (function (state_16925){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_16925);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e16944){var ex__16414__auto__ = e16944;
var statearr_16945_16964 = state_16925;
(statearr_16945_16964[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_16925[(4)]))){
var statearr_16946_16965 = state_16925;
(statearr_16946_16965[(1)] = cljs.core.first((state_16925[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__16966 = state_16925;
state_16925 = G__16966;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$state_machine__16411__auto__ = function(state_16925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16411__auto____1.call(this,state_16925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16411__auto____0;
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16411__auto____1;
return cljs$core$async$state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___16949,tc,fc))
})();
var state__16487__auto__ = (function (){var statearr_16947 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_16947[(6)] = c__16485__auto___16949);

return statearr_16947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___16949,tc,fc))
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
var c__16485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto__){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto__){
return (function (state_16988){
var state_val_16989 = (state_16988[(1)]);
if((state_val_16989 === (7))){
var inst_16984 = (state_16988[(2)]);
var state_16988__$1 = state_16988;
var statearr_16990_17009 = state_16988__$1;
(statearr_16990_17009[(2)] = inst_16984);

(statearr_16990_17009[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16989 === (1))){
var inst_16967 = init;
var inst_16968 = inst_16967;
var state_16988__$1 = (function (){var statearr_16991 = state_16988;
(statearr_16991[(7)] = inst_16968);

return statearr_16991;
})();
var statearr_16992_17010 = state_16988__$1;
(statearr_16992_17010[(2)] = null);

(statearr_16992_17010[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16989 === (4))){
var inst_16971 = (state_16988[(8)]);
var inst_16971__$1 = (state_16988[(2)]);
var inst_16972 = (inst_16971__$1 == null);
var state_16988__$1 = (function (){var statearr_16993 = state_16988;
(statearr_16993[(8)] = inst_16971__$1);

return statearr_16993;
})();
if(cljs.core.truth_(inst_16972)){
var statearr_16994_17011 = state_16988__$1;
(statearr_16994_17011[(1)] = (5));

} else {
var statearr_16995_17012 = state_16988__$1;
(statearr_16995_17012[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16989 === (6))){
var inst_16971 = (state_16988[(8)]);
var inst_16975 = (state_16988[(9)]);
var inst_16968 = (state_16988[(7)]);
var inst_16975__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16968,inst_16971) : f.call(null,inst_16968,inst_16971));
var inst_16976 = cljs.core.reduced_QMARK_(inst_16975__$1);
var state_16988__$1 = (function (){var statearr_16996 = state_16988;
(statearr_16996[(9)] = inst_16975__$1);

return statearr_16996;
})();
if(inst_16976){
var statearr_16997_17013 = state_16988__$1;
(statearr_16997_17013[(1)] = (8));

} else {
var statearr_16998_17014 = state_16988__$1;
(statearr_16998_17014[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16989 === (3))){
var inst_16986 = (state_16988[(2)]);
var state_16988__$1 = state_16988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16988__$1,inst_16986);
} else {
if((state_val_16989 === (2))){
var state_16988__$1 = state_16988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16988__$1,(4),ch);
} else {
if((state_val_16989 === (9))){
var inst_16975 = (state_16988[(9)]);
var inst_16968 = inst_16975;
var state_16988__$1 = (function (){var statearr_16999 = state_16988;
(statearr_16999[(7)] = inst_16968);

return statearr_16999;
})();
var statearr_17000_17015 = state_16988__$1;
(statearr_17000_17015[(2)] = null);

(statearr_17000_17015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16989 === (5))){
var inst_16968 = (state_16988[(7)]);
var state_16988__$1 = state_16988;
var statearr_17001_17016 = state_16988__$1;
(statearr_17001_17016[(2)] = inst_16968);

(statearr_17001_17016[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16989 === (10))){
var inst_16982 = (state_16988[(2)]);
var state_16988__$1 = state_16988;
var statearr_17002_17017 = state_16988__$1;
(statearr_17002_17017[(2)] = inst_16982);

(statearr_17002_17017[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16989 === (8))){
var inst_16975 = (state_16988[(9)]);
var inst_16978 = cljs.core.deref(inst_16975);
var state_16988__$1 = state_16988;
var statearr_17003_17018 = state_16988__$1;
(statearr_17003_17018[(2)] = inst_16978);

(statearr_17003_17018[(1)] = (10));


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
});})(c__16485__auto__))
;
return ((function (switch__16410__auto__,c__16485__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16411__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16411__auto____0 = (function (){
var statearr_17004 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17004[(0)] = cljs$core$async$reduce_$_state_machine__16411__auto__);

(statearr_17004[(1)] = (1));

return statearr_17004;
});
var cljs$core$async$reduce_$_state_machine__16411__auto____1 = (function (state_16988){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_16988);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e17005){var ex__16414__auto__ = e17005;
var statearr_17006_17019 = state_16988;
(statearr_17006_17019[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_16988[(4)]))){
var statearr_17007_17020 = state_16988;
(statearr_17007_17020[(1)] = cljs.core.first((state_16988[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__17021 = state_16988;
state_16988 = G__17021;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16411__auto__ = function(state_16988){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16411__auto____1.call(this,state_16988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16411__auto____0;
cljs$core$async$reduce_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16411__auto____1;
return cljs$core$async$reduce_$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto__))
})();
var state__16487__auto__ = (function (){var statearr_17008 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_17008[(6)] = c__16485__auto__);

return statearr_17008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto__))
);

return c__16485__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto__,f__$1){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto__,f__$1){
return (function (state_17027){
var state_val_17028 = (state_17027[(1)]);
if((state_val_17028 === (1))){
var inst_17022 = cljs.core.async.reduce(f__$1,init,ch);
var state_17027__$1 = state_17027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17027__$1,(2),inst_17022);
} else {
if((state_val_17028 === (2))){
var inst_17024 = (state_17027[(2)]);
var inst_17025 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17024) : f__$1.call(null,inst_17024));
var state_17027__$1 = state_17027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17027__$1,inst_17025);
} else {
return null;
}
}
});})(c__16485__auto__,f__$1))
;
return ((function (switch__16410__auto__,c__16485__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16411__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16411__auto____0 = (function (){
var statearr_17029 = [null,null,null,null,null,null,null];
(statearr_17029[(0)] = cljs$core$async$transduce_$_state_machine__16411__auto__);

(statearr_17029[(1)] = (1));

return statearr_17029;
});
var cljs$core$async$transduce_$_state_machine__16411__auto____1 = (function (state_17027){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_17027);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e17030){var ex__16414__auto__ = e17030;
var statearr_17031_17034 = state_17027;
(statearr_17031_17034[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_17027[(4)]))){
var statearr_17032_17035 = state_17027;
(statearr_17032_17035[(1)] = cljs.core.first((state_17027[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__17036 = state_17027;
state_17027 = G__17036;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16411__auto__ = function(state_17027){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16411__auto____1.call(this,state_17027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16411__auto____0;
cljs$core$async$transduce_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16411__auto____1;
return cljs$core$async$transduce_$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto__,f__$1))
})();
var state__16487__auto__ = (function (){var statearr_17033 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_17033[(6)] = c__16485__auto__);

return statearr_17033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto__,f__$1))
);

return c__16485__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17038 = arguments.length;
switch (G__17038) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto__){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto__){
return (function (state_17063){
var state_val_17064 = (state_17063[(1)]);
if((state_val_17064 === (7))){
var inst_17045 = (state_17063[(2)]);
var state_17063__$1 = state_17063;
var statearr_17065_17087 = state_17063__$1;
(statearr_17065_17087[(2)] = inst_17045);

(statearr_17065_17087[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17064 === (1))){
var inst_17039 = cljs.core.seq(coll);
var inst_17040 = inst_17039;
var state_17063__$1 = (function (){var statearr_17066 = state_17063;
(statearr_17066[(7)] = inst_17040);

return statearr_17066;
})();
var statearr_17067_17088 = state_17063__$1;
(statearr_17067_17088[(2)] = null);

(statearr_17067_17088[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17064 === (4))){
var inst_17040 = (state_17063[(7)]);
var inst_17043 = cljs.core.first(inst_17040);
var state_17063__$1 = state_17063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17063__$1,(7),ch,inst_17043);
} else {
if((state_val_17064 === (13))){
var inst_17057 = (state_17063[(2)]);
var state_17063__$1 = state_17063;
var statearr_17068_17089 = state_17063__$1;
(statearr_17068_17089[(2)] = inst_17057);

(statearr_17068_17089[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17064 === (6))){
var inst_17048 = (state_17063[(2)]);
var state_17063__$1 = state_17063;
if(cljs.core.truth_(inst_17048)){
var statearr_17069_17090 = state_17063__$1;
(statearr_17069_17090[(1)] = (8));

} else {
var statearr_17070_17091 = state_17063__$1;
(statearr_17070_17091[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17064 === (3))){
var inst_17061 = (state_17063[(2)]);
var state_17063__$1 = state_17063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17063__$1,inst_17061);
} else {
if((state_val_17064 === (12))){
var state_17063__$1 = state_17063;
var statearr_17071_17092 = state_17063__$1;
(statearr_17071_17092[(2)] = null);

(statearr_17071_17092[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17064 === (2))){
var inst_17040 = (state_17063[(7)]);
var state_17063__$1 = state_17063;
if(cljs.core.truth_(inst_17040)){
var statearr_17072_17093 = state_17063__$1;
(statearr_17072_17093[(1)] = (4));

} else {
var statearr_17073_17094 = state_17063__$1;
(statearr_17073_17094[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17064 === (11))){
var inst_17054 = cljs.core.async.close_BANG_(ch);
var state_17063__$1 = state_17063;
var statearr_17074_17095 = state_17063__$1;
(statearr_17074_17095[(2)] = inst_17054);

(statearr_17074_17095[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17064 === (9))){
var state_17063__$1 = state_17063;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17075_17096 = state_17063__$1;
(statearr_17075_17096[(1)] = (11));

} else {
var statearr_17076_17097 = state_17063__$1;
(statearr_17076_17097[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17064 === (5))){
var inst_17040 = (state_17063[(7)]);
var state_17063__$1 = state_17063;
var statearr_17077_17098 = state_17063__$1;
(statearr_17077_17098[(2)] = inst_17040);

(statearr_17077_17098[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17064 === (10))){
var inst_17059 = (state_17063[(2)]);
var state_17063__$1 = state_17063;
var statearr_17078_17099 = state_17063__$1;
(statearr_17078_17099[(2)] = inst_17059);

(statearr_17078_17099[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17064 === (8))){
var inst_17040 = (state_17063[(7)]);
var inst_17050 = cljs.core.next(inst_17040);
var inst_17040__$1 = inst_17050;
var state_17063__$1 = (function (){var statearr_17079 = state_17063;
(statearr_17079[(7)] = inst_17040__$1);

return statearr_17079;
})();
var statearr_17080_17100 = state_17063__$1;
(statearr_17080_17100[(2)] = null);

(statearr_17080_17100[(1)] = (2));


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
});})(c__16485__auto__))
;
return ((function (switch__16410__auto__,c__16485__auto__){
return (function() {
var cljs$core$async$state_machine__16411__auto__ = null;
var cljs$core$async$state_machine__16411__auto____0 = (function (){
var statearr_17081 = [null,null,null,null,null,null,null,null];
(statearr_17081[(0)] = cljs$core$async$state_machine__16411__auto__);

(statearr_17081[(1)] = (1));

return statearr_17081;
});
var cljs$core$async$state_machine__16411__auto____1 = (function (state_17063){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_17063);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e17082){var ex__16414__auto__ = e17082;
var statearr_17083_17101 = state_17063;
(statearr_17083_17101[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_17063[(4)]))){
var statearr_17084_17102 = state_17063;
(statearr_17084_17102[(1)] = cljs.core.first((state_17063[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__17103 = state_17063;
state_17063 = G__17103;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$state_machine__16411__auto__ = function(state_17063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16411__auto____1.call(this,state_17063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16411__auto____0;
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16411__auto____1;
return cljs$core$async$state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto__))
})();
var state__16487__auto__ = (function (){var statearr_17085 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_17085[(6)] = c__16485__auto__);

return statearr_17085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto__))
);

return c__16485__auto__;
});

cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17105 = arguments.length;
switch (G__17105) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4230__auto__ = (((_ == null))?null:_);
var m__4231__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4231__auto__.call(null,_));
} else {
var m__4231__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4231__auto____$1.call(null,_));
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4231__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4231__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4231__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4231__auto__.call(null,m,ch));
} else {
var m__4231__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4231__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4231__auto__.call(null,m));
} else {
var m__4231__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4231__auto____$1.call(null,m));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17107 = (function (ch,cs,meta17108){
this.ch = ch;
this.cs = cs;
this.meta17108 = meta17108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17109,meta17108__$1){
var self__ = this;
var _17109__$1 = this;
return (new cljs.core.async.t_cljs$core$async17107(self__.ch,self__.cs,meta17108__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17109){
var self__ = this;
var _17109__$1 = this;
return self__.meta17108;
});})(cs))
;

cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17107.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17108], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17107";

cljs.core.async.t_cljs$core$async17107.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async17107");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17107.
 */
cljs.core.async.__GT_t_cljs$core$async17107 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17107(ch__$1,cs__$1,meta17108){
return (new cljs.core.async.t_cljs$core$async17107(ch__$1,cs__$1,meta17108));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17107(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16485__auto___17326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___17326,cs,m,dchan,dctr,done){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___17326,cs,m,dchan,dctr,done){
return (function (state_17242){
var state_val_17243 = (state_17242[(1)]);
if((state_val_17243 === (7))){
var inst_17238 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17244_17327 = state_17242__$1;
(statearr_17244_17327[(2)] = inst_17238);

(statearr_17244_17327[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (20))){
var inst_17143 = (state_17242[(7)]);
var inst_17155 = cljs.core.first(inst_17143);
var inst_17156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17155,(0),null);
var inst_17157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17155,(1),null);
var state_17242__$1 = (function (){var statearr_17245 = state_17242;
(statearr_17245[(8)] = inst_17156);

return statearr_17245;
})();
if(cljs.core.truth_(inst_17157)){
var statearr_17246_17328 = state_17242__$1;
(statearr_17246_17328[(1)] = (22));

} else {
var statearr_17247_17329 = state_17242__$1;
(statearr_17247_17329[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (27))){
var inst_17187 = (state_17242[(9)]);
var inst_17185 = (state_17242[(10)]);
var inst_17112 = (state_17242[(11)]);
var inst_17192 = (state_17242[(12)]);
var inst_17192__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17185,inst_17187);
var inst_17193 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17192__$1,inst_17112,done);
var state_17242__$1 = (function (){var statearr_17248 = state_17242;
(statearr_17248[(12)] = inst_17192__$1);

return statearr_17248;
})();
if(cljs.core.truth_(inst_17193)){
var statearr_17249_17330 = state_17242__$1;
(statearr_17249_17330[(1)] = (30));

} else {
var statearr_17250_17331 = state_17242__$1;
(statearr_17250_17331[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (1))){
var state_17242__$1 = state_17242;
var statearr_17251_17332 = state_17242__$1;
(statearr_17251_17332[(2)] = null);

(statearr_17251_17332[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (24))){
var inst_17143 = (state_17242[(7)]);
var inst_17162 = (state_17242[(2)]);
var inst_17163 = cljs.core.next(inst_17143);
var inst_17121 = inst_17163;
var inst_17122 = null;
var inst_17123 = (0);
var inst_17124 = (0);
var state_17242__$1 = (function (){var statearr_17252 = state_17242;
(statearr_17252[(13)] = inst_17124);

(statearr_17252[(14)] = inst_17162);

(statearr_17252[(15)] = inst_17122);

(statearr_17252[(16)] = inst_17123);

(statearr_17252[(17)] = inst_17121);

return statearr_17252;
})();
var statearr_17253_17333 = state_17242__$1;
(statearr_17253_17333[(2)] = null);

(statearr_17253_17333[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (39))){
var state_17242__$1 = state_17242;
var statearr_17257_17334 = state_17242__$1;
(statearr_17257_17334[(2)] = null);

(statearr_17257_17334[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (4))){
var inst_17112 = (state_17242[(11)]);
var inst_17112__$1 = (state_17242[(2)]);
var inst_17113 = (inst_17112__$1 == null);
var state_17242__$1 = (function (){var statearr_17258 = state_17242;
(statearr_17258[(11)] = inst_17112__$1);

return statearr_17258;
})();
if(cljs.core.truth_(inst_17113)){
var statearr_17259_17335 = state_17242__$1;
(statearr_17259_17335[(1)] = (5));

} else {
var statearr_17260_17336 = state_17242__$1;
(statearr_17260_17336[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (15))){
var inst_17124 = (state_17242[(13)]);
var inst_17122 = (state_17242[(15)]);
var inst_17123 = (state_17242[(16)]);
var inst_17121 = (state_17242[(17)]);
var inst_17139 = (state_17242[(2)]);
var inst_17140 = (inst_17124 + (1));
var tmp17254 = inst_17122;
var tmp17255 = inst_17123;
var tmp17256 = inst_17121;
var inst_17121__$1 = tmp17256;
var inst_17122__$1 = tmp17254;
var inst_17123__$1 = tmp17255;
var inst_17124__$1 = inst_17140;
var state_17242__$1 = (function (){var statearr_17261 = state_17242;
(statearr_17261[(13)] = inst_17124__$1);

(statearr_17261[(18)] = inst_17139);

(statearr_17261[(15)] = inst_17122__$1);

(statearr_17261[(16)] = inst_17123__$1);

(statearr_17261[(17)] = inst_17121__$1);

return statearr_17261;
})();
var statearr_17262_17337 = state_17242__$1;
(statearr_17262_17337[(2)] = null);

(statearr_17262_17337[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (21))){
var inst_17166 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17266_17338 = state_17242__$1;
(statearr_17266_17338[(2)] = inst_17166);

(statearr_17266_17338[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (31))){
var inst_17192 = (state_17242[(12)]);
var inst_17196 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17192);
var state_17242__$1 = state_17242;
var statearr_17267_17339 = state_17242__$1;
(statearr_17267_17339[(2)] = inst_17196);

(statearr_17267_17339[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (32))){
var inst_17187 = (state_17242[(9)]);
var inst_17185 = (state_17242[(10)]);
var inst_17186 = (state_17242[(19)]);
var inst_17184 = (state_17242[(20)]);
var inst_17198 = (state_17242[(2)]);
var inst_17199 = (inst_17187 + (1));
var tmp17263 = inst_17185;
var tmp17264 = inst_17186;
var tmp17265 = inst_17184;
var inst_17184__$1 = tmp17265;
var inst_17185__$1 = tmp17263;
var inst_17186__$1 = tmp17264;
var inst_17187__$1 = inst_17199;
var state_17242__$1 = (function (){var statearr_17268 = state_17242;
(statearr_17268[(9)] = inst_17187__$1);

(statearr_17268[(21)] = inst_17198);

(statearr_17268[(10)] = inst_17185__$1);

(statearr_17268[(19)] = inst_17186__$1);

(statearr_17268[(20)] = inst_17184__$1);

return statearr_17268;
})();
var statearr_17269_17340 = state_17242__$1;
(statearr_17269_17340[(2)] = null);

(statearr_17269_17340[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (40))){
var inst_17211 = (state_17242[(22)]);
var inst_17215 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17211);
var state_17242__$1 = state_17242;
var statearr_17270_17341 = state_17242__$1;
(statearr_17270_17341[(2)] = inst_17215);

(statearr_17270_17341[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (33))){
var inst_17202 = (state_17242[(23)]);
var inst_17204 = cljs.core.chunked_seq_QMARK_(inst_17202);
var state_17242__$1 = state_17242;
if(inst_17204){
var statearr_17271_17342 = state_17242__$1;
(statearr_17271_17342[(1)] = (36));

} else {
var statearr_17272_17343 = state_17242__$1;
(statearr_17272_17343[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (13))){
var inst_17133 = (state_17242[(24)]);
var inst_17136 = cljs.core.async.close_BANG_(inst_17133);
var state_17242__$1 = state_17242;
var statearr_17273_17344 = state_17242__$1;
(statearr_17273_17344[(2)] = inst_17136);

(statearr_17273_17344[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (22))){
var inst_17156 = (state_17242[(8)]);
var inst_17159 = cljs.core.async.close_BANG_(inst_17156);
var state_17242__$1 = state_17242;
var statearr_17274_17345 = state_17242__$1;
(statearr_17274_17345[(2)] = inst_17159);

(statearr_17274_17345[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (36))){
var inst_17202 = (state_17242[(23)]);
var inst_17206 = cljs.core.chunk_first(inst_17202);
var inst_17207 = cljs.core.chunk_rest(inst_17202);
var inst_17208 = cljs.core.count(inst_17206);
var inst_17184 = inst_17207;
var inst_17185 = inst_17206;
var inst_17186 = inst_17208;
var inst_17187 = (0);
var state_17242__$1 = (function (){var statearr_17275 = state_17242;
(statearr_17275[(9)] = inst_17187);

(statearr_17275[(10)] = inst_17185);

(statearr_17275[(19)] = inst_17186);

(statearr_17275[(20)] = inst_17184);

return statearr_17275;
})();
var statearr_17276_17346 = state_17242__$1;
(statearr_17276_17346[(2)] = null);

(statearr_17276_17346[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (41))){
var inst_17202 = (state_17242[(23)]);
var inst_17217 = (state_17242[(2)]);
var inst_17218 = cljs.core.next(inst_17202);
var inst_17184 = inst_17218;
var inst_17185 = null;
var inst_17186 = (0);
var inst_17187 = (0);
var state_17242__$1 = (function (){var statearr_17277 = state_17242;
(statearr_17277[(9)] = inst_17187);

(statearr_17277[(10)] = inst_17185);

(statearr_17277[(19)] = inst_17186);

(statearr_17277[(25)] = inst_17217);

(statearr_17277[(20)] = inst_17184);

return statearr_17277;
})();
var statearr_17278_17347 = state_17242__$1;
(statearr_17278_17347[(2)] = null);

(statearr_17278_17347[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (43))){
var state_17242__$1 = state_17242;
var statearr_17279_17348 = state_17242__$1;
(statearr_17279_17348[(2)] = null);

(statearr_17279_17348[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (29))){
var inst_17226 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17280_17349 = state_17242__$1;
(statearr_17280_17349[(2)] = inst_17226);

(statearr_17280_17349[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (44))){
var inst_17235 = (state_17242[(2)]);
var state_17242__$1 = (function (){var statearr_17281 = state_17242;
(statearr_17281[(26)] = inst_17235);

return statearr_17281;
})();
var statearr_17282_17350 = state_17242__$1;
(statearr_17282_17350[(2)] = null);

(statearr_17282_17350[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (6))){
var inst_17176 = (state_17242[(27)]);
var inst_17175 = cljs.core.deref(cs);
var inst_17176__$1 = cljs.core.keys(inst_17175);
var inst_17177 = cljs.core.count(inst_17176__$1);
var inst_17178 = cljs.core.reset_BANG_(dctr,inst_17177);
var inst_17183 = cljs.core.seq(inst_17176__$1);
var inst_17184 = inst_17183;
var inst_17185 = null;
var inst_17186 = (0);
var inst_17187 = (0);
var state_17242__$1 = (function (){var statearr_17283 = state_17242;
(statearr_17283[(9)] = inst_17187);

(statearr_17283[(10)] = inst_17185);

(statearr_17283[(27)] = inst_17176__$1);

(statearr_17283[(19)] = inst_17186);

(statearr_17283[(28)] = inst_17178);

(statearr_17283[(20)] = inst_17184);

return statearr_17283;
})();
var statearr_17284_17351 = state_17242__$1;
(statearr_17284_17351[(2)] = null);

(statearr_17284_17351[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (28))){
var inst_17202 = (state_17242[(23)]);
var inst_17184 = (state_17242[(20)]);
var inst_17202__$1 = cljs.core.seq(inst_17184);
var state_17242__$1 = (function (){var statearr_17285 = state_17242;
(statearr_17285[(23)] = inst_17202__$1);

return statearr_17285;
})();
if(inst_17202__$1){
var statearr_17286_17352 = state_17242__$1;
(statearr_17286_17352[(1)] = (33));

} else {
var statearr_17287_17353 = state_17242__$1;
(statearr_17287_17353[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (25))){
var inst_17187 = (state_17242[(9)]);
var inst_17186 = (state_17242[(19)]);
var inst_17189 = (inst_17187 < inst_17186);
var inst_17190 = inst_17189;
var state_17242__$1 = state_17242;
if(cljs.core.truth_(inst_17190)){
var statearr_17288_17354 = state_17242__$1;
(statearr_17288_17354[(1)] = (27));

} else {
var statearr_17289_17355 = state_17242__$1;
(statearr_17289_17355[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (34))){
var state_17242__$1 = state_17242;
var statearr_17290_17356 = state_17242__$1;
(statearr_17290_17356[(2)] = null);

(statearr_17290_17356[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (17))){
var state_17242__$1 = state_17242;
var statearr_17291_17357 = state_17242__$1;
(statearr_17291_17357[(2)] = null);

(statearr_17291_17357[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (3))){
var inst_17240 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17242__$1,inst_17240);
} else {
if((state_val_17243 === (12))){
var inst_17171 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17292_17358 = state_17242__$1;
(statearr_17292_17358[(2)] = inst_17171);

(statearr_17292_17358[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (2))){
var state_17242__$1 = state_17242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17242__$1,(4),ch);
} else {
if((state_val_17243 === (23))){
var state_17242__$1 = state_17242;
var statearr_17293_17359 = state_17242__$1;
(statearr_17293_17359[(2)] = null);

(statearr_17293_17359[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (35))){
var inst_17224 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17294_17360 = state_17242__$1;
(statearr_17294_17360[(2)] = inst_17224);

(statearr_17294_17360[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (19))){
var inst_17143 = (state_17242[(7)]);
var inst_17147 = cljs.core.chunk_first(inst_17143);
var inst_17148 = cljs.core.chunk_rest(inst_17143);
var inst_17149 = cljs.core.count(inst_17147);
var inst_17121 = inst_17148;
var inst_17122 = inst_17147;
var inst_17123 = inst_17149;
var inst_17124 = (0);
var state_17242__$1 = (function (){var statearr_17295 = state_17242;
(statearr_17295[(13)] = inst_17124);

(statearr_17295[(15)] = inst_17122);

(statearr_17295[(16)] = inst_17123);

(statearr_17295[(17)] = inst_17121);

return statearr_17295;
})();
var statearr_17296_17361 = state_17242__$1;
(statearr_17296_17361[(2)] = null);

(statearr_17296_17361[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (11))){
var inst_17121 = (state_17242[(17)]);
var inst_17143 = (state_17242[(7)]);
var inst_17143__$1 = cljs.core.seq(inst_17121);
var state_17242__$1 = (function (){var statearr_17297 = state_17242;
(statearr_17297[(7)] = inst_17143__$1);

return statearr_17297;
})();
if(inst_17143__$1){
var statearr_17298_17362 = state_17242__$1;
(statearr_17298_17362[(1)] = (16));

} else {
var statearr_17299_17363 = state_17242__$1;
(statearr_17299_17363[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (9))){
var inst_17173 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17300_17364 = state_17242__$1;
(statearr_17300_17364[(2)] = inst_17173);

(statearr_17300_17364[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (5))){
var inst_17119 = cljs.core.deref(cs);
var inst_17120 = cljs.core.seq(inst_17119);
var inst_17121 = inst_17120;
var inst_17122 = null;
var inst_17123 = (0);
var inst_17124 = (0);
var state_17242__$1 = (function (){var statearr_17301 = state_17242;
(statearr_17301[(13)] = inst_17124);

(statearr_17301[(15)] = inst_17122);

(statearr_17301[(16)] = inst_17123);

(statearr_17301[(17)] = inst_17121);

return statearr_17301;
})();
var statearr_17302_17365 = state_17242__$1;
(statearr_17302_17365[(2)] = null);

(statearr_17302_17365[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (14))){
var state_17242__$1 = state_17242;
var statearr_17303_17366 = state_17242__$1;
(statearr_17303_17366[(2)] = null);

(statearr_17303_17366[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (45))){
var inst_17232 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17304_17367 = state_17242__$1;
(statearr_17304_17367[(2)] = inst_17232);

(statearr_17304_17367[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (26))){
var inst_17176 = (state_17242[(27)]);
var inst_17228 = (state_17242[(2)]);
var inst_17229 = cljs.core.seq(inst_17176);
var state_17242__$1 = (function (){var statearr_17305 = state_17242;
(statearr_17305[(29)] = inst_17228);

return statearr_17305;
})();
if(inst_17229){
var statearr_17306_17368 = state_17242__$1;
(statearr_17306_17368[(1)] = (42));

} else {
var statearr_17307_17369 = state_17242__$1;
(statearr_17307_17369[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (16))){
var inst_17143 = (state_17242[(7)]);
var inst_17145 = cljs.core.chunked_seq_QMARK_(inst_17143);
var state_17242__$1 = state_17242;
if(inst_17145){
var statearr_17308_17370 = state_17242__$1;
(statearr_17308_17370[(1)] = (19));

} else {
var statearr_17309_17371 = state_17242__$1;
(statearr_17309_17371[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (38))){
var inst_17221 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17310_17372 = state_17242__$1;
(statearr_17310_17372[(2)] = inst_17221);

(statearr_17310_17372[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (30))){
var state_17242__$1 = state_17242;
var statearr_17311_17373 = state_17242__$1;
(statearr_17311_17373[(2)] = null);

(statearr_17311_17373[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (10))){
var inst_17124 = (state_17242[(13)]);
var inst_17122 = (state_17242[(15)]);
var inst_17132 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17122,inst_17124);
var inst_17133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17132,(0),null);
var inst_17134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17132,(1),null);
var state_17242__$1 = (function (){var statearr_17312 = state_17242;
(statearr_17312[(24)] = inst_17133);

return statearr_17312;
})();
if(cljs.core.truth_(inst_17134)){
var statearr_17313_17374 = state_17242__$1;
(statearr_17313_17374[(1)] = (13));

} else {
var statearr_17314_17375 = state_17242__$1;
(statearr_17314_17375[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (18))){
var inst_17169 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17315_17376 = state_17242__$1;
(statearr_17315_17376[(2)] = inst_17169);

(statearr_17315_17376[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (42))){
var state_17242__$1 = state_17242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17242__$1,(45),dchan);
} else {
if((state_val_17243 === (37))){
var inst_17202 = (state_17242[(23)]);
var inst_17112 = (state_17242[(11)]);
var inst_17211 = (state_17242[(22)]);
var inst_17211__$1 = cljs.core.first(inst_17202);
var inst_17212 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17211__$1,inst_17112,done);
var state_17242__$1 = (function (){var statearr_17316 = state_17242;
(statearr_17316[(22)] = inst_17211__$1);

return statearr_17316;
})();
if(cljs.core.truth_(inst_17212)){
var statearr_17317_17377 = state_17242__$1;
(statearr_17317_17377[(1)] = (39));

} else {
var statearr_17318_17378 = state_17242__$1;
(statearr_17318_17378[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17243 === (8))){
var inst_17124 = (state_17242[(13)]);
var inst_17123 = (state_17242[(16)]);
var inst_17126 = (inst_17124 < inst_17123);
var inst_17127 = inst_17126;
var state_17242__$1 = state_17242;
if(cljs.core.truth_(inst_17127)){
var statearr_17319_17379 = state_17242__$1;
(statearr_17319_17379[(1)] = (10));

} else {
var statearr_17320_17380 = state_17242__$1;
(statearr_17320_17380[(1)] = (11));

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
});})(c__16485__auto___17326,cs,m,dchan,dctr,done))
;
return ((function (switch__16410__auto__,c__16485__auto___17326,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16411__auto__ = null;
var cljs$core$async$mult_$_state_machine__16411__auto____0 = (function (){
var statearr_17321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17321[(0)] = cljs$core$async$mult_$_state_machine__16411__auto__);

(statearr_17321[(1)] = (1));

return statearr_17321;
});
var cljs$core$async$mult_$_state_machine__16411__auto____1 = (function (state_17242){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_17242);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e17322){var ex__16414__auto__ = e17322;
var statearr_17323_17381 = state_17242;
(statearr_17323_17381[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_17242[(4)]))){
var statearr_17324_17382 = state_17242;
(statearr_17324_17382[(1)] = cljs.core.first((state_17242[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__17383 = state_17242;
state_17242 = G__17383;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16411__auto__ = function(state_17242){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16411__auto____1.call(this,state_17242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16411__auto____0;
cljs$core$async$mult_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16411__auto____1;
return cljs$core$async$mult_$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___17326,cs,m,dchan,dctr,done))
})();
var state__16487__auto__ = (function (){var statearr_17325 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_17325[(6)] = c__16485__auto___17326);

return statearr_17325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___17326,cs,m,dchan,dctr,done))
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
var G__17385 = arguments.length;
switch (G__17385) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4231__auto__.call(null,m,ch));
} else {
var m__4231__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4231__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4231__auto__.call(null,m,ch));
} else {
var m__4231__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4231__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4231__auto__.call(null,m));
} else {
var m__4231__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4231__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4231__auto__.call(null,m,state_map));
} else {
var m__4231__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4231__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4231__auto__.call(null,m,mode));
} else {
var m__4231__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4231__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4521__auto__ = [];
var len__4518__auto___17397 = arguments.length;
var i__4519__auto___17398 = (0);
while(true){
if((i__4519__auto___17398 < len__4518__auto___17397)){
args__4521__auto__.push((arguments[i__4519__auto___17398]));

var G__17399 = (i__4519__auto___17398 + (1));
i__4519__auto___17398 = G__17399;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((3) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4522__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17391){
var map__17392 = p__17391;
var map__17392__$1 = ((((!((map__17392 == null)))?(((((map__17392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17392):map__17392);
var opts = map__17392__$1;
var statearr_17394_17400 = state;
(statearr_17394_17400[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts(((function (map__17392,map__17392__$1,opts){
return (function (val){
var statearr_17395_17401 = state;
(statearr_17395_17401[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17392,map__17392__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_17396_17402 = state;
(statearr_17396_17402[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17387){
var G__17388 = cljs.core.first(seq17387);
var seq17387__$1 = cljs.core.next(seq17387);
var G__17389 = cljs.core.first(seq17387__$1);
var seq17387__$2 = cljs.core.next(seq17387__$1);
var G__17390 = cljs.core.first(seq17387__$2);
var seq17387__$3 = cljs.core.next(seq17387__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17388,G__17389,G__17390,seq17387__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
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
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17403 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17404){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17404 = meta17404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17405,meta17404__$1){
var self__ = this;
var _17405__$1 = this;
return (new cljs.core.async.t_cljs$core$async17403(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17404__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17405){
var self__ = this;
var _17405__$1 = this;
return self__.meta17404;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17403.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17403.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17404], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17403";

cljs.core.async.t_cljs$core$async17403.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async17403");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17403.
 */
cljs.core.async.__GT_t_cljs$core$async17403 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17403(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17404){
return (new cljs.core.async.t_cljs$core$async17403(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17404));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17403(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16485__auto___17568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___17568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___17568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17507){
var state_val_17508 = (state_17507[(1)]);
if((state_val_17508 === (7))){
var inst_17422 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
var statearr_17509_17569 = state_17507__$1;
(statearr_17509_17569[(2)] = inst_17422);

(statearr_17509_17569[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (20))){
var inst_17434 = (state_17507[(7)]);
var state_17507__$1 = state_17507;
var statearr_17510_17570 = state_17507__$1;
(statearr_17510_17570[(2)] = inst_17434);

(statearr_17510_17570[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (27))){
var state_17507__$1 = state_17507;
var statearr_17511_17571 = state_17507__$1;
(statearr_17511_17571[(2)] = null);

(statearr_17511_17571[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (1))){
var inst_17409 = (state_17507[(8)]);
var inst_17409__$1 = calc_state();
var inst_17411 = (inst_17409__$1 == null);
var inst_17412 = cljs.core.not(inst_17411);
var state_17507__$1 = (function (){var statearr_17512 = state_17507;
(statearr_17512[(8)] = inst_17409__$1);

return statearr_17512;
})();
if(inst_17412){
var statearr_17513_17572 = state_17507__$1;
(statearr_17513_17572[(1)] = (2));

} else {
var statearr_17514_17573 = state_17507__$1;
(statearr_17514_17573[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (24))){
var inst_17481 = (state_17507[(9)]);
var inst_17458 = (state_17507[(10)]);
var inst_17467 = (state_17507[(11)]);
var inst_17481__$1 = (inst_17458.cljs$core$IFn$_invoke$arity$1 ? inst_17458.cljs$core$IFn$_invoke$arity$1(inst_17467) : inst_17458.call(null,inst_17467));
var state_17507__$1 = (function (){var statearr_17515 = state_17507;
(statearr_17515[(9)] = inst_17481__$1);

return statearr_17515;
})();
if(cljs.core.truth_(inst_17481__$1)){
var statearr_17516_17574 = state_17507__$1;
(statearr_17516_17574[(1)] = (29));

} else {
var statearr_17517_17575 = state_17507__$1;
(statearr_17517_17575[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (4))){
var inst_17425 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
if(cljs.core.truth_(inst_17425)){
var statearr_17518_17576 = state_17507__$1;
(statearr_17518_17576[(1)] = (8));

} else {
var statearr_17519_17577 = state_17507__$1;
(statearr_17519_17577[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (15))){
var inst_17452 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
if(cljs.core.truth_(inst_17452)){
var statearr_17520_17578 = state_17507__$1;
(statearr_17520_17578[(1)] = (19));

} else {
var statearr_17521_17579 = state_17507__$1;
(statearr_17521_17579[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (21))){
var inst_17457 = (state_17507[(12)]);
var inst_17457__$1 = (state_17507[(2)]);
var inst_17458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17457__$1,cljs.core.cst$kw$solos);
var inst_17459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17457__$1,cljs.core.cst$kw$mutes);
var inst_17460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17457__$1,cljs.core.cst$kw$reads);
var state_17507__$1 = (function (){var statearr_17522 = state_17507;
(statearr_17522[(13)] = inst_17459);

(statearr_17522[(12)] = inst_17457__$1);

(statearr_17522[(10)] = inst_17458);

return statearr_17522;
})();
return cljs.core.async.ioc_alts_BANG_(state_17507__$1,(22),inst_17460);
} else {
if((state_val_17508 === (31))){
var inst_17489 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
if(cljs.core.truth_(inst_17489)){
var statearr_17523_17580 = state_17507__$1;
(statearr_17523_17580[(1)] = (32));

} else {
var statearr_17524_17581 = state_17507__$1;
(statearr_17524_17581[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (32))){
var inst_17466 = (state_17507[(14)]);
var state_17507__$1 = state_17507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17507__$1,(35),out,inst_17466);
} else {
if((state_val_17508 === (33))){
var inst_17457 = (state_17507[(12)]);
var inst_17434 = inst_17457;
var state_17507__$1 = (function (){var statearr_17525 = state_17507;
(statearr_17525[(7)] = inst_17434);

return statearr_17525;
})();
var statearr_17526_17582 = state_17507__$1;
(statearr_17526_17582[(2)] = null);

(statearr_17526_17582[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (13))){
var inst_17434 = (state_17507[(7)]);
var inst_17441 = inst_17434.cljs$lang$protocol_mask$partition0$;
var inst_17442 = (inst_17441 & (64));
var inst_17443 = inst_17434.cljs$core$ISeq$;
var inst_17444 = (cljs.core.PROTOCOL_SENTINEL === inst_17443);
var inst_17445 = ((inst_17442) || (inst_17444));
var state_17507__$1 = state_17507;
if(cljs.core.truth_(inst_17445)){
var statearr_17527_17583 = state_17507__$1;
(statearr_17527_17583[(1)] = (16));

} else {
var statearr_17528_17584 = state_17507__$1;
(statearr_17528_17584[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (22))){
var inst_17466 = (state_17507[(14)]);
var inst_17467 = (state_17507[(11)]);
var inst_17465 = (state_17507[(2)]);
var inst_17466__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17465,(0),null);
var inst_17467__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17465,(1),null);
var inst_17468 = (inst_17466__$1 == null);
var inst_17469 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17467__$1,change);
var inst_17470 = ((inst_17468) || (inst_17469));
var state_17507__$1 = (function (){var statearr_17529 = state_17507;
(statearr_17529[(14)] = inst_17466__$1);

(statearr_17529[(11)] = inst_17467__$1);

return statearr_17529;
})();
if(cljs.core.truth_(inst_17470)){
var statearr_17530_17585 = state_17507__$1;
(statearr_17530_17585[(1)] = (23));

} else {
var statearr_17531_17586 = state_17507__$1;
(statearr_17531_17586[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (36))){
var inst_17457 = (state_17507[(12)]);
var inst_17434 = inst_17457;
var state_17507__$1 = (function (){var statearr_17532 = state_17507;
(statearr_17532[(7)] = inst_17434);

return statearr_17532;
})();
var statearr_17533_17587 = state_17507__$1;
(statearr_17533_17587[(2)] = null);

(statearr_17533_17587[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (29))){
var inst_17481 = (state_17507[(9)]);
var state_17507__$1 = state_17507;
var statearr_17534_17588 = state_17507__$1;
(statearr_17534_17588[(2)] = inst_17481);

(statearr_17534_17588[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (6))){
var state_17507__$1 = state_17507;
var statearr_17535_17589 = state_17507__$1;
(statearr_17535_17589[(2)] = false);

(statearr_17535_17589[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (28))){
var inst_17477 = (state_17507[(2)]);
var inst_17478 = calc_state();
var inst_17434 = inst_17478;
var state_17507__$1 = (function (){var statearr_17536 = state_17507;
(statearr_17536[(7)] = inst_17434);

(statearr_17536[(15)] = inst_17477);

return statearr_17536;
})();
var statearr_17537_17590 = state_17507__$1;
(statearr_17537_17590[(2)] = null);

(statearr_17537_17590[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (25))){
var inst_17503 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
var statearr_17538_17591 = state_17507__$1;
(statearr_17538_17591[(2)] = inst_17503);

(statearr_17538_17591[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (34))){
var inst_17501 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
var statearr_17539_17592 = state_17507__$1;
(statearr_17539_17592[(2)] = inst_17501);

(statearr_17539_17592[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (17))){
var state_17507__$1 = state_17507;
var statearr_17540_17593 = state_17507__$1;
(statearr_17540_17593[(2)] = false);

(statearr_17540_17593[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (3))){
var state_17507__$1 = state_17507;
var statearr_17541_17594 = state_17507__$1;
(statearr_17541_17594[(2)] = false);

(statearr_17541_17594[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (12))){
var inst_17505 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17507__$1,inst_17505);
} else {
if((state_val_17508 === (2))){
var inst_17409 = (state_17507[(8)]);
var inst_17414 = inst_17409.cljs$lang$protocol_mask$partition0$;
var inst_17415 = (inst_17414 & (64));
var inst_17416 = inst_17409.cljs$core$ISeq$;
var inst_17417 = (cljs.core.PROTOCOL_SENTINEL === inst_17416);
var inst_17418 = ((inst_17415) || (inst_17417));
var state_17507__$1 = state_17507;
if(cljs.core.truth_(inst_17418)){
var statearr_17542_17595 = state_17507__$1;
(statearr_17542_17595[(1)] = (5));

} else {
var statearr_17543_17596 = state_17507__$1;
(statearr_17543_17596[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (23))){
var inst_17466 = (state_17507[(14)]);
var inst_17472 = (inst_17466 == null);
var state_17507__$1 = state_17507;
if(cljs.core.truth_(inst_17472)){
var statearr_17544_17597 = state_17507__$1;
(statearr_17544_17597[(1)] = (26));

} else {
var statearr_17545_17598 = state_17507__$1;
(statearr_17545_17598[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (35))){
var inst_17492 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
if(cljs.core.truth_(inst_17492)){
var statearr_17546_17599 = state_17507__$1;
(statearr_17546_17599[(1)] = (36));

} else {
var statearr_17547_17600 = state_17507__$1;
(statearr_17547_17600[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (19))){
var inst_17434 = (state_17507[(7)]);
var inst_17454 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17434);
var state_17507__$1 = state_17507;
var statearr_17548_17601 = state_17507__$1;
(statearr_17548_17601[(2)] = inst_17454);

(statearr_17548_17601[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (11))){
var inst_17434 = (state_17507[(7)]);
var inst_17438 = (inst_17434 == null);
var inst_17439 = cljs.core.not(inst_17438);
var state_17507__$1 = state_17507;
if(inst_17439){
var statearr_17549_17602 = state_17507__$1;
(statearr_17549_17602[(1)] = (13));

} else {
var statearr_17550_17603 = state_17507__$1;
(statearr_17550_17603[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (9))){
var inst_17409 = (state_17507[(8)]);
var state_17507__$1 = state_17507;
var statearr_17551_17604 = state_17507__$1;
(statearr_17551_17604[(2)] = inst_17409);

(statearr_17551_17604[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (5))){
var state_17507__$1 = state_17507;
var statearr_17552_17605 = state_17507__$1;
(statearr_17552_17605[(2)] = true);

(statearr_17552_17605[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (14))){
var state_17507__$1 = state_17507;
var statearr_17553_17606 = state_17507__$1;
(statearr_17553_17606[(2)] = false);

(statearr_17553_17606[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (26))){
var inst_17467 = (state_17507[(11)]);
var inst_17474 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17467);
var state_17507__$1 = state_17507;
var statearr_17554_17607 = state_17507__$1;
(statearr_17554_17607[(2)] = inst_17474);

(statearr_17554_17607[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (16))){
var state_17507__$1 = state_17507;
var statearr_17555_17608 = state_17507__$1;
(statearr_17555_17608[(2)] = true);

(statearr_17555_17608[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (38))){
var inst_17497 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
var statearr_17556_17609 = state_17507__$1;
(statearr_17556_17609[(2)] = inst_17497);

(statearr_17556_17609[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (30))){
var inst_17459 = (state_17507[(13)]);
var inst_17458 = (state_17507[(10)]);
var inst_17467 = (state_17507[(11)]);
var inst_17484 = cljs.core.empty_QMARK_(inst_17458);
var inst_17485 = (inst_17459.cljs$core$IFn$_invoke$arity$1 ? inst_17459.cljs$core$IFn$_invoke$arity$1(inst_17467) : inst_17459.call(null,inst_17467));
var inst_17486 = cljs.core.not(inst_17485);
var inst_17487 = ((inst_17484) && (inst_17486));
var state_17507__$1 = state_17507;
var statearr_17557_17610 = state_17507__$1;
(statearr_17557_17610[(2)] = inst_17487);

(statearr_17557_17610[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (10))){
var inst_17409 = (state_17507[(8)]);
var inst_17430 = (state_17507[(2)]);
var inst_17431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17430,cljs.core.cst$kw$solos);
var inst_17432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17430,cljs.core.cst$kw$mutes);
var inst_17433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17430,cljs.core.cst$kw$reads);
var inst_17434 = inst_17409;
var state_17507__$1 = (function (){var statearr_17558 = state_17507;
(statearr_17558[(16)] = inst_17432);

(statearr_17558[(7)] = inst_17434);

(statearr_17558[(17)] = inst_17433);

(statearr_17558[(18)] = inst_17431);

return statearr_17558;
})();
var statearr_17559_17611 = state_17507__$1;
(statearr_17559_17611[(2)] = null);

(statearr_17559_17611[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (18))){
var inst_17449 = (state_17507[(2)]);
var state_17507__$1 = state_17507;
var statearr_17560_17612 = state_17507__$1;
(statearr_17560_17612[(2)] = inst_17449);

(statearr_17560_17612[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (37))){
var state_17507__$1 = state_17507;
var statearr_17561_17613 = state_17507__$1;
(statearr_17561_17613[(2)] = null);

(statearr_17561_17613[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17508 === (8))){
var inst_17409 = (state_17507[(8)]);
var inst_17427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17409);
var state_17507__$1 = state_17507;
var statearr_17562_17614 = state_17507__$1;
(statearr_17562_17614[(2)] = inst_17427);

(statearr_17562_17614[(1)] = (10));


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
});})(c__16485__auto___17568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16410__auto__,c__16485__auto___17568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16411__auto__ = null;
var cljs$core$async$mix_$_state_machine__16411__auto____0 = (function (){
var statearr_17563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17563[(0)] = cljs$core$async$mix_$_state_machine__16411__auto__);

(statearr_17563[(1)] = (1));

return statearr_17563;
});
var cljs$core$async$mix_$_state_machine__16411__auto____1 = (function (state_17507){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_17507);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e17564){var ex__16414__auto__ = e17564;
var statearr_17565_17615 = state_17507;
(statearr_17565_17615[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_17507[(4)]))){
var statearr_17566_17616 = state_17507;
(statearr_17566_17616[(1)] = cljs.core.first((state_17507[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__17617 = state_17507;
state_17507 = G__17617;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16411__auto__ = function(state_17507){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16411__auto____1.call(this,state_17507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16411__auto____0;
cljs$core$async$mix_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16411__auto____1;
return cljs$core$async$mix_$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___17568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16487__auto__ = (function (){var statearr_17567 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_17567[(6)] = c__16485__auto___17568);

return statearr_17567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___17568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4230__auto__ = (((p == null))?null:p);
var m__4231__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4231__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4231__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4231__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4230__auto__ = (((p == null))?null:p);
var m__4231__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4231__auto__.call(null,p,v,ch));
} else {
var m__4231__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4231__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17619 = arguments.length;
switch (G__17619) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4230__auto__ = (((p == null))?null:p);
var m__4231__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4231__auto__.call(null,p));
} else {
var m__4231__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4231__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4230__auto__ = (((p == null))?null:p);
var m__4231__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4231__auto__.call(null,p,v));
} else {
var m__4231__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4231__auto____$1.call(null,p,v));
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
var G__17623 = arguments.length;
switch (G__17623) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3936__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3936__auto__,mults){
return (function (p1__17621_SHARP_){
if(cljs.core.truth_((p1__17621_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17621_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17621_SHARP_.call(null,topic)))){
return p1__17621_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17621_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17624 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17625){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17625 = meta17625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17626,meta17625__$1){
var self__ = this;
var _17626__$1 = this;
return (new cljs.core.async.t_cljs$core$async17624(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17625__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17626){
var self__ = this;
var _17626__$1 = this;
return self__.meta17625;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17624.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17625], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17624";

cljs.core.async.t_cljs$core$async17624.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async17624");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17624.
 */
cljs.core.async.__GT_t_cljs$core$async17624 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17624(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17625){
return (new cljs.core.async.t_cljs$core$async17624(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17625));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17624(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16485__auto___17745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___17745,mults,ensure_mult,p){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___17745,mults,ensure_mult,p){
return (function (state_17698){
var state_val_17699 = (state_17698[(1)]);
if((state_val_17699 === (7))){
var inst_17694 = (state_17698[(2)]);
var state_17698__$1 = state_17698;
var statearr_17700_17746 = state_17698__$1;
(statearr_17700_17746[(2)] = inst_17694);

(statearr_17700_17746[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (20))){
var state_17698__$1 = state_17698;
var statearr_17701_17747 = state_17698__$1;
(statearr_17701_17747[(2)] = null);

(statearr_17701_17747[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (1))){
var state_17698__$1 = state_17698;
var statearr_17702_17748 = state_17698__$1;
(statearr_17702_17748[(2)] = null);

(statearr_17702_17748[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (24))){
var inst_17677 = (state_17698[(7)]);
var inst_17686 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17677);
var state_17698__$1 = state_17698;
var statearr_17703_17749 = state_17698__$1;
(statearr_17703_17749[(2)] = inst_17686);

(statearr_17703_17749[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (4))){
var inst_17629 = (state_17698[(8)]);
var inst_17629__$1 = (state_17698[(2)]);
var inst_17630 = (inst_17629__$1 == null);
var state_17698__$1 = (function (){var statearr_17704 = state_17698;
(statearr_17704[(8)] = inst_17629__$1);

return statearr_17704;
})();
if(cljs.core.truth_(inst_17630)){
var statearr_17705_17750 = state_17698__$1;
(statearr_17705_17750[(1)] = (5));

} else {
var statearr_17706_17751 = state_17698__$1;
(statearr_17706_17751[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (15))){
var inst_17671 = (state_17698[(2)]);
var state_17698__$1 = state_17698;
var statearr_17707_17752 = state_17698__$1;
(statearr_17707_17752[(2)] = inst_17671);

(statearr_17707_17752[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (21))){
var inst_17691 = (state_17698[(2)]);
var state_17698__$1 = (function (){var statearr_17708 = state_17698;
(statearr_17708[(9)] = inst_17691);

return statearr_17708;
})();
var statearr_17709_17753 = state_17698__$1;
(statearr_17709_17753[(2)] = null);

(statearr_17709_17753[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (13))){
var inst_17653 = (state_17698[(10)]);
var inst_17655 = cljs.core.chunked_seq_QMARK_(inst_17653);
var state_17698__$1 = state_17698;
if(inst_17655){
var statearr_17710_17754 = state_17698__$1;
(statearr_17710_17754[(1)] = (16));

} else {
var statearr_17711_17755 = state_17698__$1;
(statearr_17711_17755[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (22))){
var inst_17683 = (state_17698[(2)]);
var state_17698__$1 = state_17698;
if(cljs.core.truth_(inst_17683)){
var statearr_17712_17756 = state_17698__$1;
(statearr_17712_17756[(1)] = (23));

} else {
var statearr_17713_17757 = state_17698__$1;
(statearr_17713_17757[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (6))){
var inst_17629 = (state_17698[(8)]);
var inst_17677 = (state_17698[(7)]);
var inst_17679 = (state_17698[(11)]);
var inst_17677__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17629) : topic_fn.call(null,inst_17629));
var inst_17678 = cljs.core.deref(mults);
var inst_17679__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17678,inst_17677__$1);
var state_17698__$1 = (function (){var statearr_17714 = state_17698;
(statearr_17714[(7)] = inst_17677__$1);

(statearr_17714[(11)] = inst_17679__$1);

return statearr_17714;
})();
if(cljs.core.truth_(inst_17679__$1)){
var statearr_17715_17758 = state_17698__$1;
(statearr_17715_17758[(1)] = (19));

} else {
var statearr_17716_17759 = state_17698__$1;
(statearr_17716_17759[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (25))){
var inst_17688 = (state_17698[(2)]);
var state_17698__$1 = state_17698;
var statearr_17717_17760 = state_17698__$1;
(statearr_17717_17760[(2)] = inst_17688);

(statearr_17717_17760[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (17))){
var inst_17653 = (state_17698[(10)]);
var inst_17662 = cljs.core.first(inst_17653);
var inst_17663 = cljs.core.async.muxch_STAR_(inst_17662);
var inst_17664 = cljs.core.async.close_BANG_(inst_17663);
var inst_17665 = cljs.core.next(inst_17653);
var inst_17639 = inst_17665;
var inst_17640 = null;
var inst_17641 = (0);
var inst_17642 = (0);
var state_17698__$1 = (function (){var statearr_17718 = state_17698;
(statearr_17718[(12)] = inst_17640);

(statearr_17718[(13)] = inst_17642);

(statearr_17718[(14)] = inst_17639);

(statearr_17718[(15)] = inst_17664);

(statearr_17718[(16)] = inst_17641);

return statearr_17718;
})();
var statearr_17719_17761 = state_17698__$1;
(statearr_17719_17761[(2)] = null);

(statearr_17719_17761[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (3))){
var inst_17696 = (state_17698[(2)]);
var state_17698__$1 = state_17698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17698__$1,inst_17696);
} else {
if((state_val_17699 === (12))){
var inst_17673 = (state_17698[(2)]);
var state_17698__$1 = state_17698;
var statearr_17720_17762 = state_17698__$1;
(statearr_17720_17762[(2)] = inst_17673);

(statearr_17720_17762[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (2))){
var state_17698__$1 = state_17698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17698__$1,(4),ch);
} else {
if((state_val_17699 === (23))){
var state_17698__$1 = state_17698;
var statearr_17721_17763 = state_17698__$1;
(statearr_17721_17763[(2)] = null);

(statearr_17721_17763[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (19))){
var inst_17629 = (state_17698[(8)]);
var inst_17679 = (state_17698[(11)]);
var inst_17681 = cljs.core.async.muxch_STAR_(inst_17679);
var state_17698__$1 = state_17698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17698__$1,(22),inst_17681,inst_17629);
} else {
if((state_val_17699 === (11))){
var inst_17653 = (state_17698[(10)]);
var inst_17639 = (state_17698[(14)]);
var inst_17653__$1 = cljs.core.seq(inst_17639);
var state_17698__$1 = (function (){var statearr_17722 = state_17698;
(statearr_17722[(10)] = inst_17653__$1);

return statearr_17722;
})();
if(inst_17653__$1){
var statearr_17723_17764 = state_17698__$1;
(statearr_17723_17764[(1)] = (13));

} else {
var statearr_17724_17765 = state_17698__$1;
(statearr_17724_17765[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (9))){
var inst_17675 = (state_17698[(2)]);
var state_17698__$1 = state_17698;
var statearr_17725_17766 = state_17698__$1;
(statearr_17725_17766[(2)] = inst_17675);

(statearr_17725_17766[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (5))){
var inst_17636 = cljs.core.deref(mults);
var inst_17637 = cljs.core.vals(inst_17636);
var inst_17638 = cljs.core.seq(inst_17637);
var inst_17639 = inst_17638;
var inst_17640 = null;
var inst_17641 = (0);
var inst_17642 = (0);
var state_17698__$1 = (function (){var statearr_17726 = state_17698;
(statearr_17726[(12)] = inst_17640);

(statearr_17726[(13)] = inst_17642);

(statearr_17726[(14)] = inst_17639);

(statearr_17726[(16)] = inst_17641);

return statearr_17726;
})();
var statearr_17727_17767 = state_17698__$1;
(statearr_17727_17767[(2)] = null);

(statearr_17727_17767[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (14))){
var state_17698__$1 = state_17698;
var statearr_17731_17768 = state_17698__$1;
(statearr_17731_17768[(2)] = null);

(statearr_17731_17768[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (16))){
var inst_17653 = (state_17698[(10)]);
var inst_17657 = cljs.core.chunk_first(inst_17653);
var inst_17658 = cljs.core.chunk_rest(inst_17653);
var inst_17659 = cljs.core.count(inst_17657);
var inst_17639 = inst_17658;
var inst_17640 = inst_17657;
var inst_17641 = inst_17659;
var inst_17642 = (0);
var state_17698__$1 = (function (){var statearr_17732 = state_17698;
(statearr_17732[(12)] = inst_17640);

(statearr_17732[(13)] = inst_17642);

(statearr_17732[(14)] = inst_17639);

(statearr_17732[(16)] = inst_17641);

return statearr_17732;
})();
var statearr_17733_17769 = state_17698__$1;
(statearr_17733_17769[(2)] = null);

(statearr_17733_17769[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (10))){
var inst_17640 = (state_17698[(12)]);
var inst_17642 = (state_17698[(13)]);
var inst_17639 = (state_17698[(14)]);
var inst_17641 = (state_17698[(16)]);
var inst_17647 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17640,inst_17642);
var inst_17648 = cljs.core.async.muxch_STAR_(inst_17647);
var inst_17649 = cljs.core.async.close_BANG_(inst_17648);
var inst_17650 = (inst_17642 + (1));
var tmp17728 = inst_17640;
var tmp17729 = inst_17639;
var tmp17730 = inst_17641;
var inst_17639__$1 = tmp17729;
var inst_17640__$1 = tmp17728;
var inst_17641__$1 = tmp17730;
var inst_17642__$1 = inst_17650;
var state_17698__$1 = (function (){var statearr_17734 = state_17698;
(statearr_17734[(12)] = inst_17640__$1);

(statearr_17734[(13)] = inst_17642__$1);

(statearr_17734[(14)] = inst_17639__$1);

(statearr_17734[(16)] = inst_17641__$1);

(statearr_17734[(17)] = inst_17649);

return statearr_17734;
})();
var statearr_17735_17770 = state_17698__$1;
(statearr_17735_17770[(2)] = null);

(statearr_17735_17770[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (18))){
var inst_17668 = (state_17698[(2)]);
var state_17698__$1 = state_17698;
var statearr_17736_17771 = state_17698__$1;
(statearr_17736_17771[(2)] = inst_17668);

(statearr_17736_17771[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17699 === (8))){
var inst_17642 = (state_17698[(13)]);
var inst_17641 = (state_17698[(16)]);
var inst_17644 = (inst_17642 < inst_17641);
var inst_17645 = inst_17644;
var state_17698__$1 = state_17698;
if(cljs.core.truth_(inst_17645)){
var statearr_17737_17772 = state_17698__$1;
(statearr_17737_17772[(1)] = (10));

} else {
var statearr_17738_17773 = state_17698__$1;
(statearr_17738_17773[(1)] = (11));

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
});})(c__16485__auto___17745,mults,ensure_mult,p))
;
return ((function (switch__16410__auto__,c__16485__auto___17745,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16411__auto__ = null;
var cljs$core$async$state_machine__16411__auto____0 = (function (){
var statearr_17739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17739[(0)] = cljs$core$async$state_machine__16411__auto__);

(statearr_17739[(1)] = (1));

return statearr_17739;
});
var cljs$core$async$state_machine__16411__auto____1 = (function (state_17698){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_17698);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e17740){var ex__16414__auto__ = e17740;
var statearr_17741_17774 = state_17698;
(statearr_17741_17774[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_17698[(4)]))){
var statearr_17742_17775 = state_17698;
(statearr_17742_17775[(1)] = cljs.core.first((state_17698[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__17776 = state_17698;
state_17698 = G__17776;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$state_machine__16411__auto__ = function(state_17698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16411__auto____1.call(this,state_17698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16411__auto____0;
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16411__auto____1;
return cljs$core$async$state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___17745,mults,ensure_mult,p))
})();
var state__16487__auto__ = (function (){var statearr_17743 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_17743[(6)] = c__16485__auto___17745);

return statearr_17743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___17745,mults,ensure_mult,p))
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
var G__17778 = arguments.length;
switch (G__17778) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__17781 = arguments.length;
switch (G__17781) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__17784 = arguments.length;
switch (G__17784) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
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
var c__16485__auto___17862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___17862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___17862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17827){
var state_val_17828 = (state_17827[(1)]);
if((state_val_17828 === (7))){
var state_17827__$1 = state_17827;
var statearr_17829_17863 = state_17827__$1;
(statearr_17829_17863[(2)] = null);

(statearr_17829_17863[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (1))){
var state_17827__$1 = state_17827;
var statearr_17830_17864 = state_17827__$1;
(statearr_17830_17864[(2)] = null);

(statearr_17830_17864[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (4))){
var inst_17787 = (state_17827[(7)]);
var inst_17788 = (state_17827[(8)]);
var inst_17790 = (inst_17788 < inst_17787);
var state_17827__$1 = state_17827;
if(cljs.core.truth_(inst_17790)){
var statearr_17831_17865 = state_17827__$1;
(statearr_17831_17865[(1)] = (6));

} else {
var statearr_17832_17866 = state_17827__$1;
(statearr_17832_17866[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (15))){
var inst_17813 = (state_17827[(9)]);
var inst_17818 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17813);
var state_17827__$1 = state_17827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17827__$1,(17),out,inst_17818);
} else {
if((state_val_17828 === (13))){
var inst_17813 = (state_17827[(9)]);
var inst_17813__$1 = (state_17827[(2)]);
var inst_17814 = cljs.core.some(cljs.core.nil_QMARK_,inst_17813__$1);
var state_17827__$1 = (function (){var statearr_17833 = state_17827;
(statearr_17833[(9)] = inst_17813__$1);

return statearr_17833;
})();
if(cljs.core.truth_(inst_17814)){
var statearr_17834_17867 = state_17827__$1;
(statearr_17834_17867[(1)] = (14));

} else {
var statearr_17835_17868 = state_17827__$1;
(statearr_17835_17868[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (6))){
var state_17827__$1 = state_17827;
var statearr_17836_17869 = state_17827__$1;
(statearr_17836_17869[(2)] = null);

(statearr_17836_17869[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (17))){
var inst_17820 = (state_17827[(2)]);
var state_17827__$1 = (function (){var statearr_17838 = state_17827;
(statearr_17838[(10)] = inst_17820);

return statearr_17838;
})();
var statearr_17839_17870 = state_17827__$1;
(statearr_17839_17870[(2)] = null);

(statearr_17839_17870[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (3))){
var inst_17825 = (state_17827[(2)]);
var state_17827__$1 = state_17827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17827__$1,inst_17825);
} else {
if((state_val_17828 === (12))){
var _ = (function (){var statearr_17840 = state_17827;
(statearr_17840[(4)] = cljs.core.rest((state_17827[(4)])));

return statearr_17840;
})();
var state_17827__$1 = state_17827;
var ex17837 = (state_17827__$1[(2)]);
var statearr_17841_17871 = state_17827__$1;
(statearr_17841_17871[(5)] = ex17837);


if((ex17837 instanceof Object)){
var statearr_17842_17872 = state_17827__$1;
(statearr_17842_17872[(1)] = (11));

(statearr_17842_17872[(5)] = null);

} else {
throw ex17837;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (2))){
var inst_17786 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17787 = cnt;
var inst_17788 = (0);
var state_17827__$1 = (function (){var statearr_17843 = state_17827;
(statearr_17843[(7)] = inst_17787);

(statearr_17843[(11)] = inst_17786);

(statearr_17843[(8)] = inst_17788);

return statearr_17843;
})();
var statearr_17844_17873 = state_17827__$1;
(statearr_17844_17873[(2)] = null);

(statearr_17844_17873[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (11))){
var inst_17792 = (state_17827[(2)]);
var inst_17793 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17827__$1 = (function (){var statearr_17845 = state_17827;
(statearr_17845[(12)] = inst_17792);

return statearr_17845;
})();
var statearr_17846_17874 = state_17827__$1;
(statearr_17846_17874[(2)] = inst_17793);

(statearr_17846_17874[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (9))){
var inst_17788 = (state_17827[(8)]);
var _ = (function (){var statearr_17847 = state_17827;
(statearr_17847[(4)] = cljs.core.cons((12),(state_17827[(4)])));

return statearr_17847;
})();
var inst_17799 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17788) : chs__$1.call(null,inst_17788));
var inst_17800 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17788) : done.call(null,inst_17788));
var inst_17801 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17799,inst_17800);
var ___$1 = (function (){var statearr_17848 = state_17827;
(statearr_17848[(4)] = cljs.core.rest((state_17827[(4)])));

return statearr_17848;
})();
var state_17827__$1 = state_17827;
var statearr_17849_17875 = state_17827__$1;
(statearr_17849_17875[(2)] = inst_17801);

(statearr_17849_17875[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (5))){
var inst_17811 = (state_17827[(2)]);
var state_17827__$1 = (function (){var statearr_17850 = state_17827;
(statearr_17850[(13)] = inst_17811);

return statearr_17850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17827__$1,(13),dchan);
} else {
if((state_val_17828 === (14))){
var inst_17816 = cljs.core.async.close_BANG_(out);
var state_17827__$1 = state_17827;
var statearr_17851_17876 = state_17827__$1;
(statearr_17851_17876[(2)] = inst_17816);

(statearr_17851_17876[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (16))){
var inst_17823 = (state_17827[(2)]);
var state_17827__$1 = state_17827;
var statearr_17852_17877 = state_17827__$1;
(statearr_17852_17877[(2)] = inst_17823);

(statearr_17852_17877[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (10))){
var inst_17788 = (state_17827[(8)]);
var inst_17804 = (state_17827[(2)]);
var inst_17805 = (inst_17788 + (1));
var inst_17788__$1 = inst_17805;
var state_17827__$1 = (function (){var statearr_17853 = state_17827;
(statearr_17853[(14)] = inst_17804);

(statearr_17853[(8)] = inst_17788__$1);

return statearr_17853;
})();
var statearr_17854_17878 = state_17827__$1;
(statearr_17854_17878[(2)] = null);

(statearr_17854_17878[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17828 === (8))){
var inst_17809 = (state_17827[(2)]);
var state_17827__$1 = state_17827;
var statearr_17855_17879 = state_17827__$1;
(statearr_17855_17879[(2)] = inst_17809);

(statearr_17855_17879[(1)] = (5));


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
});})(c__16485__auto___17862,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16410__auto__,c__16485__auto___17862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16411__auto__ = null;
var cljs$core$async$state_machine__16411__auto____0 = (function (){
var statearr_17856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17856[(0)] = cljs$core$async$state_machine__16411__auto__);

(statearr_17856[(1)] = (1));

return statearr_17856;
});
var cljs$core$async$state_machine__16411__auto____1 = (function (state_17827){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_17827);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e17857){var ex__16414__auto__ = e17857;
var statearr_17858_17880 = state_17827;
(statearr_17858_17880[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_17827[(4)]))){
var statearr_17859_17881 = state_17827;
(statearr_17859_17881[(1)] = cljs.core.first((state_17827[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__17882 = state_17827;
state_17827 = G__17882;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$state_machine__16411__auto__ = function(state_17827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16411__auto____1.call(this,state_17827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16411__auto____0;
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16411__auto____1;
return cljs$core$async$state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___17862,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16487__auto__ = (function (){var statearr_17860 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_17860[(6)] = c__16485__auto___17862);

return statearr_17860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___17862,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17885 = arguments.length;
switch (G__17885) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16485__auto___17940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___17940,out){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___17940,out){
return (function (state_17917){
var state_val_17918 = (state_17917[(1)]);
if((state_val_17918 === (7))){
var inst_17897 = (state_17917[(7)]);
var inst_17896 = (state_17917[(8)]);
var inst_17896__$1 = (state_17917[(2)]);
var inst_17897__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17896__$1,(0),null);
var inst_17898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17896__$1,(1),null);
var inst_17899 = (inst_17897__$1 == null);
var state_17917__$1 = (function (){var statearr_17919 = state_17917;
(statearr_17919[(9)] = inst_17898);

(statearr_17919[(7)] = inst_17897__$1);

(statearr_17919[(8)] = inst_17896__$1);

return statearr_17919;
})();
if(cljs.core.truth_(inst_17899)){
var statearr_17920_17941 = state_17917__$1;
(statearr_17920_17941[(1)] = (8));

} else {
var statearr_17921_17942 = state_17917__$1;
(statearr_17921_17942[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17918 === (1))){
var inst_17886 = cljs.core.vec(chs);
var inst_17887 = inst_17886;
var state_17917__$1 = (function (){var statearr_17922 = state_17917;
(statearr_17922[(10)] = inst_17887);

return statearr_17922;
})();
var statearr_17923_17943 = state_17917__$1;
(statearr_17923_17943[(2)] = null);

(statearr_17923_17943[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17918 === (4))){
var inst_17887 = (state_17917[(10)]);
var state_17917__$1 = state_17917;
return cljs.core.async.ioc_alts_BANG_(state_17917__$1,(7),inst_17887);
} else {
if((state_val_17918 === (6))){
var inst_17913 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
var statearr_17924_17944 = state_17917__$1;
(statearr_17924_17944[(2)] = inst_17913);

(statearr_17924_17944[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17918 === (3))){
var inst_17915 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17917__$1,inst_17915);
} else {
if((state_val_17918 === (2))){
var inst_17887 = (state_17917[(10)]);
var inst_17889 = cljs.core.count(inst_17887);
var inst_17890 = (inst_17889 > (0));
var state_17917__$1 = state_17917;
if(cljs.core.truth_(inst_17890)){
var statearr_17926_17945 = state_17917__$1;
(statearr_17926_17945[(1)] = (4));

} else {
var statearr_17927_17946 = state_17917__$1;
(statearr_17927_17946[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17918 === (11))){
var inst_17887 = (state_17917[(10)]);
var inst_17906 = (state_17917[(2)]);
var tmp17925 = inst_17887;
var inst_17887__$1 = tmp17925;
var state_17917__$1 = (function (){var statearr_17928 = state_17917;
(statearr_17928[(11)] = inst_17906);

(statearr_17928[(10)] = inst_17887__$1);

return statearr_17928;
})();
var statearr_17929_17947 = state_17917__$1;
(statearr_17929_17947[(2)] = null);

(statearr_17929_17947[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17918 === (9))){
var inst_17897 = (state_17917[(7)]);
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17917__$1,(11),out,inst_17897);
} else {
if((state_val_17918 === (5))){
var inst_17911 = cljs.core.async.close_BANG_(out);
var state_17917__$1 = state_17917;
var statearr_17930_17948 = state_17917__$1;
(statearr_17930_17948[(2)] = inst_17911);

(statearr_17930_17948[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17918 === (10))){
var inst_17909 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
var statearr_17931_17949 = state_17917__$1;
(statearr_17931_17949[(2)] = inst_17909);

(statearr_17931_17949[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17918 === (8))){
var inst_17898 = (state_17917[(9)]);
var inst_17897 = (state_17917[(7)]);
var inst_17896 = (state_17917[(8)]);
var inst_17887 = (state_17917[(10)]);
var inst_17901 = (function (){var cs = inst_17887;
var vec__17892 = inst_17896;
var v = inst_17897;
var c = inst_17898;
return ((function (cs,vec__17892,v,c,inst_17898,inst_17897,inst_17896,inst_17887,state_val_17918,c__16485__auto___17940,out){
return (function (p1__17883_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17883_SHARP_);
});
;})(cs,vec__17892,v,c,inst_17898,inst_17897,inst_17896,inst_17887,state_val_17918,c__16485__auto___17940,out))
})();
var inst_17902 = cljs.core.filterv(inst_17901,inst_17887);
var inst_17887__$1 = inst_17902;
var state_17917__$1 = (function (){var statearr_17932 = state_17917;
(statearr_17932[(10)] = inst_17887__$1);

return statearr_17932;
})();
var statearr_17933_17950 = state_17917__$1;
(statearr_17933_17950[(2)] = null);

(statearr_17933_17950[(1)] = (2));


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
});})(c__16485__auto___17940,out))
;
return ((function (switch__16410__auto__,c__16485__auto___17940,out){
return (function() {
var cljs$core$async$state_machine__16411__auto__ = null;
var cljs$core$async$state_machine__16411__auto____0 = (function (){
var statearr_17934 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17934[(0)] = cljs$core$async$state_machine__16411__auto__);

(statearr_17934[(1)] = (1));

return statearr_17934;
});
var cljs$core$async$state_machine__16411__auto____1 = (function (state_17917){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_17917);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e17935){var ex__16414__auto__ = e17935;
var statearr_17936_17951 = state_17917;
(statearr_17936_17951[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_17917[(4)]))){
var statearr_17937_17952 = state_17917;
(statearr_17937_17952[(1)] = cljs.core.first((state_17917[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__17953 = state_17917;
state_17917 = G__17953;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$state_machine__16411__auto__ = function(state_17917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16411__auto____1.call(this,state_17917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16411__auto____0;
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16411__auto____1;
return cljs$core$async$state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___17940,out))
})();
var state__16487__auto__ = (function (){var statearr_17938 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_17938[(6)] = c__16485__auto___17940);

return statearr_17938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___17940,out))
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
var G__17955 = arguments.length;
switch (G__17955) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16485__auto___18001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___18001,out){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___18001,out){
return (function (state_17979){
var state_val_17980 = (state_17979[(1)]);
if((state_val_17980 === (7))){
var inst_17961 = (state_17979[(7)]);
var inst_17961__$1 = (state_17979[(2)]);
var inst_17962 = (inst_17961__$1 == null);
var inst_17963 = cljs.core.not(inst_17962);
var state_17979__$1 = (function (){var statearr_17981 = state_17979;
(statearr_17981[(7)] = inst_17961__$1);

return statearr_17981;
})();
if(inst_17963){
var statearr_17982_18002 = state_17979__$1;
(statearr_17982_18002[(1)] = (8));

} else {
var statearr_17983_18003 = state_17979__$1;
(statearr_17983_18003[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17980 === (1))){
var inst_17956 = (0);
var state_17979__$1 = (function (){var statearr_17984 = state_17979;
(statearr_17984[(8)] = inst_17956);

return statearr_17984;
})();
var statearr_17985_18004 = state_17979__$1;
(statearr_17985_18004[(2)] = null);

(statearr_17985_18004[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17980 === (4))){
var state_17979__$1 = state_17979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17979__$1,(7),ch);
} else {
if((state_val_17980 === (6))){
var inst_17974 = (state_17979[(2)]);
var state_17979__$1 = state_17979;
var statearr_17986_18005 = state_17979__$1;
(statearr_17986_18005[(2)] = inst_17974);

(statearr_17986_18005[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17980 === (3))){
var inst_17976 = (state_17979[(2)]);
var inst_17977 = cljs.core.async.close_BANG_(out);
var state_17979__$1 = (function (){var statearr_17987 = state_17979;
(statearr_17987[(9)] = inst_17976);

return statearr_17987;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17979__$1,inst_17977);
} else {
if((state_val_17980 === (2))){
var inst_17956 = (state_17979[(8)]);
var inst_17958 = (inst_17956 < n);
var state_17979__$1 = state_17979;
if(cljs.core.truth_(inst_17958)){
var statearr_17988_18006 = state_17979__$1;
(statearr_17988_18006[(1)] = (4));

} else {
var statearr_17989_18007 = state_17979__$1;
(statearr_17989_18007[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17980 === (11))){
var inst_17956 = (state_17979[(8)]);
var inst_17966 = (state_17979[(2)]);
var inst_17967 = (inst_17956 + (1));
var inst_17956__$1 = inst_17967;
var state_17979__$1 = (function (){var statearr_17990 = state_17979;
(statearr_17990[(10)] = inst_17966);

(statearr_17990[(8)] = inst_17956__$1);

return statearr_17990;
})();
var statearr_17991_18008 = state_17979__$1;
(statearr_17991_18008[(2)] = null);

(statearr_17991_18008[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17980 === (9))){
var state_17979__$1 = state_17979;
var statearr_17992_18009 = state_17979__$1;
(statearr_17992_18009[(2)] = null);

(statearr_17992_18009[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17980 === (5))){
var state_17979__$1 = state_17979;
var statearr_17993_18010 = state_17979__$1;
(statearr_17993_18010[(2)] = null);

(statearr_17993_18010[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17980 === (10))){
var inst_17971 = (state_17979[(2)]);
var state_17979__$1 = state_17979;
var statearr_17994_18011 = state_17979__$1;
(statearr_17994_18011[(2)] = inst_17971);

(statearr_17994_18011[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17980 === (8))){
var inst_17961 = (state_17979[(7)]);
var state_17979__$1 = state_17979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17979__$1,(11),out,inst_17961);
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
});})(c__16485__auto___18001,out))
;
return ((function (switch__16410__auto__,c__16485__auto___18001,out){
return (function() {
var cljs$core$async$state_machine__16411__auto__ = null;
var cljs$core$async$state_machine__16411__auto____0 = (function (){
var statearr_17995 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17995[(0)] = cljs$core$async$state_machine__16411__auto__);

(statearr_17995[(1)] = (1));

return statearr_17995;
});
var cljs$core$async$state_machine__16411__auto____1 = (function (state_17979){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_17979);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e17996){var ex__16414__auto__ = e17996;
var statearr_17997_18012 = state_17979;
(statearr_17997_18012[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_17979[(4)]))){
var statearr_17998_18013 = state_17979;
(statearr_17998_18013[(1)] = cljs.core.first((state_17979[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__18014 = state_17979;
state_17979 = G__18014;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$state_machine__16411__auto__ = function(state_17979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16411__auto____1.call(this,state_17979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16411__auto____0;
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16411__auto____1;
return cljs$core$async$state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___18001,out))
})();
var state__16487__auto__ = (function (){var statearr_17999 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_17999[(6)] = c__16485__auto___18001);

return statearr_17999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___18001,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18016 = (function (f,ch,meta18017){
this.f = f;
this.ch = ch;
this.meta18017 = meta18017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18018,meta18017__$1){
var self__ = this;
var _18018__$1 = this;
return (new cljs.core.async.t_cljs$core$async18016(self__.f,self__.ch,meta18017__$1));
});

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18018){
var self__ = this;
var _18018__$1 = this;
return self__.meta18017;
});

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18019 = (function (f,ch,meta18017,_,fn1,meta18020){
this.f = f;
this.ch = ch;
this.meta18017 = meta18017;
this._ = _;
this.fn1 = fn1;
this.meta18020 = meta18020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18021,meta18020__$1){
var self__ = this;
var _18021__$1 = this;
return (new cljs.core.async.t_cljs$core$async18019(self__.f,self__.ch,self__.meta18017,self__._,self__.fn1,meta18020__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18021){
var self__ = this;
var _18021__$1 = this;
return self__.meta18020;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18015_SHARP_){
var G__18022 = (((p1__18015_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18015_SHARP_) : self__.f.call(null,p1__18015_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18022) : f1.call(null,G__18022));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18019.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18017,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18016], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18020], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18019";

cljs.core.async.t_cljs$core$async18019.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async18019");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18019.
 */
cljs.core.async.__GT_t_cljs$core$async18019 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18019(f__$1,ch__$1,meta18017__$1,___$2,fn1__$1,meta18020){
return (new cljs.core.async.t_cljs$core$async18019(f__$1,ch__$1,meta18017__$1,___$2,fn1__$1,meta18020));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18019(self__.f,self__.ch,self__.meta18017,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3925__auto__ = ret;
if(cljs.core.truth_(and__3925__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3925__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18023 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18023) : self__.f.call(null,G__18023));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18016.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18017], null);
});

cljs.core.async.t_cljs$core$async18016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18016";

cljs.core.async.t_cljs$core$async18016.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async18016");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18016.
 */
cljs.core.async.__GT_t_cljs$core$async18016 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18016(f__$1,ch__$1,meta18017){
return (new cljs.core.async.t_cljs$core$async18016(f__$1,ch__$1,meta18017));
});

}

return (new cljs.core.async.t_cljs$core$async18016(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18024 = (function (f,ch,meta18025){
this.f = f;
this.ch = ch;
this.meta18025 = meta18025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18026,meta18025__$1){
var self__ = this;
var _18026__$1 = this;
return (new cljs.core.async.t_cljs$core$async18024(self__.f,self__.ch,meta18025__$1));
});

cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18026){
var self__ = this;
var _18026__$1 = this;
return self__.meta18025;
});

cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18025], null);
});

cljs.core.async.t_cljs$core$async18024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18024";

cljs.core.async.t_cljs$core$async18024.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async18024");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18024.
 */
cljs.core.async.__GT_t_cljs$core$async18024 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18024(f__$1,ch__$1,meta18025){
return (new cljs.core.async.t_cljs$core$async18024(f__$1,ch__$1,meta18025));
});

}

return (new cljs.core.async.t_cljs$core$async18024(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18027 = (function (p,ch,meta18028){
this.p = p;
this.ch = ch;
this.meta18028 = meta18028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18029,meta18028__$1){
var self__ = this;
var _18029__$1 = this;
return (new cljs.core.async.t_cljs$core$async18027(self__.p,self__.ch,meta18028__$1));
});

cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18029){
var self__ = this;
var _18029__$1 = this;
return self__.meta18028;
});

cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18028], null);
});

cljs.core.async.t_cljs$core$async18027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18027";

cljs.core.async.t_cljs$core$async18027.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async18027");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18027.
 */
cljs.core.async.__GT_t_cljs$core$async18027 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18027(p__$1,ch__$1,meta18028){
return (new cljs.core.async.t_cljs$core$async18027(p__$1,ch__$1,meta18028));
});

}

return (new cljs.core.async.t_cljs$core$async18027(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18031 = arguments.length;
switch (G__18031) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16485__auto___18072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___18072,out){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___18072,out){
return (function (state_18052){
var state_val_18053 = (state_18052[(1)]);
if((state_val_18053 === (7))){
var inst_18048 = (state_18052[(2)]);
var state_18052__$1 = state_18052;
var statearr_18054_18073 = state_18052__$1;
(statearr_18054_18073[(2)] = inst_18048);

(statearr_18054_18073[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18053 === (1))){
var state_18052__$1 = state_18052;
var statearr_18055_18074 = state_18052__$1;
(statearr_18055_18074[(2)] = null);

(statearr_18055_18074[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18053 === (4))){
var inst_18034 = (state_18052[(7)]);
var inst_18034__$1 = (state_18052[(2)]);
var inst_18035 = (inst_18034__$1 == null);
var state_18052__$1 = (function (){var statearr_18056 = state_18052;
(statearr_18056[(7)] = inst_18034__$1);

return statearr_18056;
})();
if(cljs.core.truth_(inst_18035)){
var statearr_18057_18075 = state_18052__$1;
(statearr_18057_18075[(1)] = (5));

} else {
var statearr_18058_18076 = state_18052__$1;
(statearr_18058_18076[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18053 === (6))){
var inst_18034 = (state_18052[(7)]);
var inst_18039 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18034) : p.call(null,inst_18034));
var state_18052__$1 = state_18052;
if(cljs.core.truth_(inst_18039)){
var statearr_18059_18077 = state_18052__$1;
(statearr_18059_18077[(1)] = (8));

} else {
var statearr_18060_18078 = state_18052__$1;
(statearr_18060_18078[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18053 === (3))){
var inst_18050 = (state_18052[(2)]);
var state_18052__$1 = state_18052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18052__$1,inst_18050);
} else {
if((state_val_18053 === (2))){
var state_18052__$1 = state_18052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18052__$1,(4),ch);
} else {
if((state_val_18053 === (11))){
var inst_18042 = (state_18052[(2)]);
var state_18052__$1 = state_18052;
var statearr_18061_18079 = state_18052__$1;
(statearr_18061_18079[(2)] = inst_18042);

(statearr_18061_18079[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18053 === (9))){
var state_18052__$1 = state_18052;
var statearr_18062_18080 = state_18052__$1;
(statearr_18062_18080[(2)] = null);

(statearr_18062_18080[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18053 === (5))){
var inst_18037 = cljs.core.async.close_BANG_(out);
var state_18052__$1 = state_18052;
var statearr_18063_18081 = state_18052__$1;
(statearr_18063_18081[(2)] = inst_18037);

(statearr_18063_18081[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18053 === (10))){
var inst_18045 = (state_18052[(2)]);
var state_18052__$1 = (function (){var statearr_18064 = state_18052;
(statearr_18064[(8)] = inst_18045);

return statearr_18064;
})();
var statearr_18065_18082 = state_18052__$1;
(statearr_18065_18082[(2)] = null);

(statearr_18065_18082[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18053 === (8))){
var inst_18034 = (state_18052[(7)]);
var state_18052__$1 = state_18052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18052__$1,(11),out,inst_18034);
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
});})(c__16485__auto___18072,out))
;
return ((function (switch__16410__auto__,c__16485__auto___18072,out){
return (function() {
var cljs$core$async$state_machine__16411__auto__ = null;
var cljs$core$async$state_machine__16411__auto____0 = (function (){
var statearr_18066 = [null,null,null,null,null,null,null,null,null];
(statearr_18066[(0)] = cljs$core$async$state_machine__16411__auto__);

(statearr_18066[(1)] = (1));

return statearr_18066;
});
var cljs$core$async$state_machine__16411__auto____1 = (function (state_18052){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_18052);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e18067){var ex__16414__auto__ = e18067;
var statearr_18068_18083 = state_18052;
(statearr_18068_18083[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_18052[(4)]))){
var statearr_18069_18084 = state_18052;
(statearr_18069_18084[(1)] = cljs.core.first((state_18052[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__18085 = state_18052;
state_18052 = G__18085;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$state_machine__16411__auto__ = function(state_18052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16411__auto____1.call(this,state_18052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16411__auto____0;
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16411__auto____1;
return cljs$core$async$state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___18072,out))
})();
var state__16487__auto__ = (function (){var statearr_18070 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_18070[(6)] = c__16485__auto___18072);

return statearr_18070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___18072,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18087 = arguments.length;
switch (G__18087) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__16485__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto__){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto__){
return (function (state_18150){
var state_val_18151 = (state_18150[(1)]);
if((state_val_18151 === (7))){
var inst_18146 = (state_18150[(2)]);
var state_18150__$1 = state_18150;
var statearr_18152_18191 = state_18150__$1;
(statearr_18152_18191[(2)] = inst_18146);

(statearr_18152_18191[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (20))){
var inst_18116 = (state_18150[(7)]);
var inst_18127 = (state_18150[(2)]);
var inst_18128 = cljs.core.next(inst_18116);
var inst_18102 = inst_18128;
var inst_18103 = null;
var inst_18104 = (0);
var inst_18105 = (0);
var state_18150__$1 = (function (){var statearr_18153 = state_18150;
(statearr_18153[(8)] = inst_18104);

(statearr_18153[(9)] = inst_18105);

(statearr_18153[(10)] = inst_18127);

(statearr_18153[(11)] = inst_18102);

(statearr_18153[(12)] = inst_18103);

return statearr_18153;
})();
var statearr_18154_18192 = state_18150__$1;
(statearr_18154_18192[(2)] = null);

(statearr_18154_18192[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (1))){
var state_18150__$1 = state_18150;
var statearr_18155_18193 = state_18150__$1;
(statearr_18155_18193[(2)] = null);

(statearr_18155_18193[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (4))){
var inst_18091 = (state_18150[(13)]);
var inst_18091__$1 = (state_18150[(2)]);
var inst_18092 = (inst_18091__$1 == null);
var state_18150__$1 = (function (){var statearr_18156 = state_18150;
(statearr_18156[(13)] = inst_18091__$1);

return statearr_18156;
})();
if(cljs.core.truth_(inst_18092)){
var statearr_18157_18194 = state_18150__$1;
(statearr_18157_18194[(1)] = (5));

} else {
var statearr_18158_18195 = state_18150__$1;
(statearr_18158_18195[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (15))){
var state_18150__$1 = state_18150;
var statearr_18162_18196 = state_18150__$1;
(statearr_18162_18196[(2)] = null);

(statearr_18162_18196[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (21))){
var state_18150__$1 = state_18150;
var statearr_18163_18197 = state_18150__$1;
(statearr_18163_18197[(2)] = null);

(statearr_18163_18197[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (13))){
var inst_18104 = (state_18150[(8)]);
var inst_18105 = (state_18150[(9)]);
var inst_18102 = (state_18150[(11)]);
var inst_18103 = (state_18150[(12)]);
var inst_18112 = (state_18150[(2)]);
var inst_18113 = (inst_18105 + (1));
var tmp18159 = inst_18104;
var tmp18160 = inst_18102;
var tmp18161 = inst_18103;
var inst_18102__$1 = tmp18160;
var inst_18103__$1 = tmp18161;
var inst_18104__$1 = tmp18159;
var inst_18105__$1 = inst_18113;
var state_18150__$1 = (function (){var statearr_18164 = state_18150;
(statearr_18164[(8)] = inst_18104__$1);

(statearr_18164[(9)] = inst_18105__$1);

(statearr_18164[(14)] = inst_18112);

(statearr_18164[(11)] = inst_18102__$1);

(statearr_18164[(12)] = inst_18103__$1);

return statearr_18164;
})();
var statearr_18165_18198 = state_18150__$1;
(statearr_18165_18198[(2)] = null);

(statearr_18165_18198[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (22))){
var state_18150__$1 = state_18150;
var statearr_18166_18199 = state_18150__$1;
(statearr_18166_18199[(2)] = null);

(statearr_18166_18199[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (6))){
var inst_18091 = (state_18150[(13)]);
var inst_18100 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18091) : f.call(null,inst_18091));
var inst_18101 = cljs.core.seq(inst_18100);
var inst_18102 = inst_18101;
var inst_18103 = null;
var inst_18104 = (0);
var inst_18105 = (0);
var state_18150__$1 = (function (){var statearr_18167 = state_18150;
(statearr_18167[(8)] = inst_18104);

(statearr_18167[(9)] = inst_18105);

(statearr_18167[(11)] = inst_18102);

(statearr_18167[(12)] = inst_18103);

return statearr_18167;
})();
var statearr_18168_18200 = state_18150__$1;
(statearr_18168_18200[(2)] = null);

(statearr_18168_18200[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (17))){
var inst_18116 = (state_18150[(7)]);
var inst_18120 = cljs.core.chunk_first(inst_18116);
var inst_18121 = cljs.core.chunk_rest(inst_18116);
var inst_18122 = cljs.core.count(inst_18120);
var inst_18102 = inst_18121;
var inst_18103 = inst_18120;
var inst_18104 = inst_18122;
var inst_18105 = (0);
var state_18150__$1 = (function (){var statearr_18169 = state_18150;
(statearr_18169[(8)] = inst_18104);

(statearr_18169[(9)] = inst_18105);

(statearr_18169[(11)] = inst_18102);

(statearr_18169[(12)] = inst_18103);

return statearr_18169;
})();
var statearr_18170_18201 = state_18150__$1;
(statearr_18170_18201[(2)] = null);

(statearr_18170_18201[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (3))){
var inst_18148 = (state_18150[(2)]);
var state_18150__$1 = state_18150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18150__$1,inst_18148);
} else {
if((state_val_18151 === (12))){
var inst_18136 = (state_18150[(2)]);
var state_18150__$1 = state_18150;
var statearr_18171_18202 = state_18150__$1;
(statearr_18171_18202[(2)] = inst_18136);

(statearr_18171_18202[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (2))){
var state_18150__$1 = state_18150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18150__$1,(4),in$);
} else {
if((state_val_18151 === (23))){
var inst_18144 = (state_18150[(2)]);
var state_18150__$1 = state_18150;
var statearr_18172_18203 = state_18150__$1;
(statearr_18172_18203[(2)] = inst_18144);

(statearr_18172_18203[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (19))){
var inst_18131 = (state_18150[(2)]);
var state_18150__$1 = state_18150;
var statearr_18173_18204 = state_18150__$1;
(statearr_18173_18204[(2)] = inst_18131);

(statearr_18173_18204[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (11))){
var inst_18116 = (state_18150[(7)]);
var inst_18102 = (state_18150[(11)]);
var inst_18116__$1 = cljs.core.seq(inst_18102);
var state_18150__$1 = (function (){var statearr_18174 = state_18150;
(statearr_18174[(7)] = inst_18116__$1);

return statearr_18174;
})();
if(inst_18116__$1){
var statearr_18175_18205 = state_18150__$1;
(statearr_18175_18205[(1)] = (14));

} else {
var statearr_18176_18206 = state_18150__$1;
(statearr_18176_18206[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (9))){
var inst_18138 = (state_18150[(2)]);
var inst_18139 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18150__$1 = (function (){var statearr_18177 = state_18150;
(statearr_18177[(15)] = inst_18138);

return statearr_18177;
})();
if(cljs.core.truth_(inst_18139)){
var statearr_18178_18207 = state_18150__$1;
(statearr_18178_18207[(1)] = (21));

} else {
var statearr_18179_18208 = state_18150__$1;
(statearr_18179_18208[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (5))){
var inst_18094 = cljs.core.async.close_BANG_(out);
var state_18150__$1 = state_18150;
var statearr_18180_18209 = state_18150__$1;
(statearr_18180_18209[(2)] = inst_18094);

(statearr_18180_18209[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (14))){
var inst_18116 = (state_18150[(7)]);
var inst_18118 = cljs.core.chunked_seq_QMARK_(inst_18116);
var state_18150__$1 = state_18150;
if(inst_18118){
var statearr_18181_18210 = state_18150__$1;
(statearr_18181_18210[(1)] = (17));

} else {
var statearr_18182_18211 = state_18150__$1;
(statearr_18182_18211[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (16))){
var inst_18134 = (state_18150[(2)]);
var state_18150__$1 = state_18150;
var statearr_18183_18212 = state_18150__$1;
(statearr_18183_18212[(2)] = inst_18134);

(statearr_18183_18212[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18151 === (10))){
var inst_18105 = (state_18150[(9)]);
var inst_18103 = (state_18150[(12)]);
var inst_18110 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18103,inst_18105);
var state_18150__$1 = state_18150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18150__$1,(13),out,inst_18110);
} else {
if((state_val_18151 === (18))){
var inst_18116 = (state_18150[(7)]);
var inst_18125 = cljs.core.first(inst_18116);
var state_18150__$1 = state_18150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18150__$1,(20),out,inst_18125);
} else {
if((state_val_18151 === (8))){
var inst_18104 = (state_18150[(8)]);
var inst_18105 = (state_18150[(9)]);
var inst_18107 = (inst_18105 < inst_18104);
var inst_18108 = inst_18107;
var state_18150__$1 = state_18150;
if(cljs.core.truth_(inst_18108)){
var statearr_18184_18213 = state_18150__$1;
(statearr_18184_18213[(1)] = (10));

} else {
var statearr_18185_18214 = state_18150__$1;
(statearr_18185_18214[(1)] = (11));

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
});})(c__16485__auto__))
;
return ((function (switch__16410__auto__,c__16485__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16411__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16411__auto____0 = (function (){
var statearr_18186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18186[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16411__auto__);

(statearr_18186[(1)] = (1));

return statearr_18186;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16411__auto____1 = (function (state_18150){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_18150);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e18187){var ex__16414__auto__ = e18187;
var statearr_18188_18215 = state_18150;
(statearr_18188_18215[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_18150[(4)]))){
var statearr_18189_18216 = state_18150;
(statearr_18189_18216[(1)] = cljs.core.first((state_18150[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__18217 = state_18150;
state_18150 = G__18217;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16411__auto__ = function(state_18150){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16411__auto____1.call(this,state_18150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16411__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16411__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto__))
})();
var state__16487__auto__ = (function (){var statearr_18190 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_18190[(6)] = c__16485__auto__);

return statearr_18190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto__))
);

return c__16485__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18219 = arguments.length;
switch (G__18219) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__18222 = arguments.length;
switch (G__18222) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__18225 = arguments.length;
switch (G__18225) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16485__auto___18273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___18273,out){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___18273,out){
return (function (state_18249){
var state_val_18250 = (state_18249[(1)]);
if((state_val_18250 === (7))){
var inst_18244 = (state_18249[(2)]);
var state_18249__$1 = state_18249;
var statearr_18251_18274 = state_18249__$1;
(statearr_18251_18274[(2)] = inst_18244);

(statearr_18251_18274[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18250 === (1))){
var inst_18226 = null;
var state_18249__$1 = (function (){var statearr_18252 = state_18249;
(statearr_18252[(7)] = inst_18226);

return statearr_18252;
})();
var statearr_18253_18275 = state_18249__$1;
(statearr_18253_18275[(2)] = null);

(statearr_18253_18275[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18250 === (4))){
var inst_18229 = (state_18249[(8)]);
var inst_18229__$1 = (state_18249[(2)]);
var inst_18230 = (inst_18229__$1 == null);
var inst_18231 = cljs.core.not(inst_18230);
var state_18249__$1 = (function (){var statearr_18254 = state_18249;
(statearr_18254[(8)] = inst_18229__$1);

return statearr_18254;
})();
if(inst_18231){
var statearr_18255_18276 = state_18249__$1;
(statearr_18255_18276[(1)] = (5));

} else {
var statearr_18256_18277 = state_18249__$1;
(statearr_18256_18277[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18250 === (6))){
var state_18249__$1 = state_18249;
var statearr_18257_18278 = state_18249__$1;
(statearr_18257_18278[(2)] = null);

(statearr_18257_18278[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18250 === (3))){
var inst_18246 = (state_18249[(2)]);
var inst_18247 = cljs.core.async.close_BANG_(out);
var state_18249__$1 = (function (){var statearr_18258 = state_18249;
(statearr_18258[(9)] = inst_18246);

return statearr_18258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18249__$1,inst_18247);
} else {
if((state_val_18250 === (2))){
var state_18249__$1 = state_18249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18249__$1,(4),ch);
} else {
if((state_val_18250 === (11))){
var inst_18229 = (state_18249[(8)]);
var inst_18238 = (state_18249[(2)]);
var inst_18226 = inst_18229;
var state_18249__$1 = (function (){var statearr_18259 = state_18249;
(statearr_18259[(10)] = inst_18238);

(statearr_18259[(7)] = inst_18226);

return statearr_18259;
})();
var statearr_18260_18279 = state_18249__$1;
(statearr_18260_18279[(2)] = null);

(statearr_18260_18279[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18250 === (9))){
var inst_18229 = (state_18249[(8)]);
var state_18249__$1 = state_18249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18249__$1,(11),out,inst_18229);
} else {
if((state_val_18250 === (5))){
var inst_18229 = (state_18249[(8)]);
var inst_18226 = (state_18249[(7)]);
var inst_18233 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18229,inst_18226);
var state_18249__$1 = state_18249;
if(inst_18233){
var statearr_18262_18280 = state_18249__$1;
(statearr_18262_18280[(1)] = (8));

} else {
var statearr_18263_18281 = state_18249__$1;
(statearr_18263_18281[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18250 === (10))){
var inst_18241 = (state_18249[(2)]);
var state_18249__$1 = state_18249;
var statearr_18264_18282 = state_18249__$1;
(statearr_18264_18282[(2)] = inst_18241);

(statearr_18264_18282[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18250 === (8))){
var inst_18226 = (state_18249[(7)]);
var tmp18261 = inst_18226;
var inst_18226__$1 = tmp18261;
var state_18249__$1 = (function (){var statearr_18265 = state_18249;
(statearr_18265[(7)] = inst_18226__$1);

return statearr_18265;
})();
var statearr_18266_18283 = state_18249__$1;
(statearr_18266_18283[(2)] = null);

(statearr_18266_18283[(1)] = (2));


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
});})(c__16485__auto___18273,out))
;
return ((function (switch__16410__auto__,c__16485__auto___18273,out){
return (function() {
var cljs$core$async$state_machine__16411__auto__ = null;
var cljs$core$async$state_machine__16411__auto____0 = (function (){
var statearr_18267 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18267[(0)] = cljs$core$async$state_machine__16411__auto__);

(statearr_18267[(1)] = (1));

return statearr_18267;
});
var cljs$core$async$state_machine__16411__auto____1 = (function (state_18249){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_18249);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e18268){var ex__16414__auto__ = e18268;
var statearr_18269_18284 = state_18249;
(statearr_18269_18284[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_18249[(4)]))){
var statearr_18270_18285 = state_18249;
(statearr_18270_18285[(1)] = cljs.core.first((state_18249[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__18286 = state_18249;
state_18249 = G__18286;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$state_machine__16411__auto__ = function(state_18249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16411__auto____1.call(this,state_18249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16411__auto____0;
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16411__auto____1;
return cljs$core$async$state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___18273,out))
})();
var state__16487__auto__ = (function (){var statearr_18271 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_18271[(6)] = c__16485__auto___18273);

return statearr_18271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___18273,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18288 = arguments.length;
switch (G__18288) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16485__auto___18355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___18355,out){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___18355,out){
return (function (state_18326){
var state_val_18327 = (state_18326[(1)]);
if((state_val_18327 === (7))){
var inst_18322 = (state_18326[(2)]);
var state_18326__$1 = state_18326;
var statearr_18328_18356 = state_18326__$1;
(statearr_18328_18356[(2)] = inst_18322);

(statearr_18328_18356[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18327 === (1))){
var inst_18289 = (new Array(n));
var inst_18290 = inst_18289;
var inst_18291 = (0);
var state_18326__$1 = (function (){var statearr_18329 = state_18326;
(statearr_18329[(7)] = inst_18291);

(statearr_18329[(8)] = inst_18290);

return statearr_18329;
})();
var statearr_18330_18357 = state_18326__$1;
(statearr_18330_18357[(2)] = null);

(statearr_18330_18357[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18327 === (4))){
var inst_18294 = (state_18326[(9)]);
var inst_18294__$1 = (state_18326[(2)]);
var inst_18295 = (inst_18294__$1 == null);
var inst_18296 = cljs.core.not(inst_18295);
var state_18326__$1 = (function (){var statearr_18331 = state_18326;
(statearr_18331[(9)] = inst_18294__$1);

return statearr_18331;
})();
if(inst_18296){
var statearr_18332_18358 = state_18326__$1;
(statearr_18332_18358[(1)] = (5));

} else {
var statearr_18333_18359 = state_18326__$1;
(statearr_18333_18359[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18327 === (15))){
var inst_18316 = (state_18326[(2)]);
var state_18326__$1 = state_18326;
var statearr_18334_18360 = state_18326__$1;
(statearr_18334_18360[(2)] = inst_18316);

(statearr_18334_18360[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18327 === (13))){
var state_18326__$1 = state_18326;
var statearr_18335_18361 = state_18326__$1;
(statearr_18335_18361[(2)] = null);

(statearr_18335_18361[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18327 === (6))){
var inst_18291 = (state_18326[(7)]);
var inst_18312 = (inst_18291 > (0));
var state_18326__$1 = state_18326;
if(cljs.core.truth_(inst_18312)){
var statearr_18336_18362 = state_18326__$1;
(statearr_18336_18362[(1)] = (12));

} else {
var statearr_18337_18363 = state_18326__$1;
(statearr_18337_18363[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18327 === (3))){
var inst_18324 = (state_18326[(2)]);
var state_18326__$1 = state_18326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18326__$1,inst_18324);
} else {
if((state_val_18327 === (12))){
var inst_18290 = (state_18326[(8)]);
var inst_18314 = cljs.core.vec(inst_18290);
var state_18326__$1 = state_18326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18326__$1,(15),out,inst_18314);
} else {
if((state_val_18327 === (2))){
var state_18326__$1 = state_18326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18326__$1,(4),ch);
} else {
if((state_val_18327 === (11))){
var inst_18306 = (state_18326[(2)]);
var inst_18307 = (new Array(n));
var inst_18290 = inst_18307;
var inst_18291 = (0);
var state_18326__$1 = (function (){var statearr_18338 = state_18326;
(statearr_18338[(10)] = inst_18306);

(statearr_18338[(7)] = inst_18291);

(statearr_18338[(8)] = inst_18290);

return statearr_18338;
})();
var statearr_18339_18364 = state_18326__$1;
(statearr_18339_18364[(2)] = null);

(statearr_18339_18364[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18327 === (9))){
var inst_18290 = (state_18326[(8)]);
var inst_18304 = cljs.core.vec(inst_18290);
var state_18326__$1 = state_18326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18326__$1,(11),out,inst_18304);
} else {
if((state_val_18327 === (5))){
var inst_18291 = (state_18326[(7)]);
var inst_18290 = (state_18326[(8)]);
var inst_18294 = (state_18326[(9)]);
var inst_18299 = (state_18326[(11)]);
var inst_18298 = (inst_18290[inst_18291] = inst_18294);
var inst_18299__$1 = (inst_18291 + (1));
var inst_18300 = (inst_18299__$1 < n);
var state_18326__$1 = (function (){var statearr_18340 = state_18326;
(statearr_18340[(12)] = inst_18298);

(statearr_18340[(11)] = inst_18299__$1);

return statearr_18340;
})();
if(cljs.core.truth_(inst_18300)){
var statearr_18341_18365 = state_18326__$1;
(statearr_18341_18365[(1)] = (8));

} else {
var statearr_18342_18366 = state_18326__$1;
(statearr_18342_18366[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18327 === (14))){
var inst_18319 = (state_18326[(2)]);
var inst_18320 = cljs.core.async.close_BANG_(out);
var state_18326__$1 = (function (){var statearr_18344 = state_18326;
(statearr_18344[(13)] = inst_18319);

return statearr_18344;
})();
var statearr_18345_18367 = state_18326__$1;
(statearr_18345_18367[(2)] = inst_18320);

(statearr_18345_18367[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18327 === (10))){
var inst_18310 = (state_18326[(2)]);
var state_18326__$1 = state_18326;
var statearr_18346_18368 = state_18326__$1;
(statearr_18346_18368[(2)] = inst_18310);

(statearr_18346_18368[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18327 === (8))){
var inst_18290 = (state_18326[(8)]);
var inst_18299 = (state_18326[(11)]);
var tmp18343 = inst_18290;
var inst_18290__$1 = tmp18343;
var inst_18291 = inst_18299;
var state_18326__$1 = (function (){var statearr_18347 = state_18326;
(statearr_18347[(7)] = inst_18291);

(statearr_18347[(8)] = inst_18290__$1);

return statearr_18347;
})();
var statearr_18348_18369 = state_18326__$1;
(statearr_18348_18369[(2)] = null);

(statearr_18348_18369[(1)] = (2));


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
});})(c__16485__auto___18355,out))
;
return ((function (switch__16410__auto__,c__16485__auto___18355,out){
return (function() {
var cljs$core$async$state_machine__16411__auto__ = null;
var cljs$core$async$state_machine__16411__auto____0 = (function (){
var statearr_18349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18349[(0)] = cljs$core$async$state_machine__16411__auto__);

(statearr_18349[(1)] = (1));

return statearr_18349;
});
var cljs$core$async$state_machine__16411__auto____1 = (function (state_18326){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_18326);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e18350){var ex__16414__auto__ = e18350;
var statearr_18351_18370 = state_18326;
(statearr_18351_18370[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_18326[(4)]))){
var statearr_18352_18371 = state_18326;
(statearr_18352_18371[(1)] = cljs.core.first((state_18326[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__18372 = state_18326;
state_18326 = G__18372;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$state_machine__16411__auto__ = function(state_18326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16411__auto____1.call(this,state_18326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16411__auto____0;
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16411__auto____1;
return cljs$core$async$state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___18355,out))
})();
var state__16487__auto__ = (function (){var statearr_18353 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_18353[(6)] = c__16485__auto___18355);

return statearr_18353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___18355,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18374 = arguments.length;
switch (G__18374) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16485__auto___18445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___18445,out){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___18445,out){
return (function (state_18416){
var state_val_18417 = (state_18416[(1)]);
if((state_val_18417 === (7))){
var inst_18412 = (state_18416[(2)]);
var state_18416__$1 = state_18416;
var statearr_18418_18446 = state_18416__$1;
(statearr_18418_18446[(2)] = inst_18412);

(statearr_18418_18446[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18417 === (1))){
var inst_18375 = [];
var inst_18376 = inst_18375;
var inst_18377 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18416__$1 = (function (){var statearr_18419 = state_18416;
(statearr_18419[(7)] = inst_18377);

(statearr_18419[(8)] = inst_18376);

return statearr_18419;
})();
var statearr_18420_18447 = state_18416__$1;
(statearr_18420_18447[(2)] = null);

(statearr_18420_18447[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18417 === (4))){
var inst_18380 = (state_18416[(9)]);
var inst_18380__$1 = (state_18416[(2)]);
var inst_18381 = (inst_18380__$1 == null);
var inst_18382 = cljs.core.not(inst_18381);
var state_18416__$1 = (function (){var statearr_18421 = state_18416;
(statearr_18421[(9)] = inst_18380__$1);

return statearr_18421;
})();
if(inst_18382){
var statearr_18422_18448 = state_18416__$1;
(statearr_18422_18448[(1)] = (5));

} else {
var statearr_18423_18449 = state_18416__$1;
(statearr_18423_18449[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18417 === (15))){
var inst_18406 = (state_18416[(2)]);
var state_18416__$1 = state_18416;
var statearr_18424_18450 = state_18416__$1;
(statearr_18424_18450[(2)] = inst_18406);

(statearr_18424_18450[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18417 === (13))){
var state_18416__$1 = state_18416;
var statearr_18425_18451 = state_18416__$1;
(statearr_18425_18451[(2)] = null);

(statearr_18425_18451[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18417 === (6))){
var inst_18376 = (state_18416[(8)]);
var inst_18401 = inst_18376.length;
var inst_18402 = (inst_18401 > (0));
var state_18416__$1 = state_18416;
if(cljs.core.truth_(inst_18402)){
var statearr_18426_18452 = state_18416__$1;
(statearr_18426_18452[(1)] = (12));

} else {
var statearr_18427_18453 = state_18416__$1;
(statearr_18427_18453[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18417 === (3))){
var inst_18414 = (state_18416[(2)]);
var state_18416__$1 = state_18416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18416__$1,inst_18414);
} else {
if((state_val_18417 === (12))){
var inst_18376 = (state_18416[(8)]);
var inst_18404 = cljs.core.vec(inst_18376);
var state_18416__$1 = state_18416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18416__$1,(15),out,inst_18404);
} else {
if((state_val_18417 === (2))){
var state_18416__$1 = state_18416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18416__$1,(4),ch);
} else {
if((state_val_18417 === (11))){
var inst_18380 = (state_18416[(9)]);
var inst_18384 = (state_18416[(10)]);
var inst_18394 = (state_18416[(2)]);
var inst_18395 = [];
var inst_18396 = inst_18395.push(inst_18380);
var inst_18376 = inst_18395;
var inst_18377 = inst_18384;
var state_18416__$1 = (function (){var statearr_18428 = state_18416;
(statearr_18428[(11)] = inst_18396);

(statearr_18428[(7)] = inst_18377);

(statearr_18428[(8)] = inst_18376);

(statearr_18428[(12)] = inst_18394);

return statearr_18428;
})();
var statearr_18429_18454 = state_18416__$1;
(statearr_18429_18454[(2)] = null);

(statearr_18429_18454[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18417 === (9))){
var inst_18376 = (state_18416[(8)]);
var inst_18392 = cljs.core.vec(inst_18376);
var state_18416__$1 = state_18416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18416__$1,(11),out,inst_18392);
} else {
if((state_val_18417 === (5))){
var inst_18380 = (state_18416[(9)]);
var inst_18377 = (state_18416[(7)]);
var inst_18384 = (state_18416[(10)]);
var inst_18384__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18380) : f.call(null,inst_18380));
var inst_18385 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18384__$1,inst_18377);
var inst_18386 = cljs.core.keyword_identical_QMARK_(inst_18377,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18387 = ((inst_18385) || (inst_18386));
var state_18416__$1 = (function (){var statearr_18430 = state_18416;
(statearr_18430[(10)] = inst_18384__$1);

return statearr_18430;
})();
if(cljs.core.truth_(inst_18387)){
var statearr_18431_18455 = state_18416__$1;
(statearr_18431_18455[(1)] = (8));

} else {
var statearr_18432_18456 = state_18416__$1;
(statearr_18432_18456[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18417 === (14))){
var inst_18409 = (state_18416[(2)]);
var inst_18410 = cljs.core.async.close_BANG_(out);
var state_18416__$1 = (function (){var statearr_18434 = state_18416;
(statearr_18434[(13)] = inst_18409);

return statearr_18434;
})();
var statearr_18435_18457 = state_18416__$1;
(statearr_18435_18457[(2)] = inst_18410);

(statearr_18435_18457[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18417 === (10))){
var inst_18399 = (state_18416[(2)]);
var state_18416__$1 = state_18416;
var statearr_18436_18458 = state_18416__$1;
(statearr_18436_18458[(2)] = inst_18399);

(statearr_18436_18458[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18417 === (8))){
var inst_18380 = (state_18416[(9)]);
var inst_18376 = (state_18416[(8)]);
var inst_18384 = (state_18416[(10)]);
var inst_18389 = inst_18376.push(inst_18380);
var tmp18433 = inst_18376;
var inst_18376__$1 = tmp18433;
var inst_18377 = inst_18384;
var state_18416__$1 = (function (){var statearr_18437 = state_18416;
(statearr_18437[(14)] = inst_18389);

(statearr_18437[(7)] = inst_18377);

(statearr_18437[(8)] = inst_18376__$1);

return statearr_18437;
})();
var statearr_18438_18459 = state_18416__$1;
(statearr_18438_18459[(2)] = null);

(statearr_18438_18459[(1)] = (2));


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
});})(c__16485__auto___18445,out))
;
return ((function (switch__16410__auto__,c__16485__auto___18445,out){
return (function() {
var cljs$core$async$state_machine__16411__auto__ = null;
var cljs$core$async$state_machine__16411__auto____0 = (function (){
var statearr_18439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18439[(0)] = cljs$core$async$state_machine__16411__auto__);

(statearr_18439[(1)] = (1));

return statearr_18439;
});
var cljs$core$async$state_machine__16411__auto____1 = (function (state_18416){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_18416);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e18440){var ex__16414__auto__ = e18440;
var statearr_18441_18460 = state_18416;
(statearr_18441_18460[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_18416[(4)]))){
var statearr_18442_18461 = state_18416;
(statearr_18442_18461[(1)] = cljs.core.first((state_18416[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__18462 = state_18416;
state_18416 = G__18462;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs$core$async$state_machine__16411__auto__ = function(state_18416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16411__auto____1.call(this,state_18416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16411__auto____0;
cljs$core$async$state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16411__auto____1;
return cljs$core$async$state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___18445,out))
})();
var state__16487__auto__ = (function (){var statearr_18443 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_18443[(6)] = c__16485__auto___18445);

return statearr_18443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___18445,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

