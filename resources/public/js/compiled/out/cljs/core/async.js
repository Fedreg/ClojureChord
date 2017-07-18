// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34723 = arguments.length;
switch (G__34723) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34724 = (function (f,blockable,meta34725){
this.f = f;
this.blockable = blockable;
this.meta34725 = meta34725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34726,meta34725__$1){
var self__ = this;
var _34726__$1 = this;
return (new cljs.core.async.t_cljs$core$async34724(self__.f,self__.blockable,meta34725__$1));
});

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34726){
var self__ = this;
var _34726__$1 = this;
return self__.meta34725;
});

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34725","meta34725",1160552325,null)], null);
});

cljs.core.async.t_cljs$core$async34724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34724";

cljs.core.async.t_cljs$core$async34724.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async34724");
});

cljs.core.async.__GT_t_cljs$core$async34724 = (function cljs$core$async$__GT_t_cljs$core$async34724(f__$1,blockable__$1,meta34725){
return (new cljs.core.async.t_cljs$core$async34724(f__$1,blockable__$1,meta34725));
});

}

return (new cljs.core.async.t_cljs$core$async34724(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__34730 = arguments.length;
switch (G__34730) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
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
var G__34733 = arguments.length;
switch (G__34733) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__34736 = arguments.length;
switch (G__34736) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34738 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34738);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34738,ret){
return (function (){
return fn1.call(null,val_34738);
});})(val_34738,ret))
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
var G__34740 = arguments.length;
switch (G__34740) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
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
var n__29591__auto___34742 = n;
var x_34743 = (0);
while(true){
if((x_34743 < n__29591__auto___34742)){
(a[x_34743] = (0));

var G__34744 = (x_34743 + (1));
x_34743 = G__34744;
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

var G__34745 = (i + (1));
i = G__34745;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34746 = (function (flag,meta34747){
this.flag = flag;
this.meta34747 = meta34747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34748,meta34747__$1){
var self__ = this;
var _34748__$1 = this;
return (new cljs.core.async.t_cljs$core$async34746(self__.flag,meta34747__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34748){
var self__ = this;
var _34748__$1 = this;
return self__.meta34747;
});})(flag))
;

cljs.core.async.t_cljs$core$async34746.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34746.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34746.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34747","meta34747",665380734,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34746";

cljs.core.async.t_cljs$core$async34746.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async34746");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34746 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34746(flag__$1,meta34747){
return (new cljs.core.async.t_cljs$core$async34746(flag__$1,meta34747));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34746(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34749 = (function (flag,cb,meta34750){
this.flag = flag;
this.cb = cb;
this.meta34750 = meta34750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34751,meta34750__$1){
var self__ = this;
var _34751__$1 = this;
return (new cljs.core.async.t_cljs$core$async34749(self__.flag,self__.cb,meta34750__$1));
});

cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34751){
var self__ = this;
var _34751__$1 = this;
return self__.meta34750;
});

cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34750","meta34750",532765765,null)], null);
});

cljs.core.async.t_cljs$core$async34749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34749";

cljs.core.async.t_cljs$core$async34749.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async34749");
});

cljs.core.async.__GT_t_cljs$core$async34749 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34749(flag__$1,cb__$1,meta34750){
return (new cljs.core.async.t_cljs$core$async34749(flag__$1,cb__$1,meta34750));
});

}

