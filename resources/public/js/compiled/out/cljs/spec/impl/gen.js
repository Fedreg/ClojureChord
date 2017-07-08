// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57476 = arguments.length;
var i__27055__auto___57477 = (0);
while(true){
if((i__27055__auto___57477 < len__27054__auto___57476)){
args__27061__auto__.push((arguments[i__27055__auto___57477]));

var G__57478 = (i__27055__auto___57477 + (1));
i__27055__auto___57477 = G__57478;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq57475){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57475));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57480 = arguments.length;
var i__27055__auto___57481 = (0);
while(true){
if((i__27055__auto___57481 < len__27054__auto___57480)){
args__27061__auto__.push((arguments[i__27055__auto___57481]));

var G__57482 = (i__27055__auto___57481 + (1));
i__27055__auto___57481 = G__57482;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq57479){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57479));
});

var g_QMARK__57483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_57484 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__57483){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__57483))
,null));
var mkg_57485 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__57483,g_57484){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__57483,g_57484))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__57483,g_57484,mkg_57485){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__57483).call(null,x);
});})(g_QMARK__57483,g_57484,mkg_57485))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__57483,g_57484,mkg_57485){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_57485).call(null,gfn);
});})(g_QMARK__57483,g_57484,mkg_57485))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__57483,g_57484,mkg_57485){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_57484).call(null,generator);
});})(g_QMARK__57483,g_57484,mkg_57485))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__28360__auto___57504 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__28360__auto___57504){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57505 = arguments.length;
var i__27055__auto___57506 = (0);
while(true){
if((i__27055__auto___57506 < len__27054__auto___57505)){
args__27061__auto__.push((arguments[i__27055__auto___57506]));

var G__57507 = (i__27055__auto___57506 + (1));
i__27055__auto___57506 = G__57507;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57504))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57504){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57504),args);
});})(g__28360__auto___57504))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__28360__auto___57504){
return (function (seq57486){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57486));
});})(g__28360__auto___57504))
;


var g__28360__auto___57508 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__28360__auto___57508){
return (function cljs$spec$impl$gen$list(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57509 = arguments.length;
var i__27055__auto___57510 = (0);
while(true){
if((i__27055__auto___57510 < len__27054__auto___57509)){
args__27061__auto__.push((arguments[i__27055__auto___57510]));

var G__57511 = (i__27055__auto___57510 + (1));
i__27055__auto___57510 = G__57511;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57508))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57508){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57508),args);
});})(g__28360__auto___57508))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__28360__auto___57508){
return (function (seq57487){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57487));
});})(g__28360__auto___57508))
;


var g__28360__auto___57512 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__28360__auto___57512){
return (function cljs$spec$impl$gen$map(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57513 = arguments.length;
var i__27055__auto___57514 = (0);
while(true){
if((i__27055__auto___57514 < len__27054__auto___57513)){
args__27061__auto__.push((arguments[i__27055__auto___57514]));

var G__57515 = (i__27055__auto___57514 + (1));
i__27055__auto___57514 = G__57515;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57512))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57512){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57512),args);
});})(g__28360__auto___57512))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__28360__auto___57512){
return (function (seq57488){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57488));
});})(g__28360__auto___57512))
;


var g__28360__auto___57516 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__28360__auto___57516){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57517 = arguments.length;
var i__27055__auto___57518 = (0);
while(true){
if((i__27055__auto___57518 < len__27054__auto___57517)){
args__27061__auto__.push((arguments[i__27055__auto___57518]));

var G__57519 = (i__27055__auto___57518 + (1));
i__27055__auto___57518 = G__57519;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57516))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57516){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57516),args);
});})(g__28360__auto___57516))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__28360__auto___57516){
return (function (seq57489){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57489));
});})(g__28360__auto___57516))
;


