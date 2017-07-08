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
var G__29322__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29323__i = 0, G__29323__a = new Array(arguments.length -  0);
while (G__29323__i < G__29323__a.length) {G__29323__a[G__29323__i] = arguments[G__29323__i + 0]; ++G__29323__i;}
  args = new cljs.core.IndexedSeq(G__29323__a,0);
} 
return G__29322__delegate.call(this,args);};
G__29322.cljs$lang$maxFixedArity = 0;
G__29322.cljs$lang$applyTo = (function (arglist__29324){
var args = cljs.core.seq(arglist__29324);
return G__29322__delegate(args);
});
G__29322.cljs$core$IFn$_invoke$arity$variadic = G__29322__delegate;
return G__29322;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29325__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29326__i = 0, G__29326__a = new Array(arguments.length -  0);
while (G__29326__i < G__29326__a.length) {G__29326__a[G__29326__i] = arguments[G__29326__i + 0]; ++G__29326__i;}
  args = new cljs.core.IndexedSeq(G__29326__a,0);
} 
return G__29325__delegate.call(this,args);};
G__29325.cljs$lang$maxFixedArity = 0;
G__29325.cljs$lang$applyTo = (function (arglist__29327){
var args = cljs.core.seq(arglist__29327);
return G__29325__delegate(args);
});
G__29325.cljs$core$IFn$_invoke$arity$variadic = G__29325__delegate;
return G__29325;
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

//# sourceMappingURL=debug.js.map?rel=1499543322090