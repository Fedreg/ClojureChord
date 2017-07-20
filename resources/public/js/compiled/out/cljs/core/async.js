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
var G__88395 = arguments.length;
switch (G__88395) {
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
if(typeof cljs.core.async.t_cljs$core$async88396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88396 = (function (f,blockable,meta88397){
this.f = f;
this.blockable = blockable;
this.meta88397 = meta88397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async88396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88398,meta88397__$1){
var self__ = this;
var _88398__$1 = this;
return (new cljs.core.async.t_cljs$core$async88396(self__.f,self__.blockable,meta88397__$1));
});

cljs.core.async.t_cljs$core$async88396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88398){
var self__ = this;
var _88398__$1 = this;
return self__.meta88397;
});

cljs.core.async.t_cljs$core$async88396.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async88396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async88396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async88396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta88397","meta88397",-1963916553,null)], null);
});

cljs.core.async.t_cljs$core$async88396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88396";

cljs.core.async.t_cljs$core$async88396.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async88396");
});

cljs.core.async.__GT_t_cljs$core$async88396 = (function cljs$core$async$__GT_t_cljs$core$async88396(f__$1,blockable__$1,meta88397){
return (new cljs.core.async.t_cljs$core$async88396(f__$1,blockable__$1,meta88397));
});

}

return (new cljs.core.async.t_cljs$core$async88396(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__88402 = arguments.length;
switch (G__88402) {
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
var G__88405 = arguments.length;
switch (G__88405) {
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
var G__88408 = arguments.length;
switch (G__88408) {
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
var val_88410 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_88410);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_88410,ret){
return (function (){
return fn1.call(null,val_88410);
});})(val_88410,ret))
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
var G__88412 = arguments.length;
switch (G__88412) {
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
var n__29591__auto___88414 = n;
var x_88415 = (0);
while(true){
if((x_88415 < n__29591__auto___88414)){
(a[x_88415] = (0));

var G__88416 = (x_88415 + (1));
x_88415 = G__88416;
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

var G__88417 = (i + (1));
i = G__88417;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async88418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88418 = (function (flag,meta88419){
this.flag = flag;
this.meta88419 = meta88419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async88418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_88420,meta88419__$1){
var self__ = this;
var _88420__$1 = this;
return (new cljs.core.async.t_cljs$core$async88418(self__.flag,meta88419__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async88418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_88420){
var self__ = this;
var _88420__$1 = this;
return self__.meta88419;
});})(flag))
;

cljs.core.async.t_cljs$core$async88418.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async88418.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async88418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async88418.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta88419","meta88419",-874440361,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async88418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88418";

cljs.core.async.t_cljs$core$async88418.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async88418");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async88418 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async88418(flag__$1,meta88419){
return (new cljs.core.async.t_cljs$core$async88418(flag__$1,meta88419));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async88418(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async88421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88421 = (function (flag,cb,meta88422){
this.flag = flag;
this.cb = cb;
this.meta88422 = meta88422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async88421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88423,meta88422__$1){
var self__ = this;
var _88423__$1 = this;
return (new cljs.core.async.t_cljs$core$async88421(self__.flag,self__.cb,meta88422__$1));
});

cljs.core.async.t_cljs$core$async88421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88423){
var self__ = this;
var _88423__$1 = this;
return self__.meta88422;
});

cljs.core.async.t_cljs$core$async88421.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async88421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async88421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async88421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta88422","meta88422",-1531674410,null)], null);
});

cljs.core.async.t_cljs$core$async88421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88421";

cljs.core.async.t_cljs$core$async88421.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async88421");
});

cljs.core.async.__GT_t_cljs$core$async88421 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async88421(flag__$1,cb__$1,meta88422){
return (new cljs.core.async.t_cljs$core$async88421(flag__$1,cb__$1,meta88422));
});

}