var g__28360__auto___57520 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__28360__auto___57520){
return (function cljs$spec$impl$gen$set(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57521 = arguments.length;
var i__27055__auto___57522 = (0);
while(true){
if((i__27055__auto___57522 < len__27054__auto___57521)){
args__27061__auto__.push((arguments[i__27055__auto___57522]));

var G__57523 = (i__27055__auto___57522 + (1));
i__27055__auto___57522 = G__57523;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57520))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57520){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57520),args);
});})(g__28360__auto___57520))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__28360__auto___57520){
return (function (seq57490){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57490));
});})(g__28360__auto___57520))
;


var g__28360__auto___57524 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__28360__auto___57524){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57525 = arguments.length;
var i__27055__auto___57526 = (0);
while(true){
if((i__27055__auto___57526 < len__27054__auto___57525)){
args__27061__auto__.push((arguments[i__27055__auto___57526]));

var G__57527 = (i__27055__auto___57526 + (1));
i__27055__auto___57526 = G__57527;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57524))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57524){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57524),args);
});})(g__28360__auto___57524))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__28360__auto___57524){
return (function (seq57491){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57491));
});})(g__28360__auto___57524))
;


var g__28360__auto___57528 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__28360__auto___57528){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57529 = arguments.length;
var i__27055__auto___57530 = (0);
while(true){
if((i__27055__auto___57530 < len__27054__auto___57529)){
args__27061__auto__.push((arguments[i__27055__auto___57530]));

var G__57531 = (i__27055__auto___57530 + (1));
i__27055__auto___57530 = G__57531;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57528))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57528){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57528),args);
});})(g__28360__auto___57528))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__28360__auto___57528){
return (function (seq57492){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57492));
});})(g__28360__auto___57528))
;


var g__28360__auto___57532 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__28360__auto___57532){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57533 = arguments.length;
var i__27055__auto___57534 = (0);
while(true){
if((i__27055__auto___57534 < len__27054__auto___57533)){
args__27061__auto__.push((arguments[i__27055__auto___57534]));

var G__57535 = (i__27055__auto___57534 + (1));
i__27055__auto___57534 = G__57535;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57532))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57532){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57532),args);
});})(g__28360__auto___57532))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__28360__auto___57532){
return (function (seq57493){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57493));
});})(g__28360__auto___57532))
;


var g__28360__auto___57536 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__28360__auto___57536){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57537 = arguments.length;
var i__27055__auto___57538 = (0);
while(true){
if((i__27055__auto___57538 < len__27054__auto___57537)){
args__27061__auto__.push((arguments[i__27055__auto___57538]));

var G__57539 = (i__27055__auto___57538 + (1));
i__27055__auto___57538 = G__57539;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57536))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57536){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57536),args);
});})(g__28360__auto___57536))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__28360__auto___57536){
return (function (seq57494){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57494));
});})(g__28360__auto___57536))
;


var g__28360__auto___57540 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__28360__auto___57540){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57541 = arguments.length;
var i__27055__auto___57542 = (0);
while(true){
if((i__27055__auto___57542 < len__27054__auto___57541)){
args__27061__auto__.push((arguments[i__27055__auto___57542]));

var G__57543 = (i__27055__auto___57542 + (1));
i__27055__auto___57542 = G__57543;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57540))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57540){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57540),args);
});})(g__28360__auto___57540))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__28360__auto___57540){
return (function (seq57495){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57495));
});})(g__28360__auto___57540))
;


var g__28360__auto___57544 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__28360__auto___57544){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57545 = arguments.length;
var i__27055__auto___57546 = (0);
while(true){
if((i__27055__auto___57546 < len__27054__auto___57545)){
args__27061__auto__.push((arguments[i__27055__auto___57546]));

var G__57547 = (i__27055__auto___57546 + (1));
i__27055__auto___57546 = G__57547;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57544))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57544){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57544),args);
});})(g__28360__auto___57544))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__28360__auto___57544){
return (function (seq57496){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57496));
});})(g__28360__auto___57544))
;


var g__28360__auto___57548 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__28360__auto___57548){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57549 = arguments.length;
var i__27055__auto___57550 = (0);
while(true){
if((i__27055__auto___57550 < len__27054__auto___57549)){
args__27061__auto__.push((arguments[i__27055__auto___57550]));

var G__57551 = (i__27055__auto___57550 + (1));
i__27055__auto___57550 = G__57551;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57548))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57548){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57548),args);
});})(g__28360__auto___57548))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__28360__auto___57548){
return (function (seq57497){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57497));
});})(g__28360__auto___57548))
;


