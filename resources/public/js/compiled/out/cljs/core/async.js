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
var args63807 = [];
var len__27054__auto___63813 = arguments.length;
var i__27055__auto___63814 = (0);
while(true){
if((i__27055__auto___63814 < len__27054__auto___63813)){
args63807.push((arguments[i__27055__auto___63814]));

var G__63815 = (i__27055__auto___63814 + (1));
i__27055__auto___63814 = G__63815;
continue;
} else {
}
break;
}

var G__63809 = args63807.length;
switch (G__63809) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63807.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async63810 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63810 = (function (f,blockable,meta63811){
this.f = f;
this.blockable = blockable;
this.meta63811 = meta63811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63812,meta63811__$1){
var self__ = this;
var _63812__$1 = this;
return (new cljs.core.async.t_cljs$core$async63810(self__.f,self__.blockable,meta63811__$1));
});

cljs.core.async.t_cljs$core$async63810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63812){
var self__ = this;
var _63812__$1 = this;
return self__.meta63811;
});

cljs.core.async.t_cljs$core$async63810.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async63810.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async63810.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async63810.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async63810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta63811","meta63811",-1170757135,null)], null);
});

cljs.core.async.t_cljs$core$async63810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63810";

cljs.core.async.t_cljs$core$async63810.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async63810");
});

cljs.core.async.__GT_t_cljs$core$async63810 = (function cljs$core$async$__GT_t_cljs$core$async63810(f__$1,blockable__$1,meta63811){
return (new cljs.core.async.t_cljs$core$async63810(f__$1,blockable__$1,meta63811));
});

}

return (new cljs.core.async.t_cljs$core$async63810(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args63819 = [];
var len__27054__auto___63822 = arguments.length;
var i__27055__auto___63823 = (0);
while(true){
if((i__27055__auto___63823 < len__27054__auto___63822)){
args63819.push((arguments[i__27055__auto___63823]));

var G__63824 = (i__27055__auto___63823 + (1));
i__27055__auto___63823 = G__63824;
continue;
} else {
}
break;
}

var G__63821 = args63819.length;
switch (G__63821) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63819.length)].join('')));

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
var args63826 = [];
var len__27054__auto___63829 = arguments.length;
var i__27055__auto___63830 = (0);
while(true){
if((i__27055__auto___63830 < len__27054__auto___63829)){
args63826.push((arguments[i__27055__auto___63830]));

var G__63831 = (i__27055__auto___63830 + (1));
i__27055__auto___63830 = G__63831;
continue;
} else {
}
break;
}

var G__63828 = args63826.length;
switch (G__63828) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63826.length)].join('')));

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
var args63833 = [];
var len__27054__auto___63836 = arguments.length;
var i__27055__auto___63837 = (0);
while(true){
if((i__27055__auto___63837 < len__27054__auto___63836)){
args63833.push((arguments[i__27055__auto___63837]));

var G__63838 = (i__27055__auto___63837 + (1));
i__27055__auto___63837 = G__63838;
continue;
} else {
}
break;
}

var G__63835 = args63833.length;
switch (G__63835) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63833.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_63840 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_63840);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_63840,ret){
return (function (){
return fn1.call(null,val_63840);
});})(val_63840,ret))
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
var args63841 = [];
var len__27054__auto___63844 = arguments.length;
var i__27055__auto___63845 = (0);
while(true){
if((i__27055__auto___63845 < len__27054__auto___63844)){
args63841.push((arguments[i__27055__auto___63845]));

var G__63846 = (i__27055__auto___63845 + (1));
i__27055__auto___63845 = G__63846;
continue;
} else {
}
break;
}

var G__63843 = args63841.length;
switch (G__63843) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63841.length)].join('')));

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
var n__26894__auto___63848 = n;
var x_63849 = (0);
while(true){
if((x_63849 < n__26894__auto___63848)){
(a[x_63849] = (0));

var G__63850 = (x_63849 + (1));
x_63849 = G__63850;
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

var G__63851 = (i + (1));
i = G__63851;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async63855 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63855 = (function (alt_flag,flag,meta63856){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta63856 = meta63856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_63857,meta63856__$1){
var self__ = this;
var _63857__$1 = this;
return (new cljs.core.async.t_cljs$core$async63855(self__.alt_flag,self__.flag,meta63856__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async63855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_63857){
var self__ = this;
var _63857__$1 = this;
return self__.meta63856;
});})(flag))
;

cljs.core.async.t_cljs$core$async63855.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async63855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async63855.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async63855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async63855.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta63856","meta63856",-78102903,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async63855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63855";

cljs.core.async.t_cljs$core$async63855.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async63855");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async63855 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async63855(alt_flag__$1,flag__$1,meta63856){
return (new cljs.core.async.t_cljs$core$async63855(alt_flag__$1,flag__$1,meta63856));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async63855(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async63861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63861 = (function (alt_handler,flag,cb,meta63862){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta63862 = meta63862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63863,meta63862__$1){
var self__ = this;
var _63863__$1 = this;
return (new cljs.core.async.t_cljs$core$async63861(self__.alt_handler,self__.flag,self__.cb,meta63862__$1));
});

cljs.core.async.t_cljs$core$async63861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63863){
var self__ = this;
var _63863__$1 = this;
return self__.meta63862;
});

cljs.core.async.t_cljs$core$async63861.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async63861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async63861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async63861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async63861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta63862","meta63862",-1868371510,null)], null);
});

cljs.core.async.t_cljs$core$async63861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63861";

cljs.core.async.t_cljs$core$async63861.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async63861");
});

cljs.core.async.__GT_t_cljs$core$async63861 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async63861(alt_handler__$1,flag__$1,cb__$1,meta63862){
return (new cljs.core.async.t_cljs$core$async63861(alt_handler__$1,flag__$1,cb__$1,meta63862));
});

}

