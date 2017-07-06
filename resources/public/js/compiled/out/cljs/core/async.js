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
var args28887 = [];
var len__27054__auto___28893 = arguments.length;
var i__27055__auto___28894 = (0);
while(true){
if((i__27055__auto___28894 < len__27054__auto___28893)){
args28887.push((arguments[i__27055__auto___28894]));

var G__28895 = (i__27055__auto___28894 + (1));
i__27055__auto___28894 = G__28895;
continue;
} else {
}
break;
}

var G__28889 = args28887.length;
switch (G__28889) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28887.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28890 = (function (f,blockable,meta28891){
this.f = f;
this.blockable = blockable;
this.meta28891 = meta28891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28892,meta28891__$1){
var self__ = this;
var _28892__$1 = this;
return (new cljs.core.async.t_cljs$core$async28890(self__.f,self__.blockable,meta28891__$1));
});

cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28892){
var self__ = this;
var _28892__$1 = this;
return self__.meta28891;
});

cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28891","meta28891",137318894,null)], null);
});

cljs.core.async.t_cljs$core$async28890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28890";

cljs.core.async.t_cljs$core$async28890.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28890");
});

cljs.core.async.__GT_t_cljs$core$async28890 = (function cljs$core$async$__GT_t_cljs$core$async28890(f__$1,blockable__$1,meta28891){
return (new cljs.core.async.t_cljs$core$async28890(f__$1,blockable__$1,meta28891));
});

}

return (new cljs.core.async.t_cljs$core$async28890(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28899 = [];
var len__27054__auto___28902 = arguments.length;
var i__27055__auto___28903 = (0);
while(true){
if((i__27055__auto___28903 < len__27054__auto___28902)){
args28899.push((arguments[i__27055__auto___28903]));

var G__28904 = (i__27055__auto___28903 + (1));
i__27055__auto___28903 = G__28904;
continue;
} else {
}
break;
}

var G__28901 = args28899.length;
switch (G__28901) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28899.length)].join('')));

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
var args28906 = [];
var len__27054__auto___28909 = arguments.length;
var i__27055__auto___28910 = (0);
while(true){
if((i__27055__auto___28910 < len__27054__auto___28909)){
args28906.push((arguments[i__27055__auto___28910]));

var G__28911 = (i__27055__auto___28910 + (1));
i__27055__auto___28910 = G__28911;
continue;
} else {
}
break;
}

var G__28908 = args28906.length;
switch (G__28908) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28906.length)].join('')));

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
var args28913 = [];
var len__27054__auto___28916 = arguments.length;
var i__27055__auto___28917 = (0);
while(true){
if((i__27055__auto___28917 < len__27054__auto___28916)){
args28913.push((arguments[i__27055__auto___28917]));

var G__28918 = (i__27055__auto___28917 + (1));
i__27055__auto___28917 = G__28918;
continue;
} else {
}
break;
}

var G__28915 = args28913.length;
switch (G__28915) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28913.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28920 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28920);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28920,ret){
return (function (){
return fn1.call(null,val_28920);
});})(val_28920,ret))
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
var args28921 = [];
var len__27054__auto___28924 = arguments.length;
var i__27055__auto___28925 = (0);
while(true){
if((i__27055__auto___28925 < len__27054__auto___28924)){
args28921.push((arguments[i__27055__auto___28925]));

var G__28926 = (i__27055__auto___28925 + (1));
i__27055__auto___28925 = G__28926;
continue;
} else {
}
break;
}

var G__28923 = args28921.length;
switch (G__28923) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28921.length)].join('')));

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
var n__26894__auto___28928 = n;
var x_28929 = (0);
while(true){
if((x_28929 < n__26894__auto___28928)){
(a[x_28929] = (0));

var G__28930 = (x_28929 + (1));
x_28929 = G__28930;
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

var G__28931 = (i + (1));
i = G__28931;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28935 = (function (alt_flag,flag,meta28936){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28936 = meta28936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28937,meta28936__$1){
var self__ = this;
var _28937__$1 = this;
return (new cljs.core.async.t_cljs$core$async28935(self__.alt_flag,self__.flag,meta28936__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28937){
var self__ = this;
var _28937__$1 = this;
return self__.meta28936;
});})(flag))
;

cljs.core.async.t_cljs$core$async28935.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28935.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28935.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28936","meta28936",358284739,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28935";

cljs.core.async.t_cljs$core$async28935.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28935");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28935 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28935(alt_flag__$1,flag__$1,meta28936){
return (new cljs.core.async.t_cljs$core$async28935(alt_flag__$1,flag__$1,meta28936));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28935(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28941 = (function (alt_handler,flag,cb,meta28942){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28942 = meta28942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28943,meta28942__$1){
var self__ = this;
var _28943__$1 = this;
return (new cljs.core.async.t_cljs$core$async28941(self__.alt_handler,self__.flag,self__.cb,meta28942__$1));
});

cljs.core.async.t_cljs$core$async28941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28943){
var self__ = this;
var _28943__$1 = this;
return self__.meta28942;
});

cljs.core.async.t_cljs$core$async28941.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28941.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28942","meta28942",266869409,null)], null);
});

cljs.core.async.t_cljs$core$async28941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28941";

cljs.core.async.t_cljs$core$async28941.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28941");
});

cljs.core.async.__GT_t_cljs$core$async28941 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28941(alt_handler__$1,flag__$1,cb__$1,meta28942){
return (new cljs.core.async.t_cljs$core$async28941(alt_handler__$1,flag__$1,cb__$1,meta28942));
});

}

