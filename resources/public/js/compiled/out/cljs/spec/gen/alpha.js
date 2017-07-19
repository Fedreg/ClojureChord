// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
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

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__29226__auto__,writer__29227__auto__,opt__29228__auto__){
return cljs.core._write.call(null,writer__29227__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30822 = arguments.length;
var i__29803__auto___30823 = (0);
while(true){
if((i__29803__auto___30823 < len__29802__auto___30822)){
args__29809__auto__.push((arguments[i__29803__auto___30823]));

var G__30824 = (i__29803__auto___30823 + (1));
i__29803__auto___30823 = G__30824;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq30821){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30821));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30826 = arguments.length;
var i__29803__auto___30827 = (0);
while(true){
if((i__29803__auto___30827 < len__29802__auto___30826)){
args__29809__auto__.push((arguments[i__29803__auto___30827]));

var G__30828 = (i__29803__auto___30827 + (1));
i__29803__auto___30827 = G__30828;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq30825){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30825));
});

var g_QMARK__30829 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_30830 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__30829){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__30829))
,null));
var mkg_30831 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__30829,g_30830){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__30829,g_30830))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__30829,g_30830,mkg_30831){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__30829).call(null,x);
});})(g_QMARK__30829,g_30830,mkg_30831))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__30829,g_30830,mkg_30831){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_30831).call(null,gfn);
});})(g_QMARK__30829,g_30830,mkg_30831))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__30829,g_30830,mkg_30831){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_30830).call(null,generator);
});})(g_QMARK__30829,g_30830,mkg_30831))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29908__auto___30851 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__29908__auto___30851){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30852 = arguments.length;
var i__29803__auto___30853 = (0);
while(true){
if((i__29803__auto___30853 < len__29802__auto___30852)){
args__29809__auto__.push((arguments[i__29803__auto___30853]));

var G__30854 = (i__29803__auto___30853 + (1));
i__29803__auto___30853 = G__30854;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30851))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30851),args);
});})(g__29908__auto___30851))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__29908__auto___30851){
return (function (seq30832){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30832));
});})(g__29908__auto___30851))
;


var g__29908__auto___30855 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__29908__auto___30855){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30856 = arguments.length;
var i__29803__auto___30857 = (0);
while(true){
if((i__29803__auto___30857 < len__29802__auto___30856)){
args__29809__auto__.push((arguments[i__29803__auto___30857]));

var G__30858 = (i__29803__auto___30857 + (1));
i__29803__auto___30857 = G__30858;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30855))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30855),args);
});})(g__29908__auto___30855))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__29908__auto___30855){
return (function (seq30833){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30833));
});})(g__29908__auto___30855))
;


var g__29908__auto___30859 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__29908__auto___30859){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30860 = arguments.length;
var i__29803__auto___30861 = (0);
while(true){
if((i__29803__auto___30861 < len__29802__auto___30860)){
args__29809__auto__.push((arguments[i__29803__auto___30861]));

var G__30862 = (i__29803__auto___30861 + (1));
i__29803__auto___30861 = G__30862;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30859))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30859),args);
});})(g__29908__auto___30859))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__29908__auto___30859){
return (function (seq30834){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30834));
});})(g__29908__auto___30859))
;


var g__29908__auto___30863 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__29908__auto___30863){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30864 = arguments.length;
var i__29803__auto___30865 = (0);
while(true){
if((i__29803__auto___30865 < len__29802__auto___30864)){
args__29809__auto__.push((arguments[i__29803__auto___30865]));

var G__30866 = (i__29803__auto___30865 + (1));
i__29803__auto___30865 = G__30866;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30863))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30863),args);
});})(g__29908__auto___30863))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__29908__auto___30863){
return (function (seq30835){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30835));
});})(g__29908__auto___30863))
;


var g__29908__auto___30867 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__29908__auto___30867){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30868 = arguments.length;
var i__29803__auto___30869 = (0);
while(true){
if((i__29803__auto___30869 < len__29802__auto___30868)){
args__29809__auto__.push((arguments[i__29803__auto___30869]));

var G__30870 = (i__29803__auto___30869 + (1));
i__29803__auto___30869 = G__30870;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30867))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30867),args);
});})(g__29908__auto___30867))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__29908__auto___30867){
return (function (seq30836){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30836));
});})(g__29908__auto___30867))
;


