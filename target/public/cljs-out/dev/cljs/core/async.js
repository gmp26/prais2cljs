// Compiled by ClojureScript 1.10.329 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18817 = arguments.length;
switch (G__18817) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18818 = (function (f,blockable,meta18819){
this.f = f;
this.blockable = blockable;
this.meta18819 = meta18819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18820,meta18819__$1){
var self__ = this;
var _18820__$1 = this;
return (new cljs.core.async.t_cljs$core$async18818(self__.f,self__.blockable,meta18819__$1));
});

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18820){
var self__ = this;
var _18820__$1 = this;
return self__.meta18819;
});

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18819","meta18819",84328632,null)], null);
});

cljs.core.async.t_cljs$core$async18818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18818";

cljs.core.async.t_cljs$core$async18818.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async18818");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18818.
 */
cljs.core.async.__GT_t_cljs$core$async18818 = (function cljs$core$async$__GT_t_cljs$core$async18818(f__$1,blockable__$1,meta18819){
return (new cljs.core.async.t_cljs$core$async18818(f__$1,blockable__$1,meta18819));
});

}

return (new cljs.core.async.t_cljs$core$async18818(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__18824 = arguments.length;
switch (G__18824) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__18827 = arguments.length;
switch (G__18827) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__18830 = arguments.length;
switch (G__18830) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18832 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18832);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18832,ret){
return (function (){
return fn1.call(null,val_18832);
});})(val_18832,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__18834 = arguments.length;
switch (G__18834) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5751__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4395__auto___18836 = n;
var x_18837 = (0);
while(true){
if((x_18837 < n__4395__auto___18836)){
(a[x_18837] = x_18837);

var G__18838 = (x_18837 + (1));
x_18837 = G__18838;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18839 = (function (flag,meta18840){
this.flag = flag;
this.meta18840 = meta18840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18841,meta18840__$1){
var self__ = this;
var _18841__$1 = this;
return (new cljs.core.async.t_cljs$core$async18839(self__.flag,meta18840__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18841){
var self__ = this;
var _18841__$1 = this;
return self__.meta18840;
});})(flag))
;

cljs.core.async.t_cljs$core$async18839.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18839.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18839.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18840","meta18840",740711899,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18839";

cljs.core.async.t_cljs$core$async18839.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async18839");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18839.
 */
cljs.core.async.__GT_t_cljs$core$async18839 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18839(flag__$1,meta18840){
return (new cljs.core.async.t_cljs$core$async18839(flag__$1,meta18840));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18839(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18842 = (function (flag,cb,meta18843){
this.flag = flag;
this.cb = cb;
this.meta18843 = meta18843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18844,meta18843__$1){
var self__ = this;
var _18844__$1 = this;
return (new cljs.core.async.t_cljs$core$async18842(self__.flag,self__.cb,meta18843__$1));
});

cljs.core.async.t_cljs$core$async18842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18844){
var self__ = this;
var _18844__$1 = this;
return self__.meta18843;
});

cljs.core.async.t_cljs$core$async18842.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18842.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18843","meta18843",1615880884,null)], null);
});

cljs.core.async.t_cljs$core$async18842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18842";

cljs.core.async.t_cljs$core$async18842.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async18842");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18842.
 */
cljs.core.async.__GT_t_cljs$core$async18842 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18842(flag__$1,cb__$1,meta18843){
return (new cljs.core.async.t_cljs$core$async18842(flag__$1,cb__$1,meta18843));
});

}

