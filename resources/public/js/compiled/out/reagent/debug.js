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
var G__35955__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35956__i = 0, G__35956__a = new Array(arguments.length -  0);
while (G__35956__i < G__35956__a.length) {G__35956__a[G__35956__i] = arguments[G__35956__i + 0]; ++G__35956__i;}
  args = new cljs.core.IndexedSeq(G__35956__a,0);
} 
return G__35955__delegate.call(this,args);};
G__35955.cljs$lang$maxFixedArity = 0;
G__35955.cljs$lang$applyTo = (function (arglist__35957){
var args = cljs.core.seq(arglist__35957);
return G__35955__delegate(args);
});
G__35955.cljs$core$IFn$_invoke$arity$variadic = G__35955__delegate;
return G__35955;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35958__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35959__i = 0, G__35959__a = new Array(arguments.length -  0);
while (G__35959__i < G__35959__a.length) {G__35959__a[G__35959__i] = arguments[G__35959__i + 0]; ++G__35959__i;}
  args = new cljs.core.IndexedSeq(G__35959__a,0);
} 
return G__35958__delegate.call(this,args);};
G__35958.cljs$lang$maxFixedArity = 0;
G__35958.cljs$lang$applyTo = (function (arglist__35960){
var args = cljs.core.seq(arglist__35960);
return G__35958__delegate(args);
});
G__35958.cljs$core$IFn$_invoke$arity$variadic = G__35958__delegate;
return G__35958;
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

//# sourceMappingURL=debug.js.map?rel=1499706452818