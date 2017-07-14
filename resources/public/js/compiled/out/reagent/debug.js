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
var G__43700__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43701__i = 0, G__43701__a = new Array(arguments.length -  0);
while (G__43701__i < G__43701__a.length) {G__43701__a[G__43701__i] = arguments[G__43701__i + 0]; ++G__43701__i;}
  args = new cljs.core.IndexedSeq(G__43701__a,0);
} 
return G__43700__delegate.call(this,args);};
G__43700.cljs$lang$maxFixedArity = 0;
G__43700.cljs$lang$applyTo = (function (arglist__43702){
var args = cljs.core.seq(arglist__43702);
return G__43700__delegate(args);
});
G__43700.cljs$core$IFn$_invoke$arity$variadic = G__43700__delegate;
return G__43700;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__43703__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43704__i = 0, G__43704__a = new Array(arguments.length -  0);
while (G__43704__i < G__43704__a.length) {G__43704__a[G__43704__i] = arguments[G__43704__i + 0]; ++G__43704__i;}
  args = new cljs.core.IndexedSeq(G__43704__a,0);
} 
return G__43703__delegate.call(this,args);};
G__43703.cljs$lang$maxFixedArity = 0;
G__43703.cljs$lang$applyTo = (function (arglist__43705){
var args = cljs.core.seq(arglist__43705);
return G__43703__delegate(args);
});
G__43703.cljs$core$IFn$_invoke$arity$variadic = G__43703__delegate;
return G__43703;
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

//# sourceMappingURL=debug.js.map?rel=1500064927921