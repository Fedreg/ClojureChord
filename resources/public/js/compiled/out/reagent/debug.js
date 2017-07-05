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
var G__27223__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27224__i = 0, G__27224__a = new Array(arguments.length -  0);
while (G__27224__i < G__27224__a.length) {G__27224__a[G__27224__i] = arguments[G__27224__i + 0]; ++G__27224__i;}
  args = new cljs.core.IndexedSeq(G__27224__a,0);
} 
return G__27223__delegate.call(this,args);};
G__27223.cljs$lang$maxFixedArity = 0;
G__27223.cljs$lang$applyTo = (function (arglist__27225){
var args = cljs.core.seq(arglist__27225);
return G__27223__delegate(args);
});
G__27223.cljs$core$IFn$_invoke$arity$variadic = G__27223__delegate;
return G__27223;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__27226__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27227__i = 0, G__27227__a = new Array(arguments.length -  0);
while (G__27227__i < G__27227__a.length) {G__27227__a[G__27227__i] = arguments[G__27227__i + 0]; ++G__27227__i;}
  args = new cljs.core.IndexedSeq(G__27227__a,0);
} 
return G__27226__delegate.call(this,args);};
G__27226.cljs$lang$maxFixedArity = 0;
G__27226.cljs$lang$applyTo = (function (arglist__27228){
var args = cljs.core.seq(arglist__27228);
return G__27226__delegate(args);
});
G__27226.cljs$core$IFn$_invoke$arity$variadic = G__27226__delegate;
return G__27226;
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

//# sourceMappingURL=debug.js.map?rel=1499270860796