var g__28360__auto___57552 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__28360__auto___57552){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57553 = arguments.length;
var i__27055__auto___57554 = (0);
while(true){
if((i__27055__auto___57554 < len__27054__auto___57553)){
args__27061__auto__.push((arguments[i__27055__auto___57554]));

var G__57555 = (i__27055__auto___57554 + (1));
i__27055__auto___57554 = G__57555;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57552))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57552){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57552),args);
});})(g__28360__auto___57552))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__28360__auto___57552){
return (function (seq57498){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57498));
});})(g__28360__auto___57552))
;


var g__28360__auto___57556 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__28360__auto___57556){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57557 = arguments.length;
var i__27055__auto___57558 = (0);
while(true){
if((i__27055__auto___57558 < len__27054__auto___57557)){
args__27061__auto__.push((arguments[i__27055__auto___57558]));

var G__57559 = (i__27055__auto___57558 + (1));
i__27055__auto___57558 = G__57559;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57556))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57556){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57556),args);
});})(g__28360__auto___57556))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__28360__auto___57556){
return (function (seq57499){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57499));
});})(g__28360__auto___57556))
;


var g__28360__auto___57560 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__28360__auto___57560){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57561 = arguments.length;
var i__27055__auto___57562 = (0);
while(true){
if((i__27055__auto___57562 < len__27054__auto___57561)){
args__27061__auto__.push((arguments[i__27055__auto___57562]));

var G__57563 = (i__27055__auto___57562 + (1));
i__27055__auto___57562 = G__57563;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57560))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57560){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57560),args);
});})(g__28360__auto___57560))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__28360__auto___57560){
return (function (seq57500){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57500));
});})(g__28360__auto___57560))
;


var g__28360__auto___57564 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__28360__auto___57564){
return (function cljs$spec$impl$gen$return(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57565 = arguments.length;
var i__27055__auto___57566 = (0);
while(true){
if((i__27055__auto___57566 < len__27054__auto___57565)){
args__27061__auto__.push((arguments[i__27055__auto___57566]));

var G__57567 = (i__27055__auto___57566 + (1));
i__27055__auto___57566 = G__57567;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57564))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57564){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57564),args);
});})(g__28360__auto___57564))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__28360__auto___57564){
return (function (seq57501){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57501));
});})(g__28360__auto___57564))
;


var g__28360__auto___57568 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__28360__auto___57568){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57569 = arguments.length;
var i__27055__auto___57570 = (0);
while(true){
if((i__27055__auto___57570 < len__27054__auto___57569)){
args__27061__auto__.push((arguments[i__27055__auto___57570]));

var G__57571 = (i__27055__auto___57570 + (1));
i__27055__auto___57570 = G__57571;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57568))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57568){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57568),args);
});})(g__28360__auto___57568))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__28360__auto___57568){
return (function (seq57502){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57502));
});})(g__28360__auto___57568))
;


var g__28360__auto___57572 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__28360__auto___57572){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57573 = arguments.length;
var i__27055__auto___57574 = (0);
while(true){
if((i__27055__auto___57574 < len__27054__auto___57573)){
args__27061__auto__.push((arguments[i__27055__auto___57574]));

var G__57575 = (i__27055__auto___57574 + (1));
i__27055__auto___57574 = G__57575;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28360__auto___57572))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28360__auto___57572){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28360__auto___57572),args);
});})(g__28360__auto___57572))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__28360__auto___57572){
return (function (seq57503){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57503));
});})(g__28360__auto___57572))
;

var g__28373__auto___57597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__28373__auto___57597){
return (function cljs$spec$impl$gen$any(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57598 = arguments.length;
var i__27055__auto___57599 = (0);
while(true){
if((i__27055__auto___57599 < len__27054__auto___57598)){
args__27061__auto__.push((arguments[i__27055__auto___57599]));

var G__57600 = (i__27055__auto___57599 + (1));
i__27055__auto___57599 = G__57600;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57597))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57597){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57597);
});})(g__28373__auto___57597))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__28373__auto___57597){
return (function (seq57576){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57576));
});})(g__28373__auto___57597))
;


