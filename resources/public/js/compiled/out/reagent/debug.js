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
var G__52311__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__52311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52312__i = 0, G__52312__a = new Array(arguments.length -  0);
while (G__52312__i < G__52312__a.length) {G__52312__a[G__52312__i] = arguments[G__52312__i + 0]; ++G__52312__i;}
  args = new cljs.core.IndexedSeq(G__52312__a,0);
} 
return G__52311__delegate.call(this,args);};
G__52311.cljs$lang$maxFixedArity = 0;
G__52311.cljs$lang$applyTo = (function (arglist__52313){
var args = cljs.core.seq(arglist__52313);
return G__52311__delegate(args);
});
G__52311.cljs$core$IFn$_invoke$arity$variadic = G__52311__delegate;
return G__52311;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__52314__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__52314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52315__i = 0, G__52315__a = new Array(arguments.length -  0);
while (G__52315__i < G__52315__a.length) {G__52315__a[G__52315__i] = arguments[G__52315__i + 0]; ++G__52315__i;}
  args = new cljs.core.IndexedSeq(G__52315__a,0);
} 
return G__52314__delegate.call(this,args);};
G__52314.cljs$lang$maxFixedArity = 0;
G__52314.cljs$lang$applyTo = (function (arglist__52316){
var args = cljs.core.seq(arglist__52316);
return G__52314__delegate(args);
});
G__52314.cljs$core$IFn$_invoke$arity$variadic = G__52314__delegate;
return G__52314;
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

//# sourceMappingURL=debug.js.map?rel=1499366799094