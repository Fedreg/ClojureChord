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
var G__33018 = arguments.length;
switch (G__33018) {
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
if(typeof cljs.core.async.t_cljs$core$async33019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33019 = (function (f,blockable,meta33020){
this.f = f;
this.blockable = blockable;
this.meta33020 = meta33020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33021,meta33020__$1){
var self__ = this;
var _33021__$1 = this;
return (new cljs.core.async.t_cljs$core$async33019(self__.f,self__.blockable,meta33020__$1));
});

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33021){
var self__ = this;
var _33021__$1 = this;
return self__.meta33020;
});

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33020","meta33020",971271479,null)], null);
});

cljs.core.async.t_cljs$core$async33019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33019";

cljs.core.async.t_cljs$core$async33019.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async33019");
});

cljs.core.async.__GT_t_cljs$core$async33019 = (function cljs$core$async$__GT_t_cljs$core$async33019(f__$1,blockable__$1,meta33020){
return (new cljs.core.async.t_cljs$core$async33019(f__$1,blockable__$1,meta33020));
});

}

return (new cljs.core.async.t_cljs$core$async33019(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33025 = arguments.length;
switch (G__33025) {
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
var G__33028 = arguments.length;
switch (G__33028) {
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
var G__33031 = arguments.length;
switch (G__33031) {
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
var val_33033 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33033);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33033,ret){
return (function (){
return fn1.call(null,val_33033);
});})(val_33033,ret))
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
var G__33035 = arguments.length;
switch (G__33035) {
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
var n__29591__auto___33037 = n;
var x_33038 = (0);
while(true){
if((x_33038 < n__29591__auto___33037)){
(a[x_33038] = (0));

var G__33039 = (x_33038 + (1));
x_33038 = G__33039;
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

var G__33040 = (i + (1));
i = G__33040;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33041 = (function (flag,meta33042){
this.flag = flag;
this.meta33042 = meta33042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33043,meta33042__$1){
var self__ = this;
var _33043__$1 = this;
return (new cljs.core.async.t_cljs$core$async33041(self__.flag,meta33042__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33043){
var self__ = this;
var _33043__$1 = this;
return self__.meta33042;
});})(flag))
;

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33041.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33042","meta33042",-1778661037,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33041";

cljs.core.async.t_cljs$core$async33041.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async33041");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33041 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33041(flag__$1,meta33042){
return (new cljs.core.async.t_cljs$core$async33041(flag__$1,meta33042));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33041(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33044 = (function (flag,cb,meta33045){
this.flag = flag;
this.cb = cb;
this.meta33045 = meta33045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33046,meta33045__$1){
var self__ = this;
var _33046__$1 = this;
return (new cljs.core.async.t_cljs$core$async33044(self__.flag,self__.cb,meta33045__$1));
});

cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33046){
var self__ = this;
var _33046__$1 = this;
return self__.meta33045;
});

cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33045","meta33045",-795501092,null)], null);
});

cljs.core.async.t_cljs$core$async33044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33044";

cljs.core.async.t_cljs$core$async33044.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async33044");
});

cljs.core.async.__GT_t_cljs$core$async33044 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33044(flag__$1,cb__$1,meta33045){
return (new cljs.core.async.t_cljs$core$async33044(flag__$1,cb__$1,meta33045));
});

}

