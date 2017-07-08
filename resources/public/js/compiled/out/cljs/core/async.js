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
var args29912 = [];
var len__27054__auto___29918 = arguments.length;
var i__27055__auto___29919 = (0);
while(true){
if((i__27055__auto___29919 < len__27054__auto___29918)){
args29912.push((arguments[i__27055__auto___29919]));

var G__29920 = (i__27055__auto___29919 + (1));
i__27055__auto___29919 = G__29920;
continue;
} else {
}
break;
}

var G__29914 = args29912.length;
switch (G__29914) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29912.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29915 = (function (f,blockable,meta29916){
this.f = f;
this.blockable = blockable;
this.meta29916 = meta29916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29917,meta29916__$1){
var self__ = this;
var _29917__$1 = this;
return (new cljs.core.async.t_cljs$core$async29915(self__.f,self__.blockable,meta29916__$1));
});

cljs.core.async.t_cljs$core$async29915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29917){
var self__ = this;
var _29917__$1 = this;
return self__.meta29916;
});

cljs.core.async.t_cljs$core$async29915.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29915.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29916","meta29916",-1593832464,null)], null);
});

cljs.core.async.t_cljs$core$async29915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29915";

cljs.core.async.t_cljs$core$async29915.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29915");
});

cljs.core.async.__GT_t_cljs$core$async29915 = (function cljs$core$async$__GT_t_cljs$core$async29915(f__$1,blockable__$1,meta29916){
return (new cljs.core.async.t_cljs$core$async29915(f__$1,blockable__$1,meta29916));
});

}

return (new cljs.core.async.t_cljs$core$async29915(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args29924 = [];
var len__27054__auto___29927 = arguments.length;
var i__27055__auto___29928 = (0);
while(true){
if((i__27055__auto___29928 < len__27054__auto___29927)){
args29924.push((arguments[i__27055__auto___29928]));

var G__29929 = (i__27055__auto___29928 + (1));
i__27055__auto___29928 = G__29929;
continue;
} else {
}
break;
}

var G__29926 = args29924.length;
switch (G__29926) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29924.length)].join('')));

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
var args29931 = [];
var len__27054__auto___29934 = arguments.length;
var i__27055__auto___29935 = (0);
while(true){
if((i__27055__auto___29935 < len__27054__auto___29934)){
args29931.push((arguments[i__27055__auto___29935]));

var G__29936 = (i__27055__auto___29935 + (1));
i__27055__auto___29935 = G__29936;
continue;
} else {
}
break;
}

var G__29933 = args29931.length;
switch (G__29933) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29931.length)].join('')));

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
var args29938 = [];
var len__27054__auto___29941 = arguments.length;
var i__27055__auto___29942 = (0);
while(true){
if((i__27055__auto___29942 < len__27054__auto___29941)){
args29938.push((arguments[i__27055__auto___29942]));

var G__29943 = (i__27055__auto___29942 + (1));
i__27055__auto___29942 = G__29943;
continue;
} else {
}
break;
}

var G__29940 = args29938.length;
switch (G__29940) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29938.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29945 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29945);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29945,ret){
return (function (){
return fn1.call(null,val_29945);
});})(val_29945,ret))
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
var args29946 = [];
var len__27054__auto___29949 = arguments.length;
var i__27055__auto___29950 = (0);
while(true){
if((i__27055__auto___29950 < len__27054__auto___29949)){
args29946.push((arguments[i__27055__auto___29950]));

var G__29951 = (i__27055__auto___29950 + (1));
i__27055__auto___29950 = G__29951;
continue;
} else {
}
break;
}

var G__29948 = args29946.length;
switch (G__29948) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29946.length)].join('')));

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
var n__26894__auto___29953 = n;
var x_29954 = (0);
while(true){
if((x_29954 < n__26894__auto___29953)){
(a[x_29954] = (0));

var G__29955 = (x_29954 + (1));
x_29954 = G__29955;
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

var G__29956 = (i + (1));
i = G__29956;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29960 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29960 = (function (alt_flag,flag,meta29961){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29961 = meta29961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29962,meta29961__$1){
var self__ = this;
var _29962__$1 = this;
return (new cljs.core.async.t_cljs$core$async29960(self__.alt_flag,self__.flag,meta29961__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29962){
var self__ = this;
var _29962__$1 = this;
return self__.meta29961;
});})(flag))
;

cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29960.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29961","meta29961",-1616183060,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29960.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29960";

cljs.core.async.t_cljs$core$async29960.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29960");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29960 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29960(alt_flag__$1,flag__$1,meta29961){
return (new cljs.core.async.t_cljs$core$async29960(alt_flag__$1,flag__$1,meta29961));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29960(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29966 = (function (alt_handler,flag,cb,meta29967){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29967 = meta29967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29968,meta29967__$1){
var self__ = this;
var _29968__$1 = this;
return (new cljs.core.async.t_cljs$core$async29966(self__.alt_handler,self__.flag,self__.cb,meta29967__$1));
});

cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29968){
var self__ = this;
var _29968__$1 = this;
return self__.meta29967;
});

cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29966.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29967","meta29967",-1752258090,null)], null);
});

cljs.core.async.t_cljs$core$async29966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29966";

cljs.core.async.t_cljs$core$async29966.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29966");
});

cljs.core.async.__GT_t_cljs$core$async29966 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29966(alt_handler__$1,flag__$1,cb__$1,meta29967){
return (new cljs.core.async.t_cljs$core$async29966(alt_handler__$1,flag__$1,cb__$1,meta29967));
});

}

