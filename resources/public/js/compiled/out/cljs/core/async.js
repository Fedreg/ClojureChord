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
var args49967 = [];
var len__27054__auto___49973 = arguments.length;
var i__27055__auto___49974 = (0);
while(true){
if((i__27055__auto___49974 < len__27054__auto___49973)){
args49967.push((arguments[i__27055__auto___49974]));

var G__49975 = (i__27055__auto___49974 + (1));
i__27055__auto___49974 = G__49975;
continue;
} else {
}
break;
}

var G__49969 = args49967.length;
switch (G__49969) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49967.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async49970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49970 = (function (f,blockable,meta49971){
this.f = f;
this.blockable = blockable;
this.meta49971 = meta49971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49972,meta49971__$1){
var self__ = this;
var _49972__$1 = this;
return (new cljs.core.async.t_cljs$core$async49970(self__.f,self__.blockable,meta49971__$1));
});

cljs.core.async.t_cljs$core$async49970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49972){
var self__ = this;
var _49972__$1 = this;
return self__.meta49971;
});

cljs.core.async.t_cljs$core$async49970.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async49970.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async49970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async49970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49971","meta49971",1144859718,null)], null);
});

cljs.core.async.t_cljs$core$async49970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49970";

cljs.core.async.t_cljs$core$async49970.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async49970");
});

cljs.core.async.__GT_t_cljs$core$async49970 = (function cljs$core$async$__GT_t_cljs$core$async49970(f__$1,blockable__$1,meta49971){
return (new cljs.core.async.t_cljs$core$async49970(f__$1,blockable__$1,meta49971));
});

}

return (new cljs.core.async.t_cljs$core$async49970(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args49979 = [];
var len__27054__auto___49982 = arguments.length;
var i__27055__auto___49983 = (0);
while(true){
if((i__27055__auto___49983 < len__27054__auto___49982)){
args49979.push((arguments[i__27055__auto___49983]));

var G__49984 = (i__27055__auto___49983 + (1));
i__27055__auto___49983 = G__49984;
continue;
} else {
}
break;
}

var G__49981 = args49979.length;
switch (G__49981) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49979.length)].join('')));

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
var args49986 = [];
var len__27054__auto___49989 = arguments.length;
var i__27055__auto___49990 = (0);
while(true){
if((i__27055__auto___49990 < len__27054__auto___49989)){
args49986.push((arguments[i__27055__auto___49990]));

var G__49991 = (i__27055__auto___49990 + (1));
i__27055__auto___49990 = G__49991;
continue;
} else {
}
break;
}

var G__49988 = args49986.length;
switch (G__49988) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49986.length)].join('')));

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
var args49993 = [];
var len__27054__auto___49996 = arguments.length;
var i__27055__auto___49997 = (0);
while(true){
if((i__27055__auto___49997 < len__27054__auto___49996)){
args49993.push((arguments[i__27055__auto___49997]));

var G__49998 = (i__27055__auto___49997 + (1));
i__27055__auto___49997 = G__49998;
continue;
} else {
}
break;
}

var G__49995 = args49993.length;
switch (G__49995) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49993.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_50000 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_50000);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_50000,ret){
return (function (){
return fn1.call(null,val_50000);
});})(val_50000,ret))
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
var args50001 = [];
var len__27054__auto___50004 = arguments.length;
var i__27055__auto___50005 = (0);
while(true){
if((i__27055__auto___50005 < len__27054__auto___50004)){
args50001.push((arguments[i__27055__auto___50005]));

var G__50006 = (i__27055__auto___50005 + (1));
i__27055__auto___50005 = G__50006;
continue;
} else {
}
break;
}

var G__50003 = args50001.length;
switch (G__50003) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50001.length)].join('')));

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
var n__26894__auto___50008 = n;
var x_50009 = (0);
while(true){
if((x_50009 < n__26894__auto___50008)){
(a[x_50009] = (0));

var G__50010 = (x_50009 + (1));
x_50009 = G__50010;
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

var G__50011 = (i + (1));
i = G__50011;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async50015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50015 = (function (alt_flag,flag,meta50016){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta50016 = meta50016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_50017,meta50016__$1){
var self__ = this;
var _50017__$1 = this;
return (new cljs.core.async.t_cljs$core$async50015(self__.alt_flag,self__.flag,meta50016__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async50015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_50017){
var self__ = this;
var _50017__$1 = this;
return self__.meta50016;
});})(flag))
;

cljs.core.async.t_cljs$core$async50015.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async50015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async50015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50015.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50016","meta50016",1109848966,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async50015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50015";

cljs.core.async.t_cljs$core$async50015.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async50015");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async50015 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50015(alt_flag__$1,flag__$1,meta50016){
return (new cljs.core.async.t_cljs$core$async50015(alt_flag__$1,flag__$1,meta50016));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async50015(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async50021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50021 = (function (alt_handler,flag,cb,meta50022){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta50022 = meta50022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50023,meta50022__$1){
var self__ = this;
var _50023__$1 = this;
return (new cljs.core.async.t_cljs$core$async50021(self__.alt_handler,self__.flag,self__.cb,meta50022__$1));
});

cljs.core.async.t_cljs$core$async50021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50023){
var self__ = this;
var _50023__$1 = this;
return self__.meta50022;
});

cljs.core.async.t_cljs$core$async50021.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async50021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async50021.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async50021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50022","meta50022",-1855193661,null)], null);
});

cljs.core.async.t_cljs$core$async50021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50021";

cljs.core.async.t_cljs$core$async50021.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async50021");
});

cljs.core.async.__GT_t_cljs$core$async50021 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50021(alt_handler__$1,flag__$1,cb__$1,meta50022){
return (new cljs.core.async.t_cljs$core$async50021(alt_handler__$1,flag__$1,cb__$1,meta50022));
});

}

