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
var args52901 = [];
var len__27054__auto___52907 = arguments.length;
var i__27055__auto___52908 = (0);
while(true){
if((i__27055__auto___52908 < len__27054__auto___52907)){
args52901.push((arguments[i__27055__auto___52908]));

var G__52909 = (i__27055__auto___52908 + (1));
i__27055__auto___52908 = G__52909;
continue;
} else {
}
break;
}

var G__52903 = args52901.length;
switch (G__52903) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52901.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async52904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52904 = (function (f,blockable,meta52905){
this.f = f;
this.blockable = blockable;
this.meta52905 = meta52905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52906,meta52905__$1){
var self__ = this;
var _52906__$1 = this;
return (new cljs.core.async.t_cljs$core$async52904(self__.f,self__.blockable,meta52905__$1));
});

cljs.core.async.t_cljs$core$async52904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52906){
var self__ = this;
var _52906__$1 = this;
return self__.meta52905;
});

cljs.core.async.t_cljs$core$async52904.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async52904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52904.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async52904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async52904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta52905","meta52905",1033270965,null)], null);
});

cljs.core.async.t_cljs$core$async52904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52904";

cljs.core.async.t_cljs$core$async52904.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async52904");
});

cljs.core.async.__GT_t_cljs$core$async52904 = (function cljs$core$async$__GT_t_cljs$core$async52904(f__$1,blockable__$1,meta52905){
return (new cljs.core.async.t_cljs$core$async52904(f__$1,blockable__$1,meta52905));
});

}

return (new cljs.core.async.t_cljs$core$async52904(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args52913 = [];
var len__27054__auto___52916 = arguments.length;
var i__27055__auto___52917 = (0);
while(true){
if((i__27055__auto___52917 < len__27054__auto___52916)){
args52913.push((arguments[i__27055__auto___52917]));

var G__52918 = (i__27055__auto___52917 + (1));
i__27055__auto___52917 = G__52918;
continue;
} else {
}
break;
}

var G__52915 = args52913.length;
switch (G__52915) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52913.length)].join('')));

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
var args52920 = [];
var len__27054__auto___52923 = arguments.length;
var i__27055__auto___52924 = (0);
while(true){
if((i__27055__auto___52924 < len__27054__auto___52923)){
args52920.push((arguments[i__27055__auto___52924]));

var G__52925 = (i__27055__auto___52924 + (1));
i__27055__auto___52924 = G__52925;
continue;
} else {
}
break;
}

var G__52922 = args52920.length;
switch (G__52922) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52920.length)].join('')));

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
var args52927 = [];
var len__27054__auto___52930 = arguments.length;
var i__27055__auto___52931 = (0);
while(true){
if((i__27055__auto___52931 < len__27054__auto___52930)){
args52927.push((arguments[i__27055__auto___52931]));

var G__52932 = (i__27055__auto___52931 + (1));
i__27055__auto___52931 = G__52932;
continue;
} else {
}
break;
}

var G__52929 = args52927.length;
switch (G__52929) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52927.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_52934 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_52934);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_52934,ret){
return (function (){
return fn1.call(null,val_52934);
});})(val_52934,ret))
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
var args52935 = [];
var len__27054__auto___52938 = arguments.length;
var i__27055__auto___52939 = (0);
while(true){
if((i__27055__auto___52939 < len__27054__auto___52938)){
args52935.push((arguments[i__27055__auto___52939]));

var G__52940 = (i__27055__auto___52939 + (1));
i__27055__auto___52939 = G__52940;
continue;
} else {
}
break;
}

var G__52937 = args52935.length;
switch (G__52937) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52935.length)].join('')));

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
var n__26894__auto___52942 = n;
var x_52943 = (0);
while(true){
if((x_52943 < n__26894__auto___52942)){
(a[x_52943] = (0));

var G__52944 = (x_52943 + (1));
x_52943 = G__52944;
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

var G__52945 = (i + (1));
i = G__52945;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async52949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52949 = (function (alt_flag,flag,meta52950){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta52950 = meta52950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_52951,meta52950__$1){
var self__ = this;
var _52951__$1 = this;
return (new cljs.core.async.t_cljs$core$async52949(self__.alt_flag,self__.flag,meta52950__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async52949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_52951){
var self__ = this;
var _52951__$1 = this;
return self__.meta52950;
});})(flag))
;

cljs.core.async.t_cljs$core$async52949.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async52949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async52949.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52949.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52950","meta52950",137084346,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async52949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52949";

cljs.core.async.t_cljs$core$async52949.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async52949");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async52949 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52949(alt_flag__$1,flag__$1,meta52950){
return (new cljs.core.async.t_cljs$core$async52949(alt_flag__$1,flag__$1,meta52950));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async52949(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async52955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52955 = (function (alt_handler,flag,cb,meta52956){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta52956 = meta52956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52957,meta52956__$1){
var self__ = this;
var _52957__$1 = this;
return (new cljs.core.async.t_cljs$core$async52955(self__.alt_handler,self__.flag,self__.cb,meta52956__$1));
});

cljs.core.async.t_cljs$core$async52955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52957){
var self__ = this;
var _52957__$1 = this;
return self__.meta52956;
});

cljs.core.async.t_cljs$core$async52955.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async52955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async52955.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async52955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52956","meta52956",784824669,null)], null);
});

cljs.core.async.t_cljs$core$async52955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52955";

cljs.core.async.t_cljs$core$async52955.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async52955");
});

cljs.core.async.__GT_t_cljs$core$async52955 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52955(alt_handler__$1,flag__$1,cb__$1,meta52956){
return (new cljs.core.async.t_cljs$core$async52955(alt_handler__$1,flag__$1,cb__$1,meta52956));
});

}

