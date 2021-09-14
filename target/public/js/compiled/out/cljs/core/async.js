// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28489 = [];
var len__25738__auto___28495 = arguments.length;
var i__25739__auto___28496 = (0);
while(true){
if((i__25739__auto___28496 < len__25738__auto___28495)){
args28489.push((arguments[i__25739__auto___28496]));

var G__28497 = (i__25739__auto___28496 + (1));
i__25739__auto___28496 = G__28497;
continue;
} else {
}
break;
}

var G__28491 = args28489.length;
switch (G__28491) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28489.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28492 = (function (f,blockable,meta28493){
this.f = f;
this.blockable = blockable;
this.meta28493 = meta28493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28494,meta28493__$1){
var self__ = this;
var _28494__$1 = this;
return (new cljs.core.async.t_cljs$core$async28492(self__.f,self__.blockable,meta28493__$1));
});

cljs.core.async.t_cljs$core$async28492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28494){
var self__ = this;
var _28494__$1 = this;
return self__.meta28493;
});

cljs.core.async.t_cljs$core$async28492.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28493","meta28493",-1091759806,null)], null);
});

cljs.core.async.t_cljs$core$async28492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28492";

cljs.core.async.t_cljs$core$async28492.cljs$lang$ctorPrWriter = (function (this__25269__auto__,writer__25270__auto__,opt__25271__auto__){
return cljs.core._write.call(null,writer__25270__auto__,"cljs.core.async/t_cljs$core$async28492");
});

cljs.core.async.__GT_t_cljs$core$async28492 = (function cljs$core$async$__GT_t_cljs$core$async28492(f__$1,blockable__$1,meta28493){
return (new cljs.core.async.t_cljs$core$async28492(f__$1,blockable__$1,meta28493));
});

}

return (new cljs.core.async.t_cljs$core$async28492(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args28501 = [];
var len__25738__auto___28504 = arguments.length;
var i__25739__auto___28505 = (0);
while(true){
if((i__25739__auto___28505 < len__25738__auto___28504)){
args28501.push((arguments[i__25739__auto___28505]));

var G__28506 = (i__25739__auto___28505 + (1));
i__25739__auto___28505 = G__28506;
continue;
} else {
}
break;
}

var G__28503 = args28501.length;
switch (G__28503) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28501.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args28508 = [];
var len__25738__auto___28511 = arguments.length;
var i__25739__auto___28512 = (0);
while(true){
if((i__25739__auto___28512 < len__25738__auto___28511)){
args28508.push((arguments[i__25739__auto___28512]));

var G__28513 = (i__25739__auto___28512 + (1));
i__25739__auto___28512 = G__28513;
continue;
} else {
}
break;
}

var G__28510 = args28508.length;
switch (G__28510) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28508.length)].join('')));

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
var args28515 = [];
var len__25738__auto___28518 = arguments.length;
var i__25739__auto___28519 = (0);
while(true){
if((i__25739__auto___28519 < len__25738__auto___28518)){
args28515.push((arguments[i__25739__auto___28519]));

var G__28520 = (i__25739__auto___28519 + (1));
i__25739__auto___28519 = G__28520;
continue;
} else {
}
break;
}

var G__28517 = args28515.length;
switch (G__28517) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28515.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28522 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28522);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28522,ret){
return (function (){
return fn1.call(null,val_28522);
});})(val_28522,ret))
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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28523 = [];
var len__25738__auto___28526 = arguments.length;
var i__25739__auto___28527 = (0);
while(true){
if((i__25739__auto___28527 < len__25738__auto___28526)){
args28523.push((arguments[i__25739__auto___28527]));

var G__28528 = (i__25739__auto___28527 + (1));
i__25739__auto___28527 = G__28528;
continue;
} else {
}
break;
}

var G__28525 = args28523.length;
switch (G__28525) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28523.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25578__auto___28530 = n;
var x_28531 = (0);
while(true){
if((x_28531 < n__25578__auto___28530)){
(a[x_28531] = (0));

var G__28532 = (x_28531 + (1));
x_28531 = G__28532;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28533 = (i + (1));
i = G__28533;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28537 = (function (alt_flag,flag,meta28538){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28538 = meta28538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28539,meta28538__$1){
var self__ = this;
var _28539__$1 = this;
return (new cljs.core.async.t_cljs$core$async28537(self__.alt_flag,self__.flag,meta28538__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28539){
var self__ = this;
var _28539__$1 = this;
return self__.meta28538;
});})(flag))
;

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28537.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28538","meta28538",-730959098,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28537";

cljs.core.async.t_cljs$core$async28537.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25269__auto__,writer__25270__auto__,opt__25271__auto__){
return cljs.core._write.call(null,writer__25270__auto__,"cljs.core.async/t_cljs$core$async28537");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28537 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28537(alt_flag__$1,flag__$1,meta28538){
return (new cljs.core.async.t_cljs$core$async28537(alt_flag__$1,flag__$1,meta28538));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28537(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28543 = (function (alt_handler,flag,cb,meta28544){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28544 = meta28544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28545,meta28544__$1){
var self__ = this;
var _28545__$1 = this;
return (new cljs.core.async.t_cljs$core$async28543(self__.alt_handler,self__.flag,self__.cb,meta28544__$1));
});

cljs.core.async.t_cljs$core$async28543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28545){
var self__ = this;
var _28545__$1 = this;
return self__.meta28544;
});

cljs.core.async.t_cljs$core$async28543.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28543.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28544","meta28544",1284138740,null)], null);
});

cljs.core.async.t_cljs$core$async28543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28543";

cljs.core.async.t_cljs$core$async28543.cljs$lang$ctorPrWriter = (function (this__25269__auto__,writer__25270__auto__,opt__25271__auto__){
return cljs.core._write.call(null,writer__25270__auto__,"cljs.core.async/t_cljs$core$async28543");
});

cljs.core.async.__GT_t_cljs$core$async28543 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28543(alt_handler__$1,flag__$1,cb__$1,meta28544){
return (new cljs.core.async.t_cljs$core$async28543(alt_handler__$1,flag__$1,cb__$1,meta28544));
});

}

