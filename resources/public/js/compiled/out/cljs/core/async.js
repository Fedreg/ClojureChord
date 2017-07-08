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
var args52010 = [];
var len__27054__auto___52016 = arguments.length;
var i__27055__auto___52017 = (0);
while(true){
if((i__27055__auto___52017 < len__27054__auto___52016)){
args52010.push((arguments[i__27055__auto___52017]));

var G__52018 = (i__27055__auto___52017 + (1));
i__27055__auto___52017 = G__52018;
continue;
} else {
}
break;
}

var G__52012 = args52010.length;
switch (G__52012) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52010.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async52013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52013 = (function (f,blockable,meta52014){
this.f = f;
this.blockable = blockable;
this.meta52014 = meta52014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52015,meta52014__$1){
var self__ = this;
var _52015__$1 = this;
return (new cljs.core.async.t_cljs$core$async52013(self__.f,self__.blockable,meta52014__$1));
});

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52015){
var self__ = this;
var _52015__$1 = this;
return self__.meta52014;
});

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async52013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta52014","meta52014",825912880,null)], null);
});

cljs.core.async.t_cljs$core$async52013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52013";

cljs.core.async.t_cljs$core$async52013.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async52013");
});

cljs.core.async.__GT_t_cljs$core$async52013 = (function cljs$core$async$__GT_t_cljs$core$async52013(f__$1,blockable__$1,meta52014){
return (new cljs.core.async.t_cljs$core$async52013(f__$1,blockable__$1,meta52014));
});

}

return (new cljs.core.async.t_cljs$core$async52013(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args52022 = [];
var len__27054__auto___52025 = arguments.length;
var i__27055__auto___52026 = (0);
while(true){
if((i__27055__auto___52026 < len__27054__auto___52025)){
args52022.push((arguments[i__27055__auto___52026]));

var G__52027 = (i__27055__auto___52026 + (1));
i__27055__auto___52026 = G__52027;
continue;
} else {
}
break;
}

var G__52024 = args52022.length;
switch (G__52024) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52022.length)].join('')));

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
var args52029 = [];
var len__27054__auto___52032 = arguments.length;
var i__27055__auto___52033 = (0);
while(true){
if((i__27055__auto___52033 < len__27054__auto___52032)){
args52029.push((arguments[i__27055__auto___52033]));

var G__52034 = (i__27055__auto___52033 + (1));
i__27055__auto___52033 = G__52034;
continue;
} else {
}
break;
}

var G__52031 = args52029.length;
switch (G__52031) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52029.length)].join('')));

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
var args52036 = [];
var len__27054__auto___52039 = arguments.length;
var i__27055__auto___52040 = (0);
while(true){
if((i__27055__auto___52040 < len__27054__auto___52039)){
args52036.push((arguments[i__27055__auto___52040]));

var G__52041 = (i__27055__auto___52040 + (1));
i__27055__auto___52040 = G__52041;
continue;
} else {
}
break;
}

var G__52038 = args52036.length;
switch (G__52038) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52036.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_52043 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_52043);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_52043,ret){
return (function (){
return fn1.call(null,val_52043);
});})(val_52043,ret))
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
var args52044 = [];
var len__27054__auto___52047 = arguments.length;
var i__27055__auto___52048 = (0);
while(true){
if((i__27055__auto___52048 < len__27054__auto___52047)){
args52044.push((arguments[i__27055__auto___52048]));

var G__52049 = (i__27055__auto___52048 + (1));
i__27055__auto___52048 = G__52049;
continue;
} else {
}
break;
}

var G__52046 = args52044.length;
switch (G__52046) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52044.length)].join('')));

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
var n__26894__auto___52051 = n;
var x_52052 = (0);
while(true){
if((x_52052 < n__26894__auto___52051)){
(a[x_52052] = (0));

var G__52053 = (x_52052 + (1));
x_52052 = G__52053;
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

var G__52054 = (i + (1));
i = G__52054;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async52058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52058 = (function (alt_flag,flag,meta52059){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta52059 = meta52059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_52060,meta52059__$1){
var self__ = this;
var _52060__$1 = this;
return (new cljs.core.async.t_cljs$core$async52058(self__.alt_flag,self__.flag,meta52059__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async52058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_52060){
var self__ = this;
var _52060__$1 = this;
return self__.meta52059;
});})(flag))
;

cljs.core.async.t_cljs$core$async52058.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async52058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async52058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52058.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52059","meta52059",-1348011186,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async52058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52058";

cljs.core.async.t_cljs$core$async52058.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async52058");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async52058 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52058(alt_flag__$1,flag__$1,meta52059){
return (new cljs.core.async.t_cljs$core$async52058(alt_flag__$1,flag__$1,meta52059));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async52058(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async52064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52064 = (function (alt_handler,flag,cb,meta52065){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta52065 = meta52065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52066,meta52065__$1){
var self__ = this;
var _52066__$1 = this;
return (new cljs.core.async.t_cljs$core$async52064(self__.alt_handler,self__.flag,self__.cb,meta52065__$1));
});

cljs.core.async.t_cljs$core$async52064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52066){
var self__ = this;
var _52066__$1 = this;
return self__.meta52065;
});

cljs.core.async.t_cljs$core$async52064.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async52064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async52064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async52064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52065","meta52065",1195110426,null)], null);
});

cljs.core.async.t_cljs$core$async52064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52064";

cljs.core.async.t_cljs$core$async52064.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async52064");
});

cljs.core.async.__GT_t_cljs$core$async52064 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52064(alt_handler__$1,flag__$1,cb__$1,meta52065){
return (new cljs.core.async.t_cljs$core$async52064(alt_handler__$1,flag__$1,cb__$1,meta52065));
});

}