return (new cljs.core.async.t_cljs$core$async52955(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__52958_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52958_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52959_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52959_SHARP_,port], null));
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
var G__52960 = (i + (1));
i = G__52960;
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
var len__27054__auto___52966 = arguments.length;
var i__27055__auto___52967 = (0);
while(true){
if((i__27055__auto___52967 < len__27054__auto___52966)){
args__27061__auto__.push((arguments[i__27055__auto___52967]));

var G__52968 = (i__27055__auto___52967 + (1));
i__27055__auto___52967 = G__52968;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52963){
var map__52964 = p__52963;
var map__52964__$1 = ((((!((map__52964 == null)))?((((map__52964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52964):map__52964);
var opts = map__52964__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52961){
var G__52962 = cljs.core.first.call(null,seq52961);
var seq52961__$1 = cljs.core.next.call(null,seq52961);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52962,seq52961__$1);
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
var args52969 = [];
var len__27054__auto___53019 = arguments.length;
var i__27055__auto___53020 = (0);
while(true){
if((i__27055__auto___53020 < len__27054__auto___53019)){
args52969.push((arguments[i__27055__auto___53020]));

var G__53021 = (i__27055__auto___53020 + (1));
i__27055__auto___53020 = G__53021;
continue;
} else {
}
break;
}

var G__52971 = args52969.length;
switch (G__52971) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52969.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28846__auto___53023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___53023){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___53023){
return (function (state_52995){
var state_val_52996 = (state_52995[(1)]);
if((state_val_52996 === (7))){
var inst_52991 = (state_52995[(2)]);
var state_52995__$1 = state_52995;
var statearr_52997_53024 = state_52995__$1;
(statearr_52997_53024[(2)] = inst_52991);

(statearr_52997_53024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52996 === (1))){
var state_52995__$1 = state_52995;
var statearr_52998_53025 = state_52995__$1;
(statearr_52998_53025[(2)] = null);

(statearr_52998_53025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52996 === (4))){
var inst_52974 = (state_52995[(7)]);
var inst_52974__$1 = (state_52995[(2)]);
var inst_52975 = (inst_52974__$1 == null);
var state_52995__$1 = (function (){var statearr_52999 = state_52995;
(statearr_52999[(7)] = inst_52974__$1);

return statearr_52999;
})();
if(cljs.core.truth_(inst_52975)){
var statearr_53000_53026 = state_52995__$1;
(statearr_53000_53026[(1)] = (5));

} else {
var statearr_53001_53027 = state_52995__$1;
(statearr_53001_53027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52996 === (13))){
var state_52995__$1 = state_52995;
var statearr_53002_53028 = state_52995__$1;
(statearr_53002_53028[(2)] = null);

(statearr_53002_53028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52996 === (6))){
var inst_52974 = (state_52995[(7)]);
var state_52995__$1 = state_52995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52995__$1,(11),to,inst_52974);
} else {
if((state_val_52996 === (3))){
var inst_52993 = (state_52995[(2)]);
var state_52995__$1 = state_52995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52995__$1,inst_52993);
} else {
if((state_val_52996 === (12))){
var state_52995__$1 = state_52995;
var statearr_53003_53029 = state_52995__$1;
(statearr_53003_53029[(2)] = null);

(statearr_53003_53029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52996 === (2))){
var state_52995__$1 = state_52995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52995__$1,(4),from);
} else {
if((state_val_52996 === (11))){
var inst_52984 = (state_52995[(2)]);
var state_52995__$1 = state_52995;
if(cljs.core.truth_(inst_52984)){
var statearr_53004_53030 = state_52995__$1;
(statearr_53004_53030[(1)] = (12));

} else {
var statearr_53005_53031 = state_52995__$1;
(statearr_53005_53031[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52996 === (9))){
var state_52995__$1 = state_52995;
var statearr_53006_53032 = state_52995__$1;
(statearr_53006_53032[(2)] = null);

(statearr_53006_53032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52996 === (5))){
var state_52995__$1 = state_52995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53007_53033 = state_52995__$1;
(statearr_53007_53033[(1)] = (8));

} else {
var statearr_53008_53034 = state_52995__$1;
(statearr_53008_53034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52996 === (14))){
var inst_52989 = (state_52995[(2)]);
var state_52995__$1 = state_52995;
var statearr_53009_53035 = state_52995__$1;
(statearr_53009_53035[(2)] = inst_52989);

(statearr_53009_53035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52996 === (10))){
var inst_52981 = (state_52995[(2)]);
var state_52995__$1 = state_52995;
var statearr_53010_53036 = state_52995__$1;
(statearr_53010_53036[(2)] = inst_52981);

(statearr_53010_53036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52996 === (8))){
var inst_52978 = cljs.core.async.close_BANG_.call(null,to);
var state_52995__$1 = state_52995;
var statearr_53011_53037 = state_52995__$1;
(statearr_53011_53037[(2)] = inst_52978);

(statearr_53011_53037[(1)] = (10));


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
});})(c__28846__auto___53023))
;
return ((function (switch__28734__auto__,c__28846__auto___53023){
return (function() {
var cljs$core$async$state_machine__28735__auto__ = null;
var cljs$core$async$state_machine__28735__auto____0 = (function (){
var statearr_53015 = [null,null,null,null,null,null,null,null];
(statearr_53015[(0)] = cljs$core$async$state_machine__28735__auto__);

(statearr_53015[(1)] = (1));

return statearr_53015;
});
var cljs$core$async$state_machine__28735__auto____1 = (function (state_52995){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_52995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e53016){if((e53016 instanceof Object)){
var ex__28738__auto__ = e53016;
var statearr_53017_53038 = state_52995;
(statearr_53017_53038[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53039 = state_52995;
state_52995 = G__53039;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$state_machine__28735__auto__ = function(state_52995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28735__auto____1.call(this,state_52995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28735__auto____0;
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28735__auto____1;
return cljs$core$async$state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___53023))
})();
var state__28848__auto__ = (function (){var statearr_53018 = f__28847__auto__.call(null);
(statearr_53018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___53023);

return statearr_53018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___53023))
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
return (function (p__53227){
var vec__53228 = p__53227;
var v = cljs.core.nth.call(null,vec__53228,(0),null);
var p = cljs.core.nth.call(null,vec__53228,(1),null);
var job = vec__53228;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28846__auto___53414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___53414,res,vec__53228,v,p,job,jobs,results){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___53414,res,vec__53228,v,p,job,jobs,results){
return (function (state_53235){
var state_val_53236 = (state_53235[(1)]);
if((state_val_53236 === (1))){
var state_53235__$1 = state_53235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53235__$1,(2),res,v);
} else {
if((state_val_53236 === (2))){
var inst_53232 = (state_53235[(2)]);
var inst_53233 = cljs.core.async.close_BANG_.call(null,res);
var state_53235__$1 = (function (){var statearr_53237 = state_53235;
(statearr_53237[(7)] = inst_53232);

return statearr_53237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53235__$1,inst_53233);
} else {
return null;
}
}
});})(c__28846__auto___53414,res,vec__53228,v,p,job,jobs,results))
;
return ((function (switch__28734__auto__,c__28846__auto___53414,res,vec__53228,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0 = (function (){
var statearr_53241 = [null,null,null,null,null,null,null,null];
(statearr_53241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__);

(statearr_53241[(1)] = (1));

return statearr_53241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1 = (function (state_53235){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_53235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e53242){if((e53242 instanceof Object)){
var ex__28738__auto__ = e53242;
var statearr_53243_53415 = state_53235;
(statearr_53243_53415[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53416 = state_53235;
state_53235 = G__53416;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__ = function(state_53235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1.call(this,state_53235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___53414,res,vec__53228,v,p,job,jobs,results))
})();
var state__28848__auto__ = (function (){var statearr_53244 = f__28847__auto__.call(null);
(statearr_53244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___53414);

return statearr_53244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___53414,res,vec__53228,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__53245){
var vec__53246 = p__53245;
var v = cljs.core.nth.call(null,vec__53246,(0),null);
var p = cljs.core.nth.call(null,vec__53246,(1),null);
var job = vec__53246;
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
var n__26894__auto___53417 = n;
var __53418 = (0);
while(true){
if((__53418 < n__26894__auto___53417)){
var G__53249_53419 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__53249_53419) {
case "compute":
var c__28846__auto___53421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__53418,c__28846__auto___53421,G__53249_53419,n__26894__auto___53417,jobs,results,process,async){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (__53418,c__28846__auto___53421,G__53249_53419,n__26894__auto___53417,jobs,results,process,async){
return (function (state_53262){
var state_val_53263 = (state_53262[(1)]);
if((state_val_53263 === (1))){
var state_53262__$1 = state_53262;
var statearr_53264_53422 = state_53262__$1;
(statearr_53264_53422[(2)] = null);

(statearr_53264_53422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53263 === (2))){
var state_53262__$1 = state_53262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53262__$1,(4),jobs);
} else {
if((state_val_53263 === (3))){
var inst_53260 = (state_53262[(2)]);
var state_53262__$1 = state_53262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53262__$1,inst_53260);
} else {
if((state_val_53263 === (4))){
var inst_53252 = (state_53262[(2)]);
var inst_53253 = process.call(null,inst_53252);
var state_53262__$1 = state_53262;
if(cljs.core.truth_(inst_53253)){
var statearr_53265_53423 = state_53262__$1;
(statearr_53265_53423[(1)] = (5));

} else {
var statearr_53266_53424 = state_53262__$1;
(statearr_53266_53424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53263 === (5))){
var state_53262__$1 = state_53262;
var statearr_53267_53425 = state_53262__$1;
(statearr_53267_53425[(2)] = null);

(statearr_53267_53425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53263 === (6))){
var state_53262__$1 = state_53262;
var statearr_53268_53426 = state_53262__$1;
(statearr_53268_53426[(2)] = null);

(statearr_53268_53426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53263 === (7))){
var inst_53258 = (state_53262[(2)]);
var state_53262__$1 = state_53262;
var statearr_53269_53427 = state_53262__$1;
(statearr_53269_53427[(2)] = inst_53258);

(statearr_53269_53427[(1)] = (3));


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
});})(__53418,c__28846__auto___53421,G__53249_53419,n__26894__auto___53417,jobs,results,process,async))
;
return ((function (__53418,switch__28734__auto__,c__28846__auto___53421,G__53249_53419,n__26894__auto___53417,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0 = (function (){
var statearr_53273 = [null,null,null,null,null,null,null];
(statearr_53273[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__);

(statearr_53273[(1)] = (1));

return statearr_53273;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1 = (function (state_53262){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_53262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e53274){if((e53274 instanceof Object)){
var ex__28738__auto__ = e53274;
var statearr_53275_53428 = state_53262;
(statearr_53275_53428[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53429 = state_53262;
state_53262 = G__53429;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__ = function(state_53262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1.call(this,state_53262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__;
})()
;})(__53418,switch__28734__auto__,c__28846__auto___53421,G__53249_53419,n__26894__auto___53417,jobs,results,process,async))
})();
var state__28848__auto__ = (function (){var statearr_53276 = f__28847__auto__.call(null);
(statearr_53276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___53421);

return statearr_53276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(__53418,c__28846__auto___53421,G__53249_53419,n__26894__auto___53417,jobs,results,process,async))
);


break;
case "async":
var c__28846__auto___53430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__53418,c__28846__auto___53430,G__53249_53419,n__26894__auto___53417,jobs,results,process,async){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (__53418,c__28846__auto___53430,G__53249_53419,n__26894__auto___53417,jobs,results,process,async){
return (function (state_53289){
var state_val_53290 = (state_53289[(1)]);
if((state_val_53290 === (1))){
var state_53289__$1 = state_53289;
var statearr_53291_53431 = state_53289__$1;
(statearr_53291_53431[(2)] = null);

(statearr_53291_53431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53290 === (2))){
var state_53289__$1 = state_53289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53289__$1,(4),jobs);
} else {
if((state_val_53290 === (3))){
var inst_53287 = (state_53289[(2)]);
var state_53289__$1 = state_53289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53289__$1,inst_53287);
} else {
if((state_val_53290 === (4))){
var inst_53279 = (state_53289[(2)]);
var inst_53280 = async.call(null,inst_53279);
var state_53289__$1 = state_53289;
if(cljs.core.truth_(inst_53280)){
var statearr_53292_53432 = state_53289__$1;
(statearr_53292_53432[(1)] = (5));

} else {
var statearr_53293_53433 = state_53289__$1;
(statearr_53293_53433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53290 === (5))){
var state_53289__$1 = state_53289;
var statearr_53294_53434 = state_53289__$1;
(statearr_53294_53434[(2)] = null);

(statearr_53294_53434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53290 === (6))){
var state_53289__$1 = state_53289;
var statearr_53295_53435 = state_53289__$1;
(statearr_53295_53435[(2)] = null);

(statearr_53295_53435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53290 === (7))){
var inst_53285 = (state_53289[(2)]);
var state_53289__$1 = state_53289;
var statearr_53296_53436 = state_53289__$1;
(statearr_53296_53436[(2)] = inst_53285);

(statearr_53296_53436[(1)] = (3));


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
});})(__53418,c__28846__auto___53430,G__53249_53419,n__26894__auto___53417,jobs,results,process,async))
;
return ((function (__53418,switch__28734__auto__,c__28846__auto___53430,G__53249_53419,n__26894__auto___53417,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0 = (function (){
var statearr_53300 = [null,null,null,null,null,null,null];
(statearr_53300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__);

(statearr_53300[(1)] = (1));

return statearr_53300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1 = (function (state_53289){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_53289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e53301){if((e53301 instanceof Object)){
var ex__28738__auto__ = e53301;
var statearr_53302_53437 = state_53289;
(statearr_53302_53437[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53438 = state_53289;
state_53289 = G__53438;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__ = function(state_53289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1.call(this,state_53289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__;
})()
;})(__53418,switch__28734__auto__,c__28846__auto___53430,G__53249_53419,n__26894__auto___53417,jobs,results,process,async))
})();
var state__28848__auto__ = (function (){var statearr_53303 = f__28847__auto__.call(null);
(statearr_53303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___53430);

return statearr_53303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(__53418,c__28846__auto___53430,G__53249_53419,n__26894__auto___53417,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__53439 = (__53418 + (1));
__53418 = G__53439;
continue;
} else {
}
break;
}

var c__28846__auto___53440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___53440,jobs,results,process,async){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___53440,jobs,results,process,async){
return (function (state_53325){
var state_val_53326 = (state_53325[(1)]);
if((state_val_53326 === (1))){
var state_53325__$1 = state_53325;
var statearr_53327_53441 = state_53325__$1;
(statearr_53327_53441[(2)] = null);

(statearr_53327_53441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (2))){
var state_53325__$1 = state_53325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53325__$1,(4),from);
} else {
if((state_val_53326 === (3))){
var inst_53323 = (state_53325[(2)]);
var state_53325__$1 = state_53325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53325__$1,inst_53323);
} else {
if((state_val_53326 === (4))){
var inst_53306 = (state_53325[(7)]);
var inst_53306__$1 = (state_53325[(2)]);
var inst_53307 = (inst_53306__$1 == null);
var state_53325__$1 = (function (){var statearr_53328 = state_53325;
(statearr_53328[(7)] = inst_53306__$1);

return statearr_53328;
})();
if(cljs.core.truth_(inst_53307)){
var statearr_53329_53442 = state_53325__$1;
(statearr_53329_53442[(1)] = (5));

} else {
var statearr_53330_53443 = state_53325__$1;
(statearr_53330_53443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (5))){
var inst_53309 = cljs.core.async.close_BANG_.call(null,jobs);
var state_53325__$1 = state_53325;
var statearr_53331_53444 = state_53325__$1;
(statearr_53331_53444[(2)] = inst_53309);

(statearr_53331_53444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (6))){
var inst_53311 = (state_53325[(8)]);
var inst_53306 = (state_53325[(7)]);
var inst_53311__$1 = cljs.core.async.chan.call(null,(1));
var inst_53312 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53313 = [inst_53306,inst_53311__$1];
var inst_53314 = (new cljs.core.PersistentVector(null,2,(5),inst_53312,inst_53313,null));
var state_53325__$1 = (function (){var statearr_53332 = state_53325;
(statearr_53332[(8)] = inst_53311__$1);

return statearr_53332;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53325__$1,(8),jobs,inst_53314);
} else {
if((state_val_53326 === (7))){
var inst_53321 = (state_53325[(2)]);
var state_53325__$1 = state_53325;
var statearr_53333_53445 = state_53325__$1;
(statearr_53333_53445[(2)] = inst_53321);

(statearr_53333_53445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53326 === (8))){
var inst_53311 = (state_53325[(8)]);
var inst_53316 = (state_53325[(2)]);
var state_53325__$1 = (function (){var statearr_53334 = state_53325;
(statearr_53334[(9)] = inst_53316);

return statearr_53334;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53325__$1,(9),results,inst_53311);
} else {
if((state_val_53326 === (9))){
var inst_53318 = (state_53325[(2)]);
var state_53325__$1 = (function (){var statearr_53335 = state_53325;
(statearr_53335[(10)] = inst_53318);

return statearr_53335;
})();
var statearr_53336_53446 = state_53325__$1;
(statearr_53336_53446[(2)] = null);

(statearr_53336_53446[(1)] = (2));


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
});})(c__28846__auto___53440,jobs,results,process,async))
;
return ((function (switch__28734__auto__,c__28846__auto___53440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0 = (function (){
var statearr_53340 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__);

(statearr_53340[(1)] = (1));

return statearr_53340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1 = (function (state_53325){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_53325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e53341){if((e53341 instanceof Object)){
var ex__28738__auto__ = e53341;
var statearr_53342_53447 = state_53325;
(statearr_53342_53447[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53448 = state_53325;
state_53325 = G__53448;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__ = function(state_53325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1.call(this,state_53325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___53440,jobs,results,process,async))
})();
var state__28848__auto__ = (function (){var statearr_53343 = f__28847__auto__.call(null);
(statearr_53343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___53440);

return statearr_53343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___53440,jobs,results,process,async))
);


var c__28846__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto__,jobs,results,process,async){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto__,jobs,results,process,async){
return (function (state_53381){
var state_val_53382 = (state_53381[(1)]);
if((state_val_53382 === (7))){
var inst_53377 = (state_53381[(2)]);
var state_53381__$1 = state_53381;
var statearr_53383_53449 = state_53381__$1;
(statearr_53383_53449[(2)] = inst_53377);

(statearr_53383_53449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (20))){
var state_53381__$1 = state_53381;
var statearr_53384_53450 = state_53381__$1;
(statearr_53384_53450[(2)] = null);

(statearr_53384_53450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (1))){
var state_53381__$1 = state_53381;
var statearr_53385_53451 = state_53381__$1;
(statearr_53385_53451[(2)] = null);

(statearr_53385_53451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (4))){
var inst_53346 = (state_53381[(7)]);
var inst_53346__$1 = (state_53381[(2)]);
var inst_53347 = (inst_53346__$1 == null);
var state_53381__$1 = (function (){var statearr_53386 = state_53381;
(statearr_53386[(7)] = inst_53346__$1);

return statearr_53386;
})();
if(cljs.core.truth_(inst_53347)){
var statearr_53387_53452 = state_53381__$1;
(statearr_53387_53452[(1)] = (5));

} else {
var statearr_53388_53453 = state_53381__$1;
(statearr_53388_53453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (15))){
var inst_53359 = (state_53381[(8)]);
var state_53381__$1 = state_53381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53381__$1,(18),to,inst_53359);
} else {
if((state_val_53382 === (21))){
var inst_53372 = (state_53381[(2)]);
var state_53381__$1 = state_53381;
var statearr_53389_53454 = state_53381__$1;
(statearr_53389_53454[(2)] = inst_53372);

(statearr_53389_53454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (13))){
var inst_53374 = (state_53381[(2)]);
var state_53381__$1 = (function (){var statearr_53390 = state_53381;
(statearr_53390[(9)] = inst_53374);

return statearr_53390;
})();
var statearr_53391_53455 = state_53381__$1;
(statearr_53391_53455[(2)] = null);

(statearr_53391_53455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (6))){
var inst_53346 = (state_53381[(7)]);
var state_53381__$1 = state_53381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53381__$1,(11),inst_53346);
} else {
if((state_val_53382 === (17))){
var inst_53367 = (state_53381[(2)]);
var state_53381__$1 = state_53381;
if(cljs.core.truth_(inst_53367)){
var statearr_53392_53456 = state_53381__$1;
(statearr_53392_53456[(1)] = (19));

} else {
var statearr_53393_53457 = state_53381__$1;
(statearr_53393_53457[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (3))){
var inst_53379 = (state_53381[(2)]);
var state_53381__$1 = state_53381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53381__$1,inst_53379);
} else {
if((state_val_53382 === (12))){
var inst_53356 = (state_53381[(10)]);
var state_53381__$1 = state_53381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53381__$1,(14),inst_53356);
} else {
if((state_val_53382 === (2))){
var state_53381__$1 = state_53381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53381__$1,(4),results);
} else {
if((state_val_53382 === (19))){
var state_53381__$1 = state_53381;
var statearr_53394_53458 = state_53381__$1;
(statearr_53394_53458[(2)] = null);

(statearr_53394_53458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (11))){
var inst_53356 = (state_53381[(2)]);
var state_53381__$1 = (function (){var statearr_53395 = state_53381;
(statearr_53395[(10)] = inst_53356);

return statearr_53395;
})();
var statearr_53396_53459 = state_53381__$1;
(statearr_53396_53459[(2)] = null);

(statearr_53396_53459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (9))){
var state_53381__$1 = state_53381;
var statearr_53397_53460 = state_53381__$1;
(statearr_53397_53460[(2)] = null);

(statearr_53397_53460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (5))){
var state_53381__$1 = state_53381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53398_53461 = state_53381__$1;
(statearr_53398_53461[(1)] = (8));

} else {
var statearr_53399_53462 = state_53381__$1;
(statearr_53399_53462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (14))){
var inst_53359 = (state_53381[(8)]);
var inst_53361 = (state_53381[(11)]);
var inst_53359__$1 = (state_53381[(2)]);
var inst_53360 = (inst_53359__$1 == null);
var inst_53361__$1 = cljs.core.not.call(null,inst_53360);
var state_53381__$1 = (function (){var statearr_53400 = state_53381;
(statearr_53400[(8)] = inst_53359__$1);

(statearr_53400[(11)] = inst_53361__$1);

return statearr_53400;
})();
if(inst_53361__$1){
var statearr_53401_53463 = state_53381__$1;
(statearr_53401_53463[(1)] = (15));

} else {
var statearr_53402_53464 = state_53381__$1;
(statearr_53402_53464[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (16))){
var inst_53361 = (state_53381[(11)]);
var state_53381__$1 = state_53381;
var statearr_53403_53465 = state_53381__$1;
(statearr_53403_53465[(2)] = inst_53361);

(statearr_53403_53465[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (10))){
var inst_53353 = (state_53381[(2)]);
var state_53381__$1 = state_53381;
var statearr_53404_53466 = state_53381__$1;
(statearr_53404_53466[(2)] = inst_53353);

(statearr_53404_53466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (18))){
var inst_53364 = (state_53381[(2)]);
var state_53381__$1 = state_53381;
var statearr_53405_53467 = state_53381__$1;
(statearr_53405_53467[(2)] = inst_53364);

(statearr_53405_53467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53382 === (8))){
var inst_53350 = cljs.core.async.close_BANG_.call(null,to);
var state_53381__$1 = state_53381;
var statearr_53406_53468 = state_53381__$1;
(statearr_53406_53468[(2)] = inst_53350);

(statearr_53406_53468[(1)] = (10));


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
});})(c__28846__auto__,jobs,results,process,async))
;
return ((function (switch__28734__auto__,c__28846__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0 = (function (){
var statearr_53410 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__);

(statearr_53410[(1)] = (1));

return statearr_53410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1 = (function (state_53381){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_53381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e53411){if((e53411 instanceof Object)){
var ex__28738__auto__ = e53411;
var statearr_53412_53469 = state_53381;
(statearr_53412_53469[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53470 = state_53381;
state_53381 = G__53470;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__ = function(state_53381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1.call(this,state_53381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto__,jobs,results,process,async))
})();
var state__28848__auto__ = (function (){var statearr_53413 = f__28847__auto__.call(null);
(statearr_53413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto__);

return statearr_53413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto__,jobs,results,process,async))
);

return c__28846__auto__;
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
var args53471 = [];
var len__27054__auto___53474 = arguments.length;
var i__27055__auto___53475 = (0);
while(true){
if((i__27055__auto___53475 < len__27054__auto___53474)){
args53471.push((arguments[i__27055__auto___53475]));

var G__53476 = (i__27055__auto___53475 + (1));
i__27055__auto___53475 = G__53476;
continue;
} else {
}
break;
}

var G__53473 = args53471.length;
switch (G__53473) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53471.length)].join('')));

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
var args53478 = [];
var len__27054__auto___53481 = arguments.length;
var i__27055__auto___53482 = (0);
while(true){
if((i__27055__auto___53482 < len__27054__auto___53481)){
args53478.push((arguments[i__27055__auto___53482]));

var G__53483 = (i__27055__auto___53482 + (1));
i__27055__auto___53482 = G__53483;
continue;
} else {
}
break;
}

var G__53480 = args53478.length;
switch (G__53480) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53478.length)].join('')));

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
var args53485 = [];
var len__27054__auto___53538 = arguments.length;
var i__27055__auto___53539 = (0);
while(true){
if((i__27055__auto___53539 < len__27054__auto___53538)){
args53485.push((arguments[i__27055__auto___53539]));

var G__53540 = (i__27055__auto___53539 + (1));
i__27055__auto___53539 = G__53540;
continue;
} else {
}
break;
}

var G__53487 = args53485.length;
switch (G__53487) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53485.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28846__auto___53542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___53542,tc,fc){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___53542,tc,fc){
return (function (state_53513){
var state_val_53514 = (state_53513[(1)]);
if((state_val_53514 === (7))){
var inst_53509 = (state_53513[(2)]);
var state_53513__$1 = state_53513;
var statearr_53515_53543 = state_53513__$1;
(statearr_53515_53543[(2)] = inst_53509);

(statearr_53515_53543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53514 === (1))){
var state_53513__$1 = state_53513;
var statearr_53516_53544 = state_53513__$1;
(statearr_53516_53544[(2)] = null);

(statearr_53516_53544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53514 === (4))){
var inst_53490 = (state_53513[(7)]);
var inst_53490__$1 = (state_53513[(2)]);
var inst_53491 = (inst_53490__$1 == null);
var state_53513__$1 = (function (){var statearr_53517 = state_53513;
(statearr_53517[(7)] = inst_53490__$1);

return statearr_53517;
})();
if(cljs.core.truth_(inst_53491)){
var statearr_53518_53545 = state_53513__$1;
(statearr_53518_53545[(1)] = (5));

} else {
var statearr_53519_53546 = state_53513__$1;
(statearr_53519_53546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53514 === (13))){
var state_53513__$1 = state_53513;
var statearr_53520_53547 = state_53513__$1;
(statearr_53520_53547[(2)] = null);

(statearr_53520_53547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53514 === (6))){
var inst_53490 = (state_53513[(7)]);
var inst_53496 = p.call(null,inst_53490);
var state_53513__$1 = state_53513;
if(cljs.core.truth_(inst_53496)){
var statearr_53521_53548 = state_53513__$1;
(statearr_53521_53548[(1)] = (9));

} else {
var statearr_53522_53549 = state_53513__$1;
(statearr_53522_53549[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53514 === (3))){
var inst_53511 = (state_53513[(2)]);
var state_53513__$1 = state_53513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53513__$1,inst_53511);
} else {
if((state_val_53514 === (12))){
var state_53513__$1 = state_53513;
var statearr_53523_53550 = state_53513__$1;
(statearr_53523_53550[(2)] = null);

(statearr_53523_53550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53514 === (2))){
var state_53513__$1 = state_53513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53513__$1,(4),ch);
} else {
if((state_val_53514 === (11))){
var inst_53490 = (state_53513[(7)]);
var inst_53500 = (state_53513[(2)]);
var state_53513__$1 = state_53513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53513__$1,(8),inst_53500,inst_53490);
} else {
if((state_val_53514 === (9))){
var state_53513__$1 = state_53513;
var statearr_53524_53551 = state_53513__$1;
(statearr_53524_53551[(2)] = tc);

(statearr_53524_53551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53514 === (5))){
var inst_53493 = cljs.core.async.close_BANG_.call(null,tc);
var inst_53494 = cljs.core.async.close_BANG_.call(null,fc);
var state_53513__$1 = (function (){var statearr_53525 = state_53513;
(statearr_53525[(8)] = inst_53493);

return statearr_53525;
})();
var statearr_53526_53552 = state_53513__$1;
(statearr_53526_53552[(2)] = inst_53494);

(statearr_53526_53552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53514 === (14))){
var inst_53507 = (state_53513[(2)]);
var state_53513__$1 = state_53513;
var statearr_53527_53553 = state_53513__$1;
(statearr_53527_53553[(2)] = inst_53507);

(statearr_53527_53553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53514 === (10))){
var state_53513__$1 = state_53513;
var statearr_53528_53554 = state_53513__$1;
(statearr_53528_53554[(2)] = fc);

(statearr_53528_53554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53514 === (8))){
var inst_53502 = (state_53513[(2)]);
var state_53513__$1 = state_53513;
if(cljs.core.truth_(inst_53502)){
var statearr_53529_53555 = state_53513__$1;
(statearr_53529_53555[(1)] = (12));

} else {
var statearr_53530_53556 = state_53513__$1;
(statearr_53530_53556[(1)] = (13));

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
});})(c__28846__auto___53542,tc,fc))
;
return ((function (switch__28734__auto__,c__28846__auto___53542,tc,fc){
return (function() {
var cljs$core$async$state_machine__28735__auto__ = null;
var cljs$core$async$state_machine__28735__auto____0 = (function (){
var statearr_53534 = [null,null,null,null,null,null,null,null,null];
(statearr_53534[(0)] = cljs$core$async$state_machine__28735__auto__);

(statearr_53534[(1)] = (1));

return statearr_53534;
});
var cljs$core$async$state_machine__28735__auto____1 = (function (state_53513){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_53513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e53535){if((e53535 instanceof Object)){
var ex__28738__auto__ = e53535;
var statearr_53536_53557 = state_53513;
(statearr_53536_53557[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53558 = state_53513;
state_53513 = G__53558;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$state_machine__28735__auto__ = function(state_53513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28735__auto____1.call(this,state_53513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28735__auto____0;
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28735__auto____1;
return cljs$core$async$state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___53542,tc,fc))
})();
var state__28848__auto__ = (function (){var statearr_53537 = f__28847__auto__.call(null);
(statearr_53537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___53542);

return statearr_53537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___53542,tc,fc))
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
var c__28846__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto__){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto__){
return (function (state_53622){
var state_val_53623 = (state_53622[(1)]);
if((state_val_53623 === (7))){
var inst_53618 = (state_53622[(2)]);
var state_53622__$1 = state_53622;
var statearr_53624_53645 = state_53622__$1;
(statearr_53624_53645[(2)] = inst_53618);

(statearr_53624_53645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53623 === (1))){
var inst_53602 = init;
var state_53622__$1 = (function (){var statearr_53625 = state_53622;
(statearr_53625[(7)] = inst_53602);

return statearr_53625;
})();
var statearr_53626_53646 = state_53622__$1;
(statearr_53626_53646[(2)] = null);

(statearr_53626_53646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53623 === (4))){
var inst_53605 = (state_53622[(8)]);
var inst_53605__$1 = (state_53622[(2)]);
var inst_53606 = (inst_53605__$1 == null);
var state_53622__$1 = (function (){var statearr_53627 = state_53622;
(statearr_53627[(8)] = inst_53605__$1);

return statearr_53627;
})();
if(cljs.core.truth_(inst_53606)){
var statearr_53628_53647 = state_53622__$1;
(statearr_53628_53647[(1)] = (5));

} else {
var statearr_53629_53648 = state_53622__$1;
(statearr_53629_53648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53623 === (6))){
var inst_53609 = (state_53622[(9)]);
var inst_53605 = (state_53622[(8)]);
var inst_53602 = (state_53622[(7)]);
var inst_53609__$1 = f.call(null,inst_53602,inst_53605);
var inst_53610 = cljs.core.reduced_QMARK_.call(null,inst_53609__$1);
var state_53622__$1 = (function (){var statearr_53630 = state_53622;
(statearr_53630[(9)] = inst_53609__$1);

return statearr_53630;
})();
if(inst_53610){
var statearr_53631_53649 = state_53622__$1;
(statearr_53631_53649[(1)] = (8));

} else {
var statearr_53632_53650 = state_53622__$1;
(statearr_53632_53650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53623 === (3))){
var inst_53620 = (state_53622[(2)]);
var state_53622__$1 = state_53622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53622__$1,inst_53620);
} else {
if((state_val_53623 === (2))){
var state_53622__$1 = state_53622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53622__$1,(4),ch);
} else {
if((state_val_53623 === (9))){
var inst_53609 = (state_53622[(9)]);
var inst_53602 = inst_53609;
var state_53622__$1 = (function (){var statearr_53633 = state_53622;
(statearr_53633[(7)] = inst_53602);

return statearr_53633;
})();
var statearr_53634_53651 = state_53622__$1;
(statearr_53634_53651[(2)] = null);

(statearr_53634_53651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53623 === (5))){
var inst_53602 = (state_53622[(7)]);
var state_53622__$1 = state_53622;
var statearr_53635_53652 = state_53622__$1;
(statearr_53635_53652[(2)] = inst_53602);

(statearr_53635_53652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53623 === (10))){
var inst_53616 = (state_53622[(2)]);
var state_53622__$1 = state_53622;
var statearr_53636_53653 = state_53622__$1;
(statearr_53636_53653[(2)] = inst_53616);

(statearr_53636_53653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53623 === (8))){
var inst_53609 = (state_53622[(9)]);
var inst_53612 = cljs.core.deref.call(null,inst_53609);
var state_53622__$1 = state_53622;
var statearr_53637_53654 = state_53622__$1;
(statearr_53637_53654[(2)] = inst_53612);

(statearr_53637_53654[(1)] = (10));


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
});})(c__28846__auto__))
;
return ((function (switch__28734__auto__,c__28846__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28735__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28735__auto____0 = (function (){
var statearr_53641 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53641[(0)] = cljs$core$async$reduce_$_state_machine__28735__auto__);

(statearr_53641[(1)] = (1));

return statearr_53641;
});
var cljs$core$async$reduce_$_state_machine__28735__auto____1 = (function (state_53622){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_53622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e53642){if((e53642 instanceof Object)){
var ex__28738__auto__ = e53642;
var statearr_53643_53655 = state_53622;
(statearr_53643_53655[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53656 = state_53622;
state_53622 = G__53656;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28735__auto__ = function(state_53622){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28735__auto____1.call(this,state_53622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28735__auto____0;
cljs$core$async$reduce_$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28735__auto____1;
return cljs$core$async$reduce_$_state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto__))
})();
var state__28848__auto__ = (function (){var statearr_53644 = f__28847__auto__.call(null);
(statearr_53644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto__);

return statearr_53644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto__))
);

return c__28846__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28846__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto__,f__$1){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto__,f__$1){
return (function (state_53676){
var state_val_53677 = (state_53676[(1)]);
if((state_val_53677 === (1))){
var inst_53671 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_53676__$1 = state_53676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53676__$1,(2),inst_53671);
} else {
if((state_val_53677 === (2))){
var inst_53673 = (state_53676[(2)]);
var inst_53674 = f__$1.call(null,inst_53673);
var state_53676__$1 = state_53676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53676__$1,inst_53674);
} else {
return null;
}
}
});})(c__28846__auto__,f__$1))
;
return ((function (switch__28734__auto__,c__28846__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28735__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28735__auto____0 = (function (){
var statearr_53681 = [null,null,null,null,null,null,null];
(statearr_53681[(0)] = cljs$core$async$transduce_$_state_machine__28735__auto__);

(statearr_53681[(1)] = (1));

return statearr_53681;
});
var cljs$core$async$transduce_$_state_machine__28735__auto____1 = (function (state_53676){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_53676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e53682){if((e53682 instanceof Object)){
var ex__28738__auto__ = e53682;
var statearr_53683_53685 = state_53676;
(statearr_53683_53685[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53686 = state_53676;
state_53676 = G__53686;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28735__auto__ = function(state_53676){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28735__auto____1.call(this,state_53676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28735__auto____0;
cljs$core$async$transduce_$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28735__auto____1;
return cljs$core$async$transduce_$_state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto__,f__$1))
})();
var state__28848__auto__ = (function (){var statearr_53684 = f__28847__auto__.call(null);
(statearr_53684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto__);

return statearr_53684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto__,f__$1))
);

return c__28846__auto__;
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
var args53687 = [];
var len__27054__auto___53739 = arguments.length;
var i__27055__auto___53740 = (0);
while(true){
if((i__27055__auto___53740 < len__27054__auto___53739)){
args53687.push((arguments[i__27055__auto___53740]));

var G__53741 = (i__27055__auto___53740 + (1));
i__27055__auto___53740 = G__53741;
continue;
} else {
}
break;
}

var G__53689 = args53687.length;
switch (G__53689) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53687.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28846__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto__){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto__){
return (function (state_53714){
var state_val_53715 = (state_53714[(1)]);
if((state_val_53715 === (7))){
var inst_53696 = (state_53714[(2)]);
var state_53714__$1 = state_53714;
var statearr_53716_53743 = state_53714__$1;
(statearr_53716_53743[(2)] = inst_53696);

(statearr_53716_53743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53715 === (1))){
var inst_53690 = cljs.core.seq.call(null,coll);
var inst_53691 = inst_53690;
var state_53714__$1 = (function (){var statearr_53717 = state_53714;
(statearr_53717[(7)] = inst_53691);

return statearr_53717;
})();
var statearr_53718_53744 = state_53714__$1;
(statearr_53718_53744[(2)] = null);

(statearr_53718_53744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53715 === (4))){
var inst_53691 = (state_53714[(7)]);
var inst_53694 = cljs.core.first.call(null,inst_53691);
var state_53714__$1 = state_53714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53714__$1,(7),ch,inst_53694);
} else {
if((state_val_53715 === (13))){
var inst_53708 = (state_53714[(2)]);
var state_53714__$1 = state_53714;
var statearr_53719_53745 = state_53714__$1;
(statearr_53719_53745[(2)] = inst_53708);

(statearr_53719_53745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53715 === (6))){
var inst_53699 = (state_53714[(2)]);
var state_53714__$1 = state_53714;
if(cljs.core.truth_(inst_53699)){
var statearr_53720_53746 = state_53714__$1;
(statearr_53720_53746[(1)] = (8));

} else {
var statearr_53721_53747 = state_53714__$1;
(statearr_53721_53747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53715 === (3))){
var inst_53712 = (state_53714[(2)]);
var state_53714__$1 = state_53714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53714__$1,inst_53712);
} else {
if((state_val_53715 === (12))){
var state_53714__$1 = state_53714;
var statearr_53722_53748 = state_53714__$1;
(statearr_53722_53748[(2)] = null);

(statearr_53722_53748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53715 === (2))){
var inst_53691 = (state_53714[(7)]);
var state_53714__$1 = state_53714;
if(cljs.core.truth_(inst_53691)){
var statearr_53723_53749 = state_53714__$1;
(statearr_53723_53749[(1)] = (4));

} else {
var statearr_53724_53750 = state_53714__$1;
(statearr_53724_53750[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53715 === (11))){
var inst_53705 = cljs.core.async.close_BANG_.call(null,ch);
var state_53714__$1 = state_53714;
var statearr_53725_53751 = state_53714__$1;
(statearr_53725_53751[(2)] = inst_53705);

(statearr_53725_53751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53715 === (9))){
var state_53714__$1 = state_53714;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53726_53752 = state_53714__$1;
(statearr_53726_53752[(1)] = (11));

} else {
var statearr_53727_53753 = state_53714__$1;
(statearr_53727_53753[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53715 === (5))){
var inst_53691 = (state_53714[(7)]);
var state_53714__$1 = state_53714;
var statearr_53728_53754 = state_53714__$1;
(statearr_53728_53754[(2)] = inst_53691);

(statearr_53728_53754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53715 === (10))){
var inst_53710 = (state_53714[(2)]);
var state_53714__$1 = state_53714;
var statearr_53729_53755 = state_53714__$1;
(statearr_53729_53755[(2)] = inst_53710);

(statearr_53729_53755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53715 === (8))){
var inst_53691 = (state_53714[(7)]);
var inst_53701 = cljs.core.next.call(null,inst_53691);
var inst_53691__$1 = inst_53701;
var state_53714__$1 = (function (){var statearr_53730 = state_53714;
(statearr_53730[(7)] = inst_53691__$1);

return statearr_53730;
})();
var statearr_53731_53756 = state_53714__$1;
(statearr_53731_53756[(2)] = null);

(statearr_53731_53756[(1)] = (2));


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
});})(c__28846__auto__))
;
return ((function (switch__28734__auto__,c__28846__auto__){
return (function() {
var cljs$core$async$state_machine__28735__auto__ = null;
var cljs$core$async$state_machine__28735__auto____0 = (function (){
var statearr_53735 = [null,null,null,null,null,null,null,null];
(statearr_53735[(0)] = cljs$core$async$state_machine__28735__auto__);

(statearr_53735[(1)] = (1));

return statearr_53735;
});
var cljs$core$async$state_machine__28735__auto____1 = (function (state_53714){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_53714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e53736){if((e53736 instanceof Object)){
var ex__28738__auto__ = e53736;
var statearr_53737_53757 = state_53714;
(statearr_53737_53757[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53758 = state_53714;
state_53714 = G__53758;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$state_machine__28735__auto__ = function(state_53714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28735__auto____1.call(this,state_53714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28735__auto____0;
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28735__auto____1;
return cljs$core$async$state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto__))
})();
var state__28848__auto__ = (function (){var statearr_53738 = f__28847__auto__.call(null);
(statearr_53738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto__);

return statearr_53738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto__))
);

return c__28846__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async53984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53984 = (function (mult,ch,cs,meta53985){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta53985 = meta53985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_53986,meta53985__$1){
var self__ = this;
var _53986__$1 = this;
return (new cljs.core.async.t_cljs$core$async53984(self__.mult,self__.ch,self__.cs,meta53985__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_53986){
var self__ = this;
var _53986__$1 = this;
return self__.meta53985;
});})(cs))
;

cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async53984.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async53984.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta53985","meta53985",1104240726,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async53984.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53984";

cljs.core.async.t_cljs$core$async53984.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async53984");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async53984 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async53984(mult__$1,ch__$1,cs__$1,meta53985){
return (new cljs.core.async.t_cljs$core$async53984(mult__$1,ch__$1,cs__$1,meta53985));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async53984(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28846__auto___54209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___54209,cs,m,dchan,dctr,done){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___54209,cs,m,dchan,dctr,done){
return (function (state_54121){
var state_val_54122 = (state_54121[(1)]);
if((state_val_54122 === (7))){
var inst_54117 = (state_54121[(2)]);
var state_54121__$1 = state_54121;
var statearr_54123_54210 = state_54121__$1;
(statearr_54123_54210[(2)] = inst_54117);

(statearr_54123_54210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (20))){
var inst_54020 = (state_54121[(7)]);
var inst_54032 = cljs.core.first.call(null,inst_54020);
var inst_54033 = cljs.core.nth.call(null,inst_54032,(0),null);
var inst_54034 = cljs.core.nth.call(null,inst_54032,(1),null);
var state_54121__$1 = (function (){var statearr_54124 = state_54121;
(statearr_54124[(8)] = inst_54033);

return statearr_54124;
})();
if(cljs.core.truth_(inst_54034)){
var statearr_54125_54211 = state_54121__$1;
(statearr_54125_54211[(1)] = (22));

} else {
var statearr_54126_54212 = state_54121__$1;
(statearr_54126_54212[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (27))){
var inst_53989 = (state_54121[(9)]);
var inst_54062 = (state_54121[(10)]);
var inst_54064 = (state_54121[(11)]);
var inst_54069 = (state_54121[(12)]);
var inst_54069__$1 = cljs.core._nth.call(null,inst_54062,inst_54064);
var inst_54070 = cljs.core.async.put_BANG_.call(null,inst_54069__$1,inst_53989,done);
var state_54121__$1 = (function (){var statearr_54127 = state_54121;
(statearr_54127[(12)] = inst_54069__$1);

return statearr_54127;
})();
if(cljs.core.truth_(inst_54070)){
var statearr_54128_54213 = state_54121__$1;
(statearr_54128_54213[(1)] = (30));

} else {
var statearr_54129_54214 = state_54121__$1;
(statearr_54129_54214[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (1))){
var state_54121__$1 = state_54121;
var statearr_54130_54215 = state_54121__$1;
(statearr_54130_54215[(2)] = null);

(statearr_54130_54215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (24))){
var inst_54020 = (state_54121[(7)]);
var inst_54039 = (state_54121[(2)]);
var inst_54040 = cljs.core.next.call(null,inst_54020);
var inst_53998 = inst_54040;
var inst_53999 = null;
var inst_54000 = (0);
var inst_54001 = (0);
var state_54121__$1 = (function (){var statearr_54131 = state_54121;
(statearr_54131[(13)] = inst_53998);

(statearr_54131[(14)] = inst_53999);

(statearr_54131[(15)] = inst_54001);

(statearr_54131[(16)] = inst_54000);

(statearr_54131[(17)] = inst_54039);

return statearr_54131;
})();
var statearr_54132_54216 = state_54121__$1;
(statearr_54132_54216[(2)] = null);

(statearr_54132_54216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (39))){
var state_54121__$1 = state_54121;
var statearr_54136_54217 = state_54121__$1;
(statearr_54136_54217[(2)] = null);

(statearr_54136_54217[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (4))){
var inst_53989 = (state_54121[(9)]);
var inst_53989__$1 = (state_54121[(2)]);
var inst_53990 = (inst_53989__$1 == null);
var state_54121__$1 = (function (){var statearr_54137 = state_54121;
(statearr_54137[(9)] = inst_53989__$1);

return statearr_54137;
})();
if(cljs.core.truth_(inst_53990)){
var statearr_54138_54218 = state_54121__$1;
(statearr_54138_54218[(1)] = (5));

} else {
var statearr_54139_54219 = state_54121__$1;
(statearr_54139_54219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (15))){
var inst_53998 = (state_54121[(13)]);
var inst_53999 = (state_54121[(14)]);
var inst_54001 = (state_54121[(15)]);
var inst_54000 = (state_54121[(16)]);
var inst_54016 = (state_54121[(2)]);
var inst_54017 = (inst_54001 + (1));
var tmp54133 = inst_53998;
var tmp54134 = inst_53999;
var tmp54135 = inst_54000;
var inst_53998__$1 = tmp54133;
var inst_53999__$1 = tmp54134;
var inst_54000__$1 = tmp54135;
var inst_54001__$1 = inst_54017;
var state_54121__$1 = (function (){var statearr_54140 = state_54121;
(statearr_54140[(18)] = inst_54016);

(statearr_54140[(13)] = inst_53998__$1);

(statearr_54140[(14)] = inst_53999__$1);

(statearr_54140[(15)] = inst_54001__$1);

(statearr_54140[(16)] = inst_54000__$1);

return statearr_54140;
})();
var statearr_54141_54220 = state_54121__$1;
(statearr_54141_54220[(2)] = null);

(statearr_54141_54220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (21))){
var inst_54043 = (state_54121[(2)]);
var state_54121__$1 = state_54121;
var statearr_54145_54221 = state_54121__$1;
(statearr_54145_54221[(2)] = inst_54043);

(statearr_54145_54221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (31))){
var inst_54069 = (state_54121[(12)]);
var inst_54073 = done.call(null,null);
var inst_54074 = cljs.core.async.untap_STAR_.call(null,m,inst_54069);
var state_54121__$1 = (function (){var statearr_54146 = state_54121;
(statearr_54146[(19)] = inst_54073);

return statearr_54146;
})();
var statearr_54147_54222 = state_54121__$1;
(statearr_54147_54222[(2)] = inst_54074);

(statearr_54147_54222[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (32))){
var inst_54063 = (state_54121[(20)]);
var inst_54061 = (state_54121[(21)]);
var inst_54062 = (state_54121[(10)]);
var inst_54064 = (state_54121[(11)]);
var inst_54076 = (state_54121[(2)]);
var inst_54077 = (inst_54064 + (1));
var tmp54142 = inst_54063;
var tmp54143 = inst_54061;
var tmp54144 = inst_54062;
var inst_54061__$1 = tmp54143;
var inst_54062__$1 = tmp54144;
var inst_54063__$1 = tmp54142;
var inst_54064__$1 = inst_54077;
var state_54121__$1 = (function (){var statearr_54148 = state_54121;
(statearr_54148[(20)] = inst_54063__$1);

(statearr_54148[(21)] = inst_54061__$1);

(statearr_54148[(22)] = inst_54076);

(statearr_54148[(10)] = inst_54062__$1);

(statearr_54148[(11)] = inst_54064__$1);

return statearr_54148;
})();
var statearr_54149_54223 = state_54121__$1;
(statearr_54149_54223[(2)] = null);

(statearr_54149_54223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (40))){
var inst_54089 = (state_54121[(23)]);
var inst_54093 = done.call(null,null);
var inst_54094 = cljs.core.async.untap_STAR_.call(null,m,inst_54089);
var state_54121__$1 = (function (){var statearr_54150 = state_54121;
(statearr_54150[(24)] = inst_54093);

return statearr_54150;
})();
var statearr_54151_54224 = state_54121__$1;
(statearr_54151_54224[(2)] = inst_54094);

(statearr_54151_54224[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (33))){
var inst_54080 = (state_54121[(25)]);
var inst_54082 = cljs.core.chunked_seq_QMARK_.call(null,inst_54080);
var state_54121__$1 = state_54121;
if(inst_54082){
var statearr_54152_54225 = state_54121__$1;
(statearr_54152_54225[(1)] = (36));

} else {
var statearr_54153_54226 = state_54121__$1;
(statearr_54153_54226[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (13))){
var inst_54010 = (state_54121[(26)]);
var inst_54013 = cljs.core.async.close_BANG_.call(null,inst_54010);
var state_54121__$1 = state_54121;
var statearr_54154_54227 = state_54121__$1;
(statearr_54154_54227[(2)] = inst_54013);

(statearr_54154_54227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (22))){
var inst_54033 = (state_54121[(8)]);
var inst_54036 = cljs.core.async.close_BANG_.call(null,inst_54033);
var state_54121__$1 = state_54121;
var statearr_54155_54228 = state_54121__$1;
(statearr_54155_54228[(2)] = inst_54036);

(statearr_54155_54228[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (36))){
var inst_54080 = (state_54121[(25)]);
var inst_54084 = cljs.core.chunk_first.call(null,inst_54080);
var inst_54085 = cljs.core.chunk_rest.call(null,inst_54080);
var inst_54086 = cljs.core.count.call(null,inst_54084);
var inst_54061 = inst_54085;
var inst_54062 = inst_54084;
var inst_54063 = inst_54086;
var inst_54064 = (0);
var state_54121__$1 = (function (){var statearr_54156 = state_54121;
(statearr_54156[(20)] = inst_54063);

(statearr_54156[(21)] = inst_54061);

(statearr_54156[(10)] = inst_54062);

(statearr_54156[(11)] = inst_54064);

return statearr_54156;
})();
var statearr_54157_54229 = state_54121__$1;
(statearr_54157_54229[(2)] = null);

(statearr_54157_54229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (41))){
var inst_54080 = (state_54121[(25)]);
var inst_54096 = (state_54121[(2)]);
var inst_54097 = cljs.core.next.call(null,inst_54080);
var inst_54061 = inst_54097;
var inst_54062 = null;
var inst_54063 = (0);
var inst_54064 = (0);
var state_54121__$1 = (function (){var statearr_54158 = state_54121;
(statearr_54158[(20)] = inst_54063);

(statearr_54158[(21)] = inst_54061);

(statearr_54158[(27)] = inst_54096);

(statearr_54158[(10)] = inst_54062);

(statearr_54158[(11)] = inst_54064);

return statearr_54158;
})();
var statearr_54159_54230 = state_54121__$1;
(statearr_54159_54230[(2)] = null);

(statearr_54159_54230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (43))){
var state_54121__$1 = state_54121;
var statearr_54160_54231 = state_54121__$1;
(statearr_54160_54231[(2)] = null);

(statearr_54160_54231[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (29))){
var inst_54105 = (state_54121[(2)]);
var state_54121__$1 = state_54121;
var statearr_54161_54232 = state_54121__$1;
(statearr_54161_54232[(2)] = inst_54105);

(statearr_54161_54232[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (44))){
var inst_54114 = (state_54121[(2)]);
var state_54121__$1 = (function (){var statearr_54162 = state_54121;
(statearr_54162[(28)] = inst_54114);

return statearr_54162;
})();
var statearr_54163_54233 = state_54121__$1;
(statearr_54163_54233[(2)] = null);

(statearr_54163_54233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (6))){
var inst_54053 = (state_54121[(29)]);
var inst_54052 = cljs.core.deref.call(null,cs);
var inst_54053__$1 = cljs.core.keys.call(null,inst_54052);
var inst_54054 = cljs.core.count.call(null,inst_54053__$1);
var inst_54055 = cljs.core.reset_BANG_.call(null,dctr,inst_54054);
var inst_54060 = cljs.core.seq.call(null,inst_54053__$1);
var inst_54061 = inst_54060;
var inst_54062 = null;
var inst_54063 = (0);
var inst_54064 = (0);
var state_54121__$1 = (function (){var statearr_54164 = state_54121;
(statearr_54164[(20)] = inst_54063);

(statearr_54164[(21)] = inst_54061);

(statearr_54164[(10)] = inst_54062);

(statearr_54164[(11)] = inst_54064);

(statearr_54164[(29)] = inst_54053__$1);

(statearr_54164[(30)] = inst_54055);

return statearr_54164;
})();
var statearr_54165_54234 = state_54121__$1;
(statearr_54165_54234[(2)] = null);

(statearr_54165_54234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (28))){
var inst_54080 = (state_54121[(25)]);
var inst_54061 = (state_54121[(21)]);
var inst_54080__$1 = cljs.core.seq.call(null,inst_54061);
var state_54121__$1 = (function (){var statearr_54166 = state_54121;
(statearr_54166[(25)] = inst_54080__$1);

return statearr_54166;
})();
if(inst_54080__$1){
var statearr_54167_54235 = state_54121__$1;
(statearr_54167_54235[(1)] = (33));

} else {
var statearr_54168_54236 = state_54121__$1;
(statearr_54168_54236[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (25))){
var inst_54063 = (state_54121[(20)]);
var inst_54064 = (state_54121[(11)]);
var inst_54066 = (inst_54064 < inst_54063);
var inst_54067 = inst_54066;
var state_54121__$1 = state_54121;
if(cljs.core.truth_(inst_54067)){
var statearr_54169_54237 = state_54121__$1;
(statearr_54169_54237[(1)] = (27));

} else {
var statearr_54170_54238 = state_54121__$1;
(statearr_54170_54238[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (34))){
var state_54121__$1 = state_54121;
var statearr_54171_54239 = state_54121__$1;
(statearr_54171_54239[(2)] = null);

(statearr_54171_54239[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (17))){
var state_54121__$1 = state_54121;
var statearr_54172_54240 = state_54121__$1;
(statearr_54172_54240[(2)] = null);

(statearr_54172_54240[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (3))){
var inst_54119 = (state_54121[(2)]);
var state_54121__$1 = state_54121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54121__$1,inst_54119);
} else {
if((state_val_54122 === (12))){
var inst_54048 = (state_54121[(2)]);
var state_54121__$1 = state_54121;
var statearr_54173_54241 = state_54121__$1;
(statearr_54173_54241[(2)] = inst_54048);

(statearr_54173_54241[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (2))){
var state_54121__$1 = state_54121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54121__$1,(4),ch);
} else {
if((state_val_54122 === (23))){
var state_54121__$1 = state_54121;
var statearr_54174_54242 = state_54121__$1;
(statearr_54174_54242[(2)] = null);

(statearr_54174_54242[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (35))){
var inst_54103 = (state_54121[(2)]);
var state_54121__$1 = state_54121;
var statearr_54175_54243 = state_54121__$1;
(statearr_54175_54243[(2)] = inst_54103);

(statearr_54175_54243[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (19))){
var inst_54020 = (state_54121[(7)]);
var inst_54024 = cljs.core.chunk_first.call(null,inst_54020);
var inst_54025 = cljs.core.chunk_rest.call(null,inst_54020);
var inst_54026 = cljs.core.count.call(null,inst_54024);
var inst_53998 = inst_54025;
var inst_53999 = inst_54024;
var inst_54000 = inst_54026;
var inst_54001 = (0);
var state_54121__$1 = (function (){var statearr_54176 = state_54121;
(statearr_54176[(13)] = inst_53998);

(statearr_54176[(14)] = inst_53999);

(statearr_54176[(15)] = inst_54001);

(statearr_54176[(16)] = inst_54000);

return statearr_54176;
})();
var statearr_54177_54244 = state_54121__$1;
(statearr_54177_54244[(2)] = null);

(statearr_54177_54244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (11))){
var inst_53998 = (state_54121[(13)]);
var inst_54020 = (state_54121[(7)]);
var inst_54020__$1 = cljs.core.seq.call(null,inst_53998);
var state_54121__$1 = (function (){var statearr_54178 = state_54121;
(statearr_54178[(7)] = inst_54020__$1);

return statearr_54178;
})();
if(inst_54020__$1){
var statearr_54179_54245 = state_54121__$1;
(statearr_54179_54245[(1)] = (16));

} else {
var statearr_54180_54246 = state_54121__$1;
(statearr_54180_54246[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (9))){
var inst_54050 = (state_54121[(2)]);
var state_54121__$1 = state_54121;
var statearr_54181_54247 = state_54121__$1;
(statearr_54181_54247[(2)] = inst_54050);

(statearr_54181_54247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (5))){
var inst_53996 = cljs.core.deref.call(null,cs);
var inst_53997 = cljs.core.seq.call(null,inst_53996);
var inst_53998 = inst_53997;
var inst_53999 = null;
var inst_54000 = (0);
var inst_54001 = (0);
var state_54121__$1 = (function (){var statearr_54182 = state_54121;
(statearr_54182[(13)] = inst_53998);

(statearr_54182[(14)] = inst_53999);

(statearr_54182[(15)] = inst_54001);

(statearr_54182[(16)] = inst_54000);

return statearr_54182;
})();
var statearr_54183_54248 = state_54121__$1;
(statearr_54183_54248[(2)] = null);

(statearr_54183_54248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (14))){
var state_54121__$1 = state_54121;
var statearr_54184_54249 = state_54121__$1;
(statearr_54184_54249[(2)] = null);

(statearr_54184_54249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (45))){
var inst_54111 = (state_54121[(2)]);
var state_54121__$1 = state_54121;
var statearr_54185_54250 = state_54121__$1;
(statearr_54185_54250[(2)] = inst_54111);

(statearr_54185_54250[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (26))){
var inst_54053 = (state_54121[(29)]);
var inst_54107 = (state_54121[(2)]);
var inst_54108 = cljs.core.seq.call(null,inst_54053);
var state_54121__$1 = (function (){var statearr_54186 = state_54121;
(statearr_54186[(31)] = inst_54107);

return statearr_54186;
})();
if(inst_54108){
var statearr_54187_54251 = state_54121__$1;
(statearr_54187_54251[(1)] = (42));

} else {
var statearr_54188_54252 = state_54121__$1;
(statearr_54188_54252[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (16))){
var inst_54020 = (state_54121[(7)]);
var inst_54022 = cljs.core.chunked_seq_QMARK_.call(null,inst_54020);
var state_54121__$1 = state_54121;
if(inst_54022){
var statearr_54189_54253 = state_54121__$1;
(statearr_54189_54253[(1)] = (19));

} else {
var statearr_54190_54254 = state_54121__$1;
(statearr_54190_54254[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (38))){
var inst_54100 = (state_54121[(2)]);
var state_54121__$1 = state_54121;
var statearr_54191_54255 = state_54121__$1;
(statearr_54191_54255[(2)] = inst_54100);

(statearr_54191_54255[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (30))){
var state_54121__$1 = state_54121;
var statearr_54192_54256 = state_54121__$1;
(statearr_54192_54256[(2)] = null);

(statearr_54192_54256[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (10))){
var inst_53999 = (state_54121[(14)]);
var inst_54001 = (state_54121[(15)]);
var inst_54009 = cljs.core._nth.call(null,inst_53999,inst_54001);
var inst_54010 = cljs.core.nth.call(null,inst_54009,(0),null);
var inst_54011 = cljs.core.nth.call(null,inst_54009,(1),null);
var state_54121__$1 = (function (){var statearr_54193 = state_54121;
(statearr_54193[(26)] = inst_54010);

return statearr_54193;
})();
if(cljs.core.truth_(inst_54011)){
var statearr_54194_54257 = state_54121__$1;
(statearr_54194_54257[(1)] = (13));

} else {
var statearr_54195_54258 = state_54121__$1;
(statearr_54195_54258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (18))){
var inst_54046 = (state_54121[(2)]);
var state_54121__$1 = state_54121;
var statearr_54196_54259 = state_54121__$1;
(statearr_54196_54259[(2)] = inst_54046);

(statearr_54196_54259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (42))){
var state_54121__$1 = state_54121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54121__$1,(45),dchan);
} else {
if((state_val_54122 === (37))){
var inst_53989 = (state_54121[(9)]);
var inst_54080 = (state_54121[(25)]);
var inst_54089 = (state_54121[(23)]);
var inst_54089__$1 = cljs.core.first.call(null,inst_54080);
var inst_54090 = cljs.core.async.put_BANG_.call(null,inst_54089__$1,inst_53989,done);
var state_54121__$1 = (function (){var statearr_54197 = state_54121;
(statearr_54197[(23)] = inst_54089__$1);

return statearr_54197;
})();
if(cljs.core.truth_(inst_54090)){
var statearr_54198_54260 = state_54121__$1;
(statearr_54198_54260[(1)] = (39));

} else {
var statearr_54199_54261 = state_54121__$1;
(statearr_54199_54261[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54122 === (8))){
var inst_54001 = (state_54121[(15)]);
var inst_54000 = (state_54121[(16)]);
var inst_54003 = (inst_54001 < inst_54000);
var inst_54004 = inst_54003;
var state_54121__$1 = state_54121;
if(cljs.core.truth_(inst_54004)){
var statearr_54200_54262 = state_54121__$1;
(statearr_54200_54262[(1)] = (10));

} else {
var statearr_54201_54263 = state_54121__$1;
(statearr_54201_54263[(1)] = (11));

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
});})(c__28846__auto___54209,cs,m,dchan,dctr,done))
;
return ((function (switch__28734__auto__,c__28846__auto___54209,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28735__auto__ = null;
var cljs$core$async$mult_$_state_machine__28735__auto____0 = (function (){
var statearr_54205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54205[(0)] = cljs$core$async$mult_$_state_machine__28735__auto__);

(statearr_54205[(1)] = (1));

return statearr_54205;
});
var cljs$core$async$mult_$_state_machine__28735__auto____1 = (function (state_54121){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_54121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e54206){if((e54206 instanceof Object)){
var ex__28738__auto__ = e54206;
var statearr_54207_54264 = state_54121;
(statearr_54207_54264[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54265 = state_54121;
state_54121 = G__54265;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28735__auto__ = function(state_54121){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28735__auto____1.call(this,state_54121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28735__auto____0;
cljs$core$async$mult_$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28735__auto____1;
return cljs$core$async$mult_$_state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___54209,cs,m,dchan,dctr,done))
})();
var state__28848__auto__ = (function (){var statearr_54208 = f__28847__auto__.call(null);
(statearr_54208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___54209);

return statearr_54208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___54209,cs,m,dchan,dctr,done))
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
var args54266 = [];
var len__27054__auto___54269 = arguments.length;
var i__27055__auto___54270 = (0);
while(true){
if((i__27055__auto___54270 < len__27054__auto___54269)){
args54266.push((arguments[i__27055__auto___54270]));

var G__54271 = (i__27055__auto___54270 + (1));
i__27055__auto___54270 = G__54271;
continue;
} else {
}
break;
}

var G__54268 = args54266.length;
switch (G__54268) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54266.length)].join('')));

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
var len__27054__auto___54283 = arguments.length;
var i__27055__auto___54284 = (0);
while(true){
if((i__27055__auto___54284 < len__27054__auto___54283)){
args__27061__auto__.push((arguments[i__27055__auto___54284]));

var G__54285 = (i__27055__auto___54284 + (1));
i__27055__auto___54284 = G__54285;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__54277){
var map__54278 = p__54277;
var map__54278__$1 = ((((!((map__54278 == null)))?((((map__54278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54278):map__54278);
var opts = map__54278__$1;
var statearr_54280_54286 = state;
(statearr_54280_54286[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__54278,map__54278__$1,opts){
return (function (val){
var statearr_54281_54287 = state;
(statearr_54281_54287[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__54278,map__54278__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_54282_54288 = state;
(statearr_54282_54288[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq54273){
var G__54274 = cljs.core.first.call(null,seq54273);
var seq54273__$1 = cljs.core.next.call(null,seq54273);
var G__54275 = cljs.core.first.call(null,seq54273__$1);
var seq54273__$2 = cljs.core.next.call(null,seq54273__$1);
var G__54276 = cljs.core.first.call(null,seq54273__$2);
var seq54273__$3 = cljs.core.next.call(null,seq54273__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54274,G__54275,G__54276,seq54273__$3);
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
if(typeof cljs.core.async.t_cljs$core$async54454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54454 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54455){
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
this.meta54455 = meta54455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54456,meta54455__$1){
var self__ = this;
var _54456__$1 = this;
return (new cljs.core.async.t_cljs$core$async54454(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta54455__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54456){
var self__ = this;
var _54456__$1 = this;
return self__.meta54455;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54454.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async54454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54454.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async54454.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54454.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54454.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54454.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54454.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async54454.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta54455","meta54455",187485853,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54454";

cljs.core.async.t_cljs$core$async54454.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async54454");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async54454 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async54454(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54455){
return (new cljs.core.async.t_cljs$core$async54454(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54455));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async54454(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28846__auto___54619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___54619,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___54619,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_54556){
var state_val_54557 = (state_54556[(1)]);
if((state_val_54557 === (7))){
var inst_54472 = (state_54556[(2)]);
var state_54556__$1 = state_54556;
var statearr_54558_54620 = state_54556__$1;
(statearr_54558_54620[(2)] = inst_54472);

(statearr_54558_54620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (20))){
var inst_54484 = (state_54556[(7)]);
var state_54556__$1 = state_54556;
var statearr_54559_54621 = state_54556__$1;
(statearr_54559_54621[(2)] = inst_54484);

(statearr_54559_54621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (27))){
var state_54556__$1 = state_54556;
var statearr_54560_54622 = state_54556__$1;
(statearr_54560_54622[(2)] = null);

(statearr_54560_54622[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (1))){
var inst_54460 = (state_54556[(8)]);
var inst_54460__$1 = calc_state.call(null);
var inst_54462 = (inst_54460__$1 == null);
var inst_54463 = cljs.core.not.call(null,inst_54462);
var state_54556__$1 = (function (){var statearr_54561 = state_54556;
(statearr_54561[(8)] = inst_54460__$1);

return statearr_54561;
})();
if(inst_54463){
var statearr_54562_54623 = state_54556__$1;
(statearr_54562_54623[(1)] = (2));

} else {
var statearr_54563_54624 = state_54556__$1;
(statearr_54563_54624[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (24))){
var inst_54507 = (state_54556[(9)]);
var inst_54516 = (state_54556[(10)]);
var inst_54530 = (state_54556[(11)]);
var inst_54530__$1 = inst_54507.call(null,inst_54516);
var state_54556__$1 = (function (){var statearr_54564 = state_54556;
(statearr_54564[(11)] = inst_54530__$1);

return statearr_54564;
})();
if(cljs.core.truth_(inst_54530__$1)){
var statearr_54565_54625 = state_54556__$1;
(statearr_54565_54625[(1)] = (29));

} else {
var statearr_54566_54626 = state_54556__$1;
(statearr_54566_54626[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (4))){
var inst_54475 = (state_54556[(2)]);
var state_54556__$1 = state_54556;
if(cljs.core.truth_(inst_54475)){
var statearr_54567_54627 = state_54556__$1;
(statearr_54567_54627[(1)] = (8));

} else {
var statearr_54568_54628 = state_54556__$1;
(statearr_54568_54628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (15))){
var inst_54501 = (state_54556[(2)]);
var state_54556__$1 = state_54556;
if(cljs.core.truth_(inst_54501)){
var statearr_54569_54629 = state_54556__$1;
(statearr_54569_54629[(1)] = (19));

} else {
var statearr_54570_54630 = state_54556__$1;
(statearr_54570_54630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (21))){
var inst_54506 = (state_54556[(12)]);
var inst_54506__$1 = (state_54556[(2)]);
var inst_54507 = cljs.core.get.call(null,inst_54506__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54508 = cljs.core.get.call(null,inst_54506__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54509 = cljs.core.get.call(null,inst_54506__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_54556__$1 = (function (){var statearr_54571 = state_54556;
(statearr_54571[(9)] = inst_54507);

(statearr_54571[(13)] = inst_54508);

(statearr_54571[(12)] = inst_54506__$1);

return statearr_54571;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_54556__$1,(22),inst_54509);
} else {
if((state_val_54557 === (31))){
var inst_54538 = (state_54556[(2)]);
var state_54556__$1 = state_54556;
if(cljs.core.truth_(inst_54538)){
var statearr_54572_54631 = state_54556__$1;
(statearr_54572_54631[(1)] = (32));

} else {
var statearr_54573_54632 = state_54556__$1;
(statearr_54573_54632[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (32))){
var inst_54515 = (state_54556[(14)]);
var state_54556__$1 = state_54556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54556__$1,(35),out,inst_54515);
} else {
if((state_val_54557 === (33))){
var inst_54506 = (state_54556[(12)]);
var inst_54484 = inst_54506;
var state_54556__$1 = (function (){var statearr_54574 = state_54556;
(statearr_54574[(7)] = inst_54484);

return statearr_54574;
})();
var statearr_54575_54633 = state_54556__$1;
(statearr_54575_54633[(2)] = null);

(statearr_54575_54633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (13))){
var inst_54484 = (state_54556[(7)]);
var inst_54491 = inst_54484.cljs$lang$protocol_mask$partition0$;
var inst_54492 = (inst_54491 & (64));
var inst_54493 = inst_54484.cljs$core$ISeq$;
var inst_54494 = (inst_54492) || (inst_54493);
var state_54556__$1 = state_54556;
if(cljs.core.truth_(inst_54494)){
var statearr_54576_54634 = state_54556__$1;
(statearr_54576_54634[(1)] = (16));

} else {
var statearr_54577_54635 = state_54556__$1;
(statearr_54577_54635[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (22))){
var inst_54516 = (state_54556[(10)]);
var inst_54515 = (state_54556[(14)]);
var inst_54514 = (state_54556[(2)]);
var inst_54515__$1 = cljs.core.nth.call(null,inst_54514,(0),null);
var inst_54516__$1 = cljs.core.nth.call(null,inst_54514,(1),null);
var inst_54517 = (inst_54515__$1 == null);
var inst_54518 = cljs.core._EQ_.call(null,inst_54516__$1,change);
var inst_54519 = (inst_54517) || (inst_54518);
var state_54556__$1 = (function (){var statearr_54578 = state_54556;
(statearr_54578[(10)] = inst_54516__$1);

(statearr_54578[(14)] = inst_54515__$1);

return statearr_54578;
})();
if(cljs.core.truth_(inst_54519)){
var statearr_54579_54636 = state_54556__$1;
(statearr_54579_54636[(1)] = (23));

} else {
var statearr_54580_54637 = state_54556__$1;
(statearr_54580_54637[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (36))){
var inst_54506 = (state_54556[(12)]);
var inst_54484 = inst_54506;
var state_54556__$1 = (function (){var statearr_54581 = state_54556;
(statearr_54581[(7)] = inst_54484);

return statearr_54581;
})();
var statearr_54582_54638 = state_54556__$1;
(statearr_54582_54638[(2)] = null);

(statearr_54582_54638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (29))){
var inst_54530 = (state_54556[(11)]);
var state_54556__$1 = state_54556;
var statearr_54583_54639 = state_54556__$1;
(statearr_54583_54639[(2)] = inst_54530);

(statearr_54583_54639[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (6))){
var state_54556__$1 = state_54556;
var statearr_54584_54640 = state_54556__$1;
(statearr_54584_54640[(2)] = false);

(statearr_54584_54640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (28))){
var inst_54526 = (state_54556[(2)]);
var inst_54527 = calc_state.call(null);
var inst_54484 = inst_54527;
var state_54556__$1 = (function (){var statearr_54585 = state_54556;
(statearr_54585[(7)] = inst_54484);

(statearr_54585[(15)] = inst_54526);

return statearr_54585;
})();
var statearr_54586_54641 = state_54556__$1;
(statearr_54586_54641[(2)] = null);

(statearr_54586_54641[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (25))){
var inst_54552 = (state_54556[(2)]);
var state_54556__$1 = state_54556;
var statearr_54587_54642 = state_54556__$1;
(statearr_54587_54642[(2)] = inst_54552);

(statearr_54587_54642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (34))){
var inst_54550 = (state_54556[(2)]);
var state_54556__$1 = state_54556;
var statearr_54588_54643 = state_54556__$1;
(statearr_54588_54643[(2)] = inst_54550);

(statearr_54588_54643[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (17))){
var state_54556__$1 = state_54556;
var statearr_54589_54644 = state_54556__$1;
(statearr_54589_54644[(2)] = false);

(statearr_54589_54644[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (3))){
var state_54556__$1 = state_54556;
var statearr_54590_54645 = state_54556__$1;
(statearr_54590_54645[(2)] = false);

(statearr_54590_54645[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (12))){
var inst_54554 = (state_54556[(2)]);
var state_54556__$1 = state_54556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54556__$1,inst_54554);
} else {
if((state_val_54557 === (2))){
var inst_54460 = (state_54556[(8)]);
var inst_54465 = inst_54460.cljs$lang$protocol_mask$partition0$;
var inst_54466 = (inst_54465 & (64));
var inst_54467 = inst_54460.cljs$core$ISeq$;
var inst_54468 = (inst_54466) || (inst_54467);
var state_54556__$1 = state_54556;
if(cljs.core.truth_(inst_54468)){
var statearr_54591_54646 = state_54556__$1;
(statearr_54591_54646[(1)] = (5));

} else {
var statearr_54592_54647 = state_54556__$1;
(statearr_54592_54647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (23))){
var inst_54515 = (state_54556[(14)]);
var inst_54521 = (inst_54515 == null);
var state_54556__$1 = state_54556;
if(cljs.core.truth_(inst_54521)){
var statearr_54593_54648 = state_54556__$1;
(statearr_54593_54648[(1)] = (26));

} else {
var statearr_54594_54649 = state_54556__$1;
(statearr_54594_54649[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (35))){
var inst_54541 = (state_54556[(2)]);
var state_54556__$1 = state_54556;
if(cljs.core.truth_(inst_54541)){
var statearr_54595_54650 = state_54556__$1;
(statearr_54595_54650[(1)] = (36));

} else {
var statearr_54596_54651 = state_54556__$1;
(statearr_54596_54651[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (19))){
var inst_54484 = (state_54556[(7)]);
var inst_54503 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54484);
var state_54556__$1 = state_54556;
var statearr_54597_54652 = state_54556__$1;
(statearr_54597_54652[(2)] = inst_54503);

(statearr_54597_54652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (11))){
var inst_54484 = (state_54556[(7)]);
var inst_54488 = (inst_54484 == null);
var inst_54489 = cljs.core.not.call(null,inst_54488);
var state_54556__$1 = state_54556;
if(inst_54489){
var statearr_54598_54653 = state_54556__$1;
(statearr_54598_54653[(1)] = (13));

} else {
var statearr_54599_54654 = state_54556__$1;
(statearr_54599_54654[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (9))){
var inst_54460 = (state_54556[(8)]);
var state_54556__$1 = state_54556;
var statearr_54600_54655 = state_54556__$1;
(statearr_54600_54655[(2)] = inst_54460);

(statearr_54600_54655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (5))){
var state_54556__$1 = state_54556;
var statearr_54601_54656 = state_54556__$1;
(statearr_54601_54656[(2)] = true);

(statearr_54601_54656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (14))){
var state_54556__$1 = state_54556;
var statearr_54602_54657 = state_54556__$1;
(statearr_54602_54657[(2)] = false);

(statearr_54602_54657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (26))){
var inst_54516 = (state_54556[(10)]);
var inst_54523 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_54516);
var state_54556__$1 = state_54556;
var statearr_54603_54658 = state_54556__$1;
(statearr_54603_54658[(2)] = inst_54523);

(statearr_54603_54658[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (16))){
var state_54556__$1 = state_54556;
var statearr_54604_54659 = state_54556__$1;
(statearr_54604_54659[(2)] = true);

(statearr_54604_54659[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (38))){
var inst_54546 = (state_54556[(2)]);
var state_54556__$1 = state_54556;
var statearr_54605_54660 = state_54556__$1;
(statearr_54605_54660[(2)] = inst_54546);

(statearr_54605_54660[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (30))){
var inst_54507 = (state_54556[(9)]);
var inst_54516 = (state_54556[(10)]);
var inst_54508 = (state_54556[(13)]);
var inst_54533 = cljs.core.empty_QMARK_.call(null,inst_54507);
var inst_54534 = inst_54508.call(null,inst_54516);
var inst_54535 = cljs.core.not.call(null,inst_54534);
var inst_54536 = (inst_54533) && (inst_54535);
var state_54556__$1 = state_54556;
var statearr_54606_54661 = state_54556__$1;
(statearr_54606_54661[(2)] = inst_54536);

(statearr_54606_54661[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (10))){
var inst_54460 = (state_54556[(8)]);
var inst_54480 = (state_54556[(2)]);
var inst_54481 = cljs.core.get.call(null,inst_54480,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54482 = cljs.core.get.call(null,inst_54480,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54483 = cljs.core.get.call(null,inst_54480,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_54484 = inst_54460;
var state_54556__$1 = (function (){var statearr_54607 = state_54556;
(statearr_54607[(7)] = inst_54484);

(statearr_54607[(16)] = inst_54482);

(statearr_54607[(17)] = inst_54483);

(statearr_54607[(18)] = inst_54481);

return statearr_54607;
})();
var statearr_54608_54662 = state_54556__$1;
(statearr_54608_54662[(2)] = null);

(statearr_54608_54662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (18))){
var inst_54498 = (state_54556[(2)]);
var state_54556__$1 = state_54556;
var statearr_54609_54663 = state_54556__$1;
(statearr_54609_54663[(2)] = inst_54498);

(statearr_54609_54663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (37))){
var state_54556__$1 = state_54556;
var statearr_54610_54664 = state_54556__$1;
(statearr_54610_54664[(2)] = null);

(statearr_54610_54664[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54557 === (8))){
var inst_54460 = (state_54556[(8)]);
var inst_54477 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54460);
var state_54556__$1 = state_54556;
var statearr_54611_54665 = state_54556__$1;
(statearr_54611_54665[(2)] = inst_54477);

(statearr_54611_54665[(1)] = (10));


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
});})(c__28846__auto___54619,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28734__auto__,c__28846__auto___54619,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28735__auto__ = null;
var cljs$core$async$mix_$_state_machine__28735__auto____0 = (function (){
var statearr_54615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54615[(0)] = cljs$core$async$mix_$_state_machine__28735__auto__);

(statearr_54615[(1)] = (1));

return statearr_54615;
});
var cljs$core$async$mix_$_state_machine__28735__auto____1 = (function (state_54556){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_54556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e54616){if((e54616 instanceof Object)){
var ex__28738__auto__ = e54616;
var statearr_54617_54666 = state_54556;
(statearr_54617_54666[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54667 = state_54556;
state_54556 = G__54667;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28735__auto__ = function(state_54556){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28735__auto____1.call(this,state_54556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28735__auto____0;
cljs$core$async$mix_$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28735__auto____1;
return cljs$core$async$mix_$_state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___54619,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28848__auto__ = (function (){var statearr_54618 = f__28847__auto__.call(null);
(statearr_54618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___54619);

return statearr_54618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___54619,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args54668 = [];
var len__27054__auto___54671 = arguments.length;
var i__27055__auto___54672 = (0);
while(true){
if((i__27055__auto___54672 < len__27054__auto___54671)){
args54668.push((arguments[i__27055__auto___54672]));

var G__54673 = (i__27055__auto___54672 + (1));
i__27055__auto___54672 = G__54673;
continue;
} else {
}
break;
}

var G__54670 = args54668.length;
switch (G__54670) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54668.length)].join('')));

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
var args54676 = [];
var len__27054__auto___54801 = arguments.length;
var i__27055__auto___54802 = (0);
while(true){
if((i__27055__auto___54802 < len__27054__auto___54801)){
args54676.push((arguments[i__27055__auto___54802]));

var G__54803 = (i__27055__auto___54802 + (1));
i__27055__auto___54802 = G__54803;
continue;
} else {
}
break;
}

var G__54678 = args54676.length;
switch (G__54678) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54676.length)].join('')));

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
return (function (p1__54675_SHARP_){
if(cljs.core.truth_(p1__54675_SHARP_.call(null,topic))){
return p1__54675_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__54675_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async54679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54679 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta54680){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta54680 = meta54680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_54681,meta54680__$1){
var self__ = this;
var _54681__$1 = this;
return (new cljs.core.async.t_cljs$core$async54679(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta54680__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_54681){
var self__ = this;
var _54681__$1 = this;
return self__.meta54680;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54679.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async54679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54679.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async54679.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54679.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async54679.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54679.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54679.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta54680","meta54680",1299325740,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54679";

cljs.core.async.t_cljs$core$async54679.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async54679");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async54679 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async54679(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54680){
return (new cljs.core.async.t_cljs$core$async54679(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54680));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async54679(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28846__auto___54805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___54805,mults,ensure_mult,p){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___54805,mults,ensure_mult,p){
return (function (state_54753){
var state_val_54754 = (state_54753[(1)]);
if((state_val_54754 === (7))){
var inst_54749 = (state_54753[(2)]);
var state_54753__$1 = state_54753;
var statearr_54755_54806 = state_54753__$1;
(statearr_54755_54806[(2)] = inst_54749);

(statearr_54755_54806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (20))){
var state_54753__$1 = state_54753;
var statearr_54756_54807 = state_54753__$1;
(statearr_54756_54807[(2)] = null);

(statearr_54756_54807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (1))){
var state_54753__$1 = state_54753;
var statearr_54757_54808 = state_54753__$1;
(statearr_54757_54808[(2)] = null);

(statearr_54757_54808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (24))){
var inst_54732 = (state_54753[(7)]);
var inst_54741 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_54732);
var state_54753__$1 = state_54753;
var statearr_54758_54809 = state_54753__$1;
(statearr_54758_54809[(2)] = inst_54741);

(statearr_54758_54809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (4))){
var inst_54684 = (state_54753[(8)]);
var inst_54684__$1 = (state_54753[(2)]);
var inst_54685 = (inst_54684__$1 == null);
var state_54753__$1 = (function (){var statearr_54759 = state_54753;
(statearr_54759[(8)] = inst_54684__$1);

return statearr_54759;
})();
if(cljs.core.truth_(inst_54685)){
var statearr_54760_54810 = state_54753__$1;
(statearr_54760_54810[(1)] = (5));

} else {
var statearr_54761_54811 = state_54753__$1;
(statearr_54761_54811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (15))){
var inst_54726 = (state_54753[(2)]);
var state_54753__$1 = state_54753;
var statearr_54762_54812 = state_54753__$1;
(statearr_54762_54812[(2)] = inst_54726);

(statearr_54762_54812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (21))){
var inst_54746 = (state_54753[(2)]);
var state_54753__$1 = (function (){var statearr_54763 = state_54753;
(statearr_54763[(9)] = inst_54746);

return statearr_54763;
})();
var statearr_54764_54813 = state_54753__$1;
(statearr_54764_54813[(2)] = null);

(statearr_54764_54813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (13))){
var inst_54708 = (state_54753[(10)]);
var inst_54710 = cljs.core.chunked_seq_QMARK_.call(null,inst_54708);
var state_54753__$1 = state_54753;
if(inst_54710){
var statearr_54765_54814 = state_54753__$1;
(statearr_54765_54814[(1)] = (16));

} else {
var statearr_54766_54815 = state_54753__$1;
(statearr_54766_54815[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (22))){
var inst_54738 = (state_54753[(2)]);
var state_54753__$1 = state_54753;
if(cljs.core.truth_(inst_54738)){
var statearr_54767_54816 = state_54753__$1;
(statearr_54767_54816[(1)] = (23));

} else {
var statearr_54768_54817 = state_54753__$1;
(statearr_54768_54817[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (6))){
var inst_54684 = (state_54753[(8)]);
var inst_54734 = (state_54753[(11)]);
var inst_54732 = (state_54753[(7)]);
var inst_54732__$1 = topic_fn.call(null,inst_54684);
var inst_54733 = cljs.core.deref.call(null,mults);
var inst_54734__$1 = cljs.core.get.call(null,inst_54733,inst_54732__$1);
var state_54753__$1 = (function (){var statearr_54769 = state_54753;
(statearr_54769[(11)] = inst_54734__$1);

(statearr_54769[(7)] = inst_54732__$1);

return statearr_54769;
})();
if(cljs.core.truth_(inst_54734__$1)){
var statearr_54770_54818 = state_54753__$1;
(statearr_54770_54818[(1)] = (19));

} else {
var statearr_54771_54819 = state_54753__$1;
(statearr_54771_54819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (25))){
var inst_54743 = (state_54753[(2)]);
var state_54753__$1 = state_54753;
var statearr_54772_54820 = state_54753__$1;
(statearr_54772_54820[(2)] = inst_54743);

(statearr_54772_54820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (17))){
var inst_54708 = (state_54753[(10)]);
var inst_54717 = cljs.core.first.call(null,inst_54708);
var inst_54718 = cljs.core.async.muxch_STAR_.call(null,inst_54717);
var inst_54719 = cljs.core.async.close_BANG_.call(null,inst_54718);
var inst_54720 = cljs.core.next.call(null,inst_54708);
var inst_54694 = inst_54720;
var inst_54695 = null;
var inst_54696 = (0);
var inst_54697 = (0);
var state_54753__$1 = (function (){var statearr_54773 = state_54753;
(statearr_54773[(12)] = inst_54694);

(statearr_54773[(13)] = inst_54695);

(statearr_54773[(14)] = inst_54697);

(statearr_54773[(15)] = inst_54719);

(statearr_54773[(16)] = inst_54696);

return statearr_54773;
})();
var statearr_54774_54821 = state_54753__$1;
(statearr_54774_54821[(2)] = null);

(statearr_54774_54821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (3))){
var inst_54751 = (state_54753[(2)]);
var state_54753__$1 = state_54753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54753__$1,inst_54751);
} else {
if((state_val_54754 === (12))){
var inst_54728 = (state_54753[(2)]);
var state_54753__$1 = state_54753;
var statearr_54775_54822 = state_54753__$1;
(statearr_54775_54822[(2)] = inst_54728);

(statearr_54775_54822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (2))){
var state_54753__$1 = state_54753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54753__$1,(4),ch);
} else {
if((state_val_54754 === (23))){
var state_54753__$1 = state_54753;
var statearr_54776_54823 = state_54753__$1;
(statearr_54776_54823[(2)] = null);

(statearr_54776_54823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (19))){
var inst_54684 = (state_54753[(8)]);
var inst_54734 = (state_54753[(11)]);
var inst_54736 = cljs.core.async.muxch_STAR_.call(null,inst_54734);
var state_54753__$1 = state_54753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54753__$1,(22),inst_54736,inst_54684);
} else {
if((state_val_54754 === (11))){
var inst_54694 = (state_54753[(12)]);
var inst_54708 = (state_54753[(10)]);
var inst_54708__$1 = cljs.core.seq.call(null,inst_54694);
var state_54753__$1 = (function (){var statearr_54777 = state_54753;
(statearr_54777[(10)] = inst_54708__$1);

return statearr_54777;
})();
if(inst_54708__$1){
var statearr_54778_54824 = state_54753__$1;
(statearr_54778_54824[(1)] = (13));

} else {
var statearr_54779_54825 = state_54753__$1;
(statearr_54779_54825[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (9))){
var inst_54730 = (state_54753[(2)]);
var state_54753__$1 = state_54753;
var statearr_54780_54826 = state_54753__$1;
(statearr_54780_54826[(2)] = inst_54730);

(statearr_54780_54826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (5))){
var inst_54691 = cljs.core.deref.call(null,mults);
var inst_54692 = cljs.core.vals.call(null,inst_54691);
var inst_54693 = cljs.core.seq.call(null,inst_54692);
var inst_54694 = inst_54693;
var inst_54695 = null;
var inst_54696 = (0);
var inst_54697 = (0);
var state_54753__$1 = (function (){var statearr_54781 = state_54753;
(statearr_54781[(12)] = inst_54694);

(statearr_54781[(13)] = inst_54695);

(statearr_54781[(14)] = inst_54697);

(statearr_54781[(16)] = inst_54696);

return statearr_54781;
})();
var statearr_54782_54827 = state_54753__$1;
(statearr_54782_54827[(2)] = null);

(statearr_54782_54827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (14))){
var state_54753__$1 = state_54753;
var statearr_54786_54828 = state_54753__$1;
(statearr_54786_54828[(2)] = null);

(statearr_54786_54828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (16))){
var inst_54708 = (state_54753[(10)]);
var inst_54712 = cljs.core.chunk_first.call(null,inst_54708);
var inst_54713 = cljs.core.chunk_rest.call(null,inst_54708);
var inst_54714 = cljs.core.count.call(null,inst_54712);
var inst_54694 = inst_54713;
var inst_54695 = inst_54712;
var inst_54696 = inst_54714;
var inst_54697 = (0);
var state_54753__$1 = (function (){var statearr_54787 = state_54753;
(statearr_54787[(12)] = inst_54694);

(statearr_54787[(13)] = inst_54695);

(statearr_54787[(14)] = inst_54697);

(statearr_54787[(16)] = inst_54696);

return statearr_54787;
})();
var statearr_54788_54829 = state_54753__$1;
(statearr_54788_54829[(2)] = null);

(statearr_54788_54829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (10))){
var inst_54694 = (state_54753[(12)]);
var inst_54695 = (state_54753[(13)]);
var inst_54697 = (state_54753[(14)]);
var inst_54696 = (state_54753[(16)]);
var inst_54702 = cljs.core._nth.call(null,inst_54695,inst_54697);
var inst_54703 = cljs.core.async.muxch_STAR_.call(null,inst_54702);
var inst_54704 = cljs.core.async.close_BANG_.call(null,inst_54703);
var inst_54705 = (inst_54697 + (1));
var tmp54783 = inst_54694;
var tmp54784 = inst_54695;
var tmp54785 = inst_54696;
var inst_54694__$1 = tmp54783;
var inst_54695__$1 = tmp54784;
var inst_54696__$1 = tmp54785;
var inst_54697__$1 = inst_54705;
var state_54753__$1 = (function (){var statearr_54789 = state_54753;
(statearr_54789[(12)] = inst_54694__$1);

(statearr_54789[(17)] = inst_54704);

(statearr_54789[(13)] = inst_54695__$1);

(statearr_54789[(14)] = inst_54697__$1);

(statearr_54789[(16)] = inst_54696__$1);

return statearr_54789;
})();
var statearr_54790_54830 = state_54753__$1;
(statearr_54790_54830[(2)] = null);

(statearr_54790_54830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (18))){
var inst_54723 = (state_54753[(2)]);
var state_54753__$1 = state_54753;
var statearr_54791_54831 = state_54753__$1;
(statearr_54791_54831[(2)] = inst_54723);

(statearr_54791_54831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (8))){
var inst_54697 = (state_54753[(14)]);
var inst_54696 = (state_54753[(16)]);
var inst_54699 = (inst_54697 < inst_54696);
var inst_54700 = inst_54699;
var state_54753__$1 = state_54753;
if(cljs.core.truth_(inst_54700)){
var statearr_54792_54832 = state_54753__$1;
(statearr_54792_54832[(1)] = (10));

} else {
var statearr_54793_54833 = state_54753__$1;
(statearr_54793_54833[(1)] = (11));

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
});})(c__28846__auto___54805,mults,ensure_mult,p))
;
return ((function (switch__28734__auto__,c__28846__auto___54805,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28735__auto__ = null;
var cljs$core$async$state_machine__28735__auto____0 = (function (){
var statearr_54797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54797[(0)] = cljs$core$async$state_machine__28735__auto__);

(statearr_54797[(1)] = (1));

return statearr_54797;
});
var cljs$core$async$state_machine__28735__auto____1 = (function (state_54753){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_54753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e54798){if((e54798 instanceof Object)){
var ex__28738__auto__ = e54798;
var statearr_54799_54834 = state_54753;
(statearr_54799_54834[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54835 = state_54753;
state_54753 = G__54835;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$state_machine__28735__auto__ = function(state_54753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28735__auto____1.call(this,state_54753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28735__auto____0;
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28735__auto____1;
return cljs$core$async$state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___54805,mults,ensure_mult,p))
})();
var state__28848__auto__ = (function (){var statearr_54800 = f__28847__auto__.call(null);
(statearr_54800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___54805);

return statearr_54800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___54805,mults,ensure_mult,p))
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
var args54836 = [];
var len__27054__auto___54839 = arguments.length;
var i__27055__auto___54840 = (0);
while(true){
if((i__27055__auto___54840 < len__27054__auto___54839)){
args54836.push((arguments[i__27055__auto___54840]));

var G__54841 = (i__27055__auto___54840 + (1));
i__27055__auto___54840 = G__54841;
continue;
} else {
}
break;
}

var G__54838 = args54836.length;
switch (G__54838) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54836.length)].join('')));

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
var args54843 = [];
var len__27054__auto___54846 = arguments.length;
var i__27055__auto___54847 = (0);
while(true){
if((i__27055__auto___54847 < len__27054__auto___54846)){
args54843.push((arguments[i__27055__auto___54847]));

var G__54848 = (i__27055__auto___54847 + (1));
i__27055__auto___54847 = G__54848;
continue;
} else {
}
break;
}

var G__54845 = args54843.length;
switch (G__54845) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54843.length)].join('')));

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
var args54850 = [];
var len__27054__auto___54921 = arguments.length;
var i__27055__auto___54922 = (0);
while(true){
if((i__27055__auto___54922 < len__27054__auto___54921)){
args54850.push((arguments[i__27055__auto___54922]));

var G__54923 = (i__27055__auto___54922 + (1));
i__27055__auto___54922 = G__54923;
continue;
} else {
}
break;
}

var G__54852 = args54850.length;
switch (G__54852) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54850.length)].join('')));

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
var c__28846__auto___54925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___54925,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___54925,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_54891){
var state_val_54892 = (state_54891[(1)]);
if((state_val_54892 === (7))){
var state_54891__$1 = state_54891;
var statearr_54893_54926 = state_54891__$1;
(statearr_54893_54926[(2)] = null);

(statearr_54893_54926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (1))){
var state_54891__$1 = state_54891;
var statearr_54894_54927 = state_54891__$1;
(statearr_54894_54927[(2)] = null);

(statearr_54894_54927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (4))){
var inst_54855 = (state_54891[(7)]);
var inst_54857 = (inst_54855 < cnt);
var state_54891__$1 = state_54891;
if(cljs.core.truth_(inst_54857)){
var statearr_54895_54928 = state_54891__$1;
(statearr_54895_54928[(1)] = (6));

} else {
var statearr_54896_54929 = state_54891__$1;
(statearr_54896_54929[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (15))){
var inst_54887 = (state_54891[(2)]);
var state_54891__$1 = state_54891;
var statearr_54897_54930 = state_54891__$1;
(statearr_54897_54930[(2)] = inst_54887);

(statearr_54897_54930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (13))){
var inst_54880 = cljs.core.async.close_BANG_.call(null,out);
var state_54891__$1 = state_54891;
var statearr_54898_54931 = state_54891__$1;
(statearr_54898_54931[(2)] = inst_54880);

(statearr_54898_54931[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (6))){
var state_54891__$1 = state_54891;
var statearr_54899_54932 = state_54891__$1;
(statearr_54899_54932[(2)] = null);

(statearr_54899_54932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (3))){
var inst_54889 = (state_54891[(2)]);
var state_54891__$1 = state_54891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54891__$1,inst_54889);
} else {
if((state_val_54892 === (12))){
var inst_54877 = (state_54891[(8)]);
var inst_54877__$1 = (state_54891[(2)]);
var inst_54878 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_54877__$1);
var state_54891__$1 = (function (){var statearr_54900 = state_54891;
(statearr_54900[(8)] = inst_54877__$1);

return statearr_54900;
})();
if(cljs.core.truth_(inst_54878)){
var statearr_54901_54933 = state_54891__$1;
(statearr_54901_54933[(1)] = (13));

} else {
var statearr_54902_54934 = state_54891__$1;
(statearr_54902_54934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (2))){
var inst_54854 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_54855 = (0);
var state_54891__$1 = (function (){var statearr_54903 = state_54891;
(statearr_54903[(7)] = inst_54855);

(statearr_54903[(9)] = inst_54854);

return statearr_54903;
})();
var statearr_54904_54935 = state_54891__$1;
(statearr_54904_54935[(2)] = null);

(statearr_54904_54935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (11))){
var inst_54855 = (state_54891[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54891,(10),Object,null,(9));
var inst_54864 = chs__$1.call(null,inst_54855);
var inst_54865 = done.call(null,inst_54855);
var inst_54866 = cljs.core.async.take_BANG_.call(null,inst_54864,inst_54865);
var state_54891__$1 = state_54891;
var statearr_54905_54936 = state_54891__$1;
(statearr_54905_54936[(2)] = inst_54866);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54891__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (9))){
var inst_54855 = (state_54891[(7)]);
var inst_54868 = (state_54891[(2)]);
var inst_54869 = (inst_54855 + (1));
var inst_54855__$1 = inst_54869;
var state_54891__$1 = (function (){var statearr_54906 = state_54891;
(statearr_54906[(7)] = inst_54855__$1);

(statearr_54906[(10)] = inst_54868);

return statearr_54906;
})();
var statearr_54907_54937 = state_54891__$1;
(statearr_54907_54937[(2)] = null);

(statearr_54907_54937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (5))){
var inst_54875 = (state_54891[(2)]);
var state_54891__$1 = (function (){var statearr_54908 = state_54891;
(statearr_54908[(11)] = inst_54875);

return statearr_54908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54891__$1,(12),dchan);
} else {
if((state_val_54892 === (14))){
var inst_54877 = (state_54891[(8)]);
var inst_54882 = cljs.core.apply.call(null,f,inst_54877);
var state_54891__$1 = state_54891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54891__$1,(16),out,inst_54882);
} else {
if((state_val_54892 === (16))){
var inst_54884 = (state_54891[(2)]);
var state_54891__$1 = (function (){var statearr_54909 = state_54891;
(statearr_54909[(12)] = inst_54884);

return statearr_54909;
})();
var statearr_54910_54938 = state_54891__$1;
(statearr_54910_54938[(2)] = null);

(statearr_54910_54938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (10))){
var inst_54859 = (state_54891[(2)]);
var inst_54860 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_54891__$1 = (function (){var statearr_54911 = state_54891;
(statearr_54911[(13)] = inst_54859);

return statearr_54911;
})();
var statearr_54912_54939 = state_54891__$1;
(statearr_54912_54939[(2)] = inst_54860);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54891__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (8))){
var inst_54873 = (state_54891[(2)]);
var state_54891__$1 = state_54891;
var statearr_54913_54940 = state_54891__$1;
(statearr_54913_54940[(2)] = inst_54873);

(statearr_54913_54940[(1)] = (5));


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
});})(c__28846__auto___54925,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28734__auto__,c__28846__auto___54925,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28735__auto__ = null;
var cljs$core$async$state_machine__28735__auto____0 = (function (){
var statearr_54917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54917[(0)] = cljs$core$async$state_machine__28735__auto__);

(statearr_54917[(1)] = (1));

return statearr_54917;
});
var cljs$core$async$state_machine__28735__auto____1 = (function (state_54891){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_54891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e54918){if((e54918 instanceof Object)){
var ex__28738__auto__ = e54918;
var statearr_54919_54941 = state_54891;
(statearr_54919_54941[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54942 = state_54891;
state_54891 = G__54942;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$state_machine__28735__auto__ = function(state_54891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28735__auto____1.call(this,state_54891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28735__auto____0;
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28735__auto____1;
return cljs$core$async$state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___54925,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28848__auto__ = (function (){var statearr_54920 = f__28847__auto__.call(null);
(statearr_54920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___54925);

return statearr_54920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___54925,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args54944 = [];
var len__27054__auto___55002 = arguments.length;
var i__27055__auto___55003 = (0);
while(true){
if((i__27055__auto___55003 < len__27054__auto___55002)){
args54944.push((arguments[i__27055__auto___55003]));

var G__55004 = (i__27055__auto___55003 + (1));
i__27055__auto___55003 = G__55004;
continue;
} else {
}
break;
}

var G__54946 = args54944.length;
switch (G__54946) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54944.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28846__auto___55006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___55006,out){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___55006,out){
return (function (state_54978){
var state_val_54979 = (state_54978[(1)]);
if((state_val_54979 === (7))){
var inst_54958 = (state_54978[(7)]);
var inst_54957 = (state_54978[(8)]);
var inst_54957__$1 = (state_54978[(2)]);
var inst_54958__$1 = cljs.core.nth.call(null,inst_54957__$1,(0),null);
var inst_54959 = cljs.core.nth.call(null,inst_54957__$1,(1),null);
var inst_54960 = (inst_54958__$1 == null);
var state_54978__$1 = (function (){var statearr_54980 = state_54978;
(statearr_54980[(9)] = inst_54959);

(statearr_54980[(7)] = inst_54958__$1);

(statearr_54980[(8)] = inst_54957__$1);

return statearr_54980;
})();
if(cljs.core.truth_(inst_54960)){
var statearr_54981_55007 = state_54978__$1;
(statearr_54981_55007[(1)] = (8));

} else {
var statearr_54982_55008 = state_54978__$1;
(statearr_54982_55008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54979 === (1))){
var inst_54947 = cljs.core.vec.call(null,chs);
var inst_54948 = inst_54947;
var state_54978__$1 = (function (){var statearr_54983 = state_54978;
(statearr_54983[(10)] = inst_54948);

return statearr_54983;
})();
var statearr_54984_55009 = state_54978__$1;
(statearr_54984_55009[(2)] = null);

(statearr_54984_55009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54979 === (4))){
var inst_54948 = (state_54978[(10)]);
var state_54978__$1 = state_54978;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54978__$1,(7),inst_54948);
} else {
if((state_val_54979 === (6))){
var inst_54974 = (state_54978[(2)]);
var state_54978__$1 = state_54978;
var statearr_54985_55010 = state_54978__$1;
(statearr_54985_55010[(2)] = inst_54974);

(statearr_54985_55010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54979 === (3))){
var inst_54976 = (state_54978[(2)]);
var state_54978__$1 = state_54978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54978__$1,inst_54976);
} else {
if((state_val_54979 === (2))){
var inst_54948 = (state_54978[(10)]);
var inst_54950 = cljs.core.count.call(null,inst_54948);
var inst_54951 = (inst_54950 > (0));
var state_54978__$1 = state_54978;
if(cljs.core.truth_(inst_54951)){
var statearr_54987_55011 = state_54978__$1;
(statearr_54987_55011[(1)] = (4));

} else {
var statearr_54988_55012 = state_54978__$1;
(statearr_54988_55012[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54979 === (11))){
var inst_54948 = (state_54978[(10)]);
var inst_54967 = (state_54978[(2)]);
var tmp54986 = inst_54948;
var inst_54948__$1 = tmp54986;
var state_54978__$1 = (function (){var statearr_54989 = state_54978;
(statearr_54989[(10)] = inst_54948__$1);

(statearr_54989[(11)] = inst_54967);

return statearr_54989;
})();
var statearr_54990_55013 = state_54978__$1;
(statearr_54990_55013[(2)] = null);

(statearr_54990_55013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54979 === (9))){
var inst_54958 = (state_54978[(7)]);
var state_54978__$1 = state_54978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54978__$1,(11),out,inst_54958);
} else {
if((state_val_54979 === (5))){
var inst_54972 = cljs.core.async.close_BANG_.call(null,out);
var state_54978__$1 = state_54978;
var statearr_54991_55014 = state_54978__$1;
(statearr_54991_55014[(2)] = inst_54972);

(statearr_54991_55014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54979 === (10))){
var inst_54970 = (state_54978[(2)]);
var state_54978__$1 = state_54978;
var statearr_54992_55015 = state_54978__$1;
(statearr_54992_55015[(2)] = inst_54970);

(statearr_54992_55015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54979 === (8))){
var inst_54959 = (state_54978[(9)]);
var inst_54948 = (state_54978[(10)]);
var inst_54958 = (state_54978[(7)]);
var inst_54957 = (state_54978[(8)]);
var inst_54962 = (function (){var cs = inst_54948;
var vec__54953 = inst_54957;
var v = inst_54958;
var c = inst_54959;
return ((function (cs,vec__54953,v,c,inst_54959,inst_54948,inst_54958,inst_54957,state_val_54979,c__28846__auto___55006,out){
return (function (p1__54943_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__54943_SHARP_);
});
;})(cs,vec__54953,v,c,inst_54959,inst_54948,inst_54958,inst_54957,state_val_54979,c__28846__auto___55006,out))
})();
var inst_54963 = cljs.core.filterv.call(null,inst_54962,inst_54948);
var inst_54948__$1 = inst_54963;
var state_54978__$1 = (function (){var statearr_54993 = state_54978;
(statearr_54993[(10)] = inst_54948__$1);

return statearr_54993;
})();
var statearr_54994_55016 = state_54978__$1;
(statearr_54994_55016[(2)] = null);

(statearr_54994_55016[(1)] = (2));


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
});})(c__28846__auto___55006,out))
;
return ((function (switch__28734__auto__,c__28846__auto___55006,out){
return (function() {
var cljs$core$async$state_machine__28735__auto__ = null;
var cljs$core$async$state_machine__28735__auto____0 = (function (){
var statearr_54998 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54998[(0)] = cljs$core$async$state_machine__28735__auto__);

(statearr_54998[(1)] = (1));

return statearr_54998;
});
var cljs$core$async$state_machine__28735__auto____1 = (function (state_54978){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_54978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e54999){if((e54999 instanceof Object)){
var ex__28738__auto__ = e54999;
var statearr_55000_55017 = state_54978;
(statearr_55000_55017[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55018 = state_54978;
state_54978 = G__55018;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$state_machine__28735__auto__ = function(state_54978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28735__auto____1.call(this,state_54978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28735__auto____0;
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28735__auto____1;
return cljs$core$async$state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___55006,out))
})();
var state__28848__auto__ = (function (){var statearr_55001 = f__28847__auto__.call(null);
(statearr_55001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___55006);

return statearr_55001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___55006,out))
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
var args55019 = [];
var len__27054__auto___55068 = arguments.length;
var i__27055__auto___55069 = (0);
while(true){
if((i__27055__auto___55069 < len__27054__auto___55068)){
args55019.push((arguments[i__27055__auto___55069]));

var G__55070 = (i__27055__auto___55069 + (1));
i__27055__auto___55069 = G__55070;
continue;
} else {
}
break;
}

var G__55021 = args55019.length;
switch (G__55021) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55019.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28846__auto___55072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___55072,out){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___55072,out){
return (function (state_55045){
var state_val_55046 = (state_55045[(1)]);
if((state_val_55046 === (7))){
var inst_55027 = (state_55045[(7)]);
var inst_55027__$1 = (state_55045[(2)]);
var inst_55028 = (inst_55027__$1 == null);
var inst_55029 = cljs.core.not.call(null,inst_55028);
var state_55045__$1 = (function (){var statearr_55047 = state_55045;
(statearr_55047[(7)] = inst_55027__$1);

return statearr_55047;
})();
if(inst_55029){
var statearr_55048_55073 = state_55045__$1;
(statearr_55048_55073[(1)] = (8));

} else {
var statearr_55049_55074 = state_55045__$1;
(statearr_55049_55074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (1))){
var inst_55022 = (0);
var state_55045__$1 = (function (){var statearr_55050 = state_55045;
(statearr_55050[(8)] = inst_55022);

return statearr_55050;
})();
var statearr_55051_55075 = state_55045__$1;
(statearr_55051_55075[(2)] = null);

(statearr_55051_55075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (4))){
var state_55045__$1 = state_55045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55045__$1,(7),ch);
} else {
if((state_val_55046 === (6))){
var inst_55040 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55052_55076 = state_55045__$1;
(statearr_55052_55076[(2)] = inst_55040);

(statearr_55052_55076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (3))){
var inst_55042 = (state_55045[(2)]);
var inst_55043 = cljs.core.async.close_BANG_.call(null,out);
var state_55045__$1 = (function (){var statearr_55053 = state_55045;
(statearr_55053[(9)] = inst_55042);

return statearr_55053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55045__$1,inst_55043);
} else {
if((state_val_55046 === (2))){
var inst_55022 = (state_55045[(8)]);
var inst_55024 = (inst_55022 < n);
var state_55045__$1 = state_55045;
if(cljs.core.truth_(inst_55024)){
var statearr_55054_55077 = state_55045__$1;
(statearr_55054_55077[(1)] = (4));

} else {
var statearr_55055_55078 = state_55045__$1;
(statearr_55055_55078[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (11))){
var inst_55022 = (state_55045[(8)]);
var inst_55032 = (state_55045[(2)]);
var inst_55033 = (inst_55022 + (1));
var inst_55022__$1 = inst_55033;
var state_55045__$1 = (function (){var statearr_55056 = state_55045;
(statearr_55056[(8)] = inst_55022__$1);

(statearr_55056[(10)] = inst_55032);

return statearr_55056;
})();
var statearr_55057_55079 = state_55045__$1;
(statearr_55057_55079[(2)] = null);

(statearr_55057_55079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (9))){
var state_55045__$1 = state_55045;
var statearr_55058_55080 = state_55045__$1;
(statearr_55058_55080[(2)] = null);

(statearr_55058_55080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (5))){
var state_55045__$1 = state_55045;
var statearr_55059_55081 = state_55045__$1;
(statearr_55059_55081[(2)] = null);

(statearr_55059_55081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (10))){
var inst_55037 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55060_55082 = state_55045__$1;
(statearr_55060_55082[(2)] = inst_55037);

(statearr_55060_55082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (8))){
var inst_55027 = (state_55045[(7)]);
var state_55045__$1 = state_55045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55045__$1,(11),out,inst_55027);
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
});})(c__28846__auto___55072,out))
;
return ((function (switch__28734__auto__,c__28846__auto___55072,out){
return (function() {
var cljs$core$async$state_machine__28735__auto__ = null;
var cljs$core$async$state_machine__28735__auto____0 = (function (){
var statearr_55064 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55064[(0)] = cljs$core$async$state_machine__28735__auto__);

(statearr_55064[(1)] = (1));

return statearr_55064;
});
var cljs$core$async$state_machine__28735__auto____1 = (function (state_55045){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_55045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e55065){if((e55065 instanceof Object)){
var ex__28738__auto__ = e55065;
var statearr_55066_55083 = state_55045;
(statearr_55066_55083[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55084 = state_55045;
state_55045 = G__55084;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$state_machine__28735__auto__ = function(state_55045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28735__auto____1.call(this,state_55045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28735__auto____0;
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28735__auto____1;
return cljs$core$async$state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___55072,out))
})();
var state__28848__auto__ = (function (){var statearr_55067 = f__28847__auto__.call(null);
(statearr_55067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___55072);

return statearr_55067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___55072,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async55092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55092 = (function (map_LT_,f,ch,meta55093){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta55093 = meta55093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55094,meta55093__$1){
var self__ = this;
var _55094__$1 = this;
return (new cljs.core.async.t_cljs$core$async55092(self__.map_LT_,self__.f,self__.ch,meta55093__$1));
});

cljs.core.async.t_cljs$core$async55092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55094){
var self__ = this;
var _55094__$1 = this;
return self__.meta55093;
});

cljs.core.async.t_cljs$core$async55092.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async55092.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55092.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55092.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async55092.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async55095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55095 = (function (map_LT_,f,ch,meta55093,_,fn1,meta55096){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta55093 = meta55093;
this._ = _;
this.fn1 = fn1;
this.meta55096 = meta55096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_55097,meta55096__$1){
var self__ = this;
var _55097__$1 = this;
return (new cljs.core.async.t_cljs$core$async55095(self__.map_LT_,self__.f,self__.ch,self__.meta55093,self__._,self__.fn1,meta55096__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async55095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_55097){
var self__ = this;
var _55097__$1 = this;
return self__.meta55096;
});})(___$1))
;

cljs.core.async.t_cljs$core$async55095.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async55095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async55095.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async55095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__55085_SHARP_){
return f1.call(null,(((p1__55085_SHARP_ == null))?null:self__.f.call(null,p1__55085_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async55095.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55093","meta55093",-1490665036,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55092","cljs.core.async/t_cljs$core$async55092",-889776705,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55096","meta55096",621683141,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async55095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55095";

cljs.core.async.t_cljs$core$async55095.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async55095");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async55095 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55095(map_LT___$1,f__$1,ch__$1,meta55093__$1,___$2,fn1__$1,meta55096){
return (new cljs.core.async.t_cljs$core$async55095(map_LT___$1,f__$1,ch__$1,meta55093__$1,___$2,fn1__$1,meta55096));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async55095(self__.map_LT_,self__.f,self__.ch,self__.meta55093,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async55092.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async55092.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async55092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55093","meta55093",-1490665036,null)], null);
});

cljs.core.async.t_cljs$core$async55092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55092";

cljs.core.async.t_cljs$core$async55092.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async55092");
});

cljs.core.async.__GT_t_cljs$core$async55092 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55092(map_LT___$1,f__$1,ch__$1,meta55093){
return (new cljs.core.async.t_cljs$core$async55092(map_LT___$1,f__$1,ch__$1,meta55093));
});

}

return (new cljs.core.async.t_cljs$core$async55092(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async55101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55101 = (function (map_GT_,f,ch,meta55102){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta55102 = meta55102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55103,meta55102__$1){
var self__ = this;
var _55103__$1 = this;
return (new cljs.core.async.t_cljs$core$async55101(self__.map_GT_,self__.f,self__.ch,meta55102__$1));
});

cljs.core.async.t_cljs$core$async55101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55103){
var self__ = this;
var _55103__$1 = this;
return self__.meta55102;
});

cljs.core.async.t_cljs$core$async55101.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async55101.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55101.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async55101.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async55101.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async55101.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async55101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55102","meta55102",-1676158011,null)], null);
});

cljs.core.async.t_cljs$core$async55101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55101";

cljs.core.async.t_cljs$core$async55101.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async55101");
});

cljs.core.async.__GT_t_cljs$core$async55101 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async55101(map_GT___$1,f__$1,ch__$1,meta55102){
return (new cljs.core.async.t_cljs$core$async55101(map_GT___$1,f__$1,ch__$1,meta55102));
});

}

return (new cljs.core.async.t_cljs$core$async55101(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async55107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55107 = (function (filter_GT_,p,ch,meta55108){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta55108 = meta55108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55109,meta55108__$1){
var self__ = this;
var _55109__$1 = this;
return (new cljs.core.async.t_cljs$core$async55107(self__.filter_GT_,self__.p,self__.ch,meta55108__$1));
});

cljs.core.async.t_cljs$core$async55107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55109){
var self__ = this;
var _55109__$1 = this;
return self__.meta55108;
});

cljs.core.async.t_cljs$core$async55107.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async55107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55107.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55107.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async55107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async55107.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async55107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async55107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55108","meta55108",-60697390,null)], null);
});

cljs.core.async.t_cljs$core$async55107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55107";

cljs.core.async.t_cljs$core$async55107.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async55107");
});

cljs.core.async.__GT_t_cljs$core$async55107 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async55107(filter_GT___$1,p__$1,ch__$1,meta55108){
return (new cljs.core.async.t_cljs$core$async55107(filter_GT___$1,p__$1,ch__$1,meta55108));
});

}

return (new cljs.core.async.t_cljs$core$async55107(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args55110 = [];
var len__27054__auto___55154 = arguments.length;
var i__27055__auto___55155 = (0);
while(true){
if((i__27055__auto___55155 < len__27054__auto___55154)){
args55110.push((arguments[i__27055__auto___55155]));

var G__55156 = (i__27055__auto___55155 + (1));
i__27055__auto___55155 = G__55156;
continue;
} else {
}
break;
}

var G__55112 = args55110.length;
switch (G__55112) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55110.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28846__auto___55158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___55158,out){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___55158,out){
return (function (state_55133){
var state_val_55134 = (state_55133[(1)]);
if((state_val_55134 === (7))){
var inst_55129 = (state_55133[(2)]);
var state_55133__$1 = state_55133;
var statearr_55135_55159 = state_55133__$1;
(statearr_55135_55159[(2)] = inst_55129);

(statearr_55135_55159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55134 === (1))){
var state_55133__$1 = state_55133;
var statearr_55136_55160 = state_55133__$1;
(statearr_55136_55160[(2)] = null);

(statearr_55136_55160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55134 === (4))){
var inst_55115 = (state_55133[(7)]);
var inst_55115__$1 = (state_55133[(2)]);
var inst_55116 = (inst_55115__$1 == null);
var state_55133__$1 = (function (){var statearr_55137 = state_55133;
(statearr_55137[(7)] = inst_55115__$1);

return statearr_55137;
})();
if(cljs.core.truth_(inst_55116)){
var statearr_55138_55161 = state_55133__$1;
(statearr_55138_55161[(1)] = (5));

} else {
var statearr_55139_55162 = state_55133__$1;
(statearr_55139_55162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55134 === (6))){
var inst_55115 = (state_55133[(7)]);
var inst_55120 = p.call(null,inst_55115);
var state_55133__$1 = state_55133;
if(cljs.core.truth_(inst_55120)){
var statearr_55140_55163 = state_55133__$1;
(statearr_55140_55163[(1)] = (8));

} else {
var statearr_55141_55164 = state_55133__$1;
(statearr_55141_55164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55134 === (3))){
var inst_55131 = (state_55133[(2)]);
var state_55133__$1 = state_55133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55133__$1,inst_55131);
} else {
if((state_val_55134 === (2))){
var state_55133__$1 = state_55133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55133__$1,(4),ch);
} else {
if((state_val_55134 === (11))){
var inst_55123 = (state_55133[(2)]);
var state_55133__$1 = state_55133;
var statearr_55142_55165 = state_55133__$1;
(statearr_55142_55165[(2)] = inst_55123);

(statearr_55142_55165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55134 === (9))){
var state_55133__$1 = state_55133;
var statearr_55143_55166 = state_55133__$1;
(statearr_55143_55166[(2)] = null);

(statearr_55143_55166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55134 === (5))){
var inst_55118 = cljs.core.async.close_BANG_.call(null,out);
var state_55133__$1 = state_55133;
var statearr_55144_55167 = state_55133__$1;
(statearr_55144_55167[(2)] = inst_55118);

(statearr_55144_55167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55134 === (10))){
var inst_55126 = (state_55133[(2)]);
var state_55133__$1 = (function (){var statearr_55145 = state_55133;
(statearr_55145[(8)] = inst_55126);

return statearr_55145;
})();
var statearr_55146_55168 = state_55133__$1;
(statearr_55146_55168[(2)] = null);

(statearr_55146_55168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55134 === (8))){
var inst_55115 = (state_55133[(7)]);
var state_55133__$1 = state_55133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55133__$1,(11),out,inst_55115);
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
});})(c__28846__auto___55158,out))
;
return ((function (switch__28734__auto__,c__28846__auto___55158,out){
return (function() {
var cljs$core$async$state_machine__28735__auto__ = null;
var cljs$core$async$state_machine__28735__auto____0 = (function (){
var statearr_55150 = [null,null,null,null,null,null,null,null,null];
(statearr_55150[(0)] = cljs$core$async$state_machine__28735__auto__);

(statearr_55150[(1)] = (1));

return statearr_55150;
});
var cljs$core$async$state_machine__28735__auto____1 = (function (state_55133){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_55133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e55151){if((e55151 instanceof Object)){
var ex__28738__auto__ = e55151;
var statearr_55152_55169 = state_55133;
(statearr_55152_55169[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55170 = state_55133;
state_55133 = G__55170;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$state_machine__28735__auto__ = function(state_55133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28735__auto____1.call(this,state_55133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28735__auto____0;
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28735__auto____1;
return cljs$core$async$state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___55158,out))
})();
var state__28848__auto__ = (function (){var statearr_55153 = f__28847__auto__.call(null);
(statearr_55153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___55158);

return statearr_55153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___55158,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args55171 = [];
var len__27054__auto___55174 = arguments.length;
var i__27055__auto___55175 = (0);
while(true){
if((i__27055__auto___55175 < len__27054__auto___55174)){
args55171.push((arguments[i__27055__auto___55175]));

var G__55176 = (i__27055__auto___55175 + (1));
i__27055__auto___55175 = G__55176;
continue;
} else {
}
break;
}

var G__55173 = args55171.length;
switch (G__55173) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55171.length)].join('')));

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
var c__28846__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto__){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto__){
return (function (state_55343){
var state_val_55344 = (state_55343[(1)]);
if((state_val_55344 === (7))){
var inst_55339 = (state_55343[(2)]);
var state_55343__$1 = state_55343;
var statearr_55345_55386 = state_55343__$1;
(statearr_55345_55386[(2)] = inst_55339);

(statearr_55345_55386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (20))){
var inst_55309 = (state_55343[(7)]);
var inst_55320 = (state_55343[(2)]);
var inst_55321 = cljs.core.next.call(null,inst_55309);
var inst_55295 = inst_55321;
var inst_55296 = null;
var inst_55297 = (0);
var inst_55298 = (0);
var state_55343__$1 = (function (){var statearr_55346 = state_55343;
(statearr_55346[(8)] = inst_55297);

(statearr_55346[(9)] = inst_55296);

(statearr_55346[(10)] = inst_55295);

(statearr_55346[(11)] = inst_55298);

(statearr_55346[(12)] = inst_55320);

return statearr_55346;
})();
var statearr_55347_55387 = state_55343__$1;
(statearr_55347_55387[(2)] = null);

(statearr_55347_55387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (1))){
var state_55343__$1 = state_55343;
var statearr_55348_55388 = state_55343__$1;
(statearr_55348_55388[(2)] = null);

(statearr_55348_55388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (4))){
var inst_55284 = (state_55343[(13)]);
var inst_55284__$1 = (state_55343[(2)]);
var inst_55285 = (inst_55284__$1 == null);
var state_55343__$1 = (function (){var statearr_55349 = state_55343;
(statearr_55349[(13)] = inst_55284__$1);

return statearr_55349;
})();
if(cljs.core.truth_(inst_55285)){
var statearr_55350_55389 = state_55343__$1;
(statearr_55350_55389[(1)] = (5));

} else {
var statearr_55351_55390 = state_55343__$1;
(statearr_55351_55390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (15))){
var state_55343__$1 = state_55343;
var statearr_55355_55391 = state_55343__$1;
(statearr_55355_55391[(2)] = null);

(statearr_55355_55391[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (21))){
var state_55343__$1 = state_55343;
var statearr_55356_55392 = state_55343__$1;
(statearr_55356_55392[(2)] = null);

(statearr_55356_55392[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (13))){
var inst_55297 = (state_55343[(8)]);
var inst_55296 = (state_55343[(9)]);
var inst_55295 = (state_55343[(10)]);
var inst_55298 = (state_55343[(11)]);
var inst_55305 = (state_55343[(2)]);
var inst_55306 = (inst_55298 + (1));
var tmp55352 = inst_55297;
var tmp55353 = inst_55296;
var tmp55354 = inst_55295;
var inst_55295__$1 = tmp55354;
var inst_55296__$1 = tmp55353;
var inst_55297__$1 = tmp55352;
var inst_55298__$1 = inst_55306;
var state_55343__$1 = (function (){var statearr_55357 = state_55343;
(statearr_55357[(8)] = inst_55297__$1);

(statearr_55357[(9)] = inst_55296__$1);

(statearr_55357[(10)] = inst_55295__$1);

(statearr_55357[(11)] = inst_55298__$1);

(statearr_55357[(14)] = inst_55305);

return statearr_55357;
})();
var statearr_55358_55393 = state_55343__$1;
(statearr_55358_55393[(2)] = null);

(statearr_55358_55393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (22))){
var state_55343__$1 = state_55343;
var statearr_55359_55394 = state_55343__$1;
(statearr_55359_55394[(2)] = null);

(statearr_55359_55394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (6))){
var inst_55284 = (state_55343[(13)]);
var inst_55293 = f.call(null,inst_55284);
var inst_55294 = cljs.core.seq.call(null,inst_55293);
var inst_55295 = inst_55294;
var inst_55296 = null;
var inst_55297 = (0);
var inst_55298 = (0);
var state_55343__$1 = (function (){var statearr_55360 = state_55343;
(statearr_55360[(8)] = inst_55297);

(statearr_55360[(9)] = inst_55296);

(statearr_55360[(10)] = inst_55295);

(statearr_55360[(11)] = inst_55298);

return statearr_55360;
})();
var statearr_55361_55395 = state_55343__$1;
(statearr_55361_55395[(2)] = null);

(statearr_55361_55395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (17))){
var inst_55309 = (state_55343[(7)]);
var inst_55313 = cljs.core.chunk_first.call(null,inst_55309);
var inst_55314 = cljs.core.chunk_rest.call(null,inst_55309);
var inst_55315 = cljs.core.count.call(null,inst_55313);
var inst_55295 = inst_55314;
var inst_55296 = inst_55313;
var inst_55297 = inst_55315;
var inst_55298 = (0);
var state_55343__$1 = (function (){var statearr_55362 = state_55343;
(statearr_55362[(8)] = inst_55297);

(statearr_55362[(9)] = inst_55296);

(statearr_55362[(10)] = inst_55295);

(statearr_55362[(11)] = inst_55298);

return statearr_55362;
})();
var statearr_55363_55396 = state_55343__$1;
(statearr_55363_55396[(2)] = null);

(statearr_55363_55396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (3))){
var inst_55341 = (state_55343[(2)]);
var state_55343__$1 = state_55343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55343__$1,inst_55341);
} else {
if((state_val_55344 === (12))){
var inst_55329 = (state_55343[(2)]);
var state_55343__$1 = state_55343;
var statearr_55364_55397 = state_55343__$1;
(statearr_55364_55397[(2)] = inst_55329);

(statearr_55364_55397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (2))){
var state_55343__$1 = state_55343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55343__$1,(4),in$);
} else {
if((state_val_55344 === (23))){
var inst_55337 = (state_55343[(2)]);
var state_55343__$1 = state_55343;
var statearr_55365_55398 = state_55343__$1;
(statearr_55365_55398[(2)] = inst_55337);

(statearr_55365_55398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (19))){
var inst_55324 = (state_55343[(2)]);
var state_55343__$1 = state_55343;
var statearr_55366_55399 = state_55343__$1;
(statearr_55366_55399[(2)] = inst_55324);

(statearr_55366_55399[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (11))){
var inst_55295 = (state_55343[(10)]);
var inst_55309 = (state_55343[(7)]);
var inst_55309__$1 = cljs.core.seq.call(null,inst_55295);
var state_55343__$1 = (function (){var statearr_55367 = state_55343;
(statearr_55367[(7)] = inst_55309__$1);

return statearr_55367;
})();
if(inst_55309__$1){
var statearr_55368_55400 = state_55343__$1;
(statearr_55368_55400[(1)] = (14));

} else {
var statearr_55369_55401 = state_55343__$1;
(statearr_55369_55401[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (9))){
var inst_55331 = (state_55343[(2)]);
var inst_55332 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_55343__$1 = (function (){var statearr_55370 = state_55343;
(statearr_55370[(15)] = inst_55331);

return statearr_55370;
})();
if(cljs.core.truth_(inst_55332)){
var statearr_55371_55402 = state_55343__$1;
(statearr_55371_55402[(1)] = (21));

} else {
var statearr_55372_55403 = state_55343__$1;
(statearr_55372_55403[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (5))){
var inst_55287 = cljs.core.async.close_BANG_.call(null,out);
var state_55343__$1 = state_55343;
var statearr_55373_55404 = state_55343__$1;
(statearr_55373_55404[(2)] = inst_55287);

(statearr_55373_55404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (14))){
var inst_55309 = (state_55343[(7)]);
var inst_55311 = cljs.core.chunked_seq_QMARK_.call(null,inst_55309);
var state_55343__$1 = state_55343;
if(inst_55311){
var statearr_55374_55405 = state_55343__$1;
(statearr_55374_55405[(1)] = (17));

} else {
var statearr_55375_55406 = state_55343__$1;
(statearr_55375_55406[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (16))){
var inst_55327 = (state_55343[(2)]);
var state_55343__$1 = state_55343;
var statearr_55376_55407 = state_55343__$1;
(statearr_55376_55407[(2)] = inst_55327);

(statearr_55376_55407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55344 === (10))){
var inst_55296 = (state_55343[(9)]);
var inst_55298 = (state_55343[(11)]);
var inst_55303 = cljs.core._nth.call(null,inst_55296,inst_55298);
var state_55343__$1 = state_55343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55343__$1,(13),out,inst_55303);
} else {
if((state_val_55344 === (18))){
var inst_55309 = (state_55343[(7)]);
var inst_55318 = cljs.core.first.call(null,inst_55309);
var state_55343__$1 = state_55343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55343__$1,(20),out,inst_55318);
} else {
if((state_val_55344 === (8))){
var inst_55297 = (state_55343[(8)]);
var inst_55298 = (state_55343[(11)]);
var inst_55300 = (inst_55298 < inst_55297);
var inst_55301 = inst_55300;
var state_55343__$1 = state_55343;
if(cljs.core.truth_(inst_55301)){
var statearr_55377_55408 = state_55343__$1;
(statearr_55377_55408[(1)] = (10));

} else {
var statearr_55378_55409 = state_55343__$1;
(statearr_55378_55409[(1)] = (11));

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
});})(c__28846__auto__))
;
return ((function (switch__28734__auto__,c__28846__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28735__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28735__auto____0 = (function (){
var statearr_55382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55382[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28735__auto__);

(statearr_55382[(1)] = (1));

return statearr_55382;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28735__auto____1 = (function (state_55343){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_55343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e55383){if((e55383 instanceof Object)){
var ex__28738__auto__ = e55383;
var statearr_55384_55410 = state_55343;
(statearr_55384_55410[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55411 = state_55343;
state_55343 = G__55411;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28735__auto__ = function(state_55343){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28735__auto____1.call(this,state_55343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28735__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28735__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto__))
})();
var state__28848__auto__ = (function (){var statearr_55385 = f__28847__auto__.call(null);
(statearr_55385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto__);

return statearr_55385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto__))
);

return c__28846__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args55412 = [];
var len__27054__auto___55415 = arguments.length;
var i__27055__auto___55416 = (0);
while(true){
if((i__27055__auto___55416 < len__27054__auto___55415)){
args55412.push((arguments[i__27055__auto___55416]));

var G__55417 = (i__27055__auto___55416 + (1));
i__27055__auto___55416 = G__55417;
continue;
} else {
}
break;
}

var G__55414 = args55412.length;
switch (G__55414) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55412.length)].join('')));

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
var args55419 = [];
var len__27054__auto___55422 = arguments.length;
var i__27055__auto___55423 = (0);
while(true){
if((i__27055__auto___55423 < len__27054__auto___55422)){
args55419.push((arguments[i__27055__auto___55423]));

var G__55424 = (i__27055__auto___55423 + (1));
i__27055__auto___55423 = G__55424;
continue;
} else {
}
break;
}

var G__55421 = args55419.length;
switch (G__55421) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55419.length)].join('')));

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
var args55426 = [];
var len__27054__auto___55477 = arguments.length;
var i__27055__auto___55478 = (0);
while(true){
if((i__27055__auto___55478 < len__27054__auto___55477)){
args55426.push((arguments[i__27055__auto___55478]));

var G__55479 = (i__27055__auto___55478 + (1));
i__27055__auto___55478 = G__55479;
continue;
} else {
}
break;
}

var G__55428 = args55426.length;
switch (G__55428) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55426.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28846__auto___55481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___55481,out){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___55481,out){
return (function (state_55452){
var state_val_55453 = (state_55452[(1)]);
if((state_val_55453 === (7))){
var inst_55447 = (state_55452[(2)]);
var state_55452__$1 = state_55452;
var statearr_55454_55482 = state_55452__$1;
(statearr_55454_55482[(2)] = inst_55447);

(statearr_55454_55482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55453 === (1))){
var inst_55429 = null;
var state_55452__$1 = (function (){var statearr_55455 = state_55452;
(statearr_55455[(7)] = inst_55429);

return statearr_55455;
})();
var statearr_55456_55483 = state_55452__$1;
(statearr_55456_55483[(2)] = null);

(statearr_55456_55483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55453 === (4))){
var inst_55432 = (state_55452[(8)]);
var inst_55432__$1 = (state_55452[(2)]);
var inst_55433 = (inst_55432__$1 == null);
var inst_55434 = cljs.core.not.call(null,inst_55433);
var state_55452__$1 = (function (){var statearr_55457 = state_55452;
(statearr_55457[(8)] = inst_55432__$1);

return statearr_55457;
})();
if(inst_55434){
var statearr_55458_55484 = state_55452__$1;
(statearr_55458_55484[(1)] = (5));

} else {
var statearr_55459_55485 = state_55452__$1;
(statearr_55459_55485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55453 === (6))){
var state_55452__$1 = state_55452;
var statearr_55460_55486 = state_55452__$1;
(statearr_55460_55486[(2)] = null);

(statearr_55460_55486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55453 === (3))){
var inst_55449 = (state_55452[(2)]);
var inst_55450 = cljs.core.async.close_BANG_.call(null,out);
var state_55452__$1 = (function (){var statearr_55461 = state_55452;
(statearr_55461[(9)] = inst_55449);

return statearr_55461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55452__$1,inst_55450);
} else {
if((state_val_55453 === (2))){
var state_55452__$1 = state_55452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55452__$1,(4),ch);
} else {
if((state_val_55453 === (11))){
var inst_55432 = (state_55452[(8)]);
var inst_55441 = (state_55452[(2)]);
var inst_55429 = inst_55432;
var state_55452__$1 = (function (){var statearr_55462 = state_55452;
(statearr_55462[(10)] = inst_55441);

(statearr_55462[(7)] = inst_55429);

return statearr_55462;
})();
var statearr_55463_55487 = state_55452__$1;
(statearr_55463_55487[(2)] = null);

(statearr_55463_55487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55453 === (9))){
var inst_55432 = (state_55452[(8)]);
var state_55452__$1 = state_55452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55452__$1,(11),out,inst_55432);
} else {
if((state_val_55453 === (5))){
var inst_55429 = (state_55452[(7)]);
var inst_55432 = (state_55452[(8)]);
var inst_55436 = cljs.core._EQ_.call(null,inst_55432,inst_55429);
var state_55452__$1 = state_55452;
if(inst_55436){
var statearr_55465_55488 = state_55452__$1;
(statearr_55465_55488[(1)] = (8));

} else {
var statearr_55466_55489 = state_55452__$1;
(statearr_55466_55489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55453 === (10))){
var inst_55444 = (state_55452[(2)]);
var state_55452__$1 = state_55452;
var statearr_55467_55490 = state_55452__$1;
(statearr_55467_55490[(2)] = inst_55444);

(statearr_55467_55490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55453 === (8))){
var inst_55429 = (state_55452[(7)]);
var tmp55464 = inst_55429;
var inst_55429__$1 = tmp55464;
var state_55452__$1 = (function (){var statearr_55468 = state_55452;
(statearr_55468[(7)] = inst_55429__$1);

return statearr_55468;
})();
var statearr_55469_55491 = state_55452__$1;
(statearr_55469_55491[(2)] = null);

(statearr_55469_55491[(1)] = (2));


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
});})(c__28846__auto___55481,out))
;
return ((function (switch__28734__auto__,c__28846__auto___55481,out){
return (function() {
var cljs$core$async$state_machine__28735__auto__ = null;
var cljs$core$async$state_machine__28735__auto____0 = (function (){
var statearr_55473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55473[(0)] = cljs$core$async$state_machine__28735__auto__);

(statearr_55473[(1)] = (1));

return statearr_55473;
});
var cljs$core$async$state_machine__28735__auto____1 = (function (state_55452){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_55452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e55474){if((e55474 instanceof Object)){
var ex__28738__auto__ = e55474;
var statearr_55475_55492 = state_55452;
(statearr_55475_55492[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55493 = state_55452;
state_55452 = G__55493;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$state_machine__28735__auto__ = function(state_55452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28735__auto____1.call(this,state_55452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28735__auto____0;
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28735__auto____1;
return cljs$core$async$state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___55481,out))
})();
var state__28848__auto__ = (function (){var statearr_55476 = f__28847__auto__.call(null);
(statearr_55476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___55481);

return statearr_55476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___55481,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args55494 = [];
var len__27054__auto___55564 = arguments.length;
var i__27055__auto___55565 = (0);
while(true){
if((i__27055__auto___55565 < len__27054__auto___55564)){
args55494.push((arguments[i__27055__auto___55565]));

var G__55566 = (i__27055__auto___55565 + (1));
i__27055__auto___55565 = G__55566;
continue;
} else {
}
break;
}

var G__55496 = args55494.length;
switch (G__55496) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55494.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28846__auto___55568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___55568,out){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___55568,out){
return (function (state_55534){
var state_val_55535 = (state_55534[(1)]);
if((state_val_55535 === (7))){
var inst_55530 = (state_55534[(2)]);
var state_55534__$1 = state_55534;
var statearr_55536_55569 = state_55534__$1;
(statearr_55536_55569[(2)] = inst_55530);

(statearr_55536_55569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (1))){
var inst_55497 = (new Array(n));
var inst_55498 = inst_55497;
var inst_55499 = (0);
var state_55534__$1 = (function (){var statearr_55537 = state_55534;
(statearr_55537[(7)] = inst_55499);

(statearr_55537[(8)] = inst_55498);

return statearr_55537;
})();
var statearr_55538_55570 = state_55534__$1;
(statearr_55538_55570[(2)] = null);

(statearr_55538_55570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (4))){
var inst_55502 = (state_55534[(9)]);
var inst_55502__$1 = (state_55534[(2)]);
var inst_55503 = (inst_55502__$1 == null);
var inst_55504 = cljs.core.not.call(null,inst_55503);
var state_55534__$1 = (function (){var statearr_55539 = state_55534;
(statearr_55539[(9)] = inst_55502__$1);

return statearr_55539;
})();
if(inst_55504){
var statearr_55540_55571 = state_55534__$1;
(statearr_55540_55571[(1)] = (5));

} else {
var statearr_55541_55572 = state_55534__$1;
(statearr_55541_55572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (15))){
var inst_55524 = (state_55534[(2)]);
var state_55534__$1 = state_55534;
var statearr_55542_55573 = state_55534__$1;
(statearr_55542_55573[(2)] = inst_55524);

(statearr_55542_55573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (13))){
var state_55534__$1 = state_55534;
var statearr_55543_55574 = state_55534__$1;
(statearr_55543_55574[(2)] = null);

(statearr_55543_55574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (6))){
var inst_55499 = (state_55534[(7)]);
var inst_55520 = (inst_55499 > (0));
var state_55534__$1 = state_55534;
if(cljs.core.truth_(inst_55520)){
var statearr_55544_55575 = state_55534__$1;
(statearr_55544_55575[(1)] = (12));

} else {
var statearr_55545_55576 = state_55534__$1;
(statearr_55545_55576[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (3))){
var inst_55532 = (state_55534[(2)]);
var state_55534__$1 = state_55534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55534__$1,inst_55532);
} else {
if((state_val_55535 === (12))){
var inst_55498 = (state_55534[(8)]);
var inst_55522 = cljs.core.vec.call(null,inst_55498);
var state_55534__$1 = state_55534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55534__$1,(15),out,inst_55522);
} else {
if((state_val_55535 === (2))){
var state_55534__$1 = state_55534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55534__$1,(4),ch);
} else {
if((state_val_55535 === (11))){
var inst_55514 = (state_55534[(2)]);
var inst_55515 = (new Array(n));
var inst_55498 = inst_55515;
var inst_55499 = (0);
var state_55534__$1 = (function (){var statearr_55546 = state_55534;
(statearr_55546[(7)] = inst_55499);

(statearr_55546[(8)] = inst_55498);

(statearr_55546[(10)] = inst_55514);

return statearr_55546;
})();
var statearr_55547_55577 = state_55534__$1;
(statearr_55547_55577[(2)] = null);

(statearr_55547_55577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (9))){
var inst_55498 = (state_55534[(8)]);
var inst_55512 = cljs.core.vec.call(null,inst_55498);
var state_55534__$1 = state_55534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55534__$1,(11),out,inst_55512);
} else {
if((state_val_55535 === (5))){
var inst_55507 = (state_55534[(11)]);
var inst_55499 = (state_55534[(7)]);
var inst_55498 = (state_55534[(8)]);
var inst_55502 = (state_55534[(9)]);
var inst_55506 = (inst_55498[inst_55499] = inst_55502);
var inst_55507__$1 = (inst_55499 + (1));
var inst_55508 = (inst_55507__$1 < n);
var state_55534__$1 = (function (){var statearr_55548 = state_55534;
(statearr_55548[(11)] = inst_55507__$1);

(statearr_55548[(12)] = inst_55506);

return statearr_55548;
})();
if(cljs.core.truth_(inst_55508)){
var statearr_55549_55578 = state_55534__$1;
(statearr_55549_55578[(1)] = (8));

} else {
var statearr_55550_55579 = state_55534__$1;
(statearr_55550_55579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (14))){
var inst_55527 = (state_55534[(2)]);
var inst_55528 = cljs.core.async.close_BANG_.call(null,out);
var state_55534__$1 = (function (){var statearr_55552 = state_55534;
(statearr_55552[(13)] = inst_55527);

return statearr_55552;
})();
var statearr_55553_55580 = state_55534__$1;
(statearr_55553_55580[(2)] = inst_55528);

(statearr_55553_55580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (10))){
var inst_55518 = (state_55534[(2)]);
var state_55534__$1 = state_55534;
var statearr_55554_55581 = state_55534__$1;
(statearr_55554_55581[(2)] = inst_55518);

(statearr_55554_55581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55535 === (8))){
var inst_55507 = (state_55534[(11)]);
var inst_55498 = (state_55534[(8)]);
var tmp55551 = inst_55498;
var inst_55498__$1 = tmp55551;
var inst_55499 = inst_55507;
var state_55534__$1 = (function (){var statearr_55555 = state_55534;
(statearr_55555[(7)] = inst_55499);

(statearr_55555[(8)] = inst_55498__$1);

return statearr_55555;
})();
var statearr_55556_55582 = state_55534__$1;
(statearr_55556_55582[(2)] = null);

(statearr_55556_55582[(1)] = (2));


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
});})(c__28846__auto___55568,out))
;
return ((function (switch__28734__auto__,c__28846__auto___55568,out){
return (function() {
var cljs$core$async$state_machine__28735__auto__ = null;
var cljs$core$async$state_machine__28735__auto____0 = (function (){
var statearr_55560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55560[(0)] = cljs$core$async$state_machine__28735__auto__);

(statearr_55560[(1)] = (1));

return statearr_55560;
});
var cljs$core$async$state_machine__28735__auto____1 = (function (state_55534){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_55534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e55561){if((e55561 instanceof Object)){
var ex__28738__auto__ = e55561;
var statearr_55562_55583 = state_55534;
(statearr_55562_55583[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55584 = state_55534;
state_55534 = G__55584;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$state_machine__28735__auto__ = function(state_55534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28735__auto____1.call(this,state_55534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28735__auto____0;
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28735__auto____1;
return cljs$core$async$state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___55568,out))
})();
var state__28848__auto__ = (function (){var statearr_55563 = f__28847__auto__.call(null);
(statearr_55563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___55568);

return statearr_55563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___55568,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args55585 = [];
var len__27054__auto___55659 = arguments.length;
var i__27055__auto___55660 = (0);
while(true){
if((i__27055__auto___55660 < len__27054__auto___55659)){
args55585.push((arguments[i__27055__auto___55660]));

var G__55661 = (i__27055__auto___55660 + (1));
i__27055__auto___55660 = G__55661;
continue;
} else {
}
break;
}

var G__55587 = args55585.length;
switch (G__55587) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55585.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28846__auto___55663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28846__auto___55663,out){
return (function (){
var f__28847__auto__ = (function (){var switch__28734__auto__ = ((function (c__28846__auto___55663,out){
return (function (state_55629){
var state_val_55630 = (state_55629[(1)]);
if((state_val_55630 === (7))){
var inst_55625 = (state_55629[(2)]);
var state_55629__$1 = state_55629;
var statearr_55631_55664 = state_55629__$1;
(statearr_55631_55664[(2)] = inst_55625);

(statearr_55631_55664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55630 === (1))){
var inst_55588 = [];
var inst_55589 = inst_55588;
var inst_55590 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_55629__$1 = (function (){var statearr_55632 = state_55629;
(statearr_55632[(7)] = inst_55590);

(statearr_55632[(8)] = inst_55589);

return statearr_55632;
})();
var statearr_55633_55665 = state_55629__$1;
(statearr_55633_55665[(2)] = null);

(statearr_55633_55665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55630 === (4))){
var inst_55593 = (state_55629[(9)]);
var inst_55593__$1 = (state_55629[(2)]);
var inst_55594 = (inst_55593__$1 == null);
var inst_55595 = cljs.core.not.call(null,inst_55594);
var state_55629__$1 = (function (){var statearr_55634 = state_55629;
(statearr_55634[(9)] = inst_55593__$1);

return statearr_55634;
})();
if(inst_55595){
var statearr_55635_55666 = state_55629__$1;
(statearr_55635_55666[(1)] = (5));

} else {
var statearr_55636_55667 = state_55629__$1;
(statearr_55636_55667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55630 === (15))){
var inst_55619 = (state_55629[(2)]);
var state_55629__$1 = state_55629;
var statearr_55637_55668 = state_55629__$1;
(statearr_55637_55668[(2)] = inst_55619);

(statearr_55637_55668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55630 === (13))){
var state_55629__$1 = state_55629;
var statearr_55638_55669 = state_55629__$1;
(statearr_55638_55669[(2)] = null);

(statearr_55638_55669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55630 === (6))){
var inst_55589 = (state_55629[(8)]);
var inst_55614 = inst_55589.length;
var inst_55615 = (inst_55614 > (0));
var state_55629__$1 = state_55629;
if(cljs.core.truth_(inst_55615)){
var statearr_55639_55670 = state_55629__$1;
(statearr_55639_55670[(1)] = (12));

} else {
var statearr_55640_55671 = state_55629__$1;
(statearr_55640_55671[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55630 === (3))){
var inst_55627 = (state_55629[(2)]);
var state_55629__$1 = state_55629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55629__$1,inst_55627);
} else {
if((state_val_55630 === (12))){
var inst_55589 = (state_55629[(8)]);
var inst_55617 = cljs.core.vec.call(null,inst_55589);
var state_55629__$1 = state_55629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55629__$1,(15),out,inst_55617);
} else {
if((state_val_55630 === (2))){
var state_55629__$1 = state_55629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55629__$1,(4),ch);
} else {
if((state_val_55630 === (11))){
var inst_55593 = (state_55629[(9)]);
var inst_55597 = (state_55629[(10)]);
var inst_55607 = (state_55629[(2)]);
var inst_55608 = [];
var inst_55609 = inst_55608.push(inst_55593);
var inst_55589 = inst_55608;
var inst_55590 = inst_55597;
var state_55629__$1 = (function (){var statearr_55641 = state_55629;
(statearr_55641[(11)] = inst_55609);

(statearr_55641[(12)] = inst_55607);

(statearr_55641[(7)] = inst_55590);

(statearr_55641[(8)] = inst_55589);

return statearr_55641;
})();
var statearr_55642_55672 = state_55629__$1;
(statearr_55642_55672[(2)] = null);

(statearr_55642_55672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55630 === (9))){
var inst_55589 = (state_55629[(8)]);
var inst_55605 = cljs.core.vec.call(null,inst_55589);
var state_55629__$1 = state_55629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55629__$1,(11),out,inst_55605);
} else {
if((state_val_55630 === (5))){
var inst_55593 = (state_55629[(9)]);
var inst_55590 = (state_55629[(7)]);
var inst_55597 = (state_55629[(10)]);
var inst_55597__$1 = f.call(null,inst_55593);
var inst_55598 = cljs.core._EQ_.call(null,inst_55597__$1,inst_55590);
var inst_55599 = cljs.core.keyword_identical_QMARK_.call(null,inst_55590,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_55600 = (inst_55598) || (inst_55599);
var state_55629__$1 = (function (){var statearr_55643 = state_55629;
(statearr_55643[(10)] = inst_55597__$1);

return statearr_55643;
})();
if(cljs.core.truth_(inst_55600)){
var statearr_55644_55673 = state_55629__$1;
(statearr_55644_55673[(1)] = (8));

} else {
var statearr_55645_55674 = state_55629__$1;
(statearr_55645_55674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55630 === (14))){
var inst_55622 = (state_55629[(2)]);
var inst_55623 = cljs.core.async.close_BANG_.call(null,out);
var state_55629__$1 = (function (){var statearr_55647 = state_55629;
(statearr_55647[(13)] = inst_55622);

return statearr_55647;
})();
var statearr_55648_55675 = state_55629__$1;
(statearr_55648_55675[(2)] = inst_55623);

(statearr_55648_55675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55630 === (10))){
var inst_55612 = (state_55629[(2)]);
var state_55629__$1 = state_55629;
var statearr_55649_55676 = state_55629__$1;
(statearr_55649_55676[(2)] = inst_55612);

(statearr_55649_55676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55630 === (8))){
var inst_55593 = (state_55629[(9)]);
var inst_55589 = (state_55629[(8)]);
var inst_55597 = (state_55629[(10)]);
var inst_55602 = inst_55589.push(inst_55593);
var tmp55646 = inst_55589;
var inst_55589__$1 = tmp55646;
var inst_55590 = inst_55597;
var state_55629__$1 = (function (){var statearr_55650 = state_55629;
(statearr_55650[(14)] = inst_55602);

(statearr_55650[(7)] = inst_55590);

(statearr_55650[(8)] = inst_55589__$1);

return statearr_55650;
})();
var statearr_55651_55677 = state_55629__$1;
(statearr_55651_55677[(2)] = null);

(statearr_55651_55677[(1)] = (2));


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
});})(c__28846__auto___55663,out))
;
return ((function (switch__28734__auto__,c__28846__auto___55663,out){
return (function() {
var cljs$core$async$state_machine__28735__auto__ = null;
var cljs$core$async$state_machine__28735__auto____0 = (function (){
var statearr_55655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55655[(0)] = cljs$core$async$state_machine__28735__auto__);

(statearr_55655[(1)] = (1));

return statearr_55655;
});
var cljs$core$async$state_machine__28735__auto____1 = (function (state_55629){
while(true){
var ret_value__28736__auto__ = (function (){try{while(true){
var result__28737__auto__ = switch__28734__auto__.call(null,state_55629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28737__auto__;
}
break;
}
}catch (e55656){if((e55656 instanceof Object)){
var ex__28738__auto__ = e55656;
var statearr_55657_55678 = state_55629;
(statearr_55657_55678[(5)] = ex__28738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55679 = state_55629;
state_55629 = G__55679;
continue;
} else {
return ret_value__28736__auto__;
}
break;
}
});
cljs$core$async$state_machine__28735__auto__ = function(state_55629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28735__auto____1.call(this,state_55629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28735__auto____0;
cljs$core$async$state_machine__28735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28735__auto____1;
return cljs$core$async$state_machine__28735__auto__;
})()
;})(switch__28734__auto__,c__28846__auto___55663,out))
})();
var state__28848__auto__ = (function (){var statearr_55658 = f__28847__auto__.call(null);
(statearr_55658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28846__auto___55663);

return statearr_55658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28848__auto__);
});})(c__28846__auto___55663,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1499366806487