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
var args44263 = [];
var len__27054__auto___44269 = arguments.length;
var i__27055__auto___44270 = (0);
while(true){
if((i__27055__auto___44270 < len__27054__auto___44269)){
args44263.push((arguments[i__27055__auto___44270]));

var G__44271 = (i__27055__auto___44270 + (1));
i__27055__auto___44270 = G__44271;
continue;
} else {
}
break;
}

var G__44265 = args44263.length;
switch (G__44265) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44263.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44266 = (function (f,blockable,meta44267){
this.f = f;
this.blockable = blockable;
this.meta44267 = meta44267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44268,meta44267__$1){
var self__ = this;
var _44268__$1 = this;
return (new cljs.core.async.t_cljs$core$async44266(self__.f,self__.blockable,meta44267__$1));
});

cljs.core.async.t_cljs$core$async44266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44268){
var self__ = this;
var _44268__$1 = this;
return self__.meta44267;
});

cljs.core.async.t_cljs$core$async44266.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44266.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44267","meta44267",99037987,null)], null);
});

cljs.core.async.t_cljs$core$async44266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44266";

cljs.core.async.t_cljs$core$async44266.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async44266");
});

cljs.core.async.__GT_t_cljs$core$async44266 = (function cljs$core$async$__GT_t_cljs$core$async44266(f__$1,blockable__$1,meta44267){
return (new cljs.core.async.t_cljs$core$async44266(f__$1,blockable__$1,meta44267));
});

}

return (new cljs.core.async.t_cljs$core$async44266(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args44275 = [];
var len__27054__auto___44278 = arguments.length;
var i__27055__auto___44279 = (0);
while(true){
if((i__27055__auto___44279 < len__27054__auto___44278)){
args44275.push((arguments[i__27055__auto___44279]));

var G__44280 = (i__27055__auto___44279 + (1));
i__27055__auto___44279 = G__44280;
continue;
} else {
}
break;
}

var G__44277 = args44275.length;
switch (G__44277) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44275.length)].join('')));

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
var args44282 = [];
var len__27054__auto___44285 = arguments.length;
var i__27055__auto___44286 = (0);
while(true){
if((i__27055__auto___44286 < len__27054__auto___44285)){
args44282.push((arguments[i__27055__auto___44286]));

var G__44287 = (i__27055__auto___44286 + (1));
i__27055__auto___44286 = G__44287;
continue;
} else {
}
break;
}

var G__44284 = args44282.length;
switch (G__44284) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44282.length)].join('')));

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
var args44289 = [];
var len__27054__auto___44292 = arguments.length;
var i__27055__auto___44293 = (0);
while(true){
if((i__27055__auto___44293 < len__27054__auto___44292)){
args44289.push((arguments[i__27055__auto___44293]));

var G__44294 = (i__27055__auto___44293 + (1));
i__27055__auto___44293 = G__44294;
continue;
} else {
}
break;
}

var G__44291 = args44289.length;
switch (G__44291) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44289.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44296 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44296);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44296,ret){
return (function (){
return fn1.call(null,val_44296);
});})(val_44296,ret))
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
var args44297 = [];
var len__27054__auto___44300 = arguments.length;
var i__27055__auto___44301 = (0);
while(true){
if((i__27055__auto___44301 < len__27054__auto___44300)){
args44297.push((arguments[i__27055__auto___44301]));

var G__44302 = (i__27055__auto___44301 + (1));
i__27055__auto___44301 = G__44302;
continue;
} else {
}
break;
}

var G__44299 = args44297.length;
switch (G__44299) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44297.length)].join('')));

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
var n__26894__auto___44304 = n;
var x_44305 = (0);
while(true){
if((x_44305 < n__26894__auto___44304)){
(a[x_44305] = (0));

var G__44306 = (x_44305 + (1));
x_44305 = G__44306;
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

var G__44307 = (i + (1));
i = G__44307;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44311 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44311 = (function (alt_flag,flag,meta44312){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta44312 = meta44312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44313,meta44312__$1){
var self__ = this;
var _44313__$1 = this;
return (new cljs.core.async.t_cljs$core$async44311(self__.alt_flag,self__.flag,meta44312__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44311.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44313){
var self__ = this;
var _44313__$1 = this;
return self__.meta44312;
});})(flag))
;

cljs.core.async.t_cljs$core$async44311.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44311.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44311.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44311.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44311.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44312","meta44312",-2049623768,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44311.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44311";

cljs.core.async.t_cljs$core$async44311.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async44311");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44311 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44311(alt_flag__$1,flag__$1,meta44312){
return (new cljs.core.async.t_cljs$core$async44311(alt_flag__$1,flag__$1,meta44312));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44311(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44317 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44317 = (function (alt_handler,flag,cb,meta44318){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta44318 = meta44318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44319,meta44318__$1){
var self__ = this;
var _44319__$1 = this;
return (new cljs.core.async.t_cljs$core$async44317(self__.alt_handler,self__.flag,self__.cb,meta44318__$1));
});

cljs.core.async.t_cljs$core$async44317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44319){
var self__ = this;
var _44319__$1 = this;
return self__.meta44318;
});

cljs.core.async.t_cljs$core$async44317.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44317.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44318","meta44318",-1176265620,null)], null);
});

cljs.core.async.t_cljs$core$async44317.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44317";

cljs.core.async.t_cljs$core$async44317.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async44317");
});

cljs.core.async.__GT_t_cljs$core$async44317 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44317(alt_handler__$1,flag__$1,cb__$1,meta44318){
return (new cljs.core.async.t_cljs$core$async44317(alt_handler__$1,flag__$1,cb__$1,meta44318));
});

}