return (new cljs.core.async.t_cljs$core$async52064(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__52067_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52067_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52068_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52068_SHARP_,port], null));
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
var G__52069 = (i + (1));
i = G__52069;
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
var len__27054__auto___52075 = arguments.length;
var i__27055__auto___52076 = (0);
while(true){
if((i__27055__auto___52076 < len__27054__auto___52075)){
args__27061__auto__.push((arguments[i__27055__auto___52076]));

var G__52077 = (i__27055__auto___52076 + (1));
i__27055__auto___52076 = G__52077;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52072){
var map__52073 = p__52072;
var map__52073__$1 = ((((!((map__52073 == null)))?((((map__52073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52073):map__52073);
var opts = map__52073__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52070){
var G__52071 = cljs.core.first.call(null,seq52070);
var seq52070__$1 = cljs.core.next.call(null,seq52070);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52071,seq52070__$1);
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
var args52078 = [];
var len__27054__auto___52128 = arguments.length;
var i__27055__auto___52129 = (0);
while(true){
if((i__27055__auto___52129 < len__27054__auto___52128)){
args52078.push((arguments[i__27055__auto___52129]));

var G__52130 = (i__27055__auto___52129 + (1));
i__27055__auto___52129 = G__52130;
continue;
} else {
}
break;
}

var G__52080 = args52078.length;
switch (G__52080) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52078.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28171__auto___52132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___52132){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___52132){
return (function (state_52104){
var state_val_52105 = (state_52104[(1)]);
if((state_val_52105 === (7))){
var inst_52100 = (state_52104[(2)]);
var state_52104__$1 = state_52104;
var statearr_52106_52133 = state_52104__$1;
(statearr_52106_52133[(2)] = inst_52100);

(statearr_52106_52133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52105 === (1))){
var state_52104__$1 = state_52104;
var statearr_52107_52134 = state_52104__$1;
(statearr_52107_52134[(2)] = null);

(statearr_52107_52134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52105 === (4))){
var inst_52083 = (state_52104[(7)]);
var inst_52083__$1 = (state_52104[(2)]);
var inst_52084 = (inst_52083__$1 == null);
var state_52104__$1 = (function (){var statearr_52108 = state_52104;
(statearr_52108[(7)] = inst_52083__$1);

return statearr_52108;
})();
if(cljs.core.truth_(inst_52084)){
var statearr_52109_52135 = state_52104__$1;
(statearr_52109_52135[(1)] = (5));

} else {
var statearr_52110_52136 = state_52104__$1;
(statearr_52110_52136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52105 === (13))){
var state_52104__$1 = state_52104;
var statearr_52111_52137 = state_52104__$1;
(statearr_52111_52137[(2)] = null);

(statearr_52111_52137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52105 === (6))){
var inst_52083 = (state_52104[(7)]);
var state_52104__$1 = state_52104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52104__$1,(11),to,inst_52083);
} else {
if((state_val_52105 === (3))){
var inst_52102 = (state_52104[(2)]);
var state_52104__$1 = state_52104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52104__$1,inst_52102);
} else {
if((state_val_52105 === (12))){
var state_52104__$1 = state_52104;
var statearr_52112_52138 = state_52104__$1;
(statearr_52112_52138[(2)] = null);

(statearr_52112_52138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52105 === (2))){
var state_52104__$1 = state_52104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52104__$1,(4),from);
} else {
if((state_val_52105 === (11))){
var inst_52093 = (state_52104[(2)]);
var state_52104__$1 = state_52104;
if(cljs.core.truth_(inst_52093)){
var statearr_52113_52139 = state_52104__$1;
(statearr_52113_52139[(1)] = (12));

} else {
var statearr_52114_52140 = state_52104__$1;
(statearr_52114_52140[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52105 === (9))){
var state_52104__$1 = state_52104;
var statearr_52115_52141 = state_52104__$1;
(statearr_52115_52141[(2)] = null);

(statearr_52115_52141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52105 === (5))){
var state_52104__$1 = state_52104;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52116_52142 = state_52104__$1;
(statearr_52116_52142[(1)] = (8));

} else {
var statearr_52117_52143 = state_52104__$1;
(statearr_52117_52143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52105 === (14))){
var inst_52098 = (state_52104[(2)]);
var state_52104__$1 = state_52104;
var statearr_52118_52144 = state_52104__$1;
(statearr_52118_52144[(2)] = inst_52098);

(statearr_52118_52144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52105 === (10))){
var inst_52090 = (state_52104[(2)]);
var state_52104__$1 = state_52104;
var statearr_52119_52145 = state_52104__$1;
(statearr_52119_52145[(2)] = inst_52090);

(statearr_52119_52145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52105 === (8))){
var inst_52087 = cljs.core.async.close_BANG_.call(null,to);
var state_52104__$1 = state_52104;
var statearr_52120_52146 = state_52104__$1;
(statearr_52120_52146[(2)] = inst_52087);

(statearr_52120_52146[(1)] = (10));


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
});})(c__28171__auto___52132))
;
return ((function (switch__28150__auto__,c__28171__auto___52132){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_52124 = [null,null,null,null,null,null,null,null];
(statearr_52124[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_52124[(1)] = (1));

return statearr_52124;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_52104){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_52104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e52125){if((e52125 instanceof Object)){
var ex__28154__auto__ = e52125;
var statearr_52126_52147 = state_52104;
(statearr_52126_52147[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52148 = state_52104;
state_52104 = G__52148;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_52104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_52104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___52132))
})();
var state__28173__auto__ = (function (){var statearr_52127 = f__28172__auto__.call(null);
(statearr_52127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___52132);

return statearr_52127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___52132))
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
return (function (p__52336){
var vec__52337 = p__52336;
var v = cljs.core.nth.call(null,vec__52337,(0),null);
var p = cljs.core.nth.call(null,vec__52337,(1),null);
var job = vec__52337;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28171__auto___52523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___52523,res,vec__52337,v,p,job,jobs,results){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___52523,res,vec__52337,v,p,job,jobs,results){
return (function (state_52344){
var state_val_52345 = (state_52344[(1)]);
if((state_val_52345 === (1))){
var state_52344__$1 = state_52344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52344__$1,(2),res,v);
} else {
if((state_val_52345 === (2))){
var inst_52341 = (state_52344[(2)]);
var inst_52342 = cljs.core.async.close_BANG_.call(null,res);
var state_52344__$1 = (function (){var statearr_52346 = state_52344;
(statearr_52346[(7)] = inst_52341);

return statearr_52346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52344__$1,inst_52342);
} else {
return null;
}
}
});})(c__28171__auto___52523,res,vec__52337,v,p,job,jobs,results))
;
return ((function (switch__28150__auto__,c__28171__auto___52523,res,vec__52337,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_52350 = [null,null,null,null,null,null,null,null];
(statearr_52350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_52350[(1)] = (1));

return statearr_52350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_52344){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_52344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e52351){if((e52351 instanceof Object)){
var ex__28154__auto__ = e52351;
var statearr_52352_52524 = state_52344;
(statearr_52352_52524[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52525 = state_52344;
state_52344 = G__52525;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_52344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_52344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___52523,res,vec__52337,v,p,job,jobs,results))
})();
var state__28173__auto__ = (function (){var statearr_52353 = f__28172__auto__.call(null);
(statearr_52353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___52523);

return statearr_52353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___52523,res,vec__52337,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__52354){
var vec__52355 = p__52354;
var v = cljs.core.nth.call(null,vec__52355,(0),null);
var p = cljs.core.nth.call(null,vec__52355,(1),null);
var job = vec__52355;
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
var n__26894__auto___52526 = n;
var __52527 = (0);
while(true){
if((__52527 < n__26894__auto___52526)){
var G__52358_52528 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__52358_52528) {
case "compute":
var c__28171__auto___52530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52527,c__28171__auto___52530,G__52358_52528,n__26894__auto___52526,jobs,results,process,async){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (__52527,c__28171__auto___52530,G__52358_52528,n__26894__auto___52526,jobs,results,process,async){
return (function (state_52371){
var state_val_52372 = (state_52371[(1)]);
if((state_val_52372 === (1))){
var state_52371__$1 = state_52371;
var statearr_52373_52531 = state_52371__$1;
(statearr_52373_52531[(2)] = null);

(statearr_52373_52531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (2))){
var state_52371__$1 = state_52371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52371__$1,(4),jobs);
} else {
if((state_val_52372 === (3))){
var inst_52369 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52371__$1,inst_52369);
} else {
if((state_val_52372 === (4))){
var inst_52361 = (state_52371[(2)]);
var inst_52362 = process.call(null,inst_52361);
var state_52371__$1 = state_52371;
if(cljs.core.truth_(inst_52362)){
var statearr_52374_52532 = state_52371__$1;
(statearr_52374_52532[(1)] = (5));

} else {
var statearr_52375_52533 = state_52371__$1;
(statearr_52375_52533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (5))){
var state_52371__$1 = state_52371;
var statearr_52376_52534 = state_52371__$1;
(statearr_52376_52534[(2)] = null);

(statearr_52376_52534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (6))){
var state_52371__$1 = state_52371;
var statearr_52377_52535 = state_52371__$1;
(statearr_52377_52535[(2)] = null);

(statearr_52377_52535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (7))){
var inst_52367 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52378_52536 = state_52371__$1;
(statearr_52378_52536[(2)] = inst_52367);

(statearr_52378_52536[(1)] = (3));


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
});})(__52527,c__28171__auto___52530,G__52358_52528,n__26894__auto___52526,jobs,results,process,async))
;
return ((function (__52527,switch__28150__auto__,c__28171__auto___52530,G__52358_52528,n__26894__auto___52526,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_52382 = [null,null,null,null,null,null,null];
(statearr_52382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_52382[(1)] = (1));

return statearr_52382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_52371){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_52371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e52383){if((e52383 instanceof Object)){
var ex__28154__auto__ = e52383;
var statearr_52384_52537 = state_52371;
(statearr_52384_52537[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52538 = state_52371;
state_52371 = G__52538;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_52371){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_52371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(__52527,switch__28150__auto__,c__28171__auto___52530,G__52358_52528,n__26894__auto___52526,jobs,results,process,async))
})();
var state__28173__auto__ = (function (){var statearr_52385 = f__28172__auto__.call(null);
(statearr_52385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___52530);

return statearr_52385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(__52527,c__28171__auto___52530,G__52358_52528,n__26894__auto___52526,jobs,results,process,async))
);


break;
case "async":
var c__28171__auto___52539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52527,c__28171__auto___52539,G__52358_52528,n__26894__auto___52526,jobs,results,process,async){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (__52527,c__28171__auto___52539,G__52358_52528,n__26894__auto___52526,jobs,results,process,async){
return (function (state_52398){
var state_val_52399 = (state_52398[(1)]);
if((state_val_52399 === (1))){
var state_52398__$1 = state_52398;
var statearr_52400_52540 = state_52398__$1;
(statearr_52400_52540[(2)] = null);

(statearr_52400_52540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52399 === (2))){
var state_52398__$1 = state_52398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52398__$1,(4),jobs);
} else {
if((state_val_52399 === (3))){
var inst_52396 = (state_52398[(2)]);
var state_52398__$1 = state_52398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52398__$1,inst_52396);
} else {
if((state_val_52399 === (4))){
var inst_52388 = (state_52398[(2)]);
var inst_52389 = async.call(null,inst_52388);
var state_52398__$1 = state_52398;
if(cljs.core.truth_(inst_52389)){
var statearr_52401_52541 = state_52398__$1;
(statearr_52401_52541[(1)] = (5));

} else {
var statearr_52402_52542 = state_52398__$1;
(statearr_52402_52542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52399 === (5))){
var state_52398__$1 = state_52398;
var statearr_52403_52543 = state_52398__$1;
(statearr_52403_52543[(2)] = null);

(statearr_52403_52543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52399 === (6))){
var state_52398__$1 = state_52398;
var statearr_52404_52544 = state_52398__$1;
(statearr_52404_52544[(2)] = null);

(statearr_52404_52544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52399 === (7))){
var inst_52394 = (state_52398[(2)]);
var state_52398__$1 = state_52398;
var statearr_52405_52545 = state_52398__$1;
(statearr_52405_52545[(2)] = inst_52394);

(statearr_52405_52545[(1)] = (3));


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
});})(__52527,c__28171__auto___52539,G__52358_52528,n__26894__auto___52526,jobs,results,process,async))
;
return ((function (__52527,switch__28150__auto__,c__28171__auto___52539,G__52358_52528,n__26894__auto___52526,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_52409 = [null,null,null,null,null,null,null];
(statearr_52409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_52409[(1)] = (1));

return statearr_52409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_52398){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_52398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e52410){if((e52410 instanceof Object)){
var ex__28154__auto__ = e52410;
var statearr_52411_52546 = state_52398;
(statearr_52411_52546[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52547 = state_52398;
state_52398 = G__52547;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_52398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_52398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(__52527,switch__28150__auto__,c__28171__auto___52539,G__52358_52528,n__26894__auto___52526,jobs,results,process,async))
})();
var state__28173__auto__ = (function (){var statearr_52412 = f__28172__auto__.call(null);
(statearr_52412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___52539);

return statearr_52412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(__52527,c__28171__auto___52539,G__52358_52528,n__26894__auto___52526,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__52548 = (__52527 + (1));
__52527 = G__52548;
continue;
} else {
}
break;
}

var c__28171__auto___52549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___52549,jobs,results,process,async){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___52549,jobs,results,process,async){
return (function (state_52434){
var state_val_52435 = (state_52434[(1)]);
if((state_val_52435 === (1))){
var state_52434__$1 = state_52434;
var statearr_52436_52550 = state_52434__$1;
(statearr_52436_52550[(2)] = null);

(statearr_52436_52550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52435 === (2))){
var state_52434__$1 = state_52434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52434__$1,(4),from);
} else {
if((state_val_52435 === (3))){
var inst_52432 = (state_52434[(2)]);
var state_52434__$1 = state_52434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52434__$1,inst_52432);
} else {
if((state_val_52435 === (4))){
var inst_52415 = (state_52434[(7)]);
var inst_52415__$1 = (state_52434[(2)]);
var inst_52416 = (inst_52415__$1 == null);
var state_52434__$1 = (function (){var statearr_52437 = state_52434;
(statearr_52437[(7)] = inst_52415__$1);

return statearr_52437;
})();
if(cljs.core.truth_(inst_52416)){
var statearr_52438_52551 = state_52434__$1;
(statearr_52438_52551[(1)] = (5));

} else {
var statearr_52439_52552 = state_52434__$1;
(statearr_52439_52552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52435 === (5))){
var inst_52418 = cljs.core.async.close_BANG_.call(null,jobs);
var state_52434__$1 = state_52434;
var statearr_52440_52553 = state_52434__$1;
(statearr_52440_52553[(2)] = inst_52418);

(statearr_52440_52553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52435 === (6))){
var inst_52415 = (state_52434[(7)]);
var inst_52420 = (state_52434[(8)]);
var inst_52420__$1 = cljs.core.async.chan.call(null,(1));
var inst_52421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52422 = [inst_52415,inst_52420__$1];
var inst_52423 = (new cljs.core.PersistentVector(null,2,(5),inst_52421,inst_52422,null));
var state_52434__$1 = (function (){var statearr_52441 = state_52434;
(statearr_52441[(8)] = inst_52420__$1);

return statearr_52441;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52434__$1,(8),jobs,inst_52423);
} else {
if((state_val_52435 === (7))){
var inst_52430 = (state_52434[(2)]);
var state_52434__$1 = state_52434;
var statearr_52442_52554 = state_52434__$1;
(statearr_52442_52554[(2)] = inst_52430);

(statearr_52442_52554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52435 === (8))){
var inst_52420 = (state_52434[(8)]);
var inst_52425 = (state_52434[(2)]);
var state_52434__$1 = (function (){var statearr_52443 = state_52434;
(statearr_52443[(9)] = inst_52425);

return statearr_52443;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52434__$1,(9),results,inst_52420);
} else {
if((state_val_52435 === (9))){
var inst_52427 = (state_52434[(2)]);
var state_52434__$1 = (function (){var statearr_52444 = state_52434;
(statearr_52444[(10)] = inst_52427);

return statearr_52444;
})();
var statearr_52445_52555 = state_52434__$1;
(statearr_52445_52555[(2)] = null);

(statearr_52445_52555[(1)] = (2));


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
});})(c__28171__auto___52549,jobs,results,process,async))
;
return ((function (switch__28150__auto__,c__28171__auto___52549,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_52449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_52449[(1)] = (1));

return statearr_52449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_52434){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_52434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e52450){if((e52450 instanceof Object)){
var ex__28154__auto__ = e52450;
var statearr_52451_52556 = state_52434;
(statearr_52451_52556[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52557 = state_52434;
state_52434 = G__52557;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_52434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_52434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___52549,jobs,results,process,async))
})();
var state__28173__auto__ = (function (){var statearr_52452 = f__28172__auto__.call(null);
(statearr_52452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___52549);

return statearr_52452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___52549,jobs,results,process,async))
);


var c__28171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto__,jobs,results,process,async){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto__,jobs,results,process,async){
return (function (state_52490){
var state_val_52491 = (state_52490[(1)]);
if((state_val_52491 === (7))){
var inst_52486 = (state_52490[(2)]);
var state_52490__$1 = state_52490;
var statearr_52492_52558 = state_52490__$1;
(statearr_52492_52558[(2)] = inst_52486);

(statearr_52492_52558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (20))){
var state_52490__$1 = state_52490;
var statearr_52493_52559 = state_52490__$1;
(statearr_52493_52559[(2)] = null);

(statearr_52493_52559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (1))){
var state_52490__$1 = state_52490;
var statearr_52494_52560 = state_52490__$1;
(statearr_52494_52560[(2)] = null);

(statearr_52494_52560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (4))){
var inst_52455 = (state_52490[(7)]);
var inst_52455__$1 = (state_52490[(2)]);
var inst_52456 = (inst_52455__$1 == null);
var state_52490__$1 = (function (){var statearr_52495 = state_52490;
(statearr_52495[(7)] = inst_52455__$1);

return statearr_52495;
})();
if(cljs.core.truth_(inst_52456)){
var statearr_52496_52561 = state_52490__$1;
(statearr_52496_52561[(1)] = (5));

} else {
var statearr_52497_52562 = state_52490__$1;
(statearr_52497_52562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (15))){
var inst_52468 = (state_52490[(8)]);
var state_52490__$1 = state_52490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52490__$1,(18),to,inst_52468);
} else {
if((state_val_52491 === (21))){
var inst_52481 = (state_52490[(2)]);
var state_52490__$1 = state_52490;
var statearr_52498_52563 = state_52490__$1;
(statearr_52498_52563[(2)] = inst_52481);

(statearr_52498_52563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (13))){
var inst_52483 = (state_52490[(2)]);
var state_52490__$1 = (function (){var statearr_52499 = state_52490;
(statearr_52499[(9)] = inst_52483);

return statearr_52499;
})();
var statearr_52500_52564 = state_52490__$1;
(statearr_52500_52564[(2)] = null);

(statearr_52500_52564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (6))){
var inst_52455 = (state_52490[(7)]);
var state_52490__$1 = state_52490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52490__$1,(11),inst_52455);
} else {
if((state_val_52491 === (17))){
var inst_52476 = (state_52490[(2)]);
var state_52490__$1 = state_52490;
if(cljs.core.truth_(inst_52476)){
var statearr_52501_52565 = state_52490__$1;
(statearr_52501_52565[(1)] = (19));

} else {
var statearr_52502_52566 = state_52490__$1;
(statearr_52502_52566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (3))){
var inst_52488 = (state_52490[(2)]);
var state_52490__$1 = state_52490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52490__$1,inst_52488);
} else {
if((state_val_52491 === (12))){
var inst_52465 = (state_52490[(10)]);
var state_52490__$1 = state_52490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52490__$1,(14),inst_52465);
} else {
if((state_val_52491 === (2))){
var state_52490__$1 = state_52490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52490__$1,(4),results);
} else {
if((state_val_52491 === (19))){
var state_52490__$1 = state_52490;
var statearr_52503_52567 = state_52490__$1;
(statearr_52503_52567[(2)] = null);

(statearr_52503_52567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (11))){
var inst_52465 = (state_52490[(2)]);
var state_52490__$1 = (function (){var statearr_52504 = state_52490;
(statearr_52504[(10)] = inst_52465);

return statearr_52504;
})();
var statearr_52505_52568 = state_52490__$1;
(statearr_52505_52568[(2)] = null);

(statearr_52505_52568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (9))){
var state_52490__$1 = state_52490;
var statearr_52506_52569 = state_52490__$1;
(statearr_52506_52569[(2)] = null);

(statearr_52506_52569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (5))){
var state_52490__$1 = state_52490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52507_52570 = state_52490__$1;
(statearr_52507_52570[(1)] = (8));

} else {
var statearr_52508_52571 = state_52490__$1;
(statearr_52508_52571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (14))){
var inst_52470 = (state_52490[(11)]);
var inst_52468 = (state_52490[(8)]);
var inst_52468__$1 = (state_52490[(2)]);
var inst_52469 = (inst_52468__$1 == null);
var inst_52470__$1 = cljs.core.not.call(null,inst_52469);
var state_52490__$1 = (function (){var statearr_52509 = state_52490;
(statearr_52509[(11)] = inst_52470__$1);

(statearr_52509[(8)] = inst_52468__$1);

return statearr_52509;
})();
if(inst_52470__$1){
var statearr_52510_52572 = state_52490__$1;
(statearr_52510_52572[(1)] = (15));

} else {
var statearr_52511_52573 = state_52490__$1;
(statearr_52511_52573[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (16))){
var inst_52470 = (state_52490[(11)]);
var state_52490__$1 = state_52490;
var statearr_52512_52574 = state_52490__$1;
(statearr_52512_52574[(2)] = inst_52470);

(statearr_52512_52574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (10))){
var inst_52462 = (state_52490[(2)]);
var state_52490__$1 = state_52490;
var statearr_52513_52575 = state_52490__$1;
(statearr_52513_52575[(2)] = inst_52462);

(statearr_52513_52575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (18))){
var inst_52473 = (state_52490[(2)]);
var state_52490__$1 = state_52490;
var statearr_52514_52576 = state_52490__$1;
(statearr_52514_52576[(2)] = inst_52473);

(statearr_52514_52576[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (8))){
var inst_52459 = cljs.core.async.close_BANG_.call(null,to);
var state_52490__$1 = state_52490;
var statearr_52515_52577 = state_52490__$1;
(statearr_52515_52577[(2)] = inst_52459);

(statearr_52515_52577[(1)] = (10));


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
var statearr_52519 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_52519[(1)] = (1));

return statearr_52519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_52490){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_52490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e52520){if((e52520 instanceof Object)){
var ex__28154__auto__ = e52520;
var statearr_52521_52578 = state_52490;
(statearr_52521_52578[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52579 = state_52490;
state_52490 = G__52579;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_52490){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_52490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__,jobs,results,process,async))
})();
var state__28173__auto__ = (function (){var statearr_52522 = f__28172__auto__.call(null);
(statearr_52522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_52522;
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
var args52580 = [];
var len__27054__auto___52583 = arguments.length;
var i__27055__auto___52584 = (0);
while(true){
if((i__27055__auto___52584 < len__27054__auto___52583)){
args52580.push((arguments[i__27055__auto___52584]));

var G__52585 = (i__27055__auto___52584 + (1));
i__27055__auto___52584 = G__52585;
continue;
} else {
}
break;
}

var G__52582 = args52580.length;
switch (G__52582) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52580.length)].join('')));

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
var args52587 = [];
var len__27054__auto___52590 = arguments.length;
var i__27055__auto___52591 = (0);
while(true){
if((i__27055__auto___52591 < len__27054__auto___52590)){
args52587.push((arguments[i__27055__auto___52591]));

var G__52592 = (i__27055__auto___52591 + (1));
i__27055__auto___52591 = G__52592;
continue;
} else {
}
break;
}

var G__52589 = args52587.length;
switch (G__52589) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52587.length)].join('')));

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
var args52594 = [];
var len__27054__auto___52647 = arguments.length;
var i__27055__auto___52648 = (0);
while(true){
if((i__27055__auto___52648 < len__27054__auto___52647)){
args52594.push((arguments[i__27055__auto___52648]));

var G__52649 = (i__27055__auto___52648 + (1));
i__27055__auto___52648 = G__52649;
continue;
} else {
}
break;
}

var G__52596 = args52594.length;
switch (G__52596) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52594.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28171__auto___52651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___52651,tc,fc){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___52651,tc,fc){
return (function (state_52622){
var state_val_52623 = (state_52622[(1)]);
if((state_val_52623 === (7))){
var inst_52618 = (state_52622[(2)]);
var state_52622__$1 = state_52622;
var statearr_52624_52652 = state_52622__$1;
(statearr_52624_52652[(2)] = inst_52618);

(statearr_52624_52652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52623 === (1))){
var state_52622__$1 = state_52622;
var statearr_52625_52653 = state_52622__$1;
(statearr_52625_52653[(2)] = null);

(statearr_52625_52653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52623 === (4))){
var inst_52599 = (state_52622[(7)]);
var inst_52599__$1 = (state_52622[(2)]);
var inst_52600 = (inst_52599__$1 == null);
var state_52622__$1 = (function (){var statearr_52626 = state_52622;
(statearr_52626[(7)] = inst_52599__$1);

return statearr_52626;
})();
if(cljs.core.truth_(inst_52600)){
var statearr_52627_52654 = state_52622__$1;
(statearr_52627_52654[(1)] = (5));

} else {
var statearr_52628_52655 = state_52622__$1;
(statearr_52628_52655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52623 === (13))){
var state_52622__$1 = state_52622;
var statearr_52629_52656 = state_52622__$1;
(statearr_52629_52656[(2)] = null);

(statearr_52629_52656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52623 === (6))){
var inst_52599 = (state_52622[(7)]);
var inst_52605 = p.call(null,inst_52599);
var state_52622__$1 = state_52622;
if(cljs.core.truth_(inst_52605)){
var statearr_52630_52657 = state_52622__$1;
(statearr_52630_52657[(1)] = (9));

} else {
var statearr_52631_52658 = state_52622__$1;
(statearr_52631_52658[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52623 === (3))){
var inst_52620 = (state_52622[(2)]);
var state_52622__$1 = state_52622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52622__$1,inst_52620);
} else {
if((state_val_52623 === (12))){
var state_52622__$1 = state_52622;
var statearr_52632_52659 = state_52622__$1;
(statearr_52632_52659[(2)] = null);

(statearr_52632_52659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52623 === (2))){
var state_52622__$1 = state_52622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52622__$1,(4),ch);
} else {
if((state_val_52623 === (11))){
var inst_52599 = (state_52622[(7)]);
var inst_52609 = (state_52622[(2)]);
var state_52622__$1 = state_52622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52622__$1,(8),inst_52609,inst_52599);
} else {
if((state_val_52623 === (9))){
var state_52622__$1 = state_52622;
var statearr_52633_52660 = state_52622__$1;
(statearr_52633_52660[(2)] = tc);

(statearr_52633_52660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52623 === (5))){
var inst_52602 = cljs.core.async.close_BANG_.call(null,tc);
var inst_52603 = cljs.core.async.close_BANG_.call(null,fc);
var state_52622__$1 = (function (){var statearr_52634 = state_52622;
(statearr_52634[(8)] = inst_52602);

return statearr_52634;
})();
var statearr_52635_52661 = state_52622__$1;
(statearr_52635_52661[(2)] = inst_52603);

(statearr_52635_52661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52623 === (14))){
var inst_52616 = (state_52622[(2)]);
var state_52622__$1 = state_52622;
var statearr_52636_52662 = state_52622__$1;
(statearr_52636_52662[(2)] = inst_52616);

(statearr_52636_52662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52623 === (10))){
var state_52622__$1 = state_52622;
var statearr_52637_52663 = state_52622__$1;
(statearr_52637_52663[(2)] = fc);

(statearr_52637_52663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52623 === (8))){
var inst_52611 = (state_52622[(2)]);
var state_52622__$1 = state_52622;
if(cljs.core.truth_(inst_52611)){
var statearr_52638_52664 = state_52622__$1;
(statearr_52638_52664[(1)] = (12));

} else {
var statearr_52639_52665 = state_52622__$1;
(statearr_52639_52665[(1)] = (13));

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
});})(c__28171__auto___52651,tc,fc))
;
return ((function (switch__28150__auto__,c__28171__auto___52651,tc,fc){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_52643 = [null,null,null,null,null,null,null,null,null];
(statearr_52643[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_52643[(1)] = (1));

return statearr_52643;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_52622){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_52622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e52644){if((e52644 instanceof Object)){
var ex__28154__auto__ = e52644;
var statearr_52645_52666 = state_52622;
(statearr_52645_52666[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52667 = state_52622;
state_52622 = G__52667;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_52622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_52622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___52651,tc,fc))
})();
var state__28173__auto__ = (function (){var statearr_52646 = f__28172__auto__.call(null);
(statearr_52646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___52651);

return statearr_52646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___52651,tc,fc))
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
return (function (state_52731){
var state_val_52732 = (state_52731[(1)]);
if((state_val_52732 === (7))){
var inst_52727 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52733_52754 = state_52731__$1;
(statearr_52733_52754[(2)] = inst_52727);

(statearr_52733_52754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (1))){
var inst_52711 = init;
var state_52731__$1 = (function (){var statearr_52734 = state_52731;
(statearr_52734[(7)] = inst_52711);

return statearr_52734;
})();
var statearr_52735_52755 = state_52731__$1;
(statearr_52735_52755[(2)] = null);

(statearr_52735_52755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (4))){
var inst_52714 = (state_52731[(8)]);
var inst_52714__$1 = (state_52731[(2)]);
var inst_52715 = (inst_52714__$1 == null);
var state_52731__$1 = (function (){var statearr_52736 = state_52731;
(statearr_52736[(8)] = inst_52714__$1);

return statearr_52736;
})();
if(cljs.core.truth_(inst_52715)){
var statearr_52737_52756 = state_52731__$1;
(statearr_52737_52756[(1)] = (5));

} else {
var statearr_52738_52757 = state_52731__$1;
(statearr_52738_52757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (6))){
var inst_52718 = (state_52731[(9)]);
var inst_52714 = (state_52731[(8)]);
var inst_52711 = (state_52731[(7)]);
var inst_52718__$1 = f.call(null,inst_52711,inst_52714);
var inst_52719 = cljs.core.reduced_QMARK_.call(null,inst_52718__$1);
var state_52731__$1 = (function (){var statearr_52739 = state_52731;
(statearr_52739[(9)] = inst_52718__$1);

return statearr_52739;
})();
if(inst_52719){
var statearr_52740_52758 = state_52731__$1;
(statearr_52740_52758[(1)] = (8));

} else {
var statearr_52741_52759 = state_52731__$1;
(statearr_52741_52759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (3))){
var inst_52729 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52731__$1,inst_52729);
} else {
if((state_val_52732 === (2))){
var state_52731__$1 = state_52731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52731__$1,(4),ch);
} else {
if((state_val_52732 === (9))){
var inst_52718 = (state_52731[(9)]);
var inst_52711 = inst_52718;
var state_52731__$1 = (function (){var statearr_52742 = state_52731;
(statearr_52742[(7)] = inst_52711);

return statearr_52742;
})();
var statearr_52743_52760 = state_52731__$1;
(statearr_52743_52760[(2)] = null);

(statearr_52743_52760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (5))){
var inst_52711 = (state_52731[(7)]);
var state_52731__$1 = state_52731;
var statearr_52744_52761 = state_52731__$1;
(statearr_52744_52761[(2)] = inst_52711);

(statearr_52744_52761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (10))){
var inst_52725 = (state_52731[(2)]);
var state_52731__$1 = state_52731;
var statearr_52745_52762 = state_52731__$1;
(statearr_52745_52762[(2)] = inst_52725);

(statearr_52745_52762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52732 === (8))){
var inst_52718 = (state_52731[(9)]);
var inst_52721 = cljs.core.deref.call(null,inst_52718);
var state_52731__$1 = state_52731;
var statearr_52746_52763 = state_52731__$1;
(statearr_52746_52763[(2)] = inst_52721);

(statearr_52746_52763[(1)] = (10));


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
var statearr_52750 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52750[(0)] = cljs$core$async$reduce_$_state_machine__28151__auto__);

(statearr_52750[(1)] = (1));

return statearr_52750;
});
var cljs$core$async$reduce_$_state_machine__28151__auto____1 = (function (state_52731){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_52731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e52751){if((e52751 instanceof Object)){
var ex__28154__auto__ = e52751;
var statearr_52752_52764 = state_52731;
(statearr_52752_52764[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52765 = state_52731;
state_52731 = G__52765;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28151__auto__ = function(state_52731){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28151__auto____1.call(this,state_52731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28151__auto____0;
cljs$core$async$reduce_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28151__auto____1;
return cljs$core$async$reduce_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__))
})();
var state__28173__auto__ = (function (){var statearr_52753 = f__28172__auto__.call(null);
(statearr_52753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_52753;
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
return (function (state_52785){
var state_val_52786 = (state_52785[(1)]);
if((state_val_52786 === (1))){
var inst_52780 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_52785__$1 = state_52785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52785__$1,(2),inst_52780);
} else {
if((state_val_52786 === (2))){
var inst_52782 = (state_52785[(2)]);
var inst_52783 = f__$1.call(null,inst_52782);
var state_52785__$1 = state_52785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52785__$1,inst_52783);
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
var statearr_52790 = [null,null,null,null,null,null,null];
(statearr_52790[(0)] = cljs$core$async$transduce_$_state_machine__28151__auto__);

(statearr_52790[(1)] = (1));

return statearr_52790;
});
var cljs$core$async$transduce_$_state_machine__28151__auto____1 = (function (state_52785){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_52785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e52791){if((e52791 instanceof Object)){
var ex__28154__auto__ = e52791;
var statearr_52792_52794 = state_52785;
(statearr_52792_52794[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52795 = state_52785;
state_52785 = G__52795;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28151__auto__ = function(state_52785){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28151__auto____1.call(this,state_52785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28151__auto____0;
cljs$core$async$transduce_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28151__auto____1;
return cljs$core$async$transduce_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__,f__$1))
})();
var state__28173__auto__ = (function (){var statearr_52793 = f__28172__auto__.call(null);
(statearr_52793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_52793;
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
var args52796 = [];
var len__27054__auto___52848 = arguments.length;
var i__27055__auto___52849 = (0);
while(true){
if((i__27055__auto___52849 < len__27054__auto___52848)){
args52796.push((arguments[i__27055__auto___52849]));

var G__52850 = (i__27055__auto___52849 + (1));
i__27055__auto___52849 = G__52850;
continue;
} else {
}
break;
}

var G__52798 = args52796.length;
switch (G__52798) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52796.length)].join('')));

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
return (function (state_52823){
var state_val_52824 = (state_52823[(1)]);
if((state_val_52824 === (7))){
var inst_52805 = (state_52823[(2)]);
var state_52823__$1 = state_52823;
var statearr_52825_52852 = state_52823__$1;
(statearr_52825_52852[(2)] = inst_52805);

(statearr_52825_52852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52824 === (1))){
var inst_52799 = cljs.core.seq.call(null,coll);
var inst_52800 = inst_52799;
var state_52823__$1 = (function (){var statearr_52826 = state_52823;
(statearr_52826[(7)] = inst_52800);

return statearr_52826;
})();
var statearr_52827_52853 = state_52823__$1;
(statearr_52827_52853[(2)] = null);

(statearr_52827_52853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52824 === (4))){
var inst_52800 = (state_52823[(7)]);
var inst_52803 = cljs.core.first.call(null,inst_52800);
var state_52823__$1 = state_52823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52823__$1,(7),ch,inst_52803);
} else {
if((state_val_52824 === (13))){
var inst_52817 = (state_52823[(2)]);
var state_52823__$1 = state_52823;
var statearr_52828_52854 = state_52823__$1;
(statearr_52828_52854[(2)] = inst_52817);

(statearr_52828_52854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52824 === (6))){
var inst_52808 = (state_52823[(2)]);
var state_52823__$1 = state_52823;
if(cljs.core.truth_(inst_52808)){
var statearr_52829_52855 = state_52823__$1;
(statearr_52829_52855[(1)] = (8));

} else {
var statearr_52830_52856 = state_52823__$1;
(statearr_52830_52856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52824 === (3))){
var inst_52821 = (state_52823[(2)]);
var state_52823__$1 = state_52823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52823__$1,inst_52821);
} else {
if((state_val_52824 === (12))){
var state_52823__$1 = state_52823;
var statearr_52831_52857 = state_52823__$1;
(statearr_52831_52857[(2)] = null);

(statearr_52831_52857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52824 === (2))){
var inst_52800 = (state_52823[(7)]);
var state_52823__$1 = state_52823;
if(cljs.core.truth_(inst_52800)){
var statearr_52832_52858 = state_52823__$1;
(statearr_52832_52858[(1)] = (4));

} else {
var statearr_52833_52859 = state_52823__$1;
(statearr_52833_52859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52824 === (11))){
var inst_52814 = cljs.core.async.close_BANG_.call(null,ch);
var state_52823__$1 = state_52823;
var statearr_52834_52860 = state_52823__$1;
(statearr_52834_52860[(2)] = inst_52814);

(statearr_52834_52860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52824 === (9))){
var state_52823__$1 = state_52823;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52835_52861 = state_52823__$1;
(statearr_52835_52861[(1)] = (11));

} else {
var statearr_52836_52862 = state_52823__$1;
(statearr_52836_52862[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52824 === (5))){
var inst_52800 = (state_52823[(7)]);
var state_52823__$1 = state_52823;
var statearr_52837_52863 = state_52823__$1;
(statearr_52837_52863[(2)] = inst_52800);

(statearr_52837_52863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52824 === (10))){
var inst_52819 = (state_52823[(2)]);
var state_52823__$1 = state_52823;
var statearr_52838_52864 = state_52823__$1;
(statearr_52838_52864[(2)] = inst_52819);

(statearr_52838_52864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52824 === (8))){
var inst_52800 = (state_52823[(7)]);
var inst_52810 = cljs.core.next.call(null,inst_52800);
var inst_52800__$1 = inst_52810;
var state_52823__$1 = (function (){var statearr_52839 = state_52823;
(statearr_52839[(7)] = inst_52800__$1);

return statearr_52839;
})();
var statearr_52840_52865 = state_52823__$1;
(statearr_52840_52865[(2)] = null);

(statearr_52840_52865[(1)] = (2));


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
var statearr_52844 = [null,null,null,null,null,null,null,null];
(statearr_52844[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_52844[(1)] = (1));

return statearr_52844;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_52823){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_52823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e52845){if((e52845 instanceof Object)){
var ex__28154__auto__ = e52845;
var statearr_52846_52866 = state_52823;
(statearr_52846_52866[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52867 = state_52823;
state_52823 = G__52867;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_52823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_52823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__))
})();
var state__28173__auto__ = (function (){var statearr_52847 = f__28172__auto__.call(null);
(statearr_52847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_52847;
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
if(typeof cljs.core.async.t_cljs$core$async53093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53093 = (function (mult,ch,cs,meta53094){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta53094 = meta53094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_53095,meta53094__$1){
var self__ = this;
var _53095__$1 = this;
return (new cljs.core.async.t_cljs$core$async53093(self__.mult,self__.ch,self__.cs,meta53094__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async53093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_53095){
var self__ = this;
var _53095__$1 = this;
return self__.meta53094;
});})(cs))
;

cljs.core.async.t_cljs$core$async53093.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async53093.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async53093.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async53093.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async53093.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async53093.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async53093.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta53094","meta53094",-881225899,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async53093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53093";

cljs.core.async.t_cljs$core$async53093.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async53093");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async53093 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async53093(mult__$1,ch__$1,cs__$1,meta53094){
return (new cljs.core.async.t_cljs$core$async53093(mult__$1,ch__$1,cs__$1,meta53094));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async53093(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28171__auto___53318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___53318,cs,m,dchan,dctr,done){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___53318,cs,m,dchan,dctr,done){
return (function (state_53230){
var state_val_53231 = (state_53230[(1)]);
if((state_val_53231 === (7))){
var inst_53226 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53232_53319 = state_53230__$1;
(statearr_53232_53319[(2)] = inst_53226);

(statearr_53232_53319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (20))){
var inst_53129 = (state_53230[(7)]);
var inst_53141 = cljs.core.first.call(null,inst_53129);
var inst_53142 = cljs.core.nth.call(null,inst_53141,(0),null);
var inst_53143 = cljs.core.nth.call(null,inst_53141,(1),null);
var state_53230__$1 = (function (){var statearr_53233 = state_53230;
(statearr_53233[(8)] = inst_53142);

return statearr_53233;
})();
if(cljs.core.truth_(inst_53143)){
var statearr_53234_53320 = state_53230__$1;
(statearr_53234_53320[(1)] = (22));

} else {
var statearr_53235_53321 = state_53230__$1;
(statearr_53235_53321[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (27))){
var inst_53178 = (state_53230[(9)]);
var inst_53171 = (state_53230[(10)]);
var inst_53173 = (state_53230[(11)]);
var inst_53098 = (state_53230[(12)]);
var inst_53178__$1 = cljs.core._nth.call(null,inst_53171,inst_53173);
var inst_53179 = cljs.core.async.put_BANG_.call(null,inst_53178__$1,inst_53098,done);
var state_53230__$1 = (function (){var statearr_53236 = state_53230;
(statearr_53236[(9)] = inst_53178__$1);

return statearr_53236;
})();
if(cljs.core.truth_(inst_53179)){
var statearr_53237_53322 = state_53230__$1;
(statearr_53237_53322[(1)] = (30));

} else {
var statearr_53238_53323 = state_53230__$1;
(statearr_53238_53323[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (1))){
var state_53230__$1 = state_53230;
var statearr_53239_53324 = state_53230__$1;
(statearr_53239_53324[(2)] = null);

(statearr_53239_53324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (24))){
var inst_53129 = (state_53230[(7)]);
var inst_53148 = (state_53230[(2)]);
var inst_53149 = cljs.core.next.call(null,inst_53129);
var inst_53107 = inst_53149;
var inst_53108 = null;
var inst_53109 = (0);
var inst_53110 = (0);
var state_53230__$1 = (function (){var statearr_53240 = state_53230;
(statearr_53240[(13)] = inst_53108);

(statearr_53240[(14)] = inst_53109);

(statearr_53240[(15)] = inst_53110);

(statearr_53240[(16)] = inst_53148);

(statearr_53240[(17)] = inst_53107);

return statearr_53240;
})();
var statearr_53241_53325 = state_53230__$1;
(statearr_53241_53325[(2)] = null);

(statearr_53241_53325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (39))){
var state_53230__$1 = state_53230;
var statearr_53245_53326 = state_53230__$1;
(statearr_53245_53326[(2)] = null);

(statearr_53245_53326[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (4))){
var inst_53098 = (state_53230[(12)]);
var inst_53098__$1 = (state_53230[(2)]);
var inst_53099 = (inst_53098__$1 == null);
var state_53230__$1 = (function (){var statearr_53246 = state_53230;
(statearr_53246[(12)] = inst_53098__$1);

return statearr_53246;
})();
if(cljs.core.truth_(inst_53099)){
var statearr_53247_53327 = state_53230__$1;
(statearr_53247_53327[(1)] = (5));

} else {
var statearr_53248_53328 = state_53230__$1;
(statearr_53248_53328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (15))){
var inst_53108 = (state_53230[(13)]);
var inst_53109 = (state_53230[(14)]);
var inst_53110 = (state_53230[(15)]);
var inst_53107 = (state_53230[(17)]);
var inst_53125 = (state_53230[(2)]);
var inst_53126 = (inst_53110 + (1));
var tmp53242 = inst_53108;
var tmp53243 = inst_53109;
var tmp53244 = inst_53107;
var inst_53107__$1 = tmp53244;
var inst_53108__$1 = tmp53242;
var inst_53109__$1 = tmp53243;
var inst_53110__$1 = inst_53126;
var state_53230__$1 = (function (){var statearr_53249 = state_53230;
(statearr_53249[(18)] = inst_53125);

(statearr_53249[(13)] = inst_53108__$1);

(statearr_53249[(14)] = inst_53109__$1);

(statearr_53249[(15)] = inst_53110__$1);

(statearr_53249[(17)] = inst_53107__$1);

return statearr_53249;
})();
var statearr_53250_53329 = state_53230__$1;
(statearr_53250_53329[(2)] = null);

(statearr_53250_53329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (21))){
var inst_53152 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53254_53330 = state_53230__$1;
(statearr_53254_53330[(2)] = inst_53152);

(statearr_53254_53330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (31))){
var inst_53178 = (state_53230[(9)]);
var inst_53182 = done.call(null,null);
var inst_53183 = cljs.core.async.untap_STAR_.call(null,m,inst_53178);
var state_53230__$1 = (function (){var statearr_53255 = state_53230;
(statearr_53255[(19)] = inst_53182);

return statearr_53255;
})();
var statearr_53256_53331 = state_53230__$1;
(statearr_53256_53331[(2)] = inst_53183);

(statearr_53256_53331[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (32))){
var inst_53171 = (state_53230[(10)]);
var inst_53172 = (state_53230[(20)]);
var inst_53173 = (state_53230[(11)]);
var inst_53170 = (state_53230[(21)]);
var inst_53185 = (state_53230[(2)]);
var inst_53186 = (inst_53173 + (1));
var tmp53251 = inst_53171;
var tmp53252 = inst_53172;
var tmp53253 = inst_53170;
var inst_53170__$1 = tmp53253;
var inst_53171__$1 = tmp53251;
var inst_53172__$1 = tmp53252;
var inst_53173__$1 = inst_53186;
var state_53230__$1 = (function (){var statearr_53257 = state_53230;
(statearr_53257[(22)] = inst_53185);

(statearr_53257[(10)] = inst_53171__$1);

(statearr_53257[(20)] = inst_53172__$1);

(statearr_53257[(11)] = inst_53173__$1);

(statearr_53257[(21)] = inst_53170__$1);

return statearr_53257;
})();
var statearr_53258_53332 = state_53230__$1;
(statearr_53258_53332[(2)] = null);

(statearr_53258_53332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (40))){
var inst_53198 = (state_53230[(23)]);
var inst_53202 = done.call(null,null);
var inst_53203 = cljs.core.async.untap_STAR_.call(null,m,inst_53198);
var state_53230__$1 = (function (){var statearr_53259 = state_53230;
(statearr_53259[(24)] = inst_53202);

return statearr_53259;
})();
var statearr_53260_53333 = state_53230__$1;
(statearr_53260_53333[(2)] = inst_53203);

(statearr_53260_53333[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (33))){
var inst_53189 = (state_53230[(25)]);
var inst_53191 = cljs.core.chunked_seq_QMARK_.call(null,inst_53189);
var state_53230__$1 = state_53230;
if(inst_53191){
var statearr_53261_53334 = state_53230__$1;
(statearr_53261_53334[(1)] = (36));

} else {
var statearr_53262_53335 = state_53230__$1;
(statearr_53262_53335[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (13))){
var inst_53119 = (state_53230[(26)]);
var inst_53122 = cljs.core.async.close_BANG_.call(null,inst_53119);
var state_53230__$1 = state_53230;
var statearr_53263_53336 = state_53230__$1;
(statearr_53263_53336[(2)] = inst_53122);

(statearr_53263_53336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (22))){
var inst_53142 = (state_53230[(8)]);
var inst_53145 = cljs.core.async.close_BANG_.call(null,inst_53142);
var state_53230__$1 = state_53230;
var statearr_53264_53337 = state_53230__$1;
(statearr_53264_53337[(2)] = inst_53145);

(statearr_53264_53337[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (36))){
var inst_53189 = (state_53230[(25)]);
var inst_53193 = cljs.core.chunk_first.call(null,inst_53189);
var inst_53194 = cljs.core.chunk_rest.call(null,inst_53189);
var inst_53195 = cljs.core.count.call(null,inst_53193);
var inst_53170 = inst_53194;
var inst_53171 = inst_53193;
var inst_53172 = inst_53195;
var inst_53173 = (0);
var state_53230__$1 = (function (){var statearr_53265 = state_53230;
(statearr_53265[(10)] = inst_53171);

(statearr_53265[(20)] = inst_53172);

(statearr_53265[(11)] = inst_53173);

(statearr_53265[(21)] = inst_53170);

return statearr_53265;
})();
var statearr_53266_53338 = state_53230__$1;
(statearr_53266_53338[(2)] = null);

(statearr_53266_53338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (41))){
var inst_53189 = (state_53230[(25)]);
var inst_53205 = (state_53230[(2)]);
var inst_53206 = cljs.core.next.call(null,inst_53189);
var inst_53170 = inst_53206;
var inst_53171 = null;
var inst_53172 = (0);
var inst_53173 = (0);
var state_53230__$1 = (function (){var statearr_53267 = state_53230;
(statearr_53267[(10)] = inst_53171);

(statearr_53267[(20)] = inst_53172);

(statearr_53267[(27)] = inst_53205);

(statearr_53267[(11)] = inst_53173);

(statearr_53267[(21)] = inst_53170);

return statearr_53267;
})();
var statearr_53268_53339 = state_53230__$1;
(statearr_53268_53339[(2)] = null);

(statearr_53268_53339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (43))){
var state_53230__$1 = state_53230;
var statearr_53269_53340 = state_53230__$1;
(statearr_53269_53340[(2)] = null);

(statearr_53269_53340[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (29))){
var inst_53214 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53270_53341 = state_53230__$1;
(statearr_53270_53341[(2)] = inst_53214);

(statearr_53270_53341[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (44))){
var inst_53223 = (state_53230[(2)]);
var state_53230__$1 = (function (){var statearr_53271 = state_53230;
(statearr_53271[(28)] = inst_53223);

return statearr_53271;
})();
var statearr_53272_53342 = state_53230__$1;
(statearr_53272_53342[(2)] = null);

(statearr_53272_53342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (6))){
var inst_53162 = (state_53230[(29)]);
var inst_53161 = cljs.core.deref.call(null,cs);
var inst_53162__$1 = cljs.core.keys.call(null,inst_53161);
var inst_53163 = cljs.core.count.call(null,inst_53162__$1);
var inst_53164 = cljs.core.reset_BANG_.call(null,dctr,inst_53163);
var inst_53169 = cljs.core.seq.call(null,inst_53162__$1);
var inst_53170 = inst_53169;
var inst_53171 = null;
var inst_53172 = (0);
var inst_53173 = (0);
var state_53230__$1 = (function (){var statearr_53273 = state_53230;
(statearr_53273[(30)] = inst_53164);

(statearr_53273[(29)] = inst_53162__$1);

(statearr_53273[(10)] = inst_53171);

(statearr_53273[(20)] = inst_53172);

(statearr_53273[(11)] = inst_53173);

(statearr_53273[(21)] = inst_53170);

return statearr_53273;
})();
var statearr_53274_53343 = state_53230__$1;
(statearr_53274_53343[(2)] = null);

(statearr_53274_53343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (28))){
var inst_53170 = (state_53230[(21)]);
var inst_53189 = (state_53230[(25)]);
var inst_53189__$1 = cljs.core.seq.call(null,inst_53170);
var state_53230__$1 = (function (){var statearr_53275 = state_53230;
(statearr_53275[(25)] = inst_53189__$1);

return statearr_53275;
})();
if(inst_53189__$1){
var statearr_53276_53344 = state_53230__$1;
(statearr_53276_53344[(1)] = (33));

} else {
var statearr_53277_53345 = state_53230__$1;
(statearr_53277_53345[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (25))){
var inst_53172 = (state_53230[(20)]);
var inst_53173 = (state_53230[(11)]);
var inst_53175 = (inst_53173 < inst_53172);
var inst_53176 = inst_53175;
var state_53230__$1 = state_53230;
if(cljs.core.truth_(inst_53176)){
var statearr_53278_53346 = state_53230__$1;
(statearr_53278_53346[(1)] = (27));

} else {
var statearr_53279_53347 = state_53230__$1;
(statearr_53279_53347[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (34))){
var state_53230__$1 = state_53230;
var statearr_53280_53348 = state_53230__$1;
(statearr_53280_53348[(2)] = null);

(statearr_53280_53348[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (17))){
var state_53230__$1 = state_53230;
var statearr_53281_53349 = state_53230__$1;
(statearr_53281_53349[(2)] = null);

(statearr_53281_53349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (3))){
var inst_53228 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53230__$1,inst_53228);
} else {
if((state_val_53231 === (12))){
var inst_53157 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53282_53350 = state_53230__$1;
(statearr_53282_53350[(2)] = inst_53157);

(statearr_53282_53350[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (2))){
var state_53230__$1 = state_53230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53230__$1,(4),ch);
} else {
if((state_val_53231 === (23))){
var state_53230__$1 = state_53230;
var statearr_53283_53351 = state_53230__$1;
(statearr_53283_53351[(2)] = null);

(statearr_53283_53351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (35))){
var inst_53212 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53284_53352 = state_53230__$1;
(statearr_53284_53352[(2)] = inst_53212);

(statearr_53284_53352[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (19))){
var inst_53129 = (state_53230[(7)]);
var inst_53133 = cljs.core.chunk_first.call(null,inst_53129);
var inst_53134 = cljs.core.chunk_rest.call(null,inst_53129);
var inst_53135 = cljs.core.count.call(null,inst_53133);
var inst_53107 = inst_53134;
var inst_53108 = inst_53133;
var inst_53109 = inst_53135;
var inst_53110 = (0);
var state_53230__$1 = (function (){var statearr_53285 = state_53230;
(statearr_53285[(13)] = inst_53108);

(statearr_53285[(14)] = inst_53109);

(statearr_53285[(15)] = inst_53110);

(statearr_53285[(17)] = inst_53107);

return statearr_53285;
})();
var statearr_53286_53353 = state_53230__$1;
(statearr_53286_53353[(2)] = null);

(statearr_53286_53353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (11))){
var inst_53129 = (state_53230[(7)]);
var inst_53107 = (state_53230[(17)]);
var inst_53129__$1 = cljs.core.seq.call(null,inst_53107);
var state_53230__$1 = (function (){var statearr_53287 = state_53230;
(statearr_53287[(7)] = inst_53129__$1);

return statearr_53287;
})();
if(inst_53129__$1){
var statearr_53288_53354 = state_53230__$1;
(statearr_53288_53354[(1)] = (16));

} else {
var statearr_53289_53355 = state_53230__$1;
(statearr_53289_53355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (9))){
var inst_53159 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53290_53356 = state_53230__$1;
(statearr_53290_53356[(2)] = inst_53159);

(statearr_53290_53356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (5))){
var inst_53105 = cljs.core.deref.call(null,cs);
var inst_53106 = cljs.core.seq.call(null,inst_53105);
var inst_53107 = inst_53106;
var inst_53108 = null;
var inst_53109 = (0);
var inst_53110 = (0);
var state_53230__$1 = (function (){var statearr_53291 = state_53230;
(statearr_53291[(13)] = inst_53108);

(statearr_53291[(14)] = inst_53109);

(statearr_53291[(15)] = inst_53110);

(statearr_53291[(17)] = inst_53107);

return statearr_53291;
})();
var statearr_53292_53357 = state_53230__$1;
(statearr_53292_53357[(2)] = null);

(statearr_53292_53357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (14))){
var state_53230__$1 = state_53230;
var statearr_53293_53358 = state_53230__$1;
(statearr_53293_53358[(2)] = null);

(statearr_53293_53358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (45))){
var inst_53220 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53294_53359 = state_53230__$1;
(statearr_53294_53359[(2)] = inst_53220);

(statearr_53294_53359[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (26))){
var inst_53162 = (state_53230[(29)]);
var inst_53216 = (state_53230[(2)]);
var inst_53217 = cljs.core.seq.call(null,inst_53162);
var state_53230__$1 = (function (){var statearr_53295 = state_53230;
(statearr_53295[(31)] = inst_53216);

return statearr_53295;
})();
if(inst_53217){
var statearr_53296_53360 = state_53230__$1;
(statearr_53296_53360[(1)] = (42));

} else {
var statearr_53297_53361 = state_53230__$1;
(statearr_53297_53361[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (16))){
var inst_53129 = (state_53230[(7)]);
var inst_53131 = cljs.core.chunked_seq_QMARK_.call(null,inst_53129);
var state_53230__$1 = state_53230;
if(inst_53131){
var statearr_53298_53362 = state_53230__$1;
(statearr_53298_53362[(1)] = (19));

} else {
var statearr_53299_53363 = state_53230__$1;
(statearr_53299_53363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (38))){
var inst_53209 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53300_53364 = state_53230__$1;
(statearr_53300_53364[(2)] = inst_53209);

(statearr_53300_53364[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (30))){
var state_53230__$1 = state_53230;
var statearr_53301_53365 = state_53230__$1;
(statearr_53301_53365[(2)] = null);

(statearr_53301_53365[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (10))){
var inst_53108 = (state_53230[(13)]);
var inst_53110 = (state_53230[(15)]);
var inst_53118 = cljs.core._nth.call(null,inst_53108,inst_53110);
var inst_53119 = cljs.core.nth.call(null,inst_53118,(0),null);
var inst_53120 = cljs.core.nth.call(null,inst_53118,(1),null);
var state_53230__$1 = (function (){var statearr_53302 = state_53230;
(statearr_53302[(26)] = inst_53119);

return statearr_53302;
})();
if(cljs.core.truth_(inst_53120)){
var statearr_53303_53366 = state_53230__$1;
(statearr_53303_53366[(1)] = (13));

} else {
var statearr_53304_53367 = state_53230__$1;
(statearr_53304_53367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (18))){
var inst_53155 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53305_53368 = state_53230__$1;
(statearr_53305_53368[(2)] = inst_53155);

(statearr_53305_53368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (42))){
var state_53230__$1 = state_53230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53230__$1,(45),dchan);
} else {
if((state_val_53231 === (37))){
var inst_53198 = (state_53230[(23)]);
var inst_53098 = (state_53230[(12)]);
var inst_53189 = (state_53230[(25)]);
var inst_53198__$1 = cljs.core.first.call(null,inst_53189);
var inst_53199 = cljs.core.async.put_BANG_.call(null,inst_53198__$1,inst_53098,done);
var state_53230__$1 = (function (){var statearr_53306 = state_53230;
(statearr_53306[(23)] = inst_53198__$1);

return statearr_53306;
})();
if(cljs.core.truth_(inst_53199)){
var statearr_53307_53369 = state_53230__$1;
(statearr_53307_53369[(1)] = (39));

} else {
var statearr_53308_53370 = state_53230__$1;
(statearr_53308_53370[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (8))){
var inst_53109 = (state_53230[(14)]);
var inst_53110 = (state_53230[(15)]);
var inst_53112 = (inst_53110 < inst_53109);
var inst_53113 = inst_53112;
var state_53230__$1 = state_53230;
if(cljs.core.truth_(inst_53113)){
var statearr_53309_53371 = state_53230__$1;
(statearr_53309_53371[(1)] = (10));

} else {
var statearr_53310_53372 = state_53230__$1;
(statearr_53310_53372[(1)] = (11));

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
});})(c__28171__auto___53318,cs,m,dchan,dctr,done))
;
return ((function (switch__28150__auto__,c__28171__auto___53318,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28151__auto__ = null;
var cljs$core$async$mult_$_state_machine__28151__auto____0 = (function (){
var statearr_53314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53314[(0)] = cljs$core$async$mult_$_state_machine__28151__auto__);

(statearr_53314[(1)] = (1));

return statearr_53314;
});
var cljs$core$async$mult_$_state_machine__28151__auto____1 = (function (state_53230){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_53230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e53315){if((e53315 instanceof Object)){
var ex__28154__auto__ = e53315;
var statearr_53316_53373 = state_53230;
(statearr_53316_53373[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53374 = state_53230;
state_53230 = G__53374;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28151__auto__ = function(state_53230){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28151__auto____1.call(this,state_53230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28151__auto____0;
cljs$core$async$mult_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28151__auto____1;
return cljs$core$async$mult_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___53318,cs,m,dchan,dctr,done))
})();
var state__28173__auto__ = (function (){var statearr_53317 = f__28172__auto__.call(null);
(statearr_53317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___53318);

return statearr_53317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___53318,cs,m,dchan,dctr,done))
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
var args53375 = [];
var len__27054__auto___53378 = arguments.length;
var i__27055__auto___53379 = (0);
while(true){
if((i__27055__auto___53379 < len__27054__auto___53378)){
args53375.push((arguments[i__27055__auto___53379]));

var G__53380 = (i__27055__auto___53379 + (1));
i__27055__auto___53379 = G__53380;
continue;
} else {
}
break;
}

var G__53377 = args53375.length;
switch (G__53377) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53375.length)].join('')));

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
var len__27054__auto___53392 = arguments.length;
var i__27055__auto___53393 = (0);
while(true){
if((i__27055__auto___53393 < len__27054__auto___53392)){
args__27061__auto__.push((arguments[i__27055__auto___53393]));

var G__53394 = (i__27055__auto___53393 + (1));
i__27055__auto___53393 = G__53394;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__53386){
var map__53387 = p__53386;
var map__53387__$1 = ((((!((map__53387 == null)))?((((map__53387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53387):map__53387);
var opts = map__53387__$1;
var statearr_53389_53395 = state;
(statearr_53389_53395[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__53387,map__53387__$1,opts){
return (function (val){
var statearr_53390_53396 = state;
(statearr_53390_53396[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__53387,map__53387__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_53391_53397 = state;
(statearr_53391_53397[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq53382){
var G__53383 = cljs.core.first.call(null,seq53382);
var seq53382__$1 = cljs.core.next.call(null,seq53382);
var G__53384 = cljs.core.first.call(null,seq53382__$1);
var seq53382__$2 = cljs.core.next.call(null,seq53382__$1);
var G__53385 = cljs.core.first.call(null,seq53382__$2);
var seq53382__$3 = cljs.core.next.call(null,seq53382__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53383,G__53384,G__53385,seq53382__$3);
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
if(typeof cljs.core.async.t_cljs$core$async53563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53563 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53564){
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
this.meta53564 = meta53564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53565,meta53564__$1){
var self__ = this;
var _53565__$1 = this;
return (new cljs.core.async.t_cljs$core$async53563(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53564__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53565){
var self__ = this;
var _53565__$1 = this;
return self__.meta53564;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53563.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async53563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53563.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async53563.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53563.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53563.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53563.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53563.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async53563.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta53564","meta53564",1641375611,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53563";

cljs.core.async.t_cljs$core$async53563.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async53563");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async53563 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async53563(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53564){
return (new cljs.core.async.t_cljs$core$async53563(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53564));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async53563(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28171__auto___53728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___53728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___53728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_53665){
var state_val_53666 = (state_53665[(1)]);
if((state_val_53666 === (7))){
var inst_53581 = (state_53665[(2)]);
var state_53665__$1 = state_53665;
var statearr_53667_53729 = state_53665__$1;
(statearr_53667_53729[(2)] = inst_53581);

(statearr_53667_53729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (20))){
var inst_53593 = (state_53665[(7)]);
var state_53665__$1 = state_53665;
var statearr_53668_53730 = state_53665__$1;
(statearr_53668_53730[(2)] = inst_53593);

(statearr_53668_53730[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (27))){
var state_53665__$1 = state_53665;
var statearr_53669_53731 = state_53665__$1;
(statearr_53669_53731[(2)] = null);

(statearr_53669_53731[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (1))){
var inst_53569 = (state_53665[(8)]);
var inst_53569__$1 = calc_state.call(null);
var inst_53571 = (inst_53569__$1 == null);
var inst_53572 = cljs.core.not.call(null,inst_53571);
var state_53665__$1 = (function (){var statearr_53670 = state_53665;
(statearr_53670[(8)] = inst_53569__$1);

return statearr_53670;
})();
if(inst_53572){
var statearr_53671_53732 = state_53665__$1;
(statearr_53671_53732[(1)] = (2));

} else {
var statearr_53672_53733 = state_53665__$1;
(statearr_53672_53733[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (24))){
var inst_53616 = (state_53665[(9)]);
var inst_53625 = (state_53665[(10)]);
var inst_53639 = (state_53665[(11)]);
var inst_53639__$1 = inst_53616.call(null,inst_53625);
var state_53665__$1 = (function (){var statearr_53673 = state_53665;
(statearr_53673[(11)] = inst_53639__$1);

return statearr_53673;
})();
if(cljs.core.truth_(inst_53639__$1)){
var statearr_53674_53734 = state_53665__$1;
(statearr_53674_53734[(1)] = (29));

} else {
var statearr_53675_53735 = state_53665__$1;
(statearr_53675_53735[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (4))){
var inst_53584 = (state_53665[(2)]);
var state_53665__$1 = state_53665;
if(cljs.core.truth_(inst_53584)){
var statearr_53676_53736 = state_53665__$1;
(statearr_53676_53736[(1)] = (8));

} else {
var statearr_53677_53737 = state_53665__$1;
(statearr_53677_53737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (15))){
var inst_53610 = (state_53665[(2)]);
var state_53665__$1 = state_53665;
if(cljs.core.truth_(inst_53610)){
var statearr_53678_53738 = state_53665__$1;
(statearr_53678_53738[(1)] = (19));

} else {
var statearr_53679_53739 = state_53665__$1;
(statearr_53679_53739[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (21))){
var inst_53615 = (state_53665[(12)]);
var inst_53615__$1 = (state_53665[(2)]);
var inst_53616 = cljs.core.get.call(null,inst_53615__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53617 = cljs.core.get.call(null,inst_53615__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53618 = cljs.core.get.call(null,inst_53615__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53665__$1 = (function (){var statearr_53680 = state_53665;
(statearr_53680[(12)] = inst_53615__$1);

(statearr_53680[(13)] = inst_53617);

(statearr_53680[(9)] = inst_53616);

return statearr_53680;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_53665__$1,(22),inst_53618);
} else {
if((state_val_53666 === (31))){
var inst_53647 = (state_53665[(2)]);
var state_53665__$1 = state_53665;
if(cljs.core.truth_(inst_53647)){
var statearr_53681_53740 = state_53665__$1;
(statearr_53681_53740[(1)] = (32));

} else {
var statearr_53682_53741 = state_53665__$1;
(statearr_53682_53741[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (32))){
var inst_53624 = (state_53665[(14)]);
var state_53665__$1 = state_53665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53665__$1,(35),out,inst_53624);
} else {
if((state_val_53666 === (33))){
var inst_53615 = (state_53665[(12)]);
var inst_53593 = inst_53615;
var state_53665__$1 = (function (){var statearr_53683 = state_53665;
(statearr_53683[(7)] = inst_53593);

return statearr_53683;
})();
var statearr_53684_53742 = state_53665__$1;
(statearr_53684_53742[(2)] = null);

(statearr_53684_53742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (13))){
var inst_53593 = (state_53665[(7)]);
var inst_53600 = inst_53593.cljs$lang$protocol_mask$partition0$;
var inst_53601 = (inst_53600 & (64));
var inst_53602 = inst_53593.cljs$core$ISeq$;
var inst_53603 = (inst_53601) || (inst_53602);
var state_53665__$1 = state_53665;
if(cljs.core.truth_(inst_53603)){
var statearr_53685_53743 = state_53665__$1;
(statearr_53685_53743[(1)] = (16));

} else {
var statearr_53686_53744 = state_53665__$1;
(statearr_53686_53744[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (22))){
var inst_53625 = (state_53665[(10)]);
var inst_53624 = (state_53665[(14)]);
var inst_53623 = (state_53665[(2)]);
var inst_53624__$1 = cljs.core.nth.call(null,inst_53623,(0),null);
var inst_53625__$1 = cljs.core.nth.call(null,inst_53623,(1),null);
var inst_53626 = (inst_53624__$1 == null);
var inst_53627 = cljs.core._EQ_.call(null,inst_53625__$1,change);
var inst_53628 = (inst_53626) || (inst_53627);
var state_53665__$1 = (function (){var statearr_53687 = state_53665;
(statearr_53687[(10)] = inst_53625__$1);

(statearr_53687[(14)] = inst_53624__$1);

return statearr_53687;
})();
if(cljs.core.truth_(inst_53628)){
var statearr_53688_53745 = state_53665__$1;
(statearr_53688_53745[(1)] = (23));

} else {
var statearr_53689_53746 = state_53665__$1;
(statearr_53689_53746[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (36))){
var inst_53615 = (state_53665[(12)]);
var inst_53593 = inst_53615;
var state_53665__$1 = (function (){var statearr_53690 = state_53665;
(statearr_53690[(7)] = inst_53593);

return statearr_53690;
})();
var statearr_53691_53747 = state_53665__$1;
(statearr_53691_53747[(2)] = null);

(statearr_53691_53747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (29))){
var inst_53639 = (state_53665[(11)]);
var state_53665__$1 = state_53665;
var statearr_53692_53748 = state_53665__$1;
(statearr_53692_53748[(2)] = inst_53639);

(statearr_53692_53748[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (6))){
var state_53665__$1 = state_53665;
var statearr_53693_53749 = state_53665__$1;
(statearr_53693_53749[(2)] = false);

(statearr_53693_53749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (28))){
var inst_53635 = (state_53665[(2)]);
var inst_53636 = calc_state.call(null);
var inst_53593 = inst_53636;
var state_53665__$1 = (function (){var statearr_53694 = state_53665;
(statearr_53694[(15)] = inst_53635);

(statearr_53694[(7)] = inst_53593);

return statearr_53694;
})();
var statearr_53695_53750 = state_53665__$1;
(statearr_53695_53750[(2)] = null);

(statearr_53695_53750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (25))){
var inst_53661 = (state_53665[(2)]);
var state_53665__$1 = state_53665;
var statearr_53696_53751 = state_53665__$1;
(statearr_53696_53751[(2)] = inst_53661);

(statearr_53696_53751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (34))){
var inst_53659 = (state_53665[(2)]);
var state_53665__$1 = state_53665;
var statearr_53697_53752 = state_53665__$1;
(statearr_53697_53752[(2)] = inst_53659);

(statearr_53697_53752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (17))){
var state_53665__$1 = state_53665;
var statearr_53698_53753 = state_53665__$1;
(statearr_53698_53753[(2)] = false);

(statearr_53698_53753[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (3))){
var state_53665__$1 = state_53665;
var statearr_53699_53754 = state_53665__$1;
(statearr_53699_53754[(2)] = false);

(statearr_53699_53754[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (12))){
var inst_53663 = (state_53665[(2)]);
var state_53665__$1 = state_53665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53665__$1,inst_53663);
} else {
if((state_val_53666 === (2))){
var inst_53569 = (state_53665[(8)]);
var inst_53574 = inst_53569.cljs$lang$protocol_mask$partition0$;
var inst_53575 = (inst_53574 & (64));
var inst_53576 = inst_53569.cljs$core$ISeq$;
var inst_53577 = (inst_53575) || (inst_53576);
var state_53665__$1 = state_53665;
if(cljs.core.truth_(inst_53577)){
var statearr_53700_53755 = state_53665__$1;
(statearr_53700_53755[(1)] = (5));

} else {
var statearr_53701_53756 = state_53665__$1;
(statearr_53701_53756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (23))){
var inst_53624 = (state_53665[(14)]);
var inst_53630 = (inst_53624 == null);
var state_53665__$1 = state_53665;
if(cljs.core.truth_(inst_53630)){
var statearr_53702_53757 = state_53665__$1;
(statearr_53702_53757[(1)] = (26));

} else {
var statearr_53703_53758 = state_53665__$1;
(statearr_53703_53758[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (35))){
var inst_53650 = (state_53665[(2)]);
var state_53665__$1 = state_53665;
if(cljs.core.truth_(inst_53650)){
var statearr_53704_53759 = state_53665__$1;
(statearr_53704_53759[(1)] = (36));

} else {
var statearr_53705_53760 = state_53665__$1;
(statearr_53705_53760[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (19))){
var inst_53593 = (state_53665[(7)]);
var inst_53612 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53593);
var state_53665__$1 = state_53665;
var statearr_53706_53761 = state_53665__$1;
(statearr_53706_53761[(2)] = inst_53612);

(statearr_53706_53761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (11))){
var inst_53593 = (state_53665[(7)]);
var inst_53597 = (inst_53593 == null);
var inst_53598 = cljs.core.not.call(null,inst_53597);
var state_53665__$1 = state_53665;
if(inst_53598){
var statearr_53707_53762 = state_53665__$1;
(statearr_53707_53762[(1)] = (13));

} else {
var statearr_53708_53763 = state_53665__$1;
(statearr_53708_53763[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (9))){
var inst_53569 = (state_53665[(8)]);
var state_53665__$1 = state_53665;
var statearr_53709_53764 = state_53665__$1;
(statearr_53709_53764[(2)] = inst_53569);

(statearr_53709_53764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (5))){
var state_53665__$1 = state_53665;
var statearr_53710_53765 = state_53665__$1;
(statearr_53710_53765[(2)] = true);

(statearr_53710_53765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (14))){
var state_53665__$1 = state_53665;
var statearr_53711_53766 = state_53665__$1;
(statearr_53711_53766[(2)] = false);

(statearr_53711_53766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (26))){
var inst_53625 = (state_53665[(10)]);
var inst_53632 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_53625);
var state_53665__$1 = state_53665;
var statearr_53712_53767 = state_53665__$1;
(statearr_53712_53767[(2)] = inst_53632);

(statearr_53712_53767[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (16))){
var state_53665__$1 = state_53665;
var statearr_53713_53768 = state_53665__$1;
(statearr_53713_53768[(2)] = true);

(statearr_53713_53768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (38))){
var inst_53655 = (state_53665[(2)]);
var state_53665__$1 = state_53665;
var statearr_53714_53769 = state_53665__$1;
(statearr_53714_53769[(2)] = inst_53655);

(statearr_53714_53769[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (30))){
var inst_53617 = (state_53665[(13)]);
var inst_53616 = (state_53665[(9)]);
var inst_53625 = (state_53665[(10)]);
var inst_53642 = cljs.core.empty_QMARK_.call(null,inst_53616);
var inst_53643 = inst_53617.call(null,inst_53625);
var inst_53644 = cljs.core.not.call(null,inst_53643);
var inst_53645 = (inst_53642) && (inst_53644);
var state_53665__$1 = state_53665;
var statearr_53715_53770 = state_53665__$1;
(statearr_53715_53770[(2)] = inst_53645);

(statearr_53715_53770[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (10))){
var inst_53569 = (state_53665[(8)]);
var inst_53589 = (state_53665[(2)]);
var inst_53590 = cljs.core.get.call(null,inst_53589,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53591 = cljs.core.get.call(null,inst_53589,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53592 = cljs.core.get.call(null,inst_53589,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53593 = inst_53569;
var state_53665__$1 = (function (){var statearr_53716 = state_53665;
(statearr_53716[(16)] = inst_53590);

(statearr_53716[(17)] = inst_53592);

(statearr_53716[(18)] = inst_53591);

(statearr_53716[(7)] = inst_53593);

return statearr_53716;
})();
var statearr_53717_53771 = state_53665__$1;
(statearr_53717_53771[(2)] = null);

(statearr_53717_53771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (18))){
var inst_53607 = (state_53665[(2)]);
var state_53665__$1 = state_53665;
var statearr_53718_53772 = state_53665__$1;
(statearr_53718_53772[(2)] = inst_53607);

(statearr_53718_53772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (37))){
var state_53665__$1 = state_53665;
var statearr_53719_53773 = state_53665__$1;
(statearr_53719_53773[(2)] = null);

(statearr_53719_53773[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53666 === (8))){
var inst_53569 = (state_53665[(8)]);
var inst_53586 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53569);
var state_53665__$1 = state_53665;
var statearr_53720_53774 = state_53665__$1;
(statearr_53720_53774[(2)] = inst_53586);

(statearr_53720_53774[(1)] = (10));


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
});})(c__28171__auto___53728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28150__auto__,c__28171__auto___53728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28151__auto__ = null;
var cljs$core$async$mix_$_state_machine__28151__auto____0 = (function (){
var statearr_53724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53724[(0)] = cljs$core$async$mix_$_state_machine__28151__auto__);

(statearr_53724[(1)] = (1));

return statearr_53724;
});
var cljs$core$async$mix_$_state_machine__28151__auto____1 = (function (state_53665){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_53665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e53725){if((e53725 instanceof Object)){
var ex__28154__auto__ = e53725;
var statearr_53726_53775 = state_53665;
(statearr_53726_53775[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53776 = state_53665;
state_53665 = G__53776;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28151__auto__ = function(state_53665){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28151__auto____1.call(this,state_53665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28151__auto____0;
cljs$core$async$mix_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28151__auto____1;
return cljs$core$async$mix_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___53728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28173__auto__ = (function (){var statearr_53727 = f__28172__auto__.call(null);
(statearr_53727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___53728);

return statearr_53727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___53728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args53777 = [];
var len__27054__auto___53780 = arguments.length;
var i__27055__auto___53781 = (0);
while(true){
if((i__27055__auto___53781 < len__27054__auto___53780)){
args53777.push((arguments[i__27055__auto___53781]));

var G__53782 = (i__27055__auto___53781 + (1));
i__27055__auto___53781 = G__53782;
continue;
} else {
}
break;
}

var G__53779 = args53777.length;
switch (G__53779) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53777.length)].join('')));

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
var args53785 = [];
var len__27054__auto___53910 = arguments.length;
var i__27055__auto___53911 = (0);
while(true){
if((i__27055__auto___53911 < len__27054__auto___53910)){
args53785.push((arguments[i__27055__auto___53911]));

var G__53912 = (i__27055__auto___53911 + (1));
i__27055__auto___53911 = G__53912;
continue;
} else {
}
break;
}

var G__53787 = args53785.length;
switch (G__53787) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53785.length)].join('')));

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
return (function (p1__53784_SHARP_){
if(cljs.core.truth_(p1__53784_SHARP_.call(null,topic))){
return p1__53784_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__53784_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async53788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53788 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53789){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53789 = meta53789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53790,meta53789__$1){
var self__ = this;
var _53790__$1 = this;
return (new cljs.core.async.t_cljs$core$async53788(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53789__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53790){
var self__ = this;
var _53790__$1 = this;
return self__.meta53789;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53788.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async53788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53788.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async53788.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53788.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async53788.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53788.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53788.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53789","meta53789",259562444,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53788";

cljs.core.async.t_cljs$core$async53788.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async53788");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async53788 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async53788(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53789){
return (new cljs.core.async.t_cljs$core$async53788(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53789));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async53788(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28171__auto___53914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___53914,mults,ensure_mult,p){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___53914,mults,ensure_mult,p){
return (function (state_53862){
var state_val_53863 = (state_53862[(1)]);
if((state_val_53863 === (7))){
var inst_53858 = (state_53862[(2)]);
var state_53862__$1 = state_53862;
var statearr_53864_53915 = state_53862__$1;
(statearr_53864_53915[(2)] = inst_53858);

(statearr_53864_53915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (20))){
var state_53862__$1 = state_53862;
var statearr_53865_53916 = state_53862__$1;
(statearr_53865_53916[(2)] = null);

(statearr_53865_53916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (1))){
var state_53862__$1 = state_53862;
var statearr_53866_53917 = state_53862__$1;
(statearr_53866_53917[(2)] = null);

(statearr_53866_53917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (24))){
var inst_53841 = (state_53862[(7)]);
var inst_53850 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_53841);
var state_53862__$1 = state_53862;
var statearr_53867_53918 = state_53862__$1;
(statearr_53867_53918[(2)] = inst_53850);

(statearr_53867_53918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (4))){
var inst_53793 = (state_53862[(8)]);
var inst_53793__$1 = (state_53862[(2)]);
var inst_53794 = (inst_53793__$1 == null);
var state_53862__$1 = (function (){var statearr_53868 = state_53862;
(statearr_53868[(8)] = inst_53793__$1);

return statearr_53868;
})();
if(cljs.core.truth_(inst_53794)){
var statearr_53869_53919 = state_53862__$1;
(statearr_53869_53919[(1)] = (5));

} else {
var statearr_53870_53920 = state_53862__$1;
(statearr_53870_53920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (15))){
var inst_53835 = (state_53862[(2)]);
var state_53862__$1 = state_53862;
var statearr_53871_53921 = state_53862__$1;
(statearr_53871_53921[(2)] = inst_53835);

(statearr_53871_53921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (21))){
var inst_53855 = (state_53862[(2)]);
var state_53862__$1 = (function (){var statearr_53872 = state_53862;
(statearr_53872[(9)] = inst_53855);

return statearr_53872;
})();
var statearr_53873_53922 = state_53862__$1;
(statearr_53873_53922[(2)] = null);

(statearr_53873_53922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (13))){
var inst_53817 = (state_53862[(10)]);
var inst_53819 = cljs.core.chunked_seq_QMARK_.call(null,inst_53817);
var state_53862__$1 = state_53862;
if(inst_53819){
var statearr_53874_53923 = state_53862__$1;
(statearr_53874_53923[(1)] = (16));

} else {
var statearr_53875_53924 = state_53862__$1;
(statearr_53875_53924[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (22))){
var inst_53847 = (state_53862[(2)]);
var state_53862__$1 = state_53862;
if(cljs.core.truth_(inst_53847)){
var statearr_53876_53925 = state_53862__$1;
(statearr_53876_53925[(1)] = (23));

} else {
var statearr_53877_53926 = state_53862__$1;
(statearr_53877_53926[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (6))){
var inst_53843 = (state_53862[(11)]);
var inst_53841 = (state_53862[(7)]);
var inst_53793 = (state_53862[(8)]);
var inst_53841__$1 = topic_fn.call(null,inst_53793);
var inst_53842 = cljs.core.deref.call(null,mults);
var inst_53843__$1 = cljs.core.get.call(null,inst_53842,inst_53841__$1);
var state_53862__$1 = (function (){var statearr_53878 = state_53862;
(statearr_53878[(11)] = inst_53843__$1);

(statearr_53878[(7)] = inst_53841__$1);

return statearr_53878;
})();
if(cljs.core.truth_(inst_53843__$1)){
var statearr_53879_53927 = state_53862__$1;
(statearr_53879_53927[(1)] = (19));

} else {
var statearr_53880_53928 = state_53862__$1;
(statearr_53880_53928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (25))){
var inst_53852 = (state_53862[(2)]);
var state_53862__$1 = state_53862;
var statearr_53881_53929 = state_53862__$1;
(statearr_53881_53929[(2)] = inst_53852);

(statearr_53881_53929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (17))){
var inst_53817 = (state_53862[(10)]);
var inst_53826 = cljs.core.first.call(null,inst_53817);
var inst_53827 = cljs.core.async.muxch_STAR_.call(null,inst_53826);
var inst_53828 = cljs.core.async.close_BANG_.call(null,inst_53827);
var inst_53829 = cljs.core.next.call(null,inst_53817);
var inst_53803 = inst_53829;
var inst_53804 = null;
var inst_53805 = (0);
var inst_53806 = (0);
var state_53862__$1 = (function (){var statearr_53882 = state_53862;
(statearr_53882[(12)] = inst_53803);

(statearr_53882[(13)] = inst_53804);

(statearr_53882[(14)] = inst_53806);

(statearr_53882[(15)] = inst_53828);

(statearr_53882[(16)] = inst_53805);

return statearr_53882;
})();
var statearr_53883_53930 = state_53862__$1;
(statearr_53883_53930[(2)] = null);

(statearr_53883_53930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (3))){
var inst_53860 = (state_53862[(2)]);
var state_53862__$1 = state_53862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53862__$1,inst_53860);
} else {
if((state_val_53863 === (12))){
var inst_53837 = (state_53862[(2)]);
var state_53862__$1 = state_53862;
var statearr_53884_53931 = state_53862__$1;
(statearr_53884_53931[(2)] = inst_53837);

(statearr_53884_53931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (2))){
var state_53862__$1 = state_53862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53862__$1,(4),ch);
} else {
if((state_val_53863 === (23))){
var state_53862__$1 = state_53862;
var statearr_53885_53932 = state_53862__$1;
(statearr_53885_53932[(2)] = null);

(statearr_53885_53932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (19))){
var inst_53843 = (state_53862[(11)]);
var inst_53793 = (state_53862[(8)]);
var inst_53845 = cljs.core.async.muxch_STAR_.call(null,inst_53843);
var state_53862__$1 = state_53862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53862__$1,(22),inst_53845,inst_53793);
} else {
if((state_val_53863 === (11))){
var inst_53803 = (state_53862[(12)]);
var inst_53817 = (state_53862[(10)]);
var inst_53817__$1 = cljs.core.seq.call(null,inst_53803);
var state_53862__$1 = (function (){var statearr_53886 = state_53862;
(statearr_53886[(10)] = inst_53817__$1);

return statearr_53886;
})();
if(inst_53817__$1){
var statearr_53887_53933 = state_53862__$1;
(statearr_53887_53933[(1)] = (13));

} else {
var statearr_53888_53934 = state_53862__$1;
(statearr_53888_53934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (9))){
var inst_53839 = (state_53862[(2)]);
var state_53862__$1 = state_53862;
var statearr_53889_53935 = state_53862__$1;
(statearr_53889_53935[(2)] = inst_53839);

(statearr_53889_53935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (5))){
var inst_53800 = cljs.core.deref.call(null,mults);
var inst_53801 = cljs.core.vals.call(null,inst_53800);
var inst_53802 = cljs.core.seq.call(null,inst_53801);
var inst_53803 = inst_53802;
var inst_53804 = null;
var inst_53805 = (0);
var inst_53806 = (0);
var state_53862__$1 = (function (){var statearr_53890 = state_53862;
(statearr_53890[(12)] = inst_53803);

(statearr_53890[(13)] = inst_53804);

(statearr_53890[(14)] = inst_53806);

(statearr_53890[(16)] = inst_53805);

return statearr_53890;
})();
var statearr_53891_53936 = state_53862__$1;
(statearr_53891_53936[(2)] = null);

(statearr_53891_53936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (14))){
var state_53862__$1 = state_53862;
var statearr_53895_53937 = state_53862__$1;
(statearr_53895_53937[(2)] = null);

(statearr_53895_53937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (16))){
var inst_53817 = (state_53862[(10)]);
var inst_53821 = cljs.core.chunk_first.call(null,inst_53817);
var inst_53822 = cljs.core.chunk_rest.call(null,inst_53817);
var inst_53823 = cljs.core.count.call(null,inst_53821);
var inst_53803 = inst_53822;
var inst_53804 = inst_53821;
var inst_53805 = inst_53823;
var inst_53806 = (0);
var state_53862__$1 = (function (){var statearr_53896 = state_53862;
(statearr_53896[(12)] = inst_53803);

(statearr_53896[(13)] = inst_53804);

(statearr_53896[(14)] = inst_53806);

(statearr_53896[(16)] = inst_53805);

return statearr_53896;
})();
var statearr_53897_53938 = state_53862__$1;
(statearr_53897_53938[(2)] = null);

(statearr_53897_53938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (10))){
var inst_53803 = (state_53862[(12)]);
var inst_53804 = (state_53862[(13)]);
var inst_53806 = (state_53862[(14)]);
var inst_53805 = (state_53862[(16)]);
var inst_53811 = cljs.core._nth.call(null,inst_53804,inst_53806);
var inst_53812 = cljs.core.async.muxch_STAR_.call(null,inst_53811);
var inst_53813 = cljs.core.async.close_BANG_.call(null,inst_53812);
var inst_53814 = (inst_53806 + (1));
var tmp53892 = inst_53803;
var tmp53893 = inst_53804;
var tmp53894 = inst_53805;
var inst_53803__$1 = tmp53892;
var inst_53804__$1 = tmp53893;
var inst_53805__$1 = tmp53894;
var inst_53806__$1 = inst_53814;
var state_53862__$1 = (function (){var statearr_53898 = state_53862;
(statearr_53898[(12)] = inst_53803__$1);

(statearr_53898[(13)] = inst_53804__$1);

(statearr_53898[(14)] = inst_53806__$1);

(statearr_53898[(17)] = inst_53813);

(statearr_53898[(16)] = inst_53805__$1);

return statearr_53898;
})();
var statearr_53899_53939 = state_53862__$1;
(statearr_53899_53939[(2)] = null);

(statearr_53899_53939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (18))){
var inst_53832 = (state_53862[(2)]);
var state_53862__$1 = state_53862;
var statearr_53900_53940 = state_53862__$1;
(statearr_53900_53940[(2)] = inst_53832);

(statearr_53900_53940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53863 === (8))){
var inst_53806 = (state_53862[(14)]);
var inst_53805 = (state_53862[(16)]);
var inst_53808 = (inst_53806 < inst_53805);
var inst_53809 = inst_53808;
var state_53862__$1 = state_53862;
if(cljs.core.truth_(inst_53809)){
var statearr_53901_53941 = state_53862__$1;
(statearr_53901_53941[(1)] = (10));

} else {
var statearr_53902_53942 = state_53862__$1;
(statearr_53902_53942[(1)] = (11));

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
});})(c__28171__auto___53914,mults,ensure_mult,p))
;
return ((function (switch__28150__auto__,c__28171__auto___53914,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_53906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53906[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_53906[(1)] = (1));

return statearr_53906;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_53862){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_53862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e53907){if((e53907 instanceof Object)){
var ex__28154__auto__ = e53907;
var statearr_53908_53943 = state_53862;
(statearr_53908_53943[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53944 = state_53862;
state_53862 = G__53944;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_53862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_53862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___53914,mults,ensure_mult,p))
})();
var state__28173__auto__ = (function (){var statearr_53909 = f__28172__auto__.call(null);
(statearr_53909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___53914);

return statearr_53909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___53914,mults,ensure_mult,p))
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
var args53945 = [];
var len__27054__auto___53948 = arguments.length;
var i__27055__auto___53949 = (0);
while(true){
if((i__27055__auto___53949 < len__27054__auto___53948)){
args53945.push((arguments[i__27055__auto___53949]));

var G__53950 = (i__27055__auto___53949 + (1));
i__27055__auto___53949 = G__53950;
continue;
} else {
}
break;
}

var G__53947 = args53945.length;
switch (G__53947) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53945.length)].join('')));

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
var args53952 = [];
var len__27054__auto___53955 = arguments.length;
var i__27055__auto___53956 = (0);
while(true){
if((i__27055__auto___53956 < len__27054__auto___53955)){
args53952.push((arguments[i__27055__auto___53956]));

var G__53957 = (i__27055__auto___53956 + (1));
i__27055__auto___53956 = G__53957;
continue;
} else {
}
break;
}

var G__53954 = args53952.length;
switch (G__53954) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53952.length)].join('')));

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
var args53959 = [];
var len__27054__auto___54030 = arguments.length;
var i__27055__auto___54031 = (0);
while(true){
if((i__27055__auto___54031 < len__27054__auto___54030)){
args53959.push((arguments[i__27055__auto___54031]));

var G__54032 = (i__27055__auto___54031 + (1));
i__27055__auto___54031 = G__54032;
continue;
} else {
}
break;
}

var G__53961 = args53959.length;
switch (G__53961) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53959.length)].join('')));

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
var c__28171__auto___54034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___54034,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___54034,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_54000){
var state_val_54001 = (state_54000[(1)]);
if((state_val_54001 === (7))){
var state_54000__$1 = state_54000;
var statearr_54002_54035 = state_54000__$1;
(statearr_54002_54035[(2)] = null);

(statearr_54002_54035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54001 === (1))){
var state_54000__$1 = state_54000;
var statearr_54003_54036 = state_54000__$1;
(statearr_54003_54036[(2)] = null);

(statearr_54003_54036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54001 === (4))){
var inst_53964 = (state_54000[(7)]);
var inst_53966 = (inst_53964 < cnt);
var state_54000__$1 = state_54000;
if(cljs.core.truth_(inst_53966)){
var statearr_54004_54037 = state_54000__$1;
(statearr_54004_54037[(1)] = (6));

} else {
var statearr_54005_54038 = state_54000__$1;
(statearr_54005_54038[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54001 === (15))){
var inst_53996 = (state_54000[(2)]);
var state_54000__$1 = state_54000;
var statearr_54006_54039 = state_54000__$1;
(statearr_54006_54039[(2)] = inst_53996);

(statearr_54006_54039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54001 === (13))){
var inst_53989 = cljs.core.async.close_BANG_.call(null,out);
var state_54000__$1 = state_54000;
var statearr_54007_54040 = state_54000__$1;
(statearr_54007_54040[(2)] = inst_53989);

(statearr_54007_54040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54001 === (6))){
var state_54000__$1 = state_54000;
var statearr_54008_54041 = state_54000__$1;
(statearr_54008_54041[(2)] = null);

(statearr_54008_54041[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54001 === (3))){
var inst_53998 = (state_54000[(2)]);
var state_54000__$1 = state_54000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54000__$1,inst_53998);
} else {
if((state_val_54001 === (12))){
var inst_53986 = (state_54000[(8)]);
var inst_53986__$1 = (state_54000[(2)]);
var inst_53987 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_53986__$1);
var state_54000__$1 = (function (){var statearr_54009 = state_54000;
(statearr_54009[(8)] = inst_53986__$1);

return statearr_54009;
})();
if(cljs.core.truth_(inst_53987)){
var statearr_54010_54042 = state_54000__$1;
(statearr_54010_54042[(1)] = (13));

} else {
var statearr_54011_54043 = state_54000__$1;
(statearr_54011_54043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54001 === (2))){
var inst_53963 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_53964 = (0);
var state_54000__$1 = (function (){var statearr_54012 = state_54000;
(statearr_54012[(7)] = inst_53964);

(statearr_54012[(9)] = inst_53963);

return statearr_54012;
})();
var statearr_54013_54044 = state_54000__$1;
(statearr_54013_54044[(2)] = null);

(statearr_54013_54044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54001 === (11))){
var inst_53964 = (state_54000[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54000,(10),Object,null,(9));
var inst_53973 = chs__$1.call(null,inst_53964);
var inst_53974 = done.call(null,inst_53964);
var inst_53975 = cljs.core.async.take_BANG_.call(null,inst_53973,inst_53974);
var state_54000__$1 = state_54000;
var statearr_54014_54045 = state_54000__$1;
(statearr_54014_54045[(2)] = inst_53975);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54000__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54001 === (9))){
var inst_53964 = (state_54000[(7)]);
var inst_53977 = (state_54000[(2)]);
var inst_53978 = (inst_53964 + (1));
var inst_53964__$1 = inst_53978;
var state_54000__$1 = (function (){var statearr_54015 = state_54000;
(statearr_54015[(7)] = inst_53964__$1);

(statearr_54015[(10)] = inst_53977);

return statearr_54015;
})();
var statearr_54016_54046 = state_54000__$1;
(statearr_54016_54046[(2)] = null);

(statearr_54016_54046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54001 === (5))){
var inst_53984 = (state_54000[(2)]);
var state_54000__$1 = (function (){var statearr_54017 = state_54000;
(statearr_54017[(11)] = inst_53984);

return statearr_54017;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54000__$1,(12),dchan);
} else {
if((state_val_54001 === (14))){
var inst_53986 = (state_54000[(8)]);
var inst_53991 = cljs.core.apply.call(null,f,inst_53986);
var state_54000__$1 = state_54000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54000__$1,(16),out,inst_53991);
} else {
if((state_val_54001 === (16))){
var inst_53993 = (state_54000[(2)]);
var state_54000__$1 = (function (){var statearr_54018 = state_54000;
(statearr_54018[(12)] = inst_53993);

return statearr_54018;
})();
var statearr_54019_54047 = state_54000__$1;
(statearr_54019_54047[(2)] = null);

(statearr_54019_54047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54001 === (10))){
var inst_53968 = (state_54000[(2)]);
var inst_53969 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_54000__$1 = (function (){var statearr_54020 = state_54000;
(statearr_54020[(13)] = inst_53968);

return statearr_54020;
})();
var statearr_54021_54048 = state_54000__$1;
(statearr_54021_54048[(2)] = inst_53969);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54000__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54001 === (8))){
var inst_53982 = (state_54000[(2)]);
var state_54000__$1 = state_54000;
var statearr_54022_54049 = state_54000__$1;
(statearr_54022_54049[(2)] = inst_53982);

(statearr_54022_54049[(1)] = (5));


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
});})(c__28171__auto___54034,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28150__auto__,c__28171__auto___54034,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_54026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54026[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_54026[(1)] = (1));

return statearr_54026;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_54000){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_54000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e54027){if((e54027 instanceof Object)){
var ex__28154__auto__ = e54027;
var statearr_54028_54050 = state_54000;
(statearr_54028_54050[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54051 = state_54000;
state_54000 = G__54051;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_54000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_54000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___54034,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28173__auto__ = (function (){var statearr_54029 = f__28172__auto__.call(null);
(statearr_54029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___54034);

return statearr_54029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___54034,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args54053 = [];
var len__27054__auto___54111 = arguments.length;
var i__27055__auto___54112 = (0);
while(true){
if((i__27055__auto___54112 < len__27054__auto___54111)){
args54053.push((arguments[i__27055__auto___54112]));

var G__54113 = (i__27055__auto___54112 + (1));
i__27055__auto___54112 = G__54113;
continue;
} else {
}
break;
}

var G__54055 = args54053.length;
switch (G__54055) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54053.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28171__auto___54115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___54115,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___54115,out){
return (function (state_54087){
var state_val_54088 = (state_54087[(1)]);
if((state_val_54088 === (7))){
var inst_54067 = (state_54087[(7)]);
var inst_54066 = (state_54087[(8)]);
var inst_54066__$1 = (state_54087[(2)]);
var inst_54067__$1 = cljs.core.nth.call(null,inst_54066__$1,(0),null);
var inst_54068 = cljs.core.nth.call(null,inst_54066__$1,(1),null);
var inst_54069 = (inst_54067__$1 == null);
var state_54087__$1 = (function (){var statearr_54089 = state_54087;
(statearr_54089[(7)] = inst_54067__$1);

(statearr_54089[(8)] = inst_54066__$1);

(statearr_54089[(9)] = inst_54068);

return statearr_54089;
})();
if(cljs.core.truth_(inst_54069)){
var statearr_54090_54116 = state_54087__$1;
(statearr_54090_54116[(1)] = (8));

} else {
var statearr_54091_54117 = state_54087__$1;
(statearr_54091_54117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54088 === (1))){
var inst_54056 = cljs.core.vec.call(null,chs);
var inst_54057 = inst_54056;
var state_54087__$1 = (function (){var statearr_54092 = state_54087;
(statearr_54092[(10)] = inst_54057);

return statearr_54092;
})();
var statearr_54093_54118 = state_54087__$1;
(statearr_54093_54118[(2)] = null);

(statearr_54093_54118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54088 === (4))){
var inst_54057 = (state_54087[(10)]);
var state_54087__$1 = state_54087;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54087__$1,(7),inst_54057);
} else {
if((state_val_54088 === (6))){
var inst_54083 = (state_54087[(2)]);
var state_54087__$1 = state_54087;
var statearr_54094_54119 = state_54087__$1;
(statearr_54094_54119[(2)] = inst_54083);

(statearr_54094_54119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54088 === (3))){
var inst_54085 = (state_54087[(2)]);
var state_54087__$1 = state_54087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54087__$1,inst_54085);
} else {
if((state_val_54088 === (2))){
var inst_54057 = (state_54087[(10)]);
var inst_54059 = cljs.core.count.call(null,inst_54057);
var inst_54060 = (inst_54059 > (0));
var state_54087__$1 = state_54087;
if(cljs.core.truth_(inst_54060)){
var statearr_54096_54120 = state_54087__$1;
(statearr_54096_54120[(1)] = (4));

} else {
var statearr_54097_54121 = state_54087__$1;
(statearr_54097_54121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54088 === (11))){
var inst_54057 = (state_54087[(10)]);
var inst_54076 = (state_54087[(2)]);
var tmp54095 = inst_54057;
var inst_54057__$1 = tmp54095;
var state_54087__$1 = (function (){var statearr_54098 = state_54087;
(statearr_54098[(10)] = inst_54057__$1);

(statearr_54098[(11)] = inst_54076);

return statearr_54098;
})();
var statearr_54099_54122 = state_54087__$1;
(statearr_54099_54122[(2)] = null);

(statearr_54099_54122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54088 === (9))){
var inst_54067 = (state_54087[(7)]);
var state_54087__$1 = state_54087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54087__$1,(11),out,inst_54067);
} else {
if((state_val_54088 === (5))){
var inst_54081 = cljs.core.async.close_BANG_.call(null,out);
var state_54087__$1 = state_54087;
var statearr_54100_54123 = state_54087__$1;
(statearr_54100_54123[(2)] = inst_54081);

(statearr_54100_54123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54088 === (10))){
var inst_54079 = (state_54087[(2)]);
var state_54087__$1 = state_54087;
var statearr_54101_54124 = state_54087__$1;
(statearr_54101_54124[(2)] = inst_54079);

(statearr_54101_54124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54088 === (8))){
var inst_54057 = (state_54087[(10)]);
var inst_54067 = (state_54087[(7)]);
var inst_54066 = (state_54087[(8)]);
var inst_54068 = (state_54087[(9)]);
var inst_54071 = (function (){var cs = inst_54057;
var vec__54062 = inst_54066;
var v = inst_54067;
var c = inst_54068;
return ((function (cs,vec__54062,v,c,inst_54057,inst_54067,inst_54066,inst_54068,state_val_54088,c__28171__auto___54115,out){
return (function (p1__54052_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__54052_SHARP_);
});
;})(cs,vec__54062,v,c,inst_54057,inst_54067,inst_54066,inst_54068,state_val_54088,c__28171__auto___54115,out))
})();
var inst_54072 = cljs.core.filterv.call(null,inst_54071,inst_54057);
var inst_54057__$1 = inst_54072;
var state_54087__$1 = (function (){var statearr_54102 = state_54087;
(statearr_54102[(10)] = inst_54057__$1);

return statearr_54102;
})();
var statearr_54103_54125 = state_54087__$1;
(statearr_54103_54125[(2)] = null);

(statearr_54103_54125[(1)] = (2));


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
});})(c__28171__auto___54115,out))
;
return ((function (switch__28150__auto__,c__28171__auto___54115,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_54107 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54107[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_54107[(1)] = (1));

return statearr_54107;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_54087){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_54087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e54108){if((e54108 instanceof Object)){
var ex__28154__auto__ = e54108;
var statearr_54109_54126 = state_54087;
(statearr_54109_54126[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54127 = state_54087;
state_54087 = G__54127;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_54087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_54087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___54115,out))
})();
var state__28173__auto__ = (function (){var statearr_54110 = f__28172__auto__.call(null);
(statearr_54110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___54115);

return statearr_54110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___54115,out))
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
var args54128 = [];
var len__27054__auto___54177 = arguments.length;
var i__27055__auto___54178 = (0);
while(true){
if((i__27055__auto___54178 < len__27054__auto___54177)){
args54128.push((arguments[i__27055__auto___54178]));

var G__54179 = (i__27055__auto___54178 + (1));
i__27055__auto___54178 = G__54179;
continue;
} else {
}
break;
}

var G__54130 = args54128.length;
switch (G__54130) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54128.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28171__auto___54181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___54181,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___54181,out){
return (function (state_54154){
var state_val_54155 = (state_54154[(1)]);
if((state_val_54155 === (7))){
var inst_54136 = (state_54154[(7)]);
var inst_54136__$1 = (state_54154[(2)]);
var inst_54137 = (inst_54136__$1 == null);
var inst_54138 = cljs.core.not.call(null,inst_54137);
var state_54154__$1 = (function (){var statearr_54156 = state_54154;
(statearr_54156[(7)] = inst_54136__$1);

return statearr_54156;
})();
if(inst_54138){
var statearr_54157_54182 = state_54154__$1;
(statearr_54157_54182[(1)] = (8));

} else {
var statearr_54158_54183 = state_54154__$1;
(statearr_54158_54183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54155 === (1))){
var inst_54131 = (0);
var state_54154__$1 = (function (){var statearr_54159 = state_54154;
(statearr_54159[(8)] = inst_54131);

return statearr_54159;
})();
var statearr_54160_54184 = state_54154__$1;
(statearr_54160_54184[(2)] = null);

(statearr_54160_54184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54155 === (4))){
var state_54154__$1 = state_54154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54154__$1,(7),ch);
} else {
if((state_val_54155 === (6))){
var inst_54149 = (state_54154[(2)]);
var state_54154__$1 = state_54154;
var statearr_54161_54185 = state_54154__$1;
(statearr_54161_54185[(2)] = inst_54149);

(statearr_54161_54185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54155 === (3))){
var inst_54151 = (state_54154[(2)]);
var inst_54152 = cljs.core.async.close_BANG_.call(null,out);
var state_54154__$1 = (function (){var statearr_54162 = state_54154;
(statearr_54162[(9)] = inst_54151);

return statearr_54162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54154__$1,inst_54152);
} else {
if((state_val_54155 === (2))){
var inst_54131 = (state_54154[(8)]);
var inst_54133 = (inst_54131 < n);
var state_54154__$1 = state_54154;
if(cljs.core.truth_(inst_54133)){
var statearr_54163_54186 = state_54154__$1;
(statearr_54163_54186[(1)] = (4));

} else {
var statearr_54164_54187 = state_54154__$1;
(statearr_54164_54187[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54155 === (11))){
var inst_54131 = (state_54154[(8)]);
var inst_54141 = (state_54154[(2)]);
var inst_54142 = (inst_54131 + (1));
var inst_54131__$1 = inst_54142;
var state_54154__$1 = (function (){var statearr_54165 = state_54154;
(statearr_54165[(8)] = inst_54131__$1);

(statearr_54165[(10)] = inst_54141);

return statearr_54165;
})();
var statearr_54166_54188 = state_54154__$1;
(statearr_54166_54188[(2)] = null);

(statearr_54166_54188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54155 === (9))){
var state_54154__$1 = state_54154;
var statearr_54167_54189 = state_54154__$1;
(statearr_54167_54189[(2)] = null);

(statearr_54167_54189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54155 === (5))){
var state_54154__$1 = state_54154;
var statearr_54168_54190 = state_54154__$1;
(statearr_54168_54190[(2)] = null);

(statearr_54168_54190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54155 === (10))){
var inst_54146 = (state_54154[(2)]);
var state_54154__$1 = state_54154;
var statearr_54169_54191 = state_54154__$1;
(statearr_54169_54191[(2)] = inst_54146);

(statearr_54169_54191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54155 === (8))){
var inst_54136 = (state_54154[(7)]);
var state_54154__$1 = state_54154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54154__$1,(11),out,inst_54136);
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
});})(c__28171__auto___54181,out))
;
return ((function (switch__28150__auto__,c__28171__auto___54181,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_54173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54173[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_54173[(1)] = (1));

return statearr_54173;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_54154){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_54154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e54174){if((e54174 instanceof Object)){
var ex__28154__auto__ = e54174;
var statearr_54175_54192 = state_54154;
(statearr_54175_54192[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54193 = state_54154;
state_54154 = G__54193;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_54154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_54154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___54181,out))
})();
var state__28173__auto__ = (function (){var statearr_54176 = f__28172__auto__.call(null);
(statearr_54176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___54181);

return statearr_54176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___54181,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async54201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54201 = (function (map_LT_,f,ch,meta54202){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta54202 = meta54202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54203,meta54202__$1){
var self__ = this;
var _54203__$1 = this;
return (new cljs.core.async.t_cljs$core$async54201(self__.map_LT_,self__.f,self__.ch,meta54202__$1));
});

cljs.core.async.t_cljs$core$async54201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54203){
var self__ = this;
var _54203__$1 = this;
return self__.meta54202;
});

cljs.core.async.t_cljs$core$async54201.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async54201.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54201.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54201.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async54201.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async54204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54204 = (function (map_LT_,f,ch,meta54202,_,fn1,meta54205){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta54202 = meta54202;
this._ = _;
this.fn1 = fn1;
this.meta54205 = meta54205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_54206,meta54205__$1){
var self__ = this;
var _54206__$1 = this;
return (new cljs.core.async.t_cljs$core$async54204(self__.map_LT_,self__.f,self__.ch,self__.meta54202,self__._,self__.fn1,meta54205__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async54204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_54206){
var self__ = this;
var _54206__$1 = this;
return self__.meta54205;
});})(___$1))
;

cljs.core.async.t_cljs$core$async54204.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async54204.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async54204.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async54204.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__54194_SHARP_){
return f1.call(null,(((p1__54194_SHARP_ == null))?null:self__.f.call(null,p1__54194_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async54204.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54202","meta54202",-1529788626,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async54201","cljs.core.async/t_cljs$core$async54201",-1324356309,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta54205","meta54205",-1442385513,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async54204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54204";

cljs.core.async.t_cljs$core$async54204.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async54204");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async54204 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54204(map_LT___$1,f__$1,ch__$1,meta54202__$1,___$2,fn1__$1,meta54205){
return (new cljs.core.async.t_cljs$core$async54204(map_LT___$1,f__$1,ch__$1,meta54202__$1,___$2,fn1__$1,meta54205));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async54204(self__.map_LT_,self__.f,self__.ch,self__.meta54202,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async54201.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async54201.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async54201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54202","meta54202",-1529788626,null)], null);
});

cljs.core.async.t_cljs$core$async54201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54201";

cljs.core.async.t_cljs$core$async54201.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async54201");
});

cljs.core.async.__GT_t_cljs$core$async54201 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54201(map_LT___$1,f__$1,ch__$1,meta54202){
return (new cljs.core.async.t_cljs$core$async54201(map_LT___$1,f__$1,ch__$1,meta54202));
});

}

return (new cljs.core.async.t_cljs$core$async54201(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async54210 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54210 = (function (map_GT_,f,ch,meta54211){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta54211 = meta54211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54212,meta54211__$1){
var self__ = this;
var _54212__$1 = this;
return (new cljs.core.async.t_cljs$core$async54210(self__.map_GT_,self__.f,self__.ch,meta54211__$1));
});

cljs.core.async.t_cljs$core$async54210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54212){
var self__ = this;
var _54212__$1 = this;
return self__.meta54211;
});

cljs.core.async.t_cljs$core$async54210.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async54210.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54210.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async54210.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async54210.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async54210.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async54210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54211","meta54211",-1382292931,null)], null);
});

cljs.core.async.t_cljs$core$async54210.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54210";

cljs.core.async.t_cljs$core$async54210.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async54210");
});

cljs.core.async.__GT_t_cljs$core$async54210 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async54210(map_GT___$1,f__$1,ch__$1,meta54211){
return (new cljs.core.async.t_cljs$core$async54210(map_GT___$1,f__$1,ch__$1,meta54211));
});

}

return (new cljs.core.async.t_cljs$core$async54210(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async54216 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54216 = (function (filter_GT_,p,ch,meta54217){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta54217 = meta54217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54218,meta54217__$1){
var self__ = this;
var _54218__$1 = this;
return (new cljs.core.async.t_cljs$core$async54216(self__.filter_GT_,self__.p,self__.ch,meta54217__$1));
});

cljs.core.async.t_cljs$core$async54216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54218){
var self__ = this;
var _54218__$1 = this;
return self__.meta54217;
});

cljs.core.async.t_cljs$core$async54216.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async54216.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54216.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54216.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async54216.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async54216.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async54216.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async54216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54217","meta54217",-164985604,null)], null);
});

cljs.core.async.t_cljs$core$async54216.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54216";

cljs.core.async.t_cljs$core$async54216.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async54216");
});

cljs.core.async.__GT_t_cljs$core$async54216 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async54216(filter_GT___$1,p__$1,ch__$1,meta54217){
return (new cljs.core.async.t_cljs$core$async54216(filter_GT___$1,p__$1,ch__$1,meta54217));
});

}

return (new cljs.core.async.t_cljs$core$async54216(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args54219 = [];
var len__27054__auto___54263 = arguments.length;
var i__27055__auto___54264 = (0);
while(true){
if((i__27055__auto___54264 < len__27054__auto___54263)){
args54219.push((arguments[i__27055__auto___54264]));

var G__54265 = (i__27055__auto___54264 + (1));
i__27055__auto___54264 = G__54265;
continue;
} else {
}
break;
}

var G__54221 = args54219.length;
switch (G__54221) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54219.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28171__auto___54267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___54267,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___54267,out){
return (function (state_54242){
var state_val_54243 = (state_54242[(1)]);
if((state_val_54243 === (7))){
var inst_54238 = (state_54242[(2)]);
var state_54242__$1 = state_54242;
var statearr_54244_54268 = state_54242__$1;
(statearr_54244_54268[(2)] = inst_54238);

(statearr_54244_54268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54243 === (1))){
var state_54242__$1 = state_54242;
var statearr_54245_54269 = state_54242__$1;
(statearr_54245_54269[(2)] = null);

(statearr_54245_54269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54243 === (4))){
var inst_54224 = (state_54242[(7)]);
var inst_54224__$1 = (state_54242[(2)]);
var inst_54225 = (inst_54224__$1 == null);
var state_54242__$1 = (function (){var statearr_54246 = state_54242;
(statearr_54246[(7)] = inst_54224__$1);

return statearr_54246;
})();
if(cljs.core.truth_(inst_54225)){
var statearr_54247_54270 = state_54242__$1;
(statearr_54247_54270[(1)] = (5));

} else {
var statearr_54248_54271 = state_54242__$1;
(statearr_54248_54271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54243 === (6))){
var inst_54224 = (state_54242[(7)]);
var inst_54229 = p.call(null,inst_54224);
var state_54242__$1 = state_54242;
if(cljs.core.truth_(inst_54229)){
var statearr_54249_54272 = state_54242__$1;
(statearr_54249_54272[(1)] = (8));

} else {
var statearr_54250_54273 = state_54242__$1;
(statearr_54250_54273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54243 === (3))){
var inst_54240 = (state_54242[(2)]);
var state_54242__$1 = state_54242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54242__$1,inst_54240);
} else {
if((state_val_54243 === (2))){
var state_54242__$1 = state_54242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54242__$1,(4),ch);
} else {
if((state_val_54243 === (11))){
var inst_54232 = (state_54242[(2)]);
var state_54242__$1 = state_54242;
var statearr_54251_54274 = state_54242__$1;
(statearr_54251_54274[(2)] = inst_54232);

(statearr_54251_54274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54243 === (9))){
var state_54242__$1 = state_54242;
var statearr_54252_54275 = state_54242__$1;
(statearr_54252_54275[(2)] = null);

(statearr_54252_54275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54243 === (5))){
var inst_54227 = cljs.core.async.close_BANG_.call(null,out);
var state_54242__$1 = state_54242;
var statearr_54253_54276 = state_54242__$1;
(statearr_54253_54276[(2)] = inst_54227);

(statearr_54253_54276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54243 === (10))){
var inst_54235 = (state_54242[(2)]);
var state_54242__$1 = (function (){var statearr_54254 = state_54242;
(statearr_54254[(8)] = inst_54235);

return statearr_54254;
})();
var statearr_54255_54277 = state_54242__$1;
(statearr_54255_54277[(2)] = null);

(statearr_54255_54277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54243 === (8))){
var inst_54224 = (state_54242[(7)]);
var state_54242__$1 = state_54242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54242__$1,(11),out,inst_54224);
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
});})(c__28171__auto___54267,out))
;
return ((function (switch__28150__auto__,c__28171__auto___54267,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_54259 = [null,null,null,null,null,null,null,null,null];
(statearr_54259[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_54259[(1)] = (1));

return statearr_54259;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_54242){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_54242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e54260){if((e54260 instanceof Object)){
var ex__28154__auto__ = e54260;
var statearr_54261_54278 = state_54242;
(statearr_54261_54278[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54279 = state_54242;
state_54242 = G__54279;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_54242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_54242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___54267,out))
})();
var state__28173__auto__ = (function (){var statearr_54262 = f__28172__auto__.call(null);
(statearr_54262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___54267);

return statearr_54262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___54267,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args54280 = [];
var len__27054__auto___54283 = arguments.length;
var i__27055__auto___54284 = (0);
while(true){
if((i__27055__auto___54284 < len__27054__auto___54283)){
args54280.push((arguments[i__27055__auto___54284]));

var G__54285 = (i__27055__auto___54284 + (1));
i__27055__auto___54284 = G__54285;
continue;
} else {
}
break;
}

var G__54282 = args54280.length;
switch (G__54282) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54280.length)].join('')));

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
return (function (state_54452){
var state_val_54453 = (state_54452[(1)]);
if((state_val_54453 === (7))){
var inst_54448 = (state_54452[(2)]);
var state_54452__$1 = state_54452;
var statearr_54454_54495 = state_54452__$1;
(statearr_54454_54495[(2)] = inst_54448);

(statearr_54454_54495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (20))){
var inst_54418 = (state_54452[(7)]);
var inst_54429 = (state_54452[(2)]);
var inst_54430 = cljs.core.next.call(null,inst_54418);
var inst_54404 = inst_54430;
var inst_54405 = null;
var inst_54406 = (0);
var inst_54407 = (0);
var state_54452__$1 = (function (){var statearr_54455 = state_54452;
(statearr_54455[(8)] = inst_54404);

(statearr_54455[(9)] = inst_54407);

(statearr_54455[(10)] = inst_54405);

(statearr_54455[(11)] = inst_54429);

(statearr_54455[(12)] = inst_54406);

return statearr_54455;
})();
var statearr_54456_54496 = state_54452__$1;
(statearr_54456_54496[(2)] = null);

(statearr_54456_54496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (1))){
var state_54452__$1 = state_54452;
var statearr_54457_54497 = state_54452__$1;
(statearr_54457_54497[(2)] = null);

(statearr_54457_54497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (4))){
var inst_54393 = (state_54452[(13)]);
var inst_54393__$1 = (state_54452[(2)]);
var inst_54394 = (inst_54393__$1 == null);
var state_54452__$1 = (function (){var statearr_54458 = state_54452;
(statearr_54458[(13)] = inst_54393__$1);

return statearr_54458;
})();
if(cljs.core.truth_(inst_54394)){
var statearr_54459_54498 = state_54452__$1;
(statearr_54459_54498[(1)] = (5));

} else {
var statearr_54460_54499 = state_54452__$1;
(statearr_54460_54499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (15))){
var state_54452__$1 = state_54452;
var statearr_54464_54500 = state_54452__$1;
(statearr_54464_54500[(2)] = null);

(statearr_54464_54500[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (21))){
var state_54452__$1 = state_54452;
var statearr_54465_54501 = state_54452__$1;
(statearr_54465_54501[(2)] = null);

(statearr_54465_54501[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (13))){
var inst_54404 = (state_54452[(8)]);
var inst_54407 = (state_54452[(9)]);
var inst_54405 = (state_54452[(10)]);
var inst_54406 = (state_54452[(12)]);
var inst_54414 = (state_54452[(2)]);
var inst_54415 = (inst_54407 + (1));
var tmp54461 = inst_54404;
var tmp54462 = inst_54405;
var tmp54463 = inst_54406;
var inst_54404__$1 = tmp54461;
var inst_54405__$1 = tmp54462;
var inst_54406__$1 = tmp54463;
var inst_54407__$1 = inst_54415;
var state_54452__$1 = (function (){var statearr_54466 = state_54452;
(statearr_54466[(8)] = inst_54404__$1);

(statearr_54466[(9)] = inst_54407__$1);

(statearr_54466[(10)] = inst_54405__$1);

(statearr_54466[(14)] = inst_54414);

(statearr_54466[(12)] = inst_54406__$1);

return statearr_54466;
})();
var statearr_54467_54502 = state_54452__$1;
(statearr_54467_54502[(2)] = null);

(statearr_54467_54502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (22))){
var state_54452__$1 = state_54452;
var statearr_54468_54503 = state_54452__$1;
(statearr_54468_54503[(2)] = null);

(statearr_54468_54503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (6))){
var inst_54393 = (state_54452[(13)]);
var inst_54402 = f.call(null,inst_54393);
var inst_54403 = cljs.core.seq.call(null,inst_54402);
var inst_54404 = inst_54403;
var inst_54405 = null;
var inst_54406 = (0);
var inst_54407 = (0);
var state_54452__$1 = (function (){var statearr_54469 = state_54452;
(statearr_54469[(8)] = inst_54404);

(statearr_54469[(9)] = inst_54407);

(statearr_54469[(10)] = inst_54405);

(statearr_54469[(12)] = inst_54406);

return statearr_54469;
})();
var statearr_54470_54504 = state_54452__$1;
(statearr_54470_54504[(2)] = null);

(statearr_54470_54504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (17))){
var inst_54418 = (state_54452[(7)]);
var inst_54422 = cljs.core.chunk_first.call(null,inst_54418);
var inst_54423 = cljs.core.chunk_rest.call(null,inst_54418);
var inst_54424 = cljs.core.count.call(null,inst_54422);
var inst_54404 = inst_54423;
var inst_54405 = inst_54422;
var inst_54406 = inst_54424;
var inst_54407 = (0);
var state_54452__$1 = (function (){var statearr_54471 = state_54452;
(statearr_54471[(8)] = inst_54404);

(statearr_54471[(9)] = inst_54407);

(statearr_54471[(10)] = inst_54405);

(statearr_54471[(12)] = inst_54406);

return statearr_54471;
})();
var statearr_54472_54505 = state_54452__$1;
(statearr_54472_54505[(2)] = null);

(statearr_54472_54505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (3))){
var inst_54450 = (state_54452[(2)]);
var state_54452__$1 = state_54452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54452__$1,inst_54450);
} else {
if((state_val_54453 === (12))){
var inst_54438 = (state_54452[(2)]);
var state_54452__$1 = state_54452;
var statearr_54473_54506 = state_54452__$1;
(statearr_54473_54506[(2)] = inst_54438);

(statearr_54473_54506[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (2))){
var state_54452__$1 = state_54452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54452__$1,(4),in$);
} else {
if((state_val_54453 === (23))){
var inst_54446 = (state_54452[(2)]);
var state_54452__$1 = state_54452;
var statearr_54474_54507 = state_54452__$1;
(statearr_54474_54507[(2)] = inst_54446);

(statearr_54474_54507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (19))){
var inst_54433 = (state_54452[(2)]);
var state_54452__$1 = state_54452;
var statearr_54475_54508 = state_54452__$1;
(statearr_54475_54508[(2)] = inst_54433);

(statearr_54475_54508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (11))){
var inst_54404 = (state_54452[(8)]);
var inst_54418 = (state_54452[(7)]);
var inst_54418__$1 = cljs.core.seq.call(null,inst_54404);
var state_54452__$1 = (function (){var statearr_54476 = state_54452;
(statearr_54476[(7)] = inst_54418__$1);

return statearr_54476;
})();
if(inst_54418__$1){
var statearr_54477_54509 = state_54452__$1;
(statearr_54477_54509[(1)] = (14));

} else {
var statearr_54478_54510 = state_54452__$1;
(statearr_54478_54510[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (9))){
var inst_54440 = (state_54452[(2)]);
var inst_54441 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_54452__$1 = (function (){var statearr_54479 = state_54452;
(statearr_54479[(15)] = inst_54440);

return statearr_54479;
})();
if(cljs.core.truth_(inst_54441)){
var statearr_54480_54511 = state_54452__$1;
(statearr_54480_54511[(1)] = (21));

} else {
var statearr_54481_54512 = state_54452__$1;
(statearr_54481_54512[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (5))){
var inst_54396 = cljs.core.async.close_BANG_.call(null,out);
var state_54452__$1 = state_54452;
var statearr_54482_54513 = state_54452__$1;
(statearr_54482_54513[(2)] = inst_54396);

(statearr_54482_54513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (14))){
var inst_54418 = (state_54452[(7)]);
var inst_54420 = cljs.core.chunked_seq_QMARK_.call(null,inst_54418);
var state_54452__$1 = state_54452;
if(inst_54420){
var statearr_54483_54514 = state_54452__$1;
(statearr_54483_54514[(1)] = (17));

} else {
var statearr_54484_54515 = state_54452__$1;
(statearr_54484_54515[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (16))){
var inst_54436 = (state_54452[(2)]);
var state_54452__$1 = state_54452;
var statearr_54485_54516 = state_54452__$1;
(statearr_54485_54516[(2)] = inst_54436);

(statearr_54485_54516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54453 === (10))){
var inst_54407 = (state_54452[(9)]);
var inst_54405 = (state_54452[(10)]);
var inst_54412 = cljs.core._nth.call(null,inst_54405,inst_54407);
var state_54452__$1 = state_54452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54452__$1,(13),out,inst_54412);
} else {
if((state_val_54453 === (18))){
var inst_54418 = (state_54452[(7)]);
var inst_54427 = cljs.core.first.call(null,inst_54418);
var state_54452__$1 = state_54452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54452__$1,(20),out,inst_54427);
} else {
if((state_val_54453 === (8))){
var inst_54407 = (state_54452[(9)]);
var inst_54406 = (state_54452[(12)]);
var inst_54409 = (inst_54407 < inst_54406);
var inst_54410 = inst_54409;
var state_54452__$1 = state_54452;
if(cljs.core.truth_(inst_54410)){
var statearr_54486_54517 = state_54452__$1;
(statearr_54486_54517[(1)] = (10));

} else {
var statearr_54487_54518 = state_54452__$1;
(statearr_54487_54518[(1)] = (11));

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
var statearr_54491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54491[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__);

(statearr_54491[(1)] = (1));

return statearr_54491;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____1 = (function (state_54452){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_54452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e54492){if((e54492 instanceof Object)){
var ex__28154__auto__ = e54492;
var statearr_54493_54519 = state_54452;
(statearr_54493_54519[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54520 = state_54452;
state_54452 = G__54520;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__ = function(state_54452){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____1.call(this,state_54452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__))
})();
var state__28173__auto__ = (function (){var statearr_54494 = f__28172__auto__.call(null);
(statearr_54494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_54494;
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
var args54521 = [];
var len__27054__auto___54524 = arguments.length;
var i__27055__auto___54525 = (0);
while(true){
if((i__27055__auto___54525 < len__27054__auto___54524)){
args54521.push((arguments[i__27055__auto___54525]));

var G__54526 = (i__27055__auto___54525 + (1));
i__27055__auto___54525 = G__54526;
continue;
} else {
}
break;
}

var G__54523 = args54521.length;
switch (G__54523) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54521.length)].join('')));

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
var args54528 = [];
var len__27054__auto___54531 = arguments.length;
var i__27055__auto___54532 = (0);
while(true){
if((i__27055__auto___54532 < len__27054__auto___54531)){
args54528.push((arguments[i__27055__auto___54532]));

var G__54533 = (i__27055__auto___54532 + (1));
i__27055__auto___54532 = G__54533;
continue;
} else {
}
break;
}

var G__54530 = args54528.length;
switch (G__54530) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54528.length)].join('')));

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
var args54535 = [];
var len__27054__auto___54586 = arguments.length;
var i__27055__auto___54587 = (0);
while(true){
if((i__27055__auto___54587 < len__27054__auto___54586)){
args54535.push((arguments[i__27055__auto___54587]));

var G__54588 = (i__27055__auto___54587 + (1));
i__27055__auto___54587 = G__54588;
continue;
} else {
}
break;
}

var G__54537 = args54535.length;
switch (G__54537) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54535.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28171__auto___54590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___54590,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___54590,out){
return (function (state_54561){
var state_val_54562 = (state_54561[(1)]);
if((state_val_54562 === (7))){
var inst_54556 = (state_54561[(2)]);
var state_54561__$1 = state_54561;
var statearr_54563_54591 = state_54561__$1;
(statearr_54563_54591[(2)] = inst_54556);

(statearr_54563_54591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54562 === (1))){
var inst_54538 = null;
var state_54561__$1 = (function (){var statearr_54564 = state_54561;
(statearr_54564[(7)] = inst_54538);

return statearr_54564;
})();
var statearr_54565_54592 = state_54561__$1;
(statearr_54565_54592[(2)] = null);

(statearr_54565_54592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54562 === (4))){
var inst_54541 = (state_54561[(8)]);
var inst_54541__$1 = (state_54561[(2)]);
var inst_54542 = (inst_54541__$1 == null);
var inst_54543 = cljs.core.not.call(null,inst_54542);
var state_54561__$1 = (function (){var statearr_54566 = state_54561;
(statearr_54566[(8)] = inst_54541__$1);

return statearr_54566;
})();
if(inst_54543){
var statearr_54567_54593 = state_54561__$1;
(statearr_54567_54593[(1)] = (5));

} else {
var statearr_54568_54594 = state_54561__$1;
(statearr_54568_54594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54562 === (6))){
var state_54561__$1 = state_54561;
var statearr_54569_54595 = state_54561__$1;
(statearr_54569_54595[(2)] = null);

(statearr_54569_54595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54562 === (3))){
var inst_54558 = (state_54561[(2)]);
var inst_54559 = cljs.core.async.close_BANG_.call(null,out);
var state_54561__$1 = (function (){var statearr_54570 = state_54561;
(statearr_54570[(9)] = inst_54558);

return statearr_54570;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54561__$1,inst_54559);
} else {
if((state_val_54562 === (2))){
var state_54561__$1 = state_54561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54561__$1,(4),ch);
} else {
if((state_val_54562 === (11))){
var inst_54541 = (state_54561[(8)]);
var inst_54550 = (state_54561[(2)]);
var inst_54538 = inst_54541;
var state_54561__$1 = (function (){var statearr_54571 = state_54561;
(statearr_54571[(7)] = inst_54538);

(statearr_54571[(10)] = inst_54550);

return statearr_54571;
})();
var statearr_54572_54596 = state_54561__$1;
(statearr_54572_54596[(2)] = null);

(statearr_54572_54596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54562 === (9))){
var inst_54541 = (state_54561[(8)]);
var state_54561__$1 = state_54561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54561__$1,(11),out,inst_54541);
} else {
if((state_val_54562 === (5))){
var inst_54538 = (state_54561[(7)]);
var inst_54541 = (state_54561[(8)]);
var inst_54545 = cljs.core._EQ_.call(null,inst_54541,inst_54538);
var state_54561__$1 = state_54561;
if(inst_54545){
var statearr_54574_54597 = state_54561__$1;
(statearr_54574_54597[(1)] = (8));

} else {
var statearr_54575_54598 = state_54561__$1;
(statearr_54575_54598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54562 === (10))){
var inst_54553 = (state_54561[(2)]);
var state_54561__$1 = state_54561;
var statearr_54576_54599 = state_54561__$1;
(statearr_54576_54599[(2)] = inst_54553);

(statearr_54576_54599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54562 === (8))){
var inst_54538 = (state_54561[(7)]);
var tmp54573 = inst_54538;
var inst_54538__$1 = tmp54573;
var state_54561__$1 = (function (){var statearr_54577 = state_54561;
(statearr_54577[(7)] = inst_54538__$1);

return statearr_54577;
})();
var statearr_54578_54600 = state_54561__$1;
(statearr_54578_54600[(2)] = null);

(statearr_54578_54600[(1)] = (2));


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
});})(c__28171__auto___54590,out))
;
return ((function (switch__28150__auto__,c__28171__auto___54590,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_54582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54582[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_54582[(1)] = (1));

return statearr_54582;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_54561){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_54561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e54583){if((e54583 instanceof Object)){
var ex__28154__auto__ = e54583;
var statearr_54584_54601 = state_54561;
(statearr_54584_54601[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54602 = state_54561;
state_54561 = G__54602;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_54561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_54561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___54590,out))
})();
var state__28173__auto__ = (function (){var statearr_54585 = f__28172__auto__.call(null);
(statearr_54585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___54590);

return statearr_54585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___54590,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args54603 = [];
var len__27054__auto___54673 = arguments.length;
var i__27055__auto___54674 = (0);
while(true){
if((i__27055__auto___54674 < len__27054__auto___54673)){
args54603.push((arguments[i__27055__auto___54674]));

var G__54675 = (i__27055__auto___54674 + (1));
i__27055__auto___54674 = G__54675;
continue;
} else {
}
break;
}

var G__54605 = args54603.length;
switch (G__54605) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54603.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28171__auto___54677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___54677,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___54677,out){
return (function (state_54643){
var state_val_54644 = (state_54643[(1)]);
if((state_val_54644 === (7))){
var inst_54639 = (state_54643[(2)]);
var state_54643__$1 = state_54643;
var statearr_54645_54678 = state_54643__$1;
(statearr_54645_54678[(2)] = inst_54639);

(statearr_54645_54678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54644 === (1))){
var inst_54606 = (new Array(n));
var inst_54607 = inst_54606;
var inst_54608 = (0);
var state_54643__$1 = (function (){var statearr_54646 = state_54643;
(statearr_54646[(7)] = inst_54608);

(statearr_54646[(8)] = inst_54607);

return statearr_54646;
})();
var statearr_54647_54679 = state_54643__$1;
(statearr_54647_54679[(2)] = null);

(statearr_54647_54679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54644 === (4))){
var inst_54611 = (state_54643[(9)]);
var inst_54611__$1 = (state_54643[(2)]);
var inst_54612 = (inst_54611__$1 == null);
var inst_54613 = cljs.core.not.call(null,inst_54612);
var state_54643__$1 = (function (){var statearr_54648 = state_54643;
(statearr_54648[(9)] = inst_54611__$1);

return statearr_54648;
})();
if(inst_54613){
var statearr_54649_54680 = state_54643__$1;
(statearr_54649_54680[(1)] = (5));

} else {
var statearr_54650_54681 = state_54643__$1;
(statearr_54650_54681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54644 === (15))){
var inst_54633 = (state_54643[(2)]);
var state_54643__$1 = state_54643;
var statearr_54651_54682 = state_54643__$1;
(statearr_54651_54682[(2)] = inst_54633);

(statearr_54651_54682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54644 === (13))){
var state_54643__$1 = state_54643;
var statearr_54652_54683 = state_54643__$1;
(statearr_54652_54683[(2)] = null);

(statearr_54652_54683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54644 === (6))){
var inst_54608 = (state_54643[(7)]);
var inst_54629 = (inst_54608 > (0));
var state_54643__$1 = state_54643;
if(cljs.core.truth_(inst_54629)){
var statearr_54653_54684 = state_54643__$1;
(statearr_54653_54684[(1)] = (12));

} else {
var statearr_54654_54685 = state_54643__$1;
(statearr_54654_54685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54644 === (3))){
var inst_54641 = (state_54643[(2)]);
var state_54643__$1 = state_54643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54643__$1,inst_54641);
} else {
if((state_val_54644 === (12))){
var inst_54607 = (state_54643[(8)]);
var inst_54631 = cljs.core.vec.call(null,inst_54607);
var state_54643__$1 = state_54643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54643__$1,(15),out,inst_54631);
} else {
if((state_val_54644 === (2))){
var state_54643__$1 = state_54643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54643__$1,(4),ch);
} else {
if((state_val_54644 === (11))){
var inst_54623 = (state_54643[(2)]);
var inst_54624 = (new Array(n));
var inst_54607 = inst_54624;
var inst_54608 = (0);
var state_54643__$1 = (function (){var statearr_54655 = state_54643;
(statearr_54655[(7)] = inst_54608);

(statearr_54655[(10)] = inst_54623);

(statearr_54655[(8)] = inst_54607);

return statearr_54655;
})();
var statearr_54656_54686 = state_54643__$1;
(statearr_54656_54686[(2)] = null);

(statearr_54656_54686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54644 === (9))){
var inst_54607 = (state_54643[(8)]);
var inst_54621 = cljs.core.vec.call(null,inst_54607);
var state_54643__$1 = state_54643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54643__$1,(11),out,inst_54621);
} else {
if((state_val_54644 === (5))){
var inst_54608 = (state_54643[(7)]);
var inst_54611 = (state_54643[(9)]);
var inst_54616 = (state_54643[(11)]);
var inst_54607 = (state_54643[(8)]);
var inst_54615 = (inst_54607[inst_54608] = inst_54611);
var inst_54616__$1 = (inst_54608 + (1));
var inst_54617 = (inst_54616__$1 < n);
var state_54643__$1 = (function (){var statearr_54657 = state_54643;
(statearr_54657[(12)] = inst_54615);

(statearr_54657[(11)] = inst_54616__$1);

return statearr_54657;
})();
if(cljs.core.truth_(inst_54617)){
var statearr_54658_54687 = state_54643__$1;
(statearr_54658_54687[(1)] = (8));

} else {
var statearr_54659_54688 = state_54643__$1;
(statearr_54659_54688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54644 === (14))){
var inst_54636 = (state_54643[(2)]);
var inst_54637 = cljs.core.async.close_BANG_.call(null,out);
var state_54643__$1 = (function (){var statearr_54661 = state_54643;
(statearr_54661[(13)] = inst_54636);

return statearr_54661;
})();
var statearr_54662_54689 = state_54643__$1;
(statearr_54662_54689[(2)] = inst_54637);

(statearr_54662_54689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54644 === (10))){
var inst_54627 = (state_54643[(2)]);
var state_54643__$1 = state_54643;
var statearr_54663_54690 = state_54643__$1;
(statearr_54663_54690[(2)] = inst_54627);

(statearr_54663_54690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54644 === (8))){
var inst_54616 = (state_54643[(11)]);
var inst_54607 = (state_54643[(8)]);
var tmp54660 = inst_54607;
var inst_54607__$1 = tmp54660;
var inst_54608 = inst_54616;
var state_54643__$1 = (function (){var statearr_54664 = state_54643;
(statearr_54664[(7)] = inst_54608);

(statearr_54664[(8)] = inst_54607__$1);

return statearr_54664;
})();
var statearr_54665_54691 = state_54643__$1;
(statearr_54665_54691[(2)] = null);

(statearr_54665_54691[(1)] = (2));


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
});})(c__28171__auto___54677,out))
;
return ((function (switch__28150__auto__,c__28171__auto___54677,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_54669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54669[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_54669[(1)] = (1));

return statearr_54669;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_54643){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_54643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e54670){if((e54670 instanceof Object)){
var ex__28154__auto__ = e54670;
var statearr_54671_54692 = state_54643;
(statearr_54671_54692[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54693 = state_54643;
state_54643 = G__54693;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_54643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_54643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___54677,out))
})();
var state__28173__auto__ = (function (){var statearr_54672 = f__28172__auto__.call(null);
(statearr_54672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___54677);

return statearr_54672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___54677,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args54694 = [];
var len__27054__auto___54768 = arguments.length;
var i__27055__auto___54769 = (0);
while(true){
if((i__27055__auto___54769 < len__27054__auto___54768)){
args54694.push((arguments[i__27055__auto___54769]));

var G__54770 = (i__27055__auto___54769 + (1));
i__27055__auto___54769 = G__54770;
continue;
} else {
}
break;
}

var G__54696 = args54694.length;
switch (G__54696) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54694.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28171__auto___54772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___54772,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___54772,out){
return (function (state_54738){
var state_val_54739 = (state_54738[(1)]);
if((state_val_54739 === (7))){
var inst_54734 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
var statearr_54740_54773 = state_54738__$1;
(statearr_54740_54773[(2)] = inst_54734);

(statearr_54740_54773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (1))){
var inst_54697 = [];
var inst_54698 = inst_54697;
var inst_54699 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54738__$1 = (function (){var statearr_54741 = state_54738;
(statearr_54741[(7)] = inst_54698);

(statearr_54741[(8)] = inst_54699);

return statearr_54741;
})();
var statearr_54742_54774 = state_54738__$1;
(statearr_54742_54774[(2)] = null);

(statearr_54742_54774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (4))){
var inst_54702 = (state_54738[(9)]);
var inst_54702__$1 = (state_54738[(2)]);
var inst_54703 = (inst_54702__$1 == null);
var inst_54704 = cljs.core.not.call(null,inst_54703);
var state_54738__$1 = (function (){var statearr_54743 = state_54738;
(statearr_54743[(9)] = inst_54702__$1);

return statearr_54743;
})();
if(inst_54704){
var statearr_54744_54775 = state_54738__$1;
(statearr_54744_54775[(1)] = (5));

} else {
var statearr_54745_54776 = state_54738__$1;
(statearr_54745_54776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (15))){
var inst_54728 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
var statearr_54746_54777 = state_54738__$1;
(statearr_54746_54777[(2)] = inst_54728);

(statearr_54746_54777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (13))){
var state_54738__$1 = state_54738;
var statearr_54747_54778 = state_54738__$1;
(statearr_54747_54778[(2)] = null);

(statearr_54747_54778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (6))){
var inst_54698 = (state_54738[(7)]);
var inst_54723 = inst_54698.length;
var inst_54724 = (inst_54723 > (0));
var state_54738__$1 = state_54738;
if(cljs.core.truth_(inst_54724)){
var statearr_54748_54779 = state_54738__$1;
(statearr_54748_54779[(1)] = (12));

} else {
var statearr_54749_54780 = state_54738__$1;
(statearr_54749_54780[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (3))){
var inst_54736 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54738__$1,inst_54736);
} else {
if((state_val_54739 === (12))){
var inst_54698 = (state_54738[(7)]);
var inst_54726 = cljs.core.vec.call(null,inst_54698);
var state_54738__$1 = state_54738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54738__$1,(15),out,inst_54726);
} else {
if((state_val_54739 === (2))){
var state_54738__$1 = state_54738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54738__$1,(4),ch);
} else {
if((state_val_54739 === (11))){
var inst_54702 = (state_54738[(9)]);
var inst_54706 = (state_54738[(10)]);
var inst_54716 = (state_54738[(2)]);
var inst_54717 = [];
var inst_54718 = inst_54717.push(inst_54702);
var inst_54698 = inst_54717;
var inst_54699 = inst_54706;
var state_54738__$1 = (function (){var statearr_54750 = state_54738;
(statearr_54750[(11)] = inst_54716);

(statearr_54750[(12)] = inst_54718);

(statearr_54750[(7)] = inst_54698);

(statearr_54750[(8)] = inst_54699);

return statearr_54750;
})();
var statearr_54751_54781 = state_54738__$1;
(statearr_54751_54781[(2)] = null);

(statearr_54751_54781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (9))){
var inst_54698 = (state_54738[(7)]);
var inst_54714 = cljs.core.vec.call(null,inst_54698);
var state_54738__$1 = state_54738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54738__$1,(11),out,inst_54714);
} else {
if((state_val_54739 === (5))){
var inst_54702 = (state_54738[(9)]);
var inst_54699 = (state_54738[(8)]);
var inst_54706 = (state_54738[(10)]);
var inst_54706__$1 = f.call(null,inst_54702);
var inst_54707 = cljs.core._EQ_.call(null,inst_54706__$1,inst_54699);
var inst_54708 = cljs.core.keyword_identical_QMARK_.call(null,inst_54699,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_54709 = (inst_54707) || (inst_54708);
var state_54738__$1 = (function (){var statearr_54752 = state_54738;
(statearr_54752[(10)] = inst_54706__$1);

return statearr_54752;
})();
if(cljs.core.truth_(inst_54709)){
var statearr_54753_54782 = state_54738__$1;
(statearr_54753_54782[(1)] = (8));

} else {
var statearr_54754_54783 = state_54738__$1;
(statearr_54754_54783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (14))){
var inst_54731 = (state_54738[(2)]);
var inst_54732 = cljs.core.async.close_BANG_.call(null,out);
var state_54738__$1 = (function (){var statearr_54756 = state_54738;
(statearr_54756[(13)] = inst_54731);

return statearr_54756;
})();
var statearr_54757_54784 = state_54738__$1;
(statearr_54757_54784[(2)] = inst_54732);

(statearr_54757_54784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (10))){
var inst_54721 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
var statearr_54758_54785 = state_54738__$1;
(statearr_54758_54785[(2)] = inst_54721);

(statearr_54758_54785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (8))){
var inst_54702 = (state_54738[(9)]);
var inst_54698 = (state_54738[(7)]);
var inst_54706 = (state_54738[(10)]);
var inst_54711 = inst_54698.push(inst_54702);
var tmp54755 = inst_54698;
var inst_54698__$1 = tmp54755;
var inst_54699 = inst_54706;
var state_54738__$1 = (function (){var statearr_54759 = state_54738;
(statearr_54759[(14)] = inst_54711);

(statearr_54759[(7)] = inst_54698__$1);

(statearr_54759[(8)] = inst_54699);

return statearr_54759;
})();
var statearr_54760_54786 = state_54738__$1;
(statearr_54760_54786[(2)] = null);

(statearr_54760_54786[(1)] = (2));


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
});})(c__28171__auto___54772,out))
;
return ((function (switch__28150__auto__,c__28171__auto___54772,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_54764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54764[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_54764[(1)] = (1));

return statearr_54764;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_54738){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_54738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e54765){if((e54765 instanceof Object)){
var ex__28154__auto__ = e54765;
var statearr_54766_54787 = state_54738;
(statearr_54766_54787[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54788 = state_54738;
state_54738 = G__54788;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_54738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_54738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___54772,out))
})();
var state__28173__auto__ = (function (){var statearr_54767 = f__28172__auto__.call(null);
(statearr_54767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___54772);

return statearr_54767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___54772,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1499548758934