return (new cljs.core.async.t_cljs$core$async28941(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28944_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28944_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28945_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28945_SHARP_,port], null));
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
var G__28946 = (i + (1));
i = G__28946;
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
var len__27054__auto___28952 = arguments.length;
var i__27055__auto___28953 = (0);
while(true){
if((i__27055__auto___28953 < len__27054__auto___28952)){
args__27061__auto__.push((arguments[i__27055__auto___28953]));

var G__28954 = (i__27055__auto___28953 + (1));
i__27055__auto___28953 = G__28954;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28949){
var map__28950 = p__28949;
var map__28950__$1 = ((((!((map__28950 == null)))?((((map__28950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28950):map__28950);
var opts = map__28950__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28947){
var G__28948 = cljs.core.first.call(null,seq28947);
var seq28947__$1 = cljs.core.next.call(null,seq28947);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28948,seq28947__$1);
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
var args28955 = [];
var len__27054__auto___29005 = arguments.length;
var i__27055__auto___29006 = (0);
while(true){
if((i__27055__auto___29006 < len__27054__auto___29005)){
args28955.push((arguments[i__27055__auto___29006]));

var G__29007 = (i__27055__auto___29006 + (1));
i__27055__auto___29006 = G__29007;
continue;
} else {
}
break;
}

var G__28957 = args28955.length;
switch (G__28957) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28955.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28842__auto___29009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___29009){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___29009){
return (function (state_28981){
var state_val_28982 = (state_28981[(1)]);
if((state_val_28982 === (7))){
var inst_28977 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
var statearr_28983_29010 = state_28981__$1;
(statearr_28983_29010[(2)] = inst_28977);

(statearr_28983_29010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (1))){
var state_28981__$1 = state_28981;
var statearr_28984_29011 = state_28981__$1;
(statearr_28984_29011[(2)] = null);

(statearr_28984_29011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (4))){
var inst_28960 = (state_28981[(7)]);
var inst_28960__$1 = (state_28981[(2)]);
var inst_28961 = (inst_28960__$1 == null);
var state_28981__$1 = (function (){var statearr_28985 = state_28981;
(statearr_28985[(7)] = inst_28960__$1);

return statearr_28985;
})();
if(cljs.core.truth_(inst_28961)){
var statearr_28986_29012 = state_28981__$1;
(statearr_28986_29012[(1)] = (5));

} else {
var statearr_28987_29013 = state_28981__$1;
(statearr_28987_29013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (13))){
var state_28981__$1 = state_28981;
var statearr_28988_29014 = state_28981__$1;
(statearr_28988_29014[(2)] = null);

(statearr_28988_29014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (6))){
var inst_28960 = (state_28981[(7)]);
var state_28981__$1 = state_28981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28981__$1,(11),to,inst_28960);
} else {
if((state_val_28982 === (3))){
var inst_28979 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28981__$1,inst_28979);
} else {
if((state_val_28982 === (12))){
var state_28981__$1 = state_28981;
var statearr_28989_29015 = state_28981__$1;
(statearr_28989_29015[(2)] = null);

(statearr_28989_29015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (2))){
var state_28981__$1 = state_28981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28981__$1,(4),from);
} else {
if((state_val_28982 === (11))){
var inst_28970 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
if(cljs.core.truth_(inst_28970)){
var statearr_28990_29016 = state_28981__$1;
(statearr_28990_29016[(1)] = (12));

} else {
var statearr_28991_29017 = state_28981__$1;
(statearr_28991_29017[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (9))){
var state_28981__$1 = state_28981;
var statearr_28992_29018 = state_28981__$1;
(statearr_28992_29018[(2)] = null);

(statearr_28992_29018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (5))){
var state_28981__$1 = state_28981;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28993_29019 = state_28981__$1;
(statearr_28993_29019[(1)] = (8));

} else {
var statearr_28994_29020 = state_28981__$1;
(statearr_28994_29020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (14))){
var inst_28975 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
var statearr_28995_29021 = state_28981__$1;
(statearr_28995_29021[(2)] = inst_28975);

(statearr_28995_29021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (10))){
var inst_28967 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
var statearr_28996_29022 = state_28981__$1;
(statearr_28996_29022[(2)] = inst_28967);

(statearr_28996_29022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (8))){
var inst_28964 = cljs.core.async.close_BANG_.call(null,to);
var state_28981__$1 = state_28981;
var statearr_28997_29023 = state_28981__$1;
(statearr_28997_29023[(2)] = inst_28964);

(statearr_28997_29023[(1)] = (10));


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
});})(c__28842__auto___29009))
;
return ((function (switch__28730__auto__,c__28842__auto___29009){
return (function() {
var cljs$core$async$state_machine__28731__auto__ = null;
var cljs$core$async$state_machine__28731__auto____0 = (function (){
var statearr_29001 = [null,null,null,null,null,null,null,null];
(statearr_29001[(0)] = cljs$core$async$state_machine__28731__auto__);

(statearr_29001[(1)] = (1));

return statearr_29001;
});
var cljs$core$async$state_machine__28731__auto____1 = (function (state_28981){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_28981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e29002){if((e29002 instanceof Object)){
var ex__28734__auto__ = e29002;
var statearr_29003_29024 = state_28981;
(statearr_29003_29024[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29025 = state_28981;
state_28981 = G__29025;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$state_machine__28731__auto__ = function(state_28981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28731__auto____1.call(this,state_28981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28731__auto____0;
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28731__auto____1;
return cljs$core$async$state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___29009))
})();
var state__28844__auto__ = (function (){var statearr_29004 = f__28843__auto__.call(null);
(statearr_29004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___29009);

return statearr_29004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___29009))
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
return (function (p__29213){
var vec__29214 = p__29213;
var v = cljs.core.nth.call(null,vec__29214,(0),null);
var p = cljs.core.nth.call(null,vec__29214,(1),null);
var job = vec__29214;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28842__auto___29400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___29400,res,vec__29214,v,p,job,jobs,results){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___29400,res,vec__29214,v,p,job,jobs,results){
return (function (state_29221){
var state_val_29222 = (state_29221[(1)]);
if((state_val_29222 === (1))){
var state_29221__$1 = state_29221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29221__$1,(2),res,v);
} else {
if((state_val_29222 === (2))){
var inst_29218 = (state_29221[(2)]);
var inst_29219 = cljs.core.async.close_BANG_.call(null,res);
var state_29221__$1 = (function (){var statearr_29223 = state_29221;
(statearr_29223[(7)] = inst_29218);

return statearr_29223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29221__$1,inst_29219);
} else {
return null;
}
}
});})(c__28842__auto___29400,res,vec__29214,v,p,job,jobs,results))
;
return ((function (switch__28730__auto__,c__28842__auto___29400,res,vec__29214,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0 = (function (){
var statearr_29227 = [null,null,null,null,null,null,null,null];
(statearr_29227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__);

(statearr_29227[(1)] = (1));

return statearr_29227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1 = (function (state_29221){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_29221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e29228){if((e29228 instanceof Object)){
var ex__28734__auto__ = e29228;
var statearr_29229_29401 = state_29221;
(statearr_29229_29401[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29402 = state_29221;
state_29221 = G__29402;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__ = function(state_29221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1.call(this,state_29221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___29400,res,vec__29214,v,p,job,jobs,results))
})();
var state__28844__auto__ = (function (){var statearr_29230 = f__28843__auto__.call(null);
(statearr_29230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___29400);

return statearr_29230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___29400,res,vec__29214,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29231){
var vec__29232 = p__29231;
var v = cljs.core.nth.call(null,vec__29232,(0),null);
var p = cljs.core.nth.call(null,vec__29232,(1),null);
var job = vec__29232;
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
var n__26894__auto___29403 = n;
var __29404 = (0);
while(true){
if((__29404 < n__26894__auto___29403)){
var G__29235_29405 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29235_29405) {
case "compute":
var c__28842__auto___29407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29404,c__28842__auto___29407,G__29235_29405,n__26894__auto___29403,jobs,results,process,async){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (__29404,c__28842__auto___29407,G__29235_29405,n__26894__auto___29403,jobs,results,process,async){
return (function (state_29248){
var state_val_29249 = (state_29248[(1)]);
if((state_val_29249 === (1))){
var state_29248__$1 = state_29248;
var statearr_29250_29408 = state_29248__$1;
(statearr_29250_29408[(2)] = null);

(statearr_29250_29408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29249 === (2))){
var state_29248__$1 = state_29248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29248__$1,(4),jobs);
} else {
if((state_val_29249 === (3))){
var inst_29246 = (state_29248[(2)]);
var state_29248__$1 = state_29248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29248__$1,inst_29246);
} else {
if((state_val_29249 === (4))){
var inst_29238 = (state_29248[(2)]);
var inst_29239 = process.call(null,inst_29238);
var state_29248__$1 = state_29248;
if(cljs.core.truth_(inst_29239)){
var statearr_29251_29409 = state_29248__$1;
(statearr_29251_29409[(1)] = (5));

} else {
var statearr_29252_29410 = state_29248__$1;
(statearr_29252_29410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29249 === (5))){
var state_29248__$1 = state_29248;
var statearr_29253_29411 = state_29248__$1;
(statearr_29253_29411[(2)] = null);

(statearr_29253_29411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29249 === (6))){
var state_29248__$1 = state_29248;
var statearr_29254_29412 = state_29248__$1;
(statearr_29254_29412[(2)] = null);

(statearr_29254_29412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29249 === (7))){
var inst_29244 = (state_29248[(2)]);
var state_29248__$1 = state_29248;
var statearr_29255_29413 = state_29248__$1;
(statearr_29255_29413[(2)] = inst_29244);

(statearr_29255_29413[(1)] = (3));


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
});})(__29404,c__28842__auto___29407,G__29235_29405,n__26894__auto___29403,jobs,results,process,async))
;
return ((function (__29404,switch__28730__auto__,c__28842__auto___29407,G__29235_29405,n__26894__auto___29403,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0 = (function (){
var statearr_29259 = [null,null,null,null,null,null,null];
(statearr_29259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__);

(statearr_29259[(1)] = (1));

return statearr_29259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1 = (function (state_29248){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_29248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e29260){if((e29260 instanceof Object)){
var ex__28734__auto__ = e29260;
var statearr_29261_29414 = state_29248;
(statearr_29261_29414[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29415 = state_29248;
state_29248 = G__29415;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__ = function(state_29248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1.call(this,state_29248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__;
})()
;})(__29404,switch__28730__auto__,c__28842__auto___29407,G__29235_29405,n__26894__auto___29403,jobs,results,process,async))
})();
var state__28844__auto__ = (function (){var statearr_29262 = f__28843__auto__.call(null);
(statearr_29262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___29407);

return statearr_29262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(__29404,c__28842__auto___29407,G__29235_29405,n__26894__auto___29403,jobs,results,process,async))
);


break;
case "async":
var c__28842__auto___29416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29404,c__28842__auto___29416,G__29235_29405,n__26894__auto___29403,jobs,results,process,async){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (__29404,c__28842__auto___29416,G__29235_29405,n__26894__auto___29403,jobs,results,process,async){
return (function (state_29275){
var state_val_29276 = (state_29275[(1)]);
if((state_val_29276 === (1))){
var state_29275__$1 = state_29275;
var statearr_29277_29417 = state_29275__$1;
(statearr_29277_29417[(2)] = null);

(statearr_29277_29417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29276 === (2))){
var state_29275__$1 = state_29275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29275__$1,(4),jobs);
} else {
if((state_val_29276 === (3))){
var inst_29273 = (state_29275[(2)]);
var state_29275__$1 = state_29275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29275__$1,inst_29273);
} else {
if((state_val_29276 === (4))){
var inst_29265 = (state_29275[(2)]);
var inst_29266 = async.call(null,inst_29265);
var state_29275__$1 = state_29275;
if(cljs.core.truth_(inst_29266)){
var statearr_29278_29418 = state_29275__$1;
(statearr_29278_29418[(1)] = (5));

} else {
var statearr_29279_29419 = state_29275__$1;
(statearr_29279_29419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29276 === (5))){
var state_29275__$1 = state_29275;
var statearr_29280_29420 = state_29275__$1;
(statearr_29280_29420[(2)] = null);

(statearr_29280_29420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29276 === (6))){
var state_29275__$1 = state_29275;
var statearr_29281_29421 = state_29275__$1;
(statearr_29281_29421[(2)] = null);

(statearr_29281_29421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29276 === (7))){
var inst_29271 = (state_29275[(2)]);
var state_29275__$1 = state_29275;
var statearr_29282_29422 = state_29275__$1;
(statearr_29282_29422[(2)] = inst_29271);

(statearr_29282_29422[(1)] = (3));


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
});})(__29404,c__28842__auto___29416,G__29235_29405,n__26894__auto___29403,jobs,results,process,async))
;
return ((function (__29404,switch__28730__auto__,c__28842__auto___29416,G__29235_29405,n__26894__auto___29403,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0 = (function (){
var statearr_29286 = [null,null,null,null,null,null,null];
(statearr_29286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__);

(statearr_29286[(1)] = (1));

return statearr_29286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1 = (function (state_29275){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_29275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e29287){if((e29287 instanceof Object)){
var ex__28734__auto__ = e29287;
var statearr_29288_29423 = state_29275;
(statearr_29288_29423[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29424 = state_29275;
state_29275 = G__29424;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__ = function(state_29275){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1.call(this,state_29275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__;
})()
;})(__29404,switch__28730__auto__,c__28842__auto___29416,G__29235_29405,n__26894__auto___29403,jobs,results,process,async))
})();
var state__28844__auto__ = (function (){var statearr_29289 = f__28843__auto__.call(null);
(statearr_29289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___29416);

return statearr_29289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(__29404,c__28842__auto___29416,G__29235_29405,n__26894__auto___29403,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29425 = (__29404 + (1));
__29404 = G__29425;
continue;
} else {
}
break;
}

var c__28842__auto___29426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___29426,jobs,results,process,async){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___29426,jobs,results,process,async){
return (function (state_29311){
var state_val_29312 = (state_29311[(1)]);
if((state_val_29312 === (1))){
var state_29311__$1 = state_29311;
var statearr_29313_29427 = state_29311__$1;
(statearr_29313_29427[(2)] = null);

(statearr_29313_29427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (2))){
var state_29311__$1 = state_29311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29311__$1,(4),from);
} else {
if((state_val_29312 === (3))){
var inst_29309 = (state_29311[(2)]);
var state_29311__$1 = state_29311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29311__$1,inst_29309);
} else {
if((state_val_29312 === (4))){
var inst_29292 = (state_29311[(7)]);
var inst_29292__$1 = (state_29311[(2)]);
var inst_29293 = (inst_29292__$1 == null);
var state_29311__$1 = (function (){var statearr_29314 = state_29311;
(statearr_29314[(7)] = inst_29292__$1);

return statearr_29314;
})();
if(cljs.core.truth_(inst_29293)){
var statearr_29315_29428 = state_29311__$1;
(statearr_29315_29428[(1)] = (5));

} else {
var statearr_29316_29429 = state_29311__$1;
(statearr_29316_29429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (5))){
var inst_29295 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29311__$1 = state_29311;
var statearr_29317_29430 = state_29311__$1;
(statearr_29317_29430[(2)] = inst_29295);

(statearr_29317_29430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (6))){
var inst_29292 = (state_29311[(7)]);
var inst_29297 = (state_29311[(8)]);
var inst_29297__$1 = cljs.core.async.chan.call(null,(1));
var inst_29298 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29299 = [inst_29292,inst_29297__$1];
var inst_29300 = (new cljs.core.PersistentVector(null,2,(5),inst_29298,inst_29299,null));
var state_29311__$1 = (function (){var statearr_29318 = state_29311;
(statearr_29318[(8)] = inst_29297__$1);

return statearr_29318;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29311__$1,(8),jobs,inst_29300);
} else {
if((state_val_29312 === (7))){
var inst_29307 = (state_29311[(2)]);
var state_29311__$1 = state_29311;
var statearr_29319_29431 = state_29311__$1;
(statearr_29319_29431[(2)] = inst_29307);

(statearr_29319_29431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (8))){
var inst_29297 = (state_29311[(8)]);
var inst_29302 = (state_29311[(2)]);
var state_29311__$1 = (function (){var statearr_29320 = state_29311;
(statearr_29320[(9)] = inst_29302);

return statearr_29320;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29311__$1,(9),results,inst_29297);
} else {
if((state_val_29312 === (9))){
var inst_29304 = (state_29311[(2)]);
var state_29311__$1 = (function (){var statearr_29321 = state_29311;
(statearr_29321[(10)] = inst_29304);

return statearr_29321;
})();
var statearr_29322_29432 = state_29311__$1;
(statearr_29322_29432[(2)] = null);

(statearr_29322_29432[(1)] = (2));


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
});})(c__28842__auto___29426,jobs,results,process,async))
;
return ((function (switch__28730__auto__,c__28842__auto___29426,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0 = (function (){
var statearr_29326 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__);

(statearr_29326[(1)] = (1));

return statearr_29326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1 = (function (state_29311){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_29311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e29327){if((e29327 instanceof Object)){
var ex__28734__auto__ = e29327;
var statearr_29328_29433 = state_29311;
(statearr_29328_29433[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29434 = state_29311;
state_29311 = G__29434;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__ = function(state_29311){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1.call(this,state_29311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___29426,jobs,results,process,async))
})();
var state__28844__auto__ = (function (){var statearr_29329 = f__28843__auto__.call(null);
(statearr_29329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___29426);

return statearr_29329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___29426,jobs,results,process,async))
);


var c__28842__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto__,jobs,results,process,async){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto__,jobs,results,process,async){
return (function (state_29367){
var state_val_29368 = (state_29367[(1)]);
if((state_val_29368 === (7))){
var inst_29363 = (state_29367[(2)]);
var state_29367__$1 = state_29367;
var statearr_29369_29435 = state_29367__$1;
(statearr_29369_29435[(2)] = inst_29363);

(statearr_29369_29435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (20))){
var state_29367__$1 = state_29367;
var statearr_29370_29436 = state_29367__$1;
(statearr_29370_29436[(2)] = null);

(statearr_29370_29436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (1))){
var state_29367__$1 = state_29367;
var statearr_29371_29437 = state_29367__$1;
(statearr_29371_29437[(2)] = null);

(statearr_29371_29437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (4))){
var inst_29332 = (state_29367[(7)]);
var inst_29332__$1 = (state_29367[(2)]);
var inst_29333 = (inst_29332__$1 == null);
var state_29367__$1 = (function (){var statearr_29372 = state_29367;
(statearr_29372[(7)] = inst_29332__$1);

return statearr_29372;
})();
if(cljs.core.truth_(inst_29333)){
var statearr_29373_29438 = state_29367__$1;
(statearr_29373_29438[(1)] = (5));

} else {
var statearr_29374_29439 = state_29367__$1;
(statearr_29374_29439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (15))){
var inst_29345 = (state_29367[(8)]);
var state_29367__$1 = state_29367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29367__$1,(18),to,inst_29345);
} else {
if((state_val_29368 === (21))){
var inst_29358 = (state_29367[(2)]);
var state_29367__$1 = state_29367;
var statearr_29375_29440 = state_29367__$1;
(statearr_29375_29440[(2)] = inst_29358);

(statearr_29375_29440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (13))){
var inst_29360 = (state_29367[(2)]);
var state_29367__$1 = (function (){var statearr_29376 = state_29367;
(statearr_29376[(9)] = inst_29360);

return statearr_29376;
})();
var statearr_29377_29441 = state_29367__$1;
(statearr_29377_29441[(2)] = null);

(statearr_29377_29441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (6))){
var inst_29332 = (state_29367[(7)]);
var state_29367__$1 = state_29367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29367__$1,(11),inst_29332);
} else {
if((state_val_29368 === (17))){
var inst_29353 = (state_29367[(2)]);
var state_29367__$1 = state_29367;
if(cljs.core.truth_(inst_29353)){
var statearr_29378_29442 = state_29367__$1;
(statearr_29378_29442[(1)] = (19));

} else {
var statearr_29379_29443 = state_29367__$1;
(statearr_29379_29443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (3))){
var inst_29365 = (state_29367[(2)]);
var state_29367__$1 = state_29367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29367__$1,inst_29365);
} else {
if((state_val_29368 === (12))){
var inst_29342 = (state_29367[(10)]);
var state_29367__$1 = state_29367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29367__$1,(14),inst_29342);
} else {
if((state_val_29368 === (2))){
var state_29367__$1 = state_29367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29367__$1,(4),results);
} else {
if((state_val_29368 === (19))){
var state_29367__$1 = state_29367;
var statearr_29380_29444 = state_29367__$1;
(statearr_29380_29444[(2)] = null);

(statearr_29380_29444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (11))){
var inst_29342 = (state_29367[(2)]);
var state_29367__$1 = (function (){var statearr_29381 = state_29367;
(statearr_29381[(10)] = inst_29342);

return statearr_29381;
})();
var statearr_29382_29445 = state_29367__$1;
(statearr_29382_29445[(2)] = null);

(statearr_29382_29445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (9))){
var state_29367__$1 = state_29367;
var statearr_29383_29446 = state_29367__$1;
(statearr_29383_29446[(2)] = null);

(statearr_29383_29446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (5))){
var state_29367__$1 = state_29367;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29384_29447 = state_29367__$1;
(statearr_29384_29447[(1)] = (8));

} else {
var statearr_29385_29448 = state_29367__$1;
(statearr_29385_29448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (14))){
var inst_29347 = (state_29367[(11)]);
var inst_29345 = (state_29367[(8)]);
var inst_29345__$1 = (state_29367[(2)]);
var inst_29346 = (inst_29345__$1 == null);
var inst_29347__$1 = cljs.core.not.call(null,inst_29346);
var state_29367__$1 = (function (){var statearr_29386 = state_29367;
(statearr_29386[(11)] = inst_29347__$1);

(statearr_29386[(8)] = inst_29345__$1);

return statearr_29386;
})();
if(inst_29347__$1){
var statearr_29387_29449 = state_29367__$1;
(statearr_29387_29449[(1)] = (15));

} else {
var statearr_29388_29450 = state_29367__$1;
(statearr_29388_29450[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (16))){
var inst_29347 = (state_29367[(11)]);
var state_29367__$1 = state_29367;
var statearr_29389_29451 = state_29367__$1;
(statearr_29389_29451[(2)] = inst_29347);

(statearr_29389_29451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (10))){
var inst_29339 = (state_29367[(2)]);
var state_29367__$1 = state_29367;
var statearr_29390_29452 = state_29367__$1;
(statearr_29390_29452[(2)] = inst_29339);

(statearr_29390_29452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (18))){
var inst_29350 = (state_29367[(2)]);
var state_29367__$1 = state_29367;
var statearr_29391_29453 = state_29367__$1;
(statearr_29391_29453[(2)] = inst_29350);

(statearr_29391_29453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29368 === (8))){
var inst_29336 = cljs.core.async.close_BANG_.call(null,to);
var state_29367__$1 = state_29367;
var statearr_29392_29454 = state_29367__$1;
(statearr_29392_29454[(2)] = inst_29336);

(statearr_29392_29454[(1)] = (10));


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
});})(c__28842__auto__,jobs,results,process,async))
;
return ((function (switch__28730__auto__,c__28842__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0 = (function (){
var statearr_29396 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__);

(statearr_29396[(1)] = (1));

return statearr_29396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1 = (function (state_29367){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_29367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e29397){if((e29397 instanceof Object)){
var ex__28734__auto__ = e29397;
var statearr_29398_29455 = state_29367;
(statearr_29398_29455[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29456 = state_29367;
state_29367 = G__29456;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__ = function(state_29367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1.call(this,state_29367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28731__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto__,jobs,results,process,async))
})();
var state__28844__auto__ = (function (){var statearr_29399 = f__28843__auto__.call(null);
(statearr_29399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto__);

return statearr_29399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto__,jobs,results,process,async))
);

return c__28842__auto__;
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
var args29457 = [];
var len__27054__auto___29460 = arguments.length;
var i__27055__auto___29461 = (0);
while(true){
if((i__27055__auto___29461 < len__27054__auto___29460)){
args29457.push((arguments[i__27055__auto___29461]));

var G__29462 = (i__27055__auto___29461 + (1));
i__27055__auto___29461 = G__29462;
continue;
} else {
}
break;
}

var G__29459 = args29457.length;
switch (G__29459) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29457.length)].join('')));

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
var args29464 = [];
var len__27054__auto___29467 = arguments.length;
var i__27055__auto___29468 = (0);
while(true){
if((i__27055__auto___29468 < len__27054__auto___29467)){
args29464.push((arguments[i__27055__auto___29468]));

var G__29469 = (i__27055__auto___29468 + (1));
i__27055__auto___29468 = G__29469;
continue;
} else {
}
break;
}

var G__29466 = args29464.length;
switch (G__29466) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29464.length)].join('')));

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
var args29471 = [];
var len__27054__auto___29524 = arguments.length;
var i__27055__auto___29525 = (0);
while(true){
if((i__27055__auto___29525 < len__27054__auto___29524)){
args29471.push((arguments[i__27055__auto___29525]));

var G__29526 = (i__27055__auto___29525 + (1));
i__27055__auto___29525 = G__29526;
continue;
} else {
}
break;
}

var G__29473 = args29471.length;
switch (G__29473) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29471.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28842__auto___29528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___29528,tc,fc){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___29528,tc,fc){
return (function (state_29499){
var state_val_29500 = (state_29499[(1)]);
if((state_val_29500 === (7))){
var inst_29495 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
var statearr_29501_29529 = state_29499__$1;
(statearr_29501_29529[(2)] = inst_29495);

(statearr_29501_29529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (1))){
var state_29499__$1 = state_29499;
var statearr_29502_29530 = state_29499__$1;
(statearr_29502_29530[(2)] = null);

(statearr_29502_29530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (4))){
var inst_29476 = (state_29499[(7)]);
var inst_29476__$1 = (state_29499[(2)]);
var inst_29477 = (inst_29476__$1 == null);
var state_29499__$1 = (function (){var statearr_29503 = state_29499;
(statearr_29503[(7)] = inst_29476__$1);

return statearr_29503;
})();
if(cljs.core.truth_(inst_29477)){
var statearr_29504_29531 = state_29499__$1;
(statearr_29504_29531[(1)] = (5));

} else {
var statearr_29505_29532 = state_29499__$1;
(statearr_29505_29532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (13))){
var state_29499__$1 = state_29499;
var statearr_29506_29533 = state_29499__$1;
(statearr_29506_29533[(2)] = null);

(statearr_29506_29533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (6))){
var inst_29476 = (state_29499[(7)]);
var inst_29482 = p.call(null,inst_29476);
var state_29499__$1 = state_29499;
if(cljs.core.truth_(inst_29482)){
var statearr_29507_29534 = state_29499__$1;
(statearr_29507_29534[(1)] = (9));

} else {
var statearr_29508_29535 = state_29499__$1;
(statearr_29508_29535[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (3))){
var inst_29497 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29499__$1,inst_29497);
} else {
if((state_val_29500 === (12))){
var state_29499__$1 = state_29499;
var statearr_29509_29536 = state_29499__$1;
(statearr_29509_29536[(2)] = null);

(statearr_29509_29536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (2))){
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29499__$1,(4),ch);
} else {
if((state_val_29500 === (11))){
var inst_29476 = (state_29499[(7)]);
var inst_29486 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29499__$1,(8),inst_29486,inst_29476);
} else {
if((state_val_29500 === (9))){
var state_29499__$1 = state_29499;
var statearr_29510_29537 = state_29499__$1;
(statearr_29510_29537[(2)] = tc);

(statearr_29510_29537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (5))){
var inst_29479 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29480 = cljs.core.async.close_BANG_.call(null,fc);
var state_29499__$1 = (function (){var statearr_29511 = state_29499;
(statearr_29511[(8)] = inst_29479);

return statearr_29511;
})();
var statearr_29512_29538 = state_29499__$1;
(statearr_29512_29538[(2)] = inst_29480);

(statearr_29512_29538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (14))){
var inst_29493 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
var statearr_29513_29539 = state_29499__$1;
(statearr_29513_29539[(2)] = inst_29493);

(statearr_29513_29539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (10))){
var state_29499__$1 = state_29499;
var statearr_29514_29540 = state_29499__$1;
(statearr_29514_29540[(2)] = fc);

(statearr_29514_29540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (8))){
var inst_29488 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
if(cljs.core.truth_(inst_29488)){
var statearr_29515_29541 = state_29499__$1;
(statearr_29515_29541[(1)] = (12));

} else {
var statearr_29516_29542 = state_29499__$1;
(statearr_29516_29542[(1)] = (13));

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
});})(c__28842__auto___29528,tc,fc))
;
return ((function (switch__28730__auto__,c__28842__auto___29528,tc,fc){
return (function() {
var cljs$core$async$state_machine__28731__auto__ = null;
var cljs$core$async$state_machine__28731__auto____0 = (function (){
var statearr_29520 = [null,null,null,null,null,null,null,null,null];
(statearr_29520[(0)] = cljs$core$async$state_machine__28731__auto__);

(statearr_29520[(1)] = (1));

return statearr_29520;
});
var cljs$core$async$state_machine__28731__auto____1 = (function (state_29499){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_29499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e29521){if((e29521 instanceof Object)){
var ex__28734__auto__ = e29521;
var statearr_29522_29543 = state_29499;
(statearr_29522_29543[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29544 = state_29499;
state_29499 = G__29544;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$state_machine__28731__auto__ = function(state_29499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28731__auto____1.call(this,state_29499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28731__auto____0;
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28731__auto____1;
return cljs$core$async$state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___29528,tc,fc))
})();
var state__28844__auto__ = (function (){var statearr_29523 = f__28843__auto__.call(null);
(statearr_29523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___29528);

return statearr_29523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___29528,tc,fc))
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
var c__28842__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto__){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto__){
return (function (state_29608){
var state_val_29609 = (state_29608[(1)]);
if((state_val_29609 === (7))){
var inst_29604 = (state_29608[(2)]);
var state_29608__$1 = state_29608;
var statearr_29610_29631 = state_29608__$1;
(statearr_29610_29631[(2)] = inst_29604);

(statearr_29610_29631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (1))){
var inst_29588 = init;
var state_29608__$1 = (function (){var statearr_29611 = state_29608;
(statearr_29611[(7)] = inst_29588);

return statearr_29611;
})();
var statearr_29612_29632 = state_29608__$1;
(statearr_29612_29632[(2)] = null);

(statearr_29612_29632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (4))){
var inst_29591 = (state_29608[(8)]);
var inst_29591__$1 = (state_29608[(2)]);
var inst_29592 = (inst_29591__$1 == null);
var state_29608__$1 = (function (){var statearr_29613 = state_29608;
(statearr_29613[(8)] = inst_29591__$1);

return statearr_29613;
})();
if(cljs.core.truth_(inst_29592)){
var statearr_29614_29633 = state_29608__$1;
(statearr_29614_29633[(1)] = (5));

} else {
var statearr_29615_29634 = state_29608__$1;
(statearr_29615_29634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (6))){
var inst_29591 = (state_29608[(8)]);
var inst_29588 = (state_29608[(7)]);
var inst_29595 = (state_29608[(9)]);
var inst_29595__$1 = f.call(null,inst_29588,inst_29591);
var inst_29596 = cljs.core.reduced_QMARK_.call(null,inst_29595__$1);
var state_29608__$1 = (function (){var statearr_29616 = state_29608;
(statearr_29616[(9)] = inst_29595__$1);

return statearr_29616;
})();
if(inst_29596){
var statearr_29617_29635 = state_29608__$1;
(statearr_29617_29635[(1)] = (8));

} else {
var statearr_29618_29636 = state_29608__$1;
(statearr_29618_29636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (3))){
var inst_29606 = (state_29608[(2)]);
var state_29608__$1 = state_29608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29608__$1,inst_29606);
} else {
if((state_val_29609 === (2))){
var state_29608__$1 = state_29608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29608__$1,(4),ch);
} else {
if((state_val_29609 === (9))){
var inst_29595 = (state_29608[(9)]);
var inst_29588 = inst_29595;
var state_29608__$1 = (function (){var statearr_29619 = state_29608;
(statearr_29619[(7)] = inst_29588);

return statearr_29619;
})();
var statearr_29620_29637 = state_29608__$1;
(statearr_29620_29637[(2)] = null);

(statearr_29620_29637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (5))){
var inst_29588 = (state_29608[(7)]);
var state_29608__$1 = state_29608;
var statearr_29621_29638 = state_29608__$1;
(statearr_29621_29638[(2)] = inst_29588);

(statearr_29621_29638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (10))){
var inst_29602 = (state_29608[(2)]);
var state_29608__$1 = state_29608;
var statearr_29622_29639 = state_29608__$1;
(statearr_29622_29639[(2)] = inst_29602);

(statearr_29622_29639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (8))){
var inst_29595 = (state_29608[(9)]);
var inst_29598 = cljs.core.deref.call(null,inst_29595);
var state_29608__$1 = state_29608;
var statearr_29623_29640 = state_29608__$1;
(statearr_29623_29640[(2)] = inst_29598);

(statearr_29623_29640[(1)] = (10));


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
});})(c__28842__auto__))
;
return ((function (switch__28730__auto__,c__28842__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28731__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28731__auto____0 = (function (){
var statearr_29627 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29627[(0)] = cljs$core$async$reduce_$_state_machine__28731__auto__);

(statearr_29627[(1)] = (1));

return statearr_29627;
});
var cljs$core$async$reduce_$_state_machine__28731__auto____1 = (function (state_29608){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_29608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e29628){if((e29628 instanceof Object)){
var ex__28734__auto__ = e29628;
var statearr_29629_29641 = state_29608;
(statearr_29629_29641[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29642 = state_29608;
state_29608 = G__29642;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28731__auto__ = function(state_29608){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28731__auto____1.call(this,state_29608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28731__auto____0;
cljs$core$async$reduce_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28731__auto____1;
return cljs$core$async$reduce_$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto__))
})();
var state__28844__auto__ = (function (){var statearr_29630 = f__28843__auto__.call(null);
(statearr_29630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto__);

return statearr_29630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto__))
);

return c__28842__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28842__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto__,f__$1){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto__,f__$1){
return (function (state_29662){
var state_val_29663 = (state_29662[(1)]);
if((state_val_29663 === (1))){
var inst_29657 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29662__$1 = state_29662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29662__$1,(2),inst_29657);
} else {
if((state_val_29663 === (2))){
var inst_29659 = (state_29662[(2)]);
var inst_29660 = f__$1.call(null,inst_29659);
var state_29662__$1 = state_29662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29662__$1,inst_29660);
} else {
return null;
}
}
});})(c__28842__auto__,f__$1))
;
return ((function (switch__28730__auto__,c__28842__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28731__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28731__auto____0 = (function (){
var statearr_29667 = [null,null,null,null,null,null,null];
(statearr_29667[(0)] = cljs$core$async$transduce_$_state_machine__28731__auto__);

(statearr_29667[(1)] = (1));

return statearr_29667;
});
var cljs$core$async$transduce_$_state_machine__28731__auto____1 = (function (state_29662){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_29662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e29668){if((e29668 instanceof Object)){
var ex__28734__auto__ = e29668;
var statearr_29669_29671 = state_29662;
(statearr_29669_29671[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29672 = state_29662;
state_29662 = G__29672;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28731__auto__ = function(state_29662){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28731__auto____1.call(this,state_29662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28731__auto____0;
cljs$core$async$transduce_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28731__auto____1;
return cljs$core$async$transduce_$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto__,f__$1))
})();
var state__28844__auto__ = (function (){var statearr_29670 = f__28843__auto__.call(null);
(statearr_29670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto__);

return statearr_29670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto__,f__$1))
);

return c__28842__auto__;
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
var args29673 = [];
var len__27054__auto___29725 = arguments.length;
var i__27055__auto___29726 = (0);
while(true){
if((i__27055__auto___29726 < len__27054__auto___29725)){
args29673.push((arguments[i__27055__auto___29726]));

var G__29727 = (i__27055__auto___29726 + (1));
i__27055__auto___29726 = G__29727;
continue;
} else {
}
break;
}

var G__29675 = args29673.length;
switch (G__29675) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29673.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28842__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto__){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto__){
return (function (state_29700){
var state_val_29701 = (state_29700[(1)]);
if((state_val_29701 === (7))){
var inst_29682 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29702_29729 = state_29700__$1;
(statearr_29702_29729[(2)] = inst_29682);

(statearr_29702_29729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (1))){
var inst_29676 = cljs.core.seq.call(null,coll);
var inst_29677 = inst_29676;
var state_29700__$1 = (function (){var statearr_29703 = state_29700;
(statearr_29703[(7)] = inst_29677);

return statearr_29703;
})();
var statearr_29704_29730 = state_29700__$1;
(statearr_29704_29730[(2)] = null);

(statearr_29704_29730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (4))){
var inst_29677 = (state_29700[(7)]);
var inst_29680 = cljs.core.first.call(null,inst_29677);
var state_29700__$1 = state_29700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29700__$1,(7),ch,inst_29680);
} else {
if((state_val_29701 === (13))){
var inst_29694 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29705_29731 = state_29700__$1;
(statearr_29705_29731[(2)] = inst_29694);

(statearr_29705_29731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (6))){
var inst_29685 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
if(cljs.core.truth_(inst_29685)){
var statearr_29706_29732 = state_29700__$1;
(statearr_29706_29732[(1)] = (8));

} else {
var statearr_29707_29733 = state_29700__$1;
(statearr_29707_29733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (3))){
var inst_29698 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29700__$1,inst_29698);
} else {
if((state_val_29701 === (12))){
var state_29700__$1 = state_29700;
var statearr_29708_29734 = state_29700__$1;
(statearr_29708_29734[(2)] = null);

(statearr_29708_29734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (2))){
var inst_29677 = (state_29700[(7)]);
var state_29700__$1 = state_29700;
if(cljs.core.truth_(inst_29677)){
var statearr_29709_29735 = state_29700__$1;
(statearr_29709_29735[(1)] = (4));

} else {
var statearr_29710_29736 = state_29700__$1;
(statearr_29710_29736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (11))){
var inst_29691 = cljs.core.async.close_BANG_.call(null,ch);
var state_29700__$1 = state_29700;
var statearr_29711_29737 = state_29700__$1;
(statearr_29711_29737[(2)] = inst_29691);

(statearr_29711_29737[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (9))){
var state_29700__$1 = state_29700;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29712_29738 = state_29700__$1;
(statearr_29712_29738[(1)] = (11));

} else {
var statearr_29713_29739 = state_29700__$1;
(statearr_29713_29739[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (5))){
var inst_29677 = (state_29700[(7)]);
var state_29700__$1 = state_29700;
var statearr_29714_29740 = state_29700__$1;
(statearr_29714_29740[(2)] = inst_29677);

(statearr_29714_29740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (10))){
var inst_29696 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29715_29741 = state_29700__$1;
(statearr_29715_29741[(2)] = inst_29696);

(statearr_29715_29741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (8))){
var inst_29677 = (state_29700[(7)]);
var inst_29687 = cljs.core.next.call(null,inst_29677);
var inst_29677__$1 = inst_29687;
var state_29700__$1 = (function (){var statearr_29716 = state_29700;
(statearr_29716[(7)] = inst_29677__$1);

return statearr_29716;
})();
var statearr_29717_29742 = state_29700__$1;
(statearr_29717_29742[(2)] = null);

(statearr_29717_29742[(1)] = (2));


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
});})(c__28842__auto__))
;
return ((function (switch__28730__auto__,c__28842__auto__){
return (function() {
var cljs$core$async$state_machine__28731__auto__ = null;
var cljs$core$async$state_machine__28731__auto____0 = (function (){
var statearr_29721 = [null,null,null,null,null,null,null,null];
(statearr_29721[(0)] = cljs$core$async$state_machine__28731__auto__);

(statearr_29721[(1)] = (1));

return statearr_29721;
});
var cljs$core$async$state_machine__28731__auto____1 = (function (state_29700){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_29700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e29722){if((e29722 instanceof Object)){
var ex__28734__auto__ = e29722;
var statearr_29723_29743 = state_29700;
(statearr_29723_29743[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29744 = state_29700;
state_29700 = G__29744;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$state_machine__28731__auto__ = function(state_29700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28731__auto____1.call(this,state_29700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28731__auto____0;
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28731__auto____1;
return cljs$core$async$state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto__))
})();
var state__28844__auto__ = (function (){var statearr_29724 = f__28843__auto__.call(null);
(statearr_29724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto__);

return statearr_29724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto__))
);

return c__28842__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async29970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29970 = (function (mult,ch,cs,meta29971){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29971 = meta29971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29972,meta29971__$1){
var self__ = this;
var _29972__$1 = this;
return (new cljs.core.async.t_cljs$core$async29970(self__.mult,self__.ch,self__.cs,meta29971__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29972){
var self__ = this;
var _29972__$1 = this;
return self__.meta29971;
});})(cs))
;

cljs.core.async.t_cljs$core$async29970.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29970.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29970.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29970.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29970.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29970.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29971","meta29971",442955594,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29970";

cljs.core.async.t_cljs$core$async29970.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29970");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29970 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29970(mult__$1,ch__$1,cs__$1,meta29971){
return (new cljs.core.async.t_cljs$core$async29970(mult__$1,ch__$1,cs__$1,meta29971));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29970(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28842__auto___30195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___30195,cs,m,dchan,dctr,done){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___30195,cs,m,dchan,dctr,done){
return (function (state_30107){
var state_val_30108 = (state_30107[(1)]);
if((state_val_30108 === (7))){
var inst_30103 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30109_30196 = state_30107__$1;
(statearr_30109_30196[(2)] = inst_30103);

(statearr_30109_30196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (20))){
var inst_30006 = (state_30107[(7)]);
var inst_30018 = cljs.core.first.call(null,inst_30006);
var inst_30019 = cljs.core.nth.call(null,inst_30018,(0),null);
var inst_30020 = cljs.core.nth.call(null,inst_30018,(1),null);
var state_30107__$1 = (function (){var statearr_30110 = state_30107;
(statearr_30110[(8)] = inst_30019);

return statearr_30110;
})();
if(cljs.core.truth_(inst_30020)){
var statearr_30111_30197 = state_30107__$1;
(statearr_30111_30197[(1)] = (22));

} else {
var statearr_30112_30198 = state_30107__$1;
(statearr_30112_30198[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (27))){
var inst_30050 = (state_30107[(9)]);
var inst_29975 = (state_30107[(10)]);
var inst_30055 = (state_30107[(11)]);
var inst_30048 = (state_30107[(12)]);
var inst_30055__$1 = cljs.core._nth.call(null,inst_30048,inst_30050);
var inst_30056 = cljs.core.async.put_BANG_.call(null,inst_30055__$1,inst_29975,done);
var state_30107__$1 = (function (){var statearr_30113 = state_30107;
(statearr_30113[(11)] = inst_30055__$1);

return statearr_30113;
})();
if(cljs.core.truth_(inst_30056)){
var statearr_30114_30199 = state_30107__$1;
(statearr_30114_30199[(1)] = (30));

} else {
var statearr_30115_30200 = state_30107__$1;
(statearr_30115_30200[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (1))){
var state_30107__$1 = state_30107;
var statearr_30116_30201 = state_30107__$1;
(statearr_30116_30201[(2)] = null);

(statearr_30116_30201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (24))){
var inst_30006 = (state_30107[(7)]);
var inst_30025 = (state_30107[(2)]);
var inst_30026 = cljs.core.next.call(null,inst_30006);
var inst_29984 = inst_30026;
var inst_29985 = null;
var inst_29986 = (0);
var inst_29987 = (0);
var state_30107__$1 = (function (){var statearr_30117 = state_30107;
(statearr_30117[(13)] = inst_29986);

(statearr_30117[(14)] = inst_30025);

(statearr_30117[(15)] = inst_29987);

(statearr_30117[(16)] = inst_29985);

(statearr_30117[(17)] = inst_29984);

return statearr_30117;
})();
var statearr_30118_30202 = state_30107__$1;
(statearr_30118_30202[(2)] = null);

(statearr_30118_30202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (39))){
var state_30107__$1 = state_30107;
var statearr_30122_30203 = state_30107__$1;
(statearr_30122_30203[(2)] = null);

(statearr_30122_30203[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (4))){
var inst_29975 = (state_30107[(10)]);
var inst_29975__$1 = (state_30107[(2)]);
var inst_29976 = (inst_29975__$1 == null);
var state_30107__$1 = (function (){var statearr_30123 = state_30107;
(statearr_30123[(10)] = inst_29975__$1);

return statearr_30123;
})();
if(cljs.core.truth_(inst_29976)){
var statearr_30124_30204 = state_30107__$1;
(statearr_30124_30204[(1)] = (5));

} else {
var statearr_30125_30205 = state_30107__$1;
(statearr_30125_30205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (15))){
var inst_29986 = (state_30107[(13)]);
var inst_29987 = (state_30107[(15)]);
var inst_29985 = (state_30107[(16)]);
var inst_29984 = (state_30107[(17)]);
var inst_30002 = (state_30107[(2)]);
var inst_30003 = (inst_29987 + (1));
var tmp30119 = inst_29986;
var tmp30120 = inst_29985;
var tmp30121 = inst_29984;
var inst_29984__$1 = tmp30121;
var inst_29985__$1 = tmp30120;
var inst_29986__$1 = tmp30119;
var inst_29987__$1 = inst_30003;
var state_30107__$1 = (function (){var statearr_30126 = state_30107;
(statearr_30126[(13)] = inst_29986__$1);

(statearr_30126[(18)] = inst_30002);

(statearr_30126[(15)] = inst_29987__$1);

(statearr_30126[(16)] = inst_29985__$1);

(statearr_30126[(17)] = inst_29984__$1);

return statearr_30126;
})();
var statearr_30127_30206 = state_30107__$1;
(statearr_30127_30206[(2)] = null);

(statearr_30127_30206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (21))){
var inst_30029 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30131_30207 = state_30107__$1;
(statearr_30131_30207[(2)] = inst_30029);

(statearr_30131_30207[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (31))){
var inst_30055 = (state_30107[(11)]);
var inst_30059 = done.call(null,null);
var inst_30060 = cljs.core.async.untap_STAR_.call(null,m,inst_30055);
var state_30107__$1 = (function (){var statearr_30132 = state_30107;
(statearr_30132[(19)] = inst_30059);

return statearr_30132;
})();
var statearr_30133_30208 = state_30107__$1;
(statearr_30133_30208[(2)] = inst_30060);

(statearr_30133_30208[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (32))){
var inst_30050 = (state_30107[(9)]);
var inst_30047 = (state_30107[(20)]);
var inst_30049 = (state_30107[(21)]);
var inst_30048 = (state_30107[(12)]);
var inst_30062 = (state_30107[(2)]);
var inst_30063 = (inst_30050 + (1));
var tmp30128 = inst_30047;
var tmp30129 = inst_30049;
var tmp30130 = inst_30048;
var inst_30047__$1 = tmp30128;
var inst_30048__$1 = tmp30130;
var inst_30049__$1 = tmp30129;
var inst_30050__$1 = inst_30063;
var state_30107__$1 = (function (){var statearr_30134 = state_30107;
(statearr_30134[(9)] = inst_30050__$1);

(statearr_30134[(20)] = inst_30047__$1);

(statearr_30134[(21)] = inst_30049__$1);

(statearr_30134[(12)] = inst_30048__$1);

(statearr_30134[(22)] = inst_30062);

return statearr_30134;
})();
var statearr_30135_30209 = state_30107__$1;
(statearr_30135_30209[(2)] = null);

(statearr_30135_30209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (40))){
var inst_30075 = (state_30107[(23)]);
var inst_30079 = done.call(null,null);
var inst_30080 = cljs.core.async.untap_STAR_.call(null,m,inst_30075);
var state_30107__$1 = (function (){var statearr_30136 = state_30107;
(statearr_30136[(24)] = inst_30079);

return statearr_30136;
})();
var statearr_30137_30210 = state_30107__$1;
(statearr_30137_30210[(2)] = inst_30080);

(statearr_30137_30210[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (33))){
var inst_30066 = (state_30107[(25)]);
var inst_30068 = cljs.core.chunked_seq_QMARK_.call(null,inst_30066);
var state_30107__$1 = state_30107;
if(inst_30068){
var statearr_30138_30211 = state_30107__$1;
(statearr_30138_30211[(1)] = (36));

} else {
var statearr_30139_30212 = state_30107__$1;
(statearr_30139_30212[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (13))){
var inst_29996 = (state_30107[(26)]);
var inst_29999 = cljs.core.async.close_BANG_.call(null,inst_29996);
var state_30107__$1 = state_30107;
var statearr_30140_30213 = state_30107__$1;
(statearr_30140_30213[(2)] = inst_29999);

(statearr_30140_30213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (22))){
var inst_30019 = (state_30107[(8)]);
var inst_30022 = cljs.core.async.close_BANG_.call(null,inst_30019);
var state_30107__$1 = state_30107;
var statearr_30141_30214 = state_30107__$1;
(statearr_30141_30214[(2)] = inst_30022);

(statearr_30141_30214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (36))){
var inst_30066 = (state_30107[(25)]);
var inst_30070 = cljs.core.chunk_first.call(null,inst_30066);
var inst_30071 = cljs.core.chunk_rest.call(null,inst_30066);
var inst_30072 = cljs.core.count.call(null,inst_30070);
var inst_30047 = inst_30071;
var inst_30048 = inst_30070;
var inst_30049 = inst_30072;
var inst_30050 = (0);
var state_30107__$1 = (function (){var statearr_30142 = state_30107;
(statearr_30142[(9)] = inst_30050);

(statearr_30142[(20)] = inst_30047);

(statearr_30142[(21)] = inst_30049);

(statearr_30142[(12)] = inst_30048);

return statearr_30142;
})();
var statearr_30143_30215 = state_30107__$1;
(statearr_30143_30215[(2)] = null);

(statearr_30143_30215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (41))){
var inst_30066 = (state_30107[(25)]);
var inst_30082 = (state_30107[(2)]);
var inst_30083 = cljs.core.next.call(null,inst_30066);
var inst_30047 = inst_30083;
var inst_30048 = null;
var inst_30049 = (0);
var inst_30050 = (0);
var state_30107__$1 = (function (){var statearr_30144 = state_30107;
(statearr_30144[(9)] = inst_30050);

(statearr_30144[(20)] = inst_30047);

(statearr_30144[(27)] = inst_30082);

(statearr_30144[(21)] = inst_30049);

(statearr_30144[(12)] = inst_30048);

return statearr_30144;
})();
var statearr_30145_30216 = state_30107__$1;
(statearr_30145_30216[(2)] = null);

(statearr_30145_30216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (43))){
var state_30107__$1 = state_30107;
var statearr_30146_30217 = state_30107__$1;
(statearr_30146_30217[(2)] = null);

(statearr_30146_30217[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (29))){
var inst_30091 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30147_30218 = state_30107__$1;
(statearr_30147_30218[(2)] = inst_30091);

(statearr_30147_30218[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (44))){
var inst_30100 = (state_30107[(2)]);
var state_30107__$1 = (function (){var statearr_30148 = state_30107;
(statearr_30148[(28)] = inst_30100);

return statearr_30148;
})();
var statearr_30149_30219 = state_30107__$1;
(statearr_30149_30219[(2)] = null);

(statearr_30149_30219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (6))){
var inst_30039 = (state_30107[(29)]);
var inst_30038 = cljs.core.deref.call(null,cs);
var inst_30039__$1 = cljs.core.keys.call(null,inst_30038);
var inst_30040 = cljs.core.count.call(null,inst_30039__$1);
var inst_30041 = cljs.core.reset_BANG_.call(null,dctr,inst_30040);
var inst_30046 = cljs.core.seq.call(null,inst_30039__$1);
var inst_30047 = inst_30046;
var inst_30048 = null;
var inst_30049 = (0);
var inst_30050 = (0);
var state_30107__$1 = (function (){var statearr_30150 = state_30107;
(statearr_30150[(30)] = inst_30041);

(statearr_30150[(9)] = inst_30050);

(statearr_30150[(20)] = inst_30047);

(statearr_30150[(29)] = inst_30039__$1);

(statearr_30150[(21)] = inst_30049);

(statearr_30150[(12)] = inst_30048);

return statearr_30150;
})();
var statearr_30151_30220 = state_30107__$1;
(statearr_30151_30220[(2)] = null);

(statearr_30151_30220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (28))){
var inst_30066 = (state_30107[(25)]);
var inst_30047 = (state_30107[(20)]);
var inst_30066__$1 = cljs.core.seq.call(null,inst_30047);
var state_30107__$1 = (function (){var statearr_30152 = state_30107;
(statearr_30152[(25)] = inst_30066__$1);

return statearr_30152;
})();
if(inst_30066__$1){
var statearr_30153_30221 = state_30107__$1;
(statearr_30153_30221[(1)] = (33));

} else {
var statearr_30154_30222 = state_30107__$1;
(statearr_30154_30222[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (25))){
var inst_30050 = (state_30107[(9)]);
var inst_30049 = (state_30107[(21)]);
var inst_30052 = (inst_30050 < inst_30049);
var inst_30053 = inst_30052;
var state_30107__$1 = state_30107;
if(cljs.core.truth_(inst_30053)){
var statearr_30155_30223 = state_30107__$1;
(statearr_30155_30223[(1)] = (27));

} else {
var statearr_30156_30224 = state_30107__$1;
(statearr_30156_30224[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (34))){
var state_30107__$1 = state_30107;
var statearr_30157_30225 = state_30107__$1;
(statearr_30157_30225[(2)] = null);

(statearr_30157_30225[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (17))){
var state_30107__$1 = state_30107;
var statearr_30158_30226 = state_30107__$1;
(statearr_30158_30226[(2)] = null);

(statearr_30158_30226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (3))){
var inst_30105 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30107__$1,inst_30105);
} else {
if((state_val_30108 === (12))){
var inst_30034 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30159_30227 = state_30107__$1;
(statearr_30159_30227[(2)] = inst_30034);

(statearr_30159_30227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (2))){
var state_30107__$1 = state_30107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30107__$1,(4),ch);
} else {
if((state_val_30108 === (23))){
var state_30107__$1 = state_30107;
var statearr_30160_30228 = state_30107__$1;
(statearr_30160_30228[(2)] = null);

(statearr_30160_30228[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (35))){
var inst_30089 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30161_30229 = state_30107__$1;
(statearr_30161_30229[(2)] = inst_30089);

(statearr_30161_30229[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (19))){
var inst_30006 = (state_30107[(7)]);
var inst_30010 = cljs.core.chunk_first.call(null,inst_30006);
var inst_30011 = cljs.core.chunk_rest.call(null,inst_30006);
var inst_30012 = cljs.core.count.call(null,inst_30010);
var inst_29984 = inst_30011;
var inst_29985 = inst_30010;
var inst_29986 = inst_30012;
var inst_29987 = (0);
var state_30107__$1 = (function (){var statearr_30162 = state_30107;
(statearr_30162[(13)] = inst_29986);

(statearr_30162[(15)] = inst_29987);

(statearr_30162[(16)] = inst_29985);

(statearr_30162[(17)] = inst_29984);

return statearr_30162;
})();
var statearr_30163_30230 = state_30107__$1;
(statearr_30163_30230[(2)] = null);

(statearr_30163_30230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (11))){
var inst_30006 = (state_30107[(7)]);
var inst_29984 = (state_30107[(17)]);
var inst_30006__$1 = cljs.core.seq.call(null,inst_29984);
var state_30107__$1 = (function (){var statearr_30164 = state_30107;
(statearr_30164[(7)] = inst_30006__$1);

return statearr_30164;
})();
if(inst_30006__$1){
var statearr_30165_30231 = state_30107__$1;
(statearr_30165_30231[(1)] = (16));

} else {
var statearr_30166_30232 = state_30107__$1;
(statearr_30166_30232[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (9))){
var inst_30036 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30167_30233 = state_30107__$1;
(statearr_30167_30233[(2)] = inst_30036);

(statearr_30167_30233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (5))){
var inst_29982 = cljs.core.deref.call(null,cs);
var inst_29983 = cljs.core.seq.call(null,inst_29982);
var inst_29984 = inst_29983;
var inst_29985 = null;
var inst_29986 = (0);
var inst_29987 = (0);
var state_30107__$1 = (function (){var statearr_30168 = state_30107;
(statearr_30168[(13)] = inst_29986);

(statearr_30168[(15)] = inst_29987);

(statearr_30168[(16)] = inst_29985);

(statearr_30168[(17)] = inst_29984);

return statearr_30168;
})();
var statearr_30169_30234 = state_30107__$1;
(statearr_30169_30234[(2)] = null);

(statearr_30169_30234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (14))){
var state_30107__$1 = state_30107;
var statearr_30170_30235 = state_30107__$1;
(statearr_30170_30235[(2)] = null);

(statearr_30170_30235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (45))){
var inst_30097 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30171_30236 = state_30107__$1;
(statearr_30171_30236[(2)] = inst_30097);

(statearr_30171_30236[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (26))){
var inst_30039 = (state_30107[(29)]);
var inst_30093 = (state_30107[(2)]);
var inst_30094 = cljs.core.seq.call(null,inst_30039);
var state_30107__$1 = (function (){var statearr_30172 = state_30107;
(statearr_30172[(31)] = inst_30093);

return statearr_30172;
})();
if(inst_30094){
var statearr_30173_30237 = state_30107__$1;
(statearr_30173_30237[(1)] = (42));

} else {
var statearr_30174_30238 = state_30107__$1;
(statearr_30174_30238[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (16))){
var inst_30006 = (state_30107[(7)]);
var inst_30008 = cljs.core.chunked_seq_QMARK_.call(null,inst_30006);
var state_30107__$1 = state_30107;
if(inst_30008){
var statearr_30175_30239 = state_30107__$1;
(statearr_30175_30239[(1)] = (19));

} else {
var statearr_30176_30240 = state_30107__$1;
(statearr_30176_30240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (38))){
var inst_30086 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30177_30241 = state_30107__$1;
(statearr_30177_30241[(2)] = inst_30086);

(statearr_30177_30241[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (30))){
var state_30107__$1 = state_30107;
var statearr_30178_30242 = state_30107__$1;
(statearr_30178_30242[(2)] = null);

(statearr_30178_30242[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (10))){
var inst_29987 = (state_30107[(15)]);
var inst_29985 = (state_30107[(16)]);
var inst_29995 = cljs.core._nth.call(null,inst_29985,inst_29987);
var inst_29996 = cljs.core.nth.call(null,inst_29995,(0),null);
var inst_29997 = cljs.core.nth.call(null,inst_29995,(1),null);
var state_30107__$1 = (function (){var statearr_30179 = state_30107;
(statearr_30179[(26)] = inst_29996);

return statearr_30179;
})();
if(cljs.core.truth_(inst_29997)){
var statearr_30180_30243 = state_30107__$1;
(statearr_30180_30243[(1)] = (13));

} else {
var statearr_30181_30244 = state_30107__$1;
(statearr_30181_30244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (18))){
var inst_30032 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30182_30245 = state_30107__$1;
(statearr_30182_30245[(2)] = inst_30032);

(statearr_30182_30245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (42))){
var state_30107__$1 = state_30107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30107__$1,(45),dchan);
} else {
if((state_val_30108 === (37))){
var inst_30066 = (state_30107[(25)]);
var inst_29975 = (state_30107[(10)]);
var inst_30075 = (state_30107[(23)]);
var inst_30075__$1 = cljs.core.first.call(null,inst_30066);
var inst_30076 = cljs.core.async.put_BANG_.call(null,inst_30075__$1,inst_29975,done);
var state_30107__$1 = (function (){var statearr_30183 = state_30107;
(statearr_30183[(23)] = inst_30075__$1);

return statearr_30183;
})();
if(cljs.core.truth_(inst_30076)){
var statearr_30184_30246 = state_30107__$1;
(statearr_30184_30246[(1)] = (39));

} else {
var statearr_30185_30247 = state_30107__$1;
(statearr_30185_30247[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (8))){
var inst_29986 = (state_30107[(13)]);
var inst_29987 = (state_30107[(15)]);
var inst_29989 = (inst_29987 < inst_29986);
var inst_29990 = inst_29989;
var state_30107__$1 = state_30107;
if(cljs.core.truth_(inst_29990)){
var statearr_30186_30248 = state_30107__$1;
(statearr_30186_30248[(1)] = (10));

} else {
var statearr_30187_30249 = state_30107__$1;
(statearr_30187_30249[(1)] = (11));

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
});})(c__28842__auto___30195,cs,m,dchan,dctr,done))
;
return ((function (switch__28730__auto__,c__28842__auto___30195,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28731__auto__ = null;
var cljs$core$async$mult_$_state_machine__28731__auto____0 = (function (){
var statearr_30191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30191[(0)] = cljs$core$async$mult_$_state_machine__28731__auto__);

(statearr_30191[(1)] = (1));

return statearr_30191;
});
var cljs$core$async$mult_$_state_machine__28731__auto____1 = (function (state_30107){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_30107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e30192){if((e30192 instanceof Object)){
var ex__28734__auto__ = e30192;
var statearr_30193_30250 = state_30107;
(statearr_30193_30250[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30251 = state_30107;
state_30107 = G__30251;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28731__auto__ = function(state_30107){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28731__auto____1.call(this,state_30107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28731__auto____0;
cljs$core$async$mult_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28731__auto____1;
return cljs$core$async$mult_$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___30195,cs,m,dchan,dctr,done))
})();
var state__28844__auto__ = (function (){var statearr_30194 = f__28843__auto__.call(null);
(statearr_30194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___30195);

return statearr_30194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___30195,cs,m,dchan,dctr,done))
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
var args30252 = [];
var len__27054__auto___30255 = arguments.length;
var i__27055__auto___30256 = (0);
while(true){
if((i__27055__auto___30256 < len__27054__auto___30255)){
args30252.push((arguments[i__27055__auto___30256]));

var G__30257 = (i__27055__auto___30256 + (1));
i__27055__auto___30256 = G__30257;
continue;
} else {
}
break;
}

var G__30254 = args30252.length;
switch (G__30254) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30252.length)].join('')));

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
var len__27054__auto___30269 = arguments.length;
var i__27055__auto___30270 = (0);
while(true){
if((i__27055__auto___30270 < len__27054__auto___30269)){
args__27061__auto__.push((arguments[i__27055__auto___30270]));

var G__30271 = (i__27055__auto___30270 + (1));
i__27055__auto___30270 = G__30271;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30263){
var map__30264 = p__30263;
var map__30264__$1 = ((((!((map__30264 == null)))?((((map__30264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30264):map__30264);
var opts = map__30264__$1;
var statearr_30266_30272 = state;
(statearr_30266_30272[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30264,map__30264__$1,opts){
return (function (val){
var statearr_30267_30273 = state;
(statearr_30267_30273[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30264,map__30264__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30268_30274 = state;
(statearr_30268_30274[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30259){
var G__30260 = cljs.core.first.call(null,seq30259);
var seq30259__$1 = cljs.core.next.call(null,seq30259);
var G__30261 = cljs.core.first.call(null,seq30259__$1);
var seq30259__$2 = cljs.core.next.call(null,seq30259__$1);
var G__30262 = cljs.core.first.call(null,seq30259__$2);
var seq30259__$3 = cljs.core.next.call(null,seq30259__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30260,G__30261,G__30262,seq30259__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30440 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30441){
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
this.meta30441 = meta30441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30442,meta30441__$1){
var self__ = this;
var _30442__$1 = this;
return (new cljs.core.async.t_cljs$core$async30440(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30441__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30442){
var self__ = this;
var _30442__$1 = this;
return self__.meta30441;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30440.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30441","meta30441",-1013919353,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30440";

cljs.core.async.t_cljs$core$async30440.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30440");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30440 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30440(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30441){
return (new cljs.core.async.t_cljs$core$async30440(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30441));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30440(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28842__auto___30605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___30605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___30605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30542){
var state_val_30543 = (state_30542[(1)]);
if((state_val_30543 === (7))){
var inst_30458 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
var statearr_30544_30606 = state_30542__$1;
(statearr_30544_30606[(2)] = inst_30458);

(statearr_30544_30606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (20))){
var inst_30470 = (state_30542[(7)]);
var state_30542__$1 = state_30542;
var statearr_30545_30607 = state_30542__$1;
(statearr_30545_30607[(2)] = inst_30470);

(statearr_30545_30607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (27))){
var state_30542__$1 = state_30542;
var statearr_30546_30608 = state_30542__$1;
(statearr_30546_30608[(2)] = null);

(statearr_30546_30608[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (1))){
var inst_30446 = (state_30542[(8)]);
var inst_30446__$1 = calc_state.call(null);
var inst_30448 = (inst_30446__$1 == null);
var inst_30449 = cljs.core.not.call(null,inst_30448);
var state_30542__$1 = (function (){var statearr_30547 = state_30542;
(statearr_30547[(8)] = inst_30446__$1);

return statearr_30547;
})();
if(inst_30449){
var statearr_30548_30609 = state_30542__$1;
(statearr_30548_30609[(1)] = (2));

} else {
var statearr_30549_30610 = state_30542__$1;
(statearr_30549_30610[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (24))){
var inst_30516 = (state_30542[(9)]);
var inst_30502 = (state_30542[(10)]);
var inst_30493 = (state_30542[(11)]);
var inst_30516__$1 = inst_30493.call(null,inst_30502);
var state_30542__$1 = (function (){var statearr_30550 = state_30542;
(statearr_30550[(9)] = inst_30516__$1);

return statearr_30550;
})();
if(cljs.core.truth_(inst_30516__$1)){
var statearr_30551_30611 = state_30542__$1;
(statearr_30551_30611[(1)] = (29));

} else {
var statearr_30552_30612 = state_30542__$1;
(statearr_30552_30612[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (4))){
var inst_30461 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
if(cljs.core.truth_(inst_30461)){
var statearr_30553_30613 = state_30542__$1;
(statearr_30553_30613[(1)] = (8));

} else {
var statearr_30554_30614 = state_30542__$1;
(statearr_30554_30614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (15))){
var inst_30487 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
if(cljs.core.truth_(inst_30487)){
var statearr_30555_30615 = state_30542__$1;
(statearr_30555_30615[(1)] = (19));

} else {
var statearr_30556_30616 = state_30542__$1;
(statearr_30556_30616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (21))){
var inst_30492 = (state_30542[(12)]);
var inst_30492__$1 = (state_30542[(2)]);
var inst_30493 = cljs.core.get.call(null,inst_30492__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30494 = cljs.core.get.call(null,inst_30492__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30495 = cljs.core.get.call(null,inst_30492__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30542__$1 = (function (){var statearr_30557 = state_30542;
(statearr_30557[(12)] = inst_30492__$1);

(statearr_30557[(13)] = inst_30494);

(statearr_30557[(11)] = inst_30493);

return statearr_30557;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30542__$1,(22),inst_30495);
} else {
if((state_val_30543 === (31))){
var inst_30524 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
if(cljs.core.truth_(inst_30524)){
var statearr_30558_30617 = state_30542__$1;
(statearr_30558_30617[(1)] = (32));

} else {
var statearr_30559_30618 = state_30542__$1;
(statearr_30559_30618[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (32))){
var inst_30501 = (state_30542[(14)]);
var state_30542__$1 = state_30542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30542__$1,(35),out,inst_30501);
} else {
if((state_val_30543 === (33))){
var inst_30492 = (state_30542[(12)]);
var inst_30470 = inst_30492;
var state_30542__$1 = (function (){var statearr_30560 = state_30542;
(statearr_30560[(7)] = inst_30470);

return statearr_30560;
})();
var statearr_30561_30619 = state_30542__$1;
(statearr_30561_30619[(2)] = null);

(statearr_30561_30619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (13))){
var inst_30470 = (state_30542[(7)]);
var inst_30477 = inst_30470.cljs$lang$protocol_mask$partition0$;
var inst_30478 = (inst_30477 & (64));
var inst_30479 = inst_30470.cljs$core$ISeq$;
var inst_30480 = (inst_30478) || (inst_30479);
var state_30542__$1 = state_30542;
if(cljs.core.truth_(inst_30480)){
var statearr_30562_30620 = state_30542__$1;
(statearr_30562_30620[(1)] = (16));

} else {
var statearr_30563_30621 = state_30542__$1;
(statearr_30563_30621[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (22))){
var inst_30502 = (state_30542[(10)]);
var inst_30501 = (state_30542[(14)]);
var inst_30500 = (state_30542[(2)]);
var inst_30501__$1 = cljs.core.nth.call(null,inst_30500,(0),null);
var inst_30502__$1 = cljs.core.nth.call(null,inst_30500,(1),null);
var inst_30503 = (inst_30501__$1 == null);
var inst_30504 = cljs.core._EQ_.call(null,inst_30502__$1,change);
var inst_30505 = (inst_30503) || (inst_30504);
var state_30542__$1 = (function (){var statearr_30564 = state_30542;
(statearr_30564[(10)] = inst_30502__$1);

(statearr_30564[(14)] = inst_30501__$1);

return statearr_30564;
})();
if(cljs.core.truth_(inst_30505)){
var statearr_30565_30622 = state_30542__$1;
(statearr_30565_30622[(1)] = (23));

} else {
var statearr_30566_30623 = state_30542__$1;
(statearr_30566_30623[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (36))){
var inst_30492 = (state_30542[(12)]);
var inst_30470 = inst_30492;
var state_30542__$1 = (function (){var statearr_30567 = state_30542;
(statearr_30567[(7)] = inst_30470);

return statearr_30567;
})();
var statearr_30568_30624 = state_30542__$1;
(statearr_30568_30624[(2)] = null);

(statearr_30568_30624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (29))){
var inst_30516 = (state_30542[(9)]);
var state_30542__$1 = state_30542;
var statearr_30569_30625 = state_30542__$1;
(statearr_30569_30625[(2)] = inst_30516);

(statearr_30569_30625[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (6))){
var state_30542__$1 = state_30542;
var statearr_30570_30626 = state_30542__$1;
(statearr_30570_30626[(2)] = false);

(statearr_30570_30626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (28))){
var inst_30512 = (state_30542[(2)]);
var inst_30513 = calc_state.call(null);
var inst_30470 = inst_30513;
var state_30542__$1 = (function (){var statearr_30571 = state_30542;
(statearr_30571[(15)] = inst_30512);

(statearr_30571[(7)] = inst_30470);

return statearr_30571;
})();
var statearr_30572_30627 = state_30542__$1;
(statearr_30572_30627[(2)] = null);

(statearr_30572_30627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (25))){
var inst_30538 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
var statearr_30573_30628 = state_30542__$1;
(statearr_30573_30628[(2)] = inst_30538);

(statearr_30573_30628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (34))){
var inst_30536 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
var statearr_30574_30629 = state_30542__$1;
(statearr_30574_30629[(2)] = inst_30536);

(statearr_30574_30629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (17))){
var state_30542__$1 = state_30542;
var statearr_30575_30630 = state_30542__$1;
(statearr_30575_30630[(2)] = false);

(statearr_30575_30630[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (3))){
var state_30542__$1 = state_30542;
var statearr_30576_30631 = state_30542__$1;
(statearr_30576_30631[(2)] = false);

(statearr_30576_30631[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (12))){
var inst_30540 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30542__$1,inst_30540);
} else {
if((state_val_30543 === (2))){
var inst_30446 = (state_30542[(8)]);
var inst_30451 = inst_30446.cljs$lang$protocol_mask$partition0$;
var inst_30452 = (inst_30451 & (64));
var inst_30453 = inst_30446.cljs$core$ISeq$;
var inst_30454 = (inst_30452) || (inst_30453);
var state_30542__$1 = state_30542;
if(cljs.core.truth_(inst_30454)){
var statearr_30577_30632 = state_30542__$1;
(statearr_30577_30632[(1)] = (5));

} else {
var statearr_30578_30633 = state_30542__$1;
(statearr_30578_30633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (23))){
var inst_30501 = (state_30542[(14)]);
var inst_30507 = (inst_30501 == null);
var state_30542__$1 = state_30542;
if(cljs.core.truth_(inst_30507)){
var statearr_30579_30634 = state_30542__$1;
(statearr_30579_30634[(1)] = (26));

} else {
var statearr_30580_30635 = state_30542__$1;
(statearr_30580_30635[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (35))){
var inst_30527 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
if(cljs.core.truth_(inst_30527)){
var statearr_30581_30636 = state_30542__$1;
(statearr_30581_30636[(1)] = (36));

} else {
var statearr_30582_30637 = state_30542__$1;
(statearr_30582_30637[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (19))){
var inst_30470 = (state_30542[(7)]);
var inst_30489 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30470);
var state_30542__$1 = state_30542;
var statearr_30583_30638 = state_30542__$1;
(statearr_30583_30638[(2)] = inst_30489);

(statearr_30583_30638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (11))){
var inst_30470 = (state_30542[(7)]);
var inst_30474 = (inst_30470 == null);
var inst_30475 = cljs.core.not.call(null,inst_30474);
var state_30542__$1 = state_30542;
if(inst_30475){
var statearr_30584_30639 = state_30542__$1;
(statearr_30584_30639[(1)] = (13));

} else {
var statearr_30585_30640 = state_30542__$1;
(statearr_30585_30640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (9))){
var inst_30446 = (state_30542[(8)]);
var state_30542__$1 = state_30542;
var statearr_30586_30641 = state_30542__$1;
(statearr_30586_30641[(2)] = inst_30446);

(statearr_30586_30641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (5))){
var state_30542__$1 = state_30542;
var statearr_30587_30642 = state_30542__$1;
(statearr_30587_30642[(2)] = true);

(statearr_30587_30642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (14))){
var state_30542__$1 = state_30542;
var statearr_30588_30643 = state_30542__$1;
(statearr_30588_30643[(2)] = false);

(statearr_30588_30643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (26))){
var inst_30502 = (state_30542[(10)]);
var inst_30509 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30502);
var state_30542__$1 = state_30542;
var statearr_30589_30644 = state_30542__$1;
(statearr_30589_30644[(2)] = inst_30509);

(statearr_30589_30644[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (16))){
var state_30542__$1 = state_30542;
var statearr_30590_30645 = state_30542__$1;
(statearr_30590_30645[(2)] = true);

(statearr_30590_30645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (38))){
var inst_30532 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
var statearr_30591_30646 = state_30542__$1;
(statearr_30591_30646[(2)] = inst_30532);

(statearr_30591_30646[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (30))){
var inst_30494 = (state_30542[(13)]);
var inst_30502 = (state_30542[(10)]);
var inst_30493 = (state_30542[(11)]);
var inst_30519 = cljs.core.empty_QMARK_.call(null,inst_30493);
var inst_30520 = inst_30494.call(null,inst_30502);
var inst_30521 = cljs.core.not.call(null,inst_30520);
var inst_30522 = (inst_30519) && (inst_30521);
var state_30542__$1 = state_30542;
var statearr_30592_30647 = state_30542__$1;
(statearr_30592_30647[(2)] = inst_30522);

(statearr_30592_30647[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (10))){
var inst_30446 = (state_30542[(8)]);
var inst_30466 = (state_30542[(2)]);
var inst_30467 = cljs.core.get.call(null,inst_30466,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30468 = cljs.core.get.call(null,inst_30466,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30469 = cljs.core.get.call(null,inst_30466,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30470 = inst_30446;
var state_30542__$1 = (function (){var statearr_30593 = state_30542;
(statearr_30593[(16)] = inst_30467);

(statearr_30593[(17)] = inst_30468);

(statearr_30593[(7)] = inst_30470);

(statearr_30593[(18)] = inst_30469);

return statearr_30593;
})();
var statearr_30594_30648 = state_30542__$1;
(statearr_30594_30648[(2)] = null);

(statearr_30594_30648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (18))){
var inst_30484 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
var statearr_30595_30649 = state_30542__$1;
(statearr_30595_30649[(2)] = inst_30484);

(statearr_30595_30649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (37))){
var state_30542__$1 = state_30542;
var statearr_30596_30650 = state_30542__$1;
(statearr_30596_30650[(2)] = null);

(statearr_30596_30650[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (8))){
var inst_30446 = (state_30542[(8)]);
var inst_30463 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30446);
var state_30542__$1 = state_30542;
var statearr_30597_30651 = state_30542__$1;
(statearr_30597_30651[(2)] = inst_30463);

(statearr_30597_30651[(1)] = (10));


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
});})(c__28842__auto___30605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28730__auto__,c__28842__auto___30605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28731__auto__ = null;
var cljs$core$async$mix_$_state_machine__28731__auto____0 = (function (){
var statearr_30601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30601[(0)] = cljs$core$async$mix_$_state_machine__28731__auto__);

(statearr_30601[(1)] = (1));

return statearr_30601;
});
var cljs$core$async$mix_$_state_machine__28731__auto____1 = (function (state_30542){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_30542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e30602){if((e30602 instanceof Object)){
var ex__28734__auto__ = e30602;
var statearr_30603_30652 = state_30542;
(statearr_30603_30652[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30653 = state_30542;
state_30542 = G__30653;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28731__auto__ = function(state_30542){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28731__auto____1.call(this,state_30542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28731__auto____0;
cljs$core$async$mix_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28731__auto____1;
return cljs$core$async$mix_$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___30605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28844__auto__ = (function (){var statearr_30604 = f__28843__auto__.call(null);
(statearr_30604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___30605);

return statearr_30604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___30605,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args30654 = [];
var len__27054__auto___30657 = arguments.length;
var i__27055__auto___30658 = (0);
while(true){
if((i__27055__auto___30658 < len__27054__auto___30657)){
args30654.push((arguments[i__27055__auto___30658]));

var G__30659 = (i__27055__auto___30658 + (1));
i__27055__auto___30658 = G__30659;
continue;
} else {
}
break;
}

var G__30656 = args30654.length;
switch (G__30656) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30654.length)].join('')));

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
var args30662 = [];
var len__27054__auto___30787 = arguments.length;
var i__27055__auto___30788 = (0);
while(true){
if((i__27055__auto___30788 < len__27054__auto___30787)){
args30662.push((arguments[i__27055__auto___30788]));

var G__30789 = (i__27055__auto___30788 + (1));
i__27055__auto___30788 = G__30789;
continue;
} else {
}
break;
}

var G__30664 = args30662.length;
switch (G__30664) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30662.length)].join('')));

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
return (function (p1__30661_SHARP_){
if(cljs.core.truth_(p1__30661_SHARP_.call(null,topic))){
return p1__30661_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30661_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30665 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30666){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30666 = meta30666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30667,meta30666__$1){
var self__ = this;
var _30667__$1 = this;
return (new cljs.core.async.t_cljs$core$async30665(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30666__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30667){
var self__ = this;
var _30667__$1 = this;
return self__.meta30666;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30665.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30666","meta30666",2146358070,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30665";

cljs.core.async.t_cljs$core$async30665.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30665");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30665 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30666){
return (new cljs.core.async.t_cljs$core$async30665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30666));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30665(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28842__auto___30791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___30791,mults,ensure_mult,p){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___30791,mults,ensure_mult,p){
return (function (state_30739){
var state_val_30740 = (state_30739[(1)]);
if((state_val_30740 === (7))){
var inst_30735 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30741_30792 = state_30739__$1;
(statearr_30741_30792[(2)] = inst_30735);

(statearr_30741_30792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (20))){
var state_30739__$1 = state_30739;
var statearr_30742_30793 = state_30739__$1;
(statearr_30742_30793[(2)] = null);

(statearr_30742_30793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (1))){
var state_30739__$1 = state_30739;
var statearr_30743_30794 = state_30739__$1;
(statearr_30743_30794[(2)] = null);

(statearr_30743_30794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (24))){
var inst_30718 = (state_30739[(7)]);
var inst_30727 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30718);
var state_30739__$1 = state_30739;
var statearr_30744_30795 = state_30739__$1;
(statearr_30744_30795[(2)] = inst_30727);

(statearr_30744_30795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (4))){
var inst_30670 = (state_30739[(8)]);
var inst_30670__$1 = (state_30739[(2)]);
var inst_30671 = (inst_30670__$1 == null);
var state_30739__$1 = (function (){var statearr_30745 = state_30739;
(statearr_30745[(8)] = inst_30670__$1);

return statearr_30745;
})();
if(cljs.core.truth_(inst_30671)){
var statearr_30746_30796 = state_30739__$1;
(statearr_30746_30796[(1)] = (5));

} else {
var statearr_30747_30797 = state_30739__$1;
(statearr_30747_30797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (15))){
var inst_30712 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30748_30798 = state_30739__$1;
(statearr_30748_30798[(2)] = inst_30712);

(statearr_30748_30798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (21))){
var inst_30732 = (state_30739[(2)]);
var state_30739__$1 = (function (){var statearr_30749 = state_30739;
(statearr_30749[(9)] = inst_30732);

return statearr_30749;
})();
var statearr_30750_30799 = state_30739__$1;
(statearr_30750_30799[(2)] = null);

(statearr_30750_30799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (13))){
var inst_30694 = (state_30739[(10)]);
var inst_30696 = cljs.core.chunked_seq_QMARK_.call(null,inst_30694);
var state_30739__$1 = state_30739;
if(inst_30696){
var statearr_30751_30800 = state_30739__$1;
(statearr_30751_30800[(1)] = (16));

} else {
var statearr_30752_30801 = state_30739__$1;
(statearr_30752_30801[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (22))){
var inst_30724 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
if(cljs.core.truth_(inst_30724)){
var statearr_30753_30802 = state_30739__$1;
(statearr_30753_30802[(1)] = (23));

} else {
var statearr_30754_30803 = state_30739__$1;
(statearr_30754_30803[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (6))){
var inst_30718 = (state_30739[(7)]);
var inst_30670 = (state_30739[(8)]);
var inst_30720 = (state_30739[(11)]);
var inst_30718__$1 = topic_fn.call(null,inst_30670);
var inst_30719 = cljs.core.deref.call(null,mults);
var inst_30720__$1 = cljs.core.get.call(null,inst_30719,inst_30718__$1);
var state_30739__$1 = (function (){var statearr_30755 = state_30739;
(statearr_30755[(7)] = inst_30718__$1);

(statearr_30755[(11)] = inst_30720__$1);

return statearr_30755;
})();
if(cljs.core.truth_(inst_30720__$1)){
var statearr_30756_30804 = state_30739__$1;
(statearr_30756_30804[(1)] = (19));

} else {
var statearr_30757_30805 = state_30739__$1;
(statearr_30757_30805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (25))){
var inst_30729 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30758_30806 = state_30739__$1;
(statearr_30758_30806[(2)] = inst_30729);

(statearr_30758_30806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (17))){
var inst_30694 = (state_30739[(10)]);
var inst_30703 = cljs.core.first.call(null,inst_30694);
var inst_30704 = cljs.core.async.muxch_STAR_.call(null,inst_30703);
var inst_30705 = cljs.core.async.close_BANG_.call(null,inst_30704);
var inst_30706 = cljs.core.next.call(null,inst_30694);
var inst_30680 = inst_30706;
var inst_30681 = null;
var inst_30682 = (0);
var inst_30683 = (0);
var state_30739__$1 = (function (){var statearr_30759 = state_30739;
(statearr_30759[(12)] = inst_30683);

(statearr_30759[(13)] = inst_30682);

(statearr_30759[(14)] = inst_30681);

(statearr_30759[(15)] = inst_30680);

(statearr_30759[(16)] = inst_30705);

return statearr_30759;
})();
var statearr_30760_30807 = state_30739__$1;
(statearr_30760_30807[(2)] = null);

(statearr_30760_30807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (3))){
var inst_30737 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30739__$1,inst_30737);
} else {
if((state_val_30740 === (12))){
var inst_30714 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30761_30808 = state_30739__$1;
(statearr_30761_30808[(2)] = inst_30714);

(statearr_30761_30808[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (2))){
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30739__$1,(4),ch);
} else {
if((state_val_30740 === (23))){
var state_30739__$1 = state_30739;
var statearr_30762_30809 = state_30739__$1;
(statearr_30762_30809[(2)] = null);

(statearr_30762_30809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (19))){
var inst_30670 = (state_30739[(8)]);
var inst_30720 = (state_30739[(11)]);
var inst_30722 = cljs.core.async.muxch_STAR_.call(null,inst_30720);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30739__$1,(22),inst_30722,inst_30670);
} else {
if((state_val_30740 === (11))){
var inst_30694 = (state_30739[(10)]);
var inst_30680 = (state_30739[(15)]);
var inst_30694__$1 = cljs.core.seq.call(null,inst_30680);
var state_30739__$1 = (function (){var statearr_30763 = state_30739;
(statearr_30763[(10)] = inst_30694__$1);

return statearr_30763;
})();
if(inst_30694__$1){
var statearr_30764_30810 = state_30739__$1;
(statearr_30764_30810[(1)] = (13));

} else {
var statearr_30765_30811 = state_30739__$1;
(statearr_30765_30811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (9))){
var inst_30716 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30766_30812 = state_30739__$1;
(statearr_30766_30812[(2)] = inst_30716);

(statearr_30766_30812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (5))){
var inst_30677 = cljs.core.deref.call(null,mults);
var inst_30678 = cljs.core.vals.call(null,inst_30677);
var inst_30679 = cljs.core.seq.call(null,inst_30678);
var inst_30680 = inst_30679;
var inst_30681 = null;
var inst_30682 = (0);
var inst_30683 = (0);
var state_30739__$1 = (function (){var statearr_30767 = state_30739;
(statearr_30767[(12)] = inst_30683);

(statearr_30767[(13)] = inst_30682);

(statearr_30767[(14)] = inst_30681);

(statearr_30767[(15)] = inst_30680);

return statearr_30767;
})();
var statearr_30768_30813 = state_30739__$1;
(statearr_30768_30813[(2)] = null);

(statearr_30768_30813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (14))){
var state_30739__$1 = state_30739;
var statearr_30772_30814 = state_30739__$1;
(statearr_30772_30814[(2)] = null);

(statearr_30772_30814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (16))){
var inst_30694 = (state_30739[(10)]);
var inst_30698 = cljs.core.chunk_first.call(null,inst_30694);
var inst_30699 = cljs.core.chunk_rest.call(null,inst_30694);
var inst_30700 = cljs.core.count.call(null,inst_30698);
var inst_30680 = inst_30699;
var inst_30681 = inst_30698;
var inst_30682 = inst_30700;
var inst_30683 = (0);
var state_30739__$1 = (function (){var statearr_30773 = state_30739;
(statearr_30773[(12)] = inst_30683);

(statearr_30773[(13)] = inst_30682);

(statearr_30773[(14)] = inst_30681);

(statearr_30773[(15)] = inst_30680);

return statearr_30773;
})();
var statearr_30774_30815 = state_30739__$1;
(statearr_30774_30815[(2)] = null);

(statearr_30774_30815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (10))){
var inst_30683 = (state_30739[(12)]);
var inst_30682 = (state_30739[(13)]);
var inst_30681 = (state_30739[(14)]);
var inst_30680 = (state_30739[(15)]);
var inst_30688 = cljs.core._nth.call(null,inst_30681,inst_30683);
var inst_30689 = cljs.core.async.muxch_STAR_.call(null,inst_30688);
var inst_30690 = cljs.core.async.close_BANG_.call(null,inst_30689);
var inst_30691 = (inst_30683 + (1));
var tmp30769 = inst_30682;
var tmp30770 = inst_30681;
var tmp30771 = inst_30680;
var inst_30680__$1 = tmp30771;
var inst_30681__$1 = tmp30770;
var inst_30682__$1 = tmp30769;
var inst_30683__$1 = inst_30691;
var state_30739__$1 = (function (){var statearr_30775 = state_30739;
(statearr_30775[(12)] = inst_30683__$1);

(statearr_30775[(13)] = inst_30682__$1);

(statearr_30775[(14)] = inst_30681__$1);

(statearr_30775[(17)] = inst_30690);

(statearr_30775[(15)] = inst_30680__$1);

return statearr_30775;
})();
var statearr_30776_30816 = state_30739__$1;
(statearr_30776_30816[(2)] = null);

(statearr_30776_30816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (18))){
var inst_30709 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30777_30817 = state_30739__$1;
(statearr_30777_30817[(2)] = inst_30709);

(statearr_30777_30817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (8))){
var inst_30683 = (state_30739[(12)]);
var inst_30682 = (state_30739[(13)]);
var inst_30685 = (inst_30683 < inst_30682);
var inst_30686 = inst_30685;
var state_30739__$1 = state_30739;
if(cljs.core.truth_(inst_30686)){
var statearr_30778_30818 = state_30739__$1;
(statearr_30778_30818[(1)] = (10));

} else {
var statearr_30779_30819 = state_30739__$1;
(statearr_30779_30819[(1)] = (11));

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
});})(c__28842__auto___30791,mults,ensure_mult,p))
;
return ((function (switch__28730__auto__,c__28842__auto___30791,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28731__auto__ = null;
var cljs$core$async$state_machine__28731__auto____0 = (function (){
var statearr_30783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30783[(0)] = cljs$core$async$state_machine__28731__auto__);

(statearr_30783[(1)] = (1));

return statearr_30783;
});
var cljs$core$async$state_machine__28731__auto____1 = (function (state_30739){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_30739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e30784){if((e30784 instanceof Object)){
var ex__28734__auto__ = e30784;
var statearr_30785_30820 = state_30739;
(statearr_30785_30820[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30821 = state_30739;
state_30739 = G__30821;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$state_machine__28731__auto__ = function(state_30739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28731__auto____1.call(this,state_30739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28731__auto____0;
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28731__auto____1;
return cljs$core$async$state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___30791,mults,ensure_mult,p))
})();
var state__28844__auto__ = (function (){var statearr_30786 = f__28843__auto__.call(null);
(statearr_30786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___30791);

return statearr_30786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___30791,mults,ensure_mult,p))
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
var args30822 = [];
var len__27054__auto___30825 = arguments.length;
var i__27055__auto___30826 = (0);
while(true){
if((i__27055__auto___30826 < len__27054__auto___30825)){
args30822.push((arguments[i__27055__auto___30826]));

var G__30827 = (i__27055__auto___30826 + (1));
i__27055__auto___30826 = G__30827;
continue;
} else {
}
break;
}

var G__30824 = args30822.length;
switch (G__30824) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30822.length)].join('')));

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
var args30829 = [];
var len__27054__auto___30832 = arguments.length;
var i__27055__auto___30833 = (0);
while(true){
if((i__27055__auto___30833 < len__27054__auto___30832)){
args30829.push((arguments[i__27055__auto___30833]));

var G__30834 = (i__27055__auto___30833 + (1));
i__27055__auto___30833 = G__30834;
continue;
} else {
}
break;
}

var G__30831 = args30829.length;
switch (G__30831) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30829.length)].join('')));

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
var args30836 = [];
var len__27054__auto___30907 = arguments.length;
var i__27055__auto___30908 = (0);
while(true){
if((i__27055__auto___30908 < len__27054__auto___30907)){
args30836.push((arguments[i__27055__auto___30908]));

var G__30909 = (i__27055__auto___30908 + (1));
i__27055__auto___30908 = G__30909;
continue;
} else {
}
break;
}

var G__30838 = args30836.length;
switch (G__30838) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30836.length)].join('')));

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
var c__28842__auto___30911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___30911,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___30911,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30877){
var state_val_30878 = (state_30877[(1)]);
if((state_val_30878 === (7))){
var state_30877__$1 = state_30877;
var statearr_30879_30912 = state_30877__$1;
(statearr_30879_30912[(2)] = null);

(statearr_30879_30912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (1))){
var state_30877__$1 = state_30877;
var statearr_30880_30913 = state_30877__$1;
(statearr_30880_30913[(2)] = null);

(statearr_30880_30913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (4))){
var inst_30841 = (state_30877[(7)]);
var inst_30843 = (inst_30841 < cnt);
var state_30877__$1 = state_30877;
if(cljs.core.truth_(inst_30843)){
var statearr_30881_30914 = state_30877__$1;
(statearr_30881_30914[(1)] = (6));

} else {
var statearr_30882_30915 = state_30877__$1;
(statearr_30882_30915[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (15))){
var inst_30873 = (state_30877[(2)]);
var state_30877__$1 = state_30877;
var statearr_30883_30916 = state_30877__$1;
(statearr_30883_30916[(2)] = inst_30873);

(statearr_30883_30916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (13))){
var inst_30866 = cljs.core.async.close_BANG_.call(null,out);
var state_30877__$1 = state_30877;
var statearr_30884_30917 = state_30877__$1;
(statearr_30884_30917[(2)] = inst_30866);

(statearr_30884_30917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (6))){
var state_30877__$1 = state_30877;
var statearr_30885_30918 = state_30877__$1;
(statearr_30885_30918[(2)] = null);

(statearr_30885_30918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (3))){
var inst_30875 = (state_30877[(2)]);
var state_30877__$1 = state_30877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30877__$1,inst_30875);
} else {
if((state_val_30878 === (12))){
var inst_30863 = (state_30877[(8)]);
var inst_30863__$1 = (state_30877[(2)]);
var inst_30864 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30863__$1);
var state_30877__$1 = (function (){var statearr_30886 = state_30877;
(statearr_30886[(8)] = inst_30863__$1);

return statearr_30886;
})();
if(cljs.core.truth_(inst_30864)){
var statearr_30887_30919 = state_30877__$1;
(statearr_30887_30919[(1)] = (13));

} else {
var statearr_30888_30920 = state_30877__$1;
(statearr_30888_30920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (2))){
var inst_30840 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30841 = (0);
var state_30877__$1 = (function (){var statearr_30889 = state_30877;
(statearr_30889[(7)] = inst_30841);

(statearr_30889[(9)] = inst_30840);

return statearr_30889;
})();
var statearr_30890_30921 = state_30877__$1;
(statearr_30890_30921[(2)] = null);

(statearr_30890_30921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (11))){
var inst_30841 = (state_30877[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30877,(10),Object,null,(9));
var inst_30850 = chs__$1.call(null,inst_30841);
var inst_30851 = done.call(null,inst_30841);
var inst_30852 = cljs.core.async.take_BANG_.call(null,inst_30850,inst_30851);
var state_30877__$1 = state_30877;
var statearr_30891_30922 = state_30877__$1;
(statearr_30891_30922[(2)] = inst_30852);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30877__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (9))){
var inst_30841 = (state_30877[(7)]);
var inst_30854 = (state_30877[(2)]);
var inst_30855 = (inst_30841 + (1));
var inst_30841__$1 = inst_30855;
var state_30877__$1 = (function (){var statearr_30892 = state_30877;
(statearr_30892[(7)] = inst_30841__$1);

(statearr_30892[(10)] = inst_30854);

return statearr_30892;
})();
var statearr_30893_30923 = state_30877__$1;
(statearr_30893_30923[(2)] = null);

(statearr_30893_30923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (5))){
var inst_30861 = (state_30877[(2)]);
var state_30877__$1 = (function (){var statearr_30894 = state_30877;
(statearr_30894[(11)] = inst_30861);

return statearr_30894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30877__$1,(12),dchan);
} else {
if((state_val_30878 === (14))){
var inst_30863 = (state_30877[(8)]);
var inst_30868 = cljs.core.apply.call(null,f,inst_30863);
var state_30877__$1 = state_30877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30877__$1,(16),out,inst_30868);
} else {
if((state_val_30878 === (16))){
var inst_30870 = (state_30877[(2)]);
var state_30877__$1 = (function (){var statearr_30895 = state_30877;
(statearr_30895[(12)] = inst_30870);

return statearr_30895;
})();
var statearr_30896_30924 = state_30877__$1;
(statearr_30896_30924[(2)] = null);

(statearr_30896_30924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (10))){
var inst_30845 = (state_30877[(2)]);
var inst_30846 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30877__$1 = (function (){var statearr_30897 = state_30877;
(statearr_30897[(13)] = inst_30845);

return statearr_30897;
})();
var statearr_30898_30925 = state_30877__$1;
(statearr_30898_30925[(2)] = inst_30846);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30877__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30878 === (8))){
var inst_30859 = (state_30877[(2)]);
var state_30877__$1 = state_30877;
var statearr_30899_30926 = state_30877__$1;
(statearr_30899_30926[(2)] = inst_30859);

(statearr_30899_30926[(1)] = (5));


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
});})(c__28842__auto___30911,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28730__auto__,c__28842__auto___30911,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28731__auto__ = null;
var cljs$core$async$state_machine__28731__auto____0 = (function (){
var statearr_30903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30903[(0)] = cljs$core$async$state_machine__28731__auto__);

(statearr_30903[(1)] = (1));

return statearr_30903;
});
var cljs$core$async$state_machine__28731__auto____1 = (function (state_30877){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_30877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e30904){if((e30904 instanceof Object)){
var ex__28734__auto__ = e30904;
var statearr_30905_30927 = state_30877;
(statearr_30905_30927[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30928 = state_30877;
state_30877 = G__30928;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$state_machine__28731__auto__ = function(state_30877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28731__auto____1.call(this,state_30877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28731__auto____0;
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28731__auto____1;
return cljs$core$async$state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___30911,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28844__auto__ = (function (){var statearr_30906 = f__28843__auto__.call(null);
(statearr_30906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___30911);

return statearr_30906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___30911,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30930 = [];
var len__27054__auto___30988 = arguments.length;
var i__27055__auto___30989 = (0);
while(true){
if((i__27055__auto___30989 < len__27054__auto___30988)){
args30930.push((arguments[i__27055__auto___30989]));

var G__30990 = (i__27055__auto___30989 + (1));
i__27055__auto___30989 = G__30990;
continue;
} else {
}
break;
}

var G__30932 = args30930.length;
switch (G__30932) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30930.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28842__auto___30992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___30992,out){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___30992,out){
return (function (state_30964){
var state_val_30965 = (state_30964[(1)]);
if((state_val_30965 === (7))){
var inst_30943 = (state_30964[(7)]);
var inst_30944 = (state_30964[(8)]);
var inst_30943__$1 = (state_30964[(2)]);
var inst_30944__$1 = cljs.core.nth.call(null,inst_30943__$1,(0),null);
var inst_30945 = cljs.core.nth.call(null,inst_30943__$1,(1),null);
var inst_30946 = (inst_30944__$1 == null);
var state_30964__$1 = (function (){var statearr_30966 = state_30964;
(statearr_30966[(7)] = inst_30943__$1);

(statearr_30966[(8)] = inst_30944__$1);

(statearr_30966[(9)] = inst_30945);

return statearr_30966;
})();
if(cljs.core.truth_(inst_30946)){
var statearr_30967_30993 = state_30964__$1;
(statearr_30967_30993[(1)] = (8));

} else {
var statearr_30968_30994 = state_30964__$1;
(statearr_30968_30994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (1))){
var inst_30933 = cljs.core.vec.call(null,chs);
var inst_30934 = inst_30933;
var state_30964__$1 = (function (){var statearr_30969 = state_30964;
(statearr_30969[(10)] = inst_30934);

return statearr_30969;
})();
var statearr_30970_30995 = state_30964__$1;
(statearr_30970_30995[(2)] = null);

(statearr_30970_30995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (4))){
var inst_30934 = (state_30964[(10)]);
var state_30964__$1 = state_30964;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30964__$1,(7),inst_30934);
} else {
if((state_val_30965 === (6))){
var inst_30960 = (state_30964[(2)]);
var state_30964__$1 = state_30964;
var statearr_30971_30996 = state_30964__$1;
(statearr_30971_30996[(2)] = inst_30960);

(statearr_30971_30996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (3))){
var inst_30962 = (state_30964[(2)]);
var state_30964__$1 = state_30964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30964__$1,inst_30962);
} else {
if((state_val_30965 === (2))){
var inst_30934 = (state_30964[(10)]);
var inst_30936 = cljs.core.count.call(null,inst_30934);
var inst_30937 = (inst_30936 > (0));
var state_30964__$1 = state_30964;
if(cljs.core.truth_(inst_30937)){
var statearr_30973_30997 = state_30964__$1;
(statearr_30973_30997[(1)] = (4));

} else {
var statearr_30974_30998 = state_30964__$1;
(statearr_30974_30998[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (11))){
var inst_30934 = (state_30964[(10)]);
var inst_30953 = (state_30964[(2)]);
var tmp30972 = inst_30934;
var inst_30934__$1 = tmp30972;
var state_30964__$1 = (function (){var statearr_30975 = state_30964;
(statearr_30975[(10)] = inst_30934__$1);

(statearr_30975[(11)] = inst_30953);

return statearr_30975;
})();
var statearr_30976_30999 = state_30964__$1;
(statearr_30976_30999[(2)] = null);

(statearr_30976_30999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (9))){
var inst_30944 = (state_30964[(8)]);
var state_30964__$1 = state_30964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30964__$1,(11),out,inst_30944);
} else {
if((state_val_30965 === (5))){
var inst_30958 = cljs.core.async.close_BANG_.call(null,out);
var state_30964__$1 = state_30964;
var statearr_30977_31000 = state_30964__$1;
(statearr_30977_31000[(2)] = inst_30958);

(statearr_30977_31000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (10))){
var inst_30956 = (state_30964[(2)]);
var state_30964__$1 = state_30964;
var statearr_30978_31001 = state_30964__$1;
(statearr_30978_31001[(2)] = inst_30956);

(statearr_30978_31001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (8))){
var inst_30943 = (state_30964[(7)]);
var inst_30934 = (state_30964[(10)]);
var inst_30944 = (state_30964[(8)]);
var inst_30945 = (state_30964[(9)]);
var inst_30948 = (function (){var cs = inst_30934;
var vec__30939 = inst_30943;
var v = inst_30944;
var c = inst_30945;
return ((function (cs,vec__30939,v,c,inst_30943,inst_30934,inst_30944,inst_30945,state_val_30965,c__28842__auto___30992,out){
return (function (p1__30929_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30929_SHARP_);
});
;})(cs,vec__30939,v,c,inst_30943,inst_30934,inst_30944,inst_30945,state_val_30965,c__28842__auto___30992,out))
})();
var inst_30949 = cljs.core.filterv.call(null,inst_30948,inst_30934);
var inst_30934__$1 = inst_30949;
var state_30964__$1 = (function (){var statearr_30979 = state_30964;
(statearr_30979[(10)] = inst_30934__$1);

return statearr_30979;
})();
var statearr_30980_31002 = state_30964__$1;
(statearr_30980_31002[(2)] = null);

(statearr_30980_31002[(1)] = (2));


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
});})(c__28842__auto___30992,out))
;
return ((function (switch__28730__auto__,c__28842__auto___30992,out){
return (function() {
var cljs$core$async$state_machine__28731__auto__ = null;
var cljs$core$async$state_machine__28731__auto____0 = (function (){
var statearr_30984 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30984[(0)] = cljs$core$async$state_machine__28731__auto__);

(statearr_30984[(1)] = (1));

return statearr_30984;
});
var cljs$core$async$state_machine__28731__auto____1 = (function (state_30964){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_30964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e30985){if((e30985 instanceof Object)){
var ex__28734__auto__ = e30985;
var statearr_30986_31003 = state_30964;
(statearr_30986_31003[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31004 = state_30964;
state_30964 = G__31004;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$state_machine__28731__auto__ = function(state_30964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28731__auto____1.call(this,state_30964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28731__auto____0;
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28731__auto____1;
return cljs$core$async$state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___30992,out))
})();
var state__28844__auto__ = (function (){var statearr_30987 = f__28843__auto__.call(null);
(statearr_30987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___30992);

return statearr_30987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___30992,out))
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
var args31005 = [];
var len__27054__auto___31054 = arguments.length;
var i__27055__auto___31055 = (0);
while(true){
if((i__27055__auto___31055 < len__27054__auto___31054)){
args31005.push((arguments[i__27055__auto___31055]));

var G__31056 = (i__27055__auto___31055 + (1));
i__27055__auto___31055 = G__31056;
continue;
} else {
}
break;
}

var G__31007 = args31005.length;
switch (G__31007) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31005.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28842__auto___31058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___31058,out){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___31058,out){
return (function (state_31031){
var state_val_31032 = (state_31031[(1)]);
if((state_val_31032 === (7))){
var inst_31013 = (state_31031[(7)]);
var inst_31013__$1 = (state_31031[(2)]);
var inst_31014 = (inst_31013__$1 == null);
var inst_31015 = cljs.core.not.call(null,inst_31014);
var state_31031__$1 = (function (){var statearr_31033 = state_31031;
(statearr_31033[(7)] = inst_31013__$1);

return statearr_31033;
})();
if(inst_31015){
var statearr_31034_31059 = state_31031__$1;
(statearr_31034_31059[(1)] = (8));

} else {
var statearr_31035_31060 = state_31031__$1;
(statearr_31035_31060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (1))){
var inst_31008 = (0);
var state_31031__$1 = (function (){var statearr_31036 = state_31031;
(statearr_31036[(8)] = inst_31008);

return statearr_31036;
})();
var statearr_31037_31061 = state_31031__$1;
(statearr_31037_31061[(2)] = null);

(statearr_31037_31061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (4))){
var state_31031__$1 = state_31031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31031__$1,(7),ch);
} else {
if((state_val_31032 === (6))){
var inst_31026 = (state_31031[(2)]);
var state_31031__$1 = state_31031;
var statearr_31038_31062 = state_31031__$1;
(statearr_31038_31062[(2)] = inst_31026);

(statearr_31038_31062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (3))){
var inst_31028 = (state_31031[(2)]);
var inst_31029 = cljs.core.async.close_BANG_.call(null,out);
var state_31031__$1 = (function (){var statearr_31039 = state_31031;
(statearr_31039[(9)] = inst_31028);

return statearr_31039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31031__$1,inst_31029);
} else {
if((state_val_31032 === (2))){
var inst_31008 = (state_31031[(8)]);
var inst_31010 = (inst_31008 < n);
var state_31031__$1 = state_31031;
if(cljs.core.truth_(inst_31010)){
var statearr_31040_31063 = state_31031__$1;
(statearr_31040_31063[(1)] = (4));

} else {
var statearr_31041_31064 = state_31031__$1;
(statearr_31041_31064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (11))){
var inst_31008 = (state_31031[(8)]);
var inst_31018 = (state_31031[(2)]);
var inst_31019 = (inst_31008 + (1));
var inst_31008__$1 = inst_31019;
var state_31031__$1 = (function (){var statearr_31042 = state_31031;
(statearr_31042[(10)] = inst_31018);

(statearr_31042[(8)] = inst_31008__$1);

return statearr_31042;
})();
var statearr_31043_31065 = state_31031__$1;
(statearr_31043_31065[(2)] = null);

(statearr_31043_31065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (9))){
var state_31031__$1 = state_31031;
var statearr_31044_31066 = state_31031__$1;
(statearr_31044_31066[(2)] = null);

(statearr_31044_31066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (5))){
var state_31031__$1 = state_31031;
var statearr_31045_31067 = state_31031__$1;
(statearr_31045_31067[(2)] = null);

(statearr_31045_31067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (10))){
var inst_31023 = (state_31031[(2)]);
var state_31031__$1 = state_31031;
var statearr_31046_31068 = state_31031__$1;
(statearr_31046_31068[(2)] = inst_31023);

(statearr_31046_31068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31032 === (8))){
var inst_31013 = (state_31031[(7)]);
var state_31031__$1 = state_31031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31031__$1,(11),out,inst_31013);
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
});})(c__28842__auto___31058,out))
;
return ((function (switch__28730__auto__,c__28842__auto___31058,out){
return (function() {
var cljs$core$async$state_machine__28731__auto__ = null;
var cljs$core$async$state_machine__28731__auto____0 = (function (){
var statearr_31050 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31050[(0)] = cljs$core$async$state_machine__28731__auto__);

(statearr_31050[(1)] = (1));

return statearr_31050;
});
var cljs$core$async$state_machine__28731__auto____1 = (function (state_31031){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_31031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e31051){if((e31051 instanceof Object)){
var ex__28734__auto__ = e31051;
var statearr_31052_31069 = state_31031;
(statearr_31052_31069[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31070 = state_31031;
state_31031 = G__31070;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$state_machine__28731__auto__ = function(state_31031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28731__auto____1.call(this,state_31031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28731__auto____0;
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28731__auto____1;
return cljs$core$async$state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___31058,out))
})();
var state__28844__auto__ = (function (){var statearr_31053 = f__28843__auto__.call(null);
(statearr_31053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___31058);

return statearr_31053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___31058,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31078 = (function (map_LT_,f,ch,meta31079){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31079 = meta31079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31080,meta31079__$1){
var self__ = this;
var _31080__$1 = this;
return (new cljs.core.async.t_cljs$core$async31078(self__.map_LT_,self__.f,self__.ch,meta31079__$1));
});

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31080){
var self__ = this;
var _31080__$1 = this;
return self__.meta31079;
});

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31081 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31081 = (function (map_LT_,f,ch,meta31079,_,fn1,meta31082){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31079 = meta31079;
this._ = _;
this.fn1 = fn1;
this.meta31082 = meta31082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31083,meta31082__$1){
var self__ = this;
var _31083__$1 = this;
return (new cljs.core.async.t_cljs$core$async31081(self__.map_LT_,self__.f,self__.ch,self__.meta31079,self__._,self__.fn1,meta31082__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31083){
var self__ = this;
var _31083__$1 = this;
return self__.meta31082;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31071_SHARP_){
return f1.call(null,(((p1__31071_SHARP_ == null))?null:self__.f.call(null,p1__31071_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31081.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31079","meta31079",879771932,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31078","cljs.core.async/t_cljs$core$async31078",1318592144,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31082","meta31082",1379241033,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31081.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31081";

cljs.core.async.t_cljs$core$async31081.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31081");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31081 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31081(map_LT___$1,f__$1,ch__$1,meta31079__$1,___$2,fn1__$1,meta31082){
return (new cljs.core.async.t_cljs$core$async31081(map_LT___$1,f__$1,ch__$1,meta31079__$1,___$2,fn1__$1,meta31082));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31081(self__.map_LT_,self__.f,self__.ch,self__.meta31079,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31079","meta31079",879771932,null)], null);
});

cljs.core.async.t_cljs$core$async31078.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31078";

cljs.core.async.t_cljs$core$async31078.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31078");
});

cljs.core.async.__GT_t_cljs$core$async31078 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31078(map_LT___$1,f__$1,ch__$1,meta31079){
return (new cljs.core.async.t_cljs$core$async31078(map_LT___$1,f__$1,ch__$1,meta31079));
});

}

return (new cljs.core.async.t_cljs$core$async31078(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31087 = (function (map_GT_,f,ch,meta31088){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31088 = meta31088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31089,meta31088__$1){
var self__ = this;
var _31089__$1 = this;
return (new cljs.core.async.t_cljs$core$async31087(self__.map_GT_,self__.f,self__.ch,meta31088__$1));
});

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31089){
var self__ = this;
var _31089__$1 = this;
return self__.meta31088;
});

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31088","meta31088",2107840756,null)], null);
});

cljs.core.async.t_cljs$core$async31087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31087";

cljs.core.async.t_cljs$core$async31087.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31087");
});

cljs.core.async.__GT_t_cljs$core$async31087 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31087(map_GT___$1,f__$1,ch__$1,meta31088){
return (new cljs.core.async.t_cljs$core$async31087(map_GT___$1,f__$1,ch__$1,meta31088));
});

}

return (new cljs.core.async.t_cljs$core$async31087(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31093 = (function (filter_GT_,p,ch,meta31094){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31094 = meta31094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31095,meta31094__$1){
var self__ = this;
var _31095__$1 = this;
return (new cljs.core.async.t_cljs$core$async31093(self__.filter_GT_,self__.p,self__.ch,meta31094__$1));
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31095){
var self__ = this;
var _31095__$1 = this;
return self__.meta31094;
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31094","meta31094",-1183335085,null)], null);
});

cljs.core.async.t_cljs$core$async31093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31093";

cljs.core.async.t_cljs$core$async31093.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31093");
});

cljs.core.async.__GT_t_cljs$core$async31093 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31093(filter_GT___$1,p__$1,ch__$1,meta31094){
return (new cljs.core.async.t_cljs$core$async31093(filter_GT___$1,p__$1,ch__$1,meta31094));
});

}

return (new cljs.core.async.t_cljs$core$async31093(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31096 = [];
var len__27054__auto___31140 = arguments.length;
var i__27055__auto___31141 = (0);
while(true){
if((i__27055__auto___31141 < len__27054__auto___31140)){
args31096.push((arguments[i__27055__auto___31141]));

var G__31142 = (i__27055__auto___31141 + (1));
i__27055__auto___31141 = G__31142;
continue;
} else {
}
break;
}

var G__31098 = args31096.length;
switch (G__31098) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31096.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28842__auto___31144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___31144,out){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___31144,out){
return (function (state_31119){
var state_val_31120 = (state_31119[(1)]);
if((state_val_31120 === (7))){
var inst_31115 = (state_31119[(2)]);
var state_31119__$1 = state_31119;
var statearr_31121_31145 = state_31119__$1;
(statearr_31121_31145[(2)] = inst_31115);

(statearr_31121_31145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (1))){
var state_31119__$1 = state_31119;
var statearr_31122_31146 = state_31119__$1;
(statearr_31122_31146[(2)] = null);

(statearr_31122_31146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (4))){
var inst_31101 = (state_31119[(7)]);
var inst_31101__$1 = (state_31119[(2)]);
var inst_31102 = (inst_31101__$1 == null);
var state_31119__$1 = (function (){var statearr_31123 = state_31119;
(statearr_31123[(7)] = inst_31101__$1);

return statearr_31123;
})();
if(cljs.core.truth_(inst_31102)){
var statearr_31124_31147 = state_31119__$1;
(statearr_31124_31147[(1)] = (5));

} else {
var statearr_31125_31148 = state_31119__$1;
(statearr_31125_31148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (6))){
var inst_31101 = (state_31119[(7)]);
var inst_31106 = p.call(null,inst_31101);
var state_31119__$1 = state_31119;
if(cljs.core.truth_(inst_31106)){
var statearr_31126_31149 = state_31119__$1;
(statearr_31126_31149[(1)] = (8));

} else {
var statearr_31127_31150 = state_31119__$1;
(statearr_31127_31150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (3))){
var inst_31117 = (state_31119[(2)]);
var state_31119__$1 = state_31119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31119__$1,inst_31117);
} else {
if((state_val_31120 === (2))){
var state_31119__$1 = state_31119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31119__$1,(4),ch);
} else {
if((state_val_31120 === (11))){
var inst_31109 = (state_31119[(2)]);
var state_31119__$1 = state_31119;
var statearr_31128_31151 = state_31119__$1;
(statearr_31128_31151[(2)] = inst_31109);

(statearr_31128_31151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (9))){
var state_31119__$1 = state_31119;
var statearr_31129_31152 = state_31119__$1;
(statearr_31129_31152[(2)] = null);

(statearr_31129_31152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (5))){
var inst_31104 = cljs.core.async.close_BANG_.call(null,out);
var state_31119__$1 = state_31119;
var statearr_31130_31153 = state_31119__$1;
(statearr_31130_31153[(2)] = inst_31104);

(statearr_31130_31153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (10))){
var inst_31112 = (state_31119[(2)]);
var state_31119__$1 = (function (){var statearr_31131 = state_31119;
(statearr_31131[(8)] = inst_31112);

return statearr_31131;
})();
var statearr_31132_31154 = state_31119__$1;
(statearr_31132_31154[(2)] = null);

(statearr_31132_31154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (8))){
var inst_31101 = (state_31119[(7)]);
var state_31119__$1 = state_31119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31119__$1,(11),out,inst_31101);
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
});})(c__28842__auto___31144,out))
;
return ((function (switch__28730__auto__,c__28842__auto___31144,out){
return (function() {
var cljs$core$async$state_machine__28731__auto__ = null;
var cljs$core$async$state_machine__28731__auto____0 = (function (){
var statearr_31136 = [null,null,null,null,null,null,null,null,null];
(statearr_31136[(0)] = cljs$core$async$state_machine__28731__auto__);

(statearr_31136[(1)] = (1));

return statearr_31136;
});
var cljs$core$async$state_machine__28731__auto____1 = (function (state_31119){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_31119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e31137){if((e31137 instanceof Object)){
var ex__28734__auto__ = e31137;
var statearr_31138_31155 = state_31119;
(statearr_31138_31155[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31156 = state_31119;
state_31119 = G__31156;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$state_machine__28731__auto__ = function(state_31119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28731__auto____1.call(this,state_31119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28731__auto____0;
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28731__auto____1;
return cljs$core$async$state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___31144,out))
})();
var state__28844__auto__ = (function (){var statearr_31139 = f__28843__auto__.call(null);
(statearr_31139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___31144);

return statearr_31139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___31144,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31157 = [];
var len__27054__auto___31160 = arguments.length;
var i__27055__auto___31161 = (0);
while(true){
if((i__27055__auto___31161 < len__27054__auto___31160)){
args31157.push((arguments[i__27055__auto___31161]));

var G__31162 = (i__27055__auto___31161 + (1));
i__27055__auto___31161 = G__31162;
continue;
} else {
}
break;
}

var G__31159 = args31157.length;
switch (G__31159) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31157.length)].join('')));

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
var c__28842__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto__){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto__){
return (function (state_31329){
var state_val_31330 = (state_31329[(1)]);
if((state_val_31330 === (7))){
var inst_31325 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31331_31372 = state_31329__$1;
(statearr_31331_31372[(2)] = inst_31325);

(statearr_31331_31372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (20))){
var inst_31295 = (state_31329[(7)]);
var inst_31306 = (state_31329[(2)]);
var inst_31307 = cljs.core.next.call(null,inst_31295);
var inst_31281 = inst_31307;
var inst_31282 = null;
var inst_31283 = (0);
var inst_31284 = (0);
var state_31329__$1 = (function (){var statearr_31332 = state_31329;
(statearr_31332[(8)] = inst_31306);

(statearr_31332[(9)] = inst_31281);

(statearr_31332[(10)] = inst_31284);

(statearr_31332[(11)] = inst_31282);

(statearr_31332[(12)] = inst_31283);

return statearr_31332;
})();
var statearr_31333_31373 = state_31329__$1;
(statearr_31333_31373[(2)] = null);

(statearr_31333_31373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (1))){
var state_31329__$1 = state_31329;
var statearr_31334_31374 = state_31329__$1;
(statearr_31334_31374[(2)] = null);

(statearr_31334_31374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (4))){
var inst_31270 = (state_31329[(13)]);
var inst_31270__$1 = (state_31329[(2)]);
var inst_31271 = (inst_31270__$1 == null);
var state_31329__$1 = (function (){var statearr_31335 = state_31329;
(statearr_31335[(13)] = inst_31270__$1);

return statearr_31335;
})();
if(cljs.core.truth_(inst_31271)){
var statearr_31336_31375 = state_31329__$1;
(statearr_31336_31375[(1)] = (5));

} else {
var statearr_31337_31376 = state_31329__$1;
(statearr_31337_31376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (15))){
var state_31329__$1 = state_31329;
var statearr_31341_31377 = state_31329__$1;
(statearr_31341_31377[(2)] = null);

(statearr_31341_31377[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (21))){
var state_31329__$1 = state_31329;
var statearr_31342_31378 = state_31329__$1;
(statearr_31342_31378[(2)] = null);

(statearr_31342_31378[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (13))){
var inst_31281 = (state_31329[(9)]);
var inst_31284 = (state_31329[(10)]);
var inst_31282 = (state_31329[(11)]);
var inst_31283 = (state_31329[(12)]);
var inst_31291 = (state_31329[(2)]);
var inst_31292 = (inst_31284 + (1));
var tmp31338 = inst_31281;
var tmp31339 = inst_31282;
var tmp31340 = inst_31283;
var inst_31281__$1 = tmp31338;
var inst_31282__$1 = tmp31339;
var inst_31283__$1 = tmp31340;
var inst_31284__$1 = inst_31292;
var state_31329__$1 = (function (){var statearr_31343 = state_31329;
(statearr_31343[(9)] = inst_31281__$1);

(statearr_31343[(14)] = inst_31291);

(statearr_31343[(10)] = inst_31284__$1);

(statearr_31343[(11)] = inst_31282__$1);

(statearr_31343[(12)] = inst_31283__$1);

return statearr_31343;
})();
var statearr_31344_31379 = state_31329__$1;
(statearr_31344_31379[(2)] = null);

(statearr_31344_31379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (22))){
var state_31329__$1 = state_31329;
var statearr_31345_31380 = state_31329__$1;
(statearr_31345_31380[(2)] = null);

(statearr_31345_31380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (6))){
var inst_31270 = (state_31329[(13)]);
var inst_31279 = f.call(null,inst_31270);
var inst_31280 = cljs.core.seq.call(null,inst_31279);
var inst_31281 = inst_31280;
var inst_31282 = null;
var inst_31283 = (0);
var inst_31284 = (0);
var state_31329__$1 = (function (){var statearr_31346 = state_31329;
(statearr_31346[(9)] = inst_31281);

(statearr_31346[(10)] = inst_31284);

(statearr_31346[(11)] = inst_31282);

(statearr_31346[(12)] = inst_31283);

return statearr_31346;
})();
var statearr_31347_31381 = state_31329__$1;
(statearr_31347_31381[(2)] = null);

(statearr_31347_31381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (17))){
var inst_31295 = (state_31329[(7)]);
var inst_31299 = cljs.core.chunk_first.call(null,inst_31295);
var inst_31300 = cljs.core.chunk_rest.call(null,inst_31295);
var inst_31301 = cljs.core.count.call(null,inst_31299);
var inst_31281 = inst_31300;
var inst_31282 = inst_31299;
var inst_31283 = inst_31301;
var inst_31284 = (0);
var state_31329__$1 = (function (){var statearr_31348 = state_31329;
(statearr_31348[(9)] = inst_31281);

(statearr_31348[(10)] = inst_31284);

(statearr_31348[(11)] = inst_31282);

(statearr_31348[(12)] = inst_31283);

return statearr_31348;
})();
var statearr_31349_31382 = state_31329__$1;
(statearr_31349_31382[(2)] = null);

(statearr_31349_31382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (3))){
var inst_31327 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31329__$1,inst_31327);
} else {
if((state_val_31330 === (12))){
var inst_31315 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31350_31383 = state_31329__$1;
(statearr_31350_31383[(2)] = inst_31315);

(statearr_31350_31383[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (2))){
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31329__$1,(4),in$);
} else {
if((state_val_31330 === (23))){
var inst_31323 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31351_31384 = state_31329__$1;
(statearr_31351_31384[(2)] = inst_31323);

(statearr_31351_31384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (19))){
var inst_31310 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31352_31385 = state_31329__$1;
(statearr_31352_31385[(2)] = inst_31310);

(statearr_31352_31385[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (11))){
var inst_31281 = (state_31329[(9)]);
var inst_31295 = (state_31329[(7)]);
var inst_31295__$1 = cljs.core.seq.call(null,inst_31281);
var state_31329__$1 = (function (){var statearr_31353 = state_31329;
(statearr_31353[(7)] = inst_31295__$1);

return statearr_31353;
})();
if(inst_31295__$1){
var statearr_31354_31386 = state_31329__$1;
(statearr_31354_31386[(1)] = (14));

} else {
var statearr_31355_31387 = state_31329__$1;
(statearr_31355_31387[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (9))){
var inst_31317 = (state_31329[(2)]);
var inst_31318 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31329__$1 = (function (){var statearr_31356 = state_31329;
(statearr_31356[(15)] = inst_31317);

return statearr_31356;
})();
if(cljs.core.truth_(inst_31318)){
var statearr_31357_31388 = state_31329__$1;
(statearr_31357_31388[(1)] = (21));

} else {
var statearr_31358_31389 = state_31329__$1;
(statearr_31358_31389[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (5))){
var inst_31273 = cljs.core.async.close_BANG_.call(null,out);
var state_31329__$1 = state_31329;
var statearr_31359_31390 = state_31329__$1;
(statearr_31359_31390[(2)] = inst_31273);

(statearr_31359_31390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (14))){
var inst_31295 = (state_31329[(7)]);
var inst_31297 = cljs.core.chunked_seq_QMARK_.call(null,inst_31295);
var state_31329__$1 = state_31329;
if(inst_31297){
var statearr_31360_31391 = state_31329__$1;
(statearr_31360_31391[(1)] = (17));

} else {
var statearr_31361_31392 = state_31329__$1;
(statearr_31361_31392[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (16))){
var inst_31313 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31362_31393 = state_31329__$1;
(statearr_31362_31393[(2)] = inst_31313);

(statearr_31362_31393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (10))){
var inst_31284 = (state_31329[(10)]);
var inst_31282 = (state_31329[(11)]);
var inst_31289 = cljs.core._nth.call(null,inst_31282,inst_31284);
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31329__$1,(13),out,inst_31289);
} else {
if((state_val_31330 === (18))){
var inst_31295 = (state_31329[(7)]);
var inst_31304 = cljs.core.first.call(null,inst_31295);
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31329__$1,(20),out,inst_31304);
} else {
if((state_val_31330 === (8))){
var inst_31284 = (state_31329[(10)]);
var inst_31283 = (state_31329[(12)]);
var inst_31286 = (inst_31284 < inst_31283);
var inst_31287 = inst_31286;
var state_31329__$1 = state_31329;
if(cljs.core.truth_(inst_31287)){
var statearr_31363_31394 = state_31329__$1;
(statearr_31363_31394[(1)] = (10));

} else {
var statearr_31364_31395 = state_31329__$1;
(statearr_31364_31395[(1)] = (11));

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
});})(c__28842__auto__))
;
return ((function (switch__28730__auto__,c__28842__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28731__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28731__auto____0 = (function (){
var statearr_31368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31368[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28731__auto__);

(statearr_31368[(1)] = (1));

return statearr_31368;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28731__auto____1 = (function (state_31329){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_31329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e31369){if((e31369 instanceof Object)){
var ex__28734__auto__ = e31369;
var statearr_31370_31396 = state_31329;
(statearr_31370_31396[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31397 = state_31329;
state_31329 = G__31397;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28731__auto__ = function(state_31329){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28731__auto____1.call(this,state_31329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28731__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28731__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto__))
})();
var state__28844__auto__ = (function (){var statearr_31371 = f__28843__auto__.call(null);
(statearr_31371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto__);

return statearr_31371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto__))
);

return c__28842__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31398 = [];
var len__27054__auto___31401 = arguments.length;
var i__27055__auto___31402 = (0);
while(true){
if((i__27055__auto___31402 < len__27054__auto___31401)){
args31398.push((arguments[i__27055__auto___31402]));

var G__31403 = (i__27055__auto___31402 + (1));
i__27055__auto___31402 = G__31403;
continue;
} else {
}
break;
}

var G__31400 = args31398.length;
switch (G__31400) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31398.length)].join('')));

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
var args31405 = [];
var len__27054__auto___31408 = arguments.length;
var i__27055__auto___31409 = (0);
while(true){
if((i__27055__auto___31409 < len__27054__auto___31408)){
args31405.push((arguments[i__27055__auto___31409]));

var G__31410 = (i__27055__auto___31409 + (1));
i__27055__auto___31409 = G__31410;
continue;
} else {
}
break;
}

var G__31407 = args31405.length;
switch (G__31407) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31405.length)].join('')));

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
var args31412 = [];
var len__27054__auto___31463 = arguments.length;
var i__27055__auto___31464 = (0);
while(true){
if((i__27055__auto___31464 < len__27054__auto___31463)){
args31412.push((arguments[i__27055__auto___31464]));

var G__31465 = (i__27055__auto___31464 + (1));
i__27055__auto___31464 = G__31465;
continue;
} else {
}
break;
}

var G__31414 = args31412.length;
switch (G__31414) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31412.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28842__auto___31467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___31467,out){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___31467,out){
return (function (state_31438){
var state_val_31439 = (state_31438[(1)]);
if((state_val_31439 === (7))){
var inst_31433 = (state_31438[(2)]);
var state_31438__$1 = state_31438;
var statearr_31440_31468 = state_31438__$1;
(statearr_31440_31468[(2)] = inst_31433);

(statearr_31440_31468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (1))){
var inst_31415 = null;
var state_31438__$1 = (function (){var statearr_31441 = state_31438;
(statearr_31441[(7)] = inst_31415);

return statearr_31441;
})();
var statearr_31442_31469 = state_31438__$1;
(statearr_31442_31469[(2)] = null);

(statearr_31442_31469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (4))){
var inst_31418 = (state_31438[(8)]);
var inst_31418__$1 = (state_31438[(2)]);
var inst_31419 = (inst_31418__$1 == null);
var inst_31420 = cljs.core.not.call(null,inst_31419);
var state_31438__$1 = (function (){var statearr_31443 = state_31438;
(statearr_31443[(8)] = inst_31418__$1);

return statearr_31443;
})();
if(inst_31420){
var statearr_31444_31470 = state_31438__$1;
(statearr_31444_31470[(1)] = (5));

} else {
var statearr_31445_31471 = state_31438__$1;
(statearr_31445_31471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (6))){
var state_31438__$1 = state_31438;
var statearr_31446_31472 = state_31438__$1;
(statearr_31446_31472[(2)] = null);

(statearr_31446_31472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (3))){
var inst_31435 = (state_31438[(2)]);
var inst_31436 = cljs.core.async.close_BANG_.call(null,out);
var state_31438__$1 = (function (){var statearr_31447 = state_31438;
(statearr_31447[(9)] = inst_31435);

return statearr_31447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31438__$1,inst_31436);
} else {
if((state_val_31439 === (2))){
var state_31438__$1 = state_31438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31438__$1,(4),ch);
} else {
if((state_val_31439 === (11))){
var inst_31418 = (state_31438[(8)]);
var inst_31427 = (state_31438[(2)]);
var inst_31415 = inst_31418;
var state_31438__$1 = (function (){var statearr_31448 = state_31438;
(statearr_31448[(10)] = inst_31427);

(statearr_31448[(7)] = inst_31415);

return statearr_31448;
})();
var statearr_31449_31473 = state_31438__$1;
(statearr_31449_31473[(2)] = null);

(statearr_31449_31473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (9))){
var inst_31418 = (state_31438[(8)]);
var state_31438__$1 = state_31438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31438__$1,(11),out,inst_31418);
} else {
if((state_val_31439 === (5))){
var inst_31418 = (state_31438[(8)]);
var inst_31415 = (state_31438[(7)]);
var inst_31422 = cljs.core._EQ_.call(null,inst_31418,inst_31415);
var state_31438__$1 = state_31438;
if(inst_31422){
var statearr_31451_31474 = state_31438__$1;
(statearr_31451_31474[(1)] = (8));

} else {
var statearr_31452_31475 = state_31438__$1;
(statearr_31452_31475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (10))){
var inst_31430 = (state_31438[(2)]);
var state_31438__$1 = state_31438;
var statearr_31453_31476 = state_31438__$1;
(statearr_31453_31476[(2)] = inst_31430);

(statearr_31453_31476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (8))){
var inst_31415 = (state_31438[(7)]);
var tmp31450 = inst_31415;
var inst_31415__$1 = tmp31450;
var state_31438__$1 = (function (){var statearr_31454 = state_31438;
(statearr_31454[(7)] = inst_31415__$1);

return statearr_31454;
})();
var statearr_31455_31477 = state_31438__$1;
(statearr_31455_31477[(2)] = null);

(statearr_31455_31477[(1)] = (2));


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
});})(c__28842__auto___31467,out))
;
return ((function (switch__28730__auto__,c__28842__auto___31467,out){
return (function() {
var cljs$core$async$state_machine__28731__auto__ = null;
var cljs$core$async$state_machine__28731__auto____0 = (function (){
var statearr_31459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31459[(0)] = cljs$core$async$state_machine__28731__auto__);

(statearr_31459[(1)] = (1));

return statearr_31459;
});
var cljs$core$async$state_machine__28731__auto____1 = (function (state_31438){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_31438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e31460){if((e31460 instanceof Object)){
var ex__28734__auto__ = e31460;
var statearr_31461_31478 = state_31438;
(statearr_31461_31478[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31479 = state_31438;
state_31438 = G__31479;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$state_machine__28731__auto__ = function(state_31438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28731__auto____1.call(this,state_31438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28731__auto____0;
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28731__auto____1;
return cljs$core$async$state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___31467,out))
})();
var state__28844__auto__ = (function (){var statearr_31462 = f__28843__auto__.call(null);
(statearr_31462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___31467);

return statearr_31462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___31467,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31480 = [];
var len__27054__auto___31550 = arguments.length;
var i__27055__auto___31551 = (0);
while(true){
if((i__27055__auto___31551 < len__27054__auto___31550)){
args31480.push((arguments[i__27055__auto___31551]));

var G__31552 = (i__27055__auto___31551 + (1));
i__27055__auto___31551 = G__31552;
continue;
} else {
}
break;
}

var G__31482 = args31480.length;
switch (G__31482) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31480.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28842__auto___31554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___31554,out){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___31554,out){
return (function (state_31520){
var state_val_31521 = (state_31520[(1)]);
if((state_val_31521 === (7))){
var inst_31516 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31522_31555 = state_31520__$1;
(statearr_31522_31555[(2)] = inst_31516);

(statearr_31522_31555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (1))){
var inst_31483 = (new Array(n));
var inst_31484 = inst_31483;
var inst_31485 = (0);
var state_31520__$1 = (function (){var statearr_31523 = state_31520;
(statearr_31523[(7)] = inst_31485);

(statearr_31523[(8)] = inst_31484);

return statearr_31523;
})();
var statearr_31524_31556 = state_31520__$1;
(statearr_31524_31556[(2)] = null);

(statearr_31524_31556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (4))){
var inst_31488 = (state_31520[(9)]);
var inst_31488__$1 = (state_31520[(2)]);
var inst_31489 = (inst_31488__$1 == null);
var inst_31490 = cljs.core.not.call(null,inst_31489);
var state_31520__$1 = (function (){var statearr_31525 = state_31520;
(statearr_31525[(9)] = inst_31488__$1);

return statearr_31525;
})();
if(inst_31490){
var statearr_31526_31557 = state_31520__$1;
(statearr_31526_31557[(1)] = (5));

} else {
var statearr_31527_31558 = state_31520__$1;
(statearr_31527_31558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (15))){
var inst_31510 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31528_31559 = state_31520__$1;
(statearr_31528_31559[(2)] = inst_31510);

(statearr_31528_31559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (13))){
var state_31520__$1 = state_31520;
var statearr_31529_31560 = state_31520__$1;
(statearr_31529_31560[(2)] = null);

(statearr_31529_31560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (6))){
var inst_31485 = (state_31520[(7)]);
var inst_31506 = (inst_31485 > (0));
var state_31520__$1 = state_31520;
if(cljs.core.truth_(inst_31506)){
var statearr_31530_31561 = state_31520__$1;
(statearr_31530_31561[(1)] = (12));

} else {
var statearr_31531_31562 = state_31520__$1;
(statearr_31531_31562[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (3))){
var inst_31518 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31520__$1,inst_31518);
} else {
if((state_val_31521 === (12))){
var inst_31484 = (state_31520[(8)]);
var inst_31508 = cljs.core.vec.call(null,inst_31484);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31520__$1,(15),out,inst_31508);
} else {
if((state_val_31521 === (2))){
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31520__$1,(4),ch);
} else {
if((state_val_31521 === (11))){
var inst_31500 = (state_31520[(2)]);
var inst_31501 = (new Array(n));
var inst_31484 = inst_31501;
var inst_31485 = (0);
var state_31520__$1 = (function (){var statearr_31532 = state_31520;
(statearr_31532[(10)] = inst_31500);

(statearr_31532[(7)] = inst_31485);

(statearr_31532[(8)] = inst_31484);

return statearr_31532;
})();
var statearr_31533_31563 = state_31520__$1;
(statearr_31533_31563[(2)] = null);

(statearr_31533_31563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (9))){
var inst_31484 = (state_31520[(8)]);
var inst_31498 = cljs.core.vec.call(null,inst_31484);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31520__$1,(11),out,inst_31498);
} else {
if((state_val_31521 === (5))){
var inst_31485 = (state_31520[(7)]);
var inst_31484 = (state_31520[(8)]);
var inst_31488 = (state_31520[(9)]);
var inst_31493 = (state_31520[(11)]);
var inst_31492 = (inst_31484[inst_31485] = inst_31488);
var inst_31493__$1 = (inst_31485 + (1));
var inst_31494 = (inst_31493__$1 < n);
var state_31520__$1 = (function (){var statearr_31534 = state_31520;
(statearr_31534[(12)] = inst_31492);

(statearr_31534[(11)] = inst_31493__$1);

return statearr_31534;
})();
if(cljs.core.truth_(inst_31494)){
var statearr_31535_31564 = state_31520__$1;
(statearr_31535_31564[(1)] = (8));

} else {
var statearr_31536_31565 = state_31520__$1;
(statearr_31536_31565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (14))){
var inst_31513 = (state_31520[(2)]);
var inst_31514 = cljs.core.async.close_BANG_.call(null,out);
var state_31520__$1 = (function (){var statearr_31538 = state_31520;
(statearr_31538[(13)] = inst_31513);

return statearr_31538;
})();
var statearr_31539_31566 = state_31520__$1;
(statearr_31539_31566[(2)] = inst_31514);

(statearr_31539_31566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (10))){
var inst_31504 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31540_31567 = state_31520__$1;
(statearr_31540_31567[(2)] = inst_31504);

(statearr_31540_31567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (8))){
var inst_31484 = (state_31520[(8)]);
var inst_31493 = (state_31520[(11)]);
var tmp31537 = inst_31484;
var inst_31484__$1 = tmp31537;
var inst_31485 = inst_31493;
var state_31520__$1 = (function (){var statearr_31541 = state_31520;
(statearr_31541[(7)] = inst_31485);

(statearr_31541[(8)] = inst_31484__$1);

return statearr_31541;
})();
var statearr_31542_31568 = state_31520__$1;
(statearr_31542_31568[(2)] = null);

(statearr_31542_31568[(1)] = (2));


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
});})(c__28842__auto___31554,out))
;
return ((function (switch__28730__auto__,c__28842__auto___31554,out){
return (function() {
var cljs$core$async$state_machine__28731__auto__ = null;
var cljs$core$async$state_machine__28731__auto____0 = (function (){
var statearr_31546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31546[(0)] = cljs$core$async$state_machine__28731__auto__);

(statearr_31546[(1)] = (1));

return statearr_31546;
});
var cljs$core$async$state_machine__28731__auto____1 = (function (state_31520){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_31520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e31547){if((e31547 instanceof Object)){
var ex__28734__auto__ = e31547;
var statearr_31548_31569 = state_31520;
(statearr_31548_31569[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31570 = state_31520;
state_31520 = G__31570;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$state_machine__28731__auto__ = function(state_31520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28731__auto____1.call(this,state_31520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28731__auto____0;
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28731__auto____1;
return cljs$core$async$state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___31554,out))
})();
var state__28844__auto__ = (function (){var statearr_31549 = f__28843__auto__.call(null);
(statearr_31549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___31554);

return statearr_31549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___31554,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31571 = [];
var len__27054__auto___31645 = arguments.length;
var i__27055__auto___31646 = (0);
while(true){
if((i__27055__auto___31646 < len__27054__auto___31645)){
args31571.push((arguments[i__27055__auto___31646]));

var G__31647 = (i__27055__auto___31646 + (1));
i__27055__auto___31646 = G__31647;
continue;
} else {
}
break;
}

var G__31573 = args31571.length;
switch (G__31573) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31571.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28842__auto___31649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___31649,out){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___31649,out){
return (function (state_31615){
var state_val_31616 = (state_31615[(1)]);
if((state_val_31616 === (7))){
var inst_31611 = (state_31615[(2)]);
var state_31615__$1 = state_31615;
var statearr_31617_31650 = state_31615__$1;
(statearr_31617_31650[(2)] = inst_31611);

(statearr_31617_31650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (1))){
var inst_31574 = [];
var inst_31575 = inst_31574;
var inst_31576 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31615__$1 = (function (){var statearr_31618 = state_31615;
(statearr_31618[(7)] = inst_31576);

(statearr_31618[(8)] = inst_31575);

return statearr_31618;
})();
var statearr_31619_31651 = state_31615__$1;
(statearr_31619_31651[(2)] = null);

(statearr_31619_31651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (4))){
var inst_31579 = (state_31615[(9)]);
var inst_31579__$1 = (state_31615[(2)]);
var inst_31580 = (inst_31579__$1 == null);
var inst_31581 = cljs.core.not.call(null,inst_31580);
var state_31615__$1 = (function (){var statearr_31620 = state_31615;
(statearr_31620[(9)] = inst_31579__$1);

return statearr_31620;
})();
if(inst_31581){
var statearr_31621_31652 = state_31615__$1;
(statearr_31621_31652[(1)] = (5));

} else {
var statearr_31622_31653 = state_31615__$1;
(statearr_31622_31653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (15))){
var inst_31605 = (state_31615[(2)]);
var state_31615__$1 = state_31615;
var statearr_31623_31654 = state_31615__$1;
(statearr_31623_31654[(2)] = inst_31605);

(statearr_31623_31654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (13))){
var state_31615__$1 = state_31615;
var statearr_31624_31655 = state_31615__$1;
(statearr_31624_31655[(2)] = null);

(statearr_31624_31655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (6))){
var inst_31575 = (state_31615[(8)]);
var inst_31600 = inst_31575.length;
var inst_31601 = (inst_31600 > (0));
var state_31615__$1 = state_31615;
if(cljs.core.truth_(inst_31601)){
var statearr_31625_31656 = state_31615__$1;
(statearr_31625_31656[(1)] = (12));

} else {
var statearr_31626_31657 = state_31615__$1;
(statearr_31626_31657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (3))){
var inst_31613 = (state_31615[(2)]);
var state_31615__$1 = state_31615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31615__$1,inst_31613);
} else {
if((state_val_31616 === (12))){
var inst_31575 = (state_31615[(8)]);
var inst_31603 = cljs.core.vec.call(null,inst_31575);
var state_31615__$1 = state_31615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31615__$1,(15),out,inst_31603);
} else {
if((state_val_31616 === (2))){
var state_31615__$1 = state_31615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31615__$1,(4),ch);
} else {
if((state_val_31616 === (11))){
var inst_31579 = (state_31615[(9)]);
var inst_31583 = (state_31615[(10)]);
var inst_31593 = (state_31615[(2)]);
var inst_31594 = [];
var inst_31595 = inst_31594.push(inst_31579);
var inst_31575 = inst_31594;
var inst_31576 = inst_31583;
var state_31615__$1 = (function (){var statearr_31627 = state_31615;
(statearr_31627[(7)] = inst_31576);

(statearr_31627[(8)] = inst_31575);

(statearr_31627[(11)] = inst_31595);

(statearr_31627[(12)] = inst_31593);

return statearr_31627;
})();
var statearr_31628_31658 = state_31615__$1;
(statearr_31628_31658[(2)] = null);

(statearr_31628_31658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (9))){
var inst_31575 = (state_31615[(8)]);
var inst_31591 = cljs.core.vec.call(null,inst_31575);
var state_31615__$1 = state_31615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31615__$1,(11),out,inst_31591);
} else {
if((state_val_31616 === (5))){
var inst_31576 = (state_31615[(7)]);
var inst_31579 = (state_31615[(9)]);
var inst_31583 = (state_31615[(10)]);
var inst_31583__$1 = f.call(null,inst_31579);
var inst_31584 = cljs.core._EQ_.call(null,inst_31583__$1,inst_31576);
var inst_31585 = cljs.core.keyword_identical_QMARK_.call(null,inst_31576,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31586 = (inst_31584) || (inst_31585);
var state_31615__$1 = (function (){var statearr_31629 = state_31615;
(statearr_31629[(10)] = inst_31583__$1);

return statearr_31629;
})();
if(cljs.core.truth_(inst_31586)){
var statearr_31630_31659 = state_31615__$1;
(statearr_31630_31659[(1)] = (8));

} else {
var statearr_31631_31660 = state_31615__$1;
(statearr_31631_31660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (14))){
var inst_31608 = (state_31615[(2)]);
var inst_31609 = cljs.core.async.close_BANG_.call(null,out);
var state_31615__$1 = (function (){var statearr_31633 = state_31615;
(statearr_31633[(13)] = inst_31608);

return statearr_31633;
})();
var statearr_31634_31661 = state_31615__$1;
(statearr_31634_31661[(2)] = inst_31609);

(statearr_31634_31661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (10))){
var inst_31598 = (state_31615[(2)]);
var state_31615__$1 = state_31615;
var statearr_31635_31662 = state_31615__$1;
(statearr_31635_31662[(2)] = inst_31598);

(statearr_31635_31662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (8))){
var inst_31575 = (state_31615[(8)]);
var inst_31579 = (state_31615[(9)]);
var inst_31583 = (state_31615[(10)]);
var inst_31588 = inst_31575.push(inst_31579);
var tmp31632 = inst_31575;
var inst_31575__$1 = tmp31632;
var inst_31576 = inst_31583;
var state_31615__$1 = (function (){var statearr_31636 = state_31615;
(statearr_31636[(7)] = inst_31576);

(statearr_31636[(8)] = inst_31575__$1);

(statearr_31636[(14)] = inst_31588);

return statearr_31636;
})();
var statearr_31637_31663 = state_31615__$1;
(statearr_31637_31663[(2)] = null);

(statearr_31637_31663[(1)] = (2));


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
});})(c__28842__auto___31649,out))
;
return ((function (switch__28730__auto__,c__28842__auto___31649,out){
return (function() {
var cljs$core$async$state_machine__28731__auto__ = null;
var cljs$core$async$state_machine__28731__auto____0 = (function (){
var statearr_31641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31641[(0)] = cljs$core$async$state_machine__28731__auto__);

(statearr_31641[(1)] = (1));

return statearr_31641;
});
var cljs$core$async$state_machine__28731__auto____1 = (function (state_31615){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_31615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e31642){if((e31642 instanceof Object)){
var ex__28734__auto__ = e31642;
var statearr_31643_31664 = state_31615;
(statearr_31643_31664[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31665 = state_31615;
state_31615 = G__31665;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
cljs$core$async$state_machine__28731__auto__ = function(state_31615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28731__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28731__auto____1.call(this,state_31615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28731__auto____0;
cljs$core$async$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28731__auto____1;
return cljs$core$async$state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___31649,out))
})();
var state__28844__auto__ = (function (){var statearr_31644 = f__28843__auto__.call(null);
(statearr_31644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___31649);

return statearr_31644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___31649,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1499270867759