return (new cljs.core.async.t_cljs$core$async18842(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18845_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18845_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18846_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18846_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3936__auto__ = wport;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18847 = (i + (1));
i = G__18847;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__3925__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4518__auto___18853 = arguments.length;
var i__4519__auto___18854 = (0);
while(true){
if((i__4519__auto___18854 < len__4518__auto___18853)){
args__4521__auto__.push((arguments[i__4519__auto___18854]));

var G__18855 = (i__4519__auto___18854 + (1));
i__4519__auto___18854 = G__18855;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18850){
var map__18851 = p__18850;
var map__18851__$1 = ((((!((map__18851 == null)))?(((((map__18851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18851):map__18851);
var opts = map__18851__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18848){
var G__18849 = cljs.core.first.call(null,seq18848);
var seq18848__$1 = cljs.core.next.call(null,seq18848);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18849,seq18848__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__18857 = arguments.length;
switch (G__18857) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18757__auto___18904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___18904){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___18904){
return (function (state_18881){
var state_val_18882 = (state_18881[(1)]);
if((state_val_18882 === (7))){
var inst_18877 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
var statearr_18883_18905 = state_18881__$1;
(statearr_18883_18905[(2)] = inst_18877);

(statearr_18883_18905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (1))){
var state_18881__$1 = state_18881;
var statearr_18884_18906 = state_18881__$1;
(statearr_18884_18906[(2)] = null);

(statearr_18884_18906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (4))){
var inst_18860 = (state_18881[(7)]);
var inst_18860__$1 = (state_18881[(2)]);
var inst_18861 = (inst_18860__$1 == null);
var state_18881__$1 = (function (){var statearr_18885 = state_18881;
(statearr_18885[(7)] = inst_18860__$1);

return statearr_18885;
})();
if(cljs.core.truth_(inst_18861)){
var statearr_18886_18907 = state_18881__$1;
(statearr_18886_18907[(1)] = (5));

} else {
var statearr_18887_18908 = state_18881__$1;
(statearr_18887_18908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (13))){
var state_18881__$1 = state_18881;
var statearr_18888_18909 = state_18881__$1;
(statearr_18888_18909[(2)] = null);

(statearr_18888_18909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (6))){
var inst_18860 = (state_18881[(7)]);
var state_18881__$1 = state_18881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18881__$1,(11),to,inst_18860);
} else {
if((state_val_18882 === (3))){
var inst_18879 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18881__$1,inst_18879);
} else {
if((state_val_18882 === (12))){
var state_18881__$1 = state_18881;
var statearr_18889_18910 = state_18881__$1;
(statearr_18889_18910[(2)] = null);

(statearr_18889_18910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (2))){
var state_18881__$1 = state_18881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18881__$1,(4),from);
} else {
if((state_val_18882 === (11))){
var inst_18870 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
if(cljs.core.truth_(inst_18870)){
var statearr_18890_18911 = state_18881__$1;
(statearr_18890_18911[(1)] = (12));

} else {
var statearr_18891_18912 = state_18881__$1;
(statearr_18891_18912[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (9))){
var state_18881__$1 = state_18881;
var statearr_18892_18913 = state_18881__$1;
(statearr_18892_18913[(2)] = null);

(statearr_18892_18913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (5))){
var state_18881__$1 = state_18881;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18893_18914 = state_18881__$1;
(statearr_18893_18914[(1)] = (8));

} else {
var statearr_18894_18915 = state_18881__$1;
(statearr_18894_18915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (14))){
var inst_18875 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
var statearr_18895_18916 = state_18881__$1;
(statearr_18895_18916[(2)] = inst_18875);

(statearr_18895_18916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (10))){
var inst_18867 = (state_18881[(2)]);
var state_18881__$1 = state_18881;
var statearr_18896_18917 = state_18881__$1;
(statearr_18896_18917[(2)] = inst_18867);

(statearr_18896_18917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18882 === (8))){
var inst_18864 = cljs.core.async.close_BANG_.call(null,to);
var state_18881__$1 = state_18881;
var statearr_18897_18918 = state_18881__$1;
(statearr_18897_18918[(2)] = inst_18864);

(statearr_18897_18918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto___18904))
;
return ((function (switch__18683__auto__,c__18757__auto___18904){
return (function() {
var cljs$core$async$state_machine__18684__auto__ = null;
var cljs$core$async$state_machine__18684__auto____0 = (function (){
var statearr_18898 = [null,null,null,null,null,null,null,null];
(statearr_18898[(0)] = cljs$core$async$state_machine__18684__auto__);

(statearr_18898[(1)] = (1));

return statearr_18898;
});
var cljs$core$async$state_machine__18684__auto____1 = (function (state_18881){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_18881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e18899){var ex__18687__auto__ = e18899;
var statearr_18900_18919 = state_18881;
(statearr_18900_18919[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_18881[(4)]))){
var statearr_18901_18920 = state_18881;
(statearr_18901_18920[(1)] = cljs.core.first.call(null,(state_18881[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18921 = state_18881;
state_18881 = G__18921;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$state_machine__18684__auto__ = function(state_18881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18684__auto____1.call(this,state_18881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18684__auto____0;
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18684__auto____1;
return cljs$core$async$state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___18904))
})();
var state__18759__auto__ = (function (){var statearr_18902 = f__18758__auto__.call(null);
(statearr_18902[(6)] = c__18757__auto___18904);

return statearr_18902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___18904))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__18922){
var vec__18923 = p__18922;
var v = cljs.core.nth.call(null,vec__18923,(0),null);
var p = cljs.core.nth.call(null,vec__18923,(1),null);
var job = vec__18923;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18757__auto___19099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___19099,res,vec__18923,v,p,job,jobs,results){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___19099,res,vec__18923,v,p,job,jobs,results){
return (function (state_18930){
var state_val_18931 = (state_18930[(1)]);
if((state_val_18931 === (1))){
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18930__$1,(2),res,v);
} else {
if((state_val_18931 === (2))){
var inst_18927 = (state_18930[(2)]);
var inst_18928 = cljs.core.async.close_BANG_.call(null,res);
var state_18930__$1 = (function (){var statearr_18932 = state_18930;
(statearr_18932[(7)] = inst_18927);

return statearr_18932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18930__$1,inst_18928);
} else {
return null;
}
}
});})(c__18757__auto___19099,res,vec__18923,v,p,job,jobs,results))
;
return ((function (switch__18683__auto__,c__18757__auto___19099,res,vec__18923,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0 = (function (){
var statearr_18933 = [null,null,null,null,null,null,null,null];
(statearr_18933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__);

(statearr_18933[(1)] = (1));

return statearr_18933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1 = (function (state_18930){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_18930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e18934){var ex__18687__auto__ = e18934;
var statearr_18935_19100 = state_18930;
(statearr_18935_19100[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_18930[(4)]))){
var statearr_18936_19101 = state_18930;
(statearr_18936_19101[(1)] = cljs.core.first.call(null,(state_18930[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19102 = state_18930;
state_18930 = G__19102;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__ = function(state_18930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1.call(this,state_18930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___19099,res,vec__18923,v,p,job,jobs,results))
})();
var state__18759__auto__ = (function (){var statearr_18937 = f__18758__auto__.call(null);
(statearr_18937[(6)] = c__18757__auto___19099);

return statearr_18937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___19099,res,vec__18923,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18938){
var vec__18939 = p__18938;
var v = cljs.core.nth.call(null,vec__18939,(0),null);
var p = cljs.core.nth.call(null,vec__18939,(1),null);
var job = vec__18939;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4395__auto___19103 = n;
var __19104 = (0);
while(true){
if((__19104 < n__4395__auto___19103)){
var G__18942_19105 = type;
var G__18942_19106__$1 = (((G__18942_19105 instanceof cljs.core.Keyword))?G__18942_19105.fqn:null);
switch (G__18942_19106__$1) {
case "compute":
var c__18757__auto___19108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19104,c__18757__auto___19108,G__18942_19105,G__18942_19106__$1,n__4395__auto___19103,jobs,results,process,async){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (__19104,c__18757__auto___19108,G__18942_19105,G__18942_19106__$1,n__4395__auto___19103,jobs,results,process,async){
return (function (state_18955){
var state_val_18956 = (state_18955[(1)]);
if((state_val_18956 === (1))){
var state_18955__$1 = state_18955;
var statearr_18957_19109 = state_18955__$1;
(statearr_18957_19109[(2)] = null);

(statearr_18957_19109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (2))){
var state_18955__$1 = state_18955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18955__$1,(4),jobs);
} else {
if((state_val_18956 === (3))){
var inst_18953 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18955__$1,inst_18953);
} else {
if((state_val_18956 === (4))){
var inst_18945 = (state_18955[(2)]);
var inst_18946 = process.call(null,inst_18945);
var state_18955__$1 = state_18955;
if(cljs.core.truth_(inst_18946)){
var statearr_18958_19110 = state_18955__$1;
(statearr_18958_19110[(1)] = (5));

} else {
var statearr_18959_19111 = state_18955__$1;
(statearr_18959_19111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (5))){
var state_18955__$1 = state_18955;
var statearr_18960_19112 = state_18955__$1;
(statearr_18960_19112[(2)] = null);

(statearr_18960_19112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (6))){
var state_18955__$1 = state_18955;
var statearr_18961_19113 = state_18955__$1;
(statearr_18961_19113[(2)] = null);

(statearr_18961_19113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18956 === (7))){
var inst_18951 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
var statearr_18962_19114 = state_18955__$1;
(statearr_18962_19114[(2)] = inst_18951);

(statearr_18962_19114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19104,c__18757__auto___19108,G__18942_19105,G__18942_19106__$1,n__4395__auto___19103,jobs,results,process,async))
;
return ((function (__19104,switch__18683__auto__,c__18757__auto___19108,G__18942_19105,G__18942_19106__$1,n__4395__auto___19103,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0 = (function (){
var statearr_18963 = [null,null,null,null,null,null,null];
(statearr_18963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__);

(statearr_18963[(1)] = (1));

return statearr_18963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1 = (function (state_18955){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_18955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e18964){var ex__18687__auto__ = e18964;
var statearr_18965_19115 = state_18955;
(statearr_18965_19115[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_18955[(4)]))){
var statearr_18966_19116 = state_18955;
(statearr_18966_19116[(1)] = cljs.core.first.call(null,(state_18955[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19117 = state_18955;
state_18955 = G__19117;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__ = function(state_18955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1.call(this,state_18955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__;
})()
;})(__19104,switch__18683__auto__,c__18757__auto___19108,G__18942_19105,G__18942_19106__$1,n__4395__auto___19103,jobs,results,process,async))
})();
var state__18759__auto__ = (function (){var statearr_18967 = f__18758__auto__.call(null);
(statearr_18967[(6)] = c__18757__auto___19108);

return statearr_18967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(__19104,c__18757__auto___19108,G__18942_19105,G__18942_19106__$1,n__4395__auto___19103,jobs,results,process,async))
);


break;
case "async":
var c__18757__auto___19118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19104,c__18757__auto___19118,G__18942_19105,G__18942_19106__$1,n__4395__auto___19103,jobs,results,process,async){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (__19104,c__18757__auto___19118,G__18942_19105,G__18942_19106__$1,n__4395__auto___19103,jobs,results,process,async){
return (function (state_18980){
var state_val_18981 = (state_18980[(1)]);
if((state_val_18981 === (1))){
var state_18980__$1 = state_18980;
var statearr_18982_19119 = state_18980__$1;
(statearr_18982_19119[(2)] = null);

(statearr_18982_19119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (2))){
var state_18980__$1 = state_18980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18980__$1,(4),jobs);
} else {
if((state_val_18981 === (3))){
var inst_18978 = (state_18980[(2)]);
var state_18980__$1 = state_18980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18980__$1,inst_18978);
} else {
if((state_val_18981 === (4))){
var inst_18970 = (state_18980[(2)]);
var inst_18971 = async.call(null,inst_18970);
var state_18980__$1 = state_18980;
if(cljs.core.truth_(inst_18971)){
var statearr_18983_19120 = state_18980__$1;
(statearr_18983_19120[(1)] = (5));

} else {
var statearr_18984_19121 = state_18980__$1;
(statearr_18984_19121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (5))){
var state_18980__$1 = state_18980;
var statearr_18985_19122 = state_18980__$1;
(statearr_18985_19122[(2)] = null);

(statearr_18985_19122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (6))){
var state_18980__$1 = state_18980;
var statearr_18986_19123 = state_18980__$1;
(statearr_18986_19123[(2)] = null);

(statearr_18986_19123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (7))){
var inst_18976 = (state_18980[(2)]);
var state_18980__$1 = state_18980;
var statearr_18987_19124 = state_18980__$1;
(statearr_18987_19124[(2)] = inst_18976);

(statearr_18987_19124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19104,c__18757__auto___19118,G__18942_19105,G__18942_19106__$1,n__4395__auto___19103,jobs,results,process,async))
;
return ((function (__19104,switch__18683__auto__,c__18757__auto___19118,G__18942_19105,G__18942_19106__$1,n__4395__auto___19103,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0 = (function (){
var statearr_18988 = [null,null,null,null,null,null,null];
(statearr_18988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__);

(statearr_18988[(1)] = (1));

return statearr_18988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1 = (function (state_18980){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_18980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e18989){var ex__18687__auto__ = e18989;
var statearr_18990_19125 = state_18980;
(statearr_18990_19125[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_18980[(4)]))){
var statearr_18991_19126 = state_18980;
(statearr_18991_19126[(1)] = cljs.core.first.call(null,(state_18980[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19127 = state_18980;
state_18980 = G__19127;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__ = function(state_18980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1.call(this,state_18980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__;
})()
;})(__19104,switch__18683__auto__,c__18757__auto___19118,G__18942_19105,G__18942_19106__$1,n__4395__auto___19103,jobs,results,process,async))
})();
var state__18759__auto__ = (function (){var statearr_18992 = f__18758__auto__.call(null);
(statearr_18992[(6)] = c__18757__auto___19118);

return statearr_18992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(__19104,c__18757__auto___19118,G__18942_19105,G__18942_19106__$1,n__4395__auto___19103,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18942_19106__$1)].join('')));

}

var G__19128 = (__19104 + (1));
__19104 = G__19128;
continue;
} else {
}
break;
}

var c__18757__auto___19129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___19129,jobs,results,process,async){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___19129,jobs,results,process,async){
return (function (state_19014){
var state_val_19015 = (state_19014[(1)]);
if((state_val_19015 === (7))){
var inst_19010 = (state_19014[(2)]);
var state_19014__$1 = state_19014;
var statearr_19016_19130 = state_19014__$1;
(statearr_19016_19130[(2)] = inst_19010);

(statearr_19016_19130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (1))){
var state_19014__$1 = state_19014;
var statearr_19017_19131 = state_19014__$1;
(statearr_19017_19131[(2)] = null);

(statearr_19017_19131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (4))){
var inst_18995 = (state_19014[(7)]);
var inst_18995__$1 = (state_19014[(2)]);
var inst_18996 = (inst_18995__$1 == null);
var state_19014__$1 = (function (){var statearr_19018 = state_19014;
(statearr_19018[(7)] = inst_18995__$1);

return statearr_19018;
})();
if(cljs.core.truth_(inst_18996)){
var statearr_19019_19132 = state_19014__$1;
(statearr_19019_19132[(1)] = (5));

} else {
var statearr_19020_19133 = state_19014__$1;
(statearr_19020_19133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (6))){
var inst_18995 = (state_19014[(7)]);
var inst_19000 = (state_19014[(8)]);
var inst_19000__$1 = cljs.core.async.chan.call(null,(1));
var inst_19001 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19002 = [inst_18995,inst_19000__$1];
var inst_19003 = (new cljs.core.PersistentVector(null,2,(5),inst_19001,inst_19002,null));
var state_19014__$1 = (function (){var statearr_19021 = state_19014;
(statearr_19021[(8)] = inst_19000__$1);

return statearr_19021;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19014__$1,(8),jobs,inst_19003);
} else {
if((state_val_19015 === (3))){
var inst_19012 = (state_19014[(2)]);
var state_19014__$1 = state_19014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19014__$1,inst_19012);
} else {
if((state_val_19015 === (2))){
var state_19014__$1 = state_19014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19014__$1,(4),from);
} else {
if((state_val_19015 === (9))){
var inst_19007 = (state_19014[(2)]);
var state_19014__$1 = (function (){var statearr_19022 = state_19014;
(statearr_19022[(9)] = inst_19007);

return statearr_19022;
})();
var statearr_19023_19134 = state_19014__$1;
(statearr_19023_19134[(2)] = null);

(statearr_19023_19134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (5))){
var inst_18998 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19014__$1 = state_19014;
var statearr_19024_19135 = state_19014__$1;
(statearr_19024_19135[(2)] = inst_18998);

(statearr_19024_19135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (8))){
var inst_19000 = (state_19014[(8)]);
var inst_19005 = (state_19014[(2)]);
var state_19014__$1 = (function (){var statearr_19025 = state_19014;
(statearr_19025[(10)] = inst_19005);

return statearr_19025;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19014__$1,(9),results,inst_19000);
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
});})(c__18757__auto___19129,jobs,results,process,async))
;
return ((function (switch__18683__auto__,c__18757__auto___19129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0 = (function (){
var statearr_19026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__);

(statearr_19026[(1)] = (1));

return statearr_19026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1 = (function (state_19014){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_19014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e19027){var ex__18687__auto__ = e19027;
var statearr_19028_19136 = state_19014;
(statearr_19028_19136[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_19014[(4)]))){
var statearr_19029_19137 = state_19014;
(statearr_19029_19137[(1)] = cljs.core.first.call(null,(state_19014[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19138 = state_19014;
state_19014 = G__19138;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__ = function(state_19014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1.call(this,state_19014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___19129,jobs,results,process,async))
})();
var state__18759__auto__ = (function (){var statearr_19030 = f__18758__auto__.call(null);
(statearr_19030[(6)] = c__18757__auto___19129);

return statearr_19030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___19129,jobs,results,process,async))
);


var c__18757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto__,jobs,results,process,async){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto__,jobs,results,process,async){
return (function (state_19068){
var state_val_19069 = (state_19068[(1)]);
if((state_val_19069 === (7))){
var inst_19064 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
var statearr_19070_19139 = state_19068__$1;
(statearr_19070_19139[(2)] = inst_19064);

(statearr_19070_19139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (20))){
var state_19068__$1 = state_19068;
var statearr_19071_19140 = state_19068__$1;
(statearr_19071_19140[(2)] = null);

(statearr_19071_19140[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (1))){
var state_19068__$1 = state_19068;
var statearr_19072_19141 = state_19068__$1;
(statearr_19072_19141[(2)] = null);

(statearr_19072_19141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (4))){
var inst_19033 = (state_19068[(7)]);
var inst_19033__$1 = (state_19068[(2)]);
var inst_19034 = (inst_19033__$1 == null);
var state_19068__$1 = (function (){var statearr_19073 = state_19068;
(statearr_19073[(7)] = inst_19033__$1);

return statearr_19073;
})();
if(cljs.core.truth_(inst_19034)){
var statearr_19074_19142 = state_19068__$1;
(statearr_19074_19142[(1)] = (5));

} else {
var statearr_19075_19143 = state_19068__$1;
(statearr_19075_19143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (15))){
var inst_19046 = (state_19068[(8)]);
var state_19068__$1 = state_19068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19068__$1,(18),to,inst_19046);
} else {
if((state_val_19069 === (21))){
var inst_19059 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
var statearr_19076_19144 = state_19068__$1;
(statearr_19076_19144[(2)] = inst_19059);

(statearr_19076_19144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (13))){
var inst_19061 = (state_19068[(2)]);
var state_19068__$1 = (function (){var statearr_19077 = state_19068;
(statearr_19077[(9)] = inst_19061);

return statearr_19077;
})();
var statearr_19078_19145 = state_19068__$1;
(statearr_19078_19145[(2)] = null);

(statearr_19078_19145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (6))){
var inst_19033 = (state_19068[(7)]);
var state_19068__$1 = state_19068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19068__$1,(11),inst_19033);
} else {
if((state_val_19069 === (17))){
var inst_19054 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
if(cljs.core.truth_(inst_19054)){
var statearr_19079_19146 = state_19068__$1;
(statearr_19079_19146[(1)] = (19));

} else {
var statearr_19080_19147 = state_19068__$1;
(statearr_19080_19147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (3))){
var inst_19066 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19068__$1,inst_19066);
} else {
if((state_val_19069 === (12))){
var inst_19043 = (state_19068[(10)]);
var state_19068__$1 = state_19068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19068__$1,(14),inst_19043);
} else {
if((state_val_19069 === (2))){
var state_19068__$1 = state_19068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19068__$1,(4),results);
} else {
if((state_val_19069 === (19))){
var state_19068__$1 = state_19068;
var statearr_19081_19148 = state_19068__$1;
(statearr_19081_19148[(2)] = null);

(statearr_19081_19148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (11))){
var inst_19043 = (state_19068[(2)]);
var state_19068__$1 = (function (){var statearr_19082 = state_19068;
(statearr_19082[(10)] = inst_19043);

return statearr_19082;
})();
var statearr_19083_19149 = state_19068__$1;
(statearr_19083_19149[(2)] = null);

(statearr_19083_19149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (9))){
var state_19068__$1 = state_19068;
var statearr_19084_19150 = state_19068__$1;
(statearr_19084_19150[(2)] = null);

(statearr_19084_19150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (5))){
var state_19068__$1 = state_19068;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19085_19151 = state_19068__$1;
(statearr_19085_19151[(1)] = (8));

} else {
var statearr_19086_19152 = state_19068__$1;
(statearr_19086_19152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (14))){
var inst_19046 = (state_19068[(8)]);
var inst_19048 = (state_19068[(11)]);
var inst_19046__$1 = (state_19068[(2)]);
var inst_19047 = (inst_19046__$1 == null);
var inst_19048__$1 = cljs.core.not.call(null,inst_19047);
var state_19068__$1 = (function (){var statearr_19087 = state_19068;
(statearr_19087[(8)] = inst_19046__$1);

(statearr_19087[(11)] = inst_19048__$1);

return statearr_19087;
})();
if(inst_19048__$1){
var statearr_19088_19153 = state_19068__$1;
(statearr_19088_19153[(1)] = (15));

} else {
var statearr_19089_19154 = state_19068__$1;
(statearr_19089_19154[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (16))){
var inst_19048 = (state_19068[(11)]);
var state_19068__$1 = state_19068;
var statearr_19090_19155 = state_19068__$1;
(statearr_19090_19155[(2)] = inst_19048);

(statearr_19090_19155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (10))){
var inst_19040 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
var statearr_19091_19156 = state_19068__$1;
(statearr_19091_19156[(2)] = inst_19040);

(statearr_19091_19156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (18))){
var inst_19051 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
var statearr_19092_19157 = state_19068__$1;
(statearr_19092_19157[(2)] = inst_19051);

(statearr_19092_19157[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (8))){
var inst_19037 = cljs.core.async.close_BANG_.call(null,to);
var state_19068__$1 = state_19068;
var statearr_19093_19158 = state_19068__$1;
(statearr_19093_19158[(2)] = inst_19037);

(statearr_19093_19158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto__,jobs,results,process,async))
;
return ((function (switch__18683__auto__,c__18757__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0 = (function (){
var statearr_19094 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__);

(statearr_19094[(1)] = (1));

return statearr_19094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1 = (function (state_19068){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_19068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e19095){var ex__18687__auto__ = e19095;
var statearr_19096_19159 = state_19068;
(statearr_19096_19159[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_19068[(4)]))){
var statearr_19097_19160 = state_19068;
(statearr_19097_19160[(1)] = cljs.core.first.call(null,(state_19068[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19161 = state_19068;
state_19068 = G__19161;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__ = function(state_19068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1.call(this,state_19068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18684__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto__,jobs,results,process,async))
})();
var state__18759__auto__ = (function (){var statearr_19098 = f__18758__auto__.call(null);
(statearr_19098[(6)] = c__18757__auto__);

return statearr_19098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto__,jobs,results,process,async))
);

return c__18757__auto__;
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
var G__19163 = arguments.length;
switch (G__19163) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__19166 = arguments.length;
switch (G__19166) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__19169 = arguments.length;
switch (G__19169) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18757__auto___19219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___19219,tc,fc){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___19219,tc,fc){
return (function (state_19195){
var state_val_19196 = (state_19195[(1)]);
if((state_val_19196 === (7))){
var inst_19191 = (state_19195[(2)]);
var state_19195__$1 = state_19195;
var statearr_19197_19220 = state_19195__$1;
(statearr_19197_19220[(2)] = inst_19191);

(statearr_19197_19220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (1))){
var state_19195__$1 = state_19195;
var statearr_19198_19221 = state_19195__$1;
(statearr_19198_19221[(2)] = null);

(statearr_19198_19221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (4))){
var inst_19172 = (state_19195[(7)]);
var inst_19172__$1 = (state_19195[(2)]);
var inst_19173 = (inst_19172__$1 == null);
var state_19195__$1 = (function (){var statearr_19199 = state_19195;
(statearr_19199[(7)] = inst_19172__$1);

return statearr_19199;
})();
if(cljs.core.truth_(inst_19173)){
var statearr_19200_19222 = state_19195__$1;
(statearr_19200_19222[(1)] = (5));

} else {
var statearr_19201_19223 = state_19195__$1;
(statearr_19201_19223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (13))){
var state_19195__$1 = state_19195;
var statearr_19202_19224 = state_19195__$1;
(statearr_19202_19224[(2)] = null);

(statearr_19202_19224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (6))){
var inst_19172 = (state_19195[(7)]);
var inst_19178 = p.call(null,inst_19172);
var state_19195__$1 = state_19195;
if(cljs.core.truth_(inst_19178)){
var statearr_19203_19225 = state_19195__$1;
(statearr_19203_19225[(1)] = (9));

} else {
var statearr_19204_19226 = state_19195__$1;
(statearr_19204_19226[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (3))){
var inst_19193 = (state_19195[(2)]);
var state_19195__$1 = state_19195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19195__$1,inst_19193);
} else {
if((state_val_19196 === (12))){
var state_19195__$1 = state_19195;
var statearr_19205_19227 = state_19195__$1;
(statearr_19205_19227[(2)] = null);

(statearr_19205_19227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (2))){
var state_19195__$1 = state_19195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19195__$1,(4),ch);
} else {
if((state_val_19196 === (11))){
var inst_19172 = (state_19195[(7)]);
var inst_19182 = (state_19195[(2)]);
var state_19195__$1 = state_19195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19195__$1,(8),inst_19182,inst_19172);
} else {
if((state_val_19196 === (9))){
var state_19195__$1 = state_19195;
var statearr_19206_19228 = state_19195__$1;
(statearr_19206_19228[(2)] = tc);

(statearr_19206_19228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (5))){
var inst_19175 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19176 = cljs.core.async.close_BANG_.call(null,fc);
var state_19195__$1 = (function (){var statearr_19207 = state_19195;
(statearr_19207[(8)] = inst_19175);

return statearr_19207;
})();
var statearr_19208_19229 = state_19195__$1;
(statearr_19208_19229[(2)] = inst_19176);

(statearr_19208_19229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (14))){
var inst_19189 = (state_19195[(2)]);
var state_19195__$1 = state_19195;
var statearr_19209_19230 = state_19195__$1;
(statearr_19209_19230[(2)] = inst_19189);

(statearr_19209_19230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (10))){
var state_19195__$1 = state_19195;
var statearr_19210_19231 = state_19195__$1;
(statearr_19210_19231[(2)] = fc);

(statearr_19210_19231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19196 === (8))){
var inst_19184 = (state_19195[(2)]);
var state_19195__$1 = state_19195;
if(cljs.core.truth_(inst_19184)){
var statearr_19211_19232 = state_19195__$1;
(statearr_19211_19232[(1)] = (12));

} else {
var statearr_19212_19233 = state_19195__$1;
(statearr_19212_19233[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto___19219,tc,fc))
;
return ((function (switch__18683__auto__,c__18757__auto___19219,tc,fc){
return (function() {
var cljs$core$async$state_machine__18684__auto__ = null;
var cljs$core$async$state_machine__18684__auto____0 = (function (){
var statearr_19213 = [null,null,null,null,null,null,null,null,null];
(statearr_19213[(0)] = cljs$core$async$state_machine__18684__auto__);

(statearr_19213[(1)] = (1));

return statearr_19213;
});
var cljs$core$async$state_machine__18684__auto____1 = (function (state_19195){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_19195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e19214){var ex__18687__auto__ = e19214;
var statearr_19215_19234 = state_19195;
(statearr_19215_19234[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_19195[(4)]))){
var statearr_19216_19235 = state_19195;
(statearr_19216_19235[(1)] = cljs.core.first.call(null,(state_19195[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19236 = state_19195;
state_19195 = G__19236;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$state_machine__18684__auto__ = function(state_19195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18684__auto____1.call(this,state_19195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18684__auto____0;
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18684__auto____1;
return cljs$core$async$state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___19219,tc,fc))
})();
var state__18759__auto__ = (function (){var statearr_19217 = f__18758__auto__.call(null);
(statearr_19217[(6)] = c__18757__auto___19219);

return statearr_19217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___19219,tc,fc))
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
var c__18757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto__){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto__){
return (function (state_19258){
var state_val_19259 = (state_19258[(1)]);
if((state_val_19259 === (7))){
var inst_19254 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19260_19279 = state_19258__$1;
(statearr_19260_19279[(2)] = inst_19254);

(statearr_19260_19279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (1))){
var inst_19237 = init;
var inst_19238 = inst_19237;
var state_19258__$1 = (function (){var statearr_19261 = state_19258;
(statearr_19261[(7)] = inst_19238);

return statearr_19261;
})();
var statearr_19262_19280 = state_19258__$1;
(statearr_19262_19280[(2)] = null);

(statearr_19262_19280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (4))){
var inst_19241 = (state_19258[(8)]);
var inst_19241__$1 = (state_19258[(2)]);
var inst_19242 = (inst_19241__$1 == null);
var state_19258__$1 = (function (){var statearr_19263 = state_19258;
(statearr_19263[(8)] = inst_19241__$1);

return statearr_19263;
})();
if(cljs.core.truth_(inst_19242)){
var statearr_19264_19281 = state_19258__$1;
(statearr_19264_19281[(1)] = (5));

} else {
var statearr_19265_19282 = state_19258__$1;
(statearr_19265_19282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (6))){
var inst_19238 = (state_19258[(7)]);
var inst_19241 = (state_19258[(8)]);
var inst_19245 = (state_19258[(9)]);
var inst_19245__$1 = f.call(null,inst_19238,inst_19241);
var inst_19246 = cljs.core.reduced_QMARK_.call(null,inst_19245__$1);
var state_19258__$1 = (function (){var statearr_19266 = state_19258;
(statearr_19266[(9)] = inst_19245__$1);

return statearr_19266;
})();
if(inst_19246){
var statearr_19267_19283 = state_19258__$1;
(statearr_19267_19283[(1)] = (8));

} else {
var statearr_19268_19284 = state_19258__$1;
(statearr_19268_19284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (3))){
var inst_19256 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19258__$1,inst_19256);
} else {
if((state_val_19259 === (2))){
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19258__$1,(4),ch);
} else {
if((state_val_19259 === (9))){
var inst_19245 = (state_19258[(9)]);
var inst_19238 = inst_19245;
var state_19258__$1 = (function (){var statearr_19269 = state_19258;
(statearr_19269[(7)] = inst_19238);

return statearr_19269;
})();
var statearr_19270_19285 = state_19258__$1;
(statearr_19270_19285[(2)] = null);

(statearr_19270_19285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (5))){
var inst_19238 = (state_19258[(7)]);
var state_19258__$1 = state_19258;
var statearr_19271_19286 = state_19258__$1;
(statearr_19271_19286[(2)] = inst_19238);

(statearr_19271_19286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (10))){
var inst_19252 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19272_19287 = state_19258__$1;
(statearr_19272_19287[(2)] = inst_19252);

(statearr_19272_19287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (8))){
var inst_19245 = (state_19258[(9)]);
var inst_19248 = cljs.core.deref.call(null,inst_19245);
var state_19258__$1 = state_19258;
var statearr_19273_19288 = state_19258__$1;
(statearr_19273_19288[(2)] = inst_19248);

(statearr_19273_19288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto__))
;
return ((function (switch__18683__auto__,c__18757__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18684__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18684__auto____0 = (function (){
var statearr_19274 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19274[(0)] = cljs$core$async$reduce_$_state_machine__18684__auto__);

(statearr_19274[(1)] = (1));

return statearr_19274;
});
var cljs$core$async$reduce_$_state_machine__18684__auto____1 = (function (state_19258){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_19258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e19275){var ex__18687__auto__ = e19275;
var statearr_19276_19289 = state_19258;
(statearr_19276_19289[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_19258[(4)]))){
var statearr_19277_19290 = state_19258;
(statearr_19277_19290[(1)] = cljs.core.first.call(null,(state_19258[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19291 = state_19258;
state_19258 = G__19291;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18684__auto__ = function(state_19258){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18684__auto____1.call(this,state_19258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18684__auto____0;
cljs$core$async$reduce_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18684__auto____1;
return cljs$core$async$reduce_$_state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto__))
})();
var state__18759__auto__ = (function (){var statearr_19278 = f__18758__auto__.call(null);
(statearr_19278[(6)] = c__18757__auto__);

return statearr_19278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto__))
);

return c__18757__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__18757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto__,f__$1){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto__,f__$1){
return (function (state_19297){
var state_val_19298 = (state_19297[(1)]);
if((state_val_19298 === (1))){
var inst_19292 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19297__$1 = state_19297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19297__$1,(2),inst_19292);
} else {
if((state_val_19298 === (2))){
var inst_19294 = (state_19297[(2)]);
var inst_19295 = f__$1.call(null,inst_19294);
var state_19297__$1 = state_19297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19297__$1,inst_19295);
} else {
return null;
}
}
});})(c__18757__auto__,f__$1))
;
return ((function (switch__18683__auto__,c__18757__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__18684__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18684__auto____0 = (function (){
var statearr_19299 = [null,null,null,null,null,null,null];
(statearr_19299[(0)] = cljs$core$async$transduce_$_state_machine__18684__auto__);

(statearr_19299[(1)] = (1));

return statearr_19299;
});
var cljs$core$async$transduce_$_state_machine__18684__auto____1 = (function (state_19297){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_19297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e19300){var ex__18687__auto__ = e19300;
var statearr_19301_19304 = state_19297;
(statearr_19301_19304[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_19297[(4)]))){
var statearr_19302_19305 = state_19297;
(statearr_19302_19305[(1)] = cljs.core.first.call(null,(state_19297[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19306 = state_19297;
state_19297 = G__19306;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18684__auto__ = function(state_19297){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18684__auto____1.call(this,state_19297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18684__auto____0;
cljs$core$async$transduce_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18684__auto____1;
return cljs$core$async$transduce_$_state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto__,f__$1))
})();
var state__18759__auto__ = (function (){var statearr_19303 = f__18758__auto__.call(null);
(statearr_19303[(6)] = c__18757__auto__);

return statearr_19303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto__,f__$1))
);

return c__18757__auto__;
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
var G__19308 = arguments.length;
switch (G__19308) {
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
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto__){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto__){
return (function (state_19333){
var state_val_19334 = (state_19333[(1)]);
if((state_val_19334 === (7))){
var inst_19315 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
var statearr_19335_19357 = state_19333__$1;
(statearr_19335_19357[(2)] = inst_19315);

(statearr_19335_19357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (1))){
var inst_19309 = cljs.core.seq.call(null,coll);
var inst_19310 = inst_19309;
var state_19333__$1 = (function (){var statearr_19336 = state_19333;
(statearr_19336[(7)] = inst_19310);

return statearr_19336;
})();
var statearr_19337_19358 = state_19333__$1;
(statearr_19337_19358[(2)] = null);

(statearr_19337_19358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (4))){
var inst_19310 = (state_19333[(7)]);
var inst_19313 = cljs.core.first.call(null,inst_19310);
var state_19333__$1 = state_19333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19333__$1,(7),ch,inst_19313);
} else {
if((state_val_19334 === (13))){
var inst_19327 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
var statearr_19338_19359 = state_19333__$1;
(statearr_19338_19359[(2)] = inst_19327);

(statearr_19338_19359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (6))){
var inst_19318 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
if(cljs.core.truth_(inst_19318)){
var statearr_19339_19360 = state_19333__$1;
(statearr_19339_19360[(1)] = (8));

} else {
var statearr_19340_19361 = state_19333__$1;
(statearr_19340_19361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (3))){
var inst_19331 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19333__$1,inst_19331);
} else {
if((state_val_19334 === (12))){
var state_19333__$1 = state_19333;
var statearr_19341_19362 = state_19333__$1;
(statearr_19341_19362[(2)] = null);

(statearr_19341_19362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (2))){
var inst_19310 = (state_19333[(7)]);
var state_19333__$1 = state_19333;
if(cljs.core.truth_(inst_19310)){
var statearr_19342_19363 = state_19333__$1;
(statearr_19342_19363[(1)] = (4));

} else {
var statearr_19343_19364 = state_19333__$1;
(statearr_19343_19364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (11))){
var inst_19324 = cljs.core.async.close_BANG_.call(null,ch);
var state_19333__$1 = state_19333;
var statearr_19344_19365 = state_19333__$1;
(statearr_19344_19365[(2)] = inst_19324);

(statearr_19344_19365[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (9))){
var state_19333__$1 = state_19333;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19345_19366 = state_19333__$1;
(statearr_19345_19366[(1)] = (11));

} else {
var statearr_19346_19367 = state_19333__$1;
(statearr_19346_19367[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (5))){
var inst_19310 = (state_19333[(7)]);
var state_19333__$1 = state_19333;
var statearr_19347_19368 = state_19333__$1;
(statearr_19347_19368[(2)] = inst_19310);

(statearr_19347_19368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (10))){
var inst_19329 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
var statearr_19348_19369 = state_19333__$1;
(statearr_19348_19369[(2)] = inst_19329);

(statearr_19348_19369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (8))){
var inst_19310 = (state_19333[(7)]);
var inst_19320 = cljs.core.next.call(null,inst_19310);
var inst_19310__$1 = inst_19320;
var state_19333__$1 = (function (){var statearr_19349 = state_19333;
(statearr_19349[(7)] = inst_19310__$1);

return statearr_19349;
})();
var statearr_19350_19370 = state_19333__$1;
(statearr_19350_19370[(2)] = null);

(statearr_19350_19370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto__))
;
return ((function (switch__18683__auto__,c__18757__auto__){
return (function() {
var cljs$core$async$state_machine__18684__auto__ = null;
var cljs$core$async$state_machine__18684__auto____0 = (function (){
var statearr_19351 = [null,null,null,null,null,null,null,null];
(statearr_19351[(0)] = cljs$core$async$state_machine__18684__auto__);

(statearr_19351[(1)] = (1));

return statearr_19351;
});
var cljs$core$async$state_machine__18684__auto____1 = (function (state_19333){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_19333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e19352){var ex__18687__auto__ = e19352;
var statearr_19353_19371 = state_19333;
(statearr_19353_19371[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_19333[(4)]))){
var statearr_19354_19372 = state_19333;
(statearr_19354_19372[(1)] = cljs.core.first.call(null,(state_19333[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19373 = state_19333;
state_19333 = G__19373;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$state_machine__18684__auto__ = function(state_19333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18684__auto____1.call(this,state_19333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18684__auto____0;
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18684__auto____1;
return cljs$core$async$state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto__))
})();
var state__18759__auto__ = (function (){var statearr_19355 = f__18758__auto__.call(null);
(statearr_19355[(6)] = c__18757__auto__);

return statearr_19355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto__))
);

return c__18757__auto__;
});

cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19375 = arguments.length;
switch (G__19375) {
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
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
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
return m__4231__auto__.call(null,_);
} else {
var m__4231__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
return m__4231__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4231__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return m__4231__auto__.call(null,m,ch);
} else {
var m__4231__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return m__4231__auto__.call(null,m);
} else {
var m__4231__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19377 = (function (ch,cs,meta19378){
this.ch = ch;
this.cs = cs;
this.meta19378 = meta19378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19379,meta19378__$1){
var self__ = this;
var _19379__$1 = this;
return (new cljs.core.async.t_cljs$core$async19377(self__.ch,self__.cs,meta19378__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19379){
var self__ = this;
var _19379__$1 = this;
return self__.meta19378;
});})(cs))
;

cljs.core.async.t_cljs$core$async19377.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19377.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19377.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19377.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19377.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19377.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19378","meta19378",-1114663998,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19377";

cljs.core.async.t_cljs$core$async19377.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async19377");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19377.
 */
cljs.core.async.__GT_t_cljs$core$async19377 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19377(ch__$1,cs__$1,meta19378){
return (new cljs.core.async.t_cljs$core$async19377(ch__$1,cs__$1,meta19378));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19377(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18757__auto___19596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___19596,cs,m,dchan,dctr,done){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___19596,cs,m,dchan,dctr,done){
return (function (state_19512){
var state_val_19513 = (state_19512[(1)]);
if((state_val_19513 === (7))){
var inst_19508 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19514_19597 = state_19512__$1;
(statearr_19514_19597[(2)] = inst_19508);

(statearr_19514_19597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (20))){
var inst_19413 = (state_19512[(7)]);
var inst_19425 = cljs.core.first.call(null,inst_19413);
var inst_19426 = cljs.core.nth.call(null,inst_19425,(0),null);
var inst_19427 = cljs.core.nth.call(null,inst_19425,(1),null);
var state_19512__$1 = (function (){var statearr_19515 = state_19512;
(statearr_19515[(8)] = inst_19426);

return statearr_19515;
})();
if(cljs.core.truth_(inst_19427)){
var statearr_19516_19598 = state_19512__$1;
(statearr_19516_19598[(1)] = (22));

} else {
var statearr_19517_19599 = state_19512__$1;
(statearr_19517_19599[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (27))){
var inst_19457 = (state_19512[(9)]);
var inst_19455 = (state_19512[(10)]);
var inst_19382 = (state_19512[(11)]);
var inst_19462 = (state_19512[(12)]);
var inst_19462__$1 = cljs.core._nth.call(null,inst_19455,inst_19457);
var inst_19463 = cljs.core.async.put_BANG_.call(null,inst_19462__$1,inst_19382,done);
var state_19512__$1 = (function (){var statearr_19518 = state_19512;
(statearr_19518[(12)] = inst_19462__$1);

return statearr_19518;
})();
if(cljs.core.truth_(inst_19463)){
var statearr_19519_19600 = state_19512__$1;
(statearr_19519_19600[(1)] = (30));

} else {
var statearr_19520_19601 = state_19512__$1;
(statearr_19520_19601[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (1))){
var state_19512__$1 = state_19512;
var statearr_19521_19602 = state_19512__$1;
(statearr_19521_19602[(2)] = null);

(statearr_19521_19602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (24))){
var inst_19413 = (state_19512[(7)]);
var inst_19432 = (state_19512[(2)]);
var inst_19433 = cljs.core.next.call(null,inst_19413);
var inst_19391 = inst_19433;
var inst_19392 = null;
var inst_19393 = (0);
var inst_19394 = (0);
var state_19512__$1 = (function (){var statearr_19522 = state_19512;
(statearr_19522[(13)] = inst_19392);

(statearr_19522[(14)] = inst_19391);

(statearr_19522[(15)] = inst_19432);

(statearr_19522[(16)] = inst_19394);

(statearr_19522[(17)] = inst_19393);

return statearr_19522;
})();
var statearr_19523_19603 = state_19512__$1;
(statearr_19523_19603[(2)] = null);

(statearr_19523_19603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (39))){
var state_19512__$1 = state_19512;
var statearr_19527_19604 = state_19512__$1;
(statearr_19527_19604[(2)] = null);

(statearr_19527_19604[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (4))){
var inst_19382 = (state_19512[(11)]);
var inst_19382__$1 = (state_19512[(2)]);
var inst_19383 = (inst_19382__$1 == null);
var state_19512__$1 = (function (){var statearr_19528 = state_19512;
(statearr_19528[(11)] = inst_19382__$1);

return statearr_19528;
})();
if(cljs.core.truth_(inst_19383)){
var statearr_19529_19605 = state_19512__$1;
(statearr_19529_19605[(1)] = (5));

} else {
var statearr_19530_19606 = state_19512__$1;
(statearr_19530_19606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (15))){
var inst_19392 = (state_19512[(13)]);
var inst_19391 = (state_19512[(14)]);
var inst_19394 = (state_19512[(16)]);
var inst_19393 = (state_19512[(17)]);
var inst_19409 = (state_19512[(2)]);
var inst_19410 = (inst_19394 + (1));
var tmp19524 = inst_19392;
var tmp19525 = inst_19391;
var tmp19526 = inst_19393;
var inst_19391__$1 = tmp19525;
var inst_19392__$1 = tmp19524;
var inst_19393__$1 = tmp19526;
var inst_19394__$1 = inst_19410;
var state_19512__$1 = (function (){var statearr_19531 = state_19512;
(statearr_19531[(18)] = inst_19409);

(statearr_19531[(13)] = inst_19392__$1);

(statearr_19531[(14)] = inst_19391__$1);

(statearr_19531[(16)] = inst_19394__$1);

(statearr_19531[(17)] = inst_19393__$1);

return statearr_19531;
})();
var statearr_19532_19607 = state_19512__$1;
(statearr_19532_19607[(2)] = null);

(statearr_19532_19607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (21))){
var inst_19436 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19536_19608 = state_19512__$1;
(statearr_19536_19608[(2)] = inst_19436);

(statearr_19536_19608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (31))){
var inst_19462 = (state_19512[(12)]);
var inst_19466 = cljs.core.async.untap_STAR_.call(null,m,inst_19462);
var state_19512__$1 = state_19512;
var statearr_19537_19609 = state_19512__$1;
(statearr_19537_19609[(2)] = inst_19466);

(statearr_19537_19609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (32))){
var inst_19454 = (state_19512[(19)]);
var inst_19456 = (state_19512[(20)]);
var inst_19457 = (state_19512[(9)]);
var inst_19455 = (state_19512[(10)]);
var inst_19468 = (state_19512[(2)]);
var inst_19469 = (inst_19457 + (1));
var tmp19533 = inst_19454;
var tmp19534 = inst_19456;
var tmp19535 = inst_19455;
var inst_19454__$1 = tmp19533;
var inst_19455__$1 = tmp19535;
var inst_19456__$1 = tmp19534;
var inst_19457__$1 = inst_19469;
var state_19512__$1 = (function (){var statearr_19538 = state_19512;
(statearr_19538[(19)] = inst_19454__$1);

(statearr_19538[(21)] = inst_19468);

(statearr_19538[(20)] = inst_19456__$1);

(statearr_19538[(9)] = inst_19457__$1);

(statearr_19538[(10)] = inst_19455__$1);

return statearr_19538;
})();
var statearr_19539_19610 = state_19512__$1;
(statearr_19539_19610[(2)] = null);

(statearr_19539_19610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (40))){
var inst_19481 = (state_19512[(22)]);
var inst_19485 = cljs.core.async.untap_STAR_.call(null,m,inst_19481);
var state_19512__$1 = state_19512;
var statearr_19540_19611 = state_19512__$1;
(statearr_19540_19611[(2)] = inst_19485);

(statearr_19540_19611[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (33))){
var inst_19472 = (state_19512[(23)]);
var inst_19474 = cljs.core.chunked_seq_QMARK_.call(null,inst_19472);
var state_19512__$1 = state_19512;
if(inst_19474){
var statearr_19541_19612 = state_19512__$1;
(statearr_19541_19612[(1)] = (36));

} else {
var statearr_19542_19613 = state_19512__$1;
(statearr_19542_19613[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (13))){
var inst_19403 = (state_19512[(24)]);
var inst_19406 = cljs.core.async.close_BANG_.call(null,inst_19403);
var state_19512__$1 = state_19512;
var statearr_19543_19614 = state_19512__$1;
(statearr_19543_19614[(2)] = inst_19406);

(statearr_19543_19614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (22))){
var inst_19426 = (state_19512[(8)]);
var inst_19429 = cljs.core.async.close_BANG_.call(null,inst_19426);
var state_19512__$1 = state_19512;
var statearr_19544_19615 = state_19512__$1;
(statearr_19544_19615[(2)] = inst_19429);

(statearr_19544_19615[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (36))){
var inst_19472 = (state_19512[(23)]);
var inst_19476 = cljs.core.chunk_first.call(null,inst_19472);
var inst_19477 = cljs.core.chunk_rest.call(null,inst_19472);
var inst_19478 = cljs.core.count.call(null,inst_19476);
var inst_19454 = inst_19477;
var inst_19455 = inst_19476;
var inst_19456 = inst_19478;
var inst_19457 = (0);
var state_19512__$1 = (function (){var statearr_19545 = state_19512;
(statearr_19545[(19)] = inst_19454);

(statearr_19545[(20)] = inst_19456);

(statearr_19545[(9)] = inst_19457);

(statearr_19545[(10)] = inst_19455);

return statearr_19545;
})();
var statearr_19546_19616 = state_19512__$1;
(statearr_19546_19616[(2)] = null);

(statearr_19546_19616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (41))){
var inst_19472 = (state_19512[(23)]);
var inst_19487 = (state_19512[(2)]);
var inst_19488 = cljs.core.next.call(null,inst_19472);
var inst_19454 = inst_19488;
var inst_19455 = null;
var inst_19456 = (0);
var inst_19457 = (0);
var state_19512__$1 = (function (){var statearr_19547 = state_19512;
(statearr_19547[(19)] = inst_19454);

(statearr_19547[(20)] = inst_19456);

(statearr_19547[(9)] = inst_19457);

(statearr_19547[(10)] = inst_19455);

(statearr_19547[(25)] = inst_19487);

return statearr_19547;
})();
var statearr_19548_19617 = state_19512__$1;
(statearr_19548_19617[(2)] = null);

(statearr_19548_19617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (43))){
var state_19512__$1 = state_19512;
var statearr_19549_19618 = state_19512__$1;
(statearr_19549_19618[(2)] = null);

(statearr_19549_19618[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (29))){
var inst_19496 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19550_19619 = state_19512__$1;
(statearr_19550_19619[(2)] = inst_19496);

(statearr_19550_19619[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (44))){
var inst_19505 = (state_19512[(2)]);
var state_19512__$1 = (function (){var statearr_19551 = state_19512;
(statearr_19551[(26)] = inst_19505);

return statearr_19551;
})();
var statearr_19552_19620 = state_19512__$1;
(statearr_19552_19620[(2)] = null);

(statearr_19552_19620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (6))){
var inst_19446 = (state_19512[(27)]);
var inst_19445 = cljs.core.deref.call(null,cs);
var inst_19446__$1 = cljs.core.keys.call(null,inst_19445);
var inst_19447 = cljs.core.count.call(null,inst_19446__$1);
var inst_19448 = cljs.core.reset_BANG_.call(null,dctr,inst_19447);
var inst_19453 = cljs.core.seq.call(null,inst_19446__$1);
var inst_19454 = inst_19453;
var inst_19455 = null;
var inst_19456 = (0);
var inst_19457 = (0);
var state_19512__$1 = (function (){var statearr_19553 = state_19512;
(statearr_19553[(27)] = inst_19446__$1);

(statearr_19553[(19)] = inst_19454);

(statearr_19553[(20)] = inst_19456);

(statearr_19553[(9)] = inst_19457);

(statearr_19553[(10)] = inst_19455);

(statearr_19553[(28)] = inst_19448);

return statearr_19553;
})();
var statearr_19554_19621 = state_19512__$1;
(statearr_19554_19621[(2)] = null);

(statearr_19554_19621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (28))){
var inst_19454 = (state_19512[(19)]);
var inst_19472 = (state_19512[(23)]);
var inst_19472__$1 = cljs.core.seq.call(null,inst_19454);
var state_19512__$1 = (function (){var statearr_19555 = state_19512;
(statearr_19555[(23)] = inst_19472__$1);

return statearr_19555;
})();
if(inst_19472__$1){
var statearr_19556_19622 = state_19512__$1;
(statearr_19556_19622[(1)] = (33));

} else {
var statearr_19557_19623 = state_19512__$1;
(statearr_19557_19623[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (25))){
var inst_19456 = (state_19512[(20)]);
var inst_19457 = (state_19512[(9)]);
var inst_19459 = (inst_19457 < inst_19456);
var inst_19460 = inst_19459;
var state_19512__$1 = state_19512;
if(cljs.core.truth_(inst_19460)){
var statearr_19558_19624 = state_19512__$1;
(statearr_19558_19624[(1)] = (27));

} else {
var statearr_19559_19625 = state_19512__$1;
(statearr_19559_19625[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (34))){
var state_19512__$1 = state_19512;
var statearr_19560_19626 = state_19512__$1;
(statearr_19560_19626[(2)] = null);

(statearr_19560_19626[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (17))){
var state_19512__$1 = state_19512;
var statearr_19561_19627 = state_19512__$1;
(statearr_19561_19627[(2)] = null);

(statearr_19561_19627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (3))){
var inst_19510 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19512__$1,inst_19510);
} else {
if((state_val_19513 === (12))){
var inst_19441 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19562_19628 = state_19512__$1;
(statearr_19562_19628[(2)] = inst_19441);

(statearr_19562_19628[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (2))){
var state_19512__$1 = state_19512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19512__$1,(4),ch);
} else {
if((state_val_19513 === (23))){
var state_19512__$1 = state_19512;
var statearr_19563_19629 = state_19512__$1;
(statearr_19563_19629[(2)] = null);

(statearr_19563_19629[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (35))){
var inst_19494 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19564_19630 = state_19512__$1;
(statearr_19564_19630[(2)] = inst_19494);

(statearr_19564_19630[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (19))){
var inst_19413 = (state_19512[(7)]);
var inst_19417 = cljs.core.chunk_first.call(null,inst_19413);
var inst_19418 = cljs.core.chunk_rest.call(null,inst_19413);
var inst_19419 = cljs.core.count.call(null,inst_19417);
var inst_19391 = inst_19418;
var inst_19392 = inst_19417;
var inst_19393 = inst_19419;
var inst_19394 = (0);
var state_19512__$1 = (function (){var statearr_19565 = state_19512;
(statearr_19565[(13)] = inst_19392);

(statearr_19565[(14)] = inst_19391);

(statearr_19565[(16)] = inst_19394);

(statearr_19565[(17)] = inst_19393);

return statearr_19565;
})();
var statearr_19566_19631 = state_19512__$1;
(statearr_19566_19631[(2)] = null);

(statearr_19566_19631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (11))){
var inst_19391 = (state_19512[(14)]);
var inst_19413 = (state_19512[(7)]);
var inst_19413__$1 = cljs.core.seq.call(null,inst_19391);
var state_19512__$1 = (function (){var statearr_19567 = state_19512;
(statearr_19567[(7)] = inst_19413__$1);

return statearr_19567;
})();
if(inst_19413__$1){
var statearr_19568_19632 = state_19512__$1;
(statearr_19568_19632[(1)] = (16));

} else {
var statearr_19569_19633 = state_19512__$1;
(statearr_19569_19633[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (9))){
var inst_19443 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19570_19634 = state_19512__$1;
(statearr_19570_19634[(2)] = inst_19443);

(statearr_19570_19634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (5))){
var inst_19389 = cljs.core.deref.call(null,cs);
var inst_19390 = cljs.core.seq.call(null,inst_19389);
var inst_19391 = inst_19390;
var inst_19392 = null;
var inst_19393 = (0);
var inst_19394 = (0);
var state_19512__$1 = (function (){var statearr_19571 = state_19512;
(statearr_19571[(13)] = inst_19392);

(statearr_19571[(14)] = inst_19391);

(statearr_19571[(16)] = inst_19394);

(statearr_19571[(17)] = inst_19393);

return statearr_19571;
})();
var statearr_19572_19635 = state_19512__$1;
(statearr_19572_19635[(2)] = null);

(statearr_19572_19635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (14))){
var state_19512__$1 = state_19512;
var statearr_19573_19636 = state_19512__$1;
(statearr_19573_19636[(2)] = null);

(statearr_19573_19636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (45))){
var inst_19502 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19574_19637 = state_19512__$1;
(statearr_19574_19637[(2)] = inst_19502);

(statearr_19574_19637[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (26))){
var inst_19446 = (state_19512[(27)]);
var inst_19498 = (state_19512[(2)]);
var inst_19499 = cljs.core.seq.call(null,inst_19446);
var state_19512__$1 = (function (){var statearr_19575 = state_19512;
(statearr_19575[(29)] = inst_19498);

return statearr_19575;
})();
if(inst_19499){
var statearr_19576_19638 = state_19512__$1;
(statearr_19576_19638[(1)] = (42));

} else {
var statearr_19577_19639 = state_19512__$1;
(statearr_19577_19639[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (16))){
var inst_19413 = (state_19512[(7)]);
var inst_19415 = cljs.core.chunked_seq_QMARK_.call(null,inst_19413);
var state_19512__$1 = state_19512;
if(inst_19415){
var statearr_19578_19640 = state_19512__$1;
(statearr_19578_19640[(1)] = (19));

} else {
var statearr_19579_19641 = state_19512__$1;
(statearr_19579_19641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (38))){
var inst_19491 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19580_19642 = state_19512__$1;
(statearr_19580_19642[(2)] = inst_19491);

(statearr_19580_19642[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (30))){
var state_19512__$1 = state_19512;
var statearr_19581_19643 = state_19512__$1;
(statearr_19581_19643[(2)] = null);

(statearr_19581_19643[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (10))){
var inst_19392 = (state_19512[(13)]);
var inst_19394 = (state_19512[(16)]);
var inst_19402 = cljs.core._nth.call(null,inst_19392,inst_19394);
var inst_19403 = cljs.core.nth.call(null,inst_19402,(0),null);
var inst_19404 = cljs.core.nth.call(null,inst_19402,(1),null);
var state_19512__$1 = (function (){var statearr_19582 = state_19512;
(statearr_19582[(24)] = inst_19403);

return statearr_19582;
})();
if(cljs.core.truth_(inst_19404)){
var statearr_19583_19644 = state_19512__$1;
(statearr_19583_19644[(1)] = (13));

} else {
var statearr_19584_19645 = state_19512__$1;
(statearr_19584_19645[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (18))){
var inst_19439 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19585_19646 = state_19512__$1;
(statearr_19585_19646[(2)] = inst_19439);

(statearr_19585_19646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (42))){
var state_19512__$1 = state_19512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19512__$1,(45),dchan);
} else {
if((state_val_19513 === (37))){
var inst_19481 = (state_19512[(22)]);
var inst_19382 = (state_19512[(11)]);
var inst_19472 = (state_19512[(23)]);
var inst_19481__$1 = cljs.core.first.call(null,inst_19472);
var inst_19482 = cljs.core.async.put_BANG_.call(null,inst_19481__$1,inst_19382,done);
var state_19512__$1 = (function (){var statearr_19586 = state_19512;
(statearr_19586[(22)] = inst_19481__$1);

return statearr_19586;
})();
if(cljs.core.truth_(inst_19482)){
var statearr_19587_19647 = state_19512__$1;
(statearr_19587_19647[(1)] = (39));

} else {
var statearr_19588_19648 = state_19512__$1;
(statearr_19588_19648[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (8))){
var inst_19394 = (state_19512[(16)]);
var inst_19393 = (state_19512[(17)]);
var inst_19396 = (inst_19394 < inst_19393);
var inst_19397 = inst_19396;
var state_19512__$1 = state_19512;
if(cljs.core.truth_(inst_19397)){
var statearr_19589_19649 = state_19512__$1;
(statearr_19589_19649[(1)] = (10));

} else {
var statearr_19590_19650 = state_19512__$1;
(statearr_19590_19650[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto___19596,cs,m,dchan,dctr,done))
;
return ((function (switch__18683__auto__,c__18757__auto___19596,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18684__auto__ = null;
var cljs$core$async$mult_$_state_machine__18684__auto____0 = (function (){
var statearr_19591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19591[(0)] = cljs$core$async$mult_$_state_machine__18684__auto__);

(statearr_19591[(1)] = (1));

return statearr_19591;
});
var cljs$core$async$mult_$_state_machine__18684__auto____1 = (function (state_19512){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_19512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e19592){var ex__18687__auto__ = e19592;
var statearr_19593_19651 = state_19512;
(statearr_19593_19651[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_19512[(4)]))){
var statearr_19594_19652 = state_19512;
(statearr_19594_19652[(1)] = cljs.core.first.call(null,(state_19512[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19653 = state_19512;
state_19512 = G__19653;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18684__auto__ = function(state_19512){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18684__auto____1.call(this,state_19512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18684__auto____0;
cljs$core$async$mult_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18684__auto____1;
return cljs$core$async$mult_$_state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___19596,cs,m,dchan,dctr,done))
})();
var state__18759__auto__ = (function (){var statearr_19595 = f__18758__auto__.call(null);
(statearr_19595[(6)] = c__18757__auto___19596);

return statearr_19595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___19596,cs,m,dchan,dctr,done))
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
var G__19655 = arguments.length;
switch (G__19655) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
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
return m__4231__auto__.call(null,m,ch);
} else {
var m__4231__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return m__4231__auto__.call(null,m,ch);
} else {
var m__4231__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return m__4231__auto__.call(null,m);
} else {
var m__4231__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return m__4231__auto__.call(null,m,state_map);
} else {
var m__4231__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return m__4231__auto__.call(null,m,mode);
} else {
var m__4231__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4521__auto__ = [];
var len__4518__auto___19667 = arguments.length;
var i__4519__auto___19668 = (0);
while(true){
if((i__4519__auto___19668 < len__4518__auto___19667)){
args__4521__auto__.push((arguments[i__4519__auto___19668]));

var G__19669 = (i__4519__auto___19668 + (1));
i__4519__auto___19668 = G__19669;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((3) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4522__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19661){
var map__19662 = p__19661;
var map__19662__$1 = ((((!((map__19662 == null)))?(((((map__19662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19662):map__19662);
var opts = map__19662__$1;
var statearr_19664_19670 = state;
(statearr_19664_19670[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,((function (map__19662,map__19662__$1,opts){
return (function (val){
var statearr_19665_19671 = state;
(statearr_19665_19671[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19662,map__19662__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_19666_19672 = state;
(statearr_19666_19672[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19657){
var G__19658 = cljs.core.first.call(null,seq19657);
var seq19657__$1 = cljs.core.next.call(null,seq19657);
var G__19659 = cljs.core.first.call(null,seq19657__$1);
var seq19657__$2 = cljs.core.next.call(null,seq19657__$1);
var G__19660 = cljs.core.first.call(null,seq19657__$2);
var seq19657__$3 = cljs.core.next.call(null,seq19657__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19658,G__19659,G__19660,seq19657__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19673 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19673 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19674){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19674 = meta19674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19675,meta19674__$1){
var self__ = this;
var _19675__$1 = this;
return (new cljs.core.async.t_cljs$core$async19673(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19674__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19675){
var self__ = this;
var _19675__$1 = this;
return self__.meta19674;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19673.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19673.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19673.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19673.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19673.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19673.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19673.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19673.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19674","meta19674",-1148716973,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19673";

cljs.core.async.t_cljs$core$async19673.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async19673");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19673.
 */
cljs.core.async.__GT_t_cljs$core$async19673 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19673(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19674){
return (new cljs.core.async.t_cljs$core$async19673(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19674));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19673(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18757__auto___19838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___19838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___19838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19777){
var state_val_19778 = (state_19777[(1)]);
if((state_val_19778 === (7))){
var inst_19692 = (state_19777[(2)]);
var state_19777__$1 = state_19777;
var statearr_19779_19839 = state_19777__$1;
(statearr_19779_19839[(2)] = inst_19692);

(statearr_19779_19839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (20))){
var inst_19704 = (state_19777[(7)]);
var state_19777__$1 = state_19777;
var statearr_19780_19840 = state_19777__$1;
(statearr_19780_19840[(2)] = inst_19704);

(statearr_19780_19840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (27))){
var state_19777__$1 = state_19777;
var statearr_19781_19841 = state_19777__$1;
(statearr_19781_19841[(2)] = null);

(statearr_19781_19841[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (1))){
var inst_19679 = (state_19777[(8)]);
var inst_19679__$1 = calc_state.call(null);
var inst_19681 = (inst_19679__$1 == null);
var inst_19682 = cljs.core.not.call(null,inst_19681);
var state_19777__$1 = (function (){var statearr_19782 = state_19777;
(statearr_19782[(8)] = inst_19679__$1);

return statearr_19782;
})();
if(inst_19682){
var statearr_19783_19842 = state_19777__$1;
(statearr_19783_19842[(1)] = (2));

} else {
var statearr_19784_19843 = state_19777__$1;
(statearr_19784_19843[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (24))){
var inst_19728 = (state_19777[(9)]);
var inst_19737 = (state_19777[(10)]);
var inst_19751 = (state_19777[(11)]);
var inst_19751__$1 = inst_19728.call(null,inst_19737);
var state_19777__$1 = (function (){var statearr_19785 = state_19777;
(statearr_19785[(11)] = inst_19751__$1);

return statearr_19785;
})();
if(cljs.core.truth_(inst_19751__$1)){
var statearr_19786_19844 = state_19777__$1;
(statearr_19786_19844[(1)] = (29));

} else {
var statearr_19787_19845 = state_19777__$1;
(statearr_19787_19845[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (4))){
var inst_19695 = (state_19777[(2)]);
var state_19777__$1 = state_19777;
if(cljs.core.truth_(inst_19695)){
var statearr_19788_19846 = state_19777__$1;
(statearr_19788_19846[(1)] = (8));

} else {
var statearr_19789_19847 = state_19777__$1;
(statearr_19789_19847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (15))){
var inst_19722 = (state_19777[(2)]);
var state_19777__$1 = state_19777;
if(cljs.core.truth_(inst_19722)){
var statearr_19790_19848 = state_19777__$1;
(statearr_19790_19848[(1)] = (19));

} else {
var statearr_19791_19849 = state_19777__$1;
(statearr_19791_19849[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (21))){
var inst_19727 = (state_19777[(12)]);
var inst_19727__$1 = (state_19777[(2)]);
var inst_19728 = cljs.core.get.call(null,inst_19727__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19729 = cljs.core.get.call(null,inst_19727__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19730 = cljs.core.get.call(null,inst_19727__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19777__$1 = (function (){var statearr_19792 = state_19777;
(statearr_19792[(12)] = inst_19727__$1);

(statearr_19792[(9)] = inst_19728);

(statearr_19792[(13)] = inst_19729);

return statearr_19792;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19777__$1,(22),inst_19730);
} else {
if((state_val_19778 === (31))){
var inst_19759 = (state_19777[(2)]);
var state_19777__$1 = state_19777;
if(cljs.core.truth_(inst_19759)){
var statearr_19793_19850 = state_19777__$1;
(statearr_19793_19850[(1)] = (32));

} else {
var statearr_19794_19851 = state_19777__$1;
(statearr_19794_19851[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (32))){
var inst_19736 = (state_19777[(14)]);
var state_19777__$1 = state_19777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19777__$1,(35),out,inst_19736);
} else {
if((state_val_19778 === (33))){
var inst_19727 = (state_19777[(12)]);
var inst_19704 = inst_19727;
var state_19777__$1 = (function (){var statearr_19795 = state_19777;
(statearr_19795[(7)] = inst_19704);

return statearr_19795;
})();
var statearr_19796_19852 = state_19777__$1;
(statearr_19796_19852[(2)] = null);

(statearr_19796_19852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (13))){
var inst_19704 = (state_19777[(7)]);
var inst_19711 = inst_19704.cljs$lang$protocol_mask$partition0$;
var inst_19712 = (inst_19711 & (64));
var inst_19713 = inst_19704.cljs$core$ISeq$;
var inst_19714 = (cljs.core.PROTOCOL_SENTINEL === inst_19713);
var inst_19715 = ((inst_19712) || (inst_19714));
var state_19777__$1 = state_19777;
if(cljs.core.truth_(inst_19715)){
var statearr_19797_19853 = state_19777__$1;
(statearr_19797_19853[(1)] = (16));

} else {
var statearr_19798_19854 = state_19777__$1;
(statearr_19798_19854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (22))){
var inst_19737 = (state_19777[(10)]);
var inst_19736 = (state_19777[(14)]);
var inst_19735 = (state_19777[(2)]);
var inst_19736__$1 = cljs.core.nth.call(null,inst_19735,(0),null);
var inst_19737__$1 = cljs.core.nth.call(null,inst_19735,(1),null);
var inst_19738 = (inst_19736__$1 == null);
var inst_19739 = cljs.core._EQ_.call(null,inst_19737__$1,change);
var inst_19740 = ((inst_19738) || (inst_19739));
var state_19777__$1 = (function (){var statearr_19799 = state_19777;
(statearr_19799[(10)] = inst_19737__$1);

(statearr_19799[(14)] = inst_19736__$1);

return statearr_19799;
})();
if(cljs.core.truth_(inst_19740)){
var statearr_19800_19855 = state_19777__$1;
(statearr_19800_19855[(1)] = (23));

} else {
var statearr_19801_19856 = state_19777__$1;
(statearr_19801_19856[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (36))){
var inst_19727 = (state_19777[(12)]);
var inst_19704 = inst_19727;
var state_19777__$1 = (function (){var statearr_19802 = state_19777;
(statearr_19802[(7)] = inst_19704);

return statearr_19802;
})();
var statearr_19803_19857 = state_19777__$1;
(statearr_19803_19857[(2)] = null);

(statearr_19803_19857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (29))){
var inst_19751 = (state_19777[(11)]);
var state_19777__$1 = state_19777;
var statearr_19804_19858 = state_19777__$1;
(statearr_19804_19858[(2)] = inst_19751);

(statearr_19804_19858[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (6))){
var state_19777__$1 = state_19777;
var statearr_19805_19859 = state_19777__$1;
(statearr_19805_19859[(2)] = false);

(statearr_19805_19859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (28))){
var inst_19747 = (state_19777[(2)]);
var inst_19748 = calc_state.call(null);
var inst_19704 = inst_19748;
var state_19777__$1 = (function (){var statearr_19806 = state_19777;
(statearr_19806[(7)] = inst_19704);

(statearr_19806[(15)] = inst_19747);

return statearr_19806;
})();
var statearr_19807_19860 = state_19777__$1;
(statearr_19807_19860[(2)] = null);

(statearr_19807_19860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (25))){
var inst_19773 = (state_19777[(2)]);
var state_19777__$1 = state_19777;
var statearr_19808_19861 = state_19777__$1;
(statearr_19808_19861[(2)] = inst_19773);

(statearr_19808_19861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (34))){
var inst_19771 = (state_19777[(2)]);
var state_19777__$1 = state_19777;
var statearr_19809_19862 = state_19777__$1;
(statearr_19809_19862[(2)] = inst_19771);

(statearr_19809_19862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (17))){
var state_19777__$1 = state_19777;
var statearr_19810_19863 = state_19777__$1;
(statearr_19810_19863[(2)] = false);

(statearr_19810_19863[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (3))){
var state_19777__$1 = state_19777;
var statearr_19811_19864 = state_19777__$1;
(statearr_19811_19864[(2)] = false);

(statearr_19811_19864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (12))){
var inst_19775 = (state_19777[(2)]);
var state_19777__$1 = state_19777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19777__$1,inst_19775);
} else {
if((state_val_19778 === (2))){
var inst_19679 = (state_19777[(8)]);
var inst_19684 = inst_19679.cljs$lang$protocol_mask$partition0$;
var inst_19685 = (inst_19684 & (64));
var inst_19686 = inst_19679.cljs$core$ISeq$;
var inst_19687 = (cljs.core.PROTOCOL_SENTINEL === inst_19686);
var inst_19688 = ((inst_19685) || (inst_19687));
var state_19777__$1 = state_19777;
if(cljs.core.truth_(inst_19688)){
var statearr_19812_19865 = state_19777__$1;
(statearr_19812_19865[(1)] = (5));

} else {
var statearr_19813_19866 = state_19777__$1;
(statearr_19813_19866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (23))){
var inst_19736 = (state_19777[(14)]);
var inst_19742 = (inst_19736 == null);
var state_19777__$1 = state_19777;
if(cljs.core.truth_(inst_19742)){
var statearr_19814_19867 = state_19777__$1;
(statearr_19814_19867[(1)] = (26));

} else {
var statearr_19815_19868 = state_19777__$1;
(statearr_19815_19868[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (35))){
var inst_19762 = (state_19777[(2)]);
var state_19777__$1 = state_19777;
if(cljs.core.truth_(inst_19762)){
var statearr_19816_19869 = state_19777__$1;
(statearr_19816_19869[(1)] = (36));

} else {
var statearr_19817_19870 = state_19777__$1;
(statearr_19817_19870[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (19))){
var inst_19704 = (state_19777[(7)]);
var inst_19724 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19704);
var state_19777__$1 = state_19777;
var statearr_19818_19871 = state_19777__$1;
(statearr_19818_19871[(2)] = inst_19724);

(statearr_19818_19871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (11))){
var inst_19704 = (state_19777[(7)]);
var inst_19708 = (inst_19704 == null);
var inst_19709 = cljs.core.not.call(null,inst_19708);
var state_19777__$1 = state_19777;
if(inst_19709){
var statearr_19819_19872 = state_19777__$1;
(statearr_19819_19872[(1)] = (13));

} else {
var statearr_19820_19873 = state_19777__$1;
(statearr_19820_19873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (9))){
var inst_19679 = (state_19777[(8)]);
var state_19777__$1 = state_19777;
var statearr_19821_19874 = state_19777__$1;
(statearr_19821_19874[(2)] = inst_19679);

(statearr_19821_19874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (5))){
var state_19777__$1 = state_19777;
var statearr_19822_19875 = state_19777__$1;
(statearr_19822_19875[(2)] = true);

(statearr_19822_19875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (14))){
var state_19777__$1 = state_19777;
var statearr_19823_19876 = state_19777__$1;
(statearr_19823_19876[(2)] = false);

(statearr_19823_19876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (26))){
var inst_19737 = (state_19777[(10)]);
var inst_19744 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19737);
var state_19777__$1 = state_19777;
var statearr_19824_19877 = state_19777__$1;
(statearr_19824_19877[(2)] = inst_19744);

(statearr_19824_19877[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (16))){
var state_19777__$1 = state_19777;
var statearr_19825_19878 = state_19777__$1;
(statearr_19825_19878[(2)] = true);

(statearr_19825_19878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (38))){
var inst_19767 = (state_19777[(2)]);
var state_19777__$1 = state_19777;
var statearr_19826_19879 = state_19777__$1;
(statearr_19826_19879[(2)] = inst_19767);

(statearr_19826_19879[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (30))){
var inst_19728 = (state_19777[(9)]);
var inst_19729 = (state_19777[(13)]);
var inst_19737 = (state_19777[(10)]);
var inst_19754 = cljs.core.empty_QMARK_.call(null,inst_19728);
var inst_19755 = inst_19729.call(null,inst_19737);
var inst_19756 = cljs.core.not.call(null,inst_19755);
var inst_19757 = ((inst_19754) && (inst_19756));
var state_19777__$1 = state_19777;
var statearr_19827_19880 = state_19777__$1;
(statearr_19827_19880[(2)] = inst_19757);

(statearr_19827_19880[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (10))){
var inst_19679 = (state_19777[(8)]);
var inst_19700 = (state_19777[(2)]);
var inst_19701 = cljs.core.get.call(null,inst_19700,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19702 = cljs.core.get.call(null,inst_19700,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19703 = cljs.core.get.call(null,inst_19700,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19704 = inst_19679;
var state_19777__$1 = (function (){var statearr_19828 = state_19777;
(statearr_19828[(16)] = inst_19703);

(statearr_19828[(17)] = inst_19702);

(statearr_19828[(7)] = inst_19704);

(statearr_19828[(18)] = inst_19701);

return statearr_19828;
})();
var statearr_19829_19881 = state_19777__$1;
(statearr_19829_19881[(2)] = null);

(statearr_19829_19881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (18))){
var inst_19719 = (state_19777[(2)]);
var state_19777__$1 = state_19777;
var statearr_19830_19882 = state_19777__$1;
(statearr_19830_19882[(2)] = inst_19719);

(statearr_19830_19882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (37))){
var state_19777__$1 = state_19777;
var statearr_19831_19883 = state_19777__$1;
(statearr_19831_19883[(2)] = null);

(statearr_19831_19883[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19778 === (8))){
var inst_19679 = (state_19777[(8)]);
var inst_19697 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19679);
var state_19777__$1 = state_19777;
var statearr_19832_19884 = state_19777__$1;
(statearr_19832_19884[(2)] = inst_19697);

(statearr_19832_19884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto___19838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18683__auto__,c__18757__auto___19838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18684__auto__ = null;
var cljs$core$async$mix_$_state_machine__18684__auto____0 = (function (){
var statearr_19833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19833[(0)] = cljs$core$async$mix_$_state_machine__18684__auto__);

(statearr_19833[(1)] = (1));

return statearr_19833;
});
var cljs$core$async$mix_$_state_machine__18684__auto____1 = (function (state_19777){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_19777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e19834){var ex__18687__auto__ = e19834;
var statearr_19835_19885 = state_19777;
(statearr_19835_19885[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_19777[(4)]))){
var statearr_19836_19886 = state_19777;
(statearr_19836_19886[(1)] = cljs.core.first.call(null,(state_19777[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19887 = state_19777;
state_19777 = G__19887;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18684__auto__ = function(state_19777){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18684__auto____1.call(this,state_19777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18684__auto____0;
cljs$core$async$mix_$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18684__auto____1;
return cljs$core$async$mix_$_state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___19838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18759__auto__ = (function (){var statearr_19837 = f__18758__auto__.call(null);
(statearr_19837[(6)] = c__18757__auto___19838);

return statearr_19837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___19838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
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
return m__4231__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4231__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return m__4231__auto__.call(null,p,v,ch);
} else {
var m__4231__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19889 = arguments.length;
switch (G__19889) {
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
return m__4231__auto__.call(null,p);
} else {
var m__4231__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return m__4231__auto__.call(null,p,v);
} else {
var m__4231__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__19893 = arguments.length;
switch (G__19893) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3936__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3936__auto__,mults){
return (function (p1__19891_SHARP_){
if(cljs.core.truth_(p1__19891_SHARP_.call(null,topic))){
return p1__19891_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19891_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19894 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19894 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19895){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19895 = meta19895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19896,meta19895__$1){
var self__ = this;
var _19896__$1 = this;
return (new cljs.core.async.t_cljs$core$async19894(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19895__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19896){
var self__ = this;
var _19896__$1 = this;
return self__.meta19895;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19894.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19894.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19894.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19894.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19894.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19894.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19894.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19895","meta19895",-1829029430,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19894";

cljs.core.async.t_cljs$core$async19894.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async19894");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19894.
 */
cljs.core.async.__GT_t_cljs$core$async19894 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19894(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19895){
return (new cljs.core.async.t_cljs$core$async19894(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19895));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19894(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18757__auto___20015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___20015,mults,ensure_mult,p){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___20015,mults,ensure_mult,p){
return (function (state_19968){
var state_val_19969 = (state_19968[(1)]);
if((state_val_19969 === (7))){
var inst_19964 = (state_19968[(2)]);
var state_19968__$1 = state_19968;
var statearr_19970_20016 = state_19968__$1;
(statearr_19970_20016[(2)] = inst_19964);

(statearr_19970_20016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (20))){
var state_19968__$1 = state_19968;
var statearr_19971_20017 = state_19968__$1;
(statearr_19971_20017[(2)] = null);

(statearr_19971_20017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (1))){
var state_19968__$1 = state_19968;
var statearr_19972_20018 = state_19968__$1;
(statearr_19972_20018[(2)] = null);

(statearr_19972_20018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (24))){
var inst_19947 = (state_19968[(7)]);
var inst_19956 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19947);
var state_19968__$1 = state_19968;
var statearr_19973_20019 = state_19968__$1;
(statearr_19973_20019[(2)] = inst_19956);

(statearr_19973_20019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (4))){
var inst_19899 = (state_19968[(8)]);
var inst_19899__$1 = (state_19968[(2)]);
var inst_19900 = (inst_19899__$1 == null);
var state_19968__$1 = (function (){var statearr_19974 = state_19968;
(statearr_19974[(8)] = inst_19899__$1);

return statearr_19974;
})();
if(cljs.core.truth_(inst_19900)){
var statearr_19975_20020 = state_19968__$1;
(statearr_19975_20020[(1)] = (5));

} else {
var statearr_19976_20021 = state_19968__$1;
(statearr_19976_20021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (15))){
var inst_19941 = (state_19968[(2)]);
var state_19968__$1 = state_19968;
var statearr_19977_20022 = state_19968__$1;
(statearr_19977_20022[(2)] = inst_19941);

(statearr_19977_20022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (21))){
var inst_19961 = (state_19968[(2)]);
var state_19968__$1 = (function (){var statearr_19978 = state_19968;
(statearr_19978[(9)] = inst_19961);

return statearr_19978;
})();
var statearr_19979_20023 = state_19968__$1;
(statearr_19979_20023[(2)] = null);

(statearr_19979_20023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (13))){
var inst_19923 = (state_19968[(10)]);
var inst_19925 = cljs.core.chunked_seq_QMARK_.call(null,inst_19923);
var state_19968__$1 = state_19968;
if(inst_19925){
var statearr_19980_20024 = state_19968__$1;
(statearr_19980_20024[(1)] = (16));

} else {
var statearr_19981_20025 = state_19968__$1;
(statearr_19981_20025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (22))){
var inst_19953 = (state_19968[(2)]);
var state_19968__$1 = state_19968;
if(cljs.core.truth_(inst_19953)){
var statearr_19982_20026 = state_19968__$1;
(statearr_19982_20026[(1)] = (23));

} else {
var statearr_19983_20027 = state_19968__$1;
(statearr_19983_20027[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (6))){
var inst_19947 = (state_19968[(7)]);
var inst_19899 = (state_19968[(8)]);
var inst_19949 = (state_19968[(11)]);
var inst_19947__$1 = topic_fn.call(null,inst_19899);
var inst_19948 = cljs.core.deref.call(null,mults);
var inst_19949__$1 = cljs.core.get.call(null,inst_19948,inst_19947__$1);
var state_19968__$1 = (function (){var statearr_19984 = state_19968;
(statearr_19984[(7)] = inst_19947__$1);

(statearr_19984[(11)] = inst_19949__$1);

return statearr_19984;
})();
if(cljs.core.truth_(inst_19949__$1)){
var statearr_19985_20028 = state_19968__$1;
(statearr_19985_20028[(1)] = (19));

} else {
var statearr_19986_20029 = state_19968__$1;
(statearr_19986_20029[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (25))){
var inst_19958 = (state_19968[(2)]);
var state_19968__$1 = state_19968;
var statearr_19987_20030 = state_19968__$1;
(statearr_19987_20030[(2)] = inst_19958);

(statearr_19987_20030[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (17))){
var inst_19923 = (state_19968[(10)]);
var inst_19932 = cljs.core.first.call(null,inst_19923);
var inst_19933 = cljs.core.async.muxch_STAR_.call(null,inst_19932);
var inst_19934 = cljs.core.async.close_BANG_.call(null,inst_19933);
var inst_19935 = cljs.core.next.call(null,inst_19923);
var inst_19909 = inst_19935;
var inst_19910 = null;
var inst_19911 = (0);
var inst_19912 = (0);
var state_19968__$1 = (function (){var statearr_19988 = state_19968;
(statearr_19988[(12)] = inst_19912);

(statearr_19988[(13)] = inst_19911);

(statearr_19988[(14)] = inst_19909);

(statearr_19988[(15)] = inst_19934);

(statearr_19988[(16)] = inst_19910);

return statearr_19988;
})();
var statearr_19989_20031 = state_19968__$1;
(statearr_19989_20031[(2)] = null);

(statearr_19989_20031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (3))){
var inst_19966 = (state_19968[(2)]);
var state_19968__$1 = state_19968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19968__$1,inst_19966);
} else {
if((state_val_19969 === (12))){
var inst_19943 = (state_19968[(2)]);
var state_19968__$1 = state_19968;
var statearr_19990_20032 = state_19968__$1;
(statearr_19990_20032[(2)] = inst_19943);

(statearr_19990_20032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (2))){
var state_19968__$1 = state_19968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19968__$1,(4),ch);
} else {
if((state_val_19969 === (23))){
var state_19968__$1 = state_19968;
var statearr_19991_20033 = state_19968__$1;
(statearr_19991_20033[(2)] = null);

(statearr_19991_20033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (19))){
var inst_19899 = (state_19968[(8)]);
var inst_19949 = (state_19968[(11)]);
var inst_19951 = cljs.core.async.muxch_STAR_.call(null,inst_19949);
var state_19968__$1 = state_19968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19968__$1,(22),inst_19951,inst_19899);
} else {
if((state_val_19969 === (11))){
var inst_19923 = (state_19968[(10)]);
var inst_19909 = (state_19968[(14)]);
var inst_19923__$1 = cljs.core.seq.call(null,inst_19909);
var state_19968__$1 = (function (){var statearr_19992 = state_19968;
(statearr_19992[(10)] = inst_19923__$1);

return statearr_19992;
})();
if(inst_19923__$1){
var statearr_19993_20034 = state_19968__$1;
(statearr_19993_20034[(1)] = (13));

} else {
var statearr_19994_20035 = state_19968__$1;
(statearr_19994_20035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (9))){
var inst_19945 = (state_19968[(2)]);
var state_19968__$1 = state_19968;
var statearr_19995_20036 = state_19968__$1;
(statearr_19995_20036[(2)] = inst_19945);

(statearr_19995_20036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (5))){
var inst_19906 = cljs.core.deref.call(null,mults);
var inst_19907 = cljs.core.vals.call(null,inst_19906);
var inst_19908 = cljs.core.seq.call(null,inst_19907);
var inst_19909 = inst_19908;
var inst_19910 = null;
var inst_19911 = (0);
var inst_19912 = (0);
var state_19968__$1 = (function (){var statearr_19996 = state_19968;
(statearr_19996[(12)] = inst_19912);

(statearr_19996[(13)] = inst_19911);

(statearr_19996[(14)] = inst_19909);

(statearr_19996[(16)] = inst_19910);

return statearr_19996;
})();
var statearr_19997_20037 = state_19968__$1;
(statearr_19997_20037[(2)] = null);

(statearr_19997_20037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (14))){
var state_19968__$1 = state_19968;
var statearr_20001_20038 = state_19968__$1;
(statearr_20001_20038[(2)] = null);

(statearr_20001_20038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (16))){
var inst_19923 = (state_19968[(10)]);
var inst_19927 = cljs.core.chunk_first.call(null,inst_19923);
var inst_19928 = cljs.core.chunk_rest.call(null,inst_19923);
var inst_19929 = cljs.core.count.call(null,inst_19927);
var inst_19909 = inst_19928;
var inst_19910 = inst_19927;
var inst_19911 = inst_19929;
var inst_19912 = (0);
var state_19968__$1 = (function (){var statearr_20002 = state_19968;
(statearr_20002[(12)] = inst_19912);

(statearr_20002[(13)] = inst_19911);

(statearr_20002[(14)] = inst_19909);

(statearr_20002[(16)] = inst_19910);

return statearr_20002;
})();
var statearr_20003_20039 = state_19968__$1;
(statearr_20003_20039[(2)] = null);

(statearr_20003_20039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (10))){
var inst_19912 = (state_19968[(12)]);
var inst_19911 = (state_19968[(13)]);
var inst_19909 = (state_19968[(14)]);
var inst_19910 = (state_19968[(16)]);
var inst_19917 = cljs.core._nth.call(null,inst_19910,inst_19912);
var inst_19918 = cljs.core.async.muxch_STAR_.call(null,inst_19917);
var inst_19919 = cljs.core.async.close_BANG_.call(null,inst_19918);
var inst_19920 = (inst_19912 + (1));
var tmp19998 = inst_19911;
var tmp19999 = inst_19909;
var tmp20000 = inst_19910;
var inst_19909__$1 = tmp19999;
var inst_19910__$1 = tmp20000;
var inst_19911__$1 = tmp19998;
var inst_19912__$1 = inst_19920;
var state_19968__$1 = (function (){var statearr_20004 = state_19968;
(statearr_20004[(12)] = inst_19912__$1);

(statearr_20004[(13)] = inst_19911__$1);

(statearr_20004[(14)] = inst_19909__$1);

(statearr_20004[(17)] = inst_19919);

(statearr_20004[(16)] = inst_19910__$1);

return statearr_20004;
})();
var statearr_20005_20040 = state_19968__$1;
(statearr_20005_20040[(2)] = null);

(statearr_20005_20040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (18))){
var inst_19938 = (state_19968[(2)]);
var state_19968__$1 = state_19968;
var statearr_20006_20041 = state_19968__$1;
(statearr_20006_20041[(2)] = inst_19938);

(statearr_20006_20041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19969 === (8))){
var inst_19912 = (state_19968[(12)]);
var inst_19911 = (state_19968[(13)]);
var inst_19914 = (inst_19912 < inst_19911);
var inst_19915 = inst_19914;
var state_19968__$1 = state_19968;
if(cljs.core.truth_(inst_19915)){
var statearr_20007_20042 = state_19968__$1;
(statearr_20007_20042[(1)] = (10));

} else {
var statearr_20008_20043 = state_19968__$1;
(statearr_20008_20043[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto___20015,mults,ensure_mult,p))
;
return ((function (switch__18683__auto__,c__18757__auto___20015,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18684__auto__ = null;
var cljs$core$async$state_machine__18684__auto____0 = (function (){
var statearr_20009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20009[(0)] = cljs$core$async$state_machine__18684__auto__);

(statearr_20009[(1)] = (1));

return statearr_20009;
});
var cljs$core$async$state_machine__18684__auto____1 = (function (state_19968){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_19968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e20010){var ex__18687__auto__ = e20010;
var statearr_20011_20044 = state_19968;
(statearr_20011_20044[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_19968[(4)]))){
var statearr_20012_20045 = state_19968;
(statearr_20012_20045[(1)] = cljs.core.first.call(null,(state_19968[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20046 = state_19968;
state_19968 = G__20046;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$state_machine__18684__auto__ = function(state_19968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18684__auto____1.call(this,state_19968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18684__auto____0;
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18684__auto____1;
return cljs$core$async$state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___20015,mults,ensure_mult,p))
})();
var state__18759__auto__ = (function (){var statearr_20013 = f__18758__auto__.call(null);
(statearr_20013[(6)] = c__18757__auto___20015);

return statearr_20013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___20015,mults,ensure_mult,p))
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
var G__20048 = arguments.length;
switch (G__20048) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__20051 = arguments.length;
switch (G__20051) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__20054 = arguments.length;
switch (G__20054) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18757__auto___20132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___20132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___20132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20097){
var state_val_20098 = (state_20097[(1)]);
if((state_val_20098 === (7))){
var state_20097__$1 = state_20097;
var statearr_20099_20133 = state_20097__$1;
(statearr_20099_20133[(2)] = null);

(statearr_20099_20133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (1))){
var state_20097__$1 = state_20097;
var statearr_20100_20134 = state_20097__$1;
(statearr_20100_20134[(2)] = null);

(statearr_20100_20134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (4))){
var inst_20058 = (state_20097[(7)]);
var inst_20057 = (state_20097[(8)]);
var inst_20060 = (inst_20058 < inst_20057);
var state_20097__$1 = state_20097;
if(cljs.core.truth_(inst_20060)){
var statearr_20101_20135 = state_20097__$1;
(statearr_20101_20135[(1)] = (6));

} else {
var statearr_20102_20136 = state_20097__$1;
(statearr_20102_20136[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (15))){
var inst_20083 = (state_20097[(9)]);
var inst_20088 = cljs.core.apply.call(null,f,inst_20083);
var state_20097__$1 = state_20097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20097__$1,(17),out,inst_20088);
} else {
if((state_val_20098 === (13))){
var inst_20083 = (state_20097[(9)]);
var inst_20083__$1 = (state_20097[(2)]);
var inst_20084 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20083__$1);
var state_20097__$1 = (function (){var statearr_20103 = state_20097;
(statearr_20103[(9)] = inst_20083__$1);

return statearr_20103;
})();
if(cljs.core.truth_(inst_20084)){
var statearr_20104_20137 = state_20097__$1;
(statearr_20104_20137[(1)] = (14));

} else {
var statearr_20105_20138 = state_20097__$1;
(statearr_20105_20138[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (6))){
var state_20097__$1 = state_20097;
var statearr_20106_20139 = state_20097__$1;
(statearr_20106_20139[(2)] = null);

(statearr_20106_20139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (17))){
var inst_20090 = (state_20097[(2)]);
var state_20097__$1 = (function (){var statearr_20108 = state_20097;
(statearr_20108[(10)] = inst_20090);

return statearr_20108;
})();
var statearr_20109_20140 = state_20097__$1;
(statearr_20109_20140[(2)] = null);

(statearr_20109_20140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (3))){
var inst_20095 = (state_20097[(2)]);
var state_20097__$1 = state_20097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20097__$1,inst_20095);
} else {
if((state_val_20098 === (12))){
var _ = (function (){var statearr_20110 = state_20097;
(statearr_20110[(4)] = cljs.core.rest.call(null,(state_20097[(4)])));

return statearr_20110;
})();
var state_20097__$1 = state_20097;
var ex20107 = (state_20097__$1[(2)]);
var statearr_20111_20141 = state_20097__$1;
(statearr_20111_20141[(5)] = ex20107);


if((ex20107 instanceof Object)){
var statearr_20112_20142 = state_20097__$1;
(statearr_20112_20142[(1)] = (11));

(statearr_20112_20142[(5)] = null);

} else {
throw ex20107;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (2))){
var inst_20056 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20057 = cnt;
var inst_20058 = (0);
var state_20097__$1 = (function (){var statearr_20113 = state_20097;
(statearr_20113[(7)] = inst_20058);

(statearr_20113[(8)] = inst_20057);

(statearr_20113[(11)] = inst_20056);

return statearr_20113;
})();
var statearr_20114_20143 = state_20097__$1;
(statearr_20114_20143[(2)] = null);

(statearr_20114_20143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (11))){
var inst_20062 = (state_20097[(2)]);
var inst_20063 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20097__$1 = (function (){var statearr_20115 = state_20097;
(statearr_20115[(12)] = inst_20062);

return statearr_20115;
})();
var statearr_20116_20144 = state_20097__$1;
(statearr_20116_20144[(2)] = inst_20063);

(statearr_20116_20144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (9))){
var inst_20058 = (state_20097[(7)]);
var _ = (function (){var statearr_20117 = state_20097;
(statearr_20117[(4)] = cljs.core.cons.call(null,(12),(state_20097[(4)])));

return statearr_20117;
})();
var inst_20069 = chs__$1.call(null,inst_20058);
var inst_20070 = done.call(null,inst_20058);
var inst_20071 = cljs.core.async.take_BANG_.call(null,inst_20069,inst_20070);
var ___$1 = (function (){var statearr_20118 = state_20097;
(statearr_20118[(4)] = cljs.core.rest.call(null,(state_20097[(4)])));

return statearr_20118;
})();
var state_20097__$1 = state_20097;
var statearr_20119_20145 = state_20097__$1;
(statearr_20119_20145[(2)] = inst_20071);

(statearr_20119_20145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (5))){
var inst_20081 = (state_20097[(2)]);
var state_20097__$1 = (function (){var statearr_20120 = state_20097;
(statearr_20120[(13)] = inst_20081);

return statearr_20120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20097__$1,(13),dchan);
} else {
if((state_val_20098 === (14))){
var inst_20086 = cljs.core.async.close_BANG_.call(null,out);
var state_20097__$1 = state_20097;
var statearr_20121_20146 = state_20097__$1;
(statearr_20121_20146[(2)] = inst_20086);

(statearr_20121_20146[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (16))){
var inst_20093 = (state_20097[(2)]);
var state_20097__$1 = state_20097;
var statearr_20122_20147 = state_20097__$1;
(statearr_20122_20147[(2)] = inst_20093);

(statearr_20122_20147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (10))){
var inst_20058 = (state_20097[(7)]);
var inst_20074 = (state_20097[(2)]);
var inst_20075 = (inst_20058 + (1));
var inst_20058__$1 = inst_20075;
var state_20097__$1 = (function (){var statearr_20123 = state_20097;
(statearr_20123[(7)] = inst_20058__$1);

(statearr_20123[(14)] = inst_20074);

return statearr_20123;
})();
var statearr_20124_20148 = state_20097__$1;
(statearr_20124_20148[(2)] = null);

(statearr_20124_20148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20098 === (8))){
var inst_20079 = (state_20097[(2)]);
var state_20097__$1 = state_20097;
var statearr_20125_20149 = state_20097__$1;
(statearr_20125_20149[(2)] = inst_20079);

(statearr_20125_20149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto___20132,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18683__auto__,c__18757__auto___20132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18684__auto__ = null;
var cljs$core$async$state_machine__18684__auto____0 = (function (){
var statearr_20126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20126[(0)] = cljs$core$async$state_machine__18684__auto__);

(statearr_20126[(1)] = (1));

return statearr_20126;
});
var cljs$core$async$state_machine__18684__auto____1 = (function (state_20097){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_20097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e20127){var ex__18687__auto__ = e20127;
var statearr_20128_20150 = state_20097;
(statearr_20128_20150[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_20097[(4)]))){
var statearr_20129_20151 = state_20097;
(statearr_20129_20151[(1)] = cljs.core.first.call(null,(state_20097[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20152 = state_20097;
state_20097 = G__20152;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$state_machine__18684__auto__ = function(state_20097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18684__auto____1.call(this,state_20097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18684__auto____0;
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18684__auto____1;
return cljs$core$async$state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___20132,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18759__auto__ = (function (){var statearr_20130 = f__18758__auto__.call(null);
(statearr_20130[(6)] = c__18757__auto___20132);

return statearr_20130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___20132,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__20155 = arguments.length;
switch (G__20155) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18757__auto___20210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___20210,out){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___20210,out){
return (function (state_20187){
var state_val_20188 = (state_20187[(1)]);
if((state_val_20188 === (7))){
var inst_20167 = (state_20187[(7)]);
var inst_20166 = (state_20187[(8)]);
var inst_20166__$1 = (state_20187[(2)]);
var inst_20167__$1 = cljs.core.nth.call(null,inst_20166__$1,(0),null);
var inst_20168 = cljs.core.nth.call(null,inst_20166__$1,(1),null);
var inst_20169 = (inst_20167__$1 == null);
var state_20187__$1 = (function (){var statearr_20189 = state_20187;
(statearr_20189[(9)] = inst_20168);

(statearr_20189[(7)] = inst_20167__$1);

(statearr_20189[(8)] = inst_20166__$1);

return statearr_20189;
})();
if(cljs.core.truth_(inst_20169)){
var statearr_20190_20211 = state_20187__$1;
(statearr_20190_20211[(1)] = (8));

} else {
var statearr_20191_20212 = state_20187__$1;
(statearr_20191_20212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (1))){
var inst_20156 = cljs.core.vec.call(null,chs);
var inst_20157 = inst_20156;
var state_20187__$1 = (function (){var statearr_20192 = state_20187;
(statearr_20192[(10)] = inst_20157);

return statearr_20192;
})();
var statearr_20193_20213 = state_20187__$1;
(statearr_20193_20213[(2)] = null);

(statearr_20193_20213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (4))){
var inst_20157 = (state_20187[(10)]);
var state_20187__$1 = state_20187;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20187__$1,(7),inst_20157);
} else {
if((state_val_20188 === (6))){
var inst_20183 = (state_20187[(2)]);
var state_20187__$1 = state_20187;
var statearr_20194_20214 = state_20187__$1;
(statearr_20194_20214[(2)] = inst_20183);

(statearr_20194_20214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (3))){
var inst_20185 = (state_20187[(2)]);
var state_20187__$1 = state_20187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20187__$1,inst_20185);
} else {
if((state_val_20188 === (2))){
var inst_20157 = (state_20187[(10)]);
var inst_20159 = cljs.core.count.call(null,inst_20157);
var inst_20160 = (inst_20159 > (0));
var state_20187__$1 = state_20187;
if(cljs.core.truth_(inst_20160)){
var statearr_20196_20215 = state_20187__$1;
(statearr_20196_20215[(1)] = (4));

} else {
var statearr_20197_20216 = state_20187__$1;
(statearr_20197_20216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (11))){
var inst_20157 = (state_20187[(10)]);
var inst_20176 = (state_20187[(2)]);
var tmp20195 = inst_20157;
var inst_20157__$1 = tmp20195;
var state_20187__$1 = (function (){var statearr_20198 = state_20187;
(statearr_20198[(10)] = inst_20157__$1);

(statearr_20198[(11)] = inst_20176);

return statearr_20198;
})();
var statearr_20199_20217 = state_20187__$1;
(statearr_20199_20217[(2)] = null);

(statearr_20199_20217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (9))){
var inst_20167 = (state_20187[(7)]);
var state_20187__$1 = state_20187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20187__$1,(11),out,inst_20167);
} else {
if((state_val_20188 === (5))){
var inst_20181 = cljs.core.async.close_BANG_.call(null,out);
var state_20187__$1 = state_20187;
var statearr_20200_20218 = state_20187__$1;
(statearr_20200_20218[(2)] = inst_20181);

(statearr_20200_20218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (10))){
var inst_20179 = (state_20187[(2)]);
var state_20187__$1 = state_20187;
var statearr_20201_20219 = state_20187__$1;
(statearr_20201_20219[(2)] = inst_20179);

(statearr_20201_20219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (8))){
var inst_20157 = (state_20187[(10)]);
var inst_20168 = (state_20187[(9)]);
var inst_20167 = (state_20187[(7)]);
var inst_20166 = (state_20187[(8)]);
var inst_20171 = (function (){var cs = inst_20157;
var vec__20162 = inst_20166;
var v = inst_20167;
var c = inst_20168;
return ((function (cs,vec__20162,v,c,inst_20157,inst_20168,inst_20167,inst_20166,state_val_20188,c__18757__auto___20210,out){
return (function (p1__20153_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20153_SHARP_);
});
;})(cs,vec__20162,v,c,inst_20157,inst_20168,inst_20167,inst_20166,state_val_20188,c__18757__auto___20210,out))
})();
var inst_20172 = cljs.core.filterv.call(null,inst_20171,inst_20157);
var inst_20157__$1 = inst_20172;
var state_20187__$1 = (function (){var statearr_20202 = state_20187;
(statearr_20202[(10)] = inst_20157__$1);

return statearr_20202;
})();
var statearr_20203_20220 = state_20187__$1;
(statearr_20203_20220[(2)] = null);

(statearr_20203_20220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto___20210,out))
;
return ((function (switch__18683__auto__,c__18757__auto___20210,out){
return (function() {
var cljs$core$async$state_machine__18684__auto__ = null;
var cljs$core$async$state_machine__18684__auto____0 = (function (){
var statearr_20204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20204[(0)] = cljs$core$async$state_machine__18684__auto__);

(statearr_20204[(1)] = (1));

return statearr_20204;
});
var cljs$core$async$state_machine__18684__auto____1 = (function (state_20187){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_20187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e20205){var ex__18687__auto__ = e20205;
var statearr_20206_20221 = state_20187;
(statearr_20206_20221[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_20187[(4)]))){
var statearr_20207_20222 = state_20187;
(statearr_20207_20222[(1)] = cljs.core.first.call(null,(state_20187[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20223 = state_20187;
state_20187 = G__20223;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$state_machine__18684__auto__ = function(state_20187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18684__auto____1.call(this,state_20187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18684__auto____0;
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18684__auto____1;
return cljs$core$async$state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___20210,out))
})();
var state__18759__auto__ = (function (){var statearr_20208 = f__18758__auto__.call(null);
(statearr_20208[(6)] = c__18757__auto___20210);

return statearr_20208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___20210,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20225 = arguments.length;
switch (G__20225) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18757__auto___20271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___20271,out){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___20271,out){
return (function (state_20249){
var state_val_20250 = (state_20249[(1)]);
if((state_val_20250 === (7))){
var inst_20231 = (state_20249[(7)]);
var inst_20231__$1 = (state_20249[(2)]);
var inst_20232 = (inst_20231__$1 == null);
var inst_20233 = cljs.core.not.call(null,inst_20232);
var state_20249__$1 = (function (){var statearr_20251 = state_20249;
(statearr_20251[(7)] = inst_20231__$1);

return statearr_20251;
})();
if(inst_20233){
var statearr_20252_20272 = state_20249__$1;
(statearr_20252_20272[(1)] = (8));

} else {
var statearr_20253_20273 = state_20249__$1;
(statearr_20253_20273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (1))){
var inst_20226 = (0);
var state_20249__$1 = (function (){var statearr_20254 = state_20249;
(statearr_20254[(8)] = inst_20226);

return statearr_20254;
})();
var statearr_20255_20274 = state_20249__$1;
(statearr_20255_20274[(2)] = null);

(statearr_20255_20274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (4))){
var state_20249__$1 = state_20249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20249__$1,(7),ch);
} else {
if((state_val_20250 === (6))){
var inst_20244 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
var statearr_20256_20275 = state_20249__$1;
(statearr_20256_20275[(2)] = inst_20244);

(statearr_20256_20275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (3))){
var inst_20246 = (state_20249[(2)]);
var inst_20247 = cljs.core.async.close_BANG_.call(null,out);
var state_20249__$1 = (function (){var statearr_20257 = state_20249;
(statearr_20257[(9)] = inst_20246);

return statearr_20257;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20249__$1,inst_20247);
} else {
if((state_val_20250 === (2))){
var inst_20226 = (state_20249[(8)]);
var inst_20228 = (inst_20226 < n);
var state_20249__$1 = state_20249;
if(cljs.core.truth_(inst_20228)){
var statearr_20258_20276 = state_20249__$1;
(statearr_20258_20276[(1)] = (4));

} else {
var statearr_20259_20277 = state_20249__$1;
(statearr_20259_20277[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (11))){
var inst_20226 = (state_20249[(8)]);
var inst_20236 = (state_20249[(2)]);
var inst_20237 = (inst_20226 + (1));
var inst_20226__$1 = inst_20237;
var state_20249__$1 = (function (){var statearr_20260 = state_20249;
(statearr_20260[(10)] = inst_20236);

(statearr_20260[(8)] = inst_20226__$1);

return statearr_20260;
})();
var statearr_20261_20278 = state_20249__$1;
(statearr_20261_20278[(2)] = null);

(statearr_20261_20278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (9))){
var state_20249__$1 = state_20249;
var statearr_20262_20279 = state_20249__$1;
(statearr_20262_20279[(2)] = null);

(statearr_20262_20279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (5))){
var state_20249__$1 = state_20249;
var statearr_20263_20280 = state_20249__$1;
(statearr_20263_20280[(2)] = null);

(statearr_20263_20280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (10))){
var inst_20241 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
var statearr_20264_20281 = state_20249__$1;
(statearr_20264_20281[(2)] = inst_20241);

(statearr_20264_20281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (8))){
var inst_20231 = (state_20249[(7)]);
var state_20249__$1 = state_20249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20249__$1,(11),out,inst_20231);
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
});})(c__18757__auto___20271,out))
;
return ((function (switch__18683__auto__,c__18757__auto___20271,out){
return (function() {
var cljs$core$async$state_machine__18684__auto__ = null;
var cljs$core$async$state_machine__18684__auto____0 = (function (){
var statearr_20265 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20265[(0)] = cljs$core$async$state_machine__18684__auto__);

(statearr_20265[(1)] = (1));

return statearr_20265;
});
var cljs$core$async$state_machine__18684__auto____1 = (function (state_20249){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_20249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e20266){var ex__18687__auto__ = e20266;
var statearr_20267_20282 = state_20249;
(statearr_20267_20282[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_20249[(4)]))){
var statearr_20268_20283 = state_20249;
(statearr_20268_20283[(1)] = cljs.core.first.call(null,(state_20249[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20284 = state_20249;
state_20249 = G__20284;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$state_machine__18684__auto__ = function(state_20249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18684__auto____1.call(this,state_20249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18684__auto____0;
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18684__auto____1;
return cljs$core$async$state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___20271,out))
})();
var state__18759__auto__ = (function (){var statearr_20269 = f__18758__auto__.call(null);
(statearr_20269[(6)] = c__18757__auto___20271);

return statearr_20269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___20271,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20286 = (function (f,ch,meta20287){
this.f = f;
this.ch = ch;
this.meta20287 = meta20287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20288,meta20287__$1){
var self__ = this;
var _20288__$1 = this;
return (new cljs.core.async.t_cljs$core$async20286(self__.f,self__.ch,meta20287__$1));
});

cljs.core.async.t_cljs$core$async20286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20288){
var self__ = this;
var _20288__$1 = this;
return self__.meta20287;
});

cljs.core.async.t_cljs$core$async20286.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20286.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20286.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20289 = (function (f,ch,meta20287,_,fn1,meta20290){
this.f = f;
this.ch = ch;
this.meta20287 = meta20287;
this._ = _;
this.fn1 = fn1;
this.meta20290 = meta20290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20291,meta20290__$1){
var self__ = this;
var _20291__$1 = this;
return (new cljs.core.async.t_cljs$core$async20289(self__.f,self__.ch,self__.meta20287,self__._,self__.fn1,meta20290__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20291){
var self__ = this;
var _20291__$1 = this;
return self__.meta20290;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20289.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20289.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20285_SHARP_){
return f1.call(null,(((p1__20285_SHARP_ == null))?null:self__.f.call(null,p1__20285_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20289.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20287","meta20287",456630955,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20286","cljs.core.async/t_cljs$core$async20286",-1861148578,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20290","meta20290",890239734,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20289";

cljs.core.async.t_cljs$core$async20289.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async20289");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20289.
 */
cljs.core.async.__GT_t_cljs$core$async20289 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20289(f__$1,ch__$1,meta20287__$1,___$2,fn1__$1,meta20290){
return (new cljs.core.async.t_cljs$core$async20289(f__$1,ch__$1,meta20287__$1,___$2,fn1__$1,meta20290));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20289(self__.f,self__.ch,self__.meta20287,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3925__auto__ = ret;
if(cljs.core.truth_(and__3925__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3925__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20286.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20287","meta20287",456630955,null)], null);
});

cljs.core.async.t_cljs$core$async20286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20286";

cljs.core.async.t_cljs$core$async20286.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async20286");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20286.
 */
cljs.core.async.__GT_t_cljs$core$async20286 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20286(f__$1,ch__$1,meta20287){
return (new cljs.core.async.t_cljs$core$async20286(f__$1,ch__$1,meta20287));
});

}

return (new cljs.core.async.t_cljs$core$async20286(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20292 = (function (f,ch,meta20293){
this.f = f;
this.ch = ch;
this.meta20293 = meta20293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20294,meta20293__$1){
var self__ = this;
var _20294__$1 = this;
return (new cljs.core.async.t_cljs$core$async20292(self__.f,self__.ch,meta20293__$1));
});

cljs.core.async.t_cljs$core$async20292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20294){
var self__ = this;
var _20294__$1 = this;
return self__.meta20293;
});

cljs.core.async.t_cljs$core$async20292.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20292.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20292.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20293","meta20293",499088027,null)], null);
});

cljs.core.async.t_cljs$core$async20292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20292";

cljs.core.async.t_cljs$core$async20292.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async20292");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20292.
 */
cljs.core.async.__GT_t_cljs$core$async20292 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20292(f__$1,ch__$1,meta20293){
return (new cljs.core.async.t_cljs$core$async20292(f__$1,ch__$1,meta20293));
});

}

return (new cljs.core.async.t_cljs$core$async20292(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20295 = (function (p,ch,meta20296){
this.p = p;
this.ch = ch;
this.meta20296 = meta20296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20297,meta20296__$1){
var self__ = this;
var _20297__$1 = this;
return (new cljs.core.async.t_cljs$core$async20295(self__.p,self__.ch,meta20296__$1));
});

cljs.core.async.t_cljs$core$async20295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20297){
var self__ = this;
var _20297__$1 = this;
return self__.meta20296;
});

cljs.core.async.t_cljs$core$async20295.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20295.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20295.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20295.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20295.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20295.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20295.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20296","meta20296",-1448174264,null)], null);
});

cljs.core.async.t_cljs$core$async20295.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20295";

cljs.core.async.t_cljs$core$async20295.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async20295");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20295.
 */
cljs.core.async.__GT_t_cljs$core$async20295 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20295(p__$1,ch__$1,meta20296){
return (new cljs.core.async.t_cljs$core$async20295(p__$1,ch__$1,meta20296));
});

}

return (new cljs.core.async.t_cljs$core$async20295(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20299 = arguments.length;
switch (G__20299) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18757__auto___20340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___20340,out){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___20340,out){
return (function (state_20320){
var state_val_20321 = (state_20320[(1)]);
if((state_val_20321 === (7))){
var inst_20316 = (state_20320[(2)]);
var state_20320__$1 = state_20320;
var statearr_20322_20341 = state_20320__$1;
(statearr_20322_20341[(2)] = inst_20316);

(statearr_20322_20341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (1))){
var state_20320__$1 = state_20320;
var statearr_20323_20342 = state_20320__$1;
(statearr_20323_20342[(2)] = null);

(statearr_20323_20342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (4))){
var inst_20302 = (state_20320[(7)]);
var inst_20302__$1 = (state_20320[(2)]);
var inst_20303 = (inst_20302__$1 == null);
var state_20320__$1 = (function (){var statearr_20324 = state_20320;
(statearr_20324[(7)] = inst_20302__$1);

return statearr_20324;
})();
if(cljs.core.truth_(inst_20303)){
var statearr_20325_20343 = state_20320__$1;
(statearr_20325_20343[(1)] = (5));

} else {
var statearr_20326_20344 = state_20320__$1;
(statearr_20326_20344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (6))){
var inst_20302 = (state_20320[(7)]);
var inst_20307 = p.call(null,inst_20302);
var state_20320__$1 = state_20320;
if(cljs.core.truth_(inst_20307)){
var statearr_20327_20345 = state_20320__$1;
(statearr_20327_20345[(1)] = (8));

} else {
var statearr_20328_20346 = state_20320__$1;
(statearr_20328_20346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (3))){
var inst_20318 = (state_20320[(2)]);
var state_20320__$1 = state_20320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20320__$1,inst_20318);
} else {
if((state_val_20321 === (2))){
var state_20320__$1 = state_20320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20320__$1,(4),ch);
} else {
if((state_val_20321 === (11))){
var inst_20310 = (state_20320[(2)]);
var state_20320__$1 = state_20320;
var statearr_20329_20347 = state_20320__$1;
(statearr_20329_20347[(2)] = inst_20310);

(statearr_20329_20347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (9))){
var state_20320__$1 = state_20320;
var statearr_20330_20348 = state_20320__$1;
(statearr_20330_20348[(2)] = null);

(statearr_20330_20348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (5))){
var inst_20305 = cljs.core.async.close_BANG_.call(null,out);
var state_20320__$1 = state_20320;
var statearr_20331_20349 = state_20320__$1;
(statearr_20331_20349[(2)] = inst_20305);

(statearr_20331_20349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (10))){
var inst_20313 = (state_20320[(2)]);
var state_20320__$1 = (function (){var statearr_20332 = state_20320;
(statearr_20332[(8)] = inst_20313);

return statearr_20332;
})();
var statearr_20333_20350 = state_20320__$1;
(statearr_20333_20350[(2)] = null);

(statearr_20333_20350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20321 === (8))){
var inst_20302 = (state_20320[(7)]);
var state_20320__$1 = state_20320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20320__$1,(11),out,inst_20302);
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
});})(c__18757__auto___20340,out))
;
return ((function (switch__18683__auto__,c__18757__auto___20340,out){
return (function() {
var cljs$core$async$state_machine__18684__auto__ = null;
var cljs$core$async$state_machine__18684__auto____0 = (function (){
var statearr_20334 = [null,null,null,null,null,null,null,null,null];
(statearr_20334[(0)] = cljs$core$async$state_machine__18684__auto__);

(statearr_20334[(1)] = (1));

return statearr_20334;
});
var cljs$core$async$state_machine__18684__auto____1 = (function (state_20320){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_20320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e20335){var ex__18687__auto__ = e20335;
var statearr_20336_20351 = state_20320;
(statearr_20336_20351[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_20320[(4)]))){
var statearr_20337_20352 = state_20320;
(statearr_20337_20352[(1)] = cljs.core.first.call(null,(state_20320[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20353 = state_20320;
state_20320 = G__20353;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$state_machine__18684__auto__ = function(state_20320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18684__auto____1.call(this,state_20320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18684__auto____0;
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18684__auto____1;
return cljs$core$async$state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___20340,out))
})();
var state__18759__auto__ = (function (){var statearr_20338 = f__18758__auto__.call(null);
(statearr_20338[(6)] = c__18757__auto___20340);

return statearr_20338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___20340,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20355 = arguments.length;
switch (G__20355) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto__){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto__){
return (function (state_20418){
var state_val_20419 = (state_20418[(1)]);
if((state_val_20419 === (7))){
var inst_20414 = (state_20418[(2)]);
var state_20418__$1 = state_20418;
var statearr_20420_20459 = state_20418__$1;
(statearr_20420_20459[(2)] = inst_20414);

(statearr_20420_20459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (20))){
var inst_20384 = (state_20418[(7)]);
var inst_20395 = (state_20418[(2)]);
var inst_20396 = cljs.core.next.call(null,inst_20384);
var inst_20370 = inst_20396;
var inst_20371 = null;
var inst_20372 = (0);
var inst_20373 = (0);
var state_20418__$1 = (function (){var statearr_20421 = state_20418;
(statearr_20421[(8)] = inst_20370);

(statearr_20421[(9)] = inst_20373);

(statearr_20421[(10)] = inst_20371);

(statearr_20421[(11)] = inst_20395);

(statearr_20421[(12)] = inst_20372);

return statearr_20421;
})();
var statearr_20422_20460 = state_20418__$1;
(statearr_20422_20460[(2)] = null);

(statearr_20422_20460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (1))){
var state_20418__$1 = state_20418;
var statearr_20423_20461 = state_20418__$1;
(statearr_20423_20461[(2)] = null);

(statearr_20423_20461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (4))){
var inst_20359 = (state_20418[(13)]);
var inst_20359__$1 = (state_20418[(2)]);
var inst_20360 = (inst_20359__$1 == null);
var state_20418__$1 = (function (){var statearr_20424 = state_20418;
(statearr_20424[(13)] = inst_20359__$1);

return statearr_20424;
})();
if(cljs.core.truth_(inst_20360)){
var statearr_20425_20462 = state_20418__$1;
(statearr_20425_20462[(1)] = (5));

} else {
var statearr_20426_20463 = state_20418__$1;
(statearr_20426_20463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (15))){
var state_20418__$1 = state_20418;
var statearr_20430_20464 = state_20418__$1;
(statearr_20430_20464[(2)] = null);

(statearr_20430_20464[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (21))){
var state_20418__$1 = state_20418;
var statearr_20431_20465 = state_20418__$1;
(statearr_20431_20465[(2)] = null);

(statearr_20431_20465[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (13))){
var inst_20370 = (state_20418[(8)]);
var inst_20373 = (state_20418[(9)]);
var inst_20371 = (state_20418[(10)]);
var inst_20372 = (state_20418[(12)]);
var inst_20380 = (state_20418[(2)]);
var inst_20381 = (inst_20373 + (1));
var tmp20427 = inst_20370;
var tmp20428 = inst_20371;
var tmp20429 = inst_20372;
var inst_20370__$1 = tmp20427;
var inst_20371__$1 = tmp20428;
var inst_20372__$1 = tmp20429;
var inst_20373__$1 = inst_20381;
var state_20418__$1 = (function (){var statearr_20432 = state_20418;
(statearr_20432[(8)] = inst_20370__$1);

(statearr_20432[(9)] = inst_20373__$1);

(statearr_20432[(14)] = inst_20380);

(statearr_20432[(10)] = inst_20371__$1);

(statearr_20432[(12)] = inst_20372__$1);

return statearr_20432;
})();
var statearr_20433_20466 = state_20418__$1;
(statearr_20433_20466[(2)] = null);

(statearr_20433_20466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (22))){
var state_20418__$1 = state_20418;
var statearr_20434_20467 = state_20418__$1;
(statearr_20434_20467[(2)] = null);

(statearr_20434_20467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (6))){
var inst_20359 = (state_20418[(13)]);
var inst_20368 = f.call(null,inst_20359);
var inst_20369 = cljs.core.seq.call(null,inst_20368);
var inst_20370 = inst_20369;
var inst_20371 = null;
var inst_20372 = (0);
var inst_20373 = (0);
var state_20418__$1 = (function (){var statearr_20435 = state_20418;
(statearr_20435[(8)] = inst_20370);

(statearr_20435[(9)] = inst_20373);

(statearr_20435[(10)] = inst_20371);

(statearr_20435[(12)] = inst_20372);

return statearr_20435;
})();
var statearr_20436_20468 = state_20418__$1;
(statearr_20436_20468[(2)] = null);

(statearr_20436_20468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (17))){
var inst_20384 = (state_20418[(7)]);
var inst_20388 = cljs.core.chunk_first.call(null,inst_20384);
var inst_20389 = cljs.core.chunk_rest.call(null,inst_20384);
var inst_20390 = cljs.core.count.call(null,inst_20388);
var inst_20370 = inst_20389;
var inst_20371 = inst_20388;
var inst_20372 = inst_20390;
var inst_20373 = (0);
var state_20418__$1 = (function (){var statearr_20437 = state_20418;
(statearr_20437[(8)] = inst_20370);

(statearr_20437[(9)] = inst_20373);

(statearr_20437[(10)] = inst_20371);

(statearr_20437[(12)] = inst_20372);

return statearr_20437;
})();
var statearr_20438_20469 = state_20418__$1;
(statearr_20438_20469[(2)] = null);

(statearr_20438_20469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (3))){
var inst_20416 = (state_20418[(2)]);
var state_20418__$1 = state_20418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20418__$1,inst_20416);
} else {
if((state_val_20419 === (12))){
var inst_20404 = (state_20418[(2)]);
var state_20418__$1 = state_20418;
var statearr_20439_20470 = state_20418__$1;
(statearr_20439_20470[(2)] = inst_20404);

(statearr_20439_20470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (2))){
var state_20418__$1 = state_20418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20418__$1,(4),in$);
} else {
if((state_val_20419 === (23))){
var inst_20412 = (state_20418[(2)]);
var state_20418__$1 = state_20418;
var statearr_20440_20471 = state_20418__$1;
(statearr_20440_20471[(2)] = inst_20412);

(statearr_20440_20471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (19))){
var inst_20399 = (state_20418[(2)]);
var state_20418__$1 = state_20418;
var statearr_20441_20472 = state_20418__$1;
(statearr_20441_20472[(2)] = inst_20399);

(statearr_20441_20472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (11))){
var inst_20370 = (state_20418[(8)]);
var inst_20384 = (state_20418[(7)]);
var inst_20384__$1 = cljs.core.seq.call(null,inst_20370);
var state_20418__$1 = (function (){var statearr_20442 = state_20418;
(statearr_20442[(7)] = inst_20384__$1);

return statearr_20442;
})();
if(inst_20384__$1){
var statearr_20443_20473 = state_20418__$1;
(statearr_20443_20473[(1)] = (14));

} else {
var statearr_20444_20474 = state_20418__$1;
(statearr_20444_20474[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (9))){
var inst_20406 = (state_20418[(2)]);
var inst_20407 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20418__$1 = (function (){var statearr_20445 = state_20418;
(statearr_20445[(15)] = inst_20406);

return statearr_20445;
})();
if(cljs.core.truth_(inst_20407)){
var statearr_20446_20475 = state_20418__$1;
(statearr_20446_20475[(1)] = (21));

} else {
var statearr_20447_20476 = state_20418__$1;
(statearr_20447_20476[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (5))){
var inst_20362 = cljs.core.async.close_BANG_.call(null,out);
var state_20418__$1 = state_20418;
var statearr_20448_20477 = state_20418__$1;
(statearr_20448_20477[(2)] = inst_20362);

(statearr_20448_20477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (14))){
var inst_20384 = (state_20418[(7)]);
var inst_20386 = cljs.core.chunked_seq_QMARK_.call(null,inst_20384);
var state_20418__$1 = state_20418;
if(inst_20386){
var statearr_20449_20478 = state_20418__$1;
(statearr_20449_20478[(1)] = (17));

} else {
var statearr_20450_20479 = state_20418__$1;
(statearr_20450_20479[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (16))){
var inst_20402 = (state_20418[(2)]);
var state_20418__$1 = state_20418;
var statearr_20451_20480 = state_20418__$1;
(statearr_20451_20480[(2)] = inst_20402);

(statearr_20451_20480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (10))){
var inst_20373 = (state_20418[(9)]);
var inst_20371 = (state_20418[(10)]);
var inst_20378 = cljs.core._nth.call(null,inst_20371,inst_20373);
var state_20418__$1 = state_20418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20418__$1,(13),out,inst_20378);
} else {
if((state_val_20419 === (18))){
var inst_20384 = (state_20418[(7)]);
var inst_20393 = cljs.core.first.call(null,inst_20384);
var state_20418__$1 = state_20418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20418__$1,(20),out,inst_20393);
} else {
if((state_val_20419 === (8))){
var inst_20373 = (state_20418[(9)]);
var inst_20372 = (state_20418[(12)]);
var inst_20375 = (inst_20373 < inst_20372);
var inst_20376 = inst_20375;
var state_20418__$1 = state_20418;
if(cljs.core.truth_(inst_20376)){
var statearr_20452_20481 = state_20418__$1;
(statearr_20452_20481[(1)] = (10));

} else {
var statearr_20453_20482 = state_20418__$1;
(statearr_20453_20482[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto__))
;
return ((function (switch__18683__auto__,c__18757__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18684__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18684__auto____0 = (function (){
var statearr_20454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20454[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18684__auto__);

(statearr_20454[(1)] = (1));

return statearr_20454;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18684__auto____1 = (function (state_20418){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_20418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e20455){var ex__18687__auto__ = e20455;
var statearr_20456_20483 = state_20418;
(statearr_20456_20483[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_20418[(4)]))){
var statearr_20457_20484 = state_20418;
(statearr_20457_20484[(1)] = cljs.core.first.call(null,(state_20418[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20485 = state_20418;
state_20418 = G__20485;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18684__auto__ = function(state_20418){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18684__auto____1.call(this,state_20418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18684__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18684__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto__))
})();
var state__18759__auto__ = (function (){var statearr_20458 = f__18758__auto__.call(null);
(statearr_20458[(6)] = c__18757__auto__);

return statearr_20458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto__))
);

return c__18757__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20487 = arguments.length;
switch (G__20487) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20490 = arguments.length;
switch (G__20490) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20493 = arguments.length;
switch (G__20493) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18757__auto___20541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___20541,out){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___20541,out){
return (function (state_20517){
var state_val_20518 = (state_20517[(1)]);
if((state_val_20518 === (7))){
var inst_20512 = (state_20517[(2)]);
var state_20517__$1 = state_20517;
var statearr_20519_20542 = state_20517__$1;
(statearr_20519_20542[(2)] = inst_20512);

(statearr_20519_20542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20518 === (1))){
var inst_20494 = null;
var state_20517__$1 = (function (){var statearr_20520 = state_20517;
(statearr_20520[(7)] = inst_20494);

return statearr_20520;
})();
var statearr_20521_20543 = state_20517__$1;
(statearr_20521_20543[(2)] = null);

(statearr_20521_20543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20518 === (4))){
var inst_20497 = (state_20517[(8)]);
var inst_20497__$1 = (state_20517[(2)]);
var inst_20498 = (inst_20497__$1 == null);
var inst_20499 = cljs.core.not.call(null,inst_20498);
var state_20517__$1 = (function (){var statearr_20522 = state_20517;
(statearr_20522[(8)] = inst_20497__$1);

return statearr_20522;
})();
if(inst_20499){
var statearr_20523_20544 = state_20517__$1;
(statearr_20523_20544[(1)] = (5));

} else {
var statearr_20524_20545 = state_20517__$1;
(statearr_20524_20545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20518 === (6))){
var state_20517__$1 = state_20517;
var statearr_20525_20546 = state_20517__$1;
(statearr_20525_20546[(2)] = null);

(statearr_20525_20546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20518 === (3))){
var inst_20514 = (state_20517[(2)]);
var inst_20515 = cljs.core.async.close_BANG_.call(null,out);
var state_20517__$1 = (function (){var statearr_20526 = state_20517;
(statearr_20526[(9)] = inst_20514);

return statearr_20526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20517__$1,inst_20515);
} else {
if((state_val_20518 === (2))){
var state_20517__$1 = state_20517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20517__$1,(4),ch);
} else {
if((state_val_20518 === (11))){
var inst_20497 = (state_20517[(8)]);
var inst_20506 = (state_20517[(2)]);
var inst_20494 = inst_20497;
var state_20517__$1 = (function (){var statearr_20527 = state_20517;
(statearr_20527[(10)] = inst_20506);

(statearr_20527[(7)] = inst_20494);

return statearr_20527;
})();
var statearr_20528_20547 = state_20517__$1;
(statearr_20528_20547[(2)] = null);

(statearr_20528_20547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20518 === (9))){
var inst_20497 = (state_20517[(8)]);
var state_20517__$1 = state_20517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20517__$1,(11),out,inst_20497);
} else {
if((state_val_20518 === (5))){
var inst_20497 = (state_20517[(8)]);
var inst_20494 = (state_20517[(7)]);
var inst_20501 = cljs.core._EQ_.call(null,inst_20497,inst_20494);
var state_20517__$1 = state_20517;
if(inst_20501){
var statearr_20530_20548 = state_20517__$1;
(statearr_20530_20548[(1)] = (8));

} else {
var statearr_20531_20549 = state_20517__$1;
(statearr_20531_20549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20518 === (10))){
var inst_20509 = (state_20517[(2)]);
var state_20517__$1 = state_20517;
var statearr_20532_20550 = state_20517__$1;
(statearr_20532_20550[(2)] = inst_20509);

(statearr_20532_20550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20518 === (8))){
var inst_20494 = (state_20517[(7)]);
var tmp20529 = inst_20494;
var inst_20494__$1 = tmp20529;
var state_20517__$1 = (function (){var statearr_20533 = state_20517;
(statearr_20533[(7)] = inst_20494__$1);

return statearr_20533;
})();
var statearr_20534_20551 = state_20517__$1;
(statearr_20534_20551[(2)] = null);

(statearr_20534_20551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto___20541,out))
;
return ((function (switch__18683__auto__,c__18757__auto___20541,out){
return (function() {
var cljs$core$async$state_machine__18684__auto__ = null;
var cljs$core$async$state_machine__18684__auto____0 = (function (){
var statearr_20535 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20535[(0)] = cljs$core$async$state_machine__18684__auto__);

(statearr_20535[(1)] = (1));

return statearr_20535;
});
var cljs$core$async$state_machine__18684__auto____1 = (function (state_20517){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_20517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e20536){var ex__18687__auto__ = e20536;
var statearr_20537_20552 = state_20517;
(statearr_20537_20552[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_20517[(4)]))){
var statearr_20538_20553 = state_20517;
(statearr_20538_20553[(1)] = cljs.core.first.call(null,(state_20517[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20554 = state_20517;
state_20517 = G__20554;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$state_machine__18684__auto__ = function(state_20517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18684__auto____1.call(this,state_20517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18684__auto____0;
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18684__auto____1;
return cljs$core$async$state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___20541,out))
})();
var state__18759__auto__ = (function (){var statearr_20539 = f__18758__auto__.call(null);
(statearr_20539[(6)] = c__18757__auto___20541);

return statearr_20539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___20541,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20556 = arguments.length;
switch (G__20556) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18757__auto___20623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___20623,out){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___20623,out){
return (function (state_20594){
var state_val_20595 = (state_20594[(1)]);
if((state_val_20595 === (7))){
var inst_20590 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20596_20624 = state_20594__$1;
(statearr_20596_20624[(2)] = inst_20590);

(statearr_20596_20624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (1))){
var inst_20557 = (new Array(n));
var inst_20558 = inst_20557;
var inst_20559 = (0);
var state_20594__$1 = (function (){var statearr_20597 = state_20594;
(statearr_20597[(7)] = inst_20558);

(statearr_20597[(8)] = inst_20559);

return statearr_20597;
})();
var statearr_20598_20625 = state_20594__$1;
(statearr_20598_20625[(2)] = null);

(statearr_20598_20625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (4))){
var inst_20562 = (state_20594[(9)]);
var inst_20562__$1 = (state_20594[(2)]);
var inst_20563 = (inst_20562__$1 == null);
var inst_20564 = cljs.core.not.call(null,inst_20563);
var state_20594__$1 = (function (){var statearr_20599 = state_20594;
(statearr_20599[(9)] = inst_20562__$1);

return statearr_20599;
})();
if(inst_20564){
var statearr_20600_20626 = state_20594__$1;
(statearr_20600_20626[(1)] = (5));

} else {
var statearr_20601_20627 = state_20594__$1;
(statearr_20601_20627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (15))){
var inst_20584 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20602_20628 = state_20594__$1;
(statearr_20602_20628[(2)] = inst_20584);

(statearr_20602_20628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (13))){
var state_20594__$1 = state_20594;
var statearr_20603_20629 = state_20594__$1;
(statearr_20603_20629[(2)] = null);

(statearr_20603_20629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (6))){
var inst_20559 = (state_20594[(8)]);
var inst_20580 = (inst_20559 > (0));
var state_20594__$1 = state_20594;
if(cljs.core.truth_(inst_20580)){
var statearr_20604_20630 = state_20594__$1;
(statearr_20604_20630[(1)] = (12));

} else {
var statearr_20605_20631 = state_20594__$1;
(statearr_20605_20631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (3))){
var inst_20592 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20594__$1,inst_20592);
} else {
if((state_val_20595 === (12))){
var inst_20558 = (state_20594[(7)]);
var inst_20582 = cljs.core.vec.call(null,inst_20558);
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20594__$1,(15),out,inst_20582);
} else {
if((state_val_20595 === (2))){
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20594__$1,(4),ch);
} else {
if((state_val_20595 === (11))){
var inst_20574 = (state_20594[(2)]);
var inst_20575 = (new Array(n));
var inst_20558 = inst_20575;
var inst_20559 = (0);
var state_20594__$1 = (function (){var statearr_20606 = state_20594;
(statearr_20606[(10)] = inst_20574);

(statearr_20606[(7)] = inst_20558);

(statearr_20606[(8)] = inst_20559);

return statearr_20606;
})();
var statearr_20607_20632 = state_20594__$1;
(statearr_20607_20632[(2)] = null);

(statearr_20607_20632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (9))){
var inst_20558 = (state_20594[(7)]);
var inst_20572 = cljs.core.vec.call(null,inst_20558);
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20594__$1,(11),out,inst_20572);
} else {
if((state_val_20595 === (5))){
var inst_20567 = (state_20594[(11)]);
var inst_20562 = (state_20594[(9)]);
var inst_20558 = (state_20594[(7)]);
var inst_20559 = (state_20594[(8)]);
var inst_20566 = (inst_20558[inst_20559] = inst_20562);
var inst_20567__$1 = (inst_20559 + (1));
var inst_20568 = (inst_20567__$1 < n);
var state_20594__$1 = (function (){var statearr_20608 = state_20594;
(statearr_20608[(12)] = inst_20566);

(statearr_20608[(11)] = inst_20567__$1);

return statearr_20608;
})();
if(cljs.core.truth_(inst_20568)){
var statearr_20609_20633 = state_20594__$1;
(statearr_20609_20633[(1)] = (8));

} else {
var statearr_20610_20634 = state_20594__$1;
(statearr_20610_20634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (14))){
var inst_20587 = (state_20594[(2)]);
var inst_20588 = cljs.core.async.close_BANG_.call(null,out);
var state_20594__$1 = (function (){var statearr_20612 = state_20594;
(statearr_20612[(13)] = inst_20587);

return statearr_20612;
})();
var statearr_20613_20635 = state_20594__$1;
(statearr_20613_20635[(2)] = inst_20588);

(statearr_20613_20635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (10))){
var inst_20578 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20614_20636 = state_20594__$1;
(statearr_20614_20636[(2)] = inst_20578);

(statearr_20614_20636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (8))){
var inst_20567 = (state_20594[(11)]);
var inst_20558 = (state_20594[(7)]);
var tmp20611 = inst_20558;
var inst_20558__$1 = tmp20611;
var inst_20559 = inst_20567;
var state_20594__$1 = (function (){var statearr_20615 = state_20594;
(statearr_20615[(7)] = inst_20558__$1);

(statearr_20615[(8)] = inst_20559);

return statearr_20615;
})();
var statearr_20616_20637 = state_20594__$1;
(statearr_20616_20637[(2)] = null);

(statearr_20616_20637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto___20623,out))
;
return ((function (switch__18683__auto__,c__18757__auto___20623,out){
return (function() {
var cljs$core$async$state_machine__18684__auto__ = null;
var cljs$core$async$state_machine__18684__auto____0 = (function (){
var statearr_20617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20617[(0)] = cljs$core$async$state_machine__18684__auto__);

(statearr_20617[(1)] = (1));

return statearr_20617;
});
var cljs$core$async$state_machine__18684__auto____1 = (function (state_20594){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_20594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e20618){var ex__18687__auto__ = e20618;
var statearr_20619_20638 = state_20594;
(statearr_20619_20638[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_20594[(4)]))){
var statearr_20620_20639 = state_20594;
(statearr_20620_20639[(1)] = cljs.core.first.call(null,(state_20594[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20640 = state_20594;
state_20594 = G__20640;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$state_machine__18684__auto__ = function(state_20594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18684__auto____1.call(this,state_20594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18684__auto____0;
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18684__auto____1;
return cljs$core$async$state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___20623,out))
})();
var state__18759__auto__ = (function (){var statearr_20621 = f__18758__auto__.call(null);
(statearr_20621[(6)] = c__18757__auto___20623);

return statearr_20621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___20623,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20642 = arguments.length;
switch (G__20642) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18757__auto___20713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18757__auto___20713,out){
return (function (){
var f__18758__auto__ = (function (){var switch__18683__auto__ = ((function (c__18757__auto___20713,out){
return (function (state_20684){
var state_val_20685 = (state_20684[(1)]);
if((state_val_20685 === (7))){
var inst_20680 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20686_20714 = state_20684__$1;
(statearr_20686_20714[(2)] = inst_20680);

(statearr_20686_20714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (1))){
var inst_20643 = [];
var inst_20644 = inst_20643;
var inst_20645 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20684__$1 = (function (){var statearr_20687 = state_20684;
(statearr_20687[(7)] = inst_20645);

(statearr_20687[(8)] = inst_20644);

return statearr_20687;
})();
var statearr_20688_20715 = state_20684__$1;
(statearr_20688_20715[(2)] = null);

(statearr_20688_20715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (4))){
var inst_20648 = (state_20684[(9)]);
var inst_20648__$1 = (state_20684[(2)]);
var inst_20649 = (inst_20648__$1 == null);
var inst_20650 = cljs.core.not.call(null,inst_20649);
var state_20684__$1 = (function (){var statearr_20689 = state_20684;
(statearr_20689[(9)] = inst_20648__$1);

return statearr_20689;
})();
if(inst_20650){
var statearr_20690_20716 = state_20684__$1;
(statearr_20690_20716[(1)] = (5));

} else {
var statearr_20691_20717 = state_20684__$1;
(statearr_20691_20717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (15))){
var inst_20674 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20692_20718 = state_20684__$1;
(statearr_20692_20718[(2)] = inst_20674);

(statearr_20692_20718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (13))){
var state_20684__$1 = state_20684;
var statearr_20693_20719 = state_20684__$1;
(statearr_20693_20719[(2)] = null);

(statearr_20693_20719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (6))){
var inst_20644 = (state_20684[(8)]);
var inst_20669 = inst_20644.length;
var inst_20670 = (inst_20669 > (0));
var state_20684__$1 = state_20684;
if(cljs.core.truth_(inst_20670)){
var statearr_20694_20720 = state_20684__$1;
(statearr_20694_20720[(1)] = (12));

} else {
var statearr_20695_20721 = state_20684__$1;
(statearr_20695_20721[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (3))){
var inst_20682 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20684__$1,inst_20682);
} else {
if((state_val_20685 === (12))){
var inst_20644 = (state_20684[(8)]);
var inst_20672 = cljs.core.vec.call(null,inst_20644);
var state_20684__$1 = state_20684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20684__$1,(15),out,inst_20672);
} else {
if((state_val_20685 === (2))){
var state_20684__$1 = state_20684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20684__$1,(4),ch);
} else {
if((state_val_20685 === (11))){
var inst_20648 = (state_20684[(9)]);
var inst_20652 = (state_20684[(10)]);
var inst_20662 = (state_20684[(2)]);
var inst_20663 = [];
var inst_20664 = inst_20663.push(inst_20648);
var inst_20644 = inst_20663;
var inst_20645 = inst_20652;
var state_20684__$1 = (function (){var statearr_20696 = state_20684;
(statearr_20696[(7)] = inst_20645);

(statearr_20696[(11)] = inst_20662);

(statearr_20696[(12)] = inst_20664);

(statearr_20696[(8)] = inst_20644);

return statearr_20696;
})();
var statearr_20697_20722 = state_20684__$1;
(statearr_20697_20722[(2)] = null);

(statearr_20697_20722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (9))){
var inst_20644 = (state_20684[(8)]);
var inst_20660 = cljs.core.vec.call(null,inst_20644);
var state_20684__$1 = state_20684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20684__$1,(11),out,inst_20660);
} else {
if((state_val_20685 === (5))){
var inst_20645 = (state_20684[(7)]);
var inst_20648 = (state_20684[(9)]);
var inst_20652 = (state_20684[(10)]);
var inst_20652__$1 = f.call(null,inst_20648);
var inst_20653 = cljs.core._EQ_.call(null,inst_20652__$1,inst_20645);
var inst_20654 = cljs.core.keyword_identical_QMARK_.call(null,inst_20645,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20655 = ((inst_20653) || (inst_20654));
var state_20684__$1 = (function (){var statearr_20698 = state_20684;
(statearr_20698[(10)] = inst_20652__$1);

return statearr_20698;
})();
if(cljs.core.truth_(inst_20655)){
var statearr_20699_20723 = state_20684__$1;
(statearr_20699_20723[(1)] = (8));

} else {
var statearr_20700_20724 = state_20684__$1;
(statearr_20700_20724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (14))){
var inst_20677 = (state_20684[(2)]);
var inst_20678 = cljs.core.async.close_BANG_.call(null,out);
var state_20684__$1 = (function (){var statearr_20702 = state_20684;
(statearr_20702[(13)] = inst_20677);

return statearr_20702;
})();
var statearr_20703_20725 = state_20684__$1;
(statearr_20703_20725[(2)] = inst_20678);

(statearr_20703_20725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (10))){
var inst_20667 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20704_20726 = state_20684__$1;
(statearr_20704_20726[(2)] = inst_20667);

(statearr_20704_20726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (8))){
var inst_20648 = (state_20684[(9)]);
var inst_20644 = (state_20684[(8)]);
var inst_20652 = (state_20684[(10)]);
var inst_20657 = inst_20644.push(inst_20648);
var tmp20701 = inst_20644;
var inst_20644__$1 = tmp20701;
var inst_20645 = inst_20652;
var state_20684__$1 = (function (){var statearr_20705 = state_20684;
(statearr_20705[(7)] = inst_20645);

(statearr_20705[(14)] = inst_20657);

(statearr_20705[(8)] = inst_20644__$1);

return statearr_20705;
})();
var statearr_20706_20727 = state_20684__$1;
(statearr_20706_20727[(2)] = null);

(statearr_20706_20727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__18757__auto___20713,out))
;
return ((function (switch__18683__auto__,c__18757__auto___20713,out){
return (function() {
var cljs$core$async$state_machine__18684__auto__ = null;
var cljs$core$async$state_machine__18684__auto____0 = (function (){
var statearr_20707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20707[(0)] = cljs$core$async$state_machine__18684__auto__);

(statearr_20707[(1)] = (1));

return statearr_20707;
});
var cljs$core$async$state_machine__18684__auto____1 = (function (state_20684){
while(true){
var ret_value__18685__auto__ = (function (){try{while(true){
var result__18686__auto__ = switch__18683__auto__.call(null,state_20684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18686__auto__;
}
break;
}
}catch (e20708){var ex__18687__auto__ = e20708;
var statearr_20709_20728 = state_20684;
(statearr_20709_20728[(2)] = ex__18687__auto__);


if(cljs.core.seq.call(null,(state_20684[(4)]))){
var statearr_20710_20729 = state_20684;
(statearr_20710_20729[(1)] = cljs.core.first.call(null,(state_20684[(4)])));

} else {
throw ex__18687__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18685__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20730 = state_20684;
state_20684 = G__20730;
continue;
} else {
return ret_value__18685__auto__;
}
break;
}
});
cljs$core$async$state_machine__18684__auto__ = function(state_20684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18684__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18684__auto____1.call(this,state_20684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18684__auto____0;
cljs$core$async$state_machine__18684__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18684__auto____1;
return cljs$core$async$state_machine__18684__auto__;
})()
;})(switch__18683__auto__,c__18757__auto___20713,out))
})();
var state__18759__auto__ = (function (){var statearr_20711 = f__18758__auto__.call(null);
(statearr_20711[(6)] = c__18757__auto___20713);

return statearr_20711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18759__auto__);
});})(c__18757__auto___20713,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