return (new cljs.core.async.t_cljs$core$async44317(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44320_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44320_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44321_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44321_SHARP_,port], null));
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
var G__44322 = (i + (1));
i = G__44322;
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
var len__27054__auto___44328 = arguments.length;
var i__27055__auto___44329 = (0);
while(true){
if((i__27055__auto___44329 < len__27054__auto___44328)){
args__27061__auto__.push((arguments[i__27055__auto___44329]));

var G__44330 = (i__27055__auto___44329 + (1));
i__27055__auto___44329 = G__44330;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44325){
var map__44326 = p__44325;
var map__44326__$1 = ((((!((map__44326 == null)))?((((map__44326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44326):map__44326);
var opts = map__44326__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44323){
var G__44324 = cljs.core.first.call(null,seq44323);
var seq44323__$1 = cljs.core.next.call(null,seq44323);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44324,seq44323__$1);
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
var args44331 = [];
var len__27054__auto___44381 = arguments.length;
var i__27055__auto___44382 = (0);
while(true){
if((i__27055__auto___44382 < len__27054__auto___44381)){
args44331.push((arguments[i__27055__auto___44382]));

var G__44383 = (i__27055__auto___44382 + (1));
i__27055__auto___44382 = G__44383;
continue;
} else {
}
break;
}

var G__44333 = args44331.length;
switch (G__44333) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44331.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28009__auto___44385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___44385){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___44385){
return (function (state_44357){
var state_val_44358 = (state_44357[(1)]);
if((state_val_44358 === (7))){
var inst_44353 = (state_44357[(2)]);
var state_44357__$1 = state_44357;
var statearr_44359_44386 = state_44357__$1;
(statearr_44359_44386[(2)] = inst_44353);

(statearr_44359_44386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (1))){
var state_44357__$1 = state_44357;
var statearr_44360_44387 = state_44357__$1;
(statearr_44360_44387[(2)] = null);

(statearr_44360_44387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (4))){
var inst_44336 = (state_44357[(7)]);
var inst_44336__$1 = (state_44357[(2)]);
var inst_44337 = (inst_44336__$1 == null);
var state_44357__$1 = (function (){var statearr_44361 = state_44357;
(statearr_44361[(7)] = inst_44336__$1);

return statearr_44361;
})();
if(cljs.core.truth_(inst_44337)){
var statearr_44362_44388 = state_44357__$1;
(statearr_44362_44388[(1)] = (5));

} else {
var statearr_44363_44389 = state_44357__$1;
(statearr_44363_44389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (13))){
var state_44357__$1 = state_44357;
var statearr_44364_44390 = state_44357__$1;
(statearr_44364_44390[(2)] = null);

(statearr_44364_44390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (6))){
var inst_44336 = (state_44357[(7)]);
var state_44357__$1 = state_44357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44357__$1,(11),to,inst_44336);
} else {
if((state_val_44358 === (3))){
var inst_44355 = (state_44357[(2)]);
var state_44357__$1 = state_44357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44357__$1,inst_44355);
} else {
if((state_val_44358 === (12))){
var state_44357__$1 = state_44357;
var statearr_44365_44391 = state_44357__$1;
(statearr_44365_44391[(2)] = null);

(statearr_44365_44391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (2))){
var state_44357__$1 = state_44357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44357__$1,(4),from);
} else {
if((state_val_44358 === (11))){
var inst_44346 = (state_44357[(2)]);
var state_44357__$1 = state_44357;
if(cljs.core.truth_(inst_44346)){
var statearr_44366_44392 = state_44357__$1;
(statearr_44366_44392[(1)] = (12));

} else {
var statearr_44367_44393 = state_44357__$1;
(statearr_44367_44393[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (9))){
var state_44357__$1 = state_44357;
var statearr_44368_44394 = state_44357__$1;
(statearr_44368_44394[(2)] = null);

(statearr_44368_44394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (5))){
var state_44357__$1 = state_44357;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44369_44395 = state_44357__$1;
(statearr_44369_44395[(1)] = (8));

} else {
var statearr_44370_44396 = state_44357__$1;
(statearr_44370_44396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (14))){
var inst_44351 = (state_44357[(2)]);
var state_44357__$1 = state_44357;
var statearr_44371_44397 = state_44357__$1;
(statearr_44371_44397[(2)] = inst_44351);

(statearr_44371_44397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (10))){
var inst_44343 = (state_44357[(2)]);
var state_44357__$1 = state_44357;
var statearr_44372_44398 = state_44357__$1;
(statearr_44372_44398[(2)] = inst_44343);

(statearr_44372_44398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (8))){
var inst_44340 = cljs.core.async.close_BANG_.call(null,to);
var state_44357__$1 = state_44357;
var statearr_44373_44399 = state_44357__$1;
(statearr_44373_44399[(2)] = inst_44340);

(statearr_44373_44399[(1)] = (10));


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
});})(c__28009__auto___44385))
;
return ((function (switch__27988__auto__,c__28009__auto___44385){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_44377 = [null,null,null,null,null,null,null,null];
(statearr_44377[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_44377[(1)] = (1));

return statearr_44377;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_44357){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_44357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e44378){if((e44378 instanceof Object)){
var ex__27992__auto__ = e44378;
var statearr_44379_44400 = state_44357;
(statearr_44379_44400[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44401 = state_44357;
state_44357 = G__44401;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_44357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_44357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___44385))
})();
var state__28011__auto__ = (function (){var statearr_44380 = f__28010__auto__.call(null);
(statearr_44380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___44385);

return statearr_44380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___44385))
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
return (function (p__44589){
var vec__44590 = p__44589;
var v = cljs.core.nth.call(null,vec__44590,(0),null);
var p = cljs.core.nth.call(null,vec__44590,(1),null);
var job = vec__44590;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28009__auto___44776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___44776,res,vec__44590,v,p,job,jobs,results){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___44776,res,vec__44590,v,p,job,jobs,results){
return (function (state_44597){
var state_val_44598 = (state_44597[(1)]);
if((state_val_44598 === (1))){
var state_44597__$1 = state_44597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44597__$1,(2),res,v);
} else {
if((state_val_44598 === (2))){
var inst_44594 = (state_44597[(2)]);
var inst_44595 = cljs.core.async.close_BANG_.call(null,res);
var state_44597__$1 = (function (){var statearr_44599 = state_44597;
(statearr_44599[(7)] = inst_44594);

return statearr_44599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44597__$1,inst_44595);
} else {
return null;
}
}
});})(c__28009__auto___44776,res,vec__44590,v,p,job,jobs,results))
;
return ((function (switch__27988__auto__,c__28009__auto___44776,res,vec__44590,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_44603 = [null,null,null,null,null,null,null,null];
(statearr_44603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_44603[(1)] = (1));

return statearr_44603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_44597){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_44597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e44604){if((e44604 instanceof Object)){
var ex__27992__auto__ = e44604;
var statearr_44605_44777 = state_44597;
(statearr_44605_44777[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44778 = state_44597;
state_44597 = G__44778;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_44597){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_44597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___44776,res,vec__44590,v,p,job,jobs,results))
})();
var state__28011__auto__ = (function (){var statearr_44606 = f__28010__auto__.call(null);
(statearr_44606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___44776);

return statearr_44606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___44776,res,vec__44590,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44607){
var vec__44608 = p__44607;
var v = cljs.core.nth.call(null,vec__44608,(0),null);
var p = cljs.core.nth.call(null,vec__44608,(1),null);
var job = vec__44608;
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
var n__26894__auto___44779 = n;
var __44780 = (0);
while(true){
if((__44780 < n__26894__auto___44779)){
var G__44611_44781 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44611_44781) {
case "compute":
var c__28009__auto___44783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44780,c__28009__auto___44783,G__44611_44781,n__26894__auto___44779,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (__44780,c__28009__auto___44783,G__44611_44781,n__26894__auto___44779,jobs,results,process,async){
return (function (state_44624){
var state_val_44625 = (state_44624[(1)]);
if((state_val_44625 === (1))){
var state_44624__$1 = state_44624;
var statearr_44626_44784 = state_44624__$1;
(statearr_44626_44784[(2)] = null);

(statearr_44626_44784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44625 === (2))){
var state_44624__$1 = state_44624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44624__$1,(4),jobs);
} else {
if((state_val_44625 === (3))){
var inst_44622 = (state_44624[(2)]);
var state_44624__$1 = state_44624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44624__$1,inst_44622);
} else {
if((state_val_44625 === (4))){
var inst_44614 = (state_44624[(2)]);
var inst_44615 = process.call(null,inst_44614);
var state_44624__$1 = state_44624;
if(cljs.core.truth_(inst_44615)){
var statearr_44627_44785 = state_44624__$1;
(statearr_44627_44785[(1)] = (5));

} else {
var statearr_44628_44786 = state_44624__$1;
(statearr_44628_44786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44625 === (5))){
var state_44624__$1 = state_44624;
var statearr_44629_44787 = state_44624__$1;
(statearr_44629_44787[(2)] = null);

(statearr_44629_44787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44625 === (6))){
var state_44624__$1 = state_44624;
var statearr_44630_44788 = state_44624__$1;
(statearr_44630_44788[(2)] = null);

(statearr_44630_44788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44625 === (7))){
var inst_44620 = (state_44624[(2)]);
var state_44624__$1 = state_44624;
var statearr_44631_44789 = state_44624__$1;
(statearr_44631_44789[(2)] = inst_44620);

(statearr_44631_44789[(1)] = (3));


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
});})(__44780,c__28009__auto___44783,G__44611_44781,n__26894__auto___44779,jobs,results,process,async))
;
return ((function (__44780,switch__27988__auto__,c__28009__auto___44783,G__44611_44781,n__26894__auto___44779,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_44635 = [null,null,null,null,null,null,null];
(statearr_44635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_44635[(1)] = (1));

return statearr_44635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_44624){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_44624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e44636){if((e44636 instanceof Object)){
var ex__27992__auto__ = e44636;
var statearr_44637_44790 = state_44624;
(statearr_44637_44790[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44791 = state_44624;
state_44624 = G__44791;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_44624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_44624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(__44780,switch__27988__auto__,c__28009__auto___44783,G__44611_44781,n__26894__auto___44779,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_44638 = f__28010__auto__.call(null);
(statearr_44638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___44783);

return statearr_44638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(__44780,c__28009__auto___44783,G__44611_44781,n__26894__auto___44779,jobs,results,process,async))
);


break;
case "async":
var c__28009__auto___44792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44780,c__28009__auto___44792,G__44611_44781,n__26894__auto___44779,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (__44780,c__28009__auto___44792,G__44611_44781,n__26894__auto___44779,jobs,results,process,async){
return (function (state_44651){
var state_val_44652 = (state_44651[(1)]);
if((state_val_44652 === (1))){
var state_44651__$1 = state_44651;
var statearr_44653_44793 = state_44651__$1;
(statearr_44653_44793[(2)] = null);

(statearr_44653_44793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44652 === (2))){
var state_44651__$1 = state_44651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44651__$1,(4),jobs);
} else {
if((state_val_44652 === (3))){
var inst_44649 = (state_44651[(2)]);
var state_44651__$1 = state_44651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44651__$1,inst_44649);
} else {
if((state_val_44652 === (4))){
var inst_44641 = (state_44651[(2)]);
var inst_44642 = async.call(null,inst_44641);
var state_44651__$1 = state_44651;
if(cljs.core.truth_(inst_44642)){
var statearr_44654_44794 = state_44651__$1;
(statearr_44654_44794[(1)] = (5));

} else {
var statearr_44655_44795 = state_44651__$1;
(statearr_44655_44795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44652 === (5))){
var state_44651__$1 = state_44651;
var statearr_44656_44796 = state_44651__$1;
(statearr_44656_44796[(2)] = null);

(statearr_44656_44796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44652 === (6))){
var state_44651__$1 = state_44651;
var statearr_44657_44797 = state_44651__$1;
(statearr_44657_44797[(2)] = null);

(statearr_44657_44797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44652 === (7))){
var inst_44647 = (state_44651[(2)]);
var state_44651__$1 = state_44651;
var statearr_44658_44798 = state_44651__$1;
(statearr_44658_44798[(2)] = inst_44647);

(statearr_44658_44798[(1)] = (3));


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
});})(__44780,c__28009__auto___44792,G__44611_44781,n__26894__auto___44779,jobs,results,process,async))
;
return ((function (__44780,switch__27988__auto__,c__28009__auto___44792,G__44611_44781,n__26894__auto___44779,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_44662 = [null,null,null,null,null,null,null];
(statearr_44662[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_44662[(1)] = (1));

return statearr_44662;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_44651){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_44651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e44663){if((e44663 instanceof Object)){
var ex__27992__auto__ = e44663;
var statearr_44664_44799 = state_44651;
(statearr_44664_44799[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44800 = state_44651;
state_44651 = G__44800;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_44651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_44651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(__44780,switch__27988__auto__,c__28009__auto___44792,G__44611_44781,n__26894__auto___44779,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_44665 = f__28010__auto__.call(null);
(statearr_44665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___44792);

return statearr_44665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(__44780,c__28009__auto___44792,G__44611_44781,n__26894__auto___44779,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__44801 = (__44780 + (1));
__44780 = G__44801;
continue;
} else {
}
break;
}

var c__28009__auto___44802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___44802,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___44802,jobs,results,process,async){
return (function (state_44687){
var state_val_44688 = (state_44687[(1)]);
if((state_val_44688 === (1))){
var state_44687__$1 = state_44687;
var statearr_44689_44803 = state_44687__$1;
(statearr_44689_44803[(2)] = null);

(statearr_44689_44803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (2))){
var state_44687__$1 = state_44687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44687__$1,(4),from);
} else {
if((state_val_44688 === (3))){
var inst_44685 = (state_44687[(2)]);
var state_44687__$1 = state_44687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44687__$1,inst_44685);
} else {
if((state_val_44688 === (4))){
var inst_44668 = (state_44687[(7)]);
var inst_44668__$1 = (state_44687[(2)]);
var inst_44669 = (inst_44668__$1 == null);
var state_44687__$1 = (function (){var statearr_44690 = state_44687;
(statearr_44690[(7)] = inst_44668__$1);

return statearr_44690;
})();
if(cljs.core.truth_(inst_44669)){
var statearr_44691_44804 = state_44687__$1;
(statearr_44691_44804[(1)] = (5));

} else {
var statearr_44692_44805 = state_44687__$1;
(statearr_44692_44805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (5))){
var inst_44671 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44687__$1 = state_44687;
var statearr_44693_44806 = state_44687__$1;
(statearr_44693_44806[(2)] = inst_44671);

(statearr_44693_44806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (6))){
var inst_44673 = (state_44687[(8)]);
var inst_44668 = (state_44687[(7)]);
var inst_44673__$1 = cljs.core.async.chan.call(null,(1));
var inst_44674 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44675 = [inst_44668,inst_44673__$1];
var inst_44676 = (new cljs.core.PersistentVector(null,2,(5),inst_44674,inst_44675,null));
var state_44687__$1 = (function (){var statearr_44694 = state_44687;
(statearr_44694[(8)] = inst_44673__$1);

return statearr_44694;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44687__$1,(8),jobs,inst_44676);
} else {
if((state_val_44688 === (7))){
var inst_44683 = (state_44687[(2)]);
var state_44687__$1 = state_44687;
var statearr_44695_44807 = state_44687__$1;
(statearr_44695_44807[(2)] = inst_44683);

(statearr_44695_44807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (8))){
var inst_44673 = (state_44687[(8)]);
var inst_44678 = (state_44687[(2)]);
var state_44687__$1 = (function (){var statearr_44696 = state_44687;
(statearr_44696[(9)] = inst_44678);

return statearr_44696;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44687__$1,(9),results,inst_44673);
} else {
if((state_val_44688 === (9))){
var inst_44680 = (state_44687[(2)]);
var state_44687__$1 = (function (){var statearr_44697 = state_44687;
(statearr_44697[(10)] = inst_44680);

return statearr_44697;
})();
var statearr_44698_44808 = state_44687__$1;
(statearr_44698_44808[(2)] = null);

(statearr_44698_44808[(1)] = (2));


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
});})(c__28009__auto___44802,jobs,results,process,async))
;
return ((function (switch__27988__auto__,c__28009__auto___44802,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_44702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_44702[(1)] = (1));

return statearr_44702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_44687){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_44687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e44703){if((e44703 instanceof Object)){
var ex__27992__auto__ = e44703;
var statearr_44704_44809 = state_44687;
(statearr_44704_44809[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44810 = state_44687;
state_44687 = G__44810;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_44687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_44687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___44802,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_44705 = f__28010__auto__.call(null);
(statearr_44705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___44802);

return statearr_44705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___44802,jobs,results,process,async))
);


var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__,jobs,results,process,async){
return (function (state_44743){
var state_val_44744 = (state_44743[(1)]);
if((state_val_44744 === (7))){
var inst_44739 = (state_44743[(2)]);
var state_44743__$1 = state_44743;
var statearr_44745_44811 = state_44743__$1;
(statearr_44745_44811[(2)] = inst_44739);

(statearr_44745_44811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (20))){
var state_44743__$1 = state_44743;
var statearr_44746_44812 = state_44743__$1;
(statearr_44746_44812[(2)] = null);

(statearr_44746_44812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (1))){
var state_44743__$1 = state_44743;
var statearr_44747_44813 = state_44743__$1;
(statearr_44747_44813[(2)] = null);

(statearr_44747_44813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (4))){
var inst_44708 = (state_44743[(7)]);
var inst_44708__$1 = (state_44743[(2)]);
var inst_44709 = (inst_44708__$1 == null);
var state_44743__$1 = (function (){var statearr_44748 = state_44743;
(statearr_44748[(7)] = inst_44708__$1);

return statearr_44748;
})();
if(cljs.core.truth_(inst_44709)){
var statearr_44749_44814 = state_44743__$1;
(statearr_44749_44814[(1)] = (5));

} else {
var statearr_44750_44815 = state_44743__$1;
(statearr_44750_44815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (15))){
var inst_44721 = (state_44743[(8)]);
var state_44743__$1 = state_44743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44743__$1,(18),to,inst_44721);
} else {
if((state_val_44744 === (21))){
var inst_44734 = (state_44743[(2)]);
var state_44743__$1 = state_44743;
var statearr_44751_44816 = state_44743__$1;
(statearr_44751_44816[(2)] = inst_44734);

(statearr_44751_44816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (13))){
var inst_44736 = (state_44743[(2)]);
var state_44743__$1 = (function (){var statearr_44752 = state_44743;
(statearr_44752[(9)] = inst_44736);

return statearr_44752;
})();
var statearr_44753_44817 = state_44743__$1;
(statearr_44753_44817[(2)] = null);

(statearr_44753_44817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (6))){
var inst_44708 = (state_44743[(7)]);
var state_44743__$1 = state_44743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44743__$1,(11),inst_44708);
} else {
if((state_val_44744 === (17))){
var inst_44729 = (state_44743[(2)]);
var state_44743__$1 = state_44743;
if(cljs.core.truth_(inst_44729)){
var statearr_44754_44818 = state_44743__$1;
(statearr_44754_44818[(1)] = (19));

} else {
var statearr_44755_44819 = state_44743__$1;
(statearr_44755_44819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (3))){
var inst_44741 = (state_44743[(2)]);
var state_44743__$1 = state_44743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44743__$1,inst_44741);
} else {
if((state_val_44744 === (12))){
var inst_44718 = (state_44743[(10)]);
var state_44743__$1 = state_44743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44743__$1,(14),inst_44718);
} else {
if((state_val_44744 === (2))){
var state_44743__$1 = state_44743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44743__$1,(4),results);
} else {
if((state_val_44744 === (19))){
var state_44743__$1 = state_44743;
var statearr_44756_44820 = state_44743__$1;
(statearr_44756_44820[(2)] = null);

(statearr_44756_44820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (11))){
var inst_44718 = (state_44743[(2)]);
var state_44743__$1 = (function (){var statearr_44757 = state_44743;
(statearr_44757[(10)] = inst_44718);

return statearr_44757;
})();
var statearr_44758_44821 = state_44743__$1;
(statearr_44758_44821[(2)] = null);

(statearr_44758_44821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (9))){
var state_44743__$1 = state_44743;
var statearr_44759_44822 = state_44743__$1;
(statearr_44759_44822[(2)] = null);

(statearr_44759_44822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (5))){
var state_44743__$1 = state_44743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44760_44823 = state_44743__$1;
(statearr_44760_44823[(1)] = (8));

} else {
var statearr_44761_44824 = state_44743__$1;
(statearr_44761_44824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (14))){
var inst_44721 = (state_44743[(8)]);
var inst_44723 = (state_44743[(11)]);
var inst_44721__$1 = (state_44743[(2)]);
var inst_44722 = (inst_44721__$1 == null);
var inst_44723__$1 = cljs.core.not.call(null,inst_44722);
var state_44743__$1 = (function (){var statearr_44762 = state_44743;
(statearr_44762[(8)] = inst_44721__$1);

(statearr_44762[(11)] = inst_44723__$1);

return statearr_44762;
})();
if(inst_44723__$1){
var statearr_44763_44825 = state_44743__$1;
(statearr_44763_44825[(1)] = (15));

} else {
var statearr_44764_44826 = state_44743__$1;
(statearr_44764_44826[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (16))){
var inst_44723 = (state_44743[(11)]);
var state_44743__$1 = state_44743;
var statearr_44765_44827 = state_44743__$1;
(statearr_44765_44827[(2)] = inst_44723);

(statearr_44765_44827[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (10))){
var inst_44715 = (state_44743[(2)]);
var state_44743__$1 = state_44743;
var statearr_44766_44828 = state_44743__$1;
(statearr_44766_44828[(2)] = inst_44715);

(statearr_44766_44828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (18))){
var inst_44726 = (state_44743[(2)]);
var state_44743__$1 = state_44743;
var statearr_44767_44829 = state_44743__$1;
(statearr_44767_44829[(2)] = inst_44726);

(statearr_44767_44829[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44744 === (8))){
var inst_44712 = cljs.core.async.close_BANG_.call(null,to);
var state_44743__$1 = state_44743;
var statearr_44768_44830 = state_44743__$1;
(statearr_44768_44830[(2)] = inst_44712);

(statearr_44768_44830[(1)] = (10));


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
var statearr_44772 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_44772[(1)] = (1));

return statearr_44772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_44743){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_44743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e44773){if((e44773 instanceof Object)){
var ex__27992__auto__ = e44773;
var statearr_44774_44831 = state_44743;
(statearr_44774_44831[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44832 = state_44743;
state_44743 = G__44832;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_44743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_44743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_44775 = f__28010__auto__.call(null);
(statearr_44775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_44775;
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
var args44833 = [];
var len__27054__auto___44836 = arguments.length;
var i__27055__auto___44837 = (0);
while(true){
if((i__27055__auto___44837 < len__27054__auto___44836)){
args44833.push((arguments[i__27055__auto___44837]));

var G__44838 = (i__27055__auto___44837 + (1));
i__27055__auto___44837 = G__44838;
continue;
} else {
}
break;
}

var G__44835 = args44833.length;
switch (G__44835) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44833.length)].join('')));

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
var args44840 = [];
var len__27054__auto___44843 = arguments.length;
var i__27055__auto___44844 = (0);
while(true){
if((i__27055__auto___44844 < len__27054__auto___44843)){
args44840.push((arguments[i__27055__auto___44844]));

var G__44845 = (i__27055__auto___44844 + (1));
i__27055__auto___44844 = G__44845;
continue;
} else {
}
break;
}

var G__44842 = args44840.length;
switch (G__44842) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44840.length)].join('')));

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
var args44847 = [];
var len__27054__auto___44900 = arguments.length;
var i__27055__auto___44901 = (0);
while(true){
if((i__27055__auto___44901 < len__27054__auto___44900)){
args44847.push((arguments[i__27055__auto___44901]));

var G__44902 = (i__27055__auto___44901 + (1));
i__27055__auto___44901 = G__44902;
continue;
} else {
}
break;
}

var G__44849 = args44847.length;
switch (G__44849) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44847.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28009__auto___44904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___44904,tc,fc){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___44904,tc,fc){
return (function (state_44875){
var state_val_44876 = (state_44875[(1)]);
if((state_val_44876 === (7))){
var inst_44871 = (state_44875[(2)]);
var state_44875__$1 = state_44875;
var statearr_44877_44905 = state_44875__$1;
(statearr_44877_44905[(2)] = inst_44871);

(statearr_44877_44905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44876 === (1))){
var state_44875__$1 = state_44875;
var statearr_44878_44906 = state_44875__$1;
(statearr_44878_44906[(2)] = null);

(statearr_44878_44906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44876 === (4))){
var inst_44852 = (state_44875[(7)]);
var inst_44852__$1 = (state_44875[(2)]);
var inst_44853 = (inst_44852__$1 == null);
var state_44875__$1 = (function (){var statearr_44879 = state_44875;
(statearr_44879[(7)] = inst_44852__$1);

return statearr_44879;
})();
if(cljs.core.truth_(inst_44853)){
var statearr_44880_44907 = state_44875__$1;
(statearr_44880_44907[(1)] = (5));

} else {
var statearr_44881_44908 = state_44875__$1;
(statearr_44881_44908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44876 === (13))){
var state_44875__$1 = state_44875;
var statearr_44882_44909 = state_44875__$1;
(statearr_44882_44909[(2)] = null);

(statearr_44882_44909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44876 === (6))){
var inst_44852 = (state_44875[(7)]);
var inst_44858 = p.call(null,inst_44852);
var state_44875__$1 = state_44875;
if(cljs.core.truth_(inst_44858)){
var statearr_44883_44910 = state_44875__$1;
(statearr_44883_44910[(1)] = (9));

} else {
var statearr_44884_44911 = state_44875__$1;
(statearr_44884_44911[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44876 === (3))){
var inst_44873 = (state_44875[(2)]);
var state_44875__$1 = state_44875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44875__$1,inst_44873);
} else {
if((state_val_44876 === (12))){
var state_44875__$1 = state_44875;
var statearr_44885_44912 = state_44875__$1;
(statearr_44885_44912[(2)] = null);

(statearr_44885_44912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44876 === (2))){
var state_44875__$1 = state_44875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44875__$1,(4),ch);
} else {
if((state_val_44876 === (11))){
var inst_44852 = (state_44875[(7)]);
var inst_44862 = (state_44875[(2)]);
var state_44875__$1 = state_44875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44875__$1,(8),inst_44862,inst_44852);
} else {
if((state_val_44876 === (9))){
var state_44875__$1 = state_44875;
var statearr_44886_44913 = state_44875__$1;
(statearr_44886_44913[(2)] = tc);

(statearr_44886_44913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44876 === (5))){
var inst_44855 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44856 = cljs.core.async.close_BANG_.call(null,fc);
var state_44875__$1 = (function (){var statearr_44887 = state_44875;
(statearr_44887[(8)] = inst_44855);

return statearr_44887;
})();
var statearr_44888_44914 = state_44875__$1;
(statearr_44888_44914[(2)] = inst_44856);

(statearr_44888_44914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44876 === (14))){
var inst_44869 = (state_44875[(2)]);
var state_44875__$1 = state_44875;
var statearr_44889_44915 = state_44875__$1;
(statearr_44889_44915[(2)] = inst_44869);

(statearr_44889_44915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44876 === (10))){
var state_44875__$1 = state_44875;
var statearr_44890_44916 = state_44875__$1;
(statearr_44890_44916[(2)] = fc);

(statearr_44890_44916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44876 === (8))){
var inst_44864 = (state_44875[(2)]);
var state_44875__$1 = state_44875;
if(cljs.core.truth_(inst_44864)){
var statearr_44891_44917 = state_44875__$1;
(statearr_44891_44917[(1)] = (12));

} else {
var statearr_44892_44918 = state_44875__$1;
(statearr_44892_44918[(1)] = (13));

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
});})(c__28009__auto___44904,tc,fc))
;
return ((function (switch__27988__auto__,c__28009__auto___44904,tc,fc){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_44896 = [null,null,null,null,null,null,null,null,null];
(statearr_44896[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_44896[(1)] = (1));

return statearr_44896;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_44875){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_44875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e44897){if((e44897 instanceof Object)){
var ex__27992__auto__ = e44897;
var statearr_44898_44919 = state_44875;
(statearr_44898_44919[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44920 = state_44875;
state_44875 = G__44920;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_44875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_44875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___44904,tc,fc))
})();
var state__28011__auto__ = (function (){var statearr_44899 = f__28010__auto__.call(null);
(statearr_44899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___44904);

return statearr_44899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___44904,tc,fc))
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
return (function (state_44984){
var state_val_44985 = (state_44984[(1)]);
if((state_val_44985 === (7))){
var inst_44980 = (state_44984[(2)]);
var state_44984__$1 = state_44984;
var statearr_44986_45007 = state_44984__$1;
(statearr_44986_45007[(2)] = inst_44980);

(statearr_44986_45007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44985 === (1))){
var inst_44964 = init;
var state_44984__$1 = (function (){var statearr_44987 = state_44984;
(statearr_44987[(7)] = inst_44964);

return statearr_44987;
})();
var statearr_44988_45008 = state_44984__$1;
(statearr_44988_45008[(2)] = null);

(statearr_44988_45008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44985 === (4))){
var inst_44967 = (state_44984[(8)]);
var inst_44967__$1 = (state_44984[(2)]);
var inst_44968 = (inst_44967__$1 == null);
var state_44984__$1 = (function (){var statearr_44989 = state_44984;
(statearr_44989[(8)] = inst_44967__$1);

return statearr_44989;
})();
if(cljs.core.truth_(inst_44968)){
var statearr_44990_45009 = state_44984__$1;
(statearr_44990_45009[(1)] = (5));

} else {
var statearr_44991_45010 = state_44984__$1;
(statearr_44991_45010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44985 === (6))){
var inst_44964 = (state_44984[(7)]);
var inst_44967 = (state_44984[(8)]);
var inst_44971 = (state_44984[(9)]);
var inst_44971__$1 = f.call(null,inst_44964,inst_44967);
var inst_44972 = cljs.core.reduced_QMARK_.call(null,inst_44971__$1);
var state_44984__$1 = (function (){var statearr_44992 = state_44984;
(statearr_44992[(9)] = inst_44971__$1);

return statearr_44992;
})();
if(inst_44972){
var statearr_44993_45011 = state_44984__$1;
(statearr_44993_45011[(1)] = (8));

} else {
var statearr_44994_45012 = state_44984__$1;
(statearr_44994_45012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44985 === (3))){
var inst_44982 = (state_44984[(2)]);
var state_44984__$1 = state_44984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44984__$1,inst_44982);
} else {
if((state_val_44985 === (2))){
var state_44984__$1 = state_44984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44984__$1,(4),ch);
} else {
if((state_val_44985 === (9))){
var inst_44971 = (state_44984[(9)]);
var inst_44964 = inst_44971;
var state_44984__$1 = (function (){var statearr_44995 = state_44984;
(statearr_44995[(7)] = inst_44964);

return statearr_44995;
})();
var statearr_44996_45013 = state_44984__$1;
(statearr_44996_45013[(2)] = null);

(statearr_44996_45013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44985 === (5))){
var inst_44964 = (state_44984[(7)]);
var state_44984__$1 = state_44984;
var statearr_44997_45014 = state_44984__$1;
(statearr_44997_45014[(2)] = inst_44964);

(statearr_44997_45014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44985 === (10))){
var inst_44978 = (state_44984[(2)]);
var state_44984__$1 = state_44984;
var statearr_44998_45015 = state_44984__$1;
(statearr_44998_45015[(2)] = inst_44978);

(statearr_44998_45015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44985 === (8))){
var inst_44971 = (state_44984[(9)]);
var inst_44974 = cljs.core.deref.call(null,inst_44971);
var state_44984__$1 = state_44984;
var statearr_44999_45016 = state_44984__$1;
(statearr_44999_45016[(2)] = inst_44974);

(statearr_44999_45016[(1)] = (10));


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
var statearr_45003 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45003[(0)] = cljs$core$async$reduce_$_state_machine__27989__auto__);

(statearr_45003[(1)] = (1));

return statearr_45003;
});
var cljs$core$async$reduce_$_state_machine__27989__auto____1 = (function (state_44984){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_44984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e45004){if((e45004 instanceof Object)){
var ex__27992__auto__ = e45004;
var statearr_45005_45017 = state_44984;
(statearr_45005_45017[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45018 = state_44984;
state_44984 = G__45018;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27989__auto__ = function(state_44984){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27989__auto____1.call(this,state_44984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27989__auto____0;
cljs$core$async$reduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27989__auto____1;
return cljs$core$async$reduce_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_45006 = f__28010__auto__.call(null);
(statearr_45006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_45006;
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
return (function (state_45038){
var state_val_45039 = (state_45038[(1)]);
if((state_val_45039 === (1))){
var inst_45033 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_45038__$1 = state_45038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45038__$1,(2),inst_45033);
} else {
if((state_val_45039 === (2))){
var inst_45035 = (state_45038[(2)]);
var inst_45036 = f__$1.call(null,inst_45035);
var state_45038__$1 = state_45038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45038__$1,inst_45036);
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
var statearr_45043 = [null,null,null,null,null,null,null];
(statearr_45043[(0)] = cljs$core$async$transduce_$_state_machine__27989__auto__);

(statearr_45043[(1)] = (1));

return statearr_45043;
});
var cljs$core$async$transduce_$_state_machine__27989__auto____1 = (function (state_45038){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_45038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e45044){if((e45044 instanceof Object)){
var ex__27992__auto__ = e45044;
var statearr_45045_45047 = state_45038;
(statearr_45045_45047[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45048 = state_45038;
state_45038 = G__45048;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27989__auto__ = function(state_45038){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27989__auto____1.call(this,state_45038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27989__auto____0;
cljs$core$async$transduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27989__auto____1;
return cljs$core$async$transduce_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,f__$1))
})();
var state__28011__auto__ = (function (){var statearr_45046 = f__28010__auto__.call(null);
(statearr_45046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_45046;
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
var args45049 = [];
var len__27054__auto___45101 = arguments.length;
var i__27055__auto___45102 = (0);
while(true){
if((i__27055__auto___45102 < len__27054__auto___45101)){
args45049.push((arguments[i__27055__auto___45102]));

var G__45103 = (i__27055__auto___45102 + (1));
i__27055__auto___45102 = G__45103;
continue;
} else {
}
break;
}

var G__45051 = args45049.length;
switch (G__45051) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45049.length)].join('')));

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
return (function (state_45076){
var state_val_45077 = (state_45076[(1)]);
if((state_val_45077 === (7))){
var inst_45058 = (state_45076[(2)]);
var state_45076__$1 = state_45076;
var statearr_45078_45105 = state_45076__$1;
(statearr_45078_45105[(2)] = inst_45058);

(statearr_45078_45105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45077 === (1))){
var inst_45052 = cljs.core.seq.call(null,coll);
var inst_45053 = inst_45052;
var state_45076__$1 = (function (){var statearr_45079 = state_45076;
(statearr_45079[(7)] = inst_45053);

return statearr_45079;
})();
var statearr_45080_45106 = state_45076__$1;
(statearr_45080_45106[(2)] = null);

(statearr_45080_45106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45077 === (4))){
var inst_45053 = (state_45076[(7)]);
var inst_45056 = cljs.core.first.call(null,inst_45053);
var state_45076__$1 = state_45076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45076__$1,(7),ch,inst_45056);
} else {
if((state_val_45077 === (13))){
var inst_45070 = (state_45076[(2)]);
var state_45076__$1 = state_45076;
var statearr_45081_45107 = state_45076__$1;
(statearr_45081_45107[(2)] = inst_45070);

(statearr_45081_45107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45077 === (6))){
var inst_45061 = (state_45076[(2)]);
var state_45076__$1 = state_45076;
if(cljs.core.truth_(inst_45061)){
var statearr_45082_45108 = state_45076__$1;
(statearr_45082_45108[(1)] = (8));

} else {
var statearr_45083_45109 = state_45076__$1;
(statearr_45083_45109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45077 === (3))){
var inst_45074 = (state_45076[(2)]);
var state_45076__$1 = state_45076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45076__$1,inst_45074);
} else {
if((state_val_45077 === (12))){
var state_45076__$1 = state_45076;
var statearr_45084_45110 = state_45076__$1;
(statearr_45084_45110[(2)] = null);

(statearr_45084_45110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45077 === (2))){
var inst_45053 = (state_45076[(7)]);
var state_45076__$1 = state_45076;
if(cljs.core.truth_(inst_45053)){
var statearr_45085_45111 = state_45076__$1;
(statearr_45085_45111[(1)] = (4));

} else {
var statearr_45086_45112 = state_45076__$1;
(statearr_45086_45112[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45077 === (11))){
var inst_45067 = cljs.core.async.close_BANG_.call(null,ch);
var state_45076__$1 = state_45076;
var statearr_45087_45113 = state_45076__$1;
(statearr_45087_45113[(2)] = inst_45067);

(statearr_45087_45113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45077 === (9))){
var state_45076__$1 = state_45076;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45088_45114 = state_45076__$1;
(statearr_45088_45114[(1)] = (11));

} else {
var statearr_45089_45115 = state_45076__$1;
(statearr_45089_45115[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45077 === (5))){
var inst_45053 = (state_45076[(7)]);
var state_45076__$1 = state_45076;
var statearr_45090_45116 = state_45076__$1;
(statearr_45090_45116[(2)] = inst_45053);

(statearr_45090_45116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45077 === (10))){
var inst_45072 = (state_45076[(2)]);
var state_45076__$1 = state_45076;
var statearr_45091_45117 = state_45076__$1;
(statearr_45091_45117[(2)] = inst_45072);

(statearr_45091_45117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45077 === (8))){
var inst_45053 = (state_45076[(7)]);
var inst_45063 = cljs.core.next.call(null,inst_45053);
var inst_45053__$1 = inst_45063;
var state_45076__$1 = (function (){var statearr_45092 = state_45076;
(statearr_45092[(7)] = inst_45053__$1);

return statearr_45092;
})();
var statearr_45093_45118 = state_45076__$1;
(statearr_45093_45118[(2)] = null);

(statearr_45093_45118[(1)] = (2));


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
var statearr_45097 = [null,null,null,null,null,null,null,null];
(statearr_45097[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_45097[(1)] = (1));

return statearr_45097;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_45076){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_45076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e45098){if((e45098 instanceof Object)){
var ex__27992__auto__ = e45098;
var statearr_45099_45119 = state_45076;
(statearr_45099_45119[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45120 = state_45076;
state_45076 = G__45120;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_45076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_45076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_45100 = f__28010__auto__.call(null);
(statearr_45100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_45100;
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
if(typeof cljs.core.async.t_cljs$core$async45346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45346 = (function (mult,ch,cs,meta45347){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta45347 = meta45347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45348,meta45347__$1){
var self__ = this;
var _45348__$1 = this;
return (new cljs.core.async.t_cljs$core$async45346(self__.mult,self__.ch,self__.cs,meta45347__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45348){
var self__ = this;
var _45348__$1 = this;
return self__.meta45347;
});})(cs))
;

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45346.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45346.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45347","meta45347",-1303606883,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45346";

cljs.core.async.t_cljs$core$async45346.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async45346");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45346 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45346(mult__$1,ch__$1,cs__$1,meta45347){
return (new cljs.core.async.t_cljs$core$async45346(mult__$1,ch__$1,cs__$1,meta45347));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45346(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28009__auto___45571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___45571,cs,m,dchan,dctr,done){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___45571,cs,m,dchan,dctr,done){
return (function (state_45483){
var state_val_45484 = (state_45483[(1)]);
if((state_val_45484 === (7))){
var inst_45479 = (state_45483[(2)]);
var state_45483__$1 = state_45483;
var statearr_45485_45572 = state_45483__$1;
(statearr_45485_45572[(2)] = inst_45479);

(statearr_45485_45572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (20))){
var inst_45382 = (state_45483[(7)]);
var inst_45394 = cljs.core.first.call(null,inst_45382);
var inst_45395 = cljs.core.nth.call(null,inst_45394,(0),null);
var inst_45396 = cljs.core.nth.call(null,inst_45394,(1),null);
var state_45483__$1 = (function (){var statearr_45486 = state_45483;
(statearr_45486[(8)] = inst_45395);

return statearr_45486;
})();
if(cljs.core.truth_(inst_45396)){
var statearr_45487_45573 = state_45483__$1;
(statearr_45487_45573[(1)] = (22));

} else {
var statearr_45488_45574 = state_45483__$1;
(statearr_45488_45574[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (27))){
var inst_45426 = (state_45483[(9)]);
var inst_45424 = (state_45483[(10)]);
var inst_45431 = (state_45483[(11)]);
var inst_45351 = (state_45483[(12)]);
var inst_45431__$1 = cljs.core._nth.call(null,inst_45424,inst_45426);
var inst_45432 = cljs.core.async.put_BANG_.call(null,inst_45431__$1,inst_45351,done);
var state_45483__$1 = (function (){var statearr_45489 = state_45483;
(statearr_45489[(11)] = inst_45431__$1);

return statearr_45489;
})();
if(cljs.core.truth_(inst_45432)){
var statearr_45490_45575 = state_45483__$1;
(statearr_45490_45575[(1)] = (30));

} else {
var statearr_45491_45576 = state_45483__$1;
(statearr_45491_45576[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (1))){
var state_45483__$1 = state_45483;
var statearr_45492_45577 = state_45483__$1;
(statearr_45492_45577[(2)] = null);

(statearr_45492_45577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (24))){
var inst_45382 = (state_45483[(7)]);
var inst_45401 = (state_45483[(2)]);
var inst_45402 = cljs.core.next.call(null,inst_45382);
var inst_45360 = inst_45402;
var inst_45361 = null;
var inst_45362 = (0);
var inst_45363 = (0);
var state_45483__$1 = (function (){var statearr_45493 = state_45483;
(statearr_45493[(13)] = inst_45401);

(statearr_45493[(14)] = inst_45363);

(statearr_45493[(15)] = inst_45361);

(statearr_45493[(16)] = inst_45362);

(statearr_45493[(17)] = inst_45360);

return statearr_45493;
})();
var statearr_45494_45578 = state_45483__$1;
(statearr_45494_45578[(2)] = null);

(statearr_45494_45578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (39))){
var state_45483__$1 = state_45483;
var statearr_45498_45579 = state_45483__$1;
(statearr_45498_45579[(2)] = null);

(statearr_45498_45579[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (4))){
var inst_45351 = (state_45483[(12)]);
var inst_45351__$1 = (state_45483[(2)]);
var inst_45352 = (inst_45351__$1 == null);
var state_45483__$1 = (function (){var statearr_45499 = state_45483;
(statearr_45499[(12)] = inst_45351__$1);

return statearr_45499;
})();
if(cljs.core.truth_(inst_45352)){
var statearr_45500_45580 = state_45483__$1;
(statearr_45500_45580[(1)] = (5));

} else {
var statearr_45501_45581 = state_45483__$1;
(statearr_45501_45581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (15))){
var inst_45363 = (state_45483[(14)]);
var inst_45361 = (state_45483[(15)]);
var inst_45362 = (state_45483[(16)]);
var inst_45360 = (state_45483[(17)]);
var inst_45378 = (state_45483[(2)]);
var inst_45379 = (inst_45363 + (1));
var tmp45495 = inst_45361;
var tmp45496 = inst_45362;
var tmp45497 = inst_45360;
var inst_45360__$1 = tmp45497;
var inst_45361__$1 = tmp45495;
var inst_45362__$1 = tmp45496;
var inst_45363__$1 = inst_45379;
var state_45483__$1 = (function (){var statearr_45502 = state_45483;
(statearr_45502[(18)] = inst_45378);

(statearr_45502[(14)] = inst_45363__$1);

(statearr_45502[(15)] = inst_45361__$1);

(statearr_45502[(16)] = inst_45362__$1);

(statearr_45502[(17)] = inst_45360__$1);

return statearr_45502;
})();
var statearr_45503_45582 = state_45483__$1;
(statearr_45503_45582[(2)] = null);

(statearr_45503_45582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (21))){
var inst_45405 = (state_45483[(2)]);
var state_45483__$1 = state_45483;
var statearr_45507_45583 = state_45483__$1;
(statearr_45507_45583[(2)] = inst_45405);

(statearr_45507_45583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (31))){
var inst_45431 = (state_45483[(11)]);
var inst_45435 = done.call(null,null);
var inst_45436 = cljs.core.async.untap_STAR_.call(null,m,inst_45431);
var state_45483__$1 = (function (){var statearr_45508 = state_45483;
(statearr_45508[(19)] = inst_45435);

return statearr_45508;
})();
var statearr_45509_45584 = state_45483__$1;
(statearr_45509_45584[(2)] = inst_45436);

(statearr_45509_45584[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (32))){
var inst_45425 = (state_45483[(20)]);
var inst_45423 = (state_45483[(21)]);
var inst_45426 = (state_45483[(9)]);
var inst_45424 = (state_45483[(10)]);
var inst_45438 = (state_45483[(2)]);
var inst_45439 = (inst_45426 + (1));
var tmp45504 = inst_45425;
var tmp45505 = inst_45423;
var tmp45506 = inst_45424;
var inst_45423__$1 = tmp45505;
var inst_45424__$1 = tmp45506;
var inst_45425__$1 = tmp45504;
var inst_45426__$1 = inst_45439;
var state_45483__$1 = (function (){var statearr_45510 = state_45483;
(statearr_45510[(22)] = inst_45438);

(statearr_45510[(20)] = inst_45425__$1);

(statearr_45510[(21)] = inst_45423__$1);

(statearr_45510[(9)] = inst_45426__$1);

(statearr_45510[(10)] = inst_45424__$1);

return statearr_45510;
})();
var statearr_45511_45585 = state_45483__$1;
(statearr_45511_45585[(2)] = null);

(statearr_45511_45585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (40))){
var inst_45451 = (state_45483[(23)]);
var inst_45455 = done.call(null,null);
var inst_45456 = cljs.core.async.untap_STAR_.call(null,m,inst_45451);
var state_45483__$1 = (function (){var statearr_45512 = state_45483;
(statearr_45512[(24)] = inst_45455);

return statearr_45512;
})();
var statearr_45513_45586 = state_45483__$1;
(statearr_45513_45586[(2)] = inst_45456);

(statearr_45513_45586[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (33))){
var inst_45442 = (state_45483[(25)]);
var inst_45444 = cljs.core.chunked_seq_QMARK_.call(null,inst_45442);
var state_45483__$1 = state_45483;
if(inst_45444){
var statearr_45514_45587 = state_45483__$1;
(statearr_45514_45587[(1)] = (36));

} else {
var statearr_45515_45588 = state_45483__$1;
(statearr_45515_45588[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (13))){
var inst_45372 = (state_45483[(26)]);
var inst_45375 = cljs.core.async.close_BANG_.call(null,inst_45372);
var state_45483__$1 = state_45483;
var statearr_45516_45589 = state_45483__$1;
(statearr_45516_45589[(2)] = inst_45375);

(statearr_45516_45589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (22))){
var inst_45395 = (state_45483[(8)]);
var inst_45398 = cljs.core.async.close_BANG_.call(null,inst_45395);
var state_45483__$1 = state_45483;
var statearr_45517_45590 = state_45483__$1;
(statearr_45517_45590[(2)] = inst_45398);

(statearr_45517_45590[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (36))){
var inst_45442 = (state_45483[(25)]);
var inst_45446 = cljs.core.chunk_first.call(null,inst_45442);
var inst_45447 = cljs.core.chunk_rest.call(null,inst_45442);
var inst_45448 = cljs.core.count.call(null,inst_45446);
var inst_45423 = inst_45447;
var inst_45424 = inst_45446;
var inst_45425 = inst_45448;
var inst_45426 = (0);
var state_45483__$1 = (function (){var statearr_45518 = state_45483;
(statearr_45518[(20)] = inst_45425);

(statearr_45518[(21)] = inst_45423);

(statearr_45518[(9)] = inst_45426);

(statearr_45518[(10)] = inst_45424);

return statearr_45518;
})();
var statearr_45519_45591 = state_45483__$1;
(statearr_45519_45591[(2)] = null);

(statearr_45519_45591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (41))){
var inst_45442 = (state_45483[(25)]);
var inst_45458 = (state_45483[(2)]);
var inst_45459 = cljs.core.next.call(null,inst_45442);
var inst_45423 = inst_45459;
var inst_45424 = null;
var inst_45425 = (0);
var inst_45426 = (0);
var state_45483__$1 = (function (){var statearr_45520 = state_45483;
(statearr_45520[(27)] = inst_45458);

(statearr_45520[(20)] = inst_45425);

(statearr_45520[(21)] = inst_45423);

(statearr_45520[(9)] = inst_45426);

(statearr_45520[(10)] = inst_45424);

return statearr_45520;
})();
var statearr_45521_45592 = state_45483__$1;
(statearr_45521_45592[(2)] = null);

(statearr_45521_45592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (43))){
var state_45483__$1 = state_45483;
var statearr_45522_45593 = state_45483__$1;
(statearr_45522_45593[(2)] = null);

(statearr_45522_45593[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (29))){
var inst_45467 = (state_45483[(2)]);
var state_45483__$1 = state_45483;
var statearr_45523_45594 = state_45483__$1;
(statearr_45523_45594[(2)] = inst_45467);

(statearr_45523_45594[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (44))){
var inst_45476 = (state_45483[(2)]);
var state_45483__$1 = (function (){var statearr_45524 = state_45483;
(statearr_45524[(28)] = inst_45476);

return statearr_45524;
})();
var statearr_45525_45595 = state_45483__$1;
(statearr_45525_45595[(2)] = null);

(statearr_45525_45595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (6))){
var inst_45415 = (state_45483[(29)]);
var inst_45414 = cljs.core.deref.call(null,cs);
var inst_45415__$1 = cljs.core.keys.call(null,inst_45414);
var inst_45416 = cljs.core.count.call(null,inst_45415__$1);
var inst_45417 = cljs.core.reset_BANG_.call(null,dctr,inst_45416);
var inst_45422 = cljs.core.seq.call(null,inst_45415__$1);
var inst_45423 = inst_45422;
var inst_45424 = null;
var inst_45425 = (0);
var inst_45426 = (0);
var state_45483__$1 = (function (){var statearr_45526 = state_45483;
(statearr_45526[(20)] = inst_45425);

(statearr_45526[(29)] = inst_45415__$1);

(statearr_45526[(21)] = inst_45423);

(statearr_45526[(9)] = inst_45426);

(statearr_45526[(30)] = inst_45417);

(statearr_45526[(10)] = inst_45424);

return statearr_45526;
})();
var statearr_45527_45596 = state_45483__$1;
(statearr_45527_45596[(2)] = null);

(statearr_45527_45596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (28))){
var inst_45442 = (state_45483[(25)]);
var inst_45423 = (state_45483[(21)]);
var inst_45442__$1 = cljs.core.seq.call(null,inst_45423);
var state_45483__$1 = (function (){var statearr_45528 = state_45483;
(statearr_45528[(25)] = inst_45442__$1);

return statearr_45528;
})();
if(inst_45442__$1){
var statearr_45529_45597 = state_45483__$1;
(statearr_45529_45597[(1)] = (33));

} else {
var statearr_45530_45598 = state_45483__$1;
(statearr_45530_45598[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (25))){
var inst_45425 = (state_45483[(20)]);
var inst_45426 = (state_45483[(9)]);
var inst_45428 = (inst_45426 < inst_45425);
var inst_45429 = inst_45428;
var state_45483__$1 = state_45483;
if(cljs.core.truth_(inst_45429)){
var statearr_45531_45599 = state_45483__$1;
(statearr_45531_45599[(1)] = (27));

} else {
var statearr_45532_45600 = state_45483__$1;
(statearr_45532_45600[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (34))){
var state_45483__$1 = state_45483;
var statearr_45533_45601 = state_45483__$1;
(statearr_45533_45601[(2)] = null);

(statearr_45533_45601[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (17))){
var state_45483__$1 = state_45483;
var statearr_45534_45602 = state_45483__$1;
(statearr_45534_45602[(2)] = null);

(statearr_45534_45602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (3))){
var inst_45481 = (state_45483[(2)]);
var state_45483__$1 = state_45483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45483__$1,inst_45481);
} else {
if((state_val_45484 === (12))){
var inst_45410 = (state_45483[(2)]);
var state_45483__$1 = state_45483;
var statearr_45535_45603 = state_45483__$1;
(statearr_45535_45603[(2)] = inst_45410);

(statearr_45535_45603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (2))){
var state_45483__$1 = state_45483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45483__$1,(4),ch);
} else {
if((state_val_45484 === (23))){
var state_45483__$1 = state_45483;
var statearr_45536_45604 = state_45483__$1;
(statearr_45536_45604[(2)] = null);

(statearr_45536_45604[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (35))){
var inst_45465 = (state_45483[(2)]);
var state_45483__$1 = state_45483;
var statearr_45537_45605 = state_45483__$1;
(statearr_45537_45605[(2)] = inst_45465);

(statearr_45537_45605[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (19))){
var inst_45382 = (state_45483[(7)]);
var inst_45386 = cljs.core.chunk_first.call(null,inst_45382);
var inst_45387 = cljs.core.chunk_rest.call(null,inst_45382);
var inst_45388 = cljs.core.count.call(null,inst_45386);
var inst_45360 = inst_45387;
var inst_45361 = inst_45386;
var inst_45362 = inst_45388;
var inst_45363 = (0);
var state_45483__$1 = (function (){var statearr_45538 = state_45483;
(statearr_45538[(14)] = inst_45363);

(statearr_45538[(15)] = inst_45361);

(statearr_45538[(16)] = inst_45362);

(statearr_45538[(17)] = inst_45360);

return statearr_45538;
})();
var statearr_45539_45606 = state_45483__$1;
(statearr_45539_45606[(2)] = null);

(statearr_45539_45606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (11))){
var inst_45360 = (state_45483[(17)]);
var inst_45382 = (state_45483[(7)]);
var inst_45382__$1 = cljs.core.seq.call(null,inst_45360);
var state_45483__$1 = (function (){var statearr_45540 = state_45483;
(statearr_45540[(7)] = inst_45382__$1);

return statearr_45540;
})();
if(inst_45382__$1){
var statearr_45541_45607 = state_45483__$1;
(statearr_45541_45607[(1)] = (16));

} else {
var statearr_45542_45608 = state_45483__$1;
(statearr_45542_45608[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (9))){
var inst_45412 = (state_45483[(2)]);
var state_45483__$1 = state_45483;
var statearr_45543_45609 = state_45483__$1;
(statearr_45543_45609[(2)] = inst_45412);

(statearr_45543_45609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (5))){
var inst_45358 = cljs.core.deref.call(null,cs);
var inst_45359 = cljs.core.seq.call(null,inst_45358);
var inst_45360 = inst_45359;
var inst_45361 = null;
var inst_45362 = (0);
var inst_45363 = (0);
var state_45483__$1 = (function (){var statearr_45544 = state_45483;
(statearr_45544[(14)] = inst_45363);

(statearr_45544[(15)] = inst_45361);

(statearr_45544[(16)] = inst_45362);

(statearr_45544[(17)] = inst_45360);

return statearr_45544;
})();
var statearr_45545_45610 = state_45483__$1;
(statearr_45545_45610[(2)] = null);

(statearr_45545_45610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (14))){
var state_45483__$1 = state_45483;
var statearr_45546_45611 = state_45483__$1;
(statearr_45546_45611[(2)] = null);

(statearr_45546_45611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (45))){
var inst_45473 = (state_45483[(2)]);
var state_45483__$1 = state_45483;
var statearr_45547_45612 = state_45483__$1;
(statearr_45547_45612[(2)] = inst_45473);

(statearr_45547_45612[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (26))){
var inst_45415 = (state_45483[(29)]);
var inst_45469 = (state_45483[(2)]);
var inst_45470 = cljs.core.seq.call(null,inst_45415);
var state_45483__$1 = (function (){var statearr_45548 = state_45483;
(statearr_45548[(31)] = inst_45469);

return statearr_45548;
})();
if(inst_45470){
var statearr_45549_45613 = state_45483__$1;
(statearr_45549_45613[(1)] = (42));

} else {
var statearr_45550_45614 = state_45483__$1;
(statearr_45550_45614[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (16))){
var inst_45382 = (state_45483[(7)]);
var inst_45384 = cljs.core.chunked_seq_QMARK_.call(null,inst_45382);
var state_45483__$1 = state_45483;
if(inst_45384){
var statearr_45551_45615 = state_45483__$1;
(statearr_45551_45615[(1)] = (19));

} else {
var statearr_45552_45616 = state_45483__$1;
(statearr_45552_45616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (38))){
var inst_45462 = (state_45483[(2)]);
var state_45483__$1 = state_45483;
var statearr_45553_45617 = state_45483__$1;
(statearr_45553_45617[(2)] = inst_45462);

(statearr_45553_45617[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (30))){
var state_45483__$1 = state_45483;
var statearr_45554_45618 = state_45483__$1;
(statearr_45554_45618[(2)] = null);

(statearr_45554_45618[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (10))){
var inst_45363 = (state_45483[(14)]);
var inst_45361 = (state_45483[(15)]);
var inst_45371 = cljs.core._nth.call(null,inst_45361,inst_45363);
var inst_45372 = cljs.core.nth.call(null,inst_45371,(0),null);
var inst_45373 = cljs.core.nth.call(null,inst_45371,(1),null);
var state_45483__$1 = (function (){var statearr_45555 = state_45483;
(statearr_45555[(26)] = inst_45372);

return statearr_45555;
})();
if(cljs.core.truth_(inst_45373)){
var statearr_45556_45619 = state_45483__$1;
(statearr_45556_45619[(1)] = (13));

} else {
var statearr_45557_45620 = state_45483__$1;
(statearr_45557_45620[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (18))){
var inst_45408 = (state_45483[(2)]);
var state_45483__$1 = state_45483;
var statearr_45558_45621 = state_45483__$1;
(statearr_45558_45621[(2)] = inst_45408);

(statearr_45558_45621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (42))){
var state_45483__$1 = state_45483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45483__$1,(45),dchan);
} else {
if((state_val_45484 === (37))){
var inst_45451 = (state_45483[(23)]);
var inst_45442 = (state_45483[(25)]);
var inst_45351 = (state_45483[(12)]);
var inst_45451__$1 = cljs.core.first.call(null,inst_45442);
var inst_45452 = cljs.core.async.put_BANG_.call(null,inst_45451__$1,inst_45351,done);
var state_45483__$1 = (function (){var statearr_45559 = state_45483;
(statearr_45559[(23)] = inst_45451__$1);

return statearr_45559;
})();
if(cljs.core.truth_(inst_45452)){
var statearr_45560_45622 = state_45483__$1;
(statearr_45560_45622[(1)] = (39));

} else {
var statearr_45561_45623 = state_45483__$1;
(statearr_45561_45623[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45484 === (8))){
var inst_45363 = (state_45483[(14)]);
var inst_45362 = (state_45483[(16)]);
var inst_45365 = (inst_45363 < inst_45362);
var inst_45366 = inst_45365;
var state_45483__$1 = state_45483;
if(cljs.core.truth_(inst_45366)){
var statearr_45562_45624 = state_45483__$1;
(statearr_45562_45624[(1)] = (10));

} else {
var statearr_45563_45625 = state_45483__$1;
(statearr_45563_45625[(1)] = (11));

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
});})(c__28009__auto___45571,cs,m,dchan,dctr,done))
;
return ((function (switch__27988__auto__,c__28009__auto___45571,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27989__auto__ = null;
var cljs$core$async$mult_$_state_machine__27989__auto____0 = (function (){
var statearr_45567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45567[(0)] = cljs$core$async$mult_$_state_machine__27989__auto__);

(statearr_45567[(1)] = (1));

return statearr_45567;
});
var cljs$core$async$mult_$_state_machine__27989__auto____1 = (function (state_45483){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_45483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e45568){if((e45568 instanceof Object)){
var ex__27992__auto__ = e45568;
var statearr_45569_45626 = state_45483;
(statearr_45569_45626[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45627 = state_45483;
state_45483 = G__45627;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27989__auto__ = function(state_45483){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27989__auto____1.call(this,state_45483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27989__auto____0;
cljs$core$async$mult_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27989__auto____1;
return cljs$core$async$mult_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___45571,cs,m,dchan,dctr,done))
})();
var state__28011__auto__ = (function (){var statearr_45570 = f__28010__auto__.call(null);
(statearr_45570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___45571);

return statearr_45570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___45571,cs,m,dchan,dctr,done))
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
var args45628 = [];
var len__27054__auto___45631 = arguments.length;
var i__27055__auto___45632 = (0);
while(true){
if((i__27055__auto___45632 < len__27054__auto___45631)){
args45628.push((arguments[i__27055__auto___45632]));

var G__45633 = (i__27055__auto___45632 + (1));
i__27055__auto___45632 = G__45633;
continue;
} else {
}
break;
}

var G__45630 = args45628.length;
switch (G__45630) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45628.length)].join('')));

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
var len__27054__auto___45645 = arguments.length;
var i__27055__auto___45646 = (0);
while(true){
if((i__27055__auto___45646 < len__27054__auto___45645)){
args__27061__auto__.push((arguments[i__27055__auto___45646]));

var G__45647 = (i__27055__auto___45646 + (1));
i__27055__auto___45646 = G__45647;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45639){
var map__45640 = p__45639;
var map__45640__$1 = ((((!((map__45640 == null)))?((((map__45640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45640):map__45640);
var opts = map__45640__$1;
var statearr_45642_45648 = state;
(statearr_45642_45648[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__45640,map__45640__$1,opts){
return (function (val){
var statearr_45643_45649 = state;
(statearr_45643_45649[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45640,map__45640__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_45644_45650 = state;
(statearr_45644_45650[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45635){
var G__45636 = cljs.core.first.call(null,seq45635);
var seq45635__$1 = cljs.core.next.call(null,seq45635);
var G__45637 = cljs.core.first.call(null,seq45635__$1);
var seq45635__$2 = cljs.core.next.call(null,seq45635__$1);
var G__45638 = cljs.core.first.call(null,seq45635__$2);
var seq45635__$3 = cljs.core.next.call(null,seq45635__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45636,G__45637,G__45638,seq45635__$3);
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
if(typeof cljs.core.async.t_cljs$core$async45816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45816 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45817){
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
this.meta45817 = meta45817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45818,meta45817__$1){
var self__ = this;
var _45818__$1 = this;
return (new cljs.core.async.t_cljs$core$async45816(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45817__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45818){
var self__ = this;
var _45818__$1 = this;
return self__.meta45817;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45816.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async45816.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45817","meta45817",1998465642,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45816";

cljs.core.async.t_cljs$core$async45816.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async45816");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async45816 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45816(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45817){
return (new cljs.core.async.t_cljs$core$async45816(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45817));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45816(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28009__auto___45981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___45981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___45981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45918){
var state_val_45919 = (state_45918[(1)]);
if((state_val_45919 === (7))){
var inst_45834 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
var statearr_45920_45982 = state_45918__$1;
(statearr_45920_45982[(2)] = inst_45834);

(statearr_45920_45982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (20))){
var inst_45846 = (state_45918[(7)]);
var state_45918__$1 = state_45918;
var statearr_45921_45983 = state_45918__$1;
(statearr_45921_45983[(2)] = inst_45846);

(statearr_45921_45983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (27))){
var state_45918__$1 = state_45918;
var statearr_45922_45984 = state_45918__$1;
(statearr_45922_45984[(2)] = null);

(statearr_45922_45984[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (1))){
var inst_45822 = (state_45918[(8)]);
var inst_45822__$1 = calc_state.call(null);
var inst_45824 = (inst_45822__$1 == null);
var inst_45825 = cljs.core.not.call(null,inst_45824);
var state_45918__$1 = (function (){var statearr_45923 = state_45918;
(statearr_45923[(8)] = inst_45822__$1);

return statearr_45923;
})();
if(inst_45825){
var statearr_45924_45985 = state_45918__$1;
(statearr_45924_45985[(1)] = (2));

} else {
var statearr_45925_45986 = state_45918__$1;
(statearr_45925_45986[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (24))){
var inst_45892 = (state_45918[(9)]);
var inst_45878 = (state_45918[(10)]);
var inst_45869 = (state_45918[(11)]);
var inst_45892__$1 = inst_45869.call(null,inst_45878);
var state_45918__$1 = (function (){var statearr_45926 = state_45918;
(statearr_45926[(9)] = inst_45892__$1);

return statearr_45926;
})();
if(cljs.core.truth_(inst_45892__$1)){
var statearr_45927_45987 = state_45918__$1;
(statearr_45927_45987[(1)] = (29));

} else {
var statearr_45928_45988 = state_45918__$1;
(statearr_45928_45988[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (4))){
var inst_45837 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
if(cljs.core.truth_(inst_45837)){
var statearr_45929_45989 = state_45918__$1;
(statearr_45929_45989[(1)] = (8));

} else {
var statearr_45930_45990 = state_45918__$1;
(statearr_45930_45990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (15))){
var inst_45863 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
if(cljs.core.truth_(inst_45863)){
var statearr_45931_45991 = state_45918__$1;
(statearr_45931_45991[(1)] = (19));

} else {
var statearr_45932_45992 = state_45918__$1;
(statearr_45932_45992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (21))){
var inst_45868 = (state_45918[(12)]);
var inst_45868__$1 = (state_45918[(2)]);
var inst_45869 = cljs.core.get.call(null,inst_45868__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45870 = cljs.core.get.call(null,inst_45868__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45871 = cljs.core.get.call(null,inst_45868__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45918__$1 = (function (){var statearr_45933 = state_45918;
(statearr_45933[(13)] = inst_45870);

(statearr_45933[(12)] = inst_45868__$1);

(statearr_45933[(11)] = inst_45869);

return statearr_45933;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45918__$1,(22),inst_45871);
} else {
if((state_val_45919 === (31))){
var inst_45900 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
if(cljs.core.truth_(inst_45900)){
var statearr_45934_45993 = state_45918__$1;
(statearr_45934_45993[(1)] = (32));

} else {
var statearr_45935_45994 = state_45918__$1;
(statearr_45935_45994[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (32))){
var inst_45877 = (state_45918[(14)]);
var state_45918__$1 = state_45918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45918__$1,(35),out,inst_45877);
} else {
if((state_val_45919 === (33))){
var inst_45868 = (state_45918[(12)]);
var inst_45846 = inst_45868;
var state_45918__$1 = (function (){var statearr_45936 = state_45918;
(statearr_45936[(7)] = inst_45846);

return statearr_45936;
})();
var statearr_45937_45995 = state_45918__$1;
(statearr_45937_45995[(2)] = null);

(statearr_45937_45995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (13))){
var inst_45846 = (state_45918[(7)]);
var inst_45853 = inst_45846.cljs$lang$protocol_mask$partition0$;
var inst_45854 = (inst_45853 & (64));
var inst_45855 = inst_45846.cljs$core$ISeq$;
var inst_45856 = (inst_45854) || (inst_45855);
var state_45918__$1 = state_45918;
if(cljs.core.truth_(inst_45856)){
var statearr_45938_45996 = state_45918__$1;
(statearr_45938_45996[(1)] = (16));

} else {
var statearr_45939_45997 = state_45918__$1;
(statearr_45939_45997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (22))){
var inst_45877 = (state_45918[(14)]);
var inst_45878 = (state_45918[(10)]);
var inst_45876 = (state_45918[(2)]);
var inst_45877__$1 = cljs.core.nth.call(null,inst_45876,(0),null);
var inst_45878__$1 = cljs.core.nth.call(null,inst_45876,(1),null);
var inst_45879 = (inst_45877__$1 == null);
var inst_45880 = cljs.core._EQ_.call(null,inst_45878__$1,change);
var inst_45881 = (inst_45879) || (inst_45880);
var state_45918__$1 = (function (){var statearr_45940 = state_45918;
(statearr_45940[(14)] = inst_45877__$1);

(statearr_45940[(10)] = inst_45878__$1);

return statearr_45940;
})();
if(cljs.core.truth_(inst_45881)){
var statearr_45941_45998 = state_45918__$1;
(statearr_45941_45998[(1)] = (23));

} else {
var statearr_45942_45999 = state_45918__$1;
(statearr_45942_45999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (36))){
var inst_45868 = (state_45918[(12)]);
var inst_45846 = inst_45868;
var state_45918__$1 = (function (){var statearr_45943 = state_45918;
(statearr_45943[(7)] = inst_45846);

return statearr_45943;
})();
var statearr_45944_46000 = state_45918__$1;
(statearr_45944_46000[(2)] = null);

(statearr_45944_46000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (29))){
var inst_45892 = (state_45918[(9)]);
var state_45918__$1 = state_45918;
var statearr_45945_46001 = state_45918__$1;
(statearr_45945_46001[(2)] = inst_45892);

(statearr_45945_46001[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (6))){
var state_45918__$1 = state_45918;
var statearr_45946_46002 = state_45918__$1;
(statearr_45946_46002[(2)] = false);

(statearr_45946_46002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (28))){
var inst_45888 = (state_45918[(2)]);
var inst_45889 = calc_state.call(null);
var inst_45846 = inst_45889;
var state_45918__$1 = (function (){var statearr_45947 = state_45918;
(statearr_45947[(7)] = inst_45846);

(statearr_45947[(15)] = inst_45888);

return statearr_45947;
})();
var statearr_45948_46003 = state_45918__$1;
(statearr_45948_46003[(2)] = null);

(statearr_45948_46003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (25))){
var inst_45914 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
var statearr_45949_46004 = state_45918__$1;
(statearr_45949_46004[(2)] = inst_45914);

(statearr_45949_46004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (34))){
var inst_45912 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
var statearr_45950_46005 = state_45918__$1;
(statearr_45950_46005[(2)] = inst_45912);

(statearr_45950_46005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (17))){
var state_45918__$1 = state_45918;
var statearr_45951_46006 = state_45918__$1;
(statearr_45951_46006[(2)] = false);

(statearr_45951_46006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (3))){
var state_45918__$1 = state_45918;
var statearr_45952_46007 = state_45918__$1;
(statearr_45952_46007[(2)] = false);

(statearr_45952_46007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (12))){
var inst_45916 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45918__$1,inst_45916);
} else {
if((state_val_45919 === (2))){
var inst_45822 = (state_45918[(8)]);
var inst_45827 = inst_45822.cljs$lang$protocol_mask$partition0$;
var inst_45828 = (inst_45827 & (64));
var inst_45829 = inst_45822.cljs$core$ISeq$;
var inst_45830 = (inst_45828) || (inst_45829);
var state_45918__$1 = state_45918;
if(cljs.core.truth_(inst_45830)){
var statearr_45953_46008 = state_45918__$1;
(statearr_45953_46008[(1)] = (5));

} else {
var statearr_45954_46009 = state_45918__$1;
(statearr_45954_46009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (23))){
var inst_45877 = (state_45918[(14)]);
var inst_45883 = (inst_45877 == null);
var state_45918__$1 = state_45918;
if(cljs.core.truth_(inst_45883)){
var statearr_45955_46010 = state_45918__$1;
(statearr_45955_46010[(1)] = (26));

} else {
var statearr_45956_46011 = state_45918__$1;
(statearr_45956_46011[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (35))){
var inst_45903 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
if(cljs.core.truth_(inst_45903)){
var statearr_45957_46012 = state_45918__$1;
(statearr_45957_46012[(1)] = (36));

} else {
var statearr_45958_46013 = state_45918__$1;
(statearr_45958_46013[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (19))){
var inst_45846 = (state_45918[(7)]);
var inst_45865 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45846);
var state_45918__$1 = state_45918;
var statearr_45959_46014 = state_45918__$1;
(statearr_45959_46014[(2)] = inst_45865);

(statearr_45959_46014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (11))){
var inst_45846 = (state_45918[(7)]);
var inst_45850 = (inst_45846 == null);
var inst_45851 = cljs.core.not.call(null,inst_45850);
var state_45918__$1 = state_45918;
if(inst_45851){
var statearr_45960_46015 = state_45918__$1;
(statearr_45960_46015[(1)] = (13));

} else {
var statearr_45961_46016 = state_45918__$1;
(statearr_45961_46016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (9))){
var inst_45822 = (state_45918[(8)]);
var state_45918__$1 = state_45918;
var statearr_45962_46017 = state_45918__$1;
(statearr_45962_46017[(2)] = inst_45822);

(statearr_45962_46017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (5))){
var state_45918__$1 = state_45918;
var statearr_45963_46018 = state_45918__$1;
(statearr_45963_46018[(2)] = true);

(statearr_45963_46018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (14))){
var state_45918__$1 = state_45918;
var statearr_45964_46019 = state_45918__$1;
(statearr_45964_46019[(2)] = false);

(statearr_45964_46019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (26))){
var inst_45878 = (state_45918[(10)]);
var inst_45885 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45878);
var state_45918__$1 = state_45918;
var statearr_45965_46020 = state_45918__$1;
(statearr_45965_46020[(2)] = inst_45885);

(statearr_45965_46020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (16))){
var state_45918__$1 = state_45918;
var statearr_45966_46021 = state_45918__$1;
(statearr_45966_46021[(2)] = true);

(statearr_45966_46021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (38))){
var inst_45908 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
var statearr_45967_46022 = state_45918__$1;
(statearr_45967_46022[(2)] = inst_45908);

(statearr_45967_46022[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (30))){
var inst_45878 = (state_45918[(10)]);
var inst_45870 = (state_45918[(13)]);
var inst_45869 = (state_45918[(11)]);
var inst_45895 = cljs.core.empty_QMARK_.call(null,inst_45869);
var inst_45896 = inst_45870.call(null,inst_45878);
var inst_45897 = cljs.core.not.call(null,inst_45896);
var inst_45898 = (inst_45895) && (inst_45897);
var state_45918__$1 = state_45918;
var statearr_45968_46023 = state_45918__$1;
(statearr_45968_46023[(2)] = inst_45898);

(statearr_45968_46023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (10))){
var inst_45822 = (state_45918[(8)]);
var inst_45842 = (state_45918[(2)]);
var inst_45843 = cljs.core.get.call(null,inst_45842,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45844 = cljs.core.get.call(null,inst_45842,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45845 = cljs.core.get.call(null,inst_45842,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45846 = inst_45822;
var state_45918__$1 = (function (){var statearr_45969 = state_45918;
(statearr_45969[(16)] = inst_45843);

(statearr_45969[(17)] = inst_45844);

(statearr_45969[(7)] = inst_45846);

(statearr_45969[(18)] = inst_45845);

return statearr_45969;
})();
var statearr_45970_46024 = state_45918__$1;
(statearr_45970_46024[(2)] = null);

(statearr_45970_46024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (18))){
var inst_45860 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
var statearr_45971_46025 = state_45918__$1;
(statearr_45971_46025[(2)] = inst_45860);

(statearr_45971_46025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (37))){
var state_45918__$1 = state_45918;
var statearr_45972_46026 = state_45918__$1;
(statearr_45972_46026[(2)] = null);

(statearr_45972_46026[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (8))){
var inst_45822 = (state_45918[(8)]);
var inst_45839 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45822);
var state_45918__$1 = state_45918;
var statearr_45973_46027 = state_45918__$1;
(statearr_45973_46027[(2)] = inst_45839);

(statearr_45973_46027[(1)] = (10));


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
});})(c__28009__auto___45981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27988__auto__,c__28009__auto___45981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27989__auto__ = null;
var cljs$core$async$mix_$_state_machine__27989__auto____0 = (function (){
var statearr_45977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45977[(0)] = cljs$core$async$mix_$_state_machine__27989__auto__);

(statearr_45977[(1)] = (1));

return statearr_45977;
});
var cljs$core$async$mix_$_state_machine__27989__auto____1 = (function (state_45918){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_45918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e45978){if((e45978 instanceof Object)){
var ex__27992__auto__ = e45978;
var statearr_45979_46028 = state_45918;
(statearr_45979_46028[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46029 = state_45918;
state_45918 = G__46029;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27989__auto__ = function(state_45918){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27989__auto____1.call(this,state_45918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27989__auto____0;
cljs$core$async$mix_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27989__auto____1;
return cljs$core$async$mix_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___45981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28011__auto__ = (function (){var statearr_45980 = f__28010__auto__.call(null);
(statearr_45980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___45981);

return statearr_45980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___45981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args46030 = [];
var len__27054__auto___46033 = arguments.length;
var i__27055__auto___46034 = (0);
while(true){
if((i__27055__auto___46034 < len__27054__auto___46033)){
args46030.push((arguments[i__27055__auto___46034]));

var G__46035 = (i__27055__auto___46034 + (1));
i__27055__auto___46034 = G__46035;
continue;
} else {
}
break;
}

var G__46032 = args46030.length;
switch (G__46032) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46030.length)].join('')));

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
var args46038 = [];
var len__27054__auto___46163 = arguments.length;
var i__27055__auto___46164 = (0);
while(true){
if((i__27055__auto___46164 < len__27054__auto___46163)){
args46038.push((arguments[i__27055__auto___46164]));

var G__46165 = (i__27055__auto___46164 + (1));
i__27055__auto___46164 = G__46165;
continue;
} else {
}
break;
}

var G__46040 = args46038.length;
switch (G__46040) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46038.length)].join('')));

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
return (function (p1__46037_SHARP_){
if(cljs.core.truth_(p1__46037_SHARP_.call(null,topic))){
return p1__46037_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46037_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46041 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46042){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46042 = meta46042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46043,meta46042__$1){
var self__ = this;
var _46043__$1 = this;
return (new cljs.core.async.t_cljs$core$async46041(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46042__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46043){
var self__ = this;
var _46043__$1 = this;
return self__.meta46042;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46041.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46042","meta46042",-1116692854,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46041";

cljs.core.async.t_cljs$core$async46041.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async46041");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46041 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46042){
return (new cljs.core.async.t_cljs$core$async46041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46042));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46041(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28009__auto___46167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___46167,mults,ensure_mult,p){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___46167,mults,ensure_mult,p){
return (function (state_46115){
var state_val_46116 = (state_46115[(1)]);
if((state_val_46116 === (7))){
var inst_46111 = (state_46115[(2)]);
var state_46115__$1 = state_46115;
var statearr_46117_46168 = state_46115__$1;
(statearr_46117_46168[(2)] = inst_46111);

(statearr_46117_46168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (20))){
var state_46115__$1 = state_46115;
var statearr_46118_46169 = state_46115__$1;
(statearr_46118_46169[(2)] = null);

(statearr_46118_46169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (1))){
var state_46115__$1 = state_46115;
var statearr_46119_46170 = state_46115__$1;
(statearr_46119_46170[(2)] = null);

(statearr_46119_46170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (24))){
var inst_46094 = (state_46115[(7)]);
var inst_46103 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46094);
var state_46115__$1 = state_46115;
var statearr_46120_46171 = state_46115__$1;
(statearr_46120_46171[(2)] = inst_46103);

(statearr_46120_46171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (4))){
var inst_46046 = (state_46115[(8)]);
var inst_46046__$1 = (state_46115[(2)]);
var inst_46047 = (inst_46046__$1 == null);
var state_46115__$1 = (function (){var statearr_46121 = state_46115;
(statearr_46121[(8)] = inst_46046__$1);

return statearr_46121;
})();
if(cljs.core.truth_(inst_46047)){
var statearr_46122_46172 = state_46115__$1;
(statearr_46122_46172[(1)] = (5));

} else {
var statearr_46123_46173 = state_46115__$1;
(statearr_46123_46173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (15))){
var inst_46088 = (state_46115[(2)]);
var state_46115__$1 = state_46115;
var statearr_46124_46174 = state_46115__$1;
(statearr_46124_46174[(2)] = inst_46088);

(statearr_46124_46174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (21))){
var inst_46108 = (state_46115[(2)]);
var state_46115__$1 = (function (){var statearr_46125 = state_46115;
(statearr_46125[(9)] = inst_46108);

return statearr_46125;
})();
var statearr_46126_46175 = state_46115__$1;
(statearr_46126_46175[(2)] = null);

(statearr_46126_46175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (13))){
var inst_46070 = (state_46115[(10)]);
var inst_46072 = cljs.core.chunked_seq_QMARK_.call(null,inst_46070);
var state_46115__$1 = state_46115;
if(inst_46072){
var statearr_46127_46176 = state_46115__$1;
(statearr_46127_46176[(1)] = (16));

} else {
var statearr_46128_46177 = state_46115__$1;
(statearr_46128_46177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (22))){
var inst_46100 = (state_46115[(2)]);
var state_46115__$1 = state_46115;
if(cljs.core.truth_(inst_46100)){
var statearr_46129_46178 = state_46115__$1;
(statearr_46129_46178[(1)] = (23));

} else {
var statearr_46130_46179 = state_46115__$1;
(statearr_46130_46179[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (6))){
var inst_46046 = (state_46115[(8)]);
var inst_46096 = (state_46115[(11)]);
var inst_46094 = (state_46115[(7)]);
var inst_46094__$1 = topic_fn.call(null,inst_46046);
var inst_46095 = cljs.core.deref.call(null,mults);
var inst_46096__$1 = cljs.core.get.call(null,inst_46095,inst_46094__$1);
var state_46115__$1 = (function (){var statearr_46131 = state_46115;
(statearr_46131[(11)] = inst_46096__$1);

(statearr_46131[(7)] = inst_46094__$1);

return statearr_46131;
})();
if(cljs.core.truth_(inst_46096__$1)){
var statearr_46132_46180 = state_46115__$1;
(statearr_46132_46180[(1)] = (19));

} else {
var statearr_46133_46181 = state_46115__$1;
(statearr_46133_46181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (25))){
var inst_46105 = (state_46115[(2)]);
var state_46115__$1 = state_46115;
var statearr_46134_46182 = state_46115__$1;
(statearr_46134_46182[(2)] = inst_46105);

(statearr_46134_46182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (17))){
var inst_46070 = (state_46115[(10)]);
var inst_46079 = cljs.core.first.call(null,inst_46070);
var inst_46080 = cljs.core.async.muxch_STAR_.call(null,inst_46079);
var inst_46081 = cljs.core.async.close_BANG_.call(null,inst_46080);
var inst_46082 = cljs.core.next.call(null,inst_46070);
var inst_46056 = inst_46082;
var inst_46057 = null;
var inst_46058 = (0);
var inst_46059 = (0);
var state_46115__$1 = (function (){var statearr_46135 = state_46115;
(statearr_46135[(12)] = inst_46058);

(statearr_46135[(13)] = inst_46057);

(statearr_46135[(14)] = inst_46059);

(statearr_46135[(15)] = inst_46056);

(statearr_46135[(16)] = inst_46081);

return statearr_46135;
})();
var statearr_46136_46183 = state_46115__$1;
(statearr_46136_46183[(2)] = null);

(statearr_46136_46183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (3))){
var inst_46113 = (state_46115[(2)]);
var state_46115__$1 = state_46115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46115__$1,inst_46113);
} else {
if((state_val_46116 === (12))){
var inst_46090 = (state_46115[(2)]);
var state_46115__$1 = state_46115;
var statearr_46137_46184 = state_46115__$1;
(statearr_46137_46184[(2)] = inst_46090);

(statearr_46137_46184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (2))){
var state_46115__$1 = state_46115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46115__$1,(4),ch);
} else {
if((state_val_46116 === (23))){
var state_46115__$1 = state_46115;
var statearr_46138_46185 = state_46115__$1;
(statearr_46138_46185[(2)] = null);

(statearr_46138_46185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (19))){
var inst_46046 = (state_46115[(8)]);
var inst_46096 = (state_46115[(11)]);
var inst_46098 = cljs.core.async.muxch_STAR_.call(null,inst_46096);
var state_46115__$1 = state_46115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46115__$1,(22),inst_46098,inst_46046);
} else {
if((state_val_46116 === (11))){
var inst_46056 = (state_46115[(15)]);
var inst_46070 = (state_46115[(10)]);
var inst_46070__$1 = cljs.core.seq.call(null,inst_46056);
var state_46115__$1 = (function (){var statearr_46139 = state_46115;
(statearr_46139[(10)] = inst_46070__$1);

return statearr_46139;
})();
if(inst_46070__$1){
var statearr_46140_46186 = state_46115__$1;
(statearr_46140_46186[(1)] = (13));

} else {
var statearr_46141_46187 = state_46115__$1;
(statearr_46141_46187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (9))){
var inst_46092 = (state_46115[(2)]);
var state_46115__$1 = state_46115;
var statearr_46142_46188 = state_46115__$1;
(statearr_46142_46188[(2)] = inst_46092);

(statearr_46142_46188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (5))){
var inst_46053 = cljs.core.deref.call(null,mults);
var inst_46054 = cljs.core.vals.call(null,inst_46053);
var inst_46055 = cljs.core.seq.call(null,inst_46054);
var inst_46056 = inst_46055;
var inst_46057 = null;
var inst_46058 = (0);
var inst_46059 = (0);
var state_46115__$1 = (function (){var statearr_46143 = state_46115;
(statearr_46143[(12)] = inst_46058);

(statearr_46143[(13)] = inst_46057);

(statearr_46143[(14)] = inst_46059);

(statearr_46143[(15)] = inst_46056);

return statearr_46143;
})();
var statearr_46144_46189 = state_46115__$1;
(statearr_46144_46189[(2)] = null);

(statearr_46144_46189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (14))){
var state_46115__$1 = state_46115;
var statearr_46148_46190 = state_46115__$1;
(statearr_46148_46190[(2)] = null);

(statearr_46148_46190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (16))){
var inst_46070 = (state_46115[(10)]);
var inst_46074 = cljs.core.chunk_first.call(null,inst_46070);
var inst_46075 = cljs.core.chunk_rest.call(null,inst_46070);
var inst_46076 = cljs.core.count.call(null,inst_46074);
var inst_46056 = inst_46075;
var inst_46057 = inst_46074;
var inst_46058 = inst_46076;
var inst_46059 = (0);
var state_46115__$1 = (function (){var statearr_46149 = state_46115;
(statearr_46149[(12)] = inst_46058);

(statearr_46149[(13)] = inst_46057);

(statearr_46149[(14)] = inst_46059);

(statearr_46149[(15)] = inst_46056);

return statearr_46149;
})();
var statearr_46150_46191 = state_46115__$1;
(statearr_46150_46191[(2)] = null);

(statearr_46150_46191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (10))){
var inst_46058 = (state_46115[(12)]);
var inst_46057 = (state_46115[(13)]);
var inst_46059 = (state_46115[(14)]);
var inst_46056 = (state_46115[(15)]);
var inst_46064 = cljs.core._nth.call(null,inst_46057,inst_46059);
var inst_46065 = cljs.core.async.muxch_STAR_.call(null,inst_46064);
var inst_46066 = cljs.core.async.close_BANG_.call(null,inst_46065);
var inst_46067 = (inst_46059 + (1));
var tmp46145 = inst_46058;
var tmp46146 = inst_46057;
var tmp46147 = inst_46056;
var inst_46056__$1 = tmp46147;
var inst_46057__$1 = tmp46146;
var inst_46058__$1 = tmp46145;
var inst_46059__$1 = inst_46067;
var state_46115__$1 = (function (){var statearr_46151 = state_46115;
(statearr_46151[(17)] = inst_46066);

(statearr_46151[(12)] = inst_46058__$1);

(statearr_46151[(13)] = inst_46057__$1);

(statearr_46151[(14)] = inst_46059__$1);

(statearr_46151[(15)] = inst_46056__$1);

return statearr_46151;
})();
var statearr_46152_46192 = state_46115__$1;
(statearr_46152_46192[(2)] = null);

(statearr_46152_46192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (18))){
var inst_46085 = (state_46115[(2)]);
var state_46115__$1 = state_46115;
var statearr_46153_46193 = state_46115__$1;
(statearr_46153_46193[(2)] = inst_46085);

(statearr_46153_46193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46116 === (8))){
var inst_46058 = (state_46115[(12)]);
var inst_46059 = (state_46115[(14)]);
var inst_46061 = (inst_46059 < inst_46058);
var inst_46062 = inst_46061;
var state_46115__$1 = state_46115;
if(cljs.core.truth_(inst_46062)){
var statearr_46154_46194 = state_46115__$1;
(statearr_46154_46194[(1)] = (10));

} else {
var statearr_46155_46195 = state_46115__$1;
(statearr_46155_46195[(1)] = (11));

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
});})(c__28009__auto___46167,mults,ensure_mult,p))
;
return ((function (switch__27988__auto__,c__28009__auto___46167,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_46159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46159[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_46159[(1)] = (1));

return statearr_46159;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_46115){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_46115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e46160){if((e46160 instanceof Object)){
var ex__27992__auto__ = e46160;
var statearr_46161_46196 = state_46115;
(statearr_46161_46196[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46197 = state_46115;
state_46115 = G__46197;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_46115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_46115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___46167,mults,ensure_mult,p))
})();
var state__28011__auto__ = (function (){var statearr_46162 = f__28010__auto__.call(null);
(statearr_46162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___46167);

return statearr_46162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___46167,mults,ensure_mult,p))
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
var args46198 = [];
var len__27054__auto___46201 = arguments.length;
var i__27055__auto___46202 = (0);
while(true){
if((i__27055__auto___46202 < len__27054__auto___46201)){
args46198.push((arguments[i__27055__auto___46202]));

var G__46203 = (i__27055__auto___46202 + (1));
i__27055__auto___46202 = G__46203;
continue;
} else {
}
break;
}

var G__46200 = args46198.length;
switch (G__46200) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46198.length)].join('')));

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
var args46205 = [];
var len__27054__auto___46208 = arguments.length;
var i__27055__auto___46209 = (0);
while(true){
if((i__27055__auto___46209 < len__27054__auto___46208)){
args46205.push((arguments[i__27055__auto___46209]));

var G__46210 = (i__27055__auto___46209 + (1));
i__27055__auto___46209 = G__46210;
continue;
} else {
}
break;
}

var G__46207 = args46205.length;
switch (G__46207) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46205.length)].join('')));

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
var args46212 = [];
var len__27054__auto___46283 = arguments.length;
var i__27055__auto___46284 = (0);
while(true){
if((i__27055__auto___46284 < len__27054__auto___46283)){
args46212.push((arguments[i__27055__auto___46284]));

var G__46285 = (i__27055__auto___46284 + (1));
i__27055__auto___46284 = G__46285;
continue;
} else {
}
break;
}

var G__46214 = args46212.length;
switch (G__46214) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46212.length)].join('')));

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
var c__28009__auto___46287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___46287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___46287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46253){
var state_val_46254 = (state_46253[(1)]);
if((state_val_46254 === (7))){
var state_46253__$1 = state_46253;
var statearr_46255_46288 = state_46253__$1;
(statearr_46255_46288[(2)] = null);

(statearr_46255_46288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (1))){
var state_46253__$1 = state_46253;
var statearr_46256_46289 = state_46253__$1;
(statearr_46256_46289[(2)] = null);

(statearr_46256_46289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (4))){
var inst_46217 = (state_46253[(7)]);
var inst_46219 = (inst_46217 < cnt);
var state_46253__$1 = state_46253;
if(cljs.core.truth_(inst_46219)){
var statearr_46257_46290 = state_46253__$1;
(statearr_46257_46290[(1)] = (6));

} else {
var statearr_46258_46291 = state_46253__$1;
(statearr_46258_46291[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (15))){
var inst_46249 = (state_46253[(2)]);
var state_46253__$1 = state_46253;
var statearr_46259_46292 = state_46253__$1;
(statearr_46259_46292[(2)] = inst_46249);

(statearr_46259_46292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (13))){
var inst_46242 = cljs.core.async.close_BANG_.call(null,out);
var state_46253__$1 = state_46253;
var statearr_46260_46293 = state_46253__$1;
(statearr_46260_46293[(2)] = inst_46242);

(statearr_46260_46293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (6))){
var state_46253__$1 = state_46253;
var statearr_46261_46294 = state_46253__$1;
(statearr_46261_46294[(2)] = null);

(statearr_46261_46294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (3))){
var inst_46251 = (state_46253[(2)]);
var state_46253__$1 = state_46253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46253__$1,inst_46251);
} else {
if((state_val_46254 === (12))){
var inst_46239 = (state_46253[(8)]);
var inst_46239__$1 = (state_46253[(2)]);
var inst_46240 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46239__$1);
var state_46253__$1 = (function (){var statearr_46262 = state_46253;
(statearr_46262[(8)] = inst_46239__$1);

return statearr_46262;
})();
if(cljs.core.truth_(inst_46240)){
var statearr_46263_46295 = state_46253__$1;
(statearr_46263_46295[(1)] = (13));

} else {
var statearr_46264_46296 = state_46253__$1;
(statearr_46264_46296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (2))){
var inst_46216 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46217 = (0);
var state_46253__$1 = (function (){var statearr_46265 = state_46253;
(statearr_46265[(9)] = inst_46216);

(statearr_46265[(7)] = inst_46217);

return statearr_46265;
})();
var statearr_46266_46297 = state_46253__$1;
(statearr_46266_46297[(2)] = null);

(statearr_46266_46297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (11))){
var inst_46217 = (state_46253[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46253,(10),Object,null,(9));
var inst_46226 = chs__$1.call(null,inst_46217);
var inst_46227 = done.call(null,inst_46217);
var inst_46228 = cljs.core.async.take_BANG_.call(null,inst_46226,inst_46227);
var state_46253__$1 = state_46253;
var statearr_46267_46298 = state_46253__$1;
(statearr_46267_46298[(2)] = inst_46228);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46253__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (9))){
var inst_46217 = (state_46253[(7)]);
var inst_46230 = (state_46253[(2)]);
var inst_46231 = (inst_46217 + (1));
var inst_46217__$1 = inst_46231;
var state_46253__$1 = (function (){var statearr_46268 = state_46253;
(statearr_46268[(10)] = inst_46230);

(statearr_46268[(7)] = inst_46217__$1);

return statearr_46268;
})();
var statearr_46269_46299 = state_46253__$1;
(statearr_46269_46299[(2)] = null);

(statearr_46269_46299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (5))){
var inst_46237 = (state_46253[(2)]);
var state_46253__$1 = (function (){var statearr_46270 = state_46253;
(statearr_46270[(11)] = inst_46237);

return statearr_46270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46253__$1,(12),dchan);
} else {
if((state_val_46254 === (14))){
var inst_46239 = (state_46253[(8)]);
var inst_46244 = cljs.core.apply.call(null,f,inst_46239);
var state_46253__$1 = state_46253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46253__$1,(16),out,inst_46244);
} else {
if((state_val_46254 === (16))){
var inst_46246 = (state_46253[(2)]);
var state_46253__$1 = (function (){var statearr_46271 = state_46253;
(statearr_46271[(12)] = inst_46246);

return statearr_46271;
})();
var statearr_46272_46300 = state_46253__$1;
(statearr_46272_46300[(2)] = null);

(statearr_46272_46300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (10))){
var inst_46221 = (state_46253[(2)]);
var inst_46222 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46253__$1 = (function (){var statearr_46273 = state_46253;
(statearr_46273[(13)] = inst_46221);

return statearr_46273;
})();
var statearr_46274_46301 = state_46253__$1;
(statearr_46274_46301[(2)] = inst_46222);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46253__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (8))){
var inst_46235 = (state_46253[(2)]);
var state_46253__$1 = state_46253;
var statearr_46275_46302 = state_46253__$1;
(statearr_46275_46302[(2)] = inst_46235);

(statearr_46275_46302[(1)] = (5));


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
});})(c__28009__auto___46287,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27988__auto__,c__28009__auto___46287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_46279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46279[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_46279[(1)] = (1));

return statearr_46279;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_46253){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_46253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e46280){if((e46280 instanceof Object)){
var ex__27992__auto__ = e46280;
var statearr_46281_46303 = state_46253;
(statearr_46281_46303[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46304 = state_46253;
state_46253 = G__46304;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_46253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_46253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___46287,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28011__auto__ = (function (){var statearr_46282 = f__28010__auto__.call(null);
(statearr_46282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___46287);

return statearr_46282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___46287,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args46306 = [];
var len__27054__auto___46364 = arguments.length;
var i__27055__auto___46365 = (0);
while(true){
if((i__27055__auto___46365 < len__27054__auto___46364)){
args46306.push((arguments[i__27055__auto___46365]));

var G__46366 = (i__27055__auto___46365 + (1));
i__27055__auto___46365 = G__46366;
continue;
} else {
}
break;
}

var G__46308 = args46306.length;
switch (G__46308) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46306.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___46368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___46368,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___46368,out){
return (function (state_46340){
var state_val_46341 = (state_46340[(1)]);
if((state_val_46341 === (7))){
var inst_46319 = (state_46340[(7)]);
var inst_46320 = (state_46340[(8)]);
var inst_46319__$1 = (state_46340[(2)]);
var inst_46320__$1 = cljs.core.nth.call(null,inst_46319__$1,(0),null);
var inst_46321 = cljs.core.nth.call(null,inst_46319__$1,(1),null);
var inst_46322 = (inst_46320__$1 == null);
var state_46340__$1 = (function (){var statearr_46342 = state_46340;
(statearr_46342[(9)] = inst_46321);

(statearr_46342[(7)] = inst_46319__$1);

(statearr_46342[(8)] = inst_46320__$1);

return statearr_46342;
})();
if(cljs.core.truth_(inst_46322)){
var statearr_46343_46369 = state_46340__$1;
(statearr_46343_46369[(1)] = (8));

} else {
var statearr_46344_46370 = state_46340__$1;
(statearr_46344_46370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (1))){
var inst_46309 = cljs.core.vec.call(null,chs);
var inst_46310 = inst_46309;
var state_46340__$1 = (function (){var statearr_46345 = state_46340;
(statearr_46345[(10)] = inst_46310);

return statearr_46345;
})();
var statearr_46346_46371 = state_46340__$1;
(statearr_46346_46371[(2)] = null);

(statearr_46346_46371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (4))){
var inst_46310 = (state_46340[(10)]);
var state_46340__$1 = state_46340;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46340__$1,(7),inst_46310);
} else {
if((state_val_46341 === (6))){
var inst_46336 = (state_46340[(2)]);
var state_46340__$1 = state_46340;
var statearr_46347_46372 = state_46340__$1;
(statearr_46347_46372[(2)] = inst_46336);

(statearr_46347_46372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (3))){
var inst_46338 = (state_46340[(2)]);
var state_46340__$1 = state_46340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46340__$1,inst_46338);
} else {
if((state_val_46341 === (2))){
var inst_46310 = (state_46340[(10)]);
var inst_46312 = cljs.core.count.call(null,inst_46310);
var inst_46313 = (inst_46312 > (0));
var state_46340__$1 = state_46340;
if(cljs.core.truth_(inst_46313)){
var statearr_46349_46373 = state_46340__$1;
(statearr_46349_46373[(1)] = (4));

} else {
var statearr_46350_46374 = state_46340__$1;
(statearr_46350_46374[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (11))){
var inst_46310 = (state_46340[(10)]);
var inst_46329 = (state_46340[(2)]);
var tmp46348 = inst_46310;
var inst_46310__$1 = tmp46348;
var state_46340__$1 = (function (){var statearr_46351 = state_46340;
(statearr_46351[(10)] = inst_46310__$1);

(statearr_46351[(11)] = inst_46329);

return statearr_46351;
})();
var statearr_46352_46375 = state_46340__$1;
(statearr_46352_46375[(2)] = null);

(statearr_46352_46375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (9))){
var inst_46320 = (state_46340[(8)]);
var state_46340__$1 = state_46340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46340__$1,(11),out,inst_46320);
} else {
if((state_val_46341 === (5))){
var inst_46334 = cljs.core.async.close_BANG_.call(null,out);
var state_46340__$1 = state_46340;
var statearr_46353_46376 = state_46340__$1;
(statearr_46353_46376[(2)] = inst_46334);

(statearr_46353_46376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (10))){
var inst_46332 = (state_46340[(2)]);
var state_46340__$1 = state_46340;
var statearr_46354_46377 = state_46340__$1;
(statearr_46354_46377[(2)] = inst_46332);

(statearr_46354_46377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (8))){
var inst_46321 = (state_46340[(9)]);
var inst_46310 = (state_46340[(10)]);
var inst_46319 = (state_46340[(7)]);
var inst_46320 = (state_46340[(8)]);
var inst_46324 = (function (){var cs = inst_46310;
var vec__46315 = inst_46319;
var v = inst_46320;
var c = inst_46321;
return ((function (cs,vec__46315,v,c,inst_46321,inst_46310,inst_46319,inst_46320,state_val_46341,c__28009__auto___46368,out){
return (function (p1__46305_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46305_SHARP_);
});
;})(cs,vec__46315,v,c,inst_46321,inst_46310,inst_46319,inst_46320,state_val_46341,c__28009__auto___46368,out))
})();
var inst_46325 = cljs.core.filterv.call(null,inst_46324,inst_46310);
var inst_46310__$1 = inst_46325;
var state_46340__$1 = (function (){var statearr_46355 = state_46340;
(statearr_46355[(10)] = inst_46310__$1);

return statearr_46355;
})();
var statearr_46356_46378 = state_46340__$1;
(statearr_46356_46378[(2)] = null);

(statearr_46356_46378[(1)] = (2));


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
});})(c__28009__auto___46368,out))
;
return ((function (switch__27988__auto__,c__28009__auto___46368,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_46360 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46360[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_46360[(1)] = (1));

return statearr_46360;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_46340){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_46340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e46361){if((e46361 instanceof Object)){
var ex__27992__auto__ = e46361;
var statearr_46362_46379 = state_46340;
(statearr_46362_46379[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46380 = state_46340;
state_46340 = G__46380;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_46340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_46340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___46368,out))
})();
var state__28011__auto__ = (function (){var statearr_46363 = f__28010__auto__.call(null);
(statearr_46363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___46368);

return statearr_46363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___46368,out))
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
var args46381 = [];
var len__27054__auto___46430 = arguments.length;
var i__27055__auto___46431 = (0);
while(true){
if((i__27055__auto___46431 < len__27054__auto___46430)){
args46381.push((arguments[i__27055__auto___46431]));

var G__46432 = (i__27055__auto___46431 + (1));
i__27055__auto___46431 = G__46432;
continue;
} else {
}
break;
}

var G__46383 = args46381.length;
switch (G__46383) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46381.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___46434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___46434,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___46434,out){
return (function (state_46407){
var state_val_46408 = (state_46407[(1)]);
if((state_val_46408 === (7))){
var inst_46389 = (state_46407[(7)]);
var inst_46389__$1 = (state_46407[(2)]);
var inst_46390 = (inst_46389__$1 == null);
var inst_46391 = cljs.core.not.call(null,inst_46390);
var state_46407__$1 = (function (){var statearr_46409 = state_46407;
(statearr_46409[(7)] = inst_46389__$1);

return statearr_46409;
})();
if(inst_46391){
var statearr_46410_46435 = state_46407__$1;
(statearr_46410_46435[(1)] = (8));

} else {
var statearr_46411_46436 = state_46407__$1;
(statearr_46411_46436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46408 === (1))){
var inst_46384 = (0);
var state_46407__$1 = (function (){var statearr_46412 = state_46407;
(statearr_46412[(8)] = inst_46384);

return statearr_46412;
})();
var statearr_46413_46437 = state_46407__$1;
(statearr_46413_46437[(2)] = null);

(statearr_46413_46437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46408 === (4))){
var state_46407__$1 = state_46407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46407__$1,(7),ch);
} else {
if((state_val_46408 === (6))){
var inst_46402 = (state_46407[(2)]);
var state_46407__$1 = state_46407;
var statearr_46414_46438 = state_46407__$1;
(statearr_46414_46438[(2)] = inst_46402);

(statearr_46414_46438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46408 === (3))){
var inst_46404 = (state_46407[(2)]);
var inst_46405 = cljs.core.async.close_BANG_.call(null,out);
var state_46407__$1 = (function (){var statearr_46415 = state_46407;
(statearr_46415[(9)] = inst_46404);

return statearr_46415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46407__$1,inst_46405);
} else {
if((state_val_46408 === (2))){
var inst_46384 = (state_46407[(8)]);
var inst_46386 = (inst_46384 < n);
var state_46407__$1 = state_46407;
if(cljs.core.truth_(inst_46386)){
var statearr_46416_46439 = state_46407__$1;
(statearr_46416_46439[(1)] = (4));

} else {
var statearr_46417_46440 = state_46407__$1;
(statearr_46417_46440[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46408 === (11))){
var inst_46384 = (state_46407[(8)]);
var inst_46394 = (state_46407[(2)]);
var inst_46395 = (inst_46384 + (1));
var inst_46384__$1 = inst_46395;
var state_46407__$1 = (function (){var statearr_46418 = state_46407;
(statearr_46418[(8)] = inst_46384__$1);

(statearr_46418[(10)] = inst_46394);

return statearr_46418;
})();
var statearr_46419_46441 = state_46407__$1;
(statearr_46419_46441[(2)] = null);

(statearr_46419_46441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46408 === (9))){
var state_46407__$1 = state_46407;
var statearr_46420_46442 = state_46407__$1;
(statearr_46420_46442[(2)] = null);

(statearr_46420_46442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46408 === (5))){
var state_46407__$1 = state_46407;
var statearr_46421_46443 = state_46407__$1;
(statearr_46421_46443[(2)] = null);

(statearr_46421_46443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46408 === (10))){
var inst_46399 = (state_46407[(2)]);
var state_46407__$1 = state_46407;
var statearr_46422_46444 = state_46407__$1;
(statearr_46422_46444[(2)] = inst_46399);

(statearr_46422_46444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46408 === (8))){
var inst_46389 = (state_46407[(7)]);
var state_46407__$1 = state_46407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46407__$1,(11),out,inst_46389);
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
});})(c__28009__auto___46434,out))
;
return ((function (switch__27988__auto__,c__28009__auto___46434,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_46426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46426[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_46426[(1)] = (1));

return statearr_46426;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_46407){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_46407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e46427){if((e46427 instanceof Object)){
var ex__27992__auto__ = e46427;
var statearr_46428_46445 = state_46407;
(statearr_46428_46445[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46446 = state_46407;
state_46407 = G__46446;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_46407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_46407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___46434,out))
})();
var state__28011__auto__ = (function (){var statearr_46429 = f__28010__auto__.call(null);
(statearr_46429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___46434);

return statearr_46429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___46434,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46454 = (function (map_LT_,f,ch,meta46455){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46455 = meta46455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46456,meta46455__$1){
var self__ = this;
var _46456__$1 = this;
return (new cljs.core.async.t_cljs$core$async46454(self__.map_LT_,self__.f,self__.ch,meta46455__$1));
});

cljs.core.async.t_cljs$core$async46454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46456){
var self__ = this;
var _46456__$1 = this;
return self__.meta46455;
});

cljs.core.async.t_cljs$core$async46454.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46454.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46454.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46454.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46454.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46457 = (function (map_LT_,f,ch,meta46455,_,fn1,meta46458){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46455 = meta46455;
this._ = _;
this.fn1 = fn1;
this.meta46458 = meta46458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46459,meta46458__$1){
var self__ = this;
var _46459__$1 = this;
return (new cljs.core.async.t_cljs$core$async46457(self__.map_LT_,self__.f,self__.ch,self__.meta46455,self__._,self__.fn1,meta46458__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46459){
var self__ = this;
var _46459__$1 = this;
return self__.meta46458;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46457.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46457.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46457.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46457.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46447_SHARP_){
return f1.call(null,(((p1__46447_SHARP_ == null))?null:self__.f.call(null,p1__46447_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46457.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46455","meta46455",1848091037,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46454","cljs.core.async/t_cljs$core$async46454",1463175490,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46458","meta46458",-1270188662,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46457";

cljs.core.async.t_cljs$core$async46457.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async46457");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46457 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46457(map_LT___$1,f__$1,ch__$1,meta46455__$1,___$2,fn1__$1,meta46458){
return (new cljs.core.async.t_cljs$core$async46457(map_LT___$1,f__$1,ch__$1,meta46455__$1,___$2,fn1__$1,meta46458));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46457(self__.map_LT_,self__.f,self__.ch,self__.meta46455,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async46454.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46454.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46455","meta46455",1848091037,null)], null);
});

cljs.core.async.t_cljs$core$async46454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46454";

cljs.core.async.t_cljs$core$async46454.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async46454");
});

cljs.core.async.__GT_t_cljs$core$async46454 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46454(map_LT___$1,f__$1,ch__$1,meta46455){
return (new cljs.core.async.t_cljs$core$async46454(map_LT___$1,f__$1,ch__$1,meta46455));
});

}

return (new cljs.core.async.t_cljs$core$async46454(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46463 = (function (map_GT_,f,ch,meta46464){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta46464 = meta46464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46465,meta46464__$1){
var self__ = this;
var _46465__$1 = this;
return (new cljs.core.async.t_cljs$core$async46463(self__.map_GT_,self__.f,self__.ch,meta46464__$1));
});

cljs.core.async.t_cljs$core$async46463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46465){
var self__ = this;
var _46465__$1 = this;
return self__.meta46464;
});

cljs.core.async.t_cljs$core$async46463.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46463.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46463.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46463.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46463.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46463.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46464","meta46464",-1310009040,null)], null);
});

cljs.core.async.t_cljs$core$async46463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46463";

cljs.core.async.t_cljs$core$async46463.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async46463");
});

cljs.core.async.__GT_t_cljs$core$async46463 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46463(map_GT___$1,f__$1,ch__$1,meta46464){
return (new cljs.core.async.t_cljs$core$async46463(map_GT___$1,f__$1,ch__$1,meta46464));
});

}

return (new cljs.core.async.t_cljs$core$async46463(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46469 = (function (filter_GT_,p,ch,meta46470){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta46470 = meta46470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46471,meta46470__$1){
var self__ = this;
var _46471__$1 = this;
return (new cljs.core.async.t_cljs$core$async46469(self__.filter_GT_,self__.p,self__.ch,meta46470__$1));
});

cljs.core.async.t_cljs$core$async46469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46471){
var self__ = this;
var _46471__$1 = this;
return self__.meta46470;
});

cljs.core.async.t_cljs$core$async46469.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46469.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46469.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46469.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46470","meta46470",1920184612,null)], null);
});

cljs.core.async.t_cljs$core$async46469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46469";

cljs.core.async.t_cljs$core$async46469.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async46469");
});

cljs.core.async.__GT_t_cljs$core$async46469 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46469(filter_GT___$1,p__$1,ch__$1,meta46470){
return (new cljs.core.async.t_cljs$core$async46469(filter_GT___$1,p__$1,ch__$1,meta46470));
});

}

return (new cljs.core.async.t_cljs$core$async46469(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args46472 = [];
var len__27054__auto___46516 = arguments.length;
var i__27055__auto___46517 = (0);
while(true){
if((i__27055__auto___46517 < len__27054__auto___46516)){
args46472.push((arguments[i__27055__auto___46517]));

var G__46518 = (i__27055__auto___46517 + (1));
i__27055__auto___46517 = G__46518;
continue;
} else {
}
break;
}

var G__46474 = args46472.length;
switch (G__46474) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46472.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___46520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___46520,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___46520,out){
return (function (state_46495){
var state_val_46496 = (state_46495[(1)]);
if((state_val_46496 === (7))){
var inst_46491 = (state_46495[(2)]);
var state_46495__$1 = state_46495;
var statearr_46497_46521 = state_46495__$1;
(statearr_46497_46521[(2)] = inst_46491);

(statearr_46497_46521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46496 === (1))){
var state_46495__$1 = state_46495;
var statearr_46498_46522 = state_46495__$1;
(statearr_46498_46522[(2)] = null);

(statearr_46498_46522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46496 === (4))){
var inst_46477 = (state_46495[(7)]);
var inst_46477__$1 = (state_46495[(2)]);
var inst_46478 = (inst_46477__$1 == null);
var state_46495__$1 = (function (){var statearr_46499 = state_46495;
(statearr_46499[(7)] = inst_46477__$1);

return statearr_46499;
})();
if(cljs.core.truth_(inst_46478)){
var statearr_46500_46523 = state_46495__$1;
(statearr_46500_46523[(1)] = (5));

} else {
var statearr_46501_46524 = state_46495__$1;
(statearr_46501_46524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46496 === (6))){
var inst_46477 = (state_46495[(7)]);
var inst_46482 = p.call(null,inst_46477);
var state_46495__$1 = state_46495;
if(cljs.core.truth_(inst_46482)){
var statearr_46502_46525 = state_46495__$1;
(statearr_46502_46525[(1)] = (8));

} else {
var statearr_46503_46526 = state_46495__$1;
(statearr_46503_46526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46496 === (3))){
var inst_46493 = (state_46495[(2)]);
var state_46495__$1 = state_46495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46495__$1,inst_46493);
} else {
if((state_val_46496 === (2))){
var state_46495__$1 = state_46495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46495__$1,(4),ch);
} else {
if((state_val_46496 === (11))){
var inst_46485 = (state_46495[(2)]);
var state_46495__$1 = state_46495;
var statearr_46504_46527 = state_46495__$1;
(statearr_46504_46527[(2)] = inst_46485);

(statearr_46504_46527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46496 === (9))){
var state_46495__$1 = state_46495;
var statearr_46505_46528 = state_46495__$1;
(statearr_46505_46528[(2)] = null);

(statearr_46505_46528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46496 === (5))){
var inst_46480 = cljs.core.async.close_BANG_.call(null,out);
var state_46495__$1 = state_46495;
var statearr_46506_46529 = state_46495__$1;
(statearr_46506_46529[(2)] = inst_46480);

(statearr_46506_46529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46496 === (10))){
var inst_46488 = (state_46495[(2)]);
var state_46495__$1 = (function (){var statearr_46507 = state_46495;
(statearr_46507[(8)] = inst_46488);

return statearr_46507;
})();
var statearr_46508_46530 = state_46495__$1;
(statearr_46508_46530[(2)] = null);

(statearr_46508_46530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46496 === (8))){
var inst_46477 = (state_46495[(7)]);
var state_46495__$1 = state_46495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46495__$1,(11),out,inst_46477);
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
});})(c__28009__auto___46520,out))
;
return ((function (switch__27988__auto__,c__28009__auto___46520,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_46512 = [null,null,null,null,null,null,null,null,null];
(statearr_46512[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_46512[(1)] = (1));

return statearr_46512;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_46495){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_46495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e46513){if((e46513 instanceof Object)){
var ex__27992__auto__ = e46513;
var statearr_46514_46531 = state_46495;
(statearr_46514_46531[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46532 = state_46495;
state_46495 = G__46532;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_46495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_46495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___46520,out))
})();
var state__28011__auto__ = (function (){var statearr_46515 = f__28010__auto__.call(null);
(statearr_46515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___46520);

return statearr_46515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___46520,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args46533 = [];
var len__27054__auto___46536 = arguments.length;
var i__27055__auto___46537 = (0);
while(true){
if((i__27055__auto___46537 < len__27054__auto___46536)){
args46533.push((arguments[i__27055__auto___46537]));

var G__46538 = (i__27055__auto___46537 + (1));
i__27055__auto___46537 = G__46538;
continue;
} else {
}
break;
}

var G__46535 = args46533.length;
switch (G__46535) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46533.length)].join('')));

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
return (function (state_46705){
var state_val_46706 = (state_46705[(1)]);
if((state_val_46706 === (7))){
var inst_46701 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
var statearr_46707_46748 = state_46705__$1;
(statearr_46707_46748[(2)] = inst_46701);

(statearr_46707_46748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (20))){
var inst_46671 = (state_46705[(7)]);
var inst_46682 = (state_46705[(2)]);
var inst_46683 = cljs.core.next.call(null,inst_46671);
var inst_46657 = inst_46683;
var inst_46658 = null;
var inst_46659 = (0);
var inst_46660 = (0);
var state_46705__$1 = (function (){var statearr_46708 = state_46705;
(statearr_46708[(8)] = inst_46658);

(statearr_46708[(9)] = inst_46682);

(statearr_46708[(10)] = inst_46660);

(statearr_46708[(11)] = inst_46657);

(statearr_46708[(12)] = inst_46659);

return statearr_46708;
})();
var statearr_46709_46749 = state_46705__$1;
(statearr_46709_46749[(2)] = null);

(statearr_46709_46749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (1))){
var state_46705__$1 = state_46705;
var statearr_46710_46750 = state_46705__$1;
(statearr_46710_46750[(2)] = null);

(statearr_46710_46750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (4))){
var inst_46646 = (state_46705[(13)]);
var inst_46646__$1 = (state_46705[(2)]);
var inst_46647 = (inst_46646__$1 == null);
var state_46705__$1 = (function (){var statearr_46711 = state_46705;
(statearr_46711[(13)] = inst_46646__$1);

return statearr_46711;
})();
if(cljs.core.truth_(inst_46647)){
var statearr_46712_46751 = state_46705__$1;
(statearr_46712_46751[(1)] = (5));

} else {
var statearr_46713_46752 = state_46705__$1;
(statearr_46713_46752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (15))){
var state_46705__$1 = state_46705;
var statearr_46717_46753 = state_46705__$1;
(statearr_46717_46753[(2)] = null);

(statearr_46717_46753[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (21))){
var state_46705__$1 = state_46705;
var statearr_46718_46754 = state_46705__$1;
(statearr_46718_46754[(2)] = null);

(statearr_46718_46754[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (13))){
var inst_46658 = (state_46705[(8)]);
var inst_46660 = (state_46705[(10)]);
var inst_46657 = (state_46705[(11)]);
var inst_46659 = (state_46705[(12)]);
var inst_46667 = (state_46705[(2)]);
var inst_46668 = (inst_46660 + (1));
var tmp46714 = inst_46658;
var tmp46715 = inst_46657;
var tmp46716 = inst_46659;
var inst_46657__$1 = tmp46715;
var inst_46658__$1 = tmp46714;
var inst_46659__$1 = tmp46716;
var inst_46660__$1 = inst_46668;
var state_46705__$1 = (function (){var statearr_46719 = state_46705;
(statearr_46719[(8)] = inst_46658__$1);

(statearr_46719[(10)] = inst_46660__$1);

(statearr_46719[(14)] = inst_46667);

(statearr_46719[(11)] = inst_46657__$1);

(statearr_46719[(12)] = inst_46659__$1);

return statearr_46719;
})();
var statearr_46720_46755 = state_46705__$1;
(statearr_46720_46755[(2)] = null);

(statearr_46720_46755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (22))){
var state_46705__$1 = state_46705;
var statearr_46721_46756 = state_46705__$1;
(statearr_46721_46756[(2)] = null);

(statearr_46721_46756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (6))){
var inst_46646 = (state_46705[(13)]);
var inst_46655 = f.call(null,inst_46646);
var inst_46656 = cljs.core.seq.call(null,inst_46655);
var inst_46657 = inst_46656;
var inst_46658 = null;
var inst_46659 = (0);
var inst_46660 = (0);
var state_46705__$1 = (function (){var statearr_46722 = state_46705;
(statearr_46722[(8)] = inst_46658);

(statearr_46722[(10)] = inst_46660);

(statearr_46722[(11)] = inst_46657);

(statearr_46722[(12)] = inst_46659);

return statearr_46722;
})();
var statearr_46723_46757 = state_46705__$1;
(statearr_46723_46757[(2)] = null);

(statearr_46723_46757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (17))){
var inst_46671 = (state_46705[(7)]);
var inst_46675 = cljs.core.chunk_first.call(null,inst_46671);
var inst_46676 = cljs.core.chunk_rest.call(null,inst_46671);
var inst_46677 = cljs.core.count.call(null,inst_46675);
var inst_46657 = inst_46676;
var inst_46658 = inst_46675;
var inst_46659 = inst_46677;
var inst_46660 = (0);
var state_46705__$1 = (function (){var statearr_46724 = state_46705;
(statearr_46724[(8)] = inst_46658);

(statearr_46724[(10)] = inst_46660);

(statearr_46724[(11)] = inst_46657);

(statearr_46724[(12)] = inst_46659);

return statearr_46724;
})();
var statearr_46725_46758 = state_46705__$1;
(statearr_46725_46758[(2)] = null);

(statearr_46725_46758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (3))){
var inst_46703 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46705__$1,inst_46703);
} else {
if((state_val_46706 === (12))){
var inst_46691 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
var statearr_46726_46759 = state_46705__$1;
(statearr_46726_46759[(2)] = inst_46691);

(statearr_46726_46759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (2))){
var state_46705__$1 = state_46705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46705__$1,(4),in$);
} else {
if((state_val_46706 === (23))){
var inst_46699 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
var statearr_46727_46760 = state_46705__$1;
(statearr_46727_46760[(2)] = inst_46699);

(statearr_46727_46760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (19))){
var inst_46686 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
var statearr_46728_46761 = state_46705__$1;
(statearr_46728_46761[(2)] = inst_46686);

(statearr_46728_46761[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (11))){
var inst_46657 = (state_46705[(11)]);
var inst_46671 = (state_46705[(7)]);
var inst_46671__$1 = cljs.core.seq.call(null,inst_46657);
var state_46705__$1 = (function (){var statearr_46729 = state_46705;
(statearr_46729[(7)] = inst_46671__$1);

return statearr_46729;
})();
if(inst_46671__$1){
var statearr_46730_46762 = state_46705__$1;
(statearr_46730_46762[(1)] = (14));

} else {
var statearr_46731_46763 = state_46705__$1;
(statearr_46731_46763[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (9))){
var inst_46693 = (state_46705[(2)]);
var inst_46694 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46705__$1 = (function (){var statearr_46732 = state_46705;
(statearr_46732[(15)] = inst_46693);

return statearr_46732;
})();
if(cljs.core.truth_(inst_46694)){
var statearr_46733_46764 = state_46705__$1;
(statearr_46733_46764[(1)] = (21));

} else {
var statearr_46734_46765 = state_46705__$1;
(statearr_46734_46765[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (5))){
var inst_46649 = cljs.core.async.close_BANG_.call(null,out);
var state_46705__$1 = state_46705;
var statearr_46735_46766 = state_46705__$1;
(statearr_46735_46766[(2)] = inst_46649);

(statearr_46735_46766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (14))){
var inst_46671 = (state_46705[(7)]);
var inst_46673 = cljs.core.chunked_seq_QMARK_.call(null,inst_46671);
var state_46705__$1 = state_46705;
if(inst_46673){
var statearr_46736_46767 = state_46705__$1;
(statearr_46736_46767[(1)] = (17));

} else {
var statearr_46737_46768 = state_46705__$1;
(statearr_46737_46768[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (16))){
var inst_46689 = (state_46705[(2)]);
var state_46705__$1 = state_46705;
var statearr_46738_46769 = state_46705__$1;
(statearr_46738_46769[(2)] = inst_46689);

(statearr_46738_46769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46706 === (10))){
var inst_46658 = (state_46705[(8)]);
var inst_46660 = (state_46705[(10)]);
var inst_46665 = cljs.core._nth.call(null,inst_46658,inst_46660);
var state_46705__$1 = state_46705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46705__$1,(13),out,inst_46665);
} else {
if((state_val_46706 === (18))){
var inst_46671 = (state_46705[(7)]);
var inst_46680 = cljs.core.first.call(null,inst_46671);
var state_46705__$1 = state_46705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46705__$1,(20),out,inst_46680);
} else {
if((state_val_46706 === (8))){
var inst_46660 = (state_46705[(10)]);
var inst_46659 = (state_46705[(12)]);
var inst_46662 = (inst_46660 < inst_46659);
var inst_46663 = inst_46662;
var state_46705__$1 = state_46705;
if(cljs.core.truth_(inst_46663)){
var statearr_46739_46770 = state_46705__$1;
(statearr_46739_46770[(1)] = (10));

} else {
var statearr_46740_46771 = state_46705__$1;
(statearr_46740_46771[(1)] = (11));

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
var statearr_46744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46744[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__);

(statearr_46744[(1)] = (1));

return statearr_46744;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____1 = (function (state_46705){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_46705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e46745){if((e46745 instanceof Object)){
var ex__27992__auto__ = e46745;
var statearr_46746_46772 = state_46705;
(statearr_46746_46772[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46773 = state_46705;
state_46705 = G__46773;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__ = function(state_46705){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____1.call(this,state_46705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_46747 = f__28010__auto__.call(null);
(statearr_46747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_46747;
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
var args46774 = [];
var len__27054__auto___46777 = arguments.length;
var i__27055__auto___46778 = (0);
while(true){
if((i__27055__auto___46778 < len__27054__auto___46777)){
args46774.push((arguments[i__27055__auto___46778]));

var G__46779 = (i__27055__auto___46778 + (1));
i__27055__auto___46778 = G__46779;
continue;
} else {
}
break;
}

var G__46776 = args46774.length;
switch (G__46776) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46774.length)].join('')));

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
var args46781 = [];
var len__27054__auto___46784 = arguments.length;
var i__27055__auto___46785 = (0);
while(true){
if((i__27055__auto___46785 < len__27054__auto___46784)){
args46781.push((arguments[i__27055__auto___46785]));

var G__46786 = (i__27055__auto___46785 + (1));
i__27055__auto___46785 = G__46786;
continue;
} else {
}
break;
}

var G__46783 = args46781.length;
switch (G__46783) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46781.length)].join('')));

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
var args46788 = [];
var len__27054__auto___46839 = arguments.length;
var i__27055__auto___46840 = (0);
while(true){
if((i__27055__auto___46840 < len__27054__auto___46839)){
args46788.push((arguments[i__27055__auto___46840]));

var G__46841 = (i__27055__auto___46840 + (1));
i__27055__auto___46840 = G__46841;
continue;
} else {
}
break;
}

var G__46790 = args46788.length;
switch (G__46790) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46788.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___46843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___46843,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___46843,out){
return (function (state_46814){
var state_val_46815 = (state_46814[(1)]);
if((state_val_46815 === (7))){
var inst_46809 = (state_46814[(2)]);
var state_46814__$1 = state_46814;
var statearr_46816_46844 = state_46814__$1;
(statearr_46816_46844[(2)] = inst_46809);

(statearr_46816_46844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (1))){
var inst_46791 = null;
var state_46814__$1 = (function (){var statearr_46817 = state_46814;
(statearr_46817[(7)] = inst_46791);

return statearr_46817;
})();
var statearr_46818_46845 = state_46814__$1;
(statearr_46818_46845[(2)] = null);

(statearr_46818_46845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (4))){
var inst_46794 = (state_46814[(8)]);
var inst_46794__$1 = (state_46814[(2)]);
var inst_46795 = (inst_46794__$1 == null);
var inst_46796 = cljs.core.not.call(null,inst_46795);
var state_46814__$1 = (function (){var statearr_46819 = state_46814;
(statearr_46819[(8)] = inst_46794__$1);

return statearr_46819;
})();
if(inst_46796){
var statearr_46820_46846 = state_46814__$1;
(statearr_46820_46846[(1)] = (5));

} else {
var statearr_46821_46847 = state_46814__$1;
(statearr_46821_46847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (6))){
var state_46814__$1 = state_46814;
var statearr_46822_46848 = state_46814__$1;
(statearr_46822_46848[(2)] = null);

(statearr_46822_46848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (3))){
var inst_46811 = (state_46814[(2)]);
var inst_46812 = cljs.core.async.close_BANG_.call(null,out);
var state_46814__$1 = (function (){var statearr_46823 = state_46814;
(statearr_46823[(9)] = inst_46811);

return statearr_46823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46814__$1,inst_46812);
} else {
if((state_val_46815 === (2))){
var state_46814__$1 = state_46814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46814__$1,(4),ch);
} else {
if((state_val_46815 === (11))){
var inst_46794 = (state_46814[(8)]);
var inst_46803 = (state_46814[(2)]);
var inst_46791 = inst_46794;
var state_46814__$1 = (function (){var statearr_46824 = state_46814;
(statearr_46824[(7)] = inst_46791);

(statearr_46824[(10)] = inst_46803);

return statearr_46824;
})();
var statearr_46825_46849 = state_46814__$1;
(statearr_46825_46849[(2)] = null);

(statearr_46825_46849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (9))){
var inst_46794 = (state_46814[(8)]);
var state_46814__$1 = state_46814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46814__$1,(11),out,inst_46794);
} else {
if((state_val_46815 === (5))){
var inst_46794 = (state_46814[(8)]);
var inst_46791 = (state_46814[(7)]);
var inst_46798 = cljs.core._EQ_.call(null,inst_46794,inst_46791);
var state_46814__$1 = state_46814;
if(inst_46798){
var statearr_46827_46850 = state_46814__$1;
(statearr_46827_46850[(1)] = (8));

} else {
var statearr_46828_46851 = state_46814__$1;
(statearr_46828_46851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (10))){
var inst_46806 = (state_46814[(2)]);
var state_46814__$1 = state_46814;
var statearr_46829_46852 = state_46814__$1;
(statearr_46829_46852[(2)] = inst_46806);

(statearr_46829_46852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (8))){
var inst_46791 = (state_46814[(7)]);
var tmp46826 = inst_46791;
var inst_46791__$1 = tmp46826;
var state_46814__$1 = (function (){var statearr_46830 = state_46814;
(statearr_46830[(7)] = inst_46791__$1);

return statearr_46830;
})();
var statearr_46831_46853 = state_46814__$1;
(statearr_46831_46853[(2)] = null);

(statearr_46831_46853[(1)] = (2));


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
});})(c__28009__auto___46843,out))
;
return ((function (switch__27988__auto__,c__28009__auto___46843,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_46835 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46835[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_46835[(1)] = (1));

return statearr_46835;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_46814){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_46814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e46836){if((e46836 instanceof Object)){
var ex__27992__auto__ = e46836;
var statearr_46837_46854 = state_46814;
(statearr_46837_46854[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46855 = state_46814;
state_46814 = G__46855;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_46814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_46814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___46843,out))
})();
var state__28011__auto__ = (function (){var statearr_46838 = f__28010__auto__.call(null);
(statearr_46838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___46843);

return statearr_46838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___46843,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args46856 = [];
var len__27054__auto___46926 = arguments.length;
var i__27055__auto___46927 = (0);
while(true){
if((i__27055__auto___46927 < len__27054__auto___46926)){
args46856.push((arguments[i__27055__auto___46927]));

var G__46928 = (i__27055__auto___46927 + (1));
i__27055__auto___46927 = G__46928;
continue;
} else {
}
break;
}

var G__46858 = args46856.length;
switch (G__46858) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46856.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___46930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___46930,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___46930,out){
return (function (state_46896){
var state_val_46897 = (state_46896[(1)]);
if((state_val_46897 === (7))){
var inst_46892 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46898_46931 = state_46896__$1;
(statearr_46898_46931[(2)] = inst_46892);

(statearr_46898_46931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (1))){
var inst_46859 = (new Array(n));
var inst_46860 = inst_46859;
var inst_46861 = (0);
var state_46896__$1 = (function (){var statearr_46899 = state_46896;
(statearr_46899[(7)] = inst_46860);

(statearr_46899[(8)] = inst_46861);

return statearr_46899;
})();
var statearr_46900_46932 = state_46896__$1;
(statearr_46900_46932[(2)] = null);

(statearr_46900_46932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (4))){
var inst_46864 = (state_46896[(9)]);
var inst_46864__$1 = (state_46896[(2)]);
var inst_46865 = (inst_46864__$1 == null);
var inst_46866 = cljs.core.not.call(null,inst_46865);
var state_46896__$1 = (function (){var statearr_46901 = state_46896;
(statearr_46901[(9)] = inst_46864__$1);

return statearr_46901;
})();
if(inst_46866){
var statearr_46902_46933 = state_46896__$1;
(statearr_46902_46933[(1)] = (5));

} else {
var statearr_46903_46934 = state_46896__$1;
(statearr_46903_46934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (15))){
var inst_46886 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46904_46935 = state_46896__$1;
(statearr_46904_46935[(2)] = inst_46886);

(statearr_46904_46935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (13))){
var state_46896__$1 = state_46896;
var statearr_46905_46936 = state_46896__$1;
(statearr_46905_46936[(2)] = null);

(statearr_46905_46936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (6))){
var inst_46861 = (state_46896[(8)]);
var inst_46882 = (inst_46861 > (0));
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46882)){
var statearr_46906_46937 = state_46896__$1;
(statearr_46906_46937[(1)] = (12));

} else {
var statearr_46907_46938 = state_46896__$1;
(statearr_46907_46938[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (3))){
var inst_46894 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46896__$1,inst_46894);
} else {
if((state_val_46897 === (12))){
var inst_46860 = (state_46896[(7)]);
var inst_46884 = cljs.core.vec.call(null,inst_46860);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46896__$1,(15),out,inst_46884);
} else {
if((state_val_46897 === (2))){
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46896__$1,(4),ch);
} else {
if((state_val_46897 === (11))){
var inst_46876 = (state_46896[(2)]);
var inst_46877 = (new Array(n));
var inst_46860 = inst_46877;
var inst_46861 = (0);
var state_46896__$1 = (function (){var statearr_46908 = state_46896;
(statearr_46908[(10)] = inst_46876);

(statearr_46908[(7)] = inst_46860);

(statearr_46908[(8)] = inst_46861);

return statearr_46908;
})();
var statearr_46909_46939 = state_46896__$1;
(statearr_46909_46939[(2)] = null);

(statearr_46909_46939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (9))){
var inst_46860 = (state_46896[(7)]);
var inst_46874 = cljs.core.vec.call(null,inst_46860);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46896__$1,(11),out,inst_46874);
} else {
if((state_val_46897 === (5))){
var inst_46864 = (state_46896[(9)]);
var inst_46869 = (state_46896[(11)]);
var inst_46860 = (state_46896[(7)]);
var inst_46861 = (state_46896[(8)]);
var inst_46868 = (inst_46860[inst_46861] = inst_46864);
var inst_46869__$1 = (inst_46861 + (1));
var inst_46870 = (inst_46869__$1 < n);
var state_46896__$1 = (function (){var statearr_46910 = state_46896;
(statearr_46910[(11)] = inst_46869__$1);

(statearr_46910[(12)] = inst_46868);

return statearr_46910;
})();
if(cljs.core.truth_(inst_46870)){
var statearr_46911_46940 = state_46896__$1;
(statearr_46911_46940[(1)] = (8));

} else {
var statearr_46912_46941 = state_46896__$1;
(statearr_46912_46941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (14))){
var inst_46889 = (state_46896[(2)]);
var inst_46890 = cljs.core.async.close_BANG_.call(null,out);
var state_46896__$1 = (function (){var statearr_46914 = state_46896;
(statearr_46914[(13)] = inst_46889);

return statearr_46914;
})();
var statearr_46915_46942 = state_46896__$1;
(statearr_46915_46942[(2)] = inst_46890);

(statearr_46915_46942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (10))){
var inst_46880 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46916_46943 = state_46896__$1;
(statearr_46916_46943[(2)] = inst_46880);

(statearr_46916_46943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (8))){
var inst_46869 = (state_46896[(11)]);
var inst_46860 = (state_46896[(7)]);
var tmp46913 = inst_46860;
var inst_46860__$1 = tmp46913;
var inst_46861 = inst_46869;
var state_46896__$1 = (function (){var statearr_46917 = state_46896;
(statearr_46917[(7)] = inst_46860__$1);

(statearr_46917[(8)] = inst_46861);

return statearr_46917;
})();
var statearr_46918_46944 = state_46896__$1;
(statearr_46918_46944[(2)] = null);

(statearr_46918_46944[(1)] = (2));


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
});})(c__28009__auto___46930,out))
;
return ((function (switch__27988__auto__,c__28009__auto___46930,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_46922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46922[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_46922[(1)] = (1));

return statearr_46922;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_46896){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_46896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e46923){if((e46923 instanceof Object)){
var ex__27992__auto__ = e46923;
var statearr_46924_46945 = state_46896;
(statearr_46924_46945[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46946 = state_46896;
state_46896 = G__46946;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_46896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_46896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___46930,out))
})();
var state__28011__auto__ = (function (){var statearr_46925 = f__28010__auto__.call(null);
(statearr_46925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___46930);

return statearr_46925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___46930,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args46947 = [];
var len__27054__auto___47021 = arguments.length;
var i__27055__auto___47022 = (0);
while(true){
if((i__27055__auto___47022 < len__27054__auto___47021)){
args46947.push((arguments[i__27055__auto___47022]));

var G__47023 = (i__27055__auto___47022 + (1));
i__27055__auto___47022 = G__47023;
continue;
} else {
}
break;
}

var G__46949 = args46947.length;
switch (G__46949) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46947.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___47025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___47025,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___47025,out){
return (function (state_46991){
var state_val_46992 = (state_46991[(1)]);
if((state_val_46992 === (7))){
var inst_46987 = (state_46991[(2)]);
var state_46991__$1 = state_46991;
var statearr_46993_47026 = state_46991__$1;
(statearr_46993_47026[(2)] = inst_46987);

(statearr_46993_47026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (1))){
var inst_46950 = [];
var inst_46951 = inst_46950;
var inst_46952 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46991__$1 = (function (){var statearr_46994 = state_46991;
(statearr_46994[(7)] = inst_46951);

(statearr_46994[(8)] = inst_46952);

return statearr_46994;
})();
var statearr_46995_47027 = state_46991__$1;
(statearr_46995_47027[(2)] = null);

(statearr_46995_47027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (4))){
var inst_46955 = (state_46991[(9)]);
var inst_46955__$1 = (state_46991[(2)]);
var inst_46956 = (inst_46955__$1 == null);
var inst_46957 = cljs.core.not.call(null,inst_46956);
var state_46991__$1 = (function (){var statearr_46996 = state_46991;
(statearr_46996[(9)] = inst_46955__$1);

return statearr_46996;
})();
if(inst_46957){
var statearr_46997_47028 = state_46991__$1;
(statearr_46997_47028[(1)] = (5));

} else {
var statearr_46998_47029 = state_46991__$1;
(statearr_46998_47029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (15))){
var inst_46981 = (state_46991[(2)]);
var state_46991__$1 = state_46991;
var statearr_46999_47030 = state_46991__$1;
(statearr_46999_47030[(2)] = inst_46981);

(statearr_46999_47030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (13))){
var state_46991__$1 = state_46991;
var statearr_47000_47031 = state_46991__$1;
(statearr_47000_47031[(2)] = null);

(statearr_47000_47031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (6))){
var inst_46951 = (state_46991[(7)]);
var inst_46976 = inst_46951.length;
var inst_46977 = (inst_46976 > (0));
var state_46991__$1 = state_46991;
if(cljs.core.truth_(inst_46977)){
var statearr_47001_47032 = state_46991__$1;
(statearr_47001_47032[(1)] = (12));

} else {
var statearr_47002_47033 = state_46991__$1;
(statearr_47002_47033[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (3))){
var inst_46989 = (state_46991[(2)]);
var state_46991__$1 = state_46991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46991__$1,inst_46989);
} else {
if((state_val_46992 === (12))){
var inst_46951 = (state_46991[(7)]);
var inst_46979 = cljs.core.vec.call(null,inst_46951);
var state_46991__$1 = state_46991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46991__$1,(15),out,inst_46979);
} else {
if((state_val_46992 === (2))){
var state_46991__$1 = state_46991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46991__$1,(4),ch);
} else {
if((state_val_46992 === (11))){
var inst_46955 = (state_46991[(9)]);
var inst_46959 = (state_46991[(10)]);
var inst_46969 = (state_46991[(2)]);
var inst_46970 = [];
var inst_46971 = inst_46970.push(inst_46955);
var inst_46951 = inst_46970;
var inst_46952 = inst_46959;
var state_46991__$1 = (function (){var statearr_47003 = state_46991;
(statearr_47003[(7)] = inst_46951);

(statearr_47003[(11)] = inst_46971);

(statearr_47003[(12)] = inst_46969);

(statearr_47003[(8)] = inst_46952);

return statearr_47003;
})();
var statearr_47004_47034 = state_46991__$1;
(statearr_47004_47034[(2)] = null);

(statearr_47004_47034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (9))){
var inst_46951 = (state_46991[(7)]);
var inst_46967 = cljs.core.vec.call(null,inst_46951);
var state_46991__$1 = state_46991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46991__$1,(11),out,inst_46967);
} else {
if((state_val_46992 === (5))){
var inst_46955 = (state_46991[(9)]);
var inst_46952 = (state_46991[(8)]);
var inst_46959 = (state_46991[(10)]);
var inst_46959__$1 = f.call(null,inst_46955);
var inst_46960 = cljs.core._EQ_.call(null,inst_46959__$1,inst_46952);
var inst_46961 = cljs.core.keyword_identical_QMARK_.call(null,inst_46952,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46962 = (inst_46960) || (inst_46961);
var state_46991__$1 = (function (){var statearr_47005 = state_46991;
(statearr_47005[(10)] = inst_46959__$1);

return statearr_47005;
})();
if(cljs.core.truth_(inst_46962)){
var statearr_47006_47035 = state_46991__$1;
(statearr_47006_47035[(1)] = (8));

} else {
var statearr_47007_47036 = state_46991__$1;
(statearr_47007_47036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (14))){
var inst_46984 = (state_46991[(2)]);
var inst_46985 = cljs.core.async.close_BANG_.call(null,out);
var state_46991__$1 = (function (){var statearr_47009 = state_46991;
(statearr_47009[(13)] = inst_46984);

return statearr_47009;
})();
var statearr_47010_47037 = state_46991__$1;
(statearr_47010_47037[(2)] = inst_46985);

(statearr_47010_47037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (10))){
var inst_46974 = (state_46991[(2)]);
var state_46991__$1 = state_46991;
var statearr_47011_47038 = state_46991__$1;
(statearr_47011_47038[(2)] = inst_46974);

(statearr_47011_47038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46992 === (8))){
var inst_46951 = (state_46991[(7)]);
var inst_46955 = (state_46991[(9)]);
var inst_46959 = (state_46991[(10)]);
var inst_46964 = inst_46951.push(inst_46955);
var tmp47008 = inst_46951;
var inst_46951__$1 = tmp47008;
var inst_46952 = inst_46959;
var state_46991__$1 = (function (){var statearr_47012 = state_46991;
(statearr_47012[(7)] = inst_46951__$1);

(statearr_47012[(14)] = inst_46964);

(statearr_47012[(8)] = inst_46952);

return statearr_47012;
})();
var statearr_47013_47039 = state_46991__$1;
(statearr_47013_47039[(2)] = null);

(statearr_47013_47039[(1)] = (2));


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
});})(c__28009__auto___47025,out))
;
return ((function (switch__27988__auto__,c__28009__auto___47025,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_47017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47017[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_47017[(1)] = (1));

return statearr_47017;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_46991){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_46991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e47018){if((e47018 instanceof Object)){
var ex__27992__auto__ = e47018;
var statearr_47019_47040 = state_46991;
(statearr_47019_47040[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47041 = state_46991;
state_46991 = G__47041;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_46991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_46991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___47025,out))
})();
var state__28011__auto__ = (function (){var statearr_47020 = f__28010__auto__.call(null);
(statearr_47020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___47025);

return statearr_47020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___47025,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1500064937002