var g__29908__auto___30871 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__29908__auto___30871){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30872 = arguments.length;
var i__29803__auto___30873 = (0);
while(true){
if((i__29803__auto___30873 < len__29802__auto___30872)){
args__29809__auto__.push((arguments[i__29803__auto___30873]));

var G__30874 = (i__29803__auto___30873 + (1));
i__29803__auto___30873 = G__30874;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30871))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30871),args);
});})(g__29908__auto___30871))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__29908__auto___30871){
return (function (seq30837){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30837));
});})(g__29908__auto___30871))
;


var g__29908__auto___30875 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__29908__auto___30875){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30876 = arguments.length;
var i__29803__auto___30877 = (0);
while(true){
if((i__29803__auto___30877 < len__29802__auto___30876)){
args__29809__auto__.push((arguments[i__29803__auto___30877]));

var G__30878 = (i__29803__auto___30877 + (1));
i__29803__auto___30877 = G__30878;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30875))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30875),args);
});})(g__29908__auto___30875))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__29908__auto___30875){
return (function (seq30838){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30838));
});})(g__29908__auto___30875))
;


var g__29908__auto___30879 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__29908__auto___30879){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30880 = arguments.length;
var i__29803__auto___30881 = (0);
while(true){
if((i__29803__auto___30881 < len__29802__auto___30880)){
args__29809__auto__.push((arguments[i__29803__auto___30881]));

var G__30882 = (i__29803__auto___30881 + (1));
i__29803__auto___30881 = G__30882;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30879))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30879),args);
});})(g__29908__auto___30879))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__29908__auto___30879){
return (function (seq30839){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30839));
});})(g__29908__auto___30879))
;


var g__29908__auto___30883 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__29908__auto___30883){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30884 = arguments.length;
var i__29803__auto___30885 = (0);
while(true){
if((i__29803__auto___30885 < len__29802__auto___30884)){
args__29809__auto__.push((arguments[i__29803__auto___30885]));

var G__30886 = (i__29803__auto___30885 + (1));
i__29803__auto___30885 = G__30886;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30883))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30883),args);
});})(g__29908__auto___30883))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__29908__auto___30883){
return (function (seq30840){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30840));
});})(g__29908__auto___30883))
;


var g__29908__auto___30887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__29908__auto___30887){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30888 = arguments.length;
var i__29803__auto___30889 = (0);
while(true){
if((i__29803__auto___30889 < len__29802__auto___30888)){
args__29809__auto__.push((arguments[i__29803__auto___30889]));

var G__30890 = (i__29803__auto___30889 + (1));
i__29803__auto___30889 = G__30890;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30887))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30887),args);
});})(g__29908__auto___30887))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__29908__auto___30887){
return (function (seq30841){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30841));
});})(g__29908__auto___30887))
;


var g__29908__auto___30891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__29908__auto___30891){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30892 = arguments.length;
var i__29803__auto___30893 = (0);
while(true){
if((i__29803__auto___30893 < len__29802__auto___30892)){
args__29809__auto__.push((arguments[i__29803__auto___30893]));

var G__30894 = (i__29803__auto___30893 + (1));
i__29803__auto___30893 = G__30894;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30891))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30891),args);
});})(g__29908__auto___30891))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__29908__auto___30891){
return (function (seq30842){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30842));
});})(g__29908__auto___30891))
;


var g__29908__auto___30895 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__29908__auto___30895){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30896 = arguments.length;
var i__29803__auto___30897 = (0);
while(true){
if((i__29803__auto___30897 < len__29802__auto___30896)){
args__29809__auto__.push((arguments[i__29803__auto___30897]));

var G__30898 = (i__29803__auto___30897 + (1));
i__29803__auto___30897 = G__30898;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30895))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30895){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30895),args);
});})(g__29908__auto___30895))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__29908__auto___30895){
return (function (seq30843){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30843));
});})(g__29908__auto___30895))
;


