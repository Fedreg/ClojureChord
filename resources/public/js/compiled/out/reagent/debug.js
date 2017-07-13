// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__63096__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__63096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63097__i = 0, G__63097__a = new Array(arguments.length -  0);
while (G__63097__i < G__63097__a.length) {G__63097__a[G__63097__i] = arguments[G__63097__i + 0]; ++G__63097__i;}
  args = new cljs.core.IndexedSeq(G__63097__a,0);
} 
return G__63096__delegate.call(this,args);};
G__63096.cljs$lang$maxFixedArity = 0;
G__63096.cljs$lang$applyTo = (function (arglist__63098){
var args = cljs.core.seq(arglist__63098);
return G__63096__delegate(args);
});
G__63096.cljs$core$IFn$_invoke$arity$variadic = G__63096__delegate;
return G__63096;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__63099__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__63099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63100__i = 0, G__63100__a = new Array(arguments.length -  0);
while (G__63100__i < G__63100__a.length) {G__63100__a[G__63100__i] = arguments[G__63100__i + 0]; ++G__63100__i;}
  args = new cljs.core.IndexedSeq(G__63100__a,0);
} 
return G__63099__delegate.call(this,args);};
G__63099.cljs$lang$maxFixedArity = 0;
G__63099.cljs$lang$applyTo = (function (arglist__63101){
var args = cljs.core.seq(arglist__63101);
return G__63099__delegate(args);
});
G__63099.cljs$core$IFn$_invoke$arity$variadic = G__63099__delegate;
return G__63099;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1499924848643