return (new cljs.core.async.t_cljs$core$async88421(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__88424_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__88424_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__88425_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__88425_SHARP_,port], null));
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
var G__88426 = (i + (1));
i = G__88426;
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
var len__29802__auto___88432 = arguments.length;
var i__29803__auto___88433 = (0);
while(true){
if((i__29803__auto___88433 < len__29802__auto___88432)){
args__29809__auto__.push((arguments[i__29803__auto___88433]));

var G__88434 = (i__29803__auto___88433 + (1));
i__29803__auto___88433 = G__88434;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((1) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29810__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__88429){
var map__88430 = p__88429;
var map__88430__$1 = ((((!((map__88430 == null)))?((((map__88430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88430):map__88430);
var opts = map__88430__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq88427){
var G__88428 = cljs.core.first.call(null,seq88427);
var seq88427__$1 = cljs.core.next.call(null,seq88427);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__88428,seq88427__$1);
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
var G__88436 = arguments.length;
switch (G__88436) {
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
var c__32958__auto___88482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___88482){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___88482){
return (function (state_88460){
var state_val_88461 = (state_88460[(1)]);
if((state_val_88461 === (7))){
var inst_88456 = (state_88460[(2)]);
var state_88460__$1 = state_88460;
var statearr_88462_88483 = state_88460__$1;
(statearr_88462_88483[(2)] = inst_88456);

(statearr_88462_88483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88461 === (1))){
var state_88460__$1 = state_88460;
var statearr_88463_88484 = state_88460__$1;
(statearr_88463_88484[(2)] = null);

(statearr_88463_88484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88461 === (4))){
var inst_88439 = (state_88460[(7)]);
var inst_88439__$1 = (state_88460[(2)]);
var inst_88440 = (inst_88439__$1 == null);
var state_88460__$1 = (function (){var statearr_88464 = state_88460;
(statearr_88464[(7)] = inst_88439__$1);

return statearr_88464;
})();
if(cljs.core.truth_(inst_88440)){
var statearr_88465_88485 = state_88460__$1;
(statearr_88465_88485[(1)] = (5));

} else {
var statearr_88466_88486 = state_88460__$1;
(statearr_88466_88486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88461 === (13))){
var state_88460__$1 = state_88460;
var statearr_88467_88487 = state_88460__$1;
(statearr_88467_88487[(2)] = null);

(statearr_88467_88487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88461 === (6))){
var inst_88439 = (state_88460[(7)]);
var state_88460__$1 = state_88460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88460__$1,(11),to,inst_88439);
} else {
if((state_val_88461 === (3))){
var inst_88458 = (state_88460[(2)]);
var state_88460__$1 = state_88460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88460__$1,inst_88458);
} else {
if((state_val_88461 === (12))){
var state_88460__$1 = state_88460;
var statearr_88468_88488 = state_88460__$1;
(statearr_88468_88488[(2)] = null);

(statearr_88468_88488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88461 === (2))){
var state_88460__$1 = state_88460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88460__$1,(4),from);
} else {
if((state_val_88461 === (11))){
var inst_88449 = (state_88460[(2)]);
var state_88460__$1 = state_88460;
if(cljs.core.truth_(inst_88449)){
var statearr_88469_88489 = state_88460__$1;
(statearr_88469_88489[(1)] = (12));

} else {
var statearr_88470_88490 = state_88460__$1;
(statearr_88470_88490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88461 === (9))){
var state_88460__$1 = state_88460;
var statearr_88471_88491 = state_88460__$1;
(statearr_88471_88491[(2)] = null);

(statearr_88471_88491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88461 === (5))){
var state_88460__$1 = state_88460;
if(cljs.core.truth_(close_QMARK_)){
var statearr_88472_88492 = state_88460__$1;
(statearr_88472_88492[(1)] = (8));

} else {
var statearr_88473_88493 = state_88460__$1;
(statearr_88473_88493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88461 === (14))){
var inst_88454 = (state_88460[(2)]);
var state_88460__$1 = state_88460;
var statearr_88474_88494 = state_88460__$1;
(statearr_88474_88494[(2)] = inst_88454);

(statearr_88474_88494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88461 === (10))){
var inst_88446 = (state_88460[(2)]);
var state_88460__$1 = state_88460;
var statearr_88475_88495 = state_88460__$1;
(statearr_88475_88495[(2)] = inst_88446);

(statearr_88475_88495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88461 === (8))){
var inst_88443 = cljs.core.async.close_BANG_.call(null,to);
var state_88460__$1 = state_88460;
var statearr_88476_88496 = state_88460__$1;
(statearr_88476_88496[(2)] = inst_88443);

(statearr_88476_88496[(1)] = (10));


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
});})(c__32958__auto___88482))
;
return ((function (switch__32868__auto__,c__32958__auto___88482){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_88477 = [null,null,null,null,null,null,null,null];
(statearr_88477[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_88477[(1)] = (1));

return statearr_88477;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_88460){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_88460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e88478){if((e88478 instanceof Object)){
var ex__32872__auto__ = e88478;
var statearr_88479_88497 = state_88460;
(statearr_88479_88497[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88498 = state_88460;
state_88460 = G__88498;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_88460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_88460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___88482))
})();
var state__32960__auto__ = (function (){var statearr_88480 = f__32959__auto__.call(null);
(statearr_88480[(6)] = c__32958__auto___88482);

return statearr_88480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___88482))
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
return (function (p__88499){
var vec__88500 = p__88499;
var v = cljs.core.nth.call(null,vec__88500,(0),null);
var p = cljs.core.nth.call(null,vec__88500,(1),null);
var job = vec__88500;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32958__auto___88671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___88671,res,vec__88500,v,p,job,jobs,results){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___88671,res,vec__88500,v,p,job,jobs,results){
return (function (state_88507){
var state_val_88508 = (state_88507[(1)]);
if((state_val_88508 === (1))){
var state_88507__$1 = state_88507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88507__$1,(2),res,v);
} else {
if((state_val_88508 === (2))){
var inst_88504 = (state_88507[(2)]);
var inst_88505 = cljs.core.async.close_BANG_.call(null,res);
var state_88507__$1 = (function (){var statearr_88509 = state_88507;
(statearr_88509[(7)] = inst_88504);

return statearr_88509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88507__$1,inst_88505);
} else {
return null;
}
}
});})(c__32958__auto___88671,res,vec__88500,v,p,job,jobs,results))
;
return ((function (switch__32868__auto__,c__32958__auto___88671,res,vec__88500,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0 = (function (){
var statearr_88510 = [null,null,null,null,null,null,null,null];
(statearr_88510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__);

(statearr_88510[(1)] = (1));

return statearr_88510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1 = (function (state_88507){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_88507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e88511){if((e88511 instanceof Object)){
var ex__32872__auto__ = e88511;
var statearr_88512_88672 = state_88507;
(statearr_88512_88672[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88673 = state_88507;
state_88507 = G__88673;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = function(state_88507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1.call(this,state_88507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___88671,res,vec__88500,v,p,job,jobs,results))
})();
var state__32960__auto__ = (function (){var statearr_88513 = f__32959__auto__.call(null);
(statearr_88513[(6)] = c__32958__auto___88671);

return statearr_88513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___88671,res,vec__88500,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__88514){
var vec__88515 = p__88514;
var v = cljs.core.nth.call(null,vec__88515,(0),null);
var p = cljs.core.nth.call(null,vec__88515,(1),null);
var job = vec__88515;
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
var n__29591__auto___88674 = n;
var __88675 = (0);
while(true){
if((__88675 < n__29591__auto___88674)){
var G__88518_88676 = type;
var G__88518_88677__$1 = (((G__88518_88676 instanceof cljs.core.Keyword))?G__88518_88676.fqn:null);
switch (G__88518_88677__$1) {
case "compute":
var c__32958__auto___88679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__88675,c__32958__auto___88679,G__88518_88676,G__88518_88677__$1,n__29591__auto___88674,jobs,results,process,async){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (__88675,c__32958__auto___88679,G__88518_88676,G__88518_88677__$1,n__29591__auto___88674,jobs,results,process,async){
return (function (state_88531){
var state_val_88532 = (state_88531[(1)]);
if((state_val_88532 === (1))){
var state_88531__$1 = state_88531;
var statearr_88533_88680 = state_88531__$1;
(statearr_88533_88680[(2)] = null);

(statearr_88533_88680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88532 === (2))){
var state_88531__$1 = state_88531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88531__$1,(4),jobs);
} else {
if((state_val_88532 === (3))){
var inst_88529 = (state_88531[(2)]);
var state_88531__$1 = state_88531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88531__$1,inst_88529);
} else {
if((state_val_88532 === (4))){
var inst_88521 = (state_88531[(2)]);
var inst_88522 = process.call(null,inst_88521);
var state_88531__$1 = state_88531;
if(cljs.core.truth_(inst_88522)){
var statearr_88534_88681 = state_88531__$1;
(statearr_88534_88681[(1)] = (5));

} else {
var statearr_88535_88682 = state_88531__$1;
(statearr_88535_88682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88532 === (5))){
var state_88531__$1 = state_88531;
var statearr_88536_88683 = state_88531__$1;
(statearr_88536_88683[(2)] = null);

(statearr_88536_88683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88532 === (6))){
var state_88531__$1 = state_88531;
var statearr_88537_88684 = state_88531__$1;
(statearr_88537_88684[(2)] = null);

(statearr_88537_88684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88532 === (7))){
var inst_88527 = (state_88531[(2)]);
var state_88531__$1 = state_88531;
var statearr_88538_88685 = state_88531__$1;
(statearr_88538_88685[(2)] = inst_88527);

(statearr_88538_88685[(1)] = (3));


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
});})(__88675,c__32958__auto___88679,G__88518_88676,G__88518_88677__$1,n__29591__auto___88674,jobs,results,process,async))
;
return ((function (__88675,switch__32868__auto__,c__32958__auto___88679,G__88518_88676,G__88518_88677__$1,n__29591__auto___88674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0 = (function (){
var statearr_88539 = [null,null,null,null,null,null,null];
(statearr_88539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__);

(statearr_88539[(1)] = (1));

return statearr_88539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1 = (function (state_88531){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_88531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e88540){if((e88540 instanceof Object)){
var ex__32872__auto__ = e88540;
var statearr_88541_88686 = state_88531;
(statearr_88541_88686[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88687 = state_88531;
state_88531 = G__88687;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = function(state_88531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1.call(this,state_88531);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__;
})()
;})(__88675,switch__32868__auto__,c__32958__auto___88679,G__88518_88676,G__88518_88677__$1,n__29591__auto___88674,jobs,results,process,async))
})();
var state__32960__auto__ = (function (){var statearr_88542 = f__32959__auto__.call(null);
(statearr_88542[(6)] = c__32958__auto___88679);

return statearr_88542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(__88675,c__32958__auto___88679,G__88518_88676,G__88518_88677__$1,n__29591__auto___88674,jobs,results,process,async))
);


break;
case "async":
var c__32958__auto___88688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__88675,c__32958__auto___88688,G__88518_88676,G__88518_88677__$1,n__29591__auto___88674,jobs,results,process,async){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (__88675,c__32958__auto___88688,G__88518_88676,G__88518_88677__$1,n__29591__auto___88674,jobs,results,process,async){
return (function (state_88555){
var state_val_88556 = (state_88555[(1)]);
if((state_val_88556 === (1))){
var state_88555__$1 = state_88555;
var statearr_88557_88689 = state_88555__$1;
(statearr_88557_88689[(2)] = null);

(statearr_88557_88689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88556 === (2))){
var state_88555__$1 = state_88555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88555__$1,(4),jobs);
} else {
if((state_val_88556 === (3))){
var inst_88553 = (state_88555[(2)]);
var state_88555__$1 = state_88555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88555__$1,inst_88553);
} else {
if((state_val_88556 === (4))){
var inst_88545 = (state_88555[(2)]);
var inst_88546 = async.call(null,inst_88545);
var state_88555__$1 = state_88555;
if(cljs.core.truth_(inst_88546)){
var statearr_88558_88690 = state_88555__$1;
(statearr_88558_88690[(1)] = (5));

} else {
var statearr_88559_88691 = state_88555__$1;
(statearr_88559_88691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88556 === (5))){
var state_88555__$1 = state_88555;
var statearr_88560_88692 = state_88555__$1;
(statearr_88560_88692[(2)] = null);

(statearr_88560_88692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88556 === (6))){
var state_88555__$1 = state_88555;
var statearr_88561_88693 = state_88555__$1;
(statearr_88561_88693[(2)] = null);

(statearr_88561_88693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88556 === (7))){
var inst_88551 = (state_88555[(2)]);
var state_88555__$1 = state_88555;
var statearr_88562_88694 = state_88555__$1;
(statearr_88562_88694[(2)] = inst_88551);

(statearr_88562_88694[(1)] = (3));


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
});})(__88675,c__32958__auto___88688,G__88518_88676,G__88518_88677__$1,n__29591__auto___88674,jobs,results,process,async))
;
return ((function (__88675,switch__32868__auto__,c__32958__auto___88688,G__88518_88676,G__88518_88677__$1,n__29591__auto___88674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0 = (function (){
var statearr_88563 = [null,null,null,null,null,null,null];
(statearr_88563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__);

(statearr_88563[(1)] = (1));

return statearr_88563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1 = (function (state_88555){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_88555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e88564){if((e88564 instanceof Object)){
var ex__32872__auto__ = e88564;
var statearr_88565_88695 = state_88555;
(statearr_88565_88695[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88696 = state_88555;
state_88555 = G__88696;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = function(state_88555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1.call(this,state_88555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__;
})()
;})(__88675,switch__32868__auto__,c__32958__auto___88688,G__88518_88676,G__88518_88677__$1,n__29591__auto___88674,jobs,results,process,async))
})();
var state__32960__auto__ = (function (){var statearr_88566 = f__32959__auto__.call(null);
(statearr_88566[(6)] = c__32958__auto___88688);

return statearr_88566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(__88675,c__32958__auto___88688,G__88518_88676,G__88518_88677__$1,n__29591__auto___88674,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__88518_88677__$1)].join('')));

}

var G__88697 = (__88675 + (1));
__88675 = G__88697;
continue;
} else {
}
break;
}

var c__32958__auto___88698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___88698,jobs,results,process,async){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___88698,jobs,results,process,async){
return (function (state_88588){
var state_val_88589 = (state_88588[(1)]);
if((state_val_88589 === (1))){
var state_88588__$1 = state_88588;
var statearr_88590_88699 = state_88588__$1;
(statearr_88590_88699[(2)] = null);

(statearr_88590_88699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88589 === (2))){
var state_88588__$1 = state_88588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88588__$1,(4),from);
} else {
if((state_val_88589 === (3))){
var inst_88586 = (state_88588[(2)]);
var state_88588__$1 = state_88588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88588__$1,inst_88586);
} else {
if((state_val_88589 === (4))){
var inst_88569 = (state_88588[(7)]);
var inst_88569__$1 = (state_88588[(2)]);
var inst_88570 = (inst_88569__$1 == null);
var state_88588__$1 = (function (){var statearr_88591 = state_88588;
(statearr_88591[(7)] = inst_88569__$1);

return statearr_88591;
})();
if(cljs.core.truth_(inst_88570)){
var statearr_88592_88700 = state_88588__$1;
(statearr_88592_88700[(1)] = (5));

} else {
var statearr_88593_88701 = state_88588__$1;
(statearr_88593_88701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88589 === (5))){
var inst_88572 = cljs.core.async.close_BANG_.call(null,jobs);
var state_88588__$1 = state_88588;
var statearr_88594_88702 = state_88588__$1;
(statearr_88594_88702[(2)] = inst_88572);

(statearr_88594_88702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88589 === (6))){
var inst_88574 = (state_88588[(8)]);
var inst_88569 = (state_88588[(7)]);
var inst_88574__$1 = cljs.core.async.chan.call(null,(1));
var inst_88575 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88576 = [inst_88569,inst_88574__$1];
var inst_88577 = (new cljs.core.PersistentVector(null,2,(5),inst_88575,inst_88576,null));
var state_88588__$1 = (function (){var statearr_88595 = state_88588;
(statearr_88595[(8)] = inst_88574__$1);

return statearr_88595;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88588__$1,(8),jobs,inst_88577);
} else {
if((state_val_88589 === (7))){
var inst_88584 = (state_88588[(2)]);
var state_88588__$1 = state_88588;
var statearr_88596_88703 = state_88588__$1;
(statearr_88596_88703[(2)] = inst_88584);

(statearr_88596_88703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88589 === (8))){
var inst_88574 = (state_88588[(8)]);
var inst_88579 = (state_88588[(2)]);
var state_88588__$1 = (function (){var statearr_88597 = state_88588;
(statearr_88597[(9)] = inst_88579);

return statearr_88597;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88588__$1,(9),results,inst_88574);
} else {
if((state_val_88589 === (9))){
var inst_88581 = (state_88588[(2)]);
var state_88588__$1 = (function (){var statearr_88598 = state_88588;
(statearr_88598[(10)] = inst_88581);

return statearr_88598;
})();
var statearr_88599_88704 = state_88588__$1;
(statearr_88599_88704[(2)] = null);

(statearr_88599_88704[(1)] = (2));


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
});})(c__32958__auto___88698,jobs,results,process,async))
;
return ((function (switch__32868__auto__,c__32958__auto___88698,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0 = (function (){
var statearr_88600 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_88600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__);

(statearr_88600[(1)] = (1));

return statearr_88600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1 = (function (state_88588){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_88588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e88601){if((e88601 instanceof Object)){
var ex__32872__auto__ = e88601;
var statearr_88602_88705 = state_88588;
(statearr_88602_88705[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88706 = state_88588;
state_88588 = G__88706;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = function(state_88588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1.call(this,state_88588);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___88698,jobs,results,process,async))
})();
var state__32960__auto__ = (function (){var statearr_88603 = f__32959__auto__.call(null);
(statearr_88603[(6)] = c__32958__auto___88698);

return statearr_88603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___88698,jobs,results,process,async))
);


var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__,jobs,results,process,async){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__,jobs,results,process,async){
return (function (state_88641){
var state_val_88642 = (state_88641[(1)]);
if((state_val_88642 === (7))){
var inst_88637 = (state_88641[(2)]);
var state_88641__$1 = state_88641;
var statearr_88643_88707 = state_88641__$1;
(statearr_88643_88707[(2)] = inst_88637);

(statearr_88643_88707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (20))){
var state_88641__$1 = state_88641;
var statearr_88644_88708 = state_88641__$1;
(statearr_88644_88708[(2)] = null);

(statearr_88644_88708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (1))){
var state_88641__$1 = state_88641;
var statearr_88645_88709 = state_88641__$1;
(statearr_88645_88709[(2)] = null);

(statearr_88645_88709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (4))){
var inst_88606 = (state_88641[(7)]);
var inst_88606__$1 = (state_88641[(2)]);
var inst_88607 = (inst_88606__$1 == null);
var state_88641__$1 = (function (){var statearr_88646 = state_88641;
(statearr_88646[(7)] = inst_88606__$1);

return statearr_88646;
})();
if(cljs.core.truth_(inst_88607)){
var statearr_88647_88710 = state_88641__$1;
(statearr_88647_88710[(1)] = (5));

} else {
var statearr_88648_88711 = state_88641__$1;
(statearr_88648_88711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (15))){
var inst_88619 = (state_88641[(8)]);
var state_88641__$1 = state_88641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88641__$1,(18),to,inst_88619);
} else {
if((state_val_88642 === (21))){
var inst_88632 = (state_88641[(2)]);
var state_88641__$1 = state_88641;
var statearr_88649_88712 = state_88641__$1;
(statearr_88649_88712[(2)] = inst_88632);

(statearr_88649_88712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (13))){
var inst_88634 = (state_88641[(2)]);
var state_88641__$1 = (function (){var statearr_88650 = state_88641;
(statearr_88650[(9)] = inst_88634);

return statearr_88650;
})();
var statearr_88651_88713 = state_88641__$1;
(statearr_88651_88713[(2)] = null);

(statearr_88651_88713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (6))){
var inst_88606 = (state_88641[(7)]);
var state_88641__$1 = state_88641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88641__$1,(11),inst_88606);
} else {
if((state_val_88642 === (17))){
var inst_88627 = (state_88641[(2)]);
var state_88641__$1 = state_88641;
if(cljs.core.truth_(inst_88627)){
var statearr_88652_88714 = state_88641__$1;
(statearr_88652_88714[(1)] = (19));

} else {
var statearr_88653_88715 = state_88641__$1;
(statearr_88653_88715[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (3))){
var inst_88639 = (state_88641[(2)]);
var state_88641__$1 = state_88641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88641__$1,inst_88639);
} else {
if((state_val_88642 === (12))){
var inst_88616 = (state_88641[(10)]);
var state_88641__$1 = state_88641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88641__$1,(14),inst_88616);
} else {
if((state_val_88642 === (2))){
var state_88641__$1 = state_88641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88641__$1,(4),results);
} else {
if((state_val_88642 === (19))){
var state_88641__$1 = state_88641;
var statearr_88654_88716 = state_88641__$1;
(statearr_88654_88716[(2)] = null);

(statearr_88654_88716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (11))){
var inst_88616 = (state_88641[(2)]);
var state_88641__$1 = (function (){var statearr_88655 = state_88641;
(statearr_88655[(10)] = inst_88616);

return statearr_88655;
})();
var statearr_88656_88717 = state_88641__$1;
(statearr_88656_88717[(2)] = null);

(statearr_88656_88717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (9))){
var state_88641__$1 = state_88641;
var statearr_88657_88718 = state_88641__$1;
(statearr_88657_88718[(2)] = null);

(statearr_88657_88718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (5))){
var state_88641__$1 = state_88641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_88658_88719 = state_88641__$1;
(statearr_88658_88719[(1)] = (8));

} else {
var statearr_88659_88720 = state_88641__$1;
(statearr_88659_88720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (14))){
var inst_88621 = (state_88641[(11)]);
var inst_88619 = (state_88641[(8)]);
var inst_88619__$1 = (state_88641[(2)]);
var inst_88620 = (inst_88619__$1 == null);
var inst_88621__$1 = cljs.core.not.call(null,inst_88620);
var state_88641__$1 = (function (){var statearr_88660 = state_88641;
(statearr_88660[(11)] = inst_88621__$1);

(statearr_88660[(8)] = inst_88619__$1);

return statearr_88660;
})();
if(inst_88621__$1){
var statearr_88661_88721 = state_88641__$1;
(statearr_88661_88721[(1)] = (15));

} else {
var statearr_88662_88722 = state_88641__$1;
(statearr_88662_88722[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (16))){
var inst_88621 = (state_88641[(11)]);
var state_88641__$1 = state_88641;
var statearr_88663_88723 = state_88641__$1;
(statearr_88663_88723[(2)] = inst_88621);

(statearr_88663_88723[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (10))){
var inst_88613 = (state_88641[(2)]);
var state_88641__$1 = state_88641;
var statearr_88664_88724 = state_88641__$1;
(statearr_88664_88724[(2)] = inst_88613);

(statearr_88664_88724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (18))){
var inst_88624 = (state_88641[(2)]);
var state_88641__$1 = state_88641;
var statearr_88665_88725 = state_88641__$1;
(statearr_88665_88725[(2)] = inst_88624);

(statearr_88665_88725[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (8))){
var inst_88610 = cljs.core.async.close_BANG_.call(null,to);
var state_88641__$1 = state_88641;
var statearr_88666_88726 = state_88641__$1;
(statearr_88666_88726[(2)] = inst_88610);

(statearr_88666_88726[(1)] = (10));


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
});})(c__32958__auto__,jobs,results,process,async))
;
return ((function (switch__32868__auto__,c__32958__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0 = (function (){
var statearr_88667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__);

(statearr_88667[(1)] = (1));

return statearr_88667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1 = (function (state_88641){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_88641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e88668){if((e88668 instanceof Object)){
var ex__32872__auto__ = e88668;
var statearr_88669_88727 = state_88641;
(statearr_88669_88727[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88728 = state_88641;
state_88641 = G__88728;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = function(state_88641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1.call(this,state_88641);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__,jobs,results,process,async))
})();
var state__32960__auto__ = (function (){var statearr_88670 = f__32959__auto__.call(null);
(statearr_88670[(6)] = c__32958__auto__);

return statearr_88670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__,jobs,results,process,async))
);

return c__32958__auto__;
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
var G__88730 = arguments.length;
switch (G__88730) {
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
var G__88733 = arguments.length;
switch (G__88733) {
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
var G__88736 = arguments.length;
switch (G__88736) {
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
var c__32958__auto___88785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___88785,tc,fc){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___88785,tc,fc){
return (function (state_88762){
var state_val_88763 = (state_88762[(1)]);
if((state_val_88763 === (7))){
var inst_88758 = (state_88762[(2)]);
var state_88762__$1 = state_88762;
var statearr_88764_88786 = state_88762__$1;
(statearr_88764_88786[(2)] = inst_88758);

(statearr_88764_88786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (1))){
var state_88762__$1 = state_88762;
var statearr_88765_88787 = state_88762__$1;
(statearr_88765_88787[(2)] = null);

(statearr_88765_88787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (4))){
var inst_88739 = (state_88762[(7)]);
var inst_88739__$1 = (state_88762[(2)]);
var inst_88740 = (inst_88739__$1 == null);
var state_88762__$1 = (function (){var statearr_88766 = state_88762;
(statearr_88766[(7)] = inst_88739__$1);

return statearr_88766;
})();
if(cljs.core.truth_(inst_88740)){
var statearr_88767_88788 = state_88762__$1;
(statearr_88767_88788[(1)] = (5));

} else {
var statearr_88768_88789 = state_88762__$1;
(statearr_88768_88789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (13))){
var state_88762__$1 = state_88762;
var statearr_88769_88790 = state_88762__$1;
(statearr_88769_88790[(2)] = null);

(statearr_88769_88790[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (6))){
var inst_88739 = (state_88762[(7)]);
var inst_88745 = p.call(null,inst_88739);
var state_88762__$1 = state_88762;
if(cljs.core.truth_(inst_88745)){
var statearr_88770_88791 = state_88762__$1;
(statearr_88770_88791[(1)] = (9));

} else {
var statearr_88771_88792 = state_88762__$1;
(statearr_88771_88792[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (3))){
var inst_88760 = (state_88762[(2)]);
var state_88762__$1 = state_88762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88762__$1,inst_88760);
} else {
if((state_val_88763 === (12))){
var state_88762__$1 = state_88762;
var statearr_88772_88793 = state_88762__$1;
(statearr_88772_88793[(2)] = null);

(statearr_88772_88793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (2))){
var state_88762__$1 = state_88762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88762__$1,(4),ch);
} else {
if((state_val_88763 === (11))){
var inst_88739 = (state_88762[(7)]);
var inst_88749 = (state_88762[(2)]);
var state_88762__$1 = state_88762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88762__$1,(8),inst_88749,inst_88739);
} else {
if((state_val_88763 === (9))){
var state_88762__$1 = state_88762;
var statearr_88773_88794 = state_88762__$1;
(statearr_88773_88794[(2)] = tc);

(statearr_88773_88794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (5))){
var inst_88742 = cljs.core.async.close_BANG_.call(null,tc);
var inst_88743 = cljs.core.async.close_BANG_.call(null,fc);
var state_88762__$1 = (function (){var statearr_88774 = state_88762;
(statearr_88774[(8)] = inst_88742);

return statearr_88774;
})();
var statearr_88775_88795 = state_88762__$1;
(statearr_88775_88795[(2)] = inst_88743);

(statearr_88775_88795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (14))){
var inst_88756 = (state_88762[(2)]);
var state_88762__$1 = state_88762;
var statearr_88776_88796 = state_88762__$1;
(statearr_88776_88796[(2)] = inst_88756);

(statearr_88776_88796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (10))){
var state_88762__$1 = state_88762;
var statearr_88777_88797 = state_88762__$1;
(statearr_88777_88797[(2)] = fc);

(statearr_88777_88797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (8))){
var inst_88751 = (state_88762[(2)]);
var state_88762__$1 = state_88762;
if(cljs.core.truth_(inst_88751)){
var statearr_88778_88798 = state_88762__$1;
(statearr_88778_88798[(1)] = (12));

} else {
var statearr_88779_88799 = state_88762__$1;
(statearr_88779_88799[(1)] = (13));

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
});})(c__32958__auto___88785,tc,fc))
;
return ((function (switch__32868__auto__,c__32958__auto___88785,tc,fc){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_88780 = [null,null,null,null,null,null,null,null,null];
(statearr_88780[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_88780[(1)] = (1));

return statearr_88780;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_88762){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_88762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e88781){if((e88781 instanceof Object)){
var ex__32872__auto__ = e88781;
var statearr_88782_88800 = state_88762;
(statearr_88782_88800[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88801 = state_88762;
state_88762 = G__88801;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_88762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_88762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___88785,tc,fc))
})();
var state__32960__auto__ = (function (){var statearr_88783 = f__32959__auto__.call(null);
(statearr_88783[(6)] = c__32958__auto___88785);

return statearr_88783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___88785,tc,fc))
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
var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__){
return (function (state_88822){
var state_val_88823 = (state_88822[(1)]);
if((state_val_88823 === (7))){
var inst_88818 = (state_88822[(2)]);
var state_88822__$1 = state_88822;
var statearr_88824_88842 = state_88822__$1;
(statearr_88824_88842[(2)] = inst_88818);

(statearr_88824_88842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88823 === (1))){
var inst_88802 = init;
var state_88822__$1 = (function (){var statearr_88825 = state_88822;
(statearr_88825[(7)] = inst_88802);

return statearr_88825;
})();
var statearr_88826_88843 = state_88822__$1;
(statearr_88826_88843[(2)] = null);

(statearr_88826_88843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88823 === (4))){
var inst_88805 = (state_88822[(8)]);
var inst_88805__$1 = (state_88822[(2)]);
var inst_88806 = (inst_88805__$1 == null);
var state_88822__$1 = (function (){var statearr_88827 = state_88822;
(statearr_88827[(8)] = inst_88805__$1);

return statearr_88827;
})();
if(cljs.core.truth_(inst_88806)){
var statearr_88828_88844 = state_88822__$1;
(statearr_88828_88844[(1)] = (5));

} else {
var statearr_88829_88845 = state_88822__$1;
(statearr_88829_88845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88823 === (6))){
var inst_88809 = (state_88822[(9)]);
var inst_88805 = (state_88822[(8)]);
var inst_88802 = (state_88822[(7)]);
var inst_88809__$1 = f.call(null,inst_88802,inst_88805);
var inst_88810 = cljs.core.reduced_QMARK_.call(null,inst_88809__$1);
var state_88822__$1 = (function (){var statearr_88830 = state_88822;
(statearr_88830[(9)] = inst_88809__$1);

return statearr_88830;
})();
if(inst_88810){
var statearr_88831_88846 = state_88822__$1;
(statearr_88831_88846[(1)] = (8));

} else {
var statearr_88832_88847 = state_88822__$1;
(statearr_88832_88847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88823 === (3))){
var inst_88820 = (state_88822[(2)]);
var state_88822__$1 = state_88822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88822__$1,inst_88820);
} else {
if((state_val_88823 === (2))){
var state_88822__$1 = state_88822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88822__$1,(4),ch);
} else {
if((state_val_88823 === (9))){
var inst_88809 = (state_88822[(9)]);
var inst_88802 = inst_88809;
var state_88822__$1 = (function (){var statearr_88833 = state_88822;
(statearr_88833[(7)] = inst_88802);

return statearr_88833;
})();
var statearr_88834_88848 = state_88822__$1;
(statearr_88834_88848[(2)] = null);

(statearr_88834_88848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88823 === (5))){
var inst_88802 = (state_88822[(7)]);
var state_88822__$1 = state_88822;
var statearr_88835_88849 = state_88822__$1;
(statearr_88835_88849[(2)] = inst_88802);

(statearr_88835_88849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88823 === (10))){
var inst_88816 = (state_88822[(2)]);
var state_88822__$1 = state_88822;
var statearr_88836_88850 = state_88822__$1;
(statearr_88836_88850[(2)] = inst_88816);

(statearr_88836_88850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88823 === (8))){
var inst_88809 = (state_88822[(9)]);
var inst_88812 = cljs.core.deref.call(null,inst_88809);
var state_88822__$1 = state_88822;
var statearr_88837_88851 = state_88822__$1;
(statearr_88837_88851[(2)] = inst_88812);

(statearr_88837_88851[(1)] = (10));


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
});})(c__32958__auto__))
;
return ((function (switch__32868__auto__,c__32958__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32869__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32869__auto____0 = (function (){
var statearr_88838 = [null,null,null,null,null,null,null,null,null,null];
(statearr_88838[(0)] = cljs$core$async$reduce_$_state_machine__32869__auto__);

(statearr_88838[(1)] = (1));

return statearr_88838;
});
var cljs$core$async$reduce_$_state_machine__32869__auto____1 = (function (state_88822){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_88822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e88839){if((e88839 instanceof Object)){
var ex__32872__auto__ = e88839;
var statearr_88840_88852 = state_88822;
(statearr_88840_88852[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88853 = state_88822;
state_88822 = G__88853;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32869__auto__ = function(state_88822){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32869__auto____1.call(this,state_88822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32869__auto____0;
cljs$core$async$reduce_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32869__auto____1;
return cljs$core$async$reduce_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__))
})();
var state__32960__auto__ = (function (){var statearr_88841 = f__32959__auto__.call(null);
(statearr_88841[(6)] = c__32958__auto__);

return statearr_88841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__))
);

return c__32958__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__,f__$1){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__,f__$1){
return (function (state_88859){
var state_val_88860 = (state_88859[(1)]);
if((state_val_88860 === (1))){
var inst_88854 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_88859__$1 = state_88859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88859__$1,(2),inst_88854);
} else {
if((state_val_88860 === (2))){
var inst_88856 = (state_88859[(2)]);
var inst_88857 = f__$1.call(null,inst_88856);
var state_88859__$1 = state_88859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88859__$1,inst_88857);
} else {
return null;
}
}
});})(c__32958__auto__,f__$1))
;
return ((function (switch__32868__auto__,c__32958__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32869__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32869__auto____0 = (function (){
var statearr_88861 = [null,null,null,null,null,null,null];
(statearr_88861[(0)] = cljs$core$async$transduce_$_state_machine__32869__auto__);

(statearr_88861[(1)] = (1));

return statearr_88861;
});
var cljs$core$async$transduce_$_state_machine__32869__auto____1 = (function (state_88859){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_88859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e88862){if((e88862 instanceof Object)){
var ex__32872__auto__ = e88862;
var statearr_88863_88865 = state_88859;
(statearr_88863_88865[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88866 = state_88859;
state_88859 = G__88866;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32869__auto__ = function(state_88859){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32869__auto____1.call(this,state_88859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32869__auto____0;
cljs$core$async$transduce_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32869__auto____1;
return cljs$core$async$transduce_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__,f__$1))
})();
var state__32960__auto__ = (function (){var statearr_88864 = f__32959__auto__.call(null);
(statearr_88864[(6)] = c__32958__auto__);

return statearr_88864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__,f__$1))
);

return c__32958__auto__;
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
var G__88868 = arguments.length;
switch (G__88868) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__){
return (function (state_88893){
var state_val_88894 = (state_88893[(1)]);
if((state_val_88894 === (7))){
var inst_88875 = (state_88893[(2)]);
var state_88893__$1 = state_88893;
var statearr_88895_88916 = state_88893__$1;
(statearr_88895_88916[(2)] = inst_88875);

(statearr_88895_88916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88894 === (1))){
var inst_88869 = cljs.core.seq.call(null,coll);
var inst_88870 = inst_88869;
var state_88893__$1 = (function (){var statearr_88896 = state_88893;
(statearr_88896[(7)] = inst_88870);

return statearr_88896;
})();
var statearr_88897_88917 = state_88893__$1;
(statearr_88897_88917[(2)] = null);

(statearr_88897_88917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88894 === (4))){
var inst_88870 = (state_88893[(7)]);
var inst_88873 = cljs.core.first.call(null,inst_88870);
var state_88893__$1 = state_88893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88893__$1,(7),ch,inst_88873);
} else {
if((state_val_88894 === (13))){
var inst_88887 = (state_88893[(2)]);
var state_88893__$1 = state_88893;
var statearr_88898_88918 = state_88893__$1;
(statearr_88898_88918[(2)] = inst_88887);

(statearr_88898_88918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88894 === (6))){
var inst_88878 = (state_88893[(2)]);
var state_88893__$1 = state_88893;
if(cljs.core.truth_(inst_88878)){
var statearr_88899_88919 = state_88893__$1;
(statearr_88899_88919[(1)] = (8));

} else {
var statearr_88900_88920 = state_88893__$1;
(statearr_88900_88920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88894 === (3))){
var inst_88891 = (state_88893[(2)]);
var state_88893__$1 = state_88893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88893__$1,inst_88891);
} else {
if((state_val_88894 === (12))){
var state_88893__$1 = state_88893;
var statearr_88901_88921 = state_88893__$1;
(statearr_88901_88921[(2)] = null);

(statearr_88901_88921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88894 === (2))){
var inst_88870 = (state_88893[(7)]);
var state_88893__$1 = state_88893;
if(cljs.core.truth_(inst_88870)){
var statearr_88902_88922 = state_88893__$1;
(statearr_88902_88922[(1)] = (4));

} else {
var statearr_88903_88923 = state_88893__$1;
(statearr_88903_88923[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88894 === (11))){
var inst_88884 = cljs.core.async.close_BANG_.call(null,ch);
var state_88893__$1 = state_88893;
var statearr_88904_88924 = state_88893__$1;
(statearr_88904_88924[(2)] = inst_88884);

(statearr_88904_88924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88894 === (9))){
var state_88893__$1 = state_88893;
if(cljs.core.truth_(close_QMARK_)){
var statearr_88905_88925 = state_88893__$1;
(statearr_88905_88925[(1)] = (11));

} else {
var statearr_88906_88926 = state_88893__$1;
(statearr_88906_88926[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88894 === (5))){
var inst_88870 = (state_88893[(7)]);
var state_88893__$1 = state_88893;
var statearr_88907_88927 = state_88893__$1;
(statearr_88907_88927[(2)] = inst_88870);

(statearr_88907_88927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88894 === (10))){
var inst_88889 = (state_88893[(2)]);
var state_88893__$1 = state_88893;
var statearr_88908_88928 = state_88893__$1;
(statearr_88908_88928[(2)] = inst_88889);

(statearr_88908_88928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88894 === (8))){
var inst_88870 = (state_88893[(7)]);
var inst_88880 = cljs.core.next.call(null,inst_88870);
var inst_88870__$1 = inst_88880;
var state_88893__$1 = (function (){var statearr_88909 = state_88893;
(statearr_88909[(7)] = inst_88870__$1);

return statearr_88909;
})();
var statearr_88910_88929 = state_88893__$1;
(statearr_88910_88929[(2)] = null);

(statearr_88910_88929[(1)] = (2));


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
});})(c__32958__auto__))
;
return ((function (switch__32868__auto__,c__32958__auto__){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_88911 = [null,null,null,null,null,null,null,null];
(statearr_88911[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_88911[(1)] = (1));

return statearr_88911;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_88893){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_88893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e88912){if((e88912 instanceof Object)){
var ex__32872__auto__ = e88912;
var statearr_88913_88930 = state_88893;
(statearr_88913_88930[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88931 = state_88893;
state_88893 = G__88931;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_88893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_88893);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__))
})();
var state__32960__auto__ = (function (){var statearr_88914 = f__32959__auto__.call(null);
(statearr_88914[(6)] = c__32958__auto__);

return statearr_88914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__))
);

return c__32958__auto__;
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
var x__29288__auto__ = (((_ == null))?null:_);
var m__29289__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,_);
} else {
var m__29289__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,_);
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
var x__29288__auto__ = (((m == null))?null:m);
var m__29289__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29289__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__29288__auto__ = (((m == null))?null:m);
var m__29289__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,m,ch);
} else {
var m__29289__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,m,ch);
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
var x__29288__auto__ = (((m == null))?null:m);
var m__29289__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,m);
} else {
var m__29289__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async88932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88932 = (function (ch,cs,meta88933){
this.ch = ch;
this.cs = cs;
this.meta88933 = meta88933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async88932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_88934,meta88933__$1){
var self__ = this;
var _88934__$1 = this;
return (new cljs.core.async.t_cljs$core$async88932(self__.ch,self__.cs,meta88933__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async88932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_88934){
var self__ = this;
var _88934__$1 = this;
return self__.meta88933;
});})(cs))
;

cljs.core.async.t_cljs$core$async88932.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async88932.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88932.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async88932.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async88932.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async88932.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta88933","meta88933",552031610,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async88932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88932";

cljs.core.async.t_cljs$core$async88932.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async88932");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async88932 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async88932(ch__$1,cs__$1,meta88933){
return (new cljs.core.async.t_cljs$core$async88932(ch__$1,cs__$1,meta88933));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async88932(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32958__auto___89154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___89154,cs,m,dchan,dctr,done){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___89154,cs,m,dchan,dctr,done){
return (function (state_89069){
var state_val_89070 = (state_89069[(1)]);
if((state_val_89070 === (7))){
var inst_89065 = (state_89069[(2)]);
var state_89069__$1 = state_89069;
var statearr_89071_89155 = state_89069__$1;
(statearr_89071_89155[(2)] = inst_89065);

(statearr_89071_89155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (20))){
var inst_88968 = (state_89069[(7)]);
var inst_88980 = cljs.core.first.call(null,inst_88968);
var inst_88981 = cljs.core.nth.call(null,inst_88980,(0),null);
var inst_88982 = cljs.core.nth.call(null,inst_88980,(1),null);
var state_89069__$1 = (function (){var statearr_89072 = state_89069;
(statearr_89072[(8)] = inst_88981);

return statearr_89072;
})();
if(cljs.core.truth_(inst_88982)){
var statearr_89073_89156 = state_89069__$1;
(statearr_89073_89156[(1)] = (22));

} else {
var statearr_89074_89157 = state_89069__$1;
(statearr_89074_89157[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (27))){
var inst_89017 = (state_89069[(9)]);
var inst_89012 = (state_89069[(10)]);
var inst_88937 = (state_89069[(11)]);
var inst_89010 = (state_89069[(12)]);
var inst_89017__$1 = cljs.core._nth.call(null,inst_89010,inst_89012);
var inst_89018 = cljs.core.async.put_BANG_.call(null,inst_89017__$1,inst_88937,done);
var state_89069__$1 = (function (){var statearr_89075 = state_89069;
(statearr_89075[(9)] = inst_89017__$1);

return statearr_89075;
})();
if(cljs.core.truth_(inst_89018)){
var statearr_89076_89158 = state_89069__$1;
(statearr_89076_89158[(1)] = (30));

} else {
var statearr_89077_89159 = state_89069__$1;
(statearr_89077_89159[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (1))){
var state_89069__$1 = state_89069;
var statearr_89078_89160 = state_89069__$1;
(statearr_89078_89160[(2)] = null);

(statearr_89078_89160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (24))){
var inst_88968 = (state_89069[(7)]);
var inst_88987 = (state_89069[(2)]);
var inst_88988 = cljs.core.next.call(null,inst_88968);
var inst_88946 = inst_88988;
var inst_88947 = null;
var inst_88948 = (0);
var inst_88949 = (0);
var state_89069__$1 = (function (){var statearr_89079 = state_89069;
(statearr_89079[(13)] = inst_88947);

(statearr_89079[(14)] = inst_88987);

(statearr_89079[(15)] = inst_88948);

(statearr_89079[(16)] = inst_88949);

(statearr_89079[(17)] = inst_88946);

return statearr_89079;
})();
var statearr_89080_89161 = state_89069__$1;
(statearr_89080_89161[(2)] = null);

(statearr_89080_89161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (39))){
var state_89069__$1 = state_89069;
var statearr_89084_89162 = state_89069__$1;
(statearr_89084_89162[(2)] = null);

(statearr_89084_89162[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (4))){
var inst_88937 = (state_89069[(11)]);
var inst_88937__$1 = (state_89069[(2)]);
var inst_88938 = (inst_88937__$1 == null);
var state_89069__$1 = (function (){var statearr_89085 = state_89069;
(statearr_89085[(11)] = inst_88937__$1);

return statearr_89085;
})();
if(cljs.core.truth_(inst_88938)){
var statearr_89086_89163 = state_89069__$1;
(statearr_89086_89163[(1)] = (5));

} else {
var statearr_89087_89164 = state_89069__$1;
(statearr_89087_89164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (15))){
var inst_88947 = (state_89069[(13)]);
var inst_88948 = (state_89069[(15)]);
var inst_88949 = (state_89069[(16)]);
var inst_88946 = (state_89069[(17)]);
var inst_88964 = (state_89069[(2)]);
var inst_88965 = (inst_88949 + (1));
var tmp89081 = inst_88947;
var tmp89082 = inst_88948;
var tmp89083 = inst_88946;
var inst_88946__$1 = tmp89083;
var inst_88947__$1 = tmp89081;
var inst_88948__$1 = tmp89082;
var inst_88949__$1 = inst_88965;
var state_89069__$1 = (function (){var statearr_89088 = state_89069;
(statearr_89088[(13)] = inst_88947__$1);

(statearr_89088[(15)] = inst_88948__$1);

(statearr_89088[(18)] = inst_88964);

(statearr_89088[(16)] = inst_88949__$1);

(statearr_89088[(17)] = inst_88946__$1);

return statearr_89088;
})();
var statearr_89089_89165 = state_89069__$1;
(statearr_89089_89165[(2)] = null);

(statearr_89089_89165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (21))){
var inst_88991 = (state_89069[(2)]);
var state_89069__$1 = state_89069;
var statearr_89093_89166 = state_89069__$1;
(statearr_89093_89166[(2)] = inst_88991);

(statearr_89093_89166[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (31))){
var inst_89017 = (state_89069[(9)]);
var inst_89021 = done.call(null,null);
var inst_89022 = cljs.core.async.untap_STAR_.call(null,m,inst_89017);
var state_89069__$1 = (function (){var statearr_89094 = state_89069;
(statearr_89094[(19)] = inst_89021);

return statearr_89094;
})();
var statearr_89095_89167 = state_89069__$1;
(statearr_89095_89167[(2)] = inst_89022);

(statearr_89095_89167[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (32))){
var inst_89011 = (state_89069[(20)]);
var inst_89012 = (state_89069[(10)]);
var inst_89009 = (state_89069[(21)]);
var inst_89010 = (state_89069[(12)]);
var inst_89024 = (state_89069[(2)]);
var inst_89025 = (inst_89012 + (1));
var tmp89090 = inst_89011;
var tmp89091 = inst_89009;
var tmp89092 = inst_89010;
var inst_89009__$1 = tmp89091;
var inst_89010__$1 = tmp89092;
var inst_89011__$1 = tmp89090;
var inst_89012__$1 = inst_89025;
var state_89069__$1 = (function (){var statearr_89096 = state_89069;
(statearr_89096[(22)] = inst_89024);

(statearr_89096[(20)] = inst_89011__$1);

(statearr_89096[(10)] = inst_89012__$1);

(statearr_89096[(21)] = inst_89009__$1);

(statearr_89096[(12)] = inst_89010__$1);

return statearr_89096;
})();
var statearr_89097_89168 = state_89069__$1;
(statearr_89097_89168[(2)] = null);

(statearr_89097_89168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (40))){
var inst_89037 = (state_89069[(23)]);
var inst_89041 = done.call(null,null);
var inst_89042 = cljs.core.async.untap_STAR_.call(null,m,inst_89037);
var state_89069__$1 = (function (){var statearr_89098 = state_89069;
(statearr_89098[(24)] = inst_89041);

return statearr_89098;
})();
var statearr_89099_89169 = state_89069__$1;
(statearr_89099_89169[(2)] = inst_89042);

(statearr_89099_89169[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (33))){
var inst_89028 = (state_89069[(25)]);
var inst_89030 = cljs.core.chunked_seq_QMARK_.call(null,inst_89028);
var state_89069__$1 = state_89069;
if(inst_89030){
var statearr_89100_89170 = state_89069__$1;
(statearr_89100_89170[(1)] = (36));

} else {
var statearr_89101_89171 = state_89069__$1;
(statearr_89101_89171[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (13))){
var inst_88958 = (state_89069[(26)]);
var inst_88961 = cljs.core.async.close_BANG_.call(null,inst_88958);
var state_89069__$1 = state_89069;
var statearr_89102_89172 = state_89069__$1;
(statearr_89102_89172[(2)] = inst_88961);

(statearr_89102_89172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (22))){
var inst_88981 = (state_89069[(8)]);
var inst_88984 = cljs.core.async.close_BANG_.call(null,inst_88981);
var state_89069__$1 = state_89069;
var statearr_89103_89173 = state_89069__$1;
(statearr_89103_89173[(2)] = inst_88984);

(statearr_89103_89173[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (36))){
var inst_89028 = (state_89069[(25)]);
var inst_89032 = cljs.core.chunk_first.call(null,inst_89028);
var inst_89033 = cljs.core.chunk_rest.call(null,inst_89028);
var inst_89034 = cljs.core.count.call(null,inst_89032);
var inst_89009 = inst_89033;
var inst_89010 = inst_89032;
var inst_89011 = inst_89034;
var inst_89012 = (0);
var state_89069__$1 = (function (){var statearr_89104 = state_89069;
(statearr_89104[(20)] = inst_89011);

(statearr_89104[(10)] = inst_89012);

(statearr_89104[(21)] = inst_89009);

(statearr_89104[(12)] = inst_89010);

return statearr_89104;
})();
var statearr_89105_89174 = state_89069__$1;
(statearr_89105_89174[(2)] = null);

(statearr_89105_89174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (41))){
var inst_89028 = (state_89069[(25)]);
var inst_89044 = (state_89069[(2)]);
var inst_89045 = cljs.core.next.call(null,inst_89028);
var inst_89009 = inst_89045;
var inst_89010 = null;
var inst_89011 = (0);
var inst_89012 = (0);
var state_89069__$1 = (function (){var statearr_89106 = state_89069;
(statearr_89106[(20)] = inst_89011);

(statearr_89106[(10)] = inst_89012);

(statearr_89106[(21)] = inst_89009);

(statearr_89106[(12)] = inst_89010);

(statearr_89106[(27)] = inst_89044);

return statearr_89106;
})();
var statearr_89107_89175 = state_89069__$1;
(statearr_89107_89175[(2)] = null);

(statearr_89107_89175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (43))){
var state_89069__$1 = state_89069;
var statearr_89108_89176 = state_89069__$1;
(statearr_89108_89176[(2)] = null);

(statearr_89108_89176[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (29))){
var inst_89053 = (state_89069[(2)]);
var state_89069__$1 = state_89069;
var statearr_89109_89177 = state_89069__$1;
(statearr_89109_89177[(2)] = inst_89053);

(statearr_89109_89177[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (44))){
var inst_89062 = (state_89069[(2)]);
var state_89069__$1 = (function (){var statearr_89110 = state_89069;
(statearr_89110[(28)] = inst_89062);

return statearr_89110;
})();
var statearr_89111_89178 = state_89069__$1;
(statearr_89111_89178[(2)] = null);

(statearr_89111_89178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (6))){
var inst_89001 = (state_89069[(29)]);
var inst_89000 = cljs.core.deref.call(null,cs);
var inst_89001__$1 = cljs.core.keys.call(null,inst_89000);
var inst_89002 = cljs.core.count.call(null,inst_89001__$1);
var inst_89003 = cljs.core.reset_BANG_.call(null,dctr,inst_89002);
var inst_89008 = cljs.core.seq.call(null,inst_89001__$1);
var inst_89009 = inst_89008;
var inst_89010 = null;
var inst_89011 = (0);
var inst_89012 = (0);
var state_89069__$1 = (function (){var statearr_89112 = state_89069;
(statearr_89112[(30)] = inst_89003);

(statearr_89112[(20)] = inst_89011);

(statearr_89112[(10)] = inst_89012);

(statearr_89112[(29)] = inst_89001__$1);

(statearr_89112[(21)] = inst_89009);

(statearr_89112[(12)] = inst_89010);

return statearr_89112;
})();
var statearr_89113_89179 = state_89069__$1;
(statearr_89113_89179[(2)] = null);

(statearr_89113_89179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (28))){
var inst_89028 = (state_89069[(25)]);
var inst_89009 = (state_89069[(21)]);
var inst_89028__$1 = cljs.core.seq.call(null,inst_89009);
var state_89069__$1 = (function (){var statearr_89114 = state_89069;
(statearr_89114[(25)] = inst_89028__$1);

return statearr_89114;
})();
if(inst_89028__$1){
var statearr_89115_89180 = state_89069__$1;
(statearr_89115_89180[(1)] = (33));

} else {
var statearr_89116_89181 = state_89069__$1;
(statearr_89116_89181[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (25))){
var inst_89011 = (state_89069[(20)]);
var inst_89012 = (state_89069[(10)]);
var inst_89014 = (inst_89012 < inst_89011);
var inst_89015 = inst_89014;
var state_89069__$1 = state_89069;
if(cljs.core.truth_(inst_89015)){
var statearr_89117_89182 = state_89069__$1;
(statearr_89117_89182[(1)] = (27));

} else {
var statearr_89118_89183 = state_89069__$1;
(statearr_89118_89183[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (34))){
var state_89069__$1 = state_89069;
var statearr_89119_89184 = state_89069__$1;
(statearr_89119_89184[(2)] = null);

(statearr_89119_89184[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (17))){
var state_89069__$1 = state_89069;
var statearr_89120_89185 = state_89069__$1;
(statearr_89120_89185[(2)] = null);

(statearr_89120_89185[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (3))){
var inst_89067 = (state_89069[(2)]);
var state_89069__$1 = state_89069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89069__$1,inst_89067);
} else {
if((state_val_89070 === (12))){
var inst_88996 = (state_89069[(2)]);
var state_89069__$1 = state_89069;
var statearr_89121_89186 = state_89069__$1;
(statearr_89121_89186[(2)] = inst_88996);

(statearr_89121_89186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (2))){
var state_89069__$1 = state_89069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89069__$1,(4),ch);
} else {
if((state_val_89070 === (23))){
var state_89069__$1 = state_89069;
var statearr_89122_89187 = state_89069__$1;
(statearr_89122_89187[(2)] = null);

(statearr_89122_89187[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (35))){
var inst_89051 = (state_89069[(2)]);
var state_89069__$1 = state_89069;
var statearr_89123_89188 = state_89069__$1;
(statearr_89123_89188[(2)] = inst_89051);

(statearr_89123_89188[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (19))){
var inst_88968 = (state_89069[(7)]);
var inst_88972 = cljs.core.chunk_first.call(null,inst_88968);
var inst_88973 = cljs.core.chunk_rest.call(null,inst_88968);
var inst_88974 = cljs.core.count.call(null,inst_88972);
var inst_88946 = inst_88973;
var inst_88947 = inst_88972;
var inst_88948 = inst_88974;
var inst_88949 = (0);
var state_89069__$1 = (function (){var statearr_89124 = state_89069;
(statearr_89124[(13)] = inst_88947);

(statearr_89124[(15)] = inst_88948);

(statearr_89124[(16)] = inst_88949);

(statearr_89124[(17)] = inst_88946);

return statearr_89124;
})();
var statearr_89125_89189 = state_89069__$1;
(statearr_89125_89189[(2)] = null);

(statearr_89125_89189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (11))){
var inst_88968 = (state_89069[(7)]);
var inst_88946 = (state_89069[(17)]);
var inst_88968__$1 = cljs.core.seq.call(null,inst_88946);
var state_89069__$1 = (function (){var statearr_89126 = state_89069;
(statearr_89126[(7)] = inst_88968__$1);

return statearr_89126;
})();
if(inst_88968__$1){
var statearr_89127_89190 = state_89069__$1;
(statearr_89127_89190[(1)] = (16));

} else {
var statearr_89128_89191 = state_89069__$1;
(statearr_89128_89191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (9))){
var inst_88998 = (state_89069[(2)]);
var state_89069__$1 = state_89069;
var statearr_89129_89192 = state_89069__$1;
(statearr_89129_89192[(2)] = inst_88998);

(statearr_89129_89192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (5))){
var inst_88944 = cljs.core.deref.call(null,cs);
var inst_88945 = cljs.core.seq.call(null,inst_88944);
var inst_88946 = inst_88945;
var inst_88947 = null;
var inst_88948 = (0);
var inst_88949 = (0);
var state_89069__$1 = (function (){var statearr_89130 = state_89069;
(statearr_89130[(13)] = inst_88947);

(statearr_89130[(15)] = inst_88948);

(statearr_89130[(16)] = inst_88949);

(statearr_89130[(17)] = inst_88946);

return statearr_89130;
})();
var statearr_89131_89193 = state_89069__$1;
(statearr_89131_89193[(2)] = null);

(statearr_89131_89193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (14))){
var state_89069__$1 = state_89069;
var statearr_89132_89194 = state_89069__$1;
(statearr_89132_89194[(2)] = null);

(statearr_89132_89194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (45))){
var inst_89059 = (state_89069[(2)]);
var state_89069__$1 = state_89069;
var statearr_89133_89195 = state_89069__$1;
(statearr_89133_89195[(2)] = inst_89059);

(statearr_89133_89195[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (26))){
var inst_89001 = (state_89069[(29)]);
var inst_89055 = (state_89069[(2)]);
var inst_89056 = cljs.core.seq.call(null,inst_89001);
var state_89069__$1 = (function (){var statearr_89134 = state_89069;
(statearr_89134[(31)] = inst_89055);

return statearr_89134;
})();
if(inst_89056){
var statearr_89135_89196 = state_89069__$1;
(statearr_89135_89196[(1)] = (42));

} else {
var statearr_89136_89197 = state_89069__$1;
(statearr_89136_89197[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (16))){
var inst_88968 = (state_89069[(7)]);
var inst_88970 = cljs.core.chunked_seq_QMARK_.call(null,inst_88968);
var state_89069__$1 = state_89069;
if(inst_88970){
var statearr_89137_89198 = state_89069__$1;
(statearr_89137_89198[(1)] = (19));

} else {
var statearr_89138_89199 = state_89069__$1;
(statearr_89138_89199[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (38))){
var inst_89048 = (state_89069[(2)]);
var state_89069__$1 = state_89069;
var statearr_89139_89200 = state_89069__$1;
(statearr_89139_89200[(2)] = inst_89048);

(statearr_89139_89200[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (30))){
var state_89069__$1 = state_89069;
var statearr_89140_89201 = state_89069__$1;
(statearr_89140_89201[(2)] = null);

(statearr_89140_89201[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (10))){
var inst_88947 = (state_89069[(13)]);
var inst_88949 = (state_89069[(16)]);
var inst_88957 = cljs.core._nth.call(null,inst_88947,inst_88949);
var inst_88958 = cljs.core.nth.call(null,inst_88957,(0),null);
var inst_88959 = cljs.core.nth.call(null,inst_88957,(1),null);
var state_89069__$1 = (function (){var statearr_89141 = state_89069;
(statearr_89141[(26)] = inst_88958);

return statearr_89141;
})();
if(cljs.core.truth_(inst_88959)){
var statearr_89142_89202 = state_89069__$1;
(statearr_89142_89202[(1)] = (13));

} else {
var statearr_89143_89203 = state_89069__$1;
(statearr_89143_89203[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (18))){
var inst_88994 = (state_89069[(2)]);
var state_89069__$1 = state_89069;
var statearr_89144_89204 = state_89069__$1;
(statearr_89144_89204[(2)] = inst_88994);

(statearr_89144_89204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (42))){
var state_89069__$1 = state_89069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89069__$1,(45),dchan);
} else {
if((state_val_89070 === (37))){
var inst_89028 = (state_89069[(25)]);
var inst_89037 = (state_89069[(23)]);
var inst_88937 = (state_89069[(11)]);
var inst_89037__$1 = cljs.core.first.call(null,inst_89028);
var inst_89038 = cljs.core.async.put_BANG_.call(null,inst_89037__$1,inst_88937,done);
var state_89069__$1 = (function (){var statearr_89145 = state_89069;
(statearr_89145[(23)] = inst_89037__$1);

return statearr_89145;
})();
if(cljs.core.truth_(inst_89038)){
var statearr_89146_89205 = state_89069__$1;
(statearr_89146_89205[(1)] = (39));

} else {
var statearr_89147_89206 = state_89069__$1;
(statearr_89147_89206[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89070 === (8))){
var inst_88948 = (state_89069[(15)]);
var inst_88949 = (state_89069[(16)]);
var inst_88951 = (inst_88949 < inst_88948);
var inst_88952 = inst_88951;
var state_89069__$1 = state_89069;
if(cljs.core.truth_(inst_88952)){
var statearr_89148_89207 = state_89069__$1;
(statearr_89148_89207[(1)] = (10));

} else {
var statearr_89149_89208 = state_89069__$1;
(statearr_89149_89208[(1)] = (11));

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
});})(c__32958__auto___89154,cs,m,dchan,dctr,done))
;
return ((function (switch__32868__auto__,c__32958__auto___89154,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32869__auto__ = null;
var cljs$core$async$mult_$_state_machine__32869__auto____0 = (function (){
var statearr_89150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89150[(0)] = cljs$core$async$mult_$_state_machine__32869__auto__);

(statearr_89150[(1)] = (1));

return statearr_89150;
});
var cljs$core$async$mult_$_state_machine__32869__auto____1 = (function (state_89069){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_89069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e89151){if((e89151 instanceof Object)){
var ex__32872__auto__ = e89151;
var statearr_89152_89209 = state_89069;
(statearr_89152_89209[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89210 = state_89069;
state_89069 = G__89210;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32869__auto__ = function(state_89069){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32869__auto____1.call(this,state_89069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32869__auto____0;
cljs$core$async$mult_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32869__auto____1;
return cljs$core$async$mult_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___89154,cs,m,dchan,dctr,done))
})();
var state__32960__auto__ = (function (){var statearr_89153 = f__32959__auto__.call(null);
(statearr_89153[(6)] = c__32958__auto___89154);

return statearr_89153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___89154,cs,m,dchan,dctr,done))
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
var G__89212 = arguments.length;
switch (G__89212) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var x__29288__auto__ = (((m == null))?null:m);
var m__29289__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,m,ch);
} else {
var m__29289__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,m,ch);
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
var x__29288__auto__ = (((m == null))?null:m);
var m__29289__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,m,ch);
} else {
var m__29289__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,m,ch);
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
var x__29288__auto__ = (((m == null))?null:m);
var m__29289__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,m);
} else {
var m__29289__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,m);
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
var x__29288__auto__ = (((m == null))?null:m);
var m__29289__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,m,state_map);
} else {
var m__29289__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,m,state_map);
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
var x__29288__auto__ = (((m == null))?null:m);
var m__29289__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,m,mode);
} else {
var m__29289__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29809__auto__ = [];
var len__29802__auto___89224 = arguments.length;
var i__29803__auto___89225 = (0);
while(true){
if((i__29803__auto___89225 < len__29802__auto___89224)){
args__29809__auto__.push((arguments[i__29803__auto___89225]));

var G__89226 = (i__29803__auto___89225 + (1));
i__29803__auto___89225 = G__89226;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((3) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29810__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__89218){
var map__89219 = p__89218;
var map__89219__$1 = ((((!((map__89219 == null)))?((((map__89219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89219):map__89219);
var opts = map__89219__$1;
var statearr_89221_89227 = state;
(statearr_89221_89227[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__89219,map__89219__$1,opts){
return (function (val){
var statearr_89222_89228 = state;
(statearr_89222_89228[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__89219,map__89219__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_89223_89229 = state;
(statearr_89223_89229[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq89214){
var G__89215 = cljs.core.first.call(null,seq89214);
var seq89214__$1 = cljs.core.next.call(null,seq89214);
var G__89216 = cljs.core.first.call(null,seq89214__$1);
var seq89214__$2 = cljs.core.next.call(null,seq89214__$1);
var G__89217 = cljs.core.first.call(null,seq89214__$2);
var seq89214__$3 = cljs.core.next.call(null,seq89214__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__89215,G__89216,G__89217,seq89214__$3);
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
if(typeof cljs.core.async.t_cljs$core$async89230 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async89230 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta89231){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta89231 = meta89231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async89230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_89232,meta89231__$1){
var self__ = this;
var _89232__$1 = this;
return (new cljs.core.async.t_cljs$core$async89230(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta89231__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_89232){
var self__ = this;
var _89232__$1 = this;
return self__.meta89231;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89230.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89230.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89230.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89230.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89230.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89230.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89230.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89230.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89230.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta89231","meta89231",-1671649656,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89230.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async89230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async89230";

cljs.core.async.t_cljs$core$async89230.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async89230");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async89230 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async89230(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta89231){
return (new cljs.core.async.t_cljs$core$async89230(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta89231));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async89230(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32958__auto___89394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___89394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___89394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_89334){
var state_val_89335 = (state_89334[(1)]);
if((state_val_89335 === (7))){
var inst_89249 = (state_89334[(2)]);
var state_89334__$1 = state_89334;
var statearr_89336_89395 = state_89334__$1;
(statearr_89336_89395[(2)] = inst_89249);

(statearr_89336_89395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (20))){
var inst_89261 = (state_89334[(7)]);
var state_89334__$1 = state_89334;
var statearr_89337_89396 = state_89334__$1;
(statearr_89337_89396[(2)] = inst_89261);

(statearr_89337_89396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (27))){
var state_89334__$1 = state_89334;
var statearr_89338_89397 = state_89334__$1;
(statearr_89338_89397[(2)] = null);

(statearr_89338_89397[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (1))){
var inst_89236 = (state_89334[(8)]);
var inst_89236__$1 = calc_state.call(null);
var inst_89238 = (inst_89236__$1 == null);
var inst_89239 = cljs.core.not.call(null,inst_89238);
var state_89334__$1 = (function (){var statearr_89339 = state_89334;
(statearr_89339[(8)] = inst_89236__$1);

return statearr_89339;
})();
if(inst_89239){
var statearr_89340_89398 = state_89334__$1;
(statearr_89340_89398[(1)] = (2));

} else {
var statearr_89341_89399 = state_89334__$1;
(statearr_89341_89399[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (24))){
var inst_89285 = (state_89334[(9)]);
var inst_89308 = (state_89334[(10)]);
var inst_89294 = (state_89334[(11)]);
var inst_89308__$1 = inst_89285.call(null,inst_89294);
var state_89334__$1 = (function (){var statearr_89342 = state_89334;
(statearr_89342[(10)] = inst_89308__$1);

return statearr_89342;
})();
if(cljs.core.truth_(inst_89308__$1)){
var statearr_89343_89400 = state_89334__$1;
(statearr_89343_89400[(1)] = (29));

} else {
var statearr_89344_89401 = state_89334__$1;
(statearr_89344_89401[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (4))){
var inst_89252 = (state_89334[(2)]);
var state_89334__$1 = state_89334;
if(cljs.core.truth_(inst_89252)){
var statearr_89345_89402 = state_89334__$1;
(statearr_89345_89402[(1)] = (8));

} else {
var statearr_89346_89403 = state_89334__$1;
(statearr_89346_89403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (15))){
var inst_89279 = (state_89334[(2)]);
var state_89334__$1 = state_89334;
if(cljs.core.truth_(inst_89279)){
var statearr_89347_89404 = state_89334__$1;
(statearr_89347_89404[(1)] = (19));

} else {
var statearr_89348_89405 = state_89334__$1;
(statearr_89348_89405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (21))){
var inst_89284 = (state_89334[(12)]);
var inst_89284__$1 = (state_89334[(2)]);
var inst_89285 = cljs.core.get.call(null,inst_89284__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_89286 = cljs.core.get.call(null,inst_89284__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_89287 = cljs.core.get.call(null,inst_89284__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_89334__$1 = (function (){var statearr_89349 = state_89334;
(statearr_89349[(9)] = inst_89285);

(statearr_89349[(12)] = inst_89284__$1);

(statearr_89349[(13)] = inst_89286);

return statearr_89349;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_89334__$1,(22),inst_89287);
} else {
if((state_val_89335 === (31))){
var inst_89316 = (state_89334[(2)]);
var state_89334__$1 = state_89334;
if(cljs.core.truth_(inst_89316)){
var statearr_89350_89406 = state_89334__$1;
(statearr_89350_89406[(1)] = (32));

} else {
var statearr_89351_89407 = state_89334__$1;
(statearr_89351_89407[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (32))){
var inst_89293 = (state_89334[(14)]);
var state_89334__$1 = state_89334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89334__$1,(35),out,inst_89293);
} else {
if((state_val_89335 === (33))){
var inst_89284 = (state_89334[(12)]);
var inst_89261 = inst_89284;
var state_89334__$1 = (function (){var statearr_89352 = state_89334;
(statearr_89352[(7)] = inst_89261);

return statearr_89352;
})();
var statearr_89353_89408 = state_89334__$1;
(statearr_89353_89408[(2)] = null);

(statearr_89353_89408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (13))){
var inst_89261 = (state_89334[(7)]);
var inst_89268 = inst_89261.cljs$lang$protocol_mask$partition0$;
var inst_89269 = (inst_89268 & (64));
var inst_89270 = inst_89261.cljs$core$ISeq$;
var inst_89271 = (cljs.core.PROTOCOL_SENTINEL === inst_89270);
var inst_89272 = (inst_89269) || (inst_89271);
var state_89334__$1 = state_89334;
if(cljs.core.truth_(inst_89272)){
var statearr_89354_89409 = state_89334__$1;
(statearr_89354_89409[(1)] = (16));

} else {
var statearr_89355_89410 = state_89334__$1;
(statearr_89355_89410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (22))){
var inst_89293 = (state_89334[(14)]);
var inst_89294 = (state_89334[(11)]);
var inst_89292 = (state_89334[(2)]);
var inst_89293__$1 = cljs.core.nth.call(null,inst_89292,(0),null);
var inst_89294__$1 = cljs.core.nth.call(null,inst_89292,(1),null);
var inst_89295 = (inst_89293__$1 == null);
var inst_89296 = cljs.core._EQ_.call(null,inst_89294__$1,change);
var inst_89297 = (inst_89295) || (inst_89296);
var state_89334__$1 = (function (){var statearr_89356 = state_89334;
(statearr_89356[(14)] = inst_89293__$1);

(statearr_89356[(11)] = inst_89294__$1);

return statearr_89356;
})();
if(cljs.core.truth_(inst_89297)){
var statearr_89357_89411 = state_89334__$1;
(statearr_89357_89411[(1)] = (23));

} else {
var statearr_89358_89412 = state_89334__$1;
(statearr_89358_89412[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (36))){
var inst_89284 = (state_89334[(12)]);
var inst_89261 = inst_89284;
var state_89334__$1 = (function (){var statearr_89359 = state_89334;
(statearr_89359[(7)] = inst_89261);

return statearr_89359;
})();
var statearr_89360_89413 = state_89334__$1;
(statearr_89360_89413[(2)] = null);

(statearr_89360_89413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (29))){
var inst_89308 = (state_89334[(10)]);
var state_89334__$1 = state_89334;
var statearr_89361_89414 = state_89334__$1;
(statearr_89361_89414[(2)] = inst_89308);

(statearr_89361_89414[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (6))){
var state_89334__$1 = state_89334;
var statearr_89362_89415 = state_89334__$1;
(statearr_89362_89415[(2)] = false);

(statearr_89362_89415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (28))){
var inst_89304 = (state_89334[(2)]);
var inst_89305 = calc_state.call(null);
var inst_89261 = inst_89305;
var state_89334__$1 = (function (){var statearr_89363 = state_89334;
(statearr_89363[(7)] = inst_89261);

(statearr_89363[(15)] = inst_89304);

return statearr_89363;
})();
var statearr_89364_89416 = state_89334__$1;
(statearr_89364_89416[(2)] = null);

(statearr_89364_89416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (25))){
var inst_89330 = (state_89334[(2)]);
var state_89334__$1 = state_89334;
var statearr_89365_89417 = state_89334__$1;
(statearr_89365_89417[(2)] = inst_89330);

(statearr_89365_89417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (34))){
var inst_89328 = (state_89334[(2)]);
var state_89334__$1 = state_89334;
var statearr_89366_89418 = state_89334__$1;
(statearr_89366_89418[(2)] = inst_89328);

(statearr_89366_89418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (17))){
var state_89334__$1 = state_89334;
var statearr_89367_89419 = state_89334__$1;
(statearr_89367_89419[(2)] = false);

(statearr_89367_89419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (3))){
var state_89334__$1 = state_89334;
var statearr_89368_89420 = state_89334__$1;
(statearr_89368_89420[(2)] = false);

(statearr_89368_89420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (12))){
var inst_89332 = (state_89334[(2)]);
var state_89334__$1 = state_89334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89334__$1,inst_89332);
} else {
if((state_val_89335 === (2))){
var inst_89236 = (state_89334[(8)]);
var inst_89241 = inst_89236.cljs$lang$protocol_mask$partition0$;
var inst_89242 = (inst_89241 & (64));
var inst_89243 = inst_89236.cljs$core$ISeq$;
var inst_89244 = (cljs.core.PROTOCOL_SENTINEL === inst_89243);
var inst_89245 = (inst_89242) || (inst_89244);
var state_89334__$1 = state_89334;
if(cljs.core.truth_(inst_89245)){
var statearr_89369_89421 = state_89334__$1;
(statearr_89369_89421[(1)] = (5));

} else {
var statearr_89370_89422 = state_89334__$1;
(statearr_89370_89422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (23))){
var inst_89293 = (state_89334[(14)]);
var inst_89299 = (inst_89293 == null);
var state_89334__$1 = state_89334;
if(cljs.core.truth_(inst_89299)){
var statearr_89371_89423 = state_89334__$1;
(statearr_89371_89423[(1)] = (26));

} else {
var statearr_89372_89424 = state_89334__$1;
(statearr_89372_89424[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (35))){
var inst_89319 = (state_89334[(2)]);
var state_89334__$1 = state_89334;
if(cljs.core.truth_(inst_89319)){
var statearr_89373_89425 = state_89334__$1;
(statearr_89373_89425[(1)] = (36));

} else {
var statearr_89374_89426 = state_89334__$1;
(statearr_89374_89426[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (19))){
var inst_89261 = (state_89334[(7)]);
var inst_89281 = cljs.core.apply.call(null,cljs.core.hash_map,inst_89261);
var state_89334__$1 = state_89334;
var statearr_89375_89427 = state_89334__$1;
(statearr_89375_89427[(2)] = inst_89281);

(statearr_89375_89427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (11))){
var inst_89261 = (state_89334[(7)]);
var inst_89265 = (inst_89261 == null);
var inst_89266 = cljs.core.not.call(null,inst_89265);
var state_89334__$1 = state_89334;
if(inst_89266){
var statearr_89376_89428 = state_89334__$1;
(statearr_89376_89428[(1)] = (13));

} else {
var statearr_89377_89429 = state_89334__$1;
(statearr_89377_89429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (9))){
var inst_89236 = (state_89334[(8)]);
var state_89334__$1 = state_89334;
var statearr_89378_89430 = state_89334__$1;
(statearr_89378_89430[(2)] = inst_89236);

(statearr_89378_89430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (5))){
var state_89334__$1 = state_89334;
var statearr_89379_89431 = state_89334__$1;
(statearr_89379_89431[(2)] = true);

(statearr_89379_89431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (14))){
var state_89334__$1 = state_89334;
var statearr_89380_89432 = state_89334__$1;
(statearr_89380_89432[(2)] = false);

(statearr_89380_89432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (26))){
var inst_89294 = (state_89334[(11)]);
var inst_89301 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_89294);
var state_89334__$1 = state_89334;
var statearr_89381_89433 = state_89334__$1;
(statearr_89381_89433[(2)] = inst_89301);

(statearr_89381_89433[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (16))){
var state_89334__$1 = state_89334;
var statearr_89382_89434 = state_89334__$1;
(statearr_89382_89434[(2)] = true);

(statearr_89382_89434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (38))){
var inst_89324 = (state_89334[(2)]);
var state_89334__$1 = state_89334;
var statearr_89383_89435 = state_89334__$1;
(statearr_89383_89435[(2)] = inst_89324);

(statearr_89383_89435[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (30))){
var inst_89285 = (state_89334[(9)]);
var inst_89286 = (state_89334[(13)]);
var inst_89294 = (state_89334[(11)]);
var inst_89311 = cljs.core.empty_QMARK_.call(null,inst_89285);
var inst_89312 = inst_89286.call(null,inst_89294);
var inst_89313 = cljs.core.not.call(null,inst_89312);
var inst_89314 = (inst_89311) && (inst_89313);
var state_89334__$1 = state_89334;
var statearr_89384_89436 = state_89334__$1;
(statearr_89384_89436[(2)] = inst_89314);

(statearr_89384_89436[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (10))){
var inst_89236 = (state_89334[(8)]);
var inst_89257 = (state_89334[(2)]);
var inst_89258 = cljs.core.get.call(null,inst_89257,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_89259 = cljs.core.get.call(null,inst_89257,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_89260 = cljs.core.get.call(null,inst_89257,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_89261 = inst_89236;
var state_89334__$1 = (function (){var statearr_89385 = state_89334;
(statearr_89385[(16)] = inst_89259);

(statearr_89385[(7)] = inst_89261);

(statearr_89385[(17)] = inst_89260);

(statearr_89385[(18)] = inst_89258);

return statearr_89385;
})();
var statearr_89386_89437 = state_89334__$1;
(statearr_89386_89437[(2)] = null);

(statearr_89386_89437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (18))){
var inst_89276 = (state_89334[(2)]);
var state_89334__$1 = state_89334;
var statearr_89387_89438 = state_89334__$1;
(statearr_89387_89438[(2)] = inst_89276);

(statearr_89387_89438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (37))){
var state_89334__$1 = state_89334;
var statearr_89388_89439 = state_89334__$1;
(statearr_89388_89439[(2)] = null);

(statearr_89388_89439[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89335 === (8))){
var inst_89236 = (state_89334[(8)]);
var inst_89254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_89236);
var state_89334__$1 = state_89334;
var statearr_89389_89440 = state_89334__$1;
(statearr_89389_89440[(2)] = inst_89254);

(statearr_89389_89440[(1)] = (10));


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
});})(c__32958__auto___89394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32868__auto__,c__32958__auto___89394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32869__auto__ = null;
var cljs$core$async$mix_$_state_machine__32869__auto____0 = (function (){
var statearr_89390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89390[(0)] = cljs$core$async$mix_$_state_machine__32869__auto__);

(statearr_89390[(1)] = (1));

return statearr_89390;
});
var cljs$core$async$mix_$_state_machine__32869__auto____1 = (function (state_89334){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_89334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e89391){if((e89391 instanceof Object)){
var ex__32872__auto__ = e89391;
var statearr_89392_89441 = state_89334;
(statearr_89392_89441[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89442 = state_89334;
state_89334 = G__89442;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32869__auto__ = function(state_89334){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32869__auto____1.call(this,state_89334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32869__auto____0;
cljs$core$async$mix_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32869__auto____1;
return cljs$core$async$mix_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___89394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32960__auto__ = (function (){var statearr_89393 = f__32959__auto__.call(null);
(statearr_89393[(6)] = c__32958__auto___89394);

return statearr_89393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___89394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__29288__auto__ = (((p == null))?null:p);
var m__29289__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29289__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__29288__auto__ = (((p == null))?null:p);
var m__29289__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,p,v,ch);
} else {
var m__29289__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__89444 = arguments.length;
switch (G__89444) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29288__auto__ = (((p == null))?null:p);
var m__29289__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,p);
} else {
var m__29289__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,p);
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
var x__29288__auto__ = (((p == null))?null:p);
var m__29289__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,p,v);
} else {
var m__29289__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,p,v);
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
var G__89448 = arguments.length;
switch (G__89448) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28569__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28569__auto__)){
return or__28569__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28569__auto__,mults){
return (function (p1__89446_SHARP_){
if(cljs.core.truth_(p1__89446_SHARP_.call(null,topic))){
return p1__89446_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__89446_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28569__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async89449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async89449 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta89450){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta89450 = meta89450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async89449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_89451,meta89450__$1){
var self__ = this;
var _89451__$1 = this;
return (new cljs.core.async.t_cljs$core$async89449(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta89450__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_89451){
var self__ = this;
var _89451__$1 = this;
return self__.meta89450;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89449.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89449.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89449.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89449.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89449.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta89450","meta89450",-1243802032,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async89449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async89449";

cljs.core.async.t_cljs$core$async89449.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async89449");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async89449 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async89449(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta89450){
return (new cljs.core.async.t_cljs$core$async89449(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta89450));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async89449(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32958__auto___89569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___89569,mults,ensure_mult,p){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___89569,mults,ensure_mult,p){
return (function (state_89523){
var state_val_89524 = (state_89523[(1)]);
if((state_val_89524 === (7))){
var inst_89519 = (state_89523[(2)]);
var state_89523__$1 = state_89523;
var statearr_89525_89570 = state_89523__$1;
(statearr_89525_89570[(2)] = inst_89519);

(statearr_89525_89570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (20))){
var state_89523__$1 = state_89523;
var statearr_89526_89571 = state_89523__$1;
(statearr_89526_89571[(2)] = null);

(statearr_89526_89571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (1))){
var state_89523__$1 = state_89523;
var statearr_89527_89572 = state_89523__$1;
(statearr_89527_89572[(2)] = null);

(statearr_89527_89572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (24))){
var inst_89502 = (state_89523[(7)]);
var inst_89511 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_89502);
var state_89523__$1 = state_89523;
var statearr_89528_89573 = state_89523__$1;
(statearr_89528_89573[(2)] = inst_89511);

(statearr_89528_89573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (4))){
var inst_89454 = (state_89523[(8)]);
var inst_89454__$1 = (state_89523[(2)]);
var inst_89455 = (inst_89454__$1 == null);
var state_89523__$1 = (function (){var statearr_89529 = state_89523;
(statearr_89529[(8)] = inst_89454__$1);

return statearr_89529;
})();
if(cljs.core.truth_(inst_89455)){
var statearr_89530_89574 = state_89523__$1;
(statearr_89530_89574[(1)] = (5));

} else {
var statearr_89531_89575 = state_89523__$1;
(statearr_89531_89575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (15))){
var inst_89496 = (state_89523[(2)]);
var state_89523__$1 = state_89523;
var statearr_89532_89576 = state_89523__$1;
(statearr_89532_89576[(2)] = inst_89496);

(statearr_89532_89576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (21))){
var inst_89516 = (state_89523[(2)]);
var state_89523__$1 = (function (){var statearr_89533 = state_89523;
(statearr_89533[(9)] = inst_89516);

return statearr_89533;
})();
var statearr_89534_89577 = state_89523__$1;
(statearr_89534_89577[(2)] = null);

(statearr_89534_89577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (13))){
var inst_89478 = (state_89523[(10)]);
var inst_89480 = cljs.core.chunked_seq_QMARK_.call(null,inst_89478);
var state_89523__$1 = state_89523;
if(inst_89480){
var statearr_89535_89578 = state_89523__$1;
(statearr_89535_89578[(1)] = (16));

} else {
var statearr_89536_89579 = state_89523__$1;
(statearr_89536_89579[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (22))){
var inst_89508 = (state_89523[(2)]);
var state_89523__$1 = state_89523;
if(cljs.core.truth_(inst_89508)){
var statearr_89537_89580 = state_89523__$1;
(statearr_89537_89580[(1)] = (23));

} else {
var statearr_89538_89581 = state_89523__$1;
(statearr_89538_89581[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (6))){
var inst_89504 = (state_89523[(11)]);
var inst_89502 = (state_89523[(7)]);
var inst_89454 = (state_89523[(8)]);
var inst_89502__$1 = topic_fn.call(null,inst_89454);
var inst_89503 = cljs.core.deref.call(null,mults);
var inst_89504__$1 = cljs.core.get.call(null,inst_89503,inst_89502__$1);
var state_89523__$1 = (function (){var statearr_89539 = state_89523;
(statearr_89539[(11)] = inst_89504__$1);

(statearr_89539[(7)] = inst_89502__$1);

return statearr_89539;
})();
if(cljs.core.truth_(inst_89504__$1)){
var statearr_89540_89582 = state_89523__$1;
(statearr_89540_89582[(1)] = (19));

} else {
var statearr_89541_89583 = state_89523__$1;
(statearr_89541_89583[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (25))){
var inst_89513 = (state_89523[(2)]);
var state_89523__$1 = state_89523;
var statearr_89542_89584 = state_89523__$1;
(statearr_89542_89584[(2)] = inst_89513);

(statearr_89542_89584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (17))){
var inst_89478 = (state_89523[(10)]);
var inst_89487 = cljs.core.first.call(null,inst_89478);
var inst_89488 = cljs.core.async.muxch_STAR_.call(null,inst_89487);
var inst_89489 = cljs.core.async.close_BANG_.call(null,inst_89488);
var inst_89490 = cljs.core.next.call(null,inst_89478);
var inst_89464 = inst_89490;
var inst_89465 = null;
var inst_89466 = (0);
var inst_89467 = (0);
var state_89523__$1 = (function (){var statearr_89543 = state_89523;
(statearr_89543[(12)] = inst_89489);

(statearr_89543[(13)] = inst_89466);

(statearr_89543[(14)] = inst_89464);

(statearr_89543[(15)] = inst_89467);

(statearr_89543[(16)] = inst_89465);

return statearr_89543;
})();
var statearr_89544_89585 = state_89523__$1;
(statearr_89544_89585[(2)] = null);

(statearr_89544_89585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (3))){
var inst_89521 = (state_89523[(2)]);
var state_89523__$1 = state_89523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89523__$1,inst_89521);
} else {
if((state_val_89524 === (12))){
var inst_89498 = (state_89523[(2)]);
var state_89523__$1 = state_89523;
var statearr_89545_89586 = state_89523__$1;
(statearr_89545_89586[(2)] = inst_89498);

(statearr_89545_89586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (2))){
var state_89523__$1 = state_89523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89523__$1,(4),ch);
} else {
if((state_val_89524 === (23))){
var state_89523__$1 = state_89523;
var statearr_89546_89587 = state_89523__$1;
(statearr_89546_89587[(2)] = null);

(statearr_89546_89587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (19))){
var inst_89504 = (state_89523[(11)]);
var inst_89454 = (state_89523[(8)]);
var inst_89506 = cljs.core.async.muxch_STAR_.call(null,inst_89504);
var state_89523__$1 = state_89523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89523__$1,(22),inst_89506,inst_89454);
} else {
if((state_val_89524 === (11))){
var inst_89478 = (state_89523[(10)]);
var inst_89464 = (state_89523[(14)]);
var inst_89478__$1 = cljs.core.seq.call(null,inst_89464);
var state_89523__$1 = (function (){var statearr_89547 = state_89523;
(statearr_89547[(10)] = inst_89478__$1);

return statearr_89547;
})();
if(inst_89478__$1){
var statearr_89548_89588 = state_89523__$1;
(statearr_89548_89588[(1)] = (13));

} else {
var statearr_89549_89589 = state_89523__$1;
(statearr_89549_89589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (9))){
var inst_89500 = (state_89523[(2)]);
var state_89523__$1 = state_89523;
var statearr_89550_89590 = state_89523__$1;
(statearr_89550_89590[(2)] = inst_89500);

(statearr_89550_89590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (5))){
var inst_89461 = cljs.core.deref.call(null,mults);
var inst_89462 = cljs.core.vals.call(null,inst_89461);
var inst_89463 = cljs.core.seq.call(null,inst_89462);
var inst_89464 = inst_89463;
var inst_89465 = null;
var inst_89466 = (0);
var inst_89467 = (0);
var state_89523__$1 = (function (){var statearr_89551 = state_89523;
(statearr_89551[(13)] = inst_89466);

(statearr_89551[(14)] = inst_89464);

(statearr_89551[(15)] = inst_89467);

(statearr_89551[(16)] = inst_89465);

return statearr_89551;
})();
var statearr_89552_89591 = state_89523__$1;
(statearr_89552_89591[(2)] = null);

(statearr_89552_89591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (14))){
var state_89523__$1 = state_89523;
var statearr_89556_89592 = state_89523__$1;
(statearr_89556_89592[(2)] = null);

(statearr_89556_89592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (16))){
var inst_89478 = (state_89523[(10)]);
var inst_89482 = cljs.core.chunk_first.call(null,inst_89478);
var inst_89483 = cljs.core.chunk_rest.call(null,inst_89478);
var inst_89484 = cljs.core.count.call(null,inst_89482);
var inst_89464 = inst_89483;
var inst_89465 = inst_89482;
var inst_89466 = inst_89484;
var inst_89467 = (0);
var state_89523__$1 = (function (){var statearr_89557 = state_89523;
(statearr_89557[(13)] = inst_89466);

(statearr_89557[(14)] = inst_89464);

(statearr_89557[(15)] = inst_89467);

(statearr_89557[(16)] = inst_89465);

return statearr_89557;
})();
var statearr_89558_89593 = state_89523__$1;
(statearr_89558_89593[(2)] = null);

(statearr_89558_89593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (10))){
var inst_89466 = (state_89523[(13)]);
var inst_89464 = (state_89523[(14)]);
var inst_89467 = (state_89523[(15)]);
var inst_89465 = (state_89523[(16)]);
var inst_89472 = cljs.core._nth.call(null,inst_89465,inst_89467);
var inst_89473 = cljs.core.async.muxch_STAR_.call(null,inst_89472);
var inst_89474 = cljs.core.async.close_BANG_.call(null,inst_89473);
var inst_89475 = (inst_89467 + (1));
var tmp89553 = inst_89466;
var tmp89554 = inst_89464;
var tmp89555 = inst_89465;
var inst_89464__$1 = tmp89554;
var inst_89465__$1 = tmp89555;
var inst_89466__$1 = tmp89553;
var inst_89467__$1 = inst_89475;
var state_89523__$1 = (function (){var statearr_89559 = state_89523;
(statearr_89559[(13)] = inst_89466__$1);

(statearr_89559[(14)] = inst_89464__$1);

(statearr_89559[(15)] = inst_89467__$1);

(statearr_89559[(16)] = inst_89465__$1);

(statearr_89559[(17)] = inst_89474);

return statearr_89559;
})();
var statearr_89560_89594 = state_89523__$1;
(statearr_89560_89594[(2)] = null);

(statearr_89560_89594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (18))){
var inst_89493 = (state_89523[(2)]);
var state_89523__$1 = state_89523;
var statearr_89561_89595 = state_89523__$1;
(statearr_89561_89595[(2)] = inst_89493);

(statearr_89561_89595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89524 === (8))){
var inst_89466 = (state_89523[(13)]);
var inst_89467 = (state_89523[(15)]);
var inst_89469 = (inst_89467 < inst_89466);
var inst_89470 = inst_89469;
var state_89523__$1 = state_89523;
if(cljs.core.truth_(inst_89470)){
var statearr_89562_89596 = state_89523__$1;
(statearr_89562_89596[(1)] = (10));

} else {
var statearr_89563_89597 = state_89523__$1;
(statearr_89563_89597[(1)] = (11));

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
});})(c__32958__auto___89569,mults,ensure_mult,p))
;
return ((function (switch__32868__auto__,c__32958__auto___89569,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_89564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89564[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_89564[(1)] = (1));

return statearr_89564;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_89523){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_89523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e89565){if((e89565 instanceof Object)){
var ex__32872__auto__ = e89565;
var statearr_89566_89598 = state_89523;
(statearr_89566_89598[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89599 = state_89523;
state_89523 = G__89599;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_89523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_89523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___89569,mults,ensure_mult,p))
})();
var state__32960__auto__ = (function (){var statearr_89567 = f__32959__auto__.call(null);
(statearr_89567[(6)] = c__32958__auto___89569);

return statearr_89567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___89569,mults,ensure_mult,p))
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
var G__89601 = arguments.length;
switch (G__89601) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__89604 = arguments.length;
switch (G__89604) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__89607 = arguments.length;
switch (G__89607) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__32958__auto___89674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___89674,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___89674,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_89646){
var state_val_89647 = (state_89646[(1)]);
if((state_val_89647 === (7))){
var state_89646__$1 = state_89646;
var statearr_89648_89675 = state_89646__$1;
(statearr_89648_89675[(2)] = null);

(statearr_89648_89675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (1))){
var state_89646__$1 = state_89646;
var statearr_89649_89676 = state_89646__$1;
(statearr_89649_89676[(2)] = null);

(statearr_89649_89676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (4))){
var inst_89610 = (state_89646[(7)]);
var inst_89612 = (inst_89610 < cnt);
var state_89646__$1 = state_89646;
if(cljs.core.truth_(inst_89612)){
var statearr_89650_89677 = state_89646__$1;
(statearr_89650_89677[(1)] = (6));

} else {
var statearr_89651_89678 = state_89646__$1;
(statearr_89651_89678[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (15))){
var inst_89642 = (state_89646[(2)]);
var state_89646__$1 = state_89646;
var statearr_89652_89679 = state_89646__$1;
(statearr_89652_89679[(2)] = inst_89642);

(statearr_89652_89679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (13))){
var inst_89635 = cljs.core.async.close_BANG_.call(null,out);
var state_89646__$1 = state_89646;
var statearr_89653_89680 = state_89646__$1;
(statearr_89653_89680[(2)] = inst_89635);

(statearr_89653_89680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (6))){
var state_89646__$1 = state_89646;
var statearr_89654_89681 = state_89646__$1;
(statearr_89654_89681[(2)] = null);

(statearr_89654_89681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (3))){
var inst_89644 = (state_89646[(2)]);
var state_89646__$1 = state_89646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89646__$1,inst_89644);
} else {
if((state_val_89647 === (12))){
var inst_89632 = (state_89646[(8)]);
var inst_89632__$1 = (state_89646[(2)]);
var inst_89633 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_89632__$1);
var state_89646__$1 = (function (){var statearr_89655 = state_89646;
(statearr_89655[(8)] = inst_89632__$1);

return statearr_89655;
})();
if(cljs.core.truth_(inst_89633)){
var statearr_89656_89682 = state_89646__$1;
(statearr_89656_89682[(1)] = (13));

} else {
var statearr_89657_89683 = state_89646__$1;
(statearr_89657_89683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (2))){
var inst_89609 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_89610 = (0);
var state_89646__$1 = (function (){var statearr_89658 = state_89646;
(statearr_89658[(7)] = inst_89610);

(statearr_89658[(9)] = inst_89609);

return statearr_89658;
})();
var statearr_89659_89684 = state_89646__$1;
(statearr_89659_89684[(2)] = null);

(statearr_89659_89684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (11))){
var inst_89610 = (state_89646[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89646,(10),Object,null,(9));
var inst_89619 = chs__$1.call(null,inst_89610);
var inst_89620 = done.call(null,inst_89610);
var inst_89621 = cljs.core.async.take_BANG_.call(null,inst_89619,inst_89620);
var state_89646__$1 = state_89646;
var statearr_89660_89685 = state_89646__$1;
(statearr_89660_89685[(2)] = inst_89621);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89646__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (9))){
var inst_89610 = (state_89646[(7)]);
var inst_89623 = (state_89646[(2)]);
var inst_89624 = (inst_89610 + (1));
var inst_89610__$1 = inst_89624;
var state_89646__$1 = (function (){var statearr_89661 = state_89646;
(statearr_89661[(10)] = inst_89623);

(statearr_89661[(7)] = inst_89610__$1);

return statearr_89661;
})();
var statearr_89662_89686 = state_89646__$1;
(statearr_89662_89686[(2)] = null);

(statearr_89662_89686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (5))){
var inst_89630 = (state_89646[(2)]);
var state_89646__$1 = (function (){var statearr_89663 = state_89646;
(statearr_89663[(11)] = inst_89630);

return statearr_89663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89646__$1,(12),dchan);
} else {
if((state_val_89647 === (14))){
var inst_89632 = (state_89646[(8)]);
var inst_89637 = cljs.core.apply.call(null,f,inst_89632);
var state_89646__$1 = state_89646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89646__$1,(16),out,inst_89637);
} else {
if((state_val_89647 === (16))){
var inst_89639 = (state_89646[(2)]);
var state_89646__$1 = (function (){var statearr_89664 = state_89646;
(statearr_89664[(12)] = inst_89639);

return statearr_89664;
})();
var statearr_89665_89687 = state_89646__$1;
(statearr_89665_89687[(2)] = null);

(statearr_89665_89687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (10))){
var inst_89614 = (state_89646[(2)]);
var inst_89615 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_89646__$1 = (function (){var statearr_89666 = state_89646;
(statearr_89666[(13)] = inst_89614);

return statearr_89666;
})();
var statearr_89667_89688 = state_89646__$1;
(statearr_89667_89688[(2)] = inst_89615);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89646__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (8))){
var inst_89628 = (state_89646[(2)]);
var state_89646__$1 = state_89646;
var statearr_89668_89689 = state_89646__$1;
(statearr_89668_89689[(2)] = inst_89628);

(statearr_89668_89689[(1)] = (5));


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
});})(c__32958__auto___89674,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32868__auto__,c__32958__auto___89674,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_89669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89669[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_89669[(1)] = (1));

return statearr_89669;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_89646){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_89646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e89670){if((e89670 instanceof Object)){
var ex__32872__auto__ = e89670;
var statearr_89671_89690 = state_89646;
(statearr_89671_89690[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89691 = state_89646;
state_89646 = G__89691;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_89646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_89646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___89674,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32960__auto__ = (function (){var statearr_89672 = f__32959__auto__.call(null);
(statearr_89672[(6)] = c__32958__auto___89674);

return statearr_89672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___89674,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__89694 = arguments.length;
switch (G__89694) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32958__auto___89748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___89748,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___89748,out){
return (function (state_89726){
var state_val_89727 = (state_89726[(1)]);
if((state_val_89727 === (7))){
var inst_89705 = (state_89726[(7)]);
var inst_89706 = (state_89726[(8)]);
var inst_89705__$1 = (state_89726[(2)]);
var inst_89706__$1 = cljs.core.nth.call(null,inst_89705__$1,(0),null);
var inst_89707 = cljs.core.nth.call(null,inst_89705__$1,(1),null);
var inst_89708 = (inst_89706__$1 == null);
var state_89726__$1 = (function (){var statearr_89728 = state_89726;
(statearr_89728[(7)] = inst_89705__$1);

(statearr_89728[(9)] = inst_89707);

(statearr_89728[(8)] = inst_89706__$1);

return statearr_89728;
})();
if(cljs.core.truth_(inst_89708)){
var statearr_89729_89749 = state_89726__$1;
(statearr_89729_89749[(1)] = (8));

} else {
var statearr_89730_89750 = state_89726__$1;
(statearr_89730_89750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89727 === (1))){
var inst_89695 = cljs.core.vec.call(null,chs);
var inst_89696 = inst_89695;
var state_89726__$1 = (function (){var statearr_89731 = state_89726;
(statearr_89731[(10)] = inst_89696);

return statearr_89731;
})();
var statearr_89732_89751 = state_89726__$1;
(statearr_89732_89751[(2)] = null);

(statearr_89732_89751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89727 === (4))){
var inst_89696 = (state_89726[(10)]);
var state_89726__$1 = state_89726;
return cljs.core.async.ioc_alts_BANG_.call(null,state_89726__$1,(7),inst_89696);
} else {
if((state_val_89727 === (6))){
var inst_89722 = (state_89726[(2)]);
var state_89726__$1 = state_89726;
var statearr_89733_89752 = state_89726__$1;
(statearr_89733_89752[(2)] = inst_89722);

(statearr_89733_89752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89727 === (3))){
var inst_89724 = (state_89726[(2)]);
var state_89726__$1 = state_89726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89726__$1,inst_89724);
} else {
if((state_val_89727 === (2))){
var inst_89696 = (state_89726[(10)]);
var inst_89698 = cljs.core.count.call(null,inst_89696);
var inst_89699 = (inst_89698 > (0));
var state_89726__$1 = state_89726;
if(cljs.core.truth_(inst_89699)){
var statearr_89735_89753 = state_89726__$1;
(statearr_89735_89753[(1)] = (4));

} else {
var statearr_89736_89754 = state_89726__$1;
(statearr_89736_89754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89727 === (11))){
var inst_89696 = (state_89726[(10)]);
var inst_89715 = (state_89726[(2)]);
var tmp89734 = inst_89696;
var inst_89696__$1 = tmp89734;
var state_89726__$1 = (function (){var statearr_89737 = state_89726;
(statearr_89737[(10)] = inst_89696__$1);

(statearr_89737[(11)] = inst_89715);

return statearr_89737;
})();
var statearr_89738_89755 = state_89726__$1;
(statearr_89738_89755[(2)] = null);

(statearr_89738_89755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89727 === (9))){
var inst_89706 = (state_89726[(8)]);
var state_89726__$1 = state_89726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89726__$1,(11),out,inst_89706);
} else {
if((state_val_89727 === (5))){
var inst_89720 = cljs.core.async.close_BANG_.call(null,out);
var state_89726__$1 = state_89726;
var statearr_89739_89756 = state_89726__$1;
(statearr_89739_89756[(2)] = inst_89720);

(statearr_89739_89756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89727 === (10))){
var inst_89718 = (state_89726[(2)]);
var state_89726__$1 = state_89726;
var statearr_89740_89757 = state_89726__$1;
(statearr_89740_89757[(2)] = inst_89718);

(statearr_89740_89757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89727 === (8))){
var inst_89696 = (state_89726[(10)]);
var inst_89705 = (state_89726[(7)]);
var inst_89707 = (state_89726[(9)]);
var inst_89706 = (state_89726[(8)]);
var inst_89710 = (function (){var cs = inst_89696;
var vec__89701 = inst_89705;
var v = inst_89706;
var c = inst_89707;
return ((function (cs,vec__89701,v,c,inst_89696,inst_89705,inst_89707,inst_89706,state_val_89727,c__32958__auto___89748,out){
return (function (p1__89692_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__89692_SHARP_);
});
;})(cs,vec__89701,v,c,inst_89696,inst_89705,inst_89707,inst_89706,state_val_89727,c__32958__auto___89748,out))
})();
var inst_89711 = cljs.core.filterv.call(null,inst_89710,inst_89696);
var inst_89696__$1 = inst_89711;
var state_89726__$1 = (function (){var statearr_89741 = state_89726;
(statearr_89741[(10)] = inst_89696__$1);

return statearr_89741;
})();
var statearr_89742_89758 = state_89726__$1;
(statearr_89742_89758[(2)] = null);

(statearr_89742_89758[(1)] = (2));


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
});})(c__32958__auto___89748,out))
;
return ((function (switch__32868__auto__,c__32958__auto___89748,out){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_89743 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89743[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_89743[(1)] = (1));

return statearr_89743;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_89726){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_89726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e89744){if((e89744 instanceof Object)){
var ex__32872__auto__ = e89744;
var statearr_89745_89759 = state_89726;
(statearr_89745_89759[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89760 = state_89726;
state_89726 = G__89760;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_89726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_89726);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___89748,out))
})();
var state__32960__auto__ = (function (){var statearr_89746 = f__32959__auto__.call(null);
(statearr_89746[(6)] = c__32958__auto___89748);

return statearr_89746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___89748,out))
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
var G__89762 = arguments.length;
switch (G__89762) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32958__auto___89807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___89807,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___89807,out){
return (function (state_89786){
var state_val_89787 = (state_89786[(1)]);
if((state_val_89787 === (7))){
var inst_89768 = (state_89786[(7)]);
var inst_89768__$1 = (state_89786[(2)]);
var inst_89769 = (inst_89768__$1 == null);
var inst_89770 = cljs.core.not.call(null,inst_89769);
var state_89786__$1 = (function (){var statearr_89788 = state_89786;
(statearr_89788[(7)] = inst_89768__$1);

return statearr_89788;
})();
if(inst_89770){
var statearr_89789_89808 = state_89786__$1;
(statearr_89789_89808[(1)] = (8));

} else {
var statearr_89790_89809 = state_89786__$1;
(statearr_89790_89809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89787 === (1))){
var inst_89763 = (0);
var state_89786__$1 = (function (){var statearr_89791 = state_89786;
(statearr_89791[(8)] = inst_89763);

return statearr_89791;
})();
var statearr_89792_89810 = state_89786__$1;
(statearr_89792_89810[(2)] = null);

(statearr_89792_89810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89787 === (4))){
var state_89786__$1 = state_89786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89786__$1,(7),ch);
} else {
if((state_val_89787 === (6))){
var inst_89781 = (state_89786[(2)]);
var state_89786__$1 = state_89786;
var statearr_89793_89811 = state_89786__$1;
(statearr_89793_89811[(2)] = inst_89781);

(statearr_89793_89811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89787 === (3))){
var inst_89783 = (state_89786[(2)]);
var inst_89784 = cljs.core.async.close_BANG_.call(null,out);
var state_89786__$1 = (function (){var statearr_89794 = state_89786;
(statearr_89794[(9)] = inst_89783);

return statearr_89794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89786__$1,inst_89784);
} else {
if((state_val_89787 === (2))){
var inst_89763 = (state_89786[(8)]);
var inst_89765 = (inst_89763 < n);
var state_89786__$1 = state_89786;
if(cljs.core.truth_(inst_89765)){
var statearr_89795_89812 = state_89786__$1;
(statearr_89795_89812[(1)] = (4));

} else {
var statearr_89796_89813 = state_89786__$1;
(statearr_89796_89813[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89787 === (11))){
var inst_89763 = (state_89786[(8)]);
var inst_89773 = (state_89786[(2)]);
var inst_89774 = (inst_89763 + (1));
var inst_89763__$1 = inst_89774;
var state_89786__$1 = (function (){var statearr_89797 = state_89786;
(statearr_89797[(10)] = inst_89773);

(statearr_89797[(8)] = inst_89763__$1);

return statearr_89797;
})();
var statearr_89798_89814 = state_89786__$1;
(statearr_89798_89814[(2)] = null);

(statearr_89798_89814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89787 === (9))){
var state_89786__$1 = state_89786;
var statearr_89799_89815 = state_89786__$1;
(statearr_89799_89815[(2)] = null);

(statearr_89799_89815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89787 === (5))){
var state_89786__$1 = state_89786;
var statearr_89800_89816 = state_89786__$1;
(statearr_89800_89816[(2)] = null);

(statearr_89800_89816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89787 === (10))){
var inst_89778 = (state_89786[(2)]);
var state_89786__$1 = state_89786;
var statearr_89801_89817 = state_89786__$1;
(statearr_89801_89817[(2)] = inst_89778);

(statearr_89801_89817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89787 === (8))){
var inst_89768 = (state_89786[(7)]);
var state_89786__$1 = state_89786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89786__$1,(11),out,inst_89768);
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
});})(c__32958__auto___89807,out))
;
return ((function (switch__32868__auto__,c__32958__auto___89807,out){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_89802 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_89802[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_89802[(1)] = (1));

return statearr_89802;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_89786){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_89786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e89803){if((e89803 instanceof Object)){
var ex__32872__auto__ = e89803;
var statearr_89804_89818 = state_89786;
(statearr_89804_89818[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89819 = state_89786;
state_89786 = G__89819;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_89786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_89786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___89807,out))
})();
var state__32960__auto__ = (function (){var statearr_89805 = f__32959__auto__.call(null);
(statearr_89805[(6)] = c__32958__auto___89807);

return statearr_89805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___89807,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async89821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async89821 = (function (f,ch,meta89822){
this.f = f;
this.ch = ch;
this.meta89822 = meta89822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async89821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_89823,meta89822__$1){
var self__ = this;
var _89823__$1 = this;
return (new cljs.core.async.t_cljs$core$async89821(self__.f,self__.ch,meta89822__$1));
});

cljs.core.async.t_cljs$core$async89821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_89823){
var self__ = this;
var _89823__$1 = this;
return self__.meta89822;
});

cljs.core.async.t_cljs$core$async89821.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89821.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async89821.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async89821.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89821.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async89824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async89824 = (function (f,ch,meta89822,_,fn1,meta89825){
this.f = f;
this.ch = ch;
this.meta89822 = meta89822;
this._ = _;
this.fn1 = fn1;
this.meta89825 = meta89825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async89824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_89826,meta89825__$1){
var self__ = this;
var _89826__$1 = this;
return (new cljs.core.async.t_cljs$core$async89824(self__.f,self__.ch,self__.meta89822,self__._,self__.fn1,meta89825__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async89824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_89826){
var self__ = this;
var _89826__$1 = this;
return self__.meta89825;
});})(___$1))
;

cljs.core.async.t_cljs$core$async89824.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async89824.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async89824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__89820_SHARP_){
return f1.call(null,(((p1__89820_SHARP_ == null))?null:self__.f.call(null,p1__89820_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async89824.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta89822","meta89822",-2136129267,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async89821","cljs.core.async/t_cljs$core$async89821",761291360,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta89825","meta89825",1352779798,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async89824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async89824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async89824";

cljs.core.async.t_cljs$core$async89824.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async89824");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async89824 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async89824(f__$1,ch__$1,meta89822__$1,___$2,fn1__$1,meta89825){
return (new cljs.core.async.t_cljs$core$async89824(f__$1,ch__$1,meta89822__$1,___$2,fn1__$1,meta89825));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async89824(self__.f,self__.ch,self__.meta89822,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28557__auto__ = ret;
if(cljs.core.truth_(and__28557__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28557__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async89821.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89821.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async89821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta89822","meta89822",-2136129267,null)], null);
});

cljs.core.async.t_cljs$core$async89821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async89821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async89821";

cljs.core.async.t_cljs$core$async89821.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async89821");
});

cljs.core.async.__GT_t_cljs$core$async89821 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async89821(f__$1,ch__$1,meta89822){
return (new cljs.core.async.t_cljs$core$async89821(f__$1,ch__$1,meta89822));
});

}

return (new cljs.core.async.t_cljs$core$async89821(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async89827 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async89827 = (function (f,ch,meta89828){
this.f = f;
this.ch = ch;
this.meta89828 = meta89828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async89827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_89829,meta89828__$1){
var self__ = this;
var _89829__$1 = this;
return (new cljs.core.async.t_cljs$core$async89827(self__.f,self__.ch,meta89828__$1));
});

cljs.core.async.t_cljs$core$async89827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_89829){
var self__ = this;
var _89829__$1 = this;
return self__.meta89828;
});

cljs.core.async.t_cljs$core$async89827.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89827.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async89827.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89827.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async89827.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89827.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async89827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta89828","meta89828",-824047104,null)], null);
});

cljs.core.async.t_cljs$core$async89827.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async89827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async89827";

cljs.core.async.t_cljs$core$async89827.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async89827");
});

cljs.core.async.__GT_t_cljs$core$async89827 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async89827(f__$1,ch__$1,meta89828){
return (new cljs.core.async.t_cljs$core$async89827(f__$1,ch__$1,meta89828));
});

}

return (new cljs.core.async.t_cljs$core$async89827(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async89830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async89830 = (function (p,ch,meta89831){
this.p = p;
this.ch = ch;
this.meta89831 = meta89831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async89830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_89832,meta89831__$1){
var self__ = this;
var _89832__$1 = this;
return (new cljs.core.async.t_cljs$core$async89830(self__.p,self__.ch,meta89831__$1));
});

cljs.core.async.t_cljs$core$async89830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_89832){
var self__ = this;
var _89832__$1 = this;
return self__.meta89831;
});

cljs.core.async.t_cljs$core$async89830.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async89830.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async89830.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async89830.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async89830.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async89830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta89831","meta89831",-1701697097,null)], null);
});

cljs.core.async.t_cljs$core$async89830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async89830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async89830";

cljs.core.async.t_cljs$core$async89830.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async89830");
});

cljs.core.async.__GT_t_cljs$core$async89830 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async89830(p__$1,ch__$1,meta89831){
return (new cljs.core.async.t_cljs$core$async89830(p__$1,ch__$1,meta89831));
});

}

return (new cljs.core.async.t_cljs$core$async89830(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__89834 = arguments.length;
switch (G__89834) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32958__auto___89874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___89874,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___89874,out){
return (function (state_89855){
var state_val_89856 = (state_89855[(1)]);
if((state_val_89856 === (7))){
var inst_89851 = (state_89855[(2)]);
var state_89855__$1 = state_89855;
var statearr_89857_89875 = state_89855__$1;
(statearr_89857_89875[(2)] = inst_89851);

(statearr_89857_89875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89856 === (1))){
var state_89855__$1 = state_89855;
var statearr_89858_89876 = state_89855__$1;
(statearr_89858_89876[(2)] = null);

(statearr_89858_89876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89856 === (4))){
var inst_89837 = (state_89855[(7)]);
var inst_89837__$1 = (state_89855[(2)]);
var inst_89838 = (inst_89837__$1 == null);
var state_89855__$1 = (function (){var statearr_89859 = state_89855;
(statearr_89859[(7)] = inst_89837__$1);

return statearr_89859;
})();
if(cljs.core.truth_(inst_89838)){
var statearr_89860_89877 = state_89855__$1;
(statearr_89860_89877[(1)] = (5));

} else {
var statearr_89861_89878 = state_89855__$1;
(statearr_89861_89878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89856 === (6))){
var inst_89837 = (state_89855[(7)]);
var inst_89842 = p.call(null,inst_89837);
var state_89855__$1 = state_89855;
if(cljs.core.truth_(inst_89842)){
var statearr_89862_89879 = state_89855__$1;
(statearr_89862_89879[(1)] = (8));

} else {
var statearr_89863_89880 = state_89855__$1;
(statearr_89863_89880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89856 === (3))){
var inst_89853 = (state_89855[(2)]);
var state_89855__$1 = state_89855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89855__$1,inst_89853);
} else {
if((state_val_89856 === (2))){
var state_89855__$1 = state_89855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89855__$1,(4),ch);
} else {
if((state_val_89856 === (11))){
var inst_89845 = (state_89855[(2)]);
var state_89855__$1 = state_89855;
var statearr_89864_89881 = state_89855__$1;
(statearr_89864_89881[(2)] = inst_89845);

(statearr_89864_89881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89856 === (9))){
var state_89855__$1 = state_89855;
var statearr_89865_89882 = state_89855__$1;
(statearr_89865_89882[(2)] = null);

(statearr_89865_89882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89856 === (5))){
var inst_89840 = cljs.core.async.close_BANG_.call(null,out);
var state_89855__$1 = state_89855;
var statearr_89866_89883 = state_89855__$1;
(statearr_89866_89883[(2)] = inst_89840);

(statearr_89866_89883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89856 === (10))){
var inst_89848 = (state_89855[(2)]);
var state_89855__$1 = (function (){var statearr_89867 = state_89855;
(statearr_89867[(8)] = inst_89848);

return statearr_89867;
})();
var statearr_89868_89884 = state_89855__$1;
(statearr_89868_89884[(2)] = null);

(statearr_89868_89884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89856 === (8))){
var inst_89837 = (state_89855[(7)]);
var state_89855__$1 = state_89855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89855__$1,(11),out,inst_89837);
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
});})(c__32958__auto___89874,out))
;
return ((function (switch__32868__auto__,c__32958__auto___89874,out){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_89869 = [null,null,null,null,null,null,null,null,null];
(statearr_89869[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_89869[(1)] = (1));

return statearr_89869;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_89855){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_89855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e89870){if((e89870 instanceof Object)){
var ex__32872__auto__ = e89870;
var statearr_89871_89885 = state_89855;
(statearr_89871_89885[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89886 = state_89855;
state_89855 = G__89886;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_89855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_89855);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___89874,out))
})();
var state__32960__auto__ = (function (){var statearr_89872 = f__32959__auto__.call(null);
(statearr_89872[(6)] = c__32958__auto___89874);

return statearr_89872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___89874,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__89888 = arguments.length;
switch (G__89888) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__){
return (function (state_89951){
var state_val_89952 = (state_89951[(1)]);
if((state_val_89952 === (7))){
var inst_89947 = (state_89951[(2)]);
var state_89951__$1 = state_89951;
var statearr_89953_89991 = state_89951__$1;
(statearr_89953_89991[(2)] = inst_89947);

(statearr_89953_89991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (20))){
var inst_89917 = (state_89951[(7)]);
var inst_89928 = (state_89951[(2)]);
var inst_89929 = cljs.core.next.call(null,inst_89917);
var inst_89903 = inst_89929;
var inst_89904 = null;
var inst_89905 = (0);
var inst_89906 = (0);
var state_89951__$1 = (function (){var statearr_89954 = state_89951;
(statearr_89954[(8)] = inst_89928);

(statearr_89954[(9)] = inst_89903);

(statearr_89954[(10)] = inst_89906);

(statearr_89954[(11)] = inst_89905);

(statearr_89954[(12)] = inst_89904);

return statearr_89954;
})();
var statearr_89955_89992 = state_89951__$1;
(statearr_89955_89992[(2)] = null);

(statearr_89955_89992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (1))){
var state_89951__$1 = state_89951;
var statearr_89956_89993 = state_89951__$1;
(statearr_89956_89993[(2)] = null);

(statearr_89956_89993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (4))){
var inst_89892 = (state_89951[(13)]);
var inst_89892__$1 = (state_89951[(2)]);
var inst_89893 = (inst_89892__$1 == null);
var state_89951__$1 = (function (){var statearr_89957 = state_89951;
(statearr_89957[(13)] = inst_89892__$1);

return statearr_89957;
})();
if(cljs.core.truth_(inst_89893)){
var statearr_89958_89994 = state_89951__$1;
(statearr_89958_89994[(1)] = (5));

} else {
var statearr_89959_89995 = state_89951__$1;
(statearr_89959_89995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (15))){
var state_89951__$1 = state_89951;
var statearr_89963_89996 = state_89951__$1;
(statearr_89963_89996[(2)] = null);

(statearr_89963_89996[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (21))){
var state_89951__$1 = state_89951;
var statearr_89964_89997 = state_89951__$1;
(statearr_89964_89997[(2)] = null);

(statearr_89964_89997[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (13))){
var inst_89903 = (state_89951[(9)]);
var inst_89906 = (state_89951[(10)]);
var inst_89905 = (state_89951[(11)]);
var inst_89904 = (state_89951[(12)]);
var inst_89913 = (state_89951[(2)]);
var inst_89914 = (inst_89906 + (1));
var tmp89960 = inst_89903;
var tmp89961 = inst_89905;
var tmp89962 = inst_89904;
var inst_89903__$1 = tmp89960;
var inst_89904__$1 = tmp89962;
var inst_89905__$1 = tmp89961;
var inst_89906__$1 = inst_89914;
var state_89951__$1 = (function (){var statearr_89965 = state_89951;
(statearr_89965[(9)] = inst_89903__$1);

(statearr_89965[(10)] = inst_89906__$1);

(statearr_89965[(11)] = inst_89905__$1);

(statearr_89965[(14)] = inst_89913);

(statearr_89965[(12)] = inst_89904__$1);

return statearr_89965;
})();
var statearr_89966_89998 = state_89951__$1;
(statearr_89966_89998[(2)] = null);

(statearr_89966_89998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (22))){
var state_89951__$1 = state_89951;
var statearr_89967_89999 = state_89951__$1;
(statearr_89967_89999[(2)] = null);

(statearr_89967_89999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (6))){
var inst_89892 = (state_89951[(13)]);
var inst_89901 = f.call(null,inst_89892);
var inst_89902 = cljs.core.seq.call(null,inst_89901);
var inst_89903 = inst_89902;
var inst_89904 = null;
var inst_89905 = (0);
var inst_89906 = (0);
var state_89951__$1 = (function (){var statearr_89968 = state_89951;
(statearr_89968[(9)] = inst_89903);

(statearr_89968[(10)] = inst_89906);

(statearr_89968[(11)] = inst_89905);

(statearr_89968[(12)] = inst_89904);

return statearr_89968;
})();
var statearr_89969_90000 = state_89951__$1;
(statearr_89969_90000[(2)] = null);

(statearr_89969_90000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (17))){
var inst_89917 = (state_89951[(7)]);
var inst_89921 = cljs.core.chunk_first.call(null,inst_89917);
var inst_89922 = cljs.core.chunk_rest.call(null,inst_89917);
var inst_89923 = cljs.core.count.call(null,inst_89921);
var inst_89903 = inst_89922;
var inst_89904 = inst_89921;
var inst_89905 = inst_89923;
var inst_89906 = (0);
var state_89951__$1 = (function (){var statearr_89970 = state_89951;
(statearr_89970[(9)] = inst_89903);

(statearr_89970[(10)] = inst_89906);

(statearr_89970[(11)] = inst_89905);

(statearr_89970[(12)] = inst_89904);

return statearr_89970;
})();
var statearr_89971_90001 = state_89951__$1;
(statearr_89971_90001[(2)] = null);

(statearr_89971_90001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (3))){
var inst_89949 = (state_89951[(2)]);
var state_89951__$1 = state_89951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89951__$1,inst_89949);
} else {
if((state_val_89952 === (12))){
var inst_89937 = (state_89951[(2)]);
var state_89951__$1 = state_89951;
var statearr_89972_90002 = state_89951__$1;
(statearr_89972_90002[(2)] = inst_89937);

(statearr_89972_90002[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (2))){
var state_89951__$1 = state_89951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89951__$1,(4),in$);
} else {
if((state_val_89952 === (23))){
var inst_89945 = (state_89951[(2)]);
var state_89951__$1 = state_89951;
var statearr_89973_90003 = state_89951__$1;
(statearr_89973_90003[(2)] = inst_89945);

(statearr_89973_90003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (19))){
var inst_89932 = (state_89951[(2)]);
var state_89951__$1 = state_89951;
var statearr_89974_90004 = state_89951__$1;
(statearr_89974_90004[(2)] = inst_89932);

(statearr_89974_90004[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (11))){
var inst_89917 = (state_89951[(7)]);
var inst_89903 = (state_89951[(9)]);
var inst_89917__$1 = cljs.core.seq.call(null,inst_89903);
var state_89951__$1 = (function (){var statearr_89975 = state_89951;
(statearr_89975[(7)] = inst_89917__$1);

return statearr_89975;
})();
if(inst_89917__$1){
var statearr_89976_90005 = state_89951__$1;
(statearr_89976_90005[(1)] = (14));

} else {
var statearr_89977_90006 = state_89951__$1;
(statearr_89977_90006[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (9))){
var inst_89939 = (state_89951[(2)]);
var inst_89940 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_89951__$1 = (function (){var statearr_89978 = state_89951;
(statearr_89978[(15)] = inst_89939);

return statearr_89978;
})();
if(cljs.core.truth_(inst_89940)){
var statearr_89979_90007 = state_89951__$1;
(statearr_89979_90007[(1)] = (21));

} else {
var statearr_89980_90008 = state_89951__$1;
(statearr_89980_90008[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (5))){
var inst_89895 = cljs.core.async.close_BANG_.call(null,out);
var state_89951__$1 = state_89951;
var statearr_89981_90009 = state_89951__$1;
(statearr_89981_90009[(2)] = inst_89895);

(statearr_89981_90009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (14))){
var inst_89917 = (state_89951[(7)]);
var inst_89919 = cljs.core.chunked_seq_QMARK_.call(null,inst_89917);
var state_89951__$1 = state_89951;
if(inst_89919){
var statearr_89982_90010 = state_89951__$1;
(statearr_89982_90010[(1)] = (17));

} else {
var statearr_89983_90011 = state_89951__$1;
(statearr_89983_90011[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (16))){
var inst_89935 = (state_89951[(2)]);
var state_89951__$1 = state_89951;
var statearr_89984_90012 = state_89951__$1;
(statearr_89984_90012[(2)] = inst_89935);

(statearr_89984_90012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89952 === (10))){
var inst_89906 = (state_89951[(10)]);
var inst_89904 = (state_89951[(12)]);
var inst_89911 = cljs.core._nth.call(null,inst_89904,inst_89906);
var state_89951__$1 = state_89951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89951__$1,(13),out,inst_89911);
} else {
if((state_val_89952 === (18))){
var inst_89917 = (state_89951[(7)]);
var inst_89926 = cljs.core.first.call(null,inst_89917);
var state_89951__$1 = state_89951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89951__$1,(20),out,inst_89926);
} else {
if((state_val_89952 === (8))){
var inst_89906 = (state_89951[(10)]);
var inst_89905 = (state_89951[(11)]);
var inst_89908 = (inst_89906 < inst_89905);
var inst_89909 = inst_89908;
var state_89951__$1 = state_89951;
if(cljs.core.truth_(inst_89909)){
var statearr_89985_90013 = state_89951__$1;
(statearr_89985_90013[(1)] = (10));

} else {
var statearr_89986_90014 = state_89951__$1;
(statearr_89986_90014[(1)] = (11));

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
});})(c__32958__auto__))
;
return ((function (switch__32868__auto__,c__32958__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32869__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32869__auto____0 = (function (){
var statearr_89987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89987[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32869__auto__);

(statearr_89987[(1)] = (1));

return statearr_89987;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32869__auto____1 = (function (state_89951){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_89951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e89988){if((e89988 instanceof Object)){
var ex__32872__auto__ = e89988;
var statearr_89989_90015 = state_89951;
(statearr_89989_90015[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90016 = state_89951;
state_89951 = G__90016;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32869__auto__ = function(state_89951){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32869__auto____1.call(this,state_89951);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32869__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32869__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__))
})();
var state__32960__auto__ = (function (){var statearr_89990 = f__32959__auto__.call(null);
(statearr_89990[(6)] = c__32958__auto__);

return statearr_89990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__))
);

return c__32958__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__90018 = arguments.length;
switch (G__90018) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__90021 = arguments.length;
switch (G__90021) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__90024 = arguments.length;
switch (G__90024) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32958__auto___90071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___90071,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___90071,out){
return (function (state_90048){
var state_val_90049 = (state_90048[(1)]);
if((state_val_90049 === (7))){
var inst_90043 = (state_90048[(2)]);
var state_90048__$1 = state_90048;
var statearr_90050_90072 = state_90048__$1;
(statearr_90050_90072[(2)] = inst_90043);

(statearr_90050_90072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90049 === (1))){
var inst_90025 = null;
var state_90048__$1 = (function (){var statearr_90051 = state_90048;
(statearr_90051[(7)] = inst_90025);

return statearr_90051;
})();
var statearr_90052_90073 = state_90048__$1;
(statearr_90052_90073[(2)] = null);

(statearr_90052_90073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90049 === (4))){
var inst_90028 = (state_90048[(8)]);
var inst_90028__$1 = (state_90048[(2)]);
var inst_90029 = (inst_90028__$1 == null);
var inst_90030 = cljs.core.not.call(null,inst_90029);
var state_90048__$1 = (function (){var statearr_90053 = state_90048;
(statearr_90053[(8)] = inst_90028__$1);

return statearr_90053;
})();
if(inst_90030){
var statearr_90054_90074 = state_90048__$1;
(statearr_90054_90074[(1)] = (5));

} else {
var statearr_90055_90075 = state_90048__$1;
(statearr_90055_90075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90049 === (6))){
var state_90048__$1 = state_90048;
var statearr_90056_90076 = state_90048__$1;
(statearr_90056_90076[(2)] = null);

(statearr_90056_90076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90049 === (3))){
var inst_90045 = (state_90048[(2)]);
var inst_90046 = cljs.core.async.close_BANG_.call(null,out);
var state_90048__$1 = (function (){var statearr_90057 = state_90048;
(statearr_90057[(9)] = inst_90045);

return statearr_90057;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90048__$1,inst_90046);
} else {
if((state_val_90049 === (2))){
var state_90048__$1 = state_90048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90048__$1,(4),ch);
} else {
if((state_val_90049 === (11))){
var inst_90028 = (state_90048[(8)]);
var inst_90037 = (state_90048[(2)]);
var inst_90025 = inst_90028;
var state_90048__$1 = (function (){var statearr_90058 = state_90048;
(statearr_90058[(10)] = inst_90037);

(statearr_90058[(7)] = inst_90025);

return statearr_90058;
})();
var statearr_90059_90077 = state_90048__$1;
(statearr_90059_90077[(2)] = null);

(statearr_90059_90077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90049 === (9))){
var inst_90028 = (state_90048[(8)]);
var state_90048__$1 = state_90048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90048__$1,(11),out,inst_90028);
} else {
if((state_val_90049 === (5))){
var inst_90028 = (state_90048[(8)]);
var inst_90025 = (state_90048[(7)]);
var inst_90032 = cljs.core._EQ_.call(null,inst_90028,inst_90025);
var state_90048__$1 = state_90048;
if(inst_90032){
var statearr_90061_90078 = state_90048__$1;
(statearr_90061_90078[(1)] = (8));

} else {
var statearr_90062_90079 = state_90048__$1;
(statearr_90062_90079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90049 === (10))){
var inst_90040 = (state_90048[(2)]);
var state_90048__$1 = state_90048;
var statearr_90063_90080 = state_90048__$1;
(statearr_90063_90080[(2)] = inst_90040);

(statearr_90063_90080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90049 === (8))){
var inst_90025 = (state_90048[(7)]);
var tmp90060 = inst_90025;
var inst_90025__$1 = tmp90060;
var state_90048__$1 = (function (){var statearr_90064 = state_90048;
(statearr_90064[(7)] = inst_90025__$1);

return statearr_90064;
})();
var statearr_90065_90081 = state_90048__$1;
(statearr_90065_90081[(2)] = null);

(statearr_90065_90081[(1)] = (2));


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
});})(c__32958__auto___90071,out))
;
return ((function (switch__32868__auto__,c__32958__auto___90071,out){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_90066 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90066[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_90066[(1)] = (1));

return statearr_90066;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_90048){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_90048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e90067){if((e90067 instanceof Object)){
var ex__32872__auto__ = e90067;
var statearr_90068_90082 = state_90048;
(statearr_90068_90082[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90083 = state_90048;
state_90048 = G__90083;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_90048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_90048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___90071,out))
})();
var state__32960__auto__ = (function (){var statearr_90069 = f__32959__auto__.call(null);
(statearr_90069[(6)] = c__32958__auto___90071);

return statearr_90069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___90071,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__90085 = arguments.length;
switch (G__90085) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32958__auto___90151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___90151,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___90151,out){
return (function (state_90123){
var state_val_90124 = (state_90123[(1)]);
if((state_val_90124 === (7))){
var inst_90119 = (state_90123[(2)]);
var state_90123__$1 = state_90123;
var statearr_90125_90152 = state_90123__$1;
(statearr_90125_90152[(2)] = inst_90119);

(statearr_90125_90152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90124 === (1))){
var inst_90086 = (new Array(n));
var inst_90087 = inst_90086;
var inst_90088 = (0);
var state_90123__$1 = (function (){var statearr_90126 = state_90123;
(statearr_90126[(7)] = inst_90087);

(statearr_90126[(8)] = inst_90088);

return statearr_90126;
})();
var statearr_90127_90153 = state_90123__$1;
(statearr_90127_90153[(2)] = null);

(statearr_90127_90153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90124 === (4))){
var inst_90091 = (state_90123[(9)]);
var inst_90091__$1 = (state_90123[(2)]);
var inst_90092 = (inst_90091__$1 == null);
var inst_90093 = cljs.core.not.call(null,inst_90092);
var state_90123__$1 = (function (){var statearr_90128 = state_90123;
(statearr_90128[(9)] = inst_90091__$1);

return statearr_90128;
})();
if(inst_90093){
var statearr_90129_90154 = state_90123__$1;
(statearr_90129_90154[(1)] = (5));

} else {
var statearr_90130_90155 = state_90123__$1;
(statearr_90130_90155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90124 === (15))){
var inst_90113 = (state_90123[(2)]);
var state_90123__$1 = state_90123;
var statearr_90131_90156 = state_90123__$1;
(statearr_90131_90156[(2)] = inst_90113);

(statearr_90131_90156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90124 === (13))){
var state_90123__$1 = state_90123;
var statearr_90132_90157 = state_90123__$1;
(statearr_90132_90157[(2)] = null);

(statearr_90132_90157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90124 === (6))){
var inst_90088 = (state_90123[(8)]);
var inst_90109 = (inst_90088 > (0));
var state_90123__$1 = state_90123;
if(cljs.core.truth_(inst_90109)){
var statearr_90133_90158 = state_90123__$1;
(statearr_90133_90158[(1)] = (12));

} else {
var statearr_90134_90159 = state_90123__$1;
(statearr_90134_90159[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90124 === (3))){
var inst_90121 = (state_90123[(2)]);
var state_90123__$1 = state_90123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90123__$1,inst_90121);
} else {
if((state_val_90124 === (12))){
var inst_90087 = (state_90123[(7)]);
var inst_90111 = cljs.core.vec.call(null,inst_90087);
var state_90123__$1 = state_90123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90123__$1,(15),out,inst_90111);
} else {
if((state_val_90124 === (2))){
var state_90123__$1 = state_90123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90123__$1,(4),ch);
} else {
if((state_val_90124 === (11))){
var inst_90103 = (state_90123[(2)]);
var inst_90104 = (new Array(n));
var inst_90087 = inst_90104;
var inst_90088 = (0);
var state_90123__$1 = (function (){var statearr_90135 = state_90123;
(statearr_90135[(10)] = inst_90103);

(statearr_90135[(7)] = inst_90087);

(statearr_90135[(8)] = inst_90088);

return statearr_90135;
})();
var statearr_90136_90160 = state_90123__$1;
(statearr_90136_90160[(2)] = null);

(statearr_90136_90160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90124 === (9))){
var inst_90087 = (state_90123[(7)]);
var inst_90101 = cljs.core.vec.call(null,inst_90087);
var state_90123__$1 = state_90123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90123__$1,(11),out,inst_90101);
} else {
if((state_val_90124 === (5))){
var inst_90096 = (state_90123[(11)]);
var inst_90087 = (state_90123[(7)]);
var inst_90091 = (state_90123[(9)]);
var inst_90088 = (state_90123[(8)]);
var inst_90095 = (inst_90087[inst_90088] = inst_90091);
var inst_90096__$1 = (inst_90088 + (1));
var inst_90097 = (inst_90096__$1 < n);
var state_90123__$1 = (function (){var statearr_90137 = state_90123;
(statearr_90137[(11)] = inst_90096__$1);

(statearr_90137[(12)] = inst_90095);

return statearr_90137;
})();
if(cljs.core.truth_(inst_90097)){
var statearr_90138_90161 = state_90123__$1;
(statearr_90138_90161[(1)] = (8));

} else {
var statearr_90139_90162 = state_90123__$1;
(statearr_90139_90162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90124 === (14))){
var inst_90116 = (state_90123[(2)]);
var inst_90117 = cljs.core.async.close_BANG_.call(null,out);
var state_90123__$1 = (function (){var statearr_90141 = state_90123;
(statearr_90141[(13)] = inst_90116);

return statearr_90141;
})();
var statearr_90142_90163 = state_90123__$1;
(statearr_90142_90163[(2)] = inst_90117);

(statearr_90142_90163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90124 === (10))){
var inst_90107 = (state_90123[(2)]);
var state_90123__$1 = state_90123;
var statearr_90143_90164 = state_90123__$1;
(statearr_90143_90164[(2)] = inst_90107);

(statearr_90143_90164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90124 === (8))){
var inst_90096 = (state_90123[(11)]);
var inst_90087 = (state_90123[(7)]);
var tmp90140 = inst_90087;
var inst_90087__$1 = tmp90140;
var inst_90088 = inst_90096;
var state_90123__$1 = (function (){var statearr_90144 = state_90123;
(statearr_90144[(7)] = inst_90087__$1);

(statearr_90144[(8)] = inst_90088);

return statearr_90144;
})();
var statearr_90145_90165 = state_90123__$1;
(statearr_90145_90165[(2)] = null);

(statearr_90145_90165[(1)] = (2));


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
});})(c__32958__auto___90151,out))
;
return ((function (switch__32868__auto__,c__32958__auto___90151,out){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_90146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90146[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_90146[(1)] = (1));

return statearr_90146;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_90123){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_90123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e90147){if((e90147 instanceof Object)){
var ex__32872__auto__ = e90147;
var statearr_90148_90166 = state_90123;
(statearr_90148_90166[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90167 = state_90123;
state_90123 = G__90167;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_90123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_90123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___90151,out))
})();
var state__32960__auto__ = (function (){var statearr_90149 = f__32959__auto__.call(null);
(statearr_90149[(6)] = c__32958__auto___90151);

return statearr_90149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___90151,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__90169 = arguments.length;
switch (G__90169) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32958__auto___90239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___90239,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___90239,out){
return (function (state_90211){
var state_val_90212 = (state_90211[(1)]);
if((state_val_90212 === (7))){
var inst_90207 = (state_90211[(2)]);
var state_90211__$1 = state_90211;
var statearr_90213_90240 = state_90211__$1;
(statearr_90213_90240[(2)] = inst_90207);

(statearr_90213_90240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90212 === (1))){
var inst_90170 = [];
var inst_90171 = inst_90170;
var inst_90172 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_90211__$1 = (function (){var statearr_90214 = state_90211;
(statearr_90214[(7)] = inst_90171);

(statearr_90214[(8)] = inst_90172);

return statearr_90214;
})();
var statearr_90215_90241 = state_90211__$1;
(statearr_90215_90241[(2)] = null);

(statearr_90215_90241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90212 === (4))){
var inst_90175 = (state_90211[(9)]);
var inst_90175__$1 = (state_90211[(2)]);
var inst_90176 = (inst_90175__$1 == null);
var inst_90177 = cljs.core.not.call(null,inst_90176);
var state_90211__$1 = (function (){var statearr_90216 = state_90211;
(statearr_90216[(9)] = inst_90175__$1);

return statearr_90216;
})();
if(inst_90177){
var statearr_90217_90242 = state_90211__$1;
(statearr_90217_90242[(1)] = (5));

} else {
var statearr_90218_90243 = state_90211__$1;
(statearr_90218_90243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90212 === (15))){
var inst_90201 = (state_90211[(2)]);
var state_90211__$1 = state_90211;
var statearr_90219_90244 = state_90211__$1;
(statearr_90219_90244[(2)] = inst_90201);

(statearr_90219_90244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90212 === (13))){
var state_90211__$1 = state_90211;
var statearr_90220_90245 = state_90211__$1;
(statearr_90220_90245[(2)] = null);

(statearr_90220_90245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90212 === (6))){
var inst_90171 = (state_90211[(7)]);
var inst_90196 = inst_90171.length;
var inst_90197 = (inst_90196 > (0));
var state_90211__$1 = state_90211;
if(cljs.core.truth_(inst_90197)){
var statearr_90221_90246 = state_90211__$1;
(statearr_90221_90246[(1)] = (12));

} else {
var statearr_90222_90247 = state_90211__$1;
(statearr_90222_90247[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90212 === (3))){
var inst_90209 = (state_90211[(2)]);
var state_90211__$1 = state_90211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90211__$1,inst_90209);
} else {
if((state_val_90212 === (12))){
var inst_90171 = (state_90211[(7)]);
var inst_90199 = cljs.core.vec.call(null,inst_90171);
var state_90211__$1 = state_90211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90211__$1,(15),out,inst_90199);
} else {
if((state_val_90212 === (2))){
var state_90211__$1 = state_90211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90211__$1,(4),ch);
} else {
if((state_val_90212 === (11))){
var inst_90179 = (state_90211[(10)]);
var inst_90175 = (state_90211[(9)]);
var inst_90189 = (state_90211[(2)]);
var inst_90190 = [];
var inst_90191 = inst_90190.push(inst_90175);
var inst_90171 = inst_90190;
var inst_90172 = inst_90179;
var state_90211__$1 = (function (){var statearr_90223 = state_90211;
(statearr_90223[(7)] = inst_90171);

(statearr_90223[(8)] = inst_90172);

(statearr_90223[(11)] = inst_90191);

(statearr_90223[(12)] = inst_90189);

return statearr_90223;
})();
var statearr_90224_90248 = state_90211__$1;
(statearr_90224_90248[(2)] = null);

(statearr_90224_90248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90212 === (9))){
var inst_90171 = (state_90211[(7)]);
var inst_90187 = cljs.core.vec.call(null,inst_90171);
var state_90211__$1 = state_90211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90211__$1,(11),out,inst_90187);
} else {
if((state_val_90212 === (5))){
var inst_90179 = (state_90211[(10)]);
var inst_90175 = (state_90211[(9)]);
var inst_90172 = (state_90211[(8)]);
var inst_90179__$1 = f.call(null,inst_90175);
var inst_90180 = cljs.core._EQ_.call(null,inst_90179__$1,inst_90172);
var inst_90181 = cljs.core.keyword_identical_QMARK_.call(null,inst_90172,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_90182 = (inst_90180) || (inst_90181);
var state_90211__$1 = (function (){var statearr_90225 = state_90211;
(statearr_90225[(10)] = inst_90179__$1);

return statearr_90225;
})();
if(cljs.core.truth_(inst_90182)){
var statearr_90226_90249 = state_90211__$1;
(statearr_90226_90249[(1)] = (8));

} else {
var statearr_90227_90250 = state_90211__$1;
(statearr_90227_90250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90212 === (14))){
var inst_90204 = (state_90211[(2)]);
var inst_90205 = cljs.core.async.close_BANG_.call(null,out);
var state_90211__$1 = (function (){var statearr_90229 = state_90211;
(statearr_90229[(13)] = inst_90204);

return statearr_90229;
})();
var statearr_90230_90251 = state_90211__$1;
(statearr_90230_90251[(2)] = inst_90205);

(statearr_90230_90251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90212 === (10))){
var inst_90194 = (state_90211[(2)]);
var state_90211__$1 = state_90211;
var statearr_90231_90252 = state_90211__$1;
(statearr_90231_90252[(2)] = inst_90194);

(statearr_90231_90252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90212 === (8))){
var inst_90171 = (state_90211[(7)]);
var inst_90179 = (state_90211[(10)]);
var inst_90175 = (state_90211[(9)]);
var inst_90184 = inst_90171.push(inst_90175);
var tmp90228 = inst_90171;
var inst_90171__$1 = tmp90228;
var inst_90172 = inst_90179;
var state_90211__$1 = (function (){var statearr_90232 = state_90211;
(statearr_90232[(7)] = inst_90171__$1);

(statearr_90232[(14)] = inst_90184);

(statearr_90232[(8)] = inst_90172);

return statearr_90232;
})();
var statearr_90233_90253 = state_90211__$1;
(statearr_90233_90253[(2)] = null);

(statearr_90233_90253[(1)] = (2));


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
});})(c__32958__auto___90239,out))
;
return ((function (switch__32868__auto__,c__32958__auto___90239,out){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_90234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90234[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_90234[(1)] = (1));

return statearr_90234;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_90211){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_90211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e90235){if((e90235 instanceof Object)){
var ex__32872__auto__ = e90235;
var statearr_90236_90254 = state_90211;
(statearr_90236_90254[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90255 = state_90211;
state_90211 = G__90255;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_90211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_90211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___90239,out))
})();
var state__32960__auto__ = (function (){var statearr_90237 = f__32959__auto__.call(null);
(statearr_90237[(6)] = c__32958__auto___90239);

return statearr_90237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___90239,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1500526695419