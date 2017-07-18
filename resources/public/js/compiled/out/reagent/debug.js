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
var G__34181__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34182__i = 0, G__34182__a = new Array(arguments.length -  0);
while (G__34182__i < G__34182__a.length) {G__34182__a[G__34182__i] = arguments[G__34182__i + 0]; ++G__34182__i;}
  args = new cljs.core.IndexedSeq(G__34182__a,0,null);
} 
return G__34181__delegate.call(this,args);};
G__34181.cljs$lang$maxFixedArity = 0;
G__34181.cljs$lang$applyTo = (function (arglist__34183){
var args = cljs.core.seq(arglist__34183);
return G__34181__delegate(args);
});
G__34181.cljs$core$IFn$_invoke$arity$variadic = G__34181__delegate;
return G__34181;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__34184__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34185__i = 0, G__34185__a = new Array(arguments.length -  0);
while (G__34185__i < G__34185__a.length) {G__34185__a[G__34185__i] = arguments[G__34185__i + 0]; ++G__34185__i;}
  args = new cljs.core.IndexedSeq(G__34185__a,0,null);
} 
return G__34184__delegate.call(this,args);};
G__34184.cljs$lang$maxFixedArity = 0;
G__34184.cljs$lang$applyTo = (function (arglist__34186){
var args = cljs.core.seq(arglist__34186);
return G__34184__delegate(args);
});
G__34184.cljs$core$IFn$_invoke$arity$variadic = G__34184__delegate;
return G__34184;
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

//# sourceMappingURL=debug.js.map?rel=1500403472823