return (new cljs.core.async.t_cljs$core$async63861(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__63864_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63864_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__63865_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63865_SHARP_,port], null));
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
var G__63866 = (i + (1));
i = G__63866;
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
var len__27054__auto___63872 = arguments.length;
var i__27055__auto___63873 = (0);
while(true){
if((i__27055__auto___63873 < len__27054__auto___63872)){
args__27061__auto__.push((arguments[i__27055__auto___63873]));

var G__63874 = (i__27055__auto___63873 + (1));
i__27055__auto___63873 = G__63874;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__63869){
var map__63870 = p__63869;
var map__63870__$1 = ((((!((map__63870 == null)))?((((map__63870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63870):map__63870);
var opts = map__63870__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq63867){
var G__63868 = cljs.core.first.call(null,seq63867);
var seq63867__$1 = cljs.core.next.call(null,seq63867);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63868,seq63867__$1);
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
var args63875 = [];
var len__27054__auto___63925 = arguments.length;
var i__27055__auto___63926 = (0);
while(true){
if((i__27055__auto___63926 < len__27054__auto___63925)){
args63875.push((arguments[i__27055__auto___63926]));

var G__63927 = (i__27055__auto___63926 + (1));
i__27055__auto___63926 = G__63927;
continue;
} else {
}
break;
}

var G__63877 = args63875.length;
switch (G__63877) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63875.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28009__auto___63929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___63929){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___63929){
return (function (state_63901){
var state_val_63902 = (state_63901[(1)]);
if((state_val_63902 === (7))){
var inst_63897 = (state_63901[(2)]);
var state_63901__$1 = state_63901;
var statearr_63903_63930 = state_63901__$1;
(statearr_63903_63930[(2)] = inst_63897);

(statearr_63903_63930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63902 === (1))){
var state_63901__$1 = state_63901;
var statearr_63904_63931 = state_63901__$1;
(statearr_63904_63931[(2)] = null);

(statearr_63904_63931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63902 === (4))){
var inst_63880 = (state_63901[(7)]);
var inst_63880__$1 = (state_63901[(2)]);
var inst_63881 = (inst_63880__$1 == null);
var state_63901__$1 = (function (){var statearr_63905 = state_63901;
(statearr_63905[(7)] = inst_63880__$1);

return statearr_63905;
})();
if(cljs.core.truth_(inst_63881)){
var statearr_63906_63932 = state_63901__$1;
(statearr_63906_63932[(1)] = (5));

} else {
var statearr_63907_63933 = state_63901__$1;
(statearr_63907_63933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63902 === (13))){
var state_63901__$1 = state_63901;
var statearr_63908_63934 = state_63901__$1;
(statearr_63908_63934[(2)] = null);

(statearr_63908_63934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63902 === (6))){
var inst_63880 = (state_63901[(7)]);
var state_63901__$1 = state_63901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63901__$1,(11),to,inst_63880);
} else {
if((state_val_63902 === (3))){
var inst_63899 = (state_63901[(2)]);
var state_63901__$1 = state_63901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63901__$1,inst_63899);
} else {
if((state_val_63902 === (12))){
var state_63901__$1 = state_63901;
var statearr_63909_63935 = state_63901__$1;
(statearr_63909_63935[(2)] = null);

(statearr_63909_63935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63902 === (2))){
var state_63901__$1 = state_63901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63901__$1,(4),from);
} else {
if((state_val_63902 === (11))){
var inst_63890 = (state_63901[(2)]);
var state_63901__$1 = state_63901;
if(cljs.core.truth_(inst_63890)){
var statearr_63910_63936 = state_63901__$1;
(statearr_63910_63936[(1)] = (12));

} else {
var statearr_63911_63937 = state_63901__$1;
(statearr_63911_63937[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63902 === (9))){
var state_63901__$1 = state_63901;
var statearr_63912_63938 = state_63901__$1;
(statearr_63912_63938[(2)] = null);

(statearr_63912_63938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63902 === (5))){
var state_63901__$1 = state_63901;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63913_63939 = state_63901__$1;
(statearr_63913_63939[(1)] = (8));

} else {
var statearr_63914_63940 = state_63901__$1;
(statearr_63914_63940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63902 === (14))){
var inst_63895 = (state_63901[(2)]);
var state_63901__$1 = state_63901;
var statearr_63915_63941 = state_63901__$1;
(statearr_63915_63941[(2)] = inst_63895);

(statearr_63915_63941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63902 === (10))){
var inst_63887 = (state_63901[(2)]);
var state_63901__$1 = state_63901;
var statearr_63916_63942 = state_63901__$1;
(statearr_63916_63942[(2)] = inst_63887);

(statearr_63916_63942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63902 === (8))){
var inst_63884 = cljs.core.async.close_BANG_.call(null,to);
var state_63901__$1 = state_63901;
var statearr_63917_63943 = state_63901__$1;
(statearr_63917_63943[(2)] = inst_63884);

(statearr_63917_63943[(1)] = (10));


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
});})(c__28009__auto___63929))
;
return ((function (switch__27988__auto__,c__28009__auto___63929){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_63921 = [null,null,null,null,null,null,null,null];
(statearr_63921[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_63921[(1)] = (1));

return statearr_63921;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_63901){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_63901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e63922){if((e63922 instanceof Object)){
var ex__27992__auto__ = e63922;
var statearr_63923_63944 = state_63901;
(statearr_63923_63944[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63945 = state_63901;
state_63901 = G__63945;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_63901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_63901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___63929))
})();
var state__28011__auto__ = (function (){var statearr_63924 = f__28010__auto__.call(null);
(statearr_63924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___63929);

return statearr_63924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___63929))
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
return (function (p__64133){
var vec__64134 = p__64133;
var v = cljs.core.nth.call(null,vec__64134,(0),null);
var p = cljs.core.nth.call(null,vec__64134,(1),null);
var job = vec__64134;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28009__auto___64320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___64320,res,vec__64134,v,p,job,jobs,results){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___64320,res,vec__64134,v,p,job,jobs,results){
return (function (state_64141){
var state_val_64142 = (state_64141[(1)]);
if((state_val_64142 === (1))){
var state_64141__$1 = state_64141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64141__$1,(2),res,v);
} else {
if((state_val_64142 === (2))){
var inst_64138 = (state_64141[(2)]);
var inst_64139 = cljs.core.async.close_BANG_.call(null,res);
var state_64141__$1 = (function (){var statearr_64143 = state_64141;
(statearr_64143[(7)] = inst_64138);

return statearr_64143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64141__$1,inst_64139);
} else {
return null;
}
}
});})(c__28009__auto___64320,res,vec__64134,v,p,job,jobs,results))
;
return ((function (switch__27988__auto__,c__28009__auto___64320,res,vec__64134,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_64147 = [null,null,null,null,null,null,null,null];
(statearr_64147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_64147[(1)] = (1));

return statearr_64147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_64141){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_64141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e64148){if((e64148 instanceof Object)){
var ex__27992__auto__ = e64148;
var statearr_64149_64321 = state_64141;
(statearr_64149_64321[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64322 = state_64141;
state_64141 = G__64322;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_64141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_64141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___64320,res,vec__64134,v,p,job,jobs,results))
})();
var state__28011__auto__ = (function (){var statearr_64150 = f__28010__auto__.call(null);
(statearr_64150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___64320);

return statearr_64150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___64320,res,vec__64134,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__64151){
var vec__64152 = p__64151;
var v = cljs.core.nth.call(null,vec__64152,(0),null);
var p = cljs.core.nth.call(null,vec__64152,(1),null);
var job = vec__64152;
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
var n__26894__auto___64323 = n;
var __64324 = (0);
while(true){
if((__64324 < n__26894__auto___64323)){
var G__64155_64325 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__64155_64325) {
case "compute":
var c__28009__auto___64327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__64324,c__28009__auto___64327,G__64155_64325,n__26894__auto___64323,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (__64324,c__28009__auto___64327,G__64155_64325,n__26894__auto___64323,jobs,results,process,async){
return (function (state_64168){
var state_val_64169 = (state_64168[(1)]);
if((state_val_64169 === (1))){
var state_64168__$1 = state_64168;
var statearr_64170_64328 = state_64168__$1;
(statearr_64170_64328[(2)] = null);

(statearr_64170_64328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64169 === (2))){
var state_64168__$1 = state_64168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64168__$1,(4),jobs);
} else {
if((state_val_64169 === (3))){
var inst_64166 = (state_64168[(2)]);
var state_64168__$1 = state_64168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64168__$1,inst_64166);
} else {
if((state_val_64169 === (4))){
var inst_64158 = (state_64168[(2)]);
var inst_64159 = process.call(null,inst_64158);
var state_64168__$1 = state_64168;
if(cljs.core.truth_(inst_64159)){
var statearr_64171_64329 = state_64168__$1;
(statearr_64171_64329[(1)] = (5));

} else {
var statearr_64172_64330 = state_64168__$1;
(statearr_64172_64330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64169 === (5))){
var state_64168__$1 = state_64168;
var statearr_64173_64331 = state_64168__$1;
(statearr_64173_64331[(2)] = null);

(statearr_64173_64331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64169 === (6))){
var state_64168__$1 = state_64168;
var statearr_64174_64332 = state_64168__$1;
(statearr_64174_64332[(2)] = null);

(statearr_64174_64332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64169 === (7))){
var inst_64164 = (state_64168[(2)]);
var state_64168__$1 = state_64168;
var statearr_64175_64333 = state_64168__$1;
(statearr_64175_64333[(2)] = inst_64164);

(statearr_64175_64333[(1)] = (3));


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
});})(__64324,c__28009__auto___64327,G__64155_64325,n__26894__auto___64323,jobs,results,process,async))
;
return ((function (__64324,switch__27988__auto__,c__28009__auto___64327,G__64155_64325,n__26894__auto___64323,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_64179 = [null,null,null,null,null,null,null];
(statearr_64179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_64179[(1)] = (1));

return statearr_64179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_64168){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_64168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e64180){if((e64180 instanceof Object)){
var ex__27992__auto__ = e64180;
var statearr_64181_64334 = state_64168;
(statearr_64181_64334[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64335 = state_64168;
state_64168 = G__64335;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_64168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_64168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(__64324,switch__27988__auto__,c__28009__auto___64327,G__64155_64325,n__26894__auto___64323,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_64182 = f__28010__auto__.call(null);
(statearr_64182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___64327);

return statearr_64182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(__64324,c__28009__auto___64327,G__64155_64325,n__26894__auto___64323,jobs,results,process,async))
);


break;
case "async":
var c__28009__auto___64336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__64324,c__28009__auto___64336,G__64155_64325,n__26894__auto___64323,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (__64324,c__28009__auto___64336,G__64155_64325,n__26894__auto___64323,jobs,results,process,async){
return (function (state_64195){
var state_val_64196 = (state_64195[(1)]);
if((state_val_64196 === (1))){
var state_64195__$1 = state_64195;
var statearr_64197_64337 = state_64195__$1;
(statearr_64197_64337[(2)] = null);

(statearr_64197_64337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64196 === (2))){
var state_64195__$1 = state_64195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64195__$1,(4),jobs);
} else {
if((state_val_64196 === (3))){
var inst_64193 = (state_64195[(2)]);
var state_64195__$1 = state_64195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64195__$1,inst_64193);
} else {
if((state_val_64196 === (4))){
var inst_64185 = (state_64195[(2)]);
var inst_64186 = async.call(null,inst_64185);
var state_64195__$1 = state_64195;
if(cljs.core.truth_(inst_64186)){
var statearr_64198_64338 = state_64195__$1;
(statearr_64198_64338[(1)] = (5));

} else {
var statearr_64199_64339 = state_64195__$1;
(statearr_64199_64339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64196 === (5))){
var state_64195__$1 = state_64195;
var statearr_64200_64340 = state_64195__$1;
(statearr_64200_64340[(2)] = null);

(statearr_64200_64340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64196 === (6))){
var state_64195__$1 = state_64195;
var statearr_64201_64341 = state_64195__$1;
(statearr_64201_64341[(2)] = null);

(statearr_64201_64341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64196 === (7))){
var inst_64191 = (state_64195[(2)]);
var state_64195__$1 = state_64195;
var statearr_64202_64342 = state_64195__$1;
(statearr_64202_64342[(2)] = inst_64191);

(statearr_64202_64342[(1)] = (3));


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
});})(__64324,c__28009__auto___64336,G__64155_64325,n__26894__auto___64323,jobs,results,process,async))
;
return ((function (__64324,switch__27988__auto__,c__28009__auto___64336,G__64155_64325,n__26894__auto___64323,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_64206 = [null,null,null,null,null,null,null];
(statearr_64206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_64206[(1)] = (1));

return statearr_64206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_64195){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_64195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e64207){if((e64207 instanceof Object)){
var ex__27992__auto__ = e64207;
var statearr_64208_64343 = state_64195;
(statearr_64208_64343[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64344 = state_64195;
state_64195 = G__64344;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_64195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_64195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(__64324,switch__27988__auto__,c__28009__auto___64336,G__64155_64325,n__26894__auto___64323,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_64209 = f__28010__auto__.call(null);
(statearr_64209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___64336);

return statearr_64209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(__64324,c__28009__auto___64336,G__64155_64325,n__26894__auto___64323,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__64345 = (__64324 + (1));
__64324 = G__64345;
continue;
} else {
}
break;
}

var c__28009__auto___64346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___64346,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___64346,jobs,results,process,async){
return (function (state_64231){
var state_val_64232 = (state_64231[(1)]);
if((state_val_64232 === (1))){
var state_64231__$1 = state_64231;
var statearr_64233_64347 = state_64231__$1;
(statearr_64233_64347[(2)] = null);

(statearr_64233_64347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64232 === (2))){
var state_64231__$1 = state_64231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64231__$1,(4),from);
} else {
if((state_val_64232 === (3))){
var inst_64229 = (state_64231[(2)]);
var state_64231__$1 = state_64231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64231__$1,inst_64229);
} else {
if((state_val_64232 === (4))){
var inst_64212 = (state_64231[(7)]);
var inst_64212__$1 = (state_64231[(2)]);
var inst_64213 = (inst_64212__$1 == null);
var state_64231__$1 = (function (){var statearr_64234 = state_64231;
(statearr_64234[(7)] = inst_64212__$1);

return statearr_64234;
})();
if(cljs.core.truth_(inst_64213)){
var statearr_64235_64348 = state_64231__$1;
(statearr_64235_64348[(1)] = (5));

} else {
var statearr_64236_64349 = state_64231__$1;
(statearr_64236_64349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64232 === (5))){
var inst_64215 = cljs.core.async.close_BANG_.call(null,jobs);
var state_64231__$1 = state_64231;
var statearr_64237_64350 = state_64231__$1;
(statearr_64237_64350[(2)] = inst_64215);

(statearr_64237_64350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64232 === (6))){
var inst_64212 = (state_64231[(7)]);
var inst_64217 = (state_64231[(8)]);
var inst_64217__$1 = cljs.core.async.chan.call(null,(1));
var inst_64218 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64219 = [inst_64212,inst_64217__$1];
var inst_64220 = (new cljs.core.PersistentVector(null,2,(5),inst_64218,inst_64219,null));
var state_64231__$1 = (function (){var statearr_64238 = state_64231;
(statearr_64238[(8)] = inst_64217__$1);

return statearr_64238;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64231__$1,(8),jobs,inst_64220);
} else {
if((state_val_64232 === (7))){
var inst_64227 = (state_64231[(2)]);
var state_64231__$1 = state_64231;
var statearr_64239_64351 = state_64231__$1;
(statearr_64239_64351[(2)] = inst_64227);

(statearr_64239_64351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64232 === (8))){
var inst_64217 = (state_64231[(8)]);
var inst_64222 = (state_64231[(2)]);
var state_64231__$1 = (function (){var statearr_64240 = state_64231;
(statearr_64240[(9)] = inst_64222);

return statearr_64240;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64231__$1,(9),results,inst_64217);
} else {
if((state_val_64232 === (9))){
var inst_64224 = (state_64231[(2)]);
var state_64231__$1 = (function (){var statearr_64241 = state_64231;
(statearr_64241[(10)] = inst_64224);

return statearr_64241;
})();
var statearr_64242_64352 = state_64231__$1;
(statearr_64242_64352[(2)] = null);

(statearr_64242_64352[(1)] = (2));


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
});})(c__28009__auto___64346,jobs,results,process,async))
;
return ((function (switch__27988__auto__,c__28009__auto___64346,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_64246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_64246[(1)] = (1));

return statearr_64246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_64231){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_64231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e64247){if((e64247 instanceof Object)){
var ex__27992__auto__ = e64247;
var statearr_64248_64353 = state_64231;
(statearr_64248_64353[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64354 = state_64231;
state_64231 = G__64354;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_64231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_64231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___64346,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_64249 = f__28010__auto__.call(null);
(statearr_64249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___64346);

return statearr_64249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___64346,jobs,results,process,async))
);


var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__,jobs,results,process,async){
return (function (state_64287){
var state_val_64288 = (state_64287[(1)]);
if((state_val_64288 === (7))){
var inst_64283 = (state_64287[(2)]);
var state_64287__$1 = state_64287;
var statearr_64289_64355 = state_64287__$1;
(statearr_64289_64355[(2)] = inst_64283);

(statearr_64289_64355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (20))){
var state_64287__$1 = state_64287;
var statearr_64290_64356 = state_64287__$1;
(statearr_64290_64356[(2)] = null);

(statearr_64290_64356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (1))){
var state_64287__$1 = state_64287;
var statearr_64291_64357 = state_64287__$1;
(statearr_64291_64357[(2)] = null);

(statearr_64291_64357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (4))){
var inst_64252 = (state_64287[(7)]);
var inst_64252__$1 = (state_64287[(2)]);
var inst_64253 = (inst_64252__$1 == null);
var state_64287__$1 = (function (){var statearr_64292 = state_64287;
(statearr_64292[(7)] = inst_64252__$1);

return statearr_64292;
})();
if(cljs.core.truth_(inst_64253)){
var statearr_64293_64358 = state_64287__$1;
(statearr_64293_64358[(1)] = (5));

} else {
var statearr_64294_64359 = state_64287__$1;
(statearr_64294_64359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (15))){
var inst_64265 = (state_64287[(8)]);
var state_64287__$1 = state_64287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64287__$1,(18),to,inst_64265);
} else {
if((state_val_64288 === (21))){
var inst_64278 = (state_64287[(2)]);
var state_64287__$1 = state_64287;
var statearr_64295_64360 = state_64287__$1;
(statearr_64295_64360[(2)] = inst_64278);

(statearr_64295_64360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (13))){
var inst_64280 = (state_64287[(2)]);
var state_64287__$1 = (function (){var statearr_64296 = state_64287;
(statearr_64296[(9)] = inst_64280);

return statearr_64296;
})();
var statearr_64297_64361 = state_64287__$1;
(statearr_64297_64361[(2)] = null);

(statearr_64297_64361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (6))){
var inst_64252 = (state_64287[(7)]);
var state_64287__$1 = state_64287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64287__$1,(11),inst_64252);
} else {
if((state_val_64288 === (17))){
var inst_64273 = (state_64287[(2)]);
var state_64287__$1 = state_64287;
if(cljs.core.truth_(inst_64273)){
var statearr_64298_64362 = state_64287__$1;
(statearr_64298_64362[(1)] = (19));

} else {
var statearr_64299_64363 = state_64287__$1;
(statearr_64299_64363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (3))){
var inst_64285 = (state_64287[(2)]);
var state_64287__$1 = state_64287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64287__$1,inst_64285);
} else {
if((state_val_64288 === (12))){
var inst_64262 = (state_64287[(10)]);
var state_64287__$1 = state_64287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64287__$1,(14),inst_64262);
} else {
if((state_val_64288 === (2))){
var state_64287__$1 = state_64287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64287__$1,(4),results);
} else {
if((state_val_64288 === (19))){
var state_64287__$1 = state_64287;
var statearr_64300_64364 = state_64287__$1;
(statearr_64300_64364[(2)] = null);

(statearr_64300_64364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (11))){
var inst_64262 = (state_64287[(2)]);
var state_64287__$1 = (function (){var statearr_64301 = state_64287;
(statearr_64301[(10)] = inst_64262);

return statearr_64301;
})();
var statearr_64302_64365 = state_64287__$1;
(statearr_64302_64365[(2)] = null);

(statearr_64302_64365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (9))){
var state_64287__$1 = state_64287;
var statearr_64303_64366 = state_64287__$1;
(statearr_64303_64366[(2)] = null);

(statearr_64303_64366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (5))){
var state_64287__$1 = state_64287;
if(cljs.core.truth_(close_QMARK_)){
var statearr_64304_64367 = state_64287__$1;
(statearr_64304_64367[(1)] = (8));

} else {
var statearr_64305_64368 = state_64287__$1;
(statearr_64305_64368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (14))){
var inst_64265 = (state_64287[(8)]);
var inst_64267 = (state_64287[(11)]);
var inst_64265__$1 = (state_64287[(2)]);
var inst_64266 = (inst_64265__$1 == null);
var inst_64267__$1 = cljs.core.not.call(null,inst_64266);
var state_64287__$1 = (function (){var statearr_64306 = state_64287;
(statearr_64306[(8)] = inst_64265__$1);

(statearr_64306[(11)] = inst_64267__$1);

return statearr_64306;
})();
if(inst_64267__$1){
var statearr_64307_64369 = state_64287__$1;
(statearr_64307_64369[(1)] = (15));

} else {
var statearr_64308_64370 = state_64287__$1;
(statearr_64308_64370[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (16))){
var inst_64267 = (state_64287[(11)]);
var state_64287__$1 = state_64287;
var statearr_64309_64371 = state_64287__$1;
(statearr_64309_64371[(2)] = inst_64267);

(statearr_64309_64371[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (10))){
var inst_64259 = (state_64287[(2)]);
var state_64287__$1 = state_64287;
var statearr_64310_64372 = state_64287__$1;
(statearr_64310_64372[(2)] = inst_64259);

(statearr_64310_64372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (18))){
var inst_64270 = (state_64287[(2)]);
var state_64287__$1 = state_64287;
var statearr_64311_64373 = state_64287__$1;
(statearr_64311_64373[(2)] = inst_64270);

(statearr_64311_64373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (8))){
var inst_64256 = cljs.core.async.close_BANG_.call(null,to);
var state_64287__$1 = state_64287;
var statearr_64312_64374 = state_64287__$1;
(statearr_64312_64374[(2)] = inst_64256);

(statearr_64312_64374[(1)] = (10));


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
var statearr_64316 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64316[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_64316[(1)] = (1));

return statearr_64316;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_64287){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_64287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e64317){if((e64317 instanceof Object)){
var ex__27992__auto__ = e64317;
var statearr_64318_64375 = state_64287;
(statearr_64318_64375[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64376 = state_64287;
state_64287 = G__64376;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_64287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_64287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_64319 = f__28010__auto__.call(null);
(statearr_64319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_64319;
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
var args64377 = [];
var len__27054__auto___64380 = arguments.length;
var i__27055__auto___64381 = (0);
while(true){
if((i__27055__auto___64381 < len__27054__auto___64380)){
args64377.push((arguments[i__27055__auto___64381]));

var G__64382 = (i__27055__auto___64381 + (1));
i__27055__auto___64381 = G__64382;
continue;
} else {
}
break;
}

var G__64379 = args64377.length;
switch (G__64379) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64377.length)].join('')));

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
var args64384 = [];
var len__27054__auto___64387 = arguments.length;
var i__27055__auto___64388 = (0);
while(true){
if((i__27055__auto___64388 < len__27054__auto___64387)){
args64384.push((arguments[i__27055__auto___64388]));

var G__64389 = (i__27055__auto___64388 + (1));
i__27055__auto___64388 = G__64389;
continue;
} else {
}
break;
}

var G__64386 = args64384.length;
switch (G__64386) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64384.length)].join('')));

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
var args64391 = [];
var len__27054__auto___64444 = arguments.length;
var i__27055__auto___64445 = (0);
while(true){
if((i__27055__auto___64445 < len__27054__auto___64444)){
args64391.push((arguments[i__27055__auto___64445]));

var G__64446 = (i__27055__auto___64445 + (1));
i__27055__auto___64445 = G__64446;
continue;
} else {
}
break;
}

var G__64393 = args64391.length;
switch (G__64393) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64391.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28009__auto___64448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___64448,tc,fc){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___64448,tc,fc){
return (function (state_64419){
var state_val_64420 = (state_64419[(1)]);
if((state_val_64420 === (7))){
var inst_64415 = (state_64419[(2)]);
var state_64419__$1 = state_64419;
var statearr_64421_64449 = state_64419__$1;
(statearr_64421_64449[(2)] = inst_64415);

(statearr_64421_64449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64420 === (1))){
var state_64419__$1 = state_64419;
var statearr_64422_64450 = state_64419__$1;
(statearr_64422_64450[(2)] = null);

(statearr_64422_64450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64420 === (4))){
var inst_64396 = (state_64419[(7)]);
var inst_64396__$1 = (state_64419[(2)]);
var inst_64397 = (inst_64396__$1 == null);
var state_64419__$1 = (function (){var statearr_64423 = state_64419;
(statearr_64423[(7)] = inst_64396__$1);

return statearr_64423;
})();
if(cljs.core.truth_(inst_64397)){
var statearr_64424_64451 = state_64419__$1;
(statearr_64424_64451[(1)] = (5));

} else {
var statearr_64425_64452 = state_64419__$1;
(statearr_64425_64452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64420 === (13))){
var state_64419__$1 = state_64419;
var statearr_64426_64453 = state_64419__$1;
(statearr_64426_64453[(2)] = null);

(statearr_64426_64453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64420 === (6))){
var inst_64396 = (state_64419[(7)]);
var inst_64402 = p.call(null,inst_64396);
var state_64419__$1 = state_64419;
if(cljs.core.truth_(inst_64402)){
var statearr_64427_64454 = state_64419__$1;
(statearr_64427_64454[(1)] = (9));

} else {
var statearr_64428_64455 = state_64419__$1;
(statearr_64428_64455[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64420 === (3))){
var inst_64417 = (state_64419[(2)]);
var state_64419__$1 = state_64419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64419__$1,inst_64417);
} else {
if((state_val_64420 === (12))){
var state_64419__$1 = state_64419;
var statearr_64429_64456 = state_64419__$1;
(statearr_64429_64456[(2)] = null);

(statearr_64429_64456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64420 === (2))){
var state_64419__$1 = state_64419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64419__$1,(4),ch);
} else {
if((state_val_64420 === (11))){
var inst_64396 = (state_64419[(7)]);
var inst_64406 = (state_64419[(2)]);
var state_64419__$1 = state_64419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64419__$1,(8),inst_64406,inst_64396);
} else {
if((state_val_64420 === (9))){
var state_64419__$1 = state_64419;
var statearr_64430_64457 = state_64419__$1;
(statearr_64430_64457[(2)] = tc);

(statearr_64430_64457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64420 === (5))){
var inst_64399 = cljs.core.async.close_BANG_.call(null,tc);
var inst_64400 = cljs.core.async.close_BANG_.call(null,fc);
var state_64419__$1 = (function (){var statearr_64431 = state_64419;
(statearr_64431[(8)] = inst_64399);

return statearr_64431;
})();
var statearr_64432_64458 = state_64419__$1;
(statearr_64432_64458[(2)] = inst_64400);

(statearr_64432_64458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64420 === (14))){
var inst_64413 = (state_64419[(2)]);
var state_64419__$1 = state_64419;
var statearr_64433_64459 = state_64419__$1;
(statearr_64433_64459[(2)] = inst_64413);

(statearr_64433_64459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64420 === (10))){
var state_64419__$1 = state_64419;
var statearr_64434_64460 = state_64419__$1;
(statearr_64434_64460[(2)] = fc);

(statearr_64434_64460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64420 === (8))){
var inst_64408 = (state_64419[(2)]);
var state_64419__$1 = state_64419;
if(cljs.core.truth_(inst_64408)){
var statearr_64435_64461 = state_64419__$1;
(statearr_64435_64461[(1)] = (12));

} else {
var statearr_64436_64462 = state_64419__$1;
(statearr_64436_64462[(1)] = (13));

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
});})(c__28009__auto___64448,tc,fc))
;
return ((function (switch__27988__auto__,c__28009__auto___64448,tc,fc){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_64440 = [null,null,null,null,null,null,null,null,null];
(statearr_64440[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_64440[(1)] = (1));

return statearr_64440;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_64419){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_64419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e64441){if((e64441 instanceof Object)){
var ex__27992__auto__ = e64441;
var statearr_64442_64463 = state_64419;
(statearr_64442_64463[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64464 = state_64419;
state_64419 = G__64464;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_64419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_64419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___64448,tc,fc))
})();
var state__28011__auto__ = (function (){var statearr_64443 = f__28010__auto__.call(null);
(statearr_64443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___64448);

return statearr_64443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___64448,tc,fc))
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
return (function (state_64528){
var state_val_64529 = (state_64528[(1)]);
if((state_val_64529 === (7))){
var inst_64524 = (state_64528[(2)]);
var state_64528__$1 = state_64528;
var statearr_64530_64551 = state_64528__$1;
(statearr_64530_64551[(2)] = inst_64524);

(statearr_64530_64551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64529 === (1))){
var inst_64508 = init;
var state_64528__$1 = (function (){var statearr_64531 = state_64528;
(statearr_64531[(7)] = inst_64508);

return statearr_64531;
})();
var statearr_64532_64552 = state_64528__$1;
(statearr_64532_64552[(2)] = null);

(statearr_64532_64552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64529 === (4))){
var inst_64511 = (state_64528[(8)]);
var inst_64511__$1 = (state_64528[(2)]);
var inst_64512 = (inst_64511__$1 == null);
var state_64528__$1 = (function (){var statearr_64533 = state_64528;
(statearr_64533[(8)] = inst_64511__$1);

return statearr_64533;
})();
if(cljs.core.truth_(inst_64512)){
var statearr_64534_64553 = state_64528__$1;
(statearr_64534_64553[(1)] = (5));

} else {
var statearr_64535_64554 = state_64528__$1;
(statearr_64535_64554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64529 === (6))){
var inst_64515 = (state_64528[(9)]);
var inst_64508 = (state_64528[(7)]);
var inst_64511 = (state_64528[(8)]);
var inst_64515__$1 = f.call(null,inst_64508,inst_64511);
var inst_64516 = cljs.core.reduced_QMARK_.call(null,inst_64515__$1);
var state_64528__$1 = (function (){var statearr_64536 = state_64528;
(statearr_64536[(9)] = inst_64515__$1);

return statearr_64536;
})();
if(inst_64516){
var statearr_64537_64555 = state_64528__$1;
(statearr_64537_64555[(1)] = (8));

} else {
var statearr_64538_64556 = state_64528__$1;
(statearr_64538_64556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64529 === (3))){
var inst_64526 = (state_64528[(2)]);
var state_64528__$1 = state_64528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64528__$1,inst_64526);
} else {
if((state_val_64529 === (2))){
var state_64528__$1 = state_64528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64528__$1,(4),ch);
} else {
if((state_val_64529 === (9))){
var inst_64515 = (state_64528[(9)]);
var inst_64508 = inst_64515;
var state_64528__$1 = (function (){var statearr_64539 = state_64528;
(statearr_64539[(7)] = inst_64508);

return statearr_64539;
})();
var statearr_64540_64557 = state_64528__$1;
(statearr_64540_64557[(2)] = null);

(statearr_64540_64557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64529 === (5))){
var inst_64508 = (state_64528[(7)]);
var state_64528__$1 = state_64528;
var statearr_64541_64558 = state_64528__$1;
(statearr_64541_64558[(2)] = inst_64508);

(statearr_64541_64558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64529 === (10))){
var inst_64522 = (state_64528[(2)]);
var state_64528__$1 = state_64528;
var statearr_64542_64559 = state_64528__$1;
(statearr_64542_64559[(2)] = inst_64522);

(statearr_64542_64559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64529 === (8))){
var inst_64515 = (state_64528[(9)]);
var inst_64518 = cljs.core.deref.call(null,inst_64515);
var state_64528__$1 = state_64528;
var statearr_64543_64560 = state_64528__$1;
(statearr_64543_64560[(2)] = inst_64518);

(statearr_64543_64560[(1)] = (10));


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
var statearr_64547 = [null,null,null,null,null,null,null,null,null,null];
(statearr_64547[(0)] = cljs$core$async$reduce_$_state_machine__27989__auto__);

(statearr_64547[(1)] = (1));

return statearr_64547;
});
var cljs$core$async$reduce_$_state_machine__27989__auto____1 = (function (state_64528){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_64528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e64548){if((e64548 instanceof Object)){
var ex__27992__auto__ = e64548;
var statearr_64549_64561 = state_64528;
(statearr_64549_64561[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64562 = state_64528;
state_64528 = G__64562;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27989__auto__ = function(state_64528){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27989__auto____1.call(this,state_64528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27989__auto____0;
cljs$core$async$reduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27989__auto____1;
return cljs$core$async$reduce_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_64550 = f__28010__auto__.call(null);
(statearr_64550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_64550;
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
return (function (state_64582){
var state_val_64583 = (state_64582[(1)]);
if((state_val_64583 === (1))){
var inst_64577 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_64582__$1 = state_64582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64582__$1,(2),inst_64577);
} else {
if((state_val_64583 === (2))){
var inst_64579 = (state_64582[(2)]);
var inst_64580 = f__$1.call(null,inst_64579);
var state_64582__$1 = state_64582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64582__$1,inst_64580);
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
var statearr_64587 = [null,null,null,null,null,null,null];
(statearr_64587[(0)] = cljs$core$async$transduce_$_state_machine__27989__auto__);

(statearr_64587[(1)] = (1));

return statearr_64587;
});
var cljs$core$async$transduce_$_state_machine__27989__auto____1 = (function (state_64582){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_64582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e64588){if((e64588 instanceof Object)){
var ex__27992__auto__ = e64588;
var statearr_64589_64591 = state_64582;
(statearr_64589_64591[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64592 = state_64582;
state_64582 = G__64592;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27989__auto__ = function(state_64582){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27989__auto____1.call(this,state_64582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27989__auto____0;
cljs$core$async$transduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27989__auto____1;
return cljs$core$async$transduce_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,f__$1))
})();
var state__28011__auto__ = (function (){var statearr_64590 = f__28010__auto__.call(null);
(statearr_64590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_64590;
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
var args64593 = [];
var len__27054__auto___64645 = arguments.length;
var i__27055__auto___64646 = (0);
while(true){
if((i__27055__auto___64646 < len__27054__auto___64645)){
args64593.push((arguments[i__27055__auto___64646]));

var G__64647 = (i__27055__auto___64646 + (1));
i__27055__auto___64646 = G__64647;
continue;
} else {
}
break;
}

var G__64595 = args64593.length;
switch (G__64595) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64593.length)].join('')));

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
return (function (state_64620){
var state_val_64621 = (state_64620[(1)]);
if((state_val_64621 === (7))){
var inst_64602 = (state_64620[(2)]);
var state_64620__$1 = state_64620;
var statearr_64622_64649 = state_64620__$1;
(statearr_64622_64649[(2)] = inst_64602);

(statearr_64622_64649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64621 === (1))){
var inst_64596 = cljs.core.seq.call(null,coll);
var inst_64597 = inst_64596;
var state_64620__$1 = (function (){var statearr_64623 = state_64620;
(statearr_64623[(7)] = inst_64597);

return statearr_64623;
})();
var statearr_64624_64650 = state_64620__$1;
(statearr_64624_64650[(2)] = null);

(statearr_64624_64650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64621 === (4))){
var inst_64597 = (state_64620[(7)]);
var inst_64600 = cljs.core.first.call(null,inst_64597);
var state_64620__$1 = state_64620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64620__$1,(7),ch,inst_64600);
} else {
if((state_val_64621 === (13))){
var inst_64614 = (state_64620[(2)]);
var state_64620__$1 = state_64620;
var statearr_64625_64651 = state_64620__$1;
(statearr_64625_64651[(2)] = inst_64614);

(statearr_64625_64651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64621 === (6))){
var inst_64605 = (state_64620[(2)]);
var state_64620__$1 = state_64620;
if(cljs.core.truth_(inst_64605)){
var statearr_64626_64652 = state_64620__$1;
(statearr_64626_64652[(1)] = (8));

} else {
var statearr_64627_64653 = state_64620__$1;
(statearr_64627_64653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64621 === (3))){
var inst_64618 = (state_64620[(2)]);
var state_64620__$1 = state_64620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64620__$1,inst_64618);
} else {
if((state_val_64621 === (12))){
var state_64620__$1 = state_64620;
var statearr_64628_64654 = state_64620__$1;
(statearr_64628_64654[(2)] = null);

(statearr_64628_64654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64621 === (2))){
var inst_64597 = (state_64620[(7)]);
var state_64620__$1 = state_64620;
if(cljs.core.truth_(inst_64597)){
var statearr_64629_64655 = state_64620__$1;
(statearr_64629_64655[(1)] = (4));

} else {
var statearr_64630_64656 = state_64620__$1;
(statearr_64630_64656[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64621 === (11))){
var inst_64611 = cljs.core.async.close_BANG_.call(null,ch);
var state_64620__$1 = state_64620;
var statearr_64631_64657 = state_64620__$1;
(statearr_64631_64657[(2)] = inst_64611);

(statearr_64631_64657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64621 === (9))){
var state_64620__$1 = state_64620;
if(cljs.core.truth_(close_QMARK_)){
var statearr_64632_64658 = state_64620__$1;
(statearr_64632_64658[(1)] = (11));

} else {
var statearr_64633_64659 = state_64620__$1;
(statearr_64633_64659[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64621 === (5))){
var inst_64597 = (state_64620[(7)]);
var state_64620__$1 = state_64620;
var statearr_64634_64660 = state_64620__$1;
(statearr_64634_64660[(2)] = inst_64597);

(statearr_64634_64660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64621 === (10))){
var inst_64616 = (state_64620[(2)]);
var state_64620__$1 = state_64620;
var statearr_64635_64661 = state_64620__$1;
(statearr_64635_64661[(2)] = inst_64616);

(statearr_64635_64661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64621 === (8))){
var inst_64597 = (state_64620[(7)]);
var inst_64607 = cljs.core.next.call(null,inst_64597);
var inst_64597__$1 = inst_64607;
var state_64620__$1 = (function (){var statearr_64636 = state_64620;
(statearr_64636[(7)] = inst_64597__$1);

return statearr_64636;
})();
var statearr_64637_64662 = state_64620__$1;
(statearr_64637_64662[(2)] = null);

(statearr_64637_64662[(1)] = (2));


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
var statearr_64641 = [null,null,null,null,null,null,null,null];
(statearr_64641[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_64641[(1)] = (1));

return statearr_64641;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_64620){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_64620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e64642){if((e64642 instanceof Object)){
var ex__27992__auto__ = e64642;
var statearr_64643_64663 = state_64620;
(statearr_64643_64663[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64664 = state_64620;
state_64620 = G__64664;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_64620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_64620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_64644 = f__28010__auto__.call(null);
(statearr_64644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_64644;
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
if(typeof cljs.core.async.t_cljs$core$async64890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64890 = (function (mult,ch,cs,meta64891){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta64891 = meta64891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_64892,meta64891__$1){
var self__ = this;
var _64892__$1 = this;
return (new cljs.core.async.t_cljs$core$async64890(self__.mult,self__.ch,self__.cs,meta64891__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async64890.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_64892){
var self__ = this;
var _64892__$1 = this;
return self__.meta64891;
});})(cs))
;

cljs.core.async.t_cljs$core$async64890.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async64890.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async64890.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async64890.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async64890.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async64890.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async64890.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta64891","meta64891",-1086420040,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async64890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64890";

cljs.core.async.t_cljs$core$async64890.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async64890");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async64890 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async64890(mult__$1,ch__$1,cs__$1,meta64891){
return (new cljs.core.async.t_cljs$core$async64890(mult__$1,ch__$1,cs__$1,meta64891));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async64890(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28009__auto___65115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___65115,cs,m,dchan,dctr,done){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___65115,cs,m,dchan,dctr,done){
return (function (state_65027){
var state_val_65028 = (state_65027[(1)]);
if((state_val_65028 === (7))){
var inst_65023 = (state_65027[(2)]);
var state_65027__$1 = state_65027;
var statearr_65029_65116 = state_65027__$1;
(statearr_65029_65116[(2)] = inst_65023);

(statearr_65029_65116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (20))){
var inst_64926 = (state_65027[(7)]);
var inst_64938 = cljs.core.first.call(null,inst_64926);
var inst_64939 = cljs.core.nth.call(null,inst_64938,(0),null);
var inst_64940 = cljs.core.nth.call(null,inst_64938,(1),null);
var state_65027__$1 = (function (){var statearr_65030 = state_65027;
(statearr_65030[(8)] = inst_64939);

return statearr_65030;
})();
if(cljs.core.truth_(inst_64940)){
var statearr_65031_65117 = state_65027__$1;
(statearr_65031_65117[(1)] = (22));

} else {
var statearr_65032_65118 = state_65027__$1;
(statearr_65032_65118[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (27))){
var inst_64975 = (state_65027[(9)]);
var inst_64970 = (state_65027[(10)]);
var inst_64968 = (state_65027[(11)]);
var inst_64895 = (state_65027[(12)]);
var inst_64975__$1 = cljs.core._nth.call(null,inst_64968,inst_64970);
var inst_64976 = cljs.core.async.put_BANG_.call(null,inst_64975__$1,inst_64895,done);
var state_65027__$1 = (function (){var statearr_65033 = state_65027;
(statearr_65033[(9)] = inst_64975__$1);

return statearr_65033;
})();
if(cljs.core.truth_(inst_64976)){
var statearr_65034_65119 = state_65027__$1;
(statearr_65034_65119[(1)] = (30));

} else {
var statearr_65035_65120 = state_65027__$1;
(statearr_65035_65120[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (1))){
var state_65027__$1 = state_65027;
var statearr_65036_65121 = state_65027__$1;
(statearr_65036_65121[(2)] = null);

(statearr_65036_65121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (24))){
var inst_64926 = (state_65027[(7)]);
var inst_64945 = (state_65027[(2)]);
var inst_64946 = cljs.core.next.call(null,inst_64926);
var inst_64904 = inst_64946;
var inst_64905 = null;
var inst_64906 = (0);
var inst_64907 = (0);
var state_65027__$1 = (function (){var statearr_65037 = state_65027;
(statearr_65037[(13)] = inst_64905);

(statearr_65037[(14)] = inst_64906);

(statearr_65037[(15)] = inst_64907);

(statearr_65037[(16)] = inst_64945);

(statearr_65037[(17)] = inst_64904);

return statearr_65037;
})();
var statearr_65038_65122 = state_65027__$1;
(statearr_65038_65122[(2)] = null);

(statearr_65038_65122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (39))){
var state_65027__$1 = state_65027;
var statearr_65042_65123 = state_65027__$1;
(statearr_65042_65123[(2)] = null);

(statearr_65042_65123[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (4))){
var inst_64895 = (state_65027[(12)]);
var inst_64895__$1 = (state_65027[(2)]);
var inst_64896 = (inst_64895__$1 == null);
var state_65027__$1 = (function (){var statearr_65043 = state_65027;
(statearr_65043[(12)] = inst_64895__$1);

return statearr_65043;
})();
if(cljs.core.truth_(inst_64896)){
var statearr_65044_65124 = state_65027__$1;
(statearr_65044_65124[(1)] = (5));

} else {
var statearr_65045_65125 = state_65027__$1;
(statearr_65045_65125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (15))){
var inst_64905 = (state_65027[(13)]);
var inst_64906 = (state_65027[(14)]);
var inst_64907 = (state_65027[(15)]);
var inst_64904 = (state_65027[(17)]);
var inst_64922 = (state_65027[(2)]);
var inst_64923 = (inst_64907 + (1));
var tmp65039 = inst_64905;
var tmp65040 = inst_64906;
var tmp65041 = inst_64904;
var inst_64904__$1 = tmp65041;
var inst_64905__$1 = tmp65039;
var inst_64906__$1 = tmp65040;
var inst_64907__$1 = inst_64923;
var state_65027__$1 = (function (){var statearr_65046 = state_65027;
(statearr_65046[(13)] = inst_64905__$1);

(statearr_65046[(14)] = inst_64906__$1);

(statearr_65046[(15)] = inst_64907__$1);

(statearr_65046[(18)] = inst_64922);

(statearr_65046[(17)] = inst_64904__$1);

return statearr_65046;
})();
var statearr_65047_65126 = state_65027__$1;
(statearr_65047_65126[(2)] = null);

(statearr_65047_65126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (21))){
var inst_64949 = (state_65027[(2)]);
var state_65027__$1 = state_65027;
var statearr_65051_65127 = state_65027__$1;
(statearr_65051_65127[(2)] = inst_64949);

(statearr_65051_65127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (31))){
var inst_64975 = (state_65027[(9)]);
var inst_64979 = done.call(null,null);
var inst_64980 = cljs.core.async.untap_STAR_.call(null,m,inst_64975);
var state_65027__$1 = (function (){var statearr_65052 = state_65027;
(statearr_65052[(19)] = inst_64979);

return statearr_65052;
})();
var statearr_65053_65128 = state_65027__$1;
(statearr_65053_65128[(2)] = inst_64980);

(statearr_65053_65128[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (32))){
var inst_64970 = (state_65027[(10)]);
var inst_64968 = (state_65027[(11)]);
var inst_64967 = (state_65027[(20)]);
var inst_64969 = (state_65027[(21)]);
var inst_64982 = (state_65027[(2)]);
var inst_64983 = (inst_64970 + (1));
var tmp65048 = inst_64968;
var tmp65049 = inst_64967;
var tmp65050 = inst_64969;
var inst_64967__$1 = tmp65049;
var inst_64968__$1 = tmp65048;
var inst_64969__$1 = tmp65050;
var inst_64970__$1 = inst_64983;
var state_65027__$1 = (function (){var statearr_65054 = state_65027;
(statearr_65054[(10)] = inst_64970__$1);

(statearr_65054[(11)] = inst_64968__$1);

(statearr_65054[(20)] = inst_64967__$1);

(statearr_65054[(21)] = inst_64969__$1);

(statearr_65054[(22)] = inst_64982);

return statearr_65054;
})();
var statearr_65055_65129 = state_65027__$1;
(statearr_65055_65129[(2)] = null);

(statearr_65055_65129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (40))){
var inst_64995 = (state_65027[(23)]);
var inst_64999 = done.call(null,null);
var inst_65000 = cljs.core.async.untap_STAR_.call(null,m,inst_64995);
var state_65027__$1 = (function (){var statearr_65056 = state_65027;
(statearr_65056[(24)] = inst_64999);

return statearr_65056;
})();
var statearr_65057_65130 = state_65027__$1;
(statearr_65057_65130[(2)] = inst_65000);

(statearr_65057_65130[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (33))){
var inst_64986 = (state_65027[(25)]);
var inst_64988 = cljs.core.chunked_seq_QMARK_.call(null,inst_64986);
var state_65027__$1 = state_65027;
if(inst_64988){
var statearr_65058_65131 = state_65027__$1;
(statearr_65058_65131[(1)] = (36));

} else {
var statearr_65059_65132 = state_65027__$1;
(statearr_65059_65132[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (13))){
var inst_64916 = (state_65027[(26)]);
var inst_64919 = cljs.core.async.close_BANG_.call(null,inst_64916);
var state_65027__$1 = state_65027;
var statearr_65060_65133 = state_65027__$1;
(statearr_65060_65133[(2)] = inst_64919);

(statearr_65060_65133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (22))){
var inst_64939 = (state_65027[(8)]);
var inst_64942 = cljs.core.async.close_BANG_.call(null,inst_64939);
var state_65027__$1 = state_65027;
var statearr_65061_65134 = state_65027__$1;
(statearr_65061_65134[(2)] = inst_64942);

(statearr_65061_65134[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (36))){
var inst_64986 = (state_65027[(25)]);
var inst_64990 = cljs.core.chunk_first.call(null,inst_64986);
var inst_64991 = cljs.core.chunk_rest.call(null,inst_64986);
var inst_64992 = cljs.core.count.call(null,inst_64990);
var inst_64967 = inst_64991;
var inst_64968 = inst_64990;
var inst_64969 = inst_64992;
var inst_64970 = (0);
var state_65027__$1 = (function (){var statearr_65062 = state_65027;
(statearr_65062[(10)] = inst_64970);

(statearr_65062[(11)] = inst_64968);

(statearr_65062[(20)] = inst_64967);

(statearr_65062[(21)] = inst_64969);

return statearr_65062;
})();
var statearr_65063_65135 = state_65027__$1;
(statearr_65063_65135[(2)] = null);

(statearr_65063_65135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (41))){
var inst_64986 = (state_65027[(25)]);
var inst_65002 = (state_65027[(2)]);
var inst_65003 = cljs.core.next.call(null,inst_64986);
var inst_64967 = inst_65003;
var inst_64968 = null;
var inst_64969 = (0);
var inst_64970 = (0);
var state_65027__$1 = (function (){var statearr_65064 = state_65027;
(statearr_65064[(10)] = inst_64970);

(statearr_65064[(11)] = inst_64968);

(statearr_65064[(27)] = inst_65002);

(statearr_65064[(20)] = inst_64967);

(statearr_65064[(21)] = inst_64969);

return statearr_65064;
})();
var statearr_65065_65136 = state_65027__$1;
(statearr_65065_65136[(2)] = null);

(statearr_65065_65136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (43))){
var state_65027__$1 = state_65027;
var statearr_65066_65137 = state_65027__$1;
(statearr_65066_65137[(2)] = null);

(statearr_65066_65137[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (29))){
var inst_65011 = (state_65027[(2)]);
var state_65027__$1 = state_65027;
var statearr_65067_65138 = state_65027__$1;
(statearr_65067_65138[(2)] = inst_65011);

(statearr_65067_65138[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (44))){
var inst_65020 = (state_65027[(2)]);
var state_65027__$1 = (function (){var statearr_65068 = state_65027;
(statearr_65068[(28)] = inst_65020);

return statearr_65068;
})();
var statearr_65069_65139 = state_65027__$1;
(statearr_65069_65139[(2)] = null);

(statearr_65069_65139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (6))){
var inst_64959 = (state_65027[(29)]);
var inst_64958 = cljs.core.deref.call(null,cs);
var inst_64959__$1 = cljs.core.keys.call(null,inst_64958);
var inst_64960 = cljs.core.count.call(null,inst_64959__$1);
var inst_64961 = cljs.core.reset_BANG_.call(null,dctr,inst_64960);
var inst_64966 = cljs.core.seq.call(null,inst_64959__$1);
var inst_64967 = inst_64966;
var inst_64968 = null;
var inst_64969 = (0);
var inst_64970 = (0);
var state_65027__$1 = (function (){var statearr_65070 = state_65027;
(statearr_65070[(10)] = inst_64970);

(statearr_65070[(29)] = inst_64959__$1);

(statearr_65070[(11)] = inst_64968);

(statearr_65070[(30)] = inst_64961);

(statearr_65070[(20)] = inst_64967);

(statearr_65070[(21)] = inst_64969);

return statearr_65070;
})();
var statearr_65071_65140 = state_65027__$1;
(statearr_65071_65140[(2)] = null);

(statearr_65071_65140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (28))){
var inst_64986 = (state_65027[(25)]);
var inst_64967 = (state_65027[(20)]);
var inst_64986__$1 = cljs.core.seq.call(null,inst_64967);
var state_65027__$1 = (function (){var statearr_65072 = state_65027;
(statearr_65072[(25)] = inst_64986__$1);

return statearr_65072;
})();
if(inst_64986__$1){
var statearr_65073_65141 = state_65027__$1;
(statearr_65073_65141[(1)] = (33));

} else {
var statearr_65074_65142 = state_65027__$1;
(statearr_65074_65142[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (25))){
var inst_64970 = (state_65027[(10)]);
var inst_64969 = (state_65027[(21)]);
var inst_64972 = (inst_64970 < inst_64969);
var inst_64973 = inst_64972;
var state_65027__$1 = state_65027;
if(cljs.core.truth_(inst_64973)){
var statearr_65075_65143 = state_65027__$1;
(statearr_65075_65143[(1)] = (27));

} else {
var statearr_65076_65144 = state_65027__$1;
(statearr_65076_65144[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (34))){
var state_65027__$1 = state_65027;
var statearr_65077_65145 = state_65027__$1;
(statearr_65077_65145[(2)] = null);

(statearr_65077_65145[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (17))){
var state_65027__$1 = state_65027;
var statearr_65078_65146 = state_65027__$1;
(statearr_65078_65146[(2)] = null);

(statearr_65078_65146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (3))){
var inst_65025 = (state_65027[(2)]);
var state_65027__$1 = state_65027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65027__$1,inst_65025);
} else {
if((state_val_65028 === (12))){
var inst_64954 = (state_65027[(2)]);
var state_65027__$1 = state_65027;
var statearr_65079_65147 = state_65027__$1;
(statearr_65079_65147[(2)] = inst_64954);

(statearr_65079_65147[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (2))){
var state_65027__$1 = state_65027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65027__$1,(4),ch);
} else {
if((state_val_65028 === (23))){
var state_65027__$1 = state_65027;
var statearr_65080_65148 = state_65027__$1;
(statearr_65080_65148[(2)] = null);

(statearr_65080_65148[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (35))){
var inst_65009 = (state_65027[(2)]);
var state_65027__$1 = state_65027;
var statearr_65081_65149 = state_65027__$1;
(statearr_65081_65149[(2)] = inst_65009);

(statearr_65081_65149[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (19))){
var inst_64926 = (state_65027[(7)]);
var inst_64930 = cljs.core.chunk_first.call(null,inst_64926);
var inst_64931 = cljs.core.chunk_rest.call(null,inst_64926);
var inst_64932 = cljs.core.count.call(null,inst_64930);
var inst_64904 = inst_64931;
var inst_64905 = inst_64930;
var inst_64906 = inst_64932;
var inst_64907 = (0);
var state_65027__$1 = (function (){var statearr_65082 = state_65027;
(statearr_65082[(13)] = inst_64905);

(statearr_65082[(14)] = inst_64906);

(statearr_65082[(15)] = inst_64907);

(statearr_65082[(17)] = inst_64904);

return statearr_65082;
})();
var statearr_65083_65150 = state_65027__$1;
(statearr_65083_65150[(2)] = null);

(statearr_65083_65150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (11))){
var inst_64926 = (state_65027[(7)]);
var inst_64904 = (state_65027[(17)]);
var inst_64926__$1 = cljs.core.seq.call(null,inst_64904);
var state_65027__$1 = (function (){var statearr_65084 = state_65027;
(statearr_65084[(7)] = inst_64926__$1);

return statearr_65084;
})();
if(inst_64926__$1){
var statearr_65085_65151 = state_65027__$1;
(statearr_65085_65151[(1)] = (16));

} else {
var statearr_65086_65152 = state_65027__$1;
(statearr_65086_65152[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (9))){
var inst_64956 = (state_65027[(2)]);
var state_65027__$1 = state_65027;
var statearr_65087_65153 = state_65027__$1;
(statearr_65087_65153[(2)] = inst_64956);

(statearr_65087_65153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (5))){
var inst_64902 = cljs.core.deref.call(null,cs);
var inst_64903 = cljs.core.seq.call(null,inst_64902);
var inst_64904 = inst_64903;
var inst_64905 = null;
var inst_64906 = (0);
var inst_64907 = (0);
var state_65027__$1 = (function (){var statearr_65088 = state_65027;
(statearr_65088[(13)] = inst_64905);

(statearr_65088[(14)] = inst_64906);

(statearr_65088[(15)] = inst_64907);

(statearr_65088[(17)] = inst_64904);

return statearr_65088;
})();
var statearr_65089_65154 = state_65027__$1;
(statearr_65089_65154[(2)] = null);

(statearr_65089_65154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (14))){
var state_65027__$1 = state_65027;
var statearr_65090_65155 = state_65027__$1;
(statearr_65090_65155[(2)] = null);

(statearr_65090_65155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (45))){
var inst_65017 = (state_65027[(2)]);
var state_65027__$1 = state_65027;
var statearr_65091_65156 = state_65027__$1;
(statearr_65091_65156[(2)] = inst_65017);

(statearr_65091_65156[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (26))){
var inst_64959 = (state_65027[(29)]);
var inst_65013 = (state_65027[(2)]);
var inst_65014 = cljs.core.seq.call(null,inst_64959);
var state_65027__$1 = (function (){var statearr_65092 = state_65027;
(statearr_65092[(31)] = inst_65013);

return statearr_65092;
})();
if(inst_65014){
var statearr_65093_65157 = state_65027__$1;
(statearr_65093_65157[(1)] = (42));

} else {
var statearr_65094_65158 = state_65027__$1;
(statearr_65094_65158[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (16))){
var inst_64926 = (state_65027[(7)]);
var inst_64928 = cljs.core.chunked_seq_QMARK_.call(null,inst_64926);
var state_65027__$1 = state_65027;
if(inst_64928){
var statearr_65095_65159 = state_65027__$1;
(statearr_65095_65159[(1)] = (19));

} else {
var statearr_65096_65160 = state_65027__$1;
(statearr_65096_65160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (38))){
var inst_65006 = (state_65027[(2)]);
var state_65027__$1 = state_65027;
var statearr_65097_65161 = state_65027__$1;
(statearr_65097_65161[(2)] = inst_65006);

(statearr_65097_65161[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (30))){
var state_65027__$1 = state_65027;
var statearr_65098_65162 = state_65027__$1;
(statearr_65098_65162[(2)] = null);

(statearr_65098_65162[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (10))){
var inst_64905 = (state_65027[(13)]);
var inst_64907 = (state_65027[(15)]);
var inst_64915 = cljs.core._nth.call(null,inst_64905,inst_64907);
var inst_64916 = cljs.core.nth.call(null,inst_64915,(0),null);
var inst_64917 = cljs.core.nth.call(null,inst_64915,(1),null);
var state_65027__$1 = (function (){var statearr_65099 = state_65027;
(statearr_65099[(26)] = inst_64916);

return statearr_65099;
})();
if(cljs.core.truth_(inst_64917)){
var statearr_65100_65163 = state_65027__$1;
(statearr_65100_65163[(1)] = (13));

} else {
var statearr_65101_65164 = state_65027__$1;
(statearr_65101_65164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (18))){
var inst_64952 = (state_65027[(2)]);
var state_65027__$1 = state_65027;
var statearr_65102_65165 = state_65027__$1;
(statearr_65102_65165[(2)] = inst_64952);

(statearr_65102_65165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (42))){
var state_65027__$1 = state_65027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65027__$1,(45),dchan);
} else {
if((state_val_65028 === (37))){
var inst_64995 = (state_65027[(23)]);
var inst_64986 = (state_65027[(25)]);
var inst_64895 = (state_65027[(12)]);
var inst_64995__$1 = cljs.core.first.call(null,inst_64986);
var inst_64996 = cljs.core.async.put_BANG_.call(null,inst_64995__$1,inst_64895,done);
var state_65027__$1 = (function (){var statearr_65103 = state_65027;
(statearr_65103[(23)] = inst_64995__$1);

return statearr_65103;
})();
if(cljs.core.truth_(inst_64996)){
var statearr_65104_65166 = state_65027__$1;
(statearr_65104_65166[(1)] = (39));

} else {
var statearr_65105_65167 = state_65027__$1;
(statearr_65105_65167[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65028 === (8))){
var inst_64906 = (state_65027[(14)]);
var inst_64907 = (state_65027[(15)]);
var inst_64909 = (inst_64907 < inst_64906);
var inst_64910 = inst_64909;
var state_65027__$1 = state_65027;
if(cljs.core.truth_(inst_64910)){
var statearr_65106_65168 = state_65027__$1;
(statearr_65106_65168[(1)] = (10));

} else {
var statearr_65107_65169 = state_65027__$1;
(statearr_65107_65169[(1)] = (11));

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
});})(c__28009__auto___65115,cs,m,dchan,dctr,done))
;
return ((function (switch__27988__auto__,c__28009__auto___65115,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27989__auto__ = null;
var cljs$core$async$mult_$_state_machine__27989__auto____0 = (function (){
var statearr_65111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65111[(0)] = cljs$core$async$mult_$_state_machine__27989__auto__);

(statearr_65111[(1)] = (1));

return statearr_65111;
});
var cljs$core$async$mult_$_state_machine__27989__auto____1 = (function (state_65027){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_65027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e65112){if((e65112 instanceof Object)){
var ex__27992__auto__ = e65112;
var statearr_65113_65170 = state_65027;
(statearr_65113_65170[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65171 = state_65027;
state_65027 = G__65171;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27989__auto__ = function(state_65027){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27989__auto____1.call(this,state_65027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27989__auto____0;
cljs$core$async$mult_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27989__auto____1;
return cljs$core$async$mult_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___65115,cs,m,dchan,dctr,done))
})();
var state__28011__auto__ = (function (){var statearr_65114 = f__28010__auto__.call(null);
(statearr_65114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___65115);

return statearr_65114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___65115,cs,m,dchan,dctr,done))
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
var args65172 = [];
var len__27054__auto___65175 = arguments.length;
var i__27055__auto___65176 = (0);
while(true){
if((i__27055__auto___65176 < len__27054__auto___65175)){
args65172.push((arguments[i__27055__auto___65176]));

var G__65177 = (i__27055__auto___65176 + (1));
i__27055__auto___65176 = G__65177;
continue;
} else {
}
break;
}

var G__65174 = args65172.length;
switch (G__65174) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65172.length)].join('')));

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
var len__27054__auto___65189 = arguments.length;
var i__27055__auto___65190 = (0);
while(true){
if((i__27055__auto___65190 < len__27054__auto___65189)){
args__27061__auto__.push((arguments[i__27055__auto___65190]));

var G__65191 = (i__27055__auto___65190 + (1));
i__27055__auto___65190 = G__65191;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__65183){
var map__65184 = p__65183;
var map__65184__$1 = ((((!((map__65184 == null)))?((((map__65184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65184):map__65184);
var opts = map__65184__$1;
var statearr_65186_65192 = state;
(statearr_65186_65192[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__65184,map__65184__$1,opts){
return (function (val){
var statearr_65187_65193 = state;
(statearr_65187_65193[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__65184,map__65184__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_65188_65194 = state;
(statearr_65188_65194[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq65179){
var G__65180 = cljs.core.first.call(null,seq65179);
var seq65179__$1 = cljs.core.next.call(null,seq65179);
var G__65181 = cljs.core.first.call(null,seq65179__$1);
var seq65179__$2 = cljs.core.next.call(null,seq65179__$1);
var G__65182 = cljs.core.first.call(null,seq65179__$2);
var seq65179__$3 = cljs.core.next.call(null,seq65179__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__65180,G__65181,G__65182,seq65179__$3);
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
if(typeof cljs.core.async.t_cljs$core$async65360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65360 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta65361){
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
this.meta65361 = meta65361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async65360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_65362,meta65361__$1){
var self__ = this;
var _65362__$1 = this;
return (new cljs.core.async.t_cljs$core$async65360(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta65361__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_65362){
var self__ = this;
var _65362__$1 = this;
return self__.meta65361;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65360.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async65360.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65360.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async65360.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65360.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65360.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65360.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65360.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async65360.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta65361","meta65361",1860135347,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async65360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65360";

cljs.core.async.t_cljs$core$async65360.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async65360");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async65360 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async65360(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta65361){
return (new cljs.core.async.t_cljs$core$async65360(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta65361));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async65360(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28009__auto___65525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___65525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___65525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_65462){
var state_val_65463 = (state_65462[(1)]);
if((state_val_65463 === (7))){
var inst_65378 = (state_65462[(2)]);
var state_65462__$1 = state_65462;
var statearr_65464_65526 = state_65462__$1;
(statearr_65464_65526[(2)] = inst_65378);

(statearr_65464_65526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (20))){
var inst_65390 = (state_65462[(7)]);
var state_65462__$1 = state_65462;
var statearr_65465_65527 = state_65462__$1;
(statearr_65465_65527[(2)] = inst_65390);

(statearr_65465_65527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (27))){
var state_65462__$1 = state_65462;
var statearr_65466_65528 = state_65462__$1;
(statearr_65466_65528[(2)] = null);

(statearr_65466_65528[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (1))){
var inst_65366 = (state_65462[(8)]);
var inst_65366__$1 = calc_state.call(null);
var inst_65368 = (inst_65366__$1 == null);
var inst_65369 = cljs.core.not.call(null,inst_65368);
var state_65462__$1 = (function (){var statearr_65467 = state_65462;
(statearr_65467[(8)] = inst_65366__$1);

return statearr_65467;
})();
if(inst_65369){
var statearr_65468_65529 = state_65462__$1;
(statearr_65468_65529[(1)] = (2));

} else {
var statearr_65469_65530 = state_65462__$1;
(statearr_65469_65530[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (24))){
var inst_65413 = (state_65462[(9)]);
var inst_65422 = (state_65462[(10)]);
var inst_65436 = (state_65462[(11)]);
var inst_65436__$1 = inst_65413.call(null,inst_65422);
var state_65462__$1 = (function (){var statearr_65470 = state_65462;
(statearr_65470[(11)] = inst_65436__$1);

return statearr_65470;
})();
if(cljs.core.truth_(inst_65436__$1)){
var statearr_65471_65531 = state_65462__$1;
(statearr_65471_65531[(1)] = (29));

} else {
var statearr_65472_65532 = state_65462__$1;
(statearr_65472_65532[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (4))){
var inst_65381 = (state_65462[(2)]);
var state_65462__$1 = state_65462;
if(cljs.core.truth_(inst_65381)){
var statearr_65473_65533 = state_65462__$1;
(statearr_65473_65533[(1)] = (8));

} else {
var statearr_65474_65534 = state_65462__$1;
(statearr_65474_65534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (15))){
var inst_65407 = (state_65462[(2)]);
var state_65462__$1 = state_65462;
if(cljs.core.truth_(inst_65407)){
var statearr_65475_65535 = state_65462__$1;
(statearr_65475_65535[(1)] = (19));

} else {
var statearr_65476_65536 = state_65462__$1;
(statearr_65476_65536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (21))){
var inst_65412 = (state_65462[(12)]);
var inst_65412__$1 = (state_65462[(2)]);
var inst_65413 = cljs.core.get.call(null,inst_65412__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_65414 = cljs.core.get.call(null,inst_65412__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_65415 = cljs.core.get.call(null,inst_65412__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_65462__$1 = (function (){var statearr_65477 = state_65462;
(statearr_65477[(12)] = inst_65412__$1);

(statearr_65477[(9)] = inst_65413);

(statearr_65477[(13)] = inst_65414);

return statearr_65477;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_65462__$1,(22),inst_65415);
} else {
if((state_val_65463 === (31))){
var inst_65444 = (state_65462[(2)]);
var state_65462__$1 = state_65462;
if(cljs.core.truth_(inst_65444)){
var statearr_65478_65537 = state_65462__$1;
(statearr_65478_65537[(1)] = (32));

} else {
var statearr_65479_65538 = state_65462__$1;
(statearr_65479_65538[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (32))){
var inst_65421 = (state_65462[(14)]);
var state_65462__$1 = state_65462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65462__$1,(35),out,inst_65421);
} else {
if((state_val_65463 === (33))){
var inst_65412 = (state_65462[(12)]);
var inst_65390 = inst_65412;
var state_65462__$1 = (function (){var statearr_65480 = state_65462;
(statearr_65480[(7)] = inst_65390);

return statearr_65480;
})();
var statearr_65481_65539 = state_65462__$1;
(statearr_65481_65539[(2)] = null);

(statearr_65481_65539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (13))){
var inst_65390 = (state_65462[(7)]);
var inst_65397 = inst_65390.cljs$lang$protocol_mask$partition0$;
var inst_65398 = (inst_65397 & (64));
var inst_65399 = inst_65390.cljs$core$ISeq$;
var inst_65400 = (inst_65398) || (inst_65399);
var state_65462__$1 = state_65462;
if(cljs.core.truth_(inst_65400)){
var statearr_65482_65540 = state_65462__$1;
(statearr_65482_65540[(1)] = (16));

} else {
var statearr_65483_65541 = state_65462__$1;
(statearr_65483_65541[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (22))){
var inst_65421 = (state_65462[(14)]);
var inst_65422 = (state_65462[(10)]);
var inst_65420 = (state_65462[(2)]);
var inst_65421__$1 = cljs.core.nth.call(null,inst_65420,(0),null);
var inst_65422__$1 = cljs.core.nth.call(null,inst_65420,(1),null);
var inst_65423 = (inst_65421__$1 == null);
var inst_65424 = cljs.core._EQ_.call(null,inst_65422__$1,change);
var inst_65425 = (inst_65423) || (inst_65424);
var state_65462__$1 = (function (){var statearr_65484 = state_65462;
(statearr_65484[(14)] = inst_65421__$1);

(statearr_65484[(10)] = inst_65422__$1);

return statearr_65484;
})();
if(cljs.core.truth_(inst_65425)){
var statearr_65485_65542 = state_65462__$1;
(statearr_65485_65542[(1)] = (23));

} else {
var statearr_65486_65543 = state_65462__$1;
(statearr_65486_65543[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (36))){
var inst_65412 = (state_65462[(12)]);
var inst_65390 = inst_65412;
var state_65462__$1 = (function (){var statearr_65487 = state_65462;
(statearr_65487[(7)] = inst_65390);

return statearr_65487;
})();
var statearr_65488_65544 = state_65462__$1;
(statearr_65488_65544[(2)] = null);

(statearr_65488_65544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (29))){
var inst_65436 = (state_65462[(11)]);
var state_65462__$1 = state_65462;
var statearr_65489_65545 = state_65462__$1;
(statearr_65489_65545[(2)] = inst_65436);

(statearr_65489_65545[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (6))){
var state_65462__$1 = state_65462;
var statearr_65490_65546 = state_65462__$1;
(statearr_65490_65546[(2)] = false);

(statearr_65490_65546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (28))){
var inst_65432 = (state_65462[(2)]);
var inst_65433 = calc_state.call(null);
var inst_65390 = inst_65433;
var state_65462__$1 = (function (){var statearr_65491 = state_65462;
(statearr_65491[(15)] = inst_65432);

(statearr_65491[(7)] = inst_65390);

return statearr_65491;
})();
var statearr_65492_65547 = state_65462__$1;
(statearr_65492_65547[(2)] = null);

(statearr_65492_65547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (25))){
var inst_65458 = (state_65462[(2)]);
var state_65462__$1 = state_65462;
var statearr_65493_65548 = state_65462__$1;
(statearr_65493_65548[(2)] = inst_65458);

(statearr_65493_65548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (34))){
var inst_65456 = (state_65462[(2)]);
var state_65462__$1 = state_65462;
var statearr_65494_65549 = state_65462__$1;
(statearr_65494_65549[(2)] = inst_65456);

(statearr_65494_65549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (17))){
var state_65462__$1 = state_65462;
var statearr_65495_65550 = state_65462__$1;
(statearr_65495_65550[(2)] = false);

(statearr_65495_65550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (3))){
var state_65462__$1 = state_65462;
var statearr_65496_65551 = state_65462__$1;
(statearr_65496_65551[(2)] = false);

(statearr_65496_65551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (12))){
var inst_65460 = (state_65462[(2)]);
var state_65462__$1 = state_65462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65462__$1,inst_65460);
} else {
if((state_val_65463 === (2))){
var inst_65366 = (state_65462[(8)]);
var inst_65371 = inst_65366.cljs$lang$protocol_mask$partition0$;
var inst_65372 = (inst_65371 & (64));
var inst_65373 = inst_65366.cljs$core$ISeq$;
var inst_65374 = (inst_65372) || (inst_65373);
var state_65462__$1 = state_65462;
if(cljs.core.truth_(inst_65374)){
var statearr_65497_65552 = state_65462__$1;
(statearr_65497_65552[(1)] = (5));

} else {
var statearr_65498_65553 = state_65462__$1;
(statearr_65498_65553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (23))){
var inst_65421 = (state_65462[(14)]);
var inst_65427 = (inst_65421 == null);
var state_65462__$1 = state_65462;
if(cljs.core.truth_(inst_65427)){
var statearr_65499_65554 = state_65462__$1;
(statearr_65499_65554[(1)] = (26));

} else {
var statearr_65500_65555 = state_65462__$1;
(statearr_65500_65555[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (35))){
var inst_65447 = (state_65462[(2)]);
var state_65462__$1 = state_65462;
if(cljs.core.truth_(inst_65447)){
var statearr_65501_65556 = state_65462__$1;
(statearr_65501_65556[(1)] = (36));

} else {
var statearr_65502_65557 = state_65462__$1;
(statearr_65502_65557[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (19))){
var inst_65390 = (state_65462[(7)]);
var inst_65409 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65390);
var state_65462__$1 = state_65462;
var statearr_65503_65558 = state_65462__$1;
(statearr_65503_65558[(2)] = inst_65409);

(statearr_65503_65558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (11))){
var inst_65390 = (state_65462[(7)]);
var inst_65394 = (inst_65390 == null);
var inst_65395 = cljs.core.not.call(null,inst_65394);
var state_65462__$1 = state_65462;
if(inst_65395){
var statearr_65504_65559 = state_65462__$1;
(statearr_65504_65559[(1)] = (13));

} else {
var statearr_65505_65560 = state_65462__$1;
(statearr_65505_65560[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (9))){
var inst_65366 = (state_65462[(8)]);
var state_65462__$1 = state_65462;
var statearr_65506_65561 = state_65462__$1;
(statearr_65506_65561[(2)] = inst_65366);

(statearr_65506_65561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (5))){
var state_65462__$1 = state_65462;
var statearr_65507_65562 = state_65462__$1;
(statearr_65507_65562[(2)] = true);

(statearr_65507_65562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (14))){
var state_65462__$1 = state_65462;
var statearr_65508_65563 = state_65462__$1;
(statearr_65508_65563[(2)] = false);

(statearr_65508_65563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (26))){
var inst_65422 = (state_65462[(10)]);
var inst_65429 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_65422);
var state_65462__$1 = state_65462;
var statearr_65509_65564 = state_65462__$1;
(statearr_65509_65564[(2)] = inst_65429);

(statearr_65509_65564[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (16))){
var state_65462__$1 = state_65462;
var statearr_65510_65565 = state_65462__$1;
(statearr_65510_65565[(2)] = true);

(statearr_65510_65565[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (38))){
var inst_65452 = (state_65462[(2)]);
var state_65462__$1 = state_65462;
var statearr_65511_65566 = state_65462__$1;
(statearr_65511_65566[(2)] = inst_65452);

(statearr_65511_65566[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (30))){
var inst_65413 = (state_65462[(9)]);
var inst_65414 = (state_65462[(13)]);
var inst_65422 = (state_65462[(10)]);
var inst_65439 = cljs.core.empty_QMARK_.call(null,inst_65413);
var inst_65440 = inst_65414.call(null,inst_65422);
var inst_65441 = cljs.core.not.call(null,inst_65440);
var inst_65442 = (inst_65439) && (inst_65441);
var state_65462__$1 = state_65462;
var statearr_65512_65567 = state_65462__$1;
(statearr_65512_65567[(2)] = inst_65442);

(statearr_65512_65567[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (10))){
var inst_65366 = (state_65462[(8)]);
var inst_65386 = (state_65462[(2)]);
var inst_65387 = cljs.core.get.call(null,inst_65386,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_65388 = cljs.core.get.call(null,inst_65386,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_65389 = cljs.core.get.call(null,inst_65386,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_65390 = inst_65366;
var state_65462__$1 = (function (){var statearr_65513 = state_65462;
(statearr_65513[(16)] = inst_65388);

(statearr_65513[(17)] = inst_65389);

(statearr_65513[(7)] = inst_65390);

(statearr_65513[(18)] = inst_65387);

return statearr_65513;
})();
var statearr_65514_65568 = state_65462__$1;
(statearr_65514_65568[(2)] = null);

(statearr_65514_65568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (18))){
var inst_65404 = (state_65462[(2)]);
var state_65462__$1 = state_65462;
var statearr_65515_65569 = state_65462__$1;
(statearr_65515_65569[(2)] = inst_65404);

(statearr_65515_65569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (37))){
var state_65462__$1 = state_65462;
var statearr_65516_65570 = state_65462__$1;
(statearr_65516_65570[(2)] = null);

(statearr_65516_65570[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65463 === (8))){
var inst_65366 = (state_65462[(8)]);
var inst_65383 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65366);
var state_65462__$1 = state_65462;
var statearr_65517_65571 = state_65462__$1;
(statearr_65517_65571[(2)] = inst_65383);

(statearr_65517_65571[(1)] = (10));


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
});})(c__28009__auto___65525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27988__auto__,c__28009__auto___65525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27989__auto__ = null;
var cljs$core$async$mix_$_state_machine__27989__auto____0 = (function (){
var statearr_65521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65521[(0)] = cljs$core$async$mix_$_state_machine__27989__auto__);

(statearr_65521[(1)] = (1));

return statearr_65521;
});
var cljs$core$async$mix_$_state_machine__27989__auto____1 = (function (state_65462){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_65462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e65522){if((e65522 instanceof Object)){
var ex__27992__auto__ = e65522;
var statearr_65523_65572 = state_65462;
(statearr_65523_65572[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65573 = state_65462;
state_65462 = G__65573;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27989__auto__ = function(state_65462){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27989__auto____1.call(this,state_65462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27989__auto____0;
cljs$core$async$mix_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27989__auto____1;
return cljs$core$async$mix_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___65525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28011__auto__ = (function (){var statearr_65524 = f__28010__auto__.call(null);
(statearr_65524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___65525);

return statearr_65524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___65525,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args65574 = [];
var len__27054__auto___65577 = arguments.length;
var i__27055__auto___65578 = (0);
while(true){
if((i__27055__auto___65578 < len__27054__auto___65577)){
args65574.push((arguments[i__27055__auto___65578]));

var G__65579 = (i__27055__auto___65578 + (1));
i__27055__auto___65578 = G__65579;
continue;
} else {
}
break;
}

var G__65576 = args65574.length;
switch (G__65576) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65574.length)].join('')));

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
var args65582 = [];
var len__27054__auto___65707 = arguments.length;
var i__27055__auto___65708 = (0);
while(true){
if((i__27055__auto___65708 < len__27054__auto___65707)){
args65582.push((arguments[i__27055__auto___65708]));

var G__65709 = (i__27055__auto___65708 + (1));
i__27055__auto___65708 = G__65709;
continue;
} else {
}
break;
}

var G__65584 = args65582.length;
switch (G__65584) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65582.length)].join('')));

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
return (function (p1__65581_SHARP_){
if(cljs.core.truth_(p1__65581_SHARP_.call(null,topic))){
return p1__65581_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__65581_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async65585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65585 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta65586){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta65586 = meta65586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async65585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_65587,meta65586__$1){
var self__ = this;
var _65587__$1 = this;
return (new cljs.core.async.t_cljs$core$async65585(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta65586__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async65585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_65587){
var self__ = this;
var _65587__$1 = this;
return self__.meta65586;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async65585.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async65585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async65585.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async65585.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async65585.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async65585.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async65585.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async65585.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta65586","meta65586",1721550633,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async65585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65585";

cljs.core.async.t_cljs$core$async65585.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async65585");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async65585 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async65585(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta65586){
return (new cljs.core.async.t_cljs$core$async65585(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta65586));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async65585(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28009__auto___65711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___65711,mults,ensure_mult,p){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___65711,mults,ensure_mult,p){
return (function (state_65659){
var state_val_65660 = (state_65659[(1)]);
if((state_val_65660 === (7))){
var inst_65655 = (state_65659[(2)]);
var state_65659__$1 = state_65659;
var statearr_65661_65712 = state_65659__$1;
(statearr_65661_65712[(2)] = inst_65655);

(statearr_65661_65712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (20))){
var state_65659__$1 = state_65659;
var statearr_65662_65713 = state_65659__$1;
(statearr_65662_65713[(2)] = null);

(statearr_65662_65713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (1))){
var state_65659__$1 = state_65659;
var statearr_65663_65714 = state_65659__$1;
(statearr_65663_65714[(2)] = null);

(statearr_65663_65714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (24))){
var inst_65638 = (state_65659[(7)]);
var inst_65647 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_65638);
var state_65659__$1 = state_65659;
var statearr_65664_65715 = state_65659__$1;
(statearr_65664_65715[(2)] = inst_65647);

(statearr_65664_65715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (4))){
var inst_65590 = (state_65659[(8)]);
var inst_65590__$1 = (state_65659[(2)]);
var inst_65591 = (inst_65590__$1 == null);
var state_65659__$1 = (function (){var statearr_65665 = state_65659;
(statearr_65665[(8)] = inst_65590__$1);

return statearr_65665;
})();
if(cljs.core.truth_(inst_65591)){
var statearr_65666_65716 = state_65659__$1;
(statearr_65666_65716[(1)] = (5));

} else {
var statearr_65667_65717 = state_65659__$1;
(statearr_65667_65717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (15))){
var inst_65632 = (state_65659[(2)]);
var state_65659__$1 = state_65659;
var statearr_65668_65718 = state_65659__$1;
(statearr_65668_65718[(2)] = inst_65632);

(statearr_65668_65718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (21))){
var inst_65652 = (state_65659[(2)]);
var state_65659__$1 = (function (){var statearr_65669 = state_65659;
(statearr_65669[(9)] = inst_65652);

return statearr_65669;
})();
var statearr_65670_65719 = state_65659__$1;
(statearr_65670_65719[(2)] = null);

(statearr_65670_65719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (13))){
var inst_65614 = (state_65659[(10)]);
var inst_65616 = cljs.core.chunked_seq_QMARK_.call(null,inst_65614);
var state_65659__$1 = state_65659;
if(inst_65616){
var statearr_65671_65720 = state_65659__$1;
(statearr_65671_65720[(1)] = (16));

} else {
var statearr_65672_65721 = state_65659__$1;
(statearr_65672_65721[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (22))){
var inst_65644 = (state_65659[(2)]);
var state_65659__$1 = state_65659;
if(cljs.core.truth_(inst_65644)){
var statearr_65673_65722 = state_65659__$1;
(statearr_65673_65722[(1)] = (23));

} else {
var statearr_65674_65723 = state_65659__$1;
(statearr_65674_65723[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (6))){
var inst_65590 = (state_65659[(8)]);
var inst_65640 = (state_65659[(11)]);
var inst_65638 = (state_65659[(7)]);
var inst_65638__$1 = topic_fn.call(null,inst_65590);
var inst_65639 = cljs.core.deref.call(null,mults);
var inst_65640__$1 = cljs.core.get.call(null,inst_65639,inst_65638__$1);
var state_65659__$1 = (function (){var statearr_65675 = state_65659;
(statearr_65675[(11)] = inst_65640__$1);

(statearr_65675[(7)] = inst_65638__$1);

return statearr_65675;
})();
if(cljs.core.truth_(inst_65640__$1)){
var statearr_65676_65724 = state_65659__$1;
(statearr_65676_65724[(1)] = (19));

} else {
var statearr_65677_65725 = state_65659__$1;
(statearr_65677_65725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (25))){
var inst_65649 = (state_65659[(2)]);
var state_65659__$1 = state_65659;
var statearr_65678_65726 = state_65659__$1;
(statearr_65678_65726[(2)] = inst_65649);

(statearr_65678_65726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (17))){
var inst_65614 = (state_65659[(10)]);
var inst_65623 = cljs.core.first.call(null,inst_65614);
var inst_65624 = cljs.core.async.muxch_STAR_.call(null,inst_65623);
var inst_65625 = cljs.core.async.close_BANG_.call(null,inst_65624);
var inst_65626 = cljs.core.next.call(null,inst_65614);
var inst_65600 = inst_65626;
var inst_65601 = null;
var inst_65602 = (0);
var inst_65603 = (0);
var state_65659__$1 = (function (){var statearr_65679 = state_65659;
(statearr_65679[(12)] = inst_65625);

(statearr_65679[(13)] = inst_65603);

(statearr_65679[(14)] = inst_65601);

(statearr_65679[(15)] = inst_65602);

(statearr_65679[(16)] = inst_65600);

return statearr_65679;
})();
var statearr_65680_65727 = state_65659__$1;
(statearr_65680_65727[(2)] = null);

(statearr_65680_65727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (3))){
var inst_65657 = (state_65659[(2)]);
var state_65659__$1 = state_65659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65659__$1,inst_65657);
} else {
if((state_val_65660 === (12))){
var inst_65634 = (state_65659[(2)]);
var state_65659__$1 = state_65659;
var statearr_65681_65728 = state_65659__$1;
(statearr_65681_65728[(2)] = inst_65634);

(statearr_65681_65728[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (2))){
var state_65659__$1 = state_65659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65659__$1,(4),ch);
} else {
if((state_val_65660 === (23))){
var state_65659__$1 = state_65659;
var statearr_65682_65729 = state_65659__$1;
(statearr_65682_65729[(2)] = null);

(statearr_65682_65729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (19))){
var inst_65590 = (state_65659[(8)]);
var inst_65640 = (state_65659[(11)]);
var inst_65642 = cljs.core.async.muxch_STAR_.call(null,inst_65640);
var state_65659__$1 = state_65659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65659__$1,(22),inst_65642,inst_65590);
} else {
if((state_val_65660 === (11))){
var inst_65614 = (state_65659[(10)]);
var inst_65600 = (state_65659[(16)]);
var inst_65614__$1 = cljs.core.seq.call(null,inst_65600);
var state_65659__$1 = (function (){var statearr_65683 = state_65659;
(statearr_65683[(10)] = inst_65614__$1);

return statearr_65683;
})();
if(inst_65614__$1){
var statearr_65684_65730 = state_65659__$1;
(statearr_65684_65730[(1)] = (13));

} else {
var statearr_65685_65731 = state_65659__$1;
(statearr_65685_65731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (9))){
var inst_65636 = (state_65659[(2)]);
var state_65659__$1 = state_65659;
var statearr_65686_65732 = state_65659__$1;
(statearr_65686_65732[(2)] = inst_65636);

(statearr_65686_65732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (5))){
var inst_65597 = cljs.core.deref.call(null,mults);
var inst_65598 = cljs.core.vals.call(null,inst_65597);
var inst_65599 = cljs.core.seq.call(null,inst_65598);
var inst_65600 = inst_65599;
var inst_65601 = null;
var inst_65602 = (0);
var inst_65603 = (0);
var state_65659__$1 = (function (){var statearr_65687 = state_65659;
(statearr_65687[(13)] = inst_65603);

(statearr_65687[(14)] = inst_65601);

(statearr_65687[(15)] = inst_65602);

(statearr_65687[(16)] = inst_65600);

return statearr_65687;
})();
var statearr_65688_65733 = state_65659__$1;
(statearr_65688_65733[(2)] = null);

(statearr_65688_65733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (14))){
var state_65659__$1 = state_65659;
var statearr_65692_65734 = state_65659__$1;
(statearr_65692_65734[(2)] = null);

(statearr_65692_65734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (16))){
var inst_65614 = (state_65659[(10)]);
var inst_65618 = cljs.core.chunk_first.call(null,inst_65614);
var inst_65619 = cljs.core.chunk_rest.call(null,inst_65614);
var inst_65620 = cljs.core.count.call(null,inst_65618);
var inst_65600 = inst_65619;
var inst_65601 = inst_65618;
var inst_65602 = inst_65620;
var inst_65603 = (0);
var state_65659__$1 = (function (){var statearr_65693 = state_65659;
(statearr_65693[(13)] = inst_65603);

(statearr_65693[(14)] = inst_65601);

(statearr_65693[(15)] = inst_65602);

(statearr_65693[(16)] = inst_65600);

return statearr_65693;
})();
var statearr_65694_65735 = state_65659__$1;
(statearr_65694_65735[(2)] = null);

(statearr_65694_65735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (10))){
var inst_65603 = (state_65659[(13)]);
var inst_65601 = (state_65659[(14)]);
var inst_65602 = (state_65659[(15)]);
var inst_65600 = (state_65659[(16)]);
var inst_65608 = cljs.core._nth.call(null,inst_65601,inst_65603);
var inst_65609 = cljs.core.async.muxch_STAR_.call(null,inst_65608);
var inst_65610 = cljs.core.async.close_BANG_.call(null,inst_65609);
var inst_65611 = (inst_65603 + (1));
var tmp65689 = inst_65601;
var tmp65690 = inst_65602;
var tmp65691 = inst_65600;
var inst_65600__$1 = tmp65691;
var inst_65601__$1 = tmp65689;
var inst_65602__$1 = tmp65690;
var inst_65603__$1 = inst_65611;
var state_65659__$1 = (function (){var statearr_65695 = state_65659;
(statearr_65695[(13)] = inst_65603__$1);

(statearr_65695[(14)] = inst_65601__$1);

(statearr_65695[(17)] = inst_65610);

(statearr_65695[(15)] = inst_65602__$1);

(statearr_65695[(16)] = inst_65600__$1);

return statearr_65695;
})();
var statearr_65696_65736 = state_65659__$1;
(statearr_65696_65736[(2)] = null);

(statearr_65696_65736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (18))){
var inst_65629 = (state_65659[(2)]);
var state_65659__$1 = state_65659;
var statearr_65697_65737 = state_65659__$1;
(statearr_65697_65737[(2)] = inst_65629);

(statearr_65697_65737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65660 === (8))){
var inst_65603 = (state_65659[(13)]);
var inst_65602 = (state_65659[(15)]);
var inst_65605 = (inst_65603 < inst_65602);
var inst_65606 = inst_65605;
var state_65659__$1 = state_65659;
if(cljs.core.truth_(inst_65606)){
var statearr_65698_65738 = state_65659__$1;
(statearr_65698_65738[(1)] = (10));

} else {
var statearr_65699_65739 = state_65659__$1;
(statearr_65699_65739[(1)] = (11));

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
});})(c__28009__auto___65711,mults,ensure_mult,p))
;
return ((function (switch__27988__auto__,c__28009__auto___65711,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_65703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65703[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_65703[(1)] = (1));

return statearr_65703;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_65659){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_65659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e65704){if((e65704 instanceof Object)){
var ex__27992__auto__ = e65704;
var statearr_65705_65740 = state_65659;
(statearr_65705_65740[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65741 = state_65659;
state_65659 = G__65741;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_65659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_65659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___65711,mults,ensure_mult,p))
})();
var state__28011__auto__ = (function (){var statearr_65706 = f__28010__auto__.call(null);
(statearr_65706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___65711);

return statearr_65706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___65711,mults,ensure_mult,p))
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
var args65742 = [];
var len__27054__auto___65745 = arguments.length;
var i__27055__auto___65746 = (0);
while(true){
if((i__27055__auto___65746 < len__27054__auto___65745)){
args65742.push((arguments[i__27055__auto___65746]));

var G__65747 = (i__27055__auto___65746 + (1));
i__27055__auto___65746 = G__65747;
continue;
} else {
}
break;
}

var G__65744 = args65742.length;
switch (G__65744) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65742.length)].join('')));

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
var args65749 = [];
var len__27054__auto___65752 = arguments.length;
var i__27055__auto___65753 = (0);
while(true){
if((i__27055__auto___65753 < len__27054__auto___65752)){
args65749.push((arguments[i__27055__auto___65753]));

var G__65754 = (i__27055__auto___65753 + (1));
i__27055__auto___65753 = G__65754;
continue;
} else {
}
break;
}

var G__65751 = args65749.length;
switch (G__65751) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65749.length)].join('')));

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
var args65756 = [];
var len__27054__auto___65827 = arguments.length;
var i__27055__auto___65828 = (0);
while(true){
if((i__27055__auto___65828 < len__27054__auto___65827)){
args65756.push((arguments[i__27055__auto___65828]));

var G__65829 = (i__27055__auto___65828 + (1));
i__27055__auto___65828 = G__65829;
continue;
} else {
}
break;
}

var G__65758 = args65756.length;
switch (G__65758) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65756.length)].join('')));

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
var c__28009__auto___65831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___65831,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___65831,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_65797){
var state_val_65798 = (state_65797[(1)]);
if((state_val_65798 === (7))){
var state_65797__$1 = state_65797;
var statearr_65799_65832 = state_65797__$1;
(statearr_65799_65832[(2)] = null);

(statearr_65799_65832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65798 === (1))){
var state_65797__$1 = state_65797;
var statearr_65800_65833 = state_65797__$1;
(statearr_65800_65833[(2)] = null);

(statearr_65800_65833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65798 === (4))){
var inst_65761 = (state_65797[(7)]);
var inst_65763 = (inst_65761 < cnt);
var state_65797__$1 = state_65797;
if(cljs.core.truth_(inst_65763)){
var statearr_65801_65834 = state_65797__$1;
(statearr_65801_65834[(1)] = (6));

} else {
var statearr_65802_65835 = state_65797__$1;
(statearr_65802_65835[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65798 === (15))){
var inst_65793 = (state_65797[(2)]);
var state_65797__$1 = state_65797;
var statearr_65803_65836 = state_65797__$1;
(statearr_65803_65836[(2)] = inst_65793);

(statearr_65803_65836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65798 === (13))){
var inst_65786 = cljs.core.async.close_BANG_.call(null,out);
var state_65797__$1 = state_65797;
var statearr_65804_65837 = state_65797__$1;
(statearr_65804_65837[(2)] = inst_65786);

(statearr_65804_65837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65798 === (6))){
var state_65797__$1 = state_65797;
var statearr_65805_65838 = state_65797__$1;
(statearr_65805_65838[(2)] = null);

(statearr_65805_65838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65798 === (3))){
var inst_65795 = (state_65797[(2)]);
var state_65797__$1 = state_65797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65797__$1,inst_65795);
} else {
if((state_val_65798 === (12))){
var inst_65783 = (state_65797[(8)]);
var inst_65783__$1 = (state_65797[(2)]);
var inst_65784 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_65783__$1);
var state_65797__$1 = (function (){var statearr_65806 = state_65797;
(statearr_65806[(8)] = inst_65783__$1);

return statearr_65806;
})();
if(cljs.core.truth_(inst_65784)){
var statearr_65807_65839 = state_65797__$1;
(statearr_65807_65839[(1)] = (13));

} else {
var statearr_65808_65840 = state_65797__$1;
(statearr_65808_65840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65798 === (2))){
var inst_65760 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_65761 = (0);
var state_65797__$1 = (function (){var statearr_65809 = state_65797;
(statearr_65809[(9)] = inst_65760);

(statearr_65809[(7)] = inst_65761);

return statearr_65809;
})();
var statearr_65810_65841 = state_65797__$1;
(statearr_65810_65841[(2)] = null);

(statearr_65810_65841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65798 === (11))){
var inst_65761 = (state_65797[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_65797,(10),Object,null,(9));
var inst_65770 = chs__$1.call(null,inst_65761);
var inst_65771 = done.call(null,inst_65761);
var inst_65772 = cljs.core.async.take_BANG_.call(null,inst_65770,inst_65771);
var state_65797__$1 = state_65797;
var statearr_65811_65842 = state_65797__$1;
(statearr_65811_65842[(2)] = inst_65772);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65798 === (9))){
var inst_65761 = (state_65797[(7)]);
var inst_65774 = (state_65797[(2)]);
var inst_65775 = (inst_65761 + (1));
var inst_65761__$1 = inst_65775;
var state_65797__$1 = (function (){var statearr_65812 = state_65797;
(statearr_65812[(7)] = inst_65761__$1);

(statearr_65812[(10)] = inst_65774);

return statearr_65812;
})();
var statearr_65813_65843 = state_65797__$1;
(statearr_65813_65843[(2)] = null);

(statearr_65813_65843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65798 === (5))){
var inst_65781 = (state_65797[(2)]);
var state_65797__$1 = (function (){var statearr_65814 = state_65797;
(statearr_65814[(11)] = inst_65781);

return statearr_65814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65797__$1,(12),dchan);
} else {
if((state_val_65798 === (14))){
var inst_65783 = (state_65797[(8)]);
var inst_65788 = cljs.core.apply.call(null,f,inst_65783);
var state_65797__$1 = state_65797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65797__$1,(16),out,inst_65788);
} else {
if((state_val_65798 === (16))){
var inst_65790 = (state_65797[(2)]);
var state_65797__$1 = (function (){var statearr_65815 = state_65797;
(statearr_65815[(12)] = inst_65790);

return statearr_65815;
})();
var statearr_65816_65844 = state_65797__$1;
(statearr_65816_65844[(2)] = null);

(statearr_65816_65844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65798 === (10))){
var inst_65765 = (state_65797[(2)]);
var inst_65766 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_65797__$1 = (function (){var statearr_65817 = state_65797;
(statearr_65817[(13)] = inst_65765);

return statearr_65817;
})();
var statearr_65818_65845 = state_65797__$1;
(statearr_65818_65845[(2)] = inst_65766);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65798 === (8))){
var inst_65779 = (state_65797[(2)]);
var state_65797__$1 = state_65797;
var statearr_65819_65846 = state_65797__$1;
(statearr_65819_65846[(2)] = inst_65779);

(statearr_65819_65846[(1)] = (5));


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
});})(c__28009__auto___65831,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27988__auto__,c__28009__auto___65831,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_65823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65823[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_65823[(1)] = (1));

return statearr_65823;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_65797){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_65797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e65824){if((e65824 instanceof Object)){
var ex__27992__auto__ = e65824;
var statearr_65825_65847 = state_65797;
(statearr_65825_65847[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65848 = state_65797;
state_65797 = G__65848;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_65797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_65797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___65831,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28011__auto__ = (function (){var statearr_65826 = f__28010__auto__.call(null);
(statearr_65826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___65831);

return statearr_65826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___65831,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args65850 = [];
var len__27054__auto___65908 = arguments.length;
var i__27055__auto___65909 = (0);
while(true){
if((i__27055__auto___65909 < len__27054__auto___65908)){
args65850.push((arguments[i__27055__auto___65909]));

var G__65910 = (i__27055__auto___65909 + (1));
i__27055__auto___65909 = G__65910;
continue;
} else {
}
break;
}

var G__65852 = args65850.length;
switch (G__65852) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65850.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___65912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___65912,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___65912,out){
return (function (state_65884){
var state_val_65885 = (state_65884[(1)]);
if((state_val_65885 === (7))){
var inst_65864 = (state_65884[(7)]);
var inst_65863 = (state_65884[(8)]);
var inst_65863__$1 = (state_65884[(2)]);
var inst_65864__$1 = cljs.core.nth.call(null,inst_65863__$1,(0),null);
var inst_65865 = cljs.core.nth.call(null,inst_65863__$1,(1),null);
var inst_65866 = (inst_65864__$1 == null);
var state_65884__$1 = (function (){var statearr_65886 = state_65884;
(statearr_65886[(7)] = inst_65864__$1);

(statearr_65886[(8)] = inst_65863__$1);

(statearr_65886[(9)] = inst_65865);

return statearr_65886;
})();
if(cljs.core.truth_(inst_65866)){
var statearr_65887_65913 = state_65884__$1;
(statearr_65887_65913[(1)] = (8));

} else {
var statearr_65888_65914 = state_65884__$1;
(statearr_65888_65914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65885 === (1))){
var inst_65853 = cljs.core.vec.call(null,chs);
var inst_65854 = inst_65853;
var state_65884__$1 = (function (){var statearr_65889 = state_65884;
(statearr_65889[(10)] = inst_65854);

return statearr_65889;
})();
var statearr_65890_65915 = state_65884__$1;
(statearr_65890_65915[(2)] = null);

(statearr_65890_65915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65885 === (4))){
var inst_65854 = (state_65884[(10)]);
var state_65884__$1 = state_65884;
return cljs.core.async.ioc_alts_BANG_.call(null,state_65884__$1,(7),inst_65854);
} else {
if((state_val_65885 === (6))){
var inst_65880 = (state_65884[(2)]);
var state_65884__$1 = state_65884;
var statearr_65891_65916 = state_65884__$1;
(statearr_65891_65916[(2)] = inst_65880);

(statearr_65891_65916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65885 === (3))){
var inst_65882 = (state_65884[(2)]);
var state_65884__$1 = state_65884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65884__$1,inst_65882);
} else {
if((state_val_65885 === (2))){
var inst_65854 = (state_65884[(10)]);
var inst_65856 = cljs.core.count.call(null,inst_65854);
var inst_65857 = (inst_65856 > (0));
var state_65884__$1 = state_65884;
if(cljs.core.truth_(inst_65857)){
var statearr_65893_65917 = state_65884__$1;
(statearr_65893_65917[(1)] = (4));

} else {
var statearr_65894_65918 = state_65884__$1;
(statearr_65894_65918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65885 === (11))){
var inst_65854 = (state_65884[(10)]);
var inst_65873 = (state_65884[(2)]);
var tmp65892 = inst_65854;
var inst_65854__$1 = tmp65892;
var state_65884__$1 = (function (){var statearr_65895 = state_65884;
(statearr_65895[(10)] = inst_65854__$1);

(statearr_65895[(11)] = inst_65873);

return statearr_65895;
})();
var statearr_65896_65919 = state_65884__$1;
(statearr_65896_65919[(2)] = null);

(statearr_65896_65919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65885 === (9))){
var inst_65864 = (state_65884[(7)]);
var state_65884__$1 = state_65884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65884__$1,(11),out,inst_65864);
} else {
if((state_val_65885 === (5))){
var inst_65878 = cljs.core.async.close_BANG_.call(null,out);
var state_65884__$1 = state_65884;
var statearr_65897_65920 = state_65884__$1;
(statearr_65897_65920[(2)] = inst_65878);

(statearr_65897_65920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65885 === (10))){
var inst_65876 = (state_65884[(2)]);
var state_65884__$1 = state_65884;
var statearr_65898_65921 = state_65884__$1;
(statearr_65898_65921[(2)] = inst_65876);

(statearr_65898_65921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65885 === (8))){
var inst_65854 = (state_65884[(10)]);
var inst_65864 = (state_65884[(7)]);
var inst_65863 = (state_65884[(8)]);
var inst_65865 = (state_65884[(9)]);
var inst_65868 = (function (){var cs = inst_65854;
var vec__65859 = inst_65863;
var v = inst_65864;
var c = inst_65865;
return ((function (cs,vec__65859,v,c,inst_65854,inst_65864,inst_65863,inst_65865,state_val_65885,c__28009__auto___65912,out){
return (function (p1__65849_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__65849_SHARP_);
});
;})(cs,vec__65859,v,c,inst_65854,inst_65864,inst_65863,inst_65865,state_val_65885,c__28009__auto___65912,out))
})();
var inst_65869 = cljs.core.filterv.call(null,inst_65868,inst_65854);
var inst_65854__$1 = inst_65869;
var state_65884__$1 = (function (){var statearr_65899 = state_65884;
(statearr_65899[(10)] = inst_65854__$1);

return statearr_65899;
})();
var statearr_65900_65922 = state_65884__$1;
(statearr_65900_65922[(2)] = null);

(statearr_65900_65922[(1)] = (2));


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
});})(c__28009__auto___65912,out))
;
return ((function (switch__27988__auto__,c__28009__auto___65912,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_65904 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65904[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_65904[(1)] = (1));

return statearr_65904;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_65884){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_65884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e65905){if((e65905 instanceof Object)){
var ex__27992__auto__ = e65905;
var statearr_65906_65923 = state_65884;
(statearr_65906_65923[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65924 = state_65884;
state_65884 = G__65924;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_65884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_65884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___65912,out))
})();
var state__28011__auto__ = (function (){var statearr_65907 = f__28010__auto__.call(null);
(statearr_65907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___65912);

return statearr_65907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___65912,out))
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
var args65925 = [];
var len__27054__auto___65974 = arguments.length;
var i__27055__auto___65975 = (0);
while(true){
if((i__27055__auto___65975 < len__27054__auto___65974)){
args65925.push((arguments[i__27055__auto___65975]));

var G__65976 = (i__27055__auto___65975 + (1));
i__27055__auto___65975 = G__65976;
continue;
} else {
}
break;
}

var G__65927 = args65925.length;
switch (G__65927) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65925.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___65978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___65978,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___65978,out){
return (function (state_65951){
var state_val_65952 = (state_65951[(1)]);
if((state_val_65952 === (7))){
var inst_65933 = (state_65951[(7)]);
var inst_65933__$1 = (state_65951[(2)]);
var inst_65934 = (inst_65933__$1 == null);
var inst_65935 = cljs.core.not.call(null,inst_65934);
var state_65951__$1 = (function (){var statearr_65953 = state_65951;
(statearr_65953[(7)] = inst_65933__$1);

return statearr_65953;
})();
if(inst_65935){
var statearr_65954_65979 = state_65951__$1;
(statearr_65954_65979[(1)] = (8));

} else {
var statearr_65955_65980 = state_65951__$1;
(statearr_65955_65980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65952 === (1))){
var inst_65928 = (0);
var state_65951__$1 = (function (){var statearr_65956 = state_65951;
(statearr_65956[(8)] = inst_65928);

return statearr_65956;
})();
var statearr_65957_65981 = state_65951__$1;
(statearr_65957_65981[(2)] = null);

(statearr_65957_65981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65952 === (4))){
var state_65951__$1 = state_65951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65951__$1,(7),ch);
} else {
if((state_val_65952 === (6))){
var inst_65946 = (state_65951[(2)]);
var state_65951__$1 = state_65951;
var statearr_65958_65982 = state_65951__$1;
(statearr_65958_65982[(2)] = inst_65946);

(statearr_65958_65982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65952 === (3))){
var inst_65948 = (state_65951[(2)]);
var inst_65949 = cljs.core.async.close_BANG_.call(null,out);
var state_65951__$1 = (function (){var statearr_65959 = state_65951;
(statearr_65959[(9)] = inst_65948);

return statearr_65959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65951__$1,inst_65949);
} else {
if((state_val_65952 === (2))){
var inst_65928 = (state_65951[(8)]);
var inst_65930 = (inst_65928 < n);
var state_65951__$1 = state_65951;
if(cljs.core.truth_(inst_65930)){
var statearr_65960_65983 = state_65951__$1;
(statearr_65960_65983[(1)] = (4));

} else {
var statearr_65961_65984 = state_65951__$1;
(statearr_65961_65984[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65952 === (11))){
var inst_65928 = (state_65951[(8)]);
var inst_65938 = (state_65951[(2)]);
var inst_65939 = (inst_65928 + (1));
var inst_65928__$1 = inst_65939;
var state_65951__$1 = (function (){var statearr_65962 = state_65951;
(statearr_65962[(10)] = inst_65938);

(statearr_65962[(8)] = inst_65928__$1);

return statearr_65962;
})();
var statearr_65963_65985 = state_65951__$1;
(statearr_65963_65985[(2)] = null);

(statearr_65963_65985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65952 === (9))){
var state_65951__$1 = state_65951;
var statearr_65964_65986 = state_65951__$1;
(statearr_65964_65986[(2)] = null);

(statearr_65964_65986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65952 === (5))){
var state_65951__$1 = state_65951;
var statearr_65965_65987 = state_65951__$1;
(statearr_65965_65987[(2)] = null);

(statearr_65965_65987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65952 === (10))){
var inst_65943 = (state_65951[(2)]);
var state_65951__$1 = state_65951;
var statearr_65966_65988 = state_65951__$1;
(statearr_65966_65988[(2)] = inst_65943);

(statearr_65966_65988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65952 === (8))){
var inst_65933 = (state_65951[(7)]);
var state_65951__$1 = state_65951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65951__$1,(11),out,inst_65933);
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
});})(c__28009__auto___65978,out))
;
return ((function (switch__27988__auto__,c__28009__auto___65978,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_65970 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65970[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_65970[(1)] = (1));

return statearr_65970;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_65951){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_65951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e65971){if((e65971 instanceof Object)){
var ex__27992__auto__ = e65971;
var statearr_65972_65989 = state_65951;
(statearr_65972_65989[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65990 = state_65951;
state_65951 = G__65990;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_65951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_65951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___65978,out))
})();
var state__28011__auto__ = (function (){var statearr_65973 = f__28010__auto__.call(null);
(statearr_65973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___65978);

return statearr_65973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___65978,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async65998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65998 = (function (map_LT_,f,ch,meta65999){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta65999 = meta65999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async65998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66000,meta65999__$1){
var self__ = this;
var _66000__$1 = this;
return (new cljs.core.async.t_cljs$core$async65998(self__.map_LT_,self__.f,self__.ch,meta65999__$1));
});

cljs.core.async.t_cljs$core$async65998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66000){
var self__ = this;
var _66000__$1 = this;
return self__.meta65999;
});

cljs.core.async.t_cljs$core$async65998.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async65998.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async65998.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async65998.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async65998.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async66001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66001 = (function (map_LT_,f,ch,meta65999,_,fn1,meta66002){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta65999 = meta65999;
this._ = _;
this.fn1 = fn1;
this.meta66002 = meta66002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async66001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_66003,meta66002__$1){
var self__ = this;
var _66003__$1 = this;
return (new cljs.core.async.t_cljs$core$async66001(self__.map_LT_,self__.f,self__.ch,self__.meta65999,self__._,self__.fn1,meta66002__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async66001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_66003){
var self__ = this;
var _66003__$1 = this;
return self__.meta66002;
});})(___$1))
;

cljs.core.async.t_cljs$core$async66001.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async66001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async66001.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async66001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__65991_SHARP_){
return f1.call(null,(((p1__65991_SHARP_ == null))?null:self__.f.call(null,p1__65991_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async66001.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65999","meta65999",-221401309,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async65998","cljs.core.async/t_cljs$core$async65998",-1221754725,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta66002","meta66002",1532426517,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async66001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66001";

cljs.core.async.t_cljs$core$async66001.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async66001");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async66001 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async66001(map_LT___$1,f__$1,ch__$1,meta65999__$1,___$2,fn1__$1,meta66002){
return (new cljs.core.async.t_cljs$core$async66001(map_LT___$1,f__$1,ch__$1,meta65999__$1,___$2,fn1__$1,meta66002));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async66001(self__.map_LT_,self__.f,self__.ch,self__.meta65999,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async65998.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async65998.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async65998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65999","meta65999",-221401309,null)], null);
});

cljs.core.async.t_cljs$core$async65998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65998";

cljs.core.async.t_cljs$core$async65998.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async65998");
});

cljs.core.async.__GT_t_cljs$core$async65998 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async65998(map_LT___$1,f__$1,ch__$1,meta65999){
return (new cljs.core.async.t_cljs$core$async65998(map_LT___$1,f__$1,ch__$1,meta65999));
});

}

return (new cljs.core.async.t_cljs$core$async65998(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async66007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66007 = (function (map_GT_,f,ch,meta66008){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta66008 = meta66008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async66007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66009,meta66008__$1){
var self__ = this;
var _66009__$1 = this;
return (new cljs.core.async.t_cljs$core$async66007(self__.map_GT_,self__.f,self__.ch,meta66008__$1));
});

cljs.core.async.t_cljs$core$async66007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66009){
var self__ = this;
var _66009__$1 = this;
return self__.meta66008;
});

cljs.core.async.t_cljs$core$async66007.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async66007.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66007.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async66007.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async66007.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async66007.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async66007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66008","meta66008",189039031,null)], null);
});

cljs.core.async.t_cljs$core$async66007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66007";

cljs.core.async.t_cljs$core$async66007.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async66007");
});

cljs.core.async.__GT_t_cljs$core$async66007 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async66007(map_GT___$1,f__$1,ch__$1,meta66008){
return (new cljs.core.async.t_cljs$core$async66007(map_GT___$1,f__$1,ch__$1,meta66008));
});

}

return (new cljs.core.async.t_cljs$core$async66007(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async66013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66013 = (function (filter_GT_,p,ch,meta66014){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta66014 = meta66014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async66013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66015,meta66014__$1){
var self__ = this;
var _66015__$1 = this;
return (new cljs.core.async.t_cljs$core$async66013(self__.filter_GT_,self__.p,self__.ch,meta66014__$1));
});

cljs.core.async.t_cljs$core$async66013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66015){
var self__ = this;
var _66015__$1 = this;
return self__.meta66014;
});

cljs.core.async.t_cljs$core$async66013.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async66013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66013.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66013.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async66013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async66013.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async66013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async66013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66014","meta66014",579084530,null)], null);
});

cljs.core.async.t_cljs$core$async66013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66013";

cljs.core.async.t_cljs$core$async66013.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async66013");
});

cljs.core.async.__GT_t_cljs$core$async66013 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async66013(filter_GT___$1,p__$1,ch__$1,meta66014){
return (new cljs.core.async.t_cljs$core$async66013(filter_GT___$1,p__$1,ch__$1,meta66014));
});

}

return (new cljs.core.async.t_cljs$core$async66013(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args66016 = [];
var len__27054__auto___66060 = arguments.length;
var i__27055__auto___66061 = (0);
while(true){
if((i__27055__auto___66061 < len__27054__auto___66060)){
args66016.push((arguments[i__27055__auto___66061]));

var G__66062 = (i__27055__auto___66061 + (1));
i__27055__auto___66061 = G__66062;
continue;
} else {
}
break;
}

var G__66018 = args66016.length;
switch (G__66018) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66016.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___66064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___66064,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___66064,out){
return (function (state_66039){
var state_val_66040 = (state_66039[(1)]);
if((state_val_66040 === (7))){
var inst_66035 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
var statearr_66041_66065 = state_66039__$1;
(statearr_66041_66065[(2)] = inst_66035);

(statearr_66041_66065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (1))){
var state_66039__$1 = state_66039;
var statearr_66042_66066 = state_66039__$1;
(statearr_66042_66066[(2)] = null);

(statearr_66042_66066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (4))){
var inst_66021 = (state_66039[(7)]);
var inst_66021__$1 = (state_66039[(2)]);
var inst_66022 = (inst_66021__$1 == null);
var state_66039__$1 = (function (){var statearr_66043 = state_66039;
(statearr_66043[(7)] = inst_66021__$1);

return statearr_66043;
})();
if(cljs.core.truth_(inst_66022)){
var statearr_66044_66067 = state_66039__$1;
(statearr_66044_66067[(1)] = (5));

} else {
var statearr_66045_66068 = state_66039__$1;
(statearr_66045_66068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (6))){
var inst_66021 = (state_66039[(7)]);
var inst_66026 = p.call(null,inst_66021);
var state_66039__$1 = state_66039;
if(cljs.core.truth_(inst_66026)){
var statearr_66046_66069 = state_66039__$1;
(statearr_66046_66069[(1)] = (8));

} else {
var statearr_66047_66070 = state_66039__$1;
(statearr_66047_66070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (3))){
var inst_66037 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66039__$1,inst_66037);
} else {
if((state_val_66040 === (2))){
var state_66039__$1 = state_66039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66039__$1,(4),ch);
} else {
if((state_val_66040 === (11))){
var inst_66029 = (state_66039[(2)]);
var state_66039__$1 = state_66039;
var statearr_66048_66071 = state_66039__$1;
(statearr_66048_66071[(2)] = inst_66029);

(statearr_66048_66071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (9))){
var state_66039__$1 = state_66039;
var statearr_66049_66072 = state_66039__$1;
(statearr_66049_66072[(2)] = null);

(statearr_66049_66072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (5))){
var inst_66024 = cljs.core.async.close_BANG_.call(null,out);
var state_66039__$1 = state_66039;
var statearr_66050_66073 = state_66039__$1;
(statearr_66050_66073[(2)] = inst_66024);

(statearr_66050_66073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (10))){
var inst_66032 = (state_66039[(2)]);
var state_66039__$1 = (function (){var statearr_66051 = state_66039;
(statearr_66051[(8)] = inst_66032);

return statearr_66051;
})();
var statearr_66052_66074 = state_66039__$1;
(statearr_66052_66074[(2)] = null);

(statearr_66052_66074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66040 === (8))){
var inst_66021 = (state_66039[(7)]);
var state_66039__$1 = state_66039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66039__$1,(11),out,inst_66021);
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
});})(c__28009__auto___66064,out))
;
return ((function (switch__27988__auto__,c__28009__auto___66064,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_66056 = [null,null,null,null,null,null,null,null,null];
(statearr_66056[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_66056[(1)] = (1));

return statearr_66056;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_66039){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_66039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e66057){if((e66057 instanceof Object)){
var ex__27992__auto__ = e66057;
var statearr_66058_66075 = state_66039;
(statearr_66058_66075[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66076 = state_66039;
state_66039 = G__66076;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_66039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_66039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___66064,out))
})();
var state__28011__auto__ = (function (){var statearr_66059 = f__28010__auto__.call(null);
(statearr_66059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___66064);

return statearr_66059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___66064,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args66077 = [];
var len__27054__auto___66080 = arguments.length;
var i__27055__auto___66081 = (0);
while(true){
if((i__27055__auto___66081 < len__27054__auto___66080)){
args66077.push((arguments[i__27055__auto___66081]));

var G__66082 = (i__27055__auto___66081 + (1));
i__27055__auto___66081 = G__66082;
continue;
} else {
}
break;
}

var G__66079 = args66077.length;
switch (G__66079) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66077.length)].join('')));

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
return (function (state_66249){
var state_val_66250 = (state_66249[(1)]);
if((state_val_66250 === (7))){
var inst_66245 = (state_66249[(2)]);
var state_66249__$1 = state_66249;
var statearr_66251_66292 = state_66249__$1;
(statearr_66251_66292[(2)] = inst_66245);

(statearr_66251_66292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (20))){
var inst_66215 = (state_66249[(7)]);
var inst_66226 = (state_66249[(2)]);
var inst_66227 = cljs.core.next.call(null,inst_66215);
var inst_66201 = inst_66227;
var inst_66202 = null;
var inst_66203 = (0);
var inst_66204 = (0);
var state_66249__$1 = (function (){var statearr_66252 = state_66249;
(statearr_66252[(8)] = inst_66201);

(statearr_66252[(9)] = inst_66204);

(statearr_66252[(10)] = inst_66226);

(statearr_66252[(11)] = inst_66202);

(statearr_66252[(12)] = inst_66203);

return statearr_66252;
})();
var statearr_66253_66293 = state_66249__$1;
(statearr_66253_66293[(2)] = null);

(statearr_66253_66293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (1))){
var state_66249__$1 = state_66249;
var statearr_66254_66294 = state_66249__$1;
(statearr_66254_66294[(2)] = null);

(statearr_66254_66294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (4))){
var inst_66190 = (state_66249[(13)]);
var inst_66190__$1 = (state_66249[(2)]);
var inst_66191 = (inst_66190__$1 == null);
var state_66249__$1 = (function (){var statearr_66255 = state_66249;
(statearr_66255[(13)] = inst_66190__$1);

return statearr_66255;
})();
if(cljs.core.truth_(inst_66191)){
var statearr_66256_66295 = state_66249__$1;
(statearr_66256_66295[(1)] = (5));

} else {
var statearr_66257_66296 = state_66249__$1;
(statearr_66257_66296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (15))){
var state_66249__$1 = state_66249;
var statearr_66261_66297 = state_66249__$1;
(statearr_66261_66297[(2)] = null);

(statearr_66261_66297[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (21))){
var state_66249__$1 = state_66249;
var statearr_66262_66298 = state_66249__$1;
(statearr_66262_66298[(2)] = null);

(statearr_66262_66298[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (13))){
var inst_66201 = (state_66249[(8)]);
var inst_66204 = (state_66249[(9)]);
var inst_66202 = (state_66249[(11)]);
var inst_66203 = (state_66249[(12)]);
var inst_66211 = (state_66249[(2)]);
var inst_66212 = (inst_66204 + (1));
var tmp66258 = inst_66201;
var tmp66259 = inst_66202;
var tmp66260 = inst_66203;
var inst_66201__$1 = tmp66258;
var inst_66202__$1 = tmp66259;
var inst_66203__$1 = tmp66260;
var inst_66204__$1 = inst_66212;
var state_66249__$1 = (function (){var statearr_66263 = state_66249;
(statearr_66263[(8)] = inst_66201__$1);

(statearr_66263[(14)] = inst_66211);

(statearr_66263[(9)] = inst_66204__$1);

(statearr_66263[(11)] = inst_66202__$1);

(statearr_66263[(12)] = inst_66203__$1);

return statearr_66263;
})();
var statearr_66264_66299 = state_66249__$1;
(statearr_66264_66299[(2)] = null);

(statearr_66264_66299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (22))){
var state_66249__$1 = state_66249;
var statearr_66265_66300 = state_66249__$1;
(statearr_66265_66300[(2)] = null);

(statearr_66265_66300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (6))){
var inst_66190 = (state_66249[(13)]);
var inst_66199 = f.call(null,inst_66190);
var inst_66200 = cljs.core.seq.call(null,inst_66199);
var inst_66201 = inst_66200;
var inst_66202 = null;
var inst_66203 = (0);
var inst_66204 = (0);
var state_66249__$1 = (function (){var statearr_66266 = state_66249;
(statearr_66266[(8)] = inst_66201);

(statearr_66266[(9)] = inst_66204);

(statearr_66266[(11)] = inst_66202);

(statearr_66266[(12)] = inst_66203);

return statearr_66266;
})();
var statearr_66267_66301 = state_66249__$1;
(statearr_66267_66301[(2)] = null);

(statearr_66267_66301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (17))){
var inst_66215 = (state_66249[(7)]);
var inst_66219 = cljs.core.chunk_first.call(null,inst_66215);
var inst_66220 = cljs.core.chunk_rest.call(null,inst_66215);
var inst_66221 = cljs.core.count.call(null,inst_66219);
var inst_66201 = inst_66220;
var inst_66202 = inst_66219;
var inst_66203 = inst_66221;
var inst_66204 = (0);
var state_66249__$1 = (function (){var statearr_66268 = state_66249;
(statearr_66268[(8)] = inst_66201);

(statearr_66268[(9)] = inst_66204);

(statearr_66268[(11)] = inst_66202);

(statearr_66268[(12)] = inst_66203);

return statearr_66268;
})();
var statearr_66269_66302 = state_66249__$1;
(statearr_66269_66302[(2)] = null);

(statearr_66269_66302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (3))){
var inst_66247 = (state_66249[(2)]);
var state_66249__$1 = state_66249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66249__$1,inst_66247);
} else {
if((state_val_66250 === (12))){
var inst_66235 = (state_66249[(2)]);
var state_66249__$1 = state_66249;
var statearr_66270_66303 = state_66249__$1;
(statearr_66270_66303[(2)] = inst_66235);

(statearr_66270_66303[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (2))){
var state_66249__$1 = state_66249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66249__$1,(4),in$);
} else {
if((state_val_66250 === (23))){
var inst_66243 = (state_66249[(2)]);
var state_66249__$1 = state_66249;
var statearr_66271_66304 = state_66249__$1;
(statearr_66271_66304[(2)] = inst_66243);

(statearr_66271_66304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (19))){
var inst_66230 = (state_66249[(2)]);
var state_66249__$1 = state_66249;
var statearr_66272_66305 = state_66249__$1;
(statearr_66272_66305[(2)] = inst_66230);

(statearr_66272_66305[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (11))){
var inst_66201 = (state_66249[(8)]);
var inst_66215 = (state_66249[(7)]);
var inst_66215__$1 = cljs.core.seq.call(null,inst_66201);
var state_66249__$1 = (function (){var statearr_66273 = state_66249;
(statearr_66273[(7)] = inst_66215__$1);

return statearr_66273;
})();
if(inst_66215__$1){
var statearr_66274_66306 = state_66249__$1;
(statearr_66274_66306[(1)] = (14));

} else {
var statearr_66275_66307 = state_66249__$1;
(statearr_66275_66307[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (9))){
var inst_66237 = (state_66249[(2)]);
var inst_66238 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_66249__$1 = (function (){var statearr_66276 = state_66249;
(statearr_66276[(15)] = inst_66237);

return statearr_66276;
})();
if(cljs.core.truth_(inst_66238)){
var statearr_66277_66308 = state_66249__$1;
(statearr_66277_66308[(1)] = (21));

} else {
var statearr_66278_66309 = state_66249__$1;
(statearr_66278_66309[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (5))){
var inst_66193 = cljs.core.async.close_BANG_.call(null,out);
var state_66249__$1 = state_66249;
var statearr_66279_66310 = state_66249__$1;
(statearr_66279_66310[(2)] = inst_66193);

(statearr_66279_66310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (14))){
var inst_66215 = (state_66249[(7)]);
var inst_66217 = cljs.core.chunked_seq_QMARK_.call(null,inst_66215);
var state_66249__$1 = state_66249;
if(inst_66217){
var statearr_66280_66311 = state_66249__$1;
(statearr_66280_66311[(1)] = (17));

} else {
var statearr_66281_66312 = state_66249__$1;
(statearr_66281_66312[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (16))){
var inst_66233 = (state_66249[(2)]);
var state_66249__$1 = state_66249;
var statearr_66282_66313 = state_66249__$1;
(statearr_66282_66313[(2)] = inst_66233);

(statearr_66282_66313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66250 === (10))){
var inst_66204 = (state_66249[(9)]);
var inst_66202 = (state_66249[(11)]);
var inst_66209 = cljs.core._nth.call(null,inst_66202,inst_66204);
var state_66249__$1 = state_66249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66249__$1,(13),out,inst_66209);
} else {
if((state_val_66250 === (18))){
var inst_66215 = (state_66249[(7)]);
var inst_66224 = cljs.core.first.call(null,inst_66215);
var state_66249__$1 = state_66249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66249__$1,(20),out,inst_66224);
} else {
if((state_val_66250 === (8))){
var inst_66204 = (state_66249[(9)]);
var inst_66203 = (state_66249[(12)]);
var inst_66206 = (inst_66204 < inst_66203);
var inst_66207 = inst_66206;
var state_66249__$1 = state_66249;
if(cljs.core.truth_(inst_66207)){
var statearr_66283_66314 = state_66249__$1;
(statearr_66283_66314[(1)] = (10));

} else {
var statearr_66284_66315 = state_66249__$1;
(statearr_66284_66315[(1)] = (11));

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
var statearr_66288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66288[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__);

(statearr_66288[(1)] = (1));

return statearr_66288;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____1 = (function (state_66249){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_66249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e66289){if((e66289 instanceof Object)){
var ex__27992__auto__ = e66289;
var statearr_66290_66316 = state_66249;
(statearr_66290_66316[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66317 = state_66249;
state_66249 = G__66317;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__ = function(state_66249){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____1.call(this,state_66249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_66291 = f__28010__auto__.call(null);
(statearr_66291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_66291;
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
var args66318 = [];
var len__27054__auto___66321 = arguments.length;
var i__27055__auto___66322 = (0);
while(true){
if((i__27055__auto___66322 < len__27054__auto___66321)){
args66318.push((arguments[i__27055__auto___66322]));

var G__66323 = (i__27055__auto___66322 + (1));
i__27055__auto___66322 = G__66323;
continue;
} else {
}
break;
}

var G__66320 = args66318.length;
switch (G__66320) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66318.length)].join('')));

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
var args66325 = [];
var len__27054__auto___66328 = arguments.length;
var i__27055__auto___66329 = (0);
while(true){
if((i__27055__auto___66329 < len__27054__auto___66328)){
args66325.push((arguments[i__27055__auto___66329]));

var G__66330 = (i__27055__auto___66329 + (1));
i__27055__auto___66329 = G__66330;
continue;
} else {
}
break;
}

var G__66327 = args66325.length;
switch (G__66327) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66325.length)].join('')));

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
var args66332 = [];
var len__27054__auto___66383 = arguments.length;
var i__27055__auto___66384 = (0);
while(true){
if((i__27055__auto___66384 < len__27054__auto___66383)){
args66332.push((arguments[i__27055__auto___66384]));

var G__66385 = (i__27055__auto___66384 + (1));
i__27055__auto___66384 = G__66385;
continue;
} else {
}
break;
}

var G__66334 = args66332.length;
switch (G__66334) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66332.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___66387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___66387,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___66387,out){
return (function (state_66358){
var state_val_66359 = (state_66358[(1)]);
if((state_val_66359 === (7))){
var inst_66353 = (state_66358[(2)]);
var state_66358__$1 = state_66358;
var statearr_66360_66388 = state_66358__$1;
(statearr_66360_66388[(2)] = inst_66353);

(statearr_66360_66388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66359 === (1))){
var inst_66335 = null;
var state_66358__$1 = (function (){var statearr_66361 = state_66358;
(statearr_66361[(7)] = inst_66335);

return statearr_66361;
})();
var statearr_66362_66389 = state_66358__$1;
(statearr_66362_66389[(2)] = null);

(statearr_66362_66389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66359 === (4))){
var inst_66338 = (state_66358[(8)]);
var inst_66338__$1 = (state_66358[(2)]);
var inst_66339 = (inst_66338__$1 == null);
var inst_66340 = cljs.core.not.call(null,inst_66339);
var state_66358__$1 = (function (){var statearr_66363 = state_66358;
(statearr_66363[(8)] = inst_66338__$1);

return statearr_66363;
})();
if(inst_66340){
var statearr_66364_66390 = state_66358__$1;
(statearr_66364_66390[(1)] = (5));

} else {
var statearr_66365_66391 = state_66358__$1;
(statearr_66365_66391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66359 === (6))){
var state_66358__$1 = state_66358;
var statearr_66366_66392 = state_66358__$1;
(statearr_66366_66392[(2)] = null);

(statearr_66366_66392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66359 === (3))){
var inst_66355 = (state_66358[(2)]);
var inst_66356 = cljs.core.async.close_BANG_.call(null,out);
var state_66358__$1 = (function (){var statearr_66367 = state_66358;
(statearr_66367[(9)] = inst_66355);

return statearr_66367;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66358__$1,inst_66356);
} else {
if((state_val_66359 === (2))){
var state_66358__$1 = state_66358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66358__$1,(4),ch);
} else {
if((state_val_66359 === (11))){
var inst_66338 = (state_66358[(8)]);
var inst_66347 = (state_66358[(2)]);
var inst_66335 = inst_66338;
var state_66358__$1 = (function (){var statearr_66368 = state_66358;
(statearr_66368[(10)] = inst_66347);

(statearr_66368[(7)] = inst_66335);

return statearr_66368;
})();
var statearr_66369_66393 = state_66358__$1;
(statearr_66369_66393[(2)] = null);

(statearr_66369_66393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66359 === (9))){
var inst_66338 = (state_66358[(8)]);
var state_66358__$1 = state_66358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66358__$1,(11),out,inst_66338);
} else {
if((state_val_66359 === (5))){
var inst_66335 = (state_66358[(7)]);
var inst_66338 = (state_66358[(8)]);
var inst_66342 = cljs.core._EQ_.call(null,inst_66338,inst_66335);
var state_66358__$1 = state_66358;
if(inst_66342){
var statearr_66371_66394 = state_66358__$1;
(statearr_66371_66394[(1)] = (8));

} else {
var statearr_66372_66395 = state_66358__$1;
(statearr_66372_66395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66359 === (10))){
var inst_66350 = (state_66358[(2)]);
var state_66358__$1 = state_66358;
var statearr_66373_66396 = state_66358__$1;
(statearr_66373_66396[(2)] = inst_66350);

(statearr_66373_66396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66359 === (8))){
var inst_66335 = (state_66358[(7)]);
var tmp66370 = inst_66335;
var inst_66335__$1 = tmp66370;
var state_66358__$1 = (function (){var statearr_66374 = state_66358;
(statearr_66374[(7)] = inst_66335__$1);

return statearr_66374;
})();
var statearr_66375_66397 = state_66358__$1;
(statearr_66375_66397[(2)] = null);

(statearr_66375_66397[(1)] = (2));


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
});})(c__28009__auto___66387,out))
;
return ((function (switch__27988__auto__,c__28009__auto___66387,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_66379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66379[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_66379[(1)] = (1));

return statearr_66379;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_66358){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_66358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e66380){if((e66380 instanceof Object)){
var ex__27992__auto__ = e66380;
var statearr_66381_66398 = state_66358;
(statearr_66381_66398[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66399 = state_66358;
state_66358 = G__66399;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_66358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_66358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___66387,out))
})();
var state__28011__auto__ = (function (){var statearr_66382 = f__28010__auto__.call(null);
(statearr_66382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___66387);

return statearr_66382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___66387,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args66400 = [];
var len__27054__auto___66470 = arguments.length;
var i__27055__auto___66471 = (0);
while(true){
if((i__27055__auto___66471 < len__27054__auto___66470)){
args66400.push((arguments[i__27055__auto___66471]));

var G__66472 = (i__27055__auto___66471 + (1));
i__27055__auto___66471 = G__66472;
continue;
} else {
}
break;
}

var G__66402 = args66400.length;
switch (G__66402) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66400.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___66474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___66474,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___66474,out){
return (function (state_66440){
var state_val_66441 = (state_66440[(1)]);
if((state_val_66441 === (7))){
var inst_66436 = (state_66440[(2)]);
var state_66440__$1 = state_66440;
var statearr_66442_66475 = state_66440__$1;
(statearr_66442_66475[(2)] = inst_66436);

(statearr_66442_66475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66441 === (1))){
var inst_66403 = (new Array(n));
var inst_66404 = inst_66403;
var inst_66405 = (0);
var state_66440__$1 = (function (){var statearr_66443 = state_66440;
(statearr_66443[(7)] = inst_66405);

(statearr_66443[(8)] = inst_66404);

return statearr_66443;
})();
var statearr_66444_66476 = state_66440__$1;
(statearr_66444_66476[(2)] = null);

(statearr_66444_66476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66441 === (4))){
var inst_66408 = (state_66440[(9)]);
var inst_66408__$1 = (state_66440[(2)]);
var inst_66409 = (inst_66408__$1 == null);
var inst_66410 = cljs.core.not.call(null,inst_66409);
var state_66440__$1 = (function (){var statearr_66445 = state_66440;
(statearr_66445[(9)] = inst_66408__$1);

return statearr_66445;
})();
if(inst_66410){
var statearr_66446_66477 = state_66440__$1;
(statearr_66446_66477[(1)] = (5));

} else {
var statearr_66447_66478 = state_66440__$1;
(statearr_66447_66478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66441 === (15))){
var inst_66430 = (state_66440[(2)]);
var state_66440__$1 = state_66440;
var statearr_66448_66479 = state_66440__$1;
(statearr_66448_66479[(2)] = inst_66430);

(statearr_66448_66479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66441 === (13))){
var state_66440__$1 = state_66440;
var statearr_66449_66480 = state_66440__$1;
(statearr_66449_66480[(2)] = null);

(statearr_66449_66480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66441 === (6))){
var inst_66405 = (state_66440[(7)]);
var inst_66426 = (inst_66405 > (0));
var state_66440__$1 = state_66440;
if(cljs.core.truth_(inst_66426)){
var statearr_66450_66481 = state_66440__$1;
(statearr_66450_66481[(1)] = (12));

} else {
var statearr_66451_66482 = state_66440__$1;
(statearr_66451_66482[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66441 === (3))){
var inst_66438 = (state_66440[(2)]);
var state_66440__$1 = state_66440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66440__$1,inst_66438);
} else {
if((state_val_66441 === (12))){
var inst_66404 = (state_66440[(8)]);
var inst_66428 = cljs.core.vec.call(null,inst_66404);
var state_66440__$1 = state_66440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66440__$1,(15),out,inst_66428);
} else {
if((state_val_66441 === (2))){
var state_66440__$1 = state_66440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66440__$1,(4),ch);
} else {
if((state_val_66441 === (11))){
var inst_66420 = (state_66440[(2)]);
var inst_66421 = (new Array(n));
var inst_66404 = inst_66421;
var inst_66405 = (0);
var state_66440__$1 = (function (){var statearr_66452 = state_66440;
(statearr_66452[(10)] = inst_66420);

(statearr_66452[(7)] = inst_66405);

(statearr_66452[(8)] = inst_66404);

return statearr_66452;
})();
var statearr_66453_66483 = state_66440__$1;
(statearr_66453_66483[(2)] = null);

(statearr_66453_66483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66441 === (9))){
var inst_66404 = (state_66440[(8)]);
var inst_66418 = cljs.core.vec.call(null,inst_66404);
var state_66440__$1 = state_66440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66440__$1,(11),out,inst_66418);
} else {
if((state_val_66441 === (5))){
var inst_66405 = (state_66440[(7)]);
var inst_66404 = (state_66440[(8)]);
var inst_66413 = (state_66440[(11)]);
var inst_66408 = (state_66440[(9)]);
var inst_66412 = (inst_66404[inst_66405] = inst_66408);
var inst_66413__$1 = (inst_66405 + (1));
var inst_66414 = (inst_66413__$1 < n);
var state_66440__$1 = (function (){var statearr_66454 = state_66440;
(statearr_66454[(12)] = inst_66412);

(statearr_66454[(11)] = inst_66413__$1);

return statearr_66454;
})();
if(cljs.core.truth_(inst_66414)){
var statearr_66455_66484 = state_66440__$1;
(statearr_66455_66484[(1)] = (8));

} else {
var statearr_66456_66485 = state_66440__$1;
(statearr_66456_66485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66441 === (14))){
var inst_66433 = (state_66440[(2)]);
var inst_66434 = cljs.core.async.close_BANG_.call(null,out);
var state_66440__$1 = (function (){var statearr_66458 = state_66440;
(statearr_66458[(13)] = inst_66433);

return statearr_66458;
})();
var statearr_66459_66486 = state_66440__$1;
(statearr_66459_66486[(2)] = inst_66434);

(statearr_66459_66486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66441 === (10))){
var inst_66424 = (state_66440[(2)]);
var state_66440__$1 = state_66440;
var statearr_66460_66487 = state_66440__$1;
(statearr_66460_66487[(2)] = inst_66424);

(statearr_66460_66487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66441 === (8))){
var inst_66404 = (state_66440[(8)]);
var inst_66413 = (state_66440[(11)]);
var tmp66457 = inst_66404;
var inst_66404__$1 = tmp66457;
var inst_66405 = inst_66413;
var state_66440__$1 = (function (){var statearr_66461 = state_66440;
(statearr_66461[(7)] = inst_66405);

(statearr_66461[(8)] = inst_66404__$1);

return statearr_66461;
})();
var statearr_66462_66488 = state_66440__$1;
(statearr_66462_66488[(2)] = null);

(statearr_66462_66488[(1)] = (2));


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
});})(c__28009__auto___66474,out))
;
return ((function (switch__27988__auto__,c__28009__auto___66474,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_66466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66466[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_66466[(1)] = (1));

return statearr_66466;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_66440){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_66440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e66467){if((e66467 instanceof Object)){
var ex__27992__auto__ = e66467;
var statearr_66468_66489 = state_66440;
(statearr_66468_66489[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66490 = state_66440;
state_66440 = G__66490;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_66440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_66440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___66474,out))
})();
var state__28011__auto__ = (function (){var statearr_66469 = f__28010__auto__.call(null);
(statearr_66469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___66474);

return statearr_66469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___66474,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args66491 = [];
var len__27054__auto___66565 = arguments.length;
var i__27055__auto___66566 = (0);
while(true){
if((i__27055__auto___66566 < len__27054__auto___66565)){
args66491.push((arguments[i__27055__auto___66566]));

var G__66567 = (i__27055__auto___66566 + (1));
i__27055__auto___66566 = G__66567;
continue;
} else {
}
break;
}

var G__66493 = args66491.length;
switch (G__66493) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66491.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___66569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___66569,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___66569,out){
return (function (state_66535){
var state_val_66536 = (state_66535[(1)]);
if((state_val_66536 === (7))){
var inst_66531 = (state_66535[(2)]);
var state_66535__$1 = state_66535;
var statearr_66537_66570 = state_66535__$1;
(statearr_66537_66570[(2)] = inst_66531);

(statearr_66537_66570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66536 === (1))){
var inst_66494 = [];
var inst_66495 = inst_66494;
var inst_66496 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_66535__$1 = (function (){var statearr_66538 = state_66535;
(statearr_66538[(7)] = inst_66496);

(statearr_66538[(8)] = inst_66495);

return statearr_66538;
})();
var statearr_66539_66571 = state_66535__$1;
(statearr_66539_66571[(2)] = null);

(statearr_66539_66571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66536 === (4))){
var inst_66499 = (state_66535[(9)]);
var inst_66499__$1 = (state_66535[(2)]);
var inst_66500 = (inst_66499__$1 == null);
var inst_66501 = cljs.core.not.call(null,inst_66500);
var state_66535__$1 = (function (){var statearr_66540 = state_66535;
(statearr_66540[(9)] = inst_66499__$1);

return statearr_66540;
})();
if(inst_66501){
var statearr_66541_66572 = state_66535__$1;
(statearr_66541_66572[(1)] = (5));

} else {
var statearr_66542_66573 = state_66535__$1;
(statearr_66542_66573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66536 === (15))){
var inst_66525 = (state_66535[(2)]);
var state_66535__$1 = state_66535;
var statearr_66543_66574 = state_66535__$1;
(statearr_66543_66574[(2)] = inst_66525);

(statearr_66543_66574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66536 === (13))){
var state_66535__$1 = state_66535;
var statearr_66544_66575 = state_66535__$1;
(statearr_66544_66575[(2)] = null);

(statearr_66544_66575[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66536 === (6))){
var inst_66495 = (state_66535[(8)]);
var inst_66520 = inst_66495.length;
var inst_66521 = (inst_66520 > (0));
var state_66535__$1 = state_66535;
if(cljs.core.truth_(inst_66521)){
var statearr_66545_66576 = state_66535__$1;
(statearr_66545_66576[(1)] = (12));

} else {
var statearr_66546_66577 = state_66535__$1;
(statearr_66546_66577[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66536 === (3))){
var inst_66533 = (state_66535[(2)]);
var state_66535__$1 = state_66535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66535__$1,inst_66533);
} else {
if((state_val_66536 === (12))){
var inst_66495 = (state_66535[(8)]);
var inst_66523 = cljs.core.vec.call(null,inst_66495);
var state_66535__$1 = state_66535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66535__$1,(15),out,inst_66523);
} else {
if((state_val_66536 === (2))){
var state_66535__$1 = state_66535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66535__$1,(4),ch);
} else {
if((state_val_66536 === (11))){
var inst_66503 = (state_66535[(10)]);
var inst_66499 = (state_66535[(9)]);
var inst_66513 = (state_66535[(2)]);
var inst_66514 = [];
var inst_66515 = inst_66514.push(inst_66499);
var inst_66495 = inst_66514;
var inst_66496 = inst_66503;
var state_66535__$1 = (function (){var statearr_66547 = state_66535;
(statearr_66547[(7)] = inst_66496);

(statearr_66547[(11)] = inst_66515);

(statearr_66547[(12)] = inst_66513);

(statearr_66547[(8)] = inst_66495);

return statearr_66547;
})();
var statearr_66548_66578 = state_66535__$1;
(statearr_66548_66578[(2)] = null);

(statearr_66548_66578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66536 === (9))){
var inst_66495 = (state_66535[(8)]);
var inst_66511 = cljs.core.vec.call(null,inst_66495);
var state_66535__$1 = state_66535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66535__$1,(11),out,inst_66511);
} else {
if((state_val_66536 === (5))){
var inst_66503 = (state_66535[(10)]);
var inst_66499 = (state_66535[(9)]);
var inst_66496 = (state_66535[(7)]);
var inst_66503__$1 = f.call(null,inst_66499);
var inst_66504 = cljs.core._EQ_.call(null,inst_66503__$1,inst_66496);
var inst_66505 = cljs.core.keyword_identical_QMARK_.call(null,inst_66496,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_66506 = (inst_66504) || (inst_66505);
var state_66535__$1 = (function (){var statearr_66549 = state_66535;
(statearr_66549[(10)] = inst_66503__$1);

return statearr_66549;
})();
if(cljs.core.truth_(inst_66506)){
var statearr_66550_66579 = state_66535__$1;
(statearr_66550_66579[(1)] = (8));

} else {
var statearr_66551_66580 = state_66535__$1;
(statearr_66551_66580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66536 === (14))){
var inst_66528 = (state_66535[(2)]);
var inst_66529 = cljs.core.async.close_BANG_.call(null,out);
var state_66535__$1 = (function (){var statearr_66553 = state_66535;
(statearr_66553[(13)] = inst_66528);

return statearr_66553;
})();
var statearr_66554_66581 = state_66535__$1;
(statearr_66554_66581[(2)] = inst_66529);

(statearr_66554_66581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66536 === (10))){
var inst_66518 = (state_66535[(2)]);
var state_66535__$1 = state_66535;
var statearr_66555_66582 = state_66535__$1;
(statearr_66555_66582[(2)] = inst_66518);

(statearr_66555_66582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66536 === (8))){
var inst_66503 = (state_66535[(10)]);
var inst_66499 = (state_66535[(9)]);
var inst_66495 = (state_66535[(8)]);
var inst_66508 = inst_66495.push(inst_66499);
var tmp66552 = inst_66495;
var inst_66495__$1 = tmp66552;
var inst_66496 = inst_66503;
var state_66535__$1 = (function (){var statearr_66556 = state_66535;
(statearr_66556[(14)] = inst_66508);

(statearr_66556[(7)] = inst_66496);

(statearr_66556[(8)] = inst_66495__$1);

return statearr_66556;
})();
var statearr_66557_66583 = state_66535__$1;
(statearr_66557_66583[(2)] = null);

(statearr_66557_66583[(1)] = (2));


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
});})(c__28009__auto___66569,out))
;
return ((function (switch__27988__auto__,c__28009__auto___66569,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_66561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66561[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_66561[(1)] = (1));

return statearr_66561;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_66535){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_66535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e66562){if((e66562 instanceof Object)){
var ex__27992__auto__ = e66562;
var statearr_66563_66584 = state_66535;
(statearr_66563_66584[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66585 = state_66535;
state_66535 = G__66585;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_66535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_66535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___66569,out))
})();
var state__28011__auto__ = (function (){var statearr_66564 = f__28010__auto__.call(null);
(statearr_66564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___66569);

return statearr_66564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___66569,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1499924858865