return (new cljs.core.async.t_cljs$core$async28543(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__28546_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28546_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28547_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28547_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24663__auto__ = wport;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28548 = (i + (1));
i = G__28548;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24663__auto__ = ret;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24651__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24651__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24651__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__25745__auto__ = [];
var len__25738__auto___28554 = arguments.length;
var i__25739__auto___28555 = (0);
while(true){
if((i__25739__auto___28555 < len__25738__auto___28554)){
args__25745__auto__.push((arguments[i__25739__auto___28555]));

var G__28556 = (i__25739__auto___28555 + (1));
i__25739__auto___28555 = G__28556;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((1) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25746__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28551){
var map__28552 = p__28551;
var map__28552__$1 = ((((!((map__28552 == null)))?((((map__28552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28552):map__28552);
var opts = map__28552__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28549){
var G__28550 = cljs.core.first.call(null,seq28549);
var seq28549__$1 = cljs.core.next.call(null,seq28549);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28550,seq28549__$1);
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
var args28557 = [];
var len__25738__auto___28607 = arguments.length;
var i__25739__auto___28608 = (0);
while(true){
if((i__25739__auto___28608 < len__25738__auto___28607)){
args28557.push((arguments[i__25739__auto___28608]));

var G__28609 = (i__25739__auto___28608 + (1));
i__25739__auto___28608 = G__28609;
continue;
} else {
}
break;
}

var G__28559 = args28557.length;
switch (G__28559) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28557.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28444__auto___28611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___28611){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___28611){
return (function (state_28583){
var state_val_28584 = (state_28583[(1)]);
if((state_val_28584 === (7))){
var inst_28579 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
var statearr_28585_28612 = state_28583__$1;
(statearr_28585_28612[(2)] = inst_28579);

(statearr_28585_28612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (1))){
var state_28583__$1 = state_28583;
var statearr_28586_28613 = state_28583__$1;
(statearr_28586_28613[(2)] = null);

(statearr_28586_28613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (4))){
var inst_28562 = (state_28583[(7)]);
var inst_28562__$1 = (state_28583[(2)]);
var inst_28563 = (inst_28562__$1 == null);
var state_28583__$1 = (function (){var statearr_28587 = state_28583;
(statearr_28587[(7)] = inst_28562__$1);

return statearr_28587;
})();
if(cljs.core.truth_(inst_28563)){
var statearr_28588_28614 = state_28583__$1;
(statearr_28588_28614[(1)] = (5));

} else {
var statearr_28589_28615 = state_28583__$1;
(statearr_28589_28615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (13))){
var state_28583__$1 = state_28583;
var statearr_28590_28616 = state_28583__$1;
(statearr_28590_28616[(2)] = null);

(statearr_28590_28616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (6))){
var inst_28562 = (state_28583[(7)]);
var state_28583__$1 = state_28583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28583__$1,(11),to,inst_28562);
} else {
if((state_val_28584 === (3))){
var inst_28581 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28583__$1,inst_28581);
} else {
if((state_val_28584 === (12))){
var state_28583__$1 = state_28583;
var statearr_28591_28617 = state_28583__$1;
(statearr_28591_28617[(2)] = null);

(statearr_28591_28617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (2))){
var state_28583__$1 = state_28583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28583__$1,(4),from);
} else {
if((state_val_28584 === (11))){
var inst_28572 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
if(cljs.core.truth_(inst_28572)){
var statearr_28592_28618 = state_28583__$1;
(statearr_28592_28618[(1)] = (12));

} else {
var statearr_28593_28619 = state_28583__$1;
(statearr_28593_28619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (9))){
var state_28583__$1 = state_28583;
var statearr_28594_28620 = state_28583__$1;
(statearr_28594_28620[(2)] = null);

(statearr_28594_28620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (5))){
var state_28583__$1 = state_28583;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28595_28621 = state_28583__$1;
(statearr_28595_28621[(1)] = (8));

} else {
var statearr_28596_28622 = state_28583__$1;
(statearr_28596_28622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (14))){
var inst_28577 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
var statearr_28597_28623 = state_28583__$1;
(statearr_28597_28623[(2)] = inst_28577);

(statearr_28597_28623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (10))){
var inst_28569 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
var statearr_28598_28624 = state_28583__$1;
(statearr_28598_28624[(2)] = inst_28569);

(statearr_28598_28624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (8))){
var inst_28566 = cljs.core.async.close_BANG_.call(null,to);
var state_28583__$1 = state_28583;
var statearr_28599_28625 = state_28583__$1;
(statearr_28599_28625[(2)] = inst_28566);

(statearr_28599_28625[(1)] = (10));


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
});})(c__28444__auto___28611))
;
return ((function (switch__28332__auto__,c__28444__auto___28611){
return (function() {
var cljs$core$async$state_machine__28333__auto__ = null;
var cljs$core$async$state_machine__28333__auto____0 = (function (){
var statearr_28603 = [null,null,null,null,null,null,null,null];
(statearr_28603[(0)] = cljs$core$async$state_machine__28333__auto__);

(statearr_28603[(1)] = (1));

return statearr_28603;
});
var cljs$core$async$state_machine__28333__auto____1 = (function (state_28583){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_28583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e28604){if((e28604 instanceof Object)){
var ex__28336__auto__ = e28604;
var statearr_28605_28626 = state_28583;
(statearr_28605_28626[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28627 = state_28583;
state_28583 = G__28627;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$state_machine__28333__auto__ = function(state_28583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28333__auto____1.call(this,state_28583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28333__auto____0;
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28333__auto____1;
return cljs$core$async$state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___28611))
})();
var state__28446__auto__ = (function (){var statearr_28606 = f__28445__auto__.call(null);
(statearr_28606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___28611);

return statearr_28606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___28611))
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
return (function (p__28815){
var vec__28816 = p__28815;
var v = cljs.core.nth.call(null,vec__28816,(0),null);
var p = cljs.core.nth.call(null,vec__28816,(1),null);
var job = vec__28816;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28444__auto___29002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___29002,res,vec__28816,v,p,job,jobs,results){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___29002,res,vec__28816,v,p,job,jobs,results){
return (function (state_28823){
var state_val_28824 = (state_28823[(1)]);
if((state_val_28824 === (1))){
var state_28823__$1 = state_28823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28823__$1,(2),res,v);
} else {
if((state_val_28824 === (2))){
var inst_28820 = (state_28823[(2)]);
var inst_28821 = cljs.core.async.close_BANG_.call(null,res);
var state_28823__$1 = (function (){var statearr_28825 = state_28823;
(statearr_28825[(7)] = inst_28820);

return statearr_28825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28823__$1,inst_28821);
} else {
return null;
}
}
});})(c__28444__auto___29002,res,vec__28816,v,p,job,jobs,results))
;
return ((function (switch__28332__auto__,c__28444__auto___29002,res,vec__28816,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0 = (function (){
var statearr_28829 = [null,null,null,null,null,null,null,null];
(statearr_28829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__);

(statearr_28829[(1)] = (1));

return statearr_28829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1 = (function (state_28823){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_28823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e28830){if((e28830 instanceof Object)){
var ex__28336__auto__ = e28830;
var statearr_28831_29003 = state_28823;
(statearr_28831_29003[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29004 = state_28823;
state_28823 = G__29004;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__ = function(state_28823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1.call(this,state_28823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___29002,res,vec__28816,v,p,job,jobs,results))
})();
var state__28446__auto__ = (function (){var statearr_28832 = f__28445__auto__.call(null);
(statearr_28832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___29002);

return statearr_28832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___29002,res,vec__28816,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28833){
var vec__28834 = p__28833;
var v = cljs.core.nth.call(null,vec__28834,(0),null);
var p = cljs.core.nth.call(null,vec__28834,(1),null);
var job = vec__28834;
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
var n__25578__auto___29005 = n;
var __29006 = (0);
while(true){
if((__29006 < n__25578__auto___29005)){
var G__28837_29007 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28837_29007) {
case "compute":
var c__28444__auto___29009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29006,c__28444__auto___29009,G__28837_29007,n__25578__auto___29005,jobs,results,process,async){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (__29006,c__28444__auto___29009,G__28837_29007,n__25578__auto___29005,jobs,results,process,async){
return (function (state_28850){
var state_val_28851 = (state_28850[(1)]);
if((state_val_28851 === (1))){
var state_28850__$1 = state_28850;
var statearr_28852_29010 = state_28850__$1;
(statearr_28852_29010[(2)] = null);

(statearr_28852_29010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (2))){
var state_28850__$1 = state_28850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28850__$1,(4),jobs);
} else {
if((state_val_28851 === (3))){
var inst_28848 = (state_28850[(2)]);
var state_28850__$1 = state_28850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28850__$1,inst_28848);
} else {
if((state_val_28851 === (4))){
var inst_28840 = (state_28850[(2)]);
var inst_28841 = process.call(null,inst_28840);
var state_28850__$1 = state_28850;
if(cljs.core.truth_(inst_28841)){
var statearr_28853_29011 = state_28850__$1;
(statearr_28853_29011[(1)] = (5));

} else {
var statearr_28854_29012 = state_28850__$1;
(statearr_28854_29012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (5))){
var state_28850__$1 = state_28850;
var statearr_28855_29013 = state_28850__$1;
(statearr_28855_29013[(2)] = null);

(statearr_28855_29013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (6))){
var state_28850__$1 = state_28850;
var statearr_28856_29014 = state_28850__$1;
(statearr_28856_29014[(2)] = null);

(statearr_28856_29014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (7))){
var inst_28846 = (state_28850[(2)]);
var state_28850__$1 = state_28850;
var statearr_28857_29015 = state_28850__$1;
(statearr_28857_29015[(2)] = inst_28846);

(statearr_28857_29015[(1)] = (3));


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
});})(__29006,c__28444__auto___29009,G__28837_29007,n__25578__auto___29005,jobs,results,process,async))
;
return ((function (__29006,switch__28332__auto__,c__28444__auto___29009,G__28837_29007,n__25578__auto___29005,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0 = (function (){
var statearr_28861 = [null,null,null,null,null,null,null];
(statearr_28861[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__);

(statearr_28861[(1)] = (1));

return statearr_28861;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1 = (function (state_28850){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_28850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e28862){if((e28862 instanceof Object)){
var ex__28336__auto__ = e28862;
var statearr_28863_29016 = state_28850;
(statearr_28863_29016[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29017 = state_28850;
state_28850 = G__29017;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__ = function(state_28850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1.call(this,state_28850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__;
})()
;})(__29006,switch__28332__auto__,c__28444__auto___29009,G__28837_29007,n__25578__auto___29005,jobs,results,process,async))
})();
var state__28446__auto__ = (function (){var statearr_28864 = f__28445__auto__.call(null);
(statearr_28864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___29009);

return statearr_28864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(__29006,c__28444__auto___29009,G__28837_29007,n__25578__auto___29005,jobs,results,process,async))
);


break;
case "async":
var c__28444__auto___29018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29006,c__28444__auto___29018,G__28837_29007,n__25578__auto___29005,jobs,results,process,async){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (__29006,c__28444__auto___29018,G__28837_29007,n__25578__auto___29005,jobs,results,process,async){
return (function (state_28877){
var state_val_28878 = (state_28877[(1)]);
if((state_val_28878 === (1))){
var state_28877__$1 = state_28877;
var statearr_28879_29019 = state_28877__$1;
(statearr_28879_29019[(2)] = null);

(statearr_28879_29019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (2))){
var state_28877__$1 = state_28877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28877__$1,(4),jobs);
} else {
if((state_val_28878 === (3))){
var inst_28875 = (state_28877[(2)]);
var state_28877__$1 = state_28877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28877__$1,inst_28875);
} else {
if((state_val_28878 === (4))){
var inst_28867 = (state_28877[(2)]);
var inst_28868 = async.call(null,inst_28867);
var state_28877__$1 = state_28877;
if(cljs.core.truth_(inst_28868)){
var statearr_28880_29020 = state_28877__$1;
(statearr_28880_29020[(1)] = (5));

} else {
var statearr_28881_29021 = state_28877__$1;
(statearr_28881_29021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (5))){
var state_28877__$1 = state_28877;
var statearr_28882_29022 = state_28877__$1;
(statearr_28882_29022[(2)] = null);

(statearr_28882_29022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (6))){
var state_28877__$1 = state_28877;
var statearr_28883_29023 = state_28877__$1;
(statearr_28883_29023[(2)] = null);

(statearr_28883_29023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (7))){
var inst_28873 = (state_28877[(2)]);
var state_28877__$1 = state_28877;
var statearr_28884_29024 = state_28877__$1;
(statearr_28884_29024[(2)] = inst_28873);

(statearr_28884_29024[(1)] = (3));


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
});})(__29006,c__28444__auto___29018,G__28837_29007,n__25578__auto___29005,jobs,results,process,async))
;
return ((function (__29006,switch__28332__auto__,c__28444__auto___29018,G__28837_29007,n__25578__auto___29005,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0 = (function (){
var statearr_28888 = [null,null,null,null,null,null,null];
(statearr_28888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__);

(statearr_28888[(1)] = (1));

return statearr_28888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1 = (function (state_28877){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_28877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e28889){if((e28889 instanceof Object)){
var ex__28336__auto__ = e28889;
var statearr_28890_29025 = state_28877;
(statearr_28890_29025[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29026 = state_28877;
state_28877 = G__29026;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__ = function(state_28877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1.call(this,state_28877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__;
})()
;})(__29006,switch__28332__auto__,c__28444__auto___29018,G__28837_29007,n__25578__auto___29005,jobs,results,process,async))
})();
var state__28446__auto__ = (function (){var statearr_28891 = f__28445__auto__.call(null);
(statearr_28891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___29018);

return statearr_28891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(__29006,c__28444__auto___29018,G__28837_29007,n__25578__auto___29005,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29027 = (__29006 + (1));
__29006 = G__29027;
continue;
} else {
}
break;
}

var c__28444__auto___29028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___29028,jobs,results,process,async){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___29028,jobs,results,process,async){
return (function (state_28913){
var state_val_28914 = (state_28913[(1)]);
if((state_val_28914 === (1))){
var state_28913__$1 = state_28913;
var statearr_28915_29029 = state_28913__$1;
(statearr_28915_29029[(2)] = null);

(statearr_28915_29029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28914 === (2))){
var state_28913__$1 = state_28913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28913__$1,(4),from);
} else {
if((state_val_28914 === (3))){
var inst_28911 = (state_28913[(2)]);
var state_28913__$1 = state_28913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28913__$1,inst_28911);
} else {
if((state_val_28914 === (4))){
var inst_28894 = (state_28913[(7)]);
var inst_28894__$1 = (state_28913[(2)]);
var inst_28895 = (inst_28894__$1 == null);
var state_28913__$1 = (function (){var statearr_28916 = state_28913;
(statearr_28916[(7)] = inst_28894__$1);

return statearr_28916;
})();
if(cljs.core.truth_(inst_28895)){
var statearr_28917_29030 = state_28913__$1;
(statearr_28917_29030[(1)] = (5));

} else {
var statearr_28918_29031 = state_28913__$1;
(statearr_28918_29031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28914 === (5))){
var inst_28897 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28913__$1 = state_28913;
var statearr_28919_29032 = state_28913__$1;
(statearr_28919_29032[(2)] = inst_28897);

(statearr_28919_29032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28914 === (6))){
var inst_28894 = (state_28913[(7)]);
var inst_28899 = (state_28913[(8)]);
var inst_28899__$1 = cljs.core.async.chan.call(null,(1));
var inst_28900 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28901 = [inst_28894,inst_28899__$1];
var inst_28902 = (new cljs.core.PersistentVector(null,2,(5),inst_28900,inst_28901,null));
var state_28913__$1 = (function (){var statearr_28920 = state_28913;
(statearr_28920[(8)] = inst_28899__$1);

return statearr_28920;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28913__$1,(8),jobs,inst_28902);
} else {
if((state_val_28914 === (7))){
var inst_28909 = (state_28913[(2)]);
var state_28913__$1 = state_28913;
var statearr_28921_29033 = state_28913__$1;
(statearr_28921_29033[(2)] = inst_28909);

(statearr_28921_29033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28914 === (8))){
var inst_28899 = (state_28913[(8)]);
var inst_28904 = (state_28913[(2)]);
var state_28913__$1 = (function (){var statearr_28922 = state_28913;
(statearr_28922[(9)] = inst_28904);

return statearr_28922;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28913__$1,(9),results,inst_28899);
} else {
if((state_val_28914 === (9))){
var inst_28906 = (state_28913[(2)]);
var state_28913__$1 = (function (){var statearr_28923 = state_28913;
(statearr_28923[(10)] = inst_28906);

return statearr_28923;
})();
var statearr_28924_29034 = state_28913__$1;
(statearr_28924_29034[(2)] = null);

(statearr_28924_29034[(1)] = (2));


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
});})(c__28444__auto___29028,jobs,results,process,async))
;
return ((function (switch__28332__auto__,c__28444__auto___29028,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0 = (function (){
var statearr_28928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__);

(statearr_28928[(1)] = (1));

return statearr_28928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1 = (function (state_28913){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_28913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e28929){if((e28929 instanceof Object)){
var ex__28336__auto__ = e28929;
var statearr_28930_29035 = state_28913;
(statearr_28930_29035[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29036 = state_28913;
state_28913 = G__29036;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__ = function(state_28913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1.call(this,state_28913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___29028,jobs,results,process,async))
})();
var state__28446__auto__ = (function (){var statearr_28931 = f__28445__auto__.call(null);
(statearr_28931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___29028);

return statearr_28931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___29028,jobs,results,process,async))
);


var c__28444__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto__,jobs,results,process,async){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto__,jobs,results,process,async){
return (function (state_28969){
var state_val_28970 = (state_28969[(1)]);
if((state_val_28970 === (7))){
var inst_28965 = (state_28969[(2)]);
var state_28969__$1 = state_28969;
var statearr_28971_29037 = state_28969__$1;
(statearr_28971_29037[(2)] = inst_28965);

(statearr_28971_29037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (20))){
var state_28969__$1 = state_28969;
var statearr_28972_29038 = state_28969__$1;
(statearr_28972_29038[(2)] = null);

(statearr_28972_29038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (1))){
var state_28969__$1 = state_28969;
var statearr_28973_29039 = state_28969__$1;
(statearr_28973_29039[(2)] = null);

(statearr_28973_29039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (4))){
var inst_28934 = (state_28969[(7)]);
var inst_28934__$1 = (state_28969[(2)]);
var inst_28935 = (inst_28934__$1 == null);
var state_28969__$1 = (function (){var statearr_28974 = state_28969;
(statearr_28974[(7)] = inst_28934__$1);

return statearr_28974;
})();
if(cljs.core.truth_(inst_28935)){
var statearr_28975_29040 = state_28969__$1;
(statearr_28975_29040[(1)] = (5));

} else {
var statearr_28976_29041 = state_28969__$1;
(statearr_28976_29041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (15))){
var inst_28947 = (state_28969[(8)]);
var state_28969__$1 = state_28969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28969__$1,(18),to,inst_28947);
} else {
if((state_val_28970 === (21))){
var inst_28960 = (state_28969[(2)]);
var state_28969__$1 = state_28969;
var statearr_28977_29042 = state_28969__$1;
(statearr_28977_29042[(2)] = inst_28960);

(statearr_28977_29042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (13))){
var inst_28962 = (state_28969[(2)]);
var state_28969__$1 = (function (){var statearr_28978 = state_28969;
(statearr_28978[(9)] = inst_28962);

return statearr_28978;
})();
var statearr_28979_29043 = state_28969__$1;
(statearr_28979_29043[(2)] = null);

(statearr_28979_29043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (6))){
var inst_28934 = (state_28969[(7)]);
var state_28969__$1 = state_28969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28969__$1,(11),inst_28934);
} else {
if((state_val_28970 === (17))){
var inst_28955 = (state_28969[(2)]);
var state_28969__$1 = state_28969;
if(cljs.core.truth_(inst_28955)){
var statearr_28980_29044 = state_28969__$1;
(statearr_28980_29044[(1)] = (19));

} else {
var statearr_28981_29045 = state_28969__$1;
(statearr_28981_29045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (3))){
var inst_28967 = (state_28969[(2)]);
var state_28969__$1 = state_28969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28969__$1,inst_28967);
} else {
if((state_val_28970 === (12))){
var inst_28944 = (state_28969[(10)]);
var state_28969__$1 = state_28969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28969__$1,(14),inst_28944);
} else {
if((state_val_28970 === (2))){
var state_28969__$1 = state_28969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28969__$1,(4),results);
} else {
if((state_val_28970 === (19))){
var state_28969__$1 = state_28969;
var statearr_28982_29046 = state_28969__$1;
(statearr_28982_29046[(2)] = null);

(statearr_28982_29046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (11))){
var inst_28944 = (state_28969[(2)]);
var state_28969__$1 = (function (){var statearr_28983 = state_28969;
(statearr_28983[(10)] = inst_28944);

return statearr_28983;
})();
var statearr_28984_29047 = state_28969__$1;
(statearr_28984_29047[(2)] = null);

(statearr_28984_29047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (9))){
var state_28969__$1 = state_28969;
var statearr_28985_29048 = state_28969__$1;
(statearr_28985_29048[(2)] = null);

(statearr_28985_29048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (5))){
var state_28969__$1 = state_28969;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28986_29049 = state_28969__$1;
(statearr_28986_29049[(1)] = (8));

} else {
var statearr_28987_29050 = state_28969__$1;
(statearr_28987_29050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (14))){
var inst_28949 = (state_28969[(11)]);
var inst_28947 = (state_28969[(8)]);
var inst_28947__$1 = (state_28969[(2)]);
var inst_28948 = (inst_28947__$1 == null);
var inst_28949__$1 = cljs.core.not.call(null,inst_28948);
var state_28969__$1 = (function (){var statearr_28988 = state_28969;
(statearr_28988[(11)] = inst_28949__$1);

(statearr_28988[(8)] = inst_28947__$1);

return statearr_28988;
})();
if(inst_28949__$1){
var statearr_28989_29051 = state_28969__$1;
(statearr_28989_29051[(1)] = (15));

} else {
var statearr_28990_29052 = state_28969__$1;
(statearr_28990_29052[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (16))){
var inst_28949 = (state_28969[(11)]);
var state_28969__$1 = state_28969;
var statearr_28991_29053 = state_28969__$1;
(statearr_28991_29053[(2)] = inst_28949);

(statearr_28991_29053[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (10))){
var inst_28941 = (state_28969[(2)]);
var state_28969__$1 = state_28969;
var statearr_28992_29054 = state_28969__$1;
(statearr_28992_29054[(2)] = inst_28941);

(statearr_28992_29054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (18))){
var inst_28952 = (state_28969[(2)]);
var state_28969__$1 = state_28969;
var statearr_28993_29055 = state_28969__$1;
(statearr_28993_29055[(2)] = inst_28952);

(statearr_28993_29055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (8))){
var inst_28938 = cljs.core.async.close_BANG_.call(null,to);
var state_28969__$1 = state_28969;
var statearr_28994_29056 = state_28969__$1;
(statearr_28994_29056[(2)] = inst_28938);

(statearr_28994_29056[(1)] = (10));


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
});})(c__28444__auto__,jobs,results,process,async))
;
return ((function (switch__28332__auto__,c__28444__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0 = (function (){
var statearr_28998 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__);

(statearr_28998[(1)] = (1));

return statearr_28998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1 = (function (state_28969){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_28969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e28999){if((e28999 instanceof Object)){
var ex__28336__auto__ = e28999;
var statearr_29000_29057 = state_28969;
(statearr_29000_29057[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29058 = state_28969;
state_28969 = G__29058;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__ = function(state_28969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1.call(this,state_28969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28333__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto__,jobs,results,process,async))
})();
var state__28446__auto__ = (function (){var statearr_29001 = f__28445__auto__.call(null);
(statearr_29001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto__);

return statearr_29001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto__,jobs,results,process,async))
);

return c__28444__auto__;
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
var args29059 = [];
var len__25738__auto___29062 = arguments.length;
var i__25739__auto___29063 = (0);
while(true){
if((i__25739__auto___29063 < len__25738__auto___29062)){
args29059.push((arguments[i__25739__auto___29063]));

var G__29064 = (i__25739__auto___29063 + (1));
i__25739__auto___29063 = G__29064;
continue;
} else {
}
break;
}

var G__29061 = args29059.length;
switch (G__29061) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29059.length)].join('')));

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
var args29066 = [];
var len__25738__auto___29069 = arguments.length;
var i__25739__auto___29070 = (0);
while(true){
if((i__25739__auto___29070 < len__25738__auto___29069)){
args29066.push((arguments[i__25739__auto___29070]));

var G__29071 = (i__25739__auto___29070 + (1));
i__25739__auto___29070 = G__29071;
continue;
} else {
}
break;
}

var G__29068 = args29066.length;
switch (G__29068) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29066.length)].join('')));

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
var args29073 = [];
var len__25738__auto___29126 = arguments.length;
var i__25739__auto___29127 = (0);
while(true){
if((i__25739__auto___29127 < len__25738__auto___29126)){
args29073.push((arguments[i__25739__auto___29127]));

var G__29128 = (i__25739__auto___29127 + (1));
i__25739__auto___29127 = G__29128;
continue;
} else {
}
break;
}

var G__29075 = args29073.length;
switch (G__29075) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29073.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28444__auto___29130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___29130,tc,fc){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___29130,tc,fc){
return (function (state_29101){
var state_val_29102 = (state_29101[(1)]);
if((state_val_29102 === (7))){
var inst_29097 = (state_29101[(2)]);
var state_29101__$1 = state_29101;
var statearr_29103_29131 = state_29101__$1;
(statearr_29103_29131[(2)] = inst_29097);

(statearr_29103_29131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29102 === (1))){
var state_29101__$1 = state_29101;
var statearr_29104_29132 = state_29101__$1;
(statearr_29104_29132[(2)] = null);

(statearr_29104_29132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29102 === (4))){
var inst_29078 = (state_29101[(7)]);
var inst_29078__$1 = (state_29101[(2)]);
var inst_29079 = (inst_29078__$1 == null);
var state_29101__$1 = (function (){var statearr_29105 = state_29101;
(statearr_29105[(7)] = inst_29078__$1);

return statearr_29105;
})();
if(cljs.core.truth_(inst_29079)){
var statearr_29106_29133 = state_29101__$1;
(statearr_29106_29133[(1)] = (5));

} else {
var statearr_29107_29134 = state_29101__$1;
(statearr_29107_29134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29102 === (13))){
var state_29101__$1 = state_29101;
var statearr_29108_29135 = state_29101__$1;
(statearr_29108_29135[(2)] = null);

(statearr_29108_29135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29102 === (6))){
var inst_29078 = (state_29101[(7)]);
var inst_29084 = p.call(null,inst_29078);
var state_29101__$1 = state_29101;
if(cljs.core.truth_(inst_29084)){
var statearr_29109_29136 = state_29101__$1;
(statearr_29109_29136[(1)] = (9));

} else {
var statearr_29110_29137 = state_29101__$1;
(statearr_29110_29137[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29102 === (3))){
var inst_29099 = (state_29101[(2)]);
var state_29101__$1 = state_29101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29101__$1,inst_29099);
} else {
if((state_val_29102 === (12))){
var state_29101__$1 = state_29101;
var statearr_29111_29138 = state_29101__$1;
(statearr_29111_29138[(2)] = null);

(statearr_29111_29138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29102 === (2))){
var state_29101__$1 = state_29101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29101__$1,(4),ch);
} else {
if((state_val_29102 === (11))){
var inst_29078 = (state_29101[(7)]);
var inst_29088 = (state_29101[(2)]);
var state_29101__$1 = state_29101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29101__$1,(8),inst_29088,inst_29078);
} else {
if((state_val_29102 === (9))){
var state_29101__$1 = state_29101;
var statearr_29112_29139 = state_29101__$1;
(statearr_29112_29139[(2)] = tc);

(statearr_29112_29139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29102 === (5))){
var inst_29081 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29082 = cljs.core.async.close_BANG_.call(null,fc);
var state_29101__$1 = (function (){var statearr_29113 = state_29101;
(statearr_29113[(8)] = inst_29081);

return statearr_29113;
})();
var statearr_29114_29140 = state_29101__$1;
(statearr_29114_29140[(2)] = inst_29082);

(statearr_29114_29140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29102 === (14))){
var inst_29095 = (state_29101[(2)]);
var state_29101__$1 = state_29101;
var statearr_29115_29141 = state_29101__$1;
(statearr_29115_29141[(2)] = inst_29095);

(statearr_29115_29141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29102 === (10))){
var state_29101__$1 = state_29101;
var statearr_29116_29142 = state_29101__$1;
(statearr_29116_29142[(2)] = fc);

(statearr_29116_29142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29102 === (8))){
var inst_29090 = (state_29101[(2)]);
var state_29101__$1 = state_29101;
if(cljs.core.truth_(inst_29090)){
var statearr_29117_29143 = state_29101__$1;
(statearr_29117_29143[(1)] = (12));

} else {
var statearr_29118_29144 = state_29101__$1;
(statearr_29118_29144[(1)] = (13));

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
});})(c__28444__auto___29130,tc,fc))
;
return ((function (switch__28332__auto__,c__28444__auto___29130,tc,fc){
return (function() {
var cljs$core$async$state_machine__28333__auto__ = null;
var cljs$core$async$state_machine__28333__auto____0 = (function (){
var statearr_29122 = [null,null,null,null,null,null,null,null,null];
(statearr_29122[(0)] = cljs$core$async$state_machine__28333__auto__);

(statearr_29122[(1)] = (1));

return statearr_29122;
});
var cljs$core$async$state_machine__28333__auto____1 = (function (state_29101){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_29101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e29123){if((e29123 instanceof Object)){
var ex__28336__auto__ = e29123;
var statearr_29124_29145 = state_29101;
(statearr_29124_29145[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29146 = state_29101;
state_29101 = G__29146;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$state_machine__28333__auto__ = function(state_29101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28333__auto____1.call(this,state_29101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28333__auto____0;
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28333__auto____1;
return cljs$core$async$state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___29130,tc,fc))
})();
var state__28446__auto__ = (function (){var statearr_29125 = f__28445__auto__.call(null);
(statearr_29125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___29130);

return statearr_29125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___29130,tc,fc))
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
var c__28444__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto__){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto__){
return (function (state_29210){
var state_val_29211 = (state_29210[(1)]);
if((state_val_29211 === (7))){
var inst_29206 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29212_29233 = state_29210__$1;
(statearr_29212_29233[(2)] = inst_29206);

(statearr_29212_29233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (1))){
var inst_29190 = init;
var state_29210__$1 = (function (){var statearr_29213 = state_29210;
(statearr_29213[(7)] = inst_29190);

return statearr_29213;
})();
var statearr_29214_29234 = state_29210__$1;
(statearr_29214_29234[(2)] = null);

(statearr_29214_29234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (4))){
var inst_29193 = (state_29210[(8)]);
var inst_29193__$1 = (state_29210[(2)]);
var inst_29194 = (inst_29193__$1 == null);
var state_29210__$1 = (function (){var statearr_29215 = state_29210;
(statearr_29215[(8)] = inst_29193__$1);

return statearr_29215;
})();
if(cljs.core.truth_(inst_29194)){
var statearr_29216_29235 = state_29210__$1;
(statearr_29216_29235[(1)] = (5));

} else {
var statearr_29217_29236 = state_29210__$1;
(statearr_29217_29236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (6))){
var inst_29190 = (state_29210[(7)]);
var inst_29197 = (state_29210[(9)]);
var inst_29193 = (state_29210[(8)]);
var inst_29197__$1 = f.call(null,inst_29190,inst_29193);
var inst_29198 = cljs.core.reduced_QMARK_.call(null,inst_29197__$1);
var state_29210__$1 = (function (){var statearr_29218 = state_29210;
(statearr_29218[(9)] = inst_29197__$1);

return statearr_29218;
})();
if(inst_29198){
var statearr_29219_29237 = state_29210__$1;
(statearr_29219_29237[(1)] = (8));

} else {
var statearr_29220_29238 = state_29210__$1;
(statearr_29220_29238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (3))){
var inst_29208 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29210__$1,inst_29208);
} else {
if((state_val_29211 === (2))){
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29210__$1,(4),ch);
} else {
if((state_val_29211 === (9))){
var inst_29197 = (state_29210[(9)]);
var inst_29190 = inst_29197;
var state_29210__$1 = (function (){var statearr_29221 = state_29210;
(statearr_29221[(7)] = inst_29190);

return statearr_29221;
})();
var statearr_29222_29239 = state_29210__$1;
(statearr_29222_29239[(2)] = null);

(statearr_29222_29239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (5))){
var inst_29190 = (state_29210[(7)]);
var state_29210__$1 = state_29210;
var statearr_29223_29240 = state_29210__$1;
(statearr_29223_29240[(2)] = inst_29190);

(statearr_29223_29240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (10))){
var inst_29204 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29224_29241 = state_29210__$1;
(statearr_29224_29241[(2)] = inst_29204);

(statearr_29224_29241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (8))){
var inst_29197 = (state_29210[(9)]);
var inst_29200 = cljs.core.deref.call(null,inst_29197);
var state_29210__$1 = state_29210;
var statearr_29225_29242 = state_29210__$1;
(statearr_29225_29242[(2)] = inst_29200);

(statearr_29225_29242[(1)] = (10));


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
});})(c__28444__auto__))
;
return ((function (switch__28332__auto__,c__28444__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28333__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28333__auto____0 = (function (){
var statearr_29229 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29229[(0)] = cljs$core$async$reduce_$_state_machine__28333__auto__);

(statearr_29229[(1)] = (1));

return statearr_29229;
});
var cljs$core$async$reduce_$_state_machine__28333__auto____1 = (function (state_29210){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_29210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e29230){if((e29230 instanceof Object)){
var ex__28336__auto__ = e29230;
var statearr_29231_29243 = state_29210;
(statearr_29231_29243[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29244 = state_29210;
state_29210 = G__29244;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28333__auto__ = function(state_29210){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28333__auto____1.call(this,state_29210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28333__auto____0;
cljs$core$async$reduce_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28333__auto____1;
return cljs$core$async$reduce_$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto__))
})();
var state__28446__auto__ = (function (){var statearr_29232 = f__28445__auto__.call(null);
(statearr_29232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto__);

return statearr_29232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto__))
);

return c__28444__auto__;
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
var args29245 = [];
var len__25738__auto___29297 = arguments.length;
var i__25739__auto___29298 = (0);
while(true){
if((i__25739__auto___29298 < len__25738__auto___29297)){
args29245.push((arguments[i__25739__auto___29298]));

var G__29299 = (i__25739__auto___29298 + (1));
i__25739__auto___29298 = G__29299;
continue;
} else {
}
break;
}

var G__29247 = args29245.length;
switch (G__29247) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29245.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28444__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto__){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto__){
return (function (state_29272){
var state_val_29273 = (state_29272[(1)]);
if((state_val_29273 === (7))){
var inst_29254 = (state_29272[(2)]);
var state_29272__$1 = state_29272;
var statearr_29274_29301 = state_29272__$1;
(statearr_29274_29301[(2)] = inst_29254);

(statearr_29274_29301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (1))){
var inst_29248 = cljs.core.seq.call(null,coll);
var inst_29249 = inst_29248;
var state_29272__$1 = (function (){var statearr_29275 = state_29272;
(statearr_29275[(7)] = inst_29249);

return statearr_29275;
})();
var statearr_29276_29302 = state_29272__$1;
(statearr_29276_29302[(2)] = null);

(statearr_29276_29302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (4))){
var inst_29249 = (state_29272[(7)]);
var inst_29252 = cljs.core.first.call(null,inst_29249);
var state_29272__$1 = state_29272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29272__$1,(7),ch,inst_29252);
} else {
if((state_val_29273 === (13))){
var inst_29266 = (state_29272[(2)]);
var state_29272__$1 = state_29272;
var statearr_29277_29303 = state_29272__$1;
(statearr_29277_29303[(2)] = inst_29266);

(statearr_29277_29303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (6))){
var inst_29257 = (state_29272[(2)]);
var state_29272__$1 = state_29272;
if(cljs.core.truth_(inst_29257)){
var statearr_29278_29304 = state_29272__$1;
(statearr_29278_29304[(1)] = (8));

} else {
var statearr_29279_29305 = state_29272__$1;
(statearr_29279_29305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (3))){
var inst_29270 = (state_29272[(2)]);
var state_29272__$1 = state_29272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29272__$1,inst_29270);
} else {
if((state_val_29273 === (12))){
var state_29272__$1 = state_29272;
var statearr_29280_29306 = state_29272__$1;
(statearr_29280_29306[(2)] = null);

(statearr_29280_29306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (2))){
var inst_29249 = (state_29272[(7)]);
var state_29272__$1 = state_29272;
if(cljs.core.truth_(inst_29249)){
var statearr_29281_29307 = state_29272__$1;
(statearr_29281_29307[(1)] = (4));

} else {
var statearr_29282_29308 = state_29272__$1;
(statearr_29282_29308[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (11))){
var inst_29263 = cljs.core.async.close_BANG_.call(null,ch);
var state_29272__$1 = state_29272;
var statearr_29283_29309 = state_29272__$1;
(statearr_29283_29309[(2)] = inst_29263);

(statearr_29283_29309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (9))){
var state_29272__$1 = state_29272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29284_29310 = state_29272__$1;
(statearr_29284_29310[(1)] = (11));

} else {
var statearr_29285_29311 = state_29272__$1;
(statearr_29285_29311[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (5))){
var inst_29249 = (state_29272[(7)]);
var state_29272__$1 = state_29272;
var statearr_29286_29312 = state_29272__$1;
(statearr_29286_29312[(2)] = inst_29249);

(statearr_29286_29312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (10))){
var inst_29268 = (state_29272[(2)]);
var state_29272__$1 = state_29272;
var statearr_29287_29313 = state_29272__$1;
(statearr_29287_29313[(2)] = inst_29268);

(statearr_29287_29313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (8))){
var inst_29249 = (state_29272[(7)]);
var inst_29259 = cljs.core.next.call(null,inst_29249);
var inst_29249__$1 = inst_29259;
var state_29272__$1 = (function (){var statearr_29288 = state_29272;
(statearr_29288[(7)] = inst_29249__$1);

return statearr_29288;
})();
var statearr_29289_29314 = state_29272__$1;
(statearr_29289_29314[(2)] = null);

(statearr_29289_29314[(1)] = (2));


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
});})(c__28444__auto__))
;
return ((function (switch__28332__auto__,c__28444__auto__){
return (function() {
var cljs$core$async$state_machine__28333__auto__ = null;
var cljs$core$async$state_machine__28333__auto____0 = (function (){
var statearr_29293 = [null,null,null,null,null,null,null,null];
(statearr_29293[(0)] = cljs$core$async$state_machine__28333__auto__);

(statearr_29293[(1)] = (1));

return statearr_29293;
});
var cljs$core$async$state_machine__28333__auto____1 = (function (state_29272){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_29272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e29294){if((e29294 instanceof Object)){
var ex__28336__auto__ = e29294;
var statearr_29295_29315 = state_29272;
(statearr_29295_29315[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29316 = state_29272;
state_29272 = G__29316;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$state_machine__28333__auto__ = function(state_29272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28333__auto____1.call(this,state_29272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28333__auto____0;
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28333__auto____1;
return cljs$core$async$state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto__))
})();
var state__28446__auto__ = (function (){var statearr_29296 = f__28445__auto__.call(null);
(statearr_29296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto__);

return statearr_29296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto__))
);

return c__28444__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__25326__auto__ = (((_ == null))?null:_);
var m__25327__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,_);
} else {
var m__25327__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25326__auto__ = (((m == null))?null:m);
var m__25327__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25327__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25326__auto__ = (((m == null))?null:m);
var m__25327__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,m,ch);
} else {
var m__25327__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25326__auto__ = (((m == null))?null:m);
var m__25327__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,m);
} else {
var m__25327__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async29542 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29542 = (function (mult,ch,cs,meta29543){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29543 = meta29543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29544,meta29543__$1){
var self__ = this;
var _29544__$1 = this;
return (new cljs.core.async.t_cljs$core$async29542(self__.mult,self__.ch,self__.cs,meta29543__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29544){
var self__ = this;
var _29544__$1 = this;
return self__.meta29543;
});})(cs))
;

cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29542.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29543","meta29543",943905890,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29542";

cljs.core.async.t_cljs$core$async29542.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25269__auto__,writer__25270__auto__,opt__25271__auto__){
return cljs.core._write.call(null,writer__25270__auto__,"cljs.core.async/t_cljs$core$async29542");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29542 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29542(mult__$1,ch__$1,cs__$1,meta29543){
return (new cljs.core.async.t_cljs$core$async29542(mult__$1,ch__$1,cs__$1,meta29543));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29542(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28444__auto___29767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___29767,cs,m,dchan,dctr,done){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___29767,cs,m,dchan,dctr,done){
return (function (state_29679){
var state_val_29680 = (state_29679[(1)]);
if((state_val_29680 === (7))){
var inst_29675 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29681_29768 = state_29679__$1;
(statearr_29681_29768[(2)] = inst_29675);

(statearr_29681_29768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (20))){
var inst_29578 = (state_29679[(7)]);
var inst_29590 = cljs.core.first.call(null,inst_29578);
var inst_29591 = cljs.core.nth.call(null,inst_29590,(0),null);
var inst_29592 = cljs.core.nth.call(null,inst_29590,(1),null);
var state_29679__$1 = (function (){var statearr_29682 = state_29679;
(statearr_29682[(8)] = inst_29591);

return statearr_29682;
})();
if(cljs.core.truth_(inst_29592)){
var statearr_29683_29769 = state_29679__$1;
(statearr_29683_29769[(1)] = (22));

} else {
var statearr_29684_29770 = state_29679__$1;
(statearr_29684_29770[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (27))){
var inst_29547 = (state_29679[(9)]);
var inst_29627 = (state_29679[(10)]);
var inst_29620 = (state_29679[(11)]);
var inst_29622 = (state_29679[(12)]);
var inst_29627__$1 = cljs.core._nth.call(null,inst_29620,inst_29622);
var inst_29628 = cljs.core.async.put_BANG_.call(null,inst_29627__$1,inst_29547,done);
var state_29679__$1 = (function (){var statearr_29685 = state_29679;
(statearr_29685[(10)] = inst_29627__$1);

return statearr_29685;
})();
if(cljs.core.truth_(inst_29628)){
var statearr_29686_29771 = state_29679__$1;
(statearr_29686_29771[(1)] = (30));

} else {
var statearr_29687_29772 = state_29679__$1;
(statearr_29687_29772[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (1))){
var state_29679__$1 = state_29679;
var statearr_29688_29773 = state_29679__$1;
(statearr_29688_29773[(2)] = null);

(statearr_29688_29773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (24))){
var inst_29578 = (state_29679[(7)]);
var inst_29597 = (state_29679[(2)]);
var inst_29598 = cljs.core.next.call(null,inst_29578);
var inst_29556 = inst_29598;
var inst_29557 = null;
var inst_29558 = (0);
var inst_29559 = (0);
var state_29679__$1 = (function (){var statearr_29689 = state_29679;
(statearr_29689[(13)] = inst_29558);

(statearr_29689[(14)] = inst_29597);

(statearr_29689[(15)] = inst_29557);

(statearr_29689[(16)] = inst_29556);

(statearr_29689[(17)] = inst_29559);

return statearr_29689;
})();
var statearr_29690_29774 = state_29679__$1;
(statearr_29690_29774[(2)] = null);

(statearr_29690_29774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (39))){
var state_29679__$1 = state_29679;
var statearr_29694_29775 = state_29679__$1;
(statearr_29694_29775[(2)] = null);

(statearr_29694_29775[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (4))){
var inst_29547 = (state_29679[(9)]);
var inst_29547__$1 = (state_29679[(2)]);
var inst_29548 = (inst_29547__$1 == null);
var state_29679__$1 = (function (){var statearr_29695 = state_29679;
(statearr_29695[(9)] = inst_29547__$1);

return statearr_29695;
})();
if(cljs.core.truth_(inst_29548)){
var statearr_29696_29776 = state_29679__$1;
(statearr_29696_29776[(1)] = (5));

} else {
var statearr_29697_29777 = state_29679__$1;
(statearr_29697_29777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (15))){
var inst_29558 = (state_29679[(13)]);
var inst_29557 = (state_29679[(15)]);
var inst_29556 = (state_29679[(16)]);
var inst_29559 = (state_29679[(17)]);
var inst_29574 = (state_29679[(2)]);
var inst_29575 = (inst_29559 + (1));
var tmp29691 = inst_29558;
var tmp29692 = inst_29557;
var tmp29693 = inst_29556;
var inst_29556__$1 = tmp29693;
var inst_29557__$1 = tmp29692;
var inst_29558__$1 = tmp29691;
var inst_29559__$1 = inst_29575;
var state_29679__$1 = (function (){var statearr_29698 = state_29679;
(statearr_29698[(13)] = inst_29558__$1);

(statearr_29698[(15)] = inst_29557__$1);

(statearr_29698[(18)] = inst_29574);

(statearr_29698[(16)] = inst_29556__$1);

(statearr_29698[(17)] = inst_29559__$1);

return statearr_29698;
})();
var statearr_29699_29778 = state_29679__$1;
(statearr_29699_29778[(2)] = null);

(statearr_29699_29778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (21))){
var inst_29601 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29703_29779 = state_29679__$1;
(statearr_29703_29779[(2)] = inst_29601);

(statearr_29703_29779[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (31))){
var inst_29627 = (state_29679[(10)]);
var inst_29631 = done.call(null,null);
var inst_29632 = cljs.core.async.untap_STAR_.call(null,m,inst_29627);
var state_29679__$1 = (function (){var statearr_29704 = state_29679;
(statearr_29704[(19)] = inst_29631);

return statearr_29704;
})();
var statearr_29705_29780 = state_29679__$1;
(statearr_29705_29780[(2)] = inst_29632);

(statearr_29705_29780[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (32))){
var inst_29620 = (state_29679[(11)]);
var inst_29619 = (state_29679[(20)]);
var inst_29622 = (state_29679[(12)]);
var inst_29621 = (state_29679[(21)]);
var inst_29634 = (state_29679[(2)]);
var inst_29635 = (inst_29622 + (1));
var tmp29700 = inst_29620;
var tmp29701 = inst_29619;
var tmp29702 = inst_29621;
var inst_29619__$1 = tmp29701;
var inst_29620__$1 = tmp29700;
var inst_29621__$1 = tmp29702;
var inst_29622__$1 = inst_29635;
var state_29679__$1 = (function (){var statearr_29706 = state_29679;
(statearr_29706[(11)] = inst_29620__$1);

(statearr_29706[(20)] = inst_29619__$1);

(statearr_29706[(12)] = inst_29622__$1);

(statearr_29706[(22)] = inst_29634);

(statearr_29706[(21)] = inst_29621__$1);

return statearr_29706;
})();
var statearr_29707_29781 = state_29679__$1;
(statearr_29707_29781[(2)] = null);

(statearr_29707_29781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (40))){
var inst_29647 = (state_29679[(23)]);
var inst_29651 = done.call(null,null);
var inst_29652 = cljs.core.async.untap_STAR_.call(null,m,inst_29647);
var state_29679__$1 = (function (){var statearr_29708 = state_29679;
(statearr_29708[(24)] = inst_29651);

return statearr_29708;
})();
var statearr_29709_29782 = state_29679__$1;
(statearr_29709_29782[(2)] = inst_29652);

(statearr_29709_29782[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (33))){
var inst_29638 = (state_29679[(25)]);
var inst_29640 = cljs.core.chunked_seq_QMARK_.call(null,inst_29638);
var state_29679__$1 = state_29679;
if(inst_29640){
var statearr_29710_29783 = state_29679__$1;
(statearr_29710_29783[(1)] = (36));

} else {
var statearr_29711_29784 = state_29679__$1;
(statearr_29711_29784[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (13))){
var inst_29568 = (state_29679[(26)]);
var inst_29571 = cljs.core.async.close_BANG_.call(null,inst_29568);
var state_29679__$1 = state_29679;
var statearr_29712_29785 = state_29679__$1;
(statearr_29712_29785[(2)] = inst_29571);

(statearr_29712_29785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (22))){
var inst_29591 = (state_29679[(8)]);
var inst_29594 = cljs.core.async.close_BANG_.call(null,inst_29591);
var state_29679__$1 = state_29679;
var statearr_29713_29786 = state_29679__$1;
(statearr_29713_29786[(2)] = inst_29594);

(statearr_29713_29786[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (36))){
var inst_29638 = (state_29679[(25)]);
var inst_29642 = cljs.core.chunk_first.call(null,inst_29638);
var inst_29643 = cljs.core.chunk_rest.call(null,inst_29638);
var inst_29644 = cljs.core.count.call(null,inst_29642);
var inst_29619 = inst_29643;
var inst_29620 = inst_29642;
var inst_29621 = inst_29644;
var inst_29622 = (0);
var state_29679__$1 = (function (){var statearr_29714 = state_29679;
(statearr_29714[(11)] = inst_29620);

(statearr_29714[(20)] = inst_29619);

(statearr_29714[(12)] = inst_29622);

(statearr_29714[(21)] = inst_29621);

return statearr_29714;
})();
var statearr_29715_29787 = state_29679__$1;
(statearr_29715_29787[(2)] = null);

(statearr_29715_29787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (41))){
var inst_29638 = (state_29679[(25)]);
var inst_29654 = (state_29679[(2)]);
var inst_29655 = cljs.core.next.call(null,inst_29638);
var inst_29619 = inst_29655;
var inst_29620 = null;
var inst_29621 = (0);
var inst_29622 = (0);
var state_29679__$1 = (function (){var statearr_29716 = state_29679;
(statearr_29716[(27)] = inst_29654);

(statearr_29716[(11)] = inst_29620);

(statearr_29716[(20)] = inst_29619);

(statearr_29716[(12)] = inst_29622);

(statearr_29716[(21)] = inst_29621);

return statearr_29716;
})();
var statearr_29717_29788 = state_29679__$1;
(statearr_29717_29788[(2)] = null);

(statearr_29717_29788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (43))){
var state_29679__$1 = state_29679;
var statearr_29718_29789 = state_29679__$1;
(statearr_29718_29789[(2)] = null);

(statearr_29718_29789[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (29))){
var inst_29663 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29719_29790 = state_29679__$1;
(statearr_29719_29790[(2)] = inst_29663);

(statearr_29719_29790[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (44))){
var inst_29672 = (state_29679[(2)]);
var state_29679__$1 = (function (){var statearr_29720 = state_29679;
(statearr_29720[(28)] = inst_29672);

return statearr_29720;
})();
var statearr_29721_29791 = state_29679__$1;
(statearr_29721_29791[(2)] = null);

(statearr_29721_29791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (6))){
var inst_29611 = (state_29679[(29)]);
var inst_29610 = cljs.core.deref.call(null,cs);
var inst_29611__$1 = cljs.core.keys.call(null,inst_29610);
var inst_29612 = cljs.core.count.call(null,inst_29611__$1);
var inst_29613 = cljs.core.reset_BANG_.call(null,dctr,inst_29612);
var inst_29618 = cljs.core.seq.call(null,inst_29611__$1);
var inst_29619 = inst_29618;
var inst_29620 = null;
var inst_29621 = (0);
var inst_29622 = (0);
var state_29679__$1 = (function (){var statearr_29722 = state_29679;
(statearr_29722[(30)] = inst_29613);

(statearr_29722[(29)] = inst_29611__$1);

(statearr_29722[(11)] = inst_29620);

(statearr_29722[(20)] = inst_29619);

(statearr_29722[(12)] = inst_29622);

(statearr_29722[(21)] = inst_29621);

return statearr_29722;
})();
var statearr_29723_29792 = state_29679__$1;
(statearr_29723_29792[(2)] = null);

(statearr_29723_29792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (28))){
var inst_29638 = (state_29679[(25)]);
var inst_29619 = (state_29679[(20)]);
var inst_29638__$1 = cljs.core.seq.call(null,inst_29619);
var state_29679__$1 = (function (){var statearr_29724 = state_29679;
(statearr_29724[(25)] = inst_29638__$1);

return statearr_29724;
})();
if(inst_29638__$1){
var statearr_29725_29793 = state_29679__$1;
(statearr_29725_29793[(1)] = (33));

} else {
var statearr_29726_29794 = state_29679__$1;
(statearr_29726_29794[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (25))){
var inst_29622 = (state_29679[(12)]);
var inst_29621 = (state_29679[(21)]);
var inst_29624 = (inst_29622 < inst_29621);
var inst_29625 = inst_29624;
var state_29679__$1 = state_29679;
if(cljs.core.truth_(inst_29625)){
var statearr_29727_29795 = state_29679__$1;
(statearr_29727_29795[(1)] = (27));

} else {
var statearr_29728_29796 = state_29679__$1;
(statearr_29728_29796[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (34))){
var state_29679__$1 = state_29679;
var statearr_29729_29797 = state_29679__$1;
(statearr_29729_29797[(2)] = null);

(statearr_29729_29797[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (17))){
var state_29679__$1 = state_29679;
var statearr_29730_29798 = state_29679__$1;
(statearr_29730_29798[(2)] = null);

(statearr_29730_29798[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (3))){
var inst_29677 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29679__$1,inst_29677);
} else {
if((state_val_29680 === (12))){
var inst_29606 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29731_29799 = state_29679__$1;
(statearr_29731_29799[(2)] = inst_29606);

(statearr_29731_29799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (2))){
var state_29679__$1 = state_29679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29679__$1,(4),ch);
} else {
if((state_val_29680 === (23))){
var state_29679__$1 = state_29679;
var statearr_29732_29800 = state_29679__$1;
(statearr_29732_29800[(2)] = null);

(statearr_29732_29800[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (35))){
var inst_29661 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29733_29801 = state_29679__$1;
(statearr_29733_29801[(2)] = inst_29661);

(statearr_29733_29801[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (19))){
var inst_29578 = (state_29679[(7)]);
var inst_29582 = cljs.core.chunk_first.call(null,inst_29578);
var inst_29583 = cljs.core.chunk_rest.call(null,inst_29578);
var inst_29584 = cljs.core.count.call(null,inst_29582);
var inst_29556 = inst_29583;
var inst_29557 = inst_29582;
var inst_29558 = inst_29584;
var inst_29559 = (0);
var state_29679__$1 = (function (){var statearr_29734 = state_29679;
(statearr_29734[(13)] = inst_29558);

(statearr_29734[(15)] = inst_29557);

(statearr_29734[(16)] = inst_29556);

(statearr_29734[(17)] = inst_29559);

return statearr_29734;
})();
var statearr_29735_29802 = state_29679__$1;
(statearr_29735_29802[(2)] = null);

(statearr_29735_29802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (11))){
var inst_29578 = (state_29679[(7)]);
var inst_29556 = (state_29679[(16)]);
var inst_29578__$1 = cljs.core.seq.call(null,inst_29556);
var state_29679__$1 = (function (){var statearr_29736 = state_29679;
(statearr_29736[(7)] = inst_29578__$1);

return statearr_29736;
})();
if(inst_29578__$1){
var statearr_29737_29803 = state_29679__$1;
(statearr_29737_29803[(1)] = (16));

} else {
var statearr_29738_29804 = state_29679__$1;
(statearr_29738_29804[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (9))){
var inst_29608 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29739_29805 = state_29679__$1;
(statearr_29739_29805[(2)] = inst_29608);

(statearr_29739_29805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (5))){
var inst_29554 = cljs.core.deref.call(null,cs);
var inst_29555 = cljs.core.seq.call(null,inst_29554);
var inst_29556 = inst_29555;
var inst_29557 = null;
var inst_29558 = (0);
var inst_29559 = (0);
var state_29679__$1 = (function (){var statearr_29740 = state_29679;
(statearr_29740[(13)] = inst_29558);

(statearr_29740[(15)] = inst_29557);

(statearr_29740[(16)] = inst_29556);

(statearr_29740[(17)] = inst_29559);

return statearr_29740;
})();
var statearr_29741_29806 = state_29679__$1;
(statearr_29741_29806[(2)] = null);

(statearr_29741_29806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (14))){
var state_29679__$1 = state_29679;
var statearr_29742_29807 = state_29679__$1;
(statearr_29742_29807[(2)] = null);

(statearr_29742_29807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (45))){
var inst_29669 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29743_29808 = state_29679__$1;
(statearr_29743_29808[(2)] = inst_29669);

(statearr_29743_29808[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (26))){
var inst_29611 = (state_29679[(29)]);
var inst_29665 = (state_29679[(2)]);
var inst_29666 = cljs.core.seq.call(null,inst_29611);
var state_29679__$1 = (function (){var statearr_29744 = state_29679;
(statearr_29744[(31)] = inst_29665);

return statearr_29744;
})();
if(inst_29666){
var statearr_29745_29809 = state_29679__$1;
(statearr_29745_29809[(1)] = (42));

} else {
var statearr_29746_29810 = state_29679__$1;
(statearr_29746_29810[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (16))){
var inst_29578 = (state_29679[(7)]);
var inst_29580 = cljs.core.chunked_seq_QMARK_.call(null,inst_29578);
var state_29679__$1 = state_29679;
if(inst_29580){
var statearr_29747_29811 = state_29679__$1;
(statearr_29747_29811[(1)] = (19));

} else {
var statearr_29748_29812 = state_29679__$1;
(statearr_29748_29812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (38))){
var inst_29658 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29749_29813 = state_29679__$1;
(statearr_29749_29813[(2)] = inst_29658);

(statearr_29749_29813[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (30))){
var state_29679__$1 = state_29679;
var statearr_29750_29814 = state_29679__$1;
(statearr_29750_29814[(2)] = null);

(statearr_29750_29814[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (10))){
var inst_29557 = (state_29679[(15)]);
var inst_29559 = (state_29679[(17)]);
var inst_29567 = cljs.core._nth.call(null,inst_29557,inst_29559);
var inst_29568 = cljs.core.nth.call(null,inst_29567,(0),null);
var inst_29569 = cljs.core.nth.call(null,inst_29567,(1),null);
var state_29679__$1 = (function (){var statearr_29751 = state_29679;
(statearr_29751[(26)] = inst_29568);

return statearr_29751;
})();
if(cljs.core.truth_(inst_29569)){
var statearr_29752_29815 = state_29679__$1;
(statearr_29752_29815[(1)] = (13));

} else {
var statearr_29753_29816 = state_29679__$1;
(statearr_29753_29816[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (18))){
var inst_29604 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29754_29817 = state_29679__$1;
(statearr_29754_29817[(2)] = inst_29604);

(statearr_29754_29817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (42))){
var state_29679__$1 = state_29679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29679__$1,(45),dchan);
} else {
if((state_val_29680 === (37))){
var inst_29547 = (state_29679[(9)]);
var inst_29638 = (state_29679[(25)]);
var inst_29647 = (state_29679[(23)]);
var inst_29647__$1 = cljs.core.first.call(null,inst_29638);
var inst_29648 = cljs.core.async.put_BANG_.call(null,inst_29647__$1,inst_29547,done);
var state_29679__$1 = (function (){var statearr_29755 = state_29679;
(statearr_29755[(23)] = inst_29647__$1);

return statearr_29755;
})();
if(cljs.core.truth_(inst_29648)){
var statearr_29756_29818 = state_29679__$1;
(statearr_29756_29818[(1)] = (39));

} else {
var statearr_29757_29819 = state_29679__$1;
(statearr_29757_29819[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (8))){
var inst_29558 = (state_29679[(13)]);
var inst_29559 = (state_29679[(17)]);
var inst_29561 = (inst_29559 < inst_29558);
var inst_29562 = inst_29561;
var state_29679__$1 = state_29679;
if(cljs.core.truth_(inst_29562)){
var statearr_29758_29820 = state_29679__$1;
(statearr_29758_29820[(1)] = (10));

} else {
var statearr_29759_29821 = state_29679__$1;
(statearr_29759_29821[(1)] = (11));

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
});})(c__28444__auto___29767,cs,m,dchan,dctr,done))
;
return ((function (switch__28332__auto__,c__28444__auto___29767,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28333__auto__ = null;
var cljs$core$async$mult_$_state_machine__28333__auto____0 = (function (){
var statearr_29763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29763[(0)] = cljs$core$async$mult_$_state_machine__28333__auto__);

(statearr_29763[(1)] = (1));

return statearr_29763;
});
var cljs$core$async$mult_$_state_machine__28333__auto____1 = (function (state_29679){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_29679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e29764){if((e29764 instanceof Object)){
var ex__28336__auto__ = e29764;
var statearr_29765_29822 = state_29679;
(statearr_29765_29822[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29823 = state_29679;
state_29679 = G__29823;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28333__auto__ = function(state_29679){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28333__auto____1.call(this,state_29679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28333__auto____0;
cljs$core$async$mult_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28333__auto____1;
return cljs$core$async$mult_$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___29767,cs,m,dchan,dctr,done))
})();
var state__28446__auto__ = (function (){var statearr_29766 = f__28445__auto__.call(null);
(statearr_29766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___29767);

return statearr_29766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___29767,cs,m,dchan,dctr,done))
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
var args29824 = [];
var len__25738__auto___29827 = arguments.length;
var i__25739__auto___29828 = (0);
while(true){
if((i__25739__auto___29828 < len__25738__auto___29827)){
args29824.push((arguments[i__25739__auto___29828]));

var G__29829 = (i__25739__auto___29828 + (1));
i__25739__auto___29828 = G__29829;
continue;
} else {
}
break;
}

var G__29826 = args29824.length;
switch (G__29826) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29824.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25326__auto__ = (((m == null))?null:m);
var m__25327__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,m,ch);
} else {
var m__25327__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25326__auto__ = (((m == null))?null:m);
var m__25327__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,m,ch);
} else {
var m__25327__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25326__auto__ = (((m == null))?null:m);
var m__25327__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,m);
} else {
var m__25327__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25326__auto__ = (((m == null))?null:m);
var m__25327__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,m,state_map);
} else {
var m__25327__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25326__auto__ = (((m == null))?null:m);
var m__25327__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,m,mode);
} else {
var m__25327__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25745__auto__ = [];
var len__25738__auto___29841 = arguments.length;
var i__25739__auto___29842 = (0);
while(true){
if((i__25739__auto___29842 < len__25738__auto___29841)){
args__25745__auto__.push((arguments[i__25739__auto___29842]));

var G__29843 = (i__25739__auto___29842 + (1));
i__25739__auto___29842 = G__29843;
continue;
} else {
}
break;
}

var argseq__25746__auto__ = ((((3) < args__25745__auto__.length))?(new cljs.core.IndexedSeq(args__25745__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25746__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29835){
var map__29836 = p__29835;
var map__29836__$1 = ((((!((map__29836 == null)))?((((map__29836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29836):map__29836);
var opts = map__29836__$1;
var statearr_29838_29844 = state;
(statearr_29838_29844[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29836,map__29836__$1,opts){
return (function (val){
var statearr_29839_29845 = state;
(statearr_29839_29845[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29836,map__29836__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29840_29846 = state;
(statearr_29840_29846[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29831){
var G__29832 = cljs.core.first.call(null,seq29831);
var seq29831__$1 = cljs.core.next.call(null,seq29831);
var G__29833 = cljs.core.first.call(null,seq29831__$1);
var seq29831__$2 = cljs.core.next.call(null,seq29831__$1);
var G__29834 = cljs.core.first.call(null,seq29831__$2);
var seq29831__$3 = cljs.core.next.call(null,seq29831__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29832,G__29833,G__29834,seq29831__$3);
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
var change = cljs.core.async.chan.call(null);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30012 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30012 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30013){
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
this.meta30013 = meta30013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30014,meta30013__$1){
var self__ = this;
var _30014__$1 = this;
return (new cljs.core.async.t_cljs$core$async30012(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30013__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30014){
var self__ = this;
var _30014__$1 = this;
return self__.meta30013;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30012.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30012.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30012.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30012.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30012.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30012.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30012.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30012.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30013","meta30013",-337525667,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30012";

cljs.core.async.t_cljs$core$async30012.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25269__auto__,writer__25270__auto__,opt__25271__auto__){
return cljs.core._write.call(null,writer__25270__auto__,"cljs.core.async/t_cljs$core$async30012");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30012 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30012(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30013){
return (new cljs.core.async.t_cljs$core$async30012(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30013));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30012(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28444__auto___30177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___30177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___30177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30114){
var state_val_30115 = (state_30114[(1)]);
if((state_val_30115 === (7))){
var inst_30030 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
var statearr_30116_30178 = state_30114__$1;
(statearr_30116_30178[(2)] = inst_30030);

(statearr_30116_30178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (20))){
var inst_30042 = (state_30114[(7)]);
var state_30114__$1 = state_30114;
var statearr_30117_30179 = state_30114__$1;
(statearr_30117_30179[(2)] = inst_30042);

(statearr_30117_30179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (27))){
var state_30114__$1 = state_30114;
var statearr_30118_30180 = state_30114__$1;
(statearr_30118_30180[(2)] = null);

(statearr_30118_30180[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (1))){
var inst_30018 = (state_30114[(8)]);
var inst_30018__$1 = calc_state.call(null);
var inst_30020 = (inst_30018__$1 == null);
var inst_30021 = cljs.core.not.call(null,inst_30020);
var state_30114__$1 = (function (){var statearr_30119 = state_30114;
(statearr_30119[(8)] = inst_30018__$1);

return statearr_30119;
})();
if(inst_30021){
var statearr_30120_30181 = state_30114__$1;
(statearr_30120_30181[(1)] = (2));

} else {
var statearr_30121_30182 = state_30114__$1;
(statearr_30121_30182[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (24))){
var inst_30065 = (state_30114[(9)]);
var inst_30088 = (state_30114[(10)]);
var inst_30074 = (state_30114[(11)]);
var inst_30088__$1 = inst_30065.call(null,inst_30074);
var state_30114__$1 = (function (){var statearr_30122 = state_30114;
(statearr_30122[(10)] = inst_30088__$1);

return statearr_30122;
})();
if(cljs.core.truth_(inst_30088__$1)){
var statearr_30123_30183 = state_30114__$1;
(statearr_30123_30183[(1)] = (29));

} else {
var statearr_30124_30184 = state_30114__$1;
(statearr_30124_30184[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (4))){
var inst_30033 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
if(cljs.core.truth_(inst_30033)){
var statearr_30125_30185 = state_30114__$1;
(statearr_30125_30185[(1)] = (8));

} else {
var statearr_30126_30186 = state_30114__$1;
(statearr_30126_30186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (15))){
var inst_30059 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
if(cljs.core.truth_(inst_30059)){
var statearr_30127_30187 = state_30114__$1;
(statearr_30127_30187[(1)] = (19));

} else {
var statearr_30128_30188 = state_30114__$1;
(statearr_30128_30188[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (21))){
var inst_30064 = (state_30114[(12)]);
var inst_30064__$1 = (state_30114[(2)]);
var inst_30065 = cljs.core.get.call(null,inst_30064__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30066 = cljs.core.get.call(null,inst_30064__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30067 = cljs.core.get.call(null,inst_30064__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30114__$1 = (function (){var statearr_30129 = state_30114;
(statearr_30129[(13)] = inst_30066);

(statearr_30129[(9)] = inst_30065);

(statearr_30129[(12)] = inst_30064__$1);

return statearr_30129;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30114__$1,(22),inst_30067);
} else {
if((state_val_30115 === (31))){
var inst_30096 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
if(cljs.core.truth_(inst_30096)){
var statearr_30130_30189 = state_30114__$1;
(statearr_30130_30189[(1)] = (32));

} else {
var statearr_30131_30190 = state_30114__$1;
(statearr_30131_30190[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (32))){
var inst_30073 = (state_30114[(14)]);
var state_30114__$1 = state_30114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30114__$1,(35),out,inst_30073);
} else {
if((state_val_30115 === (33))){
var inst_30064 = (state_30114[(12)]);
var inst_30042 = inst_30064;
var state_30114__$1 = (function (){var statearr_30132 = state_30114;
(statearr_30132[(7)] = inst_30042);

return statearr_30132;
})();
var statearr_30133_30191 = state_30114__$1;
(statearr_30133_30191[(2)] = null);

(statearr_30133_30191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (13))){
var inst_30042 = (state_30114[(7)]);
var inst_30049 = inst_30042.cljs$lang$protocol_mask$partition0$;
var inst_30050 = (inst_30049 & (64));
var inst_30051 = inst_30042.cljs$core$ISeq$;
var inst_30052 = (inst_30050) || (inst_30051);
var state_30114__$1 = state_30114;
if(cljs.core.truth_(inst_30052)){
var statearr_30134_30192 = state_30114__$1;
(statearr_30134_30192[(1)] = (16));

} else {
var statearr_30135_30193 = state_30114__$1;
(statearr_30135_30193[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (22))){
var inst_30073 = (state_30114[(14)]);
var inst_30074 = (state_30114[(11)]);
var inst_30072 = (state_30114[(2)]);
var inst_30073__$1 = cljs.core.nth.call(null,inst_30072,(0),null);
var inst_30074__$1 = cljs.core.nth.call(null,inst_30072,(1),null);
var inst_30075 = (inst_30073__$1 == null);
var inst_30076 = cljs.core._EQ_.call(null,inst_30074__$1,change);
var inst_30077 = (inst_30075) || (inst_30076);
var state_30114__$1 = (function (){var statearr_30136 = state_30114;
(statearr_30136[(14)] = inst_30073__$1);

(statearr_30136[(11)] = inst_30074__$1);

return statearr_30136;
})();
if(cljs.core.truth_(inst_30077)){
var statearr_30137_30194 = state_30114__$1;
(statearr_30137_30194[(1)] = (23));

} else {
var statearr_30138_30195 = state_30114__$1;
(statearr_30138_30195[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (36))){
var inst_30064 = (state_30114[(12)]);
var inst_30042 = inst_30064;
var state_30114__$1 = (function (){var statearr_30139 = state_30114;
(statearr_30139[(7)] = inst_30042);

return statearr_30139;
})();
var statearr_30140_30196 = state_30114__$1;
(statearr_30140_30196[(2)] = null);

(statearr_30140_30196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (29))){
var inst_30088 = (state_30114[(10)]);
var state_30114__$1 = state_30114;
var statearr_30141_30197 = state_30114__$1;
(statearr_30141_30197[(2)] = inst_30088);

(statearr_30141_30197[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (6))){
var state_30114__$1 = state_30114;
var statearr_30142_30198 = state_30114__$1;
(statearr_30142_30198[(2)] = false);

(statearr_30142_30198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (28))){
var inst_30084 = (state_30114[(2)]);
var inst_30085 = calc_state.call(null);
var inst_30042 = inst_30085;
var state_30114__$1 = (function (){var statearr_30143 = state_30114;
(statearr_30143[(15)] = inst_30084);

(statearr_30143[(7)] = inst_30042);

return statearr_30143;
})();
var statearr_30144_30199 = state_30114__$1;
(statearr_30144_30199[(2)] = null);

(statearr_30144_30199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (25))){
var inst_30110 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
var statearr_30145_30200 = state_30114__$1;
(statearr_30145_30200[(2)] = inst_30110);

(statearr_30145_30200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (34))){
var inst_30108 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
var statearr_30146_30201 = state_30114__$1;
(statearr_30146_30201[(2)] = inst_30108);

(statearr_30146_30201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (17))){
var state_30114__$1 = state_30114;
var statearr_30147_30202 = state_30114__$1;
(statearr_30147_30202[(2)] = false);

(statearr_30147_30202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (3))){
var state_30114__$1 = state_30114;
var statearr_30148_30203 = state_30114__$1;
(statearr_30148_30203[(2)] = false);

(statearr_30148_30203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (12))){
var inst_30112 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30114__$1,inst_30112);
} else {
if((state_val_30115 === (2))){
var inst_30018 = (state_30114[(8)]);
var inst_30023 = inst_30018.cljs$lang$protocol_mask$partition0$;
var inst_30024 = (inst_30023 & (64));
var inst_30025 = inst_30018.cljs$core$ISeq$;
var inst_30026 = (inst_30024) || (inst_30025);
var state_30114__$1 = state_30114;
if(cljs.core.truth_(inst_30026)){
var statearr_30149_30204 = state_30114__$1;
(statearr_30149_30204[(1)] = (5));

} else {
var statearr_30150_30205 = state_30114__$1;
(statearr_30150_30205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (23))){
var inst_30073 = (state_30114[(14)]);
var inst_30079 = (inst_30073 == null);
var state_30114__$1 = state_30114;
if(cljs.core.truth_(inst_30079)){
var statearr_30151_30206 = state_30114__$1;
(statearr_30151_30206[(1)] = (26));

} else {
var statearr_30152_30207 = state_30114__$1;
(statearr_30152_30207[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (35))){
var inst_30099 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
if(cljs.core.truth_(inst_30099)){
var statearr_30153_30208 = state_30114__$1;
(statearr_30153_30208[(1)] = (36));

} else {
var statearr_30154_30209 = state_30114__$1;
(statearr_30154_30209[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (19))){
var inst_30042 = (state_30114[(7)]);
var inst_30061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30042);
var state_30114__$1 = state_30114;
var statearr_30155_30210 = state_30114__$1;
(statearr_30155_30210[(2)] = inst_30061);

(statearr_30155_30210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (11))){
var inst_30042 = (state_30114[(7)]);
var inst_30046 = (inst_30042 == null);
var inst_30047 = cljs.core.not.call(null,inst_30046);
var state_30114__$1 = state_30114;
if(inst_30047){
var statearr_30156_30211 = state_30114__$1;
(statearr_30156_30211[(1)] = (13));

} else {
var statearr_30157_30212 = state_30114__$1;
(statearr_30157_30212[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (9))){
var inst_30018 = (state_30114[(8)]);
var state_30114__$1 = state_30114;
var statearr_30158_30213 = state_30114__$1;
(statearr_30158_30213[(2)] = inst_30018);

(statearr_30158_30213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (5))){
var state_30114__$1 = state_30114;
var statearr_30159_30214 = state_30114__$1;
(statearr_30159_30214[(2)] = true);

(statearr_30159_30214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (14))){
var state_30114__$1 = state_30114;
var statearr_30160_30215 = state_30114__$1;
(statearr_30160_30215[(2)] = false);

(statearr_30160_30215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (26))){
var inst_30074 = (state_30114[(11)]);
var inst_30081 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30074);
var state_30114__$1 = state_30114;
var statearr_30161_30216 = state_30114__$1;
(statearr_30161_30216[(2)] = inst_30081);

(statearr_30161_30216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (16))){
var state_30114__$1 = state_30114;
var statearr_30162_30217 = state_30114__$1;
(statearr_30162_30217[(2)] = true);

(statearr_30162_30217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (38))){
var inst_30104 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
var statearr_30163_30218 = state_30114__$1;
(statearr_30163_30218[(2)] = inst_30104);

(statearr_30163_30218[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (30))){
var inst_30066 = (state_30114[(13)]);
var inst_30065 = (state_30114[(9)]);
var inst_30074 = (state_30114[(11)]);
var inst_30091 = cljs.core.empty_QMARK_.call(null,inst_30065);
var inst_30092 = inst_30066.call(null,inst_30074);
var inst_30093 = cljs.core.not.call(null,inst_30092);
var inst_30094 = (inst_30091) && (inst_30093);
var state_30114__$1 = state_30114;
var statearr_30164_30219 = state_30114__$1;
(statearr_30164_30219[(2)] = inst_30094);

(statearr_30164_30219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (10))){
var inst_30018 = (state_30114[(8)]);
var inst_30038 = (state_30114[(2)]);
var inst_30039 = cljs.core.get.call(null,inst_30038,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30040 = cljs.core.get.call(null,inst_30038,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30041 = cljs.core.get.call(null,inst_30038,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30042 = inst_30018;
var state_30114__$1 = (function (){var statearr_30165 = state_30114;
(statearr_30165[(16)] = inst_30041);

(statearr_30165[(17)] = inst_30040);

(statearr_30165[(18)] = inst_30039);

(statearr_30165[(7)] = inst_30042);

return statearr_30165;
})();
var statearr_30166_30220 = state_30114__$1;
(statearr_30166_30220[(2)] = null);

(statearr_30166_30220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (18))){
var inst_30056 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
var statearr_30167_30221 = state_30114__$1;
(statearr_30167_30221[(2)] = inst_30056);

(statearr_30167_30221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (37))){
var state_30114__$1 = state_30114;
var statearr_30168_30222 = state_30114__$1;
(statearr_30168_30222[(2)] = null);

(statearr_30168_30222[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (8))){
var inst_30018 = (state_30114[(8)]);
var inst_30035 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30018);
var state_30114__$1 = state_30114;
var statearr_30169_30223 = state_30114__$1;
(statearr_30169_30223[(2)] = inst_30035);

(statearr_30169_30223[(1)] = (10));


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
});})(c__28444__auto___30177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28332__auto__,c__28444__auto___30177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28333__auto__ = null;
var cljs$core$async$mix_$_state_machine__28333__auto____0 = (function (){
var statearr_30173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30173[(0)] = cljs$core$async$mix_$_state_machine__28333__auto__);

(statearr_30173[(1)] = (1));

return statearr_30173;
});
var cljs$core$async$mix_$_state_machine__28333__auto____1 = (function (state_30114){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_30114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e30174){if((e30174 instanceof Object)){
var ex__28336__auto__ = e30174;
var statearr_30175_30224 = state_30114;
(statearr_30175_30224[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30225 = state_30114;
state_30114 = G__30225;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28333__auto__ = function(state_30114){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28333__auto____1.call(this,state_30114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28333__auto____0;
cljs$core$async$mix_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28333__auto____1;
return cljs$core$async$mix_$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___30177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28446__auto__ = (function (){var statearr_30176 = f__28445__auto__.call(null);
(statearr_30176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___30177);

return statearr_30176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___30177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25326__auto__ = (((p == null))?null:p);
var m__25327__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25327__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25326__auto__ = (((p == null))?null:p);
var m__25327__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,p,v,ch);
} else {
var m__25327__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30226 = [];
var len__25738__auto___30229 = arguments.length;
var i__25739__auto___30230 = (0);
while(true){
if((i__25739__auto___30230 < len__25738__auto___30229)){
args30226.push((arguments[i__25739__auto___30230]));

var G__30231 = (i__25739__auto___30230 + (1));
i__25739__auto___30230 = G__30231;
continue;
} else {
}
break;
}

var G__30228 = args30226.length;
switch (G__30228) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30226.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25326__auto__ = (((p == null))?null:p);
var m__25327__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,p);
} else {
var m__25327__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25326__auto__ = (((p == null))?null:p);
var m__25327__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25326__auto__)]);
if(!((m__25327__auto__ == null))){
return m__25327__auto__.call(null,p,v);
} else {
var m__25327__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25327__auto____$1 == null))){
return m__25327__auto____$1.call(null,p,v);
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
var args30234 = [];
var len__25738__auto___30359 = arguments.length;
var i__25739__auto___30360 = (0);
while(true){
if((i__25739__auto___30360 < len__25738__auto___30359)){
args30234.push((arguments[i__25739__auto___30360]));

var G__30361 = (i__25739__auto___30360 + (1));
i__25739__auto___30360 = G__30361;
continue;
} else {
}
break;
}

var G__30236 = args30234.length;
switch (G__30236) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30234.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24663__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24663__auto__,mults){
return (function (p1__30233_SHARP_){
if(cljs.core.truth_(p1__30233_SHARP_.call(null,topic))){
return p1__30233_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30233_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24663__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30237 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30238){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30238 = meta30238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30239,meta30238__$1){
var self__ = this;
var _30239__$1 = this;
return (new cljs.core.async.t_cljs$core$async30237(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30238__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30239){
var self__ = this;
var _30239__$1 = this;
return self__.meta30238;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30237.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30237.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30237.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30237.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30237.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30237.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30237.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30238","meta30238",-1656724548,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30237";

cljs.core.async.t_cljs$core$async30237.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25269__auto__,writer__25270__auto__,opt__25271__auto__){
return cljs.core._write.call(null,writer__25270__auto__,"cljs.core.async/t_cljs$core$async30237");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30237 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30237(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30238){
return (new cljs.core.async.t_cljs$core$async30237(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30238));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30237(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28444__auto___30363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___30363,mults,ensure_mult,p){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___30363,mults,ensure_mult,p){
return (function (state_30311){
var state_val_30312 = (state_30311[(1)]);
if((state_val_30312 === (7))){
var inst_30307 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
var statearr_30313_30364 = state_30311__$1;
(statearr_30313_30364[(2)] = inst_30307);

(statearr_30313_30364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (20))){
var state_30311__$1 = state_30311;
var statearr_30314_30365 = state_30311__$1;
(statearr_30314_30365[(2)] = null);

(statearr_30314_30365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (1))){
var state_30311__$1 = state_30311;
var statearr_30315_30366 = state_30311__$1;
(statearr_30315_30366[(2)] = null);

(statearr_30315_30366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (24))){
var inst_30290 = (state_30311[(7)]);
var inst_30299 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30290);
var state_30311__$1 = state_30311;
var statearr_30316_30367 = state_30311__$1;
(statearr_30316_30367[(2)] = inst_30299);

(statearr_30316_30367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (4))){
var inst_30242 = (state_30311[(8)]);
var inst_30242__$1 = (state_30311[(2)]);
var inst_30243 = (inst_30242__$1 == null);
var state_30311__$1 = (function (){var statearr_30317 = state_30311;
(statearr_30317[(8)] = inst_30242__$1);

return statearr_30317;
})();
if(cljs.core.truth_(inst_30243)){
var statearr_30318_30368 = state_30311__$1;
(statearr_30318_30368[(1)] = (5));

} else {
var statearr_30319_30369 = state_30311__$1;
(statearr_30319_30369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (15))){
var inst_30284 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
var statearr_30320_30370 = state_30311__$1;
(statearr_30320_30370[(2)] = inst_30284);

(statearr_30320_30370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (21))){
var inst_30304 = (state_30311[(2)]);
var state_30311__$1 = (function (){var statearr_30321 = state_30311;
(statearr_30321[(9)] = inst_30304);

return statearr_30321;
})();
var statearr_30322_30371 = state_30311__$1;
(statearr_30322_30371[(2)] = null);

(statearr_30322_30371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (13))){
var inst_30266 = (state_30311[(10)]);
var inst_30268 = cljs.core.chunked_seq_QMARK_.call(null,inst_30266);
var state_30311__$1 = state_30311;
if(inst_30268){
var statearr_30323_30372 = state_30311__$1;
(statearr_30323_30372[(1)] = (16));

} else {
var statearr_30324_30373 = state_30311__$1;
(statearr_30324_30373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (22))){
var inst_30296 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
if(cljs.core.truth_(inst_30296)){
var statearr_30325_30374 = state_30311__$1;
(statearr_30325_30374[(1)] = (23));

} else {
var statearr_30326_30375 = state_30311__$1;
(statearr_30326_30375[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (6))){
var inst_30242 = (state_30311[(8)]);
var inst_30292 = (state_30311[(11)]);
var inst_30290 = (state_30311[(7)]);
var inst_30290__$1 = topic_fn.call(null,inst_30242);
var inst_30291 = cljs.core.deref.call(null,mults);
var inst_30292__$1 = cljs.core.get.call(null,inst_30291,inst_30290__$1);
var state_30311__$1 = (function (){var statearr_30327 = state_30311;
(statearr_30327[(11)] = inst_30292__$1);

(statearr_30327[(7)] = inst_30290__$1);

return statearr_30327;
})();
if(cljs.core.truth_(inst_30292__$1)){
var statearr_30328_30376 = state_30311__$1;
(statearr_30328_30376[(1)] = (19));

} else {
var statearr_30329_30377 = state_30311__$1;
(statearr_30329_30377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (25))){
var inst_30301 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
var statearr_30330_30378 = state_30311__$1;
(statearr_30330_30378[(2)] = inst_30301);

(statearr_30330_30378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (17))){
var inst_30266 = (state_30311[(10)]);
var inst_30275 = cljs.core.first.call(null,inst_30266);
var inst_30276 = cljs.core.async.muxch_STAR_.call(null,inst_30275);
var inst_30277 = cljs.core.async.close_BANG_.call(null,inst_30276);
var inst_30278 = cljs.core.next.call(null,inst_30266);
var inst_30252 = inst_30278;
var inst_30253 = null;
var inst_30254 = (0);
var inst_30255 = (0);
var state_30311__$1 = (function (){var statearr_30331 = state_30311;
(statearr_30331[(12)] = inst_30277);

(statearr_30331[(13)] = inst_30253);

(statearr_30331[(14)] = inst_30255);

(statearr_30331[(15)] = inst_30252);

(statearr_30331[(16)] = inst_30254);

return statearr_30331;
})();
var statearr_30332_30379 = state_30311__$1;
(statearr_30332_30379[(2)] = null);

(statearr_30332_30379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (3))){
var inst_30309 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30311__$1,inst_30309);
} else {
if((state_val_30312 === (12))){
var inst_30286 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
var statearr_30333_30380 = state_30311__$1;
(statearr_30333_30380[(2)] = inst_30286);

(statearr_30333_30380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (2))){
var state_30311__$1 = state_30311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30311__$1,(4),ch);
} else {
if((state_val_30312 === (23))){
var state_30311__$1 = state_30311;
var statearr_30334_30381 = state_30311__$1;
(statearr_30334_30381[(2)] = null);

(statearr_30334_30381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (19))){
var inst_30242 = (state_30311[(8)]);
var inst_30292 = (state_30311[(11)]);
var inst_30294 = cljs.core.async.muxch_STAR_.call(null,inst_30292);
var state_30311__$1 = state_30311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30311__$1,(22),inst_30294,inst_30242);
} else {
if((state_val_30312 === (11))){
var inst_30266 = (state_30311[(10)]);
var inst_30252 = (state_30311[(15)]);
var inst_30266__$1 = cljs.core.seq.call(null,inst_30252);
var state_30311__$1 = (function (){var statearr_30335 = state_30311;
(statearr_30335[(10)] = inst_30266__$1);

return statearr_30335;
})();
if(inst_30266__$1){
var statearr_30336_30382 = state_30311__$1;
(statearr_30336_30382[(1)] = (13));

} else {
var statearr_30337_30383 = state_30311__$1;
(statearr_30337_30383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (9))){
var inst_30288 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
var statearr_30338_30384 = state_30311__$1;
(statearr_30338_30384[(2)] = inst_30288);

(statearr_30338_30384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (5))){
var inst_30249 = cljs.core.deref.call(null,mults);
var inst_30250 = cljs.core.vals.call(null,inst_30249);
var inst_30251 = cljs.core.seq.call(null,inst_30250);
var inst_30252 = inst_30251;
var inst_30253 = null;
var inst_30254 = (0);
var inst_30255 = (0);
var state_30311__$1 = (function (){var statearr_30339 = state_30311;
(statearr_30339[(13)] = inst_30253);

(statearr_30339[(14)] = inst_30255);

(statearr_30339[(15)] = inst_30252);

(statearr_30339[(16)] = inst_30254);

return statearr_30339;
})();
var statearr_30340_30385 = state_30311__$1;
(statearr_30340_30385[(2)] = null);

(statearr_30340_30385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (14))){
var state_30311__$1 = state_30311;
var statearr_30344_30386 = state_30311__$1;
(statearr_30344_30386[(2)] = null);

(statearr_30344_30386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (16))){
var inst_30266 = (state_30311[(10)]);
var inst_30270 = cljs.core.chunk_first.call(null,inst_30266);
var inst_30271 = cljs.core.chunk_rest.call(null,inst_30266);
var inst_30272 = cljs.core.count.call(null,inst_30270);
var inst_30252 = inst_30271;
var inst_30253 = inst_30270;
var inst_30254 = inst_30272;
var inst_30255 = (0);
var state_30311__$1 = (function (){var statearr_30345 = state_30311;
(statearr_30345[(13)] = inst_30253);

(statearr_30345[(14)] = inst_30255);

(statearr_30345[(15)] = inst_30252);

(statearr_30345[(16)] = inst_30254);

return statearr_30345;
})();
var statearr_30346_30387 = state_30311__$1;
(statearr_30346_30387[(2)] = null);

(statearr_30346_30387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (10))){
var inst_30253 = (state_30311[(13)]);
var inst_30255 = (state_30311[(14)]);
var inst_30252 = (state_30311[(15)]);
var inst_30254 = (state_30311[(16)]);
var inst_30260 = cljs.core._nth.call(null,inst_30253,inst_30255);
var inst_30261 = cljs.core.async.muxch_STAR_.call(null,inst_30260);
var inst_30262 = cljs.core.async.close_BANG_.call(null,inst_30261);
var inst_30263 = (inst_30255 + (1));
var tmp30341 = inst_30253;
var tmp30342 = inst_30252;
var tmp30343 = inst_30254;
var inst_30252__$1 = tmp30342;
var inst_30253__$1 = tmp30341;
var inst_30254__$1 = tmp30343;
var inst_30255__$1 = inst_30263;
var state_30311__$1 = (function (){var statearr_30347 = state_30311;
(statearr_30347[(17)] = inst_30262);

(statearr_30347[(13)] = inst_30253__$1);

(statearr_30347[(14)] = inst_30255__$1);

(statearr_30347[(15)] = inst_30252__$1);

(statearr_30347[(16)] = inst_30254__$1);

return statearr_30347;
})();
var statearr_30348_30388 = state_30311__$1;
(statearr_30348_30388[(2)] = null);

(statearr_30348_30388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (18))){
var inst_30281 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
var statearr_30349_30389 = state_30311__$1;
(statearr_30349_30389[(2)] = inst_30281);

(statearr_30349_30389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (8))){
var inst_30255 = (state_30311[(14)]);
var inst_30254 = (state_30311[(16)]);
var inst_30257 = (inst_30255 < inst_30254);
var inst_30258 = inst_30257;
var state_30311__$1 = state_30311;
if(cljs.core.truth_(inst_30258)){
var statearr_30350_30390 = state_30311__$1;
(statearr_30350_30390[(1)] = (10));

} else {
var statearr_30351_30391 = state_30311__$1;
(statearr_30351_30391[(1)] = (11));

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
});})(c__28444__auto___30363,mults,ensure_mult,p))
;
return ((function (switch__28332__auto__,c__28444__auto___30363,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28333__auto__ = null;
var cljs$core$async$state_machine__28333__auto____0 = (function (){
var statearr_30355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30355[(0)] = cljs$core$async$state_machine__28333__auto__);

(statearr_30355[(1)] = (1));

return statearr_30355;
});
var cljs$core$async$state_machine__28333__auto____1 = (function (state_30311){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_30311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e30356){if((e30356 instanceof Object)){
var ex__28336__auto__ = e30356;
var statearr_30357_30392 = state_30311;
(statearr_30357_30392[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30393 = state_30311;
state_30311 = G__30393;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$state_machine__28333__auto__ = function(state_30311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28333__auto____1.call(this,state_30311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28333__auto____0;
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28333__auto____1;
return cljs$core$async$state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___30363,mults,ensure_mult,p))
})();
var state__28446__auto__ = (function (){var statearr_30358 = f__28445__auto__.call(null);
(statearr_30358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___30363);

return statearr_30358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___30363,mults,ensure_mult,p))
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
var args30394 = [];
var len__25738__auto___30397 = arguments.length;
var i__25739__auto___30398 = (0);
while(true){
if((i__25739__auto___30398 < len__25738__auto___30397)){
args30394.push((arguments[i__25739__auto___30398]));

var G__30399 = (i__25739__auto___30398 + (1));
i__25739__auto___30398 = G__30399;
continue;
} else {
}
break;
}

var G__30396 = args30394.length;
switch (G__30396) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30394.length)].join('')));

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
var args30401 = [];
var len__25738__auto___30404 = arguments.length;
var i__25739__auto___30405 = (0);
while(true){
if((i__25739__auto___30405 < len__25738__auto___30404)){
args30401.push((arguments[i__25739__auto___30405]));

var G__30406 = (i__25739__auto___30405 + (1));
i__25739__auto___30405 = G__30406;
continue;
} else {
}
break;
}

var G__30403 = args30401.length;
switch (G__30403) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30401.length)].join('')));

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
var args30408 = [];
var len__25738__auto___30479 = arguments.length;
var i__25739__auto___30480 = (0);
while(true){
if((i__25739__auto___30480 < len__25738__auto___30479)){
args30408.push((arguments[i__25739__auto___30480]));

var G__30481 = (i__25739__auto___30480 + (1));
i__25739__auto___30480 = G__30481;
continue;
} else {
}
break;
}

var G__30410 = args30408.length;
switch (G__30410) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30408.length)].join('')));

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
var c__28444__auto___30483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___30483,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___30483,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30449){
var state_val_30450 = (state_30449[(1)]);
if((state_val_30450 === (7))){
var state_30449__$1 = state_30449;
var statearr_30451_30484 = state_30449__$1;
(statearr_30451_30484[(2)] = null);

(statearr_30451_30484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (1))){
var state_30449__$1 = state_30449;
var statearr_30452_30485 = state_30449__$1;
(statearr_30452_30485[(2)] = null);

(statearr_30452_30485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (4))){
var inst_30413 = (state_30449[(7)]);
var inst_30415 = (inst_30413 < cnt);
var state_30449__$1 = state_30449;
if(cljs.core.truth_(inst_30415)){
var statearr_30453_30486 = state_30449__$1;
(statearr_30453_30486[(1)] = (6));

} else {
var statearr_30454_30487 = state_30449__$1;
(statearr_30454_30487[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (15))){
var inst_30445 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30455_30488 = state_30449__$1;
(statearr_30455_30488[(2)] = inst_30445);

(statearr_30455_30488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (13))){
var inst_30438 = cljs.core.async.close_BANG_.call(null,out);
var state_30449__$1 = state_30449;
var statearr_30456_30489 = state_30449__$1;
(statearr_30456_30489[(2)] = inst_30438);

(statearr_30456_30489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (6))){
var state_30449__$1 = state_30449;
var statearr_30457_30490 = state_30449__$1;
(statearr_30457_30490[(2)] = null);

(statearr_30457_30490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (3))){
var inst_30447 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30449__$1,inst_30447);
} else {
if((state_val_30450 === (12))){
var inst_30435 = (state_30449[(8)]);
var inst_30435__$1 = (state_30449[(2)]);
var inst_30436 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30435__$1);
var state_30449__$1 = (function (){var statearr_30458 = state_30449;
(statearr_30458[(8)] = inst_30435__$1);

return statearr_30458;
})();
if(cljs.core.truth_(inst_30436)){
var statearr_30459_30491 = state_30449__$1;
(statearr_30459_30491[(1)] = (13));

} else {
var statearr_30460_30492 = state_30449__$1;
(statearr_30460_30492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (2))){
var inst_30412 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30413 = (0);
var state_30449__$1 = (function (){var statearr_30461 = state_30449;
(statearr_30461[(7)] = inst_30413);

(statearr_30461[(9)] = inst_30412);

return statearr_30461;
})();
var statearr_30462_30493 = state_30449__$1;
(statearr_30462_30493[(2)] = null);

(statearr_30462_30493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (11))){
var inst_30413 = (state_30449[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30449,(10),Object,null,(9));
var inst_30422 = chs__$1.call(null,inst_30413);
var inst_30423 = done.call(null,inst_30413);
var inst_30424 = cljs.core.async.take_BANG_.call(null,inst_30422,inst_30423);
var state_30449__$1 = state_30449;
var statearr_30463_30494 = state_30449__$1;
(statearr_30463_30494[(2)] = inst_30424);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30449__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (9))){
var inst_30413 = (state_30449[(7)]);
var inst_30426 = (state_30449[(2)]);
var inst_30427 = (inst_30413 + (1));
var inst_30413__$1 = inst_30427;
var state_30449__$1 = (function (){var statearr_30464 = state_30449;
(statearr_30464[(10)] = inst_30426);

(statearr_30464[(7)] = inst_30413__$1);

return statearr_30464;
})();
var statearr_30465_30495 = state_30449__$1;
(statearr_30465_30495[(2)] = null);

(statearr_30465_30495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (5))){
var inst_30433 = (state_30449[(2)]);
var state_30449__$1 = (function (){var statearr_30466 = state_30449;
(statearr_30466[(11)] = inst_30433);

return statearr_30466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30449__$1,(12),dchan);
} else {
if((state_val_30450 === (14))){
var inst_30435 = (state_30449[(8)]);
var inst_30440 = cljs.core.apply.call(null,f,inst_30435);
var state_30449__$1 = state_30449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30449__$1,(16),out,inst_30440);
} else {
if((state_val_30450 === (16))){
var inst_30442 = (state_30449[(2)]);
var state_30449__$1 = (function (){var statearr_30467 = state_30449;
(statearr_30467[(12)] = inst_30442);

return statearr_30467;
})();
var statearr_30468_30496 = state_30449__$1;
(statearr_30468_30496[(2)] = null);

(statearr_30468_30496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (10))){
var inst_30417 = (state_30449[(2)]);
var inst_30418 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30449__$1 = (function (){var statearr_30469 = state_30449;
(statearr_30469[(13)] = inst_30417);

return statearr_30469;
})();
var statearr_30470_30497 = state_30449__$1;
(statearr_30470_30497[(2)] = inst_30418);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30449__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (8))){
var inst_30431 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30471_30498 = state_30449__$1;
(statearr_30471_30498[(2)] = inst_30431);

(statearr_30471_30498[(1)] = (5));


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
});})(c__28444__auto___30483,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28332__auto__,c__28444__auto___30483,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28333__auto__ = null;
var cljs$core$async$state_machine__28333__auto____0 = (function (){
var statearr_30475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30475[(0)] = cljs$core$async$state_machine__28333__auto__);

(statearr_30475[(1)] = (1));

return statearr_30475;
});
var cljs$core$async$state_machine__28333__auto____1 = (function (state_30449){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_30449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e30476){if((e30476 instanceof Object)){
var ex__28336__auto__ = e30476;
var statearr_30477_30499 = state_30449;
(statearr_30477_30499[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30500 = state_30449;
state_30449 = G__30500;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$state_machine__28333__auto__ = function(state_30449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28333__auto____1.call(this,state_30449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28333__auto____0;
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28333__auto____1;
return cljs$core$async$state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___30483,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28446__auto__ = (function (){var statearr_30478 = f__28445__auto__.call(null);
(statearr_30478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___30483);

return statearr_30478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___30483,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30502 = [];
var len__25738__auto___30560 = arguments.length;
var i__25739__auto___30561 = (0);
while(true){
if((i__25739__auto___30561 < len__25738__auto___30560)){
args30502.push((arguments[i__25739__auto___30561]));

var G__30562 = (i__25739__auto___30561 + (1));
i__25739__auto___30561 = G__30562;
continue;
} else {
}
break;
}

var G__30504 = args30502.length;
switch (G__30504) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30502.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28444__auto___30564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___30564,out){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___30564,out){
return (function (state_30536){
var state_val_30537 = (state_30536[(1)]);
if((state_val_30537 === (7))){
var inst_30516 = (state_30536[(7)]);
var inst_30515 = (state_30536[(8)]);
var inst_30515__$1 = (state_30536[(2)]);
var inst_30516__$1 = cljs.core.nth.call(null,inst_30515__$1,(0),null);
var inst_30517 = cljs.core.nth.call(null,inst_30515__$1,(1),null);
var inst_30518 = (inst_30516__$1 == null);
var state_30536__$1 = (function (){var statearr_30538 = state_30536;
(statearr_30538[(9)] = inst_30517);

(statearr_30538[(7)] = inst_30516__$1);

(statearr_30538[(8)] = inst_30515__$1);

return statearr_30538;
})();
if(cljs.core.truth_(inst_30518)){
var statearr_30539_30565 = state_30536__$1;
(statearr_30539_30565[(1)] = (8));

} else {
var statearr_30540_30566 = state_30536__$1;
(statearr_30540_30566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (1))){
var inst_30505 = cljs.core.vec.call(null,chs);
var inst_30506 = inst_30505;
var state_30536__$1 = (function (){var statearr_30541 = state_30536;
(statearr_30541[(10)] = inst_30506);

return statearr_30541;
})();
var statearr_30542_30567 = state_30536__$1;
(statearr_30542_30567[(2)] = null);

(statearr_30542_30567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (4))){
var inst_30506 = (state_30536[(10)]);
var state_30536__$1 = state_30536;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30536__$1,(7),inst_30506);
} else {
if((state_val_30537 === (6))){
var inst_30532 = (state_30536[(2)]);
var state_30536__$1 = state_30536;
var statearr_30543_30568 = state_30536__$1;
(statearr_30543_30568[(2)] = inst_30532);

(statearr_30543_30568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (3))){
var inst_30534 = (state_30536[(2)]);
var state_30536__$1 = state_30536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30536__$1,inst_30534);
} else {
if((state_val_30537 === (2))){
var inst_30506 = (state_30536[(10)]);
var inst_30508 = cljs.core.count.call(null,inst_30506);
var inst_30509 = (inst_30508 > (0));
var state_30536__$1 = state_30536;
if(cljs.core.truth_(inst_30509)){
var statearr_30545_30569 = state_30536__$1;
(statearr_30545_30569[(1)] = (4));

} else {
var statearr_30546_30570 = state_30536__$1;
(statearr_30546_30570[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (11))){
var inst_30506 = (state_30536[(10)]);
var inst_30525 = (state_30536[(2)]);
var tmp30544 = inst_30506;
var inst_30506__$1 = tmp30544;
var state_30536__$1 = (function (){var statearr_30547 = state_30536;
(statearr_30547[(11)] = inst_30525);

(statearr_30547[(10)] = inst_30506__$1);

return statearr_30547;
})();
var statearr_30548_30571 = state_30536__$1;
(statearr_30548_30571[(2)] = null);

(statearr_30548_30571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (9))){
var inst_30516 = (state_30536[(7)]);
var state_30536__$1 = state_30536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30536__$1,(11),out,inst_30516);
} else {
if((state_val_30537 === (5))){
var inst_30530 = cljs.core.async.close_BANG_.call(null,out);
var state_30536__$1 = state_30536;
var statearr_30549_30572 = state_30536__$1;
(statearr_30549_30572[(2)] = inst_30530);

(statearr_30549_30572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (10))){
var inst_30528 = (state_30536[(2)]);
var state_30536__$1 = state_30536;
var statearr_30550_30573 = state_30536__$1;
(statearr_30550_30573[(2)] = inst_30528);

(statearr_30550_30573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (8))){
var inst_30517 = (state_30536[(9)]);
var inst_30516 = (state_30536[(7)]);
var inst_30515 = (state_30536[(8)]);
var inst_30506 = (state_30536[(10)]);
var inst_30520 = (function (){var cs = inst_30506;
var vec__30511 = inst_30515;
var v = inst_30516;
var c = inst_30517;
return ((function (cs,vec__30511,v,c,inst_30517,inst_30516,inst_30515,inst_30506,state_val_30537,c__28444__auto___30564,out){
return (function (p1__30501_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30501_SHARP_);
});
;})(cs,vec__30511,v,c,inst_30517,inst_30516,inst_30515,inst_30506,state_val_30537,c__28444__auto___30564,out))
})();
var inst_30521 = cljs.core.filterv.call(null,inst_30520,inst_30506);
var inst_30506__$1 = inst_30521;
var state_30536__$1 = (function (){var statearr_30551 = state_30536;
(statearr_30551[(10)] = inst_30506__$1);

return statearr_30551;
})();
var statearr_30552_30574 = state_30536__$1;
(statearr_30552_30574[(2)] = null);

(statearr_30552_30574[(1)] = (2));


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
});})(c__28444__auto___30564,out))
;
return ((function (switch__28332__auto__,c__28444__auto___30564,out){
return (function() {
var cljs$core$async$state_machine__28333__auto__ = null;
var cljs$core$async$state_machine__28333__auto____0 = (function (){
var statearr_30556 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30556[(0)] = cljs$core$async$state_machine__28333__auto__);

(statearr_30556[(1)] = (1));

return statearr_30556;
});
var cljs$core$async$state_machine__28333__auto____1 = (function (state_30536){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_30536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e30557){if((e30557 instanceof Object)){
var ex__28336__auto__ = e30557;
var statearr_30558_30575 = state_30536;
(statearr_30558_30575[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30576 = state_30536;
state_30536 = G__30576;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$state_machine__28333__auto__ = function(state_30536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28333__auto____1.call(this,state_30536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28333__auto____0;
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28333__auto____1;
return cljs$core$async$state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___30564,out))
})();
var state__28446__auto__ = (function (){var statearr_30559 = f__28445__auto__.call(null);
(statearr_30559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___30564);

return statearr_30559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___30564,out))
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
var args30577 = [];
var len__25738__auto___30626 = arguments.length;
var i__25739__auto___30627 = (0);
while(true){
if((i__25739__auto___30627 < len__25738__auto___30626)){
args30577.push((arguments[i__25739__auto___30627]));

var G__30628 = (i__25739__auto___30627 + (1));
i__25739__auto___30627 = G__30628;
continue;
} else {
}
break;
}

var G__30579 = args30577.length;
switch (G__30579) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30577.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28444__auto___30630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___30630,out){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___30630,out){
return (function (state_30603){
var state_val_30604 = (state_30603[(1)]);
if((state_val_30604 === (7))){
var inst_30585 = (state_30603[(7)]);
var inst_30585__$1 = (state_30603[(2)]);
var inst_30586 = (inst_30585__$1 == null);
var inst_30587 = cljs.core.not.call(null,inst_30586);
var state_30603__$1 = (function (){var statearr_30605 = state_30603;
(statearr_30605[(7)] = inst_30585__$1);

return statearr_30605;
})();
if(inst_30587){
var statearr_30606_30631 = state_30603__$1;
(statearr_30606_30631[(1)] = (8));

} else {
var statearr_30607_30632 = state_30603__$1;
(statearr_30607_30632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30604 === (1))){
var inst_30580 = (0);
var state_30603__$1 = (function (){var statearr_30608 = state_30603;
(statearr_30608[(8)] = inst_30580);

return statearr_30608;
})();
var statearr_30609_30633 = state_30603__$1;
(statearr_30609_30633[(2)] = null);

(statearr_30609_30633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30604 === (4))){
var state_30603__$1 = state_30603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30603__$1,(7),ch);
} else {
if((state_val_30604 === (6))){
var inst_30598 = (state_30603[(2)]);
var state_30603__$1 = state_30603;
var statearr_30610_30634 = state_30603__$1;
(statearr_30610_30634[(2)] = inst_30598);

(statearr_30610_30634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30604 === (3))){
var inst_30600 = (state_30603[(2)]);
var inst_30601 = cljs.core.async.close_BANG_.call(null,out);
var state_30603__$1 = (function (){var statearr_30611 = state_30603;
(statearr_30611[(9)] = inst_30600);

return statearr_30611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30603__$1,inst_30601);
} else {
if((state_val_30604 === (2))){
var inst_30580 = (state_30603[(8)]);
var inst_30582 = (inst_30580 < n);
var state_30603__$1 = state_30603;
if(cljs.core.truth_(inst_30582)){
var statearr_30612_30635 = state_30603__$1;
(statearr_30612_30635[(1)] = (4));

} else {
var statearr_30613_30636 = state_30603__$1;
(statearr_30613_30636[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30604 === (11))){
var inst_30580 = (state_30603[(8)]);
var inst_30590 = (state_30603[(2)]);
var inst_30591 = (inst_30580 + (1));
var inst_30580__$1 = inst_30591;
var state_30603__$1 = (function (){var statearr_30614 = state_30603;
(statearr_30614[(8)] = inst_30580__$1);

(statearr_30614[(10)] = inst_30590);

return statearr_30614;
})();
var statearr_30615_30637 = state_30603__$1;
(statearr_30615_30637[(2)] = null);

(statearr_30615_30637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30604 === (9))){
var state_30603__$1 = state_30603;
var statearr_30616_30638 = state_30603__$1;
(statearr_30616_30638[(2)] = null);

(statearr_30616_30638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30604 === (5))){
var state_30603__$1 = state_30603;
var statearr_30617_30639 = state_30603__$1;
(statearr_30617_30639[(2)] = null);

(statearr_30617_30639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30604 === (10))){
var inst_30595 = (state_30603[(2)]);
var state_30603__$1 = state_30603;
var statearr_30618_30640 = state_30603__$1;
(statearr_30618_30640[(2)] = inst_30595);

(statearr_30618_30640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30604 === (8))){
var inst_30585 = (state_30603[(7)]);
var state_30603__$1 = state_30603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30603__$1,(11),out,inst_30585);
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
});})(c__28444__auto___30630,out))
;
return ((function (switch__28332__auto__,c__28444__auto___30630,out){
return (function() {
var cljs$core$async$state_machine__28333__auto__ = null;
var cljs$core$async$state_machine__28333__auto____0 = (function (){
var statearr_30622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30622[(0)] = cljs$core$async$state_machine__28333__auto__);

(statearr_30622[(1)] = (1));

return statearr_30622;
});
var cljs$core$async$state_machine__28333__auto____1 = (function (state_30603){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_30603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e30623){if((e30623 instanceof Object)){
var ex__28336__auto__ = e30623;
var statearr_30624_30641 = state_30603;
(statearr_30624_30641[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30642 = state_30603;
state_30603 = G__30642;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$state_machine__28333__auto__ = function(state_30603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28333__auto____1.call(this,state_30603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28333__auto____0;
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28333__auto____1;
return cljs$core$async$state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___30630,out))
})();
var state__28446__auto__ = (function (){var statearr_30625 = f__28445__auto__.call(null);
(statearr_30625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___30630);

return statearr_30625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___30630,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30650 = (function (map_LT_,f,ch,meta30651){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30651 = meta30651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30652,meta30651__$1){
var self__ = this;
var _30652__$1 = this;
return (new cljs.core.async.t_cljs$core$async30650(self__.map_LT_,self__.f,self__.ch,meta30651__$1));
});

cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30652){
var self__ = this;
var _30652__$1 = this;
return self__.meta30651;
});

cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30653 = (function (map_LT_,f,ch,meta30651,_,fn1,meta30654){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30651 = meta30651;
this._ = _;
this.fn1 = fn1;
this.meta30654 = meta30654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30655,meta30654__$1){
var self__ = this;
var _30655__$1 = this;
return (new cljs.core.async.t_cljs$core$async30653(self__.map_LT_,self__.f,self__.ch,self__.meta30651,self__._,self__.fn1,meta30654__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30655){
var self__ = this;
var _30655__$1 = this;
return self__.meta30654;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30643_SHARP_){
return f1.call(null,(((p1__30643_SHARP_ == null))?null:self__.f.call(null,p1__30643_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30653.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30651","meta30651",493600023,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30650","cljs.core.async/t_cljs$core$async30650",191394391,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30654","meta30654",2086584519,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30653";

cljs.core.async.t_cljs$core$async30653.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25269__auto__,writer__25270__auto__,opt__25271__auto__){
return cljs.core._write.call(null,writer__25270__auto__,"cljs.core.async/t_cljs$core$async30653");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30653 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30653(map_LT___$1,f__$1,ch__$1,meta30651__$1,___$2,fn1__$1,meta30654){
return (new cljs.core.async.t_cljs$core$async30653(map_LT___$1,f__$1,ch__$1,meta30651__$1,___$2,fn1__$1,meta30654));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30653(self__.map_LT_,self__.f,self__.ch,self__.meta30651,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24651__auto__ = ret;
if(cljs.core.truth_(and__24651__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24651__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30651","meta30651",493600023,null)], null);
});

cljs.core.async.t_cljs$core$async30650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30650";

cljs.core.async.t_cljs$core$async30650.cljs$lang$ctorPrWriter = (function (this__25269__auto__,writer__25270__auto__,opt__25271__auto__){
return cljs.core._write.call(null,writer__25270__auto__,"cljs.core.async/t_cljs$core$async30650");
});

cljs.core.async.__GT_t_cljs$core$async30650 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30650(map_LT___$1,f__$1,ch__$1,meta30651){
return (new cljs.core.async.t_cljs$core$async30650(map_LT___$1,f__$1,ch__$1,meta30651));
});

}

return (new cljs.core.async.t_cljs$core$async30650(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30659 = (function (map_GT_,f,ch,meta30660){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30660 = meta30660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30661,meta30660__$1){
var self__ = this;
var _30661__$1 = this;
return (new cljs.core.async.t_cljs$core$async30659(self__.map_GT_,self__.f,self__.ch,meta30660__$1));
});

cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30661){
var self__ = this;
var _30661__$1 = this;
return self__.meta30660;
});

cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30660","meta30660",1854046391,null)], null);
});

cljs.core.async.t_cljs$core$async30659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30659";

cljs.core.async.t_cljs$core$async30659.cljs$lang$ctorPrWriter = (function (this__25269__auto__,writer__25270__auto__,opt__25271__auto__){
return cljs.core._write.call(null,writer__25270__auto__,"cljs.core.async/t_cljs$core$async30659");
});

cljs.core.async.__GT_t_cljs$core$async30659 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30659(map_GT___$1,f__$1,ch__$1,meta30660){
return (new cljs.core.async.t_cljs$core$async30659(map_GT___$1,f__$1,ch__$1,meta30660));
});

}

return (new cljs.core.async.t_cljs$core$async30659(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30665 = (function (filter_GT_,p,ch,meta30666){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30666 = meta30666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30667,meta30666__$1){
var self__ = this;
var _30667__$1 = this;
return (new cljs.core.async.t_cljs$core$async30665(self__.filter_GT_,self__.p,self__.ch,meta30666__$1));
});

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30667){
var self__ = this;
var _30667__$1 = this;
return self__.meta30666;
});

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30666","meta30666",2146358070,null)], null);
});

cljs.core.async.t_cljs$core$async30665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30665";

cljs.core.async.t_cljs$core$async30665.cljs$lang$ctorPrWriter = (function (this__25269__auto__,writer__25270__auto__,opt__25271__auto__){
return cljs.core._write.call(null,writer__25270__auto__,"cljs.core.async/t_cljs$core$async30665");
});

cljs.core.async.__GT_t_cljs$core$async30665 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30665(filter_GT___$1,p__$1,ch__$1,meta30666){
return (new cljs.core.async.t_cljs$core$async30665(filter_GT___$1,p__$1,ch__$1,meta30666));
});

}

return (new cljs.core.async.t_cljs$core$async30665(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30668 = [];
var len__25738__auto___30712 = arguments.length;
var i__25739__auto___30713 = (0);
while(true){
if((i__25739__auto___30713 < len__25738__auto___30712)){
args30668.push((arguments[i__25739__auto___30713]));

var G__30714 = (i__25739__auto___30713 + (1));
i__25739__auto___30713 = G__30714;
continue;
} else {
}
break;
}

var G__30670 = args30668.length;
switch (G__30670) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30668.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28444__auto___30716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___30716,out){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___30716,out){
return (function (state_30691){
var state_val_30692 = (state_30691[(1)]);
if((state_val_30692 === (7))){
var inst_30687 = (state_30691[(2)]);
var state_30691__$1 = state_30691;
var statearr_30693_30717 = state_30691__$1;
(statearr_30693_30717[(2)] = inst_30687);

(statearr_30693_30717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (1))){
var state_30691__$1 = state_30691;
var statearr_30694_30718 = state_30691__$1;
(statearr_30694_30718[(2)] = null);

(statearr_30694_30718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (4))){
var inst_30673 = (state_30691[(7)]);
var inst_30673__$1 = (state_30691[(2)]);
var inst_30674 = (inst_30673__$1 == null);
var state_30691__$1 = (function (){var statearr_30695 = state_30691;
(statearr_30695[(7)] = inst_30673__$1);

return statearr_30695;
})();
if(cljs.core.truth_(inst_30674)){
var statearr_30696_30719 = state_30691__$1;
(statearr_30696_30719[(1)] = (5));

} else {
var statearr_30697_30720 = state_30691__$1;
(statearr_30697_30720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (6))){
var inst_30673 = (state_30691[(7)]);
var inst_30678 = p.call(null,inst_30673);
var state_30691__$1 = state_30691;
if(cljs.core.truth_(inst_30678)){
var statearr_30698_30721 = state_30691__$1;
(statearr_30698_30721[(1)] = (8));

} else {
var statearr_30699_30722 = state_30691__$1;
(statearr_30699_30722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (3))){
var inst_30689 = (state_30691[(2)]);
var state_30691__$1 = state_30691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30691__$1,inst_30689);
} else {
if((state_val_30692 === (2))){
var state_30691__$1 = state_30691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30691__$1,(4),ch);
} else {
if((state_val_30692 === (11))){
var inst_30681 = (state_30691[(2)]);
var state_30691__$1 = state_30691;
var statearr_30700_30723 = state_30691__$1;
(statearr_30700_30723[(2)] = inst_30681);

(statearr_30700_30723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (9))){
var state_30691__$1 = state_30691;
var statearr_30701_30724 = state_30691__$1;
(statearr_30701_30724[(2)] = null);

(statearr_30701_30724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (5))){
var inst_30676 = cljs.core.async.close_BANG_.call(null,out);
var state_30691__$1 = state_30691;
var statearr_30702_30725 = state_30691__$1;
(statearr_30702_30725[(2)] = inst_30676);

(statearr_30702_30725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (10))){
var inst_30684 = (state_30691[(2)]);
var state_30691__$1 = (function (){var statearr_30703 = state_30691;
(statearr_30703[(8)] = inst_30684);

return statearr_30703;
})();
var statearr_30704_30726 = state_30691__$1;
(statearr_30704_30726[(2)] = null);

(statearr_30704_30726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (8))){
var inst_30673 = (state_30691[(7)]);
var state_30691__$1 = state_30691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30691__$1,(11),out,inst_30673);
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
});})(c__28444__auto___30716,out))
;
return ((function (switch__28332__auto__,c__28444__auto___30716,out){
return (function() {
var cljs$core$async$state_machine__28333__auto__ = null;
var cljs$core$async$state_machine__28333__auto____0 = (function (){
var statearr_30708 = [null,null,null,null,null,null,null,null,null];
(statearr_30708[(0)] = cljs$core$async$state_machine__28333__auto__);

(statearr_30708[(1)] = (1));

return statearr_30708;
});
var cljs$core$async$state_machine__28333__auto____1 = (function (state_30691){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_30691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e30709){if((e30709 instanceof Object)){
var ex__28336__auto__ = e30709;
var statearr_30710_30727 = state_30691;
(statearr_30710_30727[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30728 = state_30691;
state_30691 = G__30728;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$state_machine__28333__auto__ = function(state_30691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28333__auto____1.call(this,state_30691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28333__auto____0;
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28333__auto____1;
return cljs$core$async$state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___30716,out))
})();
var state__28446__auto__ = (function (){var statearr_30711 = f__28445__auto__.call(null);
(statearr_30711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___30716);

return statearr_30711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___30716,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30729 = [];
var len__25738__auto___30732 = arguments.length;
var i__25739__auto___30733 = (0);
while(true){
if((i__25739__auto___30733 < len__25738__auto___30732)){
args30729.push((arguments[i__25739__auto___30733]));

var G__30734 = (i__25739__auto___30733 + (1));
i__25739__auto___30733 = G__30734;
continue;
} else {
}
break;
}

var G__30731 = args30729.length;
switch (G__30731) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30729.length)].join('')));

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
var c__28444__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto__){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto__){
return (function (state_30901){
var state_val_30902 = (state_30901[(1)]);
if((state_val_30902 === (7))){
var inst_30897 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
var statearr_30903_30944 = state_30901__$1;
(statearr_30903_30944[(2)] = inst_30897);

(statearr_30903_30944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (20))){
var inst_30867 = (state_30901[(7)]);
var inst_30878 = (state_30901[(2)]);
var inst_30879 = cljs.core.next.call(null,inst_30867);
var inst_30853 = inst_30879;
var inst_30854 = null;
var inst_30855 = (0);
var inst_30856 = (0);
var state_30901__$1 = (function (){var statearr_30904 = state_30901;
(statearr_30904[(8)] = inst_30855);

(statearr_30904[(9)] = inst_30878);

(statearr_30904[(10)] = inst_30853);

(statearr_30904[(11)] = inst_30856);

(statearr_30904[(12)] = inst_30854);

return statearr_30904;
})();
var statearr_30905_30945 = state_30901__$1;
(statearr_30905_30945[(2)] = null);

(statearr_30905_30945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (1))){
var state_30901__$1 = state_30901;
var statearr_30906_30946 = state_30901__$1;
(statearr_30906_30946[(2)] = null);

(statearr_30906_30946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (4))){
var inst_30842 = (state_30901[(13)]);
var inst_30842__$1 = (state_30901[(2)]);
var inst_30843 = (inst_30842__$1 == null);
var state_30901__$1 = (function (){var statearr_30907 = state_30901;
(statearr_30907[(13)] = inst_30842__$1);

return statearr_30907;
})();
if(cljs.core.truth_(inst_30843)){
var statearr_30908_30947 = state_30901__$1;
(statearr_30908_30947[(1)] = (5));

} else {
var statearr_30909_30948 = state_30901__$1;
(statearr_30909_30948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (15))){
var state_30901__$1 = state_30901;
var statearr_30913_30949 = state_30901__$1;
(statearr_30913_30949[(2)] = null);

(statearr_30913_30949[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (21))){
var state_30901__$1 = state_30901;
var statearr_30914_30950 = state_30901__$1;
(statearr_30914_30950[(2)] = null);

(statearr_30914_30950[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (13))){
var inst_30855 = (state_30901[(8)]);
var inst_30853 = (state_30901[(10)]);
var inst_30856 = (state_30901[(11)]);
var inst_30854 = (state_30901[(12)]);
var inst_30863 = (state_30901[(2)]);
var inst_30864 = (inst_30856 + (1));
var tmp30910 = inst_30855;
var tmp30911 = inst_30853;
var tmp30912 = inst_30854;
var inst_30853__$1 = tmp30911;
var inst_30854__$1 = tmp30912;
var inst_30855__$1 = tmp30910;
var inst_30856__$1 = inst_30864;
var state_30901__$1 = (function (){var statearr_30915 = state_30901;
(statearr_30915[(8)] = inst_30855__$1);

(statearr_30915[(14)] = inst_30863);

(statearr_30915[(10)] = inst_30853__$1);

(statearr_30915[(11)] = inst_30856__$1);

(statearr_30915[(12)] = inst_30854__$1);

return statearr_30915;
})();
var statearr_30916_30951 = state_30901__$1;
(statearr_30916_30951[(2)] = null);

(statearr_30916_30951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (22))){
var state_30901__$1 = state_30901;
var statearr_30917_30952 = state_30901__$1;
(statearr_30917_30952[(2)] = null);

(statearr_30917_30952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (6))){
var inst_30842 = (state_30901[(13)]);
var inst_30851 = f.call(null,inst_30842);
var inst_30852 = cljs.core.seq.call(null,inst_30851);
var inst_30853 = inst_30852;
var inst_30854 = null;
var inst_30855 = (0);
var inst_30856 = (0);
var state_30901__$1 = (function (){var statearr_30918 = state_30901;
(statearr_30918[(8)] = inst_30855);

(statearr_30918[(10)] = inst_30853);

(statearr_30918[(11)] = inst_30856);

(statearr_30918[(12)] = inst_30854);

return statearr_30918;
})();
var statearr_30919_30953 = state_30901__$1;
(statearr_30919_30953[(2)] = null);

(statearr_30919_30953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (17))){
var inst_30867 = (state_30901[(7)]);
var inst_30871 = cljs.core.chunk_first.call(null,inst_30867);
var inst_30872 = cljs.core.chunk_rest.call(null,inst_30867);
var inst_30873 = cljs.core.count.call(null,inst_30871);
var inst_30853 = inst_30872;
var inst_30854 = inst_30871;
var inst_30855 = inst_30873;
var inst_30856 = (0);
var state_30901__$1 = (function (){var statearr_30920 = state_30901;
(statearr_30920[(8)] = inst_30855);

(statearr_30920[(10)] = inst_30853);

(statearr_30920[(11)] = inst_30856);

(statearr_30920[(12)] = inst_30854);

return statearr_30920;
})();
var statearr_30921_30954 = state_30901__$1;
(statearr_30921_30954[(2)] = null);

(statearr_30921_30954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (3))){
var inst_30899 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30901__$1,inst_30899);
} else {
if((state_val_30902 === (12))){
var inst_30887 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
var statearr_30922_30955 = state_30901__$1;
(statearr_30922_30955[(2)] = inst_30887);

(statearr_30922_30955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (2))){
var state_30901__$1 = state_30901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30901__$1,(4),in$);
} else {
if((state_val_30902 === (23))){
var inst_30895 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
var statearr_30923_30956 = state_30901__$1;
(statearr_30923_30956[(2)] = inst_30895);

(statearr_30923_30956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (19))){
var inst_30882 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
var statearr_30924_30957 = state_30901__$1;
(statearr_30924_30957[(2)] = inst_30882);

(statearr_30924_30957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (11))){
var inst_30867 = (state_30901[(7)]);
var inst_30853 = (state_30901[(10)]);
var inst_30867__$1 = cljs.core.seq.call(null,inst_30853);
var state_30901__$1 = (function (){var statearr_30925 = state_30901;
(statearr_30925[(7)] = inst_30867__$1);

return statearr_30925;
})();
if(inst_30867__$1){
var statearr_30926_30958 = state_30901__$1;
(statearr_30926_30958[(1)] = (14));

} else {
var statearr_30927_30959 = state_30901__$1;
(statearr_30927_30959[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (9))){
var inst_30889 = (state_30901[(2)]);
var inst_30890 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30901__$1 = (function (){var statearr_30928 = state_30901;
(statearr_30928[(15)] = inst_30889);

return statearr_30928;
})();
if(cljs.core.truth_(inst_30890)){
var statearr_30929_30960 = state_30901__$1;
(statearr_30929_30960[(1)] = (21));

} else {
var statearr_30930_30961 = state_30901__$1;
(statearr_30930_30961[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (5))){
var inst_30845 = cljs.core.async.close_BANG_.call(null,out);
var state_30901__$1 = state_30901;
var statearr_30931_30962 = state_30901__$1;
(statearr_30931_30962[(2)] = inst_30845);

(statearr_30931_30962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (14))){
var inst_30867 = (state_30901[(7)]);
var inst_30869 = cljs.core.chunked_seq_QMARK_.call(null,inst_30867);
var state_30901__$1 = state_30901;
if(inst_30869){
var statearr_30932_30963 = state_30901__$1;
(statearr_30932_30963[(1)] = (17));

} else {
var statearr_30933_30964 = state_30901__$1;
(statearr_30933_30964[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (16))){
var inst_30885 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
var statearr_30934_30965 = state_30901__$1;
(statearr_30934_30965[(2)] = inst_30885);

(statearr_30934_30965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (10))){
var inst_30856 = (state_30901[(11)]);
var inst_30854 = (state_30901[(12)]);
var inst_30861 = cljs.core._nth.call(null,inst_30854,inst_30856);
var state_30901__$1 = state_30901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30901__$1,(13),out,inst_30861);
} else {
if((state_val_30902 === (18))){
var inst_30867 = (state_30901[(7)]);
var inst_30876 = cljs.core.first.call(null,inst_30867);
var state_30901__$1 = state_30901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30901__$1,(20),out,inst_30876);
} else {
if((state_val_30902 === (8))){
var inst_30855 = (state_30901[(8)]);
var inst_30856 = (state_30901[(11)]);
var inst_30858 = (inst_30856 < inst_30855);
var inst_30859 = inst_30858;
var state_30901__$1 = state_30901;
if(cljs.core.truth_(inst_30859)){
var statearr_30935_30966 = state_30901__$1;
(statearr_30935_30966[(1)] = (10));

} else {
var statearr_30936_30967 = state_30901__$1;
(statearr_30936_30967[(1)] = (11));

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
});})(c__28444__auto__))
;
return ((function (switch__28332__auto__,c__28444__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28333__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28333__auto____0 = (function (){
var statearr_30940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30940[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28333__auto__);

(statearr_30940[(1)] = (1));

return statearr_30940;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28333__auto____1 = (function (state_30901){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_30901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e30941){if((e30941 instanceof Object)){
var ex__28336__auto__ = e30941;
var statearr_30942_30968 = state_30901;
(statearr_30942_30968[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30969 = state_30901;
state_30901 = G__30969;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28333__auto__ = function(state_30901){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28333__auto____1.call(this,state_30901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28333__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28333__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto__))
})();
var state__28446__auto__ = (function (){var statearr_30943 = f__28445__auto__.call(null);
(statearr_30943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto__);

return statearr_30943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto__))
);

return c__28444__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30970 = [];
var len__25738__auto___30973 = arguments.length;
var i__25739__auto___30974 = (0);
while(true){
if((i__25739__auto___30974 < len__25738__auto___30973)){
args30970.push((arguments[i__25739__auto___30974]));

var G__30975 = (i__25739__auto___30974 + (1));
i__25739__auto___30974 = G__30975;
continue;
} else {
}
break;
}

var G__30972 = args30970.length;
switch (G__30972) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30970.length)].join('')));

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
var args30977 = [];
var len__25738__auto___30980 = arguments.length;
var i__25739__auto___30981 = (0);
while(true){
if((i__25739__auto___30981 < len__25738__auto___30980)){
args30977.push((arguments[i__25739__auto___30981]));

var G__30982 = (i__25739__auto___30981 + (1));
i__25739__auto___30981 = G__30982;
continue;
} else {
}
break;
}

var G__30979 = args30977.length;
switch (G__30979) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30977.length)].join('')));

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
var args30984 = [];
var len__25738__auto___31035 = arguments.length;
var i__25739__auto___31036 = (0);
while(true){
if((i__25739__auto___31036 < len__25738__auto___31035)){
args30984.push((arguments[i__25739__auto___31036]));

var G__31037 = (i__25739__auto___31036 + (1));
i__25739__auto___31036 = G__31037;
continue;
} else {
}
break;
}

var G__30986 = args30984.length;
switch (G__30986) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30984.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28444__auto___31039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___31039,out){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___31039,out){
return (function (state_31010){
var state_val_31011 = (state_31010[(1)]);
if((state_val_31011 === (7))){
var inst_31005 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
var statearr_31012_31040 = state_31010__$1;
(statearr_31012_31040[(2)] = inst_31005);

(statearr_31012_31040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (1))){
var inst_30987 = null;
var state_31010__$1 = (function (){var statearr_31013 = state_31010;
(statearr_31013[(7)] = inst_30987);

return statearr_31013;
})();
var statearr_31014_31041 = state_31010__$1;
(statearr_31014_31041[(2)] = null);

(statearr_31014_31041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (4))){
var inst_30990 = (state_31010[(8)]);
var inst_30990__$1 = (state_31010[(2)]);
var inst_30991 = (inst_30990__$1 == null);
var inst_30992 = cljs.core.not.call(null,inst_30991);
var state_31010__$1 = (function (){var statearr_31015 = state_31010;
(statearr_31015[(8)] = inst_30990__$1);

return statearr_31015;
})();
if(inst_30992){
var statearr_31016_31042 = state_31010__$1;
(statearr_31016_31042[(1)] = (5));

} else {
var statearr_31017_31043 = state_31010__$1;
(statearr_31017_31043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (6))){
var state_31010__$1 = state_31010;
var statearr_31018_31044 = state_31010__$1;
(statearr_31018_31044[(2)] = null);

(statearr_31018_31044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (3))){
var inst_31007 = (state_31010[(2)]);
var inst_31008 = cljs.core.async.close_BANG_.call(null,out);
var state_31010__$1 = (function (){var statearr_31019 = state_31010;
(statearr_31019[(9)] = inst_31007);

return statearr_31019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31010__$1,inst_31008);
} else {
if((state_val_31011 === (2))){
var state_31010__$1 = state_31010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31010__$1,(4),ch);
} else {
if((state_val_31011 === (11))){
var inst_30990 = (state_31010[(8)]);
var inst_30999 = (state_31010[(2)]);
var inst_30987 = inst_30990;
var state_31010__$1 = (function (){var statearr_31020 = state_31010;
(statearr_31020[(7)] = inst_30987);

(statearr_31020[(10)] = inst_30999);

return statearr_31020;
})();
var statearr_31021_31045 = state_31010__$1;
(statearr_31021_31045[(2)] = null);

(statearr_31021_31045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (9))){
var inst_30990 = (state_31010[(8)]);
var state_31010__$1 = state_31010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31010__$1,(11),out,inst_30990);
} else {
if((state_val_31011 === (5))){
var inst_30990 = (state_31010[(8)]);
var inst_30987 = (state_31010[(7)]);
var inst_30994 = cljs.core._EQ_.call(null,inst_30990,inst_30987);
var state_31010__$1 = state_31010;
if(inst_30994){
var statearr_31023_31046 = state_31010__$1;
(statearr_31023_31046[(1)] = (8));

} else {
var statearr_31024_31047 = state_31010__$1;
(statearr_31024_31047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (10))){
var inst_31002 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
var statearr_31025_31048 = state_31010__$1;
(statearr_31025_31048[(2)] = inst_31002);

(statearr_31025_31048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (8))){
var inst_30987 = (state_31010[(7)]);
var tmp31022 = inst_30987;
var inst_30987__$1 = tmp31022;
var state_31010__$1 = (function (){var statearr_31026 = state_31010;
(statearr_31026[(7)] = inst_30987__$1);

return statearr_31026;
})();
var statearr_31027_31049 = state_31010__$1;
(statearr_31027_31049[(2)] = null);

(statearr_31027_31049[(1)] = (2));


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
});})(c__28444__auto___31039,out))
;
return ((function (switch__28332__auto__,c__28444__auto___31039,out){
return (function() {
var cljs$core$async$state_machine__28333__auto__ = null;
var cljs$core$async$state_machine__28333__auto____0 = (function (){
var statearr_31031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31031[(0)] = cljs$core$async$state_machine__28333__auto__);

(statearr_31031[(1)] = (1));

return statearr_31031;
});
var cljs$core$async$state_machine__28333__auto____1 = (function (state_31010){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_31010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e31032){if((e31032 instanceof Object)){
var ex__28336__auto__ = e31032;
var statearr_31033_31050 = state_31010;
(statearr_31033_31050[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31051 = state_31010;
state_31010 = G__31051;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$state_machine__28333__auto__ = function(state_31010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28333__auto____1.call(this,state_31010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28333__auto____0;
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28333__auto____1;
return cljs$core$async$state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___31039,out))
})();
var state__28446__auto__ = (function (){var statearr_31034 = f__28445__auto__.call(null);
(statearr_31034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___31039);

return statearr_31034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___31039,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31052 = [];
var len__25738__auto___31122 = arguments.length;
var i__25739__auto___31123 = (0);
while(true){
if((i__25739__auto___31123 < len__25738__auto___31122)){
args31052.push((arguments[i__25739__auto___31123]));

var G__31124 = (i__25739__auto___31123 + (1));
i__25739__auto___31123 = G__31124;
continue;
} else {
}
break;
}

var G__31054 = args31052.length;
switch (G__31054) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31052.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28444__auto___31126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___31126,out){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___31126,out){
return (function (state_31092){
var state_val_31093 = (state_31092[(1)]);
if((state_val_31093 === (7))){
var inst_31088 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
var statearr_31094_31127 = state_31092__$1;
(statearr_31094_31127[(2)] = inst_31088);

(statearr_31094_31127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (1))){
var inst_31055 = (new Array(n));
var inst_31056 = inst_31055;
var inst_31057 = (0);
var state_31092__$1 = (function (){var statearr_31095 = state_31092;
(statearr_31095[(7)] = inst_31056);

(statearr_31095[(8)] = inst_31057);

return statearr_31095;
})();
var statearr_31096_31128 = state_31092__$1;
(statearr_31096_31128[(2)] = null);

(statearr_31096_31128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (4))){
var inst_31060 = (state_31092[(9)]);
var inst_31060__$1 = (state_31092[(2)]);
var inst_31061 = (inst_31060__$1 == null);
var inst_31062 = cljs.core.not.call(null,inst_31061);
var state_31092__$1 = (function (){var statearr_31097 = state_31092;
(statearr_31097[(9)] = inst_31060__$1);

return statearr_31097;
})();
if(inst_31062){
var statearr_31098_31129 = state_31092__$1;
(statearr_31098_31129[(1)] = (5));

} else {
var statearr_31099_31130 = state_31092__$1;
(statearr_31099_31130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (15))){
var inst_31082 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
var statearr_31100_31131 = state_31092__$1;
(statearr_31100_31131[(2)] = inst_31082);

(statearr_31100_31131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (13))){
var state_31092__$1 = state_31092;
var statearr_31101_31132 = state_31092__$1;
(statearr_31101_31132[(2)] = null);

(statearr_31101_31132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (6))){
var inst_31057 = (state_31092[(8)]);
var inst_31078 = (inst_31057 > (0));
var state_31092__$1 = state_31092;
if(cljs.core.truth_(inst_31078)){
var statearr_31102_31133 = state_31092__$1;
(statearr_31102_31133[(1)] = (12));

} else {
var statearr_31103_31134 = state_31092__$1;
(statearr_31103_31134[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (3))){
var inst_31090 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31092__$1,inst_31090);
} else {
if((state_val_31093 === (12))){
var inst_31056 = (state_31092[(7)]);
var inst_31080 = cljs.core.vec.call(null,inst_31056);
var state_31092__$1 = state_31092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31092__$1,(15),out,inst_31080);
} else {
if((state_val_31093 === (2))){
var state_31092__$1 = state_31092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31092__$1,(4),ch);
} else {
if((state_val_31093 === (11))){
var inst_31072 = (state_31092[(2)]);
var inst_31073 = (new Array(n));
var inst_31056 = inst_31073;
var inst_31057 = (0);
var state_31092__$1 = (function (){var statearr_31104 = state_31092;
(statearr_31104[(10)] = inst_31072);

(statearr_31104[(7)] = inst_31056);

(statearr_31104[(8)] = inst_31057);

return statearr_31104;
})();
var statearr_31105_31135 = state_31092__$1;
(statearr_31105_31135[(2)] = null);

(statearr_31105_31135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (9))){
var inst_31056 = (state_31092[(7)]);
var inst_31070 = cljs.core.vec.call(null,inst_31056);
var state_31092__$1 = state_31092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31092__$1,(11),out,inst_31070);
} else {
if((state_val_31093 === (5))){
var inst_31060 = (state_31092[(9)]);
var inst_31056 = (state_31092[(7)]);
var inst_31057 = (state_31092[(8)]);
var inst_31065 = (state_31092[(11)]);
var inst_31064 = (inst_31056[inst_31057] = inst_31060);
var inst_31065__$1 = (inst_31057 + (1));
var inst_31066 = (inst_31065__$1 < n);
var state_31092__$1 = (function (){var statearr_31106 = state_31092;
(statearr_31106[(12)] = inst_31064);

(statearr_31106[(11)] = inst_31065__$1);

return statearr_31106;
})();
if(cljs.core.truth_(inst_31066)){
var statearr_31107_31136 = state_31092__$1;
(statearr_31107_31136[(1)] = (8));

} else {
var statearr_31108_31137 = state_31092__$1;
(statearr_31108_31137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (14))){
var inst_31085 = (state_31092[(2)]);
var inst_31086 = cljs.core.async.close_BANG_.call(null,out);
var state_31092__$1 = (function (){var statearr_31110 = state_31092;
(statearr_31110[(13)] = inst_31085);

return statearr_31110;
})();
var statearr_31111_31138 = state_31092__$1;
(statearr_31111_31138[(2)] = inst_31086);

(statearr_31111_31138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (10))){
var inst_31076 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
var statearr_31112_31139 = state_31092__$1;
(statearr_31112_31139[(2)] = inst_31076);

(statearr_31112_31139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (8))){
var inst_31056 = (state_31092[(7)]);
var inst_31065 = (state_31092[(11)]);
var tmp31109 = inst_31056;
var inst_31056__$1 = tmp31109;
var inst_31057 = inst_31065;
var state_31092__$1 = (function (){var statearr_31113 = state_31092;
(statearr_31113[(7)] = inst_31056__$1);

(statearr_31113[(8)] = inst_31057);

return statearr_31113;
})();
var statearr_31114_31140 = state_31092__$1;
(statearr_31114_31140[(2)] = null);

(statearr_31114_31140[(1)] = (2));


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
});})(c__28444__auto___31126,out))
;
return ((function (switch__28332__auto__,c__28444__auto___31126,out){
return (function() {
var cljs$core$async$state_machine__28333__auto__ = null;
var cljs$core$async$state_machine__28333__auto____0 = (function (){
var statearr_31118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31118[(0)] = cljs$core$async$state_machine__28333__auto__);

(statearr_31118[(1)] = (1));

return statearr_31118;
});
var cljs$core$async$state_machine__28333__auto____1 = (function (state_31092){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_31092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e31119){if((e31119 instanceof Object)){
var ex__28336__auto__ = e31119;
var statearr_31120_31141 = state_31092;
(statearr_31120_31141[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31142 = state_31092;
state_31092 = G__31142;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$state_machine__28333__auto__ = function(state_31092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28333__auto____1.call(this,state_31092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28333__auto____0;
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28333__auto____1;
return cljs$core$async$state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___31126,out))
})();
var state__28446__auto__ = (function (){var statearr_31121 = f__28445__auto__.call(null);
(statearr_31121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___31126);

return statearr_31121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___31126,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31143 = [];
var len__25738__auto___31217 = arguments.length;
var i__25739__auto___31218 = (0);
while(true){
if((i__25739__auto___31218 < len__25738__auto___31217)){
args31143.push((arguments[i__25739__auto___31218]));

var G__31219 = (i__25739__auto___31218 + (1));
i__25739__auto___31218 = G__31219;
continue;
} else {
}
break;
}

var G__31145 = args31143.length;
switch (G__31145) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31143.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28444__auto___31221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___31221,out){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___31221,out){
return (function (state_31187){
var state_val_31188 = (state_31187[(1)]);
if((state_val_31188 === (7))){
var inst_31183 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
var statearr_31189_31222 = state_31187__$1;
(statearr_31189_31222[(2)] = inst_31183);

(statearr_31189_31222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (1))){
var inst_31146 = [];
var inst_31147 = inst_31146;
var inst_31148 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31187__$1 = (function (){var statearr_31190 = state_31187;
(statearr_31190[(7)] = inst_31147);

(statearr_31190[(8)] = inst_31148);

return statearr_31190;
})();
var statearr_31191_31223 = state_31187__$1;
(statearr_31191_31223[(2)] = null);

(statearr_31191_31223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (4))){
var inst_31151 = (state_31187[(9)]);
var inst_31151__$1 = (state_31187[(2)]);
var inst_31152 = (inst_31151__$1 == null);
var inst_31153 = cljs.core.not.call(null,inst_31152);
var state_31187__$1 = (function (){var statearr_31192 = state_31187;
(statearr_31192[(9)] = inst_31151__$1);

return statearr_31192;
})();
if(inst_31153){
var statearr_31193_31224 = state_31187__$1;
(statearr_31193_31224[(1)] = (5));

} else {
var statearr_31194_31225 = state_31187__$1;
(statearr_31194_31225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (15))){
var inst_31177 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
var statearr_31195_31226 = state_31187__$1;
(statearr_31195_31226[(2)] = inst_31177);

(statearr_31195_31226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (13))){
var state_31187__$1 = state_31187;
var statearr_31196_31227 = state_31187__$1;
(statearr_31196_31227[(2)] = null);

(statearr_31196_31227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (6))){
var inst_31147 = (state_31187[(7)]);
var inst_31172 = inst_31147.length;
var inst_31173 = (inst_31172 > (0));
var state_31187__$1 = state_31187;
if(cljs.core.truth_(inst_31173)){
var statearr_31197_31228 = state_31187__$1;
(statearr_31197_31228[(1)] = (12));

} else {
var statearr_31198_31229 = state_31187__$1;
(statearr_31198_31229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (3))){
var inst_31185 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31187__$1,inst_31185);
} else {
if((state_val_31188 === (12))){
var inst_31147 = (state_31187[(7)]);
var inst_31175 = cljs.core.vec.call(null,inst_31147);
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31187__$1,(15),out,inst_31175);
} else {
if((state_val_31188 === (2))){
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31187__$1,(4),ch);
} else {
if((state_val_31188 === (11))){
var inst_31151 = (state_31187[(9)]);
var inst_31155 = (state_31187[(10)]);
var inst_31165 = (state_31187[(2)]);
var inst_31166 = [];
var inst_31167 = inst_31166.push(inst_31151);
var inst_31147 = inst_31166;
var inst_31148 = inst_31155;
var state_31187__$1 = (function (){var statearr_31199 = state_31187;
(statearr_31199[(11)] = inst_31167);

(statearr_31199[(7)] = inst_31147);

(statearr_31199[(8)] = inst_31148);

(statearr_31199[(12)] = inst_31165);

return statearr_31199;
})();
var statearr_31200_31230 = state_31187__$1;
(statearr_31200_31230[(2)] = null);

(statearr_31200_31230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (9))){
var inst_31147 = (state_31187[(7)]);
var inst_31163 = cljs.core.vec.call(null,inst_31147);
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31187__$1,(11),out,inst_31163);
} else {
if((state_val_31188 === (5))){
var inst_31151 = (state_31187[(9)]);
var inst_31155 = (state_31187[(10)]);
var inst_31148 = (state_31187[(8)]);
var inst_31155__$1 = f.call(null,inst_31151);
var inst_31156 = cljs.core._EQ_.call(null,inst_31155__$1,inst_31148);
var inst_31157 = cljs.core.keyword_identical_QMARK_.call(null,inst_31148,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31158 = (inst_31156) || (inst_31157);
var state_31187__$1 = (function (){var statearr_31201 = state_31187;
(statearr_31201[(10)] = inst_31155__$1);

return statearr_31201;
})();
if(cljs.core.truth_(inst_31158)){
var statearr_31202_31231 = state_31187__$1;
(statearr_31202_31231[(1)] = (8));

} else {
var statearr_31203_31232 = state_31187__$1;
(statearr_31203_31232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (14))){
var inst_31180 = (state_31187[(2)]);
var inst_31181 = cljs.core.async.close_BANG_.call(null,out);
var state_31187__$1 = (function (){var statearr_31205 = state_31187;
(statearr_31205[(13)] = inst_31180);

return statearr_31205;
})();
var statearr_31206_31233 = state_31187__$1;
(statearr_31206_31233[(2)] = inst_31181);

(statearr_31206_31233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (10))){
var inst_31170 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
var statearr_31207_31234 = state_31187__$1;
(statearr_31207_31234[(2)] = inst_31170);

(statearr_31207_31234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (8))){
var inst_31147 = (state_31187[(7)]);
var inst_31151 = (state_31187[(9)]);
var inst_31155 = (state_31187[(10)]);
var inst_31160 = inst_31147.push(inst_31151);
var tmp31204 = inst_31147;
var inst_31147__$1 = tmp31204;
var inst_31148 = inst_31155;
var state_31187__$1 = (function (){var statearr_31208 = state_31187;
(statearr_31208[(14)] = inst_31160);

(statearr_31208[(7)] = inst_31147__$1);

(statearr_31208[(8)] = inst_31148);

return statearr_31208;
})();
var statearr_31209_31235 = state_31187__$1;
(statearr_31209_31235[(2)] = null);

(statearr_31209_31235[(1)] = (2));


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
});})(c__28444__auto___31221,out))
;
return ((function (switch__28332__auto__,c__28444__auto___31221,out){
return (function() {
var cljs$core$async$state_machine__28333__auto__ = null;
var cljs$core$async$state_machine__28333__auto____0 = (function (){
var statearr_31213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31213[(0)] = cljs$core$async$state_machine__28333__auto__);

(statearr_31213[(1)] = (1));

return statearr_31213;
});
var cljs$core$async$state_machine__28333__auto____1 = (function (state_31187){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_31187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e31214){if((e31214 instanceof Object)){
var ex__28336__auto__ = e31214;
var statearr_31215_31236 = state_31187;
(statearr_31215_31236[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31237 = state_31187;
state_31187 = G__31237;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs$core$async$state_machine__28333__auto__ = function(state_31187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28333__auto____1.call(this,state_31187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28333__auto____0;
cljs$core$async$state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28333__auto____1;
return cljs$core$async$state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___31221,out))
})();
var state__28446__auto__ = (function (){var statearr_31216 = f__28445__auto__.call(null);
(statearr_31216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___31221);

return statearr_31216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___31221,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1629049561713