return (new cljs.core.async.t_cljs$core$async29966(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29969_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29969_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29970_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29970_SHARP_,port], null));
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
var G__29971 = (i + (1));
i = G__29971;
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
var len__27054__auto___29977 = arguments.length;
var i__27055__auto___29978 = (0);
while(true){
if((i__27055__auto___29978 < len__27054__auto___29977)){
args__27061__auto__.push((arguments[i__27055__auto___29978]));

var G__29979 = (i__27055__auto___29978 + (1));
i__27055__auto___29978 = G__29979;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29974){
var map__29975 = p__29974;
var map__29975__$1 = ((((!((map__29975 == null)))?((((map__29975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29975):map__29975);
var opts = map__29975__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29972){
var G__29973 = cljs.core.first.call(null,seq29972);
var seq29972__$1 = cljs.core.next.call(null,seq29972);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29973,seq29972__$1);
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
var args29980 = [];
var len__27054__auto___30030 = arguments.length;
var i__27055__auto___30031 = (0);
while(true){
if((i__27055__auto___30031 < len__27054__auto___30030)){
args29980.push((arguments[i__27055__auto___30031]));

var G__30032 = (i__27055__auto___30031 + (1));
i__27055__auto___30031 = G__30032;
continue;
} else {
}
break;
}

var G__29982 = args29980.length;
switch (G__29982) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29980.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28171__auto___30034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___30034){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___30034){
return (function (state_30006){
var state_val_30007 = (state_30006[(1)]);
if((state_val_30007 === (7))){
var inst_30002 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
var statearr_30008_30035 = state_30006__$1;
(statearr_30008_30035[(2)] = inst_30002);

(statearr_30008_30035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (1))){
var state_30006__$1 = state_30006;
var statearr_30009_30036 = state_30006__$1;
(statearr_30009_30036[(2)] = null);

(statearr_30009_30036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (4))){
var inst_29985 = (state_30006[(7)]);
var inst_29985__$1 = (state_30006[(2)]);
var inst_29986 = (inst_29985__$1 == null);
var state_30006__$1 = (function (){var statearr_30010 = state_30006;
(statearr_30010[(7)] = inst_29985__$1);

return statearr_30010;
})();
if(cljs.core.truth_(inst_29986)){
var statearr_30011_30037 = state_30006__$1;
(statearr_30011_30037[(1)] = (5));

} else {
var statearr_30012_30038 = state_30006__$1;
(statearr_30012_30038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (13))){
var state_30006__$1 = state_30006;
var statearr_30013_30039 = state_30006__$1;
(statearr_30013_30039[(2)] = null);

(statearr_30013_30039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (6))){
var inst_29985 = (state_30006[(7)]);
var state_30006__$1 = state_30006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30006__$1,(11),to,inst_29985);
} else {
if((state_val_30007 === (3))){
var inst_30004 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30006__$1,inst_30004);
} else {
if((state_val_30007 === (12))){
var state_30006__$1 = state_30006;
var statearr_30014_30040 = state_30006__$1;
(statearr_30014_30040[(2)] = null);

(statearr_30014_30040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (2))){
var state_30006__$1 = state_30006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30006__$1,(4),from);
} else {
if((state_val_30007 === (11))){
var inst_29995 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
if(cljs.core.truth_(inst_29995)){
var statearr_30015_30041 = state_30006__$1;
(statearr_30015_30041[(1)] = (12));

} else {
var statearr_30016_30042 = state_30006__$1;
(statearr_30016_30042[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (9))){
var state_30006__$1 = state_30006;
var statearr_30017_30043 = state_30006__$1;
(statearr_30017_30043[(2)] = null);

(statearr_30017_30043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (5))){
var state_30006__$1 = state_30006;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30018_30044 = state_30006__$1;
(statearr_30018_30044[(1)] = (8));

} else {
var statearr_30019_30045 = state_30006__$1;
(statearr_30019_30045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (14))){
var inst_30000 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
var statearr_30020_30046 = state_30006__$1;
(statearr_30020_30046[(2)] = inst_30000);

(statearr_30020_30046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (10))){
var inst_29992 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
var statearr_30021_30047 = state_30006__$1;
(statearr_30021_30047[(2)] = inst_29992);

(statearr_30021_30047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (8))){
var inst_29989 = cljs.core.async.close_BANG_.call(null,to);
var state_30006__$1 = state_30006;
var statearr_30022_30048 = state_30006__$1;
(statearr_30022_30048[(2)] = inst_29989);

(statearr_30022_30048[(1)] = (10));


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
});})(c__28171__auto___30034))
;
return ((function (switch__28150__auto__,c__28171__auto___30034){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_30026 = [null,null,null,null,null,null,null,null];
(statearr_30026[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_30026[(1)] = (1));

return statearr_30026;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_30006){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30027){if((e30027 instanceof Object)){
var ex__28154__auto__ = e30027;
var statearr_30028_30049 = state_30006;
(statearr_30028_30049[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30050 = state_30006;
state_30006 = G__30050;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_30006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_30006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___30034))
})();
var state__28173__auto__ = (function (){var statearr_30029 = f__28172__auto__.call(null);
(statearr_30029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___30034);

return statearr_30029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___30034))
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
return (function (p__30238){
var vec__30239 = p__30238;
var v = cljs.core.nth.call(null,vec__30239,(0),null);
var p = cljs.core.nth.call(null,vec__30239,(1),null);
var job = vec__30239;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28171__auto___30425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___30425,res,vec__30239,v,p,job,jobs,results){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___30425,res,vec__30239,v,p,job,jobs,results){
return (function (state_30246){
var state_val_30247 = (state_30246[(1)]);
if((state_val_30247 === (1))){
var state_30246__$1 = state_30246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30246__$1,(2),res,v);
} else {
if((state_val_30247 === (2))){
var inst_30243 = (state_30246[(2)]);
var inst_30244 = cljs.core.async.close_BANG_.call(null,res);
var state_30246__$1 = (function (){var statearr_30248 = state_30246;
(statearr_30248[(7)] = inst_30243);

return statearr_30248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30246__$1,inst_30244);
} else {
return null;
}
}
});})(c__28171__auto___30425,res,vec__30239,v,p,job,jobs,results))
;
return ((function (switch__28150__auto__,c__28171__auto___30425,res,vec__30239,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_30252 = [null,null,null,null,null,null,null,null];
(statearr_30252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_30252[(1)] = (1));

return statearr_30252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_30246){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30253){if((e30253 instanceof Object)){
var ex__28154__auto__ = e30253;
var statearr_30254_30426 = state_30246;
(statearr_30254_30426[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30427 = state_30246;
state_30246 = G__30427;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_30246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_30246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___30425,res,vec__30239,v,p,job,jobs,results))
})();
var state__28173__auto__ = (function (){var statearr_30255 = f__28172__auto__.call(null);
(statearr_30255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___30425);

return statearr_30255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___30425,res,vec__30239,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30256){
var vec__30257 = p__30256;
var v = cljs.core.nth.call(null,vec__30257,(0),null);
var p = cljs.core.nth.call(null,vec__30257,(1),null);
var job = vec__30257;
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
var n__26894__auto___30428 = n;
var __30429 = (0);
while(true){
if((__30429 < n__26894__auto___30428)){
var G__30260_30430 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30260_30430) {
case "compute":
var c__28171__auto___30432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30429,c__28171__auto___30432,G__30260_30430,n__26894__auto___30428,jobs,results,process,async){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (__30429,c__28171__auto___30432,G__30260_30430,n__26894__auto___30428,jobs,results,process,async){
return (function (state_30273){
var state_val_30274 = (state_30273[(1)]);
if((state_val_30274 === (1))){
var state_30273__$1 = state_30273;
var statearr_30275_30433 = state_30273__$1;
(statearr_30275_30433[(2)] = null);

(statearr_30275_30433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (2))){
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30273__$1,(4),jobs);
} else {
if((state_val_30274 === (3))){
var inst_30271 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30273__$1,inst_30271);
} else {
if((state_val_30274 === (4))){
var inst_30263 = (state_30273[(2)]);
var inst_30264 = process.call(null,inst_30263);
var state_30273__$1 = state_30273;
if(cljs.core.truth_(inst_30264)){
var statearr_30276_30434 = state_30273__$1;
(statearr_30276_30434[(1)] = (5));

} else {
var statearr_30277_30435 = state_30273__$1;
(statearr_30277_30435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (5))){
var state_30273__$1 = state_30273;
var statearr_30278_30436 = state_30273__$1;
(statearr_30278_30436[(2)] = null);

(statearr_30278_30436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (6))){
var state_30273__$1 = state_30273;
var statearr_30279_30437 = state_30273__$1;
(statearr_30279_30437[(2)] = null);

(statearr_30279_30437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (7))){
var inst_30269 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
var statearr_30280_30438 = state_30273__$1;
(statearr_30280_30438[(2)] = inst_30269);

(statearr_30280_30438[(1)] = (3));


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
});})(__30429,c__28171__auto___30432,G__30260_30430,n__26894__auto___30428,jobs,results,process,async))
;
return ((function (__30429,switch__28150__auto__,c__28171__auto___30432,G__30260_30430,n__26894__auto___30428,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_30284 = [null,null,null,null,null,null,null];
(statearr_30284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_30284[(1)] = (1));

return statearr_30284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_30273){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30285){if((e30285 instanceof Object)){
var ex__28154__auto__ = e30285;
var statearr_30286_30439 = state_30273;
(statearr_30286_30439[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30440 = state_30273;
state_30273 = G__30440;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_30273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_30273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(__30429,switch__28150__auto__,c__28171__auto___30432,G__30260_30430,n__26894__auto___30428,jobs,results,process,async))
})();
var state__28173__auto__ = (function (){var statearr_30287 = f__28172__auto__.call(null);
(statearr_30287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___30432);

return statearr_30287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(__30429,c__28171__auto___30432,G__30260_30430,n__26894__auto___30428,jobs,results,process,async))
);


break;
case "async":
var c__28171__auto___30441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30429,c__28171__auto___30441,G__30260_30430,n__26894__auto___30428,jobs,results,process,async){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (__30429,c__28171__auto___30441,G__30260_30430,n__26894__auto___30428,jobs,results,process,async){
return (function (state_30300){
var state_val_30301 = (state_30300[(1)]);
if((state_val_30301 === (1))){
var state_30300__$1 = state_30300;
var statearr_30302_30442 = state_30300__$1;
(statearr_30302_30442[(2)] = null);

(statearr_30302_30442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (2))){
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30300__$1,(4),jobs);
} else {
if((state_val_30301 === (3))){
var inst_30298 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30300__$1,inst_30298);
} else {
if((state_val_30301 === (4))){
var inst_30290 = (state_30300[(2)]);
var inst_30291 = async.call(null,inst_30290);
var state_30300__$1 = state_30300;
if(cljs.core.truth_(inst_30291)){
var statearr_30303_30443 = state_30300__$1;
(statearr_30303_30443[(1)] = (5));

} else {
var statearr_30304_30444 = state_30300__$1;
(statearr_30304_30444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (5))){
var state_30300__$1 = state_30300;
var statearr_30305_30445 = state_30300__$1;
(statearr_30305_30445[(2)] = null);

(statearr_30305_30445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (6))){
var state_30300__$1 = state_30300;
var statearr_30306_30446 = state_30300__$1;
(statearr_30306_30446[(2)] = null);

(statearr_30306_30446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (7))){
var inst_30296 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30307_30447 = state_30300__$1;
(statearr_30307_30447[(2)] = inst_30296);

(statearr_30307_30447[(1)] = (3));


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
});})(__30429,c__28171__auto___30441,G__30260_30430,n__26894__auto___30428,jobs,results,process,async))
;
return ((function (__30429,switch__28150__auto__,c__28171__auto___30441,G__30260_30430,n__26894__auto___30428,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_30311 = [null,null,null,null,null,null,null];
(statearr_30311[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_30311[(1)] = (1));

return statearr_30311;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_30300){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30312){if((e30312 instanceof Object)){
var ex__28154__auto__ = e30312;
var statearr_30313_30448 = state_30300;
(statearr_30313_30448[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30449 = state_30300;
state_30300 = G__30449;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_30300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_30300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(__30429,switch__28150__auto__,c__28171__auto___30441,G__30260_30430,n__26894__auto___30428,jobs,results,process,async))
})();
var state__28173__auto__ = (function (){var statearr_30314 = f__28172__auto__.call(null);
(statearr_30314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___30441);

return statearr_30314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(__30429,c__28171__auto___30441,G__30260_30430,n__26894__auto___30428,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30450 = (__30429 + (1));
__30429 = G__30450;
continue;
} else {
}
break;
}

var c__28171__auto___30451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___30451,jobs,results,process,async){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___30451,jobs,results,process,async){
return (function (state_30336){
var state_val_30337 = (state_30336[(1)]);
if((state_val_30337 === (1))){
var state_30336__$1 = state_30336;
var statearr_30338_30452 = state_30336__$1;
(statearr_30338_30452[(2)] = null);

(statearr_30338_30452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (2))){
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30336__$1,(4),from);
} else {
if((state_val_30337 === (3))){
var inst_30334 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30336__$1,inst_30334);
} else {
if((state_val_30337 === (4))){
var inst_30317 = (state_30336[(7)]);
var inst_30317__$1 = (state_30336[(2)]);
var inst_30318 = (inst_30317__$1 == null);
var state_30336__$1 = (function (){var statearr_30339 = state_30336;
(statearr_30339[(7)] = inst_30317__$1);

return statearr_30339;
})();
if(cljs.core.truth_(inst_30318)){
var statearr_30340_30453 = state_30336__$1;
(statearr_30340_30453[(1)] = (5));

} else {
var statearr_30341_30454 = state_30336__$1;
(statearr_30341_30454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (5))){
var inst_30320 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30336__$1 = state_30336;
var statearr_30342_30455 = state_30336__$1;
(statearr_30342_30455[(2)] = inst_30320);

(statearr_30342_30455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (6))){
var inst_30322 = (state_30336[(8)]);
var inst_30317 = (state_30336[(7)]);
var inst_30322__$1 = cljs.core.async.chan.call(null,(1));
var inst_30323 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30324 = [inst_30317,inst_30322__$1];
var inst_30325 = (new cljs.core.PersistentVector(null,2,(5),inst_30323,inst_30324,null));
var state_30336__$1 = (function (){var statearr_30343 = state_30336;
(statearr_30343[(8)] = inst_30322__$1);

return statearr_30343;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30336__$1,(8),jobs,inst_30325);
} else {
if((state_val_30337 === (7))){
var inst_30332 = (state_30336[(2)]);
var state_30336__$1 = state_30336;
var statearr_30344_30456 = state_30336__$1;
(statearr_30344_30456[(2)] = inst_30332);

(statearr_30344_30456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (8))){
var inst_30322 = (state_30336[(8)]);
var inst_30327 = (state_30336[(2)]);
var state_30336__$1 = (function (){var statearr_30345 = state_30336;
(statearr_30345[(9)] = inst_30327);

return statearr_30345;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30336__$1,(9),results,inst_30322);
} else {
if((state_val_30337 === (9))){
var inst_30329 = (state_30336[(2)]);
var state_30336__$1 = (function (){var statearr_30346 = state_30336;
(statearr_30346[(10)] = inst_30329);

return statearr_30346;
})();
var statearr_30347_30457 = state_30336__$1;
(statearr_30347_30457[(2)] = null);

(statearr_30347_30457[(1)] = (2));


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
});})(c__28171__auto___30451,jobs,results,process,async))
;
return ((function (switch__28150__auto__,c__28171__auto___30451,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_30351 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_30351[(1)] = (1));

return statearr_30351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_30336){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30352){if((e30352 instanceof Object)){
var ex__28154__auto__ = e30352;
var statearr_30353_30458 = state_30336;
(statearr_30353_30458[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30459 = state_30336;
state_30336 = G__30459;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_30336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_30336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___30451,jobs,results,process,async))
})();
var state__28173__auto__ = (function (){var statearr_30354 = f__28172__auto__.call(null);
(statearr_30354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___30451);

return statearr_30354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___30451,jobs,results,process,async))
);


var c__28171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto__,jobs,results,process,async){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto__,jobs,results,process,async){
return (function (state_30392){
var state_val_30393 = (state_30392[(1)]);
if((state_val_30393 === (7))){
var inst_30388 = (state_30392[(2)]);
var state_30392__$1 = state_30392;
var statearr_30394_30460 = state_30392__$1;
(statearr_30394_30460[(2)] = inst_30388);

(statearr_30394_30460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (20))){
var state_30392__$1 = state_30392;
var statearr_30395_30461 = state_30392__$1;
(statearr_30395_30461[(2)] = null);

(statearr_30395_30461[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (1))){
var state_30392__$1 = state_30392;
var statearr_30396_30462 = state_30392__$1;
(statearr_30396_30462[(2)] = null);

(statearr_30396_30462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (4))){
var inst_30357 = (state_30392[(7)]);
var inst_30357__$1 = (state_30392[(2)]);
var inst_30358 = (inst_30357__$1 == null);
var state_30392__$1 = (function (){var statearr_30397 = state_30392;
(statearr_30397[(7)] = inst_30357__$1);

return statearr_30397;
})();
if(cljs.core.truth_(inst_30358)){
var statearr_30398_30463 = state_30392__$1;
(statearr_30398_30463[(1)] = (5));

} else {
var statearr_30399_30464 = state_30392__$1;
(statearr_30399_30464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (15))){
var inst_30370 = (state_30392[(8)]);
var state_30392__$1 = state_30392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30392__$1,(18),to,inst_30370);
} else {
if((state_val_30393 === (21))){
var inst_30383 = (state_30392[(2)]);
var state_30392__$1 = state_30392;
var statearr_30400_30465 = state_30392__$1;
(statearr_30400_30465[(2)] = inst_30383);

(statearr_30400_30465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (13))){
var inst_30385 = (state_30392[(2)]);
var state_30392__$1 = (function (){var statearr_30401 = state_30392;
(statearr_30401[(9)] = inst_30385);

return statearr_30401;
})();
var statearr_30402_30466 = state_30392__$1;
(statearr_30402_30466[(2)] = null);

(statearr_30402_30466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (6))){
var inst_30357 = (state_30392[(7)]);
var state_30392__$1 = state_30392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30392__$1,(11),inst_30357);
} else {
if((state_val_30393 === (17))){
var inst_30378 = (state_30392[(2)]);
var state_30392__$1 = state_30392;
if(cljs.core.truth_(inst_30378)){
var statearr_30403_30467 = state_30392__$1;
(statearr_30403_30467[(1)] = (19));

} else {
var statearr_30404_30468 = state_30392__$1;
(statearr_30404_30468[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (3))){
var inst_30390 = (state_30392[(2)]);
var state_30392__$1 = state_30392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30392__$1,inst_30390);
} else {
if((state_val_30393 === (12))){
var inst_30367 = (state_30392[(10)]);
var state_30392__$1 = state_30392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30392__$1,(14),inst_30367);
} else {
if((state_val_30393 === (2))){
var state_30392__$1 = state_30392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30392__$1,(4),results);
} else {
if((state_val_30393 === (19))){
var state_30392__$1 = state_30392;
var statearr_30405_30469 = state_30392__$1;
(statearr_30405_30469[(2)] = null);

(statearr_30405_30469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (11))){
var inst_30367 = (state_30392[(2)]);
var state_30392__$1 = (function (){var statearr_30406 = state_30392;
(statearr_30406[(10)] = inst_30367);

return statearr_30406;
})();
var statearr_30407_30470 = state_30392__$1;
(statearr_30407_30470[(2)] = null);

(statearr_30407_30470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (9))){
var state_30392__$1 = state_30392;
var statearr_30408_30471 = state_30392__$1;
(statearr_30408_30471[(2)] = null);

(statearr_30408_30471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (5))){
var state_30392__$1 = state_30392;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30409_30472 = state_30392__$1;
(statearr_30409_30472[(1)] = (8));

} else {
var statearr_30410_30473 = state_30392__$1;
(statearr_30410_30473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (14))){
var inst_30370 = (state_30392[(8)]);
var inst_30372 = (state_30392[(11)]);
var inst_30370__$1 = (state_30392[(2)]);
var inst_30371 = (inst_30370__$1 == null);
var inst_30372__$1 = cljs.core.not.call(null,inst_30371);
var state_30392__$1 = (function (){var statearr_30411 = state_30392;
(statearr_30411[(8)] = inst_30370__$1);

(statearr_30411[(11)] = inst_30372__$1);

return statearr_30411;
})();
if(inst_30372__$1){
var statearr_30412_30474 = state_30392__$1;
(statearr_30412_30474[(1)] = (15));

} else {
var statearr_30413_30475 = state_30392__$1;
(statearr_30413_30475[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (16))){
var inst_30372 = (state_30392[(11)]);
var state_30392__$1 = state_30392;
var statearr_30414_30476 = state_30392__$1;
(statearr_30414_30476[(2)] = inst_30372);

(statearr_30414_30476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (10))){
var inst_30364 = (state_30392[(2)]);
var state_30392__$1 = state_30392;
var statearr_30415_30477 = state_30392__$1;
(statearr_30415_30477[(2)] = inst_30364);

(statearr_30415_30477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (18))){
var inst_30375 = (state_30392[(2)]);
var state_30392__$1 = state_30392;
var statearr_30416_30478 = state_30392__$1;
(statearr_30416_30478[(2)] = inst_30375);

(statearr_30416_30478[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30393 === (8))){
var inst_30361 = cljs.core.async.close_BANG_.call(null,to);
var state_30392__$1 = state_30392;
var statearr_30417_30479 = state_30392__$1;
(statearr_30417_30479[(2)] = inst_30361);

(statearr_30417_30479[(1)] = (10));


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
});})(c__28171__auto__,jobs,results,process,async))
;
return ((function (switch__28150__auto__,c__28171__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_30421 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_30421[(1)] = (1));

return statearr_30421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_30392){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30422){if((e30422 instanceof Object)){
var ex__28154__auto__ = e30422;
var statearr_30423_30480 = state_30392;
(statearr_30423_30480[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30481 = state_30392;
state_30392 = G__30481;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_30392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_30392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__,jobs,results,process,async))
})();
var state__28173__auto__ = (function (){var statearr_30424 = f__28172__auto__.call(null);
(statearr_30424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_30424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto__,jobs,results,process,async))
);

return c__28171__auto__;
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
var args30482 = [];
var len__27054__auto___30485 = arguments.length;
var i__27055__auto___30486 = (0);
while(true){
if((i__27055__auto___30486 < len__27054__auto___30485)){
args30482.push((arguments[i__27055__auto___30486]));

var G__30487 = (i__27055__auto___30486 + (1));
i__27055__auto___30486 = G__30487;
continue;
} else {
}
break;
}

var G__30484 = args30482.length;
switch (G__30484) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30482.length)].join('')));

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
var args30489 = [];
var len__27054__auto___30492 = arguments.length;
var i__27055__auto___30493 = (0);
while(true){
if((i__27055__auto___30493 < len__27054__auto___30492)){
args30489.push((arguments[i__27055__auto___30493]));

var G__30494 = (i__27055__auto___30493 + (1));
i__27055__auto___30493 = G__30494;
continue;
} else {
}
break;
}

var G__30491 = args30489.length;
switch (G__30491) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30489.length)].join('')));

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
var args30496 = [];
var len__27054__auto___30549 = arguments.length;
var i__27055__auto___30550 = (0);
while(true){
if((i__27055__auto___30550 < len__27054__auto___30549)){
args30496.push((arguments[i__27055__auto___30550]));

var G__30551 = (i__27055__auto___30550 + (1));
i__27055__auto___30550 = G__30551;
continue;
} else {
}
break;
}

var G__30498 = args30496.length;
switch (G__30498) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30496.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28171__auto___30553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___30553,tc,fc){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___30553,tc,fc){
return (function (state_30524){
var state_val_30525 = (state_30524[(1)]);
if((state_val_30525 === (7))){
var inst_30520 = (state_30524[(2)]);
var state_30524__$1 = state_30524;
var statearr_30526_30554 = state_30524__$1;
(statearr_30526_30554[(2)] = inst_30520);

(statearr_30526_30554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (1))){
var state_30524__$1 = state_30524;
var statearr_30527_30555 = state_30524__$1;
(statearr_30527_30555[(2)] = null);

(statearr_30527_30555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (4))){
var inst_30501 = (state_30524[(7)]);
var inst_30501__$1 = (state_30524[(2)]);
var inst_30502 = (inst_30501__$1 == null);
var state_30524__$1 = (function (){var statearr_30528 = state_30524;
(statearr_30528[(7)] = inst_30501__$1);

return statearr_30528;
})();
if(cljs.core.truth_(inst_30502)){
var statearr_30529_30556 = state_30524__$1;
(statearr_30529_30556[(1)] = (5));

} else {
var statearr_30530_30557 = state_30524__$1;
(statearr_30530_30557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (13))){
var state_30524__$1 = state_30524;
var statearr_30531_30558 = state_30524__$1;
(statearr_30531_30558[(2)] = null);

(statearr_30531_30558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (6))){
var inst_30501 = (state_30524[(7)]);
var inst_30507 = p.call(null,inst_30501);
var state_30524__$1 = state_30524;
if(cljs.core.truth_(inst_30507)){
var statearr_30532_30559 = state_30524__$1;
(statearr_30532_30559[(1)] = (9));

} else {
var statearr_30533_30560 = state_30524__$1;
(statearr_30533_30560[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (3))){
var inst_30522 = (state_30524[(2)]);
var state_30524__$1 = state_30524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30524__$1,inst_30522);
} else {
if((state_val_30525 === (12))){
var state_30524__$1 = state_30524;
var statearr_30534_30561 = state_30524__$1;
(statearr_30534_30561[(2)] = null);

(statearr_30534_30561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (2))){
var state_30524__$1 = state_30524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30524__$1,(4),ch);
} else {
if((state_val_30525 === (11))){
var inst_30501 = (state_30524[(7)]);
var inst_30511 = (state_30524[(2)]);
var state_30524__$1 = state_30524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30524__$1,(8),inst_30511,inst_30501);
} else {
if((state_val_30525 === (9))){
var state_30524__$1 = state_30524;
var statearr_30535_30562 = state_30524__$1;
(statearr_30535_30562[(2)] = tc);

(statearr_30535_30562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (5))){
var inst_30504 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30505 = cljs.core.async.close_BANG_.call(null,fc);
var state_30524__$1 = (function (){var statearr_30536 = state_30524;
(statearr_30536[(8)] = inst_30504);

return statearr_30536;
})();
var statearr_30537_30563 = state_30524__$1;
(statearr_30537_30563[(2)] = inst_30505);

(statearr_30537_30563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (14))){
var inst_30518 = (state_30524[(2)]);
var state_30524__$1 = state_30524;
var statearr_30538_30564 = state_30524__$1;
(statearr_30538_30564[(2)] = inst_30518);

(statearr_30538_30564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (10))){
var state_30524__$1 = state_30524;
var statearr_30539_30565 = state_30524__$1;
(statearr_30539_30565[(2)] = fc);

(statearr_30539_30565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30525 === (8))){
var inst_30513 = (state_30524[(2)]);
var state_30524__$1 = state_30524;
if(cljs.core.truth_(inst_30513)){
var statearr_30540_30566 = state_30524__$1;
(statearr_30540_30566[(1)] = (12));

} else {
var statearr_30541_30567 = state_30524__$1;
(statearr_30541_30567[(1)] = (13));

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
});})(c__28171__auto___30553,tc,fc))
;
return ((function (switch__28150__auto__,c__28171__auto___30553,tc,fc){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_30545 = [null,null,null,null,null,null,null,null,null];
(statearr_30545[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_30545[(1)] = (1));

return statearr_30545;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_30524){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30546){if((e30546 instanceof Object)){
var ex__28154__auto__ = e30546;
var statearr_30547_30568 = state_30524;
(statearr_30547_30568[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30569 = state_30524;
state_30524 = G__30569;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_30524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_30524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___30553,tc,fc))
})();
var state__28173__auto__ = (function (){var statearr_30548 = f__28172__auto__.call(null);
(statearr_30548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___30553);

return statearr_30548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___30553,tc,fc))
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
var c__28171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto__){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto__){
return (function (state_30633){
var state_val_30634 = (state_30633[(1)]);
if((state_val_30634 === (7))){
var inst_30629 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30635_30656 = state_30633__$1;
(statearr_30635_30656[(2)] = inst_30629);

(statearr_30635_30656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (1))){
var inst_30613 = init;
var state_30633__$1 = (function (){var statearr_30636 = state_30633;
(statearr_30636[(7)] = inst_30613);

return statearr_30636;
})();
var statearr_30637_30657 = state_30633__$1;
(statearr_30637_30657[(2)] = null);

(statearr_30637_30657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (4))){
var inst_30616 = (state_30633[(8)]);
var inst_30616__$1 = (state_30633[(2)]);
var inst_30617 = (inst_30616__$1 == null);
var state_30633__$1 = (function (){var statearr_30638 = state_30633;
(statearr_30638[(8)] = inst_30616__$1);

return statearr_30638;
})();
if(cljs.core.truth_(inst_30617)){
var statearr_30639_30658 = state_30633__$1;
(statearr_30639_30658[(1)] = (5));

} else {
var statearr_30640_30659 = state_30633__$1;
(statearr_30640_30659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (6))){
var inst_30613 = (state_30633[(7)]);
var inst_30616 = (state_30633[(8)]);
var inst_30620 = (state_30633[(9)]);
var inst_30620__$1 = f.call(null,inst_30613,inst_30616);
var inst_30621 = cljs.core.reduced_QMARK_.call(null,inst_30620__$1);
var state_30633__$1 = (function (){var statearr_30641 = state_30633;
(statearr_30641[(9)] = inst_30620__$1);

return statearr_30641;
})();
if(inst_30621){
var statearr_30642_30660 = state_30633__$1;
(statearr_30642_30660[(1)] = (8));

} else {
var statearr_30643_30661 = state_30633__$1;
(statearr_30643_30661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (3))){
var inst_30631 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30633__$1,inst_30631);
} else {
if((state_val_30634 === (2))){
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30633__$1,(4),ch);
} else {
if((state_val_30634 === (9))){
var inst_30620 = (state_30633[(9)]);
var inst_30613 = inst_30620;
var state_30633__$1 = (function (){var statearr_30644 = state_30633;
(statearr_30644[(7)] = inst_30613);

return statearr_30644;
})();
var statearr_30645_30662 = state_30633__$1;
(statearr_30645_30662[(2)] = null);

(statearr_30645_30662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (5))){
var inst_30613 = (state_30633[(7)]);
var state_30633__$1 = state_30633;
var statearr_30646_30663 = state_30633__$1;
(statearr_30646_30663[(2)] = inst_30613);

(statearr_30646_30663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (10))){
var inst_30627 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30647_30664 = state_30633__$1;
(statearr_30647_30664[(2)] = inst_30627);

(statearr_30647_30664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (8))){
var inst_30620 = (state_30633[(9)]);
var inst_30623 = cljs.core.deref.call(null,inst_30620);
var state_30633__$1 = state_30633;
var statearr_30648_30665 = state_30633__$1;
(statearr_30648_30665[(2)] = inst_30623);

(statearr_30648_30665[(1)] = (10));


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
});})(c__28171__auto__))
;
return ((function (switch__28150__auto__,c__28171__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28151__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28151__auto____0 = (function (){
var statearr_30652 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30652[(0)] = cljs$core$async$reduce_$_state_machine__28151__auto__);

(statearr_30652[(1)] = (1));

return statearr_30652;
});
var cljs$core$async$reduce_$_state_machine__28151__auto____1 = (function (state_30633){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30653){if((e30653 instanceof Object)){
var ex__28154__auto__ = e30653;
var statearr_30654_30666 = state_30633;
(statearr_30654_30666[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30667 = state_30633;
state_30633 = G__30667;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28151__auto__ = function(state_30633){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28151__auto____1.call(this,state_30633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28151__auto____0;
cljs$core$async$reduce_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28151__auto____1;
return cljs$core$async$reduce_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__))
})();
var state__28173__auto__ = (function (){var statearr_30655 = f__28172__auto__.call(null);
(statearr_30655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_30655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto__))
);

return c__28171__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto__,f__$1){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto__,f__$1){
return (function (state_30687){
var state_val_30688 = (state_30687[(1)]);
if((state_val_30688 === (1))){
var inst_30682 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30687__$1,(2),inst_30682);
} else {
if((state_val_30688 === (2))){
var inst_30684 = (state_30687[(2)]);
var inst_30685 = f__$1.call(null,inst_30684);
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30687__$1,inst_30685);
} else {
return null;
}
}
});})(c__28171__auto__,f__$1))
;
return ((function (switch__28150__auto__,c__28171__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28151__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28151__auto____0 = (function (){
var statearr_30692 = [null,null,null,null,null,null,null];
(statearr_30692[(0)] = cljs$core$async$transduce_$_state_machine__28151__auto__);

(statearr_30692[(1)] = (1));

return statearr_30692;
});
var cljs$core$async$transduce_$_state_machine__28151__auto____1 = (function (state_30687){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30693){if((e30693 instanceof Object)){
var ex__28154__auto__ = e30693;
var statearr_30694_30696 = state_30687;
(statearr_30694_30696[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30697 = state_30687;
state_30687 = G__30697;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28151__auto__ = function(state_30687){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28151__auto____1.call(this,state_30687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28151__auto____0;
cljs$core$async$transduce_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28151__auto____1;
return cljs$core$async$transduce_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__,f__$1))
})();
var state__28173__auto__ = (function (){var statearr_30695 = f__28172__auto__.call(null);
(statearr_30695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_30695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto__,f__$1))
);

return c__28171__auto__;
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
var args30698 = [];
var len__27054__auto___30750 = arguments.length;
var i__27055__auto___30751 = (0);
while(true){
if((i__27055__auto___30751 < len__27054__auto___30750)){
args30698.push((arguments[i__27055__auto___30751]));

var G__30752 = (i__27055__auto___30751 + (1));
i__27055__auto___30751 = G__30752;
continue;
} else {
}
break;
}

var G__30700 = args30698.length;
switch (G__30700) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30698.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto__){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto__){
return (function (state_30725){
var state_val_30726 = (state_30725[(1)]);
if((state_val_30726 === (7))){
var inst_30707 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30727_30754 = state_30725__$1;
(statearr_30727_30754[(2)] = inst_30707);

(statearr_30727_30754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (1))){
var inst_30701 = cljs.core.seq.call(null,coll);
var inst_30702 = inst_30701;
var state_30725__$1 = (function (){var statearr_30728 = state_30725;
(statearr_30728[(7)] = inst_30702);

return statearr_30728;
})();
var statearr_30729_30755 = state_30725__$1;
(statearr_30729_30755[(2)] = null);

(statearr_30729_30755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (4))){
var inst_30702 = (state_30725[(7)]);
var inst_30705 = cljs.core.first.call(null,inst_30702);
var state_30725__$1 = state_30725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30725__$1,(7),ch,inst_30705);
} else {
if((state_val_30726 === (13))){
var inst_30719 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30730_30756 = state_30725__$1;
(statearr_30730_30756[(2)] = inst_30719);

(statearr_30730_30756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (6))){
var inst_30710 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30710)){
var statearr_30731_30757 = state_30725__$1;
(statearr_30731_30757[(1)] = (8));

} else {
var statearr_30732_30758 = state_30725__$1;
(statearr_30732_30758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (3))){
var inst_30723 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30725__$1,inst_30723);
} else {
if((state_val_30726 === (12))){
var state_30725__$1 = state_30725;
var statearr_30733_30759 = state_30725__$1;
(statearr_30733_30759[(2)] = null);

(statearr_30733_30759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (2))){
var inst_30702 = (state_30725[(7)]);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30702)){
var statearr_30734_30760 = state_30725__$1;
(statearr_30734_30760[(1)] = (4));

} else {
var statearr_30735_30761 = state_30725__$1;
(statearr_30735_30761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (11))){
var inst_30716 = cljs.core.async.close_BANG_.call(null,ch);
var state_30725__$1 = state_30725;
var statearr_30736_30762 = state_30725__$1;
(statearr_30736_30762[(2)] = inst_30716);

(statearr_30736_30762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (9))){
var state_30725__$1 = state_30725;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30737_30763 = state_30725__$1;
(statearr_30737_30763[(1)] = (11));

} else {
var statearr_30738_30764 = state_30725__$1;
(statearr_30738_30764[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (5))){
var inst_30702 = (state_30725[(7)]);
var state_30725__$1 = state_30725;
var statearr_30739_30765 = state_30725__$1;
(statearr_30739_30765[(2)] = inst_30702);

(statearr_30739_30765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (10))){
var inst_30721 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30740_30766 = state_30725__$1;
(statearr_30740_30766[(2)] = inst_30721);

(statearr_30740_30766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (8))){
var inst_30702 = (state_30725[(7)]);
var inst_30712 = cljs.core.next.call(null,inst_30702);
var inst_30702__$1 = inst_30712;
var state_30725__$1 = (function (){var statearr_30741 = state_30725;
(statearr_30741[(7)] = inst_30702__$1);

return statearr_30741;
})();
var statearr_30742_30767 = state_30725__$1;
(statearr_30742_30767[(2)] = null);

(statearr_30742_30767[(1)] = (2));


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
});})(c__28171__auto__))
;
return ((function (switch__28150__auto__,c__28171__auto__){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_30746 = [null,null,null,null,null,null,null,null];
(statearr_30746[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_30746[(1)] = (1));

return statearr_30746;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_30725){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30747){if((e30747 instanceof Object)){
var ex__28154__auto__ = e30747;
var statearr_30748_30768 = state_30725;
(statearr_30748_30768[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30769 = state_30725;
state_30725 = G__30769;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_30725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_30725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__))
})();
var state__28173__auto__ = (function (){var statearr_30749 = f__28172__auto__.call(null);
(statearr_30749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_30749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto__))
);

return c__28171__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async30995 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30995 = (function (mult,ch,cs,meta30996){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30996 = meta30996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30997,meta30996__$1){
var self__ = this;
var _30997__$1 = this;
return (new cljs.core.async.t_cljs$core$async30995(self__.mult,self__.ch,self__.cs,meta30996__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30997){
var self__ = this;
var _30997__$1 = this;
return self__.meta30996;
});})(cs))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30995.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30996","meta30996",-263680622,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30995";

cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30995");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30995 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30995(mult__$1,ch__$1,cs__$1,meta30996){
return (new cljs.core.async.t_cljs$core$async30995(mult__$1,ch__$1,cs__$1,meta30996));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30995(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28171__auto___31220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___31220,cs,m,dchan,dctr,done){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___31220,cs,m,dchan,dctr,done){
return (function (state_31132){
var state_val_31133 = (state_31132[(1)]);
if((state_val_31133 === (7))){
var inst_31128 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31134_31221 = state_31132__$1;
(statearr_31134_31221[(2)] = inst_31128);

(statearr_31134_31221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (20))){
var inst_31031 = (state_31132[(7)]);
var inst_31043 = cljs.core.first.call(null,inst_31031);
var inst_31044 = cljs.core.nth.call(null,inst_31043,(0),null);
var inst_31045 = cljs.core.nth.call(null,inst_31043,(1),null);
var state_31132__$1 = (function (){var statearr_31135 = state_31132;
(statearr_31135[(8)] = inst_31044);

return statearr_31135;
})();
if(cljs.core.truth_(inst_31045)){
var statearr_31136_31222 = state_31132__$1;
(statearr_31136_31222[(1)] = (22));

} else {
var statearr_31137_31223 = state_31132__$1;
(statearr_31137_31223[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (27))){
var inst_31000 = (state_31132[(9)]);
var inst_31073 = (state_31132[(10)]);
var inst_31075 = (state_31132[(11)]);
var inst_31080 = (state_31132[(12)]);
var inst_31080__$1 = cljs.core._nth.call(null,inst_31073,inst_31075);
var inst_31081 = cljs.core.async.put_BANG_.call(null,inst_31080__$1,inst_31000,done);
var state_31132__$1 = (function (){var statearr_31138 = state_31132;
(statearr_31138[(12)] = inst_31080__$1);

return statearr_31138;
})();
if(cljs.core.truth_(inst_31081)){
var statearr_31139_31224 = state_31132__$1;
(statearr_31139_31224[(1)] = (30));

} else {
var statearr_31140_31225 = state_31132__$1;
(statearr_31140_31225[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (1))){
var state_31132__$1 = state_31132;
var statearr_31141_31226 = state_31132__$1;
(statearr_31141_31226[(2)] = null);

(statearr_31141_31226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (24))){
var inst_31031 = (state_31132[(7)]);
var inst_31050 = (state_31132[(2)]);
var inst_31051 = cljs.core.next.call(null,inst_31031);
var inst_31009 = inst_31051;
var inst_31010 = null;
var inst_31011 = (0);
var inst_31012 = (0);
var state_31132__$1 = (function (){var statearr_31142 = state_31132;
(statearr_31142[(13)] = inst_31010);

(statearr_31142[(14)] = inst_31050);

(statearr_31142[(15)] = inst_31011);

(statearr_31142[(16)] = inst_31012);

(statearr_31142[(17)] = inst_31009);

return statearr_31142;
})();
var statearr_31143_31227 = state_31132__$1;
(statearr_31143_31227[(2)] = null);

(statearr_31143_31227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (39))){
var state_31132__$1 = state_31132;
var statearr_31147_31228 = state_31132__$1;
(statearr_31147_31228[(2)] = null);

(statearr_31147_31228[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (4))){
var inst_31000 = (state_31132[(9)]);
var inst_31000__$1 = (state_31132[(2)]);
var inst_31001 = (inst_31000__$1 == null);
var state_31132__$1 = (function (){var statearr_31148 = state_31132;
(statearr_31148[(9)] = inst_31000__$1);

return statearr_31148;
})();
if(cljs.core.truth_(inst_31001)){
var statearr_31149_31229 = state_31132__$1;
(statearr_31149_31229[(1)] = (5));

} else {
var statearr_31150_31230 = state_31132__$1;
(statearr_31150_31230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (15))){
var inst_31010 = (state_31132[(13)]);
var inst_31011 = (state_31132[(15)]);
var inst_31012 = (state_31132[(16)]);
var inst_31009 = (state_31132[(17)]);
var inst_31027 = (state_31132[(2)]);
var inst_31028 = (inst_31012 + (1));
var tmp31144 = inst_31010;
var tmp31145 = inst_31011;
var tmp31146 = inst_31009;
var inst_31009__$1 = tmp31146;
var inst_31010__$1 = tmp31144;
var inst_31011__$1 = tmp31145;
var inst_31012__$1 = inst_31028;
var state_31132__$1 = (function (){var statearr_31151 = state_31132;
(statearr_31151[(13)] = inst_31010__$1);

(statearr_31151[(15)] = inst_31011__$1);

(statearr_31151[(18)] = inst_31027);

(statearr_31151[(16)] = inst_31012__$1);

(statearr_31151[(17)] = inst_31009__$1);

return statearr_31151;
})();
var statearr_31152_31231 = state_31132__$1;
(statearr_31152_31231[(2)] = null);

(statearr_31152_31231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (21))){
var inst_31054 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31156_31232 = state_31132__$1;
(statearr_31156_31232[(2)] = inst_31054);

(statearr_31156_31232[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (31))){
var inst_31080 = (state_31132[(12)]);
var inst_31084 = done.call(null,null);
var inst_31085 = cljs.core.async.untap_STAR_.call(null,m,inst_31080);
var state_31132__$1 = (function (){var statearr_31157 = state_31132;
(statearr_31157[(19)] = inst_31084);

return statearr_31157;
})();
var statearr_31158_31233 = state_31132__$1;
(statearr_31158_31233[(2)] = inst_31085);

(statearr_31158_31233[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (32))){
var inst_31072 = (state_31132[(20)]);
var inst_31074 = (state_31132[(21)]);
var inst_31073 = (state_31132[(10)]);
var inst_31075 = (state_31132[(11)]);
var inst_31087 = (state_31132[(2)]);
var inst_31088 = (inst_31075 + (1));
var tmp31153 = inst_31072;
var tmp31154 = inst_31074;
var tmp31155 = inst_31073;
var inst_31072__$1 = tmp31153;
var inst_31073__$1 = tmp31155;
var inst_31074__$1 = tmp31154;
var inst_31075__$1 = inst_31088;
var state_31132__$1 = (function (){var statearr_31159 = state_31132;
(statearr_31159[(20)] = inst_31072__$1);

(statearr_31159[(22)] = inst_31087);

(statearr_31159[(21)] = inst_31074__$1);

(statearr_31159[(10)] = inst_31073__$1);

(statearr_31159[(11)] = inst_31075__$1);

return statearr_31159;
})();
var statearr_31160_31234 = state_31132__$1;
(statearr_31160_31234[(2)] = null);

(statearr_31160_31234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (40))){
var inst_31100 = (state_31132[(23)]);
var inst_31104 = done.call(null,null);
var inst_31105 = cljs.core.async.untap_STAR_.call(null,m,inst_31100);
var state_31132__$1 = (function (){var statearr_31161 = state_31132;
(statearr_31161[(24)] = inst_31104);

return statearr_31161;
})();
var statearr_31162_31235 = state_31132__$1;
(statearr_31162_31235[(2)] = inst_31105);

(statearr_31162_31235[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (33))){
var inst_31091 = (state_31132[(25)]);
var inst_31093 = cljs.core.chunked_seq_QMARK_.call(null,inst_31091);
var state_31132__$1 = state_31132;
if(inst_31093){
var statearr_31163_31236 = state_31132__$1;
(statearr_31163_31236[(1)] = (36));

} else {
var statearr_31164_31237 = state_31132__$1;
(statearr_31164_31237[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (13))){
var inst_31021 = (state_31132[(26)]);
var inst_31024 = cljs.core.async.close_BANG_.call(null,inst_31021);
var state_31132__$1 = state_31132;
var statearr_31165_31238 = state_31132__$1;
(statearr_31165_31238[(2)] = inst_31024);

(statearr_31165_31238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (22))){
var inst_31044 = (state_31132[(8)]);
var inst_31047 = cljs.core.async.close_BANG_.call(null,inst_31044);
var state_31132__$1 = state_31132;
var statearr_31166_31239 = state_31132__$1;
(statearr_31166_31239[(2)] = inst_31047);

(statearr_31166_31239[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (36))){
var inst_31091 = (state_31132[(25)]);
var inst_31095 = cljs.core.chunk_first.call(null,inst_31091);
var inst_31096 = cljs.core.chunk_rest.call(null,inst_31091);
var inst_31097 = cljs.core.count.call(null,inst_31095);
var inst_31072 = inst_31096;
var inst_31073 = inst_31095;
var inst_31074 = inst_31097;
var inst_31075 = (0);
var state_31132__$1 = (function (){var statearr_31167 = state_31132;
(statearr_31167[(20)] = inst_31072);

(statearr_31167[(21)] = inst_31074);

(statearr_31167[(10)] = inst_31073);

(statearr_31167[(11)] = inst_31075);

return statearr_31167;
})();
var statearr_31168_31240 = state_31132__$1;
(statearr_31168_31240[(2)] = null);

(statearr_31168_31240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (41))){
var inst_31091 = (state_31132[(25)]);
var inst_31107 = (state_31132[(2)]);
var inst_31108 = cljs.core.next.call(null,inst_31091);
var inst_31072 = inst_31108;
var inst_31073 = null;
var inst_31074 = (0);
var inst_31075 = (0);
var state_31132__$1 = (function (){var statearr_31169 = state_31132;
(statearr_31169[(20)] = inst_31072);

(statearr_31169[(27)] = inst_31107);

(statearr_31169[(21)] = inst_31074);

(statearr_31169[(10)] = inst_31073);

(statearr_31169[(11)] = inst_31075);

return statearr_31169;
})();
var statearr_31170_31241 = state_31132__$1;
(statearr_31170_31241[(2)] = null);

(statearr_31170_31241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (43))){
var state_31132__$1 = state_31132;
var statearr_31171_31242 = state_31132__$1;
(statearr_31171_31242[(2)] = null);

(statearr_31171_31242[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (29))){
var inst_31116 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31172_31243 = state_31132__$1;
(statearr_31172_31243[(2)] = inst_31116);

(statearr_31172_31243[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (44))){
var inst_31125 = (state_31132[(2)]);
var state_31132__$1 = (function (){var statearr_31173 = state_31132;
(statearr_31173[(28)] = inst_31125);

return statearr_31173;
})();
var statearr_31174_31244 = state_31132__$1;
(statearr_31174_31244[(2)] = null);

(statearr_31174_31244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (6))){
var inst_31064 = (state_31132[(29)]);
var inst_31063 = cljs.core.deref.call(null,cs);
var inst_31064__$1 = cljs.core.keys.call(null,inst_31063);
var inst_31065 = cljs.core.count.call(null,inst_31064__$1);
var inst_31066 = cljs.core.reset_BANG_.call(null,dctr,inst_31065);
var inst_31071 = cljs.core.seq.call(null,inst_31064__$1);
var inst_31072 = inst_31071;
var inst_31073 = null;
var inst_31074 = (0);
var inst_31075 = (0);
var state_31132__$1 = (function (){var statearr_31175 = state_31132;
(statearr_31175[(20)] = inst_31072);

(statearr_31175[(30)] = inst_31066);

(statearr_31175[(29)] = inst_31064__$1);

(statearr_31175[(21)] = inst_31074);

(statearr_31175[(10)] = inst_31073);

(statearr_31175[(11)] = inst_31075);

return statearr_31175;
})();
var statearr_31176_31245 = state_31132__$1;
(statearr_31176_31245[(2)] = null);

(statearr_31176_31245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (28))){
var inst_31091 = (state_31132[(25)]);
var inst_31072 = (state_31132[(20)]);
var inst_31091__$1 = cljs.core.seq.call(null,inst_31072);
var state_31132__$1 = (function (){var statearr_31177 = state_31132;
(statearr_31177[(25)] = inst_31091__$1);

return statearr_31177;
})();
if(inst_31091__$1){
var statearr_31178_31246 = state_31132__$1;
(statearr_31178_31246[(1)] = (33));

} else {
var statearr_31179_31247 = state_31132__$1;
(statearr_31179_31247[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (25))){
var inst_31074 = (state_31132[(21)]);
var inst_31075 = (state_31132[(11)]);
var inst_31077 = (inst_31075 < inst_31074);
var inst_31078 = inst_31077;
var state_31132__$1 = state_31132;
if(cljs.core.truth_(inst_31078)){
var statearr_31180_31248 = state_31132__$1;
(statearr_31180_31248[(1)] = (27));

} else {
var statearr_31181_31249 = state_31132__$1;
(statearr_31181_31249[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (34))){
var state_31132__$1 = state_31132;
var statearr_31182_31250 = state_31132__$1;
(statearr_31182_31250[(2)] = null);

(statearr_31182_31250[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (17))){
var state_31132__$1 = state_31132;
var statearr_31183_31251 = state_31132__$1;
(statearr_31183_31251[(2)] = null);

(statearr_31183_31251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (3))){
var inst_31130 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31132__$1,inst_31130);
} else {
if((state_val_31133 === (12))){
var inst_31059 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31184_31252 = state_31132__$1;
(statearr_31184_31252[(2)] = inst_31059);

(statearr_31184_31252[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (2))){
var state_31132__$1 = state_31132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31132__$1,(4),ch);
} else {
if((state_val_31133 === (23))){
var state_31132__$1 = state_31132;
var statearr_31185_31253 = state_31132__$1;
(statearr_31185_31253[(2)] = null);

(statearr_31185_31253[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (35))){
var inst_31114 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31186_31254 = state_31132__$1;
(statearr_31186_31254[(2)] = inst_31114);

(statearr_31186_31254[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (19))){
var inst_31031 = (state_31132[(7)]);
var inst_31035 = cljs.core.chunk_first.call(null,inst_31031);
var inst_31036 = cljs.core.chunk_rest.call(null,inst_31031);
var inst_31037 = cljs.core.count.call(null,inst_31035);
var inst_31009 = inst_31036;
var inst_31010 = inst_31035;
var inst_31011 = inst_31037;
var inst_31012 = (0);
var state_31132__$1 = (function (){var statearr_31187 = state_31132;
(statearr_31187[(13)] = inst_31010);

(statearr_31187[(15)] = inst_31011);

(statearr_31187[(16)] = inst_31012);

(statearr_31187[(17)] = inst_31009);

return statearr_31187;
})();
var statearr_31188_31255 = state_31132__$1;
(statearr_31188_31255[(2)] = null);

(statearr_31188_31255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (11))){
var inst_31031 = (state_31132[(7)]);
var inst_31009 = (state_31132[(17)]);
var inst_31031__$1 = cljs.core.seq.call(null,inst_31009);
var state_31132__$1 = (function (){var statearr_31189 = state_31132;
(statearr_31189[(7)] = inst_31031__$1);

return statearr_31189;
})();
if(inst_31031__$1){
var statearr_31190_31256 = state_31132__$1;
(statearr_31190_31256[(1)] = (16));

} else {
var statearr_31191_31257 = state_31132__$1;
(statearr_31191_31257[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (9))){
var inst_31061 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31192_31258 = state_31132__$1;
(statearr_31192_31258[(2)] = inst_31061);

(statearr_31192_31258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (5))){
var inst_31007 = cljs.core.deref.call(null,cs);
var inst_31008 = cljs.core.seq.call(null,inst_31007);
var inst_31009 = inst_31008;
var inst_31010 = null;
var inst_31011 = (0);
var inst_31012 = (0);
var state_31132__$1 = (function (){var statearr_31193 = state_31132;
(statearr_31193[(13)] = inst_31010);

(statearr_31193[(15)] = inst_31011);

(statearr_31193[(16)] = inst_31012);

(statearr_31193[(17)] = inst_31009);

return statearr_31193;
})();
var statearr_31194_31259 = state_31132__$1;
(statearr_31194_31259[(2)] = null);

(statearr_31194_31259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (14))){
var state_31132__$1 = state_31132;
var statearr_31195_31260 = state_31132__$1;
(statearr_31195_31260[(2)] = null);

(statearr_31195_31260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (45))){
var inst_31122 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31196_31261 = state_31132__$1;
(statearr_31196_31261[(2)] = inst_31122);

(statearr_31196_31261[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (26))){
var inst_31064 = (state_31132[(29)]);
var inst_31118 = (state_31132[(2)]);
var inst_31119 = cljs.core.seq.call(null,inst_31064);
var state_31132__$1 = (function (){var statearr_31197 = state_31132;
(statearr_31197[(31)] = inst_31118);

return statearr_31197;
})();
if(inst_31119){
var statearr_31198_31262 = state_31132__$1;
(statearr_31198_31262[(1)] = (42));

} else {
var statearr_31199_31263 = state_31132__$1;
(statearr_31199_31263[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (16))){
var inst_31031 = (state_31132[(7)]);
var inst_31033 = cljs.core.chunked_seq_QMARK_.call(null,inst_31031);
var state_31132__$1 = state_31132;
if(inst_31033){
var statearr_31200_31264 = state_31132__$1;
(statearr_31200_31264[(1)] = (19));

} else {
var statearr_31201_31265 = state_31132__$1;
(statearr_31201_31265[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (38))){
var inst_31111 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31202_31266 = state_31132__$1;
(statearr_31202_31266[(2)] = inst_31111);

(statearr_31202_31266[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (30))){
var state_31132__$1 = state_31132;
var statearr_31203_31267 = state_31132__$1;
(statearr_31203_31267[(2)] = null);

(statearr_31203_31267[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (10))){
var inst_31010 = (state_31132[(13)]);
var inst_31012 = (state_31132[(16)]);
var inst_31020 = cljs.core._nth.call(null,inst_31010,inst_31012);
var inst_31021 = cljs.core.nth.call(null,inst_31020,(0),null);
var inst_31022 = cljs.core.nth.call(null,inst_31020,(1),null);
var state_31132__$1 = (function (){var statearr_31204 = state_31132;
(statearr_31204[(26)] = inst_31021);

return statearr_31204;
})();
if(cljs.core.truth_(inst_31022)){
var statearr_31205_31268 = state_31132__$1;
(statearr_31205_31268[(1)] = (13));

} else {
var statearr_31206_31269 = state_31132__$1;
(statearr_31206_31269[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (18))){
var inst_31057 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31207_31270 = state_31132__$1;
(statearr_31207_31270[(2)] = inst_31057);

(statearr_31207_31270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (42))){
var state_31132__$1 = state_31132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31132__$1,(45),dchan);
} else {
if((state_val_31133 === (37))){
var inst_31091 = (state_31132[(25)]);
var inst_31000 = (state_31132[(9)]);
var inst_31100 = (state_31132[(23)]);
var inst_31100__$1 = cljs.core.first.call(null,inst_31091);
var inst_31101 = cljs.core.async.put_BANG_.call(null,inst_31100__$1,inst_31000,done);
var state_31132__$1 = (function (){var statearr_31208 = state_31132;
(statearr_31208[(23)] = inst_31100__$1);

return statearr_31208;
})();
if(cljs.core.truth_(inst_31101)){
var statearr_31209_31271 = state_31132__$1;
(statearr_31209_31271[(1)] = (39));

} else {
var statearr_31210_31272 = state_31132__$1;
(statearr_31210_31272[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (8))){
var inst_31011 = (state_31132[(15)]);
var inst_31012 = (state_31132[(16)]);
var inst_31014 = (inst_31012 < inst_31011);
var inst_31015 = inst_31014;
var state_31132__$1 = state_31132;
if(cljs.core.truth_(inst_31015)){
var statearr_31211_31273 = state_31132__$1;
(statearr_31211_31273[(1)] = (10));

} else {
var statearr_31212_31274 = state_31132__$1;
(statearr_31212_31274[(1)] = (11));

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
});})(c__28171__auto___31220,cs,m,dchan,dctr,done))
;
return ((function (switch__28150__auto__,c__28171__auto___31220,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28151__auto__ = null;
var cljs$core$async$mult_$_state_machine__28151__auto____0 = (function (){
var statearr_31216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31216[(0)] = cljs$core$async$mult_$_state_machine__28151__auto__);

(statearr_31216[(1)] = (1));

return statearr_31216;
});
var cljs$core$async$mult_$_state_machine__28151__auto____1 = (function (state_31132){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_31132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e31217){if((e31217 instanceof Object)){
var ex__28154__auto__ = e31217;
var statearr_31218_31275 = state_31132;
(statearr_31218_31275[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31276 = state_31132;
state_31132 = G__31276;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28151__auto__ = function(state_31132){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28151__auto____1.call(this,state_31132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28151__auto____0;
cljs$core$async$mult_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28151__auto____1;
return cljs$core$async$mult_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___31220,cs,m,dchan,dctr,done))
})();
var state__28173__auto__ = (function (){var statearr_31219 = f__28172__auto__.call(null);
(statearr_31219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___31220);

return statearr_31219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___31220,cs,m,dchan,dctr,done))
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
var args31277 = [];
var len__27054__auto___31280 = arguments.length;
var i__27055__auto___31281 = (0);
while(true){
if((i__27055__auto___31281 < len__27054__auto___31280)){
args31277.push((arguments[i__27055__auto___31281]));

var G__31282 = (i__27055__auto___31281 + (1));
i__27055__auto___31281 = G__31282;
continue;
} else {
}
break;
}

var G__31279 = args31277.length;
switch (G__31279) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31277.length)].join('')));

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
var len__27054__auto___31294 = arguments.length;
var i__27055__auto___31295 = (0);
while(true){
if((i__27055__auto___31295 < len__27054__auto___31294)){
args__27061__auto__.push((arguments[i__27055__auto___31295]));

var G__31296 = (i__27055__auto___31295 + (1));
i__27055__auto___31295 = G__31296;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31288){
var map__31289 = p__31288;
var map__31289__$1 = ((((!((map__31289 == null)))?((((map__31289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31289):map__31289);
var opts = map__31289__$1;
var statearr_31291_31297 = state;
(statearr_31291_31297[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31289,map__31289__$1,opts){
return (function (val){
var statearr_31292_31298 = state;
(statearr_31292_31298[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31289,map__31289__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31293_31299 = state;
(statearr_31293_31299[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31284){
var G__31285 = cljs.core.first.call(null,seq31284);
var seq31284__$1 = cljs.core.next.call(null,seq31284);
var G__31286 = cljs.core.first.call(null,seq31284__$1);
var seq31284__$2 = cljs.core.next.call(null,seq31284__$1);
var G__31287 = cljs.core.first.call(null,seq31284__$2);
var seq31284__$3 = cljs.core.next.call(null,seq31284__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31285,G__31286,G__31287,seq31284__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31465 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31466){
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
this.meta31466 = meta31466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31467,meta31466__$1){
var self__ = this;
var _31467__$1 = this;
return (new cljs.core.async.t_cljs$core$async31465(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31466__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31467){
var self__ = this;
var _31467__$1 = this;
return self__.meta31466;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31465.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31465.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31466","meta31466",1487694571,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31465";

cljs.core.async.t_cljs$core$async31465.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31465");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31465 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31465(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31466){
return (new cljs.core.async.t_cljs$core$async31465(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31466));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31465(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28171__auto___31630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___31630,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___31630,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31567){
var state_val_31568 = (state_31567[(1)]);
if((state_val_31568 === (7))){
var inst_31483 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31569_31631 = state_31567__$1;
(statearr_31569_31631[(2)] = inst_31483);

(statearr_31569_31631[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (20))){
var inst_31495 = (state_31567[(7)]);
var state_31567__$1 = state_31567;
var statearr_31570_31632 = state_31567__$1;
(statearr_31570_31632[(2)] = inst_31495);

(statearr_31570_31632[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (27))){
var state_31567__$1 = state_31567;
var statearr_31571_31633 = state_31567__$1;
(statearr_31571_31633[(2)] = null);

(statearr_31571_31633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (1))){
var inst_31471 = (state_31567[(8)]);
var inst_31471__$1 = calc_state.call(null);
var inst_31473 = (inst_31471__$1 == null);
var inst_31474 = cljs.core.not.call(null,inst_31473);
var state_31567__$1 = (function (){var statearr_31572 = state_31567;
(statearr_31572[(8)] = inst_31471__$1);

return statearr_31572;
})();
if(inst_31474){
var statearr_31573_31634 = state_31567__$1;
(statearr_31573_31634[(1)] = (2));

} else {
var statearr_31574_31635 = state_31567__$1;
(statearr_31574_31635[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (24))){
var inst_31541 = (state_31567[(9)]);
var inst_31527 = (state_31567[(10)]);
var inst_31518 = (state_31567[(11)]);
var inst_31541__$1 = inst_31518.call(null,inst_31527);
var state_31567__$1 = (function (){var statearr_31575 = state_31567;
(statearr_31575[(9)] = inst_31541__$1);

return statearr_31575;
})();
if(cljs.core.truth_(inst_31541__$1)){
var statearr_31576_31636 = state_31567__$1;
(statearr_31576_31636[(1)] = (29));

} else {
var statearr_31577_31637 = state_31567__$1;
(statearr_31577_31637[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (4))){
var inst_31486 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
if(cljs.core.truth_(inst_31486)){
var statearr_31578_31638 = state_31567__$1;
(statearr_31578_31638[(1)] = (8));

} else {
var statearr_31579_31639 = state_31567__$1;
(statearr_31579_31639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (15))){
var inst_31512 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
if(cljs.core.truth_(inst_31512)){
var statearr_31580_31640 = state_31567__$1;
(statearr_31580_31640[(1)] = (19));

} else {
var statearr_31581_31641 = state_31567__$1;
(statearr_31581_31641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (21))){
var inst_31517 = (state_31567[(12)]);
var inst_31517__$1 = (state_31567[(2)]);
var inst_31518 = cljs.core.get.call(null,inst_31517__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31519 = cljs.core.get.call(null,inst_31517__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31520 = cljs.core.get.call(null,inst_31517__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31567__$1 = (function (){var statearr_31582 = state_31567;
(statearr_31582[(12)] = inst_31517__$1);

(statearr_31582[(13)] = inst_31519);

(statearr_31582[(11)] = inst_31518);

return statearr_31582;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31567__$1,(22),inst_31520);
} else {
if((state_val_31568 === (31))){
var inst_31549 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
if(cljs.core.truth_(inst_31549)){
var statearr_31583_31642 = state_31567__$1;
(statearr_31583_31642[(1)] = (32));

} else {
var statearr_31584_31643 = state_31567__$1;
(statearr_31584_31643[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (32))){
var inst_31526 = (state_31567[(14)]);
var state_31567__$1 = state_31567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31567__$1,(35),out,inst_31526);
} else {
if((state_val_31568 === (33))){
var inst_31517 = (state_31567[(12)]);
var inst_31495 = inst_31517;
var state_31567__$1 = (function (){var statearr_31585 = state_31567;
(statearr_31585[(7)] = inst_31495);

return statearr_31585;
})();
var statearr_31586_31644 = state_31567__$1;
(statearr_31586_31644[(2)] = null);

(statearr_31586_31644[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (13))){
var inst_31495 = (state_31567[(7)]);
var inst_31502 = inst_31495.cljs$lang$protocol_mask$partition0$;
var inst_31503 = (inst_31502 & (64));
var inst_31504 = inst_31495.cljs$core$ISeq$;
var inst_31505 = (inst_31503) || (inst_31504);
var state_31567__$1 = state_31567;
if(cljs.core.truth_(inst_31505)){
var statearr_31587_31645 = state_31567__$1;
(statearr_31587_31645[(1)] = (16));

} else {
var statearr_31588_31646 = state_31567__$1;
(statearr_31588_31646[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (22))){
var inst_31527 = (state_31567[(10)]);
var inst_31526 = (state_31567[(14)]);
var inst_31525 = (state_31567[(2)]);
var inst_31526__$1 = cljs.core.nth.call(null,inst_31525,(0),null);
var inst_31527__$1 = cljs.core.nth.call(null,inst_31525,(1),null);
var inst_31528 = (inst_31526__$1 == null);
var inst_31529 = cljs.core._EQ_.call(null,inst_31527__$1,change);
var inst_31530 = (inst_31528) || (inst_31529);
var state_31567__$1 = (function (){var statearr_31589 = state_31567;
(statearr_31589[(10)] = inst_31527__$1);

(statearr_31589[(14)] = inst_31526__$1);

return statearr_31589;
})();
if(cljs.core.truth_(inst_31530)){
var statearr_31590_31647 = state_31567__$1;
(statearr_31590_31647[(1)] = (23));

} else {
var statearr_31591_31648 = state_31567__$1;
(statearr_31591_31648[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (36))){
var inst_31517 = (state_31567[(12)]);
var inst_31495 = inst_31517;
var state_31567__$1 = (function (){var statearr_31592 = state_31567;
(statearr_31592[(7)] = inst_31495);

return statearr_31592;
})();
var statearr_31593_31649 = state_31567__$1;
(statearr_31593_31649[(2)] = null);

(statearr_31593_31649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (29))){
var inst_31541 = (state_31567[(9)]);
var state_31567__$1 = state_31567;
var statearr_31594_31650 = state_31567__$1;
(statearr_31594_31650[(2)] = inst_31541);

(statearr_31594_31650[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (6))){
var state_31567__$1 = state_31567;
var statearr_31595_31651 = state_31567__$1;
(statearr_31595_31651[(2)] = false);

(statearr_31595_31651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (28))){
var inst_31537 = (state_31567[(2)]);
var inst_31538 = calc_state.call(null);
var inst_31495 = inst_31538;
var state_31567__$1 = (function (){var statearr_31596 = state_31567;
(statearr_31596[(7)] = inst_31495);

(statearr_31596[(15)] = inst_31537);

return statearr_31596;
})();
var statearr_31597_31652 = state_31567__$1;
(statearr_31597_31652[(2)] = null);

(statearr_31597_31652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (25))){
var inst_31563 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31598_31653 = state_31567__$1;
(statearr_31598_31653[(2)] = inst_31563);

(statearr_31598_31653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (34))){
var inst_31561 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31599_31654 = state_31567__$1;
(statearr_31599_31654[(2)] = inst_31561);

(statearr_31599_31654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (17))){
var state_31567__$1 = state_31567;
var statearr_31600_31655 = state_31567__$1;
(statearr_31600_31655[(2)] = false);

(statearr_31600_31655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (3))){
var state_31567__$1 = state_31567;
var statearr_31601_31656 = state_31567__$1;
(statearr_31601_31656[(2)] = false);

(statearr_31601_31656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (12))){
var inst_31565 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31567__$1,inst_31565);
} else {
if((state_val_31568 === (2))){
var inst_31471 = (state_31567[(8)]);
var inst_31476 = inst_31471.cljs$lang$protocol_mask$partition0$;
var inst_31477 = (inst_31476 & (64));
var inst_31478 = inst_31471.cljs$core$ISeq$;
var inst_31479 = (inst_31477) || (inst_31478);
var state_31567__$1 = state_31567;
if(cljs.core.truth_(inst_31479)){
var statearr_31602_31657 = state_31567__$1;
(statearr_31602_31657[(1)] = (5));

} else {
var statearr_31603_31658 = state_31567__$1;
(statearr_31603_31658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (23))){
var inst_31526 = (state_31567[(14)]);
var inst_31532 = (inst_31526 == null);
var state_31567__$1 = state_31567;
if(cljs.core.truth_(inst_31532)){
var statearr_31604_31659 = state_31567__$1;
(statearr_31604_31659[(1)] = (26));

} else {
var statearr_31605_31660 = state_31567__$1;
(statearr_31605_31660[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (35))){
var inst_31552 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
if(cljs.core.truth_(inst_31552)){
var statearr_31606_31661 = state_31567__$1;
(statearr_31606_31661[(1)] = (36));

} else {
var statearr_31607_31662 = state_31567__$1;
(statearr_31607_31662[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (19))){
var inst_31495 = (state_31567[(7)]);
var inst_31514 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31495);
var state_31567__$1 = state_31567;
var statearr_31608_31663 = state_31567__$1;
(statearr_31608_31663[(2)] = inst_31514);

(statearr_31608_31663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (11))){
var inst_31495 = (state_31567[(7)]);
var inst_31499 = (inst_31495 == null);
var inst_31500 = cljs.core.not.call(null,inst_31499);
var state_31567__$1 = state_31567;
if(inst_31500){
var statearr_31609_31664 = state_31567__$1;
(statearr_31609_31664[(1)] = (13));

} else {
var statearr_31610_31665 = state_31567__$1;
(statearr_31610_31665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (9))){
var inst_31471 = (state_31567[(8)]);
var state_31567__$1 = state_31567;
var statearr_31611_31666 = state_31567__$1;
(statearr_31611_31666[(2)] = inst_31471);

(statearr_31611_31666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (5))){
var state_31567__$1 = state_31567;
var statearr_31612_31667 = state_31567__$1;
(statearr_31612_31667[(2)] = true);

(statearr_31612_31667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (14))){
var state_31567__$1 = state_31567;
var statearr_31613_31668 = state_31567__$1;
(statearr_31613_31668[(2)] = false);

(statearr_31613_31668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (26))){
var inst_31527 = (state_31567[(10)]);
var inst_31534 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31527);
var state_31567__$1 = state_31567;
var statearr_31614_31669 = state_31567__$1;
(statearr_31614_31669[(2)] = inst_31534);

(statearr_31614_31669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (16))){
var state_31567__$1 = state_31567;
var statearr_31615_31670 = state_31567__$1;
(statearr_31615_31670[(2)] = true);

(statearr_31615_31670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (38))){
var inst_31557 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31616_31671 = state_31567__$1;
(statearr_31616_31671[(2)] = inst_31557);

(statearr_31616_31671[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (30))){
var inst_31527 = (state_31567[(10)]);
var inst_31519 = (state_31567[(13)]);
var inst_31518 = (state_31567[(11)]);
var inst_31544 = cljs.core.empty_QMARK_.call(null,inst_31518);
var inst_31545 = inst_31519.call(null,inst_31527);
var inst_31546 = cljs.core.not.call(null,inst_31545);
var inst_31547 = (inst_31544) && (inst_31546);
var state_31567__$1 = state_31567;
var statearr_31617_31672 = state_31567__$1;
(statearr_31617_31672[(2)] = inst_31547);

(statearr_31617_31672[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (10))){
var inst_31471 = (state_31567[(8)]);
var inst_31491 = (state_31567[(2)]);
var inst_31492 = cljs.core.get.call(null,inst_31491,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31493 = cljs.core.get.call(null,inst_31491,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31494 = cljs.core.get.call(null,inst_31491,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31495 = inst_31471;
var state_31567__$1 = (function (){var statearr_31618 = state_31567;
(statearr_31618[(16)] = inst_31492);

(statearr_31618[(17)] = inst_31494);

(statearr_31618[(7)] = inst_31495);

(statearr_31618[(18)] = inst_31493);

return statearr_31618;
})();
var statearr_31619_31673 = state_31567__$1;
(statearr_31619_31673[(2)] = null);

(statearr_31619_31673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (18))){
var inst_31509 = (state_31567[(2)]);
var state_31567__$1 = state_31567;
var statearr_31620_31674 = state_31567__$1;
(statearr_31620_31674[(2)] = inst_31509);

(statearr_31620_31674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (37))){
var state_31567__$1 = state_31567;
var statearr_31621_31675 = state_31567__$1;
(statearr_31621_31675[(2)] = null);

(statearr_31621_31675[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31568 === (8))){
var inst_31471 = (state_31567[(8)]);
var inst_31488 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31471);
var state_31567__$1 = state_31567;
var statearr_31622_31676 = state_31567__$1;
(statearr_31622_31676[(2)] = inst_31488);

(statearr_31622_31676[(1)] = (10));


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
});})(c__28171__auto___31630,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28150__auto__,c__28171__auto___31630,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28151__auto__ = null;
var cljs$core$async$mix_$_state_machine__28151__auto____0 = (function (){
var statearr_31626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31626[(0)] = cljs$core$async$mix_$_state_machine__28151__auto__);

(statearr_31626[(1)] = (1));

return statearr_31626;
});
var cljs$core$async$mix_$_state_machine__28151__auto____1 = (function (state_31567){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_31567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e31627){if((e31627 instanceof Object)){
var ex__28154__auto__ = e31627;
var statearr_31628_31677 = state_31567;
(statearr_31628_31677[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31678 = state_31567;
state_31567 = G__31678;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28151__auto__ = function(state_31567){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28151__auto____1.call(this,state_31567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28151__auto____0;
cljs$core$async$mix_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28151__auto____1;
return cljs$core$async$mix_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___31630,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28173__auto__ = (function (){var statearr_31629 = f__28172__auto__.call(null);
(statearr_31629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___31630);

return statearr_31629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___31630,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args31679 = [];
var len__27054__auto___31682 = arguments.length;
var i__27055__auto___31683 = (0);
while(true){
if((i__27055__auto___31683 < len__27054__auto___31682)){
args31679.push((arguments[i__27055__auto___31683]));

var G__31684 = (i__27055__auto___31683 + (1));
i__27055__auto___31683 = G__31684;
continue;
} else {
}
break;
}

var G__31681 = args31679.length;
switch (G__31681) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31679.length)].join('')));

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
var args31687 = [];
var len__27054__auto___31812 = arguments.length;
var i__27055__auto___31813 = (0);
while(true){
if((i__27055__auto___31813 < len__27054__auto___31812)){
args31687.push((arguments[i__27055__auto___31813]));

var G__31814 = (i__27055__auto___31813 + (1));
i__27055__auto___31813 = G__31814;
continue;
} else {
}
break;
}

var G__31689 = args31687.length;
switch (G__31689) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31687.length)].join('')));

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
return (function (p1__31686_SHARP_){
if(cljs.core.truth_(p1__31686_SHARP_.call(null,topic))){
return p1__31686_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31686_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31690 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31690 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31691){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31691 = meta31691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31692,meta31691__$1){
var self__ = this;
var _31692__$1 = this;
return (new cljs.core.async.t_cljs$core$async31690(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31691__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31692){
var self__ = this;
var _31692__$1 = this;
return self__.meta31691;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31690.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31690.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31690.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31690.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31690.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31690.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31690.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31691","meta31691",2106594450,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31690.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31690";

cljs.core.async.t_cljs$core$async31690.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31690");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31690 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31690(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31691){
return (new cljs.core.async.t_cljs$core$async31690(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31691));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31690(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28171__auto___31816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___31816,mults,ensure_mult,p){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___31816,mults,ensure_mult,p){
return (function (state_31764){
var state_val_31765 = (state_31764[(1)]);
if((state_val_31765 === (7))){
var inst_31760 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
var statearr_31766_31817 = state_31764__$1;
(statearr_31766_31817[(2)] = inst_31760);

(statearr_31766_31817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (20))){
var state_31764__$1 = state_31764;
var statearr_31767_31818 = state_31764__$1;
(statearr_31767_31818[(2)] = null);

(statearr_31767_31818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (1))){
var state_31764__$1 = state_31764;
var statearr_31768_31819 = state_31764__$1;
(statearr_31768_31819[(2)] = null);

(statearr_31768_31819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (24))){
var inst_31743 = (state_31764[(7)]);
var inst_31752 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31743);
var state_31764__$1 = state_31764;
var statearr_31769_31820 = state_31764__$1;
(statearr_31769_31820[(2)] = inst_31752);

(statearr_31769_31820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (4))){
var inst_31695 = (state_31764[(8)]);
var inst_31695__$1 = (state_31764[(2)]);
var inst_31696 = (inst_31695__$1 == null);
var state_31764__$1 = (function (){var statearr_31770 = state_31764;
(statearr_31770[(8)] = inst_31695__$1);

return statearr_31770;
})();
if(cljs.core.truth_(inst_31696)){
var statearr_31771_31821 = state_31764__$1;
(statearr_31771_31821[(1)] = (5));

} else {
var statearr_31772_31822 = state_31764__$1;
(statearr_31772_31822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (15))){
var inst_31737 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
var statearr_31773_31823 = state_31764__$1;
(statearr_31773_31823[(2)] = inst_31737);

(statearr_31773_31823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (21))){
var inst_31757 = (state_31764[(2)]);
var state_31764__$1 = (function (){var statearr_31774 = state_31764;
(statearr_31774[(9)] = inst_31757);

return statearr_31774;
})();
var statearr_31775_31824 = state_31764__$1;
(statearr_31775_31824[(2)] = null);

(statearr_31775_31824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (13))){
var inst_31719 = (state_31764[(10)]);
var inst_31721 = cljs.core.chunked_seq_QMARK_.call(null,inst_31719);
var state_31764__$1 = state_31764;
if(inst_31721){
var statearr_31776_31825 = state_31764__$1;
(statearr_31776_31825[(1)] = (16));

} else {
var statearr_31777_31826 = state_31764__$1;
(statearr_31777_31826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (22))){
var inst_31749 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
if(cljs.core.truth_(inst_31749)){
var statearr_31778_31827 = state_31764__$1;
(statearr_31778_31827[(1)] = (23));

} else {
var statearr_31779_31828 = state_31764__$1;
(statearr_31779_31828[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (6))){
var inst_31745 = (state_31764[(11)]);
var inst_31695 = (state_31764[(8)]);
var inst_31743 = (state_31764[(7)]);
var inst_31743__$1 = topic_fn.call(null,inst_31695);
var inst_31744 = cljs.core.deref.call(null,mults);
var inst_31745__$1 = cljs.core.get.call(null,inst_31744,inst_31743__$1);
var state_31764__$1 = (function (){var statearr_31780 = state_31764;
(statearr_31780[(11)] = inst_31745__$1);

(statearr_31780[(7)] = inst_31743__$1);

return statearr_31780;
})();
if(cljs.core.truth_(inst_31745__$1)){
var statearr_31781_31829 = state_31764__$1;
(statearr_31781_31829[(1)] = (19));

} else {
var statearr_31782_31830 = state_31764__$1;
(statearr_31782_31830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (25))){
var inst_31754 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
var statearr_31783_31831 = state_31764__$1;
(statearr_31783_31831[(2)] = inst_31754);

(statearr_31783_31831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (17))){
var inst_31719 = (state_31764[(10)]);
var inst_31728 = cljs.core.first.call(null,inst_31719);
var inst_31729 = cljs.core.async.muxch_STAR_.call(null,inst_31728);
var inst_31730 = cljs.core.async.close_BANG_.call(null,inst_31729);
var inst_31731 = cljs.core.next.call(null,inst_31719);
var inst_31705 = inst_31731;
var inst_31706 = null;
var inst_31707 = (0);
var inst_31708 = (0);
var state_31764__$1 = (function (){var statearr_31784 = state_31764;
(statearr_31784[(12)] = inst_31707);

(statearr_31784[(13)] = inst_31708);

(statearr_31784[(14)] = inst_31705);

(statearr_31784[(15)] = inst_31730);

(statearr_31784[(16)] = inst_31706);

return statearr_31784;
})();
var statearr_31785_31832 = state_31764__$1;
(statearr_31785_31832[(2)] = null);

(statearr_31785_31832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (3))){
var inst_31762 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31764__$1,inst_31762);
} else {
if((state_val_31765 === (12))){
var inst_31739 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
var statearr_31786_31833 = state_31764__$1;
(statearr_31786_31833[(2)] = inst_31739);

(statearr_31786_31833[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (2))){
var state_31764__$1 = state_31764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31764__$1,(4),ch);
} else {
if((state_val_31765 === (23))){
var state_31764__$1 = state_31764;
var statearr_31787_31834 = state_31764__$1;
(statearr_31787_31834[(2)] = null);

(statearr_31787_31834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (19))){
var inst_31745 = (state_31764[(11)]);
var inst_31695 = (state_31764[(8)]);
var inst_31747 = cljs.core.async.muxch_STAR_.call(null,inst_31745);
var state_31764__$1 = state_31764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31764__$1,(22),inst_31747,inst_31695);
} else {
if((state_val_31765 === (11))){
var inst_31705 = (state_31764[(14)]);
var inst_31719 = (state_31764[(10)]);
var inst_31719__$1 = cljs.core.seq.call(null,inst_31705);
var state_31764__$1 = (function (){var statearr_31788 = state_31764;
(statearr_31788[(10)] = inst_31719__$1);

return statearr_31788;
})();
if(inst_31719__$1){
var statearr_31789_31835 = state_31764__$1;
(statearr_31789_31835[(1)] = (13));

} else {
var statearr_31790_31836 = state_31764__$1;
(statearr_31790_31836[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (9))){
var inst_31741 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
var statearr_31791_31837 = state_31764__$1;
(statearr_31791_31837[(2)] = inst_31741);

(statearr_31791_31837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (5))){
var inst_31702 = cljs.core.deref.call(null,mults);
var inst_31703 = cljs.core.vals.call(null,inst_31702);
var inst_31704 = cljs.core.seq.call(null,inst_31703);
var inst_31705 = inst_31704;
var inst_31706 = null;
var inst_31707 = (0);
var inst_31708 = (0);
var state_31764__$1 = (function (){var statearr_31792 = state_31764;
(statearr_31792[(12)] = inst_31707);

(statearr_31792[(13)] = inst_31708);

(statearr_31792[(14)] = inst_31705);

(statearr_31792[(16)] = inst_31706);

return statearr_31792;
})();
var statearr_31793_31838 = state_31764__$1;
(statearr_31793_31838[(2)] = null);

(statearr_31793_31838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (14))){
var state_31764__$1 = state_31764;
var statearr_31797_31839 = state_31764__$1;
(statearr_31797_31839[(2)] = null);

(statearr_31797_31839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (16))){
var inst_31719 = (state_31764[(10)]);
var inst_31723 = cljs.core.chunk_first.call(null,inst_31719);
var inst_31724 = cljs.core.chunk_rest.call(null,inst_31719);
var inst_31725 = cljs.core.count.call(null,inst_31723);
var inst_31705 = inst_31724;
var inst_31706 = inst_31723;
var inst_31707 = inst_31725;
var inst_31708 = (0);
var state_31764__$1 = (function (){var statearr_31798 = state_31764;
(statearr_31798[(12)] = inst_31707);

(statearr_31798[(13)] = inst_31708);

(statearr_31798[(14)] = inst_31705);

(statearr_31798[(16)] = inst_31706);

return statearr_31798;
})();
var statearr_31799_31840 = state_31764__$1;
(statearr_31799_31840[(2)] = null);

(statearr_31799_31840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (10))){
var inst_31707 = (state_31764[(12)]);
var inst_31708 = (state_31764[(13)]);
var inst_31705 = (state_31764[(14)]);
var inst_31706 = (state_31764[(16)]);
var inst_31713 = cljs.core._nth.call(null,inst_31706,inst_31708);
var inst_31714 = cljs.core.async.muxch_STAR_.call(null,inst_31713);
var inst_31715 = cljs.core.async.close_BANG_.call(null,inst_31714);
var inst_31716 = (inst_31708 + (1));
var tmp31794 = inst_31707;
var tmp31795 = inst_31705;
var tmp31796 = inst_31706;
var inst_31705__$1 = tmp31795;
var inst_31706__$1 = tmp31796;
var inst_31707__$1 = tmp31794;
var inst_31708__$1 = inst_31716;
var state_31764__$1 = (function (){var statearr_31800 = state_31764;
(statearr_31800[(12)] = inst_31707__$1);

(statearr_31800[(13)] = inst_31708__$1);

(statearr_31800[(14)] = inst_31705__$1);

(statearr_31800[(17)] = inst_31715);

(statearr_31800[(16)] = inst_31706__$1);

return statearr_31800;
})();
var statearr_31801_31841 = state_31764__$1;
(statearr_31801_31841[(2)] = null);

(statearr_31801_31841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (18))){
var inst_31734 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
var statearr_31802_31842 = state_31764__$1;
(statearr_31802_31842[(2)] = inst_31734);

(statearr_31802_31842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (8))){
var inst_31707 = (state_31764[(12)]);
var inst_31708 = (state_31764[(13)]);
var inst_31710 = (inst_31708 < inst_31707);
var inst_31711 = inst_31710;
var state_31764__$1 = state_31764;
if(cljs.core.truth_(inst_31711)){
var statearr_31803_31843 = state_31764__$1;
(statearr_31803_31843[(1)] = (10));

} else {
var statearr_31804_31844 = state_31764__$1;
(statearr_31804_31844[(1)] = (11));

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
});})(c__28171__auto___31816,mults,ensure_mult,p))
;
return ((function (switch__28150__auto__,c__28171__auto___31816,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_31808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31808[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_31808[(1)] = (1));

return statearr_31808;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_31764){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_31764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e31809){if((e31809 instanceof Object)){
var ex__28154__auto__ = e31809;
var statearr_31810_31845 = state_31764;
(statearr_31810_31845[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31846 = state_31764;
state_31764 = G__31846;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_31764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_31764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___31816,mults,ensure_mult,p))
})();
var state__28173__auto__ = (function (){var statearr_31811 = f__28172__auto__.call(null);
(statearr_31811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___31816);

return statearr_31811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___31816,mults,ensure_mult,p))
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
var args31847 = [];
var len__27054__auto___31850 = arguments.length;
var i__27055__auto___31851 = (0);
while(true){
if((i__27055__auto___31851 < len__27054__auto___31850)){
args31847.push((arguments[i__27055__auto___31851]));

var G__31852 = (i__27055__auto___31851 + (1));
i__27055__auto___31851 = G__31852;
continue;
} else {
}
break;
}

var G__31849 = args31847.length;
switch (G__31849) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31847.length)].join('')));

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
var args31854 = [];
var len__27054__auto___31857 = arguments.length;
var i__27055__auto___31858 = (0);
while(true){
if((i__27055__auto___31858 < len__27054__auto___31857)){
args31854.push((arguments[i__27055__auto___31858]));

var G__31859 = (i__27055__auto___31858 + (1));
i__27055__auto___31858 = G__31859;
continue;
} else {
}
break;
}

var G__31856 = args31854.length;
switch (G__31856) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31854.length)].join('')));

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
var args31861 = [];
var len__27054__auto___31932 = arguments.length;
var i__27055__auto___31933 = (0);
while(true){
if((i__27055__auto___31933 < len__27054__auto___31932)){
args31861.push((arguments[i__27055__auto___31933]));

var G__31934 = (i__27055__auto___31933 + (1));
i__27055__auto___31933 = G__31934;
continue;
} else {
}
break;
}

var G__31863 = args31861.length;
switch (G__31863) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31861.length)].join('')));

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
var c__28171__auto___31936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___31936,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___31936,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31902){
var state_val_31903 = (state_31902[(1)]);
if((state_val_31903 === (7))){
var state_31902__$1 = state_31902;
var statearr_31904_31937 = state_31902__$1;
(statearr_31904_31937[(2)] = null);

(statearr_31904_31937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (1))){
var state_31902__$1 = state_31902;
var statearr_31905_31938 = state_31902__$1;
(statearr_31905_31938[(2)] = null);

(statearr_31905_31938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (4))){
var inst_31866 = (state_31902[(7)]);
var inst_31868 = (inst_31866 < cnt);
var state_31902__$1 = state_31902;
if(cljs.core.truth_(inst_31868)){
var statearr_31906_31939 = state_31902__$1;
(statearr_31906_31939[(1)] = (6));

} else {
var statearr_31907_31940 = state_31902__$1;
(statearr_31907_31940[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (15))){
var inst_31898 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
var statearr_31908_31941 = state_31902__$1;
(statearr_31908_31941[(2)] = inst_31898);

(statearr_31908_31941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (13))){
var inst_31891 = cljs.core.async.close_BANG_.call(null,out);
var state_31902__$1 = state_31902;
var statearr_31909_31942 = state_31902__$1;
(statearr_31909_31942[(2)] = inst_31891);

(statearr_31909_31942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (6))){
var state_31902__$1 = state_31902;
var statearr_31910_31943 = state_31902__$1;
(statearr_31910_31943[(2)] = null);

(statearr_31910_31943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (3))){
var inst_31900 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31902__$1,inst_31900);
} else {
if((state_val_31903 === (12))){
var inst_31888 = (state_31902[(8)]);
var inst_31888__$1 = (state_31902[(2)]);
var inst_31889 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31888__$1);
var state_31902__$1 = (function (){var statearr_31911 = state_31902;
(statearr_31911[(8)] = inst_31888__$1);

return statearr_31911;
})();
if(cljs.core.truth_(inst_31889)){
var statearr_31912_31944 = state_31902__$1;
(statearr_31912_31944[(1)] = (13));

} else {
var statearr_31913_31945 = state_31902__$1;
(statearr_31913_31945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (2))){
var inst_31865 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31866 = (0);
var state_31902__$1 = (function (){var statearr_31914 = state_31902;
(statearr_31914[(7)] = inst_31866);

(statearr_31914[(9)] = inst_31865);

return statearr_31914;
})();
var statearr_31915_31946 = state_31902__$1;
(statearr_31915_31946[(2)] = null);

(statearr_31915_31946[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (11))){
var inst_31866 = (state_31902[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31902,(10),Object,null,(9));
var inst_31875 = chs__$1.call(null,inst_31866);
var inst_31876 = done.call(null,inst_31866);
var inst_31877 = cljs.core.async.take_BANG_.call(null,inst_31875,inst_31876);
var state_31902__$1 = state_31902;
var statearr_31916_31947 = state_31902__$1;
(statearr_31916_31947[(2)] = inst_31877);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31902__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (9))){
var inst_31866 = (state_31902[(7)]);
var inst_31879 = (state_31902[(2)]);
var inst_31880 = (inst_31866 + (1));
var inst_31866__$1 = inst_31880;
var state_31902__$1 = (function (){var statearr_31917 = state_31902;
(statearr_31917[(10)] = inst_31879);

(statearr_31917[(7)] = inst_31866__$1);

return statearr_31917;
})();
var statearr_31918_31948 = state_31902__$1;
(statearr_31918_31948[(2)] = null);

(statearr_31918_31948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (5))){
var inst_31886 = (state_31902[(2)]);
var state_31902__$1 = (function (){var statearr_31919 = state_31902;
(statearr_31919[(11)] = inst_31886);

return statearr_31919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31902__$1,(12),dchan);
} else {
if((state_val_31903 === (14))){
var inst_31888 = (state_31902[(8)]);
var inst_31893 = cljs.core.apply.call(null,f,inst_31888);
var state_31902__$1 = state_31902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31902__$1,(16),out,inst_31893);
} else {
if((state_val_31903 === (16))){
var inst_31895 = (state_31902[(2)]);
var state_31902__$1 = (function (){var statearr_31920 = state_31902;
(statearr_31920[(12)] = inst_31895);

return statearr_31920;
})();
var statearr_31921_31949 = state_31902__$1;
(statearr_31921_31949[(2)] = null);

(statearr_31921_31949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (10))){
var inst_31870 = (state_31902[(2)]);
var inst_31871 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31902__$1 = (function (){var statearr_31922 = state_31902;
(statearr_31922[(13)] = inst_31870);

return statearr_31922;
})();
var statearr_31923_31950 = state_31902__$1;
(statearr_31923_31950[(2)] = inst_31871);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31902__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31903 === (8))){
var inst_31884 = (state_31902[(2)]);
var state_31902__$1 = state_31902;
var statearr_31924_31951 = state_31902__$1;
(statearr_31924_31951[(2)] = inst_31884);

(statearr_31924_31951[(1)] = (5));


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
});})(c__28171__auto___31936,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28150__auto__,c__28171__auto___31936,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_31928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31928[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_31928[(1)] = (1));

return statearr_31928;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_31902){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_31902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e31929){if((e31929 instanceof Object)){
var ex__28154__auto__ = e31929;
var statearr_31930_31952 = state_31902;
(statearr_31930_31952[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31953 = state_31902;
state_31902 = G__31953;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_31902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_31902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___31936,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28173__auto__ = (function (){var statearr_31931 = f__28172__auto__.call(null);
(statearr_31931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___31936);

return statearr_31931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___31936,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31955 = [];
var len__27054__auto___32013 = arguments.length;
var i__27055__auto___32014 = (0);
while(true){
if((i__27055__auto___32014 < len__27054__auto___32013)){
args31955.push((arguments[i__27055__auto___32014]));

var G__32015 = (i__27055__auto___32014 + (1));
i__27055__auto___32014 = G__32015;
continue;
} else {
}
break;
}

var G__31957 = args31955.length;
switch (G__31957) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31955.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28171__auto___32017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___32017,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___32017,out){
return (function (state_31989){
var state_val_31990 = (state_31989[(1)]);
if((state_val_31990 === (7))){
var inst_31969 = (state_31989[(7)]);
var inst_31968 = (state_31989[(8)]);
var inst_31968__$1 = (state_31989[(2)]);
var inst_31969__$1 = cljs.core.nth.call(null,inst_31968__$1,(0),null);
var inst_31970 = cljs.core.nth.call(null,inst_31968__$1,(1),null);
var inst_31971 = (inst_31969__$1 == null);
var state_31989__$1 = (function (){var statearr_31991 = state_31989;
(statearr_31991[(7)] = inst_31969__$1);

(statearr_31991[(8)] = inst_31968__$1);

(statearr_31991[(9)] = inst_31970);

return statearr_31991;
})();
if(cljs.core.truth_(inst_31971)){
var statearr_31992_32018 = state_31989__$1;
(statearr_31992_32018[(1)] = (8));

} else {
var statearr_31993_32019 = state_31989__$1;
(statearr_31993_32019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (1))){
var inst_31958 = cljs.core.vec.call(null,chs);
var inst_31959 = inst_31958;
var state_31989__$1 = (function (){var statearr_31994 = state_31989;
(statearr_31994[(10)] = inst_31959);

return statearr_31994;
})();
var statearr_31995_32020 = state_31989__$1;
(statearr_31995_32020[(2)] = null);

(statearr_31995_32020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (4))){
var inst_31959 = (state_31989[(10)]);
var state_31989__$1 = state_31989;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31989__$1,(7),inst_31959);
} else {
if((state_val_31990 === (6))){
var inst_31985 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_31996_32021 = state_31989__$1;
(statearr_31996_32021[(2)] = inst_31985);

(statearr_31996_32021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (3))){
var inst_31987 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31989__$1,inst_31987);
} else {
if((state_val_31990 === (2))){
var inst_31959 = (state_31989[(10)]);
var inst_31961 = cljs.core.count.call(null,inst_31959);
var inst_31962 = (inst_31961 > (0));
var state_31989__$1 = state_31989;
if(cljs.core.truth_(inst_31962)){
var statearr_31998_32022 = state_31989__$1;
(statearr_31998_32022[(1)] = (4));

} else {
var statearr_31999_32023 = state_31989__$1;
(statearr_31999_32023[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (11))){
var inst_31959 = (state_31989[(10)]);
var inst_31978 = (state_31989[(2)]);
var tmp31997 = inst_31959;
var inst_31959__$1 = tmp31997;
var state_31989__$1 = (function (){var statearr_32000 = state_31989;
(statearr_32000[(10)] = inst_31959__$1);

(statearr_32000[(11)] = inst_31978);

return statearr_32000;
})();
var statearr_32001_32024 = state_31989__$1;
(statearr_32001_32024[(2)] = null);

(statearr_32001_32024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (9))){
var inst_31969 = (state_31989[(7)]);
var state_31989__$1 = state_31989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31989__$1,(11),out,inst_31969);
} else {
if((state_val_31990 === (5))){
var inst_31983 = cljs.core.async.close_BANG_.call(null,out);
var state_31989__$1 = state_31989;
var statearr_32002_32025 = state_31989__$1;
(statearr_32002_32025[(2)] = inst_31983);

(statearr_32002_32025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (10))){
var inst_31981 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_32003_32026 = state_31989__$1;
(statearr_32003_32026[(2)] = inst_31981);

(statearr_32003_32026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (8))){
var inst_31969 = (state_31989[(7)]);
var inst_31968 = (state_31989[(8)]);
var inst_31970 = (state_31989[(9)]);
var inst_31959 = (state_31989[(10)]);
var inst_31973 = (function (){var cs = inst_31959;
var vec__31964 = inst_31968;
var v = inst_31969;
var c = inst_31970;
return ((function (cs,vec__31964,v,c,inst_31969,inst_31968,inst_31970,inst_31959,state_val_31990,c__28171__auto___32017,out){
return (function (p1__31954_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31954_SHARP_);
});
;})(cs,vec__31964,v,c,inst_31969,inst_31968,inst_31970,inst_31959,state_val_31990,c__28171__auto___32017,out))
})();
var inst_31974 = cljs.core.filterv.call(null,inst_31973,inst_31959);
var inst_31959__$1 = inst_31974;
var state_31989__$1 = (function (){var statearr_32004 = state_31989;
(statearr_32004[(10)] = inst_31959__$1);

return statearr_32004;
})();
var statearr_32005_32027 = state_31989__$1;
(statearr_32005_32027[(2)] = null);

(statearr_32005_32027[(1)] = (2));


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
});})(c__28171__auto___32017,out))
;
return ((function (switch__28150__auto__,c__28171__auto___32017,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_32009 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32009[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_32009[(1)] = (1));

return statearr_32009;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_31989){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_31989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e32010){if((e32010 instanceof Object)){
var ex__28154__auto__ = e32010;
var statearr_32011_32028 = state_31989;
(statearr_32011_32028[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32029 = state_31989;
state_31989 = G__32029;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_31989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_31989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___32017,out))
})();
var state__28173__auto__ = (function (){var statearr_32012 = f__28172__auto__.call(null);
(statearr_32012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___32017);

return statearr_32012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___32017,out))
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
var args32030 = [];
var len__27054__auto___32079 = arguments.length;
var i__27055__auto___32080 = (0);
while(true){
if((i__27055__auto___32080 < len__27054__auto___32079)){
args32030.push((arguments[i__27055__auto___32080]));

var G__32081 = (i__27055__auto___32080 + (1));
i__27055__auto___32080 = G__32081;
continue;
} else {
}
break;
}

var G__32032 = args32030.length;
switch (G__32032) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32030.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28171__auto___32083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___32083,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___32083,out){
return (function (state_32056){
var state_val_32057 = (state_32056[(1)]);
if((state_val_32057 === (7))){
var inst_32038 = (state_32056[(7)]);
var inst_32038__$1 = (state_32056[(2)]);
var inst_32039 = (inst_32038__$1 == null);
var inst_32040 = cljs.core.not.call(null,inst_32039);
var state_32056__$1 = (function (){var statearr_32058 = state_32056;
(statearr_32058[(7)] = inst_32038__$1);

return statearr_32058;
})();
if(inst_32040){
var statearr_32059_32084 = state_32056__$1;
(statearr_32059_32084[(1)] = (8));

} else {
var statearr_32060_32085 = state_32056__$1;
(statearr_32060_32085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (1))){
var inst_32033 = (0);
var state_32056__$1 = (function (){var statearr_32061 = state_32056;
(statearr_32061[(8)] = inst_32033);

return statearr_32061;
})();
var statearr_32062_32086 = state_32056__$1;
(statearr_32062_32086[(2)] = null);

(statearr_32062_32086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (4))){
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32056__$1,(7),ch);
} else {
if((state_val_32057 === (6))){
var inst_32051 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32063_32087 = state_32056__$1;
(statearr_32063_32087[(2)] = inst_32051);

(statearr_32063_32087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (3))){
var inst_32053 = (state_32056[(2)]);
var inst_32054 = cljs.core.async.close_BANG_.call(null,out);
var state_32056__$1 = (function (){var statearr_32064 = state_32056;
(statearr_32064[(9)] = inst_32053);

return statearr_32064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32056__$1,inst_32054);
} else {
if((state_val_32057 === (2))){
var inst_32033 = (state_32056[(8)]);
var inst_32035 = (inst_32033 < n);
var state_32056__$1 = state_32056;
if(cljs.core.truth_(inst_32035)){
var statearr_32065_32088 = state_32056__$1;
(statearr_32065_32088[(1)] = (4));

} else {
var statearr_32066_32089 = state_32056__$1;
(statearr_32066_32089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (11))){
var inst_32033 = (state_32056[(8)]);
var inst_32043 = (state_32056[(2)]);
var inst_32044 = (inst_32033 + (1));
var inst_32033__$1 = inst_32044;
var state_32056__$1 = (function (){var statearr_32067 = state_32056;
(statearr_32067[(10)] = inst_32043);

(statearr_32067[(8)] = inst_32033__$1);

return statearr_32067;
})();
var statearr_32068_32090 = state_32056__$1;
(statearr_32068_32090[(2)] = null);

(statearr_32068_32090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (9))){
var state_32056__$1 = state_32056;
var statearr_32069_32091 = state_32056__$1;
(statearr_32069_32091[(2)] = null);

(statearr_32069_32091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (5))){
var state_32056__$1 = state_32056;
var statearr_32070_32092 = state_32056__$1;
(statearr_32070_32092[(2)] = null);

(statearr_32070_32092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (10))){
var inst_32048 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32071_32093 = state_32056__$1;
(statearr_32071_32093[(2)] = inst_32048);

(statearr_32071_32093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (8))){
var inst_32038 = (state_32056[(7)]);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32056__$1,(11),out,inst_32038);
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
});})(c__28171__auto___32083,out))
;
return ((function (switch__28150__auto__,c__28171__auto___32083,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_32075 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32075[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_32075[(1)] = (1));

return statearr_32075;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_32056){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_32056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e32076){if((e32076 instanceof Object)){
var ex__28154__auto__ = e32076;
var statearr_32077_32094 = state_32056;
(statearr_32077_32094[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32095 = state_32056;
state_32056 = G__32095;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_32056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_32056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___32083,out))
})();
var state__28173__auto__ = (function (){var statearr_32078 = f__28172__auto__.call(null);
(statearr_32078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___32083);

return statearr_32078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___32083,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32103 = (function (map_LT_,f,ch,meta32104){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32104 = meta32104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32105,meta32104__$1){
var self__ = this;
var _32105__$1 = this;
return (new cljs.core.async.t_cljs$core$async32103(self__.map_LT_,self__.f,self__.ch,meta32104__$1));
});

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32105){
var self__ = this;
var _32105__$1 = this;
return self__.meta32104;
});

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32106 = (function (map_LT_,f,ch,meta32104,_,fn1,meta32107){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32104 = meta32104;
this._ = _;
this.fn1 = fn1;
this.meta32107 = meta32107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32108,meta32107__$1){
var self__ = this;
var _32108__$1 = this;
return (new cljs.core.async.t_cljs$core$async32106(self__.map_LT_,self__.f,self__.ch,self__.meta32104,self__._,self__.fn1,meta32107__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32108){
var self__ = this;
var _32108__$1 = this;
return self__.meta32107;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32096_SHARP_){
return f1.call(null,(((p1__32096_SHARP_ == null))?null:self__.f.call(null,p1__32096_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32106.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32104","meta32104",-1397527396,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32103","cljs.core.async/t_cljs$core$async32103",-2083884396,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32107","meta32107",431459929,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32106";

cljs.core.async.t_cljs$core$async32106.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async32106");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32106 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32106(map_LT___$1,f__$1,ch__$1,meta32104__$1,___$2,fn1__$1,meta32107){
return (new cljs.core.async.t_cljs$core$async32106(map_LT___$1,f__$1,ch__$1,meta32104__$1,___$2,fn1__$1,meta32107));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32106(self__.map_LT_,self__.f,self__.ch,self__.meta32104,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32104","meta32104",-1397527396,null)], null);
});

cljs.core.async.t_cljs$core$async32103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32103";

cljs.core.async.t_cljs$core$async32103.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async32103");
});

cljs.core.async.__GT_t_cljs$core$async32103 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32103(map_LT___$1,f__$1,ch__$1,meta32104){
return (new cljs.core.async.t_cljs$core$async32103(map_LT___$1,f__$1,ch__$1,meta32104));
});

}

return (new cljs.core.async.t_cljs$core$async32103(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32112 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32112 = (function (map_GT_,f,ch,meta32113){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32113 = meta32113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32114,meta32113__$1){
var self__ = this;
var _32114__$1 = this;
return (new cljs.core.async.t_cljs$core$async32112(self__.map_GT_,self__.f,self__.ch,meta32113__$1));
});

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32114){
var self__ = this;
var _32114__$1 = this;
return self__.meta32113;
});

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32113","meta32113",950322692,null)], null);
});

cljs.core.async.t_cljs$core$async32112.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32112";

cljs.core.async.t_cljs$core$async32112.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async32112");
});

cljs.core.async.__GT_t_cljs$core$async32112 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32112(map_GT___$1,f__$1,ch__$1,meta32113){
return (new cljs.core.async.t_cljs$core$async32112(map_GT___$1,f__$1,ch__$1,meta32113));
});

}

return (new cljs.core.async.t_cljs$core$async32112(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32118 = (function (filter_GT_,p,ch,meta32119){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32119 = meta32119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32120,meta32119__$1){
var self__ = this;
var _32120__$1 = this;
return (new cljs.core.async.t_cljs$core$async32118(self__.filter_GT_,self__.p,self__.ch,meta32119__$1));
});

cljs.core.async.t_cljs$core$async32118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32120){
var self__ = this;
var _32120__$1 = this;
return self__.meta32119;
});

cljs.core.async.t_cljs$core$async32118.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32118.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32118.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32118.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32118.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32118.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32118.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32119","meta32119",-846570278,null)], null);
});

cljs.core.async.t_cljs$core$async32118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32118";

cljs.core.async.t_cljs$core$async32118.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async32118");
});

cljs.core.async.__GT_t_cljs$core$async32118 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32118(filter_GT___$1,p__$1,ch__$1,meta32119){
return (new cljs.core.async.t_cljs$core$async32118(filter_GT___$1,p__$1,ch__$1,meta32119));
});

}

return (new cljs.core.async.t_cljs$core$async32118(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32121 = [];
var len__27054__auto___32165 = arguments.length;
var i__27055__auto___32166 = (0);
while(true){
if((i__27055__auto___32166 < len__27054__auto___32165)){
args32121.push((arguments[i__27055__auto___32166]));

var G__32167 = (i__27055__auto___32166 + (1));
i__27055__auto___32166 = G__32167;
continue;
} else {
}
break;
}

var G__32123 = args32121.length;
switch (G__32123) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32121.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28171__auto___32169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___32169,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___32169,out){
return (function (state_32144){
var state_val_32145 = (state_32144[(1)]);
if((state_val_32145 === (7))){
var inst_32140 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32146_32170 = state_32144__$1;
(statearr_32146_32170[(2)] = inst_32140);

(statearr_32146_32170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (1))){
var state_32144__$1 = state_32144;
var statearr_32147_32171 = state_32144__$1;
(statearr_32147_32171[(2)] = null);

(statearr_32147_32171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (4))){
var inst_32126 = (state_32144[(7)]);
var inst_32126__$1 = (state_32144[(2)]);
var inst_32127 = (inst_32126__$1 == null);
var state_32144__$1 = (function (){var statearr_32148 = state_32144;
(statearr_32148[(7)] = inst_32126__$1);

return statearr_32148;
})();
if(cljs.core.truth_(inst_32127)){
var statearr_32149_32172 = state_32144__$1;
(statearr_32149_32172[(1)] = (5));

} else {
var statearr_32150_32173 = state_32144__$1;
(statearr_32150_32173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (6))){
var inst_32126 = (state_32144[(7)]);
var inst_32131 = p.call(null,inst_32126);
var state_32144__$1 = state_32144;
if(cljs.core.truth_(inst_32131)){
var statearr_32151_32174 = state_32144__$1;
(statearr_32151_32174[(1)] = (8));

} else {
var statearr_32152_32175 = state_32144__$1;
(statearr_32152_32175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (3))){
var inst_32142 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32144__$1,inst_32142);
} else {
if((state_val_32145 === (2))){
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32144__$1,(4),ch);
} else {
if((state_val_32145 === (11))){
var inst_32134 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32153_32176 = state_32144__$1;
(statearr_32153_32176[(2)] = inst_32134);

(statearr_32153_32176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (9))){
var state_32144__$1 = state_32144;
var statearr_32154_32177 = state_32144__$1;
(statearr_32154_32177[(2)] = null);

(statearr_32154_32177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (5))){
var inst_32129 = cljs.core.async.close_BANG_.call(null,out);
var state_32144__$1 = state_32144;
var statearr_32155_32178 = state_32144__$1;
(statearr_32155_32178[(2)] = inst_32129);

(statearr_32155_32178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (10))){
var inst_32137 = (state_32144[(2)]);
var state_32144__$1 = (function (){var statearr_32156 = state_32144;
(statearr_32156[(8)] = inst_32137);

return statearr_32156;
})();
var statearr_32157_32179 = state_32144__$1;
(statearr_32157_32179[(2)] = null);

(statearr_32157_32179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (8))){
var inst_32126 = (state_32144[(7)]);
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32144__$1,(11),out,inst_32126);
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
});})(c__28171__auto___32169,out))
;
return ((function (switch__28150__auto__,c__28171__auto___32169,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_32161 = [null,null,null,null,null,null,null,null,null];
(statearr_32161[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_32161[(1)] = (1));

return statearr_32161;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_32144){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_32144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e32162){if((e32162 instanceof Object)){
var ex__28154__auto__ = e32162;
var statearr_32163_32180 = state_32144;
(statearr_32163_32180[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32181 = state_32144;
state_32144 = G__32181;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_32144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_32144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___32169,out))
})();
var state__28173__auto__ = (function (){var statearr_32164 = f__28172__auto__.call(null);
(statearr_32164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___32169);

return statearr_32164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___32169,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32182 = [];
var len__27054__auto___32185 = arguments.length;
var i__27055__auto___32186 = (0);
while(true){
if((i__27055__auto___32186 < len__27054__auto___32185)){
args32182.push((arguments[i__27055__auto___32186]));

var G__32187 = (i__27055__auto___32186 + (1));
i__27055__auto___32186 = G__32187;
continue;
} else {
}
break;
}

var G__32184 = args32182.length;
switch (G__32184) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32182.length)].join('')));

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
var c__28171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto__){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto__){
return (function (state_32354){
var state_val_32355 = (state_32354[(1)]);
if((state_val_32355 === (7))){
var inst_32350 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32356_32397 = state_32354__$1;
(statearr_32356_32397[(2)] = inst_32350);

(statearr_32356_32397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (20))){
var inst_32320 = (state_32354[(7)]);
var inst_32331 = (state_32354[(2)]);
var inst_32332 = cljs.core.next.call(null,inst_32320);
var inst_32306 = inst_32332;
var inst_32307 = null;
var inst_32308 = (0);
var inst_32309 = (0);
var state_32354__$1 = (function (){var statearr_32357 = state_32354;
(statearr_32357[(8)] = inst_32331);

(statearr_32357[(9)] = inst_32309);

(statearr_32357[(10)] = inst_32308);

(statearr_32357[(11)] = inst_32306);

(statearr_32357[(12)] = inst_32307);

return statearr_32357;
})();
var statearr_32358_32398 = state_32354__$1;
(statearr_32358_32398[(2)] = null);

(statearr_32358_32398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (1))){
var state_32354__$1 = state_32354;
var statearr_32359_32399 = state_32354__$1;
(statearr_32359_32399[(2)] = null);

(statearr_32359_32399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (4))){
var inst_32295 = (state_32354[(13)]);
var inst_32295__$1 = (state_32354[(2)]);
var inst_32296 = (inst_32295__$1 == null);
var state_32354__$1 = (function (){var statearr_32360 = state_32354;
(statearr_32360[(13)] = inst_32295__$1);

return statearr_32360;
})();
if(cljs.core.truth_(inst_32296)){
var statearr_32361_32400 = state_32354__$1;
(statearr_32361_32400[(1)] = (5));

} else {
var statearr_32362_32401 = state_32354__$1;
(statearr_32362_32401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (15))){
var state_32354__$1 = state_32354;
var statearr_32366_32402 = state_32354__$1;
(statearr_32366_32402[(2)] = null);

(statearr_32366_32402[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (21))){
var state_32354__$1 = state_32354;
var statearr_32367_32403 = state_32354__$1;
(statearr_32367_32403[(2)] = null);

(statearr_32367_32403[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (13))){
var inst_32309 = (state_32354[(9)]);
var inst_32308 = (state_32354[(10)]);
var inst_32306 = (state_32354[(11)]);
var inst_32307 = (state_32354[(12)]);
var inst_32316 = (state_32354[(2)]);
var inst_32317 = (inst_32309 + (1));
var tmp32363 = inst_32308;
var tmp32364 = inst_32306;
var tmp32365 = inst_32307;
var inst_32306__$1 = tmp32364;
var inst_32307__$1 = tmp32365;
var inst_32308__$1 = tmp32363;
var inst_32309__$1 = inst_32317;
var state_32354__$1 = (function (){var statearr_32368 = state_32354;
(statearr_32368[(9)] = inst_32309__$1);

(statearr_32368[(10)] = inst_32308__$1);

(statearr_32368[(11)] = inst_32306__$1);

(statearr_32368[(14)] = inst_32316);

(statearr_32368[(12)] = inst_32307__$1);

return statearr_32368;
})();
var statearr_32369_32404 = state_32354__$1;
(statearr_32369_32404[(2)] = null);

(statearr_32369_32404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (22))){
var state_32354__$1 = state_32354;
var statearr_32370_32405 = state_32354__$1;
(statearr_32370_32405[(2)] = null);

(statearr_32370_32405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (6))){
var inst_32295 = (state_32354[(13)]);
var inst_32304 = f.call(null,inst_32295);
var inst_32305 = cljs.core.seq.call(null,inst_32304);
var inst_32306 = inst_32305;
var inst_32307 = null;
var inst_32308 = (0);
var inst_32309 = (0);
var state_32354__$1 = (function (){var statearr_32371 = state_32354;
(statearr_32371[(9)] = inst_32309);

(statearr_32371[(10)] = inst_32308);

(statearr_32371[(11)] = inst_32306);

(statearr_32371[(12)] = inst_32307);

return statearr_32371;
})();
var statearr_32372_32406 = state_32354__$1;
(statearr_32372_32406[(2)] = null);

(statearr_32372_32406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (17))){
var inst_32320 = (state_32354[(7)]);
var inst_32324 = cljs.core.chunk_first.call(null,inst_32320);
var inst_32325 = cljs.core.chunk_rest.call(null,inst_32320);
var inst_32326 = cljs.core.count.call(null,inst_32324);
var inst_32306 = inst_32325;
var inst_32307 = inst_32324;
var inst_32308 = inst_32326;
var inst_32309 = (0);
var state_32354__$1 = (function (){var statearr_32373 = state_32354;
(statearr_32373[(9)] = inst_32309);

(statearr_32373[(10)] = inst_32308);

(statearr_32373[(11)] = inst_32306);

(statearr_32373[(12)] = inst_32307);

return statearr_32373;
})();
var statearr_32374_32407 = state_32354__$1;
(statearr_32374_32407[(2)] = null);

(statearr_32374_32407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (3))){
var inst_32352 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32354__$1,inst_32352);
} else {
if((state_val_32355 === (12))){
var inst_32340 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32375_32408 = state_32354__$1;
(statearr_32375_32408[(2)] = inst_32340);

(statearr_32375_32408[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (2))){
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32354__$1,(4),in$);
} else {
if((state_val_32355 === (23))){
var inst_32348 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32376_32409 = state_32354__$1;
(statearr_32376_32409[(2)] = inst_32348);

(statearr_32376_32409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (19))){
var inst_32335 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32377_32410 = state_32354__$1;
(statearr_32377_32410[(2)] = inst_32335);

(statearr_32377_32410[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (11))){
var inst_32320 = (state_32354[(7)]);
var inst_32306 = (state_32354[(11)]);
var inst_32320__$1 = cljs.core.seq.call(null,inst_32306);
var state_32354__$1 = (function (){var statearr_32378 = state_32354;
(statearr_32378[(7)] = inst_32320__$1);

return statearr_32378;
})();
if(inst_32320__$1){
var statearr_32379_32411 = state_32354__$1;
(statearr_32379_32411[(1)] = (14));

} else {
var statearr_32380_32412 = state_32354__$1;
(statearr_32380_32412[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (9))){
var inst_32342 = (state_32354[(2)]);
var inst_32343 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32354__$1 = (function (){var statearr_32381 = state_32354;
(statearr_32381[(15)] = inst_32342);

return statearr_32381;
})();
if(cljs.core.truth_(inst_32343)){
var statearr_32382_32413 = state_32354__$1;
(statearr_32382_32413[(1)] = (21));

} else {
var statearr_32383_32414 = state_32354__$1;
(statearr_32383_32414[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (5))){
var inst_32298 = cljs.core.async.close_BANG_.call(null,out);
var state_32354__$1 = state_32354;
var statearr_32384_32415 = state_32354__$1;
(statearr_32384_32415[(2)] = inst_32298);

(statearr_32384_32415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (14))){
var inst_32320 = (state_32354[(7)]);
var inst_32322 = cljs.core.chunked_seq_QMARK_.call(null,inst_32320);
var state_32354__$1 = state_32354;
if(inst_32322){
var statearr_32385_32416 = state_32354__$1;
(statearr_32385_32416[(1)] = (17));

} else {
var statearr_32386_32417 = state_32354__$1;
(statearr_32386_32417[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (16))){
var inst_32338 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32387_32418 = state_32354__$1;
(statearr_32387_32418[(2)] = inst_32338);

(statearr_32387_32418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (10))){
var inst_32309 = (state_32354[(9)]);
var inst_32307 = (state_32354[(12)]);
var inst_32314 = cljs.core._nth.call(null,inst_32307,inst_32309);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32354__$1,(13),out,inst_32314);
} else {
if((state_val_32355 === (18))){
var inst_32320 = (state_32354[(7)]);
var inst_32329 = cljs.core.first.call(null,inst_32320);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32354__$1,(20),out,inst_32329);
} else {
if((state_val_32355 === (8))){
var inst_32309 = (state_32354[(9)]);
var inst_32308 = (state_32354[(10)]);
var inst_32311 = (inst_32309 < inst_32308);
var inst_32312 = inst_32311;
var state_32354__$1 = state_32354;
if(cljs.core.truth_(inst_32312)){
var statearr_32388_32419 = state_32354__$1;
(statearr_32388_32419[(1)] = (10));

} else {
var statearr_32389_32420 = state_32354__$1;
(statearr_32389_32420[(1)] = (11));

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
});})(c__28171__auto__))
;
return ((function (switch__28150__auto__,c__28171__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_32393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32393[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__);

(statearr_32393[(1)] = (1));

return statearr_32393;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____1 = (function (state_32354){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_32354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e32394){if((e32394 instanceof Object)){
var ex__28154__auto__ = e32394;
var statearr_32395_32421 = state_32354;
(statearr_32395_32421[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32422 = state_32354;
state_32354 = G__32422;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__ = function(state_32354){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____1.call(this,state_32354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__))
})();
var state__28173__auto__ = (function (){var statearr_32396 = f__28172__auto__.call(null);
(statearr_32396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_32396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto__))
);

return c__28171__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32423 = [];
var len__27054__auto___32426 = arguments.length;
var i__27055__auto___32427 = (0);
while(true){
if((i__27055__auto___32427 < len__27054__auto___32426)){
args32423.push((arguments[i__27055__auto___32427]));

var G__32428 = (i__27055__auto___32427 + (1));
i__27055__auto___32427 = G__32428;
continue;
} else {
}
break;
}

var G__32425 = args32423.length;
switch (G__32425) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32423.length)].join('')));

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
var args32430 = [];
var len__27054__auto___32433 = arguments.length;
var i__27055__auto___32434 = (0);
while(true){
if((i__27055__auto___32434 < len__27054__auto___32433)){
args32430.push((arguments[i__27055__auto___32434]));

var G__32435 = (i__27055__auto___32434 + (1));
i__27055__auto___32434 = G__32435;
continue;
} else {
}
break;
}

var G__32432 = args32430.length;
switch (G__32432) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32430.length)].join('')));

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
var args32437 = [];
var len__27054__auto___32488 = arguments.length;
var i__27055__auto___32489 = (0);
while(true){
if((i__27055__auto___32489 < len__27054__auto___32488)){
args32437.push((arguments[i__27055__auto___32489]));

var G__32490 = (i__27055__auto___32489 + (1));
i__27055__auto___32489 = G__32490;
continue;
} else {
}
break;
}

var G__32439 = args32437.length;
switch (G__32439) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32437.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28171__auto___32492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___32492,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___32492,out){
return (function (state_32463){
var state_val_32464 = (state_32463[(1)]);
if((state_val_32464 === (7))){
var inst_32458 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
var statearr_32465_32493 = state_32463__$1;
(statearr_32465_32493[(2)] = inst_32458);

(statearr_32465_32493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (1))){
var inst_32440 = null;
var state_32463__$1 = (function (){var statearr_32466 = state_32463;
(statearr_32466[(7)] = inst_32440);

return statearr_32466;
})();
var statearr_32467_32494 = state_32463__$1;
(statearr_32467_32494[(2)] = null);

(statearr_32467_32494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (4))){
var inst_32443 = (state_32463[(8)]);
var inst_32443__$1 = (state_32463[(2)]);
var inst_32444 = (inst_32443__$1 == null);
var inst_32445 = cljs.core.not.call(null,inst_32444);
var state_32463__$1 = (function (){var statearr_32468 = state_32463;
(statearr_32468[(8)] = inst_32443__$1);

return statearr_32468;
})();
if(inst_32445){
var statearr_32469_32495 = state_32463__$1;
(statearr_32469_32495[(1)] = (5));

} else {
var statearr_32470_32496 = state_32463__$1;
(statearr_32470_32496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (6))){
var state_32463__$1 = state_32463;
var statearr_32471_32497 = state_32463__$1;
(statearr_32471_32497[(2)] = null);

(statearr_32471_32497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (3))){
var inst_32460 = (state_32463[(2)]);
var inst_32461 = cljs.core.async.close_BANG_.call(null,out);
var state_32463__$1 = (function (){var statearr_32472 = state_32463;
(statearr_32472[(9)] = inst_32460);

return statearr_32472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32463__$1,inst_32461);
} else {
if((state_val_32464 === (2))){
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32463__$1,(4),ch);
} else {
if((state_val_32464 === (11))){
var inst_32443 = (state_32463[(8)]);
var inst_32452 = (state_32463[(2)]);
var inst_32440 = inst_32443;
var state_32463__$1 = (function (){var statearr_32473 = state_32463;
(statearr_32473[(7)] = inst_32440);

(statearr_32473[(10)] = inst_32452);

return statearr_32473;
})();
var statearr_32474_32498 = state_32463__$1;
(statearr_32474_32498[(2)] = null);

(statearr_32474_32498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (9))){
var inst_32443 = (state_32463[(8)]);
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32463__$1,(11),out,inst_32443);
} else {
if((state_val_32464 === (5))){
var inst_32440 = (state_32463[(7)]);
var inst_32443 = (state_32463[(8)]);
var inst_32447 = cljs.core._EQ_.call(null,inst_32443,inst_32440);
var state_32463__$1 = state_32463;
if(inst_32447){
var statearr_32476_32499 = state_32463__$1;
(statearr_32476_32499[(1)] = (8));

} else {
var statearr_32477_32500 = state_32463__$1;
(statearr_32477_32500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (10))){
var inst_32455 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
var statearr_32478_32501 = state_32463__$1;
(statearr_32478_32501[(2)] = inst_32455);

(statearr_32478_32501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (8))){
var inst_32440 = (state_32463[(7)]);
var tmp32475 = inst_32440;
var inst_32440__$1 = tmp32475;
var state_32463__$1 = (function (){var statearr_32479 = state_32463;
(statearr_32479[(7)] = inst_32440__$1);

return statearr_32479;
})();
var statearr_32480_32502 = state_32463__$1;
(statearr_32480_32502[(2)] = null);

(statearr_32480_32502[(1)] = (2));


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
});})(c__28171__auto___32492,out))
;
return ((function (switch__28150__auto__,c__28171__auto___32492,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_32484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32484[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_32484[(1)] = (1));

return statearr_32484;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_32463){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_32463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e32485){if((e32485 instanceof Object)){
var ex__28154__auto__ = e32485;
var statearr_32486_32503 = state_32463;
(statearr_32486_32503[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32504 = state_32463;
state_32463 = G__32504;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_32463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_32463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___32492,out))
})();
var state__28173__auto__ = (function (){var statearr_32487 = f__28172__auto__.call(null);
(statearr_32487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___32492);

return statearr_32487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___32492,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32505 = [];
var len__27054__auto___32575 = arguments.length;
var i__27055__auto___32576 = (0);
while(true){
if((i__27055__auto___32576 < len__27054__auto___32575)){
args32505.push((arguments[i__27055__auto___32576]));

var G__32577 = (i__27055__auto___32576 + (1));
i__27055__auto___32576 = G__32577;
continue;
} else {
}
break;
}

var G__32507 = args32505.length;
switch (G__32507) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32505.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28171__auto___32579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___32579,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___32579,out){
return (function (state_32545){
var state_val_32546 = (state_32545[(1)]);
if((state_val_32546 === (7))){
var inst_32541 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32547_32580 = state_32545__$1;
(statearr_32547_32580[(2)] = inst_32541);

(statearr_32547_32580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (1))){
var inst_32508 = (new Array(n));
var inst_32509 = inst_32508;
var inst_32510 = (0);
var state_32545__$1 = (function (){var statearr_32548 = state_32545;
(statearr_32548[(7)] = inst_32509);

(statearr_32548[(8)] = inst_32510);

return statearr_32548;
})();
var statearr_32549_32581 = state_32545__$1;
(statearr_32549_32581[(2)] = null);

(statearr_32549_32581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (4))){
var inst_32513 = (state_32545[(9)]);
var inst_32513__$1 = (state_32545[(2)]);
var inst_32514 = (inst_32513__$1 == null);
var inst_32515 = cljs.core.not.call(null,inst_32514);
var state_32545__$1 = (function (){var statearr_32550 = state_32545;
(statearr_32550[(9)] = inst_32513__$1);

return statearr_32550;
})();
if(inst_32515){
var statearr_32551_32582 = state_32545__$1;
(statearr_32551_32582[(1)] = (5));

} else {
var statearr_32552_32583 = state_32545__$1;
(statearr_32552_32583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (15))){
var inst_32535 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32553_32584 = state_32545__$1;
(statearr_32553_32584[(2)] = inst_32535);

(statearr_32553_32584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (13))){
var state_32545__$1 = state_32545;
var statearr_32554_32585 = state_32545__$1;
(statearr_32554_32585[(2)] = null);

(statearr_32554_32585[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (6))){
var inst_32510 = (state_32545[(8)]);
var inst_32531 = (inst_32510 > (0));
var state_32545__$1 = state_32545;
if(cljs.core.truth_(inst_32531)){
var statearr_32555_32586 = state_32545__$1;
(statearr_32555_32586[(1)] = (12));

} else {
var statearr_32556_32587 = state_32545__$1;
(statearr_32556_32587[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (3))){
var inst_32543 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32545__$1,inst_32543);
} else {
if((state_val_32546 === (12))){
var inst_32509 = (state_32545[(7)]);
var inst_32533 = cljs.core.vec.call(null,inst_32509);
var state_32545__$1 = state_32545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32545__$1,(15),out,inst_32533);
} else {
if((state_val_32546 === (2))){
var state_32545__$1 = state_32545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32545__$1,(4),ch);
} else {
if((state_val_32546 === (11))){
var inst_32525 = (state_32545[(2)]);
var inst_32526 = (new Array(n));
var inst_32509 = inst_32526;
var inst_32510 = (0);
var state_32545__$1 = (function (){var statearr_32557 = state_32545;
(statearr_32557[(7)] = inst_32509);

(statearr_32557[(8)] = inst_32510);

(statearr_32557[(10)] = inst_32525);

return statearr_32557;
})();
var statearr_32558_32588 = state_32545__$1;
(statearr_32558_32588[(2)] = null);

(statearr_32558_32588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (9))){
var inst_32509 = (state_32545[(7)]);
var inst_32523 = cljs.core.vec.call(null,inst_32509);
var state_32545__$1 = state_32545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32545__$1,(11),out,inst_32523);
} else {
if((state_val_32546 === (5))){
var inst_32518 = (state_32545[(11)]);
var inst_32509 = (state_32545[(7)]);
var inst_32510 = (state_32545[(8)]);
var inst_32513 = (state_32545[(9)]);
var inst_32517 = (inst_32509[inst_32510] = inst_32513);
var inst_32518__$1 = (inst_32510 + (1));
var inst_32519 = (inst_32518__$1 < n);
var state_32545__$1 = (function (){var statearr_32559 = state_32545;
(statearr_32559[(12)] = inst_32517);

(statearr_32559[(11)] = inst_32518__$1);

return statearr_32559;
})();
if(cljs.core.truth_(inst_32519)){
var statearr_32560_32589 = state_32545__$1;
(statearr_32560_32589[(1)] = (8));

} else {
var statearr_32561_32590 = state_32545__$1;
(statearr_32561_32590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (14))){
var inst_32538 = (state_32545[(2)]);
var inst_32539 = cljs.core.async.close_BANG_.call(null,out);
var state_32545__$1 = (function (){var statearr_32563 = state_32545;
(statearr_32563[(13)] = inst_32538);

return statearr_32563;
})();
var statearr_32564_32591 = state_32545__$1;
(statearr_32564_32591[(2)] = inst_32539);

(statearr_32564_32591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (10))){
var inst_32529 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32565_32592 = state_32545__$1;
(statearr_32565_32592[(2)] = inst_32529);

(statearr_32565_32592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (8))){
var inst_32518 = (state_32545[(11)]);
var inst_32509 = (state_32545[(7)]);
var tmp32562 = inst_32509;
var inst_32509__$1 = tmp32562;
var inst_32510 = inst_32518;
var state_32545__$1 = (function (){var statearr_32566 = state_32545;
(statearr_32566[(7)] = inst_32509__$1);

(statearr_32566[(8)] = inst_32510);

return statearr_32566;
})();
var statearr_32567_32593 = state_32545__$1;
(statearr_32567_32593[(2)] = null);

(statearr_32567_32593[(1)] = (2));


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
});})(c__28171__auto___32579,out))
;
return ((function (switch__28150__auto__,c__28171__auto___32579,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_32571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32571[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_32571[(1)] = (1));

return statearr_32571;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_32545){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_32545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e32572){if((e32572 instanceof Object)){
var ex__28154__auto__ = e32572;
var statearr_32573_32594 = state_32545;
(statearr_32573_32594[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32595 = state_32545;
state_32545 = G__32595;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_32545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_32545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___32579,out))
})();
var state__28173__auto__ = (function (){var statearr_32574 = f__28172__auto__.call(null);
(statearr_32574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___32579);

return statearr_32574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___32579,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32596 = [];
var len__27054__auto___32670 = arguments.length;
var i__27055__auto___32671 = (0);
while(true){
if((i__27055__auto___32671 < len__27054__auto___32670)){
args32596.push((arguments[i__27055__auto___32671]));

var G__32672 = (i__27055__auto___32671 + (1));
i__27055__auto___32671 = G__32672;
continue;
} else {
}
break;
}

var G__32598 = args32596.length;
switch (G__32598) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32596.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28171__auto___32674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___32674,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___32674,out){
return (function (state_32640){
var state_val_32641 = (state_32640[(1)]);
if((state_val_32641 === (7))){
var inst_32636 = (state_32640[(2)]);
var state_32640__$1 = state_32640;
var statearr_32642_32675 = state_32640__$1;
(statearr_32642_32675[(2)] = inst_32636);

(statearr_32642_32675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (1))){
var inst_32599 = [];
var inst_32600 = inst_32599;
var inst_32601 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32640__$1 = (function (){var statearr_32643 = state_32640;
(statearr_32643[(7)] = inst_32601);

(statearr_32643[(8)] = inst_32600);

return statearr_32643;
})();
var statearr_32644_32676 = state_32640__$1;
(statearr_32644_32676[(2)] = null);

(statearr_32644_32676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (4))){
var inst_32604 = (state_32640[(9)]);
var inst_32604__$1 = (state_32640[(2)]);
var inst_32605 = (inst_32604__$1 == null);
var inst_32606 = cljs.core.not.call(null,inst_32605);
var state_32640__$1 = (function (){var statearr_32645 = state_32640;
(statearr_32645[(9)] = inst_32604__$1);

return statearr_32645;
})();
if(inst_32606){
var statearr_32646_32677 = state_32640__$1;
(statearr_32646_32677[(1)] = (5));

} else {
var statearr_32647_32678 = state_32640__$1;
(statearr_32647_32678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (15))){
var inst_32630 = (state_32640[(2)]);
var state_32640__$1 = state_32640;
var statearr_32648_32679 = state_32640__$1;
(statearr_32648_32679[(2)] = inst_32630);

(statearr_32648_32679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (13))){
var state_32640__$1 = state_32640;
var statearr_32649_32680 = state_32640__$1;
(statearr_32649_32680[(2)] = null);

(statearr_32649_32680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (6))){
var inst_32600 = (state_32640[(8)]);
var inst_32625 = inst_32600.length;
var inst_32626 = (inst_32625 > (0));
var state_32640__$1 = state_32640;
if(cljs.core.truth_(inst_32626)){
var statearr_32650_32681 = state_32640__$1;
(statearr_32650_32681[(1)] = (12));

} else {
var statearr_32651_32682 = state_32640__$1;
(statearr_32651_32682[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (3))){
var inst_32638 = (state_32640[(2)]);
var state_32640__$1 = state_32640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32640__$1,inst_32638);
} else {
if((state_val_32641 === (12))){
var inst_32600 = (state_32640[(8)]);
var inst_32628 = cljs.core.vec.call(null,inst_32600);
var state_32640__$1 = state_32640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32640__$1,(15),out,inst_32628);
} else {
if((state_val_32641 === (2))){
var state_32640__$1 = state_32640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32640__$1,(4),ch);
} else {
if((state_val_32641 === (11))){
var inst_32604 = (state_32640[(9)]);
var inst_32608 = (state_32640[(10)]);
var inst_32618 = (state_32640[(2)]);
var inst_32619 = [];
var inst_32620 = inst_32619.push(inst_32604);
var inst_32600 = inst_32619;
var inst_32601 = inst_32608;
var state_32640__$1 = (function (){var statearr_32652 = state_32640;
(statearr_32652[(11)] = inst_32620);

(statearr_32652[(7)] = inst_32601);

(statearr_32652[(12)] = inst_32618);

(statearr_32652[(8)] = inst_32600);

return statearr_32652;
})();
var statearr_32653_32683 = state_32640__$1;
(statearr_32653_32683[(2)] = null);

(statearr_32653_32683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (9))){
var inst_32600 = (state_32640[(8)]);
var inst_32616 = cljs.core.vec.call(null,inst_32600);
var state_32640__$1 = state_32640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32640__$1,(11),out,inst_32616);
} else {
if((state_val_32641 === (5))){
var inst_32604 = (state_32640[(9)]);
var inst_32608 = (state_32640[(10)]);
var inst_32601 = (state_32640[(7)]);
var inst_32608__$1 = f.call(null,inst_32604);
var inst_32609 = cljs.core._EQ_.call(null,inst_32608__$1,inst_32601);
var inst_32610 = cljs.core.keyword_identical_QMARK_.call(null,inst_32601,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32611 = (inst_32609) || (inst_32610);
var state_32640__$1 = (function (){var statearr_32654 = state_32640;
(statearr_32654[(10)] = inst_32608__$1);

return statearr_32654;
})();
if(cljs.core.truth_(inst_32611)){
var statearr_32655_32684 = state_32640__$1;
(statearr_32655_32684[(1)] = (8));

} else {
var statearr_32656_32685 = state_32640__$1;
(statearr_32656_32685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (14))){
var inst_32633 = (state_32640[(2)]);
var inst_32634 = cljs.core.async.close_BANG_.call(null,out);
var state_32640__$1 = (function (){var statearr_32658 = state_32640;
(statearr_32658[(13)] = inst_32633);

return statearr_32658;
})();
var statearr_32659_32686 = state_32640__$1;
(statearr_32659_32686[(2)] = inst_32634);

(statearr_32659_32686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (10))){
var inst_32623 = (state_32640[(2)]);
var state_32640__$1 = state_32640;
var statearr_32660_32687 = state_32640__$1;
(statearr_32660_32687[(2)] = inst_32623);

(statearr_32660_32687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (8))){
var inst_32604 = (state_32640[(9)]);
var inst_32608 = (state_32640[(10)]);
var inst_32600 = (state_32640[(8)]);
var inst_32613 = inst_32600.push(inst_32604);
var tmp32657 = inst_32600;
var inst_32600__$1 = tmp32657;
var inst_32601 = inst_32608;
var state_32640__$1 = (function (){var statearr_32661 = state_32640;
(statearr_32661[(14)] = inst_32613);

(statearr_32661[(7)] = inst_32601);

(statearr_32661[(8)] = inst_32600__$1);

return statearr_32661;
})();
var statearr_32662_32688 = state_32640__$1;
(statearr_32662_32688[(2)] = null);

(statearr_32662_32688[(1)] = (2));


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
});})(c__28171__auto___32674,out))
;
return ((function (switch__28150__auto__,c__28171__auto___32674,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_32666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32666[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_32666[(1)] = (1));

return statearr_32666;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_32640){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_32640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e32667){if((e32667 instanceof Object)){
var ex__28154__auto__ = e32667;
var statearr_32668_32689 = state_32640;
(statearr_32668_32689[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32690 = state_32640;
state_32640 = G__32690;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_32640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_32640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___32674,out))
})();
var state__28173__auto__ = (function (){var statearr_32669 = f__28172__auto__.call(null);
(statearr_32669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___32674);

return statearr_32669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___32674,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1499543329352