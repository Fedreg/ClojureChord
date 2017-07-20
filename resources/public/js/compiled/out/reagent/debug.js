// Compiled by ClojureScript 1.9.671 {}
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
var G__87061__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__87061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87062__i = 0, G__87062__a = new Array(arguments.length -  0);
while (G__87062__i < G__87062__a.length) {G__87062__a[G__87062__i] = arguments[G__87062__i + 0]; ++G__87062__i;}
  args = new cljs.core.IndexedSeq(G__87062__a,0,null);
} 
return G__87061__delegate.call(this,args);};
G__87061.cljs$lang$maxFixedArity = 0;
G__87061.cljs$lang$applyTo = (function (arglist__87063){
var args = cljs.core.seq(arglist__87063);
return G__87061__delegate(args);
});
G__87061.cljs$core$IFn$_invoke$arity$variadic = G__87061__delegate;
return G__87061;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__87064__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__87064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87065__i = 0, G__87065__a = new Array(arguments.length -  0);
while (G__87065__i < G__87065__a.length) {G__87065__a[G__87065__i] = arguments[G__87065__i + 0]; ++G__87065__i;}
  args = new cljs.core.IndexedSeq(G__87065__a,0,null);
} 
return G__87064__delegate.call(this,args);};
G__87064.cljs$lang$maxFixedArity = 0;
G__87064.cljs$lang$applyTo = (function (arglist__87066){
var args = cljs.core.seq(arglist__87066);
return G__87064__delegate(args);
});
G__87064.cljs$core$IFn$_invoke$arity$variadic = G__87064__delegate;
return G__87064;
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

//# sourceMappingURL=debug.js.map?rel=1500526514517