return (new cljs.core.async.t_cljs$core$async33044(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33047_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33047_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33048_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33048_SHARP_,port], null));
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
var G__33049 = (i + (1));
i = G__33049;
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
var len__29802__auto___33055 = arguments.length;
var i__29803__auto___33056 = (0);
while(true){
if((i__29803__auto___33056 < len__29802__auto___33055)){
args__29809__auto__.push((arguments[i__29803__auto___33056]));

var G__33057 = (i__29803__auto___33056 + (1));
i__29803__auto___33056 = G__33057;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((1) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29810__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33052){
var map__33053 = p__33052;
var map__33053__$1 = ((((!((map__33053 == null)))?((((map__33053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33053):map__33053);
var opts = map__33053__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33050){
var G__33051 = cljs.core.first.call(null,seq33050);
var seq33050__$1 = cljs.core.next.call(null,seq33050);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33051,seq33050__$1);
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
var G__33059 = arguments.length;
switch (G__33059) {
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
var c__32958__auto___33105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___33105){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___33105){
return (function (state_33083){
var state_val_33084 = (state_33083[(1)]);
if((state_val_33084 === (7))){
var inst_33079 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
var statearr_33085_33106 = state_33083__$1;
(statearr_33085_33106[(2)] = inst_33079);

(statearr_33085_33106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (1))){
var state_33083__$1 = state_33083;
var statearr_33086_33107 = state_33083__$1;
(statearr_33086_33107[(2)] = null);

(statearr_33086_33107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (4))){
var inst_33062 = (state_33083[(7)]);
var inst_33062__$1 = (state_33083[(2)]);
var inst_33063 = (inst_33062__$1 == null);
var state_33083__$1 = (function (){var statearr_33087 = state_33083;
(statearr_33087[(7)] = inst_33062__$1);

return statearr_33087;
})();
if(cljs.core.truth_(inst_33063)){
var statearr_33088_33108 = state_33083__$1;
(statearr_33088_33108[(1)] = (5));

} else {
var statearr_33089_33109 = state_33083__$1;
(statearr_33089_33109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (13))){
var state_33083__$1 = state_33083;
var statearr_33090_33110 = state_33083__$1;
(statearr_33090_33110[(2)] = null);

(statearr_33090_33110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (6))){
var inst_33062 = (state_33083[(7)]);
var state_33083__$1 = state_33083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33083__$1,(11),to,inst_33062);
} else {
if((state_val_33084 === (3))){
var inst_33081 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33083__$1,inst_33081);
} else {
if((state_val_33084 === (12))){
var state_33083__$1 = state_33083;
var statearr_33091_33111 = state_33083__$1;
(statearr_33091_33111[(2)] = null);

(statearr_33091_33111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (2))){
var state_33083__$1 = state_33083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33083__$1,(4),from);
} else {
if((state_val_33084 === (11))){
var inst_33072 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
if(cljs.core.truth_(inst_33072)){
var statearr_33092_33112 = state_33083__$1;
(statearr_33092_33112[(1)] = (12));

} else {
var statearr_33093_33113 = state_33083__$1;
(statearr_33093_33113[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (9))){
var state_33083__$1 = state_33083;
var statearr_33094_33114 = state_33083__$1;
(statearr_33094_33114[(2)] = null);

(statearr_33094_33114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (5))){
var state_33083__$1 = state_33083;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33095_33115 = state_33083__$1;
(statearr_33095_33115[(1)] = (8));

} else {
var statearr_33096_33116 = state_33083__$1;
(statearr_33096_33116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (14))){
var inst_33077 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
var statearr_33097_33117 = state_33083__$1;
(statearr_33097_33117[(2)] = inst_33077);

(statearr_33097_33117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (10))){
var inst_33069 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
var statearr_33098_33118 = state_33083__$1;
(statearr_33098_33118[(2)] = inst_33069);

(statearr_33098_33118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (8))){
var inst_33066 = cljs.core.async.close_BANG_.call(null,to);
var state_33083__$1 = state_33083;
var statearr_33099_33119 = state_33083__$1;
(statearr_33099_33119[(2)] = inst_33066);

(statearr_33099_33119[(1)] = (10));


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
});})(c__32958__auto___33105))
;
return ((function (switch__32868__auto__,c__32958__auto___33105){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_33100 = [null,null,null,null,null,null,null,null];
(statearr_33100[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_33100[(1)] = (1));

return statearr_33100;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_33083){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_33083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e33101){if((e33101 instanceof Object)){
var ex__32872__auto__ = e33101;
var statearr_33102_33120 = state_33083;
(statearr_33102_33120[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33121 = state_33083;
state_33083 = G__33121;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_33083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_33083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___33105))
})();
var state__32960__auto__ = (function (){var statearr_33103 = f__32959__auto__.call(null);
(statearr_33103[(6)] = c__32958__auto___33105);

return statearr_33103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___33105))
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
return (function (p__33122){
var vec__33123 = p__33122;
var v = cljs.core.nth.call(null,vec__33123,(0),null);
var p = cljs.core.nth.call(null,vec__33123,(1),null);
var job = vec__33123;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32958__auto___33294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___33294,res,vec__33123,v,p,job,jobs,results){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___33294,res,vec__33123,v,p,job,jobs,results){
return (function (state_33130){
var state_val_33131 = (state_33130[(1)]);
if((state_val_33131 === (1))){
var state_33130__$1 = state_33130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33130__$1,(2),res,v);
} else {
if((state_val_33131 === (2))){
var inst_33127 = (state_33130[(2)]);
var inst_33128 = cljs.core.async.close_BANG_.call(null,res);
var state_33130__$1 = (function (){var statearr_33132 = state_33130;
(statearr_33132[(7)] = inst_33127);

return statearr_33132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33130__$1,inst_33128);
} else {
return null;
}
}
});})(c__32958__auto___33294,res,vec__33123,v,p,job,jobs,results))
;
return ((function (switch__32868__auto__,c__32958__auto___33294,res,vec__33123,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0 = (function (){
var statearr_33133 = [null,null,null,null,null,null,null,null];
(statearr_33133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__);

(statearr_33133[(1)] = (1));

return statearr_33133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1 = (function (state_33130){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_33130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e33134){if((e33134 instanceof Object)){
var ex__32872__auto__ = e33134;
var statearr_33135_33295 = state_33130;
(statearr_33135_33295[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33296 = state_33130;
state_33130 = G__33296;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = function(state_33130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1.call(this,state_33130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___33294,res,vec__33123,v,p,job,jobs,results))
})();
var state__32960__auto__ = (function (){var statearr_33136 = f__32959__auto__.call(null);
(statearr_33136[(6)] = c__32958__auto___33294);

return statearr_33136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___33294,res,vec__33123,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33137){
var vec__33138 = p__33137;
var v = cljs.core.nth.call(null,vec__33138,(0),null);
var p = cljs.core.nth.call(null,vec__33138,(1),null);
var job = vec__33138;
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
var n__29591__auto___33297 = n;
var __33298 = (0);
while(true){
if((__33298 < n__29591__auto___33297)){
var G__33141_33299 = type;
var G__33141_33300__$1 = (((G__33141_33299 instanceof cljs.core.Keyword))?G__33141_33299.fqn:null);
switch (G__33141_33300__$1) {
case "compute":
var c__32958__auto___33302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33298,c__32958__auto___33302,G__33141_33299,G__33141_33300__$1,n__29591__auto___33297,jobs,results,process,async){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (__33298,c__32958__auto___33302,G__33141_33299,G__33141_33300__$1,n__29591__auto___33297,jobs,results,process,async){
return (function (state_33154){
var state_val_33155 = (state_33154[(1)]);
if((state_val_33155 === (1))){
var state_33154__$1 = state_33154;
var statearr_33156_33303 = state_33154__$1;
(statearr_33156_33303[(2)] = null);

(statearr_33156_33303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33155 === (2))){
var state_33154__$1 = state_33154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33154__$1,(4),jobs);
} else {
if((state_val_33155 === (3))){
var inst_33152 = (state_33154[(2)]);
var state_33154__$1 = state_33154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33154__$1,inst_33152);
} else {
if((state_val_33155 === (4))){
var inst_33144 = (state_33154[(2)]);
var inst_33145 = process.call(null,inst_33144);
var state_33154__$1 = state_33154;
if(cljs.core.truth_(inst_33145)){
var statearr_33157_33304 = state_33154__$1;
(statearr_33157_33304[(1)] = (5));

} else {
var statearr_33158_33305 = state_33154__$1;
(statearr_33158_33305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33155 === (5))){
var state_33154__$1 = state_33154;
var statearr_33159_33306 = state_33154__$1;
(statearr_33159_33306[(2)] = null);

(statearr_33159_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33155 === (6))){
var state_33154__$1 = state_33154;
var statearr_33160_33307 = state_33154__$1;
(statearr_33160_33307[(2)] = null);

(statearr_33160_33307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33155 === (7))){
var inst_33150 = (state_33154[(2)]);
var state_33154__$1 = state_33154;
var statearr_33161_33308 = state_33154__$1;
(statearr_33161_33308[(2)] = inst_33150);

(statearr_33161_33308[(1)] = (3));


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
});})(__33298,c__32958__auto___33302,G__33141_33299,G__33141_33300__$1,n__29591__auto___33297,jobs,results,process,async))
;
return ((function (__33298,switch__32868__auto__,c__32958__auto___33302,G__33141_33299,G__33141_33300__$1,n__29591__auto___33297,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0 = (function (){
var statearr_33162 = [null,null,null,null,null,null,null];
(statearr_33162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__);

(statearr_33162[(1)] = (1));

return statearr_33162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1 = (function (state_33154){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_33154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e33163){if((e33163 instanceof Object)){
var ex__32872__auto__ = e33163;
var statearr_33164_33309 = state_33154;
(statearr_33164_33309[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33310 = state_33154;
state_33154 = G__33310;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = function(state_33154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1.call(this,state_33154);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__;
})()
;})(__33298,switch__32868__auto__,c__32958__auto___33302,G__33141_33299,G__33141_33300__$1,n__29591__auto___33297,jobs,results,process,async))
})();
var state__32960__auto__ = (function (){var statearr_33165 = f__32959__auto__.call(null);
(statearr_33165[(6)] = c__32958__auto___33302);

return statearr_33165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(__33298,c__32958__auto___33302,G__33141_33299,G__33141_33300__$1,n__29591__auto___33297,jobs,results,process,async))
);


break;
case "async":
var c__32958__auto___33311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33298,c__32958__auto___33311,G__33141_33299,G__33141_33300__$1,n__29591__auto___33297,jobs,results,process,async){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (__33298,c__32958__auto___33311,G__33141_33299,G__33141_33300__$1,n__29591__auto___33297,jobs,results,process,async){
return (function (state_33178){
var state_val_33179 = (state_33178[(1)]);
if((state_val_33179 === (1))){
var state_33178__$1 = state_33178;
var statearr_33180_33312 = state_33178__$1;
(statearr_33180_33312[(2)] = null);

(statearr_33180_33312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (2))){
var state_33178__$1 = state_33178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33178__$1,(4),jobs);
} else {
if((state_val_33179 === (3))){
var inst_33176 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33178__$1,inst_33176);
} else {
if((state_val_33179 === (4))){
var inst_33168 = (state_33178[(2)]);
var inst_33169 = async.call(null,inst_33168);
var state_33178__$1 = state_33178;
if(cljs.core.truth_(inst_33169)){
var statearr_33181_33313 = state_33178__$1;
(statearr_33181_33313[(1)] = (5));

} else {
var statearr_33182_33314 = state_33178__$1;
(statearr_33182_33314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (5))){
var state_33178__$1 = state_33178;
var statearr_33183_33315 = state_33178__$1;
(statearr_33183_33315[(2)] = null);

(statearr_33183_33315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (6))){
var state_33178__$1 = state_33178;
var statearr_33184_33316 = state_33178__$1;
(statearr_33184_33316[(2)] = null);

(statearr_33184_33316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (7))){
var inst_33174 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
var statearr_33185_33317 = state_33178__$1;
(statearr_33185_33317[(2)] = inst_33174);

(statearr_33185_33317[(1)] = (3));


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
});})(__33298,c__32958__auto___33311,G__33141_33299,G__33141_33300__$1,n__29591__auto___33297,jobs,results,process,async))
;
return ((function (__33298,switch__32868__auto__,c__32958__auto___33311,G__33141_33299,G__33141_33300__$1,n__29591__auto___33297,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0 = (function (){
var statearr_33186 = [null,null,null,null,null,null,null];
(statearr_33186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__);

(statearr_33186[(1)] = (1));

return statearr_33186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1 = (function (state_33178){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_33178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e33187){if((e33187 instanceof Object)){
var ex__32872__auto__ = e33187;
var statearr_33188_33318 = state_33178;
(statearr_33188_33318[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33319 = state_33178;
state_33178 = G__33319;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = function(state_33178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1.call(this,state_33178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__;
})()
;})(__33298,switch__32868__auto__,c__32958__auto___33311,G__33141_33299,G__33141_33300__$1,n__29591__auto___33297,jobs,results,process,async))
})();
var state__32960__auto__ = (function (){var statearr_33189 = f__32959__auto__.call(null);
(statearr_33189[(6)] = c__32958__auto___33311);

return statearr_33189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(__33298,c__32958__auto___33311,G__33141_33299,G__33141_33300__$1,n__29591__auto___33297,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33141_33300__$1)].join('')));

}

var G__33320 = (__33298 + (1));
__33298 = G__33320;
continue;
} else {
}
break;
}

var c__32958__auto___33321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___33321,jobs,results,process,async){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___33321,jobs,results,process,async){
return (function (state_33211){
var state_val_33212 = (state_33211[(1)]);
if((state_val_33212 === (1))){
var state_33211__$1 = state_33211;
var statearr_33213_33322 = state_33211__$1;
(statearr_33213_33322[(2)] = null);

(statearr_33213_33322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33212 === (2))){
var state_33211__$1 = state_33211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33211__$1,(4),from);
} else {
if((state_val_33212 === (3))){
var inst_33209 = (state_33211[(2)]);
var state_33211__$1 = state_33211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33211__$1,inst_33209);
} else {
if((state_val_33212 === (4))){
var inst_33192 = (state_33211[(7)]);
var inst_33192__$1 = (state_33211[(2)]);
var inst_33193 = (inst_33192__$1 == null);
var state_33211__$1 = (function (){var statearr_33214 = state_33211;
(statearr_33214[(7)] = inst_33192__$1);

return statearr_33214;
})();
if(cljs.core.truth_(inst_33193)){
var statearr_33215_33323 = state_33211__$1;
(statearr_33215_33323[(1)] = (5));

} else {
var statearr_33216_33324 = state_33211__$1;
(statearr_33216_33324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33212 === (5))){
var inst_33195 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33211__$1 = state_33211;
var statearr_33217_33325 = state_33211__$1;
(statearr_33217_33325[(2)] = inst_33195);

(statearr_33217_33325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33212 === (6))){
var inst_33192 = (state_33211[(7)]);
var inst_33197 = (state_33211[(8)]);
var inst_33197__$1 = cljs.core.async.chan.call(null,(1));
var inst_33198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33199 = [inst_33192,inst_33197__$1];
var inst_33200 = (new cljs.core.PersistentVector(null,2,(5),inst_33198,inst_33199,null));
var state_33211__$1 = (function (){var statearr_33218 = state_33211;
(statearr_33218[(8)] = inst_33197__$1);

return statearr_33218;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33211__$1,(8),jobs,inst_33200);
} else {
if((state_val_33212 === (7))){
var inst_33207 = (state_33211[(2)]);
var state_33211__$1 = state_33211;
var statearr_33219_33326 = state_33211__$1;
(statearr_33219_33326[(2)] = inst_33207);

(statearr_33219_33326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33212 === (8))){
var inst_33197 = (state_33211[(8)]);
var inst_33202 = (state_33211[(2)]);
var state_33211__$1 = (function (){var statearr_33220 = state_33211;
(statearr_33220[(9)] = inst_33202);

return statearr_33220;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33211__$1,(9),results,inst_33197);
} else {
if((state_val_33212 === (9))){
var inst_33204 = (state_33211[(2)]);
var state_33211__$1 = (function (){var statearr_33221 = state_33211;
(statearr_33221[(10)] = inst_33204);

return statearr_33221;
})();
var statearr_33222_33327 = state_33211__$1;
(statearr_33222_33327[(2)] = null);

(statearr_33222_33327[(1)] = (2));


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
});})(c__32958__auto___33321,jobs,results,process,async))
;
return ((function (switch__32868__auto__,c__32958__auto___33321,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0 = (function (){
var statearr_33223 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__);

(statearr_33223[(1)] = (1));

return statearr_33223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1 = (function (state_33211){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_33211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e33224){if((e33224 instanceof Object)){
var ex__32872__auto__ = e33224;
var statearr_33225_33328 = state_33211;
(statearr_33225_33328[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33329 = state_33211;
state_33211 = G__33329;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = function(state_33211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1.call(this,state_33211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___33321,jobs,results,process,async))
})();
var state__32960__auto__ = (function (){var statearr_33226 = f__32959__auto__.call(null);
(statearr_33226[(6)] = c__32958__auto___33321);

return statearr_33226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___33321,jobs,results,process,async))
);


var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__,jobs,results,process,async){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__,jobs,results,process,async){
return (function (state_33264){
var state_val_33265 = (state_33264[(1)]);
if((state_val_33265 === (7))){
var inst_33260 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33266_33330 = state_33264__$1;
(statearr_33266_33330[(2)] = inst_33260);

(statearr_33266_33330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (20))){
var state_33264__$1 = state_33264;
var statearr_33267_33331 = state_33264__$1;
(statearr_33267_33331[(2)] = null);

(statearr_33267_33331[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (1))){
var state_33264__$1 = state_33264;
var statearr_33268_33332 = state_33264__$1;
(statearr_33268_33332[(2)] = null);

(statearr_33268_33332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (4))){
var inst_33229 = (state_33264[(7)]);
var inst_33229__$1 = (state_33264[(2)]);
var inst_33230 = (inst_33229__$1 == null);
var state_33264__$1 = (function (){var statearr_33269 = state_33264;
(statearr_33269[(7)] = inst_33229__$1);

return statearr_33269;
})();
if(cljs.core.truth_(inst_33230)){
var statearr_33270_33333 = state_33264__$1;
(statearr_33270_33333[(1)] = (5));

} else {
var statearr_33271_33334 = state_33264__$1;
(statearr_33271_33334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (15))){
var inst_33242 = (state_33264[(8)]);
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33264__$1,(18),to,inst_33242);
} else {
if((state_val_33265 === (21))){
var inst_33255 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33272_33335 = state_33264__$1;
(statearr_33272_33335[(2)] = inst_33255);

(statearr_33272_33335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (13))){
var inst_33257 = (state_33264[(2)]);
var state_33264__$1 = (function (){var statearr_33273 = state_33264;
(statearr_33273[(9)] = inst_33257);

return statearr_33273;
})();
var statearr_33274_33336 = state_33264__$1;
(statearr_33274_33336[(2)] = null);

(statearr_33274_33336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (6))){
var inst_33229 = (state_33264[(7)]);
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33264__$1,(11),inst_33229);
} else {
if((state_val_33265 === (17))){
var inst_33250 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
if(cljs.core.truth_(inst_33250)){
var statearr_33275_33337 = state_33264__$1;
(statearr_33275_33337[(1)] = (19));

} else {
var statearr_33276_33338 = state_33264__$1;
(statearr_33276_33338[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (3))){
var inst_33262 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33264__$1,inst_33262);
} else {
if((state_val_33265 === (12))){
var inst_33239 = (state_33264[(10)]);
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33264__$1,(14),inst_33239);
} else {
if((state_val_33265 === (2))){
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33264__$1,(4),results);
} else {
if((state_val_33265 === (19))){
var state_33264__$1 = state_33264;
var statearr_33277_33339 = state_33264__$1;
(statearr_33277_33339[(2)] = null);

(statearr_33277_33339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (11))){
var inst_33239 = (state_33264[(2)]);
var state_33264__$1 = (function (){var statearr_33278 = state_33264;
(statearr_33278[(10)] = inst_33239);

return statearr_33278;
})();
var statearr_33279_33340 = state_33264__$1;
(statearr_33279_33340[(2)] = null);

(statearr_33279_33340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (9))){
var state_33264__$1 = state_33264;
var statearr_33280_33341 = state_33264__$1;
(statearr_33280_33341[(2)] = null);

(statearr_33280_33341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (5))){
var state_33264__$1 = state_33264;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33281_33342 = state_33264__$1;
(statearr_33281_33342[(1)] = (8));

} else {
var statearr_33282_33343 = state_33264__$1;
(statearr_33282_33343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (14))){
var inst_33244 = (state_33264[(11)]);
var inst_33242 = (state_33264[(8)]);
var inst_33242__$1 = (state_33264[(2)]);
var inst_33243 = (inst_33242__$1 == null);
var inst_33244__$1 = cljs.core.not.call(null,inst_33243);
var state_33264__$1 = (function (){var statearr_33283 = state_33264;
(statearr_33283[(11)] = inst_33244__$1);

(statearr_33283[(8)] = inst_33242__$1);

return statearr_33283;
})();
if(inst_33244__$1){
var statearr_33284_33344 = state_33264__$1;
(statearr_33284_33344[(1)] = (15));

} else {
var statearr_33285_33345 = state_33264__$1;
(statearr_33285_33345[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (16))){
var inst_33244 = (state_33264[(11)]);
var state_33264__$1 = state_33264;
var statearr_33286_33346 = state_33264__$1;
(statearr_33286_33346[(2)] = inst_33244);

(statearr_33286_33346[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (10))){
var inst_33236 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33287_33347 = state_33264__$1;
(statearr_33287_33347[(2)] = inst_33236);

(statearr_33287_33347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (18))){
var inst_33247 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33288_33348 = state_33264__$1;
(statearr_33288_33348[(2)] = inst_33247);

(statearr_33288_33348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (8))){
var inst_33233 = cljs.core.async.close_BANG_.call(null,to);
var state_33264__$1 = state_33264;
var statearr_33289_33349 = state_33264__$1;
(statearr_33289_33349[(2)] = inst_33233);

(statearr_33289_33349[(1)] = (10));


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
var statearr_33290 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33290[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__);

(statearr_33290[(1)] = (1));

return statearr_33290;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1 = (function (state_33264){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_33264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e33291){if((e33291 instanceof Object)){
var ex__32872__auto__ = e33291;
var statearr_33292_33350 = state_33264;
(statearr_33292_33350[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33351 = state_33264;
state_33264 = G__33351;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__ = function(state_33264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1.call(this,state_33264);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__,jobs,results,process,async))
})();
var state__32960__auto__ = (function (){var statearr_33293 = f__32959__auto__.call(null);
(statearr_33293[(6)] = c__32958__auto__);

return statearr_33293;
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
var G__33353 = arguments.length;
switch (G__33353) {
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
var G__33356 = arguments.length;
switch (G__33356) {
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
var G__33359 = arguments.length;
switch (G__33359) {
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
var c__32958__auto___33408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___33408,tc,fc){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___33408,tc,fc){
return (function (state_33385){
var state_val_33386 = (state_33385[(1)]);
if((state_val_33386 === (7))){
var inst_33381 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33387_33409 = state_33385__$1;
(statearr_33387_33409[(2)] = inst_33381);

(statearr_33387_33409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (1))){
var state_33385__$1 = state_33385;
var statearr_33388_33410 = state_33385__$1;
(statearr_33388_33410[(2)] = null);

(statearr_33388_33410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (4))){
var inst_33362 = (state_33385[(7)]);
var inst_33362__$1 = (state_33385[(2)]);
var inst_33363 = (inst_33362__$1 == null);
var state_33385__$1 = (function (){var statearr_33389 = state_33385;
(statearr_33389[(7)] = inst_33362__$1);

return statearr_33389;
})();
if(cljs.core.truth_(inst_33363)){
var statearr_33390_33411 = state_33385__$1;
(statearr_33390_33411[(1)] = (5));

} else {
var statearr_33391_33412 = state_33385__$1;
(statearr_33391_33412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (13))){
var state_33385__$1 = state_33385;
var statearr_33392_33413 = state_33385__$1;
(statearr_33392_33413[(2)] = null);

(statearr_33392_33413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (6))){
var inst_33362 = (state_33385[(7)]);
var inst_33368 = p.call(null,inst_33362);
var state_33385__$1 = state_33385;
if(cljs.core.truth_(inst_33368)){
var statearr_33393_33414 = state_33385__$1;
(statearr_33393_33414[(1)] = (9));

} else {
var statearr_33394_33415 = state_33385__$1;
(statearr_33394_33415[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (3))){
var inst_33383 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33385__$1,inst_33383);
} else {
if((state_val_33386 === (12))){
var state_33385__$1 = state_33385;
var statearr_33395_33416 = state_33385__$1;
(statearr_33395_33416[(2)] = null);

(statearr_33395_33416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (2))){
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33385__$1,(4),ch);
} else {
if((state_val_33386 === (11))){
var inst_33362 = (state_33385[(7)]);
var inst_33372 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33385__$1,(8),inst_33372,inst_33362);
} else {
if((state_val_33386 === (9))){
var state_33385__$1 = state_33385;
var statearr_33396_33417 = state_33385__$1;
(statearr_33396_33417[(2)] = tc);

(statearr_33396_33417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (5))){
var inst_33365 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33366 = cljs.core.async.close_BANG_.call(null,fc);
var state_33385__$1 = (function (){var statearr_33397 = state_33385;
(statearr_33397[(8)] = inst_33365);

return statearr_33397;
})();
var statearr_33398_33418 = state_33385__$1;
(statearr_33398_33418[(2)] = inst_33366);

(statearr_33398_33418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (14))){
var inst_33379 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33399_33419 = state_33385__$1;
(statearr_33399_33419[(2)] = inst_33379);

(statearr_33399_33419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (10))){
var state_33385__$1 = state_33385;
var statearr_33400_33420 = state_33385__$1;
(statearr_33400_33420[(2)] = fc);

(statearr_33400_33420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (8))){
var inst_33374 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
if(cljs.core.truth_(inst_33374)){
var statearr_33401_33421 = state_33385__$1;
(statearr_33401_33421[(1)] = (12));

} else {
var statearr_33402_33422 = state_33385__$1;
(statearr_33402_33422[(1)] = (13));

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
});})(c__32958__auto___33408,tc,fc))
;
return ((function (switch__32868__auto__,c__32958__auto___33408,tc,fc){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_33403 = [null,null,null,null,null,null,null,null,null];
(statearr_33403[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_33403[(1)] = (1));

return statearr_33403;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_33385){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_33385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e33404){if((e33404 instanceof Object)){
var ex__32872__auto__ = e33404;
var statearr_33405_33423 = state_33385;
(statearr_33405_33423[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33424 = state_33385;
state_33385 = G__33424;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_33385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_33385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___33408,tc,fc))
})();
var state__32960__auto__ = (function (){var statearr_33406 = f__32959__auto__.call(null);
(statearr_33406[(6)] = c__32958__auto___33408);

return statearr_33406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___33408,tc,fc))
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
return (function (state_33445){
var state_val_33446 = (state_33445[(1)]);
if((state_val_33446 === (7))){
var inst_33441 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
var statearr_33447_33465 = state_33445__$1;
(statearr_33447_33465[(2)] = inst_33441);

(statearr_33447_33465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (1))){
var inst_33425 = init;
var state_33445__$1 = (function (){var statearr_33448 = state_33445;
(statearr_33448[(7)] = inst_33425);

return statearr_33448;
})();
var statearr_33449_33466 = state_33445__$1;
(statearr_33449_33466[(2)] = null);

(statearr_33449_33466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (4))){
var inst_33428 = (state_33445[(8)]);
var inst_33428__$1 = (state_33445[(2)]);
var inst_33429 = (inst_33428__$1 == null);
var state_33445__$1 = (function (){var statearr_33450 = state_33445;
(statearr_33450[(8)] = inst_33428__$1);

return statearr_33450;
})();
if(cljs.core.truth_(inst_33429)){
var statearr_33451_33467 = state_33445__$1;
(statearr_33451_33467[(1)] = (5));

} else {
var statearr_33452_33468 = state_33445__$1;
(statearr_33452_33468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (6))){
var inst_33425 = (state_33445[(7)]);
var inst_33432 = (state_33445[(9)]);
var inst_33428 = (state_33445[(8)]);
var inst_33432__$1 = f.call(null,inst_33425,inst_33428);
var inst_33433 = cljs.core.reduced_QMARK_.call(null,inst_33432__$1);
var state_33445__$1 = (function (){var statearr_33453 = state_33445;
(statearr_33453[(9)] = inst_33432__$1);

return statearr_33453;
})();
if(inst_33433){
var statearr_33454_33469 = state_33445__$1;
(statearr_33454_33469[(1)] = (8));

} else {
var statearr_33455_33470 = state_33445__$1;
(statearr_33455_33470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (3))){
var inst_33443 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33445__$1,inst_33443);
} else {
if((state_val_33446 === (2))){
var state_33445__$1 = state_33445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33445__$1,(4),ch);
} else {
if((state_val_33446 === (9))){
var inst_33432 = (state_33445[(9)]);
var inst_33425 = inst_33432;
var state_33445__$1 = (function (){var statearr_33456 = state_33445;
(statearr_33456[(7)] = inst_33425);

return statearr_33456;
})();
var statearr_33457_33471 = state_33445__$1;
(statearr_33457_33471[(2)] = null);

(statearr_33457_33471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (5))){
var inst_33425 = (state_33445[(7)]);
var state_33445__$1 = state_33445;
var statearr_33458_33472 = state_33445__$1;
(statearr_33458_33472[(2)] = inst_33425);

(statearr_33458_33472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (10))){
var inst_33439 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
var statearr_33459_33473 = state_33445__$1;
(statearr_33459_33473[(2)] = inst_33439);

(statearr_33459_33473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (8))){
var inst_33432 = (state_33445[(9)]);
var inst_33435 = cljs.core.deref.call(null,inst_33432);
var state_33445__$1 = state_33445;
var statearr_33460_33474 = state_33445__$1;
(statearr_33460_33474[(2)] = inst_33435);

(statearr_33460_33474[(1)] = (10));


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
var statearr_33461 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33461[(0)] = cljs$core$async$reduce_$_state_machine__32869__auto__);

(statearr_33461[(1)] = (1));

return statearr_33461;
});
var cljs$core$async$reduce_$_state_machine__32869__auto____1 = (function (state_33445){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_33445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e33462){if((e33462 instanceof Object)){
var ex__32872__auto__ = e33462;
var statearr_33463_33475 = state_33445;
(statearr_33463_33475[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33476 = state_33445;
state_33445 = G__33476;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32869__auto__ = function(state_33445){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32869__auto____1.call(this,state_33445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32869__auto____0;
cljs$core$async$reduce_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32869__auto____1;
return cljs$core$async$reduce_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__))
})();
var state__32960__auto__ = (function (){var statearr_33464 = f__32959__auto__.call(null);
(statearr_33464[(6)] = c__32958__auto__);

return statearr_33464;
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
return (function (state_33482){
var state_val_33483 = (state_33482[(1)]);
if((state_val_33483 === (1))){
var inst_33477 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33482__$1 = state_33482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33482__$1,(2),inst_33477);
} else {
if((state_val_33483 === (2))){
var inst_33479 = (state_33482[(2)]);
var inst_33480 = f__$1.call(null,inst_33479);
var state_33482__$1 = state_33482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33482__$1,inst_33480);
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
var statearr_33484 = [null,null,null,null,null,null,null];
(statearr_33484[(0)] = cljs$core$async$transduce_$_state_machine__32869__auto__);

(statearr_33484[(1)] = (1));

return statearr_33484;
});
var cljs$core$async$transduce_$_state_machine__32869__auto____1 = (function (state_33482){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_33482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e33485){if((e33485 instanceof Object)){
var ex__32872__auto__ = e33485;
var statearr_33486_33488 = state_33482;
(statearr_33486_33488[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33489 = state_33482;
state_33482 = G__33489;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32869__auto__ = function(state_33482){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32869__auto____1.call(this,state_33482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32869__auto____0;
cljs$core$async$transduce_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32869__auto____1;
return cljs$core$async$transduce_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__,f__$1))
})();
var state__32960__auto__ = (function (){var statearr_33487 = f__32959__auto__.call(null);
(statearr_33487[(6)] = c__32958__auto__);

return statearr_33487;
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
var G__33491 = arguments.length;
switch (G__33491) {
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
return (function (state_33516){
var state_val_33517 = (state_33516[(1)]);
if((state_val_33517 === (7))){
var inst_33498 = (state_33516[(2)]);
var state_33516__$1 = state_33516;
var statearr_33518_33539 = state_33516__$1;
(statearr_33518_33539[(2)] = inst_33498);

(statearr_33518_33539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (1))){
var inst_33492 = cljs.core.seq.call(null,coll);
var inst_33493 = inst_33492;
var state_33516__$1 = (function (){var statearr_33519 = state_33516;
(statearr_33519[(7)] = inst_33493);

return statearr_33519;
})();
var statearr_33520_33540 = state_33516__$1;
(statearr_33520_33540[(2)] = null);

(statearr_33520_33540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (4))){
var inst_33493 = (state_33516[(7)]);
var inst_33496 = cljs.core.first.call(null,inst_33493);
var state_33516__$1 = state_33516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33516__$1,(7),ch,inst_33496);
} else {
if((state_val_33517 === (13))){
var inst_33510 = (state_33516[(2)]);
var state_33516__$1 = state_33516;
var statearr_33521_33541 = state_33516__$1;
(statearr_33521_33541[(2)] = inst_33510);

(statearr_33521_33541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (6))){
var inst_33501 = (state_33516[(2)]);
var state_33516__$1 = state_33516;
if(cljs.core.truth_(inst_33501)){
var statearr_33522_33542 = state_33516__$1;
(statearr_33522_33542[(1)] = (8));

} else {
var statearr_33523_33543 = state_33516__$1;
(statearr_33523_33543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (3))){
var inst_33514 = (state_33516[(2)]);
var state_33516__$1 = state_33516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33516__$1,inst_33514);
} else {
if((state_val_33517 === (12))){
var state_33516__$1 = state_33516;
var statearr_33524_33544 = state_33516__$1;
(statearr_33524_33544[(2)] = null);

(statearr_33524_33544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (2))){
var inst_33493 = (state_33516[(7)]);
var state_33516__$1 = state_33516;
if(cljs.core.truth_(inst_33493)){
var statearr_33525_33545 = state_33516__$1;
(statearr_33525_33545[(1)] = (4));

} else {
var statearr_33526_33546 = state_33516__$1;
(statearr_33526_33546[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (11))){
var inst_33507 = cljs.core.async.close_BANG_.call(null,ch);
var state_33516__$1 = state_33516;
var statearr_33527_33547 = state_33516__$1;
(statearr_33527_33547[(2)] = inst_33507);

(statearr_33527_33547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (9))){
var state_33516__$1 = state_33516;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33528_33548 = state_33516__$1;
(statearr_33528_33548[(1)] = (11));

} else {
var statearr_33529_33549 = state_33516__$1;
(statearr_33529_33549[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (5))){
var inst_33493 = (state_33516[(7)]);
var state_33516__$1 = state_33516;
var statearr_33530_33550 = state_33516__$1;
(statearr_33530_33550[(2)] = inst_33493);

(statearr_33530_33550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (10))){
var inst_33512 = (state_33516[(2)]);
var state_33516__$1 = state_33516;
var statearr_33531_33551 = state_33516__$1;
(statearr_33531_33551[(2)] = inst_33512);

(statearr_33531_33551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33517 === (8))){
var inst_33493 = (state_33516[(7)]);
var inst_33503 = cljs.core.next.call(null,inst_33493);
var inst_33493__$1 = inst_33503;
var state_33516__$1 = (function (){var statearr_33532 = state_33516;
(statearr_33532[(7)] = inst_33493__$1);

return statearr_33532;
})();
var statearr_33533_33552 = state_33516__$1;
(statearr_33533_33552[(2)] = null);

(statearr_33533_33552[(1)] = (2));


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
var statearr_33534 = [null,null,null,null,null,null,null,null];
(statearr_33534[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_33534[(1)] = (1));

return statearr_33534;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_33516){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_33516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e33535){if((e33535 instanceof Object)){
var ex__32872__auto__ = e33535;
var statearr_33536_33553 = state_33516;
(statearr_33536_33553[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33554 = state_33516;
state_33516 = G__33554;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_33516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_33516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__))
})();
var state__32960__auto__ = (function (){var statearr_33537 = f__32959__auto__.call(null);
(statearr_33537[(6)] = c__32958__auto__);

return statearr_33537;
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
if(typeof cljs.core.async.t_cljs$core$async33555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33555 = (function (ch,cs,meta33556){
this.ch = ch;
this.cs = cs;
this.meta33556 = meta33556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33557,meta33556__$1){
var self__ = this;
var _33557__$1 = this;
return (new cljs.core.async.t_cljs$core$async33555(self__.ch,self__.cs,meta33556__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33557){
var self__ = this;
var _33557__$1 = this;
return self__.meta33556;
});})(cs))
;

cljs.core.async.t_cljs$core$async33555.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33555.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33555.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33555.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33555.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33555.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33556","meta33556",-319691331,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33555";

cljs.core.async.t_cljs$core$async33555.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async33555");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33555 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33555(ch__$1,cs__$1,meta33556){
return (new cljs.core.async.t_cljs$core$async33555(ch__$1,cs__$1,meta33556));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33555(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32958__auto___33777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___33777,cs,m,dchan,dctr,done){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___33777,cs,m,dchan,dctr,done){
return (function (state_33692){
var state_val_33693 = (state_33692[(1)]);
if((state_val_33693 === (7))){
var inst_33688 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33694_33778 = state_33692__$1;
(statearr_33694_33778[(2)] = inst_33688);

(statearr_33694_33778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (20))){
var inst_33591 = (state_33692[(7)]);
var inst_33603 = cljs.core.first.call(null,inst_33591);
var inst_33604 = cljs.core.nth.call(null,inst_33603,(0),null);
var inst_33605 = cljs.core.nth.call(null,inst_33603,(1),null);
var state_33692__$1 = (function (){var statearr_33695 = state_33692;
(statearr_33695[(8)] = inst_33604);

return statearr_33695;
})();
if(cljs.core.truth_(inst_33605)){
var statearr_33696_33779 = state_33692__$1;
(statearr_33696_33779[(1)] = (22));

} else {
var statearr_33697_33780 = state_33692__$1;
(statearr_33697_33780[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (27))){
var inst_33635 = (state_33692[(9)]);
var inst_33633 = (state_33692[(10)]);
var inst_33640 = (state_33692[(11)]);
var inst_33560 = (state_33692[(12)]);
var inst_33640__$1 = cljs.core._nth.call(null,inst_33633,inst_33635);
var inst_33641 = cljs.core.async.put_BANG_.call(null,inst_33640__$1,inst_33560,done);
var state_33692__$1 = (function (){var statearr_33698 = state_33692;
(statearr_33698[(11)] = inst_33640__$1);

return statearr_33698;
})();
if(cljs.core.truth_(inst_33641)){
var statearr_33699_33781 = state_33692__$1;
(statearr_33699_33781[(1)] = (30));

} else {
var statearr_33700_33782 = state_33692__$1;
(statearr_33700_33782[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (1))){
var state_33692__$1 = state_33692;
var statearr_33701_33783 = state_33692__$1;
(statearr_33701_33783[(2)] = null);

(statearr_33701_33783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (24))){
var inst_33591 = (state_33692[(7)]);
var inst_33610 = (state_33692[(2)]);
var inst_33611 = cljs.core.next.call(null,inst_33591);
var inst_33569 = inst_33611;
var inst_33570 = null;
var inst_33571 = (0);
var inst_33572 = (0);
var state_33692__$1 = (function (){var statearr_33702 = state_33692;
(statearr_33702[(13)] = inst_33570);

(statearr_33702[(14)] = inst_33610);

(statearr_33702[(15)] = inst_33571);

(statearr_33702[(16)] = inst_33572);

(statearr_33702[(17)] = inst_33569);

return statearr_33702;
})();
var statearr_33703_33784 = state_33692__$1;
(statearr_33703_33784[(2)] = null);

(statearr_33703_33784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (39))){
var state_33692__$1 = state_33692;
var statearr_33707_33785 = state_33692__$1;
(statearr_33707_33785[(2)] = null);

(statearr_33707_33785[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (4))){
var inst_33560 = (state_33692[(12)]);
var inst_33560__$1 = (state_33692[(2)]);
var inst_33561 = (inst_33560__$1 == null);
var state_33692__$1 = (function (){var statearr_33708 = state_33692;
(statearr_33708[(12)] = inst_33560__$1);

return statearr_33708;
})();
if(cljs.core.truth_(inst_33561)){
var statearr_33709_33786 = state_33692__$1;
(statearr_33709_33786[(1)] = (5));

} else {
var statearr_33710_33787 = state_33692__$1;
(statearr_33710_33787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (15))){
var inst_33570 = (state_33692[(13)]);
var inst_33571 = (state_33692[(15)]);
var inst_33572 = (state_33692[(16)]);
var inst_33569 = (state_33692[(17)]);
var inst_33587 = (state_33692[(2)]);
var inst_33588 = (inst_33572 + (1));
var tmp33704 = inst_33570;
var tmp33705 = inst_33571;
var tmp33706 = inst_33569;
var inst_33569__$1 = tmp33706;
var inst_33570__$1 = tmp33704;
var inst_33571__$1 = tmp33705;
var inst_33572__$1 = inst_33588;
var state_33692__$1 = (function (){var statearr_33711 = state_33692;
(statearr_33711[(13)] = inst_33570__$1);

(statearr_33711[(15)] = inst_33571__$1);

(statearr_33711[(18)] = inst_33587);

(statearr_33711[(16)] = inst_33572__$1);

(statearr_33711[(17)] = inst_33569__$1);

return statearr_33711;
})();
var statearr_33712_33788 = state_33692__$1;
(statearr_33712_33788[(2)] = null);

(statearr_33712_33788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (21))){
var inst_33614 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33716_33789 = state_33692__$1;
(statearr_33716_33789[(2)] = inst_33614);

(statearr_33716_33789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (31))){
var inst_33640 = (state_33692[(11)]);
var inst_33644 = done.call(null,null);
var inst_33645 = cljs.core.async.untap_STAR_.call(null,m,inst_33640);
var state_33692__$1 = (function (){var statearr_33717 = state_33692;
(statearr_33717[(19)] = inst_33644);

return statearr_33717;
})();
var statearr_33718_33790 = state_33692__$1;
(statearr_33718_33790[(2)] = inst_33645);

(statearr_33718_33790[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (32))){
var inst_33635 = (state_33692[(9)]);
var inst_33632 = (state_33692[(20)]);
var inst_33633 = (state_33692[(10)]);
var inst_33634 = (state_33692[(21)]);
var inst_33647 = (state_33692[(2)]);
var inst_33648 = (inst_33635 + (1));
var tmp33713 = inst_33632;
var tmp33714 = inst_33633;
var tmp33715 = inst_33634;
var inst_33632__$1 = tmp33713;
var inst_33633__$1 = tmp33714;
var inst_33634__$1 = tmp33715;
var inst_33635__$1 = inst_33648;
var state_33692__$1 = (function (){var statearr_33719 = state_33692;
(statearr_33719[(9)] = inst_33635__$1);

(statearr_33719[(22)] = inst_33647);

(statearr_33719[(20)] = inst_33632__$1);

(statearr_33719[(10)] = inst_33633__$1);

(statearr_33719[(21)] = inst_33634__$1);

return statearr_33719;
})();
var statearr_33720_33791 = state_33692__$1;
(statearr_33720_33791[(2)] = null);

(statearr_33720_33791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (40))){
var inst_33660 = (state_33692[(23)]);
var inst_33664 = done.call(null,null);
var inst_33665 = cljs.core.async.untap_STAR_.call(null,m,inst_33660);
var state_33692__$1 = (function (){var statearr_33721 = state_33692;
(statearr_33721[(24)] = inst_33664);

return statearr_33721;
})();
var statearr_33722_33792 = state_33692__$1;
(statearr_33722_33792[(2)] = inst_33665);

(statearr_33722_33792[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (33))){
var inst_33651 = (state_33692[(25)]);
var inst_33653 = cljs.core.chunked_seq_QMARK_.call(null,inst_33651);
var state_33692__$1 = state_33692;
if(inst_33653){
var statearr_33723_33793 = state_33692__$1;
(statearr_33723_33793[(1)] = (36));

} else {
var statearr_33724_33794 = state_33692__$1;
(statearr_33724_33794[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (13))){
var inst_33581 = (state_33692[(26)]);
var inst_33584 = cljs.core.async.close_BANG_.call(null,inst_33581);
var state_33692__$1 = state_33692;
var statearr_33725_33795 = state_33692__$1;
(statearr_33725_33795[(2)] = inst_33584);

(statearr_33725_33795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (22))){
var inst_33604 = (state_33692[(8)]);
var inst_33607 = cljs.core.async.close_BANG_.call(null,inst_33604);
var state_33692__$1 = state_33692;
var statearr_33726_33796 = state_33692__$1;
(statearr_33726_33796[(2)] = inst_33607);

(statearr_33726_33796[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (36))){
var inst_33651 = (state_33692[(25)]);
var inst_33655 = cljs.core.chunk_first.call(null,inst_33651);
var inst_33656 = cljs.core.chunk_rest.call(null,inst_33651);
var inst_33657 = cljs.core.count.call(null,inst_33655);
var inst_33632 = inst_33656;
var inst_33633 = inst_33655;
var inst_33634 = inst_33657;
var inst_33635 = (0);
var state_33692__$1 = (function (){var statearr_33727 = state_33692;
(statearr_33727[(9)] = inst_33635);

(statearr_33727[(20)] = inst_33632);

(statearr_33727[(10)] = inst_33633);

(statearr_33727[(21)] = inst_33634);

return statearr_33727;
})();
var statearr_33728_33797 = state_33692__$1;
(statearr_33728_33797[(2)] = null);

(statearr_33728_33797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (41))){
var inst_33651 = (state_33692[(25)]);
var inst_33667 = (state_33692[(2)]);
var inst_33668 = cljs.core.next.call(null,inst_33651);
var inst_33632 = inst_33668;
var inst_33633 = null;
var inst_33634 = (0);
var inst_33635 = (0);
var state_33692__$1 = (function (){var statearr_33729 = state_33692;
(statearr_33729[(27)] = inst_33667);

(statearr_33729[(9)] = inst_33635);

(statearr_33729[(20)] = inst_33632);

(statearr_33729[(10)] = inst_33633);

(statearr_33729[(21)] = inst_33634);

return statearr_33729;
})();
var statearr_33730_33798 = state_33692__$1;
(statearr_33730_33798[(2)] = null);

(statearr_33730_33798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (43))){
var state_33692__$1 = state_33692;
var statearr_33731_33799 = state_33692__$1;
(statearr_33731_33799[(2)] = null);

(statearr_33731_33799[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (29))){
var inst_33676 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33732_33800 = state_33692__$1;
(statearr_33732_33800[(2)] = inst_33676);

(statearr_33732_33800[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (44))){
var inst_33685 = (state_33692[(2)]);
var state_33692__$1 = (function (){var statearr_33733 = state_33692;
(statearr_33733[(28)] = inst_33685);

return statearr_33733;
})();
var statearr_33734_33801 = state_33692__$1;
(statearr_33734_33801[(2)] = null);

(statearr_33734_33801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (6))){
var inst_33624 = (state_33692[(29)]);
var inst_33623 = cljs.core.deref.call(null,cs);
var inst_33624__$1 = cljs.core.keys.call(null,inst_33623);
var inst_33625 = cljs.core.count.call(null,inst_33624__$1);
var inst_33626 = cljs.core.reset_BANG_.call(null,dctr,inst_33625);
var inst_33631 = cljs.core.seq.call(null,inst_33624__$1);
var inst_33632 = inst_33631;
var inst_33633 = null;
var inst_33634 = (0);
var inst_33635 = (0);
var state_33692__$1 = (function (){var statearr_33735 = state_33692;
(statearr_33735[(9)] = inst_33635);

(statearr_33735[(30)] = inst_33626);

(statearr_33735[(20)] = inst_33632);

(statearr_33735[(29)] = inst_33624__$1);

(statearr_33735[(10)] = inst_33633);

(statearr_33735[(21)] = inst_33634);

return statearr_33735;
})();
var statearr_33736_33802 = state_33692__$1;
(statearr_33736_33802[(2)] = null);

(statearr_33736_33802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (28))){
var inst_33632 = (state_33692[(20)]);
var inst_33651 = (state_33692[(25)]);
var inst_33651__$1 = cljs.core.seq.call(null,inst_33632);
var state_33692__$1 = (function (){var statearr_33737 = state_33692;
(statearr_33737[(25)] = inst_33651__$1);

return statearr_33737;
})();
if(inst_33651__$1){
var statearr_33738_33803 = state_33692__$1;
(statearr_33738_33803[(1)] = (33));

} else {
var statearr_33739_33804 = state_33692__$1;
(statearr_33739_33804[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (25))){
var inst_33635 = (state_33692[(9)]);
var inst_33634 = (state_33692[(21)]);
var inst_33637 = (inst_33635 < inst_33634);
var inst_33638 = inst_33637;
var state_33692__$1 = state_33692;
if(cljs.core.truth_(inst_33638)){
var statearr_33740_33805 = state_33692__$1;
(statearr_33740_33805[(1)] = (27));

} else {
var statearr_33741_33806 = state_33692__$1;
(statearr_33741_33806[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (34))){
var state_33692__$1 = state_33692;
var statearr_33742_33807 = state_33692__$1;
(statearr_33742_33807[(2)] = null);

(statearr_33742_33807[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (17))){
var state_33692__$1 = state_33692;
var statearr_33743_33808 = state_33692__$1;
(statearr_33743_33808[(2)] = null);

(statearr_33743_33808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (3))){
var inst_33690 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33692__$1,inst_33690);
} else {
if((state_val_33693 === (12))){
var inst_33619 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33744_33809 = state_33692__$1;
(statearr_33744_33809[(2)] = inst_33619);

(statearr_33744_33809[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (2))){
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33692__$1,(4),ch);
} else {
if((state_val_33693 === (23))){
var state_33692__$1 = state_33692;
var statearr_33745_33810 = state_33692__$1;
(statearr_33745_33810[(2)] = null);

(statearr_33745_33810[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (35))){
var inst_33674 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33746_33811 = state_33692__$1;
(statearr_33746_33811[(2)] = inst_33674);

(statearr_33746_33811[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (19))){
var inst_33591 = (state_33692[(7)]);
var inst_33595 = cljs.core.chunk_first.call(null,inst_33591);
var inst_33596 = cljs.core.chunk_rest.call(null,inst_33591);
var inst_33597 = cljs.core.count.call(null,inst_33595);
var inst_33569 = inst_33596;
var inst_33570 = inst_33595;
var inst_33571 = inst_33597;
var inst_33572 = (0);
var state_33692__$1 = (function (){var statearr_33747 = state_33692;
(statearr_33747[(13)] = inst_33570);

(statearr_33747[(15)] = inst_33571);

(statearr_33747[(16)] = inst_33572);

(statearr_33747[(17)] = inst_33569);

return statearr_33747;
})();
var statearr_33748_33812 = state_33692__$1;
(statearr_33748_33812[(2)] = null);

(statearr_33748_33812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (11))){
var inst_33569 = (state_33692[(17)]);
var inst_33591 = (state_33692[(7)]);
var inst_33591__$1 = cljs.core.seq.call(null,inst_33569);
var state_33692__$1 = (function (){var statearr_33749 = state_33692;
(statearr_33749[(7)] = inst_33591__$1);

return statearr_33749;
})();
if(inst_33591__$1){
var statearr_33750_33813 = state_33692__$1;
(statearr_33750_33813[(1)] = (16));

} else {
var statearr_33751_33814 = state_33692__$1;
(statearr_33751_33814[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (9))){
var inst_33621 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33752_33815 = state_33692__$1;
(statearr_33752_33815[(2)] = inst_33621);

(statearr_33752_33815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (5))){
var inst_33567 = cljs.core.deref.call(null,cs);
var inst_33568 = cljs.core.seq.call(null,inst_33567);
var inst_33569 = inst_33568;
var inst_33570 = null;
var inst_33571 = (0);
var inst_33572 = (0);
var state_33692__$1 = (function (){var statearr_33753 = state_33692;
(statearr_33753[(13)] = inst_33570);

(statearr_33753[(15)] = inst_33571);

(statearr_33753[(16)] = inst_33572);

(statearr_33753[(17)] = inst_33569);

return statearr_33753;
})();
var statearr_33754_33816 = state_33692__$1;
(statearr_33754_33816[(2)] = null);

(statearr_33754_33816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (14))){
var state_33692__$1 = state_33692;
var statearr_33755_33817 = state_33692__$1;
(statearr_33755_33817[(2)] = null);

(statearr_33755_33817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (45))){
var inst_33682 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33756_33818 = state_33692__$1;
(statearr_33756_33818[(2)] = inst_33682);

(statearr_33756_33818[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (26))){
var inst_33624 = (state_33692[(29)]);
var inst_33678 = (state_33692[(2)]);
var inst_33679 = cljs.core.seq.call(null,inst_33624);
var state_33692__$1 = (function (){var statearr_33757 = state_33692;
(statearr_33757[(31)] = inst_33678);

return statearr_33757;
})();
if(inst_33679){
var statearr_33758_33819 = state_33692__$1;
(statearr_33758_33819[(1)] = (42));

} else {
var statearr_33759_33820 = state_33692__$1;
(statearr_33759_33820[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (16))){
var inst_33591 = (state_33692[(7)]);
var inst_33593 = cljs.core.chunked_seq_QMARK_.call(null,inst_33591);
var state_33692__$1 = state_33692;
if(inst_33593){
var statearr_33760_33821 = state_33692__$1;
(statearr_33760_33821[(1)] = (19));

} else {
var statearr_33761_33822 = state_33692__$1;
(statearr_33761_33822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (38))){
var inst_33671 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33762_33823 = state_33692__$1;
(statearr_33762_33823[(2)] = inst_33671);

(statearr_33762_33823[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (30))){
var state_33692__$1 = state_33692;
var statearr_33763_33824 = state_33692__$1;
(statearr_33763_33824[(2)] = null);

(statearr_33763_33824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (10))){
var inst_33570 = (state_33692[(13)]);
var inst_33572 = (state_33692[(16)]);
var inst_33580 = cljs.core._nth.call(null,inst_33570,inst_33572);
var inst_33581 = cljs.core.nth.call(null,inst_33580,(0),null);
var inst_33582 = cljs.core.nth.call(null,inst_33580,(1),null);
var state_33692__$1 = (function (){var statearr_33764 = state_33692;
(statearr_33764[(26)] = inst_33581);

return statearr_33764;
})();
if(cljs.core.truth_(inst_33582)){
var statearr_33765_33825 = state_33692__$1;
(statearr_33765_33825[(1)] = (13));

} else {
var statearr_33766_33826 = state_33692__$1;
(statearr_33766_33826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (18))){
var inst_33617 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33767_33827 = state_33692__$1;
(statearr_33767_33827[(2)] = inst_33617);

(statearr_33767_33827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (42))){
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33692__$1,(45),dchan);
} else {
if((state_val_33693 === (37))){
var inst_33660 = (state_33692[(23)]);
var inst_33651 = (state_33692[(25)]);
var inst_33560 = (state_33692[(12)]);
var inst_33660__$1 = cljs.core.first.call(null,inst_33651);
var inst_33661 = cljs.core.async.put_BANG_.call(null,inst_33660__$1,inst_33560,done);
var state_33692__$1 = (function (){var statearr_33768 = state_33692;
(statearr_33768[(23)] = inst_33660__$1);

return statearr_33768;
})();
if(cljs.core.truth_(inst_33661)){
var statearr_33769_33828 = state_33692__$1;
(statearr_33769_33828[(1)] = (39));

} else {
var statearr_33770_33829 = state_33692__$1;
(statearr_33770_33829[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (8))){
var inst_33571 = (state_33692[(15)]);
var inst_33572 = (state_33692[(16)]);
var inst_33574 = (inst_33572 < inst_33571);
var inst_33575 = inst_33574;
var state_33692__$1 = state_33692;
if(cljs.core.truth_(inst_33575)){
var statearr_33771_33830 = state_33692__$1;
(statearr_33771_33830[(1)] = (10));

} else {
var statearr_33772_33831 = state_33692__$1;
(statearr_33772_33831[(1)] = (11));

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
});})(c__32958__auto___33777,cs,m,dchan,dctr,done))
;
return ((function (switch__32868__auto__,c__32958__auto___33777,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32869__auto__ = null;
var cljs$core$async$mult_$_state_machine__32869__auto____0 = (function (){
var statearr_33773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33773[(0)] = cljs$core$async$mult_$_state_machine__32869__auto__);

(statearr_33773[(1)] = (1));

return statearr_33773;
});
var cljs$core$async$mult_$_state_machine__32869__auto____1 = (function (state_33692){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_33692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e33774){if((e33774 instanceof Object)){
var ex__32872__auto__ = e33774;
var statearr_33775_33832 = state_33692;
(statearr_33775_33832[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33833 = state_33692;
state_33692 = G__33833;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32869__auto__ = function(state_33692){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32869__auto____1.call(this,state_33692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32869__auto____0;
cljs$core$async$mult_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32869__auto____1;
return cljs$core$async$mult_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___33777,cs,m,dchan,dctr,done))
})();
var state__32960__auto__ = (function (){var statearr_33776 = f__32959__auto__.call(null);
(statearr_33776[(6)] = c__32958__auto___33777);

return statearr_33776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___33777,cs,m,dchan,dctr,done))
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
var G__33835 = arguments.length;
switch (G__33835) {
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
var len__29802__auto___33847 = arguments.length;
var i__29803__auto___33848 = (0);
while(true){
if((i__29803__auto___33848 < len__29802__auto___33847)){
args__29809__auto__.push((arguments[i__29803__auto___33848]));

var G__33849 = (i__29803__auto___33848 + (1));
i__29803__auto___33848 = G__33849;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((3) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29810__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33841){
var map__33842 = p__33841;
var map__33842__$1 = ((((!((map__33842 == null)))?((((map__33842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33842):map__33842);
var opts = map__33842__$1;
var statearr_33844_33850 = state;
(statearr_33844_33850[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__33842,map__33842__$1,opts){
return (function (val){
var statearr_33845_33851 = state;
(statearr_33845_33851[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33842,map__33842__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_33846_33852 = state;
(statearr_33846_33852[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33837){
var G__33838 = cljs.core.first.call(null,seq33837);
var seq33837__$1 = cljs.core.next.call(null,seq33837);
var G__33839 = cljs.core.first.call(null,seq33837__$1);
var seq33837__$2 = cljs.core.next.call(null,seq33837__$1);
var G__33840 = cljs.core.first.call(null,seq33837__$2);
var seq33837__$3 = cljs.core.next.call(null,seq33837__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33838,G__33839,G__33840,seq33837__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33853 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33853 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33854){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33854 = meta33854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33855,meta33854__$1){
var self__ = this;
var _33855__$1 = this;
return (new cljs.core.async.t_cljs$core$async33853(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33854__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33855){
var self__ = this;
var _33855__$1 = this;
return self__.meta33854;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33853.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33853.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33853.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33853.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33853.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33853.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33853.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33853.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33853.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33854","meta33854",873306966,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33853";

cljs.core.async.t_cljs$core$async33853.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async33853");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33853 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33853(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33854){
return (new cljs.core.async.t_cljs$core$async33853(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33854));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33853(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32958__auto___34017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___34017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___34017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33957){
var state_val_33958 = (state_33957[(1)]);
if((state_val_33958 === (7))){
var inst_33872 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
var statearr_33959_34018 = state_33957__$1;
(statearr_33959_34018[(2)] = inst_33872);

(statearr_33959_34018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (20))){
var inst_33884 = (state_33957[(7)]);
var state_33957__$1 = state_33957;
var statearr_33960_34019 = state_33957__$1;
(statearr_33960_34019[(2)] = inst_33884);

(statearr_33960_34019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (27))){
var state_33957__$1 = state_33957;
var statearr_33961_34020 = state_33957__$1;
(statearr_33961_34020[(2)] = null);

(statearr_33961_34020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (1))){
var inst_33859 = (state_33957[(8)]);
var inst_33859__$1 = calc_state.call(null);
var inst_33861 = (inst_33859__$1 == null);
var inst_33862 = cljs.core.not.call(null,inst_33861);
var state_33957__$1 = (function (){var statearr_33962 = state_33957;
(statearr_33962[(8)] = inst_33859__$1);

return statearr_33962;
})();
if(inst_33862){
var statearr_33963_34021 = state_33957__$1;
(statearr_33963_34021[(1)] = (2));

} else {
var statearr_33964_34022 = state_33957__$1;
(statearr_33964_34022[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (24))){
var inst_33931 = (state_33957[(9)]);
var inst_33908 = (state_33957[(10)]);
var inst_33917 = (state_33957[(11)]);
var inst_33931__$1 = inst_33908.call(null,inst_33917);
var state_33957__$1 = (function (){var statearr_33965 = state_33957;
(statearr_33965[(9)] = inst_33931__$1);

return statearr_33965;
})();
if(cljs.core.truth_(inst_33931__$1)){
var statearr_33966_34023 = state_33957__$1;
(statearr_33966_34023[(1)] = (29));

} else {
var statearr_33967_34024 = state_33957__$1;
(statearr_33967_34024[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (4))){
var inst_33875 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
if(cljs.core.truth_(inst_33875)){
var statearr_33968_34025 = state_33957__$1;
(statearr_33968_34025[(1)] = (8));

} else {
var statearr_33969_34026 = state_33957__$1;
(statearr_33969_34026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (15))){
var inst_33902 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
if(cljs.core.truth_(inst_33902)){
var statearr_33970_34027 = state_33957__$1;
(statearr_33970_34027[(1)] = (19));

} else {
var statearr_33971_34028 = state_33957__$1;
(statearr_33971_34028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (21))){
var inst_33907 = (state_33957[(12)]);
var inst_33907__$1 = (state_33957[(2)]);
var inst_33908 = cljs.core.get.call(null,inst_33907__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33909 = cljs.core.get.call(null,inst_33907__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33910 = cljs.core.get.call(null,inst_33907__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33957__$1 = (function (){var statearr_33972 = state_33957;
(statearr_33972[(13)] = inst_33909);

(statearr_33972[(12)] = inst_33907__$1);

(statearr_33972[(10)] = inst_33908);

return statearr_33972;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33957__$1,(22),inst_33910);
} else {
if((state_val_33958 === (31))){
var inst_33939 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
if(cljs.core.truth_(inst_33939)){
var statearr_33973_34029 = state_33957__$1;
(statearr_33973_34029[(1)] = (32));

} else {
var statearr_33974_34030 = state_33957__$1;
(statearr_33974_34030[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (32))){
var inst_33916 = (state_33957[(14)]);
var state_33957__$1 = state_33957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33957__$1,(35),out,inst_33916);
} else {
if((state_val_33958 === (33))){
var inst_33907 = (state_33957[(12)]);
var inst_33884 = inst_33907;
var state_33957__$1 = (function (){var statearr_33975 = state_33957;
(statearr_33975[(7)] = inst_33884);

return statearr_33975;
})();
var statearr_33976_34031 = state_33957__$1;
(statearr_33976_34031[(2)] = null);

(statearr_33976_34031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (13))){
var inst_33884 = (state_33957[(7)]);
var inst_33891 = inst_33884.cljs$lang$protocol_mask$partition0$;
var inst_33892 = (inst_33891 & (64));
var inst_33893 = inst_33884.cljs$core$ISeq$;
var inst_33894 = (cljs.core.PROTOCOL_SENTINEL === inst_33893);
var inst_33895 = (inst_33892) || (inst_33894);
var state_33957__$1 = state_33957;
if(cljs.core.truth_(inst_33895)){
var statearr_33977_34032 = state_33957__$1;
(statearr_33977_34032[(1)] = (16));

} else {
var statearr_33978_34033 = state_33957__$1;
(statearr_33978_34033[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (22))){
var inst_33917 = (state_33957[(11)]);
var inst_33916 = (state_33957[(14)]);
var inst_33915 = (state_33957[(2)]);
var inst_33916__$1 = cljs.core.nth.call(null,inst_33915,(0),null);
var inst_33917__$1 = cljs.core.nth.call(null,inst_33915,(1),null);
var inst_33918 = (inst_33916__$1 == null);
var inst_33919 = cljs.core._EQ_.call(null,inst_33917__$1,change);
var inst_33920 = (inst_33918) || (inst_33919);
var state_33957__$1 = (function (){var statearr_33979 = state_33957;
(statearr_33979[(11)] = inst_33917__$1);

(statearr_33979[(14)] = inst_33916__$1);

return statearr_33979;
})();
if(cljs.core.truth_(inst_33920)){
var statearr_33980_34034 = state_33957__$1;
(statearr_33980_34034[(1)] = (23));

} else {
var statearr_33981_34035 = state_33957__$1;
(statearr_33981_34035[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (36))){
var inst_33907 = (state_33957[(12)]);
var inst_33884 = inst_33907;
var state_33957__$1 = (function (){var statearr_33982 = state_33957;
(statearr_33982[(7)] = inst_33884);

return statearr_33982;
})();
var statearr_33983_34036 = state_33957__$1;
(statearr_33983_34036[(2)] = null);

(statearr_33983_34036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (29))){
var inst_33931 = (state_33957[(9)]);
var state_33957__$1 = state_33957;
var statearr_33984_34037 = state_33957__$1;
(statearr_33984_34037[(2)] = inst_33931);

(statearr_33984_34037[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (6))){
var state_33957__$1 = state_33957;
var statearr_33985_34038 = state_33957__$1;
(statearr_33985_34038[(2)] = false);

(statearr_33985_34038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (28))){
var inst_33927 = (state_33957[(2)]);
var inst_33928 = calc_state.call(null);
var inst_33884 = inst_33928;
var state_33957__$1 = (function (){var statearr_33986 = state_33957;
(statearr_33986[(15)] = inst_33927);

(statearr_33986[(7)] = inst_33884);

return statearr_33986;
})();
var statearr_33987_34039 = state_33957__$1;
(statearr_33987_34039[(2)] = null);

(statearr_33987_34039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (25))){
var inst_33953 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
var statearr_33988_34040 = state_33957__$1;
(statearr_33988_34040[(2)] = inst_33953);

(statearr_33988_34040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (34))){
var inst_33951 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
var statearr_33989_34041 = state_33957__$1;
(statearr_33989_34041[(2)] = inst_33951);

(statearr_33989_34041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (17))){
var state_33957__$1 = state_33957;
var statearr_33990_34042 = state_33957__$1;
(statearr_33990_34042[(2)] = false);

(statearr_33990_34042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (3))){
var state_33957__$1 = state_33957;
var statearr_33991_34043 = state_33957__$1;
(statearr_33991_34043[(2)] = false);

(statearr_33991_34043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (12))){
var inst_33955 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33957__$1,inst_33955);
} else {
if((state_val_33958 === (2))){
var inst_33859 = (state_33957[(8)]);
var inst_33864 = inst_33859.cljs$lang$protocol_mask$partition0$;
var inst_33865 = (inst_33864 & (64));
var inst_33866 = inst_33859.cljs$core$ISeq$;
var inst_33867 = (cljs.core.PROTOCOL_SENTINEL === inst_33866);
var inst_33868 = (inst_33865) || (inst_33867);
var state_33957__$1 = state_33957;
if(cljs.core.truth_(inst_33868)){
var statearr_33992_34044 = state_33957__$1;
(statearr_33992_34044[(1)] = (5));

} else {
var statearr_33993_34045 = state_33957__$1;
(statearr_33993_34045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (23))){
var inst_33916 = (state_33957[(14)]);
var inst_33922 = (inst_33916 == null);
var state_33957__$1 = state_33957;
if(cljs.core.truth_(inst_33922)){
var statearr_33994_34046 = state_33957__$1;
(statearr_33994_34046[(1)] = (26));

} else {
var statearr_33995_34047 = state_33957__$1;
(statearr_33995_34047[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (35))){
var inst_33942 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
if(cljs.core.truth_(inst_33942)){
var statearr_33996_34048 = state_33957__$1;
(statearr_33996_34048[(1)] = (36));

} else {
var statearr_33997_34049 = state_33957__$1;
(statearr_33997_34049[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (19))){
var inst_33884 = (state_33957[(7)]);
var inst_33904 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33884);
var state_33957__$1 = state_33957;
var statearr_33998_34050 = state_33957__$1;
(statearr_33998_34050[(2)] = inst_33904);

(statearr_33998_34050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (11))){
var inst_33884 = (state_33957[(7)]);
var inst_33888 = (inst_33884 == null);
var inst_33889 = cljs.core.not.call(null,inst_33888);
var state_33957__$1 = state_33957;
if(inst_33889){
var statearr_33999_34051 = state_33957__$1;
(statearr_33999_34051[(1)] = (13));

} else {
var statearr_34000_34052 = state_33957__$1;
(statearr_34000_34052[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (9))){
var inst_33859 = (state_33957[(8)]);
var state_33957__$1 = state_33957;
var statearr_34001_34053 = state_33957__$1;
(statearr_34001_34053[(2)] = inst_33859);

(statearr_34001_34053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (5))){
var state_33957__$1 = state_33957;
var statearr_34002_34054 = state_33957__$1;
(statearr_34002_34054[(2)] = true);

(statearr_34002_34054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (14))){
var state_33957__$1 = state_33957;
var statearr_34003_34055 = state_33957__$1;
(statearr_34003_34055[(2)] = false);

(statearr_34003_34055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (26))){
var inst_33917 = (state_33957[(11)]);
var inst_33924 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33917);
var state_33957__$1 = state_33957;
var statearr_34004_34056 = state_33957__$1;
(statearr_34004_34056[(2)] = inst_33924);

(statearr_34004_34056[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (16))){
var state_33957__$1 = state_33957;
var statearr_34005_34057 = state_33957__$1;
(statearr_34005_34057[(2)] = true);

(statearr_34005_34057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (38))){
var inst_33947 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
var statearr_34006_34058 = state_33957__$1;
(statearr_34006_34058[(2)] = inst_33947);

(statearr_34006_34058[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (30))){
var inst_33909 = (state_33957[(13)]);
var inst_33908 = (state_33957[(10)]);
var inst_33917 = (state_33957[(11)]);
var inst_33934 = cljs.core.empty_QMARK_.call(null,inst_33908);
var inst_33935 = inst_33909.call(null,inst_33917);
var inst_33936 = cljs.core.not.call(null,inst_33935);
var inst_33937 = (inst_33934) && (inst_33936);
var state_33957__$1 = state_33957;
var statearr_34007_34059 = state_33957__$1;
(statearr_34007_34059[(2)] = inst_33937);

(statearr_34007_34059[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (10))){
var inst_33859 = (state_33957[(8)]);
var inst_33880 = (state_33957[(2)]);
var inst_33881 = cljs.core.get.call(null,inst_33880,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33882 = cljs.core.get.call(null,inst_33880,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33883 = cljs.core.get.call(null,inst_33880,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33884 = inst_33859;
var state_33957__$1 = (function (){var statearr_34008 = state_33957;
(statearr_34008[(16)] = inst_33883);

(statearr_34008[(17)] = inst_33881);

(statearr_34008[(18)] = inst_33882);

(statearr_34008[(7)] = inst_33884);

return statearr_34008;
})();
var statearr_34009_34060 = state_33957__$1;
(statearr_34009_34060[(2)] = null);

(statearr_34009_34060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (18))){
var inst_33899 = (state_33957[(2)]);
var state_33957__$1 = state_33957;
var statearr_34010_34061 = state_33957__$1;
(statearr_34010_34061[(2)] = inst_33899);

(statearr_34010_34061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (37))){
var state_33957__$1 = state_33957;
var statearr_34011_34062 = state_33957__$1;
(statearr_34011_34062[(2)] = null);

(statearr_34011_34062[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33958 === (8))){
var inst_33859 = (state_33957[(8)]);
var inst_33877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33859);
var state_33957__$1 = state_33957;
var statearr_34012_34063 = state_33957__$1;
(statearr_34012_34063[(2)] = inst_33877);

(statearr_34012_34063[(1)] = (10));


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
});})(c__32958__auto___34017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32868__auto__,c__32958__auto___34017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32869__auto__ = null;
var cljs$core$async$mix_$_state_machine__32869__auto____0 = (function (){
var statearr_34013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34013[(0)] = cljs$core$async$mix_$_state_machine__32869__auto__);

(statearr_34013[(1)] = (1));

return statearr_34013;
});
var cljs$core$async$mix_$_state_machine__32869__auto____1 = (function (state_33957){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_33957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e34014){if((e34014 instanceof Object)){
var ex__32872__auto__ = e34014;
var statearr_34015_34064 = state_33957;
(statearr_34015_34064[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34065 = state_33957;
state_33957 = G__34065;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32869__auto__ = function(state_33957){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32869__auto____1.call(this,state_33957);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32869__auto____0;
cljs$core$async$mix_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32869__auto____1;
return cljs$core$async$mix_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___34017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32960__auto__ = (function (){var statearr_34016 = f__32959__auto__.call(null);
(statearr_34016[(6)] = c__32958__auto___34017);

return statearr_34016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___34017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__34067 = arguments.length;
switch (G__34067) {
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
var G__34071 = arguments.length;
switch (G__34071) {
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
return (function (p1__34069_SHARP_){
if(cljs.core.truth_(p1__34069_SHARP_.call(null,topic))){
return p1__34069_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34069_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28569__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34072 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34073){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34073 = meta34073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34074,meta34073__$1){
var self__ = this;
var _34074__$1 = this;
return (new cljs.core.async.t_cljs$core$async34072(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34073__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34074){
var self__ = this;
var _34074__$1 = this;
return self__.meta34073;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34072.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34072.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34072.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34072.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34072.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34072.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34072.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34072.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34073","meta34073",1440081444,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34072";

cljs.core.async.t_cljs$core$async34072.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async34072");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34072 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34072(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34073){
return (new cljs.core.async.t_cljs$core$async34072(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34073));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34072(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32958__auto___34192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___34192,mults,ensure_mult,p){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___34192,mults,ensure_mult,p){
return (function (state_34146){
var state_val_34147 = (state_34146[(1)]);
if((state_val_34147 === (7))){
var inst_34142 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
var statearr_34148_34193 = state_34146__$1;
(statearr_34148_34193[(2)] = inst_34142);

(statearr_34148_34193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (20))){
var state_34146__$1 = state_34146;
var statearr_34149_34194 = state_34146__$1;
(statearr_34149_34194[(2)] = null);

(statearr_34149_34194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (1))){
var state_34146__$1 = state_34146;
var statearr_34150_34195 = state_34146__$1;
(statearr_34150_34195[(2)] = null);

(statearr_34150_34195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (24))){
var inst_34125 = (state_34146[(7)]);
var inst_34134 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34125);
var state_34146__$1 = state_34146;
var statearr_34151_34196 = state_34146__$1;
(statearr_34151_34196[(2)] = inst_34134);

(statearr_34151_34196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (4))){
var inst_34077 = (state_34146[(8)]);
var inst_34077__$1 = (state_34146[(2)]);
var inst_34078 = (inst_34077__$1 == null);
var state_34146__$1 = (function (){var statearr_34152 = state_34146;
(statearr_34152[(8)] = inst_34077__$1);

return statearr_34152;
})();
if(cljs.core.truth_(inst_34078)){
var statearr_34153_34197 = state_34146__$1;
(statearr_34153_34197[(1)] = (5));

} else {
var statearr_34154_34198 = state_34146__$1;
(statearr_34154_34198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (15))){
var inst_34119 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
var statearr_34155_34199 = state_34146__$1;
(statearr_34155_34199[(2)] = inst_34119);

(statearr_34155_34199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (21))){
var inst_34139 = (state_34146[(2)]);
var state_34146__$1 = (function (){var statearr_34156 = state_34146;
(statearr_34156[(9)] = inst_34139);

return statearr_34156;
})();
var statearr_34157_34200 = state_34146__$1;
(statearr_34157_34200[(2)] = null);

(statearr_34157_34200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (13))){
var inst_34101 = (state_34146[(10)]);
var inst_34103 = cljs.core.chunked_seq_QMARK_.call(null,inst_34101);
var state_34146__$1 = state_34146;
if(inst_34103){
var statearr_34158_34201 = state_34146__$1;
(statearr_34158_34201[(1)] = (16));

} else {
var statearr_34159_34202 = state_34146__$1;
(statearr_34159_34202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (22))){
var inst_34131 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
if(cljs.core.truth_(inst_34131)){
var statearr_34160_34203 = state_34146__$1;
(statearr_34160_34203[(1)] = (23));

} else {
var statearr_34161_34204 = state_34146__$1;
(statearr_34161_34204[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (6))){
var inst_34077 = (state_34146[(8)]);
var inst_34127 = (state_34146[(11)]);
var inst_34125 = (state_34146[(7)]);
var inst_34125__$1 = topic_fn.call(null,inst_34077);
var inst_34126 = cljs.core.deref.call(null,mults);
var inst_34127__$1 = cljs.core.get.call(null,inst_34126,inst_34125__$1);
var state_34146__$1 = (function (){var statearr_34162 = state_34146;
(statearr_34162[(11)] = inst_34127__$1);

(statearr_34162[(7)] = inst_34125__$1);

return statearr_34162;
})();
if(cljs.core.truth_(inst_34127__$1)){
var statearr_34163_34205 = state_34146__$1;
(statearr_34163_34205[(1)] = (19));

} else {
var statearr_34164_34206 = state_34146__$1;
(statearr_34164_34206[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (25))){
var inst_34136 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
var statearr_34165_34207 = state_34146__$1;
(statearr_34165_34207[(2)] = inst_34136);

(statearr_34165_34207[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (17))){
var inst_34101 = (state_34146[(10)]);
var inst_34110 = cljs.core.first.call(null,inst_34101);
var inst_34111 = cljs.core.async.muxch_STAR_.call(null,inst_34110);
var inst_34112 = cljs.core.async.close_BANG_.call(null,inst_34111);
var inst_34113 = cljs.core.next.call(null,inst_34101);
var inst_34087 = inst_34113;
var inst_34088 = null;
var inst_34089 = (0);
var inst_34090 = (0);
var state_34146__$1 = (function (){var statearr_34166 = state_34146;
(statearr_34166[(12)] = inst_34089);

(statearr_34166[(13)] = inst_34088);

(statearr_34166[(14)] = inst_34112);

(statearr_34166[(15)] = inst_34087);

(statearr_34166[(16)] = inst_34090);

return statearr_34166;
})();
var statearr_34167_34208 = state_34146__$1;
(statearr_34167_34208[(2)] = null);

(statearr_34167_34208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (3))){
var inst_34144 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34146__$1,inst_34144);
} else {
if((state_val_34147 === (12))){
var inst_34121 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
var statearr_34168_34209 = state_34146__$1;
(statearr_34168_34209[(2)] = inst_34121);

(statearr_34168_34209[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (2))){
var state_34146__$1 = state_34146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34146__$1,(4),ch);
} else {
if((state_val_34147 === (23))){
var state_34146__$1 = state_34146;
var statearr_34169_34210 = state_34146__$1;
(statearr_34169_34210[(2)] = null);

(statearr_34169_34210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (19))){
var inst_34077 = (state_34146[(8)]);
var inst_34127 = (state_34146[(11)]);
var inst_34129 = cljs.core.async.muxch_STAR_.call(null,inst_34127);
var state_34146__$1 = state_34146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34146__$1,(22),inst_34129,inst_34077);
} else {
if((state_val_34147 === (11))){
var inst_34101 = (state_34146[(10)]);
var inst_34087 = (state_34146[(15)]);
var inst_34101__$1 = cljs.core.seq.call(null,inst_34087);
var state_34146__$1 = (function (){var statearr_34170 = state_34146;
(statearr_34170[(10)] = inst_34101__$1);

return statearr_34170;
})();
if(inst_34101__$1){
var statearr_34171_34211 = state_34146__$1;
(statearr_34171_34211[(1)] = (13));

} else {
var statearr_34172_34212 = state_34146__$1;
(statearr_34172_34212[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (9))){
var inst_34123 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
var statearr_34173_34213 = state_34146__$1;
(statearr_34173_34213[(2)] = inst_34123);

(statearr_34173_34213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (5))){
var inst_34084 = cljs.core.deref.call(null,mults);
var inst_34085 = cljs.core.vals.call(null,inst_34084);
var inst_34086 = cljs.core.seq.call(null,inst_34085);
var inst_34087 = inst_34086;
var inst_34088 = null;
var inst_34089 = (0);
var inst_34090 = (0);
var state_34146__$1 = (function (){var statearr_34174 = state_34146;
(statearr_34174[(12)] = inst_34089);

(statearr_34174[(13)] = inst_34088);

(statearr_34174[(15)] = inst_34087);

(statearr_34174[(16)] = inst_34090);

return statearr_34174;
})();
var statearr_34175_34214 = state_34146__$1;
(statearr_34175_34214[(2)] = null);

(statearr_34175_34214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (14))){
var state_34146__$1 = state_34146;
var statearr_34179_34215 = state_34146__$1;
(statearr_34179_34215[(2)] = null);

(statearr_34179_34215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (16))){
var inst_34101 = (state_34146[(10)]);
var inst_34105 = cljs.core.chunk_first.call(null,inst_34101);
var inst_34106 = cljs.core.chunk_rest.call(null,inst_34101);
var inst_34107 = cljs.core.count.call(null,inst_34105);
var inst_34087 = inst_34106;
var inst_34088 = inst_34105;
var inst_34089 = inst_34107;
var inst_34090 = (0);
var state_34146__$1 = (function (){var statearr_34180 = state_34146;
(statearr_34180[(12)] = inst_34089);

(statearr_34180[(13)] = inst_34088);

(statearr_34180[(15)] = inst_34087);

(statearr_34180[(16)] = inst_34090);

return statearr_34180;
})();
var statearr_34181_34216 = state_34146__$1;
(statearr_34181_34216[(2)] = null);

(statearr_34181_34216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (10))){
var inst_34089 = (state_34146[(12)]);
var inst_34088 = (state_34146[(13)]);
var inst_34087 = (state_34146[(15)]);
var inst_34090 = (state_34146[(16)]);
var inst_34095 = cljs.core._nth.call(null,inst_34088,inst_34090);
var inst_34096 = cljs.core.async.muxch_STAR_.call(null,inst_34095);
var inst_34097 = cljs.core.async.close_BANG_.call(null,inst_34096);
var inst_34098 = (inst_34090 + (1));
var tmp34176 = inst_34089;
var tmp34177 = inst_34088;
var tmp34178 = inst_34087;
var inst_34087__$1 = tmp34178;
var inst_34088__$1 = tmp34177;
var inst_34089__$1 = tmp34176;
var inst_34090__$1 = inst_34098;
var state_34146__$1 = (function (){var statearr_34182 = state_34146;
(statearr_34182[(12)] = inst_34089__$1);

(statearr_34182[(17)] = inst_34097);

(statearr_34182[(13)] = inst_34088__$1);

(statearr_34182[(15)] = inst_34087__$1);

(statearr_34182[(16)] = inst_34090__$1);

return statearr_34182;
})();
var statearr_34183_34217 = state_34146__$1;
(statearr_34183_34217[(2)] = null);

(statearr_34183_34217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (18))){
var inst_34116 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
var statearr_34184_34218 = state_34146__$1;
(statearr_34184_34218[(2)] = inst_34116);

(statearr_34184_34218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (8))){
var inst_34089 = (state_34146[(12)]);
var inst_34090 = (state_34146[(16)]);
var inst_34092 = (inst_34090 < inst_34089);
var inst_34093 = inst_34092;
var state_34146__$1 = state_34146;
if(cljs.core.truth_(inst_34093)){
var statearr_34185_34219 = state_34146__$1;
(statearr_34185_34219[(1)] = (10));

} else {
var statearr_34186_34220 = state_34146__$1;
(statearr_34186_34220[(1)] = (11));

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
});})(c__32958__auto___34192,mults,ensure_mult,p))
;
return ((function (switch__32868__auto__,c__32958__auto___34192,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_34187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34187[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_34187[(1)] = (1));

return statearr_34187;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_34146){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_34146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e34188){if((e34188 instanceof Object)){
var ex__32872__auto__ = e34188;
var statearr_34189_34221 = state_34146;
(statearr_34189_34221[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34222 = state_34146;
state_34146 = G__34222;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_34146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_34146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___34192,mults,ensure_mult,p))
})();
var state__32960__auto__ = (function (){var statearr_34190 = f__32959__auto__.call(null);
(statearr_34190[(6)] = c__32958__auto___34192);

return statearr_34190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___34192,mults,ensure_mult,p))
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
var G__34224 = arguments.length;
switch (G__34224) {
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
var G__34227 = arguments.length;
switch (G__34227) {
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
var G__34230 = arguments.length;
switch (G__34230) {
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
var c__32958__auto___34297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___34297,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___34297,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34269){
var state_val_34270 = (state_34269[(1)]);
if((state_val_34270 === (7))){
var state_34269__$1 = state_34269;
var statearr_34271_34298 = state_34269__$1;
(statearr_34271_34298[(2)] = null);

(statearr_34271_34298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (1))){
var state_34269__$1 = state_34269;
var statearr_34272_34299 = state_34269__$1;
(statearr_34272_34299[(2)] = null);

(statearr_34272_34299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (4))){
var inst_34233 = (state_34269[(7)]);
var inst_34235 = (inst_34233 < cnt);
var state_34269__$1 = state_34269;
if(cljs.core.truth_(inst_34235)){
var statearr_34273_34300 = state_34269__$1;
(statearr_34273_34300[(1)] = (6));

} else {
var statearr_34274_34301 = state_34269__$1;
(statearr_34274_34301[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (15))){
var inst_34265 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34275_34302 = state_34269__$1;
(statearr_34275_34302[(2)] = inst_34265);

(statearr_34275_34302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (13))){
var inst_34258 = cljs.core.async.close_BANG_.call(null,out);
var state_34269__$1 = state_34269;
var statearr_34276_34303 = state_34269__$1;
(statearr_34276_34303[(2)] = inst_34258);

(statearr_34276_34303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (6))){
var state_34269__$1 = state_34269;
var statearr_34277_34304 = state_34269__$1;
(statearr_34277_34304[(2)] = null);

(statearr_34277_34304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (3))){
var inst_34267 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34269__$1,inst_34267);
} else {
if((state_val_34270 === (12))){
var inst_34255 = (state_34269[(8)]);
var inst_34255__$1 = (state_34269[(2)]);
var inst_34256 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34255__$1);
var state_34269__$1 = (function (){var statearr_34278 = state_34269;
(statearr_34278[(8)] = inst_34255__$1);

return statearr_34278;
})();
if(cljs.core.truth_(inst_34256)){
var statearr_34279_34305 = state_34269__$1;
(statearr_34279_34305[(1)] = (13));

} else {
var statearr_34280_34306 = state_34269__$1;
(statearr_34280_34306[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (2))){
var inst_34232 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34233 = (0);
var state_34269__$1 = (function (){var statearr_34281 = state_34269;
(statearr_34281[(9)] = inst_34232);

(statearr_34281[(7)] = inst_34233);

return statearr_34281;
})();
var statearr_34282_34307 = state_34269__$1;
(statearr_34282_34307[(2)] = null);

(statearr_34282_34307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (11))){
var inst_34233 = (state_34269[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34269,(10),Object,null,(9));
var inst_34242 = chs__$1.call(null,inst_34233);
var inst_34243 = done.call(null,inst_34233);
var inst_34244 = cljs.core.async.take_BANG_.call(null,inst_34242,inst_34243);
var state_34269__$1 = state_34269;
var statearr_34283_34308 = state_34269__$1;
(statearr_34283_34308[(2)] = inst_34244);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34269__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (9))){
var inst_34233 = (state_34269[(7)]);
var inst_34246 = (state_34269[(2)]);
var inst_34247 = (inst_34233 + (1));
var inst_34233__$1 = inst_34247;
var state_34269__$1 = (function (){var statearr_34284 = state_34269;
(statearr_34284[(7)] = inst_34233__$1);

(statearr_34284[(10)] = inst_34246);

return statearr_34284;
})();
var statearr_34285_34309 = state_34269__$1;
(statearr_34285_34309[(2)] = null);

(statearr_34285_34309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (5))){
var inst_34253 = (state_34269[(2)]);
var state_34269__$1 = (function (){var statearr_34286 = state_34269;
(statearr_34286[(11)] = inst_34253);

return statearr_34286;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34269__$1,(12),dchan);
} else {
if((state_val_34270 === (14))){
var inst_34255 = (state_34269[(8)]);
var inst_34260 = cljs.core.apply.call(null,f,inst_34255);
var state_34269__$1 = state_34269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34269__$1,(16),out,inst_34260);
} else {
if((state_val_34270 === (16))){
var inst_34262 = (state_34269[(2)]);
var state_34269__$1 = (function (){var statearr_34287 = state_34269;
(statearr_34287[(12)] = inst_34262);

return statearr_34287;
})();
var statearr_34288_34310 = state_34269__$1;
(statearr_34288_34310[(2)] = null);

(statearr_34288_34310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (10))){
var inst_34237 = (state_34269[(2)]);
var inst_34238 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34269__$1 = (function (){var statearr_34289 = state_34269;
(statearr_34289[(13)] = inst_34237);

return statearr_34289;
})();
var statearr_34290_34311 = state_34269__$1;
(statearr_34290_34311[(2)] = inst_34238);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34269__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (8))){
var inst_34251 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34291_34312 = state_34269__$1;
(statearr_34291_34312[(2)] = inst_34251);

(statearr_34291_34312[(1)] = (5));


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
});})(c__32958__auto___34297,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32868__auto__,c__32958__auto___34297,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_34292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34292[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_34292[(1)] = (1));

return statearr_34292;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_34269){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_34269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e34293){if((e34293 instanceof Object)){
var ex__32872__auto__ = e34293;
var statearr_34294_34313 = state_34269;
(statearr_34294_34313[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34314 = state_34269;
state_34269 = G__34314;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_34269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_34269);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___34297,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32960__auto__ = (function (){var statearr_34295 = f__32959__auto__.call(null);
(statearr_34295[(6)] = c__32958__auto___34297);

return statearr_34295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___34297,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34317 = arguments.length;
switch (G__34317) {
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
var c__32958__auto___34371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___34371,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___34371,out){
return (function (state_34349){
var state_val_34350 = (state_34349[(1)]);
if((state_val_34350 === (7))){
var inst_34328 = (state_34349[(7)]);
var inst_34329 = (state_34349[(8)]);
var inst_34328__$1 = (state_34349[(2)]);
var inst_34329__$1 = cljs.core.nth.call(null,inst_34328__$1,(0),null);
var inst_34330 = cljs.core.nth.call(null,inst_34328__$1,(1),null);
var inst_34331 = (inst_34329__$1 == null);
var state_34349__$1 = (function (){var statearr_34351 = state_34349;
(statearr_34351[(7)] = inst_34328__$1);

(statearr_34351[(9)] = inst_34330);

(statearr_34351[(8)] = inst_34329__$1);

return statearr_34351;
})();
if(cljs.core.truth_(inst_34331)){
var statearr_34352_34372 = state_34349__$1;
(statearr_34352_34372[(1)] = (8));

} else {
var statearr_34353_34373 = state_34349__$1;
(statearr_34353_34373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (1))){
var inst_34318 = cljs.core.vec.call(null,chs);
var inst_34319 = inst_34318;
var state_34349__$1 = (function (){var statearr_34354 = state_34349;
(statearr_34354[(10)] = inst_34319);

return statearr_34354;
})();
var statearr_34355_34374 = state_34349__$1;
(statearr_34355_34374[(2)] = null);

(statearr_34355_34374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (4))){
var inst_34319 = (state_34349[(10)]);
var state_34349__$1 = state_34349;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34349__$1,(7),inst_34319);
} else {
if((state_val_34350 === (6))){
var inst_34345 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
var statearr_34356_34375 = state_34349__$1;
(statearr_34356_34375[(2)] = inst_34345);

(statearr_34356_34375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (3))){
var inst_34347 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34349__$1,inst_34347);
} else {
if((state_val_34350 === (2))){
var inst_34319 = (state_34349[(10)]);
var inst_34321 = cljs.core.count.call(null,inst_34319);
var inst_34322 = (inst_34321 > (0));
var state_34349__$1 = state_34349;
if(cljs.core.truth_(inst_34322)){
var statearr_34358_34376 = state_34349__$1;
(statearr_34358_34376[(1)] = (4));

} else {
var statearr_34359_34377 = state_34349__$1;
(statearr_34359_34377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (11))){
var inst_34319 = (state_34349[(10)]);
var inst_34338 = (state_34349[(2)]);
var tmp34357 = inst_34319;
var inst_34319__$1 = tmp34357;
var state_34349__$1 = (function (){var statearr_34360 = state_34349;
(statearr_34360[(11)] = inst_34338);

(statearr_34360[(10)] = inst_34319__$1);

return statearr_34360;
})();
var statearr_34361_34378 = state_34349__$1;
(statearr_34361_34378[(2)] = null);

(statearr_34361_34378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (9))){
var inst_34329 = (state_34349[(8)]);
var state_34349__$1 = state_34349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34349__$1,(11),out,inst_34329);
} else {
if((state_val_34350 === (5))){
var inst_34343 = cljs.core.async.close_BANG_.call(null,out);
var state_34349__$1 = state_34349;
var statearr_34362_34379 = state_34349__$1;
(statearr_34362_34379[(2)] = inst_34343);

(statearr_34362_34379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (10))){
var inst_34341 = (state_34349[(2)]);
var state_34349__$1 = state_34349;
var statearr_34363_34380 = state_34349__$1;
(statearr_34363_34380[(2)] = inst_34341);

(statearr_34363_34380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34350 === (8))){
var inst_34319 = (state_34349[(10)]);
var inst_34328 = (state_34349[(7)]);
var inst_34330 = (state_34349[(9)]);
var inst_34329 = (state_34349[(8)]);
var inst_34333 = (function (){var cs = inst_34319;
var vec__34324 = inst_34328;
var v = inst_34329;
var c = inst_34330;
return ((function (cs,vec__34324,v,c,inst_34319,inst_34328,inst_34330,inst_34329,state_val_34350,c__32958__auto___34371,out){
return (function (p1__34315_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34315_SHARP_);
});
;})(cs,vec__34324,v,c,inst_34319,inst_34328,inst_34330,inst_34329,state_val_34350,c__32958__auto___34371,out))
})();
var inst_34334 = cljs.core.filterv.call(null,inst_34333,inst_34319);
var inst_34319__$1 = inst_34334;
var state_34349__$1 = (function (){var statearr_34364 = state_34349;
(statearr_34364[(10)] = inst_34319__$1);

return statearr_34364;
})();
var statearr_34365_34381 = state_34349__$1;
(statearr_34365_34381[(2)] = null);

(statearr_34365_34381[(1)] = (2));


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
});})(c__32958__auto___34371,out))
;
return ((function (switch__32868__auto__,c__32958__auto___34371,out){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_34366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34366[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_34366[(1)] = (1));

return statearr_34366;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_34349){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_34349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e34367){if((e34367 instanceof Object)){
var ex__32872__auto__ = e34367;
var statearr_34368_34382 = state_34349;
(statearr_34368_34382[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34383 = state_34349;
state_34349 = G__34383;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_34349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_34349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___34371,out))
})();
var state__32960__auto__ = (function (){var statearr_34369 = f__32959__auto__.call(null);
(statearr_34369[(6)] = c__32958__auto___34371);

return statearr_34369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___34371,out))
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
var G__34385 = arguments.length;
switch (G__34385) {
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
var c__32958__auto___34430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___34430,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___34430,out){
return (function (state_34409){
var state_val_34410 = (state_34409[(1)]);
if((state_val_34410 === (7))){
var inst_34391 = (state_34409[(7)]);
var inst_34391__$1 = (state_34409[(2)]);
var inst_34392 = (inst_34391__$1 == null);
var inst_34393 = cljs.core.not.call(null,inst_34392);
var state_34409__$1 = (function (){var statearr_34411 = state_34409;
(statearr_34411[(7)] = inst_34391__$1);

return statearr_34411;
})();
if(inst_34393){
var statearr_34412_34431 = state_34409__$1;
(statearr_34412_34431[(1)] = (8));

} else {
var statearr_34413_34432 = state_34409__$1;
(statearr_34413_34432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (1))){
var inst_34386 = (0);
var state_34409__$1 = (function (){var statearr_34414 = state_34409;
(statearr_34414[(8)] = inst_34386);

return statearr_34414;
})();
var statearr_34415_34433 = state_34409__$1;
(statearr_34415_34433[(2)] = null);

(statearr_34415_34433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (4))){
var state_34409__$1 = state_34409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34409__$1,(7),ch);
} else {
if((state_val_34410 === (6))){
var inst_34404 = (state_34409[(2)]);
var state_34409__$1 = state_34409;
var statearr_34416_34434 = state_34409__$1;
(statearr_34416_34434[(2)] = inst_34404);

(statearr_34416_34434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (3))){
var inst_34406 = (state_34409[(2)]);
var inst_34407 = cljs.core.async.close_BANG_.call(null,out);
var state_34409__$1 = (function (){var statearr_34417 = state_34409;
(statearr_34417[(9)] = inst_34406);

return statearr_34417;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34409__$1,inst_34407);
} else {
if((state_val_34410 === (2))){
var inst_34386 = (state_34409[(8)]);
var inst_34388 = (inst_34386 < n);
var state_34409__$1 = state_34409;
if(cljs.core.truth_(inst_34388)){
var statearr_34418_34435 = state_34409__$1;
(statearr_34418_34435[(1)] = (4));

} else {
var statearr_34419_34436 = state_34409__$1;
(statearr_34419_34436[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (11))){
var inst_34386 = (state_34409[(8)]);
var inst_34396 = (state_34409[(2)]);
var inst_34397 = (inst_34386 + (1));
var inst_34386__$1 = inst_34397;
var state_34409__$1 = (function (){var statearr_34420 = state_34409;
(statearr_34420[(10)] = inst_34396);

(statearr_34420[(8)] = inst_34386__$1);

return statearr_34420;
})();
var statearr_34421_34437 = state_34409__$1;
(statearr_34421_34437[(2)] = null);

(statearr_34421_34437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (9))){
var state_34409__$1 = state_34409;
var statearr_34422_34438 = state_34409__$1;
(statearr_34422_34438[(2)] = null);

(statearr_34422_34438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (5))){
var state_34409__$1 = state_34409;
var statearr_34423_34439 = state_34409__$1;
(statearr_34423_34439[(2)] = null);

(statearr_34423_34439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (10))){
var inst_34401 = (state_34409[(2)]);
var state_34409__$1 = state_34409;
var statearr_34424_34440 = state_34409__$1;
(statearr_34424_34440[(2)] = inst_34401);

(statearr_34424_34440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (8))){
var inst_34391 = (state_34409[(7)]);
var state_34409__$1 = state_34409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34409__$1,(11),out,inst_34391);
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
});})(c__32958__auto___34430,out))
;
return ((function (switch__32868__auto__,c__32958__auto___34430,out){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_34425 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34425[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_34425[(1)] = (1));

return statearr_34425;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_34409){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_34409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e34426){if((e34426 instanceof Object)){
var ex__32872__auto__ = e34426;
var statearr_34427_34441 = state_34409;
(statearr_34427_34441[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34442 = state_34409;
state_34409 = G__34442;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_34409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_34409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___34430,out))
})();
var state__32960__auto__ = (function (){var statearr_34428 = f__32959__auto__.call(null);
(statearr_34428[(6)] = c__32958__auto___34430);

return statearr_34428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___34430,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34444 = (function (f,ch,meta34445){
this.f = f;
this.ch = ch;
this.meta34445 = meta34445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34446,meta34445__$1){
var self__ = this;
var _34446__$1 = this;
return (new cljs.core.async.t_cljs$core$async34444(self__.f,self__.ch,meta34445__$1));
});

cljs.core.async.t_cljs$core$async34444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34446){
var self__ = this;
var _34446__$1 = this;
return self__.meta34445;
});

cljs.core.async.t_cljs$core$async34444.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34444.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34444.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34444.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34444.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34447 = (function (f,ch,meta34445,_,fn1,meta34448){
this.f = f;
this.ch = ch;
this.meta34445 = meta34445;
this._ = _;
this.fn1 = fn1;
this.meta34448 = meta34448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34449,meta34448__$1){
var self__ = this;
var _34449__$1 = this;
return (new cljs.core.async.t_cljs$core$async34447(self__.f,self__.ch,self__.meta34445,self__._,self__.fn1,meta34448__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34449){
var self__ = this;
var _34449__$1 = this;
return self__.meta34448;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34447.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34447.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34443_SHARP_){
return f1.call(null,(((p1__34443_SHARP_ == null))?null:self__.f.call(null,p1__34443_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34447.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34445","meta34445",1138426718,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34444","cljs.core.async/t_cljs$core$async34444",1926248657,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34448","meta34448",1133222738,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34447";

cljs.core.async.t_cljs$core$async34447.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async34447");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34447 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34447(f__$1,ch__$1,meta34445__$1,___$2,fn1__$1,meta34448){
return (new cljs.core.async.t_cljs$core$async34447(f__$1,ch__$1,meta34445__$1,___$2,fn1__$1,meta34448));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34447(self__.f,self__.ch,self__.meta34445,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34444.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34444.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34445","meta34445",1138426718,null)], null);
});

cljs.core.async.t_cljs$core$async34444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34444";

cljs.core.async.t_cljs$core$async34444.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async34444");
});

cljs.core.async.__GT_t_cljs$core$async34444 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34444(f__$1,ch__$1,meta34445){
return (new cljs.core.async.t_cljs$core$async34444(f__$1,ch__$1,meta34445));
});

}

return (new cljs.core.async.t_cljs$core$async34444(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34450 = (function (f,ch,meta34451){
this.f = f;
this.ch = ch;
this.meta34451 = meta34451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34452,meta34451__$1){
var self__ = this;
var _34452__$1 = this;
return (new cljs.core.async.t_cljs$core$async34450(self__.f,self__.ch,meta34451__$1));
});

cljs.core.async.t_cljs$core$async34450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34452){
var self__ = this;
var _34452__$1 = this;
return self__.meta34451;
});

cljs.core.async.t_cljs$core$async34450.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34450.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34450.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34450.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34450.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34450.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34451","meta34451",-1032232032,null)], null);
});

cljs.core.async.t_cljs$core$async34450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34450";

cljs.core.async.t_cljs$core$async34450.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async34450");
});

cljs.core.async.__GT_t_cljs$core$async34450 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34450(f__$1,ch__$1,meta34451){
return (new cljs.core.async.t_cljs$core$async34450(f__$1,ch__$1,meta34451));
});

}

return (new cljs.core.async.t_cljs$core$async34450(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34453 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34453 = (function (p,ch,meta34454){
this.p = p;
this.ch = ch;
this.meta34454 = meta34454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34455,meta34454__$1){
var self__ = this;
var _34455__$1 = this;
return (new cljs.core.async.t_cljs$core$async34453(self__.p,self__.ch,meta34454__$1));
});

cljs.core.async.t_cljs$core$async34453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34455){
var self__ = this;
var _34455__$1 = this;
return self__.meta34454;
});

cljs.core.async.t_cljs$core$async34453.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34453.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34453.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34453.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34454","meta34454",624025940,null)], null);
});

cljs.core.async.t_cljs$core$async34453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34453";

cljs.core.async.t_cljs$core$async34453.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.core.async/t_cljs$core$async34453");
});

cljs.core.async.__GT_t_cljs$core$async34453 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34453(p__$1,ch__$1,meta34454){
return (new cljs.core.async.t_cljs$core$async34453(p__$1,ch__$1,meta34454));
});

}

return (new cljs.core.async.t_cljs$core$async34453(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34457 = arguments.length;
switch (G__34457) {
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
var c__32958__auto___34497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___34497,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___34497,out){
return (function (state_34478){
var state_val_34479 = (state_34478[(1)]);
if((state_val_34479 === (7))){
var inst_34474 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34480_34498 = state_34478__$1;
(statearr_34480_34498[(2)] = inst_34474);

(statearr_34480_34498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (1))){
var state_34478__$1 = state_34478;
var statearr_34481_34499 = state_34478__$1;
(statearr_34481_34499[(2)] = null);

(statearr_34481_34499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (4))){
var inst_34460 = (state_34478[(7)]);
var inst_34460__$1 = (state_34478[(2)]);
var inst_34461 = (inst_34460__$1 == null);
var state_34478__$1 = (function (){var statearr_34482 = state_34478;
(statearr_34482[(7)] = inst_34460__$1);

return statearr_34482;
})();
if(cljs.core.truth_(inst_34461)){
var statearr_34483_34500 = state_34478__$1;
(statearr_34483_34500[(1)] = (5));

} else {
var statearr_34484_34501 = state_34478__$1;
(statearr_34484_34501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (6))){
var inst_34460 = (state_34478[(7)]);
var inst_34465 = p.call(null,inst_34460);
var state_34478__$1 = state_34478;
if(cljs.core.truth_(inst_34465)){
var statearr_34485_34502 = state_34478__$1;
(statearr_34485_34502[(1)] = (8));

} else {
var statearr_34486_34503 = state_34478__$1;
(statearr_34486_34503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (3))){
var inst_34476 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34478__$1,inst_34476);
} else {
if((state_val_34479 === (2))){
var state_34478__$1 = state_34478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34478__$1,(4),ch);
} else {
if((state_val_34479 === (11))){
var inst_34468 = (state_34478[(2)]);
var state_34478__$1 = state_34478;
var statearr_34487_34504 = state_34478__$1;
(statearr_34487_34504[(2)] = inst_34468);

(statearr_34487_34504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (9))){
var state_34478__$1 = state_34478;
var statearr_34488_34505 = state_34478__$1;
(statearr_34488_34505[(2)] = null);

(statearr_34488_34505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (5))){
var inst_34463 = cljs.core.async.close_BANG_.call(null,out);
var state_34478__$1 = state_34478;
var statearr_34489_34506 = state_34478__$1;
(statearr_34489_34506[(2)] = inst_34463);

(statearr_34489_34506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (10))){
var inst_34471 = (state_34478[(2)]);
var state_34478__$1 = (function (){var statearr_34490 = state_34478;
(statearr_34490[(8)] = inst_34471);

return statearr_34490;
})();
var statearr_34491_34507 = state_34478__$1;
(statearr_34491_34507[(2)] = null);

(statearr_34491_34507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34479 === (8))){
var inst_34460 = (state_34478[(7)]);
var state_34478__$1 = state_34478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34478__$1,(11),out,inst_34460);
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
});})(c__32958__auto___34497,out))
;
return ((function (switch__32868__auto__,c__32958__auto___34497,out){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_34492 = [null,null,null,null,null,null,null,null,null];
(statearr_34492[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_34492[(1)] = (1));

return statearr_34492;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_34478){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_34478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e34493){if((e34493 instanceof Object)){
var ex__32872__auto__ = e34493;
var statearr_34494_34508 = state_34478;
(statearr_34494_34508[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34509 = state_34478;
state_34478 = G__34509;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_34478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_34478);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___34497,out))
})();
var state__32960__auto__ = (function (){var statearr_34495 = f__32959__auto__.call(null);
(statearr_34495[(6)] = c__32958__auto___34497);

return statearr_34495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___34497,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34511 = arguments.length;
switch (G__34511) {
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
return (function (state_34574){
var state_val_34575 = (state_34574[(1)]);
if((state_val_34575 === (7))){
var inst_34570 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34576_34614 = state_34574__$1;
(statearr_34576_34614[(2)] = inst_34570);

(statearr_34576_34614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (20))){
var inst_34540 = (state_34574[(7)]);
var inst_34551 = (state_34574[(2)]);
var inst_34552 = cljs.core.next.call(null,inst_34540);
var inst_34526 = inst_34552;
var inst_34527 = null;
var inst_34528 = (0);
var inst_34529 = (0);
var state_34574__$1 = (function (){var statearr_34577 = state_34574;
(statearr_34577[(8)] = inst_34529);

(statearr_34577[(9)] = inst_34527);

(statearr_34577[(10)] = inst_34526);

(statearr_34577[(11)] = inst_34528);

(statearr_34577[(12)] = inst_34551);

return statearr_34577;
})();
var statearr_34578_34615 = state_34574__$1;
(statearr_34578_34615[(2)] = null);

(statearr_34578_34615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (1))){
var state_34574__$1 = state_34574;
var statearr_34579_34616 = state_34574__$1;
(statearr_34579_34616[(2)] = null);

(statearr_34579_34616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (4))){
var inst_34515 = (state_34574[(13)]);
var inst_34515__$1 = (state_34574[(2)]);
var inst_34516 = (inst_34515__$1 == null);
var state_34574__$1 = (function (){var statearr_34580 = state_34574;
(statearr_34580[(13)] = inst_34515__$1);

return statearr_34580;
})();
if(cljs.core.truth_(inst_34516)){
var statearr_34581_34617 = state_34574__$1;
(statearr_34581_34617[(1)] = (5));

} else {
var statearr_34582_34618 = state_34574__$1;
(statearr_34582_34618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (15))){
var state_34574__$1 = state_34574;
var statearr_34586_34619 = state_34574__$1;
(statearr_34586_34619[(2)] = null);

(statearr_34586_34619[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (21))){
var state_34574__$1 = state_34574;
var statearr_34587_34620 = state_34574__$1;
(statearr_34587_34620[(2)] = null);

(statearr_34587_34620[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (13))){
var inst_34529 = (state_34574[(8)]);
var inst_34527 = (state_34574[(9)]);
var inst_34526 = (state_34574[(10)]);
var inst_34528 = (state_34574[(11)]);
var inst_34536 = (state_34574[(2)]);
var inst_34537 = (inst_34529 + (1));
var tmp34583 = inst_34527;
var tmp34584 = inst_34526;
var tmp34585 = inst_34528;
var inst_34526__$1 = tmp34584;
var inst_34527__$1 = tmp34583;
var inst_34528__$1 = tmp34585;
var inst_34529__$1 = inst_34537;
var state_34574__$1 = (function (){var statearr_34588 = state_34574;
(statearr_34588[(8)] = inst_34529__$1);

(statearr_34588[(14)] = inst_34536);

(statearr_34588[(9)] = inst_34527__$1);

(statearr_34588[(10)] = inst_34526__$1);

(statearr_34588[(11)] = inst_34528__$1);

return statearr_34588;
})();
var statearr_34589_34621 = state_34574__$1;
(statearr_34589_34621[(2)] = null);

(statearr_34589_34621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (22))){
var state_34574__$1 = state_34574;
var statearr_34590_34622 = state_34574__$1;
(statearr_34590_34622[(2)] = null);

(statearr_34590_34622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (6))){
var inst_34515 = (state_34574[(13)]);
var inst_34524 = f.call(null,inst_34515);
var inst_34525 = cljs.core.seq.call(null,inst_34524);
var inst_34526 = inst_34525;
var inst_34527 = null;
var inst_34528 = (0);
var inst_34529 = (0);
var state_34574__$1 = (function (){var statearr_34591 = state_34574;
(statearr_34591[(8)] = inst_34529);

(statearr_34591[(9)] = inst_34527);

(statearr_34591[(10)] = inst_34526);

(statearr_34591[(11)] = inst_34528);

return statearr_34591;
})();
var statearr_34592_34623 = state_34574__$1;
(statearr_34592_34623[(2)] = null);

(statearr_34592_34623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (17))){
var inst_34540 = (state_34574[(7)]);
var inst_34544 = cljs.core.chunk_first.call(null,inst_34540);
var inst_34545 = cljs.core.chunk_rest.call(null,inst_34540);
var inst_34546 = cljs.core.count.call(null,inst_34544);
var inst_34526 = inst_34545;
var inst_34527 = inst_34544;
var inst_34528 = inst_34546;
var inst_34529 = (0);
var state_34574__$1 = (function (){var statearr_34593 = state_34574;
(statearr_34593[(8)] = inst_34529);

(statearr_34593[(9)] = inst_34527);

(statearr_34593[(10)] = inst_34526);

(statearr_34593[(11)] = inst_34528);

return statearr_34593;
})();
var statearr_34594_34624 = state_34574__$1;
(statearr_34594_34624[(2)] = null);

(statearr_34594_34624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (3))){
var inst_34572 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34574__$1,inst_34572);
} else {
if((state_val_34575 === (12))){
var inst_34560 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34595_34625 = state_34574__$1;
(statearr_34595_34625[(2)] = inst_34560);

(statearr_34595_34625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (2))){
var state_34574__$1 = state_34574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34574__$1,(4),in$);
} else {
if((state_val_34575 === (23))){
var inst_34568 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34596_34626 = state_34574__$1;
(statearr_34596_34626[(2)] = inst_34568);

(statearr_34596_34626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (19))){
var inst_34555 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34597_34627 = state_34574__$1;
(statearr_34597_34627[(2)] = inst_34555);

(statearr_34597_34627[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (11))){
var inst_34540 = (state_34574[(7)]);
var inst_34526 = (state_34574[(10)]);
var inst_34540__$1 = cljs.core.seq.call(null,inst_34526);
var state_34574__$1 = (function (){var statearr_34598 = state_34574;
(statearr_34598[(7)] = inst_34540__$1);

return statearr_34598;
})();
if(inst_34540__$1){
var statearr_34599_34628 = state_34574__$1;
(statearr_34599_34628[(1)] = (14));

} else {
var statearr_34600_34629 = state_34574__$1;
(statearr_34600_34629[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (9))){
var inst_34562 = (state_34574[(2)]);
var inst_34563 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34574__$1 = (function (){var statearr_34601 = state_34574;
(statearr_34601[(15)] = inst_34562);

return statearr_34601;
})();
if(cljs.core.truth_(inst_34563)){
var statearr_34602_34630 = state_34574__$1;
(statearr_34602_34630[(1)] = (21));

} else {
var statearr_34603_34631 = state_34574__$1;
(statearr_34603_34631[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (5))){
var inst_34518 = cljs.core.async.close_BANG_.call(null,out);
var state_34574__$1 = state_34574;
var statearr_34604_34632 = state_34574__$1;
(statearr_34604_34632[(2)] = inst_34518);

(statearr_34604_34632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (14))){
var inst_34540 = (state_34574[(7)]);
var inst_34542 = cljs.core.chunked_seq_QMARK_.call(null,inst_34540);
var state_34574__$1 = state_34574;
if(inst_34542){
var statearr_34605_34633 = state_34574__$1;
(statearr_34605_34633[(1)] = (17));

} else {
var statearr_34606_34634 = state_34574__$1;
(statearr_34606_34634[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (16))){
var inst_34558 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34607_34635 = state_34574__$1;
(statearr_34607_34635[(2)] = inst_34558);

(statearr_34607_34635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (10))){
var inst_34529 = (state_34574[(8)]);
var inst_34527 = (state_34574[(9)]);
var inst_34534 = cljs.core._nth.call(null,inst_34527,inst_34529);
var state_34574__$1 = state_34574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34574__$1,(13),out,inst_34534);
} else {
if((state_val_34575 === (18))){
var inst_34540 = (state_34574[(7)]);
var inst_34549 = cljs.core.first.call(null,inst_34540);
var state_34574__$1 = state_34574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34574__$1,(20),out,inst_34549);
} else {
if((state_val_34575 === (8))){
var inst_34529 = (state_34574[(8)]);
var inst_34528 = (state_34574[(11)]);
var inst_34531 = (inst_34529 < inst_34528);
var inst_34532 = inst_34531;
var state_34574__$1 = state_34574;
if(cljs.core.truth_(inst_34532)){
var statearr_34608_34636 = state_34574__$1;
(statearr_34608_34636[(1)] = (10));

} else {
var statearr_34609_34637 = state_34574__$1;
(statearr_34609_34637[(1)] = (11));

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
var statearr_34610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34610[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32869__auto__);

(statearr_34610[(1)] = (1));

return statearr_34610;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32869__auto____1 = (function (state_34574){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_34574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e34611){if((e34611 instanceof Object)){
var ex__32872__auto__ = e34611;
var statearr_34612_34638 = state_34574;
(statearr_34612_34638[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34639 = state_34574;
state_34574 = G__34639;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32869__auto__ = function(state_34574){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32869__auto____1.call(this,state_34574);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32869__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32869__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__))
})();
var state__32960__auto__ = (function (){var statearr_34613 = f__32959__auto__.call(null);
(statearr_34613[(6)] = c__32958__auto__);

return statearr_34613;
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
var G__34641 = arguments.length;
switch (G__34641) {
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
var G__34644 = arguments.length;
switch (G__34644) {
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
var G__34647 = arguments.length;
switch (G__34647) {
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
var c__32958__auto___34694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___34694,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___34694,out){
return (function (state_34671){
var state_val_34672 = (state_34671[(1)]);
if((state_val_34672 === (7))){
var inst_34666 = (state_34671[(2)]);
var state_34671__$1 = state_34671;
var statearr_34673_34695 = state_34671__$1;
(statearr_34673_34695[(2)] = inst_34666);

(statearr_34673_34695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (1))){
var inst_34648 = null;
var state_34671__$1 = (function (){var statearr_34674 = state_34671;
(statearr_34674[(7)] = inst_34648);

return statearr_34674;
})();
var statearr_34675_34696 = state_34671__$1;
(statearr_34675_34696[(2)] = null);

(statearr_34675_34696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (4))){
var inst_34651 = (state_34671[(8)]);
var inst_34651__$1 = (state_34671[(2)]);
var inst_34652 = (inst_34651__$1 == null);
var inst_34653 = cljs.core.not.call(null,inst_34652);
var state_34671__$1 = (function (){var statearr_34676 = state_34671;
(statearr_34676[(8)] = inst_34651__$1);

return statearr_34676;
})();
if(inst_34653){
var statearr_34677_34697 = state_34671__$1;
(statearr_34677_34697[(1)] = (5));

} else {
var statearr_34678_34698 = state_34671__$1;
(statearr_34678_34698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (6))){
var state_34671__$1 = state_34671;
var statearr_34679_34699 = state_34671__$1;
(statearr_34679_34699[(2)] = null);

(statearr_34679_34699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (3))){
var inst_34668 = (state_34671[(2)]);
var inst_34669 = cljs.core.async.close_BANG_.call(null,out);
var state_34671__$1 = (function (){var statearr_34680 = state_34671;
(statearr_34680[(9)] = inst_34668);

return statearr_34680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34671__$1,inst_34669);
} else {
if((state_val_34672 === (2))){
var state_34671__$1 = state_34671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34671__$1,(4),ch);
} else {
if((state_val_34672 === (11))){
var inst_34651 = (state_34671[(8)]);
var inst_34660 = (state_34671[(2)]);
var inst_34648 = inst_34651;
var state_34671__$1 = (function (){var statearr_34681 = state_34671;
(statearr_34681[(10)] = inst_34660);

(statearr_34681[(7)] = inst_34648);

return statearr_34681;
})();
var statearr_34682_34700 = state_34671__$1;
(statearr_34682_34700[(2)] = null);

(statearr_34682_34700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (9))){
var inst_34651 = (state_34671[(8)]);
var state_34671__$1 = state_34671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34671__$1,(11),out,inst_34651);
} else {
if((state_val_34672 === (5))){
var inst_34651 = (state_34671[(8)]);
var inst_34648 = (state_34671[(7)]);
var inst_34655 = cljs.core._EQ_.call(null,inst_34651,inst_34648);
var state_34671__$1 = state_34671;
if(inst_34655){
var statearr_34684_34701 = state_34671__$1;
(statearr_34684_34701[(1)] = (8));

} else {
var statearr_34685_34702 = state_34671__$1;
(statearr_34685_34702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (10))){
var inst_34663 = (state_34671[(2)]);
var state_34671__$1 = state_34671;
var statearr_34686_34703 = state_34671__$1;
(statearr_34686_34703[(2)] = inst_34663);

(statearr_34686_34703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (8))){
var inst_34648 = (state_34671[(7)]);
var tmp34683 = inst_34648;
var inst_34648__$1 = tmp34683;
var state_34671__$1 = (function (){var statearr_34687 = state_34671;
(statearr_34687[(7)] = inst_34648__$1);

return statearr_34687;
})();
var statearr_34688_34704 = state_34671__$1;
(statearr_34688_34704[(2)] = null);

(statearr_34688_34704[(1)] = (2));


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
});})(c__32958__auto___34694,out))
;
return ((function (switch__32868__auto__,c__32958__auto___34694,out){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_34689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34689[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_34689[(1)] = (1));

return statearr_34689;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_34671){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_34671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e34690){if((e34690 instanceof Object)){
var ex__32872__auto__ = e34690;
var statearr_34691_34705 = state_34671;
(statearr_34691_34705[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34706 = state_34671;
state_34671 = G__34706;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_34671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_34671);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___34694,out))
})();
var state__32960__auto__ = (function (){var statearr_34692 = f__32959__auto__.call(null);
(statearr_34692[(6)] = c__32958__auto___34694);

return statearr_34692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___34694,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34708 = arguments.length;
switch (G__34708) {
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
var c__32958__auto___34774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___34774,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___34774,out){
return (function (state_34746){
var state_val_34747 = (state_34746[(1)]);
if((state_val_34747 === (7))){
var inst_34742 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34748_34775 = state_34746__$1;
(statearr_34748_34775[(2)] = inst_34742);

(statearr_34748_34775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (1))){
var inst_34709 = (new Array(n));
var inst_34710 = inst_34709;
var inst_34711 = (0);
var state_34746__$1 = (function (){var statearr_34749 = state_34746;
(statearr_34749[(7)] = inst_34711);

(statearr_34749[(8)] = inst_34710);

return statearr_34749;
})();
var statearr_34750_34776 = state_34746__$1;
(statearr_34750_34776[(2)] = null);

(statearr_34750_34776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (4))){
var inst_34714 = (state_34746[(9)]);
var inst_34714__$1 = (state_34746[(2)]);
var inst_34715 = (inst_34714__$1 == null);
var inst_34716 = cljs.core.not.call(null,inst_34715);
var state_34746__$1 = (function (){var statearr_34751 = state_34746;
(statearr_34751[(9)] = inst_34714__$1);

return statearr_34751;
})();
if(inst_34716){
var statearr_34752_34777 = state_34746__$1;
(statearr_34752_34777[(1)] = (5));

} else {
var statearr_34753_34778 = state_34746__$1;
(statearr_34753_34778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (15))){
var inst_34736 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34754_34779 = state_34746__$1;
(statearr_34754_34779[(2)] = inst_34736);

(statearr_34754_34779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (13))){
var state_34746__$1 = state_34746;
var statearr_34755_34780 = state_34746__$1;
(statearr_34755_34780[(2)] = null);

(statearr_34755_34780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (6))){
var inst_34711 = (state_34746[(7)]);
var inst_34732 = (inst_34711 > (0));
var state_34746__$1 = state_34746;
if(cljs.core.truth_(inst_34732)){
var statearr_34756_34781 = state_34746__$1;
(statearr_34756_34781[(1)] = (12));

} else {
var statearr_34757_34782 = state_34746__$1;
(statearr_34757_34782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (3))){
var inst_34744 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34746__$1,inst_34744);
} else {
if((state_val_34747 === (12))){
var inst_34710 = (state_34746[(8)]);
var inst_34734 = cljs.core.vec.call(null,inst_34710);
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34746__$1,(15),out,inst_34734);
} else {
if((state_val_34747 === (2))){
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34746__$1,(4),ch);
} else {
if((state_val_34747 === (11))){
var inst_34726 = (state_34746[(2)]);
var inst_34727 = (new Array(n));
var inst_34710 = inst_34727;
var inst_34711 = (0);
var state_34746__$1 = (function (){var statearr_34758 = state_34746;
(statearr_34758[(7)] = inst_34711);

(statearr_34758[(8)] = inst_34710);

(statearr_34758[(10)] = inst_34726);

return statearr_34758;
})();
var statearr_34759_34783 = state_34746__$1;
(statearr_34759_34783[(2)] = null);

(statearr_34759_34783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (9))){
var inst_34710 = (state_34746[(8)]);
var inst_34724 = cljs.core.vec.call(null,inst_34710);
var state_34746__$1 = state_34746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34746__$1,(11),out,inst_34724);
} else {
if((state_val_34747 === (5))){
var inst_34711 = (state_34746[(7)]);
var inst_34710 = (state_34746[(8)]);
var inst_34719 = (state_34746[(11)]);
var inst_34714 = (state_34746[(9)]);
var inst_34718 = (inst_34710[inst_34711] = inst_34714);
var inst_34719__$1 = (inst_34711 + (1));
var inst_34720 = (inst_34719__$1 < n);
var state_34746__$1 = (function (){var statearr_34760 = state_34746;
(statearr_34760[(12)] = inst_34718);

(statearr_34760[(11)] = inst_34719__$1);

return statearr_34760;
})();
if(cljs.core.truth_(inst_34720)){
var statearr_34761_34784 = state_34746__$1;
(statearr_34761_34784[(1)] = (8));

} else {
var statearr_34762_34785 = state_34746__$1;
(statearr_34762_34785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (14))){
var inst_34739 = (state_34746[(2)]);
var inst_34740 = cljs.core.async.close_BANG_.call(null,out);
var state_34746__$1 = (function (){var statearr_34764 = state_34746;
(statearr_34764[(13)] = inst_34739);

return statearr_34764;
})();
var statearr_34765_34786 = state_34746__$1;
(statearr_34765_34786[(2)] = inst_34740);

(statearr_34765_34786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (10))){
var inst_34730 = (state_34746[(2)]);
var state_34746__$1 = state_34746;
var statearr_34766_34787 = state_34746__$1;
(statearr_34766_34787[(2)] = inst_34730);

(statearr_34766_34787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34747 === (8))){
var inst_34710 = (state_34746[(8)]);
var inst_34719 = (state_34746[(11)]);
var tmp34763 = inst_34710;
var inst_34710__$1 = tmp34763;
var inst_34711 = inst_34719;
var state_34746__$1 = (function (){var statearr_34767 = state_34746;
(statearr_34767[(7)] = inst_34711);

(statearr_34767[(8)] = inst_34710__$1);

return statearr_34767;
})();
var statearr_34768_34788 = state_34746__$1;
(statearr_34768_34788[(2)] = null);

(statearr_34768_34788[(1)] = (2));


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
});})(c__32958__auto___34774,out))
;
return ((function (switch__32868__auto__,c__32958__auto___34774,out){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_34769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34769[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_34769[(1)] = (1));

return statearr_34769;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_34746){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_34746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e34770){if((e34770 instanceof Object)){
var ex__32872__auto__ = e34770;
var statearr_34771_34789 = state_34746;
(statearr_34771_34789[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34790 = state_34746;
state_34746 = G__34790;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_34746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_34746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___34774,out))
})();
var state__32960__auto__ = (function (){var statearr_34772 = f__32959__auto__.call(null);
(statearr_34772[(6)] = c__32958__auto___34774);

return statearr_34772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___34774,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34792 = arguments.length;
switch (G__34792) {
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
var c__32958__auto___34862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___34862,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___34862,out){
return (function (state_34834){
var state_val_34835 = (state_34834[(1)]);
if((state_val_34835 === (7))){
var inst_34830 = (state_34834[(2)]);
var state_34834__$1 = state_34834;
var statearr_34836_34863 = state_34834__$1;
(statearr_34836_34863[(2)] = inst_34830);

(statearr_34836_34863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34835 === (1))){
var inst_34793 = [];
var inst_34794 = inst_34793;
var inst_34795 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34834__$1 = (function (){var statearr_34837 = state_34834;
(statearr_34837[(7)] = inst_34795);

(statearr_34837[(8)] = inst_34794);

return statearr_34837;
})();
var statearr_34838_34864 = state_34834__$1;
(statearr_34838_34864[(2)] = null);

(statearr_34838_34864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34835 === (4))){
var inst_34798 = (state_34834[(9)]);
var inst_34798__$1 = (state_34834[(2)]);
var inst_34799 = (inst_34798__$1 == null);
var inst_34800 = cljs.core.not.call(null,inst_34799);
var state_34834__$1 = (function (){var statearr_34839 = state_34834;
(statearr_34839[(9)] = inst_34798__$1);

return statearr_34839;
})();
if(inst_34800){
var statearr_34840_34865 = state_34834__$1;
(statearr_34840_34865[(1)] = (5));

} else {
var statearr_34841_34866 = state_34834__$1;
(statearr_34841_34866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34835 === (15))){
var inst_34824 = (state_34834[(2)]);
var state_34834__$1 = state_34834;
var statearr_34842_34867 = state_34834__$1;
(statearr_34842_34867[(2)] = inst_34824);

(statearr_34842_34867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34835 === (13))){
var state_34834__$1 = state_34834;
var statearr_34843_34868 = state_34834__$1;
(statearr_34843_34868[(2)] = null);

(statearr_34843_34868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34835 === (6))){
var inst_34794 = (state_34834[(8)]);
var inst_34819 = inst_34794.length;
var inst_34820 = (inst_34819 > (0));
var state_34834__$1 = state_34834;
if(cljs.core.truth_(inst_34820)){
var statearr_34844_34869 = state_34834__$1;
(statearr_34844_34869[(1)] = (12));

} else {
var statearr_34845_34870 = state_34834__$1;
(statearr_34845_34870[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34835 === (3))){
var inst_34832 = (state_34834[(2)]);
var state_34834__$1 = state_34834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34834__$1,inst_34832);
} else {
if((state_val_34835 === (12))){
var inst_34794 = (state_34834[(8)]);
var inst_34822 = cljs.core.vec.call(null,inst_34794);
var state_34834__$1 = state_34834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34834__$1,(15),out,inst_34822);
} else {
if((state_val_34835 === (2))){
var state_34834__$1 = state_34834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34834__$1,(4),ch);
} else {
if((state_val_34835 === (11))){
var inst_34798 = (state_34834[(9)]);
var inst_34802 = (state_34834[(10)]);
var inst_34812 = (state_34834[(2)]);
var inst_34813 = [];
var inst_34814 = inst_34813.push(inst_34798);
var inst_34794 = inst_34813;
var inst_34795 = inst_34802;
var state_34834__$1 = (function (){var statearr_34846 = state_34834;
(statearr_34846[(11)] = inst_34812);

(statearr_34846[(7)] = inst_34795);

(statearr_34846[(12)] = inst_34814);

(statearr_34846[(8)] = inst_34794);

return statearr_34846;
})();
var statearr_34847_34871 = state_34834__$1;
(statearr_34847_34871[(2)] = null);

(statearr_34847_34871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34835 === (9))){
var inst_34794 = (state_34834[(8)]);
var inst_34810 = cljs.core.vec.call(null,inst_34794);
var state_34834__$1 = state_34834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34834__$1,(11),out,inst_34810);
} else {
if((state_val_34835 === (5))){
var inst_34798 = (state_34834[(9)]);
var inst_34802 = (state_34834[(10)]);
var inst_34795 = (state_34834[(7)]);
var inst_34802__$1 = f.call(null,inst_34798);
var inst_34803 = cljs.core._EQ_.call(null,inst_34802__$1,inst_34795);
var inst_34804 = cljs.core.keyword_identical_QMARK_.call(null,inst_34795,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34805 = (inst_34803) || (inst_34804);
var state_34834__$1 = (function (){var statearr_34848 = state_34834;
(statearr_34848[(10)] = inst_34802__$1);

return statearr_34848;
})();
if(cljs.core.truth_(inst_34805)){
var statearr_34849_34872 = state_34834__$1;
(statearr_34849_34872[(1)] = (8));

} else {
var statearr_34850_34873 = state_34834__$1;
(statearr_34850_34873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34835 === (14))){
var inst_34827 = (state_34834[(2)]);
var inst_34828 = cljs.core.async.close_BANG_.call(null,out);
var state_34834__$1 = (function (){var statearr_34852 = state_34834;
(statearr_34852[(13)] = inst_34827);

return statearr_34852;
})();
var statearr_34853_34874 = state_34834__$1;
(statearr_34853_34874[(2)] = inst_34828);

(statearr_34853_34874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34835 === (10))){
var inst_34817 = (state_34834[(2)]);
var state_34834__$1 = state_34834;
var statearr_34854_34875 = state_34834__$1;
(statearr_34854_34875[(2)] = inst_34817);

(statearr_34854_34875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34835 === (8))){
var inst_34798 = (state_34834[(9)]);
var inst_34802 = (state_34834[(10)]);
var inst_34794 = (state_34834[(8)]);
var inst_34807 = inst_34794.push(inst_34798);
var tmp34851 = inst_34794;
var inst_34794__$1 = tmp34851;
var inst_34795 = inst_34802;
var state_34834__$1 = (function (){var statearr_34855 = state_34834;
(statearr_34855[(14)] = inst_34807);

(statearr_34855[(7)] = inst_34795);

(statearr_34855[(8)] = inst_34794__$1);

return statearr_34855;
})();
var statearr_34856_34876 = state_34834__$1;
(statearr_34856_34876[(2)] = null);

(statearr_34856_34876[(1)] = (2));


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
});})(c__32958__auto___34862,out))
;
return ((function (switch__32868__auto__,c__32958__auto___34862,out){
return (function() {
var cljs$core$async$state_machine__32869__auto__ = null;
var cljs$core$async$state_machine__32869__auto____0 = (function (){
var statearr_34857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34857[(0)] = cljs$core$async$state_machine__32869__auto__);

(statearr_34857[(1)] = (1));

return statearr_34857;
});
var cljs$core$async$state_machine__32869__auto____1 = (function (state_34834){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_34834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e34858){if((e34858 instanceof Object)){
var ex__32872__auto__ = e34858;
var statearr_34859_34877 = state_34834;
(statearr_34859_34877[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34878 = state_34834;
state_34834 = G__34878;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
cljs$core$async$state_machine__32869__auto__ = function(state_34834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32869__auto____1.call(this,state_34834);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32869__auto____0;
cljs$core$async$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32869__auto____1;
return cljs$core$async$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___34862,out))
})();
var state__32960__auto__ = (function (){var statearr_34860 = f__32959__auto__.call(null);
(statearr_34860[(6)] = c__32958__auto___34862);

return statearr_34860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___34862,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1500333144501