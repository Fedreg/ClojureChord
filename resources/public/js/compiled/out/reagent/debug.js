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
var G__30310__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30311__i = 0, G__30311__a = new Array(arguments.length -  0);
while (G__30311__i < G__30311__a.length) {G__30311__a[G__30311__i] = arguments[G__30311__i + 0]; ++G__30311__i;}
  args = new cljs.core.IndexedSeq(G__30311__a,0,null);
} 
return G__30310__delegate.call(this,args);};
G__30310.cljs$lang$maxFixedArity = 0;
G__30310.cljs$lang$applyTo = (function (arglist__30312){
var args = cljs.core.seq(arglist__30312);
return G__30310__delegate(args);
});
G__30310.cljs$core$IFn$_invoke$arity$variadic = G__30310__delegate;
return G__30310;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30313__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30314__i = 0, G__30314__a = new Array(arguments.length -  0);
while (G__30314__i < G__30314__a.length) {G__30314__a[G__30314__i] = arguments[G__30314__i + 0]; ++G__30314__i;}
  args = new cljs.core.IndexedSeq(G__30314__a,0,null);
} 
return G__30313__delegate.call(this,args);};
G__30313.cljs$lang$maxFixedArity = 0;
G__30313.cljs$lang$applyTo = (function (arglist__30315){
var args = cljs.core.seq(arglist__30315);
return G__30313__delegate(args);
});
G__30313.cljs$core$IFn$_invoke$arity$variadic = G__30313__delegate;
return G__30313;
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

//# sourceMappingURL=debug.js.map?rel=1500333135155