var g__28373__auto___57601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__28373__auto___57601){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57602 = arguments.length;
var i__27055__auto___57603 = (0);
while(true){
if((i__27055__auto___57603 < len__27054__auto___57602)){
args__27061__auto__.push((arguments[i__27055__auto___57603]));

var G__57604 = (i__27055__auto___57603 + (1));
i__27055__auto___57603 = G__57604;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57601))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57601){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57601);
});})(g__28373__auto___57601))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__28373__auto___57601){
return (function (seq57577){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57577));
});})(g__28373__auto___57601))
;


var g__28373__auto___57605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__28373__auto___57605){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57606 = arguments.length;
var i__27055__auto___57607 = (0);
while(true){
if((i__27055__auto___57607 < len__27054__auto___57606)){
args__27061__auto__.push((arguments[i__27055__auto___57607]));

var G__57608 = (i__27055__auto___57607 + (1));
i__27055__auto___57607 = G__57608;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57605))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57605){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57605);
});})(g__28373__auto___57605))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__28373__auto___57605){
return (function (seq57578){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57578));
});})(g__28373__auto___57605))
;


var g__28373__auto___57609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__28373__auto___57609){
return (function cljs$spec$impl$gen$char(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57610 = arguments.length;
var i__27055__auto___57611 = (0);
while(true){
if((i__27055__auto___57611 < len__27054__auto___57610)){
args__27061__auto__.push((arguments[i__27055__auto___57611]));

var G__57612 = (i__27055__auto___57611 + (1));
i__27055__auto___57611 = G__57612;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57609))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57609){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57609);
});})(g__28373__auto___57609))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__28373__auto___57609){
return (function (seq57579){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57579));
});})(g__28373__auto___57609))
;


var g__28373__auto___57613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__28373__auto___57613){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57614 = arguments.length;
var i__27055__auto___57615 = (0);
while(true){
if((i__27055__auto___57615 < len__27054__auto___57614)){
args__27061__auto__.push((arguments[i__27055__auto___57615]));

var G__57616 = (i__27055__auto___57615 + (1));
i__27055__auto___57615 = G__57616;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57613))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57613){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57613);
});})(g__28373__auto___57613))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__28373__auto___57613){
return (function (seq57580){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57580));
});})(g__28373__auto___57613))
;


var g__28373__auto___57617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__28373__auto___57617){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57618 = arguments.length;
var i__27055__auto___57619 = (0);
while(true){
if((i__27055__auto___57619 < len__27054__auto___57618)){
args__27061__auto__.push((arguments[i__27055__auto___57619]));

var G__57620 = (i__27055__auto___57619 + (1));
i__27055__auto___57619 = G__57620;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57617))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57617){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57617);
});})(g__28373__auto___57617))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__28373__auto___57617){
return (function (seq57581){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57581));
});})(g__28373__auto___57617))
;


var g__28373__auto___57621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__28373__auto___57621){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57622 = arguments.length;
var i__27055__auto___57623 = (0);
while(true){
if((i__27055__auto___57623 < len__27054__auto___57622)){
args__27061__auto__.push((arguments[i__27055__auto___57623]));

var G__57624 = (i__27055__auto___57623 + (1));
i__27055__auto___57623 = G__57624;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57621))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57621){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57621);
});})(g__28373__auto___57621))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__28373__auto___57621){
return (function (seq57582){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57582));
});})(g__28373__auto___57621))
;


var g__28373__auto___57625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__28373__auto___57625){
return (function cljs$spec$impl$gen$double(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57626 = arguments.length;
var i__27055__auto___57627 = (0);
while(true){
if((i__27055__auto___57627 < len__27054__auto___57626)){
args__27061__auto__.push((arguments[i__27055__auto___57627]));

var G__57628 = (i__27055__auto___57627 + (1));
i__27055__auto___57627 = G__57628;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57625))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57625){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57625);
});})(g__28373__auto___57625))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__28373__auto___57625){
return (function (seq57583){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57583));
});})(g__28373__auto___57625))
;