return (new cljs.core.async.t_cljs$core$async50021(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50024_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50024_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50025_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50025_SHARP_,port], null));
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
var G__50026 = (i + (1));
i = G__50026;
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
var len__27054__auto___50032 = arguments.length;
var i__27055__auto___50033 = (0);
while(true){
if((i__27055__auto___50033 < len__27054__auto___50032)){
args__27061__auto__.push((arguments[i__27055__auto___50033]));

var G__50034 = (i__27055__auto___50033 + (1));
i__27055__auto___50033 = G__50034;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50029){
var map__50030 = p__50029;
var map__50030__$1 = ((((!((map__50030 == null)))?((((map__50030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50030):map__50030);
var opts = map__50030__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50027){
var G__50028 = cljs.core.first.call(null,seq50027);
var seq50027__$1 = cljs.core.next.call(null,seq50027);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50028,seq50027__$1);
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
var args50035 = [];
var len__27054__auto___50085 = arguments.length;
var i__27055__auto___50086 = (0);
while(true){
if((i__27055__auto___50086 < len__27054__auto___50085)){
args50035.push((arguments[i__27055__auto___50086]));

var G__50087 = (i__27055__auto___50086 + (1));
i__27055__auto___50086 = G__50087;
continue;
} else {
}
break;
}

var G__50037 = args50035.length;
switch (G__50037) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50035.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28009__auto___50089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___50089){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___50089){
return (function (state_50061){
var state_val_50062 = (state_50061[(1)]);
if((state_val_50062 === (7))){
var inst_50057 = (state_50061[(2)]);
var state_50061__$1 = state_50061;
var statearr_50063_50090 = state_50061__$1;
(statearr_50063_50090[(2)] = inst_50057);

(statearr_50063_50090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (1))){
var state_50061__$1 = state_50061;
var statearr_50064_50091 = state_50061__$1;
(statearr_50064_50091[(2)] = null);

(statearr_50064_50091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (4))){
var inst_50040 = (state_50061[(7)]);
var inst_50040__$1 = (state_50061[(2)]);
var inst_50041 = (inst_50040__$1 == null);
var state_50061__$1 = (function (){var statearr_50065 = state_50061;
(statearr_50065[(7)] = inst_50040__$1);

return statearr_50065;
})();
if(cljs.core.truth_(inst_50041)){
var statearr_50066_50092 = state_50061__$1;
(statearr_50066_50092[(1)] = (5));

} else {
var statearr_50067_50093 = state_50061__$1;
(statearr_50067_50093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (13))){
var state_50061__$1 = state_50061;
var statearr_50068_50094 = state_50061__$1;
(statearr_50068_50094[(2)] = null);

(statearr_50068_50094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (6))){
var inst_50040 = (state_50061[(7)]);
var state_50061__$1 = state_50061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50061__$1,(11),to,inst_50040);
} else {
if((state_val_50062 === (3))){
var inst_50059 = (state_50061[(2)]);
var state_50061__$1 = state_50061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50061__$1,inst_50059);
} else {
if((state_val_50062 === (12))){
var state_50061__$1 = state_50061;
var statearr_50069_50095 = state_50061__$1;
(statearr_50069_50095[(2)] = null);

(statearr_50069_50095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (2))){
var state_50061__$1 = state_50061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50061__$1,(4),from);
} else {
if((state_val_50062 === (11))){
var inst_50050 = (state_50061[(2)]);
var state_50061__$1 = state_50061;
if(cljs.core.truth_(inst_50050)){
var statearr_50070_50096 = state_50061__$1;
(statearr_50070_50096[(1)] = (12));

} else {
var statearr_50071_50097 = state_50061__$1;
(statearr_50071_50097[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (9))){
var state_50061__$1 = state_50061;
var statearr_50072_50098 = state_50061__$1;
(statearr_50072_50098[(2)] = null);

(statearr_50072_50098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (5))){
var state_50061__$1 = state_50061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50073_50099 = state_50061__$1;
(statearr_50073_50099[(1)] = (8));

} else {
var statearr_50074_50100 = state_50061__$1;
(statearr_50074_50100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (14))){
var inst_50055 = (state_50061[(2)]);
var state_50061__$1 = state_50061;
var statearr_50075_50101 = state_50061__$1;
(statearr_50075_50101[(2)] = inst_50055);

(statearr_50075_50101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (10))){
var inst_50047 = (state_50061[(2)]);
var state_50061__$1 = state_50061;
var statearr_50076_50102 = state_50061__$1;
(statearr_50076_50102[(2)] = inst_50047);

(statearr_50076_50102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50062 === (8))){
var inst_50044 = cljs.core.async.close_BANG_.call(null,to);
var state_50061__$1 = state_50061;
var statearr_50077_50103 = state_50061__$1;
(statearr_50077_50103[(2)] = inst_50044);

(statearr_50077_50103[(1)] = (10));


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
});})(c__28009__auto___50089))
;
return ((function (switch__27988__auto__,c__28009__auto___50089){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_50081 = [null,null,null,null,null,null,null,null];
(statearr_50081[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_50081[(1)] = (1));

return statearr_50081;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_50061){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_50061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e50082){if((e50082 instanceof Object)){
var ex__27992__auto__ = e50082;
var statearr_50083_50104 = state_50061;
(statearr_50083_50104[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50105 = state_50061;
state_50061 = G__50105;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_50061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_50061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___50089))
})();
var state__28011__auto__ = (function (){var statearr_50084 = f__28010__auto__.call(null);
(statearr_50084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___50089);

return statearr_50084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___50089))
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
return (function (p__50293){
var vec__50294 = p__50293;
var v = cljs.core.nth.call(null,vec__50294,(0),null);
var p = cljs.core.nth.call(null,vec__50294,(1),null);
var job = vec__50294;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28009__auto___50480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___50480,res,vec__50294,v,p,job,jobs,results){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___50480,res,vec__50294,v,p,job,jobs,results){
return (function (state_50301){
var state_val_50302 = (state_50301[(1)]);
if((state_val_50302 === (1))){
var state_50301__$1 = state_50301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50301__$1,(2),res,v);
} else {
if((state_val_50302 === (2))){
var inst_50298 = (state_50301[(2)]);
var inst_50299 = cljs.core.async.close_BANG_.call(null,res);
var state_50301__$1 = (function (){var statearr_50303 = state_50301;
(statearr_50303[(7)] = inst_50298);

return statearr_50303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50301__$1,inst_50299);
} else {
return null;
}
}
});})(c__28009__auto___50480,res,vec__50294,v,p,job,jobs,results))
;
return ((function (switch__27988__auto__,c__28009__auto___50480,res,vec__50294,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_50307 = [null,null,null,null,null,null,null,null];
(statearr_50307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_50307[(1)] = (1));

return statearr_50307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_50301){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_50301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e50308){if((e50308 instanceof Object)){
var ex__27992__auto__ = e50308;
var statearr_50309_50481 = state_50301;
(statearr_50309_50481[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50482 = state_50301;
state_50301 = G__50482;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_50301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_50301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___50480,res,vec__50294,v,p,job,jobs,results))
})();
var state__28011__auto__ = (function (){var statearr_50310 = f__28010__auto__.call(null);
(statearr_50310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___50480);

return statearr_50310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___50480,res,vec__50294,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__50311){
var vec__50312 = p__50311;
var v = cljs.core.nth.call(null,vec__50312,(0),null);
var p = cljs.core.nth.call(null,vec__50312,(1),null);
var job = vec__50312;
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
var n__26894__auto___50483 = n;
var __50484 = (0);
while(true){
if((__50484 < n__26894__auto___50483)){
var G__50315_50485 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__50315_50485) {
case "compute":
var c__28009__auto___50487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50484,c__28009__auto___50487,G__50315_50485,n__26894__auto___50483,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (__50484,c__28009__auto___50487,G__50315_50485,n__26894__auto___50483,jobs,results,process,async){
return (function (state_50328){
var state_val_50329 = (state_50328[(1)]);
if((state_val_50329 === (1))){
var state_50328__$1 = state_50328;
var statearr_50330_50488 = state_50328__$1;
(statearr_50330_50488[(2)] = null);

(statearr_50330_50488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50329 === (2))){
var state_50328__$1 = state_50328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50328__$1,(4),jobs);
} else {
if((state_val_50329 === (3))){
var inst_50326 = (state_50328[(2)]);
var state_50328__$1 = state_50328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50328__$1,inst_50326);
} else {
if((state_val_50329 === (4))){
var inst_50318 = (state_50328[(2)]);
var inst_50319 = process.call(null,inst_50318);
var state_50328__$1 = state_50328;
if(cljs.core.truth_(inst_50319)){
var statearr_50331_50489 = state_50328__$1;
(statearr_50331_50489[(1)] = (5));

} else {
var statearr_50332_50490 = state_50328__$1;
(statearr_50332_50490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50329 === (5))){
var state_50328__$1 = state_50328;
var statearr_50333_50491 = state_50328__$1;
(statearr_50333_50491[(2)] = null);

(statearr_50333_50491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50329 === (6))){
var state_50328__$1 = state_50328;
var statearr_50334_50492 = state_50328__$1;
(statearr_50334_50492[(2)] = null);

(statearr_50334_50492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50329 === (7))){
var inst_50324 = (state_50328[(2)]);
var state_50328__$1 = state_50328;
var statearr_50335_50493 = state_50328__$1;
(statearr_50335_50493[(2)] = inst_50324);

(statearr_50335_50493[(1)] = (3));


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
});})(__50484,c__28009__auto___50487,G__50315_50485,n__26894__auto___50483,jobs,results,process,async))
;
return ((function (__50484,switch__27988__auto__,c__28009__auto___50487,G__50315_50485,n__26894__auto___50483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_50339 = [null,null,null,null,null,null,null];
(statearr_50339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_50339[(1)] = (1));

return statearr_50339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_50328){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_50328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e50340){if((e50340 instanceof Object)){
var ex__27992__auto__ = e50340;
var statearr_50341_50494 = state_50328;
(statearr_50341_50494[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50495 = state_50328;
state_50328 = G__50495;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_50328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_50328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(__50484,switch__27988__auto__,c__28009__auto___50487,G__50315_50485,n__26894__auto___50483,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_50342 = f__28010__auto__.call(null);
(statearr_50342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___50487);

return statearr_50342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(__50484,c__28009__auto___50487,G__50315_50485,n__26894__auto___50483,jobs,results,process,async))
);


break;
case "async":
var c__28009__auto___50496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50484,c__28009__auto___50496,G__50315_50485,n__26894__auto___50483,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (__50484,c__28009__auto___50496,G__50315_50485,n__26894__auto___50483,jobs,results,process,async){
return (function (state_50355){
var state_val_50356 = (state_50355[(1)]);
if((state_val_50356 === (1))){
var state_50355__$1 = state_50355;
var statearr_50357_50497 = state_50355__$1;
(statearr_50357_50497[(2)] = null);

(statearr_50357_50497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (2))){
var state_50355__$1 = state_50355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50355__$1,(4),jobs);
} else {
if((state_val_50356 === (3))){
var inst_50353 = (state_50355[(2)]);
var state_50355__$1 = state_50355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50355__$1,inst_50353);
} else {
if((state_val_50356 === (4))){
var inst_50345 = (state_50355[(2)]);
var inst_50346 = async.call(null,inst_50345);
var state_50355__$1 = state_50355;
if(cljs.core.truth_(inst_50346)){
var statearr_50358_50498 = state_50355__$1;
(statearr_50358_50498[(1)] = (5));

} else {
var statearr_50359_50499 = state_50355__$1;
(statearr_50359_50499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (5))){
var state_50355__$1 = state_50355;
var statearr_50360_50500 = state_50355__$1;
(statearr_50360_50500[(2)] = null);

(statearr_50360_50500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (6))){
var state_50355__$1 = state_50355;
var statearr_50361_50501 = state_50355__$1;
(statearr_50361_50501[(2)] = null);

(statearr_50361_50501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50356 === (7))){
var inst_50351 = (state_50355[(2)]);
var state_50355__$1 = state_50355;
var statearr_50362_50502 = state_50355__$1;
(statearr_50362_50502[(2)] = inst_50351);

(statearr_50362_50502[(1)] = (3));


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
});})(__50484,c__28009__auto___50496,G__50315_50485,n__26894__auto___50483,jobs,results,process,async))
;
return ((function (__50484,switch__27988__auto__,c__28009__auto___50496,G__50315_50485,n__26894__auto___50483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_50366 = [null,null,null,null,null,null,null];
(statearr_50366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_50366[(1)] = (1));

return statearr_50366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_50355){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_50355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e50367){if((e50367 instanceof Object)){
var ex__27992__auto__ = e50367;
var statearr_50368_50503 = state_50355;
(statearr_50368_50503[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50504 = state_50355;
state_50355 = G__50504;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_50355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_50355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(__50484,switch__27988__auto__,c__28009__auto___50496,G__50315_50485,n__26894__auto___50483,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_50369 = f__28010__auto__.call(null);
(statearr_50369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___50496);

return statearr_50369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(__50484,c__28009__auto___50496,G__50315_50485,n__26894__auto___50483,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__50505 = (__50484 + (1));
__50484 = G__50505;
continue;
} else {
}
break;
}

var c__28009__auto___50506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___50506,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___50506,jobs,results,process,async){
return (function (state_50391){
var state_val_50392 = (state_50391[(1)]);
if((state_val_50392 === (1))){
var state_50391__$1 = state_50391;
var statearr_50393_50507 = state_50391__$1;
(statearr_50393_50507[(2)] = null);

(statearr_50393_50507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50392 === (2))){
var state_50391__$1 = state_50391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50391__$1,(4),from);
} else {
if((state_val_50392 === (3))){
var inst_50389 = (state_50391[(2)]);
var state_50391__$1 = state_50391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50391__$1,inst_50389);
} else {
if((state_val_50392 === (4))){
var inst_50372 = (state_50391[(7)]);
var inst_50372__$1 = (state_50391[(2)]);
var inst_50373 = (inst_50372__$1 == null);
var state_50391__$1 = (function (){var statearr_50394 = state_50391;
(statearr_50394[(7)] = inst_50372__$1);

return statearr_50394;
})();
if(cljs.core.truth_(inst_50373)){
var statearr_50395_50508 = state_50391__$1;
(statearr_50395_50508[(1)] = (5));

} else {
var statearr_50396_50509 = state_50391__$1;
(statearr_50396_50509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50392 === (5))){
var inst_50375 = cljs.core.async.close_BANG_.call(null,jobs);
var state_50391__$1 = state_50391;
var statearr_50397_50510 = state_50391__$1;
(statearr_50397_50510[(2)] = inst_50375);

(statearr_50397_50510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50392 === (6))){
var inst_50372 = (state_50391[(7)]);
var inst_50377 = (state_50391[(8)]);
var inst_50377__$1 = cljs.core.async.chan.call(null,(1));
var inst_50378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50379 = [inst_50372,inst_50377__$1];
var inst_50380 = (new cljs.core.PersistentVector(null,2,(5),inst_50378,inst_50379,null));
var state_50391__$1 = (function (){var statearr_50398 = state_50391;
(statearr_50398[(8)] = inst_50377__$1);

return statearr_50398;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50391__$1,(8),jobs,inst_50380);
} else {
if((state_val_50392 === (7))){
var inst_50387 = (state_50391[(2)]);
var state_50391__$1 = state_50391;
var statearr_50399_50511 = state_50391__$1;
(statearr_50399_50511[(2)] = inst_50387);

(statearr_50399_50511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50392 === (8))){
var inst_50377 = (state_50391[(8)]);
var inst_50382 = (state_50391[(2)]);
var state_50391__$1 = (function (){var statearr_50400 = state_50391;
(statearr_50400[(9)] = inst_50382);

return statearr_50400;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50391__$1,(9),results,inst_50377);
} else {
if((state_val_50392 === (9))){
var inst_50384 = (state_50391[(2)]);
var state_50391__$1 = (function (){var statearr_50401 = state_50391;
(statearr_50401[(10)] = inst_50384);

return statearr_50401;
})();
var statearr_50402_50512 = state_50391__$1;
(statearr_50402_50512[(2)] = null);

(statearr_50402_50512[(1)] = (2));


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
});})(c__28009__auto___50506,jobs,results,process,async))
;
return ((function (switch__27988__auto__,c__28009__auto___50506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0 = (function (){
var statearr_50406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_50406[(1)] = (1));

return statearr_50406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_50391){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_50391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e50407){if((e50407 instanceof Object)){
var ex__27992__auto__ = e50407;
var statearr_50408_50513 = state_50391;
(statearr_50408_50513[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50514 = state_50391;
state_50391 = G__50514;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_50391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_50391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___50506,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_50409 = f__28010__auto__.call(null);
(statearr_50409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___50506);

return statearr_50409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___50506,jobs,results,process,async))
);


var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__,jobs,results,process,async){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__,jobs,results,process,async){
return (function (state_50447){
var state_val_50448 = (state_50447[(1)]);
if((state_val_50448 === (7))){
var inst_50443 = (state_50447[(2)]);
var state_50447__$1 = state_50447;
var statearr_50449_50515 = state_50447__$1;
(statearr_50449_50515[(2)] = inst_50443);

(statearr_50449_50515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (20))){
var state_50447__$1 = state_50447;
var statearr_50450_50516 = state_50447__$1;
(statearr_50450_50516[(2)] = null);

(statearr_50450_50516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (1))){
var state_50447__$1 = state_50447;
var statearr_50451_50517 = state_50447__$1;
(statearr_50451_50517[(2)] = null);

(statearr_50451_50517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (4))){
var inst_50412 = (state_50447[(7)]);
var inst_50412__$1 = (state_50447[(2)]);
var inst_50413 = (inst_50412__$1 == null);
var state_50447__$1 = (function (){var statearr_50452 = state_50447;
(statearr_50452[(7)] = inst_50412__$1);

return statearr_50452;
})();
if(cljs.core.truth_(inst_50413)){
var statearr_50453_50518 = state_50447__$1;
(statearr_50453_50518[(1)] = (5));

} else {
var statearr_50454_50519 = state_50447__$1;
(statearr_50454_50519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (15))){
var inst_50425 = (state_50447[(8)]);
var state_50447__$1 = state_50447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50447__$1,(18),to,inst_50425);
} else {
if((state_val_50448 === (21))){
var inst_50438 = (state_50447[(2)]);
var state_50447__$1 = state_50447;
var statearr_50455_50520 = state_50447__$1;
(statearr_50455_50520[(2)] = inst_50438);

(statearr_50455_50520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (13))){
var inst_50440 = (state_50447[(2)]);
var state_50447__$1 = (function (){var statearr_50456 = state_50447;
(statearr_50456[(9)] = inst_50440);

return statearr_50456;
})();
var statearr_50457_50521 = state_50447__$1;
(statearr_50457_50521[(2)] = null);

(statearr_50457_50521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (6))){
var inst_50412 = (state_50447[(7)]);
var state_50447__$1 = state_50447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50447__$1,(11),inst_50412);
} else {
if((state_val_50448 === (17))){
var inst_50433 = (state_50447[(2)]);
var state_50447__$1 = state_50447;
if(cljs.core.truth_(inst_50433)){
var statearr_50458_50522 = state_50447__$1;
(statearr_50458_50522[(1)] = (19));

} else {
var statearr_50459_50523 = state_50447__$1;
(statearr_50459_50523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (3))){
var inst_50445 = (state_50447[(2)]);
var state_50447__$1 = state_50447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50447__$1,inst_50445);
} else {
if((state_val_50448 === (12))){
var inst_50422 = (state_50447[(10)]);
var state_50447__$1 = state_50447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50447__$1,(14),inst_50422);
} else {
if((state_val_50448 === (2))){
var state_50447__$1 = state_50447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50447__$1,(4),results);
} else {
if((state_val_50448 === (19))){
var state_50447__$1 = state_50447;
var statearr_50460_50524 = state_50447__$1;
(statearr_50460_50524[(2)] = null);

(statearr_50460_50524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (11))){
var inst_50422 = (state_50447[(2)]);
var state_50447__$1 = (function (){var statearr_50461 = state_50447;
(statearr_50461[(10)] = inst_50422);

return statearr_50461;
})();
var statearr_50462_50525 = state_50447__$1;
(statearr_50462_50525[(2)] = null);

(statearr_50462_50525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (9))){
var state_50447__$1 = state_50447;
var statearr_50463_50526 = state_50447__$1;
(statearr_50463_50526[(2)] = null);

(statearr_50463_50526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (5))){
var state_50447__$1 = state_50447;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50464_50527 = state_50447__$1;
(statearr_50464_50527[(1)] = (8));

} else {
var statearr_50465_50528 = state_50447__$1;
(statearr_50465_50528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (14))){
var inst_50427 = (state_50447[(11)]);
var inst_50425 = (state_50447[(8)]);
var inst_50425__$1 = (state_50447[(2)]);
var inst_50426 = (inst_50425__$1 == null);
var inst_50427__$1 = cljs.core.not.call(null,inst_50426);
var state_50447__$1 = (function (){var statearr_50466 = state_50447;
(statearr_50466[(11)] = inst_50427__$1);

(statearr_50466[(8)] = inst_50425__$1);

return statearr_50466;
})();
if(inst_50427__$1){
var statearr_50467_50529 = state_50447__$1;
(statearr_50467_50529[(1)] = (15));

} else {
var statearr_50468_50530 = state_50447__$1;
(statearr_50468_50530[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (16))){
var inst_50427 = (state_50447[(11)]);
var state_50447__$1 = state_50447;
var statearr_50469_50531 = state_50447__$1;
(statearr_50469_50531[(2)] = inst_50427);

(statearr_50469_50531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (10))){
var inst_50419 = (state_50447[(2)]);
var state_50447__$1 = state_50447;
var statearr_50470_50532 = state_50447__$1;
(statearr_50470_50532[(2)] = inst_50419);

(statearr_50470_50532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (18))){
var inst_50430 = (state_50447[(2)]);
var state_50447__$1 = state_50447;
var statearr_50471_50533 = state_50447__$1;
(statearr_50471_50533[(2)] = inst_50430);

(statearr_50471_50533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50448 === (8))){
var inst_50416 = cljs.core.async.close_BANG_.call(null,to);
var state_50447__$1 = state_50447;
var statearr_50472_50534 = state_50447__$1;
(statearr_50472_50534[(2)] = inst_50416);

(statearr_50472_50534[(1)] = (10));


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
var statearr_50476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__);

(statearr_50476[(1)] = (1));

return statearr_50476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1 = (function (state_50447){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_50447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e50477){if((e50477 instanceof Object)){
var ex__27992__auto__ = e50477;
var statearr_50478_50535 = state_50447;
(statearr_50478_50535[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50536 = state_50447;
state_50447 = G__50536;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__ = function(state_50447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1.call(this,state_50447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,jobs,results,process,async))
})();
var state__28011__auto__ = (function (){var statearr_50479 = f__28010__auto__.call(null);
(statearr_50479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_50479;
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
var args50537 = [];
var len__27054__auto___50540 = arguments.length;
var i__27055__auto___50541 = (0);
while(true){
if((i__27055__auto___50541 < len__27054__auto___50540)){
args50537.push((arguments[i__27055__auto___50541]));

var G__50542 = (i__27055__auto___50541 + (1));
i__27055__auto___50541 = G__50542;
continue;
} else {
}
break;
}

var G__50539 = args50537.length;
switch (G__50539) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50537.length)].join('')));

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
var args50544 = [];
var len__27054__auto___50547 = arguments.length;
var i__27055__auto___50548 = (0);
while(true){
if((i__27055__auto___50548 < len__27054__auto___50547)){
args50544.push((arguments[i__27055__auto___50548]));

var G__50549 = (i__27055__auto___50548 + (1));
i__27055__auto___50548 = G__50549;
continue;
} else {
}
break;
}

var G__50546 = args50544.length;
switch (G__50546) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50544.length)].join('')));

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
var args50551 = [];
var len__27054__auto___50604 = arguments.length;
var i__27055__auto___50605 = (0);
while(true){
if((i__27055__auto___50605 < len__27054__auto___50604)){
args50551.push((arguments[i__27055__auto___50605]));

var G__50606 = (i__27055__auto___50605 + (1));
i__27055__auto___50605 = G__50606;
continue;
} else {
}
break;
}

var G__50553 = args50551.length;
switch (G__50553) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50551.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28009__auto___50608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___50608,tc,fc){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___50608,tc,fc){
return (function (state_50579){
var state_val_50580 = (state_50579[(1)]);
if((state_val_50580 === (7))){
var inst_50575 = (state_50579[(2)]);
var state_50579__$1 = state_50579;
var statearr_50581_50609 = state_50579__$1;
(statearr_50581_50609[(2)] = inst_50575);

(statearr_50581_50609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (1))){
var state_50579__$1 = state_50579;
var statearr_50582_50610 = state_50579__$1;
(statearr_50582_50610[(2)] = null);

(statearr_50582_50610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (4))){
var inst_50556 = (state_50579[(7)]);
var inst_50556__$1 = (state_50579[(2)]);
var inst_50557 = (inst_50556__$1 == null);
var state_50579__$1 = (function (){var statearr_50583 = state_50579;
(statearr_50583[(7)] = inst_50556__$1);

return statearr_50583;
})();
if(cljs.core.truth_(inst_50557)){
var statearr_50584_50611 = state_50579__$1;
(statearr_50584_50611[(1)] = (5));

} else {
var statearr_50585_50612 = state_50579__$1;
(statearr_50585_50612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (13))){
var state_50579__$1 = state_50579;
var statearr_50586_50613 = state_50579__$1;
(statearr_50586_50613[(2)] = null);

(statearr_50586_50613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (6))){
var inst_50556 = (state_50579[(7)]);
var inst_50562 = p.call(null,inst_50556);
var state_50579__$1 = state_50579;
if(cljs.core.truth_(inst_50562)){
var statearr_50587_50614 = state_50579__$1;
(statearr_50587_50614[(1)] = (9));

} else {
var statearr_50588_50615 = state_50579__$1;
(statearr_50588_50615[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (3))){
var inst_50577 = (state_50579[(2)]);
var state_50579__$1 = state_50579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50579__$1,inst_50577);
} else {
if((state_val_50580 === (12))){
var state_50579__$1 = state_50579;
var statearr_50589_50616 = state_50579__$1;
(statearr_50589_50616[(2)] = null);

(statearr_50589_50616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (2))){
var state_50579__$1 = state_50579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50579__$1,(4),ch);
} else {
if((state_val_50580 === (11))){
var inst_50556 = (state_50579[(7)]);
var inst_50566 = (state_50579[(2)]);
var state_50579__$1 = state_50579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50579__$1,(8),inst_50566,inst_50556);
} else {
if((state_val_50580 === (9))){
var state_50579__$1 = state_50579;
var statearr_50590_50617 = state_50579__$1;
(statearr_50590_50617[(2)] = tc);

(statearr_50590_50617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (5))){
var inst_50559 = cljs.core.async.close_BANG_.call(null,tc);
var inst_50560 = cljs.core.async.close_BANG_.call(null,fc);
var state_50579__$1 = (function (){var statearr_50591 = state_50579;
(statearr_50591[(8)] = inst_50559);

return statearr_50591;
})();
var statearr_50592_50618 = state_50579__$1;
(statearr_50592_50618[(2)] = inst_50560);

(statearr_50592_50618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (14))){
var inst_50573 = (state_50579[(2)]);
var state_50579__$1 = state_50579;
var statearr_50593_50619 = state_50579__$1;
(statearr_50593_50619[(2)] = inst_50573);

(statearr_50593_50619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (10))){
var state_50579__$1 = state_50579;
var statearr_50594_50620 = state_50579__$1;
(statearr_50594_50620[(2)] = fc);

(statearr_50594_50620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50580 === (8))){
var inst_50568 = (state_50579[(2)]);
var state_50579__$1 = state_50579;
if(cljs.core.truth_(inst_50568)){
var statearr_50595_50621 = state_50579__$1;
(statearr_50595_50621[(1)] = (12));

} else {
var statearr_50596_50622 = state_50579__$1;
(statearr_50596_50622[(1)] = (13));

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
});})(c__28009__auto___50608,tc,fc))
;
return ((function (switch__27988__auto__,c__28009__auto___50608,tc,fc){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_50600 = [null,null,null,null,null,null,null,null,null];
(statearr_50600[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_50600[(1)] = (1));

return statearr_50600;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_50579){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_50579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e50601){if((e50601 instanceof Object)){
var ex__27992__auto__ = e50601;
var statearr_50602_50623 = state_50579;
(statearr_50602_50623[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50624 = state_50579;
state_50579 = G__50624;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_50579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_50579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___50608,tc,fc))
})();
var state__28011__auto__ = (function (){var statearr_50603 = f__28010__auto__.call(null);
(statearr_50603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___50608);

return statearr_50603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___50608,tc,fc))
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
return (function (state_50688){
var state_val_50689 = (state_50688[(1)]);
if((state_val_50689 === (7))){
var inst_50684 = (state_50688[(2)]);
var state_50688__$1 = state_50688;
var statearr_50690_50711 = state_50688__$1;
(statearr_50690_50711[(2)] = inst_50684);

(statearr_50690_50711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (1))){
var inst_50668 = init;
var state_50688__$1 = (function (){var statearr_50691 = state_50688;
(statearr_50691[(7)] = inst_50668);

return statearr_50691;
})();
var statearr_50692_50712 = state_50688__$1;
(statearr_50692_50712[(2)] = null);

(statearr_50692_50712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (4))){
var inst_50671 = (state_50688[(8)]);
var inst_50671__$1 = (state_50688[(2)]);
var inst_50672 = (inst_50671__$1 == null);
var state_50688__$1 = (function (){var statearr_50693 = state_50688;
(statearr_50693[(8)] = inst_50671__$1);

return statearr_50693;
})();
if(cljs.core.truth_(inst_50672)){
var statearr_50694_50713 = state_50688__$1;
(statearr_50694_50713[(1)] = (5));

} else {
var statearr_50695_50714 = state_50688__$1;
(statearr_50695_50714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (6))){
var inst_50675 = (state_50688[(9)]);
var inst_50671 = (state_50688[(8)]);
var inst_50668 = (state_50688[(7)]);
var inst_50675__$1 = f.call(null,inst_50668,inst_50671);
var inst_50676 = cljs.core.reduced_QMARK_.call(null,inst_50675__$1);
var state_50688__$1 = (function (){var statearr_50696 = state_50688;
(statearr_50696[(9)] = inst_50675__$1);

return statearr_50696;
})();
if(inst_50676){
var statearr_50697_50715 = state_50688__$1;
(statearr_50697_50715[(1)] = (8));

} else {
var statearr_50698_50716 = state_50688__$1;
(statearr_50698_50716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (3))){
var inst_50686 = (state_50688[(2)]);
var state_50688__$1 = state_50688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50688__$1,inst_50686);
} else {
if((state_val_50689 === (2))){
var state_50688__$1 = state_50688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50688__$1,(4),ch);
} else {
if((state_val_50689 === (9))){
var inst_50675 = (state_50688[(9)]);
var inst_50668 = inst_50675;
var state_50688__$1 = (function (){var statearr_50699 = state_50688;
(statearr_50699[(7)] = inst_50668);

return statearr_50699;
})();
var statearr_50700_50717 = state_50688__$1;
(statearr_50700_50717[(2)] = null);

(statearr_50700_50717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (5))){
var inst_50668 = (state_50688[(7)]);
var state_50688__$1 = state_50688;
var statearr_50701_50718 = state_50688__$1;
(statearr_50701_50718[(2)] = inst_50668);

(statearr_50701_50718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (10))){
var inst_50682 = (state_50688[(2)]);
var state_50688__$1 = state_50688;
var statearr_50702_50719 = state_50688__$1;
(statearr_50702_50719[(2)] = inst_50682);

(statearr_50702_50719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (8))){
var inst_50675 = (state_50688[(9)]);
var inst_50678 = cljs.core.deref.call(null,inst_50675);
var state_50688__$1 = state_50688;
var statearr_50703_50720 = state_50688__$1;
(statearr_50703_50720[(2)] = inst_50678);

(statearr_50703_50720[(1)] = (10));


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
var statearr_50707 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50707[(0)] = cljs$core$async$reduce_$_state_machine__27989__auto__);

(statearr_50707[(1)] = (1));

return statearr_50707;
});
var cljs$core$async$reduce_$_state_machine__27989__auto____1 = (function (state_50688){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_50688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e50708){if((e50708 instanceof Object)){
var ex__27992__auto__ = e50708;
var statearr_50709_50721 = state_50688;
(statearr_50709_50721[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50722 = state_50688;
state_50688 = G__50722;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27989__auto__ = function(state_50688){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27989__auto____1.call(this,state_50688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27989__auto____0;
cljs$core$async$reduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27989__auto____1;
return cljs$core$async$reduce_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_50710 = f__28010__auto__.call(null);
(statearr_50710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_50710;
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
return (function (state_50742){
var state_val_50743 = (state_50742[(1)]);
if((state_val_50743 === (1))){
var inst_50737 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_50742__$1 = state_50742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50742__$1,(2),inst_50737);
} else {
if((state_val_50743 === (2))){
var inst_50739 = (state_50742[(2)]);
var inst_50740 = f__$1.call(null,inst_50739);
var state_50742__$1 = state_50742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50742__$1,inst_50740);
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
var statearr_50747 = [null,null,null,null,null,null,null];
(statearr_50747[(0)] = cljs$core$async$transduce_$_state_machine__27989__auto__);

(statearr_50747[(1)] = (1));

return statearr_50747;
});
var cljs$core$async$transduce_$_state_machine__27989__auto____1 = (function (state_50742){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_50742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e50748){if((e50748 instanceof Object)){
var ex__27992__auto__ = e50748;
var statearr_50749_50751 = state_50742;
(statearr_50749_50751[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50752 = state_50742;
state_50742 = G__50752;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27989__auto__ = function(state_50742){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27989__auto____1.call(this,state_50742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27989__auto____0;
cljs$core$async$transduce_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27989__auto____1;
return cljs$core$async$transduce_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,f__$1))
})();
var state__28011__auto__ = (function (){var statearr_50750 = f__28010__auto__.call(null);
(statearr_50750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_50750;
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
var args50753 = [];
var len__27054__auto___50805 = arguments.length;
var i__27055__auto___50806 = (0);
while(true){
if((i__27055__auto___50806 < len__27054__auto___50805)){
args50753.push((arguments[i__27055__auto___50806]));

var G__50807 = (i__27055__auto___50806 + (1));
i__27055__auto___50806 = G__50807;
continue;
} else {
}
break;
}

var G__50755 = args50753.length;
switch (G__50755) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50753.length)].join('')));

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
return (function (state_50780){
var state_val_50781 = (state_50780[(1)]);
if((state_val_50781 === (7))){
var inst_50762 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
var statearr_50782_50809 = state_50780__$1;
(statearr_50782_50809[(2)] = inst_50762);

(statearr_50782_50809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (1))){
var inst_50756 = cljs.core.seq.call(null,coll);
var inst_50757 = inst_50756;
var state_50780__$1 = (function (){var statearr_50783 = state_50780;
(statearr_50783[(7)] = inst_50757);

return statearr_50783;
})();
var statearr_50784_50810 = state_50780__$1;
(statearr_50784_50810[(2)] = null);

(statearr_50784_50810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (4))){
var inst_50757 = (state_50780[(7)]);
var inst_50760 = cljs.core.first.call(null,inst_50757);
var state_50780__$1 = state_50780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50780__$1,(7),ch,inst_50760);
} else {
if((state_val_50781 === (13))){
var inst_50774 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
var statearr_50785_50811 = state_50780__$1;
(statearr_50785_50811[(2)] = inst_50774);

(statearr_50785_50811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (6))){
var inst_50765 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
if(cljs.core.truth_(inst_50765)){
var statearr_50786_50812 = state_50780__$1;
(statearr_50786_50812[(1)] = (8));

} else {
var statearr_50787_50813 = state_50780__$1;
(statearr_50787_50813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (3))){
var inst_50778 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50780__$1,inst_50778);
} else {
if((state_val_50781 === (12))){
var state_50780__$1 = state_50780;
var statearr_50788_50814 = state_50780__$1;
(statearr_50788_50814[(2)] = null);

(statearr_50788_50814[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (2))){
var inst_50757 = (state_50780[(7)]);
var state_50780__$1 = state_50780;
if(cljs.core.truth_(inst_50757)){
var statearr_50789_50815 = state_50780__$1;
(statearr_50789_50815[(1)] = (4));

} else {
var statearr_50790_50816 = state_50780__$1;
(statearr_50790_50816[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (11))){
var inst_50771 = cljs.core.async.close_BANG_.call(null,ch);
var state_50780__$1 = state_50780;
var statearr_50791_50817 = state_50780__$1;
(statearr_50791_50817[(2)] = inst_50771);

(statearr_50791_50817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (9))){
var state_50780__$1 = state_50780;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50792_50818 = state_50780__$1;
(statearr_50792_50818[(1)] = (11));

} else {
var statearr_50793_50819 = state_50780__$1;
(statearr_50793_50819[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (5))){
var inst_50757 = (state_50780[(7)]);
var state_50780__$1 = state_50780;
var statearr_50794_50820 = state_50780__$1;
(statearr_50794_50820[(2)] = inst_50757);

(statearr_50794_50820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (10))){
var inst_50776 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
var statearr_50795_50821 = state_50780__$1;
(statearr_50795_50821[(2)] = inst_50776);

(statearr_50795_50821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (8))){
var inst_50757 = (state_50780[(7)]);
var inst_50767 = cljs.core.next.call(null,inst_50757);
var inst_50757__$1 = inst_50767;
var state_50780__$1 = (function (){var statearr_50796 = state_50780;
(statearr_50796[(7)] = inst_50757__$1);

return statearr_50796;
})();
var statearr_50797_50822 = state_50780__$1;
(statearr_50797_50822[(2)] = null);

(statearr_50797_50822[(1)] = (2));


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
var statearr_50801 = [null,null,null,null,null,null,null,null];
(statearr_50801[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_50801[(1)] = (1));

return statearr_50801;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_50780){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_50780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e50802){if((e50802 instanceof Object)){
var ex__27992__auto__ = e50802;
var statearr_50803_50823 = state_50780;
(statearr_50803_50823[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50824 = state_50780;
state_50780 = G__50824;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_50780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_50780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_50804 = f__28010__auto__.call(null);
(statearr_50804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_50804;
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
if(typeof cljs.core.async.t_cljs$core$async51050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51050 = (function (mult,ch,cs,meta51051){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta51051 = meta51051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_51052,meta51051__$1){
var self__ = this;
var _51052__$1 = this;
return (new cljs.core.async.t_cljs$core$async51050(self__.mult,self__.ch,self__.cs,meta51051__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async51050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_51052){
var self__ = this;
var _51052__$1 = this;
return self__.meta51051;
});})(cs))
;

cljs.core.async.t_cljs$core$async51050.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async51050.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async51050.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async51050.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51050.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51050.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51050.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51051","meta51051",-1119900949,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async51050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51050";

cljs.core.async.t_cljs$core$async51050.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async51050");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async51050 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async51050(mult__$1,ch__$1,cs__$1,meta51051){
return (new cljs.core.async.t_cljs$core$async51050(mult__$1,ch__$1,cs__$1,meta51051));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async51050(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28009__auto___51275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___51275,cs,m,dchan,dctr,done){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___51275,cs,m,dchan,dctr,done){
return (function (state_51187){
var state_val_51188 = (state_51187[(1)]);
if((state_val_51188 === (7))){
var inst_51183 = (state_51187[(2)]);
var state_51187__$1 = state_51187;
var statearr_51189_51276 = state_51187__$1;
(statearr_51189_51276[(2)] = inst_51183);

(statearr_51189_51276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (20))){
var inst_51086 = (state_51187[(7)]);
var inst_51098 = cljs.core.first.call(null,inst_51086);
var inst_51099 = cljs.core.nth.call(null,inst_51098,(0),null);
var inst_51100 = cljs.core.nth.call(null,inst_51098,(1),null);
var state_51187__$1 = (function (){var statearr_51190 = state_51187;
(statearr_51190[(8)] = inst_51099);

return statearr_51190;
})();
if(cljs.core.truth_(inst_51100)){
var statearr_51191_51277 = state_51187__$1;
(statearr_51191_51277[(1)] = (22));

} else {
var statearr_51192_51278 = state_51187__$1;
(statearr_51192_51278[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (27))){
var inst_51130 = (state_51187[(9)]);
var inst_51128 = (state_51187[(10)]);
var inst_51135 = (state_51187[(11)]);
var inst_51055 = (state_51187[(12)]);
var inst_51135__$1 = cljs.core._nth.call(null,inst_51128,inst_51130);
var inst_51136 = cljs.core.async.put_BANG_.call(null,inst_51135__$1,inst_51055,done);
var state_51187__$1 = (function (){var statearr_51193 = state_51187;
(statearr_51193[(11)] = inst_51135__$1);

return statearr_51193;
})();
if(cljs.core.truth_(inst_51136)){
var statearr_51194_51279 = state_51187__$1;
(statearr_51194_51279[(1)] = (30));

} else {
var statearr_51195_51280 = state_51187__$1;
(statearr_51195_51280[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (1))){
var state_51187__$1 = state_51187;
var statearr_51196_51281 = state_51187__$1;
(statearr_51196_51281[(2)] = null);

(statearr_51196_51281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (24))){
var inst_51086 = (state_51187[(7)]);
var inst_51105 = (state_51187[(2)]);
var inst_51106 = cljs.core.next.call(null,inst_51086);
var inst_51064 = inst_51106;
var inst_51065 = null;
var inst_51066 = (0);
var inst_51067 = (0);
var state_51187__$1 = (function (){var statearr_51197 = state_51187;
(statearr_51197[(13)] = inst_51064);

(statearr_51197[(14)] = inst_51105);

(statearr_51197[(15)] = inst_51065);

(statearr_51197[(16)] = inst_51066);

(statearr_51197[(17)] = inst_51067);

return statearr_51197;
})();
var statearr_51198_51282 = state_51187__$1;
(statearr_51198_51282[(2)] = null);

(statearr_51198_51282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (39))){
var state_51187__$1 = state_51187;
var statearr_51202_51283 = state_51187__$1;
(statearr_51202_51283[(2)] = null);

(statearr_51202_51283[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (4))){
var inst_51055 = (state_51187[(12)]);
var inst_51055__$1 = (state_51187[(2)]);
var inst_51056 = (inst_51055__$1 == null);
var state_51187__$1 = (function (){var statearr_51203 = state_51187;
(statearr_51203[(12)] = inst_51055__$1);

return statearr_51203;
})();
if(cljs.core.truth_(inst_51056)){
var statearr_51204_51284 = state_51187__$1;
(statearr_51204_51284[(1)] = (5));

} else {
var statearr_51205_51285 = state_51187__$1;
(statearr_51205_51285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (15))){
var inst_51064 = (state_51187[(13)]);
var inst_51065 = (state_51187[(15)]);
var inst_51066 = (state_51187[(16)]);
var inst_51067 = (state_51187[(17)]);
var inst_51082 = (state_51187[(2)]);
var inst_51083 = (inst_51067 + (1));
var tmp51199 = inst_51064;
var tmp51200 = inst_51065;
var tmp51201 = inst_51066;
var inst_51064__$1 = tmp51199;
var inst_51065__$1 = tmp51200;
var inst_51066__$1 = tmp51201;
var inst_51067__$1 = inst_51083;
var state_51187__$1 = (function (){var statearr_51206 = state_51187;
(statearr_51206[(13)] = inst_51064__$1);

(statearr_51206[(15)] = inst_51065__$1);

(statearr_51206[(18)] = inst_51082);

(statearr_51206[(16)] = inst_51066__$1);

(statearr_51206[(17)] = inst_51067__$1);

return statearr_51206;
})();
var statearr_51207_51286 = state_51187__$1;
(statearr_51207_51286[(2)] = null);

(statearr_51207_51286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (21))){
var inst_51109 = (state_51187[(2)]);
var state_51187__$1 = state_51187;
var statearr_51211_51287 = state_51187__$1;
(statearr_51211_51287[(2)] = inst_51109);

(statearr_51211_51287[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (31))){
var inst_51135 = (state_51187[(11)]);
var inst_51139 = done.call(null,null);
var inst_51140 = cljs.core.async.untap_STAR_.call(null,m,inst_51135);
var state_51187__$1 = (function (){var statearr_51212 = state_51187;
(statearr_51212[(19)] = inst_51139);

return statearr_51212;
})();
var statearr_51213_51288 = state_51187__$1;
(statearr_51213_51288[(2)] = inst_51140);

(statearr_51213_51288[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (32))){
var inst_51130 = (state_51187[(9)]);
var inst_51129 = (state_51187[(20)]);
var inst_51127 = (state_51187[(21)]);
var inst_51128 = (state_51187[(10)]);
var inst_51142 = (state_51187[(2)]);
var inst_51143 = (inst_51130 + (1));
var tmp51208 = inst_51129;
var tmp51209 = inst_51127;
var tmp51210 = inst_51128;
var inst_51127__$1 = tmp51209;
var inst_51128__$1 = tmp51210;
var inst_51129__$1 = tmp51208;
var inst_51130__$1 = inst_51143;
var state_51187__$1 = (function (){var statearr_51214 = state_51187;
(statearr_51214[(9)] = inst_51130__$1);

(statearr_51214[(20)] = inst_51129__$1);

(statearr_51214[(21)] = inst_51127__$1);

(statearr_51214[(10)] = inst_51128__$1);

(statearr_51214[(22)] = inst_51142);

return statearr_51214;
})();
var statearr_51215_51289 = state_51187__$1;
(statearr_51215_51289[(2)] = null);

(statearr_51215_51289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (40))){
var inst_51155 = (state_51187[(23)]);
var inst_51159 = done.call(null,null);
var inst_51160 = cljs.core.async.untap_STAR_.call(null,m,inst_51155);
var state_51187__$1 = (function (){var statearr_51216 = state_51187;
(statearr_51216[(24)] = inst_51159);

return statearr_51216;
})();
var statearr_51217_51290 = state_51187__$1;
(statearr_51217_51290[(2)] = inst_51160);

(statearr_51217_51290[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (33))){
var inst_51146 = (state_51187[(25)]);
var inst_51148 = cljs.core.chunked_seq_QMARK_.call(null,inst_51146);
var state_51187__$1 = state_51187;
if(inst_51148){
var statearr_51218_51291 = state_51187__$1;
(statearr_51218_51291[(1)] = (36));

} else {
var statearr_51219_51292 = state_51187__$1;
(statearr_51219_51292[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (13))){
var inst_51076 = (state_51187[(26)]);
var inst_51079 = cljs.core.async.close_BANG_.call(null,inst_51076);
var state_51187__$1 = state_51187;
var statearr_51220_51293 = state_51187__$1;
(statearr_51220_51293[(2)] = inst_51079);

(statearr_51220_51293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (22))){
var inst_51099 = (state_51187[(8)]);
var inst_51102 = cljs.core.async.close_BANG_.call(null,inst_51099);
var state_51187__$1 = state_51187;
var statearr_51221_51294 = state_51187__$1;
(statearr_51221_51294[(2)] = inst_51102);

(statearr_51221_51294[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (36))){
var inst_51146 = (state_51187[(25)]);
var inst_51150 = cljs.core.chunk_first.call(null,inst_51146);
var inst_51151 = cljs.core.chunk_rest.call(null,inst_51146);
var inst_51152 = cljs.core.count.call(null,inst_51150);
var inst_51127 = inst_51151;
var inst_51128 = inst_51150;
var inst_51129 = inst_51152;
var inst_51130 = (0);
var state_51187__$1 = (function (){var statearr_51222 = state_51187;
(statearr_51222[(9)] = inst_51130);

(statearr_51222[(20)] = inst_51129);

(statearr_51222[(21)] = inst_51127);

(statearr_51222[(10)] = inst_51128);

return statearr_51222;
})();
var statearr_51223_51295 = state_51187__$1;
(statearr_51223_51295[(2)] = null);

(statearr_51223_51295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (41))){
var inst_51146 = (state_51187[(25)]);
var inst_51162 = (state_51187[(2)]);
var inst_51163 = cljs.core.next.call(null,inst_51146);
var inst_51127 = inst_51163;
var inst_51128 = null;
var inst_51129 = (0);
var inst_51130 = (0);
var state_51187__$1 = (function (){var statearr_51224 = state_51187;
(statearr_51224[(27)] = inst_51162);

(statearr_51224[(9)] = inst_51130);

(statearr_51224[(20)] = inst_51129);

(statearr_51224[(21)] = inst_51127);

(statearr_51224[(10)] = inst_51128);

return statearr_51224;
})();
var statearr_51225_51296 = state_51187__$1;
(statearr_51225_51296[(2)] = null);

(statearr_51225_51296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (43))){
var state_51187__$1 = state_51187;
var statearr_51226_51297 = state_51187__$1;
(statearr_51226_51297[(2)] = null);

(statearr_51226_51297[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (29))){
var inst_51171 = (state_51187[(2)]);
var state_51187__$1 = state_51187;
var statearr_51227_51298 = state_51187__$1;
(statearr_51227_51298[(2)] = inst_51171);

(statearr_51227_51298[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (44))){
var inst_51180 = (state_51187[(2)]);
var state_51187__$1 = (function (){var statearr_51228 = state_51187;
(statearr_51228[(28)] = inst_51180);

return statearr_51228;
})();
var statearr_51229_51299 = state_51187__$1;
(statearr_51229_51299[(2)] = null);

(statearr_51229_51299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (6))){
var inst_51119 = (state_51187[(29)]);
var inst_51118 = cljs.core.deref.call(null,cs);
var inst_51119__$1 = cljs.core.keys.call(null,inst_51118);
var inst_51120 = cljs.core.count.call(null,inst_51119__$1);
var inst_51121 = cljs.core.reset_BANG_.call(null,dctr,inst_51120);
var inst_51126 = cljs.core.seq.call(null,inst_51119__$1);
var inst_51127 = inst_51126;
var inst_51128 = null;
var inst_51129 = (0);
var inst_51130 = (0);
var state_51187__$1 = (function (){var statearr_51230 = state_51187;
(statearr_51230[(30)] = inst_51121);

(statearr_51230[(9)] = inst_51130);

(statearr_51230[(20)] = inst_51129);

(statearr_51230[(21)] = inst_51127);

(statearr_51230[(10)] = inst_51128);

(statearr_51230[(29)] = inst_51119__$1);

return statearr_51230;
})();
var statearr_51231_51300 = state_51187__$1;
(statearr_51231_51300[(2)] = null);

(statearr_51231_51300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (28))){
var inst_51127 = (state_51187[(21)]);
var inst_51146 = (state_51187[(25)]);
var inst_51146__$1 = cljs.core.seq.call(null,inst_51127);
var state_51187__$1 = (function (){var statearr_51232 = state_51187;
(statearr_51232[(25)] = inst_51146__$1);

return statearr_51232;
})();
if(inst_51146__$1){
var statearr_51233_51301 = state_51187__$1;
(statearr_51233_51301[(1)] = (33));

} else {
var statearr_51234_51302 = state_51187__$1;
(statearr_51234_51302[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (25))){
var inst_51130 = (state_51187[(9)]);
var inst_51129 = (state_51187[(20)]);
var inst_51132 = (inst_51130 < inst_51129);
var inst_51133 = inst_51132;
var state_51187__$1 = state_51187;
if(cljs.core.truth_(inst_51133)){
var statearr_51235_51303 = state_51187__$1;
(statearr_51235_51303[(1)] = (27));

} else {
var statearr_51236_51304 = state_51187__$1;
(statearr_51236_51304[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (34))){
var state_51187__$1 = state_51187;
var statearr_51237_51305 = state_51187__$1;
(statearr_51237_51305[(2)] = null);

(statearr_51237_51305[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (17))){
var state_51187__$1 = state_51187;
var statearr_51238_51306 = state_51187__$1;
(statearr_51238_51306[(2)] = null);

(statearr_51238_51306[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (3))){
var inst_51185 = (state_51187[(2)]);
var state_51187__$1 = state_51187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51187__$1,inst_51185);
} else {
if((state_val_51188 === (12))){
var inst_51114 = (state_51187[(2)]);
var state_51187__$1 = state_51187;
var statearr_51239_51307 = state_51187__$1;
(statearr_51239_51307[(2)] = inst_51114);

(statearr_51239_51307[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (2))){
var state_51187__$1 = state_51187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51187__$1,(4),ch);
} else {
if((state_val_51188 === (23))){
var state_51187__$1 = state_51187;
var statearr_51240_51308 = state_51187__$1;
(statearr_51240_51308[(2)] = null);

(statearr_51240_51308[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (35))){
var inst_51169 = (state_51187[(2)]);
var state_51187__$1 = state_51187;
var statearr_51241_51309 = state_51187__$1;
(statearr_51241_51309[(2)] = inst_51169);

(statearr_51241_51309[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (19))){
var inst_51086 = (state_51187[(7)]);
var inst_51090 = cljs.core.chunk_first.call(null,inst_51086);
var inst_51091 = cljs.core.chunk_rest.call(null,inst_51086);
var inst_51092 = cljs.core.count.call(null,inst_51090);
var inst_51064 = inst_51091;
var inst_51065 = inst_51090;
var inst_51066 = inst_51092;
var inst_51067 = (0);
var state_51187__$1 = (function (){var statearr_51242 = state_51187;
(statearr_51242[(13)] = inst_51064);

(statearr_51242[(15)] = inst_51065);

(statearr_51242[(16)] = inst_51066);

(statearr_51242[(17)] = inst_51067);

return statearr_51242;
})();
var statearr_51243_51310 = state_51187__$1;
(statearr_51243_51310[(2)] = null);

(statearr_51243_51310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (11))){
var inst_51064 = (state_51187[(13)]);
var inst_51086 = (state_51187[(7)]);
var inst_51086__$1 = cljs.core.seq.call(null,inst_51064);
var state_51187__$1 = (function (){var statearr_51244 = state_51187;
(statearr_51244[(7)] = inst_51086__$1);

return statearr_51244;
})();
if(inst_51086__$1){
var statearr_51245_51311 = state_51187__$1;
(statearr_51245_51311[(1)] = (16));

} else {
var statearr_51246_51312 = state_51187__$1;
(statearr_51246_51312[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (9))){
var inst_51116 = (state_51187[(2)]);
var state_51187__$1 = state_51187;
var statearr_51247_51313 = state_51187__$1;
(statearr_51247_51313[(2)] = inst_51116);

(statearr_51247_51313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (5))){
var inst_51062 = cljs.core.deref.call(null,cs);
var inst_51063 = cljs.core.seq.call(null,inst_51062);
var inst_51064 = inst_51063;
var inst_51065 = null;
var inst_51066 = (0);
var inst_51067 = (0);
var state_51187__$1 = (function (){var statearr_51248 = state_51187;
(statearr_51248[(13)] = inst_51064);

(statearr_51248[(15)] = inst_51065);

(statearr_51248[(16)] = inst_51066);

(statearr_51248[(17)] = inst_51067);

return statearr_51248;
})();
var statearr_51249_51314 = state_51187__$1;
(statearr_51249_51314[(2)] = null);

(statearr_51249_51314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (14))){
var state_51187__$1 = state_51187;
var statearr_51250_51315 = state_51187__$1;
(statearr_51250_51315[(2)] = null);

(statearr_51250_51315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (45))){
var inst_51177 = (state_51187[(2)]);
var state_51187__$1 = state_51187;
var statearr_51251_51316 = state_51187__$1;
(statearr_51251_51316[(2)] = inst_51177);

(statearr_51251_51316[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (26))){
var inst_51119 = (state_51187[(29)]);
var inst_51173 = (state_51187[(2)]);
var inst_51174 = cljs.core.seq.call(null,inst_51119);
var state_51187__$1 = (function (){var statearr_51252 = state_51187;
(statearr_51252[(31)] = inst_51173);

return statearr_51252;
})();
if(inst_51174){
var statearr_51253_51317 = state_51187__$1;
(statearr_51253_51317[(1)] = (42));

} else {
var statearr_51254_51318 = state_51187__$1;
(statearr_51254_51318[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (16))){
var inst_51086 = (state_51187[(7)]);
var inst_51088 = cljs.core.chunked_seq_QMARK_.call(null,inst_51086);
var state_51187__$1 = state_51187;
if(inst_51088){
var statearr_51255_51319 = state_51187__$1;
(statearr_51255_51319[(1)] = (19));

} else {
var statearr_51256_51320 = state_51187__$1;
(statearr_51256_51320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (38))){
var inst_51166 = (state_51187[(2)]);
var state_51187__$1 = state_51187;
var statearr_51257_51321 = state_51187__$1;
(statearr_51257_51321[(2)] = inst_51166);

(statearr_51257_51321[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (30))){
var state_51187__$1 = state_51187;
var statearr_51258_51322 = state_51187__$1;
(statearr_51258_51322[(2)] = null);

(statearr_51258_51322[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (10))){
var inst_51065 = (state_51187[(15)]);
var inst_51067 = (state_51187[(17)]);
var inst_51075 = cljs.core._nth.call(null,inst_51065,inst_51067);
var inst_51076 = cljs.core.nth.call(null,inst_51075,(0),null);
var inst_51077 = cljs.core.nth.call(null,inst_51075,(1),null);
var state_51187__$1 = (function (){var statearr_51259 = state_51187;
(statearr_51259[(26)] = inst_51076);

return statearr_51259;
})();
if(cljs.core.truth_(inst_51077)){
var statearr_51260_51323 = state_51187__$1;
(statearr_51260_51323[(1)] = (13));

} else {
var statearr_51261_51324 = state_51187__$1;
(statearr_51261_51324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (18))){
var inst_51112 = (state_51187[(2)]);
var state_51187__$1 = state_51187;
var statearr_51262_51325 = state_51187__$1;
(statearr_51262_51325[(2)] = inst_51112);

(statearr_51262_51325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (42))){
var state_51187__$1 = state_51187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51187__$1,(45),dchan);
} else {
if((state_val_51188 === (37))){
var inst_51146 = (state_51187[(25)]);
var inst_51155 = (state_51187[(23)]);
var inst_51055 = (state_51187[(12)]);
var inst_51155__$1 = cljs.core.first.call(null,inst_51146);
var inst_51156 = cljs.core.async.put_BANG_.call(null,inst_51155__$1,inst_51055,done);
var state_51187__$1 = (function (){var statearr_51263 = state_51187;
(statearr_51263[(23)] = inst_51155__$1);

return statearr_51263;
})();
if(cljs.core.truth_(inst_51156)){
var statearr_51264_51326 = state_51187__$1;
(statearr_51264_51326[(1)] = (39));

} else {
var statearr_51265_51327 = state_51187__$1;
(statearr_51265_51327[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51188 === (8))){
var inst_51066 = (state_51187[(16)]);
var inst_51067 = (state_51187[(17)]);
var inst_51069 = (inst_51067 < inst_51066);
var inst_51070 = inst_51069;
var state_51187__$1 = state_51187;
if(cljs.core.truth_(inst_51070)){
var statearr_51266_51328 = state_51187__$1;
(statearr_51266_51328[(1)] = (10));

} else {
var statearr_51267_51329 = state_51187__$1;
(statearr_51267_51329[(1)] = (11));

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
});})(c__28009__auto___51275,cs,m,dchan,dctr,done))
;
return ((function (switch__27988__auto__,c__28009__auto___51275,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27989__auto__ = null;
var cljs$core$async$mult_$_state_machine__27989__auto____0 = (function (){
var statearr_51271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51271[(0)] = cljs$core$async$mult_$_state_machine__27989__auto__);

(statearr_51271[(1)] = (1));

return statearr_51271;
});
var cljs$core$async$mult_$_state_machine__27989__auto____1 = (function (state_51187){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_51187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e51272){if((e51272 instanceof Object)){
var ex__27992__auto__ = e51272;
var statearr_51273_51330 = state_51187;
(statearr_51273_51330[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51331 = state_51187;
state_51187 = G__51331;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27989__auto__ = function(state_51187){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27989__auto____1.call(this,state_51187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27989__auto____0;
cljs$core$async$mult_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27989__auto____1;
return cljs$core$async$mult_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___51275,cs,m,dchan,dctr,done))
})();
var state__28011__auto__ = (function (){var statearr_51274 = f__28010__auto__.call(null);
(statearr_51274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___51275);

return statearr_51274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___51275,cs,m,dchan,dctr,done))
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
var args51332 = [];
var len__27054__auto___51335 = arguments.length;
var i__27055__auto___51336 = (0);
while(true){
if((i__27055__auto___51336 < len__27054__auto___51335)){
args51332.push((arguments[i__27055__auto___51336]));

var G__51337 = (i__27055__auto___51336 + (1));
i__27055__auto___51336 = G__51337;
continue;
} else {
}
break;
}

var G__51334 = args51332.length;
switch (G__51334) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51332.length)].join('')));

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
var len__27054__auto___51349 = arguments.length;
var i__27055__auto___51350 = (0);
while(true){
if((i__27055__auto___51350 < len__27054__auto___51349)){
args__27061__auto__.push((arguments[i__27055__auto___51350]));

var G__51351 = (i__27055__auto___51350 + (1));
i__27055__auto___51350 = G__51351;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51343){
var map__51344 = p__51343;
var map__51344__$1 = ((((!((map__51344 == null)))?((((map__51344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51344):map__51344);
var opts = map__51344__$1;
var statearr_51346_51352 = state;
(statearr_51346_51352[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__51344,map__51344__$1,opts){
return (function (val){
var statearr_51347_51353 = state;
(statearr_51347_51353[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__51344,map__51344__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_51348_51354 = state;
(statearr_51348_51354[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51339){
var G__51340 = cljs.core.first.call(null,seq51339);
var seq51339__$1 = cljs.core.next.call(null,seq51339);
var G__51341 = cljs.core.first.call(null,seq51339__$1);
var seq51339__$2 = cljs.core.next.call(null,seq51339__$1);
var G__51342 = cljs.core.first.call(null,seq51339__$2);
var seq51339__$3 = cljs.core.next.call(null,seq51339__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51340,G__51341,G__51342,seq51339__$3);
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
if(typeof cljs.core.async.t_cljs$core$async51520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51520 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51521){
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
this.meta51521 = meta51521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51522,meta51521__$1){
var self__ = this;
var _51522__$1 = this;
return (new cljs.core.async.t_cljs$core$async51520(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51521__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51522){
var self__ = this;
var _51522__$1 = this;
return self__.meta51521;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51520.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async51520.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51520.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async51520.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51520.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51520.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51520.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51520.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async51520.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51521","meta51521",1512982606,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51520";

cljs.core.async.t_cljs$core$async51520.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async51520");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async51520 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async51520(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51521){
return (new cljs.core.async.t_cljs$core$async51520(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51521));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async51520(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28009__auto___51685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___51685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___51685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_51622){
var state_val_51623 = (state_51622[(1)]);
if((state_val_51623 === (7))){
var inst_51538 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
var statearr_51624_51686 = state_51622__$1;
(statearr_51624_51686[(2)] = inst_51538);

(statearr_51624_51686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (20))){
var inst_51550 = (state_51622[(7)]);
var state_51622__$1 = state_51622;
var statearr_51625_51687 = state_51622__$1;
(statearr_51625_51687[(2)] = inst_51550);

(statearr_51625_51687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (27))){
var state_51622__$1 = state_51622;
var statearr_51626_51688 = state_51622__$1;
(statearr_51626_51688[(2)] = null);

(statearr_51626_51688[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (1))){
var inst_51526 = (state_51622[(8)]);
var inst_51526__$1 = calc_state.call(null);
var inst_51528 = (inst_51526__$1 == null);
var inst_51529 = cljs.core.not.call(null,inst_51528);
var state_51622__$1 = (function (){var statearr_51627 = state_51622;
(statearr_51627[(8)] = inst_51526__$1);

return statearr_51627;
})();
if(inst_51529){
var statearr_51628_51689 = state_51622__$1;
(statearr_51628_51689[(1)] = (2));

} else {
var statearr_51629_51690 = state_51622__$1;
(statearr_51629_51690[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (24))){
var inst_51582 = (state_51622[(9)]);
var inst_51573 = (state_51622[(10)]);
var inst_51596 = (state_51622[(11)]);
var inst_51596__$1 = inst_51573.call(null,inst_51582);
var state_51622__$1 = (function (){var statearr_51630 = state_51622;
(statearr_51630[(11)] = inst_51596__$1);

return statearr_51630;
})();
if(cljs.core.truth_(inst_51596__$1)){
var statearr_51631_51691 = state_51622__$1;
(statearr_51631_51691[(1)] = (29));

} else {
var statearr_51632_51692 = state_51622__$1;
(statearr_51632_51692[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (4))){
var inst_51541 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
if(cljs.core.truth_(inst_51541)){
var statearr_51633_51693 = state_51622__$1;
(statearr_51633_51693[(1)] = (8));

} else {
var statearr_51634_51694 = state_51622__$1;
(statearr_51634_51694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (15))){
var inst_51567 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
if(cljs.core.truth_(inst_51567)){
var statearr_51635_51695 = state_51622__$1;
(statearr_51635_51695[(1)] = (19));

} else {
var statearr_51636_51696 = state_51622__$1;
(statearr_51636_51696[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (21))){
var inst_51572 = (state_51622[(12)]);
var inst_51572__$1 = (state_51622[(2)]);
var inst_51573 = cljs.core.get.call(null,inst_51572__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51574 = cljs.core.get.call(null,inst_51572__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51575 = cljs.core.get.call(null,inst_51572__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51622__$1 = (function (){var statearr_51637 = state_51622;
(statearr_51637[(10)] = inst_51573);

(statearr_51637[(12)] = inst_51572__$1);

(statearr_51637[(13)] = inst_51574);

return statearr_51637;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_51622__$1,(22),inst_51575);
} else {
if((state_val_51623 === (31))){
var inst_51604 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
if(cljs.core.truth_(inst_51604)){
var statearr_51638_51697 = state_51622__$1;
(statearr_51638_51697[(1)] = (32));

} else {
var statearr_51639_51698 = state_51622__$1;
(statearr_51639_51698[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (32))){
var inst_51581 = (state_51622[(14)]);
var state_51622__$1 = state_51622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51622__$1,(35),out,inst_51581);
} else {
if((state_val_51623 === (33))){
var inst_51572 = (state_51622[(12)]);
var inst_51550 = inst_51572;
var state_51622__$1 = (function (){var statearr_51640 = state_51622;
(statearr_51640[(7)] = inst_51550);

return statearr_51640;
})();
var statearr_51641_51699 = state_51622__$1;
(statearr_51641_51699[(2)] = null);

(statearr_51641_51699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (13))){
var inst_51550 = (state_51622[(7)]);
var inst_51557 = inst_51550.cljs$lang$protocol_mask$partition0$;
var inst_51558 = (inst_51557 & (64));
var inst_51559 = inst_51550.cljs$core$ISeq$;
var inst_51560 = (inst_51558) || (inst_51559);
var state_51622__$1 = state_51622;
if(cljs.core.truth_(inst_51560)){
var statearr_51642_51700 = state_51622__$1;
(statearr_51642_51700[(1)] = (16));

} else {
var statearr_51643_51701 = state_51622__$1;
(statearr_51643_51701[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (22))){
var inst_51582 = (state_51622[(9)]);
var inst_51581 = (state_51622[(14)]);
var inst_51580 = (state_51622[(2)]);
var inst_51581__$1 = cljs.core.nth.call(null,inst_51580,(0),null);
var inst_51582__$1 = cljs.core.nth.call(null,inst_51580,(1),null);
var inst_51583 = (inst_51581__$1 == null);
var inst_51584 = cljs.core._EQ_.call(null,inst_51582__$1,change);
var inst_51585 = (inst_51583) || (inst_51584);
var state_51622__$1 = (function (){var statearr_51644 = state_51622;
(statearr_51644[(9)] = inst_51582__$1);

(statearr_51644[(14)] = inst_51581__$1);

return statearr_51644;
})();
if(cljs.core.truth_(inst_51585)){
var statearr_51645_51702 = state_51622__$1;
(statearr_51645_51702[(1)] = (23));

} else {
var statearr_51646_51703 = state_51622__$1;
(statearr_51646_51703[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (36))){
var inst_51572 = (state_51622[(12)]);
var inst_51550 = inst_51572;
var state_51622__$1 = (function (){var statearr_51647 = state_51622;
(statearr_51647[(7)] = inst_51550);

return statearr_51647;
})();
var statearr_51648_51704 = state_51622__$1;
(statearr_51648_51704[(2)] = null);

(statearr_51648_51704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (29))){
var inst_51596 = (state_51622[(11)]);
var state_51622__$1 = state_51622;
var statearr_51649_51705 = state_51622__$1;
(statearr_51649_51705[(2)] = inst_51596);

(statearr_51649_51705[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (6))){
var state_51622__$1 = state_51622;
var statearr_51650_51706 = state_51622__$1;
(statearr_51650_51706[(2)] = false);

(statearr_51650_51706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (28))){
var inst_51592 = (state_51622[(2)]);
var inst_51593 = calc_state.call(null);
var inst_51550 = inst_51593;
var state_51622__$1 = (function (){var statearr_51651 = state_51622;
(statearr_51651[(7)] = inst_51550);

(statearr_51651[(15)] = inst_51592);

return statearr_51651;
})();
var statearr_51652_51707 = state_51622__$1;
(statearr_51652_51707[(2)] = null);

(statearr_51652_51707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (25))){
var inst_51618 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
var statearr_51653_51708 = state_51622__$1;
(statearr_51653_51708[(2)] = inst_51618);

(statearr_51653_51708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (34))){
var inst_51616 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
var statearr_51654_51709 = state_51622__$1;
(statearr_51654_51709[(2)] = inst_51616);

(statearr_51654_51709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (17))){
var state_51622__$1 = state_51622;
var statearr_51655_51710 = state_51622__$1;
(statearr_51655_51710[(2)] = false);

(statearr_51655_51710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (3))){
var state_51622__$1 = state_51622;
var statearr_51656_51711 = state_51622__$1;
(statearr_51656_51711[(2)] = false);

(statearr_51656_51711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (12))){
var inst_51620 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51622__$1,inst_51620);
} else {
if((state_val_51623 === (2))){
var inst_51526 = (state_51622[(8)]);
var inst_51531 = inst_51526.cljs$lang$protocol_mask$partition0$;
var inst_51532 = (inst_51531 & (64));
var inst_51533 = inst_51526.cljs$core$ISeq$;
var inst_51534 = (inst_51532) || (inst_51533);
var state_51622__$1 = state_51622;
if(cljs.core.truth_(inst_51534)){
var statearr_51657_51712 = state_51622__$1;
(statearr_51657_51712[(1)] = (5));

} else {
var statearr_51658_51713 = state_51622__$1;
(statearr_51658_51713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (23))){
var inst_51581 = (state_51622[(14)]);
var inst_51587 = (inst_51581 == null);
var state_51622__$1 = state_51622;
if(cljs.core.truth_(inst_51587)){
var statearr_51659_51714 = state_51622__$1;
(statearr_51659_51714[(1)] = (26));

} else {
var statearr_51660_51715 = state_51622__$1;
(statearr_51660_51715[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (35))){
var inst_51607 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
if(cljs.core.truth_(inst_51607)){
var statearr_51661_51716 = state_51622__$1;
(statearr_51661_51716[(1)] = (36));

} else {
var statearr_51662_51717 = state_51622__$1;
(statearr_51662_51717[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (19))){
var inst_51550 = (state_51622[(7)]);
var inst_51569 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51550);
var state_51622__$1 = state_51622;
var statearr_51663_51718 = state_51622__$1;
(statearr_51663_51718[(2)] = inst_51569);

(statearr_51663_51718[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (11))){
var inst_51550 = (state_51622[(7)]);
var inst_51554 = (inst_51550 == null);
var inst_51555 = cljs.core.not.call(null,inst_51554);
var state_51622__$1 = state_51622;
if(inst_51555){
var statearr_51664_51719 = state_51622__$1;
(statearr_51664_51719[(1)] = (13));

} else {
var statearr_51665_51720 = state_51622__$1;
(statearr_51665_51720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (9))){
var inst_51526 = (state_51622[(8)]);
var state_51622__$1 = state_51622;
var statearr_51666_51721 = state_51622__$1;
(statearr_51666_51721[(2)] = inst_51526);

(statearr_51666_51721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (5))){
var state_51622__$1 = state_51622;
var statearr_51667_51722 = state_51622__$1;
(statearr_51667_51722[(2)] = true);

(statearr_51667_51722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (14))){
var state_51622__$1 = state_51622;
var statearr_51668_51723 = state_51622__$1;
(statearr_51668_51723[(2)] = false);

(statearr_51668_51723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (26))){
var inst_51582 = (state_51622[(9)]);
var inst_51589 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_51582);
var state_51622__$1 = state_51622;
var statearr_51669_51724 = state_51622__$1;
(statearr_51669_51724[(2)] = inst_51589);

(statearr_51669_51724[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (16))){
var state_51622__$1 = state_51622;
var statearr_51670_51725 = state_51622__$1;
(statearr_51670_51725[(2)] = true);

(statearr_51670_51725[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (38))){
var inst_51612 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
var statearr_51671_51726 = state_51622__$1;
(statearr_51671_51726[(2)] = inst_51612);

(statearr_51671_51726[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (30))){
var inst_51582 = (state_51622[(9)]);
var inst_51573 = (state_51622[(10)]);
var inst_51574 = (state_51622[(13)]);
var inst_51599 = cljs.core.empty_QMARK_.call(null,inst_51573);
var inst_51600 = inst_51574.call(null,inst_51582);
var inst_51601 = cljs.core.not.call(null,inst_51600);
var inst_51602 = (inst_51599) && (inst_51601);
var state_51622__$1 = state_51622;
var statearr_51672_51727 = state_51622__$1;
(statearr_51672_51727[(2)] = inst_51602);

(statearr_51672_51727[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (10))){
var inst_51526 = (state_51622[(8)]);
var inst_51546 = (state_51622[(2)]);
var inst_51547 = cljs.core.get.call(null,inst_51546,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51548 = cljs.core.get.call(null,inst_51546,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51549 = cljs.core.get.call(null,inst_51546,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51550 = inst_51526;
var state_51622__$1 = (function (){var statearr_51673 = state_51622;
(statearr_51673[(16)] = inst_51547);

(statearr_51673[(7)] = inst_51550);

(statearr_51673[(17)] = inst_51549);

(statearr_51673[(18)] = inst_51548);

return statearr_51673;
})();
var statearr_51674_51728 = state_51622__$1;
(statearr_51674_51728[(2)] = null);

(statearr_51674_51728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (18))){
var inst_51564 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
var statearr_51675_51729 = state_51622__$1;
(statearr_51675_51729[(2)] = inst_51564);

(statearr_51675_51729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (37))){
var state_51622__$1 = state_51622;
var statearr_51676_51730 = state_51622__$1;
(statearr_51676_51730[(2)] = null);

(statearr_51676_51730[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (8))){
var inst_51526 = (state_51622[(8)]);
var inst_51543 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51526);
var state_51622__$1 = state_51622;
var statearr_51677_51731 = state_51622__$1;
(statearr_51677_51731[(2)] = inst_51543);

(statearr_51677_51731[(1)] = (10));


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
});})(c__28009__auto___51685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27988__auto__,c__28009__auto___51685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27989__auto__ = null;
var cljs$core$async$mix_$_state_machine__27989__auto____0 = (function (){
var statearr_51681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51681[(0)] = cljs$core$async$mix_$_state_machine__27989__auto__);

(statearr_51681[(1)] = (1));

return statearr_51681;
});
var cljs$core$async$mix_$_state_machine__27989__auto____1 = (function (state_51622){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_51622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e51682){if((e51682 instanceof Object)){
var ex__27992__auto__ = e51682;
var statearr_51683_51732 = state_51622;
(statearr_51683_51732[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51733 = state_51622;
state_51622 = G__51733;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27989__auto__ = function(state_51622){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27989__auto____1.call(this,state_51622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27989__auto____0;
cljs$core$async$mix_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27989__auto____1;
return cljs$core$async$mix_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___51685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28011__auto__ = (function (){var statearr_51684 = f__28010__auto__.call(null);
(statearr_51684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___51685);

return statearr_51684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___51685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args51734 = [];
var len__27054__auto___51737 = arguments.length;
var i__27055__auto___51738 = (0);
while(true){
if((i__27055__auto___51738 < len__27054__auto___51737)){
args51734.push((arguments[i__27055__auto___51738]));

var G__51739 = (i__27055__auto___51738 + (1));
i__27055__auto___51738 = G__51739;
continue;
} else {
}
break;
}

var G__51736 = args51734.length;
switch (G__51736) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51734.length)].join('')));

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
var args51742 = [];
var len__27054__auto___51867 = arguments.length;
var i__27055__auto___51868 = (0);
while(true){
if((i__27055__auto___51868 < len__27054__auto___51867)){
args51742.push((arguments[i__27055__auto___51868]));

var G__51869 = (i__27055__auto___51868 + (1));
i__27055__auto___51868 = G__51869;
continue;
} else {
}
break;
}

var G__51744 = args51742.length;
switch (G__51744) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51742.length)].join('')));

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
return (function (p1__51741_SHARP_){
if(cljs.core.truth_(p1__51741_SHARP_.call(null,topic))){
return p1__51741_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__51741_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async51745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51745 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51746){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51746 = meta51746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_51747,meta51746__$1){
var self__ = this;
var _51747__$1 = this;
return (new cljs.core.async.t_cljs$core$async51745(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51746__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_51747){
var self__ = this;
var _51747__$1 = this;
return self__.meta51746;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51745.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async51745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51745.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async51745.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51745.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async51745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51745.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51746","meta51746",1383278003,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51745";

cljs.core.async.t_cljs$core$async51745.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async51745");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async51745 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async51745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51746){
return (new cljs.core.async.t_cljs$core$async51745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51746));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async51745(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28009__auto___51871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___51871,mults,ensure_mult,p){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___51871,mults,ensure_mult,p){
return (function (state_51819){
var state_val_51820 = (state_51819[(1)]);
if((state_val_51820 === (7))){
var inst_51815 = (state_51819[(2)]);
var state_51819__$1 = state_51819;
var statearr_51821_51872 = state_51819__$1;
(statearr_51821_51872[(2)] = inst_51815);

(statearr_51821_51872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (20))){
var state_51819__$1 = state_51819;
var statearr_51822_51873 = state_51819__$1;
(statearr_51822_51873[(2)] = null);

(statearr_51822_51873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (1))){
var state_51819__$1 = state_51819;
var statearr_51823_51874 = state_51819__$1;
(statearr_51823_51874[(2)] = null);

(statearr_51823_51874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (24))){
var inst_51798 = (state_51819[(7)]);
var inst_51807 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_51798);
var state_51819__$1 = state_51819;
var statearr_51824_51875 = state_51819__$1;
(statearr_51824_51875[(2)] = inst_51807);

(statearr_51824_51875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (4))){
var inst_51750 = (state_51819[(8)]);
var inst_51750__$1 = (state_51819[(2)]);
var inst_51751 = (inst_51750__$1 == null);
var state_51819__$1 = (function (){var statearr_51825 = state_51819;
(statearr_51825[(8)] = inst_51750__$1);

return statearr_51825;
})();
if(cljs.core.truth_(inst_51751)){
var statearr_51826_51876 = state_51819__$1;
(statearr_51826_51876[(1)] = (5));

} else {
var statearr_51827_51877 = state_51819__$1;
(statearr_51827_51877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (15))){
var inst_51792 = (state_51819[(2)]);
var state_51819__$1 = state_51819;
var statearr_51828_51878 = state_51819__$1;
(statearr_51828_51878[(2)] = inst_51792);

(statearr_51828_51878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (21))){
var inst_51812 = (state_51819[(2)]);
var state_51819__$1 = (function (){var statearr_51829 = state_51819;
(statearr_51829[(9)] = inst_51812);

return statearr_51829;
})();
var statearr_51830_51879 = state_51819__$1;
(statearr_51830_51879[(2)] = null);

(statearr_51830_51879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (13))){
var inst_51774 = (state_51819[(10)]);
var inst_51776 = cljs.core.chunked_seq_QMARK_.call(null,inst_51774);
var state_51819__$1 = state_51819;
if(inst_51776){
var statearr_51831_51880 = state_51819__$1;
(statearr_51831_51880[(1)] = (16));

} else {
var statearr_51832_51881 = state_51819__$1;
(statearr_51832_51881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (22))){
var inst_51804 = (state_51819[(2)]);
var state_51819__$1 = state_51819;
if(cljs.core.truth_(inst_51804)){
var statearr_51833_51882 = state_51819__$1;
(statearr_51833_51882[(1)] = (23));

} else {
var statearr_51834_51883 = state_51819__$1;
(statearr_51834_51883[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (6))){
var inst_51750 = (state_51819[(8)]);
var inst_51800 = (state_51819[(11)]);
var inst_51798 = (state_51819[(7)]);
var inst_51798__$1 = topic_fn.call(null,inst_51750);
var inst_51799 = cljs.core.deref.call(null,mults);
var inst_51800__$1 = cljs.core.get.call(null,inst_51799,inst_51798__$1);
var state_51819__$1 = (function (){var statearr_51835 = state_51819;
(statearr_51835[(11)] = inst_51800__$1);

(statearr_51835[(7)] = inst_51798__$1);

return statearr_51835;
})();
if(cljs.core.truth_(inst_51800__$1)){
var statearr_51836_51884 = state_51819__$1;
(statearr_51836_51884[(1)] = (19));

} else {
var statearr_51837_51885 = state_51819__$1;
(statearr_51837_51885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (25))){
var inst_51809 = (state_51819[(2)]);
var state_51819__$1 = state_51819;
var statearr_51838_51886 = state_51819__$1;
(statearr_51838_51886[(2)] = inst_51809);

(statearr_51838_51886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (17))){
var inst_51774 = (state_51819[(10)]);
var inst_51783 = cljs.core.first.call(null,inst_51774);
var inst_51784 = cljs.core.async.muxch_STAR_.call(null,inst_51783);
var inst_51785 = cljs.core.async.close_BANG_.call(null,inst_51784);
var inst_51786 = cljs.core.next.call(null,inst_51774);
var inst_51760 = inst_51786;
var inst_51761 = null;
var inst_51762 = (0);
var inst_51763 = (0);
var state_51819__$1 = (function (){var statearr_51839 = state_51819;
(statearr_51839[(12)] = inst_51761);

(statearr_51839[(13)] = inst_51763);

(statearr_51839[(14)] = inst_51762);

(statearr_51839[(15)] = inst_51760);

(statearr_51839[(16)] = inst_51785);

return statearr_51839;
})();
var statearr_51840_51887 = state_51819__$1;
(statearr_51840_51887[(2)] = null);

(statearr_51840_51887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (3))){
var inst_51817 = (state_51819[(2)]);
var state_51819__$1 = state_51819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51819__$1,inst_51817);
} else {
if((state_val_51820 === (12))){
var inst_51794 = (state_51819[(2)]);
var state_51819__$1 = state_51819;
var statearr_51841_51888 = state_51819__$1;
(statearr_51841_51888[(2)] = inst_51794);

(statearr_51841_51888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (2))){
var state_51819__$1 = state_51819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51819__$1,(4),ch);
} else {
if((state_val_51820 === (23))){
var state_51819__$1 = state_51819;
var statearr_51842_51889 = state_51819__$1;
(statearr_51842_51889[(2)] = null);

(statearr_51842_51889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (19))){
var inst_51750 = (state_51819[(8)]);
var inst_51800 = (state_51819[(11)]);
var inst_51802 = cljs.core.async.muxch_STAR_.call(null,inst_51800);
var state_51819__$1 = state_51819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51819__$1,(22),inst_51802,inst_51750);
} else {
if((state_val_51820 === (11))){
var inst_51760 = (state_51819[(15)]);
var inst_51774 = (state_51819[(10)]);
var inst_51774__$1 = cljs.core.seq.call(null,inst_51760);
var state_51819__$1 = (function (){var statearr_51843 = state_51819;
(statearr_51843[(10)] = inst_51774__$1);

return statearr_51843;
})();
if(inst_51774__$1){
var statearr_51844_51890 = state_51819__$1;
(statearr_51844_51890[(1)] = (13));

} else {
var statearr_51845_51891 = state_51819__$1;
(statearr_51845_51891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (9))){
var inst_51796 = (state_51819[(2)]);
var state_51819__$1 = state_51819;
var statearr_51846_51892 = state_51819__$1;
(statearr_51846_51892[(2)] = inst_51796);

(statearr_51846_51892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (5))){
var inst_51757 = cljs.core.deref.call(null,mults);
var inst_51758 = cljs.core.vals.call(null,inst_51757);
var inst_51759 = cljs.core.seq.call(null,inst_51758);
var inst_51760 = inst_51759;
var inst_51761 = null;
var inst_51762 = (0);
var inst_51763 = (0);
var state_51819__$1 = (function (){var statearr_51847 = state_51819;
(statearr_51847[(12)] = inst_51761);

(statearr_51847[(13)] = inst_51763);

(statearr_51847[(14)] = inst_51762);

(statearr_51847[(15)] = inst_51760);

return statearr_51847;
})();
var statearr_51848_51893 = state_51819__$1;
(statearr_51848_51893[(2)] = null);

(statearr_51848_51893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (14))){
var state_51819__$1 = state_51819;
var statearr_51852_51894 = state_51819__$1;
(statearr_51852_51894[(2)] = null);

(statearr_51852_51894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (16))){
var inst_51774 = (state_51819[(10)]);
var inst_51778 = cljs.core.chunk_first.call(null,inst_51774);
var inst_51779 = cljs.core.chunk_rest.call(null,inst_51774);
var inst_51780 = cljs.core.count.call(null,inst_51778);
var inst_51760 = inst_51779;
var inst_51761 = inst_51778;
var inst_51762 = inst_51780;
var inst_51763 = (0);
var state_51819__$1 = (function (){var statearr_51853 = state_51819;
(statearr_51853[(12)] = inst_51761);

(statearr_51853[(13)] = inst_51763);

(statearr_51853[(14)] = inst_51762);

(statearr_51853[(15)] = inst_51760);

return statearr_51853;
})();
var statearr_51854_51895 = state_51819__$1;
(statearr_51854_51895[(2)] = null);

(statearr_51854_51895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (10))){
var inst_51761 = (state_51819[(12)]);
var inst_51763 = (state_51819[(13)]);
var inst_51762 = (state_51819[(14)]);
var inst_51760 = (state_51819[(15)]);
var inst_51768 = cljs.core._nth.call(null,inst_51761,inst_51763);
var inst_51769 = cljs.core.async.muxch_STAR_.call(null,inst_51768);
var inst_51770 = cljs.core.async.close_BANG_.call(null,inst_51769);
var inst_51771 = (inst_51763 + (1));
var tmp51849 = inst_51761;
var tmp51850 = inst_51762;
var tmp51851 = inst_51760;
var inst_51760__$1 = tmp51851;
var inst_51761__$1 = tmp51849;
var inst_51762__$1 = tmp51850;
var inst_51763__$1 = inst_51771;
var state_51819__$1 = (function (){var statearr_51855 = state_51819;
(statearr_51855[(12)] = inst_51761__$1);

(statearr_51855[(13)] = inst_51763__$1);

(statearr_51855[(14)] = inst_51762__$1);

(statearr_51855[(15)] = inst_51760__$1);

(statearr_51855[(17)] = inst_51770);

return statearr_51855;
})();
var statearr_51856_51896 = state_51819__$1;
(statearr_51856_51896[(2)] = null);

(statearr_51856_51896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (18))){
var inst_51789 = (state_51819[(2)]);
var state_51819__$1 = state_51819;
var statearr_51857_51897 = state_51819__$1;
(statearr_51857_51897[(2)] = inst_51789);

(statearr_51857_51897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51820 === (8))){
var inst_51763 = (state_51819[(13)]);
var inst_51762 = (state_51819[(14)]);
var inst_51765 = (inst_51763 < inst_51762);
var inst_51766 = inst_51765;
var state_51819__$1 = state_51819;
if(cljs.core.truth_(inst_51766)){
var statearr_51858_51898 = state_51819__$1;
(statearr_51858_51898[(1)] = (10));

} else {
var statearr_51859_51899 = state_51819__$1;
(statearr_51859_51899[(1)] = (11));

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
});})(c__28009__auto___51871,mults,ensure_mult,p))
;
return ((function (switch__27988__auto__,c__28009__auto___51871,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_51863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51863[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_51863[(1)] = (1));

return statearr_51863;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_51819){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_51819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e51864){if((e51864 instanceof Object)){
var ex__27992__auto__ = e51864;
var statearr_51865_51900 = state_51819;
(statearr_51865_51900[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51901 = state_51819;
state_51819 = G__51901;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_51819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_51819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___51871,mults,ensure_mult,p))
})();
var state__28011__auto__ = (function (){var statearr_51866 = f__28010__auto__.call(null);
(statearr_51866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___51871);

return statearr_51866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___51871,mults,ensure_mult,p))
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
var args51902 = [];
var len__27054__auto___51905 = arguments.length;
var i__27055__auto___51906 = (0);
while(true){
if((i__27055__auto___51906 < len__27054__auto___51905)){
args51902.push((arguments[i__27055__auto___51906]));

var G__51907 = (i__27055__auto___51906 + (1));
i__27055__auto___51906 = G__51907;
continue;
} else {
}
break;
}

var G__51904 = args51902.length;
switch (G__51904) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51902.length)].join('')));

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
var args51909 = [];
var len__27054__auto___51912 = arguments.length;
var i__27055__auto___51913 = (0);
while(true){
if((i__27055__auto___51913 < len__27054__auto___51912)){
args51909.push((arguments[i__27055__auto___51913]));

var G__51914 = (i__27055__auto___51913 + (1));
i__27055__auto___51913 = G__51914;
continue;
} else {
}
break;
}

var G__51911 = args51909.length;
switch (G__51911) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51909.length)].join('')));

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
var args51916 = [];
var len__27054__auto___51987 = arguments.length;
var i__27055__auto___51988 = (0);
while(true){
if((i__27055__auto___51988 < len__27054__auto___51987)){
args51916.push((arguments[i__27055__auto___51988]));

var G__51989 = (i__27055__auto___51988 + (1));
i__27055__auto___51988 = G__51989;
continue;
} else {
}
break;
}

var G__51918 = args51916.length;
switch (G__51918) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51916.length)].join('')));

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
var c__28009__auto___51991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___51991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___51991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_51957){
var state_val_51958 = (state_51957[(1)]);
if((state_val_51958 === (7))){
var state_51957__$1 = state_51957;
var statearr_51959_51992 = state_51957__$1;
(statearr_51959_51992[(2)] = null);

(statearr_51959_51992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51958 === (1))){
var state_51957__$1 = state_51957;
var statearr_51960_51993 = state_51957__$1;
(statearr_51960_51993[(2)] = null);

(statearr_51960_51993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51958 === (4))){
var inst_51921 = (state_51957[(7)]);
var inst_51923 = (inst_51921 < cnt);
var state_51957__$1 = state_51957;
if(cljs.core.truth_(inst_51923)){
var statearr_51961_51994 = state_51957__$1;
(statearr_51961_51994[(1)] = (6));

} else {
var statearr_51962_51995 = state_51957__$1;
(statearr_51962_51995[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51958 === (15))){
var inst_51953 = (state_51957[(2)]);
var state_51957__$1 = state_51957;
var statearr_51963_51996 = state_51957__$1;
(statearr_51963_51996[(2)] = inst_51953);

(statearr_51963_51996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51958 === (13))){
var inst_51946 = cljs.core.async.close_BANG_.call(null,out);
var state_51957__$1 = state_51957;
var statearr_51964_51997 = state_51957__$1;
(statearr_51964_51997[(2)] = inst_51946);

(statearr_51964_51997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51958 === (6))){
var state_51957__$1 = state_51957;
var statearr_51965_51998 = state_51957__$1;
(statearr_51965_51998[(2)] = null);

(statearr_51965_51998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51958 === (3))){
var inst_51955 = (state_51957[(2)]);
var state_51957__$1 = state_51957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51957__$1,inst_51955);
} else {
if((state_val_51958 === (12))){
var inst_51943 = (state_51957[(8)]);
var inst_51943__$1 = (state_51957[(2)]);
var inst_51944 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_51943__$1);
var state_51957__$1 = (function (){var statearr_51966 = state_51957;
(statearr_51966[(8)] = inst_51943__$1);

return statearr_51966;
})();
if(cljs.core.truth_(inst_51944)){
var statearr_51967_51999 = state_51957__$1;
(statearr_51967_51999[(1)] = (13));

} else {
var statearr_51968_52000 = state_51957__$1;
(statearr_51968_52000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51958 === (2))){
var inst_51920 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_51921 = (0);
var state_51957__$1 = (function (){var statearr_51969 = state_51957;
(statearr_51969[(7)] = inst_51921);

(statearr_51969[(9)] = inst_51920);

return statearr_51969;
})();
var statearr_51970_52001 = state_51957__$1;
(statearr_51970_52001[(2)] = null);

(statearr_51970_52001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51958 === (11))){
var inst_51921 = (state_51957[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51957,(10),Object,null,(9));
var inst_51930 = chs__$1.call(null,inst_51921);
var inst_51931 = done.call(null,inst_51921);
var inst_51932 = cljs.core.async.take_BANG_.call(null,inst_51930,inst_51931);
var state_51957__$1 = state_51957;
var statearr_51971_52002 = state_51957__$1;
(statearr_51971_52002[(2)] = inst_51932);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51958 === (9))){
var inst_51921 = (state_51957[(7)]);
var inst_51934 = (state_51957[(2)]);
var inst_51935 = (inst_51921 + (1));
var inst_51921__$1 = inst_51935;
var state_51957__$1 = (function (){var statearr_51972 = state_51957;
(statearr_51972[(10)] = inst_51934);

(statearr_51972[(7)] = inst_51921__$1);

return statearr_51972;
})();
var statearr_51973_52003 = state_51957__$1;
(statearr_51973_52003[(2)] = null);

(statearr_51973_52003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51958 === (5))){
var inst_51941 = (state_51957[(2)]);
var state_51957__$1 = (function (){var statearr_51974 = state_51957;
(statearr_51974[(11)] = inst_51941);

return statearr_51974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51957__$1,(12),dchan);
} else {
if((state_val_51958 === (14))){
var inst_51943 = (state_51957[(8)]);
var inst_51948 = cljs.core.apply.call(null,f,inst_51943);
var state_51957__$1 = state_51957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51957__$1,(16),out,inst_51948);
} else {
if((state_val_51958 === (16))){
var inst_51950 = (state_51957[(2)]);
var state_51957__$1 = (function (){var statearr_51975 = state_51957;
(statearr_51975[(12)] = inst_51950);

return statearr_51975;
})();
var statearr_51976_52004 = state_51957__$1;
(statearr_51976_52004[(2)] = null);

(statearr_51976_52004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51958 === (10))){
var inst_51925 = (state_51957[(2)]);
var inst_51926 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_51957__$1 = (function (){var statearr_51977 = state_51957;
(statearr_51977[(13)] = inst_51925);

return statearr_51977;
})();
var statearr_51978_52005 = state_51957__$1;
(statearr_51978_52005[(2)] = inst_51926);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51958 === (8))){
var inst_51939 = (state_51957[(2)]);
var state_51957__$1 = state_51957;
var statearr_51979_52006 = state_51957__$1;
(statearr_51979_52006[(2)] = inst_51939);

(statearr_51979_52006[(1)] = (5));


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
});})(c__28009__auto___51991,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27988__auto__,c__28009__auto___51991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_51983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51983[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_51983[(1)] = (1));

return statearr_51983;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_51957){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_51957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e51984){if((e51984 instanceof Object)){
var ex__27992__auto__ = e51984;
var statearr_51985_52007 = state_51957;
(statearr_51985_52007[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52008 = state_51957;
state_51957 = G__52008;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_51957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_51957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___51991,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28011__auto__ = (function (){var statearr_51986 = f__28010__auto__.call(null);
(statearr_51986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___51991);

return statearr_51986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___51991,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args52010 = [];
var len__27054__auto___52068 = arguments.length;
var i__27055__auto___52069 = (0);
while(true){
if((i__27055__auto___52069 < len__27054__auto___52068)){
args52010.push((arguments[i__27055__auto___52069]));

var G__52070 = (i__27055__auto___52069 + (1));
i__27055__auto___52069 = G__52070;
continue;
} else {
}
break;
}

var G__52012 = args52010.length;
switch (G__52012) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52010.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___52072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___52072,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___52072,out){
return (function (state_52044){
var state_val_52045 = (state_52044[(1)]);
if((state_val_52045 === (7))){
var inst_52024 = (state_52044[(7)]);
var inst_52023 = (state_52044[(8)]);
var inst_52023__$1 = (state_52044[(2)]);
var inst_52024__$1 = cljs.core.nth.call(null,inst_52023__$1,(0),null);
var inst_52025 = cljs.core.nth.call(null,inst_52023__$1,(1),null);
var inst_52026 = (inst_52024__$1 == null);
var state_52044__$1 = (function (){var statearr_52046 = state_52044;
(statearr_52046[(7)] = inst_52024__$1);

(statearr_52046[(9)] = inst_52025);

(statearr_52046[(8)] = inst_52023__$1);

return statearr_52046;
})();
if(cljs.core.truth_(inst_52026)){
var statearr_52047_52073 = state_52044__$1;
(statearr_52047_52073[(1)] = (8));

} else {
var statearr_52048_52074 = state_52044__$1;
(statearr_52048_52074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52045 === (1))){
var inst_52013 = cljs.core.vec.call(null,chs);
var inst_52014 = inst_52013;
var state_52044__$1 = (function (){var statearr_52049 = state_52044;
(statearr_52049[(10)] = inst_52014);

return statearr_52049;
})();
var statearr_52050_52075 = state_52044__$1;
(statearr_52050_52075[(2)] = null);

(statearr_52050_52075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52045 === (4))){
var inst_52014 = (state_52044[(10)]);
var state_52044__$1 = state_52044;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52044__$1,(7),inst_52014);
} else {
if((state_val_52045 === (6))){
var inst_52040 = (state_52044[(2)]);
var state_52044__$1 = state_52044;
var statearr_52051_52076 = state_52044__$1;
(statearr_52051_52076[(2)] = inst_52040);

(statearr_52051_52076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52045 === (3))){
var inst_52042 = (state_52044[(2)]);
var state_52044__$1 = state_52044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52044__$1,inst_52042);
} else {
if((state_val_52045 === (2))){
var inst_52014 = (state_52044[(10)]);
var inst_52016 = cljs.core.count.call(null,inst_52014);
var inst_52017 = (inst_52016 > (0));
var state_52044__$1 = state_52044;
if(cljs.core.truth_(inst_52017)){
var statearr_52053_52077 = state_52044__$1;
(statearr_52053_52077[(1)] = (4));

} else {
var statearr_52054_52078 = state_52044__$1;
(statearr_52054_52078[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52045 === (11))){
var inst_52014 = (state_52044[(10)]);
var inst_52033 = (state_52044[(2)]);
var tmp52052 = inst_52014;
var inst_52014__$1 = tmp52052;
var state_52044__$1 = (function (){var statearr_52055 = state_52044;
(statearr_52055[(11)] = inst_52033);

(statearr_52055[(10)] = inst_52014__$1);

return statearr_52055;
})();
var statearr_52056_52079 = state_52044__$1;
(statearr_52056_52079[(2)] = null);

(statearr_52056_52079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52045 === (9))){
var inst_52024 = (state_52044[(7)]);
var state_52044__$1 = state_52044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52044__$1,(11),out,inst_52024);
} else {
if((state_val_52045 === (5))){
var inst_52038 = cljs.core.async.close_BANG_.call(null,out);
var state_52044__$1 = state_52044;
var statearr_52057_52080 = state_52044__$1;
(statearr_52057_52080[(2)] = inst_52038);

(statearr_52057_52080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52045 === (10))){
var inst_52036 = (state_52044[(2)]);
var state_52044__$1 = state_52044;
var statearr_52058_52081 = state_52044__$1;
(statearr_52058_52081[(2)] = inst_52036);

(statearr_52058_52081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52045 === (8))){
var inst_52024 = (state_52044[(7)]);
var inst_52025 = (state_52044[(9)]);
var inst_52014 = (state_52044[(10)]);
var inst_52023 = (state_52044[(8)]);
var inst_52028 = (function (){var cs = inst_52014;
var vec__52019 = inst_52023;
var v = inst_52024;
var c = inst_52025;
return ((function (cs,vec__52019,v,c,inst_52024,inst_52025,inst_52014,inst_52023,state_val_52045,c__28009__auto___52072,out){
return (function (p1__52009_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__52009_SHARP_);
});
;})(cs,vec__52019,v,c,inst_52024,inst_52025,inst_52014,inst_52023,state_val_52045,c__28009__auto___52072,out))
})();
var inst_52029 = cljs.core.filterv.call(null,inst_52028,inst_52014);
var inst_52014__$1 = inst_52029;
var state_52044__$1 = (function (){var statearr_52059 = state_52044;
(statearr_52059[(10)] = inst_52014__$1);

return statearr_52059;
})();
var statearr_52060_52082 = state_52044__$1;
(statearr_52060_52082[(2)] = null);

(statearr_52060_52082[(1)] = (2));


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
});})(c__28009__auto___52072,out))
;
return ((function (switch__27988__auto__,c__28009__auto___52072,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_52064 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52064[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_52064[(1)] = (1));

return statearr_52064;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_52044){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_52044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e52065){if((e52065 instanceof Object)){
var ex__27992__auto__ = e52065;
var statearr_52066_52083 = state_52044;
(statearr_52066_52083[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52084 = state_52044;
state_52044 = G__52084;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_52044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_52044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___52072,out))
})();
var state__28011__auto__ = (function (){var statearr_52067 = f__28010__auto__.call(null);
(statearr_52067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___52072);

return statearr_52067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___52072,out))
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
var args52085 = [];
var len__27054__auto___52134 = arguments.length;
var i__27055__auto___52135 = (0);
while(true){
if((i__27055__auto___52135 < len__27054__auto___52134)){
args52085.push((arguments[i__27055__auto___52135]));

var G__52136 = (i__27055__auto___52135 + (1));
i__27055__auto___52135 = G__52136;
continue;
} else {
}
break;
}

var G__52087 = args52085.length;
switch (G__52087) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52085.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___52138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___52138,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___52138,out){
return (function (state_52111){
var state_val_52112 = (state_52111[(1)]);
if((state_val_52112 === (7))){
var inst_52093 = (state_52111[(7)]);
var inst_52093__$1 = (state_52111[(2)]);
var inst_52094 = (inst_52093__$1 == null);
var inst_52095 = cljs.core.not.call(null,inst_52094);
var state_52111__$1 = (function (){var statearr_52113 = state_52111;
(statearr_52113[(7)] = inst_52093__$1);

return statearr_52113;
})();
if(inst_52095){
var statearr_52114_52139 = state_52111__$1;
(statearr_52114_52139[(1)] = (8));

} else {
var statearr_52115_52140 = state_52111__$1;
(statearr_52115_52140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52112 === (1))){
var inst_52088 = (0);
var state_52111__$1 = (function (){var statearr_52116 = state_52111;
(statearr_52116[(8)] = inst_52088);

return statearr_52116;
})();
var statearr_52117_52141 = state_52111__$1;
(statearr_52117_52141[(2)] = null);

(statearr_52117_52141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52112 === (4))){
var state_52111__$1 = state_52111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52111__$1,(7),ch);
} else {
if((state_val_52112 === (6))){
var inst_52106 = (state_52111[(2)]);
var state_52111__$1 = state_52111;
var statearr_52118_52142 = state_52111__$1;
(statearr_52118_52142[(2)] = inst_52106);

(statearr_52118_52142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52112 === (3))){
var inst_52108 = (state_52111[(2)]);
var inst_52109 = cljs.core.async.close_BANG_.call(null,out);
var state_52111__$1 = (function (){var statearr_52119 = state_52111;
(statearr_52119[(9)] = inst_52108);

return statearr_52119;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52111__$1,inst_52109);
} else {
if((state_val_52112 === (2))){
var inst_52088 = (state_52111[(8)]);
var inst_52090 = (inst_52088 < n);
var state_52111__$1 = state_52111;
if(cljs.core.truth_(inst_52090)){
var statearr_52120_52143 = state_52111__$1;
(statearr_52120_52143[(1)] = (4));

} else {
var statearr_52121_52144 = state_52111__$1;
(statearr_52121_52144[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52112 === (11))){
var inst_52088 = (state_52111[(8)]);
var inst_52098 = (state_52111[(2)]);
var inst_52099 = (inst_52088 + (1));
var inst_52088__$1 = inst_52099;
var state_52111__$1 = (function (){var statearr_52122 = state_52111;
(statearr_52122[(10)] = inst_52098);

(statearr_52122[(8)] = inst_52088__$1);

return statearr_52122;
})();
var statearr_52123_52145 = state_52111__$1;
(statearr_52123_52145[(2)] = null);

(statearr_52123_52145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52112 === (9))){
var state_52111__$1 = state_52111;
var statearr_52124_52146 = state_52111__$1;
(statearr_52124_52146[(2)] = null);

(statearr_52124_52146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52112 === (5))){
var state_52111__$1 = state_52111;
var statearr_52125_52147 = state_52111__$1;
(statearr_52125_52147[(2)] = null);

(statearr_52125_52147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52112 === (10))){
var inst_52103 = (state_52111[(2)]);
var state_52111__$1 = state_52111;
var statearr_52126_52148 = state_52111__$1;
(statearr_52126_52148[(2)] = inst_52103);

(statearr_52126_52148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52112 === (8))){
var inst_52093 = (state_52111[(7)]);
var state_52111__$1 = state_52111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52111__$1,(11),out,inst_52093);
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
});})(c__28009__auto___52138,out))
;
return ((function (switch__27988__auto__,c__28009__auto___52138,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_52130 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52130[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_52130[(1)] = (1));

return statearr_52130;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_52111){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_52111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e52131){if((e52131 instanceof Object)){
var ex__27992__auto__ = e52131;
var statearr_52132_52149 = state_52111;
(statearr_52132_52149[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52150 = state_52111;
state_52111 = G__52150;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_52111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_52111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___52138,out))
})();
var state__28011__auto__ = (function (){var statearr_52133 = f__28010__auto__.call(null);
(statearr_52133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___52138);

return statearr_52133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___52138,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52158 = (function (map_LT_,f,ch,meta52159){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta52159 = meta52159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52160,meta52159__$1){
var self__ = this;
var _52160__$1 = this;
return (new cljs.core.async.t_cljs$core$async52158(self__.map_LT_,self__.f,self__.ch,meta52159__$1));
});

cljs.core.async.t_cljs$core$async52158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52160){
var self__ = this;
var _52160__$1 = this;
return self__.meta52159;
});

cljs.core.async.t_cljs$core$async52158.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async52158.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52158.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52158.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async52158.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async52161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52161 = (function (map_LT_,f,ch,meta52159,_,fn1,meta52162){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta52159 = meta52159;
this._ = _;
this.fn1 = fn1;
this.meta52162 = meta52162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_52163,meta52162__$1){
var self__ = this;
var _52163__$1 = this;
return (new cljs.core.async.t_cljs$core$async52161(self__.map_LT_,self__.f,self__.ch,self__.meta52159,self__._,self__.fn1,meta52162__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async52161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_52163){
var self__ = this;
var _52163__$1 = this;
return self__.meta52162;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52161.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async52161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52161.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__52151_SHARP_){
return f1.call(null,(((p1__52151_SHARP_ == null))?null:self__.f.call(null,p1__52151_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async52161.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52159","meta52159",-410102388,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52158","cljs.core.async/t_cljs$core$async52158",1366632567,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52162","meta52162",1597119317,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52161";

cljs.core.async.t_cljs$core$async52161.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async52161");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async52161 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52161(map_LT___$1,f__$1,ch__$1,meta52159__$1,___$2,fn1__$1,meta52162){
return (new cljs.core.async.t_cljs$core$async52161(map_LT___$1,f__$1,ch__$1,meta52159__$1,___$2,fn1__$1,meta52162));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async52161(self__.map_LT_,self__.f,self__.ch,self__.meta52159,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async52158.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async52158.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async52158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52159","meta52159",-410102388,null)], null);
});

cljs.core.async.t_cljs$core$async52158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52158";

cljs.core.async.t_cljs$core$async52158.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async52158");
});

cljs.core.async.__GT_t_cljs$core$async52158 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52158(map_LT___$1,f__$1,ch__$1,meta52159){
return (new cljs.core.async.t_cljs$core$async52158(map_LT___$1,f__$1,ch__$1,meta52159));
});

}

return (new cljs.core.async.t_cljs$core$async52158(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52167 = (function (map_GT_,f,ch,meta52168){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta52168 = meta52168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52169,meta52168__$1){
var self__ = this;
var _52169__$1 = this;
return (new cljs.core.async.t_cljs$core$async52167(self__.map_GT_,self__.f,self__.ch,meta52168__$1));
});

cljs.core.async.t_cljs$core$async52167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52169){
var self__ = this;
var _52169__$1 = this;
return self__.meta52168;
});

cljs.core.async.t_cljs$core$async52167.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async52167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52167.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async52167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52167.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async52167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async52167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52168","meta52168",869601112,null)], null);
});

cljs.core.async.t_cljs$core$async52167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52167";

cljs.core.async.t_cljs$core$async52167.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async52167");
});

cljs.core.async.__GT_t_cljs$core$async52167 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52167(map_GT___$1,f__$1,ch__$1,meta52168){
return (new cljs.core.async.t_cljs$core$async52167(map_GT___$1,f__$1,ch__$1,meta52168));
});

}

return (new cljs.core.async.t_cljs$core$async52167(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async52173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52173 = (function (filter_GT_,p,ch,meta52174){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta52174 = meta52174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52175,meta52174__$1){
var self__ = this;
var _52175__$1 = this;
return (new cljs.core.async.t_cljs$core$async52173(self__.filter_GT_,self__.p,self__.ch,meta52174__$1));
});

cljs.core.async.t_cljs$core$async52173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52175){
var self__ = this;
var _52175__$1 = this;
return self__.meta52174;
});

cljs.core.async.t_cljs$core$async52173.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async52173.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52173.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52173.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async52173.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52173.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async52173.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async52173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52174","meta52174",-1179997745,null)], null);
});

cljs.core.async.t_cljs$core$async52173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52173";

cljs.core.async.t_cljs$core$async52173.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async52173");
});

cljs.core.async.__GT_t_cljs$core$async52173 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52173(filter_GT___$1,p__$1,ch__$1,meta52174){
return (new cljs.core.async.t_cljs$core$async52173(filter_GT___$1,p__$1,ch__$1,meta52174));
});

}

return (new cljs.core.async.t_cljs$core$async52173(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args52176 = [];
var len__27054__auto___52220 = arguments.length;
var i__27055__auto___52221 = (0);
while(true){
if((i__27055__auto___52221 < len__27054__auto___52220)){
args52176.push((arguments[i__27055__auto___52221]));

var G__52222 = (i__27055__auto___52221 + (1));
i__27055__auto___52221 = G__52222;
continue;
} else {
}
break;
}

var G__52178 = args52176.length;
switch (G__52178) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52176.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___52224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___52224,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___52224,out){
return (function (state_52199){
var state_val_52200 = (state_52199[(1)]);
if((state_val_52200 === (7))){
var inst_52195 = (state_52199[(2)]);
var state_52199__$1 = state_52199;
var statearr_52201_52225 = state_52199__$1;
(statearr_52201_52225[(2)] = inst_52195);

(statearr_52201_52225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52200 === (1))){
var state_52199__$1 = state_52199;
var statearr_52202_52226 = state_52199__$1;
(statearr_52202_52226[(2)] = null);

(statearr_52202_52226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52200 === (4))){
var inst_52181 = (state_52199[(7)]);
var inst_52181__$1 = (state_52199[(2)]);
var inst_52182 = (inst_52181__$1 == null);
var state_52199__$1 = (function (){var statearr_52203 = state_52199;
(statearr_52203[(7)] = inst_52181__$1);

return statearr_52203;
})();
if(cljs.core.truth_(inst_52182)){
var statearr_52204_52227 = state_52199__$1;
(statearr_52204_52227[(1)] = (5));

} else {
var statearr_52205_52228 = state_52199__$1;
(statearr_52205_52228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52200 === (6))){
var inst_52181 = (state_52199[(7)]);
var inst_52186 = p.call(null,inst_52181);
var state_52199__$1 = state_52199;
if(cljs.core.truth_(inst_52186)){
var statearr_52206_52229 = state_52199__$1;
(statearr_52206_52229[(1)] = (8));

} else {
var statearr_52207_52230 = state_52199__$1;
(statearr_52207_52230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52200 === (3))){
var inst_52197 = (state_52199[(2)]);
var state_52199__$1 = state_52199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52199__$1,inst_52197);
} else {
if((state_val_52200 === (2))){
var state_52199__$1 = state_52199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52199__$1,(4),ch);
} else {
if((state_val_52200 === (11))){
var inst_52189 = (state_52199[(2)]);
var state_52199__$1 = state_52199;
var statearr_52208_52231 = state_52199__$1;
(statearr_52208_52231[(2)] = inst_52189);

(statearr_52208_52231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52200 === (9))){
var state_52199__$1 = state_52199;
var statearr_52209_52232 = state_52199__$1;
(statearr_52209_52232[(2)] = null);

(statearr_52209_52232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52200 === (5))){
var inst_52184 = cljs.core.async.close_BANG_.call(null,out);
var state_52199__$1 = state_52199;
var statearr_52210_52233 = state_52199__$1;
(statearr_52210_52233[(2)] = inst_52184);

(statearr_52210_52233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52200 === (10))){
var inst_52192 = (state_52199[(2)]);
var state_52199__$1 = (function (){var statearr_52211 = state_52199;
(statearr_52211[(8)] = inst_52192);

return statearr_52211;
})();
var statearr_52212_52234 = state_52199__$1;
(statearr_52212_52234[(2)] = null);

(statearr_52212_52234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52200 === (8))){
var inst_52181 = (state_52199[(7)]);
var state_52199__$1 = state_52199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52199__$1,(11),out,inst_52181);
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
});})(c__28009__auto___52224,out))
;
return ((function (switch__27988__auto__,c__28009__auto___52224,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_52216 = [null,null,null,null,null,null,null,null,null];
(statearr_52216[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_52216[(1)] = (1));

return statearr_52216;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_52199){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_52199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e52217){if((e52217 instanceof Object)){
var ex__27992__auto__ = e52217;
var statearr_52218_52235 = state_52199;
(statearr_52218_52235[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52236 = state_52199;
state_52199 = G__52236;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_52199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_52199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___52224,out))
})();
var state__28011__auto__ = (function (){var statearr_52219 = f__28010__auto__.call(null);
(statearr_52219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___52224);

return statearr_52219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___52224,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args52237 = [];
var len__27054__auto___52240 = arguments.length;
var i__27055__auto___52241 = (0);
while(true){
if((i__27055__auto___52241 < len__27054__auto___52240)){
args52237.push((arguments[i__27055__auto___52241]));

var G__52242 = (i__27055__auto___52241 + (1));
i__27055__auto___52241 = G__52242;
continue;
} else {
}
break;
}

var G__52239 = args52237.length;
switch (G__52239) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52237.length)].join('')));

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
return (function (state_52409){
var state_val_52410 = (state_52409[(1)]);
if((state_val_52410 === (7))){
var inst_52405 = (state_52409[(2)]);
var state_52409__$1 = state_52409;
var statearr_52411_52452 = state_52409__$1;
(statearr_52411_52452[(2)] = inst_52405);

(statearr_52411_52452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (20))){
var inst_52375 = (state_52409[(7)]);
var inst_52386 = (state_52409[(2)]);
var inst_52387 = cljs.core.next.call(null,inst_52375);
var inst_52361 = inst_52387;
var inst_52362 = null;
var inst_52363 = (0);
var inst_52364 = (0);
var state_52409__$1 = (function (){var statearr_52412 = state_52409;
(statearr_52412[(8)] = inst_52361);

(statearr_52412[(9)] = inst_52362);

(statearr_52412[(10)] = inst_52363);

(statearr_52412[(11)] = inst_52364);

(statearr_52412[(12)] = inst_52386);

return statearr_52412;
})();
var statearr_52413_52453 = state_52409__$1;
(statearr_52413_52453[(2)] = null);

(statearr_52413_52453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (1))){
var state_52409__$1 = state_52409;
var statearr_52414_52454 = state_52409__$1;
(statearr_52414_52454[(2)] = null);

(statearr_52414_52454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (4))){
var inst_52350 = (state_52409[(13)]);
var inst_52350__$1 = (state_52409[(2)]);
var inst_52351 = (inst_52350__$1 == null);
var state_52409__$1 = (function (){var statearr_52415 = state_52409;
(statearr_52415[(13)] = inst_52350__$1);

return statearr_52415;
})();
if(cljs.core.truth_(inst_52351)){
var statearr_52416_52455 = state_52409__$1;
(statearr_52416_52455[(1)] = (5));

} else {
var statearr_52417_52456 = state_52409__$1;
(statearr_52417_52456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (15))){
var state_52409__$1 = state_52409;
var statearr_52421_52457 = state_52409__$1;
(statearr_52421_52457[(2)] = null);

(statearr_52421_52457[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (21))){
var state_52409__$1 = state_52409;
var statearr_52422_52458 = state_52409__$1;
(statearr_52422_52458[(2)] = null);

(statearr_52422_52458[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (13))){
var inst_52361 = (state_52409[(8)]);
var inst_52362 = (state_52409[(9)]);
var inst_52363 = (state_52409[(10)]);
var inst_52364 = (state_52409[(11)]);
var inst_52371 = (state_52409[(2)]);
var inst_52372 = (inst_52364 + (1));
var tmp52418 = inst_52361;
var tmp52419 = inst_52362;
var tmp52420 = inst_52363;
var inst_52361__$1 = tmp52418;
var inst_52362__$1 = tmp52419;
var inst_52363__$1 = tmp52420;
var inst_52364__$1 = inst_52372;
var state_52409__$1 = (function (){var statearr_52423 = state_52409;
(statearr_52423[(8)] = inst_52361__$1);

(statearr_52423[(9)] = inst_52362__$1);

(statearr_52423[(10)] = inst_52363__$1);

(statearr_52423[(14)] = inst_52371);

(statearr_52423[(11)] = inst_52364__$1);

return statearr_52423;
})();
var statearr_52424_52459 = state_52409__$1;
(statearr_52424_52459[(2)] = null);

(statearr_52424_52459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (22))){
var state_52409__$1 = state_52409;
var statearr_52425_52460 = state_52409__$1;
(statearr_52425_52460[(2)] = null);

(statearr_52425_52460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (6))){
var inst_52350 = (state_52409[(13)]);
var inst_52359 = f.call(null,inst_52350);
var inst_52360 = cljs.core.seq.call(null,inst_52359);
var inst_52361 = inst_52360;
var inst_52362 = null;
var inst_52363 = (0);
var inst_52364 = (0);
var state_52409__$1 = (function (){var statearr_52426 = state_52409;
(statearr_52426[(8)] = inst_52361);

(statearr_52426[(9)] = inst_52362);

(statearr_52426[(10)] = inst_52363);

(statearr_52426[(11)] = inst_52364);

return statearr_52426;
})();
var statearr_52427_52461 = state_52409__$1;
(statearr_52427_52461[(2)] = null);

(statearr_52427_52461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (17))){
var inst_52375 = (state_52409[(7)]);
var inst_52379 = cljs.core.chunk_first.call(null,inst_52375);
var inst_52380 = cljs.core.chunk_rest.call(null,inst_52375);
var inst_52381 = cljs.core.count.call(null,inst_52379);
var inst_52361 = inst_52380;
var inst_52362 = inst_52379;
var inst_52363 = inst_52381;
var inst_52364 = (0);
var state_52409__$1 = (function (){var statearr_52428 = state_52409;
(statearr_52428[(8)] = inst_52361);

(statearr_52428[(9)] = inst_52362);

(statearr_52428[(10)] = inst_52363);

(statearr_52428[(11)] = inst_52364);

return statearr_52428;
})();
var statearr_52429_52462 = state_52409__$1;
(statearr_52429_52462[(2)] = null);

(statearr_52429_52462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (3))){
var inst_52407 = (state_52409[(2)]);
var state_52409__$1 = state_52409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52409__$1,inst_52407);
} else {
if((state_val_52410 === (12))){
var inst_52395 = (state_52409[(2)]);
var state_52409__$1 = state_52409;
var statearr_52430_52463 = state_52409__$1;
(statearr_52430_52463[(2)] = inst_52395);

(statearr_52430_52463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (2))){
var state_52409__$1 = state_52409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52409__$1,(4),in$);
} else {
if((state_val_52410 === (23))){
var inst_52403 = (state_52409[(2)]);
var state_52409__$1 = state_52409;
var statearr_52431_52464 = state_52409__$1;
(statearr_52431_52464[(2)] = inst_52403);

(statearr_52431_52464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (19))){
var inst_52390 = (state_52409[(2)]);
var state_52409__$1 = state_52409;
var statearr_52432_52465 = state_52409__$1;
(statearr_52432_52465[(2)] = inst_52390);

(statearr_52432_52465[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (11))){
var inst_52361 = (state_52409[(8)]);
var inst_52375 = (state_52409[(7)]);
var inst_52375__$1 = cljs.core.seq.call(null,inst_52361);
var state_52409__$1 = (function (){var statearr_52433 = state_52409;
(statearr_52433[(7)] = inst_52375__$1);

return statearr_52433;
})();
if(inst_52375__$1){
var statearr_52434_52466 = state_52409__$1;
(statearr_52434_52466[(1)] = (14));

} else {
var statearr_52435_52467 = state_52409__$1;
(statearr_52435_52467[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (9))){
var inst_52397 = (state_52409[(2)]);
var inst_52398 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_52409__$1 = (function (){var statearr_52436 = state_52409;
(statearr_52436[(15)] = inst_52397);

return statearr_52436;
})();
if(cljs.core.truth_(inst_52398)){
var statearr_52437_52468 = state_52409__$1;
(statearr_52437_52468[(1)] = (21));

} else {
var statearr_52438_52469 = state_52409__$1;
(statearr_52438_52469[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (5))){
var inst_52353 = cljs.core.async.close_BANG_.call(null,out);
var state_52409__$1 = state_52409;
var statearr_52439_52470 = state_52409__$1;
(statearr_52439_52470[(2)] = inst_52353);

(statearr_52439_52470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (14))){
var inst_52375 = (state_52409[(7)]);
var inst_52377 = cljs.core.chunked_seq_QMARK_.call(null,inst_52375);
var state_52409__$1 = state_52409;
if(inst_52377){
var statearr_52440_52471 = state_52409__$1;
(statearr_52440_52471[(1)] = (17));

} else {
var statearr_52441_52472 = state_52409__$1;
(statearr_52441_52472[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (16))){
var inst_52393 = (state_52409[(2)]);
var state_52409__$1 = state_52409;
var statearr_52442_52473 = state_52409__$1;
(statearr_52442_52473[(2)] = inst_52393);

(statearr_52442_52473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52410 === (10))){
var inst_52362 = (state_52409[(9)]);
var inst_52364 = (state_52409[(11)]);
var inst_52369 = cljs.core._nth.call(null,inst_52362,inst_52364);
var state_52409__$1 = state_52409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52409__$1,(13),out,inst_52369);
} else {
if((state_val_52410 === (18))){
var inst_52375 = (state_52409[(7)]);
var inst_52384 = cljs.core.first.call(null,inst_52375);
var state_52409__$1 = state_52409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52409__$1,(20),out,inst_52384);
} else {
if((state_val_52410 === (8))){
var inst_52363 = (state_52409[(10)]);
var inst_52364 = (state_52409[(11)]);
var inst_52366 = (inst_52364 < inst_52363);
var inst_52367 = inst_52366;
var state_52409__$1 = state_52409;
if(cljs.core.truth_(inst_52367)){
var statearr_52443_52474 = state_52409__$1;
(statearr_52443_52474[(1)] = (10));

} else {
var statearr_52444_52475 = state_52409__$1;
(statearr_52444_52475[(1)] = (11));

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
var statearr_52448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52448[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__);

(statearr_52448[(1)] = (1));

return statearr_52448;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____1 = (function (state_52409){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_52409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e52449){if((e52449 instanceof Object)){
var ex__27992__auto__ = e52449;
var statearr_52450_52476 = state_52409;
(statearr_52450_52476[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52477 = state_52409;
state_52409 = G__52477;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__ = function(state_52409){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____1.call(this,state_52409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27989__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_52451 = f__28010__auto__.call(null);
(statearr_52451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_52451;
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
var args52478 = [];
var len__27054__auto___52481 = arguments.length;
var i__27055__auto___52482 = (0);
while(true){
if((i__27055__auto___52482 < len__27054__auto___52481)){
args52478.push((arguments[i__27055__auto___52482]));

var G__52483 = (i__27055__auto___52482 + (1));
i__27055__auto___52482 = G__52483;
continue;
} else {
}
break;
}

var G__52480 = args52478.length;
switch (G__52480) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52478.length)].join('')));

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
var args52485 = [];
var len__27054__auto___52488 = arguments.length;
var i__27055__auto___52489 = (0);
while(true){
if((i__27055__auto___52489 < len__27054__auto___52488)){
args52485.push((arguments[i__27055__auto___52489]));

var G__52490 = (i__27055__auto___52489 + (1));
i__27055__auto___52489 = G__52490;
continue;
} else {
}
break;
}

var G__52487 = args52485.length;
switch (G__52487) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52485.length)].join('')));

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
var args52492 = [];
var len__27054__auto___52543 = arguments.length;
var i__27055__auto___52544 = (0);
while(true){
if((i__27055__auto___52544 < len__27054__auto___52543)){
args52492.push((arguments[i__27055__auto___52544]));

var G__52545 = (i__27055__auto___52544 + (1));
i__27055__auto___52544 = G__52545;
continue;
} else {
}
break;
}

var G__52494 = args52492.length;
switch (G__52494) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52492.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___52547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___52547,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___52547,out){
return (function (state_52518){
var state_val_52519 = (state_52518[(1)]);
if((state_val_52519 === (7))){
var inst_52513 = (state_52518[(2)]);
var state_52518__$1 = state_52518;
var statearr_52520_52548 = state_52518__$1;
(statearr_52520_52548[(2)] = inst_52513);

(statearr_52520_52548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52519 === (1))){
var inst_52495 = null;
var state_52518__$1 = (function (){var statearr_52521 = state_52518;
(statearr_52521[(7)] = inst_52495);

return statearr_52521;
})();
var statearr_52522_52549 = state_52518__$1;
(statearr_52522_52549[(2)] = null);

(statearr_52522_52549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52519 === (4))){
var inst_52498 = (state_52518[(8)]);
var inst_52498__$1 = (state_52518[(2)]);
var inst_52499 = (inst_52498__$1 == null);
var inst_52500 = cljs.core.not.call(null,inst_52499);
var state_52518__$1 = (function (){var statearr_52523 = state_52518;
(statearr_52523[(8)] = inst_52498__$1);

return statearr_52523;
})();
if(inst_52500){
var statearr_52524_52550 = state_52518__$1;
(statearr_52524_52550[(1)] = (5));

} else {
var statearr_52525_52551 = state_52518__$1;
(statearr_52525_52551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52519 === (6))){
var state_52518__$1 = state_52518;
var statearr_52526_52552 = state_52518__$1;
(statearr_52526_52552[(2)] = null);

(statearr_52526_52552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52519 === (3))){
var inst_52515 = (state_52518[(2)]);
var inst_52516 = cljs.core.async.close_BANG_.call(null,out);
var state_52518__$1 = (function (){var statearr_52527 = state_52518;
(statearr_52527[(9)] = inst_52515);

return statearr_52527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52518__$1,inst_52516);
} else {
if((state_val_52519 === (2))){
var state_52518__$1 = state_52518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52518__$1,(4),ch);
} else {
if((state_val_52519 === (11))){
var inst_52498 = (state_52518[(8)]);
var inst_52507 = (state_52518[(2)]);
var inst_52495 = inst_52498;
var state_52518__$1 = (function (){var statearr_52528 = state_52518;
(statearr_52528[(10)] = inst_52507);

(statearr_52528[(7)] = inst_52495);

return statearr_52528;
})();
var statearr_52529_52553 = state_52518__$1;
(statearr_52529_52553[(2)] = null);

(statearr_52529_52553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52519 === (9))){
var inst_52498 = (state_52518[(8)]);
var state_52518__$1 = state_52518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52518__$1,(11),out,inst_52498);
} else {
if((state_val_52519 === (5))){
var inst_52495 = (state_52518[(7)]);
var inst_52498 = (state_52518[(8)]);
var inst_52502 = cljs.core._EQ_.call(null,inst_52498,inst_52495);
var state_52518__$1 = state_52518;
if(inst_52502){
var statearr_52531_52554 = state_52518__$1;
(statearr_52531_52554[(1)] = (8));

} else {
var statearr_52532_52555 = state_52518__$1;
(statearr_52532_52555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52519 === (10))){
var inst_52510 = (state_52518[(2)]);
var state_52518__$1 = state_52518;
var statearr_52533_52556 = state_52518__$1;
(statearr_52533_52556[(2)] = inst_52510);

(statearr_52533_52556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52519 === (8))){
var inst_52495 = (state_52518[(7)]);
var tmp52530 = inst_52495;
var inst_52495__$1 = tmp52530;
var state_52518__$1 = (function (){var statearr_52534 = state_52518;
(statearr_52534[(7)] = inst_52495__$1);

return statearr_52534;
})();
var statearr_52535_52557 = state_52518__$1;
(statearr_52535_52557[(2)] = null);

(statearr_52535_52557[(1)] = (2));


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
});})(c__28009__auto___52547,out))
;
return ((function (switch__27988__auto__,c__28009__auto___52547,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_52539 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52539[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_52539[(1)] = (1));

return statearr_52539;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_52518){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_52518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e52540){if((e52540 instanceof Object)){
var ex__27992__auto__ = e52540;
var statearr_52541_52558 = state_52518;
(statearr_52541_52558[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52559 = state_52518;
state_52518 = G__52559;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_52518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_52518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___52547,out))
})();
var state__28011__auto__ = (function (){var statearr_52542 = f__28010__auto__.call(null);
(statearr_52542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___52547);

return statearr_52542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___52547,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args52560 = [];
var len__27054__auto___52630 = arguments.length;
var i__27055__auto___52631 = (0);
while(true){
if((i__27055__auto___52631 < len__27054__auto___52630)){
args52560.push((arguments[i__27055__auto___52631]));

var G__52632 = (i__27055__auto___52631 + (1));
i__27055__auto___52631 = G__52632;
continue;
} else {
}
break;
}

var G__52562 = args52560.length;
switch (G__52562) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52560.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___52634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___52634,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___52634,out){
return (function (state_52600){
var state_val_52601 = (state_52600[(1)]);
if((state_val_52601 === (7))){
var inst_52596 = (state_52600[(2)]);
var state_52600__$1 = state_52600;
var statearr_52602_52635 = state_52600__$1;
(statearr_52602_52635[(2)] = inst_52596);

(statearr_52602_52635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (1))){
var inst_52563 = (new Array(n));
var inst_52564 = inst_52563;
var inst_52565 = (0);
var state_52600__$1 = (function (){var statearr_52603 = state_52600;
(statearr_52603[(7)] = inst_52565);

(statearr_52603[(8)] = inst_52564);

return statearr_52603;
})();
var statearr_52604_52636 = state_52600__$1;
(statearr_52604_52636[(2)] = null);

(statearr_52604_52636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (4))){
var inst_52568 = (state_52600[(9)]);
var inst_52568__$1 = (state_52600[(2)]);
var inst_52569 = (inst_52568__$1 == null);
var inst_52570 = cljs.core.not.call(null,inst_52569);
var state_52600__$1 = (function (){var statearr_52605 = state_52600;
(statearr_52605[(9)] = inst_52568__$1);

return statearr_52605;
})();
if(inst_52570){
var statearr_52606_52637 = state_52600__$1;
(statearr_52606_52637[(1)] = (5));

} else {
var statearr_52607_52638 = state_52600__$1;
(statearr_52607_52638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (15))){
var inst_52590 = (state_52600[(2)]);
var state_52600__$1 = state_52600;
var statearr_52608_52639 = state_52600__$1;
(statearr_52608_52639[(2)] = inst_52590);

(statearr_52608_52639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (13))){
var state_52600__$1 = state_52600;
var statearr_52609_52640 = state_52600__$1;
(statearr_52609_52640[(2)] = null);

(statearr_52609_52640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (6))){
var inst_52565 = (state_52600[(7)]);
var inst_52586 = (inst_52565 > (0));
var state_52600__$1 = state_52600;
if(cljs.core.truth_(inst_52586)){
var statearr_52610_52641 = state_52600__$1;
(statearr_52610_52641[(1)] = (12));

} else {
var statearr_52611_52642 = state_52600__$1;
(statearr_52611_52642[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (3))){
var inst_52598 = (state_52600[(2)]);
var state_52600__$1 = state_52600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52600__$1,inst_52598);
} else {
if((state_val_52601 === (12))){
var inst_52564 = (state_52600[(8)]);
var inst_52588 = cljs.core.vec.call(null,inst_52564);
var state_52600__$1 = state_52600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52600__$1,(15),out,inst_52588);
} else {
if((state_val_52601 === (2))){
var state_52600__$1 = state_52600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52600__$1,(4),ch);
} else {
if((state_val_52601 === (11))){
var inst_52580 = (state_52600[(2)]);
var inst_52581 = (new Array(n));
var inst_52564 = inst_52581;
var inst_52565 = (0);
var state_52600__$1 = (function (){var statearr_52612 = state_52600;
(statearr_52612[(7)] = inst_52565);

(statearr_52612[(10)] = inst_52580);

(statearr_52612[(8)] = inst_52564);

return statearr_52612;
})();
var statearr_52613_52643 = state_52600__$1;
(statearr_52613_52643[(2)] = null);

(statearr_52613_52643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (9))){
var inst_52564 = (state_52600[(8)]);
var inst_52578 = cljs.core.vec.call(null,inst_52564);
var state_52600__$1 = state_52600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52600__$1,(11),out,inst_52578);
} else {
if((state_val_52601 === (5))){
var inst_52573 = (state_52600[(11)]);
var inst_52568 = (state_52600[(9)]);
var inst_52565 = (state_52600[(7)]);
var inst_52564 = (state_52600[(8)]);
var inst_52572 = (inst_52564[inst_52565] = inst_52568);
var inst_52573__$1 = (inst_52565 + (1));
var inst_52574 = (inst_52573__$1 < n);
var state_52600__$1 = (function (){var statearr_52614 = state_52600;
(statearr_52614[(12)] = inst_52572);

(statearr_52614[(11)] = inst_52573__$1);

return statearr_52614;
})();
if(cljs.core.truth_(inst_52574)){
var statearr_52615_52644 = state_52600__$1;
(statearr_52615_52644[(1)] = (8));

} else {
var statearr_52616_52645 = state_52600__$1;
(statearr_52616_52645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (14))){
var inst_52593 = (state_52600[(2)]);
var inst_52594 = cljs.core.async.close_BANG_.call(null,out);
var state_52600__$1 = (function (){var statearr_52618 = state_52600;
(statearr_52618[(13)] = inst_52593);

return statearr_52618;
})();
var statearr_52619_52646 = state_52600__$1;
(statearr_52619_52646[(2)] = inst_52594);

(statearr_52619_52646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (10))){
var inst_52584 = (state_52600[(2)]);
var state_52600__$1 = state_52600;
var statearr_52620_52647 = state_52600__$1;
(statearr_52620_52647[(2)] = inst_52584);

(statearr_52620_52647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (8))){
var inst_52573 = (state_52600[(11)]);
var inst_52564 = (state_52600[(8)]);
var tmp52617 = inst_52564;
var inst_52564__$1 = tmp52617;
var inst_52565 = inst_52573;
var state_52600__$1 = (function (){var statearr_52621 = state_52600;
(statearr_52621[(7)] = inst_52565);

(statearr_52621[(8)] = inst_52564__$1);

return statearr_52621;
})();
var statearr_52622_52648 = state_52600__$1;
(statearr_52622_52648[(2)] = null);

(statearr_52622_52648[(1)] = (2));


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
});})(c__28009__auto___52634,out))
;
return ((function (switch__27988__auto__,c__28009__auto___52634,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_52626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52626[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_52626[(1)] = (1));

return statearr_52626;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_52600){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_52600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e52627){if((e52627 instanceof Object)){
var ex__27992__auto__ = e52627;
var statearr_52628_52649 = state_52600;
(statearr_52628_52649[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52650 = state_52600;
state_52600 = G__52650;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_52600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_52600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___52634,out))
})();
var state__28011__auto__ = (function (){var statearr_52629 = f__28010__auto__.call(null);
(statearr_52629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___52634);

return statearr_52629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___52634,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args52651 = [];
var len__27054__auto___52725 = arguments.length;
var i__27055__auto___52726 = (0);
while(true){
if((i__27055__auto___52726 < len__27054__auto___52725)){
args52651.push((arguments[i__27055__auto___52726]));

var G__52727 = (i__27055__auto___52726 + (1));
i__27055__auto___52726 = G__52727;
continue;
} else {
}
break;
}

var G__52653 = args52651.length;
switch (G__52653) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52651.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28009__auto___52729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___52729,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___52729,out){
return (function (state_52695){
var state_val_52696 = (state_52695[(1)]);
if((state_val_52696 === (7))){
var inst_52691 = (state_52695[(2)]);
var state_52695__$1 = state_52695;
var statearr_52697_52730 = state_52695__$1;
(statearr_52697_52730[(2)] = inst_52691);

(statearr_52697_52730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (1))){
var inst_52654 = [];
var inst_52655 = inst_52654;
var inst_52656 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52695__$1 = (function (){var statearr_52698 = state_52695;
(statearr_52698[(7)] = inst_52656);

(statearr_52698[(8)] = inst_52655);

return statearr_52698;
})();
var statearr_52699_52731 = state_52695__$1;
(statearr_52699_52731[(2)] = null);

(statearr_52699_52731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (4))){
var inst_52659 = (state_52695[(9)]);
var inst_52659__$1 = (state_52695[(2)]);
var inst_52660 = (inst_52659__$1 == null);
var inst_52661 = cljs.core.not.call(null,inst_52660);
var state_52695__$1 = (function (){var statearr_52700 = state_52695;
(statearr_52700[(9)] = inst_52659__$1);

return statearr_52700;
})();
if(inst_52661){
var statearr_52701_52732 = state_52695__$1;
(statearr_52701_52732[(1)] = (5));

} else {
var statearr_52702_52733 = state_52695__$1;
(statearr_52702_52733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (15))){
var inst_52685 = (state_52695[(2)]);
var state_52695__$1 = state_52695;
var statearr_52703_52734 = state_52695__$1;
(statearr_52703_52734[(2)] = inst_52685);

(statearr_52703_52734[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (13))){
var state_52695__$1 = state_52695;
var statearr_52704_52735 = state_52695__$1;
(statearr_52704_52735[(2)] = null);

(statearr_52704_52735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (6))){
var inst_52655 = (state_52695[(8)]);
var inst_52680 = inst_52655.length;
var inst_52681 = (inst_52680 > (0));
var state_52695__$1 = state_52695;
if(cljs.core.truth_(inst_52681)){
var statearr_52705_52736 = state_52695__$1;
(statearr_52705_52736[(1)] = (12));

} else {
var statearr_52706_52737 = state_52695__$1;
(statearr_52706_52737[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (3))){
var inst_52693 = (state_52695[(2)]);
var state_52695__$1 = state_52695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52695__$1,inst_52693);
} else {
if((state_val_52696 === (12))){
var inst_52655 = (state_52695[(8)]);
var inst_52683 = cljs.core.vec.call(null,inst_52655);
var state_52695__$1 = state_52695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52695__$1,(15),out,inst_52683);
} else {
if((state_val_52696 === (2))){
var state_52695__$1 = state_52695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52695__$1,(4),ch);
} else {
if((state_val_52696 === (11))){
var inst_52659 = (state_52695[(9)]);
var inst_52663 = (state_52695[(10)]);
var inst_52673 = (state_52695[(2)]);
var inst_52674 = [];
var inst_52675 = inst_52674.push(inst_52659);
var inst_52655 = inst_52674;
var inst_52656 = inst_52663;
var state_52695__$1 = (function (){var statearr_52707 = state_52695;
(statearr_52707[(11)] = inst_52675);

(statearr_52707[(12)] = inst_52673);

(statearr_52707[(7)] = inst_52656);

(statearr_52707[(8)] = inst_52655);

return statearr_52707;
})();
var statearr_52708_52738 = state_52695__$1;
(statearr_52708_52738[(2)] = null);

(statearr_52708_52738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (9))){
var inst_52655 = (state_52695[(8)]);
var inst_52671 = cljs.core.vec.call(null,inst_52655);
var state_52695__$1 = state_52695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52695__$1,(11),out,inst_52671);
} else {
if((state_val_52696 === (5))){
var inst_52659 = (state_52695[(9)]);
var inst_52663 = (state_52695[(10)]);
var inst_52656 = (state_52695[(7)]);
var inst_52663__$1 = f.call(null,inst_52659);
var inst_52664 = cljs.core._EQ_.call(null,inst_52663__$1,inst_52656);
var inst_52665 = cljs.core.keyword_identical_QMARK_.call(null,inst_52656,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_52666 = (inst_52664) || (inst_52665);
var state_52695__$1 = (function (){var statearr_52709 = state_52695;
(statearr_52709[(10)] = inst_52663__$1);

return statearr_52709;
})();
if(cljs.core.truth_(inst_52666)){
var statearr_52710_52739 = state_52695__$1;
(statearr_52710_52739[(1)] = (8));

} else {
var statearr_52711_52740 = state_52695__$1;
(statearr_52711_52740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (14))){
var inst_52688 = (state_52695[(2)]);
var inst_52689 = cljs.core.async.close_BANG_.call(null,out);
var state_52695__$1 = (function (){var statearr_52713 = state_52695;
(statearr_52713[(13)] = inst_52688);

return statearr_52713;
})();
var statearr_52714_52741 = state_52695__$1;
(statearr_52714_52741[(2)] = inst_52689);

(statearr_52714_52741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (10))){
var inst_52678 = (state_52695[(2)]);
var state_52695__$1 = state_52695;
var statearr_52715_52742 = state_52695__$1;
(statearr_52715_52742[(2)] = inst_52678);

(statearr_52715_52742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52696 === (8))){
var inst_52659 = (state_52695[(9)]);
var inst_52663 = (state_52695[(10)]);
var inst_52655 = (state_52695[(8)]);
var inst_52668 = inst_52655.push(inst_52659);
var tmp52712 = inst_52655;
var inst_52655__$1 = tmp52712;
var inst_52656 = inst_52663;
var state_52695__$1 = (function (){var statearr_52716 = state_52695;
(statearr_52716[(14)] = inst_52668);

(statearr_52716[(7)] = inst_52656);

(statearr_52716[(8)] = inst_52655__$1);

return statearr_52716;
})();
var statearr_52717_52743 = state_52695__$1;
(statearr_52717_52743[(2)] = null);

(statearr_52717_52743[(1)] = (2));


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
});})(c__28009__auto___52729,out))
;
return ((function (switch__27988__auto__,c__28009__auto___52729,out){
return (function() {
var cljs$core$async$state_machine__27989__auto__ = null;
var cljs$core$async$state_machine__27989__auto____0 = (function (){
var statearr_52721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52721[(0)] = cljs$core$async$state_machine__27989__auto__);

(statearr_52721[(1)] = (1));

return statearr_52721;
});
var cljs$core$async$state_machine__27989__auto____1 = (function (state_52695){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_52695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e52722){if((e52722 instanceof Object)){
var ex__27992__auto__ = e52722;
var statearr_52723_52744 = state_52695;
(statearr_52723_52744[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52745 = state_52695;
state_52695 = G__52745;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
cljs$core$async$state_machine__27989__auto__ = function(state_52695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27989__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27989__auto____1.call(this,state_52695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27989__auto____0;
cljs$core$async$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27989__auto____1;
return cljs$core$async$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___52729,out))
})();
var state__28011__auto__ = (function (){var statearr_52724 = f__28010__auto__.call(null);
(statearr_52724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___52729);

return statearr_52724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___52729,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1500065446591