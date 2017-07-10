// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args36594 = [];
var len__27054__auto___36600 = arguments.length;
var i__27055__auto___36601 = (0);
while(true){
if((i__27055__auto___36601 < len__27054__auto___36600)){
args36594.push((arguments[i__27055__auto___36601]));

var G__36602 = (i__27055__auto___36601 + (1));
i__27055__auto___36601 = G__36602;
continue;
} else {
}
break;
}

var G__36596 = args36594.length;
switch (G__36596) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36594.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36597 = (function (f,blockable,meta36598){
this.f = f;
this.blockable = blockable;
this.meta36598 = meta36598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36599,meta36598__$1){
var self__ = this;
var _36599__$1 = this;
return (new cljs.core.async.t_cljs$core$async36597(self__.f,self__.blockable,meta36598__$1));
});

cljs.core.async.t_cljs$core$async36597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36599){
var self__ = this;
var _36599__$1 = this;
return self__.meta36598;
});

cljs.core.async.t_cljs$core$async36597.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36597.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36598","meta36598",-2019676070,null)], null);
});

cljs.core.async.t_cljs$core$async36597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36597";

cljs.core.async.t_cljs$core$async36597.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async36597");
});

cljs.core.async.__GT_t_cljs$core$async36597 = (function cljs$core$async$__GT_t_cljs$core$async36597(f__$1,blockable__$1,meta36598){
return (new cljs.core.async.t_cljs$core$async36597(f__$1,blockable__$1,meta36598));
});

}

return (new cljs.core.async.t_cljs$core$async36597(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args36606 = [];
var len__27054__auto___36609 = arguments.length;
var i__27055__auto___36610 = (0);
while(true){
if((i__27055__auto___36610 < len__27054__auto___36609)){
args36606.push((arguments[i__27055__auto___36610]));

var G__36611 = (i__27055__auto___36610 + (1));
i__27055__auto___36610 = G__36611;
continue;
} else {
}
break;
}

var G__36608 = args36606.length;
switch (G__36608) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36606.length)].join('')));

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
var args36613 = [];
var len__27054__auto___36616 = arguments.length;
var i__27055__auto___36617 = (0);
while(true){
if((i__27055__auto___36617 < len__27054__auto___36616)){
args36613.push((arguments[i__27055__auto___36617]));

var G__36618 = (i__27055__auto___36617 + (1));
i__27055__auto___36617 = G__36618;
continue;
} else {
}
break;
}

var G__36615 = args36613.length;
switch (G__36615) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36613.length)].join('')));

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
var args36620 = [];
var len__27054__auto___36623 = arguments.length;
var i__27055__auto___36624 = (0);
while(true){
if((i__27055__auto___36624 < len__27054__auto___36623)){
args36620.push((arguments[i__27055__auto___36624]));

var G__36625 = (i__27055__auto___36624 + (1));
i__27055__auto___36624 = G__36625;
continue;
} else {
}
break;
}

var G__36622 = args36620.length;
switch (G__36622) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36620.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36627 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36627);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36627,ret){
return (function (){
return fn1.call(null,val_36627);
});})(val_36627,ret))
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
var args36628 = [];
var len__27054__auto___36631 = arguments.length;
var i__27055__auto___36632 = (0);
while(true){
if((i__27055__auto___36632 < len__27054__auto___36631)){
args36628.push((arguments[i__27055__auto___36632]));

var G__36633 = (i__27055__auto___36632 + (1));
i__27055__auto___36632 = G__36633;
continue;
} else {
}
break;
}

var G__36630 = args36628.length;
switch (G__36630) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36628.length)].join('')));

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
var n__26894__auto___36635 = n;
var x_36636 = (0);
while(true){
if((x_36636 < n__26894__auto___36635)){
(a[x_36636] = (0));

var G__36637 = (x_36636 + (1));
x_36636 = G__36637;
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

var G__36638 = (i + (1));
i = G__36638;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36642 = (function (alt_flag,flag,meta36643){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta36643 = meta36643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36644,meta36643__$1){
var self__ = this;
var _36644__$1 = this;
return (new cljs.core.async.t_cljs$core$async36642(self__.alt_flag,self__.flag,meta36643__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36644){
var self__ = this;
var _36644__$1 = this;
return self__.meta36643;
});})(flag))
;

cljs.core.async.t_cljs$core$async36642.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36642.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36642.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36643","meta36643",846116750,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36642";

cljs.core.async.t_cljs$core$async36642.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async36642");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36642 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36642(alt_flag__$1,flag__$1,meta36643){
return (new cljs.core.async.t_cljs$core$async36642(alt_flag__$1,flag__$1,meta36643));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36642(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36648 = (function (alt_handler,flag,cb,meta36649){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta36649 = meta36649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36650,meta36649__$1){
var self__ = this;
var _36650__$1 = this;
return (new cljs.core.async.t_cljs$core$async36648(self__.alt_handler,self__.flag,self__.cb,meta36649__$1));
});

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36650){
var self__ = this;
var _36650__$1 = this;
return self__.meta36649;
});

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36649","meta36649",-1228257503,null)], null);
});

cljs.core.async.t_cljs$core$async36648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36648";

cljs.core.async.t_cljs$core$async36648.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async36648");
});

cljs.core.async.__GT_t_cljs$core$async36648 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36648(alt_handler__$1,flag__$1,cb__$1,meta36649){
return (new cljs.core.async.t_cljs$core$async36648(alt_handler__$1,flag__$1,cb__$1,meta36649));
});

}