var g__28373__auto___57629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__28373__auto___57629){
return (function cljs$spec$impl$gen$int(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57630 = arguments.length;
var i__27055__auto___57631 = (0);
while(true){
if((i__27055__auto___57631 < len__27054__auto___57630)){
args__27061__auto__.push((arguments[i__27055__auto___57631]));

var G__57632 = (i__27055__auto___57631 + (1));
i__27055__auto___57631 = G__57632;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57629))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57629){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57629);
});})(g__28373__auto___57629))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__28373__auto___57629){
return (function (seq57584){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57584));
});})(g__28373__auto___57629))
;


var g__28373__auto___57633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__28373__auto___57633){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57634 = arguments.length;
var i__27055__auto___57635 = (0);
while(true){
if((i__27055__auto___57635 < len__27054__auto___57634)){
args__27061__auto__.push((arguments[i__27055__auto___57635]));

var G__57636 = (i__27055__auto___57635 + (1));
i__27055__auto___57635 = G__57636;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57633))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57633){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57633);
});})(g__28373__auto___57633))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__28373__auto___57633){
return (function (seq57585){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57585));
});})(g__28373__auto___57633))
;


var g__28373__auto___57637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__28373__auto___57637){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57638 = arguments.length;
var i__27055__auto___57639 = (0);
while(true){
if((i__27055__auto___57639 < len__27054__auto___57638)){
args__27061__auto__.push((arguments[i__27055__auto___57639]));

var G__57640 = (i__27055__auto___57639 + (1));
i__27055__auto___57639 = G__57640;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57637))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57637){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57637);
});})(g__28373__auto___57637))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__28373__auto___57637){
return (function (seq57586){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57586));
});})(g__28373__auto___57637))
;


var g__28373__auto___57641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__28373__auto___57641){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57642 = arguments.length;
var i__27055__auto___57643 = (0);
while(true){
if((i__27055__auto___57643 < len__27054__auto___57642)){
args__27061__auto__.push((arguments[i__27055__auto___57643]));

var G__57644 = (i__27055__auto___57643 + (1));
i__27055__auto___57643 = G__57644;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57641))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57641){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57641);
});})(g__28373__auto___57641))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__28373__auto___57641){
return (function (seq57587){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57587));
});})(g__28373__auto___57641))
;


var g__28373__auto___57645 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__28373__auto___57645){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57646 = arguments.length;
var i__27055__auto___57647 = (0);
while(true){
if((i__27055__auto___57647 < len__27054__auto___57646)){
args__27061__auto__.push((arguments[i__27055__auto___57647]));

var G__57648 = (i__27055__auto___57647 + (1));
i__27055__auto___57647 = G__57648;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57645))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57645){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57645);
});})(g__28373__auto___57645))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__28373__auto___57645){
return (function (seq57588){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57588));
});})(g__28373__auto___57645))
;


var g__28373__auto___57649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__28373__auto___57649){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57650 = arguments.length;
var i__27055__auto___57651 = (0);
while(true){
if((i__27055__auto___57651 < len__27054__auto___57650)){
args__27061__auto__.push((arguments[i__27055__auto___57651]));

var G__57652 = (i__27055__auto___57651 + (1));
i__27055__auto___57651 = G__57652;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57649))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57649){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57649);
});})(g__28373__auto___57649))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__28373__auto___57649){
return (function (seq57589){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57589));
});})(g__28373__auto___57649))
;


var g__28373__auto___57653 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__28373__auto___57653){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57654 = arguments.length;
var i__27055__auto___57655 = (0);
while(true){
if((i__27055__auto___57655 < len__27054__auto___57654)){
args__27061__auto__.push((arguments[i__27055__auto___57655]));

var G__57656 = (i__27055__auto___57655 + (1));
i__27055__auto___57655 = G__57656;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57653))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57653){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57653);
});})(g__28373__auto___57653))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__28373__auto___57653){
return (function (seq57590){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57590));
});})(g__28373__auto___57653))
;