var g__29908__auto___30899 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__29908__auto___30899){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30900 = arguments.length;
var i__29803__auto___30901 = (0);
while(true){
if((i__29803__auto___30901 < len__29802__auto___30900)){
args__29809__auto__.push((arguments[i__29803__auto___30901]));

var G__30902 = (i__29803__auto___30901 + (1));
i__29803__auto___30901 = G__30902;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30899))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30899){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30899),args);
});})(g__29908__auto___30899))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__29908__auto___30899){
return (function (seq30844){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30844));
});})(g__29908__auto___30899))
;


var g__29908__auto___30903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__29908__auto___30903){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30904 = arguments.length;
var i__29803__auto___30905 = (0);
while(true){
if((i__29803__auto___30905 < len__29802__auto___30904)){
args__29809__auto__.push((arguments[i__29803__auto___30905]));

var G__30906 = (i__29803__auto___30905 + (1));
i__29803__auto___30905 = G__30906;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30903))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30903){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30903),args);
});})(g__29908__auto___30903))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__29908__auto___30903){
return (function (seq30845){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30845));
});})(g__29908__auto___30903))
;


var g__29908__auto___30907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__29908__auto___30907){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30908 = arguments.length;
var i__29803__auto___30909 = (0);
while(true){
if((i__29803__auto___30909 < len__29802__auto___30908)){
args__29809__auto__.push((arguments[i__29803__auto___30909]));

var G__30910 = (i__29803__auto___30909 + (1));
i__29803__auto___30909 = G__30910;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30907))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30907){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30907),args);
});})(g__29908__auto___30907))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__29908__auto___30907){
return (function (seq30846){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30846));
});})(g__29908__auto___30907))
;


var g__29908__auto___30911 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__29908__auto___30911){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30912 = arguments.length;
var i__29803__auto___30913 = (0);
while(true){
if((i__29803__auto___30913 < len__29802__auto___30912)){
args__29809__auto__.push((arguments[i__29803__auto___30913]));

var G__30914 = (i__29803__auto___30913 + (1));
i__29803__auto___30913 = G__30914;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30911))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30911){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30911),args);
});})(g__29908__auto___30911))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__29908__auto___30911){
return (function (seq30847){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30847));
});})(g__29908__auto___30911))
;


var g__29908__auto___30915 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__29908__auto___30915){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30916 = arguments.length;
var i__29803__auto___30917 = (0);
while(true){
if((i__29803__auto___30917 < len__29802__auto___30916)){
args__29809__auto__.push((arguments[i__29803__auto___30917]));

var G__30918 = (i__29803__auto___30917 + (1));
i__29803__auto___30917 = G__30918;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30915))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30915){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30915),args);
});})(g__29908__auto___30915))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29908__auto___30915){
return (function (seq30848){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30848));
});})(g__29908__auto___30915))
;


var g__29908__auto___30919 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__29908__auto___30919){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30920 = arguments.length;
var i__29803__auto___30921 = (0);
while(true){
if((i__29803__auto___30921 < len__29802__auto___30920)){
args__29809__auto__.push((arguments[i__29803__auto___30921]));

var G__30922 = (i__29803__auto___30921 + (1));
i__29803__auto___30921 = G__30922;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30919))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30919){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30919),args);
});})(g__29908__auto___30919))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__29908__auto___30919){
return (function (seq30849){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30849));
});})(g__29908__auto___30919))
;


var g__29908__auto___30923 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__29908__auto___30923){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30924 = arguments.length;
var i__29803__auto___30925 = (0);
while(true){
if((i__29803__auto___30925 < len__29802__auto___30924)){
args__29809__auto__.push((arguments[i__29803__auto___30925]));

var G__30926 = (i__29803__auto___30925 + (1));
i__29803__auto___30925 = G__30926;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29908__auto___30923))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29908__auto___30923){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29908__auto___30923),args);
});})(g__29908__auto___30923))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__29908__auto___30923){
return (function (seq30850){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30850));
});})(g__29908__auto___30923))
;

var g__29921__auto___30948 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__29921__auto___30948){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30949 = arguments.length;
var i__29803__auto___30950 = (0);
while(true){
if((i__29803__auto___30950 < len__29802__auto___30949)){
args__29809__auto__.push((arguments[i__29803__auto___30950]));

var G__30951 = (i__29803__auto___30950 + (1));
i__29803__auto___30950 = G__30951;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30948))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30948){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30948);
});})(g__29921__auto___30948))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__29921__auto___30948){
return (function (seq30927){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30927));
});})(g__29921__auto___30948))
;


