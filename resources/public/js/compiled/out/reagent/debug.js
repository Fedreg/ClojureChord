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
var G__51420__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__51420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51421__i = 0, G__51421__a = new Array(arguments.length -  0);
while (G__51421__i < G__51421__a.length) {G__51421__a[G__51421__i] = arguments[G__51421__i + 0]; ++G__51421__i;}
  args = new cljs.core.IndexedSeq(G__51421__a,0);
} 
return G__51420__delegate.call(this,args);};
G__51420.cljs$lang$maxFixedArity = 0;
G__51420.cljs$lang$applyTo = (function (arglist__51422){
var args = cljs.core.seq(arglist__51422);
return G__51420__delegate(args);
});
G__51420.cljs$core$IFn$_invoke$arity$variadic = G__51420__delegate;
return G__51420;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__51423__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__51423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51424__i = 0, G__51424__a = new Array(arguments.length -  0);
while (G__51424__i < G__51424__a.length) {G__51424__a[G__51424__i] = arguments[G__51424__i + 0]; ++G__51424__i;}
  args = new cljs.core.IndexedSeq(G__51424__a,0);
} 
return G__51423__delegate.call(this,args);};
G__51423.cljs$lang$maxFixedArity = 0;
G__51423.cljs$lang$applyTo = (function (arglist__51425){
var args = cljs.core.seq(arglist__51425);
return G__51423__delegate(args);
});
G__51423.cljs$core$IFn$_invoke$arity$variadic = G__51423__delegate;
return G__51423;
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

//# sourceMappingURL=debug.js.map?rel=1499548748656