var g__28373__auto___57657 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__28373__auto___57657){
return (function cljs$spec$impl$gen$string(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57658 = arguments.length;
var i__27055__auto___57659 = (0);
while(true){
if((i__27055__auto___57659 < len__27054__auto___57658)){
args__27061__auto__.push((arguments[i__27055__auto___57659]));

var G__57660 = (i__27055__auto___57659 + (1));
i__27055__auto___57659 = G__57660;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57657))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57657){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57657);
});})(g__28373__auto___57657))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__28373__auto___57657){
return (function (seq57591){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57591));
});})(g__28373__auto___57657))
;


var g__28373__auto___57661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__28373__auto___57661){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57662 = arguments.length;
var i__27055__auto___57663 = (0);
while(true){
if((i__27055__auto___57663 < len__27054__auto___57662)){
args__27061__auto__.push((arguments[i__27055__auto___57663]));

var G__57664 = (i__27055__auto___57663 + (1));
i__27055__auto___57663 = G__57664;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57661))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57661){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57661);
});})(g__28373__auto___57661))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__28373__auto___57661){
return (function (seq57592){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57592));
});})(g__28373__auto___57661))
;


var g__28373__auto___57665 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__28373__auto___57665){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57666 = arguments.length;
var i__27055__auto___57667 = (0);
while(true){
if((i__27055__auto___57667 < len__27054__auto___57666)){
args__27061__auto__.push((arguments[i__27055__auto___57667]));

var G__57668 = (i__27055__auto___57667 + (1));
i__27055__auto___57667 = G__57668;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57665))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57665){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57665);
});})(g__28373__auto___57665))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__28373__auto___57665){
return (function (seq57593){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57593));
});})(g__28373__auto___57665))
;


var g__28373__auto___57669 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__28373__auto___57669){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57670 = arguments.length;
var i__27055__auto___57671 = (0);
while(true){
if((i__27055__auto___57671 < len__27054__auto___57670)){
args__27061__auto__.push((arguments[i__27055__auto___57671]));

var G__57672 = (i__27055__auto___57671 + (1));
i__27055__auto___57671 = G__57672;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57669))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57669){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57669);
});})(g__28373__auto___57669))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__28373__auto___57669){
return (function (seq57594){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57594));
});})(g__28373__auto___57669))
;


var g__28373__auto___57673 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__28373__auto___57673){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57674 = arguments.length;
var i__27055__auto___57675 = (0);
while(true){
if((i__27055__auto___57675 < len__27054__auto___57674)){
args__27061__auto__.push((arguments[i__27055__auto___57675]));

var G__57676 = (i__27055__auto___57675 + (1));
i__27055__auto___57675 = G__57676;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57673))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57673){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57673);
});})(g__28373__auto___57673))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__28373__auto___57673){
return (function (seq57595){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57595));
});})(g__28373__auto___57673))
;


var g__28373__auto___57677 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__28373__auto___57677){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57678 = arguments.length;
var i__27055__auto___57679 = (0);
while(true){
if((i__27055__auto___57679 < len__27054__auto___57678)){
args__27061__auto__.push((arguments[i__27055__auto___57679]));

var G__57680 = (i__27055__auto___57679 + (1));
i__27055__auto___57679 = G__57680;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});})(g__28373__auto___57677))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28373__auto___57677){
return (function (args){
return cljs.core.deref.call(null,g__28373__auto___57677);
});})(g__28373__auto___57677))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__28373__auto___57677){
return (function (seq57596){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57596));
});})(g__28373__auto___57677))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57683 = arguments.length;
var i__27055__auto___57684 = (0);
while(true){
if((i__27055__auto___57684 < len__27054__auto___57683)){
args__27061__auto__.push((arguments[i__27055__auto___57684]));

var G__57685 = (i__27055__auto___57684 + (1));
i__27055__auto___57684 = G__57685;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__57681_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__57681_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq57682){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57682));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__57686_SHARP_){
return (new Date(p1__57686_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1499548767963