return (new cljs.core.async.t_cljs$core$async34749(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34752_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34752_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34753_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34753_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28569__auto__ = wport;
if(cljs.core.truth_(or__28569__auto__)){
return or__28569__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34754 = (i + (1));
i = G__34754;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28569__auto__ = ret;
if(cljs.core.truth_(or__28569__auto__)){
return or__28569__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__28557__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28557__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28557__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
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
var args__29809__auto__ = [];
var len__29802__auto___34760 = arguments.length;
var i__29803__auto___34761 = (0);
while(true){
if((i__29803__auto___34761 < len__29802__auto___34760)){
args__29809__auto__.push((arguments[i__29803__auto___34761]));

var G__34762 = (i__29803__auto___34761 + (1));
i__29803__auto___34761 = G__34762;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((1) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29810__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34757){
var map__34758 = p__34757;
var map__34758__$1 = ((((!((map__34758 == null)))?((((map__34758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34758):map__34758);
var opts = map__34758__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34755){
var G__34756 = cljs.core.first.call(null,seq34755);
var seq34755__$1 = cljs.core.next.call(null,seq34755);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34756,seq34755__$1);
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
var G__34764 = arguments.length;
switch (G__34764) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32069__auto___34810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32069__auto___34810){
return (function (){
var f__32070__auto__ = (function (){var switch__32046__auto__ = ((function (c__32069__auto___34810){
return (function (state_34788){
var state_val_34789 = (state_34788[(1)]);
if((state_val_34789 === (7))){
var inst_34784 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
var statearr_34790_34811 = state_34788__$1;
(statearr_34790_34811[(2)] = inst_34784);

(statearr_34790_34811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (1))){
var state_34788__$1 = state_34788;
var statearr_34791_34812 = state_34788__$1;
(statearr_34791_34812[(2)] = null);

(statearr_34791_34812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (4))){
var inst_34767 = (state_34788[(7)]);
var inst_34767__$1 = (state_34788[(2)]);
var inst_34768 = (inst_34767__$1 == null);
var state_34788__$1 = (function (){var statearr_34792 = state_34788;
(statearr_34792[(7)] = inst_34767__$1);

return statearr_34792;
})();
if(cljs.core.truth_(inst_34768)){
var statearr_34793_34813 = state_34788__$1;
(statearr_34793_34813[(1)] = (5));

} else {
var statearr_34794_34814 = state_34788__$1;
(statearr_34794_34814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (13))){
var state_34788__$1 = state_34788;
var statearr_34795_34815 = state_34788__$1;
(statearr_34795_34815[(2)] = null);

(statearr_34795_34815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (6))){
var inst_34767 = (state_34788[(7)]);
var state_34788__$1 = state_34788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34788__$1,(11),to,inst_34767);
} else {
if((state_val_34789 === (3))){
var inst_34786 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34788__$1,inst_34786);
} else {
if((state_val_34789 === (12))){
var state_34788__$1 = state_34788;
var statearr_34796_34816 = state_34788__$1;
(statearr_34796_34816[(2)] = null);

(statearr_34796_34816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (2))){
var state_34788__$1 = state_34788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34788__$1,(4),from);
} else {
if((state_val_34789 === (11))){
var inst_34777 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
if(cljs.core.truth_(inst_34777)){
var statearr_34797_34817 = state_34788__$1;
(statearr_34797_34817[(1)] = (12));

} else {
var statearr_34798_34818 = state_34788__$1;
(statearr_34798_34818[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (9))){
var state_34788__$1 = state_34788;
var statearr_34799_34819 = state_34788__$1;
(statearr_34799_34819[(2)] = null);

(statearr_34799_34819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (5))){
var state_34788__$1 = state_34788;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34800_34820 = state_34788__$1;
(statearr_34800_34820[(1)] = (8));

} else {
var statearr_34801_34821 = state_34788__$1;
(statearr_34801_34821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (14))){
var inst_34782 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
var statearr_34802_34822 = state_34788__$1;
(statearr_34802_34822[(2)] = inst_34782);

(statearr_34802_34822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (10))){
var inst_34774 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
var statearr_34803_34823 = state_34788__$1;
(statearr_34803_34823[(2)] = inst_34774);

(statearr_34803_34823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (8))){
var inst_34771 = cljs.core.async.close_BANG_.call(null,to);
var state_34788__$1 = state_34788;
var statearr_34804_34824 = state_34788__$1;
(statearr_34804_34824[(2)] = inst_34771);

(statearr_34804_34824[(1)] = (10));


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
});})(c__32069__auto___34810))
;
return ((function (switch__32046__auto__,c__32069__auto___34810){
return (function() {
var cljs$core$async$state_machine__32047__auto__ = null;
var cljs$core$async$state_machine__32047__auto____0 = (function (){
var statearr_34805 = [null,null,null,null,null,null,null,null];
(statearr_34805[(0)] = cljs$core$async$state_machine__32047__auto__);

(statearr_34805[(1)] = (1));

return statearr_34805;
});
var cljs$core$async$state_machine__32047__auto____1 = (function (state_34788){
while(true){
var ret_value__32048__auto__ = (function (){try{while(true){
var result__32049__auto__ = switch__32046__auto__.call(null,state_34788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32049__auto__;
}
break;
}
}catch (e34806){if((e34806 instanceof Object)){
var ex__32050__auto__ = e34806;
var statearr_34807_34825 = state_34788;
(statearr_34807_34825[(5)] = ex__32050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34826 = state_34788;
state_34788 = G__34826;
continue;
} else {
return ret_value__32048__auto__;
}
break;
}
});
cljs$core$async$state_machine__32047__auto__ = function(state_34788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32047__auto____1.call(this,state_34788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32047__auto____0;
cljs$core$async$state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32047__auto____1;
return cljs$core$async$state_machine__32047__auto__;
})()
;})(switch__32046__auto__,c__32069__auto___34810))
})();
var state__32071__auto__ = (function (){var statearr_34808 = f__32070__auto__.call(null);
(statearr_34808[(6)] = c__32069__auto___34810);

return statearr_34808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32071__auto__);
});})(c__32069__auto___34810))
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
return (function (p__34827){
var vec__34828 = p__34827;
var v = cljs.core.nth.call(null,vec__34828,(0),null);
var p = cljs.core.nth.call(null,vec__34828,(1),null);
var job = vec__34828;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32069__auto___34999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32069__auto___34999,res,vec__34828,v,p,job,jobs,results){
return (function (){
var f__32070__auto__ = (function (){var switch__32046__auto__ = ((function (c__32069__auto___34999,res,vec__34828,v,p,job,jobs,results){
return (function (state_34835){
var state_val_34836 = (state_34835[(1)]);
if((state_val_34836 === (1))){
var state_34835__$1 = state_34835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34835__$1,(2),res,v);
} else {
if((state_val_34836 === (2))){
var inst_34832 = (state_34835[(2)]);
var inst_34833 = cljs.core.async.close_BANG_.call(null,res);
var state_34835__$1 = (function (){var statearr_34837 = state_34835;
(statearr_34837[(7)] = inst_34832);

return statearr_34837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34835__$1,inst_34833);
} else {
return null;
}
}
});})(c__32069__auto___34999,res,vec__34828,v,p,job,jobs,results))
;
return ((function (switch__32046__auto__,c__32069__auto___34999,res,vec__34828,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0 = (function (){
var statearr_34838 = [null,null,null,null,null,null,null,null];
(statearr_34838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__);

(statearr_34838[(1)] = (1));

return statearr_34838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1 = (function (state_34835){
while(true){
var ret_value__32048__auto__ = (function (){try{while(true){
var result__32049__auto__ = switch__32046__auto__.call(null,state_34835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32049__auto__;
}
break;
}
}catch (e34839){if((e34839 instanceof Object)){
var ex__32050__auto__ = e34839;
var statearr_34840_35000 = state_34835;
(statearr_34840_35000[(5)] = ex__32050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35001 = state_34835;
state_34835 = G__35001;
continue;
} else {
return ret_value__32048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__ = function(state_34835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1.call(this,state_34835);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__;
})()
;})(switch__32046__auto__,c__32069__auto___34999,res,vec__34828,v,p,job,jobs,results))
})();
var state__32071__auto__ = (function (){var statearr_34841 = f__32070__auto__.call(null);
(statearr_34841[(6)] = c__32069__auto___34999);

return statearr_34841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32071__auto__);
});})(c__32069__auto___34999,res,vec__34828,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34842){
var vec__34843 = p__34842;
var v = cljs.core.nth.call(null,vec__34843,(0),null);
var p = cljs.core.nth.call(null,vec__34843,(1),null);
var job = vec__34843;
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
var n__29591__auto___35002 = n;
var __35003 = (0);
while(true){
if((__35003 < n__29591__auto___35002)){
var G__34846_35004 = type;
var G__34846_35005__$1 = (((G__34846_35004 instanceof cljs.core.Keyword))?G__34846_35004.fqn:null);
switch (G__34846_35005__$1) {
case "compute":
var c__32069__auto___35007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35003,c__32069__auto___35007,G__34846_35004,G__34846_35005__$1,n__29591__auto___35002,jobs,results,process,async){
return (function (){
var f__32070__auto__ = (function (){var switch__32046__auto__ = ((function (__35003,c__32069__auto___35007,G__34846_35004,G__34846_35005__$1,n__29591__auto___35002,jobs,results,process,async){
return (function (state_34859){
var state_val_34860 = (state_34859[(1)]);
if((state_val_34860 === (1))){
var state_34859__$1 = state_34859;
var statearr_34861_35008 = state_34859__$1;
(statearr_34861_35008[(2)] = null);

(statearr_34861_35008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (2))){
var state_34859__$1 = state_34859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34859__$1,(4),jobs);
} else {
if((state_val_34860 === (3))){
var inst_34857 = (state_34859[(2)]);
var state_34859__$1 = state_34859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34859__$1,inst_34857);
} else {
if((state_val_34860 === (4))){
var inst_34849 = (state_34859[(2)]);
var inst_34850 = process.call(null,inst_34849);
var state_34859__$1 = state_34859;
if(cljs.core.truth_(inst_34850)){
var statearr_34862_35009 = state_34859__$1;
(statearr_34862_35009[(1)] = (5));

} else {
var statearr_34863_35010 = state_34859__$1;
(statearr_34863_35010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (5))){
var state_34859__$1 = state_34859;
var statearr_34864_35011 = state_34859__$1;
(statearr_34864_35011[(2)] = null);

(statearr_34864_35011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (6))){
var state_34859__$1 = state_34859;
var statearr_34865_35012 = state_34859__$1;
(statearr_34865_35012[(2)] = null);

(statearr_34865_35012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (7))){
var inst_34855 = (state_34859[(2)]);
var state_34859__$1 = state_34859;
var statearr_34866_35013 = state_34859__$1;
(statearr_34866_35013[(2)] = inst_34855);

(statearr_34866_35013[(1)] = (3));


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
});})(__35003,c__32069__auto___35007,G__34846_35004,G__34846_35005__$1,n__29591__auto___35002,jobs,results,process,async))
;
return ((function (__35003,switch__32046__auto__,c__32069__auto___35007,G__34846_35004,G__34846_35005__$1,n__29591__auto___35002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0 = (function (){
var statearr_34867 = [null,null,null,null,null,null,null];
(statearr_34867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__);

(statearr_34867[(1)] = (1));

return statearr_34867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1 = (function (state_34859){
while(true){
var ret_value__32048__auto__ = (function (){try{while(true){
var result__32049__auto__ = switch__32046__auto__.call(null,state_34859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32049__auto__;
}
break;
}
}catch (e34868){if((e34868 instanceof Object)){
var ex__32050__auto__ = e34868;
var statearr_34869_35014 = state_34859;
(statearr_34869_35014[(5)] = ex__32050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35015 = state_34859;
state_34859 = G__35015;
continue;
} else {
return ret_value__32048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__ = function(state_34859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1.call(this,state_34859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__;
})()
;})(__35003,switch__32046__auto__,c__32069__auto___35007,G__34846_35004,G__34846_35005__$1,n__29591__auto___35002,jobs,results,process,async))
})();
var state__32071__auto__ = (function (){var statearr_34870 = f__32070__auto__.call(null);
(statearr_34870[(6)] = c__32069__auto___35007);

return statearr_34870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32071__auto__);
});})(__35003,c__32069__auto___35007,G__34846_35004,G__34846_35005__$1,n__29591__auto___35002,jobs,results,process,async))
);


break;
case "async":
var c__32069__auto___35016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35003,c__32069__auto___35016,G__34846_35004,G__34846_35005__$1,n__29591__auto___35002,jobs,results,process,async){
return (function (){
var f__32070__auto__ = (function (){var switch__32046__auto__ = ((function (__35003,c__32069__auto___35016,G__34846_35004,G__34846_35005__$1,n__29591__auto___35002,jobs,results,process,async){
return (function (state_34883){
var state_val_34884 = (state_34883[(1)]);
if((state_val_34884 === (1))){
var state_34883__$1 = state_34883;
var statearr_34885_35017 = state_34883__$1;
(statearr_34885_35017[(2)] = null);

(statearr_34885_35017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (2))){
var state_34883__$1 = state_34883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34883__$1,(4),jobs);
} else {
if((state_val_34884 === (3))){
var inst_34881 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34883__$1,inst_34881);
} else {
if((state_val_34884 === (4))){
var inst_34873 = (state_34883[(2)]);
var inst_34874 = async.call(null,inst_34873);
var state_34883__$1 = state_34883;
if(cljs.core.truth_(inst_34874)){
var statearr_34886_35018 = state_34883__$1;
(statearr_34886_35018[(1)] = (5));

} else {
var statearr_34887_35019 = state_34883__$1;
(statearr_34887_35019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (5))){
var state_34883__$1 = state_34883;
var statearr_34888_35020 = state_34883__$1;
(statearr_34888_35020[(2)] = null);

(statearr_34888_35020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (6))){
var state_34883__$1 = state_34883;
var statearr_34889_35021 = state_34883__$1;
(statearr_34889_35021[(2)] = null);

(statearr_34889_35021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (7))){
var inst_34879 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
var statearr_34890_35022 = state_34883__$1;
(statearr_34890_35022[(2)] = inst_34879);

(statearr_34890_35022[(1)] = (3));


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
});})(__35003,c__32069__auto___35016,G__34846_35004,G__34846_35005__$1,n__29591__auto___35002,jobs,results,process,async))
;
return ((function (__35003,switch__32046__auto__,c__32069__auto___35016,G__34846_35004,G__34846_35005__$1,n__29591__auto___35002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0 = (function (){
var statearr_34891 = [null,null,null,null,null,null,null];
(statearr_34891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__);

(statearr_34891[(1)] = (1));

return statearr_34891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1 = (function (state_34883){
while(true){
var ret_value__32048__auto__ = (function (){try{while(true){
var result__32049__auto__ = switch__32046__auto__.call(null,state_34883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32049__auto__;
}
break;
}
}catch (e34892){if((e34892 instanceof Object)){
var ex__32050__auto__ = e34892;
var statearr_34893_35023 = state_34883;
(statearr_34893_35023[(5)] = ex__32050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35024 = state_34883;
state_34883 = G__35024;
continue;
} else {
return ret_value__32048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__ = function(state_34883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1.call(this,state_34883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__;
})()
;})(__35003,switch__32046__auto__,c__32069__auto___35016,G__34846_35004,G__34846_35005__$1,n__29591__auto___35002,jobs,results,process,async))
})();
var state__32071__auto__ = (function (){var statearr_34894 = f__32070__auto__.call(null);
(statearr_34894[(6)] = c__32069__auto___35016);

return statearr_34894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32071__auto__);
});})(__35003,c__32069__auto___35016,G__34846_35004,G__34846_35005__$1,n__29591__auto___35002,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34846_35005__$1)].join('')));

}

var G__35025 = (__35003 + (1));
__35003 = G__35025;
continue;
} else {
}
break;
}

var c__32069__auto___35026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32069__auto___35026,jobs,results,process,async){
return (function (){
var f__32070__auto__ = (function (){var switch__32046__auto__ = ((function (c__32069__auto___35026,jobs,results,process,async){
return (function (state_34916){
var state_val_34917 = (state_34916[(1)]);
if((state_val_34917 === (1))){
var state_34916__$1 = state_34916;
var statearr_34918_35027 = state_34916__$1;
(statearr_34918_35027[(2)] = null);

(statearr_34918_35027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (2))){
var state_34916__$1 = state_34916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34916__$1,(4),from);
} else {
if((state_val_34917 === (3))){
var inst_34914 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34916__$1,inst_34914);
} else {
if((state_val_34917 === (4))){
var inst_34897 = (state_34916[(7)]);
var inst_34897__$1 = (state_34916[(2)]);
var inst_34898 = (inst_34897__$1 == null);
var state_34916__$1 = (function (){var statearr_34919 = state_34916;
(statearr_34919[(7)] = inst_34897__$1);

return statearr_34919;
})();
if(cljs.core.truth_(inst_34898)){
var statearr_34920_35028 = state_34916__$1;
(statearr_34920_35028[(1)] = (5));

} else {
var statearr_34921_35029 = state_34916__$1;
(statearr_34921_35029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (5))){
var inst_34900 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34916__$1 = state_34916;
var statearr_34922_35030 = state_34916__$1;
(statearr_34922_35030[(2)] = inst_34900);

(statearr_34922_35030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (6))){
var inst_34897 = (state_34916[(7)]);
var inst_34902 = (state_34916[(8)]);
var inst_34902__$1 = cljs.core.async.chan.call(null,(1));
var inst_34903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34904 = [inst_34897,inst_34902__$1];
var inst_34905 = (new cljs.core.PersistentVector(null,2,(5),inst_34903,inst_34904,null));
var state_34916__$1 = (function (){var statearr_34923 = state_34916;
(statearr_34923[(8)] = inst_34902__$1);

return statearr_34923;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34916__$1,(8),jobs,inst_34905);
} else {
if((state_val_34917 === (7))){
var inst_34912 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
var statearr_34924_35031 = state_34916__$1;
(statearr_34924_35031[(2)] = inst_34912);

(statearr_34924_35031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (8))){
var inst_34902 = (state_34916[(8)]);
var inst_34907 = (state_34916[(2)]);
var state_34916__$1 = (function (){var statearr_34925 = state_34916;
(statearr_34925[(9)] = inst_34907);

return statearr_34925;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34916__$1,(9),results,inst_34902);
} else {
if((state_val_34917 === (9))){
var inst_34909 = (state_34916[(2)]);
var state_34916__$1 = (function (){var statearr_34926 = state_34916;
(statearr_34926[(10)] = inst_34909);

return statearr_34926;
})();
var statearr_34927_35032 = state_34916__$1;
(statearr_34927_35032[(2)] = null);

(statearr_34927_35032[(1)] = (2));


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
});})(c__32069__auto___35026,jobs,results,process,async))
;
return ((function (switch__32046__auto__,c__32069__auto___35026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0 = (function (){
var statearr_34928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__);

(statearr_34928[(1)] = (1));

return statearr_34928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1 = (function (state_34916){
while(true){
var ret_value__32048__auto__ = (function (){try{while(true){
var result__32049__auto__ = switch__32046__auto__.call(null,state_34916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32049__auto__;
}
break;
}
}catch (e34929){if((e34929 instanceof Object)){
var ex__32050__auto__ = e34929;
var statearr_34930_35033 = state_34916;
(statearr_34930_35033[(5)] = ex__32050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35034 = state_34916;
state_34916 = G__35034;
continue;
} else {
return ret_value__32048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__ = function(state_34916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1.call(this,state_34916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__;
})()
;})(switch__32046__auto__,c__32069__auto___35026,jobs,results,process,async))
})();
var state__32071__auto__ = (function (){var statearr_34931 = f__32070__auto__.call(null);
(statearr_34931[(6)] = c__32069__auto___35026);

return statearr_34931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32071__auto__);
});})(c__32069__auto___35026,jobs,results,process,async))
);


var c__32069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32069__auto__,jobs,results,process,async){
return (function (){
var f__32070__auto__ = (function (){var switch__32046__auto__ = ((function (c__32069__auto__,jobs,results,process,async){
return (function (state_34969){
var state_val_34970 = (state_34969[(1)]);
if((state_val_34970 === (7))){
var inst_34965 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
var statearr_34971_35035 = state_34969__$1;
(statearr_34971_35035[(2)] = inst_34965);

(statearr_34971_35035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (20))){
var state_34969__$1 = state_34969;
var statearr_34972_35036 = state_34969__$1;
(statearr_34972_35036[(2)] = null);

(statearr_34972_35036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (1))){
var state_34969__$1 = state_34969;
var statearr_34973_35037 = state_34969__$1;
(statearr_34973_35037[(2)] = null);

(statearr_34973_35037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (4))){
var inst_34934 = (state_34969[(7)]);
var inst_34934__$1 = (state_34969[(2)]);
var inst_34935 = (inst_34934__$1 == null);
var state_34969__$1 = (function (){var statearr_34974 = state_34969;
(statearr_34974[(7)] = inst_34934__$1);

return statearr_34974;
})();
if(cljs.core.truth_(inst_34935)){
var statearr_34975_35038 = state_34969__$1;
(statearr_34975_35038[(1)] = (5));

} else {
var statearr_34976_35039 = state_34969__$1;
(statearr_34976_35039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (15))){
var inst_34947 = (state_34969[(8)]);
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34969__$1,(18),to,inst_34947);
} else {
if((state_val_34970 === (21))){
var inst_34960 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
var statearr_34977_35040 = state_34969__$1;
(statearr_34977_35040[(2)] = inst_34960);

(statearr_34977_35040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (13))){
var inst_34962 = (state_34969[(2)]);
var state_34969__$1 = (function (){var statearr_34978 = state_34969;
(statearr_34978[(9)] = inst_34962);

return statearr_34978;
})();
var statearr_34979_35041 = state_34969__$1;
(statearr_34979_35041[(2)] = null);

(statearr_34979_35041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (6))){
var inst_34934 = (state_34969[(7)]);
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34969__$1,(11),inst_34934);
} else {
if((state_val_34970 === (17))){
var inst_34955 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
if(cljs.core.truth_(inst_34955)){
var statearr_34980_35042 = state_34969__$1;
(statearr_34980_35042[(1)] = (19));

} else {
var statearr_34981_35043 = state_34969__$1;
(statearr_34981_35043[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (3))){
var inst_34967 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34969__$1,inst_34967);
} else {
if((state_val_34970 === (12))){
var inst_34944 = (state_34969[(10)]);
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34969__$1,(14),inst_34944);
} else {
if((state_val_34970 === (2))){
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34969__$1,(4),results);
} else {
if((state_val_34970 === (19))){
var state_34969__$1 = state_34969;
var statearr_34982_35044 = state_34969__$1;
(statearr_34982_35044[(2)] = null);

(statearr_34982_35044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (11))){
var inst_34944 = (state_34969[(2)]);
var state_34969__$1 = (function (){var statearr_34983 = state_34969;
(statearr_34983[(10)] = inst_34944);

return statearr_34983;
})();
var statearr_34984_35045 = state_34969__$1;
(statearr_34984_35045[(2)] = null);

(statearr_34984_35045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (9))){
var state_34969__$1 = state_34969;
var statearr_34985_35046 = state_34969__$1;
(statearr_34985_35046[(2)] = null);

(statearr_34985_35046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (5))){
var state_34969__$1 = state_34969;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34986_35047 = state_34969__$1;
(statearr_34986_35047[(1)] = (8));

} else {
var statearr_34987_35048 = state_34969__$1;
(statearr_34987_35048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (14))){
var inst_34947 = (state_34969[(8)]);
var inst_34949 = (state_34969[(11)]);
var inst_34947__$1 = (state_34969[(2)]);
var inst_34948 = (inst_34947__$1 == null);
var inst_34949__$1 = cljs.core.not.call(null,inst_34948);
var state_34969__$1 = (function (){var statearr_34988 = state_34969;
(statearr_34988[(8)] = inst_34947__$1);

(statearr_34988[(11)] = inst_34949__$1);

return statearr_34988;
})();
if(inst_34949__$1){
var statearr_34989_35049 = state_34969__$1;
(statearr_34989_35049[(1)] = (15));

} else {
var statearr_34990_35050 = state_34969__$1;
(statearr_34990_35050[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (16))){
var inst_34949 = (state_34969[(11)]);
var state_34969__$1 = state_34969;
var statearr_34991_35051 = state_34969__$1;
(statearr_34991_35051[(2)] = inst_34949);

(statearr_34991_35051[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (10))){
var inst_34941 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
var statearr_34992_35052 = state_34969__$1;
(statearr_34992_35052[(2)] = inst_34941);

(statearr_34992_35052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (18))){
var inst_34952 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
var statearr_34993_35053 = state_34969__$1;
(statearr_34993_35053[(2)] = inst_34952);

(statearr_34993_35053[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (8))){
var inst_34938 = cljs.core.async.close_BANG_.call(null,to);
var state_34969__$1 = state_34969;
var statearr_34994_35054 = state_34969__$1;
(statearr_34994_35054[(2)] = inst_34938);

(statearr_34994_35054[(1)] = (10));


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
});})(c__32069__auto__,jobs,results,process,async))
;
return ((function (switch__32046__auto__,c__32069__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0 = (function (){
var statearr_34995 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__);

(statearr_34995[(1)] = (1));

return statearr_34995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1 = (function (state_34969){
while(true){
var ret_value__32048__auto__ = (function (){try{while(true){
var result__32049__auto__ = switch__32046__auto__.call(null,state_34969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32049__auto__;
}
break;
}
}catch (e34996){if((e34996 instanceof Object)){
var ex__32050__auto__ = e34996;
var statearr_34997_35055 = state_34969;
(statearr_34997_35055[(5)] = ex__32050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35056 = state_34969;
state_34969 = G__35056;
continue;
} else {
return ret_value__32048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__ = function(state_34969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1.call(this,state_34969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32047__auto__;
})()
;})(switch__32046__auto__,c__32069__auto__,jobs,results,process,async))
})();
var state__32071__auto__ = (function (){var statearr_34998 = f__32070__auto__.call(null);
(statearr_34998[(6)] = c__32069__auto__);

return statearr_34998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32071__auto__);
});})(c__32069__auto__,jobs,results,process,async))
);

return c__32069__auto__;
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
var G__35058 = arguments.length;
switch (G__35058) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__35061 = arguments.length;
switch (G__35061) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__35064 = arguments.length;
switch (G__35064) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32069__auto___35113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32069__auto___35113,tc,fc){
return (function (){
var f__32070__auto__ = (function (){var switch__32046__auto__ = ((function (c__32069__auto___35113,tc,fc){
return (function (state_35090){
var state_val_35091 = (state_35090[(1)]);
if((state_val_35091 === (7))){
var inst_35086 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35092_35114 = state_35090__$1;
(statearr_35092_35114[(2)] = inst_35086);

(statearr_35092_35114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (1))){
var state_35090__$1 = state_35090;
var statearr_35093_35115 = state_35090__$1;
(statearr_35093_35115[(2)] = null);

(statearr_35093_35115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (4))){
var inst_35067 = (state_35090[(7)]);
var inst_35067__$1 = (state_35090[(2)]);
var inst_35068 = (inst_35067__$1 == null);
var state_35090__$1 = (function (){var statearr_35094 = state_35090;
(statearr_35094[(7)] = inst_35067__$1);

return statearr_35094;
})();
if(cljs.core.truth_(inst_35068)){
var statearr_35095_35116 = state_35090__$1;
(statearr_35095_35116[(1)] = (5));

} else {
var statearr_35096_35117 = state_35090__$1;
(statearr_35096_35117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (13))){
var state_35090__$1 = state_35090;
var statearr_35097_35118 = state_35090__$1;
(statearr_35097_35118[(2)] = null);

(statearr_35097_35118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (6))){
var inst_35067 = (state_35090[(7)]);
var inst_35073 = p.call(null,inst_35067);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35073)){
var statearr_35098_35119 = state_35090__$1;
(statearr_35098_35119[(1)] = (9));

} else {
var statearr_35099_35120 = state_35090__$1;
(statearr_35099_35120[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (3))){
var inst_35088 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35090__$1,inst_35088);
} else {
if((state_val_35091 === (12))){
var state_35090__$1 = state_35090;
var statearr_35100_35121 = state_35090__$1;
(statearr_35100_35121[(2)] = null);

(statearr_35100_35121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (2))){
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35090__$1,(4),ch);
} else {
if((state_val_35091 === (11))){
var inst_35067 = (state_35090[(7)]);
var inst_35077 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35090__$1,(8),inst_35077,inst_35067);
} else {
if((state_val_35091 === (9))){
var state_35090__$1 = state_35090;
var statearr_35101_35122 = state_35090__$1;
(statearr_35101_35122[(2)] = tc);

(statearr_35101_35122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (5))){
var inst_35070 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35071 = cljs.core.async.close_BANG_.call(null,fc);
var state_35090__$1 = (function (){var statearr_35102 = state_35090;
(statearr_35102[(8)] = inst_35070);

return statearr_35102;
})();
var statearr_35103_35123 = state_35090__$1;
(statearr_35103_35123[(2)] = inst_35071);

(statearr_35103_35123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (14))){
var inst_35084 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35104_35124 = state_35090__$1;
(statearr_35104_35124[(2)] = inst_35084);

(statearr_35104_35124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (10))){
var state_35090__$1 = state_35090;
var statearr_35105_35125 = state_35090__$1;
(statearr_35105_35125[(2)] = fc);

(statearr_35105_35125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (8))){
var inst_35079 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35079)){
var statearr_35106_35126 = state_35090__$1;
(statearr_35106_35126[(1)] = (12));

} else {
var statearr_35107_35127 = state_35090__$1;
(statearr_35107_35127[(1)] = (13));

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
});})(c__32069__auto___35113,tc,fc))
;
return ((function (switch__32046__auto__,c__32069__auto___35113,tc,fc){
return (function() {
var cljs$core$async$state_machine__32047__auto__ = null;
var cljs$core$async$state_machine__32047__auto____0 = (function (){
var statearr_35108 = [null,null,null,null,null,null,null,null,null];
(statearr_35108[(0)] = cljs$core$async$state_machine__32047__auto__);

(statearr_35108[(1)] = (1));

return statearr_35108;
});
var cljs$core$async$state_machine__32047__auto____1 = (function (state_35090){
while(true){
var ret_value__32048__auto__ = (function (){try{while(true){
var result__32049__auto__ = switch__32046__auto__.call(null,state_35090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32049__auto__;
}
break;
}
}catch (e35109){if((e35109 instanceof Object)){
var ex__32050__auto__ = e35109;
var statearr_35110_35128 = state_35090;
(statearr_35110_35128[(5)] = ex__32050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35129 = state_35090;
state_35090 = G__35129;
continue;
} else {
return ret_value__32048__auto__;
}
break;
}
});
cljs$core$async$state_machine__32047__auto__ = function(state_35090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32047__auto____1.call(this,state_35090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32047__auto____0;
cljs$core$async$state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32047__auto____1;
return cljs$core$async$state_machine__32047__auto__;
})()
;})(switch__32046__auto__,c__32069__auto___35113,tc,fc))
})();
var state__32071__auto__ = (function (){var statearr_35111 = f__32070__auto__.call(null);
(statearr_35111[(6)] = c__32069__auto___35113);

return statearr_35111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32071__auto__);
});})(c__32069__auto___35113,tc,fc))
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
var c__32069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32069__auto__){
return (function (){
var f__32070__auto__ = (function (){var switch__32046__auto__ = ((function (c__32069__auto__){
return (function (state_35150){
var state_val_35151 = (state_35150[(1)]);
if((state_val_35151 === (7))){
var inst_35146 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
var statearr_35152_35170 = state_35150__$1;
(statearr_35152_35170[(2)] = inst_35146);

(statearr_35152_35170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (1))){
var inst_35130 = init;
var state_35150__$1 = (function (){var statearr_35153 = state_35150;
(statearr_35153[(7)] = inst_35130);

return statearr_35153;
})();
var statearr_35154_35171 = state_35150__$1;
(statearr_35154_35171[(2)] = null);

(statearr_35154_35171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (4))){
var inst_35133 = (state_35150[(8)]);
var inst_35133__$1 = (state_35150[(2)]);
var inst_35134 = (inst_35133__$1 == null);
var state_35150__$1 = (function (){var statearr_35155 = state_35150;
(statearr_35155[(8)] = inst_35133__$1);

return statearr_35155;
})();
if(cljs.core.truth_(inst_35134)){
var statearr_35156_35172 = state_35150__$1;
(statearr_35156_35172[(1)] = (5));

} else {
var statearr_35157_35173 = state_35150__$1;
(statearr_35157_35173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (6))){
var inst_35130 = (state_35150[(7)]);
var inst_35133 = (state_35150[(8)]);
var inst_35137 = (state_35150[(9)]);
var inst_35137__$1 = f.call(null,inst_35130,inst_35133);
var inst_35138 = cljs.core.reduced_QMARK_.call(null,inst_35137__$1);
var state_35150__$1 = (function (){var statearr_35158 = state_35150;
(statearr_35158[(9)] = inst_35137__$1);

return statearr_35158;
})();
if(inst_35138){
var statearr_35159_35174 = state_35150__$1;
(statearr_35159_35174[(1)] = (8));

} else {
var statearr_35160_35175 = state_35150__$1;
(statearr_35160_35175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (3))){
var inst_35148 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35150__$1,inst_35148);
} else {
if((state_val_35151 === (2))){
var state_35150__$1 = state_35150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35150__$1,(4),ch);
} else {
if((state_val_35151 === (9))){
var inst_35137 = (state_35150[(9)]);
var inst_35130 = inst_35137;
var state_35150__$1 = (function (){var statearr_35161 = state_35150;
(statearr_35161[(7)] = inst_35130);

return statearr_35161;
})();
var statearr_35162_35176 = state_35150__$1;
(statearr_35162_35176[(2)] = null);

(statearr_35162_35176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (5))){
var inst_35130 = (state_35150[(7)]);
var state_35150__$1 = state_35150;
var statearr_35163_35177 = state_35150__$1;
(statearr_35163_35177[(2)] = inst_35130);

(statearr_35163_35177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (10))){
var inst_35144 = (state_35150[(2)]);
var state_35150__$1 = state_35150;
var statearr_35164_35178 = state_35150__$1;
(statearr_35164_35178[(2)] = inst_35144);

(statearr_35164_35178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35151 === (8))){
var inst_35137 = (state_35150[(9)]);
var inst_35140 = cljs.core.deref.call(null,inst_35137);
var state_35150__$1 = state_35150;
var statearr_35165_35179 = state_35150__$1;
(statearr_35165_35179[(2)] = inst_35140);

(statearr_35165_35179[(1)] = (10));


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
});})(c__32069__auto__))
;
return ((function (switch__32046__auto__,c__32069__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32047__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32047__auto____0 = (function (){
var statearr_35166 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35166[(0)] = cljs$core$async$reduce_$_state_machine__32047__auto__);

(statearr_35166[(1)] = (1));

return statearr_35166;
});
var cljs$core$async$reduce_$_state_machine__32047__auto____1 = (function (state_35150){
while(true){
var ret_value__32048__auto__ = (function (){try{while(true){
var result__32049__auto__ = switch__32046__auto__.call(null,state_35150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32049__auto__;
}
break;
}
}catch (e35167){if((e35167 instanceof Object)){
var ex__32050__auto__ = e35167;
var statearr_35168_35180 = state_35150;
(statearr_35168_35180[(5)] = ex__32050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35181 = state_35150;
state_35150 = G__35181;
continue;
} else {
return ret_value__32048__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32047__auto__ = function(state_35150){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32047__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32047__auto____1.call(this,state_35150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32047__auto____0;
cljs$core$async$reduce_$_state_machine__32047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32047__auto____1;
return cljs$core$async$reduce_$_state_machine__32047__auto__;
})()
;})(switch__32046__auto__,c__32069__auto__))
})();
var state__32071__auto__ = (function (){var statearr_35169 = f__32070__auto__.call(null);
(statearr_35169[(6)] = c__32069__auto__);

return statearr_35169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32071__auto__);
});})(c__32069__auto__))
);

return c__32069__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32069__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32069__auto__,f__$1){
return (function (){
var f__32070__auto__ = (function (){var switch__32046__auto__ = ((function (c__32069__auto__,f__$1){
return (function (state_35187){
var state_val_35188 = (state_35187[(1)]);
if((state_val_35188 === (1))){
var inst_35182 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35187__$1,(2),inst_35182);
} else {
if((state_val_35188 === (2))){
var inst_35184 = (state_35187[(2)]);
var inst_35185 = f__$1.call(null,inst_35184);
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35187__$1,inst_35185);
} else {
return null;
}
}
});})(c__32069__auto__,f__$1))
;
return ((function (switch__32046__auto__,c__32069__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32047__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32047__auto____0 = (function (){
var statearr_35189 = [null,null,null,null,null,null,null];
(statearr_35189[(0)] = cljs$core$async$transduce_$_state_machine__32047__auto__);

(statearr_35189[(1)] = (1));

return statearr_35189;
});
var cljs$core$async$transduce_$_state_machine__32047__auto____1 = (function (state_35187){
while(true){
var ret_value__32048__auto__ = (function (){try{while(true){
var result__32049__auto__ = switch__32046__auto__.call(null,state_35187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32049__auto__;
}
break;
}
}catch (e35190){if((e35190 instanceof Object)){
var ex__32050__auto__ = e35190;
var statearr_35191_35193 = state_35187;
(statearr_35191_35193[(5)] = ex__32050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35194 = state_35187;
state_35187 = G__35194;
continue;
} else {
return ret_value__32048__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32047__auto__ = function(state_35187){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32047__auto____0.call(this);
case 1:
return cljs