return (new cljs.core.async.t_cljs$core$async36648(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36651_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36651_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36652_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36652_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25979__auto__ = wport;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36653 = (i + (1));
i = G__36653;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25979__auto__ = ret;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25967__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25967__auto__;
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
var args__27061__auto__ = [];
var len__27054__auto___36659 = arguments.length;
var i__27055__auto___36660 = (0);
while(true){
if((i__27055__auto___36660 < len__27054__auto___36659)){
args__27061__auto__.push((arguments[i__27055__auto___36660]));

var G__36661 = (i__27055__auto___36660 + (1));
i__27055__auto___36660 = G__36661;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36656){
var map__36657 = p__36656;
var map__36657__$1 = ((((!((map__36657 == null)))?((((map__36657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36657):map__36657);
var opts = map__36657__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36654){
var G__36655 = cljs.core.first.call(null,seq36654);
var seq36654__$1 = cljs.core.next.call(null,seq36654);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36655,seq36654__$1);
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
var args36662 = [];
var len__27054__auto___36712 = arguments.length;
var i__27055__auto___36713 = (0);
while(true){
if((i__27055__auto___36713 < len__27054__auto___36712)){
args36662.push((arguments[i__27055__auto___36713]));

var G__36714 = (i__27055__auto___36713 + (1));
i__27055__auto___36713 = G__36714;
continue;
} else {
}
break;
}

var G__36664 = args36662.length;
switch (G__36664) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36662.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28009__auto___36716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___36716){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___36716){
return (function (state_36688){
var state_val_36689 = (state_36688[(1)]);
if((state_val_36689 === (7))){
var inst_36684 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36690_36717 = state_36688__$1;
(statearr_36690_36717[(2)] = inst_36684);

(statearr_36690_36717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (1))){
var state_36688__$1 = state_36688;
var statearr_36691_36718 = state_36688__$1;
(statearr_36691_36718[(2)] = null);

(statearr_36691_36718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (4))){
var inst_36667 = (state_36688[(7)]);
var inst_36667__$1 = (state_36688[(2)]);
var inst_36668 = (inst_36667__$1 == null);
var state_36688__$1 = (function (){var statearr_36692 = state_36688;
(statearr_36692[(7)] = inst_36667__$1);

return statearr_36692;
})();
if(cljs.core.truth_(inst_36668)){
var statearr_36693_36719 = state_36688__$1;
(statearr_36693_36719[(1)] = (5));

} else {
var statearr_36694_36720 = state_36688__$1;
(statearr_36694_36720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (13))){
var state_36688__$1 = state_36688;
var statearr_36695_36721 = state_36688__$1;
(statearr_36695_36721[(2)] = null);

(statearr_36695_36721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (6))){
var inst_36667 = (state_36688[(7)]);
var state_36688__$1 = state_36688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36688__$1,(11),to,inst_36667);
} else {
if((state_val_36689 === (3))){
var inst_36686 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36688__$1,inst_36686);
} else {
if((state_val_36689 === (12))){
var state_36688__$1 = state_36688;
var statearr_36696_36722 = state_36688__$1;
(statearr_36696_36722[(2)] = null);

(statearr_36696_36722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (2))){
var state_36688__$1 = state_36688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36688__$1,(4),from);
} else {
if((state_val_36689 === (11))){
var inst_36677 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
if(cljs.core.truth_(inst_36677)){
var statearr_36697_36723 = state_36688__$1;
(statearr_36697_36723[(1)] = (12));

} else {
var statearr_36698_36724 = state_36688__$1;
(statearr_36698_36724[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (9))){
var state_36688__$1 = state_36688;
var statearr_36699_36725 = state_36688__$1;
(statearr_36699_36725[(2)] = null);

(statearr_36699_36725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (5))){
var state_36688__$1 = state_36688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36700_36726 = state_36688__$1;
(statearr_36700_36726[(1)] = (8));

} else {
var statearr_36701_36727 = state_36688__$1;
(statearr_36701_36727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (14))){
var inst_36682 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36702_36728 = state_36688__$1;
(statearr_36702_36728[(2)] = inst_36682);

(statearr_36702_36728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (10))){
var inst_36674 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36703_36729 = state_36688__$1;
(statearr_36703_36729[(2)] = inst_36674);

(statearr_36703_36729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (8))){
var inst_36671 = cljs.core.async.close_BANG_.call(null,to);
var state_36688__$1 = state_36688;
var statearr_36704_36730 = state_36688__$1;
(statearr_36704_36730[(2)] = inst_36671);

(statearr_36704_36730[(1)] = (10));


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
});})(c__28009__auto___36716))
;
return ((function (switch__27988__auto__,c__28009__auto___36716){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_36708 = [null,null,null,null,null,null,null,null];
(statearr_36708[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_36708[(1)] = (1));

return statearr_36708;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_36688){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_36688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e36709){if((e36709 instanceof Object)){
var ex__27992__auto__ = e36709;
var statearr_36710_36731 = state_36688;
(statearr_36710_36731[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36732 = state_36688;
state_36688 = G__36732;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_36688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_36688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___36716))
})();
var state__28011__auto__ = (function (){var statearr_36711 = f__28010__auto__.call(null);
(statearr_36711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___36716);

return statearr_36711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___36716))
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
return (function (p__36920){
var vec__36921 = p__36920;
var v = cljs.core.nth.call(null,vec__36921,(0),null);
var p = cljs.core.nth.call(null,vec__36921,(1),null);
var job = vec__36921;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28009__auto___37107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___37107,res,vec__36921,v,p,job,jobs,results){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___37107,res,vec__36921,v,p,job,jobs,results){
return (function (state_36928){
var state_val_36929 = (state_36928[(1)]);
if((state_val_36929 === (1))){
var state_36928__$1 = state_36928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36928__$1,(2),res,v);
} else {
if((state_val_36929 === (2))){
var inst_36925 = (state_36928[(2)]);
var inst_36926 = cljs.core.async.close_BANG_.call(null,res);
var state_36928__$1 = (function (){var statearr_36930 = state_36928;
(statearr_36930[(7)] = inst_36925);

return statearr_36930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36928__$1,inst_36926);
} else {
return null;
}
}
});})(c__28009__auto___37107,res,vec__36921,v,p,job,jobs,results))
;
return ((function (switch__27988__auto__,c__28009__auto___37107,res,vec__36921,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_36934 = [null,null,null,null,null,null,null,null];
(statearr_36934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_36934[(1)] = (1));

return statearr_36934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_36928){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_36928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e36935){if((e36935 instanceof Object)){
var ex__27992__auto__ = e36935;
var statearr_36936_37108 = state_36928;
(statearr_36936_37108[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37109 = state_36928;
state_36928 = G__37109;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_36928){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_36928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___37107,res,vec__36921,v,p,job,jobs,results))
})();
var state__28011__auto__ = (function (){var statearr_36937 = f__28010__auto__.call(null);
(statearr_36937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___37107);

return statearr_36937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___37107,res,vec__36921,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36938){
var vec__36939 = p__36938;
var v = cljs.core.nth.call(null,vec__36939,(0),null);
var p = cljs.core.nth.call(null,vec__36939,(1),null);
var job = vec__36939;
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
var n__26894__auto___37110 = n;
var __37111 = (0);
while(true){
if((__37111 < n__26894__auto___37110)){
var G__36942_37112 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36942_37112) {
case "compute":
var c__28009__auto___37114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37111,c__28009__auto___37114,G__36942_37112,n__26894__auto___37110,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (__37111,c__28009__auto___37114,G__36942_37112,n__26894__auto___37110,jobs,results,process,async){
return (function (state_36955){
var state_val_36956 = (state_36955[(1)]);
if((state_val_36956 === (1))){
var state_36955__$1 = state_36955;
var statearr_36957_37115 = state_36955__$1;
(statearr_36957_37115[(2)] = null);

(statearr_36957_37115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (2))){
var state_36955__$1 = state_36955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36955__$1,(4),jobs);
} else {
if((state_val_36956 === (3))){
var inst_36953 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36955__$1,inst_36953);
} else {
if((state_val_36956 === (4))){
var inst_36945 = (state_36955[(2)]);
var inst_36946 = process.call(null,inst_36945);
var state_36955__$1 = state_36955;
if(cljs.core.truth_(inst_36946)){
var statearr_36958_37116 = state_36955__$1;
(statearr_36958_37116[(1)] = (5));

} else {
var statearr_36959_37117 = state_36955__$1;
(statearr_36959_37117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (5))){
var state_36955__$1 = state_36955;
var statearr_36960_37118 = state_36955__$1;
(statearr_36960_37118[(2)] = null);

(statearr_36960_37118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (6))){
var state_36955__$1 = state_36955;
var statearr_36961_37119 = state_36955__$1;
(statearr_36961_37119[(2)] = null);

(statearr_36961_37119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (7))){
var inst_36951 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
var statearr_36962_37120 = state_36955__$1;
(statearr_36962_37120[(2)] = inst_36951);

(statearr_36962_37120[(1)] = (3));


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
});})(__37111,c__28009__auto___37114,G__36942_37112,n__26894__auto___37110,jobs,results,process,async))
;
return ((function (__37111,switch__27988__auto__,c__28009__auto___37114,G__36942_37112,n__26894__auto___37110,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_36966 = [null,null,null,null,null,null,null];
(statearr_36966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_36966[(1)] = (1));

return statearr_36966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_36955){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_36955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e36967){if((e36967 instanceof Object)){
var ex__27992__auto__ = e36967;
var statearr_36968_37121 = state_36955;
(statearr_36968_37121[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37122 = state_36955;
state_36955 = G__37122;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_36955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_36955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(__37111,switch__27988__auto__,c__28009__auto___37114,G__36942_37112,n__26894__auto___37110,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_36969 = f__28010__auto__.call(null);
(statearr_36969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___37114);

return statearr_36969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(__37111,c__28009__auto___37114,G__36942_37112,n__26894__auto___37110,jobs,results,process,async))
);


break;
case "async":
var c__28009__auto___37123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37111,c__28009__auto___37123,G__36942_37112,n__26894__auto___37110,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (__37111,c__28009__auto___37123,G__36942_37112,n__26894__auto___37110,jobs,results,process,async){
return (function (state_36982){
var state_val_36983 = (state_36982[(1)]);
if((state_val_36983 === (1))){
var state_36982__$1 = state_36982;
var statearr_36984_37124 = state_36982__$1;
(statearr_36984_37124[(2)] = null);

(statearr_36984_37124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (2))){
var state_36982__$1 = state_36982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36982__$1,(4),jobs);
} else {
if((state_val_36983 === (3))){
var inst_36980 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36982__$1,inst_36980);
} else {
if((state_val_36983 === (4))){
var inst_36972 = (state_36982[(2)]);
var inst_36973 = async.call(null,inst_36972);
var state_36982__$1 = state_36982;
if(cljs.core.truth_(inst_36973)){
var statearr_36985_37125 = state_36982__$1;
(statearr_36985_37125[(1)] = (5));

} else {
var statearr_36986_37126 = state_36982__$1;
(statearr_36986_37126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (5))){
var state_36982__$1 = state_36982;
var statearr_36987_37127 = state_36982__$1;
(statearr_36987_37127[(2)] = null);

(statearr_36987_37127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (6))){
var state_36982__$1 = state_36982;
var statearr_36988_37128 = state_36982__$1;
(statearr_36988_37128[(2)] = null);

(statearr_36988_37128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (7))){
var inst_36978 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
var statearr_36989_37129 = state_36982__$1;
(statearr_36989_37129[(2)] = inst_36978);

(statearr_36989_37129[(1)] = (3));


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
});})(__37111,c__28009__auto___37123,G__36942_37112,n__26894__auto___37110,jobs,results,process,async))
;
return ((function (__37111,switch__27988__auto__,c__28009__auto___37123,G__36942_37112,n__26894__auto___37110,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_36993 = [null,null,null,null,null,null,null];
(statearr_36993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_36993[(1)] = (1));

return statearr_36993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_36982){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_36982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e36994){if((e36994 instanceof Object)){
var ex__27992__auto__ = e36994;
var statearr_36995_37130 = state_36982;
(statearr_36995_37130[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37131 = state_36982;
state_36982 = G__37131;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_36982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_36982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(__37111,switch__27988__auto__,c__28009__auto___37123,G__36942_37112,n__26894__auto___37110,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_36996 = f__28010__auto__.call(null);
(statearr_36996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___37123);

return statearr_36996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(__37111,c__28009__auto___37123,G__36942_37112,n__26894__auto___37110,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37132 = (__37111 + (1));
__37111 = G__37132;
continue;
} else {
}
break;
}

var c__28009__auto___37133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___37133,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___37133,jobs,results,process,async){
return (function (state_37018){
var state_val_37019 = (state_37018[(1)]);
if((state_val_37019 === (1))){
var state_37018__$1 = state_37018;
var statearr_37020_37134 = state_37018__$1;
(statearr_37020_37134[(2)] = null);

(statearr_37020_37134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37019 === (2))){
var state_37018__$1 = state_37018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37018__$1,(4),from);
} else {
if((state_val_37019 === (3))){
var inst_37016 = (state_37018[(2)]);
var state_37018__$1 = state_37018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37018__$1,inst_37016);
} else {
if((state_val_37019 === (4))){
var inst_36999 = (state_37018[(7)]);
var inst_36999__$1 = (state_37018[(2)]);
var inst_37000 = (inst_36999__$1 == null);
var state_37018__$1 = (function (){var statearr_37021 = state_37018;
(statearr_37021[(7)] = inst_36999__$1);

return statearr_37021;
})();
if(cljs.core.truth_(inst_37000)){
var statearr_37022_37135 = state_37018__$1;
(statearr_37022_37135[(1)] = (5));

} else {
var statearr_37023_37136 = state_37018__$1;
(statearr_37023_37136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37019 === (5))){
var inst_37002 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37018__$1 = state_37018;
var statearr_37024_37137 = state_37018__$1;
(statearr_37024_37137[(2)] = inst_37002);

(statearr_37024_37137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37019 === (6))){
var inst_37004 = (state_37018[(8)]);
var inst_36999 = (state_37018[(7)]);
var inst_37004__$1 = cljs.core.async.chan.call(null,(1));
var inst_37005 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37006 = [inst_36999,inst_37004__$1];
var inst_37007 = (new cljs.core.PersistentVector(null,2,(5),inst_37005,inst_37006,null));
var state_37018__$1 = (function (){var statearr_37025 = state_37018;
(statearr_37025[(8)] = inst_37004__$1);

return statearr_37025;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37018__$1,(8),jobs,inst_37007);
} else {
if((state_val_37019 === (7))){
var inst_37014 = (state_37018[(2)]);
var state_37018__$1 = state_37018;
var statearr_37026_37138 = state_37018__$1;
(statearr_37026_37138[(2)] = inst_37014);

(statearr_37026_37138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37019 === (8))){
var inst_37004 = (state_37018[(8)]);
var inst_37009 = (state_37018[(2)]);
var state_37018__$1 = (function (){var statearr_37027 = state_37018;
(statearr_37027[(9)] = inst_37009);

return statearr_37027;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37018__$1,(9),results,inst_37004);
} else {
if((state_val_37019 === (9))){
var inst_37011 = (state_37018[(2)]);
var state_37018__$1 = (function (){var statearr_37028 = state_37018;
(statearr_37028[(10)] = inst_37011);

return statearr_37028;
})();
var statearr_37029_37139 = state_37018__$1;
(statearr_37029_37139[(2)] = null);

(statearr_37029_37139[(1)] = (2));


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
});})(c__28009__auto___37133,jobs,results,process,async))
;
return ((function (switch__27988__auto__,c__28009__auto___37133,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_37033 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_37033[(1)] = (1));

return statearr_37033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_37018){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_37018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e37034){if((e37034 instanceof Object)){
var ex__27992__auto__ = e37034;
var statearr_37035_37140 = state_37018;
(statearr_37035_37140[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37141 = state_37018;
state_37018 = G__37141;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_37018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_37018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___37133,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_37036 = f__28010__auto__.call(null);
(statearr_37036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___37133);

return statearr_37036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___37133,jobs,results,process,async))
);


var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__,jobs,results,process,async){
return (function (state_37074){
var state_val_37075 = (state_37074[(1)]);
if((state_val_37075 === (7))){
var inst_37070 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37076_37142 = state_37074__$1;
(statearr_37076_37142[(2)] = inst_37070);

(statearr_37076_37142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (20))){
var state_37074__$1 = state_37074;
var statearr_37077_37143 = state_37074__$1;
(statearr_37077_37143[(2)] = null);

(statearr_37077_37143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (1))){
var state_37074__$1 = state_37074;
var statearr_37078_37144 = state_37074__$1;
(statearr_37078_37144[(2)] = null);

(statearr_37078_37144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (4))){
var inst_37039 = (state_37074[(7)]);
var inst_37039__$1 = (state_37074[(2)]);
var inst_37040 = (inst_37039__$1 == null);
var state_37074__$1 = (function (){var statearr_37079 = state_37074;
(statearr_37079[(7)] = inst_37039__$1);

return statearr_37079;
})();
if(cljs.core.truth_(inst_37040)){
var statearr_37080_37145 = state_37074__$1;
(statearr_37080_37145[(1)] = (5));

} else {
var statearr_37081_37146 = state_37074__$1;
(statearr_37081_37146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (15))){
var inst_37052 = (state_37074[(8)]);
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37074__$1,(18),to,inst_37052);
} else {
if((state_val_37075 === (21))){
var inst_37065 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37082_37147 = state_37074__$1;
(statearr_37082_37147[(2)] = inst_37065);

(statearr_37082_37147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (13))){
var inst_37067 = (state_37074[(2)]);
var state_37074__$1 = (function (){var statearr_37083 = state_37074;
(statearr_37083[(9)] = inst_37067);

return statearr_37083;
})();
var statearr_37084_37148 = state_37074__$1;
(statearr_37084_37148[(2)] = null);

(statearr_37084_37148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (6))){
var inst_37039 = (state_37074[(7)]);
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37074__$1,(11),inst_37039);
} else {
if((state_val_37075 === (17))){
var inst_37060 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
if(cljs.core.truth_(inst_37060)){
var statearr_37085_37149 = state_37074__$1;
(statearr_37085_37149[(1)] = (19));

} else {
var statearr_37086_37150 = state_37074__$1;
(statearr_37086_37150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (3))){
var inst_37072 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37074__$1,inst_37072);
} else {
if((state_val_37075 === (12))){
var inst_37049 = (state_37074[(10)]);
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37074__$1,(14),inst_37049);
} else {
if((state_val_37075 === (2))){
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37074__$1,(4),results);
} else {
if((state_val_37075 === (19))){
var state_37074__$1 = state_37074;
var statearr_37087_37151 = state_37074__$1;
(statearr_37087_37151[(2)] = null);

(statearr_37087_37151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (11))){
var inst_37049 = (state_37074[(2)]);
var state_37074__$1 = (function (){var statearr_37088 = state_37074;
(statearr_37088[(10)] = inst_37049);

return statearr_37088;
})();
var statearr_37089_37152 = state_37074__$1;
(statearr_37089_37152[(2)] = null);

(statearr_37089_37152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (9))){
var state_37074__$1 = state_37074;
var statearr_37090_37153 = state_37074__$1;
(statearr_37090_37153[(2)] = null);

(statearr_37090_37153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (5))){
var state_37074__$1 = state_37074;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37091_37154 = state_37074__$1;
(statearr_37091_37154[(1)] = (8));

} else {
var statearr_37092_37155 = state_37074__$1;
(statearr_37092_37155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (14))){
var inst_37052 = (state_37074[(8)]);
var inst_37054 = (state_37074[(11)]);
var inst_37052__$1 = (state_37074[(2)]);
var inst_37053 = (inst_37052__$1 == null);
var inst_37054__$1 = cljs.core.not.call(null,inst_37053);
var state_37074__$1 = (function (){var statearr_37093 = state_37074;
(statearr_37093[(8)] = inst_37052__$1);

(statearr_37093[(11)] = inst_37054__$1);

return statearr_37093;
})();
if(inst_37054__$1){
var statearr_37094_37156 = state_37074__$1;
(statearr_37094_37156[(1)] = (15));

} else {
var statearr_37095_37157 = state_37074__$1;
(statearr_37095_37157[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (16))){
var inst_37054 = (state_37074[(11)]);
var state_37074__$1 = state_37074;
var statearr_37096_37158 = state_37074__$1;
(statearr_37096_37158[(2)] = inst_37054);

(statearr_37096_37158[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (10))){
var inst_37046 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37097_37159 = state_37074__$1;
(statearr_37097_37159[(2)] = inst_37046);

(statearr_37097_37159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (18))){
var inst_37057 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37098_37160 = state_37074__$1;
(statearr_37098_37160[(2)] = inst_37057);

(statearr_37098_37160[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (8))){
var inst_37043 = cljs.core.async.close_BANG_.call(null,to);
var state_37074__$1 = state_37074;
var statearr_37099_37161 = state_37074__$1;
(statearr_37099_37161[(2)] = inst_37043);

(statearr_37099_37161[(1)] = (10));


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
});})(c__28009__auto__,jobs,results,process,async))
;
return ((function (switch__27988__auto__,c__28009__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_37103 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_37103[(1)] = (1));

return statearr_37103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_37074){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_37074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e37104){if((e37104 instanceof Object)){
var ex__27992__auto__ = e37104;
var statearr_37105_37162 = state_37074;
(statearr_37105_37162[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37163 = state_37074;
state_37074 = G__37163;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_37074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_37074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_37106 = f__28010__auto__.call(null);
(statearr_37106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_37106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__,jobs,results,process,async))
);

return c__28009__auto__;
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
var args37164 = [];
var len__27054__auto___37167 = arguments.length;
var i__27055__auto___37168 = (0);
while(true){
if((i__27055__auto___37168 < len__27054__auto___37167)){
args37164.push((arguments[i__27055__auto___37168]));

var G__37169 = (i__27055__auto___37168 + (1));
i__27055__auto___37168 = G__37169;
continue;
} else {
}
break;
}

var G__37166 = args37164.length;
switch (G__37166) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37164.length)].join('')));

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
var args37171 = [];
var len__27054__auto___37174 = arguments.length;
var i__27055__auto___37175 = (0);
while(true){
if((i__27055__auto___37175 < len__27054__auto___37174)){
args37171.push((arguments[i__27055__auto___37175]));

var G__37176 = (i__27055__auto___37175 + (1));
i__27055__auto___37175 = G__37176;
continue;
} else {
}
break;
}

var G__37173 = args37171.length;
switch (G__37173) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37171.length)].join('')));

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
var args37178 = [];
var len__27054__auto___37231 = arguments.length;
var i__27055__auto___37232 = (0);
while(true){
if((i__27055__auto___37232 < len__27054__auto___37231)){
args37178.push((arguments[i__27055__auto___37232]));

var G__37233 = (i__27055__auto___37232 + (1));
i__27055__auto___37232 = G__37233;
continue;
} else {
}
break;
}

var G__37180 = args37178.length;
switch (G__37180) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37178.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28009__auto___37235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___37235,tc,fc){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___37235,tc,fc){
return (function (state_37206){
var state_val_37207 = (state_37206[(1)]);
if((state_val_37207 === (7))){
var inst_37202 = (state_37206[(2)]);
var state_37206__$1 = state_37206;
var statearr_37208_37236 = state_37206__$1;
(statearr_37208_37236[(2)] = inst_37202);

(statearr_37208_37236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37207 === (1))){
var state_37206__$1 = state_37206;
var statearr_37209_37237 = state_37206__$1;
(statearr_37209_37237[(2)] = null);

(statearr_37209_37237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37207 === (4))){
var inst_37183 = (state_37206[(7)]);
var inst_37183__$1 = (state_37206[(2)]);
var inst_37184 = (inst_37183__$1 == null);
var state_37206__$1 = (function (){var statearr_37210 = state_37206;
(statearr_37210[(7)] = inst_37183__$1);

return statearr_37210;
})();
if(cljs.core.truth_(inst_37184)){
var statearr_37211_37238 = state_37206__$1;
(statearr_37211_37238[(1)] = (5));

} else {
var statearr_37212_37239 = state_37206__$1;
(statearr_37212_37239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37207 === (13))){
var state_37206__$1 = state_37206;
var statearr_37213_37240 = state_37206__$1;
(statearr_37213_37240[(2)] = null);

(statearr_37213_37240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37207 === (6))){
var inst_37183 = (state_37206[(7)]);
var inst_37189 = p.call(null,inst_37183);
var state_37206__$1 = state_37206;
if(cljs.core.truth_(inst_37189)){
var statearr_37214_37241 = state_37206__$1;
(statearr_37214_37241[(1)] = (9));

} else {
var statearr_37215_37242 = state_37206__$1;
(statearr_37215_37242[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37207 === (3))){
var inst_37204 = (state_37206[(2)]);
var state_37206__$1 = state_37206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37206__$1,inst_37204);
} else {
if((state_val_37207 === (12))){
var state_37206__$1 = state_37206;
var statearr_37216_37243 = state_37206__$1;
(statearr_37216_37243[(2)] = null);

(statearr_37216_37243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37207 === (2))){
var state_37206__$1 = state_37206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37206__$1,(4),ch);
} else {
if((state_val_37207 === (11))){
var inst_37183 = (state_37206[(7)]);
var inst_37193 = (state_37206[(2)]);
var state_37206__$1 = state_37206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37206__$1,(8),inst_37193,inst_37183);
} else {
if((state_val_37207 === (9))){
var state_37206__$1 = state_37206;
var statearr_37217_37244 = state_37206__$1;
(statearr_37217_37244[(2)] = tc);

(statearr_37217_37244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37207 === (5))){
var inst_37186 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37187 = cljs.core.async.close_BANG_.call(null,fc);
var state_37206__$1 = (function (){var statearr_37218 = state_37206;
(statearr_37218[(8)] = inst_37186);

return statearr_37218;
})();
var statearr_37219_37245 = state_37206__$1;
(statearr_37219_37245[(2)] = inst_37187);

(statearr_37219_37245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37207 === (14))){
var inst_37200 = (state_37206[(2)]);
var state_37206__$1 = state_37206;
var statearr_37220_37246 = state_37206__$1;
(statearr_37220_37246[(2)] = inst_37200);

(statearr_37220_37246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37207 === (10))){
var state_37206__$1 = state_37206;
var statearr_37221_37247 = state_37206__$1;
(statearr_37221_37247[(2)] = fc);

(statearr_37221_37247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37207 === (8))){
var inst_37195 = (state_37206[(2)]);
var state_37206__$1 = state_37206;
if(cljs.core.truth_(inst_37195)){
var statearr_37222_37248 = state_37206__$1;
(statearr_37222_37248[(1)] = (12));

} else {
var statearr_37223_37249 = state_37206__$1;
(statearr_37223_37249[(1)] = (13));

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
});})(c__28009__auto___37235,tc,fc))
;
return ((function (switch__27988__auto__,c__28009__auto___37235,tc,fc){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_37227 = [null,null,null,null,null,null,null,null,null];
(statearr_37227[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_37227[(1)] = (1));

return statearr_37227;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_37206){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_37206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e37228){if((e37228 instanceof Object)){
var ex__27992__auto__ = e37228;
var statearr_37229_37250 = state_37206;
(statearr_37229_37250[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37251 = state_37206;
state_37206 = G__37251;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_37206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_37206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___37235,tc,fc))
})();
var state__28011__auto__ = (function (){var statearr_37230 = f__28010__auto__.call(null);
(statearr_37230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___37235);

return statearr_37230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___37235,tc,fc))
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
var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__){
return (function (state_37315){
var state_val_37316 = (state_37315[(1)]);
if((state_val_37316 === (7))){
var inst_37311 = (state_37315[(2)]);
var state_37315__$1 = state_37315;
var statearr_37317_37338 = state_37315__$1;
(statearr_37317_37338[(2)] = inst_37311);

(statearr_37317_37338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (1))){
var inst_37295 = init;
var state_37315__$1 = (function (){var statearr_37318 = state_37315;
(statearr_37318[(7)] = inst_37295);

return statearr_37318;
})();
var statearr_37319_37339 = state_37315__$1;
(statearr_37319_37339[(2)] = null);

(statearr_37319_37339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (4))){
var inst_37298 = (state_37315[(8)]);
var inst_37298__$1 = (state_37315[(2)]);
var inst_37299 = (inst_37298__$1 == null);
var state_37315__$1 = (function (){var statearr_37320 = state_37315;
(statearr_37320[(8)] = inst_37298__$1);

return statearr_37320;
})();
if(cljs.core.truth_(inst_37299)){
var statearr_37321_37340 = state_37315__$1;
(statearr_37321_37340[(1)] = (5));

} else {
var statearr_37322_37341 = state_37315__$1;
(statearr_37322_37341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (6))){
var inst_37298 = (state_37315[(8)]);
var inst_37302 = (state_37315[(9)]);
var inst_37295 = (state_37315[(7)]);
var inst_37302__$1 = f.call(null,inst_37295,inst_37298);
var inst_37303 = cljs.core.reduced_QMARK_.call(null,inst_37302__$1);
var state_37315__$1 = (function (){var statearr_37323 = state_37315;
(statearr_37323[(9)] = inst_37302__$1);

return statearr_37323;
})();
if(inst_37303){
var statearr_37324_37342 = state_37315__$1;
(statearr_37324_37342[(1)] = (8));

} else {
var statearr_37325_37343 = state_37315__$1;
(statearr_37325_37343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (3))){
var inst_37313 = (state_37315[(2)]);
var state_37315__$1 = state_37315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37315__$1,inst_37313);
} else {
if((state_val_37316 === (2))){
var state_37315__$1 = state_37315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37315__$1,(4),ch);
} else {
if((state_val_37316 === (9))){
var inst_37302 = (state_37315[(9)]);
var inst_37295 = inst_37302;
var state_37315__$1 = (function (){var statearr_37326 = state_37315;
(statearr_37326[(7)] = inst_37295);

return statearr_37326;
})();
var statearr_37327_37344 = state_37315__$1;
(statearr_37327_37344[(2)] = null);

(statearr_37327_37344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (5))){
var inst_37295 = (state_37315[(7)]);
var state_37315__$1 = state_37315;
var statearr_37328_37345 = state_37315__$1;
(statearr_37328_37345[(2)] = inst_37295);

(statearr_37328_37345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (10))){
var inst_37309 = (state_37315[(2)]);
var state_37315__$1 = state_37315;
var statearr_37329_37346 = state_37315__$1;
(statearr_37329_37346[(2)] = inst_37309);

(statearr_37329_37346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (8))){
var inst_37302 = (state_37315[(9)]);
var inst_37305 = cljs.core.deref.call(null,inst_37302);
var state_37315__$1 = state_37315;
var statearr_37330_37347 = state_37315__$1;
(statearr_37330_37347[(2)] = inst_37305);

(statearr_37330_37347[(1)] = (10));


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
});})(c__28009__auto__))
;
return ((function (switch__27988__auto__,c__28009__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27989__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27989__auto____0 = (function (){
var statearr_37334 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37334[(0)] = cljs$core$async$reduce_$_state_machine__27989__auto__);

(statearr_37334[(1)] = (1));

return statearr_37334;
});
var cljs$core$async$reduce_$_state_machine__27989__auto____1 = (function (state_37315){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_37315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e37335){if((e37335 instanceof Object)){
var ex__27992__auto__ = e37335;
var statearr_37336_37348 = state_37315;
(statearr_37336_37348[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37349 = state_37315;
state_37315 = G__37349;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27989__auto__ = function(state_37315){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27989__auto____1.call(this,state_37315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27989__auto____0;
cljs$core$async$reduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27989__auto____1;
return cljs$core$async$reduce_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_37337 = f__28010__auto__.call(null);
(statearr_37337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_37337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__))
);

return c__28009__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__,f__$1){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__,f__$1){
return (function (state_37369){
var state_val_37370 = (state_37369[(1)]);
if((state_val_37370 === (1))){
var inst_37364 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_37369__$1 = state_37369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37369__$1,(2),inst_37364);
} else {
if((state_val_37370 === (2))){
var inst_37366 = (state_37369[(2)]);
var inst_37367 = f__$1.call(null,inst_37366);
var state_37369__$1 = state_37369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37369__$1,inst_37367);
} else {
return null;
}
}
});})(c__28009__auto__,f__$1))
;
return ((function (switch__27988__auto__,c__28009__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27989__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27989__auto____0 = (function (){
var statearr_37374 = [null,null,null,null,null,null,null];
(statearr_37374[(0)] = cljs$core$async$transduce_$_state_machine__27989__auto__);

(statearr_37374[(1)] = (1));

return statearr_37374;
});
var cljs$core$async$transduce_$_state_machine__27989__auto____1 = (function (state_37369){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_37369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e37375){if((e37375 instanceof Object)){
var ex__27992__auto__ = e37375;
var statearr_37376_37378 = state_37369;
(statearr_37376_37378[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37379 = state_37369;
state_37369 = G__37379;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27989__auto__ = function(state_37369){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27989__auto____1.call(this,state_37369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27989__auto____0;
cljs$core$async$transduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27989__auto____1;
return cljs$core$async$transduce_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,f__$1))
})();
var state__28011__auto__ = (function (){var statearr_37377 = f__28010__auto__.call(null);
(statearr_37377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_37377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__,f__$1))
);

return c__28009__auto__;
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
var args37380 = [];
var len__27054__auto___37432 = arguments.length;
var i__27055__auto___37433 = (0);
while(true){
if((i__27055__auto___37433 < len__27054__auto___37432)){
args37380.push((arguments[i__27055__auto___37433]));

var G__37434 = (i__27055__auto___37433 + (1));
i__27055__auto___37433 = G__37434;
continue;
} else {
}
break;
}

var G__37382 = args37380.length;
switch (G__37382) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37380.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__){
return (function (state_37407){
var state_val_37408 = (state_37407[(1)]);
if((state_val_37408 === (7))){
var inst_37389 = (state_37407[(2)]);
var state_37407__$1 = state_37407;
var statearr_37409_37436 = state_37407__$1;
(statearr_37409_37436[(2)] = inst_37389);

(statearr_37409_37436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (1))){
var inst_37383 = cljs.core.seq.call(null,coll);
var inst_37384 = inst_37383;
var state_37407__$1 = (function (){var statearr_37410 = state_37407;
(statearr_37410[(7)] = inst_37384);

return statearr_37410;
})();
var statearr_37411_37437 = state_37407__$1;
(statearr_37411_37437[(2)] = null);

(statearr_37411_37437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (4))){
var inst_37384 = (state_37407[(7)]);
var inst_37387 = cljs.core.first.call(null,inst_37384);
var state_37407__$1 = state_37407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37407__$1,(7),ch,inst_37387);
} else {
if((state_val_37408 === (13))){
var inst_37401 = (state_37407[(2)]);
var state_37407__$1 = state_37407;
var statearr_37412_37438 = state_37407__$1;
(statearr_37412_37438[(2)] = inst_37401);

(statearr_37412_37438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (6))){
var inst_37392 = (state_37407[(2)]);
var state_37407__$1 = state_37407;
if(cljs.core.truth_(inst_37392)){
var statearr_37413_37439 = state_37407__$1;
(statearr_37413_37439[(1)] = (8));

} else {
var statearr_37414_37440 = state_37407__$1;
(statearr_37414_37440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (3))){
var inst_37405 = (state_37407[(2)]);
var state_37407__$1 = state_37407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37407__$1,inst_37405);
} else {
if((state_val_37408 === (12))){
var state_37407__$1 = state_37407;
var statearr_37415_37441 = state_37407__$1;
(statearr_37415_37441[(2)] = null);

(statearr_37415_37441[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (2))){
var inst_37384 = (state_37407[(7)]);
var state_37407__$1 = state_37407;
if(cljs.core.truth_(inst_37384)){
var statearr_37416_37442 = state_37407__$1;
(statearr_37416_37442[(1)] = (4));

} else {
var statearr_37417_37443 = state_37407__$1;
(statearr_37417_37443[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (11))){
var inst_37398 = cljs.core.async.close_BANG_.call(null,ch);
var state_37407__$1 = state_37407;
var statearr_37418_37444 = state_37407__$1;
(statearr_37418_37444[(2)] = inst_37398);

(statearr_37418_37444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (9))){
var state_37407__$1 = state_37407;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37419_37445 = state_37407__$1;
(statearr_37419_37445[(1)] = (11));

} else {
var statearr_37420_37446 = state_37407__$1;
(statearr_37420_37446[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (5))){
var inst_37384 = (state_37407[(7)]);
var state_37407__$1 = state_37407;
var statearr_37421_37447 = state_37407__$1;
(statearr_37421_37447[(2)] = inst_37384);

(statearr_37421_37447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (10))){
var inst_37403 = (state_37407[(2)]);
var state_37407__$1 = state_37407;
var statearr_37422_37448 = state_37407__$1;
(statearr_37422_37448[(2)] = inst_37403);

(statearr_37422_37448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37408 === (8))){
var inst_37384 = (state_37407[(7)]);
var inst_37394 = cljs.core.next.call(null,inst_37384);
var inst_37384__$1 = inst_37394;
var state_37407__$1 = (function (){var statearr_37423 = state_37407;
(statearr_37423[(7)] = inst_37384__$1);

return statearr_37423;
})();
var statearr_37424_37449 = state_37407__$1;
(statearr_37424_37449[(2)] = null);

(statearr_37424_37449[(1)] = (2));


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
});})(c__28009__auto__))
;
return ((function (switch__27988__auto__,c__28009__auto__){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_37428 = [null,null,null,null,null,null,null,null];
(statearr_37428[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_37428[(1)] = (1));

return statearr_37428;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_37407){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_37407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e37429){if((e37429 instanceof Object)){
var ex__27992__auto__ = e37429;
var statearr_37430_37450 = state_37407;
(statearr_37430_37450[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37451 = state_37407;
state_37407 = G__37451;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_37407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_37407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_37431 = f__28010__auto__.call(null);
(statearr_37431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_37431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__))
);

return c__28009__auto__;
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
var x__26642__auto__ = (((_ == null))?null:_);
var m__26643__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,_);
} else {
var m__26643__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,_);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26643__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m);
} else {
var m__26643__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async37677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37677 = (function (mult,ch,cs,meta37678){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta37678 = meta37678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37679,meta37678__$1){
var self__ = this;
var _37679__$1 = this;
return (new cljs.core.async.t_cljs$core$async37677(self__.mult,self__.ch,self__.cs,meta37678__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37679){
var self__ = this;
var _37679__$1 = this;
return self__.meta37678;
});})(cs))
;

cljs.core.async.t_cljs$core$async37677.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37677.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async37677.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37677.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37677.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37677.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37678","meta37678",-990278577,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37677";

cljs.core.async.t_cljs$core$async37677.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async37677");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37677 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37677(mult__$1,ch__$1,cs__$1,meta37678){
return (new cljs.core.async.t_cljs$core$async37677(mult__$1,ch__$1,cs__$1,meta37678));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37677(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28009__auto___37902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___37902,cs,m,dchan,dctr,done){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___37902,cs,m,dchan,dctr,done){
return (function (state_37814){
var state_val_37815 = (state_37814[(1)]);
if((state_val_37815 === (7))){
var inst_37810 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37816_37903 = state_37814__$1;
(statearr_37816_37903[(2)] = inst_37810);

(statearr_37816_37903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (20))){
var inst_37713 = (state_37814[(7)]);
var inst_37725 = cljs.core.first.call(null,inst_37713);
var inst_37726 = cljs.core.nth.call(null,inst_37725,(0),null);
var inst_37727 = cljs.core.nth.call(null,inst_37725,(1),null);
var state_37814__$1 = (function (){var statearr_37817 = state_37814;
(statearr_37817[(8)] = inst_37726);

return statearr_37817;
})();
if(cljs.core.truth_(inst_37727)){
var statearr_37818_37904 = state_37814__$1;
(statearr_37818_37904[(1)] = (22));

} else {
var statearr_37819_37905 = state_37814__$1;
(statearr_37819_37905[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (27))){
var inst_37682 = (state_37814[(9)]);
var inst_37755 = (state_37814[(10)]);
var inst_37757 = (state_37814[(11)]);
var inst_37762 = (state_37814[(12)]);
var inst_37762__$1 = cljs.core._nth.call(null,inst_37755,inst_37757);
var inst_37763 = cljs.core.async.put_BANG_.call(null,inst_37762__$1,inst_37682,done);
var state_37814__$1 = (function (){var statearr_37820 = state_37814;
(statearr_37820[(12)] = inst_37762__$1);

return statearr_37820;
})();
if(cljs.core.truth_(inst_37763)){
var statearr_37821_37906 = state_37814__$1;
(statearr_37821_37906[(1)] = (30));

} else {
var statearr_37822_37907 = state_37814__$1;
(statearr_37822_37907[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (1))){
var state_37814__$1 = state_37814;
var statearr_37823_37908 = state_37814__$1;
(statearr_37823_37908[(2)] = null);

(statearr_37823_37908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (24))){
var inst_37713 = (state_37814[(7)]);
var inst_37732 = (state_37814[(2)]);
var inst_37733 = cljs.core.next.call(null,inst_37713);
var inst_37691 = inst_37733;
var inst_37692 = null;
var inst_37693 = (0);
var inst_37694 = (0);
var state_37814__$1 = (function (){var statearr_37824 = state_37814;
(statearr_37824[(13)] = inst_37732);

(statearr_37824[(14)] = inst_37692);

(statearr_37824[(15)] = inst_37693);

(statearr_37824[(16)] = inst_37691);

(statearr_37824[(17)] = inst_37694);

return statearr_37824;
})();
var statearr_37825_37909 = state_37814__$1;
(statearr_37825_37909[(2)] = null);

(statearr_37825_37909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (39))){
var state_37814__$1 = state_37814;
var statearr_37829_37910 = state_37814__$1;
(statearr_37829_37910[(2)] = null);

(statearr_37829_37910[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (4))){
var inst_37682 = (state_37814[(9)]);
var inst_37682__$1 = (state_37814[(2)]);
var inst_37683 = (inst_37682__$1 == null);
var state_37814__$1 = (function (){var statearr_37830 = state_37814;
(statearr_37830[(9)] = inst_37682__$1);

return statearr_37830;
})();
if(cljs.core.truth_(inst_37683)){
var statearr_37831_37911 = state_37814__$1;
(statearr_37831_37911[(1)] = (5));

} else {
var statearr_37832_37912 = state_37814__$1;
(statearr_37832_37912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (15))){
var inst_37692 = (state_37814[(14)]);
var inst_37693 = (state_37814[(15)]);
var inst_37691 = (state_37814[(16)]);
var inst_37694 = (state_37814[(17)]);
var inst_37709 = (state_37814[(2)]);
var inst_37710 = (inst_37694 + (1));
var tmp37826 = inst_37692;
var tmp37827 = inst_37693;
var tmp37828 = inst_37691;
var inst_37691__$1 = tmp37828;
var inst_37692__$1 = tmp37826;
var inst_37693__$1 = tmp37827;
var inst_37694__$1 = inst_37710;
var state_37814__$1 = (function (){var statearr_37833 = state_37814;
(statearr_37833[(14)] = inst_37692__$1);

(statearr_37833[(15)] = inst_37693__$1);

(statearr_37833[(16)] = inst_37691__$1);

(statearr_37833[(17)] = inst_37694__$1);

(statearr_37833[(18)] = inst_37709);

return statearr_37833;
})();
var statearr_37834_37913 = state_37814__$1;
(statearr_37834_37913[(2)] = null);

(statearr_37834_37913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (21))){
var inst_37736 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37838_37914 = state_37814__$1;
(statearr_37838_37914[(2)] = inst_37736);

(statearr_37838_37914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (31))){
var inst_37762 = (state_37814[(12)]);
var inst_37766 = done.call(null,null);
var inst_37767 = cljs.core.async.untap_STAR_.call(null,m,inst_37762);
var state_37814__$1 = (function (){var statearr_37839 = state_37814;
(statearr_37839[(19)] = inst_37766);

return statearr_37839;
})();
var statearr_37840_37915 = state_37814__$1;
(statearr_37840_37915[(2)] = inst_37767);

(statearr_37840_37915[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (32))){
var inst_37755 = (state_37814[(10)]);
var inst_37757 = (state_37814[(11)]);
var inst_37754 = (state_37814[(20)]);
var inst_37756 = (state_37814[(21)]);
var inst_37769 = (state_37814[(2)]);
var inst_37770 = (inst_37757 + (1));
var tmp37835 = inst_37755;
var tmp37836 = inst_37754;
var tmp37837 = inst_37756;
var inst_37754__$1 = tmp37836;
var inst_37755__$1 = tmp37835;
var inst_37756__$1 = tmp37837;
var inst_37757__$1 = inst_37770;
var state_37814__$1 = (function (){var statearr_37841 = state_37814;
(statearr_37841[(10)] = inst_37755__$1);

(statearr_37841[(11)] = inst_37757__$1);

(statearr_37841[(22)] = inst_37769);

(statearr_37841[(20)] = inst_37754__$1);

(statearr_37841[(21)] = inst_37756__$1);

return statearr_37841;
})();
var statearr_37842_37916 = state_37814__$1;
(statearr_37842_37916[(2)] = null);

(statearr_37842_37916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (40))){
var inst_37782 = (state_37814[(23)]);
var inst_37786 = done.call(null,null);
var inst_37787 = cljs.core.async.untap_STAR_.call(null,m,inst_37782);
var state_37814__$1 = (function (){var statearr_37843 = state_37814;
(statearr_37843[(24)] = inst_37786);

return statearr_37843;
})();
var statearr_37844_37917 = state_37814__$1;
(statearr_37844_37917[(2)] = inst_37787);

(statearr_37844_37917[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (33))){
var inst_37773 = (state_37814[(25)]);
var inst_37775 = cljs.core.chunked_seq_QMARK_.call(null,inst_37773);
var state_37814__$1 = state_37814;
if(inst_37775){
var statearr_37845_37918 = state_37814__$1;
(statearr_37845_37918[(1)] = (36));

} else {
var statearr_37846_37919 = state_37814__$1;
(statearr_37846_37919[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (13))){
var inst_37703 = (state_37814[(26)]);
var inst_37706 = cljs.core.async.close_BANG_.call(null,inst_37703);
var state_37814__$1 = state_37814;
var statearr_37847_37920 = state_37814__$1;
(statearr_37847_37920[(2)] = inst_37706);

(statearr_37847_37920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (22))){
var inst_37726 = (state_37814[(8)]);
var inst_37729 = cljs.core.async.close_BANG_.call(null,inst_37726);
var state_37814__$1 = state_37814;
var statearr_37848_37921 = state_37814__$1;
(statearr_37848_37921[(2)] = inst_37729);

(statearr_37848_37921[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (36))){
var inst_37773 = (state_37814[(25)]);
var inst_37777 = cljs.core.chunk_first.call(null,inst_37773);
var inst_37778 = cljs.core.chunk_rest.call(null,inst_37773);
var inst_37779 = cljs.core.count.call(null,inst_37777);
var inst_37754 = inst_37778;
var inst_37755 = inst_37777;
var inst_37756 = inst_37779;
var inst_37757 = (0);
var state_37814__$1 = (function (){var statearr_37849 = state_37814;
(statearr_37849[(10)] = inst_37755);

(statearr_37849[(11)] = inst_37757);

(statearr_37849[(20)] = inst_37754);

(statearr_37849[(21)] = inst_37756);

return statearr_37849;
})();
var statearr_37850_37922 = state_37814__$1;
(statearr_37850_37922[(2)] = null);

(statearr_37850_37922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (41))){
var inst_37773 = (state_37814[(25)]);
var inst_37789 = (state_37814[(2)]);
var inst_37790 = cljs.core.next.call(null,inst_37773);
var inst_37754 = inst_37790;
var inst_37755 = null;
var inst_37756 = (0);
var inst_37757 = (0);
var state_37814__$1 = (function (){var statearr_37851 = state_37814;
(statearr_37851[(10)] = inst_37755);

(statearr_37851[(11)] = inst_37757);

(statearr_37851[(20)] = inst_37754);

(statearr_37851[(21)] = inst_37756);

(statearr_37851[(27)] = inst_37789);

return statearr_37851;
})();
var statearr_37852_37923 = state_37814__$1;
(statearr_37852_37923[(2)] = null);

(statearr_37852_37923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (43))){
var state_37814__$1 = state_37814;
var statearr_37853_37924 = state_37814__$1;
(statearr_37853_37924[(2)] = null);

(statearr_37853_37924[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (29))){
var inst_37798 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37854_37925 = state_37814__$1;
(statearr_37854_37925[(2)] = inst_37798);

(statearr_37854_37925[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (44))){
var inst_37807 = (state_37814[(2)]);
var state_37814__$1 = (function (){var statearr_37855 = state_37814;
(statearr_37855[(28)] = inst_37807);

return statearr_37855;
})();
var statearr_37856_37926 = state_37814__$1;
(statearr_37856_37926[(2)] = null);

(statearr_37856_37926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (6))){
var inst_37746 = (state_37814[(29)]);
var inst_37745 = cljs.core.deref.call(null,cs);
var inst_37746__$1 = cljs.core.keys.call(null,inst_37745);
var inst_37747 = cljs.core.count.call(null,inst_37746__$1);
var inst_37748 = cljs.core.reset_BANG_.call(null,dctr,inst_37747);
var inst_37753 = cljs.core.seq.call(null,inst_37746__$1);
var inst_37754 = inst_37753;
var inst_37755 = null;
var inst_37756 = (0);
var inst_37757 = (0);
var state_37814__$1 = (function (){var statearr_37857 = state_37814;
(statearr_37857[(29)] = inst_37746__$1);

(statearr_37857[(10)] = inst_37755);

(statearr_37857[(11)] = inst_37757);

(statearr_37857[(30)] = inst_37748);

(statearr_37857[(20)] = inst_37754);

(statearr_37857[(21)] = inst_37756);

return statearr_37857;
})();
var statearr_37858_37927 = state_37814__$1;
(statearr_37858_37927[(2)] = null);

(statearr_37858_37927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (28))){
var inst_37773 = (state_37814[(25)]);
var inst_37754 = (state_37814[(20)]);
var inst_37773__$1 = cljs.core.seq.call(null,inst_37754);
var state_37814__$1 = (function (){var statearr_37859 = state_37814;
(statearr_37859[(25)] = inst_37773__$1);

return statearr_37859;
})();
if(inst_37773__$1){
var statearr_37860_37928 = state_37814__$1;
(statearr_37860_37928[(1)] = (33));

} else {
var statearr_37861_37929 = state_37814__$1;
(statearr_37861_37929[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (25))){
var inst_37757 = (state_37814[(11)]);
var inst_37756 = (state_37814[(21)]);
var inst_37759 = (inst_37757 < inst_37756);
var inst_37760 = inst_37759;
var state_37814__$1 = state_37814;
if(cljs.core.truth_(inst_37760)){
var statearr_37862_37930 = state_37814__$1;
(statearr_37862_37930[(1)] = (27));

} else {
var statearr_37863_37931 = state_37814__$1;
(statearr_37863_37931[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (34))){
var state_37814__$1 = state_37814;
var statearr_37864_37932 = state_37814__$1;
(statearr_37864_37932[(2)] = null);

(statearr_37864_37932[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (17))){
var state_37814__$1 = state_37814;
var statearr_37865_37933 = state_37814__$1;
(statearr_37865_37933[(2)] = null);

(statearr_37865_37933[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (3))){
var inst_37812 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37814__$1,inst_37812);
} else {
if((state_val_37815 === (12))){
var inst_37741 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37866_37934 = state_37814__$1;
(statearr_37866_37934[(2)] = inst_37741);

(statearr_37866_37934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (2))){
var state_37814__$1 = state_37814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37814__$1,(4),ch);
} else {
if((state_val_37815 === (23))){
var state_37814__$1 = state_37814;
var statearr_37867_37935 = state_37814__$1;
(statearr_37867_37935[(2)] = null);

(statearr_37867_37935[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (35))){
var inst_37796 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37868_37936 = state_37814__$1;
(statearr_37868_37936[(2)] = inst_37796);

(statearr_37868_37936[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (19))){
var inst_37713 = (state_37814[(7)]);
var inst_37717 = cljs.core.chunk_first.call(null,inst_37713);
var inst_37718 = cljs.core.chunk_rest.call(null,inst_37713);
var inst_37719 = cljs.core.count.call(null,inst_37717);
var inst_37691 = inst_37718;
var inst_37692 = inst_37717;
var inst_37693 = inst_37719;
var inst_37694 = (0);
var state_37814__$1 = (function (){var statearr_37869 = state_37814;
(statearr_37869[(14)] = inst_37692);

(statearr_37869[(15)] = inst_37693);

(statearr_37869[(16)] = inst_37691);

(statearr_37869[(17)] = inst_37694);

return statearr_37869;
})();
var statearr_37870_37937 = state_37814__$1;
(statearr_37870_37937[(2)] = null);

(statearr_37870_37937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (11))){
var inst_37713 = (state_37814[(7)]);
var inst_37691 = (state_37814[(16)]);
var inst_37713__$1 = cljs.core.seq.call(null,inst_37691);
var state_37814__$1 = (function (){var statearr_37871 = state_37814;
(statearr_37871[(7)] = inst_37713__$1);

return statearr_37871;
})();
if(inst_37713__$1){
var statearr_37872_37938 = state_37814__$1;
(statearr_37872_37938[(1)] = (16));

} else {
var statearr_37873_37939 = state_37814__$1;
(statearr_37873_37939[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (9))){
var inst_37743 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37874_37940 = state_37814__$1;
(statearr_37874_37940[(2)] = inst_37743);

(statearr_37874_37940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (5))){
var inst_37689 = cljs.core.deref.call(null,cs);
var inst_37690 = cljs.core.seq.call(null,inst_37689);
var inst_37691 = inst_37690;
var inst_37692 = null;
var inst_37693 = (0);
var inst_37694 = (0);
var state_37814__$1 = (function (){var statearr_37875 = state_37814;
(statearr_37875[(14)] = inst_37692);

(statearr_37875[(15)] = inst_37693);

(statearr_37875[(16)] = inst_37691);

(statearr_37875[(17)] = inst_37694);

return statearr_37875;
})();
var statearr_37876_37941 = state_37814__$1;
(statearr_37876_37941[(2)] = null);

(statearr_37876_37941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (14))){
var state_37814__$1 = state_37814;
var statearr_37877_37942 = state_37814__$1;
(statearr_37877_37942[(2)] = null);

(statearr_37877_37942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (45))){
var inst_37804 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37878_37943 = state_37814__$1;
(statearr_37878_37943[(2)] = inst_37804);

(statearr_37878_37943[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (26))){
var inst_37746 = (state_37814[(29)]);
var inst_37800 = (state_37814[(2)]);
var inst_37801 = cljs.core.seq.call(null,inst_37746);
var state_37814__$1 = (function (){var statearr_37879 = state_37814;
(statearr_37879[(31)] = inst_37800);

return statearr_37879;
})();
if(inst_37801){
var statearr_37880_37944 = state_37814__$1;
(statearr_37880_37944[(1)] = (42));

} else {
var statearr_37881_37945 = state_37814__$1;
(statearr_37881_37945[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (16))){
var inst_37713 = (state_37814[(7)]);
var inst_37715 = cljs.core.chunked_seq_QMARK_.call(null,inst_37713);
var state_37814__$1 = state_37814;
if(inst_37715){
var statearr_37882_37946 = state_37814__$1;
(statearr_37882_37946[(1)] = (19));

} else {
var statearr_37883_37947 = state_37814__$1;
(statearr_37883_37947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (38))){
var inst_37793 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37884_37948 = state_37814__$1;
(statearr_37884_37948[(2)] = inst_37793);

(statearr_37884_37948[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (30))){
var state_37814__$1 = state_37814;
var statearr_37885_37949 = state_37814__$1;
(statearr_37885_37949[(2)] = null);

(statearr_37885_37949[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (10))){
var inst_37692 = (state_37814[(14)]);
var inst_37694 = (state_37814[(17)]);
var inst_37702 = cljs.core._nth.call(null,inst_37692,inst_37694);
var inst_37703 = cljs.core.nth.call(null,inst_37702,(0),null);
var inst_37704 = cljs.core.nth.call(null,inst_37702,(1),null);
var state_37814__$1 = (function (){var statearr_37886 = state_37814;
(statearr_37886[(26)] = inst_37703);

return statearr_37886;
})();
if(cljs.core.truth_(inst_37704)){
var statearr_37887_37950 = state_37814__$1;
(statearr_37887_37950[(1)] = (13));

} else {
var statearr_37888_37951 = state_37814__$1;
(statearr_37888_37951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (18))){
var inst_37739 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37889_37952 = state_37814__$1;
(statearr_37889_37952[(2)] = inst_37739);

(statearr_37889_37952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (42))){
var state_37814__$1 = state_37814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37814__$1,(45),dchan);
} else {
if((state_val_37815 === (37))){
var inst_37773 = (state_37814[(25)]);
var inst_37682 = (state_37814[(9)]);
var inst_37782 = (state_37814[(23)]);
var inst_37782__$1 = cljs.core.first.call(null,inst_37773);
var inst_37783 = cljs.core.async.put_BANG_.call(null,inst_37782__$1,inst_37682,done);
var state_37814__$1 = (function (){var statearr_37890 = state_37814;
(statearr_37890[(23)] = inst_37782__$1);

return statearr_37890;
})();
if(cljs.core.truth_(inst_37783)){
var statearr_37891_37953 = state_37814__$1;
(statearr_37891_37953[(1)] = (39));

} else {
var statearr_37892_37954 = state_37814__$1;
(statearr_37892_37954[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (8))){
var inst_37693 = (state_37814[(15)]);
var inst_37694 = (state_37814[(17)]);
var inst_37696 = (inst_37694 < inst_37693);
var inst_37697 = inst_37696;
var state_37814__$1 = state_37814;
if(cljs.core.truth_(inst_37697)){
var statearr_37893_37955 = state_37814__$1;
(statearr_37893_37955[(1)] = (10));

} else {
var statearr_37894_37956 = state_37814__$1;
(statearr_37894_37956[(1)] = (11));

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
});})(c__28009__auto___37902,cs,m,dchan,dctr,done))
;
return ((function (switch__27988__auto__,c__28009__auto___37902,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27989__auto__ = null;
var cljs$core$async$mult_$_state_machine__27989__auto____0 = (function (){
var statearr_37898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37898[(0)] = cljs$core$async$mult_$_state_machine__27989__auto__);

(statearr_37898[(1)] = (1));

return statearr_37898;
});
var cljs$core$async$mult_$_state_machine__27989__auto____1 = (function (state_37814){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_37814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e37899){if((e37899 instanceof Object)){
var ex__27992__auto__ = e37899;
var statearr_37900_37957 = state_37814;
(statearr_37900_37957[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37958 = state_37814;
state_37814 = G__37958;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27989__auto__ = function(state_37814){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27989__auto____1.call(this,state_37814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27989__auto____0;
cljs$core$async$mult_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27989__auto____1;
return cljs$core$async$mult_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___37902,cs,m,dchan,dctr,done))
})();
var state__28011__auto__ = (function (){var statearr_37901 = f__28010__auto__.call(null);
(statearr_37901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___37902);

return statearr_37901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___37902,cs,m,dchan,dctr,done))
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
var args37959 = [];
var len__27054__auto___37962 = arguments.length;
var i__27055__auto___37963 = (0);
while(true){
if((i__27055__auto___37963 < len__27054__auto___37962)){
args37959.push((arguments[i__27055__auto___37963]));

var G__37964 = (i__27055__auto___37963 + (1));
i__27055__auto___37963 = G__37964;
continue;
} else {
}
break;
}

var G__37961 = args37959.length;
switch (G__37961) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37959.length)].join('')));

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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m);
} else {
var m__26643__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,state_map);
} else {
var m__26643__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,state_map);
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
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,mode);
} else {
var m__26643__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37976 = arguments.length;
var i__27055__auto___37977 = (0);
while(true){
if((i__27055__auto___37977 < len__27054__auto___37976)){
args__27061__auto__.push((arguments[i__27055__auto___37977]));

var G__37978 = (i__27055__auto___37977 + (1));
i__27055__auto___37977 = G__37978;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37970){
var map__37971 = p__37970;
var map__37971__$1 = ((((!((map__37971 == null)))?((((map__37971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37971):map__37971);
var opts = map__37971__$1;
var statearr_37973_37979 = state;
(statearr_37973_37979[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__37971,map__37971__$1,opts){
return (function (val){
var statearr_37974_37980 = state;
(statearr_37974_37980[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37971,map__37971__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_37975_37981 = state;
(statearr_37975_37981[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37966){
var G__37967 = cljs.core.first.call(null,seq37966);
var seq37966__$1 = cljs.core.next.call(null,seq37966);
var G__37968 = cljs.core.first.call(null,seq37966__$1);
var seq37966__$2 = cljs.core.next.call(null,seq37966__$1);
var G__37969 = cljs.core.first.call(null,seq37966__$2);
var seq37966__$3 = cljs.core.next.call(null,seq37966__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37967,G__37968,G__37969,seq37966__$3);
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
if(typeof cljs.core.async.t_cljs$core$async38147 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38147 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38148){
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
this.meta38148 = meta38148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38149,meta38148__$1){
var self__ = this;
var _38149__$1 = this;
return (new cljs.core.async.t_cljs$core$async38147(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38148__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38149){
var self__ = this;
var _38149__$1 = this;
return self__.meta38148;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38147.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38147.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async38147.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38147.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38147.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38147.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38147.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async38147.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38148","meta38148",-537799888,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38147";

cljs.core.async.t_cljs$core$async38147.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async38147");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38147 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38147(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38148){
return (new cljs.core.async.t_cljs$core$async38147(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38148));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38147(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28009__auto___38312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___38312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___38312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38249){
var state_val_38250 = (state_38249[(1)]);
if((state_val_38250 === (7))){
var inst_38165 = (state_38249[(2)]);
var state_38249__$1 = state_38249;
var statearr_38251_38313 = state_38249__$1;
(statearr_38251_38313[(2)] = inst_38165);

(statearr_38251_38313[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (20))){
var inst_38177 = (state_38249[(7)]);
var state_38249__$1 = state_38249;
var statearr_38252_38314 = state_38249__$1;
(statearr_38252_38314[(2)] = inst_38177);

(statearr_38252_38314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (27))){
var state_38249__$1 = state_38249;
var statearr_38253_38315 = state_38249__$1;
(statearr_38253_38315[(2)] = null);

(statearr_38253_38315[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (1))){
var inst_38153 = (state_38249[(8)]);
var inst_38153__$1 = calc_state.call(null);
var inst_38155 = (inst_38153__$1 == null);
var inst_38156 = cljs.core.not.call(null,inst_38155);
var state_38249__$1 = (function (){var statearr_38254 = state_38249;
(statearr_38254[(8)] = inst_38153__$1);

return statearr_38254;
})();
if(inst_38156){
var statearr_38255_38316 = state_38249__$1;
(statearr_38255_38316[(1)] = (2));

} else {
var statearr_38256_38317 = state_38249__$1;
(statearr_38256_38317[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (24))){
var inst_38209 = (state_38249[(9)]);
var inst_38200 = (state_38249[(10)]);
var inst_38223 = (state_38249[(11)]);
var inst_38223__$1 = inst_38200.call(null,inst_38209);
var state_38249__$1 = (function (){var statearr_38257 = state_38249;
(statearr_38257[(11)] = inst_38223__$1);

return statearr_38257;
})();
if(cljs.core.truth_(inst_38223__$1)){
var statearr_38258_38318 = state_38249__$1;
(statearr_38258_38318[(1)] = (29));

} else {
var statearr_38259_38319 = state_38249__$1;
(statearr_38259_38319[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (4))){
var inst_38168 = (state_38249[(2)]);
var state_38249__$1 = state_38249;
if(cljs.core.truth_(inst_38168)){
var statearr_38260_38320 = state_38249__$1;
(statearr_38260_38320[(1)] = (8));

} else {
var statearr_38261_38321 = state_38249__$1;
(statearr_38261_38321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (15))){
var inst_38194 = (state_38249[(2)]);
var state_38249__$1 = state_38249;
if(cljs.core.truth_(inst_38194)){
var statearr_38262_38322 = state_38249__$1;
(statearr_38262_38322[(1)] = (19));

} else {
var statearr_38263_38323 = state_38249__$1;
(statearr_38263_38323[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (21))){
var inst_38199 = (state_38249[(12)]);
var inst_38199__$1 = (state_38249[(2)]);
var inst_38200 = cljs.core.get.call(null,inst_38199__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38201 = cljs.core.get.call(null,inst_38199__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38202 = cljs.core.get.call(null,inst_38199__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38249__$1 = (function (){var statearr_38264 = state_38249;
(statearr_38264[(10)] = inst_38200);

(statearr_38264[(13)] = inst_38201);

(statearr_38264[(12)] = inst_38199__$1);

return statearr_38264;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38249__$1,(22),inst_38202);
} else {
if((state_val_38250 === (31))){
var inst_38231 = (state_38249[(2)]);
var state_38249__$1 = state_38249;
if(cljs.core.truth_(inst_38231)){
var statearr_38265_38324 = state_38249__$1;
(statearr_38265_38324[(1)] = (32));

} else {
var statearr_38266_38325 = state_38249__$1;
(statearr_38266_38325[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (32))){
var inst_38208 = (state_38249[(14)]);
var state_38249__$1 = state_38249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38249__$1,(35),out,inst_38208);
} else {
if((state_val_38250 === (33))){
var inst_38199 = (state_38249[(12)]);
var inst_38177 = inst_38199;
var state_38249__$1 = (function (){var statearr_38267 = state_38249;
(statearr_38267[(7)] = inst_38177);

return statearr_38267;
})();
var statearr_38268_38326 = state_38249__$1;
(statearr_38268_38326[(2)] = null);

(statearr_38268_38326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (13))){
var inst_38177 = (state_38249[(7)]);
var inst_38184 = inst_38177.cljs$lang$protocol_mask$partition0$;
var inst_38185 = (inst_38184 & (64));
var inst_38186 = inst_38177.cljs$core$ISeq$;
var inst_38187 = (inst_38185) || (inst_38186);
var state_38249__$1 = state_38249;
if(cljs.core.truth_(inst_38187)){
var statearr_38269_38327 = state_38249__$1;
(statearr_38269_38327[(1)] = (16));

} else {
var statearr_38270_38328 = state_38249__$1;
(statearr_38270_38328[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (22))){
var inst_38209 = (state_38249[(9)]);
var inst_38208 = (state_38249[(14)]);
var inst_38207 = (state_38249[(2)]);
var inst_38208__$1 = cljs.core.nth.call(null,inst_38207,(0),null);
var inst_38209__$1 = cljs.core.nth.call(null,inst_38207,(1),null);
var inst_38210 = (inst_38208__$1 == null);
var inst_38211 = cljs.core._EQ_.call(null,inst_38209__$1,change);
var inst_38212 = (inst_38210) || (inst_38211);
var state_38249__$1 = (function (){var statearr_38271 = state_38249;
(statearr_38271[(9)] = inst_38209__$1);

(statearr_38271[(14)] = inst_38208__$1);

return statearr_38271;
})();
if(cljs.core.truth_(inst_38212)){
var statearr_38272_38329 = state_38249__$1;
(statearr_38272_38329[(1)] = (23));

} else {
var statearr_38273_38330 = state_38249__$1;
(statearr_38273_38330[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (36))){
var inst_38199 = (state_38249[(12)]);
var inst_38177 = inst_38199;
var state_38249__$1 = (function (){var statearr_38274 = state_38249;
(statearr_38274[(7)] = inst_38177);

return statearr_38274;
})();
var statearr_38275_38331 = state_38249__$1;
(statearr_38275_38331[(2)] = null);

(statearr_38275_38331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (29))){
var inst_38223 = (state_38249[(11)]);
var state_38249__$1 = state_38249;
var statearr_38276_38332 = state_38249__$1;
(statearr_38276_38332[(2)] = inst_38223);

(statearr_38276_38332[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (6))){
var state_38249__$1 = state_38249;
var statearr_38277_38333 = state_38249__$1;
(statearr_38277_38333[(2)] = false);

(statearr_38277_38333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (28))){
var inst_38219 = (state_38249[(2)]);
var inst_38220 = calc_state.call(null);
var inst_38177 = inst_38220;
var state_38249__$1 = (function (){var statearr_38278 = state_38249;
(statearr_38278[(7)] = inst_38177);

(statearr_38278[(15)] = inst_38219);

return statearr_38278;
})();
var statearr_38279_38334 = state_38249__$1;
(statearr_38279_38334[(2)] = null);

(statearr_38279_38334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (25))){
var inst_38245 = (state_38249[(2)]);
var state_38249__$1 = state_38249;
var statearr_38280_38335 = state_38249__$1;
(statearr_38280_38335[(2)] = inst_38245);

(statearr_38280_38335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (34))){
var inst_38243 = (state_38249[(2)]);
var state_38249__$1 = state_38249;
var statearr_38281_38336 = state_38249__$1;
(statearr_38281_38336[(2)] = inst_38243);

(statearr_38281_38336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (17))){
var state_38249__$1 = state_38249;
var statearr_38282_38337 = state_38249__$1;
(statearr_38282_38337[(2)] = false);

(statearr_38282_38337[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (3))){
var state_38249__$1 = state_38249;
var statearr_38283_38338 = state_38249__$1;
(statearr_38283_38338[(2)] = false);

(statearr_38283_38338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (12))){
var inst_38247 = (state_38249[(2)]);
var state_38249__$1 = state_38249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38249__$1,inst_38247);
} else {
if((state_val_38250 === (2))){
var inst_38153 = (state_38249[(8)]);
var inst_38158 = inst_38153.cljs$lang$protocol_mask$partition0$;
var inst_38159 = (inst_38158 & (64));
var inst_38160 = inst_38153.cljs$core$ISeq$;
var inst_38161 = (inst_38159) || (inst_38160);
var state_38249__$1 = state_38249;
if(cljs.core.truth_(inst_38161)){
var statearr_38284_38339 = state_38249__$1;
(statearr_38284_38339[(1)] = (5));

} else {
var statearr_38285_38340 = state_38249__$1;
(statearr_38285_38340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (23))){
var inst_38208 = (state_38249[(14)]);
var inst_38214 = (inst_38208 == null);
var state_38249__$1 = state_38249;
if(cljs.core.truth_(inst_38214)){
var statearr_38286_38341 = state_38249__$1;
(statearr_38286_38341[(1)] = (26));

} else {
var statearr_38287_38342 = state_38249__$1;
(statearr_38287_38342[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (35))){
var inst_38234 = (state_38249[(2)]);
var state_38249__$1 = state_38249;
if(cljs.core.truth_(inst_38234)){
var statearr_38288_38343 = state_38249__$1;
(statearr_38288_38343[(1)] = (36));

} else {
var statearr_38289_38344 = state_38249__$1;
(statearr_38289_38344[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (19))){
var inst_38177 = (state_38249[(7)]);
var inst_38196 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38177);
var state_38249__$1 = state_38249;
var statearr_38290_38345 = state_38249__$1;
(statearr_38290_38345[(2)] = inst_38196);

(statearr_38290_38345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (11))){
var inst_38177 = (state_38249[(7)]);
var inst_38181 = (inst_38177 == null);
var inst_38182 = cljs.core.not.call(null,inst_38181);
var state_38249__$1 = state_38249;
if(inst_38182){
var statearr_38291_38346 = state_38249__$1;
(statearr_38291_38346[(1)] = (13));

} else {
var statearr_38292_38347 = state_38249__$1;
(statearr_38292_38347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (9))){
var inst_38153 = (state_38249[(8)]);
var state_38249__$1 = state_38249;
var statearr_38293_38348 = state_38249__$1;
(statearr_38293_38348[(2)] = inst_38153);

(statearr_38293_38348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (5))){
var state_38249__$1 = state_38249;
var statearr_38294_38349 = state_38249__$1;
(statearr_38294_38349[(2)] = true);

(statearr_38294_38349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (14))){
var state_38249__$1 = state_38249;
var statearr_38295_38350 = state_38249__$1;
(statearr_38295_38350[(2)] = false);

(statearr_38295_38350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (26))){
var inst_38209 = (state_38249[(9)]);
var inst_38216 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38209);
var state_38249__$1 = state_38249;
var statearr_38296_38351 = state_38249__$1;
(statearr_38296_38351[(2)] = inst_38216);

(statearr_38296_38351[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (16))){
var state_38249__$1 = state_38249;
var statearr_38297_38352 = state_38249__$1;
(statearr_38297_38352[(2)] = true);

(statearr_38297_38352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (38))){
var inst_38239 = (state_38249[(2)]);
var state_38249__$1 = state_38249;
var statearr_38298_38353 = state_38249__$1;
(statearr_38298_38353[(2)] = inst_38239);

(statearr_38298_38353[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (30))){
var inst_38209 = (state_38249[(9)]);
var inst_38200 = (state_38249[(10)]);
var inst_38201 = (state_38249[(13)]);
var inst_38226 = cljs.core.empty_QMARK_.call(null,inst_38200);
var inst_38227 = inst_38201.call(null,inst_38209);
var inst_38228 = cljs.core.not.call(null,inst_38227);
var inst_38229 = (inst_38226) && (inst_38228);
var state_38249__$1 = state_38249;
var statearr_38299_38354 = state_38249__$1;
(statearr_38299_38354[(2)] = inst_38229);

(statearr_38299_38354[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (10))){
var inst_38153 = (state_38249[(8)]);
var inst_38173 = (state_38249[(2)]);
var inst_38174 = cljs.core.get.call(null,inst_38173,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38175 = cljs.core.get.call(null,inst_38173,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38176 = cljs.core.get.call(null,inst_38173,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38177 = inst_38153;
var state_38249__$1 = (function (){var statearr_38300 = state_38249;
(statearr_38300[(16)] = inst_38174);

(statearr_38300[(17)] = inst_38176);

(statearr_38300[(7)] = inst_38177);

(statearr_38300[(18)] = inst_38175);

return statearr_38300;
})();
var statearr_38301_38355 = state_38249__$1;
(statearr_38301_38355[(2)] = null);

(statearr_38301_38355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (18))){
var inst_38191 = (state_38249[(2)]);
var state_38249__$1 = state_38249;
var statearr_38302_38356 = state_38249__$1;
(statearr_38302_38356[(2)] = inst_38191);

(statearr_38302_38356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (37))){
var state_38249__$1 = state_38249;
var statearr_38303_38357 = state_38249__$1;
(statearr_38303_38357[(2)] = null);

(statearr_38303_38357[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38250 === (8))){
var inst_38153 = (state_38249[(8)]);
var inst_38170 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38153);
var state_38249__$1 = state_38249;
var statearr_38304_38358 = state_38249__$1;
(statearr_38304_38358[(2)] = inst_38170);

(statearr_38304_38358[(1)] = (10));


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
});})(c__28009__auto___38312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27988__auto__,c__28009__auto___38312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27989__auto__ = null;
var cljs$core$async$mix_$_state_machine__27989__auto____0 = (function (){
var statearr_38308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38308[(0)] = cljs$core$async$mix_$_state_machine__27989__auto__);

(statearr_38308[(1)] = (1));

return statearr_38308;
});
var cljs$core$async$mix_$_state_machine__27989__auto____1 = (function (state_38249){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_38249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e38309){if((e38309 instanceof Object)){
var ex__27992__auto__ = e38309;
var statearr_38310_38359 = state_38249;
(statearr_38310_38359[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38360 = state_38249;
state_38249 = G__38360;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27989__auto__ = function(state_38249){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27989__auto____1.call(this,state_38249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27989__auto____0;
cljs$core$async$mix_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27989__auto____1;
return cljs$core$async$mix_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___38312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28011__auto__ = (function (){var statearr_38311 = f__28010__auto__.call(null);
(statearr_38311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___38312);

return statearr_38311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___38312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26643__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args38361 = [];
var len__27054__auto___38364 = arguments.length;
var i__27055__auto___38365 = (0);
while(true){
if((i__27055__auto___38365 < len__27054__auto___38364)){
args38361.push((arguments[i__27055__auto___38365]));

var G__38366 = (i__27055__auto___38365 + (1));
i__27055__auto___38365 = G__38366;
continue;
} else {
}
break;
}

var G__38363 = args38361.length;
switch (G__38363) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38361.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p);
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
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v);
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
var args38369 = [];
var len__27054__auto___38494 = arguments.length;
var i__27055__auto___38495 = (0);
while(true){
if((i__27055__auto___38495 < len__27054__auto___38494)){
args38369.push((arguments[i__27055__auto___38495]));

var G__38496 = (i__27055__auto___38495 + (1));
i__27055__auto___38495 = G__38496;
continue;
} else {
}
break;
}

var G__38371 = args38369.length;
switch (G__38371) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38369.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25979__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25979__auto__,mults){
return (function (p1__38368_SHARP_){
if(cljs.core.truth_(p1__38368_SHARP_.call(null,topic))){
return p1__38368_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38368_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38372 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38373){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38373 = meta38373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38374,meta38373__$1){
var self__ = this;
var _38374__$1 = this;
return (new cljs.core.async.t_cljs$core$async38372(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38373__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38374){
var self__ = this;
var _38374__$1 = this;
return self__.meta38373;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38372.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38372.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async38372.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38372.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async38372.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38372.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38372.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38373","meta38373",939672659,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38372";

cljs.core.async.t_cljs$core$async38372.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async38372");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38372 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38372(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38373){
return (new cljs.core.async.t_cljs$core$async38372(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38373));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38372(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28009__auto___38498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___38498,mults,ensure_mult,p){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___38498,mults,ensure_mult,p){
return (function (state_38446){
var state_val_38447 = (state_38446[(1)]);
if((state_val_38447 === (7))){
var inst_38442 = (state_38446[(2)]);
var state_38446__$1 = state_38446;
var statearr_38448_38499 = state_38446__$1;
(statearr_38448_38499[(2)] = inst_38442);

(statearr_38448_38499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (20))){
var state_38446__$1 = state_38446;
var statearr_38449_38500 = state_38446__$1;
(statearr_38449_38500[(2)] = null);

(statearr_38449_38500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (1))){
var state_38446__$1 = state_38446;
var statearr_38450_38501 = state_38446__$1;
(statearr_38450_38501[(2)] = null);

(statearr_38450_38501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (24))){
var inst_38425 = (state_38446[(7)]);
var inst_38434 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38425);
var state_38446__$1 = state_38446;
var statearr_38451_38502 = state_38446__$1;
(statearr_38451_38502[(2)] = inst_38434);

(statearr_38451_38502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (4))){
var inst_38377 = (state_38446[(8)]);
var inst_38377__$1 = (state_38446[(2)]);
var inst_38378 = (inst_38377__$1 == null);
var state_38446__$1 = (function (){var statearr_38452 = state_38446;
(statearr_38452[(8)] = inst_38377__$1);

return statearr_38452;
})();
if(cljs.core.truth_(inst_38378)){
var statearr_38453_38503 = state_38446__$1;
(statearr_38453_38503[(1)] = (5));

} else {
var statearr_38454_38504 = state_38446__$1;
(statearr_38454_38504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (15))){
var inst_38419 = (state_38446[(2)]);
var state_38446__$1 = state_38446;
var statearr_38455_38505 = state_38446__$1;
(statearr_38455_38505[(2)] = inst_38419);

(statearr_38455_38505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (21))){
var inst_38439 = (state_38446[(2)]);
var state_38446__$1 = (function (){var statearr_38456 = state_38446;
(statearr_38456[(9)] = inst_38439);

return statearr_38456;
})();
var statearr_38457_38506 = state_38446__$1;
(statearr_38457_38506[(2)] = null);

(statearr_38457_38506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (13))){
var inst_38401 = (state_38446[(10)]);
var inst_38403 = cljs.core.chunked_seq_QMARK_.call(null,inst_38401);
var state_38446__$1 = state_38446;
if(inst_38403){
var statearr_38458_38507 = state_38446__$1;
(statearr_38458_38507[(1)] = (16));

} else {
var statearr_38459_38508 = state_38446__$1;
(statearr_38459_38508[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (22))){
var inst_38431 = (state_38446[(2)]);
var state_38446__$1 = state_38446;
if(cljs.core.truth_(inst_38431)){
var statearr_38460_38509 = state_38446__$1;
(statearr_38460_38509[(1)] = (23));

} else {
var statearr_38461_38510 = state_38446__$1;
(statearr_38461_38510[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (6))){
var inst_38427 = (state_38446[(11)]);
var inst_38425 = (state_38446[(7)]);
var inst_38377 = (state_38446[(8)]);
var inst_38425__$1 = topic_fn.call(null,inst_38377);
var inst_38426 = cljs.core.deref.call(null,mults);
var inst_38427__$1 = cljs.core.get.call(null,inst_38426,inst_38425__$1);
var state_38446__$1 = (function (){var statearr_38462 = state_38446;
(statearr_38462[(11)] = inst_38427__$1);

(statearr_38462[(7)] = inst_38425__$1);

return statearr_38462;
})();
if(cljs.core.truth_(inst_38427__$1)){
var statearr_38463_38511 = state_38446__$1;
(statearr_38463_38511[(1)] = (19));

} else {
var statearr_38464_38512 = state_38446__$1;
(statearr_38464_38512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (25))){
var inst_38436 = (state_38446[(2)]);
var state_38446__$1 = state_38446;
var statearr_38465_38513 = state_38446__$1;
(statearr_38465_38513[(2)] = inst_38436);

(statearr_38465_38513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (17))){
var inst_38401 = (state_38446[(10)]);
var inst_38410 = cljs.core.first.call(null,inst_38401);
var inst_38411 = cljs.core.async.muxch_STAR_.call(null,inst_38410);
var inst_38412 = cljs.core.async.close_BANG_.call(null,inst_38411);
var inst_38413 = cljs.core.next.call(null,inst_38401);
var inst_38387 = inst_38413;
var inst_38388 = null;
var inst_38389 = (0);
var inst_38390 = (0);
var state_38446__$1 = (function (){var statearr_38466 = state_38446;
(statearr_38466[(12)] = inst_38389);

(statearr_38466[(13)] = inst_38390);

(statearr_38466[(14)] = inst_38412);

(statearr_38466[(15)] = inst_38387);

(statearr_38466[(16)] = inst_38388);

return statearr_38466;
})();
var statearr_38467_38514 = state_38446__$1;
(statearr_38467_38514[(2)] = null);

(statearr_38467_38514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (3))){
var inst_38444 = (state_38446[(2)]);
var state_38446__$1 = state_38446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38446__$1,inst_38444);
} else {
if((state_val_38447 === (12))){
var inst_38421 = (state_38446[(2)]);
var state_38446__$1 = state_38446;
var statearr_38468_38515 = state_38446__$1;
(statearr_38468_38515[(2)] = inst_38421);

(statearr_38468_38515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (2))){
var state_38446__$1 = state_38446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38446__$1,(4),ch);
} else {
if((state_val_38447 === (23))){
var state_38446__$1 = state_38446;
var statearr_38469_38516 = state_38446__$1;
(statearr_38469_38516[(2)] = null);

(statearr_38469_38516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (19))){
var inst_38427 = (state_38446[(11)]);
var inst_38377 = (state_38446[(8)]);
var inst_38429 = cljs.core.async.muxch_STAR_.call(null,inst_38427);
var state_38446__$1 = state_38446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38446__$1,(22),inst_38429,inst_38377);
} else {
if((state_val_38447 === (11))){
var inst_38387 = (state_38446[(15)]);
var inst_38401 = (state_38446[(10)]);
var inst_38401__$1 = cljs.core.seq.call(null,inst_38387);
var state_38446__$1 = (function (){var statearr_38470 = state_38446;
(statearr_38470[(10)] = inst_38401__$1);

return statearr_38470;
})();
if(inst_38401__$1){
var statearr_38471_38517 = state_38446__$1;
(statearr_38471_38517[(1)] = (13));

} else {
var statearr_38472_38518 = state_38446__$1;
(statearr_38472_38518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (9))){
var inst_38423 = (state_38446[(2)]);
var state_38446__$1 = state_38446;
var statearr_38473_38519 = state_38446__$1;
(statearr_38473_38519[(2)] = inst_38423);

(statearr_38473_38519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (5))){
var inst_38384 = cljs.core.deref.call(null,mults);
var inst_38385 = cljs.core.vals.call(null,inst_38384);
var inst_38386 = cljs.core.seq.call(null,inst_38385);
var inst_38387 = inst_38386;
var inst_38388 = null;
var inst_38389 = (0);
var inst_38390 = (0);
var state_38446__$1 = (function (){var statearr_38474 = state_38446;
(statearr_38474[(12)] = inst_38389);

(statearr_38474[(13)] = inst_38390);

(statearr_38474[(15)] = inst_38387);

(statearr_38474[(16)] = inst_38388);

return statearr_38474;
})();
var statearr_38475_38520 = state_38446__$1;
(statearr_38475_38520[(2)] = null);

(statearr_38475_38520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (14))){
var state_38446__$1 = state_38446;
var statearr_38479_38521 = state_38446__$1;
(statearr_38479_38521[(2)] = null);

(statearr_38479_38521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (16))){
var inst_38401 = (state_38446[(10)]);
var inst_38405 = cljs.core.chunk_first.call(null,inst_38401);
var inst_38406 = cljs.core.chunk_rest.call(null,inst_38401);
var inst_38407 = cljs.core.count.call(null,inst_38405);
var inst_38387 = inst_38406;
var inst_38388 = inst_38405;
var inst_38389 = inst_38407;
var inst_38390 = (0);
var state_38446__$1 = (function (){var statearr_38480 = state_38446;
(statearr_38480[(12)] = inst_38389);

(statearr_38480[(13)] = inst_38390);

(statearr_38480[(15)] = inst_38387);

(statearr_38480[(16)] = inst_38388);

return statearr_38480;
})();
var statearr_38481_38522 = state_38446__$1;
(statearr_38481_38522[(2)] = null);

(statearr_38481_38522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (10))){
var inst_38389 = (state_38446[(12)]);
var inst_38390 = (state_38446[(13)]);
var inst_38387 = (state_38446[(15)]);
var inst_38388 = (state_38446[(16)]);
var inst_38395 = cljs.core._nth.call(null,inst_38388,inst_38390);
var inst_38396 = cljs.core.async.muxch_STAR_.call(null,inst_38395);
var inst_38397 = cljs.core.async.close_BANG_.call(null,inst_38396);
var inst_38398 = (inst_38390 + (1));
var tmp38476 = inst_38389;
var tmp38477 = inst_38387;
var tmp38478 = inst_38388;
var inst_38387__$1 = tmp38477;
var inst_38388__$1 = tmp38478;
var inst_38389__$1 = tmp38476;
var inst_38390__$1 = inst_38398;
var state_38446__$1 = (function (){var statearr_38482 = state_38446;
(statearr_38482[(12)] = inst_38389__$1);

(statearr_38482[(13)] = inst_38390__$1);

(statearr_38482[(15)] = inst_38387__$1);

(statearr_38482[(16)] = inst_38388__$1);

(statearr_38482[(17)] = inst_38397);

return statearr_38482;
})();
var statearr_38483_38523 = state_38446__$1;
(statearr_38483_38523[(2)] = null);

(statearr_38483_38523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (18))){
var inst_38416 = (state_38446[(2)]);
var state_38446__$1 = state_38446;
var statearr_38484_38524 = state_38446__$1;
(statearr_38484_38524[(2)] = inst_38416);

(statearr_38484_38524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38447 === (8))){
var inst_38389 = (state_38446[(12)]);
var inst_38390 = (state_38446[(13)]);
var inst_38392 = (inst_38390 < inst_38389);
var inst_38393 = inst_38392;
var state_38446__$1 = state_38446;
if(cljs.core.truth_(inst_38393)){
var statearr_38485_38525 = state_38446__$1;
(statearr_38485_38525[(1)] = (10));

} else {
var statearr_38486_38526 = state_38446__$1;
(statearr_38486_38526[(1)] = (11));

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
});})(c__28009__auto___38498,mults,ensure_mult,p))
;
return ((function (switch__27988__auto__,c__28009__auto___38498,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_38490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38490[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_38490[(1)] = (1));

return statearr_38490;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_38446){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_38446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e38491){if((e38491 instanceof Object)){
var ex__27992__auto__ = e38491;
var statearr_38492_38527 = state_38446;
(statearr_38492_38527[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38528 = state_38446;
state_38446 = G__38528;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_38446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_38446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___38498,mults,ensure_mult,p))
})();
var state__28011__auto__ = (function (){var statearr_38493 = f__28010__auto__.call(null);
(statearr_38493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___38498);

return statearr_38493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___38498,mults,ensure_mult,p))
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
var args38529 = [];
var len__27054__auto___38532 = arguments.length;
var i__27055__auto___38533 = (0);
while(true){
if((i__27055__auto___38533 < len__27054__auto___38532)){
args38529.push((arguments[i__27055__auto___38533]));

var G__38534 = (i__27055__auto___38533 + (1));
i__27055__auto___38533 = G__38534;
continue;
} else {
}
break;
}

var G__38531 = args38529.length;
switch (G__38531) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38529.length)].join('')));

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
var args38536 = [];
var len__27054__auto___38539 = arguments.length;
var i__27055__auto___38540 = (0);
while(true){
if((i__27055__auto___38540 < len__27054__auto___38539)){
args38536.push((arguments[i__27055__auto___38540]));

var G__38541 = (i__27055__auto___38540 + (1));
i__27055__auto___38540 = G__38541;
continue;
} else {
}
break;
}

var G__38538 = args38536.length;
switch (G__38538) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38536.length)].join('')));

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
var args38543 = [];
var len__27054__auto___38614 = arguments.length;
var i__27055__auto___38615 = (0);
while(true){
if((i__27055__auto___38615 < len__27054__auto___38614)){
args38543.push((arguments[i__27055__auto___38615]));

var G__38616 = (i__27055__auto___38615 + (1));
i__27055__auto___38615 = G__38616;
continue;
} else {
}
break;
}

var G__38545 = args38543.length;
switch (G__38545) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38543.length)].join('')));

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
var c__28009__auto___38618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___38618,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___38618,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38584){
var state_val_38585 = (state_38584[(1)]);
if((state_val_38585 === (7))){
var state_38584__$1 = state_38584;
var statearr_38586_38619 = state_38584__$1;
(statearr_38586_38619[(2)] = null);

(statearr_38586_38619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38585 === (1))){
var state_38584__$1 = state_38584;
var statearr_38587_38620 = state_38584__$1;
(statearr_38587_38620[(2)] = null);

(statearr_38587_38620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38585 === (4))){
var inst_38548 = (state_38584[(7)]);
var inst_38550 = (inst_38548 < cnt);
var state_38584__$1 = state_38584;
if(cljs.core.truth_(inst_38550)){
var statearr_38588_38621 = state_38584__$1;
(statearr_38588_38621[(1)] = (6));

} else {
var statearr_38589_38622 = state_38584__$1;
(statearr_38589_38622[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38585 === (15))){
var inst_38580 = (state_38584[(2)]);
var state_38584__$1 = state_38584;
var statearr_38590_38623 = state_38584__$1;
(statearr_38590_38623[(2)] = inst_38580);

(statearr_38590_38623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38585 === (13))){
var inst_38573 = cljs.core.async.close_BANG_.call(null,out);
var state_38584__$1 = state_38584;
var statearr_38591_38624 = state_38584__$1;
(statearr_38591_38624[(2)] = inst_38573);

(statearr_38591_38624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38585 === (6))){
var state_38584__$1 = state_38584;
var statearr_38592_38625 = state_38584__$1;
(statearr_38592_38625[(2)] = null);

(statearr_38592_38625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38585 === (3))){
var inst_38582 = (state_38584[(2)]);
var state_38584__$1 = state_38584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38584__$1,inst_38582);
} else {
if((state_val_38585 === (12))){
var inst_38570 = (state_38584[(8)]);
var inst_38570__$1 = (state_38584[(2)]);
var inst_38571 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38570__$1);
var state_38584__$1 = (function (){var statearr_38593 = state_38584;
(statearr_38593[(8)] = inst_38570__$1);

return statearr_38593;
})();
if(cljs.core.truth_(inst_38571)){
var statearr_38594_38626 = state_38584__$1;
(statearr_38594_38626[(1)] = (13));

} else {
var statearr_38595_38627 = state_38584__$1;
(statearr_38595_38627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38585 === (2))){
var inst_38547 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38548 = (0);
var state_38584__$1 = (function (){var statearr_38596 = state_38584;
(statearr_38596[(7)] = inst_38548);

(statearr_38596[(9)] = inst_38547);

return statearr_38596;
})();
var statearr_38597_38628 = state_38584__$1;
(statearr_38597_38628[(2)] = null);

(statearr_38597_38628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38585 === (11))){
var inst_38548 = (state_38584[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38584,(10),Object,null,(9));
var inst_38557 = chs__$1.call(null,inst_38548);
var inst_38558 = done.call(null,inst_38548);
var inst_38559 = cljs.core.async.take_BANG_.call(null,inst_38557,inst_38558);
var state_38584__$1 = state_38584;
var statearr_38598_38629 = state_38584__$1;
(statearr_38598_38629[(2)] = inst_38559);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38584__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38585 === (9))){
var inst_38548 = (state_38584[(7)]);
var inst_38561 = (state_38584[(2)]);
var inst_38562 = (inst_38548 + (1));
var inst_38548__$1 = inst_38562;
var state_38584__$1 = (function (){var statearr_38599 = state_38584;
(statearr_38599[(7)] = inst_38548__$1);

(statearr_38599[(10)] = inst_38561);

return statearr_38599;
})();
var statearr_38600_38630 = state_38584__$1;
(statearr_38600_38630[(2)] = null);

(statearr_38600_38630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38585 === (5))){
var inst_38568 = (state_38584[(2)]);
var state_38584__$1 = (function (){var statearr_38601 = state_38584;
(statearr_38601[(11)] = inst_38568);

return statearr_38601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38584__$1,(12),dchan);
} else {
if((state_val_38585 === (14))){
var inst_38570 = (state_38584[(8)]);
var inst_38575 = cljs.core.apply.call(null,f,inst_38570);
var state_38584__$1 = state_38584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38584__$1,(16),out,inst_38575);
} else {
if((state_val_38585 === (16))){
var inst_38577 = (state_38584[(2)]);
var state_38584__$1 = (function (){var statearr_38602 = state_38584;
(statearr_38602[(12)] = inst_38577);

return statearr_38602;
})();
var statearr_38603_38631 = state_38584__$1;
(statearr_38603_38631[(2)] = null);

(statearr_38603_38631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38585 === (10))){
var inst_38552 = (state_38584[(2)]);
var inst_38553 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38584__$1 = (function (){var statearr_38604 = state_38584;
(statearr_38604[(13)] = inst_38552);

return statearr_38604;
})();
var statearr_38605_38632 = state_38584__$1;
(statearr_38605_38632[(2)] = inst_38553);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38584__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38585 === (8))){
var inst_38566 = (state_38584[(2)]);
var state_38584__$1 = state_38584;
var statearr_38606_38633 = state_38584__$1;
(statearr_38606_38633[(2)] = inst_38566);

(statearr_38606_38633[(1)] = (5));


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
});})(c__28009__auto___38618,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27988__auto__,c__28009__auto___38618,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_38610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38610[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_38610[(1)] = (1));

return statearr_38610;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_38584){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_38584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e38611){if((e38611 instanceof Object)){
var ex__27992__auto__ = e38611;
var statearr_38612_38634 = state_38584;
(statearr_38612_38634[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38635 = state_38584;
state_38584 = G__38635;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_38584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_38584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___38618,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28011__auto__ = (function (){var statearr_38613 = f__28010__auto__.call(null);
(statearr_38613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___38618);

return statearr_38613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___38618,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args38637 = [];
var len__27054__auto___38695 = arguments.length;
var i__27055__auto___38696 = (0);
while(true){
if((i__27055__auto___38696 < len__27054__auto___38695)){
args38637.push((arguments[i__27055__auto___38696]));

var G__38697 = (i__27055__auto___38696 + (1));
i__27055__auto___38696 = G__38697;
continue;
} else {
}
break;
}

var G__38639 = args38637.length;
switch (G__38639) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38637.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___38699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___38699,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___38699,out){
return (function (state_38671){
var state_val_38672 = (state_38671[(1)]);
if((state_val_38672 === (7))){
var inst_38650 = (state_38671[(7)]);
var inst_38651 = (state_38671[(8)]);
var inst_38650__$1 = (state_38671[(2)]);
var inst_38651__$1 = cljs.core.nth.call(null,inst_38650__$1,(0),null);
var inst_38652 = cljs.core.nth.call(null,inst_38650__$1,(1),null);
var inst_38653 = (inst_38651__$1 == null);
var state_38671__$1 = (function (){var statearr_38673 = state_38671;
(statearr_38673[(7)] = inst_38650__$1);

(statearr_38673[(9)] = inst_38652);

(statearr_38673[(8)] = inst_38651__$1);

return statearr_38673;
})();
if(cljs.core.truth_(inst_38653)){
var statearr_38674_38700 = state_38671__$1;
(statearr_38674_38700[(1)] = (8));

} else {
var statearr_38675_38701 = state_38671__$1;
(statearr_38675_38701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38672 === (1))){
var inst_38640 = cljs.core.vec.call(null,chs);
var inst_38641 = inst_38640;
var state_38671__$1 = (function (){var statearr_38676 = state_38671;
(statearr_38676[(10)] = inst_38641);

return statearr_38676;
})();
var statearr_38677_38702 = state_38671__$1;
(statearr_38677_38702[(2)] = null);

(statearr_38677_38702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38672 === (4))){
var inst_38641 = (state_38671[(10)]);
var state_38671__$1 = state_38671;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38671__$1,(7),inst_38641);
} else {
if((state_val_38672 === (6))){
var inst_38667 = (state_38671[(2)]);
var state_38671__$1 = state_38671;
var statearr_38678_38703 = state_38671__$1;
(statearr_38678_38703[(2)] = inst_38667);

(statearr_38678_38703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38672 === (3))){
var inst_38669 = (state_38671[(2)]);
var state_38671__$1 = state_38671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38671__$1,inst_38669);
} else {
if((state_val_38672 === (2))){
var inst_38641 = (state_38671[(10)]);
var inst_38643 = cljs.core.count.call(null,inst_38641);
var inst_38644 = (inst_38643 > (0));
var state_38671__$1 = state_38671;
if(cljs.core.truth_(inst_38644)){
var statearr_38680_38704 = state_38671__$1;
(statearr_38680_38704[(1)] = (4));

} else {
var statearr_38681_38705 = state_38671__$1;
(statearr_38681_38705[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38672 === (11))){
var inst_38641 = (state_38671[(10)]);
var inst_38660 = (state_38671[(2)]);
var tmp38679 = inst_38641;
var inst_38641__$1 = tmp38679;
var state_38671__$1 = (function (){var statearr_38682 = state_38671;
(statearr_38682[(10)] = inst_38641__$1);

(statearr_38682[(11)] = inst_38660);

return statearr_38682;
})();
var statearr_38683_38706 = state_38671__$1;
(statearr_38683_38706[(2)] = null);

(statearr_38683_38706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38672 === (9))){
var inst_38651 = (state_38671[(8)]);
var state_38671__$1 = state_38671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38671__$1,(11),out,inst_38651);
} else {
if((state_val_38672 === (5))){
var inst_38665 = cljs.core.async.close_BANG_.call(null,out);
var state_38671__$1 = state_38671;
var statearr_38684_38707 = state_38671__$1;
(statearr_38684_38707[(2)] = inst_38665);

(statearr_38684_38707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38672 === (10))){
var inst_38663 = (state_38671[(2)]);
var state_38671__$1 = state_38671;
var statearr_38685_38708 = state_38671__$1;
(statearr_38685_38708[(2)] = inst_38663);

(statearr_38685_38708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38672 === (8))){
var inst_38650 = (state_38671[(7)]);
var inst_38652 = (state_38671[(9)]);
var inst_38641 = (state_38671[(10)]);
var inst_38651 = (state_38671[(8)]);
var inst_38655 = (function (){var cs = inst_38641;
var vec__38646 = inst_38650;
var v = inst_38651;
var c = inst_38652;
return ((function (cs,vec__38646,v,c,inst_38650,inst_38652,inst_38641,inst_38651,state_val_38672,c__28009__auto___38699,out){
return (function (p1__38636_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38636_SHARP_);
});
;})(cs,vec__38646,v,c,inst_38650,inst_38652,inst_38641,inst_38651,state_val_38672,c__28009__auto___38699,out))
})();
var inst_38656 = cljs.core.filterv.call(null,inst_38655,inst_38641);
var inst_38641__$1 = inst_38656;
var state_38671__$1 = (function (){var statearr_38686 = state_38671;
(statearr_38686[(10)] = inst_38641__$1);

return statearr_38686;
})();
var statearr_38687_38709 = state_38671__$1;
(statearr_38687_38709[(2)] = null);

(statearr_38687_38709[(1)] = (2));


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
});})(c__28009__auto___38699,out))
;
return ((function (switch__27988__auto__,c__28009__auto___38699,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_38691 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38691[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_38691[(1)] = (1));

return statearr_38691;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_38671){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_38671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e38692){if((e38692 instanceof Object)){
var ex__27992__auto__ = e38692;
var statearr_38693_38710 = state_38671;
(statearr_38693_38710[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38711 = state_38671;
state_38671 = G__38711;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_38671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_38671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___38699,out))
})();
var state__28011__auto__ = (function (){var statearr_38694 = f__28010__auto__.call(null);
(statearr_38694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___38699);

return statearr_38694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___38699,out))
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
var args38712 = [];
var len__27054__auto___38761 = arguments.length;
var i__27055__auto___38762 = (0);
while(true){
if((i__27055__auto___38762 < len__27054__auto___38761)){
args38712.push((arguments[i__27055__auto___38762]));

var G__38763 = (i__27055__auto___38762 + (1));
i__27055__auto___38762 = G__38763;
continue;
} else {
}
break;
}

var G__38714 = args38712.length;
switch (G__38714) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38712.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___38765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___38765,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___38765,out){
return (function (state_38738){
var state_val_38739 = (state_38738[(1)]);
if((state_val_38739 === (7))){
var inst_38720 = (state_38738[(7)]);
var inst_38720__$1 = (state_38738[(2)]);
var inst_38721 = (inst_38720__$1 == null);
var inst_38722 = cljs.core.not.call(null,inst_38721);
var state_38738__$1 = (function (){var statearr_38740 = state_38738;
(statearr_38740[(7)] = inst_38720__$1);

return statearr_38740;
})();
if(inst_38722){
var statearr_38741_38766 = state_38738__$1;
(statearr_38741_38766[(1)] = (8));

} else {
var statearr_38742_38767 = state_38738__$1;
(statearr_38742_38767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38739 === (1))){
var inst_38715 = (0);
var state_38738__$1 = (function (){var statearr_38743 = state_38738;
(statearr_38743[(8)] = inst_38715);

return statearr_38743;
})();
var statearr_38744_38768 = state_38738__$1;
(statearr_38744_38768[(2)] = null);

(statearr_38744_38768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38739 === (4))){
var state_38738__$1 = state_38738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38738__$1,(7),ch);
} else {
if((state_val_38739 === (6))){
var inst_38733 = (state_38738[(2)]);
var state_38738__$1 = state_38738;
var statearr_38745_38769 = state_38738__$1;
(statearr_38745_38769[(2)] = inst_38733);

(statearr_38745_38769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38739 === (3))){
var inst_38735 = (state_38738[(2)]);
var inst_38736 = cljs.core.async.close_BANG_.call(null,out);
var state_38738__$1 = (function (){var statearr_38746 = state_38738;
(statearr_38746[(9)] = inst_38735);

return statearr_38746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38738__$1,inst_38736);
} else {
if((state_val_38739 === (2))){
var inst_38715 = (state_38738[(8)]);
var inst_38717 = (inst_38715 < n);
var state_38738__$1 = state_38738;
if(cljs.core.truth_(inst_38717)){
var statearr_38747_38770 = state_38738__$1;
(statearr_38747_38770[(1)] = (4));

} else {
var statearr_38748_38771 = state_38738__$1;
(statearr_38748_38771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38739 === (11))){
var inst_38715 = (state_38738[(8)]);
var inst_38725 = (state_38738[(2)]);
var inst_38726 = (inst_38715 + (1));
var inst_38715__$1 = inst_38726;
var state_38738__$1 = (function (){var statearr_38749 = state_38738;
(statearr_38749[(8)] = inst_38715__$1);

(statearr_38749[(10)] = inst_38725);

return statearr_38749;
})();
var statearr_38750_38772 = state_38738__$1;
(statearr_38750_38772[(2)] = null);

(statearr_38750_38772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38739 === (9))){
var state_38738__$1 = state_38738;
var statearr_38751_38773 = state_38738__$1;
(statearr_38751_38773[(2)] = null);

(statearr_38751_38773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38739 === (5))){
var state_38738__$1 = state_38738;
var statearr_38752_38774 = state_38738__$1;
(statearr_38752_38774[(2)] = null);

(statearr_38752_38774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38739 === (10))){
var inst_38730 = (state_38738[(2)]);
var state_38738__$1 = state_38738;
var statearr_38753_38775 = state_38738__$1;
(statearr_38753_38775[(2)] = inst_38730);

(statearr_38753_38775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38739 === (8))){
var inst_38720 = (state_38738[(7)]);
var state_38738__$1 = state_38738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38738__$1,(11),out,inst_38720);
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
});})(c__28009__auto___38765,out))
;
return ((function (switch__27988__auto__,c__28009__auto___38765,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_38757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38757[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_38757[(1)] = (1));

return statearr_38757;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_38738){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_38738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e38758){if((e38758 instanceof Object)){
var ex__27992__auto__ = e38758;
var statearr_38759_38776 = state_38738;
(statearr_38759_38776[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38777 = state_38738;
state_38738 = G__38777;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_38738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_38738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___38765,out))
})();
var state__28011__auto__ = (function (){var statearr_38760 = f__28010__auto__.call(null);
(statearr_38760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___38765);

return statearr_38760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___38765,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38785 = (function (map_LT_,f,ch,meta38786){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38786 = meta38786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38787,meta38786__$1){
var self__ = this;
var _38787__$1 = this;
return (new cljs.core.async.t_cljs$core$async38785(self__.map_LT_,self__.f,self__.ch,meta38786__$1));
});

cljs.core.async.t_cljs$core$async38785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38787){
var self__ = this;
var _38787__$1 = this;
return self__.meta38786;
});

cljs.core.async.t_cljs$core$async38785.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38785.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38785.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38785.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38785.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38788 = (function (map_LT_,f,ch,meta38786,_,fn1,meta38789){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38786 = meta38786;
this._ = _;
this.fn1 = fn1;
this.meta38789 = meta38789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38790,meta38789__$1){
var self__ = this;
var _38790__$1 = this;
return (new cljs.core.async.t_cljs$core$async38788(self__.map_LT_,self__.f,self__.ch,self__.meta38786,self__._,self__.fn1,meta38789__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38790){
var self__ = this;
var _38790__$1 = this;
return self__.meta38789;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38788.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38788.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38778_SHARP_){
return f1.call(null,(((p1__38778_SHARP_ == null))?null:self__.f.call(null,p1__38778_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38788.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38786","meta38786",-1406946537,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38785","cljs.core.async/t_cljs$core$async38785",-1728045775,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38789","meta38789",2028684247,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38788";

cljs.core.async.t_cljs$core$async38788.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async38788");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38788 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38788(map_LT___$1,f__$1,ch__$1,meta38786__$1,___$2,fn1__$1,meta38789){
return (new cljs.core.async.t_cljs$core$async38788(map_LT___$1,f__$1,ch__$1,meta38786__$1,___$2,fn1__$1,meta38789));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38788(self__.map_LT_,self__.f,self__.ch,self__.meta38786,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25967__auto__ = ret;
if(cljs.core.truth_(and__25967__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25967__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38785.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38785.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38786","meta38786",-1406946537,null)], null);
});

cljs.core.async.t_cljs$core$async38785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38785";

cljs.core.async.t_cljs$core$async38785.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async38785");
});

cljs.core.async.__GT_t_cljs$core$async38785 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38785(map_LT___$1,f__$1,ch__$1,meta38786){
return (new cljs.core.async.t_cljs$core$async38785(map_LT___$1,f__$1,ch__$1,meta38786));
});

}

return (new cljs.core.async.t_cljs$core$async38785(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38794 = (function (map_GT_,f,ch,meta38795){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38795 = meta38795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38796,meta38795__$1){
var self__ = this;
var _38796__$1 = this;
return (new cljs.core.async.t_cljs$core$async38794(self__.map_GT_,self__.f,self__.ch,meta38795__$1));
});

cljs.core.async.t_cljs$core$async38794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38796){
var self__ = this;
var _38796__$1 = this;
return self__.meta38795;
});

cljs.core.async.t_cljs$core$async38794.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38794.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38794.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38794.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38794.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38794.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38795","meta38795",-1695767529,null)], null);
});

cljs.core.async.t_cljs$core$async38794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38794";

cljs.core.async.t_cljs$core$async38794.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async38794");
});

cljs.core.async.__GT_t_cljs$core$async38794 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38794(map_GT___$1,f__$1,ch__$1,meta38795){
return (new cljs.core.async.t_cljs$core$async38794(map_GT___$1,f__$1,ch__$1,meta38795));
});

}

return (new cljs.core.async.t_cljs$core$async38794(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38800 = (function (filter_GT_,p,ch,meta38801){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38801 = meta38801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38802,meta38801__$1){
var self__ = this;
var _38802__$1 = this;
return (new cljs.core.async.t_cljs$core$async38800(self__.filter_GT_,self__.p,self__.ch,meta38801__$1));
});

cljs.core.async.t_cljs$core$async38800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38802){
var self__ = this;
var _38802__$1 = this;
return self__.meta38801;
});

cljs.core.async.t_cljs$core$async38800.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38800.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38800.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38800.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38801","meta38801",-1464484718,null)], null);
});

cljs.core.async.t_cljs$core$async38800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38800";

cljs.core.async.t_cljs$core$async38800.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async38800");
});

cljs.core.async.__GT_t_cljs$core$async38800 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38800(filter_GT___$1,p__$1,ch__$1,meta38801){
return (new cljs.core.async.t_cljs$core$async38800(filter_GT___$1,p__$1,ch__$1,meta38801));
});

}

return (new cljs.core.async.t_cljs$core$async38800(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args38803 = [];
var len__27054__auto___38847 = arguments.length;
var i__27055__auto___38848 = (0);
while(true){
if((i__27055__auto___38848 < len__27054__auto___38847)){
args38803.push((arguments[i__27055__auto___38848]));

var G__38849 = (i__27055__auto___38848 + (1));
i__27055__auto___38848 = G__38849;
continue;
} else {
}
break;
}

var G__38805 = args38803.length;
switch (G__38805) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38803.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___38851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___38851,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___38851,out){
return (function (state_38826){
var state_val_38827 = (state_38826[(1)]);
if((state_val_38827 === (7))){
var inst_38822 = (state_38826[(2)]);
var state_38826__$1 = state_38826;
var statearr_38828_38852 = state_38826__$1;
(statearr_38828_38852[(2)] = inst_38822);

(statearr_38828_38852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38827 === (1))){
var state_38826__$1 = state_38826;
var statearr_38829_38853 = state_38826__$1;
(statearr_38829_38853[(2)] = null);

(statearr_38829_38853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38827 === (4))){
var inst_38808 = (state_38826[(7)]);
var inst_38808__$1 = (state_38826[(2)]);
var inst_38809 = (inst_38808__$1 == null);
var state_38826__$1 = (function (){var statearr_38830 = state_38826;
(statearr_38830[(7)] = inst_38808__$1);

return statearr_38830;
})();
if(cljs.core.truth_(inst_38809)){
var statearr_38831_38854 = state_38826__$1;
(statearr_38831_38854[(1)] = (5));

} else {
var statearr_38832_38855 = state_38826__$1;
(statearr_38832_38855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38827 === (6))){
var inst_38808 = (state_38826[(7)]);
var inst_38813 = p.call(null,inst_38808);
var state_38826__$1 = state_38826;
if(cljs.core.truth_(inst_38813)){
var statearr_38833_38856 = state_38826__$1;
(statearr_38833_38856[(1)] = (8));

} else {
var statearr_38834_38857 = state_38826__$1;
(statearr_38834_38857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38827 === (3))){
var inst_38824 = (state_38826[(2)]);
var state_38826__$1 = state_38826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38826__$1,inst_38824);
} else {
if((state_val_38827 === (2))){
var state_38826__$1 = state_38826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38826__$1,(4),ch);
} else {
if((state_val_38827 === (11))){
var inst_38816 = (state_38826[(2)]);
var state_38826__$1 = state_38826;
var statearr_38835_38858 = state_38826__$1;
(statearr_38835_38858[(2)] = inst_38816);

(statearr_38835_38858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38827 === (9))){
var state_38826__$1 = state_38826;
var statearr_38836_38859 = state_38826__$1;
(statearr_38836_38859[(2)] = null);

(statearr_38836_38859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38827 === (5))){
var inst_38811 = cljs.core.async.close_BANG_.call(null,out);
var state_38826__$1 = state_38826;
var statearr_38837_38860 = state_38826__$1;
(statearr_38837_38860[(2)] = inst_38811);

(statearr_38837_38860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38827 === (10))){
var inst_38819 = (state_38826[(2)]);
var state_38826__$1 = (function (){var statearr_38838 = state_38826;
(statearr_38838[(8)] = inst_38819);

return statearr_38838;
})();
var statearr_38839_38861 = state_38826__$1;
(statearr_38839_38861[(2)] = null);

(statearr_38839_38861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38827 === (8))){
var inst_38808 = (state_38826[(7)]);
var state_38826__$1 = state_38826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38826__$1,(11),out,inst_38808);
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
});})(c__28009__auto___38851,out))
;
return ((function (switch__27988__auto__,c__28009__auto___38851,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_38843 = [null,null,null,null,null,null,null,null,null];
(statearr_38843[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_38843[(1)] = (1));

return statearr_38843;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_38826){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_38826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e38844){if((e38844 instanceof Object)){
var ex__27992__auto__ = e38844;
var statearr_38845_38862 = state_38826;
(statearr_38845_38862[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38863 = state_38826;
state_38826 = G__38863;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_38826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_38826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___38851,out))
})();
var state__28011__auto__ = (function (){var statearr_38846 = f__28010__auto__.call(null);
(statearr_38846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___38851);

return statearr_38846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___38851,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38864 = [];
var len__27054__auto___38867 = arguments.length;
var i__27055__auto___38868 = (0);
while(true){
if((i__27055__auto___38868 < len__27054__auto___38867)){
args38864.push((arguments[i__27055__auto___38868]));

var G__38869 = (i__27055__auto___38868 + (1));
i__27055__auto___38868 = G__38869;
continue;
} else {
}
break;
}

var G__38866 = args38864.length;
switch (G__38866) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38864.length)].join('')));

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
var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__){
return (function (state_39036){
var state_val_39037 = (state_39036[(1)]);
if((state_val_39037 === (7))){
var inst_39032 = (state_39036[(2)]);
var state_39036__$1 = state_39036;
var statearr_39038_39079 = state_39036__$1;
(statearr_39038_39079[(2)] = inst_39032);

(statearr_39038_39079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (20))){
var inst_39002 = (state_39036[(7)]);
var inst_39013 = (state_39036[(2)]);
var inst_39014 = cljs.core.next.call(null,inst_39002);
var inst_38988 = inst_39014;
var inst_38989 = null;
var inst_38990 = (0);
var inst_38991 = (0);
var state_39036__$1 = (function (){var statearr_39039 = state_39036;
(statearr_39039[(8)] = inst_38988);

(statearr_39039[(9)] = inst_39013);

(statearr_39039[(10)] = inst_38991);

(statearr_39039[(11)] = inst_38990);

(statearr_39039[(12)] = inst_38989);

return statearr_39039;
})();
var statearr_39040_39080 = state_39036__$1;
(statearr_39040_39080[(2)] = null);

(statearr_39040_39080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (1))){
var state_39036__$1 = state_39036;
var statearr_39041_39081 = state_39036__$1;
(statearr_39041_39081[(2)] = null);

(statearr_39041_39081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (4))){
var inst_38977 = (state_39036[(13)]);
var inst_38977__$1 = (state_39036[(2)]);
var inst_38978 = (inst_38977__$1 == null);
var state_39036__$1 = (function (){var statearr_39042 = state_39036;
(statearr_39042[(13)] = inst_38977__$1);

return statearr_39042;
})();
if(cljs.core.truth_(inst_38978)){
var statearr_39043_39082 = state_39036__$1;
(statearr_39043_39082[(1)] = (5));

} else {
var statearr_39044_39083 = state_39036__$1;
(statearr_39044_39083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (15))){
var state_39036__$1 = state_39036;
var statearr_39048_39084 = state_39036__$1;
(statearr_39048_39084[(2)] = null);

(statearr_39048_39084[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (21))){
var state_39036__$1 = state_39036;
var statearr_39049_39085 = state_39036__$1;
(statearr_39049_39085[(2)] = null);

(statearr_39049_39085[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (13))){
var inst_38988 = (state_39036[(8)]);
var inst_38991 = (state_39036[(10)]);
var inst_38990 = (state_39036[(11)]);
var inst_38989 = (state_39036[(12)]);
var inst_38998 = (state_39036[(2)]);
var inst_38999 = (inst_38991 + (1));
var tmp39045 = inst_38988;
var tmp39046 = inst_38990;
var tmp39047 = inst_38989;
var inst_38988__$1 = tmp39045;
var inst_38989__$1 = tmp39047;
var inst_38990__$1 = tmp39046;
var inst_38991__$1 = inst_38999;
var state_39036__$1 = (function (){var statearr_39050 = state_39036;
(statearr_39050[(8)] = inst_38988__$1);

(statearr_39050[(10)] = inst_38991__$1);

(statearr_39050[(11)] = inst_38990__$1);

(statearr_39050[(14)] = inst_38998);

(statearr_39050[(12)] = inst_38989__$1);

return statearr_39050;
})();
var statearr_39051_39086 = state_39036__$1;
(statearr_39051_39086[(2)] = null);

(statearr_39051_39086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (22))){
var state_39036__$1 = state_39036;
var statearr_39052_39087 = state_39036__$1;
(statearr_39052_39087[(2)] = null);

(statearr_39052_39087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (6))){
var inst_38977 = (state_39036[(13)]);
var inst_38986 = f.call(null,inst_38977);
var inst_38987 = cljs.core.seq.call(null,inst_38986);
var inst_38988 = inst_38987;
var inst_38989 = null;
var inst_38990 = (0);
var inst_38991 = (0);
var state_39036__$1 = (function (){var statearr_39053 = state_39036;
(statearr_39053[(8)] = inst_38988);

(statearr_39053[(10)] = inst_38991);

(statearr_39053[(11)] = inst_38990);

(statearr_39053[(12)] = inst_38989);

return statearr_39053;
})();
var statearr_39054_39088 = state_39036__$1;
(statearr_39054_39088[(2)] = null);

(statearr_39054_39088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (17))){
var inst_39002 = (state_39036[(7)]);
var inst_39006 = cljs.core.chunk_first.call(null,inst_39002);
var inst_39007 = cljs.core.chunk_rest.call(null,inst_39002);
var inst_39008 = cljs.core.count.call(null,inst_39006);
var inst_38988 = inst_39007;
var inst_38989 = inst_39006;
var inst_38990 = inst_39008;
var inst_38991 = (0);
var state_39036__$1 = (function (){var statearr_39055 = state_39036;
(statearr_39055[(8)] = inst_38988);

(statearr_39055[(10)] = inst_38991);

(statearr_39055[(11)] = inst_38990);

(statearr_39055[(12)] = inst_38989);

return statearr_39055;
})();
var statearr_39056_39089 = state_39036__$1;
(statearr_39056_39089[(2)] = null);

(statearr_39056_39089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (3))){
var inst_39034 = (state_39036[(2)]);
var state_39036__$1 = state_39036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39036__$1,inst_39034);
} else {
if((state_val_39037 === (12))){
var inst_39022 = (state_39036[(2)]);
var state_39036__$1 = state_39036;
var statearr_39057_39090 = state_39036__$1;
(statearr_39057_39090[(2)] = inst_39022);

(statearr_39057_39090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (2))){
var state_39036__$1 = state_39036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39036__$1,(4),in$);
} else {
if((state_val_39037 === (23))){
var inst_39030 = (state_39036[(2)]);
var state_39036__$1 = state_39036;
var statearr_39058_39091 = state_39036__$1;
(statearr_39058_39091[(2)] = inst_39030);

(statearr_39058_39091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (19))){
var inst_39017 = (state_39036[(2)]);
var state_39036__$1 = state_39036;
var statearr_39059_39092 = state_39036__$1;
(statearr_39059_39092[(2)] = inst_39017);

(statearr_39059_39092[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (11))){
var inst_38988 = (state_39036[(8)]);
var inst_39002 = (state_39036[(7)]);
var inst_39002__$1 = cljs.core.seq.call(null,inst_38988);
var state_39036__$1 = (function (){var statearr_39060 = state_39036;
(statearr_39060[(7)] = inst_39002__$1);

return statearr_39060;
})();
if(inst_39002__$1){
var statearr_39061_39093 = state_39036__$1;
(statearr_39061_39093[(1)] = (14));

} else {
var statearr_39062_39094 = state_39036__$1;
(statearr_39062_39094[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (9))){
var inst_39024 = (state_39036[(2)]);
var inst_39025 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39036__$1 = (function (){var statearr_39063 = state_39036;
(statearr_39063[(15)] = inst_39024);

return statearr_39063;
})();
if(cljs.core.truth_(inst_39025)){
var statearr_39064_39095 = state_39036__$1;
(statearr_39064_39095[(1)] = (21));

} else {
var statearr_39065_39096 = state_39036__$1;
(statearr_39065_39096[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (5))){
var inst_38980 = cljs.core.async.close_BANG_.call(null,out);
var state_39036__$1 = state_39036;
var statearr_39066_39097 = state_39036__$1;
(statearr_39066_39097[(2)] = inst_38980);

(statearr_39066_39097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (14))){
var inst_39002 = (state_39036[(7)]);
var inst_39004 = cljs.core.chunked_seq_QMARK_.call(null,inst_39002);
var state_39036__$1 = state_39036;
if(inst_39004){
var statearr_39067_39098 = state_39036__$1;
(statearr_39067_39098[(1)] = (17));

} else {
var statearr_39068_39099 = state_39036__$1;
(statearr_39068_39099[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (16))){
var inst_39020 = (state_39036[(2)]);
var state_39036__$1 = state_39036;
var statearr_39069_39100 = state_39036__$1;
(statearr_39069_39100[(2)] = inst_39020);

(statearr_39069_39100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39037 === (10))){
var inst_38991 = (state_39036[(10)]);
var inst_38989 = (state_39036[(12)]);
var inst_38996 = cljs.core._nth.call(null,inst_38989,inst_38991);
var state_39036__$1 = state_39036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39036__$1,(13),out,inst_38996);
} else {
if((state_val_39037 === (18))){
var inst_39002 = (state_39036[(7)]);
var inst_39011 = cljs.core.first.call(null,inst_39002);
var state_39036__$1 = state_39036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39036__$1,(20),out,inst_39011);
} else {
if((state_val_39037 === (8))){
var inst_38991 = (state_39036[(10)]);
var inst_38990 = (state_39036[(11)]);
var inst_38993 = (inst_38991 < inst_38990);
var inst_38994 = inst_38993;
var state_39036__$1 = state_39036;
if(cljs.core.truth_(inst_38994)){
var statearr_39070_39101 = state_39036__$1;
(statearr_39070_39101[(1)] = (10));

} else {
var statearr_39071_39102 = state_39036__$1;
(statearr_39071_39102[(1)] = (11));

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
});})(c__28009__auto__))
;
return ((function (switch__27988__auto__,c__28009__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_39075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39075[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__);

(statearr_39075[(1)] = (1));

return statearr_39075;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____1 = (function (state_39036){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_39036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e39076){if((e39076 instanceof Object)){
var ex__27992__auto__ = e39076;
var statearr_39077_39103 = state_39036;
(statearr_39077_39103[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39104 = state_39036;
state_39036 = G__39104;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__ = function(state_39036){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____1.call(this,state_39036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_39078 = f__28010__auto__.call(null);
(statearr_39078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_39078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__))
);

return c__28009__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39105 = [];
var len__27054__auto___39108 = arguments.length;
var i__27055__auto___39109 = (0);
while(true){
if((i__27055__auto___39109 < len__27054__auto___39108)){
args39105.push((arguments[i__27055__auto___39109]));

var G__39110 = (i__27055__auto___39109 + (1));
i__27055__auto___39109 = G__39110;
continue;
} else {
}
break;
}

var G__39107 = args39105.length;
switch (G__39107) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39105.length)].join('')));

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
var args39112 = [];
var len__27054__auto___39115 = arguments.length;
var i__27055__auto___39116 = (0);
while(true){
if((i__27055__auto___39116 < len__27054__auto___39115)){
args39112.push((arguments[i__27055__auto___39116]));

var G__39117 = (i__27055__auto___39116 + (1));
i__27055__auto___39116 = G__39117;
continue;
} else {
}
break;
}

var G__39114 = args39112.length;
switch (G__39114) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39112.length)].join('')));

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
var args39119 = [];
var len__27054__auto___39170 = arguments.length;
var i__27055__auto___39171 = (0);
while(true){
if((i__27055__auto___39171 < len__27054__auto___39170)){
args39119.push((arguments[i__27055__auto___39171]));

var G__39172 = (i__27055__auto___39171 + (1));
i__27055__auto___39171 = G__39172;
continue;
} else {
}
break;
}

var G__39121 = args39119.length;
switch (G__39121) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39119.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___39174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___39174,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___39174,out){
return (function (state_39145){
var state_val_39146 = (state_39145[(1)]);
if((state_val_39146 === (7))){
var inst_39140 = (state_39145[(2)]);
var state_39145__$1 = state_39145;
var statearr_39147_39175 = state_39145__$1;
(statearr_39147_39175[(2)] = inst_39140);

(statearr_39147_39175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39146 === (1))){
var inst_39122 = null;
var state_39145__$1 = (function (){var statearr_39148 = state_39145;
(statearr_39148[(7)] = inst_39122);

return statearr_39148;
})();
var statearr_39149_39176 = state_39145__$1;
(statearr_39149_39176[(2)] = null);

(statearr_39149_39176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39146 === (4))){
var inst_39125 = (state_39145[(8)]);
var inst_39125__$1 = (state_39145[(2)]);
var inst_39126 = (inst_39125__$1 == null);
var inst_39127 = cljs.core.not.call(null,inst_39126);
var state_39145__$1 = (function (){var statearr_39150 = state_39145;
(statearr_39150[(8)] = inst_39125__$1);

return statearr_39150;
})();
if(inst_39127){
var statearr_39151_39177 = state_39145__$1;
(statearr_39151_39177[(1)] = (5));

} else {
var statearr_39152_39178 = state_39145__$1;
(statearr_39152_39178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39146 === (6))){
var state_39145__$1 = state_39145;
var statearr_39153_39179 = state_39145__$1;
(statearr_39153_39179[(2)] = null);

(statearr_39153_39179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39146 === (3))){
var inst_39142 = (state_39145[(2)]);
var inst_39143 = cljs.core.async.close_BANG_.call(null,out);
var state_39145__$1 = (function (){var statearr_39154 = state_39145;
(statearr_39154[(9)] = inst_39142);

return statearr_39154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39145__$1,inst_39143);
} else {
if((state_val_39146 === (2))){
var state_39145__$1 = state_39145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39145__$1,(4),ch);
} else {
if((state_val_39146 === (11))){
var inst_39125 = (state_39145[(8)]);
var inst_39134 = (state_39145[(2)]);
var inst_39122 = inst_39125;
var state_39145__$1 = (function (){var statearr_39155 = state_39145;
(statearr_39155[(10)] = inst_39134);

(statearr_39155[(7)] = inst_39122);

return statearr_39155;
})();
var statearr_39156_39180 = state_39145__$1;
(statearr_39156_39180[(2)] = null);

(statearr_39156_39180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39146 === (9))){
var inst_39125 = (state_39145[(8)]);
var state_39145__$1 = state_39145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39145__$1,(11),out,inst_39125);
} else {
if((state_val_39146 === (5))){
var inst_39125 = (state_39145[(8)]);
var inst_39122 = (state_39145[(7)]);
var inst_39129 = cljs.core._EQ_.call(null,inst_39125,inst_39122);
var state_39145__$1 = state_39145;
if(inst_39129){
var statearr_39158_39181 = state_39145__$1;
(statearr_39158_39181[(1)] = (8));

} else {
var statearr_39159_39182 = state_39145__$1;
(statearr_39159_39182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39146 === (10))){
var inst_39137 = (state_39145[(2)]);
var state_39145__$1 = state_39145;
var statearr_39160_39183 = state_39145__$1;
(statearr_39160_39183[(2)] = inst_39137);

(statearr_39160_39183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39146 === (8))){
var inst_39122 = (state_39145[(7)]);
var tmp39157 = inst_39122;
var inst_39122__$1 = tmp39157;
var state_39145__$1 = (function (){var statearr_39161 = state_39145;
(statearr_39161[(7)] = inst_39122__$1);

return statearr_39161;
})();
var statearr_39162_39184 = state_39145__$1;
(statearr_39162_39184[(2)] = null);

(statearr_39162_39184[(1)] = (2));


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
});})(c__28009__auto___39174,out))
;
return ((function (switch__27988__auto__,c__28009__auto___39174,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_39166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39166[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_39166[(1)] = (1));

return statearr_39166;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_39145){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_39145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e39167){if((e39167 instanceof Object)){
var ex__27992__auto__ = e39167;
var statearr_39168_39185 = state_39145;
(statearr_39168_39185[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39186 = state_39145;
state_39145 = G__39186;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_39145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_39145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___39174,out))
})();
var state__28011__auto__ = (function (){var statearr_39169 = f__28010__auto__.call(null);
(statearr_39169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___39174);

return statearr_39169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___39174,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39187 = [];
var len__27054__auto___39257 = arguments.length;
var i__27055__auto___39258 = (0);
while(true){
if((i__27055__auto___39258 < len__27054__auto___39257)){
args39187.push((arguments[i__27055__auto___39258]));

var G__39259 = (i__27055__auto___39258 + (1));
i__27055__auto___39258 = G__39259;
continue;
} else {
}
break;
}

var G__39189 = args39187.length;
switch (G__39189) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39187.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___39261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___39261,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___39261,out){
return (function (state_39227){
var state_val_39228 = (state_39227[(1)]);
if((state_val_39228 === (7))){
var inst_39223 = (state_39227[(2)]);
var state_39227__$1 = state_39227;
var statearr_39229_39262 = state_39227__$1;
(statearr_39229_39262[(2)] = inst_39223);

(statearr_39229_39262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (1))){
var inst_39190 = (new Array(n));
var inst_39191 = inst_39190;
var inst_39192 = (0);
var state_39227__$1 = (function (){var statearr_39230 = state_39227;
(statearr_39230[(7)] = inst_39192);

(statearr_39230[(8)] = inst_39191);

return statearr_39230;
})();
var statearr_39231_39263 = state_39227__$1;
(statearr_39231_39263[(2)] = null);

(statearr_39231_39263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (4))){
var inst_39195 = (state_39227[(9)]);
var inst_39195__$1 = (state_39227[(2)]);
var inst_39196 = (inst_39195__$1 == null);
var inst_39197 = cljs.core.not.call(null,inst_39196);
var state_39227__$1 = (function (){var statearr_39232 = state_39227;
(statearr_39232[(9)] = inst_39195__$1);

return statearr_39232;
})();
if(inst_39197){
var statearr_39233_39264 = state_39227__$1;
(statearr_39233_39264[(1)] = (5));

} else {
var statearr_39234_39265 = state_39227__$1;
(statearr_39234_39265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (15))){
var inst_39217 = (state_39227[(2)]);
var state_39227__$1 = state_39227;
var statearr_39235_39266 = state_39227__$1;
(statearr_39235_39266[(2)] = inst_39217);

(statearr_39235_39266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (13))){
var state_39227__$1 = state_39227;
var statearr_39236_39267 = state_39227__$1;
(statearr_39236_39267[(2)] = null);

(statearr_39236_39267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (6))){
var inst_39192 = (state_39227[(7)]);
var inst_39213 = (inst_39192 > (0));
var state_39227__$1 = state_39227;
if(cljs.core.truth_(inst_39213)){
var statearr_39237_39268 = state_39227__$1;
(statearr_39237_39268[(1)] = (12));

} else {
var statearr_39238_39269 = state_39227__$1;
(statearr_39238_39269[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (3))){
var inst_39225 = (state_39227[(2)]);
var state_39227__$1 = state_39227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39227__$1,inst_39225);
} else {
if((state_val_39228 === (12))){
var inst_39191 = (state_39227[(8)]);
var inst_39215 = cljs.core.vec.call(null,inst_39191);
var state_39227__$1 = state_39227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39227__$1,(15),out,inst_39215);
} else {
if((state_val_39228 === (2))){
var state_39227__$1 = state_39227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39227__$1,(4),ch);
} else {
if((state_val_39228 === (11))){
var inst_39207 = (state_39227[(2)]);
var inst_39208 = (new Array(n));
var inst_39191 = inst_39208;
var inst_39192 = (0);
var state_39227__$1 = (function (){var statearr_39239 = state_39227;
(statearr_39239[(7)] = inst_39192);

(statearr_39239[(8)] = inst_39191);

(statearr_39239[(10)] = inst_39207);

return statearr_39239;
})();
var statearr_39240_39270 = state_39227__$1;
(statearr_39240_39270[(2)] = null);

(statearr_39240_39270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (9))){
var inst_39191 = (state_39227[(8)]);
var inst_39205 = cljs.core.vec.call(null,inst_39191);
var state_39227__$1 = state_39227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39227__$1,(11),out,inst_39205);
} else {
if((state_val_39228 === (5))){
var inst_39195 = (state_39227[(9)]);
var inst_39192 = (state_39227[(7)]);
var inst_39191 = (state_39227[(8)]);
var inst_39200 = (state_39227[(11)]);
var inst_39199 = (inst_39191[inst_39192] = inst_39195);
var inst_39200__$1 = (inst_39192 + (1));
var inst_39201 = (inst_39200__$1 < n);
var state_39227__$1 = (function (){var statearr_39241 = state_39227;
(statearr_39241[(12)] = inst_39199);

(statearr_39241[(11)] = inst_39200__$1);

return statearr_39241;
})();
if(cljs.core.truth_(inst_39201)){
var statearr_39242_39271 = state_39227__$1;
(statearr_39242_39271[(1)] = (8));

} else {
var statearr_39243_39272 = state_39227__$1;
(statearr_39243_39272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (14))){
var inst_39220 = (state_39227[(2)]);
var inst_39221 = cljs.core.async.close_BANG_.call(null,out);
var state_39227__$1 = (function (){var statearr_39245 = state_39227;
(statearr_39245[(13)] = inst_39220);

return statearr_39245;
})();
var statearr_39246_39273 = state_39227__$1;
(statearr_39246_39273[(2)] = inst_39221);

(statearr_39246_39273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (10))){
var inst_39211 = (state_39227[(2)]);
var state_39227__$1 = state_39227;
var statearr_39247_39274 = state_39227__$1;
(statearr_39247_39274[(2)] = inst_39211);

(statearr_39247_39274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39228 === (8))){
var inst_39191 = (state_39227[(8)]);
var inst_39200 = (state_39227[(11)]);
var tmp39244 = inst_39191;
var inst_39191__$1 = tmp39244;
var inst_39192 = inst_39200;
var state_39227__$1 = (function (){var statearr_39248 = state_39227;
(statearr_39248[(7)] = inst_39192);

(statearr_39248[(8)] = inst_39191__$1);

return statearr_39248;
})();
var statearr_39249_39275 = state_39227__$1;
(statearr_39249_39275[(2)] = null);

(statearr_39249_39275[(1)] = (2));


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
});})(c__28009__auto___39261,out))
;
return ((function (switch__27988__auto__,c__28009__auto___39261,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_39253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39253[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_39253[(1)] = (1));

return statearr_39253;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_39227){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_39227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e39254){if((e39254 instanceof Object)){
var ex__27992__auto__ = e39254;
var statearr_39255_39276 = state_39227;
(statearr_39255_39276[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39277 = state_39227;
state_39227 = G__39277;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_39227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_39227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___39261,out))
})();
var state__28011__auto__ = (function (){var statearr_39256 = f__28010__auto__.call(null);
(statearr_39256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___39261);

return statearr_39256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___39261,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args39278 = [];
var len__27054__auto___39352 = arguments.length;
var i__27055__auto___39353 = (0);
while(true){
if((i__27055__auto___39353 < len__27054__auto___39352)){
args39278.push((arguments[i__27055__auto___39353]));

var G__39354 = (i__27055__auto___39353 + (1));
i__27055__auto___39353 = G__39354;
continue;
} else {
}
break;
}

var G__39280 = args39278.length;
switch (G__39280) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39278.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___39356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___39356,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___39356,out){
return (function (state_39322){
var state_val_39323 = (state_39322[(1)]);
if((state_val_39323 === (7))){
var inst_39318 = (state_39322[(2)]);
var state_39322__$1 = state_39322;
var statearr_39324_39357 = state_39322__$1;
(statearr_39324_39357[(2)] = inst_39318);

(statearr_39324_39357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39323 === (1))){
var inst_39281 = [];
var inst_39282 = inst_39281;
var inst_39283 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39322__$1 = (function (){var statearr_39325 = state_39322;
(statearr_39325[(7)] = inst_39283);

(statearr_39325[(8)] = inst_39282);

return statearr_39325;
})();
var statearr_39326_39358 = state_39322__$1;
(statearr_39326_39358[(2)] = null);

(statearr_39326_39358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39323 === (4))){
var inst_39286 = (state_39322[(9)]);
var inst_39286__$1 = (state_39322[(2)]);
var inst_39287 = (inst_39286__$1 == null);
var inst_39288 = cljs.core.not.call(null,inst_39287);
var state_39322__$1 = (function (){var statearr_39327 = state_39322;
(statearr_39327[(9)] = inst_39286__$1);

return statearr_39327;
})();
if(inst_39288){
var statearr_39328_39359 = state_39322__$1;
(statearr_39328_39359[(1)] = (5));

} else {
var statearr_39329_39360 = state_39322__$1;
(statearr_39329_39360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39323 === (15))){
var inst_39312 = (state_39322[(2)]);
var state_39322__$1 = state_39322;
var statearr_39330_39361 = state_39322__$1;
(statearr_39330_39361[(2)] = inst_39312);

(statearr_39330_39361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39323 === (13))){
var state_39322__$1 = state_39322;
var statearr_39331_39362 = state_39322__$1;
(statearr_39331_39362[(2)] = null);

(statearr_39331_39362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39323 === (6))){
var inst_39282 = (state_39322[(8)]);
var inst_39307 = inst_39282.length;
var inst_39308 = (inst_39307 > (0));
var state_39322__$1 = state_39322;
if(cljs.core.truth_(inst_39308)){
var statearr_39332_39363 = state_39322__$1;
(statearr_39332_39363[(1)] = (12));

} else {
var statearr_39333_39364 = state_39322__$1;
(statearr_39333_39364[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39323 === (3))){
var inst_39320 = (state_39322[(2)]);
var state_39322__$1 = state_39322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39322__$1,inst_39320);
} else {
if((state_val_39323 === (12))){
var inst_39282 = (state_39322[(8)]);
var inst_39310 = cljs.core.vec.call(null,inst_39282);
var state_39322__$1 = state_39322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39322__$1,(15),out,inst_39310);
} else {
if((state_val_39323 === (2))){
var state_39322__$1 = state_39322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39322__$1,(4),ch);
} else {
if((state_val_39323 === (11))){
var inst_39286 = (state_39322[(9)]);
var inst_39290 = (state_39322[(10)]);
var inst_39300 = (state_39322[(2)]);
var inst_39301 = [];
var inst_39302 = inst_39301.push(inst_39286);
var inst_39282 = inst_39301;
var inst_39283 = inst_39290;
var state_39322__$1 = (function (){var statearr_39334 = state_39322;
(statearr_39334[(11)] = inst_39300);

(statearr_39334[(7)] = inst_39283);

(statearr_39334[(8)] = inst_39282);

(statearr_39334[(12)] = inst_39302);

return statearr_39334;
})();
var statearr_39335_39365 = state_39322__$1;
(statearr_39335_39365[(2)] = null);

(statearr_39335_39365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39323 === (9))){
var inst_39282 = (state_39322[(8)]);
var inst_39298 = cljs.core.vec.call(null,inst_39282);
var state_39322__$1 = state_39322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39322__$1,(11),out,inst_39298);
} else {
if((state_val_39323 === (5))){
var inst_39286 = (state_39322[(9)]);
var inst_39283 = (state_39322[(7)]);
var inst_39290 = (state_39322[(10)]);
var inst_39290__$1 = f.call(null,inst_39286);
var inst_39291 = cljs.core._EQ_.call(null,inst_39290__$1,inst_39283);
var inst_39292 = cljs.core.keyword_identical_QMARK_.call(null,inst_39283,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39293 = (inst_39291) || (inst_39292);
var state_39322__$1 = (function (){var statearr_39336 = state_39322;
(statearr_39336[(10)] = inst_39290__$1);

return statearr_39336;
})();
if(cljs.core.truth_(inst_39293)){
var statearr_39337_39366 = state_39322__$1;
(statearr_39337_39366[(1)] = (8));

} else {
var statearr_39338_39367 = state_39322__$1;
(statearr_39338_39367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39323 === (14))){
var inst_39315 = (state_39322[(2)]);
var inst_39316 = cljs.core.async.close_BANG_.call(null,out);
var state_39322__$1 = (function (){var statearr_39340 = state_39322;
(statearr_39340[(13)] = inst_39315);

return statearr_39340;
})();
var statearr_39341_39368 = state_39322__$1;
(statearr_39341_39368[(2)] = inst_39316);

(statearr_39341_39368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39323 === (10))){
var inst_39305 = (state_39322[(2)]);
var state_39322__$1 = state_39322;
var statearr_39342_39369 = state_39322__$1;
(statearr_39342_39369[(2)] = inst_39305);

(statearr_39342_39369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39323 === (8))){
var inst_39286 = (state_39322[(9)]);
var inst_39290 = (state_39322[(10)]);
var inst_39282 = (state_39322[(8)]);
var inst_39295 = inst_39282.push(inst_39286);
var tmp39339 = inst_39282;
var inst_39282__$1 = tmp39339;
var inst_39283 = inst_39290;
var state_39322__$1 = (function (){var statearr_39343 = state_39322;
(statearr_39343[(7)] = inst_39283);

(statearr_39343[(8)] = inst_39282__$1);

(statearr_39343[(14)] = inst_39295);

return statearr_39343;
})();
var statearr_39344_39370 = state_39322__$1;
(statearr_39344_39370[(2)] = null);

(statearr_39344_39370[(1)] = (2));


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
});})(c__28009__auto___39356,out))
;
return ((function (switch__27988__auto__,c__28009__auto___39356,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_39348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39348[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_39348[(1)] = (1));

return statearr_39348;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_39322){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_39322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e39349){if((e39349 instanceof Object)){
var ex__27992__auto__ = e39349;
var statearr_39350_39371 = state_39322;
(statearr_39350_39371[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39372 = state_39322;
state_39322 = G__39372;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_39322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_39322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___39356,out))
})();
var state__28011__auto__ = (function (){var statearr_39351 = f__28010__auto__.call(null);
(statearr_39351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___39356);

return statearr_39351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___39356,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1499706488602