var g__29921__auto___30952 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__29921__auto___30952){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30953 = arguments.length;
var i__29803__auto___30954 = (0);
while(true){
if((i__29803__auto___30954 < len__29802__auto___30953)){
args__29809__auto__.push((arguments[i__29803__auto___30954]));

var G__30955 = (i__29803__auto___30954 + (1));
i__29803__auto___30954 = G__30955;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30952))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30952){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30952);
});})(g__29921__auto___30952))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__29921__auto___30952){
return (function (seq30928){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30928));
});})(g__29921__auto___30952))
;


var g__29921__auto___30956 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__29921__auto___30956){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30957 = arguments.length;
var i__29803__auto___30958 = (0);
while(true){
if((i__29803__auto___30958 < len__29802__auto___30957)){
args__29809__auto__.push((arguments[i__29803__auto___30958]));

var G__30959 = (i__29803__auto___30958 + (1));
i__29803__auto___30958 = G__30959;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30956))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30956){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30956);
});})(g__29921__auto___30956))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__29921__auto___30956){
return (function (seq30929){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30929));
});})(g__29921__auto___30956))
;


var g__29921__auto___30960 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__29921__auto___30960){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30961 = arguments.length;
var i__29803__auto___30962 = (0);
while(true){
if((i__29803__auto___30962 < len__29802__auto___30961)){
args__29809__auto__.push((arguments[i__29803__auto___30962]));

var G__30963 = (i__29803__auto___30962 + (1));
i__29803__auto___30962 = G__30963;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30960))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30960){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30960);
});})(g__29921__auto___30960))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__29921__auto___30960){
return (function (seq30930){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30930));
});})(g__29921__auto___30960))
;


var g__29921__auto___30964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__29921__auto___30964){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30965 = arguments.length;
var i__29803__auto___30966 = (0);
while(true){
if((i__29803__auto___30966 < len__29802__auto___30965)){
args__29809__auto__.push((arguments[i__29803__auto___30966]));

var G__30967 = (i__29803__auto___30966 + (1));
i__29803__auto___30966 = G__30967;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30964))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30964){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30964);
});})(g__29921__auto___30964))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__29921__auto___30964){
return (function (seq30931){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30931));
});})(g__29921__auto___30964))
;


var g__29921__auto___30968 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__29921__auto___30968){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30969 = arguments.length;
var i__29803__auto___30970 = (0);
while(true){
if((i__29803__auto___30970 < len__29802__auto___30969)){
args__29809__auto__.push((arguments[i__29803__auto___30970]));

var G__30971 = (i__29803__auto___30970 + (1));
i__29803__auto___30970 = G__30971;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30968))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30968){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30968);
});})(g__29921__auto___30968))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__29921__auto___30968){
return (function (seq30932){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30932));
});})(g__29921__auto___30968))
;


var g__29921__auto___30972 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__29921__auto___30972){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30973 = arguments.length;
var i__29803__auto___30974 = (0);
while(true){
if((i__29803__auto___30974 < len__29802__auto___30973)){
args__29809__auto__.push((arguments[i__29803__auto___30974]));

var G__30975 = (i__29803__auto___30974 + (1));
i__29803__auto___30974 = G__30975;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30972))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30972){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30972);
});})(g__29921__auto___30972))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__29921__auto___30972){
return (function (seq30933){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30933));
});})(g__29921__auto___30972))
;


var g__29921__auto___30976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__29921__auto___30976){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30977 = arguments.length;
var i__29803__auto___30978 = (0);
while(true){
if((i__29803__auto___30978 < len__29802__auto___30977)){
args__29809__auto__.push((arguments[i__29803__auto___30978]));

var G__30979 = (i__29803__auto___30978 + (1));
i__29803__auto___30978 = G__30979;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30976))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30976){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30976);
});})(g__29921__auto___30976))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__29921__auto___30976){
return (function (seq30934){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30934));
});})(g__29921__auto___30976))
;


