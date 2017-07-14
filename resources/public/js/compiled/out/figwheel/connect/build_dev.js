// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('tabber.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31686__delegate = function (x){
if(cljs.core.truth_(tabber.core.on_js_reload)){
return cljs.core.apply.call(null,tabber.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tabber.core/on-js-reload' is missing");
}
};
var G__31686 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31687__i = 0, G__31687__a = new Array(arguments.length -  0);
while (G__31687__i < G__31687__a.length) {G__31687__a[G__31687__i] = arguments[G__31687__i + 0]; ++G__31687__i;}
  x = new cljs.core.IndexedSeq(G__31687__a,0);
} 
return G__31686__delegate.call(this,x);};
G__31686.cljs$lang$maxFixedArity = 0;
G__31686.cljs$lang$applyTo = (function (arglist__31688){
var x = cljs.core.seq(arglist__31688);
return G__31686__delegate(x);
});
G__31686.cljs$core$IFn$_invoke$arity$variadic = G__31686__delegate;
return G__31686;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3451/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1500064706163