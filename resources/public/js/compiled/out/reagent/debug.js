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
var G__49264__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49265__i = 0, G__49265__a = new Array(arguments.length -  0);
while (G__49265__i < G__49265__a.length) {G__49265__a[G__49265__i] = arguments[G__49265__i + 0]; ++G__49265__i;}
  args = new cljs.core.IndexedSeq(G__49265__a,0);
} 
return G__49264__delegate.call(this,args);};
G__49264.cljs$lang$maxFixedArity = 0;
G__49264.cljs$lang$applyTo = (function (arglist__49266){
var args = cljs.core.seq(arglist__49266);
return G__49264__delegate(args);
});
G__49264.cljs$core$IFn$_invoke$arity$variadic = G__49264__delegate;
return G__49264;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__49267__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49268__i = 0, G__49268__a = new Array(arguments.length -  0);
while (G__49268__i < G__49268__a.length) {G__49268__a[G__49268__i] = arguments[G__49268__i + 0]; ++G__49268__i;}
  args = new cljs.core.IndexedSeq(G__49268__a,0);
} 
return G__49267__delegate.call(this,args);};
G__49267.cljs$lang$maxFixedArity = 0;
G__49267.cljs$lang$applyTo = (function (arglist__49269){
var args = cljs.core.seq(arglist__49269);
return G__49267__delegate(args);
});
G__49267.cljs$core$IFn$_invoke$arity$variadic = G__49267__delegate;
return G__49267;
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

//# sourceMappingURL=debug.js.map?rel=1500065399813