var g__29921__auto___30980 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__29921__auto___30980){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30981 = arguments.length;
var i__29803__auto___30982 = (0);
while(true){
if((i__29803__auto___30982 < len__29802__auto___30981)){
args__29809__auto__.push((arguments[i__29803__auto___30982]));

var G__30983 = (i__29803__auto___30982 + (1));
i__29803__auto___30982 = G__30983;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30980))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30980){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30980);
});})(g__29921__auto___30980))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__29921__auto___30980){
return (function (seq30935){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30935));
});})(g__29921__auto___30980))
;


var g__29921__auto___30984 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__29921__auto___30984){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30985 = arguments.length;
var i__29803__auto___30986 = (0);
while(true){
if((i__29803__auto___30986 < len__29802__auto___30985)){
args__29809__auto__.push((arguments[i__29803__auto___30986]));

var G__30987 = (i__29803__auto___30986 + (1));
i__29803__auto___30986 = G__30987;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30984))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30984){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30984);
});})(g__29921__auto___30984))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__29921__auto___30984){
return (function (seq30936){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30936));
});})(g__29921__auto___30984))
;


var g__29921__auto___30988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__29921__auto___30988){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30989 = arguments.length;
var i__29803__auto___30990 = (0);
while(true){
if((i__29803__auto___30990 < len__29802__auto___30989)){
args__29809__auto__.push((arguments[i__29803__auto___30990]));

var G__30991 = (i__29803__auto___30990 + (1));
i__29803__auto___30990 = G__30991;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30988))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30988){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30988);
});})(g__29921__auto___30988))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__29921__auto___30988){
return (function (seq30937){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30937));
});})(g__29921__auto___30988))
;


var g__29921__auto___30992 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__29921__auto___30992){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30993 = arguments.length;
var i__29803__auto___30994 = (0);
while(true){
if((i__29803__auto___30994 < len__29802__auto___30993)){
args__29809__auto__.push((arguments[i__29803__auto___30994]));

var G__30995 = (i__29803__auto___30994 + (1));
i__29803__auto___30994 = G__30995;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30992))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30992){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30992);
});})(g__29921__auto___30992))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__29921__auto___30992){
return (function (seq30938){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30938));
});})(g__29921__auto___30992))
;


var g__29921__auto___30996 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__29921__auto___30996){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29809__auto__ = [];
var len__29802__auto___30997 = arguments.length;
var i__29803__auto___30998 = (0);
while(true){
if((i__29803__auto___30998 < len__29802__auto___30997)){
args__29809__auto__.push((arguments[i__29803__auto___30998]));

var G__30999 = (i__29803__auto___30998 + (1));
i__29803__auto___30998 = G__30999;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___30996))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___30996){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___30996);
});})(g__29921__auto___30996))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__29921__auto___30996){
return (function (seq30939){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30939));
});})(g__29921__auto___30996))
;


var g__29921__auto___31000 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__29921__auto___31000){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29809__auto__ = [];
var len__29802__auto___31001 = arguments.length;
var i__29803__auto___31002 = (0);
while(true){
if((i__29803__auto___31002 < len__29802__auto___31001)){
args__29809__auto__.push((arguments[i__29803__auto___31002]));

var G__31003 = (i__29803__auto___31002 + (1));
i__29803__auto___31002 = G__31003;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___31000))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___31000){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___31000);
});})(g__29921__auto___31000))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__29921__auto___31000){
return (function (seq30940){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30940));
});})(g__29921__auto___31000))
;


var g__29921__auto___31004 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__29921__auto___31004){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29809__auto__ = [];
var len__29802__auto___31005 = arguments.length;
var i__29803__auto___31006 = (0);
while(true){
if((i__29803__auto___31006 < len__29802__auto___31005)){
args__29809__auto__.push((arguments[i__29803__auto___31006]));

var G__31007 = (i__29803__auto___31006 + (1));
i__29803__auto___31006 = G__31007;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___31004))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___31004){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___31004);
});})(g__29921__auto___31004))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__29921__auto___31004){
return (function (seq30941){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30941));
});})(g__29921__auto___31004))
;


var g__29921__auto___31008 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__29921__auto___31008){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29809__auto__ = [];
var len__29802__auto___31009 = arguments.length;
var i__29803__auto___31010 = (0);
while(true){
if((i__29803__auto___31010 < len__29802__auto___31009)){
args__29809__auto__.push((arguments[i__29803__auto___31010]));

var G__31011 = (i__29803__auto___31010 + (1));
i__29803__auto___31010 = G__31011;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___31008))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___31008){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___31008);
});})(g__29921__auto___31008))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__29921__auto___31008){
return (function (seq30942){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30942));
});})(g__29921__auto___31008))
;


var g__29921__auto___31012 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__29921__auto___31012){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29809__auto__ = [];
var len__29802__auto___31013 = arguments.length;
var i__29803__auto___31014 = (0);
while(true){
if((i__29803__auto___31014 < len__29802__auto___31013)){
args__29809__auto__.push((arguments[i__29803__auto___31014]));

var G__31015 = (i__29803__auto___31014 + (1));
i__29803__auto___31014 = G__31015;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___31012))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___31012){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___31012);
});})(g__29921__auto___31012))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__29921__auto___31012){
return (function (seq30943){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30943));
});})(g__29921__auto___31012))
;


var g__29921__auto___31016 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__29921__auto___31016){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29809__auto__ = [];
var len__29802__auto___31017 = arguments.length;
var i__29803__auto___31018 = (0);
while(true){
if((i__29803__auto___31018 < len__29802__auto___31017)){
args__29809__auto__.push((arguments[i__29803__auto___31018]));

var G__31019 = (i__29803__auto___31018 + (1));
i__29803__auto___31018 = G__31019;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___31016))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___31016){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___31016);
});})(g__29921__auto___31016))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__29921__auto___31016){
return (function (seq30944){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30944));
});})(g__29921__auto___31016))
;


var g__29921__auto___31020 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__29921__auto___31020){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29809__auto__ = [];
var len__29802__auto___31021 = arguments.length;
var i__29803__auto___31022 = (0);
while(true){
if((i__29803__auto___31022 < len__29802__auto___31021)){
args__29809__auto__.push((arguments[i__29803__auto___31022]));

var G__31023 = (i__29803__auto___31022 + (1));
i__29803__auto___31022 = G__31023;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___31020))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___31020){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___31020);
});})(g__29921__auto___31020))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__29921__auto___31020){
return (function (seq30945){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30945));
});})(g__29921__auto___31020))
;


var g__29921__auto___31024 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__29921__auto___31024){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29809__auto__ = [];
var len__29802__auto___31025 = arguments.length;
var i__29803__auto___31026 = (0);
while(true){
if((i__29803__auto___31026 < len__29802__auto___31025)){
args__29809__auto__.push((arguments[i__29803__auto___31026]));

var G__31027 = (i__29803__auto___31026 + (1));
i__29803__auto___31026 = G__31027;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___31024))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___31024){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___31024);
});})(g__29921__auto___31024))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__29921__auto___31024){
return (function (seq30946){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30946));
});})(g__29921__auto___31024))
;


var g__29921__auto___31028 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__29921__auto___31028){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29809__auto__ = [];
var len__29802__auto___31029 = arguments.length;
var i__29803__auto___31030 = (0);
while(true){
if((i__29803__auto___31030 < len__29802__auto___31029)){
args__29809__auto__.push((arguments[i__29803__auto___31030]));

var G__31031 = (i__29803__auto___31030 + (1));
i__29803__auto___31030 = G__31031;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});})(g__29921__auto___31028))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29921__auto___31028){
return (function (args){
return cljs.core.deref.call(null,g__29921__auto___31028);
});})(g__29921__auto___31028))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__29921__auto___31028){
return (function (seq30947){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30947));
});})(g__29921__auto___31028))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29809__auto__ = [];
var len__29802__auto___31034 = arguments.length;
var i__29803__auto___31035 = (0);
while(true){
if((i__29803__auto___31035 < len__29802__auto___31034)){
args__29809__auto__.push((arguments[i__29803__auto___31035]));

var G__31036 = (i__29803__auto___31035 + (1));
i__29803__auto___31035 = G__31036;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__31032_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__31032_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq31033){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31033));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__31037_SHARP_){
return (new